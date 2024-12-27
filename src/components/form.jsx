import { useState } from "react";
import Input from "./input";
import Upload from "./upload";

const Form = ({ input, setInput, setValid }) => {
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
    const file = e.target.files[0];
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

  return (
    <>
      <form
        className="flex w-full flex-col gap-4 ~sm/md:~pb-10/0 md:max-w-[31.25rem]"
        noValidate
        onSubmit={handleSubmit}
      >
        <Upload
          avatar={input.avatar}
          reset={handleRemove}
          onChange={handleUpload}
          error={error.upload}
        />
        <Input
          placeholder=""
          label="Full Name"
          type="text"
          error={error.name}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, name: e.target.value }))
          }
          value={input.name}
          onBlur={(e) => handleBlur("name", e.target.value)}
        />
        <Input
          placeholder="example@email.com"
          label="Email Address"
          type="email"
          error={error.email}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
          value={input.email}
          onBlur={(e) => handleBlur("email", e.target.value)}
        />
        <Input
          placeholder="@yourusername"
          label="GitHub Username"
          type="text"
          error={error.username}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, username: e.target.value }))
          }
          value={input.username}
          onBlur={(e) => handleBlur("username", e.target.value)}
        />
        <button
          className="rounded-xl bg-orange500 p-3 text-lg font-extrabold text-neutral900 duration-300 ease-in-out hover:bg-orange700 hover:shadow-[0_4px_0_0_theme('colors.orange500')] hover:transition-all focus:shadow-none focus:outline focus:outline-1 focus:outline-offset-3 focus:outline-neutral0 focus:transition-colors"
          type="submit"
        >
          Generate My Ticket
        </button>
      </form>
    </>
  );
};

export default Form;
