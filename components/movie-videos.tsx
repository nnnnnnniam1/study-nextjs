import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) { 
  console.log(`Fetching vidoes: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));  //로딩
  throw new Error('something broke...');
  // const response = await fetch(`${API_URL}/${id}`);
  // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
  
}