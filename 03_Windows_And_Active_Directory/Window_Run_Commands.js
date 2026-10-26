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
// - Problem 4: Printer Status "Offline" Dikh Raha Hai (User Misclick):
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Print queue khol kar offline mode disable karne ke liye.
//   Andar jaakar: Target printer par DOUBLE-CLICK karo -> top menu me "Printer" par click karo -> "Use Printer Offline" par agar TICK (✔) laga ho, toh click karke UNCHECK karta hai (printer instantly online aa jata hai).
// - L1 Ki Limit: Agar service restart karne ke thodi der baad Spooler fir se ruk jaye, ya "Use Printer Offline" uncheck karne par bhi printer offline hi dikhaye, toh issue corrupt driver ya network SNMP port block ka hota hai, jise L2 engineer root cause se fix karta hai.

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
// - Step 2: Static IP & DNS Hardcoding (Kiosk/Counter PC & Printers):
//   Command: `Win + R` -> type `ncpa.cpl` -> Enter.
//   Kaam: Fixed IP, Subnet Mask, Gateway aur DNS manually bind karne ke liye.
//   Andar jaakar (Step-by-Step Entry Rules):
//     1. Adapter par RIGHT-CLICK -> "Properties" -> "Internet Protocol Version 4 (TCP/IPv4)" par DOUBLE-CLICK.
//     2. "Use the following IP address" radio button select karta hai:
//        - Pehle CMD me `ipconfig` se default gateway check karta hai (Example Gateway: 192.168.1.1).
//        - Free IP Verify Karna: CMD me `ping 192.168.1.50` karke dekhta hai; jab "Request timed out" aaye (koi use nahi kar raha), tabhi wo IP assign karta hai.
//        - IP Address: [ 192 . 168 . 1 . 50 ]  -> (Gateway ki same series ka number, aakhri octet 2 se 254 tak).
//        - Subnet Mask: [ 255 . 255 . 255 . 0 ] -> (Class C /24 standard pool).
//        - Default Gateway: [ 192 . 168 . 1 . 1 ] -> (Local switch ya router ka address).
//     3. "Use the following DNS server addresses" enter karta hai:
//        - Preferred DNS: [ 192 . 168 . 1 . 10 ] -> (Enterprise local Domain Controller / AD DS server IP).
//        - Alternate DNS: [ 8 . 8 . 8 . 8 ] -> (Google public DNS backup).
//     4. Invalid Values Warning (Jo kabhi enter nahi karna):
//        - Kisi block me 255 se bada number (e.g. 192.168.1.300) nahi dalte.
//        - Aakhri digit .0 (Network ID) ya .255 (Broadcast) nahi daal sakte.
//        - Gateway ki series badal kar IP nahi daal sakte (e.g. Gateway 192.168.1.1 ho aur IP 10.0.0.50 nahi de sakte).
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

// * MASTER NAVIGATION (Control Panel Kaise Kholna Aur Use Karna Hai):
// Command: `Win + R` -> type `control` -> Enter.
// View Mode Setup: Control Panel khulne par top-right corner me "View by: Category" dropdown par CLICK karo -> "Large icons" select karo (isse saare administrative applets ek saath visible ho jate hain).

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Settings):
// Target: Standard hardware settings, default printer, sound device aur network adapter quick fix karna.
// - Kaam 1 (Printers, Offline Toggle & Queue Check):
//   Command: `Win + R` -> type `control` -> Enter -> "Devices and Printers" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `control printers` -> Enter).
//   Kaam: Default printer set karna, stuck print queue clear karna, aur offline status toggle theek karna.
//   Andar jaakar:
//   * Step A (Offline Mode Check): Target printer par DOUBLE-CLICK karo -> Top menu me "Printer" par click karo -> "Use Printer Offline" par agar TICK (✔) laga ho, toh click karke UNCHECK karta hai (printer instantly online aa jata hai).
//   * Step B (Queue Clear): Printer par RIGHT-CLICK -> "See what's printing" par click -> Top menu bar se "Printer" > "Cancel All Documents" par click karke stuck jobs delete karta hai.
//   * Step C (Default Printer): Printer par RIGHT-CLICK -> "Set as default printer" par click karta hai (Green checkmark aayega).
// - Kaam 2 (Sound & Microphone Fix):
//   Command: `Win + R` -> type `control` -> Enter -> "Sound" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `mmsys.cpl` -> Enter).
//   Kaam: Headset sound output aur mic input testing.
//   Andar jaakar: "Playback" tab me user ke headset par RIGHT-CLICK -> "Set as Default Device" aur "Set as Default Communication Device" select karta hai; "Recording" tab me Microphone par RIGHT-CLICK -> "Properties" -> "Levels" tab me slider 100% check karke bolne par green bars check karta hai.
// - Kaam 3 (Programs Install/Uninstall):
//   Command: `Win + R` -> type `control` -> Enter -> "Programs and Features" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `appwiz.cpl` -> Enter).
//   Kaam: Corrupt application uninstall ya repair karna.
//   Andar jaakar: Installed apps ki list me crashing software par LEFT-CLICK karke select karta hai -> Upar bar se "Uninstall" ya "Repair" button par click karta hai.
// - Kaam 4 (Network Adapter Quick Reset):
//   Command: `Win + R` -> type `control` -> Enter -> "Network and Sharing Center" par CLICK karo -> Left sidebar me "Change adapter settings" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `ncpa.cpl` -> Enter).
//   Kaam: Freeze network card ko power cycle karna.
//   Andar jaakar: "Ethernet" ya "Wi-Fi" card par RIGHT-CLICK -> "Disable" karta hai, fir 5 second wait karke RIGHT-CLICK -> "Enable" karta hai.
// - L1 Ki Limit: Stale domain credentials remove karna, corrupt Outlook profiles rebuild karna, BitLocker recovery keys audit karna, ya system sleep power plans tweak karna L2 ko escalate karta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt Outlook profiles rebuild karna, cached domain passwords wipe karna, BitLocker audit, aur 24x7 counter sleep prevention.
// - Step 1: Corrupted Outlook Profile Rebuild (Mail Applet)
//   Command: `Win + R` -> type `control` -> Enter -> "Mail (Microsoft Outlook)" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `control mlcfg32.cpl` -> Enter).
//   Kaam: Bina Outlook open kiye corrupt mailbox profile ko clean naye profile se replace karna.
//   Andar jaakar: "Show Profiles..." button par CLICK -> "Add..." button par CLICK -> Profile Name type karo (e.g. Outlook_New) -> "OK" -> User ka Office 365 email/password verify karo -> "Always use this profile" dropdown me "Outlook_New" select karo -> "Apply" -> "OK".
// - Step 2: Stale Domain Credentials Cleanup (Credential Manager)
//   Command: `Win + R` -> type `control` -> Enter -> "Credential Manager" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `control keymgr.dll` -> Enter).
//   Kaam: Password change hone ke baad purane cached credentials delete karna (User account bar-bar lockout hone ka #1 reason).
//   Andar jaakar: "Windows Credentials" tab par CLICK karo -> Neeche "Generic Credentials" section me purane expired passwords wali entries (jaise MicrosoftOffice16_Data ya network shared drive credentials) ke aage bane Dropdown Arrow par CLICK karo -> "Remove" button par CLICK -> "Yes" confirm karo.
// - Step 3: BitLocker Drive Encryption & TPM Audit
//   Command: `Win + R` -> type `control` -> Enter -> "BitLocker Drive Encryption" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `control /name Microsoft.BitLockerDriveEncryption` -> Enter).
//   Kaam: Corporate disk encryption status verify karna aur recovery key backup lena.
//   Andar jaakar: OS Drive (C:) ke aage dekhta hai: "BitLocker on". Agar key backup leni ho toh "Back up your recovery key" link par CLICK -> "Save to your cloud domain account" ya "Save to a file" select karke Active Directory/USB par safe backup karta hai.
// - Step 4: Kiosk / 24x7 Counter Sleep Prevention (Power Options)
//   Command: `Win + R` -> type `control` -> Enter -> "Power Options" par CLICK karo.
//   (Direct Shortcut: `Win + R` -> type `powercfg.cpl` -> Enter).
//   Kaam: 24x7 chalne wale airport counters, hotel reception aur hospital kiosks ko sleep mode me freeze hone se bachana.
//   Andar jaakar: "High performance" radio button par CLICK karo -> Uske aage "Change plan settings" link par CLICK -> "Turn off the display: Never" aur "Put the computer to sleep: Never" dropdown select karta hai -> Neeche "Change advanced power settings" par CLICK -> "Hard disk" > "Turn off hard disk after: 0 (Never)" daal kar "Apply" -> "OK" karta hai.


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


