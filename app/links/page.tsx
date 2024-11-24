import getCollection, {ALIASES_COLLECTION} from "../db";
import Link from "next/link";

export default async function Links() {
  const aliasesCollection = await getCollection(ALIASES_COLLECTION);
  const links = await aliasesCollection.find({}).toArray();

  return (
    <div className="bg-red-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-red-700 text-4xl font-semibold text-center mb-3 p-4">Link Directory</h1>
      <h1 className="text-red-900 font-semibold text-center mb-8">Look here to see which aliases have already been taken!</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {links.map((alias, index) => (
          <div
            key={index}
            className="bg-red-200 p-5 rounded-xl w-full sm:w-96"
          >
            <h3 className="text-lg text-gray-600 underline font-semibold text-center">Link {index}</h3>
            <div className="text-lg text-gray-600">
              <p>- Alias: {alias.alias}</p>
              <p>- Original URL:</p>
              <Link className="p-1 text-blue-500 underline" href={alias.url} target="_blank">
                {alias.url}
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}