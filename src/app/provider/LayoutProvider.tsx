"use client";

import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { PublicLayout } from "@/shared/layouts/PublicLayout";
import { PrivateLayout } from "@/shared/layouts/PrivateLayout";

interface LayoutProviderProps {
  children: React.ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const pathname = usePathname();
  const { isAuthenticated, user } = useAuthStore();

  // Auth pages don't need any layout
  const authRoutes = ["/login", "/register", "/forgot-password"];
  const isAuthPage = authRoutes.includes(pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  // Owner gets special layout with sidebar
  if (isAuthenticated && user?.role === "owner") {
    return <PrivateLayout>{children}</PrivateLayout>;
  }

  // Guest and Player use the same simple layout (navbar + content + footer)
  return <PublicLayout>{children}</PublicLayout>;
}
