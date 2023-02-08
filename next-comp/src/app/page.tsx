'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Dashboard from "./components/Dashboard";
import NavBar from './components/Navbar';
import './globals.css';

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main className="h-screen flex">
        <button className="bg-gray-800 text-3xl font-bold text-white rounded-xl p-2.5 m-auto" onClick={() => signIn("github")}>
          Sign in
        </button>
      </main>
    )
  } else {
    return (
      <main>
        <NavBar />
        <Dashboard />
      </main>
    )
  }
}
