import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Items from "@/components/Items";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Items />
      </div>
      <Footer />
    </main>
  );
}
