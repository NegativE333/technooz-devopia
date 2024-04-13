import { Navbar } from "@/components/navbar";

type Props = {
    children: React.ReactNode;
}

const LandingLayout = ({
    children
}: Props) => {
    return (  
        <div className="h-full">
            <Navbar />
            <div className=" bg-teal-300 rounded-xl h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}
 
export default LandingLayout;