import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion, AnimatePresence,
  useMotionValue, useReducedMotion,
  animate as motionAnimate,
} from "framer-motion";
import pakoImg from "@/assets/pako_1782054812997.png";

/* ─────────────────────────────────────────────────────────────────
   SHUFFLE UTILITY
───────────────────────────────────────────────────────────────── */
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Deck that yields items in random order, never repeating until all
 * have been shown. Skips the last-shown item when reshuffling to
 * prevent back-to-back duplicates.
 */
class ShuffledDeck<T extends { body: string }> {
  private items: T[];
  private queue: T[] = [];
  private lastBody = "";
  constructor(items: T[]) { this.items = items; }
  next(): T {
    if (this.queue.length === 0) {
      const pool = this.items.length > 1
        ? this.items.filter(x => x.body !== this.lastBody)
        : this.items;
      this.queue = shuffled(pool);
    }
    const item = this.queue.pop()!;
    this.lastBody = item.body;
    return item;
  }
}

class SequentialDeck<T extends { body: string }> {
  private items: T[];
  private index = 0;
  constructor(items: T[]) { this.items = items; }
  next(): T {
    const item = this.items[this.index % this.items.length];
    this.index++;
    return item;
  }
}

/* ─────────────────────────────────────────────────────────────────
   SECTION MESSAGES  (rotates in order per section)
───────────────────────────────────────────────────────────────── */
const SECTION_MSGS: Record<string, { body: string }[]> = {
  home: [
    { body: "Cybersecurity Analyst & Network Engineer — Praveen is actively open to work." },
    { body: "Python IDS, 37+ MITRE ATT&CK rules, real pen-test experience. Scroll to explore." },
    { body: "Praveen has interned at Hackup Technology and IIT Kanpur — real attack simulations, not just theory." },
    { body: "Open to remote, hybrid, or on-site roles. Reach him at https.praveen.go@gmail.com." },
  ],
  metrics: [
    { body: "Key metrics: Praveen has 1+ year of focused cybersecurity learning." },
    { body: "He is building 8+ security projects from scratch, not just listed ideas." },
    { body: "25+ hands-on labs and 50+ threats investigated show steady practical work." },
  ],
  skills: [
    { body: "Arsenal: Praveen is good at Splunk SIEM, Wireshark, Burp Suite, and Nmap." },
    { body: "He uses MITRE ATT&CK, OWASP, and Kill Chain thinking to structure security work." },
    { body: "Python is his main builder tool for IDS logic, scanners, and SIEM automation." },
  ],
  "case-studies": [
    { body: "Case studies show how Praveen studies real vulnerabilities and maps attack paths." },
    { body: "Log4Shell analysis highlights detection thinking with Splunk and MITRE TTPs." },
    { body: "Wazuh SIEM RCE research shows he can read impact, detection, and remediation together." },
  ],
  domains: [
    { body: "Skill domains group Praveen's strengths into SOC, pentesting, malware, networks, coding, and frameworks." },
    { body: "SOC and SIEM are core: log analysis, alert triage, incident response, and rules." },
    { body: "His offensive and defensive domains connect, giving him a balanced analyst mindset." },
  ],
  story: [
    { body: "My experience: Praveen completed cybersecurity internships with real testing deliverables." },
    { body: "At Hackup Technology, he worked on web testing, recon, exploitation, and reports." },
    { body: "His SOC lab experience adds detection engineering, PCAP work, and threat investigation." },
  ],
  portfolio: [
    { body: "Projects: Praveen builds practical cyber tools instead of only writing theory." },
    { body: "Pherion, Praxion, Phantom, Passec, and PRISM cover detection, malware, crypto, passwords, and SIEM rules." },
    { body: "Each project points to hands-on problem solving with code, logs, and security workflows." },
  ],
  ctf: [
    { body: "CTF and platforms show Praveen keeps practicing both attack and defense." },
    { body: "TryHackMe, Hack The Box, and Blue Team Labs sharpen his SOC and pentest instincts." },
    { body: "These labs help him move from concepts to real investigation and exploitation steps." },
  ],
  education: [
    { body: "Education: His college base supports the programming, networking, and systems knowledge behind his security work." },
    { body: "2022 to 2026 marks the foundation years where his cyber focus became consistent." },
  ],
  contact: [
    { body: "Open to Cybersecurity Analyst & Network Engineer roles — remote, hybrid, or on-site." },
    { body: "Reach Praveen at https.praveen.go@gmail.com — replies within 24 h." },
    { body: "+91 82201 89476 — call or WhatsApp for quick intros or scheduling." },
    { body: "LinkedIn: linkedin.com/in/viewpraveenk — great for connecting before a formal interview." },
  ],
};

