import { ArrowRight, Building2, Check, Home, Mail, Plus, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/common/Logo';
import { StatusPill } from '../components/common/StatusPill';
import { Alert, Button, DataTable, Field, PageHeader, Panel, SectionTitle } from '../design-system';

const colorTokens = [
  { name: 'Surface', value: '#f9f9f7', variable: '--ds-surface' },
  { name: 'Raised', value: '#ffffff', variable: '--ds-surface-raised' },
  { name: 'Muted', value: '#f2f1ec', variable: '--ds-surface-muted' },
  { name: 'Text', value: '#000000', variable: '--ds-text' },
  { name: 'Soft text', value: '#5f5f5f', variable: '--ds-text-soft' },
  { name: 'Muted text', value: '#888888', variable: '--ds-text-muted' },
  { name: 'Accent', value: '#b79a60', variable: '--ds-accent' },
  { name: 'Danger', value: '#be123c', variable: '--ds-danger' },
  { name: 'Success', value: '#047857', variable: '--ds-success' },
];

const spacingTokens = [
  { name: 'Radius small', value: '4px', variable: '--ds-radius-sm' },
  { name: 'Radius medium', value: '8px', variable: '--ds-radius-md' },
  { name: 'Radius large', value: '14px', variable: '--ds-radius-lg' },
  { name: 'Shadow small', value: '0 10px 30px rgba(0,0,0,.045)', variable: '--ds-shadow-sm' },
  { name: 'Shadow medium', value: '0 18px 70px rgba(0,0,0,.06)', variable: '--ds-shadow-md' },
];

const sectionLinkClassName =
  'border-b border-black/8 py-3 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#888888] transition hover:text-black';

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/8 py-3 text-sm">
      <span className="text-[#888888]">{label}</span>
      <span className="font-medium text-black">{value}</span>
    </div>
  );
}

