import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Clock,
  Shield,
  CheckCircle,
  Play,
  Pause,
  ChevronRight,
  Menu,
  X,
  Star,
  PhoneCall,
  Calendar,
  Mail,
  ArrowRight,
  Heart,
  Smile,
  ThumbsUp,
  Coffee,
  ClipboardCheck,
  HandHeart,
  Mic,
  PhoneIncoming,
  MessageSquare,
  Users,
  BarChart3,
  Search,
  Route as RouteIcon,
  Headphones,
  FileText,
  RefreshCw,
  DollarSign,
  AlertCircle
} from 'lucide-react';

// Contact Information
const CONTACT_INFO = {
  demoPhone: "(828) 521-8811",
  supportPhone: "1-828-351-3167",
  email: "contact@redsquareapp.com",
  website: "redsquareapp.com"
};

// Audio Player Component
function AudioPlayer({
  title,
  description,
  isPlaying,
  onToggle
}: {
  title: string;
  description: string;
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <button
          onClick={onToggle}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
              : 'bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600'
          }`}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
        <div className="flex-1">
          <h4 className="font-heading font-semibold text-lg text-slate-800">{title}</h4>
          <p className="text-slate-500 text-sm mt-1">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 h-8">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full transition-all duration-150 ${
              isPlaying ? 'bg-red-500' : 'bg-slate-200'
            }`}
            style={{
              height: isPlaying ? `${Math.random() * 100}%` : '20%',
              animationDelay: isPlaying ? `${i * 0.05}s` : '0s'
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ROI Calculator Component
function ROICalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState(200);
  const [missedRate, setMissedRate] = useState(20);
  const [avgValue, setAvgValue] = useState(150);

  const monthlyLost = Math.round(callsPerMonth * (missedRate / 100) * avgValue);
  const yearlyLost = monthlyLost * 12;
  const recovered70 = Math.round(yearlyLost * 0.7);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
      <div className="text-center mb-8">
        <h3 className="font-heading font-bold text-3xl md:text-4xl">Calculate Your Lost Revenue</h3>
        <p className="text-slate-300 mt-3 text-lg">See how much you're losing from missed calls every year</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Calls Per Month: <span className="text-red-400 font-bold text-xl">{callsPerMonth}</span>
          </label>
          <input
            type="range"
            min="50"
            max="1000"
            step="10"
            value={callsPerMonth}
            onChange={(e) => setCallsPerMonth(Number(e.target.value))}
            className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>50</span>
            <span>1000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Missed Call Rate: <span className="text-red-400 font-bold text-xl">{missedRate}%</span>
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={missedRate}
            onChange={(e) => setMissedRate(Number(e.target.value))}
            className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>5%</span>
            <span>50%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Avg. Customer Value: <span className="text-emerald-400 font-bold text-xl">${avgValue}</span>
          </label>
          <input
            type="range"
            min="50"
            max="500"
            step="10"
            value={avgValue}
            onChange={(e) => setAvgValue(Number(e.target.value))}
            className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>$50</span>
            <span>$500</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-700/50 rounded-2xl p-6 text-center">
          <p className="text-slate-300 text-sm">Monthly Lost Revenue</p>
          <p className="font-heading font-bold text-2xl text-red-400">${monthlyLost.toLocaleString()}</p>
        </div>
        <div className="bg-slate-700/50 rounded-2xl p-6 text-center">
          <p className="text-slate-300 text-sm">Yearly Lost Revenue</p>
          <p className="font-heading font-bold text-2xl text-red-400">${yearlyLost.toLocaleString()}</p>
        </div>
        <div className="bg-emerald-500/20 rounded-2xl p-6 text-center border border-emerald-500/30">
          <p className="text-emerald-300 text-sm font-medium">Recoverable with AI</p>
          <p className="font-heading font-bold text-3xl text-emerald-400">${recovered70.toLocaleString()}/yr</p>
        </div>
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'AI Receptionist', href: '/#ai-receptionist' },
    { label: 'ROI Calculator', href: '/#roi' },
    { label: 'Contact', href: '/#contact' },
  ];

  const demoLink = "https://cal.com/redsquareapp/ai";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-xl text-slate-800">RedSquare AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-slate-600 hover:text-red-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.supportPhone.replace(/-/g, '')}`} className="text-slate-600 hover:text-red-600 font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {CONTACT_INFO.supportPhone}
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-6 py-3 rounded-full font-heading font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/30"
            >
              Book a Demo
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-red-600 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block bg-red-500 text-white px-6 py-3 rounded-full font-heading font-semibold text-center"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  const demoLink = "https://cal.com/redsquareapp/ai";

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-red-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <PhoneCall className="w-4 h-4" />
              AI-Powered Receptionist
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight">
              Never Miss a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600"> Call Again</span>
            </h1>
            <p className="text-xl text-slate-500 mt-6 leading-relaxed">
              Your 24/7 AI Receptionist captures every lead, books appointments, and answers questions instantly. Stop losing customers to missed calls.
            </p>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mt-6">
              <p className="text-sm text-red-600 font-medium mb-2">Try Our AI Receptionist Now:</p>
              <a href={`tel:8285218811`} className="text-2xl font-bold text-red-600 hover:text-red-700 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                {CONTACT_INFO.demoPhone}
              </a>
              <p className="text-xs text-red-500 mt-1">Call to experience our AI receptionist in action</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-8 py-4 rounded-full font-heading font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-heading font-semibold hover:border-red-500 hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                See Features
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-red-200 to-red-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-1">Trusted by 500+ businesses</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <h3 className="font-heading font-bold text-lg text-slate-800">AI Receptionist Dashboard</h3>
                  <span className="text-sm text-red-600 font-medium">Live</span>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <PhoneIncoming className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Incoming Call</span>
                  </div>
                  <p className="text-xs text-slate-500 ml-11">"Hi, I'd like to book an appointment for a cleaning..."</p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-4 ml-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Mic className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">AI Response</span>
                  </div>
                  <p className="text-xs text-slate-500 ml-11">"I'd be happy to help you schedule that. What day works best for you this week?"</p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-slate-700">Today's Performance</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Calls Answered</span>
                      <span className="font-medium text-slate-700">47</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Appointments Booked</span>
                      <span className="font-medium text-red-600">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Missed Calls</span>
                      <span className="font-medium text-emerald-600">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Leads Captured</span>
                      <span className="font-medium text-slate-700">23</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Receptionist Features
