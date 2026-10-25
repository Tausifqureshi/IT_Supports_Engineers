// ========================================= PowerShell Core Commands (Universal IT Support) ======================================= //
// Target: L1 to L2 Desktop Support & Systems Engineer (Corporate, Hotels, Hospitals, Logistics & Airport Operations)
// ================================================================================

// ========================================= PowerShell (CLI) Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex ---> PowerShell Kya Hai Aur Iska Use Kyun Hota Hai?
// 1. PowerShell Microsoft ka banaya hua modern object-oriented command-line shell aur automation platform hai jo .NET framework par chalta hai.
// 2. Normal CMD aur PowerShell me sabse bada farq yeh hai ki CMD plain text output deta hai jisme data filter karna bohot mushkil hota hai, jabki PowerShell rich structured ".NET Objects" return karta hai jisse filtering, sorting aur remote troubleshooting super-fast hoti hai.
// 3. IT Support floor par iska use: Jab GUI freeze ya unresponsive ho jaye, kiosk PC par display lock ho, ya bina user ki screen disturb kiye background me service restart karni ho, hung application force-kill karni ho, ya remote network ports diagnose karne hon.
// 4. L1/L2 IT Support engineer ke liye lambi scripting ya automation code seekhne ki zaroorat nahi hoti. Floor par daily 95% troubleshooting inhi basic commands se hoti hai!

// ========================================= Structure & Working Rules ======================================= //
// - SECTION 1: Top 5 Core Commands (Must Remember — Daily floor drivers).
// - SECTION 2: Extra Useful L2 Floor Commands (Deep telemetry, network stack & system forensics).
// - SECTION 3: Windows vs Linux Commands Comparison (Networking, Systems, File operations).
// - SECTION 4: Dono Me Technically Kya Farq Hai? (Golden interview & practical differences).
// ================================================================================


// ========================================= Section 1: Top 5 Core Must-Know Commands ======================================= //
// Pehle In 5 Commands Ko Pakka Yaad Karna Hai — Floor Par Daily CLI Troubleshooting Inhi Se Shuru Hoti Hai
// ================================================================================


// 1. Test-NetConnection (TNC) — Port & Network Connectivity Test
// --------------------------------------------------------------------------------
// [ CONCEPT: Port & Network Connectivity Test Kya Hai? ]
// Windows 10/11 me puraana Telnet client by default band hota hai. Isliye Test-NetConnection modern standard built-in tool hai jo verify karta hai ki destination server live hai ya nahi aur uska specific TCP PORT open hai ya firewall ne block kiya hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: 1-2 minute me check karna ki remote system reachable hai ya application port open hai.
// - Problem 1: User bol raha hai "Outlook connect nahi ho raha" ya "Internal ERP portal nahi khul raha"
//   Step 1: Keyboard par [Win + X] dabao -> Windows PowerShell (Admin) kholo.
//   Step 2: Server ka port check karne ke liye command run karo:
//           Test-NetConnection -ComputerName mail.company.com -Port 443
//   Step 3: Output inspect karo:
//           "TcpTestSucceeded : True"   -----> Port OPEN hai, connection OK hai (Issue user ki profile ya app me hai).
//           "TcpTestSucceeded : False"  -----> Port BLOCKED hai (Firewall issue ya server down hai).
// - Problem 2: Check karna ki network gateway ya remote IP ping respond kar raha hai ya nahi
//   Step 1: Test-NetConnection -ComputerName 192.168.1.1
//   Step 2: Check "PingSucceeded : True".
// - L1 Ki Limit: Agar "TcpTestSucceeded : False" aaye, toh L1 bas bolta hai "Port reachability fail ho gayi" aur ticket L2 ya Network team ko escalate kar deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Packet drop kis hop/router par ho raha hai aur local/network firewall rules diagnose karna.
// - Step 1: Deep Routing & Latency Telemetry (TraceRoute Mode)
//   Command: Test-NetConnection -ComputerName erp.company.com -Port 8080 -InformationLevel Detailed
//   (Ye exact route hops, local interface alias, round-trip latency aur DNS resolution verify karke batata hai packet kahan drop hua).
// - Step 2: Client-side Outbound Firewall Verify Karna
//   PowerShell command se check karna ki local Windows Defender Firewall ne port block to nahi kiya:
//   Get-NetFirewallRule | Where-Object { $_.DisplayName -like "*ERP*" -or $_.Direction -eq "Outbound" }
// - Step 3: Remote Server Listening Port Audit (Agar remote machine access ho)
//   Check karna ki application daemon actually us port par listen kar raha hai ya crash ho chuka hai:
//   netstat -ano | findstr :8080
// - Step 4: Network Security Group (NSG) / Corporate Firewall Escalation
//   Agar local machine theek hai, toh source IP, destination IP, target port aur TNC Detailed log ticket me attach karke Network team ko exact rule open karne ke liye provide karna.


