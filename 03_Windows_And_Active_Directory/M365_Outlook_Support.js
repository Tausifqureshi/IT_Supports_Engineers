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


// 1. L1 ENGINEER KA KAAM (Daily Floor Fixes — 90% Outlook Issues Yahi Se Theek Hote Hain):
// Target: Safe Mode add-in isolation, .OST cache rebuild, aur fresh profile recreation.

// - Problem 1: Outlook Kholte Hi Crash Ho Raha Hai Ya "Processing..." / "Starting..." Par Freeze Ho Gaya:
//   Command: `Win + R` -> type `outlook.exe /safe` -> Enter.
//   Kaam: Third-party corrupt add-ins bypass karke Outlook launch karna.
//   Andar jaakar:
//   - Step A: Profile choose karke "OK" button par LEFT-CLICK karta hai (Outlook safe mode me open hoga).
//   - Step B: Top menu bar se `File` > `Options` > `Add-ins` par LEFT-CLICK karta hai.
//   - Step C: Neeche Manage: "COM Add-ins" select karke "Go..." button par LEFT-CLICK karta hai.
//   - Step D: Crashing add-ins (jaise Antivirus scanner, Adobe PDF, third-party sync tools) ko UNCHECK (untick) karta hai -> "OK" par LEFT-CLICK.
//   - Step E: Outlook ko close karke normally restart karta hai — Issue Solved!

// - Problem 2: Corrupted .OST File Fix (Emails Sync Nahi Ho Rahe Ya "Send/Receive Error"):
//   Command: `Win + R` -> type `%localappdata%\Microsoft\Outlook` -> Enter.
//   Kaam: Local cache directory khol kar broken .ost database purge karna.
//   Andar jaakar:
//   - Step A: Task Manager me ensure karo OUTLOOK.EXE completely close ho chuka ho.
//   - Step B: Folder me user ke email naam wali .ost file (e.g. `john@company.com.ost`) par RIGHT-CLICK -> "Rename" karke `.ost.old` kar deta hai (ya delete kar deta hai).
//   - Step C: Outlook normal start karo -> Neeche status bar dikhayega: "Updating Inbox...". Server se clean database fresh download ho kar issue solve ho jayega!

// - Problem 3: Fresh Clean Outlook Profile Recreate Karna (Deep Crash Fix):
//   Command: `Win + R` -> type `control mlcfg32.cpl` -> Enter.
//   (Alternative: `Win + R` -> `control` -> View by: Large icons -> "Mail (Microsoft Outlook)").
//   Kaam: Bina Outlook open kiye corrupt profile ko clean naye profile se replace karna.
//   Andar jaakar:
//   - Step A: "Show Profiles..." button par LEFT-CLICK karo.
//   - Step B: "Add..." button par LEFT-CLICK -> Naya Profile Name daalo (e.g. `Outlook_New`) -> "OK" par LEFT-CLICK.
//   - Step C: User ka email aur password daal kar Exchange automatic configuration complete hone do.
//   - Step D: "When starting Microsoft Outlook, use this profile" me "Outlook_New" ko select karo -> "Apply" par LEFT-CLICK -> "OK" par LEFT-CLICK.

// - Problem 4: Outlook Baar-Baar Password Maang Raha Hai (Stuck / Corrupt Credentials):
//   Command (CLI): `cmdkey /list`
//   Kaam: Terminal se corrupt cached MicrosoftOffice16 passwords inspect aur purge karna.
//   Andar jaakar:
//   - Step A: CMD kholo -> Command: `cmdkey /list` chalao (Check karo "Generic Credentials" me kaun si purani Office16 entry save hai).
//   - Step B: Command: `cmdkey /delete:MicrosoftOffice16_Data:live:cid=49a05b` (Corrupt credential terminal se instant delete karta hai).
//   - Step C (GUI Option): `Win + R` -> type `control keymgr.dll` -> "Windows Credentials" -> "Generic Credentials" se MicrosoftOffice16 entries remove karo -> Outlook launch karke fresh password enter karo.

