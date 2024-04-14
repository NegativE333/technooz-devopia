"use client";

import { useSetSavingsModal } from "@/store/use-savings-modal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState, useTransition } from "react";
import { FormInput } from "../form/form-input";
import { PiggyBank } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormSubmit } from "../form/form-submit";
import { toast } from "sonner";
import { addSavings } from "@/actions/set-savings";
import { useDeleteInvestmentModal } from "@/store/use-delete-investment-modal";
import { deleteInvestment } from "@/actions/delete-investment";

export const DeleteInvestmentModal = () => {
    const { id, isOpen, close } = useDeleteInvestmentModal();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    const [pending, startTransition] = useTransition();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (pending) return;

        const formData = new FormData(event.target);

        startTransition(() => { 
            const amount = formData.get("amount") as string; 

            id && deleteInvestment({id,soldAmount:amount})
            // addSavings({amount, type: "cash", buy: false}).then(()=>{
            //     toast.success("Savings added");
            //     close();
            // }).catch(()=>{
            //     toast.error("something went wrong")
            // })
        });
    };

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex gap-2 items-center justify-center">
                        <PiggyBank className="h-6 w-6" /> Sold Amount
                    </DialogTitle>
                    <DialogDescription className="py-1 text-center">
                        Add to Sold Amount
                    </DialogDescription>
                    <Separator />
                    <form onSubmit={handleSubmit} className="mx-0">
                        <div className="space-y-4">
                            <FormInput
                                label="Sold Amount"
                                id="amount"
                                type="number"
                            />
                             
                            <Separator />
                            <FormSubmit
                                isProcessing={pending}
                                className="w-full"
                            >
                                Add
                            </FormSubmit>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};