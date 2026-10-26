// ========================================= PC Hardware, BIOS/UEFI & OS Virtual Lab ======================================= //
// Target: Module 5 (Section A) — Universal IT Support & L2 Systems Engineer Blueprint (Enterprise & Gulf)
// ================================================================================

// ========================================= Hardware & Virtual Lab Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Desktop Support Engineer ka 50% physical kaam computer cabinet, RAM slots, SSD health, power supply aur BIOS settings ke sath hota hai.
// 2. VirtualBox lab IT engineer ka personal practice ground hota hai jahan bina physical hardware khareede apne laptop par Windows Server, Windows 10/11 aur Ubuntu chalaye ja sakte hain.
// 3. Format: Niche hardware components ki failure symptoms, BIOS/UEFI boot options, Dual-Boot architecture aur VirtualBox lab setup practical steps me di gayi hai.

// ================================================================================


// ========================================= 1. PC Hardware Diagnostics (RAM, SSD, PSU, Laptop) ================== //
// ================================================================================

// 1. RAM (Memory) Diagnostics:
//    - Symptoms: System achanak Blue Screen (BSOD: MEMORY_MANAGEMENT / PAGE_FAULT_IN_NONPAGED_AREA), continuous beeping sound, ya restart loop me chala jata hai.
//    - Motherboard BEEP Codes:
//      - 1 Long Beep + 2 Short Beeps -----> Display / Graphics card loose ya damaged.
//      - Continuous Rapid Beeps -----> RAM loose hai, missing hai, ya slot me carbon/dust aa gayi hai.
//    - Support Fix Workflow:
//      Step 1: Power cable nikalo, RAM stick ko side clips press karke bahar nikalo.
//      Step 2: Golden contacts ko school eraser (rubber) se clean karo (carbon/oxidation hatane ke liye).
//      Step 3: Single channel vs Dual channel verify karo (Hamesha Slot 2 aur Slot 4 me RAM lagayi jati hai for dual channel speed).
//      Step 4: Windows Built-in RAM Test: [Win + R] -> mdsched.exe -> "Restart now and check for problems".

// 2. Storage Drive (SSD vs Mechanical HDD) Diagnostics:
//    - Hard Disk Drive (HDD): Mechanical spindle disk (5400/7200 RPM). Slow read/write (~100 MB/s), physical shock se bad sectors bante hain.
//    - Solid State Drive (SSD): Flash memory (SATA SSD ~550 MB/s | NVMe M.2 SSD ~3500+ MB/s). 10x faster boot time, zero moving parts.
//    - Failure Symptoms:
//      - Clicking / Grinding noise (HDD spindle dying).
//      - Boot error: "No bootable device found" ya "Disk read error occurred".
//      - BSOD: 0x0000007B (INACCESSIBLE_BOOT_DEVICE).
//    - L2 Health Check Tool: CrystalDiskInfo tool chala kar S.M.A.R.T health check karo (Health "Good 95%" hai ya "Caution / Bad").
//    - Bad Sector Check via CLI: chkdsk C: /f /r

// 3. Power Supply (SMPS / PSU) Diagnostics:
//    - Symptoms: PC power button dabane par bilkul dead hai, ya heavy load par achanak shut down ho jata hai.
//    - The Famous Paperclip Test (Manual PSU Jumpstart):
//      Step 1: 24-Pin ATX connector motherboard se nikalo.
//      Step 2: Paperclip ko Green wire (PS_ON) aur kisi bhi Black wire (Ground) ke beech short (insert) karo.
//      Step 3: PSU switch ON karo -> Agar fan ghooma, matlab basic power circuit chalu hai.
//      Step 4: Multimeter test: Yellow wire = +12V (CPU/GPU) | Red wire = +5V | Orange wire = +3.3V.

// 4. Laptop Specific Hardware Telemetry:
//    - Battery Health Report:
//      Command: powercfg /batteryreport /output C:\battery.html
//      (Report me dekho: "Design Capacity" vs "Full Charge Capacity". Agar 50% se kam bachi hai toh battery dead hone wali hai).
//    - Thermal Throttling (Laptop garam hoke slow hona):
//      CPU cooling fan me dhool jamne se thermal paste sukh jata hai. Heat sink clean karke fresh thermal paste lagana L2 hardware task hai.


