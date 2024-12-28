import { useState } from "react";

const useForm = () => {
  const [valid, setValid] = useState(false);
  const [input, setInput] = useState({
    avatar: null,
    name: "",
    email: "",
    username: "",
    ticket: "#01609",
  });
  return {
    input,
    setInput,
    valid,
    setValid,
  };
};

export default useForm;
