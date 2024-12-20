import logoIcon from "../assets/logo-mark.svg";
import githubIcon from "../assets/icon-github.svg";

const Ticket = ({ avatar, name, username, number }) => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <img src={logoIcon} />
            <div>
              <span>Coding Conf</span>
              <p>Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>
          <div className="flex">
            <img src={avatar} />
            <div className="flex flex-col">
              <span>{name}</span>
              <div className="flex">
                <img src={githubIcon} />
                <span>{username}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>#{number}</span>
        </div>
      </div>
    </>
  );
};

export default Ticket;
