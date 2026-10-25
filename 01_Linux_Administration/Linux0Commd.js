// ========================================= Enterprise Linux Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Complete Beginner to Advanced Floor Cheatsheet (Dubai, Gulf & Corporate)
// ================================================================================

// ========================================= Linux in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Linux enterprise servers, airport kiosks, firewalls aur cloud instances ka primary OS hai.
// 2. Desktop & Systems Support me Linux ka kaam: Terminal se software update, deep junk clean, IP assign/delete, services bounce, processes kill, logs inspect, disk free, aur permissions manage karna hota hai.
// 3. Format: Main-main core commands upar hain, fir advanced IP/Routing/Files hain, aur aakhri me Windows vs Linux ka comparison hai. Har command seedha '1 Line' format me hai!

// ================================================================================


// ========================================= 1. System Update, Upgrade & Deep Junk Cleaning ===================== //
// ================================================================================

// 1. sudo apt update && sudo apt upgrade -y   -----> Software repositories ko refresh karke safe security patches aur updates download/install karne ke liye (Hafte me 1-2 baar).

// 2. sudo apt autoremove -y                   -----> System se un-used purani libraries, unneeded kernels aur faltu dependencies ko clean karne ke liye.

// 3. sudo apt autoclean                       -----> Un software packages ki purani installer (.deb) cache ko delete karne ke liye jo ab internet par nahi hain.

// 4. sudo apt clean                           -----> `/var/cache/apt/archives` me bhari hui sabhi downloaded (.deb) installer files ko delete karke GBs of disk space bachane ke liye.

// 5. sudo journalctl --vacuum-time=3d         -----> 3 din se purane sabhi binary systemd logs ko permanently delete karke disk space khali karne ke liye.

// 6. rm -rf ~/.cache/*                        -----> Current user ke cache folder me bhari temporary junk files ko delete karne ke liye.

// 7. rm -rf ~/.local/share/Trash/*            -----> Terminal se Linux desktop ke Recycle Bin (Trash) ko permanently khali (empty) karne ke liye.

// 8. Deep Clean One-Liner (The Master Clean):
//    sudo apt autoremove -y && sudo apt autoclean && sudo apt clean && sudo journalctl --vacuum-time=3d && rm -rf ~/.cache/* && rm -rf ~/.local/share/Trash/*


// ================================================================================


// ========================================= 2. Directory Navigation & Super Terminal Shortcuts ================= //
// ================================================================================

// 9. pwd                                      -----> Print Working Directory: Aap is waqt kis folder ke andar baithe hain uska poora path dekhne ke liye.

// 10. ls -la                                  -----> Hidden files (jaise .env, .git) samet saari files ke permissions (rwx), owner aur size list dekhne ke liye.

// 11. cd <folder_name>                        -----> Kisi specific folder ke andar enter/move hone ke liye (e.g. cd /var/log).

// 12. cd ..                                   -----> Current folder se ek step peeche (Parent folder me) wapas aane ke liye.

// 13. cd ~                                    -----> Seedha current logged-in user ke home directory (`/home/username`) par jump karne ke liye.

// 14. cd /                                    -----> Linux ke root directory (sabse pehle master folder) me jump karne ke liye.

// 15. history                                 -----> Terminal par pehle run ki gayi saari purani commands ki number-wise list dekhne ke liye.

// 16. history | grep <cmd>                    -----> Purani history me se kisi specific command ko dhoondne ke liye.

// 17. Super Terminal Shortcuts (Floor Daily Speed):
//     - [Tab]                                 -----> File ya folder ka naam automatically pura (auto-complete) karne ke liye.
//     - [Ctrl + C]                            -----> Terminal par chal rahi command, script ya infinite loop ko forcefully stop/cancel karne ke liye.
//     - [Ctrl + L]                            -----> Terminal screen ko 1 second me clear (saaf) karne ke liye (same as `clear` command).
//     - [Ctrl + R]                            -----> Purani run ki gayi command ko reverse-search karke recall karne ke liye.


// ================================================================================


// ========================================= 3. Files & Folder Creation (Create, Copy, Remove) ================== //
// ================================================================================

