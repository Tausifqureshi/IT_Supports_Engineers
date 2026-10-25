// ========================================= Windows Run Commands (Universal IT Support) ======================================= //
// Target: L1 to L2 Desktop Support (All Fields: Corporate, Hotels, Hospitals, Logistics & Airport Operations)

// ========================================= Windows Run (Win + R) Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> Windows Run Command Kya Hai Aur Iska Use Kyun Hota Hai?
// 1. Windows Run dialog (Win + R) operating system ka ek direct quick-launcher shortcut engine hai.
// 2. Iska use kisi bhi administrative console, system utility, ya network control panel applet (.msc, .cpl) ko bina lambe Settings menus me dhoondhe 1 second me open karne ke liye hota hai.
// 3. IT Support floor par jab user ke samne fast troubleshooting karni hoti hai, tab GUI menus time waste karte hain, isliye Run commands IT engineer ka primary weapon hai.

// ========================================= Structure & Working Rules ======================================= //
// - SECTION 1: Top 11 Core Daily Commands (Jo har roz support floor par 90% use hoti hain).
// - SECTION 2: Extra Situation-Based Commands (L2 / Airport / Deep issues aane par use hoti hain).
// - HAR COMMAND MEIN 2 STEPS HAIN:
//   * STEP 1 (PEHLA TAREEQA): Normal Routine Fix (90% cases me pehle yahi karna hai).
//   * STEP 2 (DOOSRA TAREEQA): Deep / Emergency Fix (Agar pehle step se theek na ho, tab yeh karna hai).

// ========================================= Section 1: Top 11 Core Must-Know Commands ======================================= //
// Pehle In 11 Commands Ko Pakka Yaad Karna Hai — Floor Par 90% Kaam Inhi Par Hota Hai
// ================================================================================


// 1. services.msc — Services Management Console
// --------------------------------------------------------------------------------
// [ CONCEPT: Print Spooler & Services Hota Kya Hai? ]
// Windows ke andar background process ka naam hota hai spoolsv.exe. Iska kaam user ke print document ko memory/disk par hold karna aur printer ko step-by-step deliver karna hota hai taaki application hang na ho.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: 5–10 minute ke andar user ka atka hua print nikalna.
// - Problem 1: Queue me print atka hai ("Deleting..." ya "Error" status)
//   Step 1: [Win + R] dabakar services.msc kholta hai.
//   Step 2: Print Spooler service par right-click karke "Restart" karta hai.
// - Problem 2: GUI se document cancel nahi ho raha (Queue lock ho chuki hai)
//   Step 1: services.msc me jakar Print Spooler ko "Stop" karta hai.
//   Step 2: File Explorer me is folder par jata hai: C:\Windows\System32\spool\PRINTERS
//   Step 3: Wahan maujood sabhi .SPL (print data) aur .SHD (shadow settings) files ko [Shift + Delete] se permanently delete karta hai.
//   Step 4: Wapas services.msc me aakar Print Spooler ko "Start" karta hai.
// - Problem 3: Basic Hardware check
//   USB cable nikal ke wapas lagana, LAN cable me light blink check karna, paper jam ya red light error dekhna.
// - L1 Ki Limit: Agar service restart karne ke thodi der baad Spooler fir ruk gaya, ya driver install nahi ho raha, toh L1 engineer ticket L2 ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Print Spooler baar-baar crash kyun ho raha hai, usko jad se khatam karna.
// - Step 1: Crash Ka Root Cause Pakadna (eventvwr.msc)
//   L2 engineer seedha Event Viewer kholta hai -> Windows Logs -> Application me jata hai aur Event ID 1000 (Application Error) check karta hai:
//   Faulting Application: spoolsv.exe | Faulting Module Name: <Corrupt_Driver>.dll (Exact pata chal jata hai kis driver ne crash kiya).
//   Applications and Services Logs -> Microsoft -> Windows -> PrintService -> Admin me jakar check karta hai kis user ya job se crash hua.
// - Step 2: Corrupt Driver Ko Root Se Hatana (printmanagement.msc)
//   L1 sirf Settings se icon delete karta hai jisse driver reh jata hai. L2 driver ko system se complete wipe karta hai:
//   [Win + R] -> printmanagement.msc -> Custom Filters -> All Drivers me jata hai.
//   Crash karne wale driver par right-click karke "Remove Driver Package" chunta hai (DLL aur registry entries clean hoti hain).
//   Vendor (HP, Canon, Zebra) ki official site se fresh certified driver install karta hai.
// - Step 3: Network Port Configuration Fix Karna (Printer "Offline" Issue)
//   Printer Properties -> Ports tab -> "Configure Port" kholta hai.
//   Check karta hai ki port ka IP printer ke live IP se match karta hai ya nahi.
//   "SNMP Status Enabled" checkbox ko UNCHECK (disable) karta hai (Firewall SNMP drop kare toh printer fake offline dikhata hai, disable karte hi online aa jata hai).
// - Step 4: Automatic Service Recovery Set Karna
//   services.msc -> Print Spooler Properties -> "Recovery" tab me: First failure: "Restart the Service" | Second failure: "Restart the Service".
// - Step 5: Driver Isolation Mode (Crash Prevention)
//   printmanagement.msc me driver par right-click karke "Set Driver Isolation" -> "Isolated" set karta hai (Driver PrintIsolationHost.exe me chalta hai, driver crash ho tab bhi Spooler safe rehta hai).


// ================================================================================

