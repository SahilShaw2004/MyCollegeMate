"use client"

import { useState } from "react"
import {
  Search,
  Settings,
  Bell,
  Mail,
  Trophy,
  Star,
  Flame,
  Award,
  Users,
  Upload,
  Calendar,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const leaderboardData = [
  {
    rank: 1,
    name: "Alice Wonderland",
    xp: 25000,
    streak: 365,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["🏆", "🔥"],
    bgGradient: "bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500",
  },
  {
    rank: 2,
    name: "Bob The Builder",
    xp: 22000,
    streak: 180,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["⭐", "🎯"],
    bgGradient: "bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500",
  },
  {
    rank: 3,
    name: "Charlie Chaplin",
    xp: 19000,
    streak: 90,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["🎭", "📚"],
    bgGradient: "bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500",
  },
  {
    rank: 4,
    name: "Diana Prince",
    xp: 15000,
    streak: 60,
    avatar: "/placeholder.svg?height=60&width=60",
    badges: ["⚡"],
    bgGradient: "bg-gradient-to-r from-gray-200 to-gray-300",
  },
]

const studyMaterials = [
  {
    id: 1,
    title: "Introduction to Calculus I",
    subject: "Mathematics",
    uploader: "Professor A. Johnson",
    date: "2024-04-10",
    bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    title: "Biology Lab Manual 2024",
    subject: "Biology",
    uploader: "Student Research Group",
    date: "2024-04-09",
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Chemistry Midterm Review",
    subject: "Chemistry",
    uploader: "Dr. S. Lee",
    date: "2024-04-08",
    bgColor: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
]

const topActivities = [
  { name: "Event Participation", value: 120, icon: Calendar },
  { name: "Material Uploads", value: 85, icon: Upload },
  { name: "Club Activity", value: 70, icon: Users },
  { name: "Study Group Sessions", value: 45, icon: BookOpen },
]

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("weekly")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full"></div>
                <span className="text-xl font-semibold text-gray-900">College Connect</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Events
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Lost & Found
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Study Materials
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Study Groups
                </a>
                <a href="#" className="text-orange-500 font-medium">
                  Leaderboard
                </a>
              </nav>
            </div>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search College Connect" className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm" className="bg-orange-100 text-orange-700 border-orange-200">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-red-500 text-white">U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Gamified Leaderboard</h1>
            <p className="text-gray-600">
              See how you stack up against your peers in various campus activities and earn your spot at the top!
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={activeTab === "weekly" ? "default" : "outline"}
              onClick={() => setActiveTab("weekly")}
              className={activeTab === "weekly" ? "bg-orange-500 hover:bg-orange-600" : ""}
            >
              Weekly
            </Button>
            <Button
              variant={activeTab === "monthly" ? "default" : "outline"}
              onClick={() => setActiveTab("monthly")}
              className={activeTab === "monthly" ? "bg-orange-500 hover:bg-orange-600" : ""}
            >
              Monthly
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2 space-y-4">
            {leaderboardData.map((user) => (
              <Card key={user.rank} className="overflow-hidden">
                <div className={`${user.bgGradient} p-6 text-white relative`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold">{user.rank}</div>
                    <Avatar className="w-16 h-16 border-4 border-white">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{user.name}</h3>
                      <div className="flex items-center space-x-4 text-sm opacity-90">
                        <span>{user.xp.toLocaleString()} XP</span>
                        <span>{user.streak} Day Streak</span>
                      </div>
                      <div className="mt-2 bg-white/20 rounded-full h-2">
                        <div className="bg-orange-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {user.badges.map((badge, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                          >
                            {badge}
                          </div>
                        ))}
                      </div>
                      <Trophy className="w-8 h-8 text-yellow-300" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* My Stats and Activities */}
          <div className="space-y-6">
            {/* My Stats */}
            <Card>
              <CardHeader>
                <CardTitle>My Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-2xl font-bold">1250</span>
                    </div>
                    <p className="text-sm text-gray-600">Total XP</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Trophy className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-2xl font-bold">57</span>
                    </div>
                    <p className="text-sm text-gray-600">Current Rank</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Flame className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-2xl font-bold">21</span>
                    </div>
                    <p className="text-sm text-gray-600">Day Streak</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Award className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-600">Badges Earned</p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Level 5</span>
                  </div>
                  <Progress value={62.5} className="h-3" />
                  <p className="text-xs text-gray-500 mt-1">1250 / 2000 XP to next level</p>
                </div>

                <div>
                  <h4 className="font-medium mb-3">My Badges</h4>
                  <div className="flex space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      🏆
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      🔥
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      ⭐
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Top Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topActivities.map((activity, index) => {
                  const Icon = activity.icon
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-orange-500" />
                        <span className="text-sm">{activity.name}</span>
                      </div>
                      <span className="font-medium">{activity.value}</span>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Study Materials Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Study Materials</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Student
              </Button>
              <Button variant="outline" size="sm">
                Faculty
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${material.bgColor} h-32 flex items-center justify-center relative`}>
                  <div className="text-white text-4xl">📄</div>
                  <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-gray-700">
                    PDF
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{material.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{material.subject}</p>
                  <p className="text-sm text-gray-500 mb-3">Uploaded by {material.uploader}</p>
                  <p className="text-xs text-gray-400 mb-4">{material.date}</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
