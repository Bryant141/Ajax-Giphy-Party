async function getGif(userInput) {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=HDIjuMPTWfTRKyKSN5z2OMInXGozJDqK&q=${userInput}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        const res = await axios.get(url);
        return res.data.data[0].images.fixed_height.url;
    } catch (e) {
        console.error("Error fetching GIF:", e);
        return null;
    }
}

const form = document.querySelector('#gifForm');
const input = document.querySelector("#search");
const results = document.querySelector("#results");
const deleteBtn = document.querySelector("#deleteBtn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const userInput = input.value;
    const gifUrl = await getGif(userInput);
    if (gifUrl) {
        const newImg = document.createElement('img');
        newImg.src = gifUrl;
        results.appendChild(newImg);
    }
    input.value = ""; // Clear input after submission
});

deleteBtn.addEventListener("click", function () {
    results.innerHTML = ""; // Remove all GIFs
});