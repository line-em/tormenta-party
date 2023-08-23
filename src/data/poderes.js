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
    }
    }
];