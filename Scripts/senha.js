document.querySelector("form").addEventListener("submit", function(event) {
    let senha1 = document.getElementById("senha1").value;
    let senha2 = document.getElementById("senha2").value;

    if (senha1 !== senha2) {
        event.preventDefault();
        document.getElementById("senha2").classList.add("is-invalid");
    } else {
        document.getElementById("senha2").classList.remove("is-invalid");
    }
});