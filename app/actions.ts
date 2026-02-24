"use server";

export interface Person {
  name: string;
  birth: string;
  death: string;
  text: string;
  link: string;
  path: string;
}

export async function getData(): Promise<Person[]> {
  const res = await fetch("https://api.huljak.cz/school/rekola-project", {
    next: { revalidate: 86400 },
    headers: {
      "x-api-key": process.env.API_KEY || "",
    },
  });

  if (!res.ok) {
    throw new Error("Chyba při načítání dat");
  }

  return res.json();
}
