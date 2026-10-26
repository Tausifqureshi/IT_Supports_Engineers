// ========================================= Endpoint Security, BitLocker, VPN & Patching ======================================= //
// Target: Module 5 (Section E) — Universal IT Support & L2 Security Operations (Enterprise Standard)
// ================================================================================

// ========================================= Endpoint Security in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Enterprise IT me data security sabse pehli priority hoti hai. L2 engineer ko hardware encryption (BitLocker), remote connection (VPN), patch deployment (WSUS) aur threat detection (Antivirus & Phishing) par daily kaam karna padta hai.
// 2. Format: Niche BitLocker recovery, WSUS update triage, Enterprise Antivirus management, VPN tunnel diagnostics aur Phishing email analysis steps diye gaye hain.

// ================================================================================


// ========================================= 1. BitLocker Drive Encryption (Deep L2 Troubleshooting) ============= //
// ================================================================================

// 1. BitLocker Recovery Key Kahan Se Milti Hai:
//    - Scenario: Employee ne laptop boot kiya aur Blue Screen par 48-digit BitLocker Recovery Key maang raha hai.
//    - Source 1 (Active Directory): `dsa.msc` -> Find Computer -> Properties -> "BitLocker Recovery" tab.
//    - Source 2 (Entra ID / Intune): `entra.microsoft.com` -> Devices -> All Devices -> Computer Name -> "BitLocker Keys" -> "Show recovery key".
//    - Source 3 (Self-Service): User ke personal Microsoft account portal `myaccount.microsoft.com` par.

// 2. BitLocker Recovery Prompt Loop Fix (Har Reboot Par Key Maangne Ka Permanent Solution):
//    - Root Cause: BIOS update ya Secure Boot state change hone se TPM measurement PCR values mismatch ho jati hain.
//    - L2 Permanent Fix via CMD (Admin):
//      Step 1: Recovery key daal kar Windows me login karo.
//      Step 2: Protection suspend karo:
//              manage-bde -protectors -disable C:
//      Step 3: System ko ek baar normally RESTART karo (TPM nayi PCR values capture kar leta hai).
//      Step 4: Login ke baad protection wapas enable karo:
//              manage-bde -protectors -enable C:
//      (Iske baad system kabhi dobara key nahi mangega!).


// ================================================================================


// ========================================= 2. Windows Update & WSUS Patch Management ========================== //
// ================================================================================

// 1. WSUS (Windows Server Update Services) Architecture:
//    - Role: Badi companies me har computer internet se 5GB update download karega toh bandwidth choke ho jayegi. Isliye WSUS local server Microsoft se ek baar update download karke poore office LAN me distribute karta hai.
//    - Client GPO Registry Check:
//      Regedit: `HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`
//      Verify: `WUServer` aur `WUStatusServer` me company ke WSUS server ka URL (e.g. `http://wsus.company.local:8530`) hona chahiye.

// 2. Stuck Windows Update Universal Reset Script:
//    - Problem: Update "Downloading 0%" ya "Failed to install - Error 0x80240034" par atki hui hai.
//    - Resolution Steps via CMD (Admin):
//      Step 1: net stop wuauserv && net stop bits && net stop cryptsvc
//      Step 2: ren C:\Windows\SoftwareDistribution SoftwareDistribution.bak
//      Step 3: ren C:\Windows\System32\catroot2 catroot2.bak
//      Step 4: net start wuauserv && net start bits && net start cryptsvc
//      Step 5: usoclient StartScan
//      (Isse purana corrupt cache wipe out hota hai aur updates smoothly install ho jati hain).


// ================================================================================


// ========================================= 3. Enterprise Antivirus & Endpoint Detection (EDR) ================= //
// ================================================================================

// 1. Windows Defender for Endpoint / CrowdStrike / SentinelOne:
//    - Daily Floor Tasks:
//      - Definition Updates Verify Karna: `mpcmdrun.exe -SignatureUpdate`
//      - Quick / Full Malware Scan Trigger Karna: `mpcmdrun.exe -Scan -ScanType 2`
//      - False Positive Whitelisting: Agar company ka internal software Antivirus se block ho jaye, toh Security Center me jakar specific file path ko Exclusion list me add karna.
//      - Quarantine Item Inspection: Block hui file ko sandbox me investigate karna ki virus hai ya safe program.


// ================================================================================


// ========================================= 4. Enterprise VPN Troubleshooting (SSL VPN vs IPsec) ================= //
// ================================================================================

// 1. VPN Protocols:
//    - SSL VPN (Cisco AnyConnect, FortiClient, Palo Alto GlobalProtect) -----> Port 443 TCP use karta hai (Kisi bhi hotel/home Wi-Fi par block nahi hota).
//    - IPsec / IKEv2 -----> UDP Port 500 / 4500 use karta hai (High speed site-to-site branch connection).

// 2. Split Tunneling vs Full Tunneling:
//    - Full Tunneling -----> User ka 100% traffic (even YouTube) company firewall se hokar jata hai (High security, high bandwidth use).
//    - Split Tunneling -----> Sirf company ke internal servers (10.x.x.x) VPN se jate hain, baaki personal internet user ke home Wi-Fi se nikalta hai (Best performance).

// 3. Top 3 VPN Support Issues & Fixes:
//    - Issue 1: "Virtual Network Adapter (TAP/TUN) Failed":
//      Fix: Device Manager me jao -> Network Adapters -> Cisco AnyConnect / Fortinet TAP adapter par right-click -> Uninstall Device -> Client app se repair karo.
//    - Issue 2: "Authentication Failed / Certificate Expired":
//      Fix: User ka AD password check karo expired toh nahi, aur personal certificate store (`certmgr.msc`) me corporate certificate verify karo.
//    - Issue 3: "VPN connects but internal ERP portal not opening":
//      Fix: Route print karke check karo VPN subnet ka static route route table me add hua ya nahi. Local home router ka IP 192.168.1.x aur office internal IP clash hone par subnet conflict hota hai.


// ================================================================================


// ========================================= 5. Phishing Email Forensic Analysis ================================ //
// ================================================================================

// 1. Phishing Email Indicators (Spotting a Fake Email):
//    - Display Name Spoofing: Display name dikhayega "CEO / HR Department" lekin actual email address hoga `hr-update@gmail-security-support.xyz`.
//    - Urgency / Threat: "Your account will be suspended in 2 hours, click here to verify password".
//    - Suspicious Attachment: `.exe`, `.scr`, `.iso`, ya password-protected `.zip` files.

// 2. Email Header Inspection (Finding the Real Sender IP):
//    - Outlook me email kholo -> File -> Properties -> "Internet headers" box se text copy karo.
//    - Tool: Microsoft Message Header Analyzer (mha.azurewebsites.net) par paste karo.
//    - Three Core Email Security Protocols:
//      - SPF (Sender Policy Framework) -----> Pass hona chahiye (Verify karta hai ki sending IP domain owner ka authorized mail server hai).
//      - DKIM (DomainKeys Identified Mail)--> Pass hona chahiye (Digital signature tampering check).
//      - DMARC -----> Policy "Reject" ya "Quarantine" honi chahiye (Spoofed fake emails ko rokne ke liye).

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
