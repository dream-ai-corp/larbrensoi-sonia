"use client";

import { useState, useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  highlights: string[];
  popular?: boolean;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  stars: number;
}

interface FAQ {
  question: string;
  answer: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    icon: "🌳",
    title: "Sylvothérapie",
    subtitle: "La nature comme alliée de guérison",
    description:
      "Reconnectez-vous au vivant. La sylvothérapie utilise la force thérapeutique des arbres pour réduire le stress, renforcer l'immunité et retrouver un ancrage profond dans le présent.",
    duration: "1h30 à 2h",
    price: "Sur devis",
    highlights: [
      "En pleine nature, en forêt",
      "Exercices de pleine conscience",
      "Ancrage et enracinement profond",
      "Reconnexion au rythme naturel",
    ],
  },
  {
    icon: "🌿",
    title: "Séance Énergétique 4 Éléments",
    subtitle: "Rééquilibrage profond corps & âme",
    description:
      "Un soin sur mesure qui travaille avec les quatre éléments (Eau, Terre, Air, Feu) pour libérer les blocages, rééquilibrer votre énergie vitale et vous reconnecter à votre force intérieure.",
    duration: "1h à 1h30",
    price: "55 €",
    highlights: [
      "Cristaux sélectionnés selon votre naissance",
      "Préparation personnalisée en amont",
      "Suivi proposé après chaque séance",
      "Transmission d'énergie universelle",
    ],
    popular: true,
  },
  {
    icon: "✨",
    title: "Forfait Transformation",
    subtitle: "3 séances pour un changement durable",
    description:
      "Un accompagnement progressif sur trois séances pour aller au fond des blocages et installer durablement équilibre, vitalité et clarté dans votre vie quotidienne.",
    duration: "3 × 1h à 1h30",
    price: "150 €",
    highlights: [
      "Économisez 15€ vs séances individuelles",
      "Suivi personnalisé entre les séances",
      "Programme adapté à votre évolution",
      "Bilan en fin de parcours",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Marie-Claire",
    location: "Bourges",
    text: "Après ma première séance avec Sonia, j'ai senti un allègement incroyable. Des mois d'anxiété ont commencé à se dissiper. Je recommande les yeux fermés.",
    stars: 5,
  },
  {
    name: "Laurent",
    location: "Vierzon",
    text: "Sceptique au départ, j'ai été surpris par la profondeur de l'expérience. Sonia crée un espace de confiance rare. Je reviens régulièrement depuis 6 mois.",
    stars: 5,
  },
  {
    name: "Sophie",
    location: "Nevers",
    text: "La sylvothérapie a changé mon rapport à la nature et à moi-même. Une pratique simple, puissante, et tellement ressourçante. Merci Sonia.",
    stars: 5,
  },
  {
    name: "Isabelle",
    location: "Aubinges",
    text: "Le forfait 3 séances a été une vraie transformation. Je me sens plus ancrée, plus calme, et j'ai retrouvé une énergie que je n'avais plus depuis des années.",
    stars: 5,
  },
];

