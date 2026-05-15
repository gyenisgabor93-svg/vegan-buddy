 import { supabase } from "./supabaseClient.mjs";

// -------------------------
// Multilanguage setup
// -------------------------

// ===== Multilanguage pool =====
const langTexts = {
  en: {
    welcomeTitle: "Tell us a little about yourself!",
    profileStepLabel: "Create your profile",
    profileNameLabel: "Username:",
    profileNamePlaceholder: "Your name",
    dietLabel: "Which best describes your diet?",
    dietVegan: "Vegan",
    dietTransition: "In Transition",
    dietVegetarian: "Vegetarian",
    dietPescatarian: "Pescatarian",
    dietFlexitarian: "Flexitarian",
    dietOmnivore: "Omnivore",
    profilePhotoLabel: "Upload Profile Photo",
    profilePhotoInfo: "If you skip this, we'll use a default picture.",

    goalsLabel: "What are your goals?",
    goalsInfo: "Knowing your goals helps us suggest tips and challenges that fit your lifestyle.",
    goalAnimals: "Protecting animals & animal welfare",
    goalEnvironment: "Caring for the environment & fighting climate change",
    goalHealthy: "Healthy living & wellness",
    goalHealth: "Solving health issues",
    // goalAthlete: "Boosting my performance as an athlete",

    healthConcernsLabel: "Are you experiencing any of these health concerns?",
    healthConcernsInfo: "This helps us offer tips and recipes that support your health in a gentle, personalized way.",
    healthHeart: "Heart disease",
    healthCholesterol: "High cholesterol",
    healthBP: "High blood pressure",
    healthDiabetes: "Type 2 diabetes",
    healthObesity: "Obesity",
    healthDigestive: "Digestive issues",
    healthInflammation: "Inflammation or swelling",
    healthFatigue: "Fatigue",
    healthCancer: "Concerned about cancer risk",

    buddyLabel: "Create your buddy!",
    petNameLabel: "Name:",
    petNamePlaceholder: "Pet's name",
    petPhotoLabel: "Upload a photo",
    petPhotoInfo: "If you skip this, we will use a default buddy",
    buddyIntroTitle: "Meet your Buddy!",

    nextBtn: "Next",
    startButton: "Let's Start!",

    // Script messages
    fillNameDietAlert: "Please fill in your name and diet preference.",
    usernameTooLong: "Your username is too long. Maximum 15 characters allowed.",
    petnameTooLong: "Your pet's name is too long. Maximum 15 characters allowed.",
    selectGoalAlert: "Please select at least one goal before continuing.",
    notLoggedIn: "Please log in first!",
    answerBeforeContinue: "Please answer before continuing.",
    
  buddySpeech: (name, petName) => 
    `Hi ${name}! 🐾\nI’m ${petName}, your buddy.\n\nI’ll be by your side on this journey — helping you build healthy habits, protect animals 🌱, and make a positive impact on the planet 🌍.\nEvery small step you take matters. Let’s grow together 💚`

  },

  es: {
    welcomeTitle: "¡Cuéntanos un poco sobre ti!",
    profileStepLabel: "Crea tu perfil",
    profileNameLabel: "Nombre de usuario:",
    profileNamePlaceholder: "Tu nombre",
    dietLabel: "¿Cuál describe mejor tu dieta?",
    dietVegan: "Vegano",
    dietTransition: "En transición",
    dietVegetarian: "Vegetariano",
    dietPescatarian: "Pescetariano",
    dietFlexitarian: "Flexitariano",
    dietOmnivore: "Omnívoro",
    profilePhotoLabel: "Subir foto de perfil",
    profilePhotoInfo: "Si omites esto, usaremos una imagen por defecto.",

    goalsLabel: "¿Cuáles son tus objetivos?",
    goalsInfo: "Conocer tus objetivos nos ayuda a sugerir consejos y desafíos que se adapten a tu estilo de vida.",
    goalAnimals: "Proteger a los animales y su bienestar",
    goalEnvironment: "Cuidar el medio ambiente y combatir el cambio climático",
    goalHealthy: "Vida saludable y bienestar",
    goalHealth: "Resolver problemas de salud",
    // goalAthlete: "Mejorar mi rendimiento como atleta",

    healthConcernsLabel: "¿Tienes alguna de estas preocupaciones de salud?",
    healthConcernsInfo: "Esto nos ayuda a ofrecer consejos y recetas que apoyen tu salud de manera personalizada.",
    healthHeart: "Enfermedad cardíaca",
    healthCholesterol: "Colesterol alto",
    healthBP: "Presión arterial alta",
    healthDiabetes: "Diabetes tipo 2",
    healthObesity: "Obesidad",
    healthDigestive: "Problemas digestivos",
    healthInflammation: "Inflamación o hinchazón",
    healthFatigue: "Fatiga",
    healthCancer: "Preocupación por el riesgo de cáncer",

    buddyLabel: "¡Crea tu compañero!",
    petNameLabel: "Nombre:",
    petNamePlaceholder: "Nombre de tu compañero",
    petPhotoLabel: "Subir una foto",
    petPhotoInfo: "Si omites esto, usaremos un compañero por defecto",
    buddyIntroTitle: "¡Conoce a tu Compañero!",

    nextBtn: "Siguiente",
    startButton: "¡Empezar!",

    // Script messages
    fillNameDietAlert: "Por favor, rellena tu nombre y preferencia de dieta.",
    usernameTooLong: "Tu nombre de usuario es demasiado largo. Máximo 15 caracteres.",
    petnameTooLong: "El nombre de tu mascota es demasiado largo. Máximo 15 caracteres.",
    selectGoalAlert: "Por favor selecciona al menos un objetivo antes de continuar.",
    notLoggedIn: "¡Por favor inicia sesión primero!",
    answerBeforeContinue: "Por favor, responde antes de continuar.",
    
  buddySpeech: (name, petName) =>
    `¡Hola ${name}! 🐾\nSoy ${petName}, tu compañero.\n\nEstaré a tu lado en este camino — ayudándote a crear hábitos saludables, proteger a los animales 🌱 y hacer un impacto positivo en el planeta 🌍.\nCada pequeño paso que tomes importa. ¡Crezcamos juntos 💚!`

  },

  hu: {
    welcomeTitle: "Mesélj egy kicsit magadról!",
    profileStepLabel: "Hozd létre a profilodat",
    profileNameLabel: "Felhasználónév:",
    profileNamePlaceholder: "A neved",
    dietLabel: "Melyik írja le legjobban az étrended?",
    dietVegan: "Vegán",
    dietTransition: "Átmenetben",
    dietVegetarian: "Vegetáriánus",
    dietPescatarian: "Pescetáriánus",
    dietFlexitarian: "Flexitáriánus",
    dietOmnivore: "Mindenevő",
    profilePhotoLabel: "Profilkép feltöltése",
    profilePhotoInfo: "Ha kihagyod, alapértelmezett képet használunk.",

    goalsLabel: "Mik a céljaid?",
    goalsInfo: "A céljaid ismerete segít abban, hogy személyre szabott tippeket és kihívásokat javasoljunk.",
    goalAnimals: "Az állatok védelme és jóléte",
    goalEnvironment: "A környezet védelme és a klímaváltozás elleni küzdelem",
    goalHealthy: "Egészséges élet és jólét",
    goalHealth: "Egészségügyi problémák megoldása",
    // goalAthlete: "Teljesítményem növelése sportolóként",

    healthConcernsLabel: "Tapasztalsz bármelyik egészségügyi problémát?",
    healthConcernsInfo: "Ez segít abban, hogy tippeket és recepteket ajánljunk egészségedhez igazodva.",
    healthHeart: "Szívbetegség",
    healthCholesterol: "Magas koleszterin",
    healthBP: "Magas vérnyomás",
    healthDiabetes: "2-es típusú cukorbetegség",
    healthObesity: "Elhízás",
    healthDigestive: "Emésztési problémák",
    healthInflammation: "Gyulladás vagy duzzanat",
    healthFatigue: "Fáradtság",
    healthCancer: "Rák kockázata",

    buddyLabel: "Hozd létre a kisállatodat!",
    petNameLabel: "Név:",
    petNamePlaceholder: "A kisállat neve",
    petPhotoLabel: "Fotó feltöltése",
    petPhotoInfo: "Ha kihagyod, alapértelmezett kisállatot használunk",
    buddyIntroTitle: "Ismerd meg a kisállatodat!",

    nextBtn: "Következő",
    startButton: "Kezdjük!",

    // Script messages
    fillNameDietAlert: "Kérlek, add meg a neved és az étrendedet.",
    usernameTooLong: "A felhasználónév túl hosszú. Maximum 15 karakter.",
    petnameTooLong: "A kisállat neve túl hosszú. Maximum 15 karakter.",
    selectGoalAlert: "Kérlek, válassz legalább egy célt a folytatáshoz.",
    notLoggedIn: "Kérlek, jelentkezz be először!",
    answerBeforeContinue: "Kérlek, válaszolj, mielőtt továbbmész.",
    
  buddySpeech: (name, petName) =>
    `Szia ${name}! 🐾\nÉn ${petName} vagyok, a társad.\n\nVeled leszek ezen az úton — segítve az egészséges szokások kialakítását, az állatok védelmét 🌱 és pozitív hatást gyakorolva a bolygóra 🌍.\nMinden apró lépés számít. Növekedjünk együtt 💚!`

  }
};

