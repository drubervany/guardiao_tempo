import { Injectable } from '@angular/core';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private missions: Mission[] = [
    {
      id: 1,
      title: "Missão 1: O que é Comunidade?",
      icon: "🏘️",
      image: "assets/imagens_livro/IMG-20251126-WA0012.jpg",
      textTitle: "O QUE É COMUNIDADE",
      textContent: `Chamamos de comunidade um conjunto de pessoas que compartilham um espaço, interesses ou características em comum.

Uma comunidade pode ser formada por moradores de um bairro, por exemplo. Você e seus vizinhos formam a comunidade do seu bairro, como você já estudou.

Há também a comunidade escolar. Ela é formada pelos estudantes, funcionários, professores, pais e responsáveis que frequentam a escola.

Nela, as crianças estudam e os adultos trabalham. Mas todos são responsáveis por cuidar desse espaço da comunidade, mantendo-o limpo, organizado e seguro.

EU NO MUNDO

É comum vizinhos se organizarem para criar associações de moradores e amigos do bairro. Assim, as pessoas se unem para cuidar do bairro juntas. Você conhece alguma associação no bairro em que mora? Pesquise com sua família.`,
      showImageIcon: true,
      observationQuestions: [],
      explanation: `Uma comunidade é um grupo de pessoas que vivem juntas, estudam juntas ou compartilham algo em comum.
      Como na sua escola, no seu bairro ou na sua igreja.
      Você e seus vizinhos formam a comunidade do seu bairro!
      Na escola, alunos, professores, funcionários e pais formam a comunidade escolar.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que é uma comunidade?",
          options: [
            { text: "Um lugar vazio", correct: false },
            { text: "Conjunto de pessoas que compartilham um espaço", correct: true },
            { text: "Só uma casa", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Cite o nome de duas comunidades.",
          options: [
            { text: "Bairro", correct: true },
            { text: "Escola", correct: true },
            { text: "Zoológico", correct: false },
            { text: "Floresta", correct: false }
          ],
          allowMultiple: true
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Quais destes espaços fazem parte da comunidade escolar?",
          options: [
            { text: "O pátio da escola", correct: true },
            { text: "A praça do bairro", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Você participa de alguma comunidade? Dê exemplos.",
          options: [
            { text: "Da escola", correct: true },
            { text: "Igreja", correct: true },
            { text: "Shopping", correct: false },
            { text: "Cinema", correct: false }
          ],
          allowMultiple: true
        }
      ],
      successMessage: "Parabéns, Anthony! Você descobriu o que é uma comunidade! 🎉"
    },
    {
      id: 2,
      title: "Missão 2: Quem Trabalha no Bairro?",
      icon: "👷",
      image: "assets/imagens_livro/IMG-20251126-WA0013.jpg",
      textTitle: "O TRABALHO NO BAIRRO",
      textContent: `Geralmente, podemos encontrar nos bairros um comércio, como uma padaria, um mercado ou uma farmácia.

É possível encontrar também a oferta de serviços, como ônibus ou metrô.

Nos bairros, há ainda trabalhadores que colaboram com a comunidade por meio do seu trabalho.

Vamos conhecer alguns desses trabalhadores?

O gari ou varredor de rua faz a limpeza das ruas, deixando-as bem limpas e cuidadas.

Os carteiros fazem a entrega de cartas nas residências.

Nos bairros, é comum ter as feiras livres. Nelas, podemos comprar frutas, legumes e verduras dos feirantes.

Os farmacêuticos trabalham na farmácia. Eles aplicam injeções, fazem curativos e podem indicar alguns remédios.

RACHANDO A CUCA

Ajude as crianças a identificar alguns dos profissionais que trabalham em seu bairro!

MEU AVÔ ESTÁ GRIPADO. VOU À FARMÁCIA FALAR COM O FARMACÊUTICO. ELE DEVE INDICAR UM REMÉDIO PARA GRIPE.

MINHA MÃE PEDIU PARA EU BUSCAR AS CARTAS QUE O CARTEIRO DEIXOU NA CAIXA DE CORREIO.`,
      showImageIcon: true,
      observationQuestions: [
        "Que tipo de trabalhadores você vê?",
        "O que cada um deles está fazendo?",
        "Como eles ajudam a comunidade?"
      ],
      explanation: `No bairro existem pessoas que trabalham para ajudar todo mundo.
      Elas deixam o lugar limpo, entregam cartas, vendem comida e cuidam da nossa saúde.
      O gari limpa as ruas, deixando-as bem limpas e cuidadas.
      Os carteiros entregam cartas nas residências.
      Nas feiras livres, podemos comprar frutas e verduras dos feirantes.
      Os farmacêuticos trabalham na farmácia, aplicando injeções e indicando remédios.`,
      activities: [
        {
          type: "multiple-choice",
          question: "5️⃣ Quem limpa as ruas do bairro?",
          options: [
            { text: "Carteiro", correct: false },
            { text: "Gari", correct: true },
            { text: "Professor", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "6️⃣ Quem entrega cartas nas casas?",
          options: [
            { text: "Gari", correct: false },
            { text: "Carteiro", correct: true },
            { text: "Bombeiro", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "7️⃣ Onde compramos frutas e verduras na feira?",
          options: [
            { text: "Feira do bairro", correct: true },
            { text: "Farmácia", correct: false },
            { text: "Escola", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "8️⃣ Quem trabalha na farmácia e pode indicar remédios?",
          options: [
            { text: "Diretor", correct: false },
            { text: "Farmacêutico", correct: true },
            { text: "Gari", correct: false }
          ]
        }
      ],
      successMessage: "Excelente! Você conheceu os trabalhadores importantes do bairro! 🌟"
    },
    {
      id: 3,
      title: "Missão 3: Histórias para Contar (Passado e Presente)",
      icon: "📰",
      image: "assets/imagens_livro/IMG-20251126-WA0014.jpg",
      textTitle: "HISTÓRIAS PARA CONTAR",
      textContent: `No passado, era muito comum ter bancas de jornal pelos bairros da cidade. Nelas, os jornaleiros vendiam jornais, revistas, gibis e álbuns de figurinhas.

Geralmente, as pessoas compravam o jornal bem cedo para ler notícias de sua cidade, do seu país e do mundo todo!

Havia também muitos jornais de bairro. Eles traziam notícias sobre acontecimentos importantes para a vizinhança.

Banca de jornal na cidade de São Paulo, em 1954.

Banca de jornal na cidade de São Paulo nos dias atuais.

Hoje em dia, o número de bancas de jornais diminuiu. Pois ficou mais fácil ler notícias on-line, com a chegada da internet.

Ainda assim, existem bancas em funcionamento. Mas atualmente as bancas também vendem outros produtos.

TODO MUNDO TEM HISTÓRIA

O jornal

Os jornais divulgam informações importantes. Eles trazem notícias sobre o que está acontecendo no presente.

Os jornalistas são as pessoas que escrevem os textos dos jornais. Eles descobrem um acontecimento. Em seguida, verificam todas as informações sobre o que aconteceu. Então, eles escrevem um texto contando a história e a publicam no jornal.

Em 1934, foi criado o primeiro jornal para crianças no Brasil.

Os jornais infantis traziam atividades divertidas, jogos e histórias em quadrinhos. Por meio deles, também era possível descobrir passeios divertidos que as crianças poderiam fazer.

Muitos jornais para crianças ainda são publicados. Assim, eles continuam trazendo diversão e informação para seus leitores.`,
      showImageIcon: true,
      observationQuestions: [
        "O que você vê nas duas imagens?",
        "Como as bancas de jornal mudaram?",
        "Qual imagem é mais antiga? Como você sabe?"
      ],
      explanation: `Antigamente, as pessoas compravam jornal em bancas na rua.
      Hoje, muita gente lê notícias pelo celular e computador.
      No passado, as bancas de jornal eram muito comuns nos bairros!
      Lá se vendiam jornais, revistas, gibis e álbuns de figurinhas.
      Hoje em dia, o número de bancas diminuiu porque ficou mais fácil ler notícias online com a internet.`,
      activities: [
        {
          type: "multiple-choice",
          question: "9️⃣ O número de bancas de jornal aumentou ou diminuiu com o tempo?",
          options: [
            { text: "Diminuiu", correct: true },
            { text: "Aumentou", correct: false },
            { text: "Ficou igual", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "🔟 Por que as bancas diminuíram?",
          options: [
            { text: "Porque o papel acabou", correct: false },
            { text: "Porque ficou mais fácil ler notícias na internet", correct: true },
            { text: "Porque ninguém gosta de jornal", correct: false }
          ]
        }
      ],
      successMessage: "Ótimo! Você descobriu como as bancas de jornal mudaram com o tempo! 📰✨",
      bonusQuestion: "Você já leu algum jornal infantil? Conte aos colegas o que descobriu por meio desse jornal.",
      bonusCorrectAnswer: "Sim"
    },
    {
      id: 4,
      title: "Missão 4: Profissões que Mudaram",
      icon: "🕯️",
      image: "assets/imagens_livro/IMG-20251126-WA0018.jpg",
      textTitle: "O BAIRRO MUDA E O TRABALHO TAMBÉM",
      textContent: `Os bairros podem mudar ao longo do tempo. O trabalho realizado nesses locais também.

Antigamente, não havia postes de luz nas ruas. As ruas eram iluminadas à noite pelos lampiões. Eles eram abastecidos com óleo pelo acendedor de lampiões. Esse profissional passava pelas ruas acendendo os lampiões à noite e os apagava pela manhã.

Acendedores de lampião na obra Primeiras ocupações da manhã, de Jean-Baptiste Debret, 1826.

Mas, há pouco mais de 100 anos, as ruas passaram a ser iluminadas por energia elétrica. Então, a profissão de acendedor de lampiões deixou de existir.

No passado, também não havia muitos hospitais e postos de saúde. Quando as pessoas ficavam doentes, elas geralmente se consultavam com o farmacêutico do bairro.

No presente, o farmacêutico ainda é muito importante. Mas ele só pode indicar remédios que não precisam de receita médica. Para casos mais graves, as pessoas devem procurar um médico ou hospital.

Botica, Jean-Baptiste Debret, 1823. A botica era o local em que o farmacêutico ou boticário vendia remédios antigamente.

PARA ORGANIZAR O PENSAMENTO

A comunidade é formada por um conjunto de pessoas que compartilham um espaço, interesses ou características em comum.

Há, por exemplo, a comunidade do bairro e a comunidade escolar.

Os profissionais que trabalham no bairro podem colaborar com os moradores por meio do seu trabalho.

Os bairros e os trabalhos exercidos neles podem mudar ao longo do tempo.`,
      showImageIcon: true,
      observationQuestions: [
        "O que você vê nas imagens antigas?",
        "Como eram as ruas no passado?",
        "Como as profissões mudaram?"
      ],
      explanation: `Antigamente existiam profissões que hoje não existem mais.
      As luzes eram acesas por pessoas de verdade, não pela energia elétrica.
      No passado, as ruas não tinham luz elétrica. À noite, as ruas eram iluminadas por lampiões de óleo, que eram acesos por um profissional chamado acendedor de lampiões.
      Há pouco mais de 100 anos, as ruas começaram a ser iluminadas com energia elétrica, e a profissão de acendedor de lampiões desapareceu.
      No passado, havia poucos hospitais. Quando as pessoas ficavam doentes, geralmente consultavam o farmacêutico do bairro.`,
      activities: [
        {
          type: "multiple-choice",
          question: "8️⃣ Cite uma profissão que deixou de existir.",
          options: [
            { text: "Acendedor de lampiões", correct: true },
            { text: "Carteiro", correct: false },
            { text: "Professor", correct: false },
            { text: "Gari", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "9️⃣ Por que a profissão de acendedor de lampiões deixou de existir?",
          options: [
            { text: "Porque ele não quis mais trabalhar", correct: false },
            { text: "Porque há pouco mais de 100 anos as ruas passaram a ser iluminadas por energia elétrica", correct: true },
            { text: "Porque não havia mais lampiões", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "🔟 Geralmente, com quem as pessoas se consultavam quando ficavam doentes no passado?",
          options: [
            { text: "Professor", correct: false },
            { text: "Farmacêutico", correct: true },
            { text: "Gari", correct: false },
            { text: "Carteiro", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "1️⃣1️⃣ No presente, podemos consultar o farmacêutico quando temos um problema grave de saúde?",
          options: [
            { text: "Sim, sempre", correct: false },
            { text: "Não, o farmacêutico só pode indicar remédios que não precisam de receita médica. Para casos graves, é preciso procurar um médico", correct: true },
            { text: "Sim, para todos os problemas", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "1️⃣2️⃣ As profissões podem mudar ao longo do tempo?",
          options: [
            { text: "Sim, as profissões podem mudar ao longo do tempo", correct: true },
            { text: "Não, as profissões nunca mudam", correct: false },
            { text: "Só algumas profissões mudam", correct: false }
          ]
        }
      ],
      successMessage: "Incrível! Você descobriu como as profissões mudaram com o tempo! ⏰✨"
    },
    {
      id: 5,
      title: "Missão 5: Cuidar do Meio Ambiente",
      icon: "🌳",
      image: "assets/imagens_livro/IMG-20251126-WA0020.jpg",
      textTitle: "CUIDAR DO MEIO AMBIENTE",
      textContent: `Existem algumas atividades realizadas pelos seres humanos que poluem o ar. Outras que poluem os rios. A poluição prejudica a qualidade de vida das comunidades.

Por isso, é importante que existam fiscais do meio ambiente. Os fiscais devem vigiar se as pessoas estão poluindo locais como rios, parques e florestas. Precisam fiscalizar, ainda, se os animais estão em perigo.

Fiscal observa desmatamento de árvores em floresta.

Há também outro profissional que ajuda a cuidar do meio ambiente: o ambientalista.`,
      showImageIcon: true,
      observationQuestions: [
        "O que você vê nas imagens?",
        "O que está acontecendo com a natureza?",
        "Como podemos ajudar o meio ambiente?"
      ],
      explanation: `Algumas ações poluem o planeta.
      Por isso existem pessoas que ajudam a cuidar da natureza.
      Os fiscais do meio ambiente monitoram a poluição em rios, parques e florestas, e verificam se os animais estão em perigo.
      Os ambientalistas descobrem onde há destruição de matas e florestas, verificam onde há poluição e ajudam a denunciar problemas ambientais.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣5️⃣ Quem ajuda a cuidar das florestas e dos rios?",
          options: [
            { text: "Carteiro", correct: false },
            { text: "Fiscal do meio ambiente", correct: true },
            { text: "Gari", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "1️⃣6️⃣ Qual dessas coisas polui o meio ambiente?",
          options: [
            { text: "Plantar árvores", correct: false },
            { text: "Jogar lixo nos rios", correct: true },
            { text: "Andar de bicicleta", correct: false }
          ]
        }
      ],
      successMessage: "Maravilhoso! Você aprendeu a importância de cuidar do meio ambiente! 🌍💚"
    },
    {
      id: 6,
      title: "Missão 6: Limpeza e Reciclagem nos Bairros",
      icon: "♻️",
      image: "assets/imagens_livro/IMG-20251126-WA0021.jpg",
      textTitle: "LIMPEZA E RECICLAGEM NOS BAIRROS",
      textContent: `A comunidade deve cuidar bem do seu bairro. Para isso, ela recebe a ajuda de alguns importantes profissionais.

Há o gari, que limpa as ruas dos bairros, como você já conheceu. Há também o coletor de lixo, que recolhe os lixos orgânicos produzidos dentro das nossas casas. Os lixos orgânicos são restos de alimentos, como casca de banana, folhas e lixo de uso pessoal.

Mas há ainda os coletores de material reciclável. Esses trabalhadores passam pelas ruas da cidade recolhendo resíduos que podem ser reutilizados.

Os materiais que podem ser reciclados são, principalmente, papéis, plásticos, vidros e metais.

O resíduo é apanhado pelos coletores. Depois, é enviado aos pontos de reciclagem. Nesse local, o material é separado e, então, vendido para empresas que podem criar novos produtos com esse resíduo.`,
      showImageIcon: true,
      observationQuestions: [
        "Que trabalhadores você vê?",
        "O que eles estão fazendo?",
        "Por que esse trabalho é importante?"
      ],
      explanation: `Para o bairro ficar limpo, várias pessoas trabalham todos os dias.
      Algumas recolhem o lixo das casas e outras recolhem material reciclável.
      O gari limpa as ruas, deixando-as bem limpas e cuidadas.
      O coletor de lixo recolhe o lixo orgânico das casas, como restos de comida, folhas e lixo pessoal.
      Os coletores de material reciclável recolhem lixo que pode ser reutilizado das ruas.
      Materiais recicláveis incluem papel, plástico, vidro e metal.
      O material coletado é enviado para pontos de reciclagem, separado e vendido para empresas que criam novos produtos.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ Quem limpa as ruas do bairro?",
          options: [
            { text: "Carteiro", correct: false },
            { text: "Gari", correct: true },
            { text: "Farmacêutico", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Quem recolhe o lixo das casas?",
          options: [
            { text: "Coletor de lixo", correct: true },
            { text: "Professor", correct: false },
            { text: "Carteiro", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Quais desses materiais podem ser reciclados?",
          options: [
            { text: "Papel", correct: true },
            { text: "Plástico", correct: true },
            { text: "Vidro", correct: true },
            { text: "Casca de banana", correct: false }
          ],
          allowMultiple: true
        },
        {
          type: "multiple-choice",
          question: "4️⃣ O que acontece depois que o lixo reciclável é recolhido?",
          options: [
            { text: "Ele é jogado no rio", correct: false },
            { text: "Ele é levado para a reciclagem", correct: true },
            { text: "Ele desaparece", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "5️⃣ O que pode acontecer se não reciclarmos?",
          options: [
            { text: "Mais poluição", correct: true },
            { text: "Mais limpeza", correct: false },
            { text: "Mais árvores", correct: false }
          ]
        }
      ],
      successMessage: "Perfeito! Você entendeu como funciona a limpeza e reciclagem! ♻️✨"
    },
    {
      id: 7,
      title: "Missão 7: Cuidando do Meio Ambiente",
      icon: "🌲",
      image: "assets/imagens_livro/IMG-20251126-WA0022.jpg",
      textTitle: "CUIDANDO DO MEIO AMBIENTE",
      textContent: `Os ambientalistas descobrem onde há destruição de matas e florestas pela atividade das pessoas. Eles ainda verificam onde há poluição. Quando as ações das pessoas estão prejudicando o meio ambiente, os ambientalistas ajudam a denunciar o problema.

O Brasil tem muitos ambientalistas. Um dos mais importantes de nossa história foi Chico Mendes. Ele defendia a preservação da Floresta Amazônica.`,
      showImageIcon: true,
      observationQuestions: [
        "O que você vê na ilustração?",
        "O que está acontecendo com o rio?",
        "Quem foi Chico Mendes?"
      ],
      explanation: `Algumas pessoas trabalham para proteger a natureza.
      Elas cuidam das florestas, dos rios e ajudam a denunciar quem polui o meio ambiente.
      Os ambientalistas descobrem onde há destruição de matas e florestas pela atividade das pessoas.
      Eles também verificam onde há poluição.
      Quando as ações das pessoas estão prejudicando o meio ambiente, os ambientalistas ajudam a denunciar o problema.
      O Brasil tem muitos ambientalistas. Um dos mais importantes de nossa história foi Chico Mendes.
      Ele defendia a preservação da Floresta Amazônica.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ Quem ajuda a cuidar do meio ambiente?",
          options: [
            { text: "Gari", correct: false },
            { text: "Ambientalista", correct: true },
            { text: "Carteiro", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ O que os ambientalistas tentam proteger?",
          options: [
            { text: "Lojas e shoppings", correct: false },
            { text: "O meio ambiente", correct: true },
            { text: "Carros e motos", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Quem foi Chico Mendes?",
          options: [
            { text: "Um jogador de futebol", correct: false },
            { text: "Um ambientalista", correct: true },
            { text: "Um cantor", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Complete a frase: Os ambientalistas ajudam a proteger:",
          options: [
            { text: "Florestas, rios e natureza", correct: true },
            { text: "Apenas casas", correct: false },
            { text: "Só carros", correct: false }
          ]
        }
      ],
      successMessage: "Fantástico! Você conheceu os ambientalistas e Chico Mendes! 🌳🏆"
    },
    {
      id: 8,
      title: "Missão 8: A Viagem do Lixo Reciclável",
      icon: "♻️",
      image: "assets/caderno_mais_4/IMG-20251126-WA0023.jpg",
      observationQuestions: [
        "O que você vê na ilustração?",
        "O que acontece com o material reciclável?",
        "Como podemos ajudar na reciclagem?"
      ],
      explanation: `O lixo reciclável não é um lixo qualquer.
      Ele pode virar coisas novas quando passa pela cooperativa e pela usina de reciclagem.
      O material reciclável pode ser transformado em novos produtos.
      Os trabalhadores que recolhem material reciclável são importantes para reduzir problemas ambientais.
      Sem a reciclagem, esse material poderia ser jogado nas ruas ou na natureza, causando poluição e problemas ambientais.
      O material reciclável vai para cooperativas e usinas de reciclagem, onde é transformado em novos produtos!`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que pode ser feito com material reciclável?",
          options: [
            { text: "Ele some", correct: false },
            { text: "Ele vira lixo comum", correct: false },
            { text: "Ele pode ser transformado em novos produtos", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Por que os coletores de recicláveis são importantes?",
          options: [
            { text: "Porque só dirigem caminhões", correct: false },
            { text: "Porque ajudam a diminuir os problemas ambientais", correct: true },
            { text: "Porque só trabalham nas cidades", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Onde os materiais recicláveis são separados?",
          options: [
            { text: "Na cooperativa", correct: true },
            { text: "No shopping", correct: false },
            { text: "Na escola", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ O que acontece se a gente não reciclar?",
          options: [
            { text: "O planeta fica mais limpo", correct: false },
            { text: "A poluição aumenta", correct: true },
            { text: "Os rios ficam mais bonitos", correct: false }
          ]
        }
      ],
      successMessage: "Excelente! Você aprendeu sobre a viagem do lixo reciclável! ♻️✨"
    },
    {
      id: 9,
      title: "Missão 9: Onde Comprávamos Antes? Onde Compramos Hoje?",
      icon: "🛒",
      image: "assets/caderno_mais_4/IMG-20251126-WA0024.jpg",
      textTitle: "ONDE COMPRÁVAMOS ANTES? ONDE COMPRAMOS HOJE?",
      textImages: [
        "assets/mission10_images/image old.png",
        "assets/mission10_images/image.png"
      ],
      textImageTitles: [
        "Armazém Antigo",
        "Supermercado Moderno"
      ],
      showImageIcon: true,
      observationQuestions: [
        "O que você vê nas duas fotografias?",
        "Qual é mais antiga? Como você sabe?",
        "Como as pessoas compravam alimentos no passado?",
        "Como compramos hoje?"
      ],
      explanation: `Antigamente as pessoas compravam comida em pequenos armazéns.
      Hoje a gente vai ao supermercado, com muitas prateleiras e produtos.
      No passado, as pessoas compravam alimentos em armazéns, onde os produtos ficavam em sacos grandes e eram pesados em balanças.
      Hoje em dia, compramos em supermercados, onde os produtos estão organizados em prateleiras, embalados e prontos para levar.
      Nos supermercados trabalham vendedores, repositors (que organizam as prateleiras), atendentes e caixas.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ Onde sua família compra alimentos?",
          options: [
            { text: "Mercado", correct: true },
            { text: "Feira", correct: true },
            { text: "Hospital", correct: false },
            { text: "Escola", correct: false }
          ],
          allowMultiple: true
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Qual imagem mostra o lugar antigo?",
          options: [
            { text: "A do armazém", correct: true },
            { text: "A do supermercado", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Qual desses é mais comum hoje em dia?",
          options: [
            { text: "Armazém antigo", correct: false },
            { text: "Supermercado", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Quem trabalha nesses lugares?",
          options: [
            { text: "Vendedor", correct: true },
            { text: "Repositor", correct: true },
            { text: "Caixa", correct: true },
            { text: "Gari", correct: false }
          ],
          allowMultiple: true
        }
      ],
      successMessage: "Ótimo! Você descobriu como o comércio mudou! 🛒📦"
    },
    {
      id: 10,
      title: "Missão 10: O Vendedor de Porta em Porta",
      icon: "🚪",
      image: "assets/caderno_mais_4/IMG-20251126-WA0025.jpg",
      textTitle: "O VENDEDOR DE PORTA EM PORTA",
      textContent: `Antigamente, algumas pessoas iam de casa em casa vendendo produtos. Hoje isso é mais raro por causa das compras na internet.

O vendedor de porta em porta é um profissional que vai de casa em casa oferecendo seus produtos.

No passado, esses vendedores eram muito comuns, especialmente em cidades pequenas e áreas rurais. Eles traziam produtos novos que não eram fáceis de encontrar localmente.

Hoje em dia, essa profissão está quase extinta porque as compras pela internet (e-commerce) aumentaram muito. Agora é mais fácil comprar coisas online do que esperar o vendedor passar de porta em porta.`,
      showImageIcon: true,
      observationQuestions: [
        "O que é um vendedor de porta em porta?",
        "Esses vendedores ainda existem?",
        "Por que essa profissão está desaparecendo?"
      ],
      explanation: `Antigamente, algumas pessoas iam de casa em casa vendendo produtos.
      Hoje isso é mais raro por causa das compras na internet.
      O vendedor de porta em porta é um profissional que vai de casa em casa oferecendo seus produtos.
      No passado, esses vendedores eram muito comuns, especialmente em cidades pequenas e áreas rurais.
      Eles traziam produtos novos que não eram fáceis de encontrar localmente.
      Hoje em dia, essa profissão está quase extinta porque as compras pela internet (e-commerce) aumentaram muito.
      Agora é mais fácil comprar coisas online do que esperar o vendedor passar de porta em porta.`,
      activities: [
        {
          type: "multiple-choice",
          question: "1️⃣ O que é um vendedor de porta em porta?",
          options: [
            { text: "Um vendedor que vai de casa em casa", correct: true },
            { text: "Um motorista de ônibus", correct: false },
            { text: "Um professor", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "2️⃣ Esse tipo de vendedor existe no seu bairro?",
          options: [
            { text: "Sim", correct: true },
            { text: "Não", correct: false }
          ]
        },
        {
          type: "multiple-choice",
          question: "3️⃣ Por que existem menos vendedores assim hoje?",
          options: [
            { text: "Porque ninguém mais compra nada", correct: false },
            { text: "Porque as compras pela internet aumentaram", correct: true }
          ]
        },
        {
          type: "multiple-choice",
          question: "4️⃣ Onde você prefere comprar coisas?",
          options: [
            { text: "Só pela internet", correct: false },
            { text: "Indo ao mercado", correct: true },
            { text: "Só na TV", correct: false }
          ]
        }
      ],
      successMessage: "Perfeito! Você entendeu como a tecnologia mudou o comércio! 🚪💻"
    },
    {
      id: 11,
      title: "Missão 11: Quem Ajuda a Limpar e Cuidar da Cidade?",
      icon: "🔗",
      image: "assets/caderno_mais_4/IMG-20251126-WA0026.jpg",
      textTitle: "QUEM AJUDA A LIMPAR E CUIDAR DA CIDADE?",
      textContent: `Muitas pessoas ajudam a manter a cidade limpa. Algumas trabalham na coleta, outras ajudam na reciclagem e outras protegem a natureza.

Os coletores de material reciclável da prefeitura trabalham com caminhões especiais para recolher materiais que podem ser reutilizados.

Os coletores de lixo orgânico da prefeitura recolhem restos de comida e outros lixos que não podem ser reciclados.

Trabalhadores informais também recolhem material reciclável pelas ruas, ajudando na limpeza.

E muitas pessoas voluntárias recolhem lixo na beira de rios para proteger a água e os animais.`,
      showImageIcon: true,
      observationQuestions: [
        "Que atividades você vê nas imagens?",
        "Como cada atividade ajuda o meio ambiente?",
        "Quem são os trabalhadores que fazem essas atividades?"
      ],
      explanation: `Muitas pessoas ajudam a manter a cidade limpa.
      Algumas trabalham na coleta, outras ajudam na reciclagem e outras protegem a natureza.
      Os coletores de material reciclável da prefeitura trabalham com caminhões especiais para recolher materiais que podem ser reutilizados.
      Os coletores de lixo orgânico da prefeitura recolhem restos de comida e outros lixos que não podem ser reciclados.
      Trabalhadores informais também recolhem material reciclável pelas ruas, ajudando na limpeza.
      E muitas pessoas voluntárias recolhem lixo na beira de rios para proteger a água e os animais.`,
      activities: [
        {
          type: "match",
          question: "🔗 Ligue cada imagem à sua descrição correta:",
          matchPairs: [
            { image: "assets/mission12_images/lixo_rio.png", description: "Pessoa recolhendo lixo na beira do rio", matchId: "river" },
            { image: "assets/mission12_images/coletor_prefeitura.png", description: "Coletor de lixo orgânico da prefeitura", matchId: "organic" },
            { image: "assets/mission12_images/coletor_reciclavel.png", description: "Coletor de material reciclável da prefeitura", matchId: "recyclable" },
            { image: "assets/mission12_images/coletor_rua.png", description: "Trabalhador recolhendo material reciclável pelas ruas", matchId: "street" }
          ]
        }
      ],
      successMessage: "Maravilhoso! Você conheceu todas as formas de cuidar da cidade! 🌍💚"
    },
    {
      id: 12,
      title: "Missão 12: Fiscal do Meio Ambiente",
      icon: "👮‍♂️",
      image: "assets/caderno_mais_4/IMG-20251126-WA0027.jpg",
      textTitle: "FISCAL DO MEIO AMBIENTE",
      textContent: `Agora você é um fiscal do meio ambiente! 🎯

Os fiscais do meio ambiente observam e identificam problemas que prejudicam a natureza.

Alguns problemas ambientais são: lixo no lago, lixo na praia, e poluição no ar (fumaça de fábricas).

Mas também existem lugares lindos e saudáveis, como campos verdes com árvores e rios limpos com água cristalina!

Quando encontramos problemas ambientais, precisamos denunciar e ajudar a resolver.

Podemos ajudar não jogando lixo em lugares errados, reciclando e cuidando da natureza!

Vamos todos ser fiscais do meio ambiente e proteger nosso planeta! 🌍💚`,
      showImageIcon: true,
      observationQuestions: [
        "O que você vê em cada imagem?",
        "Quais imagens mostram problemas ambientais?",
        "Quais imagens mostram um ambiente saudável?",
        "Como podemos resolver os problemas que você encontrou?"
      ],
      explanation: `Agora você é um fiscal do meio ambiente! 🎯
      Os fiscais do meio ambiente observam e identificam problemas que prejudicam a natureza.
      Alguns problemas ambientais são: lixo no lago, lixo na praia, e poluição no ar (fumaça de fábricas).
      Mas também existem lugares lindos e saudáveis, como campos verdes com árvores e rios limpos com água cristalina!
      Quando encontramos problemas ambientais, precisamos denunciar e ajudar a resolver.
      Podemos ajudar não jogando lixo em lugares errados, reciclando e cuidando da natureza!
      Vamos todos ser fiscais do meio ambiente e proteger nosso planeta! 🌍💚`,
      activities: [
        {
          type: "environment-check",
          question: "🔍 Você agora é um fiscal do meio ambiente! Veja se nas imagens há algum problema ambiental:",
          environmentImages: [
            { image: "assets/mission13_images/lago_problema.png", hasProblem: true, problemDescription: "Lixo no lago" },
            { image: "assets/mission13_images/rio_limpo.png", hasProblem: false, problemDescription: "Nascente protegida" },
            { image: "assets/mission13_images/praia_problema.png", hasProblem: true, problemDescription: "Lixo na praia" },
            { image: "assets/mission13_images/ar_problema.png", hasProblem: true, problemDescription: "Poluição no ar" },
            { image: "assets/mission13_images/parque_limpo.png", hasProblem: false, problemDescription: "Ambiente limpo" },
            { image: "assets/mission13_images/mar_limpo.png", hasProblem: false, problemDescription: "Mar limpo" }
          ]
        }
      ],
      successMessage: "Parabéns, Anthony! Você completou TODAS as 12 missões! Você é um verdadeiro herói do meio ambiente! 🎉🌍🏆✨"
    }
  ];

  getMissions(): Mission[] {
    return this.missions;
  }

  getMissionById(id: number): Mission | undefined {
    return this.missions.find(m => m.id === id);
  }

  markMissionAsCompleted(id: number): void {
    const mission = this.missions.find(m => m.id === id);
    if (mission) {
      mission.completed = true;
    }
  }

  isMissionUnlocked(missionId: number): boolean {
    if (missionId === 1) return true;
    const previousMission = this.missions.find(m => m.id === missionId - 1);
    return previousMission?.completed === true;
  }
}