// - L1 Ki Limit: Tenant-wide mail flow issues, message trace delivery audit, shared mailbox permissions (Send As vs Full Access), aur Entra MFA reset L2 ko escalate hote hain.


// 2. L2 ENGINEER KA KAAM (M365 Admin Center, Shared Mailboxes & Message Trace):
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


// ========================================= 3. Additional Enterprise Diagnostics & Mailbox Scaling ============ //
// Target: Real-World Floor Tricks & Enterprise Mailbox Storage Scaling (L1 vs L2)
// ================================================================================

// 1. Outlook Disconnected / Autodiscover Failures (Hidden Diagnostics Menu):
//    - Kab Use Hoga: User bolta hai "Mera Outlook bar-bar Disconnected ho raha hai" ya "Status bar me Trying to connect atka hai".
//    - Step-by-Step Action (L1):
//      Step A: Screen ke bottom-right par Taskbar Notification Area (System Tray) me jao (^ icon se hidden icons kholo).
//      Step B: Keyboard par Ctrl key daba kar hold rakho, aur Outlook icon par RIGHT-CLICK karo.
//      Step C: Menu me se LEFT-CLICK karo "Connection Status..." par.
//              (Verify karo: Status column me "Established" dikhna chahiye. Agar "Disconnected" hai toh MAPI/HTTP server connect nahi ho raha).
//      Step D: Wapas Ctrl daba kar Outlook icon par RIGHT-CLICK karo -> LEFT-CLICK karo "Test E-mail AutoConfiguration...".
//              - User ka email address aur password confirm karo.
//              - "Use Guessmart" aur "Secure Guessmart Authentication" checkboxes ko UNCHECK (untick) karo.
//              - Sirf "Use AutoDiscover" checkbox ko TICK rakho -> LEFT-CLICK karo "Test" button par.
//              - Result: "Log" tab me verify hota hai ki Microsoft 365 Autodiscover XML cleanly resolve ho raha hai ya nahi.

// 2. Corrupted .PST Archive File Repair (Inbox Repair Tool - SCANPST.EXE):
//    - Kab Use Hoga: User ki purani .pst archive file kharab ho gayi hai aur Outlook error deta hai: "The file xxx.pst cannot be opened / Errors have been detected".
//    - Rule: PST file ko kabhi delete nahi kiya jata kyunki isme user ke saalon purane personal emails hote hain.
//    - Step-by-Step Action (L1):
//      Step A: Outlook application ko completely CLOSE karo (Task Manager me verify karo OUTLOOK.EXE band ho).
//      Step B: File Explorer (Win + E) kholo aur is path par jao:
//              C:\Program Files\Microsoft Office\root\Office16
//              (Agar 32-bit Office ho toh: C:\Program Files (x86)\Microsoft Office\root\Office16).
//      Step C: DOUBLE-CLICK karo SCANPST.EXE par (Inbox Repair Tool window khulega).
//      Step D: LEFT-CLICK karo "Browse..." button par -> Corrupted .pst file choose karo -> LEFT-CLICK "Open".
//      Step E: LEFT-CLICK karo "Start" button par (Tool 8 phases me scan karega aur corrupted headers count dikhayega).
//      Step F: "Make a backup of scanned file before repairing" checkbox ko TICK rakho -> LEFT-CLICK karo "Repair" button par.
//      Step G: "Repair complete" popup aane par LEFT-CLICK "OK" -> Outlook launch karke verify karo!

