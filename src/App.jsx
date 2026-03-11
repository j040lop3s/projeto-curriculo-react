import { CurriculoContext } from "./CurriculumContext";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";


function App() {
    return (
        <CurriculoContext>
            <div className="flex flex-col md:grid md:grid-cols-4 min-h-screen bg-white text-black">
                <div className="border-4 border-black">
                    <Sidebar />
                    
                </div>

                <main className="md:col-span-3 flex flex-col">
                    <Menu />

                    <div className="flex-1 border-4 border-t-0 md:border-t-0 md:border-l-0 border-black p-6 md:p-8">
                        <ContentArea />
                    </div>
                </main>
            </div>
           
        </CurriculoContext>
    )
}

export default App;