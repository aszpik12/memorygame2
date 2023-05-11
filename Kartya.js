class Kartya {
  #adat;
  #divElem;
  #imgElem;
  constructor(szuloElem, kep) {
    this.#adat = kep
    console.log("Kartya");
    szuloElem.append(`
          <div>
              <img src="${this.#adat}" alt="kep">
          </div>
      `);

    this.#divElem = szuloElem.children("div:last-child");
    this.#imgElem = this.#divElem.children("img:last-child");
    this.setKep("kepek/hatter.jpg")
    this.#divElem.on("click",()=>{
        this.setKep(this.#adat)
        this.trigger()
    })

  }

  setKep(kep){
    this.#imgElem.attr("src", kep)
  }

  getAdat() {
    return this.#adat;
  }

  trigger() {
    const ev = new CustomEvent("fordit", { detail: this.#adat });
    window.dispatchEvent(ev);
  }
}
export default Kartya;
