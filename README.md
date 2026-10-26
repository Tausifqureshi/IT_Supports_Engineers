# 🛠️ Universal IT Support & Systems Engineer Blueprint (L1 to L2)

Welcome to the **Universal IT Support & Systems Engineer** technical repository. This repository serves as a production-grade knowledge base, operations cheatsheet, and practical troubleshooting blueprint designed for Desktop Support, Service Desk Analysts, NOC Technicians, and L2 Systems Engineers across enterprise environments (Corporate MSPs, Aviation/Airports, Hotels, Healthcare, Logistics & Retail).

---

## 📂 Master Repository Architecture

The repository is organized into **5 Master Modules** matching enterprise IT infrastructure and international support roadmaps:

```text
IT_Supports_Engineers/
│
├── 📁 01_Linux_Administration/
│   └── 📄 Linux0Commd.js                       # 49 Core Linux Commands (Direct 1-line floor cheatsheet)
│
├── 📁 02_Enterprise_Networking/
│   └── 📄 Networking0Commd.js                  # TCP/IP, Subnetting /24, Ports, DHCP Reservation, VLAN, T568B
│
├── 📁 03_Windows_And_Active_Directory/
│   ├── 📄 Window_Run_Commands.js               # 28 Run Commands (Top 11 Core Consoles + 17 Specialized Tools: L1 vs L2)
│   ├── 📄 PowerShell_Commands.js               # CLI Diagnostics, .NET Objects, WinRM & Linux Comparisons
│   ├── 📄 Active_Directory_GPO.js              # ADUC, User Unlock, Password Reset, NTFS vs Share, GPO Deployment
│   ├── 📄 M365_Outlook_Support.js              # Safe Mode, OST Rebuild, Shared Mailbox, Exchange Message Trace
│   └── 📄 Ticketing_Remote_Tools.js            # RDP 3389, P1-P4 SLA Priority Matrix, ITIL Processes, Resolution Notes
│
├── 📁 04_Domain_Specific_Systems/
│   └── 📄 Domain_Specific_Systems.js           # Airport CUPPS/CUTE/DCS/FIDS, Hotels Opera PMS, Logistics Zebra
│
├── 📁 05_L2_Advanced_Systems_And_Security/
│   ├── 📄 Hardware_OS_Lab.js                   # RAM/SSD/PSU diagnostics, BIOS/UEFI, Dual-Boot, VirtualBox Lab
│   ├── 📄 ITIL_Service_Desk.js                 # ITIL 4 Foundation, Escalation Matrix L1-L3, 5-Whys RCA, KB Lifecycle
│   ├── 📄 Windows_Server_2022.js               # AD DS Forest, DHCP Scopes, DNS Forwarders, File Server, Backup
│   ├── 📄 Cloud_Identity_Entra_Intune.js       # Microsoft Entra ID (Azure AD), Intune MDM, Teams & SharePoint
│   ├── 📄 Security_VPN_Patching.js             # BitLocker Recovery Loop Fix, WSUS, Antivirus, VPN SSL/IPsec, Phishing
│   ├── 📄 Virtualization_ESXi_HyperV.js        # VMware ESXi, Hyper-V Manager, Thin/Thick Disks, vSwitch, Snapshots, HA
│   └── 📄 Wireshark_NOC_Monitoring.js          # Wireshark DORA/DNS/TCP analysis, L2 PowerShell, PRTG/Zabbix NOC
│
└── 📁 06_Interviewer_Floor_Concepts/
    └── 📄 Interviewer_Floor_Concepts.js        # Real Floor Secrets: PXE Boot, Profile Migration, VoIP PoE, Ransomware, Top 5 Q&A
```

---

## 🚀 Module Overview & Core Skills

