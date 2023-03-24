import { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { FormControl, Input, InputLabel } from "@mui/material";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "abc", text: "123" },
    { username: "abc2", text: "2" },
    { username: "abc3", text: "3" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("please enter your name"));
    console.log("meeee!!");
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);

    setInput("");
    console.log("i am clicked");
  };

  return (
    <div className="App">
      <h2>Hello {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter your message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
          />

          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            send message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
