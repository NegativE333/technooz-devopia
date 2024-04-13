import { Loader } from "lucide-react";


const AnalyticsLoading = () => {
    return (  
        <div className="h-full w-full flex items-center justify-center">
            <Loader className="h-7 w-7 animate-spin"/>
        </div>
    );
}
 
export default AnalyticsLoading;