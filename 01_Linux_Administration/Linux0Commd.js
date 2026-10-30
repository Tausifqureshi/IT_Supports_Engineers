// ========================================= Enterprise Linux Core Commands (Universal IT Support) ======================================= //
// Target: L1/L2 IT Support & Systems Engineer — Complete Beginner to Advanced Floor Cheatsheet (Dubai, Gulf & Corporate)
// ================================================================================

// ========================================= Linux in IT Support Kya Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Linux enterprise servers, airport kiosks, firewalls aur cloud instances ka primary OS hai.
// 2. Desktop & Systems Support me Linux ka kaam: Terminal se software update, deep junk clean, IP assign/delete, services bounce, processes kill, logs inspect, disk free, hardware identify aur permissions manage karna hota hai.
// 3. Format: Main-main core commands upar hain, fir advanced IP/Routing/Files/Hardware hain, aur aakhri me Windows vs Linux ka comparison hai. Har command seedha '1 Line' format me hai!

// ================================================================================


// ========================================= 1. System Update, Upgrade & Deep Junk Cleaning ===================== //
// ================================================================================

// 1. sudo apt update && sudo apt upgrade -y -----> Software repositories ko refresh karke safe security patches aur updates download/install karne ke liye (Hafte me 1-2 baar).

// 2. sudo apt autoremove -y -----> System se un-used purani libraries, unneeded kernels aur faltu dependencies ko clean karne ke liye.

// 3. sudo apt autoclean -----> Un software packages ki purani installer (.deb) cache ko delete karne ke liye jo ab internet par nahi hain.

// 4. sudo apt clean -----> `/var/cache/apt/archives` me bhari hui sabhi downloaded (.deb) installer files ko delete karke GBs of disk space bachane ke liye.

// 5. sudo journalctl --vacuum-time=3d -----> 3 din se purane sabhi binary systemd logs ko permanently delete karke disk space khali karne ke liye.

// 6. rm -rf ~/.cache/* -----> Current user ke cache folder me bhari temporary junk files ko delete karne ke liye.

// 7. rm -rf ~/.local/share/Trash/* -----> Terminal se Linux desktop ke Recycle Bin (Trash) ko permanently khali (empty) karne ke liye.

// 8. Deep Clean One-Liner (The Master Clean):
//    sudo apt autoremove -y && sudo apt autoclean && sudo apt clean && sudo journalctl --vacuum-time=3d && rm -rf ~/.cache/* && rm -rf ~/.local/share/Trash/*


// ================================================================================


// ========================================= 2. Directory Navigation & Super Terminal Shortcuts ================= //
// ================================================================================

// 9. pwd -----> Print Working Directory: Aap is waqt kis folder ke andar baithe hain uska poora path dekhne ke liye.

// 10. ls -la -----> Hidden files (jaise .env, .git) samet saari files ke permissions (rwx), owner aur size list dekhne ke liye.

// 11. cd <folder_name> -----> Kisi specific folder ke andar enter/move hone ke liye (e.g. cd /var/log).

// 12. cd .. -----> Current folder se ek step peeche (Parent folder me) wapas aane ke liye.

// 13. cd ~ -----> Seedha current logged-in user ke home directory (`/home/username`) par jump karne ke liye.

// 14. cd / -----> Linux ke root directory (sabse pehle master folder) me jump karne ke liye.

// 15. history -----> Terminal par pehle run ki gayi saari purani commands ki number-wise list dekhne ke liye.

// 16. history | grep <cmd> -----> Purani history me se kisi specific command ko dhoondne ke liye.

// 17. Super Terminal Shortcuts (Floor Daily Speed):
//     - [Tab] -----> File ya folder ka naam automatically pura (auto-complete) karne ke liye.
//     - [Ctrl + C] -----> Terminal par chal rahi command, script ya infinite loop ko forcefully stop/cancel karne ke liye.
//     - [Ctrl + L] -----> Terminal screen ko 1 second me clear (saaf) karne ke liye (same as `clear` command).
//     - [Ctrl + R] -----> Purani run ki gayi command ko reverse-search karke recall karne ke liye.


// ================================================================================


// ========================================= 3. Files & Folder Creation (Create, Copy, Remove) ================== //
// ================================================================================

// 18. touch <filename> -----> Nayi blank empty file create karne ke liye (e.g. touch index.js ya touch Dockerfile).

// 19. mkdir <folder_name> -----> Naya folder (directory) create karne ke liye.