// ================================================================================

// 2. Get-Service — Background Services Status Monitor
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Background Services Architecture ]
// Windows background services ka status (Running hai ya Stopped), display name, startup type aur dependencies monitor karne ka command.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: 5 second me service ka live status dekhna bina services.msc khole.
// - Problem 1: User bol raha hai print nahi nikal raha ya biometric scanner connect nahi ho raha
//   Step 1: PowerShell kholo aur check karo service chalu hai ya band:
//           Get-Service -Name Spooler
//   Step 2: Output me dekho:
//           Status 'Running' -----> Service theek hai.
//           Status 'Stopped' -----> Service crash ho chuki hai ya band hai.
// - Problem 2: Jab service ka exact technical name yaad na ho
//   Step 1: Wildcard search use karo:
//           Get-Service -Name *print*
//           Get-Service -DisplayName *bluetooth*
// - L1 Ki Limit: Service baar-baar crash ho rahi ho ya dependency missing ho toh L1 ticket L2 ko bhej deta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Crash karne wali stopped automatic services aur unki dependencies dhoondna.
// - Step 1: Filter All Stopped Services That Should Be Automatic
//   Command: Get-Service | Where-Object { $_.StartType -eq "Automatic" -and $_.Status -eq "Stopped" }
//   (Ye un sabhi critical services ko pakad leta hai jo chalni chahiye thi par crash ya boot fail ho chuki hain).
// - Step 2: Dependent Services Trace Karna
//   Command: (Get-Service -Name Spooler).DependentServices
//   (Check karna kaun si doosri services is par depend kar rahi hain jisse crash cascade trace ho sake).
// - Step 3: Required Services (Prerequisites) Check Karna
//   Command: (Get-Service -Name Spooler).ServicesDependedOn
//   (Agar underlying RPC service stopped ho toh Spooler kabhi start nahi hoga).
// - Step 4: Service Startup Type Change Karna via CLI
//   Command: Set-Service -Name Spooler -StartupType Automatic


// ================================================================================

// 3. Restart-Service — Background Service Bounce
// --------------------------------------------------------------------------------
// [ CONCEPT: Background Service Reset ]
// Atki hui background service ko safely stop karke dobara cleanly initialize karna bina GUI khole aur bina PC reboot kiye.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Normal print queue ya application glitch ko turant refresh karna.
// - Problem 1: Printer queue freeze hai ya print command hold ho gayi hai
//   Step 1: PowerShell khol kar single command chalao:
//           Restart-Service -Name Spooler
//   Step 2: Service stop hoke wapas start ho jayegi.
// - L1 Ki Limit: Agar service ke sath dependent services judi hon aur error de ("Service cannot be stopped because other services depend on it"), toh L1 ruk jata hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Forceful service bounce, buffer release aur remote execution.
// - Step 1: Force Restart with Dependent Services
//   Command: Restart-Service -Name Spooler -Force
//   (Dependent services ke sath bina error prompt ke forcefully stop aur restart karta hai).
// - Step 2: Granular Stop, Buffer Wait, and Start Loop
//   Command: Stop-Service -Name Spooler -Force; Start-Sleep -Seconds 3; Start-Service -Name Spooler
//   (Spooler memory buffer release hone ka 3 second wait karta hai taaki port lock na ho).
// - Step 3: Remote Machine Par Service Restart Karna via WinRM
//   Command: Invoke-Command -ComputerName "RECEPTION-PC01" -ScriptBlock { Restart-Service -Name Spooler -Force }
//   (User ki desk par jaye bina ya user ko disturb kiye bina remote counter PC ki service bounce karna).


