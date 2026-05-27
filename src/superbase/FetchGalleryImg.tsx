import supabase from "./Client";

export async function FetchGalleryImg() {
  const { data, error } = await supabase().from("Gallery_images").select("*").order('img _order', { ascending: true });

  if (error) throw error;
  console.error(error); 
  return data;
  
}