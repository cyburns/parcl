import Cards from "@/components/Card";
import Footer from "@/components/Footer";
import Table from "@/components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="max-w-[800px]">
        <Cards />
        <Table />
        <Footer />
      </div>
      <div>

      </div>
    </main>
  );
}
