// ========================================= PowerShell Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Fast Floor Cheatsheet (Corporate, Airports & MSPs)
// ================================================================================

// ========================================= PowerShell (CLI) Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. PowerShell Windows operating system ka modern object-oriented command-line shell hai jo .NET framework par chalta hai.
// 2. Normal CMD plain text deta hai jisme filtering mushkil hoti hai, jabki PowerShell rich structured ".NET Objects" return karta hai jisse troubleshooting super-fast hoti hai.
// 3. Linux ki tarah yahan bhi har core command seedha '1 Line' format me likhi gayi hai taaki floor par daily fast use aur interview me quick revision ho sake.

// ================================================================================


// ========================================= 1. Network & Port Diagnostics ====================================== //
// ================================================================================

// 1. Test-NetConnection -ComputerName <IP/Domain> -Port <Port> -----> Specific TCP port open hai ya firewall ne block kiya hai check karne ke liye (TcpTestSucceeded: True/False).

// 2. Test-NetConnection -ComputerName <IP/Domain>              -----> Fast network ping aur reachability check karne ke liye (PingSucceeded: True/False).

// 3. Test-NetConnection -ComputerName <Host> -Port 80 -InformationLevel Detailed -----> Detailed route trace, network latency aur interface alias nikalne ke liye.

// 4. Test-Connection -ComputerName 8.8.8.8 -Count 4           -----> Modern object-oriented ping packet drop aur response time check karne ke liye.

// 5. Test-Connection -ComputerName 8.8.8.8 -Count 20 | Select Address, ResponseTime -----> Network jitter aur micro packet drops trace karne ke liye.

// 6. Get-NetIPAddress -AddressFamily IPv4                      -----> Machine ke sabhi network adapters ke live IPv4 addresses aur subnets dekhne ke liye (ipconfig replacement).

// 7. Get-NetAdapter                                           -----> Physical Ethernet aur Wi-Fi cards ki link state (Up/Disabled), link speed (1Gbps/100Mbps) aur MAC address dekhne ke liye.

// 8. Restart-NetAdapter -Name "Ethernet"                      -----> Bina PC reboot kiye network card ke driver aur DHCP lease ko cleanly reload karne ke liye.

// 9. Clear-DnsClientCache                                     -----> Corrupt ya purane local DNS cache ko flush (clean) karne ke liye (ipconfig /flushdns equivalent).

// 10. Resolve-DnsName -Name google.com                        -----> Modern object-oriented DNS lookup test karne ke liye (nslookup replacement).

// 11. Resolve-DnsName -Name portal.local -Server 192.168.1.10 -----> Specific internal DNS server se query karke record verify karne ke liye.


// ================================================================================


// ========================================= 2. Services Management (Background Daemons) ======================== //
// ================================================================================

// 12. Get-Service -Name <service>                             -----> Background service running hai ya stopped check karne ke liye (e.g. Get-Service -Name Spooler).

// 13. Get-Service -Name *print*                               -----> Wildcard search se service ka exact technical naam dhoondne ke liye.

// 14. Restart-Service -Name <service> -Force                  -----> Atki hui background service ko uske dependent services ke sath bina GUI khole restart karne ke liye.

// 15. Start-Service -Name <service>                           -----> Kisi band hui (stopped) background service ko start karne ke liye.

// 16. Stop-Service -Name <service> -Force                     -----> Kisi running background service ko zabardasti band karne ke liye.

// 17. Set-Service -Name <service> -StartupType Automatic      -----> Service ka startup type badal kar Automatic set karne ke liye via CLI.

// 18. Get-Service | Where-Object {$_.StartType -eq "Automatic" -and $_.Status -eq "Stopped"} -----> Server par sabhi crashed automatic services ko 1 second me dhoondne ke liye.


// ================================================================================


// ========================================= 3. Process Management & Force Kill ================================= //
// ================================================================================

// 19. Get-Process                                             -----> System me chal rahe saare live programs, worker processes aur unke PID dekhne ke liye.

// 20. Get-Process -Name chrome                                -----> Specific application background me chal rahi hai ya nahi check karne ke liye.

// 21. Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 -----> Top 5 sabse zyada CPU khane wale programs filter karne ke liye.

// 22. Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 -----> Top 5 sabse zyada RAM (Memory) khane wale software filter karne ke liye.

// 23. (Get-Process -Name svchost).Path                        -----> Suspicious background process ka exact file path trace karne ke liye (Malware detection).

// 24. Stop-Process -Name chrome -Force                        -----> Freeze hue software ko uske naam se zabardasti band (kill) karne ke liye.

// 25. Stop-Process -Id <PID> -Force                           -----> Specific Process ID par surgical strike karke sirf usi hanging tab/window ko kill karne ke liye.

// 26. Stop-Process -Name excel -Force -PassThru               -----> Kill hone ke baad console par live confirmation object dekhne ke liye.


// ================================================================================


// ========================================= 4. System Forensic, Hardware & Updates ============================ //
// ================================================================================

// 27. Get-HotFix                                              -----> Installed Windows Security updates aur latest KB patches ki list dekhne ke liye.

// 28. Get-HotFix | Sort-Object InstalledOn -Descending | Select -First 5 -----> Aakhri 5 updates dekhna (jab user bole "Kal update ke baad problem shuru hui").

