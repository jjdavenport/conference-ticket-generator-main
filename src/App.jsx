import { useState } from "react";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";
import avatarImg from "./assets/image-avatar.jpg";

function App() {
  const [name, setName] = useState("Johnatan Kristof");
  const [email, setEmail] = useState("johnatan@email.com");
  const [avatar, setAvatar] = useState(avatarImg);
  const [username, setUsername] = useState("johnatankristof");
  const [number, setNumber] = useState(1);
  const [valid, setValid] = useState(false);
  const img = avatar;
  return (
    <>
      {!valid ? (
        <PageTwo
          email={email}
          username={username}
          number={number}
          avatar={avatar}
          name={name}
        />
      ) : (
        <PageOne />
      )}
    </>
  );
}

export default App;
