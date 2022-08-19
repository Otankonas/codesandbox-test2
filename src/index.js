import "./styles.css";

const onClickAdd = () => {
  // get text-box value -> velue init
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // make div
  const div = document.createElement("div");
  div.className = "list-row";

  // make list
  const li = document.createElement("li");
  li.innerText = inputText;

  // make button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // delete pushed button tag(div)
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
