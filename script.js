//your code here!

//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  let itemCount = 10; // Initial number of list items
  let loading = false; // Flag to prevent multiple simultaneous loads

  // Function to create a list item element
  function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  // Function to add more items to the list
  function addMoreItems() {
    if (!loading) {
      loading = true;
      setTimeout(() => {
        for (let i = itemCount + 1; i <= itemCount + 10; i++) {
          list.appendChild(createListItem(`Item ${i}`));
        }
        itemCount += 10;
        loading = false;
      }, 1000); // Simulating a delay for loading more items
    }
  }

  // Add initial items
  for (let i = 1; i <= itemCount; i++) {
    list.appendChild(createListItem(`Item ${i}`));
  }

  // Add a scroll event listener to implement infinite scroll
  list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight - 10) {
      addMoreItems();
    }
  });
});