// 13. lusrmgr.msc — Local Users and Groups
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Security Authority & SAM Database ]
// Local computer ke Security Account Manager (SAM) database ke users aur built-in groups ko manage karne ka master console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Local user password reset aur locked account release karna.
// - Problem 1: Local Account Lock Ho Gaya Hai ("The referenced account is currently locked out"):
//   Command: `Win + R` -> type `lusrmgr.msc` -> Enter.
//   Kaam: Local SAM database khol kar lockout flag hatana.
//   Andar jaakar: Left pane me "Users" folder par DOUBLE-CLICK karta hai -> Locked user (jaise Administrator ya Cashier) par RIGHT-CLICK -> "Properties" -> "Account is locked out" checkbox UNCHECK (untick) karta hai -> "Apply" -> "OK".
// - Problem 2: User Password Bhool Gaya (Local Password Reset):
//   Command: `Win + R` -> type `lusrmgr.msc` -> Enter.
//   Kaam: Local computer par naya secure password assign karna.
//   Andar jaakar: "Users" folder me target user par RIGHT-CLICK -> "Set Password..." -> "Proceed" button par click -> Naya password enter karo -> "OK".
// - L1 Ki Limit: Agar user domain account ka ho (ADUC me hona chahiye) ya machine par domain user ko local administrative rights dene hon, toh L2 ko escalate hota hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Domain user ko local admin banana aur built-in attack surface harden karna.
// - Step 1: Domain User Ko Local Administrator Banane Ka Process:
//   Command: `Win + R` -> type `lusrmgr.msc` -> Enter.
//   Kaam: Specific domain engineer ya technical account ko local PC par admin rights dena.
//   Andar jaakar: Left pane se "Groups" folder par CLICK -> Center pane me "Administrators" group par DOUBLE-CLICK -> "Add..." button par click -> domain format me account daalo (e.g. `AIRPORT\tausif.admin` ya `COMPANY\ITSupport`) -> "Check Names" button par click (name underline hoga) -> "OK" -> "Apply" -> "OK".
// - Step 2: Unused Accounts Security Lockdown:
//   Command: `Win + R` -> type `lusrmgr.msc` -> Enter.
//   Kaam: Hacker backdoor attack surface band karna.
//   Andar jaakar: Built-in "Guest" account par RIGHT-CLICK -> "Properties" -> "Account is disabled" ensure karta hai; default built-in "Administrator" account ko rename karke company policy follow karta hai.


// ================================================================================