// ===== updateLanguageUI function =====
export function updateLanguageUI(lang) {
  const t = langTexts[lang] || langTexts.en;

  // Loop through all IDs in the pool
  Object.keys(t).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    // Update placeholder for input fields
    if (el.tagName === "INPUT" && el.type === "text") {
      el.placeholder = t[id];
    }
    // Update <option> elements
    else if (el.tagName === "OPTION") {
      el.textContent = t[id];
    }
    // Update normal text content
    else {
      el.textContent = t[id];
    }
  });
}

// ===== Initialize UI =====
const currentLang = localStorage.getItem("lang") || "en";
updateLanguageUI(currentLang);

function getLangText(key) {
  const lang = localStorage.getItem("lang") || "en";
  const t = langTexts[lang] || langTexts.en;
  return t[key] || key;
}



// -------------------------
// FLOW
// -------------------------

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextQuestion);

// --- INPUT VALIDATION ---

const nameInput = document.getElementById('profileName');
const charCount = document.getElementById('nameCharCount');

  nameInput.addEventListener('input', () => {
    const length = nameInput.value.length;
    charCount.textContent = `${length}/15`;
  });


const petInput = document.getElementById('petname');
const petCharCount = document.getElementById('petNameCharCount');

  petInput.addEventListener('input', () => {
    const length = petInput.value.length;
    petCharCount.textContent = `${length}/15`;
  });




