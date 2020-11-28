var currentTab = 0; // Before we switch to first tab (janky)
switchTab(0); // Display the first tab


function switchTab(delta) {
  var tabs = document.getElementsByClassName("tab");
  newTab = (currentTab - delta + tabs.length) % tabs.length;
  console.log(newTab)
  tabs[currentTab].style.display = "none";
  tabs[newTab].style.display = "block";
  currentTab = newTab;
}

function get_slide_name(base_url, slide_number) {
  return base_url + "/assets/slides/KennardDefense." + slidenumber.padstart(3, 0) + ".png"
}
