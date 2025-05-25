"use client"
import Link from "next/link";
import { Eye, EyeOff, FlameIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black">
      {/* Fiery background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 h-[800px] w-[800px] -translate-x-1/2 transform rounded-full bg-gradient-to-t from-orange-600 via-red-600 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 h-[600px] w-[600px] -translate-x-1/2 transform rounded-full bg-gradient-to-t from-red-700 via-orange-500 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 h-[600px] w-[600px] translate-x-1/2 transform rounded-full bg-gradient-to-t from-orange-500 via-red-600 to-transparent opacity-20 blur-3xl"></div>

        {/* Additional animated flame effects */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-pulse rounded-full bg-orange-500/10 blur-3xl"></div>
        <div
          className="absolute bottom-0 right-1/3 h-96 w-96 animate-pulse rounded-full bg-red-600/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-red-600/30">
            <FlameIcon className="h-10 w-10 text-white" />
          </div>
          <h1 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-white">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              RoastItUp
            </span>
          </h1>
          <p className="mt-2 text-center text-gray-400">Create your account</p>
        </div>

        {/* Registration form with glassmorphism */}
        <div className="overflow-hidden rounded-xl border border-red-900/20 bg-black/40 p-6 shadow-[0_0_15px_rgba(239,68,68,0.2)] backdrop-blur-xl">
          <form className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-300"
              >
                Username
              </Label>
              <Input
                id="username"
                placeholder="Choose a username"
                className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
            </div>

            <div className="space-y-2 relative">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-300"
              >
                Password
              </Label>
              <Input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Create a strong password"
                className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
              <div
                role="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <EyeOff className="absolute right-3 top-[73%] -translate-y-1/2 text-gray-500 cursor-pointer" />
                ) : (
                  <Eye className="absolute right-3 top-[73%] -translate-y-1/2 text-gray-500 cursor-pointer" />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-300"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                onPaste={(e) => e.preventDefault()}
                className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 font-bold text-white transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-600/30">
              Sign Up
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-orange-400 transition-colors hover:text-orange-300"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* Terms and privacy notice */}
        <p className="mt-6 text-center text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <Link href="#" className="text-orange-400 hover:text-orange-300">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-orange-400 hover:text-orange-300">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
