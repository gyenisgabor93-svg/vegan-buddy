 import { supabase } from "./supabaseClient.mjs";
 
//#region Buttons

/*
function setupCommunities() {

  const yourBtn = document.getElementById("yourCommunitiesBtn");
  const searchBtn = document.getElementById("searchCommunitiesBtn");

  const yourView = document.getElementById("yourCommunitiesView");
  const searchView = document.getElementById("searchCommunitiesView");

  if (!yourBtn || !searchBtn || !yourView || !searchView) {
    console.warn("Communities DOM not ready");
    return;
  }

  function showYour() {
    yourBtn.classList.add("active");
    searchBtn.classList.remove("active");

    yourView.classList.add("active");
    searchView.classList.remove("active");
  }

  function showSearch() {
    searchBtn.classList.add("active");
    yourBtn.classList.remove("active");

    searchView.classList.add("active");
    yourView.classList.remove("active");
  }

  yourBtn.addEventListener("click", showYour);
  searchBtn.addEventListener("click", showSearch);

  // optional default state
  showYour();
}

*/

function setupProfile() {

  const friendsBtnP = document.getElementById("profileFriendsBtn");
  const dateBtnP = document.getElementById("profileDateBtn");

  const friendsProfile = document.getElementById("friendsProfile");
  const dateProfile = document.getElementById("dateProfile");

  friendsBtnP.onclick = () => {
    friendsBtnP.classList.add("active");
    dateBtnP.classList.remove("active");

    friendsProfile.classList.add("active");
    dateProfile.classList.remove("active");
  };

  dateBtnP.onclick = () => {
    dateBtnP.classList.add("active");
    friendsBtnP.classList.remove("active");

    dateProfile.classList.add("active");
    friendsProfile.classList.remove("active");
  };

const settingsBtn = document.getElementById("settingsBtn");
const backBtn = document.getElementById("backToProfile");

settingsBtn.onclick = () => {
  openTab("settings", settingsBtn);
};

backBtn.onclick = () => {
  openTab("profile", backBtn);
};

const profileContent = document.getElementById("profileContent");
const settingsView = document.getElementById("settingsView");
const topRight = document.querySelector(".top-right");

}

function setupButtons() {

  // HOMEPAGE MODE
  document.getElementById('friendsBtn').addEventListener('click', () => {
    setMode('friends');
  });

  document.getElementById('dateBtn').addEventListener('click', () => {
    setMode('date');
  });

  // DISCOVER (cleaned duplication removed)
  const friendsBtn = document.getElementById("friendsBtn");
  const dateBtn = document.getElementById("dateBtn");

  const friendsView = document.getElementById("friendsView");
  const dateView = document.getElementById("dateView");

  friendsBtn.onclick = () => {
    friendsBtn.classList.add("active");
    dateBtn.classList.remove("active");

    friendsView.classList.add("active");
    dateView.classList.remove("active");
  };

  dateBtn.onclick = () => {
    dateBtn.classList.add("active");
    friendsBtn.classList.remove("active");

    dateView.classList.add("active");
    friendsView.classList.remove("active");
  };
}

function setupTabs() {

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      openTab(tabId, item);
    });
  });

}

function openTab(tabId, element) {

  if (appUI.currentTab === tabId) return;

  const tab = document.getElementById(tabId);

  if (!tab) {
    console.warn("Tab not found:", tabId);
    return;
  }

  if (appUI.currentTab) {
    appUI.tabHistory.push(appUI.currentTab);
  }

  appUI.currentTab = tabId;

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  if (element) {
    element.classList.add('active');
  }

  if (tabId === 'matches') {
    setLastOpened('invites_last_opened');
  }

  if (tabId === 'messages') {
    setLastOpened('messages_last_opened');
  }
}

function setMode(mode) {
  document.getElementById('dateBtn').classList.remove('active');
  document.getElementById('friendsBtn').classList.remove('active');

  if (mode === 'date') {
    document.getElementById('dateBtn').classList.add('active');
  } else {
    document.getElementById('friendsBtn').classList.add('active');
  }
}

function setupModals() {

  const friendsModal = document.getElementById("friendsFilterModal");
  const dateModal = document.getElementById("dateFilterModal");

  document.getElementById("friendsFilterBtn").onclick = () => {
    populateFiltersFromProfile(); 
    friendsModal.style.display = "block";
  };

  document.getElementById("dateFilterBtn").onclick = () => {
    populateFiltersFromProfile(); 
    dateModal.style.display = "block";
  };

  document.querySelectorAll(".closeBtn").forEach(btn => {
    btn.onclick = () => {
      friendsModal.style.display = "none";
      dateModal.style.display = "none";
    };
  });
}

    //#endregion

//#region Multilangiuage