// 20. mkdir -p app/src/data -----> Nested folders (folder ke andar folder) ko ek single command me create karne ke liye (-p flag).

// 21. cp file.txt backup.txt -----> Single file ko duplicate/copy karne ke liye.

// 22. cp -r /source_dir /dest_dir -----> Poore folder aur uske andar ke sub-folders ko recursively copy karne ke liye (-r flag).

// 23. rm <file> -----> File ko permanently delete karne ke liye.

// 24. rm -rf <folder> -----> Kisi folder aur uske andar ke saare contents ko bina prompt ke forcefully delete karne ke liye (Caution!).

// 25. mv <old_name> <new_name> -----> File ya folder ko rename karne ya ek jagah se doosri jagah move karne ke liye.


// ================================================================================


// ========================================= 4. File Viewing & Live Log Inspection ============================== //
// ================================================================================

// 26. cat <file> -----> Chhoti file ka saara content screen par ek baar me print karke padhne ke liye.

// 27. head -n 10 <file> -----> File ki shuruwaat ki pehli 10 lines print karne ke liye (jaldi se header dekhne ke liye).

// 28. tail -n 20 <file> -----> File ki aakhri 20 lines print karne ke liye.

// 29. tail -f /var/log/syslog -----> Live Log Monitoring: Operating system aur hardware ke naye aane wale logs real-time me screen par follow karne ke liye.

// 30. tail -f /var/log/auth.log -----> Failed SSH logins, unauthorized password attempts aur sudo command usage real-time me track karne ke liye.

// 31. grep "error" /var/log/app.log -----> File ya log ke andar kisi specific word (jaise 'error' ya 'failed') ko search karke nikalne ke liye.

// 32. grep -rn "error" /var/log/ -----> Poore folder ki sabhi files me recursive search karke exact line number ke sath error dhoondne ke liye.


// ================================================================================


// ========================================= 5. Text Editing, Stream Filters & Search Tools ===================== //
// ================================================================================

// 33. nano <file> -----> Terminal par configuration file ko edit karne ke liye beginner-friendly lightweight editor.

// 34. less <file> -----> Badi log files ko memory crash kiye bina page-by-page scroll karke inspect karne ke liye (exit ke liye 'q' dabayein).

// 35. wc -l <file> -----> File ke andar total kitni lines hain count karne ke liye (Line Count).

// 36. sort <file> | uniq -----> Text lines ko alphabetically sort karke duplicate entries ko remove karne ke liye.

// 37. sed -i 's/old_text/new_text/g' <file> -----> Bina file khole direct terminal se kisi word ko doosre word se globally replace/update karne ke liye.

// 38. awk '{print $1, $3}' /var/log/app.log -----> Log file me se specific columns (jaise IP address aur Timestamp) filter karke print karne ke liye.

// 39. echo "nameserver 8.8.8.8" >> /etc/resolv.conf -----> File ke aakhri me naya line/text bina purana data mitaye append (add) karne ke liye.


// ================================================================================


// ========================================= 6. Services Control (systemd Daemons) ============================== //
// ================================================================================

// 40. systemctl status <service> -----> Service active (running) hai ya dead/failed check karne ke liye (e.g. systemctl status nginx).

// 41. sudo systemctl restart <service> -----> Stuck ya crash hui background service ko turant restart (bounce) karne ke liye.

// 42. sudo systemctl start <service> -----> Kisi band (stopped) service ko chalu karne ke liye.

// 43. sudo systemctl stop <service> -----> Kisi running service ko safe tareeqe se band karne ke liye.

// 44. sudo systemctl enable <service> -----> Server reboot hone ke baad service apne aap auto-start ho jaye, yeh set karne ke liye.

// 45. sudo systemctl disable <service> -----> Boot time par service ko auto-start hone se rokne ke liye.

// 46. systemctl --failed -----> Server par jitni bhi crashed ya failed services hain unki list 1 second me dekhne ke liye.

// 47. sudo systemctl daemon-reload -----> Nayi ya modified service configuration files ko reload karne ke liye.

// 48. journalctl -u <service> -n 50 --no-pager -----> Service ke aakhri 50 crash logs screen freeze hue bina dekhne ke liye.

// 49. journalctl -xe -----> Systemd ke detailed error logs aur recent boot/service failure reasons dekhne ke liye.


// ================================================================================


// ========================================= 7. Process Management (ps, top, kill) =============================== //
// ================================================================================