const sectionDecks: Record<string, SequentialDeck<{ body: string }>> = {};
Object.entries(SECTION_MSGS).forEach(([k, v]) => { sectionDecks[k] = new SequentialDeck(v); });
const SHORT_SECTION_CALLOUTS: Record<string, { body: string }[]> = {
  home: [
    { body: "Praveen is aiming for cybersec Analysis and networking engineer roles." },
    { body: "This page is built to show proof, not just claims." },
    { body: "Scroll slowly. Pako marked the useful parts." },
  ],
  metrics: [
    { body: "These numbers show consistent practice." },
    { body: "Projects and labs are here to prove effort." },
    { body: "Threat counts matter because judgment grows by doing." },
  ],
  skills: [
    { body: "This arsenal shows what Praveen can use in real work." },
    { body: "Tools are grouped so strengths are easy to scan." },
    { body: "Python appears here because he builds with it." },
  ],
  "case-studies": [
    { body: "He studies CVEs to understand attack paths." },
    { body: "These notes show how research becomes detection." },
    { body: "Good case studies connect impact with fixes." },
  ],
  domains: [
    { body: "Domains show where his security thinking is strongest." },
    { body: "Defense and offense are paired on purpose." },
    { body: "This helps recruiters scan his fit quickly." },
  ],
  story: [
    { body: "Experience matters because it turned labs into reports." },
    { body: "Internships gave him practical testing habits." },
    { body: "The SOC lab keeps his detection work active." },
  ],
  portfolio: [
    { body: "He built these to learn by shipping tools." },
    { body: "Each project solves a small security problem." },
    { body: "The goal is practical proof, not decoration." },
  ],
  ctf: [
    { body: "CTFs keep his practice honest and hands-on." },
    { body: "Attack labs help him defend with context." },
    { body: "Blue-team labs sharpen investigation habits." },
  ],
  education: [
    { body: "CSE gives his cyber work a strong base." },
    { body: "Networking and coding start from here." },
    { body: "This is the foundation under the security work." },
  ],
  contact: [
    { body: "This is the best place to reach Praveen." },
    { body: "Email works well for clear opportunities." },
    { body: "LinkedIn is good for a quick intro." },
  ],
};
Object.entries(SHORT_SECTION_CALLOUTS).forEach(([k, v]) => { sectionDecks[k] = new SequentialDeck(v); });

