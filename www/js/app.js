// Dom7
var $ = Dom7;

// Demo
if (document.location.href.includes("safe-areas")) {
  const html = document.documentElement;
  if (html) {
    html.style.setProperty("--f7-safe-area-top", "44px");
    html.style.setProperty("--f7-safe-area-bottom", "34px");
  }
}
if (document.location.href.includes("example-preview")) {
  $(".view-main").attr("data-browser-history", "true");
  $(".view-main").attr("data-browser-history-root", "/kitchen-sink/core/");
  $(".view-main").attr("data-preload-previous-page", "false");
  $(".view-main").attr("data-ios-swipe-back", "false");
  document.documentElement.classList.add("example-preview");
}

// Theme
var theme = "auto";
if (document.location.search.indexOf("theme=") >= 0) {
  theme = document.location.search.split("theme=")[1].split("&")[0];
}
if (document.location.search.indexOf("mode=") >= 0) {
  const mode = document.location.search.split("mode=")[1].split("&")[0];
  if (mode === "dark") document.documentElement.classList.add("dark");
}

// Init App
var app = new Framework7({
  el: "#app",
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: "pltd4o7ibb9rc653x14",
  },
});

// Attendre que Cordova soit prêt
document.addEventListener(
  "deviceready",
  function () {
    // Écoutez l'événement "page:afterin" pour la page par défaut
    app.on("page:afterin", (page) => {
      if (page.route.path === "/") {
        var token = localStorage.getItem("token");
        // Vérifier si le token existe
        if (token) {
          // Rediriger vers une page précise si le token existe
          app.views.main.router.navigate("/home/");
        } else {
          // Redirigez vers la page par défaut si la page actuelle est la page par défaut
          app.views.main.router.navigate("/");
        }
      }
    });
  },
  false
);

// define api url
let apiUrl = "http://127.0.0.1:8050";
