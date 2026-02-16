import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Mail,
  User,
  MessageSquare,
  ThumbsUp,
  Clock,
  ChevronRight,
  Users,
  Search,
  Tag,
  ArrowRight,
  MessageCircle,
  Eye,
  Pin,
} from 'lucide-react';
import { communityMembers } from '@/data/community';
import { themes } from '@/data/themes';
import { Tag as TagComponent } from '@/components/ui/Tag';

export const metadata: Metadata = {
  title: 'Community & Forum',
  description:
    'Stel vragen, deel ervaringen en vind collega-professionals. Het forum voor jeugdzorg innovatie in Nederland.',
};

const forumTopics = [
  {
    id: 1,
    titel: 'Ervaringen met overbruggingszorg tijdens wachtlijst?',
    auteur: { naam: 'Demo-gebruiker: Marieke V.', organisatie: 'GGZ-instelling regio Utrecht', isDemo: true },
    categorie: 'Initiatieven',
    datum: '14 feb 2026',
    reacties: 7,
    views: 42,
    pinned: true,
    laatsteReactie: 'Demo-gebruiker: Sophie J.',
    preview:
      'Wij overwegen om een overbruggingstraject op te zetten vergelijkbaar met wat De Hoop doet. Heeft iemand ervaring met het opzetten hiervan? Met name benieuwd naar de participatiegraad en hoe jullie omgaan met...',
    antwoorden: [
      {
        auteur: { naam: 'Demo-gebruiker: Ahmed H.', organisatie: 'Jeugdzorginstelling ZHZ', isDemo: true },
        datum: '14 feb 2026',
        tekst: 'Wij zijn hier vorig jaar mee gestart. De participatiegraad was aanvankelijk rond de 60%, maar door het voorwaardelijk te maken voor de intake is dat gestegen naar ~85%. Belangrijk is om de e-modules niet te zwaar te maken.',
        likes: 5,
      },
      {
        auteur: { naam: 'Demo-gebruiker: Linda D.', organisatie: 'Gemeente', isDemo: true },
        datum: '14 feb 2026',
        tekst: 'Vanuit de gemeente zien wij hier veel potentie in. Belangrijk aandachtspunt is wel de contractering: zorg dat het overbruggingsproduct goed in het productenboek past. Wij liepen daar aanvankelijk tegenaan.',
        likes: 3,
      },
    ],
  },
  {
    id: 2,
    titel: 'Kracht van Kort: hoe institutionaliseer je dit bij je organisatie?',
    auteur: { naam: 'Demo-gebruiker: Peter S.', organisatie: 'GGZ-aanbieder Drechtsteden', isDemo: true },
    categorie: 'Werkwijzen',
    datum: '12 feb 2026',
    reacties: 4,
    views: 31,
    pinned: false,
    laatsteReactie: 'Demo-gebruiker: Marieke V.',
    preview:
      'We hebben onze behandelaren opgeleid in Kracht van Kort, maar merken dat het in de praktijk lastig is om de werkwijze vast te houden. Hoe pakken andere organisaties dit aan? Gebruiken jullie spiegelinformatie?',
    antwoorden: [
      {
        auteur: { naam: 'Demo-gebruiker: Sophie J.', organisatie: 'GGZ-instelling ZHZ', isDemo: true },
        datum: '13 feb 2026',
        tekst: 'Bij ons heeft het geholpen om in het MDO (multidisciplinair overleg) structureel een "cliënt review" te doen: voor elke cliënt boven de 9 maanden behandelduur bespreken we of afronding passend is. Dit vergt discipline maar werkt goed.',
        likes: 8,
      },
    ],
  },
  {
    id: 3,
    titel: 'Gezinsgerichte aanpak: hoe betrek je huisartsen?',
    auteur: { naam: 'Demo-gebruiker: Linda D.', organisatie: 'Gemeente Dordrecht', isDemo: true },
    categorie: 'Samenwerking',
    datum: '10 feb 2026',
    reacties: 3,
    views: 28,
    pinned: false,
    laatsteReactie: 'Demo-gebruiker: Ahmed H.',
    preview:
      'Vanuit de FamilySupporters-aanpak willen we de huisartsen meenemen in het gezinsgerichte denken. Maar huisartsen hebben beperkt tijd en overzicht. Hoe communiceren jullie met de eerste lijn over dit soort initiatieven?',
    antwoorden: [
      {
        auteur: { naam: 'Demo-gebruiker: Peter S.', organisatie: 'GGZ-aanbieder', isDemo: true },
        datum: '11 feb 2026',
        tekst: 'Wij hebben een "verwijskaart" gemaakt voor huisartsen met per type problematiek de aanbevolen route. Korte, visuele kaart die ze in hun spreekkamer kunnen ophangen. Is goed ontvangen bij de huisartsengroep in onze regio.',
        likes: 6,
      },
    ],
  },
  {
    id: 4,
    titel: 'Brede intake: ervaringen met ervaringsdeskundigen in het intakeproces?',
    auteur: { naam: 'Demo-gebruiker: Sophie J.', organisatie: 'Parnassia-achtig model', isDemo: true },
    categorie: 'Initiatieven',
    datum: '8 feb 2026',
    reacties: 5,
    views: 37,
    pinned: false,
    laatsteReactie: 'Demo-gebruiker: Marieke V.',
    preview:
      'We zijn bezig met het opzetten van een brede intake waarbij we naast een GGZ-professional ook een ervaringsdeskundige inzetten. Hoe selecteren jullie ervaringsdeskundigen en hoe borgen jullie de kwaliteit?',
    antwoorden: [
      {
        auteur: { naam: 'Demo-gebruiker: Ahmed H.', organisatie: 'Jeugdzorginstelling', isDemo: true },
        datum: '9 feb 2026',
        tekst: 'Bij Mentiek (GGZ 18+) doen ze dit al: een verkennend gesprek met een GGZ-professional, welzijnsmedewerker EN ervaringsdeskundige. De ervaringsdeskundigen zijn opgeleid via een geaccrediteerd programma. Het helpt enorm bij het normaliseren van de hulpvraag.',
        likes: 4,
      },
    ],
  },
  {
    id: 5,
    titel: 'Wie kent goede voorbeelden van groepsbegeleiding voor jeugdigen?',
    auteur: { naam: 'Demo-gebruiker: Ahmed H.', organisatie: 'Jeugdzorginstelling ZHZ', isDemo: true },
    categorie: 'Kennisdeling',
    datum: '5 feb 2026',
    reacties: 2,
    views: 19,
    pinned: false,
    laatsteReactie: 'Demo-gebruiker: Peter S.',
    preview:
      'CareHouse werkt met groepsbegeleiding (1 op 4) als aanvulling op individuele behandeling. Zijn er meer organisaties die hiermee werken? Benieuwd naar ervaringen met het samenstellen van groepen.',
    antwoorden: [
      {
        auteur: { naam: 'Demo-gebruiker: Linda D.', organisatie: 'Gemeente', isDemo: true },
        datum: '6 feb 2026',
        tekst: 'In Veendam wordt dit ook gedaan via het Jeugdexpertise Punt (JEP). Daar worden groepen samengesteld op basis van leeftijd en problematiek. Het mooie is dat jongeren van elkaar leren en het minder "medisch" voelt.',
        likes: 3,
      },
    ],
  },
];

