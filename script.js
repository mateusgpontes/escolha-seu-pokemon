function query (tag){
    return document.querySelector(tag)
}

const pokemons = query("#pokemons");
const img = query("img");

pokemons.addEventListener("change", function () {
    let options = this.options;
    let pokemonAtual = this.selectedIndex;

    if(pokemons.value == 1){
        console.log("teste")
        img.src = ("https://miro.medium.com/max/424/1*Hxptm5gIRc3HyYXzw5nfpw.png")
    }else if(pokemons.value == 2){
        img.src = ("https://www.tattoofun.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/b/u/bulbasaur_sm.jpg");
    }else if(pokemons.value == 3){
        img.src = ("http://img14.deviantart.net/e25a/i/2011/230/a/2/hi_res_squirtle_by_elektro_omega-d4708gi.png")
    }else{
        img.src = ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rJufcDa696_J0uLAMTvli0bih88I9ZIIO5TrvbcwN5HU51CM");
    }

    console.log("Mudou o pokemon para " + options[pokemonAtual].text);
});