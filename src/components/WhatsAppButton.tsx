const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "7598480664";
    const message = "Welcome to Gromo! 🌟 Do you have a website? Let Gromo help you stay connected with your customers online. Build your digital presence today!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-32 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-40 animate-bounce-in animate-glow-pulse"
      aria-label="Contact via WhatsApp"
      title="Chat Gromo"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.49 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.89 11.89 0 005.68 1.45h.01c6.56 0 11.89-5.34 11.89-11.89A11.82 11.82 0 0020.52 3.48zM12.05 21.78h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98.99-3.65-.23-.37A9.86 9.86 0 012.16 11.9C2.16 6.44 6.6 2 12.05 2a9.85 9.85 0 019.84 9.89c0 5.45-4.44 9.89-9.84 9.89zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;