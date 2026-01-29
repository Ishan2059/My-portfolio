"use client";

import CaseStudyTemplate from "@/app/components/CaseStudyTemplate";
import { getCaseStudyById } from "@/app/data/caseStudies";
import { notFound } from "next/navigation";

export default function SixtyCaseStudy() {
    const study = getCaseStudyById("sixty");

    if (!study) {
        notFound();
    }

    return <CaseStudyTemplate study={study} />;
}
