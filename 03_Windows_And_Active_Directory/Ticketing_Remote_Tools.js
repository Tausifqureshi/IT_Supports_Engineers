// ========================================= Ticketing Systems, ITIL & Remote Tools ======================================= //
// Target: Universal IT Support & Service Desk Analyst — Module 3 Technical Blueprint (Corporate, Airports & MSPs)
// ================================================================================

// ========================================= Ticketing & ITIL in IT Support Kya Hai? ======================================= //
// 1. Enterprise IT me bina ticket ke koi kaam nahi hota ("No Ticket, No Work" rule). Har call, email ya issue ka ticket banta hai taaki SLA track ho sake.
// 2. ITIL (Information Technology Infrastructure Library) world-standard framework hai jo incidents, service requests aur changes ko manage karta hai.
// 3. Format: Niche Remote Desktop troubleshooting tools, ServiceNow/Jira Ticket Priority Matrix (P1-P4), SLA rules, aur ITIL terminology practical floor standard me di gayi hai.

// ================================================================================


// ========================================= 1. Remote Desktop Troubleshooting Tools ============================= //
// ================================================================================

// 1. mstsc (Native Windows RDP - Remote Desktop Protocol):
//    - Command: `Win + R` -> type `mstsc` -> Enter (Port: TCP 3389).
//    - Kaam: Corporate domain ke andar doosre PC ya server ka live GUI control lene ke liye.
//    - Kaise Chalayein (Step-by-Step Clicks):
//      1. "Computer:" box me target IP address ya Hostname daalo -> "Connect" button par LEFT-CLICK karo.
//      2. Credentials Window par Username aur Password enter karo:
//         - Corporate Rule: Username me hamesha `DOMAIN\username` (e.g. `CORP\johndoe`) ya machine ka local account ho toh `.\Administrator` likhna zaroori hai.
//      3. "OK" par LEFT-CLICK karo -> Remote screen live connect ho jayegi!
//    - Floor Tricks:
//      - Screen Lag Fix: "Show Options" -> "Experience" tab me "LAN (10 Mbps or higher)" select karo.
//      - Kiosk Shadowing (Airports & Billing Counters): 
//        Command: `mstsc /v:TargetPC /shadow:1 /control` (User ko bina logout kiye live screen dekhne aur control karne ke liye).

// 2. Quick Assist / AnyDesk (Off-Domain & Cloud Remote):
//    - Command: `Win + R` -> type `quickassist` -> Enter (Direct Keyboard Shortcut: `Win + Ctrl + Q`).
//    - Kaam: Jab employee Work-From-Home (WFH) ho, VPN fail ho jaye, ya corporate RDP block ho.
//    - Quick Assist Window Khulne Ke Baad (Step-by-Step Clicks):
//      1. Support Engineer: Samne "Help someone" button par LEFT-CLICK karega -> Microsoft account login karne par 6-digit security code screen par generate hoga.
//      2. End User Action: User ko phone/chat par wo 6-digit code batao -> User apne Quick Assist me "Code from assistant" box me code daal kar "Submit" par LEFT-CLICK karega.
//      3. Engineer Control: User ki screen aate hi top-bar me "Take control" button par LEFT-CLICK karo -> User "Allow" karega -> Live mouse aur keyboard control start!
//    - AnyDesk Option: AnyDesk launch karo -> User se uska 9-digit address pucho -> Box me type karke "Connect" par LEFT-CLICK karo -> User side se "Accept" click karega.


// ================================================================================


// ========================================= 2. Ticket Priority Matrix & SLA Management ========================= //
// Interview Ka #1 Question — "Aap P1 aur P3 ticket me prioritize kaise karoge aur SLA kaise bachaoge?"
// ================================================================================

// 1. P1 — CRITICAL (Severity 1):
//    - Definition: Poori company ka core production system down hai, flight operations halt ho gaye hain, ya poora data center band hai. (Multiple users ya poora department impacted).
//    - Example: Airport par CUPPS check-in system offline ho gaya, ya corporate email server down ho gaya.
//    - Response SLA: 10 se 15 Minute | Resolution Target: 2 se 4 Ghante.
//    - Action: L1 turant Major Incident Management (MIM) team aur On-Call L2/L3 engineers ko bridge call par connect karta hai.

// 2. P2 — HIGH (Severity 2):
//    - Definition: Ek poora department ya critical business service severely degraded hai, lekin workaround available hai.
//    - Example: Finance department ka ERP portal bohot slow hai jisse billing ruki hui hai.
//    - Response SLA: 30 Minute | Resolution Target: 4 se 8 Ghante.

// 3. P3 — MEDIUM (Severity 3):
//    - Definition: Single user ka issue hai jisse uska normal daily kaam ruka hua hai, par baaki company normal chal rahi hai.
//    - Example: Ek user ka Outlook crash ho raha hai ya laptop ka network adapter disconnect ho gaya hai.
//    - Response SLA: 1 se 2 Ghante | Resolution Target: 1 se 2 Business Days (8 to 24 Hours).

