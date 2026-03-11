// Contexto criado para gerenciar o estado e as renderizações no componente de conteúdo através de botões em um menu.

import { createContext, useContext, useState } from "react";
import CURRICULUM_DATA from "./data/curriculumData.jsx";

const Context = createContext();

export function CurriculoContext({children}) {

    const [section , setSection] = useState(CURRICULUM_DATA.sections[0]); // inicia o estado com o objeto inteiro da primeira seção (Primeiro item da array sections);

    const changeSection = (idSection) => {

        const is_section = CURRICULUM_DATA.sections.find(s => s.id === idSection); // find retorna o objeto encontrado ou 'undefined';

        if (is_section) { // caso a variável não seja um valor falsy (undefined) chama a função que muda o estado, inserindo o objeto da seção passada como parâmetro; 
            setSection(is_section);
        }
    }

    return (
        <Context.Provider value={{ section, changeSection }}>
            {children}
        </Context.Provider>
    )

};

/* Context é um objeto de contexto com duas propriedades: Provider e Consumer. Utilizamos o componente retornado
por Context.Provider para envolver os componentes filhos (children) que terão acesso aos valores passados na
prop value. */


// Aqui é criada uma função específica para desestruturação dos valores armazenados no contexto.
export function useCurriculum() {
    return useContext(Context);
}