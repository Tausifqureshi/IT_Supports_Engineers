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
// 1. User Account -----> Employee ki digital identity (Username, Password, Department).
// 2. Computer Account -----> Office ka laptop/desktop jo domain se juda (joined) hai.
// 3. OU (Org Unit) -----> Virtual folders jisme users/computers ko department wise (HR, Finance, IT) divide kiya jata hai taaki policies lag sakein.
// 4. Security Group -----> Users ka group jisse shared folders ya softwares ka access diya jata hai.


// * 1. L1 ENGINEER KA KAAM (Daily Floor Operations & Fast Ticket Resolution):
// Target: 2 se 5 minute ke andar user ka login issue solve karna.

// - Problem 1: User Bol Raha Hai "Mera account lock ho gaya hai (The referenced account is currently locked out)":
//   Command: `Win + R` -> type `dsa.msc` -> Enter.
//   Kaam: Active Directory Users and Computers khol kar account unlock karne ke liye.
//   Andar jaakar: Left pane me domain root par RIGHT-CLICK -> "Find..." par click -> Search box me username type karo -> "Find Now" par click -> User account par DOUBLE-CLICK -> "Account" tab me jao -> "Unlock account" checkbox ko TICK karo -> "Apply" -> "OK".
//   (User ko bolo: "Sir, apna naya attempt karein, account unlock ho chuka hai").

// - Problem 2: User Apna Password Bhool Gaya Ya Expire Ho Gaya (Password Reset):
//   Command: `Win + R` -> type `dsa.msc` -> Enter.
//   Kaam: Domain Controller par user ka temporary password set karna.
//   Andar jaakar: dsa.msc me user dhoondo -> User par RIGHT-CLICK -> "Reset Password..." par click -> Company standard temporary password daalo (e.g. `Welcome@2026`) -> "User must change password at next logon" checkbox ko zaroor TICK rakho -> "Unlock the user's account" ko bhi TICK karo -> "OK".

// - Problem 3: User Ko Kisi Shared Folder Ya Department Ka Access Dena:
//   Command: `Win + R` -> type `dsa.msc` -> Enter.
//   Kaam: User ko authorized department security group ka member banana.
//   Andar jaakar: User par DOUBLE-CLICK -> "Member Of" tab par CLICK -> "Add..." button par click -> Group ka naam search karo (e.g. "Finance_Share_RW") -> "Check Names" button par click (underlined hoga) -> "OK" -> "Apply" -> "OK".
//   Important Note: User ko bolo: "PC ko ek baar Sign-out karke dobara login karein", kyunki Windows login ke waqt naye Kerberos security token load karta hai!

// - Problem 4: Employee Resignation / Long Leave (Disable & Enable Account):
//   Command: `Win + R` -> type `dsa.msc` -> Enter.
//   Kaam: Security compliance ke liye unapproved domain login freeze karna ya employee return hone par access restore karna.
//   Andar jaakar: User search karke us par RIGHT-CLICK -> "Disable Account" select karta hai -> "Object has been disabled" popup aayega (User icon par chhota downward black arrow aa jata hai). Rejoin karne par: RIGHT-CLICK -> "Enable Account" select karta hai.
// - L1 Ki Limit: Agar user login karne par bole "The trust relationship between this workstation and the primary domain failed", repeated lockout caller PC audit, ya OU restructure L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause, OU Design & Domain Trust Fix):
// Target: Domain trust repair, repeated lockout audit, aur bulk provisioning.

// - Step 1: "Trust Relationship Failed" Ka Permanent Fix (Bina PC Domain Se Hataye):
//   Command: `Win + R` -> type `powershell` (Run as Administrator) -> Enter.
//   Kaam: Client PC aur Domain Controller ke beech machine account secure channel password sync karna.
//   Andar jaakar: Sequence run karta hai:
//   `Test-ComputerSecureChannel -Verbose` -----> Agar False aaye toh trust toot chuka hai.
//   `Reset-ComputerSecureChannel -Credential (Get-Credential)` -----> Domain admin credentials daal kar 5 second me trust repair karta hai!

// - Step 2: Account Bar-Bar Lockout Hone Ka Root Cause Pakadna:
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter (Domain Controller par).
//   Kaam: Caller Machine (mobile ya purane PC) ko identify karna jo background me wrong cached credentials bhej raha hai.
//   Andar jaakar: "Windows Logs" > "Security" log me filter karta hai: Event ID 4740 (A user account was locked out) -> Event detail me "Caller Computer Name" note karta hai -> Us device par jakar saved Wi-Fi/Outlook credentials update karta hai.

// - Step 3: Security Groups vs Distribution Lists Ka Fark (Interview Favorite):
//   - Security Group -----> Iska use NTFS permissions, shared folders aur VPN access dene ke liye hota hai (Is par email bhi enable ho sakti hai).
//   - Distribution Group -----> Iska use sirf aur sirf mass emails (Email Broadcast) bhejne ke liye hota hai, isse koi folder permission nahi di ja sakti.


// ================================================================================


// ========================================= 2. Shared Folder Permissions (NTFS vs Share) ======================= //
// ================================================================================

// [ CONCEPT: Share Permissions vs NTFS (Security) Permissions ]
// Network par folder share karte waqt 2 alag-alag darwaze (gates) hote hain:
// 1. Share Permission (Outer Gate) -----> Network cable se aane wale traffic ko control karta hai.
// 2. NTFS Permission (Inner Gate) -----> Local disk level par file/folder access control karta hai.

// Golden Rule (Most Restrictive Wins):
// Agar Share me "Full Control" hai lekin NTFS me "Read Only" hai, toh user ko sirf "READ ONLY" access hi milega!

