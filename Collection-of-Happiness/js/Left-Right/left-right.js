class rightside{
    mainElement;
    leftside;

    constructor(mainElement, data){
        this.mainElement = mainElement;
        this.data = data;

        this.rightsection = document.createElement("section");
        this.rightsection.classList = "collection__sectionright";

        this.rightArticle = document.createElement("article");
        this.rightArticle.classList = "collection__episode";

        this.rightFigure = document.createElement("figure");
        this.rightFigure.classList = "collection__figure";

        this.rightP = document.createElement("p");
        this.rightP.classList = "collection__p--titel";

        this.rightDate = document.createElement("p");
        this.rightDate.classList = "collection__p--datum";
        
        this.rightImage = document.createElement("img");
        this.rightImage.classList = "episode__preview";

        this.rightsum = document.createElement("p");
        this.rightsum.classList = "collection__paragraph";

        this.wrapper = document.createElement("div");
        this.wrapper.classList = "collection__wrapper";

        this.source = document.createElement("a");
        this.source.classList = "collection__source";
        this.src = data.url;
        this.source.src = this.source;

        this.audio = document.createElement("audio");
        this.audio.controls = true;
        this.src = data.audio;
        this.audio.src = this.src;
    }

    changeData(data){
        console.log(data);
        this.rightP.innerText = data.title;
        this.rightImage.src = data.img;
        this.rightDate.innerText = data.date;
        this.rightsum.innerText = data.summary;
        this.audio.innerText = "audio";
        this.source.innerText = "source";
        this.audio.src = data.audio;
        this.source.href = data.source;

        this.source.onclick = () => {
            console.log(data);
            this.source = window.open(data.url);
        }
    }

    render(){
        this.mainElement.appendChild(this.rightsection);
        this.rightsection.appendChild(this.rightArticle);
        this.rightArticle.appendChild(this.rightFigure);
        this.rightArticle.appendChild(this.rightsum);
        this.rightArticle.appendChild(this.wrapper);
        this.rightFigure.appendChild(this.rightP);
        this.rightFigure.appendChild(this.rightDate);
        this.rightFigure.appendChild(this.rightImage);
        this.wrapper.appendChild(this.audio);
        this.wrapper.appendChild(this.source);
    }
}

// LeftSide

class leftside{
    mainElement;
    rightside;

    constructor(mainElement, rightside){

        this.articleElement = document.createElement("article");
        this.articleElement.classList = "collection__article";

        this.mainElement = mainElement;
        this.rightside = rightside;
        this.leftsectionElement = document.createElement("section");
        this.leftsectionElement.classList = "collection__sectionleft";

        this.cardsElement = document.createElement("ul");
        this.cardsElement.classList = "collection__cards";


        
    }

    // makeCards 

    makeCardsFromData(data){
        this.cardsElement.innerHTML = "";
        console.log(data);
        for(let i = 0; i < 4; i ++){
            const random = Math.floor(Math.random() * data.length);
    
            this.cardElement = document.createElement("li");
            this.cardElement.classList = "collection__card";
    
            this.cardTitle = document.createElement("p");
            this.cardTitle.classList = "collection__p--titel";
            this.cardTitle.innerText = data[random].title;
    
            this.cardData = document.createElement("p");
            this.cardData.classList = "collection__p--datum";
            this.cardData.innerText = data[random].date;
    
            this.cardImg = document.createElement("img");
            this.cardImg.classList = "episode__preview";
            this.cardImg.src = data[random].img;

            this.rightside.changeData(data[random]);
    
            this.cardElement.onclick = () => {
                console.log(data);
                this.rightpanel.changeData(data[random]);
            }
    
            this.cardsElement.appendChild(this.cardElement);
            this.cardElement.appendChild(this.cardTitle);
            this.cardElement.appendChild(this.cardData);
            this.cardElement.appendChild(this.cardImg);
        }
    }
    

    render(){
        this.mainElement.appendChild(this.leftsectionElement);
        this.leftsectionElement.appendChild(this.cardsElement);
    }
}