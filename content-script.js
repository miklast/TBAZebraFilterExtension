// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

console.log("help!");
let x = 0;

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    const a = document.querySelectorAll(".zebramotionworks-content svg g");
    console.log(a);

    onkeydown = (event) => {
      var x = parseInt(event.key);

      x--;
      if (x < 6) {
        if (a[x].style.display != "none") {
          console.log(a[x] + " display other");
          a[x].style.display = "none";
        } else {
          console.log(a[x] + " display none");
          a[x].style.display = "block";
        }
      }
    };
    // while (x < a.length) {
    //   a[x].style.visibility = "hidden";
    //   x++;
    // }
  }
});