const translations = {
  en: {
    backbtn: "← Back",
    createdateprofile: "Create dating profile",
    photosmax5: "Photos (max 5)",
    addphotos: "+ Add photos",
    firstphotohint: "First photo will be your profile picture",

    description: "Description",
    writesomethingaboutyourself: "Write something about yourself...",
    hobbies: "Hobbies",
    writehobbies: "Write hobbies",
    aboutyou: "About you",
    saveprofile: "Save profile",


    premium: "Premium",
    premiumsubscription: "🌟 Premium Subscription",
    premiumprice: "€10 / month",
    unlockeverything: "Unlock everything:",
    unlimiteddealbreakers: "Unlimited dealbreakers",
    unlimitedavocados: "Unlimited avocados & tofu",
    fullsurveyaccess: "Full survey access (see all answers from others)",
    customizeweights: "Customize question weights for more precise matching",
    incognitomode: "Incognito modes - discover and invite people without being seen",
    createowncommunity: "Create your own community",
    travelmode: "Travel mode (match while traveling)",
    subscribesupport: "By subscribing, you are also supporting our mission to promote veganism",
    learnmore: "Learn more about the project →",
    upgradetopremium: "Upgrade to Premium",

    createcommunity: "Create your community",
    createcommunityname: "Community name:",
    entercommunityname: "Enter community name",
    setaphoto: "Set a Photo",
    addphoto: "+ Add photo",
    writecommunitydescription: "Write community description",
    communitylocation: "Community Location",
    setcoords: "Click on the map to set community location",
    communityradius: "Community radius",
    communitydistancehint: "Distance used to match nearby users",
    communityvalues: "Community Values",
    matchrequirements: "Match Requirement",
    lowthreshold: "Minimum match:",
    thresholdhint: "Only users above this compatibility will be invited",
    createcommunitybtn: "Create Community",

    friendstoggle: "Friends",
    datetoggle: "Date",

    profiletopbar: "👤 Profile",

    travelmodetoggle: "Travel mode",

    premiumprofile: "🌟 Premium Profile",
    learnmoreaboutusandpremium: "Learn more about our premium features & mission →",
    premiumactive: "⭐ Premium Active",
    currentlypremium: "You are currently a Premium user.",
    cancelpremium: "Cancel Premium",

    langs: "🌍 Language",
    english: "English",
    spanish: "Spanish",
    hungarian: "Hungarian",
    setlang: "Set Language",

    notifications: "🔔 Notifications",
    matchnotifs: "Matches",
    invitenotifs: "Invitations",
    messagenotifs: "Messages",
    updatenotifs: "App updates & tips",

    contactus: "📩 Contact us",
    needhelp: "Need help or have feedback? We’re here for you.",
    contactsupportbtn: "Contact support",

    account: "⚙️ Account",
    logout: "Log out",
    deleteprofile: "Delete profile",

    discover: "Discover",
    messages: "Messages",
    invitations: "Invitations",
    profile: "Profile",

    // Filters
    friendsfilters: "Friends Filters",
    datingfilters: "Dating Filters",
    distance: "Distance:",
    matchscore: "Match score threshold:",
    close: "Close",
    save: "Save",
    agerange: "Age range:",
    min: "Min:",
    max: "Max:",
    show: "Show:",
    all: "All",
    man: "Man",
    woman: "Woman",
    other: "Other",

    editpreferences: "Edit Preferences",

    contacttitle: "Contact Us",
    contactintro: "We’re here to help! Choose a subject and tell us your message.",
    subject: "Subject:",
    selectsubject: "-- Select a subject --",
    reportbug: "Report a Bug",
    billingissue: "Billing issue",
    appfeedback: "App Feedback",
    other: "Other",
    message: "Message:",
    sendmessage: "Send Message",
    send: "Send",

    replacemodal: "Replace profile photo",
    cancel: "Cancel",

    edithobbies: "Edit hobbies",
    editdescription: "Edit description",
    editlanguages: "Edit languages",
    yourphotosmax5: "Your photos (max 5)",


  missiontitle: "What is our mission?",
  missionintro: "Elu Premium is part of a bigger vision: building a more compassionate vegan world where people feel less alone, more understood, and more aligned with their values.",
  missionintro2: "We are creating two connected applications that support people at every stage of their journey toward a more conscious and compassionate lifestyle.",

  vegancircletitle: "Elu Vegan Circle",
  vegancircledesc: "The app you are using right now is designed to help vegans and vegan-curious people find meaningful connections. It reduces the feeling of isolation that often comes with choosing a different lifestyle and replaces it with community, understanding, and shared values.",

  veganmindtitle: "Elu Vegan Mind",
  veganminddesc: "Our second application focuses on education and motivation. It gently guides people toward veganism while preparing them for real-life challenges in a supportive and engaging way.",
  veganminddesc2: "Through stories, nutrition guidance, simple recipes, and real experiences from other vegans, it helps both beginners and experienced vegans stay informed, inspired, and confident in their choices.",

  widermissiontitle: "A wider mission",
  widermissiondesc: "Beyond our apps, we are developing experiences that help people recognize the hidden patterns in today’s society — from environmental damage to animal exploitation and social manipulation.",
  approachdesc: "We believe change happens through awareness, not pressure. That’s why our approach is always positive, respectful, and uplifting.",
  activismdesc: "We are also bringing this message into the real world through street activism and visual campaigns. Our goal is not confrontation, but inspiration — helping people reflect through simple, powerful messages.",

  missionsupport: "Elu Premium supports this mission. Every subscription helps us grow these tools, expand education, and bring a more compassionate message into the world.",

  travel_set_location_title: "📍 Set your travel location",
  travel_confirm: "Confirm",
  travel_cancel: "Cancel",

  location_error_title: "📍 Error getting your location",
  location_error_text: "Please set your location manually",

    // ----- JS ------
    // Discover

    createprofilehint: "Create your dating profile to start meeting people",
    createprofilebtn: "Create profile",
    visibilityhint: "Turn on your visibility to start discovering people",
    visibilityturnonbtn: "Turn on visibility",
    friendsmode: "Friends",
    datesmode: "Dating",
    modeturnoff: "mode is turned off",
    gotosettings:"Go to settings",
    nousersfound: "No users found",
    yearsold: "years old",

    commons: "Answers in common:",
    nomatchinganswers: "No matching answers",
    common: "Common",

    difference: "A difference:",
    nodifferences: "No differences",

    fullcompatibilitysurvey: "Full Compatibility Survey",
    showsurvey: "Show Survey",
    hidesurvey: "Hide Survey",
    hobbies: "Hobbies",
    hide: "Hide",
    sendavocado: "Send avocado",

    dateprofiledetails: "Dating profile details",
    nosurveydata: "No survey data",
    sharetofu: "Share your tofu",

    
    pronoun_subject_male: "His",
    pronoun_subject_female: "Her",

    match: "Match:",
    you: "You:",

    outofavocados: "You ran out of avocados!",
    outoftofus: "You ran out of tofus!",

// Messages Tab

    createCommunity: "Create community",
    communityNameRequired: "Please enter a community name",
    communityNameMax: "Community name must be max 30 characters",
    addPhotoRequired: "Please add a community photo",
    descriptionRequired: "Please add a description",
    answerAllQuestions: "Please answer all questions",
    communityCreated: "Community created!",
    communityCreateError: "Error creating community",
    loading: "Loading...",
    noDescription: "No description yet.",
    editCommunity: "Edit community",
    deleteCommunity: "Delete community",
    leaveCommunity: "Leave community",
    removeMember: "Remove member",
    remove: "Remove",
    confirmDelete: "Are you sure you want to delete this community? This cannot be undone.",
    confirmRemoveMember: "Remove this member from the community?",
    confirmLeave: "Do you really want to leave this community?",
    errorLoadingCommunity: "Error loading community",
    errorUpdatingCommunity: "Error updating community",
    errorDeletingCommunity: "Error deleting community",
    errorLeavingCommunity: "Error leaving community",
    errorDeletingMember: "Error removing member",
    edit: "Edit",
    communityChatCreated: "Community chat is created",
    photo: "Photo",

  communitybubbletitle: "Create your own community",
  communitybubblep1: "Bring together people near you who share your values and interests.",
  communitybubblep2: "Once created, users who match your preferences in your local area will be automatically invited to your community. New users will also be included after registration.",
  communitybubbleupgrade: "Upgrade to Premium →",

    nomessagesyet: "No messages yet",
    mute_chat: "Mute chat",
    unmute_chat: "Unmute chat",
    unmatch: "Unmatch",
    report_user: "Report user",
    confirm_unmatch: "Are you sure you want to unmatch this chat?",

    report_user_title: "Report user",
    report_user_placeholder: "Describe your experience...",
  
    report_empty_text: "Please write your experience.",
    report_too_long: "Maximum 300 characters allowed.",
    report_success: "Report sent successfully.",
    report_failed: "Failed to send report.",
  
    chat_placeholder: "Type a message...",

    chat_locked_message: "The community owner is no longer a premium member. This chat has been deactivated.",

// Income Tab
    
    no_invitations: "No invitations yet",
    age_label: ({ age }) => `Age: ${age}`,
    community: "Community",

    reject_avocado: "I don't want this avocado",
    accept_avocado: "Accept avocado",

    reject_tofu: "I don't want that tofu",
    accept_tofu: "Accept tofu",

    members_lowercase: "members",
    members_highercase: "Members",

    decline: "Decline",
    accept: "Accept",

// Profile Tab

    premium_profile: "⭐ Premium Profile",
    basic_profile: "Basic Profile",

    avocado_unlimited: "You have unlimited avocados 🥑 due to premium profile",
    avocado_none: "You have no avocados left today, get unlimited avocados with premium!",
    avocado_some: ({ count }) => 
      `You have ${count} avocado${count > 1 ? "s" : ""} to send today 🥑`,

    tofu_unlimited: "You have unlimited tofus 🍲 due to premium profile",
    tofu_none: "You have no tofus left today, get unlimited tofus with premium!",
    tofu_some: ({ tofuCount }) => 
      `You have ${tofuCount} tofu${tofuCount > 1 ? "s" : ""} to send today 🍲`,

    visible: "Visible",
    hidden: "Hidden",

    incognito_mode: "Incognito mode",

    respectful_badge: "⭐ Closes connections respectfully",
    importance: "Importance",

    friends_preferences: "Friends Preferences",
    show_preferences: "Show preferences",
    hide_preferences: "Hide preferences",
    edit: "Edit",
    edit_available_in: "You can edit in {days} day(s)",

    show_preferences: "Show preferences",
    hide_preferences: "Hide preferences",

    edit_preferences: "Edit Preferences",

    noAnswersYet: "No answers yet",

//Languages
english: "English",
spanish: "Spanish",
hungarian: "Hungarian",
french: "French",
german: "German",
italian: "Italian",
portuguese: "Portuguese",
dutch: "Dutch",
romanian: "Romanian",
russian: "Russian",


//FriendSurvey
vegan_reason: "What are your main reasons for being vegan?",
reduce_animal_suffering1: "Reduce animal suffering",
environmental_concerns1: "Environmental concerns",
health_reasons1: "Health reasons",
animals_primary1: "Vegan for the animals, while I care about other reasons",
all_reasons1: "For all the reasons",
eating_together_animals: "Are you comfortable sitting at a table where others eat animal products?",
avoid_always2: "Not at all, I avoid situations like that",
fine_with_it2: "Yes, no problem",
uncomfortable_but_do_it2: "I feel uncomfortable, but still do it sometimes",

dating_non_vegan: "Would you date someone who is not vegan?",
no3: "No",
maybe_open_minded3: "Maybe, if they are open-minded",
yes3: "Yes",

circle_importance: "How important is it for you to keep your close circles vegan?",
very_important4: "Very important",
somewhat_important4: "Somewhat important",
not_important4: "Not important",

communication_style: "How do you usually communicate with non-vegans about veganism?",
direct_confrontational5: "Direct and confrontational",
neutral5: "Neutral - no difference",
respectful_educational5: "Respectful and educational",
avoid_topic5: "I avoid the topic",

openness_opinions: "How open are you to discussing opposing views?",
not_open6: "Not open",
somewhat_open6: "Somewhat open",
very_open6: "Very open",

animal_vs_human_rights: "How do you see the relationship between animal rights and human rights?",
animals_more_important7: "Animal rights are more important",
humans_more_important7: "Human rights are more important",
equal7: "Equally important",
unsure7: "Not sure, too complex",

other_injustices: "How do you approach other injustices?",
animals_only8: "Focus on animal rights only",
support_when_possible8: "I stand up against them when it's necessary",
multiple_causes8: "Actively care about multiple",

politics: "How would you describe your political attitude?",
left_intolerant9: "Left, I avoid rightists",
left_open9: "Left, open to dialogue",
right_open9: "Right, open to dialogue",
right_intolerant9: "Right, I avoid leftists",
no_labels9: "I avoid labels, open dialogue is more important",
dont_care9: "Don't care about politics",

feminism: "What is your perspective on feminism?",
negative10: "Negative",
frustrated10: "Frustrated by gender dynamics",
supportive10: "Supportive without hostility",

lgbtq: "What are your views on LGBTQ+ rights?",
negative11: "Negative",
neutral11: "Neutral",
support11: "Support equality",
active_support11: "Actively supportive and advocate for awareness",

capitalism: "What is your view on capitalism?",
against12: "Against it",
support12: "Support it",
regulated12: "It could work with proper regulation",

lonely_vegan: "Do you feel like a lonely vegan?",
yes13: "Yes",
sometimes13: "Sometimes",
no13: "No",

pets: "What is your view on keeping pets?",
vegan_feed_only14: "Only okay if vegan-fed",
ok_anyway14: "Okay anyway",
prefer_none14: "Okay, but I prefer not having pets",

injured_pigeon: "You see an injured pigeon on the street, what do you do?",
help_all_costs15: "I do everything I can to help",
try_if_possible15: "I check if I can realistically help and do it if possible",
leave_it15: "Leave it, I can't save every animal",

activism_style: "Which activism style resonates most with you?",
confrontational16: "Confrontational / disruptive",
calm16: "Calm and educational",
storytelling16: "Inspirational / storytelling",

activism: "Do you do activism?",
active17: "Yes, actively",
rarely17: "Rarely",
want_to17: "Not yet, but I want to",
not_my_thing17: "Not my thing",

conversations: "What conversations do you enjoy most?",
deep18: "Deep and philosophical",
light18: "Light and fun",
mixed18: "Mix of both",

conflict: "How do you handle disagreements?",
avoid19: "I avoid them",
calm19: "I stay calm and try to understand the other person",
emotional19: "I become emotionally involved",

graphic_content_sensitivity: "How sensitive are you to seeing graphic content (animal abuse)?",
very_sensitive20: "Very sensitive – I avoid it whenever possible",
somewhat_sensitive20: "Somewhat sensitive – it affects me, but I can handle it",
not_sensitive20: "Not very sensitive – I can watch it if needed",

material_values: "How important are money, luxury items, and a fancy lifestyle to you?",
important21: "Important – I value comfort and luxury",
neutral21: "Neutral – I don't focus much on material things",
minimalist21: "I am more of a minimalist – simple living is enough for me",


// DATE QUUESTIONS 

dateQuestions: {
    gender: "Gender",
    age: "Age",
    height: "Height (cm)",
    looking_for: "What are you looking for?",
    smoke: "Do you smoke?",
    drink: "Do you drink alcohol?",
    children: "Do you have or want children?"
  },

  dateOptions: {
    gender: {
      "1": "Man",
      "0": "Woman",
      "2": "Other"
    },

    looking_for: {
      long_term: "Long term",
      connection_no_commitment: "Connection without commitment",
      ethical_non_monogamy: "Ethical non-monogamy",
      casual: "Casual"
    },

    smoke: {
      no: "No",
      occasionally: "Occasionally",
      yes: "Yes",
      trying_to_quit: "Trying to quit"
    },

    drink: {
      no: "No",
      occasionally: "Occasionally",
      socially: "Socially",
      regularly: "Regularly"
    },

    children: {
      dont_have: "Don't have",
      want: "Want",
      dont_want: "Don't want",
      not_sure: "Not sure / depends"
    }
  }

  },

  es: {
    backbtn: "← Atrás",
    createdateprofile: "Crear perfil de citas",
    photosmax5: "Fotos (máx 5)",
    addphotos: "+ Añadir fotos",
    firstphotohint: "La primera foto será tu foto de perfil",

    description: "Descripción",
    writesomethingaboutyourself: "Escribe algo sobre ti...",
    hobbies: "Aficiones",
    writehobbies: "Escribe tus aficiones",
    aboutyou: "Sobre ti",
    saveprofile: "Guardar perfil",

    premium: "Premium",
    premiumsubscription: "🌟 Suscripción Premium",
    premiumprice: "€10 / mes",
    unlockeverything: "Desbloquea todo:",
    unlimiteddealbreakers: "Dealbreakers ilimitados",
    unlimitedavocados: "Aguacates y tofu ilimitados",
    fullsurveyaccess: "Acceso completo a encuestas (ver todas las respuestas de los demás)",
    customizeweights: "Personaliza el peso de las preguntas",
    incognitomode: "Modo incógnito - descubre sin ser visto",
    createowncommunity: "Crea tu propia comunidad",
    travelmode: "Modo viaje (empareja mientras viajas)",
    subscribesupport: "Al suscribirte apoyas nuestra misión de promover el veganismo.",
    learnmore: "Más información sobre nuestro proyecto →",
    upgradetopremium: "Mejorar a Premium",
    communitylocation: "Ubicación de la comunidad",
    setcoords: "Haz clic en el mapa para establecer la ubicación de la comunidad",
    communityradius: "Radio de la comunidad",
    communitydistancehint: "Distancia utilizada para encontrar usuarios cercanos",
    createcommunity: "Crear tu comunidad",
    createcommunityname: "Nombre de la comnunidad:",
    entercommunityname: "Nombre de la comunidad",
    setaphoto: "Establecer foto",
    addphoto: "+ Añadir foto",
    writecommunitydescription: "Descripción de la comunidad",

    communityvalues: "Valores de la comunidad",
    matchrequirements: "Requisitos de coincidencia",
    lowthreshold: "Coincidencia mínima:",
    thresholdhint: "Solo usuarios por encima serán invitados",
    createcommunitybtn: "Crear comunidad",

    friendstoggle: "Amigos",
    datetoggle: "Citas",

    profiletopbar: "👤 Perfil",

    travelmodetoggle: "Modo de viaje",

    premiumprofile: "🌟 Perfil Premium",
    learnmoreaboutusandpremium: "Más información sobre las funciones premium y nuestra misión →",
    premiumactive: "⭐ Premium activo",
    currentlypremium: "Eres usuario Premium.",
    cancelpremium: "Cancelar Premium",

    langs: "🌍 Idioma",
    english: "Inglés",
    spanish: "Español",
    hungarian: "Húngaro",
    setlang: "Establecer idioma",

    notifications: "🔔 Notificaciones",
    matchnotifs: "Matches",
    invitenotifs: "Invitaciones",
    messagenotifs: "Mensajes",
    updatenotifs: "Actualizaciones y tips",

    contactus: "📩 Contáctanos",
    needhelp: "¿Necesitas ayuda o feedback?",
    contactsupportbtn: "Contactar soporte",

    account: "⚙️ Cuenta",
    logout: "Cerrar sesión",
    deleteprofile: "Eliminar perfil",

    discover: "Descubrir",
    messages: "Mensajes",
    invitations: "Invitaciones",
    profile: "Perfil",

    friendsfilters: "Filtros de amigos",
    datingfilters: "Filtros de citas",
    distance: "Distancia:",
    matchscore: "Nivel de coincidencia:",
    close: "Cerrar",
    save: "Guardar",
    agerange: "Edad:",
    min: "Mín:",
    max: "Máx:",
    show: "Mostrar:",
    all: "Todos",
    man: "Hombre",
    woman: "Mujer",
    other: "Otro",

    editpreferences: "Editar preferencias",
    cancel: "Cancelar",

    contacttitle: "Contáctanos",
    contactintro: "Estamos aquí para ayudarte...",
    subject: "Asunto:",
    selectsubject: "-- Selecciona --",
    reportbug: "Reportar error",
    billingissue: "Problema de pago",
    appfeedback: "Feedback",
    other: "Otro",
    message: "Mensaje:",
    sendmessage: "Enviar mensaje",
    send: "Enviar",

    replacemodal: "Reemplazar foto",
    edithobbies: "Editar aficiones",
    editdescription: "Editar descripción",
    editlanguages: "Editar idiomas",
    yourphotosmax5: "Tus fotos (máx. 5)",

  missiontitle: "¿Cuál es nuestra misión?",
  missionintro: "Elu Premium forma parte de una visión más grande: construir un mundo vegano más compasivo donde las personas se sientan menos solas, más comprendidas y más alineadas con sus valores.",
  missionintro2: "Estamos creando dos aplicaciones conectadas que apoyan a las personas en cada etapa de su camino hacia un estilo de vida más consciente y compasivo.",

  vegancircletitle: "Elu Vegan Circle",
  vegancircledesc: "La aplicación que estás usando está diseñada para ayudar a veganos y personas interesadas en el veganismo a encontrar conexiones significativas. Reduce la sensación de aislamiento que a menudo acompaña a este estilo de vida y la reemplaza con comunidad, comprensión y valores compartidos.",

  veganmindtitle: "Elu Vegan Mind",
  veganminddesc: "Nuestra segunda aplicación se centra en la educación y la motivación. Guía suavemente a las personas hacia el veganismo mientras las prepara para los desafíos de la vida real de una forma positiva y atractiva.",
  veganminddesc2: "A través de historias, guías de nutrición, recetas sencillas y experiencias reales de otros veganos, ayuda tanto a principiantes como a veganos experimentados a mantenerse informados, inspirados y seguros en sus decisiones.",

  widermissiontitle: "Una misión más amplia",
  widermissiondesc: "Más allá de nuestras aplicaciones, estamos desarrollando experiencias que ayudan a las personas a reconocer los patrones ocultos en la sociedad actual — desde el daño ambiental hasta la explotación animal y la manipulación social.",
  approachdesc: "Creemos que el cambio ocurre a través de la conciencia, no de la presión. Por eso nuestro enfoque siempre es positivo, respetuoso y motivador.",
  activismdesc: "También estamos llevando este mensaje al mundo real a través del activismo callejero y campañas visuales. Nuestro objetivo no es la confrontación, sino la inspiración — ayudando a las personas a reflexionar con mensajes simples y poderosos.",

  missionsupport: "Elu Premium apoya esta misión. Cada suscripción nos ayuda a hacer crecer estas herramientas, ampliar la educación y llevar un mensaje más compasivo al mundo.",

  travel_set_location_title: "📍 Establece tu ubicación de viaje",
  travel_confirm: "Confirmar",
  travel_cancel: "Cancelar",

  location_error_title: "📍 Error al obtener tu ubicación",
  location_error_text: "Por favor, establece tu ubicación manualmente",

    //JS

createprofilehint: "Crea tu perfil de citas para empezar a conocer personas",
createprofilebtn: "Crear perfil",
visibilityhint: "Activa tu visibilidad para empezar a descubrir personas",
visibilityturnonbtn: "Activar visibilidad",
friendsmode: "Amigos",
datesmode: "Citas",
modeturnoff: "modo desactivado",
gotosettings: "Ir a ajustes",
nousersfound: "No se encontraron usuarios",
yearsold: "años",

commons: "Respuestas en común:",
nomatchinganswers: "Sin respuestas coincidentes",
common: "Común",

difference: "Una diferencia:",
nodifferences: "Sin diferencias",

fullcompatibilitysurvey: "Encuesta completa de compatibilidad",
showsurvey: "Mostrar encuesta",
hidesurvey: "Ocultar encuesta",
hobbies: "Pasatiempos",
hide: "Ocultar",
sendavocado: "Enviar aguacate",

dateprofiledetails: "Detalles del perfil de citas",
nosurveydata: "No hay datos de la encuesta",
sharetofu: "Compartir tofu",

pronoun_subject_male: "Su",
pronoun_subject_female: "Su",

match: "Respuesta en común:",
you: "Tú:",

outofavocados: "¡Te has quedado sin aguacates!",
outoftofus: "¡Te has quedado sin tofus!",

    createCommunity: "Crear comunidad",
    communityNameRequired: "Por favor introduce un nombre de comunidad",
    communityNameMax: "El nombre de la comunidad debe tener máximo 30 caracteres",
    addPhotoRequired: "Por favor añade una foto de la comunidad",
    descriptionRequired: "Por favor añade una descripción",
    answerAllQuestions: "Por favor responde todas las preguntas",
    communityCreated: "¡Comunidad creada!",
    communityCreateError: "Error al crear la comunidad",
    loading: "Cargando...",
    noDescription: "Sin descripción todavía.",
    editCommunity: "Editar comunidad",
    deleteCommunity: "Eliminar comunidad",
    leaveCommunity: "Salir de la comunidad",
    removeMember: "Eliminar miembro",
    remove: "Eliminar",
    confirmDelete: "¿Seguro que quieres eliminar esta comunidad? No se puede deshacer.",
    confirmRemoveMember: "¿Eliminar a este miembro de la comunidad?",
    confirmLeave: "¿Seguro que quieres salir de esta comunidad?",
    errorLoadingCommunity: "Error al cargar la comunidad",
    errorUpdatingCommunity: "Error al actualizar la comunidad",
    errorDeletingCommunity: "Error al eliminar la comunidad",
    errorLeavingCommunity: "Error al salir de la comunidad",
    errorDeletingMember: "Error al eliminar al miembro",
    edit: "Editar",
    communityChatCreated: "El chat de la comunidad ha sido creado",
    photo: "Foto",

communitybubbletitle: "Crea tu propia comunidad",
communitybubblep1: "Reúne a personas cercanas a ti que compartan tus valores e intereses.",
communitybubblep2: "Una vez creada, los usuarios que coincidan con tus preferencias en tu zona serán invitados automáticamente a tu comunidad. Los nuevos usuarios también se incluirán después del registro.",
communitybubbleupgrade: "Mejorar a Premium →",

nomessagesyet: "Aún no hay mensajes",
mute_chat: "Silenciar chat",
unmute_chat: "Activar sonido del chat",
unmatch: "Eliminar match",
report_user: "Reportar usuario",
confirm_unmatch: "¿Estás seguro de que quieres eliminar esta coincidencia?",

report_user_title: "Reportar usuario",
report_user_placeholder: "Describe tu experiencia...",

report_empty_text: "Por favor escribe tu experiencia.",
report_too_long: "Máximo 300 caracteres permitidos.",
report_success: "Reporte enviado con éxito.",
report_failed: "Error al enviar el reporte.",

chat_placeholder: "Escribe un mensaje...",

chat_locked_message: "El propietario de la comunidad ya no es miembro premium. Este chat ha sido desactivado.",

no_invitations: "No hay invitaciones aún",
age_label: ({ age }) => `Edad: ${age}`,
community: "Comunidad",

reject_avocado: "No quiero este aguacate",
accept_avocado: "Aceptar aguacate",

reject_tofu: "No quiero este tofu",
accept_tofu: "Aceptar tofu",

members_lowercase: "miembros",
members_highercase: "Miembros",

decline: "Rechazar",
accept: "Aceptar",

premium_profile: "⭐ Perfil premium",
basic_profile: "Perfil básico",

avocado_unlimited: "Tienes aguacates ilimitados 🥑 gracias al perfil premium",
avocado_none: "No te quedan aguacates hoy, ¡obtén aguacates ilimitados con premium!",
avocado_some: ({ count }) =>
  `Tienes ${count} aguacate${count > 1 ? "s" : ""} para enviar hoy 🥑`,

tofu_unlimited: "Tienes tofu ilimitado 🍲 gracias al perfil premium",
tofu_none: "No te quedan tofus hoy, ¡obtén tofus ilimitados con premium!",
tofu_some: ({ tofuCount }) => 
  `Tienes ${tofuCount} tofu${tofuCount > 1 ? "s" : ""} para enviar hoy 🍲`,

visible: "Visible",
hidden: "Oculto",

incognito_mode: "Modo incógnito",

respectful_badge: "⭐ Conexiones cerradas con respeto",
importance: "Importancia",

friends_preferences: "Preferencias de amigos",
show_preferences: "Mostrar preferencias",
hide_preferences: "Ocultar preferencias",
edit: "Editar",
edit_available_in: "Puedes editar en {days} día(s)",

edit_preferences: "Editar preferencias",

noAnswersYet: "Aún no hay respuestas",


//Languages
english: "Inglés",
spanish: "Español",
hungarian: "Húngaro",
french: "Francés",
german: "Alemán",
italian: "Italiano",
portuguese: "Portugués",
dutch: "Neerlandés",
romanian: "Rumano",
russian: "Ruso",


//FriendSurvey
vegan_reason: "¿Cuáles son tus principales razones para ser vegano/a?",
reduce_animal_suffering1: "Reducir el sufrimiento animal",
environmental_concerns1: "Preocupación por el medio ambiente",
health_reasons1: "Salud",
animals_primary1: "Vegano/a por los animales, pero también me importan otras razones",
all_reasons1: "Por todas las razones",

eating_together_animals: "¿Te sientes cómodo/a sentado/a en una mesa donde otros comen productos animales?",
avoid_always2: "Para nada, evito esas situaciones",
fine_with_it2: "Sí, no tengo problema",
uncomfortable_but_do_it2: "Me incomoda, pero a veces lo hago",

dating_non_vegan: "¿Saldrías con alguien que no es vegano/a?",
no3: "No",
maybe_open_minded3: "Quizás, si tiene la mente abierta",
yes3: "Sí",

circle_importance: "¿Qué tan importante es para ti que tu círculo cercano sea vegano?",
very_important4: "Muy importante",
somewhat_important4: "Algo importante",
not_important4: "No es importante",

communication_style: "¿Cómo sueles comunicarte con personas no veganas sobre el veganismo?",
direct_confrontational5: "Directo/a y confrontativo/a",
neutral5: "Neutral - no hay diferencia",
respectful_educational5: "Respetuoso/a y educativo/a",
avoid_topic5: "Evito el tema",

openness_opinions: "¿Qué tan abierto/a estás a discutir opiniones opuestas?",
not_open6: "Nada abierto/a",
somewhat_open6: "Algo abierto/a",
very_open6: "Muy abierto/a",

animal_vs_human_rights: "¿Cómo ves la relación entre los derechos animales y los derechos humanos?",
animals_more_important7: "Los derechos animales son más importantes",
humans_more_important7: "Los derechos humanos son más importantes",
equal7: "Igualmente importantes",
unsure7: "No lo sé, es demasiado complejo",

other_injustices: "¿Cómo afrontas otras injusticias?",
animals_only8: "Me centro solo en los animales",
support_when_possible8: "Me enfrento a ellos cuando es necesario.",
multiple_causes8: "Me importa activamente más de una causa",

politics: "¿Cómo describirías tu postura política?",
left_intolerant9: "Izquierda, evito a los de derecha",
left_open9: "Izquierda, abierta a diálogo",
right_open9: "Derecha, abierta a diálogo",
right_intolerant9: "Derecha, evito a los de izquierda",
no_labels9: "Evito etiquetas, el diálogo abierto es más importante",
dont_care9: "No me importa la política",

feminism: "¿Cuál es tu perspectiva sobre el feminismo?",
negative10: "Negativa",
frustrated10: "Frustración por las dinámicas de género",
supportive10: "Apoyo sin hostilidad",

lgbtq: "¿Qué opinas sobre los derechos LGBTQ+?",
negative11: "Negativa",
neutral11: "Neutral",
support11: "Apoyo la igualdad",
active_support11: "Apoyo activamente y abogo por la concientización",

capitalism: "¿Cuál es tu opinión sobre el capitalismo?",
against12: "En contra",
support12: "A favor",
regulated12: "Podría funcionar con la regulación adecuada",

lonely_vegan: "¿Te sientes un/a vegano/a solitario/a?",
yes13: "Sí",
sometimes13: "A veces",
no13: "No",

pets: "¿Qué opinas sobre tener mascotas?",
vegan_feed_only14: "Está bien solo si se alimentan vegano",
ok_anyway14: "Está bien de todas formas",
prefer_none14: "Está bien, pero prefiero no tener mascotas",

injured_pigeon: "Ves una paloma herida en la calle, ¿qué haces?",
help_all_costs15: "Hago todo lo posible por ayudar",
try_help_if_possible15: "Echó un vistazo para ver si puedo ayudar de manera realista y lo hago si es posible",
leave_it15: "La dejo, no puedo salvar a todos los animales",

activism_style: "¿Qué tipo de activismo conecta más contigo?",
confrontational16: "Confrontativo / disruptivo",
calm16: "Tranquilo y educativo",
storytelling16: "Inspirador / narración de historias",

activism: "¿Haces activismo?",
active17: "Sí, activamente",
rarely17: "Rara vez",
want_to17: "No todavía, pero quiero",
not_my_thing17: "No es lo mío",

conversations: "¿Qué tipo de conversaciones disfrutas más?",
deep18: "Profundas y filosóficas",
light18: "Ligeras y divertidas",
mixed18: "Una mezcla de ambas",

conflict: "¿Cómo manejas los desacuerdos?",
avoid19: "Los evito",
calm19: "Mantengo la calma y trato de entender a la otra persona",
emotional19: "Me pongo emocional",

graphic_content_sensitivity: "¿Qué tan sensible eres al ver contenido gráfico (maltrato animal)?",
very_sensitive20: "Muy sensible – lo evito siempre que puedo",
somewhat_sensitive20: "Algo sensible – me afecta, pero puedo soportarlo",
not_sensitive20: "Poco sensible – puedo verlo si es necesario",

material_values: "¿Qué tan importantes son el dinero, los artículos de lujo y un estilo de vida sofisticado para ti?",
important21: "Importante – valoro la comodidad y el lujo",
neutral21: "Neutral – no me enfoco en lo material",
minimalist21: "Soy más minimalista – me basta con una vida simple",

// DATE QUUESTIONS
dateQuestions: {
    gender: "Género",
    age: "Edad",
    height: "Altura (cm)",
    looking_for: "¿Qué estás buscando?",
    smoke: "¿Fumas?",
    drink: "¿Bebes alcohol?",
    children: "¿Tienes o quieres hijos?"
  },

  dateOptions: {
    gender: {
      "1": "Hombre",
      "0": "Mujer",
      "2": "Otro"
    },

    looking_for: {
      long_term: "Relación a largo plazo",
      connection_no_commitment: "Conexión sin compromiso",
      ethical_non_monogamy: "No monogamia ética",
      casual: "Casual"
    },

    smoke: {
      no: "No",
      occasionally: "Ocasionalmente",
      yes: "Sí",
      trying_to_quit: "Intentando dejarlo"
    },

    drink: {
      no: "No",
      occasionally: "Ocasionalmente",
      socially: "Socialmente",
      regularly: "Regularmente"
    },

    children: {
      dont_have: "No tengo",
      want: "Quiero",
      dont_want: "No quiero",
      not_sure: "No estoy seguro/a / depende"
    }
  }

  },

  hu: {
    backbtn: "← Vissza",
    createdateprofile: "Randi profil létrehozása",
    photosmax5: "Fotók (max 5)",
    addphotos: "+ Fotók hozzáadása",
    firstphotohint: "Az első kép lesz a profilképed",

    description: "Leírás",
    writesomethingaboutyourself: "Írj magadról valamit...",
    hobbies: "Hobbik",
    writehobbies: "Írd le a hobbijaid",
    aboutyou: "Rólad",
    saveprofile: "Profil mentése",

    premium: "Prémium",
    premiumsubscription: "🌟 Prémium előfizetés",
    premiumprice: "€10 / hó",
    unlockeverything: "Minden feloldása:",
    unlimiteddealbreakers: "Korlátlan dealbreaker",
    unlimitedavocados: "Korlátlan avokádó & tofu",
    fullsurveyaccess: "Teljes kérdőív hozzáférés (lásd mások összes válaszát)",
    customizeweights: "Kérdések súlyozása",
    incognitomode: "Inkognitó mód - rejtsd el magad miközben társakat keresel",
    createowncommunity: "Saját közösség létrehozása",
    travelmode: "Utazási mód",
    subscribesupport: "Előfizetéseddel támogatod a projektünket és segítesz terjeszteni a veganizmust.",
    learnmore: "Tudj meg többet →",
    upgradetopremium: "Előfizetés Prémiumra",

    createcommunity: "Közösség létrehozása",
    createcommunityname: "Közösség neve:",
    entercommunityname: "Közösség neve",
    setaphoto: "Kép beállítása",
    addphoto: "+ Fotó hozzáadása",
    writecommunitydescription: "Közösség leírása",
    communitylocation: "Közösség helye",
    setcoords: "Kattints a térképre a közösség központjának beállításához",
    communityradius: "Terület nagysága",
    communitydistancehint: "Felhasználók keresése ezen a területen",
    communityvalues: "Közösségi értékek",
    matchrequirements: "Egyezési feltétel",
    lowthreshold: "Minimum egyezés:",
    thresholdhint: "Csak a feltételeknek megfelelő felhasználók kapnak meghívást",
    createcommunitybtn: "Közösség létrehozása",

    friendstoggle: "Barátok",
    datetoggle: "Randi",

    profiletopbar: "👤 Profil",

    travelmodetoggle: "Utazási mód",

    premiumprofile: "🌟 Prémium profil",
    learnmoreaboutusandpremium: "Prémium funkciók →",
    premiumactive: "⭐ Prémium aktív",
    currentlypremium: "Jelenleg Prémium tag vagy.",
    cancelpremium: "Prémium lemondása",

    langs: "🌍 Nyelv",
    english: "Angol",
    spanish: "Spanyol",
    hungarian: "Magyar",
    setlang: "Beállítás",

    notifications: "🔔 Értesítések",
    matchnotifs: "Új párok",
    invitenotifs: "Meghívók",
    messagenotifs: "Üzenetek",
    updatenotifs: "Frissítések",

    contactus: "📩 Kapcsolat",
    needhelp: "Segítségre van szükséged?",
    contactsupportbtn: "Kapcsolat",

    account: "⚙️ Fiók",
    logout: "Kijelentkezés",
    deleteprofile: "Profil törlése",

    discover: "Felfedezés",
    messages: "Üzenetek",
    invitations: "Meghívók",
    profile: "Profil",

    friendsfilters: "Barát szűrők",
    datingfilters: "Randi szűrők",
    distance: "Távolság:",
    matchscore: "Egyezés:",
    close: "Bezár",
    save: "Mentés",
    agerange: "Kor:",
    min: "Min:",
    max: "Max:",
    show: "Mutatás:",
    all: "Mind",
    man: "Férfi",
    woman: "Nő",
    other: "Egyéb",

    editpreferences: "Preferenciák szerkesztése",
    cancel: "Mégse",

    contacttitle: "Kapcsolat",
    contactintro: "Itt vagyunk, hogy segítsünk...",
    subject: "Tárgy:",
    selectsubject: "-- Válassz --",
    reportbug: "Hiba jelentése",
    billingissue: "Fizetési probléma",
    appfeedback: "Visszajelzés",
    other: "Egyéb",
    message: "Üzenet:",
    sendmessage: "Küldés",
    send: "Küldés",

    replacemodal: "Profilkép csere",
    edithobbies: "Hobbi szerkesztése",
    editdescription: "Leírás szerkesztése",
    editlanguages: "Nyelvek szerkesztése",
    yourphotosmax5: "Fotóid (max 5)",

  missiontitl: "Mi a küldetésünk?",
  missionintro: "Az Elu Premium egy nagyobb vízió része: egy együttérzőbb vegán világ építése, ahol az emberek kevésbé érzik magukat egyedül, jobban megértik egymást, és jobban összhangban élnek az értékeikkel.",
  missionintro2: "Két alkalmazást hozunk létre, amelyek az embereket életük minden szakaszában támogatják egy tudatosabb és együttérzőbb élet felé vezető úton.",

  vegancircletitle: "Elu Vegan Circle",
  vegancircledesc: "Ez az alkalmazás, amit most használsz, arra készült, hogy segítsen a vegánoknak és a vegán iránt érdeklődőknek értékes kapcsolatokat találni. Csökkenti az elszigeteltség érzését, amely gyakran együtt jár ezzel az életmóddal.",

  veganmindtitle: "Elu Vegan Mind",
  veganminddesc: "A második alkalmazásunk az oktatásra és motivációra fókuszál. Finoman vezeti az embereket a vegán életmód felé, miközben felkészíti őket a való élet kihívásaira egy támogató és élvezetes módon.",
  veganminddesc2: "Történeteken, táplálkozási útmutatókon, egyszerű recepteken és más vegánok valós tapasztalatain keresztül segít a kezdőknek és a tapasztalt vegánoknak is, hogy tájékozottak, inspiráltak és magabiztosak maradjanak.",

  widermissiontitle: "Szélesebb küldetés",
  widermissiondesc: "Az alkalmazásainkon túl olyan platformokat fejlesztünk, amelyek segítenek felismerni a mai társadalom rejtett mintáit — a környezeti károktól kezdve az állatok kihasználásán át a társadalmi manipulációig.",
  approachdesc: "Hiszünk abban, hogy a változás tudatosságból fakad, nem nyomásból. Ezért a megközelítésünk mindig pozitív, tiszteletteljes és felemelő.",
  activismdesc: "Ezt az üzenetet a valós világba is elvisszük utcai aktivizmus és vizuális kampányok formájában. Célunk nem a konfrontáció, hanem az inspiráció — egyszerű, erőteljes üzenetekkel segítve az embereket.",

  missionsupport: "Az Elu Premium támogatja ezt a küldetést. Minden előfizetés segít nekünk bővíteni ezeket az eszközöket, fejleszteni az oktatást, és egy együttérzőbb üzenetet eljuttatni a világba.",

  travel_set_location_title: "📍 Utazási helyzet beállítása",
  travel_confirm: "Megerősítés",
  travel_cancel: "Mégse",

  location_error_title: "📍 Hiba a tartózkodási hely lekérésekor",
  location_error_text: "Kérlek, állítsd be manuálisan a helyzeted",

    //JS

createprofilehint: "Hozd létre a társkereső profilodat, hogy elkezdj ismerkedni",
createprofilebtn: "Profil létrehozása",
visibilityhint: "Kapcsold be a láthatóságodat, hogy elkezdhess embereket felfedezni",
visibilityturnonbtn: "Láthatóság bekapcsolása",
friendsmode: "Barátok",
datesmode: "Randi",
modeturnoff: "mód ki van kapcsolva",
gotosettings: "Ugrás a beállításokhoz",
nousersfound: "Nincs találat",
yearsold: "éves",

commons: "Azonos válaszok:",
nomatchinganswers: "Nincsenek egyező válaszok",
common: "Közös",

difference: "Egy különbség:",
nodifferences: "Nincsenek különbségek",

fullcompatibilitysurvey: "Teljes kompatibilitási kérdőív",
showsurvey: "Kérdőív megjelenítése", 
hidesurvey: "Kérdőív elrejtése", 
hobbies: "Hobbik",
hide: "Elrejtés",
sendavocado: "Avokádó küldése",

dateprofiledetails: "Randi profil részletei",
nosurveydata: "Nincs kérdőív adat",
sharetofu: "Tofu megosztása",

    createCommunity: "Közösség létrehozása",
    communityNameRequired: "Kérlek adj meg egy közösség nevet",
    communityNameMax: "A közösség neve maximum 30 karakter lehet",
    addPhotoRequired: "Kérlek adj hozzá közösségi képet",
    descriptionRequired: "Kérlek adj meg leírást",
    answerAllQuestions: "Kérlek válaszolj minden kérdésre",
    communityCreated: "Közösség létrehozva!",
    communityCreateError: "Hiba a közösség létrehozásakor",
    loading: "Betöltés...",
    noDescription: "Még nincs leírás.",
    editCommunity: "Közösség szerkesztése",
    deleteCommunity: "Közösség törlése",
    leaveCommunity: "Kilépés a közösségből",
    removeMember: "Tag eltávolítása",
    remove: "Törlés",
    confirmDelete: "Biztosan törlöd ezt a közösséget? Nem visszavonható.",
    confirmRemoveMember: "Eltávolítod ezt a tagot a közösségből?",
    confirmLeave: "Biztosan ki akarsz lépni a közösségből?",
    errorLoadingCommunity: "Hiba a közösség betöltésekor",
    errorUpdatingCommunity: "Hiba a közösség frissítésekor",
    errorDeletingCommunity: "Hiba a közösség törlésekor",
    errorLeavingCommunity: "Hiba a közösség elhagyásakor",
    errorDeletingMember: "Hiba a tag eltávolításakor",
    edit: "Szerkesztés",
    communityChatCreated: "Közösségi chat létrehozva",
    photo: "Fotó",

communitybubbletitle: "Hozd létre a saját közösségedet",
communitybubblep1: "Gyűjtsd össze a hozzád közel élő embereket, akik osztoznak az értékeidben és az érdeklődési köreidben.",
communitybubblep2: "Létrehozás után a preferenciáidnak megfelelő felhasználók a környékeden automatikusan meghívást kapnak a közösségedbe. Az új felhasználók is bekerülnek a regisztráció után.",
communitybubbleupgrade: "Frissítés Prémiumra →",

pronoun_subject_male: "Ő",
pronoun_subject_female: "Ő",

match: "Egyezés:",
you: "Te:",

outofavocados: "Elfogytak az avokádóid!",
outoftofus: "Elfogytak a tofuid!",

nomessagesyet: "Még nincsenek üzeneteid",
mute_chat: "Chat némítása",
unmute_chat: "Chat némítás feloldása",
unmatch: "Match törlése",
report_user: "Felhasználó jelentése",
confirm_unmatch: "Biztosan törlöd ezt az egyezést?",

report_user_title: "Felhasználó jelentése",
report_user_placeholder: "Írd le a tapasztalatodat...",

report_empty_text: "Kérlek írd le a tapasztalatodat.",
report_too_long: "Maximum 300 karakter engedélyezett.",
report_success: "Jelentés sikeresen elküldve.",
report_failed: "A jelentés küldése sikertelen.",

chat_placeholder: "Írj egy üzenetet...",

chat_locked_message: "A közösség tulajdonosa már nem prémium tag. Ez a chat deaktiválva lett.",

no_invitations: "Még nincsenek meghívások",
age_label: ({ age }) => `Életkor: ${age}`,
community: "Közösség",

reject_avocado: "Nem kérem ezt az avokádót",
accept_avocado: "Avokádó elfogadása",

reject_tofu: "Nem kérem ezt a tofut",
accept_tofu: "Tofu elfogadása",

members_lowercase: "tag",
members_highercase: "Tagok",

decline: "Elutasítás",
accept: "Elfogadás",

premium_profile: "⭐ Prémium profil",
basic_profile: "Alap profil",

avocado_unlimited: "Korlátlan avokádód van 🥑 a prémium profilnak köszönhetően",
avocado_none: "Elfogytak a mai avokádóid, szerezz korlátlan avokádót prémiummal!",
avocado_some: ({ count }) =>
  `Ma ${count} avokádót tudsz még küldeni 🥑`,

tofu_unlimited: "Korlátlan tofud van 🍲 a prémium profil miatt",
tofu_none: "Nincs több tofud mára, szerezz korlátlan tofut a prémiummal!",
tofu_some: ({ tofuCount }) => 
  `Ma ${tofuCount} tofud van még 🍲`,

visible: "Látható",
hidden: "Rejtett",

incognito_mode: "Inkognító mód",

respectful_badge: "⭐ Tisztelettudóan lezárt kapcsolatok",
importance: "Fontosság",

friends_preferences: "Barát beállítások",
show_preferences: "Beállítások megjelenítése",
hide_preferences: "Beállítások elrejtése",
edit: "Szerkesztés",
edit_available_in: "{days} nap múlva szerkeszthető",

edit_preferences: "Beállítások szerkesztése",

noAnswersYet: "Még nincsenek válaszok",


//Languages
english: "Angol",
spanish: "Spanyol",
hungarian: "Magyar",
french: "Francia",
german: "Német",
italian: "Olasz",
portuguese: "Portugál",
dutch: "Holland",
romanian: "Román",
russian: "Orosz",


//FriendsSurvey
vegan_reason: "Mi motivál a vegánságra?",
reduce_animal_suffering1: "Az állatok szenvedésének csökkentése",
environmental_concerns1: "Környezeti okok",
health_reasons1: "Egészség",
animals_primary1: "Vegán az állatokért, de más okok is fontosak",
all_reasons1: "Mindhárom",
eating_together_animals: "Leülsz olyan asztalhoz, ahol mások állati termékeket esznek?",
avoid_always2: "Egyáltalán nem, kerülöm az ilyen helyzeteket",
fine_with_it2: "Igen, nincs problémám vele",
uncomfortable_but_do_it2: "Kellemetlen, de néha elviselem",

dating_non_vegan: "Randiznál nem vegán emberrel?",
no3: "Nem",
maybe_open_minded3: "Talán, ha nyitott gondolkodású",
yes3: "Igen",

circle_importance: "Mennyire fontos számodra, hogy a közeli környezeted vegán legyen?",
very_important4: "Nagyon fontos",
somewhat_important4: "Kicsit fontos",
not_important4: "Nem fontos",

communication_style: "Hogyan kommunikálsz általában nem vegánokkal a veganizmusról?",
direct_confrontational5: "Direkt és konfrontatív módon",
neutral5: "Semleges, ugyanúgy beszélek mindenkivel",
respectful_educational5: "Tiszteletteljes és edukatív módon",
avoid_topic5: "Kerülöm a témát",

openness_opinions: "Mennyire vagy nyitott az ellentétes nézetek megbeszélésére?",
not_open6: "Nem vagyok nyitott",
somewhat_open6: "Kicsit nyitott",
very_open6: "Nagyon nyitott",

animal_vs_human_rights: "Hogyan látod az állati és emberi jogok kapcsolatát?",
animals_more_important7: "Az állati jogok fontosabbak",
humans_more_important7: "Az emberi jogok fontosabbak",
equal7: "Egyformán fontosak",
unsure7: "Nem tudom, túl összetett kérdés",

other_injustices: "Hogyan állsz más igazságtalanságokhoz?",
animals_only8: "Csak az állatokra fókuszálok",
support_when_possible8: "Szükség esetén kiállok ellenük.",
multiple_causes8: "Több ügy is aktívan érdekel",

politics: "Hogyan írnád le a politikai hozzáállásodat?",
left_intolerant9: "Baloldali, kerülöm a jobboldaliakat",
left_open9: "Baloldali, nyitott a párbeszédre",
right_open9: "Jobboldali, nyitott a párbeszédre",
right_intolerant9: "Jobboldali, kerülöm a baloldaliakat",
no_labels9: "Kerülöm a címkéket, a nyitott párbeszéd fontosabb",
dont_care9: "Nem érdekel a politika",

feminism: "Mi a véleményed a feminizmusról?",
negative10: "Negatív, nem támogatom",
frustrated10: "Frusztrál a jelenlegi nemi egyenlőtlenség",
supportive10: "Támogatom a feminizmust, de nem frusztrál",

lgbtq: "Mi a véleményed az LGBTQ+ jogokról?",
negative11: "Negatív, nem támogatom",
neutral11: "Semleges",
support11: "Támogatom az egyenlőséget",
active_support11: "Aktívan támogatom és igyekszem növelni a tudatosságot",

capitalism: "Mi a véleményed a kapitalizmusról?",
against12: "Ellene vagyok",
support12: "Támogatom",
regulated12: "Szabályozásra szorul",

lonely_vegan: "Magányos vegánnak érzed magad?",
yes13: "Igen",
sometimes13: "Néha",
no13: "Nem",

pets: "Mi a véleményed a háziállattartásról?",
vegan_feed_only14: "Rendben van, ha növényi táplálékot kapnak",
ok_anyway14: "Rendben van, akkor is ha húsos táplálékot kapnak",
prefer_none14: "Rendben van, de inkább nem tartok állatot",

injured_pigeon: "Látsz egy sérült galambot az utcán. Mit teszel?",
help_all_costs15: "Mindent megteszek, hogy segítsek",
try_if_possible15: "Megnézem, hogy mi a baja és ha tudok segíteni, akkor segítek",
leave_it15: "Otthagyom, nem tudok minden állaton segíteni",

activism_style: "Melyik aktivizmus áll hozzád a legközelebb?",
confrontational16: "Konfrontatív, provokatív",
calm16: "Nyugodt és edukáló",
storytelling16: "Inspiráló és történetmesélős",

activism: "Részt veszel aktivizmusban?",
active17: "Igen, aktívan",
rarely17: "Ritkán",
want_to17: "Nem még, de szeretnék",
not_my_thing17: "Nem az én világom",

conversations: "Milyen beszélgetéseket élvezel a legjobban?",
deep18: "Mélyeket és filozofikusakat",
light18: "Könnyedeket és szórakoztatókat",
mixed18: "Vegyesen mindkettő",

conflict: "Hogyan kezeled a nézeteltéréseket?",
avoid19: "Kerülöm őket",
calm19: "Nyugodt maradok és megpróbálom megérteni a másik embert",
emotional19: "Érzelmes leszek",

graphic_content_sensitivity: "Mennyire vagy érzékeny grafikus tartalom (állatkínzás) látványára?",
very_sensitive20: "Nagyon érzékeny vagyok – amennyire lehet, kerülöm",
somewhat_sensitive20: "Kicsit érzékeny vagyok – zavar, de elviselem",
not_sensitive20: "Nem igazán vagyok érzékeny – szükség esetén megnézem",

material_values: "Mennyire fontos számodra a pénz, a luxuscikkek és a fényűző életmód?",
important21: "Fontos – értékelem a kényelmet és a luxust",
neutral21: "Semleges – nem foglalkozom az anyagi dolgokkal",
minimalist21: "Minimalista vagyok – az egyszerű élet elég nekem",

// DATE QUESTIONS
dateQuestions: {
    gender: "Nem",
    age: "Kor",
    height: "Magasság (cm)",
    looking_for: "Mit keresel?",
    smoke: "Dohányzol?",
    drink: "Fogyasztasz alkoholt?",
    children: "Van vagy szeretnél gyereket?"
  },

  dateOptions: {
    gender: {
      "1": "Férfi",
      "0": "Nő",
      "2": "Egyéb"
    },

    looking_for: {
      long_term: "Hosszú távú kapcsolat",
      connection_no_commitment: "Kapcsolat elköteleződés nélkül",
      ethical_non_monogamy: "Etikus non-monogámia",
      casual: "Alkalmi"
    },

    smoke: {
      no: "Nem",
      occasionally: "Alkalmanként",
      yes: "Igen",
      trying_to_quit: "Leszokóban"
    },

    drink: {
      no: "Nem",
      occasionally: "Alkalmanként",
      socially: "Társaságban",
      regularly: "Rendszeresen"
    },

    children: {
      dont_have: "Nincs",
      want: "Szeretnék",
      dont_want: "Nem szeretnék",
      not_sure: "Nem biztos / attól függ"
    }
  }

  }
};

