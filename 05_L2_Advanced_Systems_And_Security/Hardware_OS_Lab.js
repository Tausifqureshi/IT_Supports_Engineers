// ========================================= PC Hardware, BIOS/UEFI & OS Virtual Lab ======================================= //
// Target: Module 5 (Section A) — Universal IT Support & L2 Systems Engineer Blueprint (Enterprise & Gulf)
// ================================================================================

// ========================================= Hardware & Virtual Lab Kya Hai? ======================================= //
// 1. Desktop Support Engineer ka daily hardware scope computer cabinet, RAM slots, SSD health, power supply aur BIOS settings ke sath deal karna hota hai.
// 2. VirtualBox lab IT engineer ka isolated practice ground hota hai jahan bina physical hardware khareede Windows Server, Windows 10/11 aur Ubuntu chalaye ja sakte hain.
// 3. Format: Niche hardware failure symptoms, BIOS/UEFI boot options, Dual-Boot architecture aur VirtualBox lab setup practical L1 vs L2 steps me diya gaya hai.

// ================================================================================


// ========================================= 1. PC Hardware Diagnostics (RAM, SSD, PSU, Laptop) ================== //
// ================================================================================

// 1. RAM (Memory) Diagnostics:
//    - Symptoms: Blue Screen (BSOD: MEMORY_MANAGEMENT / PAGE_FAULT_IN_NONPAGED_AREA), beeping sound, ya spontaneous reboots.
//    - Motherboard BEEP Codes:
//      - 1 Long Beep + 2 Short Beeps -> Display / Graphics card loose ya damaged.
//      - Continuous Rapid Beeps -> RAM loose hai, missing hai, ya slot me carbon/dust aa gayi hai.
//    - Support Fix Workflow (L1 vs L2):
//      - L1 Action: Power cable disconnect karo -> RAM stick nikaal kar golden contacts ko eraser se clean karo -> Slot change karke re-seat karo.
//      - L1 CLI Test: Win + R -> type mdsched.exe -> Enter -> "Restart now and check for problems".
//      - L2 Rule: Multi-channel configuration verify karna (Dual-channel performance ke liye standard motherboard par Slot 2 aur Slot 4 prioritize kiye jaate hain).

// 2. Storage Drive (SSD vs Mechanical HDD) Diagnostics:
//    - HDD vs SSD: HDD mechanical magnetic platters use karta hai (~100 MB/s, shock-sensitive); SSD NAND flash memory use karta hai (SATA ~550 MB/s | NVMe M.2 ~3500+ MB/s).
//    - Failure Symptoms: Clicking / Grinding noise (HDD spindle failure), "No bootable device found", BSOD: INACCESSIBLE_BOOT_DEVICE (0x0000007B).
//    - Health Check via CLI & GUI:
//      - Quick S.M.A.R.T Status (CMD): wmic diskdrive get status -> Output me "OK" aana chahiye; "Pred Fail" aate hi immediate disk replace hogi.
//      - File System & Bad Sector Repair: chkdsk C: /f /r
//      - Deep Telemetry: CrystalDiskInfo tool se Reallocated Sectors Count aur SSD Life percentage check karna.

// 3. Power Supply (SMPS / PSU) & Static Power Drain (Power Flea):
//    - L1 Immediate Triage (Power Flea Drain / Residual Power Reset):
//      - Symptom: Laptop/Desktop power button dabane par zero response (no fan, no LED light).
//      - Action: Power cable aur battery unplug karo -> Power button ko 30 seconds tak continuously press karke hold rakho (capacitors completely drain ho jaate hain) -> Power lagakar reboot karo.
//    - L2 PSU Diagnostics (Paperclip Test):
//      - 24-Pin ATX connector motherboard se nikalo.
//      - Paperclip se Green wire (PS_ON) aur kisi bhi Black wire (Ground) ko short karo.
//      - Fan check karo aur Multimeter se rails test karo: Yellow = +12V, Red = +5V, Orange = +3.3V.

// 4. Laptop Specific Hardware Telemetry:
//    - Battery Health Report:
//      Command: powercfg /batteryreport /output C:\battery.html
//      (Check: "Full Charge Capacity" vs "Design Capacity" ratio).
//    - Thermal Throttling:
//      Fan noise aur performance drop hone par heatsink dust clean karke fresh thermal paste (non-conductive) apply karna.

// 5. Hardware Serial Number, Model & Asset Inventory:
//    - Dell Service Tag / Serial Number CLI Retrieval:
//      CMD: wmic bios get serialnumber
//      PowerShell: (Get-CimInstance -ClassName Win32_BIOS).SerialNumber
//    - Motherboard & System Model Check:
//      CMD: wmic csproduct get name
//      (Vendor warranty claims aur ServiceNow/Jira asset tag mapping ke liye required).


// ================================================================================


// ========================================= 2. BIOS / UEFI Architecture & Boot Configuration =================== //
// ================================================================================

