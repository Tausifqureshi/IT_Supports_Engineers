// ========================================= Microsoft 365 & Outlook Support ======================================= //
// Target: Universal IT Support & Desktop Systems Engineer — Module 3 Technical Blueprint (Corporate & Enterprise)
// ================================================================================

// ========================================= M365 & Outlook in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Enterprise companies me Microsoft 365 (M365) aur Microsoft Outlook communication ka sabse critical backbone hai.
// 2. Floor par aane wale 30% tickets Outlook freeze, email sync issue, mailbox full, ya corrupted .ost cache files se jude hote hain.
// 3. Format: Niche L1 ka routine daily quick fix (Safe Mode, OST Rebuild, Profile Recreate) aur L2 ka deep administrative fix (M365 Admin, Mail Flow, Automapping) step-by-step diya gaya hai.

// ================================================================================


// ========================================= 1. Outlook Architecture (.OST vs .PST) ============================== //
// ================================================================================

// 1. .OST (Offline Storage Table):
//    - Kya hai: Server par maujood mailbox (Exchange/M365) ka local synchronized offline cache copy hota hai.
//    - Golden Rule: .OST file ko bina dare delete kiya ja sakta hai! Jab aap Outlook dobara kholte hain, toh server se saare emails dobara fresh download ho kar nayi .OST file ban jati hai.
//    - Default Location: C:\Users\johndoe\AppData\Local\Microsoft\Outlook\ (ya %localappdata%\Microsoft\Outlook)

// 2. .PST (Personal Storage Table):
//    - Kya hai: Manual archive ya backup file hoti hai jo sirf user ke computer ki local hard drive par rehti hai (server par sync nahi hoti).
//    - Danger Rule: .PST file ko KABHI DELETE MAT KARNA! Agar delete kar diya toh user ka purana archived email data hamesha ke liye gayab ho jayega!


// ================================================================================


// ========================================= 2. Outlook Troubleshooting Workflows (L1 vs L2) ===================== //
// ================================================================================


// * 1. L1 ENGINEER KA KAAM (Daily Floor Fixes — 90% Outlook Issues Yahi Se Theek Hote Hain):
// Target: Safe Mode add-in isolation, .OST cache rebuild, aur fresh profile recreation.

// - Problem 1: Outlook Kholte Hi Crash Ho Raha Hai Ya "Processing..." / "Starting..." Par Freeze Ho Gaya:
//   Command: `Win + R` -> type `outlook.exe /safe` -> Enter.
//   Kaam: Third-party corrupt add-ins bypass karke Outlook launch karna.
//   Andar jaakar:
//   * Step A: Profile choose karke "OK" click karta hai (Outlook safe mode me open hoga).
//   * Step B: Top menu bar se `File` > `Options` > `Add-ins` par CLICK karta hai.
//   * Step C: Neeche Manage: "COM Add-ins" select karke "Go..." button par CLICK karta hai.
//   * Step D: Crashing add-ins (jaise Antivirus scanner, Adobe PDF, third-party sync tools) ko UNCHECK (untick) karta hai -> "OK".
//   * Step E: Outlook ko close karke normally restart karta hai — Issue Solved!

// - Problem 2: Corrupted .OST File Fix (Emails Sync Nahi Ho Rahe Ya "Send/Receive Error"):
//   Command: `Win + R` -> type `%localappdata%\Microsoft\Outlook` -> Enter.
//   Kaam: Local cache directory khol kar broken .ost database purge karna.
//   Andar jaakar:
//   * Step A: Task Manager me ensure karo OUTLOOK.EXE completely close ho chuka ho.
//   * Step B: Folder me user ke email naam wali .ost file (e.g. `john@company.com.ost`) par RIGHT-CLICK -> "Rename" karke `.ost.old` kar deta hai (ya delete kar deta hai).
//   * Step C: Outlook normal start karo -> Neeche status bar dikhayega: "Updating Inbox...". Server se clean database fresh download ho kar issue solve ho jayega!

