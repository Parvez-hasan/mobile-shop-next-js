
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
    
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const MOCK_EMAIL = "puser@gmail.com";
  const MOCK_PASSWORD = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      
      Cookies.set("auth", "true", { expires: 1 });
      toast.success("Login successful!");
      router.push("/items"); 
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-20 bg-[#fdfbc8] p-8 rounded-xl shadow-lg">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-center text-[#5c09ea] mb-6">
        Login
      </h1>
      <form onSubmit={handleLogin} className="flex W-40 flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b6af0]"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b6af0]"
          required
        />
        <button
          type="submit"
          className="bg-[#9b6af0] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Login
        </button>
      </form>
     
    </div>
  );
}