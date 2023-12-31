import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { SocialLink, MailIcon } from 'src/app/page.jsx'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  )
}

export async function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/tech">Tech</NavLink>
              <div className="flex gap-6">
                <SocialLink
                  href="https://github.com/olivernilssson"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://linkedin.com/in/oliver-nilsson-b994641aa"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
                <SocialLink
                  href="mailto:olivernilsson@live.se"
                  aria-label="Send email"
                  icon={MailIcon}
                />
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6 sm:mt-0">
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {new Date().getFullYear()} Oliver Nilsson. Made with Next.js.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
