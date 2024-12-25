import logoIcon from "../assets/logo-mark.svg";
import githubIcon from "../assets/icon-github.svg";

const Ticket = ({ input }) => {
  return (
    <div className="z-10 flex w-full gap-4 rounded-lg bg-neutral700 bg-opacity-40 bg-ticket bg-contain bg-no-repeat p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <img className="w-8 object-contain pt-2" src={logoIcon} alt="Logo" />
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold">Coding Conf</span>
            <p className="text-sm text-neutral300">Jan 31, 2025 / Austin, TX</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            className="w-12 rounded-lg object-contain"
            src={input.avatar}
            alt="Avatar"
          />
          <div className="flex flex-col">
            <span className="text-lg">{input.name}</span>
            <div className="flex items-center gap-1">
              <img src={githubIcon} alt="GitHub" />
              <span className="text-sm text-neutral300">{input.username}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <span className="vertical-rl">
          #{input.ticket.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Ticket;
