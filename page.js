const container = document.querySelector("div");

for (let i = 1; i < 151; i++) {
    const wrapPokemon = document.createElement("div");
    const label = document.createElement("span");
    label.innerText = `#${i}`;

    wrapPokemon.classList.add("pokemon");

    const newImg = document.createElement("img");
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

    wrapPokemon.appendChild(newImg);
    wrapPokemon.appendChild(label);
    container.appendChild(wrapPokemon);
}

const btn = document.querySelector("#btn");
const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3");

const pauseBtn = document.createElement('button');
//pauseBtn.innerText = "Pause music";
pauseBtn.append("Pause Music");
btn.insertAdjacentElement("afterend", pauseBtn);

btn.addEventListener("click", function () {
    audio.play();
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
})