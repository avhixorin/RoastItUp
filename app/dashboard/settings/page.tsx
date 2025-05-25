"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Bell, Moon, Eye, Shield, Trash2 } from "lucide-react"
import { use } from "react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-4 md:p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-white">⚙️ Settings</h2>
          <p className="text-gray-400">Manage your account preferences and security settings.</p>
        </div>

        <div className="space-y-8">
          {/* General Settings */}
          <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">General Settings</CardTitle>
              <CardDescription className="text-gray-400">Configure your general account preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-orange-500" />
                  <div>
                    <Label className="text-sm font-medium text-white">Notifications</Label>
                    <p className="text-sm text-gray-400">Receive notifications for battles and messages</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator className="bg-gray-800" />

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="h-5 w-5 text-orange-500" />
                  <div>
                    <Label className="text-sm font-medium text-white">Dark Mode</Label>
                    <p className="text-sm text-gray-400">Use dark theme across the application</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator className="bg-gray-800" />

              {/* Account Visibility */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-orange-500" />
                  <div>
                    <Label className="text-sm font-medium text-white">Account Visibility</Label>
                    <p className="text-sm text-gray-400">Make your profile visible to other users</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-5 w-5 text-orange-500" />
                Security Settings
              </CardTitle>
              <CardDescription className="text-gray-400">
                Update your password and security preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Password */}
              <div className="space-y-2">
                <Label htmlFor="currentPassword" className="text-sm font-medium text-gray-300">
                  Current Password
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                />
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <Label htmlFor="newPassword" className="text-sm font-medium text-gray-300">
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-300">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="border-gray-800 bg-black/50 text-white placeholder:text-gray-500 focus-visible:ring-orange-500"
                />
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 font-medium text-white hover:from-orange-600 hover:to-red-700">
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="border-gray-800 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Privacy Settings</CardTitle>
              <CardDescription className="text-gray-400">
                Control who can see your information and activity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Show Online Status */}
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium text-white">Show Online Status</Label>
                  <p className="text-sm text-gray-400">Let others see when you&apos;re online</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator className="bg-gray-800" />

              {/* Show Battle History */}
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium text-white">Public Battle History</Label>
                  <p className="text-sm text-gray-400">Allow others to view your battle history</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator className="bg-gray-800" />

              {/* Allow Friend Requests */}
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium text-white">Allow Friend Requests</Label>
                  <p className="text-sm text-gray-400">Let other users send you friend requests</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-900/50 bg-red-950/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <Trash2 className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription className="text-red-300/70">Irreversible and destructive actions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-red-900/50 bg-red-950/30 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-red-400">Delete Account</h3>
                    <p className="text-sm text-red-300/70">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                  <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
