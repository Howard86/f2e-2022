import { LinkIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import type { AProps } from 'react-html-props'

type Project = {
  name: string
  href: string
  subheader: string
  src: string
  description: string
  used: Library[]
  related: Library[]
}

type Library = {
  name: string
  href: string
  description?: string
}

const libraries: Library[] = [
  {
    description:
      'A monorepo tools to streamline better development experience & pipeline orchestration tools. It was a great fun to compare the working process between lerna@4.0.0, nx, lerna@^5, also how we can create packages just for shared configuration files.',
    href: 'https://turbo.build/repo',
    name: 'Turborepo',
  },
  {
    description:
      'A versioning workflow with integrated GitHub action. This was a new experience comparing to using conventional commit with auto-generated changelog.',
    href: 'https://github.com/changesets/changesets',
    name: 'Changesets',
  },
  {
    description:
      'A low-level but battery-included way to write css and set up design system. Coming from a background of working with Styled Components and theme context injection, this pure CSS class syntax does bring a lot of benefits of bundle sizing and support of React Server Components.',
    href: 'https://tailwindcss.com',
    name: 'Tailwind CSS',
  },
  {
    description:
      'Preconfigured JavaScript bundler written in Golang. The performance is outstanding and will need more time to play around and benchmark.',
    href: 'https://tsup.egoist.dev',
    name: 'tsup & esbuild',
  },
]

const projects: Project[] = [
  {
    description:
      "Created at least 10+ shared animated React components powered by Framer Motion, tried a way to clean up all Framer Motion's shared variants, transitions & dynamic variables",
    href: 'https://f2e-2022.howardism.dev',
    name: 'F2E 2022 Landing page',
    related: [
      {
        href: 'https://greensock.com',
        name: 'GreenSock',
      },
    ],
    src: './f2e-2022-logo.png',
    subheader: 'Redesign of official F2E landing page with animations',
    used: [
      {
        href: 'https://www.framer.com/motion',
        name: 'Framer Motion',
      },
    ],
  },
  {
    description:
      ' As reviewing the UI, realises the scope had been over and some features will required more than just frontend technology to integrate. For example, creating a personal account will require authentication scheme and an external datasource such as Firebase; saving signature history will probably require using browser database like IndexedDB; sharing files for multi-signature will require an online storage for sharing either signatures or original/signed documents which will most likely lead to security & encryption issues; This application could easily develop into an MVP but cannot see which feature to focus as initial launch.',
    href: 'https://pdf.howardism.dev',
    name: 'PDF Sign',
    related: [
      {
        href: 'https://parall.ax/products/jspdf',
        name: 'jsPDF',
      },
      {
        href: 'https://firebase.blog',
        name: 'Firebase',
      },
      {
        href: 'https://dexie.org',
        name: 'Dexie.js',
      },
    ],
    src: './pdf-logo.png',
    subheader:
      'A web-browser only application to support digital signature on mobile & desktop devices',
    used: [
      {
        href: 'https://mozilla.github.io/pdf.js/',
        name: 'PDF.js',
      },
      {
        href: 'http://fabricjs.com',
        name: 'Fabric.js',
      },
      {
        href: 'https://zustand-demo.pmnd.rs',
        name: 'zustand',
      },
    ],
  },
  {
    description:
      'Tested development with React Server Component and Next.js v13 app folder structure (without any server-side data fetching mechanism). It felt like working within feature folder structure where each route/layout has context-specific client-side and server-side React components, which was another applicable approach when working on large scale applications.',
    href: 'https://scrum.howardism.dev',
    name: 'Scrum Introduction',
    related: [
      {
        href: 'https://react-beautiful-dnd.netlify.app',
        name: 'react-beautiful-dnd',
      },
      { href: 'https://sortablejs.github.io/Sortable/', name: 'SortableJS' },
    ],
    src: './scrum-logo.png',
    subheader:
      'A step-by-step tutorial to conduct ideas of Scrum - an agile methodology of software development',
    used: [
      {
        href: 'https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html',
        name: 'React Server Components',
      },
      {
        href: 'https://beta.nextjs.org/docs/app-directory-roadmap',
        name: 'Next.js AppDir',
      },
      {
        href: 'https://dnd.hellopangea.com',
        name: 'hello-pangea/dnd',
      },
    ],
  },
]

function ExternalLink(props: AProps) {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a rel="noreferrer" target="_blank" {...props} />
}

export default function Home() {
  return (
    <main>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text text-center font-bold text-4xl text-transparent">
            F2E 2022 Challenges
          </h1>
          <h2 className="mx-auto mt-5 max-w-prose text-center text-gray-500 text-xl">
            A 3-week frontend development challenge - working together with UI designer and trying
            new frontend technologies
          </h2>

          <ul className="my-8 flex flex-col gap-8 md:gap-12">
            {projects.map((item) => (
              <li className="group rounded-2xl border shadow-md" key={item.name}>
                <div className="flex h-full overflow-hidden rounded-2xl px-4">
                  <Image
                    alt={item.name}
                    className="m-2 self-center rounded-xl bg-white"
                    height={196}
                    src={item.src}
                    width={196}
                  />

                  <div className="m-2 flex flex-1 flex-col items-start rounded-xl bg-white p-4">
                    <h3 className="my-1 inline-flex items-center bg-gradient-to-r from-purple-600 to-green-400 bg-clip-text font-bold text-xl group-hover:text-transparent md:text-2xl">
                      {item.name}
                      <ExternalLink
                        aria-label={`${item.name} demo url`}
                        className="ml-2 hover:scale-105 group-hover:text-slate-700"
                        href={item.href}
                      >
                        <LinkIcon className="h-6 w-6" />
                      </ExternalLink>
                    </h3>
                    <h4 className="text-gray-600">{item.subheader}</h4>
                    <p className="mt-3 flex-1 text-start">{item.description}</p>

                    <div className="mt-4 grid w-full grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-medium text-lg">Used</h5>
                        <ul>
                          {item.used.map((used) => (
                            <li key={used.href}>
                              <a className="hover:text-indigo-600" href={used.href}>
                                {used.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-lg">Related</h5>
                        <ul>
                          {item.related.map((related) => (
                            <li key={related.href}>
                              <a className="hover:text-indigo-600" href={related.href}>
                                {related.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <div className="px-4 py-5 sm:px-6">
              <h2 className="font-medium text-gray-900 text-xl leading-6">Related Tech stacks</h2>
              <p className="mt-1 max-w-2xl text-gray-500 text-sm">Shared across applications</p>
            </div>
            <div className="mt-5 border-gray-200 border-t">
              <dl className="divide-y divide-gray-200">
                {libraries.map((item) => (
                  <div className="p-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:py-5" key={item.href}>
                    <dt className="font-bold text-gray-500 text-sm">{item.name}</dt>
                    <dd className="mt-1 flex text-gray-900 text-sm sm:col-span-3 sm:mt-0">
                      <span className="grow">{item.description}</span>
                      <span className="ml-4 shrink-0">
                        <a
                          className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          href={item.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Reference
                        </a>
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