// 4. P4 — LOW (Severity 4 / Service Request):
//    - Definition: Minor inquiry, standard request, ya software upgrade jisse kisi ka live kaam ruka nahi hai.
//    - Example: Naya mouse/keyboard chahiye, extra monitor cable request, ya MS Visio install karwana.
//    - Response SLA: 4 se 8 Ghante | Resolution Target: 3 se 5 Business Days.

// 5. SLA Clock Management & Ticket Lifecycle:
//    - SLA Breach: Agar SLA target time cross ho gaya, toh ticket "Breached" mark hota hai aur direct management escalation trigger hoti hai.
//    - SLA Pause Rule ("Pending Customer" / "On Hold"):
//      Jab user call na uthaye, email ka reply na de, ya vendor physical replacement part ka wait ho, toh ticket status "Pending Customer" ya "On Hold" set karte hain.
//      Floor Impact: Isse ticket ka SLA countdown timer freeze (pause) ho jata hai, aur engineer ka SLA score safe rehta hai.
//    - Ticket Lifecycle Flow:
//      `New` -> `Assigned` -> `In Progress` -> `Pending Customer` (agar wait ho) -> `Resolved` -> `Closed`.

// 6. SLA vs OLA vs UC Agreements (Interview Core Concept):
//    - SLA (Service Level Agreement): IT Service Provider aur End User/Client ke beech ka promised delivery contract.
//    - OLA (Operational Level Agreement): Internal IT teams ke beech ka agreement (e.g. Service Desk aur Network Team ka turnaround time).
//    - UC (Underpinning Contract): Company aur Third-party vendors (Dell, HP, ISP) ke beech ka hardware repair contract.


// ================================================================================


// ========================================= 3. ITIL 4 Core Processes (Floor Definitions) ======================== //
// ================================================================================

// 1. Incident Management:
//    - Definition: Unplanned disruption ko jald se jald theek karke normal business service restore karna.
//    - Motto: "Restore normal service operation as quickly as possible."
//    - Example: "Printer kaam nahi kar raha", "Internet band ho gaya".

// 2. Service Request:
//    - Definition: User ki standard demand jo pre-approved hoti hai (isme koi system toota ya kharab nahi hota).
//    - Example: "Password reset", "Shared folder access", "Naya laptop provisioning".
//    - Re-categorization Rule: Agar user naye mouse ke liye Incident bana de, toh L1 engineer use convert karke Service Request me convert karta hai taaki Incident SLA audit kharab na ho.

// 3. Problem Management:
//    - Definition: Ek hi incident ke baar-baar aane par uska Root Cause (Asli Jad) dhoond kar permanent fix deploy karna.
//    - Example: Spooler hafte me 5 baar crash hone par vendor driver bug pakad kar update karna.

// 4. Change Management (RFC - Request For Change):
//    - Definition: Production infrastructure me koi bhi major update, firewall rule ya software rollout karne se pehle CAB (Change Advisory Board) se formal approval lena.

// 5. FCR (First Call Resolution - Interview Metric):
//    - Definition: Pehle hi call ya touchpoint par bina L2/L3 ko escalate kiye ticket ko solve kar dena (Standard Service Desk target: 70% - 80%).


// ================================================================================


// ========================================= 4. Standard Technical Resolution Notes Format ====================== //
// ServiceNow / Jira Ticket Update & Resolution Guidelines
// ================================================================================

// 1. Work Notes vs Customer Comments (Confidentiality & ITIL Standard):
//    - Additional Comments (Customer Visible):
//      Yeh update direct user ko email notification ban kar jata hai. Hamesha polite, respectful aur simple words use karein.
//    - Work Notes (Internal Only):
//      Yeh notes sirf IT team, L2/L3 engineers aur auditors ko dikhte hain. Isme internal IP addresses, admin commands, server logs aur technical diagnostic trail likha jata hai jo user se hide rakhna zaroori hai.

// 2. Mandatory Fields on Ticket Closure (ServiceNow / Jira):
//    - Configuration Item (CI): Jis laptop, printer ya server par issue aaya uska exact Hostname / Asset Tag (e.g. `DXB-T3-CHK-014`).
//    - Resolution Code: Dropdown se standard code select karna (e.g. `Solved (Permanently)`, `Solved by Workaround`, `User Error`).

// 3. Standard Resolution Note Template:
// Rule: Ticket close karte waqt sirf "Resolved" ya "Fixed" likhna amateur lagta hai. Professional engineer hamesha 4-step note likhta hai:

// [ STANDARD RESOLUTION NOTE TEMPLATE ]
// --------------------------------------------------------------------------------
// Issue Reported : User unable to print boarding passes from Counter 12 (Spooler error).
// Root Cause     : Corrupted .SHD print spool job locked in System32 spool directory.
// Action Taken   : 1. Stopped Print Spooler service via services.msc.
//                  2. Purged stuck .SPL and .SHD files from C:\Windows\System32\spool\PRINTERS.
//                  3. Successfully restarted Print Spooler service.
// Verification   : Printed test boarding pass successfully in presence of user. User confirmed working.
// Resolution Code: Solved (Permanently) | CI: DXB-T3-CHK-014
// Status         : Closed / Resolved.
// --------------------------------------------------------------------------------

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
