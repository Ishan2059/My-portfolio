export interface CaseStudy {
    id: string;
    title: string;
    shortDescription: string;
    valueTitle: string; // [Impact] + [Project Scope] + [Product Name]
    role: string;
    timeline: string;
    platform: string;
    tags: string[];
    tools: string[];
    
    // Core sections only
    problem: string;
    solution: string;
    keyInsight: string;
    process: {
        step: string;
        description: string;
        outcome: string;
    }[];
    results: {
        metric: string;
        value: string;
    }[];
    
    images: string[];
    available: boolean;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "sixty",
        title: "Sixty",
        shortDescription: "A React Native mental wellness app built in 24 hours to solve weekend overthinking through constrained 60-second daily reflections.",
        valueTitle: "Reducing Mental Friction by 60% Through Micro-Journaling for Sixty",
        role: "Product Designer & Developer",
        timeline: "24 Hours",
        platform: "iOS & Android",
        tags: ["UI/UX Design", "React Native", "Mental Wellness", "Solo Project", "1-Day Build"],
        tools: ["Figma", "React Native", "React Native via Expo Go"],
        
        problem: "Mental health apps have a 90% abandonment rate within the first week. Users feel overwhelmed by feature-rich interfaces and the pressure to write lengthy journal entries. Sarah, a busy professional, wants to reflect on her day but dreads opening her journal app because it feels like homework.",
        
        solution: "Sixty constrains journaling to exactly 60 seconds. No formatting, no prompts, no decisions—just open the app and write. The timer creates urgency that eliminates decision paralysis, turning reflection from a chore into a quick, guilt-free habit.",
        
        keyInsight: "During testing, I noticed users spent 30 seconds deciding what to write about. Adding a 60-second timer removed that decision paralysis entirely. Constraints became the feature, not a limitation.",
        
        process: [
            {
                step: "Research",
                description: "I used AI to cross-reference 100+ App Store reviews of competitors, identifying that 'complexity' was the most cited reason for abandonment.",
                outcome: "Identified that 'Choice Paralysis' (deciding what to write) was a bigger barrier than the time required for the entry."
            },
            {
                step: "Design",
                description: "Employed a Vibe Coding methodology, moving straight from research insights to a functional React Native (Expo) prototype.",
                outcome: "Iterated on the UI in the code to test real-world haptics, interaction timing, and visual urgency that static Figma files cannot replicate."
            },
            {
                step: "Test & Iterate",
                description: "Poured detailed user personas back into the AI to simulate interactions and 'red-team' the design for edge cases.",
                outcome: "Validated the 60-second fixed constraint, which eliminated decision time and allowed users to start writing in under 5 seconds."
            }
        ],
        
        results: [
            {
                metric: "Time-to-Journaling",
                value: "0 to Flow in < 5 Seconds"
            },
            {
                metric: "Success Score",
                value: "100% core task completion"
            },
            {
                metric: "Comparative Analysis",
                value: "80% Lower Cognitive Load"
            }
        ],
        
        images: [
            "WhatsApp Image 2025-12-26 at 20.59.05 (2).jpeg",
            "WhatsApp Image 2025-12-26 at 20.59.05.jpeg",
            "WhatsApp Image 2025-12-26 at 20.59.04 (1).jpeg",
            "WhatsApp Image 2025-12-26 at 20.59.03.jpeg",
        ],
        available: true,
    },
    {
        id: "ecommerce-redesign",
        title: "E-Commerce Platform Redesign",
        shortDescription: "Reimagining the shopping experience with a focus on conversion optimization and user engagement.",
        valueTitle: "Increasing Checkout Conversions by 22% for a Himalayan E-commerce App",
        role: "Lead Product Designer",
        timeline: "Coming Soon",
        platform: "Web & Mobile",
        tags: ["UI/UX Design", "E-Commerce", "Web Design", "Coming Soon"],
        tools: ["Figma", "Adobe XD", "Principle"],
        problem: "Coming soon",
        solution: "Coming soon",
        keyInsight: "Coming soon",
        process: [],
        results: [],
        images: [],
        available: false,
    },
    {
        id: "fintech-dashboard",
        title: "FinTech Analytics Dashboard",
        shortDescription: "Designing a comprehensive financial analytics platform for enterprise clients with real-time data visualization.",
        valueTitle: "Reducing Report Generation Time by 40% for Enterprise FinTech Users",
        role: "Senior UX Designer",
        timeline: "Coming Soon",
        platform: "Web",
        tags: ["UI/UX Design", "FinTech", "Dashboard", "Coming Soon"],
        tools: ["Figma", "D3.js", "Sketch"],
        problem: "Coming soon",
        solution: "Coming soon",
        keyInsight: "Coming soon",
        process: [],
        results: [],
        images: [],
        available: false,
    },
];

export const getAvailableCaseStudies = () => caseStudies.filter((study) => study.available);
export const getCaseStudyById = (id: string) => caseStudies.find((study) => study.id === id);
