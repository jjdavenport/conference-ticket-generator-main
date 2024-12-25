import { useState } from "react";
import Input from "./input";
import Upload from "./upload";

const Form = ({ avatar, setAvatar }) => {
  const [uploaded, setUploaded] = useState(true);

  const reset = () => {
    setAvatar(null);
    setTimeout(() => setUploaded(false), 0);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      console.log("Invalid file type");
      return;
    }
    if (file.size > 500 * 1024) {
      console.log("File too large");
      return;
    }
    console.log("uploaded");
    setUploaded(true);
    setAvatar(URL.createObjectURL(file));
  };

  return (
    <>
      <form
        className="flex w-full flex-col gap-6 ~sm/md:~pb-10/0 md:max-w-[500px]"
        noValidate
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="group flex w-full flex-col gap-2">
          Upload Avatar
          <Upload
            uploaded={uploaded}
            avatar={avatar}
            reset={reset}
            onChange={handleUpload}
          />
        </label>
        <Input placeholder="" label="Full Name" type="text" />
        <Input
          placeholder="example@email.com"
          label="Email Address"
          type="email"
        />
        <Input
          placeholder="@yourusername"
          label="GitHub Username"
          type="text"
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
