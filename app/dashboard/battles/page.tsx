"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Eye } from 'lucide-react'

export default function Page() {
  const ongoingBattles = [
    {
      id: 1,
      title: "Comedy Clash",
      participants: ["FireBreather", "SavageRoaster"],
      viewers: 127,
      timeLeft: "2:34",
      status: "live"
    },
    {
      id: 2,
      title: "Roast Royale",
      participants: ["WittyWarrior", "BurnMaster"],
      viewers: 89,
      timeLeft: "4:12",
      status: "live"
    },
    {
      id: 3,
      title: "Quick Fire Round",
      participants: ["RoastKing", "FlameQueen"],
      viewers: 203,
      timeLeft: "1:45",
      status: "live"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-4 md:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-white">🔥 Battles</h2>
          <p className="text-gray-400">This is the battle arena. Join or spectate real-time roast battles here.</p>
        </div>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-red-600/30">
                    <span className="text-2xl">⚔️</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Start New Battle</h3>
                <p className="mb-4 text-sm text-gray-400">Challenge someone to a roast battle and show your skills</p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 font-bold text-white hover:from-orange-600 hover:to-red-700">
                  Start a New Battle
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg shadow-purple-600/30">
                    <span className="text-2xl">🎲</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Random Battle</h3>
                <p className="mb-4 text-sm text-gray-400">Get matched with a random opponent for instant action</p>
                <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  Join Random Battle
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="mb-6 text-2xl font-bold text-white">Live Battles</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ongoingBattles.map((battle) => (
              <Card key={battle.id} className="border-gray-800 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-orange-900/50 hover:shadow-lg hover:shadow-orange-600/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-white">{battle.title}</CardTitle>
                    <Badge className="bg-red-600 text-white">
                      <div className="mr-1 h-2 w-2 animate-pulse rounded-full bg-white"></div>
                      LIVE
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-xs text-white">
                            {battle.participants[0][0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-white">{battle.participants[0]}</span>
                      </div>
                      <span className="text-orange-400">VS</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{battle.participants[1]}</span>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-xs text-white">
                            {battle.participants[1][0]}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{battle.viewers}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{battle.timeLeft}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                      <Eye className="mr-2 h-4 w-4" />
                      Spectate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
