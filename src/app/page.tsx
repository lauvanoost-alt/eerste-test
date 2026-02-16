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
            <a
              href="#aanleiding"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Waarom dit nodig is
            </a>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <MessageSquare className="h-4 w-4" />
              Community &amp; Forum
            </Link>
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

      {/* ============ COMMUNITY TEASER ============ */}
      <section className="bg-primary-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="mx-auto h-10 w-10 text-primary-200" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Word onderdeel van de community</h2>
          <p className="mt-3 mx-auto max-w-2xl text-primary-200 leading-relaxed">
            Stel vragen aan collega-professionals, deel je ervaringen, en leer van initiatieven uit
            andere regio&apos;s. Ons forum brengt zorgprofessionals, beleidsmakers en onderzoekers samen.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-800 hover:bg-primary-50 transition"
            >
              <MessageSquare className="h-4 w-4" />
              Naar het forum
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/community#professionals"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <Users className="h-4 w-4" />
              Vind professionals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
