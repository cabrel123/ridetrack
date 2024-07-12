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
  name: "TaxiSur", // App name
  el: "#app",
  theme,
  statusbar: {
    iosBackgroundColor: "#feb714",
    androidBackgroundColor: "#feb714",
  },
  buttonCancel: "Annuler",
  // routes.js,
  routes: routes,
  on: {
    init: function () {
      console.log("App initialized");
      // Retrieve current language======================================>>

      navigator.globalization.getPreferredLanguage(
        onSuccessLanguage,
        onErrorLanguage
      );
      function onSuccessLanguage(language) {
        var uppercaselanguage = language.value.substr(0, 2);
        var lowercaselanguage = uppercaselanguage.toLowerCase();
        window.localStorage.setItem("userlanguage", lowercaselanguage);
        //alert(lowercaselanguage);
      }
      function onErrorLanguage() {
        window.localStorage.setItem("userlanguage", "fr");
      }
    },
    pageInit: function () {
      const userId = localStorage.getItem("userId");
      const FCM_token = localStorage.getItem("FCM_token");

      //update user fcm token
      if (
        userId == null ||
        userId == undefined ||
        userId == "" ||
        FCM_token == null ||
        FCM_token == "" ||
        FCM_token == "undefined"
      ) {
        console.log("no user logged or no token generated");
      } else {
        setFcmToken();
      }
      // document.addEventListener("offline", onOffline, false);
      // document.addEventListener("online", onOnline, false);
      /*====================================================Language Change for javascript=============================*/
      var userlanguage = window.localStorage.getItem("userlanguage");
      jsLangTranslate(userlanguage);

      /*Get device language for html files ===========================================================================*/
      langTranslate();
      navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true,
      });

      console.log("Page initialized");
    },
  },
  popup: {
    closeOnEscape: true,
  },
  methods: {
    onBackKeyDown: function () {
      var leftp = app.panel.left && app.panel.left.opened;
      var rightp = app.panel.right && app.panel.right.opened;

      if (leftp || rightp) {
        app.panel.close();
        return false;
      } else if ($$(".modal-in").length > 0) {
        app.dialog.close();
        app.popup.close();
        return false;
      } else if (app.views.main.router.url == "/home/") {
        navigator.app.exitApp();
      } else {
        app.router.back();
      }
    },
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
// Device ready
function formatNow() {
  var now = new Date();
  return (
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds() +
    "." +
    now.getMilliseconds()
  );
}

function addToLog(log) {
  console.log("log ", log);
}

function trySomeTimes(asyncFunc, onSuccess, onFailure, customTries) {
  var tries = typeof customTries === "undefined" ? 100 : customTries;
  var interval = setTimeout(function () {
    if (typeof asyncFunc !== "function") {
      onSuccess("Unavailable");
      return;
    }
    asyncFunc()
      .then(function (result) {
        if ((result !== null && result !== "") || tries < 0) {
          onSuccess(result);
        } else {
          trySomeTimes(asyncFunc, onSuccess, onFailure, tries - 1);
        }
      })
      .catch(function (e) {
        clearInterval(interval);
        onFailure(e);
      });
  }, 100);
}

function setupOnTokenRefresh() {
  FCM.eventTarget.addEventListener(
    "tokenRefresh",
    function (data) {
      addToLog("<p>FCM Token refreshed to " + data.detail + "</p>");
    },
    false
  );
}

function setupOnNotification() {
  FCM.eventTarget.addEventListener(
    "notification",
    function (data) {
      app.dialog.alert(data.detail.body);
      addToLog("<pre>" + JSON.stringify(data.detail, null, 2) + "</pre>");
    },
    false
  );
  FCM.getInitialPushPayload()
    .then((payload) => {
      addToLog(
        "<p>Initial Payload</p><pre>" +
          JSON.stringify(payload, null, 2) +
          "</pre>"
      );
    })
    .catch((error) => {
      addToLog(
        "<p>Initial Payload Error</p><pre>" +
          JSON.stringify(error, null, 2) +
          "</pre>"
      );
    });
}

function logFCMToken() {
  trySomeTimes(
    FCM.getToken,
    function (token) {
      localStorage.setItem("FCM_token", token);
      addToLog("<p>Started listening FCM as " + token + "</p>");
    },
    function (error) {
      addToLog("<p>Error on listening for FCM token: " + error + "</p>");
    }
  );
}

function logAPNSToken() {
  if (cordova.platformId !== "ios") {
    return;
  }
  FCM.getAPNSToken(
    function (token) {
      addToLog("<p>Started listening APNS as " + token + "</p>");
    },
    function (error) {
      addToLog("<p>Error on listening for APNS token: " + error + "</p>");
    }
  );
}

function setupClearAllNotificationsButton() {
  document.getElementById("clear-all-notifications").addEventListener(
    "click",
    function () {
      FCM.clearAllNotifications();
    },
    false
  );
}

function setupClearAllNotificationsButton() {
  document.getElementById("delete-instance-id").addEventListener(
    "click",
    function () {
      FCM.deleteInstanceId().catch(function (error) {
        alert(error);
      });
    },
    false
  );
}

function waitForPermission(callback) {
  FCM.requestPushPermission()
    .then(function (didIt) {
      if (didIt) {
        callback();
      } else {
        addToLog("<p>Push permission was not given to this application</p>");
      }
    })
    .catch(function (error) {
      addToLog("<p>Error on checking permission: " + error + "</p>");
    });
}

function logHasPermissionOnStart() {
  FCM.hasPermission().then(function (hasIt) {
    addToLog("<p>Started with permission: " + JSON.stringify(hasIt) + "</p>");
  });
}
function setupListeners() {
  console.log(device.cordova);

  navigator.geolocation.getCurrentPosition(onSuccess, onError, {
    enableHighAccuracy: true,
  });
  logHasPermissionOnStart();
  waitForPermission(function () {
    FCM.createNotificationChannel({
      id: "sound_alert6",
      name: "Sound Alert6",
      // description: "Useless",
      importance: "high",
      // visibility: "public",
      sound: "elet_mp3",
      // lights: false,
      // vibration: false,
    });
    logFCMToken();
    logAPNSToken();
    setupOnTokenRefresh();
    setupOnNotification();
    setupClearAllNotificationsButton();
  });

  document.addEventListener(
    "backbutton",
    function (e) {
      let currentPage = app.views.main.router.currentRoute.path;
      //console.log("currentPage", currentPage);

      if (
        currentPage == "/home/" ||
        currentPage == "/login/" ||
        currentPage == "/register/" ||
        currentPage == "/welcome/"
      ) {
        e.preventDefault();
        app.dialog.confirm(
          "Voulez-vous vraiment quitter l'application ?",
          function () {
            navigator.app.exitApp();
          }
        );
      } else {
        app.views.main.router.back();
        return false;
      }
    },
    false
  );
}

function setFcmToken() {
  const userId = localStorage.getItem("userId");
  const fcm_token = localStorage.getItem("FCM_token");
  // API endpoint for creating a new user

  // Form data to be sent in the request body
  const formData = {
    fcm_token: fcm_token,
    userId: userId,
  };

  fetch(apiUrl + "/api/fcm", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Process the newly created user data
      console.log("fcm token updated !");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Attendre que Cordova soit prêt
document.addEventListener("deviceready", setupListeners, false);
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
function onSuccess(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  localStorage.setItem("userlat", lat);
  localStorage.setItem("userlng", lng);
}

// onError Callback receives a PositionError object
function onError(error) {
  console.log(
    "code: " + error.code + "\n" + "message: " + error.message + "\n"
  );
}
function jsLangTranslate(userlanguage) {
  console.log("userlanguage", userlanguage);
  document.addEventListener("deviceready", function () {
    switch (userlanguage) {
      case "en":
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "lang/lang/en.js";
        s.innerHTML = null;
        s.id = "langJs";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(s);
        break;
      case "fr":
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "lang/lang/fr.js";
        s.innerHTML = null;
        s.id = "langJs";
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").appendChild(s);
        break;
      default:
        void 0;
    }
  });
}
// const token = localStorage.getItem("token");
// setTimeout(function () {
//   if (token == null || token == undefined || token == "") {
//     app.views.main.router.navigate("/welcome/");
//   } else {
//     app.views.main.router.navigate("/home/");
//   }
// }, 2000);

// define api url
let apiUrl = "https://taxisur.net";

//define app key
let appKey = "DieuestGr@nd";
