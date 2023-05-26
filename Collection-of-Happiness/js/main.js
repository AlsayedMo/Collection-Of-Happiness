
// Main
class main {
    leftside;
    rightside;
    placeToRenderMain

    constructor(placeToRenderMain, data) {

        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "collection__main";

        this.rightside = new rightside(this.mainElement, data);

        this.leftside = new leftside(this.mainElement, this.rightside);
    }

    makeCardsFromData(data) {
        this.leftside.makeCardsFromData(data);
    }

    render() {
        this.placeToRenderMain.appendChild(this.mainElement);
        this.leftside.render();
        this.rightside.render();
    }
}
//App

class App {
    header;
    footer;
    main;

    constructor() {
        this.header = new header("body");
        this.footer = new footer("body");

        this.Api = new Api("./data/data.json");
        this.Api
            .getData().then((data) => {
                this.main = new main("body", data);

                this.main.makeCardsFromData(data);
                this.header.render();
                this.main.render();
                this.footer.render();
            });



    }
}
const app = new App();