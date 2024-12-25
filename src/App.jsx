import { useState } from "react";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";
import avatarImg from "./assets/image-avatar.jpg";

function App() {
  const [input, setInput] = useState({
    avatar: avatarImg,
    name: "Johnatan Kristof",
    email: "johnatan@email.com",
    username: "@johnatankristof",
    ticket: "#01609",
  });
  const [valid, setValid] = useState(false);
  return (
    <>
      {valid ? (
        <PageTwo input={input} />
      ) : (
        <PageOne setInput={setInput} input={input} />
      )}
    </>
  );
}

export default App;
