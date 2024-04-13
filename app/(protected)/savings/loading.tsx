import { Loader } from "lucide-react";


const SavingsLoading = () => {
    return (  
        <div className="h-[90vh] w-full flex items-center justify-center">
            <Loader className="h-7 w-7 animate-spin"/>
        </div>
    );
}
 
export default SavingsLoading;