import logoIcon from "../assets/logo-mark.svg";
import githubIcon from "../assets/icon-github.svg";

const Ticket = ({ avatar, name, username, number }) => {
  return (
    <div className="from-gradientEnd to-gradientStart z-0 rounded-lg bg-gradient-to-r p-[1px]">
      <div className="bg-neutral700 z-10 flex w-full gap-4 divide-x-2 divide-dashed rounded-lg bg-opacity-40 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img className="w-8 object-contain" src={logoIcon} alt="Logo" />
            <div>
              <span className="text-2xl font-bold">Coding Conf</span>
              <p>Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>
          <div className="flex gap-2">
            <img
              className="w-12 rounded-lg object-contain"
              src={avatar}
              alt="Avatar"
            />
            <div className="flex flex-col">
              <span>{name}</span>
              <div className="flex gap-1">
                <img src={githubIcon} alt="GitHub" />
                <span>{username}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <span className="rotate-90 transform">
            #{number.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
