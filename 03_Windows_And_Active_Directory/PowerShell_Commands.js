// ========================================= PowerShell Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Complete Beginner to Advanced Floor Cheatsheet (Corporate, Airports & MSPs)
// ================================================================================

// ========================================= PowerShell (CLI) Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. PowerShell Windows operating system ka modern object-oriented command-line shell aur automation tool hai jo .NET framework par chalta hai.
// 2. Normal CMD plain text deta hai jisme data filter karna mushkil hota hai, jabki PowerShell rich structured ".NET Objects" return karta hai jisse troubleshooting super-fast hoti hai.
// 3. Format: Main-main core commands upar hain, fir advanced IP/Routing/File/Firewall commands hain, aur aakhri me Windows vs Linux ka comparison hai. Har command seedha '1 Line' format me hai!

// ================================================================================


// ========================================= 1. Network & Port Diagnostics (Top Daily Drivers) =================== //
// ================================================================================

// 1. Test-NetConnection -ComputerName <IP/Domain> -Port <Port> -----> Specific TCP port open hai ya firewall ne block kiya hai check karne ke liye (TcpTestSucceeded: True/False).

// 2. Test-NetConnection -ComputerName <IP/Domain>              -----> Fast network ping aur reachability check karne ke liye (PingSucceeded: True/False).

// 3. Test-NetConnection -ComputerName <Host> -Port 80 -InformationLevel Detailed -----> Detailed route trace, round-trip latency aur interface alias nikalne ke liye.

// 4. Test-Connection -ComputerName 8.8.8.8 -Count 4           -----> Modern object-oriented ping packet drop aur response time check karne ke liye.

// 5. Test-Connection -ComputerName 8.8.8.8 -Count 20 | Select Address, ResponseTime -----> Network jitter aur micro packet drops trace karne ke liye.

// 6. Clear-DnsClientCache                                     -----> Corrupt ya purane local DNS cache ko flush (clean) karne ke liye (ipconfig /flushdns equivalent).

// 7. Resolve-DnsName -Name google.com                        -----> Modern object-oriented DNS lookup test karne ke liye (nslookup replacement).

// 8. Resolve-DnsName -Name portal.local -Server 192.168.1.10 -----> Specific internal DNS server se query karke record verify karne ke liye.

// 9. Get-NetTCPConnection -State Listen                       -----> System par kaun kaun se TCP ports actively listen kar rahe hain unhe dekhne ke liye (netstat -ano replacement).


// ================================================================================


// ========================================= 2. Network IP Configuration & Routing (Beginner to Advance) ========= //
// ================================================================================

// 10. Get-NetIPAddress -AddressFamily IPv4                    -----> Machine ke sabhi network adapters ke live IPv4 addresses, subnets aur interface aliases dekhne ke liye.

// 11. Get-NetIPConfiguration                                  -----> IP address, Default Gateway, DNS Servers aur interface name ka clean summary dekhne ke liye.

// 12. New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.1.50 -PrefixLength 24 -DefaultGateway 192.168.1.1 -----> Network adapter par naya Static IP aur Gateway assign karne ke liye via CLI.

// 13. Remove-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.1.50 -Confirm:$false -----> Network adapter se IP address ko delete/remove karne ke liye via CLI.

// 14. Set-NetIPInterface -InterfaceAlias "Ethernet" -Dhcp Enabled -----> Adapter ko Static IP se hata kar wapas Automatic (DHCP) mode par daalne ke liye.

// 15. Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("8.8.8.8","8.8.4.4") -----> Network card par DNS servers (Google DNS) manually set karne ke liye via CLI.

// 16. Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ResetServerAddresses -----> DNS server ko reset karke wapas router/DHCP se automatic lene ke liye.

// 17. Get-NetAdapter                                          -----> Physical Ethernet aur Wi-Fi cards ki link state (Up/Disabled), link speed (1Gbps/100Mbps) aur MAC address dekhne ke liye.

// 18. Disable-NetAdapter -Name "Ethernet" -Confirm:$false    -----> Network card ko CLI se disable (band) karne ke liye.

