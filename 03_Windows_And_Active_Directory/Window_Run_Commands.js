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
// [ CONCEPT: Print Spooler & Background Services ]
// Windows ke background daemons (services) ko manage karne ka master console. Print Spooler (spoolsv.exe) user ke document ko memory/disk par hold karta hai aur printer ko step-by-step deliver karta hai taaki application hang na ho.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: 5 minute ke andar user ka atka hua print nikalna aur status dekhna.

// Problem 1: Print Queue Me Document Atka Hai ("Deleting..." ya "Error" Status)
// -> Command: `Win + R` -> type `services.msc` -> Enter -----> Services console khol kar "Print Spooler" par RIGHT-CLICK -> "Restart" select karta hai (Print Spooler restart karke atka print clear karne ke liye).

// Problem 2: Queue Lock Ho Chuki Hai (Document GUI Se Cancel Nahi Ho Raha)
// -> Step A (Service Stop): `services.msc` me jakar "Print Spooler" par RIGHT-CLICK -> "Stop" karta hai.
// -> Step B (Queue Clear): `Win + R` -> type `C:\Windows\System32\spool\PRINTERS` -> Enter -----> Sabhi `.SPL` (print data) aur `.SHD` (shadow settings) files ko [Shift + Delete] se delete karta hai (Corrupt print buffer files permanently clean karne ke liye).
// -> Step C (Service Start): Wapas `services.msc` me aakar "Print Spooler" par RIGHT-CLICK -> "Start" karta hai.

// Problem 3: Basic Hardware Check
// -> Physical Check -----> USB cable reconnect karna, network printer me green link blink dekhna, aur paper jam/toner check karna.

// Problem 4: Printer Status "Offline" Dikh Raha Hai (User Misclick)
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Target printer par DOUBLE-CLICK -> top menu me "Printer" -> "Use Printer Offline" par agar TICK (✔) laga ho, toh click karke UNCHECK karta hai (Printer instantly online aa jata hai).

// Problem 5: Laptop Wi-Fi Scan Nahi Kar Raha / "No Wi-Fi Networks Found" (WLAN AutoConfig Stopped)
// -> Command: `Win + R` -> type `services.msc` -> Enter -----> "WLAN AutoConfig" (WlanSvc) par RIGHT-CLICK -> "Restart" select karta hai; agar Stopped ho toh RIGHT-CLICK -> "Properties" -> Startup type me "Automatic" set karke "Start" dabata hai -> "Apply" -> "OK" (Turant available Wi-Fi networks scan hona start ho jate hain).

// Problem 6: Speaker Icon Par Red Cross 'X' / Sound Output Gayab (Windows Audio Stopped)
// -> Command: `Win + R` -> type `services.msc` -> Enter -----> "Windows Audio" (AudioSrv) par RIGHT-CLICK -> "Restart" karta hai -> Popup aayega "Windows Audio Endpoint Builder will also restart", "Yes" confirm karta hai (Audio turant normal ho jata hai).

// Problem 7: Windows Update 0% Par Atka Hai (wuauserv & BITS Stuck Download)
// -> Step A (Services Stop): `services.msc` me "Windows Update" aur "Background Intelligent Transfer Service" (BITS) dono par RIGHT-CLICK -> "Stop" karta hai.
// -> Step B (Clear Cache): `Win + R` -> type `C:\Windows\SoftwareDistribution\Download` -> Enter -> saari temporary download files [Shift + Delete] se delete karta hai.
// -> Step C (Services Start): Wapas services console me dono services ("Windows Update" aur "BITS") par RIGHT-CLICK -> "Start" select karta hai (Fresh update download trigger ho jata hai).

// L1 Ki Limit:
// -> Agar service restart karne ke thodi der baad Spooler fir se ruk jaye, "Use Printer Offline" uncheck karne par bhi printer offline hi dikhaye, ya service crash loop me chali jaye, toh issue corrupt driver, registry lock ya network SNMP port block ka hota hai, jise L2 engineer root cause se fix karta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Print Spooler baar-baar crash kyun ho raha hai, usko jad se khatam karna.

// Step 1: Crash Ka Root Cause Pakadna (Event Viewer)
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> "Windows Logs" > "Application" me Event ID 1000 check karta hai (`Faulting Module: <Corrupt_Driver>.dll`). Aur "Applications and Services Logs" > "Microsoft" > "Windows" > "PrintService" > "Admin" me jakar crash karne wala user aur document trace karta hai.

// Step 2: Corrupt Driver Ko Root Se Wipe Karna (Print Management)
// -> Command: `Win + R` -> type `printmanagement.msc` -> Enter -----> "Custom Filters" > "All Drivers" me jata hai -> crash karne wale driver par RIGHT-CLICK -> "Remove Driver Package..." select karke clean wipe karta hai, fir vendor site se fresh driver install karta hai.

// Step 3: Network Printer Port Fix (Printer "Offline" Glitch)
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Printer par RIGHT-CLICK -> "Printer Properties" > "Ports" tab > "Configure Port..." me jakar "SNMP Status Enabled" ko UNCHECK karta hai (Firewall SNMP block kare toh printer fake offline dikhata hai).

// Step 4: Automatic Service Recovery Rules Set Karna
// -> Command: `Win + R` -> type `services.msc` -> Enter -----> "Print Spooler" par RIGHT-CLICK -> "Properties" > "Recovery" tab me First failure aur Second failure dono par "Restart the Service" set karta hai (Background me crash hone par automatic restart).

// Step 5: Driver Isolation Mode Set Karna (Spooler Crash Protection)
// -> Command: `Win + R` -> type `printmanagement.msc` -> Enter -----> Driver par RIGHT-CLICK -> "Set Driver Isolation" -> "Isolated" chunta hai (Agar driver dubara crash bhi ho, toh Spooler aur poore floor ki printing band nahi hogi).


// ================================================================================

// 2. ncpa.cpl — Network Connections (Network Control Panel Applet)
// --------------------------------------------------------------------------------
// [ CONCEPT: Network Adapter & NDIS Subsystem ]
// Windows ka network interface controller (NIC) configuration engine (netman.dll). Physical Ethernet, Wi-Fi aur virtual NICs ke IP, Subnet, Gateway aur DNS ko bind karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic connectivity freeze aur cable disconnect issues resolve karna.

// Problem 1: "No Internet" Ya "Unidentified Network" Error Aana
// -> Command: `Win + R` -> type `ncpa.cpl` -> Enter -----> "Ethernet" ya "Wi-Fi" adapter par RIGHT-CLICK -> "Disable" karta hai, fir 5 second baad RIGHT-CLICK -> "Enable" karta hai (80% network freeze solve).

// Problem 2: Stuck Network Cache & DNS Refresh
// -> Command: `Win + R` -> type `cmd` -> Enter -----> Sequential commands chalata hai: `ipconfig /release` -> `ipconfig /renew` -> `ipconfig /flushdns` (IP renew aur DNS cache flush karne ke liye).

// Problem 3: Physical Layer Check
// -> Physical Check -----> RJ45 LAN cable reconnect karna aur port par Green/Amber link LED blink check karna.

// Problem 4: Windows Built-in Network Troubleshooter (Auto Diagnose)
// -> Command: `Win + R` -> type `ncpa.cpl` -> Enter -----> Adapter par RIGHT-CLICK -> "Diagnose" par click karta hai (Windows automatic gateway reset aur virtual socket glitches khud fix kar deta hai bina adapter disable kiye).

// L1 Ki Limit:
// -> Agar IPv4 me 169.254.x.x (APIPA) aa raha ho ya network driver crash ho, toh L1 engineer ticket L2 ko escalate kar deta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: IP conflict, VLAN mismatch, DHCP server failure aur packet drop fix karna.

// Step 1: APIPA & DHCP DORA Failure Diagnosis
// -> Command: `Win + R` -> type `ncpa.cpl` -> Enter -----> Adapter par double-click -> "Details..." me 169.254.x.x dekh kar samajh jata hai ki DHCP Offer nahi aaya (Switch port ka VLAN check karta hai ya DHCP pool full hone par scope extend karta hai).

// Step 2: Static IP & DNS Hardcoding (Kiosk/Counter PC & Printers)
// -> Command: `Win + R` -> type `ncpa.cpl` -> Enter -----> Fixed IP, Subnet Mask, Gateway aur DNS manually bind karne ke liye.
// -> Navigation: Adapter par RIGHT-CLICK -> "Properties" -> "Internet Protocol Version 4 (TCP/IPv4)" par DOUBLE-CLICK.
// -> Entry Rules & Verification:
//    - Gateway Check: Pehle CMD me `ipconfig` se default gateway check karta hai (Example Gateway: 192.168.1.1).
//    - Free IP Verify: CMD me `ping 192.168.1.50` karke dekhta hai; jab "Request timed out" aaye tabhi wo IP assign karta hai.
//    - IP Address: [ 192 . 168 . 1 . 50 ] -----> (Gateway ki same series ka number, aakhri octet 2 se 254 tak).
//    - Subnet Mask: [ 255 . 255 . 255 . 0 ] -----> (Class C /24 standard pool).
//    - Default Gateway: [ 192 . 168 . 1 . 1 ] -----> (Local switch ya router ka address).
//    - Preferred DNS: [ 192 . 168 . 1 . 10 ] -----> (Enterprise local Domain Controller / AD DS server IP).
//    - Alternate DNS: [ 8 . 8 . 8 . 8 ] -----> (Google public DNS backup).
//    - Invalid Values Warning: Kisi block me >255 nahi dalte, .0 (Network ID) ya .255 (Broadcast) nahi dalte, Gateway series mismatch nahi karte.

