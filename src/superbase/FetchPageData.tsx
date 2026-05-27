import supabase from "./Client";

export async function fetchPageData() {
  const { data, error } = await supabase().from("Page_Data").select("*").eq('id', 1);

  if (error) throw error;
  console.error(error); 
  return data;
  
}