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

const profileContent = document.getElementById("profileContent");
const settingsView = document.getElementById("settingsView");
const topRight = document.querySelector(".top-right");

settingsBtn.onclick = () => {
  profileContent.style.display = "none";
  settingsView.classList.remove("hidden");

  // toggle buttons
  settingsBtn.style.display = "none";
  backBtn.classList.remove("hidden");
};

backBtn.onclick = () => {
  settingsView.classList.add("hidden");
  profileContent.style.display = "block";

  // toggle buttons back
  backBtn.classList.add("hidden");
  settingsBtn.style.display = "block";
};
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
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  element.classList.add('active');

  // 👇 add this
  if (tabId === 'matches') {
    createInvitationCards();
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
    friendsModal.style.display = "block";
  };

  document.getElementById("dateFilterBtn").onclick = () => {
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

function SetUserLanguage(savedLang) {
 
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

    initUI();

  } catch (err) {
    console.error("Init failed:", err);
    appState.error = err.message;
  }
}

// 🎯 UI INIT (safe DOM setup after data is ready)
function initUI() {


  setupButtons();
  setupTabs();
  setupModals();
  setupProfile();
 // setupCommunities();
  subscribeToMessageUpdates();
  renderCommunityTopbar();
  PremiumBoxHiding();
  startHeartbeat();
  loadNotificationSettings();

  renderFriendsProfile(appState.profile);
  renderDateProfileView(appState.profile);

  renderDateProfile(appState.profile);

  createMessageCards();

  setupDiscoverTab();

  initToggleListeners();

  loadSavedLanguage();
  initLanguageSetting();
  
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

  const answerMap = {
    gender: {
      question: "Gender",
      answers: {
        "1": "Man",
        "0": "Woman",
        "2": "Other"
      }
    },

    age: {
      question: "Age",
      default: (v) => `${v}`
    },

    height: {
      question: "Height (cm)",
      default: (v) => `${v} cm`
    },

    looking_for: {
      question: "What are you looking for?",
      answers: {
        "long_term": "Long term",
        "connection_no_commitment": "Connection without commitment",
        "ethical_non_monogamy": "Ethical non-monogamy",
        "casual": "Casual"
      }
    },

    smoke: {
      question: "Do you smoke?",
      answers: {
        "no": "No",
        "occasionally": "Occasionally",
        "yes": "Yes",
        "trying_to_quit": "Trying to quit"
      }
    },

    drink: {
      question: "Do you drink alcohol?",
      answers: {
        "no": "No",
        "occasionally": "Occasionally",
        "socially": "Socially",
        "regularly": "Regularly"
      }
    },

    children: {
      question: "Do you have or want children?",
      answers: {
        "dont_have": "Don't have",
        "want": "Want",
        "dont_want": "Don't want",
        "not_sure": "Not sure / depends"
      }
    }
  };

  function getLabel(questionId, value) {
    const config = answerMap[questionId];

    if (!config) return value ?? "—";

    if (Array.isArray(value)) {
      return value.map(v => getLabel(questionId, v)).join(", ");
    }

    if (config.answers && config.answers[value] !== undefined) {
      return config.answers[value];
    }

    if (config.default) {
      return config.default(value);
    }

    return value ?? "—";
  }

  function getQuestionLabel(questionId) {
    return answerMap[questionId]?.question || questionId;
  }

  return {
    getLabel,
    getQuestionLabel
  };
})();

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
    <p>💘 Create your dating profile to start meeting people</p>
    <button class="go-survey-btn">
      Create profile
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
      <p>👀 Turn on your visibility to start discovering people</p>
      <button>Turn on visibility</button>
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
      <p>⚙️ ${type === "friends" ? "Friends" : "Dating"} mode is turned off</p>
      <button onclick="openTab('settings')">Go to settings</button>
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
      ? "get_friends_users"
      : "get_dates_users";

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
        <p>😕 No users found</p>
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
  };
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
          ${user.age ? `<div class="card-age">${user.age} years old</div>` : ""}
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

async function openUserProfile(userId, type) {
  showLoadingSmall?.();

  try { 
    const { data, error } = await supabase.rpc("get_user_profile", { 
      p_viewer_id: appState.user.id,
      p_target_id: userId,
      p_mode: type 
    });

    if (error) throw error;

    renderProfilePopup(data);

  } catch (err) {
    console.error("Profile fetch error:", err);
  } finally {
    hideLoadingSmall?.();
  }
}

