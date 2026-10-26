// ========================================= Enterprise Networking & Infrastructure ======================================= //
// Target: Universal IT Support & Airport Systems Engineer (L1/L2 Technical Floor Blueprint)
// ================================================================================

// ========================================= Networking in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Enterprise floor (Corporate, Airport, Hotel, Hospital) par 80% user issues network connectivity, IP conflict, ya slow speed se jude hote hain.
// 2. IT Support engineer ka kaam switch configure karna nahi hota, balki Client PC se Switch Port/DHCP/DNS tak ka connection verify karna hota hai.
// 3. Format: Commands seedha '1 Line' me hain, aur core concepts (Subnetting, Ports, VLAN, T568B Cable) practical floor use ke sath hain.

// ================================================================================


// ========================================= 1. Core Network Diagnostic Commands ================================= //
// ================================================================================

// 1. ping -t <IP> -----> Kisi device ya server par continuous packet bhej kar check karna ki network stable hai ya beech-beech me drop ho raha hai.

// 2. tracert <domain/IP> -----> (Linux: traceroute) Packet destination tak kis-kis router (hop) se hokar ja raha hai aur kahan packet mara trace karne ke liye.

// 3. nslookup <domain> -----> DNS server sahi IP return kar raha hai ya nahi yeh lookup test karne ke liye.

// 4. nslookup <domain> 8.8.8.8 -----> Specific Google DNS se query karke check karna ki issue local DNS me hai ya global DNS me.

// 5. ipconfig /all -----> (Linux: ip a) Network card ka MAC address, IP address, Subnet Mask, Gateway aur DHCP server dekhne ke liye.

// 6. ipconfig /release -----> Router se mila hua purana IP address chhodne (drop karne) ke liye.

// 7. ipconfig /renew -----> DHCP server se naya fresh IP address lene ke liye (IP conflict aane par best command).

// 8. ipconfig /flushdns -----> Corrupt ya purane local DNS cache ko flush (clean) karne ke liye.

// 9. netstat -ano -----> (Linux: ss -tulnp) System par kaun se ports active hain aur kis process PID se jude hain dekhne ke liye.

// 10. netstat -ano | findstr :<Port> -----> Specific port (jaise 80, 443, 3389) open hai ya blocked dekhne ke liye.

// 11. arp -a -----> Local network me judey devices ke IP address se unke physical MAC address ki mapping table dekhne ke liye.


// ================================================================================


// ========================================= 2. TCP/IP Stack Repair, Routing & Wi-Fi Commands =================== //
// ================================================================================

// 12. pathping <domain/IP> -----> Ping aur Tracert combine karke 250 packets bhej kar hop-by-hop exact packet loss percentage calculate karne ke liye.

// 13. route print -----> System ka active IPv4 routing table, interface metrics aur default gateway route check karne ke liye.

// 14. netsh int ip reset -----> Corrupt TCP/IP protocol stack ko factory default settings par reset karne ke liye (Network down ka master repair).

// 15. netsh winsock reset -----> Winsock socket catalog ko reset karke browser me website na khulne ke socket issues theek karne ke liye.

// 16. netsh wlan show profiles -----> Laptop par pehle se judey sabhi Wi-Fi access points aur SSIDs ki list dekhne ke liye.

// 17. netsh wlan show profile name="Office_WiFi" key=clear -----> Saved Wi-Fi network ka security key password (Key Content) terminal par nikalne ke liye.

// 18. nbtstat -R -----> NetBIOS remote cache name table ko purge aur reload karne ke liye (Shared network drives naming issue).


// ================================================================================


// ========================================= 3. IP & Subnetting Basics (Floor Par Kitna Zaroori Hai) ================= //
// ================================================================================


// 1. Private IPv4 Ranges (Jo sirf internal office/kiosk me use hoti hain):
//    - Class A: 10.0.0.0 se 10.255.255.255 -----> Airport, Banks aur badi corporate MNCs me use hota hai.
//    - Class B: 172.16.0.0 se 172.31.255.255 -----> Medium enterprises aur universities me use hota hai.
//    - Class C: 192.168.0.0 se 192.168.255.255 -----> Small offices, hotels aur home routers me use hota hai.

// 2. Subnet Mask (/24) Kya Hai?
//    - Value: 255.255.255.0 (/24)
//    - Matlab: Is network me Total 256 IPs hain, jisme se '254 Usable IPs' (1 se 254) devices ko mil sakti hain.
//    - Formula: .0 Network ID hoti hai aur .255 Broadcast ID hoti hai (ye dono kisi device ko assign nahi hoti).

// 3. Default Gateway Kya Hai?
//    - Meaning: Gateway router ka internal IP address hota hai (e.g. 192.168.1.1 ya 10.0.0.1).
//    - Rule: Agar PC ka Gateway galat hai ya ping nahi ho raha, toh PC local network me chalega par INTERNET band ho jayega.

// 4. APIPA IP (169.254.x.x) — The Most Common Interview Question:
//    - Problem: Jab PC par '169.254.x.x' IP dikhe aur internet na chale.
//    - Root Cause: PC ne DHCP server se IP manga lekin DHCP server down tha ya LAN cable disconnected thi.
//    - Action: LAN cable check karo, switch port check karo, ya DHCP service verify karo.


