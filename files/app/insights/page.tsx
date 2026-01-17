import Link from 'next/link';

const POSTS = [
  { slug: 'efficient-llm-workflows', title: 'Efficient LLM Workflows for Enterprise', excerpt: 'Practical patterns for preparing data, fine-tuning, and serving large models.' },
  { slug: 'safeguarding-ai', title: 'Safeguarding AI: Red-Teaming and Safety', excerpt: 'How to operationalize evaluation and risk assessment for generative models.' }
];

export default function InsightsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header>
        <h1 className="text-3xl font-bold">Insights</h1>
        <p className="text-muted mt-2">Thought leadership on AI data, LLM workflows, and engineering practices.</p>
      </header>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {POSTS.map((p) => (
          <article key={p.slug} className="p-6 border rounded-md hover:shadow-sm">
            <h2 className="text-xl font-semibold"><Link href={`/insights/${p.slug}`}>{p.title}</Link></h2>
            <p className="text-muted mt-2">{p.excerpt}</p>
            <div className="mt-4"><Link href={`/insights/${p.slug}`} className="text-accent font-medium">Read article →</Link></div>
          </article>
        ))}
      </div>
    </div>
  );
}