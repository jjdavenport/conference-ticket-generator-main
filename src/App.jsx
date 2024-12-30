import useForm from "./hooks/useForm";
import Controller from "./components/controller";

function App() {
  const { input, setInput, valid, setValid } = useForm();
  return (
    <>
      <Controller
        valid={valid}
        setValid={setValid}
        setInput={setInput}
        input={input}
      />
    </>
  );
}

export default App;
