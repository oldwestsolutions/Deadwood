import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
              Deadwood<span className="text-neutral-600">.software</span>
            </h3>
            <p className="text-sm mb-4 text-neutral-500 leading-relaxed">
              Quantum-inspired optimization for food supply chains. Reduce waste, volatility, and cost across the entire supply chain.
            </p>
            <p className="text-xs text-neutral-700">
              © {new Date().getFullYear()} Deadwood.software. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Platform
            </h3>
            <ul className="space-y-3">
              <li><Link href="#gitlab-ci" className="text-sm text-neutral-500 hover:text-white transition-colors">GitLab CI</Link></li>
              <li><Link href="#technology" className="text-sm text-neutral-500 hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="#enterprise" className="text-sm text-neutral-500 hover:text-white transition-colors">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li><span className="text-sm text-neutral-500">Demand Forecasting</span></li>
              <li><span className="text-sm text-neutral-500">Inventory Optimization</span></li>
              <li><span className="text-sm text-neutral-500">Supplier Risk Modeling</span></li>
              <li><span className="text-sm text-neutral-500">Logistics Optimization</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link href="#contact" className="text-sm text-neutral-500 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/docs" className="text-sm text-neutral-500 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/support" className="text-sm text-neutral-500 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-xs text-neutral-700 text-center">
            Quantum-inspired optimization • Enterprise-grade security • Production-ready infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
