// ========================================= PowerShell Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Complete Beginner to Advanced Floor Cheatsheet (Corporate, Airports & MSPs)
// ================================================================================

// ========================================= PowerShell (CLI) Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. PowerShell Windows operating system ka modern object-oriented command-line shell aur automation tool hai jo .NET framework par chalta hai.
// 2. Normal CMD plain text deta hai jisme data filter karna mushkil hota hai, jabki PowerShell rich structured ".NET Objects" return karta hai jisse troubleshooting super-fast hoti hai.
// 3. Format: Main-main core commands upar hain, fir advanced IP/Routing/File/Clean commands hain, aur aakhri me Windows vs Linux ka comparison hai. Har command seedha '1 Line' format me hai!

// ================================================================================


// ========================================= 1. System Update & Windows Package Management (winget / CLI) ======= //
// ================================================================================

// 1. winget upgrade -----> System me installed sabhi software applications ke available updates check karne ke liye.

// 2. winget upgrade --all --silent -----> Sabhi softwares (Chrome, Zoom, Adobe, 7-Zip) ko background me silently ek sath update karne ke liye (Linux: apt upgrade equivalent).

// 3. winget install -e --id Google.Chrome -----> Google Chrome ya kisi bhi official app ko direct CLI se install karne ke liye.

// 4. winget uninstall <app_name> -----> Kisi software application ko CLI se silently uninstall karne ke liye.

// 5. Get-HotFix -----> Installed Windows Security updates aur latest KB patches ki list dekhne ke liye.

// 6. Get-HotFix | Sort-Object InstalledOn -Descending | Select -First 5 -----> Aakhri 5 updates dekhna (jab user bole "Kal update ke baad problem shuru hui").


// ================================================================================


// ========================================= 2. Windows Deep Clean & Junk Removal =============================== //
// ================================================================================

// 7. Clear-RecycleBin -Force -----> Windows Desktop ke Recycle Bin (Trash) ko bina prompt ke CLI se permanently empty karne ke liye.

// 8. Remove-Item -Path "C:\Windows\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue -----> Windows System Temp folder me bhari junk files ko delete karke space bachane ke liye.

// 9. Remove-Item -Path "$env:TEMP\*" -Recurse -Force -ErrorAction SilentlyContinue -----> Current User ke Local Temp folder (`%temp%`) ki faltu files ko clean karne ke liye.

// 10. cleanmgr /sagerun:1 -----> Windows Disk Cleanup tool ko automated background mode me chala kar system junk clean karne ke liye.

// 11. Master Deep Clean One-Liner (Windows):
//     Clear-RecycleBin -Force; Remove-Item "$env:TEMP\*" -Recurse -Force -EA SilentlyContinue; Remove-Item "C:\Windows\Temp\*" -Recurse -Force -EA SilentlyContinue


// ================================================================================


// ========================================= 3. Directory Navigation & PowerShell Super Shortcuts =============== //
// ================================================================================

// 12. Get-Location -----> Print Working Directory: Aap is waqt kis folder/drive me baithe hain dekhne ke liye (pwd equivalent).

// 13. Set-Location -Path "C:\Windows" -----> Kisi specific folder ke andar navigate/move karne ke liye (cd equivalent).

// 14. Set-Location .. -----> Current folder se ek step peeche parent folder me wapas aane ke liye (cd .. equivalent).

// 15. Set-Location ~ -----> Current logged-in user ke home directory (`C:\Users\username`) me jump karne ke liye.

// 16. Get-History -----> PowerShell console par run ki gayi purani executed commands ki list dekhne ke liye (history equivalent).

// 17. Invoke-History <Id> -----> Purani history me se kisi specific ID wali command ko dobara re-run karne ke liye.

// 18. Clear-Host -----> PowerShell screen ko 1 second me clear karne ke liye (cls / Ctrl + L equivalent).

// 19. Super PowerShell Shortcuts:
//     - [Tab] -----> Cmdlets, parameters aur file paths ko automatically auto-complete karne ke liye.
//     - [Ctrl + C] -----> Terminal par chal rahi command, script ya loop ko forcefully cancel/stop karne ke liye.
//     - [F7] -----> History popup window khol kar purani commands ko arrow key se choose karne ke liye.


// ================================================================================


// ========================================= 4. Files & Folder Creation (Create, Copy, Remove) ================== //
// ================================================================================