// Step 3: Speed & Duplex Negotiation Mismatch Fix
// -> Command: `Win + R` -> type `ncpa.cpl` -> Enter -----> Adapter Properties -> "Configure..." button -> "Advanced" tab -> "Speed & Duplex" property me Auto-Negotiation ko force karke "1.0 Gbps Full Duplex" set karta hai.

// Step 4: Corrupt TCP/IP Stack & Winsock Reset
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> `netsh int ip reset` aur `netsh winsock reset` run karta hai, fir PC reboot karta hai (Broken network protocol stack restore).

// Step 5: NIC Power Management Fix (Kiosk Sleep Protection)
// -> Command: `Win + R` -> type `ncpa.cpl` -> Enter -----> Adapter Properties -> "Configure..." -> "Power Management" tab me "Allow the computer to turn off this device to save power" ko UNCHECK karta hai (Idle PC network drop protection).


// ================================================================================

// 3. devmgmt.msc — Device Manager
// --------------------------------------------------------------------------------
// [ CONCEPT: Plug and Play (PnP) & Hardware Driver Tree ]
// Windows hardware enumeration console. Motherboard chipset, USB controllers, biometric scanners, printers aur external peripherals ke hardware drivers ko manage karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Peripheral (Scanner, Reader, Printer) ko detect karwana.

// Problem 1: USB Device Attach Kiya Lekin PC Me Response Nahi Aaya
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Top menu bar se "Action" > "Scan for hardware changes" par click karta hai (Hardware bus par naye plugged devices scan karne ke liye).

// Problem 2: Device Par Yellow Exclamation Mark (!) Dikhna
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Yellow mark wale device par RIGHT-CLICK -> "Update driver" -> "Search automatically for drivers" chunta hai.

// Problem 3: Device Icon Par Downward Black Arrow (↓) Dikhna (Disabled Device)
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Disabled device par RIGHT-CLICK -> "Enable device" par click karta hai (Accidentally disabled network card, Bluetooth ya audio controller ko activate karna).

// L1 Ki Limit:
// -> Agar driver online na mile ya Code 10 / Code 43 error aaye, toh ticket L2 ko escalate hoti hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Hardware ID se compatible OEM driver dhoondna aur power suspension rokna.

// Step 1: Hardware Error Code Diagnosis
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Device par RIGHT-CLICK -> "Properties" -> "General" tab me Device status padhta hai: Code 10 (Driver incompatible) ya Code 43 (Hardware communication fail).

// Step 2: Hardware ID Se Exact OEM Driver Dhoondna
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Device Properties -> "Details" tab -> Property drop-down se "Hardware Ids" select karta hai -> Value (e.g. `VEN_8086&DEV_15F3`) copy karke vendor site se certified driver package laata hai -> "Browse my computer for drivers" > "Have Disk..." se manual force-install karta hai.

// Step 3: Corrupt Driver Package Clean Wipe
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Device par RIGHT-CLICK -> "Uninstall device" -> "Attempt to remove the driver for this device" checkbox TICK karke clean uninstall karta hai.

// Step 4: USB Root Hub Power Suspend Disable
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> "Universal Serial Bus controllers" > "USB Root Hub" par RIGHT-CLICK -> "Properties" > "Power Management" me "Allow the computer to turn off this device to save power" ko UNCHECK karta hai (Barcode scanner ya gate reader USB disconnect hone se rokna).

// Step 5: Faulty Driver Roll Back (Recent Update Fix)
// -> Command: `Win + R` -> type `devmgmt.msc` -> Enter -----> Device par RIGHT-CLICK -> "Properties" -> "Driver" tab -> "Roll Back Driver" button par click karta hai (Naye Windows update se crash huye driver ko pichle stable version par revert karne ke liye).


// ================================================================================

// 4. eventvwr.msc — Windows Event Viewer
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Centralized Event Logging System (eventlog) ]
// Operating system ka black box forensic repository (.evtx files). Application crashes, security audits, kernel panics aur hardware failure ka timestamped record rakhta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: User ke crash/freeze time par system me red error dekhna.

// Problem 1: PC Achanak Freeze Hua Ya App Crash Hui
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> Left pane se "Windows Logs" > "Application" ya "System" par click karta hai -> Red color ka "Error" icon check karta hai.

// Problem 2: Error Severity Filter (Surface Quick View)
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> Right pane me "Filter Current Log..." par click karta hai -> Event level me sirf "Critical" aur "Error" checkboxes ko TICK karke OK karta hai (Faltu logs hat kar samne sirf system crash errors dikhte hain).

// L1 Ki Limit:
// -> Log me technical hexadecimal codes (e.g. 0xc0000005) ya Event ID 4625 aane par L1 engineer ticket L2 ko escalate kar deta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Crash karne wale exact DLL module, BSOD bugcheck aur brute-force logins identify karna.

// Step 1: Application Crash Root Cause (Event ID 1000)
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> "Windows Logs" > "Application" par RIGHT-CLICK -> "Filter Current Log..." -> Event ID box me type karta hai: `1000` -> Result me `Faulting Application: chrome.exe` aur `Faulting Module Name: ntdll.dll` note karke issue solve karta hai.

// Step 2: BSOD & Kernel Power Crash Analysis (Event ID 41)
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> "Windows Logs" > "System" -> "Filter Current Log..." -> Event ID daalta hai: `41` -> BugcheckCode (e.g. `0x0000009F` Driver Power State Failure) se hardware/driver crash point trace karta hai.

// Step 3: Account Lockout & Brute-Force Audit (Event ID 4625)
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> "Windows Logs" > "Security" -> "Filter Current Log..." -> Event ID: `4625` (Failed Logon) filter karta hai -> "Source Network Address" aur "Workstation Name" se attacker machine pakadta hai.

// Step 4: Diagnostic Logs Export Karna (.evtx)
// -> Command: `Win + R` -> type `eventvwr.msc` -> Enter -----> Target log par RIGHT-CLICK -> "Save All Events As..." select karke `.evtx` file save karke ticket me attach karta hai.


// ================================================================================

// 5. appwiz.cpl — Programs and Features (Add or Remove Programs)
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Installer Subsystem (MSI) & Application Registry Database ]
// System par installed applications, runtimes (Visual C++, .NET), aur software updates ka central control console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Corrupted software uninstall karna ya repair wizard chalana.

// Problem 1: Software Open Hone Par Error De Raha Hai
// -> Command: `Win + R` -> type `appwiz.cpl` -> Enter -----> Software select karta hai -> Top bar se "Repair" ya "Change" par click karke wizard chala deta hai.

// Problem 2: Standard Application Uninstall Karna
// -> Command: `Win + R` -> type `appwiz.cpl` -> Enter -----> Software par click karke "Uninstall" dabata hai aur prompts follow karta hai.

// L1 Ki Limit:
// -> Agar uninstall me "Another installation is in progress" ya "Error 1603 / Access Denied" aaye, toh ticket L2 ko escalate hoti hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Stuck installer locks break karna aur leftover registry keys wipe karna.

// Step 1: Stuck MSI Windows Installer Process Force-Kill
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> Command chalata hai: `taskkill /F /IM msiexec.exe` aur service restart karta hai: `net stop msiserver && net start msiserver`.

// Step 2: Residual Files & Registry Deep Wipe
// -> Command: `Win + R` -> type `regedit` -> Enter -----> `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall` me jakar app ki leftover GUID key ko delete karta hai.

// Step 3: Turn Windows Features On/Off (.NET / SMB)
// -> Command: `Win + R` -> type `appwiz.cpl` -> Enter -----> Left sidebar se "Turn Windows features on or off" par click karta hai -> `.NET Framework 3.5` ya `SMB 1.0` enable karke legacy application chalata hai.


// ================================================================================

// 6. diskmgmt.msc — Disk Management (Logical Disk Manager)
// --------------------------------------------------------------------------------
// [ CONCEPT: Virtual Disk Service (VDS) & Storage Partitioning Subsystem ]
// Physical drives (HDD, NVMe SSD), partitions (MBR/GPT), file systems (NTFS/FAT32), aur drive letters ka management console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Missing partition ko visible karna aur drive letter assign karna.

// Problem 1: Second Partition Ya External Drive 'This PC' Me Dikh Nahi Rahi
// -> Command: `Win + R` -> type `diskmgmt.msc` -> Enter -----> Healthy blue partition par RIGHT-CLICK -> "Change Drive Letter and Paths..." -> "Add..." -> Letter (e.g. D: ya E:) choose karke "OK" karta hai.

