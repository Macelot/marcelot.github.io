
var cities = [
    { name: 'Alvorada', lat: -29.9575, lng: -51.1106, idRegiao: 1 },
    { name: 'Arroio dos Ratos', lat: -30.1375, lng: -51.3933, idRegiao: 1 },
    { name: 'Barra do Ribeiro', lat: -30.1794, lng: -51.3650, idRegiao: 1 },
    { name: 'Cachoeirinha', lat: -29.9867, lng: -51.1833, idRegiao: 1 },
    { name: 'Canoas', lat: -29.9167, lng: -51.1833, idRegiao: 1 },
    { name: 'Capela de Santana', lat: -29.7833, lng: -51.0167, idRegiao: 1 },
    { name: 'Eldorado do Sul', lat: -30.0692, lng: -51.5300, idRegiao: 1 },
    { name: 'Esteio', lat: -29.8675, lng: -51.2292, idRegiao: 1 },
    { name: 'Glorinha', lat: -30.1167, lng: -51.1889, idRegiao: 1 },
    { name: 'Gravataí', lat: -29.9444, lng: -51.1833, idRegiao: 1 },
    { name: 'Guaíba', lat: -30.0961, lng: -51.5450, idRegiao: 1 },
    { name: 'Nova Santa Rita', lat: -29.8833, lng: -51.2000, idRegiao: 1 },
    { name: 'Porto Alegre', lat: -30.0346, lng: -51.2177, idRegiao: 1 },
    { name: 'Santo Antônio da Patrulha', lat: -29.7875, lng: -50.5117, idRegiao: 1 },
    { name: 'São Jerônimo', lat: -29.9644, lng: -51.5928, idRegiao: 1 },
    { name: 'Sapucaia do Sul', lat: -29.8722, lng: -51.1833, idRegiao: 1 },
    { name: 'Triunfo', lat: -29.8700, lng: -51.7400, idRegiao: 1 },
    { name: 'Viamão', lat: -30.0667, lng: -51.0000, idRegiao: 1 },

    // Novas cidades com idRegiao 2
    { name: 'Araricá', lat: -29.7175, lng: -50.8239, idRegiao: 2 },
    { name: 'Campo Bom', lat: -29.6722, lng: -51.0494, idRegiao: 2 },
    { name: 'Dois Irmãos', lat: -29.6356, lng: -51.0817, idRegiao: 2 },
    { name: 'Estância Velha', lat: -29.6625, lng: -51.1450, idRegiao: 2 },
    { name: 'Ivoti', lat: -29.6433, lng: -51.0944, idRegiao: 2 },
    { name: 'Lindolfo Collor', lat: -29.5944, lng: -51.0625, idRegiao: 2 },
    { name: 'Morro Reuter', lat: -29.6294, lng: -51.0972, idRegiao: 2 },
    { name: 'Nova Hartz', lat: -29.6106, lng: -51.0731, idRegiao: 2 },
    { name: 'Novo Hamburgo', lat: -29.6861, lng: -51.1358, idRegiao: 2 },
    { name: 'Portão', lat: -29.7317, lng: -51.0567, idRegiao: 2 },
    { name: 'Presidente Lucena', lat: -29.7414, lng: -51.0836, idRegiao: 2 },
    { name: 'Santa Maria do Herval', lat: -29.6219, lng: -51.1297, idRegiao: 2 },
    { name: 'São Leopoldo', lat: -29.7683, lng: -51.1342, idRegiao: 2 },
    { name: 'Sapiranga', lat: -29.6369, lng: -51.2128, idRegiao: 2 },

        // Cidades com idRegiao 3
    { name: 'Brochier', lat: -29.6614, lng: -51.2331, idRegiao: 3 },
    { name: 'Capela de Santana', lat: -29.7833, lng: -51.0167, idRegiao: 3 },
    { name: 'Harmonia', lat: -29.6847, lng: -51.1356, idRegiao: 3 },
    { name: 'Maratá', lat: -29.6469, lng: -51.2478, idRegiao: 3 },
    { name: 'Montenegro', lat: -29.6678, lng: -51.5119, idRegiao: 3 },
    { name: 'Pareci Novo', lat: -29.6128, lng: -51.2756, idRegiao: 3 },
    { name: 'Paverama', lat: -29.7242, lng: -51.2747, idRegiao: 3 },
    { name: 'Poço das Antas', lat: -29.7528, lng: -51.2872, idRegiao: 3 },
    { name: 'Salvador do Sul', lat: -29.7492, lng: -51.5086, idRegiao: 3 },
    { name: 'São José do Sul', lat: -29.7042, lng: -51.4972, idRegiao: 3 },
    { name: 'São Pedro da Serra', lat: -29.6083, lng: -51.3061, idRegiao: 3 },
    { name: 'Taquari', lat: -29.7167, lng: -51.2125, idRegiao: 3 },
    { name: 'Tabaí', lat: -29.7908, lng: -51.3264, idRegiao: 3 },
    { name: 'Tupandi', lat: -29.7481, lng: -51.2225, idRegiao: 3 },

    // Cidades com idRegiao 4
    { name: 'Antônio Prado', lat: -28.9525, lng: -51.2886, idRegiao: 4 },
    { name: 'Bento Gonçalves', lat: -29.1672, lng: -51.5182, idRegiao: 4 },
    { name: 'Boa Vista do Sul', lat: -29.2628, lng: -51.7606, idRegiao: 4 },
    { name: 'Carlos Barbosa', lat: -29.2764, lng: -51.5253, idRegiao: 4 },
    { name: 'Caxias do Sul', lat: -29.1688, lng: -51.1797, idRegiao: 4 },
    { name: 'Coronel Pilar', lat: -29.2872, lng: -51.4936, idRegiao: 4 },
    { name: 'Cotiporã', lat: -29.1719, lng: -51.5286, idRegiao: 4 },
    { name: 'Farroupilha', lat: -29.1786, lng: -51.3394, idRegiao: 4 },
    { name: 'Flores da Cunha', lat: -29.1369, lng: -51.0864, idRegiao: 4 },
    { name: 'Fagundes Varela', lat: -29.2328, lng: -51.2575, idRegiao: 4 },
    { name: 'Garibaldi', lat: -29.2072, lng: -51.5322, idRegiao: 4 },
    { name: 'Monte Belo do Sul', lat: -29.2433, lng: -51.5814, idRegiao: 4 },
    { name: 'Nova Pádua', lat: -29.3186, lng: -51.2164, idRegiao: 4 },
    { name: 'Nova Roma do Sul', lat: -29.2689, lng: -51.2286, idRegiao: 4 },
    { name: 'Pinto Bandeira', lat: -29.2533, lng: -51.5864, idRegiao: 4 },
    { name: 'Santa Tereza', lat: -29.2797, lng: -51.4908, idRegiao: 4 },
    { name: 'São Marcos', lat: -29.2167, lng: -51.0533, idRegiao: 4 },
    { name: 'Veranópolis', lat: -28.9783, lng: -51.5567, idRegiao: 4 },
    { name: 'Vila Flores', lat: -29.1511, lng: -51.3181, idRegiao: 4 },

        // Cidades com idRegiao 5
    { name: 'Bom Jesus', lat: -28.0553, lng: -50.0992, idRegiao: 5 },
    { name: 'Cambará do Sul', lat: -29.0950, lng: -50.0308, idRegiao: 5 },
    { name: 'Capão Bonito do Sul', lat: -28.3294, lng: -50.3425, idRegiao: 5 },
    { name: 'Esmeralda', lat: -28.7369, lng: -51.3908, idRegiao: 5 },
    { name: 'Ipê', lat: -28.5797, lng: -51.4669, idRegiao: 5 },
    { name: 'Jaquirana', lat: -29.3314, lng: -50.8975, idRegiao: 5 },
    { name: 'Lagoa Vermelha', lat: -28.2347, lng: -50.2383, idRegiao: 5 },
    { name: 'Monte Alegre dos Campos', lat: -28.5097, lng: -50.4150, idRegiao: 5 },
    { name: 'Muitos Capões', lat: -28.5350, lng: -51.3742, idRegiao: 5 },
    { name: 'São Francisco de Paula', lat: -29.2350, lng: -50.8683, idRegiao: 5 },
    { name: 'Vacaria', lat: -28.5086, lng: -50.9397, idRegiao: 5 },

    // Cidades com idRegiao 6
    { name: 'Arroio do Padre', lat: -31.5173, lng: -52.0667, idRegiao: 6 },
    { name: 'Capão do Leão', lat: -31.7345, lng: -52.3454, idRegiao: 6 },
    { name: 'Canguçu', lat: -31.8069, lng: -52.1967, idRegiao: 6 },
    { name: 'Cerrito', lat: -31.8323, lng: -52.3853, idRegiao: 6 },
    { name: 'Cristal', lat: -30.9456, lng: -52.1884, idRegiao: 6 },
    { name: 'Jaguarão', lat: -33.6019, lng: -53.3836, idRegiao: 6 },
    { name: 'Morro Redondo', lat: -31.7720, lng: -52.2031, idRegiao: 6 },
    { name: 'Pedro Osório', lat: -31.7969, lng: -52.3196, idRegiao: 6 },
    { name: 'Pelotas', lat: -31.7716, lng: -52.3420, idRegiao: 6 },
    { name: 'Piratini', lat: -31.7831, lng: -52.7591, idRegiao: 6 },
    { name: 'São Lourenço do Sul', lat: -31.3719, lng: -52.0294, idRegiao: 6 },
    { name: 'Turuçu', lat: -31.7127, lng: -52.2112, idRegiao: 6 },

    // Cidades com idRegiao 7
    { name: 'Chuí', lat: -33.6642, lng: -53.4641, idRegiao: 7 },
    { name: 'Rio Grande', lat: -32.0336, lng: -52.0944, idRegiao: 7 },
    { name: 'Santa Vitória do Palmar', lat: -33.6414, lng: -53.3844, idRegiao: 7 },
    { name: 'São José do Norte', lat: -32.1719, lng: -52.1075, idRegiao: 7 },

        // Cidades com idRegiao 8
    { name: 'Agudo', lat: -29.6975, lng: -53.5856, idRegiao: 8 },
    { name: 'Dona Francisca', lat: -29.6667, lng: -53.6333, idRegiao: 8 },
    { name: 'Faxinal do Soturno', lat: -29.7142, lng: -53.6064, idRegiao: 8 },
    { name: 'Ivorá', lat: -29.6978, lng: -53.5636, idRegiao: 8 },
    { name: 'Itaara', lat: -29.7792, lng: -53.5689, idRegiao: 8 },
    { name: 'Jari', lat: -29.6386, lng: -53.4914, idRegiao: 8 },
    { name: 'Júlio de Castilhos', lat: -29.6803, lng: -53.5961, idRegiao: 8 },
    { name: 'Nova Palma', lat: -29.5925, lng: -53.5631, idRegiao: 8 },
    { name: 'Pinhal Grande', lat: -29.6169, lng: -53.5189, idRegiao: 8 },
    { name: 'Quevedos', lat: -29.6842, lng: -53.5500, idRegiao: 8 },
    { name: 'Santa Maria', lat: -29.6864, lng: -53.8058, idRegiao: 8 },
    { name: 'São João do Polêsine', lat: -29.7114, lng: -53.5428, idRegiao: 8 },
    { name: 'São Martinho da Serra', lat: -29.5914, lng: -53.6572, idRegiao: 8 },
    { name: 'São Pedro do Sul', lat: -29.7011, lng: -53.5106, idRegiao: 8 },
    { name: 'Silveira Martins', lat: -29.6922, lng: -53.4858, idRegiao: 8 },

    // Cidades com idRegiao 9
    { name: 'Capão do Cipó', lat: -29.2750, lng: -53.0694, idRegiao: 9 },
    { name: 'Itacurubi', lat: -29.3886, lng: -53.1147, idRegiao: 9 },
    { name: 'Jaguari', lat: -29.3014, lng: -53.1156, idRegiao: 9 },
    { name: 'Nova Esperança do Sul', lat: -29.3392, lng: -53.0228, idRegiao: 9 },
    { name: 'Santiago', lat: -29.1917, lng: -54.9719, idRegiao: 9 },
    { name: 'São Francisco de Assis', lat: -29.8833, lng: -55.1667, idRegiao: 9 },
    { name: 'São Vicente do Sul', lat: -29.4361, lng: -54.3747, idRegiao: 9 },
    { name: 'Unistalda', lat: -29.3608, lng: -54.5719, idRegiao: 9 },

    // Cidades com idRegiao 10
    { name: 'Arroio do Tigre', lat: -29.3406, lng: -52.7894, idRegiao: 10 },
    { name: 'Candelária', lat: -29.3147, lng: -52.6028, idRegiao: 10 },
    { name: 'Encruzilhada do Sul', lat: -30.2622, lng: -52.3861, idRegiao: 10 },
    { name: 'Estrela Velha', lat: -29.2283, lng: -52.6589, idRegiao: 10 },
    { name: 'Ibarama', lat: -29.3097, lng: -52.7439, idRegiao: 10 },
    { name: 'Lagoa Bonita do Sul', lat: -29.2178, lng: -52.8350, idRegiao: 10 },
    { name: 'Lagoão', lat: -29.2178, lng: -52.7000, idRegiao: 10 },
    { name: 'Passa Sete', lat: -29.2978, lng: -52.7883, idRegiao: 10 },
    { name: 'Rio Pardo', lat: -29.4903, lng: -52.2189, idRegiao: 10 },
    { name: 'Salto do Jacuí', lat: -29.4492, lng: -52.6878, idRegiao: 10 },
    { name: 'Santa Cruz do Sul', lat: -29.7158, lng: -52.4294, idRegiao: 10 },
    { name: 'Segredo', lat: -29.5964, lng: -52.8414, idRegiao: 10 },
    { name: 'Sinimbu', lat: -29.7719, lng: -52.8047, idRegiao: 10 },
    { name: 'Sobradinho', lat: -29.8256, lng: -52.9836, idRegiao: 10 },
    { name: 'Vale do Sol', lat: -29.5986, lng: -52.7411, idRegiao: 10 },
    { name: 'Venâncio Aires', lat: -29.6078, lng: -52.2078, idRegiao: 10 },
    { name: 'Vera Cruz', lat: -29.5989, lng: -52.3000, idRegiao: 10 },

    // Cidades da Região 11
    { name: 'Florianópolis', lat: -27.5954, lng: -48.5480, idRegiao: 11 },
    { name: 'São José', lat: -27.5957, lng: -48.5490, idRegiao: 11 },
    { name: 'Palhoça', lat: -27.6610, lng: -48.6500, idRegiao: 11 },
    { name: 'Biguaçu', lat: -27.3839, lng: -48.6700, idRegiao: 11 },
    { name: 'Governador Celso Ramos', lat: -27.2192, lng: -48.5647, idRegiao: 11 },

    // Cidades da Região 12
    { name: 'Joinville', lat: -26.3044, lng: -48.8486, idRegiao: 12 },
    { name: 'São Francisco do Sul', lat: -26.2522, lng: -48.6344, idRegiao: 12 },
    { name: 'Itapoá', lat: -26.2392, lng: -48.5775, idRegiao: 12 },
    { name: 'Jaraguá do Sul', lat: -26.4975, lng: -49.0744, idRegiao: 12 },

    // Cidades da Região 13
    { name: 'Blumenau', lat: -26.9211, lng: -49.0700, idRegiao: 13 },
    { name: 'Brusque', lat: -27.0958, lng: -48.8833, idRegiao: 13 },
    { name: 'Gaspar', lat: -26.9269, lng: -49.0647, idRegiao: 13 },
    { name: 'Indaial', lat: -26.8986, lng: -49.2200, idRegiao: 13 },

    // Cidades da Região 14
    { name: 'Lages', lat: -27.8157, lng: -50.3257, idRegiao: 14 },
    { name: 'São Joaquim', lat: -28.2739, lng: -49.9375, idRegiao: 14 },
    { name: 'Urubici', lat: -28.0172, lng: -49.5669, idRegiao: 14 },

    // Cidades da Região 15
    { name: 'Chapecó', lat: -27.1019, lng: -52.6111, idRegiao: 15 },
    { name: 'São Miguel do Oeste', lat: -26.7100, lng: -53.4897, idRegiao: 15 },
    { name: 'Descanso', lat: -26.7889, lng: -53.2158, idRegiao: 15 }

];

