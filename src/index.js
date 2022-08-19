import "./styles.css";

const onClickAdd = () => {
  // get text-box value -> velue init
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// delete from list
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// create incomplete-list
const createIncompleteList = (text) => {
  // make div
  const div = document.createElement("div");
  div.className = "list-row";

  // make list
  const li = document.createElement("li");
  li.innerText = text;

  // make button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);

    // add complete-list
    // get TODO-text
    const text = completeTarget.firstElementChild.innerText;

    //init
    completeTarget.textContent = null;

    //make li tag
    const li = document.createElement("li");
    li.innerText = text;

    //make return button
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //set div tag child
    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    // set complete-list append child
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // delete pushed button tag(div)
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // set div child element
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add incomplete-list
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
