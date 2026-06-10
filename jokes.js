async function getJoke() {
    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        alert(data.setup + "\n\n" + data.punchline);
    } catch (err) {
        alert("Error!! please try again!");
        console.error(err);
    }
}