### 🐧 Module 01: Linux Administration & Backend Systems (`01_Linux_Administration/`)
* **Core Philosophy**: Clean, high-speed 1-line command references (`----->`) optimized for fast floor recall with 20 comprehensive categories.
* **181 Commands Covered Across 20 Categories**:
  * **System Update & Deep Junk Clean**: `apt update/upgrade`, `autoremove`, `autoclean`, `journalctl --vacuum-time=3d`, Master Clean One-Liner.
  * **Shortcuts & Navigation**: `pwd`, `ls -la`, `cd ..`, `cd ~`, `history | grep`, `[Tab]`, `[Ctrl+C]`, `[Ctrl+L]`.
  * **File Ops & Streams**: `mkdir -p`, `touch`, `cp -r`, `mv`, `rm -rf`, `tail -f`, `grep -i`, `awk`, `sed`, `nano`, `wc -l`.
  * **Services & Processes**: `systemctl` (status, restart, enable, --failed), `ps aux`, `top`, `htop`, `kill -9`, `pkill -9`.
  * **Disks & Storage**: `df -h`, `du -sh *`, `fdisk -l`, `lsblk -f`, `mount`, `umount`, `fsck -y`, `smartctl -H/-a`.
  * **IP & Network Routing**: `ip a`, `ip link`, `ip route`, `ip neigh`, `ss -tulnp`, `resolvectl flush-caches`, `traceroute`, `nc -zv`.
  * **Hardware Telemetry**: `lscpu`, `lshw -short`, `lspci`, `lsusb`, `dmidecode -t bios/system`, `sensors`.
  * **Permissions & Users**: `chmod 755/644`, `chown -R`, `useradd -m`, `userdel -r`, `passwd -l/-u`, `usermod -aG sudo`, `visudo`.
  * **SSH & Remote Sync**: `ssh-keygen`, `ssh-copy-id`, `scp -r`, `rsync -avzP`, `curl -I/-O`, `wget -c`.
  * **Firewall & Security**: `ufw status/enable/disable`, `ufw allow 22/80/443/3389`, `ufw deny from IP`, `iptables -L -n -v`, `fail2ban-client`.
  * **Package Troubleshooting & Distros**: `dpkg -i`, `dpkg -l`, `apt --fix-broken install`, `dpkg --configure -a`, `dnf/yum install/update`, `rpm -qa/-ivh`.
  * **System Health, Audit & Shutdown**: `dmesg -T`, `uptime -p`, `who`, `w`, `last -n 10`, `last reboot`, `shutdown -r +15`.
  * **Windows vs Linux Comparison**: 20 side-by-side floor comparisons and deep technical architectural differences.

---

### 🌐 Module 02: Enterprise Networking & Infrastructure (`02_Enterprise_Networking/`)
* **Network Diagnostics**: `ping -t`, `tracert`, `nslookup`, `ipconfig /all /release /renew /flushdns`, `netstat -ano`, `arp -a`.
* **TCP/IP Stack Repair & Wi-Fi Tools**: `pathping` (hop-by-hop packet loss), `route print`, `netsh int ip reset`, `netsh winsock reset`, `netsh wlan show profiles`, `netsh wlan show profile key=clear` (password extract), `nbtstat -R`.
* **IP & Subnetting**: Class A/B/C private ranges, `/24 Subnetting` (254 usable IPs), Default Gateway, APIPA `169.254.x.x` root cause & fix.
* **Static IP vs DHCP Reservation**: Why DHCP MAC reservations are standard for printers, POS counters, and kiosks.
* **Standard Enterprise Ports**: DNS (53), DHCP (67/68), HTTP/S (80/443), SSH (22), RDP (3389), SMB (445), NTP (123).
* **VLANs & Cabling**: Voice vs Data VLAN, Switch link lights (Solid Green 1Gbps vs Amber 100Mbps), RJ45 T568B color coding standard.
* **Floor Troubleshooting Flow**: Step-by-step physical link -> loopback `127.0.0.1` -> gateway -> DNS resolution testing.

---

### 🪟 Module 03: Windows, Active Directory & IT Operations (`03_Windows_And_Active_Directory/`)
* **Windows Run Shortcuts (`Window_Run_Commands.js`)**: 28 enterprise run commands (Top 11 core consoles + 17 specialized situational tools) structured into L1 Surface vs L2 Root Cause fixes and Interview Scenarios.
* **PowerShell Diagnostics (`PowerShell_Commands.js`)**: 123 commands across 18 enterprise categories:
  * Package Management (`winget`), Deep Clean (`Clear-RecycleBin`), Directory Navigation & Shortcuts.
  * Live Log Following (`Get-Content -Wait`), Pattern Searching (`Select-String`), Network Testing (`Test-NetConnection`).
  * IP/DNS/DHCP Management (`Get/Set-NetIPAddress`, `Get-NetTCPConnection`, `Clear-DnsClientCache`).
  * Background Services (`Get/Restart-Service`), Force Process Killing (`Stop-Process -Id`).
  * Hardware Forensics (Dell Service Tag / Serial via WMI `Win32_BIOS`, RAM MHz, LastBootUpTime).
  * Remote WinRM (`Invoke-Command`, `Test-WsMan`), Active Directory CLI (`Get-ADUser`, `Unlock-ADAccount`, `Search-ADAccount -LockedOut`), Event Viewer Forensic (`Get-WinEvent` 4625 failed logins).
  * Windows Defender Firewall (`Get/New/Set-NetFirewallRule`, `Enable-NetFirewallRule`).
  * BitLocker Security (`Get-BitLockerVolume`, 48-digit Recovery Key extraction, Suspend/Resume BitLocker for BIOS updates).
  * Printers & Print Spooler (`Get/Remove-PrintJob`, `Restart-Service Spooler`, `Add-Printer`).
  * Local Accounts & Auditing (`Get/New/Disable-LocalUser`, `Add-LocalGroupMember` Administrators check).
  * Modern Disks & Volumes (`Get-Disk`, `Initialize-Disk GPT`, `Format-Volume NTFS`, `Repair-Volume -Scan/-SpotFix`).
