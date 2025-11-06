import Link from 'next/link';

export default function CTAButtons() {
  return (
    <div id="cta" className="flex flex-wrap gap-3">
      <Link href="#pricing" className="btn-primary">Start Trading</Link>
      <Link href="#market" className="btn-secondary">Explore Market</Link>
    </div>
  );
}
