export const efficiencyData = [
  {
    title: "Idle Enterprise Asset Solution",
    description:
      "Connect underutilized enterprise hardware—such as warehouse drones, factory robots, and surplus compute, storage, or bandwidth—to the Idle Finance network. Enable businesses and individuals to monetize idle assets by leasing their capacity, generating seamless on-chain revenue.",
  },
  {
    title: "Idle Consumer Asset Solution",
    description:
      "Monetize idle consumer devices by contributing unused compute, storage, bandwidth, and nodes to a diverse range of on-chain networks, turning everyday hardware into a source of passive income.",
  },
  {
    title: "Omni-Platform MetaVaults",
    description:
      "Maximize earnings by deploying idle devices to existing reward networks (e.g., Helium for hotspots, Render for compute). Automatically harvest rewards and reinvest them into high-yield on-chain strategies, such as restaking or lending pools, for compounded returns.",
  },
  {
    title: "Native MetaVaults",
    description:
      "Unlock the potential of specialized hardware—like robotics, MCUs, IoT devices, and drones—through native reward networks. Our discovery marketplace connects idle asset owners with customers seeking capacity, while AI-optimized on-chain yield strategies compound revenue for maximum profitability.",
  },
];

type TeamMember = {
  image: string;
  name: string;
  designation: string;
  companies: string[];
  socialMediaUrl: string;
  socialMediaName: string;
  position?: string;
  description: string;
  company?: string;
};

export const teamData: TeamMember[] = [
  {
    image: "/david.png",
    name: "David Wang",
    designation: "Advisor",
    companies: ["/david-company-1.svg", "/david-company-2.svg"],
    socialMediaUrl: "https://x.com/wang_8?s=21",
    socialMediaName: "Twitter",
    position: "",
    description:
      "David is a Berlin-based serial entrepreneur, investor, and Forbes 30 Under 30 honoree. He is the founder of OpenDeSci, a rapidly growing initiative reshaping open science through decentralized infrastructure. Under his leadership, OpenDeSci has won three industry awards and secured an official sponsorship with a Formula 2 racing team. David is actively building strategic partnerships to scale OpenDeSci’s impact and unlock innovation at the intersection of science, community, and Web3.",
  },
  {
    image: "/kelly.png",
    name: "Kelly Tran",
    designation: "Lead Architect",
    companies: ["/kelly-company-1.svg"],
    socialMediaUrl: "https://www.linkedin.com/in/kellytranha",
    socialMediaName: "Linkedin",
    position: "",
    description:
      "Kelly is the founder of Genie, a platform that connects the top 1% of Silicon Valley developers to accelerate innovation across Web3 and emerging technologies. Previously a software engineer at PayPal, she brings deep technical expertise and a passion for building scalable, user-centric solutions. A graduate of the University of Chicago, Kelly combines rigorous academic training with hands-on experience in fintech and blockchain. She leads Genie’s mission to drive adoption of decentralized technologies and foster vibrant developer ecosystems.",
  },

  // {
  //   image: "/adam.png",
  //   name: "Adam",
  //   designation: "CTO",
  //   company:"/adam-company.svg",
  //   companies: ["/adam-company-1.svg", "/adam-company-2.svg"],
  //   socialMediaUrl: "https://x.com/adamcrypto321",
  //   socialMediaName: "Twitter",
  //   description:
  //     "Adam is the CTO behind $500M+ in Web3 protocol builds, partnering with institutions to create scalable, secure blockchain infrastructure. Known for bridging deep technical expertise with collaborative leadership, he drives innovation in decentralized systems, empowering teams to build impactful solutions that shape the future of Web3 and open digital ecosystems.",
  // },

 
  
  {
    image: "/nurudeen.png",
    name: "Nurudeen Aigoro",
    designation: "",
    companies: ["/nurudeen-company-1.svg"],
    socialMediaUrl: "https://www.linkedin.com/in/nurudeen-a-67378486",
    socialMediaName: "Linkedin",
    position: "Cloud & Data Engineer",
    description:
      "Nurudeen is a Senior Cloud and Data Engineer at PwC London, specializing in designing scalable, secure, and cost-effective cloud solutions for clients across industries. A 7x AWS Certified professional, he brings deep technical expertise in cloud infrastructure, DevOps, and data engineering. Nurudeen is passionate about using technology to drive business transformation and deliver impactful, innovation-led solutions.",
  },
  {
    image: "/anh.png",
    name: "Anh Hoang",
    designation: "",
    companies: [
      "/anh-company-1.svg",
      "/anh-company-2.svg",
      "/anh-company-3.svg",
    ],
    socialMediaUrl:
      "https://www.linkedin.com/in/anh-hoang-16158a300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    socialMediaName: "Linkedin",
    position: "Digital Growth Engineer",
    description:
      "Anh is a digital growth leader with a track record of scaling technology ventures across Asia and Europe. At Google Singapore, he drove 8-figure revenue growth and led digital transformation for Google Education across 10 APAC countries. A graduate of London Business School, Anh previously held roles at Facebook, Snapchat, and 500 Startups, where he helped scale early-stage companies and advance digital innovation in Southeast Asia.",
  },
  {
    image: "/bruce.png",
    name: "Bruce Le",
    designation: "",
    companies: ["/bruce-company-1.svg", "/bruce-company-2.svg"],
    socialMediaUrl: "https://www.linkedin.com/in/bruce-viet-dung-le-7973367a",
    socialMediaName: "Linkedin",
    position: "Chief Operator & Web3 Ecosystem Builder",
    description:
      "Bruce is Chief Operating Officer with deep experience scaling startups in AI, blockchain, and e-commerce. He has held strategic roles at Deloitte, BCG, and a unicorn startup, combining operational excellence with a strong strategic mindset. As a World Economic Forum Global Shaper and member of the Solana Superteam, Bruce champions Web3 innovation, ecosystem building, and the advancement of decentralized technologies worldwide.",
  },
];

