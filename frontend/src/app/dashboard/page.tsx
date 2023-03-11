import { getServerSession } from "next-auth/next";
import { SignInButton, SignOutButton } from "./actions";
import { redirect } from "next/navigation";
import { getStockData, StockData } from "./stocks";

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
  if (!session) {
    return redirect("/api/auth/signin");
  }
  const data = await getStockData();

  return (
    <div className="w-full max-w-2xl mx-auto my-4 py-2">
      <h1 className="text-lg font-bold bg-center">Dashboard</h1>
      {session ? (
        <div>
          <StockData data={data} />
          <p className="text-gray-600 mb-4">
            You are signed in as {session?.user?.email} and can now access all
            of our cool <a href="/blog">blog posts</a>.
          </p>
          <SignOutButton />
        </div>
      ) : (
        <div>
          <p className="text-gray-600 mb-4">
            You are not signed in. Please sign in to access all of our cool{" "}
            <a href="/blog">blog posts</a>.
          </p>
        </div>
      )}
    </div>
  );
}
