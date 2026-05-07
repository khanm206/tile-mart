import Profile from "@/components/Profile";
import Link from "next/link";

export const metadata = {
  title: "My Profile",
};

const MyProfilePage = () => {
  return (
    <section className="flex flex-col gap-8 min-h-screen justify-center items-center textMe">
      <Profile />
      <Link href={"/update_profile"} className="btnMe p-6 text-2xl">
        Update Profile
      </Link>
    </section>
  );
};

export default MyProfilePage;
