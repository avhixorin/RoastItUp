"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from 'lucide-react'

export default function Page() {
  const leaderboardData = [
    {
      rank: 1,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "FireBreather",
      streak: 15,
      rating: 2847,
      badge: "🔥"
    },
    {
      rank: 2,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "SavageRoaster",
      streak: 12,
      rating: 2634,
      badge: "⚡"
    },
    {
      rank: 3,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "WittyWarrior",
      streak: 10,
      rating: 2521,
      badge: "🎯"
    },
    {
      rank: 4,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "BurnMaster",
      streak: 8,
      rating: 2398,
      badge: "💀"
    },
    {
      rank: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "RoastKing",
      streak: 7,
      rating: 2276,
      badge: "👑"
    },
    {
      rank: 6,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "FlameQueen",
      streak: 6,
      rating: 2154,
      badge: "💎"
    },
    {
      rank: 7,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "RoastMaster",
      streak: 5,
      rating: 2032,
      badge: "🎪"
    },
    {
      rank: 8,
      avatar: "/placeholder.svg?height=40&width=40",
      name: "ComedyKing",
      streak: 4,
      rating: 1910,
      badge: "🎭"
    }
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-gray-500">#{rank}</span>
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case 2:
        return "bg-gradient-to-r from-gray-400 to-gray-500"
      case 3:
        return "bg-gradient-to-r from-amber-600 to-yellow-600"
      default:
        return "bg-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-4 md:p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-white">🏆 Leaderboard</h2>
          <p className="text-gray-400">Top roasters based on win streak and votes.</p>
        </div>

        {/* Leaderboard Table */}
        <div className="rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm shadow-2xl">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-gray-800/50">
                <TableHead className="text-gray-300">Rank</TableHead>
                <TableHead className="text-gray-300">Avatar</TableHead>
                <TableHead className="text-gray-300">Name</TableHead>
                <TableHead className="text-gray-300">Streak</TableHead>
                <TableHead className="text-gray-300">Roast Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((player) => (
                <TableRow key={player.rank} className="border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {getRankIcon(player.rank)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="relative">
                      <Avatar className="h-10 w-10 border-2 border-orange-500/20">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold">
                          {player.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 text-sm">
                        {player.badge}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{player.name}</span>
                      {player.rank <= 3 && (
                        <Badge className={`${getRankBadgeColor(player.rank)} text-white`}>
                          Top {player.rank}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-400">{player.streak}</span>
                      <span className="text-sm text-gray-500">wins</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-orange-400">{player.rating.toLocaleString()}</span>
                      <span className="text-sm text-gray-500">pts</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-orange-400">2,847</div>
              <div className="text-sm text-gray-400">Highest Rating</div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-green-400">15</div>
              <div className="text-sm text-gray-400">Longest Streak</div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-purple-400">1,247</div>
              <div className="text-sm text-gray-400">Total Players</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
