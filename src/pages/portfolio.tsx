import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView, useMotionValue, MotionValue } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, Shield, ChevronRight,
  Network, Bug, Lock, Code2, Flag, Eye, Search, ExternalLink,
  ArrowUpRight, Download, Home, BriefcaseBusiness, FolderKanban,
  BarChart3, FileSearch, Layers3, Trophy, GraduationCap,
} from "lucide-react";

import {
  PERSONAL, KEY_METRICS, SKILLS, PROJECTS,
  EXPERIENCE, CTF_PLATFORMS, COMPETENCIES, CASE_STUDY,
} from "@/data";

/* ─── Background parallax ─────────────────────────────────────── */
function BgParallax() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, (v) => Math.round(v * -0.18));
  const y2 = useTransform(scrollY, (v) => Math.round(v * 0.22));
  const y3 = useTransform(scrollY, (v) => Math.round(v * -0.12));
  const y4 = useTransform(scrollY, (v) => Math.round(v * 0.16));
  const y5 = useTransform(scrollY, (v) => Math.round(v * -0.28));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <motion.div style={{ y: y1, position:"absolute", top:-250, left:-200, width:750, height:750, background:"radial-gradient(circle, rgba(255,255,255,0.055) 0%, transparent 65%)", borderRadius:"50%" }} />
      <motion.div style={{ y: y1, position:"absolute", top:-128, left:-128, width:520, height:520, border:"1px solid rgba(255,255,255,0.1)", borderRadius:"50%" }} />
      <motion.div style={{ y: y1, position:"absolute", top:-64, left:-64, width:390, height:390, border:"1px solid rgba(255,255,255,0.055)", borderRadius:"50%" }} />
      <motion.div style={{ y: y2, position:"absolute", top:-40, right:80, width:2, height:380, background:"linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)", rotate:"22deg", transformOrigin:"top center" }} />
      <motion.div style={{ y: y2, position:"absolute", top:-40, right:112, width:1, height:280, background:"linear-gradient(to bottom, transparent, rgba(255,255,255,0.09), transparent)", rotate:"22deg", transformOrigin:"top center" }} />
      <motion.div style={{ y: y3, position:"absolute", top:"20vh", right:"-8vw", width:600, height:600, background:"radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)", borderRadius:"50%" }} />
      <motion.div style={{ y: y3, position:"absolute", top:"35vh", right:"5vw", width:240, height:240, border:"1px solid rgba(255,255,255,0.12)", borderRadius:"50%" }} />
      <motion.div style={{ y: y4, position:"absolute", bottom:"10vh", left:"3vw", opacity:0.15 }}>
        <svg width="140" height="140" viewBox="0 0 120 120"><line x1="0" y1="0" x2="120" y2="120" stroke="white" strokeWidth="1.5" /><line x1="120" y1="0" x2="0" y2="120" stroke="white" strokeWidth="1.5" /></svg>
      </motion.div>
      <motion.div style={{ y: y1, position:"absolute", top:"55vh", left:"2vw", display:"flex", flexDirection:"column", gap:10, opacity:0.22 }}>
        {[60,40,80,30].map((w,i) => <div key={i} style={{ width:w, height:1, background:"white" }} />)}
      </motion.div>
      <motion.div style={{ y: y2, position:"absolute", bottom:"8vh", right:"4vw", opacity:0.14 }}>
        <svg width="110" height="110" viewBox="0 0 90 90"><rect x="0" y="0" width="90" height="90" fill="none" stroke="white" strokeWidth="1" /><rect x="15" y="15" width="60" height="60" fill="none" stroke="white" strokeWidth="0.5" /><line x1="0" y1="45" x2="90" y2="45" stroke="white" strokeWidth="0.5" /><line x1="45" y1="0" x2="45" y2="90" stroke="white" strokeWidth="0.5" /></svg>
      </motion.div>
      <motion.div style={{ y: y5, position:"absolute", bottom:"-15vh", left:"25vw", width:900, height:450, background:"radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 65%)", borderRadius:"50%" }} />
      <motion.div style={{ y: y3, position:"absolute", top:"50vh", left:0, right:0, height:1, background:"linear-gradient(to right, transparent, rgba(255,255,255,0.06), rgba(255,255,255,0.06), transparent)" }} />
      <motion.div style={{ y: y1, position:"absolute", top:"68vh", left:"8vw", width:60, height:60, border:"1px solid rgba(255,255,255,0.12)", rotate:"45deg" }} />
      
      {/* New Parallax Elements */}
      <motion.div style={{ y: y5, position:"absolute", top:"30vh", left:"15vw", opacity:0.12 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4"/>
          <circle cx="40" cy="40" r="15" fill="none" stroke="white" strokeWidth="0.5" />
          <line x1="40" y1="0" x2="40" y2="80" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="0.5" />
        </svg>
      </motion.div>
      <motion.div style={{ y: y4, position:"absolute", top:"15vh", right:"25vw", opacity:0.1, display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:8 }}>
        {Array.from({ length: 16 }).map((_, i) => <div key={i} style={{ width:2, height:2, background:"white", borderRadius:"50%" }} />)}
      </motion.div>
      <motion.div style={{ y: y1, position:"absolute", bottom:"30vh", right:"18vw", opacity:0.1 }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" fill="none" stroke="white" strokeWidth="1" />
          <path d="M30 10 L50 22 L50 38 L30 50 L10 38 L10 22 Z" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ─── Researching Loader ─────────────────────────────────────── */
function ResearchingLoader() {
const RESEARCH_PHASES = [
  "SCANNING THREAT DATABASES",
  "PARSING CVE ADVISORIES",
  "MAPPING MITRE ATT&CK VECTORS",
  "EXTRACTING IOC SIGNATURES",
  "CORRELATING INCIDENT REPORTS",
  "BUILDING DETECTION LOGIC",
];

const [phase, setPhase] = useState(0);
const [dots, setDots] = useState(0);
  const [bar, setBar] = useState(42);

  useEffect(() => {
    const dotId = setInterval(() => setDots(d => (d + 1) % 4), 420);
    const phaseId = setInterval(() => setPhase(p => (p + 1) % RESEARCH_PHASES.length), 2600);
    const barId = setInterval(() => setBar(b => {
      const next = b + Math.random() * 3;
      return next >= 88 ? 42 : next;
    }), 900);
    return () => { clearInterval(dotId); clearInterval(phaseId); clearInterval(barId); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="font-mono text-[11px] tracking-widest"
      style={{ border: "1px dashed rgba(255,255,255,0.14)", clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)", padding: "14px 16px" }}
    >
      {/* header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white/35 uppercase">// INTEL_GATHERING</span>
        <span className="text-white/25">{Math.floor(bar)}%</span>
      </div>

      {/* animated phase text */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-white/55">&gt;</span>
        <span className="text-white/70 transition-all duration-500">{RESEARCH_PHASES[phase]}</span>
        <span className="text-white/55 w-8">{".".repeat(dots)}</span>
      </div>

      {/* progress bar */}
      <div className="w-full h-[2px] bg-white/10 mb-3">
        <div
          className="h-full bg-white/50 transition-all duration-700 ease-out"
          style={{ width: `${bar}%` }}
        />
      </div>

      {/* bottom ticker */}
      <div className="flex items-center gap-2 text-white/28">
        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/40" />
        </span>
        MORE CASE STUDIES IN PROGRESS — RESEARCHING &amp; UPDATING
      </div>
    </motion.div>
  );
}

/* ─── Typed terminal text + CyberpunkFrame ───────────────────── */
function TypedText({ text, className = "", speed = 38 }: { text: string; className?: string; speed?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!inView) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);
  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[2px] animate-pulse" />}
    </span>
  );
}

/* ─── Sticky Cyber Navigation ─────────────────────────────────── */
const NAV_ITEMS = [
  { id: "home",      label: "Home",     icon: Home },
  { id: "metrics",   label: "Key Metrics", icon: BarChart3 },
  { id: "skills",    label: "Arsenal",  icon: Shield },
  { id: "case-studies", label: "Case Studies", icon: FileSearch },
  { id: "domains",   label: "Skill Domains", icon: Layers3 },
  { id: "story",     label: "Experience", icon: BriefcaseBusiness },
  { id: "portfolio", label: "Projects", icon: FolderKanban },
  { id: "ctf",       label: "CTF & Platforms", icon: Trophy },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact",   label: "Contact",  icon: Mail },
];

function CyberNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const clickLockUntil = useRef(0);

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false, hour:"2-digit", minute:"2-digit", second:"2-digit" }));
    tick();
    const iv = setInterval(tick, 1000);

    let raf = 0;
    const updateNav = () => {
      raf = 0;
      setScrolled(window.scrollY > 40);
      if (Date.now() < clickLockUntil.current) return;

      const bottomReached =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (bottomReached) {
        setActive("contact");
        return;
      }

      const marker = window.innerHeight * 0.34;
      let next = NAV_ITEMS[0].id;
      let nearestDistance = Number.POSITIVE_INFINITY;

      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const distance = Math.abs(top - marker);

        if (top <= marker) next = id;
        if (distance < nearestDistance) nearestDistance = distance;
      });

      setActive(current => current === next ? current : next);
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(updateNav);
    };

    updateNav();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(iv);
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed top-2 left-0 right-0 z-[9990] flex justify-end px-2 md:px-4 pointer-events-none"
    >
      <div
        className="pointer-events-auto inline-flex items-center gap-0.5 px-1.5 py-1"
        style={{
          background: scrolled ? "rgba(0,0,0,0.96)" : "rgba(0,0,0,0.78)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          clipPath: "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
          border: `1px solid ${scrolled ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)"}`,
          boxShadow: scrolled ? "0 10px 28px rgba(0,0,0,0.45)" : "0 8px 20px rgba(0,0,0,0.28)",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              aria-label={label}
              title={label}
              data-pako={`nav:${id}`}
              onPointerDown={() => {
                clickLockUntil.current = Date.now() + 1100;
                setActive(id);
              }}
              onClick={() => {
                clickLockUntil.current = Date.now() + 1100;
                setActive(id);
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
                className="relative flex h-7 w-7 md:h-8 md:w-8 items-center justify-center overflow-hidden transition-colors duration-200"
              style={{
                clipPath: "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
                color: isActive ? "#000000" : "rgba(255,255,255,0.52)",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #d9d9d9 100%)",
                    border: "1px solid rgba(255,255,255,0.65)",
                    clipPath: "polygon(7px 0%, calc(100% - 7px) 0%, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0% calc(100% - 7px), 0% 7px)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.16) inset, 0 0 18px rgba(255,255,255,0.18)",
                  }}
                  transition={{ type: "spring", stiffness: 520, damping: 38, mass: 0.55 }}
                />
              )}
              <motion.span
                className="relative flex items-center justify-center"
                animate={{ scale: isActive ? 1.08 : 1, rotate: isActive ? -4 : 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
              >
                <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={1.8} />
              </motion.span>
              <span className="sr-only">{label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}

/* ─── CyberpunkFrame ──────────────────────────────────────────── */
import { Pako } from "@/components/Pako";

const BORDER_PALETTE = ["#ff2040", "#22c55e", "#fbbf24", "#06b6d4", "#a855f7", "#f97316", "#ec4899", "#14b8a6", "#818cf8", "#fb923c"];
const ACTION_CUT = "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)";
const ACTION_TAG_CUT = "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))";
const CONTACT_CUT = "polygon(14px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 14px)";
const CHIP_CUT = "polygon(8px 0%, calc(100% - 4px) 0%, 100% 4px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 4px 100%, 0% calc(100% - 4px), 0% 8px)";

function tagHash(tag: string): number {
  let h = 5381;
  for (let i = 0; i < tag.length; i++) h = ((h * 33) ^ tag.charCodeAt(i)) >>> 0;
  return h;
}

function CyberpunkFrame({ children, className = "", cut = 22, tag, accent = false, interactive = true, tagRight = false, colorSwap = false }: {
  children: React.ReactNode; className?: string; cut?: number; tag?: string; accent?: boolean; interactive?: boolean; tagRight?: boolean; colorSwap?: boolean;
}) {
  const accentBorder = tag
    ? BORDER_PALETTE[tagHash(tag) % BORDER_PALETTE.length]
    : BORDER_PALETTE[0];
  const c = cut; const b = 2; const cs = c + 8;
  const tagClipLeft = "polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px))";
  const tagClipRight = "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)";
  const outerClip = `polygon(${c}px 0%,calc(100% - ${c}px) 0%,100% ${c}px,100% calc(100% - ${c}px),calc(100% - ${c}px) 100%,${c}px 100%,0% calc(100% - ${c}px),0% ${c}px)`;
  const innerClip = `polygon(${c-b}px 0%,calc(100% - ${c-b}px) 0%,100% ${c-b}px,100% calc(100% - ${c-b}px),calc(100% - ${c-b}px) 100%,${c-b}px 100%,0% calc(100% - ${c-b}px),0% ${c-b}px)`;
  const innerBorderClip = `polygon(${c-5}px 0%,calc(100% - ${c-5}px) 0%,100% ${c-5}px,100% calc(100% - ${c-5}px),calc(100% - ${c-5}px) 100%,${c-5}px 100%,0% calc(100% - ${c-5}px),0% ${c-5}px)`;

  const cardRef = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springRotX = useSpring(rotX, { stiffness: 200, damping: 20 });
  const springRotY = useSpring(rotY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotX.set(-((e.clientY - cy) / (rect.height / 2)) * 6);
    rotY.set(((e.clientX - cx) / (rect.width / 2)) * 6);
  };
  const handleMouseLeave = () => { rotX.set(0); rotY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={colorSwap ? { filter: "invert(1)" } : undefined}
      transition={{ filter: { duration: 0.25, ease: "easeInOut" } }}
      style={{
        ...(interactive ? { rotateX: springRotX, rotateY: springRotY, transformPerspective: 900 } : {}),
        clipPath: outerClip,
        background: "#ffffff",
      }}
      className={`cp-outer group relative ${interactive ? "cp-interactive" : ""} ${className}`}
    >
      {/* two-tone cyberpunk border accent */}
      <div className="absolute pointer-events-none" style={{ inset:0, background:`linear-gradient(135deg, transparent 50%, ${accentBorder} 50%)`, opacity:0.55, zIndex:1 }} />
      <div className="absolute" style={{ inset:`${b}px`, background:"#ffffff", clipPath: innerClip, zIndex:2 }} />

      {accent && <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height:c+8, background:"#000000", opacity:0.08, borderBottom:"1px solid rgba(0,0,0,0.15)", zIndex:3 }} />}
      <div className="absolute pointer-events-none" style={{ inset:b+5, clipPath: innerBorderClip, border:"1px solid rgba(0,0,0,0.1)", zIndex:3 }} />
      {[
        { top:-2, left:-2, clipPath:"polygon(0 0, 100% 0, 0 100%)" },
        { top:-2, right:-2, clipPath:"polygon(0 0, 100% 0, 100% 100%)" },
        { bottom:-2, right:-2, clipPath:"polygon(100% 0, 100% 100%, 0 100%)" },
        { bottom:-2, left:-2, clipPath:"polygon(0 0, 100% 100%, 0 100%)" },
      ].map((corner, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{ ...corner, width:cs+4, height:cs+4, background:"#000000", zIndex:4 }}
        />
      ))}

      {tag && !tagRight && (
        <div
          className="absolute font-mono text-xs font-bold tracking-widest uppercase"
          style={{ top:0, left:c+10, background:"#000000", color:"#ffffff", padding:"2px 15px 3px 10px", clipPath:tagClipLeft, zIndex:5 }}
        >
          {tag}
        </div>
      )}
      {tag && tagRight && (
        <div
          className="absolute font-mono text-xs font-bold tracking-widest uppercase"
          style={{ top:0, right:c+10, background:"#000000", color:"#ffffff", padding:"2px 10px 3px 15px", clipPath:tagClipRight, zIndex:5 }}
        >
          {tag}
        </div>
      )}
      <div className="relative z-10 w-full h-full" style={{ padding: b, clipPath: outerClip }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Section label ───────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="flex-shrink-0 w-5 h-8 relative">
        <div className="absolute top-0 left-0 w-3 h-[2px] bg-white" />
        <div className="absolute top-0 left-0 w-[2px] h-full bg-white" />
        <div className="absolute bottom-0 left-0 w-3 h-[2px] bg-white" />
      </div>
      {children}
      <div className="h-[1px] w-12 bg-white/30 flex-shrink-0" />
    </div>
  );
}

/* ─── Photo corners ───────────────────────────────────────────── */
function PhotoCorners({ cut, width, height }: { cut:number; width:number; height:number }) {
  return (
    <svg className="absolute inset-0 pointer-events-none" width={width} height={height} style={{ zIndex:4 }}>
      <defs><pattern id="ph-h" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" /></pattern></defs>
      <polygon points={`${width-cut*2.5},0 ${width},0 ${width},${cut*2.5}`} fill="#000" />
      <polygon points={`${width-cut*2.5},0 ${width},0 ${width},${cut*2.5}`} fill="url(#ph-h)" />
      <line x1={width-cut*2.5} y1="0" x2={width} y2={cut*2.5} stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
      <polygon points={`0,${height-cut*2.5} 0,${height} ${cut*2.5},${height}`} fill="#000" />
      <polygon points={`0,${height-cut*2.5} 0,${height} ${cut*2.5},${height}`} fill="url(#ph-h)" />
      <line x1="0" y1={height-cut*2.5} x2={cut*2.5} y2={height} stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
      <line x1="0" y1={cut+8} x2="0" y2={cut+20} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <line x1={cut+8} y1="0" x2={cut+20} y2="0" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── Learning wave chart ─────────────────────────────────────── */
const LEARNING_DATA = [
  { label:"SOC & SIEM",        color:"#ffffff",              points:[12,35,58,75,88] },
  { label:"Penetration Testing",color:"rgba(255,255,255,0.7)",points:[8,25,52,68,80] },
  { label:"Malware Analysis",   color:"rgba(255,255,255,0.5)",points:[5,18,42,62,76] },
  { label:"Threat Intel",       color:"rgba(255,255,255,0.35)",points:[10,28,48,68,84] },
  { label:"Network Security",   color:"rgba(255,255,255,0.2)",points:[20,42,60,72,82] },
];
const YEARS = ["2022","2023","2024","2025","2026"];

function LearningWave() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const W = 900; const H = 220; const PAD = 40;
  const xStep = (W - PAD * 2) / (YEARS.length - 1);

  function pts(data: number[]) {
    return data.map((v, i) => ({ x: PAD + i * xStep, y: H - PAD - ((v / 100) * (H - PAD * 2)) }));
  }

  function smoothPath(data: number[]) {
    const p = pts(data);
    let d = `M ${p[0].x},${p[0].y}`;
    for (let i = 1; i < p.length; i++) {
      const cpx = (p[i-1].x + p[i].x) / 2;
      d += ` C ${cpx},${p[i-1].y} ${cpx},${p[i].y} ${p[i].x},${p[i].y}`;
    }
    return d;
  }

  function areaPath(data: number[]) {
    const p = pts(data);
    let d = `M ${p[0].x},${H - PAD}`;
    d += ` L ${p[0].x},${p[0].y}`;
    for (let i = 1; i < p.length; i++) {
      const cpx = (p[i-1].x + p[i].x) / 2;
      d += ` C ${cpx},${p[i-1].y} ${cpx},${p[i].y} ${p[i].x},${p[i].y}`;
    }
    d += ` L ${p[p.length-1].x},${H - PAD} Z`;
    return d;
  }

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth:340 }}>
        {/* grid lines */}
        {[25,50,75,100].map(v => {
          const y = H - PAD - ((v/100) * (H - PAD*2));
          return (
            <g key={v}>
              <line x1={PAD} y1={y} x2={W-PAD} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <text x={PAD-6} y={y+4} textAnchor="end" fontSize="8" fill="rgba(255,255,255,0.2)" fontFamily="monospace">{v}</text>
            </g>
          );
        })}
        {/* x-axis */}
        <line x1={PAD} y1={H-PAD} x2={W-PAD} y2={H-PAD} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {YEARS.map((yr, i) => (
          <text key={yr} x={PAD + i * xStep} y={H-PAD+14} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="monospace">{yr}</text>
        ))}

        {/* area fills */}
        {LEARNING_DATA.map((track, ti) => (
          <motion.path key={`area-${ti}`} d={areaPath(track.points)} fill={track.color} fillOpacity="0.04" initial={{ opacity:0 }} animate={inView ? { opacity:1 } : { opacity:0 }} transition={{ duration:0.6, delay:ti*0.15+0.5 }} />
        ))}

        {/* lines */}
        {LEARNING_DATA.map((track, ti) => (
          <motion.path
            key={`line-${ti}`}
            d={smoothPath(track.points)}
            fill="none"
            stroke={track.color}
            strokeWidth={ti === 0 ? 2 : 1.2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.8, delay: ti * 0.2, ease: "easeOut" }}
          />
        ))}

        {/* dots */}
        {LEARNING_DATA.map((track, ti) =>
          pts(track.points).map((p, pi) => (
            <motion.circle key={`dot-${ti}-${pi}`} cx={p.x} cy={p.y} r={ti === 0 ? 3 : 2} fill={track.color}
              initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: ti * 0.2 + pi * 0.08 + 1.6 }} />
          ))
        )}
      </svg>

      {/* legend */}
      <div className="flex flex-wrap gap-4 mt-4 px-1">
        {LEARNING_DATA.map(track => (
          <div key={track.label} className="flex items-center gap-2">
            <div className="w-5 h-[2px]" style={{ background: track.color }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: track.color }}>{track.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DOM-measured SVG connector + cards ─────────────────────── */
type ConnectorPath = { d: string; cx: number; cy: number };
type ConnectorStem = { x: number; y1: number; y2: number };

const BRING_CARDS = [
  { icon: <Eye   className="w-5 h-5" />, tag: "24_7_VIGIL",  title: "24/7 Vigilance", desc: "Comfortable monitoring live environments and responding to real-time alerts." },
  { icon: <Search className="w-5 h-5" />, tag: "THREAT_HUNT", title: "Threat Hunting",  desc: "Proactively search for hidden threats before they trigger alerts." },
  { icon: <Code2  className="w-5 h-5" />, tag: "TOOL_BUILD",  title: "Tool Builder",   desc: "Automate detection and response workflows with custom Python scripts." },
  { icon: <Flag   className="w-5 h-5" />, tag: "CTF_OPS",     title: "CTF Competitor", desc: "Regular capture-the-flag participant — practical attack & defence skills." },
];

function ConnectorSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef       = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  const [stem,  setStem]  = useState<ConnectorStem | null>(null);
  const [paths, setPaths] = useState<ConnectorPath[]>([]);

  const measure = useRef(() => {
    const container = containerRef.current;
    const hub       = hubRef.current;
    if (!container || !hub) return;

    const cr = container.getBoundingClientRect();
    const hr = hub.getBoundingClientRect();

    const startX = hr.left + hr.width  / 2 - cr.left;
    const startY = hr.bottom - cr.top;
    const branchY = startY + 20;

    setStem({ x: startX, y1: startY, y2: branchY });

    const next: ConnectorPath[] = [];
    cardRefs.current.forEach(el => {
      if (!el) return;
      const r  = el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - cr.left;
      const cy = r.top - cr.top;
      const midY = (branchY + cy) / 2;
      next.push({
        d:  `M ${startX},${branchY} C ${startX},${midY} ${cx},${midY} ${cx},${cy}`,
        cx, cy,
      });
    });
    setPaths(next);
  });

  useEffect(() => {
    const fn = measure.current;
    const raf = requestAnimationFrame(fn);
    const ro  = new ResizeObserver(fn);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", fn, { passive: true });
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener("resize", fn); };
  }, []);

  return (
    <div ref={containerRef} className="relative -mt-4 select-none">

      {/* hub label — no y-animation so position is stable for measurement */}
      <div className="flex justify-center">
        <motion.div
          ref={hubRef}
          className="flex items-center gap-2 px-4 py-1.5 font-mono text-[9px] tracking-[0.18em] uppercase"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)", color: "#fff" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          onAnimationComplete={() => requestAnimationFrame(measure.current)}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          WHAT I BRING TO YOUR TEAM
        </motion.div>
      </div>

      {/* spacing gap that the bezier paths travel through */}
      <div className="h-14 md:h-16" />

      {/* SVG — rendered BEFORE cards so it sits behind the frames */}
      {stem && (
        <svg
          aria-hidden="true"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible", zIndex: 0 }}
        >
          {/* vertical stem */}
          <motion.line
            x1={stem.x} y1={stem.y1} x2={stem.x} y2={stem.y2}
            stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
          {/* bezier branches */}
          {paths.map(({ d }, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.07, ease: "easeInOut" }}
            />
          ))}
        </svg>
      )}

      {/* cards — positioned above SVG */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ alignItems: "stretch", position: "relative", zIndex: 1 }}>
        {BRING_CARDS.map(({ icon, tag, title, desc }, i) => (
          <motion.div
            key={title}
            ref={el => { cardRefs.current[i] = el; }}
            className="h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onAnimationComplete={() => requestAnimationFrame(measure.current)}
          >
            <CyberpunkFrame cut={16} tag={tag} interactive={false} colorSwap className="h-full">
              <div className="p-5 pt-8 flex flex-col gap-3 h-full" style={{ color: "#000" }}>
                <div className="text-zinc-900 font-bold flex-shrink-0">{icon}</div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-black flex-shrink-0">{title}</div>
                <div className="font-mono text-[11px] leading-relaxed text-zinc-900 font-bold flex-grow">{desc}</div>
              </div>
            </CyberpunkFrame>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Experience card ─────────────────────────────────────────── */
function ExperienceCard({ year, title, company, description, index, pakoKey }: { year:string; title:string; company:string; description:string; index:number; pakoKey?:string }) {
  return (
    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
      {...(pakoKey ? { "data-pako": pakoKey } : {})}>
      <CyberpunkFrame cut={20} interactive={false} colorSwap>
        <div className="p-6 md:p-8 flex gap-6" style={{ color:"#000" }}>
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center font-display text-lg text-white font-bold flex-shrink-0" style={{ background:"#000000", borderRadius:"4px" }}>{index}</div>
            <div className="w-[1px] flex-grow bg-black/15 min-h-[24px]" />
          </div>
          <div className="flex-grow min-w-0">
            <div className="font-mono text-[11px] text-zinc-900 font-bold tracking-widest mb-1.5">// {year}</div>
            <h3 className="font-display text-3xl tracking-wide mb-1 text-black">{title}</h3>
            <h4 className="font-mono font-bold uppercase tracking-widest text-xs text-zinc-900 font-bold mb-3">{company}</h4>
            <p className="text-sm leading-relaxed text-zinc-900 font-bold whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </CyberpunkFrame>
    </motion.div>
  );
}

/* ─── Voyage slider ───────────────────────────────────────────── */
function VoyageSlider({ items }: {
  items: { title:string; subtitle:string; stack:string; details:string[]; treeFlow?:{step:string; sub:string[]}[]; color?:string; github?:string }[]
}) {
  const [active, setActive] = useState(0);
  const count = items.length;

  const [cardW, setCardW] = useState(620);
  const [cardH, setCardH] = useState(370);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 480) {
        setCardW(Math.min(vw - 32, 340));
        setCardH(720);
      } else if (vw < 900) {
        setCardW(Math.min(vw - 64, 760));
        setCardH(520);
      } else {
        setCardW(850);
        setCardH(520);
      }
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const prev = () => setActive(i => (i - 1 + count) % count);
  const next = () => setActive(i => (i + 1) % count);

  const dragX = useMotionValue(0);
  const onDragEnd = (_: never, info: { offset: { x: number } }) => {
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
    dragX.set(0);
  };

  const isMobile = cardW < 500;

  return (
    <div className="relative select-none" style={{ userSelect: "none" }}>
      <div style={{ overflowX: "clip", overflowY: "visible" }}>
        <div
          className="relative mx-auto"
          style={{ width: "100%", height: cardH + 40, perspective: 1100, perspectiveOrigin: "50% 50%", overflow: "visible" }}
        >
          {items.map((p, i) => {
            let dx = i - active;
            if (dx > count / 2)  dx -= count;
            if (dx < -count / 2) dx += count;

            const abs = Math.abs(dx);
            if (abs > 1.5) return null;

            const translateX = dx * (cardW * (isMobile ? 0.88 : 0.72));
            const rotateY    = isMobile ? dx * -8 : dx * -18;
            const scale      = abs === 0 ? 1 : (isMobile ? 0.88 : 0.78);
            const opacity    = abs === 0 ? 1 : (isMobile ? 0.25 : 0.38);
            const zIndex     = abs === 0 ? 10 : 5;

            return (
              <motion.div
                key={p.title}
                drag={abs === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={onDragEnd}
                onClick={() => abs !== 0 && setActive(i)}
                animate={{ translateX, rotateY, scale, opacity, zIndex }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
                data-pako={`project:${p.title}`}
                style={{
                  position: "absolute",
                  top: 20,
                  left: "50%",
                  marginLeft: -(cardW / 2),
                  width: cardW,
                  height: cardH,
                  cursor: abs !== 0 ? "pointer" : "auto",
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d",
                  WebkitFontSmoothing: "antialiased",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                  filter: "blur(0px)"
                }}
              >
                <ProjectCard title={p.title} subtitle={p.subtitle} stack={p.stack}
                  details={p.details} treeFlow={p.treeFlow} color={p.color} index={i + 1} github={p.github}
                  cardW={cardW} cardH={cardH} isMobile={isMobile} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* nav buttons on mobile */}
      {isMobile && (
        <div className="flex justify-center gap-6 mt-2 mb-1">
          <button onClick={prev} className="font-mono text-white/50 text-2xl px-3 py-1 hover:text-white transition-colors">‹</button>
          <button onClick={next} className="font-mono text-white/50 text-2xl px-3 py-1 hover:text-white transition-colors">›</button>
        </div>
      )}

      <div className="flex flex-col items-center gap-2 mt-4">
        {!isMobile && (
          <div className="flex items-center gap-3">
            <motion.span animate={{ x:[-5,0,-5] }} transition={{ repeat:Infinity, duration:1.6, ease:"easeInOut" }} className="font-mono text-white/50 text-lg select-none">‹‹</motion.span>
            <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">drag to explore</span>
            <motion.span animate={{ x:[5,0,5] }} transition={{ repeat:Infinity, duration:1.6, ease:"easeInOut" }} className="font-mono text-white/50 text-lg select-none">››</motion.span>
          </div>
        )}
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/25">
          {String(active + 1).padStart(2,"0")} / {String(count).padStart(2,"0")}
        </span>
      </div>
    </div>
  );
}

/* ─── Project card ────────────────────────────────────────────── */
function ProjectCard({ title, subtitle, stack, details, treeFlow, color, index, github, cardW, cardH, isMobile }: {
  title:string; subtitle:string; stack:string; details:string[]; treeFlow?:{step:string, sub:string[]}[]; color?:string; index:number; github?:string;
  cardW:number; cardH:number; isMobile:boolean;
}) {
  const stackItems = stack.split(', ');
  const accentColor = color || "#000000";
  
  const BUTTON_CUT = "polygon(10px 0%, calc(100% - 4px) 0%, 100% 4px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 4px 100%, 0% calc(100% - 4px), 0% 10px)";

  const renderGithubButton = () => {
    if (!github) return null;
    return (
      <a href={github} target="_blank" rel="noreferrer"
        className="relative flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider px-5 py-2 transition-all duration-300 group"
        style={{ 
          background: "#000", 
          color: "#fff",
          clipPath: BUTTON_CUT,
          boxShadow: `0 4px 15px ${accentColor}40`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 6px 20px ${accentColor}80`;
          e.currentTarget.style.background = accentColor;
          e.currentTarget.style.color = "#000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 4px 15px ${accentColor}40`;
          e.currentTarget.style.background = "#000";
          e.currentTarget.style.color = "#fff";
        }}
      >
        <span className="absolute left-0 top-0 h-2.5 w-2.5 bg-white/35 pointer-events-none transition-colors group-hover:bg-black/35" style={{ clipPath:"polygon(0 0, 100% 0, 0 100%)" }} />
        <Github className="w-3.5 h-3.5" /> Source Code <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
      </a>
    );
  };

  return (
    <div className="flex flex-col h-full relative" style={{ width: cardW, height: cardH, WebkitFontSmoothing: "antialiased", backfaceVisibility: "hidden", filter: "blur(0px)", transform: "translateZ(0)" }}>
      <CyberpunkFrame cut={isMobile ? 14 : 22} tag={`PRJ_0${index}`} accent interactive={false} className="h-full">
        <div className="flex flex-col h-full overflow-hidden" style={{ color:"#000" }}>
          <div className={`flex flex-grow overflow-hidden ${!isMobile ? "flex-row" : "flex-col overflow-y-auto"}`} style={{ paddingLeft: isMobile ? 14 : 24, paddingRight: isMobile ? 14 : 24, paddingTop: 20, paddingBottom: 16 }}>
            <div className="absolute top-6 right-5 font-display select-none pointer-events-none" style={{ fontSize: isMobile ? 40 : 64, zIndex:1, color: `${accentColor}1A` }}>0{index}</div>
            
            {/* Left Column (or Top on Mobile) */}
            <div className={`relative flex flex-col h-full z-10 ${!isMobile ? "w-[48%] pr-6 border-r border-black/10" : "flex-grow pb-14"}`}>
              <h3 className="font-display mb-0.5 leading-tight" style={{ fontSize: isMobile ? 22 : 30, color: accentColor }}>{title}</h3>
              <p className="font-mono font-bold uppercase tracking-widest text-[10px] mb-3 pb-3 text-zinc-900 font-bold" style={{ borderBottom:"1px solid rgba(0,0,0,0.1)" }}>{subtitle}</p>

              <div className="mb-4 flex-shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {stackItems.slice(0, isMobile ? 4 : 6).map(tech => (
                    <span key={tech} className="font-mono text-[9px] uppercase font-bold tracking-wider px-2 py-1 text-zinc-900 font-bold"
                      style={{ background:"rgba(0,0,0,0.05)", border:"1px solid rgba(0,0,0,0.15)", borderRadius:"3px" }}>
                      {tech}
                    </span>
                  ))}
                  {stackItems.length > (isMobile ? 4 : 6) && (
                    <span className="font-mono text-[9px] text-zinc-900 font-bold self-center">+{stackItems.length - (isMobile ? 4 : 6)}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-4 flex-grow overflow-y-auto pr-2">
                {details.map((d, i) => (
                  <li key={i} className="flex gap-2 items-start text-[11px] text-zinc-900 font-bold leading-snug">
                    <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />{d}
                  </li>
                ))}
              </ul>
              
              {/* GitHub Button Removed from Inside Frame */}

              {/* Only show on mobile inside this column */}
              {isMobile && treeFlow && <BranchTreeFlow tree={treeFlow} color={accentColor} />}
            </div>

            {/* Right Column (Only on Desktop/Tablet) */}
            {!isMobile && (
              <div className="relative flex flex-col h-full z-10 w-[52%] pl-6 overflow-y-auto pr-1 pb-16">
                {treeFlow && <BranchTreeFlow tree={treeFlow} color={accentColor} />}
              </div>
            )}
          </div>

          {/* GitHub Button cleanly floating in the corner without touching the frame */}
          {github && (
            <div className="absolute z-20 flex justify-end" style={{ bottom: 16, right: isMobile ? 16 : 24 }}>
              {renderGithubButton()}
            </div>
          )}
        </div>
      </CyberpunkFrame>
    </div>
  );
}

function BranchTreeFlow({ tree, color = "#22c55e" }: { tree: {step:string, sub:string[]}[]; color?: string }) {
  if (!tree || tree.length === 0) return null;
  return (
    <div className="font-mono text-[10.5px] leading-relaxed pb-2 w-full">
      <div className="font-bold mb-4 tracking-widest uppercase flex items-center gap-2" style={{ fontSize: "10px", color: "rgba(0,0,0,0.45)" }}>
        // EXECUTION_FLOW
      </div>
      {tree.map((node, idx) => {
        const isLastNode = idx === tree.length - 1;
        return (
          <motion.div key={idx} className="relative flex flex-col"
            initial={{ opacity: 0, x: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="animate-pulse" style={{ color, fontWeight: 'bold' }}>{isLastNode ? "└──" : "├──"}</span>
              <span className="font-bold uppercase tracking-wider" style={{ color }}>{node.step}</span>
            </div>
            <div className="flex flex-col relative" style={{ 
              marginLeft: "4.5px",
              paddingLeft: "16px",
              borderLeft: isLastNode ? "1px solid transparent" : `1px solid ${color}`,
              paddingBottom: isLastNode ? 0 : "10px"
            }}>
              {node.sub.map((subItem, sIdx) => {
                const isLastSub = sIdx === node.sub.length - 1;
                return (
                  <div key={sIdx} className="flex items-center gap-2 text-zinc-900 font-bold">
                    <span className="animate-pulse" style={{ color, opacity: 0.8 }}>{isLastSub ? "└─" : "├─"}</span>
                    <span>{subItem}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}


/* ─── Animation helpers ───────────────────────────────────────── */
const fadeIn  = { hidden:{ opacity:0, y:20 }, visible:{ opacity:1, y:0, transition:{ duration:0.5 } } };
const stagger = { hidden:{ opacity:0 }, visible:{ opacity:1, transition:{ staggerChildren:0.08 } } };

/* ─── Radar Scanner ───────────────────────────────────────────── */
function RadarScanner({ size = 180 }: { size?: number }) {
  const C = size / 2;
  const R = C - 2;
  const blips = [
    { x: C + 44, y: C - 26, d: 0.5 },
    { x: C - 30, y: C + 50, d: 1.2 },
    { x: C + 22, y: C + 58, d: 2.1 },
    { x: C - 55, y: C - 14, d: 1.7 },
    { x: C + 58, y: C + 20, d: 0.9 },
  ];
  return (
    <div style={{ width: size, height: size, position: "relative", flexShrink: 0 }}>
      {/* base SVG */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position:"absolute", inset:0 }}>
        <circle cx={C} cy={C} r={R} fill="#000" />
        {[0.25, 0.5, 0.75, 1].map(f => (
          <circle key={f} cx={C} cy={C} r={R * f} fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
        ))}
        <line x1={C} y1={2}      x2={C}      y2={size-2} stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <line x1={2} y1={C}      x2={size-2} y2={C}      stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
        <text x={C} y={size - 6} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,0.25)" letterSpacing="2">SCANNING</text>
      </svg>

      {/* sweep glow — conic gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        style={{ position:"absolute", inset:0, borderRadius:"50%",
          background:`conic-gradient(from 0deg, rgba(255,255,255,0) 0deg, rgba(255,255,255,0) 260deg, rgba(255,255,255,0.06) 300deg, rgba(255,255,255,0.28) 360deg)`,
          clipPath:`circle(${R}px at center)` }}
      />

      {/* sweep arm */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        style={{ position:"absolute", inset:0 }}
      >
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          width: R - 2, height: 1.5,
          transformOrigin:"0 50%",
          transform:"translateY(-50%)",
          background:"linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0))",
        }} />
      </motion.div>

      {/* blips */}
      {blips.map(({ x, y, d }, i) => (
        <motion.div key={i}
          animate={{ opacity:[0, 0.9, 0], scale:[0.5, 1.2, 0.5] }}
          transition={{ repeat:Infinity, duration:3, delay:d, ease:"easeOut" }}
          style={{ position:"absolute", left: x - 2.5, top: y - 2.5,
            width:5, height:5, borderRadius:"50%",
            background:"white", boxShadow:"0 0 5px 2px rgba(255,255,255,0.5)" }}
        />
      ))}
    </div>
  );
}

/* ─── Main ────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [cursorPos, setCursorPos] = useState({ x:-1000, y:-1000 });
  const { scrollYProgress } = useScroll();
  const scaleX              = useSpring(scrollYProgress, { stiffness:320, damping:36, mass:0.2, restDelta:0.0001 });

  const mouseXRaw = useMotionValue(0);
  const mouseYRaw = useMotionValue(0);
  const mouseX    = useSpring(mouseXRaw, { stiffness: 60, damping: 18 });
  const mouseY    = useSpring(mouseYRaw, { stiffness: 60, damping: 18 });

  const mainX = useTransform(mouseX, (v) => Math.round(v * 0.04));
  const mainY = useTransform(mouseY, (v) => Math.round(v * 0.03));

  useEffect(() => {
    const mm = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      mouseXRaw.set((e.clientX / window.innerWidth  - 0.5) * 50);
      mouseYRaw.set((e.clientY / window.innerHeight - 0.5) * 35);
    };
    window.addEventListener("mousemove", mm);
    return () => window.removeEventListener("mousemove", mm);
  }, []);

  const [formName,    setFormName]    = useState("");
  const [formEmail,   setFormEmail]   = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMsg,     setFormMsg]     = useState("");
  const [formState,   setFormState]   = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [formErr,     setFormErr]     = useState("");

  const W3F_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

  const tellPako = (title: string, body: string) => {
    window.dispatchEvent(new CustomEvent("pako:say", { detail: { title, body } }));
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = formName.trim();
    const email = formEmail.trim();
    const subject = formSubject.trim();
    const message = formMsg.trim();
    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name) {
      const msg = "Please add your name so Praveen knows who is speaking.";
      setFormErr(msg);
      setFormState("error");
      tellPako("Name needed", msg);
      return;
    }
    if (!emailLooksValid) {
      const msg = "That email format does not look right. Try something like name@company.com.";
      setFormErr(msg);
      setFormState("error");
      tellPako("Check the email", msg);
      return;
    }
    if (message.length < 12) {
      const msg = "Please add a little more detail: who you are, why you are reaching out, and what should happen next.";
      setFormErr(msg);
      setFormState("error");
      tellPako("Message is too short", msg);
      return;
    }

    setFormState("sending");
    setFormErr("");
    tellPako("Sending message", "Everything looks good. Pako is sending your message now.");
    try {
      const payload: Record<string, string> = {
        name,
        email,
        subject: subject || "Portfolio Contact",          // Web3Forms uses this as the email subject line
        message: subject ? `Subject: ${subject}\n\n${message}` : message,
        from_name: "Portfolio Contact Form",
       };
      let data: { success?: boolean; message?: string };
      if (W3F_KEY) {
        payload.access_key = W3F_KEY;
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        data = await res.json();
      } else {
        // Simulate network delay and success for demo purposes when key is missing
        await new Promise(r => setTimeout(r, 1500));
        data = { success: true, message: "Demo mode: form processed." };
        console.warn("VITE_WEB3FORMS_KEY is not set. Contact form is running in demo mode.");
      }
      if (!data.success) throw new Error(data.message ?? "Submission failed");
      setFormState("sent");
      setFormName(""); setFormEmail(""); setFormSubject(""); setFormMsg("");
      tellPako("Message sent", "Nice. Your message reached Praveen. He will reply as soon as he can.");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send. Please try again.";
      setFormErr(msg);
      setFormState("error");
      tellPako("Could not send", `Something blocked the message: ${msg}. You can still use email or LinkedIn from the contact cards.`);
    }
  };

  const PW = 240; const PH = 420;

  return (
    <div className="min-h-screen overflow-x-hidden relative font-sans" style={{ background:"#000000" }}>
      <div className="scanlines pointer-events-none fixed inset-0 z-[9998]" />
      <div className="dot-grid pointer-events-none fixed inset-0 z-0" />
      <BgParallax />


      {/* scroll bar — stays above nav */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 right-0 h-[2px] bg-white/85 z-[10050]"
        style={{ scaleX, transformOrigin: "0% 50%", willChange: "transform" }}
      />

      <CyberNav />

      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-24 space-y-16 relative z-10">

        {/* ═══ HERO ═══ */}
        <section id="home">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <CyberpunkFrame cut={30} tag="OPERATIVE_PROFILE" accent interactive={false}>
              <div className="p-6 md:p-8 pt-8" style={{ color:"#000" }}>
                <div className="flex flex-col md:flex-row-reverse gap-8 items-start">

                  {/* portrait photo */}
                  <motion.div variants={fadeIn} className="flex-shrink-0 self-start">
                    <div className="relative inline-block">
                      <div className="relative" style={{ width:PW, height:PH }}>
                        <div className="absolute inset-0" style={{ background:"#000000", clipPath: "polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px)" }} />
                        <div className="absolute" style={{ inset:"2px", background:"#1a1a1a", clipPath: "polygon(18px 0%, calc(100% - 18px) 0%, 100% 18px, 100% calc(100% - 18px), calc(100% - 18px) 100%, 18px 100%, 0% calc(100% - 18px), 0% 18px)", overflow:"hidden" }}>
                          <img src="/profile.jpg" alt="Praveen K" className="w-full h-full object-cover object-top" />
                        </div>
                        <PhotoCorners cut={20} width={PW} height={PH} />
                      </div>
                      <div className="absolute -bottom-5 left-0 right-0 flex justify-center">
                        <div className="flex items-center gap-2 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest" style={{ background:"#031a06", border:"1px solid #16a34a", color:"#22c55e", clipPath:ACTION_TAG_CUT }}>
                          <span className="relative flex w-2 h-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background:"#22c55e" }} />
                            <span className="relative inline-flex rounded-full w-2 h-2" style={{ background:"#22c55e" }} />
                          </span>
                          Open to Work
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* info */}
                  <div className="flex-grow text-center md:text-left space-y-5">
                    <motion.div variants={fadeIn}>
                      <div className="flex items-center justify-center md:justify-start gap-1.5 mb-2">
                        {[1,2,3,4,5].map(i => <Shield key={i} className={`w-3.5 h-3.5 ${i<=4?"fill-black text-black":"text-black/20"}`} />)}
                        <span className="font-mono text-[11px] text-zinc-900 font-bold ml-2 tracking-widest">// CLEARANCE_LVL_4</span>
                      </div>
                      <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-none uppercase tracking-tighter text-black mb-3">
                        PRAVEEN K
                      </h1>
                      <div className="mt-2 flex items-center gap-2 justify-center md:justify-start">
                        <span className="relative flex w-1.5 h-1.5 flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-500" />
                          <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-red-600" />
                        </span>
                        <p className="font-mono text-xs tracking-[0.16em] uppercase text-zinc-900 font-bold">
                          Cybersecurity Analyst & Network Engineer
                        </p>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <div
                        className="relative inline-block overflow-hidden px-4 py-2.5 font-mono text-sm text-zinc-900 font-bold"
                        style={{
                          background:"rgba(0,0,0,0.05)",
                          border:"1px solid rgba(0,0,0,0.2)",
                          clipPath:"polygon(6px 0%, calc(100% - 14px) 0%, 100% 14px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 14px 100%, 0% calc(100% - 14px), 0% 6px)",
                          boxShadow:"0 0 0 1px rgba(0,0,0,0.04) inset",
                        }}
                      >
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-y-0 w-12 bg-black/10"
                          initial={{ x:"-160%" }}
                          animate={{ x:"360%" }}
                          transition={{ duration:2.8, repeat:Infinity, repeatDelay:1.4, ease:"easeInOut" }}
                          style={{ transform:"skewX(-18deg)" }}
                        />
                        <span className="relative text-zinc-900 font-bold mr-1">&gt;&gt;</span>
                        <span className="relative"><TypedText text="Building defenses. Breaking threats. One packet at a time." speed={36} /></span>
                      </div>
                    </motion.div>

                     <motion.div variants={fadeIn} className="mb-10">
                      <p className="text-sm leading-relaxed text-zinc-900 font-bold max-w-xl italic">
                        "I operate at the intersection of offensive tactics and defensive strategy. From building intelligent detection engines to dismantling the mechanisms of real-world malware, my mission is to see the network through the eyes of the adversary — because the best way to secure a perimeter is knowing exactly how to break it."
                      </p>
                    </motion.div>


                    <motion.div variants={fadeIn} className="flex flex-wrap justify-center md:justify-start gap-2">
                      {[
                        { icon:<Phone className="w-3 h-3" />,    label:"+91 82201 89476",          href:"tel:+918220189476",                    pako:"btn:phone",    hoverColor:"#10b981" },
                        { icon:<Mail className="w-3 h-3" />,     label:"https.praveen.go@gmail.com",  href:"mailto:https.praveen.go@gmail.com",       pako:"btn:email",    hoverColor:"#ef4444" },
                        { icon:<Linkedin className="w-3 h-3" />, label:"LinkedIn",                 href:"https://linkedin.com/in/viewpraveenk/",pako:"btn:linkedin", hoverColor:"#0ea5e9" },
                        { icon:<Github className="w-3 h-3" />,   label:"GitHub",                   href:"https://github.com/praxezz",           pako:"btn:github",   hoverColor:"#22c55e" },
                      ].map(({ icon, label, href, pako, hoverColor }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            data-pako={pako}
                            className="group relative flex items-center gap-2 overflow-hidden px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 bg-black text-white active:scale-[0.98]"
                            style={{ border:"2px solid rgba(0,0,0,0.75)", clipPath:CONTACT_CUT, boxShadow:"0 0 0 1px rgba(255,255,255,0.12) inset" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow = `0 6px 20px ${hoverColor}80`;
                              e.currentTarget.style.background = hoverColor;
                              e.currentTarget.style.borderColor = hoverColor;
                              e.currentTarget.style.color = "#000";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow = `0 0 0 1px rgba(255,255,255,0.12) inset`;
                              e.currentTarget.style.background = "#000";
                              e.currentTarget.style.borderColor = "rgba(0,0,0,0.75)";
                              e.currentTarget.style.color = "#fff";
                            }}
                          >
                            <span className="absolute left-0 top-0 h-3 w-3 bg-white/35 pointer-events-none transition-opacity group-hover:opacity-100" style={{ clipPath:"polygon(0 0, 100% 0, 0 100%)" }} />
                            <span className="relative flex items-center gap-2">{icon} {label}</span>
                          </a>
                      ))}
                      <a
                        href="/resume.pdf"
                        download="Praveen_K_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        data-pako="btn:cv"
                        className="group relative flex items-center gap-2 overflow-hidden px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 bg-black text-white active:scale-[0.98]"
                        style={{ border:"2px solid rgba(0,0,0,0.75)", clipPath:CONTACT_CUT, boxShadow:"0 0 0 1px rgba(255,255,255,0.12) inset" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 6px 20px rgba(139, 92, 246, 0.5)`;
                          e.currentTarget.style.background = "#8b5cf6"; // purple hover
                          e.currentTarget.style.borderColor = "#8b5cf6";
                          e.currentTarget.style.color = "#000";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 0 1px rgba(255,255,255,0.12) inset`;
                          e.currentTarget.style.background = "#000";
                          e.currentTarget.style.borderColor = "rgba(0,0,0,0.75)";
                          e.currentTarget.style.color = "#fff";
                        }}
                      >
                        <span className="absolute left-0 top-0 h-3 w-3 bg-white/35 pointer-events-none" style={{ clipPath:"polygon(0 0, 100% 0, 0 100%)" }} />
                        <Download className="relative w-3 h-3 text-sky-300 drop-shadow-[0_0_7px_rgba(56,189,248,0.95)] group-hover:text-sky-200 group-hover:drop-shadow-[0_0_11px_rgba(56,189,248,1)] transition-all" /> <span className="relative">Download CV</span>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CyberpunkFrame>
          </motion.div>
        </section>

        {/* ═══ ABOUT ME ═══ */}
        <motion.section initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <CyberpunkFrame cut={28} tag="OPERATIVE_BIO" accent tagRight interactive={false}>
            <div className="p-6 md:p-10" style={{ color:"#000" }}>

              {/* header row */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background:"#000" }} />
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-zinc-900 font-bold">// SYS_MODULE — 02</span>
                </div>
                <div className="flex-1 h-px bg-black/10" />
                <span className="font-mono text-[11px] tracking-widest text-zinc-900 font-bold uppercase">About Me</span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* left — radar + methodology */}
                <div className="space-y-6">

                  {/* operator profile quick-facts */}
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-zinc-900 font-bold uppercase mb-3">Operator Profile</div>
                    <div className="space-y-0" style={{ border:"1px solid rgba(0,0,0,0.1)", clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)" }}>
                      {[
                        { key:"Location",  val:"Tamil Nadu, India" },
                        { key:"Status",    val:"Open to Work" },
                        { key:"Focus",     val:"Cybersecurity Analysis & Network Engineering" },
                        { key:"Work Mode", val:"Remote · Hybrid · On-site" },
                        { key:"Degree",    val:"B.E. — Computer Science & Engineering" },
                        { key:"College",   val:"St. Michael College of Engineering" },
                      ].map(({ key, val }, i) => (
                        <motion.div
                          key={key}
                          className="flex items-center gap-3 px-3 py-2 cursor-default group/row"
                          style={{ borderBottom: i < 5 ? "1px solid rgba(0,0,0,0.07)" : "none" }}
                          whileHover={{ backgroundColor:"#000000", paddingLeft:16 }}
                          transition={{ duration:0.14 }}
                        >
                          <div className="w-[2px] self-stretch flex-shrink-0 rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity" style={{ background:"#ffffff", minHeight:14 }} />
                          <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-900 font-bold flex-shrink-0 w-20 group-hover/row:text-white/60 transition-colors">{key}</span>
                          <span className="font-mono text-xs text-zinc-900 font-bold font-medium group-hover/row:text-white transition-colors">{val}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* investigation methodology */}
                  <div>
                    <div className="font-mono text-[11px] tracking-widest text-zinc-900 font-bold uppercase mb-4">How I Investigate a Threat</div>
                    <div className="relative">
                      <div className="absolute left-[17px] top-4 bottom-4 w-px" style={{ background:"rgba(0,0,0,0.12)" }} />
                      <div className="space-y-3">
                        {[
                          { step:"01", label:"Observe",     desc:"Collect raw signals — logs, PCAP, alerts — without assumptions." },
                          { step:"02", label:"Triage",      desc:"Separate noise from signal. Classify severity and scope fast." },
                          { step:"03", label:"Hypothesize", desc:"Form an attacker narrative using MITRE ATT&CK as a map." },
                          { step:"04", label:"Hunt",        desc:"Pivot on IOCs, correlate events, trace lateral movement." },
                          { step:"05", label:"Report",      desc:"Document findings, timeline, and actionable remediation steps." },
                        ].map(({ step, label, desc }, i) => (
                          <motion.div
                            key={step}
                            initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                            transition={{ delay:i*0.1, duration:0.35 }}
                            className="flex gap-3 items-start"
                          >
                            <div
                              className="flex-shrink-0 w-9 h-9 flex items-center justify-center font-mono text-[11px] font-bold z-10 bg-black text-white"
                              style={{ borderRadius:"4px" }}
                            >{step}</div>
                            <div className="pt-1.5 px-1">
                              <div className="font-mono text-xs font-bold uppercase tracking-wider text-black">{label}</div>
                              <div className="font-mono text-[11px] text-zinc-900 font-bold leading-relaxed mt-0.5">{desc}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* right — Who I Am + mission */}
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl uppercase leading-none tracking-tight text-black mb-4">
                      Who I Am
                    </h2>
                    <div className="space-y-3 text-sm leading-relaxed text-zinc-900 font-bold">
                      <p>I am <span className="font-bold text-emerald-600 text-base">Praveen K</span> — a relentless cybersecurity analyst and network engineer dedicated to securing digital frontiers. My obsession lies in deconstructing complex systems to uncover hidden vulnerabilities before adversaries do.</p>
                      <p>With hands-on expertise in building intelligent intrusion detection architectures and executing advanced threat simulations, I bridge the critical gap between offensive tactics and defensive strategies. This dual perspective empowers me to anticipate breaches and engineer highly resilient, future-proof networks.</p>
                      <p>I thrive in high-signal, high-noise environments where pattern recognition and calm under pressure matter most. Every alert is a story — I find out who wrote it.</p>
                    </div>
                  </div>
                  {/* mission strip */}
                  <motion.div
                    className="px-4 py-3 font-mono text-xs text-white/82 space-y-1 cursor-default group/mission"
                    style={{ background:"#000000", border:"1px solid rgba(0,0,0,0.2)", clipPath:ACTION_CUT }}
                    transition={{ duration:0.18 }}
                  >
                    <div className="text-white/55 text-[11px] tracking-widest uppercase mb-2 transition-colors duration-150">Mission Statement</div>
                    {[
                      "Anticipate adversarial behavior through proactive threat hunting.",
                      "Engineer cryptographic resilience into foundational systems.",
                      "Automate incident response to drastically minimize exploit windows.",
                      "Bridge the critical gap between offensive research and defensive architecture.",
                      "Deploy zero-trust methodologies across high-stakes environments.",
                    ].map((line, i) => (
                      <div key={i} className="flex gap-2">
                        <span className="text-white/60 transition-colors duration-150">&gt;</span>
                        <span className="transition-colors duration-150">{line}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

              </div>

            </div>
          </CyberpunkFrame>
        </motion.section>

        {/* ═══ WHAT I BRING TO YOUR TEAM — DOM-measured connectors ═══ */}
        <ConnectorSection />

        {/* ═══ KEY METRICS — large display ═══ */}
        <section id="metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KEY_METRICS.map(({ value, label, sub, accent }, i) => (
            <motion.div key={label} data-pako={`metric:${label}`} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
              <CyberpunkFrame cut={14} accent interactive={false} colorSwap>
                <div className="p-5 relative overflow-hidden" style={{ color:"#000" }}>
                  <div className="absolute top-3 right-4 font-mono text-5xl text-black/[0.05] select-none font-bold">{accent}</div>
                  <div className="font-mono text-[11px] tracking-widest text-zinc-900 font-bold mb-1 uppercase">{sub}</div>
                  <div className="font-display leading-none text-black" style={{ fontSize:"clamp(64px,10vw,96px)" }}>{value}</div>
                  <div className="font-mono text-xs font-bold uppercase tracking-widest mt-1 text-zinc-900 font-bold">{label}</div>
                  <motion.div className="mt-3 h-[3px] bg-black" initial={{ width:0 }} whileInView={{ width:"100%" }} viewport={{ once:true }} transition={{ duration:1, delay:i*0.1+0.4, ease:"easeOut" }} />
                </div>
              </CyberpunkFrame>
            </motion.div>
          ))}
        </section>

        {/* ═══ ARSENAL + CASE STUDIES ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Arsenal */}
          <section id="skills">
            <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">ARSENAL</h2></SectionLabel>
            </motion.div>
            <div className="space-y-3">
              {SKILLS.map(({ category, items }, idx) => (
                <motion.div key={category} data-pako={`skill:${category}`} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:idx*0.06 }}>
                  <CyberpunkFrame cut={10} tag={category} interactive={false} colorSwap>
                    <div className="px-4 py-3 pt-8 flex flex-wrap gap-1.5">
                      {items.map(item => (
                        <span key={item} className="relative px-2.5 py-1 font-mono text-[11.4px] uppercase tracking-wide text-white"
                          style={{
                            background:"#000000",
                            border:"1px solid rgba(255,255,255,0.15)",
                            clipPath:CHIP_CUT,
                          }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </CyberpunkFrame>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Right — Case Studies */}
          <section id="case-studies">
            <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
              <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">CASE STUDIES</h2></SectionLabel>
            </motion.div>
            <div className="space-y-4">
              {CASE_STUDY.map((cs, i) => (
                <motion.div key={cs.tag} data-pako={`casestudy:${cs.tag}`} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
                  <CyberpunkFrame cut={22} tag={cs.tag} accent interactive={false} colorSwap>
                    <div className="p-6 pt-10" style={{ color:"#000" }}>
                      <h3 className="font-display text-3xl mb-3 text-black">{cs.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-900 font-bold whitespace-pre-wrap">{cs.description}</p>
                    </div>
                  </CyberpunkFrame>
                </motion.div>
              ))}

              {/* Researching loader */}
              <ResearchingLoader />
            </div>
          </section>
        </div>

{/* ═══ SKILL DOMAINS ═══ */}
<section id="domains">
  <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
    <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">SKILL DOMAINS</h2></SectionLabel>
  </motion.div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {[
   { icon:<Eye className="w-5 h-5" />,     domain:"SOC & SIEM",         tag:"DOMAIN_01", color:"#064e3b", skills:["Splunk Enterprise — Log Monitoring","Log Analysis — Pattern Correlation","Alert Triage — Priority Escalation","Incident Response — Recovery Planning","SIEM Rule Writing — Detection Tuning"] },
{ icon:<Bug className="w-5 h-5" />,     domain:"Penetration Testing", tag:"DOMAIN_02", color:"#7f1d1d", skills:["Burp Suite — Web Vulnerability Scanning","Metasploit — Exploit & Post-Exploitation","Nmap — Host & Port Enumeration","OWASP Top 10 — Risk & Remediation","Web App Testing — Security Auditing"] },
{ icon:<Search className="w-5 h-5" />,  domain:"Malware Analysis",    tag:"DOMAIN_03", color:"#78350f", skills:["YARA Rules — Threat Signature Matching","PE Analysis — Binary Header Parsing","ssdeep — Fuzzy Hash Clustering","IOC Extraction — Artifact Reporting","Forensic Logging — Evidence Collection"] },
{ icon:<Network className="w-5 h-5" />, domain:"Network Security",    tag:"DOMAIN_04", color:"#1e3a8a", skills:["Wireshark — PCAP Deep Inspection","Scapy — Packet Crafting & Simulation","Network Scanning — Asset Risk Mapping","MITM Analysis — Traffic Decoding","Protocol Forensics — Session Reconstruction"] },
{ icon:<Code2 className="w-5 h-5" />,   domain:"Programming",         tag:"DOMAIN_05", color:"#4a044e", skills:["Python — Security & Automation Scripting","Bash — System & Pipeline Automation","PowerShell — Endpoint & AD Scripting","SQLite — Log Data Management","JSON / API — Integration & Data Parsing"] },
{ icon:<Lock className="w-5 h-5" />,    domain:"Frameworks",          tag:"DOMAIN_06", color:"#0c4a6e", skills:["MITRE ATT&CK — TTP & Adversary Mapping","Cyber Kill Chain — Attack Modelling","NIST CSF — Risk & Compliance Mapping","CVE Research — Vulnerability Tracking","Threat Intelligence — Feed & IOC Analysis"] },
    ].map(({ icon, domain, tag, color, skills }, i) => (
      <motion.div key={domain} data-pako={`domain:${domain}`} initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}>
        <CyberpunkFrame cut={18} tag={tag} interactive={false} colorSwap>
          <div className="p-6 pt-8" style={{ color:"#000" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center text-white flex-shrink-0" style={{ background:"#000", borderRadius:"4px" }}>{icon}</div>
              <h3 className="font-display text-2xl text-black">{domain}</h3>
            </div>
            {/* Tree flow */}
            <div className="relative">
              {skills.map((s, si) => {
                const isLast = si === skills.length - 1;
                return (
                  <div key={s} className="relative flex gap-3">
                    <div className="flex flex-col items-center" style={{ width: 16, flexShrink: 0 }}>
                      <div
                        style={{
                          width: 7, height: 7,
                          borderRadius: "50%",
                          background: isLast ? color : "transparent",
                          border: `1.5px solid ${color}`,
                          marginTop: 5,
                          flexShrink: 0,
                        }}
                      />
                      {!isLast && (
                        <div style={{ width: 1, flex: 1, background: `${color}33`, minHeight: 10 }} />
                      )}
                    </div>
                    <div className="pb-2 flex items-start min-w-0">
                      <span className="font-mono text-xs font-bold leading-snug" style={{ color: isLast ? color : "#18181b" }}>
                        {s}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CyberpunkFrame>
      </motion.div>
    ))}
  </div>
</section>

        {/* ═══ EXPERIENCE ═══ */}
        <section id="story">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">MY EXPERIENCE</h2></SectionLabel>
          </motion.div>
          <div className="space-y-5">
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={exp.title} year={exp.year} title={exp.title}
                company={exp.company} description={exp.description} index={i + 1}
                pakoKey={`exp:${exp.title}`} />
            ))}
          </div>
        </section>

        {/* ═══ PROJECTS ═══ */}
        <section id="portfolio">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">PROJECTS</h2></SectionLabel>
          </motion.div>
          <VoyageSlider items={PROJECTS} />
        </section>

        {/* ═══ CREED ═══ */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="relative py-12 overflow-hidden" style={{ borderTop:"1px solid rgba(255,255,255,0.07)", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)" }} />
          <div className="text-center">
            <div className="font-mono text-[11px] tracking-widest text-white/48 mb-4">// OPERATIVE_CREED</div>
            <p className="font-display text-4xl md:text-6xl text-white/85 leading-tight max-w-3xl mx-auto">"The best defense is<br />understanding the attacker's mind."</p>
            <div className="mt-4 font-mono text-xs text-white/48 tracking-widest">— PRAVEEN K // CYBER ANALYST</div>
          </div>
        </motion.div>

        {/* ═══ CTF & PLATFORMS ═══ */}
        <section id="ctf">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">CTF & PLATFORMS</h2></SectionLabel>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CTF_PLATFORMS.map(({ platform, tag, level, badges, note }, i) => (
              <motion.div key={platform} data-pako={`ctf:${platform}`} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} className="h-full">
                <CyberpunkFrame cut={18} tag={tag} accent interactive={false} colorSwap className="h-full">
                  <div className="p-6 pt-8 flex flex-col h-full" style={{ color:"#000" }}>
                    <div className="flex items-center gap-2 mb-1"><Flag className="w-4 h-4 text-zinc-900 font-bold" /><h3 className="font-display text-3xl text-black">{platform}</h3></div>
                    <div className="font-mono text-xs text-zinc-900 font-bold tracking-widest mb-3 uppercase">{level}</div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {badges.map(b => <span key={b} className="font-mono text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 text-zinc-900 font-bold" style={{ background:"rgba(0,0,0,0.06)", border:"1px solid rgba(0,0,0,0.18)", clipPath:CHIP_CUT }}>{b}</span>)}
                    </div>
                    <p className="text-xs text-zinc-900 font-bold leading-relaxed">{note}</p>
                  </div>
                </CyberpunkFrame>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ═══ COMPETENCIES ═══ */}
        <section>
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">COMPETENCIES</h2></SectionLabel>
          </motion.div>
          <CyberpunkFrame cut={18} interactive={false} colorSwap>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-10" style={{ color:"#000" }}>
              {COMPETENCIES.map(({ label, pct }, i) => (
                <motion.div key={label} className="mb-4 last:mb-0" initial={{ opacity:0, x:-10 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-900 font-bold">{label}</span>
                    <span className="font-mono text-xs text-zinc-900 font-bold">{pct}%</span>
                  </div>
                  <div className="w-full h-[3px] bg-black/10">
                    <motion.div className="h-full bg-black" initial={{ width:0 }} whileInView={{ width:`${pct}%` }} viewport={{ once:true }} transition={{ duration:0.8, delay:i*0.08+0.2 }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </CyberpunkFrame>
        </section>

        {/* ═══ EDUCATION ═══ */}
        <section id="education">
          <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <SectionLabel><h2 className="font-display text-5xl md:text-7xl tracking-tighter text-white">EDUCATION</h2></SectionLabel>
          </motion.div>
          <motion.div initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} data-pako="education:degree">
            <CyberpunkFrame cut={16} interactive={false} colorSwap>
              <div className="p-6" style={{ color:"#000" }}>
                <div className="font-mono text-[11px] text-zinc-900 font-bold tracking-widest mb-2">// {PERSONAL.collegeYears} · {PERSONAL.collegeLocation.toUpperCase()}</div>
                <h3 className="font-bold text-base uppercase tracking-widest mb-1 text-black">{PERSONAL.degree}</h3>
                <p className="font-mono text-xs text-zinc-900 font-bold uppercase tracking-wider">{PERSONAL.college}</p>
              </div>
            </CyberpunkFrame>
          </motion.div>
        </section>
      </main>

      {/* ═══ CONTACT — form ═══ */}
      <section className="relative z-10" id="contact">
        <div className="py-24 px-6" style={{ background:"#050505", borderTop:"1px solid rgba(255,255,255,0.08)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="font-mono text-xs tracking-widest mb-4 text-white/55">// ESTABLISH_CONNECTION</div>
            <motion.h2 initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="font-display text-6xl md:text-8xl text-white leading-none mb-12">
              SEND MESSAGE
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
              {/* form */}
              <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
                {formState === "sent" ? (
                  <div className="flex flex-col items-start gap-4 py-12">
                    <div className="font-display text-5xl text-white">MESSAGE SENT</div>
                    <p className="font-mono text-sm text-white/50">Transmission received. I'll get back to you shortly.</p>
                    <button onClick={() => setFormState("idle")} data-pako="form:again" className="mt-4 font-mono text-xs uppercase tracking-widest px-5 py-2.5 text-white/60 hover:text-white transition-colors" style={{ border:"1px solid rgba(255,255,255,0.2)", clipPath:ACTION_CUT }}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSend} noValidate className="space-y-4">
                    {[
                      { label:"NAME",    value:formName,    setter:setFormName,    type:"text",  placeholder:"Your name",           required:true,  pako:"form:name"    },
                      { label:"EMAIL",   value:formEmail,   setter:setFormEmail,   type:"email", placeholder:"your@email.com",       required:true,  pako:"form:email"   },
                      { label:"SUBJECT", value:formSubject, setter:setFormSubject, type:"text",  placeholder:"Opportunity / inquiry", required:false, pako:"form:subject" },
                    ].map(({ label, value, setter, type, placeholder, required, pako }) => (
                      <div key={label}>
                        <label className="block font-mono text-xs tracking-widest text-white/40 mb-1.5">{label}</label>
                        <input
                          data-pako={pako}
                          type={type}
                          value={value}
                          onChange={e => setter(e.target.value)}
                          placeholder={placeholder}
                          required={required}
                          className="w-full bg-transparent font-mono text-sm text-white placeholder:text-white/42 px-4 py-3 outline-none focus:border-white/50 transition-colors"
                          style={{ border:"1px solid rgba(255,255,255,0.15)", clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)" }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block font-mono text-xs tracking-widest text-white/40 mb-1.5">MESSAGE</label>
                      <textarea
                        data-pako="form:message"
                        value={formMsg}
                        onChange={e => setFormMsg(e.target.value)}
                        placeholder="Your message..."
                        required
                        rows={5}
                        className="w-full bg-transparent font-mono text-sm text-white placeholder:text-white/42 px-4 py-3 outline-none resize-none focus:border-white/50 transition-colors"
                        style={{ border:"1px solid rgba(255,255,255,0.15)", clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)" }}
                      />
                    </div>
                    {formErr && <p className="font-mono text-xs text-red-400">{formErr}</p>}
                   // AFTER
                    <button
                     type="submit"
                     data-pako="form:submit"
                    disabled={formState === "sending"}
                    className="relative w-full py-4 font-mono font-bold uppercase tracking-widest text-sm overflow-hidden disabled:opacity-50 transition-all duration-200 active:scale-[0.98]"
                    style={{
                   clipPath: "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                   background: "#ffffff",
                   color: "#000000",
                   border: "2px solid rgba(255,255,255,0.75)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.12) inset",
                   }}
  onMouseEnter={e => {
    if (formState === "sending") return;
    e.currentTarget.style.background = "#22c55e";
    e.currentTarget.style.borderColor = "#22c55e";
    e.currentTarget.style.color = "#000000";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(34,197,94,0.5)";
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = "#ffffff";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
    e.currentTarget.style.color = "#000000";
    e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,255,255,0.12) inset";
  }}
>
  <span className="absolute left-0 top-0 h-3 w-3 bg-black/20 pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
  <span className="relative">{formState === "sending" ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
</button>
                  </form>
                )}
              </motion.div>

             {/* contact info */}
<motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="space-y-6 pt-2">
  <div>
    <div className="font-mono text-xs tracking-widest text-white/55 mb-4 ">// DIRECT_CHANNELS </div>
    <div className="space-y-3">
      {[
        { icon:<Mail className="w-4 h-4" />,     key:"btn:email",    label:"Email",       value:"https.praveen.go@gmail.com",   href:"mailto:https.praveen.go@gmail.com",     color:"#10b981" },
        { icon:<Phone className="w-4 h-4" />,    key:"btn:phone",    label:"Phone",       value:"+91 82201 89476",              href:"tel:+918220189476",                     color:"#ef4444" },
        { icon:<Linkedin className="w-4 h-4" />, key:"btn:linkedin", label:"LinkedIn",    value:"linkedin.com/in/viewpraveenk", href:"https://linkedin.com/in/viewpraveenk/", color:"#0ea5e9" },
        { icon:<Github className="w-4 h-4" />,   key:"btn:github",   label:"GitHub",      value:"github.com/praxezz",           href:"https://github.com/praxezz",            color:"#22c55e" },
        { icon:<Download className="w-4 h-4" />, key:"btn:cv",       label:"Download CV", value:"praveen's Resume",             href:"/resume.pdf",                           color:"#a855f7" },
      ].map(({ icon, key, value, label, href, color }) => (
        <a key={key} href={href} target="_blank" rel="noreferrer" data-pako={key}
          className="relative flex w-full max-w-[360px] items-center gap-5 overflow-hidden px-4 py-3 text-white/58 hover:text-white active:scale-[0.98] transition-all duration-200 group italic"
          style={{
            border:"2px solid rgba(255,255,255,0.18)",
            clipPath:CONTACT_CUT,
            background:"linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 42%, transparent 100%)",
            boxShadow:"0 0 0 1px rgba(255,255,255,0.04) inset",
            WebkitTapHighlightColor:"transparent",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.48)"; e.currentTarget.style.background="linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.055) 46%, rgba(255,255,255,0.02) 100%)"; e.currentTarget.style.boxShadow="0 0 0 1px rgba(255,255,255,0.16) inset, 0 0 24px rgba(255,255,255,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; e.currentTarget.style.background="linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 42%, transparent 100%)"; e.currentTarget.style.boxShadow="0 0 0 1px rgba(255,255,255,0.04) inset"; }}
        >
          <span className="absolute left-0 top-0 h-5 w-5 bg-white/18 pointer-events-none" style={{ clipPath:"polygon(0 0, 100% 0, 0 100%)" }} />
          <span className="absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-white/30 pointer-events-none" />
          <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-110 group-active:rotate-[-8deg]"
            style={{ background:"rgba(255,255,255,0.07)", border:`1px solid ${color}40`, clipPath:ACTION_CUT, color }}
          >{icon}</span>
          <div className="relative min-w-0">
            <div className="font-mono text-[12px] text-white/48 tracking-widest uppercase mb-0.5">{label}</div>
            <div className="font-mono text-xs break-words" style={{ color }}>{value}</div>
          </div>
          <ArrowUpRight className="relative w-3.5 h-3.5 ml-auto flex-shrink-0 opacity-45 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      ))}
    </div>
  </div>

                <div className="pt-4" style={{ borderTop:"1px solid rgba(255,255,255,0.07)" }}>
                  <div className="font-mono text-xs tracking-widest text-white/55 mb-3">// STATUS</div>
                  <div className="inline-flex items-center gap-2 px-4 py-3" style={{ border:"1px solid rgba(255,255,255,0.08)", clipPath:ACTION_CUT }}>
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background:"#ef4444" }} />
                      <span className="relative inline-flex rounded-full w-2 h-2" style={{ background:"#dc2626" }} />
                    </span>
                    <span className="font-mono text-xs text-white/50">Open to Cybersecurity Analyst & Network Engineer roles</span>
                  </div>
                </div>

                <div className="font-mono text-xs tracking-widest text-white/38 animate-pulse pt-2">
                  █ CHANNEL_OPEN // AWAITING_RESPONSE
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="relative z-10 py-16 px-8" style={{ background:"#000" }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div className="font-mono text-xs tracking-widest text-white/42 mb-6">// SYSTEM_CLOSING_STATEMENT</div>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">SECURING THE FUTURE,<br />ONE THREAT AT A TIME.</h2>
            <div className="w-24 h-[1px] bg-white/15 mx-auto mb-6" />
            <p className="font-mono text-xs text-white/55 max-w-lg mx-auto leading-relaxed tracking-wide">Every attack leaves a trace. Every trace tells a story.<br />I'm here to read that story before the damage is done.</p>
            <div className="mt-8 font-mono text-xs tracking-widest text-white/12 animate-pulse">█ EOF // SYS_UPLINK_TERMINATED</div>
          </motion.div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t py-8 px-6 relative z-10" style={{ borderColor:"rgba(255,255,255,0.06)", background:"#000" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            {[
              { icon:<Linkedin className="w-5 h-5" />, href:"https://linkedin.com/in/viewpraveenk/" },
              { icon:<Github className="w-5 h-5" />,   href:"https://github.com/praxezz" },
              { icon:<Mail className="w-5 h-5" />,     href:"mailto:https.praveen.go@gmail.com" },
            ].map(({ icon, href }, i) => <a key={i} href={href} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">{icon}</a>)}
          </div>
          <div className="font-mono text-[11px] text-white/42 tracking-widest">© 2026 PRAVEEN K // 吉 </div>
        </div>
      </footer>
    </div>
  );
}
