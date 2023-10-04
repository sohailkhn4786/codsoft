const inputs = document.querySelectorAll(".panel input")
const c = document.querySelector("#cel")
const f = document.querySelector("#far")
const k = document.querySelector("#kal")

inputs.forEach(input => {
    input.addEventListener("input", e => {
        const unit = e.target.id;
        const v = parseInt(e.target.value);

        if (unit === "cel") {
            f.value = parseFloat((v * 1.8) + 32).toFixed(4) * 1;
            k.value = parseFloat(v + 273.15).toFixed(4) * 1;
        }
        else if (unit === "far") {
            c.value = parseFloat((v - 32) * 5 / 9).toFixed(4) * 1;
            k.value = parseFloat(((v - 32) * 5 / 9) + 273.15).toFixed(4) * 1;
        }
        else if (unit === "kal") {
            c.value = parseFloat(v - 273.15).toFixed(4) * 1;
            f.value = parseFloat(((v - 273.15) * 9 / 5) + 32).toFixed(4) * 1;
        }
    });
});