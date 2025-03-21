document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
      .then(response => response.json())
      .then(data => renderCategories(data));
  });
  
  function renderCategories(data) {
    const main = document.getElementById("categories");
    main.innerHTML = "";
  
    data.forEach(category => {
      const section = document.createElement("section");
      section.classList.add("category");
      section.innerHTML = `<h2>${category.title}</h2><ul>` +
        category.links.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join("") +
        `</ul>`;
      main.appendChild(section);
    });
  }
  
  function searchSites() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const categories = document.querySelectorAll(".category");
  
    categories.forEach(category => {
      const links = category.querySelectorAll("li");
      let visible = false;
  
      links.forEach(link => {
        if (link.textContent.toLowerCase().includes(query)) {
          link.style.display = "block";
          visible = true;
        } else {
          link.style.display = "none";
        }
      });
  
      category.style.display = visible ? "block" : "none";
    });
  }
  