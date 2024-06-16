import { useState } from "react";
import "./App.css";
import { GithubUserSearch, UserCreds } from "./components";

function App() {
  const [fulfilled, setFulfilled] = useState(false);
  return (
    <>
      <div className="App">
        <GithubUserSearch />
        {fulfilled ? <UserCreds /> : null}
      </div>
    </>
  );
}

export default App;
