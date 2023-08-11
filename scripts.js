
let triggerButtons = document.getElementsByClassName("trigger-button");
triggerButtons = [...triggerButtons];

const modal = document.getElementById("custom-modal");
const customModelIframe = document.getElementById("custom-modal-iframe");
const customModelCloseButton = document.getElementById("custom-modal-close-btn");

triggerButtons.forEach(element => {
    element.addEventListener("click", function(){
        modal.style.opacity = 1;
        modal.style.visibility = "visible"
        customModelIframe.src = element.getAttribute("data-src");
    });
});

customModelCloseButton.addEventListener("click", function(){
    customModelIframe.src = "";
    modal.style.opacity = 0;
    modal.style.visibility = "hidden"
});