// 18. touch <filename>                        -----> Nayi blank empty file create karne ke liye (e.g. touch index.js ya touch Dockerfile).

// 19. mkdir <folder_name>                     -----> Naya folder (directory) create karne ke liye.

// 20. mkdir -p app/src/data                   -----> Nested folders (folder ke andar folder) ko ek single command me create karne ke liye (-p flag).

// 21. cp file.txt backup.txt                  -----> Single file ko duplicate/copy karne ke liye.

// 22. cp -r /source_dir /dest_dir             -----> Poore folder aur uske andar ke sub-folders ko recursively copy karne ke liye (-r flag).

// 23. rm <file>                               -----> File ko permanently delete karne ke liye.

// 24. rm -rf <folder>                         -----> Kisi folder aur uske andar ke saare contents ko bina prompt ke forcefully delete karne ke liye (Caution!).

// 25. mv <old_name> <new_name>                -----> File ya folder ko rename karne ya ek jagah se doosri jagah move karne ke liye.


// ================================================================================


// ========================================= 4. File Viewing & Live Log Inspection ============================== //
// ================================================================================

// 26. cat <file>                              -----> Chhoti file ka saara content screen par ek baar me print karke padhne ke liye.

// 27. head -n 10 <file>                       -----> File ki shuruwaat ki pehli 10 lines print karne ke liye (jaldi se header dekhne ke liye).

// 28. tail -n 20 <file>                       -----> File ki aakhri 20 lines print karne ke liye.

// 29. tail -f /var/log/syslog                 -----> Live Log Monitoring: Operating system aur hardware ke naye aane wale logs real-time me screen par follow karne ke liye.

// 30. tail -f /var/log/auth.log               -----> Failed SSH logins, unauthorized password attempts aur sudo command usage real-time me track karne ke liye.

// 31. grep "error" /var/log/app.log           -----> File ya log ke andar kisi specific word (jaise 'error' ya 'failed') ko search karke nikalne ke liye.

// 32. grep -rn "error" /var/log/              -----> Poore folder ki sabhi files me recursive search karke exact line number ke sath error dhoondne ke liye.


// ================================================================================


// ========================================= 5. Services Control (systemd Daemons) ============================== //
// ================================================================================

// 33. systemctl status <service>              -----> Service active (running) hai ya dead/failed check karne ke liye (e.g. systemctl status nginx).

// 34. sudo systemctl restart <service>        -----> Stuck ya crash hui background service ko turant restart (bounce) karne ke liye.

// 35. sudo systemctl start <service>          -----> Kisi band (stopped) service ko chalu karne ke liye.

// 36. sudo systemctl stop <service>           -----> Kisi running service ko safe tareeqe se band karne ke liye.

// 37. sudo systemctl enable <service>         -----> Server reboot hone ke baad service apne aap auto-start ho jaye, yeh set karne ke liye.

// 38. sudo systemctl disable <service>        -----> Boot time par service ko auto-start hone se rokne ke liye.

// 39. systemctl --failed                      -----> Server par jitni bhi crashed ya failed services hain unki list 1 second me dekhne ke liye.

// 40. sudo systemctl daemon-reload            -----> Nayi ya modified service configuration files ko reload karne ke liye.

// 41. journalctl -u <service> -n 50 --no-pager -----> Service ke aakhri 50 crash logs screen freeze hue bina dekhne ke liye.

// 42. journalctl -xe                         -----> Systemd ke detailed error logs aur recent boot/service failure reasons dekhne ke liye.


// ================================================================================


// ========================================= 6. Process Management (ps, top, kill) =============================== //
// ================================================================================

// 43. ps aux                                  -----> System me chal rahe saare background processes aur unke Process ID (PID) dekhne ke liye.

// 44. ps aux | grep <name>                    -----> Kisi specific software (jaise chrome, java, nginx) ka PID dhoondne ke liye.

// 45. top                                     -----> Real-time interactive CPU aur Memory consumption dekhne ke liye (CLI Task Manager, exit ke liye 'q' dabayein).

// 46. htop                                    -----> Colorful modern task manager jisme mouse scroll aur F9 se kill karna asaan hota hai.