// ================================================================================


// ========================================= 2. BIOS / UEFI Architecture & Boot Configuration =================== //
// ================================================================================

// 1. Legacy BIOS vs Modern UEFI:
//    - Legacy BIOS -----> Puraana 16-bit blue screen system, MBR (Master Boot Record) partition use karta hai, max 2TB disk support.
//    - UEFI -----> Modern 64-bit GUI system (mouse support), GPT (GUID Partition Table) use karta hai, 128 partitions aur >2TB support.

// 2. Secure Boot (Security Requirement):
//    - Role: Boot sector me malware, rootkits ya unauthorized operating systems ko load hone se rokta hai.
//    - Note: Windows 11 installation ke liye UEFI mode aur Secure Boot mandatory hai!

// 3. TPM 2.0 (Trusted Platform Module):
//    - Role: Motherboard par lagi dedicated cryptographic security chip jo BitLocker encryption keys store karti hai.
//    - Windows 11 Compatibility Check: [Win + R] -> tpm.msc -> Check status: "The TPM is ready for use (Specification Version: 2.0)".

// 4. CMOS Battery Reset (BIOS Password / Corrupt Settings Recovery):
//    - Symptom: System ka date aur time har baar restart par galat (purane saal) me chala jata hai.
//    - Fix: Motherboard par laga CR2032 3V coin cell battery badlo.
//    - Password Reset: Battery ko 5 minute ke liye nikal kar bahar rakho, saare capacitors discharge ho kar BIOS factory reset ho jayega.


// ================================================================================


// ========================================= 3. Dual-Boot Concept (Windows + Linux on Same Machine) ============= //
// ================================================================================

// [ CONCEPT: Dual-Boot Architecture ]
// Ek hi physical computer par Windows aur Linux (Ubuntu) dono install karna taaki boot karte waqt choose kiya ja sake.

// 1. Bootloader Architecture:
//    - Windows Boot Manager -----> Sirf Windows ko boot karta hai.
//    - GRUB (Grand Unified Bootloader) -----> Linux ka bootloader jo Windows aur Linux dono ko pehchaan kar screen par menu deta hai.
//    - Rule: Hamesha pehle Windows install karo, uske baad Linux install karo taaki GRUB bootloader automatically dono ko detect kar le.

// 2. EFI System Partition (ESP):
//    - Hard disk par ek chhota FAT32 partition (100MB se 500MB) hota hai jisme boot files (`.efi`) store hoti hain.

// 3. Dual-Boot & BitLocker Warning:
//    - Agar Windows drive par BitLocker on hai, toh Linux install karne se pehle BitLocker ko 'Suspend' karo, warna agle boot par 48-digit recovery key mang lega!


// ================================================================================


// ========================================= 4. VirtualBox Lab Setup (Hands-on Practice) ======================== //
// ================================================================================

// 1. Virtual Machine (VM) Creation Steps:
//    - Step 1: VirtualBox kholo -> "New" par click karo -> Name: "Ubuntu-22.04" ya "Win11-Test".
//    - Step 2: RAM allocation: Minimum 4096 MB (4 GB).
//    - Step 3: Processors: Minimum 2 vCPUs.
//    - Step 4: Virtual Hard Disk: 30 GB to 50 GB (VDI format, Dynamically Allocated).
//    - Step 5: Storage -> Controller IDE/SATA -> Empty CD icon par ISO file mount karo -> Start!

// 2. VirtualBox Network Modes (Interview Core Question):
//    - NAT (Default) -----> VM ko internet milta hai, lekin office network ke doosre computer VM ko ping ya access nahi kar sakte (Private sandbox).
//    - Bridged Adapter -----> VM direct office router/DHCP se ek independent IP address leta hai (jaise ek real physical computer ho).
//    - Host-Only Adapter -----> Sirf Host laptop aur Virtual Machine aapas me baat kar sakte hain (Zero internet, highly isolated testing).

// 3. Snapshots (The Power of Virtualization):
//    - VM par koi bhi naya software ya risky update install karne se pehle "Take Snapshot" par click karo.
//    - Agar update ke baad system crash ho gaya, toh 2 second me "Revert to Snapshot" karke system ko pichli safe state me wapas le aao!

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
