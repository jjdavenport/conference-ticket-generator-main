import logoIcon from "../assets/logo-mark.svg";
import githubIcon from "../assets/icon-github.svg";

const Ticket = ({ input }) => {
  return (
    <div className="flex aspect-video w-full min-w-[18rem] max-w-[25rem] items-center justify-between bg-ticket bg-contain bg-center bg-no-repeat ~sm/md:~py-4/7 md:max-w-[36rem] md:backdrop-blur-md">
      <div className="flex h-full flex-col justify-between p-3 md:p-6">
        <div className="flex items-start ~sm/md:~gap-2/4">
          <img
            className="object-contain pt-2 ~sm/md:~w-8/10"
            src={logoIcon}
            alt="Logo"
          />
          <div className="flex flex-col ~sm/md:~gap-1/2">
            <span className="text-2xl font-bold md:text-4xl">Coding Conf</span>
            <p className="text-sm text-neutral300 md:text-base">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>
        </div>
        <div className="flex ~sm/md:~gap-2/4 md:items-center">
          <img
            className="w-12 rounded-xl object-contain md:w-20"
            src={input.avatar}
            alt="Avatar"
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-3xl">{input.name}</span>
            <div className="flex items-center ~sm/md:~gap-1/2">
              <img src={githubIcon} alt="GitHub" />
              <span className="text-sm text-neutral300 md:text-base">
                {input.username}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center p-3 md:p-8">
        <span className="text-neutral500 vertical-rl ~sm/md:~text-2xl/3xl">
          {input.ticket}
        </span>
      </div>
    </div>
  );
};

export default Ticket;