// 2. ncpa.cpl — Network Connections (Network Control Panel Applet)
// --------------------------------------------------------------------------------
// [ CONCEPT: Network Adapter & NDIS Subsystem Hota Kya Hai? ]
// Windows ka network interface controller (NIC) configuration engine (netman.dll). Physical Ethernet, Wi-Fi aur virtual NICs ke IP, Subnet, Gateway aur DNS ko bind karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic connectivity aur disconnected cable ka alert solve karna.
// - Problem 1: No Internet ya Unidentified Network error aana
//   Step 1: [Win + R] -> ncpa.cpl kholna -> Ethernet adapter par right-click karke "Disable" karna.
//   Step 2: 5 second intezar karke wapas right-click -> "Enable" karna (80% network freeze solve ho jata hai).
// - Problem 2: Stuck network cache refresh karna
//   CMD me jakar `ipconfig /release` -> `ipconfig /renew` aur `ipconfig /flushdns` chalana.
// - Problem 3: Physical layer check
//   RJ45 LAN cable nikal kar reconnect karna aur port par Green/Amber link LED blink check karna.
// - L1 Ki Limit: Agar IPv4 me 169.254.x.x (APIPA) aa raha ho ya network driver crash ho, toh L1 ticket L2 ko bhej deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: IP conflict, VLAN issue, DHCP server failure aur packet drops ko solve karna.
// - Step 1: APIPA & DHCP DORA Failure Diagnosis
//   Status -> Details me 169.254.x.x dekh kar samajh jata hai ki DHCP Discover packet ka Offer nahi aaya (VLAN mismatch ya DHCP pool full hai).
// - Step 2: Static IP & DNS Hardcoding (Kiosk/Counter PC)
//   Adapter Properties -> IPv4 Properties me jakar accurate Static IP, Subnet Mask (255.255.255.0), Default Gateway aur Internal DNS hardcode karta hai.
// - Step 3: Speed & Duplex Mismatch Fix
//   Configure -> Advanced tab -> "Speed & Duplex" me jata hai. Agar switch port ke sath Auto-Negotiation fail ho rahi ho, toh use force karke "1.0 Gbps Full Duplex" set karta hai.
// - Step 4: Corrupt TCP/IP Stack & Winsock Reset
//   CMD Admin mode me deep stack repair commands run karta hai:
//   `netsh int ip reset`  aur  `netsh winsock reset` (fir PC reboot karta hai).
// - Step 5: NIC Power Management Fix
//   Configure -> "Power Management" tab me "Allow the computer to turn off this device to save power" ko UNCHECK karta hai taaki idle counter PC disconnect na ho.


// ================================================================================

// 3. devmgmt.msc — Device Manager
// --------------------------------------------------------------------------------
// [ CONCEPT: Plug and Play (PnP) & Hardware Driver Tree Hota Kya Hai? ]
// Windows hardware enumeration console. Motherboard chipset, USB controllers, biometric scanners, printers aur external peripherals ke hardware drivers ko manage karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Peripheral (Scanner, Reader, Printer) ko jaldi se detect karwana.
// - Problem 1: USB device attach kiya lekin PC me response nahi aaya
//   Step 1: [Win + R] -> devmgmt.msc kholna -> Top menu se Action -> "Scan for hardware changes" par click karna.
//   Step 2: USB cable nikal kar PC ke doosre (back panel) USB 3.0 port par lagana.
// - Problem 2: Device par Yellow Exclamation mark (!) dikhna
//   Device par right-click karke "Update driver" -> "Search automatically for drivers" chuno.
// - L1 Ki Limit: Agar driver online na mile ya Code 10 / Code 43 error aaye, toh ticket L2 ko escalate hoti hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Hardware ID se compatible OEM driver dhoondna aur power suspension rokna.
// - Step 1: Device Error Code Diagnosis
//   Device Properties -> General tab me Status padhna:
//   Code 10: Device cannot start (corrupt firmware/incompatible driver).
//   Code 43: Windows has stopped this device because it reported problems (hardware communication fail).
// - Step 2: Hardware ID Se Exact OEM Driver Dhoondna
//   Properties -> Details tab -> Property dropdown se "Hardware Ids" select karta hai.
//   Value (e.g. VEN_8086&DEV_15F3) copy karke OEM vendor site se certified .INF driver package download karke "Have Disk..." se load karta hai.
// - Step 3: Clean Driver Package Uninstall
//   Device par right-click -> "Uninstall device" -> "Attempt to remove the driver for this device" checkbox tick karke pura corrupt cache wipe karta hai.
// - Step 4: USB Root Hub Selective Suspend Disable
//   Universal Serial Bus controllers -> USB Root Hub -> Properties -> Power Management -> "Allow computer to turn off this device to save power" disable karta hai.
// - Step 5: Ghost / Hidden Phantom Devices Cleanup
//   CMD Admin me command chalata hai: `set devmgr_show_nonpresent_devices=1` aur Device Manager me View -> "Show hidden devices" enable karke puraane disconnected phantom drivers delete karta hai.


// ================================================================================

