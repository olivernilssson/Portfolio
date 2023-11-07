import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
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
          <Tool title="Python">
            My go-to language for most things.
            I&apos;ve used it for everything from building web apps to data analysis to scripting.
          </Tool>
          <Tool title="SQL">
            I&apos;ve used a lot of different flavors of SQL over the years but I
            still prefer the simplicity of Postgres.
          </Tool>
          <Tool title="Excel VBA">
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
          <Tool title="Tableau">
            I&apos;ve been using Tableau for years and it&apos;s still my favorite tool
            for quickly exploring data and building dashboards.
          </Tool>
          <Tool title="Power BI">
            Power BI is a great tool for building dashboards and reports.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It&apos;s not the newest kid on the block but it&apos;s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it&apos;s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
