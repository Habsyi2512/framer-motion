import Sidebar from "@/components/sidebar/Sidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full bg-red-200">
        <header className="h-14 bg-red-200">head</header>
        <MainContent />
      </div>
    </main>
  );
}
