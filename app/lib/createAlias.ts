"use server";
import getCollection, {ALIASES_COLLECTION} from "../db";
import { AliasProps } from "../types";
import getLink from "./getLink";

export default async function createAlias(
    a: AliasProps
): Promise<string> {
    const { alias, url } = a;

    if (!url || !alias) {
        return "url or alias missing";
    } else if (
        url.startsWith("https://CS391URL-Shortener.com")
    ) {
        return "invalid url";
    }
    try {
        const res = await fetch(url);
        if (res.status < 200 || res.status >= 500) {
          console.log("invalid url response", res.status);
          return "invalid url";
        }
      } catch {
        return "invalid url";
      }

    const aliasesCollection = await getCollection(ALIASES_COLLECTION);
    
    const existingAlias = await getLink(alias);
    
    if (existingAlias) {
        return "Sorry! Alias is taken.";
    } 
    
    const res = await aliasesCollection.insertOne({ alias, url });

    return res.acknowledged ? "" : "Error: try again.";
}

