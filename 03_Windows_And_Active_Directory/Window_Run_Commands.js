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
// - Problem 1: Print Queue Me Document Atka Hai ("Deleting..." ya "Error" Status):
//   Command: `Win + R` -> type `services.msc` -> Enter.
//   Kaam: Services console khol kar Print Spooler service restart karne ke liye.
//   Andar jaakar: List me se "Print Spooler" par RIGHT-CLICK -> "Restart" select karta hai.
// - Problem 2: Queue Lock Ho Chuki Hai (Document GUI Se Cancel Nahi Ho Raha):
//   Step A (Service Stop): `services.msc` me jakar "Print Spooler" par RIGHT-CLICK -> "Stop" karta hai.
//   Step B (Queue Clear): `Win + R` -> type `C:\Windows\System32\spool\PRINTERS` -> Enter.
//   Kaam: Folder khol kar corrupt print buffer files permanently clean karne ke liye.
//   Andar jaakar: Sabhi `.SPL` (print data) aur `.SHD` (shadow settings) files ko [Shift + Delete] se delete karta hai.
//   Step C (Service Start): Wapas `services.msc` me aakar "Print Spooler" par RIGHT-CLICK -> "Start" karta hai.
// - Problem 3: Basic Hardware Check:
//   Kaam: USB cable reconnect karna, network printer me green link blink dekhna, aur paper jam/toner check karna.
// - L1 Ki Limit: Agar service restart karne ke thodi der baad Spooler fir se ruk jaye ya driver crash ho, toh L1 engineer ticket L2 ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Print Spooler baar-baar crash kyun ho raha hai, usko jad se khatam karna.
// - Step 1: Crash Ka Root Cause Pakadna (Event Viewer):
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter.
//   Kaam: Event Viewer khol kar spoolsv.exe crash ka exact faulting driver package pakadne ke liye.
//   Andar jaakar: "Windows Logs" > "Application" me Event ID 1000 check karta hai (`Faulting Module: <Corrupt_Driver>.dll`). Aur "Applications and Services Logs" > "Microsoft" > "Windows" > "PrintService" > "Admin" me jakar crash karne wala user aur document trace karta hai.
// - Step 2: Corrupt Driver Ko Root Se Wipe Karna (Print Management):
//   Command: `Win + R` -> type `printmanagement.msc` -> Enter.
//   Kaam: Print Management console khol kar corrupt driver package registry samet complete delete karne ke liye.
//   Andar jaakar: "Custom Filters" > "All Drivers" me jata hai -> crash karne wale driver par RIGHT-CLICK -> "Remove Driver Package..." select karke clean wipe karta hai, fir vendor site se fresh driver install karta hai.
// - Step 3: Network Printer Port Fix (Printer "Offline" Glitch):
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Printer properties khol kar port IP aur SNMP verification ke liye.
//   Andar jaakar: Printer par RIGHT-CLICK -> "Printer Properties" > "Ports" tab > "Configure Port..." me jakar "SNMP Status Enabled" ko UNCHECK karta hai (Firewall SNMP block kare toh printer fake offline dikhata hai).
// - Step 4: Automatic Service Recovery Rules Set Karna:
//   Command: `Win + R` -> type `services.msc` -> Enter.
//   Kaam: Background me service crash hone par automatic restart automate karna.
//   Andar jaakar: "Print Spooler" par RIGHT-CLICK -> "Properties" > "Recovery" tab me First failure aur Second failure dono par "Restart the Service" set karta hai.
// - Step 5: Driver Isolation Mode Set Karna (Spooler Crash Protection):
//   Command: `Win + R` -> type `printmanagement.msc` -> Enter.
//   Kaam: Printer driver ko separate sandbox process me chalane ke liye.
//   Andar jaakar: Driver par RIGHT-CLICK -> "Set Driver Isolation" -> "Isolated" chunta hai (Agar driver dubara crash bhi ho, toh Spooler aur poore floor ki printing band nahi hogi).


// ================================================================================