// 14. sysdm.cpl — System Properties
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Core Identity, Domain Membership & Subsystem Tuning ]
// Computer ka unique hostname, Active Directory domain trust membership, virtual paging memory aur user environment variables configure karne ka master engine.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Computer Name set karna aur Workgroup se Active Directory Domain me join karana.
// - Step 1: Computer Name Change & Domain Join:
//   Command: `Win + R` -> type `sysdm.cpl` -> Enter.
//   Kaam: Machine ki corporate identity register karna aur domain server se bind karna.
//   Andar jaakar: "Computer Name" tab par "Change..." button par CLICK -> "Computer name:" box me company standard name daalo (e.g. `DXB-T3-CHK-014`) -> "Member of" me "Domain" radio button choose karo -> Domain Name type karo (e.g. `airport.local` ya `company.corp`) -> "OK" -> Domain Admin credentials prompt aane par Username/Password daalo -> "Welcome to the domain" popup -> "OK" -> "Restart Now" par click.
// - L1 Ki Limit: Virtual memory paging size tuning, BSOD crash dump configuration, ya Remote Desktop NLA rules L2 ko escalate hote hain.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: OS visual performance boost, Pagefile virtual memory fix, aur Environment variables setup.
// - Step 1: Visual Performance Optimization (Slow PC Boost):
//   Command: `Win + R` -> type `sysdm.cpl` -> Enter.
//   Kaam: Unnecessary visual animations band karke low-spec PC ko superfast banana.
//   Andar jaakar: "Advanced" tab par CLICK -> "Performance" section me "Settings..." button par click -> "Visual Effects" me "Adjust for best performance" radio button select karta hai -> "Apply" -> "OK".
// - Step 2: Virtual Memory / Paging File Sizing (Out of Memory Crashes Fix):
//   Command: `Win + R` -> type `sysdm.cpl` -> Enter.
//   Kaam: Physical RAM bharne par Windows commit charge crash hone se rokna.
//   Andar jaakar: "Advanced" tab -> "Performance" Settings -> "Advanced" tab -> "Virtual memory" section me "Change..." button par click -> "Automatically manage paging file size" UNCHECK karo -> "Custom size" select karke Initial size (RAM x 1.5) aur Maximum size (RAM x 3) daal kar "Set" -> "OK" karta hai.
// - Step 3: Environment Variables Path Setup:
//   Command: `Win + R` -> type `sysdm.cpl` -> Enter.
//   Kaam: Scripts aur software binary execution paths configure karna.
//   Andar jaakar: "Advanced" tab -> "Environment Variables..." button -> "System variables" box me `Path` select karke "Edit..." click karke company scripts ya tools ka folder path add karta hai.
// - Step 4: Remote Desktop NLA Enforcement:
//   Command: `Win + R` -> type `sysdm.cpl` -> Enter.
//   Kaam: Secure RDP connection allow karna.
//   Andar jaakar: "Remote" tab par CLICK -> "Allow remote connections to this computer" TICK karta hai aur "Allow connections only from computers running Remote Desktop with Network Level Authentication" mandatory check karta hai.


// ================================================================================

// 15. gpedit.msc — Local Group Policy Editor
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Policy Registry Enforcement Engine ]
// Standalone Windows PC par operating system features, USB ports, Windows updates aur user restrictions enforce karne ka local management tool.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Local restrictions verify karna aur policies ko manually force-refresh karna.
// - Step 1: Policy Enforcement Check:
//   Command: `Win + R` -> type `gpedit.msc` -> Enter.
//   Kaam: Check karna ki local PC par koi specific restriction lagi hai ya nahi.
//   Andar jaakar: Left pane me navigate karta hai: `Computer Configuration` > `Administrative Templates` > `System` > `Removable Storage Access` -> dekhta hai USB blocking rule Enabled hai ya Not Configured.
// - Step 2: Policy Force Update:
//   Command: `Win + R` -> type `cmd` -> Enter -> type `gpupdate /force` -> Enter.
//   Kaam: Nayi policy ko bina reboot kiye turant active karna.
// - L1 Ki Limit: Enterprise security baseline design karna, automatic update policies configure karna, ya User Rights Assignment L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Data leak prevention (USB block), update reboot prevention, aur local hardening.
// - Step 1: USB Mass Storage Devices Block Karna (Data Leak Prevention):
//   Command: `Win + R` -> type `gpedit.msc` -> Enter.
//   Kaam: Kisi bhi user ya employee ko unauthorized pendrive/external HDD use karne se rokna.
//   Andar jaakar: `Computer Configuration` > `Administrative Templates` > `System` > `Removable Storage Access` -> "All Removable Storage classes: Deny all access" par DOUBLE-CLICK -> "Enabled" radio button select karo -> "Apply" -> "OK".
// - Step 2: Operational Shift Me Auto-Restart Disable Karna (Windows Update Freeze Protection):
//   Command: `Win + R` -> type `gpedit.msc` -> Enter.
//   Kaam: Live counter par kaam chalte waqt achanak Windows auto-reboot hone se rokna.
//   Andar jaakar: `Computer Configuration` > `Administrative Templates` > `Windows Components` > `Windows Update` -> "No auto-restart with logged on users for scheduled automatic updates installations" par DOUBLE-CLICK -> "Enabled" select karo -> "Apply" -> "OK".
// - Step 3: User Rights Assignment Security Audit:
//   Command: `Win + R` -> type `gpedit.msc` -> Enter.
//   Kaam: Sirf authorized IT groups ko logon aur RDP permission restrict karna.
//   Andar jaakar: `Computer Configuration` > `Windows Settings` > `Security Settings` > `Local Policies` > `User Rights Assignment` -> "Allow log on through Remote Desktop Services" me jakar verify karta hai unauthorized users list me na hon.


// ================================================================================

