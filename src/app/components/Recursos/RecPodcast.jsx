import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from 'react-icons/tb'
function RecPodcast() {
    return (
        <div className='bg-slate-600 py-8'>
            <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center justify-center sm:p-8">
            
                <div className="md:w-1/2 md:ml-4">
                    <h2 className="mb-16 text-4xl text-white font-bold px-8 ">Podcast</h2>
                    <p className='text-white px-8'>
                    PODCAST é uma mídia em formato de áudio cujo objetivo é transmitir informação e contribuir para a criatividade, para a oralidade e para o espírito colaborativo dos envolvidos. O educador pode auxiliar os estudantes a criar um roteiro para o podcast proposto na atividade sugerida, além de incentivar diferentes formatos, como história, entrevista, bate-papo, educativo, etc. Você pode ler mais sobre cada tipo neste site, ou fornecer o link para que os alunos pesquisem os diferentes formatos e escolham um que mais gostem.
                    </p>
                </div>
    
                
                <div className="p-8 md:w-1/2 mb-4 md:mb-0">
                    <img
                    className="w-full h-full object-cover rounded-md"
                    src="/images/podcast.jpg"  // Substitua pelo caminho da sua imagem
                    alt="podast acontecendo com fundo desfocado"
                    />
                </div>
            </div>
    
            <div className='py-8'>
                
                <h2 className='text-3xl text-white flex justify-center pb-8 font-semibold'>Sugestão de atividade</h2>
                
                <div className="grid grid-cols-1 mx-auto max-w-7xl md:grid-cols-3">
                    
                    
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbCircleNumber1 className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-800 text-left pb-4'>Oriente os estudantes a criarem, em duplas, um podcast sobre a importância de administrar o dinheiro. Se necessário, revisitem os capítulos 3 e 4. Peça para que explorem o tema, insistindo no cuidado com gastos excessivos e no risco representado pelas dívidas.</p>
                    </div>
    
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbCircleNumber2  className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-800 text-left pb-4'>Os estudantes podem optar por entrevistar familiares e comerciantes, para ter a noção do que essas pessoas sabem ou pensam sobre esse assunto. Para isso, devem formular perguntas claras e objetivas a respeito do tema, como por exemplo: Como evitar contrair dívidas? Como administrar bem o dinheiro? Contudo, é importante também coletar informações de especialistas no assunto, apresentando um contraponto técnico ao senso comum.</p>
                    </div>
    
                    <div className='bg-white p-6 rounded-lg border border-slate-300 shadow-md m-2 flex flex-col justify-start items-start hover:shadow-lg hover:scale-105 transition-all duration-300'>
                        <div className="flex items-end justify-end">
                            <TbCircleNumber3 className="text-4xl text-primary mb-4" />
                        </div>
                        
                        <p className='text-sm text-slate-800 text-left'>Informe às duplas de estudantes que o podcast deverá ter a duração de, no máximo, cinco minutos. Um aspecto importante, que deverá ser enfatizado para a turma, é que devem ter em mente que o podcast será ouvido por diferentes pessoas, inclusive as que não têm conhecimento dos conceitos de Educação Financeira e Matemática. Trata-se, assim, de um exercício de síntese e de clareza na exposição dos temas tratados.</p>
                    </div>
    
                    
                </div>
            </div>
            <p className='text-white px-8 max-w-7xl mx-auto text-center font-semibold py-8'>Nessa atividade, os alunos atuarão como protagonistas na construção do conhecimento. Oriente-os sobre algumas características de podcasts: eles devem ser coerentes e ter começo, meio e fim. A locução deve fornecer uma ordem lógica para o que está sendo discutido. Elencar exemplos práticos de Educação Financeira e Matemática é uma boa estratégia para explicar e relacionar esses conceitos.</p>
        </div>
        
      );
    };

export default RecPodcast