// ================================================================================

// 4. Get-Process — Running Programs & Resource Telemetry
// --------------------------------------------------------------------------------
// [ CONCEPT: Process Telemetry & Resource Consumption ]
// Active applications, background worker processes, unka Process ID (PID), CPU usage aur WorkingSet (RAM) consumption monitor karna.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Check karna application background me chal rahi hai ya nahi.
// - Problem 1: User bol raha hai "Maine Excel par double click kiya par screen par nahi aaya"
//   Step 1: PowerShell me check karo:
//           Get-Process -Name EXCEL
//   Step 2: Agar process list me dikhai de raha hai matlab background me atka hua hai, user ko dobara open karne se pehle use close karna hoga.
// - L1 Ki Limit: PC slow hone par exact kaunsa background process 100% CPU ya RAM kha raha hai filter na kar pana.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Top resource hogs filter karna aur rogue background executables identify karna.
// - Step 1: Top 5 CPU Khane Wale Programs Filter Karna
//   Command: Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 -Property Id, ProcessName, CPU, WorkingSet64
// - Step 2: Top 5 Memory (RAM) Khane Wale Programs Filter Karna
//   Command: Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 -Property Id, ProcessName, @{Name="RAM (MB)"; Expression={[math]::round($_.WorkingSet64 / 1MB, 2)}}
// - Step 3: Suspicious Process Ka Exact File Path Trace Karna
//   Command: (Get-Process -Name svchost).Path
//   (Agar path C:\Windows\System32 ke bahar C:\Users\AppData\Roaming dikhe toh turant confirm ho jata hai ki ye malware/fake process hai).
// - Step 4: Process Start Time & Thread Count Telemetry
//   Command: Get-Process -Name chrome | Select-Object Id, StartTime, TotalProcessorTime, Threads


// ================================================================================

// 5. Stop-Process — Force Kill Unresponsive Applications
// --------------------------------------------------------------------------------
// [ CONCEPT: Kernel Process Termination ]
// Frozen, unresponsive ya hanging software ko OS kernel level par forcibly terminate karna.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Hanging software ki saari windows ko ek jhatke me close karna.
// - Problem 1: Chrome ya ERP software freeze ho gaya aur mouse cursor ghoom raha hai
//   Step 1: PowerShell me command chalao:
//           Stop-Process -Name chrome -Force
//   Step 2: Saare chrome processes kill ho jayenge aur RAM free ho jayegi.
// - L1 Ki Limit: Agar 10 windows khuli hon aur user bole "Sirf wo ek window band karo jo freeze hai, baaki 9 ka unsaved data band mat karna", toh L1 Name se kill karke saari windows band kar deta hai aur user naraz hota hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Exact Process ID (PID) par surgical strike karna taaki user ka baki data safe rahe.
// - Step 1: Hanging Window Ka Specific PID Identify Karna
//   Command: Get-Process -Name chrome | Select-Object Id, MainWindowTitle, WorkingSet64
//   (MainWindowTitle dekh kar pata chal jata hai kaun si tab/window freeze hai).
// - Step 2: Specific Process ID (PID) Se Single Process Kill Karna
//   Command: Stop-Process -Id 4512 -Force
//   (Sirf wahi specific hanging session band hota hai, baki open work bilkul safe rehta hai).
// - Step 3: Termination Confirmation (PassThru)
//   Command: Stop-Process -Name excel -Force -PassThru
//   (Console par live confirmation object return karta hai ki process successfully dead ho gaya).
// - Step 4: Remote Machine Par Freeze Process Kill Karna
//   Command: Invoke-Command -ComputerName "BILLING-PC02" -ScriptBlock { Stop-Process -Name posapp -Force }


