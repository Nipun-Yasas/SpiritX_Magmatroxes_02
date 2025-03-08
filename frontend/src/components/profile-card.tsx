import { Card } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"

export default function ProfileCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 p-4">
      <Card className="w-full max-w-[280px] bg-[#1a1a1a] text-white overflow-hidden">
        <div className="p-6 flex flex-col items-center space-y-4">
          {/* Avatar with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
            <Avatar className="w-20 h-20 relative">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZQjo1qxmT7HFpywZ4P5fchJEQy9CpI.png"
                alt="Jehan Pinto"
              />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>

          {/* Profile info */}
          <div className="text-center space-y-3">
            <h2 className="text-xl font-semibold">Jehan Pinto</h2>
            <div className="text-amber-500 text-sm font-medium">SEPT 02 STARTING AT 6:00 AM</div>
            <div className="text-lg font-bold">LKR 50,000</div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 w-full pt-2">
            <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-medium">JOIN NOW</Button>
            <Button variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-800 hover:text-white">
              LEARN MORE
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

