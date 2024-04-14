import Link from "next/link"
import { Button } from "./ui/button"
import { auth, UserButton } from "@clerk/nextjs"
import { Raleway } from "next/font/google"
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
const font = Raleway({ subsets: ["latin"] });

export const Navbar = async () => {

    const { userId } = await auth();

    return (
        <div className="fixed h-16 w-full border-b border-black flex items-center p-2 lg:px-16 z-10 bg-white">
            <Link href="/"> 
                <Image
                    unoptimized
                    src="/MoneyCare.png"
                    alt="logo"
                    height={100}
                    width={110}
                /> 
            </Link>
            {!userId ? (
                <div className="ml-auto flex gap-2">
                    <Button className="transition ease-in-out delay-10 hover:translate-y-1 hover:scale-110 hover:bg-black duration-30 ...">
                        <Link href="/sign-in">
                            Sign In
                        </Link>
                    </Button>
                    <Button className="transition ease-in-out delay-10 hover:translate-y-1 hover:scale-110 hover:bg-black duration-30 ...">
                        <Link href="/sign-up">
                            Sign Up
                        </Link>
                    </Button>
                </div>
            ) : (
                <div className="w-full flex ml-12">
                    <div className="lg:flex hidden gap-8 font-semibold">
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
                    <div className="ml-auto mr-2 flex lg:hidden">
                        <MobileSidebar>
                            <Menu className="h-6 w-6"/>
                        </MobileSidebar>
                    </div>
                    <div className="ml-auto hidden lg:flex">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            )}
        </div>
    )
}