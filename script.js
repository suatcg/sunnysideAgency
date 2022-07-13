// const toggleBox = document.querySelector(".toggle-box");
// const navigation = document.querySelector(".navigation");
// const toggleContent = document.querySelector(".toggle-box__content");
// const toggleNav = document.querySelector(".navigation__content");
// // const afterEl = window.getComputedStyle(toggleBox, "::after");
// //afterEl.setProperty("display", "block", "important");
// //console.log(afterEl.getPropertyValue("display"));
// //toggleContent.style.display = "block";

// toggleBox.addEventListener("click", function () {
//   toggleContent.classList.toggle("content");
//   toggleNav.classList.toggle("visibility");
//   // navigation.style.flexDirection = "column";
//   // navigation.style.visibility = "inherit";
// });

const toggleBox = document.querySelector(".toggle-box");
const toggleContent = document.querySelector(".toggle-box--content");

toggleBox.addEventListener("click", function () {
  const visibility = toggleContent.getAttribute("data-visible");

  if (visibility === "false") {
    toggleContent.setAttribute("data-visible", true);
  } else {
    toggleContent.setAttribute("data-visible", false);
  }
});
