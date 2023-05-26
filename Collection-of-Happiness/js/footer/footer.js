class footer{
    footerElement;
    footerPElement;
    placeToRenderFooter;

    constructor(placeToRenderFooter){
        this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];

        this.footerElement = document.createElement("footer");
        this.footerElement.classList = "footer";

        
        this.footerPElement = document.createElement("p");
        this.footerPElement.classList = "footer__p";
        this.footerPElement.innerText = "Mvg Mo Alsayed"
    }

    render(){
        this.footerElement.appendChild(this.footerPElement);

        this.placeToRenderFooter.appendChild(this.footerElement);
    }
}
