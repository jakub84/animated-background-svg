const buttonAction = document.querySelector('#btn-action');



const animateBackground = () => {
    console.log('animate');
    const morphing = anime({
        targets: ".bkg-animate",
        points: [
          { value: "1366,768 0,768 0,0 815,0 1215,115 " },
          { value: "1366,768 0,768 0,0 194.3,0 506,606" },
          { value: "1366,768 0,768 0,0 0,0 66,503" },
          { value: "1366,768 0,768 0,0 0,0 0,768" },
        ],
        easing: "easeOutQuad",
        duration: 2000,
        loop: false,
      });
}







buttonAction.addEventListener('click', animateBackground);
