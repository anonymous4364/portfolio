const home = document.getElementById("home");
const services = document.getElementById("services");
const about = document.getElementById("about");
const contacts = document.getElementById("contacts");
const skills = document.getElementById("skills");

const array = [home, services, skills, about, contacts];

home.style.backgroundColor = "#00c4ff";

function typeWriter(element, text, speed = 4) {
  let i = 0;
  function type() {
    if (i <= text.length) {
      element.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

array.forEach(element => {
  element.addEventListener("click", () => {
    const sectionId = element.id + "Section";
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      if (element.id === "services") {
        const boxP = document.getElementsByClassName("boxP");
        const boxPText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat distinctio, fugiat sapiente fuga itaque magnam rerum voluptatibus commodi, eaque deleniti nobis voluptates consectetur perspiciatis";
        Array.from(boxP).forEach(p => {
          typeWriter(p, boxPText);
        });
      }

      if (element.id === "contacts") {
        const p = document.getElementById("contactP");
        const contactText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque esse quo aliquam dignissimos excepturi, obcaecati ex aut perspiciatis quod repellendus numquam natus ullam et atque exercitationem mollitia ipsum dolorem debitis?";
        typeWriter(p, contactText);
      }

      if (element.id === "about") {
        const aboutPs = document.getElementsByClassName("aboutP");
        const textP = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur, iure eaque nobis exercitationem obcaecati";
        Array.from(aboutPs).forEach(p => {
          typeWriter(p, textP, 15);
        });
      }
    }
  });
});

const mobileSelect = document.getElementById("mobileNav");

mobileSelect.addEventListener("change", () => {
  const selectedValue = mobileSelect.value;
  const sectionId = selectedValue + "Section";
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

    if (selectedValue === "services") {
      const boxP = document.getElementsByClassName("boxP");
      const boxPText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat distinctio, fugiat sapiente fuga itaque magnam rerum voluptatibus commodi, eaque deleniti nobis voluptates consectetur perspiciatis";
      Array.from(boxP).forEach(p => {
        typeWriter(p, boxPText, 15);
      });
    }

    if (selectedValue === "about") {
      const aboutPs = document.getElementsByClassName("aboutP");
      const textP = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur, iure eaque nobis exercitationem obcaecati";
      Array.from(aboutPs).forEach(p => {
        typeWriter(p, textP, 15);
      });
    }
  }
});

const developer = document.getElementById("Developer");
const developerText = "I'm A Web Developer";
typeWriter(developer, developerText, 75);

const p = document.getElementById("p");

const homeText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, molestiae consequuntur laborum nemo officia eveniet modi voluptas? Maxime quis quam quo veritatis recusandae minus accusamus fugit commodi distinctio esse? Iste! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae nesciunt officiis sed esse ex facere magni sint corrupti, aperiam omnis et vitae saepe non eligendi neque voluptate odit dolore unde.";

typeWriter(p, homeText);
const boxP = document.getElementsByClassName("boxP");
const boxPText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat distinctio, fugiat sapiente fuga itaque magnam rerum voluptatibus commodi, eaque deleniti nobis voluptates consectetur perspiciatis";
Array.from(boxP).forEach(p => {
  typeWriter(p, boxPText);
});
const aboutPs = document.getElementsByClassName("aboutP");
const textP = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta aspernatur, iure eaque nobis exercitationem obcaecati";
Array.from(aboutPs).forEach(p => {
  typeWriter(p, textP, 15);
});
