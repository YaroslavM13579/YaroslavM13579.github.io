// РАБОТА С МЕНЮ

const onChangeMenuNavDispatchEventListener = function (e) {
    const menu = document.querySelector('#menu');
    const input = document.getElementById('menuToggleInput')
    if (input.checked) {
        document.getElementById('navbar').style.right = "8px"
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "8px";
        menu.classList.add('shown');
    } else {
        document.getElementById('navbar').style.right = ""
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        menu.classList.remove('shown');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 75) { // 75 это k
        e.preventDefault();
        var event = new Event('change');
        // Dispatch it.
        const input = document.getElementById('menuToggleInput');
        input.checked ? input.checked = false : input.checked = true;
        input.dispatchEvent(event);
        // onChangeMenuNavDispatchEventListener();
    }
})
document.getElementById('menuToggleInput').addEventListener('change', onChangeMenuNavDispatchEventListener)