import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Message({ message, username }) {
  const isUser = username === message.username;
  return (
    <div
      className={`p-2 m-2 w-fit ${isUser && "ml-auto text-white text-left "}  `}
    >
      <Card
        class={
          isUser
            ? "bg-blue-800 sm:bg-black sm:text-white md:bg-blue-800"
            : "bg-gray-200"
        }
      >
        <CardContent>
          <Typography>
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
