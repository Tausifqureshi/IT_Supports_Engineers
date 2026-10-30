// ========================================= Endpoint Security, BitLocker, VPN & Patching ======================================= //
// Target: Module 5 (Section E) — Universal IT Support & L2 Security Operations (Enterprise Standard)
// ================================================================================

// ========================================= Endpoint Security in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Enterprise IT me data security sabse pehli priority hoti hai. L1 aur L2 engineer ko hardware encryption (BitLocker), remote connection (VPN), patch deployment (WSUS) aur threat detection (EDR & Phishing) par daily standard workflows ke sath kaam karna padta hai.
// 2. Format: Niche BitLocker recovery, WSUS update triage, Enterprise Antivirus management, VPN tunnel diagnostics aur Phishing email analysis steps L1 vs L2 division ke sath diye gaye hain.

// ================================================================================


// ========================================= 1. BitLocker Drive Encryption (L1 vs L2 Troubleshooting) ============= //
// ================================================================================

// [ L1 ENGINEER KA KAAM: Recovery Key Retrieval & Hardware Status Check ]
// 1. BitLocker Recovery Key Kahan Se Milti Hai (Key Retrieval):
//    - Scenario: Employee ne laptop boot kiya aur Blue Screen par 48-digit BitLocker Recovery Key maang raha hai.
//    - Source 1 (Active Directory): `Win + R` -> `dsa.msc` -> Find Computer -> Properties -> "BitLocker Recovery" tab.
//    - Source 2 (Entra ID / Intune): `entra.microsoft.com` -> Devices -> All Devices -> Computer Name -> "BitLocker Keys" -> "Show recovery key".
//    - Source 3 (Self-Service): User ke personal Microsoft account portal `myaccount.microsoft.com` par.

// 2. TPM Hardware Health & Readiness Check:
//    - Command: `Win + R` -> type `tpm.msc` -> Enter.
//    - Kaam: Check karna ki motherboard ka TPM security chip active hai ya nahi.
//    - Verification: Status me "The TPM is ready for use" aur Specification Version "2.0" dikhna chahiye.


// [ L2 ENGINEER KA KAAM: Boot Loop Fix, Forensics & TPM Reset ]
// 1. BitLocker Recovery Prompt Loop Fix (Har Reboot Par Key Maangne Ka Permanent Solution):
//    - Root Cause: BIOS update ya Secure Boot state change hone se TPM measurement PCR values mismatch ho jati hain.
//    - L2 Permanent Fix via CMD (Admin):
//      Step 1: Recovery key daal kar Windows me login karo.
//      Step 2: Protection suspend karo:
//              Command: manage-bde -protectors -disable C:
//      Step 3: System ko ek baar normally RESTART karo (TPM nayi PCR values capture kar leta hai).
//      Step 4: Login ke baad protection wapas enable karo:
//              Command: manage-bde -protectors -enable C:
//      (Iske baad system kabhi dobara key nahi mangega!).

// 2. TPM Chip Glitch / Clear Workflow:
//    - Action: Agar TPM corrupt ho jaye aur BitLocker turn-on na ho:
//      `tpm.msc` -> Right pane me "Clear TPM..." par click -> System Reboot -> BIOS screen par physical confirmation prompt par "F12" ya "F1" dabakar accept karo.

// 3. BitLocker CLI Forensics & 48-Digit Key Retrieval:
//    - Terminal Se Current Drive Ki 48-Digit Recovery Key Dekhna:
//      Command: manage-bde -protectors -get C:
//      (Screen par "Numerical Password" ke neeche 48-digit key aur uski unique Password ID print karta hai).
//    - BitLocker Encryption Status & Percentage Check Karna:
//      Command: manage-bde -status C:
//      (Verify karta hai ki drive fully encrypted 100% hai ya background encryption atka hua hai).


// ================================================================================


// ========================================= 2. Windows Update & WSUS Patch Management ========================== //
// ================================================================================

// 1. WSUS (Windows Server Update Services) Architecture:
//    - Role: Enterprise LAN me bandwidth bachane ke liye local WSUS server patches distribute karta hai.
//    - Client GPO Registry Check:
//      Regedit: `HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`
//      Verify: `WUServer` aur `WUStatusServer` me company ke WSUS server ka URL (e.g. `http://wsus.company.local:8530`) hona chahiye.

// 2. Force Client WSUS Reporting & Sync (L1/L2 Command):
//    - Action: Client PC turant server par update check report bheje aur approved patches pull kare.
//    - Commands (Admin CMD):
//      Legacy Windows: `wuauclt /reportnow /detectnow`
//      Modern Windows 10/11: `usoclient StartScan` -> `usoclient StartDownload` -> `usoclient StartInstall`

