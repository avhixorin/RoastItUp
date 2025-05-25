"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Camera } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-white">👤 Your Profile</h2>
          <p className="text-gray-400">Manage your profile information and settings.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="h-24 w-24 border-4 border-orange-500/20">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-2xl font-bold text-white">
                      RM
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-white">RoastMaster</CardTitle>
                <CardDescription className="text-gray-400">roastmaster@example.com</CardDescription>
                <div className="mt-4 flex justify-center gap-2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white">Level 15</Badge>
                  <Badge variant="outline" className="border-gray-700 text-gray-300">
                    🔥 Fire Starter
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Battles</span>
                    <span className="font-medium text-white">47</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Win Rate</span>
                    <span className="font-medium text-green-400">74%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Current Streak</span>
                    <span className="font-medium text-orange-400">5 wins</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Roast Rating</span>
                    <span className="font-medium text-purple-400">2,032</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Settings */}
          <div className="lg:col-span-2">
            <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Profile Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Update your profile information and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture Upload */}
                <div className="space-y-2">
                  <Label htmlFor="avatar" className="text-sm font-medium text-gray-300">
                    Profile Picture
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      className="border-gray-800 bg-black/50 text-white file:border-0 file:bg-gradient-to-r file:from-orange-500 file:to-red-600 file:text-white"
                    />
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>

                {/* Display Name */}
                <div className="space-y-2">
                  <Label htmlFor="displayName" className="text-sm font-medium text-gray-300">
                    Display Name
                  </Label>
                  <Input
                    id="displayName"
                    defaultValue="RoastMaster"
                    className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="roastmaster@example.com"
                    className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                  />
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-sm font-medium text-gray-300">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell everyone about your roasting style..."
                    defaultValue="Master of verbal combat. Bringing the heat since day one. 🔥"
                    className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                    rows={4}
                  />
                </div>

                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium text-gray-300">
                    Username
                  </Label>
                  <Input
                    id="username"
                    defaultValue="@roastmaster"
                    className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                  />
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-600 font-medium text-white hover:from-orange-600 hover:to-red-700">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