// 16. secpol.msc — Local Security Policy
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Security Hardening & Audit Infrastructure ]
// Password complexity, account lockout thresholds, Kerberos security policies, aur security audit logs ka master security console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Account lockout rules aur password complexity policies inspect karna.
// - Step 1: Account Lockout Settings Check:
//   Command: `Win + R` -> type `secpol.msc` -> Enter.
//   Kaam: Pata lagana ki user kitni baar galat password daalega toh account freeze hoga.
//   Andar jaakar: Left pane me `Security Settings` > `Account Policies` > `Account Lockout Policy` par CLICK -> dekhta hai "Account lockout threshold" (e.g. 5 invalid attempts) aur "Account lockout duration" (e.g. 15 ya 30 minutes) kitna configured hai.
// - L1 Ki Limit: Advanced audit failure logging enable karna, SMB signing enforce karna, ya UAC administrative rules setup karna L2 ko escalate hota hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Brute-force attacks detect karne ke liye Audit logging enable karna aur UAC lockdown lagana.
// - Step 1: Detailed Logon Failure Audit Enable Karna (Brute Force Detection):
//   Command: `Win + R` -> type `secpol.msc` -> Enter.
//   Kaam: System par hone wale unauthorized login attempts ko Event Viewer me capture karwana.
//   Andar jaakar: `Security Settings` > `Advanced Audit Policy Configuration` > `Audit Policies` > `Logon/Logoff` -> "Audit Logon" par DOUBLE-CLICK -> "Success" aur "Failure" dono checkboxes TICK karta hai -> "Apply" -> "OK". (Result: Attacker ka IP aur machine name Event Viewer Security Log Event ID 4625 me log hona shuru ho jata hai).
// - Step 2: SMB Signing Enforce Karna (Man-in-the-Middle Block):
//   Command: `Win + R` -> type `secpol.msc` -> Enter.
//   Kaam: Network shared files par unauthorized tampering aur SMB relay attacks block karna.
//   Andar jaakar: `Security Settings` > `Local Policies` > `Security Options` -> "Microsoft network client: Digitally sign communications (always)" par DOUBLE-CLICK -> "Enabled" select karo -> "Apply" -> "OK".
// - Step 3: User Account Control (UAC) Elevation Policy:
//   Command: `Win + R` -> type `secpol.msc` -> Enter.
//   Kaam: Malware ko bina prompt silent admin privileges lene se rokna.
//   Andar jaakar: `Security Settings` > `Local Policies` > `Security Options` -> "User Account Control: Behavior of the elevation prompt for administrators in Admin Approval Mode" ko "Prompt for credentials" ya "Prompt for consent" enforce karta hai.


// ================================================================================

// 17. firewall.cpl  &  wf.msc — Windows Defender Firewall
// --------------------------------------------------------------------------------
// [ CONCEPT: State-Full Host-Based Packet Filtering ]
// Windows operating system ka internal traffic gatekeeper jo unauthorized inbound aur outbound TCP/UDP traffic ko block karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic firewall status check karna aur pre-approved application ko quick allow karna.
// - Problem 1: User Bolta Hai "Nayi App Lagayi Hai Par Server Se Connect Nahi Ho Rahi":
//   Command: `Win + R` -> type `firewall.cpl` -> Enter.
//   Kaam: Standard Windows Firewall window khol kar application pass-through allow karna.
//   Andar jaakar: Left sidebar se "Allow an app or feature through Windows Defender Firewall" par CLICK -> Upar "Change settings" button par click -> Application ke samne "Domain" aur "Private" checkboxes TICK karo -> "OK".
// - L1 Ki Limit: Custom TCP/UDP port open karna, IP subnet scoping, ya outbound block rules lagana L2 ko escalate hota hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Custom enterprise port Inbound rules banana aur IP whitelist security lock lagana.
// - Step 1: Custom Enterprise Inbound Port Open Karna (wf.msc):
//   Command: `Win + R` -> type `wf.msc` -> Enter.
//   Kaam: Advanced Security Firewall console me specific port rule create karna.
//   Andar jaakar:
//   * Step A: Left pane me "Inbound Rules" par CLICK -> Right pane me "New Rule..." par CLICK.
//   * Step B: "Port" radio button choose karo -> Next -> "TCP" select karo -> "Specific local ports:" me required port type karo (e.g. `8080` ya `3389`) -> Next.
//   * Step C: "Allow the connection" select karo -> Next -> Profiles me "Domain" aur "Private" tick rakho ("Public" untick karo) -> Next.
//   * Step D: Rule Name daalo (e.g. `Allow_ERP_Application_8080`) -> "Finish".
// - Step 2: IP Scope Whitelisting (Security Hardening):
//   Command: `Win + R` -> type `wf.msc` -> Enter.
//   Kaam: Har kisi ke liye port khula chhodne ke bajaye sirf official application server ko allow karna.
//   Andar jaakar: Banaye gaye rule par DOUBLE-CLICK -> "Scope" tab me jao -> "Remote IP address" me "These IP addresses" radio button choose karo -> "Add..." click karke application server ka exact IP daal kar "OK" -> "Apply" karta hai.


// ================================================================================

// 18. inetcpl.cpl — Internet Properties
// --------------------------------------------------------------------------------
// [ CONCEPT: WinINet System Networking, Proxy & Certificate Zones ]
// Windows OS level proxy configuration, security trust zones, SSL/TLS certificate cache, aur cryptographic protocols ka central control panel.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Internal web portals ko Trusted Sites me add karna aur corrupt SSL cache clear karna.
// - Problem 1: Company Internal Portal Par "Certificate Error" Ya "Untrusted Site" Aana:
//   Command: `Win + R` -> type `inetcpl.cpl` -> Enter.
//   Kaam: Browser security zone me company intranet URL allow karna.
//   Andar jaakar: "Security" tab par CLICK -> "Trusted sites" green checkmark icon par CLICK -> "Sites" button par CLICK -> "Add this website to the zone:" box me internal portal URL daalo (e.g. `https://*.company.corp`) -> "Add" -> "Close".
// - Problem 2: Stale SSL Handshake Cache Clear Karna:
//   Command: `Win + R` -> type `inetcpl.cpl` -> Enter.
//   Kaam: Website par secure session refresh karne ke liye SSL cache wipe karna.
//   Andar jaakar: "Content" tab par CLICK -> "Clear SSL state" button par CLICK -> "The SSL cache was successfully cleared" confirmation popup dekhta hai.
// - L1 Ki Limit: Corporate PAC proxy script setup, IP subnet bypass, ya TLS version deprecation issues L2 ko escalate hote hain.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corporate PAC script proxy route assign karna aur insecure TLS 1.0/1.1 protocols deprecate karna.
// - Step 1: Corporate PAC / Proxy Server Configuration:
//   Command: `Win + R` -> type `inetcpl.cpl` -> Enter.
//   Kaam: Enterprise network me web traffic ko central secure web gateway (Zscaler/BlueCoat) se guzaarna.
//   Andar jaakar: "Connections" tab par CLICK -> "LAN settings" button par CLICK -> "Use automatic configuration script" tick karke company ka PAC URL daalta hai (ya "Use a proxy server for your LAN" tick karke Proxy IP aur Port daal kar "Bypass proxy server for local addresses" TICK karta hai) -> "OK".
// - Step 2: TLS Protocol Hardening (Banking & PCI-DSS Compliance):
//   Command: `Win + R` -> type `inetcpl.cpl` -> Enter.
//   Kaam: Vulnerable encryption protocols band karke secure ciphers enforce karna.
//   Andar jaakar: "Advanced" tab par CLICK -> Scroll down to "Security" section -> "Use TLS 1.0" aur "Use TLS 1.1" ko UNCHECK karta hai aur "Use TLS 1.2" aur "Use TLS 1.3" ko TICK karta hai -> "Apply" -> "OK".