let currentLang = "en";

function loadLanguage() {
  const savedLang = localStorage.getItem("app_language");

  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    currentLang = "en";
  }

  applyTranslations();
}

function t(key, params = {}) {
  const parts = key.split(".");
  let value = translations[currentLang];

  for (const part of parts) {
    value = value?.[part];
  }

  if (typeof value === "function") {
    return value(params);
  }

  return value ?? key;
}

function applyTranslations() {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

//#endregion

//#region Init

let appState = {
  user: null,
  profile: null,
  isReady: false,
  selectedAnswers: {},
  selectedDealbreakers: new Set(),
  isPremium: false,
  error: null,
};

const appUI = {
  currentTab: "discover",
  tabHistory: []
};

let isChatOpen = false;

let communityLatLng = null;
let communityMap = null;
let communityMarker = null;

window.__deepLinkQueue = [];
window.__appReady = false;

// 🔌 FETCH PROFILES
async function loadProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) throw userError;

  const { data, error } = await supabase
    .from("0con_profilesdata")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (error) throw error;

  return { user, profile: data };
}

// 🚀 MAIN INIT
async function initApp() {
  try {

    const { user, profile } = await loadProfile();

    appState.user = user;       // 👈 STORE USER GLOBALLY
    appState.profile = profile;
    appState.isReady = true;

  resolveAppReady(); // TEMPORAL FOR TESTING

    initUI();

  } catch (err) {
    console.error("Init failed:", err);
    appState.error = err.message;
  }
}

// 🎯 UI INIT (safe DOM setup after data is ready)
function initUI() {

  loadLanguage();

  setupButtons();
  setupTabs();
  setupModals();
  setupProfile();
 // setupCommunities();
  subscribeToMessageUpdates();
  subscribeToInvitations();
  renderCommunityTopbar();
  PremiumBoxHiding();
  startHeartbeat();
  loadNotificationSettings();

  renderFriendsProfile(appState.profile);
  renderDateProfileView(appState.profile);

  renderDateProfile(appState.profile);

  createMessageCards();
  createInvitationCards();

  setupDiscoverTab();

  initToggleListeners();

//  maybeHandleBrowserLocation();
}

//#endregion

//#region Helpers

const DEFAULT_ANSWER_WEIGHTS = {
  pets: 0.5,
  lgbtq: 0.3,
  activism: 0.1,
  conflict: 0.5,
  feminism: 0.3,
  politics: 0.4,
  capitalism: 0.4,
  lonely_vegan: 0.2,
  vegan_reason: 0.6,
  conversations: 0.5,
  activism_style: 0.5,
  injured_pigeon: 0.2,
  material_values: 0.3,
  dating_non_vegan: 0.4,
  other_injustices: 0.5,
  circle_importance: 0.4,
  openness_opinions: 0.7,
  communication_style: 0.7,
  animal_vs_human_rights: 0.5,
  eating_together_animals: 0.4,
  graphic_content_sensitivity: 0.1
};

const AppData = (() => {
  const languages = [
    { id: "english", label: "English" },
    { id: "spanish", label: "Spanish" },
    { id: "hungarian", label: "Hungarian" },
    { id: "french", label: "French" },
    { id: "german", label: "German" },
    { id: "italian", label: "Italian" },
    { id: "portuguese", label: "Portuguese" },
    { id: "dutch", label: "Dutch" },
    { id: "romanian", label: "Romanian" },
    { id: "russian", label: "Russian" }
  ];

  const questions = [

    {
    id: "vegan_reason",
    text: "What are your main reasons for being vegan?",
    options: [
      { id: "reduce_animal_suffering1", text: "Reduce animal suffering" },
      { id: "environmental_concerns1", text: "Environmental concerns" },
      { id: "health_reasons1", text: "Health reasons" },
      { id: "animals_primary1", text: "Vegan for the animals, while I care about other reasons" },
      { id: "all_reasons1", text: "For all the reasons" }
    ]
  },
  {
    id: "eating_together_animals",
    text: "Are you comfortable sitting at a table where others eat animal products?",
    options: [
      { id: "avoid_always2", text: "Not at all, I avoid situations like that" },
      { id: "fine_with_it2", text: "Yes, no problem" },
      { id: "uncomfortable_but_do_it2", text: "I feel uncomfortable, but still do it sometimes" }
    ]
  },
  {
    id: "dating_non_vegan",
    text: "Would you date someone who is not vegan?",
    options: [
      { id: "no3", text: "No" },
      { id: "maybe_open_minded3", text: "Maybe, if they are open-minded" },
      { id: "yes3", text: "Yes" }
    ]
  },
  {
    id: "circle_importance",
    text: "How important is it for you to keep your close circles vegan?",
    options: [
      { id: "very_important4", text: "Very important" },
      { id: "somewhat_important4", text: "Somewhat important" },
      { id: "not_important4", text: "Not important" }
    ]
  },
  {
    id: "communication_style",
    text: "How do you usually communicate with non-vegans about veganism?",
    options: [
      { id: "direct_confrontational5", text: "Direct and confrontational" },
      { id: "neutral5", text: "Neutral - no difference" },
      { id: "respectful_educational5", text: "Respectful and educational" },
      { id: "avoid_topic5", text: "I avoid the topic" }
    ]
  },
  {
    id: "openness_opinions",
    text: "How open are you to discussing opposing views?",
    options: [
      { id: "not_open6", text: "Not open" },
      { id: "somewhat_open6", text: "Somewhat open" },
      { id: "very_open6", text: "Very open" }
    ]
  },
  {
    id: "animal_vs_human_rights",
    text: "How do you see the relationship between animal rights and human rights?",
    options: [
      { id: "animals_more_important7", text: "Animal rights are more important" },
      { id: "humans_more_important7", text: "Human rights are more important" },
      { id: "equal7", text: "Equally important" },
      { id: "unsure7", text: "Not sure, too complex" }
    ]
  },
  {
    id: "other_injustices",
    text: "How do you approach other injustices?",
    options: [
      { id: "animals_only8", text: "Focus on animal rights only" },
      { id: "support_when_possible8", text: "I stand up against them when it's necessary" },
      { id: "multiple_causes8", text: "Actively care about multiple" }
    ]
  },
  {
    id: "politics",
    text: "How would you describe your political attitude?",
    options: [
      { id: "left_intolerant9", text: "Left, I avoid rightists" },
      { id: "left_open9", text: "Left, open to dialogue" },
      { id: "right_open9", text: "Right, open to dialogue" },
      { id: "right_intolerant9", text: "Right, I avoid leftists" },
      { id: "no_labels9", text: "I avoid labels, open dialogue is more important" },
      { id: "dont_care9", text: "Don't care about politics" }
    ]
  },
  {
    id: "feminism",
    text: "What is your perspective on feminism?",
    options: [
      { id: "negative10", text: "Negative" },
      { id: "frustrated10", text: "Frustrated by gender dynamics" },
      { id: "supportive10", text: "Supportive without hostility" }
    ]
  },
  {
    id: "lgbtq",
    text: "What are your views on LGBTQ+ rights?",
    options: [
      { id: "negative11", text: "Negative" },
      { id: "neutral11", text: "Neutral" },
      { id: "support11", text: "Support equality" },
      { id: "active_support11", text: "Actively supportive and advocate for awareness" }
    ]
  },
  {
    id: "capitalism",
    text: "What is your view on capitalism?",
    options: [
      { id: "against12", text: "Against it" },
      { id: "support12", text: "Support it" },
      { id: "regulated12", text: "It could work with proper regulation" }
    ]
  },
  {
    id: "lonely_vegan",
    text: "Do you feel like a lonely vegan?",
    options: [
      { id: "yes13", text: "Yes" },
      { id: "sometimes13", text: "Sometimes" },
      { id: "no13", text: "No" }
    ]
  },
  {
    id: "pets",
    text: "What is your view on keeping pets?",
    options: [
      { id: "vegan_feed_only14", text: "Only okay if vegan-fed" },
      { id: "ok_anyway14", text: "Okay anyway" },
      { id: "prefer_none14", text: "Okay, but I prefer not having pets" }
    ]
  },
  {
    id: "injured_pigeon",
    text: "You see an injured pigeon on the street, what do you do?",
    options: [
      { id: "help_all_costs15", text: "I do everything I can to help" },
      { id: "try_if_possible15", text: "I check if I can realistically help and do it if possible" },
      { id: "leave_it15", text: "Leave it, I can't save every animal" }
    ]
  },
  {
    id: "activism_style",
    text: "Which activism style resonates most with you?",
    options: [
      { id: "confrontational16", text: "Confrontational / disruptive" },
      { id: "calm16", text: "Calm and educational" },
      { id: "storytelling16", text: "Inspirational / storytelling" }
    ]
  },
  {
    id: "activism",
    text: "Do you do activism?",
    options: [
      { id: "active17", text: "Yes, actively" },
      { id: "rarely17", text: "Rarely" },
      { id: "want_to17", text: "Not yet, but I want to" },
      { id: "not_my_thing17", text: "Not my thing" }
    ]
  },
  {
    id: "conversations",
    text: "What conversations do you enjoy most?",
    options: [
      { id: "deep18", text: "Deep and philosophical" },
      { id: "light18", text: "Light and fun" },
      { id: "mixed18", text: "Mix of both" }
    ]
  },
  {
    id: "conflict",
    text: "How do you handle disagreements?",
    options: [
      { id: "avoid19", text: "I avoid them" },
      { id: "calm19", text: "I stay calm and try to understand the other person" },
      { id: "emotional19", text: "I become emotionally involved" }
    ]
  },
  {
  id: "graphic_content_sensitivity",
  text: "How sensitive are you to seeing graphic content (animal abuse)?",
  options: [
    { id: "very_sensitive20", text: "Very sensitive – I avoid it whenever possible" },
    { id: "somewhat_sensitive20", text: "Somewhat sensitive – it affects me, but I can handle it" },
    { id: "not_sensitive20", text: "Not very sensitive – I can watch it if needed" }
  ]
  },
  {
  id: "material_values",
  text: "How important are money, luxury items, and a fancy lifestyle to you?",
  options: [
    { id: "important21", text: "Important – I value comfort and luxury" },
    { id: "neutral21", text: "Neutral – I don't focus much on material things" },
    { id: "minimalist21", text: "I am more of a minimalist – simple living is enough for me" }
  ]
  }


  ];


  // 🔥 INDEXES (THIS IS THE MAGIC)
  const languageMap = {};
  const questionMap = {};
  const optionMap = {};

  languages.forEach(lang => {
    languageMap[lang.id] = lang;
  });

  questions.forEach(q => {
    questionMap[q.id] = q;

    q.options.forEach(opt => {
      optionMap[opt.id] = {
        ...opt,
        questionId: q.id
      };
    });
  });

  return {
    languages,
    questions,

    languageMap,
    questionMap,
    optionMap
  };
})();

const DateData = (() => {

  const map = {
    gender: {
      answers: (v) => t(`dateOptions.gender.${v}`)
    },

    age: {
      default: (v) => `${v}`
    },

    height: {
      default: (v) => `${v} cm`
    },

    looking_for: {
      answers: (v) => t(`dateOptions.looking_for.${v}`)
    },

    smoke: {
      answers: (v) => t(`dateOptions.smoke.${v}`)
    },

    drink: {
      answers: (v) => t(`dateOptions.drink.${v}`)
    },

    children: {
      answers: (v) => t(`dateOptions.children.${v}`)
    }
  };

  function getLabel(questionId, value) {
    const config = map[questionId];

    if (!config) return value ?? "—";

    if (Array.isArray(value)) {
      return value.map(v => getLabel(questionId, v)).join(", ");
    }

    if (config.answers) {
      return config.answers(value);
    }

    if (config.default) {
      return config.default(value);
    }

    return value ?? "—";
  }

  function getQuestionLabel(questionId) {
    return t(`dateQuestions.${questionId}`);
  }

  return {
    getLabel,
    getQuestionLabel
  };
})();

const dateQuestions = [
  {
    id: "gender",
    label: "Gender",
    type: "single",
    options: [
      { id: 1, label: "Man" },
      { id: 0, label: "Woman" },
      { id: 2, label: "Other" }
    ]
  },

  {
    id: "age",
    label: "Age",
    type: "number"
  },

  {
    id: "height",
    label: "Height (cm)",
    type: "number"
  },

  {
    id: "looking_for",
    label: "What are you looking for?",
    type: "single",
    options: [
      { id: "long_term", label: "Long term" },
      { id: "connection_no_commitment", label: "Connection without commitment" },
      { id: "ethical_non_monogamy", label: "Ethical non-monogamy" },
      { id: "casual", label: "Casual" }
    ]
  },

  {
    id: "smoke",
    label: "Do you smoke?",
    type: "single",
    options: [
      { id: "no", label: "No" },
      { id: "occasionally", label: "Occasionally" },
      { id: "yes", label: "Yes" },
      { id: "trying_to_quit", label: "Trying to quit" }
    ]
  },

  {
    id: "drink",
    label: "Do you drink alcohol?",
    type: "single",
    options: [
      { id: "no", label: "No" },
      { id: "occasionally", label: "Occasionally" },
      { id: "socially", label: "Socially" },
      { id: "regularly", label: "Regularly" }
    ]
  },

  {
    id: "children",
    label: "Do you have or want children?",
    type: "single",
    options: [
      { id: "dont_have", label: "Already Have" },
      { id: "want", label: "Want" },
      { id: "dont_want", label: "Don't want" },
      { id: "not_sure", label: "Not sure / depends" }
    ]
  }
];

async function updateLastSeen(userId) {
  const { error } = await supabase
    .from("0con_profilesdata")
    .update({
      last_online_at: new Date().toISOString()
    })
    .eq("id", userId);

  if (error) {
   console.error("Failed to update last seen:", error);
  }
}

function showLoading() {
  document.getElementById("loading-screen").classList.add("active");
}

function hideLoading() {
  document.getElementById("loading-screen").classList.remove("active");
}

function showLoadingSmall() {
  document.getElementById("loading-screenSmall").classList.add("active");
}

function hideLoadingSmall() {
  document.getElementById("loading-screenSmall").classList.remove("active");
}

function getLastOpened(key) {
  return localStorage.getItem(key);
}

function setLastOpened(key) {
  localStorage.setItem(key, new Date().toISOString());
}

function isNewer(createdAt, lastOpened) {
  if (!lastOpened) return true;
  return new Date(createdAt) > new Date(lastOpened);
}

window.handleBackButton = function () {

  // 🔥 PREMIUM INFO -> go back to PREMIUM
  const premiumInfo = document.getElementById("premiumInfo");
  const premium = document.getElementById("premium");

  if (premiumInfo && !premiumInfo.classList.contains("hidden")) {
    premiumInfo.classList.add("hidden");
    premium?.classList.remove("hidden");
    return;
  }

  // 🔥 PREMIUM SCREEN -> close it
  if (premium && !premium.classList.contains("hidden")) {
    closePremiumScreen();
    return;
  }

  // 🔥 priority: chat state first
  if (isChatOpen) {
    openMessagesList();
    return;
  }

  // otherwise fall back to your tab system
  if (appUI.tabHistory.length > 0) {
    const prevTab = appUI.tabHistory.pop();

    const tab = document.getElementById(prevTab);
    if (!tab) return;

    appUI.currentTab = prevTab;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    return;
  }

  // optional fallback (do nothing or exit app)
};

let resolveAppReady;
const appReady = new Promise((resolve) => {
  resolveAppReady = resolve;
});

async function normalizeFile(file) {
  // already good Blob/File
  if (file instanceof Blob) return file;

  // Android WebView sometimes passes object-like blobs
  if (file?.arrayBuffer) {
    const buffer = await file.arrayBuffer();
    return new Blob([buffer], { type: "image/jpeg" });
  }

  // fallback: last resort
  return new Blob([file], { type: "image/jpeg" });
}

//#endregion

//#region Discover Tab

let discoverState = {
  activeTab: "friends",
  friends: [],
  dates: [],
  loading: false,
  lastFetched: {
    friends: 0,
    dates: 0
  }
};

let travelState = {
  lat: null,
  lng: null,
  map: null,
  marker: null
};

let fallbackMapState = {
  map: null,
  marker: null,
  selected: null,
  initialized: false
};

//#region Friends / Common Functions
// -----------------------------
// INIT DISCOVER TAB
// -----------------------------
function setupDiscoverTab() {
  const friendsBtn = document.getElementById("friendsBtn");
  const dateBtn = document.getElementById("dateBtn");

  const friendsView = document.getElementById("friendsView");
  const dateView = document.getElementById("dateView");

  if (!friendsBtn || !dateBtn || !friendsView || !dateView) {
    console.warn("Discover DOM not ready");
    return;
  }

  friendsBtn.addEventListener("click", () => setDiscoverTab("friends"));
  dateBtn.addEventListener("click", () => setDiscoverTab("dates"));

  // default load
  setDiscoverTab("friends");
}

// -----------------------------
// SWITCH TAB
// -----------------------------
function setDiscoverTab(tab) {

  const friendsBtn = document.getElementById("friendsBtn");
  const dateBtn = document.getElementById("dateBtn");

  const friendsView = document.getElementById("friendsView");
  const dateView = document.getElementById("dateView");

  friendsBtn.classList.toggle("active", tab === "friends");
  dateBtn.classList.toggle("active", tab === "dates");

  friendsView.classList.toggle("active", tab === "friends");
  dateView.classList.toggle("active", tab === "dates");

  loadDiscover(tab);
}

// -----------------------------
// LOAD DISCOVER (with cache)
// -----------------------------
async function loadDiscover(type) {
  // -----------------------------
  // 🧠 DATES LOGIC (priority-based)
  // -----------------------------
  if (type === "dates") {

    // ❗ STEP 1: survey NOT completed
    if (!appState.profile?.dates_survey_completed) {
      renderSurveyRequired();
      return;
    }

    // ❗ STEP 2: mode OFF
    if (!appState.profile?.dates_mode_on) {
      renderVisibilityOff("dates");
      return;
    }
  }

  // -----------------------------
  // 🧠 FRIENDS LOGIC
  // -----------------------------
  if (type === "friends") {
    if (!appState.profile?.friends_mode_on) { 
      renderVisibilityOff("friends");
      return;
    }
  }

  // -----------------------------
  // ✅ CACHE
  // -----------------------------
  const now = Date.now();

  const hasData =
    type === "friends"
      ? discoverState.friends.length > 0
      : discoverState.dates.length > 0;

  const cacheValid = now - discoverState.lastFetched[type] < 60000;

  if (hasData && cacheValid) return;

  await fetchDiscover(type);
}

function renderSurveyRequired() {
  const container = document.getElementById("dateList");
  if (!container) return;

  container.innerHTML = `
  <div class="empty-state">
    <p>💘 ${t("createprofilehint")}</p>
    <button class="go-survey-btn">
     ${t("createprofilebtn")}
    </button>
  </div>
`;

const btn = container.querySelector(".go-survey-btn");

if (btn) {
  btn.addEventListener("click", () => {
  openScreen("survey");
});
}
}

function renderVisibilityOff(type) {
  const container =
    type === "friends"
      ? document.getElementById("friendsList")
      : document.getElementById("dateList");

  if (!container) return;

  const modeKey = type === "friends" ? "friends_mode_on" : "dates_mode_on";

  container.innerHTML = `
    <div class="empty-state">
      <p>👀 ${t("visibilityhint")}</p>
      <button>${t("visibilityturnonbtn")}</button>
    </div>
  `;

  container.querySelector("button").onclick = () => {
  enableMode(modeKey, type);
  };
}

function renderModeOff(type) {
  const container =
    type === "friends"
      ? document.getElementById("friendsList")
      : document.getElementById("dateList");

  if (!container) return;

  container.innerHTML = `
    <div class="empty-state">
      <p>⚙️ ${t(type === "friends" ? "friendsmode" : "datesmode")} ${t("modeturnoff")}</p>
      <button onclick="openTab('settings')">${t("gotosettings")}</button>
    </div>
  `;
}

// -----------------------------
// SUPABASE CALL
// -----------------------------
async function fetchDiscover(type) {
  discoverState.loading = true;
  showLoadingSmall?.();

  const rpcName =
    type === "friends"
      ? "get_friends_users_with_distance"
      : "get_dates_users_with_distance";

  try {
    const params = {
      p_viewer_id: appState.user.id,
      result_limit: 18,
    };

    const { data, error } = await supabase.rpc(rpcName, params);

    if (error) {
      throw error;
    }

    if (type === "friends") {
  discoverState.friends = (data || []).map(u =>
    normalizeDiscoverUser(u, "friends")
  );
  renderDiscover("friends");
} else {
  discoverState.dates = (data || []).map(u =>
    normalizeDiscoverUser(u, "dates")
  );
  renderDiscover("dates");
}

    discoverState.lastFetched[type] = Date.now();

  } catch (err) {
    console.error("[discover] Fetch exception:", err);
  } finally {
    discoverState.loading = false;
    hideLoadingSmall?.();
  }
}

