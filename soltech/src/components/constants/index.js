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
        "Tailored Visual Concepts – Custom-made templates that reflect your brand identity and vision",
        "Responsive Design Mockups – Sketched layouts optimized for various devices and screen sizes.",
        "User-Centered Layouts – Designs crafted to enhance user engagement and seamless navigation.",
        "Design-Ready for Development – Professional mockups ready for easy handoff to developers for implementation.",
      ],
    },
    {
      title: "Mobile Template Design",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Custom UI Concepts – Tailored app designs that capture your brand essence and user needs.",
        "Intuitive User Flows – Visual layouts that prioritize user experience and streamline navigation.",
        "Device-Specific Mockups – Designs optimized for various mobile devices, ensuring a consistent look and feel.",
        "Handoff-Ready Designs – High-quality mockups that facilitate easy transition to development teams for implementation.",
      ],
    },
    {
      title: "Logo Idea & Design",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Multiple Designs & Ideas – We provide over 10 initial logo ideas and concepts, allowing clients to explore various styles and collaboratively refine to find the perfect fit for their brand.",
        "Creative Concept Development – Unique logo ideas tailored to represent your brand’s identity and values.",
        "Versatile Design Options – Multiple design variations to choose from, ensuring your logo fits various applications.",
        "Professional Aesthetics – High-quality visuals crafted with attention to detail, making your brand stand out.",
        "Brand Identity Alignment – Logos designed to harmonize with your overall branding strategy and messaging.",
      ],
    },
  ];
  const animationsServices = [
    {
      title: "2D & 3D Modeling",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Custom Model Creation – Tailored 2D and 3D models designed to meet your specific project requirements.",
        "High-Quality Textures – Realistic textures and materials applied to models for enhanced visual appeal.",
        "Flexible Formats – Deliverables available in various formats for easy integration into different projects.",
        "Collaboration and Feedback – Iterative design process with regular client feedback to ensure the final model meets expectations.",
      ],
    },
    {
      title: "Animation Production",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Dynamic Motion Design – Engaging animations that effectively communicate your message and captivate your audience.",
        "Character Animation – Creation of lifelike character movements that add personality and depth to your projects.",
        "Storyboarding and Concept Development – Comprehensive planning phase to outline and visualize your animation before production.",
        "Final Delivery in Multiple Formats – Exported animations in various formats suitable for different platforms and uses.",
      ],
    },
    {
      title: "Animation Video",
      company_name: "",
      iconBg: "#E6DEDD",
      points: [
        "Creative Storytelling – We develop engaging narratives that captivate your audience and effectively convey your message.",
        "Variety of Animation Styles – Offering a range of animation styles, including 2D, 3D, and stop-motion, tailored to meet your needs and brand identity.",
        "High-Quality Execution – Our team of experts utilizes cutting-edge tools and techniques to create animations that look professional and visually appealing.",
        "Flexible Lengths – Animations are available in various lengths, from short promotional clips to in-depth presentations, to suit your specific requirements.",
      ],
    },
  ];

  const mvpServices = [
    {
      title: "Rapid Prototyping",
      company_name: "",
      iconBg: "#383E56",
      points: [
        "Quick Turnaround – We prioritize speed without compromising quality, allowing you to see your MVP come to life in record time.",
        "Interactive Prototypes – Test and refine your idea with clickable prototypes, offering a tangible look at core features before full development.",
        "User-Centered Feedback Loops – Gather valuable insights early by testing the prototype with real users, iterating based on their feedback."
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
        "Focus on Essential Features – We hone in on the most crucial functionalities to deliver a working MVP with minimal complexity.",
        "Scalable Codebase – Building with future growth in mind, our MVPs are designed to be scalable, ensuring that additional features can be integrated smoothly.",
        "Efficient Development Cycles – Our agile approach ensures that key features are developed efficiently, keeping your project on track."
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
        "Real-World Testing – Test your MVP in real market conditions to gauge interest and gather vital feedback.",
        "User Metrics & Analytics – Track user behavior and engagement through built-in analytics, providing data for further improvements.",
        "Iterative Improvements – Make adjustments to your MVP based on real-world user interactions and feedback, ensuring a more polished final product."
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
        "Seamless Launch Process – We help you launch your MVP smoothly, with full support during the transition from development to market.",
        "Performance Monitoring – Post-launch, we monitor your MVP’s performance, ensuring everything runs smoothly and fixing any issues that arise.",
        "Continuous Updates – As your product evolves, we provide ongoing support and updates, ensuring that your MVP grows alongside your business."
      ],
      paragraphs: [
        "Once your MVP is ready for launch, we ensure a smooth transition to market. Our post-launch support includes monitoring the performance of your product and making necessary updates to optimize its functionality. As your business grows, we remain your technical partner, providing continuous updates and improvements to keep your MVP competitive."
      ]
    }
  ];


  export { experiences, services, mobileServices, webServices, designServices, animationsServices, mvpServices };