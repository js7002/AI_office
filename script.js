// 웹사이트가 로드될 때 실행되는 기본 메시지
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded.");
  });
  
  // 검색 기능: 입력값을 기반으로 페이지 이동
  function searchSite() {
    const query = document.getElementById("searchInput").value.toLowerCase();
  
    // 키워드에 따라 연결할 페이지 매핑
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
  
    // 검색어가 포함된 키워드가 있으면 해당 페이지로 이동
    for (const keyword in pageMap) {
      if (query.includes(keyword)) {
        window.location.href = pageMap[keyword];
        return;
      }
    }
  
    // 일치하는 항목이 없을 경우
    alert(`"${query}"에 해당하는 정보를 찾을 수 없습니다.`);
  }
  