// L1 Ki Limit:
// -> Agar disk "Offline", "Not Initialized", ya "RAW" show kare, toh data loss ke darr se ticket L2 ko escalate kar di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Disk policy conflicts, file system corruption aur GPT initialization solve karna.

// Step 1: Policy Conflict Offline Disk Online Karna
// -> Command: `Win + R` -> type `diskmgmt.msc` -> Enter -----> Disk ke grey box (Disk 1) par RIGHT-CLICK -> "Online" par click karta hai.

// Step 2: Raw Disk Initialization (GPT vs MBR)
// -> Command: `Win + R` -> type `diskmgmt.msc` -> Enter -----> Nayi unallocated disk par RIGHT-CLICK -> "Initialize Disk" -> Modern UEFI systems ke liye **GPT (GUID Partition Table)** select karta hai.

// Step 3: Read-Only Attribute Clear Karna (DISKPART)
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> Sequential commands chalata hai: `diskpart` -> `list disk` -> `select disk 1` -> `attributes disk clear readonly`.

// Step 4: RAW File System Corruption Recovery (CHKDSK)
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> Command chalata hai: `chkdsk D: /f /r` taaki file system NTFS me wapas recover ho sake.


// ================================================================================

// 7. taskmgr — Windows Task Manager (Shortcut: Ctrl + Shift + Esc)
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Telemetry Engine & Process Execution Monitor ]
// OS kernel processes, thread execution, handles, CPU scheduler, RAM paging, aur disk I/O ka real-time telemetry monitor.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Frozen software ko close karna aur general resource load dekhna.

// Problem 1: Application Par "Not Responding" Aa Gaya (Frozen App Kill)
// -> Command: `Win + R` -> type `taskmgr` -> Enter (ya `Ctrl + Shift + Esc`) -----> "Processes" tab me frozen app par RIGHT-CLICK -> "End task" select karta hai.

// Problem 2: PC Slow Ya Hang Ho Raha Hai (Resource Overload Check)
// -> Command: `Win + R` -> type `taskmgr` -> Enter -----> "Processes" tab me "CPU" aur "Memory" columns par click karke dekhta hai kaun sa app resources consume kar raha hai.

// L1 Ki Limit:
// -> Agar End task karne par "Access is Denied" aaye ya process turant dobara spawn ho jaye, toh L1 escalate karta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Rogue worker threads kill karna, memory leak trace karna aur startup bloatware eliminate karna.

// Step 1: Kill Entire Process Tree (Child Threads Elimination)
// -> Command: `Win + R` -> type `taskmgr` -> Enter -----> "Details" tab me jata hai -> main process par RIGHT-CLICK -> **"End process tree"** select karta hai (Background hidden worker processes samet poore software tree ko terminate karna).

// Step 2: Memory Leak (Non-Paged Pool) Diagnosis
// -> Command: `Win + R` -> type `taskmgr` -> Enter -----> "Performance" tab > "Memory" me "Non-paged pool" check karta hai; agar ye 2-4GB+ cross kar raha ho toh faulty NIC ya graphics driver leak pakadta hai.

// Step 3: Startup Impact Optimization (Boot Time 3x Fast)
// -> Command: `Win + R` -> type `taskmgr` -> Enter -----> "Startup Apps" tab me jakar "High" Startup Impact wale faltu background updaters par RIGHT-CLICK -> "Disable" karta hai.

// Step 4: Creating Process Crash Dump (.DMP)
// -> Command: `Win + R` -> type `taskmgr` -> Enter -----> "Details" tab me process par RIGHT-CLICK -> "Create dump file" karke developer escalation packet banata hai.


// ================================================================================

// 8. mstsc — Remote Desktop Connection (Microsoft Terminal Services Client)
// --------------------------------------------------------------------------------
// [ CONCEPT: Remote Desktop Protocol (RDP) Subsystem (Port 3389) ]
// Remote Desktop Protocol (mstsc.exe). Network ke through remote Windows machine ka GUI session lene ke liye use hota hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Remote counter PC ya server ka quick session lena.

// Problem 1: Remote Counter PC Ko Login Karna
// -> Command: `Win + R` -> type `mstsc` -> Enter -----> Remote PC ka IP address enter karta hai -> "Connect" dabata hai -> Domain credentials daalta hai (`DOMAIN\username`).

// Problem 2: Screen Resolution, Dual-Monitor & Clipboard Setup
// -> Command: `Win + R` -> type `mstsc` -> Enter -----> "Show Options" dropdown -> "Local Resources" tab me "Clipboard" checkbox TICK karo (text/scripts copy-paste allow karne ke liye). "Display" tab me "Display configuration" slider ko Full Screen par set karo (Dual screens ke liye "Use all my monitors for the remote session" TICK karo). Full Screen toggle shortcut: `Ctrl + Alt + Break` (ya `Ctrl + Alt + Pause`).

// L1 Ki Limit:
// -> "Remote Desktop cannot connect to the remote computer" error aane par L1 engineer ticket L2 ko escalate kar deta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Firewall blockage, NLA mismatch, aur remote registry RDP enabling.

// Step 1: CLI Port 3389 Reachability & Handshake Test
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Test-NetConnection -ComputerName 192.168.1.50 -Port 3389` chalata hai (Agar TcpTestSucceeded: False aaye toh firewall/port blocked hai).

// Step 2: Remote Machine Par RDP Force-Enable Karna (Remote Registry)
// -> Command: `Win + R` -> type `regedit` -> Enter -----> "File" > "Connect Network Registry..." -> Remote PC ka naam daalta hai -> `HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server` me jakar `fDenyTSConnections` ko `0` set karta hai.

// Step 3: Network Level Authentication (NLA) Mismatch Fix
// -> Command: `Win + R` -> type `sysdm.cpl` -> Enter -----> "Remote" tab me "Allow connections only from computers running Remote Desktop with Network Level Authentication" ko untick karke test karta hai.

// Step 4: Remote Terminal Service Force-Restart
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Restart-Service -ComputerName <RemotePC> -Name TermService -Force` chalata hai (Stuck RDP daemon reload karne ke liye).

// Step 5: Admin Physical Console Session Connect Karna
// -> Command: `Win + R` -> type `mstsc /v:<IP> /admin` -> Enter -----> Server Session 0 ka direct physical console access lene ke liye.


// ================================================================================

// 9. cmd — Windows Command Prompt (cmd.exe)
// --------------------------------------------------------------------------------
// [ CONCEPT: Win32 Command Line Interpreter & Diagnostic Shell ]
// System management routines, batch scripts, network diagnostic utilities, aur administrative repair commands ka execution shell.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic network connectivity aur DNS cache clear karna.

// Problem 1: Internet Stability Test (Continuous Ping)
// -> Command: `Win + R` -> type `cmd` -> Enter -----> `ping -t 8.8.8.8` chalata hai (Google public IP par continuous packets bhej kar connection drop monitor karne ke liye).

// Problem 2: DNS Cache Flush
// -> Command: `Win + R` -> type `cmd` -> Enter -----> `ipconfig /flushdns` chalata hai (System me jam gaye corrupt ya purane DNS cache ko saaf karne ke liye).

// Problem 3: IP & MAC Address Verification
// -> Command: `Win + R` -> type `cmd` -> Enter -----> `ipconfig /all` chalata hai (Network card ka physical MAC address, Subnet Mask, Gateway aur DHCP server verify karne ke liye).

// L1 Ki Limit:
// -> Deep system file corruption ya complex network stack failure aane par ticket L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: System integrity repair, network stack reset aur Group Policy audit.

// Step 1: System File Checker & Component Store Repair (DISM & SFC)
// -> Command: `Win + R` -> type `cmd` (Ctrl + Shift + Enter for Run as Administrator) -----> Sequence chalata hai: 1. `DISM /Online /Cleanup-Image /RestoreHealth` (Windows component store online repair karta hai) -> 2. `sfc /scannow` (Corrupted system DLLs ko verify aur replace karta hai).

// Step 2: Complete Network Stack Reset (Master Repair)
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> `netsh int ip reset` aur `netsh winsock reset` run karta hai, fir PC reboot karta hai (Corrupt TCP/IP network protocol aur winsock catalog ko factory default par restore).

// Step 3: Domain Group Policy Force & Result Audit
// -> Command: `Win + R` -> type `cmd` -> Enter -----> `gpupdate /force` (Active Directory GPO instantly fetch) aur `gpresult /r` (Applied security policies aur group memberships detail audit) karta hai.

// Step 4: Active Network Connection Port Audit
// -> Command: `Win + R` -> type `cmd` -> Enter -----> `netstat -ano | findstr :3389` chalata hai (Specific port kis Process ID [PID] par bind hai dekhne ke liye).

// Step 5: Boot-time Disk & Bad Sector Repair
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> `chkdsk C: /f /r` chalata hai (Agle reboot par disk bad clusters aur NTFS file table verify karta hai).


// ================================================================================

