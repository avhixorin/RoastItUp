import Link from "next/link"
import { FlameIcon, Trophy, Users, ThumbsUp, ArrowRight, Github, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
              <FlameIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                RoastItUp
              </span>
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#features"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#leaderboard"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-orange-400"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 cursor-pointer">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 font-medium text-white hover:from-orange-600 hover:to-red-700 cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 transform rounded-full bg-gradient-to-b from-red-600/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-pulse rounded-full bg-orange-500/10 blur-3xl"></div>
          <div
            className="absolute bottom-0 right-1/3 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                <span className="block">
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                    Roast.
                  </span>
                </span>
                <span className="block">
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                    Vote.
                  </span>
                </span>
                <span className="block">
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                    Conquer.
                  </span>
                </span>
              </h1>
              <p className="mb-8 text-lg text-gray-400">
                Join the ultimate real-time roast battle arena. Show off your wit, make the crowd laugh, and climb the
                ranks to become the Roast Champion.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button className="group h-12 bg-gradient-to-r from-orange-500 to-red-600 px-8 text-lg font-bold text-white transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-600/30 cursor-pointer">
                  Start Roasting
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-gray-700 px-8 text-lg font-medium text-gray-800 cursor-pointer"
                >
                  Watch Battles
                </Button>
              </div>
            </div>

            {/* WebRTC Video Preview Placeholder */}
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-2xl shadow-red-600/10">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                  <FlameIcon className="h-8 w-8 text-white" />
                </div>
                <p className="mb-2 text-center text-lg font-bold text-white">Live Roast Battles</p>
                <p className="text-center text-sm text-gray-400">
                  Real-time video battles powered by WebRTC. Join a room or create your own to start roasting!
                </p>
                <div className="mt-6 grid w-full grid-cols-2 gap-4">
                  <div className="aspect-square rounded-md bg-gray-800 p-2">
                    <div className="h-full rounded bg-gradient-to-br from-gray-700 to-gray-800 p-4">
                      <div className="mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600"></div>
                      <div className="h-3 w-20 rounded bg-gray-600"></div>
                    </div>
                  </div>
                  <div className="aspect-square rounded-md bg-gray-800 p-2">
                    <div className="h-full rounded bg-gradient-to-br from-gray-700 to-gray-800 p-4">
                      <div className="mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600"></div>
                      <div className="h-3 w-20 rounded bg-gray-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Bring the Heat
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              RoastItUp combines comedy, competition, and community in one fiery package. Here&rsquo;s what makes our platform
              sizzle.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-900/50 hover:shadow-lg hover:shadow-orange-600/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 p-3">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Real-Time Battles</h3>
              <p className="text-gray-400">
                Face off against opponents in live video battles. Quick wit and sharp comebacks are your weapons in this
                verbal arena.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-900/50 hover:shadow-lg hover:shadow-orange-600/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 p-3">
                <ThumbsUp className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Live Voting</h3>
              <p className="text-gray-400">
                Audiences vote in real-time to determine the winner. Make them laugh, and watch your score soar to fiery
                heights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-900/50 hover:shadow-lg hover:shadow-orange-600/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 p-3">
                <Trophy className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Leaderboards</h3>
              <p className="text-gray-400">
                Climb the ranks and establish yourself as a roasting legend. Weekly and all-time leaderboards showcase
                the best roasters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Getting started with RoastItUp is easy. Follow these steps to jump into the action and start roasting.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-lg font-bold text-white">
                1
              </div>
              <h3 className="mb-3 mt-4 text-xl font-bold text-white">Create an Account</h3>
              <p className="text-gray-400">
                Sign up for free and set up your profile. Add a spicy bio and profile picture to show off your
                personality.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-lg font-bold text-white">
                2
              </div>
              <h3 className="mb-3 mt-4 text-xl font-bold text-white">Join a Battle</h3>
              <p className="text-gray-400">
                Enter a roast room or create your own. Challenge friends or get matched with random opponents ready to
                battle.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm">
              <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-lg font-bold text-white">
                3
              </div>
              <h3 className="mb-3 mt-4 text-xl font-bold text-white">Roast & Win</h3>
              <p className="text-gray-400">
                Bring your A-game, deliver your best roasts, and get the audience on your side. Win battles to climb the
                leaderboard.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-6 text-lg font-bold text-white hover:from-orange-600 hover:to-red-700">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-red-900/20 to-orange-900/10"></div>
          <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-pulse rounded-full bg-orange-500/10 blur-3xl"></div>
          <div
            className="absolute top-0 right-1/3 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-red-900/20 bg-black/60 p-8 text-center shadow-2xl shadow-red-600/10 backdrop-blur-xl md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                Ready to Bring the Heat?
              </span>
            </h2>
            <p className="mb-8 text-gray-300">
              Join thousands of roasters already battling it out on the hottest platform for verbal sparring. Your
              audience awaits.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/register">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-6 text-lg font-bold text-white hover:from-orange-600 hover:to-red-700 cursor-pointer">
                Sign Up Free
              </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gray-700 px-8 py-6 text-lg font-medium text-gray-700 cursor-pointer"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600">
                  <FlameIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                    RoastItUp
                  </span>
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                The ultimate platform for real-time roast battles. Bring the heat, take the crown.
              </p>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-orange-500">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://github.com/avhixorin/RoastItUp" className="text-gray-500 hover:text-orange-500">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Tournaments
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-orange-400">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} RoastItUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