// ================================================================================


// ========================================= Section 2: Extra Useful L2 Floor Commands ======================================= //
// Floor Par Deep Diagnostic, Network Stack Aur System Telemetry Ke Liye Ye Commands Use Hoti Hain
// ================================================================================


// 6. Test-Connection — Modern Ping & Latency Telemetry
// --------------------------------------------------------------------------------
// [ CONCEPT: ICMP Echo & Packet Telemetry ]
// Normal legacy CMD ping ka modern object-oriented replacement jo network latency, packet loss, aur buffer size diagnose karta hai.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Basic reachability check karna ki IP live hai ya packet drop ho raha hai.
// - Problem 1: User bol raha hai "Internet / Network disconnect ho raha hai"
//   Step 1: 4 packets ping bhej kar check karo:
//           Test-Connection -ComputerName 8.8.8.8 -Count 4
//   Step 2: Output me dekho:
//           Status 'Success' aur ResponseTime < 30ms -----> Connection healthy hai.
//           Request timed out -----> Local cable, Wi-Fi ya router me issue hai.
// - L1 Ki Limit: L1 sirf 4 packet bhej kar bolta hai "Ping aa raha hai", par beech-beech me packet drop ya high jitter nahi pakad pata.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Network jitter, micro packet drops aur MTU packet fragmentation diagnose karna.
// - Step 1: Continuous Ping Jitter & Response Time Telemetry
//   Command: Test-Connection -ComputerName 8.8.8.8 -Count 20 | Select-Object Address, ResponseTime, StatusCode
//   (Agar response time 20ms se achanak 400ms jump kare toh Wi-Fi interference ya switch port buffering pakdi jati hai).
// - Step 2: MTU Size & Packet Fragmentation Test (VPN & VoIP Drop Issue)
//   Command: Test-Connection -ComputerName 8.8.8.8 -BufferSize 1472 -DontFragment
//   (Agar packets drop ho rahe hain toh network MTU 1500 se kam (e.g. 1400) karni padti hai taaki VPN tunnel packet na tode).
// - Step 3: Remote Machine Se Server Ko Ping Karwana (Reverse Ping)
//   Command: Invoke-Command -ComputerName "BRANCH-PC01" -ScriptBlock { Test-Connection -ComputerName "DC-SERVER01" -Count 4 }


// ================================================================================

// 7. Get-NetIPAddress & Get-NetAdapter — Network Stack & Hardware Interface
// --------------------------------------------------------------------------------
// [ CONCEPT: TCP/IP Stack & Physical/Virtual Network Interfaces ]
// Windows network adapters (Ethernet, Wi-Fi, VPN) ki physical link state, link speed (100Mbps vs 1Gbps), MAC address, aur IP configuration monitor karna.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: IP address check karna aur disconnected adapter verify karna.
// - Problem 1: Machine ka current IP address dekhna
//   Step 1: PowerShell command run karo:
//           Get-NetIPAddress -AddressFamily IPv4
//   Step 2: IPAddress aur InterfaceAlias (Ethernet/Wi-Fi) note karo.
// - Problem 2: Network card enable hai ya disable
//   Step 1: Get-NetAdapter
//   Step 2: Status "Up" hai ya "Disabled" check karo.
// - L1 Ki Limit: 169.254.x.x (APIPA) aane par L1 bas PC restart karta hai, root cause nahi nikal pata.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Adapter speed negotiation, clean table formatting aur silent adapter bounce.
// - Step 1: Formatted IP, Subnet & Gateway Audit Table
//   Command: Get-NetIPAddress -AddressFamily IPv4 | Format-Table InterfaceAlias, IPAddress, PrefixLength -AutoSize
// - Step 2: Physical Link Speed & Duplex Check (Slow Network Issue)
//   Command: Get-NetAdapter | Select-Object Name, InterfaceDescription, Status, LinkSpeed, MacAddress
//   (Agar 1Gbps LAN port par LinkSpeed "100 Mbps" dikhaye, toh LAN cable ke crimping pin damage ya switch port negotiation fault pakda jata hai).
// - Step 3: Silent Network Adapter Restart (Bina Device Manager khole)
//   Command: Restart-NetAdapter -Name "Ethernet"
//   (NIC driver aur DHCP lease ko completely reload karta hai bina machine reboot kiye).


