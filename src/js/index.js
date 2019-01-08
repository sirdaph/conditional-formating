import "../style/index.scss";

function render(values = {}) {
  /**
   *  1) Here are all the variables to be used in the conditions
   */
  const variables = Object.assign(
    {
      // if includeCover is true the algorithm should
      includeCover: true,
      // this is the url of the image that will used as background for the profile cover
      background:
        "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
      // this is the url for the profile avatar
      avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
      // social media bar position (left or right)
      socialMediaPosition: "left",
      // social media usernames
      twitter: null,
      github: "alesanchezr",
      linkedin: null,
      instagram: null,

      name: null,
      lastname: null,
      role: null,

      country: null,
      city: null
    },
    values
  );

  /**
   *  2) The conditional rendering logic starts here
   */

  // here we ask the logical questions to make decitions on how to build the heml
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let randomname = "Paul";
  if (variables.name !== null) {
    randomname = variables.name;
  }

  let randomname2 = "Jones";
  if (variables.lastname !== null) {
    randomname2 = variables.lastname;
  }
  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${randomname} ${randomname2}</h1>
          <h2>Web Developer</h2>
          <h3>Miami, USA</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/alesanchezr"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/alesanchezr"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/alesanchezr"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/alesanchezr"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

//ignore this lines, here is where we do the logic for the dropdowns
window.onload = function() {
  render();
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(values);
    });
  });
};
