// ========================================= Domain Knowledge: Field-Wise IT Support Systems ======================================= //
// Target: Universal IT Support & Aviation Systems Engineer — Module 4 Blueprint (Airports, Hotels, Hospitals, Logistics & Retail)
// ================================================================================

// ========================================= Domain Systems Kya Hai Aur IT Support Me Kyun Zaroori Hai? ======================================= //
// ChatGPT Se Liya Hua Syntex --->
// 1. Operating Systems, Networking aur Active Directory har jagah same rehte hain, lekin har industry (Airport, Hotel, Hospital, Warehouse) me specific proprietary software aur specialized hardware hote hain.
// 2. Dubai / Gulf IT Support me hiring company hamesha dekhti hai ki kya candidate ko unke specific domain ke devices (jaise Boarding Pass Printers, Opera PMS, Zebra Scanners) ki samajh hai ya nahi.
// 3. Format: Niche 5 core industries ke systems, unke hardware peripherals aur practical floor troubleshooting workflows diye gaye hain.

// ================================================================================


// ========================================= 1. Aviation & Airport Systems (Dubai / DXB / DWC Standard) ========================= //
// ================================================================================

// [ CONCEPT: Airport IT Terminal Architecture ]
// Ek modern international airport par hazaron check-in counters aur boarding gates hote hain jahan alag-alag airlines (Emirates, Flydubai, Qatar, British Airways) operate karti hain.

// 1. CUPPS & CUTE (Common Use Systems):
//    - CUTE -----> Common Use Terminal Equipment (Legacy platform).
//    - CUPPS -----> Common Use Passenger Processing System (Modern IATA international standard).
//    - Role: Ek hi physical check-in counter par subah Emirates baithti hai, dopahar me Indigo, aur raat me Lufthansa. CUPPS platform sabhi airlines ko unke respective server se connect karwata hai bina computer hardware badle.
//    - Floor Issue: Agar counter par airline ka application load na ho, toh CUPPS Client Daemon ko restart kiya jata hai.

// 2. DCS (Departure Control System):
//    - Role: Airline ka main passenger software jisme passenger check-in hota hai, seat allocate hoti hai, passport verify hota hai, aur baggage tag generate hota hai (e.g. Amadeus Altea, Sabre, SITA).

// 3. FIDS (Flight Information Display System):
//    - Role: Airport terminal par lagi hazaron LED/LCD TV screens jo flight arrival/departure time, gate number, aur delay status broadcast karti hain.
//    - IT Support Kaam: Screen freeze hone par digital signage media player box ko reboot karna, HDMI cable check karna, aur FIDS controller software se screen push refresh karna.

// 4. Boarding Gate & Check-in Peripherals (Specialized Hardware):
//    - ATB (Automated Ticket & Boarding Pass Printer) -----> Heavy-duty thermal printer jo mota boarding pass print karta hai (e.g. IER, Custom, VidTronic).
//    - BTP (Baggage Tag Printer) -----> Sticky thermal roll printer jo suitcase par lagne wala barcode bag tag print karta hai.
//    - BGR (Boarding Gate Reader) -----> Boarding gate par laga barcode scanner/turnstile jo passenger ke boarding pass ko scan karke gate open karta hai.
//    - OCR / Passport Reader -----> Check-in counter par MRZ (Machine Readable Zone) passport swipe reader.

// * Practical Airport Support Workflow (Paper Jam & Driver Freeze):
// - Problem: Counter 15 par BTP Bag-tag printer red light blink kar raha hai aur bag tag print nahi nikal raha (Flight check-in ruki hui hai - High Pressure!)
//   Step 1: Printer ka cover kholo -> Thermal roll sensor par lagi sticky glue dust ko IPA (Alcohol) wipe se clean karo.
//   Step 2: Paper roll alignment verify karo (Thermal side printhead ki taraf honi chahiye).
//   Step 3: Cover tight lock karo -> Green status light steady aayegi.
//   Step 4: Agar PC se print command atki hai: services.msc me jakar Print Spooler restart karo aur CUPPS local print agent ko reload karo. Test bag tag print nikalte hi counter live!


// ================================================================================


// ========================================= 2. Hotels & Hospitality Systems ==================================== //
// ================================================================================

