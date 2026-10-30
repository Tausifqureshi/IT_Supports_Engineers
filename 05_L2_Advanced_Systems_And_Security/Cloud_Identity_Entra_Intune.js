// ========================================= Microsoft 365 Admin, Entra ID & Intune ======================================= //
// Target: Module 5 (Section D) — Universal IT Support & Cloud Identity Administrator (Enterprise Standard)
// ================================================================================

// ========================================= Cloud Identity & Modern Workplace Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Modern enterprises (Corporate MNCs, Airlines, Healthcare) on-premises servers ke sath Microsoft 365, Entra ID (Azure AD) aur Intune MDM ka use karti hain taaki remote employees ko kahi se bhi secure access mil sake.
// 2. Format: Niche M365 user lifecycle, licensing (E3/E5/Business Premium), MFA reset, Entra ID groups aur Intune compliance policies practical steps me di gayi hai.

// ================================================================================


// ========================================= 1. Microsoft 365 Admin Center Operations ============================ //
// Portal: admin.microsoft.com
// ================================================================================

// 1. User Creation & Provisioning:
//    - Users -> Active users -> "Add a user".
//    - Basics: First name, Last name, Display name, Username (e.g. `john.doe@company.com`).
//    - Password options: "Automatically create a password" aur "Require this user to change their password when they first sign in" (Security policy).

// 2. Product Licenses Assignment (Understanding Enterprise License Tiers):
//    - Microsoft 365 Business Basic -----> Sirf Web Apps (Word/Excel web) + Exchange Email (50GB) + Teams + OneDrive.
//    - Microsoft 365 Business Standard -----> Desktop Office Apps (Word, Excel, Outlook desktop install on 5 PCs) + Cloud services.
//    - Microsoft 365 Business Premium -----> Business Standard + Intune MDM + Azure AD P1 Security + Defender for Business.
//    - Microsoft 365 E3 / E5 -----> Badi MNCs/Airports ke liye: Unlimited archive, advanced compliance, DLP, Defender for Endpoint, Cloud App Security.

// 3. User Offboarding (Employee Exit Checklist):
//    - Step 1: User par click karo -> "Block sign-in" (Instant access revoke).
//    - Step 2: "Reset password" (Immediate active sessions terminate).
//    - Step 3: Mailbox settings me jakar mailbox ko "Shared Mailbox" me convert karo (Isse bina license pay kiye user ke purane emails 50GB tak safe rehte hain).
//    - Step 4: License unassign karo taaki naye employee ke liye license free ho jaye.
//    - Step 5: OneDrive data access user ke manager ko delegate karo.


// ================================================================================


// ========================================= 2. Microsoft Entra ID (Formerly Azure AD) =========================== //
// Portal: entra.microsoft.com
// ================================================================================

// 1. Users & Security Groups:
//    - Assigned Groups: IT Admin hath se users add karta hai.
//    - Dynamic Groups: Query rule ke hisaab se automatic user add/remove hote hain (e.g. `user.department -eq "Finance"`).

// 2. Self-Service Password Reset (SSPR):
//    - User bina IT Support ko call kiye apne mobile OTP ya Authenticator se khud password reset kar sakta hai.

// 3. MFA (Multi-Factor Authentication) Management:
//    - User Authenticator kharab hone par: Entra ID -> Users -> Select User -> Authentication methods -> "Require re-register multifactor authentication".

// 4. Device Identity in Entra ID (Interview Question):
//    - Azure AD Registered -----> User ka personal BYOD laptop/phone (Company portal se sirf apps manage hoti hain).
//    - Azure AD Joined -----> Company ka official laptop (Poora device cloud se manage hota hai, local domain controller nahi chahiye).
//    - Hybrid Azure AD Joined -> On-premises Domain Controller + Azure AD dono se connected corporate PC.

// 5. Entra ID Device Status CLI Triage (dsregcmd /status):
//    - Command (CMD/PowerShell): dsregcmd /status
//    - Real-World Telemetry:
//      - AzureAdJoined : YES (Device successfully registered in Entra ID).
//      - DomainJoined  : YES (Device on-premises Active Directory domain se bhi connected hai -> Hybrid Azure AD Joined).
//      - WamDefaultSet : YES (Web Account Manager broker active hai, Outlook/Teams login smoothly chalega).
//    - Device Re-Join / Un-Join Commands:
//      - Command: dsregcmd /leave (Corrupt cloud token detach karne ke liye).
//      - Command: dsregcmd /join (Device ko cloud me dobara clean join karne ke liye).


// ================================================================================


// ========================================= 3. Microsoft Intune (MDM & Endpoint Management) ===================== //
// Portal: intune.microsoft.com
// ================================================================================

// 1. Device Enrollment:
//    - Windows PC: Settings -> Accounts -> Access work or school -> Connect -> Company credentials daalo.
//    - Automatic Enrollment via Autopilot: Laptop box se nikalte hi Wi-Fi connect karte hi company ki saari policies aur software background me automatically download ho jate hain!

// 2. Compliance Policies (Device Health Rules):
//    - Path: Devices -> Compliance policies -> Create policy.
//    - Enforce Settings:
//      - Require BitLocker: Enabled.
//      - Require Secure Boot: Enabled.
//      - Minimum OS Version: `10.0.19045` (Windows 10 22H2).
//      - Antivirus status: Required active.
//    - Impact: Non-compliant device corporate email ya OneDrive access nahi kar sakta!

// 3. Remote Actions (Lost / Stolen Laptop Support):
//    - Sync -----> Device par instant policy refresh push karna.
//    - Quick Scan -----> Remote Defender antivirus scan trigger karna.
//    - Remote Lock -----> Laptop screen ko turant lock karna.
//    - Wipe -----> Laptop chori hone par poori hard drive ko factory reset (erase) kar dena!
//    - Retire -----> Sirf company ka data aur emails delete karna (user ka personal data safe rehta hai).

// 4. Force Client-Side Intune Policy Refresh (No Wait Time):
//    - Problem: Intune portal se software assign kiya ya compliance policy banayi, lekin user laptop par aane me ghanto lag rahe hain.
//    - User PC Action: Windows Settings (Win + I) -> "Accounts" -> "Access work or school" -> Corporate account select karo -> "Info" button par click karo -> "Device sync status" ke niche "Sync" button par CLICK karo! Policy turant download ho jayegi.


// ================================================================================


// ========================================= 4. Teams & SharePoint Online Support ================================ //
// ================================================================================

// 1. Microsoft Teams Support:
//    - Teams Cache Clean Fix (Teams freeze/camera error):
//      Command: taskkill /F /IM ms-teams.exe
//      Command (Run): %localappdata%\Packages\MSTeams_8wekyb3d8bbwe\LocalCache (Folder khol kar saara cache clean karna).
//    - Meeting audio/video mic permissions: Windows Settings -> Privacy & Security -> Microphone -> Teams toggle ON.

// 2. SharePoint Online & OneDrive Sync:
//    - Sync Issues (Red X mark on files):
//      Command: %localappdata%\Microsoft\OneDrive\onedrive.exe /reset
//      (OneDrive restart ho kar fresh cloud comparison karta hai bina file delete kiye).
//    - Site Permissions: Owners (Full Control), Members (Edit/Contribute), Visitors (Read Only).

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
