"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

type RouteType = "player" | "owner" | "auth" | "public";

interface UseProtectedRouteOptions {
  type: RouteType;
  redirectTo?: string;
  requireRole?: "player" | "owner";
}

export function useProtectedRoute(options: UseProtectedRouteOptions) {
  const router = useRouter();
  const { isAuthenticated, user, loading } = useAuthStore();

  useEffect(() => {
    // Don't redirect while loading auth state
    if (loading) return;

    const { type, redirectTo, requireRole } = options;

    // Public routes - no protection needed
    if (type === "public") return;

    // Auth required routes
    if (type === "auth" || type === "player" || type === "owner") {
      if (!isAuthenticated) {
        router.push(redirectTo || "/login");
        return;
      }
    }

    // Role-specific protection
    if (requireRole) {
      if (user?.role !== requireRole) {
        // Redirect based on actual role
        const fallbackRoute =
          user?.role === "owner"
            ? "/owner/dashboard"
            : user?.role === "player"
              ? "/dashboard"
              : "/";
        router.push(fallbackRoute);
        return;
      }
    }

    // Owner route protection
    if (type === "owner" && user?.role !== "owner") {
      const fallbackRoute = user?.role === "player" ? "/dashboard" : "/";
      router.push(fallbackRoute);
      return;
    }

    // Player route protection (owner should stay in owner area)
    if (type === "player" && user?.role === "owner") {
      router.push("/owner/dashboard");
      return;
    }
  }, [isAuthenticated, user, loading, router, options]);

  return {
    isAuthenticated,
    user,
    loading,
    canAccess:
      !loading &&
      (options.type === "public" ||
        (isAuthenticated && (!options.requireRole || user?.role === options.requireRole))),
  };
}

// Hooks for specific route types
export const usePlayerRoute = (redirectTo?: string) =>
  useProtectedRoute({ type: "player", redirectTo });

export const useOwnerRoute = (redirectTo?: string) =>
  useProtectedRoute({ type: "owner", redirectTo });

export const useAuthRoute = (redirectTo?: string) =>
  useProtectedRoute({ type: "auth", redirectTo });