// ================================================================================

// 19. msinfo32 — System Information
// --------------------------------------------------------------------------------
// [ CONCEPT: Hardware Abstraction & Firmware Architecture Engine ]
// Windows hardware components, BIOS/UEFI firmware architecture, Secure Boot cryptography, aur driver resource sharing ka master diagnostic viewer.
// (Note: Yeh ek direct inspection tool hai — isme L1/L2 ka artificial split nahi balki standard hardware aur firmware audit hota hai).

// * STEP 1: Quick Hardware Specs & Asset Audit:
//   Command: `Win + R` -> type `msinfo32` -> Enter.
//   Kaam: IT Asset Management ke liye PC ke physical specs, model number, processor aur RAM note karna.
//   Andar jaakar: Left pane me "System Summary" par CLICK karo -> Right pane me note karo: OS Name, System Model (e.g. HP EliteDesk 800 G6), Processor (e.g. Intel Core i7-10700), aur Total Physical Memory (RAM 16.0 GB).

// * STEP 2: Modern UEFI, Secure Boot & Hardware Conflict Audit (Advanced):
//   Command: `Win + R` -> type `msinfo32` -> Enter.
//   Kaam: Machine corporate security compliance (UEFI, Secure Boot) aur hardware device conflicts trace karna.
//   Andar jaakar:
//   * "System Summary" me inspect karo:
//     - "BIOS Mode": `UEFI` hona zaroori hai (agar Legacy hai toh Windows 11 upgrade fail hoga).
//     - "Secure Boot State": `On` hona chahiye (Rootkit boot virus protection ke liye).
//     - "Virtualization-based security": `Running` hona chahiye (Credential Guard protection).
//   * Hardware Resource Conflict Analysis: Left pane se `Hardware Resources` > `Conflicts/Sharing` expand karo -> Check karo do alag PCIe cards (jaise dedicated GPU aur Network NIC) same IRQ channel par collision toh nahi kar rahe.


// ================================================================================

// 20. resmon — Resource Monitor
// --------------------------------------------------------------------------------
// [ CONCEPT: Real-Time Process Kernel Telemetry ]
// Windows micro-telemetry engine jo CPU threads, Disk I/O queue depth, Memory commit charge, aur Network TCP sockets ka real-time breakdown provide karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Kaun sa software 100% CPU ya RAM consume karke PC freeze kar raha hai identify karke kill karna.
// - Step 1: High CPU / Memory Process Identify & Kill:
//   Command: `Win + R` -> type `resmon` -> Enter.
//   Kaam: Freeze ho chuke computer ko bina reboot kiye responsive banana.
//   Andar jaakar: "Overview" tab me jata hai -> CPU ya Memory column par CLICK karke highest usage sort karta hai -> Freeze karne wale software (jaise `chrome.exe` ya `excel.exe`) par RIGHT-CLICK -> "End Process" par click karke turant system ko normal karta hai.
// - L1 Ki Limit: Locked files ko background handle se release karna, Disk queue depth 100% active time triage, ya listening ports audit L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: "File In Use" error aane par locked handle release karna aur active network sockets audit karna.
// - Step 1: Locked File Ko Bina Reboot Kiye Release Karna (Associated Handles):
//   Command: `Win + R` -> type `resmon` -> Enter.
//   Kaam: Jab user bole "File delete ya rename nahi ho rahi, koi doosra process use kar raha hai".
//   Andar jaakar: "CPU" tab par CLICK -> "Associated Handles" section ko expand karta hai -> "Search Handles" box me locked file ka naam type karta hai (e.g. `report.xlsx` ya `data.db`) -> List me exact process name dikh jata hai -> Us process par RIGHT-CLICK -> "End Process" select karta hai (File instantly unlock ho jati hai!).
// - Step 2: Network Listening Ports & Socket Binding Audit:
//   Command: `Win + R` -> type `resmon` -> Enter.
//   Kaam: Check karna ki local application kis exact port aur IP par listen kar rahi hai.
//   Andar jaakar: "Network" tab par CLICK -> "Listening Ports" section expand karta hai -> Port number (jaise 80, 443, 3389) kis exact Process Name aur PID se bind hai verify karta hai (Port conflict diagnosis).


// ================================================================================

// 21. msconfig — System Configuration Utility
// --------------------------------------------------------------------------------
// [ CONCEPT: OS Boot Loader & Diagnostic Boot Subsystem ]
// Windows boot loader parameters, diagnostic minimal boot (Safe Mode), aur 3rd-party software isolation (Clean Boot) ka primary recovery console.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: System ko Safe Mode me boot karna malware scan aur driver recovery ke liye.
// - Step 1: Safe Mode Diagnostic Boot Setup:
//   Command: `Win + R` -> type `msconfig` -> Enter.
//   Kaam: Windows ko basic drivers aur bina 3rd party apps ke chalana.
//   Andar jaakar: "Boot" tab par CLICK -> "Safe boot" checkbox TICK karta hai ("Minimal" radio button select) -> "Apply" -> "OK" -> "Restart". Kaam khatam hone par normal boot karne ke liye wapas msconfig khol kar "Safe boot" ko UNCHECK karke restart karta hai.
// - L1 Ki Limit: Blue Screen (BSOD) ke baad 3rd-party startup services ka isolation test (Clean Boot) L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: 3rd-party background service conflicts aur persistent startup crashes ka isolation diagnosis (Clean Boot).
// - Step 1: Clean Boot Isolation Triage:
//   Command: `Win + R` -> type `msconfig` -> Enter.
//   Kaam: Unknown crashing software ko pinpoint karna.
//   Andar jaakar:
//   * Step A: "Services" tab par CLICK -> Sabse pehle NEECHE "Hide all Microsoft services" checkbox ko TICK karo (Ye sabse critical step hai! Agar ye tick nahi kiya aur sab disable kar diya, toh Windows boot nahi hogi!).
//   * Step B: Ab bachi hui 3rd-party services me "Disable all" button par CLICK karta hai.
//   * Step C: "Startup" tab par CLICK -> "Open Task Manager" link par click -> Saare non-essential startup apps ko RIGHT-CLICK karke "Disable" karta hai.
//   * Step D: msconfig me wapas aakar "Apply" -> "OK" -> PC Restart karta hai. Agar issue gayab ho gaya, toh ek-ek karke service enable karke culprit crashing software pakad leta hai.


