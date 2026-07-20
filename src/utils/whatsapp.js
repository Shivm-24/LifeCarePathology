const PHONE = "9129630100"; // Replace with your WhatsApp number

export const openWhatsApp = (message) => {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
