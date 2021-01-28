class UI{

    printMSG(message){
        const tagp = document.querySelector(".p");
        const msg = document.querySelector(".msg");
        tagp.innerHTML =
        `
            <li>${message}</li>
        `;
        msg.style.display = "flex";
        msg.appendChild(tagp);
    }
    removeMSG(){
        const msg = document.querySelector(".msg");
        document.querySelector(".p").innerHTML = "";
        msg.style.display = "none";
    }
}