import { supabase } from "./supabase";

export const sendEmail = async (
  to: string,
  message: string,
  userEmail: string
) => {
  const { data, error } = await supabase.functions.invoke("send-email", {
    to,
    message,
    userEmail,
  });

  if (error) {
    throw error;
  }

  return data;
};