// 4. eventvwr.msc — Windows Event Viewer
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Centralized Event Logging System (eventlog) ]
// Operating system ka black box forensic repository (.evtx files). Application crashes, security audits, kernel panics aur hardware failure ka timestamped record rakhta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: User ke complaint time par system me red error dekhna.
// - Problem 1: User kehta hai PC achanak freeze hokar restart hua
//   Step 1: [Win + R] -> eventvwr.msc kholna.
//   Step 2: Windows Logs -> System me jakar Red color ka "Error" icon dekhna.
// - L1 Ki Limit: Log me technical hexadecimal codes (e.g. 0xc0000005) dekh kar L1 engineer samajh nahi pata aur ticket L2 ko bhej deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Crash karne wale exact DLL module, BSOD bugcheck aur service failure ko identify karna.
// - Step 1: Application Crash Root Cause (Event ID 1000)
//   Windows Logs -> Application me Filter Current Log lagata hai Event ID "1000":
//   Faulting Application Name: (e.g. chrome.exe ya custom ERP)
//   Faulting Module Name: (e.g. ntdll.dll ya ucrtbase.dll) note karke root crash point nikalta hai.
// - Step 2: Unexpected Shutdown & BSOD Diagnosis (Event ID 41)
//   Windows Logs -> System me Event ID "41" (Kernel-Power) check karta hai. BugcheckCode (e.g. 0x0000009F Driver Power State ya 0x0000000A IRQL Not Less or Equal) se hardware/driver fault trace karta hai.
// - Step 3: Service Dependency Failure (Event ID 7000 / 7001)
//   System log me trace karta hai ki kis dependent background service ke fail hone par main system service crash hui.
// - Step 4: Custom Diagnostic View Banana
//   Action -> "Create Custom View" banata hai jisme Critical aur Error select karke Last 12 Hours ke events filter karta hai.
// - Step 5: Exporting Forensic Logs (.evtx)
//   Target log par right-click -> "Save All Events As..." karke escalation packet banakar vendor ya L3 support ko bhejta hai.


// ================================================================================

// 5. appwiz.cpl — Programs and Features (Add or Remove Programs)
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Installer Subsystem (MSI) & Application Registry Database ]
// System par installed applications, runtimes (Visual C++, .NET), aur software updates ka central control console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Corrupted software ko repair karna ya clean reinstall wizard chalana.
// - Problem 1: Software open hone par error de raha hai
//   Step 1: [Win + R] -> appwiz.cpl kholna -> List se software select karna.
//   Step 2: Top bar se "Repair" button par click karke repair wizard chalana.
// - Problem 2: Standard application uninstall karna
//   Software select karke "Uninstall" click karna aur popup accept karna.
// - L1 Ki Limit: Agar uninstall me "Another installation is already in progress" ya "Error 1603 / Access Denied" aaye, toh ticket L2 ko escalate hoti hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Stuck installer locks break karna aur residual registry keys wipe karna.
// - Step 1: Stuck Installer Kill & MSI Service Reset
//   Task Manager me background me phanse hue `msiexec.exe` processes ko End Task karta hai, aur CMD Admin me MSI service restart karta hai:
//   `net stop msiserver` && `net start msiserver`
// - Step 2: Residual Files & Registry Deep Wipe
//   Corrupt software ka uninstaller fail hone par `C:\Program Files` aur `C:\ProgramData` se folders manually delete karta hai.
//   Registry Editor (`regedit`) me jakar:
//   `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall` se software ki specific GUID key delete karta hai.
// - Step 3: Microsoft Program Install and Uninstall Troubleshooter
//   Official Microsoft utility run karke corrupted registry keys aur blocked MSI install tags ko automatically clear karta hai.
// - Step 4: Silent CLI Uninstall via GUID
//   CMD Admin me silent removal command chalata hai:
//   `msiexec /x {PRODUCT-GUID} /qn /norestart`
// - Step 5: Dependency Runtime Rebuild
//   Crashing application ke required Microsoft Visual C++ Redistributable (2015-2022 x86/x64) runtimes ko clean download karke reinstall karta hai.


// ================================================================================

// 6. diskmgmt.msc — Disk Management (Logical Disk Manager)
// --------------------------------------------------------------------------------
// [ CONCEPT: Virtual Disk Service (VDS) & Storage Partitioning Subsystem ]
// Physical drives (HDD, NVMe SSD), partitions (MBR/GPT), file systems (NTFS/FAT32), aur drive letters ka management console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Missing partition ko visible karna aur flash drive verify karna.
// - Problem 1: Flash drive ya second partition 'This PC' me show nahi ho raha
//   Step 1: [Win + R] -> diskmgmt.msc kholna.
//   Step 2: Lower pane me healthy blue partition par right-click -> "Change Drive Letter and Paths...".
//   Step 3: "Add..." par click karke letter D: ya E: assign karna.
// - L1 Ki Limit: Agar disk "Offline", "Not Initialized", ya "RAW" show kare, toh data loss ke darr se ticket L2 ko escalate kar di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Disk policy conflicts, file system corruption aur GPT initialization solve karna.
// - Step 1: Policy Conflict Offline Disk Online Karna
//   Agar disk grey box par "Offline (Policy Conflict)" dikhaye: Right-click -> "Online" par click karke disk activate karta hai.
// - Step 2: Disk Initialization (GPT vs MBR)
//   New unallocated disk par right-click -> "Initialize Disk" -> Modern UEFI systems ke liye **GPT (GUID Partition Table)** select karta hai (MBR 2TB se upar fail hota hai).
// - Step 3: Read-Only Attribute Clear via DISKPART
//   CMD Admin me jakar disk lock hatata hai:
//   `diskpart` -> `list disk` -> `select disk X` -> `attributes disk clear readonly`
// - Step 4: File System Corruption Fix via CHKDSK
//   Agar drive RAW show kare: CMD Admin me `chkdsk D: /f /r` run karke corrupted Master File Table (MFT) aur bad sectors recover karta hai.
// - Step 5: Virtual Disk Service Glitch Reset
//   Agar console "Connecting to Virtual Disk Service..." par freeze ho jaye: `services.msc` me jakar "Virtual Disk" service ko Restart karta hai.


