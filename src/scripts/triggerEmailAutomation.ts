import { supabase } from "../lib/supabase";
import { sendEmail } from "../lib/sendEmail";

export async function fetchRowById() {
  try {
    const { data: time_trigger, error } = await supabase
      .from("time_trigger")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    return time_trigger;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

export async function triggerEmailAutomation(last_triggered: string): void {
  const lastTriggeredDate = new Date(last_triggered);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - lastTriggeredDate.getTime();
  const timeDifferenceInDays = timeDifference / (1000 * 60 * 60 * 24);

  if (timeDifferenceInDays > 5) {
    // Send the email
    sendEmail(
      "julienlook@gmx.de",
      "Hey, your email automation was triggered due to long inactivy!"
    );

    // Update the last_triggered date in the database
    updateRowById({
      last_triggered: currentDate.toISOString(),
    });
  }
}

export async function updateRowById(newData: Record<string>) {
  try {
    const { data, error } = await supabase
      .from("time_trigger")
      .update(newData)
      .eq("id", 1);

    if (error) {
      console.error("Error updating data:", error);
      return null;
    }

    console.log(`Updated timestamp in time_trigger`);

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}
