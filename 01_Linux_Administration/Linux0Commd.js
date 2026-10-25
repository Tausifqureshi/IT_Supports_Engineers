// ========================================= Enterprise Linux Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Complete Beginner to Advanced Floor Cheatsheet (Dubai, Gulf & Corporate)
// ================================================================================

// ========================================= Linux in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Linux enterprise servers, airport kiosks, firewalls aur cloud instances ka primary OS hai.
// 2. Desktop & Systems Support me Linux ka kaam: Terminal se IP assign/delete, services bounce, processes kill, logs inspect, disk free, aur permissions manage karna hota hai.
// 3. Format: Main-main core commands upar hain, fir advanced IP/Routing/Files hain, aur aakhri me Windows vs Linux ka comparison hai. Har command seedha '1 Line' format me hai!

// ================================================================================


// ========================================= 1. Services Control (systemd) ======================================= //
// ================================================================================

// 1. systemctl status <service>       -----> Service active (running) hai ya dead/failed check karne ke liye (e.g. systemctl status nginx).

// 2. sudo systemctl restart <service>  -----> Stuck ya crash hui background service ko turant restart (bounce) karne ke liye.

// 3. sudo systemctl start <service>    -----> Kisi band (stopped) service ko chalu karne ke liye.

// 4. sudo systemctl stop <service>     -----> Kisi running service ko safe tareeqe se band karne ke liye.

// 5. sudo systemctl enable <service>   -----> Server reboot hone ke baad service apne aap auto-start ho jaye, yeh set karne ke liye.

// 6. sudo systemctl disable <service>  -----> Boot time par service ko auto-start hone se rokne ke liye.

// 7. systemctl --failed                -----> Server par jitni bhi crashed ya failed services hain unki list 1 second me dekhne ke liye.

// 8. sudo systemctl daemon-reload      -----> Nayi ya modified service configuration files ko reload karne ke liye.


// ================================================================================


// ========================================= 2. Process Management (ps, top, kill) =============================== //
// ================================================================================

// 9. ps aux                           -----> System me chal rahe saare background processes aur unke Process ID (PID) dekhne ke liye.

// 10. ps aux | grep <name>            -----> Kisi specific software (jaise chrome, java, nginx) ka PID dhoondne ke liye.

// 11. top                             -----> Real-time interactive CPU aur Memory consumption dekhne ke liye (CLI Task Manager).

// 12. htop                            -----> Colorful modern task manager jisme mouse scroll aur F9 se kill karna asaan hota hai.

// 13. sudo kill -9 <PID>              -----> Hanging ya frozen software ko uski PID se zabardasti (forcefully) band karne ke liye.

// 14. sudo pkill -9 -f <name>         -----> Software ke naam se uske saare child processes ko ek jhatke me kill karne ke liye.

// 15. ps aux --sort=-%cpu | head -n 6 -----> Top 5 sabse zyada CPU khane wale programs filter karne ke liye.

// 16. ps aux --sort=-%mem | head -n 6 -----> Top 5 sabse zyada RAM (Memory) khane wale programs filter karne ke liye.


// ================================================================================


// ========================================= 3. Logs & Troubleshooting (journalctl, syslog, auth) =============== //
// ================================================================================

// 17. journalctl -u <service> -n 50 --no-pager -----> Service ke aakhri 50 crash logs screen freeze hue bina dekhne ke liye.

// 18. journalctl -xe                  -----> Systemd ke detailed error logs aur recent boot/service failure reasons dekhne ke liye.

// 19. sudo tail -f /var/log/syslog    -----> Operating system, hardware aur driver connection ke live logs real-time me dekhne ke liye (Ubuntu).

// 20. sudo tail -f /var/log/messages  -----> RedHat / CentOS par general operating system events aur hardware live logs dekhne ke liye.

// 21. sudo tail -f /var/log/auth.log  -----> Failed SSH logins, unauthorized password attempts aur sudo command usage track karne ke liye.

