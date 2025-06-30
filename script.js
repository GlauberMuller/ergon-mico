const questions = [
  // Saúde Mental (6)
  { text: "Com que frequência você sente estresse excessivo no ambiente de trabalho?", options: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { text: "Você se sente apoiado(a) psicologicamente pela liderança?", options: ["Totalmente", "Parcialmente", "Pouco", "Nada"] },
  { text: "Como você avaliaria seu nível de motivação no trabalho?", options: ["Muito alto", "Moderado", "Baixo", "Muito baixo"] },
  { text: "Há abertura para conversar sobre saúde mental na sua empresa?", options: ["Total", "Parcial", "Pouca", "Nenhuma"] },
  { text: "Já presenciou ou sofreu assédio psicológico no trabalho?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "Como você lida com cobranças e metas desafiadoras?", options: ["Com tranquilidade", "Com leve estresse", "Com muita ansiedade", "De forma negativa"] },

  // Saúde Física e Ergonomia (6)
  { text: "Seu ambiente de trabalho oferece mobiliário ergonômico adequado?", options: ["Sim, totalmente", "Sim, em parte", "Não muito", "Nada"] },
  { text: "Já sentiu dores corporais causadas pela sua função?", options: ["Nunca", "Raramente", "Frequentemente", "Sempre"] },
  { text: "Sua empresa realiza treinamentos sobre riscos físicos?", options: ["Sim, regularmente", "Ocasionalmente", "Raramente", "Nunca"] },
  { text: "Os EPIs fornecidos são confortáveis e eficazes?", options: ["Sim", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Há pausas regulares durante sua jornada para descanso?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Você sente que há risco de acidente no seu local de trabalho?", options: ["Nenhum", "Baixo", "Médio", "Alto"] },

  // Inclusão e Diversidade (6)
  { text: "Como você percebe a diversidade (raça, gênero, idade) na sua equipe?", options: ["Muito diversa", "Moderadamente", "Pouco", "Nada diversa"] },
  { text: "A empresa promove ações voltadas à inclusão LGBTQIA+?", options: ["Sim", "Algumas vezes", "Raramente", "Nunca"] },
  { text: "Você já presenciou comportamentos preconceituosos no ambiente de trabalho?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "A empresa respeita nomes sociais e pronomes?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Há canais seguros para denúncias de discriminação?", options: ["Sim, bem definidos", "Mais ou menos", "Pouco claros", "Não existem"] },
  { text: "A liderança valoriza e respeita as diferenças individuais?", options: ["Sempre", "Na maioria das vezes", "Raramente", "Nunca"] },

  // Família e Equilíbrio (5)
  { text: "A empresa respeita a necessidade de conciliar trabalho e vida familiar?", options: ["Totalmente", "Moderadamente", "Pouco", "Nada"] },
  { text: "Há flexibilidade de horários em casos familiares importantes?", options: ["Sim", "Às vezes", "Raramente", "Nunca"] },
  { text: "Como você avalia o apoio da empresa em licenças (maternidade, paternidade, adoção)?", options: ["Excelente", "Bom", "Regular", "Ruim"] },
  { text: "Já se sentiu pressionado(a) a trabalhar em horários que afetam sua família?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "Existem ações de apoio a cuidadores (pais, avós etc.)?", options: ["Sim", "Poucas", "Muito poucas", "Nenhuma"] },

  // Identidade e Gênero (4)
  { text: "Você se sente livre para expressar sua identidade de gênero no trabalho?", options: ["Totalmente", "Moderadamente", "Pouco", "Nada"] },
  { text: "A empresa tem políticas claras sobre respeito à diversidade?", options: ["Sim", "Parcialmente", "Muito poucas", "Não tem"] },
  { text: "O RH está preparado para lidar com questões de gênero e sexualidade?", options: ["Totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Já viu ações afirmativas voltadas para grupos historicamente excluídos?", options: ["Sim, várias", "Algumas", "Poucas", "Nenhuma"] },

  // Avaliação de Riscos e NR 01 (8)
  { text: "Você conhece os principais riscos ocupacionais da sua função?", options: ["Sim, totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Sua empresa realiza análise preliminar de riscos?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Os treinamentos da NR 01 são suficientes e atualizados?", options: ["Sim", "Parcialmente", "Pouco", "Não"] },
  { text: "Há clareza nos protocolos em caso de emergência?", options: ["Total", "Moderada", "Pouca", "Nenhuma"] },
  { text: "Como você avalia o plano de ação da CIPA (se houver)?", options: ["Ótimo", "Bom", "Regular", "Ruim"] },
  { text: "Você conhece seus direitos e deveres quanto à segurança do trabalho?", options: ["Totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Há supervisão regular do ambiente físico por parte do SESMT?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Existe um Programa de Gerenciamento de Riscos ativo?", options: ["Sim", "Mais ou menos", "Muito pouco", "Não"] }
];

// ... (restante do código com navegação, exibição e exportação permanece igual)

const questions = [
  // Saúde Mental (6)
  { text: "Com que frequência você sente estresse excessivo no ambiente de trabalho?", options: ["Nunca", "Às vezes", "Frequentemente", "Sempre"] },
  { text: "Você se sente apoiado(a) psicologicamente pela liderança?", options: ["Totalmente", "Parcialmente", "Pouco", "Nada"] },
  { text: "Como você avaliaria seu nível de motivação no trabalho?", options: ["Muito alto", "Moderado", "Baixo", "Muito baixo"] },
  { text: "Há abertura para conversar sobre saúde mental na sua empresa?", options: ["Total", "Parcial", "Pouca", "Nenhuma"] },
  { text: "Já presenciou ou sofreu assédio psicológico no trabalho?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "Como você lida com cobranças e metas desafiadoras?", options: ["Com tranquilidade", "Com leve estresse", "Com muita ansiedade", "De forma negativa"] },

  // Saúde Física e Ergonomia (6)
  { text: "Seu ambiente de trabalho oferece mobiliário ergonômico adequado?", options: ["Sim, totalmente", "Sim, em parte", "Não muito", "Nada"] },
  { text: "Já sentiu dores corporais causadas pela sua função?", options: ["Nunca", "Raramente", "Frequentemente", "Sempre"] },
  { text: "Sua empresa realiza treinamentos sobre riscos físicos?", options: ["Sim, regularmente", "Ocasionalmente", "Raramente", "Nunca"] },
  { text: "Os EPIs fornecidos são confortáveis e eficazes?", options: ["Sim", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Há pausas regulares durante sua jornada para descanso?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Você sente que há risco de acidente no seu local de trabalho?", options: ["Nenhum", "Baixo", "Médio", "Alto"] },

  // Inclusão e Diversidade (6)
  { text: "Como você percebe a diversidade (raça, gênero, idade) na sua equipe?", options: ["Muito diversa", "Moderadamente", "Pouco", "Nada diversa"] },
  { text: "A empresa promove ações voltadas à inclusão LGBTQIA+?", options: ["Sim", "Algumas vezes", "Raramente", "Nunca"] },
  { text: "Você já presenciou comportamentos preconceituosos no ambiente de trabalho?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "A empresa respeita nomes sociais e pronomes?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Há canais seguros para denúncias de discriminação?", options: ["Sim, bem definidos", "Mais ou menos", "Pouco claros", "Não existem"] },
  { text: "A liderança valoriza e respeita as diferenças individuais?", options: ["Sempre", "Na maioria das vezes", "Raramente", "Nunca"] },

  // Família e Equilíbrio (5)
  { text: "A empresa respeita a necessidade de conciliar trabalho e vida familiar?", options: ["Totalmente", "Moderadamente", "Pouco", "Nada"] },
  { text: "Há flexibilidade de horários em casos familiares importantes?", options: ["Sim", "Às vezes", "Raramente", "Nunca"] },
  { text: "Como você avalia o apoio da empresa em licenças (maternidade, paternidade, adoção)?", options: ["Excelente", "Bom", "Regular", "Ruim"] },
  { text: "Já se sentiu pressionado(a) a trabalhar em horários que afetam sua família?", options: ["Nunca", "Raramente", "Às vezes", "Frequentemente"] },
  { text: "Existem ações de apoio a cuidadores (pais, avós etc.)?", options: ["Sim", "Poucas", "Muito poucas", "Nenhuma"] },

  // Identidade e Gênero (4)
  { text: "Você se sente livre para expressar sua identidade de gênero no trabalho?", options: ["Totalmente", "Moderadamente", "Pouco", "Nada"] },
  { text: "A empresa tem políticas claras sobre respeito à diversidade?", options: ["Sim", "Parcialmente", "Muito poucas", "Não tem"] },
  { text: "O RH está preparado para lidar com questões de gênero e sexualidade?", options: ["Totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Já viu ações afirmativas voltadas para grupos historicamente excluídos?", options: ["Sim, várias", "Algumas", "Poucas", "Nenhuma"] },

  // Avaliação de Riscos e NR 01 (8)
  { text: "Você conhece os principais riscos ocupacionais da sua função?", options: ["Sim, totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Sua empresa realiza análise preliminar de riscos?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Os treinamentos da NR 01 são suficientes e atualizados?", options: ["Sim", "Parcialmente", "Pouco", "Não"] },
  { text: "Há clareza nos protocolos em caso de emergência?", options: ["Total", "Moderada", "Pouca", "Nenhuma"] },
  { text: "Como você avalia o plano de ação da CIPA (se houver)?", options: ["Ótimo", "Bom", "Regular", "Ruim"] },
  { text: "Você conhece seus direitos e deveres quanto à segurança do trabalho?", options: ["Totalmente", "Mais ou menos", "Pouco", "Nada"] },
  { text: "Há supervisão regular do ambiente físico por parte do SESMT?", options: ["Sempre", "Às vezes", "Raramente", "Nunca"] },
  { text: "Existe um Programa de Gerenciamento de Riscos ativo?", options: ["Sim", "Mais ou menos", "Muito pouco", "Não"] }
];

// ... (restante do código com navegação, exibição e exportação permanece igual)

