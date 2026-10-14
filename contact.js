// Contact form: checks the details, then opens the visitor's email app with the message ready to send to the school.
"use strict";
const SCHOOL_EMAIL = "hopehighaca@gmail.com";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiry");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const v = (id) => form.elements[id].value.trim();
    const body = "Name: " + v("name") + "\nEmail: " + v("email") + "\nPhone: " + (v("phone") || "-") + "\nTopic: " + v("topic") + "\n\n" + v("message");
    const subject = "Enquiry (" + v("topic") + ") from " + v("name");
    window.location.href = "mailto:" + SCHOOL_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.textContent = "Opening your email app. If nothing opens, email us at " + SCHOOL_EMAIL + ".";
    status.setAttribute("role", "status");
  });
});