// 2. ncpa.cpl — Network Connections (Network Control Panel Applet)
// --------------------------------------------------------------------------------
// [ CONCEPT: Network Adapter & NDIS Subsystem ]
// Windows ka network interface controller (NIC) configuration engine (netman.dll). Physical Ethernet, Wi-Fi aur virtual NICs ke IP, Subnet, Gateway aur DNS ko bind karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic connectivity freeze aur cable disconnect issues resolve karna.
// - Problem 1: "No Internet" Ya "Unidentified Network" Error Aana:
//   Command: `Win + R` -> type `ncpa.cpl` -> Enter.
//   Kaam: Network card adapter ko power cycle (restart) karne ke liye.
//   Andar jaakar: "Ethernet" ya "Wi-Fi" adapter par RIGHT-CLICK -> "Disable" karta hai, fir 5 second baad RIGHT-CLICK -> "Enable" karta hai (80% network freeze solve).
// - Problem 2: Stuck Network Cache & DNS Refresh:
//   Command: `Win + R` -> type `cmd` -> Enter.
//   Kaam: IP configuration renew aur local DNS cache flush karne ke liye.
//   Andar jaakar: Sequential commands chalata hai: `ipconfig /release` -> `ipconfig /renew` -> `ipconfig /flushdns`.
// - Problem 3: Physical Layer Check:
//   Kaam: RJ45 LAN cable reconnect karna aur port par Green/Amber link LED blink check karna.
// - L1 Ki Limit: Agar IPv4 me 169.254.x.x (APIPA) aa raha ho ya network driver crash ho, toh L1 engineer ticket L2 ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: IP conflict, VLAN mismatch, DHCP server failure aur packet drop fix karna.
// - Step 1: APIPA & DHCP DORA Failure Diagnosis:
//   Command: `Win + R` -> type `ncpa.cpl` -> Enter.
//   Kaam: Adapter details me jakar DHCP Discover fail hone ka root cause pakadna.
//   Andar jaakar: Adapter par double-click -> "Details..." me 169.254.x.x dekh kar samajh jata hai ki DHCP Offer nahi aaya (Switch port ka VLAN check karta hai ya DHCP pool full hone par scope extend karta hai).
// - Step 2: Static IP & DNS Hardcoding (Kiosk/Counter PC):
//   Command: `Win + R` -> type `ncpa.cpl` -> Enter.
//   Kaam: Fixed IP aur enterprise DNS assign karne ke liye.
//   Andar jaakar: Adapter par RIGHT-CLICK -> "Properties" -> "Internet Protocol Version 4 (TCP/IPv4)" par double-click -> "Use the following IP address" select karke Static IP, Subnet Mask (/24), Gateway aur Company DNS enter karta hai.
// - Step 3: Speed & Duplex Negotiation Mismatch Fix:
//   Command: `Win + R` -> type `ncpa.cpl` -> Enter.
//   Kaam: Switch port aur NIC negotiation mismatch hone par speed force karna.
//   Andar jaakar: Adapter Properties -> "Configure..." button -> "Advanced" tab -> "Speed & Duplex" property me jakar Auto-Negotiation ko force karke "1.0 Gbps Full Duplex" set karta hai.
// - Step 4: Corrupt TCP/IP Stack & Winsock Reset:
//   Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter.
//   Kaam: Broken network protocol stack aur winsock catalog ko factory default par restore karna.
//   Andar jaakar: `netsh int ip reset` aur `netsh winsock reset` run karta hai, fir PC reboot karta hai.
// - Step 5: NIC Power Management Fix (Kiosk Sleep Protection):
//   Command: `Win + R` -> type `ncpa.cpl` -> Enter.
//   Kaam: Idle PC ka network disconnect hone se rokna.
//   Andar jaakar: Adapter Properties -> "Configure..." -> "Power Management" tab me "Allow the computer to turn off this device to save power" ko UNCHECK karta hai.


// ================================================================================