* **Active Directory & GPO (`Active_Directory_GPO.js`)**:
  * ADUC (`dsa.msc`): User unlocks, temporary password resets, Security Groups vs Distribution Lists, domain secure channel trust repair (`Reset-ComputerSecureChannel`).
  * Shared Folders: Share Permissions (Outer Gate) vs NTFS Permissions (Inner Gate) — *Most Restrictive Wins*.
  * Group Policy (`gpmc.msc`): LSDOU inheritance, `gpupdate /force`, `gpresult /r`, USB block policy, and network drive mapping.
* **Microsoft 365 & Outlook Support (`M365_Outlook_Support.js`)**:
  * Architecture: `.OST` (safe cache rebuild) vs `.PST` (permanent local archive).
  * L1 Fixes: `outlook.exe /safe`, COM add-in disabling, `.ost` file regeneration, clean mail profile recreation.
  * L2 Fixes: Shared Mailbox permissions (Full Access vs Send As vs Send on Behalf), automapping registry fixes, Exchange Message Trace.
* **Ticketing Systems & Remote Tools (`Ticketing_Remote_Tools.js`)**:
  * Remote Tools: `mstsc` (RDP 3389, NLA fix), AnyDesk / TeamViewer floor security.
  * Priority Matrix: P1 Critical (15 min SLA) down to P4 Low Request (48 hr SLA).
  * ITIL 4 Processes: Incident vs Service Request vs Problem vs Change Management.
  * Professional 4-step resolution note writing standard.

---

### ✈️ Module 04: Domain Knowledge: Field-Wise Systems (`04_Domain_Specific_Systems/`)
* **Aviation & Airports (DXB / DWC Standard)**:
  * **CUPPS & CUTE**: Common Use shared check-in counter architecture and client agent bounces.
  * **DCS**: Departure Control Systems (check-in, seat allocation, bag-tag generation).
  * **FIDS**: Flight Information Display System broadcasting and signage media players.
  * **Peripherals**: ATB boarding pass thermal printers, BTP bag tag printers, BGR barcode/gate readers, MRZ passport readers.
* **Hotels & Hospitality**: Opera PMS connectivity, RFID Keycard Encoders (VingCard/Assa Abloy), Guest Wi-Fi captive portals.
* **Hospitals & Healthcare**: HIS (Hospital Information System) client setup, Doctor desk printers, Token display queues.
* **Logistics & Warehouses (JAFZA/Ports)**: Rugged Handheld PDA / RF scanners (Zebra TC52), Zebra industrial thermal shipping printers (ZT410 sensor calibration).
* **Retail & Malls**: Touchscreen POS billing terminals, ESC/POS thermal receipt printers, Cash drawer RJ11 pop-open trigger.

---

### 🛡️ Module 05: L2 Advanced Systems, Security & Monitoring (`05_L2_Advanced_Systems_And_Security/`)
* **Hardware & Virtual Lab (`Hardware_OS_Lab.js`)**:
  * RAM Beep codes, eraser cleaning, Dual-Channel rules (Slots 2 & 4), `mdsched.exe`.
  * SSD/HDD S.M.A.R.T attributes, BSOD `0x0000007B`, CrystalDiskInfo.
  * SMPS Power Supply paperclip jumpstart test & multimeter check.
  * BIOS/UEFI: MBR vs GPT, Secure Boot, TPM 2.0 (`tpm.msc`), CMOS battery reset.
  * Dual-Boot Architecture: Windows Boot Manager vs GRUB, EFI partition, BitLocker impact.
  * VirtualBox Lab: Windows 10/11 & Ubuntu VM setup, NAT vs Bridged networking, Snapshots.
* **ITIL & RCA Process (`ITIL_Service_Desk.js`)**:
  * Incident vs Problem vs Change vs Service Request, Escalation Matrix (L1 -> L2 -> L3).
  * Root Cause Analysis: The **5-Whys Technique** with real enterprise print spooler RCA example.
  * Knowledge Base (KB) article creation & lifecycle.
