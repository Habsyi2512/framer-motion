import Sidebar from "@/components/sidebar/Sidebar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Main />
    </main>
  );
}
