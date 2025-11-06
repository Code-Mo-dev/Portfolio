//* Arrow Back Page

let Arrow = document.getElementById("backPageArrow");

Arrow.onclick = function () {
  window.location.href = "../index.html";
};

//* view certificals

let ibmCertificate = document.querySelectorAll(".IBM-certifical");
let myIbmSection = document.querySelectorAll(".IBM-content");
let almdrasaCertificals = document.querySelectorAll(".certificals-almdrasa");
let almdrasaContent = document.querySelectorAll(".almdrasa-content");

function toggleDisplay(showList, hideList) {
  showList.forEach((el) => {
    el.style.display = el.style.display === "block" ? "none" : "block";
  });
  hideList.forEach((el) => {
    el.style.display = "none";
  });
}
ibmCertificate.forEach((el) => {
  el.onclick = function () {
    toggleDisplay(myIbmSection, almdrasaContent);
  };
});

almdrasaCertificals.forEach((el) => {
  el.onclick = function () {
    toggleDisplay(almdrasaContent, myIbmSection);
  };
});
//* for view IBM Certificate On Load Page
toggleDisplay(myIbmSection, almdrasaContent);

//* copy code in almdrasa Html Certificate

let viewChickIcon = document.getElementById("chick-icon");
let copy_icon = document.getElementById("copy-icon");

copy_icon.onclick = function() {
    const text = document.getElementById("code").textContent;
    navigator.clipboard.writeText(text);
    copy_icon.style.display = "none";
    viewChickIcon.style.display = "block";
}

//* copy code for Git & GitHub Certificate
let copyIconGitGithub = document.getElementById("copy-icon-git-github");
let chickIconGitGithub = document.getElementById("chick-icon-git-github");

if (copyIconGitGithub && chickIconGitGithub) {
    copyIconGitGithub.onclick = function() {
        const codeText = "733D974D54-733D8798A3-13F54BB97";
        navigator.clipboard.writeText(codeText);
        copyIconGitGithub.style.display = "none";
        chickIconGitGithub.style.display = "block";
    };
}