// 19. Enable-NetAdapter -Name "Ethernet" -Confirm:$false     -----> Network card ko CLI se wapas enable (chalu) karne ke liye.

// 20. Restart-NetAdapter -Name "Ethernet"                     -----> Bina PC reboot kiye network card ke driver aur DHCP lease ko cleanly reload karne ke liye.

// 21. Get-NetRoute                                            -----> Windows routing table aur active gateways inspect karne ke liye (route print replacement).

// 22. New-NetRoute -DestinationPrefix "10.0.0.0/8" -InterfaceAlias "Ethernet" -NextHop 192.168.1.254 -----> Specific subnet ke liye static route add karne ke liye.

// 23. Remove-NetRoute -DestinationPrefix "10.0.0.0/8" -Confirm:$false -----> Static route ko routing table se delete karne ke liye.

// 24. Get-NetNeighbor -AddressFamily IPv4                     -----> Local network me judey devices ke IP se physical MAC address table (ARP) dekhne ke liye.

// 25. Get-NetFirewallRule | Where-Object {$_.Enabled -eq "True" -and $_.Direction -eq "Inbound"} -----> Active inbound Windows Defender firewall rules inspect karne ke liye.

// 26. New-NetFirewallRule -DisplayName "Allow Port 8080" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow -----> Naya firewall inbound port rule open karne ke liye.


// ================================================================================


// ========================================= 3. Services Management (Background Daemons) ======================== //
// ================================================================================

// 27. Get-Service -Name <service>                             -----> Background service running hai ya stopped check karne ke liye (e.g. Get-Service -Name Spooler).

// 28. Get-Service -Name *print*                               -----> Wildcard search se service ka exact technical naam dhoondne ke liye.

// 29. Restart-Service -Name <service> -Force                  -----> Atki hui background service ko uske dependent services ke sath bina GUI khole restart karne ke liye.

// 30. Start-Service -Name <service>                           -----> Kisi band hui (stopped) background service ko start karne ke liye.

// 31. Stop-Service -Name <service> -Force                     -----> Kisi running background service ko zabardasti band karne ke liye.

// 32. Set-Service -Name <service> -StartupType Automatic      -----> Service ka startup type badal kar Automatic set karne ke liye via CLI.

// 33. Set-Service -Name <service> -StartupType Disabled       -----> Unwanted ya risky service ko boot time par disable karne ke liye.

// 34. Get-Service | Where-Object {$_.StartType -eq "Automatic" -and $_.Status -eq "Stopped"} -----> Server par sabhi crashed automatic services ko 1 second me dhoondne ke liye.


// ================================================================================


// ========================================= 4. Process Management & Force Kill ================================= //
// ================================================================================

// 35. Get-Process                                             -----> System me chal rahe saare live programs, worker processes aur unke PID dekhne ke liye.

// 36. Get-Process -Name chrome                                -----> Specific application background me chal rahi hai ya nahi check karne ke liye.

// 37. Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 -----> Top 5 sabse zyada CPU khane wale programs filter karne ke liye.

// 38. Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 -----> Top 5 sabse zyada RAM (Memory) khane wale software filter karne ke liye.

// 39. (Get-Process -Name svchost).Path                        -----> Suspicious background process ka exact file path trace karne ke liye (Malware detection).

// 40. Stop-Process -Name chrome -Force                        -----> Freeze hue software ko uske naam se zabardasti band (kill) karne ke liye.

// 41. Stop-Process -Id <PID> -Force                           -----> Specific Process ID par surgical strike karke sirf usi hanging tab/window ko kill karne ke liye.

// 42. Stop-Process -Name excel -Force -PassThru               -----> Kill hone ke baad console par live confirmation object dekhne ke liye.

// 43. Wait-Process -Name installer                            -----> Background setup complete hone tak PowerShell execution ko pause/wait karne ke liye.


// ================================================================================


// ========================================= 5. File & Directory Operations (CLI File Management) =============== //
// ================================================================================

// 44. Get-Location                                            -----> Present directory check karne ke liye (pwd equivalent).

// 45. Set-Location -Path "C:\Windows\System32"                -----> Folder ke andar navigate karne ke liye (cd equivalent).

