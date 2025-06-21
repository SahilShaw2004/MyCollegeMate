"use client"

import { useState } from "react"
import {
  Search,
  Upload,
  Download,
  Filter,
  Settings,
  Bell,
  Mail,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const studyMaterials = [
  {
    id: 1,
    title: "Introduction to Calculus I",
    subject: "Mathematics",
    fileType: "PDF",
    uploader: "Professor A. Johnson",
    uploadDate: "2024-04-10",
    bgColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
    icon: "📄",
  },
  {
    id: 2,
    title: "Biology Lab Manual 2024",
    subject: "Biology",
    fileType: "Notes",
    uploader: "Student Research Group",
    uploadDate: "2024-04-09",
    bgColor: "bg-gradient-to-br from-green-400 to-emerald-500",
    icon: "📝",
  },
  {
    id: 3,
    title: "Chemistry Midterm Review",
    subject: "Chemistry",
    fileType: "PPT",
    uploader: "Dr. S. Lee",
    uploadDate: "2024-04-08",
    bgColor: "bg-gradient-to-br from-pink-400 to-rose-500",
    icon: "📊",
  },
]

const fileTypeFilters = ["PDF", "PPT", "Notes", "Video", "Audio"]
const uploaderFilters = ["Student", "Faculty"]

export default function StudyMaterialPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [activeFileTypes, setActiveFileTypes] = useState([])
  const [activeUploaders, setActiveUploaders] = useState([])


  const toggleFileType = (fileType) => {
    setActiveFileTypes((prev) =>
      prev.includes(fileType)
        ? prev.filter((type) => type !== fileType)
        : [...prev, fileType]
    )
  }

  const toggleUploader = (uploader) => {
    setActiveUploaders((prev) =>
      prev.includes(uploader)
        ? prev.filter((u) => u !== uploader)
        : [...prev, uploader]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full" />
                <span className="text-xl font-semibold text-gray-900">
                  College Connect
                </span>
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
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search Lost & Found items..."
                  className="pl-10 w-64"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-orange-100 text-orange-700 border-orange-200"
              >
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
                <AvatarFallback className="bg-red-500 text-white">
                  U
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Upload Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Upload New Study Material
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Share your notes, presentations, and resources with the College
              Connect community. Support your peers and earn XP!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange-400 bg-gray-50">
              <Upload className="mx-auto h-12 w-12 text-orange-400 mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Drag & drop files here or click to upload
              </p>
              <p className="text-sm text-gray-500 mb-6">
                (PDF, PPT, DOC, MP4, MP3, up to 50MB)
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2">
                <Upload className="w-4 h-4 mr-2" />
                Upload Material
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Materials */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </h2>

            {/* Subject Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* File Type Filter */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                File Type
              </label>
              <div className="flex flex-wrap gap-2">
                {fileTypeFilters.map((type) => (
                  <Button
                    key={type}
                    size="sm"
                    variant={activeFileTypes.includes(type) ? "default" : "outline"}
                    className={
                      activeFileTypes.includes(type)
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : ""
                    }
                    onClick={() => toggleFileType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Uploader Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Uploader
              </label>
              <div className="flex flex-wrap gap-2">
                {uploaderFilters.map((label) => (
                  <Button
                    key={label}
                    size="sm"
                    variant={activeUploaders.includes(label) ? "default" : "outline"}
                    className={
                      activeUploaders.includes(label)
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : ""
                    }
                    onClick={() => toggleUploader(label)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </aside>

        {/* Study Materials Display */}
        <section className="lg:col-span-3">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search materials by title, subject, or uploader..."
                className="pl-10 py-3 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recently Added Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {studyMaterials.map((material) => (
              <Card key={material.id} className="overflow-hidden hover:shadow-lg">
                <div className={`${material.bgColor} h-32 flex items-center justify-center relative`}>
                  <div className="text-white text-4xl">{material.icon}</div>
                  <Badge variant="secondary" className="absolute top-3 right-3 bg-white/90 text-gray-700">
                    {material.fileType}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{material.subject}</p>
                  <p className="text-sm text-gray-500 mb-3">Uploaded by {material.uploader}</p>
                  <p className="text-xs text-gray-400 mb-4">{material.uploadDate}</p>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