// 3. devmgmt.msc — Device Manager
// --------------------------------------------------------------------------------
// [ CONCEPT: Plug and Play (PnP) & Hardware Driver Tree ]
// Windows hardware enumeration console. Motherboard chipset, USB controllers, biometric scanners, printers aur external peripherals ke hardware drivers ko manage karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Peripheral (Scanner, Reader, Printer) ko detect karwana.
// - Problem 1: USB Device Attach Kiya Lekin PC Me Response Nahi Aaya:
//   Command: `Win + R` -> type `devmgmt.msc` -> Enter.
//   Kaam: Hardware bus par naye plugged devices scan karne ke liye.
//   Andar jaakar: Top menu bar se "Action" > "Scan for hardware changes" par click karta hai.
// - Problem 2: Device Par Yellow Exclamation Mark (!) Dikhna:
//   Command: `Win + R` -> type `devmgmt.msc` -> Enter.
//   Kaam: Basic driver update wizard chalane ke liye.
//   Andar jaakar: Yellow mark wale device par RIGHT-CLICK -> "Update driver" -> "Search automatically for drivers" chunta hai.
// - L1 Ki Limit: Agar driver online na mile ya Code 10 / Code 43 error aaye, toh ticket L2 ko escalate hoti hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Hardware ID se compatible OEM driver dhoondna aur power suspension rokna.
// - Step 1: Hardware Error Code Diagnosis:
//   Command: `Win + R` -> type `devmgmt.msc` -> Enter.
//   Kaam: Device fail hone ka exact system error code padhna.
//   Andar jaakar: Device par RIGHT-CLICK -> "Properties" -> "General" tab me Device status padhta hai: Code 10 (Driver incompatible) ya Code 43 (Hardware communication fail).
// - Step 2: Hardware ID Se Exact OEM Driver Dhoondna:
//   Command: `Win + R` -> type `devmgmt.msc` -> Enter.
//   Kaam: Vendor ID (VEN) aur Device ID (DEV) nikal kar official INF driver download karna.
//   Andar jaakar: Device Properties -> "Details" tab -> Property drop-down se "Hardware Ids" select karta hai -> Value (e.g. `VEN_8086&DEV_15F3`) copy karke vendor site se certified driver package laata hai -> "Browse my computer for drivers" > "Have Disk..." se manual force-install karta hai.
// - Step 3: Corrupt Driver Package Clean Wipe:
//   Command: `Win + R` -> type `devmgmt.msc` -> Enter.
//   Kaam: Corrupted driver files ko driver store cache se delete karna.
//   Andar jaakar: Device par RIGHT-CLICK -> "Uninstall device" -> "Attempt to remove the driver for this device" checkbox TICK karke uninstall karta hai.
// - Step 4: USB Root Hub Power Suspend Disable:
//   Command: `Win + R` -> type `devmgmt.msc` -> Enter.
//   Kaam: Barcode scanner ya gate reader USB disconnect hone se rokna.
//   Andar jaakar: "Universal Serial Bus controllers" > "USB Root Hub" par RIGHT-CLICK -> "Properties" > "Power Management" me "Allow the computer to turn off this device to save power" ko UNCHECK karta hai.


// ================================================================================

// 4. eventvwr.msc — Windows Event Viewer
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Centralized Event Logging System (eventlog) ]
// Operating system ka black box forensic repository (.evtx files). Application crashes, security audits, kernel panics aur hardware failure ka timestamped record rakhta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: User ke crash/freeze time par system me red error dekhna.
// - Problem 1: PC Achanak Freeze Hua Ya App Crash Hui:
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter.
//   Kaam: System logs khol kar user ke bataye huye exact time par error identify karna.
//   Andar jaakar: Left pane se "Windows Logs" > "Application" ya "System" par click karta hai -> Red color ka "Error" icon check karta hai.
// - L1 Ki Limit: Log me technical hexadecimal codes (e.g. 0xc0000005) ya Event ID 4625 aane par L1 engineer ticket L2 ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Crash karne wale exact DLL module, BSOD bugcheck aur brute-force logins identify karna.
// - Step 1: Application Crash Root Cause (Event ID 1000):
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter.
//   Kaam: Crash hone wali software ka faulting module aur exact DLL file pakadna.
//   Andar jaakar: "Windows Logs" > "Application" par RIGHT-CLICK -> "Filter Current Log..." -> Event ID box me type karta hai: `1000` -> Result me `Faulting Application: chrome.exe` aur `Faulting Module Name: ntdll.dll` note karke issue solve karta hai.
// - Step 2: BSOD & Kernel Power Crash Analysis (Event ID 41):
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter.
//   Kaam: Blue Screen of Death ka BugCheck code decode karna.
//   Andar jaakar: "Windows Logs" > "System" -> "Filter Current Log..." -> Event ID daalta hai: `41` -> BugcheckCode (e.g. `0x0000009F` Driver Power State Failure) se hardware/driver crash point trace karta hai.
// - Step 3: Account Lockout & Brute-Force Audit (Event ID 4625):
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter.
//   Kaam: User account kis remote IP ya machine se baar-baar galat password dal kar lock kiya ja raha hai trace karna.
//   Andar jaakar: "Windows Logs" > "Security" -> "Filter Current Log..." -> Event ID: `4625` (Failed Logon) filter karta hai -> "Source Network Address" aur "Workstation Name" se attacker machine pakadta hai.
// - Step 4: Diagnostic Logs Export Karna (.evtx):
//   Command: `Win + R` -> type `eventvwr.msc` -> Enter.
//   Kaam: Senior team ya vendor escalation ke liye clean log packet banana.
//   Andar jaakar: Target log par RIGHT-CLICK -> "Save All Events As..." select karke `.evtx` file save karke ticket me attach karta hai.


