document.addEventListener("DOMContentLoaded", (event) => {
  var cards = document.querySelectorAll(".services-card");

  cards.forEach((card) => {
    // animating cards on hover
    // card body
    var cardLearn = card.querySelector(".service-text-learn");
    var cardDesc = card.querySelector(".service-text-desc");
    var cardItem = card.querySelector(".services-item");
    var cardTitle = card.querySelector(".service-card-title");
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.25,
        scale: 1,
        zIndex: 3,
        margin: "-50px",
        ease: "back.out",
        opacity: 1,
        borderColor: "#002FFF"
      });
      gsap.to(cardItem, {
        filter: "grayscale(0%) blur(0px)",
        duration: 0.5,
        ease: "back",
      });
      gsap.to(cardDesc, {
        filter: "blur(0px)",
        ease: "back",
        delay: 0.4,
        duration: 1,
      });
      gsap.to(cardLearn, {
        filter: "blur(0px)",
        ease: "back",
        delay: 0.4,
        duration: 2,
      });
      gsap.to(cardTitle,{
        color: "#002FFF",
        duration: 1
      })
    });

    card.addEventListener("mouseleave", () => {
      // animating cards after hover
      // card body
      gsap.to(card, {
        duration: 0.25,
        scale: 0.8,
        zIndex: 1,
        ease: "back.out",
        margin: "-20",
        opacity: 0.5,
        borderColor: "white",
      });
      gsap.to(cardItem, {
        filter: "grayscale() blur(5px)",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(cardDesc, {
        filter: "blur(5px)",
        ease: "back",
        delay: 0.4,
        duration: 1,
      });
      gsap.to(cardLearn, {
        filter: "blur(5px)",
        ease: "back",
        delay: 0.4,
        duration: 1,
      });
      gsap.to(cardTitle,{
        color: "#0f014d",
        duration: 0.5
      })
    });
  });
});
