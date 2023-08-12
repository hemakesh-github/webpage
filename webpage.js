function knowfn() {
    var more_text = document.getElementById("more");
    var more_btn = document.getElementById("knowmore");

    if (more_btn.innerHTML === "know more"){
        more_text.style.display = "inline";
        more_btn.innerHTML = "know less";
    }
    else {
        more_text.style.display = "none";
        more_btn.innerHTML = "know more";
    }
}
