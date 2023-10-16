import React, { useEffect } from 'react';
import '../app/css/research.css';

export default function Research() {
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

    // Selecione todos os elementos com a classe .writtenOneLineAnswer
    const oneLineTextareas = document.querySelectorAll('.writtenOneLineAnswer');

    // Itere sobre cada elemento com a classe .writtenOneLineAnswer
    oneLineTextareas.forEach((textarea) => {
      // Defina a altura inicial como uma linha
      textarea.style.height = '1em';

      textarea.addEventListener('input', () => {
        // Impede que o textarea cresça além de uma linha
        if (textarea.scrollHeight > textarea.clientHeight) {
          textarea.style.height = textarea.scrollHeight + 'px';
        }
      });
    });
  }, []);

  return (
    <><section className='sectionForm'>

      <div className='firstQuestionContainer'>
        <div className='topLogo'>
          <img src='/images/ZPcomplete_black.png' width={'30%'} />
        </div>

        <div className='containerBtn'>
          <button>Inicio</button>
        </div>

        <h1 className='sectionTitle'>IDEIA</h1>

        <div className='question'>
          <h2 className='questionTitle'>
            1 - O que é a solução? L0? L1? L2? Aplicação? Infraestrutura?
          </h2>
          <textarea className='writtenAnswer' type="text" id='firstAnswerField' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            2 - O que esses caras fazem?
          </h2>
          <textarea className='writtenAnswer' type="text" id='secondAnswerFieldIdea' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            3 - Qual a visão do time para a solução que eles criaram? Qual problema eles acham que resolvem?
          </h2>
          <textarea className='writtenAnswer' type="text" id='thirdAnswerFieldIdea' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            4 - O problema efetivamente existe? Se sim, resolvem isso de maneira inovadora? De que forma?
          </h2>
          <textarea className='writtenAnswer' type="text" id='fourthAnswerFieldIdea' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            5 - Já existe muito player tentando resolver essa mesma questão? Se sim, quem são os principais?
          </h2>
          <textarea className='writtenAnswer' type="text" id='fifthAnswerFieldIdea' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            6 - Em que rede a construção está acontecendo? Se em mais de uma, quais? Faz sentido? Se sim, por quê?
          </h2>
          <textarea className='writtenAnswer' type="text" id='sixthAnswerFieldIdea' />
        </div>
      </div>
    </section>
    
    
    <section className='sectionForm'>

      <div className='containerBtn'>
        <button>Inicio</button>
      </div>

      <h1 className='sectionTitle'>TIME</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - O time é anônimo? Se sim, faz sentido ser? 
          Se não, quem são os participantes mais relevantes?
        </h2>
        <textarea className='writtenAnswer' type="text" id='firstAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - Existe alguém financiando a equipe? Se não, qual o folêgo que possuem? 
          Se sim, quem são eles?
        </h2>
        <textarea className='writtenAnswer' type="text" id='secondAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - O time é qualificado para construir o que quer construir? 
          Se não, pq? Se sim, pq?
        </h2>
        <textarea className='writtenAnswer' type="text" id='thirdAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - À respeito do time e dos financiadores: 
          Eles possuem boas conexões com a galera de cripto e com o setor que estão atacando?
        </h2>
        <textarea className='writtenAnswer' type="text" id='fourthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          5 - O time mantém comunicação constante e de qualidade com sua comunidade e 
          nas redes socias oficiais? Se sim, onde estão os principais updates?
        </h2>
        <textarea className='writtenAnswer' type="text" id='fifthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          6 - Qual o perfil e tamanho da comunidade no Discord e Twitter? 
          São ativos em alguma outra rede social? Se sim, de maneira relevante, ou só pra dizer que tem?
        </h2>
        <textarea className='writtenAnswer' type="text" id='sixthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          7 - Eles parecem possuir uma estratégia de marketing adequada? Inteligente? Comenta a sua opinião.
        </h2>
        <textarea className='writtenAnswer' type="text" id='sixthAnswerField' />
      </div>
  
    </section>

    <section className='sectionForm'>

      <div className='containerBtn'>
        <button>Inicio</button>
      </div>

      <h1 className='sectionTitle'>TECNOLOGIA</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - Existe alguém do time que seja impressionante, tecnicamente falando? 
          Se sim, pq? Quais os feitos? 
        </h2>
        <textarea className='writtenAnswer' type="text" id='firstAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - Já passaram por alguma auditoria? Se sim, qual(s)? 
          Alguma vulnerabilidade grande foi encontrada? Se sim, foi resolvida rapidamente?
        </h2>
        <textarea className='writtenAnswer' type="text" id='secondAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - O protocolo possui algum tipo de seguro contra exploits? 
          Se sim, qual? E bug bounty? Se sim, comunicam isso ativamente?
        </h2>
        <textarea className='writtenAnswer' type="text" id='thirdAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - O desenvolvimento dessa aplicação é regular? 
          Se sim, em atualizações que auxiliarão no alcance da visão do time?
        </h2>
        <textarea className='writtenAnswer' type="text" id='fourthAnswerField' />
      </div>

    </section>

    <section className='sectionForm'>

      <div className='containerBtn'>
        <button>Inicio</button>
      </div>

      <h1 className='sectionTitle'>PREÇO</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - Qual o preço atual? 
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='firstAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - A que preço o token foi lançado na listagem?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='secondAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - Qual foi a ATH do token e quando?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='thirdAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - Qual a capitalização de mercado atual? (preço x circulante)
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          5 - Essa capitalização faz sentido? Se não, pq? Elabore a resposta.
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          6 - Qual a capitalização de mercado fully diluted? (preço x max tokens)
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          7 - Quanto foi a máxima capitalização de mercado e quando?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          8 - Quanto % dos tokens estão em circulação?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          9 - Qual o preço potencial perto do final de um próximo ciclo de alta (metade de 2025) 
          considerando mcap 3x maior que máximo e quantidade de tokens em circulação?
        </h2>
        <div>
          Mcap:<textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
          Tokens em circulação:<textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
          Preço:<textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
        </div>
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          10 - Qual a relação risco/retorno para o preço atual? Justifique a sua resposta.
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='fourthAnswerField' />
      </div>

    </section>

    <section className='sectionForm'>

      <div className='containerBtn'>
        <button>Inicio</button>
      </div>

      <h1 className='sectionTitle'>LIQUIDEZ</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - Em qual rede(s) o token está? 
          São redes relevantes, com atividade, com bons volumes e TVLs?
        </h2>
        <textarea className='writtenAnswer' type="text" id='firstAnswerField' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - Onde o token pode ser comprado? 
          Quais são as principais corretoras centralizadas do Brasil e do exterior? E descentralizadas?
        </h2>
        <textarea className='writtenAnswer' type="text" id='secondAnswerFieldIdea' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - Existe liquidez nessas corretoras? 
          Qual corretora centralizada tem o maior volume de negociação desse token? Em qual par?
        </h2>
        <textarea className='writtenAnswer' type="text" id='thirdAnswerFieldIdea' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - Existe liquidez em corretoras descentralizadas? 
          Se sim, em qual(s) rede(s) está a maior liquidez e em que par/pares?
        </h2>
        <textarea className='writtenAnswer' type="text" id='fourthAnswerFieldIdea' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          5 - Existe algum lugar com posição suficiente 
          para o tamanho da minha posição? Se sim, onde? Por onde eu saio?
        </h2>
        <textarea className='writtenAnswer' type="text" id='fifthAnswerFieldIdea' />
      </div>
      
    </section>

    </>
  );
}
