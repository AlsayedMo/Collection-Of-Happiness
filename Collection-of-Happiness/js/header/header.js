class header{
    placeToRenderHeader;
    headerElement;
    listElement;
    titleElement;
    
    constructor(placeToRenderHeader){
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
        
        this.headerElement = document.createElement("header");
        this.headerElement.classList = "collection";
    
        this.listElement = document.createElement("ul");
        this.listElement.classList = "collection__list";
        
        this.titleElement = document.createElement("li");
        this.titleElement.classList = "collection__listItem--second";
        this.titleElement.innerText = "Collection of Happiness";
        
        this.logolistElement = document.createElement("li");
        this.logolistElement.classList = "collection__listItem--first";
    }
    
    render(){
        this.headerElement.appendChild(this.listElement);
        this.listElement.appendChild(this.titleElement);
    
        this.placeToRenderHeader.appendChild(this.headerElement);
    }
} 