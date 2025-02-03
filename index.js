document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
});

function downloadPDF() {
    const pdfUrl = 'Mohamed Aburar S.pdf';
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Mohamed Aburar S.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
} 

const viewMoreButtons = document.querySelectorAll('.viewMore');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = button.dataset.modal;
    document.getElementById(modalId).style.display = 'flex';
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
