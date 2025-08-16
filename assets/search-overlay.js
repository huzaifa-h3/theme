document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector("#search-trigger-btn")
  const searchBar = document.querySelector(".search_bar-overlay")
  const searchInput = document.querySelector(".search-input")
  const searchSubmitBtn = document.querySelector(".search-submit")

  const openSearchBar = () => {
    searchBar.style.transform = "translateY(0%)"
    setTimeout(() => searchInput.focus(), 100)
  }

  const closeSearchBar = () => {
    searchBar.style.transform = "translateY(-100%)"
  }

  searchButton.addEventListener("click", () => {
    openSearchBar()
  })

  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchButton.contains(e.target)) {
      closeSearchBar()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearchBar()
    }
  })

  searchInput.addEventListener("input", (e) => {
    if (searchInput.value.trim().length > 0) {
      searchSubmitBtn.style.display = "none"
    } else {
      searchSubmitBtn.style.display = "block"
    }
  })
})