// --- FLOW ---

let currentStep = 1; // start at step 1 (profile info)

// --- Clear previous answers on init ---
localStorage.removeItem("veganBuddyAnswers");

let answers = JSON.parse(localStorage.getItem("veganBuddyAnswers")) || {
  profileName: "",
  diet: "",
  profilePhoto: null,
  goals: [],
  healthIssues: [],
  petName: "",
  petPhoto: null
};

// --- Next Question Function ---
async function nextQuestion() {
    const currentEl = document.getElementById("q" + currentStep);

    if (!validateStep(currentStep)) {
        alert(getLangText("answerBeforeContinue"));
        return;
    }

    if (currentStep === 1) {
        // Step 1: Profile info
        const name = document.getElementById("profileName").value.trim();
        const diet = document.getElementById("diet").value;
        const profilePhotoFile = document.getElementById("profilePhoto").files[0];

        if (!name || !diet) {
            alert(getLangText("fillNameDietAlert"));
            return;
        }

        // Check name length (short text max 15 chars)
    if (name.length > 15) {
        alert(getLangText("usernameTooLong"));
        return; // stop proceeding to next step
    }

        answers.profileName = name;
        answers.diet = diet;

        // If the user uploaded a photo, it's already handled by the change event
        // If skipped, leave answers.profilePhoto as null; saveProfile() sets default
        saveAnswers();

        document.getElementById("welcomeTitle").style.display = "none";

        switchStep(currentEl, "q2");
        currentStep = 2;
        return;
    }

    if (currentStep === 2) {
        answers.goals = [...document.querySelectorAll('input[name="goal"]:checked')].map(cb => cb.value);
        saveAnswers();

        if (answers.goals.includes("Solving health issues")) {
            switchStep(currentEl, "q2b");
            currentStep = 2.5;
            return;
        } else {
            switchStep(currentEl, "q3");
            currentStep = 3;
            return;
        }
    }

    if (currentStep === 2.5) {
        answers.healthIssues = [...document.querySelectorAll('input[name="healthIssue"]:checked')].map(cb => cb.value);
        saveAnswers();

        const currentEl = document.querySelector('.active'); // get whatever is active right now
        switchStep(currentEl, "q3");
        currentStep = 3;
        return;
    }

    if (currentStep === 3) {
        const petNameInput = document.getElementById("petname").value.trim();
        const petPhotoFile = document.getElementById("petPhotoUpload").files[0];

        // Validate pet name length (short text max 15 chars)
    if (petNameInput.length > 15) {
        alert(getLangText("petnameTooLong"));
        return; // stop proceeding to next step
    }

        // Pet photo upload handled by change event; if skipped, answers.petPhoto stays null
        answers.petName = petNameInput || "Winnie";
        saveAnswers();

        switchStep(currentEl, "q4");
        currentStep = 4;
        nextBtn.style.display = "none";
        const buddyIntro = document.getElementById("buddyIntro");
        buddyIntro.classList.remove("hidden"); // Show the buddy intro
        showBuddyIntro();
        return;
    }
}

