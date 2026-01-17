import Link from 'next/link';
import Image from 'next/image';
import { SOLUTIONS } from '../data/solutions';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-20">
      <section className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Enterprise AI & ML services that scale with your business
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl">
            MillenniumAI partners with global enterprises to deliver secure, production-ready AI solutions — LLM training, computer vision, NLP,
            moderation, and full-stack deployments with strict governance and operational excellence.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="inline-flex items-center bg-accent text-white px-5 py-3 rounded-md font-semibold shadow hover:opacity-95">Get a consultation</Link>
            <Link href="/work" className="inline-flex items-center px-5 py-3 rounded-md border">View case studies</Link>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SOLUTIONS.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="p-3 border rounded-md hover:shadow-sm">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-sm text-muted mt-1">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=1200&q=80" alt="AI visualization" width={1200} height={800} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold">Trusted by global enterprises</h3>
        <p className="text-muted mt-2">Security-first, privacy-aware engagements across regulated industries.</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-md text-center">Retail</div>
          <div className="p-4 border rounded-md text-center">Healthcare</div>
          <div className="p-4 border rounded-md text-center">Fintech</div>
          <div className="p-4 border rounded-md text-center">Autonomous Mobility</div>
        </div>
      </section>
    </div>
  );
}