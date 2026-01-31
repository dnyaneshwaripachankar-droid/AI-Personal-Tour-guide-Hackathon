const toggle = document.getElementById("toggleTheme");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});


const chatBody = document.getElementById("chatBody");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

/* Fake AI typing simulation */
setTimeout(() => {
  const msg = document.createElement("div");
  msg.className = "message ai";
  msg.textContent = "📍 I found 3 attractions nearby. The closest is just 5 minutes away.";
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}, 2500);
/* Auto rotate testimonials */
setInterval(() => {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}, 4000);