// ================================================================================

// 7. taskmgr — Windows Task Manager (Shortcut: Ctrl + Shift + Esc)
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Telemetry Engine & Process Execution Monitor ]
// OS kernel processes, thread execution, handles, CPU scheduler, RAM paging, aur disk I/O ka real-time telemetry monitor.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Frozen software ko close karna aur general resource load dekhna.
// - Problem 1: Application par "Not Responding" aa gaya
//   Step 1: Keyboard par [Ctrl + Shift + Esc] dabana.
//   Step 2: Frozen app par right-click karke "End task" chuna.
// - Problem 2: PC hang ho raha hai
//   Processes tab me CPU aur Memory column par click karke top application dekhna.
// - L1 Ki Limit: Agar End task karne par "Access is Denied" aaye ya process turant dobara start ho jaye, toh L1 escalate karta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Rogue worker threads kill karna, memory leak trace karna aur locked files release karna.
// - Step 1: Kill Entire Process Tree
//   Details tab me jakar targeted process par right-click -> **"End process tree"** select karta hai taaki background child threads bhi kill hon.
// - Step 2: Memory Leak (Non-Paged Pool) Diagnosis
//   Performance -> Memory me "Non-paged pool" check karta hai; agar ye 2-4GB+ cross kar raha ho toh faulty hardware driver memory leak kar raha hai.
// - Step 3: Locked File Resource Monitor Handle Trace
//   Performance -> "Open Resource Monitor" (resmon) -> CPU tab -> "Associated Handles" me locked file ka naam search karke handle hold karne wale process ko kill karta hai.
// - Step 4: Creating Process Crash Dump File
//   Details tab me process par right-click -> "Create dump file" (.DMP) banakar bug analysis ke liye preserve karta hai.
// - Step 5: Startup Impact Audit
//   Startup Apps me unnecessary heavy programs ko "Disable" karta hai aur Task Scheduler audit karta hai.


// ================================================================================

// 8. mstsc — Remote Desktop Connection (Microsoft Terminal Services Client)
// --------------------------------------------------------------------------------
// [ CONCEPT: Remote Desktop Protocol (RDP) Subsystem (Port 3389) ]
// Remote Desktop Protocol (mstsc.exe). Network ke through remote Windows machine ka GUI session lene ke liye use hota hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: User ke remote desktop ka quick session lena.
// - Problem 1: Remote counter PC ko login karna
//   Step 1: [Win + R] -> mstsc -> IP address enter karna -> "Connect" dabana.
//   Step 2: Domain credentials daalna (`DOMAIN\username`).
// - L1 Ki Limit: "Remote Desktop cannot connect to the remote computer" error aane par L1 engineer ticket L2 ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Firewall blockage, NLA mismatch, aur remote registry fix karna.
// - Step 1: CLI Port 3389 Reachability Test
//   PowerShell me verify karta hai: `Test-NetConnection -ComputerName <IP> -Port 3389` (Agar False aaye toh firewall ya routing issue hai).
// - Step 2: Remote Machine Par RDP Force Enable Karna (Remote Registry)
//   Remote machine ki registry connect karta hai:
//   `HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server` me jakar `fDenyTSConnections` ko `0` set karta hai.
// - Step 3: Network Level Authentication (NLA) Mismatch Fix
//   Agar client NLA verify na kar sake: Remote PC me `UserAuthentication` ko `0` set karke connect karta hai.
// - Step 4: Restart Remote Desktop Service Remotely
//   PowerShell Admin se remote service restart karta hai:
//   `Restart-Service -ComputerName <RemotePC> -Name TermService -Force`
// - Step 5: Admin Console Session Access
//   Run dialog me command chalata hai: `mstsc /v:<IP> /admin` taaki server session 0 ka physical console access ho sake.


// ================================================================================

// 9. cmd — Windows Command Prompt (cmd.exe)
// --------------------------------------------------------------------------------
// [ CONCEPT: Win32 Command Line Interpreter & Diagnostic Shell ]
// System management routines, batch scripts, network diagnostic utilities, aur administrative repair commands ka execution shell.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic connectivity aur DNS cache clear karna.
// - Problem 1: Internet check karna -> `ping google.com`
// - Problem 2: DNS refresh karna -> `ipconfig /flushdns`
// - Problem 3: IP address check karna -> `ipconfig`
// - L1 Ki Limit: Deep system corruption ya network stack fail hone par ticket L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: System integrity repair, network stack reset aur Group Policy audit.
// - Step 1: System File Integrity Repair (DISM & SFC)
//   CMD Admin mode me sequence chalata hai:
//   1. `DISM /Online /Cleanup-Image /RestoreHealth` (Windows Component Store online repair karta hai).
//   2. `sfc /scannow` (Corrupt OS system files ko fresh copy se replace karta hai).
// - Step 2: Complete Network Stack Reset
//   Bina internet ke stubborn issue par: `netsh int ip reset` aur `netsh winsock reset` chalakar reboot karta hai.
// - Step 3: Domain Group Policy Audit
//   `gpupdate /force` ke baad policy audit karta hai: `gpresult /r` ya HTML report generate karta hai: `gpresult /h C:\policy.html`.
// - Step 4: Active Network Connection Port Audit
//   `netstat -ano | findstr :3389` se dekhta hai ki port kis Process ID (PID) par listening state me hai.
// - Step 5: Boot-time Disk Repair
//   `chkdsk C: /f /r` schedule karke bad clusters repair karta hai.


