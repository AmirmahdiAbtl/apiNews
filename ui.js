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
    showNews(news){
        console.log(news)
        let result = document.querySelector(".result");
        news.forEach(element => {
            const title = element.title.split("-");
            const description = element.description;
            const url = element.url;
            result.innerHTML +=`
             <div class="item">
                <div class="item-title">
                    <h3>${title}</h3>
                </div>
                <div class="item-content">${description}</div>
                <button class="item-btn"><a href="${url}">Full Content</a></button>
            </div> 
            `
        });
    }
    removeNews(){
        let result = document.querySelector(".result");
        result.innerHTML = "";
    }
}