// 10. powershell — Windows PowerShell Engine
// --------------------------------------------------------------------------------
// [ CONCEPT: .NET Framework Object-Oriented Management Shell ]
// Windows management instrumentation (WMI/CIM), object-based pipelines, aur system recovery ka advanced CLI engine.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic status check aur daily quick commands chalana.

// Problem 1: Print Spooler Service Status Check
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Get-Service -Name Spooler` chalata hai (Print Spooler service ka live status check karna: Running hai ya Stopped).

// Problem 2: Print Spooler Service Quick Restart (Bounce)
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Restart-Service -Name Spooler` chalata hai (Stuck print jobs ke waqt printer service ko quick restart karna).

// Problem 3: Process Resource Usage Check
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Get-Process -Name chrome` chalata hai (Chrome ya specific application kitni memory aur CPU le raha hai status dekhna).

// Problem 4: Pre-configured Daily Maintenance Script Run Karna
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `.\DailyCheck.ps1` execute karta hai (Routine floor health check karne ke liye).

// L1 Ki Limit:
// -> Jab script chalane par red error aaye ("ExecutionPolicy Restricted") ya remote PC par command chalani ho toh L2 ko escalate karta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Script unblocking, deep port telemetry, heavy process kill, aur remote management.

// Step 1: Execution Policy Unblock Karna
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` chalata hai (System ki global security policy ko tode bina sirf current window ke liye script execution allow karna).

// Step 2: Advanced Network Port & Latency Diagnostics
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Test-NetConnection -ComputerName 192.168.1.50 -Port 3389 -InformationLevel Detailed` chalata hai (Server IP aur port check karke route hops aur TCP handshake trace karna).

// Step 3: Top Heavy CPU Applications Filter Karna
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Get-Process | Sort-Object CPU -Descending | Select-Object -First 5` chalata hai (PC hang hone par top 5 heavy applications ka exact PID nikalna).

// Step 4: Hanging Process Ko Forcefully Kill Karna
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Stop-Process -Id <PID> -Force` chalata hai (User ka PC bina reboot kiye sirf hanging program ko turant background me kill karna).

// Step 5: Forceful Service Bouncing With Dependencies
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Restart-Service -Name <service> -Force` chalata hai (Service aur uske sath judi saari dependent background services ko ek sath safely reload karna).

// Step 6: Remote Execution via PSRemoting (WinRM)
// -> Command: `Win + R` -> type `powershell` -> Enter -----> `Invoke-Command -ComputerName <CounterPC01> -ScriptBlock { Restart-Service Spooler -Force }` chalata hai (User ke desk par jaye bina apni seat se remote computer par terminal command chala kar issue fix karna).


// ================================================================================

// 11. control — Classic Windows Control Panel
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Win32 Administrative Control Engine ]
// System hardware abstraction, security credentials, mail profiles, aur storage encryption ka master control console.

// * MASTER NAVIGATION (Control Panel Kaise Kholna Aur Use Karna Hai):
// Command: `Win + R` -> type `control` -> Enter.
// View Mode Setup: Control Panel khulne par top-right corner me "View by: Category" dropdown par CLICK karo -> "Large icons" select karo (isse saare administrative applets ek saath visible ho jate hain).

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Settings):
// Target: Standard hardware settings, default printer, sound device aur network adapter quick fix karna.

// Problem 1: Printers, Offline Toggle & Queue Check
// -> Command: `Win + R` -> type `control` -> Enter -> "Devices and Printers" par CLICK (Direct: `control printers`) -----> Target printer par DOUBLE-CLICK -> top menu "Printer" -> "Use Printer Offline" UNCHECK karta hai (online lane ke liye). Stuck queue clear karne ke liye RIGHT-CLICK -> "See what's printing" -> "Printer" > "Cancel All Documents". Default banane ke liye RIGHT-CLICK -> "Set as default printer".

// Problem 2: Sound & Microphone Fix
// -> Command: `Win + R` -> type `control` -> Enter -> "Sound" par CLICK (Direct: `mmsys.cpl`) -----> "Playback" tab me headset par RIGHT-CLICK -> "Set as Default Device" aur "Set as Default Communication Device" select karta hai; "Recording" tab me Mic par RIGHT-CLICK -> "Properties" -> "Levels" slider 100% check karke bolne par green bars check karta hai.

// Problem 3: Programs Install/Uninstall
// -> Command: `Win + R` -> type `control` -> Enter -> "Programs and Features" par CLICK (Direct: `appwiz.cpl`) -----> Installed apps list me crashing software par LEFT-CLICK karke select karta hai -> Top bar se "Uninstall" ya "Repair" button par click karta hai.

// Problem 4: Network Adapter Quick Reset
// -> Command: `Win + R` -> type `control` -> Enter -> "Network and Sharing Center" -> "Change adapter settings" (Direct: `ncpa.cpl`) -----> "Ethernet" ya "Wi-Fi" card par RIGHT-CLICK -> "Disable" karta hai, fir 5 second wait karke RIGHT-CLICK -> "Enable" karta hai.

// L1 Ki Limit:
// -> Stale domain credentials remove karna, corrupt Outlook profiles rebuild karna, BitLocker recovery keys audit karna, ya system sleep power plans tweak karna L2 ko escalate karta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt Outlook profiles rebuild karna, cached domain passwords wipe karna, BitLocker audit, aur 24x7 counter sleep prevention.

// Step 1: Corrupted Outlook Profile Rebuild (Mail Applet)
// -> Command: `Win + R` -> type `control` -> Enter -> "Mail (Microsoft Outlook)" par CLICK (Direct: `control mlcfg32.cpl`) -----> "Show Profiles..." -> "Add..." -> Profile Name type karo (e.g. Outlook_New) -> "OK" -> User email/password verify karo -> "Always use this profile" me "Outlook_New" select karo -> "Apply" -> "OK".

// Step 2: Stale Domain Credentials Cleanup (Credential Manager)
// -> Command: `Win + R` -> type `control` -> Enter -> "Credential Manager" par CLICK (Direct: `control keymgr.dll`) -----> "Windows Credentials" tab -> "Generic Credentials" section me expired passwords wali entries (jaise MicrosoftOffice16_Data ya shared drive) ke aage bane Dropdown Arrow par CLICK -> "Remove" -> "Yes" confirm karo (Account lockout loop solve).

// Step 3: BitLocker Drive Encryption & TPM Audit
// -> Command: `Win + R` -> type `control` -> Enter -> "BitLocker Drive Encryption" par CLICK (Direct: `control /name Microsoft.BitLockerDriveEncryption`) -----> OS Drive (C:) ke aage "BitLocker on" verify karta hai; "Back up your recovery key" se Active Directory/USB par safe backup karta hai.

// Step 4: Kiosk / 24x7 Counter Sleep Prevention (Power Options)
// -> Command: `Win + R` -> type `control` -> Enter -> "Power Options" par CLICK (Direct: `powercfg.cpl`) -----> "High performance" select -> "Change plan settings" -> "Turn off display: Never" aur "Put computer to sleep: Never" karta hai -> "Change advanced power settings" -> "Hard disk" > "Turn off hard disk after: 0 (Never)" set karke "Apply" -> "OK" karta hai.


// ================================================================================


// ========================================= Section 2: Extra & Situation-Based Commands ======================================= //
// Ye Commands Kabhi-Kabhi (Specific Situation Aane Par) Use Hoti Hain
// ================================================================================


// 12. compmgmt.msc — Computer Management (All-in-One Master Console)
// --------------------------------------------------------------------------------
// [ CONCEPT: Master Consolidation Management Console ]
// Device Manager, Disk Management, Event Viewer, Shared Folders, aur Local Users ko ek hi administrative dashboard se control karne ka master tool.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Daily User Admin):
// Target: Quick user unlock, driver visual check, aur basic storage verification.

// Step 1: Console Open Karna
// -> Command: `Win + R` -> type `compmgmt.msc` -> Enter.

// Step 2: Missing Drivers Check (Device Manager)
// -> Navigation: Left pane se `System Tools` > `Device Manager` par click karta hai -----> dekhta hai kisi hardware (printer, scanner, network card) par Yellow Exclamation Mark (`!`) ya Red Cross toh nahi hai.

// Step 3: Local User Password Reset (Local Users and Groups)
// -> Navigation: Left pane se `System Tools` > `Local Users and Groups` > `Users` me jata hai -----> Local user account par RIGHT-CLICK karke "Set Password..." karta hai; agar account locked ho toh "Properties" me jakar "Account is locked out" uncheck karke "Apply" karta hai.

// Step 4: Services Status Quick Check
// -> Navigation: Left pane se `Services and Applications` > `Services` khol kar Print Spooler ya Windows Update service status check karta hai.

// L1 Ki Limit:
// -> Shared folder locks todna, active server sessions disconnect karna, disk initialization (GPT), ya Event ID deep audit L2 ko escalate karta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause, Storage Architecture & Audit):
// Target: Shared folders file locks release, disk GPT conversion, aur forensic crash analysis.

