(() => {
  const animatables = document.querySelectorAll(".animates");
  const viewObs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.01) {
          const target = entry.target;
          lazyImages(target);
          if (!target.classList.contains("loads-img")) {
            target.classList.add("show");
          }
          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  animatables.forEach(animatable => viewObs.observe(animatable));
})();
