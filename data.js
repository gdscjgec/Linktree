// All Handles Data Object ****************************************************

let linktreeData = [
  {
    id: 1,
    handleName: "Chapter",
    handleText: "Become a Member",
    handleLink:
      "https://gdsc.community.dev/jalpaiguri-government-engineering-college-jalpaiguri/",
    imgSrc: "./assets/community.svg",
    imgAlt: "Community",
  },
  {
    id: 2,
    handleName: "Discord",
    handleText: "Join Our Community",
    handleLink: "https://discord.gg/MxX4ZhPxKa",
    imgSrc: "./assets/discord.svg",
    imgAlt: "Discord",
  },
  {
    id: 3,
    handleName: "LinkedIn",
    handleText: "Connect Us & Stay Update",
    handleLink: "https://www.linkedin.com/company/gdscjgec",
    imgSrc: "./assets/linkedin.svg",
    imgAlt: "LinkedIn",
  },
  {
    id: 4,
    handleName: "Youtube",
    handleText: "Subscribe to Our Channel",
    handleLink: "https://www.youtube.com/c/gdscjgec",
    imgSrc: "./assets/youtube.svg",
    imgAlt: "Youtube",
  },
  {
    id: 5,
    handleName: "Instagram",
    handleText: "Follow Us & Stay Update",
    handleLink: "https://www.instagram.com/gdscjgec/",
    imgSrc: "./assets/instagram.svg",
    imgAlt: "Instagram",
  },
  {
    id: 6,
    handleName: "Github",
    handleText: "Collab with us in Our Projects",
    handleLink: "https://github.com/gdscjgec",
    imgSrc: "./assets/github.svg",
    imgAlt: "Github",
  },
  {
    id: 7,
    handleName: "Twitter",
    handleText: "Follow us on Twitter",
    handleLink: "https://twitter.com/gdscjgec",
    imgSrc: "./assets/twitter.svg",
    imgAlt: "Facebook",
  },
  {
    id: 8,
    handleName: "Facebook",
    handleText: "Like our page on Facebook",
    handleLink: "https://www.facebook.com/gdscjgec",
    imgSrc: "./assets/facebook.svg",
    imgAlt: "Facebook",
  },
  {
    id: 9,
    handleName: "Website",
    handleText: "Official Website",
    handleLink: "https://gdscjgec.github.io/",
    imgSrc: "./assets/website.svg",
    imgAlt: "Website",
  },
  {
    id: 10,
    handleName: "Mail Us",
    handleText: "Feel Free to Contact Us",
    handleLink: "mailto:gdsc@jgec.ac.in",
    imgSrc: "./assets/mail.svg",
    imgAlt: "Mail",
  },
];

// All Handles Preview Mapping ****************************************************

let linktreeDiv = document.querySelector("#linktreeHandles");

Object.values(linktreeData).map((val) => {
  linktreeDiv.innerHTML += `
        <!-- Social Handle ${val.id} -->
        <div class="handle_card">
            <span><img src="${val.imgSrc}" class="watermark" alt="Watermark" /></span>
            <img src="${val.imgSrc}" alt="${val.imgAlt}" />
            <p>${val.handleText}</p>
            <a href="${val.handleLink}" target="_blank" rel="noopener">
                ${val.handleName}
            </a>
        </div>
    `;
});