// -----------------------------
// RENDER
// -----------------------------
function renderDiscover(type) {
  const data =
    type === "friends"
      ? discoverState.friends
      : discoverState.dates;

  const container =
    type === "friends"
      ? document.getElementById("friendsList")
      : document.getElementById("dateList");

  if (!container) return;

  // ✅ EMPTY STATE
  if (!data || data.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>😕 ${t("nousersfound")}</p>
      </div>
    `;
    return;
  }

  // ✅ NORMAL STATE
  container.innerHTML = data.map(createDiscoverCard).join("");
  attachCardEvents(type);
}

function normalizeDiscoverUser(user, type) {
  return {
    id: user.c_id,
    name: user.c_name,
    photo: user.c_photo,
    age: type === "dates" ? user.c_age : null,
    score: user.score ?? 0,
    distance: user.distance_miles ?? null,
  };
}

function formatDistance(distance) {
  if (distance == null) return "";

  const lang = appState?.profile?.lang || "en";

  const value = lang === "en"
    ? distance
    : distance * 1.60934;

  const unit = lang === "en" ? "mi" : "km";

  // 👇 under 1 → always "1 km" / "1 mi"
  if (value < 1) {
    return `< 1 ${unit}`;
  }

  // 👇 normal formatting
  if (value < 10) {
    return `${value.toFixed(1)} ${unit}`;
  }

  return `${Math.round(value)} ${unit}`;
}

// -----------------------------
// REFRESH (optional button)
// -----------------------------
async function refreshDiscover() {
  await fetchDiscover(discoverState.activeTab);
}


function getScoreClass(score) {
  if (score >= 75) return "score-high";
  if (score >= 40) return "score-mid";
  return "score-low";
}

function createDiscoverCard(user) { 
  const score = Math.round(user.score || 0);
  const distanceText = formatDistance(user.distance);

  return `
    <div class="discover-card clickable" data-user-id="${user.id}">
      
      <div class="card-image">
        <img 
          src="${user.photo || "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg"}" 
          alt="${user.name}"
        />
      </div>

      <div class="card-overlay">

        <div class="card-top">
          <div class="card-name">${user.name}</div>
          ${user.age ? `<div class="card-age">${user.age} ${t("yearsold")}</div>` : ""}
          ${distanceText ? `<div class="card-distance">📍 ${distanceText}</div>` : ""}
        </div>

        <div class="card-score ${getScoreClass(score)}">
          ${score}%
        </div>

      </div>

    </div>
  `;
}

function attachCardEvents(type) {
  document.querySelectorAll(".discover-card").forEach(card => {
    card.onclick = () => {
      const userId = card.dataset.userId;
      openUserProfile(userId, type);
    };
  });
}

async function enableMode(column, type) {
  try {
    showLoadingSmall?.();

    // ✅ update ONLY own row
    const { error } = await supabase
      .from("0con_profilesdata")
      .update({ [column]: true })
      .eq("id", appState.user.id);

    if (error) throw error;

    // ✅ update local state instantly (no reload needed)
    appState.user[column] = true;

    // ✅ refetch users immediately
    await fetchDiscover(type);

  } catch (err) {
    console.error("Enable mode error:", err);
  } finally {
    hideLoadingSmall?.();
  }
}

async function openUserProfile(userId, type, isMatchContext = false) {
  showLoadingSmall?.();

  try { 
    const { data, error } = await supabase.rpc("get_user_profile", { 
      p_viewer_id: appState.user.id,
      p_target_id: userId,
      p_mode: type 
    });

    if (error) throw error;

    renderProfilePopup(data, isMatchContext);

  } catch (err) {
    console.error("Profile fetch error:", err);
  } finally {
    hideLoadingSmall?.();
  }
}

function renderProfilePopup(user, isMatchContext = false) {
  const popup = document.getElementById("profile-popup");
  const container = document.getElementById("profile-data");
  const backdrop = document.getElementById("profile-backdrop");

  if (user.type === "friends") {
    container.innerHTML = renderFriendsProfileCard(user, isMatchContext);
  } else {
    container.innerHTML = renderDateProfileCard(user, isMatchContext);
  }

  // Show popup + backdrop
  popup.classList.remove("hidden");
  backdrop.classList.remove("hidden");

  // Disable background interaction
  document.body.classList.add("modal-open");
}

function getQuestionById(id) {
  return AppData.questions.find(q => q.id === id);
}

function renderQuestionBlock(questionId, viewerAnswer, targetAnswer, label) {
  const q = getQuestionById(questionId);
  if (!q) return "";

  return `
    <div class="section">
      <h4>${t(q.id, currentLang)}</h4>
      <ul>
        ${q.options.map(opt => {

          const isViewer = opt.id === viewerAnswer;
          const isTarget = opt.id === targetAnswer;

          let style = "";

          if (isViewer && isTarget) {
            style = "background:#d4edda;font-weight:bold;color:#155724;";
          } else if (isViewer) {
            style = "background:#fff3cd;font-weight:bold;";
          } else if (isTarget) {
            style = "background:#f8d7da;";
          }

          return `
            <li style="padding:6px;border-radius:6px;margin-bottom:4px;${style}">
              ${t(opt.id, currentLang)}
            </li>
          `;
        }).join("")}
      </ul>
    </div>
  `;
}

function renderFriendsProfileCard(user, isMatchContext = false) { 
  const isPremium = appState.profile.is_premium;

  return `
    <img src="${user.photo}" width="100%" />

    <h2>${user.name}</h2>
    <p>${user.description || ""}</p>

    <div class="section">
      <h4>🎯 ${t("hobbies")}</h4>
      <p>${user.hobbies || ""}</p>
    </div>

${!isPremium ? `
  <div class="section">
    <h4>🤝 ${t("commons")}</h4>
    ${
      !Array.isArray(user.common) || user.common.length === 0
        ? `<p>${t("nomatchinganswers")}</p>`
        : user.common.map(c =>
            renderQuestionBlock(
              c.questionId,
              c.viewerAnswer,
              c.targetAnswer,
              t("common")
            )
          ).join("")
    }
  </div>

  <div class="section">
    <h4>⚡ ${t("differences")}</h4>
    ${
      !user.difference || !user.difference.questionId
        ? `<p>${t("nodifference")}</p>`
        : renderQuestionBlock(
            user.difference.questionId,
            user.difference.viewerAnswer,
            user.difference.targetAnswer,
            t("difference")
          )
    }
  </div>
` : `
<div class="section">
  <h4>📊 ${t("fullcompatibilitysurvey")}</h4>

  <button onclick="toggleSurvey('${user.id}', this)">
    ${t("showsurvey")}
  </button>

  <div id="premiumSurvey-${user.id}" style="display:none;">
    ${renderPremiumSurvey(user.friendsurvey, user.survey)}
  </div>
</div>
`}

    <div class="actions" style="${isMatchContext ? 'display:none;' : ''}">
      <button data-action="hide" data-id="${user.id}">
        ❌ ${t("hide")}
      </button>

      <button data-action="avocado" data-id="${user.id}">
        🥑 ${t("sendavocado")}
      </button>
    </div>
  `;
}

function renderDateProfileCard(user, isMatchContext = false) {
  const isPremium = appState.profile.is_premium;

  return `
    <div class="photo-gallery">
      ${(user.photos || [])
        .map(p => `<img src="${p.url}" style="width:100%; margin-bottom:6px; border-radius:8px;" />`)
        .join("")}
    </div>

    <h2>${user.name}</h2>
    <p>${user.date_description || ""}</p>

    <div class="section">
      <h4>🎯 ${t("hobbies")}</h4>
      <p>${user.hobbies || ""}</p>
    </div>

${!isPremium ? `
  <div class="section">
    <h4>🤝 ${t("commons")}</h4>
    ${
      !Array.isArray(user.common) || user.common.length === 0
        ? `<p>${t("nomatchinganswers")}</p>`
        : user.common.map(c =>
            renderQuestionBlock(
              c.questionId,
              c.viewerAnswer,
              c.targetAnswer,
              t("common")
            )
          ).join("")
    }
  </div>

  <div class="section">
    <h4>⚡ ${t("difference")}</h4>
    ${
      !user.difference || !user.difference.questionId
        ? `<p>${t("nodifferences")}</p>`
        : renderQuestionBlock(
            user.difference.questionId,
            user.difference.viewerAnswer,
            user.difference.targetAnswer,
            t("difference")
          )
    }
  </div>
` : `
<div class="section">
  <h4>📊 ${t("fullcompatibilitysurvey")}</h4>

  <button onclick="toggleSurvey('${user.id}', this)">
    ${t("showsurvey")}
  </button>

  <div id="premiumSurvey-${user.id}" style="display:none;">
    ${renderPremiumSurvey(user.friendsurvey, user.survey)}
  </div>
</div>
`}

    <div class="section">
  <h4>💭 ${t("dateprofiledetails")}</h4>

  ${
    Array.isArray(user.survey)
      ? user.survey
          .map(item => {
            return `
              <div style="padding:6px 0; border-bottom:1px solid #eee;">
                <strong>${DateData.getQuestionLabel(item.key)}:</strong>
                ${DateData.getLabel(item.key, normalizeValue(item.value))}
              </div>
            `;
          })
          .join("")
      : `<p>${t("nosurveydata")}</p>`
  }
</div>

    
        <div class="actions"  style="${isMatchContext ? 'display:none;' : ''}">
          <button data-action="hide" data-id="${user.id}">
            ❌ ${t("hide")}
          </button>

          <button data-action="tofu" data-id="${user.id}">
            🍲 ${t("sharetofu")}
          </button>
        </div>
      `
    
  ;
}

window.toggleSurvey = function(userId, btn) {
  const content = document.getElementById(`premiumSurvey-${userId}`);
  if (!content) return;

  const isOpen = content.style.display === "block";

  content.style.display = isOpen ? "none" : "block";

  btn.textContent = isOpen
    ? t("showsurvey")
    : t("hidesurvey");
}

function renderPremiumSurvey(friendsurvey, datesurvey) {
  const ownsurveyRaw = appState.profile.friends_survey;

  const ownsurvey = Object.entries(ownsurveyRaw).map(
    ([key, value]) => ({ key, value })
  );

  const targetMap = new Map(
    friendsurvey.map(i => [i.key, i.value])
  );

  // ----------------------------
  // Determine pronoun from datesurvey
  // ----------------------------
let genderValue = datesurvey?.find(
  d => d.key === "gender"
)?.value;

const isFemale = Number(genderValue) === 0;

  const pronounSubject = t(isFemale ? "pronoun_subject_female" : "pronoun_subject_male");

  return ownsurvey.map(item => {
    const viewerAnswerId = item.value;
    const targetAnswerId = targetMap.get(item.key);

    const viewerOption = AppData.optionMap[viewerAnswerId];
    const targetOption = AppData.optionMap[targetAnswerId];

    const viewerText = viewerOption?.text || viewerAnswerId;
    const targetText = targetOption?.text || targetAnswerId || "—";

    const isMatch = viewerAnswerId === targetAnswerId;

    const questionText =
      AppData.questionMap[item.key]?.text || item.key;

    return `
      <div class="survey-row">

        <div class="question">
          ${questionText}
        </div>

        <div class="answers">

          ${
            isMatch
              ? `
                <span class="match">
                  ${t("match")} ${viewerText}
                </span>
              `
              : `
                <span class="viewer">
                  ${t("you")} ${viewerText}
                </span>

                <span class="target">
                  ${pronounSubject}: ${targetText}
                </span>
              `
          }

        </div>

      </div>
    `;
  }).join("");
}

document.addEventListener("click", (e) => {
  if (e.target.id === "toggleSurveyBtn") {
    const el = document.getElementById("premiumSurvey");
    el.style.display = el.style.display === "none" ? "block" : "none";
  }
});

function normalizeValue(value) {
  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}

    // fallback: comma-separated string
    return value.split(",").map(v => v.trim());
  }

  return value;
}

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;

  if (action === "tofu") sendTofu(id);
  if (action === "avocado") sendAvocado(id);
  if (action === "hide") hideUser(id);
});

async function hideUser(userId) {
  await performAction(userId, null);
}

async function sendAvocado(userId) {
  const profile = appState.profile;

  if ((profile?.avocados || 0) <= 0) {
    alert(`${t("outofavocados")}`);
    return;
  }

  await performAction(userId, 1);
}

async function sendTofu(userId) {
  const profile = appState.profile;

  if ((profile?.tofus || 0) <= 0) {
    alert(`${t("outoftofus")}`);
    return;
  }

  await performAction(userId, 2);
}

async function performAction(userId, invitationType = null) {
  try {
    await addToSeenProfiles(userId);

    if (invitationType !== null) {
      const { error } = await supabase
        .from("0con_incomes")
        .insert({
          receiver_id: userId,
          sender_id: appState.user.id,
          invitation_type: invitationType
        });

      if (error) throw error;

      // ✅ ONLY deduct if NOT premium
      if (!appState.profile?.is_premium) {
        await deductFood(appState.user.id, invitationType);
      }
    }

    const card = getUserCard(userId);
    if (card) card.classList.add("seen");

  } catch (err) {
    console.error("Action failed:", err);
  }

  closeProfilePopup();
}

async function deductFood(userId, type) {
  if (appState.profile?.is_premium) return; // extra safety

  const column = type === 1 ? "avocados" : "tofu";

  const currentValue = appState.profile?.[column] || 0;

  const { error } = await supabase
    .from("0con_profilesdata")
    .update({
      [column]: Math.max(currentValue - 1, 0),
    })
    .eq("id", userId);

  if (error) {
    console.error("Failed to deduct food:", error);
    return;
  }

  // update local state too
  if (appState.profile) {
    appState.profile[column] = Math.max(currentValue - 1, 0);
  }
}

document.getElementById("close-popup").onclick = closeProfilePopup;

function closeProfilePopup() {
  const popup = document.getElementById("profile-popup");
  const backdrop = document.getElementById("profile-backdrop");

  popup.classList.add("hidden");
  backdrop.classList.add("hidden");

  document.body.classList.remove("modal-open");
}

async function addToSeenProfiles(userId) {
  const currentUserId = appState.user.id;

  // 1. fetch fresh value from DB
  const { data, error } = await supabase
    .from("0con_profilesdata")
    .select("seen_profiles")
    .eq("id", currentUserId)
    .single();

  if (error) {
    console.error("Failed to fetch seen_profiles:", error);
    return;
  }

  const seen = data.seen_profiles || [];

  // 2. update safely
  if (!seen.includes(userId)) {
    seen.push(userId);
  }

  const { error: updateError } = await supabase
    .from("0con_profilesdata")
    .update({
      seen_profiles: seen
    })
    .eq("id", currentUserId);

  if (updateError) {
    console.error("Failed to update seen_profiles:", updateError);
    return;
  }

  // 3. sync local state
  appState.user.seen_profiles = seen;
}


async function addToSeenCommunities(communityId) {
  const currentUserId = appState.user.id;

  // 1. fetch fresh value from DB
  const { data, error } = await supabase
    .from("0con_profilesdata")
    .select("seen_communities")
    .eq("id", currentUserId)
    .single();

  if (error) {
    console.error("Failed to fetch seen_profiles:", error);
    return;
  }

  const seen = data.seen_communities || [];

  // 2. update safely
  if (!seen.includes(currentUserId)) {
    seen.push(currentUserId);
  }

  const { error: updateError } = await supabase
    .from("0con_profilesdata")
    .update({
      seen_communities: seen
    })
    .eq("id", currentUserId);

  if (updateError) {
    console.error("Failed to update seen_communities:", updateError);
    return;
  }

  // 3. sync local state
  appState.user.seen_communities = seen;
}

function getUserCard(userId) {
  return document.querySelector(`.discover-card[data-user-id="${userId}"]`);
}



document.getElementById("travelModeToggle").addEventListener("change", (e) => {
  const isOn = e.target.checked;

  if (!appState.profile?.is_premium) {
    e.target.checked = false;
    return;
  }

  if (isOn) {
    openTravelModal();
  } else {
    updateTravelMode(false, null, null);
  }
});

function openTravelModal() {
  const modal = document.getElementById("travelModal");
  modal.classList.remove("hidden");

  if (!travelState.map) {

    const defaultLatLng = communityLatLng || {
      lat: 39.4699,
      lng: -0.3763
    };

    travelState.map = L.map("travelMap").setView(
      [defaultLatLng.lat, defaultLatLng.lng],
      12
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(travelState.map);

    travelState.map.on("click", (e) => {
      const { lat, lng } = e.latlng;

      travelState.lat = lat;
      travelState.lng = lng;

      if (travelState.marker) {
        travelState.marker.setLatLng([lat, lng]);
      } else {
        travelState.marker = L.marker([lat, lng]).addTo(travelState.map);
      }
    });

    // optional: pre-place marker on default
    travelState.marker = L.marker([
      defaultLatLng.lat,
      defaultLatLng.lng
    ]).addTo(travelState.map);

    travelState.lat = defaultLatLng.lat;
    travelState.lng = defaultLatLng.lng;
  }
}

document.getElementById("cancelTravelBtn").onclick = () => {
  document.getElementById("travelModal").classList.add("hidden");

  document.getElementById("travelModeToggle").checked = false;

  travelState.lat = null;
  travelState.lng = null;
};

document.getElementById("confirmTravelBtn").onclick = async () => {
  if (!travelState.lat || !travelState.lng) {
    alert("Please select a location on the map");
    return;
  }

  await updateTravelMode(true, travelState.lat, travelState.lng);

  document.getElementById("travelModal").classList.add("hidden");
};

async function updateTravelMode(enabled, lat, lng) {
  try {

    let finalLat = lat;
    let finalLng = lng;

    // ---------------------------
    // TURNING ON
    // ---------------------------
    if (enabled) {

      if (!finalLat || !finalLng) {
        if (communityLatLng) {
          finalLat = communityLatLng.lat;
          finalLng = communityLatLng.lng;
        } else {
          const fallback = await askUserForLocationFallback();
          finalLat = fallback.lat;
          finalLng = fallback.lng;
        }
      }
    }

    // ---------------------------
    // TURNING OFF
    // ---------------------------
    if (!enabled) {
      if (!communityLatLng) {
        const fallback = await askUserForLocationFallback();
        finalLat = fallback.lat;
        finalLng = fallback.lng;
      } else {
        finalLat = communityLatLng.lat;
        finalLng = communityLatLng.lng;
      }
    }

    // ---------------------------
    // UPDATE SUPABASE (geography column)
    // ---------------------------
    const { error } = await supabase
      .from("0con_profilesdata")
      .update({
        travel_mode: enabled,
        location: `POINT(${finalLng} ${finalLat})`
      })
      .eq("id", appState.user.id);

    if (error) throw error;

    // ---------------------------
    // SYNC LOCAL STATE
    // ---------------------------
    appState.profile.travel_mode = enabled;
    appState.profile.location = {
      lat: finalLat,
      lng: finalLng
    };

  } catch (err) {
    console.error("Travel mode update failed:", err);
  }
}


//#endregion

//#region Dates Functions

function renderDateProfile(profile) {
  const container = document.getElementById("dateList");
  if (!container) return;

  // ❌ If survey NOT completed → show empty state
  if (!profile?.dates_survey_completed) {
    container.innerHTML = `
      <div class="empty-state">
        <p>💘 ${t("createprofilehint")}</p>
        <button class="go-survey-btn">
          ${t("createprofilebtn")}
        </button>
      </div>
    `;

    const btn = container.querySelector(".go-survey-btn");

    if (btn) {
      btn.addEventListener("click", () => {
        const navItem = document.querySelector('[data-tab="survey"]');
        openTab("survey", navItem);
      });
    }

    return;
  }
}




// FILTER SETUPS
// FILTER SETUPS
// FILTER SETUPS

function milesToKm(mi) {
  return (mi * 1.60934).toFixed(1);
}

// FRIENDS
const friendsThreshold = document.getElementById("friendsthreshold");
const friendsDistance = document.getElementById("distancefriendfilter");

friendsThreshold?.addEventListener("input", () => {
  const val = friendsThreshold.value;
  document.getElementById("friendsThresholdValue").textContent = `${val}%`;
});

friendsDistance?.addEventListener("input", () => {
  const mi = friendsDistance.value;
  const km = milesToKm(mi);

  document.getElementById("distanceFriendValue").textContent =
    `${mi} mi (${km} km)`;
});

// DATING
const dateThreshold = document.getElementById("dateThreshold");
const dateDistance = document.getElementById("dateDistance");
const ageMin = document.getElementById("ageMin");
const ageMax = document.getElementById("ageMax");

dateThreshold?.addEventListener("input", () => {
  document.getElementById("dateThresholdValue").textContent =
    `${dateThreshold.value}%`;
});

dateDistance?.addEventListener("input", () => {
  const mi = dateDistance.value;
  const km = milesToKm(mi);

  document.getElementById("dateDistanceValue").textContent =
    `${mi} mi (${km} km)`;
});

ageMin?.addEventListener("input", () => {
  document.getElementById("ageMinValue").textContent = ageMin.value;
});

ageMax?.addEventListener("input", () => {
  document.getElementById("ageMaxValue").textContent = ageMax.value;
});

document.getElementById("saveFriendsFilters")?.addEventListener("click", async () => {
  const payload = {
    friend_threshold: Number(document.getElementById("friendsthreshold").value),
    friend_distance: Number(document.getElementById("distancefriendfilter").value),
  };

  await supabase
    .from("0con_profilesdata")
    .update(payload)
    .eq("id", appState.user.id);

  await refreshProfile(); // 👈 ADD THIS
  populateFiltersFromProfile();

  await fetchDiscover("friends");
  closeFilterModals();
});

document.getElementById("saveDateFilters")?.addEventListener("click", async () => {
  const payload = {
    date_threshold: Number(document.getElementById("dateThreshold").value),
    date_distance: Number(document.getElementById("dateDistance").value),
    filter_age: [
      String(document.getElementById("ageMin").value),
      String(document.getElementById("ageMax").value),
    ],
    interested_in: getSelectedGender()
  };

  await supabase
    .from("0con_profilesdata")
    .update(payload)
    .eq("id", appState.user.id);

  await refreshProfile(); // 👈 ADD THIS
  populateFiltersFromProfile();

  await fetchDiscover("dates");
  closeFilterModals();
});

async function refreshProfile() {
  const { data, error } = await supabase
    .from("0con_profilesdata")
    .select("*")
    .eq("id", appState.user.id)
    .single();

  if (error) {
    console.error(error);
    return;
  }

  appState.profile = data;
}

function getSelectedGender() {
  const selected = document.querySelector('input[name="gender"]:checked')?.value;

  if (!selected || selected === "all") return [0, 1, 2];
  if (selected === "woman") return [0];
  if (selected === "man") return [1];
  if (selected === "other") return [2];

  return [0, 1, 2];
}

function closeFilterModals() {
  const friendsModal = document.getElementById("friendsFilterModal");
  const dateModal = document.getElementById("dateFilterModal");

  friendsModal.style.display = "none";
  dateModal.style.display = "none";
}

function populateFiltersFromProfile() {
  const profile = appState.profile;
  if (!profile) return;

  // FRIENDS
  const friendsThreshold = document.getElementById("friendsthreshold");
  const friendsDistance = document.getElementById("distancefriendfilter");

  const friendsThresholdValue = document.getElementById("friendsThresholdValue");
  const distanceFriendValue = document.getElementById("distanceFriendValue");

  if (friendsThreshold && profile.friend_threshold != null) {
    friendsThreshold.value = profile.friend_threshold;

    if (friendsThresholdValue) {
      friendsThresholdValue.textContent = `${profile.friend_threshold}%`;
    }
  }

if (friendsDistance && profile.friend_distance != null) {
  friendsDistance.value = profile.friend_distance;

  if (distanceFriendValue) {
    const mi = profile.friend_distance;
    const km = milesToKm(mi);

    distanceFriendValue.textContent = `${mi} mi (${km} km)`;
  }
}

  // DATING
  const dateThreshold = document.getElementById("dateThreshold");
  const dateDistance = document.getElementById("dateDistance");

  const dateThresholdValue = document.getElementById("dateThresholdValue");
  const dateDistanceValue = document.getElementById("dateDistanceValue");

  if (dateThreshold && profile.date_threshold != null) {
    dateThreshold.value = profile.date_threshold;

    if (dateThresholdValue) {
      dateThresholdValue.textContent = `${profile.date_threshold}%`;
    }
  }

if (dateDistance && profile.date_distance != null) {
  dateDistance.value = profile.date_distance;

  if (dateDistanceValue) {
    const mi = profile.date_distance;
    const km = milesToKm(mi);

    dateDistanceValue.textContent = `${mi} mi (${km} km)`;
  }
}

  // AGE RANGE (jsonb ["22","42"])
  if (profile.filter_age) {
    const [min, max] = profile.filter_age.map(Number);

    const ageMin = document.getElementById("ageMin");
    const ageMax = document.getElementById("ageMax");

    const ageMinValue = document.getElementById("ageMinValue");
    const ageMaxValue = document.getElementById("ageMaxValue");

    if (ageMin) {
      ageMin.value = min;
      if (ageMinValue) ageMinValue.textContent = min;
    }

    if (ageMax) {
      ageMax.value = max;
      if (ageMaxValue) ageMaxValue.textContent = max;
    }
  }

  // INTERESTED IN (0=women, 1=man, 2=other)
  if (profile.interested_in) {
    const values = profile.interested_in.map(Number);

    let selected = "all";

    if (values.length === 1) {
      if (values.includes(0)) selected = "woman";
      if (values.includes(1)) selected = "man";
      if (values.includes(2)) selected = "other";
    }

    const radio = document.querySelector(
      `input[name="gender"][value="${selected}"]`
    );

    if (radio) radio.checked = true;
  }
}

 //#endregion


//#endregion

//#region Dates Survey

function openScreen(screenId) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  const survey = document.getElementById("survey");
  const bottomBar = document.querySelector(".bottombar");

  if (survey) survey.classList.add("hidden");

  if (screenId === "survey") {
    survey?.classList.remove("hidden");

    // render ONCE (prevents duplicates)
    if (!survey.dataset.ready) {
      renderDateQuestions();
      survey.dataset.ready = "true";
    }

    bottomBar?.classList.add("hidden");

  } else {
    document.getElementById(screenId)?.classList.add("active");
    bottomBar?.classList.remove("hidden");
  }

  document.querySelectorAll(".nav-item").forEach(i => {
    i.classList.toggle("active", i.dataset.tab === screenId);
  });
}

const surveyState = {
  photos: [],
  date_description: "",
  hobbies: "",
  dating_survey: []
};

document.getElementById("addPhotoBtn").onclick = () => {
  document.getElementById("surveyPhotoInput").click();
};

document.getElementById("surveyPhotoInput").addEventListener("change", async (e) => {
  const files = Array.from(e.target.files);

  for (const file of files) {
    if (surveyState.photos.length >= 5) break;

    const compressed = await resizeImage(file, 1080, 0.8);
    const url = URL.createObjectURL(compressed);

    surveyState.photos.push({
      file: compressed,
      url,
      order: surveyState.photos.length
    });
  }

  syncPhotoFlags();
  renderPhotos();
});

function syncPhotoFlags() {
  surveyState.photos.forEach((p, i) => {
    p.order = i;
    p.isProfile = i === 0;
  });
}

function resizeImage(file, maxSize = 1080, quality = 0.8) {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => resolve(blob),
        "image/jpeg",
        quality
      );
    };

    reader.readAsDataURL(file);
  });
}

function renderPhotos() {
  const grid = document.getElementById("photoPreviewGrid");
  grid.innerHTML = "";

  surveyState.photos.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "photo-item";
    div.draggable = true;
    div.dataset.index = index;

    div.innerHTML = `
      <img src="${p.url}" />
      ${index === 0 ? `<span class="badge">${t("profile")}</span>` : ""}
      <button class="remove">×</button>
    `;

    // REMOVE
    div.querySelector(".remove").onclick = () => {
      surveyState.photos.splice(index, 1);
      syncPhotoFlags();
      renderPhotos();
    };

    // DRAG EVENTS
    div.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", index);
      div.classList.add("dragging");
    });

    div.addEventListener("dragend", () => {
      div.classList.remove("dragging");
    });

    div.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    div.addEventListener("drop", (e) => {
      e.preventDefault();

      const fromIndex = Number(e.dataTransfer.getData("text/plain"));
      const toIndex = index;

      if (fromIndex === toIndex) return;

      const moved = surveyState.photos.splice(fromIndex, 1)[0];
      surveyState.photos.splice(toIndex, 0, moved);

      syncPhotoFlags();
      renderPhotos();
    });

    grid.appendChild(div);
  });
}

function renderDateQuestions() {
  const container = document.getElementById("surveyQuestions");
  container.innerHTML = "";

  dateQuestions.forEach(q => {
    const div = document.createElement("div");
    div.className = "question";

    // NUMBER INPUT
    if (q.type === "number") {
      div.innerHTML = `
        <label>${DateData.getQuestionLabel(q.id)}</label>
        <input type="number" data-id="${q.id}">
      `;
    }

    // SPECIAL CASE: LOOKING FOR (BETTER UI)
    else if (q.id === "looking_for") {
      div.innerHTML = `
        <label>${DateData.getQuestionLabel(q.id)}</label>
        <div class="chip-group" data-id="${q.id}">
          ${q.options.map(opt => `
            <button type="button" class="chip" data-value="${opt.id}">
              ${DateData.getLabel(q.id, opt.id)}
            </button>
          `).join("")}
        </div>
      `;
    }

    // DEFAULT SINGLE SELECT
    else {
      div.innerHTML = `
        <label>${DateData.getQuestionLabel(q.id)}</label>
        <select data-id="${q.id}">
          ${q.options.map(o => `
            <option value="${o.id}">
              ${DateData.getLabel(q.id, o.id)}
            </option>
          `).join("")}
        </select>
      `;
    }

    container.appendChild(div);
  });

  // CHIP CLICK LOGIC
  document.querySelectorAll(".chip-group").forEach(group => {
    group.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;

      const value = btn.dataset.value;

      btn.classList.toggle("active");

      const selected = Array.from(group.querySelectorAll(".chip.active"))
        .map(b => {
          const v = b.dataset.value;
          return isNaN(v) ? v : Number(v);
        });

      group.dataset.selected = JSON.stringify(selected);
    });
  });
}

function collectSurveyData() {
  const answers = [];

  document.querySelectorAll("#surveyQuestions [data-id]").forEach(el => {
    const id = el.dataset.id;

    // CHIP GROUP (multi-select like looking_for)
    if (el.classList.contains("chip-group")) {
      const selected = JSON.parse(el.dataset.selected || "[]");

      answers.push({
        questionId: id,
        answer: selected
      });
    }

    // INPUT / SELECT
    else {
      answers.push({
        questionId: id,
        answer: mapAnswerToId(id, el.value)
      });
    }
  });

  return {
    photos: surveyState.photos,
    date_description: document.getElementById("dateDescription").value,
    hobbies: document.getElementById("hobbies").value,
    dating_survey: answers
  };
}

async function saveDatingProfile() {
  try {
    showLoading();

    const userId = appState.user.id;

    const data = collectSurveyData();

    const uploadedPhotos = await uploadPhotosToBucket(userId, data.photos);

    const survey = data.dating_survey;

    const gender = Number(getSurveyValue(survey, "gender"));
    const age = Number(getSurveyValue(survey, "age"));

    const interested_in = calculateInterestedIn(gender);
    const { min, max } = calculateAgeFilter(age);

    const payload = {
      photos: uploadedPhotos,
      dating_survey: data.dating_survey,
      date_description: data.date_description.slice(0, 300),
      hobbies: data.hobbies.slice(0, 300),
      dates_mode_on: true,
      dates_survey_completed: true,


      interested_in,
      filter_age: [min, max]
    };

    const { error } = await supabase
      .from("0con_profilesdata")
      .update(payload)
      .eq("id", userId);

    if (error) throw error;

    hideLoading();

// ✅ 1. Update local profile state immediately
if (!appState.profile) appState.profile = {};

appState.profile.dates_mode_on = true;
appState.profile.dates_survey_completed = true;

// optional but useful if you display it elsewhere
appState.profile.date_description = payload.date_description;
appState.profile.hobbies = payload.hobbies;
appState.profile.photos = payload.photos;

// ✅ 2. Invalidate cache so fetch always runs
discoverState.lastFetched.dates = 0;
discoverState.dates = [];

// ✅ 3. Navigate first
openScreen("discover");
goToDiscoverDateView();

  } catch (err) {
    console.error(err);
    hideLoading();
    alert("Failed to save profile");
  }
}

function mapAnswerToId(questionId, value) {
  if (questionId === "gender") {
  return typeof value === "string" ? Number(value) : value;
}

  if (questionId === "age") return Number(value);
  if (questionId === "height") return Number(value);

  // already ID-based fields
  return value;
}

function calculateInterestedIn(gender) {
  if (gender === 1) return [0]; // man -> interested in women
  if (gender === 0) return [1]; // woman -> interested in men
  return [2]; // other
}

function getSurveyValue(survey, questionId) {
  const item = survey.find(q => q.questionId === questionId);
  return item ? item.answer : null;
}
function calculateAgeFilter(age) {
  const min = Math.max(18, age - 10);
  const max = age + 10;

  return { min, max };
}

async function uploadPhotosToBucket(userId, photos) {
  const results = [];

  for (const photo of photos) {

    const fileName = `${userId}/${Date.now()}_${Math.random().toString(36).substring(2)}.jpg`;

    // 🔥 ENSURE BLOB IS VALID
    const fileBlob = await normalizeFile(photo.file);

    const { error } = await supabase.storage
      .from("DATE_PHOTOS")
      .upload(fileName, fileBlob, {
        contentType: fileBlob.type || "image/jpeg",
        upsert: true
      });

    if (error) {
      console.error("UPLOAD ERROR:", error);
      throw error;
    }

    const { data } = supabase.storage
      .from("DATE_PHOTOS")
      .getPublicUrl(fileName);

    results.push({
      url: data.publicUrl,
      order: photo.order,
      isProfile: photo.order === 0
    });
  }

  return results;
}

function goToDiscoverDateView() {
  // switch main tab
  openScreen("discover");

  // switch to Date button
  document.getElementById("dateBtn")?.click();

  // ensure correct view is active
  document.getElementById("friendsView")?.classList.remove("active");
  document.getElementById("dateView")?.classList.add("active");

  // update toggle buttons
  document.getElementById("friendsBtn")?.classList.remove("active");
  document.getElementById("dateBtn")?.classList.add("active");
}

function closeSurvey() {
  document.getElementById("survey").classList.add("hidden");
  document.querySelector(".bottombar")?.classList.remove("hidden");
  goToDiscoverDateView();
}
document.getElementById("exitSurveyBtn").onclick = closeSurvey;

document.getElementById("saveSurveyBtn").addEventListener("click", () => {
  saveDatingProfile();
});

//#endregion

//#region Messages Tab

//#region Community TOPBAR
function isPremiumUser() {
  return !!appState.profile?.is_premium;
}

function hasCommunity() {
  return !!appState.profile?.community_id;
}

// INFO BUBBLE
function showInfoBubble() {
  // remove existing
  document.querySelector(".info-overlay")?.remove();
  document.querySelector(".info-bubble")?.remove();

  // overlay
  const overlay = document.createElement("div");
  overlay.className = "info-overlay";

  // bubble
  const bubble = document.createElement("div");
  bubble.className = "info-bubble";

  bubble.innerHTML = `
    <button class="info-close">×</button>

    <strong>${t("communitybubbletitle")}</strong><br><br>

    ${t("communitybubblep1")}<br><br>

    ${t("communitybubblep2")}<br><br>

    <span class="info-cta" id="upgradeToPremium">
      ${t("communitybubbleupgrade")}
    </span>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(bubble);

  // CLOSE ON X
  bubble.querySelector(".info-close").onclick = closeBubble;

  // CLOSE ON OUTSIDE CLICK
  overlay.onclick = closeBubble;

  function closeBubble() {
    overlay.remove();
    bubble.remove();
  }

  // CTA click → open premium tab
  document.getElementById("upgradeToPremium").onclick = (e) => {
    e.stopPropagation();
    closeBubble();
    openPremiumScreen(); 
  };
}

// TOPBAR RENDER
async function renderCommunityTopbar() {
  const topbar = document.getElementById("createCommunityTopbar");

  const premium = isPremiumUser();
  const hasComm = hasCommunity();

  topbar.onclick = null;

  if (hasComm) {
    topbar.classList.remove("locked");
    topbar.classList.add("unlocked");

    const communityId = appState.profile.community_id;

    const { data: community, error } = await supabase
      .from("0con_communities")
      .select("id, community_name, community_photo")
      .eq("id", communityId)
      .maybeSingle();

    if (error) {
      console.error("Community fetch error:", error);
      return;
    }

    const { count: memberCount } = await supabase
      .from("0con_community_participants")
      .select("*", { count: "exact", head: true })
      .eq("community_id", communityId);

    topbar.innerHTML = `
      <div class="community-preview">
        <img class="community-preview-img" src="${community.community_photo}" />

        <div class="community-preview-info">
          <div class="community-preview-name">
            ${community.community_name}
          </div>
          <div class="community-preview-count">
            ${memberCount ?? 0} ${t("members_lowercase")}
          </div>
        </div>
      </div>
    `;

    topbar.onclick = () => {
      openCommunityPage(communityId);
    };

    return;
  }

  if (premium) {
    topbar.classList.remove("locked");
    topbar.classList.add("unlocked");

    topbar.innerHTML = `<span class="topbar-title">${t("createCommunity")}</span>`;
    topbar.onclick = () => openCommunitySurvey();
    return;
  }

  topbar.classList.add("locked");

  topbar.innerHTML = `
    <span class="topbar-title premium-lock">🔒 ${t("createCommunity")}</span>
    <button id="communityInfoBtn" class="info-icon">ⓘ</button>
  `;

  const infoBtn = topbar.querySelector("#communityInfoBtn");

  topbar.onclick = () => showInfoBubble();

  infoBtn.onclick = (e) => {
    e.stopPropagation();
    showInfoBubble();
  };
}

let communityPhoto = null;

document.getElementById("CommunityaddPhotoBtn").onclick = () => {
  document.getElementById("CommunityphotoInput").click();
};

document.getElementById("CommunityphotoInput").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  communityPhoto = file;

  const preview = document.getElementById("photoPreviewGridCommunity");
  preview.innerHTML = ""; // clear previous

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.className = "preview-img";

  preview.appendChild(img);
};

