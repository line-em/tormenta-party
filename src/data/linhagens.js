const linhagens = {
	Humano: [
		{
			"Habilidade Racial: +2 em Três Atributos Diferentes":
				"Filhos de Valkaria, Deusa da Ambição, humanos podem se destacar em qualquer caminho que escolherem."
		},
		{
			Versátil:
				"Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha."
		}
	],
	Anão: [
		{
			"Conhecimento das Rochas":
				"Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo."
		},
		{
			"Devagar e Sempre":
				"Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga."
		},
		{
			"Duro como Pedra":
				"Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte."
		},
		{
			"Tradição de Heredrimm":
				"Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas."
		}
	],
	Dahllan: [
		{
			"Amiga das Plantas":
				"Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM."
		},
		{
			"Armadura de Allihanna":
				"Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena."
		},
		{
			"Empatia Selvagem":
				"Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e pedir favores de animais. Caso receba esta habilidade novamente, recebe +2 em Adestramento."
		}
	],
	Elfo: [
		{
			"raça de Glórienn": "Seu deslocamento é 12m (em vez de 9m)."
		},
		{
			"Herança Feérica": "Você recebe +1 ponto de mana por nível."
		},
		{
			"Sentidos Élficos":
				"Você recebe visão na penumbra e +2 em Misticismo e Percepção."
		}
	],
	Goblin: [
		{
			Engenhoso:
				"Você não sofre penalidades em testes de perícia por não usar kits. Se usar o kit, recebe +2 no teste de perícia."
		},
		{
			Espelunqueiro:
				"Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre."
		},
		{
			"Peste Esguia":
				"Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos."
		},
		{
			"Rato das Ruas":
				"Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível."
		}
	],
	Lefou: [
		{
			Engenhoso:
				"Você não sofre penalidades em testes de perícia por não usar kits. Se usar o kit, recebe +2 no teste de perícia."
		},
		{
			Espelunqueiro:
				"Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre."
		},
		{
			"Peste Esguia":
				"Seu tamanho é Pequeno, mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos."
		},
		{
			"Rato das Ruas":
				"Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível."
		}
	],
	Minotauro: [
		{
			Chifres:
				"Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres."
		},
		{
			"Couro Rígido":
				"Sua pele é dura como a de um touro. Você recebe +1 na Defesa."
		},
		{
			Faro: "Você tem olfato apurado. Você não fica desprevenido e sofre apenas camuflagem (em vez de camuflagem total) contra inimigos em alcance curto que não possa ver."
		}
	],
	Qareen: [
		{
			Desejos:
				"Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre."
		},
		{
			"Resistência Elemental":
				"Conforme sua ascendência, você recebe resistência 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas)."
		},
		{
			"Tatuagem Mística":
				"Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM."
		}
	],
	Golem: [
		{
			"Canalizar Reparos":
				"Como uma ação completa, você pode gastar pontos de mana para recuperar pontos de vida, à taxa de 5 PV por PM."
		},
		{
			Chassi: "Seu corpo artificial é resistente, mas rígido. Você recebe +2 na Defesa, mas possui penalidade de armadura –2 e seu deslocamento é 6m. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi)."
		},
		{
			"Criatura Artificial":
				"Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, não recupera pontos de vida por descanso e não se beneficia de habilidades de cura e itens ingeríveis (comidas, poções etc.). Você precisa ficar inerte por oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso)."
		},
		{
			"Espírito Elemental":
				"Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano causado por essa energia. Se fosse sofrer dano mágico dessa energia, em vez disso cura PV em quantidade igual à metade do dano. Por exemplo, se um golem com espírito elemental do fogo é atingido por uma Bola de Fogo que causa 30 pontos de dano, em vez de sofrer esse dano, ele recupera 15 PV."
		},
		{
			"Sem Origem":
				"Como uma criatura artificial, você já foi construído “pronto”. Não teve uma infância — portanto, não tem direito a escolher uma origem e receber benefícios por ela."
		}
	],
	Hynne: [
		{
			Arremessador:
				"Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo."
		},
		{
			"Pequeno e Rechonchudo":
				"Seu tamanho é Pequeno e seu deslocamento é 6m. Você recebe +2 em Enganação e usa o modificador de Destreza para Atletismo (em vez de Força)."
		},
		{
			"Sorte Salvadora":
				"Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente."
		}
	],
	Kliren: [
		{
			Híbrido:
				"Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe)."
		},
		{
			"Lógica Gnômica":
				"Quando faz um teste de atributo ou perícia, você pode gastar 2 PM para substituir o modificador de atributo utilizado por Inteligência."
		},
		{
			"Ossos Frágeis":
				"Você sofre 1 ponto de dano adicional por dado de dano de impacto."
		},
		{
			Vanguardista:
				"Você recebe proficiência em armas de fogo e +2 em testes de Ofício (um qualquer, a sua escolha)."
		}
	],
	Medusa: [
		{
			"Cria de Megalokk":
				"Você é uma criatura do tipo monstro e recebe visão no escuro."
		},
		{
			"Natureza Venenosa":
				"Você recebe resistência a veneno 5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja empunhando. A arma causa +1d12 pontos de dano de veneno. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro)."
		},
		{
			"Olhar Atordoante":
				"Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por 1 rodada. Se passar, fica imune a esta habilidade por um dia."
		}
	],
	Osteon: [
		{
			"Armadura Óssea": "Você recebe resistência a corte, frio e perfuração 5."
		},
		{
			"Memória Póstuma":
				"Você se torna treinado em uma perícia (não precisa ser da sua classe) ou recebe um poder geral a sua escolha. Como alternativa, você pode ser um osteon de outra raça humanoide que não humano. Neste caso, você ganha uma habilidade dessa raça a sua escolha. Se a raça era de tamanho diferente de Médio, você também possui sua categoria de tamanho."
		},
		{
			"Natureza Esquelética":
				"Você é uma criatura do tipo morto-vivo. Recebe visão no escuro e imunidade a doenças, fadiga, sangramento, sono e venenos. Além disso, não precisa respirar, alimentar-se ou dormir. Por fim, habilidades mágicas de cura causam dano a você e você não se beneficia de itens ingeríveis (comidas, poções etc.), mas dano de trevas recupera seus PV."
		}
	],
	Sereia: [
		{
			"Canção dos Mares":
				"Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM."
		},
		{
			"Mestre do Tridente":
				"Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes."
		},
		{
			"Transformação Anfíbia":
				"Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!)."
		}
	],
	Tritão: [
		{
			"Canção dos Mares":
				"Você pode lançar duas das magias a seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar, Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM."
		},
		{
			"Mestre do Tridente":
				"Para você, o tridente é uma arma simples. Além disso, você recebe +2 em rolagens de dano com azagaias, lanças e tridentes."
		},
		{
			"Transformação Anfíbia":
				"Você pode respirar debaixo d’água e possui uma cauda que fornece deslocamento de natação 12m. Quando fora d’água, sua cauda desaparece e dá lugar a pernas (deslocamento 9m). Se permanecer mais de um dia sem contato com água, você não recupera PM com descanso até voltar para a água (ou, pelo menos, tomar um bom banho!)."
		}
	],
	Sílfide: [
		{
			"Asas de Borboleta":
				"Seu tamanho é Minúsculo. Você pode pairar a 1,5m do chão com deslocamento 9m. Isso permite que você ignore terreno difícil e o torna imune a dano por queda (a menos que esteja inconsciente). Você pode gastar 1 PM por rodada para voar com deslocamento de 12m."
		},
		{
			"Espírito da Natureza":
				"Você é uma criatura do tipo espírito, recebe visão na penumbra e pode falar com animais livremente."
		},
		{
			"Magia das Fadas":
				"Você pode lançar duas das magias a seguir (todas atributo-chave Carisma): Criar Ilusão, Enfeitiçar, Luz (como uma magia arcana) e Sono. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM."
		}
	],
	Suraggel: [
		{
			"Herança Divina":
				"Você é uma criatura do tipo espírito e recebe visão no escuro."
		},
		{
			"Luz Sagrada (Aggelus)":
				"Você recebe +2 em Diplomacia e Intuição. Além disso, pode lançar Luz (como uma magia divina; atributo-chave Carisma). Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM."
		},
		{
			"Sombras Profanas (Sulfure)":
				"Você recebe +2 em Enganação e Furtividade. Além disso, pode lançar Escuridão (como uma magia divina; atributo-chave Inteligência). Caso aprenda novamente essa magia, o custo para lançá-la diminui em –1 PM."
		}
	],
	Trog: [
		{
			"Mau Cheiro":
				"Você pode gastar uma ação padrão e 2 PM para expelir um gás fétido. Todas as criaturas (exceto trogs) em alcance curto devem passar em um teste de Fortitude contra veneno (CD Con) ou ficarão enjoadas durante 1d6 rodadas. Uma criatura que passe no teste de resistência fica imune a esta habilidade por um dia."
		},
		{
			Mordida:
				"Você possui uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Quando usa a ação atacar, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida."
		},
		{
			Reptiliano:
				"Você é uma criatura do tipo monstro e recebe visão no escuro, +1 na Defesa e, se estiver sem armadura ou roupas pesadas, +5 em Furtividade."
		},
		{
			"Sangue Frio":
				"Você sofre 1 ponto de dano adicional por dado de dano de frio."
		}
	]
};

export const todasLinhagens = Object.keys(linhagens);
