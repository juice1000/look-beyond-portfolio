import { supabase } from "./supabase";

export const sendEmail = async (email: string, message: string) => {
  const { data, error } = await supabase.functions.invoke("send-email", {
    body: {
      email,
      message,
      subject: "Look Beyond Contact Form",
    },
  });

  if (error) {
    throw error;
  }

  return data;
};
