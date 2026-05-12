(function () {
  var dateElement = document.getElementById("updated-date");
  if (!dateElement) return;

  var now = new Date();
  var formatted = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  dateElement.textContent = formatted;
  dateElement.setAttribute("datetime", now.toISOString().slice(0, 10));
})();
