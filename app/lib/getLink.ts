import getCollection, { ALIASES_COLLECTION } from "../db";

export default async function getLink(alias: string): Promise<string | null> {
  if (!alias) {
    return null;
  }

  const aliasesCollection = await getCollection(ALIASES_COLLECTION);
  const data = await aliasesCollection.findOne({ alias });

  if (!data) {
    return null;
  }

    return data.url;
}