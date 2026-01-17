"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

const AnnouncementsPage = () => {
  const [events, setEvents] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const today = new Date();
      const upcoming = events.filter((e) => new Date(e.date) >= today);
      const past = events.filter((e) => new Date(e.date) < today);

      setUpcoming(upcoming);
      setPast(past);
    }
  }, [events])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#003f87] text-center mb-10">
            Announcements & Events
          </h1>

          {/* Upcoming Events */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#003f87] mb-4">
              📢 Upcoming Events
            </h2>
            {upcoming.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcoming.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 italic">
                No upcoming events.
              </p>
            )}
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-2xl font-semibold text-[#003f87] mb-4">
              🎉 Past Events
            </h2>
            {past.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {past.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 italic">
                No past events yet.
              </p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AnnouncementsPage;
