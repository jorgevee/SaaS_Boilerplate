"use client";
import { useState, createContext } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Hero({ auth }: any) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center mb-8">
        Welcome to your saas app
      </h1>
      {auth ? (
        <Link
          href="/dashboard"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Dashboard
        </Link>
      ) : (
        <Link
          href="/api/auth/signin"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
      )}
    </div>
  );
}