const categorieKleuren: Record<string, string> = {
  Initiatieven: 'bg-sky-100 text-sky-700',
  Werkwijzen: 'bg-amber-100 text-amber-700',
  Samenwerking: 'bg-teal-100 text-teal-700',
  Kennisdeling: 'bg-violet-100 text-violet-700',
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Community &amp; Forum</h1>
          <p className="mt-2 text-gray-500 max-w-2xl">
            Stel vragen aan collega-professionals, deel je ervaringen met initiatieven, en leer van
            wat er in andere regio&apos;s gebeurt. Samen bouwen we aan passende jeugdzorg.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition shrink-0">
          <MessageSquare className="h-4 w-4" />
          Nieuwe vraag stellen
        </button>
      </div>

      {/* Demo notice */}
      <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4">
        <p className="text-sm text-amber-800">
          <strong>Let op:</strong> Dit forum bevat momenteel demonstratie-inhoud met fictieve gebruikers.
          Alle namen en berichten zijn ter illustratie van de beoogde functionaliteit. In de definitieve versie
          kunnen echte professionals hier vragen stellen en ervaringen delen.
        </p>
      </div>

      {/* Stats bar */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Onderwerpen', value: forumTopics.length, icon: MessageSquare },
          { label: 'Reacties totaal', value: forumTopics.reduce((sum, t) => sum + t.reacties, 0), icon: MessageCircle },
          { label: 'Categorieën', value: Object.keys(categorieKleuren).length, icon: Tag },
          { label: 'Demo-deelnemers', value: 5, icon: Users },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-surface-50 border border-surface-200 p-4 text-center">
            <stat.icon className="mx-auto h-5 w-5 text-primary-500" />
            <p className="mt-1 text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Forum topics */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary-600" />
          Recente discussies
        </h2>

        <div className="mt-4 space-y-4">
          {forumTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-xl border border-surface-200 bg-white hover:border-primary-200 transition-colors"
            >
              {/* Topic header */}
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      {topic.pinned && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-700">
                          <Pin className="h-3 w-3" /> Vastgezet
                        </span>
                      )}
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categorieKleuren[topic.categorie] || 'bg-gray-100 text-gray-700'}`}>
                        {topic.categorie}
                      </span>
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{topic.titel}</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{topic.preview}</p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                      <span>{topic.auteur.naam}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {topic.datum}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {topic.reacties} reacties
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" /> {topic.views} views
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Answers preview */}
              {topic.antwoorden.length > 0 && (
                <div className="border-t border-surface-100 bg-surface-50/50 p-5 space-y-4 rounded-b-xl">
                  {topic.antwoorden.map((antwoord, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-200 text-gray-500">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="font-medium text-gray-600">{antwoord.auteur.naam}</span>
                          <span>&middot;</span>
                          <span>{antwoord.auteur.organisatie}</span>
                          <span>&middot;</span>
                          <span>{antwoord.datum}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 leading-relaxed">{antwoord.tekst}</p>
                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                          <ThumbsUp className="h-3 w-3" /> {antwoord.likes}
                        </div>
                      </div>
                    </div>
                  ))}
                  {topic.reacties > topic.antwoorden.length && (
                    <p className="text-xs text-primary-600 font-medium cursor-pointer hover:underline">
                      Bekijk alle {topic.reacties} reacties &rarr;
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Professionals directory */}
      <div id="professionals" className="mt-16 scroll-mt-20">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Users className="h-5 w-5 text-primary-600" />
          Professionals in de regio
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Vind collega-professionals, deel kennis en werk samen aan nieuwe initiatieven.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communityMembers.map((member) => {
            const memberThemes = member.expertise
              .map((s) => themes.find((t) => t.slug === s))
              .filter(Boolean);

            return (
              <div
                key={member.id}
                className="flex flex-col rounded-xl border border-surface-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{member.naam}</h3>
                    <p className="text-sm text-gray-500">{member.functie}</p>
                    <p className="text-xs text-gray-400">{member.organisatie}</p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-gray-600 line-clamp-3">{member.bio}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {memberThemes.map((theme) =>
                    theme ? <TagComponent key={theme.slug} label={theme.label} color={theme.color} /> : null
                  )}
                </div>

                <div className="mt-3">
                  <p className="text-xs text-gray-400">Beschikbaar voor:</p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {member.beschikbaarVoor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-surface-100 px-2 py-0.5 text-xs text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-surface-100">
                  <a
                    href={`mailto:${member.id}@mycareteam.nl`}
                    className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Neem contact op
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