// 20. New-Item -Path "index.js" -ItemType File -----> Nayi blank empty file create karne ke liye (Linux: `touch index.js` equivalent!).

// 21. New-Item -Path "app\src" -ItemType Directory -----> Naya folder ya nested directory tree create karne ke liye (Linux: `mkdir -p` equivalent!).

// 22. Get-ChildItem -Path "C:\" -Force -----> Hidden files samet saari files aur folders ki list dekhne ke liye (dir / ls -la equivalent).

// 23. Copy-Item -Path "file.txt" -Destination "backup.txt" -----> Single file ko duplicate/copy karne ke liye.

// 24. Copy-Item -Path "C:\Data\*" -Destination "D:\Backup\" -Recurse -----> Poore folder aur sub-folders ko recursively copy karne ke liye (cp -r equivalent).

// 25. Remove-Item -Path "file.txt" -----> File ko delete karne ke liye (rm equivalent).

// 26. Remove-Item -Path "C:\OldFolder" -Recurse -Force -----> Kisi folder aur uske andar ke saare contents ko forcefully delete karne ke liye (rm -rf equivalent).

// 27. Move-Item -Path "C:\old" -Destination "C:\new" -----> File ya folder ko rename karne ya move karne ke liye (mv equivalent).


// ================================================================================


// ========================================= 5. File Viewing & Live Log Inspection ============================== //
// ================================================================================

// 28. Get-Content -Path "C:\app.log" -----> File ka poora text content terminal screen par print karke padhne ke liye (cat equivalent).

// 29. Get-Content -Path "C:\app.log" -TotalCount 10 -----> File ki shuruwaat ki pehli 10 lines print karne ke liye (head -n 10 equivalent).

// 30. Get-Content -Path "C:\app.log" -Tail 20 -----> File ki aakhri 20 lines print karne ke liye (tail -n 20 equivalent).

// 31. Get-Content -Path "C:\app.log" -Wait -----> Live Log Monitoring: File me naye aane wale logs ko real-time me screen par scroll karna (Linux: `tail -f` equivalent!).

// 32. Select-String -Path "C:\Logs\*.log" -Pattern "Error" -----> Log files ke andar kisi specific error word ko search karke nikalne ke liye (Linux: `grep` equivalent!).


// ================================================================================


// ========================================= 6. Network & Port Diagnostics (Top Daily Drivers) =================== //
// ================================================================================

// 33. Test-NetConnection -ComputerName <IP/Domain> -Port <Port> -----> Specific TCP port open hai ya firewall ne block kiya hai check karne ke liye (TcpTestSucceeded: True/False).

// 34. Test-NetConnection -ComputerName <IP/Domain> -----> Fast network ping aur reachability check karne ke liye (PingSucceeded: True/False).

// 35. Test-NetConnection -ComputerName <Host> -Port 80 -InformationLevel Detailed -----> Detailed route trace, round-trip latency aur interface alias nikalne ke liye.

// 36. Test-Connection -ComputerName 8.8.8.8 -Count 4 -----> Modern object-oriented ping packet drop aur response time check karne ke liye.

// 37. Test-Connection -ComputerName 8.8.8.8 -Count 20 | Select Address, ResponseTime -----> Network jitter aur micro packet drops trace karne ke liye.

// 38. Clear-DnsClientCache -----> Corrupt ya purane local DNS cache ko flush (clean) karne ke liye (ipconfig /flushdns equivalent).

// 39. Resolve-DnsName -Name google.com -----> Modern object-oriented DNS lookup test karne ke liye (nslookup replacement).

// 40. Resolve-DnsName -Name portal.local -Server 192.168.1.10 -----> Specific internal DNS server se query karke record verify karne ke liye.

// 41. Get-NetTCPConnection -State Listen -----> System par kaun kaun se TCP ports actively listen kar rahe hain unhe dekhne ke liye (netstat -ano replacement).


// ================================================================================


// ========================================= 7. Network IP Configuration & Routing (Beginner to Advance) ========= //
// ================================================================================

// 42. Get-NetIPAddress -AddressFamily IPv4 -----> Machine ke sabhi network adapters ke live IPv4 addresses, subnets aur interface aliases dekhne ke liye.

// 43. Get-NetIPConfiguration -----> IP address, Default Gateway, DNS Servers aur interface name ka clean summary dekhne ke liye.

