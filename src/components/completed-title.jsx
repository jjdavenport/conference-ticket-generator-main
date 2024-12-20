const CompletedTitle = ({ name, email }) => {
  return (
    <>
      <h2>Congrats, {name}! Your ticket is ready.</h2>
      <p>
        We've emailed your ticket to {email} and will send updates in the run up
        to the event.
      </p>
    </>
  );
};

export default CompletedTitle;