// ================================================================================

// 5. appwiz.cpl — Programs and Features (Add or Remove Programs)
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Installer Subsystem (MSI) & Application Registry Database ]
// System par installed applications, runtimes (Visual C++, .NET), aur software updates ka central control console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Corrupted software uninstall karna ya repair wizard chalana.
// - Problem 1: Software Open Hone Par Error De Raha Hai:
//   Command: `Win + R` -> type `appwiz.cpl` -> Enter.
//   Kaam: Application list khol kar software repair ya reinstall karne ke liye.
//   Andar jaakar: Software select karta hai -> Top bar se "Repair" ya "Change" par click karke wizard chala deta hai.
// - Problem 2: Standard Application Uninstall Karna:
//   Command: `Win + R` -> type `appwiz.cpl` -> Enter.
//   Kaam: Software remove karne ke liye.
//   Andar jaakar: Software par click karke "Uninstall" dabata hai aur prompts follow karta hai.
// - L1 Ki Limit: Agar uninstall me "Another installation is in progress" ya "Error 1603 / Access Denied" aaye, toh ticket L2 ko escalate hoti hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Stuck installer locks break karna aur leftover registry keys wipe karna.
// - Step 1: Stuck MSI Windows Installer Process Force-Kill:
//   Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter.
//   Kaam: Background me atke huye MSI installer ko unlock karna.
//   Andar jaakar: Command chalata hai: `taskkill /F /IM msiexec.exe` aur service restart karta hai: `net stop msiserver && net start msiserver`.
// - Step 2: Residual Files & Registry Deep Wipe:
//   Command: `Win + R` -> type `regedit` -> Enter.
//   Kaam: Corrupted app ki residual uninstall keys delete karna taaki fresh install block na ho.
//   Andar jaakar: `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall` me jakar app ki leftover GUID key ko delete karta hai.
// - Step 3: Turn Windows Features On/Off (.NET / SMB):
//   Command: `Win + R` -> type `appwiz.cpl` -> Enter.
//   Kaam: System ke internal enterprise features enable/disable karna.
//   Andar jaakar: Left sidebar se "Turn Windows features on or off" par click karta hai -> `.NET Framework 3.5` ya `SMB 1.0` enable karke legacy application chalata hai.


// ================================================================================

// 6. diskmgmt.msc — Disk Management (Logical Disk Manager)
// --------------------------------------------------------------------------------
// [ CONCEPT: Virtual Disk Service (VDS) & Storage Partitioning Subsystem ]
// Physical drives (HDD, NVMe SSD), partitions (MBR/GPT), file systems (NTFS/FAT32), aur drive letters ka management console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Missing partition ko visible karna aur drive letter assign karna.
// - Problem 1: Second Partition Ya External Drive 'This PC' Me Dikh Nahi Rahi:
//   Command: `Win + R` -> type `diskmgmt.msc` -> Enter.
//   Kaam: Partition list khol kar missing drive letter assign karne ke liye.
//   Andar jaakar: Healthy blue partition par RIGHT-CLICK -> "Change Drive Letter and Paths..." -> "Add..." -> Letter (e.g. D: ya E:) choose karke "OK" karta hai.
// - L1 Ki Limit: Agar disk "Offline", "Not Initialized", ya "RAW" show kare, toh data loss ke darr se ticket L2 ko escalate kar di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Disk policy conflicts, file system corruption aur GPT initialization solve karna.
// - Step 1: Policy Conflict Offline Disk Online Karna:
//   Command: `Win + R` -> type `diskmgmt.msc` -> Enter.
//   Kaam: SAN/Storage policy conflict se offline hui disk ko activate karna.
//   Andar jaakar: Disk ke grey box (Disk 1) par RIGHT-CLICK -> "Online" par click karta hai.
// - Step 2: Raw Disk Initialization (GPT vs MBR):
//   Command: `Win + R` -> type `diskmgmt.msc` -> Enter.
//   Kaam: Nayi hard drive/SSD ko modern partition table me initialize karna.
//   Andar jaakar: Nayi unallocated disk par RIGHT-CLICK -> "Initialize Disk" -> Modern UEFI systems ke liye **GPT (GUID Partition Table)** select karta hai.
// - Step 3: Read-Only Attribute Clear Karna (DISKPART):
//   Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter.
//   Kaam: Write-protected hard drive ka lock hatana.
//   Andar jaakar: Sequential commands chalata hai: `diskpart` -> `list disk` -> `select disk 1` -> `attributes disk clear readonly`.
// - Step 4: RAW File System Corruption Recovery (CHKDSK):
//   Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter.
//   Kaam: Corrupted Master File Table (MFT) aur bad sectors repair karna.
//   Andar jaakar: Command chalata hai: `chkdsk D: /f /r` taaki file system NTFS me wapas recover ho sake.