// Step 1: Locked Files Release & Active Sessions Disconnect
// -> Navigation: Left pane se `System Tools` > `Shared Folders` expand karta hai:
//    - Sessions: Dekhta hai kaun-kaun se users network shared folder se connected hain (Unwanted user par RIGHT-CLICK -> "Close Session").
//    - Open Files: Jab user bole "File lock hai", toh yahan locked file dhoondh kar RIGHT-CLICK -> "Close Open File" karta hai (Bina server restart kiye lock release).

// Step 2: Disk Initialization & Volume Health (Disk Management)
// -> Navigation: Left pane se `Storage` > `Disk Management` par click karta hai:
//    - Nayi unallocated hard drive/SSD par RIGHT-CLICK -> "Initialize Disk" select karke modern GPT partition style apply karta hai.
//    - Unallocated space par RIGHT-CLICK -> "New Simple Volume" banakar NTFS format aur drive letter (D:, E:) assign karta hai.
//    - Agar disk "Offline" dikhe toh RIGHT-CLICK karke "Online" karta hai.

// Step 3: Event Viewer Deep System & Security Log Audit
// -> Navigation: Left pane se `System Tools` > `Event Viewer` > `Windows Logs`:
//    - "System" log me Event ID 7034 (Service Crash) aur Event ID 41 (Kernel Power / Sudden Shutdown) trace karta hai.
//    - "Security" log me Event ID 4625 (Failed Logon / Brute Force Attack) trace karke IP aur attacker workstation pakadta hai.

// Step 4: Automated Task Schedules Audit
// -> Navigation: Left pane se `System Tools` > `Task Scheduler` > `Task Scheduler Library` me jakar check karta hai ki company ka automatic night backup ya log cleanup script successfully run hua ya fail hua.


// ================================================================================

// 13. lusrmgr.msc — Local Users and Groups
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Security Authority & SAM Database ]
// Local computer ke Security Account Manager (SAM) database ke users aur built-in groups ko manage karne ka master console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Local user password reset aur locked account release karna.

// Problem 1: Local Account Lock Ho Gaya Hai ("The referenced account is currently locked out")
// -> Command: `Win + R` -> type `lusrmgr.msc` -> Enter -----> Left pane me "Users" folder par DOUBLE-CLICK karta hai -> Locked user par RIGHT-CLICK -> "Properties" -> "Account is locked out" checkbox UNCHECK (untick) karta hai -> "Apply" -> "OK".

// Problem 2: User Password Bhool Gaya (Local Password Reset)
// -> Command: `Win + R` -> type `lusrmgr.msc` -> Enter -----> "Users" folder me target user par RIGHT-CLICK -> "Set Password..." -> "Proceed" button par click -> Naya password enter karo -> "OK".

// Problem 3: Kiosk / Billing PC Ke Liye "Password Never Expires" Set Karna
// -> Command: `Win + R` -> type `lusrmgr.msc` -> Enter -----> "Users" folder me user par RIGHT-CLICK -> "Properties" -> "Password never expires" checkbox TICK karo -> "User must change password at next logon" UNCHECK karo -> "Apply" -> "OK".

// L1 Ki Limit:
// -> Agar user domain account ka ho (ADUC me hona chahiye) ya machine par domain user ko local administrative rights dene hon, toh L2 ko escalate hota hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Domain user ko local admin banana aur built-in attack surface harden karna.

// Step 1: Domain User Ko Local Administrator Banane Ka Process
// -> Command: `Win + R` -> type `lusrmgr.msc` -> Enter -----> Left pane se "Groups" folder par CLICK -> Center pane me "Administrators" group par DOUBLE-CLICK -> "Add..." button par click -> domain format me account daalo (e.g. `AIRPORT\tausif.admin` ya `COMPANY\ITSupport`) -> "Check Names" button par click (name underline hoga) -> "OK" -> "Apply" -> "OK".

// Step 2: Unused Accounts Security Lockdown
// -> Command: `Win + R` -> type `lusrmgr.msc` -> Enter -----> Built-in "Guest" account par RIGHT-CLICK -> "Properties" -> "Account is disabled" ensure karta hai; default built-in "Administrator" account ko rename karke company policy follow karta hai.


// ================================================================================

// 14. sysdm.cpl — System Properties
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Core Identity, Domain Membership & Subsystem Tuning ]
// Computer ka unique hostname, Active Directory domain trust membership, virtual paging memory aur user environment variables configure karne ka master engine.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Computer Name set karna aur Workgroup se Active Directory Domain me join karana.

// Step 1: Computer Name Change & Domain Join
// -> Command: `Win + R` -> type `sysdm.cpl` -> Enter -----> "Computer Name" tab par "Change..." button par CLICK -> "Computer name:" box me company standard name daalo (e.g. `DXB-T3-CHK-014`) -> "Member of" me "Domain" radio button choose karo -> Domain Name type karo (e.g. `airport.local` ya `company.corp`) -> "OK" -> Domain Admin credentials prompt aane par Username/Password daalo -> "Welcome to the domain" popup -> "OK" -> "Restart Now" par click.

// L1 Ki Limit:
// -> Virtual memory paging size tuning, BSOD crash dump configuration, ya Remote Desktop NLA rules L2 ko escalate hote hain.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: OS visual performance boost, Pagefile virtual memory fix, aur Environment variables setup.

// Step 1: Visual Performance Optimization (Slow PC Boost)
// -> Command: `Win + R` -> type `sysdm.cpl` -> Enter -----> "Advanced" tab -> "Performance" section me "Settings..." button par click -> "Visual Effects" me "Adjust for best performance" radio button select karta hai -> "Apply" -> "OK".

// Step 2: Virtual Memory / Paging File Sizing (Out of Memory Crashes Fix)
// -> Command: `Win + R` -> type `sysdm.cpl` -> Enter -----> "Advanced" tab -> "Performance" Settings -> "Advanced" tab -> "Virtual memory" section me "Change..." button par click -> "Automatically manage paging file size" UNCHECK karo -> "Custom size" select karke Initial size (RAM x 1.5) aur Maximum size (RAM x 3) daal kar "Set" -> "OK" karta hai.

// Step 3: Environment Variables Path Setup
// -> Command: `Win + R` -> type `sysdm.cpl` -> Enter -----> "Advanced" tab -> "Environment Variables..." button -> "System variables" box me `Path` select karke "Edit..." click karke company scripts ya tools ka folder path add karta hai.

// Step 4: Remote Desktop NLA Enforcement
// -> Command: `Win + R` -> type `sysdm.cpl` -> Enter -----> "Remote" tab par CLICK -> "Allow remote connections to this computer" TICK karta hai aur "Allow connections only from computers running Remote Desktop with Network Level Authentication" mandatory check karta hai.


// ================================================================================

// 15. gpedit.msc — Local Group Policy Editor
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Policy Registry Enforcement Engine ]
// Standalone Windows PC par operating system features, USB ports, Windows updates aur user restrictions enforce karne ka local management tool.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Local restrictions verify karna aur policies ko manually force-refresh karna.

// Step 1: Policy Enforcement Check
// -> Command: `Win + R` -> type `gpedit.msc` -> Enter -----> Left pane me navigate karta hai: `Computer Configuration` > `Administrative Templates` > `System` > `Removable Storage Access` -> dekhta hai USB blocking rule Enabled hai ya Not Configured.

// Step 2: Policy Force Update
// -> Command: `Win + R` -> type `cmd` -> Enter -> type `gpupdate /force` -> Enter -----> Nayi policy ko bina reboot kiye turant active karne ke liye.

// L1 Ki Limit:
// -> Enterprise security baseline design karna, automatic update policies configure karna, ya User Rights Assignment L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Data leak prevention (USB block), update reboot prevention, aur local hardening.

// Step 1: USB Mass Storage Devices Block Karna (Data Leak Prevention)
// -> Command: `Win + R` -> type `gpedit.msc` -> Enter -----> `Computer Configuration` > `Administrative Templates` > `System` > `Removable Storage Access` -> "All Removable Storage classes: Deny all access" par DOUBLE-CLICK -> "Enabled" radio button select karo -> "Apply" -> "OK".

// Step 2: Operational Shift Me Auto-Restart Disable Karna (Windows Update Freeze Protection)
// -> Command: `Win + R` -> type `gpedit.msc` -> Enter -----> `Computer Configuration` > `Administrative Templates` > `Windows Components` > `Windows Update` -> "No auto-restart with logged on users for scheduled automatic updates installations" par DOUBLE-CLICK -> "Enabled" select karo -> "Apply" -> "OK".

// Step 3: User Rights Assignment Security Audit
// -> Command: `Win + R` -> type `gpedit.msc` -> Enter -----> `Computer Configuration` > `Windows Settings` > `Security Settings` > `Local Policies` > `User Rights Assignment` -> "Allow log on through Remote Desktop Services" me jakar verify karta hai unauthorized users list me na hon.


// ================================================================================

// 16. secpol.msc — Local Security Policy
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Security Hardening & Audit Infrastructure ]
// Password complexity, account lockout thresholds, Kerberos security policies, aur security audit logs ka master security console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Account lockout rules aur password complexity policies inspect karna.