function SystemSection({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-black/8 py-14">
      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          <p className="ds-eyebrow">{eyebrow}</p>
          <h2 className="ds-heading-lg mt-4">{title}</h2>
          {description ? <p className="ds-copy mt-5">{description}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f7] text-black">
      <header className="sticky top-0 z-40 border-b border-black/8 bg-[rgba(249,249,247,0.94)] px-4 py-5 backdrop-blur-xl sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-5 xl:flex">
            {['Identity', 'Type', 'Color', 'Components', 'Forms', 'Patterns'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[0.68rem] uppercase tracking-[0.26em] text-[#888888] hover:text-black">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-10">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="ds-eyebrow">Contents</p>
            <nav className="mt-6 flex flex-col">
              <a href="#identity" className={sectionLinkClassName}>Identity</a>
              <a href="#type" className={sectionLinkClassName}>Typography</a>
              <a href="#color" className={sectionLinkClassName}>Color</a>
              <a href="#components" className={sectionLinkClassName}>Components</a>
              <a href="#forms" className={sectionLinkClassName}>Forms</a>
              <a href="#patterns" className={sectionLinkClassName}>Patterns</a>
            </nav>
          </div>
        </aside>

        <div>
          <PageHeader
            eyebrow="Aurora Prime Design System"
            title="A living style guide for the real estate platform."
            description="Use this page as the reference for visual language, reusable UI components, spacing, states and admin/public interface patterns."
            actions={
              <>
                <Button as="a" href="#components">
                  View components
                  <ArrowRight size={15} />
                </Button>
              </>
            }
          />

          <SystemSection
            id="identity"
            eyebrow="01 / Identity"
            title="Brand foundation"
            description="Aurora Prime uses a restrained editorial language: quiet surfaces, black typography, soft dividers and one warm accent."
          >
            <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
              <Panel className="p-8">
                <Logo />
                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                  <SpecRow label="Product" value="Aurora Prime" />
                  <SpecRow label="Category" value="Premium real estate" />
                  <SpecRow label="Tone" value="Editorial, calm, precise" />
                </div>
              </Panel>
              <Panel className="bg-black p-8 text-[#f9f9f7]">
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/50">Dark usage</p>
                <h3 className="mt-5 max-w-sm text-4xl font-medium leading-tight">Portfolio-grade property experiences.</h3>
                <p className="mt-6 text-sm leading-7 text-white/60">Use dark blocks sparingly for moments that need stronger contrast.</p>
              </Panel>
            </div>
          </SystemSection>

          <SystemSection
            id="type"
            eyebrow="02 / Typography"
            title="Type scale"
            description="Inter carries both display and interface roles. Letter spacing is kept at zero for headings and deliberate uppercase tracking is reserved for labels."
          >
            <div className="space-y-6">
              <Panel className="p-8">
                <p className="ds-eyebrow">Display / xl</p>
                <h1 className="ds-heading-xl mt-4">Control center for premium listings.</h1>
              </Panel>
              <div className="grid gap-6 xl:grid-cols-2">
                <Panel className="p-8">
                  <p className="ds-eyebrow">Heading / lg</p>
                  <h2 className="ds-heading-lg mt-4">Listings dashboard</h2>
                  <p className="ds-copy mt-5">Used for page sections, landing modules and admin page headers.</p>
                </Panel>
                <Panel className="p-8">
                  <p className="ds-eyebrow">Heading / md</p>
                  <h3 className="ds-heading-md mt-4">Property overview</h3>
                  <p className="ds-copy mt-5">Used inside panels, cards and compact interface blocks.</p>
                </Panel>
              </div>
            </div>
          </SystemSection>

          <SystemSection
            id="color"
            eyebrow="03 / Color"
            title="Color tokens"
            description="The palette avoids heavy saturation and uses the accent color for focus, interaction and premium details."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {colorTokens.map((token) => (
                <Panel key={token.variable} className="overflow-hidden">
                  <div className="h-24 border-b border-black/8" style={{ backgroundColor: token.value }} />
                  <div className="p-5">
                    <p className="font-medium text-black">{token.name}</p>
                    <p className="mt-2 font-mono text-xs text-[#888888]">{token.variable}</p>
                    <p className="mt-1 font-mono text-xs text-[#888888]">{token.value}</p>
                  </div>
                </Panel>
              ))}
            </div>
          </SystemSection>

          <SystemSection
            id="components"
            eyebrow="04 / Components"
            title="Buttons, cards and states"
            description="Reusable components define the core product feel and keep admin/public UI consistent."
          >
            <div className="space-y-8">
              <Panel className="p-8">
                <SectionTitle eyebrow="Buttons" title="Action hierarchy" description="Primary for commits, secondary for navigation, danger for destructive operations." />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button><Plus size={16} /> Primary action</Button>
                  <Button variant="secondary"><Search size={16} /> Secondary action</Button>
                  <Button variant="danger">Delete item</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </Panel>

              <div className="grid gap-6 xl:grid-cols-3">
                <Panel className="p-6">
                  <Building2 size={22} strokeWidth={1.4} />
                  <p className="ds-eyebrow mt-8">Card</p>
                  <h3 className="ds-heading-md mt-3">Aurora Bay Penthouse</h3>
                  <p className="ds-copy mt-4">A compact content card for properties, agents and dashboard records.</p>
                </Panel>
                <Panel className="p-6">
                  <ShieldCheck size={22} strokeWidth={1.4} />
                  <p className="ds-eyebrow mt-8">Status</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <StatusPill value="active" label="active" />
                    <StatusPill value="contacted" label="contacted" />
                    <StatusPill value="closed" label="closed" />
                  </div>
                </Panel>
                <Panel className="p-6">
                  <Home size={22} strokeWidth={1.4} />
                  <p className="ds-eyebrow mt-8">Metric</p>
                  <p className="mt-4 text-6xl font-medium">128</p>
                  <p className="ds-copy mt-4">Listings visible in the current portfolio.</p>
                </Panel>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <Alert tone="success">
                  <div className="flex items-center gap-3">
                    <Check size={16} />
                    Changes saved successfully.
                  </div>
                </Alert>
                <Alert>Unable to connect to the server. Try again in a moment.</Alert>
              </div>
            </div>
          </SystemSection>

          <SystemSection
            id="forms"
            eyebrow="05 / Forms"
            title="Form controls"
            description="Editorial fields are used for public forms and boxed fields are used in dense admin tools."
          >
            <div className="grid gap-8 xl:grid-cols-2">
              <Panel className="p-8">
                <SectionTitle eyebrow="Editorial" title="Public inquiry" />
                <form className="mt-8 space-y-7">
                  <Field label="Nome" placeholder="Seu nome completo" />
                  <Field label="E-mail" type="email" placeholder="seuemail@email.com" />
                  <Field as="textarea" label="Mensagem" placeholder="Conte brevemente o perfil do imovel." />
                  <Button className="w-full">Send inquiry</Button>
                </form>
              </Panel>
              <Panel className="p-8">
                <SectionTitle eyebrow="Admin" title="Management form" />
                <form className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field boxed label="Title" placeholder="Property title" className="sm:col-span-2" />
                  <Field boxed label="Price" type="number" placeholder="2500000" />
                  <Field boxed as="select" label="Status" defaultValue="active">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Field>
                  <Field boxed as="textarea" label="Description" placeholder="Listing description" className="sm:col-span-2" />
                </form>
              </Panel>
            </div>
          </SystemSection>

          <SystemSection
            id="patterns"
            eyebrow="06 / Patterns"
            title="Banners, tables and layouts"
            description="These are the larger reusable arrangements used by admin screens and editorial pages."
          >
            <div className="space-y-8">
              <Panel className="overflow-hidden">
                <div className="grid min-h-[320px] gap-8 bg-black p-8 text-[#f9f9f7] lg:grid-cols-[1fr_0.8fr] lg:p-12">
                  <div className="flex flex-col justify-between gap-10">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/50">Banner</p>
                      <h3 className="mt-5 max-w-2xl text-5xl font-medium leading-none">Curated homes for precise decisions.</h3>
                    </div>
                    <Button variant="secondary" className="border-white/30 text-white hover:bg-white hover:text-black">
                      Explore pattern
                    </Button>
                  </div>
                  <div className="min-h-64 bg-[linear-gradient(135deg,#d7c7b0_0%,#f3ebe0_52%,#f9f7f1_100%)]" />
                </div>
              </Panel>

              <DataTable>
                <thead>
                  <tr>
                    <th>Pattern</th>
                    <th>Usage</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-black">Page header</td>
                    <td className="text-[#5f5f5f]">Admin and documentation page titles</td>
                    <td><StatusPill value="active" label="active" /></td>
                  </tr>
                  <tr>
                    <td className="font-medium text-black">Data table</td>
                    <td className="text-[#5f5f5f]">Listings, users and system records</td>
                    <td><StatusPill value="active" label="active" /></td>
                  </tr>
                  <tr>
                    <td className="font-medium text-black">Inquiry form</td>
                    <td className="text-[#5f5f5f]">Contact and property lead capture</td>
                    <td><StatusPill value="contacted" label="review" /></td>
                  </tr>
                </tbody>
              </DataTable>

              <Panel className="p-8">
                <SectionTitle eyebrow="Foundation tokens" title="Spacing, radius and shadows" />
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {spacingTokens.map((token) => (
                    <SpecRow key={token.variable} label={token.variable} value={token.value} />
                  ))}
                </div>
              </Panel>
            </div>
          </SystemSection>

          <footer className="border-t border-black/8 py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="ds-copy">Design system page for Aurora Prime.</p>
              <a href="mailto:design@auroraprime.local" className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-black">
                <Mail size={14} />
                design@auroraprime.local
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
