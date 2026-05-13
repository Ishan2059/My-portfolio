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
    notionLink?: string; // Optional - Notion documentation link
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
        id: "minto",
        title: "Minto",
        shortDescription: "Making budgeting feel less stressful for young adults. Problem: Financial apps feel overwhelming. Solution: Calm, emotionally aware UX. Outcome: Lower financial anxiety during testing.",
        valueTitle: "Minto: Redefining Young Finance",
        role: "UX Researcher & UI Designer",
        timeline: "3 weeks",
        platform: "Mobile App",
        tags: ["UX Research", "UI Design", "Solo Project", "Self-initiated"],
        tools: ["Figma"],
        
        problem: "I narrowed the scope to one type of person: someone in their mid-twenties who does not live with their parents, has a relatively stable income, and has no real system for managing it. They are not in a financial crisis. They are simply floating by - spending money with little conscious thought and checking their bank balance with a knot in their stomach. They're not looking for a financial planning tool. They want something that gives them a clear, honest picture of where they stand without making it feel like they have already failed.",
        
        solution: "The main screen is built around three questions a user probably has when they open the app: How much did I set aside this month? How much have I spent? How much do I have left? Those three questions become the three cards at the top. The progress bar sits under 'Spent So Far' and fills in sage green — not because green means good, but because a neutral colour doesn't trigger a stress response the way red does. The remaining amount is shown in the same green, front and centre, because that's what users told me they actually wanted to see.",
        
        keyInsight: "After talking to fellow Millennials between the ages of 22-27, it became clear that the main issue with budgeting is not lack of information, but rather an emotional challenge. While other rely heavily on numbers and constant notifications, they are not emotionally accessible. The result is what one may call 'anticipatory dread.' For instance, one individual hides from her bank app in order not to spend too much, while another stopped budgeting as she found the whole process to be the job of 'experts.'",
        
        process: [
            {
                step: "Research",
                description: "After talking to fellow Millennials between the ages of 22-27, it became clear that the main issue with budgeting is not lack of information, but rather an emotional challenge. While other rely heavily on numbers and constant notifications, they are not emotionally accessible.",
                outcome: "Identified that the main barrier was emotional, not informational. Users experienced 'anticipatory dread' when opening financial apps."
            },
            {
                step: "Design Principles",
                description: "Three principles shaped everything that followed: Prioritize calm over comprehensiveness. Frame is more important than figures. Avoid a penalty mindset. No red color, no exclamation marks, and no wording that might suggest the user has done something wrong if they spend too much money on meals.",
                outcome: "Established a design framework focused on emotional accessibility rather than feature completeness."
            },
            {
                step: "Dashboard Design",
                description: "Below that, the spending breakdown gives a category-level view without overwhelming detail. The donut chart keeps it visual and quick. The legend shows the five categories with amounts and percentages — enough to notice a pattern, not enough to spiral into analysis. The recent transactions list sits alongside it. It's intentionally simple: merchant, category tag, amount, date.",
                outcome: "Created a dashboard that provides just enough information to feel oriented without overwhelming the user."
            }
        ],
        
        results: [
            {
                metric: "Design Philosophy",
                value: "Calm Over Comprehensive"
            },
            {
                metric: "User Experience",
                value: "No Penalty Mindset"
            },
            {
                metric: "Information Design",
                value: "Frame Over Figures"
            }
        ],
        
        images: ["minto-dashboard.png"],
        available: true,
        dateUploaded: getToday(),
        dateUpdated: getToday(),
        notionLink: "https://evening-avocado-5a9.notion.site/Minto-Redesigning-the-Relationship-Between-Young-People-and-Their-Money-33ebea1a3b7d8034a00fc81a57008202?pvs=143",
    },
    {
        id: "sixty",
        title: "Sixty",
        shortDescription: "A mental wellness app built around constrained daily reflection. Problem: Journaling feels mentally heavy. Solution: 60-second guided interaction. Outcome: Faster habit consistency.",
        valueTitle: "The 60-Second Friction Fix",
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
        id: "roam",
        title: "Roam",
        shortDescription: "Local event discovery reimagined. Problem: Too many options, no trust signals. Solution: One strong recommendation + social proof. Outcome: Feels like a city magazine, not a database.",
        valueTitle: "Roam — Finding Your City Again",
        role: "UX Researcher & UI Designer",
        timeline: "3 weeks",
        platform: "Mobile App",
        tags: ["UX Research", "UI Design", "Solo Project", "Self-initiated"],
        tools: ["Figma"],
        
        problem: "Discovering local events sounds like a solved problem. It isn't. The friction isn't access to information — it's trust and relevance. Eventbrite overwhelms you with listings. Facebook Events assumes you're already embedded in a local community. None of them answer the question people actually have: what's worth going to tonight, near me, that people I know are already attending?",
        
        solution: "One strong recommendation over a long list. The featured 'Happening Tonight' card takes up most of the screen deliberately. It's a suggestion, not a listing. Social proof as a top-level element. The '+24 friends going' line and the 'Friends Are Going' strip aren't buried in a tab — they're on the main screen, because that's what actually gets people to show up. Editorial visual language. The serif logo, real photography, and warm parchment background make Roam feel like a city magazine recommendation rather than a database query.",
        
        keyInsight: "I had four informal conversations with people in their early-to-mid twenties who'd recently moved cities. Three things came up every time: Proximity is emotional, not geographical. People skipped events that felt far even when they were walkable. Social proof is the real discovery mechanism. In almost every case, someone tried something new because a friend was going — not because they found it themselves. The decision window is tiny. Nobody browses events like Netflix.",
        
        process: [
            {
                step: "Research",
                description: "I had four informal conversations with people in their early-to-mid twenties who'd recently moved cities. Three things came up every time: Proximity is emotional, not geographical. Social proof is the real discovery mechanism. The decision window is tiny.",
                outcome: "Identified that people need immediate recommendations with social proof, not endless browsing options."
            },
            {
                step: "Design Decisions",
                description: "One strong recommendation over a long list. The featured 'Happening Tonight' card takes up most of the screen deliberately. Social proof as a top-level element. Editorial visual language with serif logo, real photography, and warm parchment background. Five category pills, nothing more.",
                outcome: "Created a design that feels like a city magazine recommendation rather than a database query."
            },
            {
                step: "Reflection",
                description: "Someone opening Roam has already decided they want to do something. The app's only job is to remove every reason for them to close it and stay home. That framing shaped every decision — the single card, the friends strip, the warm tone.",
                outcome: "Designed an experience that prioritizes immediate action over exploration."
            }
        ],
        
        results: [
            {
                metric: "Design Philosophy",
                value: "One Strong Recommendation"
            },
            {
                metric: "Social Proof",
                value: "Top-Level Element"
            },
            {
                metric: "User Experience",
                value: "Editorial Visual Language"
            }
        ],
        
        images: ["roam (3).png"],
        available: true,
        dateUploaded: getToday(),
        dateUpdated: getToday(),
    },
    {
        id: "hamro-patro",
        title: "Hamro Patro (Redesign)",
        shortDescription:
            "Hamro Patro Problem Case Study",
        valueTitle: "Faster Insights: A Minimalist Redesign of Hamro Patro",
        role: "Product Designer",
        timeline: "1 day",
        platform: "Mobile App",
        tags: ["UI/UX Design", "Product Design", "Utility-First", "Minimalist Redesign"],
        tools: ["Figma", "ChatGPT/Gemini (Research)", "Video walkthrough"],

        problem:
            "Hamro Patro is a vital utility for millions, yet its current interface suffers from extreme visual clutter. Between calendars, weather updates, and intrusive ads, the core value—the date and festivals—is buried. For users like Ram Bahadur (45, Kathmandu), the app feels like a 'digital maze' rather than a quick utility tool.",

        keyInsight:
            "The friction wasn't a lack of features; it was a lack of focus. High cognitive load from mixed content (ads vs. utility) prevented users from completing their primary task: check, confirm, and close.",

        solution:
            "I designed a streamlined, high-hierarchy interface that prioritizes the calendar and upcoming festivals while suppressing non-essential elements. By applying a 'Utility-First' visual language, I ensured users could find the day in under 2 seconds, regardless of their tech literacy.",

        process: [
            {
                step: "Empathy & Persona Mapping",
                description:
                    "I defined Ram Bahadur as a representative persona—someone who needs high legibility and zero distractions. This helped anchor every design decision in a single success metric.",
                outcome: 'Identified "Time-to-Information" as the primary success metric.',
            },
            {
                step: "AI-Assisted Friction Analysis",
                description:
                    "To validate assumptions, I used AI tools (ChatGPT & Gemini) to audit existing UI screenshots. This helped pinpoint specific dark-pattern behaviors and visual bottlenecks.",
                outcome: "Isolated three core issues—Visual Clutter, Weak Hierarchy, and Intrusive Ad Placement.",
            },
            {
                step: "Prototyping & Motion Design",
                description:
                    "I generated a high-fidelity redesign in Figma and created a video walkthrough to demonstrate the solution.",
                outcome: "Transformed a static, overwhelming experience into a dynamic, user-centric tool.",
            },
        ],

        results: [
            { metric: "Time-to-Information", value: "Under 2 seconds" },
            { metric: "Cognitive Load", value: "Significantly Reduced" },
            { metric: "Visual Hierarchy", value: "Calendar-First Focus" },
            { metric: "User Experience", value: "Happy user" },
        ],

        // Template expects: /case-studies/{study.id}/Sixty images/{filename}
        images: [
            "FinalDesign.png",
        ],
        available: true,
        dateUploaded: "Mar 19, 2026",
        dateUpdated: getToday(),
    },
    {
        id: "game-flow-mapping",
        title: "Game Flow Mapping",
        shortDescription: "Resolving client-team misalignment through structured game flow mapping across 3 game modes.",
        valueTitle: "Mapping Game Flow to Align Client and Team",
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
