// Update this number to change the WhatsApp destination site-wide.
export const WHATSAPP_NUMBER = "1234567890";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Elclassico — I'd like to discuss a custom piece.")}`;

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white shadow-2xl grid place-items-center hover:scale-110 transition-transform animate-float"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.85 11.85 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.24-6.15-3.41-8.44ZM12.06 21.6h-.01a9.7 9.7 0 0 1-4.95-1.36l-.35-.21-3.77.99 1.01-3.67-.23-.38a9.72 9.72 0 0 1-1.49-5.1c0-5.37 4.37-9.74 9.74-9.74 2.6 0 5.05 1.02 6.89 2.86a9.68 9.68 0 0 1 2.86 6.89c0 5.37-4.37 9.72-9.7 9.72Zm5.32-7.28c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.03 1-1.03 2.45 0 1.45 1.05 2.84 1.2 3.04.15.19 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>
      </svg>
    </a>
  );
}
