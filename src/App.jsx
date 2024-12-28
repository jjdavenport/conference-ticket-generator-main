import useForm from "./hooks/useForm";
import PageOne from "./pages/page-one";
import PageTwo from "./pages/page-two";

function App() {
  const { input, setInput, valid, setValid } = useForm();
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
