import CompletedTitle from "../components/completed-title";
import Ticket from "../components/ticket";
import Footer from "../components/footer";
import Logo from "../components/logo";

const PageTwo = ({ input }) => {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col items-center gap-4 bg-[url('../src/assets/pattern-squiggly-line-top.svg'),url('../src/assets/pattern-squiggly-line-bottom.svg'),url('../src/assets/pattern-lines.svg'),url('../src/assets/pattern-circle.svg'),url('../src/assets/pattern-circle.svg'),url('../src/assets/background-mobile.png')] bg-no-repeat font-custom text-neutral0 [background-position:top_2%_right,bottom_left_-10%,top_left,top_-4%_left_-10%,bottom_38%_right_-15%,center] [background-size:30%,80%,auto_70%,30%,25%,cover] md:[background-image:url('../src/assets/pattern-squiggly-line-top.svg'),url('../src/assets/pattern-squiggly-line-bottom.svg'),url('../src/assets/pattern-lines.svg'),url('../src/assets/pattern-circle.svg'),url('../src/assets/pattern-circle.svg'),url('../src/assets/background-tablet.png')] md:[background-position:top_10%_right,bottom_left,top_center,top_-8%_left_6%,bottom_48%_right_24%,center] md:[background-size:30%,57%,cover,12%,13%,cover] lg:[background-image:url('../src/assets/pattern-squiggly-line-top.svg'),url('../src/assets/pattern-squiggly-line-bottom.svg'),url('../src/assets/pattern-lines.svg'),url('../src/assets/pattern-circle.svg'),url('../src/assets/pattern-circle.svg'),url('../src/assets/background-desktop.png')]">
        <div className="flex flex-1 flex-col items-center px-4 py-10 text-xl ~sm/md:~gap-8/10 md:max-w-screen-md">
          <Logo />
          <CompletedTitle email={input.email} name={input.name} />
          <Ticket input={input} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageTwo;