// 3. Outlook Blank White Login Screen / Modern Auth WAM Token Glitch:
//    - Kab Use Hoga: Windows 10/11 me Outlook kholte hi sign-in window poori tarah Blank White box ban jati hai ya password enter karne par gayab ho jati hai.
//    - Root Cause: Web Account Manager (WAM) identity broker tokens corrupt ho jana.
//    - Step-by-Step Action (L1/L2):
//      Step A: Outlook aur Teams ko completely CLOSE karo.
//      Step B: Win + R dabao -> type karo %localappdata%\Microsoft\OneAuth -> Enter -> Is folder ke andar ka saara data DELETE karo.
//      Step C: Win + R dabao -> type karo %localappdata%\Microsoft\IdentityCache -> Enter -> Is folder ke andar ka saara data DELETE karo.
//      Step D: Windows Settings (Win + I) kholo -> LEFT-CLICK "Accounts" -> LEFT-CLICK "Access work or school".
//      Step E: Corporate work email par LEFT-CLICK karo -> LEFT-CLICK "Disconnect" (Temporary un-link).
//      Step F: PC ko Restart karo -> Outlook open karke fresh email + password + MFA enter karo -> Blank screen permanently fix ho jayegi!

// 4. 50GB Mailbox Quota Full & In-Place Cloud Archiving:
//    - Kab Use Hoga: User bolta hai "Mera mailbox 100% full ho gaya hai (50GB limit reached), emails aana band ho gayi hain".
//    - Step-by-Step Action (L1 vs L2):
//      - L1 Quick Action (Client Cleanup):
//        Step 1: Outlook kholo -> Top left par LEFT-CLICK karo "File" menu par.
//        Step 2: "Info" tab me LEFT-CLICK "Tools" button -> LEFT-CLICK "Mailbox Cleanup...".
//        Step 3: LEFT-CLICK "Empty" Deleted Items folder par -> Large attachments ko local desktop par save karwake emails delete karwao.
//      - L2 Enterprise Permanent Fix (Exchange Admin Center):
//        Step 1: Browser me portal kholo: admin.exchange.microsoft.com
//        Step 2: Left navigation menu me LEFT-CLICK karo "Recipients" -> LEFT-CLICK karo "Mailboxes".
//        Step 3: List me se affected user ke naam par LEFT-CLICK karo (Right side me flyout window khulega).
//        Step 4: Top tabs me se LEFT-CLICK karo "Others" tab par.
//        Step 5: "Mailbox archive" section me LEFT-CLICK karo "Manage mailbox archive" link par.
//        Step 6: "Mailbox archive status" ka toggle switch ON (Enable) karo -> LEFT-CLICK "Save" button par.
//        Result: User ke Outlook me primary inbox ke niche ek naya folder appear ho jata hai: "Online Archive - user@company.com" (50GB-1.5TB auto-expanding cloud storage) jisme purane emails automatically archive hone lagte hain.

// 5. Outlook Autocomplete / Nickname Cache Reset:
//    - Kab Use Hoga: User ka email address change hone par purana address auto-suggest hokar mail bounce (NDR 5.1.1) hona.
//    - Single Address Clear: Email type karte waqt suggestion ke bagal me [X] par click karo (ya highlight karke Delete dabao).
//    - Full Cache Reset (CLI): `Win + R` -> type `outlook.exe /cleanautocompletecache` -> Enter.

// 6. Cached Exchange Mode Slider (Missing Old Emails Fix):
//    - Kab Use Hoga: User bolta hai "Mera 1 ya 2 saal purana email inbox me nahi dikh raha hai".
//    - Reason: Outlook default me disk space bachane ke liye sirf 1 year ka cache download karta hai.
//    - Action: `File` -> `Account Settings` -> `Account Settings...` -> Account select karke `Change...` par LEFT-CLICK -> "Download email for the past:" slider ko "All" par drag karo -> "Next" -> "Done" -> Outlook restart.

// 7. Microsoft SaRA Tool (Universal Automated Repair):
//    - Kab Use Hoga: Manual troubleshooting ke baad bhi jab Outlook crash ya activation error solve na ho.
//    - Tool: Microsoft Support and Recovery Assistant (SaRA).
//    - Action: Official tool launch karo -> "Outlook" select karo -> "Outlook won't start / keeps crashing" choose karke automated diagnosis run karo.


// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