function renderProfilePopup(user) {
  const popup = document.getElementById("profile-popup");
  const container = document.getElementById("profile-data");
  const backdrop = document.getElementById("profile-backdrop");

  if (user.type === "friends") {
    container.innerHTML = renderFriendsProfileCard(user);
  } else {
    container.innerHTML = renderDateProfileCard(user);
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
      <h4>${label}: ${q.text}</h4>
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
              ${opt.text}
            </li>
          `;
        }).join("")}
      </ul>
    </div>
  `;
}

function renderFriendsProfileCard(user) { 
  return `
    <img src="${user.photo}" width="100%" />

    <h2>${user.name}</h2>
    <p>${user.description || ""}</p>

    <div class="section">
      <h4>🤝 Things in common</h4>
      ${
        user.common === "no_common" ||
        !user.common ||
        user.common.length === 0
          ? "<p>No matching answers</p>"
          : user.common
              .map(c =>
                renderQuestionBlock(
                  c.questionId,
                  c.viewerAnswer,
                  c.targetAnswer,
                  "Common"
                )
              )
              .join("")
      }
    </div>

    <div class="section">
      <h4>⚡ Difference</h4>
      ${
        !user.difference || user.difference === "no_strong_difference"
          ? "<p>No differences</p>"
          : Array.isArray(user.difference)
              ? user.difference
                  .map(d =>
                    renderQuestionBlock(
                      d.questionId,
                      d.viewerAnswer,
                      d.targetAnswer,
                      "Difference"
                    )
                  )
                  .join("")
              : user.difference.questionId
                  ? renderQuestionBlock(
                      user.difference.questionId,
                      user.difference.viewerAnswer,
                      user.difference.targetAnswer,
                      "Difference"
                    )
                  : "<p>No differences</p>"
      }
    </div>

    <div class="section">
      <h4>🎯 Hobbies</h4>
      <p>${user.hobbies || ""}</p>
    </div>

    <div class="actions">

      <button data-action="hide" data-id="${user.id}">
        ❌ Hide
      </button>

      <button data-action="avocado" data-id="${user.id}">
        🥑 Send avocado
      </button>

    </div>
  `;
}

function renderDateProfileCard(user) {
  return `
    <div class="photo-gallery">
      ${(user.photos || [])
        .map(p => `<img src="${p.url}" style="width:100%; margin-bottom:6px; border-radius:8px;" />`)
        .join("")}
    </div>

    <h2>${user.name}</h2>
    <p>${user.date_description || ""}</p>

    <div class="section">
      <h4>🎯 Hobbies</h4>
      <p>${user.hobbies || ""}</p>
    </div>


    <div class="section">
      <h4>🤝 Things in common</h4>
      ${
        user.common === "no_common" ||
        !user.common ||
        user.common.length === 0
          ? "<p>No matching answers</p>"
          : user.common
              .map(c =>
                renderQuestionBlock(
                  c.questionId,
                  c.viewerAnswer,
                  c.targetAnswer,
                  "Common"
                )
              )
              .join("")
      }
    </div>

    <div class="section">
      <h4>⚡ Difference</h4>
      ${
        !user.difference || user.difference === "no_strong_difference"
          ? "<p>No differences</p>"
          : Array.isArray(user.difference)
              ? user.difference
                  .map(d =>
                    renderQuestionBlock(
                      d.questionId,
                      d.viewerAnswer,
                      d.targetAnswer,
                      "Difference"
                    )
                  )
                  .join("")
              : user.difference.questionId
                  ? renderQuestionBlock(
                      user.difference.questionId,
                      user.difference.viewerAnswer,
                      user.difference.targetAnswer,
                      "Difference"
                    )
                  : "<p>No differences</p>"
      }
    </div>

    <div class="section">
  <h4>💭 Dating profile details</h4>

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
      : "<p>No survey data</p>"
  }
</div>

    <div class="actions">

      <button data-action="hide" data-id="${user.id}">
        ❌ Hide
      </button>

      <button data-action="tofu" data-id="${user.id}">
            🍲 Share your Tofu
      </button>

    </div>
  `;
}

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
    alert("Not enough avocados!");
    return;
  }

  await performAction(userId, 1);
}

