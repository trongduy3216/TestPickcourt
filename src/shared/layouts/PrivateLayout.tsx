"use client";

import { useAuthStore } from "@/store/authStore";
import { PlayerNavbar } from "@/shared/ui/PlayerNavbar";
import { OwnerNavbar } from "@/shared/ui/OwnerNavbar";
import { BottomNavigation } from "@/shared/ui/BottomNavigation";
import { MobileHeader } from "@/shared/ui/MobileHeader";
import { OwnerFooter } from "@/shared/ui/OwnerFooter";
import { PlayerFooter } from "@/shared/ui/PlayerFooter";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export function PrivateLayout({ children }: PrivateLayoutProps) {
  const { user } = useAuthStore();
  const role = user?.role || "player";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Desktop/Tablet Navbar */}
      {role === "owner" ? <OwnerNavbar /> : <PlayerNavbar />}

      {/* Layout with responsive sidebar */}
      <div className="flex flex-1">
        {/* Desktop Sidebar - hidden on mobile */}

        {/* Main Content - mobile bottom padding for bottom nav */}
        <main className="flex-1 p-6 pb-20 md:pb-6">{children}</main>
      </div>

      {/* Role-specific Footer */}
      {role === "owner" ? <OwnerFooter /> : <PlayerFooter />}

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