// 44. New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.1.50 -PrefixLength 24 -DefaultGateway 192.168.1.1 -----> Network adapter par naya Static IP aur Gateway assign karne ke liye via CLI.

// 45. Remove-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.1.50 -Confirm:$false -----> Network adapter se IP address ko delete/remove karne ke liye via CLI.

// 46. Set-NetIPInterface -InterfaceAlias "Ethernet" -Dhcp Enabled -----> Adapter ko Static IP se hata kar wapas Automatic (DHCP) mode par daalne ke liye.

// 47. Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("8.8.8.8","8.8.4.4") -----> Network card par DNS servers (Google DNS) manually set karne ke liye via CLI.

// 48. Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ResetServerAddresses -----> DNS server ko reset karke wapas router/DHCP se automatic lene ke liye.

// 49. Get-NetAdapter -----> Physical Ethernet aur Wi-Fi cards ki link state (Up/Disabled), link speed (1Gbps/100Mbps) aur MAC address dekhne ke liye.

// 50. Disable-NetAdapter -Name "Ethernet" -Confirm:$false -----> Network card ko CLI se disable (band) karne ke liye.

// 51. Enable-NetAdapter -Name "Ethernet" -Confirm:$false -----> Network card ko CLI se wapas enable (chalu) karne ke liye.

// 52. Restart-NetAdapter -Name "Ethernet" -----> Bina PC reboot kiye network card ke driver aur DHCP lease ko cleanly reload karne ke liye.

// 53. Get-NetRoute -----> Windows routing table aur active gateways inspect karne ke liye (route print replacement).

// 54. New-NetRoute -DestinationPrefix "10.0.0.0/8" -InterfaceAlias "Ethernet" -NextHop 192.168.1.254 -----> Specific subnet ke liye static route add karne ke liye.

// 55. Remove-NetRoute -DestinationPrefix "10.0.0.0/8" -Confirm:$false -----> Static route ko routing table se delete karne ke liye.

// 56. Get-NetNeighbor -AddressFamily IPv4 -----> Local network me judey devices ke IP se physical MAC address table (ARP) dekhne ke liye.

// 57. Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True" -and $_.Direction -eq "Inbound"} -----> Active inbound Windows Defender firewall rules inspect karne ke liye.

// 58. New-NetFirewallRule -DisplayName "Allow Port 8080" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow -----> Naya firewall inbound port rule open karne ke liye.


// ================================================================================


// ========================================= 8. Services Management (Background Daemons) ======================== //
// ================================================================================

// 59. Get-Service -Name <service> -----> Background service running hai ya stopped check karne ke liye (e.g. Get-Service -Name Spooler).

// 60. Get-Service -Name *print* -----> Wildcard search se service ka exact technical naam dhoondne ke liye.

// 61. Restart-Service -Name <service> -Force -----> Atki hui background service ko uske dependent services ke sath bina GUI khole restart karne ke liye.

// 62. Start-Service -Name <service> -----> Kisi band hui (stopped) background service ko start karne ke liye.

// 63. Stop-Service -Name <service> -Force -----> Kisi running background service ko zabardasti band karne ke liye.

// 64. Set-Service -Name <service> -StartupType Automatic -----> Service ka startup type badal kar Automatic set karne ke liye via CLI.

// 65. Set-Service -Name <service> -StartupType Disabled -----> Unwanted ya risky service ko boot time par disable karne ke liye.

// 66. Get-Service | Where-Object {$_.StartType -eq "Automatic" -and $_.Status -eq "Stopped"} -----> Server par sabhi crashed automatic services ko 1 second me dhoondne ke liye.


// ================================================================================


// ========================================= 9. Process Management & Force Kill ================================= //
// ================================================================================

// 67. Get-Process -----> System me chal rahe saare live programs, worker processes aur unke PID dekhne ke liye.

// 68. Get-Process -Name chrome -----> Specific application background me chal rahi hai ya nahi check karne ke liye.

// 69. Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 -----> Top 5 sabse zyada CPU khane wale programs filter karne ke liye.

// 70. Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 -----> Top 5 sabse zyada RAM (Memory) khane wale software filter karne ke liye.

// 71. (Get-Process -Name svchost).Path -----> Suspicious background process ka exact file path trace karne ke liye (Malware detection).

// 72. Stop-Process -Name chrome -Force -----> Freeze hue software ko uske naam se zabardasti band (kill) karne ke liye.