// 46. Get-ChildItem -Path "C:\" -Force                        -----> Hidden files samet saari files aur folders ki list dekhne ke liye (dir / ls equivalent).

// 47. New-Item -Path "C:\IT_Logs" -ItemType Directory         -----> Naya folder create karne ke liye (mkdir equivalent).

// 48. New-Item -Path "C:\IT_Logs\test.txt" -ItemType File -Value "Hello Floor" -----> Nayi text file create karne ke liye content ke sath.

// 49. Remove-Item -Path "C:\IT_Logs" -Recurse -Force          -----> Folder aur uske andar ke saare contents ko forcefully delete karne ke liye (rm -rf equivalent).

// 50. Copy-Item -Path "C:\Data\*" -Destination "D:\Backup\" -Recurse -----> Files aur folders ko dusri drive me copy karne ke liye.

// 51. Move-Item -Path "C:\OldFile.txt" -Destination "C:\NewFile.txt" -----> File ko rename ya move karne ke liye.

// 52. Get-Content -Path "C:\Logs\app.log" -Tail 20            -----> File ki aakhri 20 lines dekhne ke liye.

// 53. Get-Content -Path "C:\Logs\app.log" -Wait               -----> Live real-time log follow karne ke liye (Linux: tail -f equivalent!).

// 54. Select-String -Path "C:\Logs\*.log" -Pattern "Error"    -----> Log files ke andar kisi specific error word ko search karne ke liye (Linux: grep equivalent!).

// 55. Compress-Archive -Path "C:\Data\*" -DestinationPath "C:\Backup.zip" -----> Files ko zip compressed archive banane ke liye.

// 56. Expand-Archive -Path "C:\Backup.zip" -DestinationPath "C:\Extracted\" -----> Zip archive file ko extract/unzip karne ke liye.


// ================================================================================


// ========================================= 6. System Forensic, Hardware & Updates ============================ //
// ================================================================================

// 57. Get-HotFix                                              -----> Installed Windows Security updates aur latest KB patches ki list dekhne ke liye.

// 58. Get-HotFix | Sort-Object InstalledOn -Descending | Select -First 5 -----> Aakhri 5 updates dekhna (jab user bole "Kal update ke baad problem shuru hui").

// 59. Get-ComputerInfo                                        -----> PC ka model name, OS build, total RAM aur BIOS details dekhne ke liye.

// 60. (Get-CimInstance -ClassName Win32_BIOS).SerialNumber     -----> Laptop/Desktop ka official Dell Service Tag ya Serial Number warranty ke liye nikalne ke liye.

// 61. Get-CimInstance -ClassName Win32_PhysicalMemory         -----> Physical RAM sticks, speed (MHz) aur khali slots check karne ke liye bina cabinet khole.

// 62. (Get-CimInstance -ClassName Win32_OperatingSystem).LastBootUpTime -----> System ka exact boot uptime check karna (jab user jhoot bole ki "Maine reboot kiya").

// 63. Get-PSDrive -PSProvider FileSystem                      -----> Sabhi hard drive partitions ka free aur used storage space dekhne ke liye.

// 64. Get-Volume                                              -----> Hard drives ke drive letters, file system (NTFS) aur health status dekhne ke liye.


// ================================================================================


// ========================================= 7. Remote Fleet Management & Active Directory ===================== //
// ================================================================================

// 65. Restart-Computer -Force                                 -----> Local system ko CLI se forcefully reboot karne ke liye.

// 66. Restart-Computer -ComputerName <RemotePC> -Force        -----> Remote kiosk, counter PC ya billing terminal ko bina desk par jaye CLI se reboot karne ke liye.

// 67. Invoke-Command -ComputerName <RemotePC> -ScriptBlock { Restart-Service -Name Spooler -Force } -----> WinRM ke zariye remote PC par command chalane ke liye.

// 68. Test-WsMan <RemotePC>                                   -----> Verify karna ki remote machine par Windows Remote Management (Port 5985) open hai ya nahi.

