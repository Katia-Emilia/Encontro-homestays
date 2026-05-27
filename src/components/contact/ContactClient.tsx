"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactClient() {
  const [form, setForm] = useState({
    arrival: "",
    departure: "",
    guests: "1 Guest",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.arrival || !form.departure) {
      toast.error("Please select your arrival and departure dates.");
      return;
    }

    toast.success("Checking availability — we'll be in touch shortly.");
  };

  return (
    <form
      onSubmit={submit}
      className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 md:mt-14 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end"
    >
      {/* Arrival */}
      <div>
        <label className="text-[10px] uppercase text-cobalt/60">
          Arrival
        </label>
        <input
          type="date"
          value={form.arrival}
          onChange={(e) =>
            setForm({ ...form, arrival: e.target.value })
          }
          className="mt-3 w-full bg-background px-4 py-3 text-cobalt border border-cobalt/10 focus:border-gold focus:outline-none"
        />
      </div>

      {/* Departure */}
      <div>
        <label className="text-[10px] uppercase text-cobalt/60">
          Departure
        </label>
        <input
          type="date"
          value={form.departure}
          onChange={(e) =>
            setForm({ ...form, departure: e.target.value })
          }
          className="mt-3 w-full bg-background px-4 py-3 text-cobalt border border-cobalt/10 focus:border-gold focus:outline-none"
        />
      </div>

      {/* Guests */}
      <div>
        <label className="text-[10px] uppercase text-cobalt/60">
          Guests
        </label>
        <select
          value={form.guests}
          onChange={(e) =>
            setForm({ ...form, guests: e.target.value })
          }
          className="mt-3 w-full bg-background px-4 py-3 text-cobalt border border-cobalt/10 focus:border-gold focus:outline-none"
        >
          {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map(
            (g) => (
              <option key={g}>{g}</option>
            )
          )}
        </select>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-cobalt px-8 py-4 text-xs uppercase text-white hover:bg-gold hover:text-cobalt sm:col-span-2 md:col-span-1"
      >
        Check Availability
      </button>
    </form>
  );
}