// 47. sudo kill -9 <PID>                      -----> Hanging ya frozen software ko uski PID se zabardasti (forcefully) band karne ke liye.

// 48. sudo pkill -9 -f <name>                 -----> Software ke naam se uske saare child processes ko ek jhatke me kill karne ke liye.

// 49. ps aux --sort=-%cpu | head -n 6        -----> Top 5 sabse zyada CPU khane wale programs filter karne ke liye.

// 50. ps aux --sort=-%mem | head -n 6        -----> Top 5 sabse zyada RAM (Memory) khane wale programs filter karne ke liye.


// ================================================================================


// ========================================= 7. Storage & Memory Telemetry (df, du, free) ======================= //
// ================================================================================

// 51. df -h                                  -----> Hard disk ke sabhi partitions ka free aur used space human-readable (GB/MB) me dekhne ke liye.

// 52. df -i                                  -----> Disk par Inodes usage check karne ke liye (Storage hote hue bhi "No space left" issue dhoondna).

// 53. free -h                                -----> Server ki Total, Used aur Available RAM human-readable format (GB/MB) me check karne ke liye.

// 54. free -m                                -----> Server ki Total, Used aur Available RAM exact Megabytes (MB) me check karne ke liye.

// 55. du -sh *                               -----> Current folder ke andar kaun sa sub-folder sabse zyada space kha raha hai uska size dekhne ke liye.

// 56. sudo truncate -s 0 <file.log>          -----> 100% full disk hone par bina service band kiye giant log file ko turant 0 byte (empty) karne ke liye.

// 57. lsblk                                  -----> Hard drive ke sabhi physical disks aur unke partitions ka tree block layout dekhne ke liye.


// ================================================================================


// ========================================= 8. Network IP Configuration & Routing (Beginner to Advance) ========= //
// ================================================================================

// 58. ip a                                   -----> Machine ka local IP address, subnet mask aur network card state dekhne ke liye (ip addr show).

// 59. sudo ip addr add 192.168.1.50/24 dev eth0 -----> Specific network card (eth0) par naya IP address assign/add karne ke liye via CLI.

// 60. sudo ip addr del 192.168.1.50/24 dev eth0 -----> Network card se IP address ko delete/remove karne ke liye via CLI.

// 61. sudo ip link set eth0 up               -----> Network interface card ko enable (chalu) karne ke liye.

// 62. sudo ip link set eth0 down             -----> Network interface card ko disable (band) karne ke liye.

// 63. ip route show                          -----> System ka default gateway aur routing table dekhne ke liye (ip r).

// 64. sudo ip route add default via 192.168.1.1 dev eth0 -----> Network card par default gateway add/set karne ke liye.

// 65. sudo ip route del default              -----> Purane default gateway ko route table se delete karne ke liye.

// 66. sudo ip neigh                          -----> Local network me judey devices ke IP se physical MAC address table (ARP) dekhne ke liye.

// 67. nmcli device status                    -----> NetworkManager ke zariye sabhi interfaces (Wi-Fi, Ethernet) ka status dekhne ke liye.

// 68. sudo nmcli connection up "Wired connection 1" -----> Network connection ko restart ya reconnect karne ke liye.

// 69. sudo resolvectl flush-caches           -----> Modern Ubuntu system par local DNS cache ko flush (clean) karne ke liye.

// 70. ping -c 4 8.8.8.8                      -----> Network connectivity aur packet drop check karne ke liye (4 packets bhejta hai).

// 71. traceroute <IP/Domain>                 -----> Packet destination tak kis-kis router (hop) se hokar ja raha hai aur kahan delay hai trace karne ke liye.

// 72. sudo ss -tulnp                         -----> Server par kaun-kaun se TCP/UDP ports open hain aur kaun sa process/PID chal raha hai dekhne ke liye.

// 73. netstat -tulnp                         -----> Classic network listening ports aur connected sockets dekhne ke liye.

// 74. nc -zv <IP> <Port>                     -----> Remote server ka specific TCP port open hai ya firewall ne block kiya hai test karne ke liye (Netcat).

// 75. curl -Iv <URL>                         -----> Website ka HTTP response status code (200 OK, 404, 502) aur SSL certificate verify karne ke liye.