// ================================================================================

// 7. taskmgr — Windows Task Manager (Shortcut: Ctrl + Shift + Esc)
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Telemetry Engine & Process Execution Monitor ]
// OS kernel processes, thread execution, handles, CPU scheduler, RAM paging, aur disk I/O ka real-time telemetry monitor.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Frozen software ko close karna aur general resource load dekhna.
// - Problem 1: Application Par "Not Responding" Aa Gaya:
//   Command: `Win + R` -> type `taskmgr` -> Enter (ya `Ctrl + Shift + Esc`).
//   Kaam: Task Manager khol kar hang software ko terminate karne ke liye.
//   Andar jaakar: "Processes" tab me frozen app par RIGHT-CLICK -> "End task" select karta hai.
// - Problem 2: PC Slow Ya Hang Ho Raha Hai:
//   Andar jaakar: "Processes" tab me "CPU" aur "Memory" columns par click karke dekhta hai kaun sa app resources consume kar raha hai.
// - L1 Ki Limit: Agar End task karne par "Access is Denied" aaye ya process turant dobara spawn ho jaye, toh L1 escalate karta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Rogue worker threads kill karna, memory leak trace karna aur startup bloatware eliminate karna.
// - Step 1: Kill Entire Process Tree (Child Threads Elimination):
//   Command: `Win + R` -> type `taskmgr` -> Enter.
//   Kaam: Background hidden worker processes samet poore software tree ko terminate karna.
//   Andar jaakar: "Details" tab me jata hai -> main process par RIGHT-CLICK -> **"End process tree"** select karta hai.
// - Step 2: Memory Leak (Non-Paged Pool) Diagnosis:
//   Command: `Win + R` -> type `taskmgr` -> Enter.
//   Kaam: Faulty hardware driver memory leak pakadna.
//   Andar jaakar: "Performance" tab > "Memory" me "Non-paged pool" check karta hai; agar ye 2-4GB+ cross kar raha ho toh faulty NIC ya graphics driver leak pakadta hai.
// - Step 3: Startup Impact Optimization (Boot Time 3x Fast):
//   Command: `Win + R` -> type `taskmgr` -> Enter.
//   Kaam: Slow boot time theek karna.
//   Andar jaakar: "Startup Apps" tab me jakar "High" Startup Impact wale faltu background updaters par RIGHT-CLICK -> "Disable" karta hai.
// - Step 4: Creating Process Crash Dump (.DMP):
//   Command: `Win + R` -> type `taskmgr` -> Enter.
//   Kaam: Software crash analysis ke liye dump file create karna.
//   Andar jaakar: "Details" tab me process par RIGHT-CLICK -> "Create dump file" karke developer escalation packet banata hai.


// ================================================================================

