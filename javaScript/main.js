//* typing effect
const text1 = `I have experience in designing and 
developing interactive user interfaces using HTML, CSS, JavaScript,
along with advanced frameworks like Vue.js and React.js.`;

const text2 = `Front-End Developer passionate about building modern, responsive, and user-friendly web applications. 
Seeking opportunities to apply my skills in HTML, CSS, JavaScript, and React to create impactful digital experiences.`;

const typingSpeed = 40;

let triggerPoint;

//* Check triggerPoint In Responsive
if (window.matchMedia("(max-width: 480px) and (max-height: 712px)").matches) {
  triggerPoint = 1200; //* very-small-mobile
} else if (window.matchMedia("(max-width: 481px)").matches) {
  triggerPoint = 1700; //* Mobile
} else if (window.matchMedia("(max-width: 768px)").matches) {
  triggerPoint = 1400; //* FoldMobile
} else if (window.matchMedia("(max-width:  992px)").matches) {
  triggerPoint = 2000; //* Tablet
} else if (
  window.matchMedia(
    "(min-width: 994px) and (max-width: 1366px) and (orientation: portrait)"
  ).matches
) {
  triggerPoint = 2300; //* IpadPro
} else if (
  window.matchMedia(
    "(min-width: 993px) and (max-width: 1200px) and (orientation: landscape)"
  ).matches
) {
  triggerPoint = 900; //* Laptop
} else {
  triggerPoint = 1800; //* DeskTop
}

function typeWriter(elementId, text, speed) {
  let i = 0;
  const el = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

//* counter numbers
function startCounter(element, target, speed) {
  let count = 0;
  let interval = setInterval(() => {
    if (count < target) {
      count++;
      element.textContent = count;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

//* nav menu
const iconVector = document.querySelector(".icon_vector");
const containerSections = document.querySelector(".container_sections_options");
const sectionOptions = document.querySelectorAll(".section_option a");

if (iconVector && containerSections) {
  iconVector.addEventListener("click", function () {
    this.classList.toggle("active");
    containerSections.classList.toggle("active");
  });

  sectionOptions.forEach((link) => {
    link.addEventListener("click", function () {
      containerSections.classList.remove("active");
      iconVector.classList.remove("active");
    });
  });
} else {
  console.error(
    "element icon_vector or container_sections_options is unknown "
  );
}

//* social buttons
let linkedInBtn = document.querySelector(".linkedin_button");
let youTubeBtn = document.querySelector(".youTube_button");
let gitHubBtn = document.querySelector(".gitHub_button");

if (linkedInBtn) {
  linkedInBtn.onclick = () => {
    window.open(
      "https://www.linkedin.com/in/mohamed-mahmoud-024714335/",
      "_blank"
    );
  };
}
if (youTubeBtn) {
  youTubeBtn.onclick = () => {
    window.open(
      "https://youtube.com/@code_mo_academy?si=wBK6T2LzIP93PX9Z",
      "_blank"
    );
  };
}
if (gitHubBtn) {
  gitHubBtn.onclick = () => {
    window.open("https://github.com/Code-Mo-dev", "_blank");
  };
}

//* Counters In Home section & Responsive Him
window.addEventListener("load", function () {
  // start typing for first text
  typeWriter("first-text", text1, typingSpeed);

  // counters
  let linkedInNum = document.getElementById("linkedin-num");
  let youTubeNum = document.getElementById("youTube-num");
  let gitHubNum = document.getElementById("gitHub-num");

  if (linkedInNum) startCounter(linkedInNum, 500, 5);
  if (youTubeNum) startCounter(youTubeNum, 1000, 1);
  if (gitHubNum) startCounter(gitHubNum, 100, 20);

  //* ✅ responsive font size function
  function setResponsiveFont() {
    let elements = [linkedInNum, youTubeNum, gitHubNum];

    elements.forEach((el) => {
      if (!el) return; //? return if element is undefined

      if (window.innerWidth < 500) {
        el.style.fontSize = "16px";
      } else {
        el.style.fontSize = "20px";
      }
    });
  }

  // تشغيلها أول مرة
  setResponsiveFont();
  // تشغيلها عند تغيير حجم الشاشة
  window.addEventListener("resize", setResponsiveFont);
});

//* trigger typing of second text on scroll
let hasStartedTyping = false;
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + window.innerHeight;
  if (scrollPosition >= triggerPoint && !hasStartedTyping) {
    hasStartedTyping = true;
    typeWriter("second-text", text2, typingSpeed);
  }
});

//! Section Languages

//* circle language progress
function startProgress(circle) {
  let progress = 0;
  let target = parseInt(circle.getAttribute("data-target"));
  let text = circle.querySelector("span");

  let interval = setInterval(() => {
    if (progress >= target) {
      clearInterval(interval);
    } else {
      progress++;
      circle.style.background = `conic-gradient(#7127BA ${progress}%, #ddd 0)`;
      text.textContent = progress + "%";
    }
  }, 20);
}

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startProgress(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".progress-circle").forEach((circle) => {
  observer.observe(circle);
});

//! section skills
const skillsSection = document.querySelector(".skills .card .container_bar");
const skillBars = document.querySelectorAll(".bar");

const watchSkills = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillBars.forEach((bar) => bar.classList.add("animate-bar"));
      } else {
        skillBars.forEach((bar) => bar.classList.remove("animate-bar"));
      }
    });
  },
  { threshold: 0.5 }
);

watchSkills.observe(skillsSection);


//! Section Education
//* location my edu
let locationMyEdu = document.getElementById("imageMyEdu");
if (locationMyEdu) {
  locationMyEdu.onclick = () => {
    window.open("https://maps.app.goo.gl/DUhzbNBCyuZHefHp9", "_blank");
  };
}

const textEdu = `    
 I studied at Delta Higher Institute for Computers and Administrative Information Systems and graduated in 2026. 
 As for my journey in mastering Front-End web development, that’s another story 😉 
`;
const typingSpeedEdu = 40;

function typeWriter(elementId, text, speed, callback) {
  let i = 0;
  const el = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      // بعد انتهاء الكتابة
      if (callback) callback();
    }
  }

  typing();
}

const section = document.querySelector(".education");

const observerEdu = new IntersectionObserver((entries, observerEdu) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // استدعاء الدالة مع كولباك لعرض العنصر بعد الانتهاء
      typeWriter("typed-text-edu", textEdu, typingSpeedEdu, () => {
        document.querySelector("#showLastPara").style.display = "block";
      });
      observerEdu.unobserve(entry.target);
    }
  });
});

observerEdu.observe(section);


