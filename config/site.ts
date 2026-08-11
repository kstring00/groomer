export const site = {
  previewMode: true,
  businessName: "Snoopy's Corner Dog Grooming",
  shortName: "Snoopy's Corner",
  ownerFirstName: "Krystlle",
  phone: "+18322269485",
  displayPhone: "(832) 226-9485",
  address: {
    street: "2014 Bayport Blvd",
    city: "Seabrook",
    state: "TX",
    zip: "77586",
    landmark: "Next to Sherwin Williams",
    lat: 29.5712656,
    lng: -95.025733,
  },
  rating: 5.0,
  reviewCount: 51,
  hours: [
    { days: "Monday", value: "Closed" },
    { days: "Tuesday–Saturday", value: "9:00 AM–3:30 PM" },
    { days: "Sunday", value: "Closed" },
  ],
  dogWeightLimitLbs: 80,
  establishedCurrentOwnership: 2020,
  socials: {
    facebook: "https://facebook.com/snoopyscornerdoggrooming",
    yelp: "https://yelp.com/biz/snoopys-corner-dog-grooming-seabrook",
    nextdoor: "https://nextdoor.com/pages/snoopys-corner-seabrook-tx/",
    googleReviews: "",
  },
  services: [
    {
      name: "Full Groom",
      note: "Haircut and grooming care tailored to your pup. Current reviews document full haircuts and breed-specific cuts.",
      icon: "✂",
    },
    {
      name: "Bath",
      note: "A fresh bath for pups who need a clean-up without a haircut.",
      icon: "◌",
    },
    {
      name: "Nail Trim",
      note: "Nail trims are a current, frequently mentioned service. Text first to confirm appointment availability.",
      icon: "⌁",
    },
    {
      name: "Doodle & Breed Cuts",
      note: "Customers specifically mention choosing Snoopy's Corner for proper Doodle and breed-specific cuts.",
      icon: "✦",
    },
    {
      name: "Puppy First Cuts",
      note: "Gentle first grooming experiences are documented in current customer reviews.",
      icon: "♡",
    },
    {
      name: "Senior & Nervous Pups",
      note: "Patient handling for anxious, difficult, senior, and end-of-life dogs is one of Snoopy's strongest review themes.",
      icon: "☁",
    },
  ],
  reviewThemes: [
    "Calm with anxious dogs",
    "Gentle with senior pups",
    "Doodle-cut know-how",
    "Small-shop familiarity",
    "Reasonable value",
  ],
  ownerConfirmations: [
    "Access to the old snoopyscorner.weebly.com website",
    "Current service menu and any price ranges",
    "Whether cat grooming is still offered",
    "Vaccination, cancellation, no-show, and matting policies",
    "Whether the $5 first-visit offer is still active",
    "Whether nail trims accept walk-ins",
    "Permission to use existing photos or shoot new before/after photos",
    "Current staff names and consent to feature them",
    "Any current logo/signage and preferred brand colors",
  ],
} as const;

export const smsHref = (message?: string) => {
  const base = `sms:${site.phone}`;
  return message ? `${base}?&body=${encodeURIComponent(message)}` : base;
};

export const callHref = `tel:${site.phone}`;
export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`)}`;
