//Add to Cart Function

// General Modals
// Open Modal Hot & Cold Drinks JS
function openModalDrinksHC(itemName, itemPrice) {
  const modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "drink-modal";
  modal.tabIndex = "-1";
  modal.setAttribute("aria-labelledby", "drink-modal-label");
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="drink-modal-label">Drink Modifications</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="temp-select">Temperature:</label>
              <select class="form-select" id="temp-select">
                <option value="hot">Hot</option>
                <option value="cold">Iced</option>
              </select>
            </div>
            <div class="form-group">
              <label for="sugar-select">Sugar Percentage:</label>
              <select class="form-select" id="sugar-select">
                <option value="0%">0%</option>
                <option value="25%">25%</option>
                <option value="50%">50%</option>
                <option value="75%">75%</option>
                <option value="100%">100%</option>
              </select>
            </div>
            <div class="form-group">
              <label for="milk-select">Milk Type:</label>
              <select class="form-select" id="milk-select">
                <option value="regular">Regular</option>
                <option value="skim">Skim</option>
                <option value="soy">Soy</option>
                <option value="almond">Almond</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" onclick="addItem('${itemName}', ${itemPrice}); closeModal();">Add to Cart</button>
          </div>
        </div>
      </div>
    `;

  document.body.appendChild(modal);

  const drinkModal = new bootstrap.Modal(modal, {
    keyboard: true,
    focus: true,
  });

  drinkModal.show();
}
