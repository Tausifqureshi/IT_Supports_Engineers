// ========================================= Enterprise Linux Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Fast Floor Cheatsheet (Dubai, Gulf & Corporate MSPs)
// ================================================================================

// ========================================= Linux in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Linux enterprise servers, airport kiosks, firewalls aur backend services ka primary OS hai.
// 2. Desktop Support me Linux ka main kaam: Terminal se service restart, hung process kill, disk full check, live logs dekhna aur port test karna hota hai.
// 3. Format: Niche har command ka exact kaam seedha '1 Line' me likha hai taaki quick revise aur daily floor par turant use ho sake.

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


// ================================================================================


// ========================================= 2. Process Management (ps, top, kill) ======================================= //
// ================================================================================

// 8. ps aux                           -----> System me chal rahe saare background processes aur unke Process ID (PID) dekhne ke liye.

// 9. ps aux | grep <name>             -----> Kisi specific software (jaise chrome, java) ka PID dhoondne ke liye.

// 10. top                             -----> Real-time interactive CPU aur Memory consumption dekhne ke liye (CLI Task Manager).

// 11. htop                            -----> Colorful modern task manager jisme mouse scroll aur F9 se kill karna asaan hota hai.

// 12. sudo kill -9 <PID>              -----> Hanging ya frozen software ko uski PID se zabardasti (forcefully) band karne ke liye.

// 13. sudo pkill -9 -f <name>         -----> Software ke naam se uske saare child processes ko ek jhatke me kill karne ke liye.


// ================================================================================


// ========================================= 3. Logs & Troubleshooting (journalctl, syslog, auth) =============================== //
// ================================================================================

// 14. journalctl -u <service> -n 50 --no-pager -----> Service ke aakhri 50 crash logs screen freeze hue bina dekhne ke liye.

// 15. journalctl -xe                  -----> Systemd ke detailed error logs aur recent boot/service failure reasons dekhne ke liye.

// 16. sudo tail -f /var/log/syslog    -----> Operating system, hardware aur driver connection ke live logs real-time me dekhne ke liye.

// 17. sudo tail -f /var/log/auth.log  -----> Failed SSH logins, unauthorized password attempts aur sudo command usage track karne ke liye.

// 18. sudo dmesg -T                   -----> Kernel boot events aur newly plugged USB/Hardware hardware logs timestamp ke sath dekhne ke liye.


// ================================================================================


// ========================================= 4. Storage & Memory Telemetry (df, du, free) ======================================= //
// ================================================================================

// 19. df -h                           -----> Hard disk ke sabhi partitions ka free aur used space human-readable (GB/MB) me dekhne ke liye.

// 20. du -sh *                        -----> Current folder ke andar kaun sa sub-folder sabse zyada space kha raha hai uska size dekhne ke liye.

// 21. free -m                         -----> Server ki Total, Used aur Available RAM Megabytes (MB) me check karne ke liye.

// 22. sudo truncate -s 0 <file.log>   -----> 100% full disk hone par bina service band kiye giant log file ko turant 0 byte (empty) karne ke liye.


// ================================================================================


// ========================================= 5. Permissions & User Rights (chmod, chown, user) ================================= //
// ================================================================================

// 23. ls -la                          -----> Hidden files samet saari files ke permissions (rwx), owner aur size list dekhne ke liye.

// 24. chmod +x <script.sh>            -----> Script ya installer file ko chalne ke liye 'Executable' permission dene ke liye.

// 25. chmod 755 <folder>              -----> Folder ko standard rights dene ke liye (Owner ko Full, baaki sabko Read+Execute).

// 26. chmod 644 <file>                -----> File ko standard rights dene ke liye (Owner ko Read+Write, baaki sabko Read-Only).

// 27. sudo chown user:group <file>    -----> File ya folder ka legal Owner aur Group badalne ke liye.

// 28. sudo useradd -m -s /bin/bash <user> -----> System par naya user account uska home directory ke sath create karne ke liye.

// 29. sudo passwd <user>              -----> Kisi user ka login password set ya reset karne ke liye.

// 30. sudo usermod -aG sudo <user>    -----> Normal user ko Admin (sudo) privileges dene ke liye (Ubuntu).


// ================================================================================


// ========================================= 6. Networking & Ports (ip, ss, netstat, ping) ===================================== //
// ================================================================================

// 31. ip a                            -----> Machine ka local IP address, subnet mask aur interface state dekhne ke liye (ifconfig replacement).

// 32. sudo ss -tulnp                  -----> Server par kaun-kaun se TCP/UDP ports open hain aur kaun sa process/PID chal raha hai dekhne ke liye.

// 33. netstat -tulnp                  -----> Classic network listening ports aur connected sockets dekhne ke liye.

// 34. ping -c 4 8.8.8.8               -----> Network connectivity aur packet drop check karne ke liye (4 packets bhejta hai).

// 35. traceroute <IP/Domain>          -----> Packet destination tak kis-kis router (hop) se hokar ja raha hai aur kahan delay hai trace karne ke liye.

// 36. nc -zv <IP> <Port>              -----> Remote server ka specific TCP port open hai ya firewall ne block kiya hai test karne ke liye (Netcat).

// 37. curl -Iv <URL>                  -----> Website ka HTTP response status code (200 OK, 404, 502) aur SSL certificate verify karne ke liye.


// ================================================================================


// ========================================= 7. Package Management (apt / yum) ================================================= //
// ================================================================================

// 38. sudo apt update                 -----> Software repository ke latest package list aur security patch database ko refresh karne ke liye.

// 39. sudo apt install -y <package>   -----> Naya software ya networking diagnostic tool (curl, net-tools, htop) install karne ke liye.

// 40. sudo apt autoremove --purge     -----> System se un-used purani libraries aur junk cache ko permanently clean karne ke liye.

// 41. sudo dpkg --configure -a        -----> Half-installed ya corrupt package installation lock ko repair/fix karne ke liye.


// ================================================================================


// ========================================= 8. Scripting & Cron Scheduling (bash, crontab) ==================================== //
// ================================================================================

// 42. ./script.sh                     -----> Automated bash script ko terminal par execute/run karne ke liye.

// 43. crontab -l                      -----> System par kaun se scheduled automated tasks (backup/clean) set hain unhe dekhne ke liye.

// 44. crontab -e                      -----> Naya automated schedule add ya edit karne ke liye (5-star syntax: Minute Hour Day Month Week).


// ================================================================================


// ========================================= 9. Critical Linux File System Paths =============================================== //
// ================================================================================

// 45. /etc                            -----> System aur applications ki configuration files ka folder (e.g. /etc/hosts, /etc/passwd).

// 46. /var/log                        -----> Operating system aur services ke crash aur event logs ka main folder.

// 47. /home                           -----> Standard users ka personal data, documents aur desktop files store karne ki jagah.

// 48. /tmp                            -----> Temporary files ka folder (System reboot hone par automatically delete ho jata hai).

// 49. /opt                            -----> Third-party enterprise applications aur custom software store karne ka folder.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
