import React from 'react';
import { PiChalkboardTeacher } from 'react-icons/pi';
import { PiMathOperationsFill } from 'react-icons/pi';
import { MdOutlineSafetyDivider } from 'react-icons/md';

const AtiPlanejamento = () => {
  return (
    <div className="container mt-12 mx-auto max-w-7xl md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32 text-center">
        <h2 className="mb-16 text-4xl text-slate-600 font-bold">
        O planejamento no programa “Aprendendo a Lidar com Dinheiro”
        </h2>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-4 md:mb-0">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-tl from-primary-focus to-primary p-4 text-primary">
              <PiChalkboardTeacher className="h-8 w-8 text-white" />
            </div>
            
            <p className="text-neutral-700 px-4">
            A proposta de trabalho do programa “Aprendendo a Lidar com Dinheiro” conta com duas frentes de ação: a do professor e a do estudante, ambas trabalham juntas para a execução do Pequeno Projeto Didático Ativo (PPDA). 
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-tl from-primary-focus to-primary p-4 text-primary">
              <PiMathOperationsFill className="h-8 w-8 text-white" />
            </div>
            
            <p className="text-neutral-700 dark:text-neutral-600 px-4">
            Conforme já conversamos na seção anterior, o professor atua como orientador, trazendo temas de matemática, habilidades da BNCC e outras atividades relevantes para o desenvolvimento do projeto, enquanto os estudantes são aqueles que vão planejar e executar as ações do projeto.
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-tl from-primary-focus to-primary p-4 text-primary">
              <MdOutlineSafetyDivider className="h-8 w-8 text-white" />
            </div>
            
            <p className="text-neutral-700 dark:text-neutral-600 px-4">
            Ambas as partes necessitam estar alinhadas, de modo que sejam planejadas conjunta e individualmente para que o projeto aconteça. Para tal, dividimos a etapa de planejamento em Planejamento do Educador e Plano de Ação do Estudante.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AtiPlanejamento;
