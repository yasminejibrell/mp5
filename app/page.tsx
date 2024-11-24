
import HomePage from "./components/home";

export default async function Home() {
  return (
    <div className="bg-red-100 p-4 min-h-screen">
      <div className="bg-red-300 rounded-xl p-4 m-2 w-200 ">
        <HomePage />
      </div>
    </div>
  );
}