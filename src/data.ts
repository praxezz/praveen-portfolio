// ─────────────────────────────────────────────────────────────────
//  data.ts  —  ALL your portfolio content lives here.
//  Edit this file to update anything on the portfolio.
//  No design or React knowledge needed — just change the values!
// ─────────────────────────────────────────────────────────────────

// ── Personal Info ─────────────────────────────────────────────────
export const PERSONAL = {
  degree:         "B.E. — Computer Science & Engineering",
  college:        "St. Michael College of Engineering and Technology",
  collegeYears:   "2022–2026",
  collegeLocation:"Kalayarkoil",
};

// ── Key Metrics ───────────────────────────────────────────────────
// accent symbols: ▲ ◈ ◉ ★ ◆ ⬡ ⬢ ⬣
export const KEY_METRICS = [
  { value: "1+",  label: "Years Learning",       sub: "Cybersecurity focused",   accent: "▲" },
  { value: "8+",  label: "Security Projects",    sub: "Built from scratch",       accent: "◈" },
  { value: "25+", label: "Hands-on Labs",         sub: "Completed & documented",  accent: "◉" },
  { value: "50+", label: "Threats Investigated", sub: "Vulnerabilities analysed", accent: "★" },
];

// ── Skills / Arsenal — Categorised ───────────────────────────────
// Each object is a category shown as its own card in the ARSENAL section.
// Add/remove items freely within each category, or add a new category block.
export const SKILLS = [
  {
    category: "Networking & Protocols",
    items: [
      "OSI Model",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Packet Analysis",
      "VPN",
      "Network Scanning",
      "Firewalls",
      "ARP",
      "DHCP",
      "Port Enumeration",
    ],
  },
  {
    category: "Security Tools",
    items: [
      "Wireshark",
      "Nmap",
      "Sysmon",
      "Burp Suite",
      "Metasploit",
      "Kali Linux",
    ],
  },
  {
    category: "SIEM & Monitoring",
    items: [
      "Splunk",
      "Event Monitor",
      "Log Analysis",
      "Incident Ticketing",
      "Alert Triage",
      
    ],
  },
  {
    category: "Threat Detection & Response",
    items: [
      "Threat Hunting",
      "IOC Analysis",
      "IDS/IPS",
      "Incident Response",
      "PCAP Analysis",
      "Root Cause Analysis",
      "Alert Escalation",
      "Threat Intelligence",
    ],
  },
  {
    category: "Frameworks & Standards",
    items: [
      "MITRE ATT&CK",
      "Cyber Kill Chain",
      "CIS Controls",
      "OWASP Top 10",
      "NIST CSF",
    ],
  },
  {
    category: "Programming & Scripting",
    items: [
      "Python",
      "Bash / Shell",
      "PowerShell",
      "SQL",
      "IoT Development",
      "PHP"

    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────
// To add a project: copy one block, paste below, fill in the fields.
export const PROJECTS = [
  {
    title:    "Pherion",
    subtitle: "AI-Powered IDS & SOC Platform",
    stack:    "Python, Scapy, Scikit-learn, Pandas, SQLite, Splunk",
    color:    "#ef4444",
    details:  [
      "Engineered 37+ custom MITRE ATT&CK detection rules mapping network anomalies directly to specific threat actor tactics and techniques.",
      "Trained a Scikit-learn Machine Learning pipeline to analyze baseline network behavior, successfully reducing false positives by ~30%.",
      "Designed an automated forensic export module capable of generating SIEM-compliant JSON logs and full PCAP traces for deep incident response.",
      "Implemented a real-time deep packet inspection (DPI) engine utilizing Scapy to intercept and dissect malicious protocol headers.",
      "Built an interactive Splunk integration framework to stream live alerts, rendering dynamic dashboards of origin nodes and attack severity.",
      "Deployed a multi-threaded packet queuing system to handle high-throughput traffic without dropping critical security events."
    ],
    treeFlow: [
      { step: "Step 01 → Network Traffic", sub: ["Monitor Packets", "Collect Logs"] },
      { step: "Step 02 → Detection Engine", sub: ["Signature Detection", "ML Anomaly Detection"] },
      { step: "Step 03 → Threat Analysis", sub: ["MITRE ATT&CK Mapping", "Severity Classification"] },
      { step: "Step 04 → SOC Response", sub: ["Live Statistics", "JSON/SIEM Logs", "PCAP Export"] },
      { step: "Output", sub: ["Incident Response"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
  {
    title:    "Praxion",
    subtitle: "USB Malware Scanner & Threat Detection",
    stack:    "Python, YARA, PE File Analysis, VirusTotal API, ppdeep (ssdeep-compatible)",
    color:    "#22c55e",
    details:  [
      "Developed a background daemon to instantly detect USB mass storage insertion and trigger bounded parallel scans using ThreadPoolExecutor via an interactive terminal interface.",
      "Architected a custom IOC identification engine executing complex YARA rules, alongside cross-platform binary analysis for PE, ELF, Mach-O, and malicious scripts.",
      "Programmed a deep heuristic analysis module and integrated ppdeep (ssdeep-compatible) fuzzy hashing to identify zero-day payloads and polymorphic variants.",
      "Integrated optional ClamAV and VirusTotal APIs to provide an additional layer of signature-based and cloud-backed threat verification.",
      "Established a secure, cryptographically isolated quarantine vault to safely contain suspected malware and generate JSON evidence trails without risking host OS infection."
    ],
    treeFlow: [
      { step: "Step 01 → USB Connected", sub: ["Device Detection", "Auto Scan Trigger", "Interface Initialized"] },
      { step: "Step 02 → Multi-layer Scan", sub: ["YARA Rules", "Heuristic Engine", "PE/ELF/Mach-O Inspection"] },
      { step: "Step 03 → Threat Detection", sub: ["Malware Found", "ClamAV / VirusTotal Verification"] },
      { step: "Step 04 → Response & Output", sub: ["JSON Evidence Quarantine", "Forensic Logs", "Parallel Scanning"] },
      { step: "Output", sub: ["Secure System", "Scan Summary"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
  {
    title:    "Phantom",
    subtitle: "Steganography & Cryptography Tool",
    stack:    "Python, AES-256, LSB Steganography, ZLIB",
    color:    "#a855f7",
    details:  [
      "Developed a robust CLI utilizing Least Significant Bit (LSB) steganography to seamlessly embed encrypted raw binaries and text invisibly within high-resolution images.",
      "Formulated a cryptographic wrapper using AES-256-CBC with PBKDF2 key derivation (100k iterations) and strict SHA-256 integrity hashing to prevent tampering.",
      "Implemented seamless ZLIB pre-processing to maximize payload capacity and integrated real-time capacity checking directly within the terminal interface.",
      "Automated statistical entropy profiling to ensure generated stego-images maintain natural noise floors and evade standard steganalysis tools.",
      "Introduced a highly efficient batch mode capable of hiding or extracting the same covert payload across entire directories simultaneously.",
      "Designed a gradient-styled terminal interface featuring ASCII/ANSI image previews and an accessible built-in Quick Start Guide."
    ],
    treeFlow: [
      { step: "Step 01 → Input Secret", sub: ["Text Message", "File Selection", "Batch Mode"] },
      { step: "Step 02 → Encryption", sub: ["AES-256-CBC", "PBKDF2 Key Derivation", "ZLIB Compression"] },
      { step: "Step 03 → Image Embedding", sub: ["LSB Algorithm", "Capacity Check", "Integrity Check"] },
      { step: "Step 04 → Secure Output", sub: ["Stego Image", "ASCII Preview", "Invisible Storage"] },
      { step: "Output", sub: ["Covert Channel", "Interface Overview"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
  {
    title:    "Passec",
    subtitle: "Password Strength Analyzer & Breach Checker",
    stack:    "Python, Hashlib, Requests, HIBP API, SHA-1, k-Anonymity",
    color:    "#eab308",
    details:  [
      "Coded a rigorous entropy calculator that models precise crack-times across four distinct attacker profiles (online and offline) based on character diversity and length.",
      "Integrated the Have I Been Pwned (HIBP) API using the k-Anonymity model, enabling safe breach verification via partial SHA-1 hashes.",
      "Built a pattern-aware heuristic detector utilizing localized dictionaries to identify l33t-speak, keyboard walks, dates, and sequential strings instantly.",
      "Designed an interactive security scoring matrix that ranks passwords from 'Critical Risk' to 'Unhackable', including compliance checks against NIST 800-63B and PCI-DSS v4.0.",
      "Introduced offline-first batch auditing via CSV/TXT, wrapped in a cyberpunk-themed terminal interface with instant visual feedback.",
      "Incorporated a high-entropy password and diceware generation tool utilizing system-level cryptographic randomness to create resilient secrets on demand."
    ],
    treeFlow: [
      { step: "Step 01 → Password Input", sub: ["User Password", "Batch Audit", "Policy Validation"] },
      { step: "Step 02 → Security Analysis", sub: ["Pattern Detection", "Entropy Calculation", "Compliance Check"] },
      { step: "Step 03 → Breach Lookup", sub: ["HIBP k-Anonymity API", "Offline Database"] },
      { step: "Step 04 → Scoring Output", sub: ["Strength Score", "Crack Time Profiles", "NIST/PCI-DSS"] },
      { step: "Output", sub: ["Security Report", "Secure Generation"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
  {
    title:    "PRISM",
    subtitle: "SIEM Rule Generator from Raw Logs",
    stack:    "Python, Rich (CLI UX), regex parsing pipeline",
    color:    "#3b82f6",
    details:  [
      "Architected a stateful, high-performance regex parsing pipeline tailored for auth.log, Apache access logs, Windows Security events, and varied data exports.",
      "Created an automated tracking system that monitors failed logins, port scan surges, and privileged execution attempts per source IP against defined thresholds.",
      "Engineered an automated rule translation layer that converts raw log insights into deployable Sigma YAML and Splunk SPL detection rules instantly.",
      "Built a self-contained validation module that cross-references generated detection rules against a repository of sample malicious logs before live deployment.",
      "Designed a flexible MITRE mapping engine that dynamically assigns appropriate tactics (e.g., Initial Access) and specific CVE identifiers to extracted artifacts.",
      "Implemented a normalized JSON output formatter to ensure parsed log events can be universally ingested by any modern SIEM platform seamlessly."
    ],
    treeFlow: [
      { step: "Step 01 → Import Logs", sub: ["Windows & Apache", "Auth Events"] },
      { step: "Step 02 → Pattern Analysis", sub: ["Regex Matching", "Behavioral Detection"] },
      { step: "Step 03 → Threat Mapping", sub: ["MITRE ATT&CK", "Confidence Score"] },
      { step: "Step 04 → Rule Generation", sub: ["Sigma Rule", "SPL Query"] },
      { step: "Output", sub: ["SIEM Integration"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
];

// ── Experience ────────────────────────────────────────────────────
// To add a role: copy one block, paste below, fill in the fields.
export const EXPERIENCE = [
  {
    year:        "June 2025",
    title:       "Cybersecurity Intern",
    company:     "Hackup Technology Pvt. Ltd",
    description: "Conducted web application security testing using Burp Suite — identified and documented SQLi, XSS, and IDOR vulnerabilities. Performed network reconnaissance with Nmap, controlled exploitation with Metasploit, and deep packet analysis using Wireshark. Delivered risk-rated vulnerability reports.",
  },
  {
    year:        "July 2024",
    title:       "Ethical Hacking and Networking",
    company:     "Vital Skills × Techkriti — IIT Kanpur",
    description: "Executed full penetration testing kill chain: reconnaissance, scanning, exploitation, and post-exploitation phases. Performed MITM attacks, brute-force credential testing, and network sniffing in controlled lab environments. Produced structured vulnerability assessment reports with risk ratings and remediation recommendations.",
  },
  {
    year:        "2023 — Ongoing",
    title:       "SOC & Detection Engineering Lab",
    company:     "Self-Directed · Independent Research",
    description: "Built a home SOC lab to practise threat hunting and detection engineering. Wrote 37+ custom MITRE ATT&CK-mapped detection rules in Splunk, analysed real PCAP captures with Wireshark and Scapy, and developed Pherion — an ML-powered IDS that reduced false positives by ~30%.",
  },
];

// ── CTF & Learning Platforms ──────────────────────────────────────
export const CTF_PLATFORMS = [
  {
    platform: "TryHackMe",
    tag:      "THM",
    level:    "Active Learner",
    badges:   ["Pre-Security", "SOC Level 1", "Jr Penetration Tester"],
    note:     "Guided learning paths in SOC, network security, and offensive techniques.",
  },
  {
    platform: "Hack The Box",
    tag:      "HTB",
    level:    "Practitioner",
    badges:   ["Starting Point", "Network Fundamentals", "Web Attacks"],
    note:     "Real-world exploitation scenarios on retired machines and challenges.",
  },
  {
    platform: "Blue Team Labs",
    tag:      "BTL",
    level:    "Defender Track",
    badges:   ["Phishing Analysis", "Log Analysis", "SIEM Alerts"],
    note:     "Defensive security challenges focused on threat detection and incident response.",
  },
];

// ── Competency Bars ───────────────────────────────────────────────
// pct = 0–100 (percentage bar fill)
export const COMPETENCIES = [
  { label: "Threat Detection & Analysis",  pct: 88 },
  { label: "Vulnerability Assessment",      pct: 82 },
  { label: "Incident Response",             pct: 78 },
  { label: "Security Tool Development",     pct: 85 },
  { label: "OSINT & Threat Intelligence",   pct: 75 },
  { label: "Report Writing",                pct: 80 },
];

// ── Case Studies ──────────────────────────────────────────────────
export const CASE_STUDY = [
  {
    tag:         "CVE-2021-44228",
    title:       "LOG4SHELL RCE Analysis",
    description: "Analyzed Log4Shell RCE flaw, mapped attack chain across MITRE TTPs, built Splunk detection query for JNDI patterns, documented full incident brief.",
  },
  {
    tag:         "CVE-2026-25769",
    title:       "WAZUH SIEM RCE Analysis",
    description: "Investigated CVE-2026-25769, a critical RCE vulnerability caused by insecure deserialization in Wazuh cluster communications.\n\n• Impact: A rogue worker node could execute arbitrary code on the master node with root privileges, leading to full system compromise.\n• Action: Analyzed the vulnerability impact, detection methods, and remediation through upgrading to the patched Wazuh release.",
  },
];
