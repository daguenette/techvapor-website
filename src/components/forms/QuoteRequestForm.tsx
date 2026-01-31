import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export function QuoteRequestForm({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Technivapeur - Quote Request");
    const body = encodeURIComponent(
      `${language === "fr" ? "Nom" : "Name"}: ${formData.name}\n` +
        `${language === "fr" ? "Courriel" : "Email"}: ${formData.email}\n` +
        `${language === "fr" ? "Téléphone" : "Phone"}: ${formData.phone}\n` +
        `${language === "fr" ? "Langue" : "Language"}: ${language === "fr" ? "Français" : "English"}\n\n` +
        `${language === "fr" ? "Message" : "Message"}:\n${formData.message}`,
    );

    window.location.href = `mailto:daguenette.data@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Card className={`border-2 border-gray-200 shadow-xl ${className}`}>
      <CardContent className="p-5 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">
          {language === "fr" ? "Demander une soumission" : "Request a Quote"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {language === "fr" ? "Nom complet" : "Full Name"}
            </label>
            <Input
              type="text"
              placeholder={
                language === "fr" ? "Entrez votre nom" : "Enter your name"
              }
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="h-12 sm:h-13 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {language === "fr" ? "Adresse courriel" : "Email Address"}
            </label>
            <Input
              type="email"
              placeholder={
                language === "fr" ? "votre@email.com" : "your@email.com"
              }
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="h-12 sm:h-13 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {language === "fr" ? "Téléphone" : "Phone"}
            </label>
            <Input
              type="tel"
              placeholder={
                language === "fr" ? "(514) 123-4567" : "(514) 123-4567"
              }
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
              className="h-12 sm:h-13 text-base border-gray-300 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {language === "fr" ? "Votre message" : "Your Message"}
            </label>
            <Textarea
              placeholder={
                language === "fr"
                  ? "Décrivez vos besoins de nettoyage..."
                  : "Describe your cleaning needs..."
              }
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="text-base border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold h-12 sm:h-13 text-base sm:text-lg transition-all min-h-[48px]"
          >
            <Send className="mr-2 h-5 w-5" />
            {language === "fr" ? "Envoyer la demande" : "Send Request"}
          </Button>

          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 px-2">
            {language === "fr"
              ? "Nous respectons votre vie privée. Vos informations sont sécurisées."
              : "We respect your privacy. Your information is secure."}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
