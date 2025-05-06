function CastRandomSpell(){

    const adjectives = [
        "Mystic","Enchanted","Arcane","Divine","Shadow",
        "Infernal","Celestial","Ethereal","Luminous","Runic"
    ];

    const nouns = [
        "Flame","Frost","Storm","Whisper","Blade",
        "Phoenix","Dragon","Orb","Crown","Warden"
    ];

    const magicalTerms = [
        "of Power","of Eternity","of the Ancients",
        "of Shadows","of Light","of the Void",
        "of Time","of the Elements","of Chaos","of Harmony"
    ];

    function generateSpellName() {
        // Why use Math.floor(Math.random() * array.length)?
        // This is the standard way to get a random index from an array.
        //
        // Here’s the breakdown:
        // 	1.	Math.random()
        // Returns a floating-point number between 0 (inclusive) and 1 (exclusive), like 0.329483.
        // 	2.	Math.random() * array.length
        // Scales the random number to the array’s length.
        // Example: If array.length is 5, the result is between 0 and 4.999....
        // 	3.	Math.floor(...)
        // Rounds down to the nearest whole number, so you get a valid index: 0, 1, 2, 3, or 4.
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const magicalTerm = magicalTerms[Math.floor(Math.random() * magicalTerms.length)];

        return `${adjective} ${noun} ${magicalTerm}`;
    }

    /*
    VERSION WITH ALERT:
    alert("The wizard is casting  " + generateSpellName());
    */

    /*
    Version with direct DOM manipulation (<div>) instead of the above alert, where you append to the first div:
    const output = document.getElementById("output");
    const newOutput =  document.createElement("div");
    newOutput.innerText = "The wizard is casting " + generateSpellName();
    output.append(newOutput);
    */

    // VERSION ABOVE WITH document.body.append(). div in html with id=output does not need to be there.
    const newDiv = document.createElement("div");
    newDiv.classList.add("spell"); // if you want to add style to the newly created div.
    newDiv.innerText = "The wizard is casting ✨ " + generateSpellName();
    document.body.append(newDiv);
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    button.addEventListener("click", CastRandomSpell )
});