// ================================================================================

// 22. cleanmgr — Disk Cleanup Utility
// --------------------------------------------------------------------------------
// [ CONCEPT: Storage Reclamation & Component Store Sweeper ]
// Windows storage junk cleaner jo user temporary cache, error dump files, aur Windows Update superseded component store files ko wipe karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: User temporary cache aur Recycle Bin clean karke C: drive par instant space banana.
// - Step 1: Basic Storage Cleanup:
//   Command: `Win + R` -> type `cleanmgr` -> Enter.
//   Kaam: 1 se 3 GB space quick free karna.
//   Andar jaakar: Drive `C:` select -> "OK" -> "Temporary files", "Recycle Bin", aur "Thumbnails" checkboxes TICK karta hai -> "OK" -> "Delete Files" par click karta hai.
// - L1 Ki Limit: Windows Update component store cache, old OS install dumps (Windows.old), ya GBs of WinSxS junk clean karna L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: C: Drive 100% full (Red Bar) hone par 15GB+ deep system update cache aur memory dumps purge karna.
// - Step 1: Deep System Store & Update Cleanup:
//   Command: `Win + R` -> type `cleanmgr` -> Enter.
//   Kaam: Hidden system installer cache wipe karna.
//   Andar jaakar:
//   * Step A: C: drive select -> cleanmgr dialog me neeche "Clean up system files" button par CLICK karta hai -> Dobara Drive `C:` select karke "OK" click karta hai.
//   * Step B: List me "Windows Update Cleanup" (ye akela 5-15 GB khali karta hai), "Previous Windows installation(s)" (Windows.old folder), aur "System error memory dump files" sabhi boxes TICK karta hai -> "OK" -> "Delete Files".
// - Step 2: Component Store Base Reset via CLI:
//   Command: `Win + R` -> type `cmd` (Run as Administrator) -> Enter.
//   Kaam: Windows WinSxS folder ka size permanent reduce karna.
//   Andar jaakar: Command execute karta hai:
//   `dism.exe /online /cleanup-image /startcomponentcleanup /resetbase`


// ================================================================================

// 23. dxdiag — DirectX Diagnostic Tool
// --------------------------------------------------------------------------------
// [ CONCEPT: Graphics Pipeline & Multimedia Acceleration Subsystem ]
// Windows display driver model (WDDM), Direct3D hardware acceleration, monitor refresh rates, aur GPU VRAM ka hardware verification utility.
// (Note: Yeh ek direct display diagnostic tool hai — isme L1/L2 ka artificial split nahi balki GPU hardware aur Direct3D acceleration check hoti hai).

// * STEP 1: Display Specs & Driver Verification:
//   Command: `Win + R` -> type `dxdiag` -> Enter.
//   Kaam: Graphics card model, dedicated VRAM, aur display resolution verify karna.
//   Andar jaakar: "Display" tab par CLICK karo -> Device Name (e.g. Intel UHD Graphics / NVIDIA GeForce), Display Memory (VRAM), aur Current Display Mode (1920 x 1080 60Hz) note karo.

// * STEP 2: Direct3D Hardware Acceleration & Crash Audit:
//   Command: `Win + R` -> type `dxdiag` -> Enter.
//   Kaam: GPU acceleration broken hone par verify karna aur display driver crashes inspect karna.
//   Andar jaakar:
//   * "Display" tab me ensure karo:
//     - "DirectDraw Acceleration": `Enabled`
//     - "Direct3D Acceleration": `Enabled`
//     - "AGP Texture Acceleration": `Enabled`
//     (Agar ye Disabled hain, toh graphics driver corrupt ho chuka hai, clean reinstall zaroori hai).
//   * Notes Box Inspection: Neeche "Notes" box me padho: "No problems found" likha hai ya display driver crash ka event logged hai.


// ================================================================================

// 24. %temp%  &  temp — Temporary Files Cleaner
// --------------------------------------------------------------------------------
// [ CONCEPT: Volatile Application Caches & Kernel Temporary Buffers ]
// Windows operating system aur 3rd party applications ka temporary runtime swap space jo crash hone par purge na hone ki wajah se disk space consume karta hai.
// (Note: Yeh direct cache cleanup task hai — user profile cache aur system kernel cache dono clear karna).

// * STEP 1: User-Level Temporary Cache Clear (%temp%):
//   Command: `Win + R` -> type `%temp%` -> Enter.
//   Kaam: Current logged-in user profile ka application temp cache clean karna jab PC ya browser slow chale.
//   Andar jaakar: Folder khulne par keyboard par `Ctrl + A` dabakar sab select karo -> `Shift + Delete` dabakar permanently delete karo -> Agar "File In Use" popup aaye toh "Do this for all current items" checkbox TICK karke "Skip" par click karo.

// * STEP 2: System-Level Kernel Temp & Broken Update Cache Wipe (temp):
//   Command: `Win + R` -> type `temp` -> Enter.
//   Kaam: Operating system level temporary buffers aur corrupted Windows Update download cache clean karna.
//   Andar jaakar:
//   * System Temp: Admin permission prompt aane par "Continue" click -> `Ctrl + A` -> `Shift + Delete` -> in-use files par "Skip" karo.
//   * Broken Update Download Cache: CMD Admin me sequence chalao:
//     `net stop wuauserv` -> `Win + R` -> type `C:\Windows\SoftwareDistribution\Download` -> sab delete karo -> `net start wuauserv`.