// 50. ps aux -----> System me chal rahe saare background processes aur unke Process ID (PID) dekhne ke liye.

// 51. ps aux | grep <name> -----> Kisi specific software (jaise chrome, java, nginx) ka PID dhoondne ke liye.

// 52. top -----> Real-time interactive CPU aur Memory consumption dekhne ke liye (CLI Task Manager, exit ke liye 'q' dabayein).

// 53. htop -----> Colorful modern task manager jisme mouse scroll aur F9 se kill karna asaan hota hai.

// 54. sudo kill -9 <PID> -----> Hanging ya frozen software ko uski PID se zabardasti (forcefully) band karne ke liye.

// 55. sudo pkill -9 -f <name> -----> Software ke naam se uske saare child processes ko ek jhatke me kill karne ke liye.

// 56. ps aux --sort=-%cpu | head -n 6 -----> Top 5 sabse zyada CPU khane wale programs filter karne ke liye.

// 57. ps aux --sort=-%mem | head -n 6 -----> Top 5 sabse zyada RAM (Memory) khane wale programs filter karne ke liye.


// ================================================================================


// ========================================= 8. Storage & Memory Telemetry (df, du, free) ======================= //
// ================================================================================

// 58. df -h -----> Hard disk ke sabhi partitions ka free aur used space human-readable (GB/MB) me dekhne ke liye.

// 59. df -i -----> Disk par Inodes usage check karne ke liye (Storage hote hue bhi "No space left" issue dhoondna).

// 60. free -h -----> Server ki Total, Used aur Available RAM human-readable format (GB/MB) me check karne ke liye.

// 61. free -m -----> Server ki Total, Used aur Available RAM exact Megabytes (MB) me check karne ke liye.

// 62. du -sh * -----> Current folder ke andar kaun sa sub-folder sabse zyada space kha raha hai uska size dekhne ke liye.

// 63. sudo truncate -s 0 <file.log> -----> 100% full disk hone par bina service band kiye giant log file ko turant 0 byte (empty) karne ke liye.

// 64. lsblk -----> Hard drive ke sabhi physical disks aur unke partitions ka tree block layout dekhne ke liye.


// ================================================================================


// ========================================= 9. Disks, Mounts & Filesystem Management =========================== //
// ================================================================================

// 65. sudo fdisk -l -----> System me lagi sabhi physical hard drives ke partition table aur sector details dekhne ke liye.

// 66. sudo blkid -----> Sabhi partitions ke unique UUID numbers aur Filesystem type (ext4, NTFS, xfs) dekhne ke liye.

// 67. sudo mount /dev/sdb1 /mnt/usb -----> External USB drive ya secondary hard disk partition ko access karne ke liye folder par mount karne ke liye.

// 68. sudo umount /mnt/usb -----> Mounted drive ko safely eject/unmount karne ke liye.

// 69. sudo fsck -y /dev/sda1 -----> Corrupted filesystem aur bad sectors ko scan aur automatically repair karne ke liye.


// ================================================================================


// ========================================= 10. Network IP Configuration & Routing (Beginner to Advance) ======== //
// ================================================================================

// 70. ip a -----> Machine ka local IP address, subnet mask aur network card state dekhne ke liye (ip addr show).

// 71. sudo ip addr add 192.168.1.50/24 dev eth0 -----> Specific network card (eth0) par naya IP address assign/add karne ke liye via CLI.

// 72. sudo ip addr del 192.168.1.50/24 dev eth0 -----> Network card se IP address ko delete/remove karne ke liye via CLI.

// 73. sudo ip link set eth0 up -----> Network interface card ko enable (chalu) karne ke liye.

// 74. sudo ip link set eth0 down -----> Network interface card ko disable (band) karne ke liye.

// 75. ip route show -----> System ka default gateway aur routing table dekhne ke liye (ip r).

// 76. sudo ip route add default via 192.168.1.1 dev eth0 -----> Network card par default gateway add/set karne ke liye.

// 77. sudo ip route del default -----> Purane default gateway ko route table se delete karne ke liye.

// 78. sudo ip neigh -----> Local network me judey devices ke IP se physical MAC address table (ARP) dekhne ke liye.

// 79. nmcli device status -----> NetworkManager ke zariye sabhi interfaces (Wi-Fi, Ethernet) ka status dekhne ke liye.

// 80. sudo nmcli connection up "Wired connection 1" -----> Network connection ko restart ya reconnect karne ke liye.

