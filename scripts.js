function buttonclicked() {
    const min = Math.ceil(document.getElementById("min").value)
    const max = Math.floor(document.getElementById("max").value)

    const resut = Math.floor(Math.random() * (max - min + 1) + min);

    alert(resut);
}