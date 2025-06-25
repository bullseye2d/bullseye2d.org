document.addEventListener("DOMContentLoaded", (event) => {
  // ----------------------------------------------------------------------
  // NavBar Highlighting
  // ----------------------------------------------------------------------
  const basepath = new URL(document.location.href).toString();

  const navLinks = Array.from(
    document
      .querySelector("#page-header")
      ?.querySelectorAll("nav ul#nav-menu li a[href]"),
  );

  const highlight = (el) => {
    for (const link of navLinks) {
      link.closest("li").classList.remove("active");
    }
    el?.closest("li").classList.add("active");
  };

  const hashLinks = navLinks.filter(
    (link) => link.hash != "" && document.querySelectorAll(link.hash),
  );

  const hashLinkExist = (id) => hashLinks.some((link) => link.hash === id);

  const sections = Array.from(document.querySelectorAll("section")).filter(
    (section) =>
      section.hasAttribute("id") &&
      hashLinkExist("#" + section.getAttribute("id")),
  );

  const currentPage = navLinks.find((link) => link.href === basepath) || null;
  
  const isShowcasePage = basepath.includes('/demos') || basepath.includes('/bullseye2d-demos') || basepath.includes('/boing-demo');
  const showcaseNavLink = navLinks.find((link) => link.getAttribute('href') === '/demos');

  const onScroll = () => {
    const pos = window.pageYOffset;
    const currentSectionId =
      sections
        .slice()
        .reverse()
        .find((s) => pos >= s.offsetTop - 60)?.id || null;

    if (currentSectionId) {
      for (const link of navLinks) {
        if (link.hash === "#" + currentSectionId) {
          highlight(link);
          break;
        }
      }
    } else {
      if (isShowcasePage && showcaseNavLink) {
        highlight(showcaseNavLink);
      } else {
        highlight(currentPage);
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ----------------------------------------------------------------------
  // Email Obfuscation
  // ----------------------------------------------------------------------
  const namePart = "nehcoj".split("").reverse().join("");
  const domainPart = "gro.d2eyesllub".split("").reverse().join("");
  const emailAddress = namePart + "@" + domainPart;
  const placeholders = document.getElementsByClassName("email-placeholder");
  for (const placeholder of placeholders) {
    placeholder.innerHTML =
      '<a href="mailto:' + emailAddress + '">' + emailAddress + "</a>";
  }
});
