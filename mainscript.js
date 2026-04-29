//#region MULTILANGUAGE

const translations = {
  en: {
    //Loading
    loadingapp: "Loading...",
    //HomPage

  startCheck: "Start Daily Check-in",
  skipCheck: "Skip Daily Check-in",

    xpLabel: "XP to next level",
    mealArtBtn: "Meal-Art Contest",
    checkinBtn: "Daily Check-in",
    lessonPathBtn: "Lessons",
    recipesBtn: "Trending Recipes",
    youLabel: "You",
    andour: "and our ",
    communityLabel: "Community",
    animalsSavedLabel: "saved",
    forestSavedLabel: "saved",
    waterSavedLabel: "saved",
    co2SavedLabel: "reduced",
    animalsLabel: "animals",
    forestLabel: "m² of forests",
    waterLabel: "L of water",
    co2Label: "kg of CO₂",
    mealArtTitle: "Recent Winners:",
    homeChefTitle: "Home Chef",
    proKitchenTitle: "Pro Kitchen",
    recipeAM: "Recipe",
    recipePRO: "Recipe",
    recipeAvailable: "Recipe available",
    recipeUnavailable: "Recipe unavailable",
    petSays: "says...",
    profileBtn: "Profile",
    friendsBtn: "Friends",
    messagesBtn: "Messages",
    nutritiontable: "Nutrition Table",
    localBtn: "Local Community",
    forumBtn: "Anonymous Forum",
    mentorshipBtn: "Mentorship",
    leaderboardsBtn: "Leaderboards",
    achievementsPageBtn: "Achievements",
    shopBtn: "Shop",
    challengesBtn: "Challenges",
    recommendationsBtn: "Recommendations",
    sourcesBtn: "Sources",
    aboutUsBtn: "About Us",
    contactUsBtn: "Contact Us",
    settingsBtn: "Settings",
    userLevel: "🌍 Level:",
    userimpactsofar: "Your impact so far:",
    useranimals: "Animals saved",
    userforest: "m² Forest preserved",
    userwater: "Water saved",
    userco2: "kg of CO₂ reduced",

    //Mealart
mealArtHeaderTitle: "Meal Art Contest",
mealArtIntro: "Upload your meal art from Tuesday to Sunday. Voting is on Monday.",
uploadMyMealBtn: "Upload My Meal",
requestProKitchen: "Request Pro Kitchen access",
votenote: "It's a vote day! Pick your favorite!",
alreadyUploadedMsg: "You uploaded your meal this week, congratulations!",
participantsTab: "Current Participants",
pastWinnersTab: "Past Winners",
uploadYourMealTitle: "Upload Your Meal",
plantBasedRule: "Only plant-based meals are allowed!",
mealPhotoLabel: "Meal Photo",
recipeNote: "Fill all boxes to make your recipe available:",
recipeNameLabel: "Recipe Name",
prepTimeLabel: "Preparation Time",
ingredientsLabel: "Ingredients",
instructionsLabel: "Instructions",
submitMealBtn: "Submit Meal",
optional: "(optional)",

    //Learn Section
todayLessonLabel: "Your lesson for today:",
mealsQuestion: "How many fully plant-powered meals did you enjoy yesterday?",
mealOption1: "Oops! My plate betrayed me 😅",
mealOption2: "Some plant magic in my meals ✨",
mealOption3: "Plant-powered most of the day! 🌿",
mealOption4: "I was fully powered by plants! 🌱",
submitAndSupportBtnDCI: "▶️ Submit & Support +2🏅",
submitBtnDCI: "Submit",
learnTitle: "Learn",
pathAnimalsBtn: "For the Animals",
pathEarthBtn: "For the Earth",
pathHealthBtn: "For Health",
    
    //Recipes
recipesTitle: "Recipes",
openUploadBtn: "Upload Your Own Recipe",

    //Profile
myProfileTitle: "My Profile",
nameLabel: "Name:",
dietLabel: "Diet:",
goalsTitle: "Goals",
healthTitle: "Health Issues",
achievementsTitle: "Achievements",
buddyNameLabel: "Buddy's Name:",
editProfileBtn: "Edit profile",

editProfileTitle: "Edit My Profile",
usernameLabel: "Username:",
dietEditLabel: "Diet:",
changeProfilePhotoBtn: "Change Profile Photo",
editGoalsTitle: "Goals:",

goalOption1: "Protecting animals",
goalOption2: "Caring for the environment",
goalOption3: "Healthy living",
goalOption4: "Solving health issues",
goalOption5: "Boosting my performance as an athlete",

editHealthTitle: "Health Issues:",
healthOption1: "Heart disease",
healthOption2: "High cholesterol",
healthOption3: "High blood pressure",
healthOption4: "Type 2 diabetes",
healthOption5: "Obesity",
healthOption6: "Digestive issues",
healthOption7: "Inflammation or swelling",
healthOption8: "Fatigue",
healthOption9: "Concerned about cancer risk",

buddyNameEditLabel: "Buddy's Name:",
changePetPhotoBtn: "Change Buddy Photo",
saveProfileBtn: "💾 Save Profile",
   
dietOptionVegan: "Vegan",
dietOptionInTransition: "In Transition",
dietOptionVegetarian: "Vegetarian",
dietOptionPescatarian: "Pescatarian",
dietOptionFlexitarian: "Flexitarian",
dietOptionOmnivore: "Omnivore",

    //Friends
connectFriendBtnText: "Connect with a friend",
friendsTitleLabel: "Friends:",

    //Messages
  messagesTitle: "Chats",
  chatHeaderLabel: "Chat",
  messagePlaceholder: "Type a message...",
  messageCharCountLabel: "0/1000",
  sendMessageBtn: "Send",
  deleteChatBtn: "Clear Chat",
  blockUserBtn: "Block User",

    //Community
  findLocalCommunityLabel: "Find your local community",
  countryPlaceholder: "Select country",
  cityPlaceholder: "Select city",
  joinCommunityBtn: "Join Community",
  leaveCommunityBtn: "Leave Community",
  typeMessagePlaceholder: "Type a message...",
  sendBtn: "Send",
  communityChat: "Community Chat ▼",
  upcomingEventsHeader: "Upcoming Events ▼",
  createEventBtn: "Create Event",
  eventPlacePlaceholder: "Event place",
  eventDescriptionPlaceholder: "Description",
  submitEventBtn: "Submit Event",
  membersHeader: "Members ▼",
  localPartnersHeader: "Local Partners:",
  localBusinessBannerText: "Put your local business here!",
  contactUsLink: "Contact us",

  //Anon Forum
  forumQuoteText: '"That is the best of humanity: When we support each other. Not when we cancel each other out for past mistakes, but when we help each other to grow."',
  forumQuoteSource: '— Joaquin Phoenix, Oscars 2020',
  forumGuideline: 'Please share your thoughts kindly and help others grow 🧡',
  openTopicPlaceholder: 'Open a topic anonymously...',
  submitBtn: 'Submit',

  //Mentorship
  buddySystemHeader: "Mentors 🤝",
  ConnectWithAMentor: "Connect with someone who has been vegan longer for mentorship.",
  youAreAMentor: "You are a mentor",
  endMentorshipBtn: "End mentorships",
  mentorsTitle: "Mentors:",
  applyMentorBtn: "Apply to be a mentor",
  
  //LeaderBoards
  leaderboardsHeader: "Leaderboards",
  biggestImpactHeader: "Biggest Impact",
  mostXPHeader: "Most XP",
  biggestStreakHeader: "Biggest Streak",
  mostBadgeHeader: "Most Badge",

  //Achievements
  achievementsInfoText: "Earn achievements to unlock special titles that appear next to your name and are visible to the community. You can proudly display these rewards on your profile card to show off your progress and impact.",
    
  //Shop
  badgeCountText: "Your Badges: ",
  shopMethodsHeader: "How to get badges",
  watchAdBtn: "Watch an Ad",
  watchAdReward: "+2 badges and +3 XPs per ad",
  veganChallengesText: "Complete vegan challenges",
  streakText: "Keep your plant-based streak alive 🌿",

  //Challenges
  dailyXpTitle: "Daily Challenge — Earn 50 XP",
  dailyXpDesc: "Complete your daily goal by earning 50 XP today through lessons and activities.",
  dailyXpReward: "🏅 Reward: +3 Badges + 3 XPs",
  dailyXpClaimBtn: "Claim Reward",

  learnChallengeTitle: "📚 Learn Something New",
  learnChallengeDesc: "Complete a new lesson in every path today:",
  learnChallengeReward: "Reward: 🏅 +3 Badges +3 XPs",
  learnClaimBtn: "Claim Reward",

  mindfulChallengeTitle: "🧘 Take Care of Yourself",
  mindfulChallengeDesc: "Take 5 minutes for self-care. Meditate, stretch, or take a walk — the goal is to clear your mind, relax, and take deep, calm breaths.",
  mindfulChallengeReward: "Reward: 🏅 +5 Badge +5 XPs",
  mindfulStartBtn: "Start 5-Minute Timer",

  encourageChallengeTitle: "💖 Encourage Someone",
  encourageChallengeDesc: "Send a kind message to encourage a friend today!",
  chooseFriendLabel: "Choose a friend:",
  selectFriendOption: "Select a friend",
  yourMessageLabel: "Your message:",
  encourageReward: "Reward: 🏅 +2 Badge +2 XPs",
  sendEncourageBtn: "Send Message",
  encourageTemplateStart: "I've chosen you to encourage in my daily challenge.",
  encourageTemplateEnd: "Keep going 🌱",

  lessonAnimal: "Animal",
  lessonEarth: "Earth",
  lessonHealth: "Health",
  //Recommendations
recTitle: "📚 Recommendations",
recBooksTitle: "Books",
recBook1: "How Not to Die – <em>Dr. Michael Greger</em>",
recBook2: "Debunking Every Argument Against Veganism – <em>Danny Ishay</em>",
recBook3: "How to Argue with a Meat Eater and Always Win – <em>Ed Winters</em>",

recMoviesTitle: "Movies",
recMovie1: "Cowspiracy (Netflix, 2014) – Explores the environmental impact of animal agriculture.",
recMovie2: "The Game Changers (Netflix, 2018) – Focuses on plant-based diets for athletes and performance.",
recMovie3: "Earthlings (2005) – Powerful documentary on human use of animals.",
recMovie4: "Dominion (2018) – Investigates the treatment of animals in modern industries.",

recWebsitesTitle: "Websites",
recWebsite1: "Support and resources for trying veganism for a month (or longer!).",
recWebsite2: "Evidence-based information on plant-based nutrition.",

  //Subscriptions
subscriptionsTitle: "Memberships",
subscriptionsIntro: "Want to support us long-term and unlock extra rewards? Become a member! You’ll get XP boosts, badges, and special recognition.",
membershipTiersTitle: "🌟 Membership Tiers",

seedMemberTitle: "Seed Member 🌱",
seedMemberPrice: "€2 / month",
seedMemberBenefit1: "+10% XP boost on all activities & badges for donations",
seedMemberBenefit2: "Seed badge in profile",

sproutMemberTitle: "Sprout Member 🌿",
sproutMemberPrice: "€5 / month",
sproutMemberBenefit1: "+25% XP boost",
sproutMemberBenefit2: "Exclusive badge",

treeMemberTitle: "Tree Member 🌳",
treeMemberPrice: "€10 / month",
treeMemberBenefit1: "+50% XP boost",
treeMemberBenefit2: "Early access to new features",

forestMemberTitle: "Forest Member 🌲",
forestMemberPrice: "€20 / month",
forestMemberBenefit1: "+100% XP boost",
forestMemberBenefit2: "Highlighted spot on leaderboard",
forestMemberBenefit3: "Special recognition badge",

earthGuardianTitle: "Earth Guardian Member 🌍",
earthGuardianPrice: "€50 / month",
earthGuardianBenefit1: "+200% XP boost",
earthGuardianBenefit2: "VIP badge & profile highlight",

    //Sources
sourcesContentText: "...Sources content...",
subscriptionsBtn: "Memberships",

    //Aboutus
aboutGreeting: "Hi there 👋",
aboutText:
  "My name is Gábor — and this app is a small, heart-driven project created by me, guided by the belief that together we can make a difference for animals, people, and the planet. I started this journey to inspire conscious living, compassion, and connection — because I truly believe that even the smallest positive actions can ripple out and create real change. Thank you for being here ✨",
aboutFollowText: "Follow our journey on ",
aboutInstagram: "@app.elunify",
aboutEnding: "",

    //ContactUs
contactTitle: "Contact Us",
contactIntro: "We’re here to help! Choose a subject and tell us your message.",

contactSubjectLabel: "Subject:",
contactSubjectPlaceholder: "-- Select a subject --",
contactSubjectBug: "Report a bug",
contactBillingIssue: "Billing issue",
contactSubjectFeedback: "App feedback",
contactSubjectFeature: "Feature request",
contactSubjectCommunity: "Add a new city in communities",
contactSubjectOther: "Other",

contactMessageLabel: "Message:",
contactMessagePlaceholder: "Write your message here...",

sendContactMessageBtn: "Send message",

    //SystemSettings
settingsTitle: "Settings",

languageLabel: "Select language:",
langOptionEn: "English",
langOptionEs: "Spanish",
langOptionHu: "Hungarian",

saveLanguageBtn: "Save language",
languageInfo: "Changing the language will update your app interface immediately.",

logoutBtn: "Log out",
deleteProfileBtn: "🗑️ Delete profile",

    //PopUps
  animalsSentence: "You’ve saved 0 animals so far!",
  forestSentence: "You’ve saved 0 m² of forest so far!",
  waterSentence: "You’ve saved 0 liters of water so far!",
  co2Sentence: "You’ve reduced 0 kg of CO₂ so far!",
  impactSentence1: "See how far your impact can go:",
  impactSentence2: "See how far your impact can go:",
  impactSentence3: "See how far your impact can go:",
  impactSentence4: "See how far your impact can go:",
  openCalculatorText1: "Use our impact calculator",
  openCalculatorText2: "Use our impact calculator",
  openCalculatorText3: "Use our impact calculator",
  openCalculatorText4: "Use our impact calculator",
  ImpactCalcTitle: "Impact Calculator",
  ImpactCalcYears: "Years:",
  ImpactCalcMonths: "Months:",
  calculateImpactBtn: "Calculate Impact",
  animalsSavedCalc: "Animals saved:",
  forestSavedCalc: "Forest saved:",
  waterSavedCalc: "Water saved:",
  coSavedCalc: "CO₂ reduced:",
  mealArtPrepTime: "Preparation time:",
  mealArtIngredient: "Ingredients:",
  mealArtInstructions: "Instructions:",
  uploadNewRecipe: "Upload a New Recipe",
  RecipeImguploadform: "Recipe Image:",
  RecipeTitleuploadform: "Title:",
  RecipePrepTimeuploadform: "Preparation Time:",
  RecipeIngredientsuploadform: "Ingredients:",
  Recipeinstructionsuploadform: "Instructions:",
  UploadRecipeButton: "Upload Recipe",
  RecipeModalPrepTime: "Preparation time:",
  RecipeModalIngredients: "Ingredients:",
  RecipeModalInstructions: "Instructions:",
  profileName: "User Name",
  dietprofilecard: "Diet:",
  goalsprofilecard: "Goals:",
  levelprofilecard: "🌍 Level:",
  streakprofilecard: "🔥 Streak:",
  achievementsHeading: "Achievements",
  ReqProKitchen: "Request Pro Kitchen Access",
  InfoReqProKitchen: "This category is recommended for professional chefs and restaurants. Tell us a little about yourself!",
  proKitchenMessage: "Who are you? What do you cook? Where are you based?",
  sendProKitchenRequest: "Send request",
  ReqBusinessList: "List Your Business!",
  ReqBusinessListLabel: "We love supporting our community, and we’d be thrilled to support you by listing your business here! Share a little about your business, and we’ll get in touch with all the details.",
  localBusinessMessage: "Tell us about your business, location, and what you offer...",
  sendLocalBusinessRequest: "Send request",
  mindfulTimerRow: "Time left:",
  mindfulPopupRewardBtn: "Claim Reward 🏅 +5 Badges, +5 XPs",
  shopModalConfirm: "Confirm",
  shopModalCancel: "Cancel",
  ApplyAsAMentor: "Apply as Mentor",
  ApplyAsAMentorQuestion: "How long have you been a vegan for?",
  mentorSubmit: "Submit",
  mentorCancel: "Cancel",
  AFnewCommentInput: "Write your comment...",
  AFsubmitCommentBtn: "Comment",
  SelectAFriendToStartChat: "Select a friend to message",
  friendfriendcode: "Enter your friend's code.",
  sendFriendRequestBtn: "Send Request",
  YourFriendCode: "Your friend code:",
  confirmBtn: "Confirm",
  cancelBtn: "Cancel",

 

  },
  es: {
    //Loading
    loadingapp: "Cargando...",
    //HomPage

  startCheck: "Start Daily Check-in",
  skipCheck: "Skip Daily Check-in",

    xpLabel: "XP para el siguiente nivel",
    mealArtBtn: "Concurso de Meal-Art",
    checkinBtn: "Registro diario",
    lessonPathBtn: "Lecciones",
    recipesBtn: "Recetas populares",
    youLabel: "Tú",
    andour: "y la ",
    communityLabel: "Comunidad",
    animalsSavedLabel: "guardados",
    forestSavedLabel: "protegidos",
    waterSavedLabel: "ahorrados",
    co2SavedLabel: "reducidos",
    animalsLabel: "animales",
    forestLabel: "m² de bosques",
    waterLabel: "L de agua",
    co2Label: "kg de CO₂",
    mealArtTitle: "Ganadores recientes:",
    homeChefTitle: "Chef Casero",
    proKitchenTitle: "Cocina Profesional",
    recipeAM: "Receta",
    recipePRO: "Receta",
    recipeAvailable: "Receta disponible",
    recipeUnavailable: "Receta no disponible",
    petSays: "dice...",
    profileBtn: "Perfil",
    friendsBtn: "Amigos",
    messagesBtn: "Mensajes",
    localBtn: "Comunidad Local",
    nutritiontable: "Tabla nutricional",
    forumBtn: "Foro Anónimo",
    mentorshipBtn: "Mentoría",
    leaderboardsBtn: "Clasificaciones",
    achievementsPageBtn: "Logros",
    shopBtn: "Tienda",
    challengesBtn: "Retos",
    recommendationsBtn: "Recomendaciones",
    sourcesBtn: "Fuentes",
    aboutUsBtn: "Sobre Nosotros",
    contactUsBtn: "Contáctanos",
    settingsBtn: "Configuración",
    userLevel: "🌍 Nivel:",
    userimpactsofar: "Tu impacto hasta ahora:",
    useranimals: "Animales salvados",
    userforest: "m² Bosque salvado",
    userwater: "Agua ahorrada",
    userco2: "kg de CO₂ reducido",

    //Mealart
mealArtHeaderTitle: "Concurso de Arte Culinario",
mealArtIntro: "Sube tu plato de martes a domingo. La votación es el lunes.",
uploadMyMealBtn: "Subir mi plato",
requestProKitchen: "Solicitar acceso a Cocina Pro",
votenote: "¡Es día de votación! ¡Elige tu favorito!",
alreadyUploadedMsg: "Ya has subido tu plato esta semana, ¡felicidades!",
participantsTab: "Participantes actuales",
pastWinnersTab: "Ganadores anteriores",
uploadYourMealTitle: "Sube tu plato",
plantBasedRule: "¡Solo se permiten platos vegetales!",
mealPhotoLabel: "Foto del plato",
recipeNote: "Rellena todos los campos para publicar tu receta:",
recipeNameLabel: "Nombre de la receta",
prepTimeLabel: "Tiempo de preparación",
ingredientsLabel: "Ingredientes",
instructionsLabel: "Instrucciones",
submitMealBtn: "Enviar plato",
optional: "(opcional)",

    //Learn Section
todayLessonLabel: "Tu lección de hoy:",
mealsQuestion: "¿Cuántas comidas totalmente vegetales disfrutaste ayer?",
mealOption1: "¡Ups! Mi plato me traicionó 😅",
mealOption2: "Un poco de magia vegetal en mis comidas ✨",
mealOption3: "¡Mayormente vegetal durante el día! 🌿",
mealOption4: "¡Totalmente impulsado por plantas! 🌱",
submitAndSupportBtnDCI: "▶️ Enviar y apoyar +2🏅",
submitBtnDCI: "Enviar",
learnTitle: "Aprender",
pathAnimalsBtn: "Por los animales",
pathEarthBtn: "Por la Tierra",
pathHealthBtn: "Por la salud",
    
    //Recipes
recipesTitle: "Recetas",
openUploadBtn: "Sube tu propia receta",

    //Profile
myProfileTitle: "Mi perfil",
nameLabel: "Nombre:",
dietLabel: "Dieta:",
goalsTitle: "Objetivos",
healthTitle: "Problemas de salud",
achievementsTitle: "Logros",
buddyNameLabel: "Nombre del compañero:",
editProfileBtn: "Editar perfil",

editProfileTitle: "Editar mi perfil",
usernameLabel: "Nombre de usuario:",
dietEditLabel: "Dieta:",
changeProfilePhotoBtn: "Cambiar foto de perfil",
editGoalsTitle: "Objetivos:",

goalOption1: "Proteger a los animales",
goalOption2: "Cuidar el medio ambiente",
goalOption3: "Vida saludable",
goalOption4: "Resolver problemas de salud",
goalOption5: "Mejorar mi rendimiento como atleta",

editHealthTitle: "Problemas de salud:",
healthOption1: "Enfermedad cardíaca",
healthOption2: "Colesterol alto",
healthOption3: "Presión arterial alta",
healthOption4: "Diabetes tipo 2",
healthOption5: "Obesidad",
healthOption6: "Problemas digestivos",
healthOption7: "Inflamación o hinchazón",
healthOption8: "Fatiga",
healthOption9: "Preocupación por riesgo de cáncer",

buddyNameEditLabel: "Nombre del compañero:",
changePetPhotoBtn: "Cambiar foto del compañero",
saveProfileBtn: "💾 Guardar perfil",

dietOptionVegan: "Vegano",
dietOptionInTransition: "En transición",
dietOptionVegetarian: "Vegetariano",
dietOptionPescatarian: "Pescetariano",
dietOptionFlexitarian: "Flexitariano",
dietOptionOmnivore: "Omnívoro",

    //Friends
connectFriendBtnText: "Conectar con un amigo",
friendsTitleLabel: "Amigos:",

    //Messages
  messagesTitle: "Chats",
  chatHeaderLabel: "Chat",
  messagePlaceholder: "Escribe un mensaje...",
  messageCharCountLabel: "0/1000",
  sendMessageBtn: "Enviar",
  deleteChatBtn: "Borrar chat",
  blockUserBtn: "Bloquear usuario",

    
    //Community
  findLocalCommunityLabel: "Encuentra tu comunidad local",
  countryPlaceholder: "Selecciona país",
  cityPlaceholder: "Selecciona ciudad",
  joinCommunityBtn: "Unirse a la comunidad",
  leaveCommunityBtn: "Salir de la comunidad",
  typeMessagePlaceholder: "Escribe un mensaje...",
  sendBtn: "Enviar",
  communityChat: "Comunidad Chat ▼",
  upcomingEventsHeader: "Próximos eventos ▼",
  createEventBtn: "Crear evento",
  eventPlacePlaceholder: "Lugar del evento",
  eventDescriptionPlaceholder: "Descripción",
  submitEventBtn: "Enviar evento",
  membersHeader: "Miembros ▼",
  localPartnersHeader: "Socios locales:",
  localBusinessBannerText: "¡Publica tu negocio local aquí!",
  contactUsLink: "Contáctanos",

  //Anon Forum
  forumQuoteText: '"Lo mejor de la humanidad: Cuando nos apoyamos mutuamente. No cuando cancelamos a otros por errores pasados, sino cuando ayudamos a los demás a crecer."',
  forumQuoteSource: '— Joaquin Phoenix, Oscars 2020',
  forumGuideline: 'Por favor, comparte tus pensamientos con amabilidad y ayuda a otros a crecer 🧡',
  openTopicPlaceholder: 'Abre un tema de forma anónima...',
  submitBtn: 'Enviar',

  //Mentorship
  buddySystemHeader: "Mentores 🤝",
  ConnectWithAMentor: "Conéctate con alguien que haya sido vegano por más tiempo para mentoría.",
  youAreAMentor: "Eres un mentor",
  endMentorshipBtn: "Finalizar mentorías",
  mentorsTitle: "Mentores:",
  applyMentorBtn: "Solicitar ser mentor",
  
  //LeaderBoards
  leaderboardsHeader: "Clasificaciones",
  biggestImpactHeader: "Mayor Impacto",
  mostXPHeader: "Más XP",
  biggestStreakHeader: "Mayor Racha",
  mostBadgeHeader: "Más Insignias",

  //Achievements
  achievementsInfoText: "Gana logros para desbloquear títulos especiales que aparecen junto a tu nombre y son visibles para la comunidad. Puedes mostrar con orgullo estas recompensas en tu tarjeta de perfil para mostrar tu progreso e impacto.",
 
  //Shop
  badgeCountText: "Tus insignias: ",
  shopMethodsHeader: "Cómo conseguir insignias",
  watchAdBtn: "Ver un anuncio",
  watchAdReward: "+2 insignias y +3 XP por anuncio",
  veganChallengesText: "Completa los retos veganos",
  streakText: "Mantén viva tu racha vegana 🌿",

  //Challenges
  dailyXpTitle: "Desafío Diario — Gana 50 XP",
  dailyXpDesc: "Cumple tu objetivo diario ganando 50 XP hoy a través de lecciones y actividades.",
  dailyXpReward: "🏅 Recompensa: +3 Insignias + 3 XP",
  dailyXpClaimBtn: "Reclamar Recompensa",

  learnChallengeTitle: "📚 Aprende Algo Nuevo",
  learnChallengeDesc: "Completa una lección nueva en cada ruta hoy:",
  learnChallengeReward: "Recompensa: 🏅 +3 Insignias +3 XP",
  learnClaimBtn: "Reclamar Recompensa",

  mindfulChallengeTitle: "🧘 Cuida de Ti Mismo",
  mindfulChallengeDesc: "Tómate 5 minutos para el autocuidado. Medita, estírate o da un paseo — el objetivo es despejar tu mente, relajarte y respirar profundamente.",
  mindfulChallengeReward: "Recompensa: 🏅 +5 Insignia +5 XP",
  mindfulStartBtn: "Iniciar Temporizador de 5 Minutos",

  encourageChallengeTitle: "💖 Anima a Alguien",
  encourageChallengeDesc: "¡Envía un mensaje amable para animar a un amigo hoy!",
  chooseFriendLabel: "Elige un amigo:",
  selectFriendOption: "Selecciona un amigo",
  yourMessageLabel: "Tu mensaje:",
  encourageReward: "Recompensa: 🏅 +2 Insignia +2 XP",
  sendEncourageBtn: "Enviar Mensaje",
  encourageTemplateStart: "Te he elegido para animarte en mi desafío diario.",
  encourageTemplateEnd: "¡Sigue así 🌱",
  
  lessonAnimal: "Animales",
  lessonEarth: "Tierra",
  lessonHealth: "Salud",
  //Recommendations
recTitle: "📚 Recomendaciones",
recBooksTitle: "Libros",
recBook1: "Cómo no morir – <em>Dr. Michael Greger</em>",
recBook2: "Refutando todos los argumentos contra el veganismo – <em>Danny Ishay</em>",
recBook3: "Cómo discutir con un carnívoro y ganar siempre – <em>Ed Winters</em>",

recMoviesTitle: "Películas",
recMovie1: "Cowspiracy (Netflix, 2014) – Explora el impacto ambiental de la ganadería.",
recMovie2: "The Game Changers (Netflix, 2018) – Dieta vegetal y rendimiento deportivo.",
recMovie3: "Earthlings (2005) – Impactante documental sobre el uso de animales.",
recMovie4: "Dominion (2018) – Investigación sobre el trato a los animales en la industria moderna.",

recWebsitesTitle: "Sitios web",
recWebsite1: "Apoyo y recursos para probar el veganismo durante un mes (¡o más!).",
recWebsite2: "Información basada en evidencia sobre nutrición vegetal.",

  //Subscriptions
subscriptionsTitle: "Membresías",
subscriptionsIntro: "¿Quieres apoyarnos a largo plazo y desbloquear recompensas extra? ¡Hazte miembro! Obtendrás aumentos de XP, insignias y reconocimiento especial.",
membershipTiersTitle: "🌟 Niveles de membresía",

seedMemberTitle: "Miembro Semilla 🌱",
seedMemberPrice: "2 € / mes",
seedMemberBenefit1: "+10% de XP en todas las actividades y insignias por donaciones",
seedMemberBenefit2: "Insignia Semilla en tu perfil",

sproutMemberTitle: "Miembro Brote 🌿",
sproutMemberPrice: "5 € / mes",
sproutMemberBenefit1: "+25% de XP",
sproutMemberBenefit2: "Insignia exclusiva",

treeMemberTitle: "Miembro Árbol 🌳",
treeMemberPrice: "10 € / mes",
treeMemberBenefit1: "+50% de XP",
treeMemberBenefit2: "Acceso anticipado a nuevas funciones",

forestMemberTitle: "Miembro Bosque 🌲",
forestMemberPrice: "20 € / mes",
forestMemberBenefit1: "+100% de XP",
forestMemberBenefit2: "Posición destacada en la clasificación",
forestMemberBenefit3: "Insignia de reconocimiento especial",

earthGuardianTitle: "Guardián de la Tierra 🌍",
earthGuardianPrice: "50 € / mes",
earthGuardianBenefit1: "+200% de XP",
earthGuardianBenefit2: "Insignia VIP y perfil destacado",

    //Sources
sourcesContentText: "...Contenido de fuentes...",
subscriptionsBtn: "Membresías",

    //Aboutus
aboutGreeting: "Hola 👋",
aboutText:
  "Me llamo Gábor — y esta app es un pequeño proyecto creado desde el corazón, guiado por la creencia de que juntos podemos marcar una diferencia real para los animales, las personas y el planeta. Empecé este camino para inspirar una vida más consciente, compasiva y conectada — porque creo de verdad que incluso las acciones positivas más pequeñas pueden generar un cambio real. Gracias por estar aquí ✨",
aboutFollowText: "Sigue nuestro camino en ",
aboutInstagram: "@app.elunify",
aboutEnding: "",

    //ContactUs
contactTitle: "Contacto",
contactIntro: "¡Estamos aquí para ayudarte! Elige un tema y cuéntanos tu mensaje.",

contactSubjectLabel: "Asunto:",
contactSubjectPlaceholder: "-- Selecciona un asunto --",
contactSubjectBug: "Reportar un error",
contactBillingIssue: "Problema de facturación",
contactSubjectFeedback: "Comentarios sobre la app",
contactSubjectFeature: "Solicitud de nueva función",
contactSubjectCommunity: "Añadir una nueva ciudad a las comunidades",
contactSubjectOther: "Otro",

contactMessageLabel: "Mensaje:",
contactMessagePlaceholder: "Escribe tu mensaje aquí...",

sendContactMessageBtn: "Enviar mensaje",

    //SystemSettings
settingsTitle: "Configuración",

languageLabel: "Seleccionar idioma:",
langOptionEn: "Inglés",
langOptionEs: "Español",
langOptionHu: "Húngaro",

saveLanguageBtn: "Guardar idioma",
languageInfo: "Cambiar el idioma actualizará la interfaz de la app de inmediato.",

logoutBtn: "Cerrar sesión",
deleteProfileBtn: "🗑️ Eliminar perfil",

    //PopUps
animalsSentence: "¡Has salvado 0 animales hasta ahora!",
  forestSentence: "¡Has salvado 0 m² de bosque hasta ahora!",
  waterSentence: "¡Has salvado 0 litros de agua hasta ahora!",
  co2Sentence: "¡Has reducido 0 kg de CO₂ hasta ahora!",
  impactSentence1: "Ve hasta dónde puede llegar tu impacto:",
  impactSentence2: "Ve hasta dónde puede llegar tu impacto:",
  impactSentence3: "Ve hasta dónde puede llegar tu impacto:",
  impactSentence4: "Ve hasta dónde puede llegar tu impacto:",
  openCalculatorText1: "Usa nuestro calculador de impacto",
  openCalculatorText2: "Usa nuestro calculador de impacto",
  openCalculatorText3: "Usa nuestro calculador de impacto",
  openCalculatorText4: "Usa nuestro calculador de impacto",
  ImpactCalcTitle: "Calculador de Impacto",
  ImpactCalcYears: "Años:",
  ImpactCalcMonths: "Meses:",
  calculateImpactBtn: "Calcular impacto",
  animalsSavedCalc: "Animales salvados:",
  forestSavedCalc: "Bosque salvado:",
  waterSavedCalc: "Agua salvada:",
  coSavedCalc: "CO₂ reducido:",
  mealArtPrepTime: "Tiempo de preparación:",
  mealArtIngredient: "Ingredientes:",
  mealArtInstructions: "Instrucciones:",
  uploadNewRecipe: "Subir una nueva receta",
  RecipeImguploadform: "Imagen:",
  RecipeTitleuploadform: "Título:",
  RecipePrepTimeuploadform: "Tiempo de preparación:",
  RecipeIngredientsuploadform: "Ingredientes:",
  RecipeInstructionsuploadform: "Instrucciones:",
  UploadRecipeButton: "Subir receta",
  RecipeModalPrepTime: "Tiempo de preparación:",
  RecipeModalIngredients: "Ingredientes:",
  RecipeModalInstructions: "Instrucciones:",
  profileName: "Nombre de usuario",
  dietprofilecard: "Dieta:",
  goalsprofilecard: "Objetivos:",
  levelprofilecard: "🌍 Nivel:",
  streakprofilecard: "🔥 Racha:",
  achievementsHeading: "Logros",
  ReqProKitchen: "Solicitar acceso a cocina profesional",
  InfoReqProKitchen: "Esta categoría está recomendada para chefs profesionales y restaurantes. ¡Cuéntanos un poco sobre ti!",
  proKitchenMessage: "¿Quién eres? ¿Qué cocinas? ¿Dónde estás?",
  sendProKitchenRequest: "Enviar solicitud",
  ReqBusinessList: "¡Lista tu negocio!",
  ReqBusinessListLabel: "Nos encanta apoyar a nuestra comunidad y nos encantaría ayudarte listando tu negocio aquí. Cuéntanos sobre tu negocio y nos pondremos en contacto.",
  localBusinessMessage: "Cuéntanos sobre tu negocio, ubicación y lo que ofreces...",
  sendLocalBusinessRequest: "Enviar solicitud",
  mindfulTimerRow: "Tiempo restante:",
  mindfulPopupRewardBtn: "Reclamar recompensa 🏅 +5 Insignias, +5 XP",
  shopModalConfirm: "Confirmar",
  shopModalCancel: "Cancelar",
  ApplyAsAMentor: "Postularse como mentor",
  ApplyAsAMentorQuestion: "¿Cuánto tiempo llevas siendo vegano?",
  mentorSubmit: "Enviar",
  mentorCancel: "Cancelar",
  AFnewCommentInput: "Escribe tu comentario...",
  AFsubmitCommentBtn: "Comentar",
  SelectAFriendToStartChat: "Selecciona un amigo para enviar un mensaje",
  friendfriendcode: "Ingresa el código de tu amigo.",
  sendFriendRequestBtn: "Enviar solicitud",
  YourFriendCode: "Tu código de amigo:",
  confirmBtn: "Confirmar",
  cancelBtn: "Cancelar",

  

  },
  hu: {
    //Loading
    loadingapp: "Betöltés...",
    //HomPage

  startCheck: "Napi bejelentkezés indítása",
  skipCheck: "Napi bejelentkezés kihagyása",

    xpLabel: "XP a következő szinthez",
    mealArtBtn: "Meal-Art Verseny",
    checkinBtn: "Napi bejegyzés",
    lessonPathBtn: "Leckék",
    recipesBtn: "Népszerű Receptek",
    youLabel: "Te",
    andour: "és a ",
    communityLabel: "Közösség",
    animalsSavedLabel: "megmentett",
    forestSavedLabel: "megkímélt",
    waterSavedLabel: "megtakarított",
    co2SavedLabel: "csökkentett",
    animalsLabel: "állatot",
    forestLabel: "m² erdőt",
    waterLabel: "L vizet",
    co2Label: "kg CO₂",
    mealArtTitle: "Aktuális győztesek:",
    homeChefTitle: "Hobbi Séf",
    proKitchenTitle: "Profikonyha",
    recipeAM: "Recept",
    recipePRO: "Recept",
    recipeAvailable: "Recept elérhető",
    recipeUnavailable: "Recept nem elérhető",
    petSays: "mondja...",
    profileBtn: "Profil",
    friendsBtn: "Barátok",
    messagesBtn: "Üzenetek",
    localBtn: "Helyi Közösség",
    forumBtn: "Anonim Fórum",
    mentorshipBtn: "Mentorprogram",
    nutritiontable: "Tápértéktáblázat",
    leaderboardsBtn: "Ranglisták",
    achievementsPageBtn: "Eredmények",
    shopBtn: "Bolt",
    challengesBtn: "Kihívások",
    recommendationsBtn: "Ajánlások",
    sourcesBtn: "Források",
    aboutUsBtn: "Rólunk",
    contactUsBtn: "Kapcsolat",
    settingsBtn: "Beállítások",
    userLevel: "🌍 Szint:",
    userimpactsofar: "A te hatásod eddig:",
    useranimals: "Megmentett állat",
    userforest: "m² Megóvott erdő",
    userwater: "Megtakarított víz",
    userco2: "kg CO₂ csökkentett",

    //Mealart
mealArtHeaderTitle: "Meal-Art Verseny",
mealArtIntro: "Keddtől vasárnapig töltheted fel az ételedet. Szavazás hétfőn.",
uploadMyMealBtn: "Ételem feltöltése",
requestProKitchen: "Pro konyha hozzáférés kérése",
votenote: "Szavazás napja! Válaszd ki a kedvenced!",
alreadyUploadedMsg: "Ezen a héten már feltöltötted az ételedet, gratulálunk!",
participantsTab: "Aktuális résztvevők",
pastWinnersTab: "Korábbi győztesek",
uploadYourMealTitle: "Ételed feltöltése",
plantBasedRule: "Csak növényi alapú ételek engedélyezettek!",
mealPhotoLabel: "Étel fotó",
recipeNote: "Tölts ki minden mezőt, hogy a recept elérhető legyen:",
recipeNameLabel: "Recept neve",
prepTimeLabel: "Elkészítési idő",
ingredientsLabel: "Hozzávalók",
instructionsLabel: "Elkészítés",
submitMealBtn: "Étel beküldése",
optional: "(opcionális)",

    //Learn Section
todayLessonLabel: "A mai leckéd:",
mealsQuestion: "Hány teljesen növényi alapú ételt ettél tegnap?",
mealOption1: "Hoppá! A tányérom elárult 😅",
mealOption2: "Egy kis növényi varázslat az ételeimben ✨",
mealOption3: "A nap nagy részében növényi alapú voltam! 🌿",
mealOption4: "Teljesen növények hajtottak! 🌱",
submitAndSupportBtnDCI: "▶️ Beküldés és támogatás +2🏅",
submitBtnDCI: "Beküldés",
learnTitle: "Tanulás",
pathAnimalsBtn: "Az állatokért",
pathEarthBtn: "A Földért",
pathHealthBtn: "Az egészségért",
    
    //Recipes
recipesTitle: "Receptek",
openUploadBtn: "Saját recept feltöltése",

    //Profile
myProfileTitle: "Profilom",
nameLabel: "Név:",
dietLabel: "Étrend:",
goalsTitle: "Célok",
healthTitle: "Egészségügyi problémák",
achievementsTitle: "Eredmények",
buddyNameLabel: "Társ neve:",
editProfileBtn: "Profil szerkesztése",

editProfileTitle: "Profil szerkesztése",
usernameLabel: "Felhasználónév:",
dietEditLabel: "Étrend:",
changeProfilePhotoBtn: "Profilkép cseréje",
editGoalsTitle: "Célok:",

goalOption1: "Állatok védelme",
goalOption2: "Környezet védelme",
goalOption3: "Egészséges életmód",
goalOption4: "Egészségügyi problémák megoldása",
goalOption5: "Sportteljesítmény javítása",

editHealthTitle: "Egészségügyi problémák:",
healthOption1: "Szívbetegség",
healthOption2: "Magas koleszterin",
healthOption3: "Magas vérnyomás",
healthOption4: "2-es típusú cukorbetegség",
healthOption5: "Elhízás",
healthOption6: "Emésztési problémák",
healthOption7: "Gyulladás vagy duzzanat",
healthOption8: "Fáradtság",
healthOption9: "Rák kockázata miatti aggodalom",

buddyNameEditLabel: "Társ neve:",
changePetPhotoBtn: "Társ fotójának cseréje",
saveProfileBtn: "💾 Profil mentése",

dietOptionVegan: "Vegán",
dietOptionInTransition: "Átmenetben",
dietOptionVegetarian: "Vegetáriánus",
dietOptionPescatarian: "Peszkateriánus",
dietOptionFlexitarian: "Flexitáriánus",
dietOptionOmnivore: "Mindenevő",

    //Friends
connectFriendBtnText: "Kapcsolódás egy baráthoz",
friendsTitleLabel: "Barátok:",

    //Messages
  messagesTitle: "Csevegések",
  chatHeaderLabel: "Csevegés",
  messagePlaceholder: "Írj egy üzenetet...",
  messageCharCountLabel: "0/1000",
  sendMessageBtn: "Küldés",
  deleteChatBtn: "Chat törlése",
  blockUserBtn: "Felhasználó blokkolása",

    //Community
  findLocalCommunityLabel: "Találd meg a helyi közösséged",
  countryPlaceholder: "Válassz országot",
  cityPlaceholder: "Válassz várost",
  joinCommunityBtn: "Csatlakozás a közösséghez",
  leaveCommunityBtn: "Kilépés a közösségből",
  typeMessagePlaceholder: "Írj egy üzenetet...",
  sendBtn: "Küldés",
  communityChat: "Társalgó ▼",
  upcomingEventsHeader: "Közelgő események ▼",
  createEventBtn: "Esemény létrehozása",
  eventPlacePlaceholder: "Helyszín",
  eventDescriptionPlaceholder: "Leírás",
  submitEventBtn: "Esemény beküldése",
  membersHeader: "Tagok ▼",
  localPartnersHeader: "Helyi partnerek:",
  localBusinessBannerText: "Tedd ki helyi vállalkozásodat ide!",
  contactUsLink: "Kapcsolatfelvétel",

  //Anon Forum
  forumQuoteText: '"Az emberiség legjobb része: amikor támogatjuk egymást. Nem az, amikor a múltbéli hibák miatt elutasítunk másokat, hanem amikor segítünk nekik fejlődni."',
  forumQuoteSource: '— Joaquin Phoenix, 2020-as Oscar',
  forumGuideline: 'Kérlek, oszd meg gondolataid kedvesen, és segíts másoknak fejlődni 🧡',
  openTopicPlaceholder: 'Nyiss egy témát névtelenül...',
  submitBtn: 'Beküldés',

  //Mentorship
  buddySystemHeader: "Mentorok 🤝",
  ConnectWithAMentor: "Kapcsolódj valakihez, aki már régebb óta vegán, mentorálás céljából.",
  youAreAMentor: "Te mentor vagy",
  endMentorshipBtn: "Mentorálás befejezése",
  mentorsTitle: "Mentorok:",
  applyMentorBtn: "Jelentkezés mentorálásra",

  //LeaderBoards
  leaderboardsHeader: "Ranglisták",
  biggestImpactHeader: "Legnagyobb Hatás",
  mostXPHeader: "Legtöbb XP",
  biggestStreakHeader: "Leghosszabb Sorozat",
  mostBadgeHeader: "Legtöbb Jelvény",

  //Achievements
  achievementsInfoText: "Szerezz eredményeket, hogy különleges címeket nyiss meg, amelyek a neved mellett jelennek meg, és láthatóak a közösség számára. Büszkén bemutathatod ezeket a jutalmakat a profilkártyádon, hogy megmutasd a fejlődésedet és hatásodat.",

  //Shop
  badgeCountText: "Jelvényeid: ",
  shopMethodsHeader: "Hogyan szerezhetsz jelvényeket",
  watchAdBtn: "Hirdetés megtekintése",
  watchAdReward: "+2 jelvény és +3 XP hirdetésenként",
  veganChallengesText: "Teljesíts vegán kihívásokat",
  streakText: "Tartsd életben a növényi alapú sorozatodat 🌿",

  //Challenges
  dailyXpTitle: "Napi kihívás — Szerezz 50 XP-t",
  dailyXpDesc: "Teljesítsd a napi célodat, és szerezz 50 XP-t ma leckék és tevékenységek révén.",
  dailyXpReward: "🏅 Jutalom: +3 Jelvény +3 XP",
  dailyXpClaimBtn: "Jutalom igénylése",

  learnChallengeTitle: "📚 Tanulj Valami Újat",
  learnChallengeDesc: "Teljesíts ma minden útvonalon egy új leckét:",
  learnChallengeReward: "Jutalom: 🏅 +3 Jelvény +3 XP",
  learnClaimBtn: "Jutalom igénylése",

  mindfulChallengeTitle: "🧘 Gondoskodj Magadról",
  mindfulChallengeDesc: "Szánj 5 percet az önmagad gondozására. Meditálj, nyújtózkodj vagy sétálj — a cél a lélek megnyugtatása és a pihenés.",
  mindfulChallengeReward: "Jutalom: 🏅 +5 Jelvény +5 XP",
  mindfulStartBtn: "5 perces időzítő indítása",

  encourageChallengeTitle: "💖 Bátoríts Valakit",
  encourageChallengeDesc: "Küldj ma kedves üzenetet, hogy bátoríts egy barátot!",
  chooseFriendLabel: "Válassz egy barátot:",
  selectFriendOption: "Válassz barátot",
  yourMessageLabel: "Üzeneted:",
  encourageReward: "Jutalom: 🏅 +2 Jelvény +2 XP",
  sendEncourageBtn: "Üzenet küldése",
  encourageTemplateStart: "Kiválasztottalak, hogy bátorítsalak a napi kihívásomban.",
  encourageTemplateEnd: "Hajrá 🌱",

  lessonAnimal: "Állatok",
  lessonEarth: "Föld",
  lessonHealth: "Egészség",
  //Recommendations
recTitle: "📚 Ajánlások",
recBooksTitle: "Könyvek",
recBook1: "Hogyan ne halj meg – <em>Dr. Michael Greger</em>",
recBook2: "A veganizmus elleni érvek cáfolata – <em>Danny Ishay</em>",
recBook3: "Hogyan vitázz egy húsevővel és mindig nyerj – <em>Ed Winters</em>",

recMoviesTitle: "Filmek",
recMovie1: "Cowspiracy (Netflix, 2014) – Az állattenyésztés környezeti hatásait vizsgálja.",
recMovie2: "The Game Changers (Netflix, 2018) – A növényi étrend hatása a sportteljesítményre.",
recMovie3: "Earthlings (2005) – Megrázó dokumentumfilm az állatok emberi felhasználásáról.",
recMovie4: "Dominion (2018) – Az állatok modern iparágakban való kezelését mutatja be.",

recWebsitesTitle: "Weboldalak",
recWebsite1: "Támogatás és források a veganizmus kipróbálásához egy hónapra (vagy tovább!).",
recWebsite2: "Tudományosan megalapozott információk a növényi alapú táplálkozásról.",

  //Subscriptions
subscriptionsTitle: "Tagságok",
subscriptionsIntro: "Szeretnél hosszú távon támogatni minket és extra jutalmakat feloldani? Legyél tag! XP bónuszokat, jelvényeket és különleges elismerést kapsz.",
membershipTiersTitle: "🌟 Tagsági szintek",

seedMemberTitle: "Mag Tag 🌱",
seedMemberPrice: "2 € / hónap",
seedMemberBenefit1: "+10% XP bónusz minden tevékenységre és jelvények adományozásért",
seedMemberBenefit2: "Mag jelvény a profilodon",

sproutMemberTitle: "Hajtás Tag 🌿",
sproutMemberPrice: "5 € / hónap",
sproutMemberBenefit1: "+25% XP bónusz",
sproutMemberBenefit2: "Exkluzív jelvény",

treeMemberTitle: "Fa Tag 🌳",
treeMemberPrice: "10 € / hónap",
treeMemberBenefit1: "+50% XP bónusz",
treeMemberBenefit2: "Korai hozzáférés az új funkciókhoz",

forestMemberTitle: "Erdő Tag 🌲",
forestMemberPrice: "20 € / hónap",
forestMemberBenefit1: "+100% XP bónusz",
forestMemberBenefit2: "Kiemelt hely a ranglistán",
forestMemberBenefit3: "Különleges elismerő jelvény",

earthGuardianTitle: "Föld Védelmező 🌍",
earthGuardianPrice: "50 € / hónap",
earthGuardianBenefit1: "+200% XP bónusz",
earthGuardianBenefit2: "VIP jelvény és kiemelt profil",

    //Sources
sourcesContentText: "...Források tartalma...",
subscriptionsBtn: "Tagságok",

    //Aboutus
aboutGreeting: "Szia 👋",
aboutText:
  "A nevem Gábor — és ez az alkalmazás egy kis, szívből jövő projekt, amit az a hit vezérel, hogy együtt valódi változást érhetünk el az állatokért, az emberekért és a bolygóért. Azért indultam el ezen az úton, hogy tudatosabb életmódra, együttérzésre és kapcsolódásra inspiráljak — mert őszintén hiszem, hogy még a legkisebb pozitív lépések is valódi hatást teremthetnek. Köszönöm, hogy itt vagy ✨",
aboutFollowText: "Kövesd az utunkat itt: ",
aboutInstagram: "@app.elunify",
aboutEnding: "",

    //ContactUs
contactTitle: "Kapcsolat",
contactIntro: "Szívesen segítünk! Válassz egy témát, és írd meg az üzeneted.",

contactSubjectLabel: "Tárgy:",
contactSubjectPlaceholder: "-- Válassz egy témát --",
contactSubjectBug: "Hiba jelentése",
contactBillingIssue: "Számlázási probléma",
contactSubjectFeedback: "Visszajelzés az alkalmazásról",
contactSubjectFeature: "Új funkció javaslata",
contactSubjectCommunity: "Új város hozzáadása a közösségekhez",
contactSubjectOther: "Egyéb",

contactMessageLabel: "Üzenet:",
contactMessagePlaceholder: "Ide írd az üzeneted...",

sendContactMessageBtn: "Üzenet küldése",

    //SystemSettings
settingsTitle: "Beállítások",

languageLabel: "Nyelv kiválasztása:",
langOptionEn: "Angol",
langOptionEs: "Spanyol",
langOptionHu: "Magyar",

saveLanguageBtn: "Nyelv mentése",
languageInfo: "A nyelv megváltoztatása azonnal frissíti az alkalmazás felületét.",

logoutBtn: "Kijelentkezés",
deleteProfileBtn: "🗑️ Profil törlése",

    //PopUps
  animalsSentence: "Eddig 0 állatot mentettél meg!",
  forestSentence: "Eddig 0 m² erdőt mentettél meg!",
  waterSentence: "Eddig 0 liter vizet takarítottál meg!",
  co2Sentence: "Eddig 0 kg CO₂-t csökkentettél!",
  impactSentence1: "Nézd meg, milyen messzire hat az aktivitásod:",
  impactSentence2: "Nézd meg, milyen messzire hat az aktivitásod:",
  impactSentence3: "Nézd meg, milyen messzire hat az aktivitásod:",
  impactSentence4: "Nézd meg, milyen messzire hat az aktivitásod:",
  openCalculatorText1: "Használd a hatás kalkulátort",
  openCalculatorText2: "Használd a hatás kalkulátort",
  openCalculatorText3: "Használd a hatás kalkulátort",
  openCalculatorText4: "Használd a hatás kalkulátort",
  ImpactCalcTitle: "Hatás Kalkulátor",
  ImpactCalcYears: "Évek:",
  ImpactCalcMonths: "Hónapok:",
  calculateImpactBtn: "Számítsd ki",
  animalsSavedCalc: "Megmentett állatok:",
  forestSavedCalc: "Megmentett erdő:",
  waterSavedCalc: "Megmentett víz:",
  coSavedCalc: "Csökkentett CO₂:",
  mealArtPrepTime: "Elkészítési idő:",
  mealArtIngredient: "Hozzávalók:",
  mealArtInstructions: "Elkészítés:",
  uploadNewRecipe: "Új recept feltöltése",
  RecipeImguploadform: "Kép:",
  RecipeTitleuploadform: "Cím:",
  RecipePrepTimeuploadform: "Elkészítési idő:",
  RecipeIngredientsuploadform: "Hozzávalók:",
  RecipeInstructionsuploadform: "Elkészítés:",
  UploadRecipeButton: "Recept feltöltése",
  RecipeModalPrepTime: "Elkészítési idő:",
  RecipeModalIngredients: "Hozzávalók:",
  RecipeModalInstructions: "Elkészítés:",
  profileName: "Felhasználó neve",
  dietprofilecard: "Diéta:",
  goalsprofilecard: "Célok:",
  levelprofilecard: "🌍 Szint:",
  streakprofilecard: "🔥 Sorozat:",
  achievementsHeading: "Eredmények",
  ReqProKitchen: "Pro konyha hozzáférés kérése",
  InfoReqProKitchen: "Ez a kategória profi szakácsoknak és éttermeknek ajánlott. Mesélj kicsit magadról!",
  proKitchenMessage: "Ki vagy? Mit főzöl? Hol vagy?",
  sendProKitchenRequest: "Küldés",
  ReqBusinessList: "Listázd a vállalkozásod!",
  ReqBusinessListLabel: "Szeretjük támogatni a közösséget, és örömmel segítünk, hogy listázzuk a vállalkozásod! Mesélj kicsit róla, és felvesszük a kapcsolatot.",
  localBusinessMessage: "Meséld el a vállalkozásod, helyed és kínálatod...",
  sendLocalBusinessRequest: "Küldés",
  mindfulTimerRow: "Hátralévő idő:",
  mindfulPopupRewardBtn: "Jutalom igénylése 🏅 +5 jelvény, +5 XP",
  shopModalConfirm: "Megerősítés",
  shopModalCancel: "Mégse",
  ApplyAsAMentor: "Jelentkezés mentorálásra",
  ApplyAsAMentorQuestion: "Mióta vagy vegán?",
  mentorSubmit: "Küldés",
  mentorCancel: "Mégse",
  AFnewCommentInput: "Írd meg a kommentet...",
  AFsubmitCommentBtn: "Komment",
  SelectAFriendToStartChat: "Válassz egy barátot az üzenethez",
  friendfriendcode: "Írd be a barátod kódját.",
  sendFriendRequestBtn: "Küldés",
  YourFriendCode: "A te barátkódod:",
  confirmBtn: "Megerősítés",
  cancelBtn: "Mégse",

  
  }
};




async function updateLanguageUI(lang) {
  const t = translations[lang]; // Select the language dictionary

  //OnLoad
  //document.getElementById("loadingText").textContent = t.loadingapp;
    //HomPage
  document.getElementById("startCheckinBtn").textContent = t.startCheck;
  document.getElementById("skipCheckinBtn").textContent = t.skipCheck;

  // Top bar
 // document.getElementById("xpLabel").textContent = t.xpLabel;

  // Buttons
  document.getElementById("mealArtBtn").innerText = t.mealArtBtn;
  document.getElementById("lessonPathBtn").innerText = t.lessonPathBtn;
  document.getElementById("recipesBtn").innerText = t.recipesBtn;

  document.getElementById("Levelword").textContent = t.userLevel;
  document.getElementById("impactsofar").textContent = t.userimpactsofar;

  document.getElementById("animalsLabel").textContent = t.useranimals;
  document.getElementById("forestLabel").textContent = t.userforest;
  document.getElementById("waterLabel").textContent = t.userwater;
  document.getElementById("co2Label").textContent = t.userco2;


  // Impact labels
 // document.getElementById("youLabel").innerText = t.youLabel + ", ";
 // document.getElementById("andour").innerText = t.andour;
 // document.getElementById("communityLabel").innerText = t.communityLabel;

 // document.querySelector("#animalsSave").firstChild.textContent = t.animalsSavedLabel;
 // document.querySelector("#forestSave").firstChild.textContent  = t.forestSavedLabel;
 // document.querySelector("#waterSave").firstChild.textContent   = t.waterSavedLabel;
 // document.querySelector("#co2save").firstChild.textContent     = t.co2SavedLabel;

 // document.getElementById("animalsLabel").innerText = t.animalsLabel;
 // document.getElementById("forestLabel").innerText = t.forestLabel;
 // document.getElementById("waterLabel").innerText = t.waterLabel;
 // document.getElementById("co2Label").innerText = t.co2Label;

  // Meal-Art section
  document.getElementById("mealArtTitle").innerText = t.mealArtTitle;
  //document.getElementById("homeChefTitle").innerText = t.homeChefTitle;
  //document.getElementById("proKitchenTitle").innerText = t.proKitchenTitle;
  
  document.getElementById("recipebadgeAM").innerText = t.recipeAM;
  document.getElementById("recipebadgePRO").innerText = t.recipePRO;

  // Pet
  //document.getElementById("petSays").innerText = t.petSays;

  // Bottom nav
  document.getElementById("profileBtn").innerText = t.profileBtn;
  document.getElementById("friendsBtn").querySelector(".btn-label").firstChild.textContent = t.friendsBtn;
  document.getElementById("messagesBtn").querySelector(".btn-label").firstChild.textContent = t.messagesBtn;
  document.getElementById("localBtn").querySelector(".btn-label").firstChild.textContent = t.localBtn;
 // document.getElementById("nutritionBtn").innerText = t.nutritiontable;
 // document.getElementById("forumBtn").querySelector(".btn-label").firstChild.textContent = t.forumBtn;
 // document.getElementById("mentorshipBtn").innerText = t.mentorshipBtn;
  document.getElementById("leaderboardsBtn").innerText = t.leaderboardsBtn;
  document.getElementById("achievementsPageBtn").innerText = t.achievementsPageBtn;
  document.getElementById("shopBtn").innerText = t.shopBtn;
  document.getElementById("challengesBtn").querySelector(".btn-label").firstChild.textContent = t.challengesBtn;
 // document.getElementById("recommendationsBtn").innerText = t.recommendationsBtn;
 // document.getElementById("sourcesBtn").innerText = t.sourcesBtn;
  document.getElementById("subscriptionsBtn").innerText = t.subscriptionsBtn;
  document.getElementById("aboutUsBtn").innerText = t.aboutUsBtn;
  document.getElementById("contactUsBtn").innerText = t.contactUsBtn;
  document.getElementById("settingsBtn").innerText = t.settingsBtn;

    //Mealart
  // Meal Art Contest page
document.getElementById("mealArtHeaderTitle").innerText = t.mealArtHeaderTitle;
document.getElementById("generalnote").innerText = t.mealArtIntro;
document.getElementById("uploadBtn").innerText = t.uploadMyMealBtn;
document.getElementById("openProKitchenPopup").innerText = t.requestProKitchen;
document.getElementById("votenote").innerText = t.votenote;
document.getElementById("alreadyUploadedMsg").innerText = t.alreadyUploadedMsg;

document.getElementById("participantsTab").innerText = t.participantsTab;
document.getElementById("pastWinnersTab").innerText = t.pastWinnersTab;

// Upload page
document.getElementById("uploadYourMealTitle").innerText = t.uploadYourMealTitle;
document.getElementById("plantBasedRule").innerText = t.plantBasedRule;
document.getElementById("mealPhotoLabel").firstChild.textContent = t.mealPhotoLabel + " ";

document.getElementById("recipeNote").innerText = t.recipeNote;
document.getElementById("recipeNameLabel").firstChild.textContent = t.recipeNameLabel + " ";
document.getElementById("prepTimeLabel").firstChild.textContent = t.prepTimeLabel + " ";
document.getElementById("ingredientsLabel").firstChild.textContent = t.ingredientsLabel + " ";
document.getElementById("instructionsLabel").firstChild.textContent = t.instructionsLabel + " ";
document.getElementById("optional1").innerText = t.optional;
document.getElementById("optional2").innerText = t.optional;

document.getElementById("sbmtMealArtBtn").innerText = t.submitMealBtn;

    //Learn Section
// Daily Check-in
document.getElementById("todayLessonLabel").innerText = t.todayLessonLabel;
document.getElementById("mealsQuestion").innerText = t.mealsQuestion;

document.getElementById("mealOption1").innerText = t.mealOption1;
document.getElementById("mealOption2").innerText = t.mealOption2;
document.getElementById("mealOption3").innerText = t.mealOption3;
document.getElementById("mealOption4").innerText = t.mealOption4;

document.getElementById("submitAndSupportBtnDCI").innerText = t.submitAndSupportBtnDCI;
document.getElementById("submitBtnDCI").innerText = t.submitBtnDCI;

// Learn / Lesson Path
document.getElementById("learnTitle").innerText = t.learnTitle;
document.getElementById("pathAnimalsBtn").innerText = t.pathAnimalsBtn;
document.getElementById("pathEarthBtn").innerText = t.pathEarthBtn;
document.getElementById("pathHealthBtn").innerText = t.pathHealthBtn;

    //Recipes
// Recipes page
document.getElementById("recipesTitle").innerText = t.recipesTitle;
document.getElementById("openUploadBtn").innerText = t.openUploadBtn;

    //Profile
// Profile view
document.getElementById("myProfileTitle").innerText = t.myProfileTitle;
document.getElementById("nameLabel").innerText = t.nameLabel;
document.getElementById("dietLabel").innerText = t.dietLabel;
document.getElementById("goalsTitle").innerText = t.goalsTitle;
document.getElementById("healthTitle").innerText = t.healthTitle;
document.getElementById("achievementsTitle").innerText = t.achievementsTitle;
document.getElementById("buddyNameLabel").innerText = t.buddyNameLabel;
document.getElementById("editProfileBtn").innerText = t.editProfileBtn;

// Edit profile
document.getElementById("editProfileTitle").innerText = t.editProfileTitle;
document.getElementById("usernameLabel").innerText = t.usernameLabel;
document.getElementById("dietEditLabel").innerText = t.dietEditLabel;
document.getElementById("changeProfilePhotoBtn").innerText = t.changeProfilePhotoBtn;
document.getElementById("editGoalsTitle").innerText = t.editGoalsTitle;

// Goals options
document.getElementById("goalOption1").innerText = t.goalOption1;
document.getElementById("goalOption2").innerText = t.goalOption2;
document.getElementById("goalOption3").innerText = t.goalOption3;
document.getElementById("goalOption4").innerText = t.goalOption4;
document.getElementById("goalOption5").innerText = t.goalOption5;

// Health options
document.getElementById("editHealthTitle").innerText = t.editHealthTitle;
document.getElementById("healthOption1").innerText = t.healthOption1;
document.getElementById("healthOption2").innerText = t.healthOption2;
document.getElementById("healthOption3").innerText = t.healthOption3;
document.getElementById("healthOption4").innerText = t.healthOption4;
document.getElementById("healthOption5").innerText = t.healthOption5;
document.getElementById("healthOption6").innerText = t.healthOption6;
document.getElementById("healthOption7").innerText = t.healthOption7;
document.getElementById("healthOption8").innerText = t.healthOption8;
document.getElementById("healthOption9").innerText = t.healthOption9;

// Pet & save
document.getElementById("buddyNameEditLabel").innerText = t.buddyNameEditLabel;
document.getElementById("changePetPhotoBtn").innerText = t.changePetPhotoBtn;
document.getElementById("saveBtn").innerText = t.saveProfileBtn;

// Diet select options
document.getElementById("dietOptionVegan").innerText = t.dietOptionVegan;
document.getElementById("dietOptionInTransition").innerText = t.dietOptionInTransition;
document.getElementById("dietOptionVegetarian").innerText = t.dietOptionVegetarian;
document.getElementById("dietOptionPescatarian").innerText = t.dietOptionPescatarian;
document.getElementById("dietOptionFlexitarian").innerText = t.dietOptionFlexitarian;
document.getElementById("dietOptionOmnivore").innerText = t.dietOptionOmnivore;

    //Friends
// Friends page
document.getElementById("openSearchPopup").innerText = t.connectFriendBtnText;
document.getElementById("friendsTitleLabel").innerText = t.friendsTitleLabel;

    //Messages
// Messages page
document.getElementById("messagesTitle").innerText = t.messagesTitle;
document.getElementById("chatHeader").innerText = t.chatHeaderLabel;
document.getElementById("messageInput").placeholder = t.messagePlaceholder;
document.getElementById("messageCharCount").innerText = t.messageCharCountLabel;
document.getElementById("sendMessageBtn").innerText = t.sendMessageBtn;
document.getElementById("deleteChatBtn").innerText = t.deleteChatBtn;
document.getElementById("blockUserBtn").innerText = t.blockUserBtn;

  
    //Community
// Local Community
document.getElementById("findLocalCommunityLabel").innerText = t.findLocalCommunityLabel;
document.getElementById("countrySelect").options[0].text = t.countryPlaceholder;
document.getElementById("citySelect").options[0].text = t.cityPlaceholder;
document.getElementById("joinCommunityBtn").innerText = t.joinCommunityBtn;
document.getElementById("leaveCommunityBtn").innerText = t.leaveCommunityBtn;
document.getElementById("communityMessageInput").placeholder = t.typeMessagePlaceholder;
document.getElementById("sendCommunityMessageBtn").innerText = t.sendBtn;
document.getElementById("communityChatHeader").innerText = t.communityChat;
document.getElementById("upcomingEventsHeader").innerText = t.upcomingEventsHeader;
document.getElementById("createEventBtn").innerText = t.createEventBtn;
document.getElementById("eventPlaceInput").placeholder = t.eventPlacePlaceholder;
document.getElementById("eventDescriptionInput").placeholder = t.eventDescriptionPlaceholder;
document.getElementById("submitEventBtn").innerText = t.submitEventBtn;
document.getElementById("membersHeader").innerText = t.membersHeader;
document.getElementById("localPartnersHeader").innerText = t.localPartnersHeader;
document.getElementById("localBusinessBannerText").innerText = t.localBusinessBannerText;
document.getElementById("openLocalBusinessPopup").innerText = t.contactUsLink;
document.getElementById("leaveCommunityDashboardBtn").innerText = t.leaveCommunityBtn;

  //Anon Forum
// Forum page
document.getElementById("forumQuoteText").innerText = t.forumQuoteText;
document.getElementById("forumQuoteSource").innerText = t.forumQuoteSource;
document.getElementById("forumGuideline").innerText = t.forumGuideline;
document.getElementById("blockContent").placeholder = t.openTopicPlaceholder;
document.getElementById("submitBlockBtn").innerText = t.submitBtn;

  //Mentorship
// Mentorship / Buddy page
document.getElementById("buddySystemHeader").innerText = t.buddySystemHeader;
document.getElementById("ConnectWithAMentor").innerText = t.ConnectWithAMentor;
document.getElementById("youAreAMentor").innerText = t.youAreAMentor;
document.getElementById("endmentorship").innerText = t.endMentorshipBtn;
document.getElementById("mentorsTitle").innerText = t.mentorsTitle;
document.getElementById("applyMentorBtn").innerText = t.applyMentorBtn;

  //LeaderBoards
// Leaderboards page
document.getElementById("leaderboardsHeader").innerText = t.leaderboardsHeader;
document.getElementById("biggestImpactHeader").innerText = t.biggestImpactHeader;
document.getElementById("mostXPHeader").innerText = t.mostXPHeader;
document.getElementById("biggestStreakHeader").innerText = t.biggestStreakHeader;
document.getElementById("mostBadgeHeader").innerText = t.mostBadgeHeader;

  //Achievements
// Achievements page
document.getElementById("achievementsInfoText").innerText = t.achievementsInfoText;

  //Shop
// Shop page
document.getElementById("badgeCountText").innerText = t.badgeCountText;
document.getElementById("shopMethodsHeader").innerText = t.shopMethodsHeader;
document.getElementById("watchAdBtn").innerText = t.watchAdBtn;
document.getElementById("watchAdReward").innerText = t.watchAdReward;
document.getElementById("veganChallengesText").innerText = t.veganChallengesText;
document.getElementById("streakText").innerText = t.streakText;

  //Challenges
  // Challenges page
document.getElementById("dailyXpTitle").innerText = t.dailyXpTitle;
document.getElementById("dailyXpDesc").innerText = t.dailyXpDesc;
document.getElementById("dailyXpReward").innerText = t.dailyXpReward;
document.getElementById("daily-xp-claim").innerText = t.dailyXpClaimBtn;

document.getElementById("learnChallengeTitle").innerText = t.learnChallengeTitle;
document.getElementById("learnChallengeDesc").innerText = t.learnChallengeDesc;
document.getElementById("learnChallengeReward").innerText = t.learnChallengeReward;
document.getElementById("learnClaimBtn").innerText = t.learnClaimBtn;

document.getElementById("mindfulChallengeTitle").innerText = t.mindfulChallengeTitle;
document.getElementById("mindfulChallengeDesc").innerText = t.mindfulChallengeDesc;
document.getElementById("mindfulChallengeReward").innerText = t.mindfulChallengeReward;
document.getElementById("mindfulStartBtn").innerText = t.mindfulStartBtn;

document.getElementById("encourageChallengeTitle").innerText = t.encourageChallengeTitle;
document.getElementById("encourageChallengeDesc").innerText = t.encourageChallengeDesc;
document.getElementById("chooseFriendLabel").innerText = t.chooseFriendLabel;
const select = document.getElementById("friendSelect");
if (select && select.options.length > 0) {
  select.options[0].textContent = t.selectFriendOption;
}
const placeholder = document.querySelector("#friendSelect .placeholderOption");
if (placeholder) placeholder.textContent = t.selectFriendOption;
document.getElementById("yourMessageLabel").innerText = t.yourMessageLabel;
document.getElementById("encourageReward").innerText = t.encourageReward;
document.getElementById("sendEncourageBtn").innerText = t.sendEncourageBtn;
document.getElementById("encourageTemplateStart").innerText = t.encourageTemplateStart;
document.getElementById("encourageTemplateEnd").innerText = t.encourageTemplateEnd;

  document.getElementById("animalLabel").innerText = t.lessonAnimal;
  document.getElementById("earthLabel").innerText = t.lessonEarth;
  document.getElementById("healthLabel").innerText = t.lessonHealth;
  //Recommendations
// Recommendations
document.getElementById("rec-title").innerText = t.recTitle;

document.getElementById("rec-books-title").innerText = t.recBooksTitle;
document.getElementById("rec-book-1").innerHTML = t.recBook1;
document.getElementById("rec-book-2").innerHTML = t.recBook2;
document.getElementById("rec-book-3").innerHTML = t.recBook3;

document.getElementById("rec-movies-title").innerText = t.recMoviesTitle;
document.getElementById("rec-movie-1").innerText = t.recMovie1;
document.getElementById("rec-movie-2").innerText = t.recMovie2;
document.getElementById("rec-movie-3").innerText = t.recMovie3;
document.getElementById("rec-movie-4").innerText = t.recMovie4;

document.getElementById("rec-websites-title").innerText = t.recWebsitesTitle;
document.getElementById("rec-website-1").innerText = t.recWebsite1;
document.getElementById("rec-website-2").innerText = t.recWebsite2;

  //Subscriptions
// Subscriptions
document.getElementById("subscriptionsTitle").innerText = t.subscriptionsTitle;
document.getElementById("subscriptionsIntro").innerText = t.subscriptionsIntro;
document.getElementById("membershipTiersTitle").innerText = t.membershipTiersTitle;

document.getElementById("seedMemberTitle").innerText = t.seedMemberTitle;
document.getElementById("seedMemberPrice").innerText = t.seedMemberPrice;
document.getElementById("seedMemberBenefit1").innerText = t.seedMemberBenefit1;
document.getElementById("seedMemberBenefit2").innerText = t.seedMemberBenefit2;

document.getElementById("sproutMemberTitle").innerText = t.sproutMemberTitle;
document.getElementById("sproutMemberPrice").innerText = t.sproutMemberPrice;
document.getElementById("sproutMemberBenefit1").innerText = t.sproutMemberBenefit1;
document.getElementById("sproutMemberBenefit2").innerText = t.sproutMemberBenefit2;

document.getElementById("treeMemberTitle").innerText = t.treeMemberTitle;
document.getElementById("treeMemberPrice").innerText = t.treeMemberPrice;
document.getElementById("treeMemberBenefit1").innerText = t.treeMemberBenefit1;
document.getElementById("treeMemberBenefit2").innerText = t.treeMemberBenefit2;

document.getElementById("forestMemberTitle").innerText = t.forestMemberTitle;
document.getElementById("forestMemberPrice").innerText = t.forestMemberPrice;
document.getElementById("forestMemberBenefit1").innerText = t.forestMemberBenefit1;
document.getElementById("forestMemberBenefit2").innerText = t.forestMemberBenefit2;
document.getElementById("forestMemberBenefit3").innerText = t.forestMemberBenefit3;

document.getElementById("earthGuardianTitle").innerText = t.earthGuardianTitle;
document.getElementById("earthGuardianPrice").innerText = t.earthGuardianPrice;
document.getElementById("earthGuardianBenefit1").innerText = t.earthGuardianBenefit1;
document.getElementById("earthGuardianBenefit2").innerText = t.earthGuardianBenefit2;

// Sources
document.getElementById("sourcesContentText").innerText = t.sourcesContentText;

// About Us
document.getElementById("aboutGreeting").innerText = t.aboutGreeting;
document.getElementById("aboutText").innerText = t.aboutText;
document.getElementById("aboutFollowText").innerText = t.aboutFollowText;
document.getElementById("aboutInstagram").innerText = t.aboutInstagram;
document.getElementById("aboutEnding").innerText = t.aboutEnding;

// Contact Us
document.getElementById("contactTitle").innerText = t.contactTitle;
document.getElementById("contactIntro").innerText = t.contactIntro;

document.getElementById("contactSubjectLabel").innerText = t.contactSubjectLabel;
document.getElementById("contactSubjectPlaceholder").innerText = t.contactSubjectPlaceholder;
document.getElementById("contactSubjectBug").innerText = t.contactSubjectBug;
document.getElementById("contactBillingIssue").innerText = t.contactBillingIssue;
document.getElementById("contactSubjectFeedback").innerText = t.contactSubjectFeedback;
document.getElementById("contactSubjectFeature").innerText = t.contactSubjectFeature;
document.getElementById("contactSubjectCommunity").innerText = t.contactSubjectCommunity;
document.getElementById("contactSubjectOther").innerText = t.contactSubjectOther;

document.getElementById("contactMessageLabel").innerText = t.contactMessageLabel;
document.getElementById("contactMessage").placeholder = t.contactMessagePlaceholder;

document.getElementById("sendContactMessage").innerText = t.sendContactMessageBtn;

// Settings
document.getElementById("settingsTitle").innerText = t.settingsTitle;
document.getElementById("languageLabel").innerText = t.languageLabel;

document.getElementById("langOptionEn").innerText = t.langOptionEn;
document.getElementById("langOptionEs").innerText = t.langOptionEs;
document.getElementById("langOptionHu").innerText = t.langOptionHu;

document.getElementById("saveLanguageBtn").innerText = t.saveLanguageBtn;
document.getElementById("languageInfo").innerText = t.languageInfo;

document.getElementById("logoutBtn").innerText = t.logoutBtn;
document.getElementById("deleteProfileBtn").innerText = t.deleteProfileBtn;

//PopUps

  // Popups Animals / Forest / Water / CO2
  ["animalsSentence","forestSentence","waterSentence","co2Sentence"].forEach(id => {
    document.getElementById(id).innerText = t[id];
  });
  ["impactSentence1","impactSentence2","impactSentence3","impactSentence4"].forEach(id => {
    document.getElementById(id).innerText = t[id];
  });
  ["openCalculatorText1","openCalculatorText2","openCalculatorText3","openCalculatorText4"].forEach(id => {
    document.getElementById(id).innerText = t[id];
  });

  // Impact Calculator
  document.getElementById("ImpactCalcTitle").innerText = t.ImpactCalcTitle;
  document.getElementById("ImpactCalcYears").childNodes[0].textContent = t.ImpactCalcYears + " ";
  document.getElementById("ImpactCalcMonths").childNodes[0].textContent = t.ImpactCalcMonths + " ";
  document.getElementById("calculateImpactBtn").innerText = t.calculateImpactBtn;

  // Meal Art
  document.getElementById("mealArtModalPrepTime").innerText = t.mealArtPrepTime;
  document.getElementById("mealArtIngredient").innerText = t.mealArtIngredient;
  document.getElementById("mealArtInstructions").innerText = t.mealArtInstructions;

  // Upload Recipe
  document.getElementById("uploadNewRecipe").innerText = t.uploadNewRecipe;
  document.getElementById("RecipeImageuploadform").innerText = t.RecipeImguploadform;
  document.getElementById("RecipeTitleuploadform").innerText = t.RecipeTitleuploadform;
  document.getElementById("RecipePrepTimeuploadform").innerText = t.RecipePrepTimeuploadform;
  document.getElementById("RecipeIngredientsuploadform").innerText = t.RecipeIngredientsuploadform;
  document.getElementById("RecipeInstructionsuploadform").innerText = t.RecipeInstructionsuploadform;
  document.getElementById("UploadRecipeButton").innerText = t.UploadRecipeButton;

  // Recipe Modal
  document.getElementById("RecipeModalPrepTime").innerText = t.RecipeModalPrepTime;
  document.getElementById("RecipeModalIngredients").innerText = t.RecipeModalIngredients;
  document.getElementById("RecipeModalInstructions").innerText = t.RecipeModalInstructions;

  // Profile Card
  document.querySelector(".profile-name").innerText = t.profileName;
  //document.querySelector(".dietprofilecard").innerText = t.dietprofilecard;
  //document.querySelector(".goalsprofilecard").innerText = t.goalsprofilecard;
  document.querySelector(".levelprofilecard").innerText = t.levelprofilecard;
  document.querySelector(".streakprofilecard").innerText = t.streakprofilecard;
  document.getElementById("achievements-heading").innerText =t.achievementsHeading;

  // Pro Kitchen
  document.getElementById("ReqProKitchen").innerText = t.ReqProKitchen;
  document.getElementById("InfoReqProKitchen").innerText = t.InfoReqProKitchen;
  document.getElementById("proKitchenMessage").placeholder = t.proKitchenMessage;
  document.getElementById("sendProKitchenRequest").innerText = t.sendProKitchenRequest;

  // Local Business
  document.getElementById("ReqBusinessList").innerText = t.ReqBusinessList;
  document.getElementById("ReqBusinessListLabel").innerText = t.ReqBusinessListLabel;
  document.getElementById("localBusinessMessage").placeholder = t.localBusinessMessage;
  document.getElementById("sendLocalBusinessRequest").innerText = t.sendLocalBusinessRequest;

  // Mindful Popup
  document.getElementById("mindfulTimerRow").childNodes[0].textContent = t.mindfulTimerRow + " ";
  document.getElementById("mindfulPopupRewardBtn").innerText = t.mindfulPopupRewardBtn;

  // Shop Modal
  document.getElementById("shopModalConfirm").innerText = t.shopModalConfirm;
  document.getElementById("shopModalCancel").innerText = t.shopModalCancel;

  // Mentor Popup
  document.getElementById("ApplyAsAMentor").innerText = t.ApplyAsAMentor;
  document.getElementById("ApplyAsAMentorQuestion").innerText = t.ApplyAsAMentorQuestion;
  document.getElementById("mentor-years").placeholder = t.ApplyAsAMentorQuestion;
  document.getElementById("mentor-submit").innerText = t.mentorSubmit;
  document.getElementById("mentor-cancel").innerText = t.mentorCancel;

  // Anonymous Forum
  document.getElementById("AFnewCommentInput").placeholder = t.AFnewCommentInput;
  document.getElementById("AFsubmitCommentBtn").innerText = t.AFsubmitCommentBtn;

  // Chat / Friend
  document.getElementById("SelectAFriendToStartChat").innerText = t.SelectAFriendToStartChat;
  document.getElementById("friendfriendcode").placeholder = t.friendfriendcode;
  document.getElementById("sendFriendRequestBtn").innerText = t.sendFriendRequestBtn;
  document.getElementById("YourFriendCode").innerText = t.YourFriendCode;

  // Confirmation Popup
  document.getElementById("confirmBtn").innerText = t.confirmBtn;
  document.getElementById("cancelBtn").innerText = t.cancelBtn;

}

//#endregion 

//#region INIT
//--------------------------
// SUPABASE
//--------------------------
import { supabase } from './supabaseClient.mjs';

import { LessonsByIndex } from './scriptpools.js';
import { HealthIssuesPool } from './scriptpools.js';
import { extralessonsData } from './scriptpools.js';

//--------------------------
// GLOBAL VARIABLES
//--------------------------
let currentUser = null;
let currentProfile = null;
let currentGlobalImpact = null;
let globalImpact = {
  animals_saved: 0,
  forest_saved: 0,
  water_saved: 0,
  co2_saved: 0,
  donated: 0
};
let currentMeals = [];

// Forum/chat
let activeBlockId = null;

const goalsInputs = document.querySelectorAll('input[name="goal"]');
const healthIssuesSection = document.getElementById("q2b");

let messageSubscription = null;

//--------------------------
// Translations for UI strings
//--------------------------
const initTranslations = {
  en: {
    startStreak: "Start your streak today!",
    streakActive: "Streak active!",
    checkInToday: "Check in today to keep your streak!",
    missedStreak: ({ badgeCost }) =>
      `You missed your streak! You can save it after check-in by spending ${badgeCost} badges - make sure you have them!`,
    maxLevel: "Max level reached",
    recipe: "Recipe",
    noRecipe: "No recipe",
    repeatedLesson: "Repeated lesson",
    spoilerlabel: ({ spoilerDay, nextLesson }) =>
  `${spoilerDay}'s lesson: ${nextLesson}`,

  greetingMorning: "Good morning",
  greetingAfternoon: "Good afternoon",
  greetingEvening: "Good evening",
  lessonLine: ({ lessonTitle }) =>
    `Start by doing your daily check-in, today's lesson: ${lessonTitle}`,
ongoingEvent: ({ place, description }) =>
  `🔥 Ongoing event: ${place} — ${description}`,

eventToday: ({ time, place, description }) =>
  `📍 Community event today at ${time}: ${place} — ${description}`,

eventTomorrow: ({ time, place, description }) =>
  `📍 Community event tomorrow at ${time}: ${place} — ${description}`,

journeyStart: "Your journey is just starting… 🌱",

statAnimals: ({ v }) => `That’s like protecting ${v} lives 🐾`,
statCO2: ({ km }) => `That’s like driving ${km} km less 🚗`,
statWater: ({ showers }) => `That’s like saving ${showers} showers 🚿`,
statForest: ({ area }) => `That’s like protecting ${area} m² of forest 🌳`,

consistency90: ({ vegan, total, percentage }) => [
  `${vegan} days fully plant-based out of ${total}? You’re absolutely crushing it 🔥`,
  `${vegan}/${total} days fully plant-based — that’s elite consistency 🌟`,
  `${vegan} plant-based days out of ${total}. This is next-level commitment 💯`,
  `${vegan} fully plant-based days out of ${total}? You’ve built a powerful habit ⚡`,
  `${vegan}/${total} days fully plant-based — seriously impressive consistency 👏`,
  `${vegan} days fully plant-based… this is who you are now 🌱`,
  `${vegan} out of ${total} days fully plant-based — you're setting the standard 🔥`,
  `${percentage}% of your days have been fully plant-based — that’s impressive!`
],

consistency70: ({ vegan, total, percentage }) => [
  `${vegan} out of ${total} days fully plant-based — that’s strong consistency 💪`,
  `${vegan}/${total} days fully plant-based — you’re doing really well, keep it going 🌱`,
  `${vegan} plant-based days out of ${total}. You’re on a great path 🚀`,
  `${vegan}/${total} days fully plant-based — solid progress, you’re getting there ⚡`,
  `${vegan} days fully plant-based — your consistency is building 🌿`,
  `${vegan} out of ${total} days fully plant-based? You’re closer than you think 👏`,
  `${vegan}/${total} days fully plant-based — keep this momentum going 🔥`,
  `${percentage}% of your days have been fully plant-based — great progress!`
],

consistency40: ({ vegan, total, percentage }) => [
  `${vegan} plant-based days so far — you’re building something real 🌱`,
  `${vegan}/${total} days fully plant-based — every step is progress 💚`,
  `${vegan} days fully plant-based — that’s a strong start 🌿`,
  `${vegan}/${total} days fully plant-based — you're moving in the right direction ⚡`,
  `${vegan} plant-based days — habits take time, you're on it 🌱`,
  `${vegan}/${total} days fully plant-based — progress, not perfection 👣`,
  `${vegan} days so far — keep going, it adds up 💪`,
  `${percentage}% of your days have been fully plant-based — you're getting there!`
],

consistencyLow: ({ vegan, total, percentage }) => [
  `${vegan} plant-based days — every step counts 🌿 keep going`,
  `${vegan}/${total} days fully plant-based — you're starting something meaningful 🌱`,
  `${vegan} days so far — small steps lead to real change 💚`,
  `${vegan}/${total} days fully plant-based — just getting started, and that’s okay 👣`,
  `${vegan} plant-based days — keep exploring, no pressure 🌿`,
  `${vegan}/${total} days fully plant-based — every choice matters 🌱`,
  `${vegan} days fully plant-based — you’re already making progress 💚`,
  `${percentage}% of your days have been fully plant-based — that’s a start!`
],

mealWinnerAmateur: ({ name }) => [
  `${name}'s meal looks incredible and just won the MealArt contest… but does it taste as good as it looks? Will you try recreating it at home?`,
  `${name} just took the MealArt crown — stunning presentation, but we’re wondering… can the flavor match the looks? Would you cook it yourself?`,
  `Winner alert!🏆 ${name}'s dish impressed everyone visually… now the real question is: how good is the taste? Ready to recreate it in your kitchen?`,
  `${name} wins MealArt with a gorgeous creation — but is it just as delicious as it is beautiful? Could you pull this off at home?`,
  `${name} made a showstopper dish that won the contest… but the debate starts now: looks vs taste — would you try making it?`,
  `${name}'s meal just won the MealArt contest — a beautiful home-cooked creation loved by everyone`,
  `Community favorite! ${name} impressed with a warm, delicious-looking homemade dish`,
  `Big win for ${name}🏆! A heartfelt home meal that stood out for its creativity and charm`,
  `${name} takes the crown with a cozy, comforting dish that everyone enjoyed`,
  `${name} created something special — a true celebration of home cooking talent`
],

mealWinnerPro: ({ name }) => [
  `${name} just won the MealArt Pro category with a restaurant-level masterpiece… but does it taste as elite as it looks? Would you recreate it at home?`,
  `Professional win for ${name} — flawless presentation and technique… but here’s the real test: is the flavor just as impressive?`,
  `${name} dominates the MealArt Pro contest with a chef-level dish… but would you dare recreate this at home?`,
  `${name} delivers a culinary masterpiece worthy of a fine dining menu… but the question remains: how does it taste?`,
  `${name} takes the crown with pro-level execution… but can this restaurant-quality dish be recreated in your own kitchen?`,
  `${name} wins the MealArt Pro category with a stunning restaurant-quality dish`,
  `A flawless creation by ${name} — refined, elegant, and expertly crafted`,
  `Professional victory for ${name} 🏆 — a dish that showcases true culinary skill`,
  `${name} delivers excellence on every level — technique, presentation, and creativity`,
  `${name} takes the win with a beautifully executed pro-level masterpiece`
],

communityImpactHeadline: "Impact of our unity",

communityAnimals: ({ values = {} }) => {
  const animals = values.animals ?? 0;

  return[
  `Together, our choices have saved ${animals} animals. Every individual decision added up to this change.`,
  `${animals} animals have been spared because we chose differently — your choices are part of this impact.`
]
},
communityForest: ({ values = {} }) => {
  const forest = values.forest ?? 0;

  return[
  `We’ve preserved ${forest} m² of forest together. Each personal choice helped protect something larger than ourselves.`,
  `${forest} m² of forest remain standing because individual actions aligned into collective change.`
]},

communityWater: ({ values = {} }) => {
  const water = values.water ?? 0;

  return[
  `Together, we’ve saved ${water} liters of water. Every personal choice helped reduce the pressure on this essential resource.`,
  `${water} liters of water have been saved through individual decisions that, combined, created real impact.`
]},

communityCO2: ({ values = {} }) => {
  const co2 = values.co2 ?? 0;

  return[
  `Together, we’ve avoided ${co2} kg of CO₂. Each personal choice reduced the weight we put on the planet.`,
  `${co2} kg of CO₂ have been saved through individual decisions coming together into real climate impact.`
]},

labelAnimals: " are safe — imagine them as happy friends roaming, swimming, and enjoying life freely!",
labelCO2: "CO₂",
labelWater: "liters of water",
labelForest: "m² of forest",
statsPrefix: ({ value, label }) =>
  `Because of you ${value} ${label}.`,
keepGoing: "Keep it up! 🐶",
recommendLearn: "Want to discover something new today? Your learning adventure awaits! 📚",
recommendLocal: "Your community is waiting for you 🐾",
recommendMealart: "Try creating something beautiful with food! See the Meal Art section for inspiration 🍽️",
recommendDefault: "Explore something new today!",

otherGrainText: "So far, you've saved enough grain to make {bread} loaves of bread 🥖",
otherGrainInfo: "Animals are very inefficient at converting calories into food. A large share of global crops is fed to livestock instead of people. (Source: <a href='https://ourworldindata.org/global-land-for-agriculture' target='_blank'>Our World in Data</a>)",

otherCaloriesText: "So far, you've saved about {calories} kcal — enough to feed {peopleFed} people for a day 🍽",
otherCaloriesInfo: "Animals are very inefficient at converting calories into food. A large share of global crops is fed to livestock instead of people. We calculated with 7000 calories/fully plant-based day. (Source: <a href='https://ourworldindata.org/global-land-for-agriculture' target='_blank'>Our World in Data</a>)",

otherAntibioticsText: "So far, you've helped avoid antibiotic use equal to {treatments} treatments 💊",
otherAntibioticsInfo: "Most antibiotics are used in animal agriculture, contributing to resistance. Reducing demand helps protect their effectiveness. (Source: <a href='https://ourworldindata.org/antibiotics-livestock' target='_blank'>Our World in Data</a>)",

  },
  es: {
    startStreak: "¡Comienza tu racha hoy!",
    streakActive: "¡Racha activa!",
    checkInToday: "¡Regístrate hoy para mantener tu racha!",
    missedStreak: ({ badgeCost }) =>
      `¡Perdiste tu racha! Puedes salvarla después de registrarte gastando ${badgeCost} insignias. ¡Asegúrate de tenerlas!`,
    maxLevel: "Nivel máximo alcanzado",
    recipe: "Receta",
    noRecipe: "Sin receta",
    repeatedLesson: "Lección repetida",
    spoilerlabel: ({ spoilerDay, nextLesson }) =>
  `Lección de ${spoilerDay}: ${nextLesson}`,
  greetingMorning: "Buenos días",
  greetingAfternoon: "Buenas tardes",
  greetingEvening: "Buenas tardes",
  lessonLine: ({ lessonTitle }) =>
    `Empieza con tu check-in diario, lección de hoy: ${lessonTitle}`,
ongoingEvent: ({ place, description }) =>
  `🔥 Evento en curso: ${place} — ${description}`,

eventToday: ({ time, place, description }) =>
  `📍 Evento comunitario hoy a las ${time}: ${place} — ${description}`,

eventTomorrow: ({ time, place, description }) =>
  `📍 Evento comunitario mañana a las ${time}: ${place} — ${description}`,

journeyStart: "Tu viaje acaba de comenzar… 🌱",

statAnimals: ({ v }) => `Es como proteger ${v} vidas 🐾`,
statCO2: ({ km }) => `Es como conducir ${km} km menos 🚗`,
statWater: ({ showers }) => `Es como ahorrar ${showers} duchas 🚿`,
statForest: ({ area }) => `Es como proteger ${area} m² de bosque 🌳`,

consistency90: ({ vegan, total, percentage }) => [
  `${vegan} días completamente plant-based de ${total}? Estás arrasando 🔥`,
  `${vegan}/${total} días completamente plant-based — consistencia élite 🌟`,
  `${vegan} días plant-based de ${total}. Compromiso de otro nivel 💯`,
  `${vegan} días completamente plant-based de ${total}? Has creado un hábito muy fuerte ⚡`,
  `${vegan}/${total} días completamente plant-based — consistencia impresionante 👏`,
  `${vegan} días completamente plant-based… así eres ahora 🌱`,
  `${vegan} de ${total} días completamente plant-based — estás marcando el estándar 🔥`,
  `${percentage}% de tus días han sido completamente plant-based — ¡impresionante!`
],

consistency70: ({ vegan, total, percentage }) => [
  `${vegan} de ${total} días completamente plant-based — buena consistencia 💪`,
  `${vegan}/${total} días completamente plant-based — lo estás haciendo muy bien 🌱 sigue así`,
  `${vegan} días plant-based de ${total}. Vas por un gran camino 🚀`,
  `${vegan}/${total} días completamente plant-based — buen progreso, ya casi estás ⚡`,
  `${vegan} días completamente plant-based — tu constancia está creciendo 🌿`,
  `${vegan} de ${total} días completamente plant-based? Estás más cerca de lo que crees 👏`,
  `${vegan}/${total} días completamente plant-based — mantén este ritmo 🔥`,
  `${percentage}% de tus días han sido completamente plant-based — ¡gran progreso!`
],

consistency40: ({ vegan, total, percentage }) => [
  `${vegan} días plant-based hasta ahora — estás construyendo algo real 🌱`,
  `${vegan}/${total} días completamente plant-based — cada paso cuenta 💚`,
  `${vegan} días completamente plant-based — buen comienzo 🌿`,
  `${vegan}/${total} días completamente plant-based — vas en la dirección correcta ⚡`,
  `${vegan} días plant-based — los hábitos llevan tiempo 🌱`,
  `${vegan}/${total} días completamente plant-based — progreso, no perfección 👣`,
  `${vegan} días hasta ahora — sigue así 💪`,
  `${percentage}% de tus días han sido completamente plant-based — vas mejorando 🌱`
],

consistencyLow: ({ vegan, total, percentage }) => [
  `${vegan} días plant-based — cada paso cuenta 🌿 sigue adelante`,
  `${vegan}/${total} días completamente plant-based — estás empezando algo importante 🌱`,
  `${vegan} días hasta ahora — los pequeños pasos importan 💚`,
  `${vegan}/${total} días completamente plant-based — acabas de empezar, y está bien 👣`,
  `${vegan} días plant-based — sin presión 🌿`,
  `${vegan}/${total} días completamente plant-based — cada decisión cuenta 🌱`,
  `${vegan} días completamente plant-based — ya estás avanzando 💚`,
  `${percentage}% de tus días han sido completamente plant-based — es un comienzo 🌱`
],

mealWinnerAmateur: ({ name }) => [
  `${name} acaba de ganar el concurso MealArt… pero, ¿sabe tan bien como parece? ¿Te animas a recrearlo en casa?`,
  `${name} acaba de ganar la corona de MealArt — una presentación impresionante, pero nos preguntamos… ¿el sabor estará a la altura? ¿Lo cocinarías tú?`,
  `🏆 ¡Ganador/a! El plato de ${name} impresionó visualmente a todos… ahora la gran pregunta es: ¿qué tal sabe? ¿Te animas a recrearlo en tu cocina?`,
  `${name} gana MealArt con una creación espectacular — pero, ¿será tan deliciosa como bonita? ¿Podrías hacerlo en casa?`,
  `${name} creó un plato que se llevó el concurso… pero empieza el debate: apariencia vs sabor — ¿lo intentarías hacer?`,
  `${name} acaba de ganar el concurso MealArt — una creación casera preciosa y muy apreciada por todos`,
  `¡Favorito de la comunidad! ${name} impresionó con un plato casero cálido y delicioso`,
  `🏆 ¡Gran victoria para ${name}! Un plato casero lleno de creatividad y encanto`,
  `${name} se lleva la corona con un plato acogedor que todos disfrutaron`,
  `${name} creó algo especial — una verdadera celebración de la cocina casera`
],

mealWinnerPro: ({ name }) => [
  `${name} acaba de ganar la categoría Pro de MealArt con una obra maestra de nivel restaurante… pero, ¿sabrá tan bien como parece? ¿Te atreverías a recrearlo?`,
  `Victoria profesional para ${name} — presentación y técnica impecables… pero la gran pregunta es: ¿el sabor es igual de impresionante?`,
  `${name} domina el concurso Pro de MealArt con un plato de nivel chef… ¿te atreverías a recrearlo en casa?`,
  `${name} entrega una obra culinaria digna de alta cocina… pero la duda sigue: ¿cómo sabrá realmente?`,
  `${name} gana con una ejecución de nivel profesional… pero, ¿se puede recrear esto en tu cocina?`,
  `${name} gana la categoría Pro de MealArt con un plato espectacular de nivel restaurante`,
  `Una creación impecable de ${name} — refinada, elegante y perfectamente ejecutada`,
  `🏆 Victoria profesional para ${name} — una muestra clara de habilidad culinaria`,
  `${name} demuestra excelencia en todos los niveles — técnica, presentación y creatividad`,
  `${name} se lleva la victoria con una obra maestra de nivel chef`
],

communityImpactHeadline: "El impacto de nuestra unión",

communityAnimals: ({ values = {} }) => {
  const water = values.water ?? 0;

  return[
  `Juntos, nuestras decisiones han salvado ${animals} animales. Cada elección individual ha contribuido a este cambio.`,
  `${animals} animales han sido salvados porque eligimos de forma diferente — tus decisiones forman parte de este impacto.`
]},

communityForest: ({ values = {} }) => {
  const forest = values.forest ?? 0;

  return[
  `Hemos preservado ${forest} m² de bosque juntos. Cada elección personal ayudó a proteger algo más grande que nosotros mismos.`,
  `${forest} m² de bosque siguen en pie porque las acciones individuales se unieron en un cambio colectivo.`
]},

communityWater: ({ values = {} }) => {
  const water = values.water ?? 0;

  return[
  `Juntos, hemos ahorrado ${water} litros de agua. Cada decisión personal ha reducido la presión sobre este recurso esencial.`,
  `${water} litros de agua han sido ahorrados gracias a decisiones individuales que, juntas, han creado un impacto real.`
]},

communityCO2: ({ values = {} }) => {
  const co2 = values.co2 ?? 0;

  return[
  `Juntos, hemos evitado ${co2} kg de CO₂. Cada decisión personal ha reducido la carga que ponemos en el planeta.`,
  `${co2} kg de CO₂ han sido evitados gracias a decisiones individuales que, unidas, generan un impacto climático real.`
]},

labelAnimals: "animales",
labelCO2: "CO₂",
labelWater: "litros de agua",
labelForest: "m² de bosque",
statsPrefix: ({ value, label }) =>
  `Hasta ahora has salvado ${value} ${label}.`,
keepGoing: "¡Sigue así! 🐶",
recommendLearn: "¿Quieres descubrir algo nuevo hoy? ¡Tu aventura de aprendizaje te espera! 📚",
recommendLocal: "Tu comunidad te está esperando 🐾",
recommendMealart: "¡Intenta crear algo bonito con comida! Inspírate en la sección Meal Art 🍽️",
recommendDefault: "¡Explora algo nuevo hoy!",

otherGrainText: "Hasta ahora, has ahorrado suficiente grano como para hacer {bread} barras de pan 🥖",
otherGrainInfo: "Los animales son muy ineficientes al convertir calorías en alimento. Una gran parte de los cultivos globales se destina a alimentar al ganado en lugar de a las personas. (Fuente: <a href='https://ourworldindata.org/global-land-for-agriculture' target='_blank' rel='noopener noreferrer'>Our World in Data</a>)",

otherCaloriesText: "Hasta ahora, has ahorrado aproximadamente {calories} kcal — suficiente para alimentar a {peopleFed} personas durante un día 🍽",
otherCaloriesInfo: "Los animales son muy ineficientes al convertir calorías en alimento. Una gran parte de los cultivos globales se destina a alimentar al ganado en lugar de a las personas. Calculamos usando 7000 calorías por día completamente vegetal. (Fuente: <a href='https://ourworldindata.org/global-land-for-agriculture' target='_blank' rel='noopener noreferrer'>Our World in Data</a>)",

otherAntibioticsText: "Hasta ahora, has ayudado a evitar el uso de antibióticos equivalente a {treatments} tratamientos 💊",
otherAntibioticsInfo: "La mayoría de los antibióticos se utilizan en la ganadería, lo que contribuye a la resistencia antimicrobiana. Reducir la demanda ayuda a preservar su eficacia. (Fuente: <a href='https://ourworldindata.org/antibiotics-livestock' target='_blank' rel='noopener noreferrer'>Our World in Data</a>)",
  },
  hu: {
    startStreak: "Kezdd el a sorozatot ma!",
    streakActive: "Sorozat aktív!",
    checkInToday: "Jelentkezz ma a sorozat fenntartásához!",
    missedStreak: ({ badgeCost }) =>
      `Kihagytad a sorozatot! Ellenőrzés után megmentheted a sorozatot ${badgeCost} jelvény felhasználásával – győződj meg róla, hogy van elég!`,
    maxLevel: "Elérted a maximális szintet",
    recipe: "Recept",
    noRecipe: "Nincs recept",
    repeatedLesson: "Ismételt lecke",
    spoilerlabel: ({ spoilerDay, nextLesson }) =>
  `${spoilerDay} lecke: ${nextLesson}`,
  greetingMorning: "Jó reggelt",
  greetingAfternoon: "Jó napot",
  greetingEvening: "Jó estét",
  lessonLine: ({ lessonTitle }) =>
    `Kezdd a napi bejelentkezéssel, a mai leckéd: ${lessonTitle}`,
ongoingEvent: ({ place, description }) =>
  `🔥 Folyamatban lévő esemény: ${place} — ${description}`,

eventToday: ({ time, place, description }) =>
  `📍 Közösségi esemény ma ${time}-kor: ${place} — ${description}`,

eventTomorrow: ({ time, place, description }) =>
  `📍 Közösségi esemény holnap ${time}-kor: ${place} — ${description}`,

journeyStart: "Az utad most kezdődik… 🌱",

statAnimals: ({ v }) => ``,
statCO2: ({ km }) => `Ez ${km} km-rel kevesebb autózás 🚗`,
statWater: ({ showers }) => `Ez ${showers} zuhany megtakarítása 🚿`,
statForest: ({ area }) => `Ez ${area} m² erdő megvédése 🌳`,

consistency90: ({ vegan, total, percentage }) => [
  `${vegan}/${total} nap teljesen növényi étrenden? Egyszerűen lenyűgöző 🔥`,
  `${vegan}/${total} nap teljesen növényi étrenden? — elit szintű folytonosság 🌟`,
  `${vegan}/${total} nap teljesen növényi étrenden! Ez már következő szint 💯`,
  `${vegan}/${total} nap teljesen növényi étrenden! Nagyon erős szokást építettél ⚡`,
  `${vegan}/${total} nap teljesen növényi étrenden — elképesztő következetesség 👏`,
  `${vegan}/${total} nap teljesen növényi étrenden… ez már te vagy 🌱`,
  `${vegan}/${total} nap teljesen növényi étrenden… — te állítod a mércét 🔥`,
  `A napjaid ${percentage}%-a teljesen növényi étrendű — lenyűgöző!`
],

consistency70: ({ vegan, total, percentage }) => [
  `${vegan}/${total} nap teljesen növényi étrenden? — erős következetesség 💪`,
  `${vegan}/${total} nap teljesen növényi étrenden — nagyon jól csinálod 🌱 csak így tovább`,
  `${vegan}/${total} teljesen növényi étrenden! Jó úton haladsz 🚀`,
  `${vegan}/${total} nap teljesen növényi étrenden — szép fejlődés, már közel vagy ⚡`,
  `${vegan}/${total} nap teljesen növényi étrenden — szépen épül a szokás 🌿`,
  `${vegan}/${total} nap teljesen növényi étrenden? Közelebb vagy, mint gondolnád 👏`,
  `${vegan}/${total} nap teljesen növényi étrenden! — tartsd ezt a lendületet 🔥`,
  `A napjaid ${percentage}%-a teljesen növényi étrendű — szép eredmény!`
],

consistency40: ({ vegan, total, percentage }) => [
  `${vegan}/${total} nap teljesen növényi étrenden — valami valósat építesz 🌱`,
  `${vegan}/${total} nap teljesen növényi étrenden! Minden lépés számít 💚`,
  `${vegan}/${total} nap teljesen növényi étrenden! — jó kezdet!`,
  `${vegan}/${total} nap teljesen növényi étrenden — jó irányba haladsz ⚡`,
  `${vegan}/${total} nap teljesen növényi étrenden — a szokások időt igényelnek 🌱`,
  `${vegan}/${total} nap teljesen növényi étrenden — fejlődés, nem tökéletesség 👣`,
  `${vegan}/${total} nap teljesen növényi étrenden — csak így tovább 💪`,
  `A napjaid ${percentage}%-a teljesen növényi étrendű — haladsz előre 🌱`
],

consistencyLow: ({ vegan, total, percentage }) => [
  `${vegan}/${total} nap teljesen növényi étrenden — minden lépés számít 🌿 csak folytasd`,
  `${vegan}/${total} nap teljesen növényi étrenden — valami fontosba kezdtél 🌱`,
  `Eddig${vegan}/${total} nap teljesen növényi étrenden — a kis lépések is számítanak 💚`,
  `${vegan}/${total} nap teljesen növényi étrenden — most kezded, és ez rendben van 👣`,
  `${vegan}/${total} nap teljesen növényi étrenden — lesz ez több is?`,
  `${vegan}/${total} nap teljesen növényi étrenden — minden döntés számít 🌱`,
  `${vegan}/${total} nap teljesen növényi étrenden — már most is haladsz 💚`,
  `A napjaid ${percentage}%-a növényi étrendű — ez egy kezdet 🌱`
],

mealWinnerAmateur: ({ name }) => [
  `${name} étele lenyűgözőnek tűnik, és megnyerte a MealArt versenyt… de vajon olyan jó az íze is, mint a látványa? Megpróbálnád otthon elkészíteni?`,
  `${name} megnyerte a MealArt versenyt — lenyűgöző tálalás, de vajon… az íz is olyan jó? Megfőznéd otthon?`,
  `🏆 Győztes! ${name} étele mindenkit lenyűgözött látványra… de a nagy kérdés: milyen az íze? Megpróbálnád otthon elkészíteni?`,
  `${name} megnyerte a MealArt-ot egy gyönyörű fogással — de vajon olyan finom is, mint amilyen szép? Megcsinálnád otthon?`,
  `${name} olyan ételt készített, ami megnyerte a versenyt… de indul a vita: kinézet vs íz — megpróbálnád elkészíteni?`,
  `${name} megnyerte a MealArt versenyt — egy gyönyörű házi készítésű étel, amit mindenki imádott`,
  `Közönségkedvenc! ${name} egy meleg, otthonos és finomnak tűnő étellel nyűgözött le mindenkit`,
  `🏆 Nagy győzelem ${name} számára! Egy kreatív és szívmelengető házi fogás`,
  `${name} viszi a koronát egy igazán otthonos, mindenki által szeretett étellel`,
  `${name} valami igazán különlegeset alkotott — a házi főzés ünnepe`
],

mealWinnerPro: ({ name }) => [
  `${name} megnyerte a MealArt Pro kategóriát egy éttermi szintű mesterművel… de vajon az íze is olyan kifinomult? Újra elkészítenéd?`,
  `Profi győzelem ${name} számára — hibátlan tálalás és technika… de a kérdés: az íz is ilyen jó?`,
  `${name} dominálta a MealArt Pro versenyt egy séf szintű fogással… megpróbálnád otthon elkészíteni?`,
  `${name} egy fine dining szintű kulináris alkotást hozott… de vajon milyen az íze?`,
  `${name} profi szintű kivitelezéssel nyert… de otthon is meg tudnád csinálni?`,
  `${name} megnyerte a Pro kategóriát egy lenyűgöző éttermi fogással`,
  `${name} tökéletes alkotása — kifinomult, elegáns és precízen elkészített`,
  `🏆 Professzionális győzelem ${name} számára — valódi szakmai tudás`,
  `${name} minden szinten kiemelkedőt nyújtott — technika, tálalás és kreativitás`,
  `${name} egy igazi séf szintű mesterművel nyerte meg a versenyt`
],

communityImpactHeadline: "Az egységünk hatása",

communityAnimals: ({ values = {} }) => {
  const animals = values.animals ?? 0;

  return [
  `Együtt ${animals} állat életét mentettük meg. Minden egyéni döntés hozzájárult ehhez a változáshoz.`,
  `${animals} állat menekült meg, mert mi másképp döntöttünk — a te döntéseid is részei ennek a hatásnak.`
]},

communityForest: ({ values = {} }) => {
  const forest = values.forest ?? 0;

  return [
  `Együtt ${forest} m² erdőt őriztünk meg. Minden személyes döntés segített megvédeni valamit, ami nagyobb nálunk.`,
  `${forest} m² erdő maradt meg, mert az egyéni tettek közös változássá álltak össze.`
]},

communityWater: ({ values = {} }) => {
  const water = values.water ?? 0;

  return [
    `Együtt ${water} liter vizet spóroltunk meg. Minden személyes döntés csökkentette a terhelést ezen az alapvető erőforráson.`,
    `${water} liter vizet sikerült megtakarítani olyan egyéni döntésekből, amelyek együtt valódi hatást hoztak.`
  ];
},

communityCO2: ({ values = {} }) => {
  const co2 = values.co2 ?? 0;

  return [
  `Együtt ${co2} kg CO₂ kibocsátást kerültünk el. Minden személyes döntés csökkentette a bolygóra nehezedő terhet.`,
  `${co2} kg CO₂ került elkerülésre egyéni döntésekből, amelyek együtt valódi klímahatást hoztak.`
]},

labelAnimals: "állatot",
labelCO2: "CO₂-t",
labelWater: "liter vizet",
labelForest: "m² erdőt",
statsPrefix: ({ value, label }) =>
  `Eddig ${value} ${label} mentettél meg.`,
keepGoing: "Csak így tovább! 🐶",
recommendLearn: "Szeretnél ma valami újat felfedezni? A tanulási kaland vár rád! 📚",
recommendLocal: "A közösséged vár rád 🐾",
recommendMealart: "Próbálj valami szépet alkotni étellel! Nézd meg a Meal Art részt inspirációért 🍽️",
recommendDefault: "Fedezz fel ma valami újat!",

otherGrainText: "Eddig elegendő gabonát takarítottál meg ahhoz, hogy {bread} kenyér készüljön belőle 🥖",
otherGrainInfo: "Az állatok nagyon hatékonytalanul alakítják át a kalóriákat élelmiszerré. A világ terményeinek jelentős részét inkább állatok takarmányozására használják, nem pedig emberek táplálására. (Forrás: <a href='https://ourworldindata.org/global-land-for-agriculture' target='_blank' rel='noopener noreferrer'>Our World in Data</a>)",

otherCaloriesText: "Eddig körülbelül {calories} kcal-t takarítottál meg — ez elegendő {peopleFed} ember egy napi ellátására 🍽",
otherCaloriesInfo: "Az állatok nagyon hatékonytalanul alakítják át a kalóriákat élelmiszerré. A világ terményeinek jelentős részét inkább állatok takarmányozására használják, nem pedig emberek táplálására. A számítás alapja napi 7000 kalória egy teljesen növényi étrend esetén. (Forrás: <a href='https://ourworldindata.org/global-land-for-agriculture' target='_blank' rel='noopener noreferrer'>Our World in Data</a>)",

otherAntibioticsText: "Eddig annyi antibiotikum-használatot segítettél elkerülni, ami {treatments} kezelésre elég 💊",
otherAntibioticsInfo: "Az antibiotikumok nagy részét az állattenyésztésben használják, ami hozzájárul az antibiotikum-rezisztencia kialakulásához. A kereslet csökkentése segít megőrizni a hatékonyságukat. (Forrás: <a href='https://ourworldindata.org/antibiotics-livestock' target='_blank' rel='noopener noreferrer'>Our World in Data</a>)",
  }
};

// ===== Translation pools for Goals =====
const goalTranslations = {
  "Protecting animals & animal welfare": {
    en: "Protecting animals",
    es: "Protección de los animales",
    hu: "Az állatok védelme"
  },
  "Caring for the environment & fighting climate change": {
    en: "Caring for the environment",
    es: "Cuidar el medio ambiente",
    hu: "A környezet védelme"
  },
  "Healthy living & wellness": {
    en: "Healthy living",
    es: "Vida saludable",
    hu: "Egészséges életmód"
  },
  "Solving health issues": {
    en: "Solving health issues",
    es: "Resolver problemas de salud",
    hu: "Egészségügyi problémák megoldása"
  },
  "Boosting my performance as an athlete": {
    en: "Boosting my performance as an athlete",
    es: "Mejorar mi rendimiento como atleta",
    hu: "Teljesítményem növelése sportolóként"
  }
};

// ===== Translation pools for Health Issues =====
const healthTranslations = {
  "Heart disease": {
    en: "Heart disease",
    es: "Enfermedad cardíaca",
    hu: "Szívbetegség"
  },
  "High cholesterol": {
    en: "High cholesterol",
    es: "Colesterol alto",
    hu: "Magas koleszterin"
  },
  "High blood pressure": {
    en: "High blood pressure",
    es: "Hipertensión",
    hu: "Magas vérnyomás"
  },
  "Type 2 diabetes": {
    en: "Type 2 diabetes",
    es: "Diabetes tipo 2",
    hu: "2-es típusú cukorbetegség"
  },
  "Obesity": {
    en: "Obesity",
    es: "Obesidad",
    hu: "Elhízás"
  },
  "Digestive issues": {
    en: "Digestive issues",
    es: "Problemas digestivos",
    hu: "Emésztési problémák"
  },
  "Inflammation or swelling": {
    en: "Inflammation or swelling",
    es: "Inflamación o hinchazón",
    hu: "Gyulladás vagy duzzanat"
  },
  "Fatigue": {
    en: "Fatigue",
    es: "Fatiga",
    hu: "Fáradtság"
  },
  "Cancer risk": {
    en: "Concerned about cancer risk",
    es: "Preocupado por el riesgo de cáncer",
    hu: "Aggodalom a rák kockázata miatt"
  }
};

const dietTranslations = {
  Vegan: {
    en: "Vegan",
    es: "Vegano",
    hu: "Vegán"
  },
  Vegetarian: {
    en: "Vegetarian",
    es: "Vegetariano",
    hu: "Vegetáriánus"
  },
  Pescatarian: {
    en: "Pescatarian",
    es: "Pescetariano",
    hu: "Peszkatáriánus"
  },
  Omnivore: {
    en: "Omnivore",
    es: "Omnívoro",
    hu: "Mindenevő"
  },
  Flexitarian: {
    en: "Flexitarian",
    es: "Flexitariano",
    hu: "Flexitáriánus"
  },
  InTransition: {
    en: "In Transition",
    es: "En Transición",
    hu: "Átmenetben"
  }
};

function translateFromPool(pool, value, lang) {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value.map(v => pool[v]?.[lang] || v);
  }

  return pool[value]?.[lang] || value;
}

const encouragements = {
    en: [
      "Be kind to every kind 💚",
      "Strong people protect the weak, brave people protect the vulnerable, and compassionate people protect all beings.",
      "In every way that matters, we are all the same — we all want to be happy and avoid suffering.",
      "If a kind word can change someone's day, imagine what a kind world can do.",
      "The more love you give, the more love you have to give.",
      "Compassion starts when you notice the needs of others.",
      "If a person longs for a righteous world, their first act is to abstain from harming others.",
      "Every animal is someone, not something.",
      "The true measure of any society can be found in how it treats its most vulnerable members.",
      "The best way to find yourself is to lose yourself in the service of others.",
      "Their silence doesn’t mean they don’t feel — it means we must listen more carefully.",
      "The world is full of kind people. If you can’t find one, be one.",
      "A peaceful world begins with the choices we make when no one is watching.",
      "Gentleness is strength when it protects those who cannot protect themselves.",
      "Love becomes meaningful when it extends beyond our own kind.",
      "We share this world; we don’t own it",
      "The way we treat the vulnerable defines the world we live in."
      ],
    es: [
    "Sé amable con todos los seres 💚",
    "Las personas fuertes protegen a los débiles, las valientes protegen a los vulnerables, y las compasivas protegen a todos los seres.",
    "En todo lo que realmente importa, somos iguales — todos queremos ser felices y evitar el sufrimiento.",
    "Si una palabra amable puede cambiar el día de alguien, imagina lo que puede hacer un mundo amable.",
    "Cuanto más amor das, más amor tienes para dar.",
    "La compasión comienza cuando notas las necesidades de los demás.",
    "Si una persona anhela un mundo justo, su primer acto es abstenerse de dañar a otros.",
    "Cada animal es alguien, no algo.",
    "La verdadera medida de cualquier sociedad es cómo trata a sus miembros más vulnerables.",
    "La mejor manera de encontrarte a ti mismo es perderte en el servicio a los demás.",
    "Su silencio no significa que no sientan — significa que debemos escuchar con más atención.",
    "El mundo está lleno de personas amables. Si no encuentras una, sé tú esa persona.",
    "Un mundo pacífico comienza con las decisiones que tomamos cuando nadie nos está mirando.",
    "La gentileza es fuerza cuando protege a quienes no pueden protegerse a sí mismos.",
    "El amor se vuelve significativo cuando se extiende más allá de nuestra propia especie.",
    "Compartimos este mundo; no nos pertenece.",
    "La forma en que tratamos a los vulnerables define el mundo en el que vivimos."
],
    hu: [
    "Légy kedves minden élőlénnyel 💚",
    "Az erős emberek védik a gyengéket, a bátrak védik a kiszolgáltatottakat, és az együttérzők minden élőlényt védenek.",
    "Minden fontos szempontból egyformák vagyunk — mindannyian boldogok szeretnénk lenni és elkerülni a szenvedést.",
    "Ha egy kedves szó megváltoztathatja valakinek a napját, képzeld el, mire képes egy kedves világ.",
    "Minél több szeretetet adsz, annál több szereteted lesz adni.",
    "Az együttérzés ott kezdődik, amikor észreveszed mások szükségleteit.",
    "Ha valaki egy igazságos világra vágyik, az első lépése az, hogy tartózkodik attól, hogy másoknak ártson.",
    "Minden állat valaki, nem valami.",
    "Egy társadalom igazi mércéje az, ahogyan a legkiszolgáltatottabb tagjaival bánik.",
    "Az önmagad megtalálásának legjobb módja, ha elveszel mások szolgálatában.",
    "A hallgatásuk nem jelenti azt, hogy nem éreznek — azt jelenti, hogy figyelmesebben kell hallgatnunk.",
    "A világ tele van kedves emberekkel. Ha nem találsz egyet, légy te az.",
    "Egy békés világ azokkal a döntésekkel kezdődik, amelyeket akkor hozunk, amikor senki sem figyel.",
    "A gyengédség erő, amikor azokat védi, akik nem tudják megvédeni magukat.",
    "A szeretet akkor válik igazán jelentőssé, amikor túlmutat a saját fajunkon.",
    "A világunkon osztozunk; nem uraljuk.",
    "Az, ahogyan a kiszolgáltatottakkal bánunk, meghatározza a világot, amelyben élünk."
    ]
  };

function applyProfileTranslations(popup, data) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

  // 🌿 DIET
  const translatedDiet = dietTranslations[data.diet]?.[lang] || data.diet;
  popup.querySelector(".dietprofilecard").textContent = `🌿 ${translatedDiet}`;

  // 🎯 GOALS
  const goalsContainer = popup.querySelector(".goalsprofilecard");
  const translatedGoals = translateFromPool(goalTranslations, data.goals, lang);

  goalsContainer.innerHTML = `🎯 ${initT("goalsLabel") || "Goals"}<br>`;

  if (Array.isArray(translatedGoals)) {
    translatedGoals.forEach(goal => {
      goalsContainer.innerHTML += `• ${goal}<br>`;
    });
  } else if (translatedGoals) {
    goalsContainer.innerHTML += `• ${translatedGoals}`;
  }

  // 🌍 LEVEL + 🔥 STREAK (static labels optional)
  popup.querySelector(".levelprofilecard").textContent = `🌍 ${data.level}`;
  popup.querySelector(".streakprofilecard").textContent = `🔥 ${data.streak}`;

  // 🏆 ACHIEVEMENTS TITLE
  document.getElementById("achievements-heading").innerText =
    initT("achievementsHeading") || "Achievements";
}

function translateDiet(value) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  return translateFromPool(dietTranslations, value, lang);
}

// Helper function to get translation
function initT(key, variables = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  const translation = initTranslations[lang]?.[key] || initTranslations.en[key] || key;
  return typeof translation === "function" ? translation(variables) : translation;
}

//--------------------------
// FETCH DATA
//--------------------------
async function fetchAllData() {
  // 1️⃣ Get current user
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return console.error("Not logged in:", userError);
  currentUser = user;

  // 2️⃣ Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select(`id, profile_photo, frame, pet_name, pet_photo, streak,
      animals_saved, forest_saved, water_saved, co2_saved, total_xp, current_level,
      last_checkin_date, goals, health_issues, badge, day_counter, goal_progress,
      is_pro, diet_preference, last_lesson, health_progress, extra_lesson,
      completed_health_issues, lesson_progress, achievements, title,
      bought_items, xp_today, friend_code, survey_completed, name, completed_lessons, 
      pending_streak_action, vegan_days`)
    .eq("id", user.id)
    .single();
  if (profileError) return console.error("Error fetching profile:", profileError);
  currentProfile = profile;

  // 3️⃣ Fetch global impact (single row)
  const { data: impact, error: impactError } = await supabase
    .from("global_impact")
    .select("animals_saved, forest_saved, water_saved, co2_saved")
    .single();
  if (impactError) return console.error("Error fetching global impact:", impactError);
  currentGlobalImpact = impact; // assign fetched row to top-level variable

  // 4️⃣ Fetch meals
  const { data: meals, error: mealsError } = await supabase
    .from("meals")
    .select("*");
  if (mealsError) return console.error("Error fetching meals:", mealsError);
  currentMeals = meals;

  return { profile, impact, meals };
}


//--------------------------
// PROFILE RENDERING
//--------------------------
async function renderProfile() {
  const profile = currentProfile;
  const globalImpact = currentGlobalImpact;
  
  if (!profile) return;

  ["profilePhoto","profilePhotoTop","profilePhotoprofile","profilePhotoPreview"].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;

  const hasFrame = profile.frame && profile.frame.trim() !== "";

  // If it's still an IMG → convert it to DIV (so frame works)
  if (el.tagName === "IMG") {
    const parent = el.parentElement;

    const div = document.createElement("div");
    div.className = el.className; // keep styles
    div.dataset.profilePhotoDiv = "true";

    // safer sizing fallback
    const size = el.offsetWidth || 70;
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.borderRadius = "50%";

    // Apply image + optional frame
    div.style.backgroundImage = hasFrame
      ? `url('${profile.frame}'), url('${profile.profile_photo || 'default.jpg'}')`
      : `url('${profile.profile_photo || 'default.jpg'}')`;

    div.style.backgroundSize = hasFrame ? "100% 100%, cover" : "cover";
    div.style.backgroundPosition = "center";
    div.style.backgroundRepeat = "no-repeat";

    parent.replaceChild(div, el);

  } else if (el.dataset.profilePhotoDiv === "true") {
    // Already a DIV → just update
    el.style.backgroundImage = hasFrame
      ? `url('${profile.frame}'), url('${profile.profile_photo || 'default.jpg'}')`
      : `url('${profile.profile_photo || 'default.jpg'}')`;

    el.style.backgroundSize = hasFrame ? "100% 100%, cover" : "cover";
  }
});

  

  // Name & Diet
  document.getElementById("profileName").textContent = profile.name || "-";
  const nameHomeEl = document.getElementById("profileNameHome");

if (nameHomeEl) {
  nameHomeEl.textContent = profile.title
    ? `${profile.name || "-"}, ${profile.title}`
    : profile.name || "-";
}
  document.getElementById("profileNamehp").textContent = profile.name || "-";
  document.getElementById("profileNameInput").value = profile.name || "-";
  document.getElementById("diet").textContent = translateDiet(profile.diet_preference) || "-";
  document.getElementById("profileDietSelect").value = profile.diet_preference || "-";

  // Streak, Level, Badge
  document.getElementById("streak-counter").textContent = profile.streak || 0;
  document.getElementById("currentLevel").textContent = profile.current_level || 0;
  document.getElementById("streak-counterprofile").textContent = profile.streak || 0;
  document.getElementById("currentLevelprofile").textContent = profile.current_level || 0;
  document.getElementById("badgeprofile").textContent = profile.badge || 0;

  
  // ===== Goals =====
const goalsList = document.getElementById("goalsList");
goalsList.innerHTML = "";
const goals = toArray(profile.goals);
const lang = localStorage.getItem("lang") || "en";

goals.forEach(goal => {
  const li = document.createElement("li");
  li.textContent = (goalTranslations[goal]?.[lang]) || goal; // Fallback to original if missing
  goalsList.appendChild(li);
});

// Update checkboxes (values remain the same)
document.querySelectorAll('input[name="goal"]').forEach(cb => {
  cb.checked = goals.includes(cb.value);
});

  // ===== Health Issues =====
  const healthList = document.getElementById("healthIssuesList");
  healthList.innerHTML = "";
  const issues = toArray(profile.health_issues);
  issues.forEach(issue => {
  const li = document.createElement("li");
  li.textContent = (healthTranslations[issue]?.[lang]) || issue; // Fallback if missing
  healthList.appendChild(li);
});
  document.querySelectorAll('input[name="healthIssue"]').forEach(cb => {
    cb.checked = issues.includes(cb.value);
  });
  toggleHealthIssues();

  // Pet
  ["petPhotoprofile", "petPhotoPreview", "petStepAvatar"].forEach(id => {
    const el = document.getElementById(id);
    if (el && profile.pet_photo) el.src = profile.pet_photo;
  });
 // document.getElementById("petName").textContent = profile.pet_name || "-";
  document.getElementById("petNameprofile").textContent = profile.pet_name || "-";
  document.getElementById("petNameInput").value = profile.pet_name || "-";
  //document.getElementById("petStepName").value = profile.pet_name || "-";

  // Hide empty lists titles
  document.querySelectorAll(".details-list").forEach(list => {
    if (list.querySelectorAll("li").length === 0) {
      if (list.previousElementSibling) list.previousElementSibling.style.display = "none";
      list.style.display = "none";
    }
  });


  // Counters
  const countersElements = {
    animalsSavedEl: document.getElementById('savedAnimals'),
    forestSavedEl: document.getElementById('savedForest'),
    waterSavedEl: document.getElementById('savedWater'),
    co2SavedEl: document.getElementById('savedCO2'),
    donatedEl: document.getElementById('savedDonated'),
    levelBar: document.getElementById('levelBar'),
    levelProgress: document.getElementById('levelProgress'),
    currentLevelEl: document.getElementById("currentLevel"),
    streakEl: document.getElementById('streak-counter')
  };

  // ===== Level & XP =====
  const totalXP = profile.total_xp ?? 0;
  const levelData = getLevelFromXP(totalXP);
  const { level, xpTowardsNextLevel, xpNeededForNextLevel } = levelData;

  if (countersElements.levelProgress) {
    if (level >= 100) {
      countersElements.levelProgress.style.display = "none";
    } else {
      countersElements.levelProgress.style.display = "block";
      let progressPercent = (xpTowardsNextLevel / xpNeededForNextLevel) * 100;
      progressPercent = Math.min(progressPercent, 100);
      countersElements.levelProgress.style.width = progressPercent + '%';
      countersElements.currentLevelEl.textContent = level;
    }
  }

 // --- Daily check-in logic ---
//const checkinBtn = document.getElementById("checkinBtn");
//const lessonPathBtn = document.getElementById("lessonPathBtn"); // <-- new
//const dailyCheckInSection = document.getElementById("dailycheck-in");
//const lessonPathSection = document.getElementById("lesson-path");

// Helper to format date in UTC as YYYY-MM-DD
function getUTCDateString(date) {
  return (
    date.getUTCFullYear() + '-' +
    String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
    String(date.getUTCDate()).padStart(2, '0')
  );
}

// Streak fire icon
const streakFire = document.querySelector("#streak .fire");
const todayUTC = new Date();
const todayStr = getUTCDateString(todayUTC);

 // SpoilerTitle
 const nextLessonEl = document.getElementById("NextLessonSpoiler");
if (nextLessonEl) {
  nextLessonEl.classList.remove("hidden");
}

const hasCheckedInToday = profile.last_checkin_date === todayStr;

if (hasCheckedInToday) {
  // ✅ Checked in today → spoiler is disabled
  nextLessonEl.disabled = true;
  nextLessonEl.classList.add("disabled");
} else {
  // 🕓 Not checked in → spoiler is active
  nextLessonEl.disabled = false;
  nextLessonEl.classList.remove("disabled");
}

const { lesson: nextLesson } = getNextLessonFromPool(currentProfile);

renderNextLessonSpoiler({
  profile: currentProfile,
  todayStr,
  nextLessonTitle: nextLesson
    ? getLessonTitle(nextLesson)
    : initT("repeatedLesson"),
  usedFallback: !nextLesson
});

// Yesterday
const yesterdayUTC = new Date();
yesterdayUTC.setUTCDate(yesterdayUTC.getUTCDate() - 1);
const yesterdayStr = getUTCDateString(yesterdayUTC);

if (!profile.last_checkin_date) {
  // Never checked in yet
  streakFire.classList.add("inactive");
  streakFire.setAttribute("title", initT("startStreak"));
} else if (profile.last_checkin_date === todayStr) {
  // Checked in today
  streakFire.classList.remove("inactive");
  streakFire.textContent = "🔥"; // normal fire emoji
  streakFire.setAttribute("title", initT("streakActive"));
} else if (profile.last_checkin_date === yesterdayStr) {
  // Checked in yesterday but not today
  streakFire.classList.add("inactive");
  streakFire.textContent = "🔥"; 
  streakFire.setAttribute("title", initT("checkInToday"));
} else if (profile.last_checkin_date < yesterdayStr) {
  // Missed one or more days
  streakFire.classList.add("inactive");
  streakFire.textContent = "⚠️🔥"; // warning + fire
  
  // ✅ Calculate badgeCost dynamically
  const badgeCost = calculateBadgeCost(profile, todayStr);
  streakFire.setAttribute("title", initT("missedStreak", { badgeCost }));
}

  // Personal impact cards
  document.getElementById('youAnimals').textContent = formatNumber(profile.animals_saved ?? 0);
  document.getElementById('youForest').textContent  = formatNumber(profile.forest_saved ?? 0);
  document.getElementById('youWater').textContent   = formatNumber(profile.water_saved ?? 0);
  document.getElementById('youCO2').textContent     = formatNumber(profile.co2_saved ?? 0);

  // Community impact from fetched variable
  if (globalImpact) {
  //  document.getElementById('communityAnimals').textContent = formatNumber(globalImpact.animals_saved ?? 0);
  //  document.getElementById('communityForest').textContent  = formatNumber(globalImpact.forest_saved ?? 0);
  //  document.getElementById('communityWater').textContent   = formatNumber(globalImpact.water_saved ?? 0);
  //  document.getElementById('communityCO2').textContent     = formatNumber(globalImpact.co2_saved ?? 0);
  }

  // ===== XP to next level =====
const xpRemaining = xpNeededForNextLevel - xpTowardsNextLevel;

const xpToNextEl = document.getElementById("xpRemaining");
if (xpToNextEl) {
  if (level >= 100) {
    xpToNextEl.textContent =  initT("maxLevel");
  } else {
    xpToNextEl.textContent = `${xpRemaining}`;
  }
}

  // Pet rendering
  const petDisplay = document.getElementById("petDisplay");
  const petAvatar = document.getElementById("petAvatar");

  function renderPet(container) {
    if (!container) return;
    container.innerHTML = "";
    if (profile.pet_photo) {
      const petImg = document.createElement("img");
      petImg.src = profile.pet_photo;
      petImg.alt = profile.pet_name || "Pet";
      petImg.classList.add("pet-photo");
      container.appendChild(petImg);
    } else if (profile.pet_name) {
      container.textContent = profile.pet_name;
    }
  }

  renderPet(petDisplay);
  renderPet(petAvatar);
  
// When opening the friend request popup
const myCodeDiv = document.getElementById("myfriendcode");
if (myCodeDiv && currentProfile?.friend_code) {
  myCodeDiv.textContent = currentProfile.friend_code;
}
  updateFinishButtonState();
  renderHomepageFirst(profile, todayStr);

  return profile;
}

function setGreeting() {
  const greetingEl = document.getElementById("greetingTime");
  if (!greetingEl) return;

  const hour = new Date().getHours();

  let greetingKey;

  if (hour < 12) {
    greetingKey = "greetingMorning";
  } else if (hour < 18) {
    greetingKey = "greetingAfternoon";
  } else {
    greetingKey = "greetingEvening";
  }

  greetingEl.textContent = initT(greetingKey);
}

setGreeting();

function renderHomepageFirst(profile) {
  const textEl = document.getElementById("dailyCheckinText");
  const nameEl = document.getElementById("profileNamehp");

  if (!textEl || !nameEl) return;

  // Name
  nameEl.textContent = profile.name || "";

  // Get lesson
  const { lesson, usedFallback } = getNextLessonFromPool(profile);

  let lessonTitle = "Your next learning step 🌱";

  if (!usedFallback && lesson) {
    lessonTitle = getLessonTitle(lesson);
  }

  // 🔥 Use translation like spoilerlabel
  textEl.textContent = initT("lessonLine", {
    lessonTitle
  });
}

// --------------------------
// NEXT LESSON SPOILER RENDERER
// --------------------------
// --------------------------
// CHECK IF ANY NEXT LESSON EXISTS
// --------------------------
function hasNextLesson(profile) {
  const defaultGoalOrder = [
    "Protecting animals & animal welfare",
    "Caring for the environment & fighting climate change",
    "Healthy living & wellness",
    "Boosting my performance as an athlete"
  ];

  const normalize = s => (s || "").toString().trim().toLowerCase();

  // 1️⃣ Determine available goals
  let availableGoals;
  if (Array.isArray(profile.goals) && profile.goals.length > 0) {
    const selectedNorm = profile.goals.map(g => normalize(g));
    availableGoals = defaultGoalOrder.filter(g => selectedNorm.includes(normalize(g)));
  } else {
    availableGoals = defaultGoalOrder.slice();
  }

  if (!availableGoals.length) return false;

  // 2️⃣ Get all lessons for the user's selected goals
  const allGoalLessons = Object.values(LessonsByIndex)
    .filter(lesson => availableGoals.some(goal => normalize(lesson.goal) === normalize(goal)));

  if (!allGoalLessons.length) return false;

  // 3️⃣ Check if any lesson is not completed
  const completed = (profile.completed_lessons || [])
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  const hasPending = allGoalLessons.some(lesson => !completed.includes(lesson.id || lesson.lessonId));

  return hasPending;
}

function getLessonDayOffset(profile, todayStr) {
  // 0 = today, 1 = tomorrow
  return profile.last_checkin_date === todayStr ? 1 : 0;
}

function renderNextLessonSpoiler({
  profile,
  todayStr,
  nextLessonTitle,
  usedFallback
}) {
  const el = document.getElementById("NextLessonSpoiler");
  if (!el) return;

  // Add 'hidden' class if fallback was used
  if (usedFallback) {
    el.classList.add("hidden");
    return; // stop further rendering
  } else {
    el.classList.remove("hidden");
  }

  const dayOffset = getLessonDayOffset(profile, todayStr);
  const spoilerDay = getSpoilerDayLabel(dayOffset);

  el.textContent = initT("spoilerlabel", {
    spoilerDay,
    nextLesson: nextLessonTitle
  });

  return dayOffset; // 🔥 IMPORTANT: return it for lesson pool usage
}

function getSpoilerDayLabel(dayOffset) {
  const lang = localStorage.getItem("lang") || "en";

  const labels = {
    en: ["Today", "Tomorrow"],
    es: ["hoy", "mañana"],
    hu: ["Mai", "Holnapi"]
  };

  return labels[lang]?.[dayOffset] || labels.en[dayOffset];
}

function getLessonTitle(lesson) {
  if (!lesson) return "Your next learning step 🌱";
  const lang = localStorage.getItem("lang") || "en";

  if (lesson.title) return lesson.title[lang] || lesson.title.en || "Your next learning step 🌱";
  if (lesson.lesson) return lesson.lesson[lang] || lesson.lesson.en || "Your next learning step 🌱";

  return "Your next learning step 🌱";
}

function getNextLessonFromPool(profile) {
  const defaultGoalOrder = [
    "Protecting animals & animal welfare",
    "Caring for the environment & fighting climate change",
    "Healthy living & wellness",
    "Boosting my performance as an athlete"
  ];

  const normalize = s => (s || "").toString().trim().toLowerCase();

  // 1️⃣ Determine available goals
  let availableGoals;
  if (Array.isArray(profile.goals) && profile.goals.length > 0) {
    const selectedNorm = profile.goals.map(g => normalize(g));
    availableGoals = defaultGoalOrder.filter(g => selectedNorm.includes(normalize(g)));
  } else {
    availableGoals = defaultGoalOrder.slice();
  }

  if (!availableGoals.length) return { lesson: null, usedFallback: true };

  // 2️⃣ Determine today's goal based on day counter
  const todayGoalIndex = (profile.day_counter || 0) % availableGoals.length;
  const todayGoal = availableGoals[todayGoalIndex] || availableGoals[0];

  // 3️⃣ Determine diet group
  const allowedDiets = ["omnivore", "vegetarian", "vegan"];
  const lessonDiet = getLessonDietGroup(profile.diet_preference).toLowerCase();

  // 4️⃣ Get start index for this goal & diet
  const startIndex = (
    dietStartIndex[todayGoal] &&
    dietStartIndex[todayGoal][lessonDiet]
  ) ? parseInt(dietStartIndex[todayGoal][lessonDiet], 10)
    : 1;

  // 5️⃣ Get all lessons for the goal (any diet)
  const allGoalLessons = Object.entries(LessonsByIndex)
    .filter(([id, lesson]) => normalize(lesson.goal) === normalize(todayGoal))
    .sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10));

  if (!allGoalLessons.length) return { lesson: null, usedFallback: true };

  // 6️⃣ Completed lessons
  const completed = (profile.completed_lessons || [])
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  // 7️⃣ Find the next lesson starting from the user's diet group
  let nextLesson = null;
  for (let [id, lesson] of allGoalLessons) {
    const numericId = parseInt(id, 10);
    const lessonDietLower = (lesson.diet || "").toLowerCase();

    if (numericId >= startIndex && !completed.includes(numericId)) {
      const currentDietIndex = allowedDiets.indexOf(lessonDiet);
      const lessonDietIndex = allowedDiets.indexOf(lessonDietLower);

      if (lessonDietIndex >= currentDietIndex) {
        nextLesson = lesson;
        break;
      }
    }
  }

  // 8️⃣ If no lesson left, return null (no fallback)
  if (!nextLesson) return { lesson: null, usedFallback: true };

  return { lesson: nextLesson, usedFallback: false };
}

async function setNewsBox() {

  const steps = [
    onBoardRecommendation,
    upcomingevent,
    loadWinnersFromData
  ];

for (const step of steps) {
    const result = await step();

    // STOP the whole flow if a step says so
    if (result === "STOP") return;
  }

  // fallback (always runs if not stopped earlier)
  defaultCase();
}

async function onBoardRecommendation(ctx) {

  const day = currentProfile.day_counter;

  if (day <= 1 || day >= 5) {
    return; // not applicable, continue flow
  }

  const undiscovered = getUndiscoveredSections();
  const visitDate = localStorage.getItem("visitDate");
  const today = new Date().toISOString().split("T")[0];

  if (!undiscovered || undiscovered.length === 0) {
  return; // or "NO_UNDISCOVERED"
}
  
  // already shown today → stop full flow
  if (visitDate === today) {
    return;
  }

  let didRecommend = false;

    const priority = ["learn", "local", "mealart"];

    const sectionToRecommend = priority.find(section =>
      undiscovered.includes(section)
    );

    if (sectionToRecommend) {
      recommendSection(sectionToRecommend);
      didRecommend = true;
    }
  

  const box = document.getElementById("petOnboardingBox");
  if (box) box.classList.remove("hidden");

  // if onboarding successfully ran → stop everything else
  if (didRecommend || box) {
    return "STOP";
  }
}

async function upcomingevent() {

  const now = new Date();
  const dayKey = now.toISOString().split("T")[0];
  const storageKey = `event_tomorrow_${dayKey}`;

  const stored = localStorage.getItem(storageKey);

  // BLOCK EARLY IF ALREADY SHOWN TODAY
  if (stored) {
    const data = JSON.parse(stored);

    if (data.day === dayKey && data.shown === true) {
      return; // stop everything immediately
    }
  }

  let locationId = window.currentCommunityLocationId;

  // If not available yet → fetch it here
  if (!locationId) {

    const { data: participant, error } = await supabase
      .from("community_participants")
      .select("location_id")
      .eq("user_id", currentUser.id)
      .maybeSingle();

    if (error || !participant) {
      return;
    }

    locationId = participant.location_id;
    window.currentCommunityLocationId = locationId;

  }
  let events = window.communityEventsGlobal;

if (!events) {

  const locationId = window.currentCommunityLocationId;
  if (!locationId) return;

  const { data, error } = await supabase
    .from("community_events")
    .select("id, location_id, place, description, event_date, user_id, username")
    .eq("location_id", locationId)
    .order("event_date", { ascending: true });

  if (error || !data) {
    return;
  }

  events = data;
  window.communityEventsGlobal = data;
}

const event = events.find(e => {
  const eventDate = new Date(e.event_date);
  const oneHourAfterStart = new Date(eventDate.getTime() + 60 * 60 * 1000);

  // Ignore events more than 1 hour in the past
  if (now > oneHourAfterStart) return false;

  return true;
});

if (!event) return;

// Determine status
const eventDate = new Date(event.event_date);
const oneHourAfterStart = new Date(eventDate.getTime() + 60 * 60 * 1000);

let when;

if (now >= eventDate && now <= oneHourAfterStart) {
  when = "ongoing";
} else {
  const today = new Date().toDateString();
  const tomorrowDate = new Date();
  tomorrowDate.setDate(now.getDate() + 1);
  const tomorrow = tomorrowDate.toDateString();

  if (eventDate.toDateString() === today) {
    when = "today";
  } else if (eventDate.toDateString() === tomorrow) {
    when = "tomorrow";
  } else {
    return;
  }
}

const box = document.getElementById("petOnboardingBox");
const textEl = document.getElementById("petOnboardingText");
const photoEl = document.getElementById("petOnboardingPhoto");

if (!box || !textEl || !photoEl) {
  return;
}

const time = new Date(event.event_date).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit"
});

box.classList.remove("hidden");
photoEl.src = currentProfile.pet_photo || "default-pet.jpg";

  let message;

if (when === "ongoing") {
  message = initT("ongoingEvent", {
    place: event.place,
    description: event.description
  });
} else if (when === "today") {
  message = initT("eventToday", {
    time,
    place: event.place,
    description: event.description
  });
} else {
const now = new Date();

// YYYY-MM-DD in UTC (stable across timezones)
const dayKey = now.toISOString().split("T")[0];

const storageKey = `event_tomorrow_${dayKey}`;

const stored = localStorage.getItem(storageKey);

if (stored) {
  const data = JSON.parse(stored);

  if (data.shown === true) {
    return;
  }
}

// allow showing + reset for today
localStorage.setItem(storageKey, JSON.stringify({
  day: dayKey,
  shown: false
}));
  message = initT("eventTomorrow", {
    time,
    place: event.place,
    description: event.description


  });
}

  textEl.textContent = message;

  return "STOP";
}

async function loadWinnersFromData(ctx) {

const now = new Date();
const day = now.getDay();
const year = now.getUTCFullYear();
const week = getWeekNumber(now);

const storageKey = `meal_winners_${year}_W${week}`;

let stored = localStorage.getItem(storageKey);
let data = null;

if (stored) {
  data = JSON.parse(stored);
}

if (
  (day === 1) || 
  (data &&
  data.week === `${year}-W${week}` && data.shown === true )
) {
  return;
}

  if (!currentMeals || currentMeals.length === 0) return;

  function getLatestWinner(isPro) {
    return currentMeals
      .filter(meal => meal.is_winner && meal.is_pro === isPro)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;
  }

  const amateurWinner = getLatestWinner(false);
  const proWinner = getLatestWinner(true);

  let didRender = false;

  if (amateurWinner) {
    const amateurNameEl = document.getElementById("amateurName");
      amateurNameEl.textContent = amateurWinner.uploader_name;
      amateurNameEl.dataset.userid = amateurWinner.user_id;

      amateurNameEl.style.cursor = "pointer";

      amateurNameEl.onclick = () => openProfile(amateurNameEl);

    document.getElementById("amateurImage").src = amateurWinner.image_url;
    document.getElementById("amateurImagePopup").src = amateurWinner.image_url;

    setupMealArtImage(
      "amateurImage",
      ".recipe-badge",
      amateurWinner,
      "popupAmateur"
    );

    didRender = true;
  }

  if (proWinner) {
    const proNameEl = document.getElementById("proName");
      proNameEl.textContent = proWinner.uploader_name;
      proNameEl.dataset.userid = proWinner.user_id;

      proNameEl.style.cursor = "pointer";

      proNameEl.onclick = () => openProfile(proNameEl);

    document.getElementById("proImage").src = proWinner.image_url;
    document.getElementById("proImagePopup").src = proWinner.image_url;

    setupMealArtImage(
      "proImage",
      ".recipe-badge",
      proWinner,
      "popupProfessional"
    );

    didRender = true;
  }

  const el = document.querySelector(".meal-art-winners");
  if (el) el.classList.remove("hidden");

  // if winners were shown → stop flow
  if (didRender) {
  const now = new Date();

  // ISO week-based key (simple stable weekly identifier)
  const year = now.getUTCFullYear();
  const week = getWeekNumber(now); // helper function below

  const storageKey = `meal_winners_${year}_W${week}`;

  const data = {
    week: `${year}-W${week}`,
    shown: false
  };

  localStorage.setItem(storageKey, JSON.stringify(data));
  return "STOP";
}
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

window.setWinnersOpenedTrue = function() {
  const now = new Date();

  // ------------------------
  // 1. WEEK WINNERS
  // ------------------------
  const year = now.getUTCFullYear();
  const week = getWeekNumber(now);
  const weekKey = `meal_winners_${year}_W${week}`;

  const weekStored = localStorage.getItem(weekKey);
  if (weekStored) {
    const data = JSON.parse(weekStored);
    data.shown = true;
    localStorage.setItem(weekKey, JSON.stringify(data));
  }

  // ------------------------
  // 2. EVENT TOMORROW (DAILY KEY)
  // ------------------------
  const dayKey = now.toISOString().split("T")[0];
  const eventKey = `event_tomorrow_${dayKey}`;

  const eventStored = localStorage.getItem(eventKey);
  if (eventStored) {
    const data = JSON.parse(eventStored);
    data.shown = true;
    localStorage.setItem(eventKey, JSON.stringify(data));
  }
};

function injectClickableName(message, winner) {
  return message.replace(
    winner.name,
    `<span class="winner-name" data-userid="${winner.user_id}">${winner.uploader_name}</span>`
  );
}

//--------------------------
// DEFAULT CASE - RANDOM STAT OR WINNER
//--------------------------
function defaultCase(ctx) {
  const box = document.getElementById("petOnboardingBox");
  const textEl = document.getElementById("petOnboardingText");
  const photoEl = document.getElementById("petOnboardingPhoto");
  const currentLang = window.appState?.lang || localStorage.getItem("lang") || "en";

  if (!box || !textEl || !photoEl) return;

  // Show the box
  box.classList.remove("hidden");

  // Optional: set a pet image (fallback if none)
  photoEl.src = currentProfile.pet_photo || "default-pet.jpg";

  // --- Pick random stat ---
  const stats = [
{
  key: "encouragement",
  value: 1, // always valid so it can be picked
  message: () => {
    const lang = currentLang || "en"; // however you store language
    const messages = encouragements[lang] || encouragements.en;

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return randomMessage;
  }
},

{
  key: "animals_saved",
  value: currentProfile.animals_saved,
  message: () => {
    const animals = Math.round(currentProfile.animals_saved || 0);

    const sentences = comparisonTranslations[currentLang || "en"].animalsSentence;

    const item = sentences[Math.floor(Math.random() * sentences.length)];

    return {
      text: replaceValues(item.text, { animals }),
      info: item.info
    };
  }
},

{
  key: "co2_saved",
  value: currentProfile.co2_saved,
  message: () => {
  const co2 = Math.round(currentProfile.co2_saved || 0);
  const carHours = Math.round(co2 / 10);
  const trees = Math.round(co2 / 20);
  const kWh = co2 / 0.3;
  const householdsPerMonth = Math.round((kWh / 300) * 10) / 10;

  const sentences = comparisonTranslations[currentLang || "en"].co2Sentence;
  const item = sentences[Math.floor(Math.random() * sentences.length)];

  return {
    text: replaceValues(item.text, {
      co2,
      carHours,
      trees,
      householdsPerMonth
    }),
    info: item.info
  };
}
},

{
  key: "water_saved",
  value: currentProfile.water_saved,
  message: () => {
  const water = Math.round(currentProfile.water_saved || 0);

  const showers = Math.round(water / 65);
  const people = Math.round(water / 50);
  const drinkingDays = Math.round(water / 2);
  const pools = Math.round(water / 2000);

  const sentences = comparisonTranslations[currentLang || "en"].waterSentence;
  const item = sentences[Math.floor(Math.random() * sentences.length)];

  return {
    text: replaceValues(item.text, {
      water,
      showers,
      people,
      drinkingDays,
      pools
    }),
    info: item.info
  };
}
},

{
  key: "forest_saved",
  value: currentProfile.forest_saved,
  message: () => {
  const forest = Math.round(currentProfile.forest_saved || 0);

  const trees = Math.round(forest / 10);
  const paper = Math.round(trees * 8000);
  const birds = Math.round(trees * 2);
  const co2Absorbed = Math.round(trees * 10);

  const sentences = comparisonTranslations[currentLang || "en"].forestSentence;
  const item = sentences[Math.floor(Math.random() * sentences.length)];

  return {
    text: replaceValues(item.text, {
      forest,
      trees,
      paper,
      birds,
      co2Absorbed
    }),
    info: item.info
  };
}
},

{
  key: "other_impacts",
  value: 1, // always valid so it can be picked
  message: () => {
//    const lang = currentLang || "en";

    const animals = Math.round(currentProfile.animals_saved || 0);

// Your rule
    const veganDays = animals * (10 / 7);

    const grains = Math.round(veganDays * 4);
    const calories = Math.round(veganDays * 7000);
    const antibiotics = Math.round(veganDays * 0.2 * 10); 
    

    // --- Derived values ---
    const bread = Math.round(grains / 0.5);
    const mealsFromGrain = Math.round(grains / 0.2);

    const mealsFromCalories = Math.round(calories / 600);
    const peopleFed = Math.round(calories / 2300);

    const treatments = Math.round(antibiotics / 10);

    // --- Build pool dynamically (only include valid ones) ---
    const pool = [];

    if (grains > 0) {
      pool.push({
        text: replaceValues(
          initT("otherGrainText"),
          { grains, bread, mealsFromGrain }
        ),
        info: initT("otherGrainInfo")
      });
    }

    if (calories > 0) {
      pool.push({
        text: replaceValues(
          initT("otherCaloriesText"),
          { calories, mealsFromCalories, peopleFed }
        ),
        info: initT("otherCaloriesInfo")
      });
    }

    if (antibiotics > 0) {
      pool.push({
        text: replaceValues(
          initT("otherAntibioticsText"),
          { antibiotics, treatments }
        ),
        info: initT("otherAntibioticsInfo")
      });
    }

    if (pool.length === 0) return null;

    return pool[Math.floor(Math.random() * pool.length)];
  }
},

    {
  key: "consistency",
  value: currentProfile.vegan_days,
  message: () => {
    const total = currentProfile.day_counter;
    const vegan = currentProfile.vegan_days;

    if (!total || total < 5) return null; // avoid early noise

    const percentage = Math.round((vegan / total) * 100);

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

if (percentage >= 90) {
  return pick(initT("consistency90", { vegan, total, percentage }));
} else if (percentage >= 70) {
  return pick(initT("consistency70", { vegan, total, percentage }));
} else if (percentage >= 40) {
  return pick(initT("consistency40", { vegan, total, percentage }));
} else {
  return pick(initT("consistencyLow", { vegan, total, percentage }));
}
  }
},

{
  key: "meal_winners",
  value: (currentMeals || []).length, // just to pass validation
  message: () => {
    const getLatestWinner = (isPro) => {
      return (currentMeals || [])
        .filter(m => m.is_winner && m.is_pro === isPro)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;
    };

    const amateur = getLatestWinner(false);
    const pro = getLatestWinner(true);

    if (!amateur && !pro) return null;

    const winner = Math.random() > 0.5 ? pro : amateur;

    if (!winner) return null;

    // ✅ ADD THIS LINE HERE
window.__latestMealWinner = winner;

const isProWinner = winner.is_pro;

const pool = isProWinner
  ? initT("mealWinnerPro")
  : initT("mealWinnerAmateur");

const template =
  pool[Math.floor(Math.random() * pool.length)];

const rawMessage =
  typeof template === "function"
    ? template({ name: winner.uploader_name })
    : template;

const randomMessage = injectClickableName(rawMessage, winner);

return `
<div class="meal-winner-card">
  <div class="meal-winner-image-wrapper">
    <img 
      id="winnerMealImage"
      class="meal-winner-image" 
      src="${winner.image_url}" 
      alt="Winning meal" 
    />

    <div id="winnerMealBadge" class="recipe-badge">
      ${initT("recipe")}
    </div>
  </div>

  <div class="meal-winner-text">

    <span class="winner-message">
      ${randomMessage}
    </span>

  </div>
</div>
`;
  }
},

{
  key: "community_impact",
  value: 1,
  message: () => {
    const animals = Math.round(currentGlobalImpact?.animals_saved || 0);
    const forest = Math.round(currentGlobalImpact?.forest_saved || 0);
    const water = Math.round(currentGlobalImpact?.water_saved || 0);
    const co2 = Math.round(currentGlobalImpact?.co2_saved || 0);

    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const section = Math.floor(Math.random() * 4);

    let body;

    if (section === 0) {
      body = pick(initT("communityAnimals", { values: { animals } }));
    } else if (section === 1) {
      body = pick(initT("communityForest", { values: { forest } }));
    } else if (section === 2) {
      body = pick(initT("communityWater", { values: { water } }));
    } else {
      body = pick(initT("communityCO2", { values: { co2 } }));
    }

    const headline = initT("communityImpactHeadline");

    return `
      <div class="community-impact">
        <div class="community-impact-title">${headline}</div>
        <div class="community-impact-body">${body}</div>
      </div>
    `;
  }
}
  ];

  const randomStat = pickWeightedStat(stats);

  // Avoid showing empty stats
  if (!randomStat || randomStat.value == null || randomStat.value <= 0) {
  textEl.textContent = initT("journeyStart");
  return;
}

  // --- Build message ---
  const comparison = randomStat.message?.(randomStat.value) || null;

// If message returns null → fallback safely
if (!comparison) {
  textEl.textContent = initT("journeyStart");
  return;
}

// Special case for encouragement (just show the message, no prefix)
if (randomStat.key === "encouragement") {
  textEl.textContent = comparison;
  return;
}

// Special case for winners (no "So far you have saved..." prefix)
if (randomStat.key === "meal_winners") {
  textEl.innerHTML = `${comparison}`;

  const winner = window.__latestMealWinner;

  const winnerNameEl = textEl.querySelector(".winner-name");
  const imgEl = textEl.querySelector("#winnerMealImage");
  const badgeEl = textEl.querySelector("#winnerMealBadge");

  // Name click → profile
  if (winnerNameEl) {
    winnerNameEl.style.cursor = "pointer";
    winnerNameEl.style.fontWeight = "600";
    winnerNameEl.onclick = () => openProfile(winnerNameEl);
  }

  // Image + badge click → meal popup
  if (imgEl && winner) {
    setupMealArtCardImage(imgEl, badgeEl, winner);
  }

  return;
}
// Consistency special case 
if (randomStat.key === "consistency") {
  textEl.textContent = `${comparison} 🐾`;
  return;
}

// Community impact special case 
if (randomStat.key === "community_impact") {
  textEl.innerHTML = comparison;
  return;
}

const main = initT("statsPrefix", {
  value: Math.round(randomStat.value),
  label: initT(randomStat.labelKey)
});

textEl.innerHTML = `
  <div class="comparison-wrapper">
    <span>${comparison.text}</span>
    <button class="info-btn">ℹ️</button>
    <div class="info-box hidden">${comparison.info}</div>
  </div>
`;

const infoBtn = textEl.querySelector(".info-btn");
const infoBox = textEl.querySelector(".info-box");

if (infoBtn && infoBox) {
  infoBtn.onclick = () => {
    infoBox.classList.toggle("hidden");
  };
}
}


function replaceValues(text, values) {
  return Object.keys(values).reduce((acc, key) => {
    return acc.replaceAll(`{${key}}`, values[key]);
  }, text);
}

function pickWeightedStat(stats) {
  // Define weights per key
  const weights = {
  meal_winners: 0.2,
  animals_saved: 0.125,
  forest_saved: 0.125,
  co2_saved: 0.125,
  water_saved: 0.125,
  other_impacts: 0.1,
  community_impact: 0.1,
  consistency: 0.05,
  encouragement: 0.05
};

  // Build weighted pool
  const pool = [];

  stats.forEach(stat => {
    const weight = weights[stat.key] ?? 0.1;

    // Convert weight → number of entries (scale = 100)
    const count = Math.round(weight * 100);

    for (let i = 0; i < count; i++) {
      pool.push(stat);
    }
  });

  // Pick random
  return pool[Math.floor(Math.random() * pool.length)];
}
//--------------------------
// SUGGGESTIONS & ACHIEVEMENTS TOASTS
//--------------------------
const toastQueue = [];
let toastShowing = false;

function showProgressSuggestion(message, petPhotoUrl) {
  if (!message) return; // ← ignore empty messages
  if (currentProfile.day_counter < 5) return; // ← only show after day 5 to avoid overwhelming new users
  // Push new toast into queue
  toastQueue.push({ message, petPhotoUrl });

  // Try to show the next toast
  showNextToast();
}

function showNextToast() {
  if (toastShowing) return; // Already showing a toast
  if (toastQueue.length === 0) return; // Nothing to show

  const { message, petPhotoUrl } = toastQueue.shift();
  toastShowing = true;

  const banner = document.createElement("div");
  banner.className = "toast-suggestion";

  // Pet image
  const petImg = document.createElement("img");
  petImg.src = petPhotoUrl || "default-pet.jpg";
  petImg.alt = "Pet";
  petImg.className = "toast-pet";

  // Message
  const textSpan = document.createElement("span");
  textSpan.textContent = message;

  const impactBox = document.querySelector(".newsBox");
if (!impactBox) return;

  banner.appendChild(petImg);
  banner.appendChild(textSpan);
  impactBox.appendChild(banner);

  // Slide-in
  requestAnimationFrame(() => {
    banner.classList.add("show");
  });

  // Auto-hide after 6 seconds
  setTimeout(() => {
    banner.classList.remove("show");
    banner.classList.add("fade-out");
    setTimeout(() => {
      banner.remove();
      toastShowing = false;

      // Small 0.5s gap before showing the next toast
      setTimeout(() => {
        showNextToast();
      }, 500);

    }, 600); // match your fade-out duration
  }, 6000);
}

async function checkAchievementSuggestions() {
  if (!currentProfile?.id) return;

  // Fetch achievements data
  const { data, error } = await supabase
    .from("achievements_data")
    .select("animals_saved, events_organized, meal_art_wins, animal_path, earth_path, health_path")
    .eq("user_id", currentProfile.id)
    .single();

  if (error) {
    console.error("Error fetching achievements_data:", error);
    return;
  }

  const achievementsList = currentProfile.achievements || [];

  // ---- ANIMAL SAVER ACHIEVEMENT ----
if (data.animals_saved >= 100 && !achievementsList.includes("Animal Saver")) {
  showProgressSuggestion(
    achievementT("animalSaverDone"),
    currentProfile.pet_photo
  );
}

  // ---- EVENT ORGANISER ACHIEVEMENT ----
  if (data.events_organized >= 1 && !achievementsList.includes("Local Patriot")) {
    showProgressSuggestion(
      achievementT("firstEvent"),
      currentProfile.pet_photo
    );
  }

  // ---- MEAL ART WIN ACHIEVEMENT ----
  if (data.meal_art_wins >= 1 && !achievementsList.includes("Expert Vegan Chef")) {
    showProgressSuggestion(
      achievementT("mealArtWin"),
      currentProfile.pet_photo
    );
  }

  // ---- ANIMAL PATH ----
  if (data.animal_path === 1 && !achievementsList.includes("Voice for the Voiceless")) {
    showProgressSuggestion(
      achievementT("animalPathDone"),
      currentProfile.pet_photo
    );
  }

  // ---- EARTH PATH ----
  if (data.earth_path === 1 && !achievementsList.includes("Planet Protector")) {
    showProgressSuggestion(
      achievementT("earthPathDone"),
      currentProfile.pet_photo
    );
  }

  // ---- HEALTH PATH ----
  if (data.health_path === 1 && !achievementsList.includes("Strong From Plants")) {
    showProgressSuggestion(
      achievementT("healthPathDone"),
      currentProfile.pet_photo
    );
  }

  // ---- ALL PATHS ----
  if (
    data.animal_path === 1 &&
    data.earth_path === 1 &&
    data.health_path === 1 &&
    !achievementsList.includes("Enlightened One")
  ) {
    showProgressSuggestion(
      achievementT("allPathsDone"),
      currentProfile.pet_photo
    );
  } 
}


async function monitorDailyXP() {
  if (!currentUser?.id) return;
  const petPhotoUrl = currentProfile.pet_photo || "default-pet.jpg";

  const { data: xpData, error: xpError } = await supabase
    .from("profiles")
    .select("xp_today")
    .eq("id", currentUser.id)
    .single();

  if (xpError || !xpData) return;

  const xpToday = xpData.xp_today || 0;
  const xpGoal = 50;
  const claimed = await isClaimed(currentUser.id, "daily_xp");

  if (claimed) return; // ✅ Don't show if reward claimed

  const lastShownKey = `dailyXPLastShown_${currentUser.id}`;
  const lastShown = parseInt(localStorage.getItem(lastShownKey)) || 0;
  const now = Date.now();

  let message = "";

  if (xpToday >= xpGoal && now - lastShown > 10_000) {
    message = helperT("dailyXPComplete"); // always show complete
  } else if (xpToday >= 35 && now - lastShown > 180_000) {
    const remaining = xpGoal - xpToday;
    message = helperT("dailyXPProgress", { xpToday, xpGoal, remaining });

    // Update last shown for progress throttling
    localStorage.setItem(lastShownKey, now.toString());
  }

  if (message) showProgressSuggestion(message, petPhotoUrl);
}

async function monitorDailyLesson() {
  if (!currentUser?.id) return;
  const petPhotoUrl = currentProfile.pet_photo || "default-pet.jpg";

  const { data: learnData, error: learnError } = await supabase
    .from("lessons_daily")
    .select("*")
    .eq("user_id", currentUser.id)
    .eq("date", todayUTC())
    .maybeSingle();

  if (learnError || !learnData) return;

  const lessons = ["animal", "earth", "health"];
  const doneCount = lessons.filter(l => learnData[l]).length;
  const total = lessons.length;
  const claimed = await isClaimed(currentUser.id, "learn");

  if (claimed) return; // ✅ Don't show if reward claimed

  const lastShownKey = `dailyLessonsLastShown_${currentUser.id}`;
  const lastShown = parseInt(localStorage.getItem(lastShownKey)) || 0;
  const now = Date.now();

  let message = "";

  if (doneCount === total && now - lastShown > 10_000) {
    message = helperT("lessonsComplete"); // always show complete
  } else if (now - lastShown > 120_000) {
    const remaining = total - doneCount;
    message = helperT("lessonsProgress", { doneCount, total, remaining });

    // Update last shown for progress throttling
    localStorage.setItem(lastShownKey, now.toString());
  }

  if (message) showProgressSuggestion(message, petPhotoUrl);
}


//--------------------------
// WINNERS (from currentMeals)
//--------------------------
/*
function loadWinnersFromData() {
  if (!currentMeals || currentMeals.length === 0) return;


  // Helper to find latest winner by type
  function getLatestWinner(isPro) {
    return currentMeals
      .filter(meal => meal.is_winner && meal.is_pro === isPro)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;
  }

  // Amateur / Individual
  const amateurWinner = getLatestWinner(false);
  if (amateurWinner) {
    document.getElementById("amateurName").textContent = amateurWinner.uploader_name;
    document.getElementById("amateurImage").src = amateurWinner.image_url;
    document.getElementById("amateurImagePopup").src = amateurWinner.image_url;

  setupMealArtImage(
  "amateurImage",
  ".recipe-badge",
  amateurWinner,
  "popupAmateur"
);
}

  // Professional / Restaurant
  const proWinner = getLatestWinner(true);
  if (proWinner) {
    document.getElementById("proName").textContent = proWinner.uploader_name;
    document.getElementById("proImage").src = proWinner.image_url;
    document.getElementById("proImagePopup").src = proWinner.image_url;

  setupMealArtImage(
  "proImage",
  ".recipe-badge",
  proWinner,
  "popupProfessional"
);
}
const el = document.querySelector(".meal-art-winners");

  if (el) el.classList.remove("hidden");
}
*/
//#endregion

//#region HELPERS

function hideGlobalLoader() {
  const loader = document.getElementById("globalLoader");
  if (!loader) return;

  loader.classList.add("hidden");

  setTimeout(() => {
    loader.style.display = "none";
  }, 400);
}

function calculateBadgeCost(profile, todayStr) {
  if (!profile?.last_checkin_date) return 0; // no last check-in, no cost

  const lastDate = new Date(profile.last_checkin_date);
  const today = new Date(todayStr);

  const diffTime = today.getTime() - lastDate.getTime();
  const skippedDays = Math.max(Math.floor(diffTime / (1000 * 60 * 60 * 24)) - 1, 0);

  return skippedDays * 10; // each skipped day costs 10 badges
}

//--------------------------
// Translation pool for HELPERS region
//--------------------------
const helperTranslations = {
  en: {
    toNextLevel: "to next level",
    errorUpdatingXP: "Error updating XP:",
    errorFetchingBlockedUsers: "Error fetching blocked users:",
    confirmSaveStreak: ({ badgeCost }) =>
      `Do you want to save your streak for ${badgeCost} badges?`,
    streakWillReset: "Your streak will reset.",
    streakSavedWithBadges: "Streak saved!",
    notEnoughBadges: ({ badgeCost, missing }) =>
      `You can save your streak by collecting ${missing} more badges and spending ${badgeCost} before your check-in.`,
    confirmLoseStreak: "Press OK to lose your streak now and proceed with today's check-in, or Cancel to collect badges first.",
    errorUpdatingBadges: "Error updating badges:",
    
    dailyXPComplete: "🎯 Daily XP complete! Reclaim your reward!",
    dailyXPProgress: ({ xpToday, xpGoal, remaining }) =>
      `🎯 Daily XP progress: ${xpToday}/${xpGoal} XP — only ${remaining} XP to claim your reward!`,
    lessonsComplete: "📚 All lessons done! Reclaim your reward!",
    lessonsProgress: ({ doneCount, total, remaining }) =>
      `📚 Learn Challenge: ${doneCount}/${total} completed — only ${remaining} lesson${remaining > 1 ? "s" : ""} left to claim your reward!`
  },
  es: {
    toNextLevel: "para el siguiente nivel",
    errorUpdatingXP: "Error al actualizar XP:",
    errorFetchingBlockedUsers: "Error al obtener usuarios bloqueados:",
    confirmSaveStreak: ({ badgeCost }) =>
      `¿Quieres guardar tu racha gastando ${badgeCost} insignias?`,
    streakWillReset: "Tu racha se reiniciará.",
    streakSavedWithBadges: "¡Racha guardada!",
    notEnoughBadges: ({ badgeCost, missing }) =>
      `Puedes salvar tu racha recolectando ${missing} insignias más y gastando ${badgeCost} antes de registrarte.`,
    confirmLoseStreak: "Presiona OK para perder tu racha ahora y continuar con el registro de hoy, o Cancelar para recolectar primero las insignias.",
    errorUpdatingBadges: "Error al actualizar las insignias:",

    dailyXPComplete: "🎯 ¡XP diario completado! ¡Reclama tu recompensa!",
    dailyXPProgress: ({ xpToday, xpGoal, remaining }) =>
      `🎯 Progreso de XP diario: ${xpToday}/${xpGoal} XP — ¡solo ${remaining} XP para reclamar tu recompensa!`,
    lessonsComplete: "📚 ¡Todas las lecciones completadas! ¡Reclama tu recompensa!",
    lessonsProgress: ({ doneCount, total, remaining }) =>
      `📚 Desafío de aprendizaje: ${doneCount}/${total} completadas — solo quedan ${remaining} lección${remaining > 1 ? "es" : ""} para reclamar tu recompensa!`
 
  },
  hu: {
    toNextLevel: "a következő szinthez",
    errorUpdatingXP: "Hiba az XP frissítésekor:",
    errorFetchingBlockedUsers: "Hiba a blokkolt felhasználók lekérésekor:",
    confirmSaveStreak: ({ badgeCost }) =>
      `Szeretnéd megmenteni a sorozatodat ${badgeCost} jelvényért cserébe?`,
    streakWillReset: "A sorozatod újraindul.",
    streakSavedWithBadges: "A sorozat megmentve!",
    notEnoughBadges: ({ badgeCost, missing }) =>
      `A sorozatod megmentéséhez gyűjts ${missing} jelvényt, majd használd fel a ${badgeCost}-at a bejelentkezés előtt.`,
    confirmLoseStreak: "Nyomj OK-t, ha most elveszíted a sorozatod és folytatod a mai bejelentkezést, vagy Mégse, ha előbb jelvényeket szeretnél gyűjteni.",
    errorUpdatingBadges: "Hiba a jelvények frissítésekor:",
    
    dailyXPComplete: "🎯 Napi XP teljesítve! Vedd át a jutalmad!",
    dailyXPProgress: ({ xpToday, xpGoal, remaining }) =>
      `🎯 Napi XP: ${xpToday}/${xpGoal} — még ${remaining} XP a jutalomhoz!`,
    lessonsComplete: "📚 Minden lecke kész! Vedd át a jutalmad!",
    lessonsProgress: ({ doneCount, total, remaining }) =>
      `📚 Napi leckék: ${doneCount}/${total} kész — még ${remaining} lecke a jutalomhoz!`
  }
};

//--------------------------
// Helper function for HELPERS translations
//--------------------------
function helperT(key, variables = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  const translation = helperTranslations[lang]?.[key] || helperTranslations.en[key] || key;
  return typeof translation === "function" ? translation(variables) : translation;
}
function getLang() {
  return window.appState?.lang || localStorage.getItem("lang") || "en";
}

//--------------------------
// HELPERS
//--------------------------

function isPendingStreak() {
  const pendingDate = currentProfile?.pending_streak_action;
  if (!pendingDate) return false;

  const todayStr = getUTCDateString(new Date());

  return pendingDate === todayStr;
}
function updateFinishButtonState() {
  const finishBtn = document.getElementById("finishDCIBtn");
  if (!finishBtn) return;

  // 🔥 Only run if pending streak is active today
  if (!isPendingStreak()) return;


  const badgeCost = calculateBadgeCost(
    currentProfile,
    getUTCDateString(new Date())
  );

  const userBadges = currentProfile.badge ?? 0;

  if (userBadges >= badgeCost) {
    finishBtn.disabled = false;
    finishBtn.classList.remove("hidden");
  } else {
    finishBtn.classList.remove("hidden");
    finishBtn.disabled = true;
  }
}
/*
window.checkAndHandleStreak = async function() {
  const user = currentUser;
  const profile = currentProfile;

  if (!user || !profile) return true; // fallback

  const todayStr = getUTCDateString(new Date());
  const yesterdayUTC = new Date();
  yesterdayUTC.setUTCDate(yesterdayUTC.getUTCDate() - 1);
  const yesterdayStr = getUTCDateString(yesterdayUTC);

  const badgeCost = calculateBadgeCost(profile, todayStr);

  // ✅ Streak not lost, just return
  if (badgeCost === 0) return true;

  const userBadges = profile.badge ?? 0;

  // --- Streak lost ---
  if ((userBadges || 0) >= badgeCost) {
    // User has enough badges to save
    const save = confirm(helperT("confirmSaveStreak", { badgeCost }));
    if (save) {
      // Spend badges and update last_checkin_date to yesterday
      await supabase
        .from("profiles")
        .update({ badge: userBadges - badgeCost, last_checkin_date: yesterdayStr })
        .eq("id", user.id);

      profile.badge -= badgeCost;
      profile.last_checkin_date = yesterdayStr;

      alert(helperT("streakSavedWithBadges"));
      return true;
    } else {
      // User chose to reset streak
      profile.streak = 0;
      profile.last_checkin_date = yesterdayStr;

      await supabase
        .from("profiles")
        .update({ streak: 0, last_checkin_date: yesterdayStr })
        .eq("id", user.id);

      alert(helperT("streakWillReset"));
      return true; // ✅ allow daily check-in to proceed
    }
  }
   // --- User does NOT have enough badges ---
  const missing = badgeCost - userBadges;
  
  const proceed = confirm(helperT("notEnoughBadges", { badgeCost, missing }) +
    "\n\n" +
    helperT("confirmLoseStreak")
  );

  if (proceed) {
    // User chooses to lose streak
    profile.streak = 0;
    profile.last_checkin_date = yesterdayStr;

    await supabase
      .from("profiles")
      .update({ streak: 0, last_checkin_date: yesterdayStr })
      .eq("id", user.id);

    alert(helperT("streakWillReset"));
    return true; // ✅ allow daily check-in
  } else {
    // User chooses to collect badges first
    return false; // ❌ do NOT proceed to check-in
  }
};
*/

function sanitizeFileName(filename) {
  return filename
    .normalize("NFD")                     // é → e + accent
    .replace(/[\u0300-\u036f]/g, "")     // remove accents
    .replace(/\s+/g, "_")                // spaces → _
    .replace(/[^a-zA-Z0-9._-]/g, "")     // remove unsafe chars
    .toLowerCase();
}

async function addXP(amount) {
  if (typeof amount !== "number" || amount <= 0) return;

  if (!currentUser) {
    console.error("No current user ID found.");
    return;
  }

  try {
    const { data, error } = await supabase.rpc("add_xp", { p_xp: amount }).single();

    
if (error) throw error;

    // ✅ USE UPDATED DATA FROM SUPABASE
    const totalXP = data.total_xp ?? 0;

    const levelData = getLevelFromXP(totalXP);
    const { level, xpTowardsNextLevel, xpNeededForNextLevel } = levelData;

    const previousLevel = data.current_level ?? profile.current_level ?? 1;

// 🔔 LEVEL UP DETECTED
if (level > previousLevel) {

  // Sync level to DB here
  const { error: updateError } = await supabase
    .from("profiles")
    .update({ current_level: level })
    .eq("id", currentUser.id);

  if (!updateError) {
    profile.current_level = level; // keep local state in sync
  }
}

    // Update level text
    document.getElementById("currentLevel").textContent =
      data.current_level ?? level;

    const countersElements = {
    levelProgress: document.getElementById('levelProgress'),
    currentLevelEl: document.getElementById("currentLevel")
  };

    // Progress bar
    if (countersElements.levelProgress) {
      if (level >= 100) {
        countersElements.levelProgress.style.display = "none";
      } else {
        countersElements.levelProgress.style.display = "block";
        const progressPercent =
          (xpTowardsNextLevel / xpNeededForNextLevel) * 100;

        countersElements.levelProgress.style.width =
          Math.min(progressPercent, 100) + "%";

        countersElements.currentLevelEl.textContent = level;
      }
    }

    /*/ ✅ XP remaining to next level
    const xpRemaining =
      xpNeededForNextLevel - xpTowardsNextLevel;

    document.getElementById("xpToNext").textContent =
      `${xpRemaining} XP ${helperT("toNextLevel")}`;
*/
      // ✅ **CALL THE MONITOR HERE**
    monitorDailyXP(); // <-- call after XP updated
    
  // NEW: Playground & Challenges
  updateChallengeDots();

  } catch (err) {
    console.error(helperT("errorUpdatingXP"), err);
  }
}

function showLoading(isLoading) {
  const loader = document.getElementById("globalLoader");
  const contentFirst = document.getElementById("homepageContentfirst");
  const contentSecond = document.getElementById("homepageContentsecond");
  
  if (!loader || !contentFirst || !contentSecond) return;

  const todayUTC = new Date();
  const todayStr = getUTCDateString(todayUTC);

  // Safely check if profile exists
  const hasCheckedInToday = currentProfile?.last_checkin_date === todayStr;
  const hasPendingStreak = isPendingStreak();

  if (isLoading) {
    loader.style.display = "flex";
    contentFirst.style.display = "none";
    contentSecond.style.display = "none";
  } else {
    hideGlobalLoader();

    if (hasCheckedInToday || hasPendingStreak) {
      // Already checked in OR pending streak → show second page
      contentFirst.style.display = "none";
      contentSecond.style.display = "block";
      setWinnersOpenedTrue();
    } else {
      // Not checked in → show first page
      contentFirst.style.display = "block";
      contentSecond.style.display = "none";
    }
  }
}

function toArray(value) {
  return Array.isArray(value) ? value : Object.values(value || []);
}

function getLevelFromXP(totalXP) {
  let level = 1;
  let xpNeededForNext = 100;
  let xpLeft = totalXP;

  while (xpLeft >= xpNeededForNext && level < 100) {
    xpLeft -= xpNeededForNext;
    level++;
    xpNeededForNext = Math.floor(xpNeededForNext * 1.05);
  }

  return { level, xpTowardsNextLevel: xpLeft, xpNeededForNextLevel: xpNeededForNext };
}

function formatNumber(value) {
  value = Math.round(value);
  if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + 'B';
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M';
  if (value >= 1_000) return (value / 1_000).toFixed(1) + 'k';
  return value.toString();
}

async function getBlockedUserIds(supabase, currentUserId) { 
  const { data, error } = await supabase
    .from("user_blocks")
    .select("blocked_id")
    .eq("blocker_id", currentUserId);

  if (error) {
    console.error(helperT("errorFetchingBlockedUsers"), error);
    return [];
  }

  return data.map(row => row.blocked_id);
}
let blockedUserIds = [];


//--------------------------
// GOALS / HEALTH TOGGLE
//--------------------------
function toggleHealthIssues() {
  const solvingChecked = Array.from(goalsInputs).some(cb => cb.checked && cb.value === "Solving health issues");
  healthIssuesSection.style.display = solvingChecked ? "block" : "none";
  if (!solvingChecked) {
    document.querySelectorAll('input[name="healthIssue"]').forEach(cb => cb.checked = false);
  }

  const healthList = document.getElementById("healthIssuesList");
  const healthTitle = document.getElementById("healthTitle");
  if (!healthList || !healthTitle) return;

  healthTitle.style.display = healthList.children.length === 0 ? "none" : "block";
}
document.querySelectorAll('input[name="goal"]').forEach(cb => cb.addEventListener("change", toggleHealthIssues));

//--------------------------
// STREAK MANAGEMENT
//--------------------------
function getUTCDateString(date) {
  return (
    date.getUTCFullYear() + '-' +
    String(date.getUTCMonth() + 1).padStart(2, '0') + '-' +
    String(date.getUTCDate()).padStart(2, '0')
  );
}

async function addBadges(userId, amount) {
  // Use currentProfile directly
  const currentCount = currentProfile.badge ?? 0;
  const newCount = currentCount + amount;

  // 1️⃣ Update local profile
  currentProfile.badge = newCount;

  // 2️⃣ Update UI immediately
  const badgeShopEl = document.getElementById("badge-countshop");
  if (badgeShopEl) badgeShopEl.textContent = `${newCount}`;

  const badgeProfileEl = document.getElementById("badgeprofile");
  if (badgeProfileEl) badgeProfileEl.textContent = newCount;

  // 3️⃣ Update in Supabase
  const { error: updateError } = await supabase
    .from("profiles")
    .update({ badge: newCount })
    .eq("id", userId);

  if (updateError) return console.error(helperT("errorUpdatingBadges"), updateError);

  // 4️⃣ Optional: refresh leaderboard
  await fetchLeaderboard('badge', 'overall-badge');

  updateFinishButtonState(); // Update finish button state in case badges were added for streak saving
}


// Helper function to attach a live character counter
function attachCharCounter(inputId, counterId, maxLength, warningThreshold = 0.9, showThreshold = 0.7) {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);

  if (!input || !counter) return;

  // Hide counter by default
  counter.style.display = 'none';

  function updateCounter() {
    const length = input.value.length;
    counter.textContent = `${length}/${maxLength}`;

    if (length === 0) {
      // Hide counter if input is empty
      counter.style.display = 'none';
    } else if (length >= maxLength * showThreshold) {
      // Show counter if above showThreshold
      counter.style.display = 'inline';
    } else {
      counter.style.display = 'none';
    }

    // Color if near limit
    counter.style.color = length >= maxLength * warningThreshold ? 'red' : 'black';
  }

  // Update live while typing
  input.addEventListener('input', updateCounter);

  // Trim spaces when leaving the field
  input.addEventListener('blur', () => {
    input.value = input.value.trim();
    updateCounter();
  });

  // Initialize counter
  updateCounter();

  // Optional: reset counter manually (e.g., after sending message)
  input.resetCounter = function() {
    input.value = '';
    updateCounter();
  };
}


// --- Profile & Pet Names ---
attachCharCounter('profileNameInput', 'profileNameCharCount', 15);
attachCharCounter('petNameInput', 'petNameCharCount', 15);

// --- Ingredients & Instructions ---
attachCharCounter('mealArtrecipeIngredients', 'ingredientsCharCount', 1000);
attachCharCounter('mealArtrecipeInstructions', 'instructionsCharCount', 1000);
attachCharCounter('recipeIngredients', 'recipeIngredientsCounter', 1000);
attachCharCounter('recipeInstructions', 'recipeInstructionsCounter', 1000);

// --- Messages & Comments ---
attachCharCounter('messageInput', 'messageCharCount', 1000);
attachCharCounter('blockContent', 'blockContentCounter', 1000);
// attachCharCounter('AFnewCommentInput', 'AFnewCommentCounter', 1000);
attachCharCounter('communityMessageInput', 'communityMessageCounter', 1000);

// --- Event description ---
attachCharCounter('eventDescriptionInput', 'eventDescriptionCounter', 300, 0.9);

// Helper function to create a trimmed preview for chat list
function makePreview(text, maxLength = 20) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}

const submitBtn = document.getElementById("submitBtnDCI");
const submitSupportBtn = document.getElementById("submitAndSupportBtnDCI");
const starterSubmitBtn = document.getElementById("startSubmitBtnDCI");

function disableDailyCheckinButtons() {
    submitBtn.disabled = true;
    submitSupportBtn.disabled = true;
    starterSubmitBtn.disabled = true;
}
function enableDailyCheckinButtons() {
    submitBtn.disabled = false;
    submitSupportBtn.disabled = false;
    starterSubmitBtn.disabled = false;
}

//#endregion

//#region MEALART

const mealartTranslations = {
  en: {
    noTitle: "No title",
    noIngredients: "No ingredients provided",
    noInstructions: "No instructions provided",
    recipeAvailable: "Recipe",
    noRecipe: "No recipe",
    deleteMealConfirm: "Are you sure you want to delete this meal?",
    uploading: "Uploading...",
    submit: "Submit",
    mealUploaded: "Meal uploaded successfully!",
    selectPhoto: "Please select a photo before submitting.",
    userNotLoggedIn: "User not logged in",
    resizeFailed: "Resize failed:",
    saveMealError: "Error saving meal:",
    votePlease: "Please select a meal to vote!",
    submitvote: "Submit Vote",
    voteSubmitted: "Vote Submitted ✅",
    votes: "Votes: ",
    requestProMessage: "Please tell us a little about yourself.",
    requestSent: "Request sent! We'll get back to you soon 😊",
    requestError: "Something went wrong. Please try again."
  },
  es: {
    noTitle: "Sin título",
    noIngredients: "No se proporcionaron ingredientes",
    noInstructions: "No se proporcionaron instrucciones",
    recipeAvailable: "Receta",
    noRecipe: "Sin receta",
    deleteMealConfirm: "¿Estás seguro de que deseas eliminar esta comida?",
    uploading: "Subiendo...",
    submit: "Enviar",
    mealUploaded: "¡Comida subida con éxito!",
    selectPhoto: "Por favor selecciona una foto antes de enviar.",
    userNotLoggedIn: "Usuario no ha iniciado sesión",
    resizeFailed: "Error al redimensionar:",
    saveMealError: "Error al guardar la comida:",
    votePlease: "¡Por favor selecciona una comida para votar!",
    submitvote: "Envíar voto",
    voteSubmitted: "Voto enviado ✅",
    votes: "Votos: ",
    requestProMessage: "Por favor cuéntanos un poco sobre ti.",
    requestSent: "¡Solicitud enviada! Te responderemos pronto 😊",
    requestError: "Algo salió mal. Por favor inténtalo de nuevo."
  },
  hu: {
    noTitle: "Nincs cím",
    noIngredients: "Nem adtál meg hozzávalókat",
    noInstructions: "Nem adtál meg elkészítési utasítást",
    recipeAvailable: "Recept",
    noRecipe: "Nincs recept",
    deleteMealConfirm: "Biztosan törölni szeretnéd ezt az ételt?",
    uploading: "Feltöltés...",
    submit: "Küldés",
    mealUploaded: "Az étel sikeresen feltöltve!",
    selectPhoto: "Kérlek, válassz egy fotót a feltöltés előtt.",
    userNotLoggedIn: "A felhasználó nincs bejelentkezve",
    resizeFailed: "Átméretezés sikertelen:",
    saveMealError: "Hiba az étel mentése közben:",
    votePlease: "Kérlek válassz egy ételt a szavazáshoz!",
    submitvote: "Szavazás elküldése",
    voteSubmitted: "Szavazat elküldve ✅",
    votes: "Szavazatok: ",
    requestProMessage: "Kérlek, mesélj kicsit magadról.",
    requestSent: "Kérés elküldve! Hamarosan visszajelzünk 😊",
    requestError: "Valami hiba történt. Próbáld újra."
  }
};

//--------------------------
// mealartT FUNCTION
//--------------------------
function mealartT(key, variables = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  const translation = mealartTranslations[lang]?.[key] || mealartTranslations.en[key] || key;
  return typeof translation === "function" ? translation(variables) : translation;
}

//--------------------------
// MEALART
//--------------------------

// TAB HANDLER
function setupTabs() {
  const tabs = document.querySelectorAll(".main-tab");
  const tabContents = document.querySelectorAll(".main-tab-content");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      tabContents.forEach(c => c.style.display = "none");
      const content = document.getElementById(tab.dataset.tab);
      if (content) content.style.display = "block";
    });
  });
  tabs[0]?.click();
}

// MEAL RENDERING// MEAL RENDERING
function renderMealItem(meal, today) {
  const homeChefGallery = document.getElementById("home-chef-gallery");
  const proKitchenGallery = document.getElementById("pro-kitchen-gallery");
  const homeChefWinners = document.getElementById("home-chef-winners");
  const proKitchenWinners = document.getElementById("pro-kitchen-winners");

  const mealDiv = document.createElement("div");
  mealDiv.className = "meal-item";
  mealDiv.dataset.id = meal.id;

  const foodNameP = document.createElement("p");
  foodNameP.className = "food-name";
  foodNameP.textContent = meal.food_name;

  const nameP = document.createElement("p");
  nameP.textContent = meal.uploader_name;

  // Create image wrapper
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "meal-art-image-wrapper";

  const img = document.createElement("img");
  img.src = meal.image_url;
  img.alt = `${meal.uploader_name}'s meal`;

  imgWrapper.appendChild(img);

  // Add recipe badge only if recipe exists
  let badge = null;
  if (meal.recipe_available && meal.ingredients && meal.instructions) {
    badge = document.createElement("div");
    badge.className = "recipe-badge";
    badge.textContent = mealartT("recipeAvailable");
    imgWrapper.appendChild(badge);
  }

  mealDiv.append(foodNameP, imgWrapper, nameP);

  // Pass badge to setup function so it also becomes clickable
  setupMealArtCardImage(img, badge, meal);

  // Delete button for own meal
  if (meal.user_id === currentUser.id && !meal.is_winner && today !== 1) {
    const delBtn = document.createElement("button");
    delBtn.className = "delete-meal-btn";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", async () => {
      if (!confirm(mealartT("deleteMealConfirm"))) return;

      const { error: delError } = await supabase
        .from("meals")
        .delete()
        .eq("id", meal.id);

      if (delError) {
        console.error("Delete failed:", delError);
        return;
      }

      if (meal.image_url) {
        const filePath = getMealStoragePath(meal.image_url);
        if (filePath) {
          const { error } = await supabase.storage.from("meal-uploads").remove([filePath]);
        }
      }

      mealDiv.remove();
      const uploadBtn = document.getElementById("uploadBtn");
      if (uploadBtn) uploadBtn.style.display = "block";

      const alreadyUploadedMsg = document.getElementById("alreadyUploadedMsg");
      if (alreadyUploadedMsg) alreadyUploadedMsg.style.display = "none";

      fetchAllData();
    });
    mealDiv.appendChild(delBtn);
  }

  // Append to gallery
  if (meal.is_winner) {
    (meal.is_pro ? proKitchenWinners : homeChefWinners).appendChild(mealDiv);
  } else {
    (meal.is_pro ? proKitchenGallery : homeChefGallery).appendChild(mealDiv);
  }
}


function setupMealArtCardImage(imgEl, badgeEl, meal) {
  const hasRecipe =
    meal.recipe_available &&
    meal.ingredients &&
    meal.instructions;

  const openPopupHandler = () => openMealArtPopup(meal, hasRecipe);

  // Prevent duplicate listeners (important in dynamic UI)
  imgEl.onclick = openPopupHandler;

  // Badge click (if exists)
  if (badgeEl) {
    if (hasRecipe) {
      badgeEl.style.display = "block";
      badgeEl.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent double trigger
        openMealArtPopup(meal, true);
      });
    } else {
      badgeEl.style.display = "none";
    }
  }
}

function openMealArtPopup(meal, hasRecipe) {
  if (hasRecipe) {
    // Recipe exists → open recipe modal
    document.getElementById("mealArtmodalImage").src = meal.image_url || "";
    document.getElementById("mealArtmodalFoodName").textContent =
      meal.food_name || mealartT("noTitle");

    document.getElementById("mealArtmodalPrepTime").textContent =
      meal.prep_time || "N/A";

    document.getElementById("mealArtmodalIngredients").innerHTML =
      (meal.ingredients || mealartT("noIngredients")).replace(/\n/g, "<br>");

    document.getElementById("mealArtmodalInstructions").innerHTML =
      (meal.instructions || mealartT("noInstructions")).replace(/\n/g, "<br>");

    openPopup("mealArtrecipeModal");
  } else {
    // No recipe → open simple image popup
  const popupImg = document.getElementById("popupMealImage");
  if (popupImg) {
    popupImg.src = meal.image_url || "";
  }

  openPopup("mealPopup");
  }
}


// Helper to extract storage path from public URL
function getMealStoragePath(publicUrl) {
  try {
    const url = new URL(publicUrl);
    const marker = "/object/public/meal-uploads/";
    const index = url.pathname.indexOf(marker);
    if (index === -1) return null;

    // Everything after the marker (includes subfolder)
    return url.pathname.substring(index + marker.length);
  } catch (err) {
    console.error("Invalid URL for storage path:", publicUrl);
    return null;
  }
}

async function renderMeals(meals) {
  const today = new Date().getDay();
  const galleries = [
    document.getElementById("home-chef-gallery"),
    document.getElementById("pro-kitchen-gallery"),
    document.getElementById("home-chef-winners"),
    document.getElementById("pro-kitchen-winners")
  ].filter(el => el); // <-- remove nulls

  galleries.forEach(el => el.innerHTML = "");

  meals.forEach(meal => renderMealItem(meal, today));
  const mealIds = meals.map(m => m.id);
  await refreshMealVotes(mealIds);
}


// UPLOAD BUTTON & FORM
function setupUploadButton() {
  const uploadBtn = document.getElementById("uploadBtn");
  if (!uploadBtn) return;

  uploadBtn.addEventListener("click", () => {
    if (!uploadBtn.classList.contains("locked")) {
      document.getElementById("mealArtContestSmall").classList.add("hidden-meal");
      document.getElementById("MealArtUploadContent").classList.remove("hidden-meal");
    }
  });
}

function setupMealUploadForm() {
  const mealPhotoInput = document.getElementById("mealPhoto");
  const previewImage = document.getElementById("mealArtpreviewImage");
  const photoPreview = document.getElementById("mealArtphotoPreview");
  const form = document.getElementById("mealUploadForm");
  const uploadBtn = document.getElementById("uploadBtn");

  let mealPhotoFile = null;

  // Photo preview
  mealPhotoInput.addEventListener("change", e => {
  mealPhotoFile = e.target.files[0] || null;

  if (mealPhotoFile) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImage.src = e.target.result;
      photoPreview.style.display = "block";
    };
    reader.readAsDataURL(mealPhotoFile);
  } else {
    previewImage.src = "";
    photoPreview.style.display = "none";
  }
});

  // Form submit
form.addEventListener("submit", async e => {
  e.preventDefault();

  // Prevent double-click submission
  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  submitBtn.textContent = mealartT("uploading");

  try {
    let file = mealPhotoFile;
    if (!file) throw new Error(mealartT("selectPhoto"));

    try {
  file = await resizeImage(file, 600, 0.7, 'image/webp');
} catch (err) {
  alert(mealartT("resizeFailed") + err.message);
  return; // or skip resizing
}
    if (!currentUser || !currentUser.id) throw new Error(mealartT("userNotLoggedIn"));

    const safeFileName = sanitizeFileName(
      `meal_${currentUser.id}_${Date.now()}.webp`
    );

    file = new File([file], safeFileName, { type: 'image/webp' });
    mealPhotoFile = file;

    const foodName = document.getElementById("mealArtrecipeName").value.trim();
    const mealArtPrepTime = document.getElementById("mealArtPrepTime").value.trim();
    const ingredients = document.getElementById("mealArtrecipeIngredients").value.trim();
    const instructions = document.getElementById("mealArtrecipeInstructions").value.trim();
    const recipeAvailable = !!(foodName && ingredients && instructions);

    const isProCategory = currentProfile.is_pro === true;
    const fileExt = file.name.split('.').pop();
    const fileName = `${currentUser.id}_${Date.now()}.${fileExt}`;
    const filePath = `${isProCategory ? 'pro' : 'home'}/${fileName}`;

    const { error: uploadError } = await supabase.storage.from("meal-uploads").upload(filePath, file);
    if (uploadError) throw new Error(mealartT("saveMealError") + uploadError.message);

    const { data: publicUrlData } = supabase.storage.from("meal-uploads").getPublicUrl(filePath);
    const imageUrl = publicUrlData.publicUrl;

    const weekStartDate = new Date();
    weekStartDate.setDate(weekStartDate.getDate() - weekStartDate.getDay() + 1);

    const { data: newMeals, error: mealError } = await supabase
      .from("meals")
      .insert([{
        user_id: currentUser.id,
        uploader_name: currentProfile.name || "Anonymous",
        is_pro: isProCategory,
        image_url: imageUrl,
        food_name: foodName,
        prep_time: mealArtPrepTime, 
        ingredients,
        instructions,
        recipe_available: recipeAvailable,
        week_start_date: weekStartDate.toISOString().split('T')[0]
      }])
      .select();

    if (mealError) throw new Error(mealartT("saveMealError") + mealError.message);

    await addXP(6);
    alert(mealartT("mealUploaded"));
    renderMeals([...currentMeals, newMeals[0]]);
    currentMeals.push(newMeals[0]);

    uploadBtn.style.display = "none";
    document.getElementById("alreadyUploadedMsg").style.display = "block";
    form.reset();
    previewImage.src = "";
    photoPreview.style.display = "none";
    goBackTab();
  } catch (err) {
    alert(err.message);
  } finally {
    // Re-enable the submit button no matter what happens
    submitBtn.disabled = false;
    submitBtn.textContent = mealartT("submit");
  }
});
}


// MONDAY VOTING
async function refreshMealVotes(mealIds) {
  const { data } = await supabase
    .from("votes")
    .select("meal_id");

  const map = new Map();

  data.forEach(v => {
    map.set(v.meal_id, (map.get(v.meal_id) || 0) + 1);
  });

  document.querySelectorAll(".meal-item").forEach(el => {
    const id = el.dataset.id;
    const span = el.querySelector(".votes-span");
    if (!span) return;

    span.textContent = `Votes: ${map.get(id) || 0}`;
  });
}

async function setupMondayVoting(userId) {  
 const todayUTC = new Date().getUTCDay(); // 0 = Sunday, 1 = Monday, etc.
  if (todayUTC !== 1) return; // Only run on Monday (UTC)

  const homeChefGallery = document.getElementById("home-chef-gallery");
  const proKitchenGallery = document.getElementById("pro-kitchen-gallery");
  const votenote = document.getElementById("votenote");
  if (votenote) votenote.style.display = "block";

  const uploadBtn = document.getElementById("uploadBtn");
  if (uploadBtn) uploadBtn.style.display = "none";

  const uploadnote = document.getElementById("uploadnote");
  const generalnote = document.getElementById("generalnote");
  if (uploadnote) uploadnote.style.display = "none";
  if (generalnote) generalnote.style.display = "none";

  await addVotingToGallery(homeChefGallery, false, userId);
  await addVotingToGallery(proKitchenGallery, true, userId);
}

async function addVotingToGallery(gallery, isPro, userId) {
  if (!gallery) return;
  if (!userId) {
    console.error("Missing userId for voting check");
    return;
  }

  // 🗓️ Calculate the Monday of the current week in UTC
  const nowUTC = new Date();
  const utcDay = nowUTC.getUTCDay(); // 0 = Sunday, 1 = Monday...
  const weekStartUTC = new Date(Date.UTC(
    nowUTC.getUTCFullYear(),
    nowUTC.getUTCMonth(),
    nowUTC.getUTCDate() - utcDay + 1, // Move back to Monday
    0, 0, 0, 0
  ));
  const weekStr = weekStartUTC.toISOString().split("T")[0];

  const { data: existingVote, error } = await supabase
    .from("votes")
    .select("id")
    .eq("user_id", userId)
    .eq("category", isPro)
    .eq("week_start_date", weekStr)
    .maybeSingle();

  if (error) console.error("Vote fetch error:", error);

  const alreadyVoted = !!existingVote;

  const submitBtn = document.createElement("button");
  submitBtn.textContent = mealartT("submitvote");
  submitBtn.classList.add("button");
  submitBtn.style.marginTop = "10px";
  submitBtn.disabled = alreadyVoted;
  

  gallery.querySelectorAll("input[type='radio']").forEach(el => el.remove());
  gallery.querySelectorAll("button.vote-submit").forEach(el => el.remove());

  submitBtn.classList.add("vote-submit");

  for (const mealDiv of gallery.querySelectorAll(".meal-item")) {

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = `${isPro}-vote`;
  radio.value = mealDiv.dataset.id;
  radio.disabled = alreadyVoted;
  radio.style.marginRight = "5px";

  radio.addEventListener("change", () => {
  gallery.querySelectorAll(".meal-item").forEach(m => {
    m.classList.remove("selected");
  });
  mealDiv.classList.add("selected");
});

  let span = mealDiv.querySelector(".votes-span");

if (!span) {
  span = document.createElement("span");
  span.className = "votes-span";
  span.style.marginLeft = "10px";
  mealDiv.appendChild(span);
}

  mealDiv.appendChild(radio);
}


  if (alreadyVoted) {
    submitBtn.textContent = mealartT("voteSubmitted");
  }

  submitBtn.addEventListener("click", async () => {
  if (submitBtn.disabled) return;
  submitBtn.disabled = true;
    const selected = gallery.querySelector(`input[name='${isPro}-vote']:checked`);
    if (!selected) return alert(mealartT("votePlease"));
    const mealId = selected.value;

    await supabase.from("votes").insert([
      { user_id: userId, meal_id: mealId, category: isPro, week_start_date: weekStr }
    ]);

    await refreshMealVotes(
  [...gallery.querySelectorAll(".meal-item")].map(el => el.dataset.id)
);

    gallery.querySelectorAll("input").forEach(r => (r.disabled = true));
    submitBtn.textContent = mealartT("voteSubmitted")

    gallery.querySelectorAll(".meal-item").forEach(m => {
  m.classList.remove("selected");
});
  });

  gallery.parentElement.appendChild(submitBtn);

  await refreshMealVotes(
  [...gallery.querySelectorAll(".meal-item")].map(el => el.dataset.id)
);
}

function updateMealArtNotes(today) {
  const uploadBtn = document.getElementById("uploadBtn");
  const votenote = document.getElementById("votenote");
  const uploadnote = document.getElementById("uploadnote");
  const generalnote = document.getElementById("generalnote");
  const alreadyUploadedMsg = document.getElementById("alreadyUploadedMsg");
  const todayUTC = new Date().getUTCDay(); // 0 = Sunday, 1 = Monday, etc.

  if (todayUTC === 1) { // Monday — voting day
    votenote?.classList.remove("hidden-meal");
    uploadBtn?.classList.add("hidden-meal");
    uploadnote?.classList.add("hidden-meal");
    generalnote?.classList.add("hidden-meal");
  } else { // Tuesday-Sunday — upload day
    votenote?.classList.add("hidden-meal");
    uploadBtn?.classList.remove("hidden-meal");
    generalnote?.classList.remove("hidden-meal");

    // Show uploadnote only for non-pro
    if (!currentProfile.is_pro) {
      uploadnote?.classList.remove("hidden-meal");
    } else {
      uploadnote?.classList.add("hidden-meal");
    }

    // Check if user already uploaded
    if (currentMeals.some(m => m.user_id === currentUser.id && !m.is_winner)) {
      uploadBtn?.classList.add("hidden-meal");
      alreadyUploadedMsg?.classList.remove("hidden-meal");
      uploadnote?.classList.add("hidden-meal");
    } else {
      alreadyUploadedMsg?.classList.add("hidden-meal");
    }
  }
}

const kitchenopenBtn = document.getElementById("openProKitchenPopup");
const kitchencloseBtn = document.getElementById("closeProKitchenPopup");
const kitchenpopup = document.getElementById("proKitchenPopup");
const kitchensendBtn = document.getElementById("sendProKitchenRequest");

kitchenopenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  kitchenpopup.classList.add("active");
});

kitchencloseBtn.addEventListener("click", () => {
  kitchenpopup.classList.remove("active");
});

kitchensendBtn.addEventListener("click", async () => {
  const message = document.getElementById("proKitchenMessage").value.trim();
  if (!message) {
    alert(mealartT("requestProMessage"));
    return;
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({
      user_id: currentUser.id,
      email: currentUser.email,
      subject: "ProKitchenAccess",
      message
    });

  if (error) {
    console.error(error);
    alert(mealartT("requestError"));
    return;
  }

  document.getElementById("proKitchenMessage").value = "";
  kitchenpopup.classList.remove("active");
  alert(mealartT("requestSent"));
});

//#endregion

//#region DAILY CHECKIN
//--------------------------
// DAILY CHECKIN
//--------------------------
const dailyCheckinTranslations = {
  en: {
    lessonNotFound: "Lesson not found. Please check your profile.",
    noLessonToday: "No lesson found for today!",
    answerAllQuiz: "Please answer all quiz questions!",
    incorrectQuiz: "Some answers are incorrect. Try again!",
    selectMeal: "Please select your diet from yesterday!",
    wellDoneLearnPath: "Well done! You can keep learning in the Learn Path or get extra rewards in Daily Challenges!",
    wellDoneMealArt: "Well done! Have you checked out our meal-art contest and trending recipes already?",
    wellDoneCommunity: "Well done! Are you already a member of your local community? 🤩",
    lastquiz: "Last lesson's quiz:",
  confirmSave: "Yes, save",
  confirmReset: "No, reset",
  resetStreak: "Reset streak",
  collectBadgesFirst: "Collect badges first"
  },
  es: {
    lessonNotFound: "Lección no encontrada. Por favor revisa tu perfil.",
    noLessonToday: "¡No se encontró lección para hoy!",
    answerAllQuiz: "¡Por favor responde todas las preguntas del quiz!",
    incorrectQuiz: "Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!",
    selectMeal: "¡Por favor selecciona tu dieta de ayer!",
    wellDoneLearnPath: "¡Bien hecho! Puedes seguir aprendiendo en el Camino de Aprendizaje o conseguir recompensas extra en Desafíos Diarios!",
    wellDoneMealArt: "¡Bien hecho! ¿Ya has visto nuestro concurso de meal-art y las recetas más populares?",
    wellDoneCommunity: "¡Bien hecho! ¿Ya eres miembro de tu comunidad local? 🤩",
    lastquiz: "Cuestionario de la última lección:",
  confirmSave: "Sí, guardar",
  confirmReset: "No, reiniciar",
  resetStreak: "Reiniciar racha",
  collectBadgesFirst: "Recoger insignias primero"
  },
  hu: {
    lessonNotFound: "Az óra nem található. Kérlek, ellenőrizd a profilodat.",
    noLessonToday: "Ma nincs elérhető lecke!",
    answerAllQuiz: "Kérlek, válaszolj minden kvízkérdésre!",
    incorrectQuiz: "Néhány válasz helytelen. Próbáld újra!",
    selectMeal: "Kérlek válaszd ki a tegnapi étrendedet!",
    wellDoneLearnPath: "Szép munka! Folytathatod a tanulást az Útvonal tanulásban, vagy extra jutalmakat szerezhetsz a Napi kihívásokban!",
    wellDoneMealArt: "Szép munka! Megnézted már a meal-art versenyt és a népszerű recepteket?",
    wellDoneCommunity: "Szép munka! Már tagja vagy a helyi közösségednek? 🤩",
    lastquiz: "Az utolsó leckéhez tartozó kvíz:",
  confirmSave: "Igen, mentés",
  confirmReset: "Nem, nullázás",
  resetStreak: "Sorozat nullázása",
  collectBadgesFirst: "Előbb gyűjts jelvényeket"
  }
};

//--------------------------
// dailyCheckinT FUNCTION
//--------------------------
function dailyCheckinT(key, variables = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let translation = dailyCheckinTranslations[lang]?.[key] || dailyCheckinTranslations.en[key] || key;

  // Replace variables (like {xp_left})
  Object.entries(variables).forEach(([k, v]) => {
    translation = translation.replace(`{${k}}`, v);
  });

  return translation;
}


let checkinStep = 1;

function updateCheckinStep(step) {
  checkinStep = step;

  document.querySelectorAll(".step").forEach(el => {
    el.style.display = "none";
  });

  document.querySelectorAll(`.step-${String(step).replace(".", "-")}`).forEach(el => {
    el.style.display = "block";
  });

  updateCheckinButtons(); // OK here (correct place)
}
function shouldSkipQuizStep() {
  return currentProfile.day_counter === 0 || yesterdayQuiz.length === 0;
}
function initCheckinNavigation() {
  document.querySelectorAll(".nextBtnDCI").forEach(btn => {
    btn.onclick = async () => {

      if (checkinStep === 1) {
        if (shouldSkipQuizStep()) {
          updateCheckinStep(2);
          return;
        }

        if (!validateQuiz()) return;
        updateCheckinStep(2);
        return;
      }

      if (checkinStep === 2) {
        updateCheckinStep(3);
        return;
      }

      if (checkinStep === 3) {
        if (!validateMeal()) return;

        await handleStreakStep();   // ⭐ NEW
        return;
      }
    };
  });
}
async function handleStreakStep() {
  const profile = currentProfile;

  const todayStr = getUTCDateString(new Date());
  const badgeCost = calculateBadgeCost(profile, todayStr);
  const userBadges = profile.badge ?? 0;

  // CASE 1: no penalty
  if (badgeCost === 0 || profile.streak === 0) {
    updateCheckinStep(4);
    return;
  }


  const yesterdayUTC = new Date();
  yesterdayUTC.setUTCDate(yesterdayUTC.getUTCDate() - 1);
  const yesterdayStr = getUTCDateString(yesterdayUTC);

  // SHOW STEP 3.5
  updateCheckinStep("3.5");

  const container = document.getElementById("streakSectionDCI");
  const label = document.getElementById("streakQuestion");
  const buttons = document.getElementById("streakButtons");

  buttons.innerHTML = "";

  // CASE A: enough badges
  if (userBadges >= badgeCost) {
    label.textContent = helperT("confirmSaveStreak", { badgeCost });

    const yes = document.createElement("button");
    yes.className = "button";
    yes.textContent = dailyCheckinT("confirmSave");

    const no = document.createElement("button");
    no.className = "button";
    no.textContent = dailyCheckinT("confirmReset");

    yes.onclick = async () => {
      await supabase
        .from("profiles")
        .update({
          badge: userBadges - badgeCost,
          last_checkin_date: yesterdayStr
        })
        .eq("id", currentUser.id);

      currentProfile.badge -= badgeCost;

      updateCheckinStep(4);
    };

    no.onclick = async () => {
      await supabase
        .from("profiles")
        .update({
          streak: 0,
          last_checkin_date: yesterdayStr
        })
        .eq("id", currentUser.id);

      currentProfile.streak = 0;

      updateCheckinStep(4);
    };

    buttons.appendChild(yes);
    buttons.appendChild(no);
  }

  // CASE B: not enough badges
  else {
    const missing = badgeCost - userBadges;

    label.textContent = helperT("notEnoughBadges", { badgeCost, missing });

    const reset = document.createElement("button");
    reset.className = "button";
    reset.textContent = dailyCheckinT("resetStreak");

    const collect = document.createElement("button");
    collect.className = "button";
    collect.textContent = dailyCheckinT("collectBadgesFirst");

    reset.onclick = async () => {
      await supabase
        .from("profiles")
        .update({
          streak: 0,
          last_checkin_date: yesterdayStr
        })
        .eq("id", currentUser.id);

      currentProfile.streak = 0;

      updateCheckinStep(4);
    };

  collect.onclick = async () => {
  const finishBtn = document.getElementById("finishDCIBtn");

  if (finishBtn) {
    finishBtn.classList.remove("hidden");
    finishBtn.disabled = true;
    setWinnersOpenedTrue();
  }

  // 👉 get selected meal FROM DOM at the moment of leaving
  const mealAnswer = document.querySelector('input[name="mealsDCI"]:checked');
  const mealValue = mealAnswer ? parseInt(mealAnswer.value) : null;

  // 🔥 SAVE BOTH
  await supabase
    .from("profiles")
    .update({
      pending_streak_action: todayStr,
      pending_meal: mealValue
    })
    .eq("id", currentUser.id);

  currentProfile.pending_streak_action = todayStr;
  currentProfile.pending_meal = mealValue;

  // navigate
  document.getElementById("checkin").classList.add("hidden");
  showSection("home");
};

    buttons.appendChild(reset);
    buttons.appendChild(collect);
  }
}

document.getElementById("finishDCIBtn").onclick = async (e) => {
  const btn = e.currentTarget;

  // 🚫 prevent double clicks immediately
  if (btn.disabled) return;
  btn.disabled = true;
  btn.classList.add("disabled");


  const result = getTodaysLessonFromProfile(currentProfile);

  todayGoal = result.todayGoal;
  todayLessonIndex = result.todayLessonId;
  todayLesson = result.todayLesson;

  renderTodaysLesson();
  renderYesterdaysQuiz(currentProfile);

  

  try {
    // 🔥 Fetch ONLY when user clicks
    const { data, error } = await supabase
      .from("profiles")
      .select("pending_meal, pending_streak_action")
      .eq("id", currentUser.id)
      .single();

    if (error || !data) {
      console.error("Failed to fetch pending data:", error);
      alert("Something went wrong. Please try again.");
      return;
    }

    const mealValue = data.pending_meal;

    if (!mealValue) {
      alert("Missing meal selection");
      return;
    }

    // 👉 Call submit with fetched value
    const success = await handleSubmit(mealValue);

    if (success) {
      await supabase
        .from("profiles")
        .update({
          pending_streak_action: null,
          pending_meal: null
        })
        .eq("id", currentUser.id);

      currentProfile.pending_streak_action = null;
      currentProfile.pending_meal = null;

      // 🔥 HIDE BUTTON AFTER SUCCESS
  const finishBtn = document.getElementById("finishDCIBtn");
  if (finishBtn) {
    finishBtn.classList.add("hidden");
  }
    }
    
  } finally {
    // ♻️ always re-enable (success or error)
    btn.disabled = false;
    btn.classList.remove("disabled");
  }
};

function validateQuiz() {
  if (currentProfile.day_counter > 0) {
    let allAnswered = true;
    let allCorrect = true;

    yesterdayQuiz.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);

      if (!selected) allAnswered = false;
      else if (parseInt(selected.value, 10) !== q.answer) {
        allCorrect = false;
      }
    });

    if (!allAnswered) {
      alert(dailyCheckinT("answerAllQuiz"));
      return false;
    }

    if (!allCorrect) {
      alert(dailyCheckinT("incorrectQuiz"));
      return false;
    }
  }

  return true;
}
function validateMeal() {
  const mealAnswer = document.querySelector('input[name="mealsDCI"]:checked');

  if (!mealAnswer) {
    alert(dailyCheckinT("selectMeal"));
    return false;
  }

  return true;
}
function updateCheckinButtons() {
  const submitBtn = document.getElementById("submitBtnDCI");
  const finalBtn = document.getElementById("submitAndSupportBtnDCI");
  const startBtn = document.getElementById("startSubmitBtnDCI");

  const btn1 = document.getElementById("nextDCI1");
  const btn2 = document.getElementById("nextDCI2");
  const btn3 = document.getElementById("nextDCI3");

  // hide everything safely
  [btn1, btn2, btn3].forEach(b => {
    if (b) b.style.display = "none";
  });

  if (submitBtn) submitBtn.style.display = "none";
  if (finalBtn) finalBtn.style.display = "none";

  // show correct step button
  if (checkinStep === 1 && btn1) btn1.style.display = "block";
  if (checkinStep === 2 && btn2) btn2.style.display = "block";
  if (checkinStep === 3 && btn3) btn3.style.display = "block";
  if (checkinStep === 3.5) {
  // hide all navigation buttons
  [btn1, btn2, btn3].forEach(b => {
    if (b) b.style.display = "none";
  });

  if (submitBtn) submitBtn.style.display = "none";
  if (finalBtn) finalBtn.style.display = "none";

  return;
}
  if (checkinStep === 4 && currentProfile.day_counter > 0) {
    renderStep4();
    if (submitBtn) submitBtn.style.display = "block";
    if (finalBtn) finalBtn.style.display = "block";
  } else if (checkinStep === 4 && currentProfile.day_counter === 0) {
    renderStep4();
    if (startBtn) startBtn.style.display = "block";
}
}

function renderStep4() {
  
  if(currentProfile.day_counter === 0) {
      impactIntro();
      return;
  }
  else if (currentProfile.day_counter === 4) {
    gamesectionintro();
    return;
  } 
  else {
    pickrandommessage();
  }
}

// Global variables
let yesterdayQuiz = [];
let todayGoal = null;
let todayLessonIndex = 0;
let todayLesson = null;

// Starting points for each diet
const dietStartIndex = {
  "Protecting animals & animal welfare": {
    omnivore: 1,
    vegetarian: 21,
    vegan: 41
  },
  "Caring for the environment & fighting climate change": {
    omnivore: 1001,
    vegetarian: 1021,
    vegan: 1041
  },
  "Healthy living & wellness": {
    omnivore: 2001,
    vegetarian: 2021,
    vegan: 2041
  },
  "Boosting my performance as an athlete": {
    omnivore: 3001,
    vegetarian: 3011,
    vegan: 3016
  }
};

// Map actual diet preference to lesson group
function getLessonDietGroup(diet) {
  switch (diet) {
    case "Vegan":
    case "InTransition":
      return "vegan";
    case "Omnivore":
      return "omnivore";
    case "Vegetarian":
    case "Pescatarian":
    case "Flexitarian":
      return "vegetarian";
    default:
      return "omnivore"; // fallback
  }
}

// ------------------
// 1️⃣ Get today's lesson from currentProfile (index-based)
// ------------------
// Example usage inside getTodaysLessonFromProfile
function getTodaysLessonFromProfile(profile) {
  const defaultGoalOrder = [
    "Protecting animals & animal welfare",
    "Caring for the environment & fighting climate change",
    "Healthy living & wellness",
    "Boosting my performance as an athlete"
  ];

  const normalize = s => (s || "").toString().trim().toLowerCase();

  // ✅ Filter to only goals the user selected
  let availableGoals;
  if (Array.isArray(profile.goals) && profile.goals.length > 0) {
    const selectedNorm = profile.goals.map(g => normalize(g));
    availableGoals = defaultGoalOrder.filter(g => selectedNorm.includes(normalize(g)));
  } else {
    availableGoals = defaultGoalOrder.slice();
  }

  // ✅ Rotate only through selected goals
  const todayGoalIndex = (profile.day_counter || 0) % availableGoals.length;
  const todayGoal = availableGoals[todayGoalIndex] || availableGoals[0];

  // ✅ Determine diet group and order
  const allowedDiets = ["omnivore", "vegetarian", "vegan"];
  const lessonDiet = getLessonDietGroup(profile.diet_preference).toLowerCase();

  // ✅ Get start index for this goal & diet
  const startIndex = (
    dietStartIndex[todayGoal] &&
    dietStartIndex[todayGoal][lessonDiet]
  ) ? parseInt(dietStartIndex[todayGoal][lessonDiet], 10)
    : 1;

  // ✅ Get all lessons for the goal (any diet)
  const allGoalLessons = Object.entries(LessonsByIndex)
    .filter(([id, lesson]) => normalize(lesson.goal) === normalize(todayGoal))
    .sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10));

  if (!allGoalLessons.length) {
    console.warn("⚠️ No lessons found for goal:", todayGoal);
    return { todayGoal, todayLessonId: null, todayLesson: null };
  }

  // ✅ Completed lessons
  const completed = (profile.completed_lessons || [])
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  // ✅ Find the next lesson starting from the user's diet group
  let todayLessonId = null;
  let todayLesson = null;

  for (let [id, lesson] of allGoalLessons) {
    const numericId = parseInt(id, 10);
    const lessonDietLower = (lesson.diet || "").toLowerCase();

    if (numericId >= startIndex && !completed.includes(numericId)) {
      const currentDietIndex = allowedDiets.indexOf(lessonDiet);
      const lessonDietIndex = allowedDiets.indexOf(lessonDietLower);

      if (lessonDietIndex >= currentDietIndex) {
        todayLessonId = numericId;
        todayLesson = lesson;
        break;
      }
    }
  }

  // ✅ If all lessons are done, pick a random lesson from this goal (any diet)
  if (!todayLesson) { 
    const randomPool = allGoalLessons;

    if (randomPool.length > 0) {
      const [randomId, randomLesson] =
        randomPool[Math.floor(Math.random() * randomPool.length)];

      todayLessonId = parseInt(randomId, 10);
      todayLesson = randomLesson;
    } else {
      console.warn("⚠️ No lessons available for random fallback:", todayGoal);
    }
  }

  return { todayGoal, todayLessonId, todayLesson };
}


// ------------------
// 2️⃣ Initialize Daily Check-in
// ------------------
window.initDailyCheckin = function() {

  const result = getTodaysLessonFromProfile(currentProfile);

  todayGoal = result.todayGoal;
  todayLessonIndex = result.todayLessonId;
  todayLesson = result.todayLesson;

  renderTodaysLesson();
  renderYesterdaysQuiz(currentProfile);

  initCheckinNavigation();   // 👈 FIRST attach listeners
  updateCheckinButtons();    // 👈 THEN set visibility

  // THEN decide step
  if (shouldSkipQuizStep()) {
    updateCheckinStep(2);
  } else {
    updateCheckinStep(1);
  }
};

// ------------------
// 3️⃣ Render today's lesson
// ------------------
function renderTodaysLesson() {
  if (!todayLesson) {
    document.getElementById("dailyLessonDCI").innerHTML = `<p>${dailyCheckinT("lessonNotFound")}</p>`;
    return;
  }
const lang = getLang();
const lessonText =
  todayLesson.lesson?.[lang] ||
  todayLesson.lesson?.en ||
  "";

document.getElementById("dailyLessonDCI").innerHTML = `
  <p class="lesson-text">${lessonText}</p>
`;
}

// ------------------
// 4️⃣ Render yesterday's quiz
// ------------------
function renderYesterdaysQuiz(profile) {
  const quizContainer = document.getElementById("quizDCI");
  quizContainer.innerHTML = "";

  if (!profile.last_lesson) {
    quizContainer.style.display = "none";
    yesterdayQuiz = [];
    return;
  }

  const lastLessonId = profile.last_lesson.lessonId;
  const lessonData = LessonsByIndex[lastLessonId];

  if (!lessonData || !lessonData.quiz) {
    quizContainer.style.display = "none";
    yesterdayQuiz = [];
    return;
  }

  yesterdayQuiz = Array.isArray(lessonData.quiz) ? lessonData.quiz : [lessonData.quiz];

  quizContainer.style.display = "block";
  quizContainer.innerHTML = `<label class="bigLabelDCI"> ${dailyCheckinT("lastquiz")}</label>`;

  const lang = getLang();


  yesterdayQuiz.forEach((q, i) => {
const question =
  q.question?.[lang] || q.question?.en || "";

const options =
  q.options?.[lang] || q.options?.en || [];
    const div = document.createElement("div");
    div.className = "quiz-itemDCI";
    div.innerHTML = `
  <p class="quiz-questionDCI">${question}</p>
  <div class="quiz-optionsDCI">
    ${options.map((opt, optIndex) => `
  <label class="checkbox-labelDCI">
    <input type="radio" name="q${i}" value="${optIndex}">
    ${opt}
  </label>
  `).join("")}
  </div>
`;
    quizContainer.appendChild(div);
  });
}

// ------------------
// 4️⃣ Calculate impact
// ------------------
function calculateImpact(mealValue) {
  const impactMultiplier = [0, 0.3, 0.7, 1][mealValue - 1];
  const baseImpact = { animals_saved: 0.7, forest_saved: 0.5, water_saved: 660, co2_saved: 4 };

  return {
    animals_saved: baseImpact.animals_saved * impactMultiplier,
    forest_saved: baseImpact.forest_saved * impactMultiplier,
    water_saved: baseImpact.water_saved * impactMultiplier,
    co2_saved: baseImpact.co2_saved * impactMultiplier
  };
}

submitBtn.addEventListener('click', async () => {
  disableDailyCheckinButtons();
  await handleSubmit();
});

async function handleSubmit(externalMealValue = null) {

  const todayLessonId = todayLessonIndex;

if (!todayLesson) { alert(dailyCheckinT("noLessonToday")); return false; }

  let mealValue;

// 1. external (from finish button)
if (externalMealValue !== null) {
  mealValue = externalMealValue;
} 
// 2. DOM (normal flow)
else {
  const mealAnswer = document.querySelector('input[name="mealsDCI"]:checked');
  if (!mealAnswer) {
    alert(dailyCheckinT("selectMeal"));
    return false;
  }
  mealValue = parseInt(mealAnswer.value);
}
  const impactIncrement = calculateImpact(mealValue);
  const badgeIncrement = mealValue === 4 ? 5 : 0;

  // Update currentProfile
  currentProfile.day_counter += 1;
  currentProfile.streak = (currentProfile.streak || 0) + 1;
  if (mealValue === 4) {
  currentProfile.vegan_days = (currentProfile.vegan_days || 0) + 1;
}
  await addXP(20);
  await addBadges(currentUser.id,badgeIncrement);

  // Store progress using lesson index from LessonsByIndex
  if (!currentProfile.lesson_progress) currentProfile.lesson_progress = [];
  if (!currentProfile.completed_lessons) currentProfile.completed_lessons = [];

  if (!currentProfile.completed_lessons.includes(todayLessonId)) {
  currentProfile.completed_lessons.push(todayLessonId);
  currentProfile.lesson_progress.push(todayLessonId);
}

// Save last lesson using the lesson ID
currentProfile.last_lesson = { goal: todayGoal, lessonId: todayLessonId };

  currentProfile.animals_saved = (currentProfile.animals_saved || 0) + impactIncrement.animals_saved;
  currentProfile.forest_saved = (currentProfile.forest_saved || 0) + impactIncrement.forest_saved;
  currentProfile.water_saved = (currentProfile.water_saved || 0) + impactIncrement.water_saved;
  currentProfile.co2_saved = (currentProfile.co2_saved || 0) + impactIncrement.co2_saved;
  currentProfile.last_checkin_date = new Date().toISOString().split("T")[0];

  // Update Supabase
  // Destructure XP-related fields OUT of the update payload
const {
  total_xp,
  xp_today,
  xp_fraction,
  current_level,
  ...profileWithoutXp
} = currentProfile;

// Update profile WITHOUT XP fields
const { error: updateError } = await supabase
  .from("profiles")
  .update(profileWithoutXp)
  .eq("id", currentProfile.id);

  if (updateError) {
  console.error("Profile update failed:", updateError);
  enableDailyCheckinButtons(); // ✅ Re-enable buttons so user can retry
  return false;                 // stop further execution
}

  // Refresh homepage
  const { profile, globalImpact: fetchedImpact } = await fetchAllData();
  await renderProfile();
 // await injectComparisonSentences(profile);

  // Hide Daily Check-in, show home
  document.getElementById("home").classList.remove("hidden");
 // document.getElementById("topBar").classList.remove("hidden");
  document.getElementById("dailycheck-in")?.classList.add("hidden");
  document.getElementById("learn")?.classList.add("hidden");
  await fetchAllLeaderboards();
  await displayAchievementsPage();
  await loadDailyXpChallenge(currentProfile.id);

  document.getElementById("homepageContentfirst").style.visibility = "hidden";
  document.getElementById("homepageContentsecond").style.visibility = "visible";

  showSection("home");

  return true;
}
//#endregion

//#region LEARNPATH
//--------------------------
// HEALTH LESSONS
//--------------------------

const learnPathTranslations = {
  en: {
    startQuiz: "Start Quiz 📝",
    quizLabel: "Quiz:",
    correctLesson: "✅ Correct! Lesson completed.",
    incorrectLesson: "❌ Incorrect. Try again!",
    takeQuiz: "Take Quiz 🧠",
    submit: "Submit",
    chooseAnswer: "Choose an answer!",
    tryAgain: "Try again!",
    correct: "✅ Correct!",
    xpChallengeDone:
      "You've completed your daily XP challenge! Claim your reward in the playground section!"
  },

  es: {
    startQuiz: "Comenzar quiz 📝",
    quizLabel: "Quiz:",
    correctLesson: "✅ ¡Correcto! Lección completada.",
    incorrectLesson: "❌ Incorrecto. ¡Inténtalo de nuevo!",
    takeQuiz: "Hacer quiz 🧠",
    submit: "Enviar",
    chooseAnswer: "¡Elige una respuesta!",
    tryAgain: "¡Inténtalo de nuevo!",
    correct: "✅ ¡Correcto!",
    xpChallengeDone:
      "¡Has completado tu desafío diario de XP! Reclama tu recompensa en la sección del parque de juegos."
  },

  hu: {
    startQuiz: "Kvíz indítása 📝",
    quizLabel: "Kvíz:",
    correctLesson: "✅ Helyes! Lecke teljesítve.",
    incorrectLesson: "❌ Helytelen. Próbáld újra!",
    takeQuiz: "Kvíz kitöltése 🧠",
    submit: "Beküldés",
    chooseAnswer: "Válassz egy választ!",
    tryAgain: "Próbáld újra!",
    correct: "✅ Helyes!",
    xpChallengeDone:
      "Teljesítetted a napi XP kihívást! Vedd át a jutalmadat a játszótér szekcióban!"
  }
};

function learnPathT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    learnPathTranslations[lang]?.[key] ||
    learnPathTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}

function getLocalizedText(obj) {
  const lang = getLang();
  if (!obj) return "";
  return obj[lang] || obj.en || "";
}

// ------- Health issues----------
async function initHealthPaths() {
  if (!currentUser || !currentProfile) return;

  const userData = currentProfile;
  const healthIssues = userData.health_issues || []; // array of user's health issues

  // Grab elements
  const title = document.querySelector(".YourHealthIssueTitle");
  const allButtons = document.querySelectorAll("#healthissues .path-btn");
  const allCourses = document.querySelectorAll("#healthissues .course");

  // --- RESET STATE ---
  if (title) title.classList.remove("hidden");          // always show title first
  allButtons.forEach(b => b.classList.add("hidden"));   // hide all buttons initially
  allCourses.forEach(c => c.classList.add("hidden"));   // hide all courses initially

  // Show only the buttons for the user's health issues
  allButtons.forEach(btn => {
    if (healthIssues.includes(btn.dataset.path)) {
      btn.classList.remove("hidden");
    }
  });

  // If user has only 1 health issue → auto-click it and hide title/buttons
  if (healthIssues.length === 1) {
    const btn = document.querySelector(
      `#healthissues .path-btn[data-path="${healthIssues[0]}"]`
    );
    if (btn) {
      // Hide title + buttons section
      if (title) title.classList.add("hidden");
      allButtons.forEach(b => b.classList.add("hidden"));

      // Auto-open the single health issue
      btn.click();
    }
  }

  // Wire click events to show selected course
  allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.dataset.path;

      // Hide all courses first
      allCourses.forEach(c => c.classList.add("hidden"));

      // Show selected course
      const selectedCourse = document.getElementById(path);
      if (selectedCourse) selectedCourse.classList.remove("hidden");

      // Render lessons for this course (from your lessonsData for health)
      renderLessonsForHealthIssue(
  path,
  Array.isArray(userData.health_progress?.[path]) ? userData.health_progress[path] : [],
  userData,
  currentUser.id
);
    });
  });

  // If user has only 1 health issue → auto-click it
  if (healthIssues.length === 1) {
    const btn = document.querySelector(`#healthissues .path-btn[data-path="${healthIssues[0]}"]`);
    if (btn) btn.click();
  }
}

// Render lessons for a specific health issue
function renderLessonsForHealthIssue(issue, completedLessons = [], userData, userId) {

  const course = document.getElementById(issue);
  if (!course) return;
  const lessonList = course.querySelector(".lesson-list");
  lessonList.innerHTML = "";

  const lessons = HealthIssuesPool.health.filter(l => l.issue === issue);

  lessons.forEach((lesson, index) => {
    const li = document.createElement("li");

    // Determine class
    let className = "lesson locked";
    if (completedLessons.includes(index + 1)) {
      className = "lesson completed";
    } else if (completedLessons.includes(index) || index === 0) {
      // Unlock the next lesson after the last completed or first lesson
      className = "lesson unlocked";
    }

    li.dataset.step = index + 1;
    li.className = className;

    li.innerHTML = `
  <div class="lesson-title">
    <span class="lesson-icon">${
      li.classList.contains("completed") ? "✅" :
      li.classList.contains("unlocked") ? "🟢" : "🔒"
    }</span>
    ${getLocalizedText(lesson.title)}
  </div>
  <div class="lesson-content"></div>
`;
    lessonList.appendChild(li);

    setupLessonClickForHealth(li, lesson, index, issue, userData, userId);
  });
}

function setupLessonClickForHealth(li, lesson, index, issue, userData, userId) {
  const lessonTab = document.getElementById("healthylesson-tab");
  const lessonTitle = document.getElementById("lesson-title");
  const lessonContent = document.getElementById("lesson-content");
  const quizContainer = document.getElementById("quiz-container");

  li.addEventListener("click", () => {
    if (li.classList.contains("locked")) return; // locked lessons cannot be opened

    // Fill lesson content
    lessonTitle.textContent = getLocalizedText(lesson.title);
    lessonContent.innerHTML = `<p>${getLocalizedText(lesson.content)}</p>`;

    // Start Quiz button
    const startQuizBtn = document.createElement("button");
    startQuizBtn.textContent = learnPathT("startQuiz");
    startQuizBtn.id = "start-quiz-btn";
    lessonContent.appendChild(startQuizBtn);

    quizContainer.innerHTML = "";

    // Show lesson tab and hide main health tab
    lessonTab.classList.remove("hidden");
    document.getElementById("healthissues").classList.add("hidden");

    // Start Quiz click
    startQuizBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      quizContainer.classList.remove("hidden");
      quizContainer.innerHTML = `
        <p><strong>${learnPathT("quizLabel")}</strong> ${getLocalizedText(lesson.quiz.question)}</p>
        ${lesson.quiz.options
      .map((opt, i) => `<button class="quiz-option" data-index="${i}">${getLocalizedText(opt)}</button>`)
      .join("")}
        <div id="quiz-feedback"></div>
      `;

      // Quiz option click
quizContainer.querySelectorAll(".quiz-option").forEach((answerBtn) => {
  answerBtn.addEventListener("click", async (e) => {
    const chosenIndex = parseInt(answerBtn.dataset.index, 10);
    const feedback = quizContainer.querySelector("#quiz-feedback");

    if (chosenIndex === lesson.quiz.answer) {
      feedback.textContent = learnPathT("correctLesson");
      feedback.style.color = "green";

      // Initialize progress
      if (!userData.health_progress) userData.health_progress = {};
      if (!userData.health_progress[issue]) userData.health_progress[issue] = [];
      if (!userData.health_progress[issue].includes(index + 1)) {
        userData.health_progress[issue].push(index + 1);

        // Update Supabase
        const { error } = await supabase
          .from("profiles")
          .update({
            total_xp: (userData.total_xp || 0) + 5,
            health_progress: userData.health_progress
          })
          .eq("id", userId);
        if (error) console.error("Failed to update lesson completion:", error);

        // Rerender course lessons with updated progress
        renderLessonsForHealthIssue(
          issue,
          userData.health_progress[issue],
          userData,
          userId
        );
        const { profile } = await fetchAllData();
        await renderProfile(profile);
        await fetchAllLeaderboards();

        // ✅ Delay before switching back
        setTimeout(() => {
          // Hide lesson tab and show main tab
          lessonTab.classList.add("hidden");
          const mainTab = document.getElementById("healthissues");
          mainTab.classList.remove("hidden");

          // Scroll to next lesson
          const courseList = document.querySelector(`#${CSS.escape(issue)} .lesson-list`);
          const nextLesson = courseList.querySelectorAll(".lesson")[index + 1];
          if (nextLesson) nextLesson.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 1300); // 1000 ms = 1 second
      }
    } else {
      feedback.textContent = learnPathT("incorrectLesson");
      feedback.style.color = "red";
    }
  });
});   
    });
  });
}

// ----------------------------
// EXTRA LESSONS 
// ----------------------------
async function initExtraLessons() { 
  // Make sure profile and extralessonsData are loaded
  if (!currentProfile) {
    console.warn("Cannot initialize extra lessons — profile not ready");
    return;
  }
  if (!extralessonsData) {
    console.warn("Cannot initialize extra lessons — extralessonsData not loaded");
    return;
  }

  renderExtraLessons();
  applyExtraLessonProgress();
  scrollToFirstUndoneLesson();
  setupExtraLessonClicks();
  setupCourseButtons();

}

function scrollToFirstUndoneLesson() {
  const visibleList = document.querySelector(".course:not(.hidden) .extralesson-list");
  if (!visibleList) return;

  const allLessons = Array.from(visibleList.querySelectorAll("li"));
  const firstUndoneIndex = allLessons.findIndex(li => !li.classList.contains("completed"));
  if (firstUndoneIndex === -1) return; // all completed

  // Scroll to two lessons before the first undone lesson
  const scrollToIndex = Math.max(firstUndoneIndex - 2, 0);
  const targetLesson = allLessons[scrollToIndex];

  if (!targetLesson) return;

  // Calculate offset relative to the container
  const containerTop = visibleList.getBoundingClientRect().top;
  const lessonTop = targetLesson.getBoundingClientRect().top;
  const currentScroll = visibleList.scrollTop;

  const offset = lessonTop - containerTop - 16; // 16px padding or adjust
  visibleList.scrollTo({
    top: currentScroll + offset,
    behavior: "smooth"
  });
}

function getHealthLessons(profile) {
  // 1️⃣ Gather lessons from both sources
  const healthIssuesLessons = HealthIssuesPool.health || [];
  const extraLessons = (extralessonsData && extralessonsData.health) || [];
  const userIssues = profile.health_issues || [];

  if (userIssues.length === 0) {
    // If user has no issues, show all general health lessons (both pools)
    const generalHealthIssuesLessons = healthIssuesLessons.filter(l => !l.issue);
    return [...generalHealthIssuesLessons, ...extraLessons];
  }

  // 2️⃣ Group lessons by issue
  const lessonsByIssue = userIssues.map(issue =>
    healthIssuesLessons.filter(lesson => lesson.issue === issue)
  );

  // 3️⃣ Interleave lessons (round-robin)
  const interleaved = [];
  const maxLen = Math.max(...lessonsByIssue.map(l => l.length));
  for (let i = 0; i < maxLen; i++) {
    lessonsByIssue.forEach(issueLessons => {
      if (issueLessons[i]) interleaved.push(issueLessons[i]);
    });
  }

  // 4️⃣ Add general health lessons (without issue)
  const generalLessons = healthIssuesLessons.filter(l => !l.issue);

  // 5️⃣ Add extra lessons from extralessonspool
  const extraHealthLessons = extraLessons.filter(l => !l.issue);

  // 6️⃣ Combine everything
  return [...interleaved, ...generalLessons, ...extraHealthLessons];
}

let globalLessonsToRender = {};

// Render lessons per course
function renderExtraLessons() { 
  if (!extralessonsData) return;

  Object.keys(extralessonsData).forEach(courseKey => {
    const course = document.getElementById(courseKey);
    if (!course) return;

    const lessonList = course.querySelector(".extralesson-list");
    if (!lessonList) return;
    lessonList.innerHTML = "";

    let lessonsToRender = extralessonsData[courseKey];

    if (courseKey === "health" && currentProfile) {          
      lessonsToRender = getHealthLessons(currentProfile);
    }

    globalLessonsToRender[courseKey] = lessonsToRender;

    lessonsToRender.forEach((lesson, index) => {
      const li = document.createElement("li");
      li.dataset.step = index + 1;

      const completedLessons = currentProfile.extra_lesson?.[courseKey] || [];

      if (completedLessons.includes(lesson.title)) {
        li.className = "extralesson completed";
      } else if (index === 0 || completedLessons.includes(lessonsToRender[index - 1]?.title)) {
        li.className = "extralesson unlocked";
      } else {
        li.className = "extralesson locked";
      }

      li.innerHTML = `
        <div class="extralesson-title" data-title="${getLocalizedText(lesson.title)}" data-en-title="${lesson.title.en}">
        <span class="extralesson-icon">
          ${li.classList.contains("completed") ? "✅" : (li.classList.contains("unlocked") ? "🟢" : "🔒")}
        </span>
          ${getLocalizedText(lesson.title)}
        </div>
        <div class="extralesson-content"></div>
      `;

      lessonList.appendChild(li);
    });
  });
}


// Setup click handlers for lessons
function setupExtraLessonClicks() {
  if (!extralessonsData) return;

  ["animals", "earth", "health"].forEach(courseId => {
    const course = document.getElementById(courseId);
    if (!course) return; 

    const lessons = course.querySelectorAll(".extralesson");

    lessons.forEach((lesson, idx) => {
      const contentContainer = lesson.querySelector(".extralesson-content");
      const titleEl = lesson.querySelector(".extralesson-title");
      if (!titleEl) return;

      titleEl.addEventListener("click", async () => {
        if (lesson.classList.contains("locked")) return;

        lessons.forEach(l => {
          if (l !== lesson) {
            l.querySelector(".extralesson-content")?.classList.remove("active");
          }
        });

        contentContainer.classList.toggle("active");
        if (contentContainer.innerHTML.trim()) return;

        const rawLessonData = globalLessonsToRender[courseId]?.[idx];
        const lessonData = resolveLessonData(courseId, rawLessonData);

        if (!lessonData) {
          console.warn("Lesson data unresolved:", courseId, idx);
          return;
        }

        const questionObj = lessonData.question || lessonData.quiz || null;

        let html = `
          <div class="extralesson-text">
            <p>${getLocalizedText(lessonData.content)}</p>
            ${questionObj ? `<button class="start-quiz-btn">${learnPathT("takeQuiz")}</button>` : ""}
          </div>
        `;

        if (questionObj) {
          html += `
            <div class="extraquiz-section" style="display:none;">
              <p><strong>${getLocalizedText(questionObj.text)}</strong></p>
                ${(getLocalizedText(questionObj.options) || []).map((opt, i) => `
              <label>
              <input type="radio" name="quiz-${courseId}-${idx}" value="${i}">
                ${opt}
              </label>
              `).join("")}
              <button class="extraquiz-submit">${learnPathT("submit")}</button>
              <div class="extraquiz-feedback"></div>
            </div>
          `;
        }

        contentContainer.innerHTML = html;

        if (!questionObj) return;

        const startBtn = contentContainer.querySelector(".start-quiz-btn");
        const quiz = contentContainer.querySelector(".extraquiz-section");

        startBtn.onclick = e => {
          e.stopPropagation();
          startBtn.style.display = "none";
          quiz.style.display = "block";
        };

        const submit = quiz.querySelector(".extraquiz-submit");
        const feedback = quiz.querySelector(".extraquiz-feedback");

        submit.onclick = async e => {
          e.stopPropagation();
          const selected = quiz.querySelector("input:checked");
          if (!selected) {
            feedback.textContent = learnPathT("chooseAnswer");
            return;
          }

          if (+selected.value !== questionObj.correctIndex) {
            feedback.textContent = learnPathT("tryAgain");
            return;
          }

          feedback.textContent = learnPathT("correct");

          setTimeout(async () => {
            lesson.classList.remove("unlocked");
            lesson.classList.add("completed");
            lesson.querySelector(".extralesson-icon").textContent = "✅";
            await saveExtraLessonProgress();
            await applyExtraLessonProgress();
            contentContainer.classList.remove("active");
            contentContainer.innerHTML = "";
          }, 800);
        };
      });
    });
  });
}

async function markPathComplete(courseId) {
  if (!currentProfile?.id) return;

  let update = {};

  if (courseId === "animals") update.animal_path = 1;
  if (courseId === "earth") update.earth_path = 1;
  if (courseId === "health") update.health_path = 1;

  if (Object.keys(update).length === 0) return;

  const { error } = await supabase
    .from("achievements_data")
    .update(update)
    .eq("user_id", currentProfile.id);

  if (error) {
    console.error("Failed to mark path complete:", error);
  } else {
    // Keep frontend state in sync
    Object.assign(currentProfile, update);
  }
}

// Save progress using currentProfile if available
async function saveExtraLessonProgress() {
  if (!currentProfile) return;

  const previousProgress = currentProfile.extra_lesson || {};
  const progress = { ...previousProgress };

  for (const courseId of Object.keys(extralessonsData)) {
    progress[courseId] = progress[courseId] || [];

    const lessons = document.querySelectorAll(`#${courseId} .extralesson`);
    for (const lesson of lessons) {
      if (lesson.classList.contains("completed")) {
        // Use stable EN title as ID
        const lessonTitleEN = lesson.querySelector(".extralesson-title")?.dataset.enTitle;
        if (!lessonTitleEN) continue;

        if (!progress[courseId].includes(lessonTitleEN)) {
          progress[courseId].push(lessonTitleEN);

          markLessonComplete(currentProfile.id, courseId);

          // Health lessons: track completed health issues
          if (courseId === "health") {
            const lessonData =
              (extralessonsData.health || []).find(l => l.title.en === lessonTitleEN) ||
              (HealthIssuesPool.health || []).find(l => l.title.en === lessonTitleEN);

            if (lessonData?.issue) {
              if (!currentProfile.completedHealthIssues) currentProfile.completedHealthIssues = [];
              if (!currentProfile.completedHealthIssues.includes(lessonData.issue)) {
                currentProfile.completedHealthIssues.push(lessonData.issue);
              }
            }
          }
        }
      }
    }
  }

  // Update Supabase
  const { error } = await supabase
    .from("profiles")
    .update({
      extra_lesson: progress,
      completed_health_issues: currentProfile.completedHealthIssues || []
    })
    .eq("id", currentProfile.id);

  if (error) console.error("Error saving extra lesson progress:", error);
  else currentProfile.extra_lesson = progress;

  await addXP(5);

 // if ((currentProfile.xp_today || 0) === 50) {
 //   showProgressSuggestion(learnPathT("xpChallengeDone"), currentProfile.pet_photo);
 // }

  await fetchLeaderboard("xp", "overall-level");
  await loadDailyXpChallenge(currentUser.id);
}



// Apply saved progress to DOM (no extra fetch)
async function applyExtraLessonProgress() {
  if (!currentProfile || !currentProfile.extra_lesson) return;

  for (const courseId of Object.keys(currentProfile.extra_lesson)) {
    const lessons = document.querySelectorAll(`#${courseId} .extralesson`);
    const completedEN = currentProfile.extra_lesson[courseId] || [];

    // Map EN titles from storage to localized titles for current language
    const completedLocalized = completedEN.map(enTitle => {
      const lessonObj = globalLessonsToRender[courseId]?.find(l => l.title.en === enTitle);
      return lessonObj ? getLocalizedText(lessonObj.title) : enTitle;
    });

    let prevCompleted = false;

    lessons.forEach((lesson, idx) => {
      const lessonTitle = lesson.querySelector(".extralesson-title")?.dataset.title;

      if (completedLocalized.includes(lessonTitle)) {
        lesson.className = "extralesson completed";
        lesson.querySelector(".extralesson-icon").textContent = "✅";
        prevCompleted = true;
      } else if (prevCompleted || idx === 0) {
        lesson.className = "extralesson unlocked";
        lesson.querySelector(".extralesson-icon").textContent = "🟢";
        prevCompleted = false;
      } else {
        lesson.className = "extralesson locked";
        lesson.querySelector(".extralesson-icon").textContent = "🔒";
      }
    });

    // Unlock review lesson if all normal lessons completed
    const lessonList = document.querySelector(`#${courseId} .extralesson-list`);
    const reviewLessonLi = lessonList.querySelector(".review-lesson");
    const normalLessons = lessonList.querySelectorAll(".extralesson:not(.review-lesson)");
    const allNormalCompleted = Array.from(normalLessons).every(l => l.classList.contains("completed"));
    if (allNormalCompleted) {
        await markPathComplete(courseId); // your existing function to update Supabase
        }
    if (reviewLessonLi && allNormalCompleted) {
      reviewLessonLi.classList.remove("locked");
      reviewLessonLi.classList.add("unlocked");
      reviewLessonLi.querySelector(".extralesson-icon").textContent = "🟢";
      }
    }
  }



// COURSE BUTTONS
function setupCourseButtons() {
  document.querySelectorAll(".learning-path-buttons .path-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.dataset.path;
      document.querySelectorAll(".course").forEach(c => c.classList.add("hidden"));
      const newCourse = document.getElementById(path);
      if (newCourse) {
        newCourse.classList.remove("hidden");
        scrollToFirstUndoneLesson(); // scroll for new tab
      }
    });
  });
}

function normalizeQuiz(lesson) {
  if (lesson.question) return lesson; // already extra-lesson format

  if (lesson.quiz) {
    return {
      ...lesson,
      question: {
        text: lesson.quiz.question,
        options: lesson.quiz.options,
        correctIndex: lesson.quiz.answer
      }
    };
  }

  return lesson;
}

function resolveLessonData(courseId, rawLessonData) {
  if (!rawLessonData) return null;

  if (rawLessonData.type === "review") {
    const pool = (globalLessonsToRender[courseId] || []).filter(l => l.type !== "review");
    return pool.length ? normalizeQuiz(pool[Math.floor(Math.random() * pool.length)]) : null;
  }

  return normalizeQuiz(rawLessonData);
}

//#endregion

//#region RECIPES
// ----------------------------
// RECIPES
// ----------------------------
const recipesTranslations = {
  en: {
    deleteConfirm: "Are you sure you want to delete this recipe?",
    uploading: "Uploading...",
    submit: "Submit",
    uploadSuccess: "Recipe uploaded successfully!",
    missingImage: "Please select a recipe image before submitting.",
    fillAllFields: "Please fill in all fields before submitting.",
    notAvailable: "N/A"
  },
  es: {
    deleteConfirm: "¿Estás seguro de que quieres eliminar esta receta?",
    uploading: "Subiendo...",
    submit: "Enviar",
    uploadSuccess: "¡Receta subida con éxito!",
    missingImage: "Selecciona una imagen antes de enviar.",
    fillAllFields: "Por favor completa todos los campos.",
    notAvailable: "No disponible"
  },
  hu: {
    deleteConfirm: "Biztosan törölni szeretnéd ezt a receptet?",
    uploading: "Feltöltés...",
    submit: "Beküldés",
    uploadSuccess: "A recept sikeresen feltöltve!",
    missingImage: "Kérlek válassz képet a feltöltéshez.",
    fillAllFields: "Kérlek tölts ki minden mezőt.",
    notAvailable: "N/A"
  }
};

function recipesT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    recipesTranslations[lang]?.[key] ||
    recipesTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}


async function loadRecipes() {
  const { data: userData } = await supabase.auth.getUser();
  const userId = userData?.user?.id;

  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

  if (!userId) return; // user not logged in

  // 1️⃣ Fetch full recipes table
  const { data: recipes, error: recipesError } = await supabase
    .from("recipes")
    .select("id, user_id, title, description, image_url, created_at, ingredients, prep_time")
    .eq("lang", lang);;

  if (recipesError) return console.error("Error fetching recipes:", recipesError);

  // 2️⃣ Fetch likes info from RPC
  const { data: likesData, error: likesError } = await supabase
    .rpc("get_recipes_with_likes", { user_uuid: userId });

  if (likesError) return console.error("Error fetching likes:", likesError);

  // 3️⃣ Merge likes info into recipes
  const data = recipes.map(r => {
    const likeInfo = likesData.find(l => l.id === r.id) || {};
    return {
      ...r,
      like_count: likeInfo.like_count || 0,
      liked_by_user: likeInfo.liked_by_user || false
    };
  });

  const container = document.getElementById("recipes-container");
  container.innerHTML = "";

  const modal = document.getElementById("recipe-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalPreptime = document.getElementById("modal-preptime");
  const modalIngredients = document.getElementById("modal-ingredients");
  const modalInstructions = document.getElementById("modal-instructions");
  const closeBtn = modal.querySelector(".close-btn");

  // Hide modal when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Hide modal when clicking outside the content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// To open the modal somewhere else in your code, just use:
function showRecipeModal(recipeData) {
  modalImg.src = recipeData.img;
  modalTitle.textContent = recipeData.title;
  modalPreptime.textContent = recipeData.preptime;
  modalIngredients.textContent = recipeData.ingredients;
  modalInstructions.textContent = recipeData.instructions;

  // Open the modal using the unified system
  openPopup("recipe-modal");
}

  // 4️⃣ Render cards with merged data
  data.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image_url}" alt="${recipe.title}" class="recipe-img">
      <div class="recipe-title">${recipe.title}</div>
      <button class="like-btn ${recipe.liked_by_user ? "liked" : "not-liked"}" data-id="${recipe.id}">
        <span class="heart-icon"></span>
        <span class="like-count">${recipe.like_count}</span>
      </button>
    `;

    if (recipe.user_id === userId) {
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", async (e) => {
  e.stopPropagation();
  if (!confirm(recipesT("deleteConfirm"))) return;

  // 1️⃣ Delete DB row first
  const { error: delError } = await supabase
    .from("recipes")
    .delete()
    .eq("id", recipe.id);

  if (delError) {
    console.error("Delete failed:", delError);
    return;
  }

  // 2️⃣ Delete image from storage
  if (recipe.image_url) {
    const filePath = getStoragePathFromPublicUrl(recipe.image_url, "recipes");

    if (filePath) {
      const { error: storageError } =
        await supabase.storage.from("recipes").remove([filePath]);

      if (storageError) {
        console.error("Storage delete failed:", storageError);
      }
    }
  }

  // 3️⃣ Remove card from UI
  card.remove();
});

      card.appendChild(deleteBtn);
    }

    // Modal click
    card.querySelector(".recipe-img, .recipe-title").addEventListener("click", () => {
  showRecipeModal({
    img: recipe.image_url,
    title: recipe.title,
    preptime: recipe.prep_time ? `${recipe.prep_time}` : recipesT("notAvailable") ,
    ingredients: `${recipe.ingredients}`,
    instructions: `${recipe.description}`
  });
});

    const likeBtn = card.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => toggleLike(recipe.id, userId, likeBtn));

    container.appendChild(card);
  });
}

function getStoragePathFromPublicUrl(publicUrl, bucket) {
  const marker = `/storage/v1/object/public/${bucket}/`;
  const index = publicUrl.indexOf(marker);
  if (index === -1) return null;
  return publicUrl.substring(index + marker.length);
}

// Toggle like function
async function toggleLike(recipeId, userId) {
  const likeBtn = document.querySelector(`.like-btn[data-id="${recipeId}"]`);
  const countSpan = likeBtn.querySelector(".like-count");

  // Prevent spamming
  if (likeBtn.disabled) return;
  likeBtn.disabled = true;

  try {
    const { data: existingLikes, error } = await supabase
      .from("recipe_likes")
      .select("id, recipe_id, user_id")
      .eq("recipe_id", recipeId)
      .eq("user_id", userId);

    if (error) throw error;

    if (existingLikes.length > 0) {
      // Remove like
      const { error: delError } = await supabase
        .from("recipe_likes")
        .delete()
        .eq("recipe_id", recipeId)
        .eq("user_id", userId);
      if (delError) throw delError;

      likeBtn.classList.remove("liked");
      likeBtn.classList.add("not-liked");
      countSpan.textContent = parseInt(countSpan.textContent) - 1;
    } else {
      // Add like
      const { error: insertError } = await supabase
        .from("recipe_likes")
        .insert([{ recipe_id: recipeId, user_id: userId }]);
      if (insertError) throw insertError;

      likeBtn.classList.remove("not-liked");
      likeBtn.classList.add("liked");
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    }
  } catch (err) {
    console.error(err);
  } finally {
    likeBtn.disabled = false; 
  }
}

function setupRecipeUploadForm() {
  const recipeImageInput = document.getElementById("recipeImage");
  const previewImg = document.getElementById("previewImg");
  const imagePreview = document.getElementById("imagePreview");
  const form = document.getElementById("recipeForm");
  const uploadFeedback = document.getElementById("uploadFeedback");
  const submitBtn = form.querySelector('button[type="submit"]');

  let recipePhotoFile = null;

  // Image preview
  recipeImageInput.addEventListener("change", e => {
    recipePhotoFile = e.target.files[0] || null;

    if (recipePhotoFile) {
      const reader = new FileReader();
      reader.onload = e => {
        previewImg.src = e.target.result;
        imagePreview.style.display = "flex";
      };
      reader.readAsDataURL(recipePhotoFile);
    } else {
      previewImg.src = "";
      imagePreview.style.display = "none";
    }
  });

  // Form submit
  form.addEventListener("submit", async e => {
  e.preventDefault();
  if (!submitBtn) return;

  submitBtn.disabled = true;
  submitBtn.textContent = recipesT("uploading");

  try {
    let file = recipePhotoFile;
    if (!file) throw new Error(recipesT("missingImage"));

    // --- Resize the image here ---
    file = await resizeImage(file, 600, 0.7, 'image/webp');

    // --- Generate safe filename ---
    const safeFileName = sanitizeFileName(
      `recipe_${currentUser.id}_${Date.now()}.webp`
    );

    file = new File([file], safeFileName, { type: 'image/webp' });
    recipePhotoFile = file;

    const title = document.getElementById("recipeTitle").value.trim();
    const prepTime = document.getElementById("recipePrepTime").value.trim();
    const ingredients = document.getElementById("recipeIngredients").value.trim();
    const instructions = document.getElementById("recipeInstructions").value.trim();

    if (!title || !prepTime || !ingredients || !instructions) {
      throw new Error(recipesT("fillAllFields"));
    }

    const filePath = `recipes/${safeFileName}`;

    const { error: uploadError } = await supabase
      .storage
      .from("recipes")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from("recipes")
      .getPublicUrl(filePath);


  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

    const { error: insertError } = await supabase
      .from("recipes")
      .insert({
        user_id: currentUser.id,
        title,
        prep_time: prepTime,
        ingredients,
        description: instructions,
        image_url: data.publicUrl,
        lang: lang
      });

    if (insertError) throw insertError;

    alert(recipesT("uploadSuccess"));
    await addXP(2);

    form.reset();
    recipePhotoFile = null;
    previewImg.src = "";
    imagePreview.style.display = "none";

    document.getElementById("upload-recipe")?.classList.remove("active");

    if (typeof loadRecipes === "function") loadRecipes();

  } catch (err) {
    alert(err.message);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = recipesT("submit");
  }
});
}

// Open modal button
const openUploadBtn = document.getElementById("openUploadBtn");
const uploadModal = document.getElementById("upload-recipe");
const closeBtns = uploadModal.querySelectorAll(".close-btn");

// Show modal
openUploadBtn?.addEventListener("click", () => {
  openPopup("upload-recipe"); // use your global openPopup function
});

// Hide modal with close buttons
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    uploadModal.classList.remove("active");
  });
});

// Hide modal when clicking outside content
uploadModal?.addEventListener("click", e => {
  if (e.target === uploadModal) {
    uploadModal.classList.remove("active");
  }
});


//#endregion

//#region COMPARISON
//--------------------------
// COMPARISON
//--------------------------

const comparisonTranslations = {
  en: {
    animalsSentence: [
      {
        text: "Because of you, <span class=\"highlight\">{animals}</span> animals are safe — imagine them as happy friends roaming freely!",
        info: "Estimated using an average model of ~0.7 animal lives avoided per day on a vegan diet compared to a standard omnivorous diet. This is a simplified statistical approximation, not a fixed biological value."
      },
      {
        text: "You’ve given <span class=\"highlight\">{animals}</span> animals a second chance at life",
        info: "Estimated using an average model of ~0.7 animal lives avoided per day on a vegan diet compared to a standard omnivorous diet. This is a simplified statistical approximation, not a fixed biological value."
      },
      {
        text: "<span class=\"highlight\">{animals}</span> lives spared — they are sentient beings living peacefully because of you.",
        info: "Estimated using an average model of ~0.7 animal lives avoided per day on a vegan diet compared to a standard omnivorous diet. This is a simplified statistical approximation, not a fixed biological value."
      },
      {
        text: "Every choice matters — and yours protected <span class=\"highlight\">{animals}</span> animals",
        info: "Estimated using an average model of ~0.7 animal lives avoided per day on a vegan diet compared to a standard omnivorous diet. This is a simplified statistical approximation, not a fixed biological value."
      }
    ],

    forestSentence: [
      {
        text: "The forest you saved absorbs about <span class=\"highlight\">{co2Absorbed}</span> kg of CO₂ per year — like removing emissions from everyday life ",
        info: "Estimated using average carbon absorption rates of forests. A typical mature tree absorbs ~10–25 kg of CO₂ per year, and forest areas are scaled using average tree density per square meter depending on biome type."
      },
      {
        text: "The forest area you saved helps filter the air and cool the planet — like a natural climate system",
        info: "Forests regulate climate through evapotranspiration, carbon storage, and heat absorption. These processes help stabilize temperature, humidity, and air quality at local and global scales."
      },
      {
        text: "Saving this forest area is like saving around <span class=\"highlight\">{paper}</span> sheets of paper",
        info: "This is based on the common estimate that 1 mature tree can yield approximately 7,500–10,000 sheets of paper.. We use an average value of ~8,000 sheets per tree."
      },
      {
        text: "The forest you saved provides a home for around <span class=\"highlight\">{birds}</span> birds",
        info: "Bird population estimates are based on average species density (2 birds/tree, 1 tree/10m² forest) in temperate and mixed forests, where multiple bird species occupy overlapping territories depending on canopy structure and habitat diversity."
      }
    ],

    waterSentence: [
      {
        text: "The water you saved is enough for <span class=\"highlight\">{showers}</span> showers — all saved by your choices!",
        info: "Estimated using average household shower consumption, typically 60–70 liters per 5–10 minute shower depending on flow rate and region."
      },
      {
        text: "The water you saved is enough to cover the daily needs of about <span class=\"highlight\">{people}</span> people",
        info: "Based on WHO basic water needs guideline of approximately 50 liters per person per day, covering drinking, cooking, and basic hygiene."
      },
      {
        text: "The amount of water you saved could keep <span class=\"highlight\">{drinkingDays}</span> people hydrated for a day",
        info: "Based on minimum survival drinking water requirement of ~2 liters per person per day as a physiological baseline."
      },
      {
        text: "The water you saved is enough to fill <span class=\"highlight\">{pools}</span> small backyard pools",
        info: "Based on an estimated small backyard pool volume of approximately 2,000 liters, which can vary depending on size and depth."
      }
    ],

    co2Sentence: [
      {
        text: "You reduced <span class=\"highlight\">{co2}</span> kg of CO₂, it's like avoiding <span class=\"highlight\">{carHours}</span> hours of driving",
        info: "Based on average passenger car emissions per kilometer and typical driving speeds, resulting in an estimated CO₂ output per hour of driving."
      },
      {
        text: "The amount of CO₂ you reduced is roughly what <span class=\"highlight\">{trees}</span> trees absorb in a year",
        info: "Based on scientific estimates that a mature tree absorbs approximately 10–25 kg of CO₂ per year, depending on species, age, and climate conditions."
      },
      {
        text: "Your impact helps slow climate change — one conscious choice at a time!",
        info: "General climate impact statement reflecting cumulative emissions reductions from individual behavioral changes over time."
      },
      {
       text: "You prevented as much CO₂ as the monthly electricity use of <span class=\"highlight\">{householdsPerMonth}</span> households!",
       info: "Based on average household electricity consumption (~300 kWh/month) and regional grid carbon intensity (~0.3 kg CO₂ per kWh), converted from total CO₂ savings."
      }
    ]
},

  es: {
  animalsSentence: [
    {
      text: "Gracias a ti, <span class=\"highlight\">{animals}</span> animales están a salvo — imagínalos como amigos felices viviendo libremente",
      info: "Estimated using an average model of ~0.7 animal lives avoided per day on a vegan diet compared to a standard omnivorous diet. This is a simplified statistical approximation, not a fixed biological value."
    },
    {
      text: "Has dado a <span class=\"highlight\">{animals}</span> animales una segunda oportunidad de vida",
      info: "Estimado utilizando un modelo promedio de ~0,7 vidas de animales evitadas por día con una dieta vegana en comparación con una dieta omnívora estándar. Esta es una aproximación estadística simplificada, no un valor biológico fijo."
    },
    {
      text: "<span class=\"highlight\">{animals}</span> vidas salvadas — son seres sentientes viviendo en paz, gracias a ti!",
      info: "Estimado utilizando un modelo promedio de ~0,7 vidas de animales evitadas por día con una dieta vegana en comparación con una dieta omnívora estándar. Esta es una aproximación estadística simplificada, no un valor biológico fijo."
    },
    {
      text: "Cada decisión cuenta — y la tuya protegió a <span class=\"highlight\">{animals}</span> animales",
      info: "Estimado utilizando un modelo promedio de ~0,7 vidas de animales evitadas por día con una dieta vegana en comparación con una dieta omnívora estándar. Esta es una aproximación estadística simplificada, no un valor biológico fijo."
    }
  ],

  forestSentence: [
    {
      text: "El bosque que has salvado absorbe alrededor de <span class=\"highlight\">{co2Absorbed}</span> kg de CO₂ al año — como eliminar emisiones de la vida cotidiana",
      info: "Estimación basada en las tasas medias de absorción de carbono de los bosques. Un árbol maduro absorbe aproximadamente entre 10 y 25 kg de CO₂ al año, y las áreas forestales se escalan usando la densidad media de árboles por metro cuadrado según el bioma."
    },
    {
      text: "El área de bosque que has salvado ayuda a filtrar el aire y enfriar el planeta — como un sistema climático natural",
      info: "Los bosques regulan el clima mediante la evapotranspiración, el almacenamiento de carbono y la absorción de calor. Estos procesos ayudan a estabilizar la temperatura, la humedad y la calidad del aire a escala local y global."
    },
    {
      text: "Salvar este bosque es como salvar alrededor de <span class=\"highlight\">{paper}</span> hojas de papel",
      info: "Basado en la estimación común de que un árbol maduro puede producir aproximadamente entre 7.500 y 10.000 hojas de papel. Usamos un valor medio de ~8.000 hojas por árbol."
    },
    {
      text: "El bosque que has salvado da hogar a unas <span class=\"highlight\">{birds}</span> aves",
      info: "Las estimaciones de población de aves se basan en la densidad media de especies (2 aves por árbol, 1 árbol por cada 10 m² de bosque) en bosques templados y mixtos, donde múltiples especies ocupan territorios superpuestos según la estructura del dosel y la biodiversidad del hábitat."
    }
  ],

  waterSentence: [
    {
      text: "El agua que has ahorrado es suficiente para <span class=\"highlight\">{showers}</span> duchas — todo gracias a tus decisiones",
      info: "Estimado utilizando el consumo medio de agua en duchas domésticas, normalmente 60–70 litros por ducha de 5–10 minutos, dependiendo del caudal y la región."
    },
    {
      text: "El agua que has ahorrado cubre las necesidades diarias de unas <span class=\"highlight\">{people}</span> personas",
      info: "Basado en la guía de necesidades básicas de agua de la OMS de aproximadamente 50 litros por persona al día, que cubre bebida, cocina e higiene básica."
    },
    {
      text: "La cantidad de agua que has ahorrado podría mantener hidratadas a <span class=\"highlight\">{drinkingDays}</span> personas durante un día",
      info: "Basado en el requisito mínimo de supervivencia de agua potable de ~2 litros por persona al día como referencia fisiológica básica."
    },
    {
      text: "Suficiente agua para llenar <span class=\"highlight\">{pools}</span> pequeñas piscinas",
      info: "Basado en un volumen estimado de una pequeña piscina doméstica de aproximadamente 2.000 litros, que puede variar según el tamaño y la profundidad."
    }
  ],

  co2Sentence: [
    {
      text: "Has reducido <span class=\"highlight\">{co2}</span> kg de CO₂, es como evitar <span class=\"highlight\">{carHours}</span> horas de coche",
      info: "Basado en las emisiones medias de un coche por kilómetro y velocidades típicas de conducción, lo que resulta en una estimación de CO₂ emitido por hora de conducción."
    },
    {
      text: "La cantidad de CO₂ que has reducido es aproximadamente lo que absorben <span class=\"highlight\">{trees}</span> árboles en un año",
      info: "Basado en estimaciones científicas de que un árbol maduro absorbe aproximadamente entre 10 y 25 kg de CO₂ al año, dependiendo de la especie, la edad y las condiciones climáticas."
    },
    {
      text: "Tu impacto ayuda a frenar el cambio climático — una decisión consciente a la vez",
      info: "Declaración general del impacto climático que refleja la reducción acumulada de emisiones derivada de cambios de comportamiento individuales a lo largo del tiempo."
    },
    {
      text: "Has evitado tanto CO₂ como el consumo eléctrico mensual de <span class=\"highlight\">{householdsPerMonth}</span> hogares!",
      info: "Basado en el consumo medio de electricidad de un hogar (~300 kWh/mes) y la intensidad media de carbono de la red eléctrica (~0,3 kg CO₂ por kWh), convertido a partir del total de CO₂ ahorrado."
    }
  ]
},

hu: {
  animalsSentence: [
    {
      text: "Neked köszönhetően <span class=\"highlight\">{animals}</span> állat biztonságban van — képzeld el őket boldog, szabad életben",
      info: "Estimado utilizando un modelo promedio de ~0,7 vidas de animales evitadas por día con una dieta vegana en comparación con una dieta omnívora estándar. Esta es una aproximación estadística simplificada, no un valor biológico fijo."
    },
    {
      text: "<span class=\"highlight\">{animals}</span> állatnak adtál egy második esélyt az életre",
      info: "Becslés egy átlagos modellen alapul, amely szerint a vegán étrend napi ~0,7 állati életet takarít meg egy hagyományos mindenevő étrendhez képest. Ez egy egyszerűsített statisztikai közelítés, nem egy rögzített biológiai érték."
    },
    {
      text: "<span class=\"highlight\">{animals}</span> megmentett élet — érző lények élnek békében miattad.",
      info: "Becslés egy átlagos modellen alapul, amely szerint a vegán étrend napi ~0,7 állati életet takarít meg egy hagyományos mindenevő étrendhez képest. Ez egy egyszerűsített statisztikai közelítés, nem egy rögzített biológiai érték."
    },
    {
      text: "Minden döntés számít — és a tiéd <span class=\"highlight\">{animals}</span> állatot védett meg",
      info: "Becslés egy átlagos modellen alapul, amely szerint a vegán étrend napi ~0,7 állati életet takarít meg egy hagyományos mindenevő étrendhez képest. Ez egy egyszerűsített statisztikai közelítés, nem egy rögzített biológiai érték."
    }
  ],

  forestSentence: [
    {
      text: "Az általad megmentett erdő évente körülbelül <span class=\"highlight\">{co2Absorbed}</span> kg CO₂-t nyel el — mintha eltüntetnénk a mindennapi élet kibocsátásait",
      info: "Becslés az erdők átlagos szén-dioxid-megkötési rátája alapján. Egy kifejlett fa évente körülbelül 10–25 kg CO₂-t nyel el, az erdőterületeket pedig a biómától függő átlagos fa/m² sűrűséggel számítjuk."
    },
    {
      text: "Az általad megmentett erdő segít tisztítani a levegőt és hűteni a bolygót — mint egy természetes klímarendszer",
      info: "Az erdők a párologtatás, a szénmegkötés és a hőelnyelés révén szabályozzák az éghajlatot. Ezek a folyamatok segítenek stabilizálni a hőmérsékletet, a páratartalmat és a levegő minőségét helyi és globális szinten."
    },
    {
      text: "Ekkora erdőt <span class=\"highlight\">{paper}</span> papírlap megspórolásával mentettél volna meg",
      info: "Az általános becslés szerint egy kifejlett fa körülbelül 7 500–10 000 papírlap előállítására alkalmas. Itt átlagosan ~8 000 lapot használunk fánként."
    },
    {
      text: "Az erdő amit eddig megmentettél körülbelül <span class=\"highlight\">{birds}</span> madár otthona",
      info: "A madárpopuláció becslése átlagos faj-sűrűségen alapul (2 madár/fánként, 1 fa/10 m² erdő), mérsékelt és vegyes erdőkben, ahol több faj átfedő territóriumokban él a lombkorona szerkezetétől és az élőhely biodiverzitásától függően."
    }
  ],

  waterSentence: [
    {
      text: "Az általad megspórolt víz elég <span class=\"highlight\">{showers}</span> zuhanyhoz",
      info: "Becslés a háztartási zuhanyok átlagos vízfogyasztása alapján, amely jellemzően 60–70 liter egy 5–10 perces zuhany esetén, a vízáramlástól és a régiótól függően."
    },
    {
      text: "Az általad megspórolt víz körülbelül <span class=\"highlight\">{people}</span> ember napi szükségleteit fedezi",
      info: "Az Egészségügyi Világszervezet (WHO) alapvető vízigényre vonatkozó ajánlásán alapul, amely körülbelül 50 liter/fő/nap, beleértve az ivást, főzést és alapvető higiénét."
    },
    {
      text: "Az általad megspórolt víz <span class=\"highlight\">{drinkingDays}</span> ember hidratálására lenne elég egy napig",
      info: "Az alapvető fiziológiai túlélési vízigényen alapul, amely körülbelül ~2 liter/fő/nap ivóvíz."
    },
    {
      text: "Az általad megspórolt víz elég <span class=\"highlight\">{pools}</span> kis kerti medence megtöltéséhez",
      info: "Egy kis kerti medence becsült térfogatán alapul, amely körülbelül 2000 liter, és a mérettől és mélységtől függően változhat."
    }
  ],

  co2Sentence: [
    {
      text: "<span class=\"highlight\">{co2}</span> kg CO₂ kibocsátást csökkentettél, ez olyan, mintha <span class=\"highlight\">{carHours}</span> órát nem autóztál volna",
      info: "Az autók átlagos kilométerenkénti kibocsátásán és a tipikus vezetési sebességeken alapul, amely óránkénti CO₂-kibocsátási becslést eredményez."
    },
    {
      text: "Az általad csökkentett CO₂ mennyiségét nagyjából <span class=\"highlight\">{trees}</span> fa nyeli el egy év alatt",
      info: "Tudományos becsléseken alapul, amelyek szerint egy kifejlett fa évente körülbelül 10–25 kg CO₂-t köt meg, a fajtól, kortól és éghajlati viszonyoktól függően."
    },
    {
      text: "A hatásod segít lassítani a klímaváltozást — egy tudatos döntés egyszerre",
      info: "Általános klímahatás-megállapítás, amely az egyéni viselkedésváltozásokból származó kumulatív kibocsátáscsökkentést tükrözi."
    },
    {
      text: "Eddig <span class=\"highlight\">{householdsPerMonth}</span> háztartás havi villamosenergia-fogyasztása által előállított CO₂-t spóroltál meg!",
      info: "Az átlagos háztartási villamosenergia-fogyasztás (~300 kWh/hó) és a villamosenergia-hálózat átlagos szénintenzitása (~0,3 kg CO₂/kWh) alapján számítva, a teljes CO₂-megtakarításból levezetve."
    }
  ]
}
};

/*
function comparisonT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

  let entry =
    comparisonTranslations[lang]?.[key] ||
    comparisonTranslations.en[key] ||
    key;

  // 👉 NEW: handle array (pool)
  let str = Array.isArray(entry)
    ? entry[Math.floor(Math.random() * entry.length)]
    : entry;

  // Replace variables
  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}
// Constants for comparisons
const sheetsPerTree = 8000;
const forestAreaPerTree = 10; // m²
const showerWaterUse = 65; // liters
const co2PerCarHour = 10; // kg

function injectComparisonSentences(profile) {
  const animals = Math.round(profile.animals_saved || 0);
  const forest  = Math.round(profile.forest_saved || 0);
  const water   = Math.round(profile.water_saved || 0);
  const co2     = Math.round(profile.co2_saved || 0);

  // Calculate equivalents
  const treesSaved = forest / forestAreaPerTree;
  const paperEquivalent = Math.round(treesSaved * sheetsPerTree);
  const showerEquivalent = Math.round(water / showerWaterUse);
  const carTimeEquivalent = Math.round(co2 / co2PerCarHour);

  // Inject into separate blocks with highlighted values
document.getElementById("animalsSentence").innerHTML =
  comparisonT("animalsSentence", { animals });

document.getElementById("forestSentence").innerHTML =
  comparisonT("forestSentence", {
      forest,
      paper: paperEquivalent
    });

document.getElementById("waterSentence").innerHTML =
  comparisonT("waterSentence", {
      water,
      showers: showerEquivalent
    });
    
document.getElementById("co2Sentence").innerHTML =
 comparisonT("co2Sentence", {
      co2,
      carHours: carTimeEquivalent
    });
}

document.getElementById('calculateImpactBtn').addEventListener('click', () => {
  const years = parseInt(document.getElementById('years').value) || 0;
  const months = parseInt(document.getElementById('months').value) || 0;
  const totalMonths = years * 12 + months;

  // Impact per month constants
  const animalsSavedPerMonth = 21;
  const forestSavedPerMonth = 15; // m²
  const waterSavedPerMonth = 2000; // liters
  const co2SavedPerMonth = 120; // kg

  // Calculate total impact
  const animalsSaved = animalsSavedPerMonth * totalMonths;
  const forestSaved = forestSavedPerMonth * totalMonths;
  const waterSaved = waterSavedPerMonth * totalMonths;
  const co2Saved = co2SavedPerMonth * totalMonths;

  // Inject results and show container
  document.getElementById('calcAnimals').textContent = animalsSaved;
  document.getElementById('calcForest').textContent = forestSaved;
  document.getElementById('calcWater').textContent = waterSaved;
  document.getElementById('calcCO2').textContent = co2Saved;

  // 🐾 Sentences
  document.getElementById('calcComparison').innerHTML =
comparisonT("calcComparison", {
    oxygen: Math.round(forestSaved / 20),
    bathtubs: Math.round(waterSaved / 170),
    trees: Math.round(co2Saved / 21)
  });

  document.getElementById('impactResults').classList.remove('hidden');
});
*/
//#endregion

//#region PROFILE

const profileTranslations = {
  en: {
    noAchievements: "No achievements yet."
  },
  es: {
    noAchievements: "No tienes logros aún."
  },
  hu: {
    noAchievements: "Még nincs elért eredmény."
  }
};

function profileT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    profileTranslations[lang]?.[key] ||
    profileTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}
//--------------------------
// CHANGE PROFILE
//--------------------------
async function displayAchievementsSettings(userId) {
  const { data, error } = await supabase
    .from('profilecards')
    .select('achievements')
    .eq('user_id', userId)
    .single();

  const container = document.getElementById("AchievementsListSettings");
  if (!container) return;

  if (error) {
    console.error("Error fetching achievements:", error);
    container.innerHTML = `<p>${profileT("noAchievements")}</p>`;
    return;
  }

  populateAchievements(container, data.achievements);
}

// --- SAVE PROFILE ---
async function saveProfile() {
  if (!currentUser || !currentProfile) {
    console.error("User not loaded yet");
    return;
  }

  const updates = {};

  // Name
  updates.name = document.getElementById('profileNameInput').value || null;

  // Diet Preference
  updates.diet_preference = document.getElementById('profileDietSelect').value || null;

  // Goals
  const selectedGoals = Array.from(document.querySelectorAll('input[name="goal"]:checked')).map(cb => cb.value);
  updates.goals = selectedGoals.length ? selectedGoals : null;

  // Health Issues
  const solvingChecked = selectedGoals.includes("Solving health issues");
  const selectedHealth = solvingChecked
    ? Array.from(document.querySelectorAll('input[name="healthIssue"]:checked')).map(cb => cb.value)
    : [];
  updates.health_issues = selectedHealth.length ? selectedHealth : null;

  // Pet name
  updates.pet_name = document.getElementById('petNameInput').value || null;

  // --- Handle Profile Photo ---
if (newProfilePhotoFile) {
  await deleteFileByUrl(currentProfile.profile_photo);  
  updates.profile_photo = await uploadFile(newProfilePhotoFile, 'profile_photos', currentUser.id);
}

// --- Handle Pet Photo ---
if (newPetPhotoFile) {
  await deleteFileByUrl(currentProfile.pet_photo);
  updates.pet_photo = await uploadFile(newPetPhotoFile, 'pet_photos', currentUser.id);
}

  // --- Update profiles table ---
  const { error: updateError } = await supabase.from('profiles').update(updates).eq('id', currentUser.id);
  if (updateError) return console.error(profileT("saveProfileError"), updateError);

  // --- Update related tables ---
  const relatedUpdates = {
    name: updates.name,
    profile_photo: updates.profile_photo
  };

  // Chats
  await supabase.from('chats').update({ user1_name: relatedUpdates.name, user1_profile_photo: relatedUpdates.profile_photo }).eq('user1_id', currentUser.id);
  await supabase.from('chats').update({ user2_name: relatedUpdates.name, user2_profile_photo: relatedUpdates.profile_photo }).eq('user2_id', currentUser.id);

  // Friends
  await supabase.from('friends').update({ user1_name: relatedUpdates.name, user1_profile_photo: relatedUpdates.profile_photo }).eq('user1_id', currentUser.id);
  await supabase.from('friends').update({ user2_name: relatedUpdates.name, user2_profile_photo: relatedUpdates.profile_photo }).eq('user2_id', currentUser.id);

  // Community participants
  await supabase.from('community_participants').update(relatedUpdates).eq('user_id', currentUser.id);

  // Mentors
  await supabase.from('mentors').update(relatedUpdates).eq('user_id', currentUser.id);

  // --- Update local profile object ---
  Object.assign(currentProfile, updates);

// Re-fetch latest data
const { profile, impact } = await fetchAllData();

// Update global variables (fetchAllData already does this)
currentProfile = profile;
currentGlobalImpact = impact;

// Re-render everything that depends on profile/globalImpact
await renderProfile();       
await initExtraLessons();    

  // Show profile view
  goBackTab();
}

async function deleteFileByUrl(publicUrl) {
  if (!publicUrl) return;

  try {
    const url = new URL(publicUrl);
    const match = url.pathname.match(/\/object\/public\/([^\/]+)\/(.+)/);
    if (!match) return;

    const bucket = match[1];
    const filePath = match[2];

    const { error } = await supabase.storage.from(bucket).remove([filePath]);
    if (error) console.warn("Failed to delete file:", error);
  } catch (err) {
    console.warn("Error parsing URL:", err);
  }
}


// --- Helper: upload file ---
async function uploadFile(file, bucket, userId) {
  // Sanitize the file name to avoid invalid characters
  const safeName = sanitizeFileName(file.name);

  // Extract extension and base name
  const ext = safeName.split('.').pop();
  const base = safeName.replace(`.${ext}`, '');

  // Build the file path with timestamp to avoid conflicts
  const filePath = `${userId}/${base}-${Date.now()}.${ext}`;

  // Upload the file to Supabase Storage
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, { upsert: true });

  if (error) throw error;

  // Return the public URL of the uploaded file
  return supabase.storage.from(bucket).getPublicUrl(filePath).data.publicUrl;
}


// Attach save button
document.getElementById('saveBtn')?.addEventListener('click', saveProfile);


//#endregion

//#region FRIENDS
const friendsTranslations = {
  en: {
    noCodeProvided: "No code provided.",
    cannotFriendSelf: "You cannot send a request to yourself.",
    userNotFound: "User not found.",
    requestAlreadySent: "Request already sent!",
    friendRequestSent: "Friend request sent!",
    accept: "Accept",
    decline: "Decline",
    message: "Message",
    unknown: "Unknown"
  },
  es: {
    noCodeProvided: "No se proporcionó ningún código.",
    cannotFriendSelf: "No puedes enviarte una solicitud a ti mismo.",
    userNotFound: "Usuario no encontrado.",
    requestAlreadySent: "¡Solicitud ya enviada!",
    friendRequestSent: "¡Solicitud de amistad enviada!",
    accept: "Aceptar",
    decline: "Rechazar",
    message: "Mensaje",
    unknown: "Desconocido"
  },
  hu: {
    noCodeProvided: "Nem adtál meg kódot.",
    cannotFriendSelf: "Nem küldhetsz kérelmet magadnak.",
    userNotFound: "Felhasználó nem található.",
    requestAlreadySent: "A kérelmet már elküldték!",
    friendRequestSent: "Barátkérelem elküldve!",
    accept: "Elfogadás",
    decline: "Elutasítás",
    message: "Üzenet",
    unknown: "Ismeretlen"
  }
};

function friendsT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    friendsTranslations[lang]?.[key] ||
    friendsTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}

async function sendRequest(receiverCode) {
  const friend_code = receiverCode.trim().toUpperCase();
  if (!friend_code) return { success: false, message: friendsT("noCodeProvided") };

  if (friend_code === currentUser.friend_code?.toLowerCase()) {
    return { success: false, message: friendsT("cannotFriendSelf") };
  }

  // ------------------------------
  // Lookup receiver in profilecards
  // ------------------------------
  const { data: receiverProfile, error: receiverError } = await supabase
    .from("profilecards")
    .select("user_id, friend_code")
    .ilike("friend_code", friend_code)
    .maybeSingle();

  if (receiverError) return { success: false, message: receiverError.message };
  if (!receiverProfile) return { success: false, message: friendsT("userNotFound") };

  const receiver_id = receiverProfile.user_id;

  // ------------------------------
  // Check for existing friend request
  // ------------------------------
  const { data: existing, error: checkError } = await supabase
    .from("friend_requests")
    .select("id")
    .eq("sender_id", currentUser.id)
    .eq("receiver_id", receiver_id)
    .maybeSingle();

  if (checkError) return { success: false, message: checkError.message };
  if (existing) return { success: false, message: friendsT("requestAlreadySent") };

  // ------------------------------
  // Fetch sender profile
  // ------------------------------
  const { data: senderProfile, error: profileError } = await supabase
    .from("profiles")
    .select("name, title, profile_photo, frame, friend_code")
    .eq("id", currentUser.id)
    .maybeSingle();

  if (profileError) return { success: false, message: profileError.message };

  // ------------------------------
  // Insert new friend request
  // ------------------------------
  const { error: insertError } = await supabase.from("friend_requests").insert([{
    sender_id: currentUser.id,
    receiver_id: receiver_id,
    receiver_friend_code: friend_code,
    name: senderProfile?.name || "Unknown",
    title: senderProfile?.title || "",
    profile_photo: senderProfile?.profile_photo || "default.jpg",
    frame: senderProfile?.frame || "",
    sender_friend_code: senderProfile?.friend_code || null,
    status: "pending"
  }]);

  if (insertError) return { success: false, message: insertError.message };

  return { success: true };
}


async function showIncomingFriendRequests() { 
  const list = document.getElementById("incomingRequestsList");
  if (!list) return;
  list.innerHTML = "";

  // Fetch all pending requests for current user
  const { data: requests, error } = await supabase
    .from("friend_requests")
    .select("id, sender_id, name, title, profile_photo, frame, sender_friend_code, receiver_friend_code, receiver_id, status")
    .eq("receiver_id", currentProfile.id)   // always defined
    .eq("status", "pending");

  if (error) return console.error(error);

  requests.forEach(req => {
    const li = document.createElement("li");
    li.className = "friend-request-item";

    const hasFrame = req.frame && req.frame.trim() !== "";
    const imgDiv = document.createElement("div");
    imgDiv.className = "friend-photo-frame";
    imgDiv.dataset.userid = req.sender_id;

    imgDiv.style.backgroundImage = hasFrame
      ? `url('${req.frame}'), url('${req.profile_photo || 'default.jpg'}')`
      : `url('${req.profile_photo || 'default.jpg'}')`;

    imgDiv.style.backgroundSize = hasFrame ? "contain, cover" : "cover";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.style.backgroundRepeat = "no-repeat";
    imgDiv.style.width = "60px";
    imgDiv.style.height = "60px";
    imgDiv.style.borderRadius = "50%";
    imgDiv.style.cursor = "pointer";

    imgDiv.addEventListener("click", e => {
      e.stopPropagation();
      openProfile(imgDiv);
    });

    const nameSpan = document.createElement("span");
    nameSpan.textContent = req.title
      ? `${req.name}, ${req.title}`
      : req.name;

    const actions = document.createElement("div");
    actions.className = "actions";

    // Accept
    const acceptBtn = document.createElement("button");
    acceptBtn.className = "accept";
    acceptBtn.textContent = friendsT("accept");

    acceptBtn.onclick = async () => {
      const { data: myProfile, error: myError } = await supabase
        .from("profiles")
        .select("id, name, title, profile_photo, frame, friend_code")
        .eq("id", currentUser.id)
        .single();
      if (myError) return console.error(myError);

      const { error: insertError } = await supabase.from("friends").insert([{
        user1_id: req.sender_id,
        user1_name: req.name,
        user1_title: req.title,
        user1_friend_code: req.sender_friend_code,
        user1_profile_photo: req.profile_photo,
        user1_frame: req.frame,

        user2_id: myProfile.id,
        user2_name: myProfile.name,
        user2_title: myProfile.title,
        user2_friend_code: myProfile.friend_code,
        user2_profile_photo: myProfile.profile_photo,
        user2_frame: myProfile.frame
      }]);
      if (insertError) return console.error(insertError);

      await supabase.from("friend_requests").delete().eq("id", req.id);

      // Refresh lists
      await showIncomingFriendRequests();
      await showFriends("friendsList", friend => startChatWithFriend(friend));
    };

    // Decline
    const declineBtn = document.createElement("button");
    declineBtn.className = "decline";
    declineBtn.textContent = friendsT("decline");
    declineBtn.onclick = async () => {
      await supabase.from("friend_requests").delete().eq("id", req.id);
      await showIncomingFriendRequests();
    };

    actions.appendChild(acceptBtn);
    actions.appendChild(declineBtn);

    li.appendChild(imgDiv);
    li.appendChild(nameSpan);
    li.appendChild(actions);

    list.appendChild(li);
  });
}



async function showFriends(containerId, onClickFriend) {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = "";

  const { data: friendsData, error } = await supabase
    .from("friends")
    .select("user1_id, user2_id, user1_name, user2_name, user1_profile_photo, user2_profile_photo, user1_title, user2_title, user1_frame, user2_frame")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);
  if (error) return console.error(error);

  friendsData.forEach(friendship => {
    const friend = friendship.user1_id === currentUser.id
  ? { 
      id: friendship.user2_id, 
      name: friendship.user2_name, 
      title: friendship.user2_title, 
      photo: friendship.user2_profile_photo,
      frame: friendship.user2_frame // <-- include frame
    }
  : { 
      id: friendship.user1_id, 
      name: friendship.user1_name, 
      title: friendship.user1_title,
      photo: friendship.user1_profile_photo,
      frame: friendship.user1_frame // <-- include frame
    };

    const li = document.createElement("li");
    li.className = "friend-item";

    const hasFrame = friend.frame && friend.frame.trim() !== "";
const imgDiv = document.createElement("div");
imgDiv.className = "friend-photo-frame";
imgDiv.dataset.userid = friend.id;

imgDiv.style.backgroundImage = hasFrame
  ? `url('${friend.frame}'), url('${friend.photo || 'default.jpg'}')`
  : `url('${friend.photo || 'default.jpg'}')`;

imgDiv.style.backgroundSize = hasFrame ? "contain, cover" : "cover";
imgDiv.style.backgroundPosition = "center";
imgDiv.style.backgroundRepeat = "no-repeat";
imgDiv.style.width = "60px";
imgDiv.style.height = "60px";
imgDiv.style.borderRadius = "50%";
imgDiv.style.cursor = "pointer";

imgDiv.addEventListener("click", e => {
  e.stopPropagation();
  openProfile(imgDiv);
});

    const nameSpan = document.createElement("span");
    nameSpan.textContent = friend.title
  ? `${friend.name}, ${friend.title}`
  : friend.name || friendsT("unknown");

    const btn = document.createElement("button");
    btn.textContent = friendsT("message");
    btn.className = "message";
    btn.onclick = e => {
      e.stopPropagation();
      onClickFriend(friend);
    };

    li.appendChild(imgDiv);
    li.appendChild(nameSpan);
    li.appendChild(btn);

    list.appendChild(li);
  });
}

async function loadFriendsTab() {
  await showIncomingFriendRequests();
  await showFriends("friendsList", friend => startChatWithFriend(friend));
}


//Friends + messages
  
// Friend request popup
  document.getElementById("sendFriendRequestBtn")?.addEventListener("click", async () => {
    const friend_code = document.getElementById("friendfriendcode")?.value;
    const result = await sendRequest(friend_code);
    if (!result.success) alert(result.message);
    else {
      alert(friendsT("friendRequestSent"));
      document.getElementById("friendfriendcode").value = "";
      searchPopup.style.display = "none";
      await showFriends("friendsList", friend => startChatWithFriend(friend));
      if (joinedLocationId) await showCommunityMembers(joinedLocationId);
    }
  });


//#endregion 

//#region MESSAGES
const messagesTranslations = {
  en: {
    chatNotFound: "Chat not found",
    errorFetchingChat: "Error fetching chat:",
    errorFetchingMessages: "Error fetching messages:",
    blockedUserNotice: "You've blocked this user. <button id='unblockBtn'>Unblock</button>",
    deleteChatConfirmation: "Are you sure you want to clear the chat? It clears for everyone.",
    blockUserConfirmation: "Are you sure you want to block this user? Blocked users won’t be notified, but you won’t receive their messages until you unblock them.",
    noFriendSelected: "No friend selected",
    noActiveChat: "No active chat",
    noValidFriend: "No valid friend selected."
  },
  es: {
    chatNotFound: "Chat no encontrado",
    errorFetchingChat: "Error al obtener el chat:",
    errorFetchingMessages: "Error al obtener los mensajes:",
    blockedUserNotice: "Has bloqueado a este usuario. <button id='unblockBtn'>Desbloquear</button>",
    deleteChatConfirmation: "¿Estás seguro de que quieres borrar el chat? Se borrará para todos.",
    blockUserConfirmation: "¿Estás seguro de que quieres bloquear a este usuario? No se notificará a los usuarios bloqueados, pero no recibirás sus mensajes hasta que los desbloquees.",
    noFriendSelected: "No se seleccionó ningún amigo",
    noActiveChat: "No hay chat activo",
    noValidFriend: "No se seleccionó un amigo válido."
  },
  hu: {
    chatNotFound: "Csevegés nem található",
    errorFetchingChat: "Hiba a csevegés lekérése közben:",
    errorFetchingMessages: "Hiba az üzenetek lekérése közben:",
    blockedUserNotice: "Blokkoltad ezt a felhasználót. <button id='unblockBtn'>Feloldás</button>",
    deleteChatConfirmation: "Biztosan törölni akarod a csevegést? Mindenkinél törlődik.",
    blockUserConfirmation: "Biztosan blokkolni akarod ezt a felhasználót? A blokkolt felhasználókat nem értesítjük, de nem kapsz tőlük üzenetet, amíg fel nem oldod.",
    noFriendSelected: "Nincs kiválasztott barát",
    noActiveChat: "Nincs aktív csevegés",
    noValidFriend: "Nincs érvényes barát kiválasztva."
  }
};

function messagesT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    messagesTranslations[lang]?.[key] ||
    messagesTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}

async function startChatWithFriend(friend) {
  const { data: existingChats, error: chatError } = await supabase
    .from('chats')
    .select('id, user1_id, user2_id')
    .or(
      `and(user1_id.eq.${currentUser.id},user2_id.eq.${friend.id}),and(user1_id.eq.${friend.id},user2_id.eq.${currentUser.id})`
    )
    .limit(1);
  if (chatError) return console.error(messagesT("errorFetchingChat"), chatError);

  const chatId = existingChats?.[0]?.id;
  openChatWindow(chatId, friend);
}

async function openChatWindow(chatId, friend) {
  window.currentChatId = chatId;
  window.currentChatFriend = friend;

  const friendsEl = document.getElementById("friends");
  const messagesEl = document.getElementById("messages");
  const chatListEl = document.getElementById("chatListView");
  const chatViewEl = document.getElementById("chatView");

  if (friendsEl) friendsEl.classList.add("hidden");
  if (messagesEl) messagesEl.classList.remove("hidden");
  if (chatListEl) chatListEl.classList.add("hidden");
  if (chatViewEl) chatViewEl.classList.remove("hidden");

  const avatar = document.getElementById("chatHeaderAvatar");
  const name = document.getElementById("chatHeaderName");

  if (avatar) avatar.src = friend.photo || "";
  if (name) name.textContent = friend.name;

  // 🔥 REUSE YOUR EXISTING PROFILE FUNCTION
  if (avatar) {
    avatar.onclick = async () => {
      const fakeEl = document.createElement("div");
      fakeEl.dataset.userid = friend.id;

      await openProfile(fakeEl);
    };
  }

  if (chatId) loadMessages(chatId, friend);
  else document.getElementById("chatMessages").innerHTML = "";
}

// Back arrow
document.getElementById("backToList").addEventListener("click", () => {
  document.getElementById("chatListView").classList.remove("hidden");
  document.getElementById("chatView").classList.add("hidden");
  window.currentChatId = null;
  window.currentChatFriend = null;
});



async function loadMessages(chatId) {
  const chatContainer = document.getElementById("chatMessages");
  if (!chatContainer) return;

  const { data: chatRows, error: chatError } = await supabase
  .from('chats')
  .select('id, user1_id, user2_id')
  .eq('id', chatId)
  .limit(1);

if (chatError) return console.error(messagesT("errorFetchingChat"), chatError);
if (!chatRows?.length) return console.error(messagesT("chatNotFound"));

const chat = chatRows[0];

// If current user is user1, friend is user2; otherwise friend is user1
const friend = chat.user1_id === currentUser.id
  ? { id: chat.user2_id, name: chat.user2_name, photo: chat.user2_profile_photo }
  : { id: chat.user1_id, name: chat.user1_name, photo: chat.user1_profile_photo };

  // 1. Check if current user has blocked this friend
  const { data: blockData, error: blockError } = await supabase
    .from('user_blocks')
    .select('created_at')
    .eq('blocker_id', currentUser.id)
    .eq('blocked_id', friend.id)
    .limit(1);
  if (blockError) return console.error(messagesT("errorFetchingChat"), blockError);

  const isBlocked = blockData.length > 0;
  const blockTime = isBlocked ? blockData[0].created_at : null;

  // 2. Hide/show Block User button in dropdown
  const blockBtn = document.getElementById("blockUserBtn");
  if (blockBtn) {
    if (isBlocked) blockBtn.classList.add("hidden");
    else blockBtn.classList.remove("hidden");
  }

  // 3. Fetch messages (if blocked, only before block timestamp)
  let messageQuery = supabase
    .from('messages')
    .select('*')
    .eq('chat_id', chatId);

  if (isBlocked) {
    messageQuery = messageQuery.lt('created_at', blockTime);
  }

  const { data: messages, error: messagesError } = await messageQuery.order('created_at', { ascending: true });
  if (messagesError) return console.error(messagesT("errorFetchingMessages"), messagesError);

  // 4. Render messages
  chatContainer.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg.content;
    div.className = msg.sender_id === currentUser.id ? "my-message" : "friend-message";
    div.dataset.senderId = msg.sender_id; // optional: helps with block filtering
    chatContainer.appendChild(div);
  });
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // 5. Handle input section & blocked notice
  const inputSection = document.querySelector(".chat-input");
  let blockedNotice = document.getElementById("blockedNotice");

  if (!blockedNotice) {
    // create blocked notice if it doesn't exist
    blockedNotice = document.createElement("div");
    blockedNotice.id = "blockedNotice";
    blockedNotice.style.padding = "1rem";
    blockedNotice.style.textAlign = "center";
    blockedNotice.style.backgroundColor = "#ffe6e6";
    blockedNotice.style.borderTop = "1px solid #ccc";
    blockedNotice.innerHTML = messagesT("blockedUserNotice");
    if (inputSection && inputSection.parentNode) {
  inputSection.parentNode.insertBefore(blockedNotice, inputSection.nextSibling);
}
  }

  if (isBlocked) {
    if (inputSection) inputSection.classList.add("hidden");
    blockedNotice.classList.remove("hidden");

    // 6. Setup unblock button
    const unblockBtn = document.getElementById("unblockBtn");
    unblockBtn.onclick = async () => {
      const { error } = await supabase
        .from('user_blocks')
        .delete()
        .eq('blocker_id', currentUser.id)
        .eq('blocked_id', friend.id);
      if (error) return console.error("Error unblocking user:", error.message);

      // Reload chat and chat list after unblock
      loadMessages(chatId);
      loadChatList();
    };
  } else {
    if (inputSection) inputSection.classList.remove("hidden");
    blockedNotice.classList.add("hidden");
  }

  // 7. Setup real-time subscription (only if not blocked)
  if (messageSubscription) {
  await supabase.removeChannel(messageSubscription);
  messageSubscription = null;
}
  if (!isBlocked) {
    messageSubscription = supabase
      .channel(`chat-${chatId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `chat_id=eq.${chatId}`
      }, (payload) => {
        const msg = payload.new;
        // ignore messages from blocked user (optional safety)
        if (msg.sender_id === friend.id && isBlocked) return;

        const div = document.createElement("div");
        div.textContent = msg.content;
        div.className = msg.sender_id === currentUser.id ? "my-message" : "friend-message";
        chatContainer.appendChild(div);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      })
      .subscribe();
  }
}



//--------------------------
// CHAT MODULE
//--------------------------
async function loadChatList() {
  const list = document.getElementById("chatListItems");
  if (!list) return;

  // 1. Fetch blocked users first
  const { data: blockedUsersData, error: blockedError } = await supabase
    .from('user_blocks')
    .select('blocked_id')
    .eq('blocker_id', currentUser.id);
  if (blockedError) return console.error("Error fetching blocked users:", blockedError);

  const blockedIds = blockedUsersData.map(b => b.blocked_id);

  function renderChats(chats) {
    list.innerHTML = "";
    if (!chats || chats.length === 0) return;

    chats.forEach(chat => {
      const friend = chat.user1_id === currentUser.id
        ? { id: chat.user2_id, name: chat.user2_name, photo: chat.user2_profile_photo }
        : { id: chat.user1_id, name: chat.user1_name, photo: chat.user1_profile_photo };

      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.justifyContent = "space-between";
      li.style.padding = "0.5rem";
      li.style.borderBottom = "1px solid #eee";

      const img = document.createElement("img");
      img.src = friend.photo || "default.jpg";
      img.alt = friend.name;
      img.style.width = "40px";
      img.style.height = "40px";
      img.style.borderRadius = "50%";
      img.style.marginRight = "0.5rem";

      const info = document.createElement("div");
      info.style.flex = "1";
      const nameSpan = document.createElement("div");
      nameSpan.textContent = friend.name;
      nameSpan.style.fontWeight = "500";
      const lastMessage = document.createElement("div");

    // 2. Check if this friend is blocked
      if (blockedIds.includes(friend.id)) {
        lastMessage.textContent = "Blocked user";
      } else {
        let preview = chat.last_message || "";
        if (preview.length > 25) {
          preview = preview.slice(0, 25) + "...";
        }
        lastMessage.textContent = preview;
      }

      lastMessage.style.fontSize = "0.85rem";
      lastMessage.style.color = "#555";

      info.appendChild(nameSpan);
      info.appendChild(lastMessage);

      li.appendChild(img);
      li.appendChild(info);
      li.onclick = () => startChatWithFriend(friend);

      list.appendChild(li);
    });
  }

  const { data: chats, error } = await supabase
    .from('chats')
    .select('*')
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`)
    .order('last_message_at', { ascending: false });

  if (error) return console.error("Error fetching chats:", error);
  renderChats(chats);

  supabase
    .channel('public:chats')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'chats' },
      payload => {
        const chat = payload.new;
        if (!chat) return;
        if (chat.user1_id === currentUser.id || chat.user2_id === currentUser.id) {
          loadChatList();
        }
      }
    )
    .subscribe();
}

//CLEAR AND BLOCK CHAT
const actionButton = document.getElementById("actionButton");
const dropdownMenu = document.getElementById("chatdropdownMenu");
const deleteChatBtn = document.getElementById("deleteChatBtn");
const blockUserBtn = document.getElementById("blockUserBtn");

const confirmationPopup = document.getElementById("confirmationPopup");
const confirmationMessage = document.getElementById("confirmationMessage");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

let currentAction = null;


// Toggle dropdown
actionButton.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown if clicked outside
document.addEventListener("click", () => {
  dropdownMenu.style.display = "none";
});

// Clear Chat clicked
deleteChatBtn.addEventListener("click", () => {
  dropdownMenu.classList.remove("active");
  currentAction = "delete";
  confirmationMessage.textContent = messagesT("deleteChatConfirmation");
  confirmationPopup.classList.add("active");
});

// Block User clicked
blockUserBtn.addEventListener("click", () => {
  dropdownMenu.classList.remove("active");
  currentAction = "block";
  confirmationMessage.textContent = messagesT("blockUserConfirmation");
  confirmationPopup.classList.add("active");
});

// Cancel confirmation
cancelBtn.addEventListener("click", () => {
  confirmationPopup.classList.remove("active");
  currentAction = null;
});

// Confirm action
confirmBtn.addEventListener("click", () => {
  if (currentAction === "delete") {
    deleteCurrentChat();
  } else if (currentAction === "block") {
    blockUser();
  }
  confirmationPopup.classList.remove("active");
  currentAction = null;
});

// Optional: close confirmation popup on clicking outside
confirmationPopup.addEventListener("click", (e) => {
  if (e.target === confirmationPopup) {
    confirmationPopup.classList.remove("active");
    currentAction = null;
  }
});

async function deleteCurrentChat() {
  if (!window.currentChatFriend) return console.error(messagesT("noFriendSelected"));

  try {
    // 1. Fetch the chat ID between current user and friend
    const { data: existingChats, error: chatError } = await supabase
      .from('chats')
      .select('id')
      .or(
        `and(user1_id.eq.${currentUser.id},user2_id.eq.${window.currentChatFriend.id}),and(user1_id.eq.${window.currentChatFriend.id},user2_id.eq.${currentUser.id})`
      )
      .limit(1);

    if (chatError) throw chatError;

    const chatId = existingChats?.[0]?.id;
    if (!chatId) return console.error(messagesT("chatNotFound"));

    // 2. Delete all messages for this chat
    const { error: deleteError } = await supabase
      .from('messages')
      .delete()
      .eq('chat_id', chatId);
    if (deleteError) throw deleteError;

    // 3. Reset last_message in chats table
    const { error: updateError } = await supabase
      .from('chats')
      .update({ last_message: '' })
      .eq('id', chatId);
    if (updateError) throw updateError;

    // Optional: reload chat list and close chat window
    loadChatList();
    document.getElementById("chatListView").classList.remove("hidden");
    document.getElementById("chatView").classList.add("hidden");
    window.currentChatFriend = null;

  } catch (error) {
    console.error("Error deleting chat:", error.message);
  }
}

async function blockUser() {
  const chatId = window.currentChatId;
  if (!chatId) return console.error(messagesT("noActiveChat"));

  try {
    // 1. Fetch chat to determine the other user
    const { data: chatRows, error: chatError } = await supabase
      .from('chats')
      .select('user1_id, user2_id')
      .eq('id', chatId)
      .limit(1);

    if (chatError) throw chatError;
    if (!chatRows?.length) throw new Error("Chat not found");

    const chat = chatRows[0];

    // 2. Determine friend ID
    const blockedUserId =
      chat.user1_id === currentUser.id ? chat.user2_id : chat.user1_id;

    // 3. Insert block
    const { error: insertError } = await supabase
      .from('user_blocks')
      .insert({
        blocker_id: currentUser.id,
        blocked_id: blockedUserId
      });

    if (insertError) throw insertError;

    // 4. Reload UI
    loadChatList();
    loadMessages(chatId);

  } catch (error) {
    console.error("Error blocking user:", error.message);
  }
}

  // Back to chat list
  document.getElementById("backToList")?.addEventListener("click", () => {
    document.getElementById("chatListView")?.classList.remove("hidden");
    document.getElementById("chatView")?.classList.add("hidden");
    window.currentChatId = null;
    window.currentChatFriend = null;
  });

  // Send message button
const sendBtn = document.getElementById("sendMessageBtn");

sendBtn?.addEventListener("click", async () => {
  if (sendBtn.disabled) return; // extra protection

  const messageInput = document.getElementById("messageInput");
  const text = messageInput.value.trim();
  if (!text) return;

  const friend = window.currentChatFriend;
  if (!friend?.id) return console.error(messagesT("noValidFriend"));

  // 🔒 Disable immediately
  sendBtn.disabled = true;

  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select("name, profile_photo")
      .eq("id", currentUser.id)
      .maybeSingle();

    let chatId = window.currentChatId;

    const previewMessage = makePreview(text, 20);

    if (!chatId) {
      const { data: newChat } = await supabase
        .from('chats')
        .insert([{
          user1_id: currentUser.id,
          user1_name: profile?.name,
          user1_profile_photo: profile?.profile_photo || "",
          user2_id: friend.id,
          user2_name: friend.name,
          user2_profile_photo: friend.photo || "",
          last_message: previewMessage,
          last_message_at: new Date().toISOString()
        }])
        .select()
        .single();

      chatId = newChat.id;
      window.currentChatId = chatId;
    } else {
      await supabase.from('chats').update({
        last_message: previewMessage,
        last_message_at: new Date().toISOString()
      }).eq('id', chatId);
    }

    // ✅ Insert message (critical step)
    const { error: messageError } = await supabase
      .from('messages')
      .insert([{
        chat_id: chatId,
        sender_id: currentUser.id,
        receiver_id: friend.id,
        content: text
      }]);

    if (messageError) throw messageError;

    // ✅ Only now consider it "successful"
    messageInput.value = '';
    if (messageInput.resetCounter) messageInput.resetCounter();

    loadMessages(chatId, friend);

  } catch (err) {
    console.error(err);
  } finally {
    // 🔓 Always re-enable (even if error happens)
    sendBtn.disabled = false;
  }
});


//#endregion

//#region LOCAL COMMUNITY
const communityTranslations = {
  en: {
    // --- General / status ---
    notInCommunity: "You are not in a community.",
    alreadyInCommunity: "You are already in a community!",
    joinedCommunity: "You are in the community:",
    communityTitleSuffix: "Community",

    // --- Selects ---
    selectCity: "Select city",

    // --- Chat ---
    emptyMessage: "Please write a message first.",

    // --- Friends ---
    sendRequest: "Send Request",
    requestSent: "Request Sent",
    requestSentConfirmed: "Request Sent ✅",
    goalsLabel: "Goals:",

    // --- Local businesses ---
    noLocalBusinesses: "No local businesses yet.",
    localBusinessesLoadError: "Unable to load local businesses.",

    // --- Events ---
    participants: "participant",
    participantsPlural: "participants",
    participantsFor: "Participants for",
    signUp: "Sign Up",
    unregister: "Unregister",
    close: "Close",

    // --- Event creation ---
    eventMissingFields: "Please enter place, date, and ensure you are in a community.",
    userDataNotLoaded: "User data not loaded. Please log in.",
    failedCreateEvent: "Failed to create event.",
    failedAddCreator: "Failed to add creator as participant.",
    failedUpdateParticipation: "Failed to update participation. Check console for details.",

    // --- Contact / business popup ---
    businessMessageMissing: "Please tell us a bit about your business.",
    requestSentSuccess: "Request sent! We'll contact you soon 😊",
    genericError: "Something went wrong. Please try again.",

    // --- Contact form ---
    contactSelectSubject: "Please select a subject.",
    contactWriteMessage: "Please write your message.",
    contactSuccess: "We have received your message and will contact you shortly. Thank you!"
  },

  es: {
    // --- General / status ---
    notInCommunity: "No estás en ninguna comunidad.",
    alreadyInCommunity: "¡Ya estás en una comunidad!",
    joinedCommunity: "Estás en la comunidad:",
    communityTitleSuffix: "Comunidad",

    // --- Selects ---
    selectCity: "Selecciona ciudad",

    // --- Chat ---
    emptyMessage: "Por favor, escribe un mensaje primero.",

    // --- Friends ---
    sendRequest: "Enviar solicitud",
    requestSent: "Solicitud enviada",
    requestSentConfirmed: "Solicitud enviada ✅",
    goalsLabel: "Objetivos:",

    // --- Local businesses ---
    noLocalBusinesses: "Aún no hay negocios locales.",
    localBusinessesLoadError: "No se pudieron cargar los negocios locales.",

    // --- Events ---
    participants: "participante",
    participantsPlural: "participantes",
    participantsFor: "Participantes de",
    signUp: "Apuntarse",
    unregister: "Cancelar",
    close: "Cerrar",

    // --- Event creation ---
    eventMissingFields: "Por favor, introduce el lugar, la fecha y asegúrate de estar en una comunidad.",
    userDataNotLoaded: "Datos del usuario no cargados. Por favor, inicia sesión.",
    failedCreateEvent: "No se pudo crear el evento.",
    failedAddCreator: "No se pudo añadir al creador como participante.",
    failedUpdateParticipation: "No se pudo actualizar la participación. Revisa la consola.",

    // --- Contact / business popup ---
    businessMessageMissing: "Por favor, cuéntanos un poco sobre tu negocio.",
    requestSentSuccess: "¡Solicitud enviada! Nos pondremos en contacto contigo pronto 😊",
    genericError: "Algo salió mal. Inténtalo de nuevo.",

    // --- Contact form ---
    contactSelectSubject: "Por favor, selecciona un asunto.",
    contactWriteMessage: "Por favor, escribe tu mensaje.",
    contactSuccess: "Hemos recibido tu mensaje y te contactaremos pronto. ¡Gracias!"
  },

  hu: {
    // --- General / status ---
    notInCommunity: "Nem vagy közösség tagja.",
    alreadyInCommunity: "Már tagja vagy egy közösségnek!",
    joinedCommunity: "A közösséged:",
    communityTitleSuffix: "Közösség",

    // --- Selects ---
    selectCity: "Válassz várost",

    // --- Chat ---
    emptyMessage: "Kérlek, először írj egy üzenetet.",

    // --- Friends ---
    sendRequest: "Barátkérelem küldése",
    requestSent: "Kérelem elküldve",
    requestSentConfirmed: "Kérelem elküldve ✅",
    goalsLabel: "Célok:",

    // --- Local businesses ---
    noLocalBusinesses: "Még nincsenek helyi vállalkozások.",
    localBusinessesLoadError: "Nem sikerült betölteni a helyi vállalkozásokat.",

    // --- Events ---
    participants: "résztvevő",
    participantsPlural: "résztvevő",
    participantsFor: "Résztvevők:",
    signUp: "Jelentkezés",
    unregister: "Leiratkozás",
    close: "Bezárás",

    // --- Event creation ---
    eventMissingFields: "Kérlek add meg a helyszínt, az időpontot, és csatlakozz egy közösséghez.",
    userDataNotLoaded: "Felhasználói adatok nem érhetők el. Kérlek, jelentkezz be.",
    failedCreateEvent: "Az esemény létrehozása nem sikerült.",
    failedAddCreator: "A szervező hozzáadása résztvevőként nem sikerült.",
    failedUpdateParticipation: "Nem sikerült frissíteni a részvételt. Nézd meg a konzolt.",

    // --- Contact / business popup ---
    businessMessageMissing: "Kérlek, írj pár szót a vállalkozásodról.",
    requestSentSuccess: "Kérelem elküldve! Hamarosan felvesszük veled a kapcsolatot 😊",
    genericError: "Hiba történt. Kérlek, próbáld újra.",

    // --- Contact form ---
    contactSelectSubject: "Kérlek, válassz egy témát.",
    contactWriteMessage: "Kérlek, írd meg az üzeneted.",
    contactSuccess: "Megkaptuk az üzeneted, hamarosan jelentkezünk. Köszönjük!"
  }
};

function tCommunity(key) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en"; // same logic as before
  return communityTranslations[lang]?.[key] || communityTranslations.en[key] || key;
}

// ----------------------------
// COMMUNITY
// ----------------------------
let joinedLocationId = null;
let firstLoad = true;
let messageChannel = null;

async function initCommunityModule() { 
  // 1️⃣ Load locations
  await loadLocations();

  // 2️⃣ Load user community if logged in
  if (currentUser) {
    await loadUserCommunity(currentUser);
  }

  // 3️⃣ Setup section toggles (chat, events, etc.)
  document.querySelectorAll('.community-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
        // Scroll chat into view if needed
        if (content.id === 'communityChatSection') {
          scrollCommunityChatToBottom();
        }
      }
    });
  });

  // 4️⃣ Setup create event toggle
  const createEventBtn = document.getElementById("createEventBtn");
  const createEventInputs = document.getElementById("createEventInputs");
  if (createEventBtn && createEventInputs) {
    createEventBtn.addEventListener("click", () => { 
      createEventInputs.style.display = createEventInputs.style.display === "none" ? "flex" : "none";
      createEventInputs.style.flexDirection = "column";
    });
  }
}

// ----------------------------
// Load countries and cities
// ----------------------------
async function loadLocations() {
  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("country");

  if (error) return console.error(error);

  const countries = [...new Set(data.map(l => l.country))];
  const countrySelect = document.getElementById("countrySelect");
  const citySelect = document.getElementById("citySelect");

  // Populate countries
  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    countrySelect.appendChild(option);
  });

  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = '<option value="">Select city</option>';
    citySelect.disabled = !selectedCountry;

    data.filter(l => l.country === selectedCountry).forEach(l => {
      const option = document.createElement("option");
      option.value = l.id;
      option.textContent = l.city;
      citySelect.appendChild(option);
    });

    document.getElementById("joinCommunityBtn").disabled = true;
  });

  citySelect.addEventListener("change", e => {
    document.getElementById("joinCommunityBtn").disabled = !e.target.value;
  });
}

// ----------------------------
// Load user community if exists
// ----------------------------
async function loadUserCommunity(currentUser) {
  if (!currentUser) return;

  const {data: locationData} = await supabase.from("community_participants").select("location_id").eq("user_id", currentUser.id).single();
  const locationId = locationData?.location_id; 
  if (!locationId) return; 
  
    const { data: location, error: locationError } = await supabase
      .from("locations")
      .select("country, city")
      .eq("id", locationId)
      .single();

    if (locationError) return console.error(locationError);

    const locationName = `${location.city}, ${location.country}`;
    document.getElementById("joinedCommunityText").textContent = `${tCommunity("joinedCommunity")} ${locationName}`;
    document.getElementById("leaveCommunityBtn").style.display = "inline-block";
    document.getElementById("joinCommunityBtn").style.display = "none";

    await showCommunityDashboard(locationId, locationName);
  }


// ----------------------------
// Show community dashboard
// ----------------------------
async function showCommunityDashboard(locationId, locationName) {
  joinedLocationId = locationId;
  firstLoad = true;

  document.getElementById("joinCommunityCard").style.display = "none";
  document.getElementById("joinedCommunityText").textContent = `${tCommunity("joinedCommunity")} ${locationName}`;
  document.getElementById("communityDashboard").style.display = "block";
  document.getElementById("communityTitle").textContent = `${locationName} ${tCommunity("communityTitleSuffix")}`;

  // Hide chat & events initially
  document.getElementById("communityChatSection").style.display = "none";
  document.getElementById("communityEventsSection").style.display = "none";

  await loadCommunityMessages(locationId);
  await loadCommunityEvents(locationId);
  await showCommunityMembers(locationId);

  setupRealtimeMessages(locationId);
}

// ----------------------------
// Load community messages
// ----------------------------
async function loadCommunityMessages(locationId) {
  if (!locationId) return;

  const { data, error } = await supabase
    .from("community_messages")
    .select("*")
    .eq("location_id", locationId)
    .order("created_at", { ascending: true });

  if (error) return console.error(error);

  const container = document.getElementById("communityMessages");
  if (!container) return;

  const wasAtBottom = !firstLoad &&
    container.scrollHeight - container.scrollTop <= container.clientHeight + 50;

  container.innerHTML = "";
  data.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("chat-message");
    div.textContent = `${msg.username}: ${msg.content}`;
    div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
    container.appendChild(div);
  });

  await new Promise(requestAnimationFrame);

  if (firstLoad || wasAtBottom) {
    container.lastElementChild?.scrollIntoView({ block: "end", behavior: "auto" });
    firstLoad = false;
  }
}

// ----------------------------
// Send community message
// ----------------------------
async function sendCommunityMessage() {
  const input = document.getElementById("communityMessageInput");
  const text = document.getElementById("communityMessageInput").value.trim();
  if (!text || !joinedLocationId) return alert(tCommunity("notInCommunity"));

  const { error } = await supabase.from("community_messages").insert([{
    user_id: currentUser.id,
    username: currentProfile.name,
    location_id: joinedLocationId,
    content: text
  }]);

  if (error) return console.error(error);

  document.getElementById("communityMessageInput").value = "";
  input.resetCounter();
}

document.getElementById("sendCommunityMessageBtn").addEventListener("click", sendCommunityMessage);

// ----------------------------
// Real-time messages
// ----------------------------
function setupRealtimeMessages(locationId) {
  if (messageChannel) supabase.removeChannel(messageChannel);

  messageChannel = supabase
    .channel(`community_messages_${locationId}`)
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "community_messages", filter: `location_id=eq.${locationId}` },
      payload => {
        const container = document.getElementById("communityMessages");
        const msg = payload.new;

        const div = document.createElement("div");
        div.classList.add("chat-message");
        div.textContent = `${msg.username}: ${msg.content}`;
        div.classList.add(msg.user_id === currentUser?.id ? "my-message" : "their-message");
        container.appendChild(div);

        if (container.offsetParent !== null) div.scrollIntoView({ block: "end", behavior: "auto" });
      }
    )
    .subscribe();
}
function scrollCommunityChatToBottom() {
  const container = document.getElementById("communityMessages");
  if (container && container.children.length > 0) {
    container.lastElementChild.scrollIntoView({ block: "end", behavior: "auto" });
  }
}
// ----------------------------
// Community members
// ----------------------------
async function showCommunityMembers(locationId) {
  const membersList = document.getElementById("communityMembersList");
  membersList.innerHTML = "";

  // Fetch members
  const { data: members, error } = await supabase
    .from("community_participants")
    .select("user_id, name, title, profile_photo, frame, friend_code")
    .eq("location_id", locationId);

  if (error) return console.error(error);

  // Fetch friends & sent requests
  const { data: friendsData } = await supabase
    .from("friends")
    .select("user1_id, user2_id")
    .or(`user1_id.eq.${currentUser.id},user2_id.eq.${currentUser.id}`);

  const friends = Array.isArray(friendsData) ? friendsData : [];

  const { data: sentRequests } = await supabase
    .from("friend_requests")
    .select("receiver_friend_code")
    .eq("sender_id", currentUser.id)
    .eq("status", "pending");

  members.forEach(member => {
    const li = document.createElement("li");

    const hasFrame = member.frame && member.frame.trim() !== "";
    const imgDiv = document.createElement("div");
    imgDiv.className = "community-member-photo-frame";
    imgDiv.dataset.userid = member.user_id;

    imgDiv.style.backgroundImage = hasFrame
      ? `url('${member.frame}'), url('${member.profile_photo}')`
      : `url('${member.profile_photo}')`;

    imgDiv.style.backgroundSize = hasFrame ? "contain, cover" : "cover";
    imgDiv.style.backgroundPosition = "center";
    imgDiv.style.backgroundRepeat = "no-repeat";
    imgDiv.style.cursor = "pointer";

    imgDiv.addEventListener("click", e => {
      e.stopPropagation();
      openProfile(imgDiv);
    });

    const nameSpan = document.createElement("span");
    nameSpan.textContent = member.title
      ? `${member.name}, ${member.title}`
      : member.name;

    // ✅ Right side container (name + button)
    const rightSide = document.createElement("div");
    rightSide.className = "community-member-info";
    rightSide.appendChild(nameSpan);

    if (
      member.user_id !== currentUser.id &&
      !friends.some(f => f.user1_id === member.user_id || f.user2_id === member.user_id)
    ) {
      const btn = document.createElement("button");
      btn.textContent = sentRequests.some(r => r.receiver_friend_code === member.friend_code)
        ? tCommunity("requestSent")
        : tCommunity("sendRequest");
      btn.disabled = btn.textContent === tCommunity("requestSent");

      btn.onclick = async () => {
        const result = await sendRequest(member.friend_code);
        if (result.success) {
          btn.textContent = tCommunity("requestSentConfirmed");
          btn.disabled = true;
        } else {
          alert(result.message);
        }
      };

      rightSide.appendChild(btn);
    }

    li.appendChild(imgDiv);
    li.appendChild(rightSide);
    membersList.appendChild(li);
  });

  
  // ----------------------------
  // FETCH LOCAL BUSINESSES
  // ----------------------------
  const localBusinessesContainer = document.getElementById("localBusinessesList");
  localBusinessesContainer.innerHTML = ""; // clear previous

  const { data: businesses, error: bizError } = await supabase
    .from("local_businesses")
    .select("*")
    .eq("community_id", locationId)
    .order("priority", { ascending: false });;

  if (bizError) {
    console.error("Error loading local businesses:", bizError);
    localBusinessesContainer.innerHTML = `<p>${tCommunity("localBusinessesLoadError")}</p>`;
    return;
  }

  if (businesses.length === 0) {
    localBusinessesContainer.innerHTML = `<p>${tCommunity("noLocalBusinesses")}</p>`;
    return;
  }

  businesses.forEach(biz => {
    const bizDiv = document.createElement("div");
    bizDiv.style.display = "flex";
    bizDiv.style.alignItems = "center";
    bizDiv.style.gap = "1rem";
    bizDiv.style.border = "1px solid #ddd";
    bizDiv.style.padding = "0.5rem";
    bizDiv.style.borderRadius = "6px";

    bizDiv.innerHTML = `
      <img src="${biz.picture_url}" alt="${biz.name}" style="width:60px; height:60px; object-fit:cover; border-radius:6px;">
      <div>
        <p style="margin:0; font-weight:bold;">${biz.name}</p>
        <a href="${biz.maps_link}" target="_blank" style="color:#007bff; text-decoration:underline;">${biz.address}</a>
      </div>
    `;

    localBusinessesContainer.appendChild(bizDiv);
  });
}

async function openProfile(imgElement) {
  const userId = imgElement.dataset.userid;
  if (!userId) return;

  try {
    // 🌍 Get language
    const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

    // Fetch profile
    const { data, error } = await supabase
      .from('profilecards')
      .select('id, user_id, username, avatar_url, diet, goals, level, streak, achievements, title, frame, animals_saved, water_saved, forest_saved, co2_saved, profile_photo')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      console.error('Error fetching profile:', error);
      return;
    }

    const popup = document.getElementById("ProfileCard");
    const avatarDiv = popup.querySelector(".ProfileAvatarLarge");

    // 🖼️ Avatar + frame
    if (data.frame && data.frame.trim() !== "") {
      avatarDiv.style.backgroundImage = `url('${data.frame}'), url('${data.avatar_url}')`;
      avatarDiv.style.backgroundSize = "contain, cover";
      avatarDiv.style.backgroundPosition = "center, center";
      avatarDiv.style.backgroundRepeat = "no-repeat, no-repeat";
    } else {
      avatarDiv.style.backgroundImage = `url('${data.avatar_url}')`;
      avatarDiv.style.backgroundSize = "cover";
      avatarDiv.style.backgroundPosition = "center";
      avatarDiv.style.backgroundRepeat = "no-repeat";
    }

    // 👤 Name
    popup.querySelector(".profile-name").textContent = data.title
      ? `${data.username}, ${data.title}`
      : data.username;

    // 🌿 DIET (translated)
    const translatedDiet = dietTranslations[data.diet]?.[lang] || data.diet;
    popup.querySelector(".dietprofilecard").textContent = `🌿 ${translatedDiet}`;

    // 🎯 GOALS (translated)
    const goalsContainer = popup.querySelector(".goalsprofilecard");
    const translatedGoals = translateFromPool(goalTranslations, data.goals, lang);

    goalsContainer.innerHTML = `🎯 ${tCommunity("goalsLabel")} <br>`;

    if (Array.isArray(translatedGoals)) {
      translatedGoals.forEach(goal => {
        goalsContainer.innerHTML += `• ${goal}<br>`;
      });
    } else if (translatedGoals) {
      goalsContainer.innerHTML += `• ${translatedGoals}`;
    }

    // 🌍 Level & 🔥 Streak
    popup.querySelector(".levelprofilecard").textContent = `🌍 ${data.level}`;
    popup.querySelector(".streakprofilecard").textContent = `🔥 ${data.streak}`;

    // 🏆 Achievements
    const achievementsList = popup.querySelector(".achievements-list");
    populateAchievements(achievementsList, data.achievements);

    // Show popup
    popup.classList.add("active");

  } catch (err) {
    console.error("openProfile error:", err);
  }
}

// Close ProfileCard popup
document.querySelector(".close-btnProfileCard")?.addEventListener("click", () => {
  document.getElementById("ProfileCard")?.classList.remove("active");
});

// Optional: close when clicking outside the popup content
const profileCard = document.getElementById("ProfileCard");
profileCard?.addEventListener("click", e => {
  if (e.target === profileCard) {
    profileCard.classList.remove("active");
  }
});

// ----------------------------
// Join community
// ----------------------------
document.getElementById("joinCommunityBtn").addEventListener("click", async () => {
  const locationId = document.getElementById("citySelect").value;
  if (!locationId) return;

  const existing = await supabase
    .from("community_participants")
    .select("id")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (existing.data) return alert(tCommunity("alreadyInCommunity"));

  const locationName = `${document.getElementById("citySelect").selectedOptions[0].text}, ${document.getElementById("countrySelect").value}`;

  await supabase.from("community_participants").upsert([{
    user_id: currentUser.id,
    location_id: locationId,
    name: currentProfile.name,
    title: currentProfile.title,
    frame: currentProfile.frame,
    profile_photo: currentProfile.profile_photo,
    friend_code: currentProfile.friend_code
  }]);

  await showCommunityDashboard(locationId, locationName);
});

// ----------------------------
// Leave community
// ----------------------------
document.getElementById("leaveCommunityDashboardBtn").addEventListener("click", async () => {
  const { error } = await supabase.from("community_participants").delete().eq("user_id", currentUser.id);
  if (error) return console.error(error);

  document.getElementById("communityDashboard").style.display = "none";
  document.getElementById("joinCommunityCard").style.display = "block";
  document.getElementById("joinedCommunityText").textContent = "";
  document.getElementById("leaveCommunityBtn").style.display = "none";
  document.getElementById("joinCommunityBtn").style.display = "inline-block";
});

// ----------------------------
// Community events
// ----------------------------
async function loadCommunityEvents(locationId) { 
  let events;



  const { data, error: eventsError } = await supabase
    .from("community_events")
    .select("id, location_id, place, description, event_date, user_id, username")
    .eq("location_id", locationId)
    .order("event_date", { ascending: true });

  if (eventsError) {
    return;
  }

  events = data;

  window.communityEventsGlobal = events;
  window.currentCommunityLocationId = locationId;

  // 2️⃣ Fetch all participants for events at once
  const { data: allParticipants, error: participantsError } = await supabase
    .from("event_participants")
    .select("id, event_id, user_id, username")
    .in("event_id", events.map(e => e.id)); // fetch participants only for the events we have

  if (participantsError) {
    console.error("Error loading participants:", participantsError);
  }


  // 3️⃣ Map participants by event_id for fast lookup
  const participantsByEvent = {};
  allParticipants.forEach(p => {
    if (!participantsByEvent[p.event_id]) participantsByEvent[p.event_id] = [];
    participantsByEvent[p.event_id].push(p);
  });

  const ul = document.getElementById("communityEventsList");
  ul.innerHTML = "";

  const now = new Date();

  for (const event of events) {
    const eventDate = new Date(event.event_date);
    const li = document.createElement("li");
    li.textContent = `${eventDate.toLocaleString()} — ${event.place} — ${event.description} (by ${event.username})`;

    const participants = participantsByEvent[event.id] || [];
    const participantCount = participants.length;

    // ----------------------------
    // PARTICIPANTS BUTTON
    // ----------------------------
    const participantBtn = document.createElement("button");
    participantBtn.textContent = `${participantCount} ${
    participantCount === 1
      ? tCommunity("participants")
      : tCommunity("participantsPlural")
  }`; 
    participantBtn.onclick = () => {
  showParticipantsPopup(event.place, participants);
};
    li.appendChild(participantBtn);

// ----------------------------
// SIGN UP / UNREGISTER BUTTON
// ----------------------------
const isCreator = event.user_id === currentUser.id;

// Check if the current user is already participating
const isParticipating = participants.some(p => p.user_id === currentUser.id);

if (!isCreator) {
  const signupBtn = document.createElement("button");
  signupBtn.textContent = isParticipating ? tCommunity("unregister") : tCommunity("signUp");

  signupBtn.onclick = async () => {
    if (!event.id) return alert("Event ID not found.");
    if (!currentUser || !currentUser.id || !currentProfile || !currentProfile.name) {
      return alert(tCommunity("userDataNotLoaded"));
    }

    try {
      if (isParticipating) {
        // Remove participation
        const { error: deleteError } = await supabase
          .from("event_participants")
          .delete()
          .eq("event_id", event.id)
          .eq("user_id", currentUser.id);

        if (deleteError) throw deleteError;
      } else {
        // Prevent duplicate insertion by checking first
        const { data: existing } = await supabase
          .from("event_participants")
          .select("id")
          .eq("event_id", event.id)
          .eq("user_id", currentUser.id);

        if (existing.length === 0) {
          const { error: insertError } = await supabase
            .from("event_participants")
            .insert([{
              event_id: event.id,
              user_id: currentUser.id,
              username: currentProfile.name
            }]);
          if (insertError) throw insertError;
        }
      }

      // Reload events to update UI
      await loadCommunityEvents(locationId);

    } catch (err) {
      console.error("Error updating participation:", err);
      alert("Failed to update participation. Check console for details.");
    }
  };

  li.appendChild(signupBtn);
}

    // ----------------------------
    // DELETE BUTTON (only for creator)
    // ----------------------------
    if (event.user_id === currentUser.id) {
      const delBtn = document.createElement("button");
      delBtn.textContent = "x";
      delBtn.onclick = async () => {
        await supabase.from("community_events").delete().eq("id", event.id);
        await loadCommunityEvents(locationId);
      };
      li.appendChild(delBtn);
    }

    ul.appendChild(li);
  }
}

const submitEventBtn = document.getElementById("submitEventBtn");
const createEventInputs = document.getElementById("createEventInputs");
const eventPlaceInput = document.getElementById("eventPlaceInput");
const eventTimeInput = document.getElementById("eventTimeInput");
const descriptionInput = document.getElementById("eventDescriptionInput");

submitEventBtn.addEventListener("click", async () => {
  const place = eventPlaceInput.value.trim();
  const description = descriptionInput.value.trim();
  const eventDate = eventTimeInput.value;

  if (!place || !eventDate || !joinedLocationId) {
    return alert(tCommunity("eventMissingFields"));
  }

  if (!currentUser || !currentProfile) {
    return alert(tCommunity("userDataNotLoaded"));
  }

  // 1️⃣ Insert the new event
  const { data: newEvent, error: eventError } = await supabase
    .from("community_events")
    .insert([{
      location_id: joinedLocationId,
      place: place,
      description: description,
      event_date: eventDate,
      user_id: currentUser.id,
      username: currentProfile.name
    }])
    .select()
    .single(); // get the inserted event back

  if (eventError) {
    console.error(eventError);
    return alert(tCommunity("failedCreateEvent"));
  }

  // 2️⃣ Insert creator into event_participants
  const { error: participantError } = await supabase
    .from("event_participants")
    .insert([{
      event_id: newEvent.id,
      user_id: currentUser.id,
      username: currentProfile.name
    }]);

  if (participantError) {
    console.error(participantError);
    return alert(tCommunity("failedAddCreator"));
  }

  // 3️⃣ Clear inputs and hide form
  eventPlaceInput.value = "";
  descriptionInput.value = "";
  eventTimeInput.value = "";
  createEventInputs.style.display = "none";

  // 4️⃣ Reload events for the community
  await loadCommunityEvents(joinedLocationId);
});

async function showParticipantsPopup(eventPlace, participants) {
  // participants: array of { user_id } from event_participants

  // 1️⃣ Fetch all profilecards for these participants
  const userIds = participants.map(p => p.user_id);
  const { data: profiles, error } = await supabase
    .from("profilecards")
    .select("id, user_id, username, avatar_url, diet, goals, level, streak, achievements, title, frame, animals_saved, water_saved, forest_saved, co2_saved, profile_photo")
    .in("user_id", userIds);

  if (error) {
    console.error("Error fetching participant profiles:", error);
    return;
  }

  // 2️⃣ Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("eventpopup-overlay");

  // 3️⃣ Create popup content
  const popup = document.createElement("div");
  popup.classList.add("eventpopup-content");

  // 4️⃣ Build participant list
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.padding = "0";
  ul.style.margin = "0";

  profiles.forEach(profile => {
    const li = document.createElement("li");
    li.className = "participant-item";
    li.dataset.userid = profile.user_id;

    const hasFrame = profile.frame && profile.frame.trim() !== "";

    const imgDiv = document.createElement("div");
    imgDiv.className = "participant-avatar";
    imgDiv.dataset.userid = profile.user_id;

    imgDiv.style.backgroundImage = hasFrame
      ? `url('${profile.frame}'), url('${profile.profile_photo || profile.avatar_url || "default-avatar.png"}')`
      : `url('${profile.profile_photo || profile.avatar_url || "default-avatar.png"}')`;

    imgDiv.style.backgroundSize = hasFrame ? "contain, cover" : "cover";
    imgDiv.style.backgroundPosition = hasFrame ? "center, center" : "center";
    imgDiv.style.backgroundRepeat = hasFrame ? "no-repeat, no-repeat" : "no-repeat";
    imgDiv.style.width = "60px";
    imgDiv.style.height = "60px";
    imgDiv.style.borderRadius = "50%";
    imgDiv.style.cursor = "pointer";

    // ✅ Use existing openProfile function
    imgDiv.addEventListener("click", e => {
      e.stopPropagation();
      openProfile(imgDiv);
    });

    const nameSpan = document.createElement("span");
    nameSpan.textContent = profile.title
      ? `${profile.username}, ${profile.title}`
      : profile.username || "Unknown";

    const rightSide = document.createElement("div");
    rightSide.className = "participant-info";
    rightSide.appendChild(nameSpan);

    li.appendChild(imgDiv);
    li.appendChild(rightSide);
    ul.appendChild(li);
  });

  popup.innerHTML = `<h3>${tCommunity("participantsFor")} ${eventPlace}</h3>`;
  popup.appendChild(ul);

  const closeBtn = document.createElement("button");
  closeBtn.className = "eventclose-popup";
  closeBtn.textContent = tCommunity("close");
  closeBtn.onclick = () => overlay.remove();
  popup.appendChild(closeBtn);

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Optional: click outside to close
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
}

// --- Local Business Popup ---
const openLocalBtn = document.getElementById("openLocalBusinessPopup");
const closeLocalBtn = document.getElementById("closeLocalBusinessPopup");
const localPopup = document.getElementById("localBusinessPopup");
const sendLocalBtn = document.getElementById("sendLocalBusinessRequest");

openLocalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localPopup.classList.add("active");
});

closeLocalBtn.addEventListener("click", () => {
  localPopup.classList.remove("active");
});

sendLocalBtn.addEventListener("click", async () => {
  const message = document.getElementById("localBusinessMessage").value.trim();
  if (!message) {
    alert(tCommunity("businessMessageMissing"));
    return;
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({
      user_id: currentUser.id,
      email: currentUser.email,
      subject: "NewLocalPartner",
      message
    });

  if (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
    return;
  }

  document.getElementById("localBusinessMessage").value = "";
  localPopup.classList.remove("active");
  alert(tCommunity("requestSentSuccess"));
});


const sendContactBtn = document.getElementById("sendContactMessage");

sendContactBtn.addEventListener("click", async () => {
  const subject = document.getElementById("contactSubject").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!subject) {
    alert(tCommunity("contactSelectSubject"));
    return;
  }

  if (!message) {
    alert(tCommunity("contactWriteMessage"));
    return;
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({
      user_id: currentUser.id,
      email: currentUser.email,
      subject,
      message
    });

  if (error) {
    console.error(error);
    alert(tCommunity("genericError"));
    return;
  }

  // Clear inputs
  document.getElementById("contactSubject").value = "";
  document.getElementById("contactMessage").value = "";

  alert(tCommunity("contactSuccess"));
});
//#endregion

//#region ANONYMOUS FORUM
//const forumTranslations = {
//  en: {
//    asker: "Asker",
//    anonymous: "Anonymous"
//  },

//  es: {
//    asker: "Autor",
//    anonymous: "Anónimo"
//  },

//  hu: {
//    asker: "Kérdező",
//    anonymous: "Névtelen"
//  }
//};

//function tForum(key) {
//  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
//  return forumTranslations[lang]?.[key] || forumTranslations.en[key] || key;
//}

// ----------------------------
// ANONYMOUS FORUM
// ----------------------------
//async function loadForumBlocks() {  
//  const forumMessages = document.getElementById('forumMessages');
//  if (!forumMessages) return;

//  forumMessages.innerHTML = '';
//  const { data: blocks, error } = await supabase
//    .from('forum_blocks')
//    .select('id, content, user_id')
//    .order('created_at', { ascending: false });

//  if (error) return console.error(error);

//  blocks.forEach(block => { 
//    const li = document.createElement('li');
//    li.className = 'forum-block';

//    const textSpan = document.createElement('span');
//    textSpan.className = 'block-text';
//    textSpan.textContent = block.content;
//    li.appendChild(textSpan);

    // Add a clickable hint
//  const hintSpan = document.createElement('span');
//  hintSpan.className = 'block-hint';
//  hintSpan.textContent = '💬';
//  li.appendChild(hintSpan);

//    li.addEventListener('click', () => AFopenCommentPopup(block));

//    if (block.user_id === currentUser.id) {
//      const delBtn = document.createElement('deletebutton');
//      delBtn.textContent = '❌';
//      delBtn.className = 'block-delete-btn';
//      delBtn.addEventListener('click', async (e) => {
//        e.stopPropagation();
//        await supabase.from('forum_blocks').delete().eq('id', block.id);
//        loadForumBlocks();
//      });
//      li.appendChild(delBtn);
//    }

//    forumMessages.appendChild(li);
//  });
//}

// ---- Anonymous Forum & Chat Initialization ----
    // Forum collapse toggle
//    document.querySelectorAll(".AFsection h2").forEach(header => {
//      header.addEventListener("click", () => {
//        const content = header.nextElementSibling;
//        content.style.display = content.style.display === "block" ? "none" : "block";
//      });
//    });

    // Close comment popup
//const closePopup = document.getElementById('AFclosePopup');
//const commentPopup = document.getElementById('AFcommentPopup');

//if (closePopup && commentPopup) {
  // Close on X button
//  closePopup.addEventListener('click', () => {
//    commentPopup.classList.remove('active');
 // });

  // Close when clicking outside the popup content
 // commentPopup.addEventListener('click', (event) => {
    // Check if click target is the overlay itself, not inner content
 //   if (event.target === commentPopup) {
 //     commentPopup.classList.remove('active');
 //   }
 // });
//}

    // Submit block
 //   const submitBlockBtn = document.getElementById('submitBlockBtn');
 //   const blockContent = document.getElementById('blockContent');
 //   if (submitBlockBtn && blockContent) {
 //     submitBlockBtn.addEventListener('click', async () => {
 //       const content = blockContent.value.trim();
 //       if (!content) return;
  //     await supabase.from('forum_blocks').insert([{ user_id: currentUser.id, content }]);
 //       blockContent.value = '';
 //       await addXP(2);
 //       if (blockContent.resetCounter) blockContent.resetCounter();
 //       loadForumBlocks();
 //     });
 //   }

    // Submit comment
 //   const submitCommentBtn = document.getElementById('AFsubmitCommentBtn');
 //   const newCommentInput = document.getElementById('AFnewCommentInput');
 //   if (submitCommentBtn && newCommentInput) {
 //     submitCommentBtn.addEventListener('click', async () => {
 //       await submitNewComment(newCommentInput.value.trim(), newCommentInput);
  //    });
 //   }

//async function AFopenCommentPopup(block) {
//  activeBlockId = block.id;

//  const popupBlockContent = document.getElementById('AFpopupBlockContent');
//  const popupCommentsList = document.getElementById('AFpopupCommentsList');
//  const commentPopup = document.getElementById('AFcommentPopup');
//  if (!popupBlockContent || !popupCommentsList || !commentPopup) return;

//  popupBlockContent.textContent = block.content;

 // const { data: comments, error } = await supabase
 //   .from('forum_comments')
 //   .select('id, commenter_id, content, commenter_name, block_id')
 //   .eq('block_id', block.id)
//    .order('created_at', { ascending: true });

//  if (error) return console.error(error);

 // popupCommentsList.innerHTML = '';
 // comments.forEach(c => {
 //   const li = document.createElement('li');
 //   const isAsker = c.commenter_id === block.user_id;
//    const displayName = isAsker ? tForum("asker") : c.commenter_name;
//    const textSpan = document.createElement('span');
 //   textSpan.innerHTML = `<strong>${displayName}:</strong> ${c.content}`;
 //   li.appendChild(textSpan);

 //   if (c.commenter_id === currentUser.id) {
 //     const delBtn = document.createElement('delbutton');
 //     delBtn.textContent = '❌';
 //     delBtn.className = 'block-delete-btn';
  
//    delBtn.addEventListener('click', async () => {
  //      await supabase.from('forum_comments').delete().eq('id', c.id);
 //       AFopenCommentPopup(block);
 //     });
 //     li.appendChild(delBtn);
 //   }

 //   popupCommentsList.appendChild(li);
//  });

//  commentPopup.classList.add('active');
//}

//async function submitNewComment(content, inputElement) {
//  if (!content || !activeBlockId) return;

//  const { data: profile } = await supabase
//    .from('profiles')
 //   .select('id, name')
 //   .eq('id', currentUser.id)
 //   .single();

 // const commenterName = profile?.name || tForum("anonymous");

//  await supabase.from('forum_comments').insert([{
//    block_id: activeBlockId,
//    commenter_id: currentUser.id,
//    commenter_name: commenterName,
//    content
//  }]);

//  inputElement.value = '';
//  inputElement.resetCounter();
//  await addXP(1);

//  const { data: fullBlock } = await supabase
 //   .from('forum_blocks')
//    .select('id, user_id, content')
 //   .eq('id', activeBlockId)
 //   .single();

 // AFopenCommentPopup(fullBlock);
//}

//#endregion

//#region MENTORSHIP
/*  
const mentorshipTranslations = {
  en: {
    loadingMentors: "Loading mentors...",
    errorLoadingMentors: "Error loading mentors.",

    invalidYears: "Please enter valid years.",
    mustBeLoggedIn: "You must be logged in.",
    submitFailed: "Failed to submit mentorship.",
    submitSuccess: "Mentor application submitted!",

    yearsVegan: "years vegan",
    message: "Message",

    endFailed: "Failed to end mentorship.",
    mentorshipEnded: "Mentorship ended.",

    loginToChat: "You must be logged in to start a chat.",
    missingMentorId: "Cannot start chat: mentor user ID is missing."
  },
  es: {
  loadingMentors: "Cargando mentores...",
  errorLoadingMentors: "Error al cargar los mentores.",

  invalidYears: "Por favor, introduce años válidos.",
  mustBeLoggedIn: "Debes iniciar sesión.",
  submitFailed: "No se pudo enviar la solicitud de mentoría.",
  submitSuccess: "¡Solicitud de mentoría enviada!",

  yearsVegan: "años vegano",
  message: "Mensaje",

  endFailed: "No se pudo finalizar la mentoría.",
  mentorshipEnded: "Mentoría finalizada.",

  loginToChat: "Debes iniciar sesión para iniciar un chat.",
  missingMentorId: "No se puede iniciar el chat: falta el ID del mentor."
},
  hu: {
    loadingMentors: "Mentorok betöltése...",
    errorLoadingMentors: "Nem sikerült betölteni a mentorokat.",

    invalidYears: "Kérlek, adj meg érvényes éveket.",
    mustBeLoggedIn: "Be kell jelentkezned.",
    submitFailed: "Nem sikerült elküldeni a mentor jelentkezést.",
    submitSuccess: "Mentor jelentkezés elküldve!",

    yearsVegan: "éve vegán",
    message: "Üzenet",

    endFailed: "Nem sikerült befejezni a mentorálást.",
    mentorshipEnded: "Mentorálás befejezve.",

    loginToChat: "A csevegéshez be kell jelentkezned.",
    missingMentorId: "Nem indítható csevegés: hiányzó mentor azonosító."
  }
};

function tMentorship(key) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  return mentorshipTranslations[lang]?.[key]
      || mentorshipTranslations.en[key]
      || key;
}

// ----------------------------
// MENTORSHIP
// ----------------------------
function setupMentorshipUI() {
  const applyBtn = document.getElementById("applyMentorBtn");
  const cancelBtn = document.getElementById("mentor-cancel");
  const submitBtn = document.getElementById("mentor-submit");

  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      document.getElementById("mentor-popup")?.classList.add("active");
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      document.getElementById("mentor-popup")?.classList.remove("active");
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
      submitBtn.disabled = true;

      const years = document.getElementById("mentor-years").value;
      if (years === "" || isNaN(years)) {
        alert(tMentorship("invalidYears"));
        submitBtn.disabled = false;
        return;
      }

      const user = currentUser;
      const profile = currentProfile;
      if (!user || !profile) {
        alert(tMentorship("mustBeLoggedIn"));
        submitBtn.disabled = false;
        return;
      }

      // Insert mentor
      const { error } = await supabase.from("mentors").insert({
        user_id: user.id,
        name: profile.name,
        title: profile.title,
        profile_photo: profile.profile_photo || "",
        frame: profile.frame,
        friend_code: profile.friend_code,
        years_vegan: parseInt(years, 10)
      });

      if (error) {
        console.error(error);
        alert(tMentorship("submitFailed"));
        submitBtn.disabled = false;
        return;
      }

      alert(tMentorship("submitSuccess"));
      document.getElementById("mentor-popup")?.classList.remove("active");
      submitBtn.disabled = false;

      loadMentors();          // refresh mentors list
      checkAndToggleMentorUI(); // refresh UI
    });
  }
}
async function loadMentors() {

  const user = currentUser;
  if (!user) return;

  const mentorsList = document.getElementById("mentorsList");
  mentorsList.innerHTML = tMentorship("loadingMentors");

  const { data: mentors, error } = await supabase
    .from("mentors")
    .select("id, user_id, name, title, profile_photo, frame, years_vegan");

  if (error) {
    console.error(error);
    mentorsList.innerHTML = tMentorship("errorLoadingMentors");
    return;
  }

  mentorsList.innerHTML = "";

  const isMentor = mentors.some(m => m.user_id === user.id);

 mentors.forEach(mentor => {
  const li = document.createElement("li");
  li.className = "mentor-item";

  const hasFrame = mentor.frame && mentor.frame.trim() !== "";

  li.innerHTML = `
    <div 
      class="mentor-photo-frame ${hasFrame ? 'has-frame' : ''}" 
      data-userid="${mentor.user_id}"
      style="
  background-image: ${hasFrame
    ? `url('${mentor.frame}'), url('${mentor.profile_photo || 'default.jpg'}')`
    : `url('${mentor.profile_photo || 'default.jpg'}')`};
  background-size: ${hasFrame ? 'contain, cover' : 'cover'};
  background-position: center;
  background-repeat: no-repeat;
"
    ></div>
    <div class="mentor-info">
      <p class="mentor-name">${mentor.title ? `${mentor.name}, ${mentor.title}` : mentor.name}</p>
      <p class="mentor-years">${mentor.years_vegan} ${tMentorship("yearsVegan")}</p>
    </div>
    <button class="mentor-message-btn" data-id="${mentor.id}">${tMentorship("message")}</button>
  `;

  // Handle profile click
  const img = li.querySelector(".mentor-photo-frame");
  img.addEventListener("click", e => {
    e.stopPropagation();
    openProfile(img);
  });

  mentorsList.appendChild(li);

  // Hide message button if user is a mentor
  const msgBtn = li.querySelector(".mentor-message-btn");
  msgBtn.addEventListener("click", () => startChatWithMentor(mentor));
  if (isMentor) msgBtn.style.display = "none";
});

}
async function checkAndToggleMentorUI() {
  const user = currentUser;
  if (!user) return;

  const { data: mentorRecord } = await supabase
    .from("mentors")
    .select("id, user_id, name, profile_photo, years_vegan, mentor_rating, title, frame, friend_code")
    .eq("user_id", user.id)
    .maybeSingle();

  const isMentor = !!mentorRecord;

  const applyBtn = document.getElementById("applyMentorBtn");
  const alreadyMentor = document.getElementById("alrdymentor");
  const connectWithMentor = document.getElementById("ConnectWithAMentor");

  if (isMentor) {
    applyBtn.style.display = "none";
    alreadyMentor.style.display = "flex";
    connectWithMentor.style.display = "none";
  } else {
    applyBtn.style.display = "inline-block";
    alreadyMentor.style.display = "none";
  }

  const endBtn = document.getElementById("endmentorship");
  endBtn?.addEventListener("click", async () => {
    const { error } = await supabase.from("mentors").delete().eq("user_id", user.id);
    if (error) { console.error(error); alert(tMentorship("endFailed")); return; }
    alert(tMentorship("mentorshipEnded"));
    applyBtn.style.display = "inline-block";
    alreadyMentor.style.display = "none";
    loadMentors();
  });
}
function setupCard() {
  const demoCard = document.getElementById("ProfileCard");
  const closeBtn = demoCard.querySelector(".close-btn");

  closeBtn?.addEventListener("click", () => demoCard.classList.remove("show"));

  document.addEventListener("click", e => {
    if (demoCard.classList.contains("show") &&
        !demoCard.contains(e.target) &&
        !e.target.classList.contains("mentor-photo")) {
      demoCard.classList.remove("show");
    }
  });
}

async function startChatWithMentor(mentor) {
  const { data: { user: currentUser }, error } = await supabase.auth.getUser();
  if (error || !currentUser) {
    alert(tMentorship("loginToChat"));
    return;
  }

  if (!mentor?.user_id) {
    console.error("Mentor user_id is missing!", mentor);
    alert(tMentorship("missingMentorId"));
    return;
  }

  // 1. Check if chat already exists
  const { data: existingChat, error: chatError } = await supabase
  .from('chats')
  .select('id')
  .or(
    `and(user1_id.eq.${currentUser.id},user2_id.eq.${mentor.user_id}),` +
    `and(user1_id.eq.${mentor.user_id},user2_id.eq.${currentUser.id})`
  )
  .maybeSingle();

  if (chatError) {
    console.error("Error checking existing chat:", chatError);
  }

  let chatId = existingChat?.id || null;

  // 2. Set the global current chat context
  const chatFriend = {
    id: mentor.user_id,
    name: mentor.name,
    photo: mentor.profile_photo || ""
  };

  // 3. Hide the mentorship tab
  document.getElementById("mentorship")?.classList.add("hidden");

  // 4. Open chat window (empty if chatId is null)
  openChatWindow(chatId, chatFriend);
}
//#endregion
*/

//#region LEADERBOARD
const leaderboardTranslations = {
  en: {
    days: "days",
    xpLabel: "XP",
    level: "Level",

    animals: "animals",
    water: "L water",
    forest: "trees",
    co2: "kg CO₂"
  },

  es: {
    days: "días",
    xpLabel: "XP",
    level: "Nivel",

    animals: "animales",
    water: "L de agua",
    forest: "árboles",
    co2: "kg de CO₂"
  },

  hu: {
    days: "nap",
    xpLabel: "XP",
    level: "Szint",

    animals: "állat",
    water: "L víz",
    forest: "fa",
    co2: "kg CO₂"
  }
};

function tLeaderboard(key) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  return leaderboardTranslations[lang]?.[key]
    || leaderboardTranslations.en[key]
    || key;
}

// ----------------------------
// LEADERBOARDS
// ----------------------------
// Render leaderboard
function renderLeaderboard(ulId, data, type) {
  const ul = document.getElementById(ulId);
  if (!ul) return;

  ul.innerHTML = data.map((user, index) => {
    switch(type) {
      case 'streak':
        return `<li>
          ${index + 1}. ${user.username} 🌱 – ${user.streak} ${tLeaderboard("days")}
        </li>`;

      case 'xp':
        return `<li>
          ${index + 1}. ${user.username} 💫 – 
          ${tLeaderboard("xpLabel")}: ${user.total_xp}, 
          (${tLeaderboard("level")} ${user.level})
        </li>`;

      case 'impact':
        return `<li>
          ${index + 1}. ${user.username} 🌿 – 
          ${user.animals_saved || 0} ${tLeaderboard("animals")}, 
          ${user.water_saved || 0}${tLeaderboard("water")}, 
          ${user.forest_saved || 0} ${tLeaderboard("forest")}, 
          ${user.co2_saved || 0}${tLeaderboard("co2")}
        </li>`;

      case 'badge':
        return `<li>
          ${index + 1}. ${user.username} – 🏅 ${user.badge}
        </li>`;

      default:
        return `<li>${index + 1}. ${user.username}</li>`;
    }
  }).join('');
}

// Fetch leaderboard
async function fetchLeaderboard(leaderboardType, ulId, limitCount = 10) {
  let rpcName;

  switch(leaderboardType) {
    case 'xp':
      rpcName = 'get_leaderboard_level';
      break;
    case 'impact':      // <-- use 'impact' here
      rpcName = 'get_leaderboard_impact';
      break;
    case 'badge':      // <-- use 'impact' here
      rpcName = 'get_leaderboard_badge';
      break;
    default:            // streak / other
      rpcName = 'get_leaderboard';
      break;
  }

  const { data, error } = await supabase.rpc(rpcName, { limit_count: limitCount });

  if (error) {
    console.error(`Error fetching ${leaderboardType} leaderboard:`, error);
    return;
  }

  renderLeaderboard(ulId, data, leaderboardType);
}

// Fetch all
async function fetchAllLeaderboards() {
  await fetchLeaderboard('xp', 'overall-level');
  await fetchLeaderboard('streak', 'overall-streak');
  await fetchLeaderboard('impact', 'overall-impact');
  await fetchLeaderboard('badge', 'overall-badge'); 
}

//#endregion

//#region ACHIEVEMENTS

const achievementTranslations = {
  en: {
    noAchievements: "No achievements yet.",

    // Actions / states
    addedToProfile: "🌟 Added to your profile",
    addToAchievements: "Add to your achievements",
    locked: "🔒 Locked",

    // Suggestions / notifications
    animalSaverDone: "🐮 You saved 100 animals! Incredible impact — claim your Animal Saver achievement!",
    firstEvent: "🎉 You hosted your first event! Open Achievements to add your badge!",
    mealArtWin: "🍽️ Your Meal Art won! Congratulations! Claim your achievement in your profile!",
    animalPathDone: "🐾 You completed the Animal Welfare learning path! Claim your achievement!",
    earthPathDone: "🌍 You completed the Environment learning path! Claim your achievement!",
    healthPathDone: "💪 You completed the Health learning path! Claim your achievement!",
    allPathsDone: "👑 You completed all learning paths! You unlocked Enlightened One!",

    animalSaver_desc: "Unlocked when your counter reaches 100 saved animals.",
    localHero_desc: "Organised a local event.",
    veganChef_desc: "Win a meal-art contest!",
    animalPath_desc: "Finish the animal welfare learning path.",
    earthPath_desc: "Finish the environment learning path.",
    healthPath_desc: "Finish the health learning path.",
    allPaths_desc: "Finish all learning paths."
  },

  es: {
    noAchievements: "Aún no tienes logros.",

    addedToProfile: "🌟 Añadido a tu perfil",
    addToAchievements: "Añadir a tus logros",
    locked: "🔒 Bloqueado",

    animalSaverDone: "🐮 ¡Has salvado 100 animales! Un impacto increíble — reclama tu logro Animal Saver.",
    firstEvent: "🎉 ¡Has organizado tu primer evento! Abre Logros para añadir tu insignia.",
    mealArtWin: "🍽️ ¡Tu plato ganó! ¡Felicidades! Reclama tu logro en tu perfil.",
    animalPathDone: "🐾 ¡Has completado la ruta de aprendizaje sobre el bienestar animal! ¡Reclama tu logro!",
    earthPathDone: "🌍 ¡Has completado la ruta de aprendizaje sobre el medio ambiente! ¡Reclama tu logro!",
    healthPathDone: "💪 ¡Has completado la ruta de aprendizaje sobre la salud! ¡Reclama tu logro!",
    allPathsDone: "👑 ¡Has completado todas las rutas de aprendizaje! ¡Has desbloqueado Enlightened One!",

    animalSaver_desc: "Se desbloquea cuando alcanzas 100 animales salvados.",
    localHero_desc: "Has organizado un evento local.",
    veganChef_desc: "¡Gana un concurso de arte culinario!",
    animalPath_desc: "Completa la ruta de aprendizaje sobre el bienestar animal.",
    earthPath_desc: "Completa la ruta de aprendizaje sobre el medio ambiente.",
    healthPath_desc: "Completa la ruta de aprendizaje sobre la salud.",
    allPaths_desc: "Completa todas las rutas de aprendizaje."

  },

  hu: {
    noAchievements: "Még nincs elért eredmény.",

    addedToProfile: "🌟 Hozzáadva a profilodhoz",
    addToAchievements: "Hozzáadás az eredményeidhez",
    locked: "🔒 Zárolva",

    animalSaverDone: "🐮 100 állatot mentettél meg! Hihetetlen hatás — vedd fel az Animal Saver eredményt!",
    firstEvent: "🎉 Megszervezted az első eseményed! Nyisd meg az Eredményeket a jelvény hozzáadásához!",
    mealArtWin: "🍽️ A fogásod nyert! Gratulálunk! Vedd fel az eredményt a profilodban!",
    animalPathDone: "🐾 Teljesítetted az állatvédelemmel kapcsolatos tanulási útvonalat! Vedd fel az eredményed!",
    earthPathDone: "🌍 Teljesítetted a környezetvédelemmel kapcsolatos tanulási útvonalat! Vedd fel az eredményed!",
    healthPathDone: "💪 Teljesítetted az egészséggel kapcsolatos tanulási útvonalat! Vedd fel az eredményed!",
    allPathsDone: "👑 Teljesítetted az összes tanulási útvonalat! Feloldottad a Enlightened One címet!",

    animalSaver_desc: "Akkor oldódik fel, amikor 100 megmentett állatot érsz el.",
    localHero_desc: "Szerveztél egy helyi eseményt.",
    veganChef_desc: "Megnyertél egy étel-művészeti versenyt!",
    animalPath_desc: "Teljesítetted az állatvédelemmel kapcsolatos tanulási útvonalat.",
    earthPath_desc: "Teljesítetted a környezetvédelemmel kapcsolatos tanulási útvonalat.",
    healthPath_desc: "Teljesítetted az egészséggel kapcsolatos tanulási útvonalat.",
    allPaths_desc: "Az összes tanulási útvonalat teljesítetted."
  }
};

function achievementT(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    achievementTranslations[lang]?.[key] ||
    achievementTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}

// Display achievements
function populateAchievements(container, achievements) {
  container.innerHTML = "";
  if (!achievements || !Array.isArray(achievements) || achievements.length === 0) {
    container.innerHTML = `<p>${achievementT("noAchievements")}</p>`;
    return;
  }

  achievements.forEach(a => {
    const span = document.createElement("span");
    span.className = "achievement";
    span.textContent = a;
    container.appendChild(span);
  });
}

// Define all possible achievements and their unlock conditions
const allAchievements = [
  { 
    symbol: "🐮", 
    name: "Animal Saver", 
    descKey: "animalSaver_desc",
    key: "animals_saved", 
    goal: 100 
  },
 // { 
 //   symbol: "🤝", 
 //   name: "A decent mentor", 
 //   description: "Earn a rating 4 or higher", 
 //   key: "mentor_rating", 
 //   goal: 4 
 // },
  { 
    symbol: "🏡", 
    name: "Local Patriot", 
    descKey: "localHero_desc",
    key: "events_organized", 
    goal: 1 
  },
  { 
    symbol: "🥗", 
    name: "Expert Vegan Chef", 
    descKey: "veganChef_desc",
    key: "meal_art_wins", 
    goal: 1 
  },
  {
  symbol: "🐾",
  name: "Voice for the Voiceless",
  descKey: "animalPath_desc",
  key: "animal_path",
  goal: 1
},
{
  symbol: "🌱",
  name: "Planet Protector",
  descKey: "earthPath_desc",
  key: "earth_path",
  goal: 1
},
{
  symbol: "💪",
  name: "Strong From Plants",
  descKey: "healthPath_desc",
  key: "health_path",
  goal: 1
},
{
  symbol: "🏆",
  name: "Enlightened One",
  descKey: "allPaths_desc",
  key: "all_paths_complete",
  goal: 1
}
];

// Display dynamic achievements with progress and add-to-profile button
async function displayAchievementsPage() {
  if (!currentUser || !currentProfile) return;

  const userId = currentUser.id;
  const container = document.getElementById("AchievementsList");
  container.innerHTML = "";

  // 1️⃣ Fetch stats from achievements_data
  const { data: stats, error: statsError } = await supabase
    .from("achievements_data")
    .select("animals_saved, events_organized, meal_art_wins, animal_path, earth_path, health_path")
    .eq("user_id", userId)
    .single();

  if (statsError) {
    console.error("Error fetching stats:", statsError);
    return;
  }

  // 2️⃣ Get unlocked achievements from currentProfile
  const unlocked = Array.isArray(currentProfile.achievements) ? currentProfile.achievements : [];

  // 3️⃣ Loop through all possible achievements
  allAchievements.forEach(a => {
    let value;

if (a.name === "Enlightened One") {
  value =
    stats.animal_path === 1 &&
    stats.earth_path === 1 &&
    stats.health_path === 1
      ? 1
      : 0;
} else {
  value = stats?.[a.key] || 0;
}
    const isUnlocked = value >= a.goal;
    const isAdded = unlocked.includes(a.name);

    const div = document.createElement("div");
    div.className = "Achievement " + (isUnlocked ? "unlocked" : "locked");

    const symbol = document.createElement("div");
    symbol.className = "symbol";
    symbol.textContent = a.symbol;

    const title = document.createElement("h4");
    title.textContent = a.name;

    const desc = document.createElement("p");
    desc.textContent = achievementT(a.descKey);

    const progressAch = document.createElement("div");
    progressAch.className = "progressAch";
    progressAch.textContent = `${Math.min(value, a.goal)} / ${a.goal}`;

    // Optional progress bar
    const barContainer = document.createElement("div");
    barContainer.className = "progressAch-bar-container";
    const bar = document.createElement("div");
    bar.className = "progressAch-bar";
    bar.style.width = `${Math.min((value / a.goal) * 100, 100)}%`;
    barContainer.appendChild(bar);

    div.appendChild(symbol);
    div.appendChild(title);
    div.appendChild(desc);
    div.appendChild(progressAch);
    div.appendChild(barContainer);

    // Add button or badge
    const action = document.createElement("div");
    if (isAdded) {
      action.className = "unlocked-badge";
      action.textContent = achievementT("addedToProfile");
    } else if (isUnlocked) {
      const button = document.createElement("button");
      button.textContent = achievementT("addToAchievements");
      button.className = "unlock-btn";
      button.onclick = async () => {
        await addAchievementToProfile(userId, a.name);
        // Update currentProfile locally to avoid refetching
        currentProfile.achievements.push(a.name);
        displayAchievementsPage(); // Refresh display
      };
      action.appendChild(button);
    } else {
      const lockText = document.createElement("span");
      lockText.className = "locked-text";
      lockText.textContent = achievementT("locked");
      action.appendChild(lockText);
    }

    div.appendChild(action);
    container.appendChild(div);
  });
}

// Adds a new achievement to profiles table (jsonb array)
async function addAchievementToProfile(userId, newAchievement) {
  const { data, error } = await supabase
    .from("profiles")
    .select("achievements")
    .eq("id", userId)
    .single();

  if (error) return console.error("Error fetching user achievements:", error);

  let achievements = Array.isArray(data.achievements) ? data.achievements : [];

  if (!achievements.includes(newAchievement)) {
    achievements.push(newAchievement);

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ achievements })
      .eq("id", userId);
      
      await displayAchievementsSettings(userId);
      await addXP(50);
 
    if (updateError) console.error("Error updating achievements:", updateError);
  }
}

//#endregion

//#region SHOP

const shopTranslations = {
  en: {
    // Shop items
    price: "Price",
    badges: "Badges",
    buy: "Buy",

    xpBoxDesc: "Gain +80 XP instantly.",
    titleDesc: "Set one of your unlocked achievements as a title next to your name.",
    frameDesc: "Set a frame around your profile picture.",

    // Errors / alerts
    productNotFound: "Product not found.",
    notEnoughBadges: "Not enough badges!",
    purchaseFailed: "Purchase failed:",
    purchaseSuccess: "Purchase successful!",

    // Modal / choices
    buyXpConfirm: "Do you want to purchase 80 XP for {price} badges?",
    clearTitle: "Clear title",
    selectFrame: "Select a frame to apply:",
    loadingFrames: "Loading frames...",
    selectFrameAlert: "Please select a frame!",

    // UI
    yourBadges: "Your Badges"
  },

  es: {
    price: "Precio",
    badges: "Insignias",
    buy: "Comprar",

    xpBoxDesc: "Obtén +80 XP al instante.",
    titleDesc: "Usa uno de tus logros desbloqueados como título junto a tu nombre.",
    frameDesc: "Aplica un marco a tu foto de perfil.",

    productNotFound: "Producto no encontrado.",
    notEnoughBadges: "¡No tienes suficientes insignias!",
    purchaseFailed: "La compra falló:",
    purchaseSuccess: "¡Compra realizada con éxito!",

    buyXpConfirm: "¿Quieres comprar 80 XP por {price} insignias?",
    clearTitle: "Quitar título",
    selectFrame: "Selecciona un marco para aplicar:",
    loadingFrames: "Cargando marcos...",
    selectFrameAlert: "¡Por favor selecciona un marco!",

    yourBadges: "Tus insignias"
  },

  hu: {
    price: "Ár",
    badges: "Jelvények",
    buy: "Vásárlás",

    xpBoxDesc: "Azonnal +80 XP-t kapsz.",
    titleDesc: "Állíts be egy feloldott eredményt címként a neved mellé.",
    frameDesc: "Keretezd be a profilképed.",

    productNotFound: "A termék nem található.",
    notEnoughBadges: "Nincs elég jelvényed!",
    purchaseFailed: "A vásárlás sikertelen:",
    purchaseSuccess: "Sikeres vásárlás!",

    buyXpConfirm: "Szeretnél 80 XP-t vásárolni {price} jelvényért?",
    clearTitle: "Cím törlése",
    selectFrame: "Válassz egy keretet:",
    loadingFrames: "Keretek betöltése...",
    selectFrameAlert: "Kérlek válassz egy keretet!",

    yourBadges: "Jelvényeid"
  }
};

function tShop(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let str =
    shopTranslations[lang]?.[key] ||
    shopTranslations.en[key] ||
    key;

  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, v);
  }

  return str;
}

// --------------------------------
// SHOP
// --------------------------------
async function setupShop() {
  if (!currentUser || !currentProfile) await fetchAllData();

  const badgeSpan = document.getElementById("badge-countshop");
  const shopContainer = document.getElementById("ShopProducts");

  badgeSpan.textContent = `${currentProfile.badge || 0}`;

  const shopItems = [
    { id: "xpbox", name: "📦 XP Box", price: 20, description: tShop("xpBoxDesc") },
    { id: "title", name: "🏷️ Title", price: 50, description: tShop("titleDesc") },
    { id: "profile-decoration", name: "🌸 Profile Picture Frame", price: 70, description: tShop("frameDesc") }
  ];

  const availableItems = shopItems;

  shopContainer.innerHTML = "";
  availableItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "ShopProduct";
    card.innerHTML = `
      <h4>${item.name}</h4>
      <div class="price">${tShop("price")}: ${item.price} ${tShop("badges")}</div>
      <p>${item.description}</p>
      <button data-id="${item.id}">${tShop("buy")}</button>
    `;
    shopContainer.appendChild(card);
  });

  // Buy button handler
  shopContainer.addEventListener("click", async e => {
    if (!e.target.matches("button")) return;

    const productId = e.target.dataset.id;
    const product = shopItems.find(p => p.id === productId);
    if (!product) return alert(tShop("productNotFound"));

    const modal = document.getElementById("shopModal");
    const modalTitle = document.getElementById("shopModalTitle");
    const modalBody = document.getElementById("shopModalBody");
    const confirmBtn = document.getElementById("shopModalConfirm");
    const cancelBtn = document.getElementById("shopModalCancel");

    modal.classList.add("active");
    cancelBtn.onclick = () => modal.classList.remove("active");

    modalTitle.textContent = product.name;
    modalBody.innerHTML = "";

    modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});

    // Setup modal content
    if (product.id === "xpbox") {
      modalBody.innerHTML = tShop("buyXpConfirm", { price: product.price });
    } else if (product.id === "title") {
      const achievements = currentProfile.achievements || [];
      modalBody.innerHTML = "";
      const clearLabel = document.createElement("label");
      clearLabel.innerHTML = `<input type="radio" name="shopChoice" value="">${tShop("clearTitle")}`;
      modalBody.appendChild(clearLabel);
      achievements.forEach(a => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="shopChoice" value="${a}">${a}`;
        modalBody.appendChild(label);
      });
    } else if (product.id === "profile-decoration") {
      modalBody.innerHTML = `<p>${tShop("selectFrame")}</p><div id="frameOptions">${tShop("loadingFrames")}</div>`;
      const frameOptionsDiv = document.getElementById("frameOptions");
      const frameUrls = [
        'https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/frames/frame3.png',
        'https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/frames/frame4.png',
        'https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/frames/frame5.png',
        'https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/frames/frame6.png',
      ];
      frameOptionsDiv.innerHTML = "";
      frameUrls.forEach((url, index) => {
        const label = document.createElement("label");
        label.style.display = "block";
        label.style.marginBottom = "8px";
        label.innerHTML = `
          <input type="radio" name="shopChoice" value="${url}" ${index === 0 ? "checked" : ""}>
          <img src="${url}" alt="Frame ${index + 1}" style="width:80px; height:auto; margin-left:8px;">
        `;
        frameOptionsDiv.appendChild(label);
      });
    }

    // Separate functions for each product
    const buyXPBox = async () => {
      if (currentProfile.badge < product.price) return alert(tShop("notEnoughBadges"));
      currentProfile.badge -= product.price;
      addXP(80);
      const { error } = await supabase.from("profiles").update({
        badge: currentProfile.badge
      }).eq("id", currentUser.id);
      if (error) return alert("Purchase failed: " + error.message);
      alert(tShop("purchaseSuccess"));
      badgeSpan.textContent = `${tShop("yourBadges")}: ${currentProfile.badge}`;
      renderProfile();
      modal.classList.remove("active");
    };

    const buyTitle = async () => {
      if (currentProfile.badge < product.price) return alert(tShop("notEnoughBadges"));
      const selected = modalBody.querySelector('input[name="shopChoice"]:checked')?.value || null;
      currentProfile.badge -= product.price;
      currentProfile.title = selected ? `the ${selected}` : null;
      const { error } = await supabase.from("profiles").update({
        badge: currentProfile.badge,
        title: currentProfile.title
      }).eq("id", currentUser.id);
      if (error) return alert("Purchase failed: " + error.message);
      alert(tShop("purchaseSuccess"));
      badgeSpan.textContent = `${tShop("yourBadges")}: ${currentProfile.badge}`;
      renderProfile();
      modal.classList.remove("active");
    };

    const buyFrame = async () => {
      if (currentProfile.badge < product.price) return alert(tShop("notEnoughBadges"));
      const selected = modalBody.querySelector('input[name="shopChoice"]:checked')?.value;
      if (!selected) return alert(tShop("selectFrameAlert"));
      currentProfile.badge -= product.price;
      currentProfile.frame = selected;
      const { error } = await supabase.from("profiles").update({
        badge: currentProfile.badge,
        frame: currentProfile.frame
      }).eq("id", currentUser.id);
      if (error) return alert("Purchase failed: " + error.message);
      alert(tShop("purchaseSuccess"));
      badgeSpan.textContent = `${tShop("yourBadges")}: ${currentProfile.badge}`;
      renderProfile();
      modal.classList.remove("active");
    };

    // Assign the right confirm handler
    confirmBtn.onclick = () => {
      if (product.id === "xpbox") buyXPBox();
      else if (product.id === "title") buyTitle();
      else if (product.id === "profile-decoration") buyFrame();
    };
  });
}
//#endregion

//#region CHALLENGES

const challengesTranslations = {
  en: {
    // Daily XP
    progressText: "Progress",
    rewardClaimed: "Reward Claimed 🎉",
    claimRewardXp: "🎁 Claim Reward",
    keepGoing: "Keep Going",
    dailyXpAlert: "🎉 You earned +3 badges and 3 XPs for completing today’s challenge!",

    // Learn challenge
    rewardClaimedFlower: "Reward Claimed 🌸",
    claimReward: "Claim Reward",
    learnAlert: "🎉 You earned 3 Badges and 3 XPs!",

    // Mindful
    startTimer: "Start 5-Minute Timer",
    doneToday: "Done today",
    mindfulSuccess:
      "🎉 Congratulations, you completed your daily challenge! Take your reward.",
    mindfulRewardAlert: "🧘 You earned 5 Badges and 5 XPs!",
    mindfulError: "Something went wrong claiming your reward.",

    // Encourage
    noFriends: "No friends yet, look for friends in the community",
    failedLoadFriends: "Failed to load friends",
    selectFriend: "Please select a friend 👥",
    writeMessage: "Please write your message 💬",
    encourageReward: "🌸 You earned 2 Badges and 2 XPs!",
    encourageFailed: "Failed to send message. Please try again.",
    sendMessage: "Send Message",
    encourageIntro: "I've chosen you to encourage in my daily challenge.",
    encourageOutro: "Keep going! 🌱"
  },

  hu: {
    progressText: "Haladás",
    rewardClaimed: "Jutalom átvéve 🎉",
    claimRewardXp: "🎁 Jutalom igénylése",
    keepGoing: "Csak így tovább",
    dailyXpAlert:
      "🎉 +3 jelvényt és 3 XP-t kaptál a mai kihívás teljesítéséért!",

    rewardClaimedFlower: "Jutalom átvéve 🌸",
    claimReward: "Jutalom igénylése",
    learnAlert: "🎉 3 jelvényt és 3 XP-t kaptál!",

    startTimer: "5 perces időzítő indítása",
    doneToday: "Ma kész",
    mindfulSuccess:
      "🎉 Gratulálunk, teljesítetted a napi kihívást! Vedd át a jutalmad.",
    mindfulRewardAlert: "🧘 5 jelvényt és 5 XP-t kaptál!",
    mindfulError: "Hiba történt a jutalom igénylésekor.",

    noFriends:
      "Még nincsenek barátaid, keress barátokat a közösségben",
    failedLoadFriends: "Nem sikerült betölteni a barátokat",
    selectFriend: "Kérlek, válassz egy barátot 👥",
    writeMessage: "Kérlek, írj egy üzenetet 💬",
    encourageReward: "🌸 2 jelvényt és 2 XP-t kaptál!",
    encourageFailed:
      "Nem sikerült elküldeni az üzenetet. Próbáld újra.",
    sendMessage: "Üzenet küldése",
    encourageIntro: "Kiválasztottalak, hogy bátorítsalak a napi kihívásomban.",
    encourageOutro: "Csak így tovább! 🌱"
  },

  es: {
    progressText: "Progreso",
    rewardClaimed: "Recompensa reclamada 🎉",
    claimRewardXp: "🎁 Reclamar recompensa",
    keepGoing: "Sigue así",
    dailyXpAlert:
      "🎉 ¡Has ganado 3 insignias y 3 XP por completar el desafío de hoy!",

    rewardClaimedFlower: "Recompensa reclamada 🌸",
    claimReward: "Reclamar recompensa",
    learnAlert: "🎉 ¡Has ganado 3 insignias y 3 XP!",

    startTimer: "Iniciar temporizador de 5 minutos",
    doneToday: "Completado hoy",
    mindfulSuccess:
      "🎉 ¡Felicidades! Has completado tu desafío diario. Reclama tu recompensa.",
    mindfulRewardAlert: "🧘 ¡Has ganado 5 insignias y 5 XP!",
    mindfulError:
      "Algo salió mal al reclamar tu recompensa.",

    noFriends:
      "Aún no tienes amigos, busca amigos en la comunidad",
    failedLoadFriends: "No se pudieron cargar los amigos",
    selectFriend: "Por favor selecciona un amigo 👥",
    writeMessage: "Por favor escribe tu mensaje 💬",
    encourageReward: "🌸 ¡Has ganado 2 insignias y 2 XP!",
    encourageFailed:
      "No se pudo enviar el mensaje. Inténtalo de nuevo.",
    sendMessage: "Enviar mensaje",
    encourageIntro: "Te he elegido para animarte en mi desafío diario.",
    encourageOutro: "¡Sigue así! 🌱"
  }
};

function tChallenges(key) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  return challengesTranslations[lang]?.[key] 
      || challengesTranslations.en[key] 
      || key;
}

//--------------------------
// Challenges
//--------------------------

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

// ---------------------------
// 🏁 Daily challenge helpers (Supabase)
// ---------------------------
async function isClaimed(userId, challenge) {
  const { data } = await supabase
    .from("daily_challenge_claims")
    .select("claimed_date")
    .eq("user_id", userId)
    .eq("challenge", challenge)
    .eq("claimed_date", todayUTC())
    .maybeSingle();

  return !!data;
}

async function markClaimed(userId, challenge) {
  const { error } = await supabase
    .from("daily_challenge_claims")
    .insert({
      user_id: userId,
      challenge,
      claimed_date: todayUTC()
    });

  if (error) throw error;
}

// ---------------------------
// 🔥 DAILY XP CHALLENGE
// ---------------------------
async function loadDailyXpChallenge(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("xp_today, badge")
    .eq("id", userId)
    .single();

  if (error) return console.error(error);

  const xpToday = data?.xp_today || 0;
  const goal = 50;
  const progressPercent = Math.min((xpToday / goal) * 100, 100);

  document.getElementById("daily-xp-progress").style.width = `${progressPercent}%`;
  document.getElementById("daily-xp-text").textContent = `${tChallenges("progressText")}: ${xpToday} / ${goal} XP`;

  const btn = document.getElementById("daily-xp-claim");
  const claimed = await isClaimed(currentUser.id, "daily_xp");

  if (claimed) {
    btn.disabled = true;
    btn.textContent =  tChallenges("rewardClaimed");
    return;
  }

  btn.disabled = xpToday < goal;
  btn.textContent = xpToday >= goal ? tChallenges("claimRewardXp") : tChallenges("claimRewardXp");
}

document.getElementById("daily-xp-claim").addEventListener("click", async () => {
  await addBadges(currentUser.id, 3);
  await addXP(3);
  await markClaimed(currentUser.id, "daily_xp");

    clearNotification("challenges");
    clearNotification("playground");

  alert(tChallenges("dailyXpAlert"));

  const btn = document.getElementById("daily-xp-claim");
  btn.disabled = true;
  btn.textContent = tChallenges("rewardClaimed");

  loadDailyXpChallenge(currentUser.id);
  
});

// ---------------------------
// 📚 LEARN SOMETHING NEW
// ---------------------------
async function checkLearnProgress(userId) {
  const { data: row } = await supabase
    .from("lessons_daily")
    .select("*")
    .eq("user_id", userId)
    .eq("date", todayUTC())
    .maybeSingle();

  const animalDone = row?.animal || false;
  const earthDone = row?.earth || false;
  const healthDone = row?.health || false;

  document.getElementById("animalStatus").textContent = animalDone ? "✅" : "❌";
  document.getElementById("earthStatus").textContent = earthDone ? "✅" : "❌";
  document.getElementById("healthStatus").textContent = healthDone ? "✅" : "❌";

  const progress = ([animalDone, earthDone, healthDone].filter(Boolean).length / 3) * 100;
  document.getElementById("learnProgress").style.width = `${progress}%`;

  const btn = document.getElementById("learnClaimBtn");
  const claimed = await isClaimed(currentUser.id, "learn");

  btn.disabled = !animalDone || !earthDone || !healthDone || claimed;
}

async function markLessonComplete(userId, courseID) {
  if (!userId) return console.error("No user ID provided");

  // Ensure date is in 'YYYY-MM-DD' format
  const today = todayUTC(); // should return string like '2025-12-29'

  const updateData = {
    user_id: userId,
    date: today
  };

  if (courseID === "animals") updateData.animal = true;
  if (courseID === "earth") updateData.earth = true;
  if (courseID === "health") updateData.health = true;

  try {
    const { data, error } = await supabase
      .from("lessons_daily")
      .upsert([updateData], { onConflict: ["user_id", "date"] }); // Note: array

    if (error) {
      console.error("Failed to mark lesson complete:", error);
    } 
  } catch (err) {
    console.error("Unexpected error:", err);
  }

  // Optional: update progress in your app
  checkLearnProgress(userId);
  await monitorDailyLesson();

   // NEW: Playground & Challenges
  updateChallengeDots();
}

document.getElementById("learnClaimBtn").addEventListener("click", async () => {
  await addBadges(currentUser.id, 3);
  await addXP(3);
  await markClaimed(currentUser.id, "learn");

  alert(tChallenges("learnAlert"));
  loadLessonChallenge();
  
    clearNotification("challenges");
    clearNotification("playground");
});

async function loadLessonChallenge() {
  const btn = document.getElementById("learnClaimBtn");
  const claimed = await isClaimed(currentUser.id, "learn");

  if (claimed) {
    btn.disabled = true;
    btn.textContent = tChallenges("rewardClaimedFlower");
  } else {
    // Check if all lessons are done
    const animalDone = document.getElementById("animalStatus").textContent === "✅";
    const earthDone = document.getElementById("earthStatus").textContent === "✅";
    const healthDone = document.getElementById("healthStatus").textContent === "✅";

    btn.disabled = !(animalDone && earthDone && healthDone);
    btn.textContent = tChallenges("claimReward");
  }
}

// ---------------------------
// 🧘 MINDFUL MOMENT (Popup Version - Reset on Close)
// ---------------------------

async function loadMindfulPopupState(userId) {
  const claimed = await isClaimed(currentUser.id, "mindful");
  const startBtn = document.getElementById("mindfulStartBtn");
  startBtn.disabled = claimed;

  if (claimed) {
    startBtn.textContent = tChallenges("rewardClaimedFlower");
  } else {
    startBtn.textContent = tChallenges("startTimer");
  }
}

let mindfulTimer = null;

const popup = document.getElementById("mindfulPopup");
const closeBtn = document.getElementById("mindfulCloseBtn");
const startBtn = document.getElementById("mindfulStartBtn");
const timerDisplay = document.getElementById("mindfulPopupTimer");
const rewardBtn = document.getElementById("mindfulPopupRewardBtn");

// ---------------------------
// START BUTTON
// ---------------------------
startBtn.addEventListener("click", () => {
  // 🔴 HARD RESET before starting
  if (mindfulTimer) {
    clearInterval(mindfulTimer);
    mindfulTimer = null;
  }
  localStorage.removeItem("mindfulEndTime");

  // Force UI to 5:00 immediately
  timerDisplay.textContent = "5:00";

  const durationMs = 5 * 60 * 1000; // 5 minutes
  const endTime = Date.now() + durationMs;

  // Save new absolute end time
  localStorage.setItem("mindfulEndTime", endTime.toString());

  // UI setup
  timerDisplay.style.display = "inline";
  rewardBtn.style.display = "none";
  document.getElementById("mindfulTimerRow").style.display = "block";
  closeBtn.style.display = "inline-block";

  popup.style.display = "flex";
  popup.classList.remove("hidden");

  startBtn.disabled = true;

  startMindfulCountdown();
});


// ---------------------------
// COUNTDOWN (robust, wall-clock based)
// ---------------------------
function startMindfulCountdown() {
  if (mindfulTimer) {
    clearInterval(mindfulTimer);
    mindfulTimer = null;
  }

  // Render once immediately from endTime
  updateMindfulDisplay();

  // 🔴 Start ticking AFTER 1 second (prevents instant jump)
  mindfulTimer = setInterval(updateMindfulDisplay, 1000);
}


function updateMindfulDisplay() {
  const endTimeStr = localStorage.getItem("mindfulEndTime");
  if (!endTimeStr) return;

  const endTime = parseInt(endTimeStr, 10);
  const now = Date.now();
  const diffMs = endTime - now;

  // Round UP so first second stays visible
  const timeLeft = Math.max(0, Math.ceil(diffMs / 1000));

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

  if (timeLeft <= 0) {
    clearInterval(mindfulTimer);
    mindfulTimer = null;
    localStorage.removeItem("mindfulEndTime");
    onMindfulFinished();
  }
}

// ---------------------------
// FINISH HANDLER
// ---------------------------
function onMindfulFinished() {
  document.getElementById("mindfulTimerRow").style.display = "none";
  closeBtn.style.display = "none";

  const popupBody = document.getElementById("mindfulPopupBody");

  if (!popupBody.querySelector(".mindful-success-message")) {
    const msg = document.createElement("p");
    msg.textContent = tChallenges("mindfulSuccess");
    msg.classList.add("mindful-success-message");
    popupBody.prepend(msg);
  }

  rewardBtn.style.display = "inline-block";
}

// ---------------------------
// CLOSE POPUP  → RESET TIMER
// ---------------------------
function closeMindfulPopup() {
  if (mindfulTimer) {
    clearInterval(mindfulTimer);
    mindfulTimer = null;
  }

  // 🔴 IMPORTANT: reset the session completely
  localStorage.removeItem("mindfulEndTime");

  timerDisplay.style.display = "inline";
  rewardBtn.style.display = "none";
  popup.style.display = "none";
  popup.classList.add("hidden");

  // Allow starting again from scratch
  startBtn.disabled = false;
}

// Close button click
closeBtn.addEventListener("click", closeMindfulPopup);

// Clicking outside the popup (overlay only)
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closeMindfulPopup();
  }
});

// ---------------------------
// REWARD BUTTON
// ---------------------------
rewardBtn.addEventListener("click", async () => {
  try {
    await addBadges(currentUser.id, 5);
    await addXP(5);
    await markClaimed(currentUser.id, "mindful");

    alert(tChallenges("mindfulRewardAlert"));

    popup.style.display = "none";
    popup.classList.add("hidden");

    startBtn.disabled = true;
    startBtn.textContent = tChallenges("doneToday");

    // Cleanup
    localStorage.removeItem("mindfulEndTime");
  } catch (err) {
    console.error("Reward claim failed:", err);
    alert(tChallenges("mindfulError"));
  }
});

// ---------------------------
// 💖 ENCOURAGE SOMEONE
// ---------------------------
async function loadFriendSelect(currentProfileid) {
  const select = document.getElementById("friendSelect");
  if (!select) return;

  try {
    const { data: friendsData, error } = await supabase
      .from("friends")
      .select("user1_id, user2_id, user1_name, user2_name")
      .or(`user1_id.eq.${currentProfileid},user2_id.eq.${currentProfileid}`);

    if (error) throw error;

    const friends = friendsData
      .map(f => {
        if (f.user1_id === currentProfileid) return { id: f.user2_id, name: f.user2_name };
        if (f.user2_id === currentProfileid) return { id: f.user1_id, name: f.user1_name };
        return null;
      })
      .filter(Boolean);

    if (friends.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.disabled = true;
      option.textContent = tChallenges("noFriends");
      select.appendChild(option);
    } else {
      friends.forEach(f => {
        const option = document.createElement("option");
        option.value = f.id;
        option.textContent = f.name;
        select.appendChild(option);
      });
    }
  } catch (err) {
    console.error("Error loading friends:", err);
    const option = document.createElement("option");
    option.value = "";
    option.disabled = true;
    option.textContent = tChallenges("failedLoadFriends");
    select.appendChild(option);
  }
}

document.getElementById("sendEncourageBtn").addEventListener("click", async () => {
  const msgInput = document.getElementById("encourageMessage");
  const friendSelect = document.getElementById("friendSelect");
  const friendId = friendSelect.value;

  if (!friendId) return alert(tChallenges("selectFriend"));
  const msg = msgInput.value.trim();
  if (!msg) return alert(tChallenges("writeMessage"));

  const finalMessage = `${tChallenges("encourageIntro")}\n\n${msg}\n\n${tChallenges("encourageOutro")}`;

  try {
    // 3️⃣ Fetch all chats where current user is either user1 or user2
    const { data: chatsData, error: fetchError } = await supabase
      .from("chats")
      .select("id, user1_id, user2_id")
      .or(`user1_id.eq.${currentProfile.id},user2_id.eq.${currentProfile.id}`);

    if (fetchError) throw fetchError;

    // 4️⃣ Check if a chat with this friend exists
    let chat = chatsData.find(
      c => (c.user1_id === currentProfile.id && c.user2_id === friendId) ||
           (c.user2_id === currentProfile.id && c.user1_id === friendId)
    );

    let chatId;

    if (chat) {
      chatId = chat.id;
      await supabase
        .from("chats")
        .update({ last_message: finalMessage, last_message_at: new Date() })
        .eq("id", chatId);
    } else {
      // Chat does NOT exist → fetch friend's profile photo
      const { data: friendData, error: friendError } = await supabase
  .from("friends")
    .select("user1_id, user2_id, user1_profile_photo, user2_profile_photo")
    .or(`user1_id.eq.${currentProfile.id},user1_id.eq.${friendId}`)
    .in('user2_id', [friendId, currentProfile.id])
    .single();

      if (friendError || !friendData) {
        throw new Error("Failed to fetch friend data");
      }

      const user1ProfilePhoto = currentProfile.profile_photo;
      const user2ProfilePhoto = friendData.user1_id === currentProfile.id
        ? friendData.user2_profile_photo
        : friendData.user1_profile_photo;

      // Insert new chat with profile photos
      const { data: newChat, error: insertError } = await supabase
        .from("chats")
        .insert([{
          user1_id: currentProfile.id,
          user2_id: friendId,
          user1_name: currentProfile.name,
          user2_name: friendSelect.selectedOptions[0].text,
          user1_profile_photo: user1ProfilePhoto,
          user2_profile_photo: user2ProfilePhoto,
          last_message: finalMessage,
          last_message_at: new Date()
        }])
        .select()
        .single();

      if (insertError) throw insertError;
      chatId = newChat.id;
    }

    if (!chatId) {
      throw new Error("Chat ID missing — cannot send message");
    }

    // Insert message
    const { error: msgError } = await supabase.from("messages").insert([{
  chat_id: chatId,
  sender_id: currentProfile.id,
  receiver_id: friendId, 
  content: finalMessage,
  created_at: new Date()
}]);

    if (msgError) throw msgError;

    
    await addBadges(currentUser.id, 2);
    await addXP(2);
    await markClaimed(currentUser.id, "encourage");

    alert(tChallenges("encourageReward"));
    loadEncourageChallenge();
    msgInput.value = "";

  } catch (err) {
    console.error("Error sending encouragement message:", err);
    alert(tChallenges("encourageFailed"));
  }
});

async function loadEncourageChallenge() {
  const sendBtn = document.getElementById("sendEncourageBtn");

  const claimed = await isClaimed(currentUser.id, "encourage");

  if (claimed) {
    sendBtn.disabled = true;
    sendBtn.textContent = tChallenges("rewardClaimedFlower");
    sendBtn.disabled = true;
  } else {
    sendBtn.textContent = tChallenges("sendMessage");
    sendBtn.disabled = false;
  }
}

//#endregion

//#region SYSTEMSETTINGS

const systemSettingsTranslations = {
  en: {
    languageUpdated: "Language updated successfully!",
    loginFirst: "Please log in first!",
    logoutConfirm: "Are you sure you want to log out?",
    
    deleteConfirm1:
      "⚠️ Are you sure you want to delete your profile?\n\nThis will permanently remove your account, profile, messages, friends, and all related data.",
    deleteConfirm2:
      "🚨 This action is IRREVERSIBLE.\n\nOnce deleted, your data cannot be recovered.\n\nDo you REALLY want to continue?",
    
    deletingAccount: "Deleting account…",
    deleteProfileBtn: "🗑️ Delete Profile",

    logoutError: "Something went wrong while logging out.",
    updateLangError: "Failed to update language. Please try again.",
    deleteFailed: "❌ Failed to delete account. Please try again.",
    deleteUnexpected: "❌ Unexpected error while deleting account."
  },

  es: {
    languageUpdated: "¡Idioma actualizado correctamente!",
    loginFirst: "¡Por favor inicia sesión primero!",
    logoutConfirm: "¿Seguro que quieres cerrar sesión?",
    
    deleteConfirm1:
      "⚠️ ¿Seguro que quieres eliminar tu perfil?\n\nEsto eliminará permanentemente tu cuenta, perfil, mensajes, amigos y todos los datos relacionados.",
    deleteConfirm2:
      "🚨 Esta acción es IRREVERSIBLE.\n\nUna vez eliminados, tus datos no podrán recuperarse.\n\n¿REALMENTE deseas continuar?",
    
    deletingAccount: "Eliminando cuenta…",
    deleteProfileBtn: "🗑️ Eliminar perfil",

    logoutError: "Algo salió mal al cerrar sesión.",
    updateLangError: "No se pudo actualizar el idioma. Inténtalo de nuevo.",
    deleteFailed: "❌ No se pudo eliminar la cuenta. Inténtalo de nuevo.",
    deleteUnexpected: "❌ Error inesperado al eliminar la cuenta."
  },

  hu: {
    languageUpdated: "A nyelv sikeresen frissítve!",
    loginFirst: "Kérlek, jelentkezz be először!",
    logoutConfirm: "Biztosan ki szeretnél jelentkezni?",
    
    deleteConfirm1:
      "⚠️ Biztosan törölni szeretnéd a profilodat?\n\nEz véglegesen eltávolítja a fiókodat, profilodat, üzeneteidet, barátaidat és minden kapcsolódó adatot.",
    deleteConfirm2:
      "🚨 Ez a művelet VISSZAFORDÍTHATATLAN.\n\nA törölt adatok nem állíthatók vissza.\n\nBIZTOSAN folytatod?",
    
    deletingAccount: "Fiók törlése…",
    deleteProfileBtn: "🗑️ Profil törlése",

    logoutError: "Hiba történt kijelentkezéskor.",
    updateLangError: "Nem sikerült frissíteni a nyelvet.",
    deleteFailed: "❌ Nem sikerült törölni a fiókot.",
    deleteUnexpected: "❌ Váratlan hiba történt a törlés során."
  }
};

function tSystem(key) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  return systemSettingsTranslations[lang]?.[key]
    || systemSettingsTranslations.en[key]
    || key;
}

async function initSystemSettings() {
  const languageSelect = document.getElementById("languageSelect");
  const saveLangBtn = document.getElementById("saveLanguageBtn");

  // Preselect the current language
  const currentLang = localStorage.getItem("lang") || "en";
  languageSelect.value = currentLang;

  // 🔥 ADD THIS LINE (init scriptpools)
  window.scriptPools.setPoolLanguage(currentLang);
  
  await updateLanguageUI(currentLang);

  saveLangBtn.addEventListener("click", async () => {
  const newLang = languageSelect.value;

  // 1️⃣ Update source of truth
  localStorage.setItem("lang", newLang);
  window.scriptPools.setPoolLanguage(newLang);

  // 2️⃣ Make sure user exists
  if (!currentUser?.id) {
    alert(tSystem("loginFirst"));
    return;
  }

  const userId = currentUser.id;

  try {
    // 3️⃣ Persist to DB
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ language: newLang })
      .eq("id", userId);

    if (profileError) {
      console.error("Error updating profile language:", profileError);
    }

    const { error: tokenError } = await supabase
      .from("user_tokens")
      .update({ language: newLang })
      .eq("user_id", userId);

    if (tokenError) {
      console.error("Error updating user_tokens language:", tokenError);
    }

    // 4️⃣ Optional UX feedback
    alert(tSystem("languageUpdated"));

    // 5️⃣ HARD RESET into clean state
    window.location.href = "/index.html";

  } catch (err) {
    console.error("Unexpected error updating language:", err);
    alert(tSystem("updateLangError"));
  }
});
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  if (confirm(tSystem("logoutConfirm"))) {
    logoutUser();
  }
});

async function logoutUser() {
  try {
    // Remove the token for this user using global currentUser
    if (currentUser?.id) {
      const { error: tokenError } = await supabase
        .from("user_tokens")
        .delete()
        .eq("user_id", currentUser.id);

      if (tokenError) console.error("Failed to remove user token:", tokenError);
    }
  } catch (err) {
    console.error("Error removing token:", err);
  }

  // Sign out
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout failed:", error.message);
    alert(tSystem("logoutError"));
    return;
  }

  // 🔥 Clear app state
  const preferredLang = localStorage.getItem("lang") || "en";
  localStorage.clear();
  sessionStorage.clear();
  localStorage.setItem("lang", preferredLang);

  // Optional: hard reload to reset JS state
  window.location.href = "login.html";
}



//DELETE PROFILE
//DELETE PROFILE
//DELETE PROFILE
//DELETE PROFILE

const deleteProfileBtn = document.getElementById("deleteProfileBtn");

deleteProfileBtn.addEventListener("click", async () => {
  // First confirmation
  const firstConfirm = confirm(tSystem("deleteConfirm1"));

  if (!firstConfirm) return;

  // Second confirmation (stronger)
  const secondConfirm = confirm(tSystem("deleteConfirm2"));

  if (!secondConfirm) return;

  // Optional: disable button to prevent double-click
  deleteProfileBtn.disabled = true;
  deleteProfileBtn.textContent = tSystem("deletingAccount");

  try {
    const { error } = await supabase.functions.invoke("delete-user");

    if (error) {
      console.error("Delete error:", error);
      alert(tSystem("deleteFailed"));
      deleteProfileBtn.disabled = false;
      deleteProfileBtn.textContent = tSystem("deleteProfileBtn");
      return;
    }

     // Preserve preferred language
    const preferredLang = localStorage.getItem("lang") || "en";

    // Clean up client state
    await supabase.auth.signOut();
    localStorage.clear();
    sessionStorage.clear();
    localStorage.setItem("lang", preferredLang);

    // Redirect to landing / login
    window.location.href = "login.html";

  } catch (err) {
    console.error(err);
    alert(tSystem("deleteUnexpected"));
    deleteProfileBtn.disabled = false;
    deleteProfileBtn.textContent = "🗑️ Delete Profile";
  }
});

//#endregion

//#region WATCH ADS

const watchAdsTranslations = {
  en: {
    notLoggedIn: "User not logged in",

    dailyLimitReached: "Daily limit reached",
    sessionLimitReached: "Session limit reached",
    waitBeforeNextAd: "Please wait {seconds} seconds before watching another ad.",

    rewardEarned: "You earned {badges} badges and 3 XPs!",
    noAdAvailable: "No ad available right now. Try again later."
  },

  es: {
    notLoggedIn: "Usuario no conectado",

    dailyLimitReached: "Límite diario alcanzado",
    sessionLimitReached: "Límite de sesión alcanzado",
    waitBeforeNextAd: "Por favor espera {seconds} segundos antes de ver otro anuncio.",

    rewardEarned: "¡Has ganado {badges} insignias y 3 XP!",
    noAdAvailable: "No hay anuncios disponibles ahora mismo. Inténtalo más tarde."
  },

  hu: {
    notLoggedIn: "A felhasználó nincs bejelentkezve",

    dailyLimitReached: "Elérted a napi limitet",
    sessionLimitReached: "Elérted a munkamenet limitet",
    waitBeforeNextAd: "Kérlek várj {seconds} másodpercet a következő hirdetés előtt.",

    rewardEarned: "{badges} jelvényt és 3 XP-t kaptál!",
    noAdAvailable: "Jelenleg nincs elérhető hirdetés. Próbáld később."
  }
};

function tWatchAds(key, vars = {}) {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";
  let text =
    watchAdsTranslations[lang]?.[key] ||
    watchAdsTranslations.en[key] ||
    key;

  Object.keys(vars).forEach(k => {
    text = text.replace(`{${k}}`, vars[k]);
  });

  return text;
}
// ---------------------------
// Watch ads
// ---------------------------

const DAILY_CAP = 50;
const SESSION_CAP = 25;
const MIN_INTERVAL_MS = 20_000; // 20s
const BADGES_PER_AD = 2;

let sessionAdCount = 0;
const storage = localStorage;

// Your Rewarded Ad ID (for web fallback)
const WEB_REWARD_AMOUNT = BADGES_PER_AD;

// Helper functions
function todayKey() {
  return 'adBadge_' + new Date().toISOString().slice(0,10);
}

function loadAdCount() {
  return parseInt(storage.getItem(todayKey()) || '0', 10);
}

function saveAdCount(count) {
  storage.setItem(todayKey(), count);
}

function loadLastAdTime() {
  return parseInt(storage.getItem('lastAdAt') || '0', 10);
}

function saveLastAdTime(ts) {
  storage.setItem('lastAdAt', ts);
}

// -------------------- Reward Ad --------------------
async function showAdMobReward() {
  if (window.Capacitor && Capacitor.isNativePlatform()) {
    // ✅ Native bridge will call Kotlin, JS waits for reward callback
    return new Promise((resolve) => {
      window.onRewardEarned = (amount) => {
        resolve(amount);
      };
      window.NativeBridge.showRewardedAd();
    });
  } else {
    // Web fallback
    console.log("Web fallback: ad simulated, reward given");
    return Promise.resolve(WEB_REWARD_AMOUNT);
  }
}


// -------------------- Main Click Handler --------------------
async function handleWatchAdClick() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return alert(tWatchAds("notLoggedIn"));

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) return;

  const userId = profile.id;

  let dailyCount = loadAdCount();
  if (dailyCount >= DAILY_CAP) return alert(`${tWatchAds("dailyLimitReached")}: ${DAILY_CAP}`);
  if (sessionAdCount >= SESSION_CAP) return alert(`${tWatchAds("sessionLimitReached")}: ${SESSION_CAP}`);

  const lastAdAt = loadLastAdTime();
  const now = Date.now();
  if (now - lastAdAt < MIN_INTERVAL_MS) {
    const wait = Math.ceil((MIN_INTERVAL_MS - (now - lastAdAt))/1000);
    return alert(tWatchAds("waitBeforeNextAd", { seconds: wait }));
  }

  try {
    const reward = await showAdMobReward(); // wait until reward is earned
    await addBadges(userId, reward);
    await addXP(3);

    dailyCount++;
    sessionAdCount++;
    saveAdCount(dailyCount);
    saveLastAdTime(Date.now());

    alert(tWatchAds("rewardEarned", { badges: reward }));
  } catch (err) {
    console.warn("Ad failed or no reward:", err);
    alert(tWatchAds("noAdAvailable"));
  }
}

// -------------------- Attach to Buttons --------------------
document.querySelectorAll('.watchAdBtn').forEach(btn => {
  btn.addEventListener('click', function () {
    if (btn.disabled) return; // safety guard

    btn.disabled = true;
    btn.classList.add('disabled'); // optional styling

    handleWatchAdClick();

    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove('disabled');
    }, 5000); // 5 seconds
  });
});

const submitAndSupportBtn = document.getElementById('submitAndSupportBtnDCI');

submitAndSupportBtn.addEventListener('click', async () => {
  disableDailyCheckinButtons();
  const success = await handleSubmit();
  if (success) {
    try {
      await handleWatchAdClick(); // ✅ await to catch errors
    } catch (err) {
      console.error("Reward ad failed:", err);
    }
  } else {
    console.warn("Submit failed — not showing ad");
  }
});
//#endregion

//#region NOTIFICATIONS

// -------------- NOTIFICATION STATE --------------
const notificationState = {
  messages: false,
  friendRequests: false,
 // forumComments: false,
  localEvents: false,
  playground: false,
  challenges: false,

  lastSeenMessages: null, // ← added
  lastSeenFriends: null,   
 // lastSeenForum: null,
  lastSeenLocal: null,
};

// -------------- DOM ELEMENTS --------------
const dots = {
  profile: document.getElementById("profileDot"),
  communityLocal: document.getElementById("LocalDot"),
  messages: document.getElementById("messagesDot"),
  friends: document.getElementById("friendRequestsDot"),

 // communityMain: document.getElementById("communityDot"),
 // communityForum: document.getElementById("ForumDot"),
  
  playground: document.getElementById("playgroundDot"),
  challenges: document.getElementById("challengesDot"),
};

// -------------- SAVE / LOAD STATE --------------
function loadNotificationState() {
  const saved = localStorage.getItem("notificationState");
  if (saved) Object.assign(notificationState, JSON.parse(saved));

  // Initialize to current time if null (first page load)
  if (!notificationState.lastSeenMessages) {
    notificationState.lastSeenMessages = new Date().toISOString();
    saveNotificationState();
  }

  updateDots();
}

function saveNotificationState() {
  localStorage.setItem("notificationState", JSON.stringify(notificationState));
}

// -------------- UPDATE DOTS IN UI --------------
function updateDots() {
  // Messages
  dots.messages.style.display = notificationState.messages ? "inline-block" : "none";

  // Friend Requests
  dots.friends.style.display = notificationState.friendRequests ? "inline-block" : "none";

// Local Events
  dots.communityLocal.style.display = notificationState.localEvents ? "inline-block" : "none";

  // Profile = messages OR friendRequests
  dots.profile.style.display =
    notificationState.messages || notificationState.friendRequests|| notificationState.localEvents
      ? "inline-block"
      : "none";

  // Forum Comments
  //dots.communityForum.style.display = notificationState.forumComments ? "inline-block" : "none";

  // Main Community Dot = any community alert
  //dots.communityMain.style.display =
   // notificationState.forumComments 
   //   ? "inline-block"
   //   : "none";

  // Playground
  if (dots.playground) dots.playground.style.display = notificationState.playground ? "inline-block" : "none";

  // Challenges
  if (dots.challenges) dots.challenges.style.display = notificationState.challenges ? "inline-block" : "none";

}

// -------------- NOTIFICATION TRIGGERS --------------
function notify(type) {
  if (notificationState[type]) return;
  notificationState[type] = true;
  saveNotificationState();
  updateDots();
}

function clearNotification(type) {
  notificationState[type] = false;
  saveNotificationState();
  updateDots();
}

// --- Update challenge dots ---
async function updateChallengeDots() {
  if (!currentUser?.id) return;

  // Load current profile for xp_today
  const { data: profileData } = await supabase
    .from("profiles")
    .select("xp_today")
    .eq("id", currentUser.id)
    .single();

  const xpToday = profileData?.xp_today || 0;
  const xpGoal = 50;
  const xpClaimed = await isClaimed(currentUser.id, "daily_xp");

  // Lessons
  const { data: lessonRow } = await supabase
    .from("lessons_daily")
    .select("*")
    .eq("user_id", currentUser.id)
    .eq("date", todayUTC())
    .maybeSingle();

  const allLessonsDone = lessonRow ? lessonRow.animal && lessonRow.earth && lessonRow.health : false;
  const learnClaimed = await isClaimed(currentUser.id, "learn");

  // Set the dots individually
  const showChallengeDot = (xpToday >= xpGoal && !xpClaimed) || (allLessonsDone && !learnClaimed);
  const showPlaygroundDot = showChallengeDot; // same conditions as challenges

  if (showChallengeDot) notify("challenges");
  else clearNotification("challenges");

  if (showPlaygroundDot) notify("playground");
  else clearNotification("playground");
}


// ---------------- MESSAGES TAB STATE ----------------

// Optional heartbeat to handle sudden closes
let messagesHeartbeat = null;

window.isMessagesTabOpen = false;

window.setMessagesTabOpen = function(value) {
  window.isMessagesTabOpen = value;

  if (value) {
    startMessagesHeartbeat();
  } else {
    stopMessagesHeartbeat();
  }
};
// ---------------- HEARTBEAT ----------------
function startMessagesHeartbeat() {
  if (messagesHeartbeat) return;

  messagesHeartbeat = setInterval(() => {
    if (!isMessagesTabOpen) return;

    notificationState.lastSeenMessages = new Date().toISOString();
    saveNotificationState();
  }, 5000); // update every 5s while tab is open
}

function stopMessagesHeartbeat() {
  clearInterval(messagesHeartbeat);
  messagesHeartbeat = null;
}

// -------------- CLEAR WHEN USER OPENS THE SECTION --------------
window.clearSectionNotifications = function (section) {
  const now = new Date().toISOString();

  if (section === "messages") {
    setMessagesTabOpen(true);

    // Everything visible is considered read
    notificationState.lastSeenMessages = now;
    clearNotification("messages");
  }

  if (section === "friends") {
    notificationState.lastSeenFriends = now;
    clearNotification("friendRequests");
  }

  //if (section === "forum") {
   // notificationState.lastSeenForum = now;
   // clearNotification("forumComments");
  //}

  if (section === "local") {
    notificationState.lastSeenLocal = now;
    clearNotification("localEvents");
  }

  saveNotificationState();
};

// -------------- WHEN USER LEAVES MESSAGES TAB --------------
window.onMessagesTabClosed = function () {
  const now = new Date().toISOString();

  setMessagesTabOpen(false);

  // Mark everything up to this moment as read
  notificationState.lastSeenMessages = now;
  saveNotificationState();
};

// -------------- SUPABASE REALTIME: MESSAGES --------------
async function subscribeToMessages(supabase, currentUserId) {
  supabase
    .channel("messages")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages" },
      (payload) => {
        const message = payload.new;

        if (message.sender_id === currentUserId) return;
        if (blockedUserIds.includes(message.sender_id)) return;

        // If user is reading messages → update lastSeen, no dot
        if (isMessagesTabOpen) {
          if (
            !notificationState.lastSeenMessages ||
            message.created_at > notificationState.lastSeenMessages
          ) {
            notificationState.lastSeenMessages = message.created_at;
            saveNotificationState();
          }
          return;
        }

        // Notify only if newer than lastSeen
        if (
          !notificationState.lastSeenMessages ||
          message.created_at > notificationState.lastSeenMessages
        ) {
          notify("messages");
        }
      }
    )
    .subscribe();
}

// -------------- MESSAGES ON LOAD --------------
async function checkMessages(supabase, currentUserId) {
  const lastSeen = notificationState.lastSeenMessages;

  let query = supabase
    .from("messages")
    .select("created_at, sender_id")
    .neq("sender_id", currentUserId)
    .order("created_at", { ascending: false })
    .limit(5);

  if (lastSeen) query = query.gt("created_at", lastSeen);

  const { data, error } = await query;
  if (error || !data) return;

  const unblocked = data.filter(
    (msg) => !blockedUserIds.includes(msg.sender_id)
  );

  if (unblocked.length > 0) {
    notify("messages");
  }
}


// -------------- FRIEND REQUESTS ON LOAD --------------
async function checkFriendRequests(supabase, currentFriendCode) {
  const lastSeen = notificationState.lastSeenFriends;

  let query = supabase
    .from("friend_requests")
    .select("created_at")
    .eq("receiver_friend_code", currentFriendCode.trim())
    .eq("status", "pending")
    .order("created_at", { ascending: false })
    .limit(3);

  if (lastSeen) query = query.gt("created_at", lastSeen);

  const { data } = await query;
  if (data && data.length > 0) notify("friendRequests");
}

// -------------- FORUM COMMENTS ON LOAD --------------
//async function checkForumComments(supabase, currentUserId) {
 // const lastSeen = notificationState.lastSeenForum;

 // const blocksRes = await supabase
 //   .from("forum_blocks")
 //   .select("id")
 //   .eq("user_id", currentUserId);

 // const blockIds = blocksRes.data?.map((b) => b.id) || [];
 // if (!blockIds.length) return;

 // let query = supabase
 //   .from("forum_comments")
 //   .select("created_at")
 //   .in("block_id", blockIds)
 //   .order("created_at", { ascending: false })
 //   .limit(5);

 // if (lastSeen) query = query.gt("created_at", lastSeen);

 // const { data } = await query;
 // if (data && data.length > 0) notify("forumComments");
//}

// -------------- LOCAL EVENTS ON LOAD --------------
async function checkLocalEvents(supabase, locationId) {
  if (!locationId) return;

  const lastSeen = notificationState.lastSeenLocal;

  let query = supabase
    .from("community_events")
    .select("created_at, user_id")
    .eq("location_id", locationId)
    .neq("user_id", currentUser.id)  // <-- ignore own events
    .order("created_at", { ascending: false })
    .limit(3);

  if (lastSeen) query = query.gt("created_at", lastSeen);

  const { data } = await query;
  if (data && data.length > 0) notify("localEvents");
}

// -------------- INIT (call this AFTER supabase client is created) --------------
async function initNotifications(supabase, currentUserId, friendcode, locationId) {
  loadNotificationState();

  // realtime: messages
  subscribeToMessages(supabase, currentUserId);

  // fetch-on-load:
  checkMessages(supabase, currentUserId); 
  checkFriendRequests(supabase, friendcode);
 // checkForumComments(supabase, currentUserId);
  checkLocalEvents(supabase, locationId);
  
  // NEW: Playground & Challenges
  updateChallengeDots(supabase, currentUserId);
}

window.initNotifications = initNotifications;

// On page load (and you can repeat periodically if needed
  setInterval(async () => {
    await supabase
      .from('user_status')
      .upsert({
        user_id: currentUser.id,
        app_open: true,
        last_seen: new Date().toISOString(),
      }, { onConflict: ['user_id'] });
  }, 60_000); // update every 60s

  async function sendTokenToAndroid() {
  const { data } = await supabase.auth.getSession();
  if (!data.session) return;

  const token = data.session.access_token;

// Fallback: only call NativeBridge if it exists
  if (typeof NativeBridge !== 'undefined' && NativeBridge.sendUserToken) {
    NativeBridge.sendUserToken(token);
  }
}

// Detect device type
function getDeviceType() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "ios";
  return "web";
}


// --- insertDeviceRow function ---
async function insertDeviceRow(token) {
  try {
    // Get session asynchronously
    const { data, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      return;
    }

    if (!data.session) {
      return;
    }

    const userId = data.session.user.id;
    const deviceType = getDeviceType();

    const { error: insertError } = await supabase
      .from('user_tokens')
      .upsert(
        {
          user_id: userId,
          device_token: token,
          device_type: deviceType,
          language: localStorage.getItem('lang') || 'en',
        },
        { onConflict: ['user_id'] }
      );
  } catch (e) {
    alert("Unexpected error: " + e.message);
  }
}

// --- onAndroidTokenReceived function ---
window.onAndroidTokenReceived = function(token) {
  insertDeviceRow(token);
};

//#endregion

//#region DOM
//--------------------------
// INIT
//--------------------------
document.addEventListener("DOMContentLoaded", async () => {
  showLoading(true);

  try {
    /* =========================
       PHASE 1 — CRITICAL LOAD
       ========================= */
    await fetchAllData();            // sets currentUser + currentProfile
    await renderProfile();           // user must see something ASAP
    await handleEarlyUserUI(currentProfile); // shows/hides elements based on login state
    await initSystemSettings();


    /* =========================
       PHASE 2 — IMPORTANT (PARALLEL)
       ========================= */
    await Promise.all([
      initExtraLessons(),
    //  loadWinnersFromData(),
      setNewsBox(),
      initHealthPaths(),
      loadRecipes(),
      loadFriendsTab()
    ]);


    /* =========================
       PHASE 3 — USER-DEPENDENT SETUP
       ========================= */
    if (currentUser?.id) {
      await displayAchievementsSettings(currentUser.id);
    }

    blockedUserIds = await getBlockedUserIds(supabase, currentUser.id);


    /* =========================
       PHASE 4 — DAILY CHECK-IN
       ========================= */
    try {
      getTodaysLessonFromProfile(currentProfile);
      renderTodaysLesson();
      renderYesterdaysQuiz(currentProfile);
      window.handleSubmit = handleSubmit;
    } catch (err) {
      console.error("Daily Check-in setup error:", err);
    }

    showLoading(false);        

    /* =========================
       PHASE 5 — COMPARISON
       ========================= 
    if (currentProfile) {
      injectComparisonSentences(currentProfile);
    } else {
      console.warn("currentProfile not available — comparison skipped.");
    }
*/
    /* =========================
       PHASE 6 — MEAL ART
       ========================= */
    setupTabs();
    setupUploadButton();
    setupMealUploadForm();
    renderMeals(currentMeals);
    
    if (currentUser?.id) {
  await setupMondayVoting(currentUser.id);
    }

    updateMealArtNotes(new Date().getDay());


    /* =========================
       PHASE 7 — COMMUNITY (PARALLEL)
       ========================= */
    await Promise.all([
      initCommunityModule(),
     // loadForumBlocks(),
      loadChatList()
    ]);


    /* =========================
       PHASE 8 — MENTORSHIP
       ========================= 
    await Promise.all([
      setupMentorshipUI(),
      setupCard(),
      loadMentors(),
      checkAndToggleMentorUI()
    ]);
*/

    /* =========================
       PHASE 9 — LEADERBOARDS
       ========================= */
    await fetchAllLeaderboards();


    /* =========================
       PHASE 10 — RECIPE UPLOAD
       ========================= */
    setupRecipeUploadForm();


    /* =========================
       PHASE 11 — ACHIEVEMENTS & SHOP
       ========================= */
    if (currentUser?.id) {
      await Promise.all([
        displayAchievementsPage(currentUser.id),
        setupShop(currentUser.id)
      ]);
    }


    /* =========================
       PHASE 12 — CHALLENGES
       ========================= */
    if (currentUser?.id) {
      await Promise.all([
        loadDailyXpChallenge(currentUser.id),
        loadEncourageChallenge(),
        loadMindfulPopupState(currentUser.id),
        loadLessonChallenge(),
        checkLearnProgress(currentUser.id),
        loadFriendSelect(currentUser.id)
      ]);

      const challenges = [
        { key: "daily_xp", btnId: "daily-xp-claim" },
        { key: "learn", btnId: "learnClaimBtn" },
        { key: "mindful", btnId: "mindfulStartBtn" },
        { key: "encourage", btnId: "encourageClaimBtn" }
      ];

      for (const c of challenges) {
        const claimed = await isClaimed(currentUser.id, c.key);
        const btn = document.getElementById(c.btnId);
        if (btn && claimed) btn.disabled = true;
      }
    }


    /* =========================
       PHASE 13 — NOTIFICATIONS
       ========================= */
    initNotifications(
      supabase,
      currentUser.id,
      currentProfile.friend_code,
      joinedLocationId
    );
      
    /* =========================
       PHASE 14 — BACKGROUND TASKS
       ========================= 
    requestIdleCallback(async () => {
      await checkAchievementSuggestions();
      await sendTokenToAndroid();

      await supabase
        .from("user_status")
        .upsert({
          user_id: currentUser.id,
          app_open: true,
          last_seen: new Date().toISOString()
        }, { onConflict: ['user_id'] });
    });
*/
const requestIdle = window.requestIdleCallback || function (cb) {
  return setTimeout(() => cb({
    didTimeout: false,
    timeRemaining: () => 0
  }), 1);
};

requestIdle(async () => {
  try {
    await checkAchievementSuggestions();
    await sendTokenToAndroid();

    await supabase
      .from("user_status")
      .upsert({
        user_id: currentUser.id,
        app_open: true,
        last_seen: new Date().toISOString()
      }, { onConflict: ['user_id'] });

  } catch (err) {
    console.error("Error in idle task:", err);
  }
});

    /* =========================
       PHASE 15 — FINAL UI CLEANUP
       ========================= */

  } catch (err) {
    console.error("Error initializing mainpage:", err);
    showLoading(false);
  }

  /* =========================
       PHASE 16 — CHALLENGES MONITOR
       ========================= */
    updateChallengeDots();
});

//#endregion

//#region OnBoarding


const characterTips = {

  pet: {
    en: [
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
    avatar: "images/natalie.jpg",
  sources: [
    {
      type: "wikipedia",
      label: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Natalie_Portman"
    },
    {
      type: "video",
      label: "Natalie Portman on veganism",
      url: "https://www.instagram.com/reel/DJXyfTzRDtD/"
    }
  ],
credibilityLevel: "verified_primary_source",

credibilityLabel: {
  en: "Verified primary source",
  es: "Fuente primaria verificada",
  hu: "Hiteles elsődleges forrás"
},

credibilityColor: "green"
  },

  {
  name: {
    en: "Albert Einstein",
    es: "Albert Einstein",
    hu: "Albert Einstein"
  },
  title: {
    en: "Theoretical Physicist",
    es: "Físico teórico",
    hu: "Elméleti fizikus"
  },
  quote: {
    en: "It is my view that the vegetarian manner of living, by its purely physical effect on the human temperament, would most beneficially influence mankind.",
    es: "Creo que la forma de vida vegetariana, por su efecto puramente físico en el temperamento humano, influiría muy beneficiosamente en la humanidad.",
    hu: "Úgy vélem, hogy a vegetáriánus életmód, pusztán fizikai hatása révén az emberi természetre, nagyon kedvezően befolyásolná az emberiséget."
  },
  avatar: "images/einstein.jpg",
  sources: [
  {
    type: "letter",
    label: "Letter to Hans Mühsam (1954)",
    url: "https://www.ivu.org/history/northam20a/einstein.html"
  },
  {
    type: "wikipedia",
    label: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Albert_Einstein"
  }
],
credibilityLevel: "verified_primary_source",
credibilityLabel: {
  en: "Verified primary source",
  es: "Fuente primaria verificada",
  hu: "Hiteles elsődleges forrás"
},
credibilityColor: "green"
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
    avatar: "images/patrik.jpg",
    sources: [
    {
      type: "wikipedia",
      label: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Patrik_Baboumian"
    },
    {
      type: "video",
      label: "The Game Changers (clip)",
      url: "https://www.youtube.com/watch?v=6mu0b6npsKo"
    }
  ],
credibilityLevel: "verified_paraphrase",
credibilityLabel: {
  en: "Verified paraphrase",
  es: "Paráfrasis verificada",
  hu: "Hitelesített parafrázis"
},
credibilityColor: "green"
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
      en: "I have from an early age abjured the use of meat, and the time will come when men such as I will look upon the murder of animals as they now look upon the murder of men.",
      es: "Desde una edad temprana he renunciado al consumo de carne, y llegará el día en que hombres como yo consideren el asesinato de animales como hoy se considera el asesinato de seres humanos.",
      hu: "Fiatal koromtól kezdve elutasítottam a hús fogyasztását, és eljön az idő, amikor az olyan emberek, mint én, ugyanúgy tekintenek majd az állatok megölésére, mint ma az emberek megölésére."
    },
    avatar: "images/davinci.jpg",

  sources: [
    {
      type: "primary_reference",
      label: "Andrea Corsali letter (1516, referenced in historical compilations)",
      url: "https://www.ivu.org/history/davinci/index.html"
    },
    {
      type: "wikipedia",
      label: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
    }
  ],
credibilityLevel: "attributed_nonverbatim",
credibilityLabel: {
  en: "Attributed historical source",
  es: "Fuente histórica atribuida",
  hu: "Történelmi tulajdonítás"
},
credibilityColor: "orange"
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
  avatar: "images/pythagoras.jpg",

  sources: [
    {
      type: "historical_context",
      label: "Pythagorean philosophy (secondary ancient sources)",
      url: "https://en.wikipedia.org/wiki/Pythagoreanism"
    },
    {
      type: "wikipedia",
      label: "Pythagoras – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pythagoras"
    }
  ],
credibilityLevel: "unverified_historical_attribution",
credibilityLabel: {
  en: "Philosophical attribution",
  es: "Atribución filosófica",
  hu: "Filozófiai tulajdonítás"
},
credibilityColor: "orange"
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
    hu: "Mindannyiunknak vannak döntései. Én a szeretetet választom, tudatos vagyok abban, mit támogatok, és nem támogatok az állatokat megölő és kínzó vállalatokat."
  },
  avatar: "images/hamilton.jpg",

  sources: [
    {
      type: "interview",
      label: "Plant-based diet interview (performance & ethics)",
      url: "https://www.youtube.com/watch?v=cbo_g6JlYcY"
    },
    {
      type: "wikipedia",
      label: "Lewis Hamilton – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lewis_Hamilton"
    }
  ],
credibilityLevel: "verified_paraphrase",
credibilityLabel: {
  en: "Verified paraphrase",
  es: "Paráfrasis verificada",
  hu: "Hitelesített parafrázis"
},
credibilityColor: "green"
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
  avatar: "images/gandhi.jpg",

  sources: [
    {
      type: "wikipedia",
      label: "Mahatma Gandhi – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
    },
    {
      type: "philosophical_writing",
      label: "Gandhi – My Faith in Vegetarianism (essay)",
      url: "https://www.mkgandhi.org/health/diet_reform/01my_faith_in_vegetarianism.php"
    }
  ],
  credibilityLevel: "unverified_historical_attribution",
  credibilityLabel: {
    en: "Philosophical attribution",
    es: "Atribución filosófica",
    hu: "Filozófiai tulajdonítás"
  },
  credibilityColor: "orange"
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
  avatar: "images/tolstoy.jpg",

  sources: [
    {
      type: "philosophical_work",
      label: "The First Step (essay on vegetarianism)",
      url: "https://en.wikisource.org/wiki/The_First_Step"
    },
    {
      type: "wikipedia",
      label: "Leo Tolstoy – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Leo_Tolstoy"
    }
  ],

  credibilityLevel: "attributed_nonverbatim",
  credibilityLabel: {
    en: "Philosophical attribution",
    es: "Atribución filosófica",
    hu: "Filozófiai tulajdonítás"
  },
  credibilityColor: "orange"
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
  avatar: "images/buddha.jpg",

  sources: [
    {
      type: "modern_interpretation",
      label: "Modern interpretation of Buddhist teachings on animal ethics",
      url: "https://medium.com/elephantspirituality/what-the-buddha-said-about-animal-rights-why-its-in-our-interest-to-care-40eab1eea936"
    },
    {
      type: "wikipedia",
      label: "Buddha – Wikipedia",
      url: "https://en.wikipedia.org/wiki/Gautama_Buddha"
    }
  ],
  credibilityLevel: "attributed_nonverbatim",
  credibilityLabel: {
    en: "Scriptural attribution",
    es: "Atribución escritural",
    hu: "Szöveghagyományi tulajdonítás"
  },
  credibilityColor: "orange"
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
  avatar: "images/plato.jpg",

  sources: [
    {
  type: "secondary_scholarly_article",
  label: "Socrates, Plato and vegetarian themes in Ancient philosophy – Polytechnique Insights",
  url: "https://www.polytechnique-insights.com/en/braincamps/society/nutrition-disease-biodiversity-do-we-need-a-new-relationship-with-animals/socrates-to-plato-bring-vegetarian-at-the-time-of-the-ancients/"
    },
    {
      type: "philosophical_works",
      label: "Plato – Dialogues (Republic, Phaedo, Timaeus)",
      url: "https://en.wikipedia.org/wiki/Plato"
    }
  ],
  credibilityLevel: "unverified_historical_attribution",
  credibilityLabel: {
    en: "Philosophical attribution",
    es: "Atribución filosófica",
    hu: "Filozófiai tulajdonítás"
  },
  credibilityColor: "orange"
}
],



success: [
  {
    title: {
      en: "Olympic champion mindset",
      es: "Mentalidad de campeón olímpico",
      hu: "Olimpiai bajnok mentalitás"
    },
    story: {
  en: "In 2010, Novak Djokovic struggled with health issues and discovered a gluten intolerance. He switched to a plant-based, gluten-free diet, which dramatically improved his energy, recovery, and performance. In 2024, just weeks before the Olympics, he suffered a serious knee injury (torn meniscus) and underwent surgery. Most athletes would have stopped, but he recovered quickly and returned to compete. At 37 years old, he won the Olympic gold medal in men’s singles in Paris, becoming the oldest Olympic tennis champion in the individual men’s category of all time.",

  es: "En 2010, Novak Djokovic tenía problemas de salud y descubrió que era intolerante al gluten. Cambió a una dieta basada en plantas y sin gluten, lo que mejoró drásticamente su energía, recuperación y rendimiento. En 2024, pocas semanas antes de los Juegos Olímpicos, sufrió una grave lesión en la rodilla (rotura del menisco) y se sometió a una cirugía. La mayoría de los atletas se habrían detenido, pero él se recuperó rápidamente y volvió a competir. A los 37 años, ganó la medalla de oro olímpica en individuales masculinos en París, convirtiéndose en el tenista olímpico más veterano de la historia en la categoría individual masculina.",

  hu: "2010-ben Novak Djokovic egészségügyi problémákkal küzdött, és felfedezte, hogy gluténérzékeny. Növényi alapú, gluténmentes étrendre váltott, ami jelentősen javította az energiáját, a regenerációját és a teljesítményét. 2024-ben, néhány héttel az olimpia előtt súlyos térdsérülést szenvedett (meniszkuszszakadás), és műtéten esett át. A legtöbb sportoló feladta volna, de ő gyorsan felépült és visszatért a versenyzéshez. 37 évesen olimpiai aranyérmet nyert férfi Párizsban, ezzel minden idők legidősebb olimpiai teniszbajnoka lett az egyéni férfi kategóriában."
},
    image: "images/success/djokovic.jpg",

  learnMore: {
    en: {
      title: "Learn more",
      url: "https://www.thecitizen.in/sport/novak-djokovic-has-scripted-history-1055745"
    },
    es: {
      title: "Saber más",
      url: "https://www.thecitizen.in/sport/novak-djokovic-has-scripted-history-1055745"
    },
    hu: {
      title: "További információ",
      url: "https://www.thecitizen.in/sport/novak-djokovic-has-scripted-history-1055745"
    }
  }
  },

{
  title: {
    en: "Pushing limits at any age",
    es: "Superar límites a cualquier edad",
    hu: "Határok áttörése bármely életkorban"
  },
  story: {
  en: "Fauja Singh is a long-distance runner who became a global symbol of endurance and discipline by taking up running at the age of 89. He followed a plant-based vegetarian diet and built a lifestyle based on simplicity, walking, and consistency. He went on to complete marathons well past the age of 100, finishing a full marathon in Toronto at age 100 and continuing to race until around 101, proving that physical limits can be challenged at any stage of life. He passed away at the age of 114 in a road accident in India.",

  es: "Fauja Singh es un corredor de larga distancia que se convirtió en un símbolo mundial de resistencia y disciplina al comenzar a correr a los 89 años. Sigue una dieta vegetariana basada en plantas y construyó su estilo de vida en la simplicidad, la caminata y la constancia. Llegó a completar maratones con más de 100 años, finalizando un maratón completo en Toronto a los 100 años y compitiendo hasta aproximadamente los 101, demostrando que los límites físicos pueden desafiarse en cualquier etapa de la vida. Falleció a los 114 años en un accidente de tráfico en India.",

  hu: "Fauja Singh hosszútávfutó, aki az állóképesség és fegyelem globális szimbólumává vált azzal, hogy 89 évesen kezdett el futni. Növényi alapú vegetáriánus étrendet követett, és életmódját az egyszerűség, a séta és a következetesség határozta meg. 100 éves kora felett is teljesített maratonokat, Torontóban 100 évesen futotta le a teljes maratont, és nagyjából 101 éves koráig versenyzett, bizonyítva, hogy a fizikai határok bármely életkorban kitolhatók. 114 évesen közúti balesetben hunyt el Indiában."
},
  image: "images/success/fauja.jpg",

  learnMore: {
    en: {
      title: "Learn more",
      url: "https://en.wikipedia.org/wiki/Fauja_Singh"
    },
    es: {
      title: "Saber más",
      url: "https://en.wikipedia.org/wiki/Fauja_Singh"
    },
    hu: {
      title: "További információ",
      url: "https://en.wikipedia.org/wiki/Fauja_Singh"
    }
  }
},

{
  title: {
    en: "Outliving a terminal diagnosis",
    es: "Sobrevivir a un diagnóstico terminal",
    hu: "Túlélni egy végzetes diagnózist"
  },
  story: {
    en: "Stamatis Moraitis lived in the United States when he was diagnosed with lung cancer and given only 6–9 months to live. Instead of continuing treatment, he returned to his home island of Ikaria. There, he adopted a low-stress lifestyle, reconnected with friends and family, and followed a mostly plant-based diet typical of Blue Zones. He not only survived but lived around 40 more years, passing away at 102. Ikaria is known as a Blue Zone, where people commonly live longer due to strong community, low stress, and plant-based eating.",
    
    es: "Stamatis Moraitis vivía en Estados Unidos cuando fue diagnosticado con cáncer de pulmón y le dieron solo 6–9 meses de vida. En lugar de continuar el tratamiento, regresó a su isla natal, Ikaria. Allí adoptó un estilo de vida sin estrés, se reconectó con su comunidad y siguió una dieta mayormente vegetal típica de las Zonas Azules. No solo sobrevivió, sino que vivió unos 40 años más, falleciendo a los 102 años.",
    
    hu: "Stamatis Moraitis az Egyesült Államokban élt, amikor tüdőrákot diagnosztizáltak nála, és mindössze 6–9 hónapot adtak neki. A kezelések folytatása helyett visszatért szülőszigetére, Ikaria. Ott stresszmentesebb életet élt, újra kapcsolódott a közösségéhez, és a Kék Zónákra jellemző, főként növényi étrendet követte. Nemcsak túlélte a betegséget, hanem még körülbelül 40 évig élt, és 102 évesen hunyt el."
  },
  image: "images/success/moraitis.jpg",
  learnMore: {
    en: {
      title: "Learn more",
      url: "https://www.bluezones.com/exploration/ikaria-greece/"
    },
    es: {
      title: "Saber más",
      url: "https://www.bluezones.com/exploration/ikaria-greece/"
    },
    hu: {
      title: "További információ",
      url: "https://www.bluezones.com/exploration/ikaria-greece/"
    }
  }
},

{
  title: {
    en: "Rethinking strength and health",
    es: "Replanteando la fuerza y la salud",
    hu: "Az erő és egészség újragondolása"
  },
  story: {
    en: "Arnold Schwarzenegger built his physique by consuming large amounts of meat and eggs during his bodybuilding years. Later in life, he faced serious heart issues and underwent multiple surgeries. After that, he shifted toward a mostly plant-based diet to improve his health and reduce cholesterol. Now in his 70s, he remains active and strong, with improved heart health and significantly lower cholesterol levels.",
    
    es: "Arnold Schwarzenegger construyó su físico consumiendo grandes cantidades de carne y huevos durante sus años como culturista. Más tarde enfrentó graves problemas cardíacos y pasó por varias cirugías. Después, cambió hacia una dieta mayormente vegetal para mejorar su salud y reducir el colesterol. Ahora, con más de 70 años, sigue activo y fuerte, con una mejor salud cardiovascular y niveles de colesterol significativamente más bajos.",
    
    hu: "Arnold Schwarzenegger testépítő évei alatt nagy mennyiségű húst és tojást fogyasztott az izomépítéshez. Később súlyos szívproblémákkal szembesült, és több műtéten is átesett. Ezután nagyrészt növényi alapú étrendre váltott, hogy javítsa egészségét és csökkentse a koleszterinszintjét. Ma, 70 felett is aktív és erős, javult szív- és érrendszeri egészséggel és jelentősen alacsonyabb koleszterinszinttel."
  },
  image: "images/success/arnold.jpg",
  learnMore: {
    en: {
      title: "Learn more",
      url: "https://www.youtube.com/watch?v=0L5SZLUmnYA"
    },
    es: {
      title: "Saber más",
      url: "https://www.youtube.com/watch?v=0L5SZLUmnYA"
    },
    hu: {
      title: "További információ",
      url: "https://www.youtube.com/watch?v=0L5SZLUmnYA"
    }
  }
},

{
  title: {
    en: "Built for strength, powered by plants",
    es: "Construido para la fuerza, alimentado por plantas",
    hu: "Erőre építve, növényekből táplálva"
  },
  story: {
    en: "There are not many stories about elite bodybuilders raised without meat. Nimai Delgado was raised vegetarian and later fully adopted a plant-based vegan lifestyle as an adult. He went on to build a professional bodybuilding physique, proving that high-level muscle growth and strength are possible on a plant-based diet without relying on meat or animal products.",

    es: "No hay muchas historias de culturistas de élite criados sin carne. Nimai Delgado fue criado como vegetariano y más tarde adoptó completamente un estilo de vida vegano. Llegó a desarrollar un físico de culturista profesional, demostrando que el crecimiento muscular y la fuerza son posibles con una dieta basada en plantas.",

    hu: "Kevés történet van olyan élsportoló testépítőkről, akik hús nélkül nőttek fel. Nimai Delgado vegetáriánusként nevelkedett, majd felnőttként teljesen vegán életmódra váltott. Profi testépítő fizikumot épített, bizonyítva, hogy az izomépítés és az erő növényi étrenddel is elérhető."
  },
  image: "images/success/nimai.jpg",
  learnMore: {
    en: {
      title: "Learn more",
      url: "https://www.greatveganathletes.com/nimai-delgado-vegan-bodybuilder/"
    },
    es: {
      title: "Saber más",
      url: "https://www.greatveganathletes.com/nimai-delgado-vegan-bodybuilder/"
    },
    hu: {
      title: "További információ",
      url: "https://www.greatveganathletes.com/nimai-delgado-vegan-bodybuilder/"
    }
  }
},

{
  title: {
    en: "Crossing the Atlantic through pure endurance",
    es: "Cruzando el Atlántico con pura resistencia",
    hu: "Az Atlanti-óceán meghódítása tiszta kitartással"
  },
  story: {
    en: "Gábor Rakonczay is an extreme adventurer and endurance athlete who pushed human limits by crossing the Atlantic Ocean in a small rowing boat powered only by human strength. One of his most famous expeditions lasted around 75 days at sea, facing storms, exhaustion, isolation, and complete dependence on his own physical and mental endurance. He is widely associated with a disciplined, plant-based lifestyle and is often described as following a vegan or plant-focused diet during his endurance challenges.",

    es: "Gábor Rakonczay es un aventurero extremo y atleta de resistencia que llevó los límites humanos al cruzar el océano Atlántico en un pequeño bote de remo impulsado únicamente por fuerza humana. Una de sus expediciones más famosas duró alrededor de 75 días en el mar, enfrentando tormentas, agotamiento, aislamiento y una dependencia total de su propia resistencia física y mental. Está asociado con un estilo de vida disciplinado y basado en plantas, y a menudo se le describe como vegano o con una alimentación vegetal durante sus desafíos.",

    hu: "Rakonczay Gábor magyar extrém sportoló és felfedező, aki az emberi kitartás határait feszegette azzal, hogy egy kis evezős hajóval átkelt az Atlanti-óceánon, kizárólag emberi erővel hajtva. Egyik legismertebb útja körülbelül 75 napig tartott a tengeren, viharokkal, kimerültséggel, elszigeteltséggel és teljes önellátással. Tudatos, fegyelmezett életmódot követ, és gyakran növényi alapú vagy vegánként említett étrenddel hozzák összefüggésbe az extrém kihívások során."
},
  image: "images/success/rakonczay.jpg",
  learnMore: {
    en: {
      title: "Learn more",
      url: "https://hu.wikipedia.org/wiki/Rakonczay_G%C3%A1bor"
    },
    es: {
      title: "Saber más",
      url: "https://hu.wikipedia.org/wiki/Rakonczay_G%C3%A1bor"
    },
    hu: {
      title: "További információ",
      url: "https://hu.wikipedia.org/wiki/Rakonczay_G%C3%A1bor"
    }
  }
},

{
  title: {
    en: "Ultra endurance on a plant-based path",
    es: "Ultra resistencia con alimentación vegetal",
    hu: "Ultrakitartás növényi alapokon"
  },
  story: {
    en: "Scott Jurek is one of the most successful ultramarathon runners in the world and a defining figure in endurance sports. He dominated the Western States 100-Mile Endurance Run, winning it seven consecutive times between 1999 and 2005, competing against the toughest ultra runners on the planet. In 2015, he set a supported fastest known time on the Appalachian Trail, running the entire 3,500 km route in 46 days, 8 hours, and 7 minutes. Throughout his career, he has followed a fully plant-based vegan diet, showing that elite endurance performance is possible without animal products.",

    es: "Scott Jurek es uno de los corredores de ultramaratón más exitosos del mundo y una figura clave en los deportes de resistencia. Dominó la Western States 100-Mile Endurance Run, ganándola siete veces consecutivas entre 1999 y 2005, compitiendo contra los mejores corredores de ultra distancia del planeta. En 2015, estableció el récord de velocidad asistido en el Appalachian Trail, recorriendo los 3.500 km en 46 días, 8 horas y 7 minutos. A lo largo de su carrera ha seguido una dieta vegana basada en plantas, demostrando que el máximo rendimiento en resistencia es posible sin productos animales. ",

    hu: "Scott Jurek a világ egyik legsikeresebb ultramaraton futója és az állóképességi sportok meghatározó alakja. Hét egymást követő alkalommal nyerte meg a Western States 100 mérföldes versenyt 1999 és 2005 között, a világ legerősebb ultrafutóival versenyezve. 2015-ben rekordidőt állított fel az Appalachian Trail-en, amelyet 46 nap 8 óra és 7 perc alatt teljesített (kb. 3500 km). Karrierje során végig vegán, növényi alapú étrendet követett, bizonyítva, hogy a csúcsteljesítmény állóképességi sportban is elérhető állati eredetű termékek nélkül."
  },
  image: "images/success/jurek.jpg",
  learnMore: {
    en: {
      title: "Learn more",
      url: "https://en.wikipedia.org/wiki/Scott_Jurek"
    },
    es: {
      title: "Saber más",
      url: "https://en.wikipedia.org/wiki/Scott_Jurek"
    },
    hu: {
      title: "További információ",
      url: "https://en.wikipedia.org/wiki/Scott_Jurek"
    }
  }
},

{
  "title": {
    "en": "Climbing without limits or safety",
    "es": "Escalar sin límites ni seguridad",
    "hu": "Mászás határok és biztosítás nélkül"
  },
  "story": {
    "en": "Alex Honnold is one of the most famous rock climbers in the world, known for pushing the limits of what is physically and mentally possible in climbing. In 2017, he achieved one of the most extraordinary feats in sports history by free soloing El Capitan in Yosemite National Park — climbing the 900-meter vertical granite wall without ropes, protection, or safety equipment. Honnold is also known for his disciplined and minimalist lifestyle, and he has spoken about leaning toward a plant-based diet and a health-focused, environmentally conscious way of living.",

    "es": "Alex Honnold es uno de los escaladores más famosos del mundo, conocido por llevar los límites de lo posible en la escalada. En 2017 logró una de las hazañas más extraordinarias de la historia del deporte al escalar en free solo El Capitán en el Parque Nacional de Yosemite — una pared de granito de 900 metros sin cuerdas, protección ni ningún equipo de seguridad. Honnold también es conocido por su estilo de vida disciplinado y minimalista, y ha hablado de su interés por una alimentación basada en plantas y un estilo de vida saludable y consciente con el medio ambiente.",

    "hu": " a világ egyik legismertebb sziklamászója, aki az emberi határok végső teszteléséről vált híressé. 2017-ben történelmi teljesítményt ért el, amikor biztosítókötél és védőfelszerelés nélkül, free solo módban megmászta az El Capitan 900 méter magas gránitfalát a Yosemite Nemzeti Parkban. Honnold fegyelmezett, minimalista életmódjáról is ismert, és nyilatkozatai szerint közel áll a növényi alapú étrendhez és egy egészségtudatos, környezettudatos életfelfogáshoz."
  },
  "image": "images/success/honnold.jpg",
  "learnMore": {
    "en": {
      "title": "Learn more",
      "url": "https://en.wikipedia.org/wiki/Alex_Honnold"
    },
    "es": {
      "title": "Saber más",
      "url": "https://en.wikipedia.org/wiki/Alex_Honnold"
    },
    "hu": {
      "title": "További információ",
      "url": "https://en.wikipedia.org/wiki/Alex_Honnold"
    }
  }
},

{
  "title": {
    "en": "Swimming beyond the limits of age",
    "es": "Nadando más allá de los límites de la edad",
    "hu": "Úszás az életkor határain túl"
  },
  "story": {
    "en": "Diana Nyad is a long-distance swimmer and lifelong vegetarian known for her determination and endurance. After multiple attempts over several decades, she successfully completed a historic swim from Cuba to Florida at the age of 64, covering roughly 177 kilometers in open ocean without a shark cage. The journey took about 53 hours and required extreme physical and mental resilience against currents, fatigue, and harsh ocean conditions. Her achievement became a global symbol of persistence, proving that major human goals can be reached even later in life.",

    "es": "Diana Nyad es una nadadora de larga distancia y vegetariana de toda la vida conocida por su determinación y resistencia. Después de varios intentos durante décadas, logró completar una travesía histórica de Cuba a Florida a los 64 años, nadando aproximadamente 177 kilómetros en mar abierto sin jaula antitiburones. El viaje duró unas 53 horas y requirió una resistencia física y mental extrema contra corrientes, fatiga y condiciones del océano. Su logro se convirtió en un símbolo mundial de perseverancia y de que los grandes objetivos pueden alcanzarse incluso en edades avanzadas.",

    "hu": "Diana Nyad hosszútávúszó és élethosszig tartó vegetáriánus, aki kitartásáról és állóképességéről ismert. Több évtizeden és számos sikertelen kísérleten keresztül végül 64 évesen teljesítette a Kuba és Florida közötti történelmi úszást, körülbelül 177 kilométert megtéve nyílt óceánban, cápaellenes ketrec nélkül. Az út nagyjából 53 óráig tartott, és extrém fizikai és mentális kitartást igényelt az áramlatok, kimerültség és zord óceáni körülmények ellen. Teljesítménye a kitartás globális szimbóluma lett, bizonyítva, hogy nagy célok idősebb korban is elérhetők."
  },
  "image": "images/success/diana-nyad.jpg",
  "learnMore": {
    "en": {
      "title": "Learn more",
      "url": "https://en.wikipedia.org/wiki/Diana_Nyad"
    },
    "es": {
      "title": "Saber más",
      "url": "https://en.wikipedia.org/wiki/Diana_Nyad"
    },
    "hu": {
      "title": "További információ",
      "url": "https://en.wikipedia.org/wiki/Diana_Nyad"
    }
  }
},

{
  "title": {
    "en": "Endurance racing in the harshest conditions",
    "es": "Carreras de resistencia en condiciones extremas",
    "hu": "Kitartás a legkeményebb körülmények között"
  },
  "story": {
    "en": "Jasmin Paris - follows a mostly plant-based diet - is a Scottish ultrarunner and mountaineer known for competing in some of the toughest endurance races in the world. She made history by becoming the first woman to win the overall Spine Race, a brutal multi-day ultramarathon across the Pennine Way in winter conditions, covering roughly 431 kilometers with extreme sleep deprivation, cold, and continuous physical strain. She completed the race while balancing life as a veterinarian and mother, becoming a powerful example of human endurance, discipline, and mental strength in extreme sport.",

    "es": "Jasmin Paris - sigue una dieta mayormente basada en plantas - es una corredora de ultramaratón y montañista escocesa conocida por competir en algunas de las carreras de resistencia más duras del mundo. Hizo historia al convertirse en la primera mujer en ganar la Spine Race en la clasificación general, un ultramaratón extremo de varios días a través del Pennine Way en condiciones invernales, recorriendo aproximadamente 431 kilómetros con privación extrema de sueño, frío y esfuerzo físico continuo. Completó la carrera mientras equilibraba su vida como veterinaria y madre, convirtiéndose en un ejemplo de resistencia, disciplina y fortaleza mental.",

    "hu": "Jasmin Paris - főként növényi alapú étrendet követ - Skóciából származó ultrafutó és hegymászó, aki a világ egyik legkeményebb állóképességi versenyein versenyez. Történelmet írt azzal, hogy első nőként megnyerte a Spine Race-t összetettben, amely egy brutális többnapos ultramaraton a Pennine Way-en téli körülmények között, körülbelül 431 kilométeres távval, extrém alváshiánnyal, hideggel és folyamatos fizikai terheléssel. Emellett állatorvos és édesanya is, így története a kitartás, fegyelem és mentális erő erőteljes példája."
  },
  "image": "images/success/jasmin-paris.jpeg",
  "learnMore": {
    "en": {
      "title": "Learn more",
      "url": "https://en.wikipedia.org/wiki/Jasmin_Paris"
    },
    "es": {
      "title": "Saber más",
      "url": "https://en.wikipedia.org/wiki/Jasmin_Paris"
    },
    "hu": {
      "title": "További információ",
      "url": "https://en.wikipedia.org/wiki/Jasmin_Paris"
    }
  }
}

]
};


function impactIntro() {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

  const messages = {
    en: `
      <p>Hey! 💚</p>

      <p>Did you know? By choosing plant-based meals, you can make a huge impact 🌱</p>

      <p>I’ll track this impact for you and update it every day after your check-in, accordding to your meal answer.</p>

      <p>Based on your meal answers, I estimate what you save compared to an average diet:</p>

      <ul>
        <li>🐾 ~21 animals</li>
        <li>🌳 ~15 m² forest</li>
        <li>💧 ~19,800 liters of water</li>
        <li>🌍 ~120 kg CO₂</li>
      </ul>

      <p>Every choice you log adds to this 🌟</p>
      <p>Let’s see how much good you can create 💚</p>

      <p>These estimates are based on scientific averages from environmental research 
      (using mid-range values from published data).</p>

      <p style="font-size:12px; opacity:0.7;">
        Source:
        <a href="https://ourworldindata.org/environmental-impacts-of-food"
           target="_blank"
           rel="noopener noreferrer">
           Our World in Data (Oxford research)
        </a>
      </p>
    `,

    es: `
  <p>¡Hey! 💚</p>

  <p>¿Sabías que al elegir comidas vegetales puedes generar un gran impacto 🌱</p>

  <p>Voy a seguir este impacto por ti y actualizarlo cada día después de tu registro, según tu respuesta de comida.</p>

  <p>En comparación con una dieta promedio, estimo que ahorras:</p>

  <ul>
    <li>🐾 ~21 animales</li>
    <li>🌳 ~15 m² de bosque</li>
    <li>💧 ~19,800 litros de agua</li>
    <li>🌍 ~120 kg de CO₂</li>
  </ul>

  <p>Cada decisión cuenta 🌟</p>
  <p>Veamos cuánto bien puedes crear 💚</p>

  <p>Estos datos se basan en promedios científicos de investigación ambiental (valores medios publicados).</p>

  <p style="font-size:12px; opacity:0.7;">
    Source:
    <a href="https://ourworldindata.org/environmental-impacts-of-food"
       target="_blank"
       rel="noopener noreferrer">
       Our World in Data (Oxford research)
    </a>
  </p>
`,

    hu: `
  <p>Hé! 💚</p>

  <p>Tudtad, hogy a növényi étkezéssel nagy hatást érhetsz el 🌱</p>

  <p>Én követem ezt a hatást, és minden nap frissítem a bejelentkezésed után, az ételválaszod alapján.</p>

  <p>Egy átlagos étrendhez képest becsülten ennyit takarítasz meg:</p>

  <ul>
    <li>🐾 ~21 állat</li>
    <li>🌳 ~15 m² erdő</li>
    <li>💧 ~19,800 liter víz</li>
    <li>🌍 ~120 kg CO₂</li>
  </ul>

  <p>Minden döntés számít 🌟</p>
  <p>Nézzük meg, mennyi jót hozol létre 💚</p>

  <p>Az adatok tudományos környezeti kutatások átlagain alapulnak (publikált középértékek).</p>

  <p style="font-size:12px; opacity:0.7;">
    Source:
    <a href="https://ourworldindata.org/environmental-impacts-of-food"
       target="_blank"
       rel="noopener noreferrer">
       Our World in Data (Oxford research)
    </a>
  </p>
`,
  };

  showPetMessage(messages[lang] || messages.en);
}

function gamesectionintro() {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

  const messages = {
    en: `
      <p>Hey 👀</p>

<p>I’ve prepared something new for you… a game that tracks your progress on a deeper level 🎮✨</p>

<p>From now on, you’ll see a <strong>Game section</strong> on your dashboard.</p>

<p>This is where your journey turns into progression.</p>

<p>Every activity you do earns you:</p>

<ul>
  <li>📈 <strong>Discovery Points</strong> → level up your profile</li>
  <li>🏅 <strong>Honor Points</strong> → spend them in the shop for virtual items</li>
</ul>

<p>The more you explore, the more you unlock:</p>

<ul>
  <li>🎯 Challenges</li>
  <li>🏆 Titles</li>
  <li>🖼️ Profile Frames</li>
  <li>🥇 Achievements & Leaderboards</li>
</ul>

<p>Everything appears on your profile — showing your progress, status, and what you value 🌱</p>

<p><strong>Go explore it now!</strong> 🚀</p>
    `,
    es: `
      <p>Hey 👀</p>

<p>He preparado algo nuevo para ti… un juego que sigue tu progreso en un nivel más profundo 🎮✨</p>

<p>A partir de ahora verás una <strong>sección de juego</strong> en tu panel.</p>

<p>Aquí es donde tu camino se convierte en progreso real.</p>

<p>Cada actividad que hagas te dará:</p>

<ul>
  <li>📈 <strong>Puntos de Descubrimiento</strong> → sube de nivel tu perfil</li>
  <li>🏅 <strong>Puntos de Honor</strong> → úsalos en la tienda para objetos virtuales</li>
</ul>

<p>Cuanto más explores, más desbloquearás:</p>

<ul>
  <li>🎯 Desafíos</li>
  <li>🏆 Títulos</li>
  <li>🖼️ Marcos de perfil</li>
  <li>🥇 Logros y rankings</li>
</ul>

<p>Todo aparecerá en tu perfil — mostrando tu progreso, tu estatus y lo que valoras 🌱</p>

<p><strong>¡Ve a explorarlo ahora!</strong> 🚀</p>
    `,
    hu: `
      <p>Hé 👀</p>

<p>Készítettem neked valami újat… egy játékot, ami mélyebben követi a fejlődésed 🎮✨</p>

<p>Mostantól látni fogsz egy <strong>Játék szekciót</strong> a dashboardodon.</p>

<p>Itt válik az utad valódi fejlődéssé.</p>

<p>Minden tevékenységedért kapsz:</p>

<ul>
  <li>📈 <strong>Felfedezési Pontokat</strong> → ezekkel szintet lépsz</li>
  <li>🏅 <strong>Becsületpontokat</strong> → ezeket a boltban költheted el virtuális tárgyakra</li>
</ul>

<p>Minél többet fedezel fel, annál többet oldasz fel:</p>

<ul>
  <li>🎯 Kihívások</li>
  <li>🏆 Címek</li>
  <li>🖼️ Profilkeretek</li>
  <li>🥇 Teljesítmények és ranglisták</li>
</ul>

<p>Minden megjelenik a profilodon — mutatva a fejlődésed, a szinted és azt, amit képviselsz 🌱</p>

<p><strong>Fedezd fel most!</strong> 🚀</p>
    `
  };

  showPetMessage(messages[lang] || messages.en);
}

function pickrandommessage() {
  const lang = window.appState?.lang || localStorage.getItem("lang") || "en";

  // 1️⃣ Decide section type (pet / celebrity / success)
  const roll = Math.random();

  let sectionType;
  if (roll < 0.33) {
    sectionType = "pet";
  } else if (roll < 0.66) {
    sectionType = "celebrity";
  } else {
    sectionType = "success";
  }

  let html = "";

  // 2️⃣ PET SECTION
  if (sectionType === "pet") {
    const tips = characterTips.pet[lang] || characterTips.pet.en;
    let randomTip = tips[Math.floor(Math.random() * tips.length)];

    randomTip = randomTip.replace(
      /<span class="ingredient-link" onclick="openIngredient\('(\w+)'\)">(.*?)<\/span>/g,
      (match, key, label) => {
        const item = ingredientInfo[key];
        if (!item) return label;

        return `
          <div class="ingredient-inline">
            <strong>${item.name[lang] || item.name.en}</strong>
            <p>${item.description[lang] || item.description.en}</p>
            <small>${item.nutrition[lang] || item.nutrition.en}</small>
          </div>
        `;
      }
    );

    html = `<div class="pet-message">${randomTip}</div>`;
  }

  // 3️⃣ CELEBRITY SECTION
  else if (sectionType === "celebrity") {
  const celeb =
    characterTips.celebrity[
      Math.floor(Math.random() * characterTips.celebrity.length)
    ];

  const name = celeb.name[lang] || celeb.name.en;
  const title = celeb.title[lang] || celeb.title.en;
  const quote = celeb.quote[lang] || celeb.quote.en;

  // credibility
  const credibilityLabel =
    celeb.credibilityLabel?.[lang] || celeb.credibilityLabel?.en || "";
  const credibilityColor = celeb.credibilityColor || "gray";

  // sources (ALWAYS show both)
  const sourcesHtml = (celeb.sources || [])
    .map(
      (s) => `
        <li>
          <a href="${s.url}" target="_blank" rel="noopener noreferrer">
            ${s.label}
          </a>
        </li>
      `
    )
    .join("");

  const sourcesLabel =
    lang === "es"
      ? "Fuentes:"
      : lang === "hu"
      ? "Források:"
      : "Sources:";

  const quoteLabel =
    lang === "es"
      ? "Cita de"
      : lang === "hu"
      ? "Idézet tőle:"
      : "A quote from";

  html = `
  <div class="celeb-inline">

    <div class="celeb-header">
      <img src="${celeb.avatar}" class="celeb-avatar" />

      <div class="celeb-info">
        <strong>💬 ${quoteLabel} ${name}</strong>

        <p><em>${title}</em></p>

        <span class="credibility-tag" style="color:${credibilityColor}">
          ${credibilityLabel}
        </span>
      </div>
    </div>

    <p class="quote">“${quote}”</p>

    <div class="sources">
      <strong>${sourcesLabel}</strong>
      <ul>
        ${sourcesHtml}
      </ul>
    </div>

  </div>
`;
}

  // 4️⃣ SUCCESS STORIES SECTION (UPDATED)
else if (sectionType === "success") {
  const stories = characterTips.success || [];
  const story = stories[Math.floor(Math.random() * stories.length)];

  const learnMore = story.learnMore?.[lang] || story.learnMore?.en;

  html = `
    <div class="success-story">
      <img src="${story.image}" class="success-image" />

      <h3>${story.title[lang] || story.title.en}</h3>

      <p>${story.story[lang] || story.story.en}</p>

      ${
        learnMore
          ? `
        <div class="learn-more">
          <a href="${learnMore.url}" target="_blank" rel="noopener noreferrer">
            ${learnMore.title}
          </a>
        </div>
      `
          : ""
      }
    </div>
  `;
} else {
  html = `<div class="success-story">No story available.</div>`;
}

  // 5️⃣ Render
  showPetMessage(html);
}

function showPetMessage(html) {
  const wrapper = document.getElementById("petMessageWrapper");
  const box = document.getElementById("petMessageBox");

  if (!wrapper || !box) return;

  // Insert content
  box.innerHTML = html;

  // Show with animation
  wrapper.classList.add("visible");

  // Optional: reset scroll if long content
  box.scrollTop = 0;
}

window.starterSubmit = async function starterSubmit() {

  showSection("starterGuide");

  const todayLessonId = todayLessonIndex;

if (!todayLesson) { alert(dailyCheckinT("noLessonToday")); return false; }

let mealValue = 0;

// 1.
  const mealAnswer = document.querySelector('input[name="mealsDCI"]:checked');
  if (!mealAnswer) {
    alert(dailyCheckinT("selectMeal"));
    return false;
  }
  mealValue = parseInt(mealAnswer.value);

  const impactIncrement = calculateImpact(mealValue);
  const badgeIncrement = mealValue === 4 ? 5 : 0;

  // Update currentProfile
  currentProfile.day_counter += 1;
  currentProfile.streak = (currentProfile.streak || 0) + 1;
  if (mealValue === 4) {
  currentProfile.vegan_days = (currentProfile.vegan_days || 0) + 1;
}
  await addXP(20);
  await addBadges(currentUser.id,badgeIncrement);

  // Store progress using lesson index from LessonsByIndex
  if (!currentProfile.lesson_progress) currentProfile.lesson_progress = [];
  if (!currentProfile.completed_lessons) currentProfile.completed_lessons = [];

  if (!currentProfile.completed_lessons.includes(todayLessonId)) {
  currentProfile.completed_lessons.push(todayLessonId);
  currentProfile.lesson_progress.push(todayLessonId);
}

// Save last lesson using the lesson ID
currentProfile.last_lesson = { goal: todayGoal, lessonId: todayLessonId };

  currentProfile.animals_saved = (currentProfile.animals_saved || 0) + impactIncrement.animals_saved;
  currentProfile.forest_saved = (currentProfile.forest_saved || 0) + impactIncrement.forest_saved;
  currentProfile.water_saved = (currentProfile.water_saved || 0) + impactIncrement.water_saved;
  currentProfile.co2_saved = (currentProfile.co2_saved || 0) + impactIncrement.co2_saved;
  currentProfile.last_checkin_date = new Date().toISOString().split("T")[0];

  // Update Supabase
  // Destructure XP-related fields OUT of the update payload
const {
  total_xp,
  xp_today,
  xp_fraction,
  current_level,
  ...profileWithoutXp
} = currentProfile;

// Update profile WITHOUT XP fields
const { error: updateError } = await supabase
  .from("profiles")
  .update(profileWithoutXp)
  .eq("id", currentProfile.id);

  if (updateError) {
  console.error("Profile update failed:", updateError);
  enableDailyCheckinButtons(); // ✅ Re-enable buttons so user can retry
  return false;                 // stop further execution
}

document.getElementById("streak-counter").textContent = 1;
document.getElementById("streak-counterprofile").textContent = 1;

const streakFire = document.querySelector("#streak .fire");
streakFire.classList.remove("inactive");
streakFire.textContent = "🔥"; // normal fire emoji
streakFire.setAttribute("title", initT("streakActive"));
/*
  // Refresh homepage
  const { profile, globalImpact: fetchedImpact } = await fetchAllData();
  await renderProfile();
  await injectComparisonSentences(profile);

  // Hide Daily Check-in, show home
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("topBar").classList.remove("hidden");
  document.getElementById("dailycheck-in")?.classList.add("hidden");
  document.getElementById("learn")?.classList.add("hidden");


  document.getElementById("homepageContentfirst").style.visibility = "hidden";
  document.getElementById("homepageContentsecond").style.visibility = "visible";
  */
  return true;
}


async function handleEarlyUserUI(currentProfile) {

  if (currentProfile.day_counter > 4) return;

  const shouldHide = currentProfile.day_counter < 4;

  const elementsToToggle = [
    "Levelword",
    "currentLevel",
    "currentLevelSpan",
    "levelBar",
    "playgroundDropdown",
    "subscriptionsBtn"
  ];

  elementsToToggle.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.style.display = shouldHide ? "none" : "";
  });

}

  window.trackActivity = function (sectionId) {
  // 🛑 Stop tracking after day 4
  if (currentProfile.day_counter > 4) return;

  const onboardingSections = ["learn", "local", "mealart"];

  // 📦 Get visited sections
  let visited = JSON.parse(localStorage.getItem("visitedSections")) || [];

  const isNewVisit = !visited.includes(sectionId);

  // ✅ Add section if new
  if (isNewVisit) {
    visited.push(sectionId);
    localStorage.setItem("visitedSections", JSON.stringify(visited));
  }

  // 🎯 ONLY set visitDate if:
  // - it's onboarding section
  // - AND it's the first time visiting it
  if (onboardingSections.includes(sectionId) && isNewVisit) {
    localStorage.setItem(
      "visitDate",
      new Date().toISOString().split("T")[0]
    );
  }

// ✨ REMOVE highlight when user clicks
  removeHighlights();

  // 🔄 trigger flow
  setNewsBox();

  const box = document.getElementById("petOnboardingBox");
  if (box) box.classList.add("hidden");
};

function getUndiscoveredSections() {
  const allSections = ["learn", "local", "mealart"];
  const visited = JSON.parse(localStorage.getItem("visitedSections")) || [];

  const remaining = allSections.filter(section => !visited.includes(section));

  return remaining; // may be []
}

function recommendSection(sectionId) {
  if (!sectionId) return; // 🔥 prevents crash

  const visitDate = localStorage.getItem("visitDate"); // Optional: can be used to show "You visited X yesterday, how about Y today?"
  const today = new Date().toISOString().split("T")[0];

  if (visitDate === today) return;

  const message = generateRecommendationMessage(sectionId);

  updatePetOnboarding(message);

  // ✨ highlight buttons
  highlightRecommendedSection(sectionId);
}

function generateRecommendationMessage(section) {
  const keyMap = {
    learn: "recommendLearn",
    local: "recommendLocal",
    mealart: "recommendMealart",
  };

  return initT(keyMap[section] || "recommendDefault");
}

function updatePetOnboarding(message) {
 // const box = document.getElementById("petOnboardingBox");
  const text = document.getElementById("petOnboardingText");
  const photo = document.getElementById("petOnboardingPhoto");

  if (  // !box || 
    !text || !photo) return;

  // 💬 message
  text.innerHTML = message;

  // 🐾 pet image
  photo.src = currentProfile.pet_photo || "default-pet.jpg";

  // show box
 // box.classList.remove("hidden");

}

function highlightRecommendedSection(section) {

  // Remove old highlights first
  document.querySelectorAll(".shiny").forEach(el => {
    el.classList.remove("shiny");
  });

  const mapping = {
    learn: ["lessonPathBtn" , "discoverdropdownbtn"],
    local: ["localBtn" , "profiledropdownBtn"],
    mealart: ["mealArtBtn" , "discoverdropdownbtn"]
  };

  const buttonIds = mapping[section] || [];

  buttonIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.classList.add("shiny");
    }
  });
}
function removeHighlights() {
  document.querySelectorAll(".shiny").forEach(el => {
    el.classList.remove("shiny");
  });
}

//#endregion







