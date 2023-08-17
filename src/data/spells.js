export const magias = {
	1: {
		"Abençoar Alimentos": {
			nome: "Abençoar Alimentos",
			tipo: "Divina 1 (Transmutação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "alimento para 1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse).\n\nBônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.\n\nTruque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido.\n\n+1 PM: aumenta o número de alvos em +1.\n\n+1 PM: muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta."
		},
		"Acalmar Animal": {
			nome: "Acalmar Animal",
			tipo: "Divina 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 animal",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal.\n\nUm alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia.\n\n+1 PM: muda o alcance para médio.\n\n+1 PM: muda o alvo para 1 monstro ou espírito com Inteligência 1 ou 2.\n\n +2 PM: aumenta o número de alvos em +1.\n\n+5 PM: muda o alvo para 1 monstro ou espírito. Requer 3º círculo."
		},
		"Adaga Mental": {
			nome: "Adaga Mental",
			tipo: "Arcana 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Vontade parcial",
			descrição:
				"Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano mental e fica pasmo por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano, não fica pasmo e não pode mais ficar pasmo por esta magia até o final da cena.\n\n+1 PM: você lança a magia sem gesticular ou pronunciar palavras (o que permite lançar essa magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele.\n\n+2 PM: muda a duração para 1 dia.\n\nAlém do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.\n\n+2 PM: aumenta o dano em +1d6."
		},
		Alarme: {
			nome: "Alarme",
			tipo: "Arcana 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "esfera de 9m de raio",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida.\n\nAo lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.\n\n+2 PM: muda o alcance para pessoal.\n\nA área é emanada a partir de você.\n\n+5 PM: além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo).\n\n+9 PM: muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia como uma reação. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso."
		},
		Amedrontar: {
			nome: "Amedrontar",
			tipo: "Arcana 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 animal ou humanoide",
			área: "",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"O alvo é envolvido por energias sombrias assustadoras. Se falhar na resistência, fica apavorado por 1 rodada, depois abalado. Se passar, fica abalado por 1d4 rodadas.\n\n+2 PM: alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1.\n\n+2 PM: muda o alvo para criatura.\n\n+5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance.\n"
		},
		"Área Escorregadia": {
			nome: "Área Escorregadia",
			tipo: "Arcana 1 (Convocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "quadrado de 3m ou 1 objeto",
			duração: "cena",
			resistência: "Reflexos (veja texto)",
			descrição:
				"Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10).\n\nÁrea Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.\n\n+1 PM: aumenta a área em +1 quadrado de 1,5m.\n\n+2 PM: muda a CD dos testes de Acrobacia para 15.\n\n+5 PM: muda a CD dos testes de Acrobacia para 20."
		},
		"Arma Espiritual": {
			nome: "Arma Espiritual",
			tipo: "Divina 1 (Convocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você invoca a arma preferida de sua divindade (se tiver uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.\n\n+1 PM: além do normal, a arma também o protege, oferecendo +1 na Defesa.\n\n+2 PM: aumenta o bônus na Defesa em +1.\n\n+2 PM: aumenta o dano causado pela arma em +1d6, limitado pelo círculo máximo de magia que você pode lançar.\n\n+2 PM: muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente.\n\nSe a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo.\n\n+2 PM: muda o tipo do dano para essência. Requer 2º círculo.\n\n+5 PM: invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo."
		},
		"Arma Mágica": {
			nome: "Arma Mágica",
			tipo: "Universal 1 (Transmutação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 arma",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"A arma empunhada fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica. Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam o modificador deste atributo).\n\n+2 PM: aumenta o bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.\n\n+2 PM: a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada."
		},
		"Armadura Arcana": {
			nome: "Armadura Arcana",
			tipo: "Arcana 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia cria uma película protetora invisível, mas tangível, fornecendo +4 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.\n\n+1 PM: muda a execução para reação.\n\nEm vez do normal, você cria um escudo mágico que fornece +6 na Defesa contra o próximo ataque que sofrer até o fim do turno atual, cumulativo com o bônus fornecido pelo efeito básico desta magia.\n\n+2 PM: aumenta o bônus na Defesa em +1.\n\n+2 PM: muda a duração para 1 dia.\nRequer 2º círculo."
		},
		"Armamento da Natureza": {
			nome: "Armamento da Natureza",
			tipo: "Divina 1 (Transmutação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 arma",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).\n\n+1 PM: fornece +1 nos testes de ataque com a arma.\n\n+2 PM: muda a execução para ação de movimento.\n\n+3 PM: aumenta o bônus nos testes de ataque em +1.\n\n+5 PM: aumenta o dano da arma em mais um passo."
		},
		Aviso: {
			nome: "Aviso",
			tipo: "Universal 1 (Adivinhação)",
			círculo: "1",
			execução: "movimento",
			alcance: "longo",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito. Escolha um: Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena.\n\nMensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo.\n\nLocalização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.\n\n+1 PM: aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km e assim por diante).\n\n+1 PM: se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno.\n\n+2 PM: se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição.\n\n+3 PM: aumenta o número de alvos em +1."
		},
		Bênção: {
			nome: "Bênção",
			tipo: "Divina 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano.\n\nBênção anula Perdição.\n\n+1 PM: muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo pela duração da magia.\n\n+2 PM: aumenta os bônus em +1, limitado pelo círculo máximo de magia que você pode lançar."
		},
		"Caminhos da Natureza": {
			nome: "Caminhos da Natureza",
			tipo: "Divina 1 (Convocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "criaturas escolhidas",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.\n\nTruque: muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.\n\n+1 PM: além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.\n\n+2 PM: aumenta o bônus de deslocamento em +3m."
		},
		Comando: {
			nome: "Comando",
			tipo: "Divina 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 humanoide",
			área: "",
			duração: "1 rodada",
			resistência: "Vontade anula",
			descrição:
				"Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos.\n\nFuja: o alvo gasta seu turno se afastando de você (usando todas as suas ações).\n\nLargue: o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou).\n\nPare: o alvo fica pasmo (não pode fazer ações, exceto reações). Se passar no teste de resistência, o alvo não pode mais ficar pasmo por esta magia até o fim da cena.\n\nSenta: com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno.\n\nVenha: o alvo gasta seu turno se aproximando de você (usando todas as suas ações).\n\n+1 PM: muda o alvo para 1 criatura.\n\n+2 PM: aumenta a quantidade de alvos em +1."
		},
		Compreensão: {
			nome: "Compreensão",
			tipo: "Universal 1 (Adivinhação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura ou texto",
			área: "",
			duração: "cena",
			resistência: "Vontade anula (veja descrição)",
			descrição:
				"Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos.\n\nVocê também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.\n\n+1 PM: muda o alcance para curto.\n\n+2 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.\n\n+2 PM: muda o alvo para 1 criatura.\n\nEm vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura.\nRequer 2º círculo.\n\n+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo."
		},
		"Concentração de Combate": {
			nome: "Concentração de Combate",
			tipo: "Arcana 1 (Adivinhação)",
			círculo: "1",
			execução: "livre",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "1 rodada",
			resistência: "",
			descrição:
				"Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um teste de ataque, você rola dois dados e usa o melhor resultado.\n\n+2 PM: muda a execução para padrão e a duração para cena. Requer 2º círculo.\n\n+5 PM: além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3º círculo.\n\n+9 PM: muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4º círculo.\n\n+14 PM: muda a execução para padrão e a duração para 1 dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5º círculo."
		},
		"Conjurar Monstro": {
			nome: "Conjurar Monstro",
			tipo: "Arcana 1 (Convocação)",
			círculo: "1",
			execução: "completa",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Esta magia conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim um construto feito de energia.\n\nSe for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez.\n\nO monstro surge em um ponto escolhido por você dentro do alcance e pode agir no começo do seu próximo turno, sempre na sua Iniciativa. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada.\n\nVocê pode usar uma ação padrão para dar uma das seguintes ordens a ele.\n\nMover: o monstro se movimenta o dobro do deslocamento nessa rodada.\n\nAtacar: o monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano.\n\nLançar Magia: o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo “cuspir” uma Bola de Fogo! Você gasta PM normalmente para lançar a magia.\n\nOutros usos criativos para monstros conjurados ficam a critério do mestre.\n\nO monstro não age sem receber uma ordem.\n\nPara efeitos de jogo, o monstro conjurado tem For 14, Des 17 e todos os outros atributos nulos. Ele tem 20 pontos de vida, não tem um valor de Defesa (ataques feitos contra ele acertam automaticamente) e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade.\n\n+1 PM: o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento terrestre.\n\n+1 PM: aumenta o deslocamento do monstro em +3m.\n\n+1 PM: muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade.\n\n+2 PM: o monstro ganha percepção às cegas (alcance curto).\n\n+2 PM: aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.).\n\n+2 PM: aumenta o tamanho do monstro para Médio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m e seu ataque causa 2d6+4 pontos de dano.\n\n+2 PM: o monstro ganha resistência 5 contra dois tipos de dano (por exemplo, corte e frio).\n\n+4 PM: o monstro ganha uma nova ordem: Arma de Sopro. O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade).\n\n+5 PM: aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2º círculo.\n\n+9 PM: o monstro ganha deslocamento de voo igual ao dobro do deslocamento.\n\n+9 PM: o monstro ganha imunidade contra dois tipos de dano.\n\n+9 PM: aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4º círculo.\n\n+14 PM: aumenta o tamanho do monstro para Colossal. Ele tem For 41, Des 10, 180 PV, deslocamento 15m e seu ataque causa 6d6+15 de dano com 9m de alcance. Requer 5º círculo."
		},
		Consagrar: {
			nome: "Consagrar",
			tipo: "Divina 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "esfera com 9m de raio",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia enche a área com energia positiva. Efeitos de luz que curam pontos de vida ou canalizam energia positiva têm seus efeitos maximizados.\n\nPor exemplo, Curar Ferimentos cura automaticamente 18 PV em alvos dentro da área. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar.\n\n+1 PM: além do normal, mortos-vivos na área sofrem –2 em testes e Defesa.\n\n+2 PM: aumenta as penalidades para mortos-vivos em –1.\n\n+9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo."
		},
		"Controlar Plantas": {
			nome: "Controlar Plantas",
			tipo: "Divina 1 (Transmutação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "quadrado com 9m de lado",
			duração: "cena",
			resistência: "Reflexos anula",
			descrição:
				"Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área.\n\nAquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo.\n\nAlém disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.\n\nTruque: muda a área para alvo de 1 planta e a resistência para nenhuma.\n\nEm vez do normal, você pode fazer a planta se mover como se fosse animada.\n\nEla não pode causar dano ou atrapalhar a concentração de um conjurador.\n\n+1 PM: muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não oferece camuflagem. Esse efeito dissipa o uso normal de Controlar Plantas.\n\n+1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis.\n\n+2 PM: muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias."
		},
		"Criar Elementos": {
			nome: "Criar Elementos",
			tipo: "Divina 1 (Convocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, podese criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra.\n\nÁgua: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo.\n\nAr: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada.\n\nFogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo.\n\nTerra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.\n\n+1 PM: aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).\n\n+1 PM: muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida.\n\n+2 PM: se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
		},
		"Criar Ilusão": {
			nome: "Criar Ilusão",
			tipo: "Arcana 1 (Ilusão)",
			círculo: "1",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "Vontade desacredita",
			descrição:
				"Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...).\n\nA magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.\n\n+1 PM: muda a duração para sustentada. A cada rodada você pode usar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.\n\n+1 PM: aumenta o efeito da ilusão em +1 cubo de 1,5m.\n\n+1 PM: também pode criar ilusões de imagem e sons combinados.\n\n+1 PM: também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito.\n\nCom uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance.\n\n+2 PM: também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m.\n\n+2 PM: muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão.\n\nCriaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo.\n\n+2 PM: também pode criar sensações táteis, como texturas; objetos ainda atravessam a ilusão, mas criaturas não conseguem atravessá-la sem passar em um teste de Vontade. A ilusão ainda é incapaz de causar ou sofrer dano.\nRequer 2º círculo.\n\n+5 PM: muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo."
		},
		"Curar Ferimentos": {
			nome: "Curar Ferimentos",
			tipo: "Divina 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada.\n\nCurar Ferimentos anula Infligir Ferimentos.\n\nTruque: em vez do normal, estabiliza uma criatura.\n\nTruque: muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).\n\n+1 PM: aumenta a cura em +1d8+1.\n\n+2 PM: também remove uma condição de fadiga do alvo.\n\n+2 PM: muda o alcance para curto.\n\n+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas."
		},
		Despedaçar: {
			nome: "Despedaçar",
			tipo: "Divina 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura ou objeto mundano Pequeno",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude parcial ou Reflexos anula",
			descrição:
				"Esta magia emite um som alto e agudo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (Fortitude reduz o dano à metade, evita o atordoamento e não pode mais ser atordoada por esta magia até o fim da cena). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído (Reflexos anula).\n\n+2 PM: aumenta o dano em +1d8+2.\n\n+2 PM: muda o alvo para objeto mundano Médio. Requer 2º círculo.\n\n+5 PM: muda o alvo para objeto mundano Grande. Requer 3º círculo.\n\n+9 PM: muda o alvo para objeto mundano Enorme. Requer 4º círculo.\n\n+14 PM: muda o alvo para objeto mundano Colossal. Requer 5º círculo.\n\n+5 PM: muda o alcance para pessoal e a área para esfera de 6m de raio. Todas as criaturas e objetos na área são afetados."
		},
		"Detectar Ameaças": {
			nome: "Detectar Ameaças",
			tipo: "Divina 1 (Adivinhação)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "",
			área: "esfera de 18m de raio",
			duração: "cena, até ser descarregada",
			resistência: "",
			descrição:
				"Você recebe uma intuição aguçada sobre perigos que podem estar à sua volta. Quando uma criatura hostil ou armadilha entra na área do efeito, você tem uma sensação de perigo e faz um teste de Percepção com a CD determinada pelo mestre de acordo com a situação. Se passar, sabe a origem (uma criatura ou armadilha), direção e distância do perigo. Se falhar, sabe apenas que o perigo existe.\n\n+1 PM: Você descobre também a raça ou espécie e o poder da criatura detectada (determinado pela aura delas). Criaturas de 1º a 6º nível geram uma aura tênue, criaturas de 7º a 12º nível geram uma aura moderada e criaturas de 13º ao 20º nível geram uma aura poderosa. Criaturas acima do 20º nível geram uma aura avassaladora.\n\n+2 PM: Além do normal, você não fica surpreso, nem desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resistência contra armadilhas. Requer 2º círculo.\n"
		},
		"Disfarce Ilusório": {
			nome: "Disfarce Ilusório",
			tipo: "Arcana 1 (Ilusão)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "Vontade desacredita",
			descrição:
				"Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada).\n\nTruque: muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, outra nascerá no local.\n\n+1 PM: muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação.\n\n+2 PM: muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade.\n\n+2 PM: a ilusão inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20.\n\n+3 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo."
		},
		Enfeitiçar: {
			nome: "Enfeitiçar",
			tipo: "Arcana 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 humanoide",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Esta magia torna o alvo prestativo (veja a página 118). Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível.\n\nVocê recebe um bônus de +10 em testes de Diplomacia com a vítima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).\n\n+2 PM: em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia.\n\nJá sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável.\n\nQuando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar.\n\n+5 PM: muda o alvo para 1 espírito ou monstro. Requer 3º círculo.\n\n+5 PM: afeta todos os alvos dentro do alcance."
		},
		"Escudo da fé": {
			nome: "Escudo da fé",
			tipo: "Divina 1 (Abjuração)",
			círculo: "1",
			execução: "reação",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "1 turno",
			resistência: "",
			descrição:
				"Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.\n\n+1 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena.\n\n+1 PM: também fornece ao alvo camuflagem contra ataques à distância.\n\n+2 PM: aumenta o bônus na Defesa em +1.\n\n+2 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se a qualquer momento o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo.\n\n+3 PM: muda a duração para 1 dia. Requer 2º círculo."
		},
		Escuridão: {
			nome: "Escuridão",
			tipo: "Universal 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 objeto",
			área: "",
			duração: "cena",
			resistência: "Vontade anula (veja texto)",
			descrição:
				"O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem por escuridão. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.\n\n+1 PM: aumenta a área da escuridão em +1,5m de raio.\n\n+2 PM: muda o efeito para fornecer camuflagem total por escuridão e as sombras bloqueiam a visão na área e através dela\n\n+2 PM: muda a duração para 1 dia.\n\n+2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo.\n\n+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem por escuridão. Requer 2º círculo."
		},
		"Explosão de Chamas": {
			nome: "Explosão de Chamas",
			tipo: "Arcana 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "6m",
			alvo: "",
			área: "cone",
			duração: "instantânea",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área.\n\nTruque: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.\n\n+1 PM: aumenta o dano em +1d6.\n\n+1 PM: muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, no Apêndice)."
		},
		Hipnotismo: {
			nome: "Hipnotismo",
			tipo: "arcana 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 animal ou humanoide",
			área: "",
			duração: "1d4 rodadas",
			resistência: "Vontade anula",
			descrição:
				"Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resistência. Se passar no teste de resistência, o alvo não pode mais ser fascinado por esta magia até o fim da cena.\n\nTruque: muda a duração para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura só pode ser afetada por este truque uma vez por cena.\n\n+1 PM: como o normal, mas se passarem na resistência os alvos não saberão que foram alvos de uma magia.\n\n+2 PM: muda o alvo para animais ou humanoides escolhidos.\n\n+2 PM: muda a duração para cena.\n\n+2 PM: muda o alcance para médio.\n\n+2 PM: também afeta espíritos e monstros na área. Requer 2º círculo.\n\n+5 PM: também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo.\n"
		},
		"Imagem Espelhada": {
			nome: "Imagem Espelhada",
			tipo: "Arcana 1 (Ilusão)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Três cópias ilusórias suas aparecem.\n\nAs duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).\n\n+2 PM: aumenta o número de cópias em +1 (e o bônus na Defesa em +2).\n\n+2 PM: além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada.\nRequer 2º círculo."
		},
		"Infligir Ferimentos": {
			nome: "Infligir Ferimentos",
			tipo: "Divina 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude reduz à metade",
			descrição:
				"Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos.\n\n+1 PM: além do normal, se falhar na resistência, o alvo fica fraco pela cena.\n\n+2 PM: aumenta o dano em 1d8+1.\n\n+2 PM: muda a resistência para nenhum, como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia.\n\n+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas."
		},
		"Leque Cromático": {
			nome: "Leque Cromático",
			tipo: "Arcana 1 (Ilusão)",
			círculo: "1",
			execução: "padrão",
			alcance: "4,5m",
			alvo: "",
			área: "cone",
			duração: "instantânea",
			resistência: "Vontade parcial",
			descrição:
				"Um cone de luzes brilhantes surge a partir das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada e ofuscados pela cena. Caso passem na resistência, não ficam atordoados e não podem mais ser atordoados por esta magia até o fim da cena. Esta magia não afeta criaturas cegas.\n\n+2 PM: além do normal, as criaturas afetadas ficam vulneráveis pela cena.\n\n+2 PM: também afeta espíritos e monstros na área. Requer 2º círculo.\n\n+5 PM: também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo.\n"
		},
		Luz: {
			nome: "Luz",
			tipo: "Universal 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 objeto",
			área: "",
			duração: "cena",
			resistência: "Vontade anula (veja texto)",
			descrição:
				"O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.\n\n+1 PM: aumenta a área iluminada em +3m de raio.\n\n+2 PM: muda a duração para 1 dia.\n\n+2 PM: muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2º círculo.\n\n+0 PM (Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas.\n\n+2 PM (Apenas Arcanos): muda o alcance para longo e o efeito para 4 esferas brilhantes. Cria esferas flutuantes de pura luz com 10cm de diâmetro, que você pode posicionar onde quiser dentro do alcance. Você pode enviar uma esfera à frente, outra para trás, outra para cima e manter uma perto de você, por exemplo. Uma vez por rodada, você pode mover as esferas com uma ação livre. Cada esfera ilumina como uma tocha, mas não produz calor. Se uma esfera ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo.\n\n+2 PM (Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Dentro da área seus aliados estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo.\n\n+5 PM (Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e resistência a trevas 10. Requer 2º círculo."
		},
		Névoa: {
			nome: "Névoa",
			tipo: "Universal 1 (Convocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada.\n\nEsta magia não funciona sob a água.\n\n+1 PM: a magia também funciona sob a água, criando uma nuvem de tinta.\n\n+2 PM: você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º círculo.\n\n+2 PM: além do normal, a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada.\n\n+2 PM: além do normal, a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido.\n\n+3 PM: aumenta o dano de ácido em +2d4.\n\n+5 PM: além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano."
		},
		Orientação: {
			nome: "Orientação",
			tipo: "Divina 1 (Adivinhação)",
			círculo: "1",
			execução: "movimento",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você oferece ajuda. Escolha um atributo — até o final da cena, sempre que o alvo fizer um teste de perícia baseada no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado.\n\nEsse benefício não se aplica a testes de ataque ou resistência.\n\nTruque: muda a execução para ação padrão e a duração para 1 rodada. O bônus vale para um único teste. Uma criatura só pode ser afetada por esse truque uma vez por dia.\n\n+5 PM: em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3º círculo.\n\n+5 PM: muda o alvo para criaturas escolhidas. Requer 3º círculo."
		},
		Perdição: {
			nome: "Perdição",
			tipo: "Divina 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "nenhuma",
			descrição:
				"Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.\n\n+2 PM: aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar."
		},
		"Primor Atlético": {
			nome: "Primor Atlético",
			tipo: "Arcana 1 (Transmutação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.\n\n+1 PM: além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30).\n\n+1 PM: além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala.\n\n+1 PM: muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto.\n\nSe fizer um ataque corpo a corpo contra essa criatura nesta rodada, recebe os benefícios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo durante este ataque.\n\n+3 PM: além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor.\n\nNão afeta testes de ataque ou resistência. Requer 2º círculo."
		},
		Profanar: {
			nome: "Profanar",
			tipo: "Divina 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "esfera com 9m de raio",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia enche a área com energia negativa. Efeitos que causam dano de trevas ou canalizam energia negativa têm seus efeitos maximizados dentro da área.\n\nEsta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar.\n\n+1 PM: além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes.\n\n+2 PM: aumenta os bônus para mortos-vivos em +1.\n\n+9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo."
		},
		"Proteção Divina": {
			nome: "Proteção Divina",
			tipo: "Divina 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.\n\n+2 PM: aumenta o bônus concedido em +1.\n\n+2 PM: muda a execução para reação, o alcance para curto e a duração para 1 rodada. Ao invés do normal, o alvo recebe +5 no próximo teste de resistência que fizer (cumulativo com o efeito básico desta magia)\n\n+2 PM: muda o alvo para área de círculo com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2º círculo.\n\n+5 PM: também torna o alvo imune a condições mentais e medo. Requer 3º círculo."
		},
		"Queda Suave": {
			nome: "Queda Suave",
			tipo: "Arcana 1 (Transmutação)",
			círculo: "1",
			execução: "reação",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "até chegar ao solo ou cena",
			resistência: "",
			descrição:
				"o que vier primeiro.\n\nO alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano.\n\nComo lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas.\n\nLançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão.\n\nQueda Suave só funciona em criaturas e objetos em queda livre ou similar; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador.\n\nTruque: muda o alvo para objeto com até 5kg. Em vez do normal, você pode gastar uma ação de movimento para levitar o alvo até 4,5m em qualquer direção.\n\n+2 PM: muda o alvo para até 10 criaturas ou objetos."
		},
		"Raio do Enfraquecimento": {
			nome: "Raio do Enfraquecimento",
			tipo: "Arcana 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Fortitude parcial",
			descrição:
				"Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica fatigado. Se passar, fica vulnerável.\n\nTruque: muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, ao tocar o alvo, sua mão emana um brilho púrpura. O alvo fica fatigado. Note que, como efeitos de magia não acumulam, lançar este truque duas vezes contra o mesmo alvo não irá deixá-lo exausto.\n\n+2 PM: em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo.\n\n+5 PM: em vez do normal, se falhar na resistência o alvo fica inconsciente. Se passar, fica exausto. Requer 3º círculo."
		},
		"Resistência a Energia": {
			nome: "Resistência a Energia",
			tipo: "Universal 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe resistência 10 contra a energia escolhida, passando a ignorar os 10 primeiros pontos de dano de cada ataque feito com essa energia (veja mais no Apêndice).\n\n+2 PM: aumenta a resistência em +5.\n\n+2 PM: muda a duração para 1 dia.\nRequer 2º círculo.\n\n+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo.\n\n+5 PM: muda o efeito para resistência a dano de todos os tipos de energia.\nRequer 3º círculo.\n\n+9 PM: muda o efeito para imunidade a um tipo de dano de energia. Requer 4º círculo."
		},
		Santuário: {
			nome: "Santuário",
			tipo: "Divina 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente até o fim da cena. Santuário não protege o alvo de efeitos de área.\n\nAlém disso, o próprio alvo também não pode fazer ações hostis (incluindo forçar outras criaturas a atacá-lo), ou a magia é dissipada — mas pode usar outras habilidades e magias de cura e suporte (como Curar Ferimentos, Bênção e assim por diante).\n\n+1 PM: além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas não inteligentes do tipo escolhido, não importando o sentido usado.\n\n+9 PM: também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área."
		},
		"Seta Infalível de Talude": {
			nome: "Seta Infalível de Talude",
			tipo: "Arcana 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causando 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo).\n\n+2 PM: muda as setas para lanças de energia que surgem e caem do céu.\n\nCada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo.\n\n+2 PM: muda o número de setas/lanças para três.\n\n+4 PM: muda o número de setas/lanças para cinco. Requer 2º círculo.\n\n+9 PM: muda o número de setas/lanças para dez. Requer 4º círculo."
		},
		Sono: {
			nome: "Sono",
			tipo: "Arcana 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 humanoide",
			área: "",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"Um cansaço místico recai sobre o alvo. Se falhar na resistência, ele fica inconsciente e caído ou, se estiver envolvido em combate ou em uma situação perigosa, fica exausto por 1 rodada, depois fatigado. Em ambos os casos, se passar, o alvo fica fatigado por 1d4 rodadas.\n\n+2 PM: alvos que falhem na resistência ficam exaustos por 1d4+1 rodadas, em vez de apenas 1.\n\n+2 PM: muda o alvo para criatura.\n\n+5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance.\n"
		},
		"Suporte Ambiental": {
			nome: "Suporte Ambiental",
			tipo: "Divina 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.\n\n+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas."
		},
		Teia: {
			nome: "Teia",
			tipo: "Arcana 1 (Convocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "cubo com 6m de lado",
			duração: "cena",
			resistência: "Reflexos anula",
			descrição:
				"Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil.\n\nA Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas (veja Condições, no Apêndice).\n\n+1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis.\n\n+2 PM: além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo.\n\n+2 PM: aumenta a área em +1 cubo de 1,5m."
		},
		"Toque Chocante": {
			nome: "Toque Chocante",
			tipo: "Arcana 1 (Evocação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude reduz à metade",
			descrição:
				"Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.\n\n+1 PM: aumenta o dano em 1d8+1.\n\n+2 PM: muda a resistência para nenhum, como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia.\n\n+2 PM: muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área."
		},
		"Tranca Arcana": {
			nome: "Tranca Arcana",
			tipo: "Arcana 1 (Abjuração)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 objeto Grande ou menor",
			área: "",
			duração: "permanente",
			resistência: "",
			descrição:
				"Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas.\n\nComponente material: chave de bronze no valor de T$ 25.\n\nTruque: muda o alcance para curto.\n\nEm vez do normal, pode abrir ou fechar um objeto de tamanho Médio ou menor, como uma porta ou baú. Não afeta objetos trancados.\n\n+1 PM: muda o alcance para curto e a duração para instantânea. Em vez do normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por Tranca Arcana (o efeito é dissipado) a sua escolha. Ela também afrouxa grilhões e solta correntes.\n\n+5 PM: aumenta a CD para abrir o alvo em +5.\n\n+5 PM: muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo."
		},
		Tranquilidade: {
			nome: "Tranquilidade",
			tipo: "Divina 1 (Encantamento)",
			círculo: "1",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 animal ou humanoide",
			área: "",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja Diplomacia no Capítulo 2) e não pode atacar ou realizar qualquer ação agressiva. Se passar, sofre –2 em testes de ataque. Qualquer ação hostil contra o alvo ou seus aliados dissipa a magia e faz ele retornar à atitude que tinha antes (ou pior, de acordo com o mestre).\n\n+1 PM: muda o alvo para 1 criatura.\n\n+1 PM: aumenta o número de alvos em +1.\n\n+5 PM: muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo."
		},
		"Transmutar Objetos": {
			nome: "Transmutar Objetos",
			tipo: "Arcana 1 (Transmutação)",
			círculo: "1",
			execução: "padrão",
			alcance: "toque",
			alvo: "matéria",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e custo máximo de T$ 5, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos, itens alquímicos ou venenos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. Transmutar Objetos anula Despedaçar.\n\nTruque: muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você pode alterar as propriedades físicas do objeto, como colorir, limpar ou sujar itens pequenos (incluindo peças de roupa), aquecer, esfriar e/ou temperar (mas não produzir) até 0,5kg de material inanimado (incluindo comida), ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cerâmica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto só pode ser afetado por este truque uma vez por dia.\n\n+2 PM: aumenta o limite de tamanho do objeto em uma categoria.\n\n+3 PM: aumenta o preço máximo do objeto criado em um fator de x10 (+3 PM por T$ 250 de preço, +6 PM por T$ 2.500 de preço, +9 PM por T$ 25.000 de preço e assim por diante).\n\n+1 PM: muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Em vez do normal, cura 2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8.\n\n+5 PM: muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3º círculo.\n\n+9 PM: como o aprimoramento anterior, mas passa a afetar itens mágicos."
		},
		"Visão Mística": {
			nome: "Visão Mística",
			tipo: "Universal 1 (Adivinhação)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar.\n\n+1 PM: recebe visão no escuro.\n\n+2 PM: muda a duração para 1 dia.\n\n+2 PM: também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas."
		},
		"Vitalidade Fantasma": {
			nome: "Vitalidade Fantasma",
			tipo: "Arcana 1 (Necromancia)",
			círculo: "1",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você suga energia vital da terra, recebendo 2d8 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.\n\n+2 PM: aumenta os PV temporários recebidos em +1d8. Caso a magia cause dano, ao invés disso, aumenta o dano causado em +1d8.\n\n+5 PM: muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d8 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo."
		}
	},
	2: {
		"Aliado Animal": {
			nome: "Aliado Animal",
			tipo: "Divina 2 (Encantamento)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 animal prestativo",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você cria um vínculo mental com um animal prestativo em relação a você.\n\nO Aliado Animal obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um aliado veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor.\n\n+1 PM: muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca no melhor de suas capacidades até um local designado por você — em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando.\n\n+7 PM: muda o aliado para mestre.\nRequer 3º círculo.\n\n+12 PM: muda o alvo para 2 animais prestativos. Cada animal funciona como um aliado de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de aliados de acordo com o seu nível de personagem). Requer 4º círculo."
		},
		"Alterar Tamanho": {
			nome: "Alterar Tamanho",
			tipo: "Arcana 2 (Transmutação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 objeto",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la.\n\n+1 PM: aumenta o número de alvos em +1.\n\n+2 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta de tamanho em uma categoria e seu equipamento para o adequado ao seu novo tamanho. O alvo também recebe Força +4. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito.\n\n+3 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo diminui de tamanho em uma categoria e seu equipamento para o adequado ao seu novo tamanho.\n\nO alvo também recebe Destreza +4.\n\nUm alvo involuntário pode fazer um teste de Fortitude para negar o efeito.\nRequer 3º círculo.\n\n+7 PM: muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m.\nRequer 4º círculo."
		},
		"Amarras Etéreas": {
			nome: "Amarras Etéreas",
			tipo: "Arcana 2 (Convocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Reflexos anula",
			descrição:
				"Três laços de energia surgem do chão e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia). Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a CD.\n\nOs laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todos os laços forem destruídos, a magia é dissipada. Por serem feitos de energia, os laços afetam criaturas incorpóreas.\n\n+2 PM: aumenta o número de alvos em +1.\n\n+2 PM: aumenta o número de laços em um alvo a sua escolha em +1.\n\n+3 PM: em vez do normal, cada laço é destruído automaticamente com um único ataque bem-sucedido; porém, cada laço destruído libera um choque de energia que causa 1d6+1 pontos de dano de essência na criatura amarrada.\nRequer 3º círculo."
		},
		"Aparência Perfeita": {
			nome: "Aparência Perfeita",
			tipo: "Arcana 2 (Ilusão)",
			círculo: "2",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor, deixando-o mais atraente e confiável. Enquanto a magia estiver ativa, seu Carisma torna-se 20 (ou recebe um bônus de +4, caso seja 20 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que “algo está errado” ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.\n\n+1 PM: muda o alcance para toque e o alvo para 1 humanoide."
		},
		Augúrio: {
			nome: "Augúrio",
			tipo: "Divina 2 (Adivinhação)",
			círculo: "2",
			execução: "completa",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados); “miséria” (a ação trará maus resultados); “felicidade e miséria” (para ambos) ou “nada” (para ações que não trarão resultados bons ou ruins).\n\nCom um resultado 1, a magia falha e oferece o resultado “nada”. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado.\n\nPor exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá “felicidade” se a câmara contém um tesouro desprotegido, “miséria” se contém um monstro, “felicidade e miséria” se houver um tesouro e um monstro ou “nada” se a câmara estiver vazia.\n\n+3 PM: muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 3º círculo.\n\n+7 PM: muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta.\n\nEm caso de falha, a resposta também é “não sei”. Requer 4º círculo.\n\n+7 PM: o mestre rola 1d12; a magia só falha em um resultado 1.\n\n+12 PM: o mestre rola 1d20; a magia só falha em um resultado 1."
		},
		"Bola de Fogo": {
			nome: "Bola de Fogo",
			tipo: "Arcana 2 (Evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "esfera com 6m de raio",
			duração: "instantânea",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.\n\n+2 PM: aumenta o dano em +2d6.\n\n+2 PM: muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada.\n\n+3 PM: muda a duração para 1 dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera de 6m de raio."
		},
		"Campo de Força": {
			nome: "Campo de Força",
			tipo: "Arcana 2 (Abjuração)",
			círculo: "2",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano de corte, impacto ou perfuração.\n\n+1 PM: muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe resistência 30 contra o próximo dano que sofrer até o fim do turno atual.\n\n+1 PM: aumenta os PV temporários em +5 ou a resistência a dano em +10.\n\n+7 PM: muda o alcance para curto e o alvo para 1 criatura ou objeto Enorme ou menor. Em vez do normal, cria uma esfera imóvel e tremeluzente com o tamanho do alvo e centrada nele. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas. Requer 4º círculo.\n\n+9 PM: como o aprimoramento acima, mas também muda a duração para sustentada. Tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo para qualquer local dentro de alcance longo. Requer 4º círculo."
		},
		"Camuflagem Ilusória": {
			nome: "Camuflagem Ilusória",
			tipo: "Arcana 2 (Ilusão)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem.\n\n+3 PM: a imagem do alvo fica mais distorcida, oferecendo camuflagem total.\n\n+7 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo."
		},
		"Círculo da Justiça": {
			nome: "Círculo da Justiça",
			tipo: "Divina 2 (Abjuração)",
			círculo: "2",
			execução: "completa",
			alcance: "curto",
			alvo: "",
			área: "cubo com 9m de lado",
			duração: "1 dia",
			resistência: "Vontade parcial",
			descrição:
				"Também conhecida como Lágrimas de Hyninn, esta magia é usada em tribunais e para proteger áreas sensíveis.\n\nCriaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir.\n\n+1 PM: muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis.\n\n+3 PM: muda a penalidade nas perícias para –10 (se passar na resistência) e –20 (se falhar). Requer 4º círculo.\n\n+7 PM: muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000)."
		},
		Condição: {
			nome: "Condição",
			tipo: "Divina 2 (Adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "até 5 criaturas",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Pela duração da magia, você sabe a posição e condição (PV atuais, se estão sob efeito de magia...) das criaturas escolhidas. Depois de lançada, a distância entre você e os alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou viajar para outro plano.\n\n+1 PM: aumenta o número de alvos em +1.\n\n+1 PM: aumenta a duração para 1 dia."
		},
		"Conjurar Mortos-Vivos": {
			nome: "Conjurar Mortos-Vivos",
			tipo: "Universal 2 (Necromancia)",
			círculo: "2",
			execução: "completa",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Seis esqueletos de tamanho Médio feitos de energia negativa emergem do chão em espaços desocupados escolhidos por você dentro do alcance. Você pode usar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos têm For 14, Des 14 e todos os outros atributos nulos; eles têm 1 PV, não têm valor de Defesa ou testes de resistência, falham automaticamente em qualquer teste oposto e são imunes a atordoamento, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desapare� cem quando são reduzidos a 0 PV ou no fim da cena. Os mortos-vivos não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.\n\n+2 PM: aumenta o número de mortos-vivos conjurados em +1.\n\n+3 PM: em vez de esqueletos, conjura carniçais. Requer 3º círculo.\n\n+7 PM: em vez de esqueletos, conjura sombras. Requer 4º círculo.\n\nCarniçal: como o esqueleto, mas tem For 16, Des 16, 12 PV e causa 1d8+3 pontos de dano de trevas mais 1d8 pontos de dano de veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude (CD igual à da magia) ou ficam paralisadas por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por 24 horas.\n\nSombra: como o esqueleto, mas tem a habilidade incorpóreo, Des 18, 30 PV e causa 1d10 pontos de dano de trevas mais 1d10 pontos de dano de frio.\n\nAlém disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude (CD igual à da magia) ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol."
		},
		"Controlar Fogo": {
			nome: "Controlar Fogo",
			tipo: "Divina 2 (Evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "veja texto",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos.\n\nChamejar: o alvo é armas escolhidas.\n\nElas causam +1d6 de dano de fogo.\n\nTambém afeta armas naturais e ataques desarmados.\n\nEsquentar: o alvo é 1 objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A critério do mestre, o objeto ou a criatura vestindo-o também podem pegar fogo.\n\nUma criatura pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito da magia.\n\nExtinguir: o alvo é 1 chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera de 3m de raio centrada onde estava a chama. Dentro da fumaça, criaturas têm camuflagem.\n\nModelar: o alvo é 1 chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só pode receber dano dessa maneira uma vez por rodada.\n\n+1 PM: muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação de movimento para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade).\n\n+2 PM: aumenta o dano em +1d6 (exceto Chamejar).\n\n+3 PM: muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6 pontos de dano."
		},
		"Controlar Madeira": {
			nome: "Controlar Madeira",
			tipo: "Divina 2 (Transmutação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 objeto de madeira Grande ou menor",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você molda, retorce, altera ou repele madeira. Ao lançar a magia, escolha.\n\nFortalecer: deixa o alvo mais resistente.\n\nArmas têm seu dano aumentado em um passo. Escudos têm seu bônus de Defesa aumentado em +2. Além disso, esses e outros itens de madeira recebem +5 na RD e dobram seus PV.\n\nModelar: muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar mecanismos complexos (como uma besta) ou itens consumíveis.\n\nRepelir: o alvo é repelido por você. Se for uma arma, ataques feitos com ela contra você falham automaticamente.\n\nSe for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja trancado. Uma carroça ou outro objeto que vá atingi-lo, como um tronco caindo ou barril, vai desviar ou simplesmente parar adjacente a você, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.\n\nRetorcer: torna o alvo imprestável. Uma porta retorcida emperra (exigindo um teste de Força contra CD 25 para ser aberta). Armas e itens retorcidos impõem uma penalidade de –2 em testes de perícia. Escudos retorcidos deixam de oferecer qualquer bônus (mas ainda impõem penalidades). Um barco retorcido começa a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.\n\nSe lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la.\n\n+1 PM: muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é dissipada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira.\n\n+3 PM: muda o alvo para área de quadrado com 9m de lado e a duração para cena. Em vez do normal, qualquer vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem 1d6 pontos de dano de corte para cada 1,5m que avancem.\n\n+7 PM: muda o alvo para objeto de madeira Enorme ou menor. Requer 3º círculo.\n\n+12 PM: muda o alvo para objeto de madeira Colossal ou menor. Requer 4º círculo."
		},
		"Crânio Voador de Vladislav": {
			nome: "Crânio Voador de Vladislav",
			tipo: "Arcana 2 (Necromancia)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude reduz à metade",
			descrição:
				"Esta magia cria um crânio humano envolto em energia negativa, que causa 4d8+4 pontos de dano de trevas quando atinge o alvo e se desfaz emitindo um som horrendo, podendo deixar abalados todos os inimigos num raio de 3m. Passar no teste de resistência diminui o dano pela metade e evita a condição abalado. Alvos que já estiverem abalados e falharem no teste ficam apavorados por 1d4 rodadas.\n\n+2 PM: aumenta o dano em +1d8+1.\n\n+2 PM: aumenta o número de alvos em +1."
		},
		"Desespero Esmagador": {
			nome: "Desespero Esmagador",
			tipo: "Arcana 2 (Encantamento)",
			círculo: "2",
			execução: "padrão",
			alcance: "6m",
			alvo: "",
			área: "cone",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"Humanoides na área são acometidos de grande tristeza, adquirindo as condições fraco e frustrado. Se passarem na resistência, adquirem essas condições por uma rodada.\n\n+2 PM: em vez do normal, as condições adquiridas são debilitado e esmorecido.\n\n+3 PM: em vez do normal, afeta qualquer tipo de criatura.\n\n+3 PM: além do normal, criaturas que falhem na resistência ficam aos prantos (em termos de jogo, adquirem a condição pasmo) por 1 rodada. Criaturas que passarem no teste de resistência não podem mais ficar pasmas por esta magia até o fim da cena. Requer 3º círculo."
		},
		"Dissipar Magia": {
			nome: "Dissipar Magia",
			tipo: "Universal 2 (Abjuração)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "1 criatura ou 1 objeto mágico ou esfera com 3m de raio",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misticismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (sem teste de resistência). Dissipar Magia não dissipa habilidades mágicas.\n\n+12 PM: muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de Vontade para evitar esse efeito). Requer 5º círculo."
		},
		"Enxame de Pestes": {
			nome: "Enxame de Pestes",
			tipo: "Divina 2 (Convocação)",
			círculo: "2",
			execução: "completa",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "Fortitude reduz à metade",
			descrição:
				"Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, mosquitos, ratos, morcegos ou serpentes, que surge em um ponto a sua escolha. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 2d12 pontos de dano de veneno a qualquer criatura em seu espaço (Fortitude reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.\n\n+2 PM: aumenta o dano em +1d12.\n\n+3 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfuração). O resto da magia segue normal.\n\n+5 PM: aumenta o número de enxames em +1. Eles não podem ocupar o mesmo espaço. Requer 3º círculo.\n\n+7 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre ácido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4º círculo."
		},
		"Esculpir Sons": {
			nome: "Esculpir Sons",
			tipo: "Arcana 2 (Ilusão)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura ou objeto",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer uma pessoa ficar com voz de passarinho). Você não pode criar sons que não conhece (não pode fazer uma criatura falar num idioma que não conheça). Uma vez que escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente não poderá lançar magias.\n\n+2 PM: aumenta o número de alvos em +1. Todas as criaturas e objetos devem ser afetadas da mesma forma."
		},
		"Físico Divino": {
			nome: "Físico Divino",
			tipo: "Divina 2 (Transmutação)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"O alvo se torna uma versão mais poderosa de si mesmo. O alvo recebe +4 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.\n\n+3 PM: muda o alcance para curto e o alvo para “criaturas escolhidas”. Requer 3º círculo.\n\n+3 PM: em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 3º círculo.\n\n+7 PM: em vez do normal, o alvo recebe +8 no atributo escolhido. Requer 4º círculo.\n\n+12 PM: em vez do normal, o alvo recebe +8 nos três atributos físicos. Requer 5º círculo.\n"
		},
		"Flecha Ácida": {
			nome: "Flecha Ácida",
			tipo: "Arcana 2 (Evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura ou objeto",
			área: "",
			duração: "instantânea",
			resistência: "Reflexos parcial",
			descrição:
				"Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo também fica coberto por um muco corrosivo durante duas rodadas, sofrendo mais 2d6 de dano de ácido no início de seus turnos.\n\nSe lançada contra um objeto livre (que não esteja em posse de uma criatura) a magia causa dano dobrado e ignora a RD do objeto.\n\n+1 PM: além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus (veja a perícia Ofício, na página 121).\n\n+2 PM: aumenta a redução na Defesa em +1.\n\n+2 PM: aumenta o dano inicial e o dano por rodada em +1d6."
		},
		"Globo da Verdade de Gwen": {
			nome: "Globo da Verdade de Gwen",
			tipo: "divina 2 (adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que outras pessoas a vejam.\n\n+1 PM: o globo mostra uma cena vista até um mês atrás.\n\n+2 PM: como acima, até um ano atrás.\n\n+2 PM: ao lançar a magia, você pode tocar um cadáver. O globo mostra a última cena vista por essa criatura.\n\n+4 PM: muda o alcance para longo e o efeito para 10 globos. Todos mostram a mesma cena."
		},
		Invisibilidade: {
			nome: "Invisibilidade",
			tipo: "Arcana 2 (Ilusão)",
			círculo: "2",
			execução: "livre",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "1 rodada",
			resistência: "",
			descrição:
				"O alvo fica invisível, incluindo seu equipamento. Ele recebe camuflagem total e +20 em testes de Furtividade. Como o normal, criaturas que não possam vê-lo ficam desprevenidas contra seus ataques.\n\nA magia termina se o alvo faz um ataque ou usa uma habilidade hostil.\n\nAções contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque.\n\nObjetos soltos pelo alvo voltam a ser visíveis e objetos apanhados por ele ficam invisíveis. Uma luz transportada pelo alvo nunca fica invisível (mesmo que sua fonte seja). Qualquer parte de um item carregado que se estenda além de seu alcance corpo a corpo natural se torna visível.\n\n+1 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou um objeto Grande ou menor.\n\n+3 PM: muda a duração para cena. Requer 3º círculo.\n\n+3 PM: muda a duração para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. O alvo e todas as criaturas a até 3m dele se tornam invisíveis, como no efeito normal da magia (ainda ficam visíveis caso façam uma ação hostial). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica visível. Requer 3º círculo.\n\n+7 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça um ataque ou use uma habilidade ofensiva. Requer 4º círculo."
		},
		"Ligação Telepática": {
			nome: "Ligação Telepática",
			tipo: "Arcana 2 (Adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "2 criaturas voluntárias",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você cria um elo mental entre duas criaturas com Inteligência 3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes.\n\n+2 PM: aumenta o número de alvos em +1.\n\n+3 PM: muda o alvo para 1 criatura.\n\nEm vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos da criatura, se gastar uma ação de movimento. Uma criatura involuntária pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3º círculo."
		},
		Localização: {
			nome: "Localização",
			tipo: "Arcana 2 (Adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "",
			área: "esfera com 90m de raio",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (“um elfo”, “algo de metal”) ou específicos (“Gwen, a elfa”, “uma espada longa”).\n\nA magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance.\n\nVocê pode movimentar-se para continuar procurando. Procurar algo muito específico (“a espada longa encantada do Barão Rulyn”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.\n\nTruque: muda a área para alvo você.\n\nEm vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.\n\n+5 PM: aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante)."
		},
		Mapear: {
			nome: "Mapear",
			tipo: "Arcana 2 (Adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "superfície ou objeto plano",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de 10km de lado.\n\nCaso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra.\n\n+3 PM: muda o alvo para 1 criatura e a duração para 1 hora. Em vez do normal, a criatura tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma masmorra (mas não para encontrar a localização de uma criatura ou objeto; a magia funciona apenas em relação a lugares). Caso a criatura demore mais de uma hora para percorrer o caminho, o conhecimento se perde."
		},
		"Marca da Obediência": {
			nome: "Marca da Obediência",
			tipo: "Universal 2 (Encantamento)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”. A criatura deve seguir essa ordem, gastando todas as ações de seu turno para isso. A ordem não pode ser genérica demais (como “ajude-me”, por exemplo), nem forçar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.\n\n+3 PM: muda a duração para 1 dia. Se não estiver em combate, a criatura só pode fazer o teste de Vontade a cada hora. Requer 3º círculo.\n\n+3 PM: sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano mental. Requer 3º círculo."
		},
		"Mente Divina": {
			nome: "Mente Divina",
			tipo: "Divina 2 (Adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você traz inspiração divina à mente do alvo. Escolha entre Inteligência, Sabedoria ou Carisma. O alvo recebe +4 no atributo escolhido. Esse aumento não oferece PV, PM ou perícias adicionais.\n\n+3 PM: muda o alcance para curto e o alvo para “criaturas escolhidas”. Requer 3º círculo.\n\n+3 PM: em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 3º círculo.\n\n+7 PM: em vez do normal, o alvo recebe +8 no atributo escolhido. Requer 4º círculo.\n\n+12 PM: em vez do normal, o alvo recebe +8 nos três atributos mentais. Requer 5º círculo.\n"
		},
		Metamorfose: {
			nome: "Metamorfose",
			tipo: "Arcana 2 (Transmutação)",
			círculo: "2",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam.\n\nSe mudar para uma forma humanoide, pode mudar o tipo de dano (entre corte, impacto e perfuração) de suas armas (se usa uma maça e transformá-la em espada longa, ela pode causar dano de corte, por exemplo).\n\nSe quiser, pode assumir uma forma humanoide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra.\n\nSe mudar para outras formas, você pode escolher uma Forma Selvagem do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe uma ou mais armas naturais e os bônus da forma selvagem escolhida.\n\n+1 PM: a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro.\n\n+3 PM: a forma escolhida recebe percepção às cegas (alcance curto). Requer 3º círculo.\n\n+3 PM: muda o alcance para toque, o alvo para 1 criatura e adiciona resistência (Vontade anula).\n\n+3 PM: muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.).\n\nA criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras características não mudam. No início de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna à sua forma normal e a magia termina. Requer 3º círculo.\n\n+5 PM: se mudar para formas não humanoides, pode escolher uma Forma Selvagem Aprimorada. Requer 3º círculo.\n\n+9 PM: se mudar para formas não humanoides, pode escolher uma Forma Selvagem Superior. Requer 4º círculo.\n\n+12 PM: além do normal, no início de seus turnos o alvo pode mudar de forma novamente, como uma ação livre, fazendo novas escolhas. Requer 5º círculo."
		},
		"Miasma Mefítico": {
			nome: "Miasma Mefítico",
			tipo: "Divina 2 (Necromancia)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "nuvem com 6m de raio",
			duração: "instantânea",
			resistência: "Fortitude (veja texto)",
			descrição:
				"A área é coberta por emanações letais.\n\nCriaturas na área sofrem 5d6 pontos de dano de veneno e ficam enjoadas por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas.\n\nTruque adiciona componente material: pó de ônix no valor de T$ 10. Muda o alcance para toque, a área para alvo (1 criatura com 0 PV ou menos), a duração para instantânea e a resistência para Fortitude anula. Em vez do normal, você canaliza o Miasma contra uma vítima. Se falhar na resistência, ela morre e você recebe +2 na CD de suas magias por 1 dia.\n\nSe passar, fica imune a este truque por um dia.\n\n+2 PM: aumenta o dano em +1d6.\n\n+3 PM: muda o tipo do dano para trevas."
		},
		"Montaria Arcana": {
			nome: "Montaria Arcana",
			tipo: "Arcana 2 (Convocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia convoca um cavalo de batalha que serve como um aliado montaria veterano. Sua aparência é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a Montaria Arcana pode atravessar terreno difícil sem redução em seu deslocamento. Você pode usar Misticismo no lugar de Cavalgar para efeitos desta montaria (incluindo ser considerado treinado, caso seja treinado em Misticismo).\n\n+1 PM: além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade.\n\nSe passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena.\n\n+3 PM: muda a duração para permanente e adiciona sacrifício de 1 PM.\n\n+3 PM: aumenta o tamanho da montaria em uma categoria. Isso também aumenta o número de criaturas que ela pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma única criatura controla a montaria; as outras apenas são deslocadas.\n\n+3 PM: muda o nível do aliado para mestre. Requer 3º círculo."
		},
		Oração: {
			nome: "Oração",
			tipo: "Divina 2 (Encantamento)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você e todos os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esses bônus e penalidades são cumulativos com outras magias.\nComponente Material: T$ 25 por PM gastos em incensos ou outras oferendas\n\n+2 PM: aumenta os bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.\n\n+2 PM: aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar.\n\n+7 PM: muda o alcance para médio.\nRequer 3º círculo.\n\n+12 PM: muda a duração para cena.\nRequer 4º círculo."
		},
		Purificação: {
			nome: "Purificação",
			tipo: "Divina 2 (evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Seu toque purifica a criatura tocada.\n\nEsta magia remove uma das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.\n\n+2 PM: também cura todo o dano causado por venenos.\n\n+2 PM: em vez de uma, remove todas as condições listadas.\n\n+3 PM: também permite que o alvo solte qualquer item amaldiçoado que esteja segurando (mas não remove a maldição do item em si).\n\n+7 PM: também dissipa magias e efeitos prejudiciais de encantamento, necromancia e transmutação afetando o alvo. Requer 3º círculo."
		},
		"Raio Solar": {
			nome: "Raio Solar",
			tipo: "Divina 2 (Evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "linha",
			duração: "instantânea",
			resistência: "Reflexos (veja texto)",
			descrição:
				"Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas.\n\nTruque: muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre.\n\n+2 PM: aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos).\n\n+3 PM: em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente.\n\n+3 PM: criaturas que falhem na resistência ficam cegas por 1d4 rodadas."
		},
		Refúgio: {
			nome: "Refúgio",
			tipo: "Arcana 2 (Abjuração)",
			círculo: "2",
			execução: "completa",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo.\n\nPorém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM.\n\n+1 PM: além do normal, os limites do domo são envoltos por uma fumaça escura e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação.\n\n+3 PM: em vez do normal, cria uma cabana que comporta até 10 criaturas Médias. Descansar nesse espaço concede recuperação confortável (recupera PV e PM igual ao dobro do nível).\n\nPara todos os efeitos é uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com bancos e uma lareira). A porta e as janelas têm 15 PV, RD 5 e são protegidas por um efeito idêntico à magia Tranca Arcana. As paredes têm 200 PV e RD 5.\n\n+3 PM: em vez do normal, cria um espaço extradimensional, similar a uma caverna vazia e escura, que comporta até 10 criaturas Médias. A entrada para o espaço precisa estar desenhada em um objeto fixo como uma grande pedra ou árvore. Qualquer criatura que atravesse a entrada consegue entrar no espaço. Nenhum efeito a partir do mundo real afeta o espaço e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espaço extradimensional surge no mundo real na área vazia mais próxima da entrada quando a duração da magia acaba. Requer 3º círculo.\n\n+9 PM: em vez do normal, cria uma mansão extradimensional que comporta até 100 criaturas Médias, com quartos luxuosos, comida e bebida e dez servos fantasmagóricos (como na magia Servos Invisíveis). Descansar na mansão concede recuperação luxuosa (recupera PV e PM igual ao triplo do nível). A mansão tem uma única entrada, uma porta feita de luz.\n\nVocê pode deixá-la visível ou invisível como uma ação livre e apenas criaturas escolhidas por você podem passar.\nRequer 4º círculo."
		},
		Relâmpago: {
			nome: "Relâmpago",
			tipo: "Arcana 2 (Evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "linha",
			duração: "instantânea",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.\n\n+2 PM: aumenta o dano em +2d6.\n\n+3 PM: muda a área para alvo (criaturas escolhidas). Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 6d6 pontos de dano de eletricidade. Requer 3º círculo."
		},
		"Rogar Maldição": {
			nome: "Rogar Maldição",
			tipo: "Divina 2 (Necromancia)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "sustentada",
			resistência: "Fortitude anula",
			descrição:
				"Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes.\n\nDebilidade: o alvo fica esmorecido e não pode se comunicar ou lançar magias.\n\nAinda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória.\n\nDoença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação).\n\nFraqueza: o alvo fica debilitado e lento.\n\nIsolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha.\n\nSe perder a visão, fica cego. Se perder a audição, fica surdo. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica caído e não pode se levantar.\n\nVocê também pode inventar sua própria maldição, usando esses exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.\n\n+3 PM: aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo.\n\n+7 PM: muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada.\nRequer 4º círculo."
		},
		"Runa de Proteção": {
			nome: "Runa de Proteção",
			tipo: "Universal 2 (Abjuração)",
			círculo: "2",
			execução: "1 hora",
			alcance: "toque",
			alvo: "uma área de 6m de raio",
			área: "",
			duração: "permanente até ser descarregada",
			resistência: "varia (veja o texto)",
			descrição:
				"Você escreve uma runa pessoal em uma superfície fixa, como uma parede ou o chão, que protege uma pequena área ao redor. Quando uma criatura entra na área afetada a runa explode, causando 6d6 pontos de dano em todos os alvos a até 6m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas.\n\nVocê pode determinar que a runa se ative apenas em condições específicas — por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar.\n\nUm personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem (CD da Magia).\n\nComponente material: pó de diamante no valor de T$ 200, com o qual o conjurador desenha a runa, que brilha por alguns instantes e depois se torna praticamente invisível.\n\n+1 PM: aumenta o dano em +2d6.\n\n+1 PM: muda o alvo para “você” e o alcance para “pessoal”. Ao invés do normal, escolha uma magia de 1º círculo que você conhece e pode lançar, com tempo de execução de uma ação padrão ou menor. Você escreve a runa em seu corpo e especifica uma condição de ativação como, por exemplo, “quando eu for alvo de um ataque” ou “quando for alvo de uma magia”. Quando a condição for cumprida, você pode ativar a runa e lançar a magia escolhida como uma reação. Você só pode escrever uma runa em seu corpo ao mesmo tempo.\n\n+3 PM: como o aprimoramento anterior, mas você pode escolher magias de 2º círculo. Requer 3º círculo.\n"
		},
		"Salto Dimensional": {
			nome: "Salto Dimensional",
			tipo: "Arcana 2 (Convocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "você",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Esta magia transporta você para outro lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.\n\n+1 PM: muda o alcance para médio.\n\n+1 PM: muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos.\n\n+2 PM: muda a execução para reação.\n\nEm vez do normal, você salta para um espaço adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo.\n\n+3 PM: muda o alcance para longo."
		},
		"Servos Invisíveis": {
			nome: "Servos Invisíveis",
			tipo: "Arcana 2 (Convocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "",
			duração: "1 cena",
			resistência: "",
			descrição:
				"Você cria até três servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo. Os servos podem ser usados para manter arrumada e organizada uma mansão ou pequena torre ou para preparar um acampamento nos ermos para você e seus aliados (veja a perícia Sobrevivência, na página 123).\n\nEles também podem ajudá-lo em tarefas mais complexas, como fazer uma pesquisa ou preparar uma poção, mas isso consome sua energia mágica. Você pode “gastar” um servo para receber um bônus não cumulativo de +2 em um teste de perícia (exceto testes de ataque e resistência). Os servos não são criaturas reais; não podem lutar, nem resistir a qualquer dano ou efeito que exija um teste de resistência ou teste oposto — falharão automaticamente no teste e serão destruídos.\n\n+2 PM: aumenta o número de servos conjurados em 1.\n\n+3 PM: você pode comandar os servos para realizar uma única tarefa no seu lugar. Em termos de jogo, eles passam automaticamente em um teste de perícia com CD máxima igual ao seu nível, +2 para cada servo conjurado. O tempo necessário para realizar a tarefa é o tempo do uso da perícia em questão.\nRequer 3º círculo."
		},
		Silêncio: {
			nome: "Silêncio",
			tipo: "Divina 2 (Ilusão)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "esfera com 6m de raio",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Um silêncio sepulcral recai sobre a área e nenhum som é produzido nela.\n\nEnquanto estiverem na área, todas as criaturas ficam surdas. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área.\n\n+1 PM: muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio.\n\nSe lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la.\n\n+2 PM: muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir e lançar magias com palavras mágicas normalmente."
		},
		"Soco de Arsenal": {
			nome: "Soco de Arsenal",
			tipo: "Divina 2 (Convocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude reduz à metade",
			descrição:
				"Ninguém sabe se Mestre Arsenal foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando 4d6 + mod. Força pontos de dano de impacto. A vítima é empurrada 3m na direção oposta à sua (ou 1,5m se passar na resistência).\n\n+1 PM: muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes.\n\nSeu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo.\n\n+2 PM: aumenta o dano em +1d6.\n\n+4 PM: aumenta a distância do efeito de empurrar em +3m.\n\n+5 PM: muda o tipo do dano para essência."
		},
		"Sopro Das Uivantes": {
			nome: "Sopro Das Uivantes",
			tipo: "Arcana 2 (Evocação)",
			círculo: "2",
			execução: "padrão",
			alcance: "9m",
			alvo: "",
			área: "cone",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência ficam caídas e são empurradas 6m na direção oposta. Se houver uma parede ou outro objeto sólido (mas não uma criatura) no caminho, a criatura para de se mover, mas sofre +2d6 pontos de dano de impacto.\n\n+2 PM: aumenta o dano de frio em +2d6.\n\n+3 PM: aumenta o tamanho máximo das criaturas afetadas em uma categoria.\nRequer 3º círculo."
		},
		"Sussurros Insanos": {
			nome: "Sussurros Insanos",
			tipo: "Arcana 2 (Encantamento)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 humanoide",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica confuso.\n\n+2 PM: aumenta o número de alvos em +1.\n\n+3 PM: muda o alvo para 1 criatura.\n\n+12 PM: muda o alvo para criaturas escolhidas. Requer 5º círculo."
		},
		"Tempestade Divina": {
			nome: "Tempestade Divina",
			tipo: "Divina 2 (Evocação)",
			círculo: "2",
			execução: "completa",
			alcance: "longo",
			alvo: "",
			área: "cilindro com 15m de raio e 15m de altura",
			duração: "sustentada",
			resistência: "",
			descrição:
				"A área fica sujeita a uma tempestade, causando –10 em testes de Percepção, –5 em testes de ataque à distância, apagando chamas e dissipando névoas. Uma vez por rodada, você pode gastar uma ação de movimento para fazer um relâmpago cair sobre uma criatura na área, causando 3d8 pontos de dano de eletricidade e deixando-a surda e ofuscada por uma rodada (Reflexos reduz à metade e evita as condições).\n\n+2 PM: a chuva se torna grossa, revelando a silhueta de criaturas invisíveis na área. Criaturas médias ou menores ficam lentas e criaturas voadoras precisam passar num teste de Atletismo (CD da magia) ou caem ao solo (mas podem fazer testes de Acrobacia para reduzir o dano de queda, como o normal).\n\n+3 PM: a chuva se torna uma nevasca, transformando a área afetada em terreno difícil e causando 3d6 pontos de dano de frio em todas as criaturas que iniciarem seus turnos dentro da área. Requer 3º círculo.\n\n+2 PM: aumenta o dano do relâmpago em +1d8 e o dano da nevasca em +1d6.\n"
		},
		"Toque Vampírico": {
			nome: "Toque Vampírico",
			tipo: "Arcana 2 (Necromancia)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude reduz à metade",
			descrição:
				"Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano).\n\n+1 PM: muda a resistência para nenhum, como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia.\n\n+2 PM: aumenta o dano em +2d6.\n\n+2 PM: muda o alcance para pessoal, o alvo para você e a duração para cena.\n\nEm vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 3º círculo."
		},
		Velocidade: {
			nome: "Velocidade",
			tipo: "Arcana 2 (Transmutação)",
			círculo: "2",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"O alvo pode realizar uma ação padrão ou de movimento adicional por turno.\n\nEsta ação não pode ser usada para lançar magias e ativar engenhocas.\n\n+0 PM: muda a duração para cena e você só pode fazer uma ação de movimento adicional (ainda exceto para lançar magias e ativar engenhocas). Uma criatura só pode receber uma ação adicional por turno como efeito de Velocidade.\n\n+7 PM: muda o alvo para criaturas escolhidas no alcance. Requer 4º círculo.\n\n+7 PM: muda o alcance para pessoal e o alvo para você. Você acelera sua mente, além de seu corpo. A ação adicional pode ser usada para lançar magias e ativar engenhocas. Requer 4º círculo."
		},
		"Vestimenta da fé": {
			nome: "Vestimenta da fé",
			tipo: "Divina 2 (Abjuração)",
			círculo: "2",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 traje",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você fortalece uma indumentária com o poder de sua fé. Isso aumenta o bônus de Defesa de uma armadura ou escudo em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). No caso de um traje, ele passa a oferecer +2 na Defesa e continua contando como se você não estivesse usando armadura.\n\n+3 PM: o objeto também oferece o mesmo bônus em testes de resistência. Requer 3º círculo.\n\n+4 PM: aumenta o bônus em +1.\n\n+7 PM: o objeto também oferece resistência a dano 5. Requer 4º círculo."
		},
		"Voz Divina": {
			nome: "Voz Divina",
			tipo: "Divina 2 (Adivinhação)",
			círculo: "2",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você pode conversar com criaturas de qualquer raça e tipo: animal, construto, espírito, humanoide, monstro ou morto-vivo. Pode fazer perguntas e entende suas respostas, mesmo sem um idioma em comum ou se a criatura não for capaz de falar, mas respeitando os limites da Inteligência dela. A atitude dessas criaturas não é alterada, mas você pode usar a perícia Diplomacia para tentar mudar sua atitude.\n\n+1 PM: você concede um pouco de vida a um cadáver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha sido destruída.\n\n+1 PM: você pode falar com plantas (normais ou monstruosas) e rochas.\n\nPlantas e rochas têm percepção limitada de seus arredores e normalmente fornecem respostas simplórias."
		}
	},
	5: {
		"Alterar Destino": {
			nome: "Alterar Destino",
			tipo: "Arcana 5 (Adivinhação)",
			círculo: "5",
			execução: "reação",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação.\n\nVocê automaticamente passa em um teste de resistência ou evita um ataque até o início de seu próximo turno."
		},
		Aprisionamento: {
			nome: "Aprisionamento",
			tipo: "Arcana 5 (Abjuração)",
			círculo: "5",
			execução: "completa",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "permanente",
			resistência: "Vontade anula",
			descrição:
				"Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece.\n\nMagias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000.\n\nAcorrentamento: o alvo é preso por correntes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio. Componente Material: uma fina corrente de mitral.\n\nContenção Mínima: o alvo diminui para uma altura de 2 centímetros e é preso dentro de uma pedra preciosa ou objeto semelhante. A luz pode passar através da pedra preciosa normalmente (permitindo que o alvo veja o lado de fora e outras criaturas o vejam), mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa, como um diamante ou rubi.\n\nPrisão Dimensional: o alvo é transportado para um pequeno semiplano protegido contra teletransporte e viagens planares. O semiplano pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada similar de sua escolha. Componente Material: uma representação em miniatura da prisão, feita de jade.\n\nSepultamento: o alvo é sepultado bem fundo abaixo da terra, dentro de uma esfera de força mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares.\n\nComponente Material: um pequeno orbe de adamante.\n\nSono Eterno: o alvo adormece e não pode ser acordado. Componente Material: fruta preparada com ervas soníferas raras.\n\nQuando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não.\n\nDissipar Magia pode dissipar o efeito, mas deve ser conjurada com o aprimoramento de 5º círculo e alvo na prisão (possível neste caso)."
		},
		"Aura Divina": {
			nome: "Aura Divina",
			tipo: "Divina 5 (Abjuração)",
			círculo: "5",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "",
			área: "esfera de 9m de raio",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"Você se torna um condutor direto da energia de sua divindade, emanando uma aura brilhante da cor que escolher.\n\nSeus aliados na área recebem +5 na Defesa e em testes de resistência (você e aliados devotos da mesma divindade que você recebem +10) e ficam imunes a encantamento. Além disso, inimigos que entrem na área afetada devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre esmorecido, debilitado ou lento até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área.\n\n+2 PM: aumenta os bônus na Defesa e em testes de resistência em +1."
		},
		"Barragem Elemental de Vectorius": {
			nome: "Barragem Elemental de Vectorius",
			tipo: "Arcana 5 (Evocação)",
			círculo: "5",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "",
			duração: "instantânea",
			resistência: "Reflexos parcial",
			descrição:
				"Criada pelo arquimago Vectorius, esta magia produz quatro esferas elementais (ácido, eletricidade, fogo e frio) que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano (cada uma do seu tipo) numa esfera com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus respectivos testes de resistência: • Esfera de ácido: vulnerável até o fim da cena.\n\n• Esfera elétrica: atordoado por uma rodada. Se passar no teste de resistência, a criatura não pode mais ser atordoada por esta magia até o fim da cena.\n\n• Esfera de fogo: em chamas.\n\n• Esfera de frio: lento até o fim da cena.\n\n+5 PM: aumenta o dano de cada esfera em +2d6.\n\n+5 PM: muda o tipo de dano de todas as esferas para essência (mas elas ainda causam os outros efeitos como se seu tipo de dano não mudasse)."
		},
		"Buraco Negro": {
			nome: "Buraco Negro",
			tipo: "Universal 5 (Convocação)",
			círculo: "5",
			execução: "completa",
			alcance: "longo",
			alvo: "",
			área: "",
			duração: "3 rodadas",
			resistência: "Fortitude parcial",
			descrição:
				"Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco.\n\nObjetos soltos também são puxados.\n\nCriaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que toquem o buraco negro são sugadas, desaparecendo para sempre.\n\nNão se conhece o destino das coisas sugadas pelo buraco negro, uma vez que jamais retornam. Alguns estudiosos sugerem que podem ser enviadas para outros mundos. Muitos clérigos de Tenebra acreditam que esta magia abre um portal para Sombria, o lar de sua deusa, e sonham um dia poder realizar essa jornada.\n\n+5 PM: muda o efeito para que criaturas escolhidas dentro do alcance não sejam afetadas."
		},
		"Chuva de Meteoros": {
			nome: "Chuva de Meteoros",
			tipo: "Arcana 5 (Convocação)",
			círculo: "5",
			execução: "completa",
			alcance: "longo",
			alvo: "",
			área: "quadrado com 18m de lado",
			duração: "instantânea",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Esta magia faz com que vários meteoros caiam dos céus devastando a área de impacto. Criaturas na área sofrem 15d6 pontos de dano de impacto e 15d6 de dano de fogo (um teste de Reflexos reduz o dano total pela metade). Criaturas que falhem no teste de resistência ficam caídas e presas sob os escombros (agarradas). Uma criatura presa pode escapar gastando uma ação padrão e passando em um teste de Atletismo (CD da magia). Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil, e imersa numa nuvem de poeira densa (camuflagem parcial). Esta magia só pode ser utilizada a céu aberto.\n\n+2 PM: aumenta o número de meteoros que atingem a área, o que aumenta o dano em +2d6 de impacto e +2d6 de fogo."
		},
		"Controlar o Tempo": {
			nome: "Controlar o Tempo",
			tipo: "Arcana 5 (Transmutação)",
			círculo: "5",
			execução: "padrão",
			alcance: "curto",
			alvo: "veja texto",
			área: "",
			duração: "veja texto",
			resistência: "",
			descrição:
				"Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir.\n\nCongelar o tempo: você entra em um estado atemporal que faz todas as criaturas e efeitos parecerem congelados.\n\nVocê pode agir livremente por 3 rodadas de tempo aparente. Durante essas rodadas, efeitos contínuos não o afetam, mas criaturas e objetos em posse de criaturas ficam imunes a seus ataques e magias. Magias de área e com duração maior que este efeito vão agir normalmente quando o congelamento acabar. Este efeito costuma ser usado para fortalecer suas defesas e invocar criaturas.\n\nSaltar no tempo: você e até 5 criaturas voluntárias são transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Vocês ressurgem no mesmo lugar, com a mesma velocidade e orientação; do seu ponto de vista, nenhum tempo se passou. Se um objeto sólido agora ocupa o espaço de uma criatura, ela ressurge na área vazia mais próxima.\n\nVoltar no tempo: você revive os últimos segundos. Todas as ações da rodada anterior são desfeitas (incluindo perda de PV e PM). Tudo retorna à posição em que estava no início do seu turno na última rodada e você é o único que sabe o que acontecerá. Todos os outros personagens envolvidos na cena devem repetir as mesmas ações — exceto se você fizer algo a respeito (como avisar seus aliados sobre o que vai acontecer)."
		},
		"Deflagração de Mana": {
			nome: "Deflagração de Mana",
			tipo: "Arcana 5 (Evocação)",
			círculo: "5",
			execução: "completa",
			alcance: "pessoal",
			alvo: "",
			área: "esfera de 15m de raio",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.\n\n+1 PM: aumenta o dano em 10.\n\n+5 PM: afeta apenas criaturas a sua escolha."
		},
		Desejo: {
			nome: "Desejo",
			tipo: "Arcana 5 (Transmutação)",
			círculo: "5",
			execução: "completa",
			alcance: "veja",
			alvo: "veja texto",
			área: "",
			duração: "veja texto",
			resistência: "veja texto",
			descrição:
				"Esta é a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Você pode: • Dissipa os efeitos de qualquer magia de 4º círculo ou menor.\n\n• Transportar até 10 criaturas voluntárias em alcance longo para qualquer outro local, em qualquer plano.\n\n• Desfazer um acontecimento recente.\n\nA magia permite que um teste realizado por uma criatura em alcance longo na última rodada seja realizado novamente. Por exemplo, se um aliado morreu na última rodada devido ao ataque de um inimigo, você pode obrigar o inimigo a refazer esse ataque.\n\nNormalmente, Desejo não exige sacrifício de PM — mas você pode desejar por algo mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como: • Criar um item mundano de até T$ 25.000.\n\n• Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.\n\n• Aumentar um atributo de uma criatura em +1. Um mesmo atributo pode ser aumentado em até +5 através do uso de Desejo.\n\nDesejo pode gerar efeitos ainda mais poderosos, mas tenha cuidado! Desejar a fortuna de um rei pode transportá-lo para a sala de tesouro real, onde você será preso ou morto; desejar ser imortal pode transformá-lo em morto-vivo, e assim por diante. Qualquer efeito que não encaixe na lista acima deve ser decidido pelo mestre."
		},
		"Engenho de Mana": {
			nome: "Engenho de Mana",
			tipo: "Arcana 5 (Abjuração)",
			círculo: "5",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Esta poderosa magia manifesta um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é intangível, imune a dano e não pode ser movido. Enquanto estiver ativo, tenta absorver qualquer magia lançada em alcance médio dele exceto as suas próprias, como uma ação automática de contramágica, usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, se estiver ao alcance do disco, você pode gastar PM guardados nele para lançar magias.\n\n+1 PM: em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente.\n\n+4 PM: muda a duração para 1 dia."
		},
		"Fúria do Panteão": {
			nome: "Fúria do Panteão",
			tipo: "Divina 5 (Evocação)",
			círculo: "5",
			execução: "completa",
			alcance: "longo",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "veja texto",
			descrição:
				"Você cria uma nuvem de tempestade terrível, com trovões e relâmpagos, que cobre os céus ou o teto de um local fechado, tendo você como centro. Inimigos na área têm a visibilidade reduzida (como a magia Névoa), e os ventos tornam ataques à distância impossíveis. Por fim, a área conta como condição terrível para conjuradores lançarem magias. No seu turno, você pode usar uma ação padrão para fazer um dos seguintes efeitos se manifestarem:\n\nInverno. A área é tomada por uma nevasca que causa 10d6 pontos de dano de frio aos inimigos e os deixa exaustos por uma rodada. Um teste de Fortitude reduz o dano pela metade e evita a condição. Toda a área fica coberta de neve, sendo transformada em terreno difícil até o fim da cena ou até você usar siroco.\n\nRaios. Até seis inimigos a sua escolha na área são atingidos por um relâmpago, sofrem 10d8 pontos de dano de eletricidade e ficam cegas por uma rodada. Um teste de Reflexos reduz o dano à metade e evita a condição.\n\nSiroco. Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d8 pontos de dano (metade corte, metade fogo) e ficam sangrando. Um teste de Fortitude reduz o dano à metade e evita a condição.\n\nTrovões. Explosões sonoras ribombam na área. Inimigos sofrem 10d6 pontos de dano de impacto e ficam surdos e desprevenidos por uma rodada. Um teste de Fortitude reduz o dano à metade e evita as condições.\n"
		},
		"Intervenção Divina": {
			nome: "Intervenção Divina",
			tipo: "Divina 5 (Convocação)",
			círculo: "5",
			execução: "completa",
			alcance: "veja",
			alvo: "veja texto",
			área: "",
			duração: "veja texto",
			resistência: "veja texto",
			descrição:
				"Você pede a sua divindade para interceder diretamente. Você pode: • Curar todos os PV e condições de até 10 criaturas em alcance longo.\n\n• Dissipar os efeitos de qualquer magia de 4º círculo ou menor.\n\nNormalmente, Intervenção Divina não exige sacrifício de PM — mas você pode implorar por algo mais poderoso.\n\nNesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como: • Criar um item mundano de até T$ 25.000.\n\n• Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.\n\n• Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto.\n\n• Ressuscitar uma criatura em alcance longo que tenha morrido há até uma rodada. A criatura acorda com 1 PV.\n\n• Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador."
		},
		Invulnerabilidade: {
			nome: "Invulnerabilidade",
			tipo: "Universal 5 (Abjuração)",
			círculo: "5",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia cria uma barreira mágica impenetrável que protege você contra efeitos nocivos mentais ou físicos, a sua escolha.\n\nProteção mental: você fica imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de efeitos de encantamento e ilusão.\n\nProteção física: você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de acertos críticos, ataques furtivos e doenças.\n\n+5 PM: muda o alcance para curto e o alvo para 1 criatura."
		},
		"Lágrimas de Wynna": {
			nome: "Lágrimas de Wynna",
			tipo: "Divina 5 (abjuração)",
			círculo: "5",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Vontade parcial",
			descrição:
				"Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada.\n\n+2 PM: muda a área para esfera de 6m de raio e o alvo para criaturas escolhidas.\n\n+5 PM: muda a execução para 1 dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução.\n\nAo término, faz um teste de Vontade.\n\nSe falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de reverter essa perda. Os clérigos de Wynna dizem que a deusa chora cada vez que este ritual é realizado."
		},
		Legião: {
			nome: "Legião",
			tipo: "Arcana 5 (Encantamento)",
			círculo: "5",
			execução: "padrão",
			alcance: "médio",
			alvo: "até 10 criaturas na área",
			área: "",
			duração: "sustentada",
			resistência: "Vontade parcial",
			descrição:
				"Você domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam pasmos por 1 rodada enquanto recuperam a consciência.\n\n+1 PM: aumenta o número de alvos em +1."
		},
		"Mata-Dragão": {
			nome: "Mata-Dragão",
			tipo: "Arcana 5 (Evocação)",
			círculo: "5",
			execução: "duas",
			alcance: "médio",
			alvo: "",
			área: "cone",
			duração: "instantânea",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área à sua frente, causando 20d12 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate.\n\nAlém disso, pode causar tantos danos colaterais que poucos conjuradores se arriscam a utilizá-la.\n\n+1 PM: aumenta o dano em 1d12."
		},
		"Palavra Primordial": {
			nome: "Palavra Primordial",
			tipo: "Universal 5 (Encantamento)",
			círculo: "5",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura com menos níveis que você",
			área: "",
			duração: "instantânea ou veja o texto",
			resistência: "Vontade parcial",
			descrição:
				"Você pronuncia uma palavra do idioma primordial da Criação, que causa um dos efeitos abaixo, a sua escolha.\n\nAtordoar: a criatura fica atordoada por 2d4 rodadas. Se passar no teste de resistência, fica desprevenida por 1d4 rodadas e não pode mais ser atordoada por esta magia até o final da cena.\n\nCegar: a criatura fica cega. Se passar no teste de resistência, fica ofuscada por 1d4 rodadas.\n\nMatar: a criatura morre. Além do teste de Vontade, a criatura tem direito a um teste de Fortitude se tiver mais da metade de seus pontos de vida. Se passar em qualquer um deles, em vez de morrer perde 10d8 pontos de vida e fica sangrando."
		},
		Possessão: {
			nome: "Possessão",
			tipo: "Arcana 5 (Encantamento)",
			círculo: "5",
			execução: "padrão",
			alcance: "longo",
			alvo: "1 criatura",
			área: "",
			duração: "1 dia",
			resistência: "Vontade anula",
			descrição:
				"Você projeta sua consciência no corpo do alvo. Enquanto possuir uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre.\n\n+5 PM: você ganha acesso às habilidades de raça e classe da criatura.\n\n+5 PM: enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode “saltar” de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência.\n\n+5 PM: muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no começo do dia para retomar seu corpo.\n\nSe passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída morrer e houver outra criatura em alcance curto, você pode tentar possuí-la como uma reação. Enquanto houver novos corpos para possuir, você é imortal!"
		},
		"Projetar Consciência": {
			nome: "Projetar Consciência",
			tipo: "Universal 5 (Adivinhação)",
			círculo: "5",
			execução: "padrão",
			alcance: "ilimitado",
			alvo: "local ou criatura conhecidos",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano.\n\nVocê adquire uma forma fantasmagórica invisível, mas pode se mostrar usando uma ação de movimento. Pode se mover em qualquer direção com deslocamento de voo 18m e, por ser incorpóreo, é capaz de atravessar objetos sólidos, mas fica limitado a se mover dentro dos limites do local, ou dentro de alcance curto da criatura alvo. Você pode ver e ouvir como se estivesse presente no local e pode falar mentalmente com qualquer criatura que possa ver, contanto que tenham um idioma em comum.\n\n+10 PM: além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada. Sua forma fantasmagórica funciona como na magia Forma Etérea, sendo afetada por magias de abjuração e essência, mas as magias que ela lança podem afetar criaturas corpóreas."
		},
		"Reanimação Impura": {
			nome: "Reanimação Impura",
			tipo: "Divina 5 (Necromancia)",
			círculo: "5",
			execução: "completa",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a seus comandos. Quando a cena termina, a criatura volta a ficar morta, mas muitos clérigos malignos usam meios para guardar e preservar o corpo de criaturas poderosas para serem reanimadas dessa forma quando necessário. Se for destruída, a criatura não pode ser reanimada novamente com esta magia."
		},
		Réquiem: {
			nome: "Réquiem",
			tipo: "Arcana 5 (Ilusão)",
			círculo: "5",
			execução: "completa",
			alcance: "curto",
			alvo: "criaturas escolhidas",
			área: "",
			duração: "sustentada",
			resistência: "Vontade anula",
			descrição:
				"Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia."
		},
		"Roubar a Alma": {
			nome: "Roubar a Alma",
			tipo: "Universal 5 (Necromancia)",
			círculo: "5",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "permanente",
			resistência: "Vontade parcial",
			descrição:
				"Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica abalado por 1 rodada. Se falhar, seu corpo fica caído, inconsciente e inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível ou ND da criatura e não possuir uma alma presa ou se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de “nível” dentro do mundo de jogo, podem ter noção do poder geral de uma criatura específica, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Mundos dos Deuses.\n\nCusto adicional: sacrifício de 1 PM.\n\n+5 PM: o objeto que abriga a alma detém os mesmos PM totais que o alvo.\n\nSe estiver empunhando o objeto, você pode usar esses PM para lançar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal.\n\n+10 PM: como uma reação ao lançar esta magia, você possui o corpo sem alma do alvo, como na magia Possessão (mesmo que não conheça a magia)."
		},
		"Segunda Chance": {
			nome: "Segunda Chance",
			tipo: "Divina 5 (Evocação)",
			círculo: "5",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Um brilho alaranjado, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.\n\n+1 PM: aumenta a cura em +20 PV.\n\n+2 PM: muda o alcance para curto e o alvo para até 5 criaturas.\n\n+5 PM: muda o alvo para uma criatura que tenha morrido há até uma rodada.\n\nEsta magia pode curá-la."
		},
		Semiplano: {
			nome: "Semiplano",
			tipo: "Arcana 5 (Convocação)",
			círculo: "5",
			execução: "completa",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você cria um semiplano — uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 1 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por 200kg.\n\nUma vez no semiplano, você pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia Viagem Planar, pode lançá-la para voltar ao plano material em outro local.\n\nVocê escolhe a forma e a aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem.\n\n+2 PM: adiciona alvo (1 criatura).\n\nVocê cria uma semiplano labiríntico e expulsa o alvo para ele. A cada rodada, a vítima tem direito a um teste de Investigação ou Sobrevivência (CD da magia) para escapar do labirinto, com bônus cumulativo de +2 para cada teste já realizado. Quando o alvo escapa, a magia termina e o alvo reaparece no plano material no mesmo local onde estava quando a magia foi lançada. Magias como Salto Dimensional e Tele­ trans­ porte não ajudam a escapar do labirinto, mas Viagem Planar, sim.\n\n+5 PM: muda a duração para permanente e adiciona componente material (diorama do semiplano feito de materiais preciosos no valor de T$ 5.000).\n\nVocê pode lançar a magia diversas vezes para aumentar as dimensões do semiplano em +30m de lado a cada vez."
		},
		"Sombra Assassina": {
			nome: "Sombra Assassina",
			tipo: "Arcana 5 (Ilusão)",
			círculo: "5",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"Esta magia cria uma duplicata ilusória do alvo na forma de uma silhueta, ligada a ele como se fosse uma manifestação sólida de sua própria sombra. A duplicata de sombras segue automaticamente o alvo. Sempre que o alvo faz uma ação hostil — fazer um ataque, usar uma habilidade, lançar uma magia — a sombra imediatamente realiza a mesma ação contra o alvo, usando as mesmas estatísticas e rolagens. A sombra pode ser atacada, tem as mesmas estatísticas do alvo e é destruída quando chega a 0 PV. Se o alvo passar no teste de resistência, a sombra desaparece no final do turno do alvo, depois de copiar sua ação dessa rodada.\n\n+10 PM: muda o alvo para criaturas escolhidas na área."
		},
		"Toque da Morte": {
			nome: "Toque da Morte",
			tipo: "Universal 5 (Necromancia)",
			círculo: "5",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Sua mão exala energias letais. Se a criatura tocada falhar no teste de Fortitude, seus PV são reduzidos a –10; se passar, sofre 10d8 pontos de dano de trevas.\n\n+2 PM: muda o alcance para curto.\n\nEm vez de tocar no alvo, você dispara um raio púrpura da ponta de seu dedo indicador.\n\n+10 PM: muda o alcance para curto e o alvo para inimigos no alcance. Em vez de tocar no alvo, você dispara raios púrpuras da ponta de seus dedos."
		}
	},
	4: {
		"Alterar Memória": {
			nome: "Alterar Memória",
			tipo: "Arcana 4 (Encantamento)",
			círculo: "4",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Vontade anula",
			descrição:
				"Você invade a mente do alvo e altera ou apaga suas memórias da última hora.\n\n+2 PM: muda o alcance para cone de 4,5m e o alvo para criaturas na área.\n\n+5 PM: você pode alterar ou apagar as memórias das últimas 24 horas."
		},
		"Animar Objetos": {
			nome: "Animar Objetos",
			tipo: "Arcana 4 (Transmutação)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "até 8 objetos Minúsculos ou Pequenos",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você concede vida a objetos inanimados. Cada objeto se torna um aliado sob seu controle. O tipo dele é escolhido da lista de tamanho e ele não conta em seu limite de aliados. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura neste turno.\n\nOutros usos criativos para os objetos ficam a cargo do mestre. Objetos animados têm valores de Força, Destreza de acordo com seu tamanho e todos os outros atributos nulos; eles têm PV de acordo com seu tamanho, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto, e são imunes a doenças, fadiga, sangramento, sono e veneno.\n\nDiferente de aliados comuns, um objeto pode ser alvo de um ataque direto.\n\nEsta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.\n\n+5 PM: muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível.\n\nEstatísticas de objetos animados Minúsculo: For 4, Des 18, 5 PV; Assassino ou Combatente Iniciante.\n\nPequeno: For 6, Des 14, 10 PV; Combatente ou Guardião Iniciante.\n\nMédio: For 10, Des 12, 20 PV; Combatente ou Guardião Veterano.\n\nGrande: For 14, Des 10, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano.\n\nEnorme: For 18, Des 6, 60 PV; Fortão, Guardião ou Montaria (cavalo) Mestre."
		},
		"Assassino Fantasmagórico": {
			nome: "Assassino Fantasmagórico",
			tipo: "Arcana 4 (Necromancia)",
			círculo: "4",
			execução: "padrão",
			alcance: "longo",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Fortitude parcial.\n\nUsando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio.\n\nO espectro surge adjacente a você e flutua em direção à vítima com deslocamento total de voo 18m por turno.\n\nEle é incorpóreo e imune a magias (exceto magias que dissipam outras).\n\nSe o espectro terminar seu turno em alcance curto da vítima, ela deve fazer um teste de Vontade. Se falhar, ficará abalada.\n\nSe o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com –1 PV e sangrando.\n\nO espectro persegue o alvo implacavelmente. Ele só desaparece se deixar seu alvo inconsciente, se for dissipado ou ao término da cena."
		},
		"Campo Antimagia": {
			nome: "Campo Antimagia",
			tipo: "Arcana 4 (Abjuração)",
			círculo: "4",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você é cercado por uma barreira invisível com 3m de raio que acompanha seus movimentos. Qualquer magia ou habilidade mágica ou item mágico que entre na área da barreira é suprimida enquanto estiver lá.\n\nCriaturas convocadas que entrem em um Campo Antimagia desaparecem.\n\nElas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado.\n\nCriaturas mágicas, como elementais, ou construtos imbuídos com magia durante sua criação, como golens, não são diretamente afetados pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele.\n\nMagias que dissipam outras magias, como Dissipar Magia, não dissipam um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia."
		},
		"Círculo da Restauração": {
			nome: "Círculo da Restauração",
			tipo: "Divina 4 (Evocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "esfera de 3m de raio",
			duração: "5 rodadas",
			resistência: "",
			descrição:
				"Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura que tenha recuperado PM por esta magia (até o limite de rodadas) não recupera mais PM por meio dela por um dia.\n\n+2 PM: aumenta a regeneração de PV em 1d8+1."
		},
		"Cólera de Azgher": {
			nome: "Cólera de Azgher",
			tipo: "Divina 4 (evocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "esfera com 6m de raio",
			duração: "instantânea",
			resistência: "Reflexos parcial",
			descrição:
				"Você cria uma explosão de luz dourada e intensa. Criaturas na área ficam cegas por 1d4 rodadas, pegam fogo e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega, não pega fogo e sofre metade do dano.\n\n+2 PM: aumenta o dano em +2d6 (+2d8 contra mortos-vivos).\n\n+2 PM: aumenta a área em +6m de raio.\n\n+5 PM: a luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na área. Requer 5º círculo."
		},
		"Conceder Milagre": {
			nome: "Conceder Milagre",
			tipo: "Divina 4 (Encantamento)",
			círculo: "4",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "permanente até ser descarregada",
			resistência: "",
			descrição:
				"Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo base dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia que ganhou.\n\n+4 PM: muda o círculo da magia concedida para 3º e a penalidade de PM para –6."
		},
		"Conjurar Elemental": {
			nome: "Conjurar Elemental",
			tipo: "Arcana 4 (Convocação)",
			círculo: "4",
			execução: "completa",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um aliado mestre do tipo destruidor (cuja habilidade custa apenas 2 PM para ser usada) e mais um tipo entre os indicados na lista abaixo. Somente você pode ser auxiliado pelo elemental e ele não conta em seu limite de aliados.\n\nAr: assassino, perseguidor ou vigilante.\n\nDano de eletricidade.\n\nÁgua: ajudante, guardião ou médico.\n\nDano de frio.\n\nFogo: atirador, combatente ou fortão.\n\nDano de fogo.\n\nTerra:combatente, guardião ou montaria.\n\nDano de impacto.\n\n+5 PM: o elemental muda para Enorme e recebe dois tipos de aliado indicados no seu elemento.\n\n+5 PM: você convoca um elemental de cada tipo. Você pode ordenar que cada elemental auxilie você ou seus aliados. Requer 5º círculo."
		},
		"Controlar a Gravidade": {
			nome: "Controlar a Gravidade",
			tipo: "Arcana 4 (Transmutação)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "cubo de 12m de lado",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode usar uma ação padrão para mudar o efeito.\n\nAumentar: a gravidade fica mais forte.\n\nNo início de seus turnos, cada criatura na área deve fazer um teste de Atletismo.\n\nSe passar, fica fatigada. Se falhar, fica fatigada e caída.\n\nInverter: inverte a gravidade da área, fazendo com que criaturas e objetos “caiam” para cima, atingindo o topo (12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de “queda”. Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam ﬂutuando no topo da área afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Alguém adjacente a algo que possa agarrar tem direito a um teste de Reﬂexos para evitar a “queda”. A criatura deve permanecer presa pela duração da magia; caso contrário “cairá”.\n\nReduzir: a gravidade fica mais leve. Criaturas ou objetos livres com até 100kg ﬂutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 de bônus em testes de Atletismo para escalar e saltar. Uma criatura levitando fica instável, sofrendo –2 de penalidade em testes de ataque."
		},
		"Controlar o Clima": {
			nome: "Controlar o Clima",
			tipo: "Divina 4 (Transmutação)",
			círculo: "4",
			execução: "completa",
			alcance: "2km",
			alvo: "",
			área: "esfera com 2km de raio",
			duração: "4d12 horas",
			resistência: "",
			descrição:
				"Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos em jogo do clima.\n\n+1 PM (Apenas Druidas): muda o raio da área para 3km e duração para 1d4 dias."
		},
		"Cúpula de Repulsão": {
			nome: "Cúpula de Repulsão",
			tipo: "Divina 4 (Abjuração)",
			círculo: "4",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura com uma limitação específica, como animais mamíferos, monstros insetoides ou mortos-vivos corpóreos; ou uma raça, como elfos, goblins ou minotauros. Criaturas com o tipo e a limitação escolhidos (ou com a raça escolhida) não podem se aproximar a até 3m de você. Isso detém ataques corpo a corpo, mas não ataques à distância ou magias. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é dissipada.\n\n+1 PM: você pode se aproximar sem romper a cúpula.\n\n+4 PM: como normal, mas você pode escolher um tipo de criaturas sem limitação (todos os animais, todos os monstros etc.).\n\n+8 PM: muda a duração para sustentada. Além do normal, qualquer ataque, magia ou habilidade de uma criatura afetada é desviado pelo efeito e não o atinge. Requer 5º círculo."
		},
		Desintegrar: {
			nome: "Desintegrar",
			tipo: "Arcana 4 (Transmutação)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura ou objeto",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano.\n\nIndependentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.\n\n+4 PM: aumenta o dano total em +2d12 e o dano mínimo em +1d12."
		},
		"Duplicata Ilusória": {
			nome: "Duplicata Ilusória",
			tipo: "Arcana 4 (Ilusão)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você cria uma cópia ilusória semirreal de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se verá e ouvirá através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala.\n\nQualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, você deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais.\n\nA cópia desaparece se sair do alcance.\n\n+3 PM: cria uma cópia adicional."
		},
		"Explosão Caleidoscópica": {
			nome: "Explosão Caleidoscópica",
			tipo: "Arcana 4 (Ilusão)",
			círculo: "4",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "esfera de 6m de raio",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do ND dela.\n\nND 4 ou menor: se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena.\n\nND entre 5 e 9: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.\n\nND 10 ou maior: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada. Criaturas que passem em seus testes de resistência não poderão mais ser atordoadas por esta magia até o fim da cena."
		},
		"Forma Etérea": {
			nome: "Forma Etérea",
			tipo: "Arcana 4 (Transmutação)",
			círculo: "4",
			execução: "completa",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico). Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (pode alterar entre visível e invisível como ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração e essência afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma ação de movimento, encerrando a magia. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento.\n\n+5 PM: muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas podem soltar as mãos. Requer 5º círculo."
		},
		"Guardião Divino": {
			nome: "Guardião Divino",
			tipo: "Divina 4 (Convocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "cena ou até ser descarregado",
			resistência: "",
			descrição:
				"A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz.\n\nUma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável). A magia é encerrada quando o elemental fica sem pontos de luz."
		},
		Libertação: {
			nome: "Libertação",
			tipo: "Universal 4 (abjuração)",
			círculo: "4",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"O alvo fica imune a condições de paralisia e ignora qualquer efeito que impeça ou restrinja seu deslocamento.\n\nPor fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo.\n\n+2 PM: além do normal, o alvo pode caminhar sobre a água ou outros líquidos com seu deslocamento normal. Entretanto, isso não protege contra qualquer efeito que o líquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano).\n\n+2 PM: além do normal, o alvo pode escolher 20 em todos os testes de Atletismo.\n\n+2 PM: além do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta perícia mesmo sem treinamento.\n\n+5 PM: muda o alcance para curto e o alvo para até 5 criaturas.\n\n+5 PM: pode dissipar Aprisionamento."
		},
		"Ligação Sombria": {
			nome: "Ligação Sombria",
			tipo: "Divina 4 (Necromancia)",
			círculo: "4",
			execução: "padrão",
			alcance: "longo",
			alvo: "1 criatura",
			área: "",
			duração: "1 dia",
			resistência: "Fortitude anula",
			descrição:
				"Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo desta magia deve fazer um teste de Fortitude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida.\n\n+5 PM: além do normal, o alvo também pode morrer por perda de PV ou se você morrer (um teste de Fortitude anula a morte)."
		},
		"Manto do Cruzado": {
			nome: "Manto do Cruzado",
			tipo: "Divina 4 (Evocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você invoca a energia sagrada de sua divindade na forma de um manto de energia sólida que reveste seu corpo.\n\nEsta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende esta magia. Ela não pode ser mudada.\n\nManto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você fica imune a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz.\n\nManto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 2d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia."
		},
		"Mão Poderosa de Talude": {
			nome: "Mão Poderosa de Talude",
			tipo: "Arcana 4 (Convocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Esta magia cria uma mão flutuante de tamanho Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir.\n\nAgarrar: a mão usa uma manobra agarrar contra o oponente, usando o Misticismo do conjurador com um bônus adicional de +10. A mão mantém o oponente agarrado, mas não causa dano.\n\nEsmagar: a mão esmaga um oponente já agarrado, causando 2d6+12 pontos de dano.\n\nEmpurrar: a mão afasta o oponente, usando uma manobra empurrar usando o Misticismo do conjurador com um bônus adicional de +10. A mão sempre acompanha o oponente para empurrá-lo até a distância máxima que conseguir, dentro do alcance da magia.\n\n+3 PM: aumenta o bônus dos testes em +5 e o dano de impacto em +1d6+6."
		},
		Marionete: {
			nome: "Marionete",
			tipo: "Arcana 4 (Encantamento)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura",
			área: "",
			duração: "sustentada",
			resistência: "Fortitude anula",
			descrição:
				"Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, a vítima faz um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece à sua volta, podendo ver, ouvir e até falar com certo esforço (mas não para lançar magias).\n\nContudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz.\n\nVocê precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlá-la — mas ela estará paralisada até que o conjurador recupere o controle ou a magia termine."
		},
		"Muralha de Ossos": {
			nome: "Muralha de Ossos",
			tipo: "Universal 4 (Necromancia)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar sempre tocando o solo. Quando a parede surge, criaturas na área ocupada ou adjacentes sofrem 4d8 pontos de dano de corte e precisam fazer um teste de Reflexos para não ficarem presas no emaranhado de ossos afiados. Uma criatura presa dessa maneira fica agarrada (desprevenida e imóvel), e pode usar uma ação padrão para fazer um teste de Atletismo (CD da magia) para tentar se soltar. Se passar no teste, sai da muralha para um dos lados adjacentes. Se falhar, sofre 4d8 pontos de dano de corte.\n\nÉ possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e resistência a corte, frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo (CD da magia) e causa 4d8 pontos de dano de corte para cada 3m escalados.\n\n+3 PM: aumenta o comprimento em +15m e altura em +3m (máximo de 60m de comprimento e 15m de altura).\n\n+5 PM: o muro é feito de uma massa de esqueletos animados. Sempre que uma criatura iniciar seu turno adjacente ou escalando a muralha, ela deve fazer um teste de Reflexos. Se falhar fica agarrada, sofrendo os efeitos normais de estar agarrada pela magia.\n"
		},
		Premonição: {
			nome: "Premonição",
			tipo: "Divina 4 (Adivinhação)",
			círculo: "4",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode usar uma reação para rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem.\n\n+3 PM: muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a duração para instantânea. Esta magia só pode ser usada em uma criatura que tenha acabado de fazer um teste. Obriga a criatura a fazer uma nova rolagem de dados e aceitar o novo resultado, seja ele um sucesso ou falha. Criaturas involuntárias têm direito a um teste de Vontade para negar o efeito.\n\n+5 PM: muda a duração para 1 dia."
		},
		"Raio Polar": {
			nome: "Raio Polar",
			tipo: "Arcana 4 (Evocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (paralisado). Se passar no teste de resistência, sofre metade do dano e, em vez de paralisado, fica lento por uma rodada.\n\nÉ possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, resistência a dano 10 e é vulnerável a fogo. Uma criatura presa pode usar uma ação completa para fazer um teste de Atletismo (com a mesma CD para resistir à magia) e tentar se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.\n\n+3 PM: aumenta o dano em +2d8.\n\n+5 PM: muda o alvo para área de esfera de 6m de raio. Em vez de um raio, você dispara uma esfera de gelo que explode, causando o efeito da magia em todas as criaturas na área."
		},
		"Relâmpago Flamejante de Reynard": {
			nome: "Relâmpago Flamejante de Reynard",
			tipo: "Arcana 4 (Evocação)",
			círculo: "4",
			execução: "completa",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Esta é uma magia poderosa, desenvolvida pelo metódico e impassível arquimago Reynard. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fique em chamas e a outra mão eletrificada. Pela duração da magia, você pode usar uma ação de movimento para disparar uma bola de fogo (6d6 pontos de dano de fogo numa explosão de 6m de raio) ou um relâmpago (6d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (12d12 pontos de dano, metade de fogo e metade de eletricidade, numa explosão de 6m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido de nenhuma maneira.\n\n+3 PM: aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12.\n"
		},
		Sonho: {
			nome: "Sonho",
			tipo: "Arcana 4 (Adivinhação)",
			círculo: "4",
			execução: "10",
			alcance: "ilimitado",
			alvo: "1 criatura viva",
			área: "",
			duração: "veja texto",
			resistência: "",
			descrição:
				"Você entra nos sonhos de uma criatura. Uma vez lá, pode conversar com ela até que ela acorde. Se o alvo não estiver dormindo quando você lançar a magia, você pode permanecer em transe até que ele adormeça. Durante o transe, você fica indefeso e sem consciência dos arredores. Você pode sair do transe quando quiser, mas a magia termina.\n\n+2 PM: transforma o sonho do alvo em um pesadelo. A vítima deve fazer um teste de Vontade. Se falhar, não recupera PV ou PM pela noite, sofre 1d10 pontos de dano de trevas e acorda fatigada. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela. Use os mesmos modificadores da magia Vidência.\n\n+1 PM: aumenta o número de alvos em +1. Todos os alvos compartilham um mesmo sonho (ou pesadelo) entre si e com você."
		},
		"Talho Invisível de Edauros": {
			nome: "Talho Invisível de Edauros",
			tipo: "Arcana 4 (Evocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "cone",
			duração: "instantânea",
			resistência: "Fortitude parcial",
			descrição:
				"Esta magia cruel foi desenvolvida pelo mago de combate Edauros, quando ainda era um bípede. Você faz um gesto rápido e dispara uma lâmina de ar em alta velocidade. Criaturas na área sofrem 8d8 pontos de dano de corte e ficam sangrando. Alvos que passem no teste de resistência sofrem metade do dano e não ficam sangrando.\n\n+2 PM: aumenta o dano em +2d8.\n\n+2 PM: muda o alvo para você e a duração para sustentada. Uma vez por rodada, como uma ação padrão, você pode disparar uma lâmina de ar contra um alvo em alcance médio, causando 6d8 pontos de dano de corte (Fortitude reduz à metade)."
		},
		Terremoto: {
			nome: "Terremoto",
			tipo: "Divina 4 (Evocação)",
			círculo: "4",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "esfera com 30m de raio",
			duração: "1 rodada",
			resistência: "veja texto",
			descrição:
				"Esta magia cria um tremor de terra que rasga o solo. O terremoto dura uma rodada, durante a qual criaturas sobre o solo não podem se mover, atacar ou lançar magias. Barreiras físicas não interrompem a área de Terremoto.\n\nO efeito exato depende do terreno.\n\nCaverna ou subterrâneo: a magia derruba o teto, causando 12d6 pontos de dano de impacto e agarrando todas as criaturas na área. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado.\n\nConstrução: todas as estruturas na área sofrem 200 pontos de dano de impacto, o suficiente para derrubar construções de madeira ou alvenaria simples, mas não de alvenaria reforçada. Criaturas em uma construção que desmorone sofrem o mesmo efeito de criaturas em uma caverna (veja acima).\n\nEspaço aberto: fendas se abrem no chão; cada criatura tem 25% de chance (1 em 1d4) de cair em uma delas.\n\nA vítima tem direito a um teste de Reflexos para se agarrar na borda e escapar. No início do seu próximo turno as fendas se fecham, matando todos que estejam dentro delas.\n\nPenhascos: o penhasco racha, criando um desmoronamento que percorre uma distância horizontal igual à distância vertical da queda. Por exemplo, um penhasco com 30m de altura desmorona em uma área de 30m de comprimento além da base. Qualquer criatura no caminho sofre 8d6 pontos de dano de impacto e fica agarrada. Um teste de Reflexos reduz o dano à metade e evita ficar agarrado.\n\nRio, lago ou pântano: fissuras se abrem sob a água, drenando-a e formando um lamaçal. Criaturas na área precisam fazer um teste de Reflexos para não afundarem na lama e ficarem agarradas. No início do seu próximo turno as fissuras se fecham, possivelmente afogando as criaturas que ficaram agarradas. Escapar exige uma ação completa e um teste de Atletismo.\n\nCriaturas agarradas (efeito possível de caverna, construção, penhasco e rio, lago ou pântano) sofrem 1d6 pontos de dano por rodada até serem libertadas, o que exige uma ação completa e um teste de Atletismo (por parte da própria criatura ou de um aliado adjacente)."
		},
		"Viagem Planar": {
			nome: "Viagem Planar",
			tipo: "Universal 4 (Convocação)",
			círculo: "4",
			execução: "completa",
			alcance: "toque",
			alvo: "pessoal",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você viaja instantaneamente para outro plano da Criação. Lá, você chega de 10 a 1.000km do destino pretendido (role 1d100 e multiplique por 10km).\n\nComponente material: um bastão de metal precioso em forma de forquilha (no valor de T$ 1.000). O tipo de metal determina para qual plano de existência você será enviado. Os metais que levam a dimensões específicas podem ser difíceis de encontrar, de acordo com o mestre.\n\n+2 PM: muda o alvo para até cinco criaturas voluntárias que você esteja tocando."
		},
		"Visão da Verdade": {
			nome: "Visão da Verdade",
			tipo: "Universal 4 (Adivinhação)",
			círculo: "4",
			execução: "movimento",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você enxerga a forma real das coisas.\n\nVocê pode ver através de camuflagem (normal e total), escuridão (normal e mágica) e efeitos de ilusão e transmutação (enxergando a verdade como formas translúcidas ou sobrepostas).\n\n+1 PM: muda o alcance para toque e o alvo para 1 criatura.\n\n+1 PM: além do normal, o alvo fica com sentidos apurados; ele recebe +10 em todos os testes de Percepção.\n\n+2 PM: além do normal, o alvo escuta falsidades; ele recebe +10 em todos os testes de Intuição.\n\n+4 PM: além do normal, o alvo enxerga através de paredes e barreiras com 30cm de espessura ou menos (as paredes e barreiras parecem translúcidas)."
		}
	},
	3: {
		"Âncora Dimensional": {
			nome: "Âncora Dimensional",
			tipo: "Arcana 3 (Abjuração)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura ou objeto",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e a habilidade incorpóreo.\n\n+2 PM: muda o alcance para médio, a área para esfera de 3m de raio e o alvo para criaturas escolhidas.\n\n+2 PM: muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e resistência a dano 20 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino).\n\n+4 PM: como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e resistência a dano 40.\n\n+4 PM: muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000).\n\nEm vez do normal, nenhum tipo de movimento planar pode ser feito para entrar ou sair da área.\n\n+9 PM: muda o alcance para médio, a área para esfera de 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área."
		},
		"Anular a Luz": {
			nome: "Anular a Luz",
			tipo: "Divina 3 (Necromancia)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "",
			área: "esfera de 6m de raio",
			duração: "ver texto",
			resistência: "",
			descrição:
				"Esta magia cria uma onda de escuridão que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia (este efeito tem duração instantânea). Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam enjoados por 1d4 rodadas (apenas uma vez por cena). Anular a Luz anula Dispersar as Trevas.\n\n+2 PM: aumenta o bônus na Defesa em +1.\n\n+4 PM: muda o círculo máximo de magias dissipadas para 4º. Requer 4º círculo.\n\n+9 PM: muda o círculo máximo de magias dissipadas para 5º. Requer 5º círculo."
		},
		Banimento: {
			nome: "Banimento",
			tipo: "Divina 3 (Abjuração)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Vontade parcial",
			descrição:
				"Você expulsa criaturas que não são naturais deste mundo. Um alvo nativo de outro mundo, como muitas criaturas do tipo espírito, é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas quase completamente rompida, sendo reduzido a 1d6 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas.\n\nSe você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD do teste de resistência aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso.\n\n+1 PM: aumenta o número de alvos em +1."
		},
		"Coluna de Chamas": {
			nome: "Coluna de Chamas",
			tipo: "Divina 3 (Evocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "cilindro com 3m de raio e 30m de altura",
			duração: "instantânea",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área.\n\n+1 PM: aumenta o dano de fogo em +1d6.\n\n+1 PM: aumenta o dano de luz em +1d6."
		},
		"Comunhão Com a Natureza": {
			nome: "Comunhão Com a Natureza",
			tipo: "Divina 3 (Adivinhação)",
			círculo: "3",
			execução: "completa",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio.\n\nEnquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar qualquer quantidade desses d4 e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados.\n\n+1 PM: muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região.\n\n+3 PM: aumenta o número de dados de auxílio em +2.\n\n+4 PM: muda o tipo dos dados de auxílio para d6.\n\n+8 PM: muda o tipo dos dados de auxílio para d8."
		},
		"Contato Extraplanar": {
			nome: "Contato Extraplanar",
			tipo: "Arcana 3 (Adivinhação)",
			círculo: "3",
			execução: "completa",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios, demônios ou elementais. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar 1d6, mais 1d6 para cada círculo de magias acima de 3º que puder lançar e adicionar o resultado rolado como bônus no teste. No entanto, esse auxílio tem um preço: sempre que rolar um “6” num desses d6, a entidade “suga” 1 PM de você. A magia termina quando você ficar sem dados para rolar, sem PM ou no fim do dia (o que acontecer primeiro).\n\n+2 PM: aumenta o número de dados de auxílio em +1.\n\n+8 PM: Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses d12, a entidade “suga” 2 PM de você. Requer 4º círculo."
		},
		"Controlar Água": {
			nome: "Controlar Água",
			tipo: "Divina 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "esfera com 30m de raio",
			duração: "cena",
			resistência: "veja texto",
			descrição:
				"Você pode controlar os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo.\n\nCongelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia.\n\nDerreter: gelo mundano na área vira água e a magia termina. A critério do mestre, isso pode criar terreno difícil.\n\nEnchente: eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para alvo: uma embarcação.\n\nO alvo recebe +3m em seu deslocamento pela duração do efeito.\n\nEvaporar: toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz à metade).\n\nPartir: diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem com CD igual à da magia permite ao piloto livrar a embarcação). Elementais da água na área ficam lentos.\n\n+2 PM: aumenta o dano em +2d8."
		},
		"Controlar Terra": {
			nome: "Controlar Terra",
			tipo: "Divina 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "9 cubos com 1",
			duração: "instantânea",
			resistência: "veja texto",
			descrição:
				"Você manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na área. Ao lançar a magia, escolha.\n\nAmolecer: se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto às criaturas na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.\n\nModelar: pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em uma maça, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).\n\nSolidificar: transforma lama ou areia em terra ou pedra. Criaturas com os pés na superfície ficam agarradas. Elas podem se soltar com uma ação padrão e um teste de Acrobacia ou Atletismo.\n\n+1 PM: aumenta o número de cubos de 1,5m em +2.\n\n+1 PM: muda o alcance para pessoal, o alvo para você e a duração para 1 dia.\n\nVocê e seu equipamento fundem-se a uma superfície ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomodá-lo. Você pode voltar ao espaço adjacente como uma ação livre, dissipando a magia. Enquanto mesclado, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Pequenos danos não o afetam, mas se o objeto (ou o trecho onde você está imerso) for destruído, a magia é dissipada, você volta a um espaço livre adjacente e sofre 10d6 pontos de dano de impacto."
		},
		"Convocação Instantânea": {
			nome: "Convocação Instantânea",
			tipo: "Arcana 3 (Convocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "ilimitado",
			alvo: "1 objeto de até 5kg",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa ou marca pessoal sua (ao custo de T$ 5).\n\nA magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura).\n\n+1 PM: além do normal, até 1 hora após ter lançado a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes.\n\n+1 PM: muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do normal, você esconde o baú alvo no Etéreo, com até 250kg de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente, ou de volta para o Etéreo, como uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000). Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invocar o baú verdadeiro.\n\n+2 PM: aumenta o número de alvos em +1.\n\n+2 PM: aumenta o peso limite do alvo em um fator de 10, até 500 kg. Um objeto muito grande ou pesado para aparecer em suas mãos é teletransportado para um espaço adjacente a sua escolha."
		},
		"Despertar Consciência": {
			nome: "Despertar Consciência",
			tipo: "Divina 3 (Encantamento)",
			círculo: "3",
			execução: "completa",
			alcance: "toque",
			alvo: "1 animal ou planta",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Você desperta a consciência de um animal ou planta, que passa a ajudá-lo. O alvo se torna um aliado veterano de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, médico ou perseguidor. Se usar esta magia em um aliado que já possua, seu nível de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre).\n\nSe já for um aliado mestre, fornece um bônus adicional de outro tipo de aliado iniciante (entre as escolhas acima).\n\nO alvo se torna uma criatura racional (Inteligência 8) capaz de compreender frases e instruções complexas e pode falar todos os idiomas que você conhece.\n\n+4 PM: muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto.\n\n+4 PM: muda a duração para permanente e adiciona sacrifício de 1 PM."
		},
		"Dificultar Detecção": {
			nome: "Dificultar Detecção",
			tipo: "Arcana 3 (Abjuração)",
			círculo: "3",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura ou objeto",
			área: "",
			duração: "1 dia",
			resistência: "",
			descrição:
				"Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento.\n\n+4 PM: muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela.\n\n+4 PM: muda a duração para 1 semana."
		},
		"Dispersar as Trevas": {
			nome: "Dispersar as Trevas",
			tipo: "Divina 3 (Evocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "",
			área: "esfera de 6m de raio",
			duração: "veja texto",
			resistência: "",
			descrição:
				"Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3º círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia (este efeito tem duração instantânea). Seus aliados na área recebem +4 em testes de resistência e resistência a trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam cegos por 1d4 rodadas (apenas uma vez por cena). Dispersar as Trevas anula Anular a Luz.\n\n+2 PM: aumenta o bônus nas resistências em +1.\n\n+4 PM: muda o alcance para curto, a área para alvo 1 criatura e a duração para cena. O alvo fica imune a efeitos de necromancia e trevas.\n\n+4 PM: muda o círculo máximo de magias dissipadas para 4º. Requer 4º círculo.\n\n+9 PM: muda o círculo máximo de magias dissipadas para 5º. Requer 5º círculo."
		},
		"Enxame Rubro de Ichabod": {
			nome: "Enxame Rubro de Ichabod",
			tipo: "Arcana 3 (Convocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "sustentada",
			resistência: "Reflexos reduz à metade",
			descrição:
				"Você conjura um enxame de pequenas criaturas da Tormenta, que surge em um ponto a sua escolha. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de ácido a qualquer criatura em seu espaço (Reflexos reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.\n\n+1 PM: além do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar. Se você mover o enxame, a criatura fica livre.\n\n+2 PM: aumenta o dano em +1d12.\n\n+2 PM: muda o dano para trevas.\n\n+3 PM: o enxame vira Enorme (quadrado de 6m de lado).\n\n+3 PM: o enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao invés de um quadrado.\n\n+4 PM: o enxame inclui parasitas inchados que explodem e criam novos enxames. No início de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um já existente à sua escolha. Você pode mover todos os enxames com uma única ação de movimento, mas eles não podem ocupar o mesmo espaço. Requer 4º círculo."
		},
		"Erupção Glacial": {
			nome: "Erupção Glacial",
			tipo: "Arcana 3 (Evocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "quadrado de 6m de lado",
			duração: "instantânea",
			resistência: "Reflexos parcial",
			descrição:
				"Estacas de gelo irrompem do chão.\n\nCriaturas na área sofrem 4d6 de dano de corte, 4d6 de dano de frio e ficam caídas. Passar no teste de Reflexos evita o dano de corte e a queda. As estacas duram pela cena, o que torna a área afetada terreno difícil, e concedem cobertura para criaturas dentro da área ou atrás dela. As estacas são destruídas caso sofram qualquer quantidade de dano por fogo mágico.\n\n+3 PM: aumenta o dano de frio em +2d6 e o dano de corte em +2d6.\n\n+4 PM: muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área (sem teste de resistência). A tempestade fornece camuflagem a todas as criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4º círculo."
		},
		"Ferver Sangue": {
			nome: "Ferver Sangue",
			tipo: "Arcana 3 (Necromancia)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "sustentada",
			resistência: "Fortitude reduz à metade",
			descrição:
				"O sangue do alvo aquece rapidamente até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 4d8 pontos de dano de fogo e fica enjoado por uma rodada (Fortitude reduz à metade e evita a condição). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade).\n\nEssa magia não afeta criaturas sem sangue, como construtos ou mortos-vivos.\n\n+2 PM: aumenta o dano em +1d8.\n\n+9 PM: muda alvo para criaturas escolhidas. Requer 5º círculo."
		},
		"Globo de Invulnerabilidade": {
			nome: "Globo de Invulnerabilidade",
			tipo: "Arcana 3 (Abjuração)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não o penetram. No entanto, magias ainda podem ser lançadas de dentro para fora.\n\nUma magia que dissipa outras magias só dissipa o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado).\n\nO globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente.\n\n+4 PM: muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo.\n\n+9 PM: muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo."
		},
		Heroísmo: {
			nome: "Heroísmo",
			tipo: "Divina 3 (Encantamento)",
			círculo: "3",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe 40 PV temporários e +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena.\n\n+2 PM: muda o bônus para +6."
		},
		"Ilusão Lacerante": {
			nome: "Ilusão Lacerante",
			tipo: "Arcana 3 (Ilusão)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "cubo",
			duração: "cena",
			resistência: "Vontade anula",
			descrição:
				"Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um teste de Vontade; uma falha significa que a criatura acredita que a ilusão é real e sofre 3d6 pontos de dano. O tipo de dano depende da ilusão — fogo para uma ilusão de chamas, impacto para uma ilusão de desmoronamento etc. Somente criaturas que falharem podem ver a ilusão, e racionaliza o efeito sempre que falha no teste (por exemplo, acredita que o mesmo teto pode cair sobre ele várias vezes). Sempre que uma criatura iniciar seu turno dentro da área, deve repetir o teste de Vontade. Se falhar, sofre o dano novamente.\n\n+3 PM: aumenta o dano em +2d6. O aumento pode ser de um novo tipo de dano, desde que explicado pela ilusão.\n"
		},
		Imobilizar: {
			nome: "Imobilizar",
			tipo: "Universal 3 (Encantamento)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 humanoide ou animal",
			área: "",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"O alvo fica paralisado; se passar na resistência, em vez disso fica lento. A cada rodada, pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, se liberta do efeito.\n\n+1 PM: muda o alvo para 1 espírito.\n\n+2 PM: aumenta o número de alvos em +1.\n\n+3 PM: muda o alvo para 1 criatura.\nRequer 4º círculo."
		},
		"Lança Ígnea de Aleph": {
			nome: "Lança Ígnea de Aleph",
			tipo: "Arcana 3 (Evocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "1 criatura",
			área: "",
			duração: "instantânea",
			resistência: "Reflexos parcial",
			descrição:
				"Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma superaquecido contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas.\n\nRespingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos.\n\nSe falharem, ficam em chamas, como descrito acima.\n\n+3 PM: aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6.\n\n+4 PM: muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador.\n\nUma vez por rodada, como uma ação livre, você pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4º Círculo."
		},
		"Lendas e Histórias": {
			nome: "Lendas e Histórias",
			tipo: "Universal 3 (Adivinhação)",
			círculo: "3",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre: • Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.\n\n• Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, resistências e fraquezas. Se for um item mágico, aprende seu efeito e funcionamento.\n\n• Se o alvo está sob influência de alguma magia e todas as informações sobre as magias ativas, se houver alguma.\n\n+4 PM: muda a execução para 1 dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d’água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização."
		},
		"Manto de Sombras": {
			nome: "Manto de Sombras",
			tipo: "Universal 3 (Ilusão)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você fica coberto por um manto de energia sombria. Nesta forma, torna-se incorpóreo (inclui seu equipamento): só pode ser afetado por armas mágicas, magias ou outras criaturas incorpóreas e pode atravessar objetos sólidos, mas não manipulá-los. Contudo, se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada.\n\nVocê pode gastar uma ação de movimento e 1 PM para “entrar” em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio.\n\n+4 PM: muda o alcance para toque e o alvo para 1 criatura. Requer 4º círculo."
		},
		Miragem: {
			nome: "Miragem",
			tipo: "Arcana 3 (Ilusão)",
			círculo: "3",
			execução: "padrão",
			alcance: "longo",
			alvo: "",
			área: "cubo de até 90m de lado",
			duração: "1 dia",
			resistência: "Vontade desacredita",
			descrição:
				"Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias).\n\n+4 PM: além do normal, pode alterar a aparência de criaturas escolhidas na área, como se usando Disfarce Ilusório.\n\n+9 PM: muda a duração para permanente e adiciona componente material (pó de diamante no valor de T$ 1.000).\nRequer 5º círculo."
		},
		"Missão Divina": {
			nome: "Missão Divina",
			tipo: "Divina 3 (Encantamento)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "1 criatura",
			área: "",
			duração: "1 semana ou até ser descarregada",
			resistência: "Vontade anula (veja texto",
			descrição:
				"Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens.\n\nA Missão Divina não pode forçar uma criatura a um ato suicida, nem designar uma missão impossível (como matar uma criatura que não existe).\n\n+2 PM: muda o alcance para toque, a duração para permanente e adiciona penalidade de –1 PM. Em vez do normal, você inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de ação que ativará a marca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Dissipar Magia suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação.\n\n+4 PM: aumenta a duração para 1 ano ou até ser descarregada."
		},
		"Muralha Elemental": {
			nome: "Muralha Elemental",
			tipo: "Arcana 3 (Evocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "",
			duração: "cena",
			resistência: "veja texto",
			descrição:
				"Esta magia cria uma muralha de um elemento a sua escolha. A muralha pode ter duas formas: uma barreira de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. Os efeitos variam conforme o tipo de elemento escolhido.\n\nFogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a até 6m. A muralha causa esse dano quando surge e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade (a criatura escolhe para qual lado quer escapar, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano).\n\nGelo. Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e RD 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravesse um trecho rompido da muralha sofre 4d6 pontos de dano de frio.\n\n+2 PM: aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura.\n\n+4 PM: muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado como se tivessem linha de efeito. Requer 4º círculo."
		},
		"Pele de Pedra": {
			nome: "Pele de Pedra",
			tipo: "Universal 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "Fortitude anula",
			descrição:
				"Em vez do efeito normal, a magia transforma o alvo e seu equipamento em uma estátua inerte e sem consciência. A estátua possui os mesmos PV da criatura e resistência a dano 8; se for quebrada, a criatura morrerá.\nRequer 4º círculo.\n\n+9 PM: como acima, mas com duração permanente. Requer 5º círculo."
		},
		"Poeira da Podridão": {
			nome: "Poeira da Podridão",
			tipo: "Divina 3 (Necromancia)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "nuvem com 6m de raio",
			duração: "cena",
			resistência: "Fortitude (veja texto)",
			descrição:
				"Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste não podem recuperar pontos de vida por uma rodada.\n\n+2 PM: aumenta o dano em 1d8+4."
		},
		"Potência Divina": {
			nome: "Potência Divina",
			tipo: "Divina 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo). Além disso, você recebe Força +8 e resistência a dano 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.\n\n+2 PM: aumenta o bônus de Força em +2.\n\n+2 PM: aumenta a resistência a dano em +2.\n\n+2 PM: muda o alcance para toque e o alvo para 1 criatura. A magia falha se o alvo não seguir a mesma divindade que você."
		},
		"Proteção Contra Magia": {
			nome: "Proteção Contra Magia",
			tipo: "Divina 3 (Abjuração)",
			círculo: "3",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias.\n\n+4 PM: muda o bônus para +10. Requer 4º círculo.\n\n+4 PM: em vez do normal, o alvo fica imune a uma escola de magia a sua escolha. Requer 4º Círculo.\n\n+9 PM: em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5º Círculo."
		},
		"Selo de Mana": {
			nome: "Selo de Mana",
			tipo: "Universal 3 (Encantamento)",
			círculo: "3",
			execução: "padrão",
			alcance: "toque",
			alvo: "1 criatura",
			área: "",
			duração: "cena",
			resistência: "Vontade parcial",
			descrição:
				"Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, a ação não tem efeito (mas os PM são gastos mesmo assim).\n\n+4 PM: muda o alcance para curto e o alvo para criaturas escolhidas dentro do alcance. Requer 4º círculo."
		},
		"Servo Divino": {
			nome: "Servo Divino",
			tipo: "Divina 3 (Convocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "",
			duração: "cena ou até ser descarregada",
			resistência: "",
			descrição:
				"Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser cumprida em até uma hora — desde algo simples como “use suas asas para nos levar até o topo da montanha” até algo complexo como “escolte esses camponeses até o castelo”. A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa.\n\nComponente material: um pagamento de T$ 100 ao espírito. A forma de pagamento varia — doações a um templo, um item mágico ou mesmo dinheiro.\n\n+4 PM: muda a duração para 1 dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal.\n\n+9 PM: muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal."
		},
		"Servo Morto-Vivo": {
			nome: "Servo Morto-Vivo",
			tipo: "Universal 3 (Necromancia)",
			círculo: "3",
			execução: "completa",
			alcance: "toque",
			alvo: "1 cadáver",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Esta magia transforma o cadáver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conservação do corpo). Uma vez por rodada, quando sofre dano, você pode gastar uma reação para sacrificar um servo morto-vivo e evitar esse dano. O servo é destruído no processo e não pode ser reanimado. Se quiser que o morto-vivo o acompanhe, ele funciona como um aliado iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria.\n\nSe não quiser usar o morto-vivo como aliado, pode ordenar que ele proteja um local específico, atacando invasores (nesse caso, use as estatísticas de criaturas vistas no Capítulo 7: Ameaças). O nível somado de mortos-vivos sob seu comando ao mesmo tempo não pode exceder o seu próprio nível +3, mas você só pode receber os benefícios de um deles como aliado por vez. Eles duram até serem destruídos (um morto-vivo destruído não pode ser reanimado).\n\nComponente material: um ônix negro (T$ 100), inserido na boca ou olho do cadáver.\n\n+3 PM: muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carniçal. Ele pode funcionar como um aliado veterano, escolhido entre ajudante, atirador, combatente, fortão ou guardião. O resto segue normal.\n\n+3 PM: muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um aliado veterano, escolhido entre assassino, combatente ou perseguidor.\n\nO restante da magia segue normal.\n\n+7 PM: muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma múmia. Ela pode funcionar como um aliado mestre, escolhido entre ajudante, destruidor, guardião ou médico. O restante da magia segue normal. Requer 4º círculo."
		},
		"Sopro da Salvação": {
			nome: "Sopro da Salvação",
			tipo: "Divina 3 (Evocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "curto",
			alvo: "",
			área: "cone",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Você enche seus pulmões de energia positiva e sopra um cone de poeira reluzente. O sopro afeta apenas seus aliados na área, curando 2d8+4 pontos de vida e removendo uma das seguintes condições de todos os alvos: abalado, atordoado, apavorado, alquebrado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, paralisado, pasmo e surdo.\n\n+2 PM: aumenta a quantidade de cura em 1d8+2.\n\n+4 PM: além do normal, se um aliado estiver com PV negativos, seus PV são levados a 0 e então a cura é aplicada.\n\n+4 PM: remove todas as condições listadas, em vez de apenas uma."
		},
		Telecinesia: {
			nome: "Telecinesia",
			tipo: "Arcana 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "veja texto",
			área: "",
			duração: "sustentada ou instantânea",
			resistência: "",
			descrição:
				"veja texto).\n\nVocê move objetos ou criaturas se concentrando. Ao lançar a magia, escolha uma das opções a seguir.\n\nForça Contínua: você move uma criatura ou objeto com até 200kg, a até 6m por rodada. Uma criatura pode anular o efeito sobre ela, ou sobre um objeto que possua, passando num teste de Vontade. O peso pode ser movido em qualquer direção dentro do alcance.\n\nEle cai no chão se sair do alcance ou a magia terminar. Duração: sustentada.\n\nEmpurrão Violento: nesta versão a energia mágica é expelida de uma única vez e arremessa até 10 objetos, ou um peso total de 200kg, o que for menor.\n\nOs objetos devem estar a até 3m uns dos outros.\n\nObjetos arremessados podem atingir criaturas em seu caminho, causando de 1 ponto de dano de impacto por 10kg (objetos macios, sem pontas ou sem fio) até 1d6 pontos de dano por 10kg (objetos duros, pontudos ou afiados). Criaturas atingidas têm direito a um teste de Reflexos para reduzir o dano à metade.\n\nCriaturas dentro da capacidade de peso da magia podem ser arremessadas, mas têm direito a um teste de Vontade para evitar o efeito (em si mesmas ou em objetos que estejam segurando). Uma criatura arremessada contra uma superfície sólida sofre 1d6 pontos de dano de impacto para cada 3m que “voou” no deslocamento (incluindo outras criaturas; nesse caso, ambas sofrem o dano). Duração: instantânea.\n\n+3 PM: aumenta o limite de peso em 100kg."
		},
		Teletransporte: {
			nome: "Teletransporte",
			tipo: "Arcana 3 (Convocação)",
			círculo: "3",
			execução: "padrão",
			alcance: "toque",
			alvo: "até 5 criaturas voluntárias",
			área: "",
			duração: "instantânea",
			resistência: "",
			descrição:
				"Esta magia transporta os alvos para um lugar a sua escolha a até 1.000km. Você precisa fazer um teste de Misticismo, com dificuldade que depende de seu conhecimento sobre o local de destino.\n\nCD 20. Um lugar familiar, que você visita com frequência.\n\nCD 30. Um lugar conhecido, que você já visitou pelo menos uma vez.\n\nCD 40. Um lugar desconhecido, que você nunca visitou e só conhece a partir da descrição de outra pessoa que esteve lá.\n\nVocê não pode se teletransportar para um lugar que nunca visitou sem a descrição de alguém. Ou seja, não pode se transportar para a “sala de tesouro do rei” se nunca esteve nela nem falou com alguém que esteve.\n\nSe passar no teste, os alvos chegam ao lugar desejado. Se falhar, os alvos surgem 1d10 x 10km afastados em qualquer direção (se o destino é uma cidade costeira, você pode surgir em alto-mar). Se falhar por 5 ou mais, você chega em um lugar parecido, mas errado. E se você rolar 1 natural no teste a magia falha, mas você gasta PM normalmente e fica atordoado por 1d4 rodadas.\n\n+2 PM: aumenta o número de alvos em +5.\n\n+2 PM: em vez do normal, a magia teletransporta os alvos para seu santuário — um local familiar e previamente preparado. A magia pode ser usada sem limite de distância ou necessidade de testes, mas apenas dentro do mesmo plano. Preparar um local como seu santuário exige um ritual de um dia e o gasto de T$ 1.000. Você só pode ter um santuário por vez.\n\n+9 PM: muda a execução para ação completa, a duração para cena e adiciona sacrifício de 1 PM. Em vez do normal, você cria um círculo de 1,5m de diâmetro no chão, que transporta qualquer criatura que pisar nele. O destino é escolhido quando a magia é lançada e pode ser qualquer lugar, em qualquer mundo, sem a necessidade de testes, desde que seja conhecido por você. O círculo é tênue e praticamente invisível. Você pode marcá-lo de alguma forma (por exemplo, lançando-o sobre uma plataforma elevada). Se não fizer isso, alguém pode pisar nele por acidente. Junte isso a um destino hostil e você terá uma armadilha bastante eficaz! Requer 5º círculo."
		},
		"Tentáculos de Trevas": {
			nome: "Tentáculos de Trevas",
			tipo: "Arcana 3 (Necromancia)",
			círculo: "3",
			execução: "padrão",
			alcance: "médio",
			alvo: "",
			área: "esfera com 6m de raio",
			duração: "cena",
			resistência: "",
			descrição:
				"Uma esfera de energias sombrias se abre no chão, de onde surgem tentáculos feitos de treva viscosa. Ao lançar a magia e no início de cada um de seus turnos, você faz um teste da manobra agarrar (usando seu bônus de Misticismo) contra cada criatura na área. Se você passar, a criatura é agarrada; se a vítima já está agarrada, é esmagada, sofrendo 4d6 pontos de dano de trevas. A área conta como terreno difícil.\n\nOs tentáculos são imunes a dano.\n\n+2 PM: aumenta o raio da área em +3m.\n\n+2 PM: aumenta o dano dos tentáculos em +2d6."
		},
		"Transformação de Guerra": {
			nome: "Transformação de Guerra",
			tipo: "Arcana 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "sustentada",
			resistência: "",
			descrição:
				"Você se torna uma máquina de combate, ficando mais forte, rápido e resistente. Você recebe +6 na Defesa, testes de ataque e rolagens de dano corpo a corpo, e 30 PV temporários. Durante a Transformação de Guerra você não pode lançar magias, mas se torna proficiente em todas as armas.\n\n+2 PM: aumenta os bônus na Defesa, testes de ataque e rolagens de dano corpo a corpo em +1, e os PV temporários em +10.\n\n+2 PM: adiciona componente material (uma barra de adamante no valor de T$ 100). Sua forma de combate ganha um aspecto metálico e sem expressões. Além do normal, você recebe resistência a dano 10 e imunidade a atordoamento, doenças, encantamento, fadiga, paralisia, necromancia, sangramento, sono e veneno, e não precisa respirar."
		},
		"Viagem Arbórea": {
			nome: "Viagem Arbórea",
			tipo: "Divina 3 (Convocação)",
			círculo: "3",
			execução: "completa",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Como parte da execução, você entra em uma árvore adjacente que seja maior do que você. Você pode permanecer dentro da árvore, percebendo os arredores de forma normal (mas sem poder fazer ações). Você pode gastar uma ação de movimento para sair da mesma árvore, ou de qualquer outra dentro de 1km. Se estiver dentro de uma árvore que seja destruída, a magia termina e você sofre 10d6 pontos de dano de impacto. Enquanto a magia durar você pode gastar ações de movimento para entrar em outras árvores.\n\n+2 PM: muda o alcance para toque, o alvo para até cinco criaturas e a duração para instantânea. Os alvos entram em uma planta (de tamanho Médio ou maior) e saem em outra planta do mesmo tamanho a até 100km de distância, especificada em direção e distância aproximadas (como “50km ao norte”)."
		},
		Vidência: {
			nome: "Vidência",
			tipo: "Universal 3 (Adivinhação)",
			círculo: "3",
			execução: "completa",
			alcance: "ilimitado",
			alvo: "1 criatura",
			área: "",
			duração: "sustentada",
			resistência: "Vontade anula",
			descrição:
				"Através de uma superfície reflexiva (bacia de água benta para clérigos, lago para druidas, bola de cristal para magos, espelho para feiticeiros etc.) você pode ver e ouvir uma criatura escolhida e seus arredores (cerca de 6m em qualquer direção), mesmo que ela se mova. O alvo pode estar a qualquer distância, mas se passar em um teste de Vontade, a magia falha. A vítima recebe bônus ou penalidades em seu teste de resistência, dependendo do conhecimento que você tiver dela.\n\n• Não conhece o alvo: +10.\n\n• Ouviu falar do alvo: +5.\n\n• O alvo está em outro plano ou mundo: +5.\n\n• Já encontrou o alvo pessoalmente: +0.\n\n• Tem uma pintura, escultura ou outra representação do alvo: –2.\n\n• Conhece bem o alvo: –5.\n\n• Tem um pertence pessoal ou peça de roupa do alvo: –5.\n\n• Tem uma parte do corpo do alvo (unhas, cabelos...): –10."
		},
		Voo: {
			nome: "Voo",
			tipo: "Arcana 3 (Transmutação)",
			círculo: "3",
			execução: "padrão",
			alcance: "pessoal",
			alvo: "você",
			área: "",
			duração: "cena",
			resistência: "",
			descrição:
				"Você recebe deslocamento de voo 12m.\n\nVoar por meio desta magia é simples como andar — você pode atacar e lançar magias normalmente enquanto voa. Quando a magia termina, você desce lentamente até o chão, como se estivesse sob efeito de Queda Suave.\n\n+1 PM: muda o alcance para toque e o alvo para 1 criatura.\n\n+4 PM: muda a duração para 1 dia.\nRequer 4º círculo.\n\n+4 PM: muda o alcance para curto e o alvo para até 10 criaturas. Requer 4° círculo."
		}
	}
};