// ================================================================================

// 25. control printers — Devices and Printers Management
// --------------------------------------------------------------------------------
// [ CONCEPT: Win32 Printing Subsystem & Standard TCP/IP Ports ]
// Enterprise network printers, raw spool queues, page description languages (PCL/PostScript), aur printer port sockets ka management interface.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Default printer assign karna, queue clear karna, aur offline status toggle theek karna.
// - Step 1: Stuck Print Queue Clear & Set Default:
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Paper print stuck hone par queue clear karna aur right printer default banana.
//   Andar jaakar:
//   * Step A (Queue Clear): Target printer par RIGHT-CLICK -> "See what's printing" par click -> Top menu "Printer" > "Cancel All Documents" -> "Yes" confirm karta hai.
//   * Step B (Set Default): Printer par RIGHT-CLICK -> "Set as default printer" par click karta hai (Green checkmark aayega).
// - Step 2: Printer Status "Offline" Misclick Fix (Use Printer Offline Uncheck):
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: User misclick se offline huye printer ko wapas Online toggle karne ke liye.
//   Andar jaakar: Target printer par DOUBLE-CLICK karo -> Top menu me "Printer" par click karo -> "Use Printer Offline" par agar TICK (✔) laga ho, toh click karke UNCHECK karta hai (printer instantly online aa jata hai).
// - L1 Ki Limit: Agar "Use Printer Offline" uncheck karne ke baad bhi status offline hi show kare, toh issue printer ke network port ya firewall SNMP block ka hota hai, jise L2 engineer Step 1 me root cause se fix karta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Network printer ka static IP port verify karna, fake "Offline" glitches jad se khatam karna, WSD sleep disconnects eliminate karna, corrupt print processor reset karna, aur network diagnostics execute karna.
// - Step 1: TCP/IP Port & SNMP Bug Fix (Printer Fake "Offline" Glitch):
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Network printer physically online aur pingable hone ke bawajood Windows me "Offline" dikhne ka SNMP firewall bug fix karna.
//   Andar jaakar (Step-by-Step Entry Rules):
//   * Step A: Printer par RIGHT-CLICK -> "Printer properties" par CLICK (Dhyan rahe: simple "Properties" nahi, "Printer properties" select karna hai).
//   * Step B: "Ports" tab par click karo -> List me active checkmarked port (e.g. `IP_192.168.1.200` ya Standard TCP/IP Port) ko highlight karke "Configure Port..." button par CLICK karo.
//   * Step C (The SNMP Fix): Sabse neeche bane "SNMP Status Enabled" checkbox ko UNCHECK (untick) karta hai!
//     - Root Cause Rationale: Enterprise firewall ya network switch UDP port 161 (SNMP) ko block karte hain. Jab Windows printer se SNMP response nahi paata, toh printer online hone par bhi fake "Offline" status show karta hai — ise uncheck karte hi printer instantly "Ready / Online" aa jata hai!
//   * Step D: "OK" -> "Apply" par click karo.
// - Step 2: WSD to Standard TCP/IP Port Conversion (Fixing Sleep & Wakeup Offline Drops):
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Windows 10/11 ke default WSD (Web Services for Devices) ghost port ko permanent Standard TCP/IP port me migrate karna.
//   Andar jaakar (Step-by-Step Entry Rules):
//   * Step A (Issue Identification): Agar port type `WSD-xxxx` dikhe, toh printer sleep mode me jate hi offline ho jata hai aur PC dubara reconnect nahi kar paata.
//   * Step B: Printer par RIGHT-CLICK -> "Printer properties" -> "Ports" tab -> "Add Port..." button par CLICK karo.
//   * Step C: "Standard TCP/IP Port" select karo -> "New Port..." par click karo -> Wizard khulega, "Next" dabao.
//   * Step D: "Printer Name or IP Address" field me printer ka static IP address daalo (e.g. `192.168.1.200`) -> "Next" -> "Finish" -> "Close" dabao.
//   * Step E: Naya IP port auto-tick ho jayega -> "Apply" -> "OK" click karo (Ab printer sleep hone par bhi kabhi offline nahi hoga).
// - Step 3: Print Processor & Spool Datatype Reset (Fixing 0-Byte Frozen Jobs):
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Corrupt EMF/RAW print data crash ko rokna aur direct hardware bypass test karna.
//   Andar jaakar (Step-by-Step Entry Rules):
//   * Step A: Printer par RIGHT-CLICK -> "Printer properties" -> "Advanced" tab par CLICK karo -> "Print Processor..." button par CLICK karo.
//   * Step B: "Print processor" me `winprint` select karo, aur "Default data type" me `RAW` select karo -> "OK" dabao (agar custom vendor EMF format par atka ho, toh jobs queue me freeze ho jati hain).
//   * Step C (Bypass Spooler Diagnostic): Agar queue baar-baar corrupt ho rahi ho, toh diagnostic ke liye "Print directly to the printer" select karo -> "Apply". Isse print data Spooler me save huye bina seedha printer ko transfer hota hai.
// - Step 4: Web Management Console (EWS) & Network Socket Audit:
//   Command: `Win + R` -> type `cmd` -> Enter.
//   Kaam: Physical link, raw print port 9100 socket listening, aur printer internal sensors audit karna.
//   Andar jaakar (Step-by-Step CLI & Web Rules):
//   * Step A (Continuous Ping): `ping 192.168.1.200 -t` (0% packet loss aur <2ms response time verify karta hai).
//   * Step B (Port 9100 Socket Test via PowerShell): `powershell Test-NetConnection -ComputerName 192.168.1.200 -Port 9100` -> Result me `TcpTestSucceeded : True` confirm karta hai (raw print port open hai).
//   * Step C (EWS Web Console): Web browser khol kar URL me type karo `http://192.168.1.200` -> Printer ka web console khulega -> Real-time Paper Jam sensors, Door open status, aur Toner percentage verify karta hai.
// - Step 5: Test Page & End-to-End Functional Verification:
//   Command: `Win + R` -> type `control printers` -> Enter.
//   Kaam: Changes confirm karne ke liye physical test print nikalna.
//   Andar jaakar: Printer par RIGHT-CLICK -> "Printer properties" -> "General" tab par CLICK -> "Print Test Page" button par CLICK karta hai aur physical tray se page verify karta hai.