const communityState = {
  answers: {},
  weights: {},
  dealbreakers: new Set() // ✅ ADD THIS
};

document.getElementById("exitCommunitySurveyBtn").onclick = closeCommunitySurvey;

function openCommunitySurvey() {
  // initialize defaults ONLY once
  AppData.questions.forEach(q => {
    if (!(q.id in communityState.weights)) {
      communityState.weights[q.id] =
        DEFAULT_ANSWER_WEIGHTS[q.id] ?? 0.5;
    }
  });

  renderCommunityQuestions();
  renderCommunityLanguages();
  setTimeout(() => {initCommunityMap();}, 200);
  const matchesTab = document.getElementById("messages");
  matchesTab.classList.remove("active");
  document.getElementById("communitycreator").classList.remove("hidden");
}

function closeCommunitySurvey() {
  document.getElementById("communitycreator").classList.add("hidden");
  
  const matchesTab = document.getElementById("messages");
  matchesTab.classList.add("active"); 
};

function renderCommunityQuestions() {
  const container = document.getElementById("communityQuestions");
  container.innerHTML = "";

  AppData.questions.forEach(q => {
    const block = document.createElement("div");
    block.className = "question-block";

    const title = document.createElement("h3");
    title.innerText = t(q.id, currentLang);
    block.appendChild(title);

    // DEFAULT weight
    const baseWeight = DEFAULT_ANSWER_WEIGHTS[q.id] ?? 0.5;

const weight = Math.round(
  (communityState.weights[q.id] ?? baseWeight) * 10
);

    const weightHTML = `
      <label>
        Importance: <span id="cWeightVal-${q.id}">${weight}</span>/10
      </label>
      <input 
        type="range" 
        min="1" 
        max="10" 
        value="${weight}" 
        class="community-weight-slider"
        data-qid="${q.id}"
      />
    `;

    const weightWrapper = document.createElement("div");
    weightWrapper.innerHTML = weightHTML;
    block.appendChild(weightWrapper);

    // OPTIONS
    q.options.forEach(opt => {
  const row = document.createElement("div");
  row.className = "option-row";

  const isSelected = communityState.answers[q.id] === opt.id;
  const isDealbreaker = communityState.dealbreakers.has(opt.id);

  // ANSWER BUTTON
  const answerBtn = document.createElement("button");
  answerBtn.innerText = t(opt.id, currentLang);
  answerBtn.className = "option-btn";

  if (isSelected) answerBtn.classList.add("selected-option");

  answerBtn.onclick = () => {
    communityState.answers[q.id] = opt.id;
    renderCommunityQuestions();
  };

  // 🚫 DEALBREAKER BUTTON (UNLIMITED)
  const dbBtn = document.createElement("button");
  dbBtn.innerText = "🚫";
  dbBtn.className = "dealbreaker-btn";

  if (isDealbreaker) dbBtn.classList.add("dealbreaker-active");

  dbBtn.onclick = () => {
    if (communityState.dealbreakers.has(opt.id)) {
      communityState.dealbreakers.delete(opt.id);
    } else {
      communityState.dealbreakers.add(opt.id);
    }

    renderCommunityQuestions();
  };

  row.appendChild(answerBtn);
  row.appendChild(dbBtn);
  block.appendChild(row);
});

    container.appendChild(block);
  });

  // sliders
  document.querySelectorAll(".community-weight-slider").forEach(slider => {
    slider.oninput = () => {
      const qid = slider.dataset.qid;
      const val = parseInt(slider.value);

      document.getElementById(`cWeightVal-${qid}`).innerText = val;
      communityState.weights[qid] = val / 10;
    };
  });
}