// 22. sudo dmesg -T                   -----> Kernel boot events aur newly plugged USB/Hardware detection logs timestamp ke sath dekhne ke liye.


// ================================================================================


// ========================================= 4. Storage & Memory Telemetry (df, du, free) ======================= //
// ================================================================================

// 23. df -h                           -----> Hard disk ke sabhi partitions ka free aur used space human-readable (GB/MB) me dekhne ke liye.

// 24. df -i                           -----> Disk par Inodes usage check karne ke liye (Storage hote hue bhi "No space left" issue dhoondna).

// 25. du -sh *                        -----> Current folder ke andar kaun sa sub-folder sabse zyada space kha raha hai uska size dekhne ke liye.

// 26. du -sh /var/log/* | sort -rh | head -n 5 -----> Top 5 sabse badi log files dhoondne ke liye.

// 27. free -m                         -----> Server ki Total, Used aur Available RAM Megabytes (MB) me check karne ke liye.

// 28. sudo truncate -s 0 <file.log>   -----> 100% full disk hone par bina service band kiye giant log file ko turant 0 byte (empty) karne ke liye.

// 29. lsblk                           -----> Hard drive ke sabhi physical disks aur unke partitions ka tree block layout dekhne ke liye.


// ================================================================================


// ========================================= 5. Network IP Configuration & Routing (Beginner to Advance) ========= //
// ================================================================================

// 30. ip a                            -----> Machine ka local IP address, subnet mask aur network card state dekhne ke liye (ip addr show).

// 31. sudo ip addr add 192.168.1.50/24 dev eth0 -----> Specific network card (eth0) par naya IP address assign/add karne ke liye via CLI.

// 32. sudo ip addr del 192.168.1.50/24 dev eth0 -----> Network card se IP address ko delete/remove karne ke liye via CLI.

// 33. sudo ip link set eth0 up        -----> Network interface card ko enable (chalu) karne ke liye.

// 34. sudo ip link set eth0 down      -----> Network interface card ko disable (band) karne ke liye.

// 35. ip route show                   -----> System ka default gateway aur routing table dekhne ke liye (ip r).

// 36. sudo ip route add default via 192.168.1.1 dev eth0 -----> Network card par default gateway add/set karne ke liye.

// 37. sudo ip route del default       -----> Purane default gateway ko route table se delete karne ke liye.

// 38. sudo ip neigh                   -----> Local network me judey devices ke IP se physical MAC address table (ARP) dekhne ke liye.

// 39. nmcli device status             -----> NetworkManager ke zariye sabhi interfaces (Wi-Fi, Ethernet) ka status dekhne ke liye.

// 40. sudo nmcli connection up "Wired connection 1" -----> Network connection ko restart ya reconnect karne ke liye.

// 41. sudo resolvectl flush-caches    -----> Modern Ubuntu system par local DNS cache ko flush (clean) karne ke liye.

// 42. ping -c 4 8.8.8.8               -----> Network connectivity aur packet drop check karne ke liye (4 packets bhejta hai).

// 43. traceroute <IP/Domain>          -----> Packet destination tak kis-kis router (hop) se hokar ja raha hai aur kahan delay hai trace karne ke liye.

// 44. sudo ss -tulnp                  -----> Server par kaun-kaun se TCP/UDP ports open hain aur kaun sa process/PID chal raha hai dekhne ke liye.

// 45. netstat -tulnp                  -----> Classic network listening ports aur connected sockets dekhne ke liye.

// 46. nc -zv <IP> <Port>              -----> Remote server ka specific TCP port open hai ya firewall ne block kiya hai test karne ke liye (Netcat).

// 47. curl -Iv <URL>                  -----> Website ka HTTP response status code (200 OK, 404, 502) aur SSL certificate verify karne ke liye.

// 48. wget <URL>                      -----> Internet se koi bhi file, driver ya package direct command line se download karne ke liye.

