"use client"
import { Sword, Trophy, User } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function DashboardPage() {

  const stats = [
    { label: "Recent Wins", value: "12", change: "+3", color: "from-green-500 to-emerald-600" },
    { label: "Losses", value: "4", change: "-1", color: "from-red-500 to-red-600" },
    { label: "Roast Power", value: "847", change: "+25", color: "from-orange-500 to-red-600" },
  ]

  return (
    <div className="min-h-screen flex bg-black text-white">
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 bg-gradient-to-br from-black to-gray-900 p-4 md:p-6">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Welcome back,{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                RoastMaster
              </span>
            </h1>
            <p className="text-gray-400">Ready to bring the heat? Your roasting arena awaits.</p>
          </div>
          
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-900/50 hover:shadow-lg hover:shadow-orange-600/10"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                    </div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${stat.color} opacity-20`}
                    >
                      <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${stat.color}`}></div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">from last week</span>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                ></div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl border border-red-900/20 bg-black/60 p-8 backdrop-blur-xl">
              <div className="relative z-10 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-red-600/30">
                    <span className="text-2xl">🔥</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Start New Roast</h3>
                <p className="mb-6 text-gray-400">Challenge someone to a battle and show off your wit</p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 font-bold text-white transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-600/30">
                  🔥 Start Roasting
                </Button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10"></div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-900/50">
                <h3 className="mb-3 font-bold text-white">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                    <Trophy className="mr-3 h-4 w-4" />
                    View Leaderboard
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                    <Sword className="mr-3 h-4 w-4" />
                    Join Random Battle
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                    <User className="mr-3 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold text-white">Recent Activity</h2>
            <div className="rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm">
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    { action: "Won battle against", opponent: "FireBreather", time: "2 hours ago", result: "win" },
                    { action: "Lost battle against", opponent: "SavageRoaster", time: "1 day ago", result: "loss" },
                    { action: "Won battle against", opponent: "WittyWarrior", time: "2 days ago", result: "win" },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-3 w-3 rounded-full ${activity.result === "win" ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <div>
                          <p className="text-sm text-white">
                            {activity.action} <span className="font-medium text-orange-400">{activity.opponent}</span>
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-medium ${activity.result === "win" ? "text-green-400" : "text-red-400"}`}
                      >
                        {activity.result === "win" ? "+15 XP" : "-5 XP"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
