document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
});

function highlightActiveNav() {
  const navLinks = document.querySelectorAll("nav .nav-left a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const pageMap = {
    "ai": "index.html",
    "office": "index.html",
    "automation": "index.html",
    "홈": "index.html",
    "자기소개": "about.html",
    "소개": "about.html",
    "프로필": "about.html",
    "포트폴리오": "portfolio.html",
    "프로젝트": "portfolio.html",
    "공모전": "portfolio.html",
    "활동": "portfolio.html",
    "이력서": "resume.html",
    "경력": "resume.html",
    "학력": "resume.html",
    "연락처": "contact.html",
    "연락": "contact.html",
    "github": "contact.html",
    "notion": "contact.html",
    "이메일": "contact.html"
  };

  for (const keyword in pageMap) {
    if (query.includes(keyword)) {
      window.location.href = pageMap[keyword];
      return;
    }
  }

  alert(`"${query}"에 해당하는 정보를 찾을 수 없습니다.`);
}
