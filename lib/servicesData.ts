export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDesc: string;
  keyword: string;
  image: string;
}

export const servicesData: Service[] = [
  {
    slug: "balcony-invisible-grills",
    title: "Balcony Invisible Grills",
    shortDesc: "Premium high-tensile 316 marine-grade stainless steel invisible grills for balconies. Perfect blend of safety, elegance, and unblocked views.",
    longDesc: "Transform your balcony into a secure, elegant space without compromising your view. Our premium Balcony Invisible Grills are engineered with high-tensile, nylon-coated marine-grade 316 stainless steel cables. Capable of withstanding up to 400kg of tension, they offer absolute protection for families living in high-rise apartments across Hyderabad. Our structural design ensures durability, rust resistance, and zero maintenance, maintaining the architectural appeal of your home.",
    benefits: [
      "Uncompromised views of the Hyderabad skyline.",
      "Supports tension up to 400kg, keeping kids and pets safe.",
      "Rust-proof marine-grade 316 stainless steel wire cores.",
      "Subtle 2mm cable thickness, invisible from a distance.",
      "Easy evacuation during emergencies, unlike traditional MS iron grills."
    ],
    faqs: [
      {
        question: "Will the balcony invisible grills rust over time?",
        answer: "No, we use only high-tensile SS 316 marine-grade steel cables coated with premium nylon. These are completely rust-free and designed to withstand Hyderabad's harsh weather conditions."
      },
      {
        question: "Can they be cut easily in case of fire emergencies?",
        answer: "Yes, unlike traditional heavy iron window grids, invisible grills can be cut with a specialized wire cutter in emergencies, facilitating rapid evacuation."
      }
    ],
    metaTitle: "Premium Balcony Invisible Grills Installation in Hyderabad | John Invisible Grills",
    metaDesc: "Protect your family with premium Balcony Invisible Grills. High-tensile SS 316 cables, professional installation across Hyderabad. Get a free quote today!",
    keyword: "Balcony Invisible Grills Hyderabad",
    image: "/images/birdgrill.jpg"
  },
  {
    slug: "child-safety-invisible-grills",
    title: "Child Safety Invisible Grills",
    shortDesc: "Engineered specifically to protect curious toddlers and children from open balconies, windows, and stairs with heavy-duty steel safety cabling.",
    longDesc: "Curious toddlers love to explore, making open balconies, large French windows, and stairs high-risk zones. Our Child Safety Invisible Grills provide a robust safety barrier that removes any fall risks. Built with 2-inch to 3-inch gap spacing, they prevent children from slipping through or climbing over, while maintaining a spacious, bright feel. Trust John Invisible Grills to create a kid-safe zone in your high-rise apartment.",
    benefits: [
      "Narrow 2-inch to 3-inch spacing optimized for toddler safety.",
      "Super-strong structural anchoring that resists high impacts.",
      "No sharp edges or grids that children could climb or hurt themselves on.",
      "Soft nylon coating avoids accidental cuts or abrasions.",
      "Peace of mind for parents in apartments and duplex homes."
    ],
    faqs: [
      {
        question: "What is the recommended gap spacing for child safety?",
        answer: "We recommend a narrow 2-inch (50mm) to 3-inch (75mm) gap spacing to ensure infants and toddlers cannot slip their heads or bodies through."
      },
      {
        question: "How long does the installation take for a standard balcony?",
        answer: "A standard balcony installation usually takes between 3 to 5 hours, completed professionally with minimal noise or disruption."
      }
    ],
    metaTitle: "Child Safety Invisible Grills Hyderabad | High-Tensile Child Safety Barriers",
    metaDesc: "Ensure absolute child safety in your high-rise home. Install high-tensile, child-proof invisible grills on balconies and windows. Schedule a free site visit.",
    keyword: "Child Safety Invisible Grills",
    image: "/images/carousel3.webp"
  },
  {
    slug: "pet-safety-invisible-grills",
    title: "Pet Safety Invisible Grills",
    shortDesc: "Narrow-gap heavy-duty invisible grills designed to keep active cats, dogs, and other household pets completely safe near open windows and balconies.",
    longDesc: "Pets, especially cats and active dogs, are prone to jumping or slipping through open windows and balcony railings. Our specialized Pet Safety Invisible Grills utilize ultra-narrow gap configurations (usually 1.5 to 2 inches) and heavy-gauge nylon-coated stainless steel wires. This blocks pets from climbing or falling while maintaining natural ventilation and light.",
    benefits: [
      "Ultra-narrow spacing (1.5 to 2 inches) prevents cats and small dogs from slipping out.",
      "Scratch and bite-resistant nylon coating protects the stainless steel core.",
      "Maintains excellent fresh air circulation and natural lighting for your pets.",
      "Strong vertical/horizontal wire structures that hold under pet impact.",
      "Elegant design that replaces ugly wooden or iron pet cages."
    ],
    faqs: [
      {
        question: "Can cats climb up the invisible safety grills?",
        answer: "Cats may try to climb, but the slippery, round nylon coating and thin cables make it difficult to grip, discouraging climbing while keeping them safely inside."
      },
      {
        question: "Is the nylon coating toxic to pets if they chew on it?",
        answer: "No, we use medical-grade, non-toxic, high-durability membrane coating which is safe for pets and resistant to chewing."
      }
    ],
    metaTitle: "Pet Safety Invisible Grills Hyderabad | Cat & Dog Safety Balcony Wires",
    metaDesc: "Keep your active cats and dogs secure. Our ultra-narrow pet safety invisible grills prevent falls without blocking airflow. Book a free site measurement.",
    keyword: "Pet Safety Invisible Grills Hyderabad",
    image: "/images/balconygrill.webp"
  },
  {
    slug: "window-invisible-grills",
    title: "Window Invisible Grills",
    shortDesc: "Sleek, modern invisible grills for standard residential windows. Keeps your rooms safe, airy, and bright without bulky iron bars.",
    longDesc: "Ditch the traditional bulky iron grids that make your rooms feel like enclosures. Our Window Invisible Grills provide high-strength security and safety while keeping your rooms exceptionally bright and breezy. Made of high-grade SS 316 stainless steel wires, they are practically invisible from the outside, preserving the aesthetics of your building façade.",
    benefits: [
      "Seamless integration with sliding, openable, and casement windows.",
      "Maximizes natural daylight and fresh air flow inside the room.",
      "Requires zero painting, anti-rust coating, or maintenance.",
      "Quick and clean installation directly onto window frames or concrete walls.",
      "Provides reliable fallback protection without blocking emergency exits."
    ],
    faqs: [
      {
        question: "Can window invisible grills prevent burglaries?",
        answer: "While primarily designed for safety and fall protection, they act as a strong deterrent. The cables are high-tensile and require specialized cutters, making silent entry very difficult."
      },
      {
        question: "Do they block sliding insect nets?",
        answer: "No, they are installed on the outer frame, allowing you to operate your sliding windows and insect screens without obstruction."
      }
    ],
    metaTitle: "Modern Window Invisible Grills Hyderabad | Slim Window Safety Grill Wires",
    metaDesc: "Replace traditional iron bars with modern, minimal window invisible grills. Rust-free, sleek, and safe. Serving Kukatpally and all Hyderabad.",
    keyword: "Window Invisible Grills Hyderabad",
    image: "/images/windowgrill.webp"
  },
  {
    slug: "french-window-invisible-grills",
    title: "French Window Invisible Grills",
    shortDesc: "Custom high-span invisible grills tailored for floor-to-ceiling French windows and sliding glass doors, ensuring safety without blocking light.",
    longDesc: "French windows and full-height glass walls are gorgeous architectural features but present a major safety hazard, especially when open. Our French Window Invisible Grills are custom-engineered for high-span openings. They are anchored using heavy-duty aluminum tracks and high-tension SS 316 cables, maintaining the panoramic view while securing the glass barrier.",
    benefits: [
      "Maintains clean lines and luxurious look of large floor-to-ceiling glass panels.",
      "Strong multi-point locking anchors to support high vertical tension.",
      "Blends seamlessly with high-end UPVC or aluminum sliding frames.",
      "Ensures safety when sliding doors are left open for ventilation.",
      "Engineered to withstand heavy wind loads on high floors."
    ],
    faqs: [
      {
        question: "Do these grills ruin the look of premium French windows?",
        answer: "Not at all. From a distance of a few meters, the 2mm cables are virtually invisible, preserving the elegant look of your glass windows."
      },
      {
        question: "What tension do you use for high-span French windows?",
        answer: "We use specialized tensioning tools to tighten each cable to over 300-400kg, ensuring they remain stiff and do not slacken over time."
      }
    ],
    metaTitle: "French Window Invisible Grills Hyderabad | Floor to Ceiling Glass Safety",
    metaDesc: "Secure your large French windows and sliding glass doors. High-tensile stainless steel invisible wire grills custom fit. Call for free site visit.",
    keyword: "French Window Invisible Grills Hyderabad",
    image: "/images/customgrill.jpg"
  },
  {
    slug: "bird-protection-invisible-grills",
    title: "Anti-Pigeon & Bird Protection Invisible Grills",
    shortDesc: "Keep invasive pigeons and birds out of your balcony and utility areas with dual-purpose safety and bird-exclusion invisible grills.",
    longDesc: "Pigeons and birds nesting in balconies cause significant hygiene issues, allergens, and droppings. Our Bird Protection Invisible Grills are installed with a 1.5-inch to 2-inch gap spacing. This not only prevents children and pets from falling, but also creates a physical barrier that keeps pigeons out, keeping your balcony clean and bird-free.",
    benefits: [
      "Dual benefit: absolute safety fall protection plus complete bird exclusion.",
      "1.5 to 2-inch gap prevents even small birds like pigeons from entering.",
      "Maintains ventilation and sun compared to dark safety nets.",
      "No blocking of light or views, maintaining building look.",
      "No recurring costs of replacing torn nylon bird nets."
    ],
    faqs: [
      {
        question: "How do these compare to blue/green nylon bird nets?",
        answer: "Nylon nets decay in the sun, tear easily, block the view, and collect dust. Our SS 316 invisible grills do not rust, last decades, and do not block your view."
      },
      {
        question: "Are birds harmed by these grills?",
        answer: "No, the grills act as a physical barrier. Pigeons simply fly away when they realize they cannot land or pass through."
      }
    ],
    metaTitle: "Anti-Pigeon & Bird Protection Invisible Grills Hyderabad | Rust-Free",
    metaDesc: "Keep pigeons and birds away from your balconies with sleek, rust-free bird protection invisible grills. Durable SS 316 cables. Free estimate.",
    keyword: "Bird Protection Invisible Grills Hyderabad",
    image: "/images/carousel.webp"
  },
  {
    slug: "terrace-invisible-grills",
    title: "Terrace Invisible Grills",
    shortDesc: "High-boundary invisible safety grills designed for open terraces, penthouses, and rooftop gardens to prevent accidental falls.",
    longDesc: "Rooftop terraces and penthouses offer beautiful panoramic views of Hyderabad, but their open heights are dangerous. Our Terrace Invisible Grills provide high-boundary protection without enclosing you behind high walls or steel cages. They are designed to withstand high winds and outdoor elements while keeping family members, guests, and pets completely safe.",
    benefits: [
      "Heavy-duty base plates and posts for concrete slab mounting.",
      "Withstands high-altitude wind pressure and heavy rains.",
      "Keeps rooftop gardens, sit-outs, and play areas safe.",
      "Maintains the breezy, open feeling of rooftop living.",
      "Complies with high-rise building security regulations."
    ],
    faqs: [
      {
        question: "Can these be installed on glass railing boundaries?",
        answer: "Yes, we can install them directly behind or integrated with existing glass/metal balustrades to add extra height and safety."
      },
      {
        question: "How tall can these terrace safety grills be made?",
        answer: "We typically install them from 4 feet up to 8 feet depending on your safety requirements and structure limits."
      }
    ],
    metaTitle: "Terrace & Penthouse Invisible Grills Hyderabad | Rooftop Safety Wires",
    metaDesc: "Secure your rooftop terraces, penthouses, and gardens. High-tension, weather-resistant SS 316 invisible grills. Best price guaranteed in Hyderabad.",
    keyword: "Terrace Invisible Grills Hyderabad",
    image: "/images/johnterracegrill.webp"
  },
  {
    slug: "staircase-invisible-grills",
    title: "Staircase Invisible Grills",
    shortDesc: "Modern banister and open-staircase invisible safety grills to prevent falls in duplex homes, villas, and commercial spaces.",
    longDesc: "Open staircases and wide banisters are signature architectural statements, but they present major falling hazards for children and the elderly. Our Staircase Invisible Grills are custom-installed along the banister lines and open stairwells. Running vertically or horizontally, they form an elegant, modern barrier that complements premium wood, marble, or metallic stairs.",
    benefits: [
      "Prevents toddlers from slipping through wide baluster gaps.",
      "Fits seamlessly into modern villa and duplex home interiors.",
      "Can be customized to run vertically or parallel to the handrails.",
      "Requires minimal drilling on structural marble or wood steps.",
      "Durable, clean, and modern aesthetic."
    ],
    faqs: [
      {
        question: "Do these block the design of my decorative staircase?",
        answer: "No, because the stainless steel cables are extremely thin, they preserve the open, floating feel of modern designer staircases."
      },
      {
        question: "Is it possible to install them vertically?",
        answer: "Yes, we can run them vertically from the handrail to the treads, or horizontally between support posts."
      }
    ],
    metaTitle: "Staircase Invisible Grills for Duplex & Villas Hyderabad | Stair Safety",
    metaDesc: "Secure open staircases and wide banisters in your duplex home or villa. Elegant, high-tension safety wires. Safe for children. Free site measurement.",
    keyword: "Staircase Invisible Grills Hyderabad",
    image: "/images/service_staircase.png"
  },
  {
    slug: "villa-invisible-grills",
    title: "Villa Invisible Grills",
    shortDesc: "High-end safety solutions for premium villas, covering massive windows, open terraces, and patios with architectural steel wires.",
    longDesc: "Luxury villas in Hyderabad require safety solutions that match their upscale architecture. Our Villa Invisible Grills are designed for large window expanses, open patios, balconies, and rooftops. They offer high-tensile safety barriers while preserving the natural lighting, landscaping views, and luxury aesthetics of your villa.",
    benefits: [
      "Matches premium architectural standards of luxury gated villas.",
      "Custom anodized finishes on aluminum tracks to match window frames.",
      "Maintains unobstructed views of your private gardens and pools.",
      "High security and child-safety rating.",
      "Long-lasting SS 316 cables with zero maintenance."
    ],
    faqs: [
      {
        question: "Can the tracks be colored to match my villa's window frames?",
        answer: "Yes, we offer custom-coated aluminum tracks in colors like charcoal gray, white, dark brown, or black to match your villa's window frames perfectly."
      },
      {
        question: "Do you install in gated villa communities in Hyderabad?",
        answer: "Yes, we regularly install in gated villa societies across Kokapet, Gachibowli, Tellapur, and Narsingi."
      }
    ],
    metaTitle: "Luxury Villa Invisible Grills Hyderabad | Premium Safety Wires",
    metaDesc: "Upgrade your villa's security and safety. Seamless invisible grill installations for villas, penthouses, and large patios. Serving all Hyderabad.",
    keyword: "Villa Invisible Grills",
    image: "/images/villagrill.jpg"
  }
];
