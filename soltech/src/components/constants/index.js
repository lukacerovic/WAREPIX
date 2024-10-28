  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  const services = [
    {
      title: "WEB Development",
      titleStyle: { fontSize: "3vw", paddingTop: "15%" },
      image1: "images/laptopRemove.png",
      image1Style: { position: "absolute", top: "-35%", right:"-25%" },
      image2: "images/laptopRemove2.png",
      image2Style: { 
        position: "absolute", 
        bottom: "-40%", 
        left: "50%",  
        transform: "translateX(-50%)" 
      },
      paragrafs: [
        "Custom & Responsive Web Development – Tailored solutions that meet your business needs, with mobile-friendly designs optimized for all devices.",
        "Collaborate closely with you to develop a detailed UI/UX plan, iterating until we create the perfect solution that meets your business goals and user needs.",
        "High-performance websites with fast loading times, ensuring smooth user interactions.",
        "Maintenance & Support – Ongoing website maintenance and technical support to ensure continuous performance."
      ],
      link: "/web"
    },
    {
      title: "Mobile Development",
      titleStyle: { fontSize: "3vw", paddingTop: "5%" },
      image2: "images/mobileRemove2.png",
      image2Style: { 
        position: "absolute", 
        bottom: "-28%", 
        left: "50%",  // Centriraj horizontalno
        transform: "translateX(-50%)"  // Pomeri za pola širine slike
      },
      paragrafs: [
        "Custom App Solutions – Mobile apps tailored for your business and users.",
        "Native & Cross-Platform Development – iOS and Android apps with optimized performance.",
        "Advanced Features Integration – Incorporate features like push notifications, geolocation, and in-app purchases.",
        "App Store Deployment & Updates – Support for app submissions, regular updates, and version management.",
      ],
      link: "/mobile"
    },
    {
      title: "Design Services",
      titleStyle: { fontSize: "3vw", paddingTop: "5%" },
      image2: "images/designMain.PNG",
      image2Style: { 
        position: "absolute", 
        bottom: "-12%", 
        left: "50%",  // Centriraj horizontalno
        transform: "translateX(-50%)"  // Pomeri za pola širine slike
      },
      paragrafs: [
        "Custom Logo Design – Develop unique, memorable logos that reflect your brand identity.",
        "UI/UX Templates – Create polished, user-centric templates for web and mobile applications, ready to be implemented.",
        "Design System Creation – Establish consistent design systems to ensure cohesive branding across all platforms.",
        "Wireframing & Prototyping – Design wireframes and prototypes to map out user flows and interfaces efficiently.",
        "3D Modeling & Rendering – Create realistic 3D models for apps, websites, or presentations, optimized for performance."
      ],
      link: "/design"
    },
    {
      title: "Animations & 3D Models",
      titleStyle: { fontSize: "3vw", paddingTop: "5%" },
      image2: "images/3dModel.PNG",
      image2Style: { 
        position: "absolute", 
        width:"70%",
        bottom: "-12%", 
        left: "50%",  // Centriraj horizontalno
        transform: "translateX(-50%)"  // Pomeri za pola širine slike
      },
      paragrafs: [
        "Custom & Responsive Web Development – Tailored solutions that meet your business needs, with mobile-friendly designs optimized for all devices.",
        "Collaborate closely with you to develop a detailed UI/UX plan, iterating until we create the perfect solution that meets your business goals and user needs.",
        "High-performance websites with fast loading times, ensuring smooth user interactions.",
        "Maintenance & Support – Ongoing website maintenance and technical support to ensure continuous performance."
      ],
      link: "/animations"
    },
    {
      title: "MVP Build",
      titleStyle: { fontSize: "3vw" },
      image2: "images/mvpRemove2.png",
      image2Style: { 
        position: "absolute", 
        width:"100%",
        bottom: "-12%", 
        left: "50%",  // Centriraj horizontalno
        transform: "translateX(-50%) translateY(-10%)"  // Pomeri za pola širine slike
      },
      paragrafs: [
        "Dedicated to developing high-quality MVPs that prioritize user needs and scalability. By emphasizing essential features and user feedback, we streamline the development process to accelerate time to market and enable future growth."
      ],
      link: "/mvp"
    }
  ];
  
  
  const experiences = [
    {
      title: "Web Development",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Custom & Responsive Web Development – Tailored solutions that meet your business needs, with mobile-friendly designs optimized for all devices.",
        "Collaborate closely with you to develop a detailed UI/UX plan, iterating until we create the perfect solution that meets your business goals and user needs.",
        "High-performance websites with fast loading times, ensuring smooth user interactions.",
        "Maintenance & Support – Ongoing website maintenance and technical support to ensure continuous performance.",
      ],
    },
    {
      title: "Mobile Development",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Custom App Solutions – Build mobile apps designed specifically for your business and user base.",
        "Native & Cross-Platform Development – Create apps for iOS, Android, or both with optimized performance across all devices.",
        "Advanced Features Integration – Incorporate features like push notifications, geolocation, or in-app purchases to elevate user interaction.",
        "App Store Deployment & Updates – Full support for app store submissions, regular updates, and version management to ensure long-term success.",
      ],
    },
    {
      title: "MVP Development",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Rapid MVP Development – Build minimal viable products quickly, allowing you to test core features and gather feedback.",
        "Scalable Solutions – Develop MVPs with future scalability in mind, enabling seamless feature expansion.",
        "Lean Development Process – Focus on essential features to deliver a functional product with minimal time and cost.",
        "User-Centered MVP Design – Prioritize key user needs and experiences in MVPs to maximize early adoption and validation.",
      ],
    },
    {
      title: "Designing Services",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Custom Logo Design – Develop unique, memorable logos that reflect your brand identity.",
        "UI/UX Templates – Create polished, user-centric templates for web and mobile applications, ready to be implemented.",
        "Design System Creation – Establish consistent design systems to ensure cohesive branding across all platforms.",
        "Wireframing & Prototyping – Design wireframes and prototypes to map out user flows and interfaces efficiently.",
        "3D Modeling & Rendering – Create realistic 3D models for apps, websites, or presentations, optimized for performance."
      ],
    },
  ];
  
  const mobileServices = [
    {
      title: "Ideas",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "We turn client ideas into fully functional mobile apps, from concept to reality.",
        "We excel at creating user-friendly and feature-rich mobile applications.",
      ],
    },
    {
      title: "Design",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "We deliver full-scale UI design solutions for mobile apps, from scratch to tailored designs.",
        "Our UI designs captivate users and enhance app experiences.",
      ],
    },
    {
      title: "Functionality",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "We develop comprehensive functionalities tailored to project needs, ensuring seamless user experiences.",
        "Our features boost app performance and elevate user satisfaction.",
      ],
    },
    {
      title: "Android",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "We create custom, scalable Android apps, from concept to deployment.",
        "Our apps resonate with target audiences, using the latest tech and best practices.",
      ],
    },
    {
      title: "Apple",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "We craft bespoke iOS apps, ensuring seamless user experiences on the Apple platform.",
        "From development to App Store submission, we handle it all, delivering polished iOS apps.",
      ],
    }
  ];

  const webServices = [
    {
      title: "Concept & Strategy",
      company_name: "",
      icon: "images/strategy.png",
      iconBg: "#383E56",
      points: [
        "We collaborate closely with clients to turn their vision into a well-structured web project plan.",
        "Our strategies ensure your web presence is impactful and aligned with business goals."
      ],
    },
    {
      title: "UI/UX Design",
      company_name: "",
      icon: "images/design.png",
      iconBg: "#E6DEDD",
      points: [
        "We create intuitive, visually appealing designs that enhance user engagement.",
        "Our UX design focuses on seamless navigation and user experience optimization."
      ],
    },
    {
      title: "Web Development",
      company_name: "",
      icon: "images/development.png",
      iconBg: "#383E56",
      points: [
        "We build responsive, high-performance websites tailored to your business needs.",
        "Our development process ensures scalability, security, and robust functionality."
      ],
    },
    {
      title: "E-commerce Solutions",
      company_name: "",
      icon: "images/ecommerce.png",
      iconBg: "#E6DEDD",
      points: [
        "We develop custom e-commerce platforms that are secure, fast, and optimized for conversions.",
        "Our e-commerce solutions offer seamless integration with payment systems and inventory management."
      ],
    },
    {
      title: "SEO & Optimization",
      company_name: "",
      icon: "images/seo.png",
      iconBg: "#383E56",
      points: [
        "We implement SEO strategies to improve search engine rankings and drive organic traffic.",
        "Our optimization techniques ensure fast load times and high performance across devices."
      ],
    },
    {
      title: "Maintenance & Support",
      company_name: "",
      icon: "images/support.png",
      iconBg: "#E6DEDD",
      points: [
        "We offer continuous support and maintenance services to keep your website up to date.",
        "Our team ensures your website remains secure and functional with regular updates and improvements."
      ],
    }
  ];

  const designServices = [
    {
      title: "Web Template Design",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Custom Visuals – Templates tailored to reflect your brand.",
        "Responsive Layouts – Designs optimized for all screens.",
        "Development-Ready – Mockups for easy handoff to developers.",
      ],
    },
    {
      title: "Mobile Template Design",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Tailored UI – App designs capturing your brand essence.",
        "User-Centric Flows – Layouts that enhance user experience.",
        "Device-Optimized – Consistent design across mobile devices.",
      ],
    },
    {
      title: "Logo Idea & Design",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Creative Concepts – Unique logos representing your brand.",
        "Versatile Options – Multiple styles for various uses.",
        "Brand-Aligned – Logos that fit your brand identity.",
      ],
    },
  ];
  
  const animationsServices = [
    {
      title: "2D & 3D Modeling",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Custom Models – Tailored 2D and 3D models for your needs.",
        "Realistic Textures – High-quality textures for visual appeal.",
        "Flexible Formats – Models available in multiple formats.",
      ],
    },
    {
      title: "Animation Production",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Engaging Motion – Animations that captivate your audience.",
        "Lifelike Characters – Realistic character movements add depth.",
        "Concept Development – Storyboarding to plan your animation.",
      ],
    },
    {
      title: "Animation Video",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Creative Storytelling – Engaging narratives for impact.",
        "Variety of Styles – 2D, 3D, and stop-motion animations.",
        "High-Quality Visuals – Professional execution with top tools.",
      ],
    },
  ];
  

  const mvpServices = [
    {
      title: "Rapid Prototyping",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Deliver fast results without sacrificing quality, bringing your MVP to life quickly.",
        "Test your concept with clickable prototypes to preview core features before full build.",
        "Get early insights by testing prototypes with real users and refining based on feedback.",
      ],
      paragraphs: [
        "With our rapid prototyping service, you get a quick, high-fidelity version of your MVP idea, helping you validate your assumptions and make key decisions early in the process. We focus on creating interactive prototypes that you can share with stakeholders and potential users, collecting valuable feedback that drives informed development decisions."
      ]
    },
    {
      title: "Core Feature Development",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "We prioritize key functionalities to deliver a streamlined MVP.",
        "Our MVPs are built to scale easily, allowing seamless future upgrades.",
        "Our agile process ensures timely delivery of core features."
      ],
      paragraphs: [
        "The core feature development process revolves around creating a functional MVP that focuses on your project's most essential aspects. We ensure that the initial codebase is built for scalability, so when you're ready to add new features or scale the product, it can be done smoothly without the need for complete reworks."
      ]
    },
    {
      title: "Market Testing & Validation",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Test your MVP in the market to measure interest and gather feedback.",
        "Track user engagement with built-in analytics for improvement insights.",
        "Refine your MVP based on real user feedback for a polished product."
      ],
      paragraphs: [
        "Market testing and validation are crucial to the success of your MVP. We provide tools to analyze user interactions, measure engagement, and capture critical data that informs future iterations. By launching your MVP in a controlled environment, you can refine your product before fully investing in a larger-scale launch."
      ]
    },
    {
      title: "Launch & Post-Launch Support",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "We support a smooth MVP launch from development to market.",
        "We monitor your MVP post-launch to keep it running smoothly.",
        "We provide ongoing support and updates as your MVP grows with your business."
      ],
      paragraphs: [
        "Once your MVP is ready for launch, we ensure a smooth transition to market. Our post-launch support includes monitoring the performance of your product and making necessary updates to optimize its functionality. As your business grows, we remain your technical partner, providing continuous updates and improvements to keep your MVP competitive."
      ]
    }
  ];


  export { experiences, services, mobileServices, webServices, designServices, animationsServices, mvpServices };
