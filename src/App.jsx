import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ChevronDown, Database, TrendingUp, Shield, Zap, 
  BarChart, Activity, Target, Settings, Users, Lock, Cloud,
  ArrowRight, CheckCircle, Star, Cpu, DollarSign
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [dataVolume, setDataVolume] = useState(50)
  const [price, setPrice] = useState(299)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const calculatedPrice = Math.floor(199 + (dataVolume * 4))
    setPrice(calculatedPrice)
  }, [dataVolume])

  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const pricingInView = useInView(pricingRef, { once: true })

  const features = [
    {
      title: 'Predictive Modeling',
      description: 'Advanced AI algorithms analyze historical data patterns to forecast future trends with 95% accuracy. Our machine learning models continuously improve through real-time data processing.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Real-time Analytics',
      description: 'Process millions of data points per second with our distributed computing infrastructure. Get instant insights as your data streams in from multiple sources.',
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Build tailored visualization dashboards with drag-and-drop widgets. Create interactive reports that update automatically based on your KPIs and business metrics.',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and role-based access control ensure your data remains protected. Automated backup and disaster recovery included.',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* SMART NAVBAR */}
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">Lumina Analytics</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
                  Solutions <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                          <Database className="w-5 h-5 text-purple-400 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Data Analytics</h4>
                            <p className="text-xs text-gray-400">Advanced data processing</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                          <Cpu className="w-5 h-5 text-blue-400 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm mb-1">AI Models</h4>
                            <p className="text-xs text-gray-400">Machine learning tools</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                          <Cloud className="w-5 h-5 text-cyan-400 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Cloud Platform</h4>
                            <p className="text-xs text-gray-400">Scalable infrastructure</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                          <Shield className="w-5 h-5 text-green-400 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Security</h4>
                            <p className="text-xs text-gray-400">Enterprise protection</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button className="text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105">
                Start Free Trial
              </button>
            </div>

            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* HERO WITH DASHBOARD PREVIEW */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        <motion.div 
          className="container mx-auto relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: heroInView ? 1 : 0, scale: heroInView ? 1 : 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                AI-Powered Predictive Analytics
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.3 }}
            >
              Transform Data Into
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.4 }}
            >
              Leverage cutting-edge machine learning algorithms to predict market trends, optimize operations, and make data-driven decisions with confidence.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.5 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-xl border border-white/10">
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* BENTO GRID DASHBOARD PREVIEW */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Large Card - Analytics Graph */}
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 group hover:border-purple-500/30 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Revenue Forecast</h3>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <svg className="w-full h-48" viewBox="0 0 300 100">
                  <path
                    d="M 0 80 Q 50 60, 100 50 T 200 30 T 300 20"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    className="animate-draw"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-black">$2.4M</span>
                  <span className="text-green-400 text-sm mb-1">+23.5%</span>
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 group hover:border-blue-500/30 transition-all relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Activity className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-400 text-sm mb-2">Active Users</p>
                <p className="text-2xl font-black">12.4K</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 group hover:border-cyan-500/30 transition-all relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Target className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-gray-400 text-sm mb-2">Accuracy</p>
                <p className="text-2xl font-black">95.2%</p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 group hover:border-green-500/30 transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Processing Speed</h3>
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="flex items-end gap-6">
                  {[65, 85, 72, 90, 78, 95, 88].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-t" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES TAB WIDGET */}
      <section id="features" ref={featuresRef} className="py-20 px-6">
        <motion.div 
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: featuresInView ? 1 : 0, scale: featuresInView ? 1 : 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Powerful <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to turn complex data into clear, actionable business intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left: Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    activeTab === index
                      ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/50 backdrop-blur-xl'
                      : 'bg-slate-900/50 border-white/5 hover:border-white/10 backdrop-blur-xl'
                  } border`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      activeTab === index ? 'bg-purple-600/30' : 'bg-white/5'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400 line-clamp-1">{feature.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Dynamic Content */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 p-4 bg-purple-600/10 rounded-xl inline-block">
                    {features[activeTab].icon}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{features[activeTab].title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{features[activeTab].description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">Real-time processing capabilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm">24/7 dedicated support</span>
                    </div>
                  </div>
                  <button className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PRICING CALCULATOR */}
      <section id="pricing" ref={pricingRef} className="py-20 px-6">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: pricingInView ? 1 : 0, scale: pricingInView ? 1 : 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              Flexible <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400">
              Scale your analytics as your business grows
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-white/5 rounded-3xl p-10">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold">Data Volume (GB/month)</label>
                <span className="text-3xl font-black text-purple-400">{dataVolume} GB</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                value={dataVolume}
                onChange={(e) => setDataVolume(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
                style={{
                  background: `linear-gradient(to right, #9333ea 0%, #9333ea ${((dataVolume - 10) / 190) * 100}%, #1e293b ${((dataVolume - 10) / 190) * 100}%, #1e293b 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10 GB</span>
                <span>200 GB</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
              <p className="text-gray-400 mb-2">Monthly Price</p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <DollarSign className="w-8 h-8 text-purple-400" />
                <motion.span 
                  key={price}
                  className="text-6xl font-black number-roll"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {price}
                </motion.span>
                <span className="text-2xl text-gray-400">/mo</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-lg p-4">
                  <Database className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Unlimited Users</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">SOC 2 Compliant</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Cpu className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">AI Models</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">24/7 Support</p>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-600/30">
                Start Free 14-Day Trial
              </button>
              <p className="text-sm text-gray-500 mt-4">No credit card required</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12"
          >
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-5xl font-black mb-6 tracking-tighter">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join over 5,000 companies using Lumina Analytics to make smarter, data-driven decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-purple-600/30">
                Get Started Free
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-xl border border-white/10">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black">Lumina Analytics</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Lumina Analytics. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App