import Kartya from "./Kartya.js";

class Jatekter {
  #kepekLista = [];
  #kivalasztottKepekLista = [];
  constructor(KEPEKLISTA) {
    this.#kepekLista = KEPEKLISTA;
    console.log("Jatekter");
    const ARTICLE = $("article");
    for (let i = 0; i < this.#kepekLista.length; i++) {
      let random = getRandomInt(this.#kepekLista.length)
      const kartya = new Kartya(ARTICLE, this.#kepekLista[random]);
    }

    $(window).on("fordit", (event)=>{
        this.#kivalasztottKepekLista.push(event.detail)
        console.log(this.#kivalasztottKepekLista)
    })

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

  }
}
export default Jatekter;
