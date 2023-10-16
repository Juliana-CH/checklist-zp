import React, { useEffect } from 'react';
import '../app/css/time.css';

export default function Time() {
  useEffect(() => {
    // Função para ajustar a altura do textarea
    const autoResizeTextarea = (element) => {
      element.style.height = 'auto'; // Redefine a altura para 'auto' para calcular a altura real
      element.style.height = element.scrollHeight + 'px'; // Define a altura com base no conteúdo
    };

    // Selecione todos os elementos com a classe .writtenAnswer
    const textareas = document.querySelectorAll('.writtenAnswer');

    // Itere sobre cada elemento e adicione um ouvinte de evento
    textareas.forEach((textarea) => {
      textarea.addEventListener('input', () => {
        autoResizeTextarea(textarea);
      });

      // Chame a função inicialmente para definir a altura correta
      autoResizeTextarea(textarea);
    });
  }, []);

  return (
    <section className='ideaForm'>

      <div className='ideaFirstQuestionContainer'>
        <div className='topLogo'>
          <img src='/images/ZPcomplete_black.png' width={'30%'} />
        </div>

        <div className='containerBtn'>
          <button>Inicio</button>
        </div>

        <h1 className='sectionTitle'>IDEIA</h1>

        <div className='ideaQuestion'>
          <h2 className='ideaQuestionTitle'>
            1 - O que é a solução? L0? L1? L2? Aplicação? Infraestrutura?
          </h2>
          <textarea className='writtenAnswer' type="text" id='firstAnswerFieldIdea' />
        </div>

        <div className='ideaQuestion'>
          <h2 className='ideaQuestionTitle'>
            2 - O que esses caras fazem?
          </h2>
          <textarea className='writtenAnswer' type="text" id='secondAnswerFieldIdea' />
        </div>

        <div className='ideaQuestion'>
          <h2 className='ideaQuestionTitle'>
            3 - Qual a visão do time para a solução que eles criaram? Qual problema eles acham que resolvem?
          </h2>
          <textarea className='writtenAnswer' type="text" id='thirdAnswerFieldIdea' />
        </div>

        <div className='ideaQuestion'>
          <h2 className='ideaQuestionTitle'>
            4 - O problema efetivamente existe? Se sim, resolvem isso de maneira inovadora? De que forma?
          </h2>
          <textarea className='writtenAnswer' type="text" id='fourthAnswerFieldIdea' />
        </div>

        <div className='ideaQuestion'>
          <h2 className='ideaQuestionTitle'>
            5 - Já existe muito player tentando resolver essa mesma questão? Se sim, quem são os principais?
          </h2>
          <textarea className='writtenAnswer' type="text" id='fifthAnswerFieldIdea' />
        </div>

        <div className='ideaQuestion'>
          <h2 className='ideaQuestionTitle'>
            6 - Em que rede a construção está acontecendo? Se em mais de uma, quais? Faz sentido? Se sim, por quê?
          </h2>
          <textarea className='writtenAnswer' type="text" id='sixthAnswerFieldIdea' />
        </div>
      </div>
    </section>
  );
}