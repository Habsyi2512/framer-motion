import Sidebar from "@/components/sidebar/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <MainContent />
    </main>
  );
}
