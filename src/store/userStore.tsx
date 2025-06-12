import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type UserStore = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  setUser: (user: UserStore) => void;
};

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    setUser() {
      set((state) => ({
        ...state,
      }));
    },
  }))
);
