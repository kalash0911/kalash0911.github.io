import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app.jsx";
import { getCookie } from "./utils/cookie.js";
import { TEST_END } from "./constants/cookie.js";

initReactApp();

function initReactApp() {
  const isTestDone = getCookie(TEST_END);
  const reactAppRoot = document.getElementById("test");
  const startTestAppBtn = document.getElementById("start-test-app");
  const reactTestAppWrapper = document.getElementById("test-app");
  const testMarkupInfoContent = document.getElementById("test-info");

  const showReactBlock = () => {
    reactTestAppWrapper.style.display = "block";
    testMarkupInfoContent.style.display = "none";
    startTestAppBtn.style.display = "none";
  };

  if (isTestDone) {
    showReactBlock();
  }

  if (
    startTestAppBtn &&
    reactTestAppWrapper &&
    testMarkupInfoContent &&
    !isTestDone
  ) {
    const originalBtnPosition =
      startTestAppBtn.offsetTop + startTestAppBtn.offsetHeight;
    reactTestAppWrapper.style.display = "none";
    startTestAppBtn.classList.add("fixed-btn");

    document.addEventListener("scroll", () => {
      if (window.scrollY + window.innerHeight >= originalBtnPosition) {
        if (startTestAppBtn.classList.contains("fixed-btn")) {
          startTestAppBtn.classList.remove("fixed-btn");
        }
      } else {
        if (!startTestAppBtn.classList.contains("fixed-btn")) {
          startTestAppBtn.classList.add("fixed-btn");
        }
      }
    });

    startTestAppBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showReactBlock();
    });
  }

  if (reactAppRoot) {
    const root = createRoot(reactAppRoot);
    root.render(<App />);
  }
}