// * 1. L1 ENGINEER KA KAAM (Surface Access & Drive Mapping):
// Target: Shared drive reachability test aur user desk par drive map karna.
// - Step 1: Network Share Path Open Karna:
//   Command: `Win + R` -> type `\\FILESERVER01\SharedData` -> Enter.
//   Kaam: Check karna ki network cable aur file server reachable hain ya nahi.
//   Andar jaakar: Agar files dikh rahi hain toh user connection OK hai.
// - Step 2: Persistent Drive Letter Map Karna:
//   Command: `Win + R` -> type `explorer` -> Enter -> Left sidebar se "This PC" par click karo.
//   Kaam: User ke My Computer me permanent drive icon banana.
//   Andar jaakar: Top menu bar se "Map network drive" button par CLICK -> "Drive:" dropdown se letter select karo (e.g. `Z:`) -> "Folder:" box me network path daalo (`\\FILESERVER01\SharedData`) -> "Reconnect at sign-in" checkbox TICK karo -> "Finish" par click karo.
// - L1 Ki Limit: "Access Denied" permission conflicts, locked files release karna, ya NTFS inheritance break karna L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause, File Locks & NTFS Hardening):
// Target: Locked files release karna, Share vs NTFS permission design, aur session disconnect.
// - Step 1: Locked Files Release Karna (Shared Folders Console):
//   Command: `Win + R` -> type `fsmgmt.msc` -> Enter.
//   Kaam: Bina server reboot kiye locked file release karna.
//   Andar jaakar: Left pane me "Open Files" par click -> locked file dhoondh kar uspe RIGHT-CLICK -> "Close Open File" select karta hai.
// - Step 2: Enterprise Permission Standard Enforce Karna:
//   Command: `Win + R` -> type `fsmgmt.msc` -> Enter -> "Shares" par click.
//   Kaam: Granular role-based access control lagana.
//   Andar jaakar:
//   * Share Permissions: Folder par RIGHT-CLICK -> "Properties" -> "Share Permissions" me "Authenticated Users" ko "Change" aur "Read" allow karta hai.
//   * NTFS Security: "Security" tab me "Edit..." click karke specific AD Security Groups (e.g. `Finance_RW` ko Modify aur `Finance_RO` ko Read) assign karta hai.


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
// Target: Check karna ki client PC par policy lag rahi hai ya nahi aur diagnostic report nikalna.
// - Problem 1: User Ke System Par Naya Mapped Drive Ya Policy Nahi Aayi:
//   Command: `Win + R` -> type `cmd` -> Enter.
//   Kaam: Domain Controller se latest group policy instantly fetch karna.
//   Andar jaakar: Terminal me command chalata hai: `gpupdate /force`
//   Verification: Output me dono success hone chahiye:
//   "Computer Policy update has completed successfully."
//   "User Policy update has completed successfully."
// - Problem 2: Audit Karna PC Par Kaun-Kaun Si GPO Active Hain:
//   Command: `Win + R` -> type `cmd` -> Enter -> type `gpresult /r` -> Enter.
//   Kaam: Applied policies aur user security group memberships inspect karna.
//   Andar jaakar: "Applied Group Policy Objects" section me check karta hai target policy name list me hai ya nahi.
// - Problem 3: Management Ke Liye HTML Diagnostic Report Generate Karna:
//   Command: `Win + R` -> type `cmd` -> Enter -> type `gpresult /h C:\gpreport.html` -> Enter.
//   Kaam: Browser me khulne wali visual GPO audit report tayyar karna.
// - L1 Ki Limit: Nayi GPO banana, WMI filtering lagana, GPO link order change karna, ya slow boot delay L2 ko escalate hota hai.


// * 2. L2 ENGINEER KA KAAM (Policy Creation, WMI Filters & Troubleshooting):
// Target: Corporate policies design karna, automatic drive mapping deploy karna, aur boot delays fix karna.
// - Step 1: USB Storage Device Block Policy Deploy Karna:
//   Command: `Win + R` -> type `gpmc.msc` -> Enter.
//   Kaam: Company computers par unauthorized pendrives block karna.
//   Andar jaakar: Domain expand -> Target OU par RIGHT-CLICK -> "Create a GPO in this domain, and Link it here..." -> GPO Name: `SEC_Block_USB` -> Banayi gayi GPO par RIGHT-CLICK -> "Edit..." -> `Computer Configuration` > `Policies` > `Administrative Templates` > `System` > `Removable Storage Access` -> "All Removable Storage classes: Deny all access" par DOUBLE-CLICK -> "Enabled" select karo -> "Apply" -> "OK".
// - Step 2: Automatic Network Shared Drive Map Karna (Group Policy Preferences):
//   Command: `Win + R` -> type `gpmc.msc` -> Enter -> GPO Editor kholo.
//   Kaam: Sabhi employees ke PC me automatic Z: drive configure karna.
//   Andar jaakar: `User Configuration` > `Preferences` > `Windows Settings` > `Drive Maps` par RIGHT-CLICK -> "New" > "Mapped Drive" -> Action: `Update` | Location: `\\FILESERVER01\SharedData` | Drive Letter: `Z:` | Reconnect: `Yes` set karke "Apply" -> "OK" karta hai.
// - Step 3: GPO Slow Boot Triage (Group Policy Processing Delay):
//   Root Cause: DNS misconfiguration ya Domain Controller unreachable hone par PC login screen par 10 minute atakta hai ("Applying Computer Settings...").
//   Fix: Client PC ke `ncpa.cpl` me primary DNS ko Domain Controller ke live IP par set karta hai aur CMD me `dcdiag` se DC health check karta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