function initCommunityMap() {
  const mapContainer = document.getElementById("communityMap");
  if (!mapContainer || communityMap) return;

  // default fallback (Spain)
  const defaultLat = 39.4699;
  const defaultLng = -0.3763;

  // use GPS if available
  const initialLat = communityLatLng?.lat ?? defaultLat;
  const initialLng = communityLatLng?.lng ?? defaultLng;

  communityMap = L.map("communityMap").setView(
    [initialLat, initialLng],
    12
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(communityMap);

  // if we already have location → show marker
  if (communityLatLng) {
    communityMarker = L.marker([
      communityLatLng.lat,
      communityLatLng.lng
    ]).addTo(communityMap);

    document.getElementById("mapCoords").textContent =
      `📍 ${communityLatLng.lat.toFixed(5)}, ${communityLatLng.lng.toFixed(5)}`;
  }

  // click to set location
  communityMap.on("click", (e) => {
    const { lat, lng } = e.latlng;

    communityLatLng = { lat, lng };

    if (communityMarker) {
      communityMap.removeLayer(communityMarker);
    }

    communityMarker = L.marker([lat, lng]).addTo(communityMap);

    document.getElementById("mapCoords").textContent =
      `📍 ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
}

const communityRadius = document.getElementById("communityRadius");

communityRadius?.addEventListener("input", () => {
  const mi = communityRadius.value;
  const km = (mi * 1.60934).toFixed(1);

  document.getElementById("communityRadiusValue").textContent =
    `${mi} mi (${km} km)`;
});

const thresholdSlider = document.getElementById("CommunityThreshold");
const thresholdLabel = document.getElementById("thresholdValue");

thresholdSlider.oninput = () => {
  thresholdLabel.innerText = thresholdSlider.value;
};

document.getElementById("CommunitysaveSurveyBtn").onclick = async () => {
  // BASIC VALIDATION

  const name = document.getElementById("CommunityName").value.trim();

if (!name) {
  alert(t("communityNameRequired"));
  return;
}

if (name.length > 30) {
  alert(t("communityNameMax"));
  return;
}

  if (!communityPhoto) {
    alert(t("addPhotoRequired"));
    return;
  }

  const description = document.getElementById("CommunityDescription").value.trim();

  if (!description) {
    alert(t("descriptionRequired"));
    return;
  }

  const selectedLanguages = Array.from(
  document.querySelectorAll("#communityLanguagesList input:checked")
).map(el => el.value);

const radiusMiles = Number(document.getElementById("communityRadius").value);
const radiusKm = radiusMiles * 1.60934;

const answeredCount = Object.keys(communityState.answers).length;

if (answeredCount !== AppData.questions.length) {
  alert(t("answerAllQuestions"));
  return;
}


  try {
    // 🔥 Upload photo first (example)
    const photoUrl = await uploadCommunityPhoto(communityPhoto);

    const threshold = parseInt(
  document.getElementById("CommunityThreshold").value
);

const communityData = {
  name, // ✅ add this
  description,
  photo: photoUrl,

  values: communityState.answers,
  weights: communityState.weights,
  dealbreakers: Array.from(communityState.dealbreakers), // ✅

  community_languages: selectedLanguages,

  community_location: communityLatLng
  ? `POINT(${communityLatLng.lng} ${communityLatLng.lat})`
  : null,

  community_distance_threshold: radiusMiles,

  threshold, // ✅

  created_at: new Date().toISOString()
};

    await saveCommunityToDB(communityData);

    alert(t("communityCreated"));

  } catch (err) {
    console.error(err);
    alert(t("communityCreateError"));
  }
};

function renderCommunityLanguages() {
  const container = document.getElementById("communityLanguagesList");
  container.innerHTML = "";

  AppData.languages.forEach(lang => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${lang.id}">
      ${t(lang.id)}
    `;

    container.appendChild(label);
  });
}

function getFileExtension(file, safeFile) {
  return (
    file?.name?.split(".").pop()?.toLowerCase() ||
    safeFile?.type?.split("/").pop()?.toLowerCase() ||
    "jpg"
  );
}

async function uploadCommunityPhoto(file) {
  const userId = appState.user.id;

  if (!file) throw new Error("No file provided");

  // 🔥 normalize file first (IMPORTANT)
  const safeFile = await normalizeFile(file);

  // 🔥 safe extension fallback
  const fileExt = getFileExtension(file, safeFile);

  const filePath = `${userId}/${Date.now()}_${Math.random().toString(36).slice(2)}.${fileExt}`;

  // 1️⃣ Upload file
  const { error: uploadError } = await supabase.storage
    .from("COMMUNITY_PHOTOS")
    .upload(filePath, safeFile, {
      contentType: safeFile.type || "image/jpeg",
      upsert: false
    });

  if (uploadError) {
    console.error("Upload error:", uploadError);
    throw uploadError;
  }

  // 2️⃣ Get public URL
  const { data } = supabase.storage
    .from("COMMUNITY_PHOTOS")
    .getPublicUrl(filePath);

  return data.publicUrl;
}

async function saveCommunityToDB(communityData) {
  const userId = appState.user.id;

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // 1️⃣ INSERT COMMUNITY
  const { data: community, error: insertError } = await supabase
    .from("0con_communities")
    .insert([
      {
        owner_id: userId,
        community_name: communityData.name,
        community_description: communityData.description,
        community_photo: communityData.photo,

        community_values: communityData.values,
        community_weights: communityData.weights,
        community_dealbreakers: communityData.dealbreakers,


      community_languages: communityData.community_languages, // ✅ FIX
      community_location: communityData.community_location,     // ✅ FIX
      community_distance_threshold: communityData.community_distance_threshold, // ✅ FIX


        community_threshold: communityData.threshold,
        created_at: communityData.created_at
      }
    ])
    .select()
    .single();

  if (insertError) {
    console.error("Insert error:", insertError);
    throw insertError;
  }

  const communityId = community.id;

  // 2️⃣ CREATE COMMUNITY CHAT
const { data: chat, error: chatError } = await supabase
.from("0con_community_chats")
.insert([
{
community_name: communityData.name,
community_photo: communityData.photo,
community_id: communityId,
owner_id: appState.user.id,

last_message: t("communityChatCreated"),
last_sender_id: null
  }
])
.select()
.single();

if (chatError) {
  console.error("Chat insert error:", chatError);
  throw chatError;
}
  // 3️⃣ UPDATE USER PROFILE WITH COMMUNITY ID
  const { error: updateError } = await supabase
    .from("0con_profilesdata")
    .update({ community_id: communityId })
    .eq("id", userId);

  if (updateError) {
    console.error("Update error:", updateError);
    throw updateError;
  }



  // 3️⃣ 🔥 ADD OWNER AS PARTICIPANT (IMPORTANT)
  const { error: participantError } = await supabase
    .from("0con_community_participants")
    .insert({
      community_id: communityId,
      user_id: userId
    });

  if (participantError) {
    console.error("Participant insert error:", participantError);
    throw participantError;
  }

  // 4️⃣ UPDATE LOCAL STATE
  appState.profile = {
    ...appState.profile,
    community_id: communityId
  };

  appState.community = community;

  // 5️⃣ RE-RENDER UI
  renderCommunityTopbar();

  // 6️⃣ CLOSE SURVEY
  closeCommunitySurvey();

  return communityId;
}

async function openCommunityPage(communityId) {
  const modal = document.getElementById("communityModal");
  const body = document.getElementById("communityModalBody");

  body.innerHTML = `<p>${t("loading")}</p>`;
  modal.style.display = "block";

  try {
    // 1. Get community
    const { data: community, error } = await supabase
      .from("0con_communities")
      .select("id, owner_id, community_name, community_description, community_photo")
      .eq("id", communityId)
      .maybeSingle();

    if (error) throw error;

    const isOwner = community.owner_id === appState.user.id;

    // 2. Get members (with profiles join)
    const { data: members, error: membersError } = await supabase
      .from("0con_community_participants")
      .select(`
        user_id,
        0con_profilesdata (
          name,
          profile_photo_url
        )
      `)
      .eq("community_id", communityId);

    if (membersError) throw membersError;

    // 3. Render UI
body.innerHTML = `
  <div class="community-modal-card">

    <!-- HEADER -->
    <div class="community-hero">
      <img src="${community.community_photo}" class="community-hero-img" />

      <div class="community-hero-content">
        <h2 class="community-title">
          ${community.community_name}
        </h2>

        <p class="community-desc">
          ${community.community_description || t("noDescription")}
        </p>

        <div class="community-meta">
          👥 ${members.length} ${t("members_lowercase")}
        </div>
      </div>
    </div>

    ${isOwner ? `
  <div class="owner-actions">
    <button id="editCommunityBtn" class="action-btn">${t("editCommunity")}</button>
    <button id="deleteCommunityBtn" class="action-btn danger">${t("deleteCommunity")}</button>
  </div>
` : ""}

${!isOwner ? `
  <div class="owner-actions">
    <button id="leaveCommunityBtn" class="action-btn danger">
     ${t("leaveCommunity")}
    </button>
  </div>
` : ""}

    <!-- MEMBERS -->
${members.map(m => {
  const isSelf = m.user_id === appState.user.id;

  return `
    <div class="member-card">
      <img 
        src="${m["0con_profilesdata"]?.profile_photo_url || "default.png"}" 
        class="member-avatar"
      />
      
      <div class="member-name">
        ${m["0con_profilesdata"]?.name || "Unknown"}
      </div>

      ${isOwner && !isSelf ? `
        <button class="remove-member-btn" data-user="${m.user_id}">
          ${t("remove")}
        </button>
      ` : ""}
    </div>
  `;
}).join("")}


  </div>
`;
if (isOwner) {
  document.getElementById("editCommunityBtn").onclick = () =>
    openEditCommunityModal(community);

  document.getElementById("deleteCommunityBtn").onclick = () =>
    deleteCommunity(community.id);

setTimeout(() => {
  document.querySelectorAll(".remove-member-btn").forEach(btn => {
    btn.onclick = () => {
      const userId = btn.dataset.user;
      removeMember(community.id, userId);
    };
  });
});
}

if (!isOwner) {
  document.getElementById("leaveCommunityBtn").onclick = () =>
    leaveCommunity(community.id);
}

  } catch (err) {
    console.error("Community modal error:", err);
    body.innerHTML = t("errorLoadingCommunity");
  }

  

  // Close handler
  document.getElementById("closeCommunityModalBtn").onclick = closeCommunityPage;
}

function openEditCommunityModal(community) {
  const modal = document.createElement("div");
  modal.className = "popup-overlay";

  modal.innerHTML = `
    <div class="popup">
      <h3>${t("editCommunity")}</h3>

      <label>${t("photo")}</label>
      <input type="file" id="editCommunityPhoto" />

      <label>${t("description")}</label>
      <textarea id="editCommunityDesc" maxlength="300">${community.community_description || ""}</textarea>

      <div class="popup-actions">
        <button id="saveCommunityEdit">${t("save")}</button>
        <button id="cancelEdit">${t("cancel")}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("cancelEdit").onclick = () => modal.remove();

document.getElementById("saveCommunityEdit").onclick = async () => {
  const file = document.getElementById("editCommunityPhoto").files[0];
  const desc = document.getElementById("editCommunityDesc").value;

  try {
    let newPhotoUrl = community.community_photo;

    // 1. Upload new photo if exists
    if (file) {

      const safeFile = await normalizeFile(file);

      const filePath = `${appState.user.id}/community.jpg`;

      const { error: uploadError } = await supabase.storage
        .from("COMMUNITY_PHOTOS")
        .upload(filePath, safeFile, {
          upsert: true,
          contentType: safeFile.type || "image/jpeg"
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("COMMUNITY_PHOTOS")
        .getPublicUrl(filePath);

      newPhotoUrl = data.publicUrl + "?t=" + Date.now();
    }

    // 2. Update communities table
    const { error: updateError } = await supabase
      .from("0con_communities")
      .update({
        community_description: desc,
        community_photo: newPhotoUrl
      })
      .eq("id", community.id);

    if (updateError) throw updateError;

    // 3. Update chats table
    const { error: chatError } = await supabase
      .from("0con_community_chats")
      .update({
        community_photo: newPhotoUrl
      })
      .eq("community_id", community.id);

    if (chatError) throw chatError;

    modal.remove();
    openCommunityPage(community.id);

  } catch (err) {
    console.error(err);
    alert(t("errorUpdatingCommunity"));
  }
};
}

async function deleteCommunity(communityId) {
  const confirmBox = confirm(t("errorDeletingCommunity"));

  if (!confirmBox) return;

  try {
    await supabase
      .from("0con_communities")
      .delete()
      .eq("id", communityId)
      .eq("owner_id", appState.user.id);

    await supabase
      .from("0con_community_chats")
      .delete()
      .eq("community_id", communityId);

    await supabase
      .from("0con_community_participants")
      .delete()
      .eq("community_id", communityId);

    await supabase
      .from("0con_incomes")
      .delete()
      .eq("sender_id", communityId);

    await supabase
      .from("0con_profilesdata")
      .update({ community_id: null })
      .eq("id", appState.user.id)

    document.getElementById("communityModal").style.display = "none";
    renderCommunityTopbar();
    openMessagesList();

  } catch (err) {
    console.error(err);
    alert(t("errorDeletingCommunity"));
  }
}

async function removeMember(communityId, userId) {
  const ok = confirm(t(confirmRemoveMember));
  if (!ok) return;

  try {
    const { error } = await supabase
      .from("0con_community_participants")
      .delete()
      .eq("community_id", communityId)
      .eq("user_id", userId);

    if (error) throw error;

    openCommunityPage(communityId);

  } catch (err) {
    console.error(err);
    alert(t("errorDeletingMember"));
  }
}

async function leaveCommunity(communityId) {
  const ok = confirm(t("confirmLeave"));
  if (!ok) return;

  try {
    const { error } = await supabase
      .from("0con_community_participants")
      .delete()
      .eq("community_id", communityId)
      .eq("user_id", appState.user.id);

    if (error) throw error;

    document.getElementById("communityModal").style.display = "none";

    createMessageCards();
    openMessagesList();

  } catch (err) {
    console.error(err);
    alert(t("errorLeavingCommunity"));
  }
}

function closeCommunityPage() {
  document.getElementById("communityModal").style.display = "none";
}

//#endregion

//#region MESSAGES

function subscribeToMessageUpdates() {
  const viewerId = appState.user.id;

  supabase
    .channel('messages-list-updates')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: '0con_messages'
      },
      async payload => {
        const msg = payload.new;

        // ignore unrelated rows
        if (!msg.match_id && !msg.community_id) return;

        // =========================
        // MATCH MESSAGE
        // =========================
        if (msg.match_id) {
          const { data: match } = await supabase
            .from('0con_matches')
            .select('id, user1_id, user2_id')
            .eq('id', msg.match_id)
            .single();

          if (!match) return;

          if (
            match.user1_id !== viewerId &&
            match.user2_id !== viewerId
          ) return;

          await supabase
            .from('0con_matches')
            .update({
              last_message: msg.content,
              last_sender_id: msg.sender_id,
              last_message_at: new Date().toISOString()
            })
            .eq('id', msg.match_id);
        }

        // =========================
        // COMMUNITY MESSAGE
        // =========================
        if (msg.community_id) {
          await supabase
            .from('0con_community_chats')
            .update({
              last_message: msg.content,
              last_sender_id: msg.sender_id,
              last_sender_name: msg.sender_name,
              last_message_at: new Date().toISOString()
            })
            .eq('community_id', msg.community_id);
        }

        // =========================
        // REFRESH UI
        // =========================
        await createMessageCards();
      }
    )
    .subscribe();
}

async function createMessageCards() {
  try {
    const viewerId = appState.user.id;

    const { data: matches, error } = await supabase
      .from('0con_matches')
      .select(`
        id,
        user1_id, user2_id,
        user1_name, user2_name,
        user1_photo, user2_photo,
        last_message, last_sender_id, last_message_at, 
        type,
        is_muted_by_user1 ,is_muted_by_user2
      `)
      .or(`user1_id.eq.${viewerId},user2_id.eq.${viewerId}`);

    if (error) {
      console.error('fetch matches error:', error);
      return;
    }

    const matchCards = matches.map(match => {
      const isUser1 = match.user1_id === viewerId;

      return {
        ...match,
        name: isUser1 ? match.user2_name : match.user1_name,
        photo: isUser1 ? match.user2_photo : match.user1_photo
      };
    });

    // =========================
    // COMMUNITY CHATS (NEW)
    // =========================
    const communityChats = await getCommunityChats(viewerId);

const communityCards = communityChats.map(chat => ({
  id: chat.community_id,
  name: chat.community_name,
  photo: chat.community_photo,
  last_message: chat.last_message,
  last_sender_id: chat.last_sender_id,
  last_sender_name: chat.last_sender_name,
  type: 3,
  isCommunity: true,
  is_muted: chat.is_muted,
  last_message_at: chat.last_message_at
}));

    // =========================
    // COMBINE
    // =========================
    const cards = [...matchCards, ...communityCards];

    renderMessageCards(cards);
    updateMessagesDot(cards);

  } catch (err) {
    console.error('createMessageCards failed:', err);
  }
}

function renderMessageCards(cards) { 
  const container = document.getElementById('messages-list');
  container.innerHTML = '';

  if (!cards || cards.length === 0) {
    container.innerHTML = `<p>${t("nomessagesyet")}</p>`;
    return;
  }

  function isCardMuted(card) {
  // community mute
  if (card.isCommunity) {
    return card.is_muted === true; // if you include it in query
  }

  // match mute (your existing logic)
  const viewerId = appState.user.id;

  const isUser1 = viewerId === card.user1_id;
  const isUser2 = viewerId === card.user2_id;

  if (isUser1) return card.is_muted_by_user1;
  if (isUser2) return card.is_muted_by_user2;

  return false;
}

cards.forEach(card => {
  const el = document.createElement('div');

  let typeClass = '';
  if (card.type === 1) typeClass = 'friend';
  if (card.type === 2) typeClass = 'date';
  if (card.type === 3) typeClass = 'community';

  el.className = `invitation-card ${typeClass}`;

  const muted = isCardMuted(card);

  // 👇 slice depends on mute
  const limit = muted ? 25 : 30;

  let preview = card.last_message
    ? card.last_message.length > limit
      ? card.last_message.slice(0, limit) + '...'
      : card.last_message
    : 'No messages yet';

  let senderLabel = '';

  if (card.last_sender_id) {
    if (card.last_sender_id === appState.user.id) {
      senderLabel = t("you");
    } else {
      senderLabel = card.last_sender_name || '';
    }
  }

  const finalPreview = card.last_message
    ? `${senderLabel} ${preview}`
    : t("nomessagesyet");

  el.innerHTML = `
    <img class="invitation-avatar" src="${card.photo || '/default-avatar.png'}" />

    <div class="invitation-content">
      <div class="invitation-name">
        ${card.name || 'Unknown'}
      </div>

      <div class="invitation-meta">
        ${finalPreview}
      </div>
    </div>

    ${muted ? `<div class="mute-icon">🔕</div>` : ''}
  `;

  el.addEventListener('click', () => {
    openChat(card);
  });

  container.appendChild(el);
});
}

function openMessagesList() {
  document.getElementById('chat-container').style.display = 'none';
  document.getElementById('messages-tab').style.display = 'block';

  // show bottom bar
  document.querySelector('.bottombar').style.display = 'flex';

  isChatOpen = false;
}

function openChatView() {
  document.getElementById('messages-tab').style.display = 'none';
  document.getElementById('chat-container').style.display = 'block';

  // hide bottom bar (full screen chat)
  document.querySelector('.bottombar').style.display = 'none';

  isChatOpen = true;
}

async function openChat(card) { 
openChatView();

  const container = document.getElementById('chat-container');
  container.innerHTML = '';

  const viewerId = appState.user.id;

  // ✅ NEW: detect type
  const isCommunity = card.isCommunity;

  const chatState = {
  lastSenderId: null
};

let isUser1 = false;
let isUser2 = false;
let isMuted = false;

if (!isCommunity) {
  isUser1 = viewerId === card.user1_id;
  isUser2 = viewerId === card.user2_id;

  if (!isUser1 && !isUser2) {
    console.error("User is not part of this match");
    return;
  }

  isMuted = isUser1 
    ? card.is_muted_by_user1 
    : card.is_muted_by_user2;
}



let isLoadingMessages = true;

  // ✅ prevent multiple channels
  if (window.currentChatChannel) {
    supabase.removeChannel(window.currentChatChannel);
  }

  let channel;
  const renderedMessageIds = new Set();

  // =========================
  // HEADER
  // =========================
const header = document.createElement('div');
header.className = 'chat-header';

header.innerHTML = `
  <button id="back-btn" class="back-btn">←</button>

  <div class="chat-header-clickable">
    <img src="${card.photo || '/default-avatar.png'}" class="chat-avatar" />
    <div class="chat-title">${card.name || 'Unknown'}</div>
  </div>

  ${
    isCommunity
      ? `<button id="community-mute-btn" class="service-btn">🔔</button>`
      : `<button id="service-btn" class="service-btn">⋯</button>`
  }
`;

container.appendChild(header);

let isCommunityMuted = false;

if (isCommunity) {
  const { data, error } = await supabase
    .from('0con_community_participants')
    .select('is_muted')
    .eq('community_id', card.id)
    .eq('user_id', viewerId)
    .single();

  if (error) {
    console.error('Fetch mute state error:', error);
  } else {
    isCommunityMuted = data?.is_muted === true;
  }
}

async function updateCommunityMuteUI() {
  const btn = header.querySelector('#community-mute-btn');
  if (!btn) return;

  btn.textContent = isCommunityMuted ? '🔕' : '🔔';

  await createMessageCards();
}

if (isCommunity) {
  const muteBtn = header.querySelector('#community-mute-btn');

  updateCommunityMuteUI();

  muteBtn.addEventListener('click', async () => {
    try {
      const newState = !isCommunityMuted;

      const { error } = await supabase
        .from('0con_community_participants')
        .update({ is_muted: newState })
        .eq('community_id', card.id)
        .eq('user_id', viewerId);

      if (error) throw error;

      // ✅ update local state
      isCommunityMuted = newState;

      // ✅ update UI instantly
      updateCommunityMuteUI();

    } catch (err) {
      console.error('Community mute error:', err);
    }
  });
}



if (!isCommunity) {
  const serviceBtn = header.querySelector('#service-btn');

  const dropdown = document.createElement('div');
  dropdown.className = 'service-dropdown hidden';
dropdown.innerHTML = `
  <div class="dropdown-item" id="mute-btn">${t("mute_chat")}</div>
  <div class="dropdown-item" id="unmute-btn">${t("unmute_chat")}</div>
  <div class="dropdown-item" id="unmatch-btn">${t("unmatch")}</div>
  <div class="dropdown-item" id="report-btn">${t("report_user")}</div>
`;

  header.appendChild(dropdown);

  serviceBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });

  // close when clicking outside
document.addEventListener('click', () => {
  dropdown.classList.add('hidden');
});

const muteBtn = dropdown.querySelector('#mute-btn');
const unmuteBtn = dropdown.querySelector('#unmute-btn');

// ✅ SINGLE UX CONTROLLER
async function updateMuteUI(isMuted) {
    muteBtn.style.display = isMuted ? 'none' : 'block';
    unmuteBtn.style.display = isMuted ? 'block' : 'none';

    await createMessageCards();
  }

  // ✅ INITIAL STATE
  updateMuteUI(isMuted);

  // =========================
  // MUTE
  // =========================
  muteBtn.addEventListener('click', async () => {
    try {
      const column = isUser1 ? 'is_muted_by_user1' : 'is_muted_by_user2';

      await supabase
        .from('0con_matches')
        .update({ [column]: true })
        .eq('id', card.id);

      // ✅ update local state
      if (isUser1) {
        card.is_muted_by_user1 = true;
      } else {
        card.is_muted_by_user2 = true;
      }

      // ✅ update UX
      updateMuteUI(true);

    } catch (err) {
      console.error('Mute error:', err);
    }
  });

  // =========================
  // UNMUTE
  // =========================
  unmuteBtn.addEventListener('click', async () => {
    try {
      const column = isUser1 ? 'is_muted_by_user1' : 'is_muted_by_user2';

      await supabase
        .from('0con_matches')
        .update({ [column]: false })
        .eq('id', card.id);

      // ✅ update local state
      if (isUser1) {
        card.is_muted_by_user1 = false;
      } else {
        card.is_muted_by_user2 = false;
      }

      // ✅ update UX
      updateMuteUI(false);

    } catch (err) {
      console.error('Unmute error:', err);
    }
  });


  dropdown.querySelector('#unmatch-btn').addEventListener('click', async () => {
    const confirmUnmatch = confirm(t("confirm_unmatch"));
    if (!confirmUnmatch) return;

    try {
      await supabase
        .from('0con_matches')
        .delete()
        .eq('id', card.id);

      supabase.removeChannel(channel);
      openMessagesList();

    } catch (err) {
      console.error('Unmatch error:', err);
    }
  });

  let reportModal = document.getElementById('report-modal');

  if (!reportModal) {
    reportModal = document.createElement('div');
    reportModal.id = 'report-modal';
    reportModal.className = 'report-modal';

reportModal.innerHTML = `
  <div class="report-box">
    <h3>${t("report_user_title")}</h3>

    <textarea
      id="report-text"
      maxlength="300"
      placeholder="${t("report_user_placeholder")}"
    ></textarea>

    <div class="report-actions">
      <button id="cancel-report">${t("cancel")}</button>
      <button id="submit-report">${t("send")}</button>
    </div>
  </div>
`;

    document.body.appendChild(reportModal);
  }

  dropdown.querySelector('#report-btn').addEventListener('click', () => {
    reportModal.classList.add('active');
  });

  reportModal.querySelector('#cancel-report').onclick = () => {
    reportModal.classList.remove('active');
  };

  async function getLast50Messages() {
    const { data } = await supabase
      .from('0con_messages')
      .select('content')
      .eq('match_id', card.id) // ✅ removed isCommunity logic
      .order('created_at', { ascending: false })
      .limit(50);

    return (data || []).reverse();
  }

 const submitBtn = reportModal.querySelector('#submit-report');

 submitBtn.onclick = async () => {
    const text = reportModal.querySelector('#report-text').value.trim();

if (!text) {
  alert(t("report_empty_text"));
  return;
}

if (text.length > 300) {
  alert(t("report_too_long"));
  return;
}

const conversation = await getLast50Messages();

const reportedId =
  card.user1_id === viewerId ? card.user2_id : card.user1_id;

try {
  const { error } = await supabase
    .from('0con_reports')
    .insert({
      reporter_id: viewerId,
      reported_id: reportedId,
      reporter_experience: text,
      conversation: conversation
    });

  if (error) throw error;

  alert(t("report_success"));

  reportModal.classList.remove('active');
  dropdown.classList.add('hidden');

} catch (err) {
  console.error('Report error:', err);
  alert(t("report_failed"));
}
  };
}

// =========================
// HEADER CLICK → OPEN PROFILE / COMMUNITY
// =========================
const clickableArea = header.querySelector('.chat-header-clickable');

clickableArea.addEventListener('click', () => {
  if (isCommunity) {
    openCommunityPage(card.id);
  } else {
    // ✅ map type
    const profileType = card.type === 1 ? "friends" : "dates";

    // ✅ get OTHER user's id
    const otherUserId =
      card.user1_id === viewerId
        ? card.user2_id
        : card.user1_id;

    openUserProfile(otherUserId, profileType, true);
  }
});

header.querySelector('#back-btn').addEventListener('click', () => {
  supabase.removeChannel(channel);
  openMessagesList();
});

  // =========================
  // MESSAGES CONTAINER
  // =========================
  const messagesBox = document.createElement('div');
  messagesBox.className = 'chat-messages';
  container.appendChild(messagesBox);

// =========================
// CHECK COMMUNITY STATUS
// =========================
let communityActive = true;

if (isCommunity) {
  const { data, error } = await supabase
    .from('0con_communities')
    .select('is_active')
    .eq('id', card.id)
    .maybeSingle();

  if (error) {
    console.error(error);
    return;
  }

  communityActive = data?.is_active === true;
}


// =========================
// INPUT BAR (ALWAYS CREATE)
// =========================

const inputBar = document.createElement('div');
inputBar.className = 'chat-input-bar';

container.appendChild(inputBar);

const input = document.createElement('input');
input.type = "text";
input.id = "chat-input";
input.placeholder = t("chat_placeholder");

const button = document.createElement('button');
button.id = "send-btn";
button.textContent = t("send");

// =========================
// LOCK STATE
// =========================

if (isCommunity && !communityActive) {

  // Replace entire content (cleanest UX)
  inputBar.innerHTML = `
    <div class="chat-locked-message">
      🔒 ${t("chat_locked_message")}
    </div>
  `;

} else {

  // Build normal input UI
  inputBar.appendChild(input);
  inputBar.appendChild(button);

  button.addEventListener('click', sendMessage);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

// =========================
// RESET TRACKERS (always safe)
// =========================

renderedMessageIds.clear();
chatState.lastSenderId = null;

  // =========================
  // LOAD MESSAGES
  // =========================
  async function loadMessages() {
    let query = supabase
      .from('0con_messages')
      .select('*');

    // ✅ NEW: conditional filter
    if (isCommunity) {
      query = query.eq('community_id', card.id);
    } else {
      query = query.eq('match_id', card.id);
    }

    const { data, error } = await query.order('created_at', { ascending: true });

    if (error) {
      console.error('load messages error:', error);
      return;
    }

    messagesBox.innerHTML = '';
    renderedMessageIds.clear();


data.forEach(msg => {
  renderedMessageIds.add(msg.id);

  const msgEl = document.createElement('div');

  const isMine = msg.sender_id === viewerId;
  const isSameSender = msg.sender_id === chatState.lastSenderId;

  msgEl.className = `chat-message ${isMine ? 'mine' : 'theirs'}`;

  if (isCommunity && !isMine) {
    msgEl.innerHTML = `
      <div class="community-message">
        
        ${!isSameSender ? `
          <img 
            src="${msg.sender_photo_url || '/default-avatar.png'}" 
            class="message-avatar"
          />
        ` : `<div class="message-avatar-placeholder"></div>`}

        <div class="message-content">

          ${!isSameSender ? `
            <div class="message-sender">
              ${msg.sender_name || 'Unknown'}
            </div>
          ` : ``}

          <div class="bubble">
            ${msg.content}
          </div>

        </div>
      </div>
    `;
  } else {
    msgEl.innerHTML = `
      <div class="bubble">
        ${msg.content}
      </div>
    `;
  }

  messagesBox.appendChild(msgEl);

  // 🔥 update tracker AFTER rendering
  chatState.lastSenderId = msg.sender_id;
});

    // scroll to bottom
    messagesBox.scrollTop = messagesBox.scrollHeight;

    isLoadingMessages = false;
  }

  channel = supabase
  .channel(`chat-${card.id}`)
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: '0con_messages',
      // ✅ NEW: dynamic filter
      filter: isCommunity
        ? `community_id=eq.${card.id}`
        : `match_id=eq.${card.id}`
    },
    payload => {
const msg = payload.new;

if (isLoadingMessages) return;

if (renderedMessageIds.has(msg.id)) return;
renderedMessageIds.add(msg.id);

const msgEl = document.createElement('div');

const isMine = msg.sender_id === viewerId;
const isSameSender = msg.sender_id === chatState.lastSenderId;

msgEl.className = `chat-message ${isMine ? 'mine' : 'theirs'}`;

if (isCommunity && !isMine) {
  msgEl.innerHTML = `
    <div class="community-message">

      ${!isSameSender ? `
        <img 
          src="${msg.sender_photo_url || '/default-avatar.png'}" 
          class="message-avatar"
        />
      ` : `<div class="message-avatar-placeholder"></div>`}

      <div class="message-content">

        ${!isSameSender ? `
          <div class="message-sender">
            ${msg.sender_name || 'Unknown'}
          </div>
        ` : ``}

        <div class="bubble">
          ${msg.content}
        </div>

      </div>
    </div>
  `;
} else {
  msgEl.innerHTML = `
    <div class="bubble">
      ${msg.content}
    </div>
  `;
}

messagesBox.appendChild(msgEl);
messagesBox.scrollTop = messagesBox.scrollHeight;

// 🔥 update tracker
chatState.lastSenderId = msg.sender_id;
    }
  )
  .subscribe();

// store globally
window.currentChatChannel = channel;

await loadMessages();

// =========================
// SEND MESSAGE
// =========================

async function sendMessage() { 
  const text = input.value.trim();
  if (!text) return;

  input.value = '';

const { error } = await supabase
  .from('0con_messages')
  .insert({
    sender_id: viewerId,
    content: text,

    ...(isCommunity
      ? {
          community_id: card.id,
          sender_name: appState.profile.name,
          sender_photo_url: appState.profile.profile_photo_url,
          is_community: true
        }
      : {
          match_id: card.id
        })
  });

  if (error) {
    console.error('send message error:', error);
    return;
  }

  // ✅ keep your existing logic (ONLY for matches)
  if (!isCommunity) {
    await supabase
      .from('0con_matches')
      .update({
        last_message: text,
        last_sender_id: viewerId,
        last_message_at: new Date().toISOString()
      })
      .eq('id', card.id);
  }

  // ✅ NEW: update community preview
  if (isCommunity) {
    await supabase
      .from('0con_community_chats')
      .update({
        last_message: text,
        last_sender_id: viewerId,
        last_sender_name: appState.profile.name,
        last_message_at: new Date().toISOString()
      })
      .eq('community_id', card.id);
  }
}

button.addEventListener('click', sendMessage);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
}
//#endregion

//#region Community chats

async function getCommunityChats(viewerId) {
  // 1. get communities where user participates
  const { data: participants, error: pError } = await supabase
    .from('0con_community_participants')
    .select('community_id, is_muted')
    .eq('user_id', viewerId);

  if (pError) {
    console.error('participants error:', pError);
    return [];
  }

  const muteMap = {};

participants.forEach(p => {
  muteMap[p.community_id] = p.is_muted;
});

  if (!participants || participants.length === 0) return [];

  const communityIds = participants.map(p => p.community_id);

  // 2. fetch chats
  const { data: chats, error: cError } = await supabase
    .from('0con_community_chats')
    .select(`
      community_id,
      community_name,
      community_photo,
      last_message,
      last_sender_id,
      last_sender_name,
      last_message_at
    `)
    .in('community_id', communityIds);

  if (cError) {
    console.error('community chats error:', cError);
    return [];
  }

  return (chats || []).map(chat => ({
    ...chat,
    is_muted: muteMap[chat.community_id] || false
  }));
}


//#endregion

//#endregion

//#region Income Tab

function subscribeToInvitations() {
  const viewerId = appState.user.id;

  supabase
    .channel('invitation-updates')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: '0con_incomes'
      },
      async (payload) => {
        const inv = payload.new;

        // 🚨 only care about incoming invites
        if (inv.receiver_id !== viewerId) return;

        // =========================
        // REFRESH UI
        // =========================
        await createInvitationCards();
      }
    )
    .subscribe();
}

async function createInvitationCards() {
  try {
    const viewerId = appState.user.id;

    const { data: invites, error } = await supabase
      .from('0con_incomes')
      .select('id, sender_id, receiver_id, invitation_type, created_at')
      .eq('receiver_id', viewerId);

    if (error) {
      console.error('fetch invites error:', error);
      return;
    }

    if (!invites || invites.length === 0) {
      renderInvitationCards([]);
      return;
    }

    const cards = await Promise.all(
      invites.map(async (inv) => {

        // ---------------------------
        // FRIEND
        // ---------------------------
        if (inv.invitation_type === 1) {
          const { data, error } = await supabase.rpc('set_friend_invitation_card', {
            p_receiver_id: inv.receiver_id,
            p_sender_id: inv.sender_id
          });

          if (error || !data) return null;

          return data.map(c => ({
            ...c,
            invitation_type: 1,
            income_id: inv.id
          }));
        }

        // ---------------------------
        // DATE
        // ---------------------------
        if (inv.invitation_type === 2) {
          const { data, error } = await supabase.rpc('set_date_invitation_card', {
            p_receiver_id: inv.receiver_id,
            p_sender_id: inv.sender_id
          });

          if (error || !data) return null;

          return data.map(c => ({
            ...c,
            invitation_type: 2,
            income_id: inv.id
          }));
        }

        // ---------------------------
        // COMMUNITY (NO RPC)
        // ---------------------------
        if (inv.invitation_type === 3) {
          const { data, error } = await supabase
            .from('0con_communities')
            .select('id, community_name, community_photo')
            .eq('id', inv.sender_id)
            .maybeSingle();

          if (error || !data) return null;

          return [{
            c_id: data.id,
            c_name: data.community_name,
            c_photo: data.community_photo,
            invitation_type: 3,
            income_id: inv.id,
            sender_id: data.id // important for navigation
          }];
        }

        return null;
      })
    );

    const flatCards = cards.flat().filter(Boolean);

    renderInvitationCards(flatCards);
    updateInvitesDot(invites);

  } catch (err) {
    console.error('createInvitationCards failed:', err);
  }
}

function renderInvitationCards(cards) {  
  const container = document.getElementById('invitation-list');
  container.innerHTML = '';

  if (!cards || cards.length === 0) {
    container.innerHTML = `<p class="invitation-empty-state">${t("no_invitations")}</p>`;
    return;
  }

  cards.forEach(card => {
    const el = document.createElement('div');

    // 👇 dynamic class
    const typeClass =
      card.invitation_type === 1 ? 'friend' :
      card.invitation_type === 2 ? 'date' :
      'community';

    el.dataset.incomeId = card.income_id;

    el.className = `invitation-card ${typeClass}`;

    const ageSection = card.c_age != null
      ? `<span class="invitation-meta">${t("age_label", { age: card.c_age })}</span>`
      : '';

const isCommunity = card.invitation_type === 3;

el.innerHTML = isCommunity
  ? `
    <img src="${card.c_photo}" class="community-image" />

    <div class="invitation-content">
      <div class="invitation-top">
        <span class="invitation-name">${card.c_name}</span>
      </div>

      <span class="invitation-meta">${t("community")}</span>
    </div>
  `
  : `
    <img src="${card.c_photo}" />
    
    <div class="invitation-content">
      <div class="invitation-top">
        <span class="invitation-name">${card.c_name}</span>
        <span class="invitation-score">${Math.round(card.score ?? 0)}%</span>
      </div>

      ${ageSection}
    </div>
  `;

    // 👇 CLICK HANDLER
    el.addEventListener('click', () => { 

      if (card.invitation_type === 3) {
        openCommunityPageWithInvitation(card.sender_id); // community_id
        return;
      }

      openUserInvitationProfile(card);
    });

    container.appendChild(el);
  });
}

function getInvitationMode(type) {
  if (type === 1) return "friends";
  if (type === 2) return "dates";
  if (type === 3) return "community";
  return "unknown";
}


async function openUserInvitationProfile(card) {
  showLoadingSmall?.();

const mode = getInvitationMode(card.invitation_type);

  try { 
    const { data, error } = await supabase.rpc("get_user_profile", {
      p_viewer_id: appState.user.id,
      p_target_id: card.c_id,
      p_mode: mode 
    });

    if (error) throw error;

    openInvitationProfile(data);

  } catch (err) {
    console.error("Profile fetch error:", err);
  } finally {
    hideLoadingSmall?.();
  }
}

function openInvitationProfile(user) {
  const popup = document.getElementById("profile-popup");
  const container = document.getElementById("profile-data");
  const backdrop = document.getElementById("profile-backdrop");

  let html = "";

  if (user.type === "friends") {
    html = renderFriendsProfileCardInvitation(user);
  } else {
    html = renderDateProfileCardInvitation(user);
  }

  // ✅ THIS is what you missed
  container.innerHTML = html;

  // Show popup + backdrop
  popup.classList.remove("hidden");
  backdrop.classList.remove("hidden");

  document.body.classList.add("modal-open");
}

function renderFriendsProfileCardInvitation(user) { 
   const isPremium = appState.profile.is_premium;

  return `
    <img src="${user.photo}" width="100%" />

    <h2>${user.name}</h2>
    <p>${user.description || ""}</p>

    <div class="section">
      <h4>🎯 ${t("hobbies")}</h4>
      <p>${user.hobbies || ""}</p>
    </div>

  ${!isPremium ? `
  <div class="section">
    <h4>🤝 ${t("commons")}</h4>
    ${
      !Array.isArray(user.common) || user.common.length === 0
        ? `<p>${t("nomatchinganswers")}</p>`
        : user.common.map(c =>
            renderQuestionBlock(
              c.questionId,
              c.viewerAnswer,
              c.targetAnswer,
              t("common")
            )
          ).join("")
    }
  </div>

  <div class="section">
    <h4>⚡ ${t("difference")}</h4>
    ${
      !user.difference || !user.difference.questionId
        ? `<p>${t("nodifferences")}</p>`
        : renderQuestionBlock(
            user.difference.questionId,
            user.difference.viewerAnswer,
            user.difference.targetAnswer,
            t("difference")
          )
    }
  </div>
` : `
<div class="section">
  <h4>📊 ${t("fullcompatibilitysurvey")}</h4>

  <button onclick="toggleSurvey('${user.id}', this)">
    ${t("showsurvey")}
  </button>

  <div id="premiumSurvey-${user.id}" style="display:none;">
    ${renderPremiumSurvey(user.friendsurvey, user.survey)}
  </div>
</div>
`}

    <div class="actions">

      <button data-action="Reject" data-id="${user.id}" data-name="${user.name}" data-photo="${user.photo}">
        ❌ ${t("reject_avocado")}
      </button>

      <button data-action="AcceptAvocado" data-id="${user.id}" data-name="${user.name}" data-photo="${user.photo}">
        🥑 ${t("accept_avocado")}
      </button>

    </div>
  `;
}

function renderDateProfileCardInvitation(user) { 

  const isPremium = appState.profile.is_premium;

  const profilePhoto = getProfilePhoto(user);

  return `
    <div class="photo-gallery">
      ${(user.photos || [])
        .map(p => `<img src="${p.url}" style="width:100%; margin-bottom:6px; border-radius:8px;" />`)
        .join("")}
    </div>

    <h2>${user.name}</h2>
    <p>${user.date_description || ""}</p>

    <div class="section">
      <h4>🎯 ${t("hobbies")}</h4>
      <p>${user.hobbies || ""}</p>
    </div>


${!isPremium ? `
  <div class="section">
    <h4>🤝 ${t("commons")}</h4>
    ${
      !Array.isArray(user.common) || user.common.length === 0
        ? `<p>${t("nomatchinganswers")}</p>`
        : user.common.map(c =>
            renderQuestionBlock(
              c.questionId,
              c.viewerAnswer,
              c.targetAnswer,
              t("common")
            )
          ).join("")
    }
  </div>

  <div class="section">
    <h4>⚡ ${t("difference")}</h4>
    ${
      !user.difference || !user.difference.questionId
        ? `<p>${t("nodifferences")}</p>`
        : renderQuestionBlock(
            user.difference.questionId,
            user.difference.viewerAnswer,
            user.difference.targetAnswer,
            t("difference")
          )
    }
  </div>
` : `
<div class="section">
  <h4>📊 ${t("fullcompatibilitysurvey")}</h4>

  <button onclick="toggleSurvey('${user.id}', this)">
    ${t("showsurvey")}
  </button>

  <div id="premiumSurvey-${user.id}" style="display:none;">
    ${renderPremiumSurvey(user.friendsurvey, user.survey)}
  </div>
</div>
`}

    <div class="section">
  <h4>💭 ${t("dateprofiledetails")}</h4>

  ${
    Array.isArray(user.survey)
      ? user.survey
          .map(item => {
            return `
              <div style="padding:6px 0; border-bottom:1px solid #eee;">
                <strong>${DateData.getQuestionLabel(item.key)}:</strong>
                ${DateData.getLabel(item.key, normalizeValue(item.value))}
              </div>
            `;
          })
          .join("")
      : `<p>${t("nosurveydata")}</p>`
  }
</div>

    <div class="actions">
      <button data-action="Reject" data-id="${user.id}" data-name="${user.name}" data-photo="${profilePhoto}">
        ❌ ${t("reject_tofu")}
      </button>

      <button data-action="AcceptTofu" data-id="${user.id}" data-name="${user.name}" data-photo="${profilePhoto}">
        🍲 ${t("accept_tofu")}
      </button>

    </div>
  `;
}

async function openCommunityPageWithInvitation(communityId) {
  const modal = document.getElementById("communityModal");
  const body = document.getElementById("communityModalBody");

  body.innerHTML = "<p>Loading...</p>";
  modal.style.display = "block";

  try {

    const { data: invitation, error: inviteError } = await supabase
      .from("0con_incomes")
      .select("id")
      .eq("receiver_id", appState.user.id)
      .eq("sender_id", communityId)
      .eq("invitation_type", 3)
      .single();

    if (inviteError) {
      console.error("Invitation fetch error:", inviteError);
    }

    const incomeId = invitation?.id;

// ✅ store it on modal
modal.dataset.incomeId = incomeId;

    // 1. Get community
    const { data: community, error } = await supabase
      .from("0con_communities")
      .select("id, community_name, community_description, community_photo")
      .eq("id", communityId)
      .maybeSingle();

    if (error) throw error;

    // 2. Get members
    const { data: members, error: membersError } = await supabase
      .from("0con_community_participants")
      .select(`
        user_id,
        0con_profilesdata (
          name,
          profile_photo_url
        )
      `)
      .eq("community_id", communityId);

    if (membersError) throw membersError;

    // 3. Render UI
    body.innerHTML = `
      <div class="community-modal-card">

        <div class="community-hero">
          <img src="${community.community_photo}" class="community-hero-img" />

          <div class="community-hero-content">
            <h2 class="community-title">
              ${community.community_name}
            </h2>

            <p class="community-desc">
              ${community.community_description || "No description yet."}
            </p>

            <div class="community-meta">
              👥 ${members.length} ${t("members_lowercase")} 
            </div>
          </div>
        </div>

        <div class="community-section">
          <h3 class="section-title">${t("members_highercase")}</h3>

          <div class="members-grid">
            ${members.map(m => `
              <div class="member-card">
                <img 
                  src="${m["0con_profilesdata"]?.profile_photo_url || "default.png"}" 
                  class="member-avatar"
                />
                <div class="member-name">
                  ${m["0con_profilesdata"]?.name || "Unknown"}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="community-actions">
          <button id="communityDeclineBtn" class="btn-decline">
            ❌ ${t("decline")}
          </button>

          <button id="communityAcceptBtn" class="btn-accept">
            👥 ${t("accept")}
          </button>
        </div>

      </div>
    `;

    // ✅ MOVE HANDLERS HERE (inside try)

    const incomeIdFromDom = modal.dataset.incomeId;

document.getElementById("communityDeclineBtn").onclick = async () => {
  await DeclineCommunity(
    community.id,
    community.community_name,
    community.community_photo,
    incomeIdFromDom
  );
};

document.getElementById("communityAcceptBtn").onclick = async () => {
  await AcceptCommunity(
    community.id,
    community.community_name,
    community.community_photo,
    incomeIdFromDom
  );
};

  } catch (err) {
    console.error("Community modal error:", err);
    body.innerHTML = "<p>Error loading community</p>";
  }

  // Close handler (this is fine outside)
  document.getElementById("closeCommunityModalBtn").onclick = closeCommunityPage;
}

function getProfilePhoto(user) {
  // If it's already a simple string (friends case)
  if (user.photo) return user.photo;

  // If it's the date JSONB array
  if (Array.isArray(user.photos)) {
    const profilePic =
      user.photos.find(p => p.isProfile) ||
      user.photos.find(p => p.order === 0);

    return profilePic ? profilePic.url : "";
  }

  return "";
}

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;
  const name = btn.dataset.name;
  const photo = btn.dataset.photo;

  if (action === "AcceptTofu") await AcceptTofu(id, name, photo);
  if (action === "AcceptAvocado") await AcceptAvocado(id, name, photo);
  if (action === "Reject") await DeleteUser(id, name, photo);
});

