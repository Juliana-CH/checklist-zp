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

      // Adicione o código para calcular a divisão e atualizar 'multipleAnswerPotentialPrice3' aqui
      const updatePrice3 = () => {
        const price1 = parseFloat(document.getElementById('answerField26').value) || 0;
        const price2 = parseFloat(document.getElementById('answerField27').value) || 1; // Para evitar divisão por zero
        const price3 = (price1 / price2).toFixed(2);

        document.getElementById('answerField28').value = price3;
      };

      // Adicione ouvintes de evento para os campos de entrada de price1 e price2
      document.getElementById('answerField26').addEventListener('input', updatePrice3);
      document.getElementById('answerField27').addEventListener('input', updatePrice3);
    });


  return (
    <>
    <header className='headerContainer'>
      <div className='topLogo'>
        <img src='/images/ZPcomplete_black.png' width={'30%'} />
      </div>

      <div className='containerBtn'>
        <button>Inicio</button>
      </div>
    </header>

    <section className='sectionForm'>

        <h1 className='firstSectionTitle'>IDEIA</h1>

        <div className='question'>
          <h2 className='questionTitle'>
            1 - O que é a solução? L0? L1? L2? Aplicação? Infraestrutura?
          </h2>
          <textarea className='writtenAnswer' type="text" id='answerField1' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            2 - O que esses caras fazem?
          </h2>
          <textarea className='writtenAnswer' type="text" id='answerField2' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            3 - Qual a visão do time para a solução que eles criaram? Qual problema eles acham que resolvem?
          </h2>
          <textarea className='writtenAnswer' type="text" id='answerField3' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            4 - O problema efetivamente existe? Se sim, resolvem isso de maneira inovadora? De que forma?
          </h2>
          <textarea className='writtenAnswer' type="text" id='answerField4' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            5 - Já existe muito player tentando resolver essa mesma questão? Se sim, quem são os principais?
          </h2>
          <textarea className='writtenAnswer' type="text" id='answerField5' />
        </div>

        <div className='question'>
          <h2 className='questionTitle'>
            6 - Em que rede a construção está acontecendo? Se em mais de uma, quais? Faz sentido? Se sim, por quê?
          </h2>
          <textarea className='writtenAnswer' type="text" id='answerField6' />
        </div>
      
    </section>
    
    <section className='sectionForm'>

      <h1 className='sectionTitle'>TIME</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - O time é anônimo? Se sim, faz sentido ser? 
          Se não, quem são os participantes mais relevantes?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField7' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - Existe alguém financiando a equipe? Se não, qual o folêgo que possuem? 
          Se sim, quem são eles?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField8' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - O time é qualificado para construir o que quer construir? 
          Se não, pq? Se sim, pq?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField9' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - À respeito do time e dos financiadores: 
          Eles possuem boas conexões com a galera de cripto e com o setor que estão atacando?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField10' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          5 - O time mantém comunicação constante e de qualidade com sua comunidade e 
          nas redes socias oficiais? Se sim, onde estão os principais updates?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField11' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          6 - Qual o perfil e tamanho da comunidade no Discord e Twitter? 
          São ativos em alguma outra rede social? Se sim, de maneira relevante, ou só pra dizer que tem?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField12' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          7 - Eles parecem possuir uma estratégia de marketing adequada? Inteligente? Comenta a sua opinião.
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField13' />
      </div>
  
    </section>

    <section className='sectionForm'>

      <h1 className='sectionTitle'>TECNOLOGIA</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - Existe alguém do time que seja impressionante, tecnicamente falando? 
          Se sim, pq? Quais os feitos? 
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField14' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - Já passaram por alguma auditoria? Se sim, qual(s)? 
          Alguma vulnerabilidade grande foi encontrada? Se sim, foi resolvida rapidamente?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField15' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - O protocolo possui algum tipo de seguro contra exploits? 
          Se sim, qual? E bug bounty? Se sim, comunicam isso ativamente?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField16' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - O desenvolvimento dessa aplicação é regular? 
          Se sim, em atualizações que auxiliarão no alcance da visão do time?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField17' />
      </div>

    </section>

    <section className='sectionForm'>

      <h1 className='sectionTitle'>PREÇO</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - Qual o preço atual? 
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField18' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - A que preço o token foi lançado na listagem?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField19' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - Qual foi a ATH do token e quando?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField20' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - Qual a capitalização de mercado atual? (preço x circulante)
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField21' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          5 - Essa capitalização faz sentido? Se não, pq? Elabore a resposta.
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField22' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          6 - Qual a capitalização de mercado fully diluted? (preço x max tokens)
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField23' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          7 - Quanto foi a máxima capitalização de mercado e quando?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField24' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          8 - Quanto % dos tokens estão em circulação?
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField25' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          9 - Qual o preço potencial perto do final de um próximo ciclo de alta (metade de 2025) 
          considerando mcap 3x maior que máximo e quantidade de tokens em circulação?
        </h2>
        <div className='multipleAnswer'>
          <div className='multipleAnswerPotentialPrice1'>Mcap:<textarea className='writtenOneLineAnswer' type="text" id='answerField26' /></div>
          <div className='multipleAnswerPotentialPrice2'>Tokens em circulação:<textarea className='writtenOneLineAnswer' type="text" id='answerField27' /></div>
          <div className='multipleAnswerPotentialPrice3'>Preço:<textarea className='writtenOneLineAnswer' type="text" id='answerField28' /></div>
        </div>
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          10 - Qual a relação risco/retorno para o preço atual? Justifique a sua resposta.
        </h2>
        <textarea className='writtenOneLineAnswer' type="text" id='answerField29' />
      </div>

    </section>

    <section className='sectionForm'>
      
      <h1 className='sectionTitle'>LIQUIDEZ</h1>

      <div className='question'>
        <h2 className='questionTitle'>
          1 - Em qual rede(s) o token está? 
          São redes relevantes, com atividade, com bons volumes e TVLs?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField30' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          2 - Onde o token pode ser comprado? 
          Quais são as principais corretoras centralizadas do Brasil e do exterior? E descentralizadas?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField31' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          3 - Existe liquidez nessas corretoras? 
          Qual corretora centralizada tem o maior volume de negociação desse token? Em qual par?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField32' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          4 - Existe liquidez em corretoras descentralizadas? 
          Se sim, em qual(s) rede(s) está a maior liquidez e em que par/pares?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField33' />
      </div>

      <div className='question'>
        <h2 className='questionTitle'>
          5 - Existe algum lugar com posição suficiente 
          para o tamanho da minha posição? Se sim, onde? Por onde eu saio?
        </h2>
        <textarea className='writtenAnswer' type="text" id='answerField34' />
      </div>
      
    </section>

    <section className='sectionForm'>

<h1 className='sectionTitle'>TOKEN</h1>

<div className='question'>
  <h2 className='questionTitle'>
    1 - Como está a disitribuição? 
    Quantos endereços possuem o token? Quanto % (+-) dos tokens possuem as 100 maiores carteiras?
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField7' />
</div>

<div className='question'>
  <h2 className='questionTitle'>
    2 - Qual é a situação dos tokens que faltam ser emitidos? Quanto % falta? 
    Como vai ser essa distribuição até o final de 2025? (token.unlocks.app ou messari.com)
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField8' />
</div>

<div className='question'>
  <h2 className='questionTitle'>
    3 - Existe algum mecanismo de queima/deflação? 
    Se sim, como funciona e qual seu impacto no total em circulação?
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField9' />
</div>

<div className='question'>
  <h2 className='questionTitle'>
    4 - Existe mecanismos que tiram tokens de circulação, de fato? Se sim, quais são eles?
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField10' />
</div>

<div className='question'>
  <h2 className='questionTitle'>
    5 - Quais as utilidades do token? São benéficas para a aplicação? Justifique a sua opinião.
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField11' />
</div>

<div className='question'>
  <h2 className='questionTitle'>
    6 - A demanda pelo token tende a aumentar à medida que a aplicação cresce? 
    Qual a relação de uma coisa com a outra? 
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField12' />
</div>

<div className='question'>
  <h2 className='questionTitle'>
    7 - O tokenomics é benéfico aos hodlers? Tem papel de governança? 
    Se sim, a governança é relevante de verdade? Dá direito aos resultados financeiros da aplicação? Se sim, como? 
  </h2>
  <textarea className='writtenAnswer' type="text" id='answerField13' />
</div>

</section>



</>
  );
}
