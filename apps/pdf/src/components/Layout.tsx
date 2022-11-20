import { DivProps } from 'react-html-props'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: Pick<DivProps, 'children'>) {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col items-center px-6 py-8 md:py-10">
        {children}
      </main>
      <Footer />
    </>
  )
}
