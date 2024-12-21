import Footer from "../components/footer";
import Title from "../components/title";
import Form from "../components/form";
import Logo from "../components/logo";

const PageOne = () => {
  return (
    <>
      <div className="font-custom bg-mobile md:bg-tablet text-neutral0 lg:bg-desktop flex h-full min-h-screen flex-col gap-4 bg-cover">
        <div className="flex flex-1 flex-col items-center gap-8 bg-contain bg-top bg-no-repeat px-4 py-10">
          <Logo />
          <Title />
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageOne;
