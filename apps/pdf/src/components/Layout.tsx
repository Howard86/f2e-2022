import { DivProps } from 'react-html-props'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: Pick<DivProps, 'children'>) {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center px-6 py-8">{children}</main>
      <Footer />
    </>
  )
}
