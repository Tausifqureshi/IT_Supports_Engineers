// ========================================= Windows Server 2022 Core Infrastructure Roles ======================================= //
// Target: Module 5 (Section C) — Universal IT Support & L2 Systems Engineer Blueprint (Enterprise Standard)
// ================================================================================

// ========================================= Windows Server 2022 Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Windows Server 2022 enterprise networks ka brain hota hai jo domain environment me centralized identity (AD DS), IP addressing (DHCP), name resolution (DNS) aur secure file storage provide karta hai.
// 2. L2 engineer ko in roles ki basic installation, scope creation aur disaster recovery backup ka practical gyaan hona zaroori hai.
// 3. Format: Niche AD DS forest setup, DHCP scope & reservations, DNS forwarders aur File Server backup step-by-step diye gaye hain.

// ================================================================================


// ========================================= 1. Active Directory Domain Services (AD DS) Role ==================== //
// ================================================================================

// 1. Role Installation & Domain Controller Promotion:
//    - Step 1: Server Manager kholo -> "Add Roles and Features" par click karo.
//    - Step 2: Role selection me "Active Directory Domain Services" ko tick karo -> Next -> Install.
//    - Step 3: Installation ke baad top par yellow flag par click karo -> "Promote this server to a domain controller".
//    - Step 4: "Add a new forest" chuno -> Root domain name set karo (e.g. `company.local` ya `dxb.airport.internal`).
//    - Step 5: DSRM (Directory Services Restore Mode) password set karo -> Next -> Reboot.
//    - Verification: Reboot ke baad server par Active Directory Users & Computers (`dsa.msc`) aur Group Policy Management (`gpmc.msc`) available ho jayenge!


// ================================================================================


// ========================================= 2. DHCP Server Role & Scope Configuration =========================== //
// Console Shortcut: Win + R -> dhcpmgmt.msc
// ================================================================================

// 1. New DHCP Scope Banana:
//    - Step 1: dhcpmgmt.msc kholo -> Server name expand karo -> IPv4 par Right-Click -> "New Scope".
//    - Step 2: Scope Name: "Office_LAN_Scope" ya "Counter_Terminals".
//    - Step 3: IP Address Range: Start IP `192.168.1.50` to End IP `192.168.1.250`. Subnet Mask: `255.255.255.0` (/24).
//    - Step 4: Add Exclusions: `192.168.1.50` se `192.168.1.70` (Printers aur Network Switches ke liye reserve rakhna).
//    - Step 5: Lease Duration:
//      - Corporate LAN: 8 Days (Devices permanent hote hain).
//      - Airport / Hotel Guest Wi-Fi: 2 Hours (IP jaldi free honi chahiye taaki exhaustion na ho).
//    - Step 6: Configure DHCP Options:
//      - Option 003 (Router / Default Gateway): `192.168.1.1`
//      - Option 006 (DNS Servers): `192.168.1.10` (Domain Controller ka IP)
//      - Option 015 (Domain Name): `company.local`
//    - Step 7: "Activate Scope" par click karo.

// 2. DHCP Reservation Setup (Static IP Alternative):
//    - Scope -> Reservations par Right-Click -> "New Reservation".
//    - IP Address daalo + Device ka exact physical MAC Address daalo (e.g. `00-15-5D-01-A2-34`).
//    - Device jab bhi network me aayega, usko hamesha wahi IP address milega!


// ================================================================================


// ========================================= 3. DNS Server Role (Name Resolution & Forwarders) ================== //
// Console Shortcut: Win + R -> dnsmgmt.msc
// ================================================================================

// 1. Forward Lookup Zones:
//    - Hostname ko IP me convert karta hai.
//    - A Record (Host): `desktop-01.company.local` -> `192.168.1.105`
//    - CNAME Record (Alias): `portal.company.local` -> `webserver01.company.local`

// 2. Reverse Lookup Zones (PTR Record):
//    - IP address ko Hostname me convert karta hai (Security audit aur mail server reputation ke liye zaroori).

// 3. DNS Forwarders (External Internet Resolution):
//    - Jab internal user `google.com` mangta hai, local DNS server ko nahi pata hota.
//    - dnsmgmt.msc me Server par Right-Click -> Properties -> "Forwarders" tab.
//    - Public DNS add karo: `8.8.8.8` (Google) ya `1.1.1.1` (Cloudflare).


// ================================================================================


// ========================================= 4. File Server & Windows Server Backup ============================== //
// ================================================================================

// 1. Enterprise File Server Setup (NTFS vs Share):
//    - Step 1: D:\ drive me folder banao (e.g. `D:\Corporate_Shares\Finance`).
//    - Step 2: Share Permissions: "Authenticated Users" = Full Control.
//    - Step 3: NTFS (Security Tab) Permissions:
//      - "Finance_Users_Group" = Modify / Read & Execute.
//      - "Finance_Managers_Group" = Full Control.
//      - "Inheritance" disable karke unnecessary users (Everyone) ko remove karo.

// 2. Windows Server Backup (Bare-Metal & System State):
//    - Installation: Server Manager -> Add Features -> "Windows Server Backup".
//    - Backup Schedule:
//      Step 1: wbadmin.msc kholo -> "Backup Schedule" wizard.
//      Step 2: Backup Configuration: "Custom" -> Select "System State" (Active Directory database `ntds.dit`, registry aur SYSVOL policies ka backup).
//      Step 3: Target: Dedicated external storage drive ya network share. Daily 11:00 PM auto-backup schedule set karo.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
