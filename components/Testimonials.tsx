import { Quote } from 'lucide-react';

const ITEMS = [
  {
    name: 'Ava R.',
    title: 'Quant Trader',
    quote: 'Aegis surfaces signals I used to spend hours engineering. My hit rate improved noticeably.'
  },
  {
    name: 'Leo M.',
    title: 'Crypto Analyst',
    quote: 'Combining on-chain, momentum, and risk metrics in one place is a game changer.'
  },
  {
    name: 'Sofia T.',
    title: 'Retail Investor',
    quote: 'The clarity of insights and risk warnings keeps me from emotional trades.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="User testimonials" className="section container-max">
      <div className="grid md:grid-cols-3 gap-6">
        {ITEMS.map((t, i) => (
          <figure key={i} className="card p-6">
            <Quote className="w-6 h-6 text-accent-blue" aria-hidden />
            <blockquote className="mt-4 text-white/90">?{t.quote}?</blockquote>
            <figcaption className="mt-4 text-sm subtext">{t.name} ? {t.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
