import ActiveLabel from "./components/active-label";
import NotActiveLabel from "./components/not-active-label";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600">Hello, Tailwind!</h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
