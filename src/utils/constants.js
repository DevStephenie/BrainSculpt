import bulb from "../assets/bulb.jpg";
import pro from "../assets/professional.jpg";
import teen from "../assets/teen.jpg";
import children from "../assets/children.jpg";
import fallingBooks from "../assets/falling_books.jpg";
import leaveVains from "../assets/leave_vains.jpg";
import meditation from "../assets/meditation.jpg";
import library from "../assets/library.jpg";
import message from "../assets/message.jpg";
import stressedDog from "../assets/stressed_dog.jpg";
import youtube from "../assets/youtube.jpg";

export const FONTFAMILY = {
  openSans: { fontFamily: "openSans" },
};

export const trainings = [
  {
    image: bulb,
    title: "Tribe",
    to: "tribe",
  },
  {
    image: pro,
    title: "Professional",
    to: "Professional",
  },
  {
    image: teen,
    title: "Teens",
    to: "teens",
  },
  {
    image: children,
    title: "Children",
    to: "Children",
  },
];

export const meditations = [
  {
    image: meditation,
    page: "a",
  },
  {
    image: youtube,
    page: "b",
  },
  {
    image: bulb,
    page: "c",
  },
];

export const stressLevels = [
  {
    level: "0-4",
    cta: "",
    icon: "😌",
  },
  {
    level: "5-7",
    cta: "Lets Release",
    icon: "😟",
  },
  {
    level: "8-10",
    cta: "Lets Calm",
    icon: "😫",
  },
];

export const shortcuts = [
  {
    title: "Learn",
    image: library,
    to: "",
  },
  {
    title: "Play",
    image: children,
    to: "",
  },
  {
    title: "Rewire",
    image: leaveVains,
    to: "",
  },
  {
    title: "Stress Symptoms",
    image: stressedDog,
    to: "",
  },
  {
    title: "Message Portal",
    image: message,
    to: "",
  },
];

export const navigators = [
  {
    title: "Daily Tasks",
    to: "",
  },
  {
    title: "Community",
    to: "",
  },
  {
    title: "AI Chats",
    to: "",
  },
  {
    title: "Daily Tasks",
    to: "",
  },
  {
    title: "Daily Tasks",
    to: "",
  },
];

export const more = [
  {
    title: "GUIDES",
    items: [
      {
        title: "App Info",
        dest: "",
      },
      {
        title: "User Guide",
        dest: "",
      },
      {
        title: "Video Tutorials",
        dest: "",
      },
      {
        title: "BrainSculpt Theory",
        dest: "",
      },
    ],
  },
  {
    title: "FEATURES",
    items: [
      {
        title: "Device Manager",
        dest: "",
      },
      {
        title: "Share & Remote (For Virtual EMDR)",
        dest: "",
      },
      {
        title: "Connect Pulsers",
        dest: "",
      },
      {
        title: "Find my lost pulsers",
        dest: "",
      },
      {
        title: "R&D",
        dest: "",
      },
      {
        title: "Upgrade firmware",
        dest: "",
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        title: "Contact us",
        dest: "",
      },
      {
        title: "Website",
        dest: "",
      },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      {
        title: "Log out ",
        dest: "",
      },
    ],
  },
  {
    title: "DIAGNOSTICS",
    items: [
      {
        title: "App version",
        dest: "",
      },
      {
        title: "App last updated",
        dest: "",
      },
      {
        title: "Last connected on",
        dest: "",
      },
      {
        title: "Firmware version (Primary)",
        dest: "",
      },
      {
        title: "Firmware version (Secondary)",
        dest: "",
      },
      {
        title: "Battery voltage (Primary)",
        dest: "",
      },
      {
        title: "Battery voltage (Secondary)",
        dest: "",
      },
    ],
  },
];
