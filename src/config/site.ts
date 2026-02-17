export type NavLink = { readonly type: 'link'; readonly label: string; readonly href: string };
export type NavGroup = {
  readonly type: 'group';
  readonly label: string;
  readonly items: readonly { readonly label: string; readonly href: string; readonly description: string }[];
};
export type NavItem = NavLink | NavGroup;

export const siteConfig = {
  naam: 'Kwaliteit-Als-Medicijn-ZHZ',
  beschrijving: 'Platform voor passende jeugdzorg in Zuid-Holland Zuid — van elkaar leren, informatie delen, initiatieven opschalen',
  regio: 'Zuid-Holland Zuid',
  tagline: 'Samen werken aan passende jeugdzorg',
  missie:
    'Van elkaar leren, informatie delen, initiatieven die werken opschalen — en met elkaar in contact komen. Dit platform brengt zorgaanbieders, gemeenten en professionals samen rondom het Kwaliteit als Medicijn-gedachtegoed voor de jeugdzorg.',

  // Ordered navigation: mix of direct links and dropdown groups
  navItems: [
    { type: 'link', label: 'Home', href: '/' },
    { type: 'link', label: 'Aanpak', href: '/kwaliteit-als-medicijn' },
    { type: 'link', label: 'Initiatieven', href: '/initiatieven' },
    {
      type: 'group',
      label: 'Impact',
      items: [
        { label: 'Dashboard', href: '/dashboard', description: 'Regionale cijfers en voortgang' },
        { label: 'Impact Simulator', href: '/impact-simulator', description: 'Bereken je eigen besparingspotentieel' },
        { label: 'Gemeentekaart', href: '/gemeentekaart', description: 'Kaart met alle gemeenten in ZHZ' },
      ],
    },
    { type: 'link', label: 'Organisaties', href: '/organisaties' },
    {
      type: 'group',
      label: 'Kennisbank',
      items: [
        { label: 'Kennisbank', href: '/kennisbank', description: 'Artikelen, instrumenten en frameworks' },
        { label: 'Blog', href: '/blog', description: 'Verhalen en updates uit het veld' },
        { label: 'Quiz', href: '/quiz', description: 'Test je kennis over passende jeugdzorg' },
      ],
    },
    { type: 'link', label: 'Community', href: '/community' },
    { type: 'link', label: 'Over Ons', href: '/over-ons' },
  ] satisfies NavItem[],

  // CTA button in nav
  navCta: { label: 'Doe Mee', href: '/#doe-mee' },

  // All pages for the footer
  allPages: [
    { label: 'Home', href: '/' },
    { label: 'Aanpak', href: '/kwaliteit-als-medicijn' },
    { label: 'Initiatieven', href: '/initiatieven' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Impact Simulator', href: '/impact-simulator' },
    { label: 'Gemeentekaart', href: '/gemeentekaart' },
    { label: 'Organisaties', href: '/organisaties' },
    { label: 'Kennisbank', href: '/kennisbank' },
    { label: 'Blog', href: '/blog' },
    { label: 'Quiz', href: '/quiz' },
    { label: 'Community', href: '/community' },
    { label: 'Projecten', href: '/projecten' },
    { label: 'Over Ons', href: '/over-ons' },
  ],
} as const;