// 73. Stop-Process -Id <PID> -Force -----> Specific Process ID par surgical strike karke sirf usi hanging tab/window ko kill karne ke liye.

// 74. Stop-Process -Name excel -Force -PassThru -----> Kill hone ke baad console par live confirmation object dekhne ke liye.

// 75. Wait-Process -Name installer -----> Background setup complete hone tak PowerShell execution ko pause/wait karne ke liye.


// ================================================================================


// ========================================= 10. System Forensic, Hardware & Storage ============================ //
// ================================================================================

// 76. Get-ComputerInfo -----> PC ka model name, OS build, total RAM aur BIOS details dekhne ke liye.

// 77. (Get-CimInstance -ClassName Win32_BIOS).SerialNumber -----> Laptop/Desktop ka official Dell Service Tag ya Serial Number warranty ke liye nikalne ke liye.

// 78. Get-CimInstance -ClassName Win32_PhysicalMemory -----> Physical RAM sticks, speed (MHz) aur khali slots check karne ke liye bina cabinet khole.

// 79. (Get-CimInstance -ClassName Win32_OperatingSystem).LastBootUpTime -----> System ka exact boot uptime check karna (jab user jhoot bole ki "Maine reboot kiya").

// 80. Get-PSDrive -PSProvider FileSystem -----> Sabhi hard drive partitions ka free aur used storage space dekhne ke liye.

// 81. Get-Volume -----> Hard drives ke drive letters, file system (NTFS) aur health status dekhne ke liye.

// 82. Compress-Archive -Path "C:\Data\*" -DestinationPath "C:\Backup.zip" -----> Files ko zip compressed archive banane ke liye.

// 83. Expand-Archive -Path "C:\Backup.zip" -DestinationPath "C:\Extracted\" -----> Zip archive file ko extract/unzip karne ke liye.


// ================================================================================


// ========================================= 11. Remote Fleet Management & Active Directory ===================== //
// ================================================================================

// 84. Restart-Computer -Force -----> Local system ko CLI se forcefully reboot karne ke liye.

// 85. Restart-Computer -ComputerName <RemotePC> -Force -----> Remote kiosk, counter PC ya billing terminal ko bina desk par jaye CLI se reboot karne ke liye.

// 86. Invoke-Command -ComputerName <RemotePC> -ScriptBlock { Restart-Service -Name Spooler -Force } -----> WinRM ke zariye remote PC par command chalane ke liye.

// 87. Test-WsMan <RemotePC> -----> Verify karna ki remote machine par Windows Remote Management (Port 5985) open hai ya nahi.

// 88. Get-ADUser -Identity <user> -Properties * -----> Active Directory user ka status, password set date aur lockout check karne ke liye.

// 89. Unlock-ADAccount -Identity <user> -----> Locked Active Directory user ko CLI se 1 second me unlock karne ke liye.

// 90. Search-ADAccount -LockedOut | Select Name, SamAccountName -----> Poore domain me jitne bhi users is waqt locked hain unki list nikalne ke liye.

// 91. Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 10 -----> Machine par aakhri 10 Failed Logon attempts (Event ID 4625) filter karne ke liye.

// 92. Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 5 -----> System log ke aakhri 5 Critical Errors filter karne ke liye.


// ================================================================================


// ========================================= 12. Windows Defender Firewall Management (CLI) ===================== //
// ================================================================================

// 93. Get-NetFirewallRule -----> System me configured sabhi inbound aur outbound firewall rules ki list dekhne ke liye.

// 94. Get-NetFirewallRule -DisplayName "*Remote Desktop*" | Select Name, DisplayName, Enabled, Direction -----> RDP firewall rules ka active/disabled status check karne ke liye.

// 95. New-NetFirewallRule -DisplayName "Allow Custom ERP Port 8080" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow -----> Company ke ERP/Software ke liye specific port 8080 allow karne ke liye.

// 96. Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled False -----> Emergency troubleshooting me firewall ko temporary disable karne ke liye (Turn OFF).

// 97. Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True -----> Troubleshooting ke baad firewall ko turant wapas re-enable (Turn ON) karne ke liye.

// 98. Enable-NetFirewallRule -DisplayGroup "File and Printer Sharing" -----> Office network par folder sharing aur printer access firewall me 1 click me allow karne ke liye.

