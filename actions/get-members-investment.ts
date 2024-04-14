"use server";

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';

type Props = {
    name: string;
}

export const getMemberInvestments = async ({
    name
}: Props) => {

    const {userId} = auth();

    if(!userId) return null;

    const investments = await db.investment.findMany({
        where: {
            userId,
            familyMemberName: name
        }
    });

    return {investments};
}