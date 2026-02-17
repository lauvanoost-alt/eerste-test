'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

interface TimelineStep {
  actor: string;
  label: string;
  timing: string;
  description: string;
  detail: string;
  colorClasses: {
    dot: string;
    card: string;
    badge: string;
    text: string;
    line: string;
  };
  isNow?: boolean;
}

const timelineSteps: TimelineStep[] = [
  {
    actor: 'SOJ',
    label: 'Serviceorganisatie Jeugd',
    timing: 'Q4 2025',
    description:
      'SoJ start KAM en geeft status aan kopgroep door steun toe te zeggen',
    detail:
      'De Serviceorganisatie Jeugd (SOJ) zet het programma Kwaliteit als Medicijn officieel in gang. Door steun toe te zeggen aan de kopgroep — in de vorm van financiering, data en communicatie — ontstaat de eerste impuls voor verandering.',
    colorClasses: {
      dot: 'bg-blue-600',
      card: 'border-blue-200 bg-blue-50/60',
      badge: 'bg-blue-100 text-blue-800',
      text: 'text-blue-900',
      line: 'text-blue-300',
    },
  },
  {
    actor: 'Aanbieders',
    label: 'Alle aanbieders',
    timing: 'Q1 2026',
    description:
      'Aanbieders realiseren zich dat er iets op gang gebracht wordt, maar wachten nog af',
    detail:
      'De bredere groep aanbieders in de regio merkt dat er iets verandert. Sommigen zijn nieuwsgierig, anderen sceptisch. De kopgroep maakt het verschil zichtbaar — dit creëert sociale druk en FOMO.',
    colorClasses: {
      dot: 'bg-amber-500',
      card: 'border-amber-200 bg-amber-50/60',
      badge: 'bg-amber-100 text-amber-800',
      text: 'text-amber-900',
      line: 'text-amber-300',
    },
    isNow: true,
  },
  {
    actor: 'Kopgroep',
    label: 'Kopgroep (8 voorlopers)',
    timing: 'Q1-Q2 2026',
    description: 'Kopgroep komt met eerste ideeën en impact-inschatting',
    detail:
      'De 8 kopgroep-aanbieders presenteren hun eerste concrete plannen: overbruggingszorg, brede intake, kortdurende behandeling. Ze onderbouwen de verwachte impact met data en wetenschap.',
    colorClasses: {
      dot: 'bg-emerald-600',
      card: 'border-emerald-200 bg-emerald-50/60',
      badge: 'bg-emerald-100 text-emerald-800',
      text: 'text-emerald-900',
      line: 'text-emerald-300',
    },
  },
  {
    actor: 'SOJ',
    label: 'Serviceorganisatie Jeugd',
    timing: 'Q2 2026',
    description:
      'SoJ faciliteert de kopgroep (bijv. door financiële steun, toezeggingen voor toekomst)',
    detail:
      'De SOJ versterkt de kopgroep met middelen: pilots worden gefinancierd, data wordt gedeeld, en er komen concrete toezeggingen over toekomstige contractering. Dit geeft zekerheid aan de koplopers.',
    colorClasses: {
      dot: 'bg-blue-600',
      card: 'border-blue-200 bg-blue-50/60',
      badge: 'bg-blue-100 text-blue-800',
      text: 'text-blue-900',
      line: 'text-blue-300',
    },
  },
  {
    actor: 'Kopgroep',
    label: 'Kopgroep (8 voorlopers)',
    timing: 'Q3-Q4 2026',
    description: 'Kopgroep toont impact in de praktijk aan',
    detail:
      'Na een half jaar werken zijn de eerste resultaten zichtbaar: minder verwijzingen, kortere wachttijden, betere uitkomsten. Deze resultaten worden gedeeld met de hele regio.',
    colorClasses: {
      dot: 'bg-emerald-600',
      card: 'border-emerald-200 bg-emerald-50/60',
      badge: 'bg-emerald-100 text-emerald-800',
      text: 'text-emerald-900',
      line: 'text-emerald-300',
    },
  },
  {
    actor: 'SOJ',
    label: 'Serviceorganisatie Jeugd',
    timing: 'Q1 2027',
    description:
      'SoJ communiceert dat KAM-transparantie als criterium wordt opgenomen in contractering',
    detail:
      'Dit is het kantelpunt: de SOJ maakt duidelijk dat werken volgens KAM-principes een voorwaarde wordt in de volgende contracteringsronde. Transparantie over volumes, kwaliteit en resultaten wordt de norm.',
    colorClasses: {
      dot: 'bg-blue-600',
      card: 'border-blue-200 bg-blue-50/60',
      badge: 'bg-blue-100 text-blue-800',
      text: 'text-blue-900',
      line: 'text-blue-300',
    },
  },
  {
    actor: 'Kopgroep',
    label: 'Kopgroep (8 voorlopers)',
    timing: 'Q2 2027',
    description:
      'Kopgroep merkt dat hun rol serieus is en zet door met nieuwe initiatieven',
    detail:
      'De kopgroep voelt de erkenning en versnelt. Nieuwe initiatieven worden gestart, succesvolle pilots opgeschaald. Hun voorsprong wordt steeds groter — en zichtbaarder voor andere aanbieders.',
    colorClasses: {
      dot: 'bg-emerald-600',
      card: 'border-emerald-200 bg-emerald-50/60',
      badge: 'bg-emerald-100 text-emerald-800',
      text: 'text-emerald-900',
      line: 'text-emerald-300',
    },
  },
  {
    actor: 'SOJ',
    label: 'Serviceorganisatie Jeugd',
    timing: 'Q3-Q4 2027',
    description:
      'SoJ past de contracten/voorwaarden aan in de nieuwe contracteringsronde',
    detail:
      'De nieuwe contracten bevatten concrete KAM-criteria: volumetransparantie, resultaatmeting, samenwerking in de keten. Aanbieders die al meedoen, hebben een voorsprong.',
    colorClasses: {
      dot: 'bg-blue-600',
      card: 'border-blue-200 bg-blue-50/60',
      badge: 'bg-blue-100 text-blue-800',
      text: 'text-blue-900',
      line: 'text-blue-300',
    },
  },
  {
    actor: 'Alle aanbieders',
    label: 'Alle aanbieders',
    timing: '2028',
    description:
      'Alle aanbieders moeten zo werken, anders geen contract',
    detail:
      'Het eindpunt: KAM is de standaard. Alle aanbieders in Zuid-Holland Zuid werken volgens de principes van passende zorg. Wie niet meegaat, verliest zijn contractpositie. De transformatie is onomkeerbaar.',
    colorClasses: {
      dot: 'bg-amber-500',
      card: 'border-amber-200 bg-amber-50/60',
      badge: 'bg-amber-100 text-amber-800',
      text: 'text-amber-900',
      line: 'text-amber-300',
    },
  },
];

