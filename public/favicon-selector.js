<<<<<<< HEAD
function applyIcon(type) {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  if (type === "dark") {
    link.href = "/images/logoDark.png";
  } else {
    link.href = "/images/logoLight.png";
  }
  document.getElementsByTagName("head")[0].appendChild(link);
}
let dmQuery = window.matchMedia("(prefers-color-scheme: dark)");
let lmQuery = window.matchMedia("(prefers-color-scheme: light)");
if (dmQuery.matches) {
  applyIcon("dark");
}
dmQuery.addListener(function () {
  applyIcon("dark");
});
lmQuery.addListener(function () {
  applyIcon("light");
});
=======
function applyIcon(type) {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  if (type === "dark") {
    link.href = "/images/logoDark.png";
  } else {
    link.href = "/images/logoLight.png";
  }
  document.getElementsByTagName("head")[0].appendChild(link);
}
let dmQuery = window.matchMedia("(prefers-color-scheme: dark)");
let lmQuery = window.matchMedia("(prefers-color-scheme: light)");
if (dmQuery.matches) {
  applyIcon("dark");
}
dmQuery.addListener(function () {
  applyIcon("dark");
});
lmQuery.addListener(function () {
  applyIcon("light");
});
>>>>>>> d767145b3b928151389743c1af6988cbc18e7f0f
