 import { supabase } from "./supabaseClient.mjs";
 
//#region Buttons

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

  const createBtn = document.getElementById("createCommunityBtnFloating");
  const modal = document.getElementById("createCommunityModal");
  const closeBtn = document.getElementById("closeCommunityModalBtn");

  createBtn.onclick = () => {
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

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
  setupCommunities();

  renderFriendsProfile(appState.profile);
  renderDateProfileView(appState.profile);

  renderDateProfile(appState.profile);

  setupDiscoverTab();
}

//#endregion

//#region Helpers

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
      { id: "left_intolerant9", text: "Left, not tolerant to opposing views" },
      { id: "left_open9", text: "Left, open to dialogue" },
      { id: "right_open9", text: "Right, open to dialogue" },
      { id: "right_intolerant9", text: "Right, not tolerant to opposing views" },
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
      Man: "Man",
      Woman: "Woman",
      Other: "Other"
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
      "Long term": "Long term",
      "Connection without commitment": "Connection without commitment",
      "Ethical non-monogamy": "Ethical non-monogamy",
      "Casual": "Casual"
    }
  },

  smoke: {
    question: "Do you smoke?",
    answers: {
      No: "No",
      Occasionally: "Occasionally",
      Yes: "Yes",
      "Trying to quit": "Trying to quit"
    }
  },

  drink: {
    question: "Do you drink alcohol?",
    answers: {
      No: "No",
      Occasionally: "Occasionally",
      Socially: "Socially",
      Regularly: "Regularly"
    }
  },

  children: {
    question: "Do you have or want children?",
    answers: {
      "Don't have": "Don't have",
      Want: "Want",
      "Don't want": "Don't want",
      "Not sure / depends": "Not sure / depends"
    }
  }
};

function getLabel(questionId, value) {
  const config = answerMap[questionId];

  if (!config) return value ?? "—";

  // arrays (multi-select)
  if (Array.isArray(value)) {
    return value.map(v => getLabel(questionId, v)).join(", ");
  }

  // answers map
  if (config.answers && config.answers[value] !== undefined) {
    return config.answers[value];
  }

  // default handler (numbers)
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
    const { data, error } = await supabase.rpc(rpcName, { 
      p_viewer_id: appState.user.id,
      result_limit: 18, 
    });

    if (error) throw error;

    if (type === "friends") {
      discoverState.friends = data || [];
      renderDiscover("friends");
    } else {
      discoverState.dates = data || [];
      renderDiscover("dates");
    }

    discoverState.lastFetched[type] = Date.now();

  } catch (err) {
    console.error("Discover fetch error:", err);
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
  attachCardEvents();
}

// -----------------------------
// REFRESH (optional button)
// -----------------------------
async function refreshDiscover() {
  await fetchDiscover(discoverState.activeTab);
}


function createDiscoverCard(user) {
  const score = Math.round(user.score || 0);

  return `
    <div class="discover-card clickable" data-user-id="${user.id}">
      
      <div class="card-image">
        <img 
          src="${user.profile_photo_url || "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg"}" 
          alt="${user.name}"
        />
      </div>

      <div class="card-content">
        <div class="card-header">
          <h3 class="name">${user.name}</h3>
          <span class="score">${score}%</span>
        </div>
      </div>

    </div>
  `;
}

