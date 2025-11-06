"use client";

import AnimatedBackground from '../components/AnimatedBackground';
import ChartCard from '../components/ChartCard';
import CryptoTable from '../components/CryptoTable';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTAButtons from '../components/CTAButtons';
import { motion } from 'framer-motion';

export default function Home() {
  const labels = Array.from({ length: 40 }, (_, i) => `${i}`);
  const series1 = labels.map((_, i) => 100 + Math.sin(i / 3) * 8 + Math.random() * 4);
  const series2 = labels.map((_, i) => 60 + Math.cos(i / 4) * 6 + Math.random() * 3);
  const series3 = labels.map((_, i) => 30 + Math.sin(i / 5) * 4 + Math.random() * 2);

  return (
    <main>
      {/* Hero */}
      <section id="hero" className="relative section overflow-hidden">
        <AnimatedBackground />
        <div className="container-max relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="section-heading leading-tight">
              AI-powered crypto insights for next-level trading
            </h1>
            <p className="subtext mt-4 text-lg">
              Aegis analyzes market momentum, volatility, and on-chain signals to surface opportunities and manage risk?so you can trade with conviction.
            </p>
            <div className="mt-6">
              <CTAButtons />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-10 grid md:grid-cols-3 gap-4">
            <ChartCard title="Momentum score" series={series1} labels={labels} color="#00E5FF" subtitle="Aggregated signal" />
            <ChartCard title="Risk index" series={series2} labels={labels} color="#00FF9C" subtitle="Volatility-adjusted" />
            <ChartCard title="On-chain flow" series={series3} labels={labels} color="#9D4EDD" subtitle="Exchange netflow" />
          </motion.div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="section container-max">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="section-heading">AI-driven insights</h2>
            <p className="subtext mt-3">Interactive models highlight potential entries, exits, and risk. Micro-interactions guide exploration with accessible controls.</p>
            <ul className="mt-6 space-y-2 text-white/90">
              <li>? Opportunity scanner ranks assets by momentum and trend stability</li>
              <li>? Risk assessment adapts to volatility regimes</li>
              <li>? Scenario testing simulates outcomes across timeframes</li>
            </ul>
            <div className="mt-6">
              <a href="#pricing" className="btn-primary">Get Started</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ChartCard title="Alpha potential" series={series1} labels={labels} color="#00E5FF" />
            <ChartCard title="Drawdown risk" series={series2} labels={labels} color="#00FF9C" />
            <ChartCard title="Trend health" series={series3} labels={labels} color="#9D4EDD" />
            <ChartCard title="Liquidity pulse" series={series2} labels={labels} color="#00FF9C" />
          </div>
        </div>
      </section>

      {/* Market data */}
      <CryptoTable />

      {/* Social proof */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />
    </main>
  );
}
