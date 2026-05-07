import UpdateForm from "@/components/UpdateForm";
export const metadata = {
  title: "Update",
};
const UpdatePage = () => {
  return (
    <section className="flex-1 flex items-center justify-center">
      <div className="mx-auto bg-base-100 border-base-300 rounded-box  border p-6 md:p-20 my-8">
        <h1 className="text-xl md:text-3xl font-bold w-fit mx-auto">
          Login your account
        </h1>
        <br />
        <hr className="text-black/30 my-4" />
        <UpdateForm />
      </div>
    </section>
  );
};

export default UpdatePage;
