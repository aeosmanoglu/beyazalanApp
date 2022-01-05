import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout title="Beyaz Alan" />

      <main className="container">
        <Link href="/add">
          <a>Ekle</a>
        </Link>
      </main>
    </div>
  );
}
