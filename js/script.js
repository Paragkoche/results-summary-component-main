let data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
const body = document.querySelector("#body");

for (let i of data) {
  const lest = document.createElement("div");
  const d = document.createElement("div");
  const icon = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("div");
  const score = document.createElement("div");
  const p = document.createElement("p");
  const span = document.createElement("span");
  lest.classList.add("list");
  if (i.category == "Reaction") lest.classList.add("e");
  if (i.category == "Memory") lest.classList.add("w");
  if (i.category == "Verbal") lest.classList.add("g");
  if (i.category == "Visual") lest.classList.add("p");
  d.classList.add("d");
  icon.classList.add("icon");
  img.src = i.icon;
  text.classList.add("text");
  text.innerText = i.category;
  icon.appendChild(img);
  d.appendChild(icon);
  d.appendChild(text);
  score.classList.add("score");
  p.innerText = i.score;
  span.innerText = " / 100";
  p.appendChild(span);
  score.appendChild(p);
  lest.appendChild(d);
  lest.appendChild(score);
  body.appendChild(lest);
}