// ================================================================================

// 8. Clear-DnsClientCache & Resolve-DnsName — DNS Name Resolution Engine
// --------------------------------------------------------------------------------
// [ CONCEPT: DNS Cache & Active Directory Name Resolution ]
// Windows local DNS resolver cache ko flush karna aur modern object-based DNS lookup karna (legacy nslookup ka replacement).

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Corrupt DNS records flush karke fresh resolution trigger karna.
// - Problem 1: Server ka IP change ho gaya par PC purane IP par connect ho raha hai
//   Step 1: PowerShell me DNS flush karo:
//           Clear-DnsClientCache
//   Step 2: Browser refresh karke website open karo.
// - L1 Ki Limit: Clear karne ke baad bhi domain resolve na ho toh L1 aage diagnose nahi kar pata.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Specific DNS server query, DNS record types (A, CNAME, SRV) aur Active Directory locator audit.
// - Step 1: Specific Server Par Direct DNS Query Karna
//   Command: Resolve-DnsName -Name internal.portal.local -Server 192.168.1.10
//   (Local DNS server se verify karna ki record live hai ya nahi).
// - Step 2: Public DNS Se Cross-Verify Karna (Split-Brain DNS Issue)
//   Command: Resolve-DnsName -Name company.com -Server 8.8.8.8
//   (Pata chal jata hai ki issue ISP ke DNS me hai ya company ke local DNS me).
// - Step 3: Active Directory Domain Controller Locator SRV Record Audit
//   Command: Resolve-DnsName -Name _ldap._tcp.dc._msdcs.yourdomain.local -Type SRV
//   (User ka login slow ho ya "Trust relationship failed" aaye toh ye SRV record confirm karta hai ki DC reach ho raha hai ya nahi).


// ================================================================================

// 9. Get-HotFix & Windows Update Forensic — Patch Audit & Rollback
// --------------------------------------------------------------------------------
// [ CONCEPT: Windows Servicing Stack & Quality Update Telemetry ]
// Installed security updates, KB patches, installation dates aur system update health inspect karna.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Check karna ki machine me latest security updates lagi hain ya nahi.
// - Problem 1: Audit team ya manager puchhe "Is machine par latest patch laga hai?"
//   Step 1: PowerShell me command chalao:
//           Get-HotFix
//   Step 2: HotFixID (e.g., KB5034441) aur InstalledOn date note karo.
// - L1 Ki Limit: User bole "Kal raat Windows update hui aur aaj sound/printer/software band ho gaya", toh L1 ko samajh nahi aata kaun sa KB zimmedar hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Corrupt patch identify karna, pending reboot flag check karna aur buggy KB uninstall karna.
// - Step 1: Recent Updates Ko Date-Wise Sort Karna
//   Command: Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 5 HotFixID, Description, InstalledOn, InstalledBy
//   (Exact pata chal jata hai ki kal raat kaun sa KB patch install hua tha).
// - Step 2: Pending Reboot State Check Karna (Jab software install na ho)
//   Command: Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Component Based Servicing\" -Name "RebootPending" -ErrorAction SilentlyContinue
// - Step 3: Buggy Update Ko CLI Se Uninstall Karna (Silent Rollback)
//   Command: wusa.exe /uninstall /kb:5034441 /quiet /norestart
//   (User ki screen par bina GUI khole problematic update ko safely rollback karna).