// 76. curl -I http://localhost:3000          -----> Check karna ki local web application port active hai aur HTTP 200 return kar raha hai ya nahi.

// 77. wget <URL>                             -----> Internet se koi bhi file, driver ya package direct command line se download karne ke liye.

// 78. scp file.txt user@192.168.1.50:/tmp/   -----> Secure Copy protocol se ek Linux PC se doosre remote PC par file transfer karne ke liye.

// 79. sudo ufw status                        -----> Ubuntu Uncomplicated Firewall ka active status aur open rules dekhne ke liye.

// 80. sudo ufw allow 22/tcp                  -----> Firewall me SSH port 22 ko open (allow) karne ke liye.

// 81. sudo ufw deny from 192.168.1.150       -----> Malicious attacker IP ko firewall par block karne ke liye.


// ================================================================================


// ========================================= 9. Permissions, Users & Sudo Rights ================================= //
// ================================================================================

// 82. chmod +x <script.sh>                   -----> Script ya installer file ko chalne ke liye 'Executable' permission dene ke liye.

// 83. ./deploy.sh                            -----> Current folder ke andar maujood executable script ko terminal par execute/run karne ke liye.

// 84. chmod 755 <folder>                     -----> Folder ko standard rights dene ke liye (Owner ko Full, baaki sabko Read+Execute).

// 85. chmod 644 <file>                       -----> File ko standard rights dene ke liye (Owner ko Read+Write, baaki sabko Read-Only).

// 86. sudo chown user:group <file>           -----> File ya folder ka legal Owner aur Group badalne ke liye.

// 87. sudo chown -R user:group <dir>         -----> Folder aur uske andar ke saare sub-folders/files ka owner recursively badalne ke liye.

// 88. sudo useradd -m -s /bin/bash <user>    -----> System par naya user account uska home directory ke sath create karne ke liye.

// 89. sudo userdel -r <user>                 -----> User account aur uski home directory ko system se permanently delete karne ke liye.

// 90. sudo passwd <user>                     -----> Kisi user ka login password set ya reset karne ke liye.

// 91. sudo passwd -l <user>                  -----> User account ko lock (disable) karne ke liye (Employee exit ke waqt).

// 92. sudo passwd -u <user>                  -----> Locked user account ko wapas unlock karne ke liye.

// 93. sudo usermod -aG sudo <user>           -----> Normal user ko Admin (sudo) privileges dene ke liye (Ubuntu).

// 94. sudo visudo                            -----> `/etc/sudoers` file ko bina syntax error ke safely edit karne ke liye.


// ================================================================================


// ========================================= 10. Archive, Time, Cron & System Information ======================== //
// ================================================================================

// 95. tar -czvf backup.tar.gz /data/         -----> Folder ko compress karke `.tar.gz` archive backup file banane ke liye.

// 96. tar -xzvf backup.tar.gz                -----> Compressed `.tar.gz` archive file ko un-compress (extract) karne ke liye.

// 97. hostnamectl                            -----> Server ka current hostname, OS architecture aur kernel version dekhne ke liye.

// 98. sudo hostnamectl set-hostname <name>   -----> Server ya kiosk PC ka computer name change karne ke liye.

// 99. timedatectl                            -----> System time, time zone aur NTP synchronization status dekhne ke liye.

// 100. sudo timedatectl set-timezone Asia/Dubai -----> System time zone ko Dubai (Gulf) time par set karne ke liye.

// 101. crontab -l                            -----> System par kaun se scheduled automated tasks (backup/clean) set hain unhe dekhne ke liye.

// 102. crontab -e                            -----> Naya automated schedule add ya edit karne ke liye (5-star syntax: Minute Hour Day Month Week).

// 103. sudo dmesg -T                         -----> Kernel boot events aur newly plugged USB/Hardware detection logs timestamp ke sath dekhne ke liye.


// ================================================================================


// ========================================= 11. Critical Linux File System Paths =============================== //
// ================================================================================

// 104. /etc                           -----> System aur applications ki configuration files ka folder (e.g. /etc/hosts, /etc/passwd).