// 49. scp file.txt user@192.168.1.50:/tmp/ -----> Secure Copy protocol se ek Linux PC se doosre remote PC par file transfer karne ke liye.

// 50. sudo ufw status                 -----> Ubuntu Uncomplicated Firewall ka active status aur open rules dekhne ke liye.

// 51. sudo ufw allow 22/tcp           -----> Firewall me SSH port 22 ko open (allow) karne ke liye.

// 52. sudo ufw deny from 192.168.1.150 -----> Malicious attacker IP ko firewall par block karne ke liye.


// ================================================================================


// ========================================= 6. Permissions, Users & Sudo Rights ================================= //
// ================================================================================

// 53. ls -la                          -----> Hidden files samet saari files ke permissions (rwx), owner aur size list dekhne ke liye.

// 54. chmod +x <script.sh>            -----> Script ya installer file ko chalne ke liye 'Executable' permission dene ke liye.

// 55. chmod 755 <folder>              -----> Folder ko standard rights dene ke liye (Owner ko Full, baaki sabko Read+Execute).

// 56. chmod 644 <file>                -----> File ko standard rights dene ke liye (Owner ko Read+Write, baaki sabko Read-Only).

// 57. sudo chown user:group <file>    -----> File ya folder ka legal Owner aur Group badalne ke liye.

// 58. sudo chown -R user:group <dir>  -----> Folder aur uske andar ke saare sub-folders/files ka owner recursively badalne ke liye.

// 59. sudo useradd -m -s /bin/bash <user> -----> System par naya user account uska home directory ke sath create karne ke liye.

// 60. sudo userdel -r <user>          -----> User account aur uski home directory ko system se permanently delete karne ke liye.

// 61. sudo passwd <user>              -----> Kisi user ka login password set ya reset karne ke liye.

// 62. sudo passwd -l <user>           -----> User account ko lock (disable) karne ke liye (Employee exit ke waqt).

// 63. sudo passwd -u <user>           -----> Locked user account ko wapas unlock karne ke liye.

// 64. sudo usermod -aG sudo <user>    -----> Normal user ko Admin (sudo) privileges dene ke liye (Ubuntu).

// 65. sudo visudo                     -----> `/etc/sudoers` file ko bina syntax error ke safely edit karne ke liye.


// ================================================================================


// ========================================= 7. File Management, Search & Text Operations ======================= //
// ================================================================================

// 66. pwd                             -----> Present Working Directory dekhne ke liye (Main is waqt kis folder me hoon).

// 67. cd /path/to/folder              -----> Specific directory/folder ke andar navigate karne ke liye.

// 68. mkdir -p /opt/myapp/data        -----> Naya folder ya nested folder structure create karne ke liye.

// 69. rm -rf <folder>                 -----> Kisi folder aur uske andar ke saare content ko forcefully delete karne ke liye (Caution!).

// 70. cp -r /source /destination      -----> Files ya folders ko copy karne ke liye (-r recursive).

// 71. mv /oldname /newname            -----> File ko rename karne ya ek folder se doosre folder me move karne ke liye.

// 72. cat <file>                      -----> Chhoti text file ka poora content screen par print karne ke liye.

// 73. head -n 20 <file>               -----> File ki shuruwaati 20 lines dekhne ke liye.

// 74. tail -n 20 <file>               -----> File ki aakhri 20 lines dekhne ke liye.

// 75. grep -rn "error" /var/log/      -----> Kisi bhi text word ya error code ko sabhi files me line number ke sath search karne ke liye.

// 76. find / -type f -name "*.log"    -----> Poore system me `.log` extension wali saari files dhoondne ke liye.

// 77. tar -czvf backup.tar.gz /data/  -----> Folder ko compress karke `.tar.gz` archive backup file banane ke liye.

// 78. tar -xzvf backup.tar.gz         -----> Compressed `.tar.gz` archive file ko un-compress (extract) karne ke liye.


// ================================================================================


// ========================================= 8. Package Management & System Maintenance (apt / yum) ============= //
// ================================================================================

