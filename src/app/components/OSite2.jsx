import React from 'react';

const Card = ({ title, content, icon }) => (
  <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
    <div className="relative p-8 space-y-4">
      {icon && <span role="img" aria-label="icon" className='text-3xl'>{icon}</span>}
      <div className="space-y-2">
        <h5 className="text-xl pb-4 font-semibold text-slate-500 transition">
          {title}
        </h5>
        <p className="text-sm text-gray-600">
          {content}
        </p>
      </div>
    </div>
  </div>
);

const OSite2 = () => {
  const cardsData = [
    { title: 'Parte do quadro geral', content: '2. Quem sabe administrar o dinheiro?', icon: '🌐' },
    { title: 'Capítulos do livro do estudante', content: '3.Um dinheirinho pra chamar de meu. 5. Acabou o dinheiro, o que fazer?', icon: '📚' },
    { title: 'Atividades do projeto', content: 'III - Planejamento / IV - Atividades', icon: '📋' },
    { title: 'Matemática e educação financeira', content: 'Números inteiros: usos, história, ordenação, pontos da reta numérica e operações.', icon: '🧮' },
    { title: 'Recursos didáticos', content: 'Podcast e Padlet.', icon: '🎮  '},
  ];

  return (
    <div className='bg-slate-100'>
      <div className='max-w-7xl mx-auto'>
        <div className="py-16 overflow-hidden">
          <div className="container m-auto px-6 space-y-8 text-slate-700 md:px-12">
            <div>
              <h2 className="mt-4 text-2xl text-slate-900 font-bold md:text-4xl">O Site 2</h2>
            </div>
            <p className='text-slate-700 pb-8'>Vamos ver quais <strong>Etapas do Projeto</strong>, temas de <strong>Matemática</strong> e <strong>ferramentas didáticas</strong> serão tratadas neste site:</p>
            <div className="pb-8 mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {cardsData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} icon={card.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSite2;
