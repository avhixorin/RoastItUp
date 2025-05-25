"use client"
import { useState } from "react"
import { Search, Send, Users, MessageCircle, UserPlus, Check, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function ChatPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedChat, setSelectedChat] = useState<string | null>("user1")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [newMessage, setNewMessage] = useState("")

  const searchResults = [
    {
      id: "search1",
      username: "FireBreather",
      displayName: "Fire Breather",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "add",
      online: true,
    },
    {
      id: "search2",
      username: "SavageRoaster",
      displayName: "Savage Roaster",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending",
      online: false,
    },
    {
      id: "search3",
      username: "WittyWarrior",
      displayName: "Witty Warrior",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "connected",
      online: true,
    },
  ]

  const friends = [
    {
      id: "user1",
      username: "WittyWarrior",
      displayName: "Witty Warrior",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
      lastMessage: "Ready for another battle? 🔥",
      timestamp: "2m ago",
      unread: 2,
    },
    {
      id: "user2",
      username: "BurnMaster",
      displayName: "Burn Master",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
      lastMessage: "That was an epic roast session!",
      timestamp: "1h ago",
      unread: 0,
    },
    {
      id: "user3",
      username: "FlameQueen",
      displayName: "Flame Queen",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
      lastMessage: "See you in the next tournament",
      timestamp: "3h ago",
      unread: 0,
    },
  ]

  const messages = [
    {
      id: "msg1",
      senderId: "user1",
      content: "Hey! Ready for another roast battle?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: "msg2",
      senderId: "me",
      content: "I've been practicing my comebacks 🔥",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: "msg3",
      senderId: "user1",
      content: "Haha, bring it on! I've got some new material that's going to roast you to perfection",
      timestamp: "10:33 AM",
      isOwn: false,
    },
    {
      id: "msg4",
      senderId: "me",
      content: "We'll see about that! When do you want to battle?",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: "msg5",
      senderId: "user1",
      content: "Ready for another battle? 🔥",
      timestamp: "10:37 AM",
      isOwn: false,
    },
  ]

  const getStatusButton = (status: string) => {
    switch (status) {
      case "add":
        return (
          <Button
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
          >
            <UserPlus className="mr-1 h-3 w-3" />
            Add Friend
          </Button>
        )
      case "pending":
        return (
          <div className="flex gap-1">
            <Button size="sm" variant="outline" className="border-gray-700 text-green-400 hover:bg-green-900/20">
              <Check className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="outline" className="border-gray-700 text-red-400 hover:bg-red-900/20">
              <X className="h-3 w-3" />
            </Button>
          </div>
        )
      case "connected":
        return (
          <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
            <MessageCircle className="mr-1 h-3 w-3" />
            Chat
          </Button>
        )
      default:
        return null
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("")
    }
  }

  const selectedFriend = friends.find((f) => f.id === selectedChat)

  return (
    <div className="flex h-full bg-gradient-to-br from-black to-gray-900 text-white">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
        fixed left-0 top-0 z-50 h-full w-80 transform border-r border-gray-800 bg-black/90 backdrop-blur-xl transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:translate-x-0
      `}
      >
        <div className="flex h-full flex-col">
          <div className="border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-gray-800 bg-black/50 pl-10 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
            </div>
          </div>

          <ScrollArea className="flex-1">
            {searchQuery && (
              <div className="p-4">
                <h3 className="mb-3 text-sm font-medium text-gray-400">Search Results</h3>
                <div className="space-y-3">
                  {searchResults
                    .filter(
                      (user) =>
                        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        user.displayName.toLowerCase().includes(searchQuery.toLowerCase()),
                    )
                    .map((user) => (
                      <Card key={user.id} className="border-gray-800 bg-black/40 backdrop-blur-sm">
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.displayName} />
                                  <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                                    {user.displayName.slice(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                {user.online && (
                                  <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-black bg-green-500"></div>
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-white">{user.displayName}</p>
                                <p className="text-xs text-gray-400">@{user.username}</p>
                              </div>
                            </div>
                            {getStatusButton(user.status)}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                <Separator className="my-4 bg-gray-800" />
              </div>
            )}

            <div className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-400">Friends</h3>
                <Badge variant="outline" className="border-gray-700 text-gray-400">
                  {friends.filter((f) => f.online).length} online
                </Badge>
              </div>
              <div className="space-y-2">
                {friends.map((friend) => (
                  <Card
                    key={friend.id}
                    className={`cursor-pointer border-gray-800 bg-black/40 backdrop-blur-sm transition-all duration-200 hover:border-orange-900/50 ${
                      selectedChat === friend.id ? "border-orange-500/50 bg-orange-900/20" : ""
                    }`}
                    onClick={() => {
                      setSelectedChat(friend.id)
                      setSidebarOpen(false)
                    }}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={friend.avatar || "/placeholder.svg"} alt={friend.displayName} />
                            <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                              {friend.displayName.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          {friend.online && (
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-black bg-green-500"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-white truncate">{friend.displayName}</p>
                            <div className="flex items-center gap-1">
                              {friend.unread > 0 && (
                                <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                                  {friend.unread}
                                </Badge>
                              )}
                              <span className="text-xs text-gray-500">{friend.timestamp}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 truncate">{friend.lastMessage}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-black/80 px-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            {selectedFriend && (
              <>
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedFriend.avatar || "/placeholder.svg"} alt={selectedFriend.displayName} />
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                      {selectedFriend.displayName.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {selectedFriend.online && (
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-black bg-green-500"></div>
                  )}
                </div>
                <div>
                  <p className="font-medium text-white">{selectedFriend.displayName}</p>
                  <p className="text-xs text-gray-400">
                    {selectedFriend.online ? "Online" : `Last seen ${selectedFriend.timestamp}`}
                  </p>
                </div>
              </>
            )}
          </div>
          {selectedFriend && (
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Users className="mr-2 h-4 w-4" />
              Start Battle
            </Button>
          )}
        </header>

        {selectedChat ? (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs rounded-2xl px-4 py-2 ${
                        message.isOwn
                          ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`mt-1 text-xs ${message.isOwn ? "text-orange-100" : "text-gray-400"}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-gray-800 bg-black/80 p-4 backdrop-blur-sm">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center">
              <MessageCircle className="mx-auto mb-4 h-16 w-16 text-gray-600" />
              <h3 className="mb-2 text-xl font-medium text-gray-400">Select a conversation</h3>
              <p className="text-gray-500">Choose a friend from the sidebar to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
