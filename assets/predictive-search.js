class PredictiveSearch extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector("#predictive-search");
    
    if (this.input && this.predictiveSearchResults) {
      this.input.addEventListener(
        "input",
        this.debounce((e) => {
          this.onchange(e);
        }, 300).bind(this)
      );
      this.input.addEventListener("keydown", this.onKeydown.bind(this));
    }
  }

  onchange() {
    const searchTerm = this.input.value.trim();
    if (!searchTerm.length) {
      this.close();
      return;
    }
    this.getSearchResults(searchTerm);
  }

  async getSearchResults(searchTerm) {
  try {
    const response = await fetch(
      `/search/suggest?q=${encodeURIComponent(searchTerm)}&resources[type]=product,collection,article,page,query&resources[limit]=10&section_id=predictive-search`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    this.predictiveSearchResults.innerHTML = text;
    this.open();
  } catch (error) {
    this.close();
    console.error("Predictive search error:", error);
  }
}

  open() {
    this.predictiveSearchResults.style.display = "block";
    this.input.setAttribute("aria-expanded", "true");
  }

  close() {
    this.predictiveSearchResults.style.display = "none";
    this.input.setAttribute("aria-expanded", "false");
  }

  onKeydown(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define("predictive-search", PredictiveSearch);