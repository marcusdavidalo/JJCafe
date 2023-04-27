const itemsList = document.querySelector(".items-list");
const totalPrice = document.querySelector(".total-price");
let cartItems = [];

function addItem(product, price) {
  const item = { product, price };
  const existingItem = cartItems.find((i) => i.product === product);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    item.quantity = 1;
    cartItems.push(item);
  }

  updateCart();
}

function updateCart() {
  itemsList.innerHTML = "";
  let total = 0;

  for (let item of cartItems) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.product} x ${item.quantity} = $${(
      item.price * item.quantity
    ).toFixed(2)} 
                        <button type="button" class="clear-item" data-product="${
                          item.product
                        }">Clear</button> 
                        <button type="button" class="remove-item" data-product="${
                          item.product
                        }">Remove</button>`;
    itemsList.appendChild(listItem);
    total += item.price * item.quantity;
  }

  totalPrice.textContent = total.toFixed(2);

  // Add event listeners to clear and remove buttons
  const clearButtons = document.querySelectorAll(".clear-item");
  const removeButtons = document.querySelectorAll(".remove-item");

  clearButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-product");
      const index = cartItems.findIndex((item) => item.product === productName);
      cartItems.splice(index, 1);
      updateCart();
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-product");
      const item = cartItems.find((item) => item.product === productName);

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        const index = cartItems.findIndex(
          (item) => item.product === productName
        );
        cartItems.splice(index, 1);
      }

      updateCart();
    });
  });
}

// General Modals
// Open Modal Hot & Cold Drinks JS
function openModalDrinksHC(itemName, itemPrice) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h3>Modify ${itemName} to your liking!</h3>
        <hr>
        <form onsubmit="addItem('${itemName}', ${itemPrice}); closeModal(); return false;">
          <label for="${itemName}-sugar">Sugar:</label>
          <input type="number" id="${itemName}-sugar" name="${itemName}-sugar" min="0" max="5" value="0">
          <p> 1 = 1 packet of sugar, 2 = 2 packets of sugar, etc.</p>
          <label for="${itemName}-milk">Milk:</label>
          <select id="${itemName}-milk" name="${itemName}-milk">
            <option value="none">None</option>
            <option value="regular">Regular</option>
            <option value="soy">Soy</option>
            <option value="almond">Almond</option>
          </select>
          <br>
          <label for="${itemName}-hotorcold">Hot Or Cold:</label>
          <input type="radio" id="hot" name="hotcold" value="hot">
            <label for="hot">Hot</label>
            <input type="radio" id="cold" name="hotcold" value="cold">
            <label for="cold">Cold</label>
          <br>
          <input type="submit" value="Add to receipt">
        </form>
      </div>
    `;
  modal.style.display = "block";

  // Get the close button element and add a click event listener
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
}

// Pastries Modal JS
function openModalPastries(itemName, itemPrice) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h3>Change ${itemName} to your liking</h3>
        <form onsubmit="addItem('${itemName}', ${itemPrice}); closeModal(); return false;">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <h3>
            </div>
        </form>
      </div>
    `;
  modal.style.display = "block";

  // Get the close button element and add a click event listener
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
}

function openModalExtras(itemName, itemPrice) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h3>Change ${itemName} to your liking</h3>
        <form onsubmit="addItem('${itemName}', ${itemPrice}); closeModal(); return false;">
          <label for="${itemName}-sugar">Sugar:</label>
          <input type="number" id="${itemName}-sugar" name="${itemName}-sugar" min="0" max="5" value="0">
          <br>
          <label for="${itemName}-milk">Milk:</label>
          <select id="${itemName}-milk" name="${itemName}-milk">
            <option value="none">None</option>
            <option value="regular">Regular</option>
            <option value="soy">Soy</option>
            <option value="almond">Almond</option>
          </select>
          <br>
          <input type="submit" value="Add to receipt">
        </form>
      </div>
    `;
  modal.style.display = "block";

  // Get the close button element and add a click event listener
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
}

function openModalExtras(itemName, itemPrice) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h3>Change ${itemName} to your liking</h3>
        <form onsubmit="addItem('${itemName}', ${itemPrice}); closeModal(); return false;">
          <label for="${itemName}-sugar">Sugar:</label>
          <input type="number" id="${itemName}-sugar" name="${itemName}-sugar" min="0" max="5" value="0">
          <br>
          <label for="${itemName}-milk">Milk:</label>
          <select id="${itemName}-milk" name="${itemName}-milk">
            <option value="none">None</option>
            <option value="regular">Regular</option>
            <option value="soy">Soy</option>
            <option value="almond">Almond</option>
          </select>
          <br>
          <input type="submit" value="Add to receipt">
        </form>
      </div>
    `;
  modal.style.display = "block";

  // Get the close button element and add a click event listener
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
}

// Specific Modals
// Cake Modal JS
function openModalCake(itemName, itemPrice) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="closeModal()">&times;</span>
          <h3>Change ${itemName} to your liking</h3>
          <form onsubmit="addItem('${itemName}', ${itemPrice}); closeModal(); return false;">
            <label for="${itemName}-size">Size:</label>
            <select id="${itemName}-size" name="${itemName}-size">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <br>
            <input type="submit" value="Add to receipt">
          </form>
        </div>
      `;
  modal.style.display = "block";

  // Get the close button element and add a click event listener
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", closeModal);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  modal.innerHTML = ""; // Clear the contents of the modal
}
