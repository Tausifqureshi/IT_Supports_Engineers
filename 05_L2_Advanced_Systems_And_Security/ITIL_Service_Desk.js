// ========================================= ITIL 4 Foundation, Escalation Matrix & RCA ======================================= //
// Target: Module 5 (Section B) — Universal IT Support & Service Desk Operations (Enterprise Standard)
// ================================================================================

// ========================================= ITIL & Service Desk Process Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. ITIL (Information Technology Infrastructure Library) world-standard framework hai jo enterprise IT companies (MNCs, Airports, Banks) me support processes ko chalata hai.
// 2. Floor par har issue ko handle karne ka ek formalized escalation path (L1 -> L2 -> L3) aur Root Cause Analysis (RCA) standard hota hai taaki critical business services down na hon.
// 3. Format: Niche 4 core ITIL processes, Escalation Matrix, Knowledge Base (KB) lifecycle aur RCA 5-Whys methodology di gayi hai.

// ================================================================================


// ========================================= 1. ITIL 4 Core Processes =========================================== //
// ================================================================================

// 1. Incident Management:
//    - Definition: Kisi bhi IT service me aayi achanak rukaawat (unplanned disruption) ko jald se jald theek karke service restore karna.
//    - Goal: "Speed of resolution" (Kaam turant chalu hona chahiye, chahe temporary workaround lagana pade).
//    - Example: User ka Outlook crash ho raha hai ya boarding pass printer jam ho gaya.

// 2. Service Request Management:
//    - Definition: User ki standard demand jo pehle se pre-approved hoti hai (isme koi cheez tooti ya kharab nahi hoti).
//    - Example: Naya laptop setup, password reset, Shared folder access, extra monitor request.

// 3. Problem Management:
//    - Definition: Ek hi incident ke baar-baar aane par uska Root Cause (Asli Jad) dhoondna taaki wo dobara kabhi na ho.
//    - Difference: Incident = "Aag bujhana" (Quick fix) | Problem = "Aag kyun lagi investigate karna" (Permanent fix).
//    - Output: Known Error Database (KEDB) aur permanent bug fix.

// 4. Change Management (Change Enablement):
//    - Definition: Production infrastructure me koi bhi naya update, server reboot, ya firewall rule apply karne se pehle CAB (Change Advisory Board) se approval lena.
//    - Standard Change -----> Low risk, pre-approved (e.g. monthly patch update).
//    - Normal Change -----> Requires CAB review & testing plan (e.g. core switch replacement).
//    - Emergency Change -----> Critical outage fix approved by ECAB (e.g. ransomware recovery).


// ================================================================================


// ========================================= 2. Escalation Matrix (L1 to L2 to L3 Flow) ========================== //
// ================================================================================

// 1. Level 1 (L1) — Service Desk / First Contact Resolution (FCR):
//    - Target: First 15 minutes.
//    - Responsibilities: Call/Ticket intake, user authentication, basic troubleshooting (password reset, restart service, flush DNS, cable check).
//    - Escalation Trigger: Agar 15 minute me fix na ho, ya issue domain permissions/server crash ka ho -> Escalate to L2.

// 2. Level 2 (L2) — Desktop Support / Senior Field Technicians:
//    - Target: 2 to 4 hours.
//    - Responsibilities: Deep desktop OS issues, registry clean-up, event logs audit, network switch port inspection, hardware swap (RAM/SSD), printer driver packages.
//    - Escalation Trigger: Agar issue core switch, firewall rule, storage SAN, ya proprietary vendor software bug ka ho -> Escalate to L3.

// 3. Level 3 (L3) / Subject Matter Experts (SME) & Vendors:
//    - Responsibilities: Network Engineers (Cisco/Fortinet), Server Administrators, Database Admins, aur External Hardware Vendors (HP, Dell, SITA, Microsoft).


// ================================================================================


// ========================================= 3. Root Cause Analysis (RCA) & 5-Whys Methodology ================== //
// L2 Interview Ka Golden Question — "Aap kisi recurring issue ka RCA kaise karoge?"
// ================================================================================

// [ The Famous 5-Whys Technique Example: Print Spooler Crash ]
// 1. Why 1: Printer print kyun nahi nikal raha tha?
//    -> Answer: Kyunki Windows Print Spooler service stopped ho gayi thi.
// 2. Why 2: Print Spooler service stopped kyun hui?
//    -> Answer: Kyunki service crash ho gayi thi.
// 3. Why 3: Service crash kyun hui?
//    -> Answer: Kyunki Event Viewer Event ID 1000 me faulting module 'hp_driver.dll' dikha raha tha.
// 4. Why 4: Driver ne crash kyun kiya?
//    -> Answer: Kyunki user ne ek corrupt non-standard PDF file print command bheji thi jo old 32-bit driver handle nahi kar paya.
// 5. Why 5: Purana driver kyun use ho raha tha? (ROOT CAUSE)
//    -> Answer: Kyunki print server par updated Type 4 64-bit isolated driver package deploy nahi kiya gaya tha!
// -> Permanent Solution: Driver package ko Isolated mode me update kiya gaya aur Type 4 driver deploy hua. Issue solved permanently!


// ================================================================================


// ========================================= 4. Knowledge Base (KB) Article Lifecycle =========================== //
// ================================================================================

// 1. Knowledge Base (KB) Kya Hai?
//    - Central technical documentation portal (ServiceNow Knowledge / Confluence) jahan har problem ka step-by-step verified solution likha hota hai.

// 2. Standard KB Article Structure:
//    - Title -----> Clear search keyword (e.g. "How to fix Outlook Send/Receive Error 0x8004010F").
//    - Symptoms -----> User ko kya error dikhti hai.
//    - Root Cause -----> Issue kyun aata hai.
//    - Step-by-Step Fix -----> Screenshots aur exact commands ke sath solution.
//    - Verification -----> Check kaise karein ki solve ho gaya.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