/* ─────────────────────────────────────────────────────────────────
   ELEMENT MESSAGES  (all data-pako keys)
───────────────────────────────────────────────────────────────── */
const ELEMENT_MSGS: Record<string, { title: string; body: string }[]> = {
  /* nav */
  "nav:home":      [{ title: "Home",     body: "Jump to Praveen's intro — role, bio, and all contact links." }],
  "nav:skills":    [{ title: "Arsenal",  body: "Jump to the skills section — SIEM, security tools, frameworks, networking, and scripting." }],
  "nav:story":     [{ title: "Story",    body: "Praveen's experience — internships at Hackup Technology and IIT Kanpur, plus SOC lab work since 2023." }],
  "nav:portfolio": [{ title: "Projects", body: "Five security tools built from scratch — hover any card for details." }],
  "nav:contact":   [{ title: "Contact",  body: "Ways to reach Praveen — email, LinkedIn, GitHub, phone. Actively open to work." }],

  /* projects */
  "project:Pherion": [
    { title: "Pherion — AI-Powered IDS", body: "Python + Scapy + Scikit-learn. 37+ MITRE ATT&CK rules + ML anomaly detection cuts false positives by ~30%." },
    { title: "Pherion — AI-Powered IDS", body: "SIEM-ready JSON + PCAP forensic export. Every alert is correlated to a MITRE ATT&CK technique automatically." },
  ],
  "project:Praxion": [
    { title: "Praxion — USB Malware Scanner", body: "YARA rules + PE file analysis auto-identify IOCs on USB drives. Forensic logging + secure quarantine." },
    { title: "Praxion — USB Malware Scanner", body: "VirusTotal API cross-validation with ssdeep fuzzy hashing — catches even slightly mutated malware variants." },
  ],
  "project:Phantom": [
    { title: "Phantom — Steganography & Crypto", body: "AES-256 encrypted data hidden inside images via LSB steganography. Multi-layer salt/IV protection." },
    { title: "Phantom — Steganography & Crypto", body: "Demonstrates covert-channel and insider-threat detection concepts — useful for DFIR training scenarios." },
  ],
  "project:Passec": [
    { title: "Passec — Password Strength Analyzer", body: "Entropy scoring, crack-time estimation, HIBP breach check via k-Anonymity — password never leaves device." },
    { title: "Passec — Password Strength Analyzer", body: "Pattern detection with actionable hardening advice. Teaches users WHY their password is weak, not just that it is." },
  ],
  "project:PRISM": [
    { title: "PRISM — SIEM Rule Generator", body: "Parses 5 log formats. Auto-generates Sigma YAML + Splunk SPL rules mapped to MITRE ATT&CK techniques." },
    { title: "PRISM — SIEM Rule Generator", body: "Stateful behavioral correlation — tracks failed logins, scan surges, privileged actions across sources." },
  ],

  /* buttons */
  "btn:cv":       [{ title: "Download CV",    body: "One-page resume — projects, internships, certifications, and tools. Grab it for your hiring manager." }],
  "btn:linkedin": [{ title: "LinkedIn",       body: "Connect on LinkedIn — professional conversation, endorsements, or to follow Praveen's security activity." }],
  "btn:github":   [{ title: "GitHub — praxezz", body: "All five tools are open-source here. Great way to evaluate code quality and problem-solving depth." }],
  "btn:email":    [{ title: "Email",          body: "https.praveen.go@gmail.com — best for opportunities or collaboration. Replies within 24 h." }],
  "btn:phone":    [{ title: "Phone / WhatsApp", body: "+91 82201 89476 — call or WhatsApp for quick intros or scheduling." }],
  "form:name":    [{ title: "Name",           body: "Use your real name or company name so Praveen knows who is reaching out." }],
  "form:email":   [{ title: "Email format",   body: "Add a working email like name@company.com. Pako checks the format before sending." }],
  "form:subject": [{ title: "Subject idea",   body: "A short subject helps: cybersec roles, internship, collaboration, interview, or project feedback." }],
  "form:message": [{ title: "Message format", body: "Best format: who you are, why you are reaching out, and the next step you want." }],
  "form:submit":  [{ title: "Send message",   body: "Before sending, check name, email, and message. If something is missing, Pako will point it out naturally." }],
  "form:again":   [{ title: "Send another",   body: "Clears the success state so you can write a fresh message." }],

  /* skills — arsenal */
  "skill:SIEM & Monitoring":          [{ title: "SIEM & Monitoring",          body: "Splunk primary SIEM — 37+ custom alert rules, dashboards, false-positive tuning. Core SOC Tier 1 & 2 work." }],
  "skill:Security Tools":             [{ title: "Security Tools",             body: "Wireshark for packet forensics, Burp Suite for web app testing, Nmap for recon, Metasploit for lab exploitation." }],
  "skill:Threat Detection & Response":[{ title: "Threat Detection & Response", body: "Full lifecycle — IOC/IOA correlation, PCAP analysis, malware triage, IR, RCA reports, playbook execution." }],
  "skill:Frameworks & Standards":     [{ title: "Frameworks & Standards",     body: "MITRE ATT&CK drives detection rules. Also uses Cyber Kill Chain, OWASP Top 10, NIST CSF, CVSS scoring." }],
  "skill:Networking & Protocols":     [{ title: "Networking & Protocols",     body: "Deep TCP/IP, DNS, HTTP/HTTPS, ARP, DHCP knowledge — essential for packet-level threat hunting." }],
  "skill:Programming & Scripting":    [{ title: "Programming & Scripting",    body: "Python is the primary weapon — IDS engines, malware scanners, password analyzers, SIEM rule generators." }],
  "skill:OS & Platforms":             [{ title: "OS & Platforms",             body: "Kali Linux primary attack OS, Windows Security hardening, Linux CLI fluency, VirtualBox lab environments." }],
  /* experience */
  "exp:Cybersecurity Intern": [
    { title: "Hackup Technology Internship",  body: "Burp Suite web app testing — SQLi, XSS, IDOR. Nmap recon, Metasploit exploitation, Wireshark deep-packet analysis." },
    { title: "Hackup Technology Internship",  body: "Delivered risk-rated vulnerability reports with remediation steps — the same output a junior SOC analyst produces on an engagement." },
  ],
  "exp:Ethical Hacking and Networking Intern": [
    { title: "IIT Kanpur — Techkriti 2024",   body: "Full kill-chain pen-test: recon → scanning → exploitation → post-exploitation. MITM attacks, brute-force, network sniffing." },
    { title: "IIT Kanpur — Techkriti 2024",   body: "Structured vulnerability assessment report with risk ratings and remediation recommendations, delivered to the Techkriti organisers." },
  ],
  "exp:SOC & Detection Engineering Lab": [
    { title: "SOC Home Lab — Ongoing",         body: "37+ custom MITRE ATT&CK-mapped Splunk detection rules, real PCAP analysis with Wireshark and Scapy — self-directed since 2023." },
    { title: "SOC Home Lab — Ongoing",         body: "Built Pherion — ML-powered IDS that cut false positives by ~30%. This lab is where 50+ threats were investigated." },
  ],

  /* case studies */
  "casestudy:CVE-2021-44228": [{ title: "Log4Shell RCE Analysis",    body: "Mapped the Log4Shell attack chain (JNDI injection → RCE) across MITRE TTPs. Built a Splunk detection query for JNDI patterns and documented the full incident brief." }],
  "casestudy:CVE-2026-25769": [{ title: "Wazuh SIEM RCE Analysis",   body: "Insecure deserialization in Wazuh cluster comms — a rogue worker node could gain root on the master. Analyzed impact, detection, and remediation (upgrade to patched release)." }],

  /* CTF & learning platforms */
  "ctf:TryHackMe":    [{ title: "TryHackMe — Active Learner",    body: "Completed Pre-Security, SOC Level 1, and Jr Penetration Tester paths. Guided labs for SOC, network security, and offensive techniques." }],
  "ctf:Hack The Box": [{ title: "Hack The Box — Practitioner",   body: "Starting Point, Network Fundamentals, Web Attacks tracks. Real-world exploitation scenarios on retired HTB machines." }],
  "ctf:Blue Team Labs":[{ title: "Blue Team Labs — Defender",    body: "Phishing Analysis, Log Analysis, SIEM Alerts challenges — defensive security focused on threat detection and IR." }],

  /* education */
  "education:degree": [{ title: "Education",                     body: "B.E. Computer Science & Engineering — St. Michael College of Engineering and Technology, Kalayarkoil. 2022–2026." }],

  /* skill domains */
  "domain:SOC & SIEM":          [{ title: "SOC & SIEM Domain",         body: "Splunk Enterprise, log analysis, alert triage, incident response, and SIEM rule writing — core daily SOC work." }],
  "domain:Penetration Testing": [{ title: "Penetration Testing Domain", body: "Burp Suite, Metasploit, Nmap, OWASP Top 10 — offensive toolkit used in both internships." }],
  "domain:Malware Analysis":    [{ title: "Malware Analysis Domain",    body: "YARA rules, PE analysis, ssdeep hashing, IOC extraction, forensic logging — used in Praxion." }],
  "domain:Network Security":    [{ title: "Network Security Domain",    body: "Wireshark/PCAP, Scapy, MITM analysis, protocol forensics — Pherion was built on this foundation." }],
  "domain:Programming":         [{ title: "Programming Domain",         body: "Python primary, Bash + PowerShell secondary. All five tools are Python. SQLite for forensic storage." }],
  "domain:Frameworks":          [{ title: "Frameworks Domain",          body: "MITRE ATT&CK, Cyber Kill Chain, NIST CSF, CVE research. Framework thinking guides every detection rule." }],

  /* key metrics */
  "metric:Years Learning":       [{ title: "1+ Year Focused",          body: "One year deep-focused on cybersecurity — daily labs, two internships, five tools built, 50+ threats investigated." }],
  "metric:Security Projects":    [{ title: "8+ Security Projects",     body: "8 security tools built from scratch — IDS, USB scanner, steganography, password auditor, SIEM rule generator, and more." }],
  "metric:Hands-on Labs":        [{ title: "25+ Hands-on Labs",        body: "25+ documented lab exercises — every one includes a writeup with methodology, findings, and remediation." }],
  "metric:Threats Investigated": [{ title: "50+ Threats Investigated", body: "50+ real and simulated threats triaged, correlated, and documented across internships and home lab work." }],
};