// - Problem 3: Fresh Clean Outlook Profile Recreate Karna (Deep Crash Fix):
//   Command: `Win + R` -> type `control mlcfg32.cpl` -> Enter.
//   (Alternative: `Win + R` -> `control` -> View by: Large icons -> "Mail (Microsoft Outlook)").
//   Kaam: Bina Outlook open kiye corrupt profile ko clean naye profile se replace karna.
//   Andar jaakar:
//   * Step A: "Show Profiles..." button par CLICK karo.
//   * Step B: "Add..." button par CLICK -> Naya Profile Name daalo (e.g. `Outlook_New`) -> "OK".
//   * Step C: User ka email aur password daal kar Exchange automatic configuration complete hone do.
//   * Step D: "When starting Microsoft Outlook, use this profile" me "Outlook_New" ko select karo -> "Apply" -> "OK".

// - L1 Ki Limit: Tenant-wide mail flow issues, message trace delivery audit, shared mailbox permissions (Send As vs Full Access), aur Entra MFA reset L2 ko escalate hote hain.


// * 2. L2 ENGINEER KA KAAM (M365 Admin Center, Shared Mailboxes & Message Trace):
// Target: Cloud administration, mailbox permissions aur email delivery root cause diagnosis.

// - Step 1: Shared Mailbox Permissions (Full Access vs Send As vs Send on Behalf):
//   Admin URL: `admin.microsoft.com`
//   Kaam: Central admin center me delegated mailbox permissions configure karna.
//   Andar jaakar: `Teams & groups` > `Shared mailboxes` -> Mailbox select -> `Members` > `Manage permissions`:
//   1. Full Access: User shared mailbox ke folders, inbox aur calendar ko padh aur manage kar sakta hai (lekin email send karne ke liye Send As zaroori hai).
//   2. Send As: User shared mailbox ke email address se mail bhej sakta hai, aur recipient ko pata bhi nahi chalega ki kisne bheja (Mail shared mailbox se sent dikhegi).
//   3. Send on Behalf: Mail sent hoti hai as: "John on behalf of Info@company.com".

// - Step 2: Shared Mailbox Automapping Fix (Jab Outlook Me Shared Mailbox Automatically Na Dikhe):
//   Command: `Win + R` -> type `control mlcfg32.cpl` -> Enter.
//   Kaam: Outlook cache mode me automapped mailboxes load hone me 24 ghante tak lagne par manual add karna.
//   Andar jaakar: "Email Accounts..." par click -> User account par DOUBLE-CLICK -> "More Settings" button -> "Advanced" tab -> "Add..." button par click -> Shared mailbox ka email type karo -> "Apply" -> "OK".

// - Step 3: Message Trace (Email Delivery Failure Audit):
//   Admin URL: `admin.exchange.microsoft.com`
//   Kaam: Exchange Admin Center me email bounce hone ka exact root cause pakadna.
//   Andar jaakar: `Mail flow` > `Message trace` -> "Start a trace" -> Sender aur Recipient email daalo -> "Search" -> Status inspect karta hai:
//   - Delivered -----> Mail successfully inbox ya Junk folder me deliver ho chuki hai.
//   - FilteredAsSpam-> Corporate Spam filter ne quarantine me daal diya hai.
//   - Failed / Drop -----> MX record, SPF/DKIM validation ya attachment size limit (e.g. >25MB) ki wajah se bounce ho gayi.

// - Step 4: M365 User MFA (Multi-Factor Authentication) Reset Karna:
//   Admin URL: `entra.microsoft.com`
//   Kaam: Employee ke naye phone par Microsoft Authenticator app re-register karana.
//   Andar jaakar: `Identity` > `Users` > `All users` -> Select User -> `Authentication methods` -> "Require re-register multifactor authentication" button par click karta hai (User next login par fresh QR code scan karke setup kar leta hai).

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
