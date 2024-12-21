const CompletedTitle = ({ name, email }) => {
  return (
    <>
      <div className="flex flex-col gap-6 text-center">
        <h2 className="inline text-3xl font-extrabold">
          Congrats,
          <span className="from-gradientStart to-gradientEnd bg-gradient-to-r bg-clip-text pl-1 text-transparent">
            {name}
          </span>
          ! Your ticket is ready.
        </h2>
        <p className="text-neutral300 inline text-lg">
          We've emailed your ticket to
          <span className="text-orange500 pl-1">{email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>
    </>
  );
};

export default CompletedTitle;
