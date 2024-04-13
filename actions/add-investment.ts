"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { addSavings } from './set-savings';

type Props = {
    amount : string;
    type : string;
    invName: string;
    riskFactor: string;
    returnFactor: string;
    familyMemberName: string;
}

export const addInvestment = async ({
    amount,
    type,
    invName,
    riskFactor,
    returnFactor,
    familyMemberName
}: Props) => {

    const {userId} = await auth();
    const user = await currentUser();
    let success="notexist";

    if(!userId || !user) return success;

    const memberExists = await db.family.findUnique({
        where:{
            userId,
            name:familyMemberName
        }
    });

    if(!memberExists) return success;

    const prevInv = await db.user.findUnique({
        where: {
            userId
        },
        select: {
            totalInv: true,
            totalSav:true
        }
    });

    success="nosaving"
    if(prevInv && parseInt(prevInv.totalSav) < parseInt(amount) ) return success;

    const newInvestment = await db.investment.create({
        data: {
            userId,
            amount,
            type,
            invName,
            riskFactor,
            returnFactor,
            familyMemberName
        }
    });
    success="success"
    console.log(success);

    

    let totalInvAfterUpdate = 0;
    if(prevInv){
        totalInvAfterUpdate = parseInt(prevInv.totalInv) + parseInt(amount);
    }

    const updatedUserWithInv = await db.user.update({
        where: {
            userId
        },
        data: {
            totalInv: totalInvAfterUpdate.toString(),
        }
    })  

    
    const newamount=0 - parseInt(amount)
    const newvalue=newamount.toString() 

    
    addSavings({amount:newvalue, type: type, buy: true, name: familyMemberName});
    //update the totalInvest in Family for member
    const memberInvUpdate = await db.family.findUnique({
        where: {
            name:familyMemberName
        },
        select: {
            totalInv: true
        }
    });
    let memberInvafterupdate = 0;
    if(memberInvUpdate){
        memberInvafterupdate = parseInt(memberInvUpdate.totalInv) + parseInt(amount);
    }

    const newUser = await db.family.update({
        where:{
            name:familyMemberName
        },
        data: {
            totalInv:memberInvafterupdate.toString() 
        }
    });
    revalidatePath("/");
    revalidatePath("/dash-board");

    return {success};
}