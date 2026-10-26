// ========================================= L2 Network Wireshark Analysis, PowerShell & NOC Monitoring ======================================= //
// Target: Module 5 (Section G) — Universal IT Support & L2 Systems Engineer Blueprint (Enterprise Standard)
// ================================================================================

// ========================================= L2 Packet Analysis & NOC Monitoring Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Jab L1 level ki normal troubleshooting (ping, service restart) se issue pakad me na aaye, tab L2 engineer packet level par wire ke andar ghus kar Wireshark se deep packets inspect karta hai, PowerShell se forensic scripts chalata hai, aur PRTG/Zabbix NOC dashboard se live fleet health monitor karta hai.
// 2. Format: Niche Wireshark packet capture filters, L2 PowerShell commands (Get-ADUser, Get-WinEvent), aur PRTG/Zabbix NOC sensors practical steps me diye gaye hain.

// ================================================================================


// ========================================= 1. Wireshark Packet Analysis Workflows ============================== //
// Tool: Wireshark Network Protocol Analyzer
// ================================================================================

// [ CONCEPT: Packet Capture & Filter Syntax ]
// Capture Filter = Wire par packet record karne se pehle lagta hai.
// Display Filter = Recorded hazaaron packets me se kaam ka packet samne lane ke liye lagta hai.

// * Core Display Filters (Daily L2 Diagnostics):

// 1. DHCP DORA Process Tracing:
//    - Display Filter: `bootp` (ya `dhcp`)
//    - Real Floor Issue: PC ko 169.254.x.x IP mil raha hai. Wireshark chalao aur dekho:
//      - DHCP Discover -----> PC ne broadcast kiya "Koi DHCP server hai kya?"
//      - DHCP Offer -----> Agar Offer nahi aa raha: Matlab DHCP server down hai ya switch port par DHCP Snooping ne block kiya hai.
//      - DHCP Request -----> Client ne IP accept karne ke liye maanga.
//      - DHCP ACK -----> Server ne confirmation diya (IP assigned!).

// 2. DNS Query & Resolution Failures:
//    - Display Filter: `dns`
//    - Diagnostic: Check karo response me "Standard query response" me `No such name (NXDOMAIN)` toh nahi aa raha (Galat domain name ya missing DNS record).

// 3. Ping & ICMP Packet Loss Analysis:
//    - Display Filter: `icmp`
//    - Type 8 = Echo Request (Ping bheja) | Type 0 = Echo Reply (Ping ka jawab aaya).
//    - Agar Request ja raha hai par Reply nahi aa raha: Destination host ka Windows Defender Firewall ICMP drop kar raha hai!

// 4. TCP Handshake & Retransmission (Slow Network / Dropping VPN):
//    - Display Filter: `tcp.analysis.retransmission`
//    - Role: Cable me noise, damaged switch port ya network buffering ki wajah se kitne duplicate packets re-send karne pad rahe hain dikhata hai.

// 5. Specific Host / Port Filter:
//    - `ip.addr == 192.168.1.100 && tcp.port == 443`


// ================================================================================


// ========================================= 2. L2 Forensic PowerShell Commands ================================== //
// ================================================================================

// [ CONCEPT: Active Directory & Event Log Telemetry via CLI ]

// 1. Get-ADUser — Active Directory Account Forensics:
//    - Command: `Get-ADUser -Identity "john" -Properties * | Select-Object Name, Enabled, LockedOut, PasswordLastSet, AccountExpirationDate`
// -----> User ka exact account status, last password change date aur locked-out state 1 second me dekhne ke liye.
//    - Command: `Search-ADAccount -LockedOut | Select-Object Name, SamAccountName`
// -----> Poore domain me jitne bhi users is waqt locked-out hain unki list filter karne ke liye.
//    - Command: `Unlock-ADAccount -Identity "john"`
// -----> Locked-out user ko CLI se turant unlock karne ke liye.

// 2. Get-WinEvent / Get-EventLog — System & Security Log Auditing:
//    - Command: `Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 10`
// -----> Machine par aakhri 10 Failed Logon attempts (Event ID 4625) filter karne ke liye.
//    - Command: `Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 5`
// -----> System log ke aakhri 5 Critical Errors filter karne ke liye (Level 2 = Error).

// 3. Get-Service — L2 Health Audit:
//    - Command: `Get-Service | Where-Object { $_.StartType -eq "Automatic" -and $_.Status -eq "Stopped" }`
// -----> Sabhi crash hui automatic services ko 1 click me pakadne ke liye.


// ================================================================================


// ========================================= 3. NOC Infrastructure Monitoring (PRTG & Zabbix) ===================== //
// ================================================================================

// 1. NOC (Network Operations Center) Operations:
//    - Role: 24/7 video wall monitoring jisme network switches, firewalls, core servers aur WAN links ki live telemetry track hoti hai.

// 2. PRTG Network Monitor Core Sensors:
//    - Ping Sensor (ICMP) -----> Uptime check. Agar 3 consecutive pings drop ho jayein -> State: DOWN (Red).
//    - SNMP Traffic Sensor -----> Switch port bandwidth utilization (Inbound/Outbound traffic Mbps me).
//    - WMI Free Disk Space -----> Server C: drive par jab free space < 10% reh jaye -> Warning Alert (Yellow).
//    - SSL Certificate Sensor -----> Company portal ke SSL certificate expiry se 30 din pehle automatic alert generate karna.

// 3. Zabbix Enterprise Monitoring:
//    - Zabbix Agent (Port 10050) -----> Linux aur Windows servers par lightweight agent install hota hai jo CPU load, active sessions aur service health server ko bhejta hai.
//    - Trigger Actions -----> Threshold breach hone par automatic email, Slack notification ya ServiceNow Incident ticket auto-create karna.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
