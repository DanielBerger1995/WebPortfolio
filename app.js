const ip = document.getElementById("hideBox");
const ip1 = document.getElementById("hideBox1");
const ip2 = document.getElementById("hideBox2");
const ip3 = document.getElementById("hideBox3");
const pageopac = document.getElementById("inf");
const logo = document.getElementById("log0");
const rightLink = document.getElementById("right_link");
const rightLink1 = document.getElementById("right_link1");
const openInfo = document.getElementById("openInfo");
const nav = document.getElementById("navBar");


function info() {
    ip.classList.add("smallbox");
    ip1.classList.add("smallbox");
    ip2.classList.add("smallbox");
    ip3.classList.add("smallbox");
    pageopac.classList.add("info_page_opa");
    logo.classList.add("logowhite");
    rightLink.classList.add("gowhite");
    rightLink1.classList.add("gowhite");
    openInfo.classList.add("openinfo");
    nav.classList.add("navblack");
}

function home() {
    ip.classList.remove("smallbox");
    ip1.classList.remove("smallbox");
    ip2.classList.remove("smallbox");
    ip3.classList.remove("smallbox");
    pageopac.classList.remove("info_page_opa");
    logo.classList.remove("logowhite");
    rightLink.classList.remove("gowhite");
    rightLink1.classList.remove("gowhite");
    openInfo.classList.remove("openinfo");
    nav.classList.remove("navblack");

}

function archive() {
    alert("Sorry this page is still under maintainance :.(");
}