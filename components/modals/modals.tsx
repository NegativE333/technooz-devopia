import { AddInvestmentModal } from "./add-investment-modal"
import { AddMemberModal } from "./add-member-modal"
import { AddSavingsModal } from "./add-savings-modal"
import { DeleteInvestmentModal } from "./delete-investment-modal"

export const Modals = () => {
    return(
        <>
            <AddInvestmentModal />
            <AddSavingsModal />
            <AddMemberModal />
            <DeleteInvestmentModal />
        </>
    )
}