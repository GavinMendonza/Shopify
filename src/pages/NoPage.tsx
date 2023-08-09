import Navbar from "../components/Navbar";

const NoPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="h-[75vh] grid place-items-center text-white">
        404: Page not found!
      </h1>
    </>
  );
};

export default NoPage;
