document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  const clickButton = () => {
    console.log('hi');
    const input = document.getElementById('favorite-input');
    const li = document.createElement("li");
    const ul = document.getElementById("sf-places");
    li.text = input.value;
    ul.append(li);
    input.value = '';
    
  }

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });
  const button = document.getElementsByClassName("favorite-submit")[0];
  button.addEventListener("click", clickButton);
  



  // adding SF places as list items
  

  // --- your code here!



  // adding new photos

  // --- your code here!



});
