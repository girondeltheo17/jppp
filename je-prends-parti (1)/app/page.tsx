import { Feed } from "@/components/Feed"
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="p-4 max-w-md mx-auto">
        <Feed />
      </main>
    </div>
  )
}
