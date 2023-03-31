window.onload = (function () {
  const spoilerImageObserver = new MutationObserver(function (
    _mutations,
    _mutationInstance
  ) {
    const backgroundWrapper = document.querySelector(".content-poster");
    if (backgroundWrapper) {
      backgroundWrapper.style.display = "none";
      spoilerImageObserver.disconnect();
    }
  });

  const videoControllerObserver = new MutationObserver(function (
    _mutations,
    _mutationInstance
  ) {
    const listenerContainer = document.querySelector(".full-progress-bar");
    const videoControls = document.querySelector(".controlbarContainer");
    const streamSelector = document.querySelector(".stream-selector");
    const fullProgressBar = document.querySelector(".full-progress-bar");

    /// if all elements are in the DOM, add event listener and disconnect oberver
    if (
      listenerContainer &&
      videoControls &&
      streamSelector &&
      fullProgressBar
    ) {
      videoControllerObserver.disconnect();
      listenerContainer.addEventListener("click", function (e) {
        e.stopImmediatePropagation();

        const dataHide = videoControls.getAttribute("data-hide");
        videoControls.setAttribute("data-hide", toggleAttribute(dataHide));
        streamSelector.setAttribute("data-hide", toggleAttribute(dataHide));
        toggleAttribute(dataHide) === "true"
          ? (fullProgressBar.style.opacity = 0)
          : (fullProgressBar.style.opacity = 0.9);
      });
    }
  });

  videoControllerObserver.observe(document, {
    childList: true,
    subtree: true,
  });

  spoilerImageObserver.observe(document, {
    childList: true,
    subtree: true,
  });
})();

const toggleAttribute = (stringyBoolean) => {
  if (stringyBoolean === "true") {
    return "false";
  } else return "true";
};
