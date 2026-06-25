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
    stack:    "Python, YARA, PE File Analysis, VirusTotal API, ssdeep",
    color:    "#22c55e",
    details:  [
      "Architected a custom IOC identification engine capable of executing complex YARA rule sets against localized storage mediums.",
      "Programmed a deep heuristic analysis module to identify and flag zero-day obfuscated payloads that easily bypass traditional static signatures.",
      "Established a secure, cryptographically isolated quarantine vault to safely contain suspected malware without risking host OS infection.",
      "Developed a background daemon using cross-platform hooks to instantly detect USB mass storage insertion and trigger autonomous scans.",
      "Integrated ssdeep fuzzy hashing to classify polymorphic malware variants by comparing byte-level similarity scores.",
      "Engineered real-time Portable Executable (PE) inspection algorithms to uncover suspicious imports, packed sections, and anomalous entropy."
    ],
    treeFlow: [
      { step: "Step 01 → USB Connected", sub: ["Device Detection", "Auto Scan Trigger"] },
      { step: "Step 02 → Multi-layer Scan", sub: ["YARA Rules", "Heuristic Engine", "PE Inspection"] },
      { step: "Step 03 → Threat Detection", sub: ["Malware Found", "Risk Score Classification"] },
      { step: "Step 04 → Response & Output", sub: ["Quarantine", "Forensic Logs", "Safe Device"] },
      { step: "Output", sub: ["Secure System"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
  {
    title:    "Phantom",
    subtitle: "Steganography & Cryptography Tool",
    stack:    "Python, AES-256, LSB Steganography, ZLIB",
    color:    "#a855f7",
    details:  [
      "Formulated a multi-layered cryptographic wrapper using AES-256-GCM, fortified with cryptographically secure salts and randomized IV generation.",
      "Developed a robust Command-Line Interface (CLI) that seamlessly encrypts raw binaries and embeds them invisibly within high-resolution images.",
      "Utilized advanced Least Significant Bit (LSB) steganography techniques to establish covert communication channels resistant to visual detection.",
      "Automated statistical entropy profiling to ensure generated stego-images maintain natural noise floors and evade standard steganalysis tools.",
      "Implemented seamless ZLIB compression pre-processing to maximize hidden payload capacity without degrading the carrier image's quality.",
      "Designed a strict file-integrity hashing mechanism (SHA-256) to guarantee data authenticity and prevent tampering during extraction."
    ],
    treeFlow: [
      { step: "Step 01 → Input Secret", sub: ["Text Message", "File Selection"] },
      { step: "Step 02 → Encryption", sub: ["AES-256", "Password Protection"] },
      { step: "Step 03 → Image Embedding", sub: ["LSB Algorithm", "Integrity Check"] },
      { step: "Step 04 → Secure Output", sub: ["Stego Image", "Invisible Storage"] },
      { step: "Output", sub: ["Covert Channel"] },
    ],
    github:   "https://github.com/praxezz?tab=repositories",
  },
  {
    title:    "Passec",
    subtitle: "Password Strength Analyzer & Breach Checker",
    stack:    "Python, Hashlib, Requests, HIBP API, SHA-1, k-Anonymity",
    color:    "#eab308",
    details:  [
      "Coded a rigorous entropy calculator that precisely estimates offline crack-times based on character diversity, length, and known pattern matching.",
      "Integrated the Have I Been Pwned (HIBP) API using the k-Anonymity model, allowing breach verification via partial SHA-1 hashes without exposing passwords.",
      "Built an advanced heuristic pattern detector to catch common substitutions (e.g., '@' for 'a') and sequential strings, providing specific hardening advice.",
      "Engineered a localized dictionary matching algorithm utilizing highly optimized structures to cross-reference against extensive leaked password lists instantly.",
      "Incorporated a high-entropy passphrase generation tool utilizing system-level cryptographic randomness, creating highly resilient secrets on demand.",
      "Designed an interactive security scoring matrix that ranks passwords from 'Critical Risk' to 'Unhackable', delivering instant visual feedback."
    ],
    treeFlow: [
      { step: "Step 01 → Password Input", sub: ["User Password", "Policy Validation"] },
      { step: "Step 02 → Security Analysis", sub: ["Entropy Calculation", "Pattern Detection"] },
      { step: "Step 03 → Breach Lookup", sub: ["Offline Database", "Hash Comparison"] },
      { step: "Step 04 → Scoring Output", sub: ["Strength Score", "Crack Time"] },
      { step: "Output", sub: ["Security Report"] },
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
