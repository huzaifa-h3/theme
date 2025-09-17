document.addEventListener("DOMContentLoaded", () => {
  const filtersForm = document.getElementById("CollectionFiltersForm");
  const sortForm = document.getElementById("CollectionSortForm");
  const details = document.querySelectorAll("#CollectionFiltersForm details");

  // Filter box toggle
  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        details.forEach((others) => {
          if (others !== detail) {
            others.removeAttribute("open");
          }
        });
      }
    });
  });

  // Filters submit
  document
    .querySelectorAll('#CollectionFiltersForm input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        filtersForm.submit();
      });
    });

  // Clear filter
  document.querySelectorAll(".clearFilter").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterBox = btn.closest(".filter-box");
      const checkboxes = filterBox.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((cb) => (cb.checked = false));
      filtersForm.submit();
    });
  });

  // Sorting submit
  document
    .querySelectorAll('#CollectionSortForm input[name="sort_by"]')
    .forEach((radio) => {
      radio.addEventListener("change", () => {
        sortForm.submit(); 
      });
    });
});