const regioes = [
    { numero: 1, nome: "Região Imediata de Porto Alegre" },
    { numero: 2, nome: "Região Imediata de Novo Hamburgo-São Leopoldo" },
    { numero: 3, nome: "Região Imediata de Montenegro" },
    { numero: 4, nome: "Região Imediata de Caxias do Sul" },
    { numero: 5, nome: "Região Imediata de Vacaria" },
    { numero: 6, nome: "Região Imediata de Pelotas" },
    { numero: 7, nome: "Região Imediata de Rio Grande" },
    { numero: 8, nome: "Região Imediata de Santa Maria" },
    { numero: 9, nome: "Região Imediata de Santiago" },
    { numero: 10, nome: "Região Imediata de Santa Cruz do Sul" },
    { numero: 11, nome: "Região Imediata de Florianópolis" },
    { numero: 12, nome: "Região Imediata de Joinville" },
    { numero: 13, nome: "Região Imediata de Blumenau" },
    { numero: 14, nome: "Região Intermediária de Lages" },
    { numero: 15, nome: "Região Intermediária de Chapecó" }
];

// Cores das regiões
var regionColors = {
    1: '#FF0000',  // Vermelho
    2: '#00FF00',  // Verde
    3: '#0000FF',  // Azul
    4: '#FFFF00',  // Amarelo
    5: '#FF00FF',  // Magenta
    6: '#00FFFF',  // Ciano
    7: '#FFA500',  // Laranja
    8: '#800080',  // Roxo
    9: '#808080',  // Cinza
    10: '#008000', // Verde escuro
    11: '#8B4513', // Marrom
    12: '#00BFFF', // Azul claro
    13: '#FFD700', // Dourado
    14: '#DC143C', // Vermelho escuro
    15: '#7FFF00'  // Verde limão
};