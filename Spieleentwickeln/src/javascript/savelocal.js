document.addEventListener("DOMContentLoaded", loadLocal);
function loadLocal() {
    const entry = "characterData";
    const raw = localStorage.getItem(entry);

    if (!raw) return;

    const all = JSON.parse(raw);
    if (!Array.isArray(all)) return;

    const [name, age, classe, gender, avatar, color, difficulty] = all;

    document.getElementById("name").value = name ?? "";
    document.getElementById("age").value = age ?? "";
    document.getElementById("classe").value = classe ?? "1";
    document.getElementById("avatar").value = avatar ?? "1";
    document.getElementById("color").value = color ?? "1";
    document.getElementById("difficulty").value = difficulty ?? "1";
}


function saveLocal() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const classe = document.getElementById("classe").value;
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