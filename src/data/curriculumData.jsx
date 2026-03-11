// Objeto de dados que vai gerenciar renderizações e estados.

const CURRICULUM_DATA = {
    info: {
        nome: "João Lopes",
        ocupacao: "Estudante de Engenharia de Software",
        contatos: {
            github: "github.com/j040lop3s",
            tel: "+55 (31) 99747-9903",
            email: "joaovitorlopesilva201@gmail.com"
        },
        endereco: "Belo Horizonte - MG",
    },
    sections: [
        {
            id: "Resumo Profissional",
            itens: [{ descricao: "Minha jornada pelo mundo da Tecnologia da Informação começou ainda durante a infância e pré-adolescência, quando constantemente era solicitado a resolver algum problema no computador. Mesmo que não solucionasse, já era curioso o suficiente a tentar. Durante um curso de Técnico em TI integrado ao Ensino Médio tive meu primeiro contato com sistemas de hardware e software, bem como noções em linguagem de programação, o que me despertou bastante fascínio. Atualmente, estou cursando Engenharia de Software pelo Centro Universitário - UNA em paralelo à um curso de Desenvolvimento Web com React, um projeto ministrado pela CEPEDI em parceria com a IFMG."}]
        },
        {
            id: "Cursos",
            itens: [{
                nome: "Técnico em Informática",
                instituicao: "Centro de Educação Paulo Viana (CEP)",
                descricao: "Formação técnica voltada para o desenvolvimento de competências em hardware, software, redes e sistemas operacionais. O curso abrangeu fundamentos de programação (C++), banco de dados, manutenção de computadores e suporte técnico."
            }, {
                nome: "Desenvolvimento Front-End com React",
                instituicao: "CEPEDI/IFMG",
                descricao: "Desenvolvimento prático em JavaScript e React, aplicando conceitos de lógica de programação para construir interfaces de usuário modernas e responsivas."
            }, {
                nome: "Bacharelado em Engenharia de Software",
                instituicao: "Centro Universitário - UNA",
                descricao: "Curso voltado ao projeto, desenvolvimento, testagem, manutenção e gerenciamento softwares, fazendo uso de metodologias ágeis e tecnologias modernas para criar soluções escaláveis, seguras e inovadoras em diversos setores do mercado."
            }]
        }, {
            id: "Experiencias e Projetos",
            itens: [{
                nome: "Assistente Administrativo – Assistente de Projetos Especiais",
                empresa: "Localiza&Co",
                descricao: "Automação e otimização: Responsável pela automação de rotinas manuais, desenvolvendo bots em Python para validação automática, o que otimizou significativamente os processos departamentais. Qualidade dos dados: Responsável pela redução de erros e pendências relacionadas à documentação e transferências de veículos. Gestão de Documentos: Responsável por criar e atualizar planilhas de controle em processos e gerenciamento documentos oficiais."
            },
        ]
        }, {
            id: "Idiomas",
            itens: [{ lan: "Inglês", nivel: "Avançado"}]
        }
    ]
};

export default CURRICULUM_DATA;
