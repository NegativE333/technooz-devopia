import React from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Link from "next/link";

type Props = {
    children: React.ReactNode;
}

export const MobileSidebar = ({
    children
}: Props) => {
    return(
        <Sheet>
            <SheetTrigger>
                {children}
            </SheetTrigger>
            <SheetContent>
                {/* <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader> */}
                <div className="flex flex-col mt-4 gap-8 font-semibold">
                        <Link href="/investment" className="text-lg">
                            Investments
                        </Link>
                        <Link href="/savings" className="text-lg">
                            Savings
                        </Link>
                        <Link href="/analytics" className="text-lg">
                            Analytics
                        </Link>
                        <Link href="/news" className="text-lg">
                            News
                        </Link>
                    </div>
            </SheetContent>
        </Sheet>
    )
}