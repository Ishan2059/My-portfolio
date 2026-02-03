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
    dateUploaded: string;
    dateUpdated?: string; // Optional - will auto-generate if not provided
}

// Helper function to format date
const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

// Helper function to get today's date
const getToday = (): string => formatDate(new Date());

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
        dateUploaded: "Jan 28, 2026",
        dateUpdated: "Jan 29, 2026",
    },
    {
        id: "game-flow-mapping",
        title: "Game Flow Mapping",
        shortDescription: "Resolving client-team misalignment through structured game flow mapping across 3 game modes.",
        valueTitle: "Resolving Client-Team Misalignment Through Structured Game Flow Mapping",
        role: "Product Designer",
        timeline: "~4 Hours",
        platform: "Mobile Game (3 Game Modes)",
        tags: ["Product Design", "Flow Mapping", "Collaboration", "Mobile Game"],
        tools: ["FigJam", "Figma"],
        
        problem: "When a client returned to an already-completed mobile game project with change requests, the team struggled to align on what exactly needed to change. Miscommunication was slowing the project down, and the client — sensing the disconnect — asked the team to document their current understanding so the gaps could be identified before the next meeting.",
        
        solution: "I created a comprehensive game flow in FigJam, broken down across all 3 game modes. Each mode was mapped into three clear phases — Before Gameplay, During Gameplay, and After Gameplay — giving both the team and the client a single, easy-to-follow reference. This structure made it simple for the client to pinpoint exactly where the team's understanding diverged from their expectations.",
        
        keyInsight: "The confusion wasn't about the changes themselves — it was about the lack of a shared reference point. The team and the client were interpreting the same requirements differently because no one had mapped out the full picture. A structured, visual flow would give everyone the same starting point.",
        
        process: [
            {
                step: "Understanding",
                description: "I reviewed the client's document carefully to extract the expected behavior for each game mode, then cross-referenced it with the existing Figma design to understand the current state of the product.",
                outcome: "Built a clear mental model of the gap between what was built and what the client expected."
            },
            {
                step: "Structuring",
                description: "Rather than mapping the flow as one single stream, I divided each game mode into three phases — Before, During, and After Gameplay. This made the flow digestible and easy to scan, especially for the client who needed to quickly spot discrepancies.",
                outcome: "Created a framework that worked across all 3 game modes consistently, reducing ambiguity."
            },
            {
                step: "Mapping & Implementation",
                description: "I built the full flow in FigJam and then carried the understanding into the existing Figma design, ensuring the team could see how the flow connected to the actual product.",
                outcome: "Gave the team and client a shared visual reference to align on before the Tuesday meeting."
            }
        ],
        
        results: [
            {
                metric: "Communication Gap",
                value: "Eliminated"
            },
            {
                metric: "Alignment",
                value: "100% Achieved"
            },
            {
                metric: "Stakeholder Satisfaction",
                value: "Client & Team Happy"
            }
        ],
        
        images: [],
        available: true,
        dateUploaded: "Jan 31, 2026",
        dateUpdated: getToday(),
    },
    {
        id: "fintech-dashboard",
        title: "Coming Soon",
        shortDescription: "More case studies coming soon. Stay tuned!",
        valueTitle: "Coming Soon",
        role: "",
        timeline: "",
        platform: "",
        tags: ["Coming Soon"],
        tools: [],
        problem: "",
        solution: "",
        keyInsight: "",
        process: [],
        results: [],
        images: [],
        available: false,
        dateUploaded: "",
        dateUpdated: "",
    },
];

export const getAvailableCaseStudies = () => caseStudies.filter((study) => study.available);
export const getCaseStudyById = (id: string) => caseStudies.find((study) => study.id === id);
