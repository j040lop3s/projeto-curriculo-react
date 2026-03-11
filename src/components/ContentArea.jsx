// Componente que renderiza o conteúdo das seções em relação ao estado.

import { useCurriculum } from "../context/CurriculumContext";

function ContentArea() {

    const { section } = useCurriculum();

    // Se section não guardar nenhuma seção ou item. Aqui o componente para e retorna nulo se a condição for verdadeira, não exibindo nada na tela.
    if (!section || !section.itens ) return null;
    return (
        <section>

            <div className="p-4 space-y-8">
                { section.itens.map((item,index) => (
                    <div key={index} className="border-2 border-black p-4 mb-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="font-black uppercase text-sm"> { item.nome || item.lan }</h3>

                        { item.descricao && (<p>{ item.descricao }</p>)}

                        { item.instituicao && (<span className="text-sm">{ item.instituicao }</span>)}

                        { item.nivel && (<p>{ item.nivel }</p>)}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContentArea;