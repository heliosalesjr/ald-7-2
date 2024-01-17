import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

const AtiPlanejamentoEducador = () => {
  return (
    <div className='bg-slate-600 py-8'>
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
        
            <div className="md:w-1/2 md:ml-4">
                <h2 className="mb-16 text-4xl text-white font-bold px-8 ">O Planejamento do Educador</h2>
                <p className='text-white px-8'>
                Este é o planejamento do professor e deve conter todos os itens do PPDA (Pequeno Projeto Didático Ativo). O professor estipulará objetivos pedagógicos e atividades didáticas a serem desenvolvidas visando auxiliar os estudantes a alcançarem o objetivo do projeto. Este planejamento deve conter as ações do professor levando em consideração em que momento da execução do projeto os alunos se encontram.
                </p>
            </div>

            
            <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                <img
                className="w-full h-full object-cover rounded-md"
                src="/images/professor.jpg"  // Substitua pelo caminho da sua imagem
                alt="Descrição da Imagem"
                />
            </div>
        </div>

        <div className='py-8'>
            <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                
                
                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber1 className="text-4xl text-primary mb-4" />
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Sugerimos que, ao finalizar a primeira versão do planejamento, o professor e a professora compartilhem com os estudantes, para que estes opinem sobre os temas, competências, habilidades, temas e prazos propostos. A opinião dos estudantes é valiosa, uma vez que o trabalho é pensado e planejado para eles.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber2  className="text-4xl text-primary mb-4" />
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left pb-4'>Planejar um projeto é uma tarefa desafiadora uma vez que, a cada passo dado, muitas variáveis entram em cena e modificam prazos e ações. Tendo essa ideia em mente, sugerimos que, uma vez pronto, o planejamento seja constantemente atualizado.</p>
                </div>

                <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <div className="flex items-end justify-end">
                        <TbCircleNumber3 className="text-4xl text-primary mb-4" />
                    </div>
                    
                    <p className='text-sm text-slate-800 text-left'>À medida que as ações planejadas acontecem, elas geram resultados que impactarão diretamente no desenvolvimento das próximas tarefas, então estes resultados devem ser considerados e utilizados para a constante atualização do planejamento.</p>
                </div>

                
            </div>
        </div>
        <p className='text-white px-8 max-w-7xl mx-auto text-center font-semibold py-8'>O planejamento deve ser objetivo, ativo e contínuo, em que objetivo refere-se a ser fácil de ser entendido, ativo refere-se à qualidade de ser mudado de acordo com os resultados obtidos em cada ação executada e contínuo porque deve ser feito a todo momento, até o fim do projeto.</p>
    </div>
    
  );
};

export default AtiPlanejamentoEducador;
