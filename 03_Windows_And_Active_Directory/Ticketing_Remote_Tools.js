// ========================================= Ticketing Systems, ITIL & Remote Tools ======================================= //
// Target: Universal IT Support & Service Desk Analyst — Module 3 Technical Blueprint (Corporate, Airports & MSPs)
// ================================================================================

// ========================================= Ticketing & ITIL in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Enterprise IT me bina ticket ke koi kaam nahi hota ("No Ticket, No Work" rule). Har call, email ya issue ka ticket banta hai taaki SLA track ho sake.
// 2. ITIL (Information Technology Infrastructure Library) world-standard framework hai jo incidents, service requests aur changes ko manage karta hai.
// 3. Format: Niche Remote Desktop troubleshooting tools, ServiceNow/Jira Ticket Priority Matrix (P1-P4), SLA rules, aur ITIL terminology practical floor standard me di gayi hai.

// ================================================================================


// ========================================= 1. Remote Desktop Troubleshooting Tools ============================= //
// ================================================================================

// 1. mstsc — Microsoft Terminal Services Client (Native Windows RDP)
//    - Shortcut: [Win + R] -> mstsc -> Enter.
//    - Protocol & Port: RDP (Remote Desktop Protocol) — TCP Port 3389.
//    - Floor Use: Domain ke andar doosre computer ya server ka desktop access lene ke liye.
//    - Common Issue & Fix:
//      "The remote computer requires Network Level Authentication (NLA)":
//      Fix: User ke PC par sysdm.cpl -> Remote tab -> "Allow remote connections to this computer" enable karo aur NLA check karo.

// 2. AnyDesk / TeamViewer / Quick Assist:
//    - Floor Use: Jab user work-from-home (VPN se bahar) ho ya RDP domain firewall allow na kare, tab 9-digit AnyDesk address ya Quick Assist code se secure remote session liya jata hai.
//    - Security Rule: Hamesha user se screen dekhne aur control lene se pehle verbal permission lo!


// ================================================================================


// ========================================= 2. Ticket Priority Matrix (P1 se P4 SLA Hierarchy) ================= //
// Interview Ka #1 Question — "Aap P1 aur P3 ticket me prioritize kaise karoge?"
// ================================================================================

// 1. P1 — CRITICAL (Severity 1):
//    - Definition: Poori company ka core production system down hai, flight operations halt ho gaye hain, ya poora data center band hai. (Multiple users ya poora department impacted).
//    - Example: Airport par CUPPS check-in system offline ho gaya, ya Exchange mail server crash ho gaya.
//    - Response SLA: 10 se 15 Minute | Resolution Target: 2 se 4 Ghante.
//    - Action: L1 turant Major Incident Management (MIM) team aur On-Call L2/L3 engineers ko bridge call par bulata hai.

// 2. P2 — HIGH (Severity 2):
//    - Definition: Ek poora department ya critical business service severely degraded hai, lekin koi workaround available hai.
//    - Example: Finance department ka ERP portal bohot slow hai jisse billing atki hui hai.
//    - Response SLA: 30 Minute | Resolution Target: 4 se 8 Ghante.

// 3. P3 — MEDIUM (Severity 3):
//    - Definition: Single user ka issue hai jisse uska normal kaam ruka hua hai, par baaki poori company theek chal rahi hai.
//    - Example: Ek manager ka Outlook crash ho raha hai ya laptop ka network adapter disconnect ho gaya hai.
//    - Response SLA: 1 se 2 Ghante | Resolution Target: 1 se 2 Business Days (8 to 24 Hours).

// 4. P4 — LOW (Severity 4 / Service Request):
//    - Definition: Minor inquiry, standard request, ya informational query jisse kisi ka live kaam nahi ruka.
//    - Example: Naya mouse/keyboard request, monitor ka extra cable chahiye, ya MS Visio software installation request.
//    - Response SLA: 4 se 8 Ghante | Resolution Target: 3 se 5 Business Days.


// ================================================================================


// ========================================= 3. ITIL 4 Core Processes (Floor Definitions) ======================== //
// ================================================================================

// 1. Incident Management:
//    - Definition: Kisi bhi service me aayi hui achanak rukaawat (unplanned disruption) ko jald se jald theek karke normal service restore karna.
//    - Motto: "Restore normal service operation as quickly as possible."
//    - Example: "Printer kaam nahi kar raha", "Internet band ho gaya".

// 2. Service Request:
//    - Definition: User ki standard demand jo pehle se company policy me pre-approved hoti hai (isme koi cheez tooti ya kharab nahi hoti).
//    - Example: "Mera password reset kar do", "Shared folder ka access de do", "Naya laptop setup chahiye".

// 3. Problem Management:
//    - Definition: Ek hi incident ke baar-baar aane par uska Root Cause (Asli Jad) dhoondna taaki wo dobara kabhi na ho.
//    - Example: Spooler hafte me 5 baar crash ho raha tha, Problem Ticket me trace hua ki corrupt vendor driver responsible tha, us driver ko update karke permanent fix diya gaya.

// 4. Change Management (RFC - Request For Change):
//    - Definition: Production infrastructure me koi bhi naya update, firewall rule ya software rollout karne se pehle CAB (Change Advisory Board) se approval lena taaki business down na ho.


// ================================================================================


// ========================================= 4. Standard Technical Resolution Notes Format ====================== //
// ServiceNow / Jira Ticket Close Karte Waqt Professional Note Kaise Likhte Hain
// ================================================================================

// Rule: Ticket close karte waqt sirf "Resolved" ya "Fixed" likhna amateur lagta hai. Professional engineer hamesha 4-step note likhta hai:

// [ STANDARD RESOLUTION NOTE TEMPLATE ]
// --------------------------------------------------------------------------------
// Issue Reported : User unable to print boarding passes from Counter 12 (Spooler error).
// Root Cause     : Corrupted .SHD print spool job locked in System32 spool directory.
// Action Taken   : 1. Stopped Print Spooler service via services.msc.
//                  2. Purged stuck .SPL and .SHD files from C:\Windows\System32\spool\PRINTERS.
//                  3. Successfully restarted Print Spooler service.
// Verification   : Printed test boarding pass successfully in presence of user. User confirmed working.
// Status         : Closed / Resolved.
// --------------------------------------------------------------------------------

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
