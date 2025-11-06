import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: [
      'Top 25 coins snapshot',
      'Daily refreshed signals',
      'Email support'
    ],
    cta: 'Get Started',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: [
      'Real-time insights',
      'Opportunity scanner',
      'Portfolio risk alerts'
    ],
    cta: 'Start Free Trial',
    highlight: true
  },
  {
    name: 'Elite',
    price: '$99',
    period: '/mo',
    features: [
      'Advanced AI strategies',
      'Backtesting & export',
      'Priority support'
    ],
    cta: 'Contact Sales',
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" aria-label="Subscription options" className="section container-max">
      <div className="text-center mb-10">
        <h2 className="section-heading">Choose your edge</h2>
        <p className="subtext mt-2">Flexible plans for investors and teams</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {PLANS.map((p, i) => (
          <div key={i} className={`card p-6 ${p.highlight ? 'ring-1 ring-accent-blue shadow-glow' : ''}`}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.highlight && <span className="text-xs text-accent-blue">Most popular</span>}
            </div>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold">{p.price}</span>
              <span className="subtext">{p.period}</span>
            </div>
            <ul className="mt-6 space-y-2">
              {p.features.map((f, j) => (
                <li key={j} className="flex gap-2 text-white/90"><Check className="w-4 h-4 text-accent-green mt-1" /> {f}</li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#cta" className={p.highlight ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}>{p.cta}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
