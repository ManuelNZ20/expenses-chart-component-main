const graph = document.querySelectorAll(".graph-in-month");
const mon = document.querySelector(".info-mon");
const tue = document.querySelector(".info-tue");
const wed = document.querySelector(".info-wed");
const thu = document.querySelector(".info-thu");
const fri = document.querySelector(".info-fri");
const sat = document.querySelector(".info-sat");
const sun = document.querySelector(".info-sun");
const switchDayMonth = (value, day, stringDay, money, flag, info) => {
  if (value.contains(stringDay)) {
    if (flag) {
      day.classList.remove("inactive");
      info.innerText = `$${money}`;
      day.appendChild(info);
    } else {
      info.innerText = "";
      day.classList.add("inactive");
    }
  }
};

graph.forEach((element) => {
  const info = document.createElement("span");
  info.classList.add("info-graph-span");
  const value = element.classList;
  element.addEventListener("mouseover", () => {
    switchDayMonth(value, mon, "mon", 1219.2, true, info);
    switchDayMonth(value, tue, "tue", 1592.6, true, info);
    switchDayMonth(value, wed, "wed", 3510.74, true, info);
    switchDayMonth(value, thu, "thu", 1692.56, true, info);
    switchDayMonth(value, fri, "fri", 1000.32, true, info);
    switchDayMonth(value, sat, "sat", 3302.98, true, info);
    switchDayMonth(value, sun, "sun", 1598.28, true, info);
  });
  element.addEventListener("mouseout", () => {
    switchDayMonth(value, mon, "mon", 0, false, info);
    switchDayMonth(value, tue, "tue", 0, false, info);
    switchDayMonth(value, wed, "wed", 0, false, info);
    switchDayMonth(value, thu, "thu", 0, false, info);
    switchDayMonth(value, fri, "fri", 0, false, info);
    switchDayMonth(value, sat, "sat", 0, false, info);
    switchDayMonth(value, sun, "sun", 0, false, info);
  });
});
