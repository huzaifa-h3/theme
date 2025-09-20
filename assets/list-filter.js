document.addEventListener("DOMContentLoaded", () => {
  const filtersForm = document.getElementById("CollectionFiltersForm");
  const sortForm = document.getElementById("CollectionSortForm");

  // Filters submit
  document
    .querySelectorAll('#CollectionFiltersForm input[type="checkbox"], #CollectionFiltersForm input[type="number"]')
    .forEach((input) => {
      input.addEventListener("change", () => {
        filtersForm.submit();
      });
    });

  // Clear filter
  document.querySelectorAll(".clearFilter").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterBox = btn.closest(".filter-box");
      const inputs = filterBox.querySelectorAll('input[type="checkbox"], input[type="number"]');
      inputs.forEach((input) => {
        if (input.type === "checkbox") {
          input.checked = false;
        } else if (input.type === "number") {
          input.value = "";
        }
      });
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