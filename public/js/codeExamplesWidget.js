function initCodeExpansionToggle() {
  const overviewSection = document.getElementById("overview");
  const toggleCodeExpandButton = document.getElementById("toggle-code-expand");

  if (toggleCodeExpandButton && overviewSection) {
    const enlargeIcon = toggleCodeExpandButton.querySelector(".icon-enlarge");
    const shrinkIcon = toggleCodeExpandButton.querySelector(".icon-shrink");

    toggleCodeExpandButton.addEventListener("click", () => {
      overviewSection.classList.toggle("code-expanded");
      const isExpanded = overviewSection.classList.contains("code-expanded");

      if (enlargeIcon && shrinkIcon) {
        if (isExpanded) {
          enlargeIcon.style.display = "none";
          shrinkIcon.style.display = "inline-block";
        } else {
          enlargeIcon.style.display = "inline-block";
          shrinkIcon.style.display = "none";
        }
      }
    });
  }
}

function initCopyCodeButton() {
  const copyButton = document.getElementById("copy-code-button");
  const codeContentElement = document.getElementById("code-display-content");

  if (copyButton && codeContentElement) {
    const iconCopy = copyButton.querySelector(".icon-copy");
    const iconCopied = copyButton.querySelector(".icon-copied");

    copyButton.addEventListener("click", async () => {
      if (!iconCopy || !iconCopied) return;

      try {
        await navigator.clipboard.writeText(codeContentElement.textContent);

        iconCopy.style.display = "none";
        iconCopied.style.display = "inline-block";
        copyButton.setAttribute("aria-label", "Code copied!");

        setTimeout(() => {
          iconCopy.style.display = "inline-block";
          iconCopied.style.display = "none";
          copyButton.setAttribute("aria-label", "Copy code to clipboard");
        }, 2000);
      } catch (err) {
        copyButton.setAttribute("aria-label", "Failed to copy");
        setTimeout(() => {
          copyButton.setAttribute("aria-label", "Copy code to clipboard");
          copyButton.title = "Copy code";
        }, 2000);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initCodeExpansionToggle();
  initCopyCodeButton();

  const selectElement = document.getElementById("code-example-select");
  const codeContentElement = document.getElementById("code-display-content");
  const codePreElement = document.getElementById("code-display-pre");
  const codeLoaderElement = document.getElementById("code-loader");

  const examples = window.sourceCodeExamples;

  if (
    !selectElement ||
    !codeContentElement ||
    !codePreElement ||
    !codeLoaderElement
  ) {
    if (codeLoaderElement) codeLoaderElement.style.display = "none";
    if (codePreElement && examples.length === 0)
      codePreElement.style.display = "block";
    return;
  }

  // Populate select options
  examples.forEach((ex, index) => {
    const option = document.createElement("option");
    option.value = ex.id;
    option.textContent = ex.title;
    if (index === 0) {
      option.selected = true;
    }
    selectElement.appendChild(option);
  });

  function updateCodeDisplay(exampleId) {
    const example = examples.find((ex) => ex.id === exampleId);
    if (example) {
      codeContentElement.textContent = example.src.trimStart();
      codeContentElement.className = `language-${example.lang}`;

      if (typeof hljs !== "undefined") {
        codeContentElement.removeAttribute("data-highlighted");
        hljs.highlightElement(codeContentElement);
      }
    }
  }

  // Initial display
  if (examples.length > 0) {
    const initialExampleId = selectElement.value || examples[0].id;
    updateCodeDisplay(initialExampleId);
  } else {
    codeContentElement.textContent = "// No examples available.";
    codeContentElement.className = `language-text`;
    if (typeof hljs !== "undefined") {
      hljs.highlightElement(codeContentElement);
    }
  }

  // Hide loader, show pre
  codeLoaderElement.style.display = "none";
  codePreElement.style.display = "block";

  selectElement.addEventListener("change", (event) => {
    updateCodeDisplay(event.target.value);
  });
});
