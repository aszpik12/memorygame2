import Kartya from "./Kartya.js";

class Jatekter {
  #kepekLista = [];
  #kivalasztottKepekLista = [];
  constructor(KEPEKLISTA) {
    this.#kepekLista = KEPEKLISTA;
    console.log("Jatekter");
    const ARTICLE = $("article");
    for (let i = 0; i < this.#kepekLista.length; i++) {
      const kartya = new Kartya(ARTICLE, this.#kepekLista[i]);
    }

    $(window).on("fordit", (event)=>{
        this.#kivalasztottKepekLista.push(event.detail)
        console.log(this.#kivalasztottKepekLista)
    })

  }
}
export default Jatekter;
