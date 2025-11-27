// ===== EXTENSIVE KNOWLEDGE BASE - Comprehensive Q&A Database =====
const knowledgeBase = {
    // ========== GREETINGS & BASIC INTERACTIONS ==========
    'hi': 'Hello! How can I help you today? 😊',
    'hello': 'Hi there! What would you like to know?',
    'hey': 'Hey! How\'s it going?',
    'good morning': 'Good morning! Hope you have a great day! 🌞',
    'good afternoon': 'Good afternoon! What\'s up?',
    'good evening': 'Good evening! How was your day? 🌇',
    'how are you': 'I\'m great! Thanks for asking. How about you?',
    'whats up': 'Not much, just hanging out here. You?',
    
    // ========== MOOD & CASUAL ==========
    'i am fine': 'Glad to hear that! 😄',
    'i am good': 'Awesome! What are you up to today?',
    'sad': 'Oh no 😢. Want to talk about it?',
    'happy': 'Yay! I love happy vibes 😎',
    'bored': 'Bored? Let\'s chat! I can suggest fun topics or games.',

    // ========== GRATITUDE / POLITENESS ==========
    'thank you': 'You\'re very welcome! Feel free to ask more questions anytime!',
    'thanks': 'No problem! Anytime!',
    'thanks a lot': 'My pleasure! Glad I could help!',
    'appreciate it': 'Anytime! I\'m always here to help you learn! 🎓',

    // ========== GOODBYES ==========
    'bye': 'Goodbye! Feel free to come back anytime you have questions! 👋',
    'goodbye': 'See you later! Have a great day! 😊',
    'see you': 'Take care! Come back anytime!',
    'exit': 'Goodbye! Happy learning! 📚',
    'see ya': 'See you soon! Keep learning! 🎓',
    'later': 'Catch you later! Come back anytime! 👋',

    // ========== BASIC COMPUTER CONCEPTS ==========
    'computer': 'A computer is an electronic device that processes data and performs tasks according to a set of instructions called programs. It consists of hardware (CPU, RAM, storage) and software (operating system, applications).',
    'hardware': 'Computer hardware refers to the physical components of a computer system, such as CPU, RAM, motherboard, hard drives, SSDs, GPU, and input/output devices like keyboard and mouse.',
    'software': 'Computer software is a collection of programs and instructions that tell the hardware what to do. Examples include operating systems, applications, and utility programs.',
    'input device': 'An input device is hardware that allows the user to send data to a computer. Examples: keyboard, mouse, scanner, microphone.',
    'output device': 'An output device is hardware that receives data from a computer and presents it to the user. Examples: monitor, printer, speakers.',
    'storage device': 'Storage devices are used to store data permanently or temporarily. Examples: Hard Disk Drives (HDD), Solid State Drives (SSD), USB drives.',
    'cpu': 'CPU (Central Processing Unit) is the brain of the computer. It performs calculations, executes instructions, and controls other hardware components.',
    'ram': 'RAM (Random Access Memory) is temporary memory that stores data the CPU is currently using. More RAM means better multitasking.',
    'motherboard': 'The motherboard is the main circuit board of a computer. It connects all components like CPU, RAM, storage, and expansion cards.',
    'monitor': 'A monitor is an output device that displays images, videos, and interface elements from the computer.',
    'keyboard': 'A keyboard is an input device used to type text and enter commands into a computer.',
    'mouse': 'A mouse is a pointing input device used to interact with graphical elements on a screen.',
    'printer': 'A printer is an output device that produces physical copies of digital documents.',
    'software application': 'Software applications are programs designed to perform specific tasks for the user, like Microsoft Word, Excel, or a web browser.',
    'pc': 'A PC (Personal Computer) is a computer designed for individual use, typically running Windows, Linux, or macOS.',
    'laptop': 'A laptop is a portable personal computer with an integrated screen, keyboard, and battery.',
    'desktop': 'A desktop is a stationary personal computer designed for regular use at a single location.',
    'peripheral': 'Peripherals are external devices connected to a computer, such as keyboards, mice, printers, and webcams.',
    'network': 'A network is a group of interconnected computers that share resources and communicate. The Internet is the largest network.',
    'internet': 'The Internet is a global network of interconnected computers using standard protocols to share information and services.',

     // ===== Programming =====
    'python': 'Python is a high-level, interpreted programming language. It’s beginner-friendly due to its simple syntax and readability. Python is widely used in web development (Django, Flask), data science (Pandas, NumPy), machine learning (TensorFlow, PyTorch), automation, and scripting. Its versatility makes it a top choice for both beginners and professionals.',
    'java': 'Java is a versatile, object-oriented programming language that runs on the Java Virtual Machine (JVM), making it platform-independent. It is used in enterprise software, Android apps, web applications, and large-scale systems. Java emphasizes strong typing, modularity, and scalability.',
    'javascript': 'JavaScript is a dynamic programming language mainly used for interactive web pages. It runs in browsers and on servers via Node.js. JS frameworks like React, Angular, and Vue help build dynamic front-end applications, while Node.js enables backend development.',
    'c++': 'C++ is a compiled, high-performance language often used for system software, game development, and competitive programming. It supports object-oriented programming and low-level memory manipulation, giving developers control over hardware resources.',
    'php': 'PHP is a server-side scripting language primarily used for building dynamic websites and web applications. Popular CMS platforms like WordPress, Drupal, and Joomla are built using PHP.',
    'ruby': 'Ruby is a high-level, interpreted programming language focused on simplicity and productivity. It powers web applications via the Ruby on Rails framework, known for its elegant syntax and rapid development capabilities.',
    'swift': 'Swift is Apple’s modern programming language used for iOS, macOS, watchOS, and tvOS development. It’s designed to be safe, fast, and expressive, with a syntax that reduces common programming errors.',

    // ===== Web Development =====
    'html': 'HTML (HyperText Markup Language) is the backbone of web pages. It structures content using tags like headings, paragraphs, links, images, and tables. HTML5 introduced new features like audio, video, and semantic elements for modern web apps.',
    'css': 'CSS (Cascading Style Sheets) styles HTML elements by controlling layout, colors, fonts, spacing, and animations. Advanced CSS techniques include flexbox, grid layout, transitions, and responsive design for mobile-friendly sites.',
    'react': 'React is a JavaScript library for building dynamic, interactive user interfaces. It uses components to break the UI into reusable pieces. React supports virtual DOM for efficient rendering and is widely used in web apps like Facebook, Instagram, and Netflix.',
    'angular': 'Angular is a TypeScript-based front-end framework for building scalable, single-page applications (SPAs). It provides two-way data binding, dependency injection, and modular architecture to simplify complex app development.',
    'node.js': 'Node.js is a JavaScript runtime that allows executing JS on the server side. It’s built on Chrome’s V8 engine and is widely used to build APIs, web servers, real-time applications, and backend services with frameworks like Express.',
    'apis': 'APIs (Application Programming Interfaces) let software communicate. REST APIs use HTTP methods (GET, POST, PUT, DELETE) to interact with servers, while GraphQL allows flexible queries. APIs are essential for modern apps, connecting databases, services, and third-party apps.',

    // ===== AI / Machine Learning =====
    'machine learning': 'Machine Learning enables systems to learn patterns from data and make predictions without explicit programming. Applications include recommendation systems, fraud detection, image recognition, and predictive analytics.',
    'deep learning': 'Deep Learning uses neural networks with multiple layers to model complex patterns. It powers AI like voice assistants, self-driving cars, and advanced image/video recognition.',
    'data science': 'Data Science combines statistics, programming, and domain knowledge to extract insights from data. It involves data cleaning, visualization, modeling, and interpreting results to make data-driven decisions.',

    // ===== Databases =====
    'mysql': 'MySQL is an open-source relational database system. It organizes data in tables and supports SQL queries. Commonly used in web apps, e-commerce sites, and backend systems.',
    'mongodb': 'MongoDB is a NoSQL document database that stores data in JSON-like format. It’s great for scalable, flexible applications where data structure can vary.',
    'postgresql': 'PostgreSQL is an advanced relational database system that supports complex queries, ACID transactions, and extensions like PostGIS for geospatial data.',
    'nosql': 'NoSQL databases store unstructured or semi-structured data using key-value, document, column, or graph models. They excel in scalability and flexibility for modern apps like social media platforms.',

    // ===== Hardware =====
    'cpu': 'The CPU (Central Processing Unit) executes instructions and performs calculations for the computer. Its speed is measured in GHz and performance depends on cores, threads, and architecture.',
    'ram': 'RAM (Random Access Memory) is temporary memory that stores data currently in use for fast access by the CPU. More RAM improves multitasking and performance in apps and games.',
    'gpu': 'GPU (Graphics Processing Unit) accelerates rendering of images, videos, and animations. It is essential for gaming, video editing, and deep learning tasks.',
    'ssd': 'SSD (Solid State Drive) stores data using flash memory. It’s faster, quieter, and more reliable than traditional HDDs, drastically reducing boot times and loading speeds.',
    'motherboard': 'The motherboard connects all computer components, including CPU, RAM, storage, and peripherals. It determines system compatibility and expansion capabilities.',

    // ===== Operating Systems =====
    'windows': 'Windows is Microsoft’s OS, widely used for personal computers and enterprise environments. Known for a GUI interface, gaming support, and software compatibility.',
    'linux': 'Linux is an open-source OS used in servers, desktops, and embedded systems. Popular distributions include Ubuntu, Fedora, and CentOS. It’s known for stability, security, and customization.',
    'macos': 'macOS is Apple’s desktop OS, offering a smooth interface and ecosystem integration. Popular among designers and developers for its Unix-based architecture.',
    'android': 'Android is Google’s mobile OS, used in smartphones and tablets. It’s open-source and highly customizable, supporting apps from the Google Play Store.',
    'ios': 'iOS is Apple’s mobile OS for iPhones and iPads. It’s known for security, performance, and seamless app integration with the Apple ecosystem.',

    // ===== Networking =====
    'internet': 'The Internet is a global network connecting millions of devices. It uses protocols like TCP/IP for data transmission and powers web browsing, email, streaming, and cloud services.',
    'ip': 'An IP address uniquely identifies a device on a network. IPv4 addresses are 32-bit, while IPv6 are 128-bit, allowing more devices to connect.',
    'dns': 'DNS (Domain Name System) translates domain names (like google.com) into IP addresses that computers use to locate servers.',
    'vpn': 'A VPN (Virtual Private Network) encrypts internet traffic, allowing secure communication over public networks and masking the user’s IP address.',
    'cloud': 'Cloud computing provides on-demand computing resources over the Internet. Services include storage (Google Drive, Dropbox), computing (AWS, Azure), and software platforms.',

    // ===== Security =====
    'encryption': 'Encryption converts data into unreadable form for anyone without the decryption key. Common types include AES, RSA, and TLS for secure communications.',
    'malware': 'Malware includes viruses, worms, ransomware, and spyware. It’s designed to disrupt, damage, or gain unauthorized access to systems.',
    'phishing': 'Phishing tricks users into sharing sensitive info, often via fake emails or websites. Awareness and verification are key defenses.',
    'firewall': 'A firewall monitors and filters network traffic to prevent unauthorized access. It can be hardware or software-based.',

    // ===== Mobile Development =====
    'flutter': 'Flutter is Google’s UI toolkit for building natively compiled apps for mobile, web, and desktop. It uses Dart language and provides a fast, expressive framework.',
    'react native': 'React Native allows building native mobile apps using JavaScript and React. It enables cross-platform development for iOS and Android with a shared codebase.',
    'app development': 'App development involves designing, coding, testing, and deploying applications for mobile or desktop. Tools include Android Studio, Xcode, Flutter, and React Native.',

     // ========== OPERATING SYSTEMS ==========
    'what is os': 'OS stands for Operating System. It is system software that manages computer hardware and software resources and provides common services for computer programs. Examples include Windows, macOS, Linux, Android, and iOS. The OS acts as an intermediary between users and the computer hardware.',
    'operating system': 'An Operating System (OS) is the most important software that runs on a computer. It manages the computer\'s memory, processes, and all of its software and hardware. It also allows you to communicate with the computer without knowing how to speak the computer\'s language.',
    'what is windows': 'Windows is a popular operating system developed by Microsoft. It provides a graphical user interface (GUI) and supports multitasking. Current versions include Windows 10 and Windows 11. It\'s widely used in personal computers and businesses.',
    'what is linux': 'Linux is a free and open-source operating system based on Unix. It\'s known for its stability, security, and flexibility. Popular distributions include Ubuntu, Fedora, Debian, and CentOS. It\'s widely used in servers, supercomputers, and Android devices.',
    'what is macos': 'macOS is Apple\'s operating system for Mac computers. It\'s known for its sleek design, user-friendly interface, and tight integration with other Apple devices. It\'s based on Unix and is popular among creative professionals.',
    'what is android': 'Android is a mobile operating system developed by Google, based on Linux. It\'s the most widely used mobile OS globally, powering billions of smartphones and tablets. It\'s open-source and highly customizable.',
    'what is ios': 'iOS is Apple\'s mobile operating system used in iPhones and iPads. It\'s known for its smooth performance, security, and seamless integration with the Apple ecosystem. iOS apps are available through the App Store.',
    'os process': 'A process is a running program containing code, data, registers, stack and its own memory space.',
    'thread': 'A thread is the smallest unit of execution within a process. Multiple threads share memory.',
    'multithreading': 'Multithreading allows multiple parts of the same program to run simultaneously.',
    'scheduling': 'CPU scheduling decides which process gets CPU time next. Common algorithms: FCFS, SJF, RR, Priority.',
    'deadlock': 'Deadlock is a situation where processes wait on each other forever. Four conditions: Mutual exclusion, Hold & Wait, No preemption, Circular wait.',
    'semaphore': 'Semaphores control access to shared resources in concurrent systems.',
    'paging': 'Paging divides memory into fixed size blocks to avoid fragmentation.',
    'segmentation': 'Segmentation divides memory into variable-sized sections based on logic (code, stack, heap).',
    'system call': 'System calls provide an interface between user programs and the OS kernel.',
    'context switching': 'Context switching saves and restores CPU states when switching between processes.',

    // File Systems
    'ext4': 'ext4 is a modern Linux file system offering journaling, large storage support, and reliability.',
    'ntfs': 'NTFS is Windows’ file system with permissions, encryption, compression and journaling.',
    'apfs': 'APFS is Apple’s file system optimized for SSDs with snapshot support.',

    // Boot process
    'bootloader': 'A bootloader loads the operating system into memory. Example: GRUB.',

    // ========================================================
    // HARDWARE (ADVANCED)
    // ========================================================

    'pci express': 'PCIe is a high-speed interface used for GPUs, SSDs, and expansion cards.',
    'cpu cache': 'CPU cache stores frequently used data. Levels: L1, L2, L3.',
    'pipeline': 'Pipelining executes multiple instruction stages simultaneously for speed.',
    'overclocking': 'Overclocking increases CPU clock speed for improved performance.',
    'thermal throttling': 'When a CPU overheats, it slows down to prevent damage.',
    'hdd': 'HDD uses spinning magnetic platters for large but slower storage.',
    'ssd lifespan': 'SSDs use flash memory and have write cycle limits, but modern SSDs last many years.',
    'usb': 'USB is a universal interface for devices. Versions include USB 2.0, 3.0, 3.1, 3.2, Type-C.',
    'monitor types': 'Common monitors: LCD, LED, OLED, IPS, TN, VA.',
    'keyboard types': 'Membrane keyboards are soft, mechanical keyboards use physical switches.',

    // ========================================================
    // PROGRAMMING (ADVANCED)
    // ========================================================

    'variable': 'A variable stores data that can change during program execution.',
    'function': 'Functions are reusable blocks of code that perform tasks.',
    'recursion': 'Recursion is when a function calls itself to solve a problem.',
    'compiler vs interpreter': 'Compiler converts whole code at once; interpreter runs line-by-line.',
    'object oriented': 'OOP uses classes and objects. Features: Inheritance, Polymorphism, Abstraction, Encapsulation.',
    'polymorphism': 'Polymorphism allows one interface, multiple forms. Example: function overloading.',
    'inheritance': 'Inheritance lets one class acquire features of another class.',
    'abstraction': 'Abstraction hides unnecessary details and shows essential features.',
    'encapsulation': 'Encapsulation protects data using private variables and getters/setters.',
    'exception handling': 'Exception handling prevents program crashes using try-catch blocks.',
    'pointer': 'Pointers store memory addresses. Used heavily in C/C++.',
    'lambda function': 'Lambda functions are small anonymous functions used for short tasks.',
    'framework': 'Framework provides pre-built tools and structure for development.',
    'library': 'A library is a collection of pre-written functions you can use.',
    // ========== COMPUTER HARDWARE ==========
    'define cpu': 'CPU stands for Central Processing Unit. It is the primary component of a computer that performs instructions and processes data. Often called the "brain" of the computer, it executes program instructions from memory and coordinates all computer activities. Modern CPUs can have multiple cores for parallel processing.',
    'what is cpu': 'The CPU (Central Processing Unit) is the brain of your computer. It performs calculations, executes instructions, and manages data flow. Popular CPU manufacturers include Intel and AMD.',
    'processor': 'A processor, also known as CPU, is the electronic circuitry that executes instructions comprising a computer program. It performs basic arithmetic, logic, controlling, and input/output operations.',
    'what is ram': 'RAM stands for Random Access Memory. It is a type of volatile memory that temporarily stores data and programs that the CPU is actively using. More RAM generally means better multitasking performance. When you turn off your computer, all data in RAM is lost.',
    'ram': 'RAM (Random Access Memory) is your computer\'s short-term memory. It temporarily stores data that your computer is currently using, making it quick to access. Unlike storage drives, RAM is volatile - it loses all data when powered off.',
    'what is rom': 'ROM stands for Read-Only Memory. It\'s a type of non-volatile memory that permanently stores instructions for the computer. ROM retains data even when the computer is turned off. It\'s commonly used for firmware and BIOS.',
    'what is motherboard': 'The motherboard is the main circuit board of a computer. It connects all components together including CPU, RAM, storage drives, and expansion cards. It allows communication between all hardware components.',
    'what is gpu': 'GPU stands for Graphics Processing Unit. It\'s a specialized processor designed to handle graphics and image processing. Modern GPUs are also used for AI, machine learning, cryptocurrency mining, and scientific computations. Popular brands include NVIDIA and AMD.',
    'what is hard disk': 'A hard disk (HDD) is a data storage device that uses magnetic storage to store and retrieve digital data. It has spinning platters and read/write heads. HDDs offer large storage capacity at lower cost but are slower than SSDs.',
    'what is ssd': 'SSD stands for Solid State Drive. It\'s a storage device that uses flash memory (no moving parts) to store data. SSDs are much faster, more durable, and energy-efficient than traditional hard disks, but typically more expensive per gigabyte.',
    'what is cache': 'Cache is a small, high-speed memory that stores frequently accessed data to speed up processing. CPUs have multiple levels of cache (L1, L2, L3) to reduce latency when accessing data from RAM.',
    
    // ========== PROGRAMMING LANGUAGES ==========
    'what is programming': 'Programming is the process of creating instructions for computers to follow. It involves writing code in various programming languages like Python, Java, JavaScript, C++, etc., to solve problems and create applications. Programmers use logic and algorithms to build software.',
    'programming': 'Programming is the art and science of writing instructions that tell a computer what to do. It involves problem-solving, logical thinking, and creativity to build applications, websites, games, and more.',
    'what is python': 'Python is a high-level, interpreted programming language known for its simple and readable syntax. It\'s widely used in web development (Django, Flask), data science, artificial intelligence, machine learning, automation, and scientific computing. Python is beginner-friendly yet powerful.',
    'python': 'Python is one of the most popular programming languages. It\'s easy to learn, versatile, and powerful. Used in web development, data science, AI, automation, and more. Created by Guido van Rossum in 1991.',
    'what is java': 'Java is a popular object-oriented programming language that follows the principle "write once, run anywhere." It\'s used for building enterprise applications, Android apps, web servers, and more. Java is known for its portability, security, and robustness.',
    'java': 'Java is a powerful, platform-independent programming language. It\'s widely used in enterprise applications, Android development, and large-scale systems. Java emphasizes object-oriented programming principles.',
    'what is javascript': 'JavaScript is a programming language used to create interactive and dynamic content on websites. It runs in web browsers and enables features like animations, form validation, real-time updates, games, and interactive maps. JavaScript is one of the core technologies of the web along with HTML and CSS.',
    'javascript': 'JavaScript is the programming language of the web. It makes websites interactive and dynamic. You can create animations, handle user input, fetch data from servers, and build entire web applications. Also used in Node.js for server-side development.',
    'what is c++': 'C++ is a powerful, high-performance programming language. It\'s an extension of C with object-oriented features. Used in game development, system software, drivers, embedded systems, and applications requiring high performance. It gives direct control over hardware.',
    'what is c': 'C is a general-purpose programming language developed in the 1970s. It\'s known for its efficiency and control over system resources. C is used in operating systems, embedded systems, and system programming. Many modern languages are influenced by C.',
    'what is php': 'PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It\'s embedded in HTML and executes on the server. PHP powers popular platforms like WordPress, Facebook, and Wikipedia. It\'s excellent for creating dynamic web pages.',
    'what is ruby': 'Ruby is a dynamic, object-oriented programming language known for its elegant syntax. Ruby on Rails is a popular web framework built with Ruby. It emphasizes simplicity and productivity, making it popular for web development and startups.',
    'what is swift': 'Swift is a powerful programming language developed by Apple for iOS, macOS, watchOS, and tvOS development. It\'s designed to be fast, safe, and modern. Swift replaced Objective-C as the primary language for Apple app development.',
    'what is kotlin': 'Kotlin is a modern programming language that runs on the Java Virtual Machine (JVM). It\'s officially supported by Google for Android development. Kotlin is concise, safe, and interoperable with Java, making it popular for mobile app development.',
    'what is sql': 'SQL (Structured Query Language) is a standard language for managing and manipulating relational databases. It\'s used to create, read, update, and delete data. SQL is essential for database management and data analysis.',
    'what is typescript': 'TypeScript is a superset of JavaScript that adds static typing. Developed by Microsoft, it helps catch errors during development and improves code quality. TypeScript compiles to JavaScript and is popular in large-scale applications.',
    
    // ========== WEB DEVELOPMENT ==========
    'what is html': 'HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages. HTML describes the structure of a web page using elements and tags like headings, paragraphs, links, images, forms, etc. Every website you visit uses HTML.',
    'html': 'HTML (HyperText Markup Language) is the backbone of web pages. It defines the structure and content using tags and elements. HTML5 is the latest version with new features like video, audio, canvas, and semantic elements.',
    'what is css': 'CSS stands for Cascading Style Sheets. It is used to describe the presentation of HTML elements, including colors, layouts, fonts, animations, and responsive design. CSS makes websites beautiful and user-friendly. Without CSS, websites would look plain and boring.',
    'css': 'CSS (Cascading Style Sheets) is what makes websites look attractive. It controls colors, fonts, spacing, layouts, animations, and responsive design. Modern CSS includes Flexbox, Grid, transitions, and animations.',
    'what is react': 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It uses a component-based architecture and virtual DOM for efficient rendering. React is widely used for creating single-page applications and mobile apps (React Native).',
    'what is angular': 'Angular is a comprehensive TypeScript-based web framework developed by Google. It provides a complete solution for building dynamic web applications with features like two-way data binding, dependency injection, and routing.',
    'what is vue': 'Vue.js is a progressive JavaScript framework for building user interfaces. It\'s designed to be incrementally adoptable and focuses on the view layer. Vue is known for its simplicity, flexibility, and gentle learning curve.',
    'what is node.js': 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that allows JavaScript to run on servers. It\'s used for building scalable network applications, APIs, and real-time applications. Node.js uses an event-driven, non-blocking I/O model.',
    'what is api': 'API stands for Application Programming Interface. It\'s a set of rules and protocols that allows different software applications to communicate with each other. APIs enable developers to access features or data from other applications, services, or platforms.',
    'what is rest api': 'REST (Representational State Transfer) API is an architectural style for building web services. It uses HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources. REST APIs are stateless, scalable, and widely used in modern web development.',
    'what is json': 'JSON (JavaScript Object Notation) is a lightweight data interchange format. It\'s easy for humans to read and write, and easy for machines to parse and generate. JSON is widely used for transmitting data between servers and web applications.',
    'what is bootstrap': 'Bootstrap is a popular front-end framework for building responsive websites quickly. It provides pre-built CSS and JavaScript components like navigation bars, forms, buttons, and grids. Developed by Twitter, it\'s widely used for rapid web development.',
    'what is webpack': 'Webpack is a module bundler for JavaScript applications. It takes modules with dependencies and generates static assets. Webpack is essential in modern web development for optimizing and bundling code, styles, and assets.',
    
    // ========== ARTIFICIAL INTELLIGENCE & MACHINE LEARNING ==========
    'what is ai': 'AI stands for Artificial Intelligence. It refers to computer systems designed to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, natural language processing, and learning from experience. AI includes machine learning and deep learning.',
    'artificial intelligence': 'Artificial Intelligence (AI) is the simulation of human intelligence by machines. AI systems can learn, reason, perceive, and make decisions. Applications include virtual assistants, self-driving cars, recommendation systems, facial recognition, and chatbots like me!',
    'machine learning': 'Machine Learning is a subset of AI where computers learn from data without being explicitly programmed. The system improves its performance on a task through experience, identifying patterns and making predictions. Types include supervised, unsupervised, and reinforcement learning.',
    'what is deep learning': 'Deep Learning is a subset of machine learning that uses artificial neural networks with multiple layers. It\'s inspired by the human brain and excels at tasks like image recognition, natural language processing, and speech recognition. Deep learning powers technologies like self-driving cars and virtual assistants.',
    'what is neural network': 'A neural network is a computing system inspired by biological neural networks. It consists of interconnected nodes (neurons) organized in layers. Neural networks learn by adjusting connections between neurons based on training data. They\'re used in pattern recognition, classification, and prediction.',
    'what is data science': 'Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, programming, machine learning, and domain expertise to solve complex problems.',
    'what is big data': 'Big Data refers to extremely large datasets that cannot be processed using traditional methods. It\'s characterized by the 3 Vs: Volume (large amount), Velocity (high speed), and Variety (different types). Big Data is used in business analytics, healthcare, finance, and social media.',
    'what is algorithm': 'An algorithm is a step-by-step procedure or formula for solving a problem. In computer science, algorithms are instructions that tell a computer how to perform a task. Examples include sorting algorithms, search algorithms, and machine learning algorithms.',
    'what is chatbot': 'A chatbot is an AI-powered program designed to simulate conversation with users. Chatbots use natural language processing to understand and respond to user queries. They\'re used in customer service, virtual assistants, education, and entertainment. I\'m a chatbot myself!',
    
    // ========== DATABASES ==========
    'what is database': 'A database is an organized collection of structured data stored electronically. It allows users to store, retrieve, update, and manage data efficiently. Examples include MySQL, PostgreSQL, MongoDB, Oracle, and SQL Server. Databases are essential for websites, applications, and businesses.',
    'database': 'A database is a structured collection of data that can be easily accessed, managed, and updated. There are relational databases (SQL) like MySQL and PostgreSQL, and non-relational databases (NoSQL) like MongoDB and Redis, each suited for different purposes.',
    'what is mysql': 'MySQL is a popular open-source relational database management system (RDBMS). It uses SQL for querying data and is widely used in web applications, especially with PHP. MySQL is known for its reliability, performance, and ease of use.',
    'what is mongodb': 'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It\'s designed for scalability and performance with large amounts of data. MongoDB is schema-less, making it ideal for applications with evolving data structures.',
    'what is postgresql': 'PostgreSQL is a powerful, open-source relational database system known for its reliability, feature robustness, and performance. It supports both SQL and JSON querying. PostgreSQL is used in enterprise applications and data analytics.',
    'what is nosql': 'NoSQL (Not Only SQL) databases are non-relational databases designed for distributed data stores. They handle unstructured and semi-structured data better than traditional SQL databases. Types include document stores (MongoDB), key-value stores (Redis), and graph databases (Neo4j).',
    
    // ========== NETWORKING & INTERNET ==========
    'what is network': 'A computer network is a group of interconnected computers that share resources and information. Networks can be local (LAN) or wide area (WAN). The internet is the largest network, connecting billions of devices worldwide using TCP/IP protocols.',
    'internet': 'The Internet is a global network of interconnected computers that communicate using standardized protocols (TCP/IP). It enables services like email, web browsing, streaming, social media, online gaming, and cloud computing. It\'s the backbone of modern communication.',
    'what is ip address': 'An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a network. It identifies the device and enables communication. There are two versions: IPv4 (e.g., 192.168.1.1) and IPv6 (longer addresses to accommodate more devices).',
    'what is dns': 'DNS (Domain Name System) is like the phonebook of the internet. It translates human-readable domain names (like google.com) into IP addresses that computers use to identify each other. DNS makes the internet user-friendly.',
    'what is http': 'HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted between web browsers and servers. HTTPS is the secure version that encrypts data for privacy.',
    'what is url': 'URL (Uniform Resource Locator) is the address of a resource on the internet. It specifies the location of a web page or file. A URL includes the protocol (http/https), domain name, and path (e.g., https://www.example.com/page).',
    'what is firewall': 'A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on security rules. It acts as a barrier between trusted internal networks and untrusted external networks like the internet, protecting against unauthorized access.',
    'what is vpn': 'VPN (Virtual Private Network) creates a secure, encrypted connection over the internet. It hides your IP address and encrypts your data, providing privacy and security. VPNs are used to access restricted content, protect privacy, and secure remote work connections.',
    'what is cloud computing': 'Cloud computing is the delivery of computing services (servers, storage, databases, networking, software) over the internet. Instead of owning physical hardware, users access resources on-demand. Popular cloud providers include AWS, Microsoft Azure, and Google Cloud.',
    
    // ========== CYBERSECURITY ==========
    'what is cybersecurity': 'Cybersecurity is the practice of protecting computers, networks, programs, and data from digital attacks, damage, or unauthorized access. It includes technologies, processes, and practices designed to protect systems from cyber threats like hacking, malware, and phishing.',
    'what is encryption': 'Encryption is the process of converting data into a coded format to prevent unauthorized access. Only authorized parties with the decryption key can read the data. Encryption is crucial for protecting sensitive information like passwords, financial data, and personal information.',
    'what is malware': 'Malware (malicious software) is any software designed to harm, exploit, or gain unauthorized access to computer systems. Types include viruses, worms, trojans, ransomware, and spyware. Antivirus software helps protect against malware.',
    'what is phishing': 'Phishing is a cyber attack where attackers impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data. It\'s usually done through fake emails, websites, or messages. Always verify sources before sharing information.',
    'what is ddos': 'DDoS (Distributed Denial of Service) is a cyber attack that floods a website or network with massive traffic from multiple sources, making it unavailable to legitimate users. It\'s used to disrupt services and can cause significant damage to businesses.',
    // ========================================================
    // CYBERSECURITY (ADVANCED)
    // ========================================================

    'brute force attack': 'Brute force attack tries all password combinations.',
    'sql injection': 'SQL injection tricks a database query to expose data.',
    'xss attack': 'XSS injects malicious scripts into websites.',
    'mitm attack': 'Man-in-the-Middle attack intercepts communication.',
    'keylogger': 'Keyloggers record keystrokes.',
    'firewall types': 'Types include packet filtering, proxy, stateful, next-gen.',

    // ========================================================
    // CLOUD (More)
    // ========================================================

    'serverless': 'Serverless computing runs code without managing servers.',
    'containers': 'Containers package apps with dependencies (Docker).',
    'kubernetes': 'Kubernetes orchestrates containerized applications.',
    'cloud storage': 'Cloud storage saves data online (S3, Google Drive).',

    // ========================================================
    // MOBILE DEV (More)
    // ========================================================

    'apk': 'APK is Android application package.',
    'aab': 'AAB is Android App Bundle, more optimized.',
    'jetpack compose': 'Modern Android UI toolkit.',
    'swiftui': 'Apple’s UI framework.',

    // ========================================================
    // GENERAL
    // ========================================================
    // ========== SOFTWARE DEVELOPMENT ==========
    'what is software': 'Software is a collection of instructions, data, or programs used to operate computers and execute specific tasks. There are two main types: system software (like operating systems) and application software (like Microsoft Word, games, or mobile apps).',
    'what is git': 'Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to work on the same project simultaneously. GitHub, GitLab, and Bitbucket are popular platforms that host Git repositories.',
    'what is github': 'GitHub is a web-based platform for version control and collaboration using Git. It hosts millions of software projects and allows developers to share code, collaborate on projects, track issues, and contribute to open-source software.',
    'what is ide': 'IDE (Integrated Development Environment) is a software application that provides comprehensive facilities for software development. It typically includes a code editor, debugger, and build automation tools. Popular IDEs include Visual Studio Code, IntelliJ IDEA, and PyCharm.',
    'what is debugging': 'Debugging is the process of finding and fixing errors (bugs) in software code. Developers use debugging tools and techniques to identify issues, test solutions, and ensure the program works correctly. It\'s an essential skill in programming.',
    'what is framework': 'A framework is a platform for developing software applications. It provides a foundation with pre-written code, libraries, and tools that developers can use to build applications faster. Examples include Django (Python), React (JavaScript), and Spring (Java).',
    
    // ========== MOBILE DEVELOPMENT ==========
    'what is mobile app': 'A mobile app is a software application designed to run on mobile devices like smartphones and tablets. Apps can be native (built for specific platforms like iOS or Android), web-based, or hybrid. They\'re downloaded from app stores and serve various purposes.',
    'what is flutter': 'Flutter is an open-source UI framework developed by Google for building cross-platform applications. With a single codebase, you can create apps for Android, iOS, web, and desktop. Flutter uses the Dart programming language and is known for its fast performance.',
    'what is react native': 'React Native is a framework for building mobile apps using JavaScript and React. It allows developers to create native iOS and Android apps with a single codebase. Developed by Facebook, React Native is popular for cross-platform mobile development.',
    
    // ========== DATA STRUCTURES ==========
    'what is array': 'An array is a data structure that stores a collection of elements in contiguous memory locations. Elements are accessed by their index (position). Arrays are efficient for storing and accessing sequential data but have fixed size in some languages.',
    'what is linked list': 'A linked list is a data structure consisting of nodes where each node contains data and a reference to the next node. Unlike arrays, linked lists don\'t require contiguous memory. They\'re efficient for insertions and deletions but slower for random access.',
    'what is stack': 'A stack is a data structure that follows Last-In-First-Out (LIFO) principle. Elements are added and removed from the top. Think of it like a stack of plates - you add and remove from the top. Used in function calls, undo mechanisms, and expression evaluation.',
    'what is queue': 'A queue is a data structure that follows First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front. Like a line at a store - first person in line is served first. Used in scheduling, printing, and breadth-first search.',
    
    // ========== HELP & SUPPORT ==========
    'help': 'I can answer questions about:\n\n💻 Programming: Python, Java, JavaScript, C++, PHP, Ruby, Swift\n🌐 Web Dev: HTML, CSS, React, Angular, Node.js, APIs\n🤖 AI/ML: Machine Learning, Deep Learning, Data Science\n🗄️ Databases: MySQL, MongoDB, PostgreSQL, NoSQL\n🔧 Hardware: CPU, RAM, GPU, SSD, Motherboard\n💾 OS: Windows, Linux, macOS, Android, iOS\n🌍 Networking: Internet, IP, DNS, VPN, Cloud\n🔒 Security: Encryption, Malware, Phishing, Firewall\n📱 Mobile: Flutter, React Native, App Development\n\nJust ask me anything!',
    'what can you do': 'I can help you learn about technology topics! Ask me about programming languages, web development, artificial intelligence, databases, computer hardware, operating systems, networking, cybersecurity, mobile development, and much more. I\'m here to make learning easy and fun!',
    'topics': 'I can discuss: Programming Languages, Web Development, AI & Machine Learning, Databases, Computer Hardware, Operating Systems, Networking & Internet, Cybersecurity, Mobile Development, Software Engineering, Data Structures, Cloud Computing, and more!',
    
    // ========== THANKS & APPRECIATION ==========
    'thanks': 'You\'re welcome! Happy to help! 😊',
    'thank you': 'You\'re very welcome! Feel free to ask more questions anytime!',
    'thanks a lot': 'My pleasure! Glad I could help!',
    'appreciate it': 'Anytime! I\'m always here to help you learn! 🎓',
    'awesome': 'Glad you found it helpful! What else would you like to know?',
    'great': 'Thank you! Let me know if you have more questions!',
    'cool': 'Awesome! Feel free to ask anything else! 🚀',
    
    // ===== Greetings =====
    'hi': 'Heyyy! What’s up? 😎',
    'hello': 'Hii! How’s your day going?',
    'hey': 'Yo! How you feeling today?',
    'good morning': 'Good morning! Ready to smash the day? 🌞',
    'good afternoon': 'Good afternoon! How’s it going?',
    'good evening': 'Good evening! How was your day? 🌇',
    'whats up': 'Not much! Just chilling here. You?',
    'sup': 'Sup! How’s life?',
    'hii': 'Hey! Missed chatting with you 😁',
    'yo': 'Yo! What’s popping?',

    // ===== Mood & Feelings =====
    'how are you': 'I’m doing great! What about you?',
    'i am fine': 'Glad to hear that! 😄',
    'i am good': 'Awesome! What are you up to today?',
    'im good': 'Awesome! What are you up to today?',
    'sad': 'Oh no 😢. Want to talk about it?',
    'happy': 'Yay! I love happy vibes 😎',
    'bored': 'Bored? Let’s chat! I can suggest fun topics or games.',
    'excited': 'Whoa! Love that energy 😆',
    'tired': 'Take a break if you can 😌',

    // ===== Small Talk =====
    'nothing': 'Just chilling then 😏. Want to chat or ask something?',
    'cool': '😎 Right? Totally agree!',
    'lol': 'Haha! 😆 That made me laugh too!',
    'haha': '😄 Glad we’re laughing together!',
    'awesome': 'Yay! I love awesome moments!',
    'interesting': 'Hmm, tell me more about that!',
    'really': 'Yes, really! 😏',
    'nice': 'Nice! Keep it up!',
    'fun': 'Fun is the spice of life! 😄',
    'amazing': 'Amazing! Love hearing that!',

    // ===== Gratitude / Politeness =====
    'thank you': 'You’re welcome! Always happy to help! 😊',
    'thanks': 'No problem! Anytime!',
    'no problem': 'Glad I could help! 👍',
    'appreciate it': 'Anytime! I’m always here! 🎓',
    'thanks a lot': 'My pleasure! Glad I could help!',
    'much appreciated': 'Happy to help! 😄',

    // ===== Farewells =====
    'bye': 'Bye! Talk to you later! 👋',
    'good night': 'Good night! Sleep well! 🌙',
    'see you': 'See you later! Take care! 🙌',
    'take care': 'You too! Stay safe and happy! 🌟',
    'see ya': 'See you soon! Keep learning! 🎓',
    'later': 'Catch you later! Come back anytime! 👋',

    // ===== Fun / Jokes =====
    'tell me a joke': 'Why did the computer go to the doctor? Because it caught a virus! 😆',
    'joke': 'I have a million jokes! Why did the programmer quit his job? Because he didn’t get arrays 😄',
    'funny': 'I’ve got some puns if you want! 😜',
    'make me laugh': 'What do you call 8 hobbits? A hob-byte! 😎',
    'laugh': '😂 You just cracked me up!',

    // ===== Random / Casual =====
    'what are you doing': 'Just chatting with you 😏',
    'what is going on': 'Not much, just ready to answer your questions!',
    'tell me something': 'Did you know that honey never spoils? 🍯',
    'any tips': 'Always stay curious and keep learning! 🚀',
    'advice': 'Keep practicing what you love and don’t give up!',
    'story': 'Once upon a time, there was a coder who could talk to AI… 😎',
    'fact': 'Octopuses have three hearts! ❤️❤️❤️',
    'cool fact': 'Did you know bananas are berries, but strawberries aren’t? 🍌🍓',
    'random': 'Random fact: A group of flamingos is called a “flamboyance”! 🦩',
    'thoughts': 'Hmm, thinking about AI and human creativity 🤖✨',

    // ===== Tech Chat =====
    'coding': 'Coding is fun! Which language do you like?',
    'programming': 'Programming opens endless possibilities! 💻',
    'python': 'Python is so versatile! From web dev to AI!',
    'javascript': 'JavaScript is the king of web interactivity!',
    'java': 'Java is solid and widely used in enterprises!',
    'c++': 'C++ is powerful for performance-critical apps!',
    'html': 'HTML structures your web pages perfectly!',
    'css': 'CSS makes your websites beautiful!',
    'react': 'React is amazing for building dynamic UIs!',
    'node.js': 'Node.js makes backend JavaScript possible!',
    'database': 'Databases store all your valuable data!',

    // ===== Encouragement / Motivation =====
    'i can\'t do it': 'Yes you can! Just take it step by step 💪',
    'i am stuck': 'Don’t worry, everyone gets stuck. Keep trying!',
    'motivation': 'Every expert was once a beginner! 🚀',
    'encourage me': 'Believe in yourself, you got this! 😎',
    'help me': 'Sure! Ask me anything, I’m here to assist!',

    // ===== Affirmation =====
    'yes': 'Exactly! 👍',
    'no': 'Got it! 😏',
    'maybe': 'Hmm, could be 😌',
    'ok': 'Okay! Let’s keep going 😄',
    'sure': 'Sure thing! 😎',
    'of course': 'Absolutely! ✅',
    'definitely': 'No doubt! 💪',
    'absolutely': 'Yes, that’s right! 😁',
    'i agree': 'Glad we agree! 😎',
    'i disagree': 'That’s okay! Different views are cool 😌'

};