// 1. Opera PMS (Property Management System by Oracle):
//    - Role: 5-Star aur 7-Star hotels ka core operating system jisme guest room booking, check-in/check-out, billing aur room status manage hota hai.
//    - IT Support Kaam: Opera Client database connectivity test karna, Oracle Client TNSNames.ora configuration verify karna, aur Opera workstation print drivers map karna.

// 2. Keycard Encoders (RFID Room Key Machine):
//    - Role: Guest ke plastic card me room number aur stay dates encode (write) karne wali USB/COM port machine (e.g. VingCard, Assa Abloy, Saflok).
//    - Floor Troubleshooting: Jab keycard encoder respond na kare, Device Manager me check karo COM Port number (e.g. COM3) Opera PMS ki settings se match karta hai ya nahi. USB-to-Serial converter driver update karo.

// 3. Guest Wi-Fi Portal & Bandwidth Management:
//    - Role: Guest jab hotel Wi-Fi connect karta hai toh room number aur last name daalne par Captive Portal khulta hai.
//    - Support Kaam: Captive portal DNS redirect issue fix karna, aur VIP guests ko high-speed dedicated bandwidth assign karna.


// ================================================================================


// ========================================= 3. Hospitals & Healthcare Systems ================================== //
// ================================================================================

// 1. HIS (Hospital Information System):
//    - Role: Patient OPD registration, doctor consultation notes, lab test reports aur pharmacy billing ka central ERP software.
//    - Support Kaam: Doctor ke desk PC par HIS client install karna, secure session timeout configure karna, aur digital prescription printer map karna.

// 2. Token Display Queue Systems:
//    - Role: Waiting area me lagi TV screens jahan doctor room number aur token display hota hai audio announcement ke sath.
//    - Troubleshooting: Network IP conflict check karna, Token Controller hardware box reboot karna, aur audio 3.5mm jack / HDMI audio output verify karna.

// 3. Doctor Desk & Lab Barcode Printers:
//    - Role: Blood sample test tubes par lagne wale tiny barcode label printers. Calibration button daba kar label gap alignment test karna.


// ================================================================================


// ========================================= 4. Logistics & Warehouses (JAFZA / Ports / Cargo) =================== //
// ================================================================================

// 1. Handheld PDA & RF Barcode Scanners:
//    - Hardware: Rugged Android/Windows CE mobile computers (e.g. Zebra TC52, Honeywell Dolphin).
//    - Role: Cargo arrival, warehouse rack inventory scanning, aur dispatch loading.
//    - Support Kaam: Wi-Fi roaming configuration (802.11r/k), MDM enrollment (SOTI MobiControl / Intune), barcode scan engine laser calibration, aur battery swap testing.

// 2. Zebra Industrial Thermal Shipping Printers:
//    - Models: Zebra ZT410, ZD420, SATO printers.
//    - Role: Shipping container labels aur airway bills print karna.
//    - Floor Troubleshooting:
//      - Calibration Fix: Feed button hold karke 2 flashes ke baad chhodna (Automatic Media Sensor Calibration).
//      - Thermal Head Clean: 99% Isopropyl Alcohol se printhead ke upar ki black ink line clean karna taaki barcode scanner se easily read ho sake.

// 3. Industrial Warehouse Access Points (APs):
//    - High-density metal rack environments me Wi-Fi dead zones dhoondna aur directional antenna alignment verify karna.


// ================================================================================


// ========================================= 5. Retail & Shopping Malls ========================================== //
// ================================================================================

// 1. POS (Point of Sale) Billing Machines:
//    - Hardware: All-in-one Touchscreen POS terminals (e.g. HP Engage, Posiflex).
//    - Role: Cash counter billing, barcode scanning aur invoice print.

// 2. Thermal Receipt Printers (ESC/POS Standard):
//    - Models: Epson TM-T88, Star Micronics.
//    - Interface: USB, Ethernet ya Serial COM port.
//    - Cash Drawer Trigger (RJ11 Cable): Bill print hone ke sath hi niche ka cash drawer automatic pop-open hona chahiye. Agar open na ho, toh Printer Properties me "Device Settings" me jakar "Cash Drawer: Open Before Printing" enable kiya jata hai.

// 3. Credit Card Payment Terminal (EDC Machine):
//    - Connectivity: Ethernet LAN cable ya 4G SIM. Static IP aur bank gateway port reachability verify karna.

// ================================================================================
// Note created for Tausif Qureshi | Universal IT Support & Systems Engineer Blueprint
// ================================================================================
