
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock conversation data
const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    lastMessage: "Your latest test results look good. Keep up the good work!",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    lastMessage: "Let's schedule a follow-up appointment next week.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Nurse Emily Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    lastMessage: "Don't forget to take your medication tonight.",
    time: "Monday",
    unread: 1,
  },
  {
    id: 4,
    name: "Dr. Robert Davis",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    lastMessage: "How are you feeling today? Any improvement with the new prescription?",
    time: "3/15/2024",
    unread: 0,
  },
];

// Mock message data for active conversation
const mockMessages = [
  {
    id: 1,
    sender: "Dr. Sarah Johnson",
    content: "Hello! How have you been feeling since our last appointment?",
    time: "10:15 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Hi Dr. Johnson! I've been feeling much better. The new medication seems to be working well.",
    time: "10:18 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Dr. Sarah Johnson",
    content: "That's great to hear! Any side effects that I should know about?",
    time: "10:20 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "You",
    content: "Just a little drowsiness in the morning, but it usually goes away after an hour or so.",
    time: "10:25 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Dr. Sarah Johnson",
    content: "That's a common side effect and should diminish over time. Your latest test results look good. Keep up the good work!",
    time: "10:30 AM",
    isMe: false,
  },
];

const Messages = () => {
  const [activeChat, setActiveChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      // Here you would typically add the message to the chat
      setNewMessage("");
    }
  };

  return (
    <Layout>
      <div className="h-[calc(100vh-2rem)] overflow-hidden">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {/* Conversations List */}
          <Card className="md:col-span-1 h-full overflow-hidden flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Conversations</span>
                <Button size="sm" variant="ghost" className="rounded-full">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </CardTitle>
              <div className="relative">
                <Input placeholder="Search messages..." className="pl-8" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-muted-foreground"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-y-auto flex-1 px-0">
              <div className="space-y-1 pr-3">
                {conversations.map((chat) => (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start px-3 py-4 h-auto hover:bg-accent/50 relative",
                      activeChat.id === chat.id && "bg-accent"
                    )}
                    onClick={() => setActiveChat(chat)}
                  >
                    <div className="flex items-center w-full">
                      <Avatar className="h-10 w-10 mr-3">
                        <img src={chat.avatar} alt={chat.name} className="object-cover" />
                      </Avatar>
                      <div className="flex-1 overflow-hidden text-left">
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{chat.name}</p>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unread > 0 && (
                        <span className="bg-sanicare-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs absolute top-2 right-2">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-2 h-full flex flex-col overflow-hidden">
            {activeChat ? (
              <>
                <CardHeader className="border-b px-6 py-3">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <img src={activeChat.avatar} alt={activeChat.name} className="object-cover" />
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{activeChat.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Online
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                  {mockMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.isMe ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "rounded-lg px-4 py-2 max-w-[80%]",
                          message.isMe
                            ? "bg-sanicare-500 text-white"
                            : "bg-muted"
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs opacity-70 block text-right mt-1">
                          {message.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <div className="border-t p-3 flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend();
                    }}
                  />
                  <Button onClick={handleSend}>
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">
                  Select a conversation to start messaging
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
