import { FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/ui/icons";

export const siteConfig = {
  name: "Pokhara Kala Kendra",
  description:
    "Preserving and celebrating the vibrant cultural heritage of Nepal through authentic traditional attire and highly curated classical dance classes.",
  contact: {
    phone: {
      display: "+977 9856035168",
      link: "tel:+9779856035168",
    },
    email: "rahulmagar1324@gmail.com",
    address: {
      line1: "Siddhartha Chowk, Pokhara",
      line2: "Gandaki Province, Nepal",
      short: "Siddhartha Chowk, Pokhara",
    },
  },
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/PokharaKalaKendraAndCulturalDressHireCentre",
      Icon: FacebookIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/pokhara_kala_kendra/",
      Icon: InstagramIcon,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@pokarakalakendra9317",
      Icon: YouTubeIcon,
    },
  ],
};