// 81. sudo resolvectl flush-caches -----> Modern Ubuntu system par local DNS cache ko flush (clean) karne ke liye.

// 82. ping -c 4 8.8.8.8 -----> Network connectivity aur packet drop check karne ke liye (4 packets bhejta hai).

// 83. traceroute <IP/Domain> -----> Packet destination tak kis-kis router (hop) se hokar ja raha hai aur kahan delay hai trace karne ke liye.

// 84. sudo ss -tulnp -----> Server par kaun-kaun se TCP/UDP ports open hain aur kaun sa process/PID chal raha hai dekhne ke liye.

// 85. netstat -tulnp -----> Classic network listening ports aur connected sockets dekhne ke liye.

// 86. nc -zv <IP> <Port> -----> Remote server ka specific TCP port open hai ya firewall ne block kiya hai test karne ke liye (Netcat).

// 87. curl -Iv <URL> -----> Website ka HTTP response status code (200 OK, 404, 502) aur SSL certificate verify karne ke liye.

// 88. curl -I http://localhost:3000 -----> Check karna ki local web application port active hai aur HTTP 200 return kar raha hai ya nahi.

// 89. dig <domain> -----> Deep DNS record query (A, MX, TXT) lookup karne ke liye.

// 90. dig +short <domain> -----> Domain ka clean IP address 1 second me pull karne ke liye.

// 91. wget <URL> -----> Internet se koi bhi file, driver ya package direct command line se download karne ke liye.

// 92. scp file.txt user@192.168.1.50:/tmp/ -----> Secure Copy protocol se ek Linux PC se doosre remote PC par file transfer karne ke liye.

// 93. rsync -avz /data/ user@192.168.1.50:/backup/ -----> Fast incremental remote backup aur directory sync transfer karne ke liye.

// 94. sudo ufw status -----> Ubuntu Uncomplicated Firewall ka active status aur open rules dekhne ke liye.

// 95. sudo ufw allow 22/tcp -----> Firewall me SSH port 22 ko open (allow) karne ke liye.

// 96. sudo ufw deny from 192.168.1.150 -----> Malicious attacker IP ko firewall par block karne ke liye.


// ================================================================================


// ========================================= 11. Hardware, CPU & Peripheral Telemetry ============================ //
// ================================================================================

// 97. lscpu -----> CPU architecture, model name, number of cores aur virtualization support dekhne ke liye.

// 98. sudo lshw -short -----> System ke sabhi hardware components (RAM, CPU, Motherboard, Disks) ka clean summary dekhne ke liye.

// 99. lsusb -----> USB ports me lage sabhi external devices (Barcode scanner, Printer, USB flash drive) ko detect karne ke liye.

// 100. lspci -----> Motherboard ke PCI slots me lage Network cards, Graphics cards aur controllers inspect karne ke liye.

// 101. uname -r -----> Active Linux kernel release version dekhne ke liye.

// 102. uname -a -----> System ka complete OS architecture (x86_64), hostname aur kernel details dekhne ke liye.

// 103. cat /etc/os-release -----> Linux distribution ka exact official name aur version (e.g. Ubuntu 22.04 LTS) dekhne ke liye.

// 104. uptime -p -----> Server kitne din, ghante aur minute se bina reboot hue chal raha hai clean format me dekhne ke liye.

// 105. w -----> Server par kaun kaun se users logged in hain aur wo is waqt kya command chala rahe hain live dekhne ke liye.

// 106. last -n 10 -----> System ke aakhri 10 user login sessions aur reboot events ki history dekhne ke liye.


// ================================================================================


// ========================================= 12. Permissions, Users & Sudo Rights ================================ //
// ================================================================================

// 107. chmod +x <script.sh> -----> Script ya installer file ko chalne ke liye 'Executable' permission dene ke liye.

// 108. ./deploy.sh -----> Current folder ke andar maujood executable script ko terminal par execute/run karne ke liye.

// 109. chmod 755 <folder> -----> Folder ko standard rights dene ke liye (Owner ko Full, baaki sabko Read+Execute).

// 110. chmod 644 <file> -----> File ko standard rights dene ke liye (Owner ko Read+Write, baaki sabko Read-Only).

// 111. sudo chown user:group <file> -----> File ya folder ka legal Owner aur Group badalne ke liye.

// 112. sudo chown -R user:group <dir> -----> Folder aur uske andar ke saare sub-folders/files ka owner recursively badalne ke liye.