function AIReceptionistSection() {
  const features = [
    {
      icon: PhoneIncoming,
      title: 'Never Miss a Call',
      description: 'Every call is answered instantly, 24/7/365. No hold times, no voicemail purgatory, no lost leads.'
    },
    {
      icon: Mic,
      title: 'Natural Conversations',
      description: 'Advanced AI understands context and responds naturally. Customers feel like they\'re talking to a real person.'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI checks your availability in real-time and books appointments directly into your calendar.'
    },
    {
      icon: MessageSquare,
      title: 'SMS Follow-ups',
      description: 'Send confirmation texts, reminders, and follow-ups automatically. Reduce no-shows by 60%.'
    },
    {
      icon: RouteIcon,
      title: 'Intelligent Routing',
      description: 'Urgent calls get routed to you immediately. Routine inquiries are handled automatically.'
    },
    {
      icon: Headphones,
      title: 'Seamless Handoff',
      description: 'When a customer needs human help, AI warm-transfers to your team with full context.'
    }
  ];

  return (
    <section id="ai-receptionist" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800">
            Your AI Receptionist Handles It All
          </h2>
          <p className="text-xl text-slate-500 mt-4">
            A complete virtual receptionist that works while you sleep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-all">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const benefits = [
    {
      icon: Phone,
      title: '24/7 Availability',
      description: 'Your AI receptionist works around the clock, including nights, weekends, and holidays.'
    },
    {
      icon: Clock,
      title: 'Instant Response',
      description: 'No hold times. No waiting. Every caller gets immediate, helpful responses.'
    },
    {
      icon: Users,
      title: 'Handle Multiple Calls',
      description: 'Never busy signal. AI can handle unlimited simultaneous calls without breaking a sweat.'
    },
    {
      icon: Search,
      title: 'Lead Qualification',
      description: 'AI asks the right questions to qualify leads and book appointments with ideal customers.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track all calls, bookings, and conversions in one place. Know exactly what\'s working.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'HIPAA-compliant technology keeps your customer data safe and secure.'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800">
            Why Businesses Choose RedSquare AI
          </h2>
          <p className="text-xl text-slate-500 mt-4">
            Everything you need to capture every lead and convert more customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-all">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Demo Section
function DemoSection() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const demos = [
    {
      title: 'Appointment Booking',
      description: 'AI naturally schedules appointments while capturing all necessary information'
    },
    {
      title: 'Lead Qualification',
      description: 'Smart questioning to identify and prioritize serious prospects'
    },
    {
      title: 'After-Hours Reception',
      description: 'Never miss a call again, even when you\'re closed'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800">
            Hear RedSquare AI In Action
          </h2>
          <p className="text-xl text-slate-500 mt-4">
            Listen to how our AI receptionist handles real conversations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo, index) => (
            <AudioPlayer
              key={demo.title}
              title={demo.title}
              description={demo.description}
              isPlaying={playingIndex === index}
              onToggle={() => setPlayingIndex(playingIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ROI Section
function ROISection() {
  return (
    <section id="roi" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800">
            How Much Are Missed Calls Costing You?
          </h2>
          <p className="text-xl text-slate-500 mt-4">
            Use our calculator to see the revenue you could be recovering
          </p>
        </div>
        <ROICalculator />
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-800">
            Get Started Today
          </h2>
          <p className="text-xl text-slate-500 mt-4">
            Ready to never miss another call? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">Sales Inquiries</h3>
            <a href={`tel:${CONTACT_INFO.supportPhone.replace(/-/g, '')}`} className="text-red-600 font-medium hover:underline">
              {CONTACT_INFO.supportPhone}
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">Email Us</h3>
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-red-600 font-medium hover:underline">
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-2">Book a Demo</h3>
            <a href="https://cal.com/redsquareapp/ai" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline">
              Schedule Demo Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">RedSquare AI</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Your 24/7 AI Receptionist that never misses a call. Capture every lead and grow your business.
            </p>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Support: {CONTACT_INFO.supportPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-500">www.{CONTACT_INFO.website}</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-red-400 transition-colors">Features</a></li>
              <li><a href="#ai-receptionist" className="hover:text-red-400 transition-colors">AI Receptionist</a></li>
              <li><a href="#roi" className="hover:text-red-400 transition-colors">ROI Calculator</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-red-400 transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-red-400 transition-colors">Terms of Conditions</Link></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Shield className="w-5 h-5 text-emerald-500" />
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              SOC 2 Certified
            </div>
          </div>
          <p className="text-slate-500 text-sm">© {currentYear} RedSquare AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Privacy Policy Page
function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-slate-800 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="text-sm text-slate-500 mb-8">Last updated: February 2025</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">1. Introduction</h2>
          <p>RedSquare AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, disclosed, and safeguarded by us.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Contact information (name, email, phone number)</li>
            <li>Business information (company name, address)</li>
            <li>Communication content (call recordings, transcripts)</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide and improve our AI receptionist services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">5. HIPAA Compliance</h2>
          <p>RedSquare AI is HIPAA compliant. We have implemented appropriate safeguards to ensure the protection of health information in accordance with HIPAA regulations.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> {CONTACT_INFO.email}<br />
            <strong>Phone:</strong> {CONTACT_INFO.supportPhone}
          </p>
        </div>
      </div>
    </div>
  );
}

// Refund Policy Page
function RefundPolicy() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-slate-800 mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="text-sm text-slate-500 mb-8">Last updated: February 2025</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">1. Subscription Billing</h2>
          <p>RedSquare AI offers monthly and annual subscription plans. Subscriptions are automatically renewed unless cancelled at least 7 days before the end of the billing period.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">2. 30-Day Money-Back Guarantee</h2>
          <p>We offer a 30-day money-back guarantee for new customers. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">3. Refund Process</h2>
          <p>To request a refund:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Contact our support team within 30 days of purchase</li>
            <li>Provide your account details and reason for refund</li>
            <li>Refunds are processed within 5-7 business days</li>
            <li>Refunds are credited to the original payment method</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">4. Partial Refunds</h2>
          <p>After 30 days, we offer partial refunds on annual plans based on the remaining subscription period:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Within 60 days: 75% refund</li>
            <li>Within 90 days: 50% refund</li>
            <li>After 90 days: No refund available</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">5. Cancellation</h2>
          <p>You can cancel your subscription at any time through your account dashboard or by contacting support. Your service will continue until the end of your current billing period.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">6. Contact Us</h2>
          <p>For refund inquiries, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> {CONTACT_INFO.email}<br />
            <strong>Phone:</strong> {CONTACT_INFO.supportPhone}
          </p>
        </div>
      </div>
    </div>
  );
}

// Terms of Conditions Page
function TermsConditions() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl text-slate-800 mb-8">Terms of Conditions</h1>
        <div className="prose prose-lg max-w-none text-slate-600">
          <p className="text-sm text-slate-500 mb-8">Last updated: February 2025</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using RedSquare AI's services, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">2. Service Description</h2>
          <p>RedSquare AI provides AI-powered receptionist services, including call handling, appointment scheduling, lead qualification, and customer communication automation.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">3. User Responsibilities</h2>
          <p>As a user of our service, you agree to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use the service in compliance with applicable laws</li>
            <li>Not attempt to harm or exploit the service</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">4. Payment Terms</h2>
          <p>Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as specified in our Refund Policy.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">5. Intellectual Property</h2>
          <p>All content, features, and functionality of our service are owned by RedSquare AI and are protected by international copyright, trademark, and other intellectual property laws.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">6. Limitation of Liability</h2>
          <p>RedSquare AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">7. Termination</h2>
          <p>We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason, including breach of these Terms.</p>

          <h2 className="font-heading font-bold text-xl text-slate-800 mt-8 mb-4">8. Contact Information</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <p className="mt-2">
            <strong>Email:</strong> {CONTACT_INFO.email}<br />
            <strong>Phone:</strong> {CONTACT_INFO.supportPhone}
          </p>
        </div>
      </div>
    </div>
  );
}

// Home Page Component
function Home() {
  return (
    <div className="font-body bg-slate-50">
      <Navigation />
      <Hero />
      <AIReceptionistSection />
      <FeaturesSection />
      <DemoSection />
      <ROISection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={
          <>
            <Navigation />
            <PrivacyPolicy />
            <Footer />
          </>
        } />
        <Route path="/refund-policy" element={
          <>
            <Navigation />
            <RefundPolicy />
            <Footer />
          </>
        } />
        <Route path="/terms-conditions" element={
          <>
            <Navigation />
            <TermsConditions />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
