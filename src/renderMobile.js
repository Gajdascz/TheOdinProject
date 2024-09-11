const page = document.querySelector('.mobile-webpage');

const renderMobilePage = (pageTitle, pageText) => {
  page.querySelector('.mobile-page-title').textContent = pageTitle;
  page.querySelector('.mobile-page-text').textContent = pageText;
};

export { renderMobilePage };
