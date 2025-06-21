"use client"

import { useState } from "react"
import { Search, Settings, Bell, Mail, Calendar, Upload, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const foundItems = [
  {
    id: 1,
    name: "Black Leather Wallet",
    category: "Accessories",
    location: "Campus Cafeteria",
    date: "October 26, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Silver MacBook Pro",
    category: "Electronics",
    location: "Library East Wing",
    date: "October 25, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Red Puffer Jacket",
    category: "Apparel",
    location: "Student Union Lounge",
    date: "October 24, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Chemistry Textbook",
    category: "Textbooks",
    location: "Science Lab 203",
    date: "October 23, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Wireless Earbuds Case",
    category: "Electronics",
    location: "Gym Locker Room",
    date: "October 22, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Blue Water Bottle",
    category: "Accessories",
    location: "Basketball Court",
    date: "October 21, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function LostAndFound() {
  const [itemName, setItemName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [location, setLocation] = useState("")
  const [dateLost, setDateLost] = useState("")
  const [email, setEmail] = useState("")

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
                <a href="#" className="text-orange-500 font-medium">
                  Lost & Found
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Study Materials
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Study Groups
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Leaderboard
                </a>
              </nav>
            </div>

            {/* Search and User Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search Lost & Found items..." className="pl-10 w-64" />
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Report Lost Item Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Report a Lost Item</CardTitle>
                <p className="text-sm text-gray-600">Provide details about your lost item to help us find it.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                  <Input
                    placeholder="e.g., Blue Backpack"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Textarea
                    placeholder="Describe the item, where it was lost, etc."
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="apparel">Apparel</SelectItem>
                      <SelectItem value="textbooks">Textbooks</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Seen Location</label>
                  <Input
                    placeholder="e.g., Library 3rd Floor, Student Union"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Lost</label>
                  <div className="relative">
                    <Input type="date" value={dateLost} onChange={(e) => setDateLost(e.target.value)} />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Drag & drop or click to upload image</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                  <Input
                    type="email"
                    placeholder="your@example.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit Lost Item Report</Button>
              </CardContent>
            </Card>
          </div>

          {/* Browse Found Items */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Browse Found Items</h1>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Found Something?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="textbooks">Textbooks</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                    <SelectItem value="cafeteria">Cafeteria</SelectItem>
                    <SelectItem value="gym">Gym</SelectItem>
                    <SelectItem value="union">Student Union</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Date Posted" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Found Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {foundItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-100 relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span>{item.category}</span>
                        <span className="mx-2">•</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">View Details</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