// ================================================================================

// 10. powershell — Windows PowerShell Engine
// --------------------------------------------------------------------------------
// [ CONCEPT: .NET Framework Object-Oriented Management Shell ]
// Windows management instrumentation (WMI/CIM), object-based pipelines, aur system recovery ka advanced CLI engine.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic CLI commands aur service status dekhna.
// - Problem 1: Print service status check karna -> `Get-Service Spooler`
// - Problem 2: Basic script run karna.
// - L1 Ki Limit: Execution policy block (`Restricted`) ya pipeline filtering aane par L2 ko escalate karna.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Script unblocking, deep port telemetry, aur remote management.
// - Step 1: Execution Policy Unblock Karna
//   Script run na hone par process scope me bypass lagata hai:
//   `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
// - Step 2: Advanced Port & Trace Diagnostics
//   `Test-NetConnection -ComputerName <IP> -Port <Port> -InformationLevel Detailed` se route hops aur TCP handshake trace karta hai.
// - Step 3: Top CPU Consuming Processes Filter
//   `Get-Process | Sort-Object CPU -Descending | Select-Object -First 5` run karke top heavy application ka exact PID nikalta hai.
// - Step 4: Forceful Service Bouncing
//   `Restart-Service -Name <service> -Force` (Dependent services ke sath cleanly reload karta hai).
// - Step 5: Remote Execution via PSRemoting
//   `Invoke-Command -ComputerName <PC> -ScriptBlock { Restart-Service Spooler }` se user ke desk par jaye bina remotely fix karta hai.


// ================================================================================

// 11. control — Classic Windows Control Panel
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Win32 Administrative Control Engine ]
// System hardware abstraction, security credentials, mail profiles, aur storage encryption ka master control console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic settings aur layout adjust karna.
// - Problem 1: Classic view kholna -> "View by: Small icons" select karna.
// - Problem 2: Sound playback device set karna -> Sound applet me default speaker choose karna.
// - Problem 3: Basic mouse pointer ya keyboard language change karna.
// - L1 Ki Limit: Corrupt Outlook profiles, BitLocker recovery prompt, ya domain credential mismatch par L2 ko escalate karte hain.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt Outlook profiles, cached domain credentials aur BitLocker audit.
// - Step 1: Rebuilding Corrupted Outlook Profile (Mail Applet)
//   Control Panel > "Mail (Microsoft Outlook)" > "Show Profiles..." > "Add..." naya fresh profile create karke default set karta hai (bina Outlook khole profile crash fix karna).
// - Step 2: Stale Domain Credentials Cleanup (Credential Manager)
//   Run: `control keymgr.dll` (Credential Manager) > Windows Credentials me jakar expired domain passwords wipe karta hai taaki user account bar-bar lock na ho.
// - Step 3: BitLocker Drive Encryption Audit
//   Control Panel > BitLocker Drive Encryption me jakar TPM chip status aur Recovery Key backup verify karta hai.
// - Step 4: Kiosk / 24x7 Counter Sleep Prevention (Power Options)
//   "High performance" plan force karke hard disk sleep aur PCI Express Link State power management ko "Off/Never" par set karta hai.


// ================================================================================


// ========================================= Section 2: Extra & Situation-Based Commands ======================================= //
// Ye Commands Kabhi-Kabhi (Specific Situation Aane Par) Use Hoti Hain
// ================================================================================


// 12. compmgmt.msc
// * Naam: Computer Management (All-in-One Master Console)
// * Kaam: Device Manager, Disk Management, Event Viewer, Shared Folders aur Local Users ko ek hi window se control karna.
// * STEP 1: PEHLA TAREEQA (Quick Multi-Tool Navigation):
// Step 1: [Win + R] -> type "compmgmt.msc" -> Enter.
// Step 2: Left sidebar se "System Tools" ya "Storage" expand karo aur desired utility par click karo.
// * STEP 2: DOOSRA TAREEQA (Shared Folders & Active Sessions Check):
// Step A: Left pane mein System Tools > "Shared Folders" expand karo.
// Step B: "Shares" par click karke shared folder path dekho; "Sessions" par click karke connected users trace karo.


// 13. lusrmgr.msc
// * Naam: Local Users and Groups
// * Kaam: Computer ke local user accounts, local passwords, aur local security groups manage karna.
// * Airport Use Case: Local Administrator password reset karna ya domain user ko PC par local administrative rights dena.

// * STEP 1: PEHLA TAREEQA (Local User Password Reset / Unlock):
// Step 1: [Win + R] -> type "lusrmgr.msc" -> Enter.
// Step 2: "Users" folder par double-click karo -> targeted user (e.g. Administrator) par RIGHT-CLICK karo -> "Set Password..." -> "Proceed" -> Naya password enter karo -> "OK".
// Step 3 (Unlock): User par RIGHT-CLICK -> "Properties" -> "Account is locked out" untick karo -> "Apply" -> "OK".

// * STEP 2: DOOSRA TAREEQA (Domain User ko Local Administrator Banane Ka Process):
// Step A: Left pane se "Groups" folder par click karo -> Center pane mein "Administrators" group par DOUBLE-CLICK karo.
// Step B: "Add..." button par click karo -> domain format mein ID type karo (e.g. AIRPORT\tausif.admin) -> "Check Names" click karo (underlined hoga) -> "OK" -> "Apply" -> "OK".

