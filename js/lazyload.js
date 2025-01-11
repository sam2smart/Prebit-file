document.addEventListener('DOMContentLoaded', function () {
    const ads = document.querySelectorAll('.ad-slot');
  
    const lazyLoad = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const adSlotId = entry.target.id;
          googletag.cmd.push(function () {
            googletag.display(adSlotId);
          });
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(lazyLoad, { threshold: 0.5 });
    ads.forEach(ad => observer.observe(ad));
  });
  