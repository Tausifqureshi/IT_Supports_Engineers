// ========================================= Active Directory (ADUC) & Group Policy (GPO) ======================================= //
// Target: Universal IT Support & Systems Engineer — Module 3 Technical Blueprint (Corporate, Airports & MSPs)
// ================================================================================

// ========================================= Active Directory Kya Hai Aur Iska Use Kyun Hota Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Active Directory (AD DS) Microsoft ka centralized database aur identity management system hai jo poori company ke Users, Computers, Groups aur Policies ko ek jagah se control karta hai.
// 2. Client PC par local user banane ke bajaye company har employee ka account Domain Controller (Server) par banati hai, jisse employee kisi bhi office desk ke computer par apne username/password se login kar sakta hai.
// 3. Format: Niche L1 aur L2 ka real corporate workflow, command shortcuts aur practical step-by-step troubleshooting di gayi hai.

// ================================================================================


// ========================================= 1. Active Directory Users & Computers (ADUC) ======================== //
// Console Shortcut: Win + R -> dsa.msc
// ================================================================================

// [ CONCEPT: Users, OUs, Security Groups & Domain Hierarchy ]
// ADUC ke andar 4 core objects hote hain:
// 1. User Account      -----> Employee ki digital identity (Username, Password, Department).
// 2. Computer Account  -----> Office ka laptop/desktop jo domain se juda (joined) hai.
// 3. OU (Org Unit)     -----> Virtual folders jisme users/computers ko department wise (HR, Finance, IT) divide kiya jata hai taaki policies lag sakein.
// 4. Security Group    -----> Users ka group jisse shared folders ya softwares ka access diya jata hai.


// * 1. L1 ENGINEER KA KAAM (Daily Floor Operations & Fast Ticket Resolution):
// Target: 2 se 5 minute ke andar user ka login issue solve karna.

// - Problem 1: User bol raha hai "Mera account lock ho gaya hai (The referenced account is currently locked out)"
//   Step 1: [Win + R] dabao -> type karo "dsa.msc" -> Enter (Active Directory khulegi).
//   Step 2: Domain par right-click karo -> "Find" chuno -> User ka first name ya username search karo.
//   Step 3: User par double-click karo -> "Account" tab me jao.
//   Step 4: "Unlock account" checkbox ko TICK karo -> "Apply" -> "OK".
//   (User ko bolo: "Sir, apna naya attempt karein, account unlock ho chuka hai").

// - Problem 2: User apna password bhool gaya ya expire ho gaya (Password Reset)
//   Step 1: dsa.msc me user dhoondo -> User par RIGHT-CLICK karo -> "Reset Password" chuno.
//   Step 2: Company policy ka temporary password daalo (e.g. Welcome@2026).
//   Step 3: "User must change password at next logon" checkbox ko zaroor TICK rakho (Security rule).
//   Step 4: "Unlock the user's account" ko bhi tick karo agar locked tha -> OK dabao.

// - Problem 3: User ko kisi Shared Folder ya Department ka access dena
//   Step 1: User par double-click karo -> "Member Of" tab me jao.
//   Step 2: "Add" par click karo -> Group ka naam search karo (e.g. "Finance_Share_RW") -> Check Names -> OK -> Apply.
//   Step 3: Important Note: User ko bolo "PC ko ek baar Sign-out (Log off) karke dobara login karein", kyunki Windows login ke waqt naye Kerberos security token load karta hai!

// - L1 Ki Limit: Agar user login karne par bole "The trust relationship between this workstation and the primary domain failed", toh L1 ke bas ka nahi hota aur ticket L2 ko jata hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause, OU Design & Domain Trust Fix):
// Target: Domain trust repair, bulk user provisioning aur account lockout audit.

// - Step 1: "Trust Relationship Failed" Ka Permanent Fix (Bina PC domain se hataye)
//   Root Cause: Client PC aur Domain Controller ke beech ka machine account secure channel password out-of-sync ho gaya hai.
//   Fix via PowerShell (Admin):
//   Test-ComputerSecureChannel -Verbose                      -----> Agar False aaye toh trust toot chuka hai.
//   Reset-ComputerSecureChannel -Credential (Get-Credential) -----> Domain admin credentials daal kar 5 second me trust repair!

// - Step 2: Account Bar-Bar Lockout Hone Ka Root Cause Pakadna
//   Root Cause: User ne phone me Wi-Fi ya Outlook me purana password save rakha hai jo background me baar-baar galat attempt bhejta hai.
//   Audit via Event Viewer on Domain Controller:
//   Security Log me filter karo: Event ID 4740 (A user account was locked out).
//   Caller Computer Name check karo: Pata chal jata hai kis specific PC ya mobile IP se lock signal aaya.

