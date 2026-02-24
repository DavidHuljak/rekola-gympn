import { notFound } from "next/navigation";
import DetailClient from "./DetailClient";
import { getData } from "../actions";

export default async function PersonDetail({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const resolvedParams = await params;
  const data = await getData();
  const person = data.find((p) => p.path === resolvedParams.path);

  if (!person) {
    notFound();
  }

  return <DetailClient person={person} />;
}