async function sendTofu(userId) {
  const profile = appState.profile;

  if ((profile?.tofus || 0) <= 0) {
    alert("Not enough tofu!");
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

      // ✅ ONLY runs if insert succeeded
      await deductFood(appState.user.id, invitationType);
    }

    const card = getUserCard(userId);
    if (card) card.classList.add("seen");

  } catch (err) {
    console.error("Action failed:", err);
  }

  closeProfilePopup();
}

async function deductFood(userId, type) {

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
  if (!seen.includes(userId)) {
    seen.push(userId);
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

//#endregion

//#region Dates Functions

function renderDateProfile(profile) {
  const container = document.getElementById("dateList");
  if (!container) return;

  // ❌ If survey NOT completed → show empty state
  if (!profile?.dates_survey_completed) {
    container.innerHTML = `
      <div class="empty-state">
        <p>💘 Create your dating profile to start meeting people</p>
        <button class="go-survey-btn">
          Create profile
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
  document.getElementById("photoInput").click();
};

document.getElementById("photoInput").addEventListener("change", async (e) => {
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

    div.innerHTML = `
      <img src="${p.url}" />
      ${index === 0 ? `<span class="badge">Profile</span>` : ""}
      <button class="remove">×</button>
    `;

    div.querySelector(".remove").onclick = () => {
      surveyState.photos.splice(index, 1);
      syncPhotoFlags();
      renderPhotos();
    };

    grid.appendChild(div);
  });
}

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

function renderDateQuestions() {
  const container = document.getElementById("surveyQuestions");
  container.innerHTML = "";

  dateQuestions.forEach(q => {
    const div = document.createElement("div");
    div.className = "question";

    // NUMBER INPUT
    if (q.type === "number") {
      div.innerHTML = `
        <label>${q.label}</label>
        <input type="number" data-id="${q.id}">
      `;
    }

    // SPECIAL CASE: LOOKING FOR (BETTER UI)
    else if (q.id === "looking_for") {
      div.innerHTML = `
        <label>${q.label}</label>
        <div class="chip-group" data-id="${q.id}">
          ${q.options.map(opt => `
  <button type="button" class="chip" data-value="${opt.id}">
    ${opt.label}
  </button>
`).join("")}
        </div>
      `;
    }

    // DEFAULT SINGLE SELECT
    else {
      div.innerHTML = `
        <label>${q.label}</label>
        <select data-id="${q.id}">
  ${q.options.map(o => `<option value="${o.id}">${o.label}</option>`).join("")}
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

    // collect ALL active chips
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
  if (gender === 1) return "0"; // man -> interested in women
  if (gender === 0) return "1"; // woman -> interested in men
  return "2"; // other
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
    const fileName = `${userId}/${Date.now()}_${Math.random()}.jpg`;

    const { error } = await supabase.storage
      .from("DATE_PHOTOS")
      .upload(fileName, photo.file, {
        contentType: "image/jpeg"
      });

    if (error) throw error;

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

    <strong>Create your own community</strong><br><br>

    Bring together people near you who share your values and interests.<br><br>

    Once created, users who match your preferences in your local area will be automatically invited to your community. New users will also be included after registration.<br><br>

    <span class="info-cta" id="upgradeToPremium">
      Upgrade to Premium →
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
      .single();

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
            ${memberCount ?? 0} members
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

    topbar.innerHTML = `<span class="topbar-title">Create community</span>`;
    topbar.onclick = () => openCommunitySurvey();
    return;
  }

  topbar.classList.add("locked");

  topbar.innerHTML = `
    <span class="topbar-title premium-lock">🔒 Create community</span>
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
    title.innerText = q.text;
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
  answerBtn.innerText = opt.text;
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

const thresholdSlider = document.getElementById("CommunityThreshold");
const thresholdLabel = document.getElementById("thresholdValue");

thresholdSlider.oninput = () => {
  thresholdLabel.innerText = thresholdSlider.value;
};

document.getElementById("CommunitysaveSurveyBtn").onclick = async () => {
  // BASIC VALIDATION

  const name = document.getElementById("CommunityName").value.trim();

if (!name) {
  alert("Please enter a community name");
  return;
}

if (name.length > 30) {
  alert("Community name must be max 30 characters");
  return;
}

  if (!communityPhoto) {
    alert("Please add a community photo");
    return;
  }

  const description = document.getElementById("CommunityDescription").value.trim();

  if (!description) {
    alert("Please add a description");
    return;
  }

const answeredCount = Object.keys(communityState.answers).length;

if (answeredCount !== AppData.questions.length) {
  alert("Please answer all questions");
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

  threshold, // ✅

  created_at: new Date().toISOString()
};

    await saveCommunityToDB(communityData);

    alert("Community created!");

  } catch (err) {
    console.error(err);
    alert("Error creating community");
  }
};

async function uploadCommunityPhoto(file) {
  const userId = appState.user.id;

  if (!file) throw new Error("No file provided");

  const fileExt = file.name.split(".").pop();
  const fileName = `${userId}_${Date.now()}.${fileExt}`;
  const filePath = `${userId}/${Date.now()}.${fileExt}`;

  // 1️⃣ Upload file
  const { error: uploadError } = await supabase.storage
    .from("COMMUNITY_PHOTOS")
    .upload(filePath, file);

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

last_message: "Community chat is created",
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

  body.innerHTML = "<p>Loading...</p>";
  modal.style.display = "block";

  try {
    // 1. Get community
    const { data: community, error } = await supabase
      .from("0con_communities")
      .select("id, community_name, community_description, community_photo")
      .eq("id", communityId)
      .single();

    if (error) throw error;

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
          ${community.community_description || "No description yet."}
        </p>

        <div class="community-meta">
          👥 ${members.length} members
        </div>
      </div>
    </div>

    <!-- MEMBERS -->
    <div class="community-section">
      <h3 class="section-title">Members</h3>

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

  </div>
`;

  } catch (err) {
    console.error("Community modal error:", err);
    body.innerHTML = "<p>Error loading community</p>";
  }

  // Close handler
  document.getElementById("closeCommunityModalBtn").onclick = closeCommunityPage;
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
              last_sender_id: msg.sender_id
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
              last_sender_name: msg.sender_name
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
        last_message, last_sender_id, type
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
  isCommunity: true
}));

    // =========================
    // COMBINE
    // =========================
    const cards = [...matchCards, ...communityCards];

    renderMessageCards(cards);

  } catch (err) {
    console.error('createMessageCards failed:', err);
  }
}