// 8. mstsc — Remote Desktop Connection (Microsoft Terminal Services Client)
// --------------------------------------------------------------------------------
// [ CONCEPT: Remote Desktop Protocol (RDP) Subsystem (Port 3389) ]
// Remote Desktop Protocol (mstsc.exe). Network ke through remote Windows machine ka GUI session lene ke liye use hota hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Remote counter PC ya server ka quick session lena.
// - Problem 1: Remote Counter PC Ko Login Karna:
//   Command: `Win + R` -> type `mstsc` -> Enter.
//   Kaam: Remote Desktop Connection launcher kholne ke liye.
//   Andar jaakar: Remote PC ka IP address enter karta hai -> "Connect" dabata hai -> Domain credentials daalta hai (`DOMAIN\username`).
// - L1 Ki Limit: "Remote Desktop cannot connect to the remote computer" error aane par L1 engineer ticket L2 ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Firewall blockage, NLA mismatch, aur remote registry RDP enabling.
// - Step 1: CLI Port 3389 Reachability & Handshake Test:
//   Command: `Win + R` -> type `powershell` -> Enter.
//   Kaam: Verify karna ki remote machine par RDP port listening hai ya firewall me blocked hai.
//   Andar jaakar: Command chalata hai: `Test-NetConnection -ComputerName 192.168.1.50 -Port 3389` (Agar TcpTestSucceeded: False aaye toh firewall/port blocked hai).
// - Step 2: Remote Machine Par RDP Force-Enable Karna (Remote Registry):
//   Command: `Win + R` -> type `regedit` -> Enter.
//   Kaam: Desk par jaye bina remote machine ka RDP access ON karna.
//   Andar jaakar: "File" > "Connect Network Registry..." -> Remote PC ka naam daalta hai -> `HKLM\SYSTEM\CurrentControlSet\Control\Terminal Server` me jakar `fDenyTSConnections` ko `0` set karta hai.
// - Step 3: Network Level Authentication (NLA) Mismatch Fix:
//   Command: `Win + R` -> type `sysdm.cpl` -> Enter.
//   Kaam: Purane clients ke liye NLA mismatch bypass karna.
//   Andar jaakar: "Remote" tab me "Allow connections only from computers running Remote Desktop with Network Level Authentication" ko untick karke test karta hai.
// - Step 4: Remote Terminal Service Force-Restart:
//   Command: `Win + R` -> type `powershell` -> Enter.
//   Kaam: Stuck RDP session daemon ko remotely reload karna.
//   Andar jaakar: `Restart-Service -ComputerName <RemotePC> -Name TermService -Force` chalata hai.
// - Step 5: Admin Physical Console Session Connect Karna:
//   Command: `Win + R` -> type `mstsc /v:<IP> /admin` -> Enter.
//   Kaam: Server Session 0 ka direct physical console access lene ke liye.


// ================================================================================

// 9. cmd — Windows Command Prompt (cmd.exe)
// --------------------------------------------------------------------------------
// [ CONCEPT: Win32 Command Line Interpreter & Diagnostic Shell ]
// System management routines, batch scripts, network diagnostic utilities, aur administrative repair commands ka execution shell.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic network connectivity aur DNS cache clear karna.
// - Command 1 (Internet Stability Test):
//   Command: `Win + R` -> type `cmd` -> Enter.
//   Command: `ping -t 8.8.8.8`
//   Kaam: Google public IP par continuous packets bhej kar connection drop monitor karna.
// - Command 2 (DNS Cache Flush):
//   Command: `ipconfig /flushdns`
//   Kaam: System me jam gaye corrupt ya purane DNS cache ko saaf karna.
// - Command 3 (IP & MAC Address Verification):
//   Command: `ipconfig /all`
//   Kaam: Network card ka physical MAC address, Subnet Mask, Gateway aur DHCP server verify karna.
// - L1 Ki Limit: Deep system file corruption ya complex network stack failure aane par ticket L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: System integrity repair, network stack reset aur Group Policy audit.
// - Step 1: System File Checker & Component Store Repair (DISM & SFC):
//   Command: `Win + R` -> type `cmd` (Press Ctrl + Shift + Enter for Run as Administrator).
//   Kaam: Corrupted Windows operating system files ko fresh copies se repair karna.
//   Andar jaakar: Sequence chalata hai:
//   1. `DISM /Online /Cleanup-Image /RestoreHealth` (Windows component store online repair karta hai).
//   2. `sfc /scannow` (Corrupted system DLLs ko verify aur replace karta hai).
// - Step 2: Complete Network Stack Reset (Master Repair):
//   Command: `netsh int ip reset` aur `netsh winsock reset`
//   Kaam: Corrupt TCP/IP network protocol aur winsock catalog ko factory default par restore karke PC reboot karta hai.
// - Step 3: Domain Group Policy Force & Result Audit:
//   Command: `gpupdate /force` aur `gpresult /r`
//   Kaam: Active Directory GPO instantly fetch karna aur user par kaun-kaun se security policies aur groups apply huye hain unki detail audit nikalna.
// - Step 4: Active Network Connection Port Audit:
//   Command: `netstat -ano | findstr :3389`
//   Kaam: Specific port kis Process ID (PID) par bind hai dekhna.
// - Step 5: Boot-time Disk & Bad Sector Repair:
//   Command: `chkdsk C: /f /r`
//   Kaam: Agle reboot par disk bad clusters aur NTFS file table verify karta hai.


// ================================================================================

