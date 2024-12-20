import Input from "./input";
import Upload from "./upload";

const Form = () => {
  return (
    <>
      <form className="flex flex-col gap-4" noValidate onSubmit={(e) => e.preventDefault()}>
        <Upload />
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
        <button type="submit">Generate My Ticket</button>
      </form>
    </>
  );
};

export default Form;
