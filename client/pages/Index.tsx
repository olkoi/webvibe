import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Lock, Zap, Shield, TrendingUp, Globe, BarChart3 } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-suzaa-navy mb-6 leading-tight">
            Enterprise Fintech for the New Era
          </h1>
          <p className="text-xl text-suzaa-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            SUZAA provides secure, compliant payment infrastructure trusted by leading global businesses. Streamline operations, reduce costs, and scale without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-suzaa-navy text-white px-8 py-4 rounded font-semibold hover:bg-suzaa-neutral-900 transition-colors flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-suzaa-navy text-suzaa-navy px-8 py-4 rounded font-semibold hover:bg-suzaa-navy hover:text-white transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-t border-b border-suzaa-neutral-200 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center border-r border-suzaa-neutral-200 last:border-r-0">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">$2.5B+</p>
              <p className="text-suzaa-neutral-600">Transactions Processed</p>
            </div>
            <div className="text-center border-r border-suzaa-neutral-200 last:border-r-0">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">150+</p>
              <p className="text-suzaa-neutral-600">Countries Supported</p>
            </div>
            <div className="text-center border-r border-suzaa-neutral-200 last:border-r-0">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">99.99%</p>
              <p className="text-suzaa-neutral-600">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">2ms</p>
              <p className="text-suzaa-neutral-600">Average Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-suzaa-navy mb-4">
              Built for Enterprise
            </h2>
            <p className="text-lg text-suzaa-neutral-600 max-w-2xl mx-auto">
              Industry-leading infrastructure designed to meet the most demanding compliance and security requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="w-12 h-12 bg-suzaa-blue/10 rounded flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-suzaa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-suzaa-navy mb-3">
                Bank-Grade Security
              </h3>
              <p className="text-suzaa-neutral-600">
                Military-grade encryption and multi-layer security protocols protect your assets 24/7.
              </p>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-suzaa-blue/10 rounded flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-suzaa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-suzaa-navy mb-3">
                Full Compliance
              </h3>
              <p className="text-suzaa-neutral-600">
                Certified for PCI-DSS, SOC 2, GDPR, and all major regulatory frameworks globally.
              </p>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-suzaa-blue/10 rounded flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-suzaa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-suzaa-navy mb-3">
                Instant Settlement
              </h3>
              <p className="text-suzaa-neutral-600">
                Real-time processing with settlement in seconds, not days.
              </p>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-suzaa-blue/10 rounded flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-suzaa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-suzaa-navy mb-3">
                Global Reach
              </h3>
              <p className="text-suzaa-neutral-600">
                Support for 150+ countries and over 100 currencies with local payment methods.
              </p>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-suzaa-blue/10 rounded flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-suzaa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-suzaa-navy mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-suzaa-neutral-600">
                Handle millions of transactions per second without performance degradation.
              </p>
            </div>
            <div className="p-8">
              <div className="w-12 h-12 bg-suzaa-blue/10 rounded flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-suzaa-blue" />
              </div>
              <h3 className="text-lg font-semibold text-suzaa-navy mb-3">
                Advanced Analytics
              </h3>
              <p className="text-suzaa-neutral-600">
                Real-time insights and comprehensive reporting for complete financial visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-suzaa-navy text-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How SUZAA Works
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Simple integration, powerful results. Get up and running in minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">01</div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <p className="text-white/70">
                Integrate our API with your existing systems using comprehensive documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">02</div>
              <h3 className="text-lg font-semibold mb-3">Configure</h3>
              <p className="text-white/70">
                Set up payment flows, compliance rules, and business logic in the dashboard.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">03</div>
              <h3 className="text-lg font-semibold mb-3">Verify</h3>
              <p className="text-white/70">
                Pass regulatory compliance and security certifications seamlessly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">04</div>
              <h3 className="text-lg font-semibold mb-3">Scale</h3>
              <p className="text-white/70">
                Process transactions at any scale with our globally distributed infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-suzaa-navy mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-suzaa-neutral-600">
              No hidden fees. Scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="border-2 border-suzaa-neutral-200 rounded p-8">
              <h3 className="text-2xl font-bold text-suzaa-navy mb-4">
                Starter
              </h3>
              <p className="text-suzaa-neutral-600 mb-6">
                Perfect for businesses getting started with SUZAA.
              </p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-suzaa-navy mb-2">
                  $0<span className="text-lg text-suzaa-neutral-600">/month</span>
                </p>
                <p className="text-sm text-suzaa-neutral-600">
                  + 0.5% transaction fee
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> Up to $1M/month
                </li>
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> API access
                </li>
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> Basic reporting
                </li>
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> Email support
                </li>
              </ul>
              <button className="w-full border-2 border-suzaa-navy text-suzaa-navy py-3 rounded font-semibold hover:bg-suzaa-navy hover:text-white transition-colors">
                Get Started
              </button>
            </div>
            <div className="border-2 border-suzaa-blue rounded p-8 relative">
              <div className="absolute -top-4 left-8 bg-suzaa-blue text-white px-4 py-1 rounded text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-suzaa-navy mb-4">
                Enterprise
              </h3>
              <p className="text-suzaa-neutral-600 mb-6">
                For scaling operations and complex requirements.
              </p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-suzaa-navy mb-2">
                  Custom
                </p>
                <p className="text-sm text-suzaa-neutral-600">
                  Contact sales for pricing
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> Unlimited volume
                </li>
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> Custom rates
                </li>
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> Advanced analytics
                </li>
                <li className="flex items-center gap-3 text-suzaa-neutral-700">
                  <span className="text-suzaa-blue">✓</span> 24/7 phone support
                </li>
              </ul>
              <button className="w-full bg-suzaa-blue text-white py-3 rounded font-semibold hover:bg-suzaa-blue/90 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-r from-suzaa-blue to-suzaa-teal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fintech Operations?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Join leading enterprises that trust SUZAA for their payment infrastructure.
          </p>
          <button className="bg-white text-suzaa-blue px-8 py-4 rounded font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mx-auto">
            Start Your Free Trial <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
