# 🛠️ Universal IT Support & Systems Engineer Blueprint (L1 to L2)

Welcome to the **IT Support Engineer** repository. This repository serves as a comprehensive, production-grade technical knowledge base and operational cheatsheet designed for Desktop Support, Service Desk Analysts, NOC Technicians, and Systems Engineers across enterprise environments (Corporate, Aviation/Airports, Hotels, Healthcare, Logistics & MSPs).

---

## 📂 Repository Structure

Each module is organized into its own dedicated directory with structured, practical notes adhering to real-world corporate hierarchy:

```text
IT_Supports_Engineers/
├── 📁 Windows_Run_Commands/
│   └── 📄 Window-Run-Sort.js       # Top 11 Windows Run shortcuts, L1/L2 fixes, print spooler, event logs & services
├── 📁 PowerShell_Commands/
│   └── 📄 PowerShell0Commd.js      # Core CLI diagnostics, .NET object filtering, remote WinRM & Linux comparison
└── 📄 README.md                    # Project documentation & overview
```

---

## 🚀 Key Modules Covered

### 1. 🪟 Windows Run & System Utilities (`Windows_Run_Commands/`)
* **Core Run Consoles**: `services.msc`, `ncpa.cpl`, `devmgmt.msc`, `eventvwr.msc`, `appwiz.cpl`, `diskmgmt.msc`, etc.
* **L1 vs L2 Engineering Architecture**:
  * **L1 Engineer**: Surface-level quick fixes, routine restarts, queue purges, and clear escalation limits.
  * **L2 Engineer**: Root cause analysis (RCA), Event Viewer crash codes, registry wipes, SNMP port issues, and driver package uninstalls.

### 2. ⚡ PowerShell & CLI Diagnostics (`PowerShell_Commands/`)
* **Must-Know Floor Commands**:
  * `Test-NetConnection` — TCP port testing and network reachability.
  * `Get-Service` & `Restart-Service` — Background service monitoring, dependency tracing, and forced bounce.
  * `Get-Process` & `Stop-Process` — CPU/RAM telemetry, surgical PID termination, and memory leak analysis.
  * `Test-Connection` — Modern ping, ICMP latency, jitter analysis, and MTU fragmentation tests.
  * `Get-NetIPAddress` & `Restart-NetAdapter` — Network stack inspection and silent adapter bounce.
  * `Clear-DnsClientCache` & `Resolve-DnsName` — DNS cache flush and Active Directory SRV queries.
  * `Get-HotFix` & `wusa` — Windows update audits and buggy patch rollbacks.
  * `Get-ComputerInfo` & `Get-CimInstance` — BIOS telemetry, Dell Service Tags, and physical RAM audits.
  * `Restart-Computer` & `Invoke-Command` — Remote kiosk/counter reboots via WinRM.
* **Side-by-Side Windows vs Linux Comparison**: Networking, systems/processes, and terminal operations.
* **Under-the-Hood Technical Differences**: Objects vs Text, Admin/sudo, Case sensitivity, and Path formats.

---

## 🎯 Target Environments
* **Corporate & MSPs**: Active Directory, Microsoft 365, ServiceNow, Remote fleet management.
* **Aviation & Airports**: CUPPS/CUTE systems, DCS check-in, FIDS screens, ATB/BTP boarding printers.
* **Hotels & Hospitality**: Opera PMS, keycard encoders, guest Wi-Fi networks.
* **Healthcare & Hospitals**: HIS client software, token displays, OPD station printers.
* **Logistics & Warehouses**: Handheld RF scanners, Zebra thermal printers, industrial APs.

---

## 👨‍💻 Author
Curated & maintained by **Tausif Qureshi**  
*Universal IT & Systems Support Blueprint*
