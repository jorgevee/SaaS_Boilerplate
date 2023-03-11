import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/Hero";
import Pricing from "./components/pricing";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  let session;

  try {
    const [sessionRes] = await Promise.allSettled([getServerSession()]);
    if (sessionRes.status === "fulfilled") {
      session = sessionRes.value;
    } else {
      console.error(sessionRes.reason);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <Hero auth={session} />
      <Pricing />
    </div>
  );
}
