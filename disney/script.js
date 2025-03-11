$(function () {
    var arrLang = {
        'en': { // Inglês
            'filmes': 'Movies',
            'animacoes': 'Animations',
            'cadastro': 'Register',
            'idiomas': 'Languages',
            'nome:': 'Name:',
            'email:': 'Email:',
            'senha:': 'Password:',
            'enviar': 'Submit',
            'descricao_capitao_america': 'Sam finds himself in the middle of an international incident after meeting President Thaddeus Ross. He must uncover the reason behind a nefarious global plot before the true mastermind makes the whole world see red.',
            'descricao_deadpool_wolverine': 'Wolverine is recovering when he crosses paths with Deadpool. Together, they form a team and face a common enemy.',
            'descricao_indiana_jones': 'Archaeologist Indiana Jones races against time to recover a powerful artifact that could change the course of history. Accompanied by his goddaughter, he must face Jürgen Voller, a former Nazi working for NASA.',
            'descricao_wakanda': 'Queen Ramonda, Shuri, M\'Baku, Okoye, and the Dora Milaje fight to protect their nation from intervening world powers after the death of King T\'Challa.',
            'descricao_pequena_sereia': 'The film tells the story of Princess Ariel (Halle Bailey), a young mermaid who wants to explore the world beyond the sea. The character breaks the rule that mermaids should not make contact with humans when she falls in love with Prince Eric (Jonah Hauer-King) after saving his life from a shipwreck.',
            'descricao_cruella': 'Smart, creative, and determined, Estella wants to make a name for herself through her designs and ends up catching the attention of Baroness Von Hellman. However, their relationship triggers a course of events and revelations that make Estella embrace her rebellious side and become Cruella, a bad, elegant, and revenge-driven person.',
            'descricao_mansao': 'A woman and her son recruit a motley crew of so-called spiritual experts to help rid their home of supernatural invaders.',
            'descricao_jungle_cruise': 'Dr. Lily Houghton enlists the help of the shrewd Captain Frank Wolff to take her to the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal - a discovery that could change the future of medicine.',
            'descricao_moana2': 'Sequel to the already classic Disney musical animation, Moana 2 follows the reunion of Moana and Maui for a new adventure across the seas. Three years after the last sea voyage, a call from her ancestors takes the young Polynesian Moana back to dangerous and distant waters of Oceania with an unlikely group of sailors. With the help of the demigod Maui, she must break a terrible curse that a cruel and power-hungry god has placed on one of her people\'s islands. In this grand mission, Moana and her team will explore new territories and face old and new enemies, such as sea monsters, spells, and evil gods. All in search of reconnecting her nation and ensuring the peace of the oceans.',
            'descricao_divertidamente2': 'Inside Out 2 marks the sequel to the famous story of Riley (Kaitlyn Dias). With a time jump, the girl is now older, 13 years old, going through the much-feared pre-adolescence. Along with maturity, the young girl\'s mental control room is also undergoing demolition to make way for something totally unexpected: new emotions. The already known, Joy (Amy Poehler), Sadness (Phyllis Smith), Anger (Lewis Black), Fear (Tony Hale), and Disgust (Liza Lapira), who since Riley was a baby, they dominate the girl\'s control center in a successful operation, with some failures along the way as presented in the first film. The old emotions are not sure how to feel and act when new tenants arrive at the place, one of them being the much-feared Anxiety (Maya Hawke). Envy (Ayo Edebiri), Boredom (Adèle Exarchopoulos), and Embarrassment (Paul Walter Hauser) will join together with Anxiety in Riley\'s mind, as well as Nostalgia (June Squibb) who will also appear.',
            'descricao_elementos': 'Elemental is an animated film set in an extraordinary society called Element City, where the four elements of nature - air, earth, fire, and water - live in complete harmony. In the story, we are introduced to Ember (fire, voiced by Leah Lewis), a spirited woman in her twenties, with a great sense of humor and passionate about family, but who has a bit of a hot temper; Wade (water, voiced by Mamoudou Athie) is an empathetic, observant, and outgoing young man, who is not afraid to show his emotions - in fact, it\'s a bit hard to control them; Clod (earth, voiced by Mason Wertheimer) is a very intelligent earth boy who lives in Fire Town, and is always close to Ember; and Gale (air, voiced by Wendi McLendon-Covey), who has a cute and pink personality, is always attentive to fashion trends and is a fan of the Windbreakers, an Air Ball team.',
            'descricao_encanto': 'Encanto is Disney\'s new animated film, set in Colombia. In it, the Madrigal family and the community around the family\'s house are surrounded by mountains, which protect them from the evils of the world. However, the Madrigal family is endowed with magic, with each member of the family having some magical power that is used to help the community. Although the family is endowed with magic, only one member of it did not receive her gift when she was five years old, Mirabel, who always tries to help the family and the community as she can, but no matter what she does, she can never please her Abuela. One day, on the night one of her cousins receives her gifts, she sees the family\'s house cracking, something that is dismissed by the family, since she has no magical powers. Mirabel then embarks on her own adventure to find out what is wrong with the house and save everyone in her family, and the only one who can give the answers is her uncle Bruno, who sees the future. The only problem is that he left one day and never came back.',
            'descricao_mundo_estranho': 'In Strange World, the Clade family is not very like the others. They are explorers who discover new lands and are on a mission to explore a strange and unknown world. However, the differences between the family members may put their new mission at risk. Jaeger Clade and his son Searcher are adventurers who explore the wilderness to discover new worlds. While trying to cross a mountain that surrounds the land of Avalonia, Searcher discovers a plant that emits energy, called Pando, which can be used as an energy source for Avalonia. However, father and son end up disagreeing and one continues a solo mission while the other uses the new species to help the world. 25 years later, Callisto Mal, leader of Avalonia, urgently appears to inform that Pando is losing its power. To find out what is happening, the Clade family assembles a specialized team to go after the source of Pando, in its deepest roots.',
            'descricao_luca': 'In Luca, we follow the curious sea monster named Luca, as he lives herding some fish and lives with his parents and grandmother, who do not let him get close to the surface, as there live the humans who can kill them. On any given day, Luca, with much curiosity, finds some objects that came from the surface and ends up meeting Alberto, another sea monster who collects objects from humans. Luca then decides to go with Alberto to the surface, where he realizes that upon contact with the land, he gets a human body and can walk, but when touching the water his scales return. Falling in love with friendship and the things humans have created, Luca and Alberto plan to go to the nearest village and get a Vespa, so they can travel the world. They meet Giulia, a human girl and her father, and stuff themselves with gelato and pasta while they cannot say who they really are.',
            'descricao_viva': 'In Coco, Miguel is a 12-year-old boy who really wants to be a famous musician, but he has to deal with his family who disapproves of his dream. Determined to turn the game around, he ends up triggering a series of events linked to a 100-year-old mystery. The adventure, inspired by the Mexican holiday of the Day of the Dead, ends up generating an extraordinary family reunion.',
            'descricao_lilo': 'Live-action of the famous Disney animated classic, Lilo & Stitch, where Stitch (Chris Sanders), experiment 626, is an expressive alien who was adopted as a pet by Lilo (Maia Kealoha) and together they discover the meaning of family.',
            'Capitão América: Admirável Mundo Novo': 'Captain America: Brave New World',
            'Deadpool & Wolverine': 'Deadpool & Wolverine',
            'Indiana Jones': 'Indiana Jones',
            'Pantera Negra: Wakanda Para Sempre': 'Black Panther: Wakanda Forever',
            'pequena sereia': 'The Little Mermaid',
            'cruella': 'Cruella',
            'mansao mal-assombrada': 'Haunted Mansion',
            'jungle cruise': 'Jungle Cruise',
            'Moana 2': 'Moana 2',
            'Divertidamente 2': 'Inside Out 2',
            'Elementos': 'Elemental',
            'Encanto': 'Encanto',
            'mundo estranho': 'Strange World',
            'luca': 'Luca',
            'viva: a vida é uma festa': 'Coco',
            'lilo & stich': 'Lilo & Stitch'
        },
        'pt': { // Português
            'filmes': 'Filmes',
            'animacoes': 'Animações',
            'cadastro': 'Cadastro',
            'idiomas': 'Idiomas',
            'nome:': 'Nome:',
            'email:': 'Email:',
            'senha:': 'Senha:',
            'enviar': 'Enviar',
            'descricao_capitao_america': 'Capitão América: Admirável Mundo Novo é o próximo filme do famoso herói da Marvel. Desta vez, o filme dá continuidade à minissérie de televisão Falcão e o Soldado Invernal, onde o escudo está nas mãos de Sam Wilson (Anthony Mackie), após Steve Rogers (Chris Evans) o entregar em Vingadores: Ultimato. Durante a série, Sam aceita seu dever como o novo Capitão América ao lado de Bucky Barnes (Sebastian Stan). Admirável Mundo Novo compõe a Fase Cinco do Universo Cinematográfico Marvel (UCM). O enredo promete explorar os desafios e responsabilidades de Wilson em seu novo papel, enquanto enfrenta novas ameaças e aliados inesperados. A direção está a cargo de Julius Onah, conhecido por seu trabalho em The Cloverfield Paradox, e o roteiro foi escrito por Malcolm Spellman, que também foi o showrunner de Falcão e o Soldado Invernal.',
            'descricao_deadpool_wolverine': 'Deadpool & Wolverine reúne o icônico mercenário tagarela Wade Wilson (Ryan Reynolds) e o poderoso mutante Wolverine (Hugh Jackman) em uma aventura explosiva, escrita e produzida pelos mesmos talentos por trás de Deadpool (2016) e Deadpool 2 (2018). Wade Wilson desfruta de um momento de aparente calma ao lado de Vanessa (Morena Baccarin) e seus amigos e, em contra partida, Wolverine se recupera de seus ferimentos. Um têm os seus caminhos cruzados com o outro, dando início a uma improvável aliança. Juntos, eles enfrentam um inimigo formidável em comum, desencadeando uma jornada repleta de ação, humor e reviravoltas surpreendentes. Deadpool & Wolverine promete ser uma aventura épica, cheia de referências aos quadrinhos e momentos de pura adrenalina, proporcionando aos fãs uma experiência única e inesquecível no universo dos super-heróis.',
            'descricao_indiana_jones': 'Em Indiana Jones e a Relíquia do Destino, Indiana Jones (Harrisson Ford), famoso arqueólogo, professor e aventureiro, embarca em mais uma missão inesperada. Neste retorno do herói lendário, Indiana Jones, na quinta parcela da icônica série de filmes, encontra-se em uma nova era, aproximando-se da aposentadoria. Ele luta para se encaixar em um mundo que parece tê-lo superado. Mas quando as garras de um mal muito familiar retornam na forma de um antigo rival, Indiana Jones deve colocar seu chapéu e pegar seu chicote mais uma vez para garantir que um antigo e poderoso artefato não caia nas mãos erradas. Mas, desta vez, ele tem o sangue de uma nova geração para o ajudar nas suas descobertas e na sua luta contra o vilão Jürgen Voller (Mads Mikkelsen). Acompanhado de sua afilhada, Helena Shaw (Phoebe Waller-Bridge), o arqueólogo corre contra o tempo para recuperar o item que pode mudar o curso da história.',
            'descricao_wakanda': 'Pantera Negra: Wakanda Para Sempre é a continuação do longa Pantera Negra, da Marvel, dirigido por Ryan Coogler e produzido por Kevin Feige. No filme, o mundo de Wakanda se expande. Após a morte do ator de T\'Challa (Chadwick Boseman) o foco de Wakanda Para Sempre são os personagens em volta do Pantera Negra. Rainha Ramonda (Angela Bassett), Shuri (Letitia Wright), M\'Baku (Winston Duke), Okoye (Danai Gurira) e as Dora Milage lutam para proteger a nação fragilizada de outros países após a morte de T\'Challa. Enquanto o povo de Wakanda se esforça para continuar em frente neste novo capítulo, a família e amigos do falecido rei precisam se unir com a ajuda de Nakia (Lupita Nyong\'o), integrante dos Cães de Guerra, e Everett Ross (Martin Freeman). Em meio a isso tudo, Wakanda ainda terá que aprender a conviver com a nação debaixo d\'água, Talokan, e seu rei Namor (Tenoch Huerta).',
            'descricao_pequena_sereia': 'Remake live action do clássico desenho animado A Pequena Sereia, de 1989, da Disney. A caçula das filhas do Rei Tritão (Javier Bardem), Ariel (Halle Bailey) é uma bela e espirituosa jovem sereia com sede de aventura. Desejando descobrir mais sobre o mundo além do mar, Ariel visita a superfície e se apaixona intensamente pelo arrojado Príncipe Eric (Jonah Hauer-King), ao salvá-lo de um naufrágio. Mas para procurá-lo em terra firme e se aproximar do príncipe humano, a sereia pede ajuda à bruxa do mar, Úrsula (Melissa McCarthy), e aceita ceder sua voz para que a feiticeira lhe dê pernas. Agora, ela terá o desafio de se comunicar com o rapaz ao experimentar a vida em terra firme, além de entrar em conflito com os valores de sua família. "A Pequena Sereia" é um conto de fadas literário escrito pelo autor dinamarquês Hans Christian Andersen, publicado pela primeira vez em 1837.',
            'descricao_cruella': 'Ambientado na Londres dos anos 70 em meio à revolução do punk rock, o filme da Disney mostra a história de uma jovem vigarista chamada Estella (Emma Stone). Inteligente, criativa e determinada a fazer um nome para si através de seus designs, ela acaba chamando a atenção da Baronesa Von Hellman (Emma Thompson), uma lenda fashion que é devastadoramente chique e assustadora. Entretanto, o relacionamento delas desencadeia um curso de eventos e revelações que farão com que Estella abrace seu lado rebelde e se torne a Cruella, uma pessoa má, elegante e voltada para a vingança.',
            'descricao_mansao': 'Inspirado na atração clássica do parque temático, Mansão Mal-Assombrada é sobre uma mulher e seu filho que alistam uma equipe heterogênea dos chamados especialistas espirituais para ajudar a livrar sua casa de invasores sobrenaturais. Gabbie (Rosario Dawson) é uma mãe solteira que se muda com seu filho de nove anos para uma mansão em Nova Orleans que eles compraram por um preço surpreendentemente baixo. Eles querem começar uma nova vida ali, mas logo percebem que algo está errado com a casa. É assombrado e Gabbie pede a ajuda do padre local Kent (Owen Wilson). Ele, por sua vez, traz uma cientista viúva e uma vidente malsucedida (LaKeith Stanfield), uma médium do bairro francês (Tiffany Haddish) e um historiador obstinado (Danny DeVito). Juntos, eles querem livrar a casa dos espíritos malignos.',
            'descricao_jungle_cruise': 'Jungle Cruise gira ao redor do malandro e brincalhão Frank Wolff (Dwayne Johnson), capitão do barco La Guilla. Ele é contratado pela Dra. Lily Houghton (Emily Blunt) e seu irmão McGregor (Jack Whitehall) para levá-los em uma missão pelas densas florestas amazônicas com a intenção de encontrar uma misteriosa árvore com poderes de cura que poderá mudar para sempre o futuro da medicina. No caminho, eles viverão inúmeros perigos, enfrentando animais selvagens e até mesmo forças sobrenaturais.',
            'descricao_moana2': 'Sequência da já clássica animação musical da Disney, Moana 2 acompanha o reencontro de Moana e Maui para uma nova aventura pelos mares. Passados três anos desde a última jornada marítima, um chamado de seus ancestrais leva a jovem polinésia Moana de volta para águas perigosas e distantes da Oceania com um grupo improvável de marinheiros. Com a ajuda também do semideus Maui, ela deve quebrar uma maldição terrível que um deus cruel e com sede de poder colocou sobre uma das ilhas de seu povo. Nessa grandiosa missão, Moana e sua equipe vão desbravar novos territórios e enfrentar velhos e novos inimigos, como monstros marítimos, feitiços e deuses do mal. Tudo isso em busca de reconectar sua nação e assegurar a paz dos oceanos.',
            'descricao_divertidamente2': 'Divertidamente 2 marca a sequência da famosa história de Riley (Kaitlyn Dias). Com um salto temporal, a garota agora se encontra mais velha, com 13 anos de idade, passando pela tão temida pré-adolescência. Junto com o amadurecimento, a sala de controle mental da jovem também está passando por uma demolição para dar lugar a algo totalmente inesperado: novas emoções. As já conhecidas, Alegria (Amy Poehler), Tristeza (Phyllis Smith), Raiva (Lewis Black), Medo (Tony Hale) e Nojinho (Liza Lapira), que desde quando Riley é bebê, eles predominam a central de controle da garota em uma operação bem-sucedida, tendo algumas falhas no percurso como foi apresentado no primeiro filme. As antigas emoções não têm certeza de como se sentir e com agir quando novos inquilinos chegam ao local, sendo um deles a tão temida Ansiedade (Maya Hawke). Inveja (Ayo Edebiri), Tédio (Adèle Exarchopoulos) e Vergonha (Paul Walter Hauser) integrarão juntos com a Ansiedade na mente de Riley, assim como a Nostalgia (June Squibb) que aparecerá também.',
            'descricao_elementos': 'Elementos é um filme de animação que se passa em uma sociedade extraordinária chamada Cidade Elemento, na qual os quatro elementos da natureza - ar, terra, fogo e ar - vivem em completa harmonia. Na história, somos apresentados à Faísca (fogo, dublada por Leah Lewis), uma mulher espirituosa na faixa dos vinte anos, com um grande senso de humor e apaixonada pela família, mas que tem um temperamento um pouco quente; Gota (água, dublado por Mamoudou Athie) é um jovem empático, observador e extrovertido, que não tem medo de demonstrar suas emoções - na verdade, é até um pouco difícil controlá-las; Turrão (terra, dublado por Mason Wertheimer) é um garoto muito inteligente da terra que mora na Vila do Fogo, e está sempre perto de Faísca; e Névoa (ar, dublada por Wendi McLendon-Covey), que tem uma personalidade fofa e rosa, está sempre atenta às tendências da moda e é fã dos Windbreakers, um time de Air Ball.',
            'descricao_encanto': 'Encanto é o novo filme de animação da Disney, situada na Colômbia. Nela, a família Madrigal e a comunidade em volta da casa da família é cercada por montanhas, que os deixam protegidos dos maus do mundo. Porém, a família Madrigal é dotada de magia, com cada um dos integrantes da família tendo algum poder mágico que é usado para ajudar a comunidade. Apesar da família ser dotada de magia, apenas um integrante dela não recebeu seu dom quando tinha cinco anos, Mirabel, que sempre tenta ajudar a família e a comunidade como consegue, mas não importa o que faça, ela nunca consegue agradar sua Abuela. Um dia, na noite em que um de seus primos recebe seus dons, ela vê a casa da família rachando, algo que é relevado pela família, já que ela não tem poderes mágicos. Mirabel então parte em uma aventura própria para achar o que há de errado com a casa e salvar todos de sua família, e o único que pode dar as respostas é seu tio Bruno, que vê o futuro. O único problema é que ele saiu um dia e nunca mais voltou.',
            'descricao_mundo_estranho': 'Em Mundo Estranho, A família Clade não é muito igual as outras. Eles são exploradores que desbravam novas terras e estão em uma missão para explorar um mundo estranho e não conhecido. Porém, as diferenças entre os membros da família podem por sua nova missão em risco. Jaeger Clade e seu filho Searcher são aventureiros que desbravam o deserto para explorar novos mundos. Ao tentar atravessar uma montanha que circunda a terra de Avalonia, Searcher descobre uma planta que emite energia, chamada de Pando que pode ser usada como fonte de energia para Avalonia. Porém pai e filho acabam desconcordando e um continua uma missão solo enquanto o outro usa a nova espécie para ajudar o mundo. 25 anos depois, Callisto Mal, líder de Avalonia, aparece urgentemente para informar que a Pando está perdendo seu poder. Para descobrir o que está acontecendo, a família Clade monta uma equipe especializada para ir atrás da fonte de Pando, nas suas raízes mais profundas.',
            'descricao_luca': 'Em Luca, acompanhamos o curioso monstro do mar chamado Luca, enquanto ele vive pastoreando alguns peixes e vive com os pais e a avó, que não o deixam chegar perto da superfície, já que lá habitam os humanos que podem matá-los. Em um dia qualquer, Luca, com muita curiosidade, acha alguns objetos que vieram da superfície e acaba conhecendo Alberto, outro monstro marinho e que coleciona objetos de humanos. Luca então decide ir com Alberto para superfície, onde ele percebe que ao entrar em contato com a terra, fica com corpo de humano e consegue andar, mas ao tocar na água suas escamas voltam. Ficando apaixonado pela amizade e por coisas que os humanos criaram, Luca e Alberto combinam de ir para a vila mais próxima e conseguir uma Vespa, assim poderão viajar o mundo. Eles conhecem Júlia, uma garota humana e seu pai, e se estufam de gelattos e massas enquanto não podem falar quem realmente são.',
            'descricao_viva': 'Em Viva - A Vida é uma Festa, Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos. A aventura, com inspiração no feriado mexicano do Dia dos Mortos, acaba gerando uma extraordinária reunião familiar.',
            'descricao_lilo': 'Live-action do famoso clássico de animação da Disney, Lilo & Stitch, onde Stitch (Chris Sanders), o experimento 626, é um alienígena expressivo que foi adotado como animal de estimação por Lilo (Maia Kealoha) e juntos eles descobrem o significado de família.',
            'Capitão América: Admirável Mundo Novo': 'Capitão América: Admirável Mundo Novo',
            'Deadpool & Wolverine': 'Deadpool & Wolverine',
            'Indiana Jones': 'Indiana Jones',
            'Pantera Negra: Wakanda Para Sempre': 'Pantera Negra: Wakanda Para Sempre',
            'pequena sereia': 'A Pequena Sereia',
            'cruella': 'Cruella',
            'mansao mal-assombrada': 'Mansão Mal-Assombrada',
            'jungle cruise': 'Jungle Cruise',
            'Moana 2': 'Moana 2',
            'Divertidamente 2': 'Divertidamente 2',
            'Elementos': 'Elementos',
            'Encanto': 'Encanto',
            'mundo estranho': 'Mundo Estranho',
            'luca': 'Luca',
            'viva: a vida é uma festa': 'Viva: A Vida é uma Festa',
            'lilo & stich': 'Lilo & Stitch'
        },
        'es': { // Espanhol
            'filmes': 'Películas',
            'animacoes': 'Animaciones',
            'cadastro': 'Registro',
            'idiomas': 'Idiomas',
            'nome:': 'Nombre:',
            'email:': 'Correo electrónico:',
            'senha:': 'Contraseña:',
            'enviar': 'Enviar',
            'descricao_capitao_america': 'Sam se encuentra en medio de un incidente internacional después de reunirse con el presidente Thaddeus Ross. Debe descubrir la razón detrás de una trama global nefasta antes de que el verdadero cerebro haga que el mundo entero vea rojo.',
            'descricao_deadpool_wolverine': 'Wolverine se está recuperando cuando se cruza con Deadpool. Juntos, forman un equipo y enfrentan a un enemigo común.',
            'descricao_indiana_jones': 'El arqueólogo Indiana Jones compite contra el tiempo para recuperar un poderoso artefacto que podría cambiar el curso de la historia. Acompañado por su ahijada, debe enfrentarse a Jürgen Voller, un exnazi que trabaja para la NASA.',
            'descricao_wakanda': 'La reina Ramonda, Shuri, M\'Baku, Okoye y las Dora Milaje luchan por proteger a su nación de las potencias mundiales que intervienen tras la muerte del rey T\'Challa.',
            'descricao_pequena_sereia': 'La película cuenta la historia de la Princesa Ariel (Halle Bailey), una joven sirena que quiere explorar el mundo más allá del mar. El personaje rompe la regla de que las sirenas no deben hacer contacto con los humanos cuando se enamora del Príncipe Eric (Jonah Hauer-King) después de salvar su vida de un naufragio.',
            'descricao_cruella': 'Inteligente, creativa y decidida, Estella quiere hacerse un nombre a través de sus diseños y termina llamando la atención de la Baronesa Von Hellman. Sin embargo, su relación desencadena una serie de eventos y revelaciones que hacen que Estella abrace su lado rebelde y se convierta en Cruella, una persona mala, elegante y orientada a la venganza.',
            'descricao_mansao': 'Una mujer y su hijo reclutan a un variopinto grupo de supuestos expertos espirituales para ayudar a liberar su hogar de invasores sobrenaturales.',
            'descricao_jungle_cruise': 'La Dra. Lily Houghton recluta la ayuda del astuto Capitán Frank Wolff para llevarla al Amazonas en su barco destartalado. Juntos, buscan un árbol ancestral que tiene el poder de curar, un descubrimiento que podría cambiar el futuro de la medicina.',
            'descricao_moana2': 'Secuela de la ya clásica animación musical de Disney, Moana 2 sigue el reencuentro de Moana y Maui para una nueva aventura a través de los mares. Tres años después del último viaje marítimo, un llamado de sus ancestros lleva a la joven polinesia Moana de regreso a aguas peligrosas y distantes de Oceanía con un grupo improbable de marineros. Con la ayuda también del semidiós Maui, ella debe romper una terrible maldición que un dios cruel y sediento de poder ha colocado sobre una de las islas de su pueblo. En esta grandiosa misión, Moana y su equipo explorarán nuevos territorios y enfrentarán viejos y nuevos enemigos, como monstruos marinos, hechizos y dioses malvados. Todo en busca de reconectar su nación y asegurar la paz de los océanos.',
            'descricao_divertidamente2': 'Intensamente 2 marca la secuela de la famosa historia de Riley (Kaitlyn Dias). Con un salto en el tiempo, la chica ahora es mayor, con 13 años de edad, pasando por la tan temida preadolescencia. Junto con la madurez, la sala de control mental de la joven también está pasando por una demolición para dar paso a algo totalmente inesperado: nuevas emociones. Las ya conocidas, Alegría (Amy Poehler), Tristeza (Phyllis Smith), Ira (Lewis Black), Miedo (Tony Hale) y Asco (Liza Lapira), que desde que Riley era un bebé, dominan el centro de control de la chica en una operación exitosa, con algunos fallos en el camino como se presentó en la primera película. Las emociones antiguas no están seguras de cómo sentirse y actuar cuando nuevos inquilinos llegan al lugar, siendo uno de ellos la tan temida Ansiedad (Maya Hawke). Envidia (Ayo Edebiri), Aburrimiento (Adèle Exarchopoulos) y Vergüenza (Paul Walter Hauser) se unirán junto con la Ansiedad en la mente de Riley, así como la Nostalgia (June Squibb) que también aparecerá.',
            'descricao_elementos': 'Elemental es una película de animación ambientada en una sociedad extraordinaria llamada Ciudad Elemento, donde los cuatro elementos de la naturaleza - aire, tierra, fuego y agua - viven en completa armonía. En la historia, nos presentan a Ember (fuego, doblada por Leah Lewis), una mujer enérgica de unos veinte años, con un gran sentido del humor y apasionada por la familia, pero que tiene un temperamento un poco caliente; Wade (agua, doblado por Mamoudou Athie) es un joven empático, observador y extrovertido, que no tiene miedo de mostrar sus emociones - de hecho, es un poco difícil controlarlas; Clod (tierra, doblado por Mason Wertheimer) es un chico muy inteligente de la tierra que vive en el Pueblo del Fuego, y siempre está cerca de Ember; y Gale (aire, doblada por Wendi McLendon-Covey), que tiene una personalidad linda y rosada, siempre está atenta a las tendencias de la moda y es fanática de los Windbreakers, un equipo de Air Ball.',
            'descricao_encanto': 'Encanto es la nueva película de animación de Disney, situada en Colombia. En ella, la familia Madrigal y la comunidad alrededor de la casa de la familia están rodeadas de montañas, que los protegen de los males del mundo. Sin embargo, la familia Madrigal está dotada de magia, con cada uno de los miembros de la familia teniendo algún poder mágico que se usa para ayudar a la comunidad. Aunque la familia está dotada de magia, solo un miembro de ella no recibió su don cuando tenía cinco años, Mirabel, que siempre trata de ayudar a la familia y a la comunidad como puede, pero no importa lo que haga, nunca puede complacer a su Abuela. Un día, en la noche en que uno de sus primos recibe sus dones, ella ve la casa de la familia agrietándose, algo que es descartado por la familia, ya que ella no tiene poderes mágicos. Mirabel entonces se embarca en su propia aventura para descubrir qué está mal con la casa y salvar a todos en su familia, y el único que puede dar las respuestas es su tío Bruno, que ve el futuro. El único problema es que él se fue un día y nunca regresó.',
            'descricao_mundo_estranho': 'En Mundo Extraño, la familia Clade no es muy parecida a las demás. Son exploradores que descubren nuevas tierras y están en una misión para explorar un mundo extraño y desconocido. Sin embargo, las diferencias entre los miembros de la familia pueden poner en riesgo su nueva misión. Jaeger Clade y su hijo Searcher son aventureros que exploran el desierto para descubrir nuevos mundos. Al intentar cruzar una montaña que rodea la tierra de Avalonia, Searcher descubre una planta que emite energía, llamada Pando, que puede usarse como fuente de energía para Avalonia. Sin embargo, padre e hijo terminan en desacuerdo y uno continúa una misión en solitario mientras el otro usa la nueva especie para ayudar al mundo. 25 años después, Callisto Mal, líder de Avalonia, aparece urgentemente para informar que Pando está perdiendo su poder. Para descubrir qué está sucediendo, la familia Clade arma un equipo especializado para ir tras la fuente de Pando, en sus raíces más profundas.',
            'descricao_luca': 'En Luca, seguimos al curioso monstruo marino llamado Luca, mientras vive pastoreando algunos peces y vive con sus padres y su abuela, que no lo dejan acercarse a la superficie, ya que allí viven los humanos que pueden matarlos. Un día cualquiera, Luca, con mucha curiosidad, encuentra algunos objetos que vinieron de la superficie y termina conociendo a Alberto, otro monstruo marino que colecciona objetos de humanos. Luca entonces decide ir con Alberto a la superficie, donde se da cuenta de que al entrar en contacto con la tierra, obtiene un cuerpo humano y puede caminar, pero al tocar el agua sus escamas vuelven. Enamorándose de la amistad y de las cosas que los humanos han creado, Luca y Alberto planean ir al pueblo más cercano y conseguir una Vespa, para poder viajar por el mundo. Conocen a Giulia, una chica humana y su padre, y se atiborran de helados y pasta mientras no pueden decir quiénes son realmente.',
            'descricao_viva': 'En Coco, Miguel es un niño de 12 años que realmente quiere ser un músico famoso, pero tiene que lidiar con su familia que desaprueba su sueño. Decidido a cambiar el juego, termina desencadenando una serie de eventos vinculados a un misterio de 100 años. La aventura, inspirada en la festividad mexicana del Día de los Muertos, termina generando una extraordinaria reunión familiar.',
            'descricao_lilo': 'Live-action del famoso clásico animado de Disney, Lilo & Stitch, donde Stitch (Chris Sanders), el experimento 626, es un alienígena expresivo que fue adoptado como mascota por Lilo (Maia Kealoha) y juntos descubren el significado de la familia.',
            'Capitão América: Admirável Mundo Novo': 'Capitán América: Un Nuevo Mundo Valiente',
            'Deadpool & Wolverine': 'Deadpool y Wolverine',
            'Indiana Jones': 'Indiana Jones',
            'Pantera Negra: Wakanda Para Sempre': 'Pantera Negra: Wakanda Por Siempre',
            'pequena sereia': 'La Sirenita',
            'cruella': 'Cruella',
            'mansao mal-assombrada': 'Mansión Embrujada',
            'jungle cruise': 'Jungle Cruise',
            'Moana 2': 'Moana 2',
            'Divertidamente 2': 'Intensamente 2',
            'Elementos': 'Elemental',
            'Encanto': 'Encanto',
            'mundo estranho': 'Mundo Extraño',
            'luca': 'Luca',
            'viva: a vida é uma festa': 'Coco',
            'lilo & stich': 'Lilo y Stitch'
        },
        'ar': { // Árabe
            'filmes': 'أفلام',
            'animacoes': 'رسوم متحركة',
            'cadastro': 'تسجيل',
            'idiomas': 'اللغات',
            'nome:': 'الاسم:',
            'email:': 'البريد الإلكتروني:',
            'senha:': 'كلمة المرور:',
            'enviar': 'إرسال',
            'descricao_capitao_america': 'سام يجد نفسه في وسط حادثة دولية بعد لقاء الرئيس ثاديوس روس. يجب أن يكشف السبب وراء مؤامرة عالمية خبيثة قبل أن يجعل العقل المدبر الحقيقي العالم كله يرى الأحمر.',
            'descricao_deadpool_wolverine': 'وولفرين يتعافى عندما يعبر طريقه مع ديدبول. معًا، يشكلان فريقًا ويواجهان عدوًا مشتركًا.',
            'descricao_indiana_jones': 'يعثر عالم الآثار إنديانا جونز على منافسة ضد الزمن لاستعادة قطعة أثرية قوية يمكن أن تغير مسار التاريخ. برفقة ابنة أخته، يجب أن يواجه يورغن فولر، النازي السابق الذي يعمل لصالح ناسا.',
            'descricao_wakanda': 'تقاتل الملكة راموندا، شوري، إم باكو، أوكوي، ودورا ميلاجي لحماية أمتهم من القوى العالمية المتدخلة بعد وفاة الملك تشانلا.',
            'descricao_pequena_sereia': 'يُروى الفيلم قصة الأميرة أرييل (هالي بيلي)، حورية البحر الشابة التي تريد استكشاف العالم خارج البحر. تكسر الشخصية القاعدة التي تقول إن حوريات البحر يجب ألا تتواصل مع البشر عندما تقع في حب الأمير إريك (جونا هاور كينغ) بعد إنقاذ حياته من حطام سفينة.',
            'descricao_cruella': 'إستيلا الذكية والمبدعة والمصممة تريد أن تصنع لنفسها اسمًا من خلال تصميماتها وتنتهي بجذب انتباه البارونة فون هيلمان. ومع ذلك، فإن علاقتهما تطلق سلسلة من الأحداث والكشفيات التي تجعل إستيلا تعتنق جانبها المتمرد وتصبح كرويلا، شخصية شريرة وأنيقة وموجهة نحو الانتقام.',
            'descricao_mansao': 'تستعين امرأة وابنها بمجموعة متنوعة من الخبراء الروحيين المزعومين للمساعدة في تخليص منزلها من الغزاة الخارقين.',
            'descricao_jungle_cruise': 'تستعين الدكتورة ليلي هوتون بمساعدة الكابتن فرانك وولف الذكي لأخذها إلى الأمازون في قاربه المتداعي. معًا، يبحثون عن شجرة قديمة تمتلك قوة الشفاء - اكتشاف يمكن أن يغير مستقبل الطب.',
            'descricao_moana2': 'تتابع موآنا 2، الجزء الثاني من الفيلم الموسيقي الكلاسيكي لديزني، لقاء موآنا وماوي مرة أخرى في مغامرة جديدة عبر البحار. بعد ثلاث سنوات من آخر رحلة بحرية، تستجيب موآنا الشابة البولينيزية لنداء أسلافها وتعود إلى مياه خطيرة وبعيدة في أوقيانوسيا مع مجموعة غير متوقعة من البحارة. بمساعدة الإله نصف الإله ماوي أيضًا، يجب عليها كسر لعنة رهيبة وضعها إله قاسٍ وعطش للسلطة على إحدى جزر شعبها. في هذه المهمة العظيمة، ستستكشف موآنا وفريقها أراضي جديدة وتواجه أعداءً قدامى وجددًا، مثل وحوش البحر والتعاويذ والآلهة الشريرة. كل ذلك بحثًا عن إعادة تواصل أمتها وضمان سلام المحيطات.',
            'descricao_divertidamente2': 'تُعد "داخل الخارج 2" الجزء الثاني من القصة الشهيرة لرايلي (كايتلين دياس). مع قفزة زمنية، أصبحت الفتاة الآن أكبر سنًا، تبلغ من العمر 13 عامًا، وتخوض مرحلة المراهقة المبكرة التي يخشاها الكثيرون. إلى جانب النضج، تخضع غرفة التحكم العقلية للفتاة لعملية هدم لإفساح المجال لشيء غير متوقع تمامًا: مشاعر جديدة. المشاعر المعروفة بالفعل، الفرح (إيمي بولر)، الحزن (فيلس سميث)، الغضب (لويس بلاك)، الخوف (توني هيل) والاشمئزاز (ليزا لابيرا)، التي تهيمن على مركز تحكم الفتاة منذ أن كانت طفلة في عملية ناجحة، مع بعض الإخفاقات على طول الطريق كما تم تقديمها في الفيلم الأول. المشاعر القديمة ليست متأكدة من كيفية الشعور والتصرف عندما يصل مستأجرون جدد إلى المكان، أحدهم القلق المخيف (مايا هوك). الحسد (آيو إديبيري)، الملل (أديل إكزاركوبولوس) والإحراج (بول والتر هاوزر) سينضمون مع القلق في عقل رايلي، وكذلك الحنين (جون سكويب) الذي سيظهر أيضًا.',
            'descricao_elementos': 'فيلم "عناصر" هو فيلم رسوم متحركة يدور في مجتمع غير عادي يسمى مدينة العناصر، حيث تعيش العناصر الأربعة للطبيعة - الهواء، الأرض، النار والماء - في وئام تام. في القصة، نتعرف على إمبر (النار، بصوت ليا لويس)، امرأة نشيطة في العشرينات من عمرها، تتمتع بحس فكاهي رائع وشغوفة بالعائلة، لكن لديها مزاج حاد بعض الشيء؛ ويد (الماء، بصوت مامودو آثي) هو شاب متعاطف، مراقب ومنفتح، لا يخاف من إظهار مشاعره - في الواقع، من الصعب بعض الشيء التحكم فيها؛ كلود (الأرض، بصوت ماسون ويرتهايمر) هو فتى ذكي جدًا من الأرض يعيش في قرية النار، ودائمًا ما يكون قريبًا من إمبر؛ وغيل (الهواء، بصوت ويندي ماكليندون-كوفي)، التي تتمتع بشخصية لطيفة ووردية، دائمًا ما تكون على دراية باتجاهات الموضة وهي من محبي فريق ويندبريكرز، فريق كرة الهواء.',
            'descricao_encanto': 'فيلم "إنكانتو" هو فيلم الرسوم المتحركة الجديد من ديزني، ويقع في كولومبيا. فيه، عائلة مادريغال والمجتمع المحيط بمنزل العائلة محاطون بالجبال، مما يحميهم من شرور العالم. ومع ذلك، فإن عائلة مادريغال تتمتع بالسحر، حيث يتمتع كل فرد من أفراد العائلة ببعض القوى السحرية التي تُستخدم لمساعدة المجتمع. على الرغم من أن العائلة تتمتع بالسحر، إلا أن فردًا واحدًا فقط منها لم يتلق هديته عندما كان في الخامسة من عمره، ميرابيل، التي تحاول دائمًا مساعدة العائلة والمجتمع كما تستطيع، ولكن بغض النظر عما تفعله، لا يمكنها أبدًا إرضاء جدتها. في يوم من الأيام، في الليلة التي يتلقى فيها أحد أبناء عمومتها هداياه، ترى منزل العائلة يتشقق، وهو أمر يتم تجاهله من قبل العائلة، حيث أنها لا تمتلك قوى سحرية. ثم تشرع ميرابيل في مغامرة خاصة بها لمعرفة ما الخطأ في المنزل وإنقاذ كل فرد في عائلتها، والشخص الوحيد الذي يمكنه تقديم الإجابات هو عمها برونو، الذي يرى المستقبل. المشكلة الوحيدة هي أنه غادر ذات يوم ولم يعد أبدًا.',
            'descricao_mundo_estranho': 'في "عالم غريب"، عائلة كليد ليست مثل العائلات الأخرى. هم مستكشفون يكتشفون أراضي جديدة وهم في مهمة لاستكشاف عالم غريب وغير معروف. ومع ذلك، فإن الاختلافات بين أفراد العائلة قد تعرض مهمتهم الجديدة للخطر. جيجر كليد وابنه سيرشر هما مغامران يستكشفان البرية لاكتشاف عوالم جديدة. أثناء محاولتهم عبور جبل يحيط بأرض أفالونيا، يكتشف سيرشر نباتًا ينبعث منه طاقة، يُسمى باندو، والذي يمكن استخدامه كمصدر للطاقة لأفالونيا. ومع ذلك، ينتهي الأمر بالأب والابن إلى الاختلاف ويستمر أحدهما في مهمة منفردة بينما يستخدم الآخر النوع الجديد لمساعدة العالم. بعد 25 عامًا، تظهر كاليستو مال، زعيمة أفالونيا، بشكل عاجل لإبلاغ أن باندو يفقد قوته. لمعرفة ما يحدث، تشكل عائلة كليد فريقًا متخصصًا للبحث عن مصدر باندو، في أعمق جذوره.',
            'descricao_luca': 'في "لوكا"، نتابع الوحش البحري الفضولي المسمى لوكا، بينما يعيش في رعي بعض الأسماك ويعيش مع والديه وجدته، الذين لا يسمحون له بالاقتراب من السطح، حيث يعيش البشر الذين يمكن أن يقتلوه. في يوم من الأيام، يجد لوكا، بفضول كبير، بعض الأشياء التي جاءت من السطح وينتهي به الأمر بالتعرف على ألبرتو، وحش بحري آخر يجمع أشياء من البشر. ثم يقرر لوكا الذهاب مع ألبرتو إلى السطح، حيث يدرك أنه عند ملامسة الأرض، يحصل على جسم بشري ويمكنه المشي، ولكن عند لمس الماء تعود حراشفه. مع الوقوع في حب الصداقة والأشياء التي ابتكرها البشر، يخطط لوكا وألبرتو للذهاب إلى أقرب قرية والحصول على فيسبا، حتى يتمكنوا من السفر حول العالم. يقابلون جوليا، فتاة بشرية وأبيها، ويأكلون الكثير من الجيلاتي والمعكرونة بينما لا يستطيعون قول من هم حقًا.',
            'descricao_viva': 'في "فيفا - الحياة هي حفلة"، ميغيل هو صبي يبلغ من العمر 12 عامًا يريد حقًا أن يصبح موسيقيًا مشهورًا، لكنه يحتاج إلى التعامل مع عائلته التي لا توافق على حلمه. مصممًا على تغيير اللعبة، ينتهي به الأمر إلى إطلاق سلسلة من الأحداث المرتبطة بسر عمره 100 عام. المغامرة، المستوحاة من العطلة المكسيكية يوم الموتى، تنتهي بتوليد لقاء عائلي غير عادي.',
            'descricao_lilo': 'فيلم حي من الكلاسيكية الشهيرة لديزني، "ليلو وستيتش"، حيث ستيتش (كريس ساندرز)، التجربة 626، هو كائن فضائي معبر تم تبنيه كحيوان أليف من قبل ليلو (مايا كيالوها) ومعًا يكتشفان معنى العائلة.',
            'Capitão América: Admirável Mundo Novo': 'كابتن أمريكا: عالم جديد شجاع',
            'Deadpool & Wolverine': 'ديدبول وولفرين',
            'Indiana Jones': 'إنديانا جونز',
            'Pantera Negra: Wakanda Para Sempre': 'بلاك بانثر: واكاندا للأبد',
            'pequena sereia': 'الحورية الصغيرة',
            'cruella': 'كرويلا',
            'mansao mal-assombrada': 'القصر المسكون',
            'jungle cruise': 'رحلة الأدغال',
            'Moana 2': 'موآنا 2',
            'Divertidamente 2': 'من الداخل إلى الخارج 2',
            'Elementos': 'عناصر',
            'Encanto': 'إنكانتو',
            'mundo estranho': 'عالم غريب',
            'luca': 'لوكا',
            'viva: a vida é uma festa': 'كوكو',
            'lilo & stich': 'ليلو وستيتش'
        },
        'fr': { // Francês
            'filmes': 'Films',
            'animacoes': 'Animations',
            'cadastro': 'Inscription',
            'idiomas': 'Langues',
            'nome:': 'Nom:',
            'email:': 'Email:',
            'senha:': 'Mot de passe:',
            'enviar': 'Envoyer',
            'descricao_capitao_america': 'Sam se retrouve au milieu d\'un incident international après avoir rencontré le président Thaddeus Ross. Il doit découvrir la raison derrière un complot mondial néfaste avant que le véritable cerveau ne fasse voir rouge au monde entier.',
            'descricao_deadpool_wolverine': 'Wolverine se remet lorsqu\'il croise la route de Deadpool. Ensemble, ils forment une équipe et affrontent un ennemi commun.',
            'descricao_indiana_jones': 'L\'archéologue Indiana Jones court contre la montre pour récupérer un artefact puissant qui pourrait changer le cours de l\'histoire. Accompagné de sa filleule, il doit affronter Jürgen Voller, un ancien nazi travaillant pour la NASA.',
            'descricao_wakanda': 'La reine Ramonda, Shuri, M\'Baku, Okoye et les Dora Milaje luttent pour protéger leur nation des puissances mondiales intervenantes après la mort du roi T\'Challa.',
            'descricao_pequena_sereia': 'Le film raconte l\'histoire de la princesse Ariel (Halle Bailey), une jeune sirène qui veut explorer le monde au-delà de la mer. Le personnage enfreint la règle selon laquelle les sirènes ne doivent pas entrer en contact avec les humains lorsqu\'elle tombe amoureuse du prince Eric (Jonah Hauer-King) après lui avoir sauvé la vie lors d\'un naufrage.',
            'descricao_cruella': 'Intelligente, créative et déterminée, Estella veut se faire un nom grâce à ses designs et finit par attirer l\'attention de la baronne Von Hellman. Cependant, leur relation déclenche une série d\'événements et de révélations qui poussent Estella à embrasser son côté rebelle et à devenir Cruella, une personne mauvaise, élégante et assoiffée de vengeance.',
            'descricao_mansao': 'Une femme et son fils recrutent un groupe hétéroclite de prétendus experts spirituels pour les aider à débarrasser leur maison d\'envahisseurs surnaturels.',
            'descricao_jungle_cruise': 'Le Dr Lily Houghton demande l\'aide du rusé capitaine Frank Wolff pour l\'emmener en Amazonie sur son bateau délabré. Ensemble, ils recherchent un arbre ancestral qui détient le pouvoir de guérir - une découverte qui pourrait changer l\'avenir de la médecine.',
            'descricao_moana2': 'Suite de l\'animation musicale déjà classique de Disney, Moana 2 suit les retrouvailles de Moana et Maui pour une nouvelle aventure à travers les mers. Trois ans après le dernier voyage en mer, un appel de ses ancêtres ramène la jeune Polynésienne Moana dans des eaux dangereuses et lointaines de l\'Océanie avec un groupe improbable de marins. Avec l\'aide également du demi-dieu Maui, elle doit briser une terrible malédiction qu\'un dieu cruel et assoiffé de pouvoir a placée sur l\'une des îles de son peuple. Dans cette grande mission, Moana et son équipe exploreront de nouveaux territoires et affronteront des ennemis anciens et nouveaux, tels que des monstres marins, des sorts et des dieux maléfiques. Tout cela pour reconnecter sa nation et assurer la paix des océans.',
            'descricao_divertidamente2': 'Vice-Versa 2 marque la suite de la célèbre histoire de Riley (Kaitlyn Dias). Avec un saut dans le temps, la fille est maintenant plus âgée, âgée de 13 ans, traversant la préadolescence tant redoutée. Avec la maturité, la salle de contrôle mental de la jeune fille subit également une démolition pour faire place à quelque chose de totalement inattendu : de nouvelles émotions. Les émotions déjà connues, Joie (Amy Poehler), Tristesse (Phyllis Smith), Colère (Lewis Black), Peur (Tony Hale) et Dégoût (Liza Lapira), qui depuis que Riley est bébé, dominent le centre de contrôle de la fille dans une opération réussie, avec quelques échecs en cours de route comme présenté dans le premier film. Les anciennes émotions ne savent pas comment se sentir et agir lorsque de nouveaux locataires arrivent sur place, l\'un d\'eux étant l\'Anxiété tant redoutée (Maya Hawke). Envie (Ayo Edebiri), Ennui (Adèle Exarchopoulos) et Embarras (Paul Walter Hauser) rejoindront l\'Anxiété dans l\'esprit de Riley, ainsi que la Nostalgie (June Squibb) qui apparaîtra également.',
            'descricao_elementos': 'Elementaire est un film d\'animation qui se déroule dans une société extraordinaire appelée Element City, où les quatre éléments de la nature - l\'air, la terre, le feu et l\'eau - vivent en parfaite harmonie. Dans l\'histoire, nous rencontrons Ember (feu, voix de Leah Lewis), une femme énergique dans la vingtaine, avec un grand sens de l\'humour et passionnée par la famille, mais qui a un tempérament un peu chaud ; Wade (eau, voix de Mamoudou Athie) est un jeune homme empathique, observateur et extraverti, qui n\'a pas peur de montrer ses émotions - en fait, c\'est un peu difficile de les contrôler ; Clod (terre, voix de Mason Wertheimer) est un garçon très intelligent de la terre qui vit dans la Ville du Feu, et est toujours proche d\'Ember ; et Gale (air, voix de Wendi McLendon-Covey), qui a une personnalité mignonne et rose, est toujours attentive aux tendances de la mode et est fan des Windbreakers, une équipe de Air Ball.',
            'descricao_encanto': 'Encanto est le nouveau film d\'animation de Disney, situé en Colombie. Dans celui-ci, la famille Madrigal et la communauté autour de la maison de la famille sont entourées de montagnes, qui les protègent des maux du monde. Cependant, la famille Madrigal est dotée de magie, chaque membre de la famille ayant un pouvoir magique qui est utilisé pour aider la communauté. Bien que la famille soit dotée de magie, un seul membre n\'a pas reçu son don à l\'âge de cinq ans, Mirabel, qui essaie toujours d\'aider la famille et la communauté comme elle le peut, mais quoi qu\'elle fasse, elle ne peut jamais plaire à sa grand-mère. Un jour, la nuit où l\'un de ses cousins reçoit ses dons, elle voit la maison de la famille se fissurer, quelque chose qui est rejeté par la famille, car elle n\'a pas de pouvoirs magiques. Mirabel se lance alors dans sa propre aventure pour découvrir ce qui ne va pas avec la maison et sauver tout le monde dans sa famille, et la seule personne qui peut donner les réponses est son oncle Bruno, qui voit l\'avenir. Le seul problème est qu\'il est parti un jour et n\'est jamais revenu.',
            'descricao_mundo_estranho': 'Dans Monde Étrange, la famille Clade n\'est pas très comme les autres. Ce sont des explorateurs qui découvrent de nouvelles terres et sont en mission pour explorer un monde étrange et inconnu. Cependant, les différences entre les membres de la famille peuvent mettre leur nouvelle mission en péril. Jaeger Clade et son fils Searcher sont des aventuriers qui explorent la nature sauvage pour découvrir de nouveaux mondes. En essayant de traverser une montagne qui entoure la terre d\'Avalonia, Searcher découvre une plante qui émet de l\'énergie, appelée Pando, qui peut être utilisée comme source d\'énergie pour Avalonia. Cependant, le père et le fils finissent par être en désaccord et l\'un continue une mission en solo tandis que l\'autre utilise la nouvelle espèce pour aider le monde. 25 ans plus tard, Callisto Mal, leader d\'Avalonia, apparaît de manière urgente pour informer que Pando perd son pouvoir. Pour découvrir ce qui se passe, la famille Clade forme une équipe spécialisée pour rechercher la source de Pando, dans ses racines les plus profondes.',
            'descricao_luca': 'Dans Luca, nous suivons le curieux monstre marin nommé Luca, alors qu\'il vit en gardant des poissons et vit avec ses parents et sa grand-mère, qui ne le laissent pas s\'approcher de la surface, car c\'est là que vivent les humains qui peuvent le tuer. Un jour, Luca, avec beaucoup de curiosité, trouve des objets venus de la surface et finit par rencontrer Alberto, un autre monstre marin qui collectionne des objets humains. Luca décide alors d\'aller avec Alberto à la surface, où il se rend compte qu\'au contact de la terre, il obtient un corps humain et peut marcher, mais en touchant l\'eau, ses écailles reviennent. Tombant amoureux de l\'amitié et des choses créées par les humains, Luca et Alberto prévoient d\'aller au village le plus proche et d\'obtenir une Vespa, afin de pouvoir voyager autour du monde. Ils rencontrent Giulia, une fille humaine et son père, et se gavent de glaces et de pâtes tout en ne pouvant pas dire qui ils sont vraiment.',
            'descricao_viva': 'Dans Coco, Miguel est un garçon de 12 ans qui veut vraiment devenir un musicien célèbre, mais il doit faire face à sa famille qui désapprouve son rêve. Déterminé à changer la donne, il finit par déclencher une série d\'événements liés à un mystère vieux de 100 ans. L\'aventure, inspirée par la fête mexicaine du Jour des Morts, finit par générer une réunion familiale extraordinaire.',
            'descricao_lilo': 'Film en prises de vues réelles du célèbre classique animé de Disney, Lilo et Stitch, où Stitch (Chris Sanders), l\'expérience 626, est un extraterrestre expressif qui a été adopté comme animal de compagnie par Lilo (Maia Kealoha) et ensemble, ils découvrent le sens de la famille.',
            'Capitão América: Admirável Mundo Novo': 'Captain America: Brave New World',
            'Deadpool & Wolverine': 'Deadpool et Wolverine',
            'Indiana Jones': 'Indiana Jones',
            'Pantera Negra: Wakanda Para Sempre': 'Black Panther: Wakanda Forever',
            'pequena sereia': 'La Petite Sirène',
            'cruella': 'Cruella',
            'mansao mal-assombrada': 'Le Manoir Hanté',
            'jungle cruise': 'Jungle Cruise',
            'Moana 2': 'Moana 2',
            'Divertidamente 2': 'Vice-Versa 2',
            'Elementos': 'Élémentaire',
            'Encanto': 'Encanto',
            'mundo estranho': 'Monde Étrange',
            'luca': 'Luca',
            'viva: a vida é uma festa': 'Coco',
            'lilo & stich': 'Lilo et Stitch'
        }
    };

    function traduzir(lang) {
        $('.lang').each(function () {
            var key = $(this).attr('key');
            if ($(this).is('input[type="submit"]')) {
                $(this).val(arrLang[lang][key]);
            } else {
                $(this).text(arrLang[lang][key]);
            }
        });

        localStorage.setItem("idioma", lang);
    }

    // Evento de clique nos botões de tradução
    $('.translate').click(function () {
        var lang = $(this).attr('id');
        traduzir(lang);
    });

    // Verifica se há um idioma salvo e aplica a tradução
    var language = localStorage.getItem("idioma");
    if (language) {
        traduzir(language);
    }

    // Modal
    $("#modal").hide();
    $(".filme").click(function () {
        let titulo = $(this).data("titulo");
        let descricaoKey = $(this).data("descricao");
        let imgSrc = $(this).data("modal-img");

        // Obtém o idioma atual
        var lang = localStorage.getItem("idioma") || 'pt'; // Padrão: português

        // Traduz a descrição com base no idioma
        let descricaoTraduzida = arrLang[lang][descricaoKey];
        let tituloTraduzido = arrLang[lang][titulo];

        $("#modal-titulo").text(tituloTraduzido);
        $("#modal-descricao").text(descricaoTraduzida);
        $("#modal-img").attr("src", imgSrc);
        $("#modal").fadeIn();
    });

    $(".close").click(function () {
        $("#modal").fadeOut();
    });

    $(window).click(function (e) {
        if ($(e.target).is("#modal")) {
            $("#modal").fadeOut();
        }
    });
});
