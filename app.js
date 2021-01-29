let ui = new UI();
let news = new News();

document.querySelector(".submit").addEventListener("click",submited);
function submited(e){
    e.preventDefault();
    const input = document.querySelector(".input").value;
    const country = document.querySelector("#country").value;
    const category = document.querySelector("#category").value;
    
    if(input !== "" || category !== "" || country !== ""){
        ui.removeMSG();
        news.createUrl(input,country,category).then((result)=>{
            // 
            const news = result.articles;
            if(news.length > 0){
                ui.removeNews();
                ui.showNews(news);
            }else{
                ui.printMSG("Sorry we dont have any news for your filters");
                ui.removeNews();
            }
        })
    }else{
        ui.printMSG("please Complited at last one filds");
        ui.removeNews();
    }
}