function attachCardEvents() {
  document.querySelectorAll(".discover-card").forEach(card => {
    card.onclick = () => {
      const userId = card.dataset.userId;
      openUserProfile(userId);
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

async function openUserProfile(userId) {
  showLoadingSmall?.();

  try {
    const { data, error } = await supabase.rpc("get_user_profile", {
      p_viewer_id: appState.user.id,
      p_target_id: userId
    });

    if (error) throw error;

    renderProfilePopup(data);

  } catch (err) {
    console.error("Profile fetch error:", err);
  } finally {
    hideLoadingSmall?.();
  }
}


//#endregion

//#region Dates Functions

function renderDateProfile(profile) {
  const container = document.getElementById("dateList");
  if (!container) return;

  const profile = appState.profile;

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
  { id: "gender", label: "Gender", type: "single", options: ["Man", "Woman", "Other"] },
  { id: "age", label: "Age", type: "number" },
  { id: "height", label: "Height (cm)", type: "number" },
  {
    id: "looking_for",
    label: "What are you looking for?",
    type: "single",
    options: [
      "Long term",
      "Connection without commitment",
      "Ethical non-monogamy",
      "Casual"
    ]
  },
  { id: "smoke", label: "Do you smoke?", type: "single", options: ["No", "Occasionally", "Yes", "Trying to quit"] },
  { id: "drink", label: "Do you drink alcohol?", type: "single", options: ["No", "Occasionally", "Socially", "Regularly"] },
  {
    id: "children",
    label: "Do you have or want children?",
    type: "single",
    options: ["Don't have", "Want", "Don't want", "Not sure / depends"]
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
            <button type="button" class="chip" data-value="${opt}">
              ${opt}
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
          ${q.options.map(o => `<option value="${o}">${o}</option>`).join("")}
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
      .map(b => b.dataset.value);

    group.dataset.selected = JSON.stringify(selected);
  });
});
}

function collectSurveyData() {
  const answers = [];

  document.querySelectorAll("#surveyQuestions [data-id]").forEach(el => {
    const id = el.dataset.id;

    // CHIP GROUP (looking_for)
    if (el.classList.contains("chip-group")) {
  answers.push({
    questionId: id,
    answer: JSON.parse(el.dataset.selected || "[]")
  });
}

    // SELECT / INPUT
    else {
      answers.push({
        questionId: id,
        answer: el.value
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

    const gender = getSurveyValue(survey, "gender");
    const age = getSurveyValue(survey, "age");

    const interested_in = calculateInterestedIn(gender);
    const age_filter = calculateAgeFilter(age);

    const payload = {
      photos: uploadedPhotos,
      dating_survey: data.dating_survey,
      date_description: data.date_description.slice(0, 300),
      hobbies: data.hobbies.slice(0, 300),
      dates_mode_on: true,
      dates_survey_completed: true,


      interested_in,
      age_filter: {
            min,
            max
                  }
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

// ✅ 4. Force reload + ensure correct tab
setDiscoverTab("dates"); // this triggers loadDiscover internally

  } catch (err) {
    console.error(err);
    hideLoading();
    alert("Failed to save profile");
  }
}

function getSurveyValue(survey, id) {
  return survey.find(q => q.questionId === id)?.answer;
}

function calculateInterestedIn(gender) {
  if (gender === "Man") return "women";
  if (gender === "Woman") return "men";
  return "others";
}

function calculateAgeFilter(age) {
  const parsedAge = parseInt(age, 10);

  return {
    min: Math.max(18, parsedAge - 10),
    max: parsedAge + 10
  };
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

//#region Messagges Tab


    //#endregion

//#region Matches Tab


    //#endregion

//#region Communities Tab


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

  // 🥑 TOFU COUNTER (DATE VERSION)
  const tofuBox = document.getElementById("dateTofuCount");

  const tofuCount = profile.tofus || 0;

  tofuBox.textContent =
    tofuCount === 0
      ? "You have no tofus left today, upgrade to Premium for unlimited tofu 🥢"
      : `You have ${tofuCount} tofu${tofuCount > 1 ? "s" : ""} to send today 🥢`;

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
  if (profile.is_premium) {
    addIncognitoToggle(profile);
  }

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
  let container = document.getElementById("incognitoBox");

  if (!container) {
    container = document.createElement("div");
    container.id = "incognitoBox";
    document.getElementById("dateProfile").appendChild(container);
  }

  container.innerHTML = `
    <div class="incognito-container">
      <span>🕶️ Incognito mode</span>

      <label class="switch">
        <input type="checkbox" id="incognitoToggle">
        <span class="slider"></span>
      </label>
    </div>
  `;

  const toggle = document.getElementById("incognitoToggle");
  toggle.checked = !!profile.date_incognito_mode;

  toggle.onchange = async () => {
    const newValue = toggle.checked;

    try {
      const { error } = await supabase
        .from("0con_profilesdata")
        .update({ date_incognito_mode: newValue })
        .eq("id", profile.id);

      if (error) throw error;
    } catch (err) {
      console.error("Incognito update failed:", err);
      toggle.checked = !newValue;
    }
  };
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

