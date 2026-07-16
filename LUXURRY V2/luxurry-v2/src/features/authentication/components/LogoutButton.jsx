"use client";

import { signOut } from "../actions";

export default function LogoutButton() {
  return (
    <form action={signOut}>
      <button className="rounded-full border border-[#C8A96B] px-5 py-2 text-sm font-medium text-[#3A3530] transition-all duration-300 hover:bg-[#C8A96B] hover:text-white">
  Sign Out
</button>
    </form>
  );
}