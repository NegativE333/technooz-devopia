import { BarChart } from "@/components/analytis/bar-chart";
import { DonughtChart } from "@/components/analytis/doughnut-chart";
import { getInvestments, getMembers } from "@/db/queries";


const ChartsPage = async () => {
    const getInvestmentsData = getInvestments();
    const getMembersData = getMembers();

    const [
        investmentsData,
        MembersD
    ] = await Promise.all([
        getInvestmentsData,
        getMembersData
    ]);

    const investmentAmount = [0, 0, 0, 0]; //stock, land, gold, oth

    let membersNames: string[] = [];
    let membersInvestments: number[] = [];

    investmentsData?.map((i) => {
        if (i.type === "Stock" || i.type === "stock") {
            investmentAmount[0] += parseInt(i.amount);
        }
        else if (i.type === "Land" || i.type === "land") {
            investmentAmount[1] += parseInt(i.amount);
        }
        else if (i.type === "Gold" || i.type === "gold") {
            investmentAmount[2] += parseInt(i.amount);
        }
        else {
            investmentAmount[3] += parseInt(i.amount);
        }
    });

    MembersD?.map((m) => {
        membersNames.push(m.name);
        membersInvestments.push(parseInt(m.totalInv));
    })

    return (
        <div className="flex flex-col lg:flex-row h-[90vh] w-full  gap-12 lg:gap-8 items-center justify-center lg:mt-0 mt-8">
            <BarChart investmentAmount={investmentAmount} />
            <DonughtChart membersName={membersNames} membersInv={membersInvestments} />
        </div>
    );
}

export default ChartsPage;