// ================================================================================


// ========================================= 4. Static IP vs DHCP Reservation (Field Difference) ================= //
// ================================================================================

// 1. Static IP Assignment:
//    - Kaise hota hai: Engineer khud client machine ke [ncpa.cpl] me jakar manually IP, Subnet, Gateway type karta hai.
//    - Use: Standalone servers, industrial machines ya test rigs par.
//    - Kamzori: Agar network range badal jaye toh har machine par jakar hath se badalna padta hai.

// 2. DHCP Reservation (Enterprise Best Practice):
//    - Kaise hota hai: Device par setting 'Automatic (DHCP)' hi rehti hai, lekin Router/DHCP server par us device ka MAC address daal kar ek specific IP fix kar diya jata hai.
//    - Use: Network Printers, POS billing counters, Airport Check-in terminals, Biometric attendance devices.
//    - Fayda: Device ko hamesha same IP milta hai, aur agar DNS ya Gateway badalna ho toh 1 second me server se update ho jata hai!


// ================================================================================


// ========================================= 5. Standard Enterprise Ports & Protocols =========================== //
// Har Support Engineer Ko Zubani Yaad Hone Chahiye — Interview & Firewall Rules Ke Liye
// ================================================================================

// 1. Port 53   (UDP/TCP) -----> DNS (Domain Name System) — Domain name ko IP me convert karta hai (google.com -> 142.250.x.x).

// 2. Port 67/68 (UDP) -----> DHCP (Dynamic Host Configuration Protocol) — Client ko automatically IP address assign karta hai.

// 3. Port 80   (TCP) -----> HTTP — Unencrypted web traffic (insecure).

// 4. Port 443  (TCP) -----> HTTPS — Secure encrypted SSL/TLS web traffic (Banking, ERP, portals).

// 5. Port 22   (TCP) -----> SSH (Secure Shell) — Linux servers aur switches ka secure remote CLI access.

// 6. Port 3389 (TCP) -----> RDP (Remote Desktop Protocol) — Windows machines ka remote desktop access (mstsc).

// 7. Port 445  (TCP) -----> SMB (Server Message Block) — Windows shared folders aur network file sharing.

// 8. Port 123  (UDP) -----> NTP (Network Time Protocol) — System clock aur biometric devices ka server time sync.

// 9. Port 25/587 (TCP) -----> SMTP — Outlook aur mail servers par email send karne ke liye.


// ================================================================================


// ========================================= 6. VLANs, Switches & Physical Cabling ================================ //
// ================================================================================

// 1. VLAN (Virtual Local Area Network) Kya Hai?
//    - Concept: Ek hi physical switch ke andar virtual networks banana (e.g. Data VLAN 10 aur Voice VLAN 20).
//    - Support Use: Desk par rakha IP Phone 'Voice VLAN' me hota hai aur computer 'Data VLAN' me. Isse call traffic aur file download alag rehti hai aur voice clear aati hai.

// 2. Switch Link Lights Activity (Front Panel Telemetry):
//    - Solid Green Light -----> Cable theek hai, 1 Gbps (Gigabit) high-speed link establish hai.
//    - Blinking Green Light -----> Data packets actively transmit aur receive ho rahe hain (Normal activity).
//    - Amber / Orange Light -----> Link sirf 100 Mbps par connect hua hai (Cable crimping loose ya switch port negotiation fault).
//    - No Light (Dead) -----> Cable cut hai, switch port disable hai, ya PC ka NIC card band hai.

// 3. RJ45 Network Cable Color Coding (T568B Standard — Worldwide Industry Rule):
//    - Pin 1: Orange-White
//    - Pin 2: Orange
//    - Pin 3: Green-White
//    - Pin 4: Blue
//    - Pin 5: Blue-White
//    - Pin 6: Green
//    - Pin 7: Brown-White
//    - Pin 8: Brown
//    - Golden Formula Yaad Rakhne Ka: Orange aur Green pairs split hote hain, beech me Blue pair baithta hai!


// ================================================================================


// ========================================= 7. Practical Floor Troubleshooting Flow (Step-by-Step) ============= //
// Jab User Bole: "Mera Internet / Portal Nahi Chal Raha" — Real Support Escalation Flow
// ================================================================================

// Step 1 (Physical Check):
// Check karo laptop/desktop ke LAN port me green light blink kar rahi hai ya nahi. Agar Wi-Fi hai toh check karo sahi SSID connect hai.

// Step 2 (Loopback Self Test):
// Command: ping 127.0.0.1
// -> Agar reply aaya: Matlab PC ka apna internal TCP/IP network stack aur NIC driver bilkul theek hai.

// Step 3 (Gateway Reachability Test):
// Command: ping <Gateway_IP> (e.g. 192.168.1.1)
// -> Agar fail hua: Local switch, LAN cable ya Wi-Fi access point me issue hai.

// Step 4 (DNS Resolution Test):
// Command: ping 8.8.8.8  (Google Public IP)
// Command: ping google.com
// -> Agar 8.8.8.8 ping ho raha hai lekin google.com ping nahi ho raha: Matlab internet theek hai par DNS RESOLUTION FAIL ho gaya hai!
// -> Solution: ipconfig /flushdns chalao aur DNS server ko 8.8.8.8 ya company internal DNS par set karo.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