const faqs: FAQ[] = [
  {
    question: "C'est quoi exactement une séance énergétique ?",
    answer:
      "Une séance énergétique est un soin holistique où Sonia pose ses mains sur différentes parties de votre corps pour favoriser la circulation de l'énergie vitale. Aucun diagnostic médical n'est posé. C'est un accompagnement complémentaire à votre suivi médical, qui agit sur le bien-être global.",
  },
  {
    question: "Faut-il croire pour que ça fonctionne ?",
    answer:
      "Non. L'ouverture d'esprit suffit. Beaucoup de personnes qui venaient par curiosité ou scepticisme témoignent de ressentis profonds dès la première séance. L'énergie travaille indépendamment de vos croyances.",
  },
  {
    question: "Comment se déroule une séance concrètement ?",
    answer:
      "Un appel téléphonique préparatoire permet à Sonia de sélectionner vos cristaux de naissance et de préparer une intention personnalisée. La séance dure 1h à 1h30, allongé(e) habillé(e), dans un espace calme et sécurisant. Un moment d'échange clôt chaque séance.",
  },
  {
    question: "Où se situent les séances ?",
    answer:
      "Les séances ont lieu à Aubinges (18220), à 8 La Brosse Village, à 15 minutes de Bourges. La sylvothérapie se déroule en forêt dans un cadre naturel préservé. Des déplacements peuvent être envisagés.",
  },
  {
    question: "Comment réserver ?",
    answer:
      "Remplissez le formulaire ci-dessous ou contactez Sonia directement par téléphone. Elle vous rappelle sous 24h pour confirmer votre créneau.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex justify-between items-start gap-4 hover:text-forest-700 transition-colors"
      >
        <span className="font-medium text-lg">{faq.question}</span>
        <span
          className={`text-forest-600 text-xl mt-0.5 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    // Scroll-reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
          <a href="#" className={`font-display text-2xl font-medium transition-colors ${scrolled ? "text-forest-800" : "text-white"}`}>
            L&apos;Arbre En Soi
          </a>
          <div className="hidden md:flex items-center gap-8">
            {["Soins", "Comment ça marche", "Témoignages", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("é", "e").replace("à", "a")}`}
                className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-600 hover:text-forest-700" : "text-white/80 hover:text-white"}`}
              >
                {link}
              </a>
            ))}
            <a
              href="#reserver"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${scrolled ? "bg-forest-700 text-white hover:bg-forest-600" : "bg-white/15 text-white border border-white/30 hover:bg-white/25"}`}
            >
              Réserver ma séance
            </a>
          </div>
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-forest-800" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-forest-100 px-6 py-5 flex flex-col gap-3">
            {["Soins", "Comment ça marche", "Témoignages", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("é", "e").replace("à", "a")}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-forest-700 py-1"
              >
                {link}
              </a>
            ))}
            <a
              href="#reserver"
              onClick={() => setMenuOpen(false)}
              className="bg-forest-700 text-white px-5 py-3 rounded-full text-center font-medium mt-2"
            >
              Réserver ma séance
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-700 to-forest-800" />
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center text-white pt-24 pb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-10 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Séances disponibles cette semaine · Aubinges (18220)
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-light leading-tight mb-8">
            Retrouvez votre{" "}
            <em className="text-gold not-italic">équilibre profond</em>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Sylvothérapie & soins énergétiques avec Sonia.
            Une heure pour libérer les tensions, recharger votre vitalité
            et retrouver la clarté intérieure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#reserver"
              className="bg-gold hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
            >
              Réserver ma séance — 55 €
            </a>
            <a
              href="#soins"
              className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-colors"
            >
              Découvrir les soins
            </a>
          </div>

          <p className="mt-8 text-white/50 text-sm">
            ✓ Appel préparatoire offert &nbsp;·&nbsp; ✓ Suivi après chaque séance &nbsp;·&nbsp; ✓ Sans engagement
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-forest-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Personnes accompagnées" },
              { value: "5★", label: "Note moyenne" },
              { value: "55 €", label: "Séance complète 1h30" },
              { value: "15 min", label: "De Bourges" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-gold font-semibold">{stat.value}</div>
                <div className="text-white/60 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ── */}
      <section className="py-20 px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">
              Vous reconnaissez-vous ?
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-800 mt-5 mb-8 font-light leading-tight">
              Le quotidien vous épuise
            </h2>
            <div className="space-y-5">
              {[
                "Vous vous sentez constamment fatigué(e), sans raison apparente",
                "Le stress et l'anxiété s'accumulent jour après jour",
                "Vous avez l'impression d'avoir perdu votre élan, votre joie",
                "Vous cherchez quelque chose de plus profond que les solutions habituelles",
              ].map((pain) => (
                <div key={pain} className="flex items-start gap-4">
                  <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                  <p className="text-gray-600 leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-forest-50 rounded-3xl p-10 border border-forest-100">
              <span className="text-sage font-medium text-sm uppercase tracking-widest">
                Ce que vous méritez
              </span>
              <h3 className="font-display text-3xl text-forest-800 mt-5 mb-7 font-light">
                Un espace où tout peut changer
              </h3>
              <div className="space-y-5">
                {[
                  "Retrouver une énergie naturelle et durable",
                  "Libérer les tensions accumulées en profondeur",
                  "Renouer avec votre intuition et votre clarté",
                  "Repartir léger(e), apaisé(e), rechargé(e)",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4">
                    <span className="text-forest-600 mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
              <a
                href="#reserver"
                className="mt-10 block bg-forest-700 hover:bg-forest-600 text-white text-center py-4 rounded-full font-medium transition-colors"
              >
                Je veux retrouver cet équilibre →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="soins" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">
              Les soins
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-800 mt-5 font-light">
              Choisissez votre chemin
            </h2>
            <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed">
              Chaque soin est adapté à votre situation du moment. Un appel préparatoire offert pour trouver ensemble la meilleure approche.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`animate-on-scroll relative rounded-3xl p-8 lg:p-10 flex flex-col ${
                  service.popular
                    ? "bg-forest-800 text-white shadow-2xl"
                    : "bg-cream border border-forest-100"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-semibold px-4 py-2 rounded-full">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3
                  className={`font-display text-2xl font-medium mb-3 ${
                    service.popular ? "text-white" : "text-forest-800"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    service.popular ? "text-white/70" : "text-sage"
                  }`}
                >
                  {service.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    service.popular ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {service.highlights.map((h) => (
                    <li
                      key={h}
                      className={`text-sm flex items-start gap-3 ${
                        service.popular ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex-shrink-0 ${
                          service.popular ? "text-gold" : "text-forest-500"
                        }`}
                      >
                        ✓
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex items-baseline justify-between mb-5">
                    <span
                      className={`font-display text-4xl font-semibold ${
                        service.popular ? "text-gold" : "text-forest-700"
                      }`}
                    >
                      {service.price}
                    </span>
                    <span
                      className={`text-sm ${
                        service.popular ? "text-white/60" : "text-gray-400"
                      }`}
                    >
                      {service.duration}
                    </span>
                  </div>
                  <a
                    href="#reserver"
                    className={`block text-center py-4 rounded-full font-medium transition-all hover:scale-105 ${
                      service.popular
                        ? "bg-gold hover:bg-yellow-500 text-white"
                        : "bg-forest-700 hover:bg-forest-600 text-white"
                    }`}
                  >
                    Réserver ce soin
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="comment-ca-marche" className="py-20 px-6 md:px-8 max-w-6xl mx-auto overflow-hidden">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            Simple & transparent
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-forest-800 mt-5 font-light">
            Comment ça se passe ?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {[
            {
              step: "01",
              icon: "📞",
              title: "Appel découverte",
              desc: "Vous remplissez le formulaire. Sonia vous rappelle sous 24h pour un échange téléphonique gratuit et choisir ensemble vos cristaux de naissance.",
            },
            {
              step: "02",
              icon: "🌿",
              title: "Votre séance",
              desc: "Dans un espace calme et bienveillant à Aubinges, Sonia vous accompagne pendant 1h à 1h30. Allongé(e), habillé(e), vous laissez l'énergie circuler.",
            },
            {
              step: "03",
              icon: "🌟",
              title: "Suivi & transformation",
              desc: "Un moment d'échange clôt chaque séance. Un suivi personnalisé vous est proposé pour prolonger les bienfaits dans votre quotidien.",
            },
          ].map((step, i) => (
            <div
              key={step.step}
              className="animate-on-scroll text-center"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="relative inline-block mb-6">
                <span className="font-display text-7xl text-forest-100 font-bold absolute -top-4 -left-4 leading-none select-none">
                  {step.step}
                </span>
                <span className="relative text-5xl">{step.icon}</span>
              </div>
              <h3 className="font-display text-2xl text-forest-800 mb-4 font-medium">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-forest-800 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-forest-600 mx-auto flex items-center justify-center text-8xl shadow-2xl">
                🌳
              </div>
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <span className="text-gold font-medium text-sm uppercase tracking-widest">
                Votre thérapeute
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-5 mb-7 font-light">
                Bonjour, je suis Sonia
              </h2>
              <p className="text-white/80 leading-relaxed mb-5">
                Énergéticienne et sylvothérapeute, j&apos;ai développé à travers mes expériences, mes rencontres et l&apos;Amour universel un état d&apos;Être que je mets aujourd&apos;hui à votre service.
              </p>
              <p className="text-white/80 leading-relaxed mb-5">
                Mon approche allie les quatre éléments, le travail sur les cristaux et l&apos;intuition pour vous accompagner vers un équilibre profond et durable — en douceur, sans jugement, au rythme qui vous convient.
              </p>
              <p className="text-white/80 leading-relaxed mb-10">
                Basée à Aubinges, à 15 minutes de Bourges, j&apos;accueille des personnes de toute la région Centre-Val de Loire depuis plusieurs années.
              </p>
              <div className="flex gap-10">
                <div>
                  <div className="font-display text-3xl text-gold font-semibold">200+</div>
                  <div className="text-white/60 text-sm mt-2">Personnes accompagnées</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-gold font-semibold">5★</div>
                  <div className="text-white/60 text-sm mt-2">Note moyenne</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-gold font-semibold">10+</div>
                  <div className="text-white/60 text-sm mt-2">Années de pratique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="temoignages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-sage font-medium text-sm uppercase tracking-widest">
              Ils témoignent
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest-800 mt-5 font-light">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="animate-on-scroll bg-cream rounded-3xl p-8 lg:p-10"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="mb-6">
                  <StarRating count={t.stars} />
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg font-light italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest-200 flex items-center justify-center text-forest-700 font-semibold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-forest-800">{t.name}</div>
                    <div className="text-gray-400 text-sm mt-1">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 px-6 md:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sage font-medium text-sm uppercase tracking-widest">
            Vos questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-forest-800 mt-5 font-light">
            Foire aux questions
          </h2>
        </div>
        <div className="animate-on-scroll">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section id="reserver" className="py-20 bg-forest-800 text-white">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="text-gold font-medium text-sm uppercase tracking-widest">
              Première étape
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-5 font-light">
              Réservez votre séance
            </h2>
            <p className="text-white/70 mt-5 leading-relaxed">
              Remplissez ce formulaire. Sonia vous recontacte sous 24h pour confirmer votre créneau.
            </p>
          </div>

          {submitted ? (
            <div className="animate-on-scroll bg-forest-700 rounded-3xl p-12 text-center border border-forest-600">
              <div className="text-6xl mb-6">🌿</div>
              <h3 className="font-display text-3xl mb-4">Merci !</h3>
              <p className="text-white/80 leading-relaxed">
                Votre demande a bien été reçue. Sonia vous contactera sous 24h pour confirmer votre séance. À bientôt !
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="animate-on-scroll space-y-7"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-3 font-medium">
                    Prénom & nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-forest-700 border border-forest-600 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Marie Dupont"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-3 font-medium">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-forest-700 border border-forest-600 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-3 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-forest-700 border border-forest-600 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="marie@email.com"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-3 font-medium">
                  Soin souhaité
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-forest-700 border border-forest-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Choisir un soin...</option>
                  <option value="energetique">Séance Énergétique 4 Éléments — 55€</option>
                  <option value="sylvo">Sylvothérapie — Sur devis</option>
                  <option value="forfait">Forfait Transformation (3 séances) — 150€</option>
                  <option value="conseil">Je ne sais pas encore — conseiller moi</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-3 font-medium">
                  Ce que vous vivez en ce moment (optionnel)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-forest-700 border border-forest-600 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Stress, fatigue, anxiété, questionnement... Partagez ce qui vous amène."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-yellow-500 text-white font-semibold py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg mt-8"
              >
                Envoyer ma demande de réservation →
              </button>
              <p className="text-white/40 text-xs text-center mt-5">
                Réponse garantie sous 24h · Sans engagement · Appel découverte offert
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-forest-900 text-white/60 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-12">
            <div>
              <h3 className="font-display text-xl text-white mb-4">L&apos;Arbre En Soi</h3>
              <p className="text-sm leading-relaxed">
                Sylvothérapie & soins énergétiques à Aubinges, près de Bourges.
                Retrouvez votre équilibre naturel.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <p>📍 8 La Brosse Village, 18220 Aubinges</p>
                <p>🕐 Sur rendez-vous uniquement</p>
                <p>📞 Demande via le formulaire</p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                Liens rapides
              </h4>
              <div className="space-y-3 text-sm">
                <a href="#soins" className="block hover:text-white transition-colors">Nos soins</a>
                <a href="#temoignages" className="block hover:text-white transition-colors">Témoignages</a>
                <a href="#faq" className="block hover:text-white transition-colors">FAQ</a>
                <a href="#reserver" className="block hover:text-white transition-colors">Réserver</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 L&apos;Arbre En Soi · Sonia · Tous droits réservés</p>
            <p className="text-center md:text-right">
              Un énergéticien ne pose pas de diagnostic médical. Les séances sont complémentaires à votre suivi médical.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
