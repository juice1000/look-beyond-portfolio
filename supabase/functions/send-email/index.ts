// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import nodemailer from "npm:nodemailer";
import { corsHeaders } from "../_shared/cors.ts";

Deno.serve(async (req) => {
  console.log("corsHeaders", corsHeaders);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const { email, message, subject } = await req.json();

  if (!subject || !message || !email) {
    return new Response("Missing parameters", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: Deno.env.get("GMAIL_USER"),
      pass: Deno.env.get("GMAIL_PASS"),
    },
  });

  try {
    await transporter.sendMail({
      from: Deno.env.get("GMAIL_USER"),
      to: "julien@lookbeyond.sg",
      subject,
      text: message,
      replyTo: email,
    });

    return new Response(JSON.stringify({ message: "Email sent!" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-email' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
