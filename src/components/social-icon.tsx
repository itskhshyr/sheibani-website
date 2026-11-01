import { Instagram, Linkedin, MessageCircle, Send } from "lucide-react";

export function SocialIcon({ type, className = "h-5 w-5" }: { type: string; className?: string }) {
  if (type === "instagram") return <Instagram className={className} />;
  if (type === "linkedin") return <Linkedin className={className} />;
  if (type === "telegram") return <Send className={className} />;
  return <MessageCircle className={className} />;
}