// 10. powershell — Windows PowerShell Engine
// --------------------------------------------------------------------------------
// [ CONCEPT: .NET Framework Object-Oriented Management Shell ]
// Windows management instrumentation (WMI/CIM), object-based pipelines, aur system recovery ka advanced CLI engine.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic status check aur daily quick commands chalana.
// - Command 1: `Get-Service -Name Spooler`
//   Kaam: Print Spooler service ka live status check karna (Running hai ya Stopped).
// - Command 2: `Restart-Service -Name Spooler`
//   Kaam: Stuck print jobs ke waqt printer service ko quick restart (bounce) karna.
// - Command 3: `Get-Process -Name chrome`
//   Kaam: Chrome ya specific application kitni memory aur CPU le raha hai status dekhna.
// - Command 4: `.\DailyCheck.ps1`
//   Kaam: Pre-configured daily maintenance script ko terminal par execute karna.
// - L1 Ki Limit: Jab script chalane par red error aaye ("ExecutionPolicy Restricted") ya remote PC par command chalani ho toh L2 ko escalate karta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Script unblocking, deep port telemetry, heavy process kill, aur remote management.
// - Step 1: Execution Policy Unblock Karna
//   Command: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
//   Kaam: System ki global security policy ko tode bina sirf current window ke liye script execution allow karna.
// - Step 2: Advanced Network Port & Latency Diagnostics
//   Command: `Test-NetConnection -ComputerName 192.168.1.50 -Port 3389 -InformationLevel Detailed`
//   Kaam: Server ka IP aur port check karke route hops aur TCP handshake trace karna (Pata lagana ki RDP ya ERP traffic kahan block hua).
// - Step 3: Top Heavy CPU Applications Filter Karna
//   Command: `Get-Process | Sort-Object CPU -Descending | Select-Object -First 5`
//   Kaam: PC hang hone par top 5 heavy applications ka exact Process ID (PID) nikalna.
// - Step 4: Hanging Process Ko Forcefully Kill Karna
//   Command: `Stop-Process -Id <PID> -Force`
//   Kaam: User ka PC bina reboot kiye sirf hanging program ko turant background me kill karna.
// - Step 5: Forceful Service Bouncing With Dependencies
//   Command: `Restart-Service -Name <service> -Force`
//   Kaam: Service aur uske sath judi saari dependent background services ko ek sath safely reload karna.
// - Step 6: Remote Execution via PSRemoting (WinRM)
//   Command: `Invoke-Command -ComputerName <CounterPC01> -ScriptBlock { Restart-Service Spooler -Force }`
//   Kaam: User ke desk par jaye bina apni seat se remote computer par terminal command chala kar issue fix karna.


// ================================================================================

