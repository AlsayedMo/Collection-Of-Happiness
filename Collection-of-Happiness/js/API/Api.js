class Api{
    url = "";
    data = null;

    constructor(newURL){
        this.url = newURL;
    }

   async getData(){
        await fetch(this.url)
            .then(function(response){
                return response.json();
            }).then((data) => {
                this.data = data.episodes;
            });

        return this.data;
    }
}
  