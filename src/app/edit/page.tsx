"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { useUser } from "../context/userContext"

export default function SettingsPage() {
  const { user } = useUser()

  const [name, setName] = useState("")

  const [username, setUsername] = useState("")

  const [description, setDescription] = useState("")

  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  )

  useEffect(() => {
    if (user) {
      setName(user.name || "")
      setUsername(user.username || "")
      setDescription(user.description || "")
    }
  }, [user])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="text-gray-100 text-lg font-semibold">
                  Edit Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-100">
                      Basic Information
                    </h3>
                    <h3 className="text-base mb-2 text-gray-100">
                      Profile Picture
                    </h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={profileImage} alt="Profile picture" />
                        <AvatarFallback>{username?.[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button
                          className="bg-white text-black"
                          onClick={() =>
                            document.getElementById("imageUpload")?.click()
                          }
                        >
                          Change Image
                        </Button>
                        <input
                          id="imageUpload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        <p className="text-sm text-gray-400 mt-2">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-200">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your Name"
                          className="border-gray-600 text-gray-200 placeholder-gray-500"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="username" className="text-gray-200">
                          Username
                        </Label>
                        <Input
                          id="username"
                          placeholder="Your platform username"
                          className="border-gray-600 text-gray-200 placeholder-gray-500"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="title" className="text-gray-200">
                      Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Your role, e.g. AI Agent Designer and Software Architect"
                      className="border-gray-600 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-gray-200">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us a little more about you"
                      className="border-gray-600 text-gray-200 placeholder-gray-500"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-100">
                      Social Profiles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="website" className="text-gray-200">
                          Website
                        </Label>
                        <Input
                          id="website"
                          placeholder="Your webpage"
                          className="border-gray-600 text-gray-200 placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter" className="text-gray-200">
                          Twitter
                        </Label>
                        <Input
                          id="twitter"
                          placeholder="@your_twitter_handle"
                          className="border-gray-600 text-gray-200 placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="github" className="text-gray-200">
                          GitHub
                        </Label>
                        <Input
                          id="github"
                          placeholder="@your_github_handle"
                          className="border-gray-600 text-gray-200 placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin" className="text-gray-200">
                          LinkedIn
                        </Label>
                        <Input
                          id="linkedin"
                          placeholder="https://linkedin.com/in/your_linkedin_user"
                          className="border-gray-600 text-gray-200 placeholder-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                  <Button>Update Profile</Button>
                </div>
              </CardContent>
            </Card>
            {/* Password Section */}
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Edit Password</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-password" className="text-gray-200">
                      Current Password
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="Your current password"
                      className="border-gray-600 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-password" className="text-gray-200">
                      New Password
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Your new password"
                      className="border-gray-600 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password" className="text-gray-200">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your new password"
                      className="border-gray-600 text-gray-200 placeholder-gray-500"
                    />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Settings Menu */}
          <div>
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-200 space-y-4">
                  <li>Account Details</li>
                  <li>Security</li>
                  <li>Notifications</li>
                  <li>Privacy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