// 105. /etc/hosts                     -----> Local DNS mapping file (IP se hostname manually map karne ke liye).

// 106. /etc/resolv.conf               -----> System ke active DNS nameservers ki configuration file.

// 107. /var/log                       -----> Operating system aur services ke crash aur event logs ka main folder.

// 108. /home                          -----> Standard users ka personal data, documents aur desktop files store karne ki jagah.

// 109. /tmp                           -----> Temporary files ka folder (System reboot hone par automatically delete ho jata hai).

// 110. /opt                           -----> Third-party enterprise applications aur custom software store karne ka folder.


// ================================================================================


// ========================================= 12. Windows vs Linux Commands Comparison (Complete Farq) ============ //
// ================================================================================

// --- NETWORKING ---
// 1. IP Address Check          -----> Linux: ip a                             | Windows: ipconfig /all (ya Get-NetIPAddress)
// 2. Default Route / Gateway   -----> Linux: ip route                         | Windows: route print (ya Get-NetRoute)
// 3. DNS Cache Clear           -----> Linux: sudo resolvectl flush-caches     | Windows: ipconfig /flushdns (ya Clear-DnsClientCache)
// 4. Route Path Trace          -----> Linux: traceroute google.com            | Windows: tracert google.com
// 5. Open Listening Ports      -----> Linux: ss -tulnp                        | Windows: netstat -ano
// 6. Specific Port Test        -----> Linux: nc -zv <IP> <Port>               | Windows: Test-NetConnection -ComputerName <IP> -Port <P>
// 7. ARP Table (IP se MAC)     -----> Linux: ip neigh                         | Windows: arp -a

// --- SYSTEM & PROCESSES ---
// 8. Service Status Check      -----> Linux: systemctl status <service>       | Windows: Get-Service -Name <service> (ya sc query)
// 9. Service Restart           -----> Linux: sudo systemctl restart <service> | Windows: Restart-Service -Name <service> -Force
// 10. Running Processes Dekhna -----> Linux: ps aux (ya top / htop)           | Windows: tasklist (ya Get-Process)
// 11. Process Kill Karna       -----> Linux: kill -9 <PID> (ya pkill -9)      | Windows: taskkill /F /PID <PID> (ya Stop-Process)
// 12. Disk Space Check         -----> Linux: df -h                            | Windows: Get-PSDrive -PSProvider FileSystem

// --- BASIC TERMINAL & FILES ---
// 13. Files / Folders List     -----> Linux: ls -la                           | Windows: dir (ya Get-ChildItem)
// 14. Terminal Screen Clear    -----> Linux: clear (Ctrl + L)                 | Windows: cls (ya Clear-Host)
// 15. System Reboot / Restart  -----> Linux: sudo reboot                      | Windows: Restart-Computer -Force
// 16. Search Inside File (Grep)-----> Linux: grep                             | Windows: Select-String
// 17. Live Log Follow (Tail)   -----> Linux: tail -f                          | Windows: Get-Content -Wait
// 18. Empty File Create        -----> Linux: touch <file>                     | Windows: New-Item -ItemType File
// 19. Deep Clean Trash / Cache -----> Linux: rm -rf ~/.cache/* ~/.local/share/Trash/* | Windows: Clear-RecycleBin -Force


// ================================================================================


// ========================================= 13. Dono Me Technically Kya Farq Hai? ============================== //
// ================================================================================

// 1. Output Format   -----> Linux plain text string stream deta hai (jisme grep, awk, sed lagana padta hai). Windows PowerShell '.NET Objects' return karta hai.

// 2. Admin Rights    -----> Linux me kisi bhi command ke aage 'sudo' lagate hain. Windows me terminal ko 'Run as Administrator' kholna padta hai.

// 3. Case Sensitive  -----> Linux strictly case-sensitive hai (File.txt aur file.txt alag hain). Windows PowerShell case-insensitive hai.

// 4. Path Format     -----> Linux forward slash (/) use karta hai (/var/log). Windows file system me backslash (\) use karta hai (C:\Windows\System32).

// 5. Cross-Platform  -----> Pehle PowerShell sirf Windows par tha, ab open-source pwsh 7+ Linux par bhi chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
