import NavBar from "@/components/NavBar";
import { montserrat } from "../layout";
import TilesMarquee from "@/components/TilesMarquee";

const AuthLayout = ({ children }) => {
  return (
    <section className="min-h-screen flex flex-col">
      <section className="sticky top-0 z-50">
        <NavBar />
      </section>
      <TilesMarquee />
      <main className="flex-1 flex bgLogin">{children}</main>
    </section>
  );
};

export default AuthLayout;