// ================================================================================

// 26. shell:startup  &  shell:common startup — Windows Startup Auto-Launch
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Shell User/Machine Autorun Profiles ]
// Windows login session initialization ke waqt automated application launchers ko execute karne ka shell folder architecture.
// (Note: Single user shortcut vs machine-wide multi-user kiosk setup ka direct standard).

// * STEP 1: Current User Ke Liye App Auto-Start (shell:startup):
//   Command: `Win + R` -> type `shell:startup` -> Enter.
//   Kaam: Specific user ke login hote hi required application shortcut auto-launch karana.
//   Andar jaakar: Target application ke shortcut file ko is folder me Copy -> Paste kar do.

// * STEP 2: Machine-Wide (All Users) Kiosk Auto-Start (shell:common startup):
//   Command: `Win + R` -> type `shell:common startup` -> Enter.
//   Kaam: Computer par login karne wale har domain user / shift worker ke liye software auto-run karana.
//   Andar jaakar: Application shortcut paste karo -> Admin prompt par "Continue" click karo. Registry audit ke liye: `Win + R` -> type `regedit` -> Enter -> `HKLM\Software\Microsoft\Windows\CurrentVersion\Run` me inspect karo unauthorized scripts toh nahi hain.


// ================================================================================

// 27. netplwiz — User Accounts Configuration
// --------------------------------------------------------------------------------
// [ CONCEPT: Local Credential Cache & Automated Interactive Logon ]
// Windows logon architecture jisme automatic authentication credentials store kiye jate hain taaki unattended computers bina password boot ho sakein.
// (Note: Kiosk / FIDS display auto-logon aur user role management ka direct operational tool).

// * STEP 1: Kiosk & Airport FIDS Display Auto-Logon Setup (Without Password):
//   Command: `Win + R` -> type `netplwiz` -> Enter.
//   Kaam: Unattended kiosk, FIDS screen, ya hotel lobby PC par boot hote hi bina password auto-login karana.
//   Andar jaakar:
//   * Step A: List se target user account select karo (e.g. `Kiosk_User` ya `FIDS_Term`).
//   * Step B: Upar bane checkbox "Users must enter a user name and password to use this computer" ko UNCHECK (untick) karo -> "Apply" par click karo.
//   * Step C: Popup window me user ka Password aur Confirm Password type karo -> "OK" -> "OK". (Reboot karne par bina password maange direct desktop open hoga).

// * STEP 2: User Group Membership & Secure Sign-in (Advanced):
//   Command: `Win + R` -> type `netplwiz` -> Enter.
//   Kaam: User ko Administrator ya Standard role assign karna aur secure login enforce karna.
//   Andar jaakar:
//   * Group Role: User select karo -> "Properties" button -> "Group Membership" tab -> "Administrator" ya "Standard user" choose karke "Apply" -> "OK" karo.
//   * Secure Sign-in: "Advanced" tab par CLICK karo -> "Require users to press Ctrl + Alt + Delete" checkbox TICK karke phishing screen attacks prevent karo.


// ================================================================================

// 28. outlook.exe /safe — Outlook Diagnostics & Recovery
// --------------------------------------------------------------------------------
// [ CONCEPT: MAPI Client Architecture & Add-in Sandboxing ]
// Microsoft Outlook desktop messaging client ka isolated execution mode jo corrupt 3rd-party COM plugins ko isolate karta hai aur local offline database rebuild karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Crashing Outlook ko Safe Mode me launch karke faulty 3rd-party plugins disable karna.
// - Step 1: Outlook Safe Mode Launch & Add-in Fix:
//   Command: `Win + R` -> type `outlook.exe /safe` -> Enter.
//   Kaam: Corrupt add-ins ko bypass karke Outlook open karna.
//   Andar jaakar:
//   * Step A: Profile prompt aane par "OK" click karta hai (Outlook bina add-ins ke khul jayega).
//   * Step B: Top menu me `File` > `Options` > `Add-ins` par CLICK -> Neeche Manage: "COM Add-ins" select karke "Go..." button par CLICK.
//   * Step C: Unnecessary/Crashing add-ins (e.g. Antivirus scanner, Adobe PDF, third-party sync tools) ko UNCHECK karta hai -> "OK" -> Outlook ko close karke normally restart karta hai.
// - L1 Ki Limit: Corrupted `.OST` offline storage rebuild karna ya clean fresh mail profile banana L2 ko di jaati hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt local offline database (`.ost`) wipe karke server se clean synchronization start karna aur Mail Applet se fresh profile banana.
// - Step 1: Corrupted .OST File Wipe & Clean Resync:
//   Command: `Win + R` -> type `%localappdata%\Microsoft\Outlook` -> Enter.
//   Kaam: Broken local cache delete karke Exchange/M365 server se fresh database download karwana.
//   Andar jaakar: Outlook process ko Task Manager me end karta hai -> `%localappdata%\Microsoft\Outlook` folder me user ki `.ost` file (e.g. `john@company.com.ost`) ko rename karke `.ost.old` karta hai (ya delete karta hai) -> Outlook open karta hai -> Server se clean fresh .OST file automatically rebuild ho jati hai.
// - Step 2: Clean Mail Profile Rebuild via Mail Applet:
//   Command: `Win + R` -> type `control mlcfg32.cpl` -> Enter.
//   Kaam: Corrupted profile registry keys wipe karke fresh profile create karna.
//   Andar jaakar: "Show Profiles..." button par CLICK -> "Add..." button par click karke naya profile configure karta hai -> "Always use this profile" me new profile set karke "Apply" -> "OK" karta hai (Outlook crash permanent resolved).


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
