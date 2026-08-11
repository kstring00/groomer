"use client";

import { FormEvent, useState } from "react";
import { smsHref, site } from "@/config/site";

const sizeOptions = ["Under 20 lbs", "20–40 lbs", "41–60 lbs", "61–80 lbs"];
const serviceOptions = ["Full groom", "Bath", "Nail trim", "Doodle / breed cut", "Puppy first cut", "Not sure yet"];
const temperamentOptions = ["Easygoing", "A little nervous", "Very anxious / difficult", "Senior pup", "First groom / puppy"];

export default function TextToBook() {
  const [service, setService] = useState(serviceOptions[0]);
  const [size, setSize] = useState(sizeOptions[0]);
  const [temperament, setTemperament] = useState(temperamentOptions[0]);
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi Snoopy's Corner! I'd like to ask about a grooming appointment.",
      "",
      `Service: ${service}`,
      `Dog size: ${size}`,
      `Temperament / stage: ${temperament}`,
      details.trim() ? `Notes: ${details.trim()}` : "Notes: None yet",
      "",
      "I can send a current photo of my pup if helpful.",
    ].join("\n");
    window.location.href = smsHref(message);
  }

  return (
    <form className="booking-card" onSubmit={handleSubmit}>
      <div className="booking-heading">
        <span className="eyebrow">ONE TAP FROM HERE</span>
        <h3>Tell us about your pup.</h3>
        <p>This preview does not submit or store anything. It opens a ready-to-send text to {site.displayPhone}.</p>
      </div>

      <label>
        What do you need?
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {serviceOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>

      <label>
        About how big is your dog?
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {sizeOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>

      <label>
        Anything helpful to know?
        <select value={temperament} onChange={(e) => setTemperament(e.target.value)}>
          {temperamentOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>

      <label>
        Quick note <span className="optional">optional</span>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          placeholder="Breed, coat condition, what kind of cut you want, or anything that helps the groomer know your pup."
        />
      </label>

      <button className="button button-primary booking-submit" type="submit">Text to book →</button>
      <p className="microcopy">Dogs up to 80 lbs. Attach a photo after Messages opens if you want to show coat length or style.</p>
    </form>
  );
}