* **Windows Server 2022 Roles (`Windows_Server_2022.js`)**:
  * AD DS Domain Controller forest setup (`company.local`), DSRM password.
  * DHCP Server Role: Scope creation, exclusions, lease times, DHCP reservations.
  * DNS Role: Forward/Reverse lookup (PTR), Public DNS Forwarders (`8.8.8.8`).
  * File Server NTFS security permissions & Windows Server Backup (`System State` / `ntds.dit`).
* **Cloud Identity & Intune (`Cloud_Identity_Entra_Intune.js`)**:
  * M365 Admin Center: User lifecycle, licensing tiers (Business Standard vs Premium vs E3/E5), Employee Offboarding checklist.
  * Microsoft Entra ID: SSPR, MFA reset, Azure AD Registered vs Joined vs Hybrid Joined.
  * Microsoft Intune MDM: Autopilot enrollment, Compliance policies, Remote Wipe vs Retire.
  * Teams cache clean script & OneDrive sync reset (`onedrive.exe /reset`).
* **Endpoint Security & VPN (`Security_VPN_Patching.js`)**:
  * BitLocker: 48-Digit recovery key retrieval (ADUC, Entra ID), **BitLocker Recovery Loop Fix** (`manage-bde -protectors -disable C:`).
  * Windows Update & WSUS: Registry keys (`WUServer`), universal `SoftwareDistribution` cache purge.
  * Enterprise Antivirus: Definition updates, scan triggers, quarantine triage.
  * Enterprise VPN: SSL VPN (Port 443) vs IPsec (Port 500/4500), Split vs Full Tunneling, Virtual TAP adapter fix.
  * Phishing Forensics: Display name spoofing, email header analysis, SPF/DKIM/DMARC validation.
* **Virtualization ESXi & Hyper-V (`Virtualization_ESXi_HyperV.js`)**:
  * Type 1 Bare-Metal Hypervisors: VMware ESXi (vSphere / vCenter) vs Hyper-V Manager.
  * Resource Allocation: vCPU overcommit, Dynamic Memory / Ballooning.
  * Virtual Disks: **Thin Provisioning** (Storage efficiency) vs **Thick Provisioning** (Eager zeroed).
  * Virtual Networking: vSwitch, Port Groups, VLAN Tagging (VLAN 10 Prod, VLAN 20 DMZ).
  * Disaster Recovery: Snapshot consolidation rules (Delta `.vmdk` leak prevention), VMware HA & vMotion.
* **L2 Wireshark & NOC Monitoring (`Wireshark_NOC_Monitoring.js`)**:
  * Wireshark Filters: `bootp` (DHCP DORA), `dns`, `icmp`, `tcp.analysis.retransmission`.
  * L2 PowerShell Forensics: `Get-ADUser`, `Search-ADAccount -LockedOut`, `Get-WinEvent` (Event ID 4625), `Get-Service`.
  * NOC Infrastructure Monitoring: PRTG & Zabbix core sensors (Ping, SNMP bandwidth, WMI disk space, SSL expiry), alert thresholds.

---

### 🎯 Module 06: Senior Desk & Interviewer Secrets (`06_Interviewer_Floor_Concepts/`)
* **Concept A (OS Imaging & PXE Boot)**: F12 Network Boot, DHCP Option 66/67, WDS/MDT mass deployment.
* **Concept B (Profile Migration)**: Transwiz, OneDrive Known Folder Move (KFM), Outlook PST transfer.
* **Concept C (VoIP & PoE)**: Power over Ethernet (802.3af/at), Dual-Port daisy chaining, Voice vs Data VLAN.
* **Concept D (Ransomware First Response)**: Immediate physical network isolation (LAN pull & Wi-Fi disable).
* **Top 5 Tricky Q&A**: Internet down bottom-up triage, APIPA 169.254 fix, Outlook credential loop, AD repeat lockouts, BSOD dump analysis.

---

## 🎯 Target Environments
* **Aviation & Airports**: Dubai International Airport (DXB), Al Maktoum (DWC), dnata, Emirates Group, SITA, Transguard.
* **Corporate MSPs & Enterprise**: Multi-tenant Active Directory, Microsoft 365, ServiceNow, Remote fleet management.
* **Hotels & Hospitality**: Jumeirah Group, Marriott, Hilton, Accor, Atlantis, Rotana (Opera PMS & Keycards).
* **Healthcare & Hospitals**: Aster DM, Mediclinic, NMC, Burjeel, Cleveland Clinic (HIS & Token systems).
* **Logistics & Warehouses**: DP World, DHL, Aramex, Emirates SkyCargo, JAFZA Ports (RF Scanners & Zebra printers).

---

## 👨‍💻 Author
Curated & maintained by **Tausif Qureshi**  
*Universal IT & Systems Support Blueprint*