// Step 1: Account Lockout Settings Check
// -> Command: `Win + R` -> type `secpol.msc` -> Enter -----> Left pane me `Security Settings` > `Account Policies` > `Account Lockout Policy` par CLICK -> dekhta hai "Account lockout threshold" (e.g. 5 invalid attempts) aur "Account lockout duration" (e.g. 15 ya 30 minutes) kitna configured hai.

// Step 2: Password Complexity & Expiry Policy Check
// -> Command: `Win + R` -> type `secpol.msc` -> Enter -----> Left pane me `Security Settings` > `Account Policies` > `Password Policy` par CLICK -> inspect karta hai: "Minimum password length" (e.g. 8-12 characters), "Password must meet complexity requirements" (Enabled), aur "Maximum password age" (e.g. 42 ya 90 days).

// L1 Ki Limit:
// -> Advanced audit failure logging enable karna, SMB signing enforce karna, ya UAC administrative rules setup karna L2 ko escalate hota hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Brute-force attacks detect karne ke liye Audit logging enable karna aur UAC lockdown lagana.

// Step 1: Detailed Logon Failure Audit Enable Karna (Brute Force Detection)
// -> Command: `Win + R` -> type `secpol.msc` -> Enter -----> `Security Settings` > `Advanced Audit Policy Configuration` > `Audit Policies` > `Logon/Logoff` -> "Audit Logon" par DOUBLE-CLICK -> "Success" aur "Failure" dono checkboxes TICK karta hai -> "Apply" -> "OK" (Result: Attacker ka IP aur machine name Event Viewer Security Log Event ID 4625 me log hona shuru ho jata hai).

// Step 2: SMB Signing Enforce Karna (Man-in-the-Middle Block)
// -> Command: `Win + R` -> type `secpol.msc` -> Enter -----> `Security Settings` > `Local Policies` > `Security Options` -> "Microsoft network client: Digitally sign communications (always)" par DOUBLE-CLICK -> "Enabled" select karo -> "Apply" -> "OK".

// Step 3: User Account Control (UAC) Elevation Policy
// -> Command: `Win + R` -> type `secpol.msc` -> Enter -----> `Security Settings` > `Local Policies` > `Security Options` -> "User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode" ko "Prompt for credentials" ya "Prompt for consent" enforce karta hai.


// ================================================================================

// 17. firewall.cpl  &  wf.msc — Windows Defender Firewall
// --------------------------------------------------------------------------------
// [ CONCEPT: State-Full Host-Based Packet Filtering ]
// Windows operating system ka internal traffic gatekeeper jo unauthorized inbound aur outbound TCP/UDP traffic ko block karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic firewall status check karna aur pre-approved application ko quick allow karna.

// Problem 1: User Bolta Hai "Nayi App Lagayi Hai Par Server Se Connect Nahi Ho Rahi"
// -> Command: `Win + R` -> type `firewall.cpl` -> Enter -----> Left sidebar se "Allow an app or feature through Windows Defender Firewall" par CLICK -> Upar "Change settings" button par click -> Application ke samne "Domain" aur "Private" checkboxes TICK karo -> "OK".

// L1 Ki Limit:
// -> Custom TCP/UDP port open karna, IP subnet scoping, ya outbound block rules lagana L2 ko escalate hota hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Custom enterprise port Inbound rules banana aur IP whitelist security lock lagana.

// Step 1: Custom Enterprise Inbound Port Open Karna (wf.msc)
// -> Command: `Win + R` -> type `wf.msc` -> Enter -----> Inbound Rules me naya port rule banana:
//    - Left pane me "Inbound Rules" par CLICK -> Right pane me "New Rule..." par CLICK.
//    - "Port" select karo -> Next -> "TCP" select karo -> "Specific local ports:" me required port type karo (e.g. `8080` ya `3389`) -> Next.
//    - "Allow the connection" select karo -> Next -> Profiles me "Domain" aur "Private" tick rakho ("Public" untick karo) -> Next.
//    - Rule Name daalo (e.g. `Allow_ERP_Application_8080`) -> "Finish".

// Step 2: IP Scope Whitelisting (Security Hardening)
// -> Command: `Win + R` -> type `wf.msc` -> Enter -----> Banaye gaye rule par DOUBLE-CLICK -> "Scope" tab me jao -> "Remote IP address" me "These IP addresses" radio button choose karo -> "Add..." click karke application server ka exact IP daal kar "OK" -> "Apply" karta hai.

// Step 3: Inbound ICMPv4 Echo Allow Karna (Ping Response Enable Karna)
// -> Command: `Win + R` -> type `wf.msc` -> Enter -----> "Inbound Rules" par CLICK -> List me scroll karke "File and Printer Sharing (Echo Request - ICMPv4-In)" rule dhoondo -> Us par RIGHT-CLICK -> "Enable Rule" select karta hai (Client machine instantly pingable ho jati hai!).


// ================================================================================

// 18. inetcpl.cpl — Internet Properties
// --------------------------------------------------------------------------------
// [ CONCEPT: WinINet System Networking, Proxy & Certificate Zones ]
// Windows OS level proxy configuration, security trust zones, SSL/TLS certificate cache, aur cryptographic protocols ka central control panel.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Internal web portals ko Trusted Sites me add karna aur corrupt SSL cache clear karna.

// Problem 1: Company Internal Portal Par "Certificate Error" Ya "Untrusted Site" Aana
// -> Command: `Win + R` -> type `inetcpl.cpl` -> Enter -----> "Security" tab par CLICK -> "Trusted sites" green checkmark icon par CLICK -> "Sites" button par CLICK -> "Add this website to the zone:" box me internal portal URL daalo (e.g. `https://*.company.corp`) -> "Add" -> "Close".

// Problem 2: Stale SSL Handshake Cache Clear Karna
// -> Command: `Win + R` -> type `inetcpl.cpl` -> Enter -----> "Content" tab par CLICK -> "Clear SSL state" button par CLICK -> "The SSL cache was successfully cleared" confirmation popup dekhta hai.

// L1 Ki Limit:
// -> Corporate PAC proxy script setup, IP subnet bypass, ya TLS version deprecation issues L2 ko escalate hote hain.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corporate PAC script proxy route assign karna aur insecure TLS 1.0/1.1 protocols deprecate karna.

// Step 1: Corporate PAC / Proxy Server Configuration
// -> Command: `Win + R` -> type `inetcpl.cpl` -> Enter -----> "Connections" tab par CLICK -> "LAN settings" button par CLICK -> "Use automatic configuration script" tick karke company ka PAC URL daalta hai (ya "Use a proxy server for your LAN" tick karke Proxy IP aur Port daal kar "Bypass proxy server for local addresses" TICK karta hai) -> "OK".

// Step 2: TLS Protocol Hardening (Banking & PCI-DSS Compliance)
// -> Command: `Win + R` -> type `inetcpl.cpl` -> Enter -----> "Advanced" tab par CLICK -> Scroll down to "Security" section -> "Use TLS 1.0" aur "Use TLS 1.1" ko UNCHECK karta hai aur "Use TLS 1.2" aur "Use TLS 1.3" ko TICK karta hai -> "Apply" -> "OK".


// ================================================================================

// 19. msinfo32 — System Information
// --------------------------------------------------------------------------------
// [ CONCEPT: Hardware Abstraction & Firmware Architecture Engine ]
// Windows hardware components, BIOS/UEFI firmware architecture, Secure Boot cryptography, aur driver resource sharing ka master diagnostic viewer.
// (Note: Yeh ek direct inspection tool hai — isme L1/L2 ka artificial split nahi balki standard hardware aur firmware audit hota hai).

// * STEP 1: Quick Hardware Specs & Asset Audit
// -> Command: `Win + R` -> type `msinfo32` -> Enter -----> Left pane me "System Summary" par CLICK karo -> Right pane me note karo: OS Name, System Model (e.g. HP EliteDesk 800 G6), Processor (e.g. Intel Core i7-10700), aur Total Physical Memory (RAM 16.0 GB).

// * STEP 2: Modern UEFI, Secure Boot & Hardware Conflict Audit (Advanced)
// -> Command: `Win + R` -> type `msinfo32` -> Enter -----> Inspect parameters:
//    - BIOS Mode: `UEFI` hona zaroori hai (agar Legacy hai toh Windows 11 upgrade fail hoga).
//    - Secure Boot State: `On` hona chahiye (Rootkit boot virus protection ke liye).
//    - Virtualization-based security: `Running` hona chahiye (Credential Guard protection).
//    - Hardware Resource Conflicts: Left pane se `Hardware Resources` > `Conflicts/Sharing` expand karo -> Check karo do alag PCIe cards (GPU aur Network NIC) same IRQ channel par collision toh nahi kar rahe.


// ================================================================================

// 20. resmon — Resource Monitor
// --------------------------------------------------------------------------------
// [ CONCEPT: Real-Time Process Kernel Telemetry ]
// Windows micro-telemetry engine jo CPU threads, Disk I/O queue depth, Memory commit charge, aur Network TCP sockets ka real-time breakdown provide karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Kaun sa software 100% CPU ya RAM consume karke PC freeze kar raha hai identify karke kill karna.

