const iconEye = document.querySelector(".icon-tabler-eye");
const iconEyeOff = document.querySelector(".icon-tabler-eye-off");

iconEye.addEventListener("click", (e) =>{
    if (input.type == "password") {
        input.type = "text";
        iconEye.classList.add("none");
        iconEyeOff.classList.add("block");
    } else {
        input.type = "password";
        iconEye.classList.add("block");
        iconEyeOff.classList.add("none");
    }
})

iconEyeOff.addEventListener("click", (e) =>{
    if (input.type == "password") {
        input.type = "text";
        iconEye.classList.add("none");
        iconEyeOff.classList.add("block");
    } else {
        input.type = "password";
        iconEye.classList.add("block");
        iconEyeOff.classList.remove("block");
        iconEyeOff.classList.add("none");
    }
})