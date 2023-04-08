let ingredients = document.getElementById("");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// localStorage notes delivered to me from the console:)
// :
// Storage
// length
// :
// 0
// [[Prototype]]
// :
// Storage
// clear
// :
// ƒ clear()
// getItem
// :
// ƒ getItem()
// key
// :
// ƒ key()
// length
// :
// (...)
// removeItem
// :
// ƒ removeItem()
// setItem
// :
// ƒ setItem()
// constructor
// :
// ƒ Storage()
// Symbol(Symbol.toStringTag)
// :
// "Storage"
// get length
// :
// ƒ length()
// [[Prototype]]
// :
// Object

//ready function

//checkbox for html
{
  /* <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="vue-checkbox-poultry" type="checkbox" value=""
    class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
  <label for="vue-checkbox"
    class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Poultry</label>
</div>
</li> */
}

// List for HTML
{
  /* <ul role="list" class="marker:text-yellow-400 list-disc pl-5 space-y-3 text-slate-500">
<li class="selected-ingredients1"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
<li class="selected-ingredients"></li>
</ul> */
}
