"use client";
import { useEffect } from "react";

// Router
import { useRouter } from "next/navigation";

// Components
import {
  ChatContainer,
  Separator,
  SideBar,
  SideBarBody,
  SideBarHeader,
  UserHeaderInfo,
} from "../lib/components";

// Styles
import "./chat.css";

// Services
import HttpClient from "../lib/utils/HttpClient/client";

// Vendor
import { useQuery } from "@tanstack/react-query";
import ChatItem from "../lib/components/ChatItem/ChatItem";

// Types
import { UserStates } from "../@types/components";

export default function Chat() {
  //#region hooks
  const router = useRouter();
  const { isLoading, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const service = new HttpClient();
      service.setConfig({
        credentials: "include",
      });
      try {
        const request = await service.get("user");
        const data = await request.json();
        return data;
      } catch (error) {
        return error;
      }
    },
  });
  //#endregion

  useEffect(() => {
    // const socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);
    // socket.addEventListener("open", () => {
    //   socket.send("Hello, world!");
    // });
    // socket.addEventListener("message", (e) => {
    //   console.log("Meesage received", e.data);
    // });
  }, []);

  useEffect(() => {
    if (data && data.OK === false) router.replace("/login");
  }, [data]);

  return (
    <div className="chat-container">
      <ChatContainer>a</ChatContainer>
      <SideBar className="col-start-2 w-full">
        <SideBarHeader>
          <UserHeaderInfo name="Usuario" status={UserStates.AVAILABLE} />
        </SideBarHeader>
        <Separator />
        <SideBarBody>
          <ChatItem username="Pablo" message="Hola Mundo!" />
          <Separator />
          <ChatItem username="Usuario" message="Hola Mundo!" />
          <Separator />
        </SideBarBody>
      </SideBar>
    </div>
  );
}
