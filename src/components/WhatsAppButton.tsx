import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254785748006"; // WhatsApp contact number
  const message = encodeURIComponent(
    "Hi George, I just visited your portfolio and would like to discuss a web development project."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