// - Step 3: Security Groups vs Distribution Lists Ka Fark (Interview Favorite):
//   - Security Group     -----> Iska use NTFS permissions, shared folders aur VPN access dene ke liye hota hai (Is par email bhi enable ho sakti hai).
//   - Distribution Group -----> Iska use sirf aur sirf mass emails (Email Broadcast) bhejne ke liye hota hai, isse koi folder permission nahi di ja sakti.


// ================================================================================


// ========================================= 2. Shared Folder Permissions (NTFS vs Share) ======================= //
// ================================================================================

// [ CONCEPT: Share Permissions vs NTFS (Security) Permissions ]
// Network par folder share karte waqt 2 alag-alag darwaze (gates) hote hain:
// 1. Share Permission (Outer Gate) -----> Network cable se aane wale traffic ko control karta hai.
// 2. NTFS Permission (Inner Gate)  -----> Local disk level par file/folder access control karta hai.

// Golden Rule (Most Restrictive Wins):
// Agar Share me "Full Control" hai lekin NTFS me "Read Only" hai, toh user ko sirf "READ ONLY" access hi milega!

// Enterprise Best Practice (L2 Standard):
// 1. Share Permissions: Hamesha "Authenticated Users" ko "Full Control" ya "Change" de kar chhod do.
// 2. NTFS Permissions: Asli granular control (Read, Write, Modify) yahan "Security" tab me jakar AD Security Groups ko assign karo.


// ================================================================================


// ========================================= 3. Group Policy Objects (GPO) ======================================= //
// Console Shortcut: Win + R -> gpmc.msc
// ================================================================================

// [ CONCEPT: Centralized Management via Group Policy ]
// GPO ke zariye IT Admin hazaron computers par ek sath settings enforce karta hai—jaise: USB pendrive block karna, desktop wallpaper lock karna, automatic network drive map karna, aur Windows updates schedule karna.

// 1. GPO Processing Order (LSDOU Rule — Interview Must-Know):
//    - L -----> Local Policy (Sabse pehle local PC ki policy lagti hai).
//    - S -----> Site Policy (Company location/office ke hisaab se).
//    - D -----> Domain Policy (Poore domain par lagti hai).
//    - OU ----> Organizational Unit Policy (Sabse aakhri me lagti hai aur baaki sabko overwrite karti hai).
//    - Rule: Jo policy sabse aakhri me lagti hai (OU), wahi jeetti hai!


// * 1. L1 ENGINEER KA KAAM (Client Side Verification & Force Refresh):
// Target: Check karna ki client PC par policy lag rahi hai ya nahi.

// - Problem 1: User ke system par naya mapped drive ya shortcut nahi aaya
//   Step 1: CMD ya PowerShell Admin me kholo.
//   Step 2: Forcefully policy update karo:
//           gpupdate /force
//   Step 3: Output me dekho:
//           "Computer Policy update has completed successfully."
//           "User Policy update has completed successfully."

// - Problem 2: Check karna PC par kaun-kaun si GPO active hain
//   Step 1: Command chalao:
//           gpresult /r
//   Step 2: "Applied Group Policy Objects" section me verify karo policy ka naam list me aa raha hai ya nahi.
//   Step 3: HTML Report Generator (Management ko bhejne ke liye):
//           gpresult /h C:\gpreport.html


// * 2. L2 ENGINEER KA KAAM (Policy Creation, WMI Filters & Troubleshooting):
// Target: Corporate policies design karna aur blocking rules deploy karna.

// - Step 1: USB Storage Device Block Policy Deploy Karna (Data Security)
//   Path in gpmc.msc:
//   Computer Configuration -> Policies -> Administrative Templates -> System -> Removable Storage Access
//   Setting: "All Removable Storage classes: Deny all access" -> Enabled.

// - Step 2: Automatic Network Shared Drive Map Karna (Group Policy Preferences)
//   User Configuration -> Preferences -> Windows Settings -> Drive Maps
//   Action: Update | Drive Letter: Z: | Location: \\FILESERVER01\SharedData | Reconnect: Yes.

// - Step 3: GPO Slow Boot Triage (Group Policy Processing Delay)
//   Root Cause: DNS misconfiguration ya Domain Controller unreachable hone par PC login screen par 10 minute atakta hai ("Applying Computer Settings...").
//   Fix: Client PC ke ncpa.cpl me primary DNS ko Domain Controller ke live IP par set karna.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
