import CompletedTitle from "../components/completed-title";
import Ticket from "../components/ticket";
import Footer from "../components/footer";
import Logo from "../components/logo";

const PageTwo = ({ number, username, avatar, name, email }) => {
  return (
    <>
      <div className="font-custom bg-mobile md:bg-tablet text-neutral0 lg:bg-desktop flex h-full min-h-screen flex-col gap-4 bg-cover bg-left">
        <div className="flex flex-1 flex-col items-center gap-8 bg-contain bg-top bg-no-repeat px-4 py-10">
          <Logo />
          <CompletedTitle email={email} name={name} />
          <Ticket
            number={number}
            username={username}
            avatar={avatar}
            name={name}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageTwo;
