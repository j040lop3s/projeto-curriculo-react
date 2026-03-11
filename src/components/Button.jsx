// Componente mínimo de botão que recebe 3 props:
// 'nomeBtn' recebe o nome de cada seção;
// 'funcaoBtn' recebe a função que modifica o estado;
// 'isActive' recebe um booleano caso a seção aberta seja a mesma do estado (estilos dinâmicos);

// onClick={funcaoBtn} referência à função.

function Button({ nomeBtn, funcaoBtn, isActive }) {

    return (
        <button onClick={funcaoBtn}
            className={`
                border-r-4 border-black px-6 py-4 font-black uppercase text-sm transition-all
                ${isActive ? 'bg-black text-white' // Estilo ATIVO
                : 'bg-white text-black hover:bg-gray-300  hover:text-black' // Estilo INATIVO
        }
      `}
            >
            { nomeBtn }
        </button>
    )
}

export default Button;