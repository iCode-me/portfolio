"use strict";

gsap.from('.text', {
  opacity: 0,
  duration: 1.5,
  y: -50,
  ease: 'Power2.easeInOut'
});
gsap.from('.image', {
  duration: 2.5,
  y: 30,
  opacity: 0,
  delay: 1.1
});