// 69. Get-ADUser -Identity <user> -Properties *               -----> Active Directory user ka status, password set date aur lockout check karne ke liye.

// 70. Unlock-ADAccount -Identity <user>                       -----> Locked Active Directory user ko CLI se 1 second me unlock karne ke liye.

// 71. Search-ADAccount -LockedOut | Select Name, SamAccountName -----> Poore domain me jitne bhi users is waqt locked hain unki list nikalne ke liye.

// 72. Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 10 -----> Machine par aakhri 10 Failed Logon attempts (Event ID 4625) filter karne ke liye.

// 73. Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 5 -----> System log ke aakhri 5 Critical Errors filter karne ke liye.


// ================================================================================


// ========================================= 8. Windows vs Linux Commands Comparison (Complete Farq) ============= //
// ================================================================================

// --- NETWORKING ---
// 1. IP Address Check          -----> Windows: ipconfig /all (ya Get-NetIPAddress)           | Linux: ip a
// 2. Default Route / Gateway   -----> Windows: route print (ya Get-NetRoute)                 | Linux: ip route
// 3. DNS Cache Clear           -----> Windows: ipconfig /flushdns (ya Clear-DnsClientCache)  | Linux: sudo resolvectl flush-caches
// 4. Route Path Trace          -----> Windows: tracert google.com                            | Linux: traceroute google.com
// 5. Open Listening Ports      -----> Windows: netstat -ano (ya Get-NetTCPConnection)        | Linux: ss -tulnp
// 6. Specific Port Test        -----> Windows: Test-NetConnection -ComputerName <IP> -Port <P> | Linux: nc -zv <IP> <Port>
// 7. ARP Table (IP se MAC)     -----> Windows: arp -a (ya Get-NetNeighbor)                   | Linux: ip neigh

// --- SYSTEM & PROCESSES ---
// 8. Service Status Check      -----> Windows: Get-Service -Name <service> (ya sc query)     | Linux: systemctl status <service>
// 9. Service Restart           -----> Windows: Restart-Service -Name <service> -Force        | Linux: sudo systemctl restart <service>
// 10. Running Processes Dekhna -----> Windows: tasklist (ya Get-Process)                     | Linux: ps aux (ya top / htop)
// 11. Process Kill Karna       -----> Windows: taskkill /F /PID <PID> (ya Stop-Process)      | Linux: kill -9 <PID> (ya pkill -9)
// 12. Disk Space Check         -----> Windows: Get-PSDrive -PSProvider FileSystem            | Linux: df -h

// --- BASIC TERMINAL & FILES ---
// 13. Files / Folders List     -----> Windows: dir (ya Get-ChildItem)                        | Linux: ls -la
// 14. Terminal Screen Clear    -----> Windows: cls (ya Clear-Host)                           | Linux: clear
// 15. System Reboot / Restart  -----> Windows: Restart-Computer -Force                       | Linux: sudo reboot
// 16. Search Inside File (Grep)-----> Windows: Select-String                                 | Linux: grep
// 17. Live Log Follow (Tail)   -----> Windows: Get-Content -Wait                             | Linux: tail -f


// ================================================================================


// ========================================= 9. Dono Me Technically Kya Farq Hai? =============================== //
// ================================================================================

// 1. Output Format   -----> PowerShell '.NET Objects' return karta hai (properties filter karna super asaan hai). Linux plain text string stream deta hai (jisme grep, awk lagana padta hai).

// 2. Admin Rights    -----> Windows me terminal ko 'Run as Administrator' kholna padta hai. Linux me kisi bhi command ke aage 'sudo' lagate hain.

// 3. Case Sensitive  -----> Windows PowerShell case-insensitive hai (Get-Service aur get-service me koi farq nahi). Linux strictly case-sensitive hai.

// 4. Path Format     -----> Windows file system me backslash (\) use karta hai (C:\Windows\System32). Linux forward slash (/) use karta hai (/var/log).

// 5. Cross-Platform  -----> Pehle PowerShell sirf Windows par chalta tha (v5.1). Ab open-source PowerShell Core (pwsh v7+) Windows, Linux aur macOS teeno par chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
