import React from "react";

function App() {
  return (
    <div>
      <CTA>
        <h1>This is an important Call To Action!</h1>
        <button>Click me or you will miss out!</button>
      </CTA>
      <CTA position={"right"}>
        <Navbar backgroundColor="firebrick" />
        <Button backgroundColor="blue" text="Click me!" />
      </CTA>
      <CTA>
        <form>
          <input type={"email"} placeholder={"Enter email address here:"} />
          <br />
          <button>Submit!</button>
        </form>
      </CTA>
    </div>
  );
}

export default App;
