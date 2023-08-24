export const poderes = [
    {
	"Acuidade com Arma": {
        nome: "Acuidade com Arma",
        descrição:
            "Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode "
            +"usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.",
        requisitos: "Des 1",
        tipo: "Combate"
    },
    "Arma Secundária grande": {
        nome: "Arma Secundária grande",
        descrição:
            "Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.",
        requisitos: "Estilo de Duas Armas.",
        tipo: "Combate"
    },
    "Arremesso Potente": {
        nome: "Arremesso Potente",
        descrição:
            "Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza "
            +"nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo "
            +"com armas de arremesso.",
        requisitos: "For 1, Estilo de Arremesso.",
        tipo: "Combate"
    },
    "Arremesso Múltiplo": {
        nome: "Arremesso Múltiplo",
        descrição: "Uma vez por rodada, quando faz um ataque com uma arma de arremesso, você pode gastar 1 PM para fazer um ataque adicional contra o mesmo alvo, arremessando outra arma de arremesso.",
        requisitos: "Des 1, Estilo de Arremesso.",
        tipo: "Combate"
    },
    "Ataque com Escudo": {
        nome: "Ataque com Escudo",
        descrição: "Uma vez por rodada, se estiver empunhando um escudo e fizer a ação agredir, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com o escudo. Este ataque não faz você perder o bônus do escudo na Defesa.",
        requisitos: "Estilo de Arma e Escudo.",
        tipo: "Combate"
    },
    "Ataque Pesado": {
        nome: "Ataque Pesado",
        descrição: "Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).",
        requisitos: "Estilo de Duas Mãos.",
        tipo: "Combate"
    },
    "Ataque Poderoso": {
        nome: "Ataque Poderoso",
        descrição: "Sempre que faz um ataque corpo a corpo, você pode sofrer –2 no teste de ataque para receber +5 na rolagem de dano.",
        requisitos: "For 1.",
        tipo: "Combate"
    },
    "Ataque Preciso": {
        nome: "Ataque Preciso",
        descrição: "Se estiver empunhando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.",
        requisitos: "Estilo de Uma Arma.",
        tipo: "Combate"
    },
    "Bloqueio com Escudo": {
        nome: "Bloqueio com Escudo",
        descrição: "Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano. Você só pode usar este poder se estiver usando um escudo.",
        requisitos: "Estilo de Arma e Escudo.",
        tipo: "Combate"
    },
    "Carga de Cavalaria": {
        nome: "Carga de Cavalaria",
        descrição: "Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.",
        requisitos: "Ginete.",
        tipo: "Combate"
    },
    "Combate Defensivo": {
        nome: "Combate Defensivo",
        descrição: "Quando usa a ação agredir, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa.",
        requisitos: "Int 1.",
        tipo: "Combate"
    },
    "Derrubar Aprimorado": {
        nome: "Derrubar Aprimorado",
        descrição: "Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.",
        requisitos: "Combate Defensivo.",
        tipo: "Combate"
    },
    "Desarmar Aprimorado": {
        nome: "Desarmar Aprimorado",
        descrição: "Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe.",
        requisitos: "Combate Defensivo.",
        tipo: "Combate"
    },
    "Disparo Preciso": {
        nome: "Disparo Preciso",
        descrição: "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de –5 no teste de ataque.",
        requisitos: "Estilo de Disparo ou Estilo de Arremesso.",
        tipo: "Combate"
    },
    "Disparo Rápido": {
        nome: "Disparo Rápido",
        descrição: "Se estiver empunhando uma arma de disparo que possa recarregar como ação livre e gastar uma ação completa para agredir, pode fazer um ataque adicional com ela. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.",
        requisitos: "Des 1, Estilo de Disparo.",
        tipo: "Combate"
    },
    "Empunhadura Poderosa": {
        nome: "Empunhadura Poderosa",
        descrição: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2.",
        requisitos: "For 3.",
        tipo: "Combate"
    },
    "Encouraçado": {
        nome: "Encouraçado",
        descrição: "Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.",
        requisitos: "proficiência com armaduras pesadas.",
        tipo: "Combate"
    },
    "Esquiva": {
        nome: "Esquiva",
        descrição: "Você recebe +2 na Defesa e Reflexos.",
        requisitos: "Des 1.",
        tipo: "Combate"
    },
    "Estilo de Arma e Escudo": {
        nome: "Estilo de Arma e Escudo",
        descrição: "Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.",
        requisitos: "treinado em Luta, proficiência com escudos.",
        tipo: "Combate"
    },
    "Estilo de Arma Longa": {
        nome: "Estilo de Arma Longa",
        descrição: "Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.",
        requisitos: "For 1, treinado em Luta.",
        tipo: "Combate"
    },
    "Estilo de Arremesso": {
        nome: "Estilo de Arremesso",
        descrição: "Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.",
        requisitos: "treinado em Pontaria.",
        tipo: "Combate"
    },
    "Estilo de Disparo": {
        nome: "Estilo de Disparo",
        descrição: "Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano.",
        requisitos: "treinado em Pontaria.",
        tipo: "Combate"
    },
    "Estilo de Duas Armas": {
        nome: "Estilo de Duas Armas",
        descrição: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.",
        requisitos: "Des 2, treinado em Luta.",
        tipo: "Combate"
    },
    "Estilo de Duas Mãos": {
        nome: "Estilo de Duas Mãos",
        descrição: "Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.",
        requisitos: "For 2, Treinado em Luta.",
        tipo: "Combate"
    },
    "Estilo de Uma Arma": {
        nome: "Estilo de Uma Arma",
        descrição: "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).",
        requisitos: "treinado em Luta.",
        tipo: "Combate"
    },
    "Estilo Desarmado": {
        nome: "Estilo Desarmado",
        descrição: "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).",
        requisitos: "treinado em Luta.",
        tipo: "Combate"
    },
    "Fanático": {
        nome: "Fanático",
        descrição: "Seu deslocamento não é reduzido por usar armaduras pesadas.",
        requisitos: "12º nível de personagem, Encouraçado.",
        tipo: "Combate"
    },
    "Finta Aprimorada": {
        nome: "Finta Aprimorada",
        descrição: "Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.",
        requisitos: "treinado em Enganação.",
        tipo: "Combate"
    },
    "Foco em Arma": {
        nome: "Foco em Arma",
        descrição: "Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.",
        requisitos: "proficiência com a arma.",
        tipo: "Combate"
    },
    "Ginete": {
        nome: "Ginete",
        descrição: "Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.",
        requisitos: "treinado em Cavalgar.",
        tipo: "Combate"
    },
    "Inexpugnável": {
        nome: "Inexpugnável",
        descrição: "Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.",
        requisitos: "Encouraçado, 6º nível de personagem.",
        tipo: "Combate"
    },
    "Mira Apurada": {
        nome: "Mira Apurada",
        descrição: "Quando usa a ação mirar, você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.",
        requisitos: "Sab 1, Disparo Preciso.",
        tipo: "Combate"
    },
    "Piqueiro": {
        nome: "Piqueiro",
        descrição: "Uma vez por rodada, se estiver empunhando uma arma alongada e um inimigo entrar voluntariamente em seu alcance corpo a corpo, você pode gastar 1 PM para fazer um ataque corpo a corpo contra este oponente com esta arma. Se o oponente tiver se aproximado fazendo uma investida, seu ataque causa dois dados de dano extra ,do mesmo tipo.",
        requisitos: "Estilo de Arma Longa.",
        tipo: "Combate"
    },
    "Presença Aterradora": {
        nome: "Presença Aterradora",
        descrição: "Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.",
        requisitos: "treinado em Intimidação.",
        tipo: "Combate"
    },
    "Proficiência": {
        nome: "Proficiência",
        descrição: "Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.",
        requisitos: "Nenhum",
        tipo: "Combate"
    },
    "Quebrar Aprimorado": {
        nome: "Quebrar Aprimorado",
        descrição: "Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.",
        requisitos: "Ataque Poderoso.",
        tipo: "Combate"
    },
    "Reflexos de Combate": {
        nome: "Reflexos de Combate",
        descrição: "Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.",
        requisitos: "Des 1.",
        tipo: "Combate"
    },
    "Saque Rápido": {
        nome: "Saque Rápido",
        descrição: "Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).",
        requisitos: "treinado em Iniciativa.",
        tipo: "Combate"
    },
    "Trespassar": {
        nome: "Trespassar",
        descrição: "Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance.",
        requisitos: "Ataque Poderoso.",
        tipo: "Combate"
    },
    "Vitalidade": {
        nome: "Vitalidade",
        descrição: "Você recebe +1 PV por nível de personagem e +2 em Fortitude.",
        requisitos: "Con 1.",
        tipo: "Combate"
    },
    "Acrobático": {
        nome: "Acrobático",
        descrição: "Você pode usar sua Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas.",
        requisitos: "Des 2.",
        tipo: "Destino"
    },
    "Ao Sabor do Destino": {
        nome: "Ao Sabor do Destino",
        descrição: "Confiando em suas próprias habilidades (ou em sua própria sorte), você abre mão de usar itens mágicos. Sua autoconfiança fornece diversos benefícios, de acordo com seu nível de personagem e a tabela da página seguinte.",
        requisitos: "6º nível de personagem.",
        tipo: "Destino"
    },
    "Aparência Inofensiva": {
        nome: "Aparência Inofensiva",
        descrição: "A primeira criatura inteligente (Int –3 ou maior) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena.",
        requisitos: "Car 1.",
        tipo: "Destino"
    },
    "Atlético": {
        nome: "Atlético",
        descrição: "Você recebe +2 em Atletismo e +3m em seu deslocamento.",
        requisitos: "For 2.",
        tipo: "Destino"
    },
    "Atraente": {
        nome: "Atraente",
        descrição: "Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.",
        requisitos: "Car 1.",
        tipo: "Destino"
    },
    "Comandar": {
        nome: "Comandar",
        descrição: "Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.",
        requisitos: "Car 1.",
        tipo: "Destino"
    },
    "Costas Largas": {
        nome: "Costas Largas",
        descrição: "Seu limite de carga aumenta em 5 espaços e você pode se beneficiar de um item vestido adicional.",
        requisitos: "Con 1, For 1.",
        tipo: "Destino"
    },
    "Foco em Perícia": {
        nome: "Foco em Perícia",
        descrição: "Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes.",
        requisitos: "treinado na perícia escolhida.",
        tipo: "Destino"
    },
    "Inventário Organizado": {
        nome: "Inventário Organizado",
        descrição: "Você soma sua Inteligência no limite de espaços que pode carregar. Para você, itens muito leves ou pequenos, que normalmente ocupam meio espaço, em vez disso ocupam 1/4 de espaço.",
        requisitos: "Int 1.",
        tipo: "Destino"
    },
    "Investigador": {
        nome: "Investigador",
        descrição: "Você recebe +2 em Investigação e soma sua Inteligência em Intuição.",
        requisitos: "Int 1.",
        tipo: "Destino"
    },
    "Lobo Solitário": {
        nome: "Lobo Solitário",
        descrição: "Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar Cura em si mesmo.",
        requisitos: "Nenhum",
        tipo: "Destino"
    },
    "Medicina": {
        nome: "Medicina",
        descrição: "Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD.",
        requisitos: "Sab 1, treinado em Cura.",
        tipo: "Destino"
    },
    "Parceiro": {
        nome: "Parceiro",
        descrição: "Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade.",
        requisitos: "treinado em Adestramento (parceiro animal) ou Diplomacia (parceiro humanoide), 5º nível de personagem.",
        tipo: "Destino"
    },
    "Sentidos Aguçados": {
        nome: "Sentidos Aguçados",
        descrição: "Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha.",
        requisitos: "Sab 1, treinado em Percepção.",
        tipo: "Destino"
    },
    "Sortudo": {
        nome: "Sortudo",
        descrição: "Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).",
        requisitos: "Nenhum",
        tipo: "Destino"
    },
    "Surto Heroico": {
        nome: "Surto Heroico",
        descrição: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.",
        requisitos: "Nenhum",
        tipo: "Destino"
    },
    "Torcida": {
        nome: "Torcida",
        descrição: "Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor.",
        requisitos: "Car 1.",
        tipo: "Destino"
    },
    "Treinamento em Perícia": {
        nome: "Treinamento em Perícia",
        descrição: "Você se torna treinado em uma perícia a sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.",
        requisitos: "Nenhum",
        tipo: "Destino"
    },
    "Venefício": {
        nome: "Venefício",
        descrição: "Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2.",
        requisitos: "treinado em Ofício (alquimista).",
        tipo: "Destino"
    },
    "Vontade de Ferro": {
        nome: "Vontade de Ferro",
        descrição: "Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade.",
        requisitos: "Sab 1.",
        tipo: "Destino"
    },
    "Celebrar Ritual": {
        nome: "Celebrar Ritual",
        descrição:
            "Você pode lançar magias como rituais. Isso dobra "
            +"seu limite de PM, mas muda a execução para 1 hora "
            +"(ou o dobro, o que for maior) e exige um gasto de T$ "
            +"10 por PM gasto (em incensos, oferendas...). "
            +"Assim, um arcanista de 8º nível pode lançar uma magia de 16 "
            +"PM gastando T$ 160.",
        requisitos: "treinado em Misticismo ou Religião, 8º nível de personagem. Magias lançadas como rituais não podem ser armazenadas em itens.",
        tipo:"Magia"
    },
    "Escrever Pergaminho": {
        nome: "Escrever Pergaminho",
        descrição:
            "Você pode usar a perícia Ofício (escriba) para fabricar pergaminhos com magias que conheça. "
            +"De acordo com o mestre, você pode usar objetos similares, como runas, tabuletas de argila etc.",
        requisitos: "habilidade de classe Magias, treinado em Ofício (escriba).",
        tipo:"Magia"
    },
    "Foco em Magia": {
        nome: "Foco em Magia",
        descrição:
            "Escolha uma magia que possa lançar. Seu custo diminui em –1 PM (cumulativo com outras reduções de custo). "
            +"Você pode escolher este poder outras vezes para magias diferentes.",
        requisitos: "Lancar magias.",
        tipo:"Magia"
    },
    "Magia Acelerada Aprimoramento": {
        nome: "Magia Acelerada Aprimoramento",
        descrição:
            "Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, "
            +"padrão ou completa e só pode lançar uma magia como ação livre por rodada.",
        requisitos: "lançar magias de 2º círculo.",
        tipo:"Magia"
    },
    "Magia Ampliada Aprimoramento": {
        nome: "Magia Ampliada Aprimoramento",
        descrição:
            "Aumenta o alcance da magia em um passo (de curto para médio, de médio para longo) ou dobra a área de efeito da magia. "
            +"Por exemplo, uma Bola de Fogo ampliada tem seu alcance aumentado para longo ou sua área aumentada para 12m de raio.",
        requisitos: "Lancar magias.",
        tipo:"Magia"
    },
    "Magia Discreta Aprimoramento": {
        nome: "Magia Discreta Aprimoramento",
        descrição:
            "Você lança a magia sem gesticular e falar, usando apenas concentração. Isso permite lançar magias com as mãos presas, amordaçado etc. "
            +"Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20).",
        requisitos: "Lancar magias.",
        tipo:"Magia"
    },
    "Magia Ilimitada": {
        nome: "Magia Ilimitada",
        descrição:
            "Você soma seu atributo-chave no limite de PM que pode gastar numa magia. "
            +"Por exemplo, um arcanista de 5º nível com Int 4 e este poder pode gastar até 9 PM em cada magia.",
        requisitos: "Lancar magias.",
        tipo:"Magia"
    },
    "Preparar Poção": {
        nome: "Preparar Poção",
        descrição:
            "Você pode usar a perícia Ofício (alquimista) para fabricar poções com magias que conheça de 1º e 2º círculos. "
            +"De acordo com o mestre, você pode usar objetos similares, como runas, tabuletas de argila etc.",
        requisitos: "habilidade de classe Magias, treinado em Ofício (alquimista).",
        tipo:"Magia"
    }, 
    }
];