// --- Helpers ---
function validateStep(step) {
    switch(step) {
        case 1:
            return document.getElementById("profileName").value.trim() !== "" &&
                   document.getElementById("diet").value.trim() !== "";
        case 2:
            return document.querySelectorAll('input[name="goal"]:checked').length > 0;
        case 2.5:
        case 3:
        case 4:
            return true;
    }
}

function switchStep(currentEl, nextId) {
    if (currentEl) currentEl.classList.remove("active");
    const nextEl = document.getElementById(nextId);
    if (nextEl) nextEl.classList.add("active");

    if (nextId === "q1") {
        document.getElementById("welcomeTitle").style.display = "block";
    }
}

// --- Buddy Intro ---
function showBuddyIntro() {
    const name = answers.profileName || "friend";
    const petName = answers.petName || "Winnie";

    const petImg = document.getElementById("petPortrait");
    const petText = document.getElementById("petText");

  // Set pet image (fallback handled already in saveProfile)
  petImg.src = answers.petPhoto || 
    "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/pet_photos/default.jpg";

  const speech = getLangText("buddySpeech")(name, petName);

    /* 
    const elunaSpeech = `Hi ${name}! I'm Eluna. 
I'm passionate about health, nutrition, and improving physical and mental performance. 
I believe that conscious living and balance are the keys to a fulfilled life. 
Let me introduce my twin brother, Elune:`;

    const eluneSpeech = `Hey ${name}! I’m Elune. 
I care deeply about animals, nature, and our planet. 
My goal is to protect every living being and fight against climate change. 
Together with my sister, we'll be here for you — guiding you, inspiring you, and helping you make a real difference!`;
    */
    document.getElementById("q4").classList.add("active");

    
    setTimeout(() => {
    petImg.classList.remove("hidden");
    petImg.classList.add("visible");

    setTimeout(() => {
      petText.classList.remove("hidden");
      petText.classList.add("visible");

      typeText("petText", speech, () => {
        const btn = document.getElementById("startButton");
        btn.classList.remove("hidden");

        btn.addEventListener("click", async () => {
          await saveProfile();
          window.location.href = "homepage.html";
        });
      });
    }, 600);
  }, 300);
}

      /*
        document.getElementById("elunaPortrait").classList.add("visible");
        document.getElementById("elunaText").classList.add("visible");

        setTimeout(() => {
            typeText("elunaText", elunaSpeech, () => {
                document.getElementById("elunePortrait").classList.add("visible");
                document.getElementById("eluneText").classList.add("visible");

                setTimeout(() => {
                    typeText("eluneText", eluneSpeech, () => {
                        const btn = document.getElementById("startButton");
                        btn.classList.remove("hidden");
                        btn.addEventListener("click", async () => {
                            await saveProfile();
                            window.location.href = "homepage.html";
                        });
                    });
                }, 1000);
            });
        }, 600);
     */
 

function typeText(elementId, text, callback) {
    const el = document.getElementById(elementId);
    el.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerHTML += (text[i] === "\n") ? "<br>" : text[i];
            i++;
            setTimeout(type, 25);
        } else if (callback) callback();
    }
    type();
}

// --- Upload Helper ---
async function uploadFile(bucket, file, userId) {
  if (!file) return null;

  const safeName = sanitizeFileName(file.name);
  const ext = safeName.split('.').pop();
  const base = safeName.replace(`.${ext}`, '');

  const filePath = `${userId}/${base}-${Date.now()}.${ext}`;

  const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
    cacheControl: '3600',
    upsert: true
  });

  if (error) {
    console.error(`Error uploading to ${bucket}:`, error);
    return null;
  }

  return supabase.storage.from(bucket).getPublicUrl(filePath).data.publicUrl;
}

