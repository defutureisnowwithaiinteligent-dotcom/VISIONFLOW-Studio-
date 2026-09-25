const generateBtn = document.getElementById("generateBtn");
const promptBox = document.getElementById("prompt");
const statusText = document.getElementById("status");

generateBtn.addEventListener("click", async () => {
  const prompt = promptBox.value.trim();

  if (!prompt) {
    statusText.textContent = "Please describe what you want to create.";
    return;
  }

  statusText.textContent = "Generating...";

  try {
    const response = await fetch(window.location.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Generation failed");
    }

    statusText.textContent = "Generation completed!";
    console.log(data);

  } catch (error) {
    console.error(error);
    statusText.textContent = "Error: " + error.message;
  }
});