// 99. Remove-NetFirewallRule -DisplayName "Allow Custom ERP Port 8080" -----> Banaye gaye firewall rule ko delete/remove karne ke liye.


// ================================================================================


// ========================================= 13. BitLocker & Drive Encryption Management (CLI) =================== //
// ================================================================================

// 100. Get-BitLockerVolume -----> Sabhi local drives (C:, D:) ka BitLocker protection status, encryption percentage aur lock status dekhne ke liye.

// 101. (Get-BitLockerVolume -MountPoint C:).KeyProtector -----> Locked laptop ka 48-digit BitLocker Recovery Key extract karne ke liye (User lockout me life-saver).

// 102. Suspend-BitLocker -MountPoint "C:" -RebootCount 1 -----> BIOS/Firmware update karne se pehle BitLocker suspend karna taaki agle restart par Blue Screen ya BitLocker prompt na aaye.

// 103. Resume-BitLocker -MountPoint "C:" -----> BIOS update ke baad BitLocker encryption ko dobara actively resume karne ke liye.

// 104. Unlock-BitLocker -MountPoint "D:" -Password (ConvertTo-SecureString "Pass123" -AsPlainText -Force) -----> Locked external ya secondary drive ko CLI se unlock karne ke liye.


// ================================================================================


// ========================================= 14. Printers, Print Spooler & Driver Diagnostics (CLI) ============= //
// ================================================================================

// 105. Get-Printer -----> Workstation par installed sabhi network aur local USB printers ki list dekhne ke liye.

// 106. Get-PrintJob -PrinterName "HP_LaserJet" -----> Stuck ya pending print jobs aur unki Job ID check karne ke liye.

// 107. Remove-PrintJob -PrinterName "HP_LaserJet" -ID <JobId> -----> Print queue me fase hue document ko forcefully cancel/delete karne ke liye.

// 108. Restart-Service -Name Spooler -Force -----> Print Spooler service ko restart karke printing freeze issue ko 5 second me resolve karne ke liye.

// 109. Get-PrinterDriver -----> Workstation me installed printer drivers ki architecture aur version list dekhne ke liye.

// 110. Add-Printer -Name "Floor3_Printer" -DriverName "HP Universal Printing PCL 6" -PortName "192.168.1.200" -----> CLI se network IP printer deploy karne ke liye.


// ================================================================================


// ========================================= 15. Local Users, Groups & Credential Auditing (CLI) ================ //
// ================================================================================

// 111. Get-LocalUser -----> Machine par bane sabhi local user accounts aur unka Enabled/Disabled status dekhne ke liye.

// 112. New-LocalUser -Name "IT_Admin_Temp" -Password (ConvertTo-SecureString "Pass@1234" -AsPlainText -Force) -FullName "Temporary Admin" -----> Emergency onsite support ke liye naya local user create karne ke liye.

// 113. Add-LocalGroupMember -Group "Administrators" -Member "IT_Admin_Temp" -----> Local user ko machine par Local Administrator rights assign karne ke liye.

// 114. Set-LocalUser -Name "IT_Admin_Temp" -PasswordNeverExpires $true -----> Account ka password expire hone se rokne ke liye.

// 115. Disable-LocalUser -Name "IT_Admin_Temp" -----> Kaam pura hone ke baad temporary user account ko disable/lock karne ke liye.

// 116. Remove-LocalUser -Name "IT_Admin_Temp" -----> Temporary user account ko system se permanently delete karne ke liye.

// 117. Get-LocalGroupMember -Group "Administrators" -----> Machine ke Administrators group me kaun-kaun se users aur domain accounts baithe hain audit karne ke liye (Security check).


// ================================================================================


// ========================================= 16. Disks, Partitions & Modern Volume Maintenance (CLI) ============ //
// ================================================================================

// 118. Get-Disk -----> Machine me lagi sabhi physical hard drives, SSDs aur USB drives ka Partition Style (GPT/MBR) aur health dekhne ke liye.

// 119. Initialize-Disk -Number 1 -PartitionStyle GPT -----> Nayi uninitialized raw hard drive/SSD ko modern GPT format me initialize karne ke liye.

// 120. New-Partition -DiskNumber 1 -UseMaximumSize -AssignDriveLetter | Format-Volume -FileSystem NTFS -NewFileSystemLabel "CompanyData" -----> Poori nayi disk ko 1 line me partition banakar drive letter assign aur NTFS format karne ke liye.

