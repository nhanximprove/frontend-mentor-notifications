const markAllButton = document.getElementById("mark-as-read");

markAllButton.addEventListener("click", () => {
  const postContainer = document.querySelectorAll(".tweet-container");
  const notificationsEl = document.querySelector(".notifications-number");
  const notificationIcons = document.querySelectorAll(
    ".notifications-new-icon"
  );

  postContainer.forEach((el) => {
    el.classList.remove("new");
  });

  notificationsEl.innerText = 0;
});
