"use client"
import Link from "next/link";
import { Eye, EyeOff, FlameIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 h-[800px] w-[800px] -translate-x-1/2 transform rounded-full bg-gradient-to-t from-orange-600 via-red-600 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 h-[600px] w-[600px] -translate-x-1/2 transform rounded-full bg-gradient-to-t from-red-700 via-orange-500 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 h-[600px] w-[600px] translate-x-1/2 transform rounded-full bg-gradient-to-t from-orange-500 via-red-600 to-transparent opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-red-600/20">
            <FlameIcon className="h-10 w-10 text-white" />
          </div>
          <h1 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-white">
            <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              RoastItUp
            </span>
          </h1>
          <p className="mt-2 text-center text-gray-400">
            Sign in to your account
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-800 bg-black/60 p-6 backdrop-blur-xl">
          <form className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-300"
                >
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-xs font-medium text-orange-400 hover:text-orange-300"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
              />
              <div
                role="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <EyeOff className="absolute right-3 top-[73%] -translate-y-1/2 text-gray-500 cursor-pointer bg-black pl-1" />
                ) : (
                  <Eye className="absolute right-3 top-[73%] -translate-y-1/2 text-gray-500 cursor-pointer bg-black pl-1" />
                )}
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 font-bold text-white hover:from-orange-600 hover:to-red-700">
              Log In
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-400">
            Don&rsquo;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-orange-400 hover:text-orange-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