/* Per-element decks for multi-variant keys */
const elementDecks: Record<string, ShuffledDeck<{ title: string; body: string }>> = {};
const CALLOUT_MSGS: Record<string, { title: string; body: string }[]> = {
  "nav:home": [{ title: "Home", body: "Back to the quick intro." }],
  "nav:metrics": [{ title: "Metrics", body: "Jump to proof numbers." }],
  "nav:skills": [{ title: "Arsenal", body: "Jump to tools and skills." }],
  "nav:case-studies": [{ title: "Case Studies", body: "Jump to CVE research notes." }],
  "nav:domains": [{ title: "Domains", body: "Jump to his strongest areas." }],
  "nav:story": [{ title: "Experience", body: "Jump to practical work." }],
  "nav:portfolio": [{ title: "Projects", body: "Jump to built security tools." }],
  "nav:ctf": [{ title: "CTF", body: "Jump to practice platforms." }],
  "nav:education": [{ title: "Education", body: "Jump to his CSE base." }],
  "nav:contact": [{ title: "Contact", body: "Jump to reach Praveen." }],

  "project:Pherion": [{ title: "Why Pherion", body: "Praveen built this to practice real-time detection." }],
  "project:Praxion": [{ title: "Why Praxion", body: "He made this to think like a malware responder." }],
  "project:Phantom": [{ title: "Why Phantom", body: "This explores hidden data and safer crypto habits." }],
  "project:Passec": [{ title: "Why Passec", body: "He built it to explain password risk clearly." }],
  "project:PRISM": [{ title: "Why PRISM", body: "This turns messy logs into useful detection rules." }],

  "skill:SIEM & Monitoring": [{ title: "Why This Skill", body: "SOC work starts with clean alert reading." }],
  "skill:Security Tools": [{ title: "Why This Skill", body: "These tools help him verify, not guess." }],
  "skill:Threat Detection & Response": [{ title: "Why This Skill", body: "He practices finding signal inside noise." }],
  "skill:Frameworks & Standards": [{ title: "Why This Skill", body: "Frameworks keep his analysis structured." }],
  "skill:Networking & Protocols": [{ title: "Why This Skill", body: "Packets tell the story behind an alert." }],
  "skill:Programming & Scripting": [{ title: "Why This Skill", body: "Python lets him automate the hard parts." }],
  "skill:OS & Platforms": [{ title: "Why This Skill", body: "Labs need comfort across different systems." }],
  "skill:Concepts": [{ title: "Why This Skill", body: "Concepts help him connect tools to decisions." }],

  "exp:Cybersecurity Intern": [{ title: "Why It Matters", body: "This gave him real testing and report practice." }],
  "exp:Ethical Hacking and Networking Intern": [{ title: "Why It Matters", body: "This taught him the full attack flow." }],
  "exp:SOC & Detection Engineering Lab": [{ title: "Why It Matters", body: "This is where he keeps detection skills sharp." }],

  "casestudy:CVE-2021-44228": [{ title: "Why This Case", body: "Log4Shell is a great lesson in detection thinking." }],
  "casestudy:CVE-2026-25769": [{ title: "Why This Case", body: "He studied this to connect impact with fixes." }],

  "ctf:TryHackMe": [{ title: "Why This Platform", body: "Guided rooms help him build steady habits." }],
  "ctf:Hack The Box": [{ title: "Why This Platform", body: "HTB keeps his exploitation practice realistic." }],
  "ctf:Blue Team Labs": [{ title: "Why This Platform", body: "Blue-team labs train calm investigation." }],

  "education:degree": [{ title: "Why Education", body: "CSE gives his cyber work a strong base." }],

  "domain:SOC & SIEM": [{ title: "Why This Domain", body: "This is closest to daily analyst work." }],
  "domain:Penetration Testing": [{ title: "Why This Domain", body: "Attack practice helps him defend better." }],
  "domain:Malware Analysis": [{ title: "Why This Domain", body: "Malware study builds careful evidence handling." }],
  "domain:Network Security": [{ title: "Why This Domain", body: "Network traces reveal what really happened." }],
  "domain:Programming": [{ title: "Why This Domain", body: "Code helps him build instead of only observe." }],
  "domain:Frameworks": [{ title: "Why This Domain", body: "Frameworks make his thinking easier to trust." }],

  "metric:Years Learning": [{ title: "Why This Metric", body: "It shows consistency over a quick trend." }],
  "metric:Security Projects": [{ title: "Why This Metric", body: "Built projects prove hands-on curiosity." }],
  "metric:Hands-on Labs": [{ title: "Why This Metric", body: "Labs turn theory into reflex." }],
  "metric:Threats Investigated": [{ title: "Why This Metric", body: "Each investigation trains better judgment." }],
};
const calloutDecks: Record<string, ShuffledDeck<{ title: string; body: string }>> = {};

