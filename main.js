function showModal() {
    const modal = document.getElementById("modal");
    modal.style = undefined;
    const dialog = document.querySelector("dialog");
    dialog.open = true;
    // document.documentElement.scrollTo = 0;
    document.documentElement.style.overflow = "hidden";
    const main = document.getElementById("main");
    main.style.display = "none";
    // main.scrollTo = 0;
    // main.style.overflow = "hidden"
    // const dialogBG = document.getElementById("dialog-bg");
    // dialogBG.style = undefined;
}

function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    const dialog = document.querySelector("dialog");
    dialog.open = false;
    document.documentElement.style = undefined;
    const main = document.getElementById("main");
    main.style = undefined;
    const dialogBG = document.getElementById("dialog-bg");
    dialogBG.style.display = "none";
}