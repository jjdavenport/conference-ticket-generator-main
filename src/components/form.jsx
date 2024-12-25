import { useState } from "react";
import Input from "./input";
import Upload from "./upload";

const Form = ({ input, setInput }) => {
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState({
    upload: null,
    name: null,
    email: null,
    username: null,
  });

  const reset = () => {
    setInput((prev) => ({
      ...prev,
      avatar: null,
    }));
    setTimeout(() => setUploaded(false), 0);
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
    setUploaded(true);
    setInput((prev) => ({
      ...prev,
      avatar: URL.createObjectURL(file),
    }));
  };

  return (
    <>
      <form
        className="flex w-full flex-col gap-6 ~sm/md:~pb-10/0 md:max-w-[500px]"
        noValidate
        onSubmit={(e) => e.preventDefault()}
      >
        <Upload
          uploaded={uploaded}
          avatar={input.avatar}
          reset={reset}
          onChange={handleUpload}
          error={error.upload}
        />
        <Input
          placeholder=""
          label="Full Name"
          type="text"
          error={error.name}
          onChange={(e) => setInput({ name: e.target.value })}
          value={input.name}
        />
        <Input
          placeholder="example@email.com"
          label="Email Address"
          type="email"
          error={error.email}
          onChange={(e) => setInput({ name: e.target.value })}
          value={input.email}
        />
        <Input
          placeholder="@yourusername"
          label="GitHub Username"
          type="text"
          error={error.username}
          onChange={(e) => setInput({ name: e.target.value })}
          value={input.username}
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