export const articlesData = [
  {
    image: "/home-4.png",
    author: "John Doe",
    date: "25 Jan 2025",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
  },
  {
    image: "/home-4.png",
    author: "John Doe",
    date: "25 Jan 2025",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
  },
  {
    image: "/home-4.png",
    author: "John Doe",
    date: "25 Jan 2025",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.",
  },
];

export const faqData = [
  {
    value: "item-1",
    question: "What is Idle Finance and why does it matter?",
    answer:
      "Idle Finance empowers businesses and individuals to generate passive income by monetizing idle hardware and digital resources in the connected device economy, driving advancements in AI and robotics. Our platform seamlessly connects your unused devices—such as robotics, IoT, MCUs, compute, storage, and bandwidth—to both existing on-chain reward networks and our proprietary native reward networks. Through our AI-Optimization Suite, yields are automatically compounded in high-return DeFi protocols, maximizing your earnings with minimal effort.",
  },
  {
    value: "item-2",
    question: "How does Idle Finance actually work behind the scenes?",
    answer:
      "Idle Finance runs as a desktop app on your computer. Once installed, it scans your machine to find unused resources. Then it sets up isolated environments using lightweight virtual machines to safely run on-chain nodes. The AI system chooses the best way to stake your resources and earn the most rewards. Everything runs automatically with full transparency and control.",
  },
  {
    value: "item-3",
    question:
      "Why do I need to install a desktop application instead of using a website?",
    answer:
      "Websites can’t access the deep-level system resources required to scan your hardware or run secure infrastructure processes. A desktop app gives us permission to interact with your devices and device capacity in a safe way without putting your system at risk. It also allows us to isolate each task in its own environment, which improves security and performance.",
  },
  {
    value: "item-4",
    question: "Is this safe to install and use? Will it slow down my computer?",
    answer:
      "Yes, it’s safe. Idle Finance only uses the parts of your system that are not in use. When you need your full system back, like during gaming or heavy work, the app automatically reduces or stops usage. It runs in isolated environments called VMs, so even if one task crashes or misbehaves, it won’t affect your machine or personal files.",
  },
  {
    value: "item-5",
    question: "What can I actually earn with Idle Finance?",
    answer:
      "The initial idle asset categories in our PoC will include compute, storage and bandwidth. Your earnings depend on the kind of hardware you have and how much of it is idle. If you have a strong GPU or high-speed internet, you may earn more. Our AI optimizer makes sure your resources are always being used in the most profitable way across networks like Grass, Flux, or Helium. You’ll see real-time earnings in your dashboard. Higher yield opportunities will be available as well roll out our enterprise robotics workload, MCU, IoT and drone asset categories.",
  },
  {
    value: "item-6",
    question: "Do I need to know about crypto or or on-chain finance to use Idle Finance?",
    answer:
      "No. Idle Finance is designed for non-crypto users too. The app handles blockchain interactions in the background and gives you a simple interface to monitor earnings and control your resources. You keep full control of your assets and can choose to cash out into fiat via our payment partner AlchemyPay.",
  },
  {
    value: "item-7",
    question:
      "What is the Base blockchain, and why is Idle Finance built on it?",
    answer:
      "Base is a blockchain developed by Coinbase, known for its low fees, fast transactions, and Ethereum compatibility. We chose Base because it allows us to run smart contracts cheaply and reliably, which is essential for managing user rewards and staking. It also makes it easier to integrate with exchanges and wallets you’re already familiar with.",
  },
  {
    value: "item-8",
    question: "What is AMI and how does it help me earn more?",
    answer:
      "AMI stands for Asset Monetization Index. It is an AI-calculated index that gauges the earning power of your idle hardware assets—robotics, drones, IoT, MCUs, compute, bandwidth, and storage. A higher AMI ensures optimal network placement for greater profits.",
  },
  {
    value: "item-9",
    question: "Will I lose control of my computer or my crypto?",
    answer:
      "No. Idle Finance is built to be non-custodial, meaning your private keys stay with you. The app can help you set up wallets, but it never stores them or moves your funds without your permission. You can stop or pause any part of the system at any time, and everything runs locally on your own machine.",
  },
];

export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];
