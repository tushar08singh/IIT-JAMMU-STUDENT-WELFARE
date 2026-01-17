"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AdminPage = () => {
  const { data: session, status } = useSession();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
  });
  const [message, setMessage] = useState("");

  // ---------------- LOADING ----------------
  if (status === "loading") {
    return (
      <p className="text-center mt-20 text-gray-600">
        Loading...
      </p>
    );
  }

  // ---------------- LOGIN PAGE ----------------
  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-[#003f87] mb-2">
            Admin Login
          </h1>

          <p className="text-gray-600 mb-8">
            Sign in with your authorized Google account
          </p>

          <button
            onClick={() => signIn("google")}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            {/* Google Logo */}
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.66 1.22 9.14 3.62l6.82-6.82C35.82 2.34 30.47 0 24 0 14.64 0 6.48 5.38 2.56 13.22l7.94 6.17C12.6 13.09 17.9 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.1 24.55c0-1.64-.15-3.21-.43-4.73H24v9.03h12.45c-.54 2.9-2.17 5.36-4.62 7.03l7.1 5.51c4.15-3.83 6.17-9.48 6.17-15.84z"/>
              <path fill="#FBBC05" d="M10.5 28.39c-.49-1.45-.77-2.99-.77-4.39s.28-2.94.77-4.39l-7.94-6.17C.92 16.53 0 20.16 0 24s.92 7.47 2.56 10.56l7.94-6.17z"/>
              <path fill="#34A853" d="M24 48c6.47 0 11.82-2.13 15.76-5.79l-7.1-5.51c-1.97 1.33-4.49 2.11-8.66 2.11-6.1 0-11.4-3.59-13.5-8.89l-7.94 6.17C6.48 42.62 14.64 48 24 48z"/>
            </svg>

            Sign in with Google
          </button>

          <p className="text-xs text-gray-500 mt-6">
            Only authorized admin emails can access
          </p>
        </div>
      </main>
    );
  }

  // ---------------- ACCESS DENIED ----------------
  if (!session.user.isAdmin) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-xl font-bold text-red-600">
          Access Denied
        </h1>
        <p className="mt-2 text-gray-600">
          {session.user.email}
        </p>
        <button
          onClick={() => signOut()}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </main>
    );
  }

  // ---------------- FORM LOGIC ----------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Adding event...");

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    console.log("res =", res)

    if (res.ok) {
      setMessage("✅ Event added successfully!");
      setForm({ title: "", description: "", date: "", image: "" });
    } else {
      setMessage("❌ Failed to add event.");
    }
  };

  // ---------------- ADMIN DASHBOARD ----------------
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
        {/* Top Bar */}
        <div className="w-full max-w-lg flex items-center justify-between mb-8 bg-white px-4 py-3 rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#003f87] text-white flex items-center justify-center font-semibold">
              {session.user.email.charAt(0).toUpperCase()}
            </div>
            <div className="text-sm">
              <p className="text-gray-500">Logged in as</p>
              <p className="font-medium text-gray-800">
                {session.user.email}
              </p>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="text-sm px-4 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>

        <h1 className="text-3xl font-bold text-[#003f87] mb-8">
          Admin: Add Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg space-y-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-[#003f87] text-white py-3 rounded-lg hover:bg-blue-900"
          >
            Publish Event
          </button>

          <p className="text-center text-gray-600">{message}</p>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default AdminPage;
