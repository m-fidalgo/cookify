class ImportRecipes
  RECIPES = [
    {
      title: "Bolo de Chocolate",
      servings: "12 porções",
      category_ids: [1],
      time: 60,
      difficulty: "medium",
      ingredients: ["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1/2 xícara de cacau em pó", "1 colher de chá de fermento em pó", "1 colher de chá de bicarbonato de sódio", "1/2 colher de chá de sal", "2 ovos", "1 xícara de leite", "1/2 xícara de óleo vegetal", "1 colher de chá de extrato de baunilha"],
      preparation_steps: ["Preaqueça o forno a 180°C.", "Unte e enfarinhe uma forma redonda.", "Em uma tigela grande, misture os ingredientes secos.", "Em outra tigela, bata os ovos, o leite, o óleo e a baunilha.", "Despeje os ingredientes líquidos na mistura de ingredientes secos e mexa até ficar homogêneo.", "Despeje a massa na forma preparada e leve ao forno por cerca de 30-35 minutos ou até que um palito inserido no centro saia limpo.", "Deixe esfriar antes de desenformar e servir."]
    },
    {
      title: "Brigadeiro",
      servings: "20 unidades",
      category_ids: [2],
      time: 20,
      difficulty: "easy",
      ingredients: ["1 lata de leite condensado", "2 colheres de sopa de manteiga", "4 colheres de sopa de chocolate em pó", "Granulado para decorar"],
      preparation_steps: ["Em uma panela, misture o leite condensado, a manteiga e o chocolate em pó.", "Leve ao fogo baixo, mexendo sempre, até obter uma consistência firme e desgrudar do fundo da panela.", "Despeje a massa em um prato untado e deixe esfriar completamente.", "Com as mãos untadas com manteiga, faça bolinhas com a massa e passe-as no granulado.", "Coloque as bolinhas em forminhas de papel e sirva."]
    },
    {
      title: "Pudim de Leite Condensado",
      servings: "8 porções",
      category_ids: [2],
      time: 90,
      difficulty: "medium",
      ingredients: ["1 lata de leite condensado", "A mesma medida de leite", "3 ovos", "1 colher de chá de essência de baunilha", "1 xícara de açúcar"],
      preparation_steps: ["Preaqueça o forno a 180°C.", "Em uma panela, derreta o açúcar até obter um caramelo dourado e despeje-o em uma forma de pudim, espalhando bem pelo fundo e pelas laterais.", "No liquidificador, bata o leite condensado, o leite, os ovos e a essência de baunilha até obter uma mistura homogênea.", "Despeje a mistura na forma caramelizada.", "Cubra a forma com papel alumínio e leve ao forno em banho-maria por cerca de 1 hora.", "Após esse tempo, retire o papel alumínio e deixe assar por mais 15 minutos ou até que o pudim esteja firme.", "Deixe esfriar e leve à geladeira por algumas horas antes de desenformar e servir."]
    },
    {
      title: "Torta de Morango",
      servings: "10 porções",
      category_ids: [1, 2],
      time: 45,
      difficulty: "medium",
      ingredients: ["1 pacote de biscoito maisena", "100g de manteiga derretida", "300g de morangos frescos", "1 lata de leite condensado", "2 caixas de creme de leite", "1 envelope de gelatina em pó sem sabor", "1/2 xícara de água"],
      preparation_steps: ["Triture os biscoitos maisena no liquidificador até obter uma farofa.", "Transfira a farofa para uma tigela e misture com a manteiga derretida até formar uma massa.", "Forre o fundo de uma forma de fundo removível com a massa de biscoito, pressionando bem.", "Leve ao forno preaquecido a 180°C por cerca de 10 minutos.", "Enquanto isso, prepare o recheio: no liquidificador, bata os morangos, o leite condensado e o creme de leite até obter um creme homogêneo.", "Hidrate a gelatina na água e dissolva-a em banho-maria ou no micro-ondas.", "Adicione a gelatina dissolvida ao creme de morango e misture bem.", "Despeje o creme sobre a massa de biscoito já assada e leve à geladeira por pelo menos 4 horas.", "Decore com morangos frescos antes de servir."]
    },
    {
      title: "Bolo de Cenoura",
      servings: "8 porções",
      category_ids: [1],
      time: 45,
      difficulty: "easy",
      ingredients: ["3 cenouras médias", "4 ovos", "1 xícara de óleo", "2 xícaras de açúcar", "2 xícaras de farinha de trigo", "1 colher de sopa de fermento em pó", "1 pitada de sal"],
      preparation_steps: ["Preaqueça o forno a 180°C.", "Unte e enfarinhe uma forma média.", "No liquidificador, bata as cenouras, os ovos e o óleo até obter uma mistura homogênea.", "Em uma tigela, misture o açúcar, a farinha, o fermento e o sal.", "Adicione a mistura do liquidificador aos ingredientes secos e mexa até incorporar tudo.", "Despeje a massa na forma preparada e leve ao forno por cerca de 30-40 minutos, ou até que um palito inserido no centro saia limpo.", "Espere esfriar antes de desenformar e servir."]
    },
    {
      title: "Torta de Limão",
      servings: "12 porções",
      category_ids: [1, 2],
      time: 60,
      difficulty: "medium",
      ingredients: ["1 pacote de biscoito maisena", "100g de manteiga derretida", "1 lata de leite condensado", "1 lata de creme de leite", "Suco de 4 limões", "Raspas de limão para decorar"],
      preparation_steps: ["Triture os biscoitos maisena no liquidificador até obter uma farofa.", "Transfira a farofa para uma tigela e misture com a manteiga derretida até formar uma massa.", "Forre o fundo de uma forma de fundo removível com a massa de biscoito, pressionando bem.", "Leve ao forno preaquecido a 180°C por cerca de 10 minutos.", "Enquanto isso, prepare o recheio: em uma tigela, misture o leite condensado, o creme de leite e o suco de limão até obter um creme homogêneo.", "Despeje o creme sobre a massa de biscoito já assada e leve à geladeira por pelo menos 2 horas.", "Decore com raspas de limão antes de servir."]
    },
    {
      title: "Pavê de Chocolate",
      servings: "8 porções",
      category_ids: [2],
      time: 40,
      difficulty: "easy",
      ingredients: ["1 pacote de biscoito champanhe", "1 lata de creme de leite", "1 lata de leite condensado", "2 colheres de sopa de chocolate em pó", "1 barra de chocolate ao leite picada", "1 xícara de leite", "Chocolate granulado para decorar"],
      preparation_steps: ["Em uma panela, misture o leite condensado, o creme de leite e o chocolate em pó.", "Leve ao fogo baixo, mexendo sempre, até obter um creme homogêneo.", "Retire do fogo e reserve.", "Em um prato fundo, coloque o leite e molhe rapidamente os biscoitos champanhe.", "Em um refratário, alterne camadas de biscoitos umedecidos e creme de chocolate, finalizando com uma camada de creme.", "Polvilhe a barra de chocolate picada sobre a última camada de creme.", "Leve à geladeira por pelo menos 4 horas antes de servir.", "Decore com chocolate granulado antes de servir."]
    },
    {
      title: "Pão de Mel",
      servings: "15 unidades",
      category_ids: [2],
      time: 60,
      difficulty: "medium",
      ingredients: ["2 xícaras de farinha de trigo", "1 xícara de mel", "1/2 xícara de açúcar mascavo", "1/2 xícara de leite", "2 colheres de sopa de manteiga", "1 colher de chá de bicarbonato de sódio", "1 colher de chá de canela em pó", "1/2 colher de chá de cravo em pó", "1/2 colher de chá de noz-moscada", "Chocolate meio amargo derretido para banhar"],
      preparation_steps: ["Preaqueça o forno a 180°C.", "Em uma panela, aqueça o mel, o açúcar mascavo, o leite e a manteiga até obter uma mistura homogênea.", "Retire do fogo e deixe esfriar um pouco.", "Adicione os ingredientes secos peneirados e misture bem até obter uma massa homogênea.", "Despeje a massa em uma forma untada e enfarinhada e leve ao forno por cerca de 30-35 minutos, ou até que ao inserir um palito no centro saia limpo.", "Retire do forno e deixe esfriar.", "Corte em quadrados e banhe no chocolate meio amargo derretido.", "Deixe secar sobre papel manteiga antes de servir."]
    },
    {
      title: "Bolo de Milho",
      servings: "10 porções",
      category_ids: [1],
      time: 50,
      difficulty: "easy",
      ingredients: ["1 lata de milho verde escorrido", "1 lata de leite condensado", "4 ovos", "1/2 xícara de óleo", "1 xícara de fubá", "1 colher de sopa de fermento em pó", "Manteiga e fubá para untar e enfarinhar a forma"],
      preparation_steps: ["Preaqueça o forno a 180°C.", "Unte e enfarinhe uma forma média.", "No liquidificador, bata o milho, o leite condensado, os ovos e o óleo até obter uma mistura homogênea.", "Transfira a mistura para uma tigela e adicione o fubá e o fermento, misturando delicadamente até incorporar.", "Despeje a massa na forma preparada e leve ao forno por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo.", "Deixe esfriar antes de desenformar e servir."]
    },
    {
      title: "Torta de Maçã",
      servings: "8 porções",
      category_ids: [1, 2],
      time: 60,
      difficulty: "medium",
      ingredients: ["Massa:", "2 xícaras de farinha de trigo", "1/2 xícara de açúcar", "150g de manteiga gelada cortada em cubos", "1 ovo", "Recheio:", "4 maçãs descascadas e fatiadas", "1/2 xícara de açúcar", "2 colheres de sopa de suco de limão", "1 colher de chá de canela em pó", "1 colher de sopa de amido de milho", "Cobertura:", "2 colheres de sopa de açúcar", "1 colher de chá de canela em pó"],
      preparation_steps: ["Em uma tigela, misture a farinha de trigo e o açúcar.", "Adicione a manteiga gelada e misture com as mãos até obter uma textura de farofa grossa.", "Adicione o ovo e misture até formar uma massa homogênea.", "Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.", "Enquanto a massa descansa, prepare o recheio: em uma tigela, misture as maçãs fatiadas, o açúcar, o suco de limão, a canela em pó e o amido de milho.", "Abra a massa com um rolo em uma superfície enfarinhada até formar um círculo com cerca de 3mm de espessura.", "Forre uma forma de torta com a massa, deixando uma borda sobre as laterais.", "Despeje o recheio de maçã sobre a massa na forma.", "Dobre as bordas da massa sobre as maçãs, formando uma borda rústica.", "Misture o açúcar e a canela em pó da cobertura e polvilhe sobre as maçãs.", "Leve ao forno preaquecido a 180°C por aproximadamente 40-45 minutos, ou até que a massa esteja dourada e crocante.", "Retire do forno e deixe esfriar antes de servir.", "Sirva a torta de maçã morna ou em temperatura ambiente, acompanhada de sorvete de creme ou chantilly, se desejar."]
    },
    {
      title: "Quiche Lorraine",
      servings: "8 porções",
      category_ids: [3],
      time: 60,
      difficulty: "medium",
      ingredients: ["Massa:", "1 e 1/2 xícaras de farinha de trigo", "100g de manteiga gelada cortada em cubos", "1 ovo", "1/2 colher de chá de sal", "Recheio:", "200g de bacon em cubos", "1 cebola picada", "200g de queijo gruyère ralado", "4 ovos", "1 e 1/2 xícaras de creme de leite", "Sal e pimenta a gosto"],
      preparation_steps: ["Para a massa, misture a farinha de trigo com o sal em uma tigela.", "Adicione a manteiga gelada e misture até obter uma textura de farofa grossa.", "Adicione o ovo e misture até formar uma massa homogênea.", "Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.", "Enquanto a massa descansa, prepare o recheio: em uma frigideira, frite o bacon até ficar crocante.", "Adicione a cebola picada e refogue até ficar macia.", "Em uma tigela, bata os ovos com o creme de leite e tempere com sal e pimenta a gosto.", "Abra a massa com um rolo em uma superfície enfarinhada até formar um círculo com cerca de 3mm de espessura.", "Forre uma forma de torta com a massa, deixando uma borda sobre as laterais.", "Espalhe o bacon e a cebola sobre a massa na forma.", "Despeje a mistura de ovos e creme sobre o recheio na forma.", "Polvilhe o queijo gruyère ralado por cima.", "Leve ao forno preaquecido a 180°C por aproximadamente 30-35 minutos, ou até que a torta esteja dourada e firme.", "Retire do forno e deixe esfriar um pouco antes de servir."]
    },
    {
      title: "Torta de Frango",
      servings: "6 porções",
      category_ids: [3],
      time: 60,
      difficulty: "easy",
      ingredients: ["Massa:", "2 xícaras de farinha de trigo", "100g de manteiga gelada cortada em cubos", "1 ovo", "1/2 colher de chá de sal", "Recheio:", "500g de peito de frango cozido e desfiado", "1 cebola picada", "2 dentes de alho picados", "1 cenoura ralada", "1 lata de milho verde escorrido", "1 lata de ervilha escorrida", "1/2 xícara de molho de tomate", "Sal, pimenta e cheiro-verde a gosto", "1/2 xícara de requeijão cremoso"],
      preparation_steps: ["Para a massa, misture a farinha de trigo com o sal em uma tigela.", "Adicione a manteiga gelada e misture até obter uma textura de farofa grossa.", "Adicione o ovo e misture até formar uma massa homogênea.", "Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.", "Enquanto a massa descansa, prepare o recheio: em uma panela, refogue a cebola e o alho até dourar.", "Adicione o frango desfiado, a cenoura ralada, o milho, a ervilha e o molho de tomate.", "Tempere com sal, pimenta e cheiro-verde a gosto e cozinhe por alguns minutos.", "Abra a massa com um rolo em uma superfície enfarinhada até formar um círculo com cerca de 3mm de espessura.", "Forre uma forma de torta com a massa, deixando uma borda sobre as laterais.", "Espalhe o requeijão cremoso sobre a massa na forma.", "Despeje o recheio de frango sobre o requeijão.", "Cubra com o restante da massa, fechando bem as bordas.", "Faça alguns cortes na superfície da torta para permitir a saída de vapor durante o cozimento.", "Leve ao forno preaquecido a 180°C por aproximadamente 30-35 minutos, ou até que a torta esteja dourada e firme.", "Retire do forno e deixe esfriar um pouco antes de servir."]
    },
    {
      title: "Torta de Legumes",
      servings: "8 porções",
      category_ids: [3],
      time: 60,
      difficulty: "easy",
      ingredients: ["Massa:", "2 xícaras de farinha de trigo", "100g de manteiga gelada cortada em cubos", "1 ovo", "1/2 colher de chá de sal", "Recheio:", "2 cenouras picadas", "1 abobrinha picada", "1 pimentão vermelho picado", "1 cebola picada", "2 dentes de alho picados", "1 xícara de brócolis cozido", "1 xícara de queijo mussarela ralado", "1/2 xícara de queijo parmesão ralado", "1/2 xícara de creme de leite", "3 ovos", "Sal, pimenta e noz-moscada a gosto"],
      preparation_steps: ["Para a massa, misture a farinha de trigo com o sal em uma tigela.", "Adicione a manteiga gelada e misture até obter uma textura de farofa grossa.", "Adicione o ovo e misture até formar uma massa homogênea.", "Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.", "Enquanto a massa descansa, prepare o recheio: em uma frigideira, refogue a cebola e o alho até dourar.", "Adicione as cenouras, a abobrinha, o pimentão e o brócolis e refogue por alguns minutos até os legumes ficarem macios.", "Em uma tigela, bata os ovos com o creme de leite e tempere com sal, pimenta e noz-moscada a gosto.", "Abra a massa com um rolo em uma superfície enfarinhada até formar um círculo com cerca de 3mm de espessura.", "Forre uma forma de torta com a massa, deixando uma borda sobre as laterais.", "Espalhe os legumes refogados sobre a massa na forma.", "Polvilhe os queijos ralados sobre os legumes.", "Despeje a mistura de ovos e creme sobre os queijos.", "Leve ao forno preaquecido a 180°C por aproximadamente 30-35 minutos, ou até que a torta esteja dourada e firme.", "Retire do forno e deixe esfriar um pouco antes de servir."]
    },
    {
      title: "Torta de Atum",
      servings: "6 porções",
      category_ids: [3],
      time: 60,
      difficulty: "easy",
      ingredients: ["Massa:", "2 xícaras de farinha de trigo", "100g de manteiga gelada cortada em cubos", "1 ovo", "1/2 colher de chá de sal", "Recheio:", "2 latas de atum sólido escorrido", "1 cebola picada", "2 dentes de alho picados", "1 tomate picado", "1/2 xícara de azeitonas verdes picadas", "1/2 xícara de ervilhas frescas ou congeladas", "1/2 xícara de milho verde escorrido", "1/2 xícara de maionese", "Sal, pimenta e cheiro-verde a gosto"],
      preparation_steps: ["Para a massa, misture a farinha de trigo com o sal em uma tigela.", "Adicione a manteiga gelada e misture até obter uma textura de farofa grossa.", "Adicione o ovo e misture até formar uma massa homogênea.", "Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.", "Enquanto a massa descansa, prepare o recheio: em uma tigela, misture o atum escorrido com a cebola, o alho, o tomate, as azeitonas, as ervilhas e o milho verde.", "Tempere com sal, pimenta e cheiro-verde a gosto.", "Abra a massa com um rolo em uma superfície enfarinhada até formar um círculo com cerca de 3mm de espessura.", "Forre uma forma de torta com a massa, deixando uma borda sobre as laterais.", "Espalhe a maionese sobre a massa na forma.", "Despeje o recheio de atum sobre a maionese.", "Leve ao forno preaquecido a 180°C por aproximadamente 30-35 minutos, ou até que a torta esteja dourada e firme.", "Retire do forno e deixe esfriar um pouco antes de servir."]
    },
    {
      title: "Strogonoff de Carne",
      servings: "4 porções",
      category_ids: [4],
      time: 30,
      difficulty: "easy",
      ingredients: ["500g de carne bovina em tiras", "1 cebola picada", "2 dentes de alho picados", "1 colher de sopa de manteiga", "1 colher de sopa de óleo", "1 lata de creme de leite", "1/2 xícara de molho de tomate", "1/4 de xícara de ketchup", "1/4 de xícara de mostarda", "Sal e pimenta a gosto", "Batata palha para acompanhar"],
      preparation_steps: ["Em uma panela, aqueça a manteiga e o óleo.", "Refogue a cebola e o alho até dourarem.", "Adicione a carne em tiras e doure-a bem.", "Tempere com sal e pimenta a gosto.", "Acrescente o molho de tomate, o ketchup e a mostarda.", "Cozinhe por alguns minutos até o molho engrossar.", "Desligue o fogo e misture o creme de leite.", "Sirva o strogonoff acompanhado de batata palha e arroz branco."]
    },
    {
      title: "Churrasco de Picanha",
      servings: "4 porções",
      category_ids: [4],
      time: 60,
      difficulty: "medium",
      ingredients: ["1 peça de picanha de aproximadamente 1kg", "Sal grosso a gosto"],
      preparation_steps: ["Tempere a picanha com sal grosso em todos os lados.", "Em uma churrasqueira ou grelha bem quente, coloque a picanha com a gordura virada para cima.", "Deixe grelhar por cerca de 20 minutos de cada lado para um ponto médio.", "Retire do fogo e deixe descansar por alguns minutos antes de fatiar.", "Fatie a picanha em fatias finas, no sentido contrário às fibras da carne.", "Sirva o churrasco de picanha acompanhado de farofa, vinagrete e pão de alho."]
    },
    {
      title: "Filé Mignon ao Molho de Mostarda",
      servings: "4 porções",
      category_ids: [4],
      time: 30,
      difficulty: "medium",
      ingredients: ["4 medalhões de filé mignon", "Sal e pimenta a gosto", "2 colheres de sopa de manteiga", "2 colheres de sopa de mostarda dijon", "1/2 xícara de creme de leite"],
      preparation_steps: ["Tempere os medalhões de filé mignon com sal e pimenta a gosto.", "Em uma frigideira, derreta a manteiga em fogo médio-alto.", "Grelhe os medalhões de filé mignon por cerca de 3-4 minutos de cada lado, ou até atingirem o ponto desejado.", "Retire os medalhões da frigideira e reserve.", "Na mesma frigideira, adicione a mostarda dijon e o creme de leite.", "Cozinhe, mexendo sempre, até o molho engrossar ligeiramente.", "Retorne os medalhões à frigideira e banhe-os no molho.", "Sirva o filé mignon ao molho de mostarda acompanhado de batatas cozidas ou purê de batatas."]
    },
    {
      title: "Carne Assada com Batatas",
      servings: "6 porções",
      category_ids: [4],
      time: 120,
      difficulty: "easy",
      ingredients: ["1kg de carne para assar (como maminha, alcatra ou contrafilé)", "4 batatas grandes cortadas em rodelas", "2 cebolas cortadas em rodelas", "4 dentes de alho picados", "1 xícara de vinho tinto seco", "1/2 xícara de água", "2 colheres de sopa de azeite", "Sal, pimenta e temperos a gosto (como alecrim, tomilho e louro)"],
      preparation_steps: ["Tempere a carne com sal, pimenta e os temperos de sua preferência.", "Em uma assadeira, disponha as rodelas de batata e cebola no fundo.", "Coloque a carne sobre as batatas e cebolas.", "Espalhe o alho picado sobre a carne.", "Regue tudo com o vinho tinto e a água.", "Regue a carne com o azeite.", "Cubra a assadeira com papel alumínio e leve ao forno preaquecido a 180°C por cerca de 1 hora.", "Retire o papel alumínio e deixe assar por mais 30 minutos, ou até a carne e as batatas estarem douradas e macias.", "Retire do forno e deixe descansar por alguns minutos antes de fatiar a carne e servir."]
    },
    {
      title: "Risoto de Carne Seca",
      servings: "4 porções",
      category_ids: [4, 10],
      time: 45,
      difficulty: "medium",
      ingredients: ["200g de carne seca dessalgada e desfiada", "1 xícara de arroz arbóreo", "1 cebola picada", "2 dentes de alho picados", "1/2 xícara de vinho branco seco", "4 xícaras de caldo de legumes", "1/2 xícara de queijo parmesão ralado", "2 colheres de sopa de manteiga", "Sal e pimenta a gosto", "Salsinha picada para decorar"],
      preparation_steps: ["Em uma panela, aqueça o caldo de legumes e mantenha-o aquecido em fogo baixo.", "Em outra panela, derreta 1 colher de sopa de manteiga e refogue a cebola e o alho até ficarem macios.", "Adicione a carne seca desfiada e refogue por alguns minutos.", "Acrescente o arroz arbóreo e refogue por mais 1-2 minutos.", "Adicione o vinho branco e mexa até evaporar completamente.", "Comece a adicionar o caldo de legumes aos poucos, mexendo constantemente e esperando o líquido ser absorvido antes de adicionar mais.", "Continue esse processo até o arroz estar cozido al dente, cerca de 18-20 minutos.", "Retire do fogo e adicione o queijo parmesão e a manteiga restante.", "Tempere com sal e pimenta a gosto e misture bem.", "Sirva o risoto de carne seca decorado com salsinha picada."]
    },
    {
      title: "Espaguete à Carbonara",
      servings: "4 porções",
      category_ids: [10],
      time: 30,
      difficulty: "easy",
      ingredients: ["400g de espaguete", "200g de bacon em cubos", "4 ovos", "1 xícara de queijo parmesão ralado", "4 dentes de alho picados", "Pimenta-do-reino moída na hora a gosto", "Salsinha picada para decorar"],
      preparation_steps: ["Cozinhe o espaguete em água fervente com sal até ficar al dente.", "Enquanto isso, em uma frigideira grande, frite o bacon em cubos até ficar crocante.", "Adicione o alho picado e refogue até dourar.", "Em uma tigela, bata os ovos com o queijo parmesão e a pimenta-do-reino.", "Escorra o espaguete e reserve um pouco da água do cozimento.", "Coloque o espaguete na frigideira com o bacon e o alho, misture bem.", "Retire a frigideira do fogo e adicione a mistura de ovos e queijo, mexendo rapidamente para que os ovos cozinhem com o calor residual.", "Se necessário, adicione um pouco da água do cozimento do espaguete para ajudar a formar um molho cremoso.", "Sirva o espaguete à carbonara decorado com salsinha picada."]
    },
    {
      title: "Carne de Panela",
      servings: "6 porções",
      category_ids: [4],
      time: 120,
      difficulty: "easy",
      ingredients: ["1kg de carne para panela (como acém, músculo ou coxão mole)", "2 cebolas cortadas em rodelas", "3 dentes de alho picados", "2 tomates picados", "2 cenouras cortadas em rodelas", "2 batatas cortadas em cubos grandes", "1 pimentão verde cortado em tiras", "1 folha de louro", "1 colher de sopa de extrato de tomate", "2 xícaras de água", "Sal e pimenta a gosto", "Óleo para refogar"],
      preparation_steps: ["Em uma panela de pressão, aqueça um pouco de óleo e doure a carne dos dois lados.", "Acrescente a cebola e o alho e refogue até dourarem.", "Adicione os tomates picados, as cenouras, as batatas, o pimentão, a folha de louro e o extrato de tomate.", "Tempere com sal e pimenta a gosto.", "Cubra tudo com água e tampe a panela de pressão.", "Cozinhe por aproximadamente 1 hora após pegar pressão, ou até que a carne e os legumes estejam macios.", "Retire a pressão da panela, abra-a com cuidado e verifique o tempero.", "Se necessário, cozinhe por mais alguns minutos sem pressão até o molho engrossar.", "Sirva a carne de panela acompanhada de arroz branco e farofa."]
    },
    {
      title: "Frango Assado com Ervas",
      servings: "4 porções",
      category_ids: [5],
      time: 60,
      difficulty: "easy",
      ingredients: ["1 frango inteiro (aproximadamente 1,5 kg)", "4 dentes de alho picados", "Suco de 2 limões", "4 colheres de sopa de azeite", "2 colheres de sopa de ervas frescas picadas (como alecrim, tomilho e sálvia)", "Sal e pimenta a gosto"],
      preparation_steps: ["Preaqueça o forno a 200°C.", "Lave bem o frango e seque-o com papel toalha.", "Em uma tigela, misture o alho picado, o suco de limão, o azeite, as ervas frescas picadas, o sal e a pimenta.", "Esfregue essa mistura por toda a superfície do frango, inclusive por baixo da pele.", "Coloque o frango em uma assadeira e cubra com papel alumínio.", "Asse por aproximadamente 40 minutos.", "Retire o papel alumínio e asse por mais 20 minutos, ou até que o frango esteja dourado e cozido por completo.", "Retire do forno, deixe descansar por alguns minutos e sirva."]
    },
    {
      title: "Frango Xadrez",
      servings: "4 porções",
      category_ids: [5],
      time: 30,
      difficulty: "medium",
      ingredients: ["500g de peito de frango cortado em cubos", "1 pimentão verde cortado em cubos", "1 pimentão vermelho cortado em cubos", "1 cebola cortada em cubos", "1 cenoura cortada em cubos", "1 xícara de brócolis cozido", "1/2 xícara de molho de soja", "2 colheres de sopa de óleo de gergelim", "2 colheres de sopa de amido de milho dissolvido em 1/2 xícara de água", "2 dentes de alho picados", "Sal e pimenta a gosto", "Gergelim torrado para decorar"],
      preparation_steps: ["Em uma frigideira ou wok, aqueça o óleo de gergelim e refogue o alho até dourar.", "Adicione o frango e frite até dourar por todos os lados.", "Acrescente os pimentões, a cebola, a cenoura e o brócolis, e refogue por alguns minutos.", "Tempere com molho de soja, sal e pimenta a gosto.", "Adicione o amido de milho dissolvido em água e mexa até engrossar o molho.", "Cozinhe por mais alguns minutos, mexendo sempre, até que todos os ingredientes estejam bem incorporados e cozidos.", "Retire do fogo, polvilhe com gergelim torrado e sirva quente, acompanhado de arroz branco."]
    },
    {
      title: "Frango à Parmegiana",
      servings: "4 porções",
      category_ids: [5],
      time: 45,
      difficulty: "medium",
      ingredients: ["4 filés de peito de frango", "Sal e pimenta a gosto", "Farinha de trigo para empanar", "2 ovos batidos", "Farinha de rosca para empanar", "Óleo para fritar", "Molho de tomate", "Queijo mussarela ralado", "Queijo parmesão ralado", "Folhas de manjericão fresco"],
      preparation_steps: ["Tempere os filés de frango com sal e pimenta a gosto.", "Passe os filés de frango na farinha de trigo, nos ovos batidos e na farinha de rosca, nessa ordem.", "Aqueça o óleo em uma frigideira e frite os filés empanados até dourarem dos dois lados.", "Escorra em papel toalha para remover o excesso de óleo.", "Em uma assadeira, disponha os filés fritos.", "Cubra cada filé com molho de tomate, queijo mussarela ralado e queijo parmesão ralado.", "Leve ao forno preaquecido a 180°C por cerca de 10 minutos, ou até o queijo derreter e borbulhar.", "Retire do forno, decore com folhas de manjericão fresco e sirva quente."]
    },
    {
      title: "Frango ao Curry",
      servings: "4 porções",
      category_ids: [5],
      time: 40,
      difficulty: "easy",
      ingredients: ["4 filés de peito de frango cortados em cubos", "2 colheres de sopa de óleo de coco", "1 cebola picada", "2 dentes de alho picados", "1 colher de sopa de curry em pó", "1 colher de chá de gengibre fresco ralado", "1/2 colher de chá de cúrcuma", "1/2 colher de chá de cominho", "1 lata de leite de coco", "1 xícara de caldo de galinha", "Sal e pimenta a gosto", "Folhas de coentro fresco para decorar"],
      preparation_steps: ["Em uma panela, aqueça o óleo de coco em fogo médio.", "Refogue a cebola e o alho até ficarem macios.", "Adicione o frango cortado em cubos e cozinhe até dourar por todos os lados.", "Tempere com curry em pó, gengibre fresco ralado, cúrcuma e cominho.", "Misture bem e deixe cozinhar por mais alguns minutos.", "Despeje o leite de coco e o caldo de galinha na panela.", "Deixe ferver e depois reduza o fogo e deixe cozinhar por mais 15-20 minutos, ou até que o frango esteja cozido e o molho tenha engrossado.", "Tempere com sal e pimenta a gosto.", "Sirva o frango ao curry quente, decorado com folhas de coentro fresco, acompanhado de arroz branco ou basmati."]
    },
    {
      title: "Frango ao Molho de Mostarda e Mel",
      servings: "4 porções",
      category_ids: [5],
      time: 40,
      difficulty: "easy",
      ingredients: ["4 filés de peito de frango", "Sal e pimenta a gosto", "2 colheres de sopa de azeite", "2 colheres de sopa de mostarda", "2 colheres de sopa de mel", "1/2 xícara de caldo de galinha", "Suco de 1 limão", "Salsinha picada para decorar"],
      preparation_steps: ["Tempere os filés de frango com sal e pimenta a gosto.", "Em uma frigideira grande, aqueça o azeite em fogo médio-alto.", "Grelhe os filés de frango por cerca de 5-6 minutos de cada lado, ou até que estejam dourados e cozidos por completo.", "Retire os filés de frango da frigideira e reserve.", "Na mesma frigideira, adicione a mostarda, o mel, o caldo de galinha e o suco de limão.", "Cozinhe, mexendo sempre, até o molho engrossar ligeiramente.", "Retorne os filés de frango à frigideira e banhe-os no molho.", "Cozinhe por mais alguns minutos, mexendo ocasionalmente, até que o frango esteja bem revestido com o molho.", "Sirva o frango ao molho de mostarda e mel quente, decorado com salsinha picada, acompanhado de arroz ou purê de batatas."]
    },
    {
      title: "Frango à Cordon Bleu",
      servings: "4 porções",
      category_ids: [5],
      time: 45,
      difficulty: "medium",
      ingredients: ["4 filés de peito de frango", "Sal e pimenta a gosto", "4 fatias de presunto", "4 fatias de queijo suíço", "Farinha de trigo para empanar", "2 ovos batidos", "Farinha de rosca para empanar", "Óleo para fritar"],
      preparation_steps: ["Tempere os filés de frango com sal e pimenta a gosto.", "Coloque uma fatia de presunto e uma fatia de queijo sobre cada filé de frango.", "Dobre os filés ao meio, cobrindo o presunto e o queijo.", "Passe os filés recheados na farinha de trigo, nos ovos batidos e na farinha de rosca, nessa ordem.", "Aqueça o óleo em uma frigideira e frite os filés empanados até dourarem dos dois lados.", "Escorra em papel toalha para remover o excesso de óleo.", "Sirva o frango à cordon bleu quente, acompanhado de salada verde e arroz branco."]
    },
    {
      title: "Frango Tikka Masala",
      servings: "4 porções",
      category_ids: [5],
      time: 60,
      difficulty: "medium",
      ingredients: ["500g de peito de frango cortado em cubos", "Sal e pimenta a gosto", "2 colheres de sopa de óleo vegetal", "1 cebola picada", "3 dentes de alho picados", "1 colher de chá de gengibre fresco ralado", "1 colher de sopa de curry em pó", "1 colher de chá de páprica", "1 colher de chá de cominho", "1/2 colher de chá de cúrcuma", "1 lata de tomate pelado", "1/2 xícara de creme de leite", "Salsinha picada para decorar", "Arroz branco cozido para servir"],
      preparation_steps: ["Tempere os cubos de frango com sal e pimenta a gosto.", "Em uma frigideira grande, aqueça o óleo em fogo médio-alto.", "Adicione a cebola picada e refogue até ficar macia.", "Acrescente o alho picado e o gengibre ralado, e refogue por mais alguns minutos.", "Adicione o frango temperado e cozinhe até dourar por todos os lados.", "Tempere o frango com curry em pó, páprica, cominho e cúrcuma.", "Misture bem e cozinhe por mais alguns minutos.", "Despeje o tomate pelado com seu suco na frigideira e misture.", "Reduza o fogo e deixe cozinhar por cerca de 20-25 minutos, mexendo ocasionalmente, até que o frango esteja cozido e o molho tenha engrossado.", "Adicione o creme de leite e misture bem.", "Cozinhe por mais alguns minutos, mexendo sempre, até o molho aquecer completamente.", "Sirva o frango tikka masala quente, decorado com salsinha picada, acompanhado de arroz branco cozido."]
    },
    {
      title: "Salada de Frango com Abacate",
      servings: "4 porções",
      category_ids: [5, 7],
      time: 20,
      difficulty: "easy",
      ingredients: ["2 peitos de frango cozidos e desfiados", "2 abacates maduros, cortados em cubos", "1/4 de xícara de cebola roxa picada", "Suco de 1 limão", "2 colheres de sopa de azeite de oliva", "Sal e pimenta a gosto", "Folhas de alface para servir", "Sementes de gergelim torradas para decorar"],
      preparation_steps: ["Em uma tigela grande, misture o frango desfiado, os cubos de abacate, a cebola roxa picada, o suco de limão e o azeite de oliva.", "Tempere com sal e pimenta a gosto e misture bem.", "Disponha as folhas de alface em pratos de servir.", "Coloque a salada de frango com abacate sobre as folhas de alface.", "Decore com sementes de gergelim torradas.", "Sirva a salada de frango com abacate imediatamente."]
    },
    {
      title: "Salmão Grelhado com Molho de Limão",
      servings: "4 porções",
      category_ids: [6],
      time: 30,
      difficulty: "easy",
      ingredients: ["4 filés de salmão", "Sal e pimenta a gosto", "Azeite de oliva", "Suco de 2 limões", "Raspas de 1 limão", "2 colheres de sopa de mel", "2 colheres de sopa de manteiga derretida", "2 dentes de alho picados", "Salsinha picada para decorar"],
      preparation_steps: ["Tempere os filés de salmão com sal e pimenta a gosto.", "Aqueça um pouco de azeite de oliva em uma frigideira ou grelha.", "Grelhe os filés de salmão por cerca de 4-5 minutos de cada lado, ou até que estejam cozidos conforme desejado.", "Enquanto isso, prepare o molho de limão: em uma tigela pequena, misture o suco de limão, as raspas de limão, o mel, a manteiga derretida e o alho picado.", "Retire os filés de salmão da frigideira ou grelha e transfira para um prato de servir.", "Regue os filés de salmão grelhados com o molho de limão.", "Decore com salsinha picada e sirva imediatamente."]
    },
    {
      title: "Risoto de Camarão",
      servings: "4 porções",
      category_ids: [6, 10],
      time: 40,
      difficulty: "medium",
      ingredients: ["300g de camarão limpo", "Sal e pimenta a gosto", "1 colher de sopa de azeite de oliva", "1 cebola picada", "2 dentes de alho picados", "1 xícara de arroz arbóreo", "1/2 xícara de vinho branco seco", "4 xícaras de caldo de legumes", "1/2 xícara de queijo parmesão ralado", "2 colheres de sopa de manteiga", "Salsinha picada para decorar"],
      preparation_steps: ["Tempere os camarões com sal e pimenta a gosto.", "Em uma panela, aqueça o azeite de oliva em fogo médio.", "Refogue a cebola picada e o alho picado até ficarem macios.", "Adicione o arroz arbóreo e refogue por mais alguns minutos.", "Deglace a panela com o vinho branco, mexendo até evaporar completamente.", "Adicione o caldo de legumes aos poucos, mexendo sempre e esperando o líquido ser absorvido antes de adicionar mais.", "Continue esse processo até o arroz estar cozido al dente, cerca de 18-20 minutos.", "Enquanto isso, em outra panela, aqueça um pouco de azeite de oliva e grelhe os camarões até ficarem rosados e cozidos.", "Quando o risoto estiver pronto, retire do fogo e misture o queijo parmesão ralado e a manteiga.", "Acrescente os camarões grelhados ao risoto e misture delicadamente.", "Sirva o risoto de camarão decorado com salsinha picada."]
    },
    {
      title: "Moqueca de Peixe",
      servings: "4 porções",
      category_ids: [6],
      time: 60,
      difficulty: "medium",
      ingredients: ["500g de filé de peixe (pode ser robalo, linguado, tilápia, etc.)", "Suco de 2 limões", "Sal e pimenta a gosto", "2 colheres de sopa de azeite de dendê", "1 cebola cortada em rodelas", "2 dentes de alho picados", "1 pimentão verde cortado em tiras", "1 pimentão vermelho cortado em tiras", "1 tomate cortado em rodelas", "1/2 maço de coentro picado", "1/2 maço de cebolinha verde picada", "200ml de leite de coco", "200ml de caldo de peixe"],
      preparation_steps: ["Tempere os filés de peixe com suco de limão, sal e pimenta a gosto.", "Em uma panela grande, aqueça o azeite de dendê em fogo médio-alto.", "Refogue a cebola e o alho até dourarem.", "Adicione os pimentões cortados em tiras e refogue por mais alguns minutos.", "Disponha as rodelas de tomate sobre os legumes na panela.", "Coloque os filés de peixe temperados sobre os tomates.", "Salpique o coentro e a cebolinha picados sobre o peixe.", "Despeje o leite de coco e o caldo de peixe na panela.", "Tampe a panela e cozinhe em fogo baixo por aproximadamente 20-25 minutos, ou até que o peixe esteja cozido e os legumes estejam macios.", "Sirva a moqueca de peixe acompanhada de arroz branco e farofa."]
    },
    {
      title: "Ceviche Peruano",
      servings: "4 porções",
      category_ids: [6, 8],
      time: 30,
      difficulty: "easy",
      ingredients: ["500g de filé de peixe branco (como robalo ou linguado), cortado em cubos pequenos", "Suco de 8 limões", "1 cebola roxa cortada em fatias finas", "2 pimentas dedo-de-moça sem sementes picadas", "1 ramo de coentro picado", "Sal e pimenta-do-reino a gosto", "2 batatas-doces cozidas e cortadas em rodelas", "Milho cozido para acompanhar", "Alface crespa para decorar"],
      preparation_steps: ["Coloque os cubos de peixe em uma tigela e cubra com suco de limão.", "Deixe marinar na geladeira por cerca de 20 minutos, ou até que o peixe esteja opaco.", "Enquanto isso, em outra tigela, misture a cebola roxa fatiada, as pimentas picadas e o coentro picado.", "Tempere com sal e pimenta-do-reino a gosto.", "Retire o peixe da geladeira e misture com os vegetais temperados.", "Sirva o ceviche peruano acompanhado de rodelas de batata-doce, milho cozido e folhas de alface crespa."]
    },
    {
      title: "Salada Caprese",
      servings: "4 porções",
      category_ids: [7, 16],
      time: 15,
      difficulty: "easy",
      ingredients: ["2 tomates grandes", "250g de queijo mussarela de búfala", "Folhas de manjericão fresco", "Azeite de oliva extra virgem", "Vinagre balsâmico", "Sal e pimenta a gosto"],
      preparation_steps: ["Corte os tomates e o queijo mussarela em rodelas.", "Em um prato grande, intercale as rodelas de tomate, queijo mussarela e folhas de manjericão.", "Regue a salada com azeite de oliva e vinagre balsâmico a gosto.", "Tempere com sal e pimenta a gosto.", "Sirva a Salada Caprese imediatamente."]
    },
    {
      title: "Salada Caesar",
      servings: "4 porções",
      category_ids: [7, 16],
      time: 20,
      difficulty: "easy",
      ingredients: ["1 alface romana", "1 xícara de croutons", "1/4 de xícara de queijo parmesão ralado", "2 filés de anchova picados (opcional)", "2 colheres de sopa de maionese", "1 colher de sopa de mostarda Dijon", "1 dente de alho picado", "Suco de 1 limão", "Azeite de oliva extra virgem", "Sal e pimenta a gosto"],
      preparation_steps: ["Lave e rasgue as folhas de alface romana e coloque-as em uma tigela grande.", "Adicione os croutons e o queijo parmesão ralado sobre as folhas de alface.", "Em uma tigela pequena, misture os filés de anchova picados (se estiver usando), maionese, mostarda Dijon, alho picado e suco de limão.", "Tempere com sal e pimenta a gosto.", "Regue a salada com a mistura de molho Caesar e azeite de oliva a gosto.", "Misture bem para garantir que todos os ingredientes estejam cobertos pelo molho.", "Sirva a Salada Caesar imediatamente."]
    },
    {
      title: "Salada de Quinoa com Legumes",
      servings: "4 porções",
      category_ids: [7, 13, 14, 15, 16],
      time: 30,
      difficulty: "easy",
      ingredients: ["1 xícara de quinoa", "2 xícaras de água", "1 pepino cortado em cubos", "1 pimentão vermelho cortado em tiras", "1 cenoura ralada", "1 abacate cortado em cubos", "1/4 de xícara de coentro picado", "Suco de 1 limão", "Azeite de oliva extra virgem", "Sal e pimenta a gosto"],
      preparation_steps: ["Enxágue bem a quinoa em água corrente.", "Em uma panela, leve a quinoa e a água para ferver.", "Reduza o fogo, tampe e cozinhe por cerca de 15 minutos, ou até que a quinoa esteja macia e toda a água tenha sido absorvida.", "Deixe esfriar.", "Em uma tigela grande, misture a quinoa cozida, o pepino cortado em cubos, o pimentão vermelho cortado em tiras, a cenoura ralada, o abacate cortado em cubos e o coentro picado.", "Tempere com suco de limão, azeite de oliva, sal e pimenta a gosto.", "Misture bem para combinar todos os ingredientes e garantir que a quinoa esteja bem temperada.", "Sirva a Salada de Quinoa com Legumes imediatamente ou leve à geladeira para esfriar antes de servir."]
    },
    {
      title: "Salada de Frutas Tropicais",
      servings: "4 porções",
      category_ids: [7, 13, 14, 15, 16],
      time: 15,
      difficulty: "easy",
      ingredients: ["1 abacaxi cortado em cubos", "2 mangas cortadas em cubos", "2 kiwis cortados em rodelas", "1/2 melão cortado em cubos", "1/2 xícara de hortelã fresca picada", "Suco de 1 limão", "Mel a gosto (opcional)"],
      preparation_steps: ["Em uma tigela grande, misture o abacaxi cortado em cubos, as mangas cortadas em cubos, os kiwis cortados em rodelas, o melão cortado em cubos e a hortelã fresca picada.", "Regue com suco de limão e mel a gosto, se desejar.", "Misture bem para combinar todos os sabores.", "Sirva a Salada de Frutas Tropicais imediatamente ou leve à geladeira para esfriar antes de servir."]
    },
    {
      title: "Arroz de Coco",
      servings: "4 porções",
      category_ids: [8, 16],
      time: 25,
      difficulty: "easy",
      ingredients: ["1 xícara de arroz branco", "1 xícara de leite de coco", "1 xícara de água", "Sal a gosto", "2 colheres de sopa de coco ralado"],
      preparation_steps: ["Em uma panela, coloque o arroz, o leite de coco, a água e o sal.", "Mexa bem e leve ao fogo médio.", "Quando começar a ferver, abaixe o fogo, tampe a panela e deixe cozinhar por cerca de 15-20 minutos, ou até que o arroz esteja macio e todo o líquido tenha sido absorvido.", "Retire do fogo e deixe descansar por alguns minutos.", "Solte o arroz com um garfo e transfira para uma travessa de servir.", "Polvilhe o coco ralado por cima e sirva quente."]
    },
    {
      title: "Batata Gratinada",
      servings: "4 porções",
      category_ids: [8, 16],
      time: 60,
      difficulty: "medium",
      ingredients: ["4 batatas grandes", "2 xícaras de creme de leite", "1 xícara de queijo parmesão ralado", "2 dentes de alho picados", "Sal e pimenta a gosto", "Noz-moscada a gosto"],
      preparation_steps: ["Preaqueça o forno a 200°C.", "Descasque e corte as batatas em rodelas finas.", "Em uma tigela, misture o creme de leite, metade do queijo parmesão ralado, o alho picado, o sal, a pimenta e a noz-moscada.", "Em um refratário untado com manteiga, faça uma camada de batatas, despeje parte da mistura de creme de leite por cima.", "Repita as camadas até acabarem os ingredientes, terminando com a mistura de creme de leite.", "Polvilhe o queijo parmesão restante por cima.", "Cubra com papel alumínio e leve ao forno por cerca de 40 minutos.", "Retire o papel alumínio e deixe gratinar por mais 15-20 minutos, ou até dourar.", "Retire do forno, deixe descansar por alguns minutos e sirva quente."]
    },
    {
      title: "Farofa de Banana",
      servings: "4 porções",
      category_ids: [8, 15, 16],
      time: 20,
      difficulty: "easy",
      ingredients: ["2 bananas maduras", "2 xícaras de farinha de mandioca", "2 colheres de sopa de manteiga", "1 cebola picada", "2 dentes de alho picados", "Salsinha picada a gosto", "Sal e pimenta a gosto"],
      preparation_steps: ["Descasque as bananas e corte-as em rodelas finas.", "Em uma frigideira, derreta a manteiga em fogo médio.", "Adicione a cebola picada e o alho picado, e refogue até dourarem.", "Acrescente as rodelas de banana e deixe dourar levemente.", "Adicione a farinha de mandioca, a salsinha picada, o sal e a pimenta.", "Mexa bem até que todos os ingredientes estejam incorporados e a farofa esteja crocante.", "Retire do fogo e transfira para uma travessa de servir.", "Sirva quente como acompanhamento."]
    },
    {
      title: "Legumes Assados",
      servings: "4 porções",
      category_ids: [8, 13, 14, 15, 16],
      time: 30,
      difficulty: "easy",
      ingredients: ["2 cenouras", "2 batatas", "2 abobrinhas", "1 pimentão vermelho", "1 pimentão amarelo", "1 cebola roxa", "4 dentes de alho", "Azeite de oliva", "Sal e pimenta a gosto", "Ervas frescas (como alecrim, tomilho e manjericão)"],
      preparation_steps: ["Preaqueça o forno a 200°C.", "Descasque e corte as cenouras e as batatas em rodelas grossas.", "Corte as abobrinhas em rodelas grossas.", "Corte os pimentões em tiras.", "Corte a cebola roxa em gomos.", "Descasque os dentes de alho.", "Em uma assadeira grande, disponha todos os legumes e os dentes de alho.", "Regue com azeite de oliva e tempere com sal, pimenta e as ervas frescas picadas.", "Misture bem para garantir que os legumes estejam bem temperados.", "Leve ao forno preaquecido por cerca de 25-30 minutos, ou até que os legumes estejam macios e dourados.", "Retire do forno e sirva quente como acompanhamento."]
    },
    {
      title: "Sopa de Legumes",
      servings: "4 porções",
      category_ids: [9, 13, 14, 15, 16],
      time: 40,
      difficulty: "easy",
      ingredients: ["2 cenouras", "2 batatas", "2 talos de aipo", "1 cebola", "2 dentes de alho", "1 abobrinha", "1 xícara de ervilhas frescas ou congeladas", "1 tomate", "6 xícaras de caldo de legumes", "Sal e pimenta a gosto", "Azeite de oliva", "Salsinha picada para decorar"],
      preparation_steps: ["Descasque e corte os legumes em cubos pequenos.", "Em uma panela grande, aqueça um pouco de azeite de oliva em fogo médio.", "Refogue a cebola e o alho até ficarem macios e levemente dourados.", "Adicione as cenouras, as batatas, o aipo, a abobrinha e as ervilhas à panela.", "Refogue por alguns minutos, mexendo ocasionalmente.", "Despeje o caldo de legumes na panela e deixe ferver.", "Reduza o fogo e deixe a sopa cozinhar por cerca de 20-25 minutos, ou até que os legumes estejam macios.", "Tempere com sal e pimenta a gosto.", "Sirva a sopa de legumes quente, decorada com salsinha picada."]
    },
    {
      title: "Sopa de Tomate",
      servings: "4 porções",
      category_ids: [9, 13, 14, 15, 16],
      time: 30,
      difficulty: "easy",
      ingredients: ["1 kg de tomates maduros", "2 cenouras", "1 cebola", "2 dentes de alho", "4 xícaras de caldo de legumes", "2 colheres de sopa de azeite de oliva", "Sal e pimenta a gosto", "Manjericão fresco para decorar"],
      preparation_steps: ["Corte os tomates em pedaços grandes.", "Descasque e corte as cenouras em rodelas grossas.", "Pique finamente a cebola e o alho.", "Em uma panela grande, aqueça o azeite de oliva em fogo médio.", "Refogue a cebola e o alho até ficarem macios e levemente dourados.", "Adicione os tomates e as cenouras à panela e refogue por alguns minutos.", "Despeje o caldo de legumes na panela e deixe ferver.", "Reduza o fogo e deixe a sopa cozinhar por cerca de 15-20 minutos, ou até que os legumes estejam macios.", "Tempere com sal e pimenta a gosto.", "Utilize um liquidificador ou mixer de mão para triturar a sopa até obter uma consistência cremosa.", "Sirva a sopa de tomate quente, decorada com folhas de manjericão fresco."]
    },
    {
      title: "Creme de Abóbora",
      servings: "4 porções",
      category_ids: [9, 13, 16],
      time: 45,
      difficulty: "easy",
      ingredients: ["1 abóbora pequena", "1 cebola", "2 dentes de alho", "4 xícaras de caldo de legumes", "1/2 xícara de creme de leite", "2 colheres de sopa de manteiga", "Sal e pimenta a gosto", "Noz-moscada a gosto", "Salsinha picada para decorar"],
      preparation_steps: ["Descasque, retire as sementes e corte a abóbora em cubos grandes.", "Pique finamente a cebola e o alho.", "Em uma panela grande, derreta a manteiga em fogo médio.", "Refogue a cebola e o alho até ficarem macios e levemente dourados.", "Adicione os cubos de abóbora à panela e refogue por alguns minutos.", "Despeje o caldo de legumes na panela e deixe ferver.", "Reduza o fogo e deixe a sopa cozinhar por cerca de 20-25 minutos, ou até que a abóbora esteja macia.", "Utilize um liquidificador ou mixer de mão para triturar a sopa até obter uma consistência cremosa.", "Adicione o creme de leite à sopa e misture bem.", "Tempere com sal, pimenta e noz-moscada a gosto.", "Sirva o creme de abóbora quente, decorado com salsinha picada."]
    },
    {
      title: "Sopa de Abóbora",
      servings: "4 porções",
      category_ids: [9, 13, 14, 15, 16],
      time: 40,
      difficulty: "easy",
      ingredients: ["1 abóbora média (aprox. 1,2 kg), descascada e cortada em cubos", "1 cebola grande, picada", "2 dentes de alho, picados", "2 batatas médias, descascadas e cortadas em cubos", "1 cenoura grande, descascada e cortada em rodelas", "4 xícaras de caldo de legumes", "1 colher de chá de curry em pó", "1/2 colher de chá de páprica", "Sal e pimenta a gosto", "Azeite de oliva", "Salsinha picada para decorar"],
      preparation_steps: ["Em uma panela grande, aqueça um pouco de azeite de oliva em fogo médio.", "Adicione a cebola picada e o alho picado, e refogue até ficarem macios.", "Acrescente os cubos de abóbora, batata e cenoura à panela, e refogue por mais alguns minutos.", "Tempere com curry em pó, páprica, sal e pimenta a gosto, mexendo bem para distribuir os temperos.", "Despeje o caldo de legumes na panela e deixe ferver.", "Reduza o fogo, tampe a panela e deixe cozinhar por cerca de 20-25 minutos, ou até que os legumes estejam macios.", "Retire do fogo e deixe a sopa esfriar um pouco.", "Usando um liquidificador ou mixer de mão, processe a sopa até obter uma consistência cremosa.", "Volte a sopa para a panela e aqueça novamente se necessário.", "Sirva a sopa de abóbora quente, decorada com salsinha picada."]
    },
    {
      title: "Caldo Verde",
      servings: "4 porções",
      category_ids: [9],
      time: 45,
      difficulty: "easy",
      ingredients: ["4 batatas médias, descascadas e cortadas em cubos", "1 cebola grande, picada", "2 dentes de alho, picados", "200g de linguiça calabresa defumada, cortada em rodelas finas", "4 xícaras de caldo de galinha", "1 maço de couve manteiga, fatiada finamente", "Sal e pimenta a gosto", "Azeite de oliva"],
      preparation_steps: ["Em uma panela grande, aqueça um pouco de azeite de oliva em fogo médio.", "Adicione a cebola picada e o alho picado, e refogue até ficarem macios.", "Acrescente os cubos de batata à panela, e refogue por mais alguns minutos.", "Despeje o caldo de galinha na panela e deixe ferver.", "Reduza o fogo e deixe cozinhar até que as batatas estejam macias, cerca de 15-20 minutos.", "Enquanto isso, em uma frigideira separada, doure as rodelas de linguiça calabresa defumada.", "Quando as batatas estiverem cozidas, amasse-as ligeiramente na panela para engrossar o caldo.", "Adicione a couve manteiga fatiada finamente e cozinhe por mais alguns minutos até que esteja macia.", "Tempere com sal e pimenta a gosto.", "Adicione as rodelas de linguiça calabresa douradas à sopa.", "Sirva o caldo verde quente, acompanhado de pão de milho ou broa de milho."]
    },
    {
      title: "Risoto de Funghi",
      servings: "4 porções",
      category_ids: [10, 16],
      time: 30,
      difficulty: "medium",
      ingredients: ["1 xícara de arroz arbóreo", "1/2 xícara de vinho branco seco", "1 litro de caldo de legumes", "200g de cogumelos funghi secchi", "1 cebola pequena, picada", "2 dentes de alho, picados", "3 colheres de sopa de manteiga", "1/2 xícara de queijo parmesão ralado", "Sal e pimenta a gosto", "Salsinha picada para decorar"],
      preparation_steps: ["Hidrate os cogumelos funghi em água quente por cerca de 20 minutos, escorra e reserve.", "Em uma panela, aqueça o caldo de legumes e mantenha-o aquecido em fogo baixo.", "Em outra panela, derreta 2 colheres de sopa de manteiga em fogo médio.", "Refogue a cebola picada e o alho picado até ficarem macios.", "Adicione o arroz arbóreo à panela e refogue por alguns minutos, até que os grãos fiquem translúcidos.", "Deglace a panela com o vinho branco, mexendo até evaporar completamente.", "Adicione os cogumelos funghi hidratados à panela.", "Comece a adicionar conchas do caldo de legumes aquecido ao arroz, mexendo constantemente.", "Continue adicionando o caldo aos poucos e mexendo até que o arroz esteja cozido al dente, cerca de 18-20 minutos.", "Retire a panela do fogo e adicione o queijo parmesão ralado e a colher de sopa restante de manteiga.", "Tempere com sal e pimenta a gosto e misture bem.", "Sirva o risoto de funghi decorado com salsinha picada."]
    },
    {
      title: "Fettuccine Alfredo",
      servings: "4 porções",
      category_ids: [10, 16],
      time: 20,
      difficulty: "easy",
      ingredients: ["400g de fettuccine", "1 xícara de creme de leite fresco", "1 xícara de queijo parmesão ralado", "4 colheres de sopa de manteiga", "2 dentes de alho, picados", "Sal e pimenta a gosto", "Noz-moscada ralada a gosto", "Salsinha picada para decorar"],
      preparation_steps: ["Cozinhe o fettuccine em água salgada de acordo com as instruções da embalagem até ficar al dente.", "Enquanto isso, em uma panela grande, derreta a manteiga em fogo médio.", "Adicione o alho picado à panela e refogue até ficar perfumado.", "Despeje o creme de leite fresco na panela e deixe ferver, mexendo sempre.", "Reduza o fogo e adicione o queijo parmesão ralado, mexendo constantemente até que o queijo derreta e o molho engrosse um pouco.", "Tempere o molho com sal, pimenta e noz-moscada a gosto.", "Escorra o fettuccine cozido e adicione à panela com o molho.", "Misture bem para que o fettuccine fique bem revestido com o molho.", "Sirva o fettuccine alfredo quente, decorado com salsinha picada."]
    },
    {
      title: "Lasanha de Frango e Espinafre",
      servings: "4 porções",
      category_ids: [10, 5],
      time: 60,
      difficulty: "medium",
      ingredients: ["250g de massa para lasanha pré-cozida", "300g de peito de frango cozido e desfiado", "200g de espinafre fresco", "1 cebola picada", "2 dentes de alho picados", "2 xícaras de molho de tomate", "1 xícara de queijo muçarela ralado", "1/2 xícara de queijo parmesão ralado", "1 colher de sopa de manteiga", "2 colheres de sopa de farinha de trigo", "2 xícaras de leite", "Noz-moscada a gosto", "Sal e pimenta a gosto"],
      preparation_steps: ["Pré-aqueça o forno a 180°C.", "Em uma panela, refogue a cebola picada e o alho picado em um pouco de azeite até ficarem macios.", "Adicione o espinafre fresco à panela e cozinhe até murchar.", "Em outra panela, prepare o molho branco: derreta a manteiga em fogo médio, adicione a farinha de trigo e cozinhe por alguns minutos.", "Gradualmente, adicione o leite à panela, mexendo sempre para evitar grumos.", "Cozinhe o molho até engrossar, depois tempere com noz-moscada, sal e pimenta a gosto.", "Em uma assadeira, monte a lasanha em camadas: comece com uma camada fina de molho de tomate, seguido por massa para lasanha, frango desfiado, espinafre refogado, molho branco e queijo muçarela ralado.", "Repita as camadas até que todos os ingredientes sejam usados, terminando com queijo parmesão ralado por cima.", "Cubra a assadeira com papel alumínio e leve ao forno pré-aquecido por cerca de 30 minutos.", "Retire o papel alumínio e asse por mais 15 minutos, ou até o queijo dourar e a lasanha ficar borbulhante.", "Deixe descansar por alguns minutos antes de servir."]
    },
    {
      title: "Ravioli de Ricota e Espinafre com Molho de Tomate",
      servings: "4 porções",
      category_ids: [10, 16],
      time: 45,
      difficulty: "medium",
      ingredients: ["400g de massa para ravioli de ricota e espinafre", "2 xícaras de molho de tomate", "1/2 xícara de queijo parmesão ralado", "Folhas de manjericão fresco para decorar"],
      preparation_steps: ["Cozinhe a massa para ravioli em água salgada de acordo com as instruções da embalagem.", "Enquanto isso, aqueça o molho de tomate em uma panela grande.", "Quando a massa estiver cozida, escorra e reserve um pouco da água do cozimento.", "Adicione os raviolis cozidos ao molho de tomate quente.", "Misture delicadamente para que os raviolis fiquem bem revestidos com o molho.", "Se necessário, adicione um pouco da água do cozimento reservada para ajustar a consistência do molho.", "Sirva os raviolis de ricota e espinafre com molho de tomate, polvilhados com queijo parmesão ralado e decorados com folhas de manjericão fresco."]
    },
    {
      title: "Macarrão ao Pesto",
      servings: "4 porções",
      category_ids: [10, 16],
      time: 20,
      difficulty: "easy",
      ingredients: ["400g de macarrão (tipo espaguete ou linguine)", "2 xícaras de folhas de manjericão fresco", "1/2 xícara de queijo parmesão ralado", "1/2 xícara de nozes ou pinhões", "2 dentes de alho", "1/2 xícara de azeite de oliva extra virgem", "Sal a gosto", "Pimenta a gosto"],
      preparation_steps: ["Cozinhe o macarrão em água salgada de acordo com as instruções da embalagem até ficar al dente.", "Enquanto isso, prepare o pesto: em um processador de alimentos, combine as folhas de manjericão fresco, queijo parmesão ralado, nozes ou pinhões, alho, azeite de oliva, sal e pimenta a gosto.", "Processe até obter uma pasta homogênea.", "Quando o macarrão estiver cozido, escorra, reservando um pouco da água do cozimento.", "Transfira o macarrão escorrido de volta para a panela, adicione o pesto e um pouco da água do cozimento reservada.", "Misture bem para que o macarrão fique bem revestido com o pesto.", "Sirva o macarrão ao pesto imediatamente, polvilhado com mais queijo parmesão ralado, se desejar."]
    },
    {
      title: "Risoto de Camarão",
      servings: "4 porções",
      category_ids: [10, 6],
      time: 40,
      difficulty: "medium",
      ingredients: ["1 xícara de arroz arbóreo", "1/2 xícara de vinho branco seco", "1 litro de caldo de peixe", "300g de camarões limpos", "1 cebola picada", "2 dentes de alho picados", "2 colheres de sopa de manteiga", "1/2 xícara de queijo parmesão ralado", "Sal e pimenta a gosto", "Salsinha picada para decorar"],
      preparation_steps: ["Em uma panela, aqueça o caldo de peixe e mantenha-o aquecido em fogo baixo.", "Em outra panela, derreta 1 colher de sopa de manteiga em fogo médio.", "Refogue a cebola picada e o alho picado até ficarem macios.", "Adicione o arroz arbóreo à panela e refogue por alguns minutos, até que os grãos fiquem translúcidos.", "Deglace a panela com o vinho branco, mexendo até evaporar completamente.", "Comece a adicionar conchas do caldo de peixe aquecido ao arroz, mexendo constantemente.", "Continue adicionando o caldo aos poucos e mexendo até que o arroz esteja cozido al dente, cerca de 18-20 minutos.", "Enquanto isso, em uma frigideira separada, derreta a colher de sopa restante de manteiga e refogue os camarões limpos até ficarem rosados e cozidos.", "Quando o arroz estiver pronto, retire a panela do fogo e adicione os camarões refogados.", "Adicione o queijo parmesão ralado à panela e misture bem.", "Tempere com sal e pimenta a gosto.", "Sirva o risoto de camarão decorado com salsinha picada."]
    },
    {
      title: "Lasanha de Berinjela",
      servings: "4 porções",
      category_ids: [10, 16],
      time: 60,
      difficulty: "medium",
      ingredients: ["2 berinjelas grandes, fatiadas longitudinalmente", "500g de massa para lasanha pré-cozida", "2 xícaras de molho de tomate", "2 xícaras de queijo muçarela ralado", "1 xícara de queijo parmesão ralado", "Azeite de oliva", "Sal e pimenta a gosto"],
      preparation_steps: ["Preaqueça o forno a 180°C.", "Em uma assadeira, disponha as fatias de berinjela, regue com azeite de oliva e tempere com sal e pimenta a gosto.", "Asse no forno pré-aquecido por cerca de 20 minutos, ou até que as fatias de berinjela estejam macias.", "Enquanto isso, em uma panela, aqueça o molho de tomate.", "Em uma assadeira grande, monte a lasanha em camadas: comece com uma camada fina de molho de tomate, seguido por massa para lasanha, fatias de berinjela assada e queijo muçarela ralado.", "Repita as camadas até que todos os ingredientes sejam usados, terminando com queijo parmesão ralado por cima.", "Cubra a assadeira com papel alumínio e leve ao forno por cerca de 30 minutos.", "Retire o papel alumínio e asse por mais 15 minutos, ou até o queijo dourar e a lasanha ficar borbulhante.", "Deixe descansar por alguns minutos antes de servir."]
    },
    {
      title: "Chocolate Quente Cremoso",
      servings: "2 porções",
      category_ids: [11],
      time: 10,
      difficulty: "easy",
      ingredients: ["2 xícaras de leite", "100g de chocolate meio amargo picado", "2 colheres de sopa de cacau em pó", "2 colheres de sopa de açúcar", "1/2 colher de chá de extrato de baunilha", "Pitada de sal"],
      preparation_steps: ["Em uma panela, aqueça o leite em fogo médio até começar a ferver.", "Reduza o fogo e adicione o chocolate meio amargo picado, o cacau em pó, o açúcar, o extrato de baunilha e uma pitada de sal.", "Misture bem até que o chocolate e o cacau estejam completamente derretidos e a mistura esteja homogênea e cremosa.", "Divida o chocolate quente entre duas xícaras e sirva imediatamente, acompanhado de chantilly ou marshmallows, se desejar."]
    },
    {
      title: "Café Gelado com Leite",
      servings: "2 porções",
      category_ids: [11],
      time: 5,
      difficulty: "easy",
      ingredients: ["1 xícara de café forte", "1 xícara de leite gelado", "2 colheres de sopa de xarope de baunilha", "Gelo"],
      preparation_steps: ["Prepare o café forte e deixe esfriar completamente.", "Em dois copos altos, coloque gelo até a metade.", "Despeje o café forte sobre o gelo nos copos.", "Adicione o leite gelado e o xarope de baunilha, misture bem.", "Sirva imediatamente, decorado com uma vara de canela ou raspas de chocolate, se desejar."]
    },
    {
      title: "Bruschetta de Tomate e Manjericão",
      servings: "4 porções",
      category_ids: [12, 15, 16],
      time: 15,
      difficulty: "easy",
      ingredients: ["4 fatias de pão italiano", "2 tomates maduros, picados", "4 colheres de sopa de azeite de oliva extra virgem", "2 dentes de alho, descascados", "Folhas de manjericão fresco", "Sal e pimenta a gosto"],
      preparation_steps: ["Pré-aqueça o forno na temperatura de 200°C.", "Coloque as fatias de pão italiano em uma assadeira e leve ao forno por cerca de 5 minutos, ou até que fiquem levemente tostadas.", "Enquanto isso, em uma tigela, misture os tomates picados, 2 colheres de sopa de azeite de oliva, sal e pimenta a gosto.", "Esfregue levemente os dentes de alho descascados em cada fatia de pão tostado.", "Regue cada fatia de pão com um fio de azeite de oliva extra virgem.", "Cubra as fatias de pão com a mistura de tomate preparada.", "Decore cada bruschetta com folhas de manjericão fresco e sirva imediatamente."]
    },
    {
      title: "Torradas com Abacate",
      servings: "2 porções",
      category_ids: [12, 15, 16],
      time: 10,
      difficulty: "easy",
      ingredients: ["2 fatias de pão integral", "1 abacate maduro", "Suco de 1 limão", "Sal e pimenta a gosto", "Pimenta vermelha em flocos (opcional)", "Coentro fresco picado para decorar"],
      preparation_steps: ["Toste as fatias de pão integral até ficarem crocantes.", "Enquanto o pão estiver torrando, descasque e amasse o abacate em uma tigela pequena.", "Adicione o suco de limão ao abacate amassado e tempere com sal e pimenta a gosto.", "Se desejar um toque picante, adicione uma pitada de pimenta vermelha em flocos.", "Espalhe a mistura de abacate sobre as fatias de pão torrado.", "Polvilhe coentro fresco picado por cima e sirva imediatamente."]
    },
    {
      title: "Guacamole",
      servings: "4 porções",
      category_ids: [6, 12, 15, 16],
      time: 15,
      difficulty: "easy",
      ingredients: ["2 abacates maduros", "1 tomate pequeno, picado", "1/4 de cebola roxa, picada", "Suco de 1 limão", "Coentro fresco picado a gosto", "Sal e pimenta a gosto", "Pimenta vermelha em flocos (opcional)"],
      preparation_steps: ["Corte os abacates ao meio, retire o caroço e coloque a polpa em uma tigela.", "Amasse os abacates com um garfo até obter uma consistência de purê.", "Adicione o tomate picado, a cebola roxa picada, o suco de limão e o coentro fresco picado à tigela.", "Tempere com sal, pimenta e pimenta vermelha em flocos a gosto.", "Misture bem todos os ingredientes até ficarem bem combinados.", "Sirva o guacamole com nachos, tortilhas ou como acompanhamento."]
    },
    {
      title: "Sanduíche de Frango com Pesto",
      servings: "2 porções",
      category_ids: [12, 5],
      time: 15,
      difficulty: "easy",
      ingredients: ["4 fatias de pão de forma", "200g de peito de frango cozido e desfiado", "4 colheres de sopa de pesto", "Folhas de alface", "Tomate em rodelas", "Queijo muçarela em fatias", "Azeite de oliva"],
      preparation_steps: ["Unte levemente uma das faces de cada fatia de pão com azeite de oliva.", "Espalhe o pesto sobre a outra face de cada fatia de pão.", "Disponha o peito de frango desfiado sobre duas das fatias de pão.", "Cubra o frango com algumas folhas de alface, rodelas de tomate e fatias de queijo muçarela.", "Cubra com as fatias de pão restantes, com o lado do pesto virado para baixo.", "Corte os sanduíches ao meio e sirva imediatamente."]
    },
    {
      title: "Rolinhos de Abobrinha com Cream Cheese",
      servings: "4 porções",
      category_ids: [12, 13, 16],
      time: 20,
      difficulty: "easy",
      ingredients: ["2 abobrinhas médias", "150g de cream cheese", "Ervas frescas picadas (como salsinha, cebolinha ou manjericão)", "Sal e pimenta a gosto", "Azeite de oliva"],
      preparation_steps: ["Lave e corte as extremidades das abobrinhas.", "Com um descascador de legumes, corte fatias finas de abobrinha ao longo do comprimento.", "Em uma tigela pequena, misture o cream cheese com as ervas frescas picadas, sal e pimenta a gosto.", "Espalhe uma fina camada de cream cheese sobre cada fatia de abobrinha.", "Enrole as fatias de abobrinha cuidadosamente para formar os rolinhos.", "Disponha os rolinhos em um prato de servir, regue com um fio de azeite de oliva e sirva."]
    },
    {
      title: "Panquecas de Banana e Aveia",
      servings: "2 porções",
      category_ids: [12, 13],
      time: 15,
      difficulty: "easy",
      ingredients: ["1 banana madura", "1 ovo", "1/2 xícara de aveia em flocos (certificada sem glúten)", "1/2 colher de chá de canela em pó", "Óleo de coco ou manteiga, para untar a frigideira", "Mel ou xarope de bordo, para servir (opcional)"],
      preparation_steps: ["Em uma tigela, amasse a banana com um garfo até obter um purê.", "Adicione o ovo, a aveia em flocos e a canela em pó ao purê de banana.", "Misture bem até que todos os ingredientes estejam combinados.", "Aqueça um pouco de óleo de coco ou manteiga em uma frigideira antiaderente em fogo médio.", "Despeje cerca de 1/4 de xícara da massa na frigideira quente, espalhando-a levemente para formar uma panqueca.", "Cozinhe por 2-3 minutos, ou até que bolhas comecem a se formar na superfície da panqueca.", "Vire cuidadosamente a panqueca e cozinhe por mais 1-2 minutos do outro lado, ou até dourar.", "Repita o processo com o restante da massa.", "Sirva as panquecas quentes, acompanhadas de mel ou xarope de bordo, se desejar."]
    }
  ]

  URLS = [
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085233/recipes/recipe_3_1.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085243/recipes/recipe_4_2.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085252/recipes/recipe_5_3.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085259/recipes/recipe_6_4.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085268/recipes/recipe_7_5.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085280/recipes/recipe_8_6.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085292/recipes/recipe_9_7.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085299/recipes/recipe_10_8.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085314/recipes/recipe_11_9.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085333/recipes/recipe_12_10.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085341/recipes/recipe_13_11.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085349/recipes/recipe_14_12.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085356/recipes/recipe_15_13.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714085655/recipes/recipe_16_14.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086108/recipes/recipe_17_15.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086123/recipes/recipe_18_16.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086131/recipes/recipe_19_17.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714185311/recipes/recipe_20_60.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086148/recipes/recipe_21_18.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086156/recipes/recipe_22_19.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086165/recipes/recipe_23_20.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086175/recipes/recipe_24_21.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086183/recipes/recipe_25_22.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086192/recipes/recipe_26_23.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086200/recipes/recipe_27_24.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086209/recipes/recipe_28_25.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086217/recipes/recipe_29_26.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086227/recipes/recipe_30_27.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086422/recipes/recipe_31_28.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086432/recipes/recipe_32_29.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086440/recipes/recipe_33_30.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714185397/recipes/recipe_34_61.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086454/recipes/recipe_35_31.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086463/recipes/recipe_36_32.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086472/recipes/recipe_37_33.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086480/recipes/recipe_38_34.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086488/recipes/recipe_39_35.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714086496/recipes/recipe_40_36.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184258/recipes/recipe_41_37.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184267/recipes/recipe_42_38.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184275/recipes/recipe_43_39.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184283/recipes/recipe_44_40.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184292/recipes/recipe_45_41.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184301/recipes/recipe_46_42.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184314/recipes/recipe_47_43.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184323/recipes/recipe_48_44.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184332/recipes/recipe_49_45.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184344/recipes/recipe_50_46.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184567/recipes/recipe_51_47.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184578/recipes/recipe_52_48.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184586/recipes/recipe_53_49.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184594/recipes/recipe_54_50.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184602/recipes/recipe_55_51.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184611/recipes/recipe_56_52.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184620/recipes/recipe_57_53.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184629/recipes/recipe_58_54.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184638/recipes/recipe_59_55.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184648/recipes/recipe_60_56.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184655/recipes/recipe_61_57.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184664/recipes/recipe_62_58.jpg",
    "https://res.cloudinary.com/dabr0d1ey/image/upload/v1714184672/recipes/recipe_63_59.jpg",
  ]

  def self.create_recipes!
    RECIPES.each_with_index do |recipe_data, recipe_index|
      recipe = Recipe.create!(
        title: recipe_data[:title],
        servings: recipe_data[:servings],
        time: recipe_data[:time],
        difficulty: recipe_data[:difficulty],
        creator_id: 1,
      )

      recipe_data[:ingredients].each do |ingredient|
        recipe.ingredients.create!(text: ingredient)
      end

      recipe_data[:preparation_steps].each_with_index do |step, step_index|
        recipe.preparation_steps.create!(text: step, position: step_index)
      end

      recipe_data[:category_ids].each do |category_id|
        recipe.recipe_categories.create!(category_id: category_id)
      end

      recipe.recipe_images.create!(url: URLS[recipe_index])
    end
  end
end
