let poolLang = "en";

function setPoolLanguage(lang) {
  poolLang = lang;
}

function getPoolText(key) {
  return textPools[poolLang][key];
}

window.scriptPools = {
  setPoolLanguage,
  getPoolText
};

// =======================f
// DAILY LESSONSf
// =======================
export const LessonsByIndex = {

// --------------------------
// Animal welfare - Omnivore (20 lessons)
// --------------------------

1: {  
  goal: "Protecting animals & animal welfare",  diet: "omnivore",  
  title: {
  en: "Circle of life?",
  es: "¿Círculo de la vida?",
  hu: "Az élet körforgása?",
  },
  lesson: {
  en: "We often say 'the circle of life' to describe nature, thinking that all living beings are part of a balanced system. In natural circumstances, every animal is born with freedom, space, and a chance to live fully, experiencing sunlight and expressing natural behaviors. Industrial farming, however, confines animals to tiny cages, preventing them from living naturally. If they are denied these basic experiences, can we still call it 'natural'? Reflecting on this helps us question our food system and its impact on life.",
  es: "A menudo decimos 'el círculo de la vida' para describir la naturaleza, pensando que todos los seres vivos forman parte de un sistema equilibrado. En condiciones naturales, cada animal nace con libertad, espacio y la oportunidad de vivir plenamente, experimentando la luz del sol y expresando comportamientos naturales. Sin embargo, la ganadería industrial confina a los animales en jaulas diminutas, impidiéndoles vivir de manera natural. Si se les niegan estas experiencias básicas, ¿podemos seguir llamándolo 'natural'? Reflexionar sobre esto nos ayuda a cuestionar nuestro sistema alimentario y su impacto en la vida.",
  hu: "Gyakran mondjuk azt, hogy „az élet köre”, amikor a természetet írjuk le, azt gondolva, hogy minden élőlény része egy kiegyensúlyozott rendszernek. Természetes körülmények között minden állat szabadsággal, térrel és a teljes élet lehetőségével születik, élvezheti a napfényt és kifejezheti természetes viselkedését. Az ipari állattartás azonban az állatokat apró ketrecekbe zárja, megakadályozva, hogy természetesen éljenek. Ha ezektől az alapvető élményektől megfosztjuk őket, vajon még mindig nevezhetjük ezt „természetesnek”? Ennek átgondolása segít megkérdőjelezni az élelmiszer-rendszerünket és annak az életre gyakorolt hatását."
  },
  quiz: {  
    question: {
      en: "What is often denied to farm animals compared to natural life?",
      es: "¿Qué se les niega con frecuencia a los animales de granja en comparación con la vida natural?",
      hu: "Mitől fosztják meg leggyakrabban a haszonállatokat a természetes élethez képest?"
    },  
    options: {
      en: [
        "Freedom and space",
        "Sunlight and natural behaviors",
        "A chance to live fully",
        "All of the above"
      ],
      es: [
        "Libertad y espacio",
        "Luz solar y comportamientos naturales",
        "La oportunidad de vivir plenamente",
        "Todas las anteriores"
      ],
      hu: [
        "Szabadság és tér",
        "Napfény és természetes viselkedés",
        "Teljes élet lehetősége",
        "Mindegyik"
      ]
    },
    answer: 3 
  }
},
2: { 
  goal: "Protecting animals & animal welfare", 
  diet: "omnivore", 
  title: {
  en: "Facing the truth",
  es: "Enfrentar la verdad",
  hu: "Szembenézni a tényekkel",
  },
  lesson: {
    en: "Acknowledging the realities of animals’ lives can feel heavy. Feeling this way actually shows your empathy and compassion—it’s a sign of your humanity, not something to avoid. Ignoring the truth doesn’t help either. Even small, thoughtful actions—like choosing kinder food options or supporting animal welfare—can make a real difference. Reflecting on your choices empowers you to act with care without guilt.",
    es: "Reconocer la realidad de la vida de los animales puede resultar pesado. Sentir esto demuestra tu empatía y compasión: es una señal de tu humanidad, no algo que debas evitar. Ignorar la verdad tampoco ayuda. Incluso pequeñas acciones conscientes, como elegir alimentos más respetuosos o apoyar el bienestar animal, pueden marcar una diferencia real. Reflexionar sobre tus decisiones te permite actuar con cuidado sin culpa.",
    hu: "Az állatok életének valóságának felismerése nehéznek tűnhet. Az, hogy így érzel, az empátiádat és együttérzésedet mutatja—ez az emberiességed jele, nem valami, amit kerülni kellene. Az igazság figyelmen kívül hagyása sem segít. Már a kis, átgondolt cselekedetek—például kedvesebb ételválasztások vagy az állatjólét támogatása—is valódi változást hozhatnak. Az, hogy átgondolod a döntéseidet, lehetővé teszi, hogy felelősségteljesen cselekedj bűntudat nélkül."
  },
  quiz: { 
    question: {
      en: "What does feeling uncomfortable about animal suffering indicate?", 
      es: "¿Qué indica sentirse incómodo ante el sufrimiento animal?", 
      hu: "Mit jelez, ha kényelmetlenül érzed magad az állati szenvedés láttán?"
    },
    options: {
      en: ["It shows our empathy", "It proves we are bad people", "It’s pointless", "We should ignore it"], 
      es: ["Muestra nuestra empatía", "Prueba que somos malas personas", "No tiene sentido", "Debemos ignorarlo"], 
      hu: ["Empátiánkat mutatja", "Bizonyítja, hogy rossz emberek vagyunk", "Értelmetlen", "Figyelmen kívül kell hagynunk"]
    },
    answer: 0
  }
},
3: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Where do we draw the line?",
    es: "¿Dónde trazamos la línea?",
    hu: "Hol húzzuk meg a határt?"
  },
  lesson: {
    en: "We often treat some animals as family members, like dogs or cats, while others—such as pigs, cows, or chickens—are raised for food. Yet many of these animals share similar traits: they feel pain, experience emotions, and have a strong desire to live. This raises an important question: why do we love some animals and eat others? Reflecting on where and why we draw these lines can help us better understand our values and the impact of our everyday choices.",
    es: "A menudo tratamos a algunos animales como miembros de la familia, como perros o gatos, mientras que otros—como cerdos, vacas o gallinas—son criados para la alimentación. Sin embargo, muchos de estos animales comparten características similares: sienten dolor, experimentan emociones y tienen un fuerte deseo de vivir. Esto plantea una pregunta importante: ¿por qué amamos a unos animales y comemos a otros? Reflexionar sobre dónde y por qué trazamos estas líneas puede ayudarnos a comprender mejor nuestros valores y el impacto de nuestras decisiones diarias.",
    hu: "Gyakran egyes állatokat családtagként kezelünk, például a kutyákat vagy macskákat, míg másokat—mint a sertéseket, teheneket vagy csirkéket—élelem céljából nevelünk. Pedig sok közös tulajdonságuk van: éreznek fájdalmat, érzelmeik vannak, és erős bennük az élni akarás. Ez fontos kérdést vet fel: miért szeretünk egyes állatokat, míg másokat megeszünk? Annak átgondolása, hogy hol és miért húzzuk meg ezeket a határokat, segít jobban megérteni az értékeinket és a mindennapi döntéseink hatását."
  },
  quiz: {  
    question: {
      en: "Why do people treat some animals as pets and others as food?",
      es: "¿Por qué las personas tratan a algunos animales como mascotas y a otros como comida?",
      hu: "Miért kezelnek az emberek egyes állatokat házikedvencként, másokat pedig élelmiszerként?"
    },
    options: {
      en: [
        "Cultural traditions",
        "Emotional attachment",
        "Social norms",
        "All of the above"
      ],
      es: [
        "Tradiciones culturales",
        "Vínculo emocional",
        "Normas sociales",
        "Todas las anteriores"
      ],
      hu: [
        "Kulturális hagyományok",
        "Érzelmi kötődés",
        "Társadalmi normák",
        "Mindegyik"
      ]
    },
    answer: 3
  }
},
4: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Our natural empathy",
    es: "Nuestra empatía natural",
    hu: "Természetes empátiánk"
  },
  lesson: {
    en: "Imagine walking through a park and seeing a squirrel, a duck, or a turtle. What do you feel in that moment? Perhaps joy, care, or a desire to help. You might feel upset if someone tried to hurt them. This reaction reveals something important: our natural empathy toward animals is often strong. Yet our daily habits don’t always reflect this empathy. Many of our behaviors are learned and shaped by society. Reflecting on this contrast helps us question how our actions align with our values.",
    es: "Imagina que caminas por un parque y ves una ardilla, un pato o una tortuga. ¿Qué sientes en ese momento? Tal vez alegría, cuidado o el deseo de ayudarlos. Probablemente te molestaría ver a alguien hacerles daño. Esta reacción revela algo importante: nuestra empatía natural hacia los animales suele ser fuerte. Sin embargo, nuestros hábitos diarios no siempre reflejan esa empatía. Muchos comportamientos son aprendidos y moldeados por la sociedad. Reflexionar sobre esta diferencia nos ayuda a cuestionar si nuestras acciones coinciden con nuestros valores.",
    hu: "Képzeld el, hogy sétálsz egy parkban, és meglátsz egy mókust, egy kacsát vagy egy teknőst. Mit érzel abban a pillanatban? Talán örömöt, törődést vagy segíteni akarást. Valószínűleg felháborítana, ha valaki bántaná őket. Ez a reakció fontos dolgot mutat meg: a természetes empátiánk az állatok iránt gyakran erős. Ennek ellenére a mindennapi szokásaink nem mindig tükrözik ezt az empátiát. Sok viselkedés tanult és a társadalom alakítja. Ennek az ellentmondásnak az átgondolása segít megkérdőjelezni, mennyire állnak összhangban a tetteink az értékeinkkel."
  },
  quiz: {  
    question: {
      en: "What does this scenario encourage us to reflect on?",
      es: "¿Sobre qué nos invita a reflexionar esta situación?",
      hu: "Mire ösztönöz ez a helyzet, hogy elgondolkodjunk?"
    },
    options: {
      en: [
        "Our natural empathy versus learned behaviors",
        "That park animals are different from farm animals",
        "That feelings should be ignored",
        "That instincts always control us"
      ],
      es: [
        "Nuestra empatía natural frente a comportamientos aprendidos",
        "Que los animales del parque son diferentes a los de granja",
        "Que debemos ignorar los sentimientos",
        "Que los instintos siempre nos controlan"
      ],
      hu: [
        "A természetes empátiánk és a tanult viselkedések közötti különbség",
        "Hogy a parkban élő állatok különböznek a haszonállatoktól",
        "Hogy figyelmen kívül kell hagyni az érzéseket",
        "Hogy az ösztönök mindig irányítanak minket"
      ]
    },
    answer: 0
  }
},
5: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Instinct or habit?",
    es: "¿Instinto o costumbre?",
    hu: "Ösztön vagy szokás?"
  },
  lesson: {
    en: "Imagine a child who has never been taught to eat meat, placed in a room with a rabbit and an apple. What would she naturally choose—to play with the rabbit and eat the apple, or the other way around? This simple thought experiment invites us to question the idea that harming animals is an instinct. When our basic needs are met, choosing to eat animals is often not about survival, but about habits learned from culture and tradition.",
    es: "Imagina a una niña que nunca ha sido enseñada a comer carne, colocada en una habitación con un conejo y una manzana. ¿Qué elegiría de forma natural: jugar con el conejo y comer la manzana, o lo contrario? Este sencillo experimento mental nos invita a cuestionar la idea de que hacer daño a los animales sea un instinto. Cuando nuestras necesidades básicas están cubiertas, comer animales suele estar más relacionado con hábitos aprendidos que con la supervivencia.",
    hu: "Képzelj el egy gyermeket, akit soha nem tanítottak meg húst enni, és egy szobába helyezik egy nyúllal és egy almával. Mit választana ösztönösen: játszana a nyúllal és megenne egy almát, vagy fordítva? Ez az egyszerű gondolatkísérlet arra hív, hogy megkérdőjelezzük azt az elképzelést, hogy az állatok bántása ösztönös. Amikor az alapvető szükségleteink kielégítettek, az állatok fogyasztása gyakran nem a túlélésről, hanem tanult szokásokról szól."
  },
  quiz: {  
    question: {
      en: "What does this thought experiment suggest about our eating habits?",
      es: "¿Qué sugiere este experimento mental sobre nuestros hábitos alimentarios?",
      hu: "Mit sugall ez a gondolatkísérlet az étkezési szokásainkról?"
    },
    options: {
      en: [
        "Killing animals is an unavoidable instinct",
        "Our eating habits are shaped by learning and culture",
        "Humans naturally prefer meat",
        "Instinct is stronger than choice"
      ],
      es: [
        "Matar animales es un instinto inevitable",
        "Nuestros hábitos alimentarios están influenciados por el aprendizaje y la cultura",
        "Los humanos prefieren naturalmente la carne",
        "El instinto es más fuerte que la elección"
      ],
      hu: [
        "Az állatok megölése elkerülhetetlen ösztön",
        "Az étkezési szokásainkat a tanulás és a kultúra alakítja",
        "Az emberek természetüknél fogva a húst részesítik előnyben",
        "Az ösztön erősebb, mint a választás"
      ]
    },
    answer: 1
  }
},
6: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Empathy out of sight",
    es: "Empatía fuera de la vista",
    hu: "Empátia szem elől elrejtve"
  },
  lesson: {
    en: "Would you feel bad seeing an animal suffer? Most of us would. Yet in our society, consuming animals is so normalized that we rarely connect our food with the suffering behind it. The question is: just because it happens out of sight, behind walls in farms or slaughterhouses, does that justify our choice to eat them? Reflecting on this helps us recognize the gap between our empathy and our habits.",
    es: "¿Te sentirías mal al ver sufrir a un animal? La mayoría de nosotros sí. Sin embargo, en nuestra sociedad, el consumo de animales está tan normalizado que rara vez conectamos nuestra comida con el sufrimiento que hay detrás. La pregunta es: ¿solo porque ocurre fuera de nuestra vista, detrás de las paredes de granjas o mataderos, eso justifica nuestra elección de comerlos? Reflexionar sobre esto nos ayuda a reconocer la brecha entre nuestra empatía y nuestros hábitos.",
    hu: "Rosszul éreznéd magad, ha látnád egy állat szenvedését? A legtöbben igen. Mégis, társadalmunkban az állatok fogyasztása annyira normalizált, hogy ritkán kapcsoljuk össze az ételünket a mögötte álló szenvedéssel. A kérdés az: csak azért, mert mindez szem elől elrejtve történik, farmok vagy vágóhidak falai mögött, ez igazolja-e a fogyasztásukat? Ennek átgondolása segít felismerni az empátiánk és a szokásaink közti szakadékot."
  },
  quiz: {  
    question: {
      en: "What does this scenario encourage us to question?",
      es: "¿Qué nos invita a cuestionar este escenario?",
      hu: "Mire ösztönöz ez a helyzet, hogy rákérdezzünk?"
    },
    options: {
      en: [
        "Whether empathy matters",
        "If suffering out of sight justifies our actions",
        "Whether animals can feel pain",
        "If we should ignore feelings"
      ],
      es: [
        "Si la empatía importa",
        "Si el sufrimiento fuera de la vista justifica nuestras acciones",
        "Si los animales pueden sentir dolor",
        "Si deberíamos ignorar los sentimientos"
      ],
      hu: [
        "Számít-e az empátia",
        "Igazolja-e a szem elől elrejtett szenvedés a tetteinket",
        "Éreznek-e fájdalmat az állatok",
        "Figyelmen kívül kell-e hagynunk az érzéseket"
      ]
    },
    answer: 1
  }
},

7: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Distance from the act",
    es: "Distancia del acto",
    hu: "Eltávolodás a tettetől"
  },
  lesson: {
    en: "Would you kill an animal yourself? Most of us never have to, because meat is offered to us in a processed, hygienic form that hides the reality. This distance makes it easier to consume meat without confronting the act itself. But is this truly normal, or is it a collective illusion that separates us from the consequences of our choices?",
    es: "¿Matarías tú mismo a un animal? La mayoría nunca tiene que hacerlo, porque la carne se nos presenta de forma procesada e higiénica, ocultando la realidad. Esta distancia facilita el consumo sin enfrentarnos al acto en sí. Pero, ¿es esto realmente normal o una ilusión colectiva que nos separa de las consecuencias de nuestras decisiones?",
    hu: "Megölnél-e egy állatot saját kezűleg? A legtöbbünknek erre soha nincs szüksége, mert a húst feldolgozott, higiénikus formában kapjuk meg, amely elfedi a valóságot. Ez a távolság megkönnyíti a fogyasztást anélkül, hogy szembenéznénk magával a tettel. De vajon ez valóban normális, vagy inkább egy kollektív illúzió, amely eltávolít minket döntéseink következményeitől?"
  },
  quiz: {  
    question: {
      en: "What does the sanitized presentation of meat encourage?",
      es: "¿Qué fomenta la presentación higienizada de la carne?",
      hu: "Mit eredményez a hús steril bemutatása?"
    },
    options: {
      en: [
        "Deep reflection on killing",
        "Ignoring the process and consuming without thought",
        "Feeling constant guilt",
        "Rejecting food entirely"
      ],
      es: [
        "Reflexionar profundamente sobre matar",
        "Ignorar el proceso y consumir sin pensar",
        "Sentir culpa constante",
        "Rechazar la comida por completo"
      ],
      hu: [
        "Mély gondolkodást az ölésről",
        "A folyamat figyelmen kívül hagyását és gondolkodás nélküli fogyasztást",
        "Állandó bűntudatot",
        "Az étel teljes elutasítását"
      ]
    },
    answer: 1
  }
},

8: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Pleasure versus necessity",
    es: "Placer frente a necesidad",
    hu: "Élvezet vagy szükségszerűség?"
  },
  lesson: {
    en: "Are you against harming animals for entertainment or pleasure? Science shows that humans can thrive on a plant-based diet. This raises an important ethical question: if we eat meat mainly for taste and enjoyment, are we supporting the killing of animals for pleasure? Reflecting on this helps us examine whether habit and enjoyment justify harm.",
    es: "¿Estás en contra de hacer daño a los animales por entretenimiento o placer? La ciencia muestra que los humanos pueden prosperar con una dieta basada en plantas. Esto plantea una pregunta ética importante: si comemos carne principalmente por su sabor y disfrute, ¿estamos apoyando la muerte de animales por placer? Reflexionar sobre esto nos ayuda a cuestionar si el hábito y el disfrute justifican el daño.",
    hu: "Ellenzed-e az állatok bántását szórakozásból vagy élvezetből? A tudomány szerint az emberek képesek teljes értékű életet élni növényi alapú étrenden. Ez fontos etikai kérdést vet fel: ha főként az íze miatt eszünk húst, akkor valójában az állatok élvezetből történő megölését támogatjuk? Ennek átgondolása segít megvizsgálni, igazolja-e a szokás vagy az élvezet a károkozást."
  },
  quiz: {  
    question: {
      en: "What ethical issue does eating meat for taste raise?",
      es: "¿Qué problema ético plantea comer carne por su sabor?",
      hu: "Milyen etikai kérdést vet fel a hús élvezetből történő fogyasztása?"
    },
    options: {
      en: [
        "Meat is always necessary",
        "We may be supporting killing animals for pleasure",
        "Taste has no ethical impact",
        "Humans cannot live without meat"
      ],
      es: [
        "La carne siempre es necesaria",
        "Podemos estar apoyando la muerte de animales por placer",
        "El sabor no tiene impacto ético",
        "Los humanos no pueden vivir sin carne"
      ],
      hu: [
        "A hús mindig szükséges",
        "Az állatok élvezetből történő megölését támogathatjuk",
        "Az íznek nincs etikai jelentősége",
        "Az emberek nem tudnak hús nélkül élni"
      ]
    },
    answer: 1
  }
},

9: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Awareness and the will to live",
    es: "Conciencia y deseo de vivir",
    hu: "Tudatosság és élni akarás"
  },
  lesson: {
    en: "Animals often show clear signs of awareness. When they sense danger, they try to escape, protect themselves, and avoid harm. These reactions suggest not just instinct, but an understanding of threat and a desire to live. Asking whether their feelings differ from ours invites deeper empathy and reflection.",
    es: "Los animales a menudo muestran señales claras de conciencia. Cuando perciben peligro, intentan escapar, protegerse y evitar el daño. Estas reacciones sugieren no solo instinto, sino una comprensión de la amenaza y un deseo de vivir. Preguntarnos si sus sentimientos son diferentes a los nuestros invita a una empatía más profunda.",
    hu: "Az állatok gyakran egyértelműen mutatják a tudatosság jeleit. Amikor veszélyt érzékelnek, menekülni próbálnak, védekeznek és elkerülik a sérülést. Ezek a reakciók nem csupán ösztönre, hanem a fenyegetés felismerésére és az élni akarásra utalnak. Annak megkérdőjelezése, hogy érzéseik különböznek-e a mieinktől, mélyebb empátiára ösztönöz."
  },
  quiz: {  
    question: {
      en: "What does an animal trying to escape danger show?",
      es: "¿Qué demuestra que un animal intente escapar del peligro?",
      hu: "Mit mutat, amikor egy állat menekülni próbál a veszély elől?"
    },
    options: {
      en: [
        "Lack of feeling",
        "Awareness and desire to live",
        "Enjoyment of danger",
        "Random movement"
      ],
      es: [
        "Falta de sentimientos",
        "Conciencia y deseo de vivir",
        "Disfrute del peligro",
        "Movimiento aleatorio"
      ],
      hu: [
        "Érzelmek hiánya",
        "Tudatosság és élni akarás",
        "A veszély élvezete",
        "Véletlenszerű mozgás"
      ]
    },
    answer: 1
  }
},

10: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "The intelligence of pigs",
    es: "La inteligencia de los cerdos",
    hu: "A disznók intelligenciája"
  },
  lesson: {
    en: "Pigs are highly intelligent animals, often outperforming dogs in cognitive tasks. In problem-solving experiments, pigs show strong persistence and can solve complex challenges independently, while dogs often seek human help. Pigs also demonstrate advanced memory, long-term learning, and even basic tool use. Recognizing these abilities challenges how we perceive and treat them.",
    es: "Los cerdos son animales altamente inteligentes y, en muchas tareas cognitivas, superan a los perros. En experimentos de resolución de problemas, los cerdos muestran gran persistencia y pueden resolver desafíos complejos de forma independiente, mientras que los perros suelen buscar ayuda humana. También presentan memoria avanzada, aprendizaje a largo plazo e incluso uso básico de herramientas. Reconocer estas capacidades desafía nuestra forma de percibirlos y tratarlos.",
    hu: "A disznók rendkívül intelligens állatok, és számos kognitív feladatban felülmúlják a kutyákat. Problémamegoldó kísérletekben a disznók nagy kitartást mutatnak, és képesek önállóan megoldani összetett feladatokat, míg a kutyák gyakran emberi segítséget keresnek. Emellett fejlett memóriával, hosszú távú tanulással és egyszerű eszközhasználattal is rendelkeznek. Ezeknek a képességeknek az felismerése megkérdőjelezi, hogyan tekintünk rájuk és hogyan bánunk velük."
  },
  quiz: {  
    question: {
      en: "How do pigs compare to dogs in problem-solving tasks?",
      es: "¿Cómo se comparan los cerdos con los perros en tareas de resolución de problemas?",
      hu: "Hogyan teljesítenek a disznók a kutyákhoz képest problémamegoldásban?"
    },
    options: {
      en: [
        "Pigs are less persistent",
        "Dogs solve tasks more independently",
        "Pigs often outperform dogs",
        "Dogs have better memory"
      ],
      es: [
        "Los cerdos son menos persistentes",
        "Los perros resuelven tareas de forma más independiente",
        "Los cerdos suelen superar a los perros",
        "Los perros tienen mejor memoria"
      ],
      hu: [
        "A disznók kevésbé kitartóak",
        "A kutyák önállóbban oldják meg a feladatokat",
        "A disznók gyakran felülmúlják a kutyákat",
        "A kutyáknak jobb a memóriájuk"
      ]
    },
    answer: 2
  }
},
11: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Lessons from animals",
    es: "Lecciones de los animales",
    hu: "Tanulás az állatoktól"
  },
  lesson: {
    en: "We often look down on animals, assuming they are less valuable or capable than humans. Yet when we observe them closely, we can see their virtues—and even learn from them. Dogs, for example, can feel happy simply by having someone to love and time to play. Their loyalty, honesty in expressing affection, kindness, and protective behavior are remarkable qualities. Reflecting on these traits challenges our sense of superiority and invites us to reconsider what we truly value in ourselves and others.",
    es: "A menudo menospreciamos a los animales, asumiendo que son menos valiosos o capaces que los humanos. Sin embargo, al observarlos de cerca, podemos ver sus virtudes e incluso aprender de ellos. Los perros, por ejemplo, pueden ser felices simplemente teniendo a alguien a quien amar y tiempo para jugar. Su lealtad, honestidad al expresar afecto, bondad y comportamiento protector son cualidades extraordinarias. Reflexionar sobre estos rasgos cuestiona nuestro sentido de superioridad y nos invita a reconsiderar qué valoramos realmente en nosotros mismos y en los demás.",
    hu: "Gyakran lenézzük az állatokat, azt feltételezve, hogy kevésbé értékesek vagy kevésbé képesek, mint az emberek. Pedig ha közelebbről megfigyeljük őket, erényeiket is megláthatjuk, és tanulhatunk tőlük. A kutyák például képesek boldogok lenni pusztán attól, hogy van kit szeretniük és lehetőségük játszani. Hűségük, őszinte szeretetkifejezésük, kedvességük és védelmező viselkedésük figyelemre méltó tulajdonságok. Ezeken elgondolkodva megkérdőjelezhetjük felsőbbrendűségi érzésünket, és újragondolhatjuk, mit tartunk igazán értékesnek magunkban és másokban."
  },
  quiz: {  
    question: {
      en: "What does observing animals like dogs encourage us to reflect on?",
      es: "¿Sobre qué nos invita a reflexionar observar animales como los perros?",
      hu: "Mire ösztönöz minket az olyan állatok megfigyelése, mint a kutyák?"
    },
    options: {
      en: [
        "Our own superiority",
        "The values and abilities of animals",
        "How we can learn from them",
        "All of the above"
      ],
      es: [
        "Nuestra propia superioridad",
        "Los valores y capacidades de los animales",
        "Cómo podemos aprender de ellos",
        "Todas las anteriores"
      ],
      hu: [
        "Saját felsőbbrendűségünkre",
        "Az állatok értékeire és képességeire",
        "Arra, hogyan tanulhatunk tőlük",
        "Mindegyikre"
      ]
    },
    answer: 3
  }
},

12: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "The emotional lives of cows",
    es: "La vida emocional de las vacas",
    hu: "A tehenek érzelmi világa"
  },
  lesson: {
    en: "Cows are deeply emotional animals and form strong bonds with their calves. In natural conditions, a mother cow may grieve for days after losing her calf, staying close and showing behaviors like nudging or licking. In industrial farming, calves are often separated from their mothers shortly after birth, breaking this natural bond and causing stress for both. Understanding this reality helps us reflect on how our food choices affect animals.",
    es: "Las vacas son animales profundamente emocionales y forman fuertes vínculos con sus terneros. En condiciones naturales, una madre puede llorar la pérdida de su cría durante días, permaneciendo cerca y mostrando comportamientos como empujarla o lamerla. En la ganadería industrial, los terneros suelen ser separados de sus madres poco después de nacer, rompiendo este vínculo natural y causando estrés a ambos. Comprender esta realidad nos ayuda a reflexionar sobre cómo nuestras elecciones alimentarias afectan a los animales.",
    hu: "A tehenek mélyen érző állatok, és erős kötődést alakítanak ki borjaikkal. Természetes körülmények között egy anya napokig is gyászolhatja elvesztett borját, a közelében maradva és olyan viselkedést mutatva, mint a bökdösés vagy nyalogatás. Az ipari állattartásban azonban a borjakat gyakran röviddel születésük után elválasztják az anyjuktól, megszakítva ezt a természetes kötődést, és stresszt okozva mindkettőjüknek. Ennek megértése segít átgondolni döntéseink hatását az állatokra."
  },
  quiz: {
    question: {
      en: "What impact does separating calves from their mothers have?",
      es: "¿Qué impacto tiene separar a los terneros de sus madres?",
      hu: "Milyen hatása van a borjak anyjuktól való elválasztásának?"
    },
    options: {
      en: [
        "It causes stress for both mother and calf",
        "It has no effect",
        "Cows forget their calves immediately",
        "It makes cows happier"
      ],
      es: [
        "Causa estrés tanto a la madre como al ternero",
        "No tiene ningún efecto",
        "Las vacas olvidan a sus crías inmediatamente",
        "Hace más felices a las vacas"
      ],
      hu: [
        "Stresszt okoz az anyának és a borjúnak is",
        "Nincs hatása",
        "A tehenek azonnal elfelejtik borjaikat",
        "Boldogabbá teszi a teheneket"
      ]
    },
    answer: 0
  }
},

13: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Drawing invisible lines",
    es: "Líneas invisibles",
    hu: "Láthatatlan határok"
  },
  lesson: {
    en: "An important question is how we decide which animals deserve protection and which do not. Is it intelligence, appearance, or usefulness to humans? Among people, we accept differences without ranking lives by value—yet with animals, we often do. Reflecting on this reveals how cultural habits and biases shape the way we value different species.",
    es: "Una pregunta importante es cómo decidimos qué animales merecen protección y cuáles no. ¿Es la inteligencia, la apariencia o su utilidad para los humanos? Entre las personas aceptamos las diferencias sin jerarquizar el valor de la vida, pero con los animales a menudo hacemos lo contrario. Reflexionar sobre esto revela cómo las normas culturales y los prejuicios influyen en la forma en que valoramos a distintas especies.",
    hu: "Fontos kérdés, hogyan döntjük el, mely állatok érdemelnek védelmet és melyek nem. Intelligencia, megjelenés vagy az ember számára való hasznosság alapján? Az emberek között elfogadjuk a különbségeket anélkül, hogy az élet értékét rangsorolnánk, az állatok esetében viszont gyakran ezt tesszük. Ennek átgondolása rávilágít arra, hogy kulturális szokások és előítéletek alakítják, hogyan értékeljük a különböző fajokat."
  },
  quiz: {  
    question: {
      en: "What most explains why society values some animals more than others?",
      es: "¿Qué explica mejor por qué la sociedad valora más a unos animales que a otros?",
      hu: "Mi magyarázza leginkább, hogy a társadalom miért értékel egyes állatokat többre, mint másokat?"
    },
    options: {
      en: [
        "Cultural norms and habits",
        "Scientific intelligence rankings",
        "Random chance",
        "Their size or appearance"
      ],
      es: [
        "Normas y costumbres culturales",
        "Mediciones científicas de inteligencia",
        "Azar",
        "Su tamaño o apariencia"
      ],
      hu: [
        "Kulturális normák és szokások",
        "Tudományos intelligenciamérések",
        "Véletlen",
        "Méretük vagy kinézetük"
      ]
    },
    answer: 0
  }
},

14: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "The hidden intelligence of chickens",
    es: "La inteligencia oculta de las gallinas",
    hu: "A csirkék rejtett intelligenciája"
  },
  lesson: {
    en: "Chickens are far more intelligent and emotional than most people assume. They can recognize over 100 individual faces, communicate using dozens of vocalizations, and even anticipate future events. Hens show empathy by responding to their chicks’ distress and caring for them attentively. These abilities reveal that chickens have complex inner lives, despite being widely underestimated.",
    es: "Las gallinas son mucho más inteligentes y emocionales de lo que la mayoría de la gente cree. Pueden reconocer más de 100 rostros individuales, comunicarse mediante docenas de vocalizaciones y anticipar eventos futuros. Las gallinas muestran empatía al reaccionar al sufrimiento de sus polluelos y cuidarlos con atención. Estas capacidades revelan que tienen una vida interior compleja, aunque a menudo se las subestime.",
    hu: "A csirkék sokkal intelligensebbek és érzelmesebbek, mint azt a legtöbben gondolják. Több mint 100 egyedi arcot képesek felismerni, tucatnyi hangjelzéssel kommunikálnak, és képesek a jövőre előre tervezni. A tyúkok empátiát mutatnak, reagálnak csibéik szenvedésére és gondoskodnak róluk. Ezek a képességek megmutatják, hogy összetett belső világuk van, mégis gyakran alábecsülik őket."
  },
  quiz: {  
    question: {
      en: "Which statement about chickens is true?",
      es: "¿Cuál de las siguientes afirmaciones sobre las gallinas es verdadera?",
      hu: "Melyik állítás igaz a csirkékre?"
    },
    options: {
      en: [
        "They lack social awareness",
        "They can recognize faces and communicate",
        "They act purely on instinct",
        "They cannot plan ahead"
      ],
      es: [
        "No tienen conciencia social",
        "Pueden reconocer rostros y comunicarse",
        "Actúan solo por instinto",
        "No pueden planificar"
      ],
      hu: [
        "Nincs szociális tudatosságuk",
        "Képesek arcokat felismerni és kommunikálni",
        "Csak ösztönből cselekszenek",
        "Nem tudnak előre tervezni"
      ]
    },
    answer: 1
  }
},

15: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Many forms of intelligence",
    es: "Muchas formas de inteligencia",
    hu: "Az intelligencia sokféle formája"
  },
  lesson: {
    en: "Humans often see themselves as the most intelligent species, but nature tells a more humbling story. Chimpanzees outperform humans in short-term memory tasks, crows use tools and plan ahead, and elephants communicate over long distances through vibrations. Each species excels in its own way, reminding us that intelligence is diverse—and that humans are just one part of a much larger picture.",
    es: "Los humanos solemos considerarnos la especie más inteligente, pero la naturaleza cuenta una historia más humilde. Los chimpancés superan a los humanos en memoria a corto plazo, los cuervos usan herramientas y planifican, y los elefantes se comunican a grandes distancias mediante vibraciones. Cada especie destaca a su manera, recordándonos que la inteligencia es diversa y que los humanos somos solo una parte de un panorama mucho más amplio.",
    hu: "Az emberek gyakran a legintelligensebb fajnak tartják magukat, de a természet ennél jóval szerényebb történetet mesél. A csimpánzok rövid távú memóriában felülmúlják az embereket, a varjak eszközöket használnak és előre terveznek, az elefántok pedig rezgéseken keresztül kommunikálnak nagy távolságokon. Minden faj a maga módján kiemelkedő, ami emlékeztet arra, hogy az intelligencia sokféle formában létezik."
  },
  quiz: {  
    question: {
      en: "Which animal has been shown to outperform humans in short-term memory?",
      es: "¿Qué animal ha demostrado superar a los humanos en memoria a corto plazo?",
      hu: "Melyik állat teljesít jobban az embereknél a rövid távú memóriában?"
    },
    options: {
      en: [
        "Crows",
        "Chimpanzees",
        "Dogs"
      ],
      es: [
        "Cuervos",
        "Chimpancés",
        "Perros"
      ],
      hu: [
        "Varjak",
        "Csimpánzok",
        "Kutyák"
      ]
    },
    answer: 1
  }
},
16: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Part of nature or rulers of it?",
    es: "¿Parte de la naturaleza o sus dueños?",
    hu: "A természet részei vagy urai?"
  },
  lesson: {
    en: "Are humans simply one species among many, sharing Earth’s resources—or are we a superior species meant to dominate it? How we answer this question shapes how we treat animals, nature, and even each other. Seeing ourselves as part of nature encourages balance, respect, and protection of every species’ right to live freely. Seeing ourselves as above nature often leads to exploitation. This reflection invites us to ask what truly defines a ‘correct’ way to live.",
    es: "¿Somos los humanos una especie más compartiendo los recursos de la Tierra, o una especie superior destinada a dominarla? La respuesta a esta pregunta determina cómo tratamos a los animales, a la naturaleza e incluso a otras personas. Si nos vemos como parte de la naturaleza, buscamos equilibrio, respeto y la protección del derecho de cada especie a vivir libremente. Si nos vemos por encima de ella, justificamos la explotación. Esta reflexión nos invita a preguntarnos qué define realmente una forma de vida ‘correcta’.",
    hu: "Az emberek csupán egy faj a sok közül, akik megosztják a Föld erőforrásait, vagy felsőbbrendű lények vagyunk, akik uralkodhatnak rajta? A válasz erre a kérdésre meghatározza, hogyan bánunk az állatokkal, a természettel és egymással. Ha a természet részeként tekintünk magunkra, az egyensúlyra, tiszteletre és minden faj szabad élethez való jogának védelmére törekszünk. Ha fölé helyezzük magunkat, könnyebben igazoljuk a kizsákmányolást. Ez az elmélkedés arra hív, hogy megkérdőjelezzük, mi számít igazán ‘helyes’ életnek."
  },
  quiz: {  
    question: {
      en: "What does yesterday's lesson encourage us to reflect on?",
      es: "¿Sobre qué nos invita a reflexionar la lección anterior?",
      hu: "Mire ösztönöz az előző lecke?"
    },
    options: {
      en: [
        "Whether humans should dominate or coexist with nature",
        "How to extract more resources",
        "If animals can survive alone",
        "Whether technology is natural"
      ],
      es: [
        "Si los humanos deben dominar o convivir con la naturaleza",
        "Cómo extraer más recursos",
        "Si los animales pueden sobrevivir solos",
        "Si la tecnología es natural"
      ],
      hu: [
        "Az emberek uralkodjanak-e a természeten vagy együtt éljenek vele",
        "Hogyan lehet több erőforrást kinyerni",
        "Az állatok képesek-e egyedül túlélni",
        "A technológia természetes-e"
      ]
    },
    answer: 0
  }
},

17: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Innocence and trust",
    es: "Inocencia y confianza",
    hu: "Ártatlanság és bizalom"
  },
  lesson: {
    en: "Animals live with a natural innocence. They do not harm for pleasure, deceive for gain, or judge by appearance. Their trust toward humans is open and sincere. Tragically, this very innocence is often exploited in industries that profit from their suffering and death. Reflecting on this reminds us that innocence calls for protection—not betrayal.",
    es: "Los animales viven con una inocencia natural. No hacen daño por placer, no engañan para obtener beneficios ni juzgan por la apariencia. Su confianza hacia los humanos es abierta y sincera. Trágicamente, esta misma inocencia suele ser explotada por industrias que se benefician de su sufrimiento y muerte. Reflexionar sobre esto nos recuerda que la inocencia merece protección, no traición.",
    hu: "Az állatok természetes ártatlansággal élnek. Nem okoznak fájdalmat élvezetből, nem hazudnak haszonért, és nem ítélkeznek külső alapján. Az emberek felé tanúsított bizalmuk őszinte és nyitott. Tragikus módon ezt az ártatlanságot gyakran használják ki olyan iparágak, amelyek a szenvedésükből és halálukból profitálnak. Ez az elmélkedés emlékeztet arra, hogy az ártatlanság védelmet érdemel, nem elárulást."
  },
  quiz: {  
    question: {
      en: "What makes animals’ innocence especially tragic when they are exploited?",
      es: "¿Qué hace especialmente trágica la inocencia de los animales cuando son explotados?",
      hu: "Mi teszi különösen tragikussá az állatok ártatlanságát kizsákmányolás esetén?"
    },
    options: {
      en: [
        "They trust us and that trust is used against them",
        "They are dangerous to humans",
        "They do not feel emotions",
        "They intentionally harm others"
      ],
      es: [
        "Confían en nosotros y usamos esa confianza en su contra",
        "Son peligrosos para los humanos",
        "No sienten emociones",
        "Dañan a otros intencionalmente"
      ],
      hu: [
        "Bíznak bennünk, és ezt a bizalmat ellenük fordítjuk",
        "Veszélyesek az emberekre",
        "Nem éreznek érzelmeket",
        "Szándékosan ártanak másoknak"
      ]
    },
    answer: 0
  }
},

18: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Plants, animals, and land use",
    es: "Plantas, animales y uso de la tierra",
    hu: "Növények, állatok és földhasználat"
  },
  lesson: {
    en: "Some people ask whether killing plants is the same as killing animals. Science shows that plants lack a brain and central nervous system, so they do not experience pain the way animals do. Beyond this, around 77% of global agricultural land is used for livestock, yet animal farming provides a much smaller share of our calories and protein. Choosing plant-based foods allows us to use far less land while feeding more people and reducing harm to both animals and ecosystems.",
    es: "Algunas personas se preguntan si matar plantas es lo mismo que matar animales. La ciencia muestra que las plantas no tienen cerebro ni sistema nervioso central, por lo que no sienten dolor como los animales. Además, alrededor del 77% de la tierra agrícola mundial se utiliza para la ganadería, aunque esta aporta una parte mucho menor de las calorías y proteínas globales. Elegir alimentos de origen vegetal permite usar mucha menos tierra, alimentar a más personas y reducir el daño a animales y ecosistemas.",
    hu: "Sokan felteszik a kérdést, hogy a növények elpusztítása ugyanaz-e, mint az állatok megölése. A tudomány szerint a növényeknek nincs agyuk vagy központi idegrendszerük, ezért nem úgy érzékelik a fájdalmat, mint az állatok. Emellett a globális mezőgazdasági területek körülbelül 77%-át az állattenyésztés használja, miközben ez jóval kevesebb kalóriát és fehérjét biztosít. A növényi alapú étrend kevesebb földet igényel, több embert képes ellátni, és csökkenti az állatoknak és az ökoszisztémáknak okozott károkat."
  },
  quiz: {  
    question: {
      en: "What percentage of global agricultural land is used for livestock?",
      es: "¿Qué porcentaje de la tierra agrícola mundial se utiliza para la ganadería?",
      hu: "A globális mezőgazdasági területek hány százalékát használják állattenyésztésre?"
    },
    options: {
      en: ["36%", "50%", "77%", "90%"],
      es: ["36%", "50%", "77%", "90%"],
      hu: ["36%", "50%", "77%", "90%"]
    },
    answer: 2
  }
},

19: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Wild animals and disappearing homes",
    es: "Animales salvajes y hogares que desaparecen",
    hu: "Vadállatok és eltűnő élőhelyek"
  },
  lesson: {
    en: "When we imagine wild animals living freely, we picture a healthy planet. Yet much of the natural world is disappearing due to animal agriculture. Large areas of land are cleared for grazing and animal feed, destroying forests and habitats. Pollution from farms contaminates rivers and oceans, harming marine life. Our daily food choices influence whether wild animals can continue to thrive in their natural homes.",
    es: "Cuando imaginamos animales salvajes viviendo libres, pensamos en un planeta sano. Sin embargo, gran parte del mundo natural está desapareciendo debido a la ganadería. Grandes extensiones de tierra se destruyen para el pastoreo y el cultivo de alimento para animales, eliminando bosques y hábitats. La contaminación agrícola daña ríos y océanos, afectando a la vida marina. Nuestras elecciones alimentarias diarias influyen directamente en la supervivencia de estos animales.",
    hu: "Amikor vadállatokat képzelünk el szabadon élni, egy egészséges bolygóra gondolunk. Ennek ellenére a természetes élőhelyek nagy része eltűnik az állattenyésztés miatt. Hatalmas területeket irtanak ki legeltetésre és takarmánytermelésre, elpusztítva erdőket és élőhelyeket. A mezőgazdasági szennyezés károsítja a folyókat és tengereket, veszélyeztetve a tengeri élővilágot. Mindennapi étkezési döntéseink hatással vannak arra, hogy a vadállatok megőrizhetik-e otthonaikat."
  },
  quiz: {  
    question: {
      en: "How does animal agriculture harm wild animals?",
      es: "¿Cómo daña la ganadería a los animales salvajes?",
      hu: "Hogyan árt az állattenyésztés a vadállatoknak?"
    },
    options: {
      en: [
        "By destroying habitats and polluting ecosystems",
        "By restoring forests",
        "By increasing biodiversity everywhere",
        "It has no effect"
      ],
      es: [
        "Destruyendo hábitats y contaminando ecosistemas",
        "Restaurando bosques",
        "Aumentando la biodiversidad en todas partes",
        "No tiene ningún efecto"
      ],
      hu: [
        "Élőhelyek pusztításával és ökoszisztémák szennyezésével",
        "Erdők helyreállításával",
        "Mindenhol növeli a biodiverzitást",
        "Nincs hatása"
      ]
    },
    answer: 0
  }
},

20: {  
  goal: "Protecting animals & animal welfare",  
  diet: "omnivore",  
  title: {
    en: "Choosing compassion",
    es: "Elegir la compasión",
    hu: "Az együttérzés választása"
  },
  lesson: {
    en: "Most people agree that animals feel emotions, have individual personalities, and experience joy or fear. They are vulnerable and, like us, want to live. Recognizing this leads to an important question: do we want to participate in systems that exploit sentient beings, or do we want our actions to reflect compassion and responsibility?",
    es: "La mayoría de las personas reconoce que los animales sienten emociones, tienen personalidades únicas y experimentan alegría o miedo. Son vulnerables y, como nosotros, quieren vivir. Reconocer esto nos lleva a una pregunta clave: ¿queremos participar en sistemas que explotan a seres sintientes o elegir acciones que reflejen compasión y responsabilidad?",
    hu: "A legtöbben egyetértenek abban, hogy az állatok éreznek, egyedi személyiségük van, és képesek örömöt vagy félelmet megélni. Sebezhetőek, és hozzánk hasonlóan élni szeretnének. Ennek felismerése fontos kérdést vet fel: részt akarunk-e venni olyan rendszerekben, amelyek kizsákmányolják az érző lényeket, vagy inkább az együttérzést és felelősséget tükröző döntéseket választjuk?"
  },
  quiz: {  
    question: {
      en: "What does yesterday's lesson encourage us to reflect on?",
      es: "¿Sobre qué nos invita a reflexionar la lección anterior?",
      hu: "Mire ösztönöz az előző lecke?"
    },
    options: {
      en: [
        "Whether our actions align with our compassion",
        "If animals have no feelings",
        "How to consume more animal products",
        "Whether guilt is required for change"
      ],
      es: [
        "Si nuestras acciones están alineadas con nuestra compasión",
        "Si los animales no tienen sentimientos",
        "Cómo consumir más productos animales",
        "Si la culpa es necesaria para el cambio"
      ],
      hu: [
        "Összhangban vannak-e tetteink az együttérzésünkkel",
        "Az állatok nem éreznek-e",
        "Hogyan fogyasszunk több állati terméket",
        "Szükséges-e a bűntudat a változáshoz"
      ]
    },
    answer: 0
  }
},

// --------------------------
// Animal welfare - Vegetarian (21–40)
// --------------------------
21: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Moral dilemmas on the farm",
    es: "Dilemas morales en la granja",
    hu: "Morális dilemmák a farmon"
  },
  lesson: {
    en: "Imagine you run a small chicken farm. A chick hatches — would you raise it if it’s male? Male chicks don’t lay eggs, and in many production systems they are seen as ‘unprofitable’. This situation forces a hard choice: either invest time, space and food in animals that won’t produce returns, or end their lives because of economic logic. Framing the question this way reveals a moral tension between short-term profit and the value of an individual life.",
    es: "Imagina que tienes una pequeña granja de pollos. Nace un pollito: ¿lo criarías si es macho? Los pollitos machos no ponen huevos y, en muchos sistemas de producción, se consideran 'no rentables'. Esta situación obliga a tomar una decisión difícil: invertir tiempo, espacio y comida en animales que no producirán beneficios o terminar con sus vidas por lógica económica. Plantear la pregunta de esta manera revela una tensión moral entre el beneficio a corto plazo y el valor de la vida individual.",
    hu: "Képzeld el, hogy van egy kis csirketanyád. Kikel egy csibe – felnevelnéd, ha hím? A hím csibék nem tojnak tojást, és sok termelési rendszerben „nem nyereségesnek” tartják őket. Ez a helyzet nehéz választás elé állít: vagy időt, teret és ételt fektetsz olyan állatokba, amelyek nem hoznak hasznot, vagy az életüket a gazdasági logika miatt megszünteted. A kérdés így történő felvetése feltárja a rövid távú profit és az egyéni élet értéke közötti erkölcsi feszültséget."
  },
  quiz: {  
    question: {
      en: "What moral tension does the farm-owner scenario highlight?",
      es: "¿Qué tensión moral destaca el escenario del granjero?",
      hu: "Milyen erkölcsi feszültséget mutat a gazda története?"
    },  
    options: {
      en: [
        "Profit vs. the intrinsic value of an individual animal’s life",
        "Whether eggs taste better from certain breeds",
        "How to increase egg production quickly",
        "The best feed to maximize profits"
      ],
      es: [
        "Beneficio frente al valor intrínseco de la vida de un animal individual",
        "Si los huevos saben mejor de ciertas razas",
        "Cómo aumentar rápidamente la producción de huevos",
        "El mejor alimento para maximizar los beneficios"
      ],
      hu: [
        "Profit vs. az egyes állatok életének belső értéke",
        "Hogy bizonyos fajták tojása ízletesebb-e",
        "Hogyan növeljük gyorsan a tojástermelést",
        "A legjobb takarmány a profit maximalizálásához"
      ]
    },
    answer: 0
  }
},
22: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "The hidden cost of animal products",
    es: "El costo oculto de los productos animales",
    hu: "Az állati termékek rejtett ára"
  },
  lesson: {
    en: "In our society, animals are often treated as products rather than living beings. The price of meat, dairy, or eggs reflects only the cost of production, transport, and sale — not the suffering, confinement, or shortened lives of the animals themselves. Their sacrifices — the stress, pain, and loss of freedom — are invisible in monetary terms. By reducing our consumption of animal products or choosing plant-based alternatives, we recognize that animals are sentient beings whose lives have intrinsic value, far beyond any price tag placed on them.",
    es: "En nuestra sociedad, los animales a menudo son tratados como productos en lugar de seres vivos. El precio de la carne, los lácteos o los huevos refleja únicamente el costo de producción, transporte y venta, no el sufrimiento, confinamiento o vidas acortadas de los propios animales. Sus sacrificios —el estrés, el dolor y la pérdida de libertad— son invisibles en términos monetarios. Al reducir nuestro consumo de productos animales o elegir alternativas vegetales, reconocemos que los animales son seres sensibles cuya vida tiene un valor intrínseco, mucho más allá de cualquier precio asignado.",
    hu: "Társadalmunkban az állatokat gyakran termékként kezelik, nem élőlényként. A hús, tejtermék vagy tojás ára csak a termelés, szállítás és értékesítés költségét tükrözi — nem az állatok szenvedését, bezártságát vagy rövidített életét. Az ő áldozataik — a stressz, a fájdalom és a szabadság elvesztése — pénzben kifejezve láthatatlanok. Az állati termékek fogyasztásának csökkentésével vagy növényi alternatívák választásával elismerjük, hogy az állatok érző lények, akiknek élete belső értékkel bír, jóval túlmutat bármilyen árkategórián."
  },
  quiz: {  
    question: {
      en: "What does the price of animal products fail to account for?",
      es: "¿Qué no refleja el precio de los productos animales?",
      hu: "Mit nem tükröz az állati termékek ára?"
    },  
    options: {
      en: [
        "The cost of transporting the products",
        "The suffering and loss of freedom experienced by animals",
        "The packaging and marketing costs",
        "The calories provided by the product"
      ],
      es: [
        "El costo de transporte de los productos",
        "El sufrimiento y la pérdida de libertad que experimentan los animales",
        "Los costos de envasado y marketing",
        "Las calorías proporcionadas por el producto"
      ],
      hu: [
        "A termékek szállítási költsége",
        "Az állatok által átélt szenvedés és szabadságvesztés",
        "A csomagolás és marketing költségei",
        "A termék által biztosított kalóriák"
      ]
    },
    answer: 1
  }
},
23: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Life in confinement",
    es: "Vida en confinamiento",
    hu: "Élet bezártságban"
  },
  lesson: {
    en: "Many farm animals spend their entire lives in confined spaces. Cows often live indoors on hard floors with limited room to move. Mother pigs on factory farms are kept in gestation crates so small they cannot even turn around. Laying hens are frequently packed into cages where each bird has roughly the space of an A4 sheet of paper. These conditions prevent animals from expressing natural behaviors such as walking freely, nursing their young, or stretching their wings. Reducing our consumption of animal-based products directly reduces the number of animals forced to live in these restrictive environments.",
    es: "Muchos animales de granja pasan toda su vida en espacios confinados. Las vacas suelen vivir en interiores, sobre suelos duros y con poco espacio para moverse. Las cerdas madre en granjas industriales son mantenidas en jaulas de gestación tan pequeñas que ni siquiera pueden darse la vuelta. Las gallinas ponedoras a menudo están hacinadas en jaulas donde cada ave dispone de un espacio similar al de una hoja A4. Estas condiciones les impiden expresar comportamientos naturales como caminar libremente, cuidar de sus crías o estirar las alas. Reducir el consumo de productos de origen animal disminuye directamente el número de animales que viven en estos entornos restrictivos.",
    hu: "Sok haszonállat egész életét szűk, zárt körülmények között tölti. A tehenek gyakran beltérben élnek, kemény padlón, korlátozott mozgástérrel. Az ipari telepeken a kocaanyákat vemhesítési ketrecekben tartják, amelyek olyan kicsik, hogy még megfordulni sem tudnak. A tojótyúkokat gyakran olyan zsúfolt ketrecekbe zárják, ahol egy állatra körülbelül egy A4-es lapnyi hely jut. Ezek a körülmények megakadályozzák a természetes viselkedést, például a szabad mozgást, az utódok gondozását vagy a szárnyak kinyújtását. Az állati eredetű termékek fogyasztásának csökkentése közvetlenül csökkenti az ilyen körülmények között élő állatok számát."
  },
  quiz: {  
    question: {
      en: "How much space does a hen typically have in a battery cage?",
      es: "¿Cuánto espacio tiene normalmente una gallina en una jaula en batería?",
      hu: "Mekkora hely jut általában egy tyúkra egy ketreces tartásban?"
    },
    options: {
      en: [
        "Around the size of an A4 sheet of paper",
        "About 2 square meters",
        "A full open yard",
        "Half a room"
      ],
      es: [
        "Aproximadamente el tamaño de una hoja A4",
        "Unos 2 metros cuadrados",
        "Un patio abierto completo",
        "La mitad de una habitación"
      ],
      hu: [
        "Körülbelül egy A4-es lap mérete",
        "Kb. 2 négyzetméter",
        "Egy teljes nyitott udvar",
        "Egy szoba fele"
      ]
    },
    answer: 0
  }
},
24: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Bred to grow too fast",
    es: "Criados para crecer demasiado rápido",
    hu: "Túl gyors növekedésre tenyésztve"
  },
  lesson: {
    en: "Modern broiler chickens are selectively bred to grow extremely fast, reaching market weight in just 5–7 weeks. Their wild ancestors grow slowly, live for several years, and remain much lighter. Factory-farmed chickens often weigh four to five times more than wild chickens at a fraction of the age. This unnatural growth places enormous strain on their bodies, leading to heart failure, leg deformities, and organ problems. Breeding animals for rapid growth prioritizes production efficiency over their health and well-being. Understanding this helps us recognize the hidden cost of industrial breeding and the benefits of choosing plant-based alternatives.",
    es: "Los pollos de engorde modernos son criados selectivamente para crecer de forma extremadamente rápida, alcanzando el peso de mercado en solo 5–7 semanas. Sus antepasados salvajes crecen lentamente, viven varios años y pesan mucho menos. Los pollos de granja industrial suelen pesar entre cuatro y cinco veces más que los pollos salvajes a una edad mucho menor. Este crecimiento antinatural ejerce una enorme presión sobre sus cuerpos, provocando fallos cardíacos, deformaciones en las patas y problemas orgánicos. Criar animales para un crecimiento acelerado prioriza la eficiencia productiva sobre su salud y bienestar. Comprender esto nos ayuda a reconocer el costo oculto de la cría industrial y los beneficios de elegir alternativas vegetales.",
    hu: "A modern brojlercsirkéket úgy tenyésztik, hogy rendkívül gyorsan növekedjenek, és már 5–7 hetes korban elérjék a vágósúlyt. Vad őseik ezzel szemben lassan nőnek, több évig élnek, és jóval kisebb testtömegűek. Az ipari körülmények között nevelt csirkék gyakran négyszer-ötször nehezebbek, miközben életkoruk töredéke a vadon élő társaikénak. Ez a természetellenes növekedés súlyos terhelést ró a szervezetükre, szívproblémákat, lábdeformációkat és szervi károsodásokat okozva. A gyors növekedésre való tenyésztés a termelési hatékonyságot helyezi előtérbe az állatok egészségével és jólétével szemben. Ennek megértése segít felismerni az ipari tenyésztés rejtett következményeit és a növényi alapú választások előnyeit."
  },
  quiz: {  
    question: {
      en: "How do factory-farmed chickens differ from their wild relatives?",
      es: "¿En qué se diferencian los pollos de granja industrial de sus parientes salvajes?",
      hu: "Miben különböznek az ipari csirkék a vadon élő rokonaiktól?"
    },
    options: {
      en: [
        "They grow slower and live longer",
        "They have the same growth rate and lifespan",
        "They live longer but weigh less",
        "They grow much faster, weigh more, and live shorter lives"
      ],
      es: [
        "Crecen más lento y viven más",
        "Tienen la misma tasa de crecimiento y esperanza de vida",
        "Viven más pero pesan menos",
        "Crecen mucho más rápido, pesan más y viven menos tiempo"
      ],
      hu: [
        "Lassabban nőnek és tovább élnek",
        "Ugyanolyan a növekedésük és az élettartamuk",
        "Tovább élnek, de kisebbek",
        "Sokkal gyorsabban nőnek, nehezebbek és rövidebb ideig élnek"
      ]
    },
    answer: 3
  }
},
25: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Length of life or quality of life?",
    es: "¿Duración o calidad de vida?",
    hu: "Élet hossza vagy életminőség?"
  },
  lesson: {
    en: "Would you choose a short life in freedom or a longer life filled with suffering? Many farmed animals face this reality. Some live short lives marked by intense pain due to overcrowding and selective breeding. Others may live longer but endure repeated cycles of confinement and exploitation. This question invites us to reflect on whether life’s value lies solely in its length, or in the quality of experiences it contains. Considering this can help guide more compassionate food choices.",
    es: "¿Preferirías una vida corta en libertad o una vida más larga llena de sufrimiento? Muchos animales de granja viven esta realidad. Algunos tienen vidas breves marcadas por un dolor intenso debido al hacinamiento y la cría selectiva. Otros viven algo más, pero soportan ciclos repetidos de confinamiento y explotación. Esta pregunta nos invita a reflexionar sobre si el valor de la vida está solo en su duración o en la calidad de las experiencias que contiene. Pensarlo puede ayudarnos a tomar decisiones alimentarias más compasivas.",
    hu: "Egy rövid, szabad életet választanál, vagy egy hosszabbat, amely tele van szenvedéssel? Sok haszonállat számára ez a valóság. Egyesek rövid életet élnek, intenzív fájdalommal, zsúfoltság és szelektív tenyésztés miatt. Mások valamivel tovább élnek, de ismétlődő bezártságot és kizsákmányolást szenvednek el. Ez a kérdés arra hív, hogy elgondolkodjunk: az élet értékét a hossza adja, vagy az élmények minősége? Ennek átgondolása segíthet együttérzőbb ételválasztásokban."
  },
  quiz: {  
    question: {
      en: "What dilemma does this lesson highlight?",
      es: "¿Qué dilema destaca esta lección?",
      hu: "Milyen dilemmára világít rá ez a lecke?"
    },
    options: {
      en: [
        "Animals always prefer confinement",
        "The trade-off between lifespan and suffering",
        "Longer life is always better",
        "Suffering has no impact on life value"
      ],
      es: [
        "Los animales siempre prefieren el confinamiento",
        "El conflicto entre la duración de la vida y el sufrimiento",
        "Una vida más larga siempre es mejor",
        "El sufrimiento no influye en el valor de la vida"
      ],
      hu: [
        "Az állatok mindig a bezártságot részesítik előnyben",
        "Az élettartam és a szenvedés közötti ellentét",
        "A hosszabb élet mindig jobb",
        "A szenvedés nem befolyásolja az élet értékét"
      ]
    },
    answer: 1
  }
},
26: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "The illusion of humane labels",
    es: "La ilusión de las etiquetas éticas",
    hu: "A humánus címkék illúziója"
  },
  lesson: {
    en: "Many people choose 'free-range' or 'cage-free' products believing animals did not suffer. While this is a comforting idea, the reality is often unclear—especially in cities or restaurants where the true origin of products is hard to verify. Labels can be misleading, and welfare standards vary widely. Recognizing this uncertainty allows us to make more compassionate choices, such as seeking fully verified sources or choosing plant-based alternatives to reduce the risk of supporting hidden suffering.",
    es: "Muchas personas eligen productos 'camperos' o 'libres de jaulas' pensando que los animales no sufrieron. Aunque es una idea reconfortante, la realidad suele ser incierta, especialmente en ciudades o restaurantes donde es difícil verificar el origen real de los productos. Las etiquetas pueden ser engañosas y los estándares varían mucho. Ser conscientes de esto nos permite tomar decisiones más compasivas, como buscar fuentes verificadas o elegir alternativas vegetales.",
    hu: "Sokan választanak „szabadtartású” vagy „ketrecmentes” termékeket abban a hitben, hogy az állatok nem szenvedtek. Bár ez megnyugtató gondolat, a valóság gyakran bizonytalan — különösen városokban vagy éttermekben, ahol nehéz ellenőrizni az eredetet. A címkék félrevezetők lehetnek, és az állatjóléti szabványok nagyon eltérőek. Ennek felismerése segít együttérzőbb döntéseket hozni, például hiteles forrásokat keresni vagy növényi alternatívákat választani."
  },
  quiz: {  
    question: {
      en: "Why might 'free-range' labels not guarantee that animals lived without suffering?",
      es: "¿Por qué las etiquetas 'campero' o 'free-range' no garantizan ausencia de sufrimiento?",
      hu: "Miért nem garantálják a „szabadtartású” címkék az állatok szenvedésmentes életét?"
    },
    options: {
      en: [
        "All animals live perfectly",
        "Plant-based products are worse",
        "Standards vary and labels can be misleading",
        "Free-range always means happy animals"
      ],
      es: [
        "Todos los animales viven perfectamente",
        "Los productos vegetales son peores",
        "Los estándares varían y las etiquetas pueden engañar",
        "Campero siempre significa animales felices"
      ],
      hu: [
        "Minden állat tökéletesen él",
        "A növényi termékek rosszabbak",
        "A szabványok eltérnek, a címkék félrevezetők lehetnek",
        "A szabadtartás mindig boldog állatokat jelent"
      ]
    },
    answer: 2
  }
},

27: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Engineering animals for profit",
    es: "Animales diseñados para el beneficio",
    hu: "Állatok átalakítása a profitért"
  },
  lesson: {
    en: "Imagine if humans could design animals to produce more eggs, milk, or meat. Genetic manipulation makes this possible, altering animals’ bodies and lifespans for maximum productivity. However, this often leads to serious health issues, chronic stress, and shortened natural lives. By purchasing products from such systems, we indirectly support these practices. Understanding this connection helps us reflect on ethical alternatives and the power of consumer demand.",
    es: "Imagina que los humanos pudieran diseñar animales para producir más huevos, leche o carne. La manipulación genética lo permite, alterando cuerpos y vidas para maximizar la productividad. Sin embargo, esto suele causar problemas de salud, estrés crónico y vidas más cortas. Al comprar estos productos, apoyamos indirectamente estas prácticas. Comprender esta relación nos ayuda a reflexionar sobre alternativas éticas.",
    hu: "Képzeld el, hogy az emberek állatokat tervezhetnének több tojás, tej vagy hús előállítására. A genetikai manipuláció ezt lehetővé teszi, megváltoztatva az állatok testét és élettartamát a maximális termelés érdekében. Ennek ára gyakran súlyos egészségügyi problémák, stressz és lerövidült élet. Az ilyen termékek megvásárlásával közvetetten támogatjuk ezeket a gyakorlatokat. Ennek felismerése segít etikus alternatívákon gondolkodni."
  },
  quiz: {
    question: {
      en: "What ethical concern does genetic manipulation in farmed animals raise?",
      es: "¿Qué problema ético plantea la manipulación genética en animales de granja?",
      hu: "Milyen etikai problémát vet fel a haszonállatok genetikai manipulációja?"
    },
    options: {
      en: [
        "It makes animals happier and healthier",
        "It has no impact on animal welfare",
        "It prioritizes human profit over animal health and natural life",
        "It only affects the taste of products"
      ],
      es: [
        "Hace a los animales más felices y sanos",
        "No afecta al bienestar animal",
        "Prioriza el beneficio humano sobre la salud y la vida natural",
        "Solo afecta al sabor de los productos"
      ],
      hu: [
        "Boldogabbá és egészségesebbé teszi az állatokat",
        "Nincs hatással az állatjólétre",
        "Az emberi profitot az állatok egészsége és természetes élete elé helyezi",
        "Csak az ízt befolyásolja"
      ]
    },
    answer: 2
  }
},

28: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "When labels hide reality",
    es: "Cuando las etiquetas ocultan la realidad",
    hu: "Amikor a címkék elfedik a valóságot"
  },
  lesson: {
    en: "Labels like 'cage-free,' 'free-range,' or 'grass-fed' sound reassuring, but they often fail to reflect animals’ real living conditions. In many cases, these terms do not guarantee space, natural behavior, or low stress. Standards differ between countries, and enforcement is limited. Being aware of this helps us make informed decisions and consider plant-based options that avoid hidden exploitation.",
    es: "Etiquetas como 'sin jaulas', 'campero' o 'alimentado con pasto' suenan tranquilizadoras, pero a menudo no reflejan las condiciones reales de los animales. No siempre garantizan espacio, comportamientos naturales o ausencia de estrés. Los estándares varían entre países y el control es limitado. Conocer esto nos ayuda a elegir con más conciencia.",
    hu: "Az olyan címkék, mint a „ketrecmentes”, „szabadtartású” vagy „legeltetett”, megnyugtatónak hangzanak, de gyakran nem tükrözik az állatok valódi életkörülményeit. Sok esetben nem garantálják a mozgásteret, a természetes viselkedést vagy az alacsony stresszt. Az előírások országonként eltérnek, az ellenőrzés pedig gyakran hiányos. Ennek tudatosítása segít megalapozottabb döntéseket hozni."
  },
  quiz: {  
    question: {
      en: "Why can labels like 'cage-free' or 'grass-fed' be misleading?",
      es: "¿Por qué pueden ser engañosas etiquetas como 'sin jaulas' o 'grass-fed'?",
      hu: "Miért lehetnek félrevezetők a „ketrecmentes” vagy „legeltetett” címkék?"
    },
    options: {
      en: [
        "Animals always live happily",
        "They guarantee no suffering",
        "Standards vary and enforcement is limited",
        "They refer only to plant-based products"
      ],
      es: [
        "Los animales siempre viven felices",
        "Garantizan que no hay sufrimiento",
        "Los estándares varían y el control es limitado",
        "Solo se refieren a productos vegetales"
      ],
      hu: [
        "Az állatok mindig boldogan élnek",
        "Garantálják a szenvedés hiányát",
        "A szabványok eltérnek és az ellenőrzés korlátozott",
        "Csak növényi termékekre vonatkoznak"
      ]
    },
    answer: 2
  }
},

29: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "The limits of free-range farming",
    es: "Los límites de la producción campera",
    hu: "A szabadtartás korlátai"
  },
  lesson: {
    en: "Producing genuinely free-range animal products requires large amounts of land. For example, free-range egg systems need far more space per hen than factory farms. This increases costs related to land, maintenance, and management, making such systems difficult to scale. While animal welfare improves, land availability and economics limit how widely these practices can be applied.",
    es: "Producir productos animales verdaderamente camperos requiere grandes extensiones de tierra. Por ejemplo, los sistemas de huevos camperos necesitan mucho más espacio por gallina que las granjas industriales. Esto eleva los costes y dificulta su expansión. Aunque mejora el bienestar animal, la disponibilidad de tierra y los factores económicos limitan su viabilidad.",
    hu: "A valóban szabadtartású állati termékek előállítása nagy földterületet igényel. Például a szabadtartású tojástermelés sokkal több helyet biztosít egy tyúknak, mint az ipari rendszerek. Ez növeli a költségeket, és korlátozza az ilyen rendszerek skálázhatóságát. Bár az állatjólét javul, a földhiány és a gazdasági tényezők határt szabnak."
  },
  quiz: {
    question: {
      en: "What is a major challenge in producing free-range animal products?",
      es: "¿Cuál es un gran desafío en la producción campera?",
      hu: "Mi a szabadtartású termelés egyik fő kihívása?"
    },
    options: {
      en: [
        "Lower operational costs",
        "Limited land availability",
        "Reduced animal welfare",
        "Unlimited scalability"
      ],
      es: [
        "Menores costes operativos",
        "Disponibilidad limitada de tierra",
        "Menor bienestar animal",
        "Escalabilidad ilimitada"
      ],
      hu: [
        "Alacsonyabb működési költségek",
        "Korlátozott földterület",
        "Csökkent állatjólét",
        "Korlátlan skálázhatóság"
      ]
    },
    answer: 1
  }
},

30: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegetarian",  
  title: {
    en: "Life in suffering versus death",
    es: "Vivir sufriendo o morir",
    hu: "Szenvedő élet vagy halál"
  },
  lesson: {
    en: "A difficult question often arises: is it worse to kill an animal, or to force it to live in extreme confinement and suffering? Many ethicists argue that prolonged suffering—being unable to move freely, express natural behaviors, or experience joy—can be worse than death itself. Factory farms frequently impose this reality, subjecting animals to lifelong stress until slaughter.",
    es: "Surge una pregunta difícil: ¿es peor matar a un animal o obligarlo a vivir en confinamiento extremo y sufrimiento constante? Muchos filósofos sostienen que el sufrimiento prolongado —sin libertad ni comportamientos naturales— puede ser peor que la muerte. Las granjas industriales suelen imponer esta realidad durante toda la vida del animal.",
    hu: "Gyakran felmerül egy nehéz kérdés: mi rosszabb — megölni egy állatot, vagy egész életére extrém szenvedésbe és bezártságba kényszeríteni? Sok etikus szerint a hosszan tartó szenvedés, mozgás és természetes viselkedés nélkül, súlyosabb lehet, mint maga a halál. Az ipari állattartás gyakran ezt a valóságot jelenti."
  },
  quiz: {
    question: {
      en: "Which situation is often considered worse for an animal?",
      es: "¿Qué situación suele considerarse peor para un animal?",
      hu: "Melyik helyzetet tartják gyakran rosszabbnak egy állat számára?"
    },
    options: {
      en: [
        "Being killed immediately",
        "Living a life in extreme confinement and suffering",
        "Living freely in nature",
        "Living with loving humans"
      ],
      es: [
        "Morir inmediatamente",
        "Vivir una vida de confinamiento extremo y sufrimiento",
        "Vivir libre en la naturaleza",
        "Vivir con humanos cariñosos"
      ],
      hu: [
        "Azonnali halál",
        "Extrém bezártságban és szenvedésben élni",
        "Szabadon élni a természetben",
        "Szerető emberekkel élni"
      ]
    },
    answer: 1
  }
},  31: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Egg production beyond natural limits",
    es: "Producción de huevos más allá de los límites naturales",
    hu: "A természetes határokon túli tojástermelés"
  },
  lesson: {
    en: "Modern egg-laying hens have been selectively bred to produce far more eggs than their wild ancestors. While a wild hen or red junglefowl lays around 10–15 eggs per year, domesticated hens in industrial systems can lay over 300 eggs annually. This extreme production places enormous strain on their bodies, often causing weakened bones, organ failure, and chronic exhaustion. Understanding how selective breeding affects animals helps us make more compassionate choices and reduce demand for products that harm their well-being.",
    es: "Las gallinas ponedoras modernas han sido seleccionadas genéticamente para producir muchos más huevos que sus antepasados salvajes. Mientras que una gallina silvestre pone alrededor de 10–15 huevos al año, las gallinas domesticadas en sistemas industriales pueden poner más de 300. Esta producción extrema ejerce una gran presión sobre sus cuerpos, provocando problemas como huesos debilitados, fallos orgánicos y agotamiento crónico. Comprender este proceso nos ayuda a tomar decisiones más compasivas.",
    hu: "A modern tojótyúkokat szelektív tenyésztéssel arra alakították ki, hogy sokkal több tojást termeljenek, mint vadon élő őseik. Míg egy vadon élő tyúk évente körülbelül 10–15 tojást rak, az ipari rendszerekben tartott tyúkok akár 300-at is. Ez az extrém terhelés súlyos egészségügyi problémákhoz vezethet, például csontgyengüléshez, szervi károsodáshoz és krónikus kimerültséghez. Ennek megértése segít együttérzőbb döntéseket hozni."
  },
  quiz: {
    question: {
      en: "How many eggs can a factory-farmed hen lay compared to a wild hen?",
      es: "¿Cuántos huevos pone una gallina industrial comparada con una silvestre?",
      hu: "Hány tojást rak egy ipari tyúk a vadon élőhöz képest?"
    },
    options: {
      en: [
        "50 eggs per year vs. 100 eggs per year",
        "100 eggs per year vs. 200 eggs per year",
        "10–15 eggs per year vs. over 300 eggs per year",
        "Both lay about the same amount"
      ],
      es: [
        "50 huevos al año frente a 100",
        "100 huevos al año frente a 200",
        "10–15 huevos al año frente a más de 300",
        "Ambas ponen cantidades similares"
      ],
      hu: [
        "Évi 50 tojás szemben 100-zal",
        "Évi 100 tojás szemben 200-zal",
        "Évi 10–15 tojás szemben több mint 300-zal",
        "Nagyjából ugyanannyit tojnak"
      ]
    },
    answer: 2
  }
},

32: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Breaking the bond in dairy farming",
    es: "La ruptura del vínculo en la industria láctea",
    hu: "Az anya és borjú kapcsolatának megszakítása"
  },
  lesson: {
    en: "Mother cows are deeply social and emotional animals who form strong bonds with their calves. In the dairy industry, these bonds are routinely broken when calves are taken away within hours or days of birth so humans can take the milk. This separation causes intense stress and distress for both mother and calf. The mother is repeatedly impregnated to maintain milk production, while calves face uncertain and often harsh futures.",
    es: "Las vacas madre son animales sociales y emocionales que crean fuertes vínculos con sus terneros. En la industria láctea, estos vínculos se rompen cuando los terneros son separados poco después del nacimiento para que la leche sea destinada al consumo humano. Esta separación provoca un gran sufrimiento tanto en la madre como en la cría. La vaca es inseminada repetidamente para mantener la producción de leche.",
    hu: "A tehenek rendkívül szociális és érzelmes állatok, erős köteléket alakítanak ki borjaikkal. A tejiparban ezt a kapcsolatot gyakran órákon vagy napokon belül megszakítják, hogy az emberek elvehessék a tejet. Ez súlyos stresszt okoz mind az anya, mind a borjú számára. A tehenet újra és újra vemhesítik a tejtermelés fenntartásához."
  },
  quiz: {
    question: {
      en: "Why is the separation of calves from their mothers in the dairy industry harmful?",
      es: "¿Por qué es perjudicial separar a los terneros de sus madres?",
      hu: "Miért káros a borjak elválasztása az anyjuktól?"
    },
    options: {
      en: [
        "It increases milk production",
        "Cows are highly emotional and form strong bonds with their calves",
        "It helps the calf grow faster",
        "It is only done in small farms"
      ],
      es: [
        "Aumenta la producción de leche",
        "Las vacas son emocionales y forman fuertes vínculos",
        "Ayuda al crecimiento del ternero",
        "Solo ocurre en pequeñas granjas"
      ],
      hu: [
        "Növeli a tejtermelést",
        "A tehenek érzelmesek és erős kötődést alakítanak ki",
        "Segíti a borjú gyorsabb növekedését",
        "Csak kis gazdaságokban történik"
      ]
    },
    answer: 1
  }
},

33: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "The hidden victims of dairy",
    es: "Las víctimas invisibles de la industria láctea",
    hu: "A tejipar rejtett áldozatai"
  },
  lesson: {
    en: "In the dairy industry, male calves are considered by-products because they cannot produce milk. Shortly after birth, many are sold for veal or raised for beef, often under harsh conditions. They are commonly separated from their mothers immediately and may undergo painful procedures without adequate pain relief. This shows that dairy farming exploits not only cows, but also condemns male calves to suffering and early death.",
    es: "En la industria láctea, los terneros machos se consideran subproductos porque no producen leche. Poco después de nacer, muchos son vendidos para la producción de ternera o carne, a menudo en condiciones duras. Son separados de sus madres y sometidos a procedimientos dolorosos. Esto demuestra que la industria láctea también causa sufrimiento a los terneros machos.",
    hu: "A tejiparban a hím borjakat mellékterméknek tekintik, mivel nem termelnek tejet. Születésük után gyakran borjúhús vagy marhahús céljából értékesítik őket, sokszor kegyetlen körülmények között. Anyjuktól azonnal elszakítják őket, és fájdalmas beavatkozásoknak vetik alá őket. Ez rávilágít arra, hogy a tejtermelés a hím borjak szenvedésével is jár."
  },
  quiz: {
    question: {
      en: "What usually happens to male calves in the dairy industry?",
      es: "¿Qué ocurre normalmente con los terneros machos?",
      hu: "Mi történik általában a hím borjakkal?"
    },
    options: {
      en: [
        "They become dairy cows later",
        "They are kept as pets",
        "They live freely on pastures",
        "They are sold for veal or beef under harsh conditions"
      ],
      es: [
        "Se convierten en vacas lecheras",
        "Se mantienen como mascotas",
        "Viven libremente en pastos",
        "Se venden para carne en condiciones duras"
      ],
      hu: [
        "Később tejtermelő tehenekké válnak",
        "Háziállatként tartják őket",
        "Szabadon élnek a legelőkön",
        "Húsipari célra adják el őket"
      ]
    },
    answer: 3
  }
},

34: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Disposable lives in the egg industry",
    es: "Vidas desechables en la industria del huevo",
    hu: "Eldobható életek a tojásiparban"
  },
  lesson: {
    en: "In the egg industry, male chicks are considered useless because they cannot lay eggs. Within hours of hatching, billions are killed worldwide using methods like gassing or maceration. This practice reveals how industrial systems treat animals as production units rather than sentient beings. Male chicks are denied even a short life simply because they are not profitable.",
    es: "En la industria del huevo, los pollitos machos se consideran inútiles porque no ponen huevos. A las pocas horas de nacer, miles de millones son sacrificados mediante métodos como el gaseado o la trituración. Esta práctica muestra cómo el sistema industrial ve a los animales como objetos de producción y no como seres sintientes.",
    hu: "A tojásiparban a hím csibéket haszontalannak tekintik, mert nem tojnak tojást. Kikelésük után órákon belül világszerte milliárdokat pusztítanak el. Ez a gyakorlat azt mutatja, hogy az ipari rendszer az állatokat puszta termelési egységként kezeli, megfosztva őket még egy rövid élettől is."
  },
  quiz: {
    question: {
      en: "Why are male chicks killed shortly after hatching?",
      es: "¿Por qué se matan los pollitos machos tras nacer?",
      hu: "Miért pusztítják el a hím csibéket kikelés után?"
    },
    options: {
      en: [
        "They cannot lay eggs and are considered unprofitable",
        "They grow too slowly",
        "They fight with others",
        "They are kept for breeding"
      ],
      es: [
        "No ponen huevos y no son rentables",
        "Crecen demasiado lento",
        "Pelean con otros",
        "Se usan para reproducción"
      ],
      hu: [
        "Nem tojnak tojást és nem nyereségesek",
        "Túl lassan nőnek",
        "Verekednek másokkal",
        "Tenyésztésre tartják őket"
      ]
    },
    answer: 0
  }
},

35: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "No good choice in animal farming",
    es: "Sin buenas opciones en la ganadería",
    hu: "Nincs jó szerep az állattenyésztésben"
  },
  lesson: {
    en: "Imagine being born into the farming industry—would you rather be male or female? Male animals are often killed shortly after birth or raised for meat under harsh conditions. Females are trapped in cycles of exploitation: repeatedly bred, confined, and separated from their offspring until they are no longer profitable. This reflection highlights how farmed animals are denied meaningful choices and subjected to suffering regardless of sex.",
    es: "Imagina nacer en la industria ganadera: ¿preferirías ser macho o hembra? Los machos suelen ser sacrificados pronto o criados para carne, mientras que las hembras son explotadas repetidamente mediante reproducción forzada y separación de sus crías. Esta reflexión muestra que no hay un destino justo para los animales en estos sistemas.",
    hu: "Képzeld el, hogy az állattenyésztésbe születsz — inkább hím vagy nőstény lennél? A hímeket gyakran hamar elpusztítják vagy húsipari célokra nevelik, míg a nőstényeket újra és újra vemhesítik, bezárják és elválasztják utódaiktól. Ez rávilágít arra, hogy az állatok számára nincs valódi választás vagy méltányos sors."
  },
  quiz: {
    question: {
      en: "In the farming industry, what are typical fates of male and female animals?",
      es: "En la ganadería, ¿cuál es el destino típico de machos y hembras?",
      hu: "Mi jellemző a hím és nőstény állatok sorsára az iparban?"
    },
    options: {
      en: [
        "Both live free lives",
        "Males are killed or raised for meat; females are repeatedly bred and exploited",
        "Males produce milk or eggs; females are used for meat",
        "All are released after birth"
      ],
      es: [
        "Ambos viven libres",
        "Los machos mueren o se crían para carne; las hembras son explotadas",
        "Los machos producen leche o huevos; las hembras carne",
        "Todos son liberados"
      ],
      hu: [
        "Mindkettő szabadon él",
        "A hímeket megölik vagy húsért nevelik; a nőstényeket kizsákmányolják",
        "A hímek tejet vagy tojást termelnek; a nőstények húst",
        "Születés után elengedik őket"
      ]
    },
    answer: 1
  }
},
36: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Profit versus compassion",
    es: "Beneficio frente a compasión",
    hu: "Profit kontra együttérzés"
  },
  lesson: {
    en: "If you ran a farm, would you prioritize maximizing output or respecting animals’ natural behaviors? Would you manipulate genetics purely for profit? Imagine competing with companies that harm animals to gain advantages, forcing you into unethical choices. This dilemma reflects a broader reality of capitalism, where profit often outweighs ethics. As individuals, choosing plant-based products may be one of the most effective ways to step out of this system.",
    es: "Si dirigieras una granja, ¿priorizarías maximizar la producción o respetar el comportamiento natural de los animales? ¿Modificarías la genética solo por beneficio económico? Imagina competir con empresas que dañan a los animales para obtener ventajas. Este dilema refleja una realidad más amplia del capitalismo, donde el beneficio suele pesar más que la ética. Como individuos, elegir productos vegetales puede ser una forma de romper con este sistema.",
    hu: "Ha te irányítanál egy gazdaságot, a maximális termelést vagy az állatok természetes viselkedésének tiszteletben tartását választanád? Genetikailag módosítanál pusztán profitért? Képzeld el, hogy olyan cégekkel kell versenyezned, amelyek állatkínzással jutnak előnyhöz. Ez a dilemma a kapitalizmus egyik alapvető problémáját tükrözi, ahol gyakran a profit megelőzi az etikát. Egyéni szinten a növényi alapú választások jelenthetnek kiutat."
  },
  quiz: {
    question: {
      en: "What ethical tension does this lesson explore?",
      es: "¿Qué conflicto ético explora esta lección?",
      hu: "Milyen etikai feszültséget mutat be a lecke?"
    },
    options: {
      en: [
        "Choosing between profit and respecting animals’ natural behaviors",
        "Deciding which breed tastes best",
        "Maximizing output without ethics",
        "Only focusing on competition"
      ],
      es: [
        "Elegir entre beneficio y respeto a los animales",
        "Decidir qué raza sabe mejor",
        "Maximizar la producción sin ética",
        "Pensar solo en la competencia"
      ],
      hu: [
        "A profit és az állatok tisztelete közötti választás",
        "Melyik fajta ízlik jobban",
        "Termelés maximalizálása etika nélkül",
        "Csak a verseny figyelembevétele"
      ]
    },
    answer: 0
  }
},

37: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Calories versus lives",
    es: "Calorías frente a vidas",
    hu: "Kalóriák kontra életek"
  },
  lesson: {
    en: "About 2,340 kcal of chicken meat equals the life of one broiler chicken, while roughly 15,750 kcal of eggs equals the life of one hen, including the male chick. These figures reflect deaths only, not the suffering endured. They invite us to reflect: is it the number of lives lost, or the amount of suffering caused, that matters more when we choose what to eat?",
    es: "Aproximadamente 2.340 kcal de carne de pollo equivalen a la vida de un pollo de engorde, mientras que unas 15.750 kcal de huevos equivalen a la vida de una gallina, incluido el pollito macho. Estas cifras reflejan muertes, no sufrimiento. Nos invitan a reflexionar sobre qué pesa más en nuestras decisiones alimentarias.",
    hu: "Körülbelül 2 340 kcal csirkehús egy brojlercsirke életével egyenlő, míg nagyjából 15 750 kcal tojás egy tojó életét jelenti, beleértve a hím csibét is. Ezek a számok csak a halált mutatják, nem a szenvedést. Arra ösztönöznek, hogy elgondolkodjunk: mi számít jobban?"
  },
  quiz: {
    question: {
      en: "What does this lesson encourage us to consider?",
      es: "¿Qué nos invita a considerar esta lección?",
      hu: "Mire ösztönöz ez a lecke?"
    },
    options: {
      en: [
        "Which animal tastes better",
        "Cooking efficiency",
        "The lives lost and suffering caused by our food choices",
        "Farm productivity"
      ],
      es: [
        "Qué animal sabe mejor",
        "La eficiencia al cocinar",
        "Las vidas perdidas y el sufrimiento causado",
        "La productividad agrícola"
      ],
      hu: [
        "Melyik állat ízletesebb",
        "Főzési hatékonyság",
        "Az életek elvesztése és a szenvedés",
        "A gazdaság hatékonysága"
      ]
    },
    answer: 2
  }
},

38: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Debeaking and control",
    es: "El despique y el control",
    hu: "Csőrkurtítás és kontroll"
  },
  lesson: {
    en: "In the egg industry, hens are often debeaked to prevent pecking injuries caused by overcrowding. The tip of the beak is removed shortly after hatching, usually without anesthesia. Although it reduces visible injuries, it causes pain, stress, and limits natural behaviors like pecking and eating. Debeaking shows how industrial systems prioritize efficiency over animal well-being.",
    es: "En la industria del huevo, a las gallinas se les corta el pico para evitar heridas por picoteo en espacios saturados. Este procedimiento suele hacerse sin anestesia y causa dolor y estrés, además de limitar comportamientos naturales. Refleja cómo la eficiencia se prioriza sobre el bienestar animal.",
    hu: "A tojásiparban gyakran csőrkurtítást alkalmaznak, hogy megelőzzék a zsúfoltság miatti sérüléseket. A beavatkozást rendszerint érzéstelenítés nélkül végzik, fájdalmat és stresszt okozva, valamint korlátozva a természetes viselkedést. Ez jól mutatja az ipari szemléletet."
  },
  quiz: {
    question: {
      en: "Why are hens often debeaked in the egg industry?",
      es: "¿Por qué se les corta el pico a las gallinas?",
      hu: "Miért kurtítják meg a tyúkok csőrét?"
    },
    options: {
      en: [
        "To prevent injuries from pecking in crowded conditions",
        "For appearance",
        "To increase egg production",
        "To speed up growth"
      ],
      es: [
        "Para evitar heridas por picoteo",
        "Por estética",
        "Para poner más huevos",
        "Para crecer más rápido"
      ],
      hu: [
        "A csipkedés okozta sérülések megelőzésére",
        "Esztétikai okokból",
        "A tojástermelés növelésére",
        "Gyorsabb növekedésért"
      ]
    },
    answer: 0
  }
},

39: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "The double standard in clothing",
    es: "El doble estándar en la ropa",
    hu: "Kettős mérce az öltözködésben"
  },
  lesson: {
    en: "Many people reject fur but accept leather, wool, and down without question. Reflecting on how these everyday materials affect sentient beings can help us align our clothing choices with our values. Plant-based and synthetic alternatives allow us to reduce harm without sacrificing comfort or style.",
    es: "Muchas personas rechazan la piel, pero aceptan el cuero, la lana y el plumón como algo normal. Reflexionar sobre el impacto de estos materiales en los animales puede ayudarnos a elegir alternativas más coherentes con nuestros valores.",
    hu: "Sokan elutasítják a szőrmét, miközben a bőr, a gyapjú és a toll elfogadott marad. Ha végiggondoljuk ezek hatását az érző lényekre, közelebb kerülhetünk értékeinkhez illeszkedő döntésekhez."
  },
  quiz: {
    question: {
      en: "What ethical issue does this lesson highlight?",
      es: "¿Qué cuestión ética destaca esta lección?",
      hu: "Milyen etikai kérdést emel ki a lecke?"
    },
    options: {
      en: [
        "Fashion trends",
        "Animal exploitation in clothing production",
        "Brand prices",
        "Laundry efficiency"
      ],
      es: [
        "Las tendencias de moda",
        "La explotación animal en la ropa",
        "Los precios de marcas",
        "Cómo lavar la ropa"
      ],
      hu: [
        "Divatirányzatok",
        "Állatok kizsákmányolása a ruházatban",
        "Márkaárak",
        "Ruhamosás hatékonysága"
      ]
    },
    answer: 1
  }
},

40: {
  goal: "Protecting animals & animal welfare",
  diet: "vegetarian",
  title: {
    en: "Animals as entertainment",
    es: "Animales como entretenimiento",
    hu: "Állatok szórakoztatásra"
  },
  lesson: {
    en: "Zoos and circuses often frame animals as entertainment rather than individuals with needs and emotions. Many live in confined spaces, far from their natural habitats, and are trained through stress or punishment. This raises an important question: should animals exist for our amusement, or should we seek cruelty-free ways to enjoy ourselves?",
    es: "Los zoológicos y circos suelen presentar a los animales como entretenimiento, no como seres con necesidades y emociones. Muchos viven en espacios reducidos y son entrenados mediante estrés. Esto plantea la pregunta de si es ético usarlos para nuestro ocio.",
    hu: "Az állatkertek és cirkuszok gyakran szórakoztatásként kezelik az állatokat, nem pedig érző lényekként. Sokukat kis helyeken tartják és stresszel idomítják. Felmerül a kérdés: helyes-e ez?"
  },
  quiz: {
    question: {
      en: "What is the main ethical concern about zoos and circuses?",
      es: "¿Cuál es la principal preocupación ética?",
      hu: "Mi a fő etikai probléma?"
    },
    options: {
      en: [
        "Seat quality",
        "Animals used for profit and entertainment",
        "Difficulty of tricks",
        "Taking photos"
      ],
      es: [
        "La calidad de los asientos",
        "El uso de animales para lucro y entretenimiento",
        "La dificultad de los trucos",
        "Tomar fotos"
      ],
      hu: [
        "Ülőhelyek minősége",
        "Állatok használata profitért és szórakozásért",
        "Mutatványok nehézsége",
        "Fényképezés"
      ]
    },
    answer: 1
  }
},

// --------------------------
// Animal welfare - Vegan (41–100)
// --------------------------

41: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "The purpose of veganism",
    es: "El propósito del veganismo",
    hu: "A veganizmus célja"
  },
  lesson: {
    en: "Veganism is a lifestyle that seeks to avoid all forms of animal exploitation and cruelty, not just a diet. While a vegan diet excludes meat, dairy, eggs, and other animal products, veganism also means avoiding products like leather, fur, silk, wool, and cosmetics tested on animals. Its main goal is to protect animals and promote their welfare in every aspect of life.",
    es: "El veganismo es un estilo de vida que busca evitar todas las formas de explotación y crueldad hacia los animales, no solo una dieta. Mientras que una dieta vegana excluye carne, lácteos, huevos y otros productos de origen animal, el veganismo también implica evitar productos como cuero, pieles, seda, lana y cosméticos probados en animales. Su objetivo principal es proteger a los animales y promover su bienestar en todos los aspectos de la vida.",
    hu: "A veganizmus egy életmód, amely minden állatkizsákmányolás és kegyetlenség elkerülésére törekszik, nemcsak az étrendre korlátozódik. Míg a vegán étrend kizárja a húst, tejtermékeket, tojást és más állati eredetű termékeket, a veganizmus azt is jelenti, hogy kerüljük a bőrt, szőrmét, selymet, gyapjút és az állatokon tesztelt kozmetikumokat. Fő célja az állatok védelme és jólétük előmozdítása az élet minden területén."
  },
  quiz: {  
    question: {
      en: "What is the main purpose of veganism?",
      es: "¿Cuál es el objetivo principal del veganismo?",
      hu: "Mi a veganizmus fő célja?"
    },  
    options: {
      en: [
        "To eat only plant-based foods",
        "To avoid harming animals and reduce exploitation",
        "To follow a healthy diet plan"
      ],
      es: [
        "Comer solo alimentos de origen vegetal",
        "Evitar dañar a los animales y reducir la explotación",
        "Seguir un plan de dieta saludable"
      ],
      hu: [
        "Csak növényi alapú ételeket enni",
        "Elkerülni az állatok bántalmazását és csökkenteni a kizsákmányolást",
        "Követni egy egészséges étrendet"
      ]
    },
    answer: 1
  }
},

42: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "Why eating animals isn’t necessary today",
    es: "Por qué comer animales ya no es necesario",
    hu: "Miért nincs szükség ma állatokat enni"
  },
  lesson: {
    en: "Many people believe that eating animals is natural and part of human evolution. Once it was a key survival strategy, but today we can walk into a store and buy almost anything we want. True natural living means animals born into freedom, able to experience life, not genetically modified or confined to tiny cages where they are raised solely for slaughter.",
    es: "Muchas personas creen que comer animales es natural y parte de la evolución humana. En el pasado, era una estrategia clave de supervivencia, pero hoy podemos entrar en una tienda y comprar casi cualquier cosa que queramos. La verdadera vida natural significa animales nacidos en libertad, capaces de experimentar la vida, no modificados genéticamente ni confinados en jaulas diminutas donde se crían únicamente para el sacrificio.",
    hu: "Sokan úgy vélik, hogy az állatok fogyasztása természetes és az emberi evolúció része. Valaha ez kulcsfontosságú túlélési stratégia volt, de ma már bármilyen ételt könnyen beszerezhetünk a boltokból. Az igazi természetes élet azt jelenti, hogy az állatok szabadon születnek, képesek megtapasztalni az életet, nem genetikai módosítással vagy apró ketrecekbe zárva, ahol kizárólag levágásra nevelik őket."
  },
  quiz: {  
    question: {
      en: "Why is eating animals no longer considered necessary for survival today?",
      es: "¿Por qué hoy ya no se considera necesario comer animales para sobrevivir?",
      hu: "Miért nem szükséges ma már állatokat enni a túléléshez?"
    },  
    options: {
      en: [
        "Because humans evolved to eat only plants",
        "Because we can obtain food easily without killing animals",
        "Because animals in the wild no longer exist"
      ],
      es: [
        "Porque los humanos evolucionaron para comer solo plantas",
        "Porque podemos obtener comida fácilmente sin matar animales",
        "Porque los animales salvajes ya no existen"
      ],
      hu: [
        "Mert az emberek csak növényeket esznek az evolúció során",
        "Mert ételt könnyen beszerezhetünk anélkül, hogy állatokat ölnénk",
        "Mert a vadon élő állatok már nem léteznek"
      ]
    },
    answer: 1
  }
},
43: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "Crop deaths and the bigger picture",
    es: "Muertes de cultivos y la visión completa",
    hu: "Növénytermesztés és az összkép"
  },
  lesson: {
    en: "Some people argue that eating plants also causes animal deaths during farming, so veganism is no better. While it’s true that all food production has some impact, the scale matters. The majority of crop deaths are not caused by eating plants directly, but by growing vast amounts of feed for farmed animals. Around 77% of global agricultural land is used to grow animal feed, yet it provides only about 18% of the world’s calories. This means that producing meat causes significantly more crop-related deaths per calorie than consuming plants directly. Choosing plant-based foods reduces overall harm by minimizing unnecessary inefficiency.",
    es: "Algunas personas argumentan que comer plantas también causa muertes de animales durante la agricultura, por lo que el veganismo no sería mejor. Aunque es cierto que toda producción de alimentos tiene algún impacto, la escala es importante. La mayoría de las muertes asociadas a los cultivos no se deben al consumo directo de plantas, sino al cultivo masivo de alimento para animales de granja. Aproximadamente el 77% de la tierra agrícola mundial se utiliza para producir alimento animal, pero solo aporta alrededor del 18% de las calorías globales. Esto significa que producir carne provoca muchas más muertes relacionadas con cultivos por caloría que consumir plantas directamente. Elegir alimentos vegetales reduce el daño total al disminuir esta ineficiencia innecesaria.",
    hu: "Egyesek azzal érvelnek, hogy a növények fogyasztása is állatok pusztulásával jár a mezőgazdaság során, ezért a veganizmus nem jobb megoldás. Bár igaz, hogy minden élelmiszer-termelésnek van hatása, a mérték számít. A növénytermesztéshez köthető elhullások többsége nem a közvetlen növényfogyasztásból ered, hanem az állatok takarmányozására termesztett hatalmas mennyiségekből. A világ mezőgazdasági területeinek körülbelül 77%-át állati takarmány termesztésére használják, miközben ez csupán a globális kalóriák körülbelül 18%-át biztosítja. Ez azt jelenti, hogy a hús előállítása jóval több növénytermesztéshez kapcsolódó pusztulást okoz kalóriánként, mint a növények közvetlen fogyasztása. A növényi alapú választások összességében kevesebb kárt okoznak azáltal, hogy csökkentik ezt a felesleges pazarlást."
  },
  quiz: {  
    question: {
      en: "Why does eating animals indirectly cause more crop deaths?",
      es: "¿Por qué comer animales causa indirectamente más muertes relacionadas con cultivos?",
      hu: "Miért okoz az állatok fogyasztása közvetve több növénytermesztéshez köthető pusztulást?"
    },
    options: {
      en: [
        "Because animals eat large amounts of crops grown as feed",
        "Because plants are not suitable for human nutrition",
        "Because crops naturally die during harvest"
      ],
      es: [
        "Porque los animales consumen grandes cantidades de cultivos como alimento",
        "Porque las plantas no son adecuadas para la nutrición humana",
        "Porque los cultivos mueren naturalmente durante la cosecha"
      ],
      hu: [
        "Mert az állatok hatalmas mennyiségű növényi takarmányt fogyasztanak",
        "Mert a növények nem alkalmasak emberi táplálkozásra",
        "Mert a növények természetesen elpusztulnak betakarításkor"
      ]
    },
    answer: 0
  }
},
44: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "Natural suffering vs. human responsibility",
    es: "Sufrimiento natural y responsabilidad humana",
    hu: "Természetes szenvedés és emberi felelősség"
  },
  lesson: {
    en: "Some people argue that animal suffering is unavoidable because it also exists in nature. While it’s true that wild animals experience hardship, the scale and cause of suffering in industrial animal farming are fundamentally different. Human-driven systems intentionally breed, confine, and exploit billions of animals each year. Unlike natural processes, this suffering is planned, systematic, and largely avoidable. As moral agents with the ability to choose, humans have the responsibility to reduce unnecessary harm whenever possible. Choosing plant-based foods is one direct way to do so.",
    es: "Algunas personas sostienen que el sufrimiento animal es inevitable porque también ocurre en la naturaleza. Si bien es cierto que los animales salvajes enfrentan dificultades, la escala y la causa del sufrimiento en la ganadería industrial son fundamentalmente diferentes. Los sistemas creados por los humanos crían, confinan y explotan intencionalmente a miles de millones de animales cada año. A diferencia de los procesos naturales, este sufrimiento es planificado, sistemático y en gran medida evitable. Como agentes morales con capacidad de elección, los humanos tenemos la responsabilidad de reducir el daño innecesario siempre que sea posible. Elegir alimentos vegetales es una forma directa de hacerlo.",
    hu: "Egyesek szerint az állati szenvedés elkerülhetetlen, hiszen a természetben is jelen van. Bár igaz, hogy a vadon élő állatok is szenvednek, az ipari állattartásban tapasztalható szenvedés mértéke és oka alapvetően eltér. Az ember által létrehozott rendszerek tudatosan tenyésztenek, bezárnak és kizsákmányolnak évente több milliárd állatot. A természettel ellentétben ez a szenvedés tervezett, rendszerszintű és nagyrészt elkerülhető. Erkölcsi döntéshozóként felelősségünk csökkenteni a szükségtelen károkat, amikor csak lehetséges. A növényi alapú étrend választása ennek egyik közvetlen módja."
  },
  quiz: {  
    question: {
      en: "Why is human-caused animal suffering considered different from natural suffering?",
      es: "¿Por qué el sufrimiento animal causado por humanos se considera diferente al natural?",
      hu: "Miért különbözik az ember okozta állati szenvedés a természetestől?"
    },
    options: {
      en: [
        "Because animals in nature never suffer",
        "Because it is larger in scale and avoidable",
        "Because humans cannot understand animal pain"
      ],
      es: [
        "Porque los animales en la naturaleza nunca sufren",
        "Porque es mayor en escala y evitable",
        "Porque los humanos no pueden entender el dolor animal"
      ],
      hu: [
        "Mert a természetben élő állatok soha nem szenvednek",
        "Mert nagyobb léptékű és elkerülhető",
        "Mert az emberek nem értik az állatok fájdalmát"
      ]
    },
    answer: 1
  }
},
45: {  
  goal: "Protecting animals & animal welfare",  
  diet: "vegan",  
  title: {
    en: "What is truly extreme?",
    es: "¿Qué es realmente extremo?",
    hu: "Mi számít igazán szélsőségesnek?"
  },
  lesson: {
    en: "Some people describe veganism as extreme or inconvenient. Yet when we look at the bigger picture, continuing animal agriculture may be the more extreme choice. Each year, tens of billions of animals are bred, confined, and killed for food, while hundreds of millions of people still face hunger. This system requires enormous resources and causes widespread harm that could largely be avoided. Choosing veganism is not about perfection, but about reducing unnecessary suffering and inefficiency where we reasonably can.",
    es: "Algunas personas describen el veganismo como algo extremo o incómodo. Sin embargo, al observar el panorama completo, continuar con la ganadería animal puede ser la opción más extrema. Cada año, decenas de miles de millones de animales son criados, confinados y sacrificados para la alimentación, mientras cientos de millones de personas siguen pasando hambre. Este sistema consume enormes recursos y genera un daño generalizado que podría evitarse en gran medida. Elegir el veganismo no trata de ser perfecto, sino de reducir el sufrimiento y la ineficiencia innecesarios cuando está en nuestras manos hacerlo.",
    hu: "Egyesek a veganizmust szélsőségesnek vagy kényelmetlennek tartják. Ha azonban a teljes képet nézzük, az állattenyésztés fenntartása tűnhet az igazán szélsőséges választásnak. Évente több tízmilliárd állatot tenyésztenek, zárnak be és ölnek meg élelmiszerként, miközben emberek százmilliói továbbra is éheznek. Ez a rendszer hatalmas erőforrásokat emészt fel, és széles körű károkat okoz, amelyek nagy része elkerülhető lenne. A veganizmus választása nem a tökéletességről szól, hanem arról, hogy csökkentsük a szükségtelen szenvedést és pazarlást ott, ahol ésszerűen megtehetjük."
  },
  quiz: {  
    question: {
      en: "Why might continuing animal agriculture be considered extreme?",
      es: "¿Por qué continuar con la ganadería animal puede considerarse extremo?",
      hu: "Miért tekinthető szélsőségesnek az állattenyésztés fenntartása?"
    },
    options: {
      en: [
        "Because vegan food tastes better",
        "Because it causes large-scale unnecessary harm and inefficiency",
        "Because animals are more popular than plants"
      ],
      es: [
        "Porque la comida vegana sabe mejor",
        "Porque causa un daño e ineficiencia innecesarios a gran escala",
        "Porque los animales son más populares que las plantas"
      ],
      hu: [
        "Mert a vegán ételek finomabbak",
        "Mert nagyléptékű, szükségtelen károkat és pazarlást okoz",
        "Mert az állatok népszerűbbek, mint a növények"
      ]
    },
    answer: 1
  }
},
 46: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Equal where it matters",
    es: "Iguales en lo que importa",
    hu: "Egyenlők abban, ami számít"
  },
  lesson: {
    en: "Some people argue that animals aren’t equal to humans, yet it’s unclear what makes humans inherently superior. We accept vast differences in intelligence and abilities among people without denying their moral worth. Pigs, among the most intelligent animals, are still raised for food. In all ways that truly matter ethically, humans and animals are alike: they feel fear, experience emotions, and can suffer. That capacity is what gives beings moral value.",
    es: "Algunas personas sostienen que los animales no son iguales a los humanos, aunque no está claro qué hace a los humanos inherentemente superiores. Aceptamos grandes diferencias entre personas sin negar su valor moral. Los cerdos, animales muy inteligentes, siguen siendo criados para alimento. En lo que realmente importa éticamente, humanos y animales son iguales: sienten miedo, emociones y sufrimiento.",
    hu: "Sokan állítják, hogy az állatok nem egyenlők az emberekkel, mégis nehéz megmondani, miben áll az ember veleszületett felsőbbrendűsége. Az emberek közötti különbségeket elfogadjuk erkölcsi értékük megkérdőjelezése nélkül. A sertések — az egyik legintelligensebb állat — mégis élelmiszerként vannak kezelve. Ami etikailag számít, abban egyenlők vagyunk: félelmet, érzelmeket és szenvedést élünk át."
  },
  quiz: {
    question: {
      en: "Why are humans and animals considered equal in important ways?",
      es: "¿Por qué se considera que humanos y animales son iguales en aspectos importantes?",
      hu: "Miért tekinthetők az emberek és az állatok egyenlőnek fontos szempontokból?"
    },
    options: {
      en: [
        "Because animals are smarter than humans",
        "Because both experience fears, feelings, and suffering",
        "Because humans are naturally stronger"
      ],
      es: [
        "Porque los animales son más inteligentes que los humanos",
        "Porque ambos experimentan miedo, emociones y sufrimiento",
        "Porque los humanos son naturalmente más fuertes"
      ],
      hu: [
        "Mert az állatok intelligensebbek az embereknél",
        "Mert mindkettő képes félelmet, érzelmeket és szenvedést átélni",
        "Mert az emberek természetüknél fogva erősebbek"
      ]
    },
    answer: 1
  }
},

47: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Plants, pain, and land use",
    es: "Plantas, dolor y uso del suelo",
    hu: "Növények, fájdalom és földhasználat"
  },
  lesson: {
    en: "Some people claim that plants have feelings. Science shows that plants lack a brain or central nervous system, so they do not experience pain like animals do. Beyond that, there is a crucial efficiency issue: about 77% of global agricultural land is used for livestock, yet animal farming provides only a small fraction of the world’s calories and protein. Feeding plants directly to humans requires far less land and causes far less harm.",
    es: "Algunas personas dicen que las plantas sienten. La ciencia muestra que no tienen cerebro ni sistema nervioso central, por lo que no sienten dolor como los animales. Además, existe un enorme problema de eficiencia: el 77% de la tierra agrícola se usa para ganadería, pero aporta solo una pequeña parte de las calorías y proteínas mundiales.",
    hu: "Egyesek szerint a növények is éreznek. A tudomány szerint nincs agyuk vagy központi idegrendszerük, így nem éreznek fájdalmat úgy, mint az állatok. Emellett komoly hatékonysági probléma is fennáll: a mezőgazdasági területek 77%-át az állattenyésztés használja, mégis kevés kalóriát és fehérjét biztosít."
  },
  quiz: {
    question: {
      en: "What percentage of global agricultural land is used for livestock?",
      es: "¿Qué porcentaje de la tierra agrícola mundial se utiliza para la ganadería?",
      hu: "A globális mezőgazdasági területek hány százalékát használják állattenyésztésre?"
    },
    options: {
      en: ["36%", "50%", "77%", "90%"],
      es: ["36%", "50%", "77%", "90%"],
      hu: ["36%", "50%", "77%", "90%"]
    },
    answer: 2
  }
},

48: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Every choice counts",
    es: "Cada elección cuenta",
    hu: "Minden döntés számít"
  },
  lesson: {
    en: "Some people say that a little meat won’t make a difference, believing individual actions are too small to matter. While one person alone may seem insignificant, collective behavior shapes entire systems. When many individuals reduce or eliminate animal products, the combined effect on animal suffering, climate change, and resource use becomes enormous. Change starts with small, repeated choices.",
    es: "Algunas personas dicen que un poco de carne no importa. Aunque una sola persona parezca insignificante, el comportamiento colectivo crea grandes impactos. Cuando muchas personas reducen o eliminan productos animales, el efecto combinado es enorme.",
    hu: "Sokan gondolják, hogy egy kis hús nem számít. Egyéni szinten kicsinek tűnhet, de a kollektív döntések rendszereket alakítanak. Sok apró választás együtt óriási hatást gyakorol."
  },
  quiz: {
    question: {
      en: "Why does even small individual meat consumption matter?",
      es: "¿Por qué importa incluso un pequeño consumo individual de carne?",
      hu: "Miért számít a kis egyéni húsfogyasztás is?"
    },
    options: {
      en: [
        "Because collective choices add up and create large impact",
        "Because humans cannot live without meat",
        "Because plants instantly replace meat"
      ],
      es: [
        "Porque las elecciones colectivas se suman y crean un gran impacto",
        "Porque los humanos no pueden vivir sin carne",
        "Porque las plantas reemplazan la carne inmediatamente"
      ],
      hu: [
        "Mert az egyéni döntések összeadódnak és nagy hatást fejtenek ki",
        "Mert az emberek nem élhetnek hús nélkül",
        "Mert a növények azonnal helyettesítik a húst"
      ]
    },
    answer: 0
  }
},

49: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Where the mammals are",
    es: "Dónde están los mamíferos",
    hu: "Hol vannak a mamutok… és a többiek"
  },
  lesson: {
    en: "When we look at the total biomass of mammals on Earth, most are not wild. Around 60% are farmed animals such as cows and pigs, while humans make up about 36%. That leaves only a tiny fraction — roughly 4% — as truly wild mammals. This stark imbalance reveals how deeply human activity has reshaped life on Earth.",
    es: "Al observar la biomasa total de mamíferos, la mayoría no son salvajes. Aproximadamente el 60% son animales de granja y el 36% humanos. Solo alrededor del 4% son mamíferos realmente salvajes.",
    hu: "Ha megnézzük a Föld emlős biomasszáját, a többség nem vadon él. Körülbelül 60% haszonállat, 36% ember, és mindössze 4% vadon élő emlős."
  },
  quiz: {
    question: {
      en: "What percentage of mammals are truly wild?",
      es: "¿Qué porcentaje de mamíferos son realmente salvajes?",
      hu: "Az emlősök hány százaléka él valóban vadon?"
    },
    options: {
      en: ["4%", "36%", "60%"],
      es: ["4%", "36%", "60%"],
      hu: ["4%", "36%", "60%"]
    },
    answer: 0
  }
},

50: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Extinction in progress",
    es: "Extinción en curso",
    hu: "Folyamatban lévő kihalás"
  },
  lesson: {
    en: "About 25% of mammal species are currently threatened with extinction. Well-known animals like elephants, big cats, and primates often receive attention, while less charismatic species are overlooked despite playing vital roles in ecosystems. Protecting animals means caring not only for the ones we love, but also for those we rarely notice.",
    es: "Aproximadamente el 25% de las especies de mamíferos están amenazadas de extinción. Las especies más icónicas reciben atención, mientras que otras igualmente importantes suelen ser ignoradas.",
    hu: "Az emlősfajok körülbelül 25%-a jelenleg kihalással fenyegetett. A látványos fajok figyelmet kapnak, míg más, kevésbé feltűnő, de kulcsfontosságú fajok gyakran háttérbe szorulnak."
  },
  quiz: {
    question: {
      en: "What percentage of mammal species are currently threatened with extinction?",
      es: "¿Qué porcentaje de especies de mamíferos está amenazado?",
      hu: "Az emlősfajok hány százaléka van veszélyben?"
    },
    options: {
      en: ["10%", "25%", "50%"],
      es: ["10%", "25%", "50%"],
      hu: ["10%", "25%", "50%"]
    },
    answer: 1
  }
},
51: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Engineered to produce",
    es: "Diseñadas para producir",
    hu: "Termelésre alakítva"
  },
  lesson: {
    en: "Chickens today grow much faster and larger than their wild ancestors due to selective breeding and genetic modification. While wild chickens laid about 12 eggs per year, modern farmed chickens can lay over 240 eggs annually. This extreme production places heavy strain on their bodies, affecting their health, mobility, and overall quality of life.",
    es: "Las gallinas actuales crecen mucho más rápido y grandes que sus antepasados salvajes debido a la cría selectiva y la modificación genética. Mientras que las gallinas salvajes ponían unas 12 huevos al año, las gallinas de granja modernas pueden poner más de 240. Esta producción extrema afecta gravemente a su salud y calidad de vida.",
    hu: "A mai csirkék a szelektív tenyésztés és genetikai módosítás miatt sokkal gyorsabban nőnek és nagyobbak, mint vad őseik. Míg a vad csirkék évente körülbelül 12 tojást tojtak, a modern haszoncsirkék több mint 240-et. Ez komoly terhelést jelent a szervezetük számára."
  },
  quiz: {
    question: {
      en: "How many eggs did wild chickens lay annually?",
      es: "¿Cuántos huevos ponían las gallinas salvajes al año?",
      hu: "Évente hány tojást tojtak a vad csirkék?"
    },
    options: {
      en: ["100", "240", "12"],
      es: ["100", "240", "12"],
      hu: ["100", "240", "12"]
    },
    answer: 2
  }
},

52: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Antibiotics for animals, risks for humans",
    es: "Antibióticos para animales, riesgos para humanos",
    hu: "Antibiotikumok az állatoknak, kockázat az embereknek"
  },
  lesson: {
    en: "Around 70% of the world’s antibiotic supply is used in livestock farming, not for humans. These drugs are routinely given to animals to prevent disease and promote growth in crowded conditions. This practice accelerates antibiotic resistance, creating serious public health risks that affect everyone.",
    es: "Alrededor del 70% de los antibióticos del mundo se utilizan en la ganadería, no en humanos. Se administran a los animales para prevenir enfermedades y favorecer el crecimiento en condiciones de hacinamiento, contribuyendo a la resistencia a los antibióticos.",
    hu: "A világ antibiotikumainak körülbelül 70%-át az állattenyésztésben használják. Ezeket zsúfolt körülmények között betegségek megelőzésére és növekedés serkentésére adják, ami súlyos antibiotikum-rezisztenciát okoz."
  },
  quiz: {
    question: {
      en: "What percentage of antibiotics is used in livestock farming?",
      es: "¿Qué porcentaje de antibióticos se utiliza en la ganadería?",
      hu: "Az antibiotikumok hány százalékát használják az állattenyésztésben?"
    },
    options: {
      en: ["70%", "30%", "50%"],
      es: ["70%", "30%", "50%"],
      hu: ["70%", "30%", "50%"]
    },
    answer: 0
  }
},

53: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "A life without movement",
    es: "Una vida sin movimiento",
    hu: "Mozgás nélküli élet"
  },
  lesson: {
    en: "Many farmed animals are confined to extremely small cages where they cannot turn around, stretch, or move freely. This constant restriction causes physical pain, psychological stress, and frustration. It raises a profound ethical question: is forcing an animal to live in lifelong confinement worse than killing it?",
    es: "Muchos animales de granja viven en jaulas tan pequeñas que no pueden girarse ni moverse libremente. Esta restricción constante causa dolor físico y estrés psicológico, planteando una profunda cuestión ética.",
    hu: "Sok haszonállat rendkívül kis ketrecekben él, ahol nem tud megfordulni vagy szabadon mozogni. Ez folyamatos fizikai és mentális szenvedést okoz, és komoly etikai kérdéseket vet fel."
  },
  quiz: {
    question: {
      en: "What ethical issue arises from very small cages?",
      es: "¿Qué problema ético surge de las jaulas muy pequeñas?",
      hu: "Milyen etikai probléma merül fel a túl kicsi ketrecek miatt?"
    },
    options: {
      en: ["Animals become smarter", "Severe confinement limits movement", "Cages improve health"],
      es: ["Los animales se vuelven más inteligentes", "El confinamiento severo limita el movimiento", "Las jaulas mejoran la salud"],
      hu: ["Az állatok okosabbak lesznek", "A súlyos bezártság korlátozza a mozgást", "A ketrecek javítják az egészséget"]
    },
    answer: 1
  }
},

54: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "When ethics can’t compete",
    es: "Cuando la ética no puede competir",
    hu: "Amikor az etika nem versenyképes"
  },
  lesson: {
    en: "Farms that provide better living conditions for animals face much higher costs and often cannot compete with large industrial operations. This exposes a deeper moral question: should profit outweigh the lives and well-being of sentient beings, or should economic systems adapt to ethical responsibility?",
    es: "Las empresas que ofrecen mejores condiciones a los animales tienen costos más altos y no pueden competir con granjas industriales. Esto plantea una pregunta moral sobre si el beneficio debe estar por encima del bienestar de los seres sintientes.",
    hu: "Azok a gazdaságok, amelyek jobb körülményeket biztosítanak az állatoknak, magasabb költségekkel működnek, és nehezen versenyeznek az ipari farmokkal. Ez mély erkölcsi kérdést vet fel."
  },
  quiz: {
    question: {
      en: "Why can't companies with better animal conditions compete?",
      es: "¿Por qué las empresas con mejores condiciones para los animales no pueden competir?",
      hu: "Miért nem tudnak versenyezni a jobb állattartást biztosító cégek?"
    },
    options: {
      en: ["They don't care about animals", "They produce less milk", "Higher costs than industrial farms"],
      es: ["No les importan los animales", "Producen menos leche", "Costes más altos que las granjas industriales"],
      hu: ["Nem törődnek az állatokkal", "Kevesebb tejet termelnek", "Magasabb költségek, mint az ipari farmokon"]
    },
    answer: 2
  }
},

55: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Cutting away natural behavior",
    es: "Eliminar comportamientos naturales",
    hu: "Természetes viselkedés megcsonkítása"
  },
  lesson: {
    en: "Debeaking involves cutting or burning parts of a chicken’s beak to reduce injuries caused by stress and overcrowding. While it serves industrial efficiency, it causes pain, long-term discomfort, and limits natural behaviors such as pecking and exploring. This practice highlights how systems adapt animals to cruelty instead of fixing the conditions that cause it.",
    es: "El despique consiste en cortar o quemar parte del pico para evitar lesiones en condiciones de hacinamiento. Aunque mejora la eficiencia industrial, causa dolor y estrés, y limita comportamientos naturales.",
    hu: "A csőrkurtítás során a csirkék csőrének egy részét eltávolítják, hogy csökkentsék a sérüléseket zsúfolt körülmények között. Ez fájdalmat okoz és korlátozza a természetes viselkedést."
  },
  quiz: {
    question: {
      en: "Why is debeaking performed on farmed chickens?",
      es: "¿Por qué se practica el despique en las gallinas de granja?",
      hu: "Miért végzik a csőrkurtítást a haszoncsirkéken?"
    },
    options: {
      en: ["To prevent pecking injuries", "To make them grow faster", "For decoration"],
      es: ["Para prevenir heridas por picoteo", "Para que crezcan más rápido", "Por decoración"],
      hu: ["A csipkedésből eredő sérülések megelőzésére", "Gyorsabb növekedés érdekében", "Díszítés céljából"]
    },
    answer: 0
  }
},

56: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Hidden cruelty in dairy",
    es: "Crueldad oculta en los lácteos",
    hu: "Rejtett kegyetlenség a tejiparban"
  },
  lesson: {
    en: "The dairy industry often grinds up male chicks alive and repeatedly artificially inseminates cows, separating mothers from their calves. These practices cause significant suffering and raise questions about the ethics of animal exploitation.",
    es: "En la industria láctea, a menudo se trituran vivos a los pollitos macho y se inseminan artificialmente a las vacas repetidamente, separando a las madres de sus terneros. Estas prácticas causan un sufrimiento considerable y cuestionan la ética de la explotación animal.",
    hu: "A tejipar gyakran élve darálja a hímcsibéket, és ismételten mesterségesen termékenyítik a teheneket, elválasztva az anyákat borjaiktól. Ezek a gyakorlatok jelentős szenvedést okoznak és kérdéseket vetnek fel az állatok kizsákmányolásának etikájáról."
  },
  quiz: {
    question: {
      en: "What happens to male chicks in the dairy industry?",
      es: "¿Qué les sucede a los pollitos macho en la industria láctea?",
      hu: "Mi történik a hímcsibékkel a tejiparban?"
    },
    options: {
      en: ["They live freely on farms", "They are often ground alive", "They are given special care"],
      es: ["Viven libremente en las granjas", "A menudo se trituran vivos", "Reciben cuidados especiales"],
      hu: ["Szabadon élnek a farmokon", "Gyakran élve darálják őket", "Különleges gondozásban részesülnek"]
    },
    answer: 1
  }
},

57: {
  goal: "Protecting animals & animal welfare",
  diet: "vegan",
  title: {
    en: "Egg production and genetic manipulation",
    es: "Producción de huevos y manipulación genética",
    hu: "Tojástermelés és genetikai beavatkozás"
  },
  lesson: {
    en: "Chickens originally laid about 12 eggs per year in natural conditions. Through selective breeding and genetic modification, modern hens can lay over 240 eggs annually. This demonstrates how human intervention can drastically alter an animal’s biology for production purposes.",
    es: "Originalmente, las gallinas ponían alrededor de 12 huevos al año en condiciones naturales. A través de la selección y modificación genética, las gallinas modernas pueden poner más de 240 huevos anuales. Esto demuestra cómo la intervención humana puede alterar drásticamente la biología de un animal para fines de producción.",
    hu: "A csirkék eredetileg évente körülbelül 12 tojást raktak természetes körülmények között. Szelektív tenyésztés és genetikai módosítás révén a modern tyúkok évente több mint 240 tojást rakhatnak. Ez jól mutatja, hogyan változtathatja meg drasztikusan az ember az állatok biológiáját a termelés érdekében."
  },
  quiz: {
    question: {
      en: "How many eggs did chickens originally lay per year?",
      es: "¿Cuántos huevos ponían originalmente las gallinas al año?",
      hu: "Hány tojást raktak eredetileg a csirkék évente?"
    },
    options: {
      en: ["240", "100", "12"],
      es: ["240", "100", "12"],
      hu: ["240", "100", "12"]
    },
    answer: 2
  }
},

58: {
  goal: "Protecting animals & recognizing hidden suffering in clothing",
  diet: "vegan",
  title: {
    en: "Animal suffering in clothing",
    es: "Sufrimiento animal en la ropa",
    hu: "Állati szenvedés a ruházatban"
  },
  lesson: {
    en: "Many people strongly oppose wearing fur, because it is seen as cruel to kill animals for fashion. However, we often ignore that leather, wool, and down also come from animals who suffer. Leather typically comes from cows raised and killed in the meat and dairy industry, wool often comes from sheep who undergo painful shearing and breeding practices, and down is taken from ducks and geese who are plucked or slaughtered. The main difference is not the animal's experience, but our cultural habits and what we were taught to see as 'normal.'",
    es: "Muchas personas se oponen firmemente a usar pieles, porque se considera cruel matar animales por moda. Sin embargo, a menudo ignoramos que el cuero, la lana y el plumón también provienen de animales que sufren. El cuero proviene típicamente de vacas criadas y sacrificadas en la industria de carne y lácteos, la lana de ovejas que sufren esquila y prácticas de cría dolorosas, y el plumón de patos y gansos que son desplumados o sacrificados. La diferencia principal no es la experiencia del animal, sino nuestros hábitos culturales y lo que nos enseñaron a ver como 'normal.'",
    hu: "Sok ember erősen ellenzi a szőrme viselését, mert kegyetlennek tartják az állatok megölését divat miatt. Azonban gyakran figyelmen kívül hagyjuk, hogy a bőr, a gyapjú és a toll is állatoktól származik, akik szenvednek. A bőr általában hús- és tejipari tehenektől származik, a gyapjú olyan juhoktól, akik fájdalmas nyíráson és tenyésztési eljárásokon mennek keresztül, a toll pedig kacsáktól és libáktól, akiket kitépnek vagy leölnek. A fő különbség nem az állatok tapasztalata, hanem kulturális szokásaink és az, amit 'normálisnak' tanultunk látni."
  },
  quiz: {
    question: {
      en: "Which of these clothing materials can involve animal suffering?",
      es: "¿Cuál de estos materiales de ropa puede implicar sufrimiento animal?",
      hu: "Melyik ruházati anyag járhat állati szenvedéssel?"
    },
    options: {
      en: ["Leather", "Wool", "Down", "All of the above"],
      es: ["Cuero", "Lana", "Plumón", "Todos los anteriores"],
      hu: ["Bőr", "Gyapjú", "Toll", "Mindegyik"]
    },
    answer: 3
  }
},

59: {
  goal: "Understanding animal captivity in entertainment",
  diet: "vegan",
  title: {
    en: "Animals in circuses and zoos",
    es: "Animales en circos y zoológicos",
    hu: "Állatok a cirkuszokban és állatkertekben"
  },
  lesson: {
    en: "Circuses and many traditional zoos keep animals in environments that cannot meet their physical and emotional needs. Wild animals such as elephants, lions, or dolphins are used to living in large natural spaces, forming social groups, exploring, and making choices. In circuses, they are often trained using fear, punishment, and confinement, spending most of their time in cages or transport trucks. Even when the animals are fed and kept alive, their freedom, autonomy, and social lives are taken away. Choosing not to support these industries encourages the shift toward sanctuaries and conservation efforts that truly protect animals.",
    es: "Los circos y muchos zoológicos tradicionales mantienen animales en entornos que no pueden satisfacer sus necesidades físicas y emocionales. Animales salvajes como elefantes, leones o delfines están acostumbrados a vivir en grandes espacios naturales, formar grupos sociales, explorar y tomar decisiones. En los circos, a menudo se los entrena mediante miedo, castigo y confinamiento, pasando la mayor parte del tiempo en jaulas o camiones de transporte. Incluso cuando los animales son alimentados y mantenidos vivos, se les quita la libertad, autonomía y vida social. Elegir no apoyar estas industrias fomenta el cambio hacia santuarios y esfuerzos de conservación que realmente protegen a los animales.",
    hu: "A cirkuszok és sok hagyományos állatkert olyan környezetben tartja az állatokat, amely nem képes kielégíteni fizikai és érzelmi szükségleteiket. A vadon élő állatok, mint az elefántok, oroszlánok vagy delfinek nagy természetes tereken élnek, társas csoportokat alkotnak, felfedeznek és döntenek. A cirkuszokban gyakran félelem, büntetés és bezárás révén tanítják őket, és idejük nagy részét ketrecekben vagy szállító járművekben töltik. Még ha etetik és életben tartják is az állatokat, szabadságukat, autonómiájukat és társas életüket elveszik. Az iparágak támogatásának mellőzése elősegíti a menhelyek és a valódi állatvédelmi erőfeszítések felé való elmozdulást."
  },
  quiz: {
    question: {
      en: "Why is it better to avoid supporting circuses and certain zoos?",
      es: "¿Por qué es mejor no apoyar circos y ciertos zoológicos?",
      hu: "Miért jobb elkerülni a cirkuszok és bizonyos állatkertek támogatását?"
    },
    options: {
      en: [
        "Because animals in these industries are often confined and cannot express natural behaviors",
        "Because animals enjoy performing tricks",
        "Because zoos are always focused on conservation"
      ],
      es: [
        "Porque los animales en estas industrias a menudo están confinados y no pueden expresar comportamientos naturales",
        "Porque los animales disfrutan haciendo trucos",
        "Porque los zoológicos siempre se enfocan en la conservación"
      ],
      hu: [
        "Mert az állatokat ezekben az iparágakban gyakran bezárják, és nem tudják kifejezni természetes viselkedésüket",
        "Mert az állatok élvezik a mutatványokat",
        "Mert az állatkertek mindig a természetvédelemre összpontosítanak"
      ]
    },
    answer: 0
  }
},

60: {
  goal: "Choosing ethical products",
  diet: "vegan",
  title: {
    en: "Vegan vs Cruelty-Free",
    es: "Vegano vs libre de crueldad",
    hu: "Vegán vs állatkísérlet-mentes"
  },
  lesson: {
    en: "A product can be labeled “vegan” and still not be cruelty-free. “Vegan” means it does not contain animal ingredients, but it does not guarantee that the product or its ingredients were not tested on animals. Some brands remove animal products for marketing, while still supporting animal testing through suppliers or distribution in countries that require testing. To avoid this, look for products that are both labeled 'vegan' and 'cruelty-free.' Certifications like the Leaping Bunny, PETA Cruelty-Free, or Vegan Society logo help confirm that no animal ingredients or animal testing were involved.",
    es: "Un producto puede estar etiquetado como 'vegano' y aun así no ser libre de crueldad. 'Vegano' significa que no contiene ingredientes animales, pero no garantiza que el producto o sus ingredientes no hayan sido probados en animales. Algunas marcas eliminan productos animales por marketing, mientras aún apoyan las pruebas en animales a través de proveedores o distribución en países que lo requieren. Para evitar esto, busque productos etiquetados tanto como 'vegano' como 'libre de crueldad'. Certificaciones como Leaping Bunny, PETA Cruelty-Free o el logo de Vegan Society ayudan a confirmar que no se usaron ingredientes animales ni pruebas en animales.",
    hu: "Egy termék lehet 'vegán' címkével ellátva, mégsem biztos, hogy állatkísérlet-mentes. A 'vegán' azt jelenti, hogy nem tartalmaz állati összetevőket, de nem garantálja, hogy a terméket vagy összetevőit nem tesztelték állatokon. Néhány márka marketing célból eltávolítja az állati termékeket, miközben beszállítókon vagy olyan országokba történő forgalmazáson keresztül támogatja az állatkísérleteket, ahol ez kötelező. Ennek elkerülésére keressen olyan termékeket, amelyek mind 'vegán', mind 'állatkísérlet-mentes' címkével rendelkeznek. A Leaping Bunny, a PETA Cruelty-Free vagy a Vegan Society logók segítenek megerősíteni, hogy nem használtak állati összetevőket és állatkísérletet."
  },
  quiz: {
    question: {
      en: "What is the difference between 'vegan' and 'cruelty-free' on a product label?",
      es: "¿Cuál es la diferencia entre 'vegano' y 'libre de crueldad' en una etiqueta de producto?",
      hu: "Mi a különbség a 'vegán' és az 'állatkísérlet-mentes' címke között egy terméken?"
    },
    options: {
      en: [
        "'Vegan' means no animal ingredients, 'cruelty-free' means no animal testing",
        "They mean the same thing",
        "'Cruelty-free' means no animal ingredients"
      ],
      es: [
        "'Vegano' significa sin ingredientes animales, 'libre de crueldad' significa sin pruebas en animales",
        "Significan lo mismo",
        "'Libre de crueldad' significa sin ingredientes animales"
      ],
      hu: [
        "'Vegán' = nincs állati összetevő, 'állatkísérlet-mentes' = nincs állatkísérlet",
        "Ugyanazt jelentik",
        "'Állatkísérlet-mentes' = nincs állati összetevő"
      ]
    },
    answer: 0
  }
},

// continue






  // --------------------------
  // Environment - Omnivore (1001–1020)
  // --------------------------
  1001: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Pillars of fighting climate change",
    es: "Pilares para luchar contra el cambio climático",
    hu: "A klímaváltozás elleni küzdelem alapjai"
  },
  lesson: {
    en: "Fighting climate change requires global and individual action. The main pillars include switching to renewable energy, protecting forests, reducing waste, using sustainable transport, safeguarding biodiversity, and returning land to nature. Together, these steps cut greenhouse gas emissions and help restore balance to our planet.",
    es: "Luchar contra el cambio climático requiere acción global e individual. Los pilares principales incluyen el cambio a energías renovables, la protección de los bosques, la reducción de residuos, el uso de transporte sostenible, la salvaguardia de la biodiversidad y la devolución de tierras a la naturaleza. Juntos, estos pasos reducen las emisiones de gases de efecto invernadero y ayudan a restaurar el equilibrio de nuestro planeta.",
    hu: "A klímaváltozás elleni küzdelem globális és egyéni cselekvést igényel. A fő pillérek közé tartozik a megújuló energia használata, az erdők védelme, a hulladék csökkentése, fenntartható közlekedés alkalmazása, a biodiverzitás védelme és a föld visszaadása a természetnek. Ezek a lépések együtt csökkentik az üvegházhatású gázok kibocsátását, és segítenek helyreállítani a bolygónk egyensúlyát."
  },
  quiz: {  
    question: {
      en: "Which of the following is NOT one of the main pillars of fighting climate change?",
      es: "¿Cuál de los siguientes NO es uno de los pilares principales para luchar contra el cambio climático?",
      hu: "Melyik NEM a klímaváltozás elleni küzdelem fő pillérei közül?"
    },  
    options: {
      en: [
        "Switching to renewable energy",
        "Protecting forests",
        "Increasing fossil fuel use"
      ],
      es: [
        "Cambiar a energías renovables",
        "Proteger los bosques",
        "El aumento del uso de combustibles fósiles"
      ],
      hu: [
        "Áttérés megújuló energiára",
        "Az erdők védelme",
        "A fosszilis tüzelőanyagok használatának növelése"
      ]
    },
    answer: 2
  }
},
1002: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Energy and greenhouse-gas emissions",
    es: "Energía y emisiones de gases de efecto invernadero",
    hu: "Energia és üvegházhatású gázok kibocsátása"
  },
  lesson: {
    en: "The energy industry is the largest driver of global greenhouse-gas emissions. Around 70% of all emissions come from energy-related sources — including electricity and heat generation, transport, manufacturing, construction and fossil fuel extraction. Switching to renewable energy (such as solar, wind, hydro) and improving energy efficiency are therefore central pillars in the fight against climate change. Together they help cut CO₂ and methane emissions and unlock reductions across multiple sectors.",
    es: "La industria energética es la mayor responsable de las emisiones globales de gases de efecto invernadero. Alrededor del 70% de todas las emisiones provienen de fuentes relacionadas con la energía, incluyendo la generación de electricidad y calor, transporte, manufactura, construcción y extracción de combustibles fósiles. Por lo tanto, la transición a energías renovables (como solar, eólica, hidráulica) y la mejora de la eficiencia energética son pilares centrales en la lucha contra el cambio climático. Juntos, ayudan a reducir las emisiones de CO₂ y metano y permiten reducciones en múltiples sectores.",
    hu: "Az energiaipar a globális üvegházhatású gázok kibocsátásának legnagyobb forrása. A kibocsátások körülbelül 70%-a energiaforrásokból származik — beleértve az elektromos- és hőenergia-termelést, közlekedést, gyártást, építkezést és a fosszilis tüzelőanyagok kitermelését. Az áttérés a megújuló energiára (például nap-, szél- és vízenergia) és az energiahatékonyság javítása ezért központi pillérei a klímaváltozás elleni küzdelemnek. Ezek együtt segítenek csökkenteni a CO₂- és metánkibocsátást, és lehetővé teszik a csökkentést több szektorban."
  },
  quiz: {  
    question: {
      en: "Approximately what share of global greenhouse-gas emissions comes from energy-related sources?",
      es: "¿Qué proporción aproximada de las emisiones globales de gases de efecto invernadero proviene de fuentes relacionadas con la energía?",
      hu: "A globális üvegházhatású gázok kibocsátásának körülbelül hány százaléka származik energiaforrásokból?"
    },  
    options: {
      en: [
        "About 25%",
        "About 50%",
        "About 70%"
      ],
      es: [
        "Alrededor del 25%",
        "Alrededor del 50%",
        "Alrededor del 70%"
      ],
      hu: [
        "Körülbelül 25%",
        "Körülbelül 50%",
        "Körülbelül 70%"
      ]
    },
    answer: 2
  }
},
1003: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Deforestation and agriculture",
    es: "Deforestación y agricultura",
    hu: "Erdőirtás és mezőgazdaság"
  },
  lesson: {
    en: "Deforestation is one of the most urgent climate challenges. Globally, agricultural expansion drives nearly 90% of tropical forest loss. Within this, activities linked to livestock — especially pasture for cattle and crops grown to feed animals — are major contributors. Protecting forests and restoring land are vital parts of the fight against climate change.",
    es: "La deforestación es uno de los desafíos climáticos más urgentes. A nivel mundial, la expansión agrícola impulsa casi el 90% de la pérdida de bosques tropicales. Dentro de esto, las actividades relacionadas con la ganadería — especialmente los pastos para el ganado y los cultivos destinados a alimentar animales — son contribuyentes importantes. Proteger los bosques y restaurar la tierra son partes esenciales de la lucha contra el cambio climático.",
    hu: "Az erdőirtás az egyik legsürgetőbb klímavédelmi kihívás. Világszerte a mezőgazdasági terjeszkedés felelős a trópusi erdőirtás közel 90%-áért. Ezen belül az állattenyésztéshez kapcsolódó tevékenységek — különösen a legelők és az állati takarmány termesztése — jelentős szerepet játszanak. Az erdők védelme és a területek helyreállítása kulcsfontosságú a klímaváltozás elleni küzdelemben."
  },
  quiz: {  
    question: {
      en: "Approximately what percentage of tropical deforestation is driven by agriculture?",
      es: "¿Qué porcentaje aproximado de la deforestación tropical es impulsado por la agricultura?",
      hu: "A trópusi erdőirtás körülbelül hány százalékáért felelős a mezőgazdaság?"
    },  
    options: {
      en: [
        "About 50%",
        "About 70%",
        "About 90%"
      ],
      es: [
        "Alrededor del 50%",
        "Alrededor del 70%",
        "Alrededor del 90%"
      ],
      hu: [
        "Körülbelül 50%",
        "Körülbelül 70%",
        "Körülbelül 90%"
      ]
    },
    answer: 2
  }
},
1004: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Food waste and climate impact",
    es: "Desperdicio de alimentos e impacto climático",
    hu: "Élelmiszer-pazarlás és klímahatás"
  },
  lesson: {
    en: "Around one-third of all food produced globally is wasted each year. This wasted food is responsible for about 8–10% of global greenhouse-gas emissions, as it requires energy, water, and land to produce — and releases methane when it decomposes in landfills. Reducing food waste is one of the most effective ways to fight climate change.",
    es: "Alrededor de un tercio de todos los alimentos producidos en el mundo se desperdicia cada año. Este desperdicio es responsable de aproximadamente el 8–10% de las emisiones globales de gases de efecto invernadero, ya que requiere energía, agua y tierra para producirse — y libera metano al descomponerse en vertederos. Reducir el desperdicio de alimentos es una de las formas más efectivas de luchar contra el cambio climático.",
    hu: "Világszerte az élelmiszerek körülbelül egyharmada évente kárba vész. Ez az elpazarolt étel a globális üvegházhatású gázkibocsátás mintegy 8–10%-áért felelős, mivel az előállítása energiát, vizet és földterületet igényel — majd metánt bocsát ki a hulladéklerakókban történő lebomlás során. Az élelmiszer-pazarlás csökkentése az egyik leghatékonyabb módja a klímaváltozás elleni küzdelemnek."
  },
  quiz: {  
    question: {
      en: "Roughly what percentage of all food produced worldwide is wasted?",
      es: "¿Qué porcentaje aproximado de los alimentos producidos a nivel mundial se desperdicia?",
      hu: "A világszerte megtermelt élelmiszerek körülbelül hány százaléka vész kárba?"
    },  
    options: {
      en: [
        "About 10%",
        "About 33%",
        "About 50%"
      ],
      es: [
        "Alrededor del 10%",
        "Alrededor del 33%",
        "Alrededor del 50%"
      ],
      hu: [
        "Körülbelül 10%",
        "Körülbelül 33%",
        "Körülbelül 50%"
      ]
    },
    answer: 1
  }
},
1005: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "omnivore",  
  title: {
    en: "Transportation and emissions",
    es: "Transporte y emisiones",
    hu: "Közlekedés és kibocsátások"
  },
  lesson: {
    en: "Transportation accounts for about one-quarter of global greenhouse-gas emissions, mostly from cars, trucks, and planes that burn fossil fuels. Choosing sustainable transport — such as walking, cycling, public transport, or electric vehicles — can significantly reduce emissions and improve air quality.",
    es: "El transporte representa aproximadamente una cuarta parte de las emisiones globales de gases de efecto invernadero, principalmente de automóviles, camiones y aviones que queman combustibles fósiles. Elegir transporte sostenible — como caminar, ir en bicicleta, usar transporte público o vehículos eléctricos — puede reducir significativamente las emisiones y mejorar la calidad del aire.",
    hu: "A közlekedés a globális üvegházhatású gázkibocsátás körülbelül egynegyedéért felelős, főként a fosszilis tüzelőanyagokat használó autók, teherautók és repülők miatt. A fenntartható közlekedési formák — például gyaloglás, kerékpározás, tömegközlekedés vagy elektromos járművek — jelentősen csökkenthetik a kibocsátásokat és javíthatják a levegő minőségét."
  },
  quiz: {  
    question: {
      en: "Approximately what share of global greenhouse-gas emissions comes from transportation?",
      es: "¿Qué proporción aproximada de las emisiones globales de gases de efecto invernadero proviene del transporte?",
      hu: "A globális üvegházhatású gázkibocsátás körülbelül mekkora része származik a közlekedésből?"
    },  
    options: {
      en: [
        "About 10%",
        "About 25%",
        "About 50%"
      ],
      es: [
        "Alrededor del 10%",
        "Alrededor del 25%",
        "Alrededor del 50%"
      ],
      hu: [
        "Körülbelül 10%",
        "Körülbelül 25%",
        "Körülbelül 50%"
      ]
    },
    answer: 1
  }
},


1006: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Biodiversity and climate health",
    es: "Biodiversidad y salud climática",
    hu: "Biodiverzitás és éghajlati egészség"
  },
  lesson: {
    en: "Biodiversity means the variety of all living organisms on Earth — from tiny insects to large mammals and diverse ecosystems. It keeps our planet healthy by regulating the climate, purifying air and water, pollinating crops, and maintaining soil fertility. Human activities like deforestation, pollution, and overfishing threaten this balance.",
    es: "La biodiversidad significa la variedad de todos los organismos vivos en la Tierra, desde pequeños insectos hasta grandes mamíferos y ecosistemas diversos. Mantiene nuestro planeta saludable regulando el clima, purificando el aire y el agua, polinizando cultivos y manteniendo la fertilidad del suelo. Las actividades humanas como la deforestación, la contaminación y la sobrepesca amenazan este equilibrio.",
    hu: "A biodiverzitás a Föld összes élőlényének változatosságát jelenti — a kicsi rovaroktól a nagy emlősökig és különböző ökoszisztémákig. Egészségesen tartja bolygónkat azáltal, hogy szabályozza az éghajlatot, tisztítja a levegőt és a vizet, beporozza a terményeket és fenntartja a talaj termékenységét. Az emberi tevékenységek, mint az erdőirtás, a szennyezés és a túlhalászat veszélyeztetik ezt az egyensúlyt."
  },
  quiz: {
    question: {
      en: "Why is biodiversity important in the fight against climate change?",
      es: "¿Por qué es importante la biodiversidad en la lucha contra el cambio climático?",
      hu: "Miért fontos a biodiverzitás az éghajlatváltozás elleni küzdelemben?"
    },
    options: {
      en: [
        "It helps ecosystems stay healthy and absorb carbon",
        "It increases pollution levels",
        "It reduces soil fertility"
      ],
      es: [
        "Ayuda a que los ecosistemas se mantengan saludables y absorban carbono",
        "Aumenta los niveles de contaminación",
        "Reduce la fertilidad del suelo"
      ],
      hu: [
        "Segít az ökoszisztémáknak egészségesek maradni és elnyelni a szén-dioxidot",
        "Növeli a szennyezés szintjét",
        "Csökkenti a talaj termékenységét"
      ]
    },
    answer: 0
  }
},

1007: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Rewilding land",
    es: "Devolver la tierra a la naturaleza",
    hu: "A terület visszaadása a természetnek"
  },
  lesson: {
    en: "Returning land to nature, or rewilding, helps ecosystems recover, stores carbon, and protects biodiversity. Since animal agriculture is the largest global land user, reducing its footprint is one of the most effective ways to free land for nature. Efficient strategies include: restoring forests, grasslands, and wetlands, planting native trees, creating wildlife corridors, and adopting sustainable farming practices.",
    es: "Devolver la tierra a la naturaleza, o rewilding, ayuda a que los ecosistemas se recuperen, almacena carbono y protege la biodiversidad. Dado que la agricultura animal es la mayor usuaria de tierras a nivel mundial, reducir su huella es una de las formas más efectivas de liberar tierra para la naturaleza. Estrategias eficaces incluyen: restaurar bosques, pastizales y humedales, plantar árboles nativos, crear corredores para la vida silvestre y adoptar prácticas agrícolas sostenibles.",
    hu: "A föld visszaadása a természetnek, vagyis a rewilding, segít az ökoszisztémák helyreállításában, szén-dioxidot tárol és védi a biodiverzitást. Mivel az állattenyésztés a legnagyobb földhasználó a világon, annak csökkentése az egyik leghatékonyabb módja annak, hogy terület szabaduljon fel a természet számára. Hatékony stratégiák: erdők, gyepek és vizes élőhelyek helyreállítása, őshonos fák ültetése, vadvilági folyosók létrehozása és fenntartható mezőgazdasági gyakorlatok alkalmazása."
  },
  quiz: {
    question: {
      en: "Which human activity uses the most land globally and affects rewilding efforts?",
      es: "¿Qué actividad humana utiliza más tierra a nivel mundial y afecta los esfuerzos de rewilding?",
      hu: "Melyik emberi tevékenység használja a legtöbb földet a világon és befolyásolja a rewilding erőfeszítéseket?"
    },
    options: {
      en: ["Animal agriculture", "Urban development", "Renewable energy installations"],
      es: ["Agricultura animal", "Desarrollo urbano", "Instalaciones de energía renovable"],
      hu: ["Állattenyésztés", "Városfejlesztés", "Megújuló energia létesítmények"]
    },
    answer: 0
  }
},

1008: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Renewable energy and EVs",
    es: "Energía renovable y vehículos eléctricos",
    hu: "Megújuló energia és elektromos járművek"
  },
  lesson: {
    en: "Switching to renewable energy is a powerful way to reduce your carbon footprint. Electric vehicles (EVs) are a prime example. In Europe, EVs produce up to 73% fewer greenhouse gas emissions over their lifetime compared to gasoline cars, even when accounting for battery production. This reduction is achieved through higher energy efficiency and the decarbonization of the electricity grid. The climate benefits are even greater when EVs are charged using renewable energy sources like wind or solar power.",
    es: "Cambiar a energía renovable es una forma poderosa de reducir tu huella de carbono. Los vehículos eléctricos (VE) son un ejemplo destacado. En Europa, los VE producen hasta un 73% menos de emisiones de gases de efecto invernadero durante su vida útil en comparación con los coches de gasolina, incluso considerando la producción de baterías. Esta reducción se logra mediante una mayor eficiencia energética y la descarbonización de la red eléctrica. Los beneficios climáticos son aún mayores cuando los VE se cargan con fuentes de energía renovable como el viento o la energía solar.",
    hu: "A megújuló energia használata hatékony módja a szénlábnyom csökkentésének. Az elektromos járművek (EV-k) jó példa erre. Európában az EV-k élettartamuk alatt akár 73%-kal kevesebb üvegházhatású gázt bocsátanak ki, mint a benzinautók, még az akkumulátorgyártás figyelembevételével is. Ezt a csökkenést a magasabb energiahatékonyság és az elektromos hálózat dekarbonizációja révén érik el. Az éghajlati előnyök még nagyobbak, ha az EV-ket megújuló energiaforrásokból, például szél- vagy napenergiával töltik."
  },
  quiz: {
    question: {
      en: "By what percentage can electric vehicles reduce lifetime greenhouse gas emissions compared to gasoline cars in Europe?",
      es: "¿En qué porcentaje pueden los vehículos eléctricos reducir las emisiones de gases de efecto invernadero durante su vida útil en comparación con los coches de gasolina en Europa?",
      hu: "Milyen százalékkal csökkenthetik az elektromos járművek az élettartamuk alatt az üvegházhatású gázok kibocsátását az európai benzinautókhoz képest?"
    },
    options: {
      en: ["Up to 50%", "Up to 73%", "Up to 90%"],
      es: ["Hasta un 50%", "Hasta un 73%", "Hasta un 90%"],
      hu: ["Akár 50%", "Akár 73%", "Akár 90%"]
    },
    answer: 1
  }
},

1009: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Deforestation and beef production",
    es: "Deforestación y producción de carne de res",
    hu: "Erdőirtás és marhahús-termelés"
  },
  lesson: {
    en: "Forests are being lost at an alarming rate — in 2024 alone, the world lost 8.1 million hectares of forest, equivalent to 18 soccer fields every minute. The primary driver of this deforestation is agriculture, particularly beef production, which is responsible for about 41% of tropical deforestation. This includes land cleared for cattle grazing and feed crops like soy. Protecting forests and reducing the demand for land-intensive animal products are crucial steps in combating climate change.",
    es: "Se están perdiendo bosques a un ritmo alarmante: solo en 2024, el mundo perdió 8,1 millones de hectáreas de bosque, equivalentes a 18 campos de fútbol cada minuto. El principal impulsor de esta deforestación es la agricultura, especialmente la producción de carne de res, responsable de aproximadamente el 41% de la deforestación tropical. Esto incluye tierras despejadas para pastoreo de ganado y cultivos de alimento como la soja. Proteger los bosques y reducir la demanda de productos animales que requieren mucha tierra son pasos cruciales para combatir el cambio climático.",
    hu: "Az erdők vesztesége riasztó ütemű — csak 2024-ben a világ 8,1 millió hektár erdőt veszített el, ami percenként 18 futballpályának felel meg. Az erdőirtás fő oka a mezőgazdaság, különösen a marhahús-termelés, amely a trópusi erdőirtás körülbelül 41%-áért felelős. Ez magában foglalja az állattartás és takarmánytermesztés (pl. szója) számára megtisztított területeket. Az erdők védelme és a földigényes állati termékek iránti kereslet csökkentése kulcsfontosságú lépések az éghajlatváltozás elleni küzdelemben."
  },
  quiz: {
    question: {
      en: "What percentage of tropical deforestation is linked to beef production?",
      es: "¿Qué porcentaje de la deforestación tropical está vinculado a la producción de carne de res?",
      hu: "A trópusi erdőirtás hány százaléka kapcsolódik a marhahús-termeléshez?"
    },
    options: {
      en: ["About 20%", "About 41%", "About 60%"],
      es: ["Alrededor del 20%", "Alrededor del 41%", "Alrededor del 60%"],
      hu: ["Kb. 20%", "Kb. 41%", "Kb. 60%"]
    },
    answer: 1
  }
},

1010: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Food waste and climate impact",
    es: "Desperdicio de alimentos e impacto climático",
    hu: "Élelmiszer-pazarlás és éghajlati hatás"
  },
  lesson: {
    en: "Around one-third of all food produced globally is wasted each year. This means that 33% of agricultural land, water, and energy is used for food that is never eaten, and the greenhouse gases emitted in producing it — including CO₂ and methane — are effectively for nothing. Reducing food waste by planning meals, storing food properly, using leftovers, and composting organic waste can significantly cut emissions, save resources, and help fight climate change.",
    es: "Alrededor de un tercio de todos los alimentos producidos en el mundo se desperdicia cada año. Esto significa que el 33% de la tierra agrícola, el agua y la energía se utilizan para alimentos que nunca se comen, y los gases de efecto invernadero emitidos en su producción, incluidos CO₂ y metano, son efectivamente en vano. Reducir el desperdicio de alimentos mediante la planificación de comidas, el almacenamiento adecuado, el uso de sobras y el compostaje de residuos orgánicos puede reducir significativamente las emisiones, ahorrar recursos y ayudar a combatir el cambio climático.",
    hu: "A világon előállított élelmiszer körülbelül egyharmada vész kárba évente. Ez azt jelenti, hogy a mezőgazdasági föld, víz és energia 33%-át olyan élelmiszer előállítására használják, amit sosem esznek meg, és a termelés során kibocsátott üvegházhatású gázok — beleértve a CO₂-t és a metánt — gyakorlatilag hiábavalók. Az élelmiszer-pazarlás csökkentése étkezés-tervezéssel, megfelelő tárolással, maradékok felhasználásával és szerves hulladék komposztálásával jelentősen csökkentheti a kibocsátást, megtakaríthatja az erőforrásokat és segíthet az éghajlatváltozás elleni küzdelemben."
  },
  quiz: {
    question: {
      en: "Approximately what portion of global food production is wasted each year?",
      es: "¿Qué porción de la producción mundial de alimentos se desperdicia aproximadamente cada año?",
      hu: "Körülbelül a globális élelmiszertermelés mely része vész kárba évente?"
    },
    options: {
      en: ["About 10%", "About 33%", "About 50%"],
      es: ["Alrededor del 10%", "Alrededor del 33%", "Alrededor del 50%"],
      hu: ["Kb. 10%", "Kb. 33%", "Kb. 50%"]
    },
    answer: 1
  }
}, 

1011: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Daily habits and carbon footprint",
    es: "Hábitos diarios y huella de carbono",
    hu: "Napi szokások és szénlábnyom"
  },
  lesson: {
    en: "Our daily habits can have a significant impact on the environment. For example, reducing food waste by half can lower your carbon footprint by around 16%, while choosing a mostly plant-based diet can reduce it by up to 50%. Supporting sustainable products, conserving water, and protecting natural habitats further help reduce the land and resources we need. Small, consistent changes in our lifestyle collectively make a huge difference for biodiversity and climate.",
    es: "Nuestros hábitos diarios pueden tener un impacto significativo en el medio ambiente. Por ejemplo, reducir a la mitad el desperdicio de alimentos puede disminuir tu huella de carbono en alrededor del 16%, mientras que optar por una dieta mayormente basada en plantas puede reducirla hasta un 50%. Apoyar productos sostenibles, conservar agua y proteger hábitats naturales ayuda aún más a reducir la tierra y los recursos que necesitamos. Cambios pequeños y constantes en nuestro estilo de vida hacen colectivamente una gran diferencia para la biodiversidad y el clima.",
    hu: "Napi szokásaink jelentős hatással lehetnek a környezetre. Például az élelmiszer-pazarlás felére csökkentése kb. 16%-kal csökkentheti a szénlábnyomot, míg a főleg növényi alapú étrend akár 50%-kal is mérsékelheti azt. A fenntartható termékek támogatása, a víz megőrzése és a természetes élőhelyek védelme tovább csökkenti a szükséges föld- és erőforrásigényt. Kis, következetes változtatások az életmódunkban összességében nagy hatást gyakorolnak a biodiverzitásra és az éghajlatra."
  },
  quiz: {
    question: {
      en: "Approximately how much can reducing food waste by half decrease your carbon footprint?",
      es: "¿Aproximadamente cuánto puede disminuir tu huella de carbono reducir a la mitad el desperdicio de alimentos?",
      hu: "Körülbelül mennyivel csökkentheti szénlábnyomunkat az élelmiszer-pazarlás felére csökkentése?"
    },
    options: {
      en: ["About 10%", "About 16%", "About 25%"],
      es: ["Alrededor del 10%", "Alrededor del 16%", "Alrededor del 25%"],
      hu: ["Kb. 10%", "Kb. 16%", "Kb. 25%"]
    },
    answer: 1
  }
},

1012: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Plant-based diets and land use",
    es: "Dietas basadas en plantas y uso de la tierra",
    hu: "Növényi alapú étrendek és földhasználat"
  },
  lesson: {
    en: "Adopting a mostly plant-based diet globally could dramatically free up land for nature. Currently, livestock farming occupies about 77% of agricultural land but provides less than 20% of calories. Shifting to plant-based foods could reduce agricultural land use by up to 75%, roughly 3.1 billion hectares, equivalent to the size of North America and Brazil combined. This land could be restored to forests, grasslands, and wetlands, supporting biodiversity, capturing carbon, and creating thriving ecosystems.",
    es: "Adoptar una dieta mayormente basada en plantas a nivel global podría liberar drásticamente tierra para la naturaleza. Actualmente, la ganadería ocupa aproximadamente el 77% de la tierra agrícola pero proporciona menos del 20% de las calorías. Cambiar a alimentos basados en plantas podría reducir el uso agrícola de tierras hasta en un 75%, aproximadamente 3.100 millones de hectáreas, equivalente al tamaño combinado de Norteamérica y Brasil. Esta tierra podría restaurarse a bosques, pastizales y humedales, apoyando la biodiversidad, capturando carbono y creando ecosistemas prósperos.",
    hu: "A világon főleg növényi alapú étrendre való átállás drámaian felszabadíthatna területeket a természet számára. Jelenleg a szarvasmarha- és állattenyésztés a mezőgazdasági földek kb. 77%-át foglalja el, de kevesebb, mint 20%-át biztosítja a kalóriáknak. A növényi alapú élelmiszerekre való áttérés akár 75%-kal csökkentheti a mezőgazdasági földhasználatot, kb. 3,1 milliárd hektárt, ami Észak-Amerika és Brazília együttes területének felel meg. Ezt a földet vissza lehetne állítani erdőkké, gyeppé és vizes élőhelyekké, támogatva a biodiverzitást, elnyelve a szenet és létrehozva élő, virágzó ökoszisztémákat."
  },
  quiz: {
    question: {
      en: "Approximately how much agricultural land could be freed if the world shifted to a mostly plant-based diet?",
      es: "¿Cuánta tierra agrícola podría liberarse aproximadamente si el mundo cambiara a una dieta mayormente basada en plantas?",
      hu: "Körülbelül mennyi mezőgazdasági föld szabadulna fel, ha a világ főleg növényi alapú étrendre állna át?"
    },
    options: {
      en: ["About 1 billion hectares", "About 3 billion hectares", "About 5 billion hectares"],
      es: ["Alrededor de 1.000 millones de hectáreas", "Alrededor de 3.000 millones de hectáreas", "Alrededor de 5.000 millones de hectáreas"],
      hu: ["Kb. 1 milliárd hektár", "Kb. 3 milliárd hektár", "Kb. 5 milliárd hektár"]
    },
    answer: 1
  }
},

1013: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Water footprint of food choices",
    es: "Huella hídrica de las elecciones alimentarias",
    hu: "Élelmiszerválasztások vízlábnyoma"
  },
  lesson: {
    en: "The water footprint of our food choices is a critical but often overlooked environmental impact. Animal products, especially beef and dairy, require significantly more water to produce than plant-based foods. For instance, producing 1 kilogram of beef can consume up to 15,000 liters of water, whereas the same amount of tofu requires only about 302 liters.",
    es: "La huella hídrica de nuestras elecciones alimentarias es un impacto ambiental crítico pero a menudo pasado por alto. Los productos animales, especialmente la carne de res y los lácteos, requieren significativamente más agua para producirse que los alimentos de origen vegetal. Por ejemplo, producir 1 kilogramo de carne de res puede consumir hasta 15.000 litros de agua, mientras que la misma cantidad de tofu requiere solo unos 302 litros.",
    hu: "Az élelmiszerválasztásunk vízlábnyoma kritikus, de gyakran figyelmen kívül hagyott környezeti hatás. Az állati termékek, különösen a marhahús és tejtermékek, jelentősen több vizet igényelnek az előállításhoz, mint a növényi alapú ételek. Például 1 kilogramm marhahús előállítása akár 15 000 liter vizet is igényel, míg ugyanennyi tofu körülbelül 302 litert."
  },
  quiz: {
    question: {
      en: "How does the water needed to produce 1 kg of beef compare to 1 kg of tofu?",
      es: "¿Cómo se compara el agua necesaria para producir 1 kg de carne de res con 1 kg de tofu?",
      hu: "Hogyan viszonyul 1 kg marhahús előállításához szükséges vízmennyiség 1 kg tofuhoz képest?"
    },
    options: {
      en: [
        "Beef: 15,000 liters, Tofu: 302 liters",
        "Beef: 5,000 liters, Tofu: 3,000 liters",
        "Beef: 1,500 liters, Tofu: 500 liters"
      ],
      es: [
        "Carne de res: 15.000 litros, Tofu: 302 litros",
        "Carne de res: 5.000 litros, Tofu: 3.000 litros",
        "Carne de res: 1.500 litros, Tofu: 500 litros"
      ],
      hu: [
        "Marhahús: 15 000 liter, Tofu: 302 liter",
        "Marhahús: 5 000 liter, Tofu: 3 000 liter",
        "Marhahús: 1 500 liter, Tofu: 500 liter"
      ]
    },
    answer: 0
  }
},

1014: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Soy production and livestock",
    es: "Producción de soja y ganadería",
    hu: "Szójatermelés és állattenyésztés"
  },
  lesson: {
    en: "Soy production has a big environmental impact, but most of it is not used directly for human consumption. Around 77% of global soy is grown to feed livestock like cattle, pigs, and chickens. This demand drives deforestation, especially in the Amazon and Cerrado regions, releases large amounts of CO₂, and threatens biodiversity.",
    es: "La producción de soja tiene un gran impacto ambiental, pero la mayor parte no se utiliza directamente para el consumo humano. Alrededor del 77% de la soja mundial se cultiva para alimentar al ganado como vacas, cerdos y pollos. Esta demanda impulsa la deforestación, especialmente en las regiones del Amazonas y Cerrado, libera grandes cantidades de CO₂ y amenaza la biodiversidad.",
    hu: "A szója termesztése nagy környezeti hatással jár, de a legtöbbje nem kerül közvetlenül emberi fogyasztásra. A világ szójatermelésének kb. 77%-át az állatok, például szarvasmarhák, sertések és csirkék takarmányozására termesztik. Ez a kereslet erdőirtást okoz, különösen az Amazonas és Cerrado régióiban, nagy mennyiségű CO₂-t bocsát ki, és veszélyezteti a biodiverzitást."
  },
  quiz: {
    question: {
      en: "What percentage of global soy production is used to feed farm animals?",
      es: "¿Qué porcentaje de la producción mundial de soja se utiliza para alimentar a los animales de granja?",
      hu: "A világ szójatermelésének hány százalékát használják állati takarmánynak?"
    },
    options: {
      en: ["About 50%", "About 77%", "About 90%"],
      es: ["Alrededor del 50%", "Alrededor del 77%", "Alrededor del 90%"],
      hu: ["Kb. 50%", "Kb. 77%", "Kb. 90%"]
    },
    answer: 1
  }
},

1015: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Wild vs farmed animal populations",
    es: "Poblaciones de animales salvajes vs de granja",
    hu: "Vad vs tenyésztett állatpopulációk"
  },
  lesson: {
    en: "In natural ecosystems, a balance between herbivores and carnivores is crucial. Today, human activities have heavily disrupted this balance. The global population of wild herbivores is around 60 million, and wild carnivores number about 3 million. In contrast, the global livestock population exceeds 70 billion, with cattle alone over 1.5 billion. This huge imbalance affects habitats, biodiversity, and the natural functioning of ecosystems.",
    es: "En los ecosistemas naturales, el equilibrio entre herbívoros y carnívoros es crucial. Hoy, las actividades humanas han alterado gravemente este equilibrio. La población mundial de herbívoros salvajes es de aproximadamente 60 millones, y la de carnívoros salvajes alrededor de 3 millones. En contraste, la población mundial de ganado supera los 70.000 millones, solo el ganado vacuno más de 1.500 millones. Este enorme desequilibrio afecta hábitats, biodiversidad y el funcionamiento natural de los ecosistemas.",
    hu: "A természetes ökoszisztémákban létfontosságú a növényevők és húsevők közötti egyensúly. Ma az emberi tevékenységek ezt az egyensúlyt súlyosan felborították. A vadon élő növényevők globális populációja kb. 60 millió, a vadon élő húsevőké kb. 3 millió. Ezzel szemben a globális haszonállat-populáció meghaladja a 70 milliárdot, csak a szarvasmarha több mint 1,5 milliárd. Ez a hatalmas egyensúlyhiány befolyásolja az élőhelyeket, a biodiverzitást és az ökoszisztémák természetes működését."
  },
  quiz: {
    question: {
      en: "Approximately how many wild herbivores are there compared to livestock worldwide?",
      es: "¿Aproximadamente cuántos herbívoros salvajes hay en comparación con el ganado en el mundo?",
      hu: "Körülbelül hány vad növényevő él a világon a háziállatokhoz képest?"
    },
    options: {
      en: [
        "Wild herbivores: 60 million, Livestock: 70 billion",
        "Wild herbivores: 600 million, Livestock: 7 billion",
        "Wild herbivores: 6 million, Livestock: 700 million"
      ],
      es: [
        "Herbívoros salvajes: 60 millones, Ganado: 70.000 millones",
        "Herbívoros salvajes: 600 millones, Ganado: 7.000 millones",
        "Herbívoros salvajes: 6 millones, Ganado: 700 millones"
      ],
      hu: [
        "Vad növényevők: 60 millió, Haszonállat: 70 milliárd",
        "Vad növényevők: 600 millió, Haszonállat: 7 milliárd",
        "Vad növényevők: 6 millió, Haszonállat: 700 millió"
      ]
    },
    answer: 0
  }
},

1016: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Mammalian biomass imbalance",
    es: "Desequilibrio de la biomasa de mamíferos",
    hu: "Emlősbimassza egyensúlytalansága"
  },
  lesson: {
    en: "The biomass of large land mammals today is extremely unbalanced. Humans make up about 36% of the total mammalian biomass, livestock accounts for around 60%, and all wild mammals combined represent only about 4%. This shows how human activities, especially industrial agriculture, dominate the planet and leave very little room for wild species. Restoring balance requires reducing livestock demand, rewilding, and supporting sustainable land use.",
    es: "La biomasa de los grandes mamíferos terrestres hoy está extremadamente desequilibrada. Los humanos representan aproximadamente el 36% de la biomasa total de mamíferos, el ganado alrededor del 60%, y todos los mamíferos salvajes juntos solo representan cerca del 4%. Esto muestra cómo las actividades humanas, especialmente la agricultura industrial, dominan el planeta y dejan muy poco espacio para las especies salvajes. Restaurar el equilibrio requiere reducir la demanda de ganado, permitir la reforestación natural y apoyar el uso sostenible de la tierra.",
    hu: "A nagy szárazföldi emlősök biomasszája ma rendkívül kiegyensúlyozatlan. Az emberek az összes emlősbimassza kb. 36%-át teszik ki, a haszonállatok kb. 60%-ot, míg az összes vadon élő emlős csupán kb. 4%-ot. Ez jól mutatja, hogy az emberi tevékenységek, különösen az ipari mezőgazdaság, dominálják a bolygót, és nagyon kevés teret hagynak a vad fajoknak. Az egyensúly visszaállításához csökkenteni kell a haszonállat-igényt, elő kell segíteni a visszavadítást, és támogatni kell a fenntartható földhasználatot."
  },
  quiz: {
    question: {
      en: "What percentage of the total mammalian biomass is made up by humans and livestock combined?",
      es: "¿Qué porcentaje de la biomasa total de mamíferos representan los humanos y el ganado juntos?",
      hu: "Az összes emlősbimassza hány százalékát teszik ki együtt az emberek és a haszonállatok?"
    },
    options: {
      en: ["About 50%", "About 96%", "About 70%"],
      es: ["Alrededor del 50%", "Alrededor del 96%", "Alrededor del 70%"],
      hu: ["Kb. 50%", "Kb. 96%", "Kb. 70%"]
    },
    answer: 1
  }
},

1017: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Decline of biodiversity",
    es: "Declive de la biodiversidad",
    hu: "Biodiverzitás csökkenése"
  },
  lesson: {
    en: "Biodiversity has declined dramatically over the past 100 years. Populations of vertebrate species — mammals, birds, amphibians, reptiles, and fish — have dropped by an average of 70% since 1970, and many habitats have been lost or fragmented. Human activities such as deforestation, industrial agriculture, overfishing, and urban expansion are the main drivers. This decline weakens ecosystems, reduces nature's ability to regulate climate, and threatens food security and water quality. Protecting and restoring biodiversity is essential for a resilient planet.",
    es: "La biodiversidad ha disminuido dramáticamente en los últimos 100 años. Las poblaciones de especies de vertebrados — mamíferos, aves, anfibios, reptiles y peces — han caído en promedio un 70% desde 1970, y muchos hábitats se han perdido o fragmentado. Las actividades humanas como la deforestación, la agricultura industrial, la sobrepesca y la expansión urbana son los principales impulsores. Este declive debilita los ecosistemas, reduce la capacidad de la naturaleza para regular el clima y amenaza la seguridad alimentaria y la calidad del agua. Proteger y restaurar la biodiversidad es esencial para un planeta resiliente.",
    hu: "A biodiverzitás az elmúlt 100 évben drámaian csökkent. A gerinces fajok – emlősök, madarak, kétéltűek, hüllők és halak – populációi 1970 óta átlagosan 70%-kal estek vissza, és sok élőhely elveszett vagy feldarabolódott. Az emberi tevékenységek, mint az erdőirtás, az ipari mezőgazdaság, a túlhalászat és a városiasodás a fő mozgatórugók. Ez a csökkenés gyengíti az ökoszisztémákat, csökkenti a természet klímát szabályozó képességét, és veszélyezteti az élelmiszerbiztonságot és a vízminőséget. A biodiverzitás védelme és helyreállítása elengedhetetlen a reziliens bolygóhoz."
  },
  quiz: {
    question: {
      en: "By approximately how much have vertebrate populations declined since 1970?",
      es: "¿Aproximadamente cuánto han disminuido las poblaciones de vertebrados desde 1970?",
      hu: "Körülbelül mennyivel csökkent a gerinces populációk száma 1970 óta?"
    },
    options: {
      en: ["About 30%", "About 50%", "About 70%"],
      es: ["Alrededor del 30%", "Alrededor del 50%", "Alrededor del 70%"],
      hu: ["Kb. 30%", "Kb. 50%", "Kb. 70%"]
    },
    answer: 2
  }
},

1018: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Global temperature rise",
    es: "Aumento de la temperatura global",
    hu: "Globális hőmérséklet-emelkedés"
  },
  lesson: {
    en: "Since 1970, the Earth's average surface temperature has increased rapidly. By 2024, the global temperature was about 1.46°C higher than the pre-industrial baseline (1850–1900), making it the warmest year on record. If greenhouse gas emissions continue at the current rate, temperatures could rise by 4.5–5°C by 2100, causing severe climate impacts. There is also an 80% chance that at least one year between 2025 and 2029 will exceed 1.5°C above pre-industrial levels, a critical threshold set by the Paris Agreement. This highlights the urgent need for immediate action to reduce emissions and slow global warming.",
    es: "Desde 1970, la temperatura media de la superficie de la Tierra ha aumentado rápidamente. Para 2024, la temperatura global era aproximadamente 1,46°C superior al nivel preindustrial (1850–1900), convirtiéndose en el año más cálido registrado. Si las emisiones de gases de efecto invernadero continúan al ritmo actual, las temperaturas podrían aumentar entre 4,5–5°C para 2100, causando graves impactos climáticos. También existe un 80% de probabilidad de que al menos un año entre 2025 y 2029 supere los 1,5°C por encima de los niveles preindustriales, un umbral crítico establecido por el Acuerdo de París. Esto resalta la necesidad urgente de tomar medidas inmediatas para reducir las emisiones y frenar el calentamiento global.",
    hu: "1970 óta a Föld átlagos felszíni hőmérséklete gyorsan emelkedett. 2024-re a globális hőmérséklet körülbelül 1,46°C-kal volt magasabb az ipari forradalom előtti alapvonalnál (1850–1900), így ez volt a rekordmeleg év. Ha az üvegházhatású gázok kibocsátása a jelenlegi ütemben folytatódik, a hőmérséklet 2100-ra 4,5–5°C-kal emelkedhet, súlyos klímaváltozási hatásokat okozva. Van 80% esély arra, hogy 2025 és 2029 között legalább egy év meghaladja az ipari forradalom előtti szint +1,5°C-ját, ami a Párizsi Megállapodás által meghatározott kritikus küszöb. Ez kiemeli a sürgős szükségét annak, hogy azonnali intézkedéseket tegyünk a kibocsátás csökkentésére és a globális felmelegedés lassítására."
  },
  quiz: {
    question: {
      en: "By approximately how much has the Earth's average surface temperature increased since the pre-industrial era?",
      es: "¿Aproximadamente cuánto ha aumentado la temperatura media de la superficie terrestre desde la era preindustrial?",
      hu: "Körülbelül mennyivel emelkedett a Föld átlagos felszíni hőmérséklete az ipari forradalom óta?"
    },
    options: {
      en: ["About 0.5°C", "About 1.5°C", "About 3°C"],
      es: ["Alrededor de 0,5°C", "Alrededor de 1,5°C", "Alrededor de 3°C"],
      hu: ["Kb. 0,5°C", "Kb. 1,5°C", "Kb. 3°C"]
    },
    answer: 1
  }
},

1019: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Ghost fishing gear and marine pollution",
    es: "Equipo de pesca fantasma y contaminación marina",
    hu: "Elveszett halászeszközök és tengeri szennyezés"
  },
  lesson: {
    en: "Plastic fishing gear, known as 'ghost gear,' is a major contributor to marine plastic pollution. Every year, at least 640,000 tonnes of fishing gear enter the oceans, representing around 8–10% of all marine plastic pollution. Lost or abandoned gear continues to trap and kill marine life, harming 66% of marine mammal species, 50% of seabird species, and all seven species of sea turtles. Tackling ghost gear requires sustainable fishing practices, better gear management, and global cooperation to protect marine ecosystems.",
    es: "El equipo de pesca de plástico, conocido como 'ghost gear', es un importante contribuyente a la contaminación plástica marina. Cada año, al menos 640.000 toneladas de equipo de pesca llegan a los océanos, representando alrededor del 8–10% de toda la contaminación plástica marina. El equipo perdido o abandonado sigue atrapando y matando vida marina, dañando al 66% de las especies de mamíferos marinos, al 50% de las aves marinas y a las siete especies de tortugas marinas. Abordar el problema del ghost gear requiere prácticas de pesca sostenibles, mejor gestión del equipo y cooperación global para proteger los ecosistemas marinos.",
    hu: "A műanyag halászeszközök, az úgynevezett „ghost gear”, jelentős hozzájárulók a tengeri műanyagszennyezéshez. Évente legalább 640 000 tonna halászeszköz kerül az óceánokba, ami a teljes tengeri műanyagszennyezés kb. 8–10%-át jelenti. Az elveszett vagy elhagyott eszközök továbbra is csapdába ejtik és elpusztítják a tengeri élőlényeket, károsítva a tengeri emlősök 66%-át, a tengeri madarak 50%-át és mind a hét tengeri teknősfajt. A ghost gear problémájának kezelése fenntartható halászati gyakorlatokat, jobb eszközkezelést és globális együttműködést igényel a tengeri ökoszisztémák védelmében."
  },
  quiz: {
    question: {
      en: "Approximately what percentage of global marine plastic pollution comes from fishing gear?",
      es: "¿Qué porcentaje aproximado de la contaminación plástica marina global proviene del equipo de pesca?",
      hu: "A globális tengeri műanyagszennyezés hány százaléka származik halászeszközökből?"
    },
    options: {
      en: ["About 5%", "About 8–10%", "About 25%"],
      es: ["Alrededor del 5%", "Alrededor del 8–10%", "Alrededor del 25%"],
      hu: ["Kb. 5%", "Kb. 8–10%", "Kb. 25%"]
    },
    answer: 1
  }
},

1020: {
  goal: "Caring for the environment & fighting climate change",
  diet: "omnivore",
  title: {
    en: "Your plate as a tool for the planet",
    es: "Tu plato como herramienta para el planeta",
    hu: "A tányérod, mint eszköz a bolygó védelmében"
  },
  lesson: {
    en: "Our daily food choices have a huge impact on the environment. They influence deforestation, greenhouse gas emissions, water use, and ocean health. Choosing more plant-based meals, reducing food waste, and supporting sustainable products are some of the most effective ways to protect the planet. Simply put, the most powerful environmental tool you have is your plate.",
    es: "Nuestras elecciones alimentarias diarias tienen un gran impacto en el medio ambiente. Influyen en la deforestación, las emisiones de gases de efecto invernadero, el uso del agua y la salud de los océanos. Elegir comidas más basadas en plantas, reducir el desperdicio de alimentos y apoyar productos sostenibles son algunas de las formas más efectivas de proteger el planeta. En pocas palabras, la herramienta ambiental más poderosa que tienes es tu plato.",
    hu: "Napi étkezési választásaink hatalmas hatással vannak a környezetre. Befolyásolják az erdőirtást, az üvegházhatású gázkibocsátást, a vízfelhasználást és az óceánok egészségét. Több növényi alapú étel választása, az élelmiszer-pazarlás csökkentése és a fenntartható termékek támogatása a leghatékonyabb módok a bolygó védelmére. Egyszerűen fogalmazva, a legnagyobb környezeti eszközöd a tányérod."
  },
  quiz: {
    question: {
      en: "What is considered your most powerful tool to protect the environment?",
      es: "¿Cuál se considera tu herramienta más poderosa para proteger el medio ambiente?",
      hu: "Mi számít a legnagyobb hatékonyságú eszköznek a környezet védelmére?"
    },
    options: {
      en: ["Your plate", "Your phone", "Your car"],
      es: ["Tu plato", "Tu teléfono", "Tu coche"],
      hu: ["A tányérod", "A telefonod", "Az autód"]
    },
    answer: 0
  }
},

  // --------------------------
  // Environment - Vegetarian (1021–1040)
  // --------------------------

1021: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "The impact of global warming",
    es: "El impacto del calentamiento global",
    hu: "A globális felmelegedés hatása"
  },
  lesson: {
    en: "Global temperatures have already risen by about 1.2°C since pre-industrial times. This small increase has huge effects: glaciers in the Alps have lost over 60% of their ice since 1850, and extreme heat waves now occur five times more often than 50 years ago. If warming reaches 2°C, up to 99% of coral reefs could disappear — destroying vital ecosystems that support a quarter of all marine life.",
    es: "Las temperaturas globales ya han aumentado alrededor de 1,2°C desde la época preindustrial. Este pequeño aumento tiene enormes efectos: los glaciares de los Alpes han perdido más del 60% de su hielo desde 1850, y las olas de calor extremo ocurren ahora cinco veces más que hace 50 años. Si el calentamiento alcanza los 2°C, hasta el 99% de los arrecifes de coral podrían desaparecer, destruyendo ecosistemas vitales que sostienen una cuarta parte de toda la vida marina.",
    hu: "A globális hőmérséklet már körülbelül 1,2°C-kal emelkedett az ipari forradalom előtti időkhöz képest. Ez a kis növekedés hatalmas következményekkel jár: az Alpok gleccserei 1850 óta több mint 60%-át elveszítették a jégüknek, és az extrém hőhullámok most ötször gyakoribbak, mint 50 évvel ezelőtt. Ha a felmelegedés eléri a 2°C-ot, a korallzátonyok akár 99%-a eltűnhet — elpusztítva létfontosságú ökoszisztémákat, amelyek a tengeri élőlények negyedét támogatják."
  },
  quiz: {  
    question: {
      en: "What percentage of coral reefs could vanish if global warming reaches 2°C?",
      es: "¿Qué porcentaje de los arrecifes de coral podría desaparecer si el calentamiento global alcanza los 2°C?",
      hu: "A korallzátonyok hány százaléka tűnhet el, ha a globális felmelegedés eléri a 2°C-ot?"
    },  
    options: {
      en: [
        "25%",
        "60%",
        "Up to 99%"
      ],
      es: [
        "25%",
        "60%",
        "Hasta el 99%"
      ],
      hu: [
        "25%",
        "60%",
        "Akár 99%"
      ]
    },
    answer: 2
  }
},
1022: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Environmental impact of different foods",
    es: "Impacto ambiental de diferentes alimentos",
    hu: "Különböző ételek környezeti hatása"
  },
  lesson: {
    en: "Meat and dairy differ greatly in their environmental impact. Producing 1 kg of beef releases around 60 kg of CO₂, cheese around 23 kg, and milk about 3 kg. In contrast, tofu produces only 3 kg, and lentils less than 1 kg per kg of food. By choosing more plant-based options, you can cut your food-related emissions by up to 75%.",
    es: "La carne y los lácteos difieren mucho en su impacto ambiental. Producir 1 kg de carne de res emite alrededor de 60 kg de CO₂, el queso unos 23 kg y la leche unos 3 kg. En contraste, el tofu produce solo 3 kg y las lentejas menos de 1 kg por kg de alimento. Al elegir más opciones basadas en plantas, puedes reducir hasta un 75% tus emisiones relacionadas con la comida.",
    hu: "A hús és a tejtermékek környezeti hatása jelentősen különbözik. 1 kg marhahús előállítása körülbelül 60 kg CO₂-t bocsát ki, a sajt kb. 23 kg-ot, a tej kb. 3 kg-ot. Ezzel szemben a tofu csak 3 kg-ot, a lencse pedig kevesebb mint 1 kg-ot termel kilogrammonként. Ha több növényi alapú ételt választasz, akár 75%-kal csökkentheted az élelmiszerhez kapcsolódó kibocsátásodat."
  },
  quiz: {  
    question: {
      en: "Which of these foods causes the most CO₂ emissions per kilogram?",
      es: "¿Cuál de estos alimentos causa más emisiones de CO₂ por kilogramo?",
      hu: "Melyik étel okozza a legtöbb CO₂-kibocsátást kilogrammonként?"
    },  
    options: {
      en: [
        "Beef",
        "Cheese",
        "Tofu"
      ],
      es: [
        "Carne de res",
        "Queso",
        "Tofu"
      ],
      hu: [
        "Marhahús",
        "Sajt",
        "Tofu"
      ]
    },
    answer: 0
  }
},
1023: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Wildlife decline and climate change",
    es: "Declive de la vida silvestre y cambio climático",
    hu: "A vadvilág hanyatlása és a klímaváltozás"
  },
  lesson: {
    en: "Globally, the average size of monitored wildlife populations fell by about 73% between 1970 and 2020. In oceans near the United States, more than 70% of marine mammal populations — including whales, dolphins, and seals — are now classified as vulnerable due to warming waters, shrinking ice, and habitat loss. These pressures lead to starvation, longer migration routes, reduced breeding success, and push some species close to collapse.",
    es: "A nivel mundial, el tamaño promedio de las poblaciones de vida silvestre monitoreadas disminuyó alrededor de un 73% entre 1970 y 2020. En los océanos cercanos a Estados Unidos, más del 70% de las poblaciones de mamíferos marinos — como ballenas, delfines y focas — se consideran ahora vulnerables debido al calentamiento del agua, la pérdida de hielo y la destrucción del hábitat. Estas presiones provocan hambre, migraciones más largas, menor éxito reproductivo y acercan a algunas especies al colapso.",
    hu: "Világszerte a megfigyelt vadon élő állatpopulációk átlagos mérete körülbelül 73%-kal csökkent 1970 és 2020 között. Az Egyesült Államok körüli óceánokban a tengeri emlősök — például bálnák, delfinek és fókák — több mint 70%-át ma már sebezhetőnek minősítik a melegedő vizek, az olvadó jég és az élőhelyek elvesztése miatt. Ezek a hatások éhezéshez, hosszabb vándorlási útvonalakhoz, csökkenő szaporodási sikerhez vezetnek, és egyes fajokat az összeomlás szélére sodornak."
  },
  quiz: {  
    question: {
      en: "By roughly what percentage did monitored wildlife populations decline globally from 1970 to 2020?",
      es: "¿En qué porcentaje aproximado disminuyeron las poblaciones de vida silvestre monitoreadas a nivel mundial entre 1970 y 2020?",
      hu: "Körülbelül hány százalékkal csökkentek világszerte a megfigyelt vadon élő állatpopulációk 1970 és 2020 között?"
    },  
    options: {
      en: [
        "About 35%",
        "About 73%",
        "About 90%"
      ],
      es: [
        "Alrededor del 35%",
        "Alrededor del 73%",
        "Alrededor del 90%"
      ],
      hu: [
        "Körülbelül 35%",
        "Körülbelül 73%",
        "Körülbelül 90%"
      ]
    },
    answer: 1
  }
},
1024: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Land use of milk alternatives",
    es: "Uso del suelo de alternativas a la leche",
    hu: "Tejalternatívák földhasználata"
  },
  lesson: {
    en: "Producing cow’s milk requires large amounts of land, mostly to grow animal feed. About 9 square meters of land are needed each year to produce 1 liter of cow’s milk. In comparison, oat milk uses around 0.8 m², soy milk 0.7 m², and almond milk about 0.5 m². Switching to plant-based milk can reduce land use by over 85%, helping protect forests and wildlife habitats.",
    es: "La producción de leche de vaca requiere grandes cantidades de tierra, principalmente para cultivar alimento para los animales. Se necesitan aproximadamente 9 metros cuadrados de tierra al año para producir 1 litro de leche de vaca. En comparación, la leche de avena utiliza unos 0,8 m², la de soja 0,7 m² y la de almendra alrededor de 0,5 m². Cambiar a leches vegetales puede reducir el uso del suelo en más del 85%, ayudando a proteger los bosques y los hábitats naturales.",
    hu: "A tehéntej előállítása nagy mennyiségű földterületet igényel, főként az állati takarmány termesztése miatt. Évente körülbelül 9 négyzetméter föld szükséges 1 liter tehéntej előállításához. Ezzel szemben a zabtej kb. 0,8 m²-t, a szójatej 0,7 m²-t, a mandulatej pedig körülbelül 0,5 m²-t igényel. A növényi alapú tejek választása több mint 85%-kal csökkentheti a földhasználatot, hozzájárulva az erdők és élőhelyek védelméhez."
  },
  quiz: {  
    question: {
      en: "How much land is needed each year to produce 1 liter of cow’s milk?",
      es: "¿Cuánta tierra se necesita cada año para producir 1 litro de leche de vaca?",
      hu: "Mennyi földterület szükséges évente 1 liter tehéntej előállításához?"
    },  
    options: {
      en: [
        "9 m²",
        "2 m²",
        "0.7 m²"
      ],
      es: [
        "9 m²",
        "2 m²",
        "0,7 m²"
      ],
      hu: [
        "9 m²",
        "2 m²",
        "0,7 m²"
      ]
    },
    answer: 0
  }
},
1025: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegetarian",  
  title: {
    en: "Heating, energy, and small changes",
    es: "Calefacción, energía y pequeños cambios",
    hu: "Fűtés, energia és apró változtatások"
  },
  lesson: {
    en: "Heating homes consumes a large amount of energy, but even small adjustments make a difference. Lowering your thermostat by just 1°C can reduce heating energy use by about 7% and prevent roughly 300 kg of CO₂ emissions per year for an average household. It’s similar to turning off your heating for two weeks each winter — and you can stay comfortable by wearing warmer clothes.",
    es: "Calentar los hogares consume mucha energía, pero incluso pequeños ajustes marcan la diferencia. Bajar el termostato solo 1°C puede reducir el consumo de energía para calefacción en aproximadamente un 7% y evitar alrededor de 300 kg de emisiones de CO₂ al año en un hogar promedio. Es similar a apagar la calefacción durante dos semanas cada invierno — y puedes mantenerte cómodo usando ropa más abrigada.",
    hu: "Az otthonok fűtése sok energiát igényel, de még az apró változtatások is számítanak. A termosztát mindössze 1°C-kal történő csökkentése körülbelül 7%-kal mérsékelheti a fűtési energiafelhasználást, és évente nagyjából 300 kg CO₂-kibocsátást előzhet meg egy átlagos háztartásban. Ez olyan, mintha minden télen két hétre kikapcsolnád a fűtést — miközben egy melegebb pulóverrel továbbra is komfortos maradhatsz."
  },
  quiz: {  
    question: {
      en: "Lowering the thermostat by 1°C can reduce home heating energy use by roughly:",
      es: "Bajar el termostato 1°C puede reducir el consumo de energía para calefacción en aproximadamente:",
      hu: "A termosztát 1°C-kal való csökkentése körülbelül mennyivel csökkenti a fűtési energiafelhasználást?"
    },  
    options: {
      en: [
        "2%",
        "7%",
        "15%"
      ],
      es: [
        "2%",
        "7%",
        "15%"
      ],
      hu: [
        "2%",
        "7%",
        "15%"
      ]
    },
    answer: 1
  }
},


1026: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Environmental impact of protein sources",
    es: "Impacto ambiental de las fuentes de proteína",
    hu: "Fehérjeforrások környezeti hatása"
  },
  lesson: {
    en: "Producing 1 kg of beef emits about 60 kg of CO₂-equivalent and uses around 15,400 liters of water, making it one of the most resource-intensive foods. In comparison, producing 1 kg of eggs emits about 4.2 kg of CO₂-equivalent, uses roughly 3,300 liters of water, and requires about 7.9 m² of land. Meanwhile, lentils are one of the most environmentally efficient protein sources: producing 1 kg of lentils emits only about 0.9 kg of CO₂-equivalent, uses around 1.4 m² of land, and requires approximately 1,250 liters of irrigation water, which is much lower than animal products.",
    es: "Producir 1 kg de carne de res emite aproximadamente 60 kg de CO₂ equivalente y utiliza alrededor de 15.400 litros de agua, convirtiéndola en uno de los alimentos más intensivos en recursos. En comparación, producir 1 kg de huevos emite unos 4,2 kg de CO₂ equivalente, utiliza alrededor de 3.300 litros de agua y requiere unos 7,9 m² de tierra. Mientras tanto, las lentejas son una de las fuentes de proteína más eficientes ambientalmente: producir 1 kg de lentejas emite solo unos 0,9 kg de CO₂ equivalente, utiliza alrededor de 1,4 m² de tierra y requiere aproximadamente 1.250 litros de agua de riego, mucho menos que los productos animales.",
    hu: "1 kg marhahús előállítása körülbelül 60 kg CO₂-egyenérték kibocsátással jár, és kb. 15 400 liter vizet igényel, így az egyik leginkább erőforrás-igényes étel. Ezzel szemben 1 kg tojás előállítása kb. 4,2 kg CO₂-egyenérték kibocsátással jár, kb. 3 300 liter vizet használ fel, és kb. 7,9 m² földet igényel. A lencse ezzel szemben az egyik legkörnyezettudatosabb fehérjeforrás: 1 kg lencse előállítása mindössze kb. 0,9 kg CO₂-egyenértéket bocsát ki, kb. 1,4 m² földet használ, és kb. 1 250 liter öntözővizet igényel, ami sokkal kevesebb, mint az állati termékeknél."
  },
  quiz: {
    question: {
      en: "Which food has the lowest environmental impact per kilogram?",
      es: "¿Qué alimento tiene el menor impacto ambiental por kilogramo?",
      hu: "Melyik élelmiszernek van a legalacsonyabb környezeti hatása kilogrammonként?"
    },
    options: {
      en: ["Eggs", "Lentils", "Beef"],
      es: ["Huevos", "Lentejas", "Carne de res"],
      hu: ["Tojás", "Lencse", "Marhahús"]
    },
    answer: 1
  }
},

1027: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Transport and carbon emissions",
    es: "Transporte y emisiones de carbono",
    hu: "Közlekedés és szén-dioxid kibocsátás"
  },
  lesson: {
    en: "Transportation is a major source of greenhouse gas emissions. For example, a medium car emits about 120 grams of CO₂ per kilometer. Flying is even worse: a return flight from New York to London produces roughly 1.2 tons of CO₂ per passenger. In contrast, taking the train emits around 14 grams of CO₂ per kilometer. Choosing public transport, biking, walking, or even combining trips can drastically reduce your carbon footprint.",
    es: "El transporte es una fuente importante de emisiones de gases de efecto invernadero. Por ejemplo, un coche mediano emite alrededor de 120 gramos de CO₂ por kilómetro. Volar es aún peor: un vuelo de ida y vuelta de Nueva York a Londres produce aproximadamente 1,2 toneladas de CO₂ por pasajero. En cambio, viajar en tren emite alrededor de 14 gramos de CO₂ por kilómetro. Elegir transporte público, bicicleta, caminar o combinar viajes puede reducir drásticamente tu huella de carbono.",
    hu: "A közlekedés jelentős forrása az üvegházhatású gázok kibocsátásának. Például egy közepes autó kb. 120 g CO₂-t bocsát ki kilométerenként. A repülés még rosszabb: egy New York–London retúr repülőút kb. 1,2 tonna CO₂-t termel utasonként. Ezzel szemben a vonat kb. 14 g CO₂-t bocsát ki kilométerenként. A tömegközlekedés, a biciklizés, a gyaloglás vagy az utak kombinálása drasztikusan csökkentheti a szénlábnyomot."
  },
  quiz: {
    question: {
      en: "Which mode of transport emits the least CO₂ per kilometer?",
      es: "¿Qué medio de transporte emite menos CO₂ por kilómetro?",
      hu: "Melyik közlekedési mód bocsátja ki a legkevesebb CO₂-t kilométerenként?"
    },
    options: {
      en: ["Car", "Plane", "Train"],
      es: ["Coche", "Avión", "Tren"],
      hu: ["Autó", "Repülő", "Vonat"]
    },
    answer: 2
  }
},

1028: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Inefficiency of meat and dairy production",
    es: "Ineficiencia en la producción de carne y lácteos",
    hu: "Hús- és tejtermelés hatékonysága"
  },
  lesson: {
    en: "Around 77% of global cropland is used to produce meat and dairy, but it only provides about 18% of our calories. This means producing these foods emits 2–5 times more CO₂ than necessary compared to growing crops directly for humans.",
    es: "Alrededor del 77% de las tierras de cultivo mundiales se utilizan para producir carne y lácteos, pero solo proporcionan aproximadamente el 18% de nuestras calorías. Esto significa que producir estos alimentos emite 2–5 veces más CO₂ de lo necesario en comparación con cultivar directamente alimentos para humanos.",
    hu: "A globális mezőgazdasági területek kb. 77%-át hús- és tejtermelésre használják, de ez csupán az energiabevitelünk kb. 18%-át fedezi. Ez azt jelenti, hogy ezeknek az élelmiszereknek a termelése 2–5-ször több CO₂-t bocsát ki, mint ami szükséges lenne, ha közvetlenül embereknek termelnénk növényeket."
  },
  quiz: {
    question: {
      en: "Producing meat and dairy emits how many times more CO₂ than necessary?",
      es: "¿Cuántas veces más CO₂ se emite al producir carne y lácteos de lo necesario?",
      hu: "Hányszor több CO₂-t bocsát ki a hús- és tejtermelés a szükségesnél?"
    },
    options: {
      en: ["1x", "2–5x", "10x"],
      es: ["1x", "2–5x", "10x"],
      hu: ["1x", "2–5x", "10x"]
    },
    answer: 1
  }
},

1029: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Carbon footprint of cheese",
    es: "Huella de carbono del queso",
    hu: "A sajt szénlábnyoma"
  },
  lesson: {
    en: "Cheese is one of the most carbon-intensive foods. Producing 1 kilogram of cheese emits about 23 kg of CO₂, while 1 liter of cow’s milk emits only about 3 kg CO₂. This is because it takes around 10 liters of milk to make 1 kilogram of cheese. Compared to plant-based alternatives like tofu or nuts, cheese produces 5–10 times more emissions per kilogram.",
    es: "El queso es uno de los alimentos con mayor intensidad de carbono. Producir 1 kilogramo de queso emite aproximadamente 23 kg de CO₂, mientras que 1 litro de leche de vaca emite solo unos 3 kg de CO₂. Esto se debe a que se necesitan alrededor de 10 litros de leche para hacer 1 kg de queso. En comparación con alternativas vegetales como el tofu o los frutos secos, el queso produce de 5 a 10 veces más emisiones por kilogramo.",
    hu: "A sajt az egyik legnagyobb szén-dioxid-intenzitású élelmiszer. 1 kg sajt előállítása kb. 23 kg CO₂-t bocsát ki, míg 1 liter tehéntej csupán kb. 3 kg CO₂-t. Ennek oka, hogy kb. 10 liter tej szükséges 1 kg sajt elkészítéséhez. A növényi alternatívákhoz, például tofuhoz vagy diófélékhez képest a sajt kilogrammonként 5–10-szer több kibocsátást okoz."
  },
  quiz: {
    question: {
      en: "How many kilograms of CO₂ are emitted to produce 1 kg of cheese?",
      es: "¿Cuántos kilogramos de CO₂ se emiten para producir 1 kg de queso?",
      hu: "Hány kg CO₂-t bocsátanak ki 1 kg sajt előállításához?"
    },
    options: {
      en: ["3 kg", "10 kg", "23 kg"],
      es: ["3 kg", "10 kg", "23 kg"],
      hu: ["3 kg", "10 kg", "23 kg"]
    },
    answer: 2
  }
},

1030: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Land use trade-offs in sustainable farming",
    es: "Compromisos de uso de la tierra en la agricultura sostenible",
    hu: "Földhasználati kompromisszumok a fenntartható gazdálkodásban"
  },
  lesson: {
    en: "Free-range and regenerative farming can cut emissions by up to 50% compared to conventional methods. However, these practices need 2–2.5 times more land to produce the same amount of food. Lower emissions come at the cost of higher land use.",
    es: "La agricultura de libre pastoreo y regenerativa puede reducir las emisiones hasta un 50% en comparación con los métodos convencionales. Sin embargo, estas prácticas necesitan de 2 a 2,5 veces más tierra para producir la misma cantidad de alimentos. Las menores emisiones tienen el costo de un mayor uso de la tierra.",
    hu: "A szabad tartású és regeneratív gazdálkodás akár 50%-kal csökkentheti a kibocsátást a hagyományos módszerekhez képest. Ezekhez a gyakorlatokhoz azonban 2–2,5-szer több földre van szükség ugyanannyi élelmiszer előállításához. Az alacsonyabb kibocsátás magasabb földhasználat árán jár."
  },
  quiz: {
    question: {
      en: "Compared to conventional farming, how much more land do free-range products typically need?",
      es: "En comparación con la agricultura convencional, ¿cuánta más tierra necesitan normalmente los productos de libre pastoreo?",
      hu: "A hagyományos gazdálkodáshoz képest mennyi földre van szükség tipikusan a szabad tartású termékeknek?"
    },
    options: {
      en: ["1.5x", "2–2.5x", "3x"],
      es: ["1,5x", "2–2,5x", "3x"],
      hu: ["1,5x", "2–2,5x", "3x"]
    },
    answer: 1
  }
},

1031: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Environmental impact of leather",
    es: "Impacto ambiental del cuero",
    hu: "A bőr környezeti hatása"
  },
  lesson: {
    en: "Producing 1 m² of cowhide leather emits around 65–110 kg of CO₂ and requires about 15,000 liters of water. Synthetic leather (PU) has a much smaller footprint — roughly 15–20 kg of CO₂ and 400–600 liters of water per m². Plant-based leathers made from mushrooms or pineapples are even cleaner, producing only 1–8 kg of CO₂ and using less than 100 liters of water per m². Choosing these materials helps save both water and emissions.",
    es: "Producir 1 m² de cuero de vaca emite entre 65 y 110 kg de CO₂ y requiere unos 15.000 litros de agua. El cuero sintético (PU) tiene una huella mucho menor: aproximadamente 15–20 kg de CO₂ y 400–600 litros de agua por m². Los cueros de origen vegetal, hechos de hongos o piñas, son aún más limpios, produciendo solo 1–8 kg de CO₂ y usando menos de 100 litros de agua por m². Elegir estos materiales ayuda a ahorrar tanto agua como emisiones.",
    hu: "1 m² marhabőr előállítása körülbelül 65–110 kg CO₂-t bocsát ki és kb. 15 000 liter vizet igényel. A szintetikus bőr (PU) sokkal kisebb lábnyommal rendelkezik — kb. 15–20 kg CO₂ és 400–600 liter víz m²-ként. A növényi alapú bőrök, például gombából vagy ananászból készült anyagok még tisztábbak, csupán 1–8 kg CO₂-t bocsátanak ki és kevesebb mint 100 liter vizet igényelnek m²-ként. Ezeknek az anyagoknak a választása víz- és kibocsátás-megtakarítást jelent."
  },
  quiz: {
    question: {
      en: "How many kilograms of CO₂ does 1 m² of cowhide leather emit?",
      es: "¿Cuántos kilogramos de CO₂ emite 1 m² de cuero de vaca?",
      hu: "Hány kg CO₂-t bocsát ki 1 m² marhabőr?"
    },
    options: {
      en: ["10–20 kg", "30–50 kg", "65–110 kg"],
      es: ["10–20 kg", "30–50 kg", "65–110 kg"],
      hu: ["10–20 kg", "30–50 kg", "65–110 kg"]
    },
    answer: 2
  }
},

1032: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Water use in cheese production",
    es: "Uso de agua en la producción de queso",
    hu: "Vízfelhasználás a sajt előállításában"
  },
  lesson: {
    en: "Producing 1 kg of cheese requires about 5,000 liters of water, mostly to grow the milk needed for production (around 10 liters of milk per kg of cheese). In comparison, 1 kg of lentils only requires 1,250 liters of water.",
    es: "Producir 1 kg de queso requiere unos 5.000 litros de agua, principalmente para cultivar la leche necesaria para su producción (aproximadamente 10 litros de leche por kg de queso). En comparación, 1 kg de lentejas solo requiere 1.250 litros de agua.",
    hu: "1 kg sajt előállítása körülbelül 5 000 liter vizet igényel, főként a szükséges tej előállításához (kb. 10 liter tej 1 kg sajt előállításához). Ezzel szemben 1 kg lencse csupán 1 250 liter vizet igényel."
  },
  quiz: {
    question: {
      en: "How much water is needed to produce 1 kg of cheese?",
      es: "¿Cuánta agua se necesita para producir 1 kg de queso?",
      hu: "Mennyi víz szükséges 1 kg sajt előállításához?"
    },
    options: {
      en: ["1,250 liters", "3,000 liters", "5,000 liters"],
      es: ["1.250 litros", "3.000 litros", "5.000 litros"],
      hu: ["1 250 liter", "3 000 liter", "5 000 liter"]
    },
    answer: 2
  }
},

1033: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Impact of abandoned fishing gear",
    es: "Impacto de las redes de pesca abandonadas",
    hu: "A elhagyott halászfelszerelés hatása"
  },
  lesson: {
    en: "Abandoned fishing gear, or 'ghost nets,' can float in the ocean for over 600 years, continuously trapping fish, turtles, seabirds, and other marine life. Each year, hundreds of thousands of tons of this gear enter the oceans, slowly breaking down into microplastics that pollute the food chain. Choosing plant-based foods reduces demand on industrial fishing, helping protect marine ecosystems and prevent plastic pollution at its source.",
    es: "Las redes de pesca abandonadas, o 'redes fantasma', pueden flotar en el océano durante más de 600 años, atrapando continuamente peces, tortugas, aves marinas y otros seres marinos. Cada año, cientos de miles de toneladas de este equipo llegan a los océanos, descomponiéndose lentamente en microplásticos que contaminan la cadena alimentaria. Elegir alimentos vegetales reduce la demanda de pesca industrial, ayudando a proteger los ecosistemas marinos y prevenir la contaminación por plásticos desde su origen.",
    hu: "Az elhagyott halászfelszerelés, az ún. „szellemhálók” több mint 600 évig úszhatnak az óceánban, folyamatosan fogva tartva halakat, teknősöket, tengeri madarakat és más tengeri élőlényeket. Évente több száz ezer tonna ilyen felszerelés kerül az óceánokba, lassan mikroplasztikokká bomolva, amelyek szennyezik az élelmiszerláncot. Növényi alapú ételek választása csökkenti az ipari halászat iránti keresletet, segítve a tengeri ökoszisztémák védelmét és a műanyag szennyezés megelőzését."
  },
  quiz: {
    question: {
      en: "How long can abandoned fishing nets continue to trap marine animals in the ocean?",
      es: "¿Cuánto tiempo pueden las redes de pesca abandonadas seguir atrapando animales marinos en el océano?",
      hu: "Meddig képesek az elhagyott halászhálók tengeri állatokat fogva tartani az óceánban?"
    },
    options: {
      en: ["10–50 years", "100–200 years", "Over 600 years"],
      es: ["10–50 años", "100–200 años", "Más de 600 años"],
      hu: ["10–50 év", "100–200 év", "Több mint 600 év"]
    },
    answer: 2
  }
},

1034: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Water use in milk production",
    es: "Uso de agua en la producción de leche",
    hu: "Vízfelhasználás a tejtermelésben"
  },
  lesson: {
    en: "Dairy milk is water-intensive: producing 1 liter of cow’s milk requires about 1,000 liters of water. In contrast, plant-based alternatives need far less — oat milk uses around 48 liters per liter, soy milk about 28 liters, and almond milk roughly 371 liters.",
    es: "La leche de vaca requiere mucha agua: producir 1 litro de leche necesita aproximadamente 1.000 litros de agua. En cambio, las alternativas vegetales requieren mucho menos: la leche de avena utiliza alrededor de 48 litros por litro, la leche de soja unos 28 litros y la leche de almendras aproximadamente 371 litros.",
    hu: "A tehéntej vízigényes: 1 liter tej előállítása kb. 1 000 liter vizet igényel. Ezzel szemben a növényi alternatívák sokkal kevesebbet igényelnek — az zabtej kb. 48 liter/liter, a szójatej kb. 28 liter, a mandulatej kb. 371 liter."
  },
  quiz: {
    question: {
      en: "Which type of milk uses the most water per liter?",
      es: "¿Qué tipo de leche utiliza más agua por litro?",
      hu: "Melyik tejfajta használja a legtöbb vizet literenként?"
    },
    options: {
      en: ["Cow’s milk", "Oat milk", "Soy milk"],
      es: ["Leche de vaca", "Leche de avena", "Leche de soja"],
      hu: ["Tehéntej", "Zabtej", "Szójatej"]
    },
    answer: 0
  }
},

1035: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Impact of industrial fishing on marine mammals",
    es: "Impacto de la pesca industrial en mamíferos marinos",
    hu: "Az ipari halászat hatása a tengeri emlősökre"
  },
  lesson: {
    en: "Industrial fishing kills around 300,000 whales, dolphins, and porpoises every year through bycatch. Overfishing has caused populations of many large predatory fish, like tuna and sharks, to drop by over 90% in the last 50 years, disrupting the marine food chain. These losses force marine mammals to travel further for food, reduce their breeding success, and threaten entire ocean ecosystems.",
    es: "La pesca industrial mata cada año a unos 300.000 ballenas, delfines y marsopas como captura incidental. La sobrepesca ha hecho que las poblaciones de muchos peces depredadores grandes, como atunes y tiburones, disminuyan más del 90% en los últimos 50 años, perturbando la cadena alimentaria marina. Estas pérdidas obligan a los mamíferos marinos a desplazarse más lejos en busca de alimento, reducen su éxito reproductivo y amenazan ecosistemas oceánicos completos.",
    hu: "Az ipari halászat évente körülbelül 300 000 bálna, delfin és gömböc elpusztulását okozza mellékfogásként. A túlhalászás következtében sok nagy ragadozó hal, például tonhal és cápa populációja az elmúlt 50 évben több mint 90%-kal csökkent, ami felborította a tengeri táplálékláncot. Ezek a veszteségek arra kényszerítik a tengeri emlősöket, hogy távolabb utazzanak táplálékért, csökkentik szaporodási sikerüket, és veszélyeztetik az egész óceáni ökoszisztémát."
  },
  quiz: {
    question: {
      en: "Approximately how many large marine mammals are killed by bycatch each year?",
      es: "Aproximadamente, ¿cuántos grandes mamíferos marinos mueren cada año por captura incidental?",
      hu: "Körülbelül hány nagy tengeri emlőst öl meg az ipari halászat mellékfogásként évente?"
    },
    options: {
      en: ["50,000", "300,000", "1,000,000"],
      es: ["50.000", "300.000", "1.000.000"],
      hu: ["50 000", "300 000", "1 000 000"]
    },
    answer: 1
  }
},

1036: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Oceans and climate regulation",
    es: "Océanos y regulación climática",
    hu: "Óceánok és az éghajlat szabályozása"
  },
  lesson: {
    en: "Oceans play a crucial role in regulating the climate. They absorb about 25–30% of human CO₂ emissions and store more heat than the atmosphere, slowing global warming. Phytoplankton alone captures roughly 50 billion tons of CO₂ each year through photosynthesis. However, in some regions, phytoplankton populations have declined significantly — for example, in Narragansett Bay, USA, biomass decreased by about 49% between 1968 and 2019—reducing the ocean’s capacity to store carbon.",
    es: "Los océanos desempeñan un papel crucial en la regulación del clima. Absorben alrededor del 25–30% de las emisiones humanas de CO₂ y almacenan más calor que la atmósfera, frenando el calentamiento global. Solo el fitoplancton captura aproximadamente 50 mil millones de toneladas de CO₂ cada año mediante la fotosíntesis. Sin embargo, en algunas regiones, las poblaciones de fitoplancton han disminuido significativamente —por ejemplo, en Narragansett Bay, EE. UU., la biomasa disminuyó alrededor del 49% entre 1968 y 2019— reduciendo la capacidad del océano para almacenar carbono.",
    hu: "Az óceánok kulcsszerepet játszanak az éghajlat szabályozásában. A globális CO₂-kibocsátás körülbelül 25–30%-át nyelik el, és több hőt tárolnak, mint a légkör, lassítva a globális felmelegedést. Maguk a fitoplanktonok évente körülbelül 50 milliárd tonna CO₂-t kötnek meg fotoszintézis útján. Egyes régiókban azonban a fitoplankton-populáció jelentősen csökkent — például az USA-beli Narragansett-öbölben 1968 és 2019 között a biomassza kb. 49%-kal csökkent — csökkentve az óceán szénmegkötő kapacitását."
  },
  quiz: {
    question: {
      en: "Approximately what percentage of human CO₂ emissions do oceans absorb?",
      es: "¿Qué porcentaje aproximado de las emisiones humanas de CO₂ absorben los océanos?",
      hu: "Körülbelül a globális CO₂-kibocsátás hány százalékát nyelik el az óceánok?"
    },
    options: {
      en: ["10–15%", "25–30%", "50–60%"],
      es: ["10–15%", "25–30%", "50–60%"],
      hu: ["10–15%", "25–30%", "50–60%"]
    },
    answer: 1
  }
},

1037: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Water use in egg production",
    es: "Uso de agua en la producción de huevos",
    hu: "Vízfelhasználás a tojás előállításában"
  },
  lesson: {
    en: "Producing 1 kg of eggs requires around 3,300 liters of water, mostly to grow the feed for the hens. In comparison, 1 kg of lentils only requires about 1,250 liters of water.",
    es: "Producir 1 kg de huevos requiere alrededor de 3.300 litros de agua, principalmente para cultivar el alimento de las gallinas. En comparación, 1 kg de lentejas solo necesita aproximadamente 1.250 litros de agua.",
    hu: "1 kg tojás előállítása körülbelül 3 300 liter vizet igényel, főként a tyúkok takarmányának előállításához. Ezzel szemben 1 kg lencse csak kb. 1 250 liter vizet igényel."
  },
  quiz: {
    question: {
      en: "How much water is needed to produce 1 kg of eggs?",
      es: "¿Cuánta agua se necesita para producir 1 kg de huevos?",
      hu: "Mennyi víz szükséges 1 kg tojás előállításához?"
    },
    options: {
      en: ["1,250 liters", "3,300 liters", "5,000 liters"],
      es: ["1.250 litros", "3.300 litros", "5.000 litros"],
      hu: ["1 250 liter", "3 300 liter", "5 000 liter"]
    },
    answer: 1
  }
},

1038: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Destruction caused by bottom trawling",
    es: "Destrucción causada por la pesca de arrastre de fondo",
    hu: "Az aljzati vonóhálózás pusztító hatása"
  },
  lesson: {
    en: "Bottom trawling is a fishing method where large, heavy nets are dragged along the ocean floor to catch fish and shrimp. These nets scrape and crush everything in their path, including coral reefs, seagrass beds, and slow-growing bottom-dwelling species. About 15% of the world’s continental shelf is affected by bottom trawling. This destruction releases stored carbon from sediments, kills countless marine organisms, and permanently damages habitats, making it one of the most environmentally harmful fishing practices.",
    es: "La pesca de arrastre de fondo es un método donde grandes redes pesadas se arrastran por el fondo del océano para capturar peces y camarones. Estas redes raspan y aplastan todo a su paso, incluidos los arrecifes de coral, los pastos marinos y las especies bentónicas de crecimiento lento. Aproximadamente el 15% del talud continental mundial se ve afectado por esta práctica. Esta destrucción libera carbono almacenado en los sedimentos, mata innumerables organismos marinos y daña permanentemente los hábitats, convirtiéndola en una de las prácticas de pesca más dañinas para el medio ambiente.",
    hu: "Az aljzati vonóhálózás olyan halászati módszer, ahol nagy, nehéz hálókat húznak az óceán fenekén, hogy halakat és garnélákat fogjanak. Ezek a hálók mindent összetörnek az útjukban, beleértve a korallzátonyokat, tengerifüves élőhelyeket és lassan növő aljzati fajokat. A világ kontinentális talapzatának kb. 15%-át érinti ez a gyakorlat. A pusztítás felszabadítja az üledékekben tárolt szenet, számtalan tengeri élőlényt pusztít el, és tartósan károsítja az élőhelyeket, így ez az egyik legkörnyezetkárosítóbb halászati módszer."
  },
  quiz: {
    question: {
      en: "Why is bottom trawling considered highly destructive?",
      es: "¿Por qué se considera muy destructiva la pesca de arrastre de fondo?",
      hu: "Miért tekintik az aljzati vonóhálózást rendkívül károsnak?"
    },
    options: {
      en: [
        "It selectively catches only large fish",
        "It scrapes the ocean floor, destroying habitats and releasing carbon",
        "It uses too much fuel"
      ],
      es: [
        "Solo captura selectivamente peces grandes",
        "Raspa el fondo del océano, destruyendo hábitats y liberando carbono",
        "Consume demasiado combustible"
      ],
      hu: [
        "Csak a nagy halakat fogja szelektíven",
        "Lehorzsolja az óceánfeneket, tönkreteszi az élőhelyeket és szenet szabadít fel",
        "Túl sok üzemanyagot használ"
      ]
    },
    answer: 1
  }
},

1039: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Food waste and emissions",
    es: "Desperdicio de alimentos y emisiones",
    hu: "Élelmiszer-pazarlás és kibocsátás"
  },
  lesson: {
    en: "Every year, about 1.3 billion tons of food is wasted globally, producing roughly 8–10% of all human greenhouse gas emissions. That means the water, land, and energy used to grow this food is wasted too. Reducing food waste — by planning meals, storing food properly, and eating leftovers — can significantly cut your environmental impact.",
    es: "Cada año se desperdician aproximadamente 1.300 millones de toneladas de alimentos a nivel mundial, generando alrededor del 8–10% de todas las emisiones de gases de efecto invernadero humanas. Esto significa que también se desperdicia el agua, la tierra y la energía utilizada para producir estos alimentos. Reducir el desperdicio de alimentos —planificando las comidas, almacenando correctamente los alimentos y consumiendo las sobras— puede reducir significativamente tu impacto ambiental.",
    hu: "Évente körülbelül 1,3 milliárd tonna élelmiszer vész kárba a világon, ami a globális üvegházhatású gázok kb. 8–10%-át termeli. Ez azt jelenti, hogy az élelmiszer előállításához használt víz, föld és energia is kárba vész. Az élelmiszer-pazarlás csökkentése — étkezés-tervezéssel, megfelelő tárolással és maradékok elfogyasztásával — jelentősen csökkentheti a környezeti hatásodat."
  },
  quiz: {
    question: {
      en: "Approximately what percentage of global greenhouse gas emissions comes from food waste?",
      es: "¿Qué porcentaje aproximado de las emisiones globales de gases de efecto invernadero proviene del desperdicio de alimentos?",
      hu: "Körülbelül a globális üvegházhatású gázkibocsátás hány százaléka származik élelmiszer-pazarlásból?"
    },
    options: {
      en: ["3–5%", "8–10%", "15–20%"],
      es: ["3–5%", "8–10%", "15–20%"],
      hu: ["3–5%", "8–10%", "15–20%"]
    },
    answer: 1
  }
},

1040: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegetarian",
  title: {
    en: "Processed vs fresh plant-based foods",
    es: "Alimentos vegetales procesados vs frescos",
    hu: "Feldolgozott és friss növényi ételek"
  },
  lesson: {
    en: "Not all plant-based foods are equally sustainable. Highly processed vegetarian foods, like veggie burgers and packaged snacks, can have up to 4 times the CO₂ emissions of fresh vegetables due to production energy, packaging, and transport. Choosing minimally processed plant foods maximizes environmental benefits.",
    es: "No todos los alimentos vegetales son igualmente sostenibles. Los alimentos vegetarianos altamente procesados, como hamburguesas vegetales y snacks envasados, pueden generar hasta 4 veces más emisiones de CO₂ que los vegetales frescos debido a la energía de producción, el envasado y el transporte. Elegir alimentos vegetales mínimamente procesados maximiza los beneficios ambientales.",
    hu: "Nem minden növényi alapú étel egyformán fenntartható. A nagy mértékben feldolgozott vegetáriánus ételek, például a vegán hamburgerek és csomagolt snackek akár négyszer annyi CO₂-t bocsáthatnak ki, mint a friss zöldségek a gyártási energia, csomagolás és szállítás miatt. A minimálisan feldolgozott növényi ételek választása maximalizálja a környezeti előnyöket."
  },
  quiz: {
    question: {
      en: "How much higher can emissions be for processed vegetarian foods compared to fresh vegetables?",
      es: "¿Cuánto más altas pueden ser las emisiones de los alimentos vegetarianos procesados en comparación con los vegetales frescos?",
      hu: "Mennyivel lehet magasabb a feldolgozott vegetáriánus ételek kibocsátása a friss zöldségekhez képest?"
    },
    options: {
      en: ["About the same", "2x higher", "Up to 4x higher"],
      es: ["Aproximadamente igual", "2 veces más", "Hasta 4 veces más"],
      hu: ["Körülbelül ugyanannyi", "2-szer több", "Akár 4-szer több"]
    },
    answer: 2
  }
},
  
  // -------------------------------
  // Environment & Climate – Vegan
  // -------------------------------
  1041: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Water footprint of foods",
    es: "Huella hídrica de los alimentos",
    hu: "Az ételek vízlábnyoma"
  },
  lesson: {
    en: "While all foods require resources to grow, animal-based products—especially beef—are far more water-intensive. Producing just 1 kg of beef can require over 15,000 liters of water, while 1 kg of beans needs around 4,000 liters or less.",
    es: "Aunque todos los alimentos requieren recursos para crecer, los productos de origen animal, especialmente la carne de res, requieren mucho más agua. Producir solo 1 kg de carne de res puede necesitar más de 15.000 litros de agua, mientras que 1 kg de frijoles necesita alrededor de 4.000 litros o menos.",
    hu: "Bár minden étel termesztéséhez erőforrásokra van szükség, az állati eredetű termékek — különösen a marhahús — sokkal több vizet igényelnek. Csak 1 kg marhahús előállítása több mint 15 000 liter vizet igényelhet, míg 1 kg bab körülbelül 4 000 liter vagy kevesebb vizet."
  },
  quiz: {  
    question: {
      en: "Approximately how many liters of water are needed to produce 1 kg of beef?",
      es: "¿Aproximadamente cuántos litros de agua se necesitan para producir 1 kg de carne de res?",
      hu: "Körülbelül hány liter víz szükséges 1 kg marhahús előállításához?"
    },  
    options: {
      en: [
        "1,000 liters",
        "5,000 liters",
        "15,000 liters",
        "30,000 liters"
      ],
      es: [
        "1.000 litros",
        "5.000 litros",
        "15.000 litros",
        "30.000 litros"
      ],
      hu: [
        "1 000 liter",
        "5 000 liter",
        "15 000 liter",
        "30 000 liter"
      ]
    },
    answer: 2
  }
},
1042: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Veganism and the economy",
    es: "Veganismo y economía",
    hu: "A veganizmus és a gazdaság"
  },
  lesson: {
    en: "Some argue that veganism could hurt farmers’ livelihoods, but a plant-based transition can actually create new jobs in sustainable farming, food innovation, and eco-friendly industries. The wellbeing of people, animals, and the planet is more important than short-term economic concerns. This change won’t happen overnight — it’s a gradual shift that gives everyone time to adapt and build a fairer, more compassionate economy.",
    es: "Algunos argumentan que el veganismo podría afectar los medios de vida de los agricultores, pero una transición hacia lo vegetal puede crear nuevos empleos en agricultura sostenible, innovación alimentaria e industrias ecológicas. El bienestar de las personas, los animales y el planeta es más importante que las preocupaciones económicas a corto plazo. Este cambio no ocurrirá de la noche a la mañana; es un cambio gradual que da tiempo a todos para adaptarse y construir una economía más justa y compasiva.",
    hu: "Egyesek azt állítják, hogy a veganizmus károsíthatja a gazdálkodók megélhetését, de a növényi alapú átállás valójában új munkahelyeket teremthet a fenntartható mezőgazdaságban, élelmiszer-innovációban és környezetbarát iparágakban. Az emberek, az állatok és a bolygó jóléte fontosabb, mint a rövid távú gazdasági aggályok. Ez a változás nem egyik napról a másikra történik — fokozatos átmenet, amely időt ad mindenkinek az alkalmazkodásra és egy igazságosabb, együttérzőbb gazdaság kiépítésére."
  },
  quiz: {  
    question: {
      en: "Why shouldn’t we worry that veganism will suddenly harm the economy?",
      es: "¿Por qué no debemos preocuparnos de que el veganismo dañe repentinamente la economía?",
      hu: "Miért ne aggódjunk amiatt, hogy a veganizmus hirtelen károsítaná a gazdaságot?"
    },  
    options: {
      en: [
        "Because the transition will be slow and allow people to adapt",
        "Because farmers will stop working immediately",
        "Because veganism eliminates all jobs",
        "Because no one needs to eat anymore"
      ],
      es: [
        "Porque la transición será lenta y permitirá que las personas se adapten",
        "Porque los agricultores dejarán de trabajar de inmediato",
        "Porque el veganismo elimina todos los empleos",
        "Porque nadie necesitará comer más"
      ],
      hu: [
        "Mert az átmenet lassú lesz, és lehetőséget ad az alkalmazkodásra",
        "Mert a gazdák azonnal abbahagyják a munkát",
        "Mert a veganizmus megszüntet minden állást",
        "Mert senkinek sem kell többé ennie"
      ]
    },
    answer: 0
  }
},
1043: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Animal agriculture and climate impact",
    es: "La ganadería y su impacto climático",
    hu: "Az állattenyésztés klímahatása"
  },
  lesson: {
    en: "Many people think that cars and energy production are the main drivers of climate change, but animal agriculture is just as significant. Raising animals for meat and dairy produces around 14.5% of global greenhouse gas emissions — roughly the same amount as all transportation combined. In addition, livestock farming drives deforestation, excessive water use, and large-scale environmental damage.",
    es: "Muchas personas creen que los automóviles y la producción de energía son los principales responsables del cambio climático, pero la ganadería tiene un impacto similar. La cría de animales para carne y lácteos genera alrededor del 14,5% de las emisiones globales de gases de efecto invernadero, aproximadamente lo mismo que todo el sector del transporte combinado. Además, la ganadería impulsa la deforestación, el uso excesivo de agua y graves daños ambientales.",
    hu: "Sokan úgy gondolják, hogy az autók és az energiatermelés a klímaváltozás fő okozói, pedig az állattenyésztés hasonló mértékben járul hozzá. A hús- és tejtermeléshez kapcsolódó állattartás a globális üvegházhatású gázkibocsátás körülbelül 14,5%-áért felelős — nagyjából annyiért, mint az összes közlekedés együttvéve. Emellett az állattenyésztés erdőirtást, túlzott vízhasználatot és jelentős környezeti károkat okoz."
  },
  quiz: {  
    question: {
      en: "Animal agriculture produces roughly the same greenhouse gas emissions as which sector?",
      es: "¿La ganadería produce aproximadamente las mismas emisiones de gases de efecto invernadero que qué sector?",
      hu: "Az állattenyésztés nagyjából melyik szektor kibocsátásával egyezik meg?"
    },  
    options: {
      en: [
        "Industry",
        "Transport",
        "Energy production",
        "Buildings"
      ],
      es: [
        "La industria",
        "El transporte",
        "La producción de energía",
        "Los edificios"
      ],
      hu: [
        "Az ipar",
        "A közlekedés",
        "Az energiatermelés",
        "Az épületek"
      ]
    },
    answer: 1
  }
},
1044: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Limits of regenerative animal farming",
    es: "Los límites de la ganadería regenerativa",
    hu: "A regeneratív állattartás korlátai"
  },
  lesson: {
    en: "Some people claim that regenerative farming can make meat sustainable by capturing carbon in soils. While these practices may offer local benefits, regenerative animal farming requires far more land than is available if everyone continues to eat a meat-heavy diet. Even if all farms used regenerative methods, there simply wouldn’t be enough land on Earth to feed the global population at current levels of meat consumption.",
    es: "Algunas personas afirman que la ganadería regenerativa puede hacer que la carne sea sostenible al capturar carbono en el suelo. Aunque estas prácticas pueden ofrecer beneficios locales, la ganadería regenerativa requiere mucha más tierra de la que hay disponible si todo el mundo mantiene una dieta rica en carne. Incluso si todas las granjas fueran regenerativas, no habría suficiente tierra en el planeta para alimentar a la población mundial con el consumo actual de carne.",
    hu: "Egyesek szerint a regeneratív gazdálkodás fenntarthatóvá teheti a húsfogyasztást a talaj szénmegkötésével. Bár ezek a módszerek helyi szinten előnyösek lehetnek, a regeneratív állattartás sokkal több földterületet igényel, mint amennyi rendelkezésre állna, ha mindenki továbbra is húsban gazdag étrendet követne. Még ha minden gazdaság regeneratív lenne is, nem lenne elegendő föld a Földön a jelenlegi húsfogyasztási szint fenntartásához."
  },
  quiz: {  
    question: {
      en: "Why can’t regenerative farming fully make meat production sustainable for everyone?",
      es: "¿Por qué la ganadería regenerativa no puede hacer sostenible la producción de carne para todos?",
      hu: "Miért nem teheti a regeneratív gazdálkodás teljes mértékben fenntarthatóvá a húsfogyasztást mindenki számára?"
    },  
    options: {
      en: [
        "Because it doesn’t capture any carbon",
        "Because meat requires far more land than is available for the global diet",
        "Because plants can’t grow on regenerative farms",
        "Because it eliminates agricultural jobs"
      ],
      es: [
        "Porque no captura carbono",
        "Porque la carne requiere mucha más tierra de la disponible para la dieta global",
        "Porque las plantas no pueden crecer en granjas regenerativas",
        "Porque elimina empleos agrícolas"
      ],
      hu: [
        "Mert nem köt meg szenet",
        "Mert a hús jóval több földet igényel, mint amennyi a globális étrendhez rendelkezésre áll",
        "Mert a növények nem tudnak regeneratív gazdaságokban nőni",
        "Mert megszünteti a mezőgazdasági munkahelyeket"
      ]
    },
    answer: 1
  }
},
1045: {  
  goal: "Caring for the environment & fighting climate change",  
  diet: "vegan",  
  title: {
    en: "Why biodiversity matters",
    es: "Por qué la biodiversidad es importante",
    hu: "Miért fontos a biodiverzitás"
  },
  lesson: {
    en: "Biodiversity is essential for human survival. Healthy and diverse ecosystems provide food, clean water, fertile soil, pollination, and help regulate the climate. When species disappear, ecosystems become less resilient and the natural services humans depend on for health and survival are weakened.",
    es: "La biodiversidad es esencial para la supervivencia humana. Los ecosistemas sanos y diversos proporcionan alimentos, agua limpia, suelos fértiles, polinización y ayudan a regular el clima. Cuando las especies desaparecen, los ecosistemas se vuelven menos resilientes y los servicios naturales de los que dependen las personas para su salud y supervivencia se debilitan.",
    hu: "A biodiverzitás alapvető fontosságú az emberi túlélés szempontjából. Az egészséges és sokféle ökoszisztémák élelmiszert, tiszta vizet, termékeny talajt, beporzást biztosítanak, és segítenek a klíma szabályozásában. A fajok eltűnésével az ökoszisztémák ellenálló képessége csökken, és meggyengülnek azok a természeti szolgáltatások, amelyekre az emberek az egészségük és túlélésük érdekében támaszkodnak."
  },
  quiz: {  
    question: {
      en: "Why is biodiversity important for humans?",
      es: "¿Por qué es importante la biodiversidad para los seres humanos?",
      hu: "Miért fontos a biodiverzitás az emberek számára?"
    },  
    options: {
      en: [
        "It is just nice to look at",
        "It supports food, water, and climate regulation",
        "It increases traffic"
      ],
      es: [
        "Solo es agradable de ver",
        "Apoya la alimentación, el agua y la regulación del clima",
        "Aumenta el tráfico"
      ],
      hu: [
        "Csak szép látvány",
        "Biztosítja az élelmet, a vizet és a klímaszabályozást",
        "Növeli a forgalmat"
      ]
    },
    answer: 1
  }
},

1046: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Fishing gear and ocean plastic",
    es: "Redes de pesca y plástico en el océano",
    hu: "Halászati eszközök és óceáni műanyag"
  },
  lesson: {
    en: "Around 46% of ocean plastic comes from abandoned or lost fishing gear, like nets and lines. These “ghost nets” entangle fish, turtles, and marine mammals, causing injuries and death, and have long-lasting effects on marine ecosystems.",
    es: "Alrededor del 46% del plástico oceánico proviene de redes y aparejos de pesca abandonados o perdidos. Estas “redes fantasma” atrapan peces, tortugas y mamíferos marinos, causando lesiones y muerte, y tienen efectos duraderos en los ecosistemas marinos.",
    hu: "Az óceáni műanyag körülbelül 46%-a elhagyott vagy elveszett halászati eszközökből származik, például hálókból és kötelekből. Ezek az „szellemhálók” beleakadnak a halakba, teknősökbe és tengeri emlősökbe, sérülést és halált okozva, és hosszú távú hatással vannak a tengeri ökoszisztémákra."
  },
  quiz: {
    question: {
      en: "What percentage of ocean plastic comes from fishing gear?",
      es: "¿Qué porcentaje del plástico oceánico proviene de redes de pesca?",
      hu: "Az óceáni műanyag hány százaléka származik halászati eszközökből?"
    },
    options: {
      en: ["10%", "75%", "Around 46%"],
      es: ["10%", "75%", "Alrededor del 46%"],
      hu: ["10%", "75%", "Körülbelül 46%"]
    },
    answer: 2
  }
},

1047: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Land saved by plant-based diets",
    es: "Tierra salvada por dietas basadas en plantas",
    hu: "A növényi alapú étrenddel felszabadított földterület"
  },
  lesson: {
    en: "If humanity shifted to a mostly plant-based diet, we could potentially free up around 70% of agricultural land currently used for livestock and feed crops. Returning this land to nature could restore habitats, greatly increase biodiversity, and allow wild species to recover in numbers and variety.",
    es: "Si la humanidad adoptara una dieta mayormente basada en plantas, se podría liberar alrededor del 70% de la tierra agrícola actualmente usada para el ganado y cultivos para alimento animal. Devolver esta tierra a la naturaleza podría restaurar hábitats, aumentar significativamente la biodiversidad y permitir que las especies salvajes se recuperen en número y variedad.",
    hu: "Ha az emberiség túlnyomórészt növényi alapú étrendre váltana, potenciálisan felszabadítható lenne a jelenleg állattenyésztésre és takarmánynövényekre használt mezőgazdasági földterület körülbelül 70%-a. Ennek a területnek a természetnek való visszaadása helyreállíthatja az élőhelyeket, jelentősen növelheti a biodiverzitást, és lehetővé teheti a vadon élő fajok számának és változatosságának helyreállítását."
  },
  quiz: {
    question: {
      en: "What percentage of agricultural land could be freed by adopting a plant-based diet?",
      es: "¿Qué porcentaje de tierra agrícola podría liberarse adoptando una dieta basada en plantas?",
      hu: "A mezőgazdasági földterület hány százaléka szabadítható fel növényi alapú étrenddel?"
    },
    options: {
      en: ["Around 70%", "10%", "50%"],
      es: ["Alrededor del 70%", "10%", "50%"],
      hu: ["Körülbelül 70%", "10%", "50%"]
    },
    answer: 0
  }
},

1048: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Destruction caused by bottom trawling",
    es: "Destrucción causada por la pesca de arrastre de fondo",
    hu: "Az aljzati vonóhálózás pusztító hatása"
  },
  lesson: {
    en: "Bottom trawling is a fishing method where large, heavy nets are dragged along the ocean floor to catch fish and shrimp. These nets scrape and crush everything in their path, including coral reefs, seagrass beds, and slow-growing bottom-dwelling species. About 15% of the world’s continental shelf is affected by bottom trawling. This destruction releases stored carbon from sediments, kills countless marine organisms, and permanently damages habitats, making it one of the most environmentally harmful fishing practices.",
    es: "La pesca de arrastre de fondo es un método donde grandes redes pesadas se arrastran por el fondo del océano para capturar peces y camarones. Estas redes raspan y aplastan todo a su paso, incluidos los arrecifes de coral, los pastos marinos y las especies bentónicas de crecimiento lento. Aproximadamente el 15% del talud continental mundial se ve afectado por esta práctica. Esta destrucción libera carbono almacenado en los sedimentos, mata innumerables organismos marinos y daña permanentemente los hábitats, convirtiéndola en una de las prácticas de pesca más dañinas para el medio ambiente.",
    hu: "Az aljzati vonóhálózás olyan halászati módszer, ahol nagy, nehéz hálókat húznak az óceán fenekén, hogy halakat és garnélákat fogjanak. Ezek a hálók mindent összetörnek az útjukban, beleértve a korallzátonyokat, a tengerifüves élőhelyeket és a lassan növő aljzati fajokat. A világ kontinentális talapzatának kb. 15%-át érinti ez a gyakorlat. A pusztítás felszabadítja az üledékekben tárolt szenet, számtalan tengeri élőlényt pusztít el, és tartósan károsítja az élőhelyeket, így ez az egyik legkörnyezetkárosítóbb halászati módszer."
  },
  quiz: {
    question: {
      en: "Why is bottom trawling considered highly destructive?",
      es: "¿Por qué se considera muy destructiva la pesca de arrastre de fondo?",
      hu: "Miért tekintik az aljzati vonóhálózást rendkívül károsnak?"
    },
    options: {
      en: [
        "It selectively catches only large fish",
        "It scrapes the ocean floor, destroying habitats and releasing carbon",
        "It uses too much fuel"
      ],
      es: [
        "Solo captura selectivamente peces grandes",
        "Raspa el fondo del océano, destruyendo hábitats y liberando carbono",
        "Consume demasiado combustible"
      ],
      hu: [
        "Csak a nagy halakat fogja szelektíven",
        "Lehorzsolja az óceánfeneket, tönkreteszi az élőhelyeket és szenet szabadít fel",
        "Túl sok üzemanyagot használ"
      ]
    },
    answer: 1
  }
},

1049: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Oceans as carbon sinks",
    es: "Océanos como sumideros de carbono",
    hu: "Óceánok mint szénelnyelők"
  },
  lesson: {
    en: "Oceans act as a major carbon sink, absorbing about 25–30% of human CO₂ emissions. Phytoplankton alone captures roughly 50 billion tons of CO₂ each year through photosynthesis. However, in some regions, phytoplankton populations have declined significantly — for example, in Narragansett Bay, USA, biomass decreased by about 49% between 1968 and 2019 — reducing the ocean’s ability to store carbon and harming marine ecosystems.",
    es: "Los océanos actúan como un sumidero de carbono importante, absorbiendo alrededor del 25–30% de las emisiones humanas de CO₂. Solo el fitoplancton captura aproximadamente 50 mil millones de toneladas de CO₂ cada año mediante la fotosíntesis. Sin embargo, en algunas regiones, las poblaciones de fitoplancton han disminuido significativamente —por ejemplo, en Narragansett Bay, EE. UU., la biomasa disminuyó alrededor del 49% entre 1968 y 2019— reduciendo la capacidad del océano para almacenar carbono y dañando los ecosistemas marinos.",
    hu: "Az óceánok fontos szénelnyelők, az emberi CO₂-kibocsátás körülbelül 25–30%-át nyelik el. Maguk a fitoplanktonok évente kb. 50 milliárd tonna CO₂-t kötnek meg fotoszintézis útján. Egyes régiókban azonban a fitoplankton-populáció jelentősen csökkent — például az USA-beli Narragansett-öbölben 1968 és 2019 között a biomassza kb. 49%-kal csökkent — csökkentve az óceán szénmegkötő képességét és károsítva a tengeri ökoszisztémákat."
  },
  quiz: {
    question: {
      en: "How does declining ocean biodiversity affect CO₂ absorption?",
      es: "¿Cómo afecta la disminución de la biodiversidad oceánica a la absorción de CO₂?",
      hu: "Hogyan befolyásolja a csökkenő óceáni biodiverzitás a CO₂ megkötést?"
    },
    options: {
      en: ["Increases carbon storage", "Has no effect", "Reduces the ocean's ability to store carbon"],
      es: ["Aumenta el almacenamiento de carbono", "No tiene efecto", "Reduce la capacidad del océano para almacenar carbono"],
      hu: ["Növeli a szénmegkötést", "Nincs hatása", "Csökkenti az óceán szénmegkötő képességét"]
    },
    answer: 2
  }
},

1050: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Agriculture and greenhouse gas emissions",
    es: "Agricultura y emisiones de gases de efecto invernadero",
    hu: "Mezőgazdaság és üvegházhatású gázok kibocsátása"
  },
  lesson: {
    en: "Agriculture is responsible for nearly 25% of global greenhouse gas emissions. Most of these emissions come from livestock, including methane from cows and nitrous oxide from fertilized soils. Reducing animal product consumption directly lowers emissions.",
    es: "La agricultura es responsable de casi el 25% de las emisiones globales de gases de efecto invernadero. La mayor parte de estas emisiones provienen del ganado, incluido el metano de las vacas y el óxido nitroso de los suelos fertilizados. Reducir el consumo de productos animales disminuye directamente las emisiones.",
    hu: "A mezőgazdaság a globális üvegházhatású gázok közel 25%-áért felelős. A kibocsátások többsége az állattartásból származik, beleértve a szarvasmarhák metánját és a műtrágyázott talajok dinitrogén-oxidját. Az állati termékek fogyasztásának csökkentése közvetlenül csökkenti a kibocsátásokat."
  },
  quiz: {
    question: {
      en: "What percentage of global greenhouse gas emissions comes from agriculture?",
      es: "¿Qué porcentaje de las emisiones globales de gases de efecto invernadero proviene de la agricultura?",
      hu: "A globális üvegházhatású gázkibocsátás hány százaléka származik a mezőgazdaságból?"
    },
    options: {
      en: ["10%", "25%", "50%"],
      es: ["10%", "25%", "50%"],
      hu: ["10%", "25%", "50%"]
    },
    answer: 1
  }
},

1051: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Deforestation drivers",
    es: "Causas de la deforestación",
    hu: "Erdőirtás okai"
  },
  lesson: {
    en: "Deforestation is largely driven by the need for pasture and feed crops for animals. Each year, millions of hectares of forests are cleared, releasing stored carbon into the atmosphere and accelerating climate change.",
    es: "La deforestación se debe en gran parte a la necesidad de pastos y cultivos para alimentar animales. Cada año se talan millones de hectáreas de bosques, liberando carbono almacenado en la atmósfera y acelerando el cambio climático.",
    hu: "Az erdőirtást nagyrészt a legelők és takarmánynövények iránti igény hajtja az állatok számára. Évente millió hektár erdőt vágnak ki, ami a légkörbe engedi a tárolt szenet, és felgyorsítja az éghajlatváltozást."
  },
  quiz: {
    question: {
      en: "What is a primary driver of deforestation?",
      es: "¿Cuál es un impulsor principal de la deforestación?",
      hu: "Mi az erdőirtás fő oka?"
    },
    options: {
      en: ["Urban expansion only", "Natural causes", "Pasture and feed crops for animals"],
      es: ["Solo expansión urbana", "Causas naturales", "Pastos y cultivos para alimentar animales"],
      hu: ["Csak városi terjeszkedés", "Természetes okok", "Legelők és takarmánynövények az állatoknak"]
    },
    answer: 2
  }
},

1052: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Manure runoff impacts",
    es: "Impactos del escurrimiento de estiércol",
    hu: "Trágyakimosódás hatásai"
  },
  lesson: {
    en: "Animal agriculture produces massive amounts of manure, which can run off into rivers and oceans. This nutrient pollution causes algal blooms, oxygen-depleted dead zones, and damages aquatic ecosystems. For example, the Gulf of Mexico dead zone covers up to 22,000 km² in some years due to agricultural runoff.",
    es: "La agricultura animal produce enormes cantidades de estiércol, que puede escurrirse hacia ríos y océanos. Esta contaminación por nutrientes causa proliferación de algas, zonas muertas con falta de oxígeno y daña los ecosistemas acuáticos. Por ejemplo, la zona muerta del Golfo de México cubre hasta 22,000 km² en algunos años debido a escurrimientos agrícolas.",
    hu: "Az állattenyésztés hatalmas mennyiségű trágyát termel, amely a folyókba és óceánokba mosódhat. Ez a tápanyag-szennyezés algavirágzást, oxigénhiányos holt zónákat okoz, és károsítja a vízi ökoszisztémákat. Például a Mexikói-öböl holt zónája egyes években akár 22 000 km²-t is lefed az mezőgazdasági lefolyás miatt."
  },
  quiz: {
    question: {
      en: "What is one major effect of manure runoff from livestock?",
      es: "¿Cuál es un efecto principal del escurrimiento de estiércol del ganado?",
      hu: "Mi az egyik fő hatása az állati trágyakimosódásnak?"
    },
    options: {
      en: ["Increases fish populations", "Causes algal blooms and dead zones", "Purifies rivers"],
      es: ["Aumenta las poblaciones de peces", "Provoca proliferación de algas y zonas muertas", "Purifica los ríos"],
      hu: ["Növeli a halpopulációt", "Algavirágzást és holt zónákat okoz", "Tisztítja a folyókat"]
    },
    answer: 1
  }
},

1053: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Land inefficiency of animal agriculture",
    es: "Ineficiencia de la tierra en la agricultura animal",
    hu: "Az állattenyésztés földhatékonysága"
  },
  lesson: {
    en: "Producing 1 kg of beef requires about 25 times more land than producing 1 kg of lentils. Animal agriculture uses around 77% of global farmland but provides only 18% of calories, showing extreme land inefficiency. Shifting to a plant-based diet could free up billions of hectares for forests and wildlife.",
    es: "Producir 1 kg de carne de res requiere aproximadamente 25 veces más tierra que producir 1 kg de lentejas. La agricultura animal utiliza alrededor del 77% de la tierra cultivable global, pero solo proporciona el 18% de las calorías, mostrando una extrema ineficiencia de la tierra. Cambiar a una dieta basada en plantas podría liberar miles de millones de hectáreas para bosques y vida silvestre.",
    hu: "1 kg marhahús előállítása körülbelül 25-ször több földet igényel, mint 1 kg lencséé. Az állattenyésztés a világ mezőgazdasági földterületének kb. 77%-át használja, de csak a kalóriák 18%-át adja, ami extrém földhatékonysági problémát jelez. A növényi alapú étrendre váltás milliárd hektárokat szabadíthat fel erdők és vadon élő állatok számára."
  },
  quiz: {
    question: {
      en: "Why is animal agriculture considered land-inefficient?",
      es: "¿Por qué se considera ineficiente en el uso de la tierra la agricultura animal?",
      hu: "Miért tekinthető földhatékonytalan az állattenyésztés?"
    },
    options: {
      en: ["It produces fewer calories per hectare than plants", "Animals need no land", "It grows more food than needed"],
      es: ["Produce menos calorías por hectárea que las plantas", "Los animales no necesitan tierra", "Produce más alimentos de los necesarios"],
      hu: ["Kevesebb kalóriát termel hektáronként, mint a növények", "Az állatoknak nincs szükségük földre", "Több ételt termel, mint amennyire szükség van"]
    },
    answer: 0
  }
},

1054: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Problems with overfishing and fish farming",
    es: "Problemas con la sobrepesca y acuicultura",
    hu: "Túlhalászat és halgazdálkodás problémái"
  },
  lesson: {
    en: "Overfishing and fish farming harm oceans. Wild-caught fish often involve bycatch — accidentally killing turtles, dolphins, and seabirds. Bottom trawling destroys seafloor habitats, while intensive fish farms can pollute water with waste and chemicals. These practices reduce biodiversity and compromise ocean health.",
    es: "La sobrepesca y la acuicultura dañan los océanos. Los peces capturados en estado salvaje a menudo implican captura incidental, matando accidentalmente tortugas, delfines y aves marinas. La pesca de arrastre de fondo destruye hábitats del lecho marino, mientras que las granjas piscícolas intensivas pueden contaminar el agua con desechos y productos químicos. Estas prácticas reducen la biodiversidad y comprometen la salud de los océanos.",
    hu: "A túlhalászat és a halgazdálkodás károsítja az óceánokat. A vadon fogott halak gyakran járnak mellékfogással — véletlenül elpusztítva teknősöket, delfineket és tengeri madarakat. Az aljzati vonóhálózás elpusztítja a tengerfenék élőhelyeit, míg az intenzív halgazdaságok a vizet hulladékkal és vegyszerekkel szennyezhetik. Ezek a gyakorlatok csökkentik a biodiverzitást és veszélyeztetik az óceán egészségét."
  },
  quiz: {
    question: {
      en: "What is a major problem with overfishing and fish farming?",
      es: "¿Cuál es un problema importante de la sobrepesca y la acuicultura?",
      hu: "Mi a fő probléma a túlhalászattal és a halgazdálkodással?"
    },
    options: {
      en: ["They improve ocean biodiversity", "They cause bycatch and habitat destruction", "They reduce greenhouse gases"],
      es: ["Mejoran la biodiversidad oceánica", "Causan captura incidental y destrucción de hábitats", "Reducen los gases de efecto invernadero"],
      hu: ["Növelik az óceán biodiverzitását", "Mellékfogást és élőhelypusztítást okoznak", "Csökkentik az üvegházhatású gázokat"]
    },
    answer: 1
  }
},

1055: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Greenhouse gas emissions by food type",
    es: "Emisiones de gases de efecto invernadero por tipo de alimento",
    hu: "Üvegházhatású gázok kibocsátása élelmiszerenként"
  },
  lesson: {
    en: "Greenhouse gas emissions vary greatly between foods. Producing 1 kg of beef emits around 60 kg CO₂-eq, 1 kg of eggs emits ~4.2 kg CO₂-eq, while 1 kg of lentils emits only ~0.9 kg CO₂-eq. Plant-based proteins have a much lower environmental footprint, making diet choices a powerful way to reduce climate impact.",
    es: "Las emisiones de gases de efecto invernadero varían mucho entre los alimentos. Producir 1 kg de carne de res emite alrededor de 60 kg de CO₂-eq, 1 kg de huevos emite ~4,2 kg de CO₂-eq, mientras que 1 kg de lentejas emite solo ~0,9 kg de CO₂-eq. Las proteínas vegetales tienen una huella ambiental mucho menor, haciendo que las elecciones dietéticas sean una forma poderosa de reducir el impacto climático.",
    hu: "Az üvegházhatású gázok kibocsátása nagyban változik az élelmiszerek között. 1 kg marhahús előállítása kb. 60 kg CO₂-egyenértéket bocsát ki, 1 kg tojás kb. 4,2 kg CO₂-egyenértéket, míg 1 kg lencse csak kb. 0,9 kg CO₂-egyenértéket. A növényi fehérjék sokkal kisebb környezeti lábnyommal rendelkeznek, így az étrendi választások erőteljes eszközei az éghajlati hatás csökkentésének."
  },
  quiz: {
    question: {
      en: "Which food has the lowest greenhouse gas emissions per kilogram?",
      es: "¿Qué alimento tiene las menores emisiones de gases de efecto invernadero por kilogramo?",
      hu: "Melyik étel bocsát ki a legkevesebb üvegházhatású gázt kilogrammonként?"
    },
    options: {
      en: ["Beef", "Eggs", "Lentils"],
      es: ["Carne de res", "Huevos", "Lentejas"],
      hu: ["Marhahús", "Tojás", "Lencse"]
    },
    answer: 2
  }
},
 
1056: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Ghost gear and ocean plastic",
    es: "Redes fantasma y plástico oceánico",
    hu: "Elhagyott halászeszközök és óceáni műanyag"
  },
  lesson: {
    en: "Abandoned or lost fishing gear, also called “ghost gear,” is a major source of ocean plastic. About 46% of ocean plastic comes from fishing nets, lines, and traps. This debris entangles marine life, damages coral reefs, and persists in the environment for decades, harming biodiversity and marine ecosystems.",
    es: "Los equipos de pesca abandonados o perdidos, también llamados “redes fantasma”, son una fuente importante de plástico en los océanos. Aproximadamente el 46% del plástico oceánico proviene de redes, líneas y trampas de pesca. Estos desechos atrapan la vida marina, dañan los arrecifes de coral y persisten en el medio ambiente durante décadas, afectando la biodiversidad y los ecosistemas marinos.",
    hu: "Az elhagyott vagy elveszett halászeszközök, más néven „szellemhálók”, az óceáni műanyag fő forrásai. Az óceáni műanyag körülbelül 46%-a hálókból, zsinórokból és csapdákból származik. Ezek az eszközök összekuszálják a tengeri élőlényeket, károsítják a korallzátonyokat, és évtizedekig megmaradnak a környezetben, veszélyeztetve a biodiverzitást és a tengeri ökoszisztémákat."
  },
  quiz: {
    question: {
      en: "What percentage of ocean plastic comes from abandoned or lost fishing gear?",
      es: "¿Qué porcentaje del plástico oceánico proviene de redes de pesca abandonadas o perdidas?",
      hu: "Az óceáni műanyag hány százaléka származik elhagyott vagy elveszett halászeszközökből?"
    },
    options: {
      en: ["10%", "46%", "75%"],
      es: ["10%", "46%", "75%"],
      hu: ["10%", "46%", "75%"]
    },
    answer: 1
  }
},

1057: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Land use reduction by going vegan",
    es: "Reducción de uso de tierra al volverse vegano",
    hu: "Földhasználat csökkentése vegán étrenddel"
  },
  lesson: {
    en: "By switching to a vegan diet, your land use can be reduced by about 76% compared to an average omnivorous diet. This is because animal agriculture uses most of the world’s farmland while providing fewer calories. The land you save could be returned to forests and wildlife, restoring ecosystems.",
    es: "Al cambiar a una dieta vegana, tu uso de la tierra puede reducirse alrededor del 76% en comparación con una dieta omnívora promedio. Esto se debe a que la agricultura animal utiliza la mayor parte de la tierra cultivable mundial mientras proporciona menos calorías. La tierra que ahorras podría volver a bosques y hábitats silvestres, restaurando los ecosistemas.",
    hu: "A vegán étrendre váltással a földhasználat kb. 76%-kal csökkenthető egy átlagos mindenevő étrendhez képest. Ennek oka, hogy az állattenyésztés a világ mezőgazdasági földjeinek többségét használja, miközben kevesebb kalóriát biztosít. A megtakarított föld visszaadható erdőknek és vadvilágnak, helyreállítva az ökoszisztémákat."
  },
  quiz: {
    question: {
      en: "How much can your land use be reduced by going vegan?",
      es: "¿Cuánto se puede reducir tu uso de tierra al volverse vegano?",
      hu: "Mennyivel csökkenthető a földhasználat vegán étrendre váltással?"
    },
    options: {
      en: ["10%", "50%", "76%", "90%"],
      es: ["10%", "50%", "76%", "90%"],
      hu: ["10%", "50%", "76%", "90%"]
    },
    answer: 2
  }
},

1058: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Water footprint reduction",
    es: "Reducción de la huella hídrica",
    hu: "Vízlábnyom csökkentése"
  },
  lesson: {
    en: "Adopting a plant-based diet can cut your water footprint by roughly 50% compared to a typical omnivorous diet. Producing plant-based foods requires far less irrigation water than producing meat and dairy, helping protect freshwater resources worldwide.",
    es: "Adoptar una dieta basada en plantas puede reducir tu huella hídrica aproximadamente en un 50% en comparación con una dieta omnívora típica. Producir alimentos vegetales requiere mucha menos agua de riego que producir carne y lácteos, ayudando a proteger los recursos de agua dulce en todo el mundo.",
    hu: "A növényi alapú étrend kb. 50%-kal csökkentheti a vízlábnyomot egy átlagos mindenevő étrendhez képest. A növényi élelmiszerek előállítása sokkal kevesebb öntözővizet igényel, mint a hús és tejtermékek, segítve az édesvízi erőforrások védelmét világszerte."
  },
  quiz: {
    question: {
      en: "Approximately how much can your water use decrease by eating a vegan diet?",
      es: "¿Aproximadamente cuánto puede disminuir tu consumo de agua al seguir una dieta vegana?",
      hu: "Körülbelül mennyivel csökkenthető a vízhasználat vegán étrenddel?"
    },
    options: {
      en: ["10%", "25%", "50%", "75%"],
      es: ["10%", "25%", "50%", "75%"],
      hu: ["10%", "25%", "50%", "75%"]
    },
    answer: 2
  }
},

1059: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "GHG emission reduction by vegan diet",
    es: "Reducción de emisiones de GEI con dieta vegana",
    hu: "ÜHG-kibocsátás csökkentése vegán étrenddel"
  },
  lesson: {
    en: "Switching to a vegan diet can lower your diet-related greenhouse gas emissions by around 50–55%. For example, producing 1 kg of beef emits ~60 kg CO₂-eq, while 1 kg of lentils emits only ~0.9 kg. Over a year, this reduction is equivalent to eliminating several long car trips or short flights.",
    es: "Cambiar a una dieta vegana puede reducir tus emisiones de gases de efecto invernadero relacionadas con la alimentación en alrededor de 50–55%. Por ejemplo, producir 1 kg de carne de res emite ~60 kg CO₂-eq, mientras que 1 kg de lentejas emite solo ~0,9 kg. En un año, esta reducción equivale a eliminar varios viajes largos en coche o vuelos cortos.",
    hu: "A vegán étrendre váltás csökkentheti az étrenddel kapcsolatos üvegházhatású gázkibocsátást kb. 50–55%-kal. Például 1 kg marhahús előállítása ~60 kg CO₂-egyenértéket bocsát ki, míg 1 kg lencse csak ~0,9 kg-ot. Egy év alatt ez a csökkenés több hosszú autós út vagy rövid repülés megszüntetésének felel meg."
  },
  quiz: {
    question: {
      en: "How much can your greenhouse gas emissions be reduced by adopting a vegan diet?",
      es: "¿Cuánto se pueden reducir tus emisiones de gases de efecto invernadero al adoptar una dieta vegana?",
      hu: "Mennyivel csökkenthető az üvegházhatású gázkibocsátás vegán étrenddel?"
    },
    options: {
      en: ["10%", "25%", "50–55%", "80%"],
      es: ["10%", "25%", "50–55%", "80%"],
      hu: ["10%", "25%", "50–55%", "80%"]
    },
    answer: 2
  }
},

1060: {
  goal: "Caring for the environment & fighting climate change",
  diet: "vegan",
  title: {
    en: "Diet-related energy footprint reduction",
    es: "Reducción de la huella energética de la dieta",
    hu: "Az étrendhez kapcsolódó energiafelhasználás csökkentése"
  },
  lesson: {
    en: "Eating a plant-based diet reduces energy use and pollution from animal farming. Overall, your diet-related energy footprint can drop by roughly 30–40%, because producing plants requires less fuel for feed, transport, and housing animals, and produces less water pollution from manure and fertilizers.",
    es: "Seguir una dieta basada en plantas reduce el uso de energía y la contaminación de la ganadería. En general, tu huella energética relacionada con la alimentación puede disminuir alrededor de 30–40%, porque producir plantas requiere menos combustible para alimento, transporte y alojamiento de animales, y genera menos contaminación del agua por estiércol y fertilizantes.",
    hu: "A növényi alapú étrend csökkenti az állattenyésztésből származó energiafelhasználást és szennyezést. Összességében az étrenddel kapcsolatos energiafelhasználás kb. 30–40%-kal csökkenhet, mivel a növények előállítása kevesebb üzemanyagot igényel az takarmány, szállítás és állattartás számára, és kevesebb vízszennyezést okoz a trágya és a műtrágyák miatt."
  },
  quiz: {
    question: {
      en: "By how much can your diet-related energy footprint decrease by going vegan?",
      es: "¿En cuánto puede disminuir tu huella energética relacionada con la dieta al volverse vegano?",
      hu: "Mennyivel csökkenthető az étrendhez kapcsolódó energiafelhasználás vegán étrendre váltással?"
    },
    options: {
      en: ["10–15%", "20–25%", "30–40%", "50–60%"],
      es: ["10–15%", "20–25%", "30–40%", "50–60%"],
      hu: ["10–15%", "20–25%", "30–40%", "50–60%"]
    },
    answer: 2
  }
},

// continue








// --------------------------
// Healthy living & wellness – Omnivore
// --------------------------

2001: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Health without meat or dairy",
    es: "Salud sin carne ni lácteos",
    hu: "Egészség hús és tejtermék nélkül"
  },
  lesson: {
    en: "Is it possible to be healthy without meat or dairy? Absolutely! In fact, plants are naturally rich in essential nutrients, high in fiber, and free from harmful saturated fats found in many animal products. A balanced plant-based diet can support strong muscles, a healthy heart, and long-term wellness.",
    es: "¿Es posible estar saludable sin carne ni lácteos? ¡Absolutamente! De hecho, las plantas son naturalmente ricas en nutrientes esenciales, altas en fibra y libres de las grasas saturadas dañinas que se encuentran en muchos productos animales. Una dieta equilibrada basada en plantas puede apoyar músculos fuertes, un corazón saludable y el bienestar a largo plazo.",
    hu: "Lehetséges egészségesnek lenni hús vagy tejtermék nélkül? Teljes mértékben! A növények természetesen gazdagok alapvető tápanyagokban, magas a rosttartalmuk, és mentesek a sok állati termékben található káros telített zsíroktól. A kiegyensúlyozott növényi alapú étrend erős izmokat, egészséges szívet és hosszú távú jó közérzetet támogathat."
  },
  quiz: {  
    question: {
      en: "Which of the following is a key benefit of plant-based foods?",
      es: "¿Cuál de los siguientes es un beneficio clave de los alimentos de origen vegetal?",
      hu: "Mi a növényi alapú ételek egyik fő előnye?"
    },  
    options: {
      en: [
        "They are high in fiber and rich in nutrients",
        "They contain a lot of cholesterol",
        "They lack vitamins and minerals"
      ],
      es: [
        "Son ricos en fibra y nutrientes",
        "Contienen mucho colesterol",
        "Carecen de vitaminas y minerales"
      ],
      hu: [
        "Magas a rosttartalmuk és gazdagok tápanyagokban",
        "Sok koleszterint tartalmaznak",
        "Hiányoznak belőlük a vitaminok és ásványi anyagok"
      ]
    },
    answer: 0
  }
},

2002: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Sources of plant-based protein",
    es: "Fuentes de proteína vegetal",
    hu: "A növényi fehérje forrásai"
  },
  lesson: {
    en: "Where do plant-based proteins come from? Protein is found in a wide variety of plant foods! Legumes like lentils, chickpeas, and beans are excellent sources, as well as tofu, tempeh, seitan, quinoa, nuts, and seeds. Combining different plant proteins throughout the day provides all the essential amino acids your body needs for muscle growth and repair.",
    es: "¿De dónde provienen las proteínas vegetales? ¡La proteína se encuentra en una gran variedad de alimentos vegetales! Las legumbres como las lentejas, los garbanzos y los frijoles son excelentes fuentes, así como el tofu, el tempeh, el seitán, la quinoa, los frutos secos y las semillas. Combinar diferentes proteínas vegetales a lo largo del día proporciona todos los aminoácidos esenciales que tu cuerpo necesita para el crecimiento y reparación muscular.",
    hu: "Honnan származnak a növényi fehérjék? A fehérje számos növényi ételben megtalálható! A hüvelyesek, mint a lencse, csicseriborsó és bab, kiváló források, ahogyan a tofu, tempeh, seitan, quinoa, diófélék és magvak is. Ha a nap folyamán különböző növényi fehérjéket kombinálsz, biztosítod az összes esszenciális aminosavat, amelyre a testednek szüksége van az izmok növekedéséhez és regenerációjához."
  },
  quiz: {  
    question: {
      en: "Which of the following foods is rich in plant-based protein?",
      es: "¿Cuál de estos alimentos es rico en proteína vegetal?",
      hu: "Melyik étel gazdag növényi fehérjében?"
    },  
    options: {
      en: [
        "Apples",
        "Lentils",
        "Cucumbers"
      ],
      es: [
        "Manzanas",
        "Lentejas",
        "Pepinos"
      ],
      hu: [
        "Alma",
        "Lencse",
        "Uborka"
      ]
    },
    answer: 1
  }
},
2003: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Iron from plant foods",
    es: "El hierro en los alimentos vegetales",
    hu: "Vas növényi ételekből"
  },
  lesson: {
    en: "Can you get enough iron from plants? Absolutely! Many plant foods are rich in iron, including lentils, chickpeas, tofu, spinach, kale, pumpkin seeds, and quinoa. To improve iron absorption, it’s helpful to pair these foods with vitamin C sources such as oranges, bell peppers, or strawberries. This combination supports healthy blood flow and keeps energy levels high.",
    es: "¿Se puede obtener suficiente hierro de las plantas? ¡Por supuesto! Muchos alimentos vegetales son ricos en hierro, como las lentejas, los garbanzos, el tofu, la espinaca, la col rizada, las semillas de calabaza y la quinoa. Para mejorar la absorción del hierro, es útil combinar estos alimentos con fuentes de vitamina C como naranjas, pimientos o fresas. Esta combinación apoya una circulación saludable y mantiene altos los niveles de energía.",
    hu: "Lehetséges elegendő vashoz jutni növényi ételekből? Természetesen! Számos növényi étel gazdag vasban, például a lencse, csicseriborsó, tofu, spenót, kelkáposzta, tökmag és a quinoa. A vas felszívódását segíti, ha ezeket C-vitaminban gazdag ételekkel, például narancssal, paprikával vagy eperrel együtt fogyasztjuk. Ez a kombináció támogatja az egészséges vérkeringést és az energiaszintet."
  },
  quiz: {  
    question: {
      en: "What helps your body absorb iron from plant-based foods?",
      es: "¿Qué ayuda a tu cuerpo a absorber el hierro de los alimentos vegetales?",
      hu: "Mi segíti a vas felszívódását a növényi ételekből?"
    },  
    options: {
      en: [
        "Calcium",
        "Fiber",
        "Vitamin C"
      ],
      es: [
        "Calcio",
        "Fibra",
        "Vitamina C"
      ],
      hu: [
        "Kalcium",
        "Rost",
        "C-vitamin"
      ]
    },
    answer: 2
  }
},
2004: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Cholesterol and plant-based eating",
    es: "El colesterol y la alimentación vegetal",
    hu: "Koleszterin és növényi étrend"
  },
  lesson: {
    en: "A plant-based diet often lowers LDL (‘bad’) cholesterol because plant foods contain no cholesterol and are generally low in saturated fats. At the same time, they are rich in fiber, which helps remove excess cholesterol from the body. Healthy fats from nuts, seeds, and avocados can support HDL (‘good’) cholesterol, contributing to a balanced and heart-friendly cholesterol profile.",
    es: "Una dieta basada en plantas suele reducir el colesterol LDL (‘malo’) porque los alimentos vegetales no contienen colesterol y son bajos en grasas saturadas. Además, son ricos en fibra, lo que ayuda a eliminar el exceso de colesterol del cuerpo. Las grasas saludables de frutos secos, semillas y aguacate pueden apoyar el colesterol HDL (‘bueno’), contribuyendo a un perfil lipídico equilibrado y saludable para el corazón.",
    hu: "A növényi alapú étrend gyakran csökkenti az LDL („rossz”) koleszterinszintet, mivel a növényi ételek nem tartalmaznak koleszterint és általában alacsony a telített zsírtartalmuk. Emellett gazdagok rostban, ami segít eltávolítani a felesleges koleszterint a szervezetből. A diófélékből, magvakból és avokádóból származó egészséges zsírok támogatják a HDL („jó”) koleszterint, elősegítve a szívbarát egyensúlyt."
  },
  quiz: {  
    question: {
      en: "Why does a plant-based diet often lower LDL (‘bad’) cholesterol?",
      es: "¿Por qué una dieta vegetal suele reducir el colesterol LDL (‘malo’)?",
      hu: "Miért csökkenti gyakran a növényi étrend az LDL („rossz”) koleszterint?"
    },  
    options: {
      en: [
        "Plant foods contain no cholesterol and less saturated fat",
        "Plant foods increase cholesterol production",
        "Plant foods are high in trans fats"
      ],
      es: [
        "Los alimentos vegetales no contienen colesterol y tienen menos grasas saturadas",
        "Los alimentos vegetales aumentan la producción de colesterol",
        "Los alimentos vegetales son ricos en grasas trans"
      ],
      hu: [
        "A növényi ételek nem tartalmaznak koleszterint és kevesebb telített zsírt tartalmaznak",
        "A növényi ételek növelik a koleszterintermelést",
        "A növényi ételek sok transzzsírt tartalmaznak"
      ]
    },
    answer: 0
  }
},
2005: {  
  goal: "Healthy living & wellness",  
  diet: "omnivore",  
  title: {
    en: "Chronic diseases and lifestyle choices",
    es: "Enfermedades crónicas y estilo de vida",
    hu: "Krónikus betegségek és életmód"
  },
  lesson: {
    en: "Around 70% of global deaths are caused by chronic diseases such as heart disease, stroke, diabetes, and certain cancers. These conditions are strongly linked to lifestyle factors including diet, physical inactivity, smoking, and stress. The encouraging news is that up to 80% of these cases can be prevented through healthier habits — eating more whole plant foods, staying active, avoiding tobacco, and managing stress. Small daily choices can lead to longer, healthier lives.",
    es: "Alrededor del 70% de las muertes a nivel mundial son causadas por enfermedades crónicas como las enfermedades cardíacas, los accidentes cerebrovasculares, la diabetes y ciertos tipos de cáncer. Estas condiciones están estrechamente relacionadas con factores del estilo de vida como la alimentación, la inactividad física, el tabaquismo y el estrés. La buena noticia es que hasta el 80% de estos casos pueden prevenirse mediante hábitos más saludables — comer más alimentos vegetales integrales, mantenerse activo, evitar el tabaco y gestionar el estrés. Las pequeñas decisiones diarias pueden conducir a una vida más larga y saludable.",
    hu: "A globális halálesetek körülbelül 70%-át krónikus betegségek okozzák, mint a szívbetegségek, a stroke, a cukorbetegség és bizonyos daganatok. Ezek szorosan összefüggnek az életmódbeli tényezőkkel, például az étrenddel, a mozgáshiánnyal, a dohányzással és a stresszel. A biztató hír, hogy ezek akár 80%-a megelőzhető egészségesebb szokásokkal — több teljes értékű növényi étel fogyasztásával, rendszeres mozgással, a dohányzás kerülésével és a stressz kezelésével. A mindennapi apró döntések hosszabb és egészségesebb élethez vezetnek."
  },
  quiz: {  
    question: {
      en: "What percentage of global deaths are caused by chronic diseases?",
      es: "¿Qué porcentaje de las muertes globales son causadas por enfermedades crónicas?",
      hu: "A globális halálesetek hány százalékát okozzák krónikus betegségek?"
    },  
    options: {
      en: [
        "About 70%",
        "About 30%",
        "About 10%"
      ],
      es: [
        "Alrededor del 70%",
        "Alrededor del 30%",
        "Alrededor del 10%"
      ],
      hu: [
        "Körülbelül 70%",
        "Körülbelül 30%",
        "Körülbelül 10%"
      ]
    },
    answer: 0
  }
},

2006: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Healthy carbohydrates",
    es: "Carbohidratos saludables",
    hu: "Egészséges szénhidrátok"
  },
  lesson: {
    en: "Will you gain weight because of carbohydrates or become malnourished from a lack of calories without meat? Neither! Whole plant foods provide balanced energy without the excess calories or unhealthy fats found in many processed animal products. Carbohydrates from fruits, grains, and vegetables fuel your brain and muscles efficiently. When you eat a variety of whole foods, it’s easy to meet your energy needs and maintain a healthy weight.",
    es: "¿Aumentarás de peso por los carbohidratos o te desnutrirás por la falta de calorías sin carne? ¡Ninguno! Los alimentos vegetales enteros proporcionan energía equilibrada sin las calorías excesivas ni las grasas poco saludables que se encuentran en muchos productos animales procesados. Los carbohidratos de frutas, cereales y verduras alimentan tu cerebro y músculos de manera eficiente. Cuando comes una variedad de alimentos completos, es fácil satisfacer tus necesidades energéticas y mantener un peso saludable.",
    hu: "Hízni fogsz a szénhidrátoktól, vagy hiányt szenvedsz kalóriából hús nélkül? Egyik sem! A teljes növényi ételek kiegyensúlyozott energiát biztosítanak anélkül, hogy a feldolgozott állati termékek túlzott kalóriáit vagy egészségtelen zsírokat adnák. A gyümölcsök, gabonák és zöldségek szénhidrátjai hatékonyan táplálják az agyat és az izmokat. Ha változatos teljes ételeket eszel, könnyen fedezheted az energiád és megtarthatod az egészséges testsúlyt."
  },
  quiz: {
    question: {
      en: "What do healthy carbohydrates mainly provide for your body?",
      es: "¿Qué proporcionan principalmente los carbohidratos saludables a tu cuerpo?",
      hu: "Mit biztosítanak elsősorban az egészséges szénhidrátok a tested számára?"
    },
    options: {
      en: ["Excess fat storage", "Energy for the brain and muscles", "No nutritional value"],
      es: ["Almacenamiento excesivo de grasa", "Energía para el cerebro y los músculos", "Sin valor nutricional"],
      hu: ["Túlzott zsírraktározás", "Energia az agynak és az izmoknak", "Nincs tápértéke"]
    },
    answer: 1
  }
},

2007: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Plant-based vs meat protein",
    es: "Proteína vegetal vs proteína animal",
    hu: "Növényi és állati fehérje összehasonlítás"
  },
  lesson: {
    en: "How does plant-based protein compare to meat? Let’s compare textured soy (100g dry) to chicken breast (100g raw):\n\n- Calories: Textured soy ~336 kcal | Chicken breast ~165 kcal\n- Protein: Textured soy ~52g | Chicken breast ~31g\n- Calcium: Textured soy ~350mg | Chicken breast ~13mg\n- Iron: Textured soy ~15mg | Chicken breast ~1mg\n- Fat: Textured soy ~0.5g | Chicken breast ~3.6g\n\nTextured soy is very high in protein, rich in calcium and iron, and low in fat. Chicken provides protein with moderate fat but very little calcium or iron.",
    es: "¿Cómo se compara la proteína vegetal con la carne? Comparando soja texturizada (100 g seca) con pechuga de pollo (100 g cruda):\n\n- Calorías: soja texturizada ~336 kcal | pechuga de pollo ~165 kcal\n- Proteína: soja texturizada ~52 g | pechuga de pollo ~31 g\n- Calcio: soja texturizada ~350 mg | pechuga de pollo ~13 mg\n- Hierro: soja texturizada ~15 mg | pechuga de pollo ~1 mg\n- Grasa: soja texturizada ~0,5 g | pechuga de pollo ~3,6 g\n\nLa soja texturizada es muy alta en proteínas, rica en calcio y hierro, y baja en grasa. El pollo proporciona proteínas con grasa moderada pero muy poco calcio o hierro.",
    hu: "Hogyan viszonyul a növényi fehérje a húshoz? Hasonlítsuk össze a texturált szóját (100 g száraz) a csirkemellel (100 g nyers):\n\n- Kalória: szójatextúra ~336 kcal | csirkemell ~165 kcal\n- Fehérje: szójatextúra ~52 g | csirkemell ~31 g\n- Kalcium: szójatextúra ~350 mg | csirkemell ~13 mg\n- Vas: szójatextúra ~15 mg | csirkemell ~1 mg\n- Zsír: szójatextúra ~0,5 g | csirkemell ~3,6 g\n\nA texturált szója nagyon magas fehérjetartalmú, gazdag kalciumban és vasban, és alacsony zsírtartalmú. A csirke fehérjét biztosít mérsékelt zsírral, de nagyon kevés kalciummal és vassal."
  },
  quiz: {
    question: {
      en: "Which protein source is richer in calcium and iron?",
      es: "¿Qué fuente de proteína es más rica en calcio y hierro?",
      hu: "Melyik fehérjeforrás gazdagabb kalciumban és vasban?"
    },
    options: {
      en: ["Chicken breast", "Textured soy", "Both are the same"],
      es: ["Pechuga de pollo", "Soja texturizada", "Ambas son iguales"],
      hu: ["Csirkemell", "Texturált szója", "Mindkettő ugyanaz"]
    },
    answer: 1
  }
},

2008: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Plaques and blood pressure",
    es: "Placas y presión arterial",
    hu: "Plakkok és vérnyomás"
  },
  lesson: {
    en: "What causes plaques and high blood pressure? Plaques form when cholesterol and saturated fats build up inside your arteries, narrowing them and making it harder for blood to flow. This can lead to high blood pressure and heart disease over time. Diets rich in fruits, vegetables, whole grains, and legumes help prevent plaque buildup thanks to their fiber, antioxidants, and lack of cholesterol. A plant-forward diet keeps your arteries flexible and your heart strong.",
    es: "¿Qué causa placas y presión arterial alta? Las placas se forman cuando el colesterol y las grasas saturadas se acumulan dentro de las arterias, estrechándolas y dificultando el flujo sanguíneo. Esto puede conducir a hipertensión y enfermedades cardíacas con el tiempo. Las dietas ricas en frutas, verduras, granos integrales y legumbres ayudan a prevenir la acumulación de placas gracias a su fibra, antioxidantes y ausencia de colesterol. Una dieta basada en plantas mantiene tus arterias flexibles y tu corazón fuerte.",
    hu: "Mi okozza a plakkokat és a magas vérnyomást? A plakkok akkor képződnek, amikor a koleszterin és a telített zsírok felhalmozódnak az artériáidban, szűkítve azokat és megnehezítve a vér áramlását. Ez hosszú távon magas vérnyomáshoz és szívbetegségekhez vezethet. A gyümölcsökben, zöldségekben, teljes kiőrlésű gabonákban és hüvelyesekben gazdag étrend segít megelőzni a plakk felhalmozódását a rostok, antioxidánsok és a koleszterin hiánya miatt. A növényközpontú étrend rugalmasan tartja az artériákat és erősíti a szívet."
  },
  quiz: {
    question: {
      en: "What mainly causes plaque buildup in the arteries?",
      es: "¿Qué causa principalmente la acumulación de placas en las arterias?",
      hu: "Mi okozza elsősorban az artériákban a plakk felhalmozódást?"
    },
    options: {
      en: ["Fiber and antioxidants", "Water and vitamins", "Cholesterol and saturated fats"],
      es: ["Fibra y antioxidantes", "Agua y vitaminas", "Colesterol y grasas saturadas"],
      hu: ["Rost és antioxidánsok", "Víz és vitaminok", "Koleszterin és telített zsírok"]
    },
    answer: 2
  }
},

2009: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Heart health habits",
    es: "Hábitos para un corazón saludable",
    hu: "Szív egészségét támogató szokások"
  },
  lesson: {
    en: "How can you keep your heart healthy? Your heart thrives on movement and nourishment from whole plant foods. Fruits, vegetables, nuts, seeds, and whole grains support strong circulation and reduce inflammation. Fiber helps keep your cholesterol low, while antioxidants protect your arteries from damage. Combined with regular exercise and good sleep, a balanced vegan or plant-forward diet keeps your heart vibrant and resilient.",
    es: "¿Cómo puedes mantener tu corazón saludable? Tu corazón prospera con el movimiento y la nutrición de alimentos vegetales completos. Frutas, verduras, nueces, semillas y granos integrales apoyan una circulación fuerte y reducen la inflamación. La fibra ayuda a mantener bajo el colesterol, mientras que los antioxidantes protegen las arterias del daño. Combinado con ejercicio regular y buen sueño, una dieta vegana o basada en plantas equilibrada mantiene tu corazón vibrante y resistente.",
    hu: "Hogyan tarthatod egészségesen a szíved? A szív a mozgásból és a teljes növényi ételek tápanyagából fejlődik. A gyümölcsök, zöldségek, magvak, magok és teljes kiőrlésű gabonák támogatják az erős vérkeringést és csökkentik a gyulladást. A rost alacsonyan tartja a koleszterint, az antioxidánsok védik az artériákat a károsodástól. A rendszeres testmozgással és jó alvással kombinálva a kiegyensúlyozott vegán vagy növényközpontú étrend élénk és ellenálló szívet biztosít."
  },
  quiz: {
    question: {
      en: "Which habit best supports a healthy heart?",
      es: "¿Qué hábito apoya mejor un corazón saludable?",
      hu: "Melyik szokás támogatja legjobban a szív egészségét?"
    },
    options: {
      en: ["Eating whole plant foods and exercising regularly", "Eating processed meats and avoiding physical activity", "Consuming more salt and sugar"],
      es: ["Comer alimentos vegetales completos y hacer ejercicio regularmente", "Comer carnes procesadas y evitar la actividad física", "Consumir más sal y azúcar"],
      hu: ["Teljes növényi ételek fogyasztása és rendszeres testmozgás", "Feldolgozott húsok fogyasztása és a testmozgás kerülése", "Több só és cukor fogyasztása"]
    },
    answer: 0
  }
},

2010: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Gut health and fiber",
    es: "Salud intestinal y fibra",
    hu: "Bél egészség és rost"
  },
  lesson: {
    en: "How does a plant-based diet affect your digestion and gut health? Plants are full of fiber, which feeds the beneficial bacteria living in your gut — your microbiome. A diverse, fiber-rich diet helps these bacteria thrive, improving digestion, nutrient absorption, and even your mood and immunity. In contrast, diets high in animal products and low in fiber can lead to inflammation and digestive problems.",
    es: "¿Cómo afecta la dieta basada en plantas a tu digestión y salud intestinal? Las plantas están llenas de fibra, que alimenta a las bacterias beneficiosas de tu intestino, tu microbioma. Una dieta diversa y rica en fibra ayuda a estas bacterias a prosperar, mejorando la digestión, la absorción de nutrientes e incluso tu estado de ánimo e inmunidad. En contraste, las dietas altas en productos animales y bajas en fibra pueden provocar inflamación y problemas digestivos.",
    hu: "Hogyan befolyásolja a növényi étrend az emésztést és a bél egészségét? A növények tele vannak rosttal, ami táplálja a bélben élő hasznos baktériumokat — a mikrobiomodat. A változatos, rostban gazdag étrend segít ezeknek a baktériumoknak virágozni, javítja az emésztést, a tápanyagfelszívódást, sőt a hangulatot és az immunitást is. Ezzel szemben az állati termékekben gazdag, rostszegény étrend gyulladáshoz és emésztési problémákhoz vezethet."
  },
  quiz: {
    question: {
      en: "What helps beneficial gut bacteria thrive?",
      es: "¿Qué ayuda a prosperar a las bacterias intestinales beneficiosas?",
      hu: "Mi segíti a hasznos bélbaktériumok növekedését?"
    },
    options: {
      en: ["High-fat animal products", "Refined sugar", "Fiber from plant foods"],
      es: ["Productos animales con alto contenido de grasa", "Azúcar refinada", "Fibra de alimentos vegetales"],
      hu: ["Magas zsírtartalmú állati termékek", "Finomított cukor", "Növényi ételekből származó rost"]
    },
    answer: 2
  }
},

 2011: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Plant-based dairy alternatives",
    es: "Alternativas lácteas vegetales",
    hu: "Növényi alapú tejhelyettesítők"
  },
  lesson: {
    en: "Are dairy products actually healthier than meat? Not necessarily. While dairy provides protein and calcium, it also contains saturated fats and cholesterol, similar to many meats. Plant-based alternatives like fortified oat, soy, or almond milk can provide calcium and vitamin D without the harmful saturated fats. Choosing plant-forward options reduces your risk of heart disease and supports overall wellness, while still giving you essential nutrients.",
    es: "¿Son los productos lácteos realmente más saludables que la carne? No necesariamente. Aunque los lácteos aportan proteínas y calcio, también contienen grasas saturadas y colesterol, al igual que muchas carnes. Las alternativas vegetales, como la leche de avena, soja o almendra fortificada, pueden proporcionar calcio y vitamina D sin las grasas saturadas dañinas. Elegir opciones basadas en plantas reduce el riesgo de enfermedades cardíacas y apoya el bienestar general, al mismo tiempo que aporta nutrientes esenciales.",
    hu: "Valóban egészségesebbek a tejtermékek, mint a hús? Nem feltétlenül. Bár a tejtermékek fehérjét és kalciumot biztosítanak, telített zsírokat és koleszterint is tartalmaznak, hasonlóan sok húshoz. A megerősített zab-, szója- vagy mandulatej növényi alternatívák kalciumot és D-vitamint biztosítanak a káros telített zsírok nélkül. A növényközpontú választások csökkentik a szívbetegségek kockázatát és támogatják az általános jólétet, miközben alapvető tápanyagokat biztosítanak."
  },
  quiz: {
    question: {
      en: "Why might plant-based dairy alternatives be considered healthier than regular dairy?",
      es: "¿Por qué las alternativas lácteas vegetales pueden considerarse más saludables que los lácteos normales?",
      hu: "Miért tekinthetők egészségesebbnek a növényi tejhelyettesítők, mint a hagyományos tejtermékek?"
    },
    options: {
      en: [
        "They provide essential nutrients without harmful saturated fats",
        "They contain more cholesterol",
        "They are higher in saturated fat"
      ],
      es: [
        "Proporcionan nutrientes esenciales sin grasas saturadas dañinas",
        "Contienen más colesterol",
        "Tienen más grasas saturadas"
      ],
      hu: [
        "Alapvető tápanyagokat biztosítanak káros telített zsírok nélkül",
        "Több koleszterint tartalmaznak",
        "Több telített zsírt tartalmaznak"
      ]
    },
    answer: 0
  }
},

2012: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Blue Zones",
    es: "Zonas Azules",
    hu: "Kék zónák"
  },
  lesson: {
    en: "What are Blue Zones and what can we learn from them? Blue Zones are regions around the world where people live significantly longer and healthier lives, such as Okinawa (Japan), Sardinia (Italy), and Nicoya (Costa Rica). A common factor in these populations is a diet rich in plant foods — beans, vegetables, fruits, whole grains, nuts — with limited meat and dairy. Their eating habits, combined with daily movement, strong social connections, and purposeful living, contribute to their longevity and reduced risk of chronic diseases.",
    es: "¿Qué son las Zonas Azules y qué podemos aprender de ellas? Las Zonas Azules son regiones del mundo donde las personas viven significativamente más tiempo y con mejor salud, como Okinawa (Japón), Cerdeña (Italia) y Nicoya (Costa Rica). Un factor común en estas poblaciones es una dieta rica en alimentos vegetales — frijoles, verduras, frutas, granos enteros, nueces — con carne y lácteos limitados. Sus hábitos alimenticios, combinados con movimiento diario, fuertes conexiones sociales y vida con propósito, contribuyen a su longevidad y menor riesgo de enfermedades crónicas.",
    hu: "Mik azok a Kék zónák és mit tanulhatunk belőlük? A Kék zónák a világ olyan régiói, ahol az emberek jelentősen tovább és egészségesebben élnek, például Okinawa (Japán), Szardínia (Olaszország) és Nicoya (Costa Rica). Ezeknél a populációknál a közös tényező a növényi ételekben gazdag étrend — bab, zöldségek, gyümölcsök, teljes kiőrlésű gabonák, magvak — korlátozott hús- és tejtermék-fogyasztással. Étkezési szokásaik, a napi mozgás, erős társas kapcsolatok és célorientált életmód hozzájárul hosszú életükhöz és a krónikus betegségek alacsonyabb kockázatához."
  },
  quiz: {
    question: {
      en: "What is a common feature of diets in Blue Zones?",
      es: "¿Cuál es una característica común de las dietas en las Zonas Azules?",
      hu: "Mi a közös jellemzője a Kék zónák étrendjének?"
    },
    options: {
      en: [
        "High amounts of red meat and processed foods",
        "Mostly plant-based foods with limited meat and dairy",
        "Low in vegetables and fruits"
      ],
      es: [
        "Grandes cantidades de carne roja y alimentos procesados",
        "Principalmente alimentos vegetales con carne y lácteos limitados",
        "Bajos en verduras y frutas"
      ],
      hu: [
        "Sok vörös hús és feldolgozott élelmiszer",
        "Többnyire növényi alapú ételek, kevés hús- és tejtermék",
        "Kevés zöldség és gyümölcs"
      ]
    },
    answer: 1
  }
},

2013: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Calcium without dairy",
    es: "Calcio sin lácteos",
    hu: "Kalcium tej nélkül"
  },
  lesson: {
    en: "How can you get enough calcium without dairy? Many plant foods are excellent sources of calcium, including tofu, tempeh, almonds, chia seeds, sesame seeds, broccoli, and leafy greens like kale and bok choy. Fortified plant milks and juices also help meet your daily needs. Eating a variety of these foods, combined with regular exercise like walking or strength training, keeps your bones strong and supports long-term health.",
    es: "¿Cómo puedes obtener suficiente calcio sin lácteos? Muchos alimentos vegetales son excelentes fuentes de calcio, incluyendo tofu, tempeh, almendras, semillas de chía, semillas de sésamo, brócoli y verduras de hoja como kale y bok choy. Las leches y jugos vegetales fortificados también ayudan a cubrir tus necesidades diarias. Comer una variedad de estos alimentos, combinado con ejercicio regular como caminar o entrenamiento de fuerza, mantiene tus huesos fuertes y apoya la salud a largo plazo.",
    hu: "Hogyan juthatsz elegendő kalciumhoz tejtermék nélkül? Sok növényi étel kiváló kalciumforrás, például tofu, tempeh, mandula, chia mag, szezámmag, brokkoli és leveles zöldek, mint a kelkáposzta és a bok choy. A megerősített növényi tejek és gyümölcslevek is segítenek a napi szükséglet fedezésében. Ezeknek az ételeknek a változatos fogyasztása, rendszeres testmozgással, például sétával vagy erőedzéssel kombinálva erős csontokat és hosszú távú egészséget biztosít."
  },
  quiz: {
    question: {
      en: "Which of the following plant foods is rich in calcium?",
      es: "¿Cuál de los siguientes alimentos vegetales es rico en calcio?",
      hu: "Melyik növényi étel gazdag kalciumban?"
    },
    options: {
      en: ["Tofu", "Potato", "Apple"],
      es: ["Tofu", "Patata", "Manzana"],
      hu: ["Tofu", "Burgonya", "Alma"]
    },
    answer: 0
  }
},

2014: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Vitamin B12",
    es: "Vitamina B12",
    hu: "B12-vitamin"
  },
  lesson: {
    en: "Why is vitamin B12 important and how can you get it on a plant-forward diet? Vitamin B12 is essential for healthy nerves, red blood cells, and energy levels. It is naturally produced by bacteria, not by plants or animals. In modern farming, animals are often supplemented with B12 because natural bacterial sources are limited, so meat and dairy aren’t guaranteed to provide enough either. Plant-based eaters can reliably get B12 from fortified foods like plant milks, breakfast cereals, nutritional yeast, or supplements, ensuring they stay energized and healthy.",
    es: "¿Por qué es importante la vitamina B12 y cómo obtenerla con una dieta basada en plantas? La B12 es esencial para los nervios, los glóbulos rojos y los niveles de energía. Se produce naturalmente por bacterias, no por plantas o animales. En la agricultura moderna, a menudo se suplementa a los animales con B12 porque las fuentes bacterianas naturales son limitadas, por lo que la carne y los lácteos tampoco garantizan suficiente B12. Los consumidores de alimentos vegetales pueden obtener B12 de manera confiable de alimentos fortificados como leches vegetales, cereales, levadura nutricional o suplementos, asegurando energía y salud.",
    hu: "Miért fontos a B12-vitamin és hogyan szerezhető növényközpontú étrenddel? A B12-vitamin elengedhetetlen az egészséges idegekhez, vörösvérsejtekhez és energiaszinthez. Természetesen baktériumok termelik, nem növények vagy állatok. A modern állattenyésztésben az állatokat gyakran B12-vel kiegészítik, mert a természetes baktériumforrások korlátozottak, így a hús és a tej sem biztosít elegendőt. A növényi étrendet követők megbízhatóan juthatnak B12-höz megerősített ételekből, például növényi tejekből, reggeli gabonákból, táplálékkiegészítő élesztőből vagy kiegészítőkből, így energikusak és egészségesek maradnak."
  },
  quiz: {
    question: {
      en: "Why do plant-based eaters need fortified foods or supplements for B12?",
      es: "¿Por qué los consumidores de plantas necesitan alimentos fortificados o suplementos para B12?",
      hu: "Miért van szüksége a növényi étrendet követőknek megerősített ételekre vagy kiegészítőkre B12-ből?"
    },
    options: {
      en: ["Plants naturally contain enough B12", "B12 comes from bacteria, not plants", "Animals always provide sufficient B12"],
      es: ["Las plantas contienen suficiente B12 naturalmente", "La B12 proviene de bacterias, no de plantas", "Los animales siempre proporcionan suficiente B12"],
      hu: ["A növények természetesen elegendő B12-t tartalmaznak", "A B12 baktériumoktól származik, nem növényektől", "Az állatok mindig elegendő B12-t biztosítanak"]
    },
    answer: 1
  }
},

2015: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Healthy fats",
    es: "Grasas saludables",
    hu: "Egészséges zsírok"
  },
  lesson: {
    en: "Why are healthy fats important and where can you get them? Fats are essential for brain function, hormone production, and heart health. Plant-based sources like avocados, nuts, seeds, and olive oil provide beneficial monounsaturated and polyunsaturated fats. Omega-3 fatty acids, important for the heart and brain, can be found in flaxseeds, chia seeds, hemp seeds, and walnuts. Incorporating these fats into your diet supports energy, reduces inflammation, and keeps your heart strong.",
    es: "¿Por qué son importantes las grasas saludables y dónde puedes obtenerlas? Las grasas son esenciales para la función cerebral, la producción de hormonas y la salud del corazón. Las fuentes vegetales como aguacates, nueces, semillas y aceite de oliva proporcionan grasas monoinsaturadas y poliinsaturadas beneficiosas. Los ácidos grasos omega-3, importantes para el corazón y el cerebro, se encuentran en semillas de lino, chía, cáñamo y nueces. Incorporar estas grasas en tu dieta apoya la energía, reduce la inflamación y mantiene tu corazón fuerte.",
    hu: "Miért fontosak az egészséges zsírok és honnan szerezhetők? A zsírok elengedhetetlenek az agyműködéshez, hormontermeléshez és a szív egészségéhez. A növényi források, például avokádó, magvak, olajbogyó és olívaolaj hasznos egyszeresen és többszörösen telítetlen zsírokat biztosítanak. Az omega-3 zsírsavak, amelyek fontosak a szív és az agy számára, megtalálhatók lenmagban, chia magban, kendermagban és dióban. Ezeknek a zsíroknak az étrendbe illesztése energiát biztosít, csökkenti a gyulladást és erősíti a szívet."
  },
  quiz: {
    question: {
      en: "Which of the following plant foods is rich in omega-3 fatty acids?",
      es: "¿Cuál de los siguientes alimentos vegetales es rico en ácidos grasos omega-3?",
      hu: "Melyik növényi étel gazdag omega-3 zsírsavakban?"
    },
    options: {
      en: ["Flaxseeds", "Bananas", "Potatoes"],
      es: ["Semillas de lino", "Plátanos", "Patatas"],
      hu: ["Lenmag", "Banán", "Burgonya"]
    },
    answer: 0
  }
}, 

2016: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Soy and hormones",
    es: "Soja y hormonas",
    hu: "Szója és hormonok"
  },
  lesson: {
    en: "Does soy affect your hormones? Soy contains compounds called phytoestrogens, which are plant-based molecules that can mimic estrogen in the body, but much more weakly than human estrogen. Research shows that moderate consumption of soy foods like tofu, tempeh, and soy milk is safe for most people and does not negatively affect hormone levels. In fact, soy can be part of a heart-healthy and balanced diet.",
    es: "¿La soja afecta tus hormonas? La soja contiene compuestos llamados fitoestrógenos, que son moléculas de origen vegetal que pueden imitar el estrógeno en el cuerpo, pero mucho más débilmente que el estrógeno humano. La investigación muestra que el consumo moderado de alimentos de soja como el tofu, tempeh y la leche de soja es seguro para la mayoría de las personas y no afecta negativamente los niveles hormonales. De hecho, la soja puede formar parte de una dieta equilibrada y saludable para el corazón.",
    hu: "A szója befolyásolja a hormonjaidat? A szója fitoösztrogéneket tartalmaz, amelyek növényi molekulák, és képesek utánozni az ösztrogént a testben, de sokkal gyengébben, mint a humán ösztrogén. Kutatások szerint a szójaételek, például tofu, tempeh és szójatej mérsékelt fogyasztása a legtöbb ember számára biztonságos, és nem befolyásolja hátrányosan a hormonokat. Valójában a szója része lehet egy szívbarát és kiegyensúlyozott étrendnek."
  },
  quiz: {
    question: {
      en: "What are the plant compounds in soy that can mimic estrogen?",
      es: "¿Cuáles son los compuestos vegetales en la soja que pueden imitar el estrógeno?",
      hu: "Mely növényi vegyületek képesek utánozni az ösztrogént a szójában?"
    },
    options: {
      en: ["Saturated fats", "Phytoestrogens", "Cholesterol"],
      es: ["Grasas saturadas", "Fitoestrógenos", "Colesterol"],
      hu: ["Telített zsírok", "Fitoösztrogének", "Koleszterin"]
    },
    answer: 1
  }
},

2017: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Human teeth and diet",
    es: "Dientes humanos y dieta",
    hu: "Az emberi fogak és étrend"
  },
  lesson: {
    en: "Do our canines prove we are meant to eat meat? Not really. While humans do have small canine teeth, they are nothing like the sharp, long canines of carnivores like lions or wolves, which are designed for tearing flesh. Human teeth are more suited for grinding and chewing a variety of foods, especially plant-based ones. Our digestive system is also much longer than carnivores’, which helps process fiber-rich plants. This suggests humans are naturally adapted to a mixed or plant-forward diet, rather than being strict carnivores.",
    es: "¿Nuestros colmillos demuestran que estamos hechos para comer carne? No realmente. Aunque los humanos tenemos colmillos pequeños, no se parecen en nada a los largos y afilados colmillos de carnívoros como leones o lobos, diseñados para desgarrar carne. Los dientes humanos son más adecuados para moler y masticar una variedad de alimentos, especialmente vegetales. Nuestro sistema digestivo también es mucho más largo que el de los carnívoros, lo que ayuda a procesar plantas ricas en fibra. Esto sugiere que los humanos estamos naturalmente adaptados a una dieta mixta o basada en plantas, no a una dieta estrictamente carnívora.",
    hu: "Bizonyítják a szemfogaink, hogy húst kell ennünk? Nem igazán. Bár az embereknek vannak kis szemfogai, ezek egyáltalán nem hasonlítanak a ragadozók, például oroszlánok vagy farkasok hosszú, éles szemfogaikhoz, amelyek a hús tépésére szolgálnak. Az emberi fogak inkább különféle ételek, főként növényi alapúak őrlésére és rágására alkalmasak. Az emésztőrendszerünk is sokkal hosszabb, mint a ragadozóké, ami segít a rostban gazdag növények feldolgozásában. Ez arra utal, hogy az emberek természetesen kevert vagy növényközpontú étrendre vannak adaptálódva, nem szigorúan húsevő étrendre."
  },
  quiz: {
    question: {
      en: "What do human canines suggest about our natural diet?",
      es: "¿Qué sugieren los colmillos humanos sobre nuestra dieta natural?",
      hu: "Mit sugallnak az emberi szemfogak a természetes étrendről?"
    },
    options: {
      en: [
        "Humans are strict carnivores",
        "Humans cannot digest plants",
        "Humans are adapted for a mixed or plant-forward diet"
      ],
      es: [
        "Los humanos son carnívoros estrictos",
        "Los humanos no pueden digerir plantas",
        "Los humanos están adaptados a una dieta mixta o basada en plantas"
      ],
      hu: [
        "Az emberek szigorúan húsevők",
        "Az emberek nem tudnak növényeket emészteni",
        "Az emberek kevert vagy növényközpontú étrendre vannak adaptálódva"
      ]
    },
    answer: 2
  }
},

2018: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Stomach acidity and diet",
    es: "Acidez estomacal y dieta",
    hu: "Gyomorsavasság és étrend"
  },
  lesson: {
    en: "What does stomach acidity tell us about our diet? Carnivores have very acidic stomachs to break down meat and kill bacteria, while humans have moderately acidic stomachs. This acidity is enough to digest protein efficiently but not as extreme as strict meat-eaters. Our longer intestines are better suited for breaking down fiber from plants. This shows that humans are naturally adapted to a mixed diet with plenty of plant foods, rather than a meat-only diet.",
    es: "¿Qué nos dice la acidez estomacal sobre nuestra dieta? Los carnívoros tienen estómagos muy ácidos para descomponer la carne y matar bacterias, mientras que los humanos tenemos estómagos moderadamente ácidos. Esta acidez es suficiente para digerir proteínas de manera eficiente, pero no tan extrema como la de los carnívoros estrictos. Nuestros intestinos más largos están mejor adaptados a descomponer la fibra de las plantas. Esto muestra que los humanos estamos naturalmente adaptados a una dieta mixta con muchas plantas, en lugar de solo carne.",
    hu: "Mit mond el a gyomorsavasság az étrendünkről? A ragadozóknak nagyon savas a gyomruk a hús lebontására és a baktériumok elpusztítására, míg az emberek mérsékelten savas gyomorral rendelkeznek. Ez a savasság elegendő a fehérjék hatékony emésztéséhez, de nem olyan extrém, mint a szigorúan húsevők esetében. A hosszabb bélrendszerünk jobban alkalmas a növényi rostok lebontására. Ez azt mutatja, hogy az emberek természetesen kevert étrendre, sok növénnyel vannak adaptálódva, nem kizárólag húsra."
  },
  quiz: {
    question: {
      en: "What does human stomach acidity suggest about our natural diet?",
      es: "¿Qué sugiere la acidez estomacal humana sobre nuestra dieta natural?",
      hu: "Mit sugall az emberi gyomorsavasság a természetes étrendről?"
    },
    options: {
      en: [
        "We are adapted to a mixed diet with plenty of plant foods",
        "We are strict carnivores",
        "We can only digest meat"
      ],
      es: [
        "Estamos adaptados a una dieta mixta con muchas plantas",
        "Somos carnívoros estrictos",
        "Solo podemos digerir carne"
      ],
      hu: [
        "Kevert étrendre vagyunk adaptálódva, sok növénnyel",
        "Szigorúan húsevők vagyunk",
        "Csak húst tudunk emészteni"
      ]
    },
    answer: 0
  }
},

2019: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Whole vs processed foods",
    es: "Alimentos enteros vs procesados",
    hu: "Teljes vs feldolgozott ételek"
  },
  lesson: {
    en: "Are plant-based foods ultra-processed? Not usually. Whole plant foods like fruits, vegetables, beans, nuts, and whole grains are minimally processed and full of nutrients. In contrast, many meat and dairy products we consume today are highly processed, often containing added salt, sugars, preservatives, and unhealthy fats. Eating more whole, plant-based foods and fewer ultra-processed animal products supports better health, more energy, and lower risk of chronic diseases.",
    es: "¿Son los alimentos vegetales ultraprocesados? No generalmente. Los alimentos vegetales enteros, como frutas, verduras, frijoles, nueces y granos enteros, están mínimamente procesados y llenos de nutrientes. En contraste, muchos productos de carne y lácteos que consumimos hoy están muy procesados, a menudo contienen sal, azúcares, conservantes y grasas no saludables. Comer más alimentos vegetales enteros y menos productos animales ultraprocesados apoya mejor la salud, más energía y menor riesgo de enfermedades crónicas.",
    hu: "A növényi ételek ultrafeldolgozottak? Általában nem. A teljes növényi ételek, például gyümölcsök, zöldségek, bab, magvak és teljes kiőrlésű gabonák minimálisan feldolgozottak és tápanyagokban gazdagok. Ezzel szemben a mai hús- és tejtermékek nagy része erősen feldolgozott, gyakran hozzáadott sót, cukrot, tartósítószereket és egészségtelen zsírokat tartalmaz. Több teljes növényi étel és kevesebb ultrafeldolgozott állati termék fogyasztása jobb egészséget, több energiát és alacsonyabb krónikus betegség kockázatot támogat."
  },
  quiz: {
    question: {
      en: "Which of the following is usually minimally processed and nutrient-rich?",
      es: "¿Cuál de los siguientes alimentos generalmente está mínimamente procesado y es rico en nutrientes?",
      hu: "Melyik az alábbiak közül általában minimálisan feldolgozott és tápanyagokban gazdag?"
    },
    options: {
      en: [
        "Processed meats and cheeses",
        "Whole plant foods like beans and vegetables",
        "Packaged sugary snacks"
      ],
      es: [
        "Carnes y quesos procesados",
        "Alimentos vegetales enteros como frijoles y verduras",
        "Bocadillos azucarados envasados"
      ],
      hu: [
        "Feldolgozott húsok és sajtok",
        "Teljes növényi ételek, pl. bab és zöldségek",
        "Csomagolt cukros nassolnivalók"
      ]
    },
    answer: 1
  }
},

2020: {
  goal: "Healthy living & wellness",
  diet: "omnivore",
  title: {
    en: "Brain energy and diet",
    es: "Energía cerebral y dieta",
    hu: "Az agy energiaigénye és étrend"
  },
  lesson: {
    en: "The human brain consumes about 120 grams of glucose per day, which is mainly supplied by carbohydrates from fruits, vegetables, grains, and legumes. Meat and dairy are very low in carbs, so if humans were strict carnivores, meeting the brain’s energy needs would be difficult. This suggests that humans are naturally adapted to a mixed or plant-forward diet that includes sufficient carbohydrates to fuel our brains efficiently.",
    es: "El cerebro humano consume aproximadamente 120 gramos de glucosa al día, que se suministra principalmente mediante carbohidratos de frutas, verduras, cereales y legumbres. La carne y los lácteos tienen muy pocos carbohidratos, por lo que si los humanos fuéramos carnívoros estrictos, sería difícil satisfacer las necesidades energéticas del cerebro. Esto sugiere que los humanos estamos naturalmente adaptados a una dieta mixta o basada en plantas que incluye suficientes carbohidratos para alimentar nuestro cerebro de manera eficiente.",
    hu: "Az emberi agy naponta körülbelül 120 gramm glükózt fogyaszt, amelyet főként gyümölcsök, zöldségek, gabonák és hüvelyesek szénhidrátjai biztosítanak. A hús és tejtermékek nagyon szegények szénhidrátban, így ha az emberek szigorúan húsevők lennénk, nehéz lenne kielégíteni az agy energiaigényét. Ez arra utal, hogy az emberek természetesen kevert vagy növényközpontú étrendre vannak adaptálódva, amely elegendő szénhidrátot tartalmaz az agy hatékony működéséhez."
  },
  quiz: {
    question: {
      en: "What does our brain’s need for glucose suggest about our natural diet?",
      es: "¿Qué sugiere la necesidad de glucosa de nuestro cerebro sobre nuestra dieta natural?",
      hu: "Mit sugall az agyunk glükózigénye a természetes étrendről?"
    },
    options: {
      en: [
        "Humans are strict carnivores",
        "Humans don’t need carbohydrates",
        "Humans are adapted to a mixed or plant-forward diet"
      ],
      es: [
        "Los humanos son carnívoros estrictos",
        "Los humanos no necesitan carbohidratos",
        "Los humanos están adaptados a una dieta mixta o basada en plantas"
      ],
      hu: [
        "Az emberek szigorúan húsevők",
        "Az embereknek nincs szükségük szénhidrátra",
        "Az emberek kevert vagy növényközpontú étrendre vannak adaptálódva"
      ]
    },
    answer: 2
  }
},

// --------------------------
// Healthy living & wellness – Vegetarian
// --------------------------

2021: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Comparing foods for health",
    es: "Comparación de alimentos para la salud",
    hu: "Ételek összehasonlítása egészség szempontjából"
  },
  lesson: {
    en: "How do meat, dairy, and plant foods compare from a health perspective? Meat and dairy both provide protein and essential nutrients — meat is a good source of iron and B vitamins, dairy provides calcium and vitamin B12. However, both can contain saturated fat and, in processed forms, added salt or sugar. Plant foods, like legumes, nuts, seeds, and whole grains, are naturally high in protein, fiber, vitamins, and minerals, while being low in saturated fat.",
    es: "¿Cómo se comparan la carne, los lácteos y los alimentos vegetales desde una perspectiva de salud? Tanto la carne como los lácteos proporcionan proteínas y nutrientes esenciales: la carne es una buena fuente de hierro y vitaminas B, los lácteos proporcionan calcio y vitamina B12. Sin embargo, ambos pueden contener grasas saturadas y, en sus formas procesadas, sal o azúcar añadidos. Los alimentos vegetales, como las legumbres, frutos secos, semillas y cereales integrales, son naturalmente ricos en proteínas, fibra, vitaminas y minerales, y bajos en grasas saturadas.",
    hu: "Hogyan viszonyulnak az egészség szempontjából a hús, tejtermékek és növényi ételek? Mind a hús, mind a tejtermékek fehérjét és alapvető tápanyagokat biztosítanak — a hús jó vas- és B-vitamin forrás, a tejtermékek kalciumot és B12-vitamint biztosítanak. Ugyanakkor mindkettő tartalmazhat telített zsírt, és feldolgozott formában hozzáadott sót vagy cukrot. A növényi ételek, mint a hüvelyesek, diófélék, magvak és teljes kiőrlésű gabonák, természetesen gazdagok fehérjében, rostban, vitaminokban és ásványi anyagokban, miközben alacsony a telített zsírtartalmuk."
  },
  quiz: {  
    question: {
      en: "Which type of food provides protein and essential nutrients but is low in saturated fat?",
      es: "¿Qué tipo de alimento proporciona proteínas y nutrientes esenciales pero es bajo en grasas saturadas?",
      hu: "Melyik étel biztosít fehérjét és alapvető tápanyagokat, de alacsony a telített zsírtartalma?"
    },  
    options: {
      en: [
        "Plant foods like legumes, nuts, and seeds",
        "Meat",
        "Dairy"
      ],
      es: [
        "Alimentos vegetales como legumbres, frutos secos y semillas",
        "Carne",
        "Lácteos"
      ],
      hu: [
        "Növényi ételek, mint a hüvelyesek, diófélék és magvak",
        "Hús",
        "Tejtermékek"
      ]
    },
    answer: 0
  }
},

2022: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Myths about plant-based diets",
    es: "Mitos sobre las dietas vegetales",
    hu: "Mítoszok a növényi alapú étrendről"
  },
  lesson: {
    en: "Common myths about going plant-based: Some people worry they won’t get enough protein, calcium, or strong bones without meat or dairy. In reality, plant foods like beans, lentils, tofu, nuts, seeds, whole grains, and leafy greens provide all these nutrients. With a variety of foods and a reliable B12 source, plant-based diets can fully support muscle growth, bone health, and overall wellness. Choosing more plants also brings extra fiber, antioxidants, and healthy fats that boost long-term health.",
    es: "Mitos comunes sobre adoptar una dieta vegetal: Algunas personas se preocupan de no obtener suficiente proteína, calcio o huesos fuertes sin carne ni lácteos. En realidad, los alimentos vegetales como frijoles, lentejas, tofu, frutos secos, semillas, cereales integrales y verduras de hoja proporcionan todos estos nutrientes. Con una variedad de alimentos y una fuente confiable de B12, las dietas vegetales pueden apoyar completamente el crecimiento muscular, la salud ósea y el bienestar general. Elegir más plantas también aporta fibra adicional, antioxidantes y grasas saludables que mejoran la salud a largo plazo.",
    hu: "Gyakori mítoszok a növényi alapú étrendről: Egyesek attól tartanak, hogy nem jutnak elegendő fehérjéhez, kalciumhoz vagy erős csontokhoz hús és tejtermék nélkül. Valójában a növényi ételek, mint a bab, lencse, tofu, diófélék, magvak, teljes kiőrlésű gabonák és leveles zöldségek mindezeket a tápanyagokat biztosítják. A változatos ételek és egy megbízható B12-forrás mellett a növényi alapú étrend teljes mértékben támogatja az izomnövekedést, a csontok egészségét és az általános jóllétet. Több növény választása extra rostot, antioxidánsokat és egészséges zsírokat is biztosít, amelyek hosszú távon javítják az egészséget."
  },
  quiz: {  
    question: {
      en: "Which statement is true about plant-based diets?",
      es: "¿Qué afirmación es cierta sobre las dietas vegetales?",
      hu: "Melyik állítás igaz a növényi alapú étrendekre?"
    },  
    options: {
      en: [
        "They can provide enough protein, calcium, and nutrients",
        "They always lead to weak bones",
        "They cannot support muscle growth"
      ],
      es: [
        "Pueden proporcionar suficiente proteína, calcio y nutrientes",
        "Siempre conducen a huesos débiles",
        "No pueden apoyar el crecimiento muscular"
      ],
      hu: [
        "Biztosítanak elegendő fehérjét, kalciumot és tápanyagokat",
        "Mindig gyenge csontokhoz vezetnek",
        "Nem támogatják az izomnövekedést"
      ]
    },
    answer: 0
  }
},
2023: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Boosting the immune system",
    es: "Fortaleciendo el sistema inmunológico",
    hu: "Az immunrendszer erősítése"
  },
  lesson: {
    en: "Your immune system depends on the nutrients you eat every day. A vegetarian diet is naturally rich in vitamins C and E, beta-carotene, zinc, and antioxidants — all essential for defending your body against infections and inflammation. Plants also contain phytonutrients that help regulate immune responses and speed up recovery. Meanwhile, high consumption of animal fats and processed meats has been linked to lower immune resilience and chronic inflammation. By eating a variety of colorful plant foods, you give your immune system the fuel it needs to stay healthy, strong, and energized.",
    es: "Tu sistema inmunológico depende de los nutrientes que consumes cada día. Una dieta vegetariana es naturalmente rica en vitaminas C y E, betacaroteno, zinc y antioxidantes — todos esenciales para defender tu cuerpo contra infecciones e inflamación. Las plantas también contienen fitonutrientes que ayudan a regular las respuestas inmunológicas y acelerar la recuperación. Mientras tanto, el alto consumo de grasas animales y carnes procesadas se ha asociado con una menor resistencia inmunológica e inflamación crónica. Al comer una variedad de alimentos vegetales coloridos, proporcionas a tu sistema inmunológico el combustible que necesita para mantenerse saludable, fuerte y con energía.",
    hu: "Az immunrendszered a napi táplálkozásodtól függ. A vegetáriánus étrend természeténél fogva gazdag C- és E-vitaminban, béta-karotinban, cinkben és antioxidánsokban — ezek mind elengedhetetlenek a fertőzések és a gyulladások elleni védelemhez. A növények fitonutrienseket is tartalmaznak, amelyek segítik az immunválasz szabályozását és a gyorsabb regenerációt. Eközben a magas állati zsír- és feldolgozott húsfogyasztás alacsonyabb immunellenállással és krónikus gyulladással áll összefüggésben. Színes növényi ételek változatos fogyasztásával biztosítod az immunrendszered számára szükséges energiát az egészség, erő és vitalitás fenntartásához."
  },
  quiz: {  
    question: {
      en: "Which vitamin is especially important for boosting the immune system and is abundant in fruits and vegetables?",
      es: "¿Qué vitamina es especialmente importante para fortalecer el sistema inmunológico y abunda en frutas y verduras?",
      hu: "Melyik vitamin különösen fontos az immunrendszer erősítéséhez, és bőségesen megtalálható gyümölcsökben és zöldségekben?"
    },  
    options: {
      en: [
        "Vitamin C",
        "Vitamin D",
        "Vitamin B12"
      ],
      es: [
        "Vitamina C",
        "Vitamina D",
        "Vitamina B12"
      ],
      hu: [
        "C-vitamin",
        "D-vitamin",
        "B12-vitamin"
      ]
    },
    answer: 0
  }
},
2024: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Understanding LDL and saturated fat",
    es: "Comprendiendo el LDL y las grasas saturadas",
    hu: "Az LDL és a telített zsírok megértése"
  },
  lesson: {
    en: "LDL (low-density lipoprotein) is often called “bad cholesterol” because high levels can accumulate in arteries and increase heart disease risk. Experts recommend limiting saturated fat to about 20–30 grams per day for an average adult. For context, a single cheeseburger can contain around 15–20 grams of saturated fat — nearly the entire daily limit!",
    es: "El LDL (lipoproteína de baja densidad) se llama a menudo “colesterol malo” porque los niveles altos pueden acumularse en las arterias e incrementar el riesgo de enfermedades cardíacas. Los expertos recomiendan limitar las grasas saturadas a unos 20–30 gramos por día para un adulto promedio. Para ponerlo en perspectiva, una sola hamburguesa con queso puede contener alrededor de 15–20 gramos de grasa saturada — ¡casi todo el límite diario!",
    hu: "Az LDL (alacsony sűrűségű lipoprotein) gyakran „rossz koleszterinnek” nevezik, mert a magas szint felhalmozódhat az artériákban, növelve a szívbetegségek kockázatát. A szakértők azt javasolják, hogy az átlagos felnőtt napi telített zsírbevitele 20–30 gramm legyen. Összehasonlításképp: egyetlen sajtos hamburger körülbelül 15–20 gramm telített zsírt tartalmaz — majdnem az egész napi limitet!"
  },
  quiz: {  
    question: {
      en: "Approximately how much saturated fat does a single cheeseburger contain?",
      es: "¿Cuánta grasa saturada contiene aproximadamente una sola hamburguesa con queso?",
      hu: "Körülbelül mennyi telített zsírt tartalmaz egyetlen sajtos hamburger?"
    },  
    options: {
      en: [
        "5 grams",
        "15–20 grams",
        "30–40 grams"
      ],
      es: [
        "5 gramos",
        "15–20 gramos",
        "30–40 gramos"
      ],
      hu: [
        "5 gramm",
        "15–20 gramm",
        "30–40 gramm"
      ]
    },
    answer: 1
  }
},
2025: {  
  goal: "Healthy living & wellness",  
  diet: "vegetarian",  
  title: {
    en: "Energy from plant-based foods",
    es: "Energía de alimentos vegetales",
    hu: "Energia növényi ételekből"
  },
  lesson: {
    en: "Many wonder if a vegetarian diet provides enough energy for an active lifestyle. Plant-based foods are excellent sources of carbohydrates — the body’s primary energy fuel — along with healthy fats and proteins. Whole grains, legumes, fruits, and vegetables release energy slowly, keeping blood sugar stable and supporting metabolism throughout the day. Compared to animal-based meals, plant-based ones are often lighter, easier to digest, and nutrient-rich, helping your cells produce energy efficiently.",
    es: "Muchos se preguntan si una dieta vegetariana proporciona suficiente energía para un estilo de vida activo. Los alimentos vegetales son excelentes fuentes de carbohidratos — el combustible energético principal del cuerpo — junto con grasas y proteínas saludables. Los cereales integrales, legumbres, frutas y verduras liberan energía lentamente, manteniendo el azúcar en sangre estable y apoyando el metabolismo durante todo el día. En comparación con las comidas de origen animal, las vegetales son a menudo más ligeras, fáciles de digerir y ricas en nutrientes, ayudando a las células a producir energía de manera eficiente.",
    hu: "Sokan azon gondolkodnak, hogy egy vegetáriánus étrend biztosít-e elegendő energiát egy aktív életmódhoz. A növényi ételek kiváló szénhidrátforrások — a test elsődleges energiaforrása — valamint egészséges zsírokat és fehérjéket is tartalmaznak. A teljes kiőrlésű gabonák, hüvelyesek, gyümölcsök és zöldségek lassan adják le az energiát, stabil vércukorszintet biztosítva és támogatva az anyagcserét a nap folyamán. Az állati alapú ételekhez képest a növényi ételek gyakran könnyebbek, könnyebben emészthetők és tápanyagban gazdagok, segítve a sejtek hatékony energia-termelését."
  },
  quiz: {  
    question: {
      en: "What is the body’s main source of energy?",
      es: "¿Cuál es la principal fuente de energía del cuerpo?",
      hu: "Mi a test elsődleges energiaforrása?"
    },  
    options: {
      en: [
        "Carbohydrates",
        "Protein",
        "Fat"
      ],
      es: [
        "Carbohidratos",
        "Proteína",
        "Grasa"
      ],
      hu: [
        "Szénhidrát",
        "Fehérje",
        "Zsír"
      ]
    },
    answer: 0
  }
},

2026: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Plant-based fats and heart health",
    es: "Grasas vegetales y salud del corazón",
    hu: "Növényi zsírok és a szív egészsége"
  },
  lesson: {
    en: "Why are plant-based fats good for your heart? Fats from nuts, seeds, avocados, and olive oil are mostly unsaturated, which helps lower LDL (“bad”) cholesterol and increase HDL (“good”) cholesterol. They also contain antioxidants and anti-inflammatory compounds that protect arteries from damage. Including these fats regularly in your diet supports healthy blood flow, reduces the risk of heart disease, and provides lasting energy, all while keeping saturated fat intake in check.",
    es: "¿Por qué las grasas vegetales son buenas para tu corazón? Las grasas de frutos secos, semillas, aguacates y aceite de oliva son principalmente insaturadas, lo que ayuda a reducir el colesterol LDL (“malo”) y aumentar el colesterol HDL (“bueno”). También contienen antioxidantes y compuestos antiinflamatorios que protegen las arterias del daño. Incluir estas grasas regularmente en tu dieta favorece un flujo sanguíneo saludable, reduce el riesgo de enfermedades del corazón y proporciona energía duradera, manteniendo bajo control la ingesta de grasas saturadas.",
    hu: "Miért jók a növényi zsírok a szívnek? A diófélék, magvak, avokádó és olívaolaj zsírsavai főként telítetlenek, ami segít csökkenteni az LDL („rossz”) koleszterint és növelni a HDL („jó”) koleszterint. Emellett antioxidánsokat és gyulladáscsökkentő vegyületeket is tartalmaznak, amelyek védik az artériákat a károsodástól. Ezeknek a zsíroknak a rendszeres fogyasztása támogatja az egészséges véráramlást, csökkenti a szívbetegségek kockázatát és tartós energiát biztosít, miközben a telített zsírfogyasztást ellenőrzés alatt tartja."
  },
  quiz: {
    question: {
      en: "Which type of fat helps lower LDL cholesterol and supports heart health?",
      es: "¿Qué tipo de grasa ayuda a reducir el colesterol LDL y protege el corazón?",
      hu: "Melyik zsírtípus csökkenti az LDL-koleszterint és támogatja a szív egészségét?"
    },
    options: {
      en: [
        "Saturated fats from butter and cheese",
        "Trans fats from processed foods",
        "Unsaturated fats from plant foods"
      ],
      es: [
        "Grasas saturadas de mantequilla y queso",
        "Grasas trans de alimentos procesados",
        "Grasas insaturadas de alimentos vegetales"
      ],
      hu: [
        "Telített zsírok vajból és sajtból",
        "Transzzsírok feldolgozott ételekből",
        "Telítetlen zsírok növényi ételekből"
      ]
    },
    answer: 2
  }
},

2027: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Getting complete protein from plants",
    es: "Obtener proteína completa de plantas",
    hu: "Teljes értékű fehérje növényekből"
  },
  lesson: {
    en: "Do you need dairy or meat to get complete protein? Not necessarily. A complete protein contains all nine essential amino acids your body cannot produce. Dairy is a complete protein, but so are some plant-based foods like soy, quinoa, buckwheat, and hemp seeds. Most other plant foods may be lower in one or more essential amino acids, but by eating a variety of plant foods throughout the day — for example, beans with grains or nuts with legumes — you can easily obtain all essential amino acids. This shows that well-planned plant-based diets fully support protein needs without dairy.",
    es: "¿Necesitas lácteos o carne para obtener proteína completa? No necesariamente. Una proteína completa contiene los nueve aminoácidos esenciales que tu cuerpo no puede producir. Los lácteos son proteínas completas, pero también algunos alimentos vegetales como la soja, quinoa, trigo sarraceno y semillas de cáñamo. La mayoría de otros alimentos vegetales pueden ser bajos en uno o más aminoácidos esenciales, pero al comer una variedad de alimentos vegetales a lo largo del día —por ejemplo, legumbres con cereales o frutos secos con legumbres— puedes obtener fácilmente todos los aminoácidos esenciales. Esto demuestra que las dietas vegetales bien planificadas satisfacen completamente las necesidades de proteína sin lácteos.",
    hu: "Szükséged van tejre vagy húsra a teljes értékű fehérjéhez? Nem feltétlenül. A teljes értékű fehérje tartalmazza mind a kilenc esszenciális aminosavat, amelyet a szervezet nem képes előállítani. A tejtermék teljes fehérjét biztosít, de néhány növényi étel, például szója, quinoa, hajdina és kendermag is teljes értékű. A legtöbb más növényi étel alacsonyabb lehet egy vagy több esszenciális aminosavban, de ha a nap folyamán változatos növényi ételeket eszel — például babot gabonával vagy magvakat hüvelyesekkel — könnyen biztosíthatod az összes esszenciális aminosavat. Ez azt mutatja, hogy a jól megtervezett növényi étrend teljes mértékben fedezi a fehérjeszükségletet tejtermékek nélkül."
  },
  quiz: {
    question: {
      en: "How can plant-based eaters get all essential amino acids?",
      es: "¿Cómo pueden los vegetarianos obtener todos los aminoácidos esenciales?",
      hu: "Hogyan szerezhetnek a növényevők minden esszenciális aminosavat?"
    },
    options: {
      en: [
        "It’s impossible without dairy",
        "By eating only one type of plant food",
        "By combining different plant foods like beans and grains throughout the day"
      ],
      es: [
        "Es imposible sin lácteos",
        "Comiendo solo un tipo de alimento vegetal",
        "Combinando diferentes alimentos vegetales como legumbres y cereales a lo largo del día"
      ],
      hu: [
        "Tej nélkül lehetetlen",
        "Csak egyféle növényi étel fogyasztásával",
        "Különböző növényi ételek, például bab és gabona kombinálásával a nap folyamán"
      ]
    },
    answer: 2
  }
},

2028: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Skin health and plant-based diet",
    es: "Salud de la piel y dieta vegetal",
    hu: "Bőrápolás és növényi étrend"
  },
  lesson: {
    en: "Your skin reflects what you eat. A vegetarian diet is packed with antioxidants, vitamins, and healthy fats that protect your skin from damage and premature aging. Vitamin C from fruits helps build collagen, vitamin E from nuts and seeds guards against oxidative stress, and beta-carotene from colorful vegetables supports a natural, healthy glow. Plant-based diets are also lower in compounds that promote inflammation, which means fewer skin breakouts and slower aging. By eating more plants, you’re not only nourishing your body but also giving your skin the nutrients it needs to stay radiant and youthful.",
    es: "Tu piel refleja lo que comes. Una dieta vegetariana está llena de antioxidantes, vitaminas y grasas saludables que protegen tu piel del daño y el envejecimiento prematuro. La vitamina C de las frutas ayuda a producir colágeno, la vitamina E de frutos secos y semillas protege contra el estrés oxidativo, y el betacaroteno de vegetales coloridos aporta un brillo natural y saludable. Las dietas vegetales también tienen menos compuestos que promueven la inflamación, lo que significa menos brotes de piel y envejecimiento más lento. Al comer más plantas, no solo nutres tu cuerpo, sino también tu piel.",
    hu: "A bőröd tükrözi, mit eszel. A vegetáriánus étrend tele van antioxidánsokkal, vitaminokkal és egészséges zsírokkal, amelyek védik a bőrt a károsodástól és az idő előtti öregedéstől. A gyümölcsök C-vitaminja segíti a kollagénépítést, a diófélék és magvak E-vitaminja védi az oxidatív stressztől, a színes zöldségek béta-karotinja pedig természetes, egészséges ragyogást biztosít. A növényi étrend alacsonyabb az olyan vegyületekben, amelyek gyulladást okoznak, így kevesebb bőrprobléma és lassabb öregedés tapasztalható. Több növény fogyasztásával nemcsak a testedet táplálod, hanem a bőröd is megkapja a szükséges tápanyagokat a fiatalos, ragyogó megjelenéshez."
  },
  quiz: {
    question: {
      en: "Which nutrient from fruits helps your skin produce collagen and stay firm?",
      es: "¿Qué nutriente de las frutas ayuda a la piel a producir colágeno y mantenerse firme?",
      hu: "Melyik tápanyag segíti a bőrt a kollagén termelésében és a feszesség megőrzésében?"
    },
    options: {
      en: ["Vitamin B12", "Vitamin C", "Iron"],
      es: ["Vitamina B12", "Vitamina C", "Hierro"],
      hu: ["B12-vitamin", "C-vitamin", "Vas"]
    },
    answer: 1
  }
},

2029: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Inflammation and diet",
    es: "Inflamación y dieta",
    hu: "Gyulladás és étrend"
  },
  lesson: {
    en: "What is inflammation and how does diet affect it? Inflammation is your body’s natural response to injury or infection, but chronic inflammation can contribute to heart disease, diabetes, arthritis, and other health problems. Diet plays a big role: foods high in saturated fat, added sugars, and ultra-processed ingredients can increase inflammation, while plant-based foods rich in antioxidants, fiber, and healthy fats — like fruits, vegetables, whole grains, nuts, seeds, and olive oil — help reduce it. Eating a variety of these foods supports long-term health and can help manage inflammation naturally.",
    es: "¿Qué es la inflamación y cómo afecta la dieta? La inflamación es la respuesta natural del cuerpo a lesiones o infecciones, pero la inflamación crónica puede contribuir a enfermedades del corazón, diabetes, artritis y otros problemas de salud. La dieta juega un papel importante: los alimentos altos en grasas saturadas, azúcares añadidos e ingredientes ultraprocesados pueden aumentar la inflamación, mientras que los alimentos vegetales ricos en antioxidantes, fibra y grasas saludables —como frutas, verduras, granos enteros, frutos secos, semillas y aceite de oliva— ayudan a reducirla. Comer una variedad de estos alimentos apoya la salud a largo plazo y ayuda a controlar la inflamación de forma natural.",
    hu: "Mi a gyulladás és hogyan befolyásolja az étrend? A gyulladás a test természetes reakciója sérülésre vagy fertőzésre, de a krónikus gyulladás hozzájárulhat szívbetegségekhez, cukorbetegséghez, ízületi gyulladáshoz és más egészségügyi problémákhoz. Az étrend nagy szerepet játszik: a telített zsírokban, hozzáadott cukrokban és ultrafeldolgozott összetevőkben gazdag ételek fokozhatják a gyulladást, míg az antioxidánsokban, rostban és egészséges zsírokban gazdag növényi ételek — például gyümölcsök, zöldségek, teljes kiőrlésű gabonák, diófélék, magvak és olívaolaj — csökkentik azt. Ezek változatos fogyasztása támogatja a hosszú távú egészséget és természetes módon segít a gyulladás kezelésében."
  },
  quiz: {
    question: {
      en: "Which type of foods help reduce chronic inflammation?",
      es: "¿Qué tipo de alimentos ayudan a reducir la inflamación crónica?",
      hu: "Melyik ételtípus csökkenti a krónikus gyulladást?"
    },
    options: {
      en: [
        "Processed foods high in sugar and saturated fat",
        "Plant-based foods rich in antioxidants and healthy fats",
        "Fried fast foods"
      ],
      es: [
        "Alimentos procesados altos en azúcar y grasa saturada",
        "Alimentos vegetales ricos en antioxidantes y grasas saludables",
        "Comida rápida frita"
      ],
      hu: [
        "Magas cukor- és telített zsírtartalmú feldolgozott ételek",
        "Antioxidánsokban és egészséges zsírokban gazdag növényi ételek",
        "Sült gyorsételek"
      ]
    },
    answer: 1
  }
},

2030: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Vitamin B12 and plant-based diets",
    es: "Vitamina B12 y dietas vegetales",
    hu: "B12-vitamin és növényi étrend"
  },
  lesson: {
    en: "Is there something in dairy you can’t get from plants? The main nutrient not naturally found in plants is vitamin B12, which is essential for nerves and red blood cells. Calcium, protein, and other vitamins can be easily obtained from plant foods like tofu, tempeh, leafy greens, nuts, seeds, and fortified plant milks. By including these foods and a reliable B12 source — either fortified foods or supplements — you can meet all your nutritional needs without dairy.",
    es: "¿Hay algo en los lácteos que no puedas obtener de las plantas? El nutriente principal que no se encuentra naturalmente en las plantas es la vitamina B12, esencial para los nervios y los glóbulos rojos. El calcio, la proteína y otras vitaminas se pueden obtener fácilmente de alimentos vegetales como tofu, tempeh, verduras de hoja, nueces, semillas y leches vegetales fortificadas. Incluyendo estos alimentos y una fuente confiable de B12 —ya sea alimentos fortificados o suplementos— puedes satisfacer todas tus necesidades nutricionales sin lácteos.",
    hu: "Van valami a tejtermékekben, amit nem kaphatsz meg növényekből? A legfontosabb tápanyag, amely természetesen nem található meg a növényekben, a B12-vitamin, amely létfontosságú az idegek és a vörösvértestek számára. A kalcium, fehérje és más vitaminok könnyen beszerezhetők növényi ételekből, például tofu, tempeh, leveles zöldségek, diófélék, magvak és dúsított növényi tejek formájában. Ezeknek az ételeknek és egy megbízható B12-forrásnak — dúsított ételek vagy kiegészítők — a bevonásával minden tápanyagszükségleted fedezheted tejtermékek nélkül."
  },
  quiz: {
    question: {
      en: "Which nutrient in dairy is not naturally found in plants?",
      es: "¿Qué nutriente de los lácteos no se encuentra naturalmente en las plantas?",
      hu: "Melyik tápanyag nincs természetesen a növényekben a tejtermékekhez képest?"
    },
    options: {
      en: ["Calcium", "Protein", "Vitamin B12"],
      es: ["Calcio", "Proteína", "Vitamina B12"],
      hu: ["Kalcium", "Fehérje", "B12-vitamin"]
    },
    answer: 2
  }
},
2031: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Gut health and plant-based diets",
    es: "Salud intestinal y dietas vegetales",
    hu: "Bélflóra és növényi étrend"
  },
  lesson: {
    en: "Your gut is home to trillions of bacteria that play a key role in digestion, immunity, and even mood. A vegetarian diet naturally supports gut health because it’s rich in fiber, which feeds beneficial gut bacteria and keeps digestion smooth. Fruits, vegetables, legumes, and whole grains create a diverse microbiome, reducing inflammation and improving nutrient absorption. In contrast, animal-based foods contain no fiber and can encourage harmful bacteria linked to bloating or digestive discomfort. By eating more plants, you nurture a balanced gut ecosystem that keeps your body strong from the inside out.",
    es: "Tu intestino alberga billones de bacterias que juegan un papel clave en la digestión, la inmunidad e incluso el estado de ánimo. Una dieta vegetariana apoya naturalmente la salud intestinal porque es rica en fibra, que alimenta las bacterias beneficiosas y mantiene la digestión suave. Frutas, verduras, legumbres y granos enteros crean un microbioma diverso, reduciendo la inflamación y mejorando la absorción de nutrientes. En contraste, los alimentos de origen animal no contienen fibra y pueden favorecer bacterias dañinas asociadas con hinchazón o malestar digestivo. Al comer más plantas, fomentas un ecosistema intestinal equilibrado que mantiene tu cuerpo fuerte desde adentro.",
    hu: "A bélflórádban billió baktérium él, amelyek kulcsszerepet játszanak az emésztésben, az immunitásban és akár a hangulatban is. A vegetáriánus étrend természetes módon támogatja a bél egészségét, mivel gazdag rostokban, amelyek táplálják a jótékony baktériumokat és simán tartják az emésztést. A gyümölcsök, zöldségek, hüvelyesek és teljes kiőrlésű gabonák változatos mikrobiomot hoznak létre, csökkentik a gyulladást és javítják a tápanyagfelszívódást. Ezzel szemben az állati eredetű ételek nem tartalmaznak rostot, és elősegíthetik a káros baktériumok szaporodását, ami puffadáshoz vagy emésztési kellemetlenségekhez vezethet. Több növény fogyasztásával kiegyensúlyozott bélflórát támogatsz, ami belülről erősíti a tested."
  },
  quiz: {
    question: {
      en: "What nutrient in plant foods helps feed beneficial gut bacteria?",
      es: "¿Qué nutriente de los alimentos vegetales alimenta a las bacterias intestinales beneficiosas?",
      hu: "Melyik tápanyag táplálja a jótékony bélbaktériumokat a növényi ételekben?"
    },
    options: {
      en: ["Cholesterol", "Saturated fat", "Fiber"],
      es: ["Colesterol", "Grasa saturada", "Fibra"],
      hu: ["Koleszterin", "Telített zsír", "Rost"]
    },
    answer: 2
  }
},

2032: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Strengthening bones without milk",
    es: "Fortalecer los huesos sin leche",
    hu: "Erős csontok tej nélkül"
  },
  lesson: {
    en: "How can you get strong bones without relying on milk? While milk contains calcium, some studies suggest that digesting its animal protein may cause calcium to be excreted in urine, meaning the net benefit for bones can be limited. Bone health depends on a combination of calcium, vitamin D, exercise, and other nutrients. Plant-based foods like leafy greens, tofu, almonds, chia seeds, and fortified plant milks provide calcium without this potential drawback, along with fiber, antioxidants, and other nutrients that support overall health.",
    es: "¿Cómo obtener huesos fuertes sin depender de la leche? Aunque la leche contiene calcio, algunos estudios sugieren que digerir su proteína animal puede causar que se excrete calcio en la orina, lo que limita el beneficio neto para los huesos. La salud ósea depende de una combinación de calcio, vitamina D, ejercicio y otros nutrientes. Los alimentos vegetales como verduras de hoja, tofu, almendras, semillas de chía y leches vegetales fortificadas proporcionan calcio sin este posible inconveniente, junto con fibra, antioxidantes y otros nutrientes que apoyan la salud general.",
    hu: "Hogyan lehet erős csontokat szerezni tej nélkül? Bár a tej kalciumot tartalmaz, egyes tanulmányok szerint a tej állati fehérjéjének emésztése növelheti a kalcium kiválasztását a vizelettel, így a csontoknak szánt nettó haszon korlátozott lehet. A csontok egészsége a kalcium, a D-vitamin, a mozgás és más tápanyagok kombinációjától függ. A növényi ételek, például leveles zöldségek, tofu, mandula, chia magvak és dúsított növényi tejek kalciumot biztosítanak ezen potenciális hátrány nélkül, emellett rostot, antioxidánsokat és más tápanyagokat is, amelyek támogatják az általános egészséget."
  },
  quiz: {
    question: {
      en: "Why might milk not always be the most efficient way to strengthen bones?",
      es: "¿Por qué la leche puede no ser siempre la forma más eficiente de fortalecer los huesos?",
      hu: "Miért nem mindig a tej a leghatékonyabb módja a csontok erősítésének?"
    },
    options: {
      en: [
        "Milk contains no calcium",
        "Digesting milk protein can increase calcium excretion",
        "Milk automatically prevents fractures without exercise"
      ],
      es: [
        "La leche no contiene calcio",
        "Digestionar la proteína de la leche puede aumentar la excreción de calcio",
        "La leche previene automáticamente las fracturas sin ejercicio"
      ],
      hu: [
        "A tej nem tartalmaz kalciumot",
        "A tej fehérjéjének emésztése növelheti a kalcium kiválasztását",
        "A tej automatikusan megelőzi a töréseket testmozgás nélkül"
      ]
    },
    answer: 1
  }
},

2033: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Is removing dairy safe?",
    es: "¿Es seguro eliminar los lácteos?",
    hu: "Biztonságos-e a tejtermék elhagyása?"
  },
  lesson: {
    en: "Should we be afraid of leaving dairy? Not really. Unlike meat, removing dairy is generally safe and can even be beneficial. Calcium, protein, and other nutrients found in dairy can be easily obtained from plant foods like leafy greens, tofu, almonds, chia seeds, and fortified plant milks. By including a variety of these foods you can maintain bone and overall health without difficulty. With a balanced approach, leaving dairy is safe and often supports heart health, digestion, and reduced saturated fat intake.",
    es: "¿Debemos tener miedo de eliminar los lácteos? No realmente. A diferencia de la carne, eliminar los lácteos generalmente es seguro e incluso beneficioso. El calcio, la proteína y otros nutrientes que se encuentran en los lácteos se pueden obtener fácilmente de alimentos vegetales como verduras de hoja, tofu, almendras, semillas de chía y leches vegetales fortificadas. Al incluir una variedad de estos alimentos, puedes mantener la salud ósea y general sin dificultad. Con un enfoque equilibrado, dejar los lácteos es seguro y a menudo apoya la salud del corazón, la digestión y la reducción de grasas saturadas.",
    hu: "Félnünk kellene a tejtermék elhagyásától? Nem igazán. A hús eltávolításával ellentétben a tejtermékek elhagyása általában biztonságos, sőt előnyös is lehet. A tejben található kalcium, fehérje és más tápanyagok könnyen beszerezhetők növényi ételekből, például leveles zöldségekből, tofu-ból, mandulából, chia magvakból és dúsított növényi tejekből. Ha változatosan fogyasztod ezeket az ételeket, könnyen fenntarthatod a csont- és az általános egészséget. Egy kiegyensúlyozott megközelítéssel a tejtermékek elhagyása biztonságos, és gyakran támogatja a szív egészségét, az emésztést és a csökkentett telített zsírbevitelt."
  },
  quiz: {
    question: {
      en: "Is it safe to remove dairy from your diet when done thoughtfully?",
      es: "¿Es seguro eliminar los lácteos de tu dieta si se hace de manera consciente?",
      hu: "Biztonságos a tejtermékek elhagyása, ha tudatosan történik?"
    },
    options: {
      en: [
        "No, it always causes nutrient deficiencies",
        "Only if you eat more meat",
        "Yes, with plant-based calcium and protein sources"
      ],
      es: [
        "No, siempre causa deficiencias nutricionales",
        "Solo si comes más carne",
        "Sí, con fuentes vegetales de calcio y proteína"
      ],
      hu: [
        "Nem, mindig tápanyaghiányt okoz",
        "Csak ha több húst eszel",
        "Igen, növényi kalcium- és fehérjeforrásokkal"
      ]
    },
    answer: 2
  }
},

2034: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Practical tips to reduce dairy",
    es: "Consejos prácticos para reducir lácteos",
    hu: "Gyakorlati tippek a tejtermék csökkentéséhez"
  },
  lesson: {
    en: "Practical tips for reducing dairy without compromising health: \n\n1. Swap cow’s milk for fortified plant milks like soy, oat, or almond milk. \n2. Replace cheese with tofu-based spreads, nutritional yeast, or cashew cheeses. \n3. Use plant-based yogurt made from soy, coconut, or almond. \n4. Include calcium-rich plants daily — leafy greens, broccoli, almonds, chia, sesame seeds. \n\nWith these simple swaps, you can enjoy the benefits of a plant-forward diet while keeping your bones, muscles, and overall health strong.",
    es: "Consejos prácticos para reducir los lácteos sin comprometer la salud: \n\n1. Sustituye la leche de vaca por leches vegetales fortificadas como soja, avena o almendra. \n2. Reemplaza el queso con untables de tofu, levadura nutricional o quesos de anacardo. \n3. Usa yogur vegetal hecho de soja, coco o almendra. \n4. Incluye plantas ricas en calcio diariamente: verduras de hoja, brócoli, almendras, chía, semillas de sésamo. \n\nCon estos simples cambios, puedes disfrutar los beneficios de una dieta basada en plantas mientras mantienes tus huesos, músculos y salud general fuertes.",
    hu: "Gyakorlati tippek a tejtermékek csökkentéséhez az egészség veszélyeztetése nélkül: \n\n1. Cseréld le a tehéntejet dúsított növényi tejekre, például szója-, zab- vagy mandulatejre. \n2. A sajtot tofu-alapú krémekkel, táplálékkovász- vagy kesudió sajttal helyettesítsd. \n3. Használj növényi joghurtot szója-, kókusz- vagy mandulatejből. \n4. Fogyassz naponta kalciumban gazdag növényeket — leveles zöldségek, brokkoli, mandula, chia, szezámmag. \n\nEzekkel az egyszerű cserékkel élvezheted a növényi étrend előnyeit, miközben csontjaid, izmaid és az általános egészséged erős marad."
  },
  quiz: {
    question: {
      en: "Which of the following is a practical way to reduce dairy intake safely?",
      es: "¿Cuál de las siguientes es una forma práctica de reducir el consumo de lácteos de manera segura?",
      hu: "Melyik a gyakorlati módja a tejtermék bevitel biztonságos csökkentésének?"
    },
    options: {
      en: [
        "Swap cow’s milk with fortified plant milk",
        "Remove all calcium sources",
        "Eat more butter instead"
      ],
      es: [
        "Sustituir la leche de vaca por leche vegetal fortificada",
        "Eliminar todas las fuentes de calcio",
        "Comer más mantequilla en su lugar"
      ],
      hu: [
        "Cseréld le a tehéntejet dúsított növényi tejre",
        "Távolíts el minden kalciumforrást",
        "Ehelyett egyél több vajat"
      ]
    },
    answer: 0
  }
},

2035: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Calories and saturated fat in milk",
    es: "Calorías y grasa saturada en la leche",
    hu: "Kalória és telített zsír a tejben"
  },
  lesson: {
    en: "Let’s look at calories and saturated fat in milk: whole cow’s milk typically has about 3.5% fat by weight. In 1 liter (~1000g), that’s roughly 35g of fat. Since fat provides 9 kcal per gram, this amounts to 315 kcal from fat alone. The total caloric content of 1 liter of whole milk is around 640 kcal, so nearly 50% of calories come from fat, mostly saturated fat — much higher than the 3–4% fat number on the label suggests, which is calculated by weight, not calories. This shows how easy it is for dairy to contribute a significant amount of saturated fat and calories to your diet.",
    es: "Veamos las calorías y la grasa saturada en la leche: la leche entera de vaca tiene típicamente alrededor del 3,5% de grasa por peso. En 1 litro (~1000 g), eso es aproximadamente 35 g de grasa. Dado que la grasa proporciona 9 kcal por gramo, esto equivale a 315 kcal solo de grasa. El contenido calórico total de 1 litro de leche entera es de alrededor de 640 kcal, por lo que casi el 50% de las calorías provienen de la grasa, en su mayoría saturada, mucho más alto que el 3-4% que indica la etiqueta, que se calcula por peso, no por calorías. Esto muestra lo fácil que es que los lácteos contribuyan con una cantidad significativa de grasas saturadas y calorías a tu dieta.",
    hu: "Nézzük meg a kalóriát és a telített zsírt a tejben: a teljes tej általában kb. 3,5% zsírt tartalmaz súly szerint. 1 liter (~1000 g) esetén ez kb. 35 g zsírnak felel meg. Mivel a zsír 9 kcal-t ad grammonként, ez önmagában 315 kcal-t jelent a zsírból. 1 liter teljes tej teljes kalóriatartalma kb. 640 kcal, így a kalóriák közel 50%-a zsírból származik, főként telített zsírból — sokkal több, mint a címkén szereplő 3–4%, ami súly szerint van számítva, nem kalóriában. Ez megmutatja, milyen könnyen járulhatnak hozzá a tejtermékek jelentős mennyiségű telített zsírhoz és kalóriához az étrendedben."
  },
  quiz: {
    question: {
      en: "Approximately what percentage of calories in whole milk comes from fat?",
      es: "Aproximadamente, ¿qué porcentaje de calorías de la leche entera proviene de la grasa?",
      hu: "Kb. hány százalék kalória származik a teljes tej zsírtartalmából?"
    },
    options: {
      en: ["About 3–4%", "About 50%", "About 10%"],
      es: ["Aproximadamente 3–4%", "Aproximadamente 50%", "Aproximadamente 10%"],
      hu: ["Kb. 3–4%", "Kb. 50%", "Kb. 10%"]
    },
    answer: 1
  }
},

2036: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Protein-rich foods for vegetarians",
    es: "Alimentos ricos en proteínas para vegetarianos",
    hu: "Fehérjében gazdag ételek vegetáriánusoknak"
  },
  lesson: {
    en: "Which foods provide the most protein? Dairy products like milk, yogurt, and cheese do contain protein — for example, 100g of milk has about 3.5g, yogurt around 5g, and cheddar cheese about 25g. However, many plant-based foods are also rich in protein: 100g of cooked lentils has about 9g, tofu around 8g, tempeh 19g, chickpeas 9g, and almonds 21g. By choosing a variety of these foods, vegetarians can easily meet protein needs while also gaining fiber, antioxidants, and lower saturated fat.",
    es: "¿Qué alimentos proporcionan más proteína? Los productos lácteos como la leche, el yogur y el queso contienen proteínas: por ejemplo, 100 g de leche tienen unos 3,5 g, el yogur alrededor de 5 g y el queso cheddar unos 25 g. Sin embargo, muchos alimentos vegetales también son ricos en proteínas: 100 g de lentejas cocidas tienen unos 9 g, tofu alrededor de 8 g, tempeh 19 g, garbanzos 9 g y almendras 21 g. Al elegir una variedad de estos alimentos, los vegetarianos pueden cubrir fácilmente sus necesidades de proteínas y obtener fibra, antioxidantes y menor grasa saturada.",
    hu: "Mely ételek biztosítanak a legtöbb fehérjét? A tejtermékek, mint a tej, joghurt és sajt tartalmaznak fehérjét — például 100 g tej kb. 3,5 g, a joghurt kb. 5 g, a cheddar sajt kb. 25 g. Azonban sok növényi alapú étel is gazdag fehérjében: 100 g főtt lencse kb. 9 g, tofu kb. 8 g, tempeh 19 g, csicseriborsó 9 g, mandula 21 g. Ha változatosan fogyasztod ezeket, a vegetáriánusok könnyen fedezhetik fehérjeszükségletüket, miközben rostot, antioxidánsokat és alacsony telített zsírt is kapnak."
  },
  quiz: {
    question: {
      en: "Which plant-based food is highest in protein per 100g?",
      es: "¿Qué alimento vegetal tiene más proteína por 100 g?",
      hu: "Melyik növényi étel a leggazdagabb fehérjében 100 g-onként?"
    },
    options: {
      en: ["Tempeh", "Milk", "Lettuce"],
      es: ["Tempeh", "Leche", "Lechuga"],
      hu: ["Tempeh", "Tej", "Saláta"]
    },
    answer: 0
  }
},

2037: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Calcium from plants versus dairy",
    es: "Calcio de plantas versus lácteos",
    hu: "Kalcium növényekből vs. tejtermékekből"
  },
  lesson: {
    en: "How does calcium in dairy compare to plant-based sources? Dairy products like milk, yogurt, and cheese are well-known for calcium — 100g of milk has about 120mg, yogurt around 110mg, and cheddar cheese 720mg. But many plant foods are excellent sources too: 100g of tofu made with calcium sulfate can have 350mg, 100g of kale has about 150mg, almonds 264mg per 100g, chia seeds around 631mg, and sesame seeds 975mg. Plant sources also come with fiber, antioxidants, and less saturated fat, making them very beneficial for bone health.",
    es: "¿Cómo se compara el calcio de los lácteos con las fuentes vegetales? Los productos lácteos como la leche, el yogur y el queso son conocidos por su calcio: 100 g de leche tienen unos 120 mg, el yogur alrededor de 110 mg y el queso cheddar 720 mg. Pero muchos alimentos vegetales también son excelentes fuentes: 100 g de tofu preparado con sulfato de calcio puede tener 350 mg, 100 g de col rizada unos 150 mg, almendras 264 mg por 100 g, semillas de chía alrededor de 631 mg y semillas de sésamo 975 mg. Las fuentes vegetales también aportan fibra, antioxidantes y menos grasa saturada, siendo muy beneficiosas para la salud ósea.",
    hu: "Hogyan viszonyul a tej kalciumtartalma a növényi forrásokhoz? A tejtermékek, mint a tej, joghurt és sajt jól ismertek kalciumtartalmukról: 100 g tej kb. 120 mg, joghurt kb. 110 mg, cheddar sajt 720 mg. De sok növényi étel is kiváló forrás: 100 g kalciumszulfáttal készült tofu 350 mg-ot tartalmazhat, 100 g kelkáposzta kb. 150 mg, mandula 264 mg/100 g, chia mag kb. 631 mg, szezámmag 975 mg. A növényi források rostot, antioxidánsokat és kevesebb telített zsírt is biztosítanak, ami nagyon előnyös a csontok egészségének."
  },
  quiz: {
    question: {
      en: "Which plant-based food provides the most calcium per 100g?",
      es: "¿Qué alimento vegetal proporciona más calcio por 100 g?",
      hu: "Melyik növényi étel tartalmazza a legtöbb kalciumot 100 g-onként?"
    },
    options: {
      en: ["Milk", "Sesame seeds", "Apple"],
      es: ["Leche", "Semillas de sésamo", "Manzana"],
      hu: ["Tej", "Szezámmag", "Alma"]
    },
    answer: 1
  }
},

2038: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Iron in plants versus dairy",
    es: "Hierro en plantas vs lácteos",
    hu: "Vas növényekből vs. tejtermékekből"
  },
  lesson: {
    en: "Where does iron really come from — dairy or plants? Surprisingly, dairy products contain very little iron. For example, 100g of milk has only about 0.03mg of iron, and cheese has nearly none. In contrast, many plant-based foods are rich in iron: lentils provide about 3.3mg per 100g, tofu around 5.4mg, chickpeas 2.9mg, pumpkin seeds 8.8mg, and spinach 2.7mg. While plant-based (non-heme) iron is absorbed slightly less efficiently, vitamin C from fruits and vegetables can significantly boost absorption. This makes a plant-rich diet an excellent and balanced source of iron.",
    es: "¿De dónde proviene realmente el hierro, de los lácteos o de las plantas? Sorprendentemente, los lácteos contienen muy poco hierro. Por ejemplo, 100 g de leche tienen solo unos 0,03 mg de hierro, y el queso casi ninguno. En contraste, muchos alimentos vegetales son ricos en hierro: las lentejas aportan unos 3,3 mg por 100 g, el tofu alrededor de 5,4 mg, los garbanzos 2,9 mg, semillas de calabaza 8,8 mg y espinaca 2,7 mg. Aunque el hierro no hemo de plantas se absorbe un poco menos eficientemente, la vitamina C de frutas y verduras puede mejorar significativamente la absorción. Esto hace que una dieta rica en plantas sea una fuente excelente y equilibrada de hierro.",
    hu: "Honnan származik a vas — tejből vagy növényekből? Meglepő módon a tejtermékek nagyon kevés vasat tartalmaznak. Például 100 g tej mindössze kb. 0,03 mg vasat tartalmaz, a sajtban pedig szinte nincs. Ezzel szemben sok növényi étel gazdag vasban: a lencse kb. 3,3 mg/100 g, tofu kb. 5,4 mg, csicseriborsó 2,9 mg, tökmag 8,8 mg, spenót 2,7 mg. Bár a növényi (nem-hem) vas kevésbé hatékonyan szívódik fel, a gyümölcsök és zöldségek C-vitamintartalma jelentősen növelheti a felszívódást. Ezért a növényekben gazdag étrend kiváló és kiegyensúlyozott vasforrás."
  },
  quiz: {
    question: {
      en: "Which of the following is a rich plant-based source of iron?",
      es: "¿Cuál de los siguientes es una fuente vegetal rica en hierro?",
      hu: "Melyik a vasban gazdag növényi forrás?"
    },
    options: {
      en: ["Milk", "Cheese", "Pumpkin seeds"],
      es: ["Leche", "Queso", "Semillas de calabaza"],
      hu: ["Tej", "Sajt", "Tökmag"]
    },
    answer: 2
  }
},

2039: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Zinc and magnesium from plants",
    es: "Zinc y magnesio de plantas",
    hu: "Cink és magnézium növényekből"
  },
  lesson: {
    en: "Are zinc and magnesium only in dairy products? Not at all. Dairy contains small amounts — 100g of milk has about 0.4mg of zinc and 11mg of magnesium. In comparison, plant foods are much richer: pumpkin seeds contain around 7.6mg of zinc and 530mg of magnesium per 100g, cashews have 5.8mg of zinc and 292mg of magnesium, and lentils about 3mg of zinc and 47mg of magnesium. These minerals support immunity, muscle function, and energy production. A balanced plant-based diet easily meets zinc and magnesium needs, often with added fiber and antioxidants.",
    es: "¿El zinc y el magnesio solo se encuentran en los lácteos? Para nada. Los lácteos contienen pequeñas cantidades: 100 g de leche tiene unos 0,4 mg de zinc y 11 mg de magnesio. En comparación, los alimentos vegetales son mucho más ricos: las semillas de calabaza contienen unos 7,6 mg de zinc y 530 mg de magnesio por 100 g, los anacardos 5,8 mg de zinc y 292 mg de magnesio, y las lentejas alrededor de 3 mg de zinc y 47 mg de magnesio. Estos minerales apoyan la inmunidad, la función muscular y la producción de energía. Una dieta equilibrada basada en plantas cubre fácilmente las necesidades de zinc y magnesio, a menudo con fibra y antioxidantes adicionales.",
    hu: "A cink és magnézium csak a tejtermékekben van? Egyáltalán nem. A tej kis mennyiséget tartalmaz — 100 g tej kb. 0,4 mg cinket és 11 mg magnéziumot. Ezzel szemben a növényi ételek sokkal gazdagabbak: a tökmag kb. 7,6 mg cinket és 530 mg magnéziumot tartalmaz 100 g-onként, a kesudió 5,8 mg cinket és 292 mg magnéziumot, a lencse kb. 3 mg cinket és 47 mg magnéziumot. Ezek az ásványi anyagok támogatják az immunrendszert, az izomműködést és az energiatermelést. Egy kiegyensúlyozott növényi étrend könnyen fedezi a cink- és magnéziumigényt, gyakran plusz rosttal és antioxidánsokkal."
  },
  quiz: {
    question: {
      en: "Which plant-based food is rich in both zinc and magnesium?",
      es: "¿Qué alimento vegetal es rico en zinc y magnesio?",
      hu: "Melyik növényi étel gazdag mind cinkben, mind magnéziumban?"
    },
    options: {
      en: ["Pumpkin seeds", "Milk", "White bread"],
      es: ["Semillas de calabaza", "Leche", "Pan blanco"],
      hu: ["Tökmag", "Tej", "Fehér kenyér"]
    },
    answer: 0
  }
},

2040: {
  goal: "Healthy living & wellness",
  diet: "vegetarian",
  title: {
    en: "Vitamins in a plant-based diet",
    es: "Vitaminas en una dieta basada en plantas",
    hu: "Vitaminok növényi étrendben"
  },
  lesson: {
    en: "When we think about vitamins, we often imagine milk for vitamin B2 or meat for B12 — but in reality, the plant kingdom is full of vitamin-rich foods. Fruits and vegetables are the best sources of vitamin C, K, and folate; nuts and seeds are rich in vitamin E; and whole grains and legumes provide B1, B3, and B6. The only vitamin that needs attention in a fully plant-based diet is B12, which even farm animals receive through supplementation today. So, while dairy and meat contain vitamins, plants offer a much wider spectrum — without cholesterol or excess saturated fats.",
    es: "Cuando pensamos en vitaminas, a menudo imaginamos la leche para la B2 o la carne para la B12, pero en realidad, el reino vegetal está lleno de alimentos ricos en vitaminas. Las frutas y verduras son las mejores fuentes de vitamina C, K y ácido fólico; los frutos secos y semillas son ricos en vitamina E; y los granos enteros y legumbres aportan B1, B3 y B6. La única vitamina que necesita atención en una dieta totalmente vegetal es la B12, que incluso los animales de granja reciben hoy mediante suplementación. Así que, aunque los lácteos y la carne contienen vitaminas, las plantas ofrecen un espectro mucho más amplio — sin colesterol ni exceso de grasas saturadas.",
    hu: "Amikor a vitaminokra gondolunk, gyakran a tejre B2-vitaminért vagy a húsra B12-vitaminért gondolunk — de valójában a növények világa tele van vitaminokban gazdag ételekkel. A gyümölcsök és zöldségek a legjobb C-, K-vitamin és folsavforrások; a diófélék és magvak gazdagok E-vitaminban; a teljes kiőrlésű gabonák és hüvelyesek B1-, B3- és B6-vitamint biztosítanak. Az egyetlen vitamin, amire egy teljesen növényi étrendben figyelni kell, a B12, amit ma még az állatok is kiegészítésként kapnak. Tehát bár a tej és hús tartalmaz vitaminokat, a növények sokkal szélesebb spektrumot kínálnak — koleszterin és túlzott telített zsír nélkül."
  },
  quiz: {
    question: {
      en: "Which vitamin typically requires supplementation in a plant-based diet?",
      es: "¿Qué vitamina generalmente requiere suplementación en una dieta basada en plantas?",
      hu: "Melyik vitamint kell általában kiegészíteni növényi étrendben?"
    },
    options: {
      en: ["Vitamin C", "Vitamin B12", "Vitamin E"],
      es: ["Vitamina C", "Vitamina B12", "Vitamina E"],
      hu: ["C-vitamin", "B12-vitamin", "E-vitamin"]
    },
    answer: 1
  }
},

// --------------------------
// Healthy living & wellness – Vegan
// --------------------------
2041: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Getting protein on a vegan diet",
    es: "Obtener proteínas en una dieta vegana",
    hu: "Fehérje növényi alapú étrenden"
  },
  lesson: {
    en: "Some people think humans need meat for protein, but this isn't true. Proteins are made of amino acids, which are the building blocks our bodies use to repair tissues, build muscles, and produce enzymes and hormones. Plant foods like beans, lentils, tofu, nuts, seeds, and whole grains provide all essential amino acids when eaten in variety, making it easy to get enough protein without animal products.",
    es: "Algunas personas piensan que los humanos necesitan carne para obtener proteínas, pero esto no es cierto. Las proteínas están formadas por aminoácidos, que son los bloques de construcción que nuestro cuerpo utiliza para reparar tejidos, desarrollar músculos y producir enzimas y hormonas. Los alimentos vegetales como frijoles, lentejas, tofu, frutos secos, semillas y cereales integrales proporcionan todos los aminoácidos esenciales cuando se consumen en variedad, lo que facilita obtener suficiente proteína sin productos animales.",
    hu: "Sokan azt hiszik, hogy az embereknek húsra van szükségük a fehérje miatt, de ez nem igaz. A fehérjék aminosavakból állnak, amelyek a testünk építőkövei a szövetek javításához, az izmok felépítéséhez, valamint az enzimek és hormonok előállításához. A növényi ételek, mint a bab, lencse, tofu, diófélék, magvak és teljes kiőrlésű gabonák, ha változatosan fogyasztjuk őket, biztosítják az összes esszenciális aminosavat, így könnyű elegendő fehérjét bevinni állati termékek nélkül."
  },
  quiz: {  
    question: {
      en: "How can humans get all essential amino acids on a vegan diet?",
      es: "¿Cómo pueden los humanos obtener todos los aminoácidos esenciales en una dieta vegana?",
      hu: "Hogyan juthatnak az emberek minden esszenciális aminosavhoz vegán étrenden?"
    },  
    options: {
      en: [
        "Only by eating meat",
        "By eating a variety of plant foods like beans, lentils, tofu, nuts, and grains",
        "By drinking only water"
      ],
      es: [
        "Solo comiendo carne",
        "Comiendo una variedad de alimentos vegetales como frijoles, lentejas, tofu, frutos secos y cereales",
        "Solo bebiendo agua"
      ],
      hu: [
        "Csak hús evésével",
        "Változatos növényi ételek fogyasztásával, mint a bab, lencse, tofu, diófélék és gabonák",
        "Csak víz fogyasztásával"
      ]
    },
    answer: 1
  }
},
2042: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Vitamin B12 and vegan diets",
    es: "Vitamina B12 y dietas veganas",
    hu: "B12-vitamin és a vegán étrend"
  },
  lesson: {
    en: "Some people think vegans can't get enough vitamin B12, but this vitamin actually comes from bacteria, not directly from animals. Animals themselves are often supplemented with B12, which is why we get it from meat and dairy. For humans, B12 supplements or fortified foods can easily meet daily needs. In fact, B12 supplementation is recommended for everyone, not just vegans, to prevent deficiency.",
    es: "Algunas personas piensan que los veganos no pueden obtener suficiente vitamina B12, pero esta vitamina proviene en realidad de bacterias, no directamente de los animales. Los propios animales a menudo reciben suplementos de B12, por eso la obtenemos de la carne y los lácteos. Para los humanos, los suplementos de B12 o los alimentos fortificados pueden cubrir fácilmente las necesidades diarias. De hecho, se recomienda la suplementación de B12 para todos, no solo para veganos, para prevenir deficiencias.",
    hu: "Sokan azt gondolják, hogy a vegánok nem juthatnak elegendő B12-vitaminhoz, de ez a vitamin valójában baktériumokból származik, nem közvetlenül az állatoktól. Maga az állatok is gyakran kapnak B12-kiegészítést, ezért jutunk hozzá a húsból és tejtermékekből. Az emberek számára a B12-kiegészítők vagy a dúsított élelmiszerek könnyen fedezik a napi szükségletet. Valójában a B12-pótlás mindenki számára ajánlott, nem csak a vegánoknak, a hiány megelőzése érdekében."
  },
  quiz: {  
    question: {
      en: "Where does vitamin B12 originally come from?",
      es: "¿De dónde proviene originalmente la vitamina B12?",
      hu: "Honnan származik eredetileg a B12-vitamin?"
    },  
    options: {
      en: [
        "Plants",
        "Bacteria",
        "Sunlight",
        "Only animals"
      ],
      es: [
        "Plantas",
        "Bacterias",
        "Luz solar",
        "Solo animales"
      ],
      hu: [
        "Növények",
        "Baktériumok",
        "Napfény",
        "Csak állatok"
      ]
    },
    answer: 1
  }
},
2043: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Calcium on a vegan diet",
    es: "Calcio en una dieta vegana",
    hu: "Kalcium a vegán étrendben"
  },
  lesson: {
    en: "Some people believe vegans can’t get enough calcium without dairy, but many plant-based foods are rich in calcium. For example, 100g of tofu contains about 350mg of calcium, 100g of kale has 150mg, and 30g of almonds provide around 75mg. By comparison, 100ml of cow’s milk has roughly 120mg of calcium. Fortified plant milks also provide similar amounts to dairy. Eating a variety of these foods easily meets daily calcium needs and supports strong bones.",
    es: "Algunas personas creen que los veganos no pueden obtener suficiente calcio sin lácteos, pero muchos alimentos vegetales son ricos en calcio. Por ejemplo, 100g de tofu contiene alrededor de 350mg de calcio, 100g de kale tiene 150mg y 30g de almendras proporcionan alrededor de 75mg. En comparación, 100ml de leche de vaca tiene aproximadamente 120mg de calcio. Las leches vegetales fortificadas también aportan cantidades similares a los lácteos. Comer una variedad de estos alimentos cubre fácilmente las necesidades diarias de calcio y apoya huesos fuertes.",
    hu: "Sokan azt hiszik, hogy a vegánok nem jutnak elegendő kalciumhoz tejtermék nélkül, de sok növényi étel gazdag kalciumban. Például 100 g tofu kb. 350 mg kalciumot tartalmaz, 100 g kelkáposzta 150 mg-ot, 30 g mandula körülbelül 75 mg-ot. Összehasonlításképp, 100 ml tehéntej körülbelül 120 mg kalciumot tartalmaz. A dúsított növényi tejek is hasonló mennyiséget biztosítanak, mint a tej. Ezek változatos fogyasztásával könnyen fedezhetők a napi kalciumszükségletek, és támogathatók az erős csontok."
  },
  quiz: {  
    question: {
      en: "Which plant-based foods provide calcium comparable to dairy?",
      es: "¿Qué alimentos vegetales proporcionan calcio comparable al de los lácteos?",
      hu: "Mely növényi ételek biztosítanak a tejtermékekhez hasonló mennyiségű kalciumot?"
    },  
    options: {
      en: [
        "Tofu, kale, almonds, fortified plant milks",
        "Potatoes and rice only",
        "Fruit juice"
      ],
      es: [
        "Tofu, kale, almendras, leches vegetales fortificadas",
        "Solo patatas y arroz",
        "Jugo de frutas"
      ],
      hu: [
        "Tofu, kelkáposzta, mandula, dúsított növényi tejek",
        "Csak burgonya és rizs",
        "Gyümölcslé"
      ]
    },
    answer: 0
  }
},
2044: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Iron on a vegan diet",
    es: "Hierro en una dieta vegana",
    hu: "Vas a vegán étrendben"
  },
  lesson: {
    en: "Some people think vegans can't get enough iron because they avoid meat. Iron is essential for transporting oxygen in the blood and supporting energy levels. Plant-based sources like lentils, beans, spinach, pumpkin seeds, and fortified cereals provide plenty of iron. Absorption is improved when these foods are eaten with vitamin C-rich foods like citrus, peppers, or tomatoes. With proper planning, vegans can easily meet daily iron needs.",
    es: "Algunas personas piensan que los veganos no pueden obtener suficiente hierro porque evitan la carne. El hierro es esencial para transportar oxígeno en la sangre y mantener los niveles de energía. Fuentes vegetales como lentejas, frijoles, espinacas, semillas de calabaza y cereales fortificados proporcionan abundante hierro. La absorción mejora cuando se consumen con alimentos ricos en vitamina C, como cítricos, pimientos o tomates. Con una planificación adecuada, los veganos pueden cubrir fácilmente las necesidades diarias de hierro.",
    hu: "Sokan azt hiszik, hogy a vegánok nem jutnak elegendő vashoz, mert kerülik a húst. A vas elengedhetetlen az oxigén szállításához a vérben és az energiaszint fenntartásához. Növényi források, például lencse, bab, spenót, tökmag és dúsított gabonák bőségesen tartalmaznak vasat. A felszívódás javul, ha ezeket a vitamin C-ben gazdag ételekkel, például citrusfélékkel, paprikával vagy paradicsommal fogyasztjuk. Megfelelő tervezéssel a vegánok könnyen fedezhetik a napi vasszükségletet."
  },
  quiz: {  
    question: {
      en: "How can vegans improve iron absorption from plant foods?",
      es: "¿Cómo pueden los veganos mejorar la absorción de hierro de los alimentos vegetales?",
      hu: "Hogyan javíthatják a vegánok a vas felszívódását a növényi ételekből?"
    },  
    options: {
      en: [
        "Eat iron alone",
        "Pair iron-rich foods with vitamin C",
        "Only eat meat occasionally"
      ],
      es: [
        "Comer hierro solo",
        "Combinar alimentos ricos en hierro con vitamina C",
        "Comer carne solo ocasionalmente"
      ],
      hu: [
        "Csak vasat enni",
        "Vasban gazdag ételeket C-vitaminban gazdag ételekkel kombinálni",
        "Csak alkalmanként húst enni"
      ]
    },
    answer: 1
  }
},
2045: {  
  goal: "Healthy living & wellness",  
  diet: "vegan",  
  title: {
    en: "Omega-3 fatty acids for vegans",
    es: "Ácidos grasos omega-3 para veganos",
    hu: "Omega-3 zsírsavak vegánoknak"
  },
  lesson: {
    en: "Omega-3 fatty acids are important for heart, brain, and joint health. Plant-based sources include flaxseeds, chia seeds, walnuts, hemp seeds, and algae oil. These provide ALA, which the body can partially convert into EPA and DHA, the forms found in fish. Including these plant sources ensures adequate omega-3 intake on a vegan diet and supports overall health.",
    es: "Los ácidos grasos omega-3 son importantes para la salud del corazón, el cerebro y las articulaciones. Las fuentes vegetales incluyen semillas de lino, semillas de chía, nueces, semillas de cáñamo y aceite de algas. Estos proporcionan ALA, que el cuerpo puede convertir parcialmente en EPA y DHA, las formas presentes en el pescado. Incluir estas fuentes vegetales asegura una ingesta adecuada de omega-3 en una dieta vegana y apoya la salud general.",
    hu: "Az omega-3 zsírsavak fontosak a szív, az agy és az ízületek egészségéhez. Növényi források a lenmag, chia mag, dió, kendermag és algazsír. Ezek ALA-t biztosítanak, amelyet a test részben EPA- és DHA-formává alakíthat, amelyek a halakban találhatók. Ezeknek a növényi forrásoknak a bevonása biztosítja a megfelelő omega-3 bevitelét vegán étrenden, és támogatja az általános egészséget."
  },
  quiz: {  
    question: {
      en: "Which plant foods provide omega-3 fatty acids?",
      es: "¿Qué alimentos vegetales proporcionan ácidos grasos omega-3?",
      hu: "Mely növényi ételek biztosítanak omega-3 zsírsavakat?"
    },  
    options: {
      en: [
        "Flaxseeds, chia seeds, walnuts, hemp seeds, algae oil",
        "Rice, potatoes, apples",
        "Meat and cheese only"
      ],
      es: [
        "Semillas de lino, semillas de chía, nueces, semillas de cáñamo, aceite de algas",
        "Arroz, patatas, manzanas",
        "Solo carne y queso"
      ],
      hu: [
        "Lenmag, chia mag, dió, kendermag, algazsír",
        "Rizs, burgonya, alma",
        "Csak hús és sajt"
      ]
    },
    answer: 0
  }
},
 
2046: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Humans don’t need meat for nutrients",
    es: "Los humanos no necesitan carne para obtener nutrientes",
    hu: "Az embernek nincs szüksége húsra a tápanyagokhoz"
  },
  lesson: {
    en: "Some people think they 'need meat' because their body is different, but all humans share the same digestive system, teeth, and gut microbiota. We are not naturally carnivores or herbivores — our anatomy is adapted for a mostly plant-based diet. With a variety of plant foods, humans can get all the nutrients they need for strength, energy, and overall health, regardless of individual differences.",
    es: "Algunas personas piensan que 'necesitan carne' porque su cuerpo es diferente, pero todos los humanos compartimos el mismo sistema digestivo, dientes y microbiota intestinal. No somos naturalmente carnívoros ni herbívoros: nuestra anatomía está adaptada para una dieta principalmente basada en plantas. Con una variedad de alimentos vegetales, los humanos pueden obtener todos los nutrientes que necesitan para fuerza, energía y salud general, independientemente de las diferencias individuales.",
    hu: "Sokan azt gondolják, hogy 'húsra van szükségük', mert a testük más, de minden embernek ugyanaz az emésztőrendszere, foga és bélmikrobiotája van. Nem vagyunk természetes ragadozók vagy növényevők — az anatómiánk főként növényi étrendre van adaptálva. Változatos növényi ételekkel minden ember megkaphatja az összes szükséges tápanyagot az erőhöz, energiához és általános egészséghez, függetlenül az egyéni különbségektől."
  },
  quiz: {
    question: {
      en: "Why don’t some humans need meat to get nutrients?",
      es: "¿Por qué algunos humanos no necesitan carne para obtener nutrientes?",
      hu: "Miért nincs szükségük egyes embereknek húsra a tápanyagokhoz?"
    },
    options: {
      en: [
        "Because our digestive system is the same for all humans and can process plants for all nutrients",
        "Because some people are natural carnivores",
        "Because meat is the only source of protein"
      ],
      es: [
        "Porque nuestro sistema digestivo es el mismo para todos los humanos y puede procesar plantas para obtener todos los nutrientes",
        "Porque algunas personas son carnívoros naturales",
        "Porque la carne es la única fuente de proteínas"
      ],
      hu: [
        "Mert az emésztőrendszerünk minden embernél ugyanaz, és a növényekből minden tápanyagot fel tud dolgozni",
        "Mert egyes emberek természetes ragadozók",
        "Mert a hús az egyetlen fehérjeforrás"
      ]
    },
    answer: 0
  }
},

2047: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Vegan athletes can be strong and healthy",
    es: "Los atletas veganos pueden ser fuertes y saludables",
    hu: "A vegán sportolók lehetnek erősek és egészségesek"
  },
  lesson: {
    en: "Some people think vegans are weak or unhealthy, but this isn’t true. Many athletes, bodybuilders, and high-performance individuals thrive on vegan diets. For example, ultramarathoner Scott Jurek, bodybuilder Torre Washington, and tennis champion Venus Williams all maintain strength, endurance, and energy on plant-based diets. With proper planning, vegan diets can support all activity levels and promote overall health.",
    es: "Algunas personas piensan que los veganos son débiles o poco saludables, pero esto no es cierto. Muchos atletas, culturistas y personas de alto rendimiento prosperan con dietas veganas. Por ejemplo, el ultramaratonista Scott Jurek, el culturista Torre Washington y la campeona de tenis Venus Williams mantienen fuerza, resistencia y energía con dietas basadas en plantas. Con una planificación adecuada, las dietas veganas pueden apoyar todos los niveles de actividad y promover la salud general.",
    hu: "Sokan azt gondolják, hogy a vegánok gyengék vagy egészségtelenek, de ez nem igaz. Sok sportoló, testépítő és nagy teljesítményű egyén jól teljesít vegán étrenden. Például Scott Jurek ultramaratonista, Torre Washington testépítő és Venus Williams teniszbajnok mind erőt, állóképességet és energiát tartanak fenn növényi alapú étrenden. Megfelelő tervezéssel a vegán étrend minden aktivitási szintet támogat és elősegíti az általános egészséget."
  },
  quiz: {
    question: {
      en: "Which statement is true about vegan athletes?",
      es: "¿Qué afirmación es verdadera sobre los atletas veganos?",
      hu: "Melyik állítás igaz a vegán sportolókról?"
    },
    options: {
      en: [
        "Vegans are always weak",
        "Vegans can be strong and energetic like Scott Jurek and Venus Williams",
        "Vegans cannot build muscle"
      ],
      es: [
        "Los veganos siempre son débiles",
        "Los veganos pueden ser fuertes y enérgicos como Scott Jurek y Venus Williams",
        "Los veganos no pueden desarrollar músculo"
      ],
      hu: [
        "A vegánok mindig gyengék",
        "A vegánok lehetnek erősek és energikusak, mint Scott Jurek és Venus Williams",
        "A vegánok nem tudnak izmot építeni"
      ]
    },
    answer: 1
  }
},

2048: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Vegan diets are diverse and exciting",
    es: "Las dietas veganas son diversas y emocionantes",
    hu: "A vegán étrend változatos és izgalmas"
  },
  lesson: {
    en: "Some people think vegan diets are restrictive and boring, but in reality there is an enormous variety of plant foods to enjoy. There are over 30,000 edible plant species worldwide, including fruits, vegetables, grains, legumes, nuts, and seeds. By comparison, the average person consumes only a few dozen animal species in their lifetime, mainly chicken, beef, pork, and fish. A vegan diet can be far more diverse, colorful, and flavorful than most typical omnivorous diets.",
    es: "Algunas personas piensan que las dietas veganas son restrictivas y aburridas, pero en realidad existe una enorme variedad de alimentos vegetales para disfrutar. Hay más de 30.000 especies de plantas comestibles en todo el mundo, incluidos frutas, verduras, cereales, legumbres, frutos secos y semillas. En comparación, la persona promedio consume solo unas pocas docenas de especies animales a lo largo de su vida, principalmente pollo, carne de res, cerdo y pescado. Una dieta vegana puede ser mucho más diversa, colorida y sabrosa que la mayoría de las dietas omnívoras típicas.",
    hu: "Sokan azt gondolják, hogy a vegán étrend korlátozó és unalmas, de valójában hatalmas a növényi ételek választéka. Világszerte több mint 30 000 ehető növényfaj létezik, beleértve a gyümölcsöket, zöldségeket, gabonákat, hüvelyeseket, dióféléket és magvakat. Ezzel szemben az átlagember élete során csak néhány tucat állati fajt fogyaszt, főleg csirkét, marhát, sertést és halat. Egy vegán étrend sokkal változatosabb, színesebb és ízletesebb lehet, mint a tipikus mindenevő étrend."
  },
  quiz: {
    question: {
      en: "Approximately how many edible plant species exist worldwide?",
      es: "¿Aproximadamente cuántas especies de plantas comestibles existen en el mundo?",
      hu: "Megközelítőleg hány ehető növényfaj létezik a világon?"
    },
    options: {
      en: ["About 100", "Only 500", "Over 30,000"],
      es: ["Alrededor de 100", "Solo 500", "Más de 30,000"],
      hu: ["Kb. 100", "Csak 500", "Több mint 30 000"]
    },
    answer: 2
  }
},

2049: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Plant-based diets prevent chronic disease",
    es: "Las dietas basadas en plantas previenen enfermedades crónicas",
    hu: "A növényi alapú étrend megelőzi a krónikus betegségeket"
  },
  lesson: {
    en: "Some people argue that vegan diets are unnatural because humans evolved eating meat. While humans are biologically omnivores and can digest both plants and animal products, science shows that a predominantly plant-based diet is fully compatible with human health. Research demonstrates that such diets can prevent, and in some cases even reverse, chronic diseases like heart disease, type 2 diabetes, and high blood pressure. Eating plants is not only natural for humans but also highly beneficial for long-term wellness.",
    es: "Algunas personas argumentan que las dietas veganas son antinaturales porque los humanos evolucionaron comiendo carne. Aunque los humanos son biológicamente omnívoros y pueden digerir tanto plantas como productos animales, la ciencia muestra que una dieta predominantemente basada en plantas es totalmente compatible con la salud humana. La investigación demuestra que estas dietas pueden prevenir, y en algunos casos incluso revertir, enfermedades crónicas como enfermedades cardíacas, diabetes tipo 2 e hipertensión. Comer plantas no solo es natural para los humanos, sino también muy beneficioso para el bienestar a largo plazo.",
    hu: "Sokan azzal érvelnek, hogy a vegán étrend nem természetes, mert az ember húsfogyasztás mellett fejlődött. Bár az emberek biológiailag mindenevők és tudják emészteni a növényeket és állati termékeket is, a tudomány kimutatja, hogy a főként növényi étrend teljesen kompatibilis az emberi egészséggel. Kutatások bizonyítják, hogy az ilyen étrend megelőzheti, és bizonyos esetekben akár vissza is fordíthatja a krónikus betegségeket, például a szívbetegséget, 2-es típusú cukorbetegséget és magas vérnyomást. A növények fogyasztása nemcsak természetes az ember számára, hanem nagyon előnyös a hosszú távú egészség szempontjából."
  },
  quiz: {
    question: {
      en: "What does science say about plant-based diets for humans?",
      es: "¿Qué dice la ciencia sobre las dietas basadas en plantas para los humanos?",
      hu: "Mit mond a tudomány a növényi étrendről az emberek számára?"
    },
    options: {
      en: ["They are unnatural and harmful", "They can prevent or reverse chronic diseases", "They only work for children"],
      es: ["Son antinaturales y dañinas", "Pueden prevenir o revertir enfermedades crónicas", "Solo funcionan para niños"],
      hu: ["Nem természetesek és károsak", "Megelőzhetik vagy visszafordíthatják a krónikus betegségeket", "Csak gyerekeknél működnek"]
    },
    answer: 1
  }
},

2050: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Global trends: meat, dairy, and chronic disease",
    es: "Tendencias globales: carne, lácteos y enfermedades crónicas",
    hu: "Globális trendek: hús, tejtermékek és krónikus betegségek"
  },
  lesson: {
    en: "Over the last ~60 years, global production of meat has increased by about 403% (from 1961 to 2020), and milk and milk products by about 167%. At the same time, chronic illnesses have surged: the number of adults with diabetes has more than quadrupled since 1980 (from ~108 million to over 537 million). Meanwhile, global obesity prevalence among adults more than doubled between 1990 and 2022 (from ~6%–8% to ~14%–18% in many regions). These parallel trends suggest a strong correlation between rising consumption of meat and dairy and increases in heart disease, type 2 diabetes, and obesity worldwide.",
    es: "En los últimos ~60 años, la producción mundial de carne ha aumentado aproximadamente un 403% (de 1961 a 2020), y la de leche y productos lácteos alrededor del 167%. Al mismo tiempo, las enfermedades crónicas han aumentado: el número de adultos con diabetes se ha cuadruplicado desde 1980 (~108 millones a más de 537 millones). Mientras tanto, la prevalencia mundial de obesidad en adultos se más que duplicó entre 1990 y 2022 (de ~6%-8% a ~14%-18% en muchas regiones). Estas tendencias paralelas sugieren una fuerte correlación entre el aumento del consumo de carne y lácteos y el incremento de enfermedades cardíacas, diabetes tipo 2 y obesidad en todo el mundo.",
    hu: "Az elmúlt kb. 60 évben a globális hústermelés mintegy 403%-kal nőtt (1961–2020), a tej és tejtermékek pedig kb. 167%-kal. Ugyanakkor a krónikus betegségek drámaian emelkedtek: a cukorbeteg felnőttek száma 1980 óta több mint négyszeresére nőtt (~108 millióról több mint 537 millióra). Eközben a felnőttek elhízottsági aránya világszerte több mint duplázódott 1990 és 2022 között (~6–8%-ról ~14–18%-ra sok régióban). Ezek a párhuzamos trendek erős összefüggést sugallnak a hús- és tejfogyasztás növekedése és a szívbetegségek, 2-es típusú cukorbetegség, valamint az elhízás emelkedése között világszerte."
  },
  quiz: {
    question: {
      en: "What trend coincided with increased meat and dairy consumption over the last decades?",
      es: "¿Qué tendencia coincidió con el aumento del consumo de carne y lácteos en las últimas décadas?",
      hu: "Milyen trend követte a hús- és tejfogyasztás növekedését az elmúlt évtizedekben?"
    },
    options: {
      en: [
        "Rise in chronic diseases like diabetes and heart disease",
        "Decline in obesity",
        "Decrease in cancer rates"
      ],
      es: [
        "Aumento de enfermedades crónicas como diabetes y cardiopatías",
        "Disminución de la obesidad",
        "Disminución de la tasa de cáncer"
      ],
      hu: [
        "A krónikus betegségek, például a cukorbetegség és szívbetegségek növekedése",
        "Az elhízás csökkenése",
        "A rák előfordulásának csökkenése"
      ]
    },
    answer: 0
  }
},
2051: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Milk may not always strengthen bones",
    es: "La leche no siempre fortalece los huesos",
    hu: "A tej nem mindig erősíti a csontokat"
  },
  lesson: {
    en: "Although milk contains calcium, the digestion of milk protein can cause your body to use more calcium than it provides. This means that high dairy consumption does not necessarily strengthen bones and may even affect bone health negatively.",
    es: "Aunque la leche contiene calcio, la digestión de la proteína de la leche puede hacer que el cuerpo use más calcio del que proporciona. Esto significa que el alto consumo de lácteos no necesariamente fortalece los huesos e incluso puede afectar negativamente la salud ósea.",
    hu: "Bár a tej kalciumot tartalmaz, a tejfehérje emésztése miatt a szervezet több kalciumot használ fel, mint amennyit biztosít. Ez azt jelenti, hogy a magas tejfogyasztás nem feltétlenül erősíti a csontokat, sőt, negatívan befolyásolhatja a csontok egészségét."
  },
  quiz: {
    question: {
      en: "Does milk always strengthen bones?",
      es: "¿La leche siempre fortalece los huesos?",
      hu: "A tej mindig erősíti a csontokat?"
    },
    options: {
      en: ["Yes, always", "No, it can cause net calcium loss", "Only if drunk with sugar"],
      es: ["Sí, siempre", "No, puede causar pérdida neta de calcio", "Solo si se toma con azúcar"],
      hu: ["Igen, mindig", "Nem, nettó kalciumvesztést okozhat", "Csak cukorral fogyasztva"]
    },
    answer: 1
  }
},

2052: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Humans are biologically closer to frugivores",
    es: "Los humanos son biológicamente más similares a frugívoros",
    hu: "Az emberek biológiailag inkább gyümölsevőkhöz hasonlítanak"
  },
  lesson: {
    en: "Humans are biologically closer to frugivores and herbivores like gorillas. Our digestive system, teeth, and gut microbiota are adapted for high-fiber, plant-based foods. While we can digest meat, our anatomy suggests that a mostly plant-based diet is optimal for long-term health.",
    es: "Los humanos son biológicamente más cercanos a frugívoros y herbívoros como los gorilas. Nuestro sistema digestivo, dientes y microbiota intestinal están adaptados para alimentos vegetales ricos en fibra. Aunque podemos digerir carne, nuestra anatomía sugiere que una dieta mayormente basada en plantas es óptima para la salud a largo plazo.",
    hu: "Az emberek biológiailag inkább gyümölsevőkhöz és növényevőkhez, például gorillákhoz hasonlítanak. Az emésztőrendszerünk, a fogaink és a bélmikrobiotánk a magas rosttartalmú, növényi ételekre van adaptálva. Bár húst is meg tudunk emészteni, az anatómia azt sugallja, hogy a főként növényi étrend optimális a hosszú távú egészséghez."
  },
  quiz: {
    question: {
      en: "Humans are most similar in diet to which group?",
      es: "¿A qué grupo son más similares los humanos en su dieta?",
      hu: "Melyik csoport étrendjéhez hasonlítanak leginkább az emberek?"
    },
    options: {
      en: ["Carnivores like lions", "Omnivores like pigs", "Frugivores/herbivores like gorillas"],
      es: ["Carnívoros como los leones", "Omnívoros como los cerdos", "Frugívoros/herbívoros como los gorilas"],
      hu: ["Ragadozók, mint az oroszlán", "Mindenevők, mint a disznó", "Gyümölsevők/növényevők, mint a gorillák"]
    },
    answer: 2
  }
},

2053: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Blue Zones and plant-based diets",
    es: "Zonas Azules y dietas basadas en plantas",
    hu: "Kék zónák és növényi étrend"
  },
  lesson: {
    en: "Blue Zones — regions where people live exceptionally long lives — primarily eat plant-based diets rich in vegetables, legumes, and whole grains. The arrival of fast, meat-heavy foods has eroded these traditional diets, contributing to rising rates of chronic disease and shorter lifespans.",
    es: "Las Zonas Azules — regiones donde las personas viven vidas excepcionalmente largas — consumen principalmente dietas basadas en plantas, ricas en verduras, legumbres y cereales integrales. La llegada de alimentos rápidos y ricos en carne ha erosionado estas dietas tradicionales, contribuyendo al aumento de enfermedades crónicas y a una vida más corta.",
    hu: "A Kék zónák — régiók, ahol az emberek rendkívül hosszú életet élnek — főként növényi étrendet fogyasztanak, gazdag zöldségekben, hüvelyesekben és teljes kiőrlésű gabonákban. A gyors, húsban gazdag ételek megjelenése meggyengítette ezeket a hagyományos étrendeket, hozzájárulva a krónikus betegségek növekedéséhez és a rövidebb élettartamhoz."
  },
  quiz: {
    question: {
      en: "What type of diet is common in Blue Zones?",
      es: "¿Qué tipo de dieta es común en las Zonas Azules?",
      hu: "Milyen étrend jellemző a Kék zónákban?"
    },
    options: {
      en: ["Plant-based with vegetables and legumes", "Fast-food and meat-heavy", "High sugar and processed snacks"],
      es: ["Basada en plantas con verduras y legumbres", "Comida rápida y rica en carne", "Alta en azúcar y snacks procesados"],
      hu: ["Növényi alapú, zöldségekkel és hüvelyesekkel", "Gyorsétel és húsban gazdag", "Magas cukor- és feldolgozott snack-tartalmú"]
    },
    answer: 0
  }
},

2054: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Plant proteins are heart-healthy",
    es: "Las proteínas vegetales son saludables para el corazón",
    hu: "A növényi fehérjék szívbarátok"
  },
  lesson: {
    en: "Plant proteins, such as beans, lentils, tofu, and quinoa, provide all the essential amino acids when eaten in variety. Unlike meat, they contain no cholesterol and much less saturated fat. Diets rich in plant protein are linked to lower risk of heart disease and longer lifespan, while high meat protein intake is associated with inflammation and chronic illness.",
    es: "Las proteínas vegetales, como frijoles, lentejas, tofu y quinoa, proporcionan todos los aminoácidos esenciales cuando se consumen en variedad. A diferencia de la carne, no contienen colesterol y mucho menos grasa saturada. Las dietas ricas en proteínas vegetales se relacionan con menor riesgo de enfermedades cardíacas y mayor longevidad, mientras que un alto consumo de proteínas de carne se asocia con inflamación y enfermedades crónicas.",
    hu: "A növényi fehérjék, mint a bab, lencse, tofu és quinoa, minden esszenciális aminosavat biztosítanak, ha változatosan fogyasztjuk őket. A húsokkal ellentétben nem tartalmaznak koleszterint és sokkal kevesebb telített zsírt. A növényi fehérjében gazdag étrend alacsonyabb szívbetegség-kockázattal és hosszabb élettartammal jár, míg a magas húsfehérje-fogyasztás gyulladással és krónikus betegségekkel kapcsolatos."
  },
  quiz: {
    question: {
      en: "What is one key difference between plant and meat protein?",
      es: "¿Cuál es una diferencia clave entre la proteína vegetal y la de la carne?",
      hu: "Mi az egyik fő különbség a növényi és a húsfehérje között?"
    },
    options: {
      en: ["Meat proteins are cholesterol-free", "Plant proteins contain no cholesterol", "Plant proteins lack amino acids"],
      es: ["Las proteínas de la carne no contienen colesterol", "Las proteínas vegetales no contienen colesterol", "Las proteínas vegetales carecen de aminoácidos"],
      hu: ["A húsfehérje koleszterinmentes", "A növényi fehérje nem tartalmaz koleszterint", "A növényi fehérje aminosavakban hiányos"]
    },
    answer: 1
  }
},

2055: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "High meat and dairy intake raises disease risk",
    es: "El alto consumo de carne y lácteos aumenta el riesgo de enfermedades",
    hu: "A magas hús- és tejfogyasztás növeli a betegségek kockázatát"
  },
  lesson: {
    en: "Heart disease, stroke, diabetes, and certain cancers are among the top causes of death globally. Research shows that diets high in meat and dairy significantly increase the risk of these diseases by raising LDL cholesterol, promoting inflammation, and affecting insulin sensitivity.",
    es: "Las enfermedades cardíacas, accidentes cerebrovasculares, diabetes y ciertos tipos de cáncer están entre las principales causas de muerte a nivel mundial. La investigación muestra que las dietas ricas en carne y lácteos aumentan significativamente el riesgo de estas enfermedades al elevar el colesterol LDL, promover la inflamación y afectar la sensibilidad a la insulina.",
    hu: "A szívbetegségek, stroke, cukorbetegség és bizonyos rákok a leggyakoribb halálozási okok világszerte. A kutatások kimutatják, hogy a hús- és tejben gazdag étrend jelentősen növeli ezen betegségek kockázatát az LDL-koleszterin emelésével, a gyulladás elősegítésével és az inzulinérzékenység befolyásolásával."
  },
  quiz: {
    question: {
      en: "Which dietary factor contributes to major global diseases?",
      es: "¿Qué factor dietético contribuye a las principales enfermedades globales?",
      hu: "Mely étrendi tényező járul hozzá a főbb globális betegségekhez?"
    },
    options: {
      en: ["Eating more vegetables", "Exercising regularly", "High meat and dairy consumption"],
      es: ["Comer más verduras", "Hacer ejercicio regularmente", "Alto consumo de carne y lácteos"],
      hu: ["Több zöldség fogyasztása", "Rendszeres testmozgás", "Magas hús- és tejfogyasztás"]
    },
    answer: 2
  }
},

2056: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "High cheese intake raises heart risk",
    es: "El alto consumo de queso aumenta el riesgo cardíaco",
    hu: "A magas sajtfogyasztás növeli a szívbetegség kockázatát"
  },
  lesson: {
    en: "The human body can handle only small amounts of saturated fat and LDL cholesterol. Excess consumption from meat and dairy — like in cheese, which can contain 6–8g of saturated fat per 30g slice — raises blood cholesterol and increases heart disease risk.",
    es: "El cuerpo humano solo puede manejar pequeñas cantidades de grasa saturada y colesterol LDL. El consumo excesivo de carne y lácteos — como el queso, que puede contener 6–8 g de grasa saturada por rebanada de 30 g — aumenta el colesterol en sangre y el riesgo de enfermedades cardíacas.",
    hu: "Az emberi szervezet csak kis mennyiségű telített zsírt és LDL-koleszterint képes feldolgozni. A húsból és tejtermékekből származó túlzott fogyasztás — például a sajt, amely 30 g szeletben 6–8 g telített zsírt tartalmazhat — emeli a vér koleszterinszintjét és növeli a szívbetegség kockázatát."
  },
  quiz: {
    question: {
      en: "Why is high intake of cheese a concern?",
      es: "¿Por qué es preocupante el alto consumo de queso?",
      hu: "Miért aggályos a magas sajtfogyasztás?"
    },
    options: {
      en: ["It contains high saturated fat, raising LDL cholesterol", "It provides too much fiber", "It reduces energy levels"],
      es: ["Contiene mucha grasa saturada, elevando el colesterol LDL", "Proporciona demasiada fibra", "Reduce los niveles de energía"],
      hu: ["Magas telített zsírt tartalmaz, növeli az LDL-koleszterint", "Túl sok rostot biztosít", "Csökkenti az energiaszintet"]
    },
    answer: 0
  }
},

2057: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Milk contributes significant saturated fat",
    es: "La leche aporta grasa saturada significativa",
    hu: "A tej jelentős telített zsírt tartalmaz"
  },
  lesson: {
    en: "A standard 250ml glass of whole milk contains roughly 8g of fat, of which about 5g is saturated. This can provide a significant percentage of your daily recommended saturated fat intake, often over 20% of calories for an average adult, contributing to heart disease risk if consumed daily.",
    es: "Un vaso estándar de 250 ml de leche entera contiene aproximadamente 8 g de grasa, de los cuales alrededor de 5 g son saturados. Esto puede representar un porcentaje significativo de la ingesta diaria recomendada de grasas saturadas, a menudo más del 20 % de las calorías para un adulto promedio, aumentando el riesgo de enfermedades cardíacas si se consume a diario.",
    hu: "Egy standard 250 ml-es pohár teljes tej körülbelül 8 g zsírt tartalmaz, amelyből kb. 5 g telített. Ez az ajánlott napi telített zsírbevitel jelentős részét adhatja, gyakran az átlagos felnőtt kalóriabevitelének több mint 20%-át, növelve a szívbetegség kockázatát, ha naponta fogyasztják."
  },
  quiz: {
    question: {
      en: "What percentage of your daily saturated fat can a glass of milk provide?",
      es: "¿Qué porcentaje de tu grasa saturada diaria puede aportar un vaso de leche?",
      hu: "A napi telített zsírbevitel hány százalékát fedezheti egy pohár tej?"
    },
    options: {
      en: ["Less than 5%", "Over 20%", "0%"],
      es: ["Menos del 5%", "Más del 20%", "0%"],
      hu: ["Kevesebb mint 5%", "Több mint 20%", "0%"]
    },
    answer: 1
  }
},

2058: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Hormones naturally present in milk",
    es: "Hormonas presentes naturalmente en la leche",
    hu: "A tejben természetesen jelen lévő hormonok"
  },
  lesson: {
    en: "Milk contains hormones like estrogen, progesterone, and IGF-1. These hormones can influence human hormone levels, potentially affecting growth, development, and reproductive health, which is particularly concerning for children consuming large quantities.",
    es: "La leche contiene hormonas como estrógeno, progesterona e IGF-1. Estas hormonas pueden influir en los niveles hormonales humanos, afectando potencialmente el crecimiento, el desarrollo y la salud reproductiva, lo que es particularmente preocupante para los niños que consumen grandes cantidades.",
    hu: "A tej tartalmaz hormonokat, például ösztrogént, progeszteront és IGF-1-et. Ezek a hormonok befolyásolhatják az emberi hormon szinteket, potenciálisan hatva a növekedésre, fejlődésre és a reproduktív egészségre, ami különösen aggályos a nagy mennyiségben fogyasztó gyermekek esetében."
  },
  quiz: {
    question: {
      en: "What hormones are naturally present in cow's milk?",
      es: "¿Qué hormonas están presentes naturalmente en la leche de vaca?",
      hu: "Mely hormonok vannak természetesen jelen a tehéntejben?"
    },
    options: {
      en: ["Adrenaline, testosterone", "Insulin only","Estrogen, progesterone, IGF-1"],
      es: ["Adrenalina, testosterona", "Solo insulina", "Estrógeno, progesterona, IGF-1"],
      hu: ["Adrenalin, tesztoszteron", "Csak inzulin", "Ösztrogén, progeszteron, IGF-1"]
    },
    answer: 2
  }
},

2059: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Soy does not feminize men",
    es: "La soja no feminiza a los hombres",
    hu: "A szója nem teszi nőiesebbé a férfiakat"
  },
  lesson: {
    en: "Soy contains phytoestrogens, plant compounds that mimic estrogen. However, research shows they do not feminize men when consumed in normal dietary amounts. Instead, they may offer health benefits like lowering cholesterol and supporting heart health.",
    es: "La soja contiene fitoestrógenos, compuestos vegetales que imitan el estrógeno. Sin embargo, la investigación muestra que no feminiza a los hombres cuando se consume en cantidades normales. En cambio, puede ofrecer beneficios para la salud, como reducir el colesterol y apoyar la salud cardíaca.",
    hu: "A szója fitoösztrogéneket tartalmaz, növényi vegyületeket, amelyek az ösztrogénhez hasonló hatásúak. A kutatások szerint a normál mennyiségű fogyasztás nem feminizálja a férfiakat. Ehelyett egészségügyi előnyökkel járhat, például csökkentheti a koleszterint és támogathatja a szív egészségét."
  },
  quiz: {
    question: {
      en: "Does consuming soy make men feminine?",
      es: "¿El consumo de soja hace que los hombres se vuelvan femeninos?",
      hu: "A szója fogyasztása nőiesebbé teszi a férfiakat?"
    },
    options: {
      en: ["No, normal dietary amounts are safe", "Yes, immediately", "Only if combined with dairy"],
      es: ["No, las cantidades normales son seguras", "Sí, inmediatamente", "Solo si se combina con lácteos"],
      hu: ["Nem, a normál mennyiség biztonságos", "Igen, azonnal", "Csak ha tejtermékkel kombinálva"]
    },
    answer: 0
  }
},

2060: {
  goal: "Healthy living & wellness",
  diet: "vegan",
  title: {
    en: "Fiber benefits in plant-based diets",
    es: "Beneficios de la fibra en dietas basadas en plantas",
    hu: "A rost előnyei a növényi étrendben"
  },
  lesson: {
    en: "Plant-based diets are naturally high in fiber, which helps regulate digestion, stabilize blood sugar, and lower cholesterol levels. Over time, this can reduce the risk of cardiovascular disease and improve gut microbiome diversity.",
    es: "Las dietas basadas en plantas son naturalmente ricas en fibra, lo que ayuda a regular la digestión, estabilizar el azúcar en sangre y reducir los niveles de colesterol. Con el tiempo, esto puede reducir el riesgo de enfermedades cardiovasculares y mejorar la diversidad del microbioma intestinal.",
    hu: "A növényi étrendek természetesen magas rosttartalmúak, ami segít szabályozni az emésztést, stabilizálni a vércukorszintet és csökkenteni a koleszterinszintet. Idővel ez csökkentheti a szív- és érrendszeri betegségek kockázatát és javíthatja a bélmikrobiom sokszínűségét."
  },
  quiz: {
    question: {
      en: "Why is fiber in plant-based diets beneficial?",
      es: "¿Por qué es beneficiosa la fibra en dietas basadas en plantas?",
      hu: "Miért előnyös a rost a növényi étrendben?"
    },
    options: {
      en: ["Causes constipation", "Regulates digestion, lowers cholesterol, stabilizes blood sugar", "No effect"],
      es: ["Causa estreñimiento", "Regula la digestión, reduce el colesterol, estabiliza el azúcar en sangre", "Sin efecto"],
      hu: ["Székrekedést okoz", "Szabályozza az emésztést, csökkenti a koleszterint, stabilizálja a vércukrot", "Nincs hatása"]
    },
    answer: 1
  }
},

// continue

/*
// --------------------------
// Boosting my performance as an athlete – Omnivore
// --------------------------
3001: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "The myth of needing meat for strength",
    es: "El mito de necesitar carne para ser fuerte",
    hu: "A hús szükségességének mítosza az erőért"
  },
  lesson: {
    en: "The idea that 'we need meat to be strong' is largely a cultural myth rather than a biological fact. Historically, societies valued meat as a symbol of wealth and power, which reinforced the belief that strength depended on animal products. Scientifically, muscle growth and performance depend on total protein intake, calories, and nutrient balance, not the source of protein.",
    es: "La idea de que 'necesitamos carne para ser fuertes' es en gran medida un mito cultural más que un hecho biológico. Históricamente, las sociedades valoraban la carne como un símbolo de riqueza y poder, lo que reforzaba la creencia de que la fuerza dependía de los productos animales. Científicamente, el crecimiento muscular y el rendimiento dependen de la ingesta total de proteínas, calorías y equilibrio de nutrientes, no de la fuente de proteínas.",
    hu: "Az az elképzelés, hogy „húsra van szükségünk az erőhöz”, nagyrészt kulturális mítosz, nem biológiai tény. Történelmileg a társadalmak a húst a gazdagság és hatalom szimbólumának tekintették, ami megerősítette azt a hitet, hogy az erő az állati termékektől függ. Tudományosan az izomnövekedés és a teljesítmény a teljes fehérjebeviteltől, a kalóriától és a tápanyag-egyensúlytól függ, nem a fehérje forrásától."
  },
  quiz: {  
    question: {
      en: "What is the main reason the 'we need meat to be strong' myth exists?",
      es: "¿Cuál es la principal razón por la que existe el mito de 'necesitamos carne para ser fuertes'?",
      hu: "Mi az oka annak, hogy az „erőhöz hús kell” mítosz létezik?"
    },  
    options: {
      en: [
        "Biological necessity",
        "Instant muscle gain",
        "Cultural beliefs linking meat to power"
      ],
      es: [
        "Necesidad biológica",
        "Ganancia muscular instantánea",
        "Creencias culturales que vinculan la carne con el poder"
      ],
      hu: [
        "Biológiai szükségesség",
        "Azonnali izomnövekedés",
        "Kulturális hiedelmek, amelyek a húst a hatalomhoz kötik"
      ]
    },
    answer: 2
  }
},

3002: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Athletes and protein sources",
    es: "Atletas y fuentes de proteína",
    hu: "Sportolók és a fehérjeforrások"
  },
  lesson: {
    en: "Many people assume professional athletes eat large amounts of meat, but research shows this is not always true. Top athletes focus on meeting protein, calorie, and nutrient needs, which can come from both animal and plant sources. While some include meat, many use eggs, dairy, legumes, tofu, and grains to get enough protein. The key factor for performance is balanced nutrition, not high meat intake.",
    es: "Muchas personas asumen que los atletas profesionales comen grandes cantidades de carne, pero la investigación muestra que esto no siempre es cierto. Los atletas de élite se enfocan en satisfacer las necesidades de proteínas, calorías y nutrientes, que pueden provenir tanto de fuentes animales como vegetales. Mientras algunos incluyen carne, muchos usan huevos, lácteos, legumbres, tofu y cereales para obtener suficiente proteína. El factor clave para el rendimiento es la nutrición equilibrada, no la alta ingesta de carne.",
    hu: "Sokan feltételezik, hogy a profi sportolók nagy mennyiségű húst fogyasztanak, de a kutatások azt mutatják, hogy ez nem mindig igaz. A legjobb sportolók a fehérje-, kalória- és tápanyagszükségletük kielégítésére összpontosítanak, amely származhat állati és növényi forrásokból is. Míg néhányan húst fogyasztanak, sokan tojást, tejtermékeket, hüvelyeseket, tofut és gabonát használnak a megfelelő fehérjebevitelhez. A teljesítmény kulcsa a kiegyensúlyozott táplálkozás, nem a magas húsbevitel."
  },
  quiz: {  
    question: {
      en: "Do professional athletes need a diet rich in meat to perform well?",
      es: "¿Los atletas profesionales necesitan una dieta rica en carne para rendir bien?",
      hu: "A profi sportolóknak húsban gazdag étrendre van szükségük a jó teljesítményhez?"
    },  
    options: {
      en: [
        "No, balanced nutrition is more important",
        "Yes, meat is essential",
        "Only on competition days"
      ],
      es: [
        "No, la nutrición equilibrada es más importante",
        "Sí, la carne es esencial",
        "Solo en los días de competición"
      ],
      hu: [
        "Nem, a kiegyensúlyozott táplálkozás fontosabb",
        "Igen, a hús elengedhetetlen",
        "Csak versenynapokon"
      ]
    },
    answer: 0
  }
},
3003: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Athletes can perform without meat",
    es: "Los atletas pueden rendir sin carne",
    hu: "A sportolók hús nélkül is teljesíthetnek"
  },
  lesson: {
    en: "Studies show that athletes can maintain or even improve strength and performance without meat if they get enough protein from plant and other non-meat sources. Key findings include:\n- Protein intake: 1.2–2.0 g of protein per kg of body weight per day is sufficient for muscle maintenance.\n- Recovery times: Athletes on well-planned plant-based diets report 10–20% faster muscle recovery due to lower inflammation.\n- Endurance performance: VO₂ max and stamina measures show no significant difference after 4–12 weeks.\n- Body composition: Lean muscle mass can be maintained or increased if total calories and protein needs are met.",
    es: "Los estudios muestran que los atletas pueden mantener o incluso mejorar la fuerza y el rendimiento sin carne si obtienen suficiente proteína de fuentes vegetales y otras fuentes no cárnicas. Hallazgos clave:\n- Ingesta de proteínas: 1.2–2.0 g de proteína por kg de peso corporal por día es suficiente.\n- Tiempos de recuperación: Los atletas con dietas vegetales bien planificadas reportan una recuperación muscular 10–20% más rápida debido a menor inflamación.\n- Rendimiento de resistencia: VO₂ máx y resistencia muestran diferencias insignificantes después de 4–12 semanas.\n- Composición corporal: La masa muscular magra puede mantenerse o aumentarse si se cumplen las necesidades calóricas y proteicas.",
    hu: "Tanulmányok kimutatták, hogy a sportolók hús nélkül is fenntarthatják vagy akár javíthatják az erőt és a teljesítményt, ha elegendő fehérjét fogyasztanak növényi és más nem húsforrásokból. Főbb megállapítások:\n- Fehérjebevitel: napi 1,2–2,0 g fehérje testsúlykilogrammonként elegendő az izomtömeg fenntartásához.\n- Regenerációs idő: a jól megtervezett növényi étrenden lévő sportolók 10–20%-kal gyorsabb izomregenerációról számolnak be, az alacsonyabb gyulladás miatt.\n- Állóképesség: a VO₂ max és a kitartás 4–12 hét után nem mutat jelentős különbséget.\n- Testösszetétel: a sovány izomtömeg fenntartható vagy növelhető, ha a teljes kalória- és fehérjeszükséglet teljesül."
  },
  quiz: {  
    question: {
      en: "What protein intake range supports muscle maintenance for athletes?",
      es: "¿Qué rango de ingesta de proteína mantiene la masa muscular en atletas?",
      hu: "Milyen fehérjebevitel támogatja az izomfenntartást sportolóknál?"
    },  
    options: {
      en: [
        "1.2–2.0 g/kg/day",
        "0.5–1.0 g/kg/day",
        "2.5–3.0 g/kg/day"
      ],
      es: [
        "1.2–2.0 g/kg/día",
        "0.5–1.0 g/kg/día",
        "2.5–3.0 g/kg/día"
      ],
      hu: [
        "1,2–2,0 g/testsúlykg/nap",
        "0,5–1,0 g/testsúlykg/nap",
        "2,5–3,0 g/testsúlykg/nap"
      ]
    },
    answer: 0
  }
},
3004: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Digestion and energy for athletes",
    es: "Digestión y energía para atletas",
    hu: "Emésztés és energia sportolóknak"
  },
  lesson: {
    en: "Plant-based foods are generally easier to digest than large amounts of meat. They are rich in fiber and water, which support gut health and smooth digestion. When the body spends less energy on breaking down heavy animal products, more energy is available for training and performance. This can lead to better stamina, quicker recovery, and more consistent energy levels during workouts.",
    es: "Los alimentos vegetales son generalmente más fáciles de digerir que grandes cantidades de carne. Son ricos en fibra y agua, lo que apoya la salud intestinal y la digestión. Cuando el cuerpo gasta menos energía en descomponer productos animales pesados, hay más energía disponible para el entrenamiento y el rendimiento. Esto puede conducir a mejor resistencia, recuperación más rápida y niveles de energía más consistentes durante los entrenamientos.",
    hu: "A növényi ételek általában könnyebben emészthetők, mint a nagy mennyiségű hús. Gazdagok rostban és vízben, ami támogatja a bél egészségét és a sima emésztést. Ha a test kevesebb energiát használ fel a nehéz állati termékek lebontására, több energia áll rendelkezésre az edzéshez és a teljesítményhez. Ez jobb állóképességhez, gyorsabb regenerációhoz és egyenletesebb energiaszinthez vezethet az edzések alatt."
  },
  quiz: {  
    question: {
      en: "Why can plant-based foods provide more energy for sports?",
      es: "¿Por qué los alimentos vegetales proporcionan más energía para el deporte?",
      hu: "Miért biztosíthatnak a növényi ételek több energiát a sporthoz?"
    },  
    options: {
      en: [
        "They instantly increase muscle size",
        "They are easier to digest, so the body uses less energy on digestion",
        "They replace the need for carbohydrates"
      ],
      es: [
        "Aumentan instantáneamente el tamaño muscular",
        "Son más fáciles de digerir, por lo que el cuerpo usa menos energía en la digestión",
        "Sustituyen la necesidad de carbohidratos"
      ],
      hu: [
        "Azonnal növelik az izomtömeget",
        "Könnyebben emészthetők, így a test kevesebb energiát használ az emésztésre",
        "Helyettesítik a szénhidrát szükségletet"
      ]
    },
    answer: 1
  }
},
3005: {  
  goal: "Boosting my performance as an athlete",  
  diet: "omnivore",  
  title: {
    en: "Blood flow and athletic performance",
    es: "Flujo sanguíneo y rendimiento atlético",
    hu: "A véráramlás és a sportteljesítmény"
  },
  lesson: {
    en: "A plant-based diet can improve athletic performance by keeping veins and arteries healthier. Less saturated fat and more antioxidants reduce plaque buildup, allowing blood to flow freely. This ensures muscles get more oxygen, supporting endurance, stamina, and overall performance.",
    es: "Una dieta basada en plantas puede mejorar el rendimiento atlético al mantener las venas y arterias más saludables. Menos grasas saturadas y más antioxidantes reducen la acumulación de placa, permitiendo que la sangre fluya libremente. Esto asegura que los músculos reciban más oxígeno, apoyando la resistencia, la fuerza y el rendimiento general.",
    hu: "A növényi alapú étrend javíthatja a sportteljesítményt azáltal, hogy az ereket és artériákat egészségesebbé teszi. Kevesebb telített zsír és több antioxidáns csökkenti a plakk képződését, így a vér szabadon áramolhat. Ez biztosítja, hogy az izmok több oxigént kapjanak, támogatva az állóképességet, a kitartást és az általános teljesítményt."
  },
  quiz: {  
    question: {
      en: "How does a plant-based diet help muscles get more oxygen?",
      es: "¿Cómo ayuda una dieta vegetal a que los músculos reciban más oxígeno?",
      hu: "Hogyan segít a növényi alapú étrend az izmoknak több oxigénhez jutni?"
    },  
    options: {
      en: [
        "By instantly increasing muscle size",
        "By keeping veins healthier",
        "By lowering heart rate permanently"
      ],
      es: [
        "Aumentando instantáneamente el tamaño muscular",
        "Manteniendo las venas más saludables",
        "Reduciendo permanentemente la frecuencia cardíaca"
      ],
      hu: [
        "Azonnal növelve az izomtömeget",
        "Az erek egészségének megőrzésével",
        "Az állandó pulzusszám csökkentésével"
      ]
    },
    answer: 1
  }
},

3006: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  title: {
    en: "Vegan athletes report performance benefits",
    es: "Los atletas veganos informan beneficios en el rendimiento",
    hu: "A vegán sportolók teljesítményjavulást tapasztalnak"
  },
  lesson: {
    en: "Professional athletes who went vegan often share very specific experiences. For example: \n\n- Venus Williams switched to a plant-based diet to manage an autoimmune disease. She noticed reduced inflammation, faster recovery after matches, and more consistent energy levels.\n- Nimai Delgado, a professional bodybuilder, reports that a vegan diet allowed him to maintain and even build muscle while feeling lighter and more energetic. He emphasizes planning meals with high-protein plant foods like lentils, beans, tofu, and seitan.\n- Scott Jurek, ultramarathoner, credits his vegan diet for improved endurance, faster recovery between runs, and fewer digestive issues on long races.\n- Lewis Hamilton, Formula 1 driver, says going vegan helped him feel more focused, recover quicker, and maintain a leaner physique.\n\nThese athletes highlight that the benefits are not just theoretical: increased stamina, faster recovery, less inflammation, and mental clarity are commonly reported.",
    es: "Los atletas profesionales que se volvieron veganos a menudo comparten experiencias específicas. Por ejemplo: \n\n- Venus Williams cambió a una dieta basada en plantas para manejar una enfermedad autoinmune. Notó menos inflamación, recuperación más rápida tras los partidos y niveles de energía más consistentes.\n- Nimai Delgado, culturista profesional, informa que una dieta vegana le permitió mantener e incluso aumentar músculo mientras se sentía más ligero y enérgico. Destaca la planificación de comidas con alimentos vegetales ricos en proteínas como lentejas, frijoles, tofu y seitán.\n- Scott Jurek, ultramaratonista, atribuye a su dieta vegana una mejor resistencia, recuperación más rápida entre carreras y menos problemas digestivos en carreras largas.\n- Lewis Hamilton, piloto de Fórmula 1, dice que volverse vegano le ayudó a sentirse más concentrado, recuperarse más rápido y mantener una complexión más delgada.\n\nEstos atletas muestran que los beneficios no son solo teóricos: mayor resistencia, recuperación más rápida, menos inflamación y claridad mental se reportan comúnmente.",
    hu: "A profi sportolók, akik vegán étrendre váltottak, gyakran nagyon konkrét tapasztalatokat osztanak meg. Például: \n\n- Venus Williams növényi alapú étrendre váltott autoimmun betegsége kezelése érdekében. Kevesebb gyulladást, gyorsabb regenerálódást a meccsek után és kiegyensúlyozottabb energiaszintet tapasztalt.\n- Nimai Delgado, profi testépítő, beszámol róla, hogy a vegán étrend lehetővé tette számára az izomtömeg megtartását és növelését, miközben könnyebbnek és energikusabbnak érezte magát. Kiemeli a magas fehérjetartalmú növényi ételek (lencse, bab, tofu, szejtán) tervezett fogyasztását.\n- Scott Jurek, ultramaratonista, a vegán étrendjét dicséri a jobb állóképességért, gyorsabb regenerálódásért a futások között és kevesebb emésztési problémaért hosszú versenyeken.\n- Lewis Hamilton, Forma-1-es pilóta, szerint a vegán étrend segített neki fókuszáltabbnak érezni magát, gyorsabban regenerálódni és karcsúbb testalkatot fenntartani.\n\nEzek az sportolók azt mutatják, hogy a hatások nem csak elméletiek: megnövekedett állóképesség, gyorsabb regenerálódás, kevesebb gyulladás és mentális tisztaság gyakori tapasztalat."
  },
  quiz: { 
    question: {
      en: "What is a common benefit professional athletes notice after going vegan?", 
      es: "¿Cuál es un beneficio común que notan los atletas profesionales después de volverse veganos?", 
      hu: "Mi a gyakori előny, amit a profi sportolók tapasztalnak a vegán étrendre váltás után?" 
    },
    options: {
      en: ["Faster recovery", "Reduced focus", "Decreased endurance"], 
      es: ["Recuperación más rápida", "Menor concentración", "Menor resistencia"], 
      hu: ["Gyorsabb regenerálódás", "Csökkent fókusz", "Csökkent állóképesség"]
    },
    answer: 0 
  } 
},

3007: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  title: {
    en: "Timing of performance improvements",
    es: "Momento de las mejoras en el rendimiento",
    hu: "Teljesítményjavulás időzítése"
  },
  lesson: {
    en: "Many athletes notice changes in performance within a few days to weeks of switching to a plant-based diet, depending on what they were eating before and how well they plan their meals. \n\n- Immediate (3–7 days): Some report feeling lighter, less bloated, and more energetic during training sessions.\n- Short-term (2–4 weeks): Improved recovery, less muscle soreness, and better digestion are often noticed.\n- Medium-term (1–3 months): Enhanced stamina, faster endurance, and sometimes better sleep quality appear.\n\nAthletes who plan their plant-based diet carefully with sufficient protein, complex carbs, and healthy fats tend to see positive changes faster. Tracking workouts and recovery helps identify improvements objectively.",
    es: "Muchos atletas notan cambios en el rendimiento dentro de unos días o semanas de cambiar a una dieta basada en plantas, dependiendo de lo que comían antes y de cómo planifican sus comidas. \n\n- Inmediato (3–7 días): Algunos sienten más ligereza, menos hinchazón y más energía durante los entrenamientos.\n- Corto plazo (2–4 semanas): Recuperación mejorada, menos dolor muscular y mejor digestión.\n- Medio plazo (1–3 meses): Mayor resistencia, mejor capacidad de esfuerzo y a veces mejor calidad del sueño.\n\nLos atletas que planifican cuidadosamente su dieta basada en plantas con suficiente proteína, carbohidratos complejos y grasas saludables tienden a ver cambios positivos más rápido. Seguir entrenamientos y recuperación ayuda a identificar mejoras objetivamente.",
    hu: "Sok sportoló már néhány nap–hét alatt észleli a teljesítmény változását, ha növényi alapú étrendre vált, attól függően, mit ettek korábban és mennyire tervezik meg az étkezéseket.\n\n- Azonnali (3–7 nap): Néhányan könnyebbnek, kevésbé puffadtnak és energikusabbnak érzik magukat az edzések során.\n- Rövid távú (2–4 hét): Javul a regeneráció, kevesebb az izomláz, jobb az emésztés.\n- Középtávú (1–3 hónap): Növekvő állóképesség, gyorsabb kitartás, néha jobb alvásminőség.\n\nAzok a sportolók, akik gondosan tervezik növényi étrendjüket elegendő fehérjével, összetett szénhidrátokkal és egészséges zsírokkal, gyorsabban tapasztalják a pozitív változásokat. Az edzések és regeneráció követése objektíven mutatja a fejlődést."
  },
  quiz: { 
    question: {
      en: "When do many athletes notice initial changes after switching to a plant-based diet?", 
      es: "¿Cuándo notan muchos atletas los cambios iniciales después de cambiar a una dieta basada en plantas?", 
      hu: "Mikor észlelik sok sportoló az első változásokat a növényi étrendre váltás után?" 
    },
    options: {
      en: ["6 months", "3–7 days", "1 year"], 
      es: ["6 meses", "3–7 días", "1 año"], 
      hu: ["6 hónap", "3–7 nap", "1 év"]
    },
    answer: 1 
  } 
},

3008: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  title: {
    en: "Novak Djokovic's Olympic comeback",
    es: "El regreso olímpico de Novak Djokovic",
    hu: "Novak Djokovic olimpiai visszatérése"
  },
  lesson: {
    en: "At age 37, Novak Djokovic, a committed vegan, became the oldest Olympic men's singles tennis champion at the Paris 2024 Games. Just weeks before the Olympics, he underwent knee surgery to repair a torn meniscus. Despite this challenge, Djokovic returned to the court and won gold by defeating Carlos Alcaraz. His plant-based diet, rich in fruits, vegetables, nuts, and legumes, helped support faster recovery and peak performance, showing that strength and endurance can be maintained even after surgery and at an older age.",
    es: "A los 37 años, Novak Djokovic, vegano comprometido, se convirtió en el campeón olímpico más viejo en individuales masculinos de tenis en los Juegos de París 2024. Solo semanas antes de los Juegos, se sometió a una cirugía de rodilla para reparar un menisco desgarrado. A pesar de este desafío, Djokovic regresó a la cancha y ganó el oro derrotando a Carlos Alcaraz. Su dieta basada en plantas, rica en frutas, verduras, nueces y legumbres, ayudó a una recuperación más rápida y al rendimiento máximo, demostrando que la fuerza y la resistencia se pueden mantener incluso después de la cirugía y a mayor edad.",
    hu: "37 évesen Novak Djokovic, elkötelezett vegán, lett a legidősebb olimpiai férfi egyes teniszbajnok a párizsi 2024-es játékokon. Csak hetekkel az olimpia előtt térdműtétje volt a szakad meniscus javítására. Ennek ellenére visszatért a pályára és legyőzte Carlos Alcaraz-t az aranyéremért. Növényi alapú étrendje, gazdag gyümölcsökben, zöldségekben, diófélékben és hüvelyesekben, segítette a gyorsabb regenerációt és a csúcsteljesítményt, bizonyítva, hogy az erő és állóképesség fenntartható még műtét után és idősebb korban is."
  },
  quiz: { 
    question: {
      en: "What makes Novak Djokovic's Olympic gold in Paris 2024 remarkable?", 
      es: "¿Qué hace que el oro olímpico de Novak Djokovic en París 2024 sea notable?", 
      hu: "Miért figyelemre méltó Novak Djokovic párizsi olimpiai aranya 2024-ben?" 
    },
    options: {
      en: ["Youngest singles champion", "First Grand Slam win", "Oldest singles champion, knee surgery, vegan diet"], 
      es: ["El campeón más joven", "Primer Grand Slam", "El campeón más viejo, cirugía de rodilla, dieta vegana"], 
      hu: ["A legfiatalabb egyes bajnok", "Első Grand Slam győzelem", "Legidősebb egyes bajnok, térdműtét, vegán étrend"]
    },
    answer: 2 
  } 
},

3009: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  title: {
    en: "Plant-based strength with Patrick Baboumian",
    es: "Fuerza basada en plantas con Patrick Baboumian",
    hu: "Növényi alapú erő Patrick Baboumiannal"
  },
  lesson: {
    en: "Patrick Baboumian, a professional strongman and world record holder, proves that a plant-based diet can support extreme strength. He holds multiple records, including lifting over 500 kg in the yoke walk. He says: 'The world's strongest animals are plant eaters. Gorillas, buffaloes, elephants and me.'",
    es: "Patrick Baboumian, hombre más fuerte profesional y poseedor de récords mundiales, demuestra que una dieta basada en plantas puede apoyar la fuerza extrema. Tiene múltiples récords, incluyendo levantar más de 500 kg en el yoke walk. Él dice: 'Los animales más fuertes del mundo son herbívoros. Gorilas, búfalos, elefantes y yo.'",
    hu: "Patrick Baboumian, profi erősember és világrekorder bizonyítja, hogy a növényi alapú étrend extrém erőt támogathat. Több rekordot tart, köztük a 500 kg feletti emelést yoke walk-on. Azt mondja: 'A világ legerősebb állatai növényevők. Gorillák, bivalyok, elefántok és én.'"
  },
  quiz: { 
    question: {
      en: "What key idea does Patrick Baboumian emphasize about strength?", 
      es: "¿Qué idea clave enfatiza Patrick Baboumian sobre la fuerza?", 
      hu: "Melyik kulcsfontosságú gondolatot hangsúlyozza Patrick Baboumian az erőről?" 
    },
    options: {
      en: ["The strongest animals on earth are plant eaters", "Meat is essential for strength", "Only supplements build strength"], 
      es: ["Los animales más fuertes del mundo son herbívoros", "La carne es esencial para la fuerza", "Solo los suplementos construyen fuerza"], 
      hu: ["A világ legerősebb állatai növényevők", "A hús elengedhetetlen az erőhöz", "Csak a kiegészítők építik az erőt"]
    },
    answer: 0 
  } 
},

3010: { 
  goal: "Boosting my performance as an athlete", 
  diet: "omnivore",
  title: {
    en: "Testing plant-based benefits firsthand",
    es: "Probar los beneficios de plantas de primera mano",
    hu: "A növényi előnyök első kézből történő kipróbálása"
  },
  lesson: {
    en: "If you’re curious about plant-based eating, you can try an immediate test by eating mostly plant-based foods for just a few days. Many athletes report feeling lighter, more energetic, and less bloated within 3–7 days. Recovery after workouts can feel faster, and digestion often improves. Tracking how your body responds helps you see the benefits of plant-based choices firsthand.",
    es: "Si tienes curiosidad por la alimentación basada en plantas, puedes probar un test inmediato comiendo principalmente alimentos vegetales durante solo unos días. Muchos atletas informan sentirse más ligeros, con más energía y menos hinchados en 3–7 días. La recuperación después de entrenamientos puede ser más rápida, y la digestión a menudo mejora. Seguir cómo responde tu cuerpo te ayuda a ver los beneficios de las elecciones basadas en plantas de primera mano.",
    hu: "Ha kíváncsi vagy a növényi étrendre, próbálhatsz egy azonnali tesztet, ha néhány napig főként növényi ételeket fogyasztasz. Sok sportoló 3–7 napon belül könnyebbnek, energikusabbnak és kevésbé puffadtnak érzi magát. Az edzések utáni regeneráció gyorsabbnak tűnhet, az emésztés pedig gyakran javul. A test reakcióinak követése segít első kézből látni a növényi étrend előnyeit."
  },
  quiz: { 
    question: {
      en: "How soon do many people notice benefits when trying a mostly plant-based diet?", 
      es: "¿Qué tan pronto muchas personas notan beneficios al probar una dieta mayormente basada en plantas?", 
      hu: "Milyen gyorsan tapasztalják sokan az előnyöket, amikor főként növényi étrendet próbálnak ki?" 
    },
    options: {
      en: ["1 month", "3–7 days", "6 months"], 
      es: ["1 mes", "3–7 días", "6 meses"], 
      hu: ["1 hónap", "3–7 nap", "6 hónap"]
    },
    answer: 1 
  } 
},

// --------------------------
// Boosting my performance as an athlete – Vegetarian
// --------------------------

3011: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Vegetarian athletes and protein",
    es: "Atletas vegetarianos y proteína",
    hu: "A vegetáriánus sportolók és a fehérje"
  },
  lesson: {
    en: "Most high-performance athletes are either omnivores or vegans, and surprisingly, vegetarian athletes are rarely mentioned. This is because vegetarians often rely heavily on dairy and eggs for protein, which can be limiting in quantity and variety compared to plant-based diets. Vegan athletes, on the other hand, carefully plan their nutrition to meet all protein and nutrient needs from plants, and they often report faster recovery, less inflammation, and more consistent energy. This gap shows that a fully plant-based approach can be more effective for peak athletic performance.",
    es: "La mayoría de los atletas de alto rendimiento son omnívoros o veganos, y sorprendentemente, los atletas vegetarianos rara vez se mencionan. Esto se debe a que los vegetarianos a menudo dependen en gran medida de los lácteos y los huevos para obtener proteínas, lo que puede limitar la cantidad y variedad en comparación con las dietas basadas en plantas. Los atletas veganos, en cambio, planifican cuidadosamente su nutrición para cubrir todas las necesidades de proteínas y nutrientes a partir de plantas, y a menudo reportan una recuperación más rápida, menos inflamación y energía más constante. Esta diferencia muestra que un enfoque completamente basado en plantas puede ser más efectivo para un rendimiento atlético máximo.",
    hu: "A legtöbb csúcsportoló vagy mindenevő, vagy vegán, és meglepő módon a vegetáriánus sportolókról ritkán esik szó. Ennek oka, hogy a vegetáriánusok gyakran nagy mértékben támaszkodnak a tejtermékekre és tojásra a fehérje miatt, ami korlátozhatja a mennyiséget és a változatosságot a növényi alapú étrendekhez képest. A vegán sportolók ezzel szemben gondosan tervezik táplálkozásukat, hogy minden fehérje- és tápanyagszükségletüket növényekből fedezzék, és gyakran számolnak be gyorsabb regenerációról, kevesebb gyulladásról és kiegyensúlyozottabb energiáról. Ez a különbség azt mutatja, hogy a teljesen növényi alapú megközelítés hatékonyabb lehet a csúcs atlétikai teljesítmény eléréséhez."
  },
  quiz: {  
    question: {
      en: "Why are vegetarian athletes less discussed than vegan or omnivore athletes?",
      es: "¿Por qué se habla menos de los atletas vegetarianos que de los veganos o los omnívoros?",
      hu: "Miért beszélnek kevesebbet a vegetáriánus sportolókról, mint a vegán vagy mindenevő sportolókról?"
    },  
    options: {
      en: [
        "They rely mainly on dairy and eggs, which can limit protein variety",
        "Vegetarians cannot build muscle",
        "They are the majority of elite athletes"
      ],
      es: [
        "Dependen principalmente de lácteos y huevos, lo que puede limitar la variedad de proteínas",
        "Los vegetarianos no pueden desarrollar músculo",
        "Son la mayoría de los atletas de élite"
      ],
      hu: [
        "Főként tejtermékekre és tojásra támaszkodnak, ami korlátozhatja a fehérjefajták változatosságát",
        "A vegetáriánusok nem tudnak izmot építeni",
        "Ők alkotják az elit sportolók többségét"
      ]
    },
    answer: 0
  }
},

3012: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Dairy and athletic performance",
    es: "Lácteos y rendimiento atlético",
    hu: "Tejtermékek és atlétikai teljesítmény"
  },
  lesson: {
    en: "Many vegetarian athletes rely heavily on dairy products for protein, but dairy is high in saturated fats. Saturated fats can raise LDL cholesterol, which contributes to the formation of plaques in arteries. This can lead to cardiovascular issues over time, even in physically active individuals. Because vegetarian diets often depend on dairy rather than varied plant proteins, some athletes may not reach their peak performance or long-term health potential. This partly explains why vegetarian athletes are less discussed than their vegan or omnivore counterparts.",
    es: "Muchos atletas vegetarianos dependen en gran medida de los productos lácteos para obtener proteínas, pero los lácteos son altos en grasas saturadas. Las grasas saturadas pueden aumentar el colesterol LDL, lo que contribuye a la formación de placas en las arterias. Esto puede conducir a problemas cardiovasculares con el tiempo, incluso en personas físicamente activas. Debido a que las dietas vegetarianas a menudo dependen de los lácteos en lugar de proteínas vegetales variadas, algunos atletas pueden no alcanzar su máximo rendimiento o su potencial de salud a largo plazo. Esto explica en parte por qué se habla menos de los atletas vegetarianos que de sus homólogos veganos o omnívoros.",
    hu: "Sok vegetáriánus sportoló nagy mértékben a tejtermékekre támaszkodik a fehérje miatt, de a tejtermékek magas telített zsírtartalmúak. A telített zsírok növelhetik az LDL-koleszterint, ami hozzájárul az érelmeszesedés kialakulásához. Ez idővel kardiovaszkuláris problémákhoz vezethet, még fizikailag aktív egyének esetén is. Mivel a vegetáriánus étrendek gyakran a tejtermékekre támaszkodnak a változatos növényi fehérjék helyett, néhány sportoló nem éri el csúcs teljesítményét vagy hosszú távú egészségi potenciálját. Ez részben magyarázza, miért beszélnek kevesebbet a vegetáriánus sportolókról, mint a vegán vagy mindenevő társaikról."
  },
  quiz: {  
    question: {
      en: "Why might heavy reliance on dairy limit the performance and visibility of vegetarian athletes?",
      es: "¿Por qué la dependencia excesiva de los lácteos puede limitar el rendimiento y la visibilidad de los atletas vegetarianos?",
      hu: "Miért korlátozhatja a teljesítményt és a láthatóságot a vegetáriánus sportolóknál a tejtermékekre való nagy mértékű támaszkodás?"
    },  
    options: {
      en: [
        "Dairy contains no protein",
        "Dairy increases LDL cholesterol and plaque formation",
        "Vegetarian athletes never exercise"
      ],
      es: [
        "Los lácteos no contienen proteínas",
        "Los lácteos aumentan el colesterol LDL y la formación de placas",
        "Los atletas vegetarianos nunca hacen ejercicio"
      ],
      hu: [
        "A tejtermékek nem tartalmaznak fehérjét",
        "A tejtermékek növelik az LDL-koleszterint és a plakk képződést",
        "A vegetáriánus sportolók sosem edzenek"
      ]
    },
    answer: 1
  }
},
3013: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Matt Frazier: from vegetarian to vegan athlete",
    es: "Matt Frazier: de atleta vegetariano a vegano",
    hu: "Matt Frazier: vegetáriánusból vegán sportoló"
  },
  lesson: {
    en: "Matt Frazier, founder of No Meat Athlete, started as a vegetarian runner. Initially, he worried that cutting out animal products might reduce his performance, but he soon qualified for the Boston Marathon and progressed to ultrarunning. Inspired by these results, he transitioned fully to a vegan diet. He reported improved endurance, faster recovery, and consistent energy during long runs. Matt’s journey shows that carefully planned plant-based nutrition can support high-level athletic performance, often better than a diet reliant on dairy and eggs alone.",
    es: "Matt Frazier, fundador de No Meat Athlete, comenzó como corredor vegetariano. Inicialmente, le preocupaba que eliminar los productos animales redujera su rendimiento, pero pronto se clasificó para el Maratón de Boston y avanzó hacia ultramaratones. Inspirado por estos resultados, pasó completamente a una dieta vegana. Informó de mayor resistencia, recuperación más rápida y energía constante durante las carreras largas. El camino de Matt demuestra que una nutrición basada en plantas cuidadosamente planificada puede apoyar el rendimiento atlético de alto nivel, a menudo mejor que una dieta basada únicamente en lácteos y huevos.",
    hu: "Matt Frazier, a No Meat Athlete alapítója vegetáriánus futóként kezdte pályafutását. Eleinte aggódott, hogy az állati termékek elhagyása csökkentheti teljesítményét, de hamarosan kvalifikált a Boston Maratonra, majd ultrafutásra váltott. Eredményei inspirálták, hogy teljesen vegán étrendre álljon át. Jelentette, hogy javult az állóképessége, gyorsabb a regenerációja és következetesebb az energiaszintje hosszú futások során. Matt példája azt mutatja, hogy a gondosan megtervezett növényi alapú táplálkozás képes támogatni a magas szintű atlétikai teljesítményt, gyakran jobban, mint a csak tejre és tojásra alapozott étrend."
  },
  quiz: {  
    question: {
      en: "What did Matt Frazier notice after transitioning from vegetarian to vegan?",
      es: "¿Qué notó Matt Frazier después de pasar de vegetariano a vegano?",
      hu: "Mit vett észre Matt Frazier, miután vegetáriánusból vegánná vált?"
    },  
    options: {
      en: [
        "He could no longer run long distances",
        "Improved endurance and recovery",
        "He lost all his muscle mass"
      ],
      es: [
        "Ya no podía correr largas distancias",
        "Mejor resistencia y recuperación",
        "Perdió toda su masa muscular"
      ],
      hu: [
        "Már nem tudott hosszú távokat futni",
        "Javult az állóképessége és a regenerációja",
        "Elveszítette az összes izomtömegét"
      ]
    },
    answer: 1
  }
},
3014: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Key micronutrients for vegetarian athletes",
    es: "Micronutrientes clave para atletas vegetarianos",
    hu: "Fontos mikrotápanyagok vegetáriánus sportolóknak"
  },
  lesson: {
    en: "Vegetarian athletes need to pay attention to certain micronutrients that can be harder to get from a diet based mainly on plants and dairy. Iron, vitamin B12, zinc, and omega-3 fatty acids are essential for energy, endurance, and recovery. Low levels can lead to fatigue, slower recovery, and decreased performance. Plant-based sources, fortified foods, and careful planning can help meet these needs and keep athletes performing at their best.",
    es: "Los atletas vegetarianos deben prestar atención a ciertos micronutrientes que pueden ser más difíciles de obtener en una dieta basada principalmente en plantas y lácteos. El hierro, la vitamina B12, el zinc y los ácidos grasos omega-3 son esenciales para la energía, la resistencia y la recuperación. Los niveles bajos pueden causar fatiga, recuperación más lenta y disminución del rendimiento. Las fuentes vegetales, los alimentos fortificados y una planificación cuidadosa pueden ayudar a cubrir estas necesidades y mantener a los atletas en su mejor rendimiento.",
    hu: "A vegetáriánus sportolóknak figyelniük kell bizonyos mikrotápanyagokra, amelyek nehezebben szerezhetők be főként növényekből és tejtermékekből álló étrendből. A vas, a B12-vitamin, a cink és az omega-3 zsírsavak elengedhetetlenek az energiához, állóképességhez és regenerációhoz. Az alacsony szint fáradtsághoz, lassabb regenerációhoz és csökkent teljesítményhez vezethet. A növényi források, dúsított élelmiszerek és gondos tervezés segíthet ezeknek a szükségleteknek a kielégítésében és a sportolók legjobb teljesítményének fenntartásában."
  },
  quiz: {  
    question: {
      en: "Which micronutrient is commonly limited in vegetarian diets and affects energy and recovery?",
      es: "¿Qué micronutriente suele estar limitado en las dietas vegetarianas y afecta la energía y la recuperación?",
      hu: "Melyik mikrotápanyag gyakran korlátozott a vegetáriánus étrendekben, és befolyásolja az energiát és a regenerációt?"
    },  
    options: {
      en: [
        "Vitamin C",
        "Calcium",
        "Vitamin B12"
      ],
      es: [
        "Vitamina C",
        "Calcio",
        "Vitamina B12"
      ],
      hu: [
        "C-vitamin",
        "Kalcium",
        "B12-vitamin"
      ]
    },
    answer: 2
  }
},
3015: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegetarian",  
  title: {
    en: "Ensuring protein variety",
    es: "Asegurando variedad de proteínas",
    hu: "A fehérjefajták változatosságának biztosítása"
  },
  lesson: {
    en: "Protein variety is important for athletes. While eggs and dairy provide complete protein, relying mostly on them may limit the variety of nutrients and amino acids you get. By combining legumes, grains, nuts, and seeds, vegetarian athletes can ensure a diverse intake of amino acids, supporting muscle repair, growth, and peak performance. A varied plant-based approach can complement dairy and eggs or even replace them for those seeking more nutrient diversity.",
    es: "La variedad de proteínas es importante para los atletas. Aunque los huevos y los lácteos proporcionan proteínas completas, depender principalmente de ellos puede limitar la variedad de nutrientes y aminoácidos que se obtiene. Combinando legumbres, cereales, frutos secos y semillas, los atletas vegetarianos pueden asegurar una ingesta diversa de aminoácidos, apoyando la reparación muscular, el crecimiento y el máximo rendimiento. Un enfoque variado basado en plantas puede complementar los lácteos y los huevos o incluso reemplazarlos para quienes buscan más diversidad de nutrientes.",
    hu: "A fehérje változatossága fontos a sportolóknak. Bár a tojás és a tejtermékek teljes fehérjét biztosítanak, ha túlnyomórészt ezekre támaszkodunk, korlátozhatja a tápanyagok és aminosavak változatosságát. Hüvelyesek, gabonák, diófélék és magvak kombinálásával a vegetáriánus sportolók biztosíthatják az aminosavak változatos bevitelét, támogatva az izomregenerációt, növekedést és a csúcsteljesítményt. A változatos növényi alapú megközelítés kiegészítheti vagy akár helyettesítheti a tejtermékeket és tojást azok számára, akik több tápanyagot szeretnének."
  },
  quiz: {  
    question: {
      en: "How can vegetarian athletes ensure they get a wide range of amino acids?",
      es: "¿Cómo pueden los atletas vegetarianos asegurarse de obtener una amplia gama de aminoácidos?",
      hu: "Hogyan biztosíthatják a vegetáriánus sportolók a különféle aminosavak bevitelét?"
    },  
    options: {
      en: [
        "Combine legumes, grains, nuts, and seeds",
        "Eat only dairy and eggs",
        "Avoid protein entirely"
      ],
      es: [
        "Combinar legumbres, cereales, frutos secos y semillas",
        "Comer solo lácteos y huevos",
        "Evitar la proteína por completo"
      ],
      hu: [
        "Hüvelyesek, gabonák, diófélék és magvak kombinálása",
        "Csak tejtermékek és tojás fogyasztása",
        "Teljesen elkerülni a fehérjét"
      ]
    },
    answer: 0
  }
},

// --------------------------
// Boosting my performance as an athlete – Vegan
// --------------------------
3016: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Glycogen and high-intensity performance",
    es: "Glucógeno y rendimiento de alta intensidad",
    hu: "Glikogén és nagy intenzitású teljesítmény"
  },
  lesson: {
    en: "During high-intensity exercise, your muscles rely on glycogen—stored carbohydrates—for energy. If glycogen runs low, fatigue hits quickly. Vegan diets are naturally rich in carbohydrate-dense foods like oats, rice, potatoes, bananas, and dates. Most athletes benefit from 4–7 g of carbohydrates per kg of body weight per day. This keeps glycogen stores full so you can train harder and bounce back faster.",
    es: "Durante el ejercicio de alta intensidad, tus músculos dependen del glucógeno — carbohidratos almacenados — para obtener energía. Si el glucógeno se agota, la fatiga aparece rápidamente. Las dietas veganas son naturalmente ricas en alimentos densos en carbohidratos como avena, arroz, patatas, plátanos y dátiles. La mayoría de los atletas se benefician de 4–7 g de carbohidratos por kg de peso corporal al día. Esto mantiene llenos los depósitos de glucógeno para que puedas entrenar más duro y recuperarte más rápido.",
    hu: "Magas intenzitású edzés során az izmaid glikogénre — tárolt szénhidrátokra — támaszkodnak energiaként. Ha a glikogén kimerül, gyorsan jelentkezik a fáradtság. A vegán étrend természetesen gazdag szénhidrátban sűrű ételekben, mint a zab, rizs, burgonya, banán és datolya. A legtöbb sportoló számára napi 4–7 g szénhidrát testsúlykilogrammonként előnyös. Ez megtölti a glikogénraktárakat, így keményebben edzhetsz és gyorsabban regenerálódsz."
  },
  quiz: {  
    question: {
      en: "What fuel does your body rely on most during high-intensity exercise?",
      es: "¿De qué combustible depende más tu cuerpo durante el ejercicio de alta intensidad?",
      hu: "Milyen energiaforrásra támaszkodik leginkább a tested nagy intenzitású edzés során?"
    },  
    options: {
      en: [
        "Glycogen (stored carbohydrates)",
        "Protein",
        "Water"
      ],
      es: [
        "Glucógeno (carbohidratos almacenados)",
        "Proteína",
        "Agua"
      ],
      hu: [
        "Glikogén (tárolt szénhidrát)",
        "Fehérje",
        "Víz"
      ]
    },
    answer: 0
  }
},
3017: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Antioxidants and recovery",
    es: "Antioxidantes y recuperación",
    hu: "Antioxidánsok és regeneráció"
  },
  lesson: {
    en: "Recovery is faster on a plant-based diet because plant foods are rich in antioxidants like vitamin C, vitamin E, and polyphenols. These compounds reduce exercise-induced inflammation, leading to less soreness and quicker muscle repair. Studies show plant-based athletes have up to 30% lower inflammation markers compared to omnivores. This means more consistent training and fewer ‘off’ days.",
    es: "La recuperación es más rápida con una dieta basada en plantas porque los alimentos vegetales son ricos en antioxidantes como la vitamina C, la vitamina E y los polifenoles. Estos compuestos reducen la inflamación inducida por el ejercicio, lo que provoca menos dolor muscular y una reparación más rápida. Los estudios muestran que los atletas basados en plantas tienen hasta un 30% menos de marcadores de inflamación en comparación con los omnívoros. Esto significa entrenamientos más consistentes y menos días de descanso involuntarios.",
    hu: "A regeneráció gyorsabb növényi alapú étrenden, mert a növényi ételek gazdagok antioxidánsokban, mint a C-vitamin, E-vitamin és polifenolok. Ezek a vegyületek csökkentik a mozgás okozta gyulladást, ami kevesebb izomfájdalmat és gyorsabb izomjavítást eredményez. Tanulmányok szerint a növényi alapú sportolóknál akár 30%-kal alacsonyabbak a gyulladásos markerek a mindenevőkhöz képest. Ez következetesebb edzéseket és kevesebb „kihagyott” napot jelent."
  },
  quiz: {  
    question: {
      en: "Why do antioxidants help athletes recover faster?",
      es: "¿Por qué los antioxidantes ayudan a los atletas a recuperarse más rápido?",
      hu: "Miért segítenek az antioxidánsok a sportolóknak gyorsabban regenerálódni?"
    },  
    options: {
      en: [
        "They increase soreness",
        "They block muscle growth",
        "They reduce inflammation from exercise"
      ],
      es: [
        "Aumentan el dolor muscular",
        "Bloquean el crecimiento muscular",
        "Reducen la inflamación causada por el ejercicio"
      ],
      hu: [
        "Növelik az izomfájdalmat",
        "Blokkolják az izomnövekedést",
        "Csökkentik az edzés okozta gyulladást"
      ]
    },
    answer: 2
  }
},
3018: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Protein needs for vegan athletes",
    es: "Necesidades de proteína para atletas veganos",
    hu: "Fehérjeszükséglet vegán sportolóknál"
  },
  lesson: {
    en: "Athletes need around 1.4–2.0 g of protein per kg of body weight daily for muscle repair. Lentils, tofu, seitan, beans, soy milk, tempeh, and quinoa provide high-quality protein. When eaten throughout the day, plant proteins supply all essential amino acids. Many athletes spread protein across meals (~20–30g per meal) for best recovery.",
    es: "Los atletas necesitan alrededor de 1,4–2,0 g de proteína por kg de peso corporal al día para reparar músculos. Las lentejas, el tofu, el seitán, los frijoles, la leche de soja, el tempeh y la quinoa proporcionan proteínas de alta calidad. Cuando se consumen a lo largo del día, las proteínas vegetales suministran todos los aminoácidos esenciales. Muchos atletas distribuyen la proteína en las comidas (~20–30 g por comida) para una mejor recuperación.",
    hu: "A sportolóknak napi 1,4–2,0 g fehérjére van szükségük testsúlykilogrammonként az izmok regenerációjához. A lencse, tofu, szejtán, bab, szójaital, tempeh és quinoa magas minőségű fehérjét biztosít. Ha ezeket a nap folyamán fogyasztjuk, a növényi fehérjék biztosítják az összes esszenciális aminosavat. Sok sportoló a fehérjét az étkezések között osztja el (~20–30 g étkezésenként) a legjobb regeneráció érdekében."
  },
  quiz: {  
    question: {
      en: "How much protein do most athletes need per day?",
      es: "¿Cuánta proteína necesitan la mayoría de los atletas al día?",
      hu: "Mennyi fehérjére van szüksége a legtöbb sportolónak naponta?"
    },  
    options: {
      en: [
        "1.4–2.0 g per kg body weight",
        "0.5 g per kg body weight",
        "4 g per kg body weight"
      ],
      es: [
        "1,4–2,0 g por kg de peso corporal",
        "0,5 g por kg de peso corporal",
        "4 g por kg de peso corporal"
      ],
      hu: [
        "1,4–2,0 g testsúlykilogrammonként",
        "0,5 g testsúlykilogrammonként",
        "4 g testsúlykilogrammonként"
      ]
    },
    answer: 0
  }
},
3019: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Iron for vegan athletes",
    es: "Hierro para atletas veganos",
    hu: "Vas a vegán sportolóknál"
  },
  lesson: {
    en: "Iron transports oxygen to your muscles. Low iron can cause fatigue, breathlessness, and weaker performance. Lentils, beans, tofu, spinach, and pumpkin seeds are strong plant sources. Pairing iron-rich foods with vitamin C (e.g., citrus, bell peppers, strawberries) can increase absorption by up to 3x.",
    es: "El hierro transporta oxígeno a tus músculos. La falta de hierro puede causar fatiga, falta de aire y menor rendimiento. Las lentejas, los frijoles, el tofu, la espinaca y las semillas de calabaza son buenas fuentes vegetales. Combinar alimentos ricos en hierro con vitamina C (por ejemplo, cítricos, pimientos, fresas) puede aumentar la absorción hasta 3 veces.",
    hu: "A vas az oxigént szállítja az izmaidhoz. Az alacsony vasfogyasztás fáradtsághoz, légszomjhoz és gyengébb teljesítményhez vezethet. A lencse, bab, tofu, spenót és tökmag erős növényi források. A vasban gazdag ételek C-vitaminnal való párosítása (pl. citrusfélék, paprika, eper) akár 3-szorosra növelheti a felszívódást."
  },
  quiz: {  
    question: {
      en: "How can plant-based athletes improve iron absorption?",
      es: "¿Cómo pueden los atletas veganos mejorar la absorción de hierro?",
      hu: "Hogyan javíthatják a növényi alapú sportolók a vas felszívódását?"
    },  
    options: {
      en: [
        "Eat iron alone",
        "Pair iron-rich foods with vitamin C",
        "Avoid greens"
      ],
      es: [
        "Comer hierro solo",
        "Combinar alimentos ricos en hierro con vitamina C",
        "Evitar las verduras"
      ],
      hu: [
        "Csak vas fogyasztása",
        "Vasban gazdag ételek C-vitaminnal való párosítása",
        "Kerülni a zöldségeket"
      ]
    },
    answer: 1
  }
},
3020: {  
  goal: "Boosting my performance as an athlete",  
  diet: "vegan",  
  title: {
    en: "Omega-3 for vegan athletes",
    es: "Omega-3 para atletas veganos",
    hu: "Omega-3 vegán sportolóknak"
  },
  lesson: {
    en: "Omega-3 fatty acids help reduce inflammation and support joint and heart health. Plant-based omega-3s are found in flaxseeds, chia seeds, walnuts, hemp seeds, and algae oil. Algae oil is especially useful for athletes, since it contains DHA and EPA—the same heart-protective fats found in fish, but without the toxins or microplastics.",
    es: "Los ácidos grasos omega-3 ayudan a reducir la inflamación y apoyan la salud de las articulaciones y el corazón. Los omega-3 de origen vegetal se encuentran en semillas de lino, chía, nueces, semillas de cáñamo y aceite de algas. El aceite de algas es especialmente útil para los atletas, ya que contiene DHA y EPA, las mismas grasas protectoras del corazón que se encuentran en el pescado, pero sin toxinas ni microplásticos.",
    hu: "Az omega-3 zsírsavak segítenek csökkenteni a gyulladást, és támogatják az ízületek és a szív egészségét. A növényi omega-3-források közé tartozik a lenmag, chia mag, dió, kendermag és az algazsír. Az algazsír különösen hasznos a sportolóknak, mivel tartalmazza a DHA- és EPA-zsírsavakat — ugyanazokat a szívvédő zsírokat, amelyek a halban találhatók, de toxikus anyagok és mikroműanyagok nélkül."
  },
  quiz: {  
    question: {
      en: "Which plant-based omega-3 source contains DHA/EPA?",
      es: "¿Qué fuente de omega-3 de origen vegetal contiene DHA/EPA?",
      hu: "Melyik növényi omega-3-forrás tartalmaz DHA/EPA-t?"
    },  
    options: {
      en: [
        "Algae oil",
        "Olive oil",
        "Corn oil"
      ],
      es: [
        "Aceite de algas",
        "Aceite de oliva",
        "Aceite de maíz"
      ],
      hu: [
        "Algazsír",
        "Olívaolaj",
        "Kukoricaolaj"
      ]
    },
    answer: 0
  }
},

3021: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Calcium and vitamin D for strong bones",
    es: "Calcio y vitamina D para huesos fuertes",
    hu: "Kalcium és D-vitamin az erős csontokért"
  },
  lesson: {
    en: "Calcium and vitamin D support bone strength and injury prevention. Fortified plant milks, tofu, almonds, sesame seeds, and leafy greens provide calcium. Vitamin D comes from sunlight or supplements. Many plant-based athletes aim for 600–1000mg calcium and 800–2000 IU vitamin D per day, especially during intense training phases.",
    es: "El calcio y la vitamina D apoyan la fuerza ósea y previenen lesiones. Leches vegetales fortificadas, tofu, almendras, semillas de sésamo y verduras de hoja proporcionan calcio. La vitamina D proviene del sol o suplementos. Muchos atletas veganos buscan 600–1000 mg de calcio y 800–2000 UI de vitamina D al día, especialmente durante fases de entrenamiento intenso.",
    hu: "A kalcium és a D-vitamin támogatja a csontok erősségét és a sérülések megelőzését. Kalciummal dúsított növényi tejek, tofu, mandula, szezámmag és leveles zöldségek biztosítják a kalciumot. A D-vitamin napfényből vagy kiegészítőkből származik. Sok növényi alapú sportoló naponta 600–1000 mg kalciumot és 800–2000 NE D-vitamint céloz meg, különösen intenzív edzésszakaszokban."
  },
  quiz: {
    question: {
      en: "What do calcium and vitamin D help prevent?",
      es: "¿Qué ayudan a prevenir el calcio y la vitamina D?",
      hu: "Mit segít megelőzni a kalcium és a D-vitamin?"
    },
    options: {
      en: ["Muscle cramps only", "Bone injuries and stress fractures", "Dehydration"],
      es: ["Solo calambres musculares", "Lesiones óseas y fracturas por estrés", "Deshidratación"],
      hu: ["Csak izomgörcsöket", "Csontsérüléseket és stressztöréseket", "Kiszáradást"]
    },
    answer: 1
  }
},

3022: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Beetroot for endurance",
    es: "Remolacha para la resistencia",
    hu: "Cékla az állóképességért"
  },
  lesson: {
    en: "Beetroot is naturally high in nitrates, which increase nitric oxide production. This widens blood vessels, improving oxygen delivery to muscles. Studies show beet juice can boost endurance by 15–20%. A glass of beet juice 2–3 hours before training can improve stamina.",
    es: "La remolacha es naturalmente alta en nitratos, lo que aumenta la producción de óxido nítrico. Esto dilata los vasos sanguíneos, mejorando la entrega de oxígeno a los músculos. Los estudios muestran que el jugo de remolacha puede aumentar la resistencia en un 15–20%. Un vaso de jugo de remolacha 2–3 horas antes del entrenamiento puede mejorar la resistencia.",
    hu: "A cékla természetesen gazdag nitrátokban, amelyek növelik a nitrogén-monoxid termelést. Ez tágítja az ereket, javítva az oxigénellátást az izmokhoz. Tanulmányok szerint a céklalé 15–20%-kal növelheti az állóképességet. Egy pohár céklalé edzés előtt 2–3 órával javíthatja a kitartást."
  },
  quiz: {
    question: {
      en: "How does beetroot improve athletic performance?",
      es: "¿Cómo mejora la remolacha el rendimiento atlético?",
      hu: "Hogyan javítja a cékla a sportteljesítményt?"
    },
    options: {
      en: ["Enhances oxygen delivery to muscles", "Reduces blood flow", "Has no effect"],
      es: ["Mejora la entrega de oxígeno a los músculos", "Reduce el flujo sanguíneo", "No tiene efecto"],
      hu: ["Javítja az oxigénszállítást az izmokhoz", "Csökkenti a véráramlást", "Nincs hatása"]
    },
    answer: 0
  }
},

3023: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Plant foods for hydration",
    es: "Alimentos vegetales para la hidratación",
    hu: "Növényi ételek a hidratációhoz"
  },
  lesson: {
    en: "Hydration affects strength, speed, and focus. Fruits and vegetables like oranges, cucumbers, watermelon, and leafy greens provide water and natural electrolytes. Coconut water can also help replace electrolytes after sweating. For long sessions, combine water + carbs + salt to keep energy stable.",
    es: "La hidratación afecta la fuerza, velocidad y concentración. Frutas y verduras como naranjas, pepinos, sandía y verduras de hoja proporcionan agua y electrolitos naturales. El agua de coco también ayuda a reemplazar electrolitos después de sudar. Para sesiones largas, combina agua + carbohidratos + sal para mantener la energía estable.",
    hu: "A hidratáció befolyásolja az erőt, sebességet és fókuszt. Gyümölcsök és zöldségek, mint a narancs, uborka, görögdinnye és leveles zöldek vízet és természetes elektrolitokat biztosítanak. A kókuszvíz szintén segíthet az elektrolitok pótlásában izzadás után. Hosszú edzésekhez kombináld a vizet + szénhidrátot + sót az energiaszint stabilizálására."
  },
  quiz: {
    question: {
      en: "Why are plant foods useful for hydration?",
      es: "¿Por qué los alimentos vegetales son útiles para la hidratación?",
      hu: "Miért hasznosak a növényi ételek a hidratációhoz?"
    },
    options: {
      en: ["They remove minerals", "They cause dehydration", "They contain water and electrolytes"],
      es: ["Eliminan minerales", "Causan deshidratación", "Contienen agua y electrolitos"],
      hu: ["Kimutatják az ásványi anyagokat", "Kiszáradást okoznak", "Vizet és elektrolitokat tartalmaznak"]
    },
    answer: 2
  }
},

3024: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Gut health for athletes",
    es: "Salud intestinal para atletas",
    hu: "Bélrendszer egészsége sportolóknak"
  },
  lesson: {
    en: "A healthy gut improves digestion, nutrient absorption, mood, immune strength, and energy levels. Plant-based diets are naturally rich in prebiotic fibers that support a diverse gut microbiome. This helps athletes recover better, feel lighter, and perform with more consistency.",
    es: "Un intestino sano mejora la digestión, absorción de nutrientes, estado de ánimo, fuerza inmunológica y niveles de energía. Las dietas basadas en plantas son naturalmente ricas en fibras prebióticas que apoyan un microbioma intestinal diverso. Esto ayuda a los atletas a recuperarse mejor, sentirse más ligeros y rendir con más consistencia.",
    hu: "Az egészséges bélrendszer javítja az emésztést, a tápanyagfelszívódást, a hangulatot, az immunerőt és az energiaszintet. A növényi alapú étrend természetesen gazdag prebiotikus rostokban, amelyek támogatják a változatos bélmikrobiomot. Ez segít a sportolóknak a jobb regenerációban, könnyebb közérzetben és következetesebb teljesítményben."
  },
  quiz: {
    question: {
      en: "What does prebiotic fiber help support?",
      es: "¿Qué ayuda a mantener la fibra prebiótica?",
      hu: "Mit támogat a prebiotikus rost?"
    },
    options: {
      en: ["Muscle dehydration", "A healthy gut microbiome", "Increased inflammation"],
      es: ["Deshidratación muscular", "Un microbioma intestinal saludable", "Inflamación aumentada"],
      hu: ["Izomszáradás", "Egészséges bélmikrobiom", "Fokozott gyulladás"]
    },
    answer: 1
  }
},

3025: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Elite plant-based athletes",
    es: "Atletas veganos de élite",
    hu: "Elit növényi alapú sportolók"
  },
  lesson: {
    en: "Many elite athletes thrive on plant-based diets: ultramarathoner Scott Jurek, bodybuilder Nimai Delgado, tennis champion Novak Djokovic, and sprinter Carl Lewis. They report faster recovery, improved endurance, and clearer mental focus. Their success proves performance does not depend on animal products.",
    es: "Muchos atletas de élite prosperan con dietas basadas en plantas: el ultramaratonista Scott Jurek, el culturista Nimai Delgado, el campeón de tenis Novak Djokovic y el velocista Carl Lewis. Informan recuperación más rápida, mayor resistencia y enfoque mental más claro. Su éxito demuestra que el rendimiento no depende de productos animales.",
    hu: "Sok elit sportoló virágzik növényi alapú étrenden: Scott Jurek ultramaratonista, Nimai Delgado testépítő, Novak Djokovic teniszbajnok és Carl Lewis sprinter. Gyorsabb regenerációról, jobb állóképességről és tisztább mentális fókuszról számolnak be. Sikereik bizonyítják, hogy a teljesítmény nem függ az állati termékektől."
  },
  quiz: {
    question: {
      en: "What benefit do many plant-based athletes report?",
      es: "¿Qué beneficio reportan muchos atletas veganos?",
      hu: "Milyen előnyt tapasztal sok növényi alapú sportoló?"
    },
    options: {
      en: ["Faster recovery and improved endurance", "Lower performance", "No advantage"],
      es: ["Recuperación más rápida y mayor resistencia", "Rendimiento inferior", "Sin ventaja"],
      hu: ["Gyorsabb regeneráció és jobb állóképesség", "Alacsonyabb teljesítmény", "Nincs előny"]
    },
    answer: 0
  }
},

3026: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Vegan diets for lean body composition",
    es: "Dietas veganas para una composición corporal magra",
    hu: "Vegán étrend a sovány testösszetételért"
  },
  lesson: {
    en: "Because plant-based diets are naturally lower in saturated fat and higher in fiber, many athletes find it easier to maintain a lean body mass. Less excess weight means less stress on joints, faster speed, and improved agility.",
    es: "Debido a que las dietas basadas en plantas son naturalmente bajas en grasa saturada y altas en fibra, muchos atletas encuentran más fácil mantener una masa corporal magra. Menos peso extra significa menos estrés en las articulaciones, mayor velocidad y mejor agilidad.",
    hu: "Mivel a növényi alapú étrend természeténél fogva alacsonyabb telített zsírtartalmú és magasabb rosttartalmú, sok sportolónak könnyebb megtartani a sovány testtömeget. Kevesebb felesleges súly kevesebb ízületi terhelést, gyorsabb sebességet és jobb mozgékonyságot jelent."
  },
  quiz: {
    question: {
      en: "How can a vegan diet benefit body composition?",
      es: "¿Cómo puede beneficiar la dieta vegana la composición corporal?",
      hu: "Hogyan javíthatja a vegán étrend a testösszetételt?"
    },
    options: {
      en: ["Causes rapid weight gain", "Helps maintain lean mass and reduce joint stress", "Leads to muscle loss"],
      es: ["Causa aumento de peso rápido", "Ayuda a mantener masa magra y reducir el estrés articular", "Provoca pérdida de músculo"],
      hu: ["Gyors súlygyarapodást okoz", "Segít megőrizni a sovány tömeget és csökkenti az ízületi terhelést", "Izomvesztéshez vezet"]
    },
    answer: 1
  }
},

3027: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Fiber for steady endurance",
    es: "Fibra para resistencia constante",
    hu: "Rost a stabil állóképességért"
  },
  lesson: {
    en: "During long workouts, fiber-rich foods release energy slowly and steadily. This prevents blood sugar crashes and keeps endurance stable. Examples of good pre-training slow-release carbs include oats, whole grain pasta, sweet potatoes, bananas, and dates.",
    es: "Durante entrenamientos largos, los alimentos ricos en fibra liberan energía de forma lenta y constante. Esto previene caídas de azúcar en la sangre y mantiene la resistencia estable. Ejemplos de buenos carbohidratos de liberación lenta antes del entrenamiento incluyen avena, pasta integral, batatas, plátanos y dátiles.",
    hu: "Hosszú edzések során a rostban gazdag ételek lassan és egyenletesen bocsátják ki az energiát. Ez megelőzi a vércukorszint-ingadozásokat és stabilizálja az állóképességet. Jó előedzés lassú felszabadulású szénhidrátok például a zab, teljes kiőrlésű tészta, édesburgonya, banán és datolya."
  },
  quiz: {
    question: {
      en: "How does fiber support endurance?",
      es: "¿Cómo apoya la fibra la resistencia?",
      hu: "Hogyan támogatja a rost az állóképességet?"
    },
    options: {
      en: ["Causes quick exhaustion", "Blocks energy", "Stabilizes blood sugar and provides steady energy"],
      es: ["Causa agotamiento rápido", "Bloquea energía", "Estabiliza la glucosa y proporciona energía constante"],
      hu: ["Gyors kimerülést okoz", "Energiát blokkol", "Stabilizálja a vércukrot és biztosít egyenletes energiát"]
    },
    answer: 2
  }
},

3028: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Reducing inflammation for faster recovery",
    es: "Reducir la inflamación para una recuperación más rápida",
    hu: "Gyulladás csökkentése a gyorsabb regenerációért"
  },
  lesson: {
    en: "Chronic inflammation slows recovery and increases injury risk. A plant-based diet lowers inflammation markers like CRP (C-reactive protein). Studies show plant-eaters often have 20–30% lower CRP levels than meat-eaters. This means quicker recovery and more training days per week.",
    es: "La inflamación crónica ralentiza la recuperación y aumenta el riesgo de lesiones. Una dieta basada en plantas reduce los marcadores de inflamación como la PCR (proteína C reactiva). Los estudios muestran que quienes comen plantas suelen tener niveles de PCR 20–30% más bajos que los carnívoros. Esto significa recuperación más rápida y más días de entrenamiento por semana.",
    hu: "A krónikus gyulladás lassítja a regenerációt és növeli a sérülés kockázatát. A növényi alapú étrend csökkenti a gyulladás markerét, például a CRP-t (C-reaktív protein). Tanulmányok szerint a növényi étrenden élők 20–30%-kal alacsonyabb CRP-szinttel rendelkeznek, mint a húsfogyasztók. Ez gyorsabb regenerációt és több edzésnapot jelent hetente."
  },
  quiz: {
    question: {
      en: "What does lower inflammation help athletes do?",
      es: "¿Qué ayuda a hacer a los atletas una menor inflamación?",
      hu: "Mit segít a sportolóknak az alacsonyabb gyulladás?"
    },
    options: {
      en: ["Recover faster and train more consistently", "Recover slower", "Stop training"],
      es: ["Recuperarse más rápido y entrenar más consistentemente", "Recuperarse más lento", "Dejar de entrenar"],
      hu: ["Gyorsabban regenerálódni és következetesebben edzeni", "Lassabban regenerálódni", "Abbahagyni az edzést"]
    },
    answer: 0
  }
},

3029: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Plant-based diets for heart and endurance",
    es: "Dietas basadas en plantas para el corazón y la resistencia",
    hu: "Növényi étrend a szív és állóképesség támogatására"
  },
  lesson: {
    en: "Cardiovascular endurance depends heavily on blood vessel health. Diets high in saturated fat can stiffen arteries and reduce blood flow. Plant-based diets help keep arteries flexible and clear, improving oxygen delivery to muscles.",
    es: "La resistencia cardiovascular depende en gran medida de la salud de los vasos sanguíneos. Las dietas altas en grasa saturada pueden endurecer las arterias y reducir el flujo sanguíneo. Las dietas basadas en plantas ayudan a mantener las arterias flexibles y despejadas, mejorando la entrega de oxígeno a los músculos.",
    hu: "A szív- és érrendszeri állóképesség nagymértékben függ az erek egészségétől. A telített zsírban gazdag étrend merevítheti az artériákat és csökkentheti a véráramlást. A növényi alapú étrend segít az erek rugalmasságának és tisztaságának megőrzésében, javítva az oxigénellátást az izmokhoz."
  },
  quiz: {
    question: {
      en: "How does a plant-based diet support cardiovascular endurance?",
      es: "¿Cómo apoya una dieta basada en plantas la resistencia cardiovascular?",
      hu: "Hogyan támogatja a növényi étrend a szív- és érrendszeri állóképességet?"
    },
    options: {
      en: ["Keeps arteries flexible and improves blood flow", "Reduces oxygen delivery", "Increases stiffness in arteries"],
      es: ["Mantiene las arterias flexibles y mejora el flujo sanguíneo", "Reduce la entrega de oxígeno", "Aumenta la rigidez arterial"],
      hu: ["Megőrzi az erek rugalmasságát és javítja a véráramlást", "Csökkenti az oxigénszállítást", "Növeli az erek merevségét"]
    },
    answer: 0
  }
},

3030: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Muscle growth depends on training, protein, and calories",
    es: "El crecimiento muscular depende del entrenamiento, proteína y calorías",
    hu: "Az izomnövekedés az edzésen, fehérjén és kalórián múlik"
  },
  lesson: {
    en: "Some athletes think they need meat for strength. But muscle growth depends on training intensity, total protein, and calorie intake — not protein source. Vegan bodybuilders like Patrik Baboumian and Torre Washington have built elite-level strength fully powered by plants.",
    es: "Algunos atletas creen que necesitan carne para tener fuerza. Pero el crecimiento muscular depende de la intensidad del entrenamiento, la proteína total y la ingesta de calorías, no de la fuente de proteína. Culturistas veganos como Patrik Baboumian y Torre Washington han alcanzado fuerza de élite completamente alimentados por plantas.",
    hu: "Néhány sportoló azt hiszi, hogy az erőhöz húsra van szükség. Az izomnövekedés azonban az edzés intenzitásától, az összfehérje- és kalóriabeviteltől függ — nem a fehérjeforrástól. Növényi testépítők, mint Patrik Baboumian és Torre Washington, teljesen növényi étrenddel építettek elit szintű erőt."
  },
  quiz: {
    question: {
      en: "What truly determines muscle growth?",
      es: "¿Qué determina realmente el crecimiento muscular?",
      hu: "Mi határozza meg ténylegesen az izomnövekedést?"
    },
    options: {
      en: ["Eating meat specifically", "Training + protein + calories", "Low carb intake"],
      es: ["Comer carne específicamente", "Entrenamiento + proteína + calorías", "Bajo consumo de carbohidratos"],
      hu: ["Kifejezetten hús fogyasztása", "Edzés + fehérje + kalória", "Alacsony szénhidrátbevitel"]
    },
    answer: 1
  }
},

3031: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Post-workout meals for recovery",
    es: "Comidas post-entrenamiento para la recuperación",
    hu: "Edzés utáni étkezés a regenerációért"
  },
  lesson: {
    en: "Post-workout meals should include protein (20–30g) plus carbohydrates to refill glycogen. Great options: tofu stir-fry with rice, lentil pasta with veggies, or a smoothie with soy milk + oats + berries + chia seeds. This combo accelerates recovery and muscle repair.",
    es: "Las comidas post-entrenamiento deben incluir proteína (20–30 g) más carbohidratos para reponer el glucógeno. Buenas opciones: salteado de tofu con arroz, pasta de lentejas con verduras, o un batido con leche de soja + avena + bayas + semillas de chía. Esta combinación acelera la recuperación y la reparación muscular.",
    hu: "Az edzés utáni étkezésnek fehérjét (20–30 g) és szénhidrátot kell tartalmaznia a glikogén visszatöltéséhez. Remek lehetőségek: tofu ragu rizzsel, lencse tészta zöldségekkel, vagy turmix szójatejjel + zabpehely + bogyós gyümölcs + chia mag. Ez a kombináció gyorsítja a regenerációt és az izomjavítást."
  },
  quiz: {
    question: {
      en: "What should a good post-workout meal include?",
      es: "¿Qué debe incluir una buena comida post-entrenamiento?",
      hu: "Mit tartalmazzon egy jó edzés utáni étkezés?"
    },
    options: {
      en: ["Protein only", "Carbohydrates + protein", "Only fats"],
      es: ["Solo proteína", "Carbohidratos + proteína", "Solo grasas"],
      hu: ["Csak fehérje", "Szénhidrát + fehérje", "Csak zsír"]
    },
    answer: 1
  }
},

3032: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Sleep for recovery and performance",
    es: "Sueño para recuperación y rendimiento",
    hu: "Alvás a regenerációért és teljesítményért"
  },
  lesson: {
    en: "Sleep is one of the biggest performance boosters. Plant-based diets can improve sleep quality because they're rich in magnesium and tryptophan, nutrients that calm the nervous system. Better sleep = stronger training days.",
    es: "El sueño es uno de los mayores potenciadores del rendimiento. Las dietas basadas en plantas pueden mejorar la calidad del sueño porque son ricas en magnesio y triptófano, nutrientes que calman el sistema nervioso. Mejor sueño = días de entrenamiento más fuertes.",
    hu: "Az alvás az egyik legnagyobb teljesítményfokozó. A növényi alapú étrend javíthatja az alvás minőségét, mivel gazdag magnéziumban és triptofánban, amelyek nyugtatják az idegrendszert. Jobb alvás = erősebb edzésnapok."
  },
  quiz: {
    question: {
      en: "How can plant foods support sleep and recovery?",
      es: "¿Cómo pueden los alimentos vegetales apoyar el sueño y la recuperación?",
      hu: "Hogyan segíthetik a növényi ételek az alvást és a regenerációt?"
    },
    options: {
      en: ["They prevent sleep", "They are rich in calming minerals", "They increase stress hormones"],
      es: ["Previenen el sueño", "Son ricos en minerales calmantes", "Aumentan las hormonas del estrés"],
      hu: ["Megakadályozzák az alvást", "Gazdagok nyugtató ásványi anyagokban", "Növelik a stresszhormonokat"]
    },
    answer: 1
  }
},

3033: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Digestibility of plant proteins",
    es: "Digestibilidad de proteínas vegetales",
    hu: "A növényi fehérjék emészthetősége"
  },
  lesson: {
    en: "Plant proteins are often easier to digest than heavy animal proteins, meaning less bloating during training. Smooth digestion leads to better comfort and better athletic performance — especially for runners, cyclists, and fighters.",
    es: "Las proteínas vegetales son a menudo más fáciles de digerir que las proteínas animales pesadas, lo que significa menos hinchazón durante el entrenamiento. Una digestión suave conduce a mayor comodidad y mejor rendimiento atlético, especialmente para corredores, ciclistas y luchadores.",
    hu: "A növényi fehérjék gyakran könnyebben emészthetők, mint a nehéz állati fehérjék, ami kevesebb puffadást jelent az edzés alatt. A sima emésztés jobb komfortot és jobb sportteljesítményt eredményez — különösen futóknak, kerékpárosoknak és harcosoknak."
  },
  quiz: {
    question: {
      en: "Why might plant proteins support better training comfort?",
      es: "¿Por qué las proteínas vegetales pueden mejorar la comodidad durante el entrenamiento?",
      hu: "Miért segíthetik a növényi fehérjék a jobb edzéskomfortot?"
    },
    options: {
      en: ["They are easier to digest", "They cause bloating", "They slow metabolism"],
      es: ["Son más fáciles de digerir", "Causan hinchazón", "Ralentizan el metabolismo"],
      hu: ["Könnyebben emészthetők", "Puffadást okoznak", "Lassítják az anyagcserét"]
    },
    answer: 0
  }
},

3034: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Consistency through faster recovery",
    es: "Consistencia gracias a una recuperación más rápida",
    hu: "Következetesség a gyorsabb regeneráció révén"
  },
  lesson: {
    en: "Training consistency is one of the biggest predictors of performance. Because plant-based diets support faster recovery, lower inflammation, and better energy stability, athletes can train more days per week — leading to steady, long-term improvement.",
    es: "La consistencia del entrenamiento es uno de los mayores predictores del rendimiento. Debido a que las dietas basadas en plantas apoyan una recuperación más rápida, menor inflamación y mejor estabilidad energética, los atletas pueden entrenar más días por semana, llevando a mejoras constantes a largo plazo.",
    hu: "Az edzések következetessége az egyik legnagyobb teljesítménymutató. Mivel a növényi alapú étrend gyorsabb regenerációt, alacsonyabb gyulladást és jobb energia-stabilitást biztosít, a sportolók több napot tudnak edzeni hetente — ami stabil, hosszú távú fejlődéshez vezet."
  },
  quiz: {
    question: {
      en: "What is one major advantage of faster recovery?",
      es: "¿Cuál es una ventaja principal de una recuperación más rápida?",
      hu: "Mi az egyik fő előnye a gyorsabb regenerációnak?"
    },
    options: {
      en: ["More injuries", "Less training", "More consistent training"],
      es: ["Más lesiones", "Menos entrenamiento", "Entrenamiento más consistente"],
      hu: ["Több sérülés", "Kevesebb edzés", "Következetesebb edzés"]
    },
    answer: 2
  }
},

3035: {
  goal: "Boosting my performance as an athlete",
  diet: "vegan",
  title: {
    en: "Long-term success from daily choices",
    es: "Éxito a largo plazo a partir de hábitos diarios",
    hu: "Hosszú távú siker a napi döntésekből"
  },
  lesson: {
    en: "Athletic success is not built in one day — it’s built across thousands of small choices. Eating plants supports your body every single day: better recovery, cleaner fuel, steadier energy, and clearer focus. Over time, these benefits add up into real performance gains.",
    es: "El éxito atlético no se construye en un día, se construye a través de miles de pequeñas elecciones. Comer plantas apoya tu cuerpo todos los días: mejor recuperación, combustible más limpio, energía más estable y enfoque más claro. Con el tiempo, estos beneficios se suman en mejoras reales del rendimiento.",
    hu: "A sport sikere nem egy nap alatt épül fel — ezrenyi apró döntésen keresztül történik. A növényi ételek minden nap támogatják a tested: jobb regeneráció, tisztább energiaforrás, stabilabb energia és világosabb fókusz. Idővel ezek a hatások összeadódnak, valódi teljesítményjavulást eredményezve."
  },
  quiz: {
    question: {
      en: "What drives long-term athletic improvement?",
      es: "¿Qué impulsa la mejora atlética a largo plazo?",
      hu: "Mi biztosítja a hosszú távú sportteljesítmény javulását?"
    },
    options: {
      en: ["Healthy daily habits over time", "Occasional intense workouts", "One special supplement"],
      es: ["Hábitos diarios saludables con el tiempo", "Entrenamientos intensos ocasionales", "Un suplemento especial"],
      hu: ["Egészséges napi szokások idővel", "Alkalmi intenzív edzések", "Egy különleges kiegészítő"]
    },
    answer: 0
  }
},
*/
// continue

};

/*  */
// =======================
// LEARN PATH
// =======================
export const extralessonsData = {
  animals: [
    {
    title: {
      en: "Hidden reality",
      es: "La realidad oculta",
      hu: "Rejtett valóság"
    },
    content: {
      en: "We live in a system where the process behind animal products is largely invisible. Animals are rarely seen as individuals with lives, but rather as products already transformed into food. This distance allows people to consume animal products without confronting the conditions or beings involved in their production. When systems are hidden, it becomes easier to avoid questioning them. But when we look closer at what is normally kept out of sight, we gain the ability to make more conscious choices. This is how society is shaping our relationship with food—through distance and disconnection.",
      es: "Vivimos en un sistema donde el proceso detrás de los productos de origen animal es en gran medida invisible. Los animales rara vez son vistos como individuos con vidas, sino más bien como productos ya transformados en alimentos. Esta distancia permite a las personas consumir productos de origen animal sin enfrentarse a las condiciones o a los seres implicados en su producción. Cuando los sistemas están ocultos, se vuelve más fácil evitar cuestionarlos. Pero cuando observamos más de cerca lo que normalmente se mantiene fuera de la vista, obtenemos la capacidad de tomar decisiones más conscientes. Así es como la sociedad está moldeando nuestra relación con la comida: a través de la distancia y la desconexión.",
      hu: "Egy olyan rendszerben élünk, ahol az állati eredetű termékek mögötti folyamat nagyrészt láthatatlan. Az állatokat ritkán tekintik egyéneknek, akiknek saját életük van, hanem inkább már élelmiszerré átalakított termékekként. Ez a távolság lehetővé teszi az emberek számára, hogy állati eredetű termékeket fogyasszanak anélkül, hogy szembesülnének az előállításukban részt vevő körülményekkel vagy élőlényekkel. Amikor a rendszerek rejtve maradnak, könnyebb elkerülni a megkérdőjelezésüket. De amikor közelebbről megnézzük azt, ami általában rejtve marad, képessé válunk tudatosabb döntéseket hozni. Így formálja a társadalom az étellel való kapcsolatunkat — távolságon és elszakadáson keresztül."
    },
    question: {
      text: {
        en: "What role does “distance” play in the system?",
        es: "¿Qué papel desempeña la “distancia” en el sistema?",
        hu: "Milyen szerepet játszik a „távolság” a rendszerben?"
      },
      options: {
        en: [
          "It improves the quality control of animal products",
          "It makes production more efficient and affordable",
          "It reduces emotional and cognitive connection to the origins of food",
          "It ensures that consumers are fully informed about production processes"
        ],
        es: [
          "Mejora el control de calidad de los productos de origen animal",
          "Hace que la producción sea más eficiente y asequible",
          "Reduce la conexión emocional y cognitiva con el origen de los alimentos",
          "Garantiza que los consumidores estén plenamente informados sobre los procesos de producción"
        ],
        hu: [
          "Javítja az állati eredetű termékek minőségellenőrzését",
          "Hatékonyabbá és megfizethetőbbé teszi a termelést",
          "Csökkenti az érzelmi és kognitív kapcsolatot az ételek eredetével",
          "Biztosítja, hogy a fogyasztók teljes mértékben tájékozottak legyenek a termelési folyamatokról"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Survival today and in the past",
      es: "Sobrevivencia hoy y en el pasado",
      hu: "Túlélés ma és a múltban"
    },
    content: {
      en: "For most of human history, survival depended on direct knowledge of the environment. People learned from tradition—skills, diets, and practices passed down through generations. These traditions were closely tied to local conditions, seasons, and necessity. Modern survival is no longer about knowing how to directly obtain everything we need—it is about navigating systems we depend on but do not fully see. In this context, awareness becomes one of the most important survival skills.",
      es: "Durante la mayor parte de la historia humana, la supervivencia dependía del conocimiento directo del entorno. Las personas aprendían de la tradición: habilidades, dietas y prácticas transmitidas de generación en generación. Estas tradiciones estaban estrechamente vinculadas a las condiciones locales, las estaciones y la necesidad. La supervivencia moderna ya no consiste en saber cómo obtener directamente todo lo que necesitamos; se trata de navegar sistemas de los que dependemos pero que no vemos completamente. En este contexto, la conciencia se convierte en una de las habilidades de supervivencia más importantes.",
      hu: "Az emberi történelem nagy részében a túlélés a környezet közvetlen ismeretétől függött. Az emberek a hagyományokból tanultak — készségekből, étrendekből és generációról generációra átadott gyakorlatokból. Ezek a hagyományok szorosan kapcsolódtak a helyi körülményekhez, az évszakokhoz és a szükséghez. A modern túlélés már nem arról szól, hogy tudjuk, hogyan szerezzük meg közvetlenül mindazt, amire szükségünk van — hanem arról, hogy eligazodjunk azokban a rendszerekben, amelyektől függünk, de amelyeket nem látunk teljes mértékben. Ebben a kontextusban a tudatosság az egyik legfontosabb túlélési készséggé válik."
    },
    question: {
      text: {
        en: "What is the key to modern survival?",
        es: "¿Cuál es la clave de la supervivencia moderna?",
        hu: "Mi a modern túlélés kulcsa?"
      },
      options: {
        en: [
          "Returning fully to traditional ways of living",
          "Increasing physical strength and self-sufficiency",
          "Awareness of the system and how we shape it",
          "Avoiding technology and modern infrastructure"
        ],
        es: [
          "Volver completamente a las formas tradicionales de vida",
          "Aumentar la fuerza física y la autosuficiencia",
          "Conciencia del sistema y de cómo lo moldeamos",
          "Evitar la tecnología y la infraestructura moderna"
        ],
        hu: [
          "Teljes visszatérés a hagyományos életmódhoz",
          "A fizikai erő és az önellátás növelése",
          "A rendszer tudatosítása és annak megértése, hogyan formáljuk azt",
          "A technológia és a modern infrastruktúra elkerülése"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Avoidable suffering",
      es: "Sufrimiento evitable",
      hu: "Kerülendő szenvedés"
    },
    content: {
      en: "Not all suffering is the same. Some are unavoidable, caused by nature, illness, or circumstances beyond human control. But some suffering is created, maintained, or tolerated by systems and choices that could be changed. In modern society, many forms of suffering are distant from those who benefit from them. When harm is not directly visible, it becomes easier to ignore, normalize, or separate from personal responsibility. This distance makes such suffering difficult to see, and even harder to change.",
      es: "No todo el sufrimiento es igual. Algunos son inevitables, causados por la naturaleza, enfermedades o circunstancias fuera del control humano. Pero parte del sufrimiento es creado, mantenido o tolerado por sistemas y decisiones que podrían cambiarse. En la sociedad moderna, muchas formas de sufrimiento están alejadas de quienes se benefician de ellas. Cuando el daño no es directamente visible, se vuelve más fácil ignorarlo, normalizarlo o separarlo de la responsabilidad personal. Esta distancia hace que dicho sufrimiento sea difícil de ver, y aún más difícil de cambiar.",
      hu: "Nem minden szenvedés egyforma. Vannak elkerülhetetlenek, amelyeket a természet, betegségek vagy az emberi irányításon kívül eső körülmények okoznak. De van olyan szenvedés is, amelyet rendszerek és döntések hoznak létre, tartanak fenn vagy tűrnek meg, pedig ezek megváltoztathatók lennének. A modern társadalomban a szenvedés sok formája távol áll azoktól, akik hasznot húznak belőle. Amikor a kár nem közvetlenül látható, könnyebbé válik figyelmen kívül hagyni, normalizálni, vagy elválasztani a személyes felelősségtől. Ez a távolság megnehezíti az ilyen szenvedés észlelését, és még nehezebbé teszi a megváltoztatását."
    },
    question: {
      text: {
        en: "What did we learn about suffering?",
        es: "¿Qué hemos aprendido sobre el sufrimiento?",
        hu: "Mit tanultunk a szenvedésről?"
      },
      options: {
        en: [
          "Some suffering is unavoidable, but some is created or maintained by systems and choices",
          "Suffering only comes from natural causes like illness or disasters",
          "All suffering is unavoidable and cannot be changed",
          "Suffering is always directly visible to those who cause it"
        ],
        es: [
          "Parte del sufrimiento es inevitable, pero parte es creado o mantenido por sistemas y decisiones",
          "El sufrimiento solo proviene de causas naturales como enfermedades o desastres",
          "Todo el sufrimiento es inevitable y no puede cambiarse",
          "El sufrimiento siempre es directamente visible para quienes lo causan"
        ],
        hu: [
          "Van elkerülhetetlen szenvedés, de van olyan is, amelyet rendszerek és döntések hoznak létre vagy tartanak fenn",
          "A szenvedés csak természetes okokból, például betegségekből vagy katasztrófákból származik",
          "Minden szenvedés elkerülhetetlen, és nem változtatható meg",
          "A szenvedés mindig közvetlenül látható azok számára, akik okozzák"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Natural emphaty",
      es: "Empatía natural",
      hu: "Természetes empátia"
    },
    content: {
      en: "When people see animals directly, especially in vulnerable situations, many feel a natural urge to protect or help them. This instinct to care and avoid harm appears early in life and is not only shaped by culture or education—it is a form of natural empathy. However, in everyday life, most interactions with animals are indirect. Food systems and social distance separate the moment of consumption from the living being it originally came from. This creates a gap between what people feel in direct encounters and what they participate in indirectly.",
      es: "Cuando las personas ven a los animales directamente, especialmente en situaciones vulnerables, muchas sienten un impulso natural de protegerlos o ayudarlos. Este instinto de cuidar y evitar el daño aparece temprano en la vida y no solo está moldeado por la cultura o la educación; es una forma de empatía natural. Sin embargo, en la vida cotidiana, la mayoría de las interacciones con animales son indirectas. Los sistemas alimentarios y la distancia social separan el momento del consumo del ser vivo del que originalmente proviene. Esto crea una brecha entre lo que las personas sienten en encuentros directos y en lo que participan indirectamente.",
      hu: "Amikor az emberek közvetlenül látják az állatokat, különösen kiszolgáltatott helyzetekben, sokan természetes késztetést éreznek arra, hogy megvédjék vagy segítsenek nekik. Ez a gondoskodásra és az ártalom elkerülésére irányuló ösztön már korán megjelenik az életben, és nem csupán a kultúra vagy az oktatás formálja — ez a természetes empátia egy formája. A mindennapi életben azonban a legtöbb interakció az állatokkal közvetett. Az élelmiszerrendszerek és a társadalmi távolság elválasztják a fogyasztás pillanatát attól az élőlénytől, amelyből az eredetileg származik. Ez egy szakadékot hoz létre aközött, amit az emberek a közvetlen találkozások során éreznek, és aközött, amiben közvetve részt vesznek."
    },
    question: {
      text: {
        en: "Are our consumption habits consistent with our natural instincts toward animals?",
        es: "¿Son nuestros hábitos de consumo consistentes con nuestros instintos naturales hacia los animales?",
        hu: "Összhangban vannak-e a fogyasztási szokásaink az állatokkal kapcsolatos természetes ösztöneinkkel?"
      },
      options: {
        en: [
          "Not always, there can be a gap between instinctive empathy and indirect consumption.",
          "Instincts do not play any role in consumption choices",
          "Yes, they are fully consistent"
        ],
        es: [
          "No siempre, puede haber una brecha entre la empatía instintiva y el consumo indirecto.",
          "Los instintos no desempeñan ningún papel en las decisiones de consumo",
          "Sí, son completamente consistentes"
        ],
        hu: [
          "Nem mindig, lehet különbség az ösztönös empátia és a közvetett fogyasztás között.",
          "Az ösztönök nem játszanak szerepet a fogyasztási döntésekben",
          "Igen, teljes mértékben összhangban vannak"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Human superiority",
      es: "Superioridad humana",
      hu: "Emberi felsőbbrendűség"
    },
    content: {
      en: "We cannot simply take a responsible position of human superiority as a fact. Instead, we can reflect on what this idea means in practice, and what it ethically authorizes us to do. The belief that humans are “above” other forms of life has shaped how we use animals, nature, and resources. But the ability to act in a certain way does not automatically mean it is ethically justified. What matters is not only the power we have, but how we choose to use it—and what limits we are willing to recognize.",
      es: "No podemos simplemente adoptar una posición responsable de superioridad humana como un hecho. En su lugar, podemos reflexionar sobre lo que esta idea significa en la práctica y lo que nos autoriza éticamente a hacer. La creencia de que los humanos están “por encima” de otras formas de vida ha moldeado la forma en que usamos a los animales, la naturaleza y los recursos. Pero la capacidad de actuar de cierta manera no significa automáticamente que esté éticamente justificado. Lo que importa no es solo el poder que tenemos, sino cómo elegimos usarlo —y qué límites estamos dispuestos a reconocer.",
      hu: "Az emberi felsőbbrendűséggel kapcsolatban nem tudunk felelős álláspontot foglalni. Ehelyett elgondolkodhatunk azon, mit jelent ez az elképzelés a gyakorlatban, és mire jogosít fel bennünket etikailag. Az a hit, hogy az emberek „fölötte állnak” más életformáknak, formálta azt, ahogyan az állatokat, a természetet és az erőforrásokat használjuk. De az, hogy képesek vagyunk egy bizonyos módon cselekedni, nem jelenti automatikusan azt, hogy ez etikailag igazolható. Ami számít, nemcsak az a hatalom, amellyel rendelkezünk, hanem az is, hogyan döntünk a használatáról — és milyen határokat vagyunk hajlandók elismerni."
    },
    question: {
      text: {
        en: "What are we learning about human superiority?",
        es: "¿Qué hemos aprendido sobre la superioridad humana?",
        hu: "Mit tanultunk az emberi felsőbbrendűségről?"
      },
      options: {
        en: [
          "It should be accepted as a natural fact that guides how humans act",
          "It should be questioned and reflected on in terms of ethical responsibility and limits",
          "It means humans can use other forms of life however they want",
          "It is not relevant to how humans make decisions"
        ],
        es: [
          "Debe aceptarse como un hecho natural que guía cómo actúan los humanos",
          "Debe ser cuestionada y reflexionada en términos de responsabilidad ética y límites",
          "Significa que los humanos pueden usar otras formas de vida como quieran",
          "No es relevante para cómo los humanos toman decisiones"
        ],
        hu: [
          "Természetes tényként kell elfogadni, amely meghatározza az emberek cselekedeteit",
          "Meg kell kérdőjelezni, és az etikai felelősség és határok szempontjából kell róla gondolkodni",
          "Azt jelenti, hogy az emberek bármilyen módon használhatják más életformákat",
          "Nem releváns azzal kapcsolatban, hogyan hoznak döntéseket az emberek"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Intelligent world",
      es: "Mundo inteligente",
      hu: "Intelligens világ"
    },
    content: {
      en: "Humans often see themselves as the most intelligent beings on Earth. We build technology, create systems, and reshape the world. But we are also part of nature—so could this belief be our ego speaking? \n\nWe still barely understand the world we live in, and we cannot recreate even the simplest living forms from scratch. Nature creates systems of incredible complexity—just like our brains or bodies—yet far beyond what we fully understand or can replicate.\n\nSo the question is:\n\nDo we own intelligence, or are we simply one expression of a much larger intelligence?\n\nReflecting on this can change how we see our place in the world—and how we treat the planet, its resources, and other living beings.",
      es: "Los humanos a menudo se ven a sí mismos como los seres más inteligentes de la Tierra. Construimos tecnología, creamos sistemas y transformamos el mundo.\n\nPero también somos parte de la naturaleza — ¿podría esta creencia ser nuestro ego hablando?\n\nAún apenas entendemos el mundo en el que vivimos, y no podemos recrear ni siquiera las formas de vida más simples desde cero. La naturaleza crea sistemas de una complejidad increíble — como nuestros cerebros o cuerpos — pero mucho más allá de lo que comprendemos completamente o podemos replicar.\n\nEntonces, la pregunta es:\n\n¿Poseemos la inteligencia, o somos simplemente una expresión de una inteligencia mucho más grande?\n\nReflexionar sobre esto puede cambiar cómo vemos nuestro lugar en el mundo — y cómo tratamos al planeta, sus recursos y a otros seres vivos.",
      hu: "Az emberek gyakran a Föld legintelligensebb lényeinek tartják magukat. Technológiát építünk, rendszereket hozunk létre, és átalakítjuk a világot.\nDe mi is a természet részei vagyunk — lehet, hogy ez a hit az egónk hangja?\n\nMég alig értjük azt a világot, amelyben élünk, és még a legegyszerűbb élőlényeket sem tudjuk a semmiből újraalkotni. A természet hihetetlenül összetett rendszereket hoz létre — például az agyunkat vagy a testünket —, amelyek messze meghaladják azt, amit teljesen megértünk vagy képesek vagyunk reprodukálni.\n\nTehát a kérdés:\n\nMi birtokoljuk az intelligenciát, vagy csupán egy sokkal nagyobb intelligencia egyik megnyilvánulása vagyunk?\n\nEnnek átgondolása megváltoztathatja azt, ahogyan a helyünket látjuk a világban — és azt is, hogyan bánunk a bolygóval, annak erőforrásaival és más élőlényekkel."
    },
    question: {
      text: {
        en: "What is this lesson encouraging us to reflect on?",
        es: "¿Qué nos anima a reflexionar esta lección?",
        hu: "Mit kell megkérdőjeleznünk a lecke szerint?"
      },
      options: {
        en: [
          "Our superiority over nature",
          "Our inferiority compared to nature",
          "Our place within a larger system of intelligence",
          "Our ability to control the world"
        ],
        es: [
          "Nuestra superioridad sobre la naturaleza",
          "Nuestra inferioridad en comparación con la naturaleza",
          "Nuestro lugar dentro de un sistema más amplio de inteligencia",
          "Nuestra capacidad para controlar el mundo"
        ],
        hu: [
          "A természet feletti felsőbbrendűségünket",
          "A természethez képest való alárendeltségünket",
          "A helyünket egy nagyobb intelligenciarendszeren belül",
          "A világ irányítására való képességünket"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Ethical equality",
      es: "Igualdad ética",
      hu: "Etikus egyenlőség"
    },
    content: {
      en: "If we take a step back from our own lives and observe the world with distance and objectivity, we begin to notice something fundamental: all sentient beings share the same basic inner reality.\n\nEvery being wants to live. Every being fears pain and death. And across all forms of life, we find the same core emotions—fear, stress, anxiety, comfort, and joy.\n\nDespite our differences in intelligence, form, or ability, these experiences are shared. Pain is pain. Fear is fear. The desire to continue living is universal.\n\nThis reveals something we often forget:\n\nSuffering and happiness are not ours to possess.",
      es: "Si damos un paso atrás respecto a nuestras propias vidas y observamos el mundo con distancia y objetividad, comenzamos a notar algo fundamental: todos los seres sintientes comparten la misma realidad interna básica.\nTodo ser quiere vivir. Todo ser teme el dolor y la muerte. Y en todas las formas de vida encontramos las mismas emociones fundamentales — miedo, estrés, ansiedad, comodidad y alegría.\nA pesar de nuestras diferencias en inteligencia, forma o capacidad, estas experiencias son compartidas. El dolor es dolor. El miedo es miedo. El deseo de seguir viviendo es universal.\n\nEsto revela algo que a menudo olvidamos\n\nEl sufrimiento y la felicidad no nos pertenecen.",
      hu: "Ha egy lépést hátralépünk a saját életünktől, és távolsággal, objektíven figyeljük meg a világot, elkezdünk észrevenni valami alapvetőt: minden érző lény ugyanazzal az alapvető belső valósággal rendelkezik.\nMinden lény élni akar. Minden lény fél a fájdalomtól és a haláltól. És minden életformában ugyanazokat az alapvető érzelmeket találjuk — félelmet, stresszt, szorongást, kényelmet és örömöt.\nAz intelligenciában, formában vagy képességekben mutatkozó különbségek ellenére ezek a tapasztalatok közösek. A fájdalom fájdalom. A félelem félelem. Az élet folytatásának vágya egyetemes.\n\nEz rámutat valamire, amit gyakran elfelejtünk:\n\nA szenvedést és a boldogságot nem sajátíthatjuk ki."
    },
    question: {
      text: {
        en: "What did we learn about basic inner reality?",
        es: "¿Qué aprendimos sobre la realidad interna básica?",
        hu: "Mit tanultunk az alapvető belső valóságról?"
      },
      options: {
        en: [
          "It is unique to humans and separates us from other beings",
          "It is defined by intelligence and cognitive ability",
          "It shows that some beings matter more than others",
          "From these basic aspects, we are all equal"
        ],
        es: [
          "Es única de los humanos y nos separa de otros seres",
          "Está definida por la inteligencia y la capacidad cognitiva",
          "Muestra que algunos seres importan más que otros",
          "A partir de estos aspectos básicos, todos somos iguales"
        ],
        hu: [
          "Csak az emberekre jellemző, és elválaszt minket más lényektől",
          "Az intelligencia és a kognitív képesség határozza meg",
          "Azt mutatja, hogy egyes lények fontosabbak másoknál",
          "Ezekből az alapvető szempontokból mindannyian egyenlőek vagyunk"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "We do care about animals",
      es: "Nos importa los animales",
      hu: "Élőlények iránti gondoskodás"
    },
    content: {
      en: "It is worth observing our own feelings and instincts more closely. For that, we can ask ourselves a few simple questions:\n\nWhat did you feel when you saved an animal?\nHow do you feel when you see a video of a squirrel drinking water from a bottle someone offered it?\nWhat would you feel if you had to kill an animal yourself?\nHow do you react when you see an animal being harmed or killed?\n\nIf we are honest in these moments, something becomes clear: we do care.",
      es: "Vale la pena observar nuestros propios sentimientos e instintos más de cerca. Para ello, podemos hacernos algunas preguntas simples:\n\n¿Qué sentiste cuando salvaste a un animal?\n¿Cómo te sientes cuando ves un video de una ardilla bebiendo agua de una botella que alguien le ofreció?\n¿Qué sentirías si tuvieras que matar a un animal tú mismo?\n¿Cómo reaccionas cuando ves a un animal siendo dañado o matado?\n\nSi somos honestos en estos momentos, algo se vuelve claro: nos importan.",
      hu: "Érdemes közelebbről megfigyelni a saját érzéseinket és ösztöneinket. Ehhez feltehetünk magunknak néhány egyszerű kérdést:\n\nMit éreztél, amikor megmentettél egy állatot?\nMit érzel, amikor látsz egy videót egy mókusról, amely egy palackból iszik, amit valaki felkínált neki?\nMit éreznél, ha neked kellene megölnöd egy állatot?\nHogyan reagálsz, amikor egy állatot bántanak vagy megölnek?\n\nHa ezekben a pillanatokban őszinték vagyunk, valami világossá válik: törődünk."
    },
    question: {
      text: {
        en: "What do these reflections help us realize about ourselves?",
        es: "¿Qué nos ayudan a darnos cuenta estas reflexiones sobre nosotros mismos?",
        hu: "Mit segítenek felismerni ezek az önreflexiók rólunk?"
      },
      options: {
        en: [
          "Our feelings toward animals are mostly irrelevant and should be ignored",
          "We only care about animals when it is socially expected",
          "Our emotional responses to animals are inconsistent and cannot be trusted",
          "We naturally do care about animals, and this becomes clear when we honestly observe our reactions"
        ],
        es: [
          "Nuestros sentimientos hacia los animales son en su mayoría irrelevantes y deben ser ignorados",
          "Solo nos importan los animales cuando se espera socialmente",
          "Nuestras respuestas emocionales hacia los animales son inconsistentes y no se puede confiar en ellas",
          "Naturalmente nos importan los animales, y esto se vuelve claro cuando observamos honestamente nuestras reacciones"
        ],
        hu: [
          "Az állatokkal kapcsolatos érzéseink többnyire irrelevánsak, és figyelmen kívül kell hagyni őket",
          "Csak akkor törődünk az állatokkal, amikor ez társadalmilag elvárt",
          "Az állatokkal kapcsolatos érzelmi reakcióink következetlenek, és nem megbízhatók",
          "Természetünknél fogva törődünk az állatokkal, és ez világossá válik, amikor őszintén megfigyeljük a reakcióinkat"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Choosing compassion",
      es: "Elegir la compasión",
      hu: "Empátia választása"
    },
    content: {
      en: "In modern life, we are often distant from the consequences of our choices. Most animal products reach us in a form that hides the process behind them—clean packaging, neutral language, and separation from the act itself.\n\nThis distance makes it easier for us to support systems that we might feel uncomfortable with if we saw them directly.\n\nBecause of this, it becomes important to recognize what these choices represent. Purchasing these products is not neutral—it contributes to systems where animals experience suffering that is often preventable and prolonged.",
      es: "En la vida moderna, a menudo estamos alejados de las consecuencias de nuestras decisiones. La mayoría de los productos de origen animal nos llegan en una forma que oculta el proceso que hay detrás — envases limpios, lenguaje neutral y separación del acto en sí. \n\nEsta distancia hace que sea más fácil para nosotros apoyar sistemas con los que podríamos sentirnos incómodos si los viéramos directamente. \n\nDebido a esto, se vuelve importante reconocer lo que representan estas decisiones. Comprar estos productos no es neutral — contribuye a sistemas en los que los animales experimentan un sufrimiento que a menudo es evitable y prolongado.",
      hu: "A modern életben gyakran elhatárolódunk a döntéseink következményeitől. Az állati eredetű termékek többsége olyan formában jut el hozzánk, amely elrejti a mögöttük álló folyamatot — tiszta csomagolás, semleges nyelvezet és az aktustól való elválasztás. \n\nEz a távolság megkönnyíti számunkra, hogy olyan rendszereket támogassunk, amelyekkel közvetlenül szembesülve kellemetlenül éreznénk magunkat. \n\nEzért fontossá válik felismerni, mit képviselnek ezek a döntések. Ezeknek a termékeknek a megvásárlása nem semleges — olyan rendszerekhez járul hozzá, ahol az állatok olyan szenvedést élnek át, amely gyakran elkerülhető és elhúzódó."
    },
    question: {
      text: {
        en: "How can we choose compassion in practice?",
        es: "¿Cómo podemos elegir la compasión en la práctica?",
        hu: "Hogyan választhatjuk az együttérzést a gyakorlatban?"
      },
      options: {
        en: [
          "Not purchasing animal products",
          "Ignoring how products are made and focusing only on convenience",
          "Assuming distance from production removes responsibility",
          "Choosing only based on price and availability"
        ],
        es: [
          "No comprar productos de origen animal",
          "Ignorar cómo se hacen los productos y centrarse solo en la conveniencia",
          "Asumir que la distancia de la producción elimina la responsabilidad",
          "Elegir solo en función del precio y la disponibilidad"
        ],
        hu: [
          "Nem vásárolunk állati eredetű termékeket",
          "Figyelmen kívül hagyjuk, hogyan készülnek a termékek, és csak a kényelemre összpontosítunk",
          "Feltételezzük, hogy a termeléstől való távolság megszünteti a felelősséget",
          "Csak az ár és az elérhetőség alapján választunk"
        ]
      },
      correctIndex: 0
    }
  },
  {
    title: {
      en: "Ignorance is bliss",
      es: "La ignorancia es dicha",
      hu: "A tudatlanság boldogság"
    },
    content: {
      en: "When something feels emotionally difficult—such as the consequences behind certain products or actions—our mind tends to protect us. It does this by avoiding, minimizing, or not fully engaging with the information.\n\nThis is not unusual. It is a natural psychological tendency to reduce discomfort. But over time, it can shape our behavior in ways we do not consciously choose.\n\nWhat we call “normal” in society is often supported by this distance from uncomfortable reality.",
      es: "Cuando algo resulta emocionalmente difícil — como las consecuencias detrás de ciertos productos o acciones — nuestra mente tiende a protegernos. Lo hace evitando, minimizando o no involucrándose completamente con la información.\n\nEsto no es inusual. Es una tendencia psicológica natural reducir el malestar. Pero con el tiempo, puede dar forma a nuestro comportamiento de maneras que no elegimos conscientemente.\n\nLo que llamamos “normal” en la sociedad a menudo está sostenido por esta distancia de una realidad incómoda.",
      hu: "Amikor valami érzelmileg nehéz — például bizonyos termékek vagy tettek mögötti következmények — az elménk hajlamos megvédeni minket. Ezt úgy teszi, hogy elkerüli, minimalizálja, elferdíti vagy nem teljesen dolgozza fel az információt, ezáltal létrehozza a kényelmes közeget, amire vágyunk.\n\nEz nem szokatlan. Természetes pszichológiai tendencia a kellemetlenség csökkentése. De idővel ez olyan módon formálhatja a viselkedésünket, amelyet nem tudatosan választunk.\n\nGyakran a kellemetlen valóságtól való távolság mondatja velünk azt, hogy valami “rendben van”."
    },
    question: {
      text: {
        en: "How do we respond to uncomfortable facts?",
        es: "¿Cómo respondemos a los hechos incómodos?",
        hu: "Hogyan reagálunk a kellemetlen tényekre?"
      },
      options: {
        en: [
          "We always face uncomfortable truths directly and rationally",
          "Our mind may avoid or reduce exposure to uncomfortable realities to protect us from discomfort",
          "Society removes all moral responsibility from individuals",
          "Uncomfortable facts have no influence on human behavior"
        ],
        es: [
          "Siempre enfrentamos las verdades incómodas de forma directa y racional",
          "Nuestra mente puede evitar o reducir la exposición a realidades incómodas para protegernos del malestar",
          "La sociedad elimina toda responsabilidad moral de los individuos",
          "Los hechos incómodos no influyen en el comportamiento humano"
        ],
        hu: [
          "Mindig közvetlenül és racionálisan szembenézünk a kellemetlen igazságokkal",
          "Az elménk elkerülheti vagy csökkentheti a kellemetlen valóságokkal való érintkezést, hogy megvédjen minket a diszkomforttól",
          "A társadalom minden erkölcsi felelősséget eltávolít az egyénekről",
          "A kellemetlen tényeknek nincs hatása az emberi viselkedésre"
        ]
      },
      correctIndex: 1
    }
  },
  {
    title: {
      en: "Normalized harm",
      es: "Daño normalizado",
      hu: "Normalizált bántalmazás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Social pressure",
      es: "Presión social",
      hu: "Társadalmi nyomás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Freedom",
      es: "Libertad",
      hu: "Szabadság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Number of deaths",
      es: "Número de muertes",
      hu: "Halálok száma"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Natural carnivore - herbivore ratio",
      es: "Proporción natural de carnívoros - herbívoros",
      hu: "Természetes húsevő - növényevő arány"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Exploit the defenseless",
      es: "Aprovechar a los indefensos",
      hu: "A védtelenek kihasználása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Our habits and perspectives",
      es: "Nuestros hábitos y perspectivas",
      hu: "A mi szokásaink és látópontjaink"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pets or food?",
      es: "¿Mascotas o comida?",
      hu: "Családtag vagy étel?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Hypocrisy",
      es: "Hipocresía",
      hu: "Hipokritizmus"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Using animals",
      es: "Usar animales",
      hu: "Állatok használata"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pigs: Awareness",
      es: "Cerdos: Conciencia",
      hu: "Disznók: Tudatosság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pigs: Intelligence",
      es: "Cerdos: Inteligencia",
      hu: "Disznók: Intelligencia"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pigs: Habits",
      es: "Cerdos: Hábitos",
      hu: "Disznók: Szokások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pigs: Lifestyle",
      es: "Cerdos: Estilo de vida",
      hu: "Disznók: Életmód"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pigs: Lifespan",
      es: "Cerdos: Esperanza de vida",
      hu: "Disznók: Élettartam"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Chickens: Awareness",
      es: "Gallinas: Conciencia",
      hu: "Csirkék: Tudatosság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Chickens: Habits",
      es: "Gallinas: Hábitos",
      hu: "Csirkék: Szokások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Chickens: Lifestyle",
      es: "Gallinas: Estilo de vida",
      hu: "Csirkék: Életmód"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Chickens: Lifespan",
      es: "Gallinas: Esperanza de vida",
      hu: "Csirkék: Élettartam"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: Awareness",
      es: "Vacas: Conciencia",
      hu: "Tehenek: Tudatosság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: Emotional Intelligence",
      es: "Vacas: Inteligencia emocional",
      hu: "Tehenek: Érzelmi intelligencia"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: Family",
      es: "Vacas: Familia",
      hu: "Tehenek: Család"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: Habits",
      es: "Vacas: Hábitos",
      hu: "Tehenek: Szokások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: Lifestyle",
      es: "Vacas: Estilo de vida",
      hu: "Tehenek: Életmód"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: Lifespan",
      es: "Vacas: Esperanza de vida",
      hu: "Tehenek: Élettartam"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fishes: Do they feel pain?",
      es: "Peces: ¿Sienten dolor?",
      hu: "Halak: Érzik a fájdalmat?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fishes: Volume",
      es: "Peces: Volumen",
      hu: "Halak: Mennyiség"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fishes: Farming tanks",
      es: "Peces: Tanques de cría",
      hu: "Halak: Tenyésztő tartályok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Influence on marine life",
      es: "Influencia en la vida marina",
      hu: "Hatás a tengeri életre"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Abandoned fishing gear",
      es: "Equipo de pesca abandonado",
      hu: "Elhagyott tengeri hálók"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Turtles",
      es: "Tortugas",
      hu: "Teknősök"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Sharks",
      es: "Tiburones",
      hu: "Cápák"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Dolphins",
      es: "Delfines",
      hu: "Delfinek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Invisible suffering",
      es: "Sufrimiento invisible",
      hu: "Láthatatlan szenvedés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cages",
      es: "Jaulas",
      hu: "Ketrecek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Debeaking",
      es: "Desplumado",
      hu: "Csőrlevágás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Masks",
      es: "Máscaras",
      hu: "Maszkok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fate of the males",
      es: "Destino de los machos",
      hu: "A hímek sorsa"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Methods of slaughter 1.",
      es: "Métodos de sacrificio 1.",
      hu: "Kivégzési módszerek 1."
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Methods of slaughter 2.",
      es: "Métodos de sacrificio 2.",
      hu: "Kivégzési módszerek 2."
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Being a male calf in the dairy industry",
      es: "Ser un ternero macho en la industria láctea",
      hu: "A hím tehenek szerepe a tejipari iparban"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Selective breeding",
      es: "Selección reproductiva",
      hu: "Kiválasztott szaporítás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Holocaust",
      es: "El Holocausto",
      hu: "A holokauszt"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Exploiting the female body",
      es: "Aprovechamiento del cuerpo femenino",
      hu: "A női test kihasználása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Egg overproduction",
      es: "Sobrerproducción de huevos",
      hu: "Tojásfelesleg"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Rapid growth",
      es: "Crecimiento rápido",
      hu: "Gyors növekedés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Genetic manipulation",
      es: "Manipulación genética",
      hu: "Genetikai módosítás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Profit versus life",
      es: "Beneficio en contra de vida",
      hu: "Haszon az élet ellen"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Ethics versus profit",
      es: "Etica en contra de beneficio",
      hu: "Etiika a profit ellen"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Capitalism in animal agriculture",
      es: "El capitalismo en la agricultura animal",
      hu: "A kapitalizmus az állattenyésztésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Free-range challenges",
      es: "Desafíos de libre pastoreo",
      hu: "A szabadtartás kihívásai"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Death or suffering?",
      es: "Muerte o sufrimiento?",
      hu: "Halál vagy szenvedés?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Value of lives",
      es: "Valor de las vidas",
      hu: "Életek értéke"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "An extreme choice",
      es: "Una elección extrema",
      hu: "Egy extrém választás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Misleading labels",
      es: "Etiquetas engañosas",
      hu: "Csalóka címkék"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "What do labels mean?",
      es: "¿Qué significan las etiquetas?",
      hu: "Mit jelentenek a címkék?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Trustworthiness",
      es: "Fiabilidad",
      hu: "Megbízhatóság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Our ancestors did it",
      es: "Nuestros ancestros lo hicieron",
      hu: "Az őseink így csinálták"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Bible",
      es: "Biblia",
      hu: "Biblia"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Islam",
      es: "Islam",
      hu: "Iszlám"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Buddhism",
      es: "Budismo",
      hu: "Buddhizmus"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Plants feel pain 1.",
      es: "Las plantas sienten dolor 1.",
      hu: "A növények éreznek fájdalmat 1."
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Plants feel pain 2.",
      es: "Las plantas sienten dolor 2.",
      hu: "A növények éreznek fájdalmat 2."
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Plants feel pain 3.",
      es: "Las plantas sienten dolor 3.",
      hu: "A növények éreznek fájdalmat 3."
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "If the animal had a good life...",
      es: "Si el animal hubiera tenido una buena vida...",
      hu: "Ha a állatnak jó élete volt..."
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Eating the less intelligent",
      es: "Comiendo a los menos inteligentes",
      hu: "A kevésbé intelligens élőlények fogyasztása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "'I would never kill an animal'",
      es: "'Nunca mataría a un animal'",
      hu: "'Sosem ölnék meg egy állatot'"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "'I can't watch graphic videos'",
      es: "'No puedo ver videos gráficos'",
      hu: "'Nem bírok megnézni durva videókat'"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Loving animals",
      es: "Amando a los animales",
      hu: "Szeretni az állatokat"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Being against animal abuse",
      es: "Siendo en contra del abuso animal",
      hu: "Ellenezni az állatkínzást"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Out of sight, out of mind?",
      es: "Fuera de vista, fuera de mente?",
      hu: "Ha nem látjuk, nem gondolunk rá?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Killing for pleasure",
      es: "Matar por placer",
      hu: "Gyilkolás élvezetből"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Speciesism",
      es: "Especiesismo",
      hu: "Fajmegkülönböztetés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Circus",
      es: "Circo",
      hu: "Cirkusz"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Zoos",
      es: "Zoológicos",
      hu: "Állatkertek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Pets",
      es: "Mascotas",
      hu: "Háziállatok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cosmetics",
      es: "Cosméticos",
      hu: "Kozmetikumok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Experiments",
      es: "Experimentos",
      hu: "Kísérletek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "What veganism is?",
      es: "¿Qué es el veganismo?",
      hu: "Mi az a véganizmus?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Doing our bests",
      es: "Haciendo nuestro mejor esfuerzo",
      hu: "Megteszünk mindent, amit tudunk"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Leather and fur",
      es: "Cuero y piel",
      hu: "Bőr és gyapjú"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Leather production",
      es: "Producción de cuero",
      hu: "Bőrtermelés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Wool",
      es: "Lana",
      hu: "Gyapjú"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Human starvation",
      es: "Inanición humana",
      hu: "Emberi éhezés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Buying or adapting?",
      es: "¿Comprar o adaptar?",
      hu: "Vásárolni vagy alkalmazni?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "About pet food",
      es: "Sobre la comida para mascotas",
      hu: "Az állateledelekről"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Feeding pets",
      es: "Alimentando a las mascotas",
      hu: "Háziállatok táplálása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Are dogs carnivores?",
      es: "¿Los perros son carnívoros?",
      hu: "A kutyák húsevők?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Vegan dogs",
      es: "Perros veganos",
      hu: "Végan kutyák"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cats - how to feed them?",
      es: "Gatos - ¿cómo alimentarlos?",
      hu: "Macska - hogyan tápláljuk?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Individual impact on a plant-based diet",
      es: "Impacto individual en una dieta basada en plantas",
      hu: "Az egyéni hatás egy növényi alapú étrendre"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Donations",
      es: "Donaciones",
      hu: "Adományok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Understanding behaviour - Comfort",
      es: "Entendiendo el comportamiento - Comodidad",
      hu: "Viselkedés megértése - Kényelem"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Understanding behaviour - New perspectives",
      es: "Entendiendo el comportamiento - Nuevas perspectivas",
      hu: "Viselkedés megértése - Új perspektívák"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Understanding behaviour - Challenge views",
      es: "Entendiendo el comportamiento - Desafiando perspectivas",
      hu: "Viselkedés megértése - Kihívások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Masculinity - a real men eat meat?",
      es: "La masculinidad - ¿los hombres reales comen carne?",
      hu: "A fériasság - az igazi férfiak esznek húst?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Short term memory of chimpanzees",
      es: "Memoria de corto plazo de los chimpancés",
      hu: "A csimpánzok rövidtávú memóriája"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Heroism of dogs",
      es: "Heroísmo de los perros",
      hu: "A kutyák hősiessége"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "How to express love - cats",
      es: "Cómo expresar amor - gatos",
      hu: "Hogyan mutassunk szeretetet - macskák"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: Ownership",
      es: "La esclavitud: Propiedad",
      hu: "A rabszolgaság: Tulajdonlás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: Selective breeding",
      es: "La esclavitud: Cría selectiva",
      hu: "A rabszolgaság: Kiválasztott szaporítás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: Family separation",
      es: "La esclavitud: Separación de familias",
      hu: "A rabszolgaság: Családi elválasztás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: Masks",
      es: "La esclavitud: Máscaras",
      hu: "A rabszolgaság: Maszkok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: Labeling",
      es: "Esclavitud: Etiquetado",
      hu: "A rabszolgaság: Címkézés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: punishment as control",
      es: "La esclavitud: Castigo como control",
      hu: "A rabszolgaság: Bűntetés mint irányítás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Slavery: Denial of suffering",
      es: "La esclavitud: Negación del sufrimiento",
      hu: "A rabszolgaság: A szenvedés megtagadása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Extinctions",
      es: "Extinciones",
      hu: "Kihalások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "What animals do we care about?",
      es: "¿Qué animales nos importan?",
      hu: "Mely állatok fontosak számunkra?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Threatened by extinction",
      es: "Amenazados por la extinción",
      hu: "Veszélyeztetett"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "How many species are in danger",
      es: "¿Cuántas especies están en peligro?",
      hu: "Hány faj van veszélyben?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Mass extinction",
      es: "Extinción en masa",
      hu: "Tömeges kihalás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Northern white rhinoceros",
      es: "Rinoceronte blanco del norte",
      hu: "Észak-egyeni fehér rinocéros"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Baiji",
      es: "Baiji",
      hu: "Baiji"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Amur leopard",
      es: "Leopardo de Amur",
      hu: "Amuri leopárd"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Mountain gorilla",
      es: "Gorila de montaña",
      hu: "Hegyies gorilla"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Sumatrian tiger",
      es: "Tigre de Sumatra",
      hu: "Sumatrai tigris"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "African forest elephant",
      es: "Elefante de la selva africana",
      hu: "Afrikai erdő elefánt"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Vaquita",
      es: "Vaquita",
      hu: "Vaquita"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Javan rhinoceros",
      es: "Rinoceronte de Java",
      hu: "Jávai rinocéros"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "What can we do?",
      es: "¿Qué podemos hacer?",
      hu: "Mit tehetünk?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
{
  title: {
    en: "🔄 Review a Lesson",
    es: "🔄 Repasar una lección",
    hu: "🔄 Egy lecke átismétlése"
  },
  type: "review",
  content: {
    en: "Review a previous lesson and earn extra XP!",
    es: "¡Repasa una lección anterior y gana XP extra!",
    hu: "Ismételj át egy korábbi leckét, és szerezz extra XP-t!"
  }
}
],

  earth: [
  {
    title: {
      en: "Triple planetary crisis",
      es: "Triple crisis planetaria",
      hu: "Hármas planetáris válság"
    },
    content: {
      en: "Environmental issues are often grouped into three main pillars.\n\nThese pillars help us understand the biggest areas where human activity affects the planet.\n\nThe three main pillars are:\n\nClimate change\nBiodiversity loss\nPollution\n\nIn the next lessons, we are going to explore each of them in more detail and understand how they are connected.",
      es: "Los problemas ambientales a menudo se agrupan en tres pilares principales\n\nEstos pilares nos ayudan a entender las áreas más importantes en las que la actividad humana afecta al planeta.\n\nLos tres pilares principales son:\n\nCambio climático\nPérdida de biodiversidad\nContaminación\n\nEn las próximas lecciones, vamos a explorar cada uno de ellos con más detalle y entender cómo están conectados.",
      hu: "A környezeti problémákat gyakran három fő pillérbe soroljuk.\n\nEzek a pillérek segítenek megérteni azokat a legfontosabb területeket, ahol az emberi tevékenység hatással van a bolygóra.\n\nA három fő pillér:\n\nÉghajlatváltozás\nBiodiverzitás csökkenése\nSzennyezés\n\nA következő leckékben mindegyiket részletesebben fogjuk megvizsgálni, és megértjük, hogyan kapcsolódnak egymáshoz."
    },
    question: {
      text: {
        en: "What are the 3 main pillars of environmental issues?",
        es: "¿Cuáles son los 3 pilares principales de los problemas ambientales?",
        hu: "Melyek a környezeti problémák 3 fő pillérei?"
      },
      options: {
        en: [
          "Climate change, deforestation, overpopulation",
          "Climate change, biodiversity loss, pollution",
          "Pollution, recycling, energy use",
          "Biodiversity loss, farming, transportation"
        ],
        es: [
          "Cambio climático, deforestación, sobrepoblación",
          "Cambio climático, pérdida de biodiversidad, contaminación",
          "Contaminación, reciclaje, uso de energía",
          "Pérdida de biodiversidad, agricultura, transporte"
        ],
        hu: [
          "Éghajlatváltozás, erdőirtás, túlnépesedés",
          "Éghajlatváltozás, biodiverzitás csökkenése, szennyezés",
          "Szennyezés, újrahasznosítás, energiafelhasználás",
          "Biodiverzitás csökkenése, mezőgazdaság, közlekedés"
        ]
      },
      correctIndex: 1
    },
    source: "https://unfccc.int/news/what-is-the-triple-planetary-crisis"
  },
  {
    title: {
      en: "Greenhouse gases",
      es: "Gases de efecto invernadero",
      hu: "Üvegházhatású gázok"
    },
    content: {
      en: "Greenhouse gases are gases in the atmosphere that trap heat and contribute to global warming. The most significant human-produced emissions come from a few major sectors of the global economy\n\nEnergy supply: 34.0\nThis is the largest source. It includes electricity and heat production from burning fossil fuels such as coal, oil, and natural gas.\n\nEnergy use in industry: 24.2%\nIncludes emissions from manufacturing, cement production, chemicals, and industrial energy use.\n\nAgriculture, Forestry, and Land Use: 18.4%\nIncludes emissions from livestock, deforestation, and soil-related processes.\n\nTransport: 16.2%\nIncludes emissions from road transport, aviation, and shipping.",
      es: "Los gases de efecto invernadero son gases en la atmósfera que atrapan el calor y contribuyen al calentamiento global. Las emisiones más significativas producidas por el ser humano provienen de unos pocos sectores principales de la economía global.\n\nSuministro de energía: 34.0%\nEs la fuente más grande. Incluye la producción de electricidad y calor a partir de la quema de combustibles fósiles como el carbón, el petróleo y el gas natural.\n\nUso de energía en la industria: 24.2%\nIncluye emisiones de la fabricación, producción de cemento, productos químicos y uso de energía industrial.\n\nAgricultura, silvicultura y uso del suelo: 18.4%\nIncluye emisiones del ganado, la deforestación y procesos relacionados con el suelo.\n\nTransporte: 16.2%\nIncluye emisiones del transporte por carretera, la aviación y el transporte marítimo.",
      hu: "Az üvegházhatású gázok a légkörben található gázok, amelyek csapdába ejtik a hőt, és hozzájárulnak a globális felmelegedéshez. Az ember által kibocsátott legjelentősebb kibocsátások a globális gazdaság néhány fő szektorából származnak.\n\nEnergiaellátás: 34.0%\nEz a legnagyobb forrás. Magában foglalja az elektromosság és hő előállítását fosszilis tüzelőanyagok, például szén, olaj és földgáz elégetésével.\n\nIpari energiafelhasználás: 24.2%\nMagában foglalja a gyártásból, cementgyártásból, vegyiparból és ipari energiafelhasználásból származó kibocsátásokat.\n\nMezőgazdaság, erdészet és földhasználat: 18.4%\nMagában foglalja az állattartásból, erdőirtásból és a talajjal kapcsolatos folyamatokból származó kibocsátásokat.\n\nKözlekedés: 16.2%\nMagában foglalja a közúti közlekedés, a légi közlekedés és a tengeri szállítás kibocsátásait."
    },
    question: {
      text: {
        en: "What percentage of global greenhouse gas emissions comes from the agricultural, forestry, and land use sector?",
        es: "¿Qué porcentaje de las emisiones globales de gases de efecto invernadero proviene del sector de la agricultura, silvicultura y uso del suelo?",
        hu: "A globális üvegházhatású gázkibocsátás hány százaléka származik a mezőgazdaság, erdészet és földhasználat szektorából?"
      },
      options: {
        en: [
          "16.2%",
          "18.4%",
          "24.2%",
          "34.0%"
        ],
        es: [
          "16.2%",
          "18.4%",
          "24.2%",
          "34.0%"
        ],
        hu: [
          "16.2%",
          "18.4%",
          "24.2%",
          "34.0%"
        ]
      },
      correctIndex: 1
    },
    source: "https://ourworldindata.org/ghg-emissions-by-sector"
  },
  {
    title: {
      en: "Biodiversity loss",
      es: "Pérdida de biodiversidad",
      hu: "Biológiai sokszínűség csökkenése"
    },
    content: {
      en: "Biodiversity refers to the variety of life on Earth, including the number of species and the size of wildlife populations. One of the most widely used indicators to measure changes in biodiversity is the Living Planet Index, which tracks trends in thousands of vertebrate populations around the world\n\nAccording to the index, there has been an average decline of around 73% in monitored wildlife populations since 1970.\n\nThis does not mean that 73% of species have gone extinct. Instead, it shows that, on average, the size of monitored animal populations has decreased significantly over time.",
      es: "La biodiversidad se refiere a la variedad de vida en la Tierra, incluyendo el número de especies y el tamaño de las poblaciones de fauna silvestre. Uno de los indicadores más utilizados para medir los cambios en la biodiversidad es el Índice Planeta Vivo, que rastrea las tendencias en miles de poblaciones de vertebrados en todo el mundo.\n\nSegún el índice, ha habido un declive promedio de alrededor del 73% en las poblaciones de vida silvestre monitoreadas desde 1970.\n\nEsto no significa que el 73% de las especies se hayan extinguido. En cambio, muestra que, en promedio, el tamaño de las poblaciones animales monitoreadas ha disminuido significativamente con el tiempo.",
      hu: "A biodiverzitás a Földön található élet sokféleségére utal, beleértve a fajok számát és a vadon élő populációk méretét. A biodiverzitás változásainak mérésére az egyik legszélesebb körben használt mutató az Élő Bolygó Index, amely világszerte több ezer gerinces populáció trendjeit követi.\n\nAz index szerint a megfigyelt vadon élő populációk átlagosan körülbelül 73%-kal csökkentek 1970 óta.\n\nEz nem azt jelenti, hogy a fajok 73%-a kihalt. Ehelyett azt mutatja, hogy átlagosan a megfigyelt állati populációk mérete jelentősen csökkent az idő múlásával."
    },
    question: {
      text: {
        en: "What is the average decline in monitored wildlife populations since 1970?",
        es: "¿Cuál es la disminución promedio en las poblaciones de vida silvestre monitoreadas desde 1970?",
        hu: "Mekkora az átlagos csökkenés a megfigyelt vadon élő populációkban 1970 óta?"
      },
      options: {
        en: [
          "~34%",
          "~50%",
          "~73%",
          "~90%"
        ],
        es: [
          "~34%",
          "~50%",
          "~73%",
          "~90%"
        ],
        hu: [
          "~34%",
          "~50%",
          "~73%",
          "~90%"
        ]
      },
      correctIndex: 2
    },
    source: "https://ourworldindata.org/grapher/global-living-planet-index"
  },
  {
    title: {
      en: "Land use",
      es: "Uso de la tierra",
      hu: "Földhasználat"
    },
    content: {
      en: "Agriculture is the largest use of land on Earth, covering about 50% of all habitable land. This includes cropland for food and feed, and pasture for livestock.\n\nBecause it takes up so much space, agriculture is the main driver of habitat loss, which is one of the biggest causes of biodiversity decline. As natural ecosystems are converted into farmland, wildlife loses living space and populations decrease.\n\nA large share of agricultural land is also used for livestock, which requires significantly more land than plant-based food production.",
      es: "La agricultura es el mayor uso de la tierra en la Tierra, cubriendo aproximadamente el 50% de toda la tierra habitable. Esto incluye tierras de cultivo para alimentos y forraje, y pastos para el ganado.\n\nDebido a que ocupa tanto espacio, la agricultura es el principal impulsor de la pérdida de hábitat, que es una de las mayores causas del declive de la biodiversidad. A medida que los ecosistemas naturales se convierten en tierras de cultivo, la fauna pierde espacio vital y las poblaciones disminuyen.\n\nUna gran parte de la tierra agrícola también se utiliza para el ganado, lo que requiere significativamente más tierra que la producción de alimentos de origen vegetal.",
      hu: "A mezőgazdaság a Föld legnagyobb földhasználati formája, a lakható területek körülbelül 50%-át lefedve. Ez magában foglalja az élelmiszer- és takarmánytermesztésre használt szántóföldeket, valamint az állattartásra használt legelőket.\n\nMivel ilyen nagy területet foglal el, a mezőgazdaság a legfőbb hajtóereje az élőhelyek elvesztésének, amely a biodiverzitás csökkenésének egyik legnagyobb oka. Ahogy a természetes ökoszisztémákat mezőgazdasági területekké alakítják, a vadon élő állatok elveszítik élőhelyüket, és a populációk csökkennek.\n\nA mezőgazdasági területek nagy része állattenyésztésre is szolgál, amely jelentősen több földet igényel, mint a növényi alapú élelmiszertermelés."},
    question: {
      text: {
        en: "What is the main way agriculture contributes to biodiversity loss?",
        es: "¿Cuál es la principal forma en que la agricultura contribuye a la pérdida de biodiversidad?",
        hu: "Mi a fő módja annak, ahogyan a mezőgazdaság hozzájárul a biodiverzitás csökkenéséhez?"
      },
      options: {
        en: [
          "By increasing global temperatures",
          "By reducing air quality in cities",
          "By converting natural ecosystems into farmland and reducing habitat",
          "By increasing ocean pollution"
        ],
        es: [
          "Aumentando las temperaturas globales",
          "Reduciendo la calidad del aire en las ciudades",
          "Convirtiendo ecosistemas naturales en tierras de cultivo y reduciendo el hábitat",
          "Aumentando la contaminación de los océanos"
        ],
        hu: [
          "A globális hőmérséklet növelésével",
          "A városi levegőminőség romlásával",
          "A természetes ökoszisztémák mezőgazdasági területté alakításával és az élőhelyek csökkentésével",
          "Az óceáni szennyezés növelésével"
        ]
      },
      correctIndex: 2
    },
    source: "https://ourworldindata.org/global-land-for-agricultur"
  },
  {
    title: {
      en: "Resource depletion",
      es: "Agotamiento de recursos",
      hu: "Erőforrás-kimerülés"
    },
    content: {
      en: "Natural resources are materials we take from the Earth to support human life and systems. These include water, minerals, fossil fuels, forests, and fertile soil.\n\nResource depletion happens when these resources are used faster than they can naturally regenerate or be replaced.\n\nA key example is freshwater: although water is renewable, many regions use groundwater faster than it can be replenished. Similar patterns occur with fossil fuels, forests, and soil quality\n\nAs global demand increases, more systems depend on intensive extraction and consumption, which puts pressure on natural reserves.",
      es: "Los recursos naturales son materiales que tomamos de la Tierra para sostener la vida humana y los sistemas. Estos incluyen agua, minerales, combustibles fósiles, bosques y suelo fértil.\n\nEl agotamiento de recursos ocurre cuando estos recursos se utilizan más rápido de lo que pueden regenerarse o ser reemplazados de forma natural.\n\nUn ejemplo clave es el agua dulce: aunque el agua es renovable, muchas regiones utilizan las aguas subterráneas más rápido de lo que pueden reponerse. Patrones similares ocurren con los combustibles fósiles, los bosques y la calidad del suelo.\n\nA medida que aumenta la demanda global, más sistemas dependen de la extracción y el consumo intensivos, lo que ejerce presión sobre las reservas naturales.",
      hu: "A természeti erőforrások olyan anyagok, amelyeket a Földről veszünk el az emberi élet és rendszerek fenntartására. Ezek közé tartozik a víz, az ásványok, a fosszilis tüzelőanyagok, az erdők és a termékeny talaj.\n\nAz erőforrás-kimerülés akkor következik be, amikor ezeket az erőforrásokat gyorsabban használjuk fel, mint ahogyan természetes módon megújulhatnak vagy pótolhatók.\n\nEgy fontos példa az édesvíz: bár a víz megújuló, sok régióban a felszín alatti vizeket gyorsabban használják fel, mint ahogyan újratöltődnek. Hasonló minták figyelhetők meg a fosszilis tüzelőanyagok, az erdők és a talaj minősége esetében is.\n\nAhogy a globális kereslet nő, egyre több rendszer támaszkodik intenzív kitermelésre és fogyasztásra, ami nyomást gyakorol a természeti készletekre."
    },
    question: {
      text: {
        en: "What is resource depletion?",
        es: "¿Qué es el agotamiento de recursos?",
        hu: "Mi az erőforrás-kimerülés?"
      },
      options: {
        en: [
          "The increase of natural resources over time",
          "The use of resources faster than they can naturally regenerate",
          "The recycling of materials back into ecosystems",
          "The natural cycle of resource renewal"
        ],
        es: [
          "El aumento de los recursos naturales con el tiempo",
          "El uso de los recursos más rápido de lo que pueden regenerarse naturalmente",
          "El reciclaje de materiales de vuelta a los ecosistemas",
          "El ciclo natural de renovación de los recursos"
        ],
        hu: [
          "A természeti erőforrások növekedése idővel",
          "Az erőforrások gyorsabb felhasználása, mint ahogyan természetesen megújulhatnak",
          "Az anyagok visszaforgatása az ökoszisztémákba",
          "Az erőforrások természetes megújulási ciklusa"
        ]
      },
      correctIndex: 1
    },
    source: "https://en.wikipedia.org/wiki/Resource_depletion"
  },
  {
    title: {
      en: "Waste",
      es: "Residuos",
      hu: "Hulladék"
    },
    content: {
      en: "Waste refers to materials that are discarded after use and not effectively reused, recycled, or recovered. It includes plastics, packaging, industrial by-products, and organic waste such as food.\n\nOne of the most significant forms of waste globally is food waste. Large amounts of food are lost or wasted at every stage of the system—from production and storage to retail and household consumption.\n\nKey facts:\n\n- Around one-third of all food produced globally is lost or wasted each yea\n- Food waste happens both in supply chains (production, transport, retail) and at the consumer level (households, restaurants)\n- At the same time, a large number of people globally still face food insecurity\n\nFood waste is also important environmentally because producing food requires land, water, and energy. When food is wasted, all these resources are wasted too.",
      es: "Los residuos se refieren a materiales que se desechan después de su uso y no se reutilizan, reciclan o recuperan de manera efectiva. Incluyen plásticos, envases, subproductos industriales y residuos orgánicos como los alimentos\n\nUna de las formas más significativas de residuos a nivel mundial es el desperdicio de alimentos. Grandes cantidades de alimentos se pierden o se desperdician en todas las etapas del sistema —desde la producción y el almacenamiento hasta el comercio minorista y el consumo en los hogares\n\nDatos clave:\n\n- Aproximadamente un tercio de todos los alimentos producidos a nivel mundial se pierden o se desperdician cada año.\n- El desperdicio de alimentos ocurre tanto en las cadenas de suministro (producción, transporte, venta minorista) como a nivel del consumidor (hogares, restaurantes).\n- Al mismo tiempo, un gran número de personas en el mundo todavía enfrenta inseguridad alimentaria.\n\nEl desperdicio de alimentos también es importante desde el punto de vista ambiental porque producir alimentos requiere tierra, agua y energía. Cuando se desperdicia comida, todos estos recursos también se desperdician.",
      hu: "A hulladék olyan anyagokra utal, amelyeket használat után kidobnak, és nem hasznosítanak újra vagy nem nyernek vissza hatékonyan. Ide tartoznak a műanyagok, csomagolóanyagok, ipari melléktermékek és a szerves hulladék, például az élelmiszer.\n\nA hulladék egyik legjelentősebb formája globálisan az élelmiszer-pazarlás. Nagy mennyiségű élelmiszer vész el vagy pazarlódik el a rendszer minden szakaszában — a termeléstől és tárolástól kezdve a kiskereskedelemig és a háztartási fogyasztásig.\n\nFő tények:\n\n- A világon előállított élelmiszer körülbelül egyharmada minden évben elveszik vagy pazarlódik.\n- Az élelmiszer-pazarlás a teljes ellátási láncban előfordul (termelés, szállítás, kiskereskedelem), valamint a fogyasztói szinten (háztartások, éttermek)\n- Ugyanakkor világszerte sok ember továbbra is élelmiszer-ellátási bizonytalansággal küzd.\n\nAz élelmiszer-pazarlás környezeti szempontból is fontos, mivel az élelmiszer előállítása földet, vizet és energiát igényel. Ha az élelmiszer kárba vész, ezek az erőforrások is elvesznek."
    },
    question: {
      text: {
        en: "How much of the food produced globally is lost or wasted each year?",
        es: "¿Cuánta comida producida globalmente se pierde o desperdicia cada año?",
        hu: "A globálisan előállított élelmiszer hány százaléka vész el vagy pazarlódik el évente?"
      },
      options: {
        en: [
          "About 10%",
          "About 20%",
          "About 30%",
          "About 50%"
        ],
        es: [
          "Aproximadamente 10%",
          "Aproximadamente 20%",
          "Aproximadamente 30%",
          "Aproximadamente 50%"
        ],
        hu: [
          "Körülbelül 10%",
          "Körülbelül 20%",
          "Körülbelül 30%",
          "Körülbelül 50%"
        ]
      },
      correctIndex: 2
    },
    source: "https://en.wikipedia.org/wiki/Food_loss_and_waste"
  },
  {
    title: {
      en: "Emissions of animals vs. plants",
      es: "Emisiones de animales vs. plantas",
      hu: "Állatok vs. növények gáz kibocsátása"
    },
    content: {
      en: "To reduce our carbon footprint, it is important to understand how different foods contribute to greenhouse gas emissions. Not all calories have the same environmental impact.\n\nIn general, plant-based foods produce significantly fewer greenhouse gas emissions than animal-based foods, but the difference varies depending on the product.\n\nKey comparisons (approximate values per 1000 kcal)\n\n- Beef (beef cattle): ~20–60 kg CO₂e per 1000 kcal\n- Beans (e.g. red beans): ~1–3 kg CO₂e per 1000 kcal\n\nThis means beef can produce 10–30+ times more emissions than legumes for the same energy content.",
      es: "Para reducir nuestra huella de carbono, es importante entender cómo los diferentes alimentos contribuyen a las emisiones de gases de efecto invernadero. No todas las calorías tienen el mismo impacto ambiental.\n\nEn general, los alimentos de origen vegetal producen significativamente menos emisiones de gases de efecto invernadero que los alimentos de origen animal, pero la diferencia varía según el producto.\n\nComparaciones clave (valores aproximados por 1000 kcal):\n\n- Carne de vacuno (ganado bovino): ~20–60 kg CO₂e por 1000 kcal\n- Judías (por ejemplo, frijoles rojos): ~1–3 kg CO₂e por 1000 kcal\n\nEsto significa que la carne de vacuno puede producir entre 10 y 30+ veces más emisiones que las legumbres para la misma cantidad de energía.",
      hu: "A karbon lábnyom csökkentéséhez fontos megérteni, hogy a különböző élelmiszerek hogyan járulnak hozzá az üvegházhatású gázkibocsátáshoz. Nem minden kalória környezeti hatása azonos.\n\nÁltalánosságban elmondható, hogy a növényi alapú élelmiszerek lényegesen kevesebb üvegházhatású gázt bocsátanak ki, mint az állati eredetű élelmiszerek, de a különbség termékenként változik.\n\nFő összehasonlítások (kb. értékek 1000 kcal-ra):\n\n- Marhahús (szarvasmarha): ~20–60 kg CO₂e / 1000 kcal\n- Babok (pl. vörösbab): ~1–3 kg CO₂e / 1000 kcal\n\nEz azt jelenti, hogy a marhahús 10–30-szor vagy még többször több kibocsátást okozhat ugyanannyi energia előállításához képest, mint a hüvelyesek"
    },
    question: {
      text: {
        en: "In general, which type of food has a lower carbon footprint?",
        es: "En general, ¿qué tipo de alimento tiene una menor huella de carbono?",
        hu: "Általánosságban melyik élelmiszer típusnak alacsonyabb a karbon lábnyoma?"
      },
      options: {
        en: [
          "Animal-based foods",
          "Plant-based foods",
          "Both have the same impact",
          "It depends only on packaging"
        ],
        es: [
          "Alimentos de origen animal",
          "Alimentos de origen vegetal",
          "Ambos tienen el mismo impacto",
          "Depende solo del embalaje"
        ],
        hu: [
          "Állati eredetű élelmiszerek",
          "Növényi alapú élelmiszerek",
          "Mindkettőnek ugyanakkora a hatása",
          "Ez csak a csomagolástól függ"
        ]
      },
      correctIndex: 1
    },
    source: "https://ourworldindata.org/environmental-impacts-of-food"
  },
  {
    title: {
      en: "Which transport emits less?",
      es: "¿Qué transporte emite menos?",
      hu: "Melyik közlekedési mód környezetbarátabb?"
    },
    content: {
      en: "Different transport modes produce very different amounts of greenhouse gas emissions depending on energy efficiency and how many passengers are carried.\n\nHere are average global estimates of emissions per passenger-kilometer:\n\n✈️ Airplane (short-haul flights):\n~200–300 g CO₂e / passenger-k\n\n 🚗 Private car (typical occupancy ~1–2 people):\n~120–180 g CO₂e / passenger-km\n\n 🚌 Bus / coach:\n~60–100 g CO₂e / passenger-km\n\n 🚆 Train (rail):\n~10–50 g CO₂e / passenger-km\n\n 🚴 Bicycle / walking:\n~0 g CO₂e / passenger-km\n\nKey insight:\n\n- Flying is the most carbon-intensive common transport method.\n- Cars are often inefficient when used with few passengers.\n- Trains are one of the cleanest motorized transport options.",
      es: "Los diferentes modos de transporte producen cantidades muy diferentes de emisiones de gases de efecto invernadero, dependiendo de la eficiencia energética y del número de pasajeros transportados.\n\nAquí hay estimaciones globales promedio de emisiones por pasajero-kilómetro\n\n✈️ Avión (vuelos de corta distancia):\n~200–300 g CO₂e / pasajero-k\n\n🚗 Coche privado (ocupación típica ~1–2 personas):\n~120–180 g CO₂ e/ pasajero-km\n\n🚌 Autobús / autocar:\n~60–100 g CO₂e/ pasajero-km\n\n🚆 Tren (ferrocarril):\n~10–50 g CO₂e / pasajero-km\n\n🚴 Bicicleta / caminar:\n~0 g CO₂e / pasajero-km\n\nIdea clave:\n\nVolar es el método de transporte común más intensivo en carbono.\nLos coches suelen ser ineficientes cuando se usan con pocos pasajeros\nLos trenes son una de las opciones de transporte motorizado más limpias.",
      hu: "A különböző közlekedési módok nagyon eltérő mennyiségű üvegházhatású gázt bocsátanak ki, az energiahatékonyságtól és az utasok számától függően.\n\nItt vannak az átlagos globális becslések kibocsátásra utaskilométerenként\n\n✈️ Repülőgép (rövid távú járatok):\n~200–300 g CO₂ / utask\n\n🚗 Személyautó (tipikus kihasználtság ~1–2 fő):\n~120–180 g CO₂ / utask\n\n🚌 Busz / távolsági autóbusz\n~60–100 g CO₂ / utaskm\n\n🚆 Vonat (vasút)\n~10–50 g CO₂ / utask\n\n🚴 Kerékpár / gyaloglás\n~0 g CO₂ / utaskm\n\nFő tanulság\n\nA repülés a legszénintenzívebb gyakori közlekedési mód.\nAz autók gyakran nem hatékonyak, ha kevés utas használja őket.\nA vonatok az egyik legtisztább motoros közlekedési lehetőségek."
    },
    question: {
      text: {
        en: "Which transport mode generally emits the least CO₂ per passenger kilometer (excluding walking and cycling)?",
        es: "¿Qué medio de transporte generalmente emite menos CO₂e por pasajero-kilómetro (excluyendo caminar y andar en bicicleta)?",
        hu: "Általában melyik közlekedési mód bocsátja ki a legkevesebb CO₂-t utaskilométerenként (a gyaloglás és kerékpározás kivételével)?"
      },
      options: {
        en: [
          "Airplane",
          "Private car",
          "Bus",
          "Train"
        ],
        es: [
          "Avión",
          "Coche privado",
          "Autobús",
          "Tren"
        ],
        hu: [
          "Repülőgép",
          "Személyautó",
          "Busz",
          "Vonat"
        ]
      },
      correctIndex: 3
    },
    source: "https://ourworldindata.org/co2-emissions-from-transport"
  },
  {
    title: {
      en: "CO₂ emissions from eggs",
      es: "Emisiones de CO₂ de los huevos",
      hu: "CO₂ kibocsátás a tojásiparban"
    },
    content: {
      en: "To understand the environmental impact of foods, we compare their greenhouse gas emissions per kilogram of product (kg CO₂e / kg food). These values come from lifecycle assessments that include production, feed, energy use, and processing\n\nHere is a strictly sourced comparison:\n\n🥚 Eggs:\n5.3 kg CO₂e per kf of eggs\n🌱 Tofu:\n0.8 kg CO₂e per kg of tofu\n\nBoth are lower-impact than most meat products, but plant-based proteins like tofu are still generally more efficient.",
      es: "Para entender el impacto ambiental de los alimentos, comparamos sus emisiones de gases de efecto invernadero por kilogramo de producto (kg CO₂e / kg de alimento). Estos valores provienen de evaluaciones del ciclo de vida que incluyen producción, alimentación, uso de energía y procesamiento.\n\nAquí hay una comparación basada en datos:\n\n🥚 Huevos:\n5.3 kg CO₂e por kg de huevos\n🌱 Tofu:\n0.8 kg CO₂e por kg de tofu\n\nAmbos tienen un impacto menor que la mayoría de los productos cárnicos, pero las proteínas de origen vegetal como el tofu suelen ser más eficientes.",
      hu: "Az élelmiszerek környezeti hatásának megértéséhez összehasonlítjuk az üvegházhatású gázkibocsátásukat kilogrammonként (kg CO₂e / kg élelmiszer). Ezek az értékek életciklus-elemzésekből származnak, amelyek figyelembe veszik a termelést, takarmányozást, energiafelhasználást és feldolgozást.\n\nItt egy szigorúan forrásolt összehasonlítás:\n\n🥚 Tojás:\n5,3 kg CO₂ / kg tojás\n🌱 Tofu:\n0,8 kg CO₂ / kg tofu\n\nMindkettő alacsonyabb hatású, mint a legtöbb húskészítmény, de a növényi alapú fehérjék, mint a tofu, általában hatékonyabbak."
    },
    question: {
      text: {
        en: "Which food generally has lower greenhouse gas emissions per kilogram?",
        es: "¿Qué alimento generalmente tiene menores emisiones de gases de efecto invernadero por kilogramo?",
        hu: "Általában melyik élelmiszernek alacsonyabb az üvegházhatású gázkibocsátása kilogrammonként?"
      },
      options: {
        en: [
          "Eggs",
          "Tofu",
          "They are the same",
          "It depends only on packaging"
        ],
        es: [
          "Huevos",
          "Tofu",
          "Son iguales",
          "Depende solo del embalaje"
        ],
        hu: [
          "Tojás",
          "Tofu",
          "Ugyanaz",
          "Csak a csomagolástól függ"
        ]
      },
      correctIndex: 1
    },
    source:"https://www.co2everything.com/co2e-of/eggs"
  },
  {
    title: {
      en: "CO₂ emissions from cheese",
      es: "Emisiones de CO₂ del queso",
      hu: "CO₂ kibocsátás a sajtiparban"
    },
    content: {
      en: "Different foods have different environmental impacts depending on how they are produced. These impacts are measured in kg CO₂e per kg of food, based on lifecycle assessments (including production, feed, land use, and processing).\n\n🧀 Cheese:\n2.79 kg CO₂e per kg of chees\n\nIt is more than 50 times higher than mixed nuts, which are 0.05 kg CO₂e per kg\n\nCheese has a relatively high carbon footprint compared to many plant-based foods because it is produced from milk, which comes from cows. Dairy production involves\n\nMethane emissions from cattl\nFeed production and land us\nEnergy used in processing and refrigeration",
      es: "Los diferentes alimentos tienen distintos impactos ambientales dependiendo de cómo se producen. Estos impactos se miden en kg CO₂e por kg de alimento, basados en evaluaciones del ciclo de vida (incluyendo producción, alimentación, uso del suelo y procesamiento).\n\n🧀 Queso:\n2.79 kg CO₂e por kg de queso\n\nEs más de 50 veces mayor que los frutos secos mixtos, que son 0.05 kg CO₂e por kg.\n\nEl queso tiene una huella de carbono relativamente alta en comparación con muchos alimentos de origen vegetal porque se produce a partir de leche, que proviene de vacas. La producción láctea implica:\n\nEmisiones de metano del ganado\nProducción de alimento y uso del suelo\nEnergía utilizada en el procesamiento y la refrigeración",
      hu: "A különböző élelmiszereknek eltérő környezeti hatásuk van attól függően, hogyan állítják elő őket. Ezeket a hatásokat kg CO₂e / kg élelmiszerben mérik, életciklus-elemzések alapján (beleértve a termelést, takarmányozást, földhasználatot és feldolgozást)\n\n🧀 Sajt:\n2,79 kg CO₂e / kg sajt\n\nEz több mint 50-szer magasabb, mint a vegyes diófélék esetében, amelyek 0,05 kg CO₂e / kg értéket jelentenek.\n\nA sajt viszonylag magas karbon lábnyommal rendelkezik sok növényi alapú élelmiszerhez képest, mert tejből készül, amely tehenektől származik. A tejtermelés magában foglalja:\n\nMetánkibocsátás a szarvasmarháktól\nTakarmánytermelés és földhasznála\nEnergia a feldolgozásban és hűtésben"
    },
    question: {
      text: {
        en: "What is the approximate carbon footprint of cheese per kilogram?",
        es: "¿Cuál es la huella de carbono aproximada del queso por kilogramo?",
        hu: "Mennyi a sajt hozzávetőleges karbon lábnyoma kilogrammonként?"
      },
      options: {
        en: [
          "0.2 kg CO₂e",
          "0.95 kg CO₂e",
          "2.79 kg CO₂e",
          "15.5 kg CO₂e"
        ],
        es: [
          "0.2 kg CO₂e",
          "0.95 kg CO₂e",
          "2.79 kg CO₂e",
          "15.5 kg CO₂e"
        ],
        hu: [
          "0.2 kg CO₂e",
          "0.95 kg CO₂e",
          "2.79 kg CO₂e",
          "15.5 kg CO₂e"
        ]
      },
      correctIndex: 2
    },
    source: "https://www.co2everything.com/co2e-of/eggs"
  },
  {
    title: {
      en: "What is climate change?",
      es: "¿Qué es el cambio climático?",
      hu: "Mi az az éghajlat-változás?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Causes",
      es: "Causas",
      hu: "Okok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "From 1970",
      es: "Desde 1970",
      hu: "1970-től"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Margin we have",
      es: "Margen que tenemos",
      hu: "Az idő amink van"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Animal agriculture",
      es: "Agricultura animal",
      hu: "Állattenyésztés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows: methane",
      es: "Vacas: metano",
      hu: "Tehén: metán"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cows in natural environment",
      es: "Vacas en el entorno natural",
      hu: "Tehén a természetes környezetben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deforestation",
      es: "Deforestación",
      hu: "Erdőirtás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cropland for animals",
      es: "Tierras de cultivo para animales",
      hu: "Termőföld az állatoknak"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Beef production",
      es: "Producción de carne de res",
      hu: "Marhahús termelés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Returning land to nature",
      es: "Retornar la tierra a la naturaleza",
      hu: "A föld visszaadása a természetnek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Soy production",
      es: "Producción de soja",
      hu: "Szójatermelés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Land use of milk production",
      es: "Uso de la tierra para la producción de leche",
      hu: "Földhasználat a tejtermelésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Regenerative farming",
      es: "Cultivo regenerativo",
      hu: "Regeneratív mezőgazdaság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Limits",
      es: "Límites",
      hu: "Korlátok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Land use offf eggs",
      es: "Uso de la tierra para la producción de huevos",
      hu: "Földhasználat a tojástermelésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Importance of biodiversity",
      es: "Importancia de la biodiversidad",
      hu: "A biodiverzitás jelentősége"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Global wildlife decline",
      es: "Declive global de la fauna",
      hu: "A globális állomány csökkenése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Human dominance",
      es: "Dominio humano",
      hu: "Az emberi uralkodás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Biodiversity decline",
      es: "Declive de la biodiversidad",
      hu: "A biodiverzitás csökkenése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Renewable energy",
      es: "Energía renovable",
      hu: "Újrahasznos energia"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Water requirements",
      es: "Requisitos de agua",
      hu: "Vízszükséglet"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Water use of milk",
      es: "Uso de la tierra para la producción de leche",
      hu: "Földhasználat a tejtermelésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Water use of cheese",
      es: "Uso de la tierra para la producción de queso",
      hu: "Földhasználat a sajttermelésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Water use of eggs",
      es: "Uso de la tierra para la producción de huevos",
      hu: "Földhasználat a tojástermelésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Waste - where does it go?",
      es: "Residuos - ¿a dónde van?",
      hu: "Felesleg - hova megy?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Food waste",
      es: "Desperdicio de comida",
      hu: "Élelmiszer hulladék"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Reducing food waste",
      es: "Reducir el desperdicio de comida",
      hu: "Élelmiszer hulladék csökkentése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Math of food waste",
      es: "El cálculo del desperdicio de comida",
      hu: "Az élelmiszer hulladék matematikája"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Consume less",
      es: "Consumir menos",
      hu: "Kevesebbet fogyasztani"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Natural carnivore - herbivore ratio",
      es: "Proporción de carnívoros - herbívoros en la naturaleza",
      hu: "Természetes húsevő - növényevő arány"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Humans and farm animals ratio",
      es: "Proporción de humanos - animales de granja",
      hu: "Emberek és a haszonállatok aránya"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Role of a carnivore",
      es: "El papel de un carnívoro",
      hu: "Húsevők szerepe"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Wolves",
      es: "Los lobos",
      hu: "A farkasok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Plastic use",
      es: "Uso de plástico",
      hu: "Műanyag felhasználás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deadly plastic",
      es: "Plástico mortal",
      hu: "Halálos műanyag"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Ghost nets",
      es: "Las redes fantasma",
      hu: "A fantomhálók"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Impact of ghost nets",
      es: "El impacto de las redes fantasma",
      hu: "A fantomhálók hatása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Industrial fishing",
      es: "Pesca industrial",
      hu: "Ipari halászat"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Bottom trawling",
      es: "Arrastre de fondo",
      hu: "Fenékvonóhálós halászat"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "50 years: CO₂",
      es: "50 años: CO₂",
      hu: "50 év: CO₂"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "50 years: Energy",
      es: "50 años: Energía",
      hu: "50 év: Energia"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "50 years: temperature rising",
      es: "50 años: el calentamiento global",
      hu: "50 év: a hőmérséklet-emelkedés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "50 years: temperature rising",
      es: "50 años: el calentamiento global",
      hu: "50 év: a hőmérséklet-emelkedés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "50 years: biodiversity",
      es: "50 años: biodiversidad",
      hu: "50 év: biológiai sokféleség"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Transport emission",
      es: "Emisión del transporte",
      hu: "Közlekedési kibocsátás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Compares",
      es: "Comparaciones",
      hu: "Összehasonlítások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calorie converter: beef",
      es: "Convertidor de calorías: carne de res",
      hu: "Kalóriakonverter: marhahús"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calorie converter: chicken",
      es: "Convertidor de calorías: pollo",
      hu: "Kalóriakonverter: csirke"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calorie converter: pig",
      es: "Convertidor de calorías: cerdo",
      hu: "Kalóriakonverter: disznó"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calorie converter: eggs",
      es: "Convertidor de calorías: huevos",
      hu: "Kalóriakonverter: tojás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calorie converter: cheese",
      es: "Convertidor de calorías: queso",
      hu: "Kalóriakonverter: sajt"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calorie converter: cheese",
      es: "Convertidor de calorías: queso",
      hu: "Kalóriakonverter: sajt"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Water contamination",
      es: "Contaminación del agua",
      hu: "Vízszennyezés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Contaminations",
      es: "Contaminaciones",
      hu: "Szennyezések"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cloth industry",
      es: "Industria textil",
      hu: "Ruhaipar"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Leather",
      es: "Cuero",
      hu: "Bőr"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Antibiotics",
      es: "Antibióticos",
      hu: "Antibiotikumok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Resources- machines",
      es: "Recursos - máquinas",
      hu: "Erőforrások - gépek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Resources - fuel",
      es: "Recursos - combustible",
      hu: "Erőforrások - üzemanyag"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Oceans as carbon sinks",
      es: "Oceanos como sumideros de carbono",
      hu: "Szénelnyelő óceánok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Forests and oceans",
      es: "Bosques y oceanos",
      hu: "Erdők és óceánok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Protecting forests",
      es: "Proteger bosques",
      hu: "Védni az erdőket"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Protecting ocean's carbon sink ability",
      es: "Proteger la capacidad del océano para absorber carbono",
      hu: "Védeni az óceánok szénelnyelő képességét"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Manipulated capitalism",
      es: "Capitalismo manipulado",
      hu: "Manipulált kapitalizmuus"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "To plant-based living",
      es: "Adoptar una vida basada en plantas",
      hu: "Növényi étrendre váltás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fighting climate change",
      es: "Luchar contra el cambio climático",
      hu: "Harc a klímaváltozás ellen"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Sustainability of plant-based foods",
      es: "Sostenibilidad de los alimentos de origen vegetal",
      hu: "A növényi étrend fenntarthatósága"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Daily food choices",
      es: "Elecciones alimentarias diarias",
      hu: "Napi ételválasztások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Heating homes",
      es: "Calefacción del hogar",
      hu: "Otthonok fűtése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Reduce waste",
      es: "Reducir resudios",
      hu: "Felesleg csökkentése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Returning lands",
      es: "Devolver tierras",
      hu: "Terület visszaadása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Get into action!",
      es: "¡Pasa a la acción!",
      hu: "Lépj akcióba!"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
{
  title: {
    en: "🔄 Review a Lesson",
    es: "🔄 Repasar una lección",
    hu: "🔄 Egy lecke átismétlése"
  },
  type: "review",
  content: {
    en: "Review a previous lesson and earn extra XP!",
    es: "¡Repasa una lección anterior y gana XP extra!",
    hu: "Ismételj át egy korábbi leckét, és szerezz extra XP-t!"
  }
}
],

 health: [
  {
    title: {
      en: "History of categorising",
      es: "Historia de la categorización",
      hu: "A kategorizálás története"
    },
    content: {
      en: "The way humans have been classified has changed over time.\n\nIn early scientific thinking, even Carl Linnaeus explored different ways of grouping animals based on diet and anatomy. In his early work, he experimented with categories like “fructivores” (fruit-eaters), and in some notes, humans were placed in this group based on teeth and similarities to other primates. \n\nAs science developed, classification became more evidence-based. Modern biology classifies humans as omnivores, meaning we are capable of eating and digesting both plant and animal foods\n\nAt the same time, this classification describes what we can eat, not necessarily what we should eat.",
      es: "La forma en que se ha clasificado a los humanos ha cambiado con el tiempo\n\nEn el pensamiento científico temprano, incluso Carl Linnaeus exploró diferentes formas de agrupar a los animales basándose en la dieta y la anatomía. En su trabajo inicial, experimentó con categorías como “frugívoros” (comedores de fruta), y en algunas notas, los humanos fueron incluidos en este grupo basándose en los dientes y similitudes con otros primates.\n\nA medida que la ciencia se desarrolló, la clasificación se volvió más basada en la evidencia. La biología moderna clasifica a los humanos como omnívoros, lo que significa que somos capaces de comer y digerir tanto alimentos de origen vegetal como animal\n\nAl mismo tiempo, esta clasificación describe lo que podemos comer, no necesariamente lo que debemos comer.",
      hu: "Az emberek osztályozásának módja idővel változott.\n\nA korai tudományos gondolkodásban még Carl Linnaeus is különböző módszereket vizsgált az állatok étrend és anatómia alapján történő csoportosítására. Korai munkáiban olyan kategóriákkal is kísérletezett, mint a „frugivorok” (gyümölcsevők), és néhány jegyzetében az embereket is ebbe a csoportba sorolta a fogazat és a főemlősökhöz való hasonlóság alapján.\n\nAhogy a tudomány fejlődött, az osztályozás egyre inkább bizonyítékokon alapult. A modern biológia az embert mindenevőként (omnivor) osztályozza, ami azt jelenti, hogy képesek vagyunk növényi és állati eredetű ételeket is fogyasztani és megemészteni\n\nUgyanakkor ez az osztályozás azt írja le, amit meg tudunk enni, nem feltétlenül azt, amit meg kell ennünk."
    },
    question: {
      text: {
        en: "How are humans classified in modern biology?",
        es: "¿Cómo se clasifican los humanos en la biología moderna?",
        hu: "Hogyan sorolja be az embert a modern biológia?"
      },
      options: {
        en: [
          "Omnivores",
          "Carnivores",
          "Herbivores",
          "Frugivores"
        ],
        es: [
          "Omnívoros",
          "Carnívoros",
          "Herbívoros",
          "Frugívoros"
        ],
        hu: [
          "Mindenevők",
          "Húsevők",
          "Növényevők",
          "Gyümölcsevők"
        ]
      },
      correctIndex: 0
    },
    source: "https://fruitfest.co.uk/linnaeus/"
  },
  {
    title: {
      en: "As an omnivore",
      es: "Como omnívoro",
      hu: "Mindenevőként"
    },
    content: {
      en: "Being an omnivore means having the biological ability to eat and digest both plant and animal foods. It describes what a species can eat—not what it must eat\n\nHumans have flexible digestion and can obtain nutrients from a variety of sources. This adaptability has helped humans survive in different environments throughout history.\n\nHowever, being omnivorous does not mean we need to eat all types of food to survive. Nutritional needs can be met in different ways, including diets that rely primarily or entirely\n\nSo, omnivory is about capability and flexibility, not necessity or obligation.",
      es: "Ser omnívoro significa tener la capacidad biológica de comer y digerir tanto alimentos de origen vegetal como animal. Describe lo que una especie puede comer, no lo que debe comer.\n\nLos humanos tienen una digestión flexible y pueden obtener nutrientes de una variedad de fuentes. Esta adaptabilidad ha ayudado a los humanos a sobrevivir en diferentes entornos a lo largo de la historia\n\nSin embargo, ser omnívoro no significa que necesitemos comer todo tipo de alimentos para sobrevivir. Las necesidades nutricionales pueden satisfacerse de diferentes maneras, incluyendo dietas que dependen principalmente o completamente de una sola fuente\n\nPor lo tanto, el omnívorismo trata de capacidad y flexibilidad, no de necesidad u obligación.",
      hu: "Mindenevőnek lenni azt jelenti, hogy biológiailag képesek vagyunk növényi és állati eredetű ételeket is fogyasztani és megemészteni. Ez azt írja le, hogy egy faj mit képes enni, nem azt, hogy mit kell ennie.\n\nAz emberek rugalmas emésztéssel rendelkeznek, és különböző forrásokból tudnak tápanyagokat nyerni. Ez az alkalmazkodóképesség segítette az embert a történelem során különböző környezetekben való túlélésben.\n\nUgyanakkor a mindenevő lét nem jelenti azt, hogy minden típusú ételt meg kell ennünk a túléléshez. A tápanyagszükségletek különböző módokon is kielégíthetők, beleértve azokat az étrendeket is, amelyek nagyrészt vagy teljesen egy forrásra épülnek.\n\nTehát a mindenevőség a képességről és a rugalmasságról szól, nem pedig szükségszerűségről vagy kötelezettségről."
    },
    question: {
      text: {
        en: "Does being an omnivore mean humans need to eat both plants and animals to survive?",
        es: "¿Ser omnívoro significa que los humanos necesitan comer tanto plantas como animales para sobrevivir?",
        hu: "A mindenevő lét azt jelenti, hogy az embereknek növényeket és állatokat is kell enniük a túléléshez?"
      },
      options: {
        en: [
          "Yes, both are always required",
          "No, it means humans are capable of eating both, but not required to",
          "Yes, otherwise humans cannot get enough nutrients",
          "No, it means humans should only eat plants"
        ],
        es: [
          "Sí, ambos son siempre necesarios",
          "No, significa que los humanos son capaces de comer ambos, pero no están obligados a hacerlo",
          "Sí, de lo contrario los humanos no pueden obtener suficientes nutrientes",
          "No, significa que los humanos solo deben comer plantas"
        ],
        hu: [
          "Igen, mindkettő mindig szükséges",
          "Nem, azt jelenti, hogy az emberek képesek mindkettőt enni, de nem kötelező",
          "Igen, különben nem jutnak elég tápanyaghoz",
          "Nem, azt jelenti, hogy az embereknek csak növényeket kell enniük"
        ]
      },
      correctIndex: 1
    },
    source: "https://v7.viva.org.uk/faqs/humans-are-omnivores-so-were-supposed-to-eat-meat/"
  },
  {
    title: {
      en: "Eating raw",
      es: "Comer crudo",
      hu: "Nyers étkezés"
    },
    content: {
      en: "Looking at how we naturally consume foods can give insight into our behavior and adaptations.\n\nMost plant foods—like fruits, vegetables, nuts, and seeds—can be eaten raw and are often appealing without preparation.\n\nIn contrast, most animal products are not typically consumed raw in everyday life. Meat, for example, is usually cooked to improve taste, texture, and safety by reducing the risk of pathogens. While some animal products (like certain fish or dishes) can be eaten raw, this is usually done with preparation, processing, or cultural knowledge.\n\nThis suggests an important difference: many plant foods are naturally ready to eat, while most animal products require tools, processing, or cooking.",
      es: "Observar cómo consumimos los alimentos de forma natural puede dar una idea de nuestro comportamiento y adaptaciones\n\nLa mayoría de los alimentos vegetales —como frutas, verduras, frutos secos y semillas— pueden comerse crudos y a menudo resultan apetecibles sin preparación.\n\nEn cambio, la mayoría de los productos de origen animal no se consumen típicamente crudos en la vida cotidiana. La carne, por ejemplo, normalmente se cocina para mejorar el sabor, la textura y la seguridad, reduciendo el riesgo de patógenos. Aunque algunos productos de origen animal (como ciertos pescados o platos) pueden consumirse crudos, esto suele hacerse con preparación, procesamiento o conocimiento cultural.\n\nEsto sugiere una diferencia importante: muchos alimentos vegetales están naturalmente listos para comer, mientras que la mayoría de los productos de origen animal requieren herramientas, procesamiento o cocción.",
      hu: "Az, ahogyan természetesen fogyasztjuk az ételeket, betekintést adhat viselkedésünkbe és alkalmazkodásainkba.\n\nA legtöbb növényi élelmiszer — például gyümölcsök, zöldségek, diófélék és magvak — nyersen is fogyasztható, és gyakran előkészítés nélkül is vonzó\n\nEzzel szemben a legtöbb állati eredetű terméket nem jellemzően nyersen fogyasztjuk a mindennapi életben. A húst például általában megfőzik vagy megsütik az íz, az állag és a biztonság javítása érdekében, a kórokozók kockázatának csökkentésével. Bár egyes állati eredetű termékek (például bizonyos halak vagy ételek) nyersen is fogyaszthatók, ez általában előkészítéssel, feldolgozással vagy kulturális tudással történik.\n\nEz egy fontos különbségre mutat rá: sok növényi étel természetesen fogyasztásra kész, míg a legtöbb állati eredetű termék eszközöket, feldolgozást vagy főzést igényel."
    },
    question: {
      text: {
        en: "Which statement best describes how humans typically consume animal products?",
        es: "¿Qué afirmación describe mejor cómo consumen los humanos los productos de origen animal?",
        hu: "Melyik állítás írja le legjobban, hogyan fogyasztják az emberek az állati eredetű termékeket?"
      },
      options: {
        en: [
          "Most are naturally eaten raw without preparation",
          "Most are consumed raw in everyday life",
          "Most require cooking or processing before consumption",
          "Humans cannot eat animal products at all"
        ],
        es: [
          "La mayoría se comen naturalmente crudos sin preparación",
          "La mayoría se consumen crudos en la vida cotidiana",
          "La mayoría requieren cocción o procesamiento antes de su consumo",
          "Los humanos no pueden comer productos de origen animal en absoluto"
        ],
        hu: [
          "A legtöbb természetesen nyersen fogyasztható előkészítés nélkül",
          "A legtöbb nyersen kerül fogyasztásra a mindennapokban",
          "A legtöbb főzést vagy feldolgozást igényel a fogyasztás előtt",
          "Az emberek egyáltalán nem tudnak állati eredetű termékeket fogyasztani"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Variety of plant-based food",
      es: "Variedad de comidas plant-based",
      hu: "A növényi étrend sokszínűsége"
    },
    content: {
      en: "Plant-based foods offer a wide range of nutrients essential for human health. Fruits, vegetables, legumes, whole grains, nuts, and seeds are often nutrient-dense, meaning they provide many vitamins, minerals, fiber, and beneficial compounds relative to their calories.\n\nCompared to many animal products, plant foods generally contain\n\n- More fiber (important for digestion and gut health)\n- More vitamins and antioxidants\n- Lower saturated fat\n\nAnimal products can be rich in protein and certain nutrients (like vitamin B12), but they typically contain no fiber and can be higher in saturated fats.\n\nBecause of this, diets rich in plant-based foods are consistently associated with better health outcomes, including lower risk of heart disease, type 2 diabetes, and some cancers.",
      es: "Los alimentos de origen vegetal ofrecen una amplia gama de nutrientes esenciales para la salud humana. Frutas, verduras, legumbres, cereales integrales, frutos secos y semillas suelen ser densos en nutrientes, lo que significa que aportan muchas vitaminas, minerales, fibra y compuestos beneficiosos en relación con sus calorías.\n\nEn comparación con muchos productos de origen animal, los alimentos vegetales generalmente contienen:\n\n- Más fibra (importante para la digestión y la salud intestinal)\n- Más vitaminas y antioxidantes\n- Menos grasas saturada\n\nLos productos de origen animal pueden ser ricos en proteínas y ciertos nutrientes (como la vitamina B12), pero normalmente no contienen fibra y pueden tener más grasas saturadas.\n\nPor esta razón, las dietas ricas en alimentos de origen vegetal se asocian consistentemente con mejores resultados de salud, incluyendo un menor riesgo de enfermedades cardíacas, diabetes tipo 2 y algunos tipos de cáncer.",
      hu: "A növényi alapú élelmiszerek széles körű, az emberi egészséghez szükséges tápanyagokat biztosítanak. A gyümölcsök, zöldségek, hüvelyesek, teljes kiőrlésű gabonák, diófélék és magvak általában tápanyagdúsak, ami azt jelenti, hogy sok vitamint, ásványi anyagot, rostot és hasznos vegyületet tartalmaznak kalóriájukhoz képest\n\nSok állati eredetű termékkel összehasonlítva a növényi élelmiszerek általában\n\n- Több rostot, \n -több vitamint és antioxidánst, \n- kevesebb telített zsírt tartalmaznak.\n\nAz állati eredetű termékek gazdagok lehetnek fehérjében és bizonyos tápanyagokban (például B12-vitaminban), de általában nincs bennük rost, és több telített zsírt tartalmazhatnak.\n\nEzért a növényi alapú élelmiszerekben gazdag étrendeket következetesen jobb egészségi kimenetelekkel hozzák összefüggésbe, beleértve a szívbetegségek, a 2-es típusú cukorbetegség és egyes daganatos betegségek alacsonyabb kockázatát."
    },
    question: {
      text: {
        en: "Which of the following is a key advantage of plant-based foods compared to most animal products?",
        es: "¿Cuál de las siguientes es una ventaja clave de los alimentos de origen vegetal en comparación con la mayoría de los productos animales?",
        hu: "Melyik az alábbiak közül a növényi alapú élelmiszerek egyik fő előnye a legtöbb állati termékkel szemben?"
      },
      options: {
        en: [
          "They contain more cholesterol",
          "They provide fiber and a high density of essential nutrients",
          "They must always be cooked before eating",
          "They only provide energy but no vitamins"
        ],
        es: [
          "Contienen más colesterol",
          "Proporcionan fibra y una alta densidad de nutrientes esenciales",
          "Siempre deben cocinarse antes de comerlos",
          "Solo proporcionan energía pero no vitaminas"
        ],
        hu: [
          "Több koleszterint tartalmaznak",
          "Rostot és magas tápanyagsűrűséget biztosítanak",
          "Mindig meg kell őket főzni fogyasztás előtt",
          "Csak energiát adnak, de nem tartalmaznak vitaminokat"
        ]
      },
      correctIndex: 1
    },
    source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11412377/"
  },
  {
    title: {
      en: "Instinct or habit?",
      es: "¿Instinto o hábito?",
      hu: "Ösztön vagy szokás?"
    },
    content: {
      en: "A popular and classic reflection used in animal ethics discussions explores what our natural instincts might look like if we observe children before social conditioning fully shapes their habits.\n\nImagine placing a small child in a room with an apple and a rabbit.\n\nMost likely, the child would eat the apple and play with the rabbit\n\nAnd not the other way around.\n\nThis simple example is not about proving anything strict, but about reflection: it suggests that our natural instincts tend toward curiosity, connection, and playfulness toward animals, while eating is directed toward food\n\nThe idea is to question how much of our adult behavior comes from instinct — and how much comes from habit, culture, and learning.",
      es: "Una reflexión popular y clásica utilizada en discusiones de ética animal explora cómo podrían ser nuestros instintos naturales si observamos a los niños antes de que el condicionamiento social moldee completamente sus hábitos.\n\nImagina colocar a un niño pequeño en una habitación con una manzana y con un conejo.\n\nLo más probable es que el niño vaya a comer la manzana y jugar con el conejo.\n\nY no al revés.\n\nEste ejemplo simple no pretende demostrar nada de forma estricta, sino invitar a la reflexión: sugiere que nuestros instintos naturales tienden hacia la curiosidad, la conexión y el juego con los animales, mientras que la alimentación se dirige hacia la comida\n\nLa idea es cuestionar cuánto de nuestro comportamiento adulto proviene del instinto y cuánto proviene del hábito, la cultura y el aprendizaje.",
      hu: "Egy népszerű és klasszikus gondolatkísérlet, amelyet állatetikai vitákban is használnak, azt vizsgálja, hogy milyenek lehetnek természetes ösztöneink, ha a gyerekeket még a társadalmi kondicionálás teljes hatása előtt figyeljük meg.\n\nKépzeljük el, hogy egy gyermeket egy szobába helyezünk egy almával és egy nyúllal.\n\nNagy valószínűséggel a gyermek megeszi az almát és játszik a nyúllal.\n\nÉs nem fordítva.\n\nEz az egyszerű példa nem arra szolgál, hogy bármit szigorúan bizonyítson, hanem inkább elmélkedésre hív: azt sugallja, hogy természetes ösztöneink inkább a kíváncsiság, a kapcsolódás és a játék felé irányulnak az állatokkal, míg az evés az ételek felé.\n\nEz alapján megkérdőjelezhetjük ösztöneinket - melyek származnak kultúrából és tanulásból."
    },
    question: {
      text: {
        en: "What can we reflect about our instincts by observing ourselves?",
        es: "¿Qué podemos reflexionar sobre nuestros instintos al observarnos?",
        hu: "Mit tükrözhetünk az ösztöneinkről önmagunk megfigyelésével?"
      },
      options: {
        en: [
          "Instinct always determines all human behavior",
          "Humans are naturally afraid of animals and avoid them",
          "Our behavior may be shaped by both instinct and learned habits",
          "Children are taught to prefer apples over animals"
        ],
        es: [
          "El instinto siempre determina todo el comportamiento humano",
          "Los humanos tienen miedo natural a los animales y los evitan",
          "Nuestro comportamiento puede estar influenciado tanto por el instinto como por hábitos aprendidos",
          "A los niños se les enseña a preferir manzanas en lugar de animales"
        ],
        hu: [
          "Az ösztön mindig teljes mértékben meghatározza az emberi viselkedést",
          "Az emberek természetüknél fogva félnek az állatoktól és kerülik őket",
          "Viselkedésünket részben ösztönök, részben tanult szokások alakítják",
          "A gyerekeket arra tanítják, hogy az almát részesítsék előnyben az állatokkal szemben"
        ]
      },
      correctIndex: 2
    }
  },
  {
    title: {
      en: "Appetizing",
      es: "Estimulante del apetito",
      hu: "Étvágygerjesztő"
    },
    content: {
      en: "Have you ever felt appetite when seeing a living animal or smelling it? For most people, the answer is no\n\nUntil animals are processed, cooked, and presented in a familiar cultural way, they are not seen as food. In survival situations, people might eat them as a last resort, but even then, many would experience discomfort or resistance rather than natural desire.\n\nThis raises an interesting idea: our sense of what is “appetizing” is not purely instinctive — it is largely shaped and taught by culture, environment, and learning over time.",
      es: "¿Alguna vez has sentido apetito al ver un animal vivo o al olerlo? Para la mayoría de las personas, la respuesta es no.\n\nHasta que los animales son procesados, cocinados y presentados de una manera culturalmente familiar, no suelen percibirse como comida. En situaciones de supervivencia, las personas pueden comerlos como último recurso, pero incluso entonces, muchas experimentarían incomodidad o resistencia en lugar de un deseo natural.\n\nEsto plantea una idea interesante: nuestra percepción de lo que es “apetecible” no es puramente instintiva, sino que está en gran parte moldeada por la cultura, el entorno y el aprendizaje a lo largo del tiempo.",
      hu: "Éreztél már étvágyat egy élő állat látványától vagy szagától? A legtöbb ember számára a válasz nem.\n\nAmíg az állatokat nem dolgozzák fel, nem készítik el és nem tálalják kulturálisan megszokott módon, általában nem tekintjük őket ételnek. Túlélési helyzetekben az emberek megehetik őket végső megoldásként, de még ilyenkor is sokan inkább kellemetlenséget vagy ellenállást éreznek, nem természetes vágyat.\n\nEz egy érdekes gondolatot vet fel: az, hogy mit tartunk „étvágygerjesztőnek”, nem pusztán ösztönös — nagyrészt a kultúra, a környezet és a tanulás alakítja az idő során."
    },
    question: {
      text: {
        en: "What does this example mainly suggest?",
        es: "¿Qué sugiere principalmente este ejemplo?",
        hu: "Mit sugall elsősorban ez a példa?"
      },
      options: {
        en: [
          "Humans naturally feel appetite for animals in any form",
          "Appetite is only based on survival instinct",
          "Living animals are always seen as food",
          "Our perception of food is strongly shaped by culture and learning"
        ],
        es: [
          "Los humanos sienten naturalmente apetito por los animales en cualquier forma",
          "El apetito se basa únicamente en el instinto de supervivencia",
          "Los animales vivos siempre se perciben como comida",
          "Nuestra percepción de la comida está fuertemente influenciada por la cultura y el aprendizaje"
        ],
        hu: [
          "Az emberek természetesen minden formában étvágyat éreznek az állatok iránt",
          "Az étvágy kizárólag a túlélési ösztönön alapul",
          "Az élő állatokat mindig ételként látjuk",
          "Az ételről alkotott képünket erősen befolyásolja a kultúra és a tanulás"
        ]
      },
      correctIndex: 3
    }
  },
  {
    title: {
      en: "Canines",
      es: "Caninos",
      hu: "Szemfogak"
    },
    content: {
      en: "Do canines prove that we are meant to eat meat? When we compare human teeth to true carnivores, we see important differences.\n\nCarnivores (like lions) have large, sharp canines for tearing flesh. Humans, however, have small canines (not specialized for tearing)\n\nIt is also interesting to note that some primates, like gorillas, have much larger canines than humans, yet they do not rely on meat in their diet. This shows that large canines alone are not a reliable indicator of meat consumption.",
      es: "¿Los caninos humanos demuestran que estamos hechos para comer carne? Cuando comparamos los dientes humanos con los de verdaderos carnívoros, vemos diferencias importantes.\n\nLos carnívoros (como los leones) tienen caninos grandes y afilados para desgarrar carne. Los humanos, en cambio, tienen caninos pequeños (no especializados para desgarrar).\n\nTambién es interesante notar que algunos primates, como los gorilas, tienen caninos mucho más grandes que los humanos, y aun así no dependen de la carne en su dieta. Esto muestra que tener caninos grandes por sí solo no es un indicador fiable del consumo de carne.",
      hu: "Az emberi szemfogak bizonyítják, hogy húsfogyasztásra vagyunk tervezve? Ha összehasonlítjuk az emberi fogakat a valódi ragadozókéval, fontos különbségeket látunk.\n\nA ragadozók (például az oroszlánok) nagy, éles szemfogakkal rendelkeznek a hús tépésére. Az embereknek ezzel szemben kicsi szemfogaik vannak (nem a hús tépésére specializálódtak).\n\nÉrdekes megjegyezni azt is, hogy egyes főemlősök, például a gorillák, sokkal nagyobb szemfogakkal rendelkeznek, mint az emberek, mégsem alapozzák étrendjüket húsra. Ez azt mutatja, hogy a nagy szemfogak önmagukban nem megbízható mutatói a húsfogyasztásnak."
    },
    question: {
      text: {
        en: "What do human canines prove about our diet?",
        es: "¿Qué demuestran los caninos humanos sobre nuestra dieta?",
        hu: "Mit bizonyítanak az emberi szemfogak az étrendünkről?"
      },
      options: {
        en: [
          "Nothing — canines alone do not determine diet",
          "That humans are strict carnivores",
          "That humans are designed only for meat eating",
          "That humans should not eat plants"
        ],
        es: [
          "Nada — los caninos por sí solos no determinan la dieta",
          "Que los humanos son carnívoros estrictos",
          "Que los humanos están diseñados solo para comer carne",
          "Que los humanos no deberían comer plantas"
        ],
        hu: [
          "Semmit — a szemfogak önmagukban nem határozzák meg az étrendet",
          "Azt, hogy az emberek szigorúan húsevők",
          "Azt, hogy az emberek kizárólag húsfogyasztásra lettek tervezve",
          "Azt, hogy az embereknek nem szabad növényeket enniük"
        ]
      },
      correctIndex: 0
    },
    source: "https://nutritionstudies.org/are-humans-herbivores-or-omnivores/"
  },
  {
    title: {
      en: "Our teeths",
      es: "Nuestros dientes",
      hu: "A fogaink"
    },
    content: {
      en: "Human teeth are designed for handling a wide variety of foods through different functions.\n\nWe have\n\n🦷 Incisors (front teeth):\nUsed for biting and cutting food into smaller pieces, especially fruits and vegetables\n\n🦷 Premolars:\nHelp break food into smaller chunks and begin the grinding process\n\n🦷 Molars (back teeth):\nFlat, strong teeth used for grinding and crushing food thoroughly before swallowing\n\nThis combination allows humans to process a wide range of plant-based foods such as fruits, vegetables, nuts, and grains efficiently.\n\nOverall, human teeth support a general-purpose eating pattern rather than a highly specialized one.",
      es: "Los dientes humanos están diseñados para manejar una amplia variedad de alimentos mediante diferentes funciones\n\nTenemos:\n\n🦷 Incisivos (dientes frontales):\nSe utilizan para morder y cortar los alimentos en trozos más pequeños, especialmente frutas y verduras\n\n🦷 Premolares:\nAyudan a romper los alimentos en partes más pequeñas y comienzan el proceso de trituración\n\n🦷 Molares (dientes traseros):\nDientes planos y fuertes que se utilizan para triturar y aplastar completamente los alimentos antes de tragarlos\n\nEsta combinación permite a los humanos procesar eficientemente una amplia gama de alimentos de origen vegetal como frutas, verduras, frutos secos y cereales.\n\nEn general, los dientes humanos apoyan un patrón de alimentación de uso general en lugar de uno altamente especializado.",
      hu: "Az emberi fogak úgy vannak kialakítva, hogy különböző funkciók segítségével sokféle ételt tudjanak feldolgozni\n\n🦷 Metszőfogak (elülső fogak)\nAz étel megharapására és kisebb darabokra vágására szolgálnak, különösen gyümölcsök és zöldségek esetében\n\n🦷 Kisőrlő fogak (premolárisok):\nSegítenek az ételt kisebb darabokra törni, és megkezdik az őrlési folyamatot\n\n🦷 Nagyőrlő fogak (hátulsó fogak)\nLapos, erős fogak, amelyek az étel alapos őrlésére és összezúzására szolgálnak lenyelés előtt\n\nEz a kombináció lehetővé teszi az emberek számára, hogy hatékonyan feldolgozzanak sokféle növényi eredetű ételt, például gyümölcsöket, zöldségeket, magvakat és gabonákat\n\nÖsszességében az emberi fogak egy általános, nem pedig erősen specializált táplálkozási mintát támogatnak."
    },
    question: {
      text: {
        en: "What best describes the function of human teeth?",
        es: "¿Qué describe mejor la función de los dientes humanos?",
        hu: "Mi írja le legjobban az emberi fogak funkcióját?"
      },
      options: {
        en: [
          "Only cutting food",
          "Only grinding food",
          "A combination of cutting, breaking, and grinding food",
          "No clear function"
        ],
        es: [
          "Solo cortar alimentos",
          "Solo triturar alimentos",
          "Una combinación de cortar, romper y triturar alimentos",
          "Ninguna función clara"
        ],
        hu: [
          "Csak az étel vágása",
          "Csak az étel őrlése",
          "Az étel vágásának, törésének és őrlésének kombinációja",
          "Nincs egyértelmű funkció"
        ]
      },
      correctIndex: 2
    },
    source: "https://nutritionstudies.org/are-humans-herbivores-or-omnivores/"
  },
  {
    title: {
      en: "Compared to carnivores",
      es: "En comparación con los carnívoros",
      hu: "A húsevőkhöz képest"
    },
    content: {
      en: "When comparing different animals, we can look at how their digestive systems are structured, since this reflects the types of food they are adapted to process.\n\n🦁 Carnivores:\nOften have larger stomach capacity, allowing them to eat large amounts of food at once after hunting. Their digestive systems are generally shorter, meaning they digest food more quickly and rely on periodic, large meals.\n\n🐄 Herbivores:\nTypically have smaller stomach capacity, so they eat more often. They also have much longer small intestines, which helps slowly digest plant material efficiently over time.\n\nOur small intestines are longer than carnivores’ small intestines, and our stomach capacities are smaller than carnivores’ stomach capacities. Our closest primate relatives consume overwhelmingly herbivorous diets",
      es: "Al comparar diferentes animales, podemos observar cómo están estructurados sus sistemas digestivos, ya que esto refleja los tipos de alimentos que están adaptados a procesar.\n\n🦁 Carnívoros:\nA menudo tienen una mayor capacidad estomacal, lo que les permite comer grandes cantidades de alimento de una sola vez después de cazar. Sus sistemas digestivos suelen ser más cortos, lo que significa que digieren los alimentos más rápidamente y dependen de comidas grandes y ocasionales.\n\n🐄 Herbívoros:\nPor lo general, tienen una menor capacidad estomacal, por lo que comen con más frecuencia. También tienen intestinos delgados mucho más largos, lo que ayuda a digerir lentamente el material vegetal de manera eficiente con el tiempo\n\nNuestros intestinos delgados son más largos que los de los carnívoros, y nuestra capacidad estomacal es menor que la de los carnívoros. Nuestros parientes primates más cercanos consumen dietas predominantemente herbívoras.",
      hu: "Különböző állatok összehasonlításakor megvizsgálhatjuk az emésztőrendszerük felépítését, mivel ez tükrözi, milyen típusú táplálék feldolgozásához alkalmazkodtak.\n\n🦁 Ragadozók:\nGyakran nagyobb gyomorkapacitással rendelkeznek, ami lehetővé teszi számukra, hogy vadászat után egyszerre nagy mennyiségű ételt fogyasszanak. Emésztőrendszerük általában rövidebb, ami azt jelenti, hogy gyorsabban emésztik meg az ételt, és inkább ritkább, de nagyobb étkezésekre támaszkodnak\n\n🐄 Növényevők:\nÁltalában kisebb gyomorkapacitással rendelkeznek, ezért gyakrabban esznek. Emellett sokkal hosszabb vékonybéllel rendelkeznek, ami segíti a növényi táplálék lassú és hatékony emésztését.\n\nA mi vékonybelünk hosszabb, a gyomorkapacitásunk kisebb, mint a ragadozóké. Legközelebbi főemlős rokonaink túlnyomórészt növényevő étrendet követnek."
    },
    question: {
      text: {
        en: "What is a key difference between carnivores and herbivores?",
        es: "¿Cuál es una diferencia clave entre carnívoros y herbívoros?",
        hu: "Mi a fő különbség a ragadozók és a növényevők között?"
      },
      options: {
        en: [
          "Carnivores eat constantly throughout the day",
          "Herbivores have shorter intestines than carnivores",
          "Carnivores do not need to digest food",
          "Herbivores have longer intestines for slow digestion"
        ],
        es: [
          "Los carnívoros comen constantemente durante todo el día",
          "Los herbívoros tienen intestinos más cortos que los carnívoros",
          "Los carnívoros no necesitan digerir los alimentos",
          "Los herbívoros tienen intestinos más largos para una digestión lenta"
        ],
        hu: [
          "A ragadozók egész nap folyamatosan esznek",
          "A növényevőknek rövidebb beleik vannak, mint a ragadozóknak",
          "A ragadozóknak nem kell megemészteniük az ételt",
          "A növényevőknek hosszabb beleik vannak a lassú emésztéshez"
        ]
      },
      correctIndex: 3
    },
    source: "https://nutritionstudies.org/are-humans-herbivores-or-omnivores/"
  },
  {
    title: {
      en: "Our jaws",
      es: "Nuestras mandíbulas",
      hu: "Az állkapcsunk"
    },
    content: {
      en: "Jaw structure and movement give strong clues about how they process food.\n\n🦁 Carnivores:\nTheir jaw movement is mainly vertical (up and down). This supports strong biting and holding, but very limited side-to-side motion. Their jaws are built for stability rather than grinding. They also tend to have larger mouth openings, allowing them to bite and consume large pieces of food.\n\n🐄 Herbivores:\nTheir jaws allow both forward–backward and side-to-side movement, which is essential for grinding fibrous plant material efficiently. This horizontal motion is a key adaptation for breaking down tough plant foods. They typically have smaller mouth openings, as their feeding relies more on continuous chewing rather than large bites\n\nThis difference in jaw mechanics reflects how different animals are adapted to process different types of food.",
      es: "La estructura y el movimiento de la mandíbula dan pistas importantes sobre cómo se procesan los alimentos\n\n🦁 Carnívoros:\nEl movimiento de su mandíbula es principalmente vertical (arriba y abajo). Esto permite morder con fuerza y sujetar, pero con muy poco movimiento lateral. Sus mandíbulas están diseñadas para la estabilidad más que para triturar. También suelen tener aperturas bucales más grandes, lo que les permite morder y consumir grandes trozos de alimento.\n\n🐄 Herbívoros\nSus mandíbulas permiten movimientos hacia adelante–atrás y de lado a lado, lo cual es esencial para triturar eficientemente el material vegetal fibroso. Este movimiento horizontal es una adaptación clave para descomponer alimentos vegetales duros. Normalmente tienen aperturas bucales más pequeñas, ya que su alimentación se basa más en la masticación continua que en grandes mordidas.\n\nEsta diferencia en la mecánica de la mandíbula refleja cómo distintos animales están adaptados para procesar diferentes tipos de alimentos.",
      hu: "Az állkapocs felépítése és mozgása fontos információt ad arról, hogyan dolgozzák fel az állatok a táplálékot.\n\n🦁 Ragadozók:\nAz állkapcsuk mozgása főként függőleges (fel és le). Ez erős harapást és tartást tesz lehetővé, de nagyon korlátozott az oldalirányú mozgás. Az állkapcsuk inkább stabilitásra, mint őrlésre van kialakítva. Emellett általában nagyobb szájnyílással rendelkeznek, ami lehetővé teszi nagy darabok megharapását és elfogyasztását.\n\n🐄 Növényevők:\nAz állkapcsuk előre–hátra és oldalirányú mozgást is lehetővé tesz, ami elengedhetetlen a rostos növényi táplálék hatékony őrléséhez. Ez a vízszintes mozgás kulcsfontosságú alkalmazkodás a kemény növényi ételek lebontásához. Általában kisebb szájnyílással rendelkeznek, mivel táplálkozásuk inkább folyamatos rágáson alapul, nem nagy harapásokon\n\nEz a különbség az állkapocs működésében tükrözi, hogy a különböző állatok hogyan alkalmazkodtak különböző típusú táplálék feldolgozásához."
    },
    question: {
      text: {
        en: "What is a key difference in jaw movement between carnivores and herbivores?",
        es: "¿Cuál es una diferencia clave en el movimiento de la mandíbula entre carnívoros y herbívoros?",
        hu: "Mi a fő különbség a ragadozók és a növényevők állkapocs mozgása között?"
      },
      options: {
        en: [
          "Carnivores have more side-to-side jaw movement",
          "Herbivores only have vertical jaw movement",
          "Carnivores mainly use vertical movement, while herbivores use more horizontal grinding movement",
          "Both have identical jaw movement patterns"
        ],
        es: [
          "Los carnívoros tienen más movimiento lateral de la mandíbula",
          "Los herbívoros solo tienen movimiento vertical de la mandíbula",
          "Los carnívoros usan principalmente movimiento vertical, mientras que los herbívoros usan más movimiento horizontal de trituración",
          "Ambos tienen patrones de movimiento mandibular idénticos"
        ],
        hu: [
          "A ragadozóknak nagyobb az oldalirányú mozgásuk",
          "A növényevők csak függőleges mozgást használnak",
          "A ragadozók főként függőleges mozgást használnak, míg a növényevők inkább vízszintes őrlő mozgást",
          "Mindkettő azonos állkapocsmozgási mintát használ"
        ]
      },
      correctIndex: 2
    },
    source: "https://nutritionstudies.org/are-humans-herbivores-or-omnivores/"
  },
  {
    title: {
      en: "Carbohydrate as our enemy",
      es: "Los carbohidratos como enemigos",
      hu: "A szénhidrátok mint ellenségek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Carbohydrate is our friend",
      es: "Los carbohidratos son nuestros amigos",
      hu: "A szénhidrátok a barátaink"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Human's brain fuel",
      es: "El combustible del cerebro humano",
      hu: "Az emberi agy üzemanyaga"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fake studies",
      es: "Investigaciones falsas",
      hu: "Hamis tanulmányok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Carbohydrate sources",
      es: "Fuentes de carbohidratos",
      hu: "Szénhidrátforrások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Unhealthy carbohydrates",
      es: "Carbohidratos no saludables",
      hu: "Egészségtelen szénhidrátok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Where do nutrients come from?",
      es: "¿De dónde vienen los nutrientes?",
      hu: "Honnan származnak a tápanyagok?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Iron",
      es: "Hierro",
      hu: "Vas"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Iron absorption",
      es: "Absorción de hierro",
      hu: "Vas felszívódása"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Iron and vitamin C",
      es: "Hierro y vitamina C",
      hu: "Vas és C-vitamin"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Calcium without dairy",
      es: "Calcio sin lácteos",
      hu: "Kalcium tejtermékek nélkül"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Milk's calcium",
      es: "El calcio de la leche",
      hu: "A tej kálciumtartalma"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Soy and oestrogen",
      es: "Soja y estrógeno",
      hu: "Szója és ösztrogén"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Omega 3",
      es: "Omega 3",
      hu: "Omega 3"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Where does protein come from?",
      es: "¿De dónde proviene la proteína?",
      hu: "Honnan származik a fehérje?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Amino acids",
      es: "Aminoácidos",
      hu: "Aminosavak"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Essential amino acids",
      es: "Aminoácidos esenciales",
      hu: "Esszenciális aminosavak"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Complex protein",
      es: "Proteína compleja",
      hu: "Komplex fehérje"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "How to get enough protein",
      es: "Cómo obtener suficiente proteína",
      hu: "Hogyan juthatsz elég fehérjéhez?"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Dying in protein deficiency",
      es: "Morir por falta de proteínas",
      hu: "Fehérjehiányban meghalni"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Fats",
      es: "Grasas",
      hu: "Zsírok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "LDL and HDL",
      es: "LDL y HDL",
      hu: "LDL és HDL"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Too much saturated fat",
      es: "Demasiada grasa saturada",
      hu: "Túl sok telített zsír"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Animal products and LDL",
      es: "Productos de animales y LDL",
      hu: "Állati termékek és LDL"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Healthy digestion: fiber",
      es: "Digestión saludable: fibra",
      hu: "Egészséges emésztés: rost"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Digesting food",
      es: "Digiriendo los alimentos",
      hu: "Az ételek emésztése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Acids",
      es: "Ácidos",
      hu: "Savak"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Role of fiber",
      es: "El papel de la fibra",
      hu: "A rost szerepe"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Foods rich in fiber",
      es: "Alimentos ricos en fibra",
      hu: "Rostban gazdag ételek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Lack of fiber",
      es: "Falta de fibra",
      hu: "A rost hiánya"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cholesterol: the cause",
      es: "El colesterol: la causa",
      hu: "A koleszterin: az ok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cholesterol: consequences",
      es: "El colesterol: consecuencias",
      hu: "A koleszterin: következmények"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "High blood pressure: start",
      es: "Presión arterial alta: inicio",
      hu: "Magas vérnyomás: kezdet"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "High blood pressure: cause",
      es: "Presión arterial alta: causa",
      hu: "Magas vérnyomás: ok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "High blood pressure: veins",
      es: "Presión arterial alta: venas",
      hu: "Magas vérnyomás: erek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Clogged arteries",
      es: "Arterias bloqueadas",
      hu: "Elzáródott artériák"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Happy heart",
      es: "Corazón feliz",
      hu: "Boldog szív"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Heart disease: prevention",
      es: "Prevención de enfermedades cardíacas",
      hu: "Szívbetegség: megelőzés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Heart overload",
      es: "Sobrecarga del corazón",
      hu: "A szív túlterhelése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Oxygen supply",
      es: "Suministro de oxígeno",
      hu: "Oxigénellátás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Circulation",
      es: "Circulación",
      hu: "Vérkeringés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Solution of a plant-based diet",
      es: "Solución basada en una dieta vegetal",
      hu: "Növényi alapú étrend mint megoldás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Studies",
      es: "Estudios",
      hu: "Tanulmányok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Carnicogen products",
      es: "Productos carcinógenos",
      hu: "Rákkeltő termékek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Ignorance",
      es: "Ignorancia",
      hu: "Tudatlanság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Cigarette ads",
      es: "Anuncios de cigarrillos",
      hu: "Cigaretta reklámok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Processed food",
      es: "Comida procesada",
      hu: "Feldolgozott élelmiszerek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Best choices",
      es: "Mejores opciones",
      hu: "Legjobb választások"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Unhealthy plant-based products",
      es: "Productos vegetales poco saludables",
      hu: "Egészségtelen növényi alapú termékek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Milk: fats",
      es: "Leche: grasas",
      hu: "Tej: zsírok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Milk: calories",
      es: "Leche: calórias",
      hu: "Tej: kalóriák"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Milk: calcium",
      es: "Leche: calcio",
      hu: "Tej: kálcium"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Milk: pus",
      es: "Leche: pus",
      hu: "Tej: genny"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Milk: hormones",
      es: "Leche: hormonas",
      hu: "Tej: hormonok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "B12",
      es: "B12",
      hu: "B12"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "B12 source",
      es: "Fuente de B12",
      hu: "B12 forrás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Supplementing animals",
      es: "Suplementar animales",
      hu: "Táplálékkiegészítő állatoknak"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Supplements",
      es: "Suplementos",
      hu: "Étrend-kiegészítők"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Vegans vs Carnivores on B12",
      es: "Veganos vs carnívoros sobre la vitamina B12",
      hu: "Vegánok és húsevők a B12-vitamin kapcsán"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Antibiotics in animal agriculture",
      es: "Antibióticos en la ganadería",
      hu: "Antibiotikumok az állattenyésztésben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Effectiveness loss",
      es: "Pérdida de eficacia",
      hu: "Hatékonyság elvesztése"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "In our food",
      es: "En nuestra comida",
      hu: "Az ételeinkben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Results of a healthy visceral system",
      es: "Resultados de un sistema visceral saludable",
      hu: "Egy egészséges zsigeri rendszer eredményei"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "A better rest",
      es: "Un descanso mejor",
      hu: "Egy jobb pihenés"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Masculinity",
      es: "Masculinidad",
      hu: "Férfiasság"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Strength",
      es: "Fuerza",
      hu: "Erő"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deaths",
      es: "Muertes",
      hu: "Halálozás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deaths: the leader",
      es: "Muertes: el líder",
      hu: "Halálozás: a vezető"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deaths: taking the second place",
      es: "Muertes: ocupando el segundo lugar",
      hu: "Halálozások: a második helyen"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deaths: on the podium",
      es: "Muertes: en el podio",
      hu: "Halálozások: a dobogón"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Deaths: lack of nutrients",
      es: "Muertes: falta de nutrientes",
      hu: "Halálozások: tápanyaghiány"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Death statistics in the last 50 years",
      es: "Estadísticas de muertes en los últimos 50 años",
      hu: "Halálozási statisztikák az elmúlt 50 évben"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Blue zones",
      es: "Blue zones",
      hu: "Blue zones"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Secrets of blue zones: Whole food",
      es: "Secretos de las Blue Zones: alimentos integrales",
      hu: "A Blue Zones titkai: teljes értékű élelmiszerek"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Secrets of blue zones: Exercise",
      es: "Secretos de las Blue Zones: Ejercicio",
      hu: "A Blue Zones titkai: testmozgás"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Secrets of blue zones: social connections",
      es: "Secretos de las Blue Zones: conexiones sociales",
      hu: "A Blue Zones titkai: társadalmi kapcsolatok"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Secrets of blue zones: Stress",
      es: "Secretos de las Blue Zones: Estrés",
      hu: "A Blue Zones titkai: Stressz"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Secrets of blue zones: diet",
      es: "Secretos de las Blue Zones: dieta",
      hu: "A Blue Zones titkai: étrend"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
  {
    title: {
      en: "Get moving!",
      es: "¡A moverse!",
      hu: "Gyerünk!"
    },
    content: {
      en: "",
      es: "",
      hu: ""
    },
    question: {
      text: {
        en: "",
        es: "",
        hu: ""
      },
      options: {
        en: [
          "",
          "",
          "",
          ""
        ],
        es: [
          "",
          "",
          "",
          ""
        ],
        hu: [
          "",
          "",
          "",
          ""
        ]
      },
      correctIndex: 0-3
    }
  },
{
  title: {
    en: "🔄 Review a Lesson",
    es: "🔄 Repasar una lección",
    hu: "🔄 Egy lecke átismétlése"
  },
  type: "review",
  content: {
    en: "Review a previous lesson and earn extra XP!",
    es: "¡Repasa una lección anterior y gana XP extra!",
    hu: "Ismételj át egy korábbi leckét, és szerezz extra XP-t!"
  }
}
]
};
/*
// ---------------------------
// TIPS
// ---------------------------
const characterTips = {

  pet: {
    en: [
      "Be kind to every kind — and don’t forget to be kind to yourself too!",
      "Love grows when shared 💚",
      "Every small act of care shapes who you are.",
      "Happiness multiplies when you give it away.",
      "Patience is love in action.",
      "A gentle word can change someone’s entire day.",
      "Sharing love is never wasted — it always returns.",
      "Small acts of care create big ripples in the world.",
      "Compassion starts with noticing someone’s needs.",
      "Your warmth makes others feel safe and valued.",
      "Encouragement can blossom where criticism would wither.",
      "Every smile you share brightens someone’s path.",
      "Kindness costs nothing but creates priceless moments.",
      "You are wiser when you seek understanding before judgment.",
      "Helping others grow is a reflection of your own strength.",
      "Love yourself as fiercely as you love others.",
      "Quiet support is often more powerful than loud words.",
      "Your patience today teaches others how to be gentle tomorrow.",
      "Sharing your knowledge softly guides hearts, not forces them.",
      "Happiness blooms when you care without expecting in return.",
      "Every gentle touch leaves a mark of love.",
      "Encouragement turns mistakes into lessons, not failures.",
      "You are strongest when you act with empathy.",
      "A kind action can be louder than a thousand words.",
      "Your warmth has the power to heal invisible wounds.",
      "Sharing joy multiplies it for everyone involved. 🌟",
      "Teach by example — hearts learn faster than ears.",
      "Every act of love is a building block for a better world.",

    `Replacing meat with <span class="ingredient-link" onclick="openIngredient('tofu')">Tofu</span> saves massive water resources.`,
    `<span class="ingredient-link" onclick="openIngredient('seitan')">Seitan</span> uses only a fraction of the land needed for beef.`,
    `A meal with <span class="ingredient-link" onclick="openIngredient('lentils')">Lentils</span> has a much lower carbon footprint.`,
    `<span class="ingredient-link" onclick="openIngredient('beans')">Beans</span> nourish the soil instead of depleting it.`,
    `<span class="ingredient-link" onclick="openIngredient('tempeh')">Tempeh</span> promotes gut biodiversity.`,
    `<span class="ingredient-link" onclick="openIngredient('chickpeas')">Chickpeas</span> naturally enrich farmland.`,
    `<span class="ingredient-link" onclick="openIngredient('peaProtein')">Pea Protein</span> has a lower CO₂ impact than whey.`,
    `<span class="ingredient-link" onclick="openIngredient('soyMilk')">Soy Milk</span> requires far less land and water than dairy.`,
    `<span class="ingredient-link" onclick="openIngredient('texturizedSoy')">Texturized Soy</span> avoids the emissions of chicken farming.`,
    `Swap some meat for <span class="ingredient-link" onclick="openIngredient('broccoli')">Broccoli</span> — nutrient-rich and eco-friendly! 🌱`
  
      ],
    es: [
      "Sé amable con todos los seres — y no olvides ser amable contigo también.",
      "El amor crece cuando se comparte 💚",
      "Cada pequeño acto de cuidado moldea quién eres.",
      "La felicidad se multiplica cuando la compartes.",
      "La paciencia es amor en acción.",
      "Una palabra amable puede cambiar todo el día de alguien.",
      "Compartir amor nunca se desperdicia — siempre vuelve.",
      "Los pequeños actos de cuidado crean grandes ondas en el mundo.",
      "La compasión empieza al notar las necesidades de los demás.",
      "Tu calidez hace que otros se sientan seguros y valorados.",
      "El ánimo florece donde la crítica se marchita.",
      "Cada sonrisa que compartes ilumina el camino de alguien.",
      "La bondad no cuesta nada y crea momentos invaluables.",
      "Eres más sabio cuando buscas comprender antes de juzgar.",
      "Ayudar a otros a crecer refleja tu propia fuerza.",
      "Ámate con la misma intensidad con la que amas a otros.",
      "El apoyo silencioso suele ser más poderoso que las palabras fuertes.",
      "Tu paciencia hoy enseña gentileza mañana.",
      "Compartir conocimiento suavemente guía corazones.",
      "La felicidad florece cuando das sin esperar nada.",
      "Cada gesto suave deja una huella de amor.",
      "El ánimo convierte errores en lecciones.",
      "Eres más fuerte cuando actúas con empatía.",
      "Un acto amable puede hablar más que mil palabras.",
      "Tu calidez puede sanar heridas invisibles.",
      "Compartir alegría la multiplica para todos. 🌟",
      "Enseña con el ejemplo — el corazón aprende más rápido.",
      "Cada acto de amor construye un mundo mejor.",

      `Sustituir la carne por <span class="ingredient-link" onclick="openIngredient('tofu')">tofu</span> ahorra enormes recursos de agua.`,
      `<span class="ingredient-link" onclick="openIngredient('seitan')">Seitan</span> usa solo una fracción de la tierra necesaria para la carne.`,
      `Una comida con <span class="ingredient-link" onclick="openIngredient('lentils')">lentejas</span> tiene una huella de carbono mucho menor.`,
      `<span class="ingredient-link" onclick="openIngredient('beans')">Las legumbres</span> nutren el suelo.`,
      `<span class="ingredient-link" onclick="openIngredient('tempeh')">Tempeh</span> favorece la biodiversidad intestinal.`,
      `<span class="ingredient-link" onclick="openIngredient('chickpeas')">Garbanzos</span> enriquecen naturalmente la tierra.`,
      `<span class="ingredient-link" onclick="openIngredient('peaProtein')">Proteína de guisante</span> tiene menor impacto de CO₂.`,
      `<span class="ingredient-link" onclick="openIngredient('soyMilk')">Leche de soja</span> requiere menos tierra y agua.`,
      `<span class="ingredient-link" onclick="openIngredient('texturizedSoy')">Soja texturizada</span> evita emisiones de la ganadería.`,
      `Cambia algo de carne por <span class="ingredient-link" onclick="openIngredient('broccoli')">brócoli</span> 🌱`
    ],

    hu: [
      "Légy kedves minden lényhez — és magadhoz se felejts el az lenni.",
      "A szeretet akkor nő, ha megosztják 💚",
      "Minden apró gondoskodás formálja azt, aki vagy.",
      "A boldogság megsokszorozódik, ha továbbadod.",
      "A türelem a szeretet cselekvésben.",
      "Egy kedves szó megváltoztathatja valaki egész napját.",
      "A megosztott szeretet sosem vész el — mindig visszatér.",
      "Az apró törődés nagy hullámokat kelt.",
      "Az együttérzés a figyelemmel kezdődik.",
      "A melegség biztonságot és értéket ad másoknak.",
      "A bátorítás ott virágzik, ahol a kritika elsorvad.",
      "Minden mosoly fényt ad valaki útjára.",
      "A kedvesség semmibe sem kerül, mégis felbecsülhetetlen.",
      "Bölcsebb vagy, ha megértést keresel ítélkezés előtt.",
      "Mások segítése a saját erőd tükre.",
      "Szeresd magad olyan erősen, ahogy másokat.",
      "A csendes támogatás gyakran a legerősebb.",
      "A mai türelmed holnap gyengédséget tanít.",
      "A tudás finom megosztása szíveket vezet.",
      "A boldogság akkor virágzik, ha nem vársz viszonzást.",
      "Minden gyengéd érintés nyomot hagy.",
      "A bátorítás tanulsággá alakítja a hibákat.",
      "Az empátia az igazi erő.",
      "Egy kedves tett hangosabb ezer szónál.",
      "A melegség láthatatlan sebeket gyógyít.",
      "Az öröm megosztva megsokszorozódik. 🌟",
      "Mutass példát — a szív gyorsabban tanul.",
      "Minden szeretetteljes tett egy jobb világ alapja.",

      `A hús helyettesítése <span class="ingredient-link" onclick="openIngredient('tofu')">tofúval</span> rengeteg vizet takarít meg.`,
      `<span class="ingredient-link" onclick="openIngredient('seitan')">A szejtán</span> töredéknyi földet igényel.`,
      `A <span class="ingredient-link" onclick="openIngredient('lentils')">lencsével</span> készült étel kisebb karbonlábnyomú.`,
      `<span class="ingredient-link" onclick="openIngredient('beans')">A bab</span> táplálja a talajt.`,
      `<span class="ingredient-link" onclick="openIngredient('tempeh')">A tempeh</span> támogatja a bélflórát.`,
      `<span class="ingredient-link" onclick="openIngredient('chickpeas')">A csicseriborsó</span> gazdagítja a földet.`,
      `<span class="ingredient-link" onclick="openIngredient('peaProtein')">Borsófehérje</span> kevesebb CO₂-t termel.`,
      `<span class="ingredient-link" onclick="openIngredient('soyMilk')">Szójatej</span> kevesebb földet és vizet igényel.`,
      `<span class="ingredient-link" onclick="openIngredient('texturizedSoy')">Texturált szója</span> csökkenti a kibocsátást.`,
      `Cserélj le egy kis húst <span class="ingredient-link" onclick="openIngredient('broccoli')">brokkolira</span> 🌱`
    ]
  },
celebrity: [
  {
    name: {
      en: "Natalie Portman",
      es: "Natalie Portman",
      hu: "Natalie Portman"
    },
    title: {
      en: "Actress & Activist",
      es: "Actriz y activista",
      hu: "Színésznő és aktivista"
    },
    quote: {
      en: "Three times a day, I remind myself that I value life and do not want to cause pain to or kill other living beings. That is why I eat the way I do.",
      es: "Tres veces al día me recuerdo que valoro la vida y que no quiero causar dolor ni matar a otros seres vivos. Por eso como como lo hago.",
      hu: "Naponta háromszor emlékeztetem magam arra, hogy értékelem az életet, és nem akarok fájdalmat okozni vagy megölni más élőlényeket. Ezért eszem így."
    },
    avatar: "images/natalie.jpg"
  },

  {
    name: {
      en: "Albert Einstein",
      es: "Albert Einstein",
      hu: " Albert Einstein"
    },
    title: {
      en: "Theoretical Physicist",
      es: "Físico teórico",
      hu: "Elméleti fizikus"
    },
    quote: {
      en: "Nothing will benefit health or increase chances of survival on Earth as much as the evolution to a vegetarian diet.",
      es: "Nada beneficiará tanto la salud ni aumentará las posibilidades de supervivencia en la Tierra como la evolución hacia una dieta vegetariana.",
      hu: "Semmi sem szolgálja jobban az egészséget vagy növeli a túlélés esélyét a Földön, mint a vegetáriánus étrend felé való fejlődés."
    },
    avatar: "images/einstein.jpg"
  },

  {
    name: {
      en: "Patrik Baboumian",
      es: "Patrik Baboumian",
      hu: "Patrik Baboumian"
    },
    title: {
      en: "Strongman & Vegan Activist",
      es: "Strongman y activista vegano",
      hu: "Erősember és vegán aktivista"
    },
    quote: {
      en: "Someone once asked me, 'How can you get as strong as an ox without eating any meat?' My answer was, 'Have you ever seen an ox eating meat?'",
      es: "Alguien me preguntó una vez: «¿Cómo puedes ser tan fuerte como un buey sin comer carne?» Mi respuesta fue: «¿Has visto alguna vez a un buey comiendo carne?»",
      hu: "Egyszer megkérdezték tőlem: „Hogyan lehetsz olyan erős, mint egy ökör hús nélkül?” A válaszom az volt: „Láttál már ökröt húst enni?”"
    },
    avatar: "images/patrik.jpg"
  },

  {
    name: {
      en: "Abraham Lincoln",
      es: "Abraham Lincoln",
      hu: "Abraham Lincoln"
    },
    title: {
      en: "16th U.S. President",
      es: "16.º presidente de los Estados Unidos",
      hu: "Az Egyesült Államok 16. elnöke"
    },
    quote: {
      en: "I am in favor of animal rights as well as human rights. That is the way of a whole human being.",
      es: "Estoy a favor de los derechos de los animales así como de los derechos humanos. Ese es el camino de un ser humano completo.",
      hu: "Az állatok jogai mellett ugyanúgy kiállok, mint az emberi jogok mellett. Ez a teljes ember útja."
    },
    avatar: "images/lincoln.jpg"
  },

  {
    name: {
      en: "Leonardo da Vinci",
      es: "Leonardo da Vinci",
      hu: "Leonardo da Vinci"
    },
    title: {
      en: "Renaissance Polymath",
      es: "Polímata del Renacimiento",
      hu: "Reneszánsz polihisztor"
    },
    quote: {
      en: "I have from an early age abjured the use of meat.",
      es: "Desde muy joven he rechazado el consumo de carne.",
      hu: "Fiatal koromtól kezdve elutasítottam a hús fogyasztását."
    },
    avatar: "images/davinci.jpg"
  },

  {
    name: {
      en: "Pythagoras",
      es: "Pitágoras",
      hu: "Püthagorasz"
    },
    title: {
      en: "Philosopher & Mathematician",
      es: "Filósofo y matemático",
      hu: "Filozófus és matematikus"
    },
    quote: {
      en: "As long as man continues to be the ruthless destroyer of lower living beings, he will never know health or peace.",
      es: "Mientras el hombre siga siendo el destructor despiadado de los seres vivos inferiores, nunca conocerá la salud ni la paz.",
      hu: "Amíg az ember könyörtelen pusztítója marad az alacsonyabb rendű élőlényeknek, soha nem fogja megismerni az egészséget vagy a békét."
    },
    avatar: "images/pythagoras.jpg"
  },

  {
    name: {
      en: "Lewis Hamilton",
      es: "Lewis Hamilton",
      hu: "Lewis Hamilton"
    },
    title: {
      en: "Formula 1 World Champion",
      es: "Campeón del mundo de Fórmula 1",
      hu: "Forma–1 világbajnok"
    },
    quote: {
      en: "We all have choices to make. I choose to love, to be conscious of what I’m supporting and I refuse to support the companies killing and torturing animals.",
      es: "Todos tenemos elecciones que hacer. Yo elijo amar, ser consciente de lo que apoyo y me niego a apoyar a empresas que matan y torturan animales.",
      hu: "Mindannyiunknak vannak döntései. Én a szeretetet választom, tudatos vagyok abban, mit támogatok, és nem támogatom az állatokat megölő és kínzó vállalatokat."
    },
    avatar: "images/hamilton.jpg"
  },

  {
    name: {
      en: "Mahatma Gandhi",
      es: "Mahatma Gandhi",
      hu: "Mahatma Gandhi"
    },
    title: {
      en: "Indian Leader & Activist",
      es: "Líder y activista indio",
      hu: "Indiai vezető és aktivista"
    },
    quote: {
      en: "The greatness of a nation can be judged by the way its animals are treated.",
      es: "La grandeza de una nación se puede juzgar por la forma en que trata a sus animales.",
      hu: "Egy nemzet nagysága megítélhető abból, ahogyan az állataival bánik."
    },
    avatar: "images/gandhi.jpg"
  },

  {
    name: {
      en: "Leo Tolstoy",
      es: "León Tolstói",
      hu: "Lev Tolsztoj"
    },
    title: {
      en: "Author & Philosopher",
      es: "Escritor y filósofo",
      hu: "Író és filozófus"
    },
    quote: {
      en: "As long as there are slaughterhouses, there will be battlefields.",
      es: "Mientras existan los mataderos, habrá campos de batalla.",
      hu: "Amíg léteznek vágóhidak, addig lesznek csataterek."
    },
    avatar: "images/tolstoy.jpg"
  },

  {
    name: {
      en: "John Stuart Mill",
      es: "John Stuart Mill",
      hu: "John Stuart Mill"
    },
    title: {
      en: "Philosopher & Economist",
      es: "Filósofo y economista",
      hu: "Filozófus és közgazdász"
    },
    quote: {
      en: "The worth of a civilization is measured by the compassion it shows toward those who cannot defend themselves.",
      es: "El valor de una civilización se mide por la compasión que muestra hacia quienes no pueden defenderse.",
      hu: "Egy civilizáció értékét az mutatja meg, mennyi együttérzést tanúsít azokkal szemben, akik nem tudják megvédeni magukat."
    },
    avatar: "images/stuart.jpg"
  },

  {
    name: {
      en: "Buddha",
      es: "Buda",
      hu: "Buddha"
    },
    title: {
      en: "Spiritual Leader",
      es: "Líder espiritual",
      hu: "Spirituális tanító"
    },
    quote: {
      en: "All beings tremble before violence. All fear death. When a man considers this, he does not kill or cause to kill.",
      es: "Todos los seres tiemblan ante la violencia. Todos temen la muerte. Cuando alguien reflexiona sobre esto, no mata ni hace que otros maten.",
      hu: "Minden lény retteg az erőszaktól. Mindenki fél a haláltól. Aki ezt megérti, nem öl, és nem is késztet másokat ölésre."
    },
    avatar: "images/buddha.jpg"
  },

  {
  name: {
    en: "Plato",
    es: "Platón",
    hu: "Platón"
  },
  title: {
    en: "Philosopher",
    es: "Filósofo",
    hu: "Filozófus"
  },
  quote: {
    en: "All living beings are ensouled, and the soul is not bound by species, but by its condition.",
    es: "Todos los seres vivos están animados por un alma, y el alma no está ligada a la especie, sino a su condición.",
    hu: "Minden élőlénynek van lelke, és a lélek nem a fajhoz, hanem az állapotához kötődik."
  },
  avatar: "images/plato.jpg"
}
]
};
*/


//#region Functions
/*
Ariana Grande – Singer and Actress
“I’m a firm believer in eating a full plant-based, whole food diet that can expand your life length and make you an all-around happier person.” 

Alicia Silverstone – Actress and Activist
“Being vegan helped me realize I can say and do what I believe is right. That's powerful.” 

Jermaine Dupri – Musician and Producer
“I’ve been vegan for over a decade, and for me, there’s nothing better for feeling your best and knowing you’re helping the planet and animals.” 

Mayim Bialik – Actress and Neuroscientist
“Even as a child, I felt very guilty about eating animals and never knew that there was something to do about it. And as I got older, it became clearer that there are things that I can do and choices I can make.” 

Tara McDonald – Singer and Activist
“The vegan lifestyle has made me feel so good that it's only natural that I want to share it with people.” 

Kristen Bell – Actress
“I have always been an animal lover. I had a hard time disassociating the animals I cuddled with—dogs and cats, for example—from the animals on my plate.” 

Genesis Butler – Activist
“I chose to go vegan because I want to be part of the solution, not the problem.” 


🏅 Athletes

Novak Djokovic – Tennis Champion
“Food is the fuel that determines how I play, how I recover, and how alert I am on the court. I attribute a great deal of my professional success to my diet.” 

Brendan Brazier – Former Endurance Athlete and Author
“Being vegan doesn’t make you a stronger, better athlete. But it allows you to make yourself a stronger, better athlete.” 

Chloe Arthur – Scottish Footballer
“Whatever you have I will probably eat the same, I just replace the meat with a different protein. Why slaughter animals when you can get all the nutritious meals without having to do that?” 

Alex Morgan – Soccer Player
“I never thought it was possible I could be playing at an elite level as a professional athlete with a plant-based diet. Then I realized it wasn’t detrimental at all.” 

Zac Efron – Actor and Athlete
“That’s [veganism] completely changed the way that my body works, and the way that I metabolize food, the way it turns into energy, the way that I sleep. It’s been brilliant. It’s been great for my exercise, and great for my routine.” 

Mathieu Flamini – Former Footballer and Environmental Entrepreneur
“Football needs to stand up for climate change.


🌟 Famous Scientists & Philosophers

Voltaire – Philosopher
“It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.”

Isaac Bashevis Singer – Writer & Philosopher
“The animals of the world exist for their own reasons. They were not made for humans any more than black people were made for whites or women created for men.”

Henry Salt – Writer & Social Reformer
“The question is not, Can they reason? nor, Can they talk? but, Can they suffer?”


🌟 Famous Leaders & Reformers

Mahatma Gandhi – Indian Leader & Activist
“I hold that, the more helpless a creature, the more entitled it is to protection by man from the cruelty of man.”

Thomas Jefferson – 3rd U.S. President
“Nothing is more honorable than a gentle, humane treatment of animals.”


St. Francis of Assisi
“If you have men who will exclude any of God’s creatures from the shelter of compassion and pity, you will have men who will deal likewise with their fellow men.”

Albert Schweitzer – Theologian & Philosopher
“The ethical treatment of animals is the most humane and noble test of civilization.”

//--------------------------
// Ingredient Modal
//--------------------------
function openIngredient(key) {
  const item = ingredientInfo[key];
  if (!item) return;

  document.getElementById("ingredientName").textContent = item.name[poolLang] || item.name.en;
  document.getElementById("ingredientDescription").innerHTML = item.description[poolLang] || item.description.en;
  document.getElementById("ingredientNutrition").innerHTML = item.nutrition[poolLang] || item.nutrition.en;

  document.getElementById("ingredientModal").classList.add("active");
}

document.getElementById("closeIngredientModal").onclick = () => {
  document.getElementById("ingredientModal").classList.remove("active");
};

// Track last shown timestamp (single for all characters)
let lastShown = parseInt(localStorage.getItem("lastShownTime"), 10) || 0; // timestamp of last tip shown

// Save helper
function saveLastShown(ts) {
  lastShown = ts;
  localStorage.setItem("lastShownTime", ts);
}

// Define spawn zones for each character
function getRandomPositionForChar(char, wrapperWidth, wrapperHeight) {
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight);

  const leftEdge = 0.15 * vw;
  const rightEdge = 0.85 * vw - wrapperWidth;
  let bottomLimit = 0.55 * vh; // max Y (40% from bottom)
  const topLimit = 0.10 * vh;

  let minX, maxX;

  switch (char) {
    // fill viewport height 
    //case "eluna":
    //  minX = leftEdge;
    //  maxX = 0.4 * vw - wrapperWidth; // left side
    //  break;
    //case "elune":
    //  minX = 0.3 * vw;
    //  maxX = 0.7 * vw - wrapperWidth; // middle
    //  break;
     // 
    case "pet":
      minX = 0.6 * vw;
      maxX = rightEdge; // right side
      break;
    case "celebrity":
      minX = leftEdge;
      maxX = 0.3 * vw - wrapperWidth;
      // Appear higher → smaller bottom limit
      bottomLimit = 0.35 * vh;  // limit the vertical range to upper area
    break;
    default:
      minX = leftEdge;
      maxX = rightEdge;
  }

  const minY = topLimit;
  const maxY = bottomLimit - wrapperHeight;

  const x = minX + Math.random() * (maxX - minX);
  const y = minY + Math.random() * (maxY - minY);

  return { x, y };
}

function showRandomAvatar() {

  const now = Date.now();
  const cooldown = 60 * 60 * 1000; // 1 hour
  if (now - lastShown < cooldown) return;

  // 🎯 Weighted probability setup
  const weightedChars = [
    { char: "celebrity", weight: 50 },
    
   // { char: "elune", weight: 25 },
   // { char: "eluna", weight: 25 },
    
    { char: "pet", weight: 50 }
  ];

  const totalWeight = weightedChars.reduce((sum, c) => sum + c.weight, 0);
  const randomNum = Math.random() * totalWeight;
  let cumulative = 0;
  let char = weightedChars[0].char;

  for (const c of weightedChars) {
    cumulative += c.weight;
    if (randomNum <= cumulative) {
      char = c.char;
      break;
    }
  }

  const originalWrapper = document.getElementById(char + "Wrapper");
  if (!originalWrapper) return;

  const wrapper = originalWrapper.cloneNode(true);
  wrapper.id = char + "_floating";
  wrapper.style.position = "fixed";
  wrapper.style.zIndex = "1000";
  wrapper.style.display = "block";

  // ✅ Call position function correctly
  let pos = getRandomPositionForChar(
    char,
    wrapper.offsetWidth,
    wrapper.offsetHeight
  );
  wrapper.style.left = `${pos.x}px`;
  wrapper.style.top = `${pos.y}px`;

  document.querySelector("#home").appendChild(wrapper);
  saveLastShown(now);

  const bubble = wrapper.querySelector(".thought-bubble");
  const tipBox = wrapper.querySelector(".lesson-box");

  // 🎭 Special logic for celebrities
  if (char === "celebrity") {
    const celeb =
      characterTips.celebrity[
        Math.floor(Math.random() * characterTips.celebrity.length)
      ];

    tipBox.innerHTML = `
      <div class="celeb-quote">
        <p class="quote">“${celeb.quote[poolLang] || celeb.quote.en}”</p>
        <p class="celeb-name"><strong>${celeb.name[poolLang] || celeb.name.en}</strong></p>
        <p class="celeb-title"><em>${celeb.title[poolLang] || celeb.title.en}</em></p>
      </div>
    `;

    const avatarImg = wrapper.querySelector("#celebrityAvatar");
    avatarImg.src = celeb.avatar;
  } else {
  // Pick language-specific tips, fallback to EN
  const tips =
    characterTips[char][poolLang] || characterTips[char].en;

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipBox.innerHTML = randomTip;

  // 🔹 Make ingredient links clickable
  tipBox.querySelectorAll(".ingredient-link").forEach(link => {
    link.onclick = (e) => {
      e.stopPropagation();

      // Extract ingredient key from inline onclick
      const keyMatch = link
        .getAttribute("onclick")
        ?.match(/'(\w+)'/);

      if (keyMatch) {
        openIngredient(keyMatch[1]);
      }

      bubble.classList.remove("visible");
      wrapper.remove();
    };
  });
  }

  const avatars = wrapper.querySelectorAll(
    ".avatar, #petAvatar, .thought-toggle"
  );
  avatars.forEach((av) => {
    av.onclick = (e) => {
      e.stopPropagation();
      bubble.classList.add("visible");
    };
  });

  const closeBtn = bubble.querySelector(".close-thought");
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    bubble.classList.remove("visible");
    wrapper.remove();
  };
}

// ---------------------------
// Schedule check every minute
// ---------------------------
setInterval(showRandomAvatar, 60 * 1000);
window.addEventListener("load", () => setTimeout(showRandomAvatar, 8000)); // first tip after 6s
window.addEventListener("load", () => {
  setTimeout(() => showRandomAvatar(), 8000);
});
*/
//#endregion 



// =======================
// HEALTH ISSUE LESSONS
// =======================
export const HealthIssuesPool = {
  health: [

   // HEART DISEASE 
  {
  issue: "Heart disease",
  title: {
    en: "Heart disease: What Causes Heart Disease?",
    es: "Enfermedad cardíaca: ¿Qué causa la enfermedad cardíaca?",
    hu: "Szívbetegség: Mi okozza a szívbetegséget?"
  },
  content: {
    en: `
Heart disease starts when arteries that carry blood to your heart get damaged, often due to high LDL cholesterol, inflammation, or high blood pressure. LDL, or “bad cholesterol,” carries cholesterol to your arteries, where it can stick to walls and form plaque, narrowing blood flow. Don’t worry — these processes can be managed with simple lifestyle changes like plant-based eating, exercise, and stress reduction.
    `,
    es: `
La enfermedad cardíaca comienza cuando las arterias que llevan sangre al corazón se dañan, a menudo debido a niveles altos de colesterol LDL, inflamación o presión arterial elevada. El LDL, conocido como “colesterol malo”, transporta colesterol a las arterias, donde puede adherirse a sus paredes y formar placas, estrechando el flujo sanguíneo. No te preocupes — estos procesos pueden controlarse con cambios simples en el estilo de vida, como una alimentación basada en plantas, ejercicio y reducción del estrés.
    `,
    hu: `
A szívbetegség akkor kezdődik, amikor a szívhez vért szállító artériák károsodnak, gyakran magas LDL-koleszterinszint, gyulladás vagy magas vérnyomás miatt. Az LDL, vagyis a „rossz koleszterin”, koleszterint szállít az artériákba, ahol az lerakódhat az érfalakon, plakkot képezve és beszűkítve a véráramlást. Ne aggódj — ezek a folyamatok egyszerű életmódbeli változtatásokkal, például növényi alapú étrenddel, mozgással és stresszcsökkentéssel jól kezelhetők.
    `
  },
  quiz: {
    question: {
      en: "What does LDL cholesterol do in the body?",
      es: "¿Qué hace el colesterol LDL en el cuerpo?",
      hu: "Mit tesz az LDL-koleszterin a szervezetben?"
    },
    options: {
      en: [
        "Helps remove excess fat from arteries",
        "Carries cholesterol that can build up and narrow arteries",
        "Lowers blood pressure",
        "Has no role in heart health"
      ],
      es: [
        "Ayuda a eliminar el exceso de grasa de las arterias",
        "Transporta colesterol que puede acumularse y estrechar las arterias",
        "Reduce la presión arterial",
        "No tiene ningún papel en la salud del corazón"
      ],
      hu: [
        "Segít eltávolítani a felesleges zsírt az artériákból",
        "Olyan koleszterint szállít, amely felhalmozódhat és beszűkítheti az artériákat",
        "Csökkenti a vérnyomást",
        "Nincs szerepe a szív egészségében"
      ]
    },
    answer: 1
  }
},
  
  /*  

  {
    issue: "Heart disease",
    title: "Heart disease: Understanding LDL Cholesterol",
    content: `
LDL cholesterol is often called “bad” cholesterol because it can build up in your arteries, but don’t worry — there’s a lot you can do to manage it! By choosing plant-based foods and cutting back on saturated fats from meat, cheese, and eggs, you can help your body remove excess cholesterol and keep your blood vessels clear.
    `,
    quiz: {
      question: "What does LDL cholesterol do in the body?",
      options: [
        "Helps remove excess fat from arteries",
        "Carries cholesterol that can build up and narrow arteries",
        "Lowers blood pressure",
        "Has no role in heart health"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: HDL and Cholesterol Balance",
    content: `
HDL, the “good” cholesterol, is your ally — it helps sweep LDL away from your arteries and send it to the liver for safe disposal. The good news? Regular exercise and a diet rich in plants boost HDL naturally, giving your heart extra protection without any complicated routines.
    `,
    quiz: {
      question: "Which cholesterol helps remove LDL from the body?",
      options: [
        "HDL",
        "LDL",
        "Triglycerides",
        "None"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Inflammation in Arteries",
    content: `
Heart attacks aren’t caused by cholesterol alone — inflammation in your arteries plays a big role. The great news? Simple choices like eating more fruits, vegetables, nuts, and whole grains while reducing processed foods can calm inflammation and help your arteries stay healthy.
    `,
    quiz: {
      question: "What causes inflammation in the arteries?",
      options: [
        "High intake of animal fats and processed foods",
        "Low LDL levels",
        "Antioxidants from fruits",
        "Regular exercise"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Nitric Oxide and Artery Health",
    content: `
Your arteries produce nitric oxide (NO), a natural molecule that relaxes blood vessels and improves blood flow — and you can help boost it! Eating leafy greens like spinach and kale is an easy, delicious way to support NO production and give your heart a gentle boost every day.
    `,
    quiz: {
      question: "What does nitric oxide do for your arteries?",
      options: [
        "Narrows arteries and increases pressure",
        "Raises cholesterol levels",
        "Causes inflammation",
        "Helps arteries relax and improve blood flow"
      ],
      answer: 3
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Blood Pressure and Plant Foods",
    content: `
High blood pressure can stress your heart, but there’s a simple, tasty solution — plant foods! Fruits, vegetables, whole grains, and legumes are packed with potassium and nitrates that naturally lower blood pressure and support your arteries, making healthy living both easy and enjoyable.
    `,
    quiz: {
      question: "How can plant foods help blood pressure?",
      options: [
        "Increase stress",
        "Provide potassium and nitrates to lower it",
        "Raise LDL cholesterol"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Exercise and Heart Strength",
    content: `
Even gentle movement like walking, yoga, or cycling strengthens your heart and keeps blood flowing smoothly. The best part? Just 30 minutes a day can increase HDL and help remove LDL, making it simple to give your heart a boost without feeling overwhelmed.
    `,
    quiz: {
      question: "How does regular exercise help your heart?",
      options: [
        "Strengthens the heart and improves circulation",
        "Raises LDL cholesterol",
        "Decreases HDL cholesterol",
        "Increases inflammation"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Stress, Sleep, and Recovery",
    content: `
Chronic stress and poor sleep raise blood pressure and inflammation, but don’t worry — small changes can make a big difference. Meditation, deep breathing, and 7–9 hours of quality sleep give your heart time to recover and thrive every day.
    `,
    quiz: {
      question: "How do stress and sleep affect heart health?",
      options: [
        "No effect",
        "Raise blood pressure and inflammation",
        "Directly lower LDL only"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Monitoring Progress",
    content: `
Tracking your LDL, HDL, and blood pressure helps you see the benefits of your lifestyle choices — and it’s easier than you think. With regular check-ups, you’ll be able to celebrate progress and adjust habits to give your heart the best care possible.
    `,
    quiz: {
      question: "Why should you monitor cholesterol and blood pressure?",
      options: [
        "To know how diet and exercise affect heart health",
        "To ignore heart disease",
        "To increase LDL"
      ],
      answer: 0
    }
  },
{
    issue: "Heart disease",
    title: "Heart disease: Case Example — Linda’s Recovery",
    content: `
Linda, 62, lowered her cholesterol from 250 to 170 and improved blood flow within six months on a plant-based diet. Her story shows that consistent lifestyle and dietary changes can produce real, measurable improvements. Don’t worry — small, daily steps can make a big difference for anyone!
    `,
    quiz: {
      question: "What happened to Linda after switching to a plant-based diet?",
      options: [
        "Her cholesterol increased",
        "Her heart disease worsened",
        "Her arteries began to heal and symptoms improved",
        "She required more medication"
      ],
      answer: 2
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: 7-Day Heart Healing Plan",
    content: `
Start simple: eat plants for breakfast, add salads for lunch, replace meat with beans for dinner, move your body, and reflect daily. Tiny, consistent actions over time lead to heart healing, improved energy, and a happier, healthier life. Don’t worry — you don’t need to change everything at once!
    `,
    quiz: {
      question: "What is the main message of this 7-day plan?",
      options: [
        "Change everything at once",
        "Small, consistent actions lead to healing",
        "Exercise is more important than food",
        "Only medication can reverse heart disease"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Omega-3 Fatty Acids for Heart Protection",
    content: `
Omega-3 fatty acids reduce inflammation, lower triglycerides, and support healthy blood vessels. Plant sources like flaxseeds, chia seeds, walnuts, and algae oil provide these essential fats safely. Adding just a few servings a week is easy and can make your heart stronger and happier.
    `,
    quiz: {
      question: "Which plant foods provide heart-healthy omega-3s?",
      options: [
        "Flaxseeds, chia seeds, walnuts, algae oil",
        "Potatoes and rice",
        "Meat and cheese"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Plant Sterols and Cholesterol Control",
    content: `
Plant sterols and stanols naturally block cholesterol absorption in your gut. Nuts, seeds, legumes, and fortified plant spreads help lower LDL and protect your arteries. Simple swaps can make a huge difference — you have the power to improve your heart health naturally!
    `,
    quiz: {
      question: "What do plant sterols and stanols do?",
      options: [
        "Increase cholesterol absorption",
        "Block cholesterol absorption and lower LDL",
        "Raise blood pressure"
      ],
      answer: 1
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Polyphenols and Antioxidants",
    content: `
Polyphenols in berries, cocoa, coffee, tea, and spices like turmeric reduce oxidative stress and inflammation in arteries. These antioxidants help keep blood vessels elastic and healthy. Adding a few colorful foods to your plate each day is simple, delicious, and powerful for your heart.
    `,
    quiz: {
      question: "Which foods are rich in polyphenols and antioxidants?",
      options: [
        "Berries, cocoa, tea, coffee, turmeric",
        "White bread and pasta",
        "Red meat and butter"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Weight Management and Insulin Sensitivity",
    content: `
Maintaining a healthy weight reduces strain on your heart, lowers blood pressure, and improves insulin sensitivity. A plant-based diet rich in whole grains, vegetables, and legumes supports steady blood sugar and long-term metabolic health. Don’t worry — small changes every day lead to lasting results!
    `,
    quiz: {
      question: "How does a healthy weight affect heart health?",
      options: [
        "Reduces strain on the heart and improves insulin sensitivity",
        "Increases LDL cholesterol",
        "Has no effect"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Avoiding Smoking and Limiting Alcohol",
    content: `
Smoking damages blood vessels and increases heart disease risk, while excessive alcohol raises blood pressure and triglycerides. Eliminating tobacco and drinking moderately or not at all strengthens your heart and arteries. Remember, every positive change counts, and it’s never too late to start!
    `,
    quiz: {
      question: "Which habits harm heart health?",
      options: [
        "Smoking and excessive alcohol",
        "Eating fruits and vegetables",
        "Walking daily"
      ],
      answer: 0
    }
  },
  {
    issue: "Heart disease",
    title: "Heart disease: Mindful Eating and Long-Term Habits",
    content: `
Mindful eating — paying attention to hunger, portion size, and food quality — prevents overeating and supports healthy cholesterol levels. Building consistent plant-based habits ensures lasting heart protection and overall wellness. Tiny, daily choices are powerful, so start today and enjoy the journey!
    `,
    quiz: {
      question: "Why is mindful eating important for the heart?",
      options: [
        "Increases LDL cholesterol",
        "Prevents overeating and supports cholesterol control",
        "Has no effect"
      ],
      answer: 1
    }
  },

  

  */

// HIGH CHOLESTEROL
{
  issue: "High cholesterol",
  title: {
    en: "High cholesterol: What Causes High Cholesterol?",
    es: "Colesterol alto: ¿Qué causa el colesterol alto?",
    hu: "Magas koleszterinszint: Mi okozza a magas koleszterint?"
  },
  content: {
    en: `
High cholesterol happens when LDL, the 'bad' cholesterol, accumulates in your arteries, forming plaque that narrows blood vessels and increases heart disease risk. Factors like diets high in saturated and trans fats, processed foods, lack of exercise, genetics, stress, and poor sleep all contribute. Don’t worry — there are simple steps you can take to reduce your risk and improve your heart health!
    `,
    es: `
El colesterol alto ocurre cuando el LDL, el “colesterol malo”, se acumula en las arterias, formando placas que estrechan los vasos sanguíneos y aumentan el riesgo de enfermedades cardíacas. Factores como dietas altas en grasas saturadas y trans, alimentos procesados, falta de ejercicio, genética, estrés y sueño deficiente contribuyen. ¡No te preocupes — hay pasos simples que puedes seguir para reducir tu riesgo y mejorar la salud de tu corazón!
    `,
    hu: `
A magas koleszterinszint akkor alakul ki, amikor az LDL, az úgynevezett „rossz koleszterin”, felhalmozódik az artériákban, plakkot képezve, ami beszűkíti az ereket és növeli a szívbetegségek kockázatát. Ehhez hozzájárulhat a telített és transzzsírokban gazdag étrend, a feldolgozott élelmiszerek, a mozgáshiány, a genetika, a stressz és a rossz alvás. Ne aggódj — egyszerű lépésekkel csökkentheted a kockázatot és javíthatod a szív egészségét!
    `
  },
  quiz: {
    question: {
      en: "What contributes to high cholesterol?",
      es: "¿Qué contribuye al colesterol alto?",
      hu: "Mi járul hozzá a magas koleszterinszinthez?"
    },
    options: {
      en: [
        "Excess LDL and poor lifestyle habits",
        "Only exercise",
        "Eating fruits and vegetables",
        "Drinking water"
      ],
      es: [
        "Exceso de LDL y malos hábitos de vida",
        "Solo hacer ejercicio",
        "Comer frutas y verduras",
        "Beber agua"
      ],
      hu: [
        "Túl sok LDL és rossz életmódbeli szokások",
        "Csak a mozgás",
        "Gyümölcsök és zöldségek fogyasztása",
        "Vízivás"
      ]
    },
    answer: 0
  }
},

 /*  
  {
    issue: "High cholesterol",
    title: "High cholesterol: Understanding Cholesterol — The Good, the Bad, and the Balance",
    content: "Cholesterol is essential for your body to build cells and hormones, but excess LDL can accumulate in arteries and trigger heart disease. Not all LDL is the same — small, dense LDL particles are more harmful, while HDL helps remove cholesterol from the bloodstream effectively. Don’t worry — by making small changes to your diet and lifestyle, you can help your body find balance naturally!"
    ,
    quiz: {
      question: "Which type of cholesterol can build up in arteries and cause blockages?",
      options: [
        "HDL cholesterol",
        "Dietary cholesterol from plants",
        "No cholesterol at all",
        "LDL cholesterol"
      ],
      answer: 3
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: How Animal Products Affect Cholesterol Levels",
    content: "Saturated fats and dietary cholesterol from meat, eggs, and dairy increase LDL and can promote arterial plaque formation. Genetics also play a role, as some people are more sensitive to dietary cholesterol. Don’t worry — by choosing plant-based foods and monitoring your levels, you can protect your heart and improve your health!"
    ,
    quiz: {
      question: "Why do animal products raise cholesterol?",
      options: [
        "They are rich in fiber and antioxidants",
        "They contain saturated fats and dietary cholesterol",
        "They reduce LDL production in the liver",
        "They help arteries stay flexible"
      ],
      answer: 1
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: The Power of Soluble Fiber",
    content: "Soluble fiber acts like a sponge for LDL cholesterol, binding it in the intestines and helping remove it before it reaches your bloodstream. It also supports gut health and steady blood sugar. Don’t worry — adding just a few servings of oats, beans, or fruits each day can significantly lower your cholesterol naturally!"
    ,
    quiz: {
      question: "How does soluble fiber help reduce cholesterol?",
      options: [
        "It increases cholesterol production",
        "It adds more LDL to the bloodstream",
        "It binds to cholesterol and removes it through digestion",
        "It stops the liver from working"
      ],
      answer: 2
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: Replace Animal Fats with Plant Power",
    content: "Swapping saturated animal fats for unsaturated plant fats like avocado, nuts, and olive oil reduces LDL and may raise HDL, while also decreasing arterial inflammation. Omega-3 fatty acids from plants keep your vessels flexible. Don’t worry — simple swaps in your meals can have a powerful impact on your heart health!"
    ,
    quiz: {
      question: "Which of these is a healthy replacement for animal fats?",
      options: [
        "Avocado and olive oil",
        "Butter and cream",
        "Processed cheese",
        "Fried meat"
      ],
      answer: 0
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: The Role of Exercise and Lifestyle",
    content: "Regular activity increases HDL and helps clear LDL from your bloodstream. Managing stress and getting enough sleep reduce cortisol and triglycerides, supporting cardiovascular health. Don’t worry — even small lifestyle adjustments, combined with a heart-friendly diet, create powerful benefits!"
    ,
    quiz: {
      question: "What effect does regular exercise have on cholesterol levels?",
      options: [
        "It raises LDL cholesterol",
        "It increases HDL and helps clear LDL",
        "It has no effect",
        "It raises triglycerides"
      ],
      answer: 1
    }
  },
  {
    issue: "High cholesterol",
    title: "High cholesterol: Real-Life Transformations and What’s Possible",
    content: "Research like Dr. Dean Ornish’s shows that a low-fat, plant-based diet can lower LDL dramatically and even reverse heart disease in some patients. Everyone’s results vary depending on genetics, risk factors, and adherence, but even small, consistent changes can improve heart health. Don’t worry — you can start today and see positive changes over time!"
    ,
    quiz: {
      question: "What did Dr. Ornish’s study reveal about plant-based diets?",
      options: [
        "They can lower LDL cholesterol and even reverse heart disease",
        "They make cholesterol worse",
        "They have no measurable impact",
        "They require medication to work"
      ],
      answer: 0
    }
  },


   */

   /*  
// === HIGH BLOOD PRESSURE ===
  {
    issue: "High blood pressure",
    title: "High blood pressure: What Causes High Blood Pressure?",
    content: "High blood pressure, or hypertension, occurs when your arteries experience too much force from circulating blood. Factors like excess sodium, saturated fats, stress, poor sleep, and lack of exercise all contribute. Don’t worry — understanding the causes is the first step toward controlling it and protecting your heart!"
    ,
    quiz: {
      question: "Which factors contribute to high blood pressure?",
      options: [
        "Excess sodium, stress, poor sleep, and lack of exercise",
        "Eating fruits and vegetables",
        "Drinking water",
        "Daily walking"
      ],
      answer: 0
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Understanding Blood Pressure Numbers",
    content: "Blood pressure measures the force of blood against your artery walls. Systolic (top number) is the pressure when your heart beats, and diastolic (bottom number) is the pressure when your heart rests. Knowing these numbers helps you track your heart health and see improvements from lifestyle changes!"
    ,
    quiz: {
      question: "What does the systolic number in blood pressure represent?",
      options: [
        "Pressure when the heart beats",
        "Pressure when the heart rests",
        "Cholesterol level",
        "Heart rate"
      ],
      answer: 0
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: How Diet Affects Blood Pressure",
    content: "High sodium and saturated fat intake stress arteries and raise blood pressure over time. Processed foods, cheese, cured meats, and fried meals are common culprits. Don’t worry — swapping just a few of these items for fresh plant-based foods can make a real difference!"
    ,
    quiz: {
      question: "Which foods commonly raise blood pressure?",
      options: [
        "Fresh fruits and vegetables",
        "Processed foods, cheese, and cured meats",
        "Beans and legumes",
        "Leafy greens"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Sodium — The Hidden Trigger",
    content: "Most people consume far more sodium than needed, often without noticing. Excess sodium makes your body retain water, increasing blood volume and pressure on arteries. Don’t worry — reducing sodium is easier than you think with herbs, garlic, lemon, and home-cooked meals!"
    ,
    quiz: {
      question: "How does excess sodium affect blood pressure?",
      options: [
        "Lowers blood pressure",
        "Increases blood pressure by retaining water",
        "Has no effect",
        "Strengthens arteries"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Tips for Reducing Sodium",
    content: "Switching to fresh, whole plant foods dramatically cuts sodium intake. Use flavorful alternatives like herbs, garlic, lemon, and choose unsalted nuts and seeds. Even reducing 1,500–2,000 mg of sodium daily can lower your systolic pressure by 5–10 mmHg within weeks!"
    ,
    quiz: {
      question: "Which tip helps reduce sodium intake?",
      options: [
        "Add more processed snacks",
        "Use herbs, garlic, and lemon instead of salt",
        "Drink soda daily",
        "Add cheese to meals"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Potassium — Your Natural Regulator",
    content: "Potassium helps balance sodium and relax artery walls, keeping blood pressure in check. Bananas, spinach, sweet potatoes, beans, and avocado are all excellent sources. Don’t worry — adding these foods to your meals is an easy way to support your heart naturally!"
    ,
    quiz: {
      question: "Which mineral helps relax arteries and control blood pressure?",
      options: [
        "Iron",
        "Zinc",
        "Potassium",
        "Calcium"
      ],
      answer: 2
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Potassium in Everyday Foods",
    content: "Top plant sources of potassium include bananas, sweet potatoes, spinach, kale, beans, lentils, avocado, and pumpkin seeds. Even small swaps like a salty sandwich for lentil soup with leafy greens help your body lower blood pressure naturally. Don’t worry — these changes are easy to fit into your daily routine!"
    ,
    quiz: {
      question: "Which foods are rich in potassium?",
      options: [
        "Chips and soda",
        "Bananas and spinach",
        "Cheese and bacon",
        "White bread"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Plant-Based Diets and Blood Pressure",
    content: "Whole-food, plant-based diets are naturally low in sodium, high in potassium, magnesium, fiber, and antioxidants. Studies show people with mild hypertension can see systolic pressure drop by 10 mmHg and diastolic by 8 mmHg in just 12 weeks. Don’t worry — every plant-powered meal moves you closer to a healthier heart!"
    ,
    quiz: {
      question: "Why do plant-based diets help lower blood pressure?",
      options: [
        "They increase sodium",
        "They are high in potassium and fiber",
        "They reduce potassium",
        "They increase saturated fat"
      ],
      answer: 1
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Exercise, Sleep, and Stress",
    content: "Daily movement strengthens the heart, improves circulation, and helps regulate blood pressure. Meditation, deep breathing, journaling, and connecting with supportive friends reduce stress and cortisol. And 7–9 hours of quality sleep help your body recover and maintain healthy arteries. Don’t worry — even small lifestyle changes amplify the benefits of a plant-based diet!"
    ,
    quiz: {
      question: "Which lifestyle factor does NOT help lower blood pressure?",
      options: [
        "Exercise",
        "Stress management",
        "Adequate sleep",
        "Chronic stress"
      ],
      answer: 3
    }
  },
  {
    issue: "High blood pressure",
    title: "High blood pressure: Small Steps, Big Impact — 7-Day Action Plan",
    content: "Start simple with a 7-day plan: swap processed snacks for fruits and veggies, add high-potassium foods, replace meat and dairy with plants, reduce salt with herbs and lemon, move your body, and reflect daily. Even one week of consistent effort can produce noticeable changes. Don’t worry — each small choice is a step toward a stronger, healthier heart!"
    ,
    quiz: {
      question: "What is the main idea of the 7-day action plan?",
      options: [
        "Change everything at once",
        "Small, consistent plant-based and lifestyle actions reduce blood pressure",
        "Exercise alone is enough",
        "Medication is the only solution"
      ],
      answer: 1
    }
  },

  */

   
// === TYPE 2 DIABETES ===
{
  issue: "Type 2 diabetes",
  title: {
    en: "Type 2 diabetes: What Causes Type 2 Diabetes?",
    es: "Diabetes tipo 2: ¿Qué causa la diabetes tipo 2?",
    hu: "2-es típusú cukorbetegség: Mi okozza a 2-es típusú cukorbetegséget?"
  },
  content: {
    en: `
Type 2 diabetes happens when your body becomes resistant to insulin, the hormone that moves sugar from blood into your cells. Excess sugar, refined carbs, processed foods, and animal products spike glucose and promote insulin resistance. Don’t worry — understanding these causes is the first step toward stabilizing blood sugar and protecting your health!
    `,
    es: `
La diabetes tipo 2 ocurre cuando tu cuerpo se vuelve resistente a la insulina, la hormona que transporta el azúcar de la sangre a las células. El exceso de azúcar, los carbohidratos refinados, los alimentos procesados y los productos animales elevan la glucosa y fomentan la resistencia a la insulina. ¡No te preocupes — entender estas causas es el primer paso para estabilizar el azúcar en sangre y proteger tu salud!
    `,
    hu: `
A 2-es típusú cukorbetegség akkor alakul ki, amikor a szervezet ellenállóvá válik az inzulinnal szemben, azzal a hormonnal, amely a cukrot a vérből a sejtekbe szállítja. A túl sok cukor, a finomított szénhidrátok, a feldolgozott ételek és az állati termékek megemelik a vércukorszintet és elősegítik az inzulinrezisztenciát. Ne aggódj — ezek megértése az első lépés a vércukorszint stabilizálása és az egészség védelme felé!
    `
  },
  quiz: {
    question: {
      en: "What contributes to type 2 diabetes?",
      es: "¿Qué contribuye a la diabetes tipo 2?",
      hu: "Mi járul hozzá a 2-es típusú cukorbetegség kialakulásához?"
    },
    options: {
      en: [
        "Leafy greens and legumes",
        "Water and unsweetened tea",
        "High sugar, refined carbs, processed foods, and animal products",
        "Regular exercise"
      ],
      es: [
        "Verduras de hoja y legumbres",
        "Agua y té sin azúcar",
        "Exceso de azúcar, carbohidratos refinados, alimentos procesados y productos animales",
        "Ejercicio regular"
      ],
      hu: [
        "Leveles zöldségek és hüvelyesek",
        "Víz és cukormentes tea",
        "Túl sok cukor, finomított szénhidrátok, feldolgozott ételek és állati termékek",
        "Rendszeres testmozgás"
      ]
    },
    answer: 2
  }
},

   /*  
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: How Blood Sugar Works",
    content: "When insulin doesn’t work efficiently, sugar builds up in the blood, causing fatigue, weight gain, and long-term risks to your heart, kidneys, and nerves. Plant-based meals with whole grains, legumes, fruits, and vegetables release sugar slowly, keeping energy steady and insulin working better. Even small swaps like replacing sugary drinks with water can improve blood sugar quickly!"
    ,
    quiz: {
      question: "What happens when insulin is not effective?",
      options: [
        "Blood sugar drops too low",
        "Blood sugar rises, causing fatigue and other risks",
        "Insulin works faster",
        "Nothing changes"
      ],
      answer: 1
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Low-Glycemic Plant Foods",
    content: "Not all carbs affect blood sugar the same way. Low-glycemic foods release glucose slowly, preventing spikes and supporting insulin function. Key foods include beans, lentils, chickpeas, quinoa, steel-cut oats, brown rice, and non-starchy vegetables like leafy greens and peppers."
    ,
    quiz: {
      question: "Which foods are low-glycemic and help stabilize blood sugar?",
      options: [
        "Candy and soda",
        "White bread and pastries",
        "Processed meats",
        "Whole grains, legumes, and vegetables"
      ],
      answer: 3
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Smart Swaps for Low-Glycemic Meals",
    content: "Replace white rice with lentils or quinoa, choose a bean salad over potato chips, and snack on fruits instead of candy. Each swap trains your body to handle glucose better. Small, consistent changes lead to measurable improvements over time!"
    ,
    quiz: {
      question: "What is a simple way to lower blood sugar with diet?",
      options: [
        "Swap white rice for lentils or quinoa",
        "Add more sugary drinks",
        "Eat more processed snacks",
        "Skip meals"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: The Sugar Trap — Drinks to Watch",
    content: "Sugary drinks, including fruit juices, flood your bloodstream with glucose, forcing your pancreas to overproduce insulin. Over time, this contributes to insulin resistance. Switching to water, sparkling water, or unsweetened plant milk gives your pancreas a break and reduces spikes!"
    ,
    quiz: {
      question: "What should sugary drinks be replaced with?",
      options: [
        "Water or unsweetened plant milk",
        "Energy drinks",
        "Beer",
        "Milkshakes"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Flavoring Water for Health",
    content: "Add lemon, cucumber, or mint to water for a refreshing, sugar-free drink. Keep fruit handy as a natural sweet alternative and pair carbs with fiber-rich foods, like fruit with nuts, to slow sugar absorption. Even small adjustments like these make a big difference!"
    ,
    quiz: {
      question: "Which tip helps reduce sugar spikes?",
      options: [
        "Drink soda instead of water",
        "Skip meals",
        "Flavor water with lemon or mint",
        "Eat candy with every snack"
      ],
      answer: 2
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Fiber — Your Secret Weapon",
    content: "Fiber slows digestion, stabilizes blood sugar, and nourishes your gut microbiome, all helping prevent insulin spikes. Beans, lentils, oats, barley, vegetables like carrots and broccoli, and fruits such as berries and apples are excellent sources."
    ,
    quiz: {
      question: "Why is fiber important for type 2 diabetes?",
      options: [
        "It slows digestion and stabilizes blood sugar",
        "It spikes blood sugar",
        "It increases insulin resistance",
        "It has no effect"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: How Fiber Helps Every Day",
    content: "Gradually increasing fiber prevents digestive discomfort while improving blood sugar. Add beans to salads, start mornings with oatmeal, and snack on fruit. Each choice strengthens your body’s ability to manage glucose naturally!"
    ,
    quiz: {
      question: "How can you safely increase fiber intake?",
      options: [
        "All at once, large amounts",
        "Gradually, with beans, oats, and fruit",
        "By eating only meat",
        "Skipping meals"
      ],
      answer: 1
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Weight Management and Plant-Based Nutrition",
    content: "Maintaining a healthy weight improves insulin sensitivity and helps prevent diabetes complications. Plant-based diets are high in fiber and lower in calories, naturally controlling appetite and body fat. Even modest 5–10% weight reduction has significant benefits!"
    ,
    quiz: {
      question: "How does weight management help type 2 diabetes?",
      options: [
        "Increases blood sugar",
        "Has no effect",
        "Raises insulin resistance",
        "Improves insulin sensitivity and lowers blood sugar"
      ],
      answer: 3
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Lifestyle Support for Blood Sugar",
    content: "Combine plant-based meals with daily movement — walking, yoga, or cycling — to improve insulin function. Balanced meals with beans, lentils, or tofu, and limiting animal fats and processed foods, strengthen blood sugar control. Each healthy habit supports energy, mood, and long-term health!"
    ,
    quiz: {
      question: "Which lifestyle habit supports better blood sugar control?",
      options: [
        "Daily movement and balanced plant-based meals",
        "Sugary drinks and processed snacks",
        "Skipping breakfast",
        "Eating more saturated fat"
      ],
      answer: 0
    }
  },
  {
    issue: "Type 2 diabetes",
    title: "Type 2 diabetes: Real-Life Transformations",
    content: "Studies show that switching to a low-fat, plant-based diet can reverse type 2 diabetes and sometimes eliminate medications. One participant replaced meat with beans, cut sugary drinks, and walked 30 minutes daily, lowering fasting glucose from 160 mg/dL to 110 mg/dL in 3 months. Don’t worry — small, consistent changes really do work!"
    ,
    quiz: {
      question: "What is possible with a low-fat, plant-based diet?",
      options: [
        "Reversing diabetes and reducing medications",
        "Worsening blood sugar control",
        "No measurable effect",
        "Requiring more insulin"
      ],
      answer: 0
    }
  },

   */

// === OBESITY ===
{
  issue: "Obesity",
  title: {
    en: "Obesity: What Causes Obesity?",
    es: "Obesidad: ¿Qué causa la obesidad?",
    hu: "Elhízás: Mi okozza az elhízást?"
  },
  content: {
    en: `
Obesity is more than just extra weight — it’s a condition that increases the risk of diabetes, heart disease, joint problems, and even mental health challenges. Major contributors include calorie-dense, nutrient-poor foods high in sugar and saturated fat, sedentary lifestyle, and sometimes genetics. Don’t worry — understanding the causes is the first step toward taking control and improving your health!
    `,
    es: `
La obesidad es más que solo peso extra: es una condición que aumenta el riesgo de diabetes, enfermedades cardíacas, problemas articulares e incluso desafíos de salud mental. Los principales factores incluyen alimentos con muchas calorías pero pocos nutrientes, ricos en azúcar y grasas saturadas, un estilo de vida sedentario y, a veces, la genética. ¡No te preocupes — entender las causas es el primer paso para tomar el control y mejorar tu salud!
    `,
    hu: `
Az elhízás több, mint csak súlytöbblet — ez egy állapot, amely növeli a cukorbetegség, szívbetegségek, ízületi problémák és akár a mentális egészség kockázatát. A fő hozzájáruló tényezők közé tartoznak a magas kalóriatartalmú, tápanyagszegény ételek, amelyek sok cukrot és telített zsírt tartalmaznak, az ülő életmód, és néha a genetika. Ne aggódj — az okok megértése az első lépés az egészséged feletti kontroll visszanyeréséhez és javításához!
    `
  },
  quiz: {
    question: {
      en: "What contributes most to obesity?",
      es: "¿Qué contribuye más a la obesidad?",
      hu: "Mi járul leginkább hozzá az elhízáshoz?"
    },
    options: {
      en: [
        "Excess calories from nutrient-poor foods",
        "Drinking water",
        "Eating vegetables",
        "Genetics only"
      ],
      es: [
        "Calorías excesivas de alimentos pobres en nutrientes",
        "Beber agua",
        "Comer verduras",
        "Solo genética"
      ],
      hu: [
        "Tápanyagszegény ételekből származó túlzott kalóriabevitel",
        "Vízivás",
        "Zöldségevés",
        "Csak genetika"
      ]
    },
    answer: 0
  }
},

 /* 
  {
    issue: "Obesity",
    title: "Obesity: Understanding the Role of Diet",
    content: "Plant-based diets provide high-volume, low-calorie foods that fill your stomach without overloading your body with fat and sugar. Vegetables, fruits, whole grains, and legumes reduce calorie intake naturally while supplying fiber, antioxidants, and essential nutrients. Even small, consistent dietary changes can produce measurable weight loss and improve overall health!"
    ,
    quiz: {
      question: "How do plant-based diets help with obesity?",
      options: [
        "Increase saturated fat intake",
        "Reduce calorie intake while supplying nutrients",
        "Provide empty calories",
        "Have no effect"
      ],
      answer: 1
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Portion Control and Mindful Eating",
    content: "Portion control is a simple yet powerful tool in weight management. Even healthy foods can lead to weight gain if eaten in excess, so pay attention to hunger cues, serve smaller portions, eat slowly, and stop when satisfied. Mindful eating helps you enjoy food, feel full, and naturally control calories."
    ,
    quiz: {
      question: "What is an effective strategy to prevent overeating?",
      options: [
        "Eating as fast as possible",
        "Skipping meals",
        "Mindful eating and portion control",
        "Drinking only juice"
      ],
      answer: 2
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Practical Tips for Mindful Eating",
    content: "Use smaller plates, chew slowly, and savor each bite to reinforce fullness signals. Pair meals with water or herbal teas and avoid distractions like screens. These small habits make weight management easier and more enjoyable over time!"
    ,
    quiz: {
      question: "Which tip supports mindful eating?",
      options: [
        "Use smaller plates and eat slowly",
        "Eat quickly while watching TV",
        "Skip meals frequently",
        "Only drink sugary drinks"
      ],
      answer: 0
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Exercise — Your Weight Management Ally",
    content: "Physical activity is key for long-term weight control and overall health. Even walking, cycling, dancing, or stretching at home burns calories, improves metabolism, preserves muscle, and boosts mood. Combined with a plant-based diet, exercise accelerates fat loss and improves energy."
    ,
    quiz: {
      question: "How does exercise support weight management?",
      options: [
        "Increases fat storage",
        "Is unnecessary if you eat vegetables",
        "Reduces metabolism",
        "Burns calories, improves metabolism, and preserves muscle"
      ],
      answer: 3
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Reducing Processed Foods and Animal Products",
    content: "Processed foods and animal products are high in saturated fat, cholesterol, and empty calories, often leading to overeating. Replacing them with whole plant foods reduces calorie intake naturally, increases fiber, improves gut health, and lowers inflammation. Small swaps, like burgers for bean patties or cheese for avocado, can have a big impact!"
    ,
    quiz: {
      question: "Why replace animal products with plant foods?",
      options: [
        "Plant foods reduce calories, increase fiber, and promote satiety",
        "They are calorie-dense and cause weight gain",
        "They contain no nutrients",
        "They increase saturated fat intake"
      ],
      answer: 0
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Practical Plant-Based Swaps",
    content: "Swap burgers with bean patties, replace cheese with hummus or avocado, and snack on fruits instead of chips. These small, daily changes reduce calories and improve health markers like blood pressure, cholesterol, and blood sugar. Consistency is more important than perfection!"
    ,
    quiz: {
      question: "Which swap helps reduce calories and improve health?",
      options: [
        "Replace burgers with bean patties",
        "Add more processed cheese",
        "Snack on chips",
        "Drink soda"
      ],
      answer: 0
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Building Sustainable Habits",
    content: "Sustainable weight loss comes from small, long-term habit changes rather than extreme diets. Eat more vegetables, drink water, move daily, and cook at home when possible. Over time, these actions become automatic, making healthy weight maintenance effortless!"
    ,
    quiz: {
      question: "What is the key to sustainable weight loss?",
      options: [
        "Extreme diets",
        "Consistent healthy habits",
        "Skipping meals",
        "Eating only fruit for weeks"
      ],
      answer: 1
    }
  },
  {
    issue: "Obesity",
    title: "Obesity: Real-Life Success Stories",
    content: "Many people have transformed their lives through plant-based diets and lifestyle changes. One participant lost 12 kg in 12 weeks, improved blood sugar, increased energy, and maintained weight loss. These examples show that gradual, consistent changes are effective and sustainable!"
    ,
    quiz: {
      question: "What do success stories show about plant-based weight management?",
      options: [
        "Gradual, consistent plant-based choices lead to sustainable weight loss",
        "Extreme diets are the only way",
        "Weight cannot be reduced without surgery",
        "It’s impossible without medication"
      ],
      answer: 0
    }
  },

 */

// === DIGESTIVE ISSUES ===
{
  issue: "Digestive issues",
  title: {
    en: "Digestive issues: What Causes Digestive Problems?",
    es: "Problemas digestivos: ¿Qué causa problemas digestivos?",
    hu: "Emésztési problémák: Mi okozza az emésztési gondokat?"
  },
  content: {
    en: `
Digestive issues often arise from low-fiber diets, excess animal products, processed foods, and sedentary lifestyles. Meat and dairy can be harder to digest, slowing transit time and promoting inflammation. The good news: your gut responds quickly to plant-based changes and lifestyle improvements!
    `,
    es: `
Los problemas digestivos suelen surgir de dietas bajas en fibra, exceso de productos animales, alimentos procesados y un estilo de vida sedentario. La carne y los lácteos pueden ser más difíciles de digerir, ralentizando el tránsito intestinal y promoviendo la inflamación. ¡La buena noticia: tu intestino responde rápidamente a los cambios hacia alimentos de origen vegetal y mejoras en el estilo de vida!
    `,
    hu: `
Az emésztési problémák gyakran alacsony rosttartalmú étrendből, túl sok állati termékből, feldolgozott ételekből és ülő életmódból erednek. A hús és a tejtermékek nehezebben emészthetők, lassítják az emésztést és gyulladást okozhatnak. A jó hír: a bélrendszer gyorsan reagál a növényi alapú étrendre és az életmódbeli változtatásokra!
    `
  },
  quiz: {
    question: {
      en: "What is a common cause of digestive problems?",
      es: "¿Cuál es una causa común de problemas digestivos?",
      hu: "Mi az emésztési problémák gyakori oka?"
    },
    options: {
      en: [
        "Low-fiber diet and excess animal products",
        "Eating vegetables",
        "Drinking water",
        "Regular exercise"
      ],
      es: [
        "Dieta baja en fibra y exceso de productos animales",
        "Comer verduras",
        "Beber agua",
        "Hacer ejercicio regularmente"
      ],
      hu: [
        "Alacsony rosttartalmú étrend és túl sok állati termék",
        "Zöldségevés",
        "Vízivás",
        "Rendszeres testmozgás"
      ]
    },
    answer: 0
  }
},

 /*  
  {
    issue: "Digestive issues",
    title: "Digestive issues: Why a Plant-Based Diet Helps",
    content: "Plant-based diets are naturally high in fiber, water, and micronutrients, which support smooth digestion and feed beneficial gut bacteria. They reduce inflammation and help food move efficiently through your digestive tract. Even small swaps, like replacing meat with beans, can make a noticeable difference within days!"
    ,
    quiz: {
      question: "How do plant-based diets support digestion?",
      options: [
        "Increase inflammation",
        "High in fiber and micronutrients to support digestion",
        "Slow digestion",
        "Reduce nutrient absorption"
      ],
      answer: 1
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Fiber — Your Digestive Hero",
    content: "Fiber adds bulk to stool, promotes regular bowel movements, and feeds beneficial gut bacteria. Soluble fiber slows digestion and balances blood sugar, while insoluble fiber adds bulk and prevents constipation. Gradually increasing fiber intake and drinking plenty of water keeps your gut happy and avoids discomfort!"
    ,
    quiz: {
      question: "What is one benefit of fiber for digestion?",
      options: [
        "It spikes blood sugar",
        "It decreases gut bacteria",
        "It adds bulk to stool and promotes regular bowel movements",
        "It causes constipation"
      ],
      answer: 2
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Gradually Boost Your Fiber Intake",
    content: "Most people get far less than the recommended 25–30 grams of fiber per day. Add fiber slowly to avoid bloating — start with beans in salads, oats for breakfast, or fruit as a snack. Your gut microbiome will thank you, and digestion will improve naturally!"
    ,
    quiz: {
      question: "Why should fiber be increased gradually?",
      options: [
        "To reduce nutrient absorption",
        "To slow digestion",
        "It doesn’t matter how fast you increase fiber",
        "To prevent digestive discomfort and bloating"
      ],
      answer: 3
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Probiotics — Feeding Your Microbiome",
    content: "Probiotics are beneficial bacteria that support digestion, immune function, and reduce inflammation. Plant-based sources include sauerkraut, kimchi, miso, tempeh, and plant-based yogurts with live cultures. Just a small serving daily can help your gut thrive!"
    ,
    quiz: {
      question: "Which foods are good sources of probiotics?",
      options: [
        "Sauerkraut, kimchi, and plant yogurt",
        "Processed meats",
        "Chips and fries",
        "Fried chicken"
      ],
      answer: 0
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Avoiding Gut Irritants",
    content: "Certain foods can worsen bloating, gas, and inflammation. Excess meat, dairy, highly processed foods, refined sugar, and fried foods are common culprits. Swapping them for whole plant foods improves gut motility, reduces inflammation, and creates a friendly environment for beneficial bacteria."
    ,
    quiz: {
      question: "Which foods should be reduced to improve digestion?",
      options: [
        "Vegetables and fruits",
        "Excess meat, dairy, and processed foods",
        "Whole grains and legumes",
        "Water and herbal teas"
      ],
      answer: 1
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Hydration and Movement",
    content: "Water helps fiber move through the gut, supports nutrient absorption, and prevents constipation. Physical activity, like walking after meals, yoga, or stretching, stimulates digestion and reduces bloating. Pair hydration and movement with a plant-based diet for maximum gut benefits!"
    ,
    quiz: {
      question: "How do hydration and movement support digestive health?",
      options: [
        "They slow digestion and increase bloating",
        "They help fiber move through the gut and stimulate digestion",
        "They increase LDL cholesterol",
        "They are unrelated to gut health"
      ],
      answer: 1
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Small Changes, Big Improvements",
    content: "Even a few meals per week free from animal products and processed foods can reduce discomfort and improve energy. Add fermented foods, plenty of fiber, and drink water consistently. Your gut responds quickly, and small changes add up to big results!"
    ,
    quiz: {
      question: "What small changes can improve gut health?",
      options: [
        "Eating more processed foods",
        "Drinking sugary beverages",
        "Adding fiber, fermented foods, and water",
        "Increasing fried foods"
      ],
      answer: 2
    }
  },
  {
    issue: "Digestive issues",
    title: "Digestive issues: Real-Life Gut Transformations",
    content: "Many people notice dramatic improvements after switching to a plant-focused diet. Within weeks, bloating decreases, stool becomes regular, and energy improves. Every plant-based meal, glass of water, and gentle walk supports your gut’s healing and overall well-being!"
    ,
    quiz: {
      question: "What happens after switching to a plant-based diet?",
      options: [
        "Improved digestion and less bloating",
        "Worse digestion",
        "No change",
        "Increased bloating"
      ],
      answer: 0
    }
  },


*/


// === INFLAMMATION OR SWELLING ===

  {
  issue: "Inflammation or swelling",
  title: {
    en: "Inflammation: What Causes Chronic Inflammation?",
    es: "Inflamación: ¿Qué causa la inflamación crónica?",
    hu: "Gyulladás: Mi okozza a krónikus gyulladást?"
  },
  content: {
    en: `
Chronic inflammation happens when your body’s immune response stays active for too long. Major triggers include excess saturated fat from meat and dairy, processed foods, and refined sugar. The good news: your body can calm inflammation with simple, plant-based changes!
    `,
    es: `
La inflamación crónica ocurre cuando la respuesta inmune de tu cuerpo permanece activa durante demasiado tiempo. Los principales desencadenantes incluyen el exceso de grasas saturadas de la carne y los lácteos, alimentos procesados y azúcar refinada. ¡La buena noticia: tu cuerpo puede reducir la inflamación con cambios simples basados en plantas!
    `,
    hu: `
A krónikus gyulladás akkor alakul ki, amikor a szervezet immunválasza túl hosszú ideig aktív marad. A fő kiváltó okok közé tartozik a húsból és tejtermékből származó túlzott telített zsír, a feldolgozott ételek és a finomított cukor. A jó hír: a szervezet egyszerű, növényi alapú változtatásokkal képes csökkenteni a gyulladást!
    `
  },
  quiz: {
    question: {
      en: "What commonly triggers chronic inflammation?",
      es: "¿Qué desencadena comúnmente la inflamación crónica?",
      hu: "Mi váltja ki gyakran a krónikus gyulladást?"
    },
    options: {
      en: [
        "Excess saturated fat, processed foods, and sugar",
        "Eating leafy greens",
        "Drinking water",
        "Daily exercise"
      ],
      es: [
        "Exceso de grasas saturadas, alimentos procesados y azúcar",
        "Comer verduras de hoja verde",
        "Beber agua",
        "Hacer ejercicio diario"
      ],
      hu: [
        "Túlzott telített zsír, feldolgozott ételek és cukor",
        "Zöld leveles zöldségek fogyasztása",
        "Vízivás",
        "Napi testmozgás"
      ]
    },
    answer: 0
  }
},

 /*  
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Plant-Based Foods to Calm the Fire",
    content: "Plant foods are rich in antioxidants and phytonutrients that reduce inflammation naturally. Berries, leafy greens, nuts, seeds, and colorful vegetables help protect tissues, calm your immune system, and reduce swelling. Even small swaps, like adding turmeric to meals, make a measurable difference over time!"
    ,
    quiz: {
      question: "Which foods help reduce inflammation?",
      options: [
        "Processed sugar and fried food",
        "Red meat and sausages",
        "Berries, leafy greens, and nuts",
        "Cheese and butter"
      ],
      answer: 2
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Avoiding Pro-Inflammatory Foods",
    content: "Certain foods trigger inflammation and oxidative stress. Processed foods, fried meals, red and processed meats, sugary drinks, and refined carbs are common culprits. Replacing them with whole plant foods reduces systemic inflammation and protects organs from long-term damage."
    ,
    quiz: {
      question: "Which foods should be reduced to prevent inflammation?",
      options: [
        "Leafy greens and berries",
        "Whole grains",
        "Legumes and nuts",
        "Processed foods, sugar, and refined carbs"
      ],
      answer: 3
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Easy Swaps for a Calmer Body",
    content: "You don’t have to overhaul your diet overnight. Swap fried chicken with roasted chickpeas or tofu, soda with sparkling water or herbal tea, and processed meats with lentils, beans, or mushrooms. Even small, gradual changes improve inflammation markers within weeks!"
    ,
    quiz: {
      question: "What small dietary swaps can help reduce inflammation?",
      options: [
        "Replace fried and processed foods with plant-based options",
        "Eat more processed snacks",
        "Drink more soda",
        "Increase fried foods"
      ],
      answer: 0
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Omega-3s — Your Plant-Based Anti-Inflammatory Fats",
    content: "Omega-3 fatty acids help reduce swelling, support heart health, and improve joint function. Plant sources include flaxseeds, chia seeds, walnuts, hemp seeds, and algal oil. Sprinkle them on meals or enjoy as snacks to calm inflammation and balance your body naturally!"
    ,
    quiz: {
      question: "Which plant foods are good sources of anti-inflammatory omega-3s?",
      options: [
        "Cheese, butter, and red meat",
        "Chips and soda",
        "Flaxseeds, chia seeds, walnuts",
        "White bread and pastries"
      ],
      answer: 2
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Lifestyle Habits That Make a Difference",
    content: "Diet alone isn’t enough — lifestyle choices greatly influence inflammation. Moderate exercise, stress management, and quality sleep all help. Walking, yoga, meditation, and journaling lower inflammatory markers and support a calmer, healthier body."
    ,
    quiz: {
      question: "Which lifestyle factor increases inflammation?",
      options: [
        "Chronic stress",
        "Exercise",
        "Adequate sleep",
        "Eating berries and greens"
      ],
      answer: 0
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Daily Habits to Keep Your Body Calm",
    content: "Small, consistent habits amplify the anti-inflammatory effect. Add colorful vegetables to meals, snack on nuts, drink plenty of water, and move your body daily. These small steps work together to reduce chronic swelling and pain over time."
    ,
    quiz: {
      question: "What daily habits support anti-inflammatory effects?",
      options: [
        "Drinking soda daily",
        "Eating colorful vegetables, nuts, hydrating, and moving",
        "Skipping vegetables",
        "Sleeping less than 5 hours"
      ],
      answer: 1
    }
  },
  {
    issue: "Inflammation or swelling",
    title: "Inflammation: Real-Life Anti-Inflammatory Success",
    content: "Many people notice dramatic reductions in joint pain and swelling after switching to plant-based anti-inflammatory foods. Within weeks, energy and mobility improve, showing that even chronic inflammation can be calmed naturally. Each plant-powered meal and mindful habit contributes to a healthier, calmer body!"
    ,
    quiz: {
      question: "What did the participant experience after switching to an anti-inflammatory plant-based diet?",
      options: [
        "Increased inflammation",
        "No change",
        "Reduced joint pain and swelling",
        "Worse mobility"
      ],
      answer: 2
    }
  },

*/



// === FATIGUE ===
{
  issue: "Fatigue",
  title: {
    en: "Fatigue: Why You Feel Tired — The Hidden Causes",
    es: "Fatiga: Por qué te sientes cansado — Las causas ocultas",
    hu: "Fáradtság: Miért érzed magad kimerültnek — A rejtett okok"
  },
  content: {
    en: `
Feeling tired all the time? Fatigue can come from poor nutrition, stress, or lack of key nutrients. Diets high in meat, dairy, and processed foods often miss fiber, vitamins, and antioxidants, leaving your body low on real fuel. But good news — your energy can bounce back with smart changes!
    `,
    es: `
¿Te sientes cansado todo el tiempo? La fatiga puede deberse a una mala alimentación, al estrés o a la falta de nutrientes clave. Las dietas altas en carne, lácteos y alimentos procesados suelen carecer de fibra, vitaminas y antioxidantes, dejando a tu cuerpo con poca energía real. ¡Pero buenas noticias: tu energía puede recuperarse con cambios inteligentes!
    `,
    hu: `
Állandóan fáradtnak érzed magad? A fáradtság rossz táplálkozásból, stresszből vagy fontos tápanyagok hiányából adódhat. A húsban, tejtermékekben és feldolgozott ételekben gazdag étrend gyakran hiányos rostban, vitaminokban és antioxidánsokban, így a szervezet kevés valódi üzemanyagot kap. A jó hír: okos változtatásokkal visszanyerheted az energiádat!
    `
  },
  quiz: {
    question: {
      en: "What can cause persistent fatigue?",
      es: "¿Qué puede causar fatiga persistente?",
      hu: "Mi okozhat tartós fáradtságot?"
    },
    options: {
      en: [
        "Drinking water and resting",
        "Nutrient deficiencies and processed foods",
        "Eating fruits and vegetables",
        "Meditation and yoga"
      ],
      es: [
        "Beber agua y descansar",
        "Deficiencias de nutrientes y alimentos procesados",
        "Comer frutas y verduras",
        "Meditación y yoga"
      ],
      hu: [
        "Vízivás és pihenés",
        "Tápanyaghiány és feldolgozott ételek",
        "Gyümölcs- és zöldségfogyasztás",
        "Meditáció és jóga"
      ]
    },
    answer: 1
  }
},

 /*  
  {
    issue: "Fatigue",
    title: "Fatigue: Power Up with Plant Energy",
    content: "Plant-based foods deliver clean, steady energy! Complex carbs from whole grains fuel you gradually, while iron, magnesium, and B vitamins help your cells create energy. Every colorful meal gives your body the boost it’s been asking for.",
    quiz: {
      question: "Which nutrients support steady energy levels?",
      options: [
        "Sugar and saturated fat",
        "Salt and cholesterol",
        "Iron, magnesium, and B vitamins",
        "Caffeine and soda"
      ],
      answer: 2
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Nutrient-Dense Superstars",
    content: "Spinach, lentils, chickpeas, nuts, and seeds — these are your energy champions! They pack iron for oxygen flow, magnesium for muscle function, and B12 (from fortified foods or supplements) for brain power. Within 1–2 weeks of switching, people often feel lighter, sharper, and more alive.",
    quiz: {
      question: "Which plant foods help boost energy?",
      options: [
        "Lentils, spinach, and nuts",
        "White bread and cheese",
        "Bacon and eggs",
        "Pastries and soda"
      ],
      answer: 0
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Hydration — The Simplest Energy Trick",
    content: "Sometimes fatigue is just dehydration in disguise! Water helps deliver nutrients to your cells and keeps your mind alert. Eat juicy fruits, sip water throughout the day, and limit coffee or sugary drinks that sneakily dehydrate you.",
    quiz: {
      question: "How does staying hydrated help energy?",
      options: [
        "It increases dehydration",
        "It lowers focus",
        "It causes sugar crashes",
        "It supports nutrient transport and prevents tiredness"
      ],
      answer: 3
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Slow and Steady Carbs Win the Race",
    content: "Refined carbs give you a quick energy spike — then a crash! Whole grains, beans, and sweet potatoes release energy slowly and keep your blood sugar steady. Combine them with veggies and healthy fats for all-day balance.",
    quiz: {
      question: "Which foods help maintain steady energy?",
      options: [
        "Whole grains, legumes, and sweet potatoes",
        "Candy and pastries",
        "Processed meats",
        "White bread and butter"
      ],
      answer: 0
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: The Caffeine Balance — Use It, Don’t Depend on It",
    content: "A coffee boost is fine, but too much caffeine can mess with sleep and energy rhythm. Try swapping an afternoon coffee for green tea or herbal infusions. Your body loves stable energy — not rollercoaster highs and lows!",
    quiz: {
      question: "What’s a healthy way to handle caffeine?",
      options: [
        "Drink as much coffee as possible",
        "Skip water completely",
        "Drink moderate amounts and avoid dependence",
        "Only rely on energy drinks"
      ],
      answer: 2
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Sleep and Recovery — Your Natural Recharge",
    content: "No diet can fix tiredness if you don’t rest! Sleep rebuilds your energy systems and balances hormones. Aim for 7–9 hours nightly and stick to a sleep routine — your body will thank you every morning.",
    quiz: {
      question: "Why is sleep vital for energy?",
      options: [
        "It increases fatigue",
        "It helps your body recover and balance hormones",
        "It burns all your nutrients",
        "It has no effect on energy"
      ],
      answer: 1
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Stress and Movement — The Energy Duo",
    content: "Stress burns through your energy reserves fast! Try walking, yoga, or meditation to recharge your mind. Regular movement boosts circulation and helps you feel awake without relying on sugar or caffeine.",
    quiz: {
      question: "What helps reduce fatigue from stress?",
      options: [
        "Movement, yoga, and relaxation",
        "More caffeine",
        "Skipping breakfast",
        "Less sleep"
      ],
      answer: 0
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Morning Routine Reset",
    content: "Start your day with a tall glass of water, a stretch, and a wholesome breakfast — like oats with fruits and nuts. You’ll stabilize your energy early and skip the mid-morning crash. Mornings can set the tone for your entire day!",
    quiz: {
      question: "What helps prevent morning fatigue?",
      options: [
        "Skipping breakfast",
        "Drinking only coffee",
        "Sleeping all morning",
        "A balanced breakfast, hydration, and light movement"
      ],
      answer: 3
    }
  },
  {
    issue: "Fatigue",
    title: "Fatigue: Real-Life Energy Transformation",
    content: "One participant swapped meat-heavy meals for beans, veggies, and grains, drank more water, and walked daily. Within 3 weeks, afternoon crashes disappeared, mood lifted, and energy soared! With small, consistent steps, you can feel it too — energized, clear, and ready for anything.",
    quiz: {
      question: "What was the main result of a plant-based lifestyle change?",
      options: [
        "Energy increased and mood improved",
        "Fatigue worsened",
        "No change occurred",
        "Energy decreased"
      ],
      answer: 0
    }
  },

*/

// === CANCER RISK ===
{
  issue: "Cancer risk",
  title: {
    en: "Cancer risk: What Causes Cancer — The Basics",
    es: "Riesgo de cáncer: Qué causa el cáncer — Lo básico",
    hu: "Rák kockázata: Mi okozza a rákot — Alapok"
  },
  content: {
    en: `
Cancer develops when cells grow uncontrollably and stop following the body’s normal rules.  
While genetics play a part, most cancer risk comes from lifestyle and environment — what we eat, breathe, and do every day.  
The good news? We have power! By making small, smart changes, we can lower our risk and strengthen our body’s natural defenses.
    `,
    es: `
El cáncer se desarrolla cuando las células crecen sin control y dejan de seguir las reglas normales del cuerpo.  
Aunque la genética influye, la mayor parte del riesgo de cáncer proviene del estilo de vida y el entorno: lo que comemos, respiramos y hacemos cada día.  
¿La buena noticia? ¡Tenemos poder! Con pequeños cambios inteligentes, podemos reducir nuestro riesgo y fortalecer las defensas naturales de nuestro cuerpo.
    `,
    hu: `
A rák akkor alakul ki, amikor a sejtek ellenőrizetlenül nőnek és nem követik a szervezet normális szabályait.  
Bár a genetika szerepet játszik, a rák kockázatának nagy része az életmódtól és a környezettől függ — attól, mit eszünk, lélegzünk és teszünk nap mint nap.  
A jó hír? Van hatalmunk! Apró, okos változtatásokkal csökkenthetjük a kockázatot és erősíthetjük a testünk természetes védelmi rendszerét.
    `
  },
  quiz: {
    question: {
      en: "What mainly influences cancer risk besides genetics?",
      es: "¿Qué influye principalmente en el riesgo de cáncer además de la genética?",
      hu: "Mi befolyásolja leginkább a rák kockázatát a genetika mellett?"
    },
    options: {
      en: ["Lifestyle and environment", "Random chance only", "Age alone", "None of the above"],
      es: ["Estilo de vida y entorno", "Solo el azar", "Solo la edad", "Ninguna de las anteriores"],
      hu: ["Életmód és környezet", "Csak a véletlen", "Csak az életkor", "Egyik sem"]
    },
    answer: 0
  }
},

 /*  

{
  issue: "Cancer risk",
  title: "Cancer risk: The Role of Diet — Fuel or Fire?",
  content: `
Our diet can either protect us or raise our risk.  
Eating lots of red and processed meat, dairy, fried foods, and sugar adds stress and inflammation to the body.  
Meanwhile, plant-based foods rich in fiber, vitamins, and antioxidants act like a built-in cleaning and repair system — protecting cells and lowering cancer risk.
  `,
  quiz: {
    question: "Which foods increase cancer risk?",
    options: [
      "Red and processed meats, fried foods, and sugar",
      "Whole grains and vegetables",
      "Berries and legumes",
      "Nuts and seeds"
    ],
    answer: 0
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Antioxidants — Your Cell’s Superheroes",
  content: `
Antioxidants defend your body from free radicals — tiny unstable molecules that damage DNA.  
Foods like berries, leafy greens, broccoli, and bell peppers are full of these protective compounds.  
Adding colorful veggies and fruits to every meal keeps your cells safe and your energy up — think of it as daily armor for your body.
  `,
  quiz: {
    question: "What do antioxidants do?",
    options: [
      "Increase inflammation",
      "Protect cells from DNA damage",
      "Raise blood sugar levels",
      "Cause fatigue"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Fiber — Nature’s Detox Power",
  content: `
Fiber keeps your digestion smooth and helps remove toxins from your body.  
It also feeds friendly gut bacteria that fight inflammation and protect the colon.  
Whole grains, beans, fruits, and veggies are your best allies — and the more variety, the better your gut and immune system work!
  `,
  quiz: {
    question: "How does fiber reduce cancer risk?",
    options: [
      "It slows down digestion completely",
      "It increases blood sugar",
      "It removes toxins and supports gut bacteria",
      "It has no effect"
    ],
    answer: 2
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: The Meat Connection — Why Cutting Back Helps",
  content: `
Processed and red meats contain compounds that can damage DNA when cooked or preserved.  
Even small swaps — like trading sausages for lentils or tofu — make a difference.  
Think of every plant-based meal as a little act of prevention (and kindness to your body).
  `,
  quiz: {
    question: "Why should we limit red and processed meat?",
    options: [
      "It lacks flavor",
      "It damages DNA and increases cancer risk",
      "It contains antioxidants",
      "It improves gut bacteria"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Sugar, Alcohol, and Inflammation",
  content: `
Excess sugar and alcohol fuel inflammation and can raise hormone levels that encourage cancer cell growth.  
Drinking water, herbal teas, and eating fruit for sweetness are easy swaps that make your body happier.  
Balance is key — your body thrives when it’s fueled with natural, nourishing foods.
  `,
  quiz: {
    question: "What effect do excess sugar and alcohol have on cancer risk?",
    options: [
      "They lower inflammation",
      "They have no impact",
      "They provide antioxidants",
      "They fuel inflammation and cell growth"
    ],
    answer: 3
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: The Power of Plants — Everyday Protection",
  content: `
Plant foods aren’t just nutritious — they’re powerful protectors!  
Phytonutrients in vegetables, fruits, nuts, and legumes help neutralize harmful compounds before they can cause trouble.  
Fill your plate with color — the more variety, the more your body thanks you.
  `,
  quiz: {
    question: "What do phytonutrients from plants do?",
    options: [
      "Cause DNA mutations",
      "Protect cells from damage and disease",
      "Add empty calories",
      "Reduce fiber absorption"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Movement, Sleep, and Stress — The Hidden Trio",
  content: `
Healthy habits go beyond food!  
Regular exercise, enough sleep, and stress reduction boost your immune system and lower inflammation.  
Just a brisk walk, deep breathing, or a good night’s sleep can make your body more resilient against chronic diseases like cancer.
  `,
  quiz: {
    question: "How do lifestyle habits like sleep and exercise affect cancer risk?",
    options: [
      "They strengthen the immune system and reduce inflammation",
      "They weaken the immune system",
      "They have no connection",
      "They increase DNA damage"
    ],
    answer: 0
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: Real-Life Stories — Change That Inspires",
  content: `
People who adopt more plant-based meals often see big benefits: better energy, improved digestion, and lower inflammation.  
One person swapped 3 meat-heavy dinners for veggie bowls weekly — within months, their energy soared and inflammation dropped.  
Small steps lead to real transformation — and your future self will thank you for it!
  `,
  quiz: {
    question: "What’s the key lesson from real-life success stories?",
    options: [
      "Only strict diets work",
      "Small, consistent plant-based changes reduce cancer risk",
      "Cancer risk never changes",
      "Supplements are the only answer"
    ],
    answer: 1
  }
},
{
  issue: "Cancer risk",
  title: "Cancer risk: You’re in Control — Protect Your Future",
  content: `
You don’t need perfection — just progress.  
Every time you choose plants over processed food, your body gets stronger and your cells thank you.  
Prevention is powerful, and your daily choices truly matter. Let’s make each meal a step toward long, vibrant health!
  `,
  quiz: {
    question: "What’s the most powerful step in lowering cancer risk?",
    options: [
      "Relying on luck",
      "Avoiding all food groups",
      "Making daily healthy, plant-based choices",
      "Only using supplements"
    ],
    answer: 2
  }
}
  
*/

]
};

// =======================
// INGREDIENTS
// =======================
window.ingredientInfo = {
  tofu: {
    name: {
      en: "Tofu",
      es: "Tofu",
      hu: "Tofu"
    },
    description: {
      en: "Tofu is perfect to replace eggs in many dishes. Mild in flavor, it absorbs spices well, making it very versatile.",
      es: "El tofu es perfecto para sustituir los huevos en muchos platos. Su sabor suave absorbe bien las especias.",
      hu: "A tofu kiváló tojáshelyettesítő sok ételben. Semleges ízű, jól felszívja a fűszereket."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Tofu</th><th>Egg</th></tr>
          <tr><td>Calories</td><td>76 kcal / 100g</td><td>155 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>8 g</td><td>13 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>373 mg</td></tr>
          <tr><td>Calcium</td><td>350 mg</td><td>56 mg</td></tr>
          <tr><td>Fat</td><td>4 g</td><td>11 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Tofu</th><th>Huevo</th></tr>
          <tr><td>Calorías</td><td>76 kcal / 100g</td><td>155 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>8 g</td><td>13 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>373 mg</td></tr>
          <tr><td>Calcio</td><td>350 mg</td><td>56 mg</td></tr>
          <tr><td>Grasa</td><td>4 g</td><td>11 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Tofu</th><th>Tojás</th></tr>
          <tr><td>Kalória</td><td>76 kcal / 100g</td><td>155 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>8 g</td><td>13 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>373 mg</td></tr>
          <tr><td>Kalcium</td><td>350 mg</td><td>56 mg</td></tr>
          <tr><td>Zsír</td><td>4 g</td><td>11 g</td></tr>
        </table>
      `
    }
  },

  seitan: {
    name: {
      en: "Seitan",
      es: "Seitán",
      hu: "Szejtán"
    },
    description: {
      en: "Seitan is a chewy, meat-like wheat protein perfect to replace chicken or beef in recipes.",
      es: "El seitán es una proteína de trigo con textura carnosa, ideal para sustituir pollo o ternera.",
      hu: "A szejtán búzafehérjéből készült, húsos állagú alapanyag, kiváló húshelyettesítő."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Seitan</th><th>Chicken Breast</th></tr>
          <tr><td>Calories</td><td>120 kcal</td><td>165 kcal</td></tr>
          <tr><td>Protein</td><td>25 g</td><td>31 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Iron</td><td>4 mg</td><td>1 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Seitán</th><th>Pechuga de pollo</th></tr>
          <tr><td>Calorías</td><td>120 kcal</td><td>165 kcal</td></tr>
          <tr><td>Proteína</td><td>25 g</td><td>31 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Hierro</td><td>4 mg</td><td>1 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Szejtán</th><th>Csirkemell</th></tr>
          <tr><td>Kalória</td><td>120 kcal</td><td>165 kcal</td></tr>
          <tr><td>Fehérje</td><td>25 g</td><td>31 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Vas</td><td>4 mg</td><td>1 mg</td></tr>
        </table>
      `
    }
  },
  lentils: {
    name: { en: "Lentils", es: "Lentejas", hu: "Lencse" },
    description: {
      en: "Lentils are a protein-packed legume, perfect to replace ground beef in stews, chili, and other hearty dishes.",
      es: "Las lentejas son una legumbre rica en proteínas, perfectas para sustituir carne picada en guisos y chili.",
      hu: "A lencse fehérjében gazdag hüvelyes, kiváló darált hús helyettesítésére pörköltekben, chili-ben és más ételekben."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Lentils (dry)</th><th>Ground Beef</th></tr>
          <tr><td>Calories</td><td>353 kcal / 100g dry</td><td>250 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>25 g</td><td>26 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fiber</td><td>11 g</td><td>0 g</td></tr>
          <tr><td>Iron</td><td>7.5 mg</td><td>2.6 mg</td></tr>
        </table>
        <p><em>Note: Protein and calories reduce after cooking due to water absorption, but lentils remain a hearty plant-based option.</em></p>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Lentejas (seco)</th><th>Carne molida</th></tr>
          <tr><td>Calorías</td><td>353 kcal / 100g seco</td><td>250 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>25 g</td><td>26 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fibra</td><td>11 g</td><td>0 g</td></tr>
          <tr><td>Hierro</td><td>7.5 mg</td><td>2.6 mg</td></tr>
        </table>
        <p><em>Nota: La proteína y las calorías disminuyen tras cocinar, pero las lentejas siguen siendo una opción abundante basada en plantas.</em></p>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Lencse (száraz)</th><th>Darált marhahús</th></tr>
          <tr><td>Kalória</td><td>353 kcal / 100g száraz</td><td>250 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>25 g</td><td>26 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Rost</td><td>11 g</td><td>0 g</td></tr>
          <tr><td>Vas</td><td>7.5 mg</td><td>2.6 mg</td></tr>
        </table>
        <p><em>Megjegyzés: A főzés során a fehérje és kalória csökken a vízfelvétel miatt, de a lencse továbbra is tápláló növényi alapú lehetőség.</em></p>
      `
    }
  },

  beans: {
    name: { en: "Beans", es: "Frijoles", hu: "Bab" },
    description: {
      en: "Beans are incredibly high in protein, perfect to replace beef in meals like chili or stir-fries.",
      es: "Los frijoles son muy ricos en proteínas, perfectos para reemplazar carne en chili o salteados.",
      hu: "A bab rendkívül fehérjedús, kiváló marhahús helyettesítésére chili-ben vagy wokételekben."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Beans</th><th>Beef</th></tr>
          <tr><td>Calories</td><td>446 kcal / 100g dry</td><td>250 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>36 g</td><td>26 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fiber</td><td>9 g</td><td>0 g</td></tr>
          <tr><td>Iron</td><td>15.7 mg</td><td>2.6 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Frijoles</th><th>Carne</th></tr>
          <tr><td>Calorías</td><td>446 kcal / 100g seco</td><td>250 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>36 g</td><td>26 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Fibra</td><td>9 g</td><td>0 g</td></tr>
          <tr><td>Hierro</td><td>15.7 mg</td><td>2.6 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Bab</th><th>Marhahús</th></tr>
          <tr><td>Kalória</td><td>446 kcal / 100g száraz</td><td>250 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>36 g</td><td>26 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Rost</td><td>9 g</td><td>0 g</td></tr>
          <tr><td>Vas</td><td>15.7 mg</td><td>2.6 mg</td></tr>
        </table>
      `
    }
  },

  tempeh: {
    name: { en: "Tempeh", es: "Tempeh", hu: "Tempeh" },
    description: {
      en: "Tempeh is fermented soy, perfect to replace bacon or other processed meats with extra gut benefits.",
      es: "El tempeh es soja fermentada, ideal para reemplazar tocino u otras carnes procesadas, con beneficios para el intestino.",
      hu: "A tempeh fermentált szója, tökéletes szalonna vagy feldolgozott húsok helyettesítésére, extra bélflóra előnyökkel."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Tempeh (per 200 kcal)</th><th>Bacon (per 200 kcal)</th></tr>
          <tr><td>Protein</td><td>19 g</td><td>13.6 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>33 mg</td></tr>
          <tr><td>Fat</td><td>11 g</td><td>15.5 g</td></tr>
          <tr><td>Fiber</td><td>1.5 g</td><td>0 g</td></tr>
        </table>
        <p><em>Comparison based on equal caloric intake (200 kcal) for a fairer nutritional perspective.</em></p>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Tempeh (por 200 kcal)</th><th>Tocino (por 200 kcal)</th></tr>
          <tr><td>Proteína</td><td>19 g</td><td>13.6 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>33 mg</td></tr>
          <tr><td>Grasa</td><td>11 g</td><td>15.5 g</td></tr>
          <tr><td>Fibra</td><td>1.5 g</td><td>0 g</td></tr>
        </table>
        <p><em>Comparación basada en igual aporte calórico (200 kcal) para una perspectiva más justa.</em></p>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Tempeh (200 kcal)</th><th>Szalonna (200 kcal)</th></tr>
          <tr><td>Fehérje</td><td>19 g</td><td>13.6 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>33 mg</td></tr>
          <tr><td>Zsír</td><td>11 g</td><td>15.5 g</td></tr>
          <tr><td>Rost</td><td>1.5 g</td><td>0 g</td></tr>
        </table>
        <p><em>Összehasonlítás azonos kalóriabevitel (200 kcal) alapján a fairabb nézőpontért.</em></p>
      `
    }
  },
  chickpeas: {
    name: { en: "Chickpeas", es: "Garbanzos", hu: "Csicseriborsó" },
    description: {
      en: "Chickpeas are ideal for replacing chicken or tuna in salads and stews, with plant-based protein and fiber.",
      es: "Los garbanzos son ideales para reemplazar pollo o atún en ensaladas y guisos, aportando proteína y fibra vegetal.",
      hu: "A csicseriborsó tökéletes csirke vagy tonhal helyettesítésére salátákban és pörköltekben, növényi fehérjével és rosttal."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Chickpeas</th><th>Chicken</th></tr>
          <tr><td>Calories</td><td>164 kcal / 100g cooked</td><td>165 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>7 g</td><td>31 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Fiber</td><td>7.6 g</td><td>0 g</td></tr>
          <tr><td>Iron</td><td>2.9 mg</td><td>1 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Garbanzos</th><th>Pollo</th></tr>
          <tr><td>Calorías</td><td>164 kcal / 100g cocido</td><td>165 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>7 g</td><td>31 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Fibra</td><td>7.6 g</td><td>0 g</td></tr>
          <tr><td>Hierro</td><td>2.9 mg</td><td>1 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Csicseriborsó</th><th>Csirke</th></tr>
          <tr><td>Kalória</td><td>164 kcal / 100g főtt</td><td>165 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>7 g</td><td>31 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>85 mg</td></tr>
          <tr><td>Rost</td><td>7.6 g</td><td>0 g</td></tr>
          <tr><td>Vas</td><td>2.9 mg</td><td>1 mg</td></tr>
        </table>
      `
    }
  },

  peaProtein: {
    name: { en: "Pea Protein", es: "Proteína de guisante", hu: "Borsófehérje" },
    description: {
      en: "Pea protein is a great alternative to whey or eggs for shakes and recipes, complete in essential amino acids.",
      es: "La proteína de guisante es una gran alternativa al suero o los huevos en batidos y recetas, completa en aminoácidos esenciales.",
      hu: "A borsófehérje kiváló alternatíva a tejsavó vagy tojás helyett turmixokban és receptekben, teljes esszenciális aminosavakban."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Pea Protein (30g scoop)</th><th>Egg (1 large)</th></tr>
          <tr><td>Calories</td><td>120 kcal</td><td>70 kcal</td></tr>
          <tr><td>Protein</td><td>20–25 g</td><td>6 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>186 mg</td></tr>
          <tr><td>Calcium</td><td>50 mg</td><td>28 mg</td></tr>
          <tr><td>Fat</td><td>1 g</td><td>5 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Proteína de guisante (30g)</th><th>Huevo (1 grande)</th></tr>
          <tr><td>Calorías</td><td>120 kcal</td><td>70 kcal</td></tr>
          <tr><td>Proteína</td><td>20–25 g</td><td>6 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>186 mg</td></tr>
          <tr><td>Calcio</td><td>50 mg</td><td>28 mg</td></tr>
          <tr><td>Grasa</td><td>1 g</td><td>5 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Borsófehérje (30g)</th><th>Tojás (1 db)</th></tr>
          <tr><td>Kalória</td><td>120 kcal</td><td>70 kcal</td></tr>
          <tr><td>Fehérje</td><td>20–25 g</td><td>6 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>186 mg</td></tr>
          <tr><td>Kalcium</td><td>50 mg</td><td>28 mg</td></tr>
          <tr><td>Zsír</td><td>1 g</td><td>5 g</td></tr>
        </table>
      `
    }
  },
  soyMilk: {
    name: { en: "Soy Milk", es: "Leche de soja", hu: "Szójatej" },
    description: {
      en: "Soy milk is a perfect dairy alternative, ideal to replace cow's milk in drinks and cereals.",
      es: "La leche de soja es una alternativa perfecta a la leche, ideal para reemplazar leche de vaca en bebidas y cereales.",
      hu: "A szójatej tökéletes tejhelyettesítő, ideális italokban és gabonapelyhekben a tehéntej helyett."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Soy Milk</th><th>Cow Milk</th></tr>
          <tr><td>Calories</td><td>33 kcal / 100ml</td><td>64 kcal / 100ml</td></tr>
          <tr><td>Protein</td><td>3 g</td><td>3.5 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>14 mg</td></tr>
          <tr><td>Calcium</td><td>120 mg</td><td>120 mg</td></tr>
          <tr><td>Fat</td><td>1.5 g</td><td>3.6 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Leche de soja</th><th>Leche de vaca</th></tr>
          <tr><td>Calorías</td><td>33 kcal / 100ml</td><td>64 kcal / 100ml</td></tr>
          <tr><td>Proteína</td><td>3 g</td><td>3.5 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>14 mg</td></tr>
          <tr><td>Calcio</td><td>120 mg</td><td>120 mg</td></tr>
          <tr><td>Grasa</td><td>1.5 g</td><td>3.6 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Szójatej</th><th>Tehéntej</th></tr>
          <tr><td>Kalória</td><td>33 kcal / 100ml</td><td>64 kcal / 100ml</td></tr>
          <tr><td>Fehérje</td><td>3 g</td><td>3.5 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>14 mg</td></tr>
          <tr><td>Kalcium</td><td>120 mg</td><td>120 mg</td></tr>
          <tr><td>Zsír</td><td>1.5 g</td><td>3.6 g</td></tr>
        </table>
      `
    }
  },

  texturizedSoy: {
    name: { en: "Texturized Soy", es: "Soja texturizada", hu: "Texturált szója" },
    description: {
      en: "TVP is a high-protein meat replacement, perfect for ground beef in burgers, tacos, or chili.",
      es: "La soja texturizada es un reemplazo de carne rico en proteínas, ideal para carne molida en hamburguesas, tacos o chili.",
      hu: "A texturált szója magas fehérjetartalmú húshelyettesítő, kiváló darált hús helyettesítésére hamburgerben, tacóban vagy chili-ben."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Texturized Soy</th><th>Beef</th></tr>
          <tr><td>Calories</td><td>200 kcal / 100g dry</td><td>250 kcal / 100g</td></tr>
          <tr><td>Protein</td><td>50 g</td><td>26 g</td></tr>
          <tr><td>Cholesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Iron</td><td>9 mg</td><td>2.6 mg</td></tr>
          <tr><td>Fat</td><td>1 g</td><td>15 g</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Soja texturizada</th><th>Carne</th></tr>
          <tr><td>Calorías</td><td>200 kcal / 100g seco</td><td>250 kcal / 100g</td></tr>
          <tr><td>Proteína</td><td>50 g</td><td>26 g</td></tr>
          <tr><td>Colesterol</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Hierro</td><td>9 mg</td><td>2.6 mg</td></tr>
          <tr><td>Grasa</td><td>1 g</td><td>15 g</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Texturált szója</th><th>Marhahús</th></tr>
          <tr><td>Kalória</td><td>200 kcal / 100g száraz</td><td>250 kcal / 100g</td></tr>
          <tr><td>Fehérje</td><td>50 g</td><td>26 g</td></tr>
          <tr><td>Koleszterin</td><td>0 mg</td><td>89 mg</td></tr>
          <tr><td>Vas</td><td>9 mg</td><td>2.6 mg</td></tr>
          <tr><td>Zsír</td><td>1 g</td><td>15 g</td></tr>
        </table>
      `
    }
  },

  broccoli: {
    name: { en: "Broccoli", es: "Brócoli", hu: "Brokkoli" },
    description: {
      en: "Broccoli is a super nutrient-rich vegetable, packed with vitamins and minerals, perfect to add to any meal.",
      es: "El brócoli es un vegetal muy rico en nutrientes, lleno de vitaminas y minerales, perfecto para cualquier plato.",
      hu: "A brokkoli tápanyagokban gazdag zöldség, vitaminokkal és ásványi anyagokkal, tökéletes minden ételhez."
    },
    nutrition: {
      en: `
        <table>
          <tr><th>Nutrient</th><th>Broccoli (~150 kcal)</th><th>Beef (~150 kcal)</th></tr>
          <tr><td>Protein</td><td>12 g</td><td>13 g</td></tr>
          <tr><td>Fiber</td><td>20 g</td><td>0 g</td></tr>
          <tr><td>Vitamin C</td><td>810 mg</td><td>0 mg</td></tr>
          <tr><td>Calcium</td><td>150 mg</td><td>18 mg</td></tr>
          <tr><td>Iron</td><td>5 mg</td><td>6 mg</td></tr>
        </table>
      `,
      es: `
        <table>
          <tr><th>Nutriente</th><th>Brócoli (~150 kcal)</th><th>Carne (~150 kcal)</th></tr>
          <tr><td>Proteína</td><td>12 g</td><td>13 g</td></tr>
          <tr><td>Fibra</td><td>20 g</td><td>0 g</td></tr>
          <tr><td>Vitamina C</td><td>810 mg</td><td>0 mg</td></tr>
          <tr><td>Calcio</td><td>150 mg</td><td>18 mg</td></tr>
          <tr><td>Hierro</td><td>5 mg</td><td>6 mg</td></tr>
        </table>
      `,
      hu: `
        <table>
          <tr><th>Tápanyag</th><th>Brokkoli (~150 kcal)</th><th>Marhahús (~150 kcal)</th></tr>
          <tr><td>Fehérje</td><td>12 g</td><td>13 g</td></tr>
          <tr><td>Rost</td><td>20 g</td><td>0 g</td></tr>
          <tr><td>C-vitamin</td><td>810 mg</td><td>0 mg</td></tr>
          <tr><td>Kalcium</td><td>150 mg</td><td>18 mg</td></tr>
          <tr><td>Vas</td><td>5 mg</td><td>6 mg</td></tr>
        </table>
      `
    }
  }
};