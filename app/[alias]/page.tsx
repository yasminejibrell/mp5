
import { permanentRedirect , redirect } from "next/navigation";
import getLink from "../lib/getLink";

export default async function Page({
    params,
}: {
    params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  const url = await getLink(alias);

  if (url) {
    return permanentRedirect(url);
  }

  return redirect("/");
}