// ================================================================================

// 10. Get-ComputerInfo & Get-CimInstance — Hardware & Asset Telemetry
// --------------------------------------------------------------------------------
// [ CONCEPT: WMI / CIM Hardware Inventory & BIOS Telemetry ]
// System hardware inventory, Motherboard model, BIOS version, Serial Number / Service Tag, aur exact RAM configuration pull karna.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: PC ka basic OS version aur device model dekhna.
// - Problem 1: User ke system ka configuration verify karna
//   Step 1: PowerShell me command run karo:
//           Get-ComputerInfo | Select-Object CsModel, WindowsProductName, WindowsVersion, TotalPhysicalMemory
//   Step 2: Output note karo.
// - L1 Ki Limit: Laptop ke peeche ka sticker mit gaya ho toh L1 Service Tag / Serial number nahi nikal pata.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Hardware warranty claim, BIOS upgrade check aur physical RAM slot audit.
// - Step 1: Machine Ka Serial Number / Dell Service Tag Nikalna (Warranty Claim)
//   Command: (Get-CimInstance -ClassName Win32_BIOS).SerialNumber
//   (Bina laptop ulte kiye 1 second me official Service Tag / Serial Number mil jata hai).
// - Step 2: Physical RAM Slots & Installed Modules Audit (RAM Upgrade)
//   Command: Get-CimInstance -ClassName Win32_PhysicalMemory | Format-Table Manufacturer, Capacity, Speed, DeviceLocator -AutoSize
//   (Bina cabinet khole pata chal jata hai kitne slot khali hain aur RAM kitne MHz ki lagi hai).
// - Step 3: Motherboard Make & Model Telemetry
//   Command: Get-CimInstance -ClassName Win32_BaseBoard | Select-Object Manufacturer, Product, SerialNumber
// - Step 4: System Boot Uptime Audit (User jhoot bole ki "Maine reboot kiya")
//   Command: (Get-CimInstance -ClassName Win32_OperatingSystem).LastBootUpTime
//   (Exact date aur minute pata chal jata hai ki machine kitne din se reboot nahi hui).


// ================================================================================

// 11. Restart-Computer & Invoke-Command — Force Reboot & Remote Management Engine
// --------------------------------------------------------------------------------
// [ CONCEPT: WinRM (Windows Remote Management) & Kernel Reboot Engine ]
// Unresponsive remote machines, kiosk displays, billing counter systems ko network ke zariye bina desk par jaye CLI se control aur safely reboot karna.

// * 1. L1 ENGINEER KA KAAM (Surface Level & Quick Fix):
// Target: Local machine ko CLI se cleanly reboot karna jab Start Menu freeze ho jaye.
// - Problem 1: Start Menu click karne par open nahi ho raha
//   Step 1: PowerShell khol kar command chalao:
//           Restart-Computer
//   Step 2: PC safe reboot sequence initiate karega.
// - L1 Ki Limit: Remote PC hang ho toh L1 ko chalkar user ki desk par jana padta hai ya physical power button dabana padta hai.