// 29. Get-ComputerInfo                                        -----> PC ka model name, OS build, total RAM aur BIOS details dekhne ke liye.

// 30. (Get-CimInstance -ClassName Win32_BIOS).SerialNumber     -----> Laptop/Desktop ka official Dell Service Tag ya Serial Number warranty ke liye nikalne ke liye.

// 31. Get-CimInstance -ClassName Win32_PhysicalMemory         -----> Physical RAM sticks, speed (MHz) aur khali slots check karne ke liye bina cabinet khole.

// 32. (Get-CimInstance -ClassName Win32_OperatingSystem).LastBootUpTime -----> System ka exact boot uptime check karna (jab user jhoot bole ki "Maine reboot kiya").

// 33. Get-PSDrive -PSProvider FileSystem                      -----> Sabhi hard drive partitions ka free aur used storage space dekhne ke liye.


// ================================================================================


// ========================================= 5. Remote Fleet Management & Active Directory ===================== //
// ================================================================================

// 34. Restart-Computer -Force                                 -----> Local system ko CLI se forcefully reboot karne ke liye.

// 35. Restart-Computer -ComputerName <RemotePC> -Force        -----> Remote kiosk, counter PC ya billing terminal ko bina desk par jaye CLI se reboot karne ke liye.

// 36. Invoke-Command -ComputerName <RemotePC> -ScriptBlock { Restart-Service -Name Spooler -Force } -----> WinRM ke zariye remote PC par command chalane ke liye.

// 37. Test-WsMan <RemotePC>                                   -----> Verify karna ki remote machine par Windows Remote Management (Port 5985) open hai ya nahi.

// 38. Get-ADUser -Identity <user> -Properties *               -----> Active Directory user ka status, password set date aur lockout check karne ke liye.

// 39. Unlock-ADAccount -Identity <user>                       -----> Locked Active Directory user ko CLI se 1 second me unlock karne ke liye.

// 40. Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 10 -----> Machine par aakhri 10 Failed Logon attempts (Event ID 4625) filter karne ke liye.


// ================================================================================


// ========================================= 6. Windows vs Linux Commands Comparison (Complete Farq) ============= //
// ================================================================================

// --- NETWORKING ---
// 1. IP Address Check          -----> Windows: ipconfig /all (ya Get-NetIPAddress)           | Linux: ip a
// 2. Default Route / Gateway   -----> Windows: route print (ya Get-NetRoute)                 | Linux: ip route
// 3. DNS Cache Clear           -----> Windows: ipconfig /flushdns (ya Clear-DnsClientCache)  | Linux: sudo resolvectl flush-caches
// 4. Route Path Trace          -----> Windows: tracert google.com                            | Linux: traceroute google.com
// 5. Open Listening Ports      -----> Windows: netstat -ano                                  | Linux: ss -tulnp
// 6. Specific Port Test        -----> Windows: Test-NetConnection -ComputerName <IP> -Port <P> | Linux: nc -zv <IP> <Port>
// 7. ARP Table (IP se MAC)     -----> Windows: arp -a                                        | Linux: ip neigh

// --- SYSTEM & PROCESSES ---
// 8. Service Status Check      -----> Windows: Get-Service -Name <service> (ya sc query)     | Linux: systemctl status <service>
// 9. Service Restart           -----> Windows: Restart-Service -Name <service> -Force        | Linux: sudo systemctl restart <service>
// 10. Running Processes Dekhna -----> Windows: tasklist (ya Get-Process)                     | Linux: ps aux (ya top / htop)
// 11. Process Kill Karna       -----> Windows: taskkill /F /PID <PID> (ya Stop-Process)      | Linux: kill -9 <PID> (ya pkill -9)
// 12. Disk Space Check         -----> Windows: Get-PSDrive -PSProvider FileSystem            | Linux: df -h

// --- BASIC TERMINAL ---
// 13. Files / Folders List     -----> Windows: dir (ya Get-ChildItem)                        | Linux: ls -la
// 14. Terminal Screen Clear    -----> Windows: cls (ya Clear-Host)                           | Linux: clear
// 15. System Reboot / Restart  -----> Windows: Restart-Computer -Force                       | Linux: sudo reboot


// ================================================================================


// ========================================= 7. Dono Me Technically Kya Farq Hai? =============================== //
// ================================================================================

// 1. Output Format   -----> PowerShell '.NET Objects' return karta hai (properties filter karna super asaan hai). Linux plain text string stream deta hai (jisme grep, awk lagana padta hai).

// 2. Admin Rights    -----> Windows me terminal ko 'Run as Administrator' kholna padta hai. Linux me kisi bhi command ke aage 'sudo' lagate hain.

// 3. Case Sensitive  -----> Windows PowerShell case-insensitive hai (Get-Service aur get-service me koi farq nahi). Linux strictly case-sensitive hai.

// 4. Path Format     -----> Windows file system me backslash (\) use karta hai (C:\Windows\System32). Linux forward slash (/) use karta hai (/var/log).

// 5. Cross-Platform  -----> Pehle PowerShell sirf Windows par chalta tha (v5.1). Ab open-source PowerShell Core (pwsh v7+) Windows, Linux aur macOS teeno par chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
