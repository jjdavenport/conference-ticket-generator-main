import { useState } from "react";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";

function App() {
  const [input, setInput] = useState({
    avatar: null,
    name: "",
    email: "",
    username: "",
    ticket: "#01609",
  });
  const [valid, setValid] = useState(false);
  return (
    <>
      {valid ? (
        <PageTwo input={input} />
      ) : (
        <PageOne setValid={setValid} setInput={setInput} input={input} />
      )}
    </>
  );
}

export default App;
