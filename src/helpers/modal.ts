export const toggleNavModal = () => {
  const leftNavPane = document.querySelector(".dashboard-left-nav");
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-bg");
  if (leftNavPane?.classList.contains("open")) {
    body?.classList.remove("modal");
    modal?.classList.remove("active");
    modal?.classList.add("inactive");
    leftNavPane?.classList.remove("open");
    leftNavPane?.classList.add("close");
    return;
  } else {
    leftNavPane?.classList.remove("close");
    body?.classList.add("modal");
    modal?.classList.remove("inactive");
    modal?.classList.add("active");
    leftNavPane?.classList.add("open");
    return;
  }
};

export const toggleFilterModal = () => {
  const filterMenu = document.querySelector(".filter-menu");
  const modal = document.querySelector(".modal-bg");
  if (filterMenu?.classList.contains("active")) {
    modal?.classList.remove("active-transparent");
    modal?.classList.add("inactive");
    filterMenu?.classList.remove("active");
    filterMenu?.classList.add("inactive");
    return;
  } else {
    filterMenu?.classList.remove("inactive");
    modal?.classList.remove("inactive");
    modal?.classList.add("active-transparent");
    filterMenu?.classList.add("active");
    return;
  }
};

export const closeModal = () => {
  const leftNavPane = document.querySelector(".dashboard-left-nav");
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-bg");
  const filterMenu = document.querySelector(".filter-menu");
  if (leftNavPane?.classList.contains("open")) {
    body?.classList.remove("modal");
    modal?.classList.remove("active");
    modal?.classList.add("inactive");
    leftNavPane?.classList.remove("open");
    leftNavPane?.classList.add("close");
    return;
  }
  if (filterMenu?.classList.contains("active")) {
    modal?.classList.remove("active-transparent");
    modal?.classList.add("inactive");
    filterMenu?.classList.remove("active");
    filterMenu?.classList.add("inactive");
    return;
  }
};
