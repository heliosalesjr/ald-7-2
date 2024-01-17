import React from 'react';

const AtiEstudante = () => {
  return (
    <>
        <div className='pt-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center p-8">
                
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                    src="/images/students.jpg"
                    alt="Imagem"
                    className="w-full h-full object-cover rounded-md"
                    />
                </div>

                
                <div className="px-4 md:w-1/2 md:ml-4">
                    <h1 className="text-slate-600 text-2xl md:text-4xl font-bold mb-4">O Plano de Ação dos Estudantes</h1>
                    <p className="text-slate-700">A proposta de trabalho por projetos objetiva que os estudantes desenvolvam, principalmente, a autonomia. Para isso, devem se responsabilizar pelo desenvolvimento do projeto. Se o professor ou professora entrega um cronograma de atividades a serem desenvolvidas, os estudantes apenas têm que seguir um plano, enquanto que, quando são desafiados a planejar do zero ações efetivas para atingir um objetivo, eles saem de suas zonas de conforto e mobilizam competências, habilidade e saberes.</p>
                </div>
            </div>

            
        </div>

        <div className='m-4 sm:py-8'>
            <div className="mx-auto max-w-6xl">
                <div className='bg-white p-6 rounded-lg border border-slate-300  m-2 flex flex-col justify-start items-start hover:shadow-purple-700 hover:scale-105 transition-all duration-300'>
                <div className="flex items-end justify-end">
                    {/* Conteúdo da sua div */}
                </div>
                
                <p className=' text-slate-800 text-left p-4'>Assim que o professor apresenta a proposta de trabalho, os estudantes devem iniciar o planejamento de ações para o desenvolvimento do projeto. Para isso, devem se reunir, discutir, elencar e organizar ações, assim como delegar quem deve fazê-las e definir prazos. O planejamento dos estudantes deve ser visto como um cronograma, elaborado e executado por eles. O professor e a professora entram nesta etapa como orientadores, auxiliando os estudantes e não delegando o que deve ser feito, salvo aquelas atividades pedagógicas relacionadas com o aprendizado de Matemática.</p>
                </div>
            </div>
        </div>
    </>
    
  );
};

export default AtiEstudante;

