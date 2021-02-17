const currentUrl = window.location.href;
const isLocalhostServer =
  currentUrl.startsWith("http://locahost") ||
  currentUrl.startsWith("http://127.0.0.1");
const rootDepth = isLocalhostServer ? 0 : 2; // If not on localhost, root is http://users.jyu.fi/~eksasipi/KOTEA361, so we need to remove 2 from getRelativeRootPath calculation

// Gets relative path to root based on window.location.pathname of current directory
const getRelativePathToRoot = () => {
  const currentPath = window.location.pathname;
  const depth = currentPath.split("/").length - 2 - rootDepth; // - 2 to take empty levels out (e.g. pathname /ot2/ returns ["", "ot2", ""] -> path is 1 depth long)
  const depthFixed = depth < 0 ? 0 : depth; // Earlier line breaks if path is root without / (e.g. http://localhost, not http://localhost/), fix by checking if depth is ;
  let relativePathToRoot = "";
  for (let i = 0; i < depthFixed; i++) {
    relativePathToRoot += "../";
  }
  return relativePathToRoot.length > 0 ? relativePathToRoot : "./";
};

const tasks = [
  {
    href: `${getRelativePathToRoot()}ot2`,
    title: "OT2",
  },
  {
    href: `${getRelativePathToRoot()}ot3`,
    title: "OT3",
  },
  {
    href: `${getRelativePathToRoot()}ot4`,
    title: "OT4",
  },
  {
    href: `${getRelativePathToRoot()}ot5`,
    title: "OT5",
  },
  {
    href: `${getRelativePathToRoot()}ot6`,
    title: "OT6",
  },
];

const joku = document.getElementById("tasks-nav");

const titleLi = document.createElement("li");
titleLi.textContent = "Oppimistehtävät";
titleLi.className = "font-weight-bold d-md-none";
joku.appendChild(titleLi);

tasks.forEach((task) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.className = "nav-item";
  a.className = "nav-link py-0";
  a.textContent = task.title;
  a.href = task.href;
  li.appendChild(a);
  joku.appendChild(li);
});

// NOT IN USE: General nav to all, requires some altering to malliratkaisu paths
// const navChildren = `
//   <button class="navbar-toggler navbar-light border" type="button" data-toggle="collapse" data-target="#main-navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse justify-content-between" id="main-navigation">
//     <ul class="navbar-nav align-items-center align-items-md-end py-2">
//       <li class="nav-item">
//         <a class="nav-link navbar-brand mr-1 py-0" href="./ohjeet">Ohjeet</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link mr-1 py-0" href="./nokkaelaimet/">Malliratkaisu</a>
//       </li>
//     </ul>
//     <!-- General nav for all of the tasks -->
//     <ul id="tasks-nav" class="navbar-nav align-items-center py-2">
//       ${tasks
//         .map(
//           (task) =>
//             `<li class="nav-item"><a class="nav-link py-0" href="${task.href}">${task.title}</a></li>`
//         )
//         .join("")}
//     </ul>
//   </div>
// `;

// const nav = document.getElementById("navigation");
// nav.innerHTML = navChildren;