// * 2. L2 ENGINEER KA KAAM (Root Cause & Permanent Fix):
// Target: Remote hung systems par WinRM execution aur silent forced maintenance.
// - Step 1: Remote Kiosk / Production PC Ko Force Reboot Karna
//   Command: Restart-Computer -ComputerName "KIOSK-01" -Force
//   (Network ke zariye bina desk par jaye background me forceful reboot trigger karna).
// - Step 2: Remote Machine Par Multiple Commands Run Karna (Invoke-Command)
//   Command: Invoke-Command -ComputerName "COUNTER-PC05" -ScriptBlock { ipconfig /flushdns; Restart-Service -Name Spooler -Force }
//   (Ek single command se remote system ka DNS flush aur Spooler service bounce karna).
// - Step 3: WinRM Quick-Config Verify Karna (Agar remote connection mana kare)
//   Command: Test-WsMan "COUNTER-PC05"
//   (Verify karta hai ki remote machine par Windows Remote Management port 5985 open hai ya nahi).


// ================================================================================


// ========================================= Section 3: Windows vs Linux Commands Comparison (Complete Farq) ======================================= //
// ================================================================================

// --- 1. NETWORKING & CONNECTIVITY COMMANDS ---

// 1. IP Address Check          -----> Windows: ipconfig /all (ya Get-NetIPAddress)           | Linux: ip a

// 2. Default Route / Gateway   -----> Windows: route print (ya Get-NetRoute)                 | Linux: ip route

// 3. DNS Cache Clear           -----> Windows: ipconfig /flushdns (ya Clear-DnsClientCache)  | Linux: sudo resolvectl flush-caches

// 4. Route Path Trace          -----> Windows: tracert google.com                            | Linux: traceroute google.com

// 5. Open Listening Ports      -----> Windows: netstat -ano                                  | Linux: ss -tulnp

// 6. Specific Port Test        -----> Windows: Test-NetConnection -ComputerName <IP> -Port <P> | Linux: nc -zv <IP> <Port>

// 7. ARP Table (IP se MAC)     -----> Windows: arp -a                                        | Linux: ip neigh


// --- 2. SYSTEM, SERVICES & PROCESSES ---

// 8. Service Status Check      -----> Windows: Get-Service -Name <service> (ya sc query)     | Linux: systemctl status <service>

// 9. Service Restart           -----> Windows: Restart-Service -Name <service> -Force        | Linux: sudo systemctl restart <service>

// 10. Running Processes Dekhna -----> Windows: tasklist (ya Get-Process)                     | Linux: ps aux (ya top / htop)

// 11. Process Kill Karna       -----> Windows: taskkill /F /PID <PID> (ya Stop-Process)      | Linux: kill -9 <PID> (ya pkill -9)

// 12. Disk Space Check         -----> Windows: Get-PSDrive -PSProvider FileSystem            | Linux: df -h


// --- 3. BASIC FILE & TERMINAL OPERATIONS ---

// 13. Files / Folders List     -----> Windows: dir (ya Get-ChildItem)                        | Linux: ls -la

// 14. Terminal Screen Clear    -----> Windows: cls (ya Clear-Host)                           | Linux: clear

// 15. System Reboot / Restart  -----> Windows: Restart-Computer -Force                       | Linux: sudo reboot


// ================================================================================


// ========================================= Section 4: Dono Me Technically Kya Farq Hai? ======================================= //
// ================================================================================

// 1. Output Format   -----> PowerShell '.NET Objects' return karta hai (properties filter karna super asaan hai). Linux plain text string stream deta hai (jisme grep, awk, sed lagana padta hai).

// 2. Admin Rights    -----> Windows me terminal ko 'Run as Administrator' kholna padta hai. Linux me kisi bhi command ke aage 'sudo' lagate hain.

// 3. Case Sensitive  -----> Windows PowerShell case-insensitive hai (Get-Service aur get-service me koi farq nahi). Linux strictly case-sensitive hai.

// 4. Path Format     -----> Windows file system me backslash (\) use karta hai (C:\Windows\System32). Linux forward slash (/) use karta hai (/var/log).

// 5. Cross-Platform  -----> Pehle PowerShell sirf Windows par chalta tha (v5.1). Ab open-source PowerShell Core (pwsh v7+) Windows, Linux aur macOS teeno par chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