// --- Profile photo preview + upload ---
document.getElementById('profilePhoto').addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  // Resize & compress before upload
  file = await resizeImage(file, 600, 0.7); // max 600px, 70% quality

  // Instant preview (before upload finishes)
  const instantPreview = URL.createObjectURL(file);
  document.getElementById('profilePreview').src = instantPreview;
  document.getElementById('profilePreview').style.display = 'block';

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return alert("Please log in first!");

  // Upload compressed image
  const url = await uploadFile('profile_photos', file, user.id);
  if (url) {
    answers.profilePhoto = url;
    saveAnswers();
    // Replace preview with final Supabase URL
    document.getElementById('profilePreview').src = url;
  }
});


// --- Pet photo preview + upload ---
document.getElementById('petPhotoUpload').addEventListener('change', async e => {
  let file = e.target.files[0];
  if (!file) return;

  // Resize & compress before upload
  file = await resizeImage(file, 300, 0.7); // max 300px, 70% quality

  // Instant preview (before upload finishes)
  const instantPreview = URL.createObjectURL(file);
  document.getElementById('petPhotoPreview').src = instantPreview;
  document.getElementById('petPhotoPreview').style.display = 'block';

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return alert("Please log in first!");

  // Upload compressed image
  const url = await uploadFile('pet_photos', file, user.id);
  if (url) {
    answers.petPhoto = url;
    saveAnswers();
    // Replace preview with final Supabase URL
    document.getElementById('petPhotoPreview').src = url;
  }
});

// --- Save Answers Function ---
async function saveAnswers() {
    localStorage.setItem("veganBuddyAnswers", JSON.stringify(answers));
}

// --- Save Profile Function (Update Only) ---
async function saveProfile() {
  // Get current logged-in user
  const { data: { user } } = await supabase.auth.getUser();
if (!user) return alert(getLangText("notLoggedIn"));

  // Default URLs
  const defaultProfileUrl = "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/profile_photos/default.jpg";
  const defaultPetUrl     = "https://pqrgvelzxmtdqrofxujx.supabase.co/storage/v1/object/public/pet_photos/default.jpg";

  function generateFriendCode(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

  try {
    const friendCode = generateFriendCode();

    const { data, error } = await supabase
      .from('profiles')
      .update({
        name: answers.profileName || "",
        diet_preference: answers.diet || "",
        profile_photo: answers.profilePhoto || defaultProfileUrl,
        goals: answers.goals || [],
        health_issues: answers.healthIssues || [],
        pet_name: answers.petName || null,
        pet_photo: answers.petPhoto || defaultPetUrl,

        // --- Starting values for your app stats ---
    streak: 0,
    animals_saved: 0,
    forest_saved: 0,
    water_saved: 0,
    co2_saved: 0,
    total_xp: 10,
    current_level: 1,
    badge: 1,

    // --- Daily check-in tracking ---
    day_counter: 0,
    last_checkin_date: (() => { const d = new Date(); d.setDate(d.getDate() - 1); return d.toISOString().split("T")[0]; })(),

    // --- Progress per goal ---
    goal_progress: answers.goals?.reduce((acc, goal) => {
        acc[goal] = 0; // start each goal at lesson index 0
        return acc;
    }, {}), 

      friend_code: friendCode,
      survey_completed: true,
      language: localStorage.getItem('lang') || 'en'   // <-- here
      })
      .eq('id', user.id)           // ensure only their own row is updated
      .select();                   // return the updated row

    if (error) {
      console.error("Error updating profile:", error);
    } else {
      console.log("Profile successfully updated:", data);
    }

  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

//resize Image
async function resizeImage(file, maxSize = 600, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => {
      img.src = e.target.result;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      // Keep aspect ratio
      if (width > height) {
        if (width > maxSize) {
          height = Math.round((height *= maxSize / width));
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width = Math.round((width *= maxSize / height));
          height = maxSize;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        blob => {
          if (!blob) return reject("Canvas is empty");
          resolve(new File([blob], file.name, { type: blob.type }));
        },
        "image/jpeg",
        quality // 0–1 compression level
      );
    };

    img.onerror = err => reject(err);
    reader.readAsDataURL(file);
  });
}

function sanitizeFileName(filename) {
  return filename
    .normalize("NFD")                     // é → e + accent
    .replace(/[\u0300-\u036f]/g, "")     // remove accents
    .replace(/\s+/g, "_")                // spaces → _
    .replace(/[^a-zA-Z0-9._-]/g, "")     // remove unsafe chars
    .toLowerCase();
}