import { supabase } from "../lib/supabase";

async function fetchRowById(tableName: string, id: string) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }

    console.log(`Data from ${tableName} with id ${id}:`, data);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

fetchRowById("Time Trigger", "1");
