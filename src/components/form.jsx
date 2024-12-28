import useValidator from "../hooks/useValidator";
import Input from "./input";
import Upload from "./upload";
import SubmitButton from "./submit-button";

const Form = ({ input, setInput, setValid }) => {
  const { error, handleSubmit, handleBlur, handleRemove, handleUpload } =
    useValidator(input, setInput, setValid);

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
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
