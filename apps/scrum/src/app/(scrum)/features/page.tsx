import { ScrumRoute } from '../constants'
import ScrumHeader from '../ScrumHeader'
import ScrumNav from '../ScrumNav'

export default function FeaturePage() {
  return (
    <div className="flex flex-1 flex-col">
      <ScrumHeader route={ScrumRoute['/features']} />
      <main className="flex-1">
        <section className="px-15 relative mt-9 text-center">
          <h1 className="text-h1 mb-6">Features</h1>
        </section>
      </main>
      <ScrumNav route={ScrumRoute['/features']} className="bg-secondary-brown-dark" />
    </div>
  )
}