// 113. sudo useradd -m -s /bin/bash <user> -----> System par naya user account uska home directory ke sath create karne ke liye.

// 114. sudo userdel -r <user> -----> User account aur uski home directory ko system se permanently delete karne ke liye.

// 115. sudo passwd <user> -----> Kisi user ka login password set ya reset karne ke liye.

// 116. sudo passwd -l <user> -----> User account ko lock (disable) karne ke liye (Employee exit ke waqt).

// 117. sudo passwd -u <user> -----> Locked user account ko wapas unlock karne ke liye.

// 118. sudo usermod -aG sudo <user> -----> Normal user ko Admin (sudo) privileges dene ke liye (Ubuntu).

// 119. sudo visudo -----> `/etc/sudoers` file ko bina syntax error ke safely edit karne ke liye.


// ================================================================================


// ========================================= 13. Archive, Compression, Time & Cron =============================== //
// ================================================================================

// 120. tar -czvf backup.tar.gz /data/ -----> Folder ko compress karke `.tar.gz` archive backup file banane ke liye.

// 121. tar -xzvf backup.tar.gz -----> Compressed `.tar.gz` archive file ko un-compress (extract) karne ke liye.

// 122. zip -r data.zip /path/to/folder/ -----> Standard `.zip` format me files aur folders ko compress karne ke liye.

// 123. unzip data.zip -----> `.zip` archive file ko extract karne ke liye.

// 124. gzip <file.log> -----> Badi single log file ko compress karke `.gz` banane ke liye.

// 125. gunzip <file.log.gz> -----> Compressed `.gz` file ko wapas uncompress karne ke liye.

// 126. hostnamectl -----> Server ka current hostname, OS architecture aur kernel version dekhne ke liye.

// 127. sudo hostnamectl set-hostname <name> -----> Server ya kiosk PC ka computer name change karne ke liye.

// 128. timedatectl -----> System time, time zone aur NTP synchronization status dekhne ke liye.

// 129. sudo timedatectl set-timezone Asia/Dubai -----> System time zone ko Dubai (Gulf) time par set karne ke liye.

// 130. crontab -l -----> System par kaun se scheduled automated tasks (backup/clean) set hain unhe dekhne ke liye.

// 131. crontab -e -----> Naya automated schedule add ya edit karne ke liye (5-star syntax: Minute Hour Day Month Week).


// ================================================================================


// ========================================= 14. Remote Access, Secure Shell & File Transfer (SSH, SCP, Rsync, Web) = //
// ================================================================================

// 132. ssh username@192.168.1.100 -p 22 -----> Remote Linux server/machine par encrypted terminal console session login karne ke liye.

// 133. ssh-keygen -t rsa -b 4096 -----> Password-less secure SSH login ke liye 4096-bit public-private key pair generate karne ke liye.

// 134. ssh-copy-id user@192.168.1.100 -----> Remote server par public key upload karke password-free auto login set karne ke liye.

// 135. scp file.txt user@192.168.1.100:/tmp/ -----> Terminal se single file ko remote Linux machine ke kisi bhi path par securely copy karne ke liye.

// 136. scp -r /data user@192.168.1.100:/backup/ -----> Local machine se poore ke poore folder ko remote server par securely transfer karne ke liye.

// 137. rsync -avzP /source/ user@192.168.1.100:/dest/ -----> Enterprise delta file sync: Sirf modified bits transfer karta hai, interrupt hone par resume ho jata hai.

// 138. curl -I https://google.com -----> HTTP/HTTPS web response headers aur status code (200 OK, 404, 502) terminal par check karne ke liye.

// 139. curl -O https://example.com/data.tar.gz -----> Web URL se direct file terminal par download karne ke liye.

// 140. wget -c https://example.com/file.iso -----> Web link se file download karne ke liye (`-c` flag se disconnected/interrupted download wahi se resume hoti hai).


// ================================================================================


// ========================================= 15. Firewall & Security Control (UFW, iptables & Fail2ban) ========== //
// ================================================================================

// 141. sudo ufw status verbose -----> Linux built-in firewall ka current status aur open/blocked ports ki detail list dekhne ke liye.

// 142. sudo ufw enable -----> Linux firewall protection ko globally active (turn ON) karne ke liye.

// 143. sudo ufw disable -----> Network troubleshooting ke waqt firewall ko temporary band (turn OFF) karne ke liye.

