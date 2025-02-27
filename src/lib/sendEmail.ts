import { supabase } from "./supabase";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const { data, error } = await supabase.functions.invoke("send-email", {
    name,
    userEmail: email,
    message,
    subject: "Look Beyond Contact Form",
  });

  if (error) {
    throw error;
  }

  return data;
};
