"use client";

import { PieChart } from "lucide-react";
import { Doughnut } from "react-chartjs-2";

type Props = {
    membersName: string[];
    membersInv: number[];
}

export const DonughtChart = ({
    membersName,
    membersInv
}: Props) => {

    console.log(membersInv);

    return(
        <div className="">
            <div className="flex items-center justify-center text-center mb-4 font-semibold text-lg text-neutral-700">
                <PieChart className="h-6 w-6 mr-2" />
                Individual Member Investment Chart
            </div>
            <Doughnut 
                data={{
                    labels: membersName.map((bal) => bal),
                    datasets: [
                        {
                            label: "Balances",
                            data: membersInv.map((bal) => bal),
                            borderRadius: 5,
                        }
                    ]
                }}
            />
        </div>
    )
}