export const origens = [
	{ "Sem Origem": " " },
	{ Acólito: "Membro da Igreja" },
	{ "Amigo dos animais": "Amigo Especial" },
	{ Amnésico: "Lembranças Graduais" },
	{ Aristocrata: "Sangue Azul" },
	{ Artesão: "Frutos do Trabalho" },
	{ Artista: "Dom Artístico" },
	{ "Assistente de laboratório": "Esse Cheiro..." },
	{ Batedor: "À Prova de Tudo" },
	{ Capanga: "Confissão" },
	{ Charlatão: "Alpinista Social" },
	{ Circense: "Truque de Mágica" },
	{ Criminoso: "Punguista" },
	{ Curandeiro: "Médico de Campo" },
	{ Eremita: "Busca Interior" },
	{ Escravo: "Desejo de Liberdade" },
	{ Estudioso: "Palpite Fundamentado" },
	{ Fazendeiro: "Água no Feijão" },
	{ Forasteiro: "Cultura Exótica" },
	{ Gladiador: "Pão e Circo" },
	{ Guarda: "Detetive" },
	{ Herdeiro: "Herança" },
	{ "Herói camponês": "Amigo dos Plebeus" },
	{ Marujo: "Passagem de Navio" },
	{ Mateiro: "Vendedor de Carcaças" },
	{ "Membro de guilda": "Rede de Contatos" },
	{ Mercador: "Negociação" },
	{ Minerador: "Escavador" },
	{ Nômade: "Mochileiro" },
	{ Pivete: "Quebra-galho" },
	{ Refugiado: "Estoico" },
	{ Seguidor: "Antigo Mestre" },
	{ Selvagem: "Vida Rústica" },
	{ Soldado: "Influência Militar" },
	{ Taverneiro: "Gororoba" },
	{ Trabalhador: "Esforçado" }
];

export const todasOrigens = origens.map(Object.keys);

export const origemBeneficio = (key) =>
	origens.filter((origem) => origem[key]) ?? "Origem não encontrada";
