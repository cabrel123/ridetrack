var langs = ["en", "fr"];
var langCode = "";
var langJS = null;

var translate = function (jsdata) {
  document.querySelectorAll("[tkey]").forEach(function (element) {
    var strTr = jsdata[element.getAttribute("tkey")];
    element.innerHTML = strTr;
  });
};

//langCode = navigator.language.substr (0, 2);
langCode = window.localStorage.getItem("userlanguage");
//langCode = 'fr';
//if (langCode in langs)
if (langs.indexOf(langCode) > -1) {
  fetch("lang/lang/" + langCode + ".json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      translate(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
} else {
  fetch("lang/lang/en.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      translate(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function langTranslate() {
  var langs = ["en", "fr", "FR"];
  var langCode = "";
  var langJS = null;

  var translate = function (jsdata) {
    document.querySelectorAll("[tkey]").forEach(function (element) {
      var strTr = jsdata[element.getAttribute("tkey")];
      element.innerHTML = strTr;
    });
  };

  //langCode = navigator.language.substr (0, 2);
  langCode = window.localStorage.getItem("userlanguage");

  //langCode = 'fr';
  //myApp.alert(langCode);
  //if (langCode in langs)
  if (langs.indexOf(langCode) > -1) {
    fetch("lang/lang/" + langCode + ".json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        translate(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  } else {
    fetch("lang/lang/fr.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        translate(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
}