// Step 1: High CPU / Memory Process Identify & Kill
// -> Command: `Win + R` -> type `resmon` -> Enter -----> "Overview" tab me jata hai -> CPU ya Memory column par CLICK karke highest usage sort karta hai -> Freeze karne wale software (jaise `chrome.exe` ya `excel.exe`) par RIGHT-CLICK -> "End Process" par click karke turant system ko normal karta hai.

// L1 Ki Limit:
// -> Locked files ko background handle se release karna, Disk queue depth 100% active time triage, ya listening ports audit L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: "File In Use" error aane par locked handle release karna aur active network sockets audit karna.

// Step 1: Locked File Ko Bina Reboot Kiye Release Karna (Associated Handles)
// -> Command: `Win + R` -> type `resmon` -> Enter -----> "CPU" tab par CLICK -> "Associated Handles" section expand karta hai -> "Search Handles" box me locked file ka naam type karta hai (e.g. `report.xlsx` ya `data.db`) -> List me exact process name dikh jata hai -> Us process par RIGHT-CLICK -> "End Process" select karta hai (File instantly unlock ho jati hai!).

// Step 2: Network Listening Ports & Socket Binding Audit
// -> Command: `Win + R` -> type `resmon` -> Enter -----> "Network" tab par CLICK -> "Listening Ports" section expand karta hai -> Port number (jaise 80, 443, 3389) kis exact Process Name aur PID se bind hai verify karta hai (Port conflict diagnosis).


// ================================================================================

// 21. msconfig — System Configuration Utility
// --------------------------------------------------------------------------------
// [ CONCEPT: OS Boot Loader & Diagnostic Boot Subsystem ]
// Windows boot loader parameters, diagnostic minimal boot (Safe Mode), aur 3rd-party software isolation (Clean Boot) ka primary recovery console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: System ko Safe Mode me boot karna malware scan aur driver recovery ke liye.

// Step 1: Safe Mode Diagnostic Boot Setup
// -> Command: `Win + R` -> type `msconfig` -> Enter -----> "Boot" tab par CLICK -> "Safe boot" checkbox TICK karta hai ("Minimal" radio button select) -> "Apply" -> "OK" -> "Restart". Kaam khatam hone par normal boot karne ke liye wapas msconfig khol kar "Safe boot" ko UNCHECK karke restart karta hai.

// L1 Ki Limit:
// -> Blue Screen (BSOD) ke baad 3rd-party startup services ka isolation test (Clean Boot) L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: 3rd-party background service conflicts aur persistent startup crashes ka isolation diagnosis (Clean Boot).

// Step 1: Clean Boot Isolation Triage
// -> Command: `Win + R` -> type `msconfig` -> Enter -----> Step-by-Step Clean Boot Procedure:
//    - Step A: "Services" tab par CLICK -> Sabse pehle NEECHE "Hide all Microsoft services" checkbox ko TICK karo (Ye sabse critical step hai! Agar ye tick nahi kiya aur sab disable kar diya, toh Windows boot nahi hogi!).
//    - Step B: Ab bachi hui 3rd-party services me "Disable all" button par CLICK karta hai.
//    - Step C: "Startup" tab par CLICK -> "Open Task Manager" link par click -> Saare non-essential startup apps ko RIGHT-CLICK karke "Disable" karta hai.
//    - Step D: msconfig me wapas aakar "Apply" -> "OK" -> PC Restart karta hai. Agar issue gayab ho gaya, toh ek-ek karke service enable karke culprit crashing software pakad leta hai.


// ================================================================================

// 22. cleanmgr — Disk Cleanup Utility
// --------------------------------------------------------------------------------
// [ CONCEPT: Storage Reclamation & Component Store Sweeper ]
// Windows storage junk cleaner jo user temporary cache, error dump files, aur Windows Update superseded component store files ko wipe karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: User temporary cache aur Recycle Bin clean karke C: drive par instant space banana.

// Step 1: Basic Storage Cleanup
// -> Command: `Win + R` -> type `cleanmgr` -> Enter -----> Drive `C:` select -> "OK" -> "Temporary files", "Recycle Bin", aur "Thumbnails" checkboxes TICK karta hai -> "OK" -> "Delete Files" par click karta hai (1 se 3 GB space quick free).

// L1 Ki Limit:
// -> Windows Update component store cache, old OS install dumps (Windows.old), ya GBs of WinSxS junk clean karna L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: C: Drive 100% full (Red Bar) hone par 15GB+ deep system update cache aur memory dumps purge karna.

// Step 1: Deep System Store & Update Cleanup
// -> Command: `Win + R` -> type `cleanmgr` -> Enter -----> Deep cleanup steps:
//    - Step A: C: drive select -> cleanmgr dialog me neeche "Clean up system files" button par CLICK karta hai -> Dobara Drive `C:` select karke "OK" click karta hai.
//    - Step B: List me "Windows Update Cleanup" (ye akela 5-15 GB khali karta hai), "Previous Windows installation(s)" (Windows.old folder), aur "System error memory dump files" sabhi boxes TICK karta hai -> "OK" -> "Delete Files".

// Step 2: Component Store Base Reset via CLI
// -> Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter -----> `dism.exe /online /cleanup-image /startcomponentcleanup /resetbase` chalata hai (WinSxS folder ka size permanent reduce karne ke liye).


// ================================================================================

// 23. dxdiag — DirectX Diagnostic Tool
// --------------------------------------------------------------------------------
// [ CONCEPT: Graphics Pipeline & Multimedia Acceleration Subsystem ]
// Windows display driver model (WDDM), Direct3D hardware acceleration, monitor refresh rates, aur GPU VRAM ka hardware verification utility.
// (Note: Yeh ek direct display diagnostic tool hai — isme L1/L2 ka artificial split nahi balki GPU hardware aur Direct3D acceleration check hoti hai).

// * STEP 1: Display Specs & Driver Verification
// -> Command: `Win + R` -> type `dxdiag` -> Enter -----> "Display" tab par CLICK karo -> Device Name (e.g. Intel UHD Graphics / NVIDIA GeForce), Display Memory (VRAM), aur Current Display Mode (1920 x 1080 60Hz) note karo.

// * STEP 2: Direct3D Hardware Acceleration & Crash Audit
// -> Command: `Win + R` -> type `dxdiag` -> Enter -----> Hardware Acceleration & Error Check:
//    - DirectDraw, Direct3D aur AGP Texture Acceleration: Teeno `Enabled` hone chahiye (Agar Disabled hain toh driver corrupt hai, clean reinstall zaroori hai).
//    - Notes Box Inspection: Neeche "Notes" box me padho: "No problems found" likha hai ya display driver crash ka event logged hai.


// ================================================================================

// 24. %temp%  &  temp — Temporary Files Cleaner
// --------------------------------------------------------------------------------
// [ CONCEPT: Volatile Application Caches & Kernel Temporary Buffers ]
// Windows operating system aur 3rd party applications ka temporary runtime swap space jo crash hone par purge na hone ki wajah se disk space consume karta hai.
// (Note: Yeh direct cache cleanup task hai — user profile cache aur system kernel cache dono clear karna).

// * STEP 1: User-Level Temporary Cache Clear (%temp%)
// -> Command: `Win + R` -> type `%temp%` -> Enter -----> Folder khulne par keyboard par `Ctrl + A` dabakar sab select karo -> `Shift + Delete` dabakar permanently delete karo -> Agar "File In Use" popup aaye toh "Do this for all current items" checkbox TICK karke "Skip" par click karo.

// * STEP 2: System-Level Kernel Temp & Broken Update Cache Wipe (temp)
// -> Command: `Win + R` -> type `temp` -> Enter -----> System Temp & Download Cache Wipe:
//    - System Temp: Admin permission prompt aane par "Continue" click -> `Ctrl + A` -> `Shift + Delete` -> in-use files par "Skip" karo.
//    - Broken Update Download Cache: CMD Admin me sequence chalao: `net stop wuauserv` -> `Win + R` -> type `C:\Windows\SoftwareDistribution\Download` -> sab delete karo -> `net start wuauserv`.


// ================================================================================

// 25. control printers — Devices and Printers Management
// --------------------------------------------------------------------------------
// [ CONCEPT: Win32 Printing Subsystem & Standard TCP/IP Ports ]
// Enterprise network printers, raw spool queues, page description languages (PCL/PostScript), aur printer port sockets ka management interface.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Default printer assign karna, queue clear karna, aur offline status toggle theek karna.

// Problem 1: Stuck Print Queue Clear & Set Default
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Queue Clear & Default Setup:
//    - Queue Clear: Target printer par RIGHT-CLICK -> "See what's printing" par click -> Top menu "Printer" > "Cancel All Documents" -> "Yes" confirm karta hai.
//    - Set Default: Printer par RIGHT-CLICK -> "Set as default printer" par click karta hai (Green checkmark aayega).