function renderMessageCards(cards) {
  const container = document.getElementById('messages-list');
  container.innerHTML = '';

  if (!cards || cards.length === 0) {
    container.innerHTML = `<p>No messages yet</p>`;
    return;
  }

  cards.forEach(card => {
    const el = document.createElement('div');

    // 🎨 TYPE CLASS
    let typeClass = '';
    if (card.type === 1) typeClass = 'friend';
    if (card.type === 2) typeClass = 'date';
    if (card.type === 3) typeClass = 'community';

    el.className = `invitation-card ${typeClass}`;

    // ✂️ SHORT MESSAGE + SENDER LABEL
let preview = card.last_message
  ? card.last_message.length > 30
    ? card.last_message.slice(0, 30) + '...'
    : card.last_message
  : 'No messages yet';

// 👇 NEW: who sent last message
let senderLabel = '';

if (card.last_sender_id) {
  if (card.last_sender_id === appState.user.id) {
    senderLabel = 'You:';
  } else {
    senderLabel = card.last_sender_name || '';
  }
}

// combine
const finalPreview = card.last_message
  ? `${senderLabel} ${preview}`
  : 'No messages yet';

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
`;

    // 👉 CLICK → open chat
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
}

function openChatView() {
  document.getElementById('messages-tab').style.display = 'none';
  document.getElementById('chat-container').style.display = 'block';

  // hide bottom bar (full screen chat)
  document.querySelector('.bottombar').style.display = 'none';
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

  <img src="${card.photo || '/default-avatar.png'}" class="chat-avatar" />
  
  <div class="chat-title">${card.name || 'Unknown'}</div>
`;

container.appendChild(header);

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
  // INPUT BAR
  // =========================
  const inputBar = document.createElement('div');
  inputBar.className = 'chat-input-bar';

  inputBar.innerHTML = `
    <input type="text" id="chat-input" placeholder="Type a message..." />
    <button id="send-btn">Send</button>
  `;

  container.appendChild(inputBar);


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
const input = inputBar.querySelector('#chat-input');
const button = inputBar.querySelector('#send-btn');

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
        last_sender_id: viewerId
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
        last_sender_name: appState.profile.name
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
    .select('community_id')
    .eq('user_id', viewerId);

  if (pError) {
    console.error('participants error:', pError);
    return [];
  }

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
      last_sender_name
    `)
    .in('community_id', communityIds);

  if (cError) {
    console.error('community chats error:', cError);
    return [];
  }

  return chats || [];
}


//#endregion

//#endregion

//#region Income Tab

async function createInvitationCards() {
  try {
    const viewerId = appState.user.id;

    const { data: invites, error } = await supabase
      .from('0con_incomes')
      .select('id, sender_id, receiver_id, invitation_type')
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
            .single();

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

  } catch (err) {
    console.error('createInvitationCards failed:', err);
  }
}

function renderInvitationCards(cards) {  
  const container = document.getElementById('invitation-list');
  container.innerHTML = '';

  if (!cards || cards.length === 0) {
    container.innerHTML = `<p class="invitation-empty-state">No invitations yet</p>`;
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
      ? `<span class="invitation-meta">Age: ${card.c_age}</span>`
      : '';

const isCommunity = card.invitation_type === 3;

el.innerHTML = isCommunity
  ? `
    <div class="community-card-preview">
      <div class="community-placeholder">
        🥑 Community
      </div>
      <div class="invitation-content">
        <div class="invitation-top">
          <span class="invitation-name">Community</span>
          <span class="invitation-score">${Math.round(card.score ?? 0)}%</span>
        </div>
      </div>
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
  return `
    <img src="${user.photo}" width="100%" />

    <h2>${user.name}</h2>
    <p>${user.description || ""}</p>

    <div class="section">
      <h4>🤝 Things in common</h4>
      ${
        user.common === "no_common" ||
        !user.common ||
        user.common.length === 0
          ? "<p>No matching answers</p>"
          : user.common
              .map(c =>
                renderQuestionBlock(
                  c.questionId,
                  c.viewerAnswer,
                  c.targetAnswer,
                  "Common"
                )
              )
              .join("")
      }
    </div>

    <div class="section">
      <h4>⚡ Difference</h4>
      ${
        !user.difference || user.difference === "no_strong_difference"
          ? "<p>No differences</p>"
          : Array.isArray(user.difference)
              ? user.difference
                  .map(d =>
                    renderQuestionBlock(
                      d.questionId,
                      d.viewerAnswer,
                      d.targetAnswer,
                      "Difference"
                    )
                  )
                  .join("")
              : user.difference.questionId
                  ? renderQuestionBlock(
                      user.difference.questionId,
                      user.difference.viewerAnswer,
                      user.difference.targetAnswer,
                      "Difference"
                    )
                  : "<p>No differences</p>"
      }
    </div>

    <div class="section">
      <h4>🎯 Hobbies</h4>
      <p>${user.hobbies || ""}</p>
    </div>

    <div class="actions">

      <button data-action="Reject" data-id="${user.id}" data-name="${user.name}" data-photo="${user.photo}">
        ❌ I don't want this avocado
      </button>

      <button data-action="AcceptAvocado" data-id="${user.id}" data-name="${user.name}" data-photo="${user.photo}">
        🥑 Accept avocado
      </button>

    </div>
  `;
}

function renderDateProfileCardInvitation(user) { 

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
      <h4>🎯 Hobbies</h4>
      <p>${user.hobbies || ""}</p>
    </div>


    <div class="section">
      <h4>🤝 Things in common</h4>
      ${
        user.common === "no_common" ||
        !user.common ||
        user.common.length === 0
          ? "<p>No matching answers</p>"
          : user.common
              .map(c =>
                renderQuestionBlock(
                  c.questionId,
                  c.viewerAnswer,
                  c.targetAnswer,
                  "Common"
                )
              )
              .join("")
      }
    </div>

    <div class="section">
      <h4>⚡ Difference</h4>
      ${
        !user.difference || user.difference === "no_strong_difference"
          ? "<p>No differences</p>"
          : Array.isArray(user.difference)
              ? user.difference
                  .map(d =>
                    renderQuestionBlock(
                      d.questionId,
                      d.viewerAnswer,
                      d.targetAnswer,
                      "Difference"
                    )
                  )
                  .join("")
              : user.difference.questionId
                  ? renderQuestionBlock(
                      user.difference.questionId,
                      user.difference.viewerAnswer,
                      user.difference.targetAnswer,
                      "Difference"
                    )
                  : "<p>No differences</p>"
      }
    </div>

    <div class="section">
  <h4>💭 Dating profile details</h4>

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
      : "<p>No survey data</p>"
  }
</div>

    <div class="actions">
      <button data-action="Reject" data-id="${user.id}" data-name="${user.name}" data-photo="${profilePhoto}">
        ❌ I don't want that tofu
      </button>

      <button data-action="AcceptTofu" data-id="${user.id}" data-name="${user.name}" data-photo="${profilePhoto}">
        🍲 Accept Tofu
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

    // 1. Get community
    const { data: community, error } = await supabase
      .from("0con_communities")
      .select("id, community_name, community_description, community_photo")
      .eq("id", communityId)
      .single();

    if (error) throw error;

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
          ${community.community_description || "No description yet."}
        </p>

        <div class="community-meta">
          👥 ${members.length} members
        </div>
      </div>
    </div>

    <!-- MEMBERS -->
    <div class="community-section">
      <h3 class="section-title">Members</h3>

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

        <!-- ACTIONS -->
    <div class="community-actions">
      <button id="communityDeclineBtn" class="btn-decline">
        ❌ Decline
      </button>

      <button id="communityAcceptBtn" class="btn-accept">
        👥 Accept
      </button>
    </div>

  </div>
`;

  } catch (err) {
    console.error("Community modal error:", err);
    body.innerHTML = "<p>Error loading community</p>";
  }

  // Close handler
  document.getElementById("closeCommunityModalBtn").onclick = closeCommunityPage;

  // Decline invitation
  document.getElementById("communityDeclineBtn").onclick = async () => {
  await DeclineCommunity(community.id, community.community_name, community.community_photo, incomeId);
};

  // Accept invitation
document.getElementById("communityAcceptBtn").onclick = async () => {
  await AcceptCommunity(community.id, community.community_name, community.community_photo, incomeId);
};
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

async function DeclineCommunity(communityId, communityName, communityPhoto) {
  await performCommunityAction(communityId, communityName, communityPhoto, 0, incomeId);
}

async function AcceptCommunity(communityId, communityName, communityPhoto) {
  await performCommunityAction(communityId, communityName, communityPhoto, 1, incomeId);
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
            last_message: "Start the conversation! 🌱"
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

  const avatar = document.getElementById("profileAvatar");
  if (avatar) avatar.src = profile.profile_photo_url || "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg";

  // PREMIUM / BASIC
  const badge = document.getElementById("profileBadge");
  badge.textContent = profile.is_premium ? "⭐ Premium Profile" : "Basic Profile";

  // AVOCADOS
 const avo = document.getElementById("avocadoCount"); 

const count = profile.avocados || 0;

avo.textContent =
  count === 0
    ? "You have no avocados left today, get unlimited avocados with premium!"
    : `You have ${count} avocado${count > 1 ? "s" : ""} to send today 🥑`;

  // FRIEND MODE
  const friendMode = document.getElementById("friendModeStatus");
  const friendToggle = document.getElementById("friendModeToggle");

// Set initial state
friendMode.textContent = profile.friends_mode_on ? "Visible" : "Hidden";
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
    friendMode.textContent = newValue ? "Visible" : "Hidden";

  } catch (err) {
    console.error("Error updating friend mode:", err);

    // rollback UI if failed
    friendToggle.checked = !newValue;
  }
});

  // LANGUAGES
  const langBox = document.getElementById("languagesList");
  langBox.textContent = (profile.languages || [])
  .map(lang => {
    const id = typeof lang === "string" ? lang : lang.id;
    return AppData.languageMap[id]?.label || id;
  })
  .join(", ");

  // CLOSURE BADGE (only if exists)
  const closure = document.getElementById("closureBadge");
  if (profile.closure_badge === true) {
    closure.style.display = "block";
    closure.textContent = "⭐ Closes connections respectfully";
  } else {
    closure.style.display = "none";
  }

  // SURVEY SYSTEM
  renderFriendsSection(profile);
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
          ${opt.text}
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

        <b>${q.text}</b>

        <!-- WEIGHT BAR -->
        <div class="weight-wrapper">
          <span class="weight-label">Importance: ${weight}/10</span>

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
    <h3>Friends Preferences</h3>

    <button id="toggleFriendsBox" class="toggle-btn">
      ${isOpen ? "Hide" : "Show"} preferences
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
        ? "Edit"
        : `You can edit in ${days} day(s)`
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
    btn.textContent = open ? "Hide preferences" : "Show preferences";
  });

  document.getElementById("editSurveyBtn").onclick = () => {
  openScreen("survey");
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
      <h2>Edit Preferences</h2>

      <div id="editQuestions"></div>

      <button id="saveEditBtn">Save</button>
      <button id="closeEditBtn">Close</button>
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
    title.innerText = q.text;
    block.appendChild(title);

    // ✅ WEIGHT SLIDER (correct place)
const weightRaw = appState.answerWeights[q.id] || 0.5;
const weight = Math.round(weightRaw * 10);

const isLocked = !appState.isPremium;

const weightWrapper = document.createElement("div");
weightWrapper.className = "weight-editor";

weightWrapper.innerHTML = `
  <label>
    Importance: 
    <span id="weightVal-${q.id}">${weight}</span>/10
    ${isLocked ? `<span class="premium-lock">🔒 Premium</span>` : ""}
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
      answerBtn.innerText = opt.text;
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
  badge.textContent = profile.is_premium ? "⭐ Premium Profile" : "Basic Profile";

  // 🍲 TOFU COUNTER (DATE VERSION)
  const tofuBox = document.getElementById("dateTofuCount");

  const tofuCount = profile.tofus || 0;

  tofuBox.textContent =
    tofuCount === 0
      ? "You have no tofus left today, upgrade to Premium for unlimited tofu 🍲"
      : `You have ${tofuCount} tofu${tofuCount > 1 ? "s" : ""} to send today 🍲`;

// =========================
// DATE MODE TOGGLE
// =========================
const modeText = document.getElementById("dateModeStatus");
const modeToggle = document.getElementById("dateModeToggle");

modeText.textContent = profile.dates_mode_on ? "Visible" : "Hidden";
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
      <span>🕶️ Incognito mode</span>

      <label class="switch">
        <input type="checkbox" id="friendsIncognitoToggle" ${!isPremium ? "disabled" : ""}>
        <span class="slider"></span>
      </label>

      ${!isPremium ? `<div class="lock-overlay">🔒 Premium</div>` : ""}
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
      <span>🕶️ Incognito mode</span>

      <label class="switch">
        <input type="checkbox" id="datesIncognitoToggle" ${!isPremium ? "disabled" : ""}>
        <span class="slider"></span>
      </label>

      ${!isPremium ? `<div class="lock-overlay">🔒 Premium</div>` : ""}
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
    container.innerHTML = "<p>No answers yet</p>";
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
      ${html || "<p>No answers yet</p>"}
    </div>
  `;
}

//#endregion

//#region Settings

function PremiumBoxHiding() {
  if (isPremiumUser()) {
    document.querySelectorAll(".premium-box").forEach(el => {
      el.style.display = "none";
    });
  }
}

document.getElementById("redirectToPremium").addEventListener("click", () => {
  openPremiumScreen();
});

function initLanguageSetting() {
  document.getElementById("setLanguageBtn").addEventListener("click", setLanguage);
}

function loadSavedLanguage() {
  const savedLang = localStorage.getItem("app_language");

  if (savedLang) {
    SetUserLanguage(savedLang);
  }
}

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
  initUI();
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
  // hide all main tabs
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  // hide survey
  const survey = document.getElementById("survey");
  if (survey) survey.classList.add("hidden");

  // show premium
  const premium = document.getElementById("premium");
  if (premium) premium.classList.remove("hidden");

  // hide bottom bar if it exists
  const bottomBar = document.querySelector(".bottombar");
  bottomBar?.classList.add("hidden");

  // nav state (optional but consistent with your UI)
  document.querySelectorAll(".nav-item").forEach(i => {
    i.classList.remove("active");
  });

  const premiumNav = document.querySelector('[data-tab="premium"]');
  premiumNav?.classList.add("active");
}


function closePremiumScreen() {
  const premium = document.getElementById("premium");
  if (premium) premium.classList.add("hidden");

  document.getElementById("discover")?.classList.add("active");

  const bottomBar = document.querySelector(".bottombar");
  bottomBar?.classList.remove("hidden");

  document.querySelectorAll(".nav-item").forEach(i => {
    i.classList.remove("active");
  });

  const discoverNav = document.querySelector('[data-tab="discover"]');
  discoverNav?.classList.add("active");
}
    
document.getElementById("supportLink").href =
  "https://instagram.com/";

document.getElementById("exitPremiumBtn").addEventListener("click", () => {
  closePremiumScreen();
});

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

