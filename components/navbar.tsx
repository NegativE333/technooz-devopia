import Link from "next/link"
import { Button } from "./ui/button"
import {Cabin} from "next/font/google"
import { cn } from "@/lib/utils"

const font = Cabin({subsets:["latin"]})
export const Navbar = () => {
    return(
        
        <div className={cn("bg-teal-500	rounded-xl fixed h-16 w-full border-b border-black flex items-center p-2 px-16",font.className)}>
            <h1>
                Wealth Wise
            </h1>
            <div className="ml-auto flex gap-2 ">
                <Button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...">
                    <Link href="/sign-in">
                        Sign In
                    </Link>
                </Button>
                <Button className="transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ...">
                    <Link href="/sign-up">
                        Sign Up
                    </Link>
                </Button>
            </div>
        </div>
    )
}