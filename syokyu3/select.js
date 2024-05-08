document.addEventListener("DOMContentLoaded", function () {
    // Sサイズの数量選択
    let selectS = document.getElementById("amountSelectS");

    for (let i = 1; i <= 50; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectS.appendChild(option);
    }

    // Mサイズの数量選択
    let selectM = document.getElementById("amountSelectM");

    for (let i = 1; i <= 25; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectM.appendChild(option);
    }

    // Lサイズの数量選択
    let selectL = document.getElementById("amountSelectL");

    for (let i = 1; i <= 10; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectL.appendChild(option);
    }

    let btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        let selects = document.querySelectorAll("select");

        selects.forEach(function (select) {
            select.selectedIndex = 0;
        })
    });
});