// 144. sudo ufw allow 22/tcp -----> Remote administration ke liye SSH port 22 ko firewall me allow karne ke liye.

// 145. sudo ufw allow 80,443/tcp -----> Web traffic (HTTP/HTTPS) ke ports ko ek line me allow karne ke liye.

// 146. sudo ufw allow 3389/tcp -----> Linux GUI remote desktop (xrdp) port ko open karne ke liye.

// 147. sudo ufw allow from 192.168.1.0/24 to any port 22 proto tcp -----> Sirf office ke internal subnet ko SSH access allow karne ke liye (Security hardening).

// 148. sudo ufw deny from 192.168.1.50 -----> Kisi infected ya unauthorized machine ki IP ko poori tarah block karne ke liye.

// 149. sudo ufw delete allow 22 -----> Pehle se banaye gaye allow rule ko delete/revoke karne ke liye.

// 150. sudo iptables -L -n -v -----> Kernel-level raw firewall packet filtering rules aur dropped packet counters dekhne ke liye.

// 151. sudo fail2ban-client status -----> Brute-force SSH attack prevention service ka status aur banned IPs dekhne ke liye.


// ================================================================================


// ========================================= 16. Package Troubleshooting & Enterprise Distros (dpkg, RHEL DNF/RPM) = //
// ================================================================================

// 152. sudo dpkg -i package.deb -----> Download kiye gaye offline `.deb` software installer package ko install karne ke liye.

// 153. sudo dpkg -l | grep <package> -----> System me installed specific software ka exact version aur build number check karne ke liye.

// 154. sudo dpkg -r <package> -----> Installed `.deb` package ko system se remove karne ke liye.

// 155. sudo apt --fix-broken install -----> Broken packages aur corrupted dependencies ko automatically repair aur re-align karne ke liye.

// 156. sudo dpkg --configure -a -----> Crash ya power cut ki wajah se beech me atki hui pending installations ko finalize karne ke liye.

// 157. sudo add-apt-repository ppa:<repo> -----> Naya verified PPA repository source system me add karne ke liye.

// 158. sudo dnf install <package> (ya yum) -----> RedHat/Rocky Linux/CentOS enterprise systems par naya software install karne ke liye.

// 159. sudo dnf update -y -----> RedHat enterprise system ke sabhi packages aur security kernels ko update karne ke liye.

// 160. rpm -qa | grep <package> -----> RedHat enterprise distribution par installed RPM packages ki list filter karne ke liye.

// 161. sudo rpm -ivh package.rpm -----> RedHat par offline `.rpm` installer file ko install karne ke liye.


// ================================================================================


// ========================================= 17. System Health, SMART Drive Telemetry, Audit Logs & Shutdown ===== //
// ================================================================================

// 162. sudo smartctl -H /dev/sda -----> Hard disk / SSD ka SMART health status (PASSED ya FAILED) 1 second me check karne ke liye.

// 163. sudo smartctl -a /dev/sda -----> Drive ke bad sectors, power-on hours, temperature aur failure prediction telemetry dekhne ke liye.

// 164. sensors -----> Motherboard, CPU cores aur chassis fans ka real-time temperature aur RPM dekhne ke liye (lm-sensors).

// 165. sudo dmesg -l err,crit -----> System me aaye critical kernel crashes, PCIe errors aur hardware failures ko filter karne ke liye.

// 166. sudo dmesg -T -----> Kernel boot events aur newly plugged USB/Hardware detection logs human timestamp ke sath dekhne ke liye.

// 167. uptime -p -----> System kitne ghante ya dino se bina kisi reboot/restart ke continuously chal raha hai dekhne ke liye.

// 168. who -----> Current session me kaun-kaun se users active terminal par logged in hain dekhne ke liye.

// 169. w -----> Logged in users kaun sa process ya command execute kar rahe hain live monitor karne ke liye.

// 170. last -n 10 -----> Server par huye pichle 10 logins, logouts aur reboot events ka audit record dekhne ke liye.

// 171. last reboot -----> System pichli baar kab-kab reboot hua tha uski date aur time history dekhne ke liye.

// 172. sudo shutdown -h now -----> System ko turant safely turn OFF (power off) karne ke liye.

// 173. sudo shutdown -r +15 "Rebooting" -----> 15 minute baad automatic reboot schedule karke connected users ko broadcast warning message bhejne ke liye.

// 174. sudo shutdown -c -----> Scheduled pending shutdown ya reboot ko cancel karne ke liye.


