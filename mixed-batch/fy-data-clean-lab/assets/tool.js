const searchInput = document.getElementById("toolSearch");
const chips = [...document.querySelectorAll("[data-filter]")];
const groups = [...document.querySelectorAll("[data-group]")];

let activeFilter = "";

function update() {
  const keyword = (searchInput?.value || "").trim().toLowerCase();
  groups.forEach((group) => {
    const cards = [...group.querySelectorAll("[data-card]")];
    let visible = 0;
    cards.forEach((card) => {
      const matchesKeyword = !keyword || (card.dataset.keywords || "").toLowerCase().includes(keyword);
      const matchesFilter = !activeFilter || group.dataset.group === activeFilter;
      const show = matchesKeyword && matchesFilter;
      card.classList.toggle("hidden", !show);
      if (show) visible += 1;
    });
    group.classList.toggle("hidden", visible === 0);
  });
}

searchInput?.addEventListener("input", update);
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const next = chip.dataset.filter || "";
    activeFilter = activeFilter === next ? "" : next;
    chips.forEach((item) => item.classList.toggle("active", item === chip && activeFilter === next));
    update();
  });
});

update();