// * Interview Question & Answer:
// Q: "Local user aur Domain user mein kya difference hai?"
// Ans: "Local user sirf usi local PC par exist karta hai (SAM database). Domain user Active Directory Domain Controller par store hota hai aur pure network/domain mein authorized computers par login kar sakta hai."


// 14. sysdm.cpl
// * Naam: System Properties
// * Kaam: Computer Name change karna, Workgroup se Domain join karna, Environment Variables set karna.
// * Airport Use Case: Naye counter PC ko airport domain (e.g. airport.local) mein join karana.

// * STEP 1: PEHLA TAREEQA (Computer Name Change & Domain Join):
// Step 1: [Win + R] -> type "sysdm.cpl" -> Enter (Computer Name tab khulega).
// Step 2: "Change..." button par click karo.
// Step 3: "Computer name:" box mein standard hostname daalo (e.g. DXB-T3-CHK-014).
// Step 4: "Member of" mein "Domain" choose karo -> domain name type karo (e.g. airport.local) -> "OK".
// Step 5: Domain Admin credentials maangne par Username/Password enter karo -> "Welcome to domain" popup aayega -> "OK" -> "Restart Now".

// * STEP 2: DOOSRA TAREEQA (Advanced Performance & Environment Variables):
// Step A: "Advanced" tab par click karo -> "Performance" ke andar "Settings..." button par click karo.
// Step B: "Adjust for best performance" select karo (sab visual effects band ho jayenge) -> "Apply" -> "OK".
// Step C: "Environment Variables..." button par click karke System Variables mein Path verify karo.


// 15. gpedit.msc
// * Naam: Local Group Policy Editor
// * Kaam: Windows OS ke local security policies, restrictions, USB blocking, aur auto-updates control karna.
// * STEP 1: PEHLA TAREEQA (Local Restriction Apply Karna - USB Port Block):
// Step 1: [Win + R] -> type "gpedit.msc" -> Enter.
// Step 2: Navigate: Computer Configuration > Administrative Templates > System > Removable Storage Access.
// Step 3: "All Removable Storage classes: Deny all access" par double-click karo -> "Enabled" select karo -> "Apply" -> "OK".
// * STEP 2: DOOSRA TAREEQA (Policy Force Refresh Karna):
// Step A: Policy change karne ke baad [Win + R] dabao -> type karo "cmd" -> Enter.
// Step B: Command chalao: `gpupdate /force` taaki nayi policy instantly apply ho jaye.


// 16. secpol.msc
// * Naam: Local Security Policy
// * Kaam: Password complexity rules, Account Lockout policies (e.g., 5 invalid attempts ke baad lockout duration), aur Audit logs configure karna.
// * STEP 1: PEHLA TAREEQA (Account Lockout Policy Setup):
// Step 1: [Win + R] -> type "secpol.msc" -> Enter.
// Step 2: Security Settings > Account Policies > Account Lockout Policy par click karo.
// Step 3: "Account lockout threshold" par double-click karke invalid attempts (e.g. 5) set karo -> "OK".
// * STEP 2: DOOSRA TAREEQA (Password Complexity & Expiration Rules):
// Step A: Security Settings > Account Policies > Password Policy par click karo.
// Step B: "Password must meet complexity requirements" ko "Enabled" karo aur "Maximum password age" (e.g. 90 days) set karo.


// 17. firewall.cpl  &  wf.msc
// * firewall.cpl: Basic Windows Defender Firewall Control Panel.
// * wf.msc: Windows Defender Firewall with Advanced Security.
// * Airport Use Case: Check-in client DCS server ke saath communicate nahi kar pa raha kyunki port 8080 block hai.

// * STEP 1: PEHLA TAREEQA (Basic Firewall Status & Quick App Allow):
// Step 1: [Win + R] -> type "firewall.cpl" -> Enter.
// Step 2: Left sidebar se "Allow an app or feature through Windows Defender Firewall" par click karo.
// Step 3: "Change settings" par click karo -> Application ke samne Domain/Private boxes par tick lagao -> "OK".

// * STEP 2: DOOSRA TAREEQA (wf.msc se Custom Port Open Karna — Inbound Rule):
// Step A: [Win + R] -> type "wf.msc" -> Enter.
// Step B: Left pane mein "Inbound Rules" par click karo -> Right pane mein "New Rule..." par click karo.
// Step C: "Port" select karo -> Next -> "TCP" select karke "Specific local ports" mein port daalo (e.g. 8080) -> Next.
// Step D: "Allow the connection" select karo -> Next -> Domain/Private/Public tick rehne do -> Next -> Rule Name daalo -> "Finish".


// 18. inetcpl.cpl
// * Naam: Internet Properties
// * Kaam: Proxy settings, Trusted Sites, SSL/TLS certificates aur browser security zones configure karna.
// * Airport Use Case: Web-based DCS application ya airport internal portal open nahi ho raha kyunki trusted site add nahi hai ya proxy mismatch hai.

// * STEP 1: PEHLA TAREEQA (Trusted Sites Add Karna):
// Step 1: [Win + R] -> type "inetcpl.cpl" -> Enter.
// Step 2: "Security" tab par click karo -> "Trusted sites" icon par click karo -> "Sites" button par click karo.
// Step 3: "Add this website to the zone:" box mein internal URL daalo (e.g. https://*.emirates.corp) -> "Add" -> "Close".