// 121. Repair-Volume -DriveLetter C -Scan -----> Modern online chkdsk: Live running Windows me bina PC reboot kiye disk corruption scan karne ke liye.

// 122. Repair-Volume -DriveLetter C -SpotFix -----> Agle quick reboot par sirf corrupted cluster spot ko 10 second me fix karne ke liye.

// 123. Clear-Disk -Number 1 -RemoveData -Confirm:$false -----> Disk ko poori tarah wipe/clean karne ke liye (Decommissioning ke waqt).


// ================================================================================


// ========================================= 17. Windows vs Linux Commands Comparison (Complete Farq) ============ //
// ================================================================================

// --- NETWORKING ---
// 1. IP Address Check -----> Windows: ipconfig /all (ya Get-NetIPAddress)           | Linux: ip a
// 2. Default Route / Gateway -----> Windows: route print (ya Get-NetRoute)                 | Linux: ip route
// 3. DNS Cache Clear -----> Windows: ipconfig /flushdns (ya Clear-DnsClientCache)  | Linux: sudo resolvectl flush-caches
// 4. Route Path Trace -----> Windows: tracert google.com                            | Linux: traceroute google.com
// 5. Open Listening Ports -----> Windows: netstat -ano (ya Get-NetTCPConnection)        | Linux: ss -tulnp
// 6. Specific Port Test -----> Windows: Test-NetConnection -ComputerName <IP> -Port <P> | Linux: nc -zv <IP> <Port>
// 7. ARP Table (IP se MAC) -----> Windows: arp -a (ya Get-NetNeighbor)                   | Linux: ip neigh

// --- SYSTEM & PROCESSES ---
// 8. Service Status Check -----> Windows: Get-Service -Name <service> (ya sc query)     | Linux: systemctl status <service>
// 9. Service Restart -----> Windows: Restart-Service -Name <service> -Force        | Linux: sudo systemctl restart <service>
// 10. Running Processes Dekhna -----> Windows: tasklist (ya Get-Process)                     | Linux: ps aux (ya top / htop)
// 11. Process Kill Karna -----> Windows: taskkill /F /PID <PID> (ya Stop-Process)      | Linux: kill -9 <PID> (ya pkill -9)
// 12. Disk Space Check -----> Windows: Get-PSDrive -PSProvider FileSystem            | Linux: df -h

// --- BASIC TERMINAL & FILES ---
// 13. Files / Folders List -----> Windows: dir (ya Get-ChildItem)                        | Linux: ls -la
// 14. Terminal Screen Clear -----> Windows: cls (ya Clear-Host / Ctrl + L)                | Linux: clear (Ctrl + L)
// 15. System Reboot / Restart -----> Windows: Restart-Computer -Force                       | Linux: sudo reboot
// 16. Search Inside File (Grep) -----> Windows: Select-String                                 | Linux: grep
// 17. Live Log Follow (Tail) -----> Windows: Get-Content -Wait                             | Linux: tail -f
// 18. Empty File Create -----> Windows: New-Item -ItemType File                       | Linux: touch <file>
// 19. Empty Trash / Cache -----> Windows: Clear-RecycleBin -Force                       | Linux: rm -rf ~/.cache/* ~/.local/share/Trash/*
// 20. Package Install / Update -----> Windows: winget upgrade --all / winget install         | Linux: sudo apt update && sudo apt upgrade -y


// ================================================================================


// ========================================= 18. Dono Me Technically Kya Farq Hai? =============================== //
// ================================================================================

// 1. Output Format -----> PowerShell '.NET Objects' return karta hai (properties filter karna super asaan hai). Linux plain text string stream deta hai (jisme grep, awk lagana padta hai).

// 2. Admin Rights -----> Windows me terminal ko 'Run as Administrator' kholna padta hai. Linux me kisi bhi command ke aage 'sudo' lagate hain.

// 3. Case Sensitive -----> Windows PowerShell case-insensitive hai (Get-Service aur get-service me koi farq nahi). Linux strictly case-sensitive hai.

// 4. Path Format -----> Windows file system me backslash (\) use karta hai (C:\Windows\System32). Linux forward slash (/) use karta hai (/var/log).

// 5. Cross-Platform -----> Pehle PowerShell sirf Windows par chalta tha (v5.1). Ab open-source PowerShell Core (pwsh v7+) Windows, Linux aur macOS teeno par chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================

