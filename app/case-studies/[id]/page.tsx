"use client";

import CaseStudyTemplate from "@/app/components/CaseStudyTemplate";
import { getCaseStudyById } from "@/app/data/caseStudies";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function CaseStudyPage() {
    const params = useParams();
    const id = params.id as string;
    const study = getCaseStudyById(id);

    if (!study) {
        notFound();
    }

    return <CaseStudyTemplate study={study} />;
}
