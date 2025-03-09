

import Navbar from "@/components/navbar";



//export default function Page() {
//   return <Navbar />;
  
// }



import Grid from "@/components/Grid";
import Sidebar from "@/components/ui/sideNav";

export default function Home() {
  return (
    
    
    
    <div>
      
      <div className="pl-10">
      <Navbar />
      </div>
      <Sidebar />
    
      
      
      
      
      <main className="justify-center items-center min-h-screen bg-gray-100">
      
      <div className="pl-15 bg-[url('/background.svg')] bg-cover bg-center h-screen w-full">
      <Grid />
      </div>


    </main>
    </div>
    
  );
}










 






