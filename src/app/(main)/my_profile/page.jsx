import Profile from "@/components/Profile";
import TilesMarquee from "@/components/TilesMarquee";
import Link from "next/link";

export const metadata = {
  title: "My Profile",
};

const MyProfilePage = () => {
  return (
    <section>
      <TilesMarquee />
      <div className="flex flex-col gap-8 max-h-screen justify-center items-center textMe mt-10">
        <Profile />
        <Link href={"/update_profile"} className="btnMe p-6 text-2xl">
          Update Profile
        </Link>
      </div>
    </section>
  );
};

export default MyProfilePage;