// ================================================================================


// ========================================= 18. Critical Linux File System Paths =============================== //
// ================================================================================

// 175. /etc -----> System aur applications ki configuration files ka folder (e.g. /etc/hosts, /etc/passwd).

// 176. /etc/hosts -----> Local DNS mapping file (IP se hostname manually map karne ke liye).

// 177. /etc/resolv.conf -----> System ke active DNS nameservers ki configuration file.

// 178. /var/log -----> Operating system aur services ke crash aur event logs ka main folder.

// 179. /home -----> Standard users ka personal data, documents aur desktop files store karne ki jagah.

// 180. /tmp -----> Temporary files ka folder (System reboot hone par automatically delete ho jata hai).

// 181. /opt -----> Third-party enterprise applications aur custom software store karne ka folder.


// ================================================================================


// ========================================= 19. Practical Floor Troubleshooting Flow (Step-by-Step) ============= //
// Real-World Linux Workflows (L1 vs L2 Systems & Kiosk Support)
// ================================================================================

// 1. L1 ENGINEER KA KAAM (Surface Diagnostics & Fast Reset):
// Target: Kiosk display freeze, disk space clean, service restart, aur network link recovery.
// - Problem 1: Linux Kiosk / Desktop GUI Freeze (Black Screen ya Stuck Mouse):
//   Kaam: Bina hard power-off kiye GUI display manager ko restart karna.
//   Action: Keyboard par `Ctrl + Alt + F3` press karke virtual TTY terminal me login karo -> Command: `sudo systemctl restart gdm3` (Ubuntu GNOME) ya `sudo systemctl restart lightdm` (Kiosk/XFCE) -> Keyboard par `Ctrl + Alt + F2` press karke live GUI desktop par wapas aao.
// - Problem 2: Disk Full "No space left on device" (User Login Loop Fix):
//   Kaam: Disk 100% full hone par Xauthority file create na hona aur user ka login screen par wapas bounce hona fix karna.
//   Action: Terminal me `df -h` chalao -> `/var/log` ya `/` root partition full dekhne par instant cleanup run karo: `sudo journalctl --vacuum-time=1d` && `sudo apt clean` && `rm -rf ~/.cache/*`.
// - Problem 3: Production Web / Application Service Down:
//   Kaam: Service status inspect karke safe bounce karna.
//   Action: Command: `systemctl status nginx` (ya apache2) -> Red error note karo -> Command: `sudo systemctl restart nginx` -> Verify karo "Active: active (running)".
// - Problem 4: Kiosk / Terminal Network Drop:
//   Kaam: Interface down hone par connection refresh karna.
//   Action: Command: `ip a` (check interface state UP/DOWN) -> Command: `sudo systemctl restart NetworkManager` (ya `sudo netplan apply`) -> Command: `ping -c 4 8.8.8.8` chala kar packet flow verify karo.
// - L1 Ki Limit: High CPU runaway rogue processes, kernel crash logs (dmesg panics), custom firewall rules (ufw/iptables), aur complex file permission conflicts L2 ko di jaati hain.

// 2. L2 ENGINEER KA KAAM (Root Cause, Performance & Kernel Forensics):
// Target: Runaway process termination, service crash dumps, listening ports & permission security.
// - Step 1: Runaway CPU / Memory Hog Process Identification & Safe Kill:
//   Kaam: Server ya kiosk ko 100% lockup karne wale process ko identify karke safely terminate karna.
//   Action: Command: `top -b -n 1 | head -n 20` ya `htop` chalao -> Highest %CPU / %MEM process PID note karo -> Command: `ps -fp <PID>` se verify karo process kahan se run ho raha hai -> Command: `sudo kill -15 <PID>` (Graceful SIGTERM) bhejo; agar 10 sec me na ruke toh `sudo kill -9 <PID>` (Force SIGKILL) se terminate karo.
// - Step 2: Service Crash Loop & Kernel Panic Analysis:
//   Kaam: Systemd service crash hone ka exact internal reason pakadna.
//   Action: Command: `journalctl -u <service> -e -n 50 --no-pager` chala kar error traceback padho -> Hardware/PCIe/NIC driver faults ke liye `sudo dmesg -T --level=err,crit` inspect karo.
// - Step 3: Listening Port & Firewall Rule Verification:
//   Kaam: Verify karna ki port actually listen ho raha hai aur firewall se allow hai.
//   Action: Command: `sudo ss -tulnp | grep :<port>` (Check karo `0.0.0.0:<port>` par bound hai ya sirf `127.0.0.1` par) -> Command: `sudo ufw status verbose` -> Block hone par command: `sudo ufw allow <port>/tcp` execute karo.
// - Step 4: Enterprise File Ownership & Permission Hardening:
//   Kaam: Application me "Permission Denied" errors ko securely fix karna.
//   Action: User aur Group ownership assign karo: `sudo chown -R www-data:www-data /var/www/html` -> Directory permissions (755): `sudo find /var/www/html -type d -exec chmod 755 {} +` -> File permissions (644): `sudo find /var/www/html -type f -exec chmod 644 {} +`.