// 11. control — Classic Windows Control Panel
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Win32 Administrative Control Engine ]
// System hardware abstraction, security credentials, mail profiles, aur storage encryption ka master control console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Settings):
// Target: Standard hardware settings, default printers, aur sound test karna.
// - Kaam 1 (Printers & Queue Check):
//   Direct Command: `control printers`
//   Andar jaakar: Office ke network printer par RIGHT-CLICK karke "Set as default printer" select karta hai; stuck printing queue dekhne ke liye "See what's printing" khol kar error documents cancel karta hai.
// - Kaam 2 (Sound & Microphone Fix):
//   Direct Command: `mmsys.cpl`
//   Andar jaakar: User bole "Teams call me aawaz nahi aa rahi" toh "Playback" tab me headset par RIGHT-CLICK karke "Set as Default Device" karta hai; "Recording" tab me mic input level test karta hai.
// - Kaam 3 (Programs Install/Uninstall):
//   Direct Command: `appwiz.cpl`
//   Andar jaakar: Corrupt application par click karke "Uninstall" ya "Repair" karta hai.
// - Kaam 4 (Network Adapter Reset):
//   Direct Command: `ncpa.cpl`
//   Andar jaakar: Wi-Fi ya Ethernet card par RIGHT-CLICK karke "Disable" fir 5 second baad "Enable" karke connection restart karta hai.
// - L1 Ki Limit: Corrupt Outlook profiles, BitLocker recovery prompt, ya domain credential mismatch par L2 ko escalate karte hain.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt Outlook profiles, cached domain credentials, BitLocker audit, aur counter sleep prevention.
// - Step 1: Rebuilding Corrupted Outlook Profile (Mail Applet)
//   Direct Command: `control mlcfg32.cpl` (bina Outlook khole direct Mail Configuration console kholta hai)
//   Andar jaakar: "Show Profiles..." button par click -> "Add..." click karke naya profile name daalta hai -> Office 365 email configure karta hai -> "Always use this profile" me naya profile select karke "OK" karta hai. (Result: Outlook opening freeze/crash permanent solve).
// - Step 2: Stale Domain Credentials Cleanup (Credential Manager)
//   Direct Command: `control keymgr.dll`
//   Andar jaakar: "Windows Credentials" tab par click -> "Generic Credentials" ke andar purane expired password wali entries (e.g. `MicrosoftOffice16_Data`, shared network drive passwords) ko expand karke "Remove" karta hai. (Result: Wrong cached password ki wajah se user account baar-baar lock hona band ho jata hai).
// - Step 3: BitLocker Drive Encryption & TPM Audit
//   Direct Command: `control /name Microsoft.BitLockerDriveEncryption`
//   Andar jaakar: C: drive par check karta hai "BitLocker on", TPM 2.0 status verify karta hai, aur "Back up your recovery key" se key ko Active Directory ya secure drive par backup karta hai.
// - Step 4: Kiosk / 24x7 Counter Sleep Prevention (Power Options)
//   Direct Command: `powercfg.cpl`
//   Andar jaakar: "High performance" plan select karta hai -> "Change plan settings" -> "Put the computer to sleep: Never" aur "Turn off hard disk after: 0 (Never)" set karta hai taaki night shift me airport/hotel counter PC sleep mode me jaakar freeze na ho.


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
// - Step 1 (Console Open Karna):
//   Command: `Win + R` -> type `compmgmt.msc` -> Enter.
// - Step 2 (Missing Drivers Check - Device Manager):
//   Andar jaakar: Left pane se `System Tools` > `Device Manager` par click karta hai -> dekhta hai kisi hardware (printer, scanner, network card) par Yellow Exclamation Mark (`!`) ya Red Cross toh nahi hai.
// - Step 3 (Local User Password Reset - Local Users and Groups):
//   Andar jaakar: Left pane se `System Tools` > `Local Users and Groups` > `Users` me jata hai -> Local user account par RIGHT-CLICK karke "Set Password..." karta hai; agar account locked ho toh "Properties" me jakar "Account is locked out" uncheck karke "Apply" karta hai.
// - Step 4 (Services Status Quick Check):
//   Andar jaakar: Left pane se `Services and Applications` > `Services` khol kar Print Spooler ya Windows Update service check karta hai.
// - L1 Ki Limit: Shared folder locks todna, active server sessions disconnect karna, disk initialization (GPT), ya Event ID deep audit L2 ko escalate karta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause, Storage Architecture & Audit):
// Target: Shared folders file locks release, disk GPT conversion, aur forensic crash analysis.
// - Step 1 (Locked Files Release & Active Sessions Disconnect):
//   Andar jaakar: Left pane se `System Tools` > `Shared Folders` expand karta hai:
//   * "Sessions": Dekhta hai kaun-kaun se users is waqt network shared folder se connected hain (Unwanted user par RIGHT-CLICK -> "Close Session").
//   * "Open Files": Jab user bole "File lock hai, koi doosra edit kar raha hai", toh yahan locked file dhoondh kar RIGHT-CLICK -> "Close Open File" karta hai (bina server restart kiye file lock release ho jata hai).
// - Step 2 (Disk Initialization & Volume Health - Disk Management):
//   Andar jaakar: Left pane se `Storage` > `Disk Management` par click karta hai:
//   * Nayi unallocated hard drive/SSD par RIGHT-CLICK -> "Initialize Disk" select karke modern GPT partition style apply karta hai.
//   * Unallocated space par RIGHT-CLICK -> "New Simple Volume" banakar NTFS format aur drive letter (D:, E:) assign karta hai.
//   * Agar disk "Offline" dikhe toh RIGHT-CLICK karke "Online" karta hai.
// - Step 3 (Event Viewer Deep System & Security Log Audit):
//   Andar jaakar: Left pane se `System Tools` > `Event Viewer` > `Windows Logs`:
//   * "System" log me Event ID 7034 (Service Crash) aur Event ID 41 (Kernel Power / Sudden Shutdown) trace karta hai.
//   * "Security" log me Event ID 4625 (Failed Logon / Brute Force Attack) trace karke IP aur attacker workstation pakadta hai.
// - Step 4 (Automated Task Schedules Audit):
//   Andar jaakar: Left pane se `System Tools` > `Task Scheduler` > `Task Scheduler Library` me jakar check karta hai ki company ka automatic night backup ya log cleanup script successfully run hua ya fail hua.


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