function getCalloutDeck(key: string): ShuffledDeck<{ title: string; body: string }> | null {
  const variants = CALLOUT_MSGS[key];
  if (!variants) return null;
  if (!calloutDecks[key]) calloutDecks[key] = new ShuffledDeck(variants);
  return calloutDecks[key];
}

function getElementDeck(key: string): ShuffledDeck<{ title: string; body: string }> | null {
  const variants = ELEMENT_MSGS[key];
  if (!variants) return null;
  if (!elementDecks[key]) elementDecks[key] = new ShuffledDeck(variants);
  return elementDecks[key];
}

/* ─────────────────────────────────────────────────────────────────
   FUN FACTS  (external cybersecurity only, shuffled deck)
───────────────────────────────────────────────────────────────── */
const FUN_FACTS_RAW: { title: string; body: string }[] = [
  { title: "Cyber Fact", body: "95% of cybersecurity breaches are caused by human error — phishing is still the #1 attack vector worldwide." },
  { title: "Cyber Fact", body: "The first computer virus — Creeper — appeared in 1971 and printed 'I'm the creeper, catch me if you can!' on infected terminals." },
  { title: "Cyber Fact", body: "A hacker attack occurs every 39 seconds on average. Most are automated bots scanning for unpatched services." },
  { title: "Cyber Fact", body: "YARA rules — the pattern-matching language — were invented by Victor Alvarez at VirusTotal in 2008 and are now industry-standard for malware analysis." },
  { title: "Cyber Fact", body: "The average cost of a data breach in 2024 was $4.88 million — the highest ever recorded, per the IBM Security Report." },
  { title: "Cyber Fact", body: "SHA-256 has 2²⁵⁶ possible outputs — more than the estimated number of atoms in the observable universe. Brute-forcing it is physically impossible." },
  { title: "Cyber Fact", body: "MITRE ATT&CK now documents 200+ adversary techniques across 14 tactics, all sourced from real-world threat actor behaviour." },
  { title: "Cyber Fact", body: "Zero-day exploits on the black market can sell for $1M+. A full iOS exploit chain can fetch up to $2.5M on broker platforms." },
  { title: "Cyber Fact", body: "The MITRE D3FEND framework is the defensive mirror of ATT&CK — it maps specific defensive techniques against every offensive tactic." },
  { title: "Cyber Fact", body: "Ransomware attacks increased 73% year-over-year in 2023. Average ransom payment in 2024 exceeded $2 million." },
  { title: "Cyber Fact", body: "The Morris Worm of 1988 infected ~6,000 machines — roughly 10% of the entire internet at the time — and created the first DOS attack." },
  { title: "Cyber Fact", body: "Stuxnet, discovered in 2010, was the first malware designed to cause physical damage — it destroyed Iranian nuclear centrifuges by spinning them too fast." },
];
const funFactDeck = new ShuffledDeck(FUN_FACTS_RAW);

/* ─────────────────────────────────────────────────────────────────
   SAFE POSITIONS
───────────────────────────────────────────────────────────────── */
const SIZE = 96;
const NAV  = 44;
const PAD  = 20;

function getSafePositions() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return [
    { x: PAD,             y: NAV + PAD },
    { x: vw - SIZE - PAD, y: NAV + PAD },
    { x: PAD,             y: (vh - SIZE) * 0.45 },
    { x: vw - SIZE - PAD, y: (vh - SIZE) * 0.45 },
    { x: PAD,             y: vh - SIZE - PAD },
    { x: vw - SIZE - PAD, y: vh - SIZE - PAD },
  ];
}

function nearestSafe(cx: number, cy: number) {
  const positions = getSafePositions();
  let best = positions[0], minD = Infinity;
  positions.forEach(p => {
    const d = Math.hypot(p.x - cx, p.y - cy);
    if (d < minD) { minD = d; best = p; }
  });
  return best;
}

/* ─────────────────────────────────────────────────────────────────
   DOM HELPERS
───────────────────────────────────────────────────────────────── */
function findPakoKey(el: Element | null): string | null {
  let node = el as HTMLElement | null;
  while (node && node !== document.body) {
    if (node.dataset?.pako) return node.dataset.pako;
    node = node.parentElement;
  }
  return null;
}

function isPakoSelf(el: Element | null): boolean {
  let node = el as HTMLElement | null;
  while (node && node !== document.body) {
    if (node.dataset?.pakoIgnore === "true") return true;
    node = node.parentElement;
  }
  return false;
}

