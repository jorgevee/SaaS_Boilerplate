"use client";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";
function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">About</h1>
      <div className="max-w-2xl mx-auto my-4 py-2">
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam voluptatum
          quos quas quidem nesciunt. Quisquam, quae. Quisquam voluptates, quod,
          quia, voluptate quae voluptatem quibusdam voluptatum quos quas quidem
          nesciunt. Quisquam, quae. Quisquam voluptates, quod, quia, voluptate
          quae voluptatem quibusdam
        </p>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam.
        </p>
      </div>
    </div>
  );
}

export default About;
