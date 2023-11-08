import Image from 'next/image'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import pythonLogo from '@/images/logos/python.svg'
import logoTableau from '@/images/logos/tableau.svg'
import logoExcel from '@/images/logos/excel.svg'
import logoPostgreSQL from '@/images/logos/postgresql.svg'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, logo, children }) {
  return (
    <Card as="li">
      <div className="flex items-center">
          <div className="relative z-10 flex h-12 w-12 mr-2 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={logo}
            alt=""
            className="h-8 w-8"
          />
          </div>
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
      </div>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech',
  description: 'Technology I use.',
}

export default function Tech() {
  return (
    <SimpleLayout
      title="Technology I use."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Programming Languages">
          <Tool title="Python" logo={pythonLogo}>
            My go-to language for most things.
              I&apos;ve used it for everything from building web apps to data analysis to scripting.
          </Tool>
          <Tool title="SQL" logo={logoPostgreSQL}>
            I&apos;ve used a lot of different flavors of SQL over the years but I
            still prefer the simplicity of Postgres.
          </Tool>
          <Tool title="Excel VBA" logo={logoExcel}>
            VBA automates and effectivies my work in Excel.
          </Tool>
          <Tool title="React.js and Next.js">
            I&apos;ve been using React.js and Next.js for this website and I really
            like it.
          </Tool>
          <Tool title="Matlab">
            I&apos;ve been using Matlab for projects in school and I really like it.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Data Visualization">
          <Tool title="Tableau" logo={logoTableau}>
            I&apos;ve been using Tableau for years and it&apos;s still my favorite tool
            for quickly exploring data and building dashboards.
          </Tool>
          <Tool title="Power BI">
            Power BI is a great tool for building dashboards and reports.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
