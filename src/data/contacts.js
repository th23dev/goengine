const applicationMessage = "Olá! Vim pelo site da Goengine e gostaria de conversar sobre o desenvolvimento de um aplicativo ou sistema para meu negócio. Como funciona o processo e o orçamento?";
const websiteMessage = "Olá! Vim pelo site da Goengine e gostaria de criar um site ou landing page para meu negócio. Como funciona o processo e o orçamento?";

export const whatsappContacts = [
  { label: "Aplicativos e sistemas", number: "+55 91 8839-1867", url: `https://wa.me/559188391867?text=${encodeURIComponent(applicationMessage)}` },
  { label: "Sites e landing pages", number: "+55 91 8475-0946", url: `https://wa.me/559184750946?text=${encodeURIComponent(websiteMessage)}` },
];

// Confirmed brand profile URLs enable the social links.
export const socialContacts = {
  instagram: "https://www.instagram.com/th23dev/",
  tiktok: "https://www.tiktok.com/@th23dev",
};
