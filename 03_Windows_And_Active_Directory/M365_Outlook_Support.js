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
//    - Default Location: C:\Users\<Username>\AppData\Local\Microsoft\Outlook\

// 2. .PST (Personal Storage Table):
//    - Kya hai: Manual archive ya backup file hoti hai jo sirf user ke computer ki local hard drive par rehti hai (server par sync nahi hoti).
//    - Danger Rule: .PST file ko KABHI DELETE MAT KARNA! Agar delete kar diya toh user ka purana archived email data hamesha ke liye gayab ho jayega!


// ================================================================================


// ========================================= 2. Outlook Troubleshooting Workflows (L1 vs L2) ===================== //
// ================================================================================


// * 1. L1 ENGINEER KA KAAM (Daily Floor Fixes — 90% Outlook Issues Yahi Se Theek Hote Hain):

// - Problem 1: Outlook kholte hi crash ho raha hai ya "Processing..." / "Starting..." par freeze ho gaya
//   Step 1: Keyboard par [Win + R] dabao -> type karo:
//           outlook.exe /safe
//           (Outlook Safe Mode me khulega, jisme saare 3rd-party plugins aur add-ins bypass ho jate hain).
//   Step 2: Agar Safe Mode me khul gaya, matlab koi corrupt Add-in crash kar raha tha.
//   Step 3: Fix Add-in: File -> Options -> Add-ins -> Neeche "Manage: COM Add-ins" -> "Go" par click karo.
//   Step 4: Unnecessary add-ins (jaise Antivirus scanner, Adobe PDF, third party tools) ko UNTICK karo -> OK.
//   Step 5: Outlook ko normally restart karo — Issue Solved!

// - Problem 2: Corrupted .OST File Fix (Emails sync nahi ho rahe ya "Send/Receive error")
//   Step 1: Outlook ko completely close karo (Task Manager me ensure karo OUTLOOK.EXE na chal raha ho).
//   Step 2: [Win + R] dabao -> type karo:
//           %localappdata%\Microsoft\Outlook
//           (Direct Outlook cache folder khul jayega).
//   Step 3: Wahan user ke email naam wali .ost file (e.g. john@company.com.ost) ko rename karke ".old" kar do ya delete kar do.
//   Step 4: Outlook kholo -> Neeche status dikhayega: "Updating Inbox...". Server se clean database download ho kar issue solve ho jayega!

// - Problem 3: Fresh Clean Outlook Profile Recreate Karna (Deep Crash Fix)
//   Step 1: [Win + R] dabao -> type karo:
//           control mlcfg32.cpl   (ya Control Panel -> View by Large Icons -> "Mail (Microsoft Outlook)").
//   Step 2: "Show Profiles" par click karo.
//   Step 3: "Add" par click karo -> Naya Profile Name daalo (e.g. "Outlook_New") -> OK.
//   Step 4: User ka email aur password daal kar Exchange automatic configuration complete karo.
//   Step 5: "When starting Microsoft Outlook, use this profile" me "Outlook_New" ko select karo -> Apply -> OK.


// * 2. L2 ENGINEER KA KAAM (M365 Admin Center, Shared Mailboxes & Message Trace):
// Target: Cloud administration, mailbox permissions aur email delivery root cause diagnosis.

// - Step 1: Shared Mailbox Permissions (Full Access vs Send As vs Send on Behalf)
//   1. Full Access: User shared mailbox ke folders, inbox aur calendar ko padh aur manage kar sakta hai (lekin email send karne ke liye Send As zaroori hai).
//   2. Send As: User shared mailbox ke email address se mail bhej sakta hai, aur recipient ko pata bhi nahi chalega ki kisne bheja (Mail shared mailbox se sent dikhegi).
//   3. Send on Behalf: Mail sent hoti hai as: "John on behalf of Info@company.com".
//   Admin Path: admin.microsoft.com -> Teams & Groups -> Shared Mailboxes -> Members -> Manage permissions.

// - Step 2: Shared Mailbox Automapping Fix (Jab Outlook me Shared Mailbox automatically na dikhe)
//   Root Cause: Outlook cache mode me automapped mailboxes load hone me 24 ghante tak lag jate hain.
//   Manual Add via Outlook:
//   Account Settings -> Account Settings -> Double click User Email -> More Settings -> Advanced tab -> "Add" -> Shared mailbox ka email type karo -> Apply -> OK.

// - Step 3: Message Trace (Email Delivery Failure Audit)
//   Problem: User bolta hai "Client ne mujhe email bheja par mujhe mila hi nahi".
//   Action in Exchange Admin Center (admin.exchange.microsoft.com):
//   Mail flow -> Message trace -> Start a trace -> Sender aur Recipient email daalo -> Search.
//   Results inspect karo:
//   - Delivered -----> Mail successfully inbox ya Junk folder me deliver ho chuki hai.
//   - FilteredAsSpam-> Corporate Spam filter ne quarantine me daal diya hai.
//   - Failed / Drop -----> MX record, SPF/DKIM validation ya attachment size limit (e.g. >25MB) ki wajah se bounce ho gayi.

// - Step 4: M365 User MFA (Multi-Factor Authentication) Reset Karna
//   Problem: Employee ne naya phone liya aur Microsoft Authenticator app kaam nahi kar raha.
//   Action in Microsoft Entra Admin Center (entra.microsoft.com):
//   Users -> All Users -> Select User -> Authentication methods -> "Require re-register multifactor authentication" par click karo.
//   (User next login par fresh QR code scan karke apna Authenticator dobara setup kar payega).

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
