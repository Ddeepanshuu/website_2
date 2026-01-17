import Link from 'next/link';

const INDUSTRIES = [
  'Retail & Consumer Tech',
  'Healthcare & Life Sciences',
  'Autonomous Mobility',
  'Security & Surveillance AI',
  'Smart Agriculture',
  'Financial Technology',
  'Robotics & Automation',
  'Logistics & Supply Chain',
  'Real Estate Technology',
  'Geospatial Intelligence',
  'Digital Commerce',
  'Insurance Analytics'
];

export default function IndustriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Industries</h1>
        <p className="text-muted mt-2">Industry-focused solutions built for regulatory and operational needs.</p>
      </header>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {INDUSTRIES.map((i) => (
          <Link href={`/industries/${slugify(i)}`} key={i} className="p-5 border rounded-md hover:shadow-sm">
            <h3 className="font-semibold">{i}</h3>
            <p className="text-sm text-muted mt-1">Enterprise solutions for {i} with compliance and domain-specific datasets.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}