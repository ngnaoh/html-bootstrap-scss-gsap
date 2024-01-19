import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";
import { gsap } from "../node_modules/gsap/index.js";

gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");

function initBody() {
  gsap.fromTo(
    body,
    { opacity: 0 },
    { opacity: 1, ease: "power2.out", duration: 0.8 }
  );
}

function initNavScrollDirection() {
  const headerWrapper = document.getElementById(
    "30e72098-383f-aa99-a958-3300d8704335"
  );
  const headerContent = document.getElementById(
    "b97b71c1-00cf-46ef-af23-9047811c7286"
  );

  // 0 | 1 | 2 === "init" | "down" | "up"
  let status = 0;
  ScrollTrigger.create({
    markers: false,
    trigger: body,
    onUpdate: (self) => {
      if (status === 0) {
        gsap.fromTo(
          headerWrapper,
          { y: -120 },
          {
            duration: 0.4,
            ease: "none",
            y: 0,
          }
        );
        gsap.fromTo(
          headerContent,
          { y: -120, opacity: 0 },
          {
            delay: 0.1,
            duration: 0.6,
            ease: "power1.in",
            opacity: 1,
            y: 0,
          }
        );
        return (status = 2);
      }
      if (status === 2 && self.direction === 1) {
        gsap.to(headerWrapper, {
          duration: 0.2,
          ease: "none",
          y: -120,
        });
        return (status = 1);
      }
      if (status === 1 && self.direction === -1) {
        gsap.to(headerWrapper, {
          duration: 0.2,
          ease: "none",
          y: 0,
        });
        return (status = 2);
      }
    },
  });
}

function initNavPageAction() {
  const navPageButton = document.getElementById(
    "42926702-3c87-4671-84f3-6609078da82d"
  );
  const navDropdown = document.getElementById(
    "0e0088bc-9565-4350-8dda-b48aa4d3fe73"
  );
  let isOpen = false;
  const icon = navPageButton.children[1];
  function open() {
    gsap.to(icon, {
      duration: 0.2,
      rotation: -180,
    });
    gsap.fromTo(
      navDropdown,
      { y: 20 },
      {
        duration: 0.4,
        y: 0,
        opacity: 1,
        display: "block",
      }
    );
    window.addEventListener("click", handleClickOutside);
  }
  function close() {
    gsap.to(icon, {
      duration: 0.2,
      rotation: 0,
    });
    gsap.fromTo(
      navDropdown,
      { y: 0 },
      {
        duration: 0.4,
        y: 20,
        opacity: 0,
        display: "none",
      }
    );
    window.removeEventListener("click", handleClickOutside);
  }
  function handleClickOutside(e) {
    if (!navDropdown.contains(e.target) && !navPageButton.contains(e.target)) {
      isOpen = false;
      close();
    }
  }
  navPageButton.addEventListener("click", () => {
    isOpen = !isOpen;
    isOpen ? open() : close();
  });
}

function initCartAction() {
  const cartButton = document.getElementById(
    "599de042-68a7-db31-d61e-8274a547981c"
  );
  const cartWrapper = document.getElementById(
    "6a8848ef-4a81-4d02-8c3c-b259bf44c0ce"
  );
  const cart = document.getElementById("a7739a9c-0e9e-4ebd-b2e1-a925243fe0ad");
  const btnClose = document.getElementById(
    "30cc7fd5-652b-4246-96d5-a38c7637371e"
  );
  let isOpen = false;
  function open() {
    gsap.fromTo(
      cartWrapper,
      { opacity: 0 },
      {
        duration: 0.4,
        opacity: 1,
        display: "flex",
      }
    );
    gsap.fromTo(
      cart,
      { x: 100 },
      {
        duration: 0.4,
        x: 0,
      }
    );
    window.addEventListener("click", handleClickOutside);
    btnClose.addEventListener("click", handleClose);
  }
  function close() {
    gsap.fromTo(
      cartWrapper,
      { opacity: 1 },
      {
        duration: 0.4,
        opacity: 0,
        display: "none",
      }
    );
    gsap.fromTo(
      cart,
      { x: 0 },
      {
        duration: 0.4,
        x: 100,
      }
    );
    window.removeEventListener("click", handleClickOutside);
    btnClose.removeEventListener("click", handleClose);
  }
  function handleClickOutside(e) {
    if (!cart.contains(e.target) && !cartButton.contains(e.target)) {
      isOpen = false;
      close();
    }
  }
  function handleClose(e) {
    isOpen = false;
    close();
  }
  cartButton.addEventListener("click", () => {
    isOpen = !isOpen;
    isOpen ? open() : close();
  });
}

function initSection() {
  const section = document.getElementById(
    "fa02e1c1-b288-3585-b90d-cb0aa7ae796e"
  );
  const ssLeft = document.getElementById(
    "20233750-f081-4af3-9244-9ae7f7a80319"
  );
  const ssRight = document.getElementById(
    "7607f238-492c-0e60-1d1c-b87f99af3e9f"
  );
  gsap.fromTo(
    ssLeft,
    { opacity: 0, y: 40 },
    {
      duration: 1.2,
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
      },
    }
  );
  gsap.fromTo(
    ssRight,
    { opacity: 0, y: 60 },
    {
      duration: 1.8,
      y: 0,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
      },
    }
  );
}