// Problem 2: Printer Status "Offline" Misclick Fix (Use Printer Offline Uncheck)
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Target printer par DOUBLE-CLICK karo -> Top menu me "Printer" par click karo -> "Use Printer Offline" par agar TICK (✔) laga ho, toh click karke UNCHECK karta hai (printer instantly online aa jata hai).

// L1 Ki Limit:
// -> Agar "Use Printer Offline" uncheck karne ke baad bhi status offline hi show kare, toh issue printer ke network port ya firewall SNMP block ka hota hai, jise L2 engineer Step 1 me root cause se fix karta hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Network printer ka static IP port verify karna, fake "Offline" glitches jad se khatam karna, WSD sleep disconnects eliminate karna, corrupt print processor reset karna, aur network diagnostics execute karna.

// Step 1: TCP/IP Port & SNMP Bug Fix (Printer Fake "Offline" Glitch)
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Step-by-Step Entry Rules:
//    - Step A: Printer par RIGHT-CLICK -> "Printer properties" par CLICK (Dhyan rahe: simple "Properties" nahi, "Printer properties" select karna hai).
//    - Step B: "Ports" tab par click karo -> List me active checkmarked port (e.g. `IP_192.168.1.200` ya Standard TCP/IP Port) ko highlight karke "Configure Port..." button par CLICK karo.
//    - Step C (The SNMP Fix): Sabse neeche bane "SNMP Status Enabled" checkbox ko UNCHECK (untick) karta hai! (Rationale: Firewall SNMP UDP 161 block kare toh printer fake offline dikhata hai — uncheck karte hi instantly online ho jata hai).
//    - Step D: "OK" -> "Apply" par click karo.

// Step 2: WSD to Standard TCP/IP Port Conversion (Fixing Sleep & Wakeup Offline Drops)
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Step-by-Step Migration:
//    - Step A: Agar port type `WSD-xxxx` dikhe, toh printer sleep me jate hi offline ho jata hai aur PC reconnect nahi kar paata.
//    - Step B: Printer par RIGHT-CLICK -> "Printer properties" -> "Ports" tab -> "Add Port..." button par CLICK karo.
//    - Step C: "Standard TCP/IP Port" select karo -> "New Port..." -> "Next" dabao.
//    - Step D: "Printer Name or IP Address" field me printer ka static IP address daalo (e.g. `192.168.1.200`) -> "Next" -> "Finish" -> "Close".
//    - Step E: Naya IP port auto-tick ho jayega -> "Apply" -> "OK" click karo (Ab printer sleep hone par bhi kabhi offline nahi hoga).

// Step 3: Print Processor & Spool Datatype Reset (Fixing 0-Byte Frozen Jobs)
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Datatype Reset:
//    - Step A: Printer par RIGHT-CLICK -> "Printer properties" -> "Advanced" tab -> "Print Processor..." button par CLICK karo.
//    - Step B: "Print processor" me `winprint` select karo, aur "Default data type" me `RAW` select karo -> "OK" dabao (Custom vendor EMF format par atka ho toh jobs queue me freeze hoti hain).
//    - Step C (Bypass Spooler): Agar queue corrupt hoti rahe, diagnostic ke liye "Print directly to the printer" select karo -> "Apply" (Print data Spooler me save huye bina seedha printer transfer hota hai).

// Step 4: Web Management Console (EWS) & Network Socket Audit
// -> Command: `Win + R` -> type `cmd` -> Enter -----> CLI & Web Rules:
//    - Step A (Continuous Ping): `ping 192.168.1.200 -t` (0% packet loss aur <2ms response time verify karta hai).
//    - Step B (Port 9100 Socket Test): `powershell Test-NetConnection -ComputerName 192.168.1.200 -Port 9100` -> Result me `TcpTestSucceeded : True` confirm karta hai (raw print port open hai).
//    - Step C (EWS Web Console): Browser URL me type karo `http://192.168.1.200` -> Paper Jam sensors, Door open status, aur Toner percentage verify karta hai.

// Step 5: Test Page & End-to-End Functional Verification
// -> Command: `Win + R` -> type `control printers` -> Enter -----> Printer par RIGHT-CLICK -> "Printer properties" -> "General" tab -> "Print Test Page" button par CLICK karta hai aur physical tray se page verify karta hai.


// ================================================================================

// 26. shell:startup  &  shell:common startup — Windows Startup Auto-Launch
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Shell User/Machine Autorun Profiles ]
// Windows login session initialization ke waqt automated application launchers ko execute karne ka shell folder architecture.
// (Note: Single user shortcut vs machine-wide multi-user kiosk setup ka direct standard).

// * STEP 1: Current User Ke Liye App Auto-Start (shell:startup)
// -> Command: `Win + R` -> type `shell:startup` -> Enter -----> Target application ke shortcut file ko is folder me Copy -> Paste kar do (Specific user ke login hote hi required application shortcut auto-launch karana).

// * STEP 2: Machine-Wide (All Users) Kiosk Auto-Start (shell:common startup)
// -> Command: `Win + R` -> type `shell:common startup` -> Enter -----> Application shortcut paste karo -> Admin prompt par "Continue" click karo (Computer par login karne wale har domain user / shift worker ke liye software auto-run karana). Registry audit: `Win + R` -> `regedit` -> `HKLM\Software\Microsoft\Windows\CurrentVersion\Run`.


// ================================================================================

// 27. netplwiz — User Accounts Configuration
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Credential Cache & Automated Interactive Logon ]
// Windows logon architecture jisme automatic authentication credentials store kiye jate hain taaki unattended computers bina password boot ho sakein.
// (Note: Kiosk / FIDS display auto-logon aur user role management ka direct operational tool).

// * STEP 1: Kiosk & Airport FIDS Display Auto-Logon Setup (Without Password)
// -> Command: `Win + R` -> type `netplwiz` -> Enter -----> Step-by-Step Auto-Logon:
//    - Step A: List se target user account select karo (e.g. `Kiosk_User` ya `FIDS_Term`).
//    - Step B: Upar bane checkbox "Users must enter a user name and password to use this computer" ko UNCHECK (untick) karo -> "Apply" par click karo.
//    - Step C: Popup window me user ka Password aur Confirm Password type karo -> "OK" -> "OK" (Reboot karne par bina password maange direct desktop open hoga).

// * STEP 2: User Group Membership & Secure Sign-in (Advanced)
// -> Command: `Win + R` -> type `netplwiz` -> Enter -----> Group Role & Security:
//    - Group Role: User select karo -> "Properties" button -> "Group Membership" tab -> "Administrator" ya "Standard user" choose karke "Apply" -> "OK" karo.
//    - Secure Sign-in: "Advanced" tab par CLICK karo -> "Require users to press Ctrl + Alt + Delete" checkbox TICK karke phishing screen attacks prevent karo.


// ================================================================================

// 28. outlook.exe /safe — Outlook Diagnostics & Recovery
// --------------------------------------------------------------------------------
// [ CONCEPT: MAPI Client Architecture & Add-in Sandboxing ]
// Microsoft Outlook desktop messaging client ka isolated execution mode jo corrupt 3rd-party COM plugins ko isolate karta hai aur local offline database rebuild karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Crashing Outlook ko Safe Mode me launch karke faulty 3rd-party plugins disable karna.

// Step 1: Outlook Safe Mode Launch & Add-in Fix
// -> Command: `Win + R` -> type `outlook.exe /safe` -> Enter -----> Safe Mode & Add-in Disabling:
//    - Step A: Profile prompt aane par "OK" click karta hai (Outlook bina add-ins ke khul jayega).
//    - Step B: Top menu me `File` > `Options` > `Add-ins` par CLICK -> Neeche Manage: "COM Add-ins" select karke "Go..." button par CLICK.
//    - Step C: Unnecessary/Crashing add-ins (e.g. Antivirus scanner, Adobe PDF, third-party sync tools) ko UNCHECK karta hai -> "OK" -> Outlook close karke normally restart karta hai.

// L1 Ki Limit:
// -> Corrupted `.OST` offline storage rebuild karna ya clean fresh mail profile banana L2 ko di jaati hai.


// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt local offline database (`.ost`) wipe karke server se clean synchronization start karna aur Mail Applet se fresh profile banana.

// Step 1: Corrupted .OST File Wipe & Clean Resync
// -> Command: `Win + R` -> type `%localappdata%\Microsoft\Outlook` -> Enter -----> Outlook process Task Manager me end karta hai -> `%localappdata%\Microsoft\Outlook` folder me `.ost` file (e.g. `john@company.com.ost`) ko rename karke `.ost.old` karta hai -> Outlook open karta hai -> Server se clean fresh .OST file automatically rebuild ho jati hai.

// Step 2: Clean Mail Profile Rebuild via Mail Applet
// -> Command: `Win + R` -> type `control mlcfg32.cpl` -> Enter -----> "Show Profiles..." button par CLICK -> "Add..." button par click karke naya profile configure karta hai -> "Always use this profile" me new profile set karke "Apply" -> "OK" karta hai (Outlook crash permanent resolved).


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