// * STEP 2: DOOSRA TAREEQA (Proxy Server Setup & SSL State Clear):
// Step A: "Connections" tab par click karo -> "LAN settings" button par click karo.
// Step B: "Use a proxy server for your LAN" tick mark karke Proxy Address aur Port fill karo -> "OK".
// Step C: "Content" tab par jao -> "Clear SSL state" button par click karo ("The SSL cache was successfully cleared").


// 19. msinfo32
// * Naam: System Information
// * Kaam: Hardware specs, Processor, Motherboard model, BIOS version, OS build, RAM type, Secure Boot status check karna.
// * STEP 1: PEHLA TAREEQA (Quick Hardware & OS Version Check):
// Step 1: [Win + R] -> type "msinfo32" -> Enter.
// Step 2: "System Summary" par click karo -> OS Name, System Model (HP/Dell), Processor, aur Total Physical RAM note karo.
// * STEP 2: DOOSRA TAREEQA (BIOS & Hardware Conflicts Check):
// Step A: "System Summary" mein "BIOS Version/Date" aur "Secure Boot State" verify karo.
// Step B: Left pane se "Hardware Resources" > "Conflicts/Sharing" expand karke hardware device conflicts check karo.


// 20. resmon
// * Naam: Resource Monitor
// * Kaam: CPU, Memory, Disk, aur Network bandwidth ka deep real-time breakdown.
// * STEP 1: PEHLA TAREEQA (Listening Ports & Network Traffic Check):
// Step 1: [Win + R] -> type "resmon" -> Enter.
// Step 2: "Network" tab par click karo -> "Listening Ports" expand karo aur check karo kaun sa process kis port par listen kar raha hai.
// * STEP 2: DOOSRA TAREEQA (Locked File ko Unlock Karna — Associated Handles):
// Step A: "CPU" tab par click karo -> "Associated Handles" section expand karo.
// Step B: "Search Handles" box mein locked file ka name type karo.
// Step C: Jis process ne file lock ki hai uspe RIGHT-CLICK karo -> "End Process" par click karo (File unlock ho jayegi).


// 21. msconfig
// * Naam: System Configuration Utility
// * Kaam: Safe Mode boot configure karna, Clean Boot test karna.
// * STEP 1: PEHLA TAREEQA (Safe Mode Boot Setup):
// Step 1: [Win + R] -> type "msconfig" -> Enter -> "Boot" tab par jao.
// Step 2: "Safe boot" checkbox tick karo ("Minimal" radio button) -> "Apply" -> "OK" -> "Restart".
// * STEP 2: DOOSRA TAREEQA (Clean Boot Diagnostics — 3rd Party Issues Trace Karna):
// Step A: "Services" tab par jao -> Neeche "Hide all Microsoft services" par tick lagao (Important).
// Step B: "Disable all" button par click karo -> "Apply" -> "OK" -> Restart.


// 22. cleanmgr
// * Naam: Disk Cleanup
// * Kaam: Temporary files, Windows update cache, memory dumps delete karke C: drive space free karna.
// * STEP 1: PEHLA TAREEQA (Basic Drive Cleanup):
// Step 1: [Win + R] -> type "cleanmgr" -> Enter -> Drive C: select karke "OK" karo.
// Step 2: Temporary files aur Recycle Bin tick mark karke "OK" -> "Delete Files" karo.
// * STEP 2: DOOSRA TAREEQA (Deep System Files & Update Cache Cleanup):
// Step A: cleanmgr box mein neeche "Clean up system files" button par click karo -> C: select karo.
// Step B: "Windows Update Cleanup" tick mark karo (GBs of space khali hogi) -> "OK" -> "Delete Files".


// 23. dxdiag
// * Naam: DirectX Diagnostic Tool
// * Kaam: Display adapters, Screen resolution, Graphics memory aur Display drivers test karna.
// * STEP 1: PEHLA TAREEQA (Display Specs & Driver Check):
// Step 1: [Win + R] -> type "dxdiag" -> Enter.
// Step 2: "Display" tab par click karo -> Device Name, Approx Total Memory aur Driver Model verify karo.
// * STEP 2: DOOSRA TAREEQA (Hardware Acceleration & Direct3D Verification):
// Step A: "Display" tab mein "DirectDraw Acceleration", "Direct3D Acceleration" dono "Enabled" hone chahiye.


// 24. %temp%  &  temp
// * Kaam: Temporary cache files delete karna jab applications slow ya freeze ho jayein.
// * STEP 1: PEHLA TAREEQA (User Temp Folder Clear — %temp%):
// Step 1: [Win + R] -> type "%temp%" -> Enter.
// Step 2: [Ctrl + A] dabao -> [Shift + Delete] dabao -> "Yes" confirm karo.
// Step 3: "File In Use" popup aane par "Do this for all current items" tick karke "Skip" click karo.
// * STEP 2: DOOSRA TAREEQA (System-Level Temp Folder Clear — temp):
// Step A: [Win + R] -> type "temp" -> Enter -> Permission prompt par "Continue" click karo.
// Step B: [Ctrl + A] -> [Shift + Delete] -> In-use files par "Skip" karo.


// 25. control printers  (ya shell:PrintersFolder)
// * Kaam: Classic "Devices and Printers" folder kholna.
// * Airport Use Case: Boarding pass printer (ATB), Bag-tag printer (BTP) ki print queue dekhna, stuck documents cancel karna, default printer set karna.

