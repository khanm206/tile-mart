import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col">
      <section className="sticky top-0 z-50">
        <NavBar />
      </section>
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
