let blogPosts = [
  {
    id: 1,
    title: "Mastering CSS Custom Properties for Dynamic Theming",
    date: "September 14, 2026",
    content:
      "Toggling themes dynamically often leads to layout flashes or messy state. By pairing CSS variables with OKLCH color spaces and a data-attribute switch, you can achieve smooth transitions and consistent perceived brightness across both dark and light modes.",
    visible: false,
  },
  {
    id: 2,
    title: "Building Keyboard-Accessible UI Components from Scratch",
    date: "August 28, 2026",
    content:
      "A great interface works seamlessly whether someone is using a trackpad, a screen reader, or just their keyboard. Here is how to handle focus trapping, roving tab indexes, and escape key bindings cleanly without relying on bloated external dependencies.",
    visible: false,
  },
  {
    id: 3,
    title: "Optimizing Client-Side State: When Not to Overcomplicate",
    date: "August 10, 2026",
    content:
      "It is tempting to drop a heavy global store into every small application. However, lifting state thoughtfully, leveraging URL query params, and using local storage hooks often provide a faster, significantly cleaner development workflow.",
    visible: false,
  },
  {
    id: 4,
    title: "Crafting Micro-Interactions That Feel Responsive and Snappy",
    date: "July 24, 2026",
    content:
      "Small details like subtle card tilts, cursor spotlight gradients, and reactive hover borders turn a flat webpage into a tactile product. The key is leaning into hardware-accelerated transforms and lightweight event delegation.",
    visible: false,
  },
  {
    id: 5,
    title: "Why Modern Layouts Belong in CSS Grid and Flexbox",
    date: "July 02, 2026",
    content:
      "Moving beyond rigid UI frameworks gives you complete control over responsive breakpoints. With CSS Grid's repeat and minmax functions, building resilient layouts that naturally reflow across screen sizes requires only a handful of lines.",
    visible: false,
  },
];

const cardContainer = document.querySelector(".blog-card-container");
const searchInput = document.querySelector(".blog-search-input");
const searchButton = document.querySelector(".search-input-button");

function addBlogPost({ index, data }) {
  const { id, title, date, content, visible } = data;
  const newDiv = document.createElement("div");
  newDiv.className = `blog-card ${!visible && "hidden"}`;

  const t = document.createElement("h2");
  t.textContent = title;

  const d = document.createElement("p");
  d.textContent = date;

  const p = document.createElement("p");
  p.textContent = content;

  const pContainer = document.createElement("div");
  pContainer.className = "text-container";
  pContainer.appendChild(p);

  newDiv.appendChild(t);
  newDiv.appendChild(d);
  newDiv.appendChild(pContainer);
  cardContainer.appendChild(newDiv);

  // toggles the visibility of the text content
  newDiv.addEventListener("click", (e) => {
    const visible = !blogPosts[index].visible;
    blogPosts = blogPosts.with(index, { ...data, visible });

    (visible);

    newDiv.className = `blog-card ${!visible && "hidden"}`;
  });
}





searchButton.addEventListener("click", filterBlogPosts)

searchInput.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    filterBlogPosts()
  }
  
});

function filterBlogPosts() {
  searchInput.blur()
    cardContainer.innerHTML = ""
    const value = searchInput.value.trim()
    const filteredPosts = value
      ? blogPosts.filter(({ title }) => title.includes(value))
      : blogPosts;
    filteredPosts.forEach((p, i) => addBlogPost({ index: i, data: p }));

  
}




blogPosts.forEach((p, i) => addBlogPost({ index: i, data: p }));