// * STEP 1: PEHLA TAREEQA (Print Queue Clear & Set Default Printer):
// Step 1: [Win + R] -> type "control printers" -> Enter.
// Step 2: Targeted printer par RIGHT-CLICK karo -> "See what's printing" par click karo.
// Step 3: Top menu se "Printer" > "Cancel All Documents" select karo -> "Yes".
// Step 4: Printer par RIGHT-CLICK -> "Set as default printer" par click karo.

// * STEP 2: DOOSRA TAREEQA (Printer Properties & Port Test — Jab Printer Offline Show Ho):
// Step A: Printer par RIGHT-CLICK karo -> "Printer properties" par click karo.
// Step B: "Ports" tab par click karo -> Check karo correct Standard TCP/IP Port selected hai ya nahi.
// Step C: "General" tab par jaakar "Print Test Page" button click karke physical print verify karo.


// 26. shell:startup
// * Kaam: Startup Folder open karna taaki boot hote hi apps auto-start ho sakein.
// * STEP 1: PEHLA TAREEQA (Current User Startup Shortcut Add Karna):
// Step 1: [Win + R] -> type "shell:startup" -> Enter.
// Step 2: Target application ka shortcut is folder mein paste kar do.
// * STEP 2: DOOSRA TAREEQA (All Users Kiosk Auto-Start — shell:common startup):
// Step A: [Win + R] -> type "shell:common startup" -> Enter.
// Step B: Application shortcut paste karo taaki computer par koi bhi user login kare app auto-launch ho jaye.


// 27. netplwiz
// * Naam: User Accounts GUI Tool
// * Airport Use Case: Flight Schedule Display (FIDS) monitors ya unattended kiosk PCs par PC boot hote hi auto-login configure karna bina password maange.

// * STEP 1: PEHLA TAREEQA (Auto-Login Configure Karna Without Password):
// Step 1: [Win + R] -> type "netplwiz" -> Enter.
// Step 2: List se targeted kiosk user select karo (e.g. FIDS_User).
// Step 3: Upar checkbox: "Users must enter a user name and password to use this computer" se tick UNCHECK (hata) do.
// Step 4: "Apply" par click karo -> User ka Password 2 baar enter karo -> "OK" -> "OK".

// * STEP 2: DOOSRA TAREEQA (User Group Membership Change Karna):
// Step A: User select karo -> "Properties" button par click karo.
// Step B: "Group Membership" tab par click karo -> Standard User ya Administrator radio button select karo -> "OK".


// 28. outlook.exe /safe
// * Kaam: Microsoft Outlook ko Safe Mode mein open karna (Third-party Add-ins bypass karke).
// * STEP 1: PEHLA TAREEQA (Safe Mode Launch & Problematic Add-ins Disable):
// Step 1: [Win + R] -> type "outlook.exe /safe" -> Enter -> Profile select karke "OK" karo.
// Step 2: File > Options > Add-ins > Manage "COM Add-ins" > "Go..." par click karo.
// Step 3: Crashing add-ins untick karo -> "OK" -> Outlook normally restart karo.
// * STEP 2: DOOSRA TAREEQA (Corrupted .OST File Rebuild):
// Step A: Outlook band karo -> [Win + R] -> type `%localappdata%\Microsoft\Outlook` -> Enter.
// Step B: Corrupt `.ost` file ko rename karke `.ost.old` kar do -> Outlook normal start karo (Nayi fresh .ost file auto-rebuild hogi).


// ========================================= Interview Cheatsheet: Kis Situation Me Kaun Sa Command? ======================================= //


// 1. Situation: "Airport Counter par Boarding Pass printer print nahi kar raha, queue stuck hai."
// -> Action: [Win + R] -> `services.msc` (Print Spooler Right-Click > Restart).
// Agar tab bhi na ho -> Stop service -> `C:\Windows\System32\spool\PRINTERS` se files delete -> Start service.

// 2. Situation: "Counter PC par network disconnect ho gaya / DCS server unreachable."
// -> Action: [Win + R] -> `ncpa.cpl` (Ethernet Right-Click > Disable > Enable).
// Status > Details mein IP verify karo. CMD mein `ping <Gateway>` aur `ipconfig /renew` run karo.

// 3. Situation: "OCR Passport Scanner ya Barcode Reader plug karne par detect nahi ho raha."
// -> Action: [Win + R] -> `devmgmt.msc` -> Action > "Scan for hardware changes".
// USB Root Hub Properties > Power Management se "Allow turn off to save power" uncheck karo.

// 4. Situation: "Check-in application freeze ho gayi aur cursor wheel ghoom raha hai."
// -> Action: Keyboard par [Ctrl + Shift + Esc] -> Task Manager -> Not Responding application par Right-Click > "End task".
// Fast cleanup ke liye [Win + R] -> `%temp%` se cache clear karo.

// 5. Situation: "FIDS flight information display PC restart hone par bina password ke automatic login hona chahiye."
// -> Action: [Win + R] -> `netplwiz` -> "Users must enter user name and password..." uncheck karo -> Password set karke Apply karo.

// 6. Situation: "Application achanak crash ho gayi bina kisi error popup ke."
// -> Action: [Win + R] -> `eventvwr.msc` -> Windows Logs > Application > Filter by "Critical" & "Error" -> Event ID 1000 check karo.

// 7. Situation: "Remote gate terminal ko desk par baithe troubleshoot karna hai."
// -> Action: [Win + R] -> `mstsc` (Remote Desktop Connection via Port 3389).

// ========================================= Note Created for Tausif Qureshi ======================================= //
