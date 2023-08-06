const radioButton = document.querySelectorAll("input[type='radio']");
const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card");
const thirdCard = document.getElementById("third-card");

const firstTableContainer = document.getElementById("first-table-container");
const secondTableContainer = document.getElementById("second-table-container");
const thirdTableContainer = document.getElementById("third-table-container");

const options = `<section class="first-row">
<div class="first-row-mid-col">
    <div class="">
        <div class="">
            <table>
                <tr>
                    <th></th>
                    <th class="tb-heading">Size</th>
                    <th class="tb-heading">Colour</th>
                </tr>
                <tr>
                    <td class="count">#1</td>
                    <td>
                        <select name="size1" id="size1">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </td>

                    <td>
                        <select name="colour1" id="colour1">
                            <option value="Colour">Colour</option>
                            <option value="Red">Red</option>
                            <option value="Black">Black</option>
                            <option value="Orange">Orange</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td class="count">#2</td>
                    <td>
                        <select name="size2" id="size2">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </td>

                    <td>
                        <select name="colour2" id="colour2">
                            <option value="Colour">Colour</option>
                            <option value="Red">Red</option>
                            <option value="Black">Black</option>
                            <option value="Orange">Orange</option>
                        </select>
                    </td>
                </tr>

            </table>
        </div>
    </div>
</div>
<div class="first-row-last-col">
</div>
</section>`;

const handleRadio = (e) => {
  if (e.target.value === "1") {
    firstTableContainer.innerHTML = options;
    firstCard.classList.add("selected-card");

    // removing the table from others
    secondTableContainer.innerHTML = "";
    thirdTableContainer.innerHTML = "";

    // removing the class from others
    secondCard.classList.remove("selected-card");
    thirdCard.classList.remove("selected-card");
  } else if (e.target.value === "2") {
    secondTableContainer.innerHTML += options;
    secondCard.classList.add("selected-card");

    // removing the table from others
    firstTableContainer.innerHTML = "";
    thirdTableContainer.innerHTML = "";

    // removing the class from others
    firstCard.classList.remove("selected-card");
    thirdCard.classList.remove("selected-card");
  } else if (e.target.value === "3") {
    thirdTableContainer.innerHTML += options;
    thirdCard.classList.add("selected-card");

    // removing the table from others
    secondTableContainer.innerHTML = "";
    firstTableContainer.innerHTML = "";

    // removing the class from others
    firstCard.classList.remove("selected-card");
    secondCard.classList.remove("selected-card");
  }
};

radioButton.forEach((r) => r.addEventListener("change", handleRadio));