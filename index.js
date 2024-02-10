const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para design gráfico",
        "Uma linguagem de programação para desenvolvimento web",
        "Um software de edição de imagens",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console",
        "Registrar informações no console para debugging",
        "Criar uma nova variável",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Documento Orientado a Modelos",
        "Modelo de Objeto Dinâmico",
        "Modelo de Objeto de Documento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var = minhaVariavel",
        "const minhaVariavel",
        "variavel = 10",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um objeto de estilo",
        "Um bloco de código reutilizável",
      ],
      correta: 2
    },
    {
      pergunta: "Como se referencia um elemento HTML por sua ID em JavaScript?",
      respostas: [
        "getElementByTag('id')",
        "document.getElementByName('id')",
        "document.getElementById('id')",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma diferença, ambos são iguais",
        "O primeiro compara apenas valores, o segundo compara valores e tipos de dados",
        "O primeiro compara apenas tipos de dados, o segundo compara valores",
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de otimização de código",
        "A elevação de uma declaração de variável ou função para o topo do escopo",
        "Um método de manipulação de eventos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
      respostas: [
        "Determinar o tipo de um objeto",
        "Comparar dois valores",
        "Converter um valor para string",
      ],
      correta: 0
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca de animação",
        "Uma técnica para comunicação assíncrona com o servidor",
        "Um método de estilização de páginas web",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      //dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').name = 'pergunta-' + perguntas.indexOf(item)
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta;
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item);
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }