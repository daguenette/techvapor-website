import { Card, CardContent } from "@/components/ui/card";
import { TEAM_MEMBERS, ABOUT_CONTENT } from "@/lib/constants/site-content";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { User } from "lucide-react";

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="bg-gray-50 py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t(ABOUT_CONTENT.title)}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t(ABOUT_CONTENT.subtitle)}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TEAM_MEMBERS.map((member) => (
            <Card key={member.id} className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center space-x-4">
                  <div className="flex size-16 items-center justify-center rounded-full bg-[#F0492E]/20">
                    <User className="size-8 text-[#F0492E]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="font-medium text-[#F0492E]">
                      {t(member.specialty)}
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-gray-600">{t(member.bio)}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    {language === "fr" ? "Forces :" : "Strengths:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.strengths[language].map((strength) => (
                      <span
                        key={strength}
                        className="rounded-full bg-[#F0492E]/10 px-3 py-1 text-sm font-medium text-[#F0492E]"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">{t(ABOUT_CONTENT.conclusion)}</p>
        </div>
      </div>
    </section>
  );
}