// ================================================================================


// ========================================= 20. Windows vs Linux Commands Comparison (Complete Farq) ============ //
// ================================================================================

// --- NETWORKING ---
// 1. IP Address Check -----> Linux: ip a                             | Windows: ipconfig /all (ya Get-NetIPAddress)
// 2. Default Route / Gateway -----> Linux: ip route                         | Windows: route print (ya Get-NetRoute)
// 3. DNS Cache Clear -----> Linux: sudo resolvectl flush-caches     | Windows: ipconfig /flushdns (ya Clear-DnsClientCache)
// 4. Route Path Trace -----> Linux: traceroute google.com            | Windows: tracert google.com
// 5. Open Listening Ports -----> Linux: ss -tulnp                        | Windows: netstat -ano (ya Get-NetTCPConnection)
// 6. Specific Port Test -----> Linux: nc -zv <IP> <Port>               | Windows: Test-NetConnection -ComputerName <IP> -Port <P>
// 7. ARP Table (IP se MAC) -----> Linux: ip neigh                         | Windows: arp -a (ya Get-NetNeighbor)

// --- SYSTEM & PROCESSES ---
// 8. Service Status Check -----> Linux: systemctl status <service>       | Windows: Get-Service -Name <service> (ya sc query)
// 9. Service Restart -----> Linux: sudo systemctl restart <service> | Windows: Restart-Service -Name <service> -Force
// 10. Running Processes Dekhna -----> Linux: ps aux (ya top / htop)           | Windows: tasklist (ya Get-Process)
// 11. Process Kill Karna -----> Linux: kill -9 <PID> (ya pkill -9)      | Windows: taskkill /F /PID <PID> (ya Stop-Process)
// 12. Disk Space Check -----> Linux: df -h                            | Windows: Get-PSDrive -PSProvider FileSystem

// --- BASIC TERMINAL & FILES ---
// 13. Files / Folders List -----> Linux: ls -la                           | Windows: dir (ya Get-ChildItem)
// 14. Terminal Screen Clear -----> Linux: clear (Ctrl + L)                 | Windows: cls (ya Clear-Host / Ctrl + L)
// 15. System Reboot / Restart -----> Linux: sudo reboot                      | Windows: Restart-Computer -Force
// 16. Search Inside File (Grep) -----> Linux: grep                             | Windows: Select-String
// 17. Live Log Follow (Tail) -----> Linux: tail -f                          | Windows: Get-Content -Wait
// 18. Empty File Create -----> Linux: touch <file>                     | Windows: New-Item -ItemType File
// 19. Empty Trash / Cache -----> Linux: rm -rf ~/.cache/* ~/.local/share/Trash/* | Windows: Clear-RecycleBin -Force
// 20. Package Install / Update -----> Linux: sudo apt update && sudo apt upgrade -y | Windows: winget upgrade --all / winget install


// ================================================================================


// ========================================= 21. Dono Me Technically Kya Farq Hai? =============================== //
// ================================================================================

// 1. Output Format -----> Linux plain text string stream deta hai (jisme grep, awk, sed lagana padta hai). Windows PowerShell '.NET Objects' return karta hai.

// 2. Admin Rights -----> Linux me kisi bhi command ke aage 'sudo' lagate hain. Windows me terminal ko 'Run as Administrator' kholna padta hai.

// 3. Case Sensitive -----> Linux strictly case-sensitive hai (File.txt aur file.txt alag hain). Windows PowerShell case-insensitive hai.

// 4. Path Format -----> Linux forward slash (/) use karta hai (/var/log). Windows file system me backslash (\) use karta hai (C:\Windows\System32).

// 5. Cross-Platform -----> Pehle PowerShell sirf Windows par tha, ab open-source pwsh 7+ Linux par bhi chalta hai.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================