async function DeleteUser(userId, userName, userPhoto) {
  await performActionInvitation(userId, 0, userName, userPhoto);
}

async function AcceptAvocado(userId, userName, userPhoto) {
  await performActionInvitation(userId, 1, userName, userPhoto);
}

async function AcceptTofu(userId, userName, userPhoto) {
  await performActionInvitation(userId, 2, userName, userPhoto);
}

async function DeclineCommunity(communityId, communityName, communityPhoto, incomeIdFromDom) {
  await performCommunityAction(communityId, communityName, communityPhoto, 0, incomeIdFromDom);
}

async function AcceptCommunity(communityId, communityName, communityPhoto, incomeIdFromDom) {
  await performCommunityAction(communityId, communityName, communityPhoto, 1, incomeIdFromDom);
}

async function performActionInvitation(userId, invitationType, userName, userPhoto) {
  try {
    const user1 = appState.user.id;
    const user2 = userId;

    const viewerName = appState.user.name;
    const otherName = userName;
    const viewerPhoto = getProfilePhoto(appState.user);
    const otherPhoto = userPhoto;

    // 1. ONLY create match if NOT reject
    if (invitationType !== 0) {

      const { data: existing, error: fetchError } = await supabase
        .from("0con_matches")
        .select("type")
        .match({ user1_id: user1, user2_id: user2 })
        .maybeSingle();

      if (fetchError) throw fetchError;

      let finalType = invitationType;

      if (existing) {
        finalType = Math.max(existing.type, invitationType);
      }

      const { error: upsertError } = await supabase
        .from("0con_matches")
        .upsert(
          {
            user1_id: user1,
            user2_id: user2,
            user1_name: viewerName,
            user2_name: otherName,
            user1_photo: viewerPhoto,
            user2_photo: otherPhoto,
            type: finalType,
            last_message: "Start the conversation! 🌱",
            last_sender_id: user1,
            last_message_at: new Date().toISOString()
          },
          { onConflict: "user1_id,user2_id" }
        );

      if (upsertError) throw upsertError;
    }

    // 2. DELETE logic
    let deleteQuery = {
      receiver_id: user1,
      sender_id: user2
    };

    // if NOT reject → delete only matching type
    if (invitationType !== 0) {
      deleteQuery.invitation_type = invitationType;
    }

    // if reject (0) → delete ALL types between users

    const { data: deletedRows, error: deleteError } = await supabase
  .from("0con_incomes")
  .delete()
  .match(deleteQuery)
  .select();

if (deleteError) throw deleteError;

deletedRows.forEach(row => {
  removeInvitationCard(row.id);
});

    await addToSeenProfiles(userId);

  } catch (err) {
    console.error("Action failed:", err);
  }

  closeProfilePopup();
}

async function performCommunityAction(communityId, communityName, communityPhoto, actionType, incomeId) {
  try {
    const userId = appState.user.id;

    // 1. ACCEPT → insert membership
    if (actionType !== 0) {
      const { error: insertError } = await supabase
        .from("0con_community_participants")
        .insert({
          community_id: communityId,
          user_id: userId
        });

      if (insertError) throw insertError;
    }

    // 2. DELETE invitation (always)
    const { error: deleteError } = await supabase
      .from("0con_incomes")
      .delete()
      .match({
        receiver_id: userId,
        sender_id: communityId,
        invitation_type: 3
      });

    if (deleteError) throw deleteError;

    // 3. REMOVE FROM UI (now works properly)
    removeInvitationCard(incomeId);

    // 4. mark seen
    await addToSeenCommunities(communityId);

    // 5. Render chatcards
    await createMessageCards();

  } catch (err) {
    console.error("Community action failed:", err);
  }

  closeCommunityPage();
}

function removeInvitationCard(incomeId) {
  const container = document.getElementById("invitation-list");

  const card = container.querySelector(`[data-income-id="${incomeId}"]`);
  if (card) card.remove();
}

async function upsertMatch(userId, invitationType) {
  const user1 = appState.user.id;
  const user2 = userId;

  try {
    // 1. check existing match
    const { data: existing, error: fetchError } = await supabase
      .from("0con_matches")
      .select("type")
      .match({
        user1_id: user1,
        user2_id: user2
      })
      .maybeSingle();

    if (fetchError) throw fetchError;

    // 2. decide final type (NEVER downgrade 2 → 1)
    let finalType = invitationType;

    if (existing) {
      finalType = Math.max(existing.type, invitationType);
    }

    // 3. upsert
    const { error: upsertError } = await supabase
      .from("0con_matches")
      .upsert({
        user1_id: user1,
        user2_id: user2,
        type: finalType
      }, {
        onConflict: "user1_id,user2_id"
      });

    if (upsertError) throw upsertError;

  } catch (err) {
    console.error("upsertMatch failed:", err);
  }
}



//#endregion

//#region Profile Tab

//#region Friends
function renderFriendsProfile(profile) {
  if (!profile) return;

  // BASIC INFO
  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileDescription").textContent = profile.description;

  function renderDescription(profile) {
  const el = document.getElementById("profileDescription");

  if (!profile || !profile.description) {
    el.textContent = "";
    return;
  }

  el.textContent = profile.description;
}

document.getElementById("editDescriptionBtn").addEventListener("click", () => {
  const modal = document.getElementById("descriptionModal");
  const input = document.getElementById("descriptionInput");

  input.value = appState.profile?.description || "";

  modal.classList.remove("hidden");
});

document.getElementById("closeDescriptionBtn").addEventListener("click", () => {
  document.getElementById("descriptionModal").classList.add("hidden");
});

document.getElementById("saveDescriptionBtn").addEventListener("click", async () => {
  const value = document.getElementById("descriptionInput").value.trim();

  // optional safety limit
  if (value.length > 300) return;

  // update UI instantly
  appState.profile.description = value;
  renderDescription(appState.profile);

  // close modal
  document.getElementById("descriptionModal").classList.add("hidden");

  // Supabase update (your pattern)
  const { error } = await supabase
    .from("0con_profilesdata")
    .update({ description: value })
    .eq("id", appState.user.id);

  if (error) {
    console.error(error);
    return;
  }
});

// ✅ INITIAL RENDER (with cache busting)
const avatar = document.getElementById("profileAvatar");

if (avatar) {
  const base =
    profile.profile_photo_url ||
    "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg";

  avatar.src = base + "?t=" + Date.now();
}


// ✅ STATE
let selectedProfilePhoto = null;


// ✅ OPEN FILE PICKER
document.getElementById("editPhotoBtn").onclick = () => {
  document.getElementById("photoInput").click();
};


// ✅ HANDLE FILE + PREVIEW
document.getElementById("photoInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const compressed = await resizeImage(file, 1080, 0.8);

  selectedProfilePhoto = compressed;

  const previewUrl = URL.createObjectURL(compressed);

  document.getElementById("photoPreview").src = previewUrl;
  document.getElementById("photoModal").classList.remove("hidden");
});


// ✅ CLOSE MODAL
document.getElementById("closePhotoBtn").onclick = () => {
  document.getElementById("photoModal").classList.add("hidden");
  selectedProfilePhoto = null;
};


// ✅ SAVE PHOTO (overwrite + cache bust)
document.getElementById("savePhotoBtn").onclick = async () => {
  try {
    const userId = appState.user.id;

    if (!selectedProfilePhoto) return;

    const path = `${userId}/profile.jpg`;

    // 🔥 normalize (IMPORTANT)
    const fileBlob = await normalizeFile(selectedProfilePhoto);

    // 1. upload (overwrite same file)
    const { error } = await supabase.storage
      .from("CONNECTION_PROFILE_PHOTOS")
      .upload(path, fileBlob, {
        contentType: fileBlob.type || "image/jpeg",
        upsert: true
      });

    if (error) throw error;

    // 2. get public URL
    const { data } = supabase.storage
      .from("CONNECTION_PROFILE_PHOTOS")
      .getPublicUrl(path);

    // 🔥 cache-busting for UI only
    const newUrl = data.publicUrl + "?t=" + Date.now();

    // 3. update UI instantly
    document.getElementById("profileAvatar").src = newUrl;

    if (appState.profile) {
      appState.profile.profile_photo_url = data.publicUrl;
    }

    // 4. cleanup
    document.getElementById("photoModal").classList.add("hidden");
    selectedProfilePhoto = null;

  } catch (err) {
    console.error(err);
    alert("Failed to update photo");
  }
};

  // PREMIUM / BASIC
  const badge = document.getElementById("profileBadge");
  badge.textContent = profile.is_premium ? t("premium_profile") : t("basic_profile");

  // AVOCADOS
 const avo = document.getElementById("avocadoCount"); 

const count = profile.avocados || 0;

avo.textContent = profile.is_premium
  ? t("avocado_unlimited")
  : count === 0
    ? t("avocado_none")
    : t("avocado_some", { count });

  // FRIEND MODE
  const friendMode = document.getElementById("friendModeStatus");
  const friendToggle = document.getElementById("friendModeToggle");

// Set initial state
friendMode.textContent = profile.friends_mode_on ? t("visible") : t("hidden");
friendToggle.checked = profile.friends_mode_on;

friendToggle.addEventListener("change", async () => {
  const newValue = friendToggle.checked;

  try {
    // Example: Supabase / SQL call (adapt to your backend)
    const { error } = await supabase
      .from("0con_profilesdata")
      .update({ friends_mode_on: newValue })
      .eq("id", profile.id);

    if (error) throw error;

    // Update UI
    friendMode.textContent = newValue ? t("visible") : t("hidden");

  } catch (err) {
    console.error("Error updating friend mode:", err);

    // rollback UI if failed
    friendToggle.checked = !newValue;
  }
});

document.getElementById("editLanguagesBtn").addEventListener("click", () => {
  openLanguagesModal(appState.profile);
});

  // LANGUAGES
function renderLanguages(languagespassed) {
  const langBox = document.getElementById("languagesList");

  if (!languagespassed) {
    langBox.textContent = "";
    return [];
  }

  const languages = (languagespassed || []).map(lang => {
    const id = typeof lang === "string" ? lang : lang.id;

    return {
      id,
      label: t(id)
    };
  });

  langBox.textContent = languages.map(l => l.label).join(", ");

  return languages;
}

let editingLanguages = [];

function openLanguagesModal(profile) {
  editingLanguages = (profile.languages || []).map(l =>
    typeof l === "string" ? l : l.id
  );

  const container = document.getElementById("languagesCheckboxList");
  container.innerHTML = "";

  Object.entries(AppData.languageMap).forEach(([id, data]) => {
    const isChecked = editingLanguages.includes(id);

    const label = document.createElement("label");
    label.style.display = "block";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = id;
    input.checked = isChecked;

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + t(id)));

    container.appendChild(label);
  });

  document.getElementById("languagesModal").classList.remove("hidden");
}

document.getElementById("saveLanguagesBtn").addEventListener("click", async () => {
  const checkboxes = document.querySelectorAll("#languagesCheckboxList input");

  const selected = [];

  checkboxes.forEach(cb => {
    if (cb.checked) {
      selected.push({
        id: cb.value,
        label: AppData.languageMap[cb.value].label
      });
    }
  });

  // 🔥 update global state (correct)
  appState.profile.languages = selected;

  // re-render UI
  renderLanguages(selected);

  // close modal
  document.getElementById("languagesModal").classList.add("hidden");

  // send to backend
  await updateProfileLanguages(selected);
});

async function updateProfileLanguages(languages) {
  const { error: profileError } = await supabase
    .from("0con_profilesdata")
    .update({ languages: languages })
    .eq("id", appState.user.id);

  if (profileError) {
    console.error(profileError);
    return;
  }
}

document.getElementById("closeLanguagesBtn").addEventListener("click", async () => {
  document.getElementById("languagesModal").classList.add("hidden");
});

  // CLOSURE BADGE (only if exists)
  const closure = document.getElementById("closureBadge");
  if (profile.closure_badge === true) {
    closure.style.display = "block";
    closure.textContent = t("respectful_badge");
  } else {
    closure.style.display = "none";
  }

  // SURVEY SYSTEM
  renderFriendsSection(profile);

  renderLanguages(appState.profile.languages);
}

function canEditSurvey(profile) { 
    if (!profile.friends_updated_at) 
        return true; 
    
    const last = new Date(profile.friends_updated_at); 
    const now = new Date(); const diffDays = (now - last) / (1000 * 60 * 60 * 24); 
    return diffDays >= 30; 
}

function daysLeft(profile) { 
    if (!profile.friends_updated_at) 
        return 0; 
    const last = new Date(profile.friends_updated_at); 
    const now = new Date(); const diffDays = 30 - (now - last) / (1000 * 60 * 60 * 24); 
    return Math.max(0, Math.ceil(diffDays)); 
}

function renderFullSurvey(profile) {
  const answers = profile.friends_survey || {};
  const dealbreakerId = profile.dealbreaker;

  const weights = profile.friend_answer_weight || {}; 
  // expects: { questionId: 0.1 - 1.0 }

  const surveyItems = AppData.questions.map(q => {
    const selectedId = answers[q.id];
    const weightRaw = weights[q.id] || 0;
    const weight = Math.round(weightRaw * 10); // 1–10

    const optionsHtml = q.options.map(opt => {
      const isSelected = opt.id === selectedId;
      const isDealbreaker = opt.id === dealbreakerId;

      let className = "option";

      if (isDealbreaker) className += " dealbreaker-option";
      else if (isSelected) className += " selected-option";

      return `
        <div class="${className}">
          ${isDealbreaker ? "🔴 " : isSelected ? "🟢 " : ""}
          ${t(opt.id, currentLang)}
        </div>
      `;
    }).join("");

    // ===== SCALE BAR (1–10) =====
    const scaleBar = Array.from({ length: 10 }).map((_, i) => {
      const active = i < weight;
      return `<div class="scale-segment ${active ? "active" : ""}"></div>`;
    }).join("");

    return `
      <div class="question-block">

        <b>${t(q.id, currentLang)}</b>

        <!-- WEIGHT BAR -->
        <div class="weight-wrapper">
          <span class="weight-label">${t("importance")}: ${weight}/10</span>

          <div class="scale-bar">
            ${scaleBar}
          </div>
        </div>

        <div class="options">
          ${optionsHtml}
        </div>

      </div>
    `;
  }).join("");

  return `
    <div class="survey-wrapper">
      ${surveyItems}
    </div>
  `;
}

function renderFriendsSection(profile) {
  const container = document.getElementById("friendsBox");

  const editable = canEditSurvey(profile);
  const days = daysLeft(profile);

  const isOpen = false; // default closed

container.innerHTML = `
  <h3>${t("friends_preferences")}</h3>

  <button id="toggleFriendsBox" class="toggle-btn">
    ${isOpen ? t("hide_preferences") : t("show_preferences")}
  </button>

  <div id="friendsContent" style="display:none; margin-top:10px;">

    <div class="friends-content">

      <div class="survey-section">
        ${renderFullSurvey(profile)}
      </div>

      <div class="edit-status">
        <button ${editable ? "" : "disabled"} id="editSurveyBtn">
          ${
            editable
              ? t("edit")
              : t("edit_available_in").replace("{days}", days)
          }
        </button>
      </div>

    </div>
  </div>
`;

  // toggle logic
  const btn = document.getElementById("toggleFriendsBox");
  const content = document.getElementById("friendsContent");

btn.addEventListener("click", () => {
  const open = content.style.display === "none";

  content.style.display = open ? "block" : "none";

  btn.textContent = open
    ? t("hide_preferences")
    : t("show_preferences");
});

  document.getElementById("editSurveyBtn").onclick = () => {
  openEditFriendsModal(profile);
};
}


function openEditFriendsModal(profile) {
  appState.profile = profile;
  appState.isPremium = !!profile.is_premium;

  appState.selectedAnswers = { ...(profile.friends_survey || {}) };

  // ✅ NEW: weights
  appState.answerWeights = { ...(profile.friend_answer_weight || {}) };

  const db = profile.dealbreaker || [];
  appState.selectedDealbreakers = new Set(Array.isArray(db) ? db : [db]);

  renderModal();
}

function renderModal() {
  const modal = document.getElementById("editFriendsModal");
    modal.style.display = "block";

  modal.innerHTML = `
  <div class="modal-content">
    <h2>${t("edit_preferences")}</h2>

    <div id="editQuestions"></div>

    <button id="saveEditBtn">
      ${t("save")}
    </button>

    <button id="closeEditBtn">
      ${t("close")}
    </button>
  </div>
`;

  document.getElementById("closeEditBtn").onclick = closeModal;
  document.getElementById("saveEditBtn").onclick = saveChanges;

  renderQuestions();

  modal.style.display = "block";
}

function renderQuestions() {
  const container = document.getElementById("editQuestions");
  container.innerHTML = "";

  const questions = AppData.questions;

  questions.forEach(q => {
    const block = document.createElement("div");
    block.className = "question-block";

    // TITLE
    const title = document.createElement("h3");
    title.innerText = t(q.id, currentLang);
    block.appendChild(title);

    // ✅ WEIGHT SLIDER (correct place)
const weightRaw = appState.answerWeights[q.id] || 0.5;
const weight = Math.round(weightRaw * 10);

const isLocked = !appState.isPremium;

const weightWrapper = document.createElement("div");
weightWrapper.className = "weight-editor";

weightWrapper.innerHTML = `
  <label>
    ${t("importance")}
    <span id="weightVal-${q.id}">${weight}</span>/10
    ${isLocked ? `<span class="premium-lock">🔒 ${t("premium")}</span>` : ""}
  </label>

  <input 
    type="range" 
    min="1" 
    max="10" 
    value="${weight}" 
    class="weight-slider ${isLocked ? "locked" : ""}"
    data-qid="${q.id}"
    ${isLocked ? "disabled" : ""}
  />
`;

block.appendChild(weightWrapper);

    // OPTIONS
    q.options.forEach(opt => {
      const row = document.createElement("div");
      row.className = "option-row";

      const isSelected = appState.selectedAnswers[q.id] === opt.id;
      const isDealbreaker = appState.selectedDealbreakers.has(opt.id);

      // ANSWER BUTTON
      const answerBtn = document.createElement("button");
      answerBtn.innerText = t(opt.id, currentLang);
      answerBtn.className = "option-btn";

      if (isSelected) answerBtn.classList.add("selected-option");

      answerBtn.onclick = () => {
        appState.selectedAnswers[q.id] = opt.id;
        renderQuestions();
      };

      // DEALBREAKER BUTTON
      const dbBtn = document.createElement("button");
      dbBtn.innerText = "🚫";
      dbBtn.className = "dealbreaker-btn";

      if (isDealbreaker) dbBtn.classList.add("dealbreaker-active");

      dbBtn.onclick = () => {
        if (!appState.isPremium) {
          appState.selectedDealbreakers.clear();
          appState.selectedDealbreakers.add(opt.id);
        } else {
          if (appState.selectedDealbreakers.has(opt.id)) {
            appState.selectedDealbreakers.delete(opt.id);
          } else {
            appState.selectedDealbreakers.add(opt.id);
          }
        }

        renderQuestions();
      };

      row.appendChild(answerBtn);
      row.appendChild(dbBtn);
      block.appendChild(row);
    });

    container.appendChild(block);
  });

  // ✅ AFTER rendering → attach slider listeners
document.querySelectorAll(".weight-slider").forEach(slider => {
  slider.oninput = () => {
    if (!appState.isPremium) return; // extra safety

    const qid = slider.dataset.qid;
    const value = parseInt(slider.value);

    document.getElementById(`weightVal-${qid}`).innerText = value;

    appState.answerWeights[qid] = value / 10;
  };
});
}

async function saveChanges() {
  const user = appState.user;
  if (!user) return;

  showLoading(); // 👈 START loading

  try {
    const now = new Date().toISOString();

    const updateData = {
      friends_survey: appState.selectedAnswers,
      dealbreaker: appState.isPremium
        ? Array.from(appState.selectedDealbreakers)
        : Array.from(appState.selectedDealbreakers)[0] || null,
      friends_updated_at: now
    };

    if (appState.isPremium) {
      updateData.friend_answer_weight = appState.answerWeights;
    }

    const { error } = await supabase
      .from("0con_profilesdata")
      .update(updateData)
      .eq("id", user.id);

    if (error) {
      alert("Save failed");
      console.error(error);
      return;
    }

    closeModal();
    location.reload();

  } catch (err) {
    console.error(err);
    alert("Unexpected error");
  } finally {
    hideLoading(); // 👈 ALWAYS runs
  }
}

function closeModal() {
  const modal = document.getElementById("editFriendsModal");
  if (modal) modal.style.display = "none";
}
//#endregion

//#region Date

function renderDateProfileView(profile) {
  if (!profile) return;

  // BASIC INFO
  document.getElementById("dateName").textContent = profile.name;
  document.getElementById("dateDescriptionView").textContent = profile.date_description;

// =========================
// DATE PHOTOS (MULTIPLE - FIXED STRUCTURE)
// =========================
const photoContainer = document.getElementById("datePhotos");

const photos = Array.isArray(profile.photos)
  ? profile.photos
  : [];

// sort by order (VERY IMPORTANT)
photos.sort((a, b) => a.order - b.order);

photoContainer.innerHTML = photos.length
  ? photos
      .map(photo => `
        <img
          class="date-photo"
          src="${photo.url}"
          data-profile="${photo.isProfile ? "true" : "false"}"
          onerror="this.src='https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg'"
        />
      `)
      .join("")
  : `
    <img
      class="date-photo"
      src="https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg"
    />
  `;

  // BADGE
  const badge = document.getElementById("dateBadge");
  badge.textContent = profile.is_premium ? t("premium_profile") : t("basic_profile");

  // 🍲 TOFU COUNTER (DATE VERSION)
  const tofuBox = document.getElementById("dateTofuCount");

  const tofuCount = profile.tofus || 0;

tofuBox.textContent = profile.is_premium
  ? t("tofu_unlimited")
  : tofuCount === 0
    ? t("tofu_none")
    : t("tofu_some", { tofuCount });

// =========================
// DATE MODE TOGGLE
// =========================
const modeText = document.getElementById("dateModeStatus");
const modeToggle = document.getElementById("dateModeToggle");

modeText.textContent = profile.dates_mode_on ? t("visible") : t("hidden");
modeToggle.checked = profile.dates_mode_on;

modeToggle.onchange = async () => {
  const newValue = modeToggle.checked;

  try {
    const { error } = await supabase
      .from("0con_profilesdata")
      .update({ dates_mode_on: newValue })
      .eq("id", profile.id);

    if (error) throw error;

    modeText.textContent = newValue ? "Visible" : "Hidden";
  } catch (err) {
    console.error("Error updating date mode:", err);
    modeToggle.checked = !newValue;
  }
};

  // =========================
  // INCÓGNITO MODE (PREMIUM)
  // =========================
    addIncognitoToggle(profile);
  

  // =========================
  // HOBBIES
  // =========================
  document.getElementById("dateHobbies").textContent =
  profile.hobbies || "";

  // =========================
  // SIMPLE DATE ANSWERS
  // =========================
  renderDateAnswers(profile);
}

