'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  RefreshCw,
  CircleDot,
  ArrowRight,
  Users,
  Clock,
  Heart,
  Building2,
  MessageSquare,
  Award,
  Target,
  Shield,
  Lightbulb,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Globe,
  BarChart3,
  Layers,
  ChevronRight,
  Footprints,
  Info,
  TrendingUp as TrendUp,
  Stethoscope,
  Landmark,
} from 'lucide-react';

const initiatieven = [
  {
    id: 1,
    titel: 'Overbruggingszorg in de SGGZ',
    aanbieder: 'De Hoop',
    besparing: '~11%',
    besparingDetail: 'ca. €2,0 mln besparing',
    color: 'sky',
    probleem:
      'Jongeren die doorverwezen worden naar de GGZ staan lang op de wachtlijst. Gedurende die periode "wachten" jongeren letterlijk: er vindt geen begeleiding plaats bij de klachten waarvoor verwezen is en de verwachting van de behandeling neemt toe (die dat vervolgens lang niet altijd waar kan maken).',
    interventie:
      'Inzet van een overbruggingstraject gedurende de wachttijd bestaande uit triage, e-health modules (Life Skills), groepssessies, en een eindgesprek. Doel is om jongeren zelf al aan de slag te laten gaan, gedrag te normaliseren en ouders te ondersteunen bij de begeleiding hiervan. Deelname is voorwaardelijk voor het intake-gesprek waardoor participatiegraad hoog is.',
    resultaat:
      '20% ziet volledig af van SGGZ, 40% verschuift naar lichtere BGGZ. Jongeren krijgen sneller en passendere zorg. Medicalisering van het zelfbeeld van jongeren wordt voorkomen.',
    randvoorwaarden:
      'Ruimte nodig vanuit contractering voor innovatieve producten. Voorkomen dat het traject juist tot meer volume leidt (nieuw product voor overbrugging + verschuiving naar BGGZ + opvullen van volumereductie in SGGZ met nieuwe cliënten).',
    contact: { naam: 'XXX', telefoon: 'XXX', email: 'XXX' },
    ideeVan: 'De Hoop',
  },
  {
    id: 2,
    titel: 'Brede Intake',
    aanbieder: 'Parnassia',
    besparing: '~14%',
    besparingDetail: 'ca. €2,5 mln besparing',
    color: 'violet',
    probleem:
      'Verwijzers moeten in zeer beperkte tijd complexe casuïstiek beoordelen, zonder goed zicht op de aard van het probleem, de beschikbare (niet-)GGZ-opties en welke aanbieder/zorgroute het meest passend is. Jeugdigen komen daardoor bij niet-passende aanbieders en trajecten terecht, wat leidt tot onnodige herverwijzingen, oplopende wachttijden en verergering van klachten.',
    interventie:
      'De intake wordt direct uitgevoerd door zowel een gespecialiseerde professional als een ervaringsdeskundige, evt. ondersteund met hulpmiddelen zoals de zelfredzaamheidsmatrix. Door deze combinatie (expertise + ervaring) wordt de zorgvraag sneller en vollediger vastgesteld, waardoor direct het meest passende vervolg kan worden bepaald.',
    resultaat:
      'Ca. 40% verschuift naar BGGZ of wijkteam. Alle jongeren krijgen sneller toegang tot beter passende zorg en de ervaren kwaliteit verbetert (geen onrustige trajectwisselingen of klachtverergering).',
    randvoorwaarden:
      'Zorgen dat aanbieders structureel financiële ruimte hebben voor de vroege inzet van experts en ervaringsdeskundigen. Contractueel borgen dat koplopers niet worden benadeeld wanneer trajecten korter en doelmatiger worden.',
    contact: { naam: 'XXX', telefoon: 'XXX', email: 'XXX' },
    ideeVan: 'Parnassia',
  },
  {
    id: 3,
    titel: 'De Kracht van Kort',
    aanbieder: 'Perspectief & Eleos',
    besparing: '~10-20%',
    besparingDetail: 'ca. €1,8 – 3,6 mln besparing',
    color: 'amber',
    probleem:
      'Een significant deel van SGGZ-trajecten overschrijdt de indicatieve looptijd van 1 jaar. Deels omdat helder protocol ontbreekt wanneer wel/niet zorg af te ronden en deels vanuit een "zorgreflex" waardoor behandelaren afronding van een traject uitstellen. Er is forse praktijkvariatie tussen aanbieders, maar hier is weinig inzicht in.',
    interventie:
      'Zorgprofessionals opleiden in Kracht van Kort voor kortdurende, doelgerichte behandeling: vooraf duidelijke afspraken over behandelduur, concrete behandeldoelen met tussentijdse evaluaties, vertrouwen opbouwen dat hulp tijdelijk is. Aanvullend: institutionalisering via interne spiegelinformatie, periodieke evaluaties, cliënt reviews in MDO\'s en begrenzing behandelduur.',
    resultaat:
      '10-20% verkorting van behandeltrajecten. Vooraf afspraken over behandelduur schept heldere verwachtingen en creëert extra commitment bij jongere/ouders.',
    randvoorwaarden:
      'Transparantie m.b.t. behandelduur en herinstroom (praktijkvariatie) om adoptie te stimuleren. Verkennen van financiële incentives om binnen afgesproken behandelduur te blijven (bijv. regressieve tarieven), inclusief tegendruk om te voorkomen dat behandelingen te kort en onvoldoende effectief worden.',
    contact: { naam: 'XXX', telefoon: 'XXX', email: 'XXX' },
    ideeVan: 'Perspectief & Eleos',
  },
  {
    id: 4,
    titel: 'Gezinsgerichte Aanpak',
    aanbieder: 'FamilySupporters',
    besparing: 'Nog te kwantificeren',
    besparingDetail: 'Maatschappelijke business case in ontwikkeling',
    color: 'teal',
    probleem:
      'Zorg wordt vaak op de jongere georganiseerd (gericht op diagnoses en "labels"), terwijl problemen hun oorsprong hebben in het gezinssysteem. Het komt vaak voor dat meerdere aanbieders betrokken zijn bij verschillende personen binnen één gezin, met eigen plannen en visies en dus beperkte afstemming. Dit voedt verdere medicalisering en stapeling van zorg.',
    interventie:
      'Gezinsgerichte aanpak gericht op de hele context waarin het gedrag zich voordoet, minder gericht op het diagnosticeren van een label. Het werken met een gezinsplan forceert afstemming tussen aanbieders betrokken bij één gezin. Daarnaast: inrichten van een mentaal gezinscentrum in de wijk (proeftuin) met geïntegreerd, samenhangend zorgaanbod (lokale wijkteam, de huisarts en specialistische zorg).',
    resultaat:
      'Passende zorg die minder op labels gericht is. Investering (soms langere behandelduur) die op totaal niveau zal leiden tot lagere volumes door minder medicalisering en fragmentatie.',
    randvoorwaarden:
      'Laagdrempelige afstemming tussen aanbieders betrokken bij 1 gezin. Inzicht in verwijsgeschiedenis van jongere. Pro-actieve communicatie richting huisartsen over verwijsgedrag. Verkennen van mogelijkheden om gezinsplan als product te declareren.',
    contact: { naam: 'XXX', telefoon: 'XXX', email: 'XXX' },
    ideeVan: 'FamilySupporters',
  },
  {
    id: 5,
    titel: 'Integraal Zorgaanbod met Groepsbegeleiding',
    aanbieder: 'CareHouse',
    besparing: 'Nog te kwantificeren',
    besparingDetail: 'Maatschappelijke business case in ontwikkeling',
    color: 'orange',
    probleem:
      'Behandeling en begeleiding voor dezelfde gedragsproblematiek worden vaak separaat en sequentieel aangeboden met minimale afstemming op inhoudelijke doelen. Geleerde lessen uit het GGZ-traject worden niet structureel geborgd. Begeleiding wordt uitsluitend individueel aangeboden, wat druk op schaars zorgpersoneel verder opvoert.',
    interventie:
      'Integraal zorgaanbod waarbij behandeling en begeleiding parallel worden aangeboden en inhoudelijke doelen regelmatig op elkaar worden afgestemd. Jeugdigen werken in groepsbegeleiding (ca. 1 op 4) aan doelen "in de praktijk", waarbij groepen gericht worden samengesteld o.b.v. problematiek en gedeelde doelen om zo een relevante, gedeelde leeromgeving te creëren.',
    resultaat:
      'Passende zorg waarbij verschillende zorgtrajecten beter op elkaar zijn afgestemd en op elkaar voortbouwen. Lagere volumes in de GGZ (minder herhaaltrajecten) en kostenreductie in de begeleiding (verschuiving naar groepsaanbod).',
    randvoorwaarden:
      'Laagdrempelige afstemming tussen zorgmedewerkers (behandelaar en begeleider) betrokken bij dezelfde jeugdige. Inzicht in verwijsgeschiedenis. Verkennen van mogelijkheden om groepsbegeleiding als product te declareren.',
    contact: { naam: 'XXX', telefoon: 'XXX', email: 'XXX' },
    ideeVan: 'CareHouse',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  sky: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', badge: 'bg-sky-100 text-sky-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', badge: 'bg-violet-100 text-violet-700' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', badge: 'bg-amber-100 text-amber-700' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-800', badge: 'bg-teal-100 text-teal-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', badge: 'bg-orange-100 text-orange-700' },
};

/* ------------------------------------------------------------------ */
/*  CLIENT JOURNEY SECTION                                             */
/* ------------------------------------------------------------------ */

const journeyStages = [
  {
    id: 1,
    label: 'Jeugdige nog niet in beeld',
    short: 'Nog niet in beeld',
    initiatives: [] as { num: number; title: string; provider: string; effect: string; saving: string; color: string }[],
  },
  {
    id: 2,
    label: 'Tussen verwijzing en intake (wachtlijst)',
    short: 'Wachtlijst',
    initiatives: [
      {
        num: 1,
        title: 'The Bridge / Overbruggingszorg',
        provider: 'De Hoop',
        effect: '20% ziet af SGGZ, 40% naar BGGZ',
        saving: '~\u20AC2,0 mln (~11%)',
        color: 'sky',
      },
    ],
  },
  {
    id: 3,
    label: 'Intake & plan van aanpak',
    short: 'Intake',
    initiatives: [
      {
        num: 2,
        title: 'Brede Intake',
        provider: 'Parnassia',
        effect: '40% naar BGGZ/wijkteam',
        saving: '~\u20AC2,5 mln (~14%)',
        color: 'violet',
      },
    ],
  },
  {
    id: 4,
    label: 'Behandeltraject',
    short: 'Behandeling',
    initiatives: [
      {
        num: 3,
        title: 'Kracht van Kort',
        provider: 'Perspectief & Eleos',
        effect: '10-20% behandelverkorting',
        saving: '~\u20AC1,8-3,6 mln (~10-20%)',
        color: 'amber',
      },
      {
        num: 4,
        title: 'Gezinsgerichte Aanpak',
        provider: 'FamilySupporters & NeuroScan',
        effect: 'Integraal gezinsperspectief',
        saving: 'Niet gekwantificeerd',
        color: 'teal',
      },
    ],
  },
  {
    id: 5,
    label: 'Afronding en nazorg',
    short: 'Afronding',
    initiatives: [
      {
        num: 5,
        title: 'Integraal Zorgaanbod',
        provider: 'CareHouse',
        effect: 'Behandeling + begeleiding parallel',
        saving: 'Niet gekwantificeerd',
        color: 'orange',
      },
    ],
  },
];

const initiativeColorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  sky:    { bg: 'bg-sky-50',    border: 'border-sky-300',    text: 'text-sky-800',    dot: 'bg-sky-400'    },
  violet: { bg: 'bg-violet-50', border: 'border-violet-300', text: 'text-violet-800', dot: 'bg-violet-400' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-300',  text: 'text-amber-800',  dot: 'bg-amber-400'  },
  teal:   { bg: 'bg-teal-50',   border: 'border-teal-300',   text: 'text-teal-800',   dot: 'bg-teal-400'   },
  orange: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-800', dot: 'bg-orange-400' },
};

function ClientJourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="clientpad" className="scroll-mt-20 bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <Footprints className="mt-1 h-7 w-7 shrink-0 text-primary-600" />
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Het Cli&euml;ntpad</h2>
            <p className="mt-1 text-gray-500">
              Van eerste signaal tot nazorg &mdash; waar grijpen de initiatieven aan?
            </p>
          </div>
        </div>

        {/* Journey stages - horizontal */}
        <div className="mt-10 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[38px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 rounded-full z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {journeyStages.map((stage, idx) => (
              <div
                key={stage.id}
                className="flex flex-col items-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
                }}
              >
                {/* Node */}
                <div className="relative flex items-center justify-center w-[76px] h-[76px] rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-200">
                  <span className="text-xl font-extrabold">{stage.id}</span>
                  {idx < journeyStages.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute -right-5 h-5 w-5 text-primary-400" />
                  )}
                </div>

                {/* Label */}
                <p className="mt-3 text-center text-sm font-semibold text-gray-800 leading-tight max-w-[160px]">
                  {stage.short}
                </p>
                <p className="text-center text-xs text-gray-400 leading-tight mt-0.5 max-w-[180px]">
                  {stage.label}
                </p>

                {/* Initiative cards popping in */}
                <div className="mt-4 space-y-3 w-full">
                  {stage.initiatives.map((init, iIdx) => {
                    const ic = initiativeColorMap[init.color] || initiativeColorMap.sky;
                    return (
                      <div
                        key={init.num}
                        className={`rounded-xl border-2 ${ic.border} ${ic.bg} p-3 shadow-sm`}
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? 'scale(1)' : 'scale(0.85)',
                          transition: `opacity 0.5s ease ${idx * 0.15 + 0.4 + iIdx * 0.15}s, transform 0.5s ease ${idx * 0.15 + 0.4 + iIdx * 0.15}s`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-2.5 h-2.5 rounded-full ${ic.dot}`} />
                          <span className={`text-xs font-bold ${ic.text}`}>Initiatief {init.num}</span>
                        </div>
                        <p className={`text-sm font-semibold ${ic.text} leading-tight`}>{init.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{init.provider}</p>
                        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{init.effect}</p>
                        <p className={`text-xs font-bold ${ic.text} mt-1`}>{init.saving}</p>
                      </div>
                    );
                  })}
                  {stage.initiatives.length === 0 && (
                    <div
                      className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-3 text-center"
                      style={{
                        opacity: visible ? 1 : 0,
                        transition: `opacity 0.5s ease ${idx * 0.15 + 0.4}s`,
                      }}
                    >
                      <p className="text-xs text-gray-400 italic">Nog geen KAM-interventie in dit stadium</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom summary */}
        <div
          className="mt-10 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 p-5 text-white text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 1.2s, transform 0.6s ease 1.2s',
          }}
        >
          <p className="text-sm text-primary-200">Totaal besparingspotentieel gecorrigeerd voor overlap</p>
          <p className="mt-1 text-2xl sm:text-3xl font-bold">&euro;2,9 - &euro;3,8 mln (~15-20%)</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CUMULATIVE SAVINGS SECTION                                         */
/* ------------------------------------------------------------------ */

const savingsData = {
  years: ['2025', '2026', '2027', '2028', '2029'],
  // Scenario 1: Historical growth continues (~5% per year on base of ~18M)
  historicalGrowth: [18.0, 18.9, 19.8, 20.8, 21.8],
  historicalWithKAM: [18.0, 18.1, 17.8, 17.5, 17.4],
  // Scenario 2: Growth levels off
  autonomeGroei: [18.0, 18.5, 18.8, 19.0, 19.1],
  autonomeWithKAM: [18.0, 17.8, 17.0, 16.2, 15.3],
  // Cumulative savings for display
  cumulativeSavingsHistorical: [0.0, 0.8, 2.8, 6.1, 10.5],
  cumulativeSavingsAutonome: [0.0, 0.7, 2.5, 5.3, 9.1],
};

function CumulativeSavingsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeScenario, setActiveScenario] = useState<'historical' | 'autonome'>('historical');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const baseline = activeScenario === 'historical' ? savingsData.historicalGrowth : savingsData.autonomeGroei;
  const withKAM = activeScenario === 'historical' ? savingsData.historicalWithKAM : savingsData.autonomeWithKAM;
  const cumulative = activeScenario === 'historical' ? savingsData.cumulativeSavingsHistorical : savingsData.cumulativeSavingsAutonome;
  const maxVal = Math.max(...baseline) + 1;

  return (
    <section ref={sectionRef} id="besparingspotentieel" className="scroll-mt-20 bg-surface-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <BarChart3 className="mt-1 h-7 w-7 shrink-0 text-primary-600" />
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Cumulatief Besparingspotentieel</h2>
            <p className="mt-1 text-gray-500">
              Projectie 2025&ndash;2029 &mdash; interessant voor wethouders en beleidsmakers
            </p>
          </div>
        </div>

        {/* Scenario toggle */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setActiveScenario('historical')}
            className={`flex-1 rounded-xl p-4 border-2 transition-all text-left ${
              activeScenario === 'historical'
                ? 'border-red-400 bg-red-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-red-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className={`h-5 w-5 ${activeScenario === 'historical' ? 'text-red-500' : 'text-gray-400'}`} />
              <span className={`font-semibold text-sm ${activeScenario === 'historical' ? 'text-red-800' : 'text-gray-700'}`}>
                Scenario 1: Historische groei zet door
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Kosten blijven stijgen met ~5% per jaar</p>
          </button>
          <button
            onClick={() => setActiveScenario('autonome')}
            className={`flex-1 rounded-xl p-4 border-2 transition-all text-left ${
              activeScenario === 'autonome'
                ? 'border-amber-400 bg-amber-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-amber-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className={`h-5 w-5 ${activeScenario === 'autonome' ? 'text-amber-500' : 'text-gray-400'}`} />
              <span className={`font-semibold text-sm ${activeScenario === 'autonome' ? 'text-amber-800' : 'text-gray-700'}`}>
                Scenario 2: Autonome groei stabiliseert
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">Groei vlakt af richting 0%</p>
          </button>
        </div>

        {/* Chart area */}
        <div className="mt-8 rounded-2xl bg-white border border-surface-200 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Jeugd-GGZ kosten ZHZ (&euro;mln)
              </h3>
              <p className="text-xs text-gray-400 mt-1">Basis: ~&euro;18 mln huidig, KAM-interventies 15-20% reductie opbouwend over 3 jaar</p>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-sm ${activeScenario === 'historical' ? 'bg-red-400' : 'bg-amber-400'}`} />
                <span className="text-gray-600">Zonder KAM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-emerald-500" />
                <span className="text-gray-600">Met KAM</span>
              </div>
            </div>
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-4 sm:gap-6 h-64 sm:h-72">
            {savingsData.years.map((year, idx) => {
              const baseHeight = (baseline[idx] / maxVal) * 100;
              const kamHeight = (withKAM[idx] / maxVal) * 100;
              const saving = baseline[idx] - withKAM[idx];
              const baseColor = activeScenario === 'historical' ? 'bg-red-300' : 'bg-amber-300';
              return (
                <div key={year} className="flex flex-col items-center flex-1 gap-1">
                  {/* Values */}
                  <div className="text-center mb-1">
                    {saving > 0.05 && (
                      <span className="text-xs font-bold text-emerald-600 block">
                        -&euro;{saving.toFixed(1)}M
                      </span>
                    )}
                  </div>
                  {/* Bars */}
                  <div className="w-full flex items-end justify-center gap-1" style={{ height: '200px' }}>
                    {/* Baseline bar */}
                    <div
                      className={`w-full max-w-[28px] rounded-t-md ${baseColor} relative`}
                      style={{
                        height: visible ? `${baseHeight}%` : '0%',
                        transition: `height 1s cubic-bezier(0.4,0,0.2,1) ${idx * 0.12}s`,
                      }}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-gray-500 whitespace-nowrap">
                        {baseline[idx].toFixed(1)}
                      </span>
                    </div>
                    {/* KAM bar */}
                    <div
                      className="w-full max-w-[28px] rounded-t-md bg-emerald-500 relative"
                      style={{
                        height: visible ? `${kamHeight}%` : '0%',
                        transition: `height 1s cubic-bezier(0.4,0,0.2,1) ${idx * 0.12 + 0.1}s`,
                      }}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-emerald-700 whitespace-nowrap">
                        {withKAM[idx].toFixed(1)}
                      </span>
                    </div>
                  </div>
                  {/* Year label */}
                  <span className="text-sm font-bold text-gray-700 mt-2">{year}</span>
                </div>
              );
            })}
          </div>

          {/* Cumulative savings row */}
          <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="text-sm font-semibold text-emerald-800 mb-3">Cumulatieve besparing t.o.v. scenario zonder KAM</p>
            <div className="grid grid-cols-5 gap-2">
              {savingsData.years.map((year, idx) => (
                <div key={year} className="text-center">
                  <div
                    className="rounded-lg bg-emerald-100 p-2"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `opacity 0.5s ease ${0.8 + idx * 0.1}s, transform 0.5s ease ${0.8 + idx * 0.1}s`,
                    }}
                  >
                    <p className="text-lg sm:text-xl font-extrabold text-emerald-700">
                      &euro;{cumulative[idx].toFixed(1)}M
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            * Projectiecijfers zijn indicatief en gebaseerd op het besparingspotentieel van 15-20% bij volledige
            implementatie van de KAM-initiatieven, opbouwend over ~3 jaar. Werkelijke resultaten zijn afhankelijk van
            adoptiegraad, contractering en externe factoren.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE                                                          */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-primary-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-200">
            Kwaliteit als Medicijn &mdash; Jeugdzorg
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Samen werken aan<br />passende jeugdzorg
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-100 leading-relaxed">
            Van elkaar leren, informatie delen, initiatieven die werken opschalen &mdash; en met elkaar in contact
            komen. Dit platform brengt zorgaanbieders, gemeenten en professionals samen rondom het
            Kwaliteit als Medicijn-gedachtegoed voor de jeugdzorg in Zuid-Holland Zuid.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#initiatieven"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-800 shadow-lg hover:bg-primary-50 transition"
            >
              Bekijk de 5 initiatieven
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <BarChart3 className="h-4 w-4" />
              Impact Dashboard
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <Lightbulb className="h-4 w-4" />
              Test je kennis
            </Link>
            <a
              href="#doe-mee"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-400 transition"
            >
              <Heart className="h-4 w-4" />
              Doe mee!
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Potentiële volumereductie', value: '15-20%', icon: TrendingDown },
              { label: 'Kopgroep aanbieders', value: '8', icon: Building2 },
              { label: 'Gemeenten in ZHZ', value: '10', icon: MapPin },
              { label: 'Actieve initiatieven', value: '5', icon: Lightbulb },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/10 backdrop-blur-sm p-4 text-center"
              >
                <stat.icon className="mx-auto h-5 w-5 text-primary-200" />
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs text-primary-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WAT BETEKENT DIT VOOR JOU? ============ */}
      <section id="voor-jou" className="scroll-mt-20 bg-surface-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Wat betekent dit voor jou?</h2>
            <p className="mt-2 text-gray-500">Ontdek wat dit platform voor jouw rol kan betekenen</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Zorgprofessional */}
            <div className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Zorgprofessional</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Ontdek initiatieven die werken en sluit je aan bij collega&apos;s in jouw regio.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/initiatieven" className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
                  Initiatieven <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/community" className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
                  Community <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Zorgbestuurder (Kopgroeplid) */}
            <div className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Zorgbestuurder (Kopgroeplid)</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Versterk jullie aanpak met tools, data en inzichten uit de kopgroep.
              </p>
              <Link href="/dashboard" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
                Bekijk wat dit voor jou betekent <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Zorgbestuurder (nog geen Kopgroeplid) */}
            <div className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Zorgbestuurder (nog geen Kopgroeplid)</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Ontdek wat aansluiting jouw organisatie kan opleveren.
              </p>
              <Link href="/kwaliteit-als-medicijn" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
                Bekijk wat dit voor jou betekent <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Wethouder */}
            <div className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Wethouder</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Zie wat deze transformatie betekent voor de jongeren in jouw gemeente.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/gemeentekaart" className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
                  Gemeentekaart <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/dashboard" className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700">
                  Dashboard <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AANLEIDING ============ */}
      <section id="aanleiding" className="scroll-mt-20 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <BarChart3 className="mt-1 h-7 w-7 shrink-0 text-primary-600" />
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Aanleiding</h2>
              <p className="mt-1 text-gray-500">
                Landelijk beeld op jeugdzorg en de situatie in Zuid-Holland Zuid
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Landelijk */}
            <div className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
              <h3 className="text-lg font-semibold text-foreground">Landelijk beeld: onhoudbare kostenstijging</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  Het aantal jongeren dat gebruik maakt van jeugdzorg is de afgelopen tien jaar structureel
                  toegenomen. De totale kosten zijn nog sneller gestegen &mdash; meer dan verdubbeld &mdash; wat
                  wijst op een aanzienlijke stijging van de kosten per jeugdige.
                </p>
                <p>
                  90% van de gemeenten overschrijdt jaarlijks het jeugdzorgbudget met gemiddeld 20%. Tegelijk
                  neemt het arbeidsmarkttekort toe van 1.000 personen in 2024 tot 5.500 in 2034.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-red-50 p-3 text-center">
                  <p className="text-xl font-bold text-red-700">90%</p>
                  <p className="text-xs text-red-600">gemeenten overschrijdt budget</p>
                </div>
                <div className="rounded-lg bg-red-50 p-3 text-center">
                  <p className="text-xl font-bold text-red-700">+132%</p>
                  <p className="text-xs text-red-600">stijging kosten landelijk &apos;18-&apos;24</p>
                </div>
              </div>
            </div>

            {/* ZHZ */}
            <div className="rounded-2xl border border-surface-200 bg-surface-50 p-6">
              <h3 className="text-lg font-semibold text-foreground">Situatie Zuid-Holland Zuid</h3>
              <div className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>
                  Ook in ZHZ groeien de jeugdzorguitgaven. In segment 4 (specialistisch, veel voorkomend)
                  is er een sterke kostenstijging van +9% tussen 2022 en 2024, van €141 mln naar €153 mln.
                  GGZ is met ~10% gegroeid in deze periode.
                </p>
                <p>
                  De kosten per 1.000 inwoners variëren sterk tussen gemeenten: van €222k (Hoeksche Waard)
                  tot €455k (Alblasserdam). ~22% van deze verschillen hangt samen met lokale werkwijzen en
                  contractafspraken &mdash; niet met bevolkingskenmerken.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-amber-50 p-3 text-center">
                  <p className="text-xl font-bold text-amber-700">€153 mln</p>
                  <p className="text-xs text-amber-600">totale kosten segment 4</p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3 text-center">
                  <p className="text-xl font-bold text-amber-700">+9%</p>
                  <p className="text-xs text-amber-600">kostenstijging &apos;22-&apos;24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Probleemanalyse quote */}
          <div className="mt-8 rounded-2xl border-l-4 border-primary-500 bg-primary-50 p-6">
            <blockquote className="text-sm italic text-primary-800 leading-relaxed">
              &ldquo;Een verkeerde aanname bij de decentralisatie was: we gaan de vraag naar jeugdhulp verminderen
              door de hulp dichtbij de burger aan te bieden. Maar er kwamen juist meer burgers met vragen, want
              ze kregen makkelijker toegang tot hulp. En dat zijn vaak de mensen die mondig zijn, met hulpvragen
              voor kinderen met wie het relatief best goed gaat.&rdquo;
            </blockquote>
            <p className="mt-2 text-sm font-semibold text-primary-700">
              &mdash; Prof. Mariëlle Bruning, hoogleraar jeugdrecht Universiteit Leiden
            </p>
          </div>

          <div className="mt-4 rounded-2xl border-l-4 border-primary-400 bg-primary-50/60 p-6">
            <blockquote className="text-sm italic text-primary-800 leading-relaxed">
              &ldquo;Om de continuïteit van zorg voor jeugdigen die die zorg het hardst nodig hebben te
              garanderen, moet de druk op de sector verlicht worden. Daartoe is het noodzakelijk dat jeugdigen
              die zorg minder hard nodig hebben of op een andere manier geholpen kunnen worden, er minder gebruik
              van gaan maken.&rdquo;
            </blockquote>
            <p className="mt-2 text-sm font-semibold text-primary-700">
              &mdash; Jeugdautoriteit, Stand van de Jeugdzorg 2025
            </p>
          </div>
        </div>
      </section>

      {/* ============ KWALITEIT ALS MEDICIJN ============ */}
      <section id="kwaliteit-als-medicijn" className="scroll-mt-20 bg-surface-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Heart className="mt-1 h-7 w-7 shrink-0 text-primary-600" />
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Kwaliteit als Medicijn</h2>
              <p className="mt-1 text-gray-500">Wat is het en waarom werkt het?</p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl space-y-4 text-gray-600 leading-relaxed">
            <p>
              <strong className="text-foreground">Kwaliteit als Medicijn</strong> maakt gebruik van de
              &lsquo;natuurlijke variatie&rsquo; van werkwijzen bij aanbieders om initiatieven te ontdekken en op te
              schalen die enerzijds de zorg kwalitatief beter maken en anderzijds minder beslag op personeel en
              financiën leggen.
            </p>
            <p>
              Een belangrijke voorwaarde is dat aanbieders die hierin voorop durven te lopen ook via de
              contractering worden gefaciliteerd (met innovatieruimte, betere contracten), in plaats van
              dat dit tot omzetverlies leidt. Deze beweging heeft eerder bij Bernhoven en Rivas aantoonbaar
              geleid tot <strong>7-13% volumereductie</strong> binnen 2 jaar na start.
            </p>
          </div>

          {/* Vliegwiel vs Vicieuze Cirkel */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Van vicieuze cirkel naar kwaliteitsvliegwiel
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Vicieuze cirkel */}
              <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-red-100 opacity-50" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <h4 className="text-lg font-bold text-red-800">Traditioneel: Vicieuze cirkel</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Contracterende partij drukt op tarieven', icon: '1' },
                      { label: 'Aanbieders gaan meer volume doen', icon: '2' },
                      { label: 'Minder tijd voor de cliënt, minder kwaliteit', icon: '3' },
                      { label: 'Nog meer trajecten nodig', icon: '4' },
                      { label: 'Hogere maatschappelijke kosten', icon: '5' },
                    ].map((step) => (
                      <div key={step.icon} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-800">
                          {step.icon}
                        </span>
                        <span className="text-sm text-red-700">{step.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <RefreshCw className="h-8 w-8 text-red-300" />
                  </div>
                </div>
              </div>

              {/* Vliegwiel */}
              <div className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-6 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-100 opacity-50" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <RefreshCw className="h-6 w-6 text-green-600" />
                    <h4 className="text-lg font-bold text-green-800">Alternatief: Kwaliteit Als Vliegwiel</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Contracterende partij geeft ruimte voor innovatie', icon: '1' },
                      { label: 'Aanbieders zetten in op kwaliteitsverbetering', icon: '2' },
                      { label: 'Meer tijd voor de cliënt, betere kwaliteit', icon: '3' },
                      { label: 'Minder onnodige en vermijdbare trajecten', icon: '4' },
                      { label: 'Lagere maatschappelijke kosten', icon: '5' },
                    ].map((step) => (
                      <div key={step.icon} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">
                          {step.icon}
                        </span>
                        <span className="text-sm text-green-700">{step.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <RefreshCw className="h-8 w-8 text-green-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bewezen resultaten */}
          <div className="mt-10 rounded-2xl bg-white border border-surface-200 p-6">
            <h3 className="text-lg font-semibold text-foreground">Bewezen resultaten in de curatieve zorg</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-green-50 p-4 text-center">
                <p className="text-2xl font-bold text-green-700">7-13%</p>
                <p className="mt-1 text-sm text-green-600">volumedaling Bernhoven &amp; Rivas in 2 jaar</p>
              </div>
              <div className="rounded-xl bg-primary-50 p-4 text-center">
                <p className="text-2xl font-bold text-primary-700">15-20%</p>
                <p className="mt-1 text-sm text-primary-600">potentieel in jeugdzorg ZHZ</p>
              </div>
              <div className="rounded-xl bg-sky-50 p-4 text-center">
                <p className="text-2xl font-bold text-sky-700">~3 jaar</p>
                <p className="mt-1 text-sm text-sky-600">tijdshorizon voor volledige impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AANKNOPINGSPUNTEN / INITIATIEVEN ============ */}
      <section id="initiatieven" className="scroll-mt-20 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Lightbulb className="mt-1 h-7 w-7 shrink-0 text-primary-600" />
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Aanknopingspunten voor passende jeugdzorg
              </h2>
              <p className="mt-1 text-gray-500">
                5 initiatieven vanuit de kopgroep ZHZ &mdash; elk gestructureerd met probleem, interventie,
                beoogd resultaat en randvoorwaarden
              </p>
            </div>
          </div>

          {/* Totale potentie banner */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 p-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-primary-200">Totale potentiële impact bij opschalen in regio</p>
                <p className="mt-1 text-3xl font-bold">€2,9 - €3,8 mln (~15-20%)</p>
                <p className="mt-1 text-sm text-primary-200">
                  Gecorrigeerd voor overlappende effecten tussen initiatieven
                </p>
              </div>
              <div className="flex gap-3">
                <div className="rounded-lg bg-white/15 p-3 text-center">
                  <p className="text-xl font-bold">8</p>
                  <p className="text-xs text-primary-200">aanbieders</p>
                </div>
                <div className="rounded-lg bg-white/15 p-3 text-center">
                  <p className="text-xl font-bold">5</p>
                  <p className="text-xs text-primary-200">initiatieven</p>
                </div>
              </div>
            </div>
          </div>

          {/* Initiatieven */}
          <div className="mt-10 space-y-8">
            {initiatieven.map((init) => {
              const colors = colorMap[init.color] || colorMap.sky;
              return (
                <div
                  key={init.id}
                  className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 sm:p-8`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}>
                          Initiatief {init.id}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.badge}`}>
                          {init.aanbieder}
                        </span>
                      </div>
                      <h3 className={`mt-2 text-xl font-bold ${colors.text}`}>{init.titel}</h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className={`text-2xl font-bold ${colors.text}`}>{init.besparing}</p>
                      <p className="text-xs text-gray-500">{init.besparingDetail}</p>
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/70 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <h4 className="text-sm font-bold text-foreground">Probleem</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{init.probleem}</p>
                    </div>

                    <div className="rounded-xl bg-white/70 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 w-4 text-blue-500" />
                        <h4 className="text-sm font-bold text-foreground">Interventie</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{init.interventie}</p>
                    </div>

                    <div className="rounded-xl bg-white/70 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <h4 className="text-sm font-bold text-foreground">Beoogd resultaat</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{init.resultaat}</p>
                    </div>

                    <div className="rounded-xl bg-white/70 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-amber-500" />
                        <h4 className="text-sm font-bold text-foreground">Randvoorwaarden</h4>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{init.randvoorwaarden}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mt-4 rounded-xl bg-white/70 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Idee van: <strong>{init.ideeVan}</strong></p>
                        <p className="text-xs text-gray-500 mt-1">Contactpersoon:</p>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" /> {init.contact.naam}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5" /> {init.contact.telefoon}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5" /> {init.contact.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ VOETNOTEN ============ */}
      <section className="bg-gray-50 py-10 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-6">
            <Info className="mt-1 h-5 w-5 shrink-0 text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Toelichting bij besparingscijfers</h3>
          </div>
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">1</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                De doelgroepen en impactdrijvers voor de verschillende interventies overlappen, waardoor de individuele
                besparingen niet optelbaar zijn. De totale besparing is ontdubbeld: jeugdigen die afzien van B/SGGZ in
                een eerder stadium worden niet meegenomen in de volgende interventie en behandelduurverkorting wordt
                eenmaal toegepast.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">2</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                In het besparingspotentieel zijn de meerkosten van elke aanpak al verdisconteerd. Dit betreft
                netto besparingspotentieel.
              </p>
            </div>
            <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>N.B.:</strong> Afwachtende input van Mentaal Beter n.a.v. het gesprek is deze zorgaanbieder
                niet weergegeven in bovenstaand overzicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HET CLIENTPAD ============ */}
      <ClientJourneySection />

      {/* ============ CUMULATIEF BESPARINGSPOTENTIEEL ============ */}
      <CumulativeSavingsSection />

      {/* ============ SUCCESVERHAAL VEENDAM ============ */}
      <section id="succesverhaal" className="scroll-mt-20 bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Award className="mt-1 h-7 w-7 shrink-0 text-green-600" />
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Succesverhaal: Gemeente Veendam</h2>
              <p className="mt-1 text-gray-500">
                Fundamentele reorganisatie van de jeugdzorg met spectaculaire resultaten
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Story */}
            <div className="lg:col-span-2 rounded-2xl bg-white border border-green-200 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">De uitdaging</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Gemeente Veendam stond voor een grote uitdaging: tussen 2015 en 2022 nam het aantal aanbieders
                toe van 30 naar 220. De gemeente had geen grip meer op aanbieders, kosten en toenemende wachtlijsten.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">De aanpak</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>
                    <strong>Reductie van aanbieders:</strong> 220 jeugdhulpaanbieders gereduceerd tot één
                    samenwerkingsverband van 6 aanbieders (&ldquo;Jeugdexpertise Punt&rdquo; / JEP)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>
                    <strong>Laagdrempelig:</strong> Jongeren kunnen zonder wachttijd of indicatie terecht bij een
                    professional van JEP op school of bij de huisarts (algemene voorziening)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>
                    <strong>Expertise naar voren:</strong> Een wetenschappelijk geschoolde professional analyseert
                    de situatie vóórdat er wordt ingegrepen (&ldquo;baat het niet dan schaadt het wél&rdquo;)
                  </span>
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-foreground">De resultaten</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Wachtlijsten zijn in 2,5 jaar <strong>volledig verdwenen</strong>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Voor <strong>57% van gezinnen</strong> kon een doorverwijzing naar gespecialiseerde hulp worden voorkomen
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  De helft van de cliënten kan voor gemiddeld <strong>€600</strong> worden geholpen (voorheen €1.500)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Uithuisplaatsingen en crisisopvang zijn <strong>afgenomen</strong>
                </li>
              </ul>
            </div>

            {/* Impact metrics */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-white border border-green-200 p-6 text-center">
                <TrendingDown className="mx-auto h-8 w-8 text-green-600" />
                <p className="mt-2 text-3xl font-bold text-green-700">-13%</p>
                <p className="mt-1 text-sm text-green-600">
                  daling jeugdzorguitgaven Veendam &apos;18-&apos;24
                </p>
                <div className="mt-3 h-px bg-green-100" />
                <p className="mt-3 text-xs text-gray-500">
                  Landelijk stegen de uitgaven in dezelfde periode met +132%
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-green-200 p-6 text-center">
                <Clock className="mx-auto h-8 w-8 text-green-600" />
                <p className="mt-2 text-3xl font-bold text-green-700">0</p>
                <p className="mt-1 text-sm text-green-600">wachtlijsten na 2,5 jaar</p>
              </div>

              <div className="rounded-2xl bg-white border border-green-200 p-6 text-center">
                <Users className="mx-auto h-8 w-8 text-green-600" />
                <p className="mt-2 text-3xl font-bold text-green-700">57%</p>
                <p className="mt-1 text-sm text-green-600">doorverwijzingen voorkomen</p>
              </div>

              <div className="rounded-2xl bg-white border border-green-200 p-6 text-center">
                <Building2 className="mx-auto h-8 w-8 text-green-600" />
                <p className="mt-2 text-3xl font-bold text-green-700">220 → 6</p>
                <p className="mt-1 text-sm text-green-600">aanbieders gebundeld in JEP</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            Bronnen: Veendam gooide de marktwerking overboord in de jeugdhulp en zie: de wachtlijsten
            verdwenen (NRC, 15/09/2025); Hoe Veendam weer grip kreeg op de jeugdzorg (Gemeente.nu, 22/10/2025);
            Waarstaatjegemeente.nl (CBS)
          </p>
        </div>
      </section>

      {/* ============ LANDELIJKE POTENTIE ============ */}
      <section id="landelijke-potentie" className="scroll-mt-20 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Globe className="mt-1 h-7 w-7 shrink-0 text-primary-600" />
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Landelijke potentie</h2>
              <p className="mt-1 text-gray-500">
                Opschaling naar een landelijke innovatieagenda voor passende jeugdzorg
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Stap 1 */}
            <div className="rounded-2xl border border-primary-200 bg-primary-50/50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Segment 4 in ZHZ</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Start van de beweging in specialistisch, veel voorkomende jeugdzorg (GGZ). Kopgroep van 8
                aanbieders met een besparingspotentieel van 15-20%.
              </p>
            </div>

            {/* Stap 2 */}
            <div className="rounded-2xl border border-primary-200 bg-primary-50/50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Alle segmenten in ZHZ</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                44% van de aanbieders in segment 4 is ook actief in andere segmenten. Spill-over effect
                verzilveren: aanbieders nemen het gedachtegoed mee naar hun gehele zorgaanbod.
              </p>
            </div>

            {/* Stap 3 */}
            <div className="rounded-2xl border border-primary-200 bg-primary-50/50 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Landelijk en tussen regio&apos;s</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                ZHZ als pionier in een lerend stelsel: landelijke infrastructuur die kwaliteitsinitiatieven
                inventariseert en deelt. Regio&apos;s leren van elkaar om de impact te versnellen.
              </p>
            </div>
          </div>

          {/* Zigzag model */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Impact &ldquo;zigzaggend&rdquo; opwerken
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-3xl">
              Het volledig tot wasdom brengen van deze beweging vraagt tijd en commitment. De beweging, de
              behaalde impact door koplopers en het sturen via de contractering moeten elkaar geleidelijk
              gaan versterken.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { fase: 'Eind 2025', impact: '10-15% potentie inzichtelijk' },
                { fase: 'Q2 2026', impact: '5% volumereductie in kopgroep' },
                { fase: 'Q4 2026', impact: '2,5-5% reductie in segment 4' },
                { fase: '2028', impact: '15-20% volledige reductie' },
              ].map((item) => (
                <div key={item.fase} className="rounded-xl bg-white p-4 text-center shadow-sm">
                  <p className="text-sm font-bold text-primary-700">{item.fase}</p>
                  <p className="mt-1 text-xs text-gray-500">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transformatieplan Waardenland */}
          <div className="mt-8 rounded-2xl border border-surface-200 bg-surface-50 p-6">
            <h3 className="text-lg font-semibold text-foreground">Aansluiting bij Transformatieplan Waardenland</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Het integraal transformatieplan Waardenland is een samenwerkingsverband tussen zorg en welzijn met
              ca. 30 deelnemende partijen, inclusief beide RHO&apos;s (HenZ &amp; DrechtDokters), GGZ-aanbieders,
              en de 10 gemeenten. Dit biedt een kans om Kwaliteit als Medicijn in de jeugdzorg in te bedden in
              een bestaande structuur. Mentiek (verkennend gesprek GGZ 18+) is hierin een direct aanknopingspunt
              voor de &lsquo;brede intake&rsquo; in de jeugdzorg.
            </p>
          </div>
        </div>
      </section>

      {/* ============ DOE MEE CTA ============ */}
      <section id="doe-mee" className="scroll-mt-20 relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-primary-700 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-16 top-1/4 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-20 -bottom-10 h-64 w-64 rounded-full bg-teal-300 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <Heart className="h-4 w-4 text-rose-300" />
                Doe mee aan de beweging
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                Enthousiast?<br />
                Sluit je aan bij de kopgroep.
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xl">
                Samen kunnen we de jeugdzorg in Zuid-Holland Zuid transformeren. Sluit je aan als
                aanbieder, gemeente of professional en draag bij aan <strong className="text-white">passende zorg, lagere volumes
                en betere uitkomsten</strong> voor jongeren en gezinnen.
              </p>
              <div className="mt-6 space-y-3 text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>Toegang tot bewezen initiatieven en implementatie-ondersteuning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>Spiegelinformatie en benchmark met andere aanbieders</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>Contractuele ruimte voor innovatie en kwaliteitsverbetering</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>Netwerk van gelijkgestemde professionals en organisaties</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h3 className="text-xl font-bold">Meld je aan</h3>
              <p className="mt-1 text-sm text-white/70">Vul je gegevens in en we nemen contact op</p>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80">Naam</label>
                  <input type="text" placeholder="Je volledige naam" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80">E-mailadres</label>
                  <input type="email" placeholder="naam@organisatie.nl" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80">Organisatie</label>
                  <input type="text" placeholder="Naam van je organisatie" className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80">Rol</label>
                  <select className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30">
                    <option value="">Selecteer je rol</option>
                    <option value="aanbieder">GGZ-aanbieder</option>
                    <option value="gemeente">Gemeente / beleidsmaker</option>
                    <option value="huisarts">Huisarts / verwijzer</option>
                    <option value="professional">Zorgprofessional</option>
                    <option value="onderzoeker">Onderzoeker</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <button className="mt-2 w-full rounded-lg bg-white px-6 py-3 text-sm font-bold text-teal-700 shadow-lg hover:bg-teal-50 transition flex items-center justify-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Sluit je aan bij de beweging
                </button>
                <p className="text-xs text-white/50 text-center">
                  Dit is een demonstratie. In de definitieve versie wordt je aanmelding verwerkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ONTDEK MEER ============ */}
      <section className="bg-surface-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center sm:text-3xl">Ontdek meer</h2>
          <p className="mt-2 text-center text-gray-500">Verdiep je in de data, test je kennis en word actief</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/dashboard" className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
              <BarChart3 className="h-8 w-8 text-primary-600" />
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary-700">Impact Dashboard</h3>
              <p className="mt-1 text-sm text-gray-500">Bekijk de voortgang per aanbieder en het competitieve overzicht.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                Bekijk dashboard <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link href="/gemeentekaart" className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
              <MapPin className="h-8 w-8 text-teal-600" />
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary-700">Gemeentekaart</h3>
              <p className="mt-1 text-sm text-gray-500">Interactieve kaart met scores en kosten per gemeente in ZHZ.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                Open kaart <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link href="/quiz" className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
              <Lightbulb className="h-8 w-8 text-amber-500" />
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary-700">Kennisquiz</h3>
              <p className="mt-1 text-sm text-gray-500">Test je kennis over de jeugdzorg in 7 vragen. Hoe goed ken jij de feiten?</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                Start de quiz <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link href="/community" className="group rounded-2xl border border-surface-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
              <MessageSquare className="h-8 w-8 text-violet-500" />
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary-700">Community</h3>
              <p className="mt-1 text-sm text-gray-500">Stel vragen, deel ervaringen en vind collega-professionals.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                Naar het forum <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
