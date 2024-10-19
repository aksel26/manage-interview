import React, { useState, useEffect } from "react";
import io from "socket.io-client";
// import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Button, Flex, Input, SegmentedControl } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IndicatorComponent } from "./UI/IndicatorComponent";

const SOCKET_SERVER_URL = "http://localhost:3001";
type IndicatorComponentProps = {
  label: string;
  value: string;
};
const SocketClient = () => {
  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<any>([]);
  const [inputMessage, setInputMessage] = useState("");

  // useEffect(() => {
  //   // 소켓 연결 설정
  //   const newSocket = io(SOCKET_SERVER_URL);
  //   setSocket(newSocket);

  //   // 컴포넌트가 언마운트될 때 소켓 연결 해제
  //   return () => {
  //     newSocket.close();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!socket) return;

  //   // 서버로부터 메시지 수신
  //   socket.on("message", (message: any) => {
  //     setMessages((prevMessages: any) => [...prevMessages, message]);
  //   });
  // }, [socket]);

  // const sendMessage = (e: any) => {
  //   e.preventDefault();
  //   if (inputMessage && socket) {
  //     socket.emit("message", inputMessage);
  //     setInputMessage("");
  //   }
  // };
  const [userType, setUserType] = useState<any>("ADVISOR");
  console.log("🚀 ~ SocketClient ~ userType:", userType);

  const navigate = useNavigate();
  const submit = () => {
    navigate(`/${userType}`);
  };

  return (
    <div>
      {/* <ul>
        {messages.map((message: any, index: number) => (
          <li key={index}>{message}</li>
        ))}
      </ul> */}

      <form onSubmit={submit}>
        <Flex direction={"column"} rowGap={10}>
          <SegmentedControl
            color="blue"
            value={userType}
            onChange={setUserType}
            data={[
              { label: "면접관", value: "ADVISOR" },
              { label: "매니저", value: "MANAGER" },
              { label: "관리자", value: "ADMIN" },
            ]}
          />
          {/* <IndicatorComponent userType={userType} setUserType={setUserType} /> */}
          <Input placeholder="Input component" />
          <Input type="password" />
          <Button type="submit">로그인</Button>
        </Flex>
      </form>
      {/* <Button>asd</Button> */}
      {/* <Button
        onClick={() =>
          notifications.show({
            title: "Default notification",
            message: "Do not forget to star Mantine on GitHub! 🌟",
          })
        }
      >
        Show notification
      </Button> */}
    </div>
  );
};

export default SocketClient;
