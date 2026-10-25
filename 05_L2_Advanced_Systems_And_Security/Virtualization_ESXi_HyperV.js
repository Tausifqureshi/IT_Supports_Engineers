// ========================================= Enterprise Virtualization: VMware ESXi & Hyper-V ======================================= //
// Target: Module 5 (Section F) — Universal IT Support & L2 Systems Engineer Blueprint (Enterprise Standard)
// ================================================================================

// ========================================= Virtualization in Enterprise IT Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Data centers aur corporate server rooms me har physical server (Dell PowerEdge, HP ProLiant) ke upar VMware ESXi ya Microsoft Hyper-V chalta hai taaki 50 alag-alag physical hardware khareedne ke bajaye ek hi server par 50 Virtual Machines (VMs) chalayi ja sakein.
// 2. Format: Niche VMware ESXi vs Hyper-V comparison, VM provisioning, resource allocation (vCPU/vRAM overcommitment), storage provisioning (Thin vs Thick) aur virtual networking di gayi hai.

// ================================================================================


// ========================================= 1. Type 1 Bare-Metal Hypervisors Architecture ======================== //
// ================================================================================

// 1. VMware ESXi (vSphere):
//    - Kya hai: World-wide industry leading enterprise hypervisor.
//    - Access: Web Browser se direct host IP khola jata hai (e.g. `https://192.168.1.200/ui`).
//    - Management Tool: vCenter Server (Cluster level management, live VM migration / vMotion, High Availability HA).

// 2. Microsoft Hyper-V:
//    - Kya hai: Windows Server 2022 ka built-in native virtualization role.
//    - Console: [Win + R] -> `virtmgmt.msc` (Hyper-V Manager).
//    - Feature: Windows Server licenses ke sath tightly integrated, licensing cost kam hoti hai.


// ================================================================================


// ========================================= 2. Virtual Machine Creation & Resource Allocation =================== //
// ================================================================================

// 1. Hardware Resource Allocation Rules:
//    - vCPU Allocation: Core server ke physical cores ke hisaab se allocate kiya jata hai. Standard VM ke liye 2 vCPUs ya 4 vCPUs.
//    - vRAM Allocation:
//      - Static Memory: Dedicated RAM jo host server se reserved ho jati hai (Database servers ke liye).
//      - Dynamic Memory (Hyper-V) / Memory Ballooning (ESXi): VM ko load aane par extra RAM milti hai aur idle hone par host ko wapas de deta hai.

// 2. Virtual Disk Provisioning (Thin vs Thick Provisioning — Interview Question!):
//    - Thin Provisioning:
//      - Agar aapne 100GB disk banayi aur usme sirf 20GB data hai, toh host storage me sirf '20GB' physical space use hoga. Data badhne par disk size automatically expand hoti hai (Storage saving best practice).
//    - Thick Provisioning Lazy Zeroed:
//      - 100GB banate hi host storage se turant '100GB' block reserve ho jata hai, chahe data 1MB hi kyun na ho.
//    - Thick Provisioning Eager Zeroed:
//      - High-performance, highly secure zero-filled blocks (Critical SQL database servers ke liye).


// ================================================================================


// ========================================= 3. Virtual Networking (vSwitch Architecture) ======================== //
// ================================================================================

// 1. Standard Virtual Switch (vSwitch):
//    - Host server ke physical network cards (NICs) se connected software-based switch hota hai.

// 2. Port Groups & VLAN Tagging:
//    - Ek hi physical server par chal rahi VMs ko alag-alag VLAN me divide kiya jata hai:
//      - Port Group "Production_Servers" -----> VLAN ID: 10
//      - Port Group "DMZ_Web_Facing"     -----> VLAN ID: 20
//      - Port Group "Management_VMkernel"-----> VLAN ID: 99 (ESXi web access).


// ================================================================================


// ========================================= 4. Snapshots & Disaster Recovery Workflows =========================== //
// ================================================================================

// 1. Snapshot Best Practices:
//    - Rule: Snapshot backup ka replacement NAHI hota!
//    - Golden Rule: Snapshot ko sirf 24 se 72 ghante ke liye rakha jata hai (e.g. koi software upgrade ya risky registry tweak karne se pehle).
//    - Danger: Agar snapshot mahino tak chhod diya jaye, toh Delta (`-delta.vmdk`) file giant ban jati hai aur host storage full hoke VM freeze ho jati hai!
//    - Action: Upgrade successful hone ke baad hamesha snapshot ko "Delete / Consolidate" karna zaroori hai.

// 2. High Availability (HA) & Fault Tolerance (FT):
//    - VMware HA: Agar ek physical host server achanak mar jaye, toh uski saari VMs doosre physical server par automatically restart ho jati hain.
//    - vMotion: Bina kisi downtime ya ping drop ke chalte hue live VM ko ek server se doosre server par shift karna.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
