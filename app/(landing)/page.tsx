import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="ml-50 flex flex space-x-8">
      <div className = "pb-10">
        <h1 className="text-xl bg-teal-500 italic first-line:rounded-lg font-semibold p-2 rounded-xl">
          Take Control of Your Finances.<br/>
          By Utilizing The Best Finance Management Platform
        </h1> 
      </div>
      <div className = "pb-10">
        <h1 className="text-xl bg-teal-500 p-2 rounded-xl font-semibold">
          <ul>
            <div>
            <li>Financial Dashboard</li>
            </div>
            <div>
            <li>Risk Assessment</li>
            </div>
            <div>
            <li>Net Worth Calculation</li>
            </div>
            <div>
            <li>Family Financial Planning</li>
            </div>
            <div>
            <li>Personalised Recommendation</li>
            </div>
          </ul>
        </h1> 
      </div>
      {/* <UserButton afterSignOutUrl="/"/> */}
    </div>
  );
}
