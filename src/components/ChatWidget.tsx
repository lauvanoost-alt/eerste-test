'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  X,
  Send,
  Stethoscope,
  Award,
  Building2,
  Landmark,
  ArrowRight,
  ChevronLeft,
} from 'lucide-react';

interface RoleData {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  pages: { label: string; href: string }[];
}

const roles: RoleData[] = [
  {
    id: 'zorgprofessional',
    title: 'Zorgprofessional',
    icon: Stethoscope,
    description:
      'Jij ziet dagelijks jongeren die vastlopen. Ontdek wat er al werkt en sluit je aan bij collega\u2019s in jouw regio.',
    pages: [
      { label: 'Initiatieven', href: '/initiatieven' },
      { label: 'Community', href: '/community' },
      { label: 'Quiz', href: '/quiz' },
    ],
  },
  {
    id: 'kopgroeplid',
    title: 'Zorgbestuurder (Kopgroeplid)',
    icon: Award,
    description:
      'Jullie organisatie loopt voorop. Hier vind je tools en data om jullie aanpak te versterken en resultaten zichtbaar te maken.',
    pages: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Impact Simulator', href: '/impact-simulator' },
      { label: 'Organisaties', href: '/organisaties' },
    ],
  },
  {
    id: 'geen-kopgroeplid',
    title: 'Zorgbestuurder (nog geen Kopgroeplid)',
    icon: Building2,
    description:
      'De beweging groeit \u2014 en er is plek voor jouw organisatie. Ontdek wat aansluiting kan opleveren.',
    pages: [
      { label: 'Kwaliteit als Medicijn', href: '/kwaliteit-als-medicijn' },
      { label: 'Initiatieven', href: '/initiatieven' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    id: 'wethouder',
    title: 'Wethouder',
    icon: Landmark,
    description:
      'Als bestuurder ben jij de onmisbare schakel. Zie wat deze transformatie betekent voor jongeren in jouw gemeente.',
    pages: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Gemeentekaart', href: '/gemeentekaart' },
      { label: 'Impact Simulator', href: '/impact-simulator' },
    ],
  },
];

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const quickQuestions: { label: string; answer: string }[] = [
  {
    label: 'Wat is KAM?',
    answer:
      'Kwaliteit als Medicijn (KAM) is een benadering die betere zorg combineert met lagere kosten. Het rust op drie pijlers:\n\n1. Kwaliteitsverbetering \u2014 door innovatieve interventies zoals overbruggingszorg en brede intake\n2. Volumereductie \u2014 minder onnodige en vermijdbare trajecten, 15-20% potentieel in ZHZ\n3. Samenwerking \u2014 een kopgroep van 8 aanbieders die samen leren en opschalen\n\nDe aanpak is bewezen in de curatieve zorg (Bernhoven, Rivas) met 7-13% volumedaling in 2 jaar.',
  },
  {
    label: 'Welke initiatieven zijn er?',
    answer:
      'Er zijn 5 actieve initiatieven in de kopgroep ZHZ:\n\n1. Overbruggingszorg (De Hoop) \u2014 ~11% besparing, \u20ac2,0 mln\n2. Brede Intake (Parnassia) \u2014 ~14% besparing, \u20ac2,5 mln\n3. Kracht van Kort (Perspectief & Eleos) \u2014 ~10-20% besparing\n4. Gezinsgerichte Aanpak (FamilySupporters) \u2014 business case in ontwikkeling\n5. Integraal Zorgaanbod met Groepsbegeleiding (CareHouse) \u2014 business case in ontwikkeling\n\nTotale potenti\u00eble impact: \u20ac2,9 - \u20ac3,8 mln.',
  },
  {
    label: 'Wat betekent dit voor mijn gemeente?',
    answer:
      'Uit analyse blijkt dat ~78% van de kostenverschillen tussen gemeenten verklaard wordt door bevolkingskenmerken (sociaaleconomisch profiel, demografie). Maar ~22% hangt samen met lokale werkwijzen en contractafspraken \u2014 daar zit de ruimte voor verbetering.\n\nBekijk de Gemeentekaart (/gemeentekaart) om te zien hoe jouw gemeente scoort en welke besparingspotentie er is.',
  },
  {
    label: 'Hoe kan ik meedoen?',
    answer:
      'Er zijn verschillende manieren om mee te doen:\n\n\u2022 Bezoek de Community-pagina (/community) om vragen te stellen en ervaringen te delen met collega\u2019s\n\u2022 Vul het aanmeldformulier in onderaan de homepage om je aan te sluiten bij de beweging\n\u2022 Als zorgaanbieder kun je contact opnemen om te verkennen hoe je bij de kopgroep kunt aansluiten\n\nDe beweging groeit \u2014 en er is plek voor iedereen die wil bijdragen aan passende jeugdzorg.',
  },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RoleData | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleRoleSelect = (role: RoleData) => {
    setSelectedRole(role);
    setMessages([
      {
        role: 'assistant',
        content: `Welkom, ${role.title}! ${role.description}\n\nIk kan je helpen met vragen over Kwaliteit als Medicijn. Stel een vraag of kies een van de suggesties hieronder.`,
      },
    ]);
  };

  const handleQuickQuestion = (q: { label: string; answer: string }) => {
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: q.label },
      { role: 'assistant', content: q.answer },
    ]);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    setInputValue('');
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: text },
      {
        role: 'assistant',
        content:
          'Bedankt voor je vraag! Dit is een demo-versie van de KAM Assistent. In de toekomst wordt hier een AI-gestuurde assistent aan gekoppeld. Gebruik in de tussentijd de snelkeuzes hieronder of verken het platform via de navigatie.',
      },
    ]);
  };

  const handleBack = () => {
    setSelectedRole(null);
    setMessages([]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg hover:bg-primary-600 transition-all hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex w-[380px] flex-col rounded-2xl bg-white shadow-2xl border border-surface-200 overflow-hidden"
          style={{ height: '500px', maxHeight: 'calc(100vh - 48px)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-primary-700 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              {selectedRole && (
                <button
                  onClick={handleBack}
                  className="rounded p-0.5 hover:bg-white/20 transition"
                  aria-label="Terug"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold text-sm">KAM Assistent</span>
            </div>
            <button
              onClick={handleClose}
              className="rounded p-1 hover:bg-white/20 transition"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4">
            {!selectedRole ? (
              /* Role selection */
              <div>
                <p className="text-sm text-gray-600 mb-3">
                  Welkom! Selecteer je rol zodat ik je beter kan helpen:
                </p>
                <div className="space-y-2">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <button
                        key={role.id}
                        onClick={() => handleRoleSelect(role)}
                        className="flex w-full items-center gap-3 rounded-xl border border-surface-200 bg-surface-50 p-3 text-left hover:border-primary-300 hover:bg-primary-50 transition-all"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {role.title}
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {role.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Chat messages */
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-surface-100 text-foreground'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {/* Suggested pages */}
                {selectedRole && messages.length <= 1 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-gray-500 mb-2">
                      Relevante pagina&apos;s voor jou:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRole.pages.map((page) => (
                        <Link
                          key={page.href}
                          href={page.href}
                          className="inline-flex items-center gap-1 rounded-lg bg-primary-50 px-2.5 py-1.5 text-xs font-medium text-primary-700 hover:bg-primary-100 transition"
                        >
                          {page.label}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick questions */}
                <div className="mt-2">
                  <p className="text-xs font-medium text-gray-500 mb-2">
                    Veelgestelde vragen:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickQuestions.map((q) => (
                      <button
                        key={q.label}
                        onClick={() => handleQuickQuestion(q)}
                        className="rounded-lg border border-surface-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition"
                      >
                        {q.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          {selectedRole && (
            <div className="border-t border-surface-200 p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  placeholder="Stel een vraag..."
                  className="flex-1 rounded-lg border border-surface-200 bg-surface-50 px-3 py-2 text-sm text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
                />
                <button
                  onClick={handleSend}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition"
                  aria-label="Verstuur"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
