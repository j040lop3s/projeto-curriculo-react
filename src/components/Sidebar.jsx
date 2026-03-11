import CURRICULUM_DATA from "../data/curriculumData.jsx";

function Sidebar() {

    const { info } = CURRICULUM_DATA; // Desestruturação de objeto

    return (
        <aside className="p-8 flex flex-col items-center space-y-4">
            <div>
                <img className="border-4 border-black w-48 h-48 object-cover rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
                    src="/perfil.png" />
            </div>

            <div className="flex flex-col p-6 space-y-3 w-100 items-center font-black uppercase text-sm">
                <h1 className="text-2xl">{ info.nome }</h1>
                <p>{ info.ocupacao }</p>
                <p>{ info.endereco }</p>
            </div>

            <div className="flex flex-col p-6 space-y-3 w-100 items-center">
                <p><strong>Celular: </strong><a href="https://wa.me/5531997479903" target="_blank" className="hover:text-purple-500">{ info.contatos.tel }</a></p>
                <p><strong>Email: </strong><a href="mailto:joaovitorlopesilva201@gmail.com" target="_blank" className="hover:text-purple-500">{ info.contatos.email }</a></p>
                <p><strong>Github: </strong><a href="https://github.com/j040lop3s" target="_blank" className="hover:text-purple-500">{ info.contatos.github }</a></p>
            </div>

        </aside>
    )
};

export default Sidebar;