// Optional synonyms to catch multiple single-word queries
knowledgeBase['pc'] = knowledgeBase['computer'];
knowledgeBase['laptop'] = knowledgeBase['computer'];
knowledgeBase['desktop'] = knowledgeBase['computer'];

// ===== DOM ELEMENTS =====
const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');

// ===== UTILITY FUNCTIONS =====
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function scrollToBottom() {
    messagesContainer.parentElement.scrollTop = messagesContainer.parentElement.scrollHeight;
}

// ===== FIND BOT RESPONSE =====
function getBotResponse(userMessage) {
    const normalizedInput = userMessage.toLowerCase().trim();

    if (knowledgeBase[normalizedInput]) {
        return knowledgeBase[normalizedInput];
    }

    for (let key in knowledgeBase) {
        if (normalizedInput.includes(key)) {
            return knowledgeBase[key];
        }
    }

    return "I'm still learning! 🤖 I don't have an answer to that yet. Please ask about basic computers, programming, web dev, AI, databases, hardware, OS, networking, or cybersecurity. Or type 'help' to see all topics I can discuss!";
}

// ===== ADD MESSAGE TO CHAT =====
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`, 'fade-in');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');

    const messageText = document.createElement('p');
    messageText.textContent = message;

    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.textContent = getCurrentTime();

    messageContent.appendChild(messageText);
    messageContent.appendChild(timestamp);
    messageDiv.appendChild(messageContent);

    messagesContainer.appendChild(messageDiv);
    scrollToBottom();
}

// ===== TYPING INDICATOR =====
function showTypingIndicator() {
    typingIndicator.style.display = 'block';
    scrollToBottom();
}

function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// ===== HANDLE SENDING MESSAGE =====
function handleSendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    addMessage(message, 'user');
    userInput.value = '';
    showTypingIndicator();

    const thinkingTime = 1000 + Math.random() * 1000;
    setTimeout(() => {
        hideTypingIndicator();
        const botResponse = getBotResponse(message);
        addMessage(botResponse, 'bot');
    }, thinkingTime);
}

// ===== EVENT LISTENERS =====
sendBtn.addEventListener('click', handleSendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});
userInput.addEventListener('input', () => {
    sendBtn.disabled = userInput.value.trim() === '';
});

// ===== INITIALIZE =====
sendBtn.disabled = true;
console.log('AI Chatbot loaded successfully! 🤖');
console.log('Knowledge Base loaded with basic computer concepts and 100+ topics!');
