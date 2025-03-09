import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image"; // Import Next.js Image component

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-center py-1 px-4">
      <Card className="w-full max-w-[280px] bg-[#1a1a1a] text-white overflow-hidden">
        <div className="px-6 py-0 flex flex-col items-center space-y-4">
          {/* Avatar with glow effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
            <Avatar className="w-30 h-30 relative">
              {/* Using AvatarImage for the actual image */}
              <Image
                src="/dashboard/profile_pic.svg" // SVG from public folder
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full "
              />
              {/* Fallback content in case image is not found */}
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
            <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-medium">Pick Me</Button>
            <Button  className="flex-1 bg-amber-500 hover:bg-amber-600 text-black font-medium">
              More Info
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