function addIncognitoToggle(profile) {
  const isPremium = !!profile.is_premium;

  const Friendscontainer = document.getElementById("FriendsincognitoBox");
  const Datescontainer = document.getElementById("DatesincognitoBox");
  // ---------- FRIENDS ----------
  Friendscontainer.innerHTML = `
    <div class="incognito-container ${!isPremium ? "locked" : ""}">
      <span>🕶️ ${t("incognito_mode")}</span>

      <label class="switch">
        <input type="checkbox" id="friendsIncognitoToggle" ${!isPremium ? "disabled" : ""}>
        <span class="slider"></span>
      </label>

      ${!isPremium ? `<div class="lock-overlay">🔒 ${t("premium")}</div>` : ""}
    </div>
  `;

  const friendsToggle = document.getElementById("friendsIncognitoToggle");
  friendsToggle.checked = !!profile.friends_incognito_mode;

  if (isPremium) {
    friendsToggle.onchange = async () => {
      const newValue = friendsToggle.checked;

      try {
        const { error } = await supabase
          .from("0con_profilesdata")
          .update({ friends_incognito_mode: newValue })
          .eq("id", profile.id);

        if (error) throw error;
      } catch (err) {
        console.error("Friends incognito update failed:", err);
        friendsToggle.checked = !newValue;
      }
    };
  }

  // ---------- DATES ----------
  Datescontainer.innerHTML = `
    <div class="incognito-container ${!isPremium ? "locked" : ""}">
      <span>🕶️  ${t("incognito_mode")}</span>

      <label class="switch">
        <input type="checkbox" id="datesIncognitoToggle" ${!isPremium ? "disabled" : ""}>
        <span class="slider"></span>
      </label>

      ${!isPremium ? `<div class="lock-overlay">🔒  ${t("premium")}</div>` : ""}
    </div>
  `;

  const datesToggle = document.getElementById("datesIncognitoToggle");
  datesToggle.checked = !!profile.date_incognito_mode;

  if (isPremium) {
    datesToggle.onchange = async () => {
      const newValue = datesToggle.checked;

      try {
        const { error } = await supabase
          .from("0con_profilesdata")
          .update({ date_incognito_mode: newValue })
          .eq("id", profile.id);

        if (error) throw error;
      } catch (err) {
        console.error("Date incognito update failed:", err);
        datesToggle.checked = !newValue;
      }
    };
  }
}

function renderDateAnswers(profile) {
  const container = document.getElementById("dateAnswersBox");

  const answers = profile.dating_survey || profile.date_answers || [];

  if (!container) return;

  if (!Array.isArray(answers)) {
    container.innerHTML = `<p>${t("noAnswersYet")}</p>`;
    return;
  }

  const html = answers.map(item => {
    const questionLabel = DateData.getQuestionLabel(item.questionId);
    const answerLabel = DateData.getLabel(item.questionId, item.answer);

    return `
      <div class="date-answer">
        <b>${questionLabel}:</b>
        <span>${answerLabel}</span>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="date-answers-list">
      ${html || `<p>${t("noAnswersYet")}</p>`}
    </div>
  `;
}


// CHANGE DATE PROFILE
// CHANGE DATE PROFILE
// CHANGE DATE PROFILE

document.getElementById("editDateDescriptionBtn").onclick = () => {
  const modal = document.getElementById("dateDescriptionModal");
  const input = document.getElementById("dateDescriptionInput");

  input.value = appState.profile?.date_description || "";

  modal.classList.remove("hidden");
};

document.getElementById("saveDateDescriptionBtn").onclick = async () => {
  const value = document.getElementById("dateDescriptionInput").value.trim();

  appState.profile.date_description = value;
  document.getElementById("dateDescriptionView").textContent = value;

  document.getElementById("dateDescriptionModal").classList.add("hidden");

  await supabase
    .from("0con_profilesdata")
    .update({ date_description: value })
    .eq("id", appState.user.id);
};

document.getElementById("editDateHobbiesBtn").onclick = () => {
  const modal = document.getElementById("dateHobbiesModal");
  const input = document.getElementById("dateHobbiesInput");

  input.value = appState.profile?.hobbies || "";

  modal.classList.remove("hidden");
};

document.getElementById("saveDateHobbiesBtn").onclick = async () => {
  const value = document.getElementById("dateHobbiesInput").value.trim();

  appState.profile.hobbies = value;
  document.getElementById("dateHobbies").textContent = value;

  document.getElementById("dateHobbiesModal").classList.add("hidden");

  await supabase
    .from("0con_profilesdata")
    .update({ hobbies: value })
    .eq("id", appState.user.id);
};

document.getElementById("editDateAnswersBtn").onclick = () => {
  openDateAnswersModal();
};

function openDateAnswersModal(existingMap = null) {
  const modal = document.getElementById("dateAnswersModal");
  const container = document.getElementById("dateAnswersEditContainer");

  const answers = appState.profile.dating_survey || [];

  let map = existingMap;

  if (!map) {
    map = {};
    answers.forEach(a => map[a.questionId] = a.answer);
  }

  container.innerHTML = "";

  dateQuestions.forEach(q => {
    const block = document.createElement("div");
    block.className = "question-block";

    const title = document.createElement("h3");
    title.textContent = DateData.getQuestionLabel(q.id);
    block.appendChild(title);

    if (q.type === "number") {
      const input = document.createElement("input");
      input.type = "number";
      input.value = map[q.id] || "";

      input.oninput = () => {
        map[q.id] = input.value === "" ? null : Number(input.value);
      };

      block.appendChild(input);
    }

    if (q.type === "single") {
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = DateData.getLabel(q.id, opt.id);

        if (
          map[q.id] === opt.id ||
          (Array.isArray(map[q.id]) && map[q.id].includes(opt.id))
        ) {
          btn.classList.add("selected-option");
        }

        btn.onclick = () => {
          if (Array.isArray(map[q.id])) {
            const set = new Set(map[q.id]);
            set.has(opt.id) ? set.delete(opt.id) : set.add(opt.id);
            map[q.id] = Array.from(set);
          } else {
            map[q.id] = opt.id;
          }

          openDateAnswersModal(map); // keep UI refresh
        };

        block.appendChild(btn);
      });
    }

    container.appendChild(block);
  });

  modal.classList.remove("hidden");

  document.getElementById("saveDateAnswersBtn").onclick = () => saveDateAnswers(map);
}

async function saveDateAnswers(map) {
  const formatted = Object.keys(map).map(qid => ({
    questionId: qid,
    answer: map[qid]
  }));

  appState.profile.dating_survey = formatted;

  renderDateAnswers(appState.profile);

  document.getElementById("dateAnswersModal").classList.add("hidden");

  await supabase
    .from("0con_profilesdata")
    .update({ dating_survey: formatted })
    .eq("id", appState.user.id);
}


//PHOTOSECTION
//PHOTOSECTION
//PHOTOSECTION

document.getElementById("editDatePhotosBtn").onclick = () => {
  openDatePhotosModal();
};

let draftPhotos = [];
let renderToken = 0;

function getTotalCount() {
  const saved = appState.profile.photos || [];
  return saved.length + draftPhotos.filter(p => p.temp).length;
}

function openDatePhotosModal() {

  const modal = document.getElementById("datePhotosModal");

  // cleanup temp URLs
  draftPhotos
    .filter(p => p.temp)
    .forEach(p => URL.revokeObjectURL(p.url));

  renderToken++;
  const currentToken = renderToken;

  const saved = (appState.profile.photos || []).map(p => ({
    id: p.url,
    url: p.url,
    temp: false
  }));

  const temp = draftPhotos.filter(p => p.temp);

  draftPhotos = [...saved, ...temp];

  renderPhotosDateEdit(currentToken);

  modal.classList.remove("hidden");

  updateAddButton();
}

function renderPhotosDateEdit(token) {
  // ✅ FIX: guard BEFORE rendering loop
  if (token !== renderToken) {
    return;
  }

  const grid = document.getElementById("datePhotosPreview");
  grid.innerHTML = "";

  const photosSnapshot = [...draftPhotos];

  photosSnapshot.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "photo-item";
    div.draggable = true;
    div.dataset.id = p.id;

    div.innerHTML = `
      <img src="${p.url}" />
      ${index === 0 ? `<span class="badge">Profile</span>` : ""}
      <button class="remove">×</button>
    `;

    // REMOVE
div.querySelector(".remove").onclick = () => {

  draftPhotos = draftPhotos.filter(x => x.id !== p.id);

  appState.profile.photos = draftPhotos.filter(x => !x.temp); // ✅ FIX

  renderPhotosDateEdit(token);
  updateAddButton();
};

    // DRAG START
    div.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", p.id);
    });

    div.addEventListener("dragover", (e) => e.preventDefault());

    // DROP (reorder)
    div.addEventListener("drop", (e) => {
      e.preventDefault();

      const fromId = e.dataTransfer.getData("text/plain");
      const toId = p.id;

      const fromIndex = draftPhotos.findIndex(x => x.id === fromId);
      const toIndex = draftPhotos.findIndex(x => x.id === toId);

      if (fromIndex === -1 || toIndex === -1) return;

      const moved = draftPhotos.splice(fromIndex, 1)[0];
      draftPhotos.splice(toIndex, 0, moved);

      renderPhotosDateEdit(token);
      updateAddButton();
    });

    grid.appendChild(div);
  });

}

function updateAddButton() {
  const btn = document.getElementById("addPhotosBtnDateEdit");

  const total = draftPhotos.length;

  btn.style.display = total >= 5 ? "none" : "block";
}

document.getElementById("datePhotosInput").onchange = (e) => {

  const files = Array.from(e.target.files);

  const existingSaved = draftPhotos.filter(p => !p.temp).length;
  const currentTemp = draftPhotos.filter(p => p.temp).length;

  const availableSlots = 5 - existingSaved - currentTemp;

  const newFiles = files.slice(0, availableSlots);

  const newTemp = newFiles.map(file => {
    const url = URL.createObjectURL(file);

    return {
      id: url,
      url,
      temp: true,
      file
    };
  });

  draftPhotos = [...draftPhotos, ...newTemp];

  e.target.value = "";

  renderPhotosDateEdit(renderToken);
  updateAddButton();
};

document.getElementById("saveDatePhotosBtn").onclick = async () => {

  const userId = appState.user.id;

  let currentPhotos = draftPhotos.filter(p => !p.temp);

  const filesToUpload = draftPhotos
    .filter(p => p.temp)
    .map(p => p.file)
    .slice(0, 5 - currentPhotos.length);

  for (let file of filesToUpload) {

    try {
      // 🔥 normalize first (VERY IMPORTANT for WebView)
      const safeFile = await normalizeFile(file);

      const blob = await resizeImage(safeFile);

      if (!blob) throw new Error("Image compression failed");

      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
      const path = `${userId}/${fileName}`;

      const { error } = await supabase.storage
        .from("DATE_PHOTOS")
        .upload(path, blob, {
          contentType: blob.type || "image/jpeg",
          upsert: false
        });

      if (error) {
        console.error("Upload failed:", error);
        throw error;
      }

      const { data } = supabase.storage
        .from("DATE_PHOTOS")
        .getPublicUrl(path);

      currentPhotos.push({
        url: data.publicUrl
      });

    } catch (err) {
      console.error("Photo upload error:", err);
      alert("One photo failed to upload");
      continue;
    }
  }

  currentPhotos = normalizePhotos(currentPhotos);

  appState.profile.photos = currentPhotos;

  const { error: updateError } = await supabase
    .from("0con_profilesdata")
    .update({ photos: currentPhotos })
    .eq("id", userId);

  if (updateError) {
    console.error(updateError);
    alert("Failed to save profile photos");
    return;
  }

  draftPhotos = [];

  document.getElementById("datePhotosModal").classList.add("hidden");

  renderDateProfileView(appState.profile);
};

function normalizePhotos(photos) {
  return photos.map((p, i) => ({
    ...p,
    order: i,
    isProfile: i === 0
  }));
}

//#endregion

//#region Settings

function PremiumBoxHiding() {
  const isPremium = isPremiumUser();

  const premiumBox = document.getElementById("premiumBox");
  const unsubscribeBox = document.getElementById("unsubscribeBox");

  if (!premiumBox || !unsubscribeBox) return;

  if (isPremium) {
    premiumBox.style.display = "none";
    unsubscribeBox.style.display = "block";
  } else {
    premiumBox.style.display = "block";
    unsubscribeBox.style.display = "none";
  }
}

document.getElementById("redirectToPremium").addEventListener("click", () => {
  openPremiumScreen();
});


  document.getElementById("setLanguageBtn").addEventListener("click", setLanguage);


async function setLanguage() {
  const lang = document.getElementById("languageSelect").value;

  if (!appState.user) return;

  // 💾 1. Save locally
  localStorage.setItem("app_language", lang);

  // 🗄 2. Update profile table
  const { error: profileError } = await supabase
    .from("0con_profilesdata")
    .update({ lang: lang })
    .eq("id", appState.user.id);

  if (profileError) {
    console.error("Profile language update error:", profileError);
  }

  // 🔔 3. Update notifications table
  const { error: notifError } = await supabase
    .from("0con_notifications")
    .update({ language: lang })
    .eq("user_id", appState.user.id);

  if (notifError) {
    console.error("Notification language update error:", notifError);
  }

  // 🔄 4. Refresh UI
  loadLanguage();
}


async function loadNotificationSettings() {
  let { data, error } = await supabase
    .from("0con_notifications")
    .select("*")
    .eq("user_id", appState.user.id)
    .maybeSingle();

  // 🧩 If row doesn't exist → create it
  if (!data) {
    console.warn("No notification row → creating fallback");

    const { data: inserted, error: insertError } = await supabase
      .from("0con_notifications")
      .insert({
        user_id: appState.user.id
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert fallback error:", insertError);
      return;
    }

    data = inserted; // 👈 use the newly created row
  }

  // 🎛 Apply to UI
  document.getElementById("notifMatches").checked = data.match_on;
  document.getElementById("notifIncomes").checked = data.invitations_on;
  document.getElementById("notifMessages").checked = data.messages_on;
  document.getElementById("notifUpdates").checked = data.system_on;
}

function initToggleListeners() {
  setupToggle("notifMatches", "match_on");
  setupToggle("notifIncomes", "invitations_on");
  setupToggle("notifMessages", "messages_on");
  setupToggle("notifUpdates", "system_on");
}

function setupToggle(id, field) {
  document.getElementById(id).addEventListener("change", async (e) => {
    const { error } = await supabase
      .from("0con_notifications")
      .update({ [field]: e.target.checked })
      .eq("user_id", appState.user.id);

    if (error) {
      console.error("Toggle update error:", error);
    }
  });
}

function startHeartbeat() {
  setInterval(async () => {
    if (!appState.user) return;

const { error } = await supabase
  .from("0con_notifications")
  .update({
    last_online: new Date().toISOString()
  })
  .eq("user_id", appState.user.id);

    if (error) {
      console.error("Heartbeat error:", error);
    }
  }, 120000); // 2 minutes
}

const modal = document.getElementById("contactModal");

document.getElementById("contactSupportBtn").addEventListener("click", () => {
  modal.style.display = "flex"; // or "block" depending on your CSS
});

document.getElementById("closeContactModal").addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("sendContactMessage").addEventListener("click", sendContactMessage);

async function sendContactMessage() {

  const user = appState.user;

  if (!user) {
    alert("You must be logged in.");
    return;
  }

  const subject = document.getElementById("contactSubject").value;
  const message = document.getElementById("contactMessage").value;

  if (!subject || !message) {
    alert("Please fill subject and message.");
    return;
  }

  // 🔥 fetch email from profiles table
  const { data: emailProfile, error: profileError } = await supabase
    .from("profiles")
    .select("email")
    .eq("id", user.id)
    .single();

  if (profileError || !emailProfile?.email) {
    console.error(profileError);
    alert("Could not fetch email from profile.");
    return;
  }

  const email = emailProfile.email;

  const { error } = await supabase
    .from("contact_messages")
    .insert({
      user_id: user.id,
      application: "Circle",
      email,
      subject,
      message,
    });

  if (error) {
    console.error(error);
    alert("Failed to send message.");
    return;
  }

  alert("Message sent!");
  modal.style.display = "none";
}



document.getElementById("logoutBtn").addEventListener("click", async () => {
  if (confirm("Are you sure you want to log out?")) {
    await logoutUser();
  }
});

async function logoutUser() {

  const userId = appState?.user?.id;

  try {
    // Remove the token for this user using global currentUser
    if (userId) {
      const { error: tokenError } = await supabase
        .from("0con_notifications")
        .delete()
        .eq("user_id", userId);

      if (tokenError) console.error("Failed to remove user token:", tokenError);
    }
  } catch (err) {
    console.error("Error removing token:", err);
  }

  // Sign out
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout failed:", error.message);
    alert("logoutError");
    return;
  }

  // 🔥 Clear app state
  const preferredLang = localStorage.getItem("app_language") || "en";
  localStorage.clear();
  sessionStorage.clear();
  localStorage.setItem("app_language", preferredLang);

  // Optional: hard reload to reset JS state
  window.location.href = "login.html";
}

document.getElementById("deleteAccountBtn").addEventListener("click", () => {
  console.log("Delete account button");
});

//#endregion

//#endregion

//#region PREMIUMTAB

function openPremiumScreen() {
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  document.getElementById("survey")?.classList.add("hidden");

  document.getElementById("premium")?.classList.remove("hidden");
  document.getElementById("premiumInfo")?.classList.add("hidden");

  document.querySelector(".bottombar")?.classList.add("hidden");

  document.querySelectorAll(".nav-item").forEach(i => {
    i.classList.remove("active");
  });

  document.querySelector('[data-tab="premium"]')?.classList.add("active");
}

function closePremiumScreen() { 
  const premium = document.getElementById("premium"); 
  if (premium) premium.classList.add("hidden"); 
  document.getElementById("discover")?.classList.add("active"); 
  
  const bottomBar = document.querySelector(".bottombar"); 
  bottomBar?.classList.remove("hidden"); 
  
  document.querySelectorAll(".nav-item").forEach(i => { 
    i.classList.remove("active"); }); 
    
  const discoverNav = document.querySelector('[data-tab="discover"]'); 
  discoverNav?.classList.add("active"); 

}

document.getElementById("exitPremiumBtn")?.addEventListener("click", () => {
  closePremiumScreen();
});

document.getElementById("supportLink")?.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("premium")?.classList.add("hidden");
  document.getElementById("premiumInfo")?.classList.remove("hidden");
});

document.getElementById("backFromPremiumInfo")?.addEventListener("click", () => {
  document.getElementById("premiumInfo")?.classList.add("hidden");
  openPremiumScreen();
});


//#endregion

//#region NOTIFICATIONS

// DOT
// DOT
// DOT
function updateMessagesDot(cards) {
  const viewerId = appState.user.id;
  const lastOpened = getLastOpened('messages_last_opened');

  let hasUnread = false;

  for (const card of cards) {

    const isMine = card.last_sender_id === viewerId;
    if (isMine) continue;

    if (!card.last_message_at) continue;

    if (new Date(card.last_message_at) <= new Date(lastOpened)) continue;

    if (!card.isCommunity) {
      const isUser1 = card.user1_id === viewerId;

      const isMuted = isUser1
        ? card.is_muted_by_user1
        : card.is_muted_by_user2;

      if (!isMuted) {
        hasUnread = true;
        break;
      }
      continue;
    }

    if (!card.is_muted) {
      hasUnread = true;
      break;
    }
  }

  const dot = document.getElementById("messages-dot");
  if (!dot) return;

  // 👇 FINAL UI decision here
  if (appUI.currentTab === 'messages') {
    dot.classList.add('hidden');
    return;
  }

  dot.classList.toggle('hidden', !hasUnread);
}

function updateInvitesDot(invites) {

  if (appUI.currentTab === 'matches') {
    return; // 🚫 no dot while inside invites tab
  }

  const viewerId = appState.user.id;

  const lastOpened = getLastOpened('invites_last_opened');

  let hasUnread = false;

  for (const inv of invites) {

    if (!inv.created_at) continue;

    const inviteTime = new Date(inv.created_at);

    // ❗ only show if newer than last opened
    if (inviteTime <= lastOpened) continue;

    hasUnread = true;
    break;
  }

  const dot = document.getElementById("invites-dot");
  if (!dot) return;

  dot.classList.toggle("hidden", !hasUnread);
}

    //#endregion

//#region DOM

document.addEventListener("DOMContentLoaded", () => {
  showLoading();

  requestAnimationFrame(() => {
    setTimeout(async () => {
      try {
        await initApp();
      } catch (err) {
        console.error(err);
      }

      hideLoading();

      if (appState.user) {
        updateLastSeen(appState.user.id).catch(console.error);
      }
    }, 0);
  });
});

    //#endregion

//#region COMMUNICATION WITH NATIVES

// 🌍 Called from Android (trusted source)
window.onLocationReceived = async function(lat, lng) {

  window.__LOCATION_ALREADY_SET__ = true
  communityLatLng = { lat, lng };
  await appReady;

  await handleIncomingLocation(lat, lng, { isNative: true });

};


// 🧠 Main logic
async function handleIncomingLocation(lat, lng, options = {}) {
  try {
    const profile = appState.profile;

    if (!profile) {
      return;
    }

    const { isNative = false } = options;

    // 🌐 Case 1: NOT native → fallback
    if (!isNative) {
      await askUserForLocationFallback();
      return;
    }


    // If no stored location → save immediately
    if (!profile.location) {
      await updateUserLocationCoords(lat, lng);
      return;
    }


    // Compare with stored location
    const isSame = isSameLocation(profile.location, lat, lng);

    if (isSame) {
      return;
    }
    await updateUserLocationCoords(lat, lng);


  } catch (err) {
    console.error("Location handling failed:", err);
  }
}


// 📏 Compare locations
function isSameLocation(stored, lat, lng) {

  if (!stored?.lat || !stored?.lng) {
    return false;
  }

  if (appState.profile.travel_mode){
    return true;
  }

  const distance = Math.sqrt(
    Math.pow(stored.lat - lat, 2) +
    Math.pow(stored.lng - lng, 2)
  );

  return distance < 0.05;
}


// 💾 Store coordinates
async function updateUserLocationCoords(lat, lng) {

  const point = `POINT(${lng} ${lat})`;


  const { error } = await supabase
    .from("0con_profilesdata")
    .update({
      location: point
    })
    .eq("id", appState.user.id);

  if (error) {
    console.error("❌ Failed to update location:", error);
    return;
  }

}

window.onAndroidDeviceToken = async function (token, deviceType) {
  try {

    // ⏳ WAIT until app is ready
    while (!appState.user) {
      await new Promise(res => setTimeout(res, 300));
    }

const { data, error } = await supabase
  .from("0con_notifications")
  .upsert(
    {
      user_id: appState.user.id,
      device_token: token,
      device_type: deviceType,
      language: currentLang,
      last_online: new Date().toISOString()
    },
    {
      onConflict: "user_id"
    }
  )
  .select();

    if (error) {
      console.error("Upsert error:", error);
    }

  } catch (err) {
    console.error("Unexpected error:", err);
  }
};

window.onNativeDeepLink = function (screen) {

  if (!screen) return;

  // If app is not ready → queue it
  if (!window.__appReady) {
    window.__deepLinkQueue.push(screen);
    return;
  }

  handleDeepLink(screen);
};

function handleDeepLink(screen) {

  const tabMap = {
    messages: "messages",
    matches: "matches",
    profile: "profile",
    discover: "discover",
    settings: "settings"
  };

  const tabId = tabMap[screen];

  if (!tabId) {
    console.warn("Unknown deep link:", screen);
    return;
  }

  const navItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);

  openTab(tabId, navItem);

  window.scrollTo({ top: 0, behavior: "smooth" });
}
// 🔥 expose it globally for Android bridge
window.handleDeepLink = handleDeepLink;

    //#endregion


//#region FOR TESTIMNG ONLY

document.getElementById("unsubscribeBtn")?.addEventListener("click", async () => {
  const { error } = await supabase.rpc("reset_user_to_free", {
    p_user_id: appState.user.id,
  });

  if (error) {
    console.error(error);
    return;
  }

  appState.profile.is_premium = false;
  initApp();
});

document.getElementById("confirmPremiumBtn")?.addEventListener("click", async () => {
  // 1) restore premium
  const { error: profileError } = await supabase
    .from("0con_profilesdata")
    .update({ is_premium: true })
    .eq("id", appState.user.id);

  if (profileError) {
    console.error(profileError);
    return;
  }

  // 2) reactivate community
  const { error: communityError } = await supabase
    .from("0con_communities")
    .update({ is_active: true })
    .eq("owner_id", appState.user.id);

  if (communityError) {
    console.error(communityError);
    return;
  }

  // update local state
  appState.profile.is_premium = true;

  initApp();
  document.getElementById('premium').classList.add('hidden');
  document.getElementById('discover').classList.add('active');
  document.getElementById('BottomBar').classList.remove('hidden');
});

document.getElementById("confirmPremiumBtnInfo")?.addEventListener("click", async () => {
  // 1) restore premium
  const { error: profileError } = await supabase
    .from("0con_profilesdata")
    .update({ is_premium: true })
    .eq("id", appState.user.id);

  if (profileError) {
    console.error(profileError);
    return;
  }

  // 2) reactivate community
  const { error: communityError } = await supabase
    .from("0con_communities")
    .update({ is_active: true })
    .eq("owner_id", appState.user.id);

  if (communityError) {
    console.error(communityError);
    return;
  }

  // update local state
  appState.profile.is_premium = true;

  initApp();
  document.getElementById('premiumInfo').classList.add('hidden');
  document.getElementById('discover').classList.add('active');
  document.getElementById('BottomBar').classList.remove('hidden');
});

// ❓ Browser fallback (TEMP)
async function askUserForLocationFallback() {
  return new Promise((resolve) => {

    const modal = document.getElementById("fallbackLocationModal");
    const mapEl = document.getElementById("fallbackMap");

    modal.classList.remove("hidden");

    const defaultLatLng = communityLatLng || {
      lat: 39.4699,
      lng: -0.3763
    };

    // -----------------------------
    // INIT MAP ONLY ONCE
    // -----------------------------
    if (!fallbackMapState.initialized) {

      fallbackMapState.map = L.map(mapEl).setView(
        [defaultLatLng.lat, defaultLatLng.lng],
        6
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
      }).addTo(fallbackMapState.map);

      fallbackMapState.marker = L.marker(
        [defaultLatLng.lat, defaultLatLng.lng],
        { draggable: true }
      ).addTo(fallbackMapState.map);

      fallbackMapState.selected = defaultLatLng;

      fallbackMapState.marker.on("dragend", () => {
        const pos = fallbackMapState.marker.getLatLng();
        fallbackMapState.selected = {
          lat: pos.lat,
          lng: pos.lng
        };
      });

      fallbackMapState.map.on("click", (e) => {
        const { lat, lng } = e.latlng;

        fallbackMapState.marker.setLatLng([lat, lng]);
        fallbackMapState.selected = { lat, lng };
      });

      fallbackMapState.initialized = true;
    }

    // -----------------------------
    // RESET POSITION EACH OPEN
    // -----------------------------
    fallbackMapState.map.setView(
      [defaultLatLng.lat, defaultLatLng.lng],
      6
    );

    fallbackMapState.marker.setLatLng([
      defaultLatLng.lat,
      defaultLatLng.lng
    ]);

    fallbackMapState.selected = defaultLatLng;

    // -----------------------------
    // CONFIRM
    // -----------------------------
    document.getElementById("fallbackConfirmBtn").onclick = async () => {
      modal.classList.add("hidden");

      const final = fallbackMapState.selected;

      if (!final) {
        resolve(null);
        return;
      }

      await updateUserLocationCoords(final.lat, final.lng);

      resolve(final);
    };

    // -----------------------------
    // CANCEL
    // -----------------------------
    document.getElementById("fallbackCancelBtn").onclick = () => {
      modal.classList.add("hidden");
      resolve(null);
    };
  });
}

async function maybeHandleBrowserLocation() {
  await appReady; // ensure profile is ready

  const profile = appState.profile;

  // If native already handled it → skip
  if (window.__LOCATION_ALREADY_SET__) return;

  // If valid location already exists → skip
  const hasValidLocation =
    profile.location != null

  if (hasValidLocation) return;

  // Otherwise → fallback
  await handleIncomingLocation(null, null, { isNative: false });
}

//#endregion 