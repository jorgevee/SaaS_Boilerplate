"use client";
import { signIn, signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}

export function SignInButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => signIn("github")}
    >
      Sign In
    </button>
  );
}
