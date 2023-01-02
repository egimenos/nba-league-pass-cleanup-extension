window.onload = (function () {
  const observer = new MutationObserver(function (
    _mutations,
    _mutationInstance
  ) {
    const backgroundWrapper = document.querySelector(".content-poster");
    if (backgroundWrapper) {
      backgroundWrapper.style.display = "none";
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
})();