// 79. sudo apt update                 -----> Software repository ke latest package list aur security patch database ko refresh karne ke liye.

// 80. sudo apt upgrade -y             -----> Installed packages aur patches ko latest version par update karne ke liye.

// 81. sudo apt install -y <package>   -----> Naya software ya networking diagnostic tool (curl, net-tools, htop) install karne ke liye.

// 82. sudo apt remove <package>       -----> Kisi software ko system se uninstall karne ke liye.

// 83. sudo apt autoremove --purge     -----> System se un-used purani libraries aur junk cache ko permanently clean karne ke liye.

// 84. sudo dpkg --configure -a        -----> Half-installed ya corrupt package installation lock ko repair/fix karne ke liye.


// ================================================================================


// ========================================= 9. Hostname, Time, Cron & Automation =============================== //
// ================================================================================

// 85. hostnamectl                     -----> Server ka current hostname, OS architecture aur kernel version dekhne ke liye.

// 86. sudo hostnamectl set-hostname <name> -----> Server ya kiosk PC ka computer name change karne ke liye.

// 87. timedatectl                     -----> System time, time zone aur NTP synchronization status dekhne ke liye.

// 88. sudo timedatectl set-timezone Asia/Dubai -----> System time zone ko Dubai (Gulf) time par set karne ke liye.

// 89. crontab -l                      -----> System par kaun se scheduled automated tasks (backup/clean) set hain unhe dekhne ke liye.

// 90. crontab -e                      -----> Naya automated schedule add ya edit karne ke liye (5-star syntax: Minute Hour Day Month Week).

// 91. ./script.sh                     -----> Automated bash script ko terminal par execute/run karne ke liye.


// ================================================================================


// ========================================= 10. Critical Linux File System Paths =============================== //
// ================================================================================

// 92. /etc                            -----> System aur applications ki configuration files ka folder (e.g. /etc/hosts, /etc/passwd).

// 93. /etc/hosts                      -----> Local DNS mapping file (IP se hostname manually map karne ke liye).

// 94. /etc/resolv.conf                -----> System ke active DNS nameservers ki configuration file.

// 95. /var/log                        -----> Operating system aur services ke crash aur event logs ka main folder.

// 96. /home                           -----> Standard users ka personal data, documents aur desktop files store karne ki jagah.

// 97. /tmp                            -----> Temporary files ka folder (System reboot hone par automatically delete ho jata hai).

// 98. /opt                            -----> Third-party enterprise applications aur custom software store karne ka folder.


// ================================================================================


// ========================================= 11. Windows vs Linux Commands Comparison (Complete Farq) ============ //
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

// --- BASIC TERMINAL ---
// 13. Files / Folders List     -----> Linux: ls -la                           | Windows: dir (ya Get-ChildItem)
// 14. Terminal Screen Clear    -----> Linux: clear                            | Windows: cls (ya Clear-Host)
// 15. System Reboot / Restart  -----> Linux: sudo reboot                      | Windows: Restart-Computer -Force


// ================================================================================


// ========================================= 12. Dono Me Technically Kya Farq Hai? ============================== //
// ================================================================================

// 1. Output Format   -----> Linux plain text string stream deta hai (jisme grep, awk, sed lagana padta hai). Windows PowerShell '.NET Objects' return karta hai.

// 2. Admin Rights    -----> Linux me kisi bhi command ke aage 'sudo' lagate hain. Windows me terminal ko 'Run as Administrator' kholna padta hai.

// 3. Case Sensitive  -----> Linux strictly case-sensitive hai (File.txt aur file.txt alag hain). Windows PowerShell case-insensitive hai.

// 4. Path Format     -----> Linux forward slash (/) use karta hai (/var/log). Windows file system me backslash (\) use karta hai (C:\Windows\System32).

// 5. Cross-Platform  -----> Pehle PowerShell sirf Windows par tha, ab open-source pwsh 7+ Linux par bhi chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