function getGenericMsg(el: HTMLElement): { title?: string; body: string } | null {
  const tag  = el.tagName.toLowerCase();
  const role = el.getAttribute("role") || "";
  const isInteractive =
    ["a", "button", "input", "select", "textarea"].includes(tag) ||
    ["button", "link", "tab", "menuitem", "checkbox", "radio"].includes(role);

  if (!isInteractive) {
    const parent = el.parentElement;
    if (parent) {
      const ptag = parent.tagName.toLowerCase();
      if (["button", "a"].includes(ptag) || parent.getAttribute("role") === "button") {
        return getGenericMsg(parent);
      }
    }
    return null;
  }

  const label =
    el.getAttribute("aria-label") ||
    el.getAttribute("title") ||
    (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60);

  if (!label || label.length < 2) return null;

  if (tag === "a") {
    const href = el.getAttribute("href") || "";
    if (href.startsWith("http")) return { title: label.slice(0, 40), body: "External link — opens in a new tab." };
    return { body: label };
  }

  return { body: label };
}

/* ─────────────────────────────────────────────────────────────────
   TYPING HOOK  — skips animation for very short text
───────────────────────────────────────────────────────────────── */
function useTyping(text: string, speed = 16) {
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone]           = useState(true);

  useEffect(() => {
    if (!text) { setDisplayed(""); setDone(true); return; }
    // For short text (< 40 chars) skip the typing animation
    if (text.length < 40) { setDisplayed(text); setDone(true); return; }
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}

/* ─────────────────────────────────────────────────────────────────
   BUBBLE TYPE
───────────────────────────────────────────────────────────────── */
type BubbleData = {
  id: number;            /* monotonic — forces AnimatePresence re-key */
  title?: string;
  body: string;
};

/* ─────────────────────────────────────────────────────────────────
   SPEECH BUBBLE
───────────────────────────────────────────────────────────────── */
function SpeechBubble({
  data, posX, posY, onClose,
}: {
  data: BubbleData; posX: number; posY: number; onClose: () => void;
}) {
  const { displayed, done } = useTyping(data.body, 12);
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isRight  = posX > vw / 2;
  const isBottom = posY > vh * 0.55;
  const margin = 10;
  const gap = 12;
  const bubbleWidth = Math.min(242, Math.max(188, vw - margin * 2));

  const desiredLeft = isRight ? -gap - bubbleWidth : SIZE + gap;
  const clampedLeft = Math.min(
    vw - margin - bubbleWidth - posX,
    Math.max(margin - posX, desiredLeft)
  );
  const horizStyle: React.CSSProperties = { left: clampedLeft, right: "auto" };
  const vertStyle: React.CSSProperties = isBottom
    ? { bottom: 0, top: "auto", maxHeight: Math.max(120, posY + SIZE - margin) }
    : { top: 0, bottom: "auto", maxHeight: Math.max(120, vh - posY - margin) };

  const frameBtn: React.CSSProperties = {
    fontFamily: "monospace", fontSize: 9, letterSpacing: "0.18em",
    textTransform: "uppercase", padding: "3px 10px",
    background: "#000", color: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "5px",
    cursor: "pointer", transition: "color 0.15s, border-color 0.15s",
  };

  return (
    <motion.div
      key={data.id}
      initial={{ opacity: 0, scale: 0.95, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -4 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className="absolute z-50 pointer-events-auto overflow-hidden"
      style={{
        ...horizStyle, ...vertStyle,
        width: bubbleWidth,
        background: "linear-gradient(145deg, rgba(0,0,0,0.94), rgba(8,12,16,0.88))",
        backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.2)",
        clipPath: "polygon(12px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 12px)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 32px rgba(0,0,0,0.74), 0 0 22px rgba(255,255,255,0.06)",
        overflowY: "auto",
      }}
    >
      <div className="absolute top-0 left-0 h-4 w-4 bg-white/18 pointer-events-none" style={{ clipPath:"polygon(0 0, 100% 0, 0 100%)" }} />
      <div className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-white/35 pointer-events-none" />
      <div style={{ height: 1.5, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.62), transparent)" }} />
      <div className="px-3.5 pt-3 pb-3">
        {data.title && (
          <div className="font-mono text-[8px] tracking-[0.2em] uppercase mb-1.5 text-white/48">// {data.title}</div>
        )}

        <p className="font-mono text-[11px] leading-[1.55] text-white/84">
          {displayed}
          {!done && (
            <span className="inline-block w-[3px] h-[10px] ml-0.5 align-middle bg-white/55"
              style={{ animation: "pulse 0.7s ease-in-out infinite" }} />
          )}
        </p>
      </div>
      <button onClick={onClose}
        className="absolute top-1.5 right-2 font-mono text-[10px] text-white/22 hover:text-white/55 transition-colors"
        aria-label="Dismiss">✕</button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN PAKO COMPONENT
───────────────────────────────────────────────────────────────── */
export function Pako() {
  const prefersReduced = useReducedMotion();

  /* Position */
  const ip  = useRef(() => typeof window !== "undefined"
    ? { x: window.innerWidth - SIZE - PAD, y: window.innerHeight - SIZE - PAD }
    : { x: 0, y: 0 });
  const start = ip.current();
  const mvX = useMotionValue(start.x);
  const mvY = useMotionValue(start.y);
  const [bubblePos, setBubblePos] = useState(start);

  /* Drag */
  const isDragging = useRef(false);

  /* Roam */
  const roamTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Bubble — monotonic id ensures AnimatePresence re-animates each new message */
  const bubbleIdRef = useRef(0);
  const [bubble, setBubble] = useState<BubbleData | null>(null);
  const lastBodyRef = useRef("");

  /* Safe bubble setter — deduplicates by body, avoids flicker */
  const showBubble = useCallback((data: Omit<BubbleData, "id">) => {
    if (data.body === lastBodyRef.current) return; // skip exact repeat
    bubbleIdRef.current++;
    setBubble({ ...data, id: bubbleIdRef.current });
    lastBodyRef.current = data.body;
  }, []);

  const clearBubble = useCallback(() => {
    setBubble(null);
    lastBodyRef.current = "";
  }, []);

  /* Section tracking (ref — no re-render needed) */
  const sectionKeyRef = useRef("home");
  const [, setSectionKey] = useState("home"); // only for observer dep correctness — not used in render

  /* Hover key */
  const hoverKey = useRef<string | null>(null);

  /* Dismiss timer */
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearDismiss = useCallback(() => { if (dismissTimer.current) clearTimeout(dismissTimer.current); }, []);
  const scheduleDismiss = useCallback((ms = 7500) => {
    clearDismiss();
    dismissTimer.current = setTimeout(() => { clearBubble(); hoverKey.current = null; }, ms);
  }, [clearDismiss, clearBubble]);

  /* Fun fact timer */
  const funFactTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Pointer-move debounce */
  const moveDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Snap to position */
  const snapTo = useCallback((target: { x: number; y: number }, soft = true) => {
    if (prefersReduced || !soft) { mvX.set(target.x); mvY.set(target.y); }
    else {
      motionAnimate(mvX, target.x, { type: "spring", stiffness: 28, damping: 16, mass: 1.4 });
      motionAnimate(mvY, target.y, { type: "spring", stiffness: 28, damping: 16, mass: 1.4 });
    }
    setBubblePos(target);
  }, [prefersReduced, mvX, mvY]);

  /* Show section message */
  const showSection = useCallback((key: string) => {
    const deck = sectionDecks[key];
    if (!deck) return;
    const msg = deck.next();
    showBubble({ body: msg.body });
    scheduleDismiss(6500);
  }, [showBubble, scheduleDismiss]);

  /* Show element message */
  const showElement = useCallback((key: string) => {
    const deck = getCalloutDeck(key) ?? getElementDeck(key);
    if (!deck) return;
    const msg = deck.next();
    showBubble(msg);
    scheduleDismiss(6200);
  }, [showBubble, scheduleDismiss]);

  /* Roaming */
  const scheduleRoam = useCallback(() => {
    if (prefersReduced) return;
    if (roamTimer.current) clearTimeout(roamTimer.current);
    const wait = 12000 + Math.random() * 14000;
    roamTimer.current = setTimeout(() => {
      if (isDragging.current || hoverKey.current) { scheduleRoam(); return; }
      const cx = mvX.get(), cy = mvY.get();
      const positions = getSafePositions();
      const candidates = positions.filter(p => Math.abs(p.x - cx) > 120 || Math.abs(p.y - cy) > 120);
      const next = candidates[Math.floor(Math.random() * candidates.length)];
      if (next) snapTo(next, true);
      scheduleRoam();
    }, wait);
  }, [prefersReduced, mvX, mvY, snapTo]);

  useEffect(() => {
    scheduleRoam();
    return () => { if (roamTimer.current) clearTimeout(roamTimer.current); };
  }, [scheduleRoam]);

  /* Resize clamp */
  useEffect(() => {
    const onResize = () => {
      const vw = window.innerWidth, vh = window.innerHeight;
      const clamped = {
        x: Math.max(PAD, Math.min(mvX.get(), vw - SIZE - PAD)),
        y: Math.max(NAV + PAD, Math.min(mvY.get(), vh - SIZE - PAD)),
      };
      mvX.set(clamped.x); mvY.set(clamped.y);
      setBubblePos(clamped);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [mvX, mvY]);

  /* Section observer — stable refs, no re-create on sectionKey change */
  const showSectionRef = useRef(showSection);
  showSectionRef.current = showSection;

  useEffect(() => {
    const ids = ["home", "metrics", "skills", "case-studies", "domains", "story", "portfolio", "ctf", "education", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && id !== sectionKeyRef.current) {
          sectionKeyRef.current = id;
          setSectionKey(id);
          if (!hoverKey.current) {
            showSectionRef.current(id);
          }
        }
      }, { threshold: 0.12, rootMargin: "0px 0px 0px 0px" });
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []); // stable — never re-creates

  /* Universal hover detection via debounced pointermove */
  useEffect(() => {
    const showElementRef = { current: showElement };
    showElementRef.current = showElement;

    const onMove = (e: PointerEvent) => {
      if (moveDebounce.current) clearTimeout(moveDebounce.current);

      moveDebounce.current = setTimeout(() => {
        /* fast path: nothing to do */
        const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
        if (!el || isPakoSelf(el)) return;

        /* 1. explicit data-pako */
        const pakoKey = findPakoKey(el);
        if (pakoKey) {
          if (pakoKey !== hoverKey.current) {
            hoverKey.current = pakoKey;
            clearDismiss();
            showElementRef.current(pakoKey);
          }
          return;
        }

        /* 2. generic interactive fallback */
        const genericMsg = getGenericMsg(el);
        const genericId  = genericMsg ? `__g:${genericMsg.body}` : null;
        if (genericId && genericId !== hoverKey.current) {
          hoverKey.current = genericId;
          clearDismiss();
          showBubble(genericMsg!);
          scheduleDismiss(4200);
          return;
        }

        /* 3. non-interactive — schedule dismiss if leaving a hotspot */
        if (!genericId && hoverKey.current) {
          hoverKey.current = null;
          scheduleDismiss(2500);
        }
      }, 50);
    };

    const onLeave = () => {
      if (moveDebounce.current) clearTimeout(moveDebounce.current);
      if (hoverKey.current) { hoverKey.current = null; scheduleDismiss(2500); }
    };

    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (isPakoSelf(el)) return;
      const pakoKey = findPakoKey(el);
      if (pakoKey) {
        hoverKey.current = pakoKey;
        clearDismiss();
        showElement(pakoKey);
        scheduleDismiss(6200);
        return;
      }
      const msg = getGenericMsg(el);
      if (msg) {
        hoverKey.current = `__g:${msg.body}`;
        clearDismiss();
        showBubble(msg);
        scheduleDismiss(5200);
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("click", onClick, { capture: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("click", onClick, { capture: true });
      if (moveDebounce.current) clearTimeout(moveDebounce.current);
    };
  }, [showElement, showBubble, scheduleDismiss, clearDismiss]);

  /* Fun facts — idle timer (50-80s), uses shuffled deck */
  const scheduleFunFact = useCallback(() => {
    if (funFactTimer.current) clearTimeout(funFactTimer.current);
    funFactTimer.current = setTimeout(() => {
      if (!hoverKey.current) {
        const fact = funFactDeck.next();
        showBubble(fact);
        scheduleDismiss(6500);
      }
      scheduleFunFact();
    }, 50000 + Math.random() * 30000);
  }, [showBubble, scheduleDismiss]);

  // Show a greeting bubble on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      showBubble({
        title: "Welcome",
        body: "Hi! I'm Pako, your guide to this portfolio. Feel free to explore praveen's projects, experience, skills and more."
      });
      scheduleDismiss(8000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onPakoSay = (e: Event) => {
      const detail = (e as CustomEvent<{ title?: string; body?: string }>).detail;
      if (!detail?.body) return;
      hoverKey.current = "__event";
      clearDismiss();
      showBubble({ title: detail.title, body: detail.body });
      scheduleDismiss(10000);
    };
    window.addEventListener("pako:say", onPakoSay as EventListener);
    return () => window.removeEventListener("pako:say", onPakoSay as EventListener);
  }, [showBubble, scheduleDismiss, clearDismiss]);

  /* Tour logic disabled */
  // Guide tour has been removed permanently

  useEffect(() => () => { clearDismiss(); }, [clearDismiss]);

  /* Drag constraints */
  const dragConstraints = {
    left:   PAD,
    top:    NAV + PAD,
    right:  (typeof window !== "undefined" ? window.innerWidth  : 1280) - SIZE - PAD,
    bottom: (typeof window !== "undefined" ? window.innerHeight : 720)  - SIZE - PAD,
  };

  return (
    <>
      <motion.div
        className="fixed z-50"
        data-pako-ignore="true"
        style={{ width: SIZE, height: SIZE, left: 0, top: 0, x: mvX, y: mvY, touchAction: "none" }}
        drag dragMomentum={false} dragElastic={0.06} dragConstraints={dragConstraints}
        onDragStart={() => {
          isDragging.current = true;
          clearDismiss(); clearBubble();
          if (document.body.style) document.body.style.cursor = "grabbing";
        }}
        onDragEnd={() => {
          isDragging.current = false;
          const target = nearestSafe(mvX.get(), mvY.get());
          motionAnimate(mvX, target.x, { type: "spring", stiffness: 200, damping: 28 });
          motionAnimate(mvY, target.y, { type: "spring", stiffness: 200, damping: 28 });
          setBubblePos(target);
          scheduleRoam();
          if (document.body.style) document.body.style.cursor = "";
        }}
      >
        {/* Speech bubble */}
        <AnimatePresence mode="wait">
          {bubble && (
            <SpeechBubble
              key={bubble.id}
              data={bubble}
              posX={bubblePos.x}
              posY={bubblePos.y}
              onClose={() => { clearDismiss(); clearBubble(); }}
            />
          )}
        </AnimatePresence>

        {/* PAKO float + click */}
        <motion.div
          className="relative w-full h-full pointer-events-auto"
          style={{ cursor: "grab" }}
          animate={prefersReduced ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          onClick={() => {
            if (isDragging.current) return;
            if (bubble) { clearDismiss(); clearBubble(); }
            else showSection(sectionKeyRef.current || "home");
          }}
        >
          {/* Ambient glow */}
          <div aria-hidden="true" className="absolute pointer-events-none" style={{
            bottom: 2, left: "50%", transform: "translateX(-50%)",
            width: SIZE * 0.75, height: 16,
            background: "radial-gradient(ellipse, rgba(40,155,255,0.22) 0%, transparent 70%)",
            filter: "blur(5px)",
          }} />
          <img
            src={pakoImg} alt="PAKO guide companion" draggable={false}
            className="pako-glitch"
            style={{
              width: SIZE, height: SIZE, objectFit: "contain",
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 7px rgba(40,155,255,0.28)) brightness(1.06)",
              display: "block",
            }}
          />
        </motion.div>

        <div aria-live="polite" aria-atomic="true" className="sr-only">{bubble?.body}</div>
      </motion.div>

      <AnimatePresence>
      </AnimatePresence>
    </>
  );
}
