function getTextForTarget(targetKey) {
  const source = document.querySelector(`[data-copy-source="${targetKey}"]`);
  if (!source) return null;
  return source.textContent ?? "";
}

async function copyText(text) {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("Nothing to copy");
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!ok) throw new Error("Copy failed");
}

function setTemporaryButtonLabel(button, nextLabel, ms = 1500) {
  const original = button.textContent;
  button.textContent = nextLabel;
  window.setTimeout(() => {
    button.textContent = original;
  }, ms);
}

function wireCopyButtons() {
  const buttons = document.querySelectorAll("button[data-copy-target]");
  for (const button of buttons) {
    button.addEventListener("click", async () => {
      const targetKey = button.getAttribute("data-copy-target");
      if (!targetKey) return;

      const text = getTextForTarget(targetKey);
      if (text == null) {
        setTemporaryButtonLabel(button, "Failed");
        return;
      }

      try {
        await copyText(text.trim());
        setTemporaryButtonLabel(button, "Copied");
      } catch {
        setTemporaryButtonLabel(button, "Failed");
        return;
      }

      const openUrl = button.getAttribute("data-open-url");
      if (openUrl) {
        window.open(openUrl, "_blank", "noopener");
        setTemporaryButtonLabel(button, "Opened");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  wireCopyButtons();
});