// 3. Stuck Windows Update Universal Reset Script (Deep L2 Fix):
//    - Problem: Update "Downloading 0%" ya "Failed to install - Error 0x80240034" par atki hui hai.
//    - Resolution Steps via CMD (Admin):
//      Step 1: Command: net stop wuauserv && net stop bits && net stop cryptsvc
//      Step 2: Command: ren C:\Windows\SoftwareDistribution SoftwareDistribution.bak
//      Step 3: Command: ren C:\Windows\System32\catroot2 catroot2.bak
//      Step 4: Command: net start wuauserv && net start bits && net start cryptsvc
//      Step 5: Command: usoclient StartScan


// ================================================================================


// ========================================= 3. Enterprise Antivirus & Endpoint Detection (EDR) ================= //
// ================================================================================

// 1. Windows Defender for Endpoint / CrowdStrike / SentinelOne:
//    - Daily Floor Tasks (L1):
//      - Definition Updates Verify Karna:
//        Command: mpcmdrun.exe -SignatureUpdate
//      - Quick / Full Malware Scan Trigger Karna:
//        Command: mpcmdrun.exe -Scan -ScanType 2
//      - False Positive Whitelisting: Agar internal software block ho jaye, toh specific file path ko Exclusion list me add karna.

// 2. Incident Response & Host Network Isolation (Critical L2 Action):
//    - Scenario: Device par Ransomware ya Trojan detected alert aaya.
//    - L1 Immediate Action: User ko turant Ethernet LAN cable unplug aur Wi-Fi OFF karne ko bolna.
//    - L2 Central Console Action: CrowdStrike Falcon ya Microsoft Defender Security Center console se single-click "Network Contain / Isolate Device" trigger karta hai.
//      (Device corporate network aur internet se cut ho jata hai, sirf security team ke investigation tunnel se live rehta hai).


// ================================================================================


// ========================================= 4. Enterprise VPN Troubleshooting (SSL VPN vs IPsec) ================= //
// ================================================================================

// 1. VPN Protocols:
//    - SSL VPN (Cisco AnyConnect, FortiClient, Palo Alto GlobalProtect) : Port 443 TCP use karta hai (Home/Hotel Wi-Fi par block nahi hota).
//    - IPsec / IKEv2 : UDP Port 500 / 4500 use karta hai (Site-to-site branch connection).

// 2. Split Tunneling vs Full Tunneling:
//    - Full Tunneling : 100% internet traffic company firewall se guzarta hai.
//    - Split Tunneling : Sirf company ke internal servers (10.x.x.x) VPN se jate hain, baaki personal internet home Wi-Fi se jata hai.

// 3. Top 4 VPN Support Issues & Fixes (L1 vs L2):
//    - Issue 1: "Virtual Network Adapter (TAP/TUN) Failed" (L1):
//      Fix: Device Manager -> Network Adapters -> VPN TAP adapter par right-click -> Uninstall Device -> Client app restart/repair karo.
//    - Issue 2: "Authentication Failed / Certificate Expired" (L1):
//      Fix: AD account password expiry check karo aur `certmgr.msc` me corporate machine/user certificate validity check karo.
//    - Issue 3: "VPN connects but Intranet website by Name nahi khul rahi (DNS Suffix Missing)" (L1/L2):
//      Fix: `ipconfig /all` me VPN adapter ka "Connection-specific DNS Suffix" (e.g. `corp.company.com`) check karo. Agar missing hai toh FQDN resolve nahi hota.
//    - Issue 4: "VPN connects but ERP portal page load timeout (MTU Black Hole)" (L2):
//      Root Cause: Home Wi-Fi ke bade packets VPN tunnel me drop/fragment hote hain.
//      Fix via Admin CMD:
//      `netsh interface ipv4 set subinterface "Ethernet" mtu=1350 store=persistent`


// ================================================================================


// ========================================= 5. Phishing Email Forensic Analysis ================================ //
// ================================================================================

// 1. Phishing Email Indicators (Spotting a Fake Email - L1 Check):
//    - Display Name Spoofing: Display name "HR Department" lekin actual email `hr-update@gmail-security-support.xyz`.
//    - Urgency / Threat: "Your account will be suspended in 2 hours, click here".
//    - Suspicious Attachment: `.exe`, `.scr`, `.iso`, ya password-protected `.zip` files.

// 2. Email Header Inspection (Finding the Real Sender IP):
//    - Outlook me email kholo -> File -> Properties -> "Internet headers" box se text copy karo.
//    - Tool: Microsoft Message Header Analyzer (mha.azurewebsites.net) par paste karo.
//    - Three Core Protocols:
//      - SPF (Sender Policy Framework) : Pass hona chahiye (Authorized IP check).
//      - DKIM (DomainKeys Identified Mail) : Pass hona chahiye (Cryptographic tampering check).
//      - DMARC : Policy "Reject" ya "Quarantine" honi chahiye (Spoofed fake email blocking).

// 3. Post-Incident Containment (L2 Operation):
//    - Exchange Admin Center (EAC) / Security & Compliance Center me jakar Message Trace run karna.
//    - Check karna ki yeh phishing email poori company me kitne users ko aayi hai.
//    - PowerShell / GUI se sabhi inboxes se email ko Hard Delete / Purge karna taaki koi aur user link par click na kare.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
