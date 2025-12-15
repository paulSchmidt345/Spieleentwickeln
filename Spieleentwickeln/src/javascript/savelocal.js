function saveLocal() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const classe = document.getElementById("classe").value;
    const gender = document.getElementById("gender").value;
    const avatar = document.getElementById("avatar").value;
    const color = document.getElementById("color").value;
    const difficulty = document.getElementById("difficulty").value;
    const all = [name, age, classe, gender, avatar, color, difficulty];
    console.log(all);
    const entry ="characterData";
    localStorage.setItem(entry,JSON.stringify(all));
    const storage = JSON.parse(localStorage.getItem(entry));
    console.log(storage);
}
