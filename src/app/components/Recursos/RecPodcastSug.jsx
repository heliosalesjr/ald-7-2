import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";

const RecPodcastSug = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-center items-center">
      <div className="text-center md:w-1/2">
        <h1 className="text-2xl md:text-4xl text-slate-600 font-bold mb-4">Orientações aos educadores</h1>
        <p className="text-slate-600">
          Durante o planejamento do podcast, você pode disponibilizar todos os links sugeridos nesta página para que os alunos pesquisem sozinhos ou em grupos. Se possível, combine com a escola a utilização de computadores, tablets ou a possibilidade dos alunos levarem um aparelho celular para a aula.
        </p>
      </div>

      
      <div className="py-8 md:w-1/2 ml-0 md:ml-8 pb-8 md:pb-0">
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Sugestões de podcasts para inspirar os alunos">
            <p className='py-2'>
                <a href="https://www.google.com/url?q=https%3A%2F%2F37grauspodcast.com%2F&sa=D&sntz=1&usg=AOvVaw38jZ86XYJWY7EkceOj4LCv" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline hover:text-sky-700'>
                        37 Graus:
                    </a>{' '} podcast que conta histórias com um pé na ciência. Sarah Azoubel e Bia Guimarães viajam por aí para decifrar o mundo à nossa volta.</p>
            <p className='py-2'>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.petitjournal.com.br%2F&sa=D&sntz=1&usg=AOvVaw1sQ4tVssPOXZ51cnzgWyzK" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline hover:text-sky-700'>
                            Petit Journal:
                        </a>{' '} doses diárias de Economia e Política Internacional.</p>
            <p className='py-2'>
                <a href="https://www.youtube.com/user/nerdologia" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='underline hover:text-sky-700'>
                                Nerdologia:
                            </a>{' '}
                 uma análise científica da cultura nerd!</p>
            <p className='py-2'>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fpiaui.folha.uol.com.br%2Fradio-piaui%2Fterra-e-redonda%2F&sa=D&sntz=1&usg=AOvVaw0F8muaqi_-E062PPJDd1mw" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline hover:text-sky-700'>
                                    A Terra é Redonda:
                                </a>{' '}
                 podcast de ciência da revista Piauí.</p>
            <p className='py-2'>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.central3.com.br%2Fcategory%2Fpodcasts%2Ffronteiras-invisiveis-do-futebol%2F&sa=D&sntz=1&usg=AOvVaw1P0bOKeYliZ1gx5wu_9tjk" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='underline hover:text-sky-700'>
                                        Fronteiras Invisíveis do Futebol:
                                    </a>{' '}
                                 Filipe Nobre Figueiredo e Matias Pinto se propõem a um exercício tão complexo quanto instigante: contar o futebol através da geopolítica.</p>
            
          </AccordionItem>
          
          <AccordionItem key="2" aria-label="Accordion 2" title="Dicas de como criar e editar podcasts">
          <p className='py-2'>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fcanaltech.com.br%2Fsoftware%2Fcomo-fazer-um-podcast-do-zero-tutorial-completo%2F&sa=D&sntz=1&usg=AOvVaw04jJrOHx4mdkTDxg3JSt2c" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline hover:text-sky-700'>
                                    Canaltech:
                                </a>{' '}
             Como fazer um podcast do zero: tutorial completo.</p>
          <p className='py-2'>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fblog.klickpages.com.br%2Fcomo-fazer-podcast%2F&sa=D&sntz=1&usg=AOvVaw3yYqzh3zMV6vks8bD6CT6d" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline hover:text-sky-700'>
                                    Klickpages:
                                </a>{' '}
            
             Como fazer podcast: o caso da empresa que faturou 7 milhões em 24 horas com essa mídia.</p>
          <p className='py-2'>
            <a href="https://www.google.com/url?q=https%3A%2F%2Fmundopodcast.com.br%2Feditando%2Faudacity%2F&sa=D&sntz=1&usg=AOvVaw2P17z0o5yPA75I2vgKeOkW" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline hover:text-sky-700'>
                                    Mundo Podcast:
                                </a>{' '}
            Editando com Audacity.</p>
          </AccordionItem>
          
          <AccordionItem key="3" aria-label="Accordion 3" title="Sugestões de sites para a criação de podcasts">
            <p className='py-2'>
                <a href="https://www.google.com/url?q=https%3A%2F%2Faudacity.br.uptodown.com%2Fwindows%2Fdownload&sa=D&sntz=1&usg=AOvVaw1hwQMgO5gHu4iqL_Tgzp30" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline hover:text-sky-700'>
                                    Audacity: 
                                </a>{' '}
                programa que permite editar, gravar, importar e exportar diversos formatos diferentes de arquivos de áudio.</p>
            <p className='py-2'>
                <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.spreaker.com%2Fpodcast-recording-software&sa=D&sntz=1&usg=AOvVaw03mNjJv_g2E8vvxHcaK9Ew" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='underline hover:text-sky-700'>
                                    Spreaker Studio:
                                </a>{' '}
                 aplicativo de criação de podcasts que te permite gravar, publicar, distribuir e analisar o seu podcast quando e de onde quiser.</p>

            
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default RecPodcastSug;
