import { useState } from "react";

const useValidator = (input, setInput, setValid) => {
  const [error, setError] = useState({
    upload: "",
    name: "",
    email: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      error.upload === null &&
      error.name === null &&
      error.email === null &&
      error.username === null
    ) {
      setValid(true);
    } else {
      handleBlur("name", input.name);
      handleBlur("email", input.email);
      handleBlur("username", input.username);

      if (!input.avatar) {
        setError((prev) => ({
          ...prev,
          upload: "Please upload an avatar.",
        }));
      }
    }
  };

  const handleBlur = (name, value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let errorMessage = null;

    if (!value) {
      errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} cannot be empty`;
    } else if (name === "email" && !value.match(regex)) {
      errorMessage = "Please enter a valid email address";
    }

    setError((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleRemove = () => {
    setInput((prev) => ({
      ...prev,
      avatar: null,
    }));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let file;
    if (e.dataTransfer) {
      file = e.dataTransfer.files[0];
    } else if (e.target.files) {
      file = e.target.files[0];
    }

    if (!file) {
      setError((prev) => ({
        ...prev,
        upload: "Please select a file.",
      }));
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError((prev) => ({
        ...prev,
        upload: "File is the wrong format. Please upload a jpeg or png.",
      }));
      return;
    }

    if (file.size > 500 * 1024) {
      setError((prev) => ({
        ...prev,
        upload: "File too large. Please upload a file under 500KB.",
      }));
      return;
    }

    setError((prev) => ({
      ...prev,
      upload: null,
    }));

    setInput((prev) => ({
      ...prev,
      avatar: URL.createObjectURL(file),
    }));
  };

  return {
    error,
    handleSubmit,
    handleBlur,
    handleRemove,
    handleUpload,
  };
};

export default useValidator;
