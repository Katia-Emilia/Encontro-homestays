import supabase from "./Client";

export async function FetchBeyondImg() {
  const { data, error } = await supabase().from("Beyond the house").select("*").order('order', { ascending: true });

  if (error) throw error;
  console.error(error); 
  return data;
  
}