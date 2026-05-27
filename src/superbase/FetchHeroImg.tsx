import supabase from "./Client";

export async function FetchHeroImg() {
  const { data, error } = await supabase().from("Hero-images").select("*").order('img _order', { ascending: true });

  if (error) throw error;
  console.error(error); 
  return data;
  
}