// 1. BIOS/UEFI Access Keys & Vendor Standards:
//    - Standard Entry Keys:
//      - Dell: F2 (BIOS Setup) | F12 (One-Time Boot Menu).
//      - HP: Esc / F10 (BIOS Setup) | F9 (Boot Menu).
//      - Lenovo: F1 / F2 / Enter (BIOS Setup) | F12 (Boot Menu).
//      - Windows Fast Startup Bypass: Shift + Restart click karo -> Troubleshoot -> Advanced Options -> "UEFI Firmware Settings".

// 2. Legacy BIOS vs Modern UEFI:
//    - Legacy BIOS: 16-bit environment, MBR (Master Boot Record) partition style, maximum 2 TB disk support, up to 4 primary partitions.
//    - UEFI: 64-bit modern interface, GPT (GUID Partition Table) style, support > 2 TB storage, up to 128 partitions, Secure Boot capability.

// 3. Storage Controller Protocol: AHCI vs RAID ON / Intel RST:
//    - Enterprise Rule: Naye laptop par Windows install karte waqt agar SSD detect na ho ("We couldn't find any drives"), toh BIOS me Storage Controller "RAID On" se switch karke "AHCI / NVMe" mode par set kiya jata hai.

// 4. Secure Boot & TPM 2.0 (Windows 11 Compliance):
//    - Secure Boot: Bootloader signatures verify karta hai taaki rootkits load na ho sakein.
//    - TPM 2.0 Check: Win + R -> type tpm.msc -> Enter -> Status check: "The TPM is ready for use (Specification Version: 2.0)".

// 5. CMOS Battery Reset:
//    - Symptom: BIOS settings save na hona ya system clock reboot par purani date par reset hona.
//    - Fix: CR2032 3V coin cell battery replace karna. Password lockout bypass ke liye battery ko 5 minute disconnect karke capacitors discharge kiye jaate hain.


// ================================================================================


// ========================================= 3. Dual-Boot Architecture & Bootloader Repair ====================== //
// ================================================================================

// [ CONCEPT: Dual-Boot Execution ]
// Ek hi drive par multiple operating systems run karna.

// 1. Bootloader Architecture:
//    - Windows Boot Manager (bootmgr / BCD): Sirf Windows instances ko recognize karta hai.
//    - GRUB (Grand Unified Bootloader): Linux bootloader jo Windows Boot Manager aur Linux kernels dono ko detect karta hai.
//    - Sequence Rule: Hamesha pehle Windows install karo, uske baad Linux install karo taaki GRUB auto-configure ho sake.

// 2. EFI System Partition (ESP) & BitLocker Warning:
//    - ESP: 100MB-500MB ka FAT32 partition jisme .efi bootloader files rehti hain.
//    - BitLocker Caution: Dual-boot partition create karne se pehle Windows me BitLocker ko "manage-bde -protectors -disable C:" se suspend karna zaroori hai.

// 3. Bootloader Recovery (Windows Boot Repair via CLI):
//    - Problem: Linux uninstall karne ke baad "grub rescue>" screen par PC atak gaya.
//    - Fix via Windows Recovery USB (CMD):
//      bootrec /fixmbr
//      bootrec /fixboot
//      bootrec /rebuildbcd


// ================================================================================


// ========================================= 4. VirtualBox Lab Setup (Enterprise Practice) ====================== //
// ================================================================================

// 1. VM Configuration & Hardware Virtualization (VT-x / AMD-V):
//    - Prerequisite: BIOS settings me Intel Virtualization Technology (VT-x) ya AMD-V / SVM Mode "Enabled" hona chahiye. Agar disabled hoga toh 64-bit VMs fail ho jayengi.
//    - Resource Sizing: Minimum 4096 MB RAM, 2 vCPUs, 40-50 GB VDI (Dynamically allocated).

// 2. VirtualBox Network Modes (Core Enterprise Differences):
//    - NAT (Default): VM internet use kar sakti hai via host IP, lekin external LAN devices VM ko direct connect nahi kar sakte.
//    - Bridged Adapter: VM host ke physical network card se directly judti hai aur local DHCP router se independent IP address leti hai (Real workstation ki tarah behave karti hai).
//    - Host-Only Adapter: Isolated network sirf host machine aur VMs ke aapas me communication ke liye (Zero internet risk, Active Directory lab testing ke liye ideal).
//    - Internal Network: VMs aapas me communicate kar sakti hain, lekin host OS bhi unhe access nahi kar sakta.

// 3. VirtualBox Guest Additions:
//    - Installation: VM window menu -> CLICK "Devices" -> CLICK "Insert Guest Additions CD image...".
//    - Benefits: Mouse pointer integration, Auto-resize screen resolution, bidirectional Shared Clipboard, aur Drag-and-Drop support.

// 4. Snapshots & Rolling Back:
//    - Patching ya configuration se pehle state capture karna taaki crash hone par 1-click restore kiya ja sake.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