export default function InteractiveTimeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-blue-600" />
          <span className="text-sm font-medium text-gray-700">SOJ (Inkoper)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-emerald-600" />
          <span className="text-sm font-medium text-gray-700">Kopgroep (8 voorlopers)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-amber-500" />
          <span className="text-sm font-medium text-gray-700">Aanbieders</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mt-10">
        {/* Start label */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
            <ChevronDown className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Startpunt — eind 2025
          </span>
        </div>

        {/* Vertical connecting line */}
        <div className="absolute left-4 top-14 bottom-24 w-0.5 bg-gradient-to-b from-blue-300 via-emerald-300 to-amber-300" />

        {/* Steps */}
        <div className="space-y-0">
          {timelineSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            const isExpanded = expandedStep === idx;
            return (
              <div key={idx} className="relative pb-8 last:pb-0">
                {/* "Nu" indicator */}
                {step.isNow && (
                  <div className="absolute left-0 -top-1 z-20 flex items-center gap-2">
                    <span className="relative flex h-7 w-7 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-40" />
                      <span className="relative inline-flex h-5 w-5 rounded-full bg-rose-500 ring-2 ring-white" />
                    </span>
                    <span className="rounded-full bg-rose-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
                      NU
                    </span>
                  </div>
                )}

                {/* Dot on the line */}
                <div
                  className={`absolute left-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ${step.colorClasses.dot} ring-4 ring-white`}
                  style={{
                    left: '1.0625rem',
                    top: step.isNow ? '2rem' : '1.25rem',
                  }}
                />

                {/* Card */}
                <div
                  className={`ml-12 ${isLeft ? 'sm:mr-[25%]' : 'sm:ml-[25%]'}`}
                  style={{ marginTop: step.isNow ? '1.5rem' : 0 }}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedStep(isExpanded ? null : idx)}
                    className={`w-full text-left rounded-xl border ${step.colorClasses.card} p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${isExpanded ? 'ring-2 ring-primary-300' : ''}`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${step.colorClasses.badge}`}>
                          {step.actor}
                        </span>
                        <span className="text-xs font-medium text-gray-400">{step.timing}</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {/* Description */}
                    <p className={`mt-2 text-sm font-medium leading-relaxed ${step.colorClasses.text}`}>
                      {step.description}
                    </p>

                    {/* Expanded detail */}
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isExpanded ? '200px' : '0px',
                        opacity: isExpanded ? 1 : 0,
                      }}
                    >
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                        {step.detail}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* End label */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
            Eindpunt — 2028
          </span>
        </div>
      </div>

      {/* Annotation */}
      <div className="mt-8 rounded-xl bg-gradient-to-r from-primary-50 to-amber-50 p-5 sm:p-6 border border-primary-100">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
          <p className="text-sm leading-relaxed text-gray-700">
            <strong className="text-foreground">Klik op een stap voor meer details.</strong>{' '}
            De cascade van actie en reactie tussen SOJ, kopgroep en aanbieders
            creëert een onomkeerbare beweging richting kwaliteitsgedreven jeugdzorg.
          </p>
        </div>
      </div>
    </div>
  );
}
