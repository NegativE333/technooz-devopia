import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { getMemberInvestments } from "@/actions/get-members-investment";
import { Investment } from "@prisma/client";

type Props = {
    children: React.ReactNode;
    name: string;
}

export const InvestmentsHover = async ({
    children,
    name
}: Props) => {

    const result = await getMemberInvestments({ name });

    if (!result || !result.investments) return null; // Return early if result or result.investments is null

    const membersInvestments: Investment[] = result.investments;

    return (
        <HoverCard>
            <HoverCardTrigger>
                {children}
            </HoverCardTrigger>
            <HoverCardContent side="left">
                {membersInvestments.map((i, index) => (
                    <div key={index} className="flex">
                        <p>
                            {i.invName}
                        </p>
                        <p className="ml-auto">
                            {i.amount} ₹
                        </p>
                    </div>
                ))}
            </HoverCardContent>
        </HoverCard>
    );
}
