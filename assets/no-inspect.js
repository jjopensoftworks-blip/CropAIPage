/*
 * no-inspect.js — LIGHT deterrent only.
 *
 * NOT security. Anything the browser renders is downloadable, and this is trivially bypassed
 * (view-source, curl/wget, disabling JavaScript, browser menus, mobile). It only raises the bar
 * for casual right-click / F12. Real anti-scraping & bot protection belongs at the edge: enable
 * Cloudflare **Bot Fight Mode** + a rate-limiting/WAF rule on this site.
 *
 * Include on each page before </body>:
 *   <script src="assets/no-inspect.js" defer></script>
 */
(function () {
  "use strict";

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    var key = (e.key || "").toLowerCase();
    var ctrl = e.ctrlKey || e.metaKey;
    var isDevtools = key === "f12" || (ctrl && e.shiftKey && (key === "i" || key === "j" || key === "c"));
    var isViewSource = ctrl && key === "u";
    if (isDevtools || isViewSource) {
      e.preventDefault();
    }
  });
})();