function initFooter() {
  const footerTop = document.getElementById(
    "67b7e240-216f-4c4c-b5d3-ef5698c205a1"
  );
  const footerBottom = document.getElementById(
    "9566e1e2-4862-c17d-08fa-fb50b8a31bb3"
  );
  gsap.fromTo(
    footerTop,
    { opacity: 0 },
    {
      duration: 1,
      delay: 0.4,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        start: "top 90%",
        trigger: footerTop,
      },
    }
  );
  gsap.fromTo(
    footerBottom,
    { opacity: 0 },
    {
      duration: 1,
      delay: 0.4,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerBottom,
      },
    }
  );
}

function initHamburgerMenu() {
  const hamburgerMenuButton = document.getElementById("hamburger-menu-button");
  const hamburgerMenuBarTop = document.querySelector(".hamburger-menu-bar.top");
  const hamburgerMenuBarBottom = document.querySelector(
    ".hamburger-menu-bar.bottom"
  );
  const nav = document.getElementById("546e4b38-b2c8-4851-89b8-d64ab874aa30");
  const navWrapped = document.getElementById(
    "03c55c73-55d3-4eaa-be23-38bfbbd3ecc3"
  );

  let isOpen = false;
  function open() {
    gsap.fromTo(
      hamburgerMenuBarTop,
      {
        y: 0,
        rotationZ: 0,
      },
      {
        duration: 0.4,
        y: 7,
        rotationZ: 135,
      }
    );
    gsap.fromTo(
      hamburgerMenuBarBottom,
      {
        y: 0,
        rotationZ: 0,
        width: "20px",
      },
      {
        duration: 0.4,
        y: -6,
        rotationZ: 45,
        width: "30px",
      }
    );
    gsap.fromTo(
      nav,
      {
        display: "none",
        y: -800,
      },
      {
        duration: 0.4,
        y: 0,
        display: "block",
      }
    );
    gsap.fromTo(
      navWrapped,
      {
        display: "none",
      },
      {
        duration: 0.4,
        display: "block",
      }
    );
    window.addEventListener("click", handleClickOutside);
  }
  function close() {
    gsap.fromTo(
      hamburgerMenuBarTop,
      {
        y: 7,
        rotationZ: 135,
      },
      {
        duration: 0.4,
        y: 0,
        rotationZ: 0,
      }
    );
    gsap.fromTo(
      hamburgerMenuBarBottom,
      {
        y: -6,
        rotationZ: 45,
        width: "30px",
      },
      {
        duration: 0.4,
        y: 0,
        rotationZ: 0,
        width: "20px",
      }
    );
    gsap.fromTo(
      nav,
      {
        y: 0,
        display: "block",
      },
      {
        duration: 0.4,
        y: -800,
        display: "none",
      }
    );
    gsap.fromTo(
      navWrapped,
      { display: "block" },
      {
        duration: 0.4,
        display: "none",
      }
    );
    window.removeEventListener("click", handleClickOutside);
  }
  function handleClickOutside(e) {
    if (!nav.contains(e.target) && !hamburgerMenuButton.contains(e.target)) {
      isOpen = false;
      close();
    }
  }
  hamburgerMenuButton.addEventListener("click", () => {
    isOpen = !isOpen;
    isOpen ? open() : close();
  });
  initHamburgerMenuPage();
}

function initHamburgerMenuPage() {
  const navPageButton = document.getElementById(
    "8a2262df-9b24-41ad-b774-5422d923e3e5"
  );
  const navDropdown = document.getElementById(
    "57ffcd7a-12d7-48a5-84ca-80e93c01c2c4"
  );
  let isOpen = false;
  const icon = navPageButton.children[1];
  function open() {
    gsap.to(icon, {
      duration: 0.2,
      rotation: -180,
    });
    gsap.fromTo(
      navDropdown,
      { y: 20 },
      {
        duration: 0.4,
        y: 0,
        opacity: 1,
        display: "block",
      }
    );
    window.addEventListener("click", handleClickOutside);
  }
  function close() {
    gsap.to(icon, {
      duration: 0.2,
      rotation: 0,
    });
    gsap.fromTo(
      navDropdown,
      { y: 0 },
      {
        duration: 0.4,
        y: 20,
        opacity: 0,
        display: "none",
      }
    );
    window.removeEventListener("click", handleClickOutside);
  }
  function handleClickOutside(e) {
    if (!navDropdown.contains(e.target) && !navPageButton.contains(e.target)) {
      isOpen = false;
      close();
    }
  }
  navPageButton.addEventListener("click", () => {
    isOpen = !isOpen;
    isOpen ? open() : close();
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  initBody();
  initNavScrollDirection();
  initNavPageAction();
  initCartAction();
  initHamburgerMenu();
  initSection();
  initFooter();
});
