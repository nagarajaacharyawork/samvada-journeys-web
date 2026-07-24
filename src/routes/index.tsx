import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  MapPin,
  Users,
  UtensilsCrossed,
  Lightbulb,
  Sparkles,
  BookOpen,
  Palette,
  Mountain,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MessageCircle,
  Check,
  Camera,
  ShieldCheck,
  Heart,
  Compass,
  Leaf,
} from "lucide-react";

import logo from "@/assets/samvada-logo.asset.json";
import heroCoast from "@/assets/hero-coast.jpg";
import heroArtisan from "@/assets/hero-artisan.jpg";
import heroMountains from "@/assets/hero-mountains.jpg";
import expFood from "@/assets/exp-food.jpg";
import expHeritage from "@/assets/exp-heritage.jpg";
import expWaterfall from "@/assets/exp-waterfall.jpg";
import expCoffee from "@/assets/exp-coffee.jpg";
import expSunset from "@/assets/exp-sunset.jpg";
import expRetreat from "@/assets/exp-retreat.jpg";
import expCoastal from "@/assets/exp-coastal.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Samvada Journeys — Explore India Like a Local" },
      {
        name: "description",
        content:
          "Curated, entrepreneur-led experiential travel across India. Hidden places, local food, artisans, and authentic culture — never a tourist trail.",
      },
      { property: "og:title", content: "Samvada Journeys — Explore India Like a Local" },
      {
        property: "og:description",
        content:
          "Curated, entrepreneur-led experiential travel across India. Hidden places, local food, artisans, and authentic culture.",
      },
    ],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const HERO_IMAGES = [heroCoast, heroMountains, heroArtisan];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Home() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Philosophy />
      <WhySamvada />
      <JourneySpecial />
      <Differently />
      <Experiences />
      <WhoCanJoin />
      <WhyTravel />
      <CommunityBanner />
      <Testimonials />
      <Gallery />
      <UpcomingTrips />
      <PartnerWithUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between py-3 md:py-4">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={logo.url}
            alt="Samvada Journeys"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
            width={44}
            height={44}
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-white text-lg font-bold tracking-tight">
              Samvada Journeys
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-amber-brand">
              Explore India Like a Local
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/80 hover:text-white transition-colors font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber-brand px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-amber-deep hover:text-white transition-colors"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep/95 backdrop-blur">
          <div className="container-x flex flex-col py-4 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2.5 border-b border-white/5 text-sm"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-amber-brand px-5 py-2.5 text-sm font-semibold text-navy-deep"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-navy-deep">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className={`h-full w-full object-cover ${i === idx ? "kenburns" : ""}`}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/45 to-navy-deep/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-transparent to-transparent" />

      <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24">
        <div className="max-w-3xl">
          <span className="section-label-light">Samvada Journeys</span>
          <h1 className="mt-5 font-display text-white text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.03] tracking-tight">
            Explore India{" "}
            <span className="italic text-amber-brand">Like a Local</span>,
            <br className="hidden sm:block" /> Not Like a Tourist.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            India's first entrepreneur-led experiential travel company connecting travelers with
            hidden stories, local communities, and authentic culture.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#experiences"
              className="inline-flex items-center gap-2 rounded-full bg-amber-brand px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-amber-deep hover:text-white transition-colors"
            >
              Explore Experiences
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#community"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-navy-deep transition-colors"
            >
              Join Our Community
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-10 bg-amber-brand" : "w-5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick nav cards */}
      <div className="relative -mt-10 md:-mt-14 pb-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-2xl bg-white p-3 md:p-4 shadow-[0_20px_60px_-20px_rgba(15,20,60,0.35)] ring-1 ring-black/5">
            {[
              { icon: Compass, label: "Curated Journeys", href: "#experiences" },
              { icon: Users, label: "Local Community", href: "#community" },
              { icon: Camera, label: "Gallery", href: "#gallery" },
              { icon: MessageCircle, label: "Enquire", href: "#contact" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 rounded-xl bg-cream px-4 py-4 hover:bg-navy hover:text-white transition-colors"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white group-hover:bg-amber-brand group-hover:text-navy-deep transition-colors">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 truncate font-semibold text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Philosophy ---------- */
function Philosophy() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x max-w-3xl text-center reveal">
        <span className="section-label mx-auto">Our Philosophy</span>
        <p className="mt-6 font-display text-2xl md:text-4xl leading-snug text-navy-deep">
          Travel isn't about ticking destinations off a list. It's about{" "}
          <span className="italic text-amber-deep">meeting people</span>, discovering untold
          stories, tasting authentic food, understanding local culture, and creating memories that
          last a lifetime.
        </p>
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
          At Samvada Journeys, every trip is thoughtfully curated to connect you with the true
          spirit of every destination.
        </p>
      </div>
    </section>
  );
}

/* ---------- Why Samvada ---------- */
function WhySamvada() {
  const items = [
    { icon: MapPin, title: "Hidden Destinations" },
    { icon: Users, title: "Local Communities" },
    { icon: UtensilsCrossed, title: "Authentic Cuisine" },
    { icon: Lightbulb, title: "Entrepreneurs & Changemakers" },
    { icon: Sparkles, title: "Cultural Experiences" },
    { icon: BookOpen, title: "Local Storytellers" },
    { icon: Palette, title: "Traditional Artists" },
    { icon: Mountain, title: "Nature & Adventure" },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">Why Samvada Journeys?</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            We don't just take you to places.{" "}
            <span className="italic text-amber-deep">We connect you to…</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className="reveal group relative rounded-2xl border border-border bg-cream p-6 md:p-7 hover:border-navy hover:bg-navy hover:text-white transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-amber-brand group-hover:bg-amber-brand group-hover:text-navy-deep transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg md:text-xl font-semibold leading-tight">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Journey Special ---------- */
function JourneySpecial() {
  const items = [
    { n: "01", label: "One Local Story" },
    { n: "02", label: "One Hidden Place" },
    { n: "03", label: "One Authentic Meal" },
    { n: "04", label: "One Local Entrepreneur Interaction" },
    { n: "05", label: "One Lifetime Memory" },
  ];
  return (
    <section className="bg-navy-deep py-20 md:py-28 text-white">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label-light">The Promise</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.05]">
            What makes every journey{" "}
            <span className="italic text-amber-brand">special?</span>
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg max-w-xl">
            Every Samvada Journey includes five deliberate ingredients — never a checklist, always a
            promise.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4">
          {items.map((it, i) => (
            <div
              key={it.n}
              className="reveal rounded-2xl bg-white/5 border border-white/10 p-6 md:p-7 hover:bg-amber-brand hover:text-navy-deep hover:border-amber-brand transition-all"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-3xl md:text-4xl font-semibold text-amber-brand group-hover:text-navy-deep">
                {it.n}
              </div>
              <div className="mt-4 h-px w-10 bg-white/30" />
              <p className="mt-4 font-medium text-base md:text-lg leading-snug">{it.label}</p>
            </div>
          ))}
        </div>

        <blockquote className="reveal mt-16 max-w-2xl">
          <p className="font-display italic text-2xl md:text-3xl text-amber-brand leading-snug">
            "That's our promise."
          </p>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------- Differently ---------- */
function Differently() {
  const left = ["Krishna Temple", "Malpe Beach", "St. Mary's Island", "Kaup Lighthouse"];
  const right = [
    "Breakfast at a hidden 70-year-old local eatery",
    "Meeting fishermen before sunrise",
    "Learning about the coastal fishing economy",
    "Visiting Yakshagana artists",
    "Experiencing authentic Tulu culture",
    "Meeting inspiring local entrepreneurs",
    "Coffee conversations with startup founders",
    "Watching sunsets with local storytellers",
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">The Samvada Difference</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            Experience travel <span className="italic text-amber-deep">differently.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-3xl border border-border bg-white/70 p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-muted-foreground">
              Instead of simply visiting
            </div>
            <ul className="mt-6 space-y-4">
              {left.map((x) => (
                <li key={x} className="flex items-center gap-3 text-muted-foreground line-through decoration-muted-foreground/40">
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl bg-navy-deep p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-amber-brand/20 blur-3xl" />
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-amber-brand">
              We help you experience
            </div>
            <ul className="mt-6 space-y-4 relative">
              {right.map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-brand text-navy-deep">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-white/90">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experiences ---------- */
function Experiences() {
  const cards = [
    { img: expCoastal, title: "Coastal Explorer", desc: "Fishing villages, hidden eateries, and coastal culture from dawn to dusk." },
    { img: expHeritage, title: "Heritage Walks", desc: "Ancient temples and stone corridors — with the stories only locals know." },
    { img: expFood, title: "Food Trails", desc: "Family kitchens, banana-leaf feasts, and recipes passed down for generations." },
    { img: expWaterfall, title: "Hidden Waterfall Treks", desc: "Off-map trails into the Western Ghats with local guides who grew up there." },
    { img: expSunset, title: "Sunrise & Sunset Experiences", desc: "Golden hours shared with storytellers and cups of filter coffee." },
    { img: expCoffee, title: "Coffee Estate Experiences", desc: "Walk plantations, meet growers, and taste beans from bush to brew." },
    { img: expRetreat, title: "Corporate & Startup Retreats", desc: "Meaningful offsites for teams — conversation, culture, and clarity." },
  ];
  return (
    <section id="experiences" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="section-label">Our Experiences</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
              Journeys, <span className="italic text-amber-deep">not itineraries.</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-navy hover:text-amber-deep inline-flex items-center gap-1.5">
            Curate a journey <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="reveal group overflow-hidden rounded-3xl bg-cream ring-1 ring-black/5 shadow-[0_10px_40px_-20px_rgba(15,20,60,0.25)] hover:shadow-[0_20px_60px_-20px_rgba(15,20,60,0.4)] transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-navy-deep">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-deep hover:text-navy-deep"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Who Can Join ---------- */
function WhoCanJoin() {
  const tags = [
    "Solo Travelers",
    "Friends",
    "Families",
    "Couples",
    "Students",
    "Entrepreneurs",
    "Nature Lovers",
    "Photographers",
    "Working Professionals",
    "Corporate Teams",
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">Who Can Join</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            Journeys designed for the{" "}
            <span className="italic text-amber-deep">curious.</span>
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 reveal">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-8 font-display italic text-2xl md:text-3xl text-amber-deep">
          Everyone is welcome.
        </p>
      </div>
    </section>
  );
}

/* ---------- Why Travel With Us ---------- */
function WhyTravel() {
  const items = [
    { icon: Sparkles, title: "Curated Experiences" },
    { icon: Users, title: "Local Experts" },
    { icon: ShieldCheck, title: "Safe & Well-Planned Trips" },
    { icon: Heart, title: "Authentic Culture" },
    { icon: Leaf, title: "Community-Driven Journeys" },
    { icon: Camera, title: "Professional Photography" },
    { icon: MapPin, title: "Hidden Destinations" },
    { icon: BookOpen, title: "Meaningful Connections" },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">Why Travel With Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            Every detail, <span className="italic text-amber-deep">designed with care.</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-4">
          {items.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="reveal flex items-center gap-4 border-b border-border py-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cream text-navy">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg md:text-xl text-navy-deep font-semibold">
                {title}
              </span>
              <Check className="ml-auto h-5 w-5 text-amber-deep" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Community Banner ---------- */
function CommunityBanner() {
  return (
    <section id="community" className="relative isolate overflow-hidden bg-navy-deep py-24 md:py-32 text-white">
      <img
        src={heroArtisan}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      <div className="relative container-x max-w-4xl reveal">
        <span className="section-label-light">Community</span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.03]">
          We're more than a <span className="italic text-amber-brand">travel company.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed">
          We're a growing community of explorers who believe travel should inspire, educate, and
          connect. Become part of a journey that goes beyond sightseeing.
        </p>
        <a
          href="https://www.instagram.com/samvadajourneys"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-brand px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-white transition-colors"
        >
          <Instagram className="h-4 w-4" /> Join Our Community
        </a>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const reviews = [
    {
      name: "Ananya R.",
      role: "Solo Traveler, Bengaluru",
      quote:
        "This wasn't a trip, it was a conversation with a place. I met a fisherman at 5am who taught me more about Malpe than any guidebook could.",
    },
    {
      name: "Rohit & Meera",
      role: "Couple, Mumbai",
      quote:
        "The hidden eatery breakfast alone was worth it. Every day surprised us in the most human way possible.",
    },
    {
      name: "Kiran S.",
      role: "Founder, Startup Retreat",
      quote:
        "Our team came back grounded and inspired. Samvada made an offsite feel like a homecoming.",
    },
    {
      name: "Priya N.",
      role: "Photographer",
      quote:
        "Every frame had a story behind it because someone told me one. That's what makes Samvada different.",
    },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">Our Reviews</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            Kind words from our{" "}
            <span className="italic text-amber-deep">community.</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-5 md:gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal rounded-3xl bg-white p-7 md:p-8 ring-1 ring-black/5 shadow-[0_10px_40px_-25px_rgba(15,20,60,0.35)]"
            >
              <div className="flex items-center gap-1 text-amber-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-brand" />
                ))}
              </div>
              <blockquote className="mt-4 text-navy-deep text-lg leading-relaxed font-display">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-navy text-amber-brand font-semibold">
                  {r.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <div className="font-semibold text-navy-deep truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const cats = ["All", "Adventure", "Culture", "Food", "People", "Nature", "Memories"] as const;
  type Cat = (typeof cats)[number];
  const [active, setActive] = useState<Cat>("All");

  const items = useMemo(
    () => [
      { img: heroMountains, cat: "Nature" as Cat, span: "row-span-2" },
      { img: expCoastal, cat: "Culture" as Cat, span: "" },
      { img: expFood, cat: "Food" as Cat, span: "" },
      { img: expWaterfall, cat: "Adventure" as Cat, span: "row-span-2" },
      { img: expRetreat, cat: "People" as Cat, span: "" },
      { img: expCoffee, cat: "Nature" as Cat, span: "" },
      { img: expSunset, cat: "Memories" as Cat, span: "" },
      { img: heroArtisan, cat: "Culture" as Cat, span: "" },
      { img: heroCoast, cat: "Memories" as Cat, span: "" },
      { img: expHeritage, cat: "Culture" as Cat, span: "" },
    ],
    [],
  );
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="section-label">Gallery</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
              Moments, <span className="italic text-amber-deep">not just photos.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  active === c
                    ? "bg-navy text-white"
                    : "bg-cream text-navy hover:bg-navy hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {filtered.map((it, i) => (
            <a
              key={i}
              href="#contact"
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.cat}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/40 transition-colors" />
              <span className="absolute left-3 bottom-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-navy-deep">
                {it.cat}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Upcoming Trips ---------- */
function UpcomingTrips() {
  const trips = [
    { img: heroCoast, title: "Weekend Explorer Series" },
    { img: expFood, title: "Coastal Food Trails" },
    { img: expWaterfall, title: "Hidden Waterfall Adventures" },
    { img: expHeritage, title: "Heritage Walks" },
    { img: expSunset, title: "Sunrise Experiences" },
    { img: expCoffee, title: "Coffee Estate Tours" },
    { img: expCoastal, title: "Festival Special Trips" },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">Upcoming Trips</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            What's <span className="italic text-amber-deep">next</span> on the road.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {trips.map((t, i) => (
            <a
              key={t.title}
              href="#contact"
              className="reveal group relative overflow-hidden rounded-3xl aspect-[4/5] ring-1 ring-black/5"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl font-semibold text-white">{t.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-amber-brand">
                  Enquire <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Partner With Us ---------- */
function PartnerWithUs() {
  const partners = [
    "Homestays",
    "Resorts",
    "Cafés",
    "Restaurants",
    "Adventure Operators",
    "Local Entrepreneurs",
    "Cultural Performers",
    "Tourism Partners",
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="reveal">
            <span className="section-label">Partner With Us</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
              Let's create meaningful travel experiences{" "}
              <span className="italic text-amber-deep">together.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              We work with homestays, cafés, artisans, and changemakers who believe travel can be a
              force for good.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-amber-brand hover:text-navy-deep transition-colors"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {partners.map((p) => (
              <div
                key={p}
                className="reveal aspect-square rounded-2xl bg-cream border border-border grid place-items-center text-center p-4 hover:bg-navy hover:text-white hover:border-navy transition-colors"
              >
                <span className="font-display text-sm md:text-base font-semibold leading-tight">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_25px_80px_-30px_rgba(15,20,60,0.4)]">
            <img
              src={aboutPortrait}
              alt="A local storyteller"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 hidden sm:block rounded-2xl bg-navy-deep text-white p-5 shadow-xl max-w-[240px]">
            <div className="font-display italic text-amber-brand">"Samvada"</div>
            <div className="mt-1 text-xs text-white/70">
              A conversation. Between traveler, place, and people.
            </div>
          </div>
        </div>
        <div className="reveal">
          <span className="section-label">About Us</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            A community built for the{" "}
            <span className="italic text-amber-deep">curious.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Samvada Journeys is a community built for curious explorers — not tourists. We believe
            every destination has a story waiting to be discovered. Through thoughtfully curated
            experiences, we connect travelers with local communities, entrepreneurs, culture, food,
            traditions, and hidden places that make every journey unforgettable.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our mission is to redefine travel by creating meaningful connections between people and
            places while supporting local businesses and preserving authentic cultural experiences.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "100%", v: "Locally led" },
              { k: "50+", v: "Hidden places" },
              { k: "∞", v: "Stories shared" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl text-navy-deep">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl reveal">
          <span className="section-label">Contact / Enquire</span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-navy-deep leading-[1.05]">
            Let's plan your <span className="italic text-amber-deep">next journey.</span>
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <aside className="reveal rounded-3xl bg-navy-deep p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-amber-brand/15 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl">Get in touch</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Tell us where curiosity takes you. We'll craft a journey around it.
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber-brand shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Phone</div>
                    <div className="mt-0.5">+91 00000 00000</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber-brand shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Email</div>
                    <a
                      href="mailto:samvadajourneys@gmail.com"
                      className="mt-0.5 block hover:text-amber-brand"
                    >
                      samvadajourneys@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-brand shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Office</div>
                    <div className="mt-0.5">Coastal Karnataka, India</div>
                  </div>
                </li>
              </ul>
              <div className="mt-10 flex items-center gap-3">
                {[
                  { i: Instagram, h: "https://www.instagram.com/samvadajourneys" },
                  { i: MessageCircle, h: "https://wa.me/910000000000" },
                  { i: Facebook, h: "https://www.facebook.com/samvadajourneys" },
                  { i: Linkedin, h: "https://www.linkedin.com/company/samvada-journeys/" },
                ].map(({ i: Icon, h }) => (
                  <a
                    key={h}
                    href={h}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-amber-brand hover:text-navy-deep transition-colors"
                    aria-label="Social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="reveal rounded-3xl bg-cream p-8 md:p-10 ring-1 ring-black/5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Destination" name="destination" placeholder="Coastal Karnataka…" />
              <Field label="Travel Date" name="date" type="date" />
              <Field label="Number of Travelers" name="travelers" type="number" min={1} />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-widest text-navy mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
                placeholder="Tell us what excites you about this journey…"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-brand px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-navy-deep hover:text-white transition-colors"
            >
              {sent ? "Thank you — we'll be in touch" : "Submit Enquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-widest text-navy mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
      />
    </label>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-navy-deep text-white pt-16 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Samvada Journeys"
                className="h-12 w-12 rounded-full ring-2 ring-white/20"
                width={48}
                height={48}
              />
              <div className="leading-tight">
                <div className="font-display font-bold text-lg">Samvada Journeys</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-amber-brand">
                  Explore India Like a Local
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              Your trusted guide for every journey. Explore India like a local, not like a tourist.
            </p>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { l: "Home", h: "#home" },
              { l: "About Us", h: "#about" },
              { l: "Experiences", h: "#experiences" },
              { l: "Gallery", h: "#gallery" },
              { l: "Contact", h: "#contact" },
            ]}
          />
          <FooterCol
            title="Experiences"
            links={[
              { l: "Coastal Explorer", h: "#experiences" },
              { l: "Heritage Walks", h: "#experiences" },
              { l: "Food Trails", h: "#experiences" },
              { l: "Waterfall Treks", h: "#experiences" },
              { l: "Coffee Estates", h: "#experiences" },
            ]}
          />
          <div>
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-amber-brand">
              Connect With Us
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { i: Instagram, h: "https://www.instagram.com/samvadajourneys" },
                { i: Facebook, h: "https://www.facebook.com/samvadajourneys" },
                { i: Twitter, h: "https://www.x.com/samvadajourneys" },
                { i: Linkedin, h: "https://www.linkedin.com/company/samvada-journeys/" },
                { i: Mail, h: "mailto:samvadajourneys@gmail.com" },
              ].map(({ i: Icon, h }) => (
                <a
                  key={h}
                  href={h}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-amber-brand hover:text-navy-deep transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:samvadajourneys@gmail.com"
              className="mt-5 block text-sm text-white/70 hover:text-amber-brand"
            >
              samvadajourneys@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© 2026 Samvada Journeys. All Rights Reserved.</div>
          <div className="italic font-display text-amber-brand">
            Your Trusted Guide for Every Journey.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.22em] font-semibold text-amber-brand">
        {title}
      </div>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.l}>
            <a href={l.h} className="text-white/75 hover:text-white transition-colors">
              {l.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
