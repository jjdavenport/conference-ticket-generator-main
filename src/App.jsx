import Logo from "./components/logo";
import Title from "./components/title";
import Footer from "./components/footer";
import Form from "./components/form";
import CompletedTitle from "./components/completed-title";
import Ticket from "./components/ticket";
import { useState } from "react";
import { use } from "react";

function App() {
  const [name, setName] = useState("Johnatan");
  const [avatar, setAvatar] = useState("./");
  const [username, setUsername] = useState("johnatankristof");
  const [number, setNumber] = useState(1);
  return (
    <>
      <div className="flex h-full min-h-screen flex-col gap-4">
        <div className="flex flex-1 flex-col gap-4">
          <Logo />
          <Title />
          <Form />
          <CompletedTitle />
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
}

export default App;
