'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BookOpen, FileText, GitFork, Compass, BookMarked, Search } from 'lucide-react';
import { knowledgeItems } from '@/data/knowledge';
import { themes } from '@/data/themes';
import { Tag } from '@/components/ui/Tag';
import { KnowledgeType } from '@/lib/types';

const typeConfig: Record<KnowledgeType, { label: string; icon: typeof BookOpen; color: string }> = {
  framework: { label: 'Framework', icon: BookOpen, color: 'bg-primary-50 text-primary-600' },
  instrument: { label: 'Instrument', icon: Compass, color: 'bg-amber-50 text-amber-600' },
  beslisboom: { label: 'Beslisboom', icon: GitFork, color: 'bg-violet-50 text-violet-600' },
  richtlijn: { label: 'Richtlijn', icon: BookMarked, color: 'bg-emerald-50 text-emerald-600' },
  publicatie: { label: 'Publicatie', icon: FileText, color: 'bg-sky-50 text-sky-600' },
};

const allTypes = Object.keys(typeConfig) as KnowledgeType[];

export default function KennisbankPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<KnowledgeType | 'all'>('all');

  const filteredItems = useMemo(() => {
    return knowledgeItems.filter((item) => {
      const matchesType = activeType === 'all' || item.type === activeType;
      const matchesSearch =
        searchQuery === '' ||
        item.titel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.beschrijving.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [searchQuery, activeType]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 p-8 sm:p-10 text-white mb-8">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary-600 opacity-30 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-6 w-6 text-primary-200" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-200">
              Kwaliteit als Medicijn
            </span>
          </div>
          <h1 className="text-2xl font-bold sm:text-3xl">Kennisbank</h1>
          <p className="mt-2 text-primary-100 max-w-xl">
            Frameworks, instrumenten, beslisbomen, richtlijnen en publicaties rondom
            Kwaliteit als Medicijn en de 5 initiatieven.
          </p>
        </div>
      </div>

      {/* Search & filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Zoek in de kennisbank..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveType('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeType === 'all'
                ? 'bg-primary-100 text-primary-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            Alles ({knowledgeItems.length})
          </button>
          {allTypes.map((type) => {
            const config = typeConfig[type];
            const count = knowledgeItems.filter((i) => i.type === type).length;
            if (count === 0) return null;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeType === type
                    ? 'bg-primary-100 text-primary-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                {config.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      {searchQuery && (
        <p className="text-sm text-gray-500 mb-4">
          {filteredItems.length} {filteredItems.length === 1 ? 'resultaat' : 'resultaten'} gevonden
        </p>
      )}

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;
          const itemThemes = item.themas
            .map((s) => themes.find((t) => t.slug === s))
            .filter(Boolean);

          return (
            <Link
              key={item.slug}
              href={`/kennisbank/${item.slug}`}
              className="group flex flex-col rounded-xl border border-surface-200 bg-white p-5 shadow-sm transition-all hover:border-primary-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${config.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {config.label}
                </span>
              </div>

              <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary-700">
                {item.titel}
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">{item.beschrijving}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {itemThemes.map((theme) =>
                  theme ? <Tag key={theme.slug} label={theme.label} color={theme.color} /> : null
                )}
              </div>

              <p className="mt-auto pt-4 text-xs text-gray-400 border-t border-surface-100">
                Laatst bijgewerkt: {new Date(item.laatstBijgewerkt).toLocaleDateString('nl-NL')}
              </p>
            </Link>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <Search className="mx-auto h-12 w-12 text-gray-300" />
          <p className="mt-4 text-gray-500">Geen resultaten gevonden voor &ldquo;{searchQuery}&rdquo;</p>
          <button
            type="button"
            onClick={() => { setSearchQuery(''); setActiveType('all'); }}
            className="mt-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Filters wissen
          </button>
        </div>
      )}
    </div>
  );
}
