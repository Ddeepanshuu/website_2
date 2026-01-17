import { notFound } from 'next/navigation';

const POSTS: Record<string, { title: string; content: string; date: string }> = {
  'efficient-llm-workflows': {
    title: 'Efficient LLM Workflows for Enterprise',
    date: '2026-01-10',
    content: `<p>Abstract: LLM operations at scale require robust data pipelines, evaluation, and deployment strategies. This post covers best practices for dataset design, fine-tuning, and cost-aware inference.</p>`
  },
  'safeguarding-ai': {
    title: 'Safeguarding AI: Red-Teaming and Safety',
    date: '2025-12-01',
    content: `<p>We explore frameworks for testing model behaviors, handling adversarial inputs, and governance for safe deployments.</p>`
  }
};

type Props = { params: { slug: string } };

export default function Insight({ params }: Props) {
  const post = POSTS[params.slug];
  if (!post) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-muted mt-2">{post.date}</p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.content }} className="prose max-w-none" />
    </article>
  );
}