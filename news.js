class News{
    constructor(){
        this.key = "61a9808307634c16984c73d265b82657";
    }
    async createUrl(input,country,category){
        let url = "http://newsapi.org/v2/";
        //if we have input value => everything , when we have countery or category or both or all input and selected we can use => top-headlines 
        if(country === "" && category === ""){
            url += "everything?";
        }else{
            url += "top-headlines?";
        }
        //append input field value
        if(input !== ""){
            url += `q=${input}&`;
        }
        //append country field value
        if(country !== ""){
            url += `country=${country}&`;
        }
        //append category field value
        if(category !== ""){
            url += `category=${category}&`;
        }
        //use key
        url += `apiKey=${this.key}`;
        
        //creatin a fetch
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
}