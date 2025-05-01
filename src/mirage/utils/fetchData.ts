import { getOrigin } from "./getOrigin";

interface FetchData {
  apiName: string;
}

export async function fetchData({ apiName }: FetchData) {
  const origin = getOrigin();
  const res = await fetch(`${origin}/api${apiName}`);
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();

  return data;
}
