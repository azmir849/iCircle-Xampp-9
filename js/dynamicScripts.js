//function to set about
var base_url = "https://icircles.app/";
let username = "";
let fullName = "";
let authorImgUrl = "";
aboutRender = (about) => {
  username = about.username; //for globally access

  //user tab name
  username = about.username;
  document.getElementById("tabName").innerHTML = `${about.username}`;

  //offcanvas img
  document.getElementById("offCanvasImg").src = base_url + about.thumb;

  //Left side bar
  document.getElementById("aboutImage").src = base_url + about.thumb;
  let fName = about.firstname;
  let lName = about.lastname;
  fullName = fName.concat(" ", lName);
  const nameLength = fullName.length;
  if (nameLength > 16) {
    document.getElementById("fullName").style.fontSize = "15px";
  }
  document.getElementById("fullName").innerHTML = `${fullName}`;
  document.getElementById("userDesignation").innerHTML = `${about.designation}`;

  //Social Icons
  let socialIcon = ``;
  if (about.facebook) {
    socialIcon += `<li><a href="#" style="color: #1872ef;"><i class="fa-brands fa-facebook"></i></a></li>`;
  }
  if (about.twitter) {
    socialIcon += `<li><a href="#" style="color: #00c0ff;"><i class="fa-brands fa-twitter"></i></a></li>`;
  }
  if (about.instagram) {
    socialIcon += `<li><a href="#" style="color: #ff2d95;"><i class="fa-brands fa-instagram"></i></a></li>`;
  }
  if (about.linkedin) {
    socialIcon += `<li><a href="#" style="color: #0170c7;"><i class="fa-brands fa-linkedin-in"></i></a></li>`;
  }
  if (about.github) {
    socialIcon += `<li><a href="#" style="color: #333333;"><i class="fa-brands fa-github"></i></a></li>`;
  }
  if (about.whatsapp) {
    socialIcon += `<li><a href="#" style="color: #333333;"><i class="fa-brands fa-whatsapp"></i></a></li>`;
  }
  if (about.skype) {
    socialIcon += `<li><a href="#" style="color: #0170c7;"><i class="fa-brands fa-skype"></i></a></li>`;
  }
  document.getElementById("socilaMediaIcons").innerHTML = socialIcon;

  //About
  let details = ``;
  if (about.username) {
    details += `
    <div class="about_wrap">
      <div class="row">
            <div class="col-lg-4 col-5"><h5>Full Name </h5></div>
            <div class="col-lg-8 col-7">${fullName}</h6></div>
      </div>
    </div>
    `;
  }
  if (about.phone) {
    details += `
    <div class="about_wrap">
      <div class="row">
            <div class="col-lg-4 col-5"><h5>Phone </h5></div>
            <div class="col-lg-8 col-7">${about.phone}</h6></div>
      </div>
    </div>
    `;
  }
  if (about.country) {
    details += `
    <div class="about_wrap">
      <div class="row">
            <div class="col-lg-4 col-5"><h5>Country </h5></div>
            <div class="col-lg-8 col-7">${about.country}</h6></div>
      </div>
    </div>
    `;
  }
  if (about.city) {
    details += `
    <div class="about_wrap">
      <div class="row">
            <div class="col-lg-4 col-5"><h5>City</h5></div>
            <div class="col-lg-8 col-7">${about.city}</h6></div>
      </div>
    </div>
    `;
  }
  if (about.address) {
    details += `
    <div class="about_wrap">
    <div class="row">
          <div class="col-lg-4 col-5"><h5>Address</h5></div>
          <div class="col-lg-8 col-7">${about.address}</h6></div>
    </div>
  </div>
    `;
  }
  if (about.mobile) {
    details += `
    <div class="about_wrap">
      <div class="row">
            <div class="col-lg-4 col-5"><h5>Mobile</h5></div>
            <div class="col-lg-8 col-7">${about.mobile}</h6></div>
      </div>
    </div>
    `;
  }
  if (about.web_site) {
    details += `
    <div class="about_wrap">
    <div class="row">
          <div class="col-lg-4 col-5"><h5>Web Site </h5></div>
          <div class="col-lg-8 col-7">${about.web_site}</h6></div>
    </div>
  </div>
    `;
  }
  document.getElementById("aboutDetails").innerHTML = details;
};

//function to set work experiences
workExperienceRender = (experiences) => {
  var length = experiences.length;
  if (length === 0) {
    document.getElementById("experienceSection").style.display = "none";
  }

  let htmlText = "";
  experiences.map((expData) => {
    let end_date = expData.to_date.split("-");
    const thatYear = new Date(expData.from_date);
    const thisYear = new Date(expData.to_date);
    let toYear = thisYear.getFullYear();
    let year = thatYear.getFullYear();

    if (end_date[0] == "0000") {
      htmlText += `
      <div class="experience_wrap">
        <div class="row">
            <div class="col-12 col-lg-12">
                  <h4>${expData.job_title}</h4>
                  <h5>${expData.company_name}-Present</h5>
                  <p>${expData.details}</p>
            </div>
        </div>
      </div>
      `;
    } else {
      htmlText += `
      <div class="experience_wrap">
      <div class="row">
          <div class="col-12 col-lg-12">
          <h4>${expData.job_title}</h4>
          <h5>${expData.company_name}- ${year}</h5>
          <p>${expData.details}</p>
          </div>
      </div>
    </div>
      `;
    }
  });
  document.getElementById("experiences").innerHTML = htmlText;
};

//function to set Skills
skillRender = (skills) => {
  var length = skills.length;
  if (length === 0) {
    document.getElementById("skillSection").style.display = "none";
  }

  let htmlText = "";
  skills.map((skills) => {
    if (skills.skill_level == "Advanced") {
      htmlText += `
      <div class="progress_wrapeer">
          <h6>${skills.name}</h6>
          <a href="#"><span class="counter">95</span> %</a>
      </div>
      <div class="progress">
          <div class="progress-value value_2"></div>
      </div>
     
            `;
    }
    if (skills.skill_level == "Intermediate") {
      htmlText += `
    <div class="progress_wrapeer">
    <h6>${skills.name}</h6>
      <a href="#"><span class="counter">80</span>%</a>
    </div>
    <div class="progress">
      <div class="progress-value value_4"></div>
    </div>
   
            `;
    }
    if (skills.skill_level == "Beginner") {
      htmlText += `
      <div class="progress_wrapeer">
      <h6>${skills.name}</h6>
            <a href="#"><span class="counter">40</span> %</a>
         </div>
          <div class="progress">
            <div class="progress-value"></div>
       </div>
     
            `;
    }
  });
  document.getElementById("skillsId").innerHTML = htmlText;
};

// function to set user educations information
educationsRender = (educations) => {
  var length = educations.length;
  if (length === 0) {
    document.getElementById("educationSection").style.display = "none";
  }

  let htmlText = "";
  educations.map((eduData) => {
    let end_date = eduData.to_date.split("-");
    const thisYear = new Date(eduData.to_date);
    let toYear = thisYear.getFullYear();
    const thatYear = new Date(eduData.from_date);
    let year = thatYear.getFullYear();

    if (end_date[0] == "0000") {
      htmlText += `
      <div class="col-md-6 col-lg-12">
        <div class="resume_container">
          <div class="card_head">
               <h4> <span><i class="fa-solid fa-circle-dot"></i></span> ${eduData.degree_name}</h4>
               <h6><span><i class="fa-solid fa-calendar-days"></i></span>  ${year} To
               Present</h6>
          </div>
          <h5>${eduData.institution_name}</h5>
          <p>${eduData.details} </p>
        </div>
      </div>
      `;
    } else {
      htmlText += `
      <div class="col-md-6 col-lg-12">
        <div class="resume_container">
          <div class="card_head">
               <h4> <span><i class="fa-solid fa-circle-dot"></i></span> ${eduData.degree_name}</h4>
               <h6><span><i class="fa-solid fa-calendar-days"></i></span>  ${year} -  ${toYear}</h6>
          </div>
          <h5>${eduData.institution_name}</h5>
          <p>${eduData.details} </p>
        </div>
      </div>
 `;
    }
  });
  document.getElementById("educationData").innerHTML = htmlText;
};


//function to set services
serviceRender = (services) => {
  var length = services.length;
  if (length === 0) {
    document.getElementById("serviceSection").style.display = "none";
  }

  let htmlText = "";
  services.map((serviceData) => {
    const str = serviceData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 20).join(" ");

    htmlText += ` 

    <div class="col-sm-6 col-md-6 col-lg-6">
        <div class="service_item text-center">
              <img src="${base_url}/${serviceData.thumb}" alt="">
              <h3>${serviceData.service_name}</h3>
              <p>${shortDescription}</p>
        </div>
    </div>
    `;
  });
  document.getElementById("servicesId").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if (length === 0) {
    document.getElementById("languageSection").style.display = "none";
  }

  let htmlText = "";
  languages.map((languages) => {
    if (languages.level == "Advanced") {
      htmlText += `
      <div class="col-lg-1"></div>
      <div class="col-6 col-md-6 col-lg-2">
      <div class="circle">
          <div class="text">
              <span class="counter">95</span> %
          </div>
          <svg>
              <circle class="bg" cx="57" cy="57" r="52"></circle>
              <circle class="progress english" cx="57" cy="57" r="52"></circle>
          </svg>
      </div>
      <div class="cercle_title text-center mb-3">
          <h4>${languages.title}</h4>
      </div>
  </div>
           
            `;
    }
    if (languages.level == "Intermediate") {
      htmlText += `
      <div class="col-lg-1"></div>
      <div class="col-6 col-md-4 col-lg-2">
          <div class="circle">
              <div class="text">
                  <span class="counter">80</span> %
              </div>
              <svg>
                  <circle class="bg" cx="57" cy="57" r="52"></circle>
                  <circle class="progress freanch" cx="57" cy="57" r="52"></circle>
              </svg>
          </div>
          <div class="cercle_title text-center mb-3">
          <h4>${languages.title}</h4>
          </div>
      </div>
        
            `;
    }
    if (languages.level == "Beginner") {
      htmlText += `
      <div class="col-lg-1"></div>
      <div class="col-6 col-md-4 col-lg-2">
          <div class="circle">
              <div class="text">
                  <span class="counter">  40</span> %
              </div>
              <svg>
                  <circle class="bg" cx="57" cy="57" r="52"></circle>
                  <circle class="progress hindi" cx="57" cy="57" r="52"></circle>
              </svg>
          </div>
          <div class="cercle_title text-center mb-3">
          <h4>${languages.title}</h4>
          </div>
      </div>
            
            `;
    }
  });
  document.getElementById("languageId").innerHTML = htmlText;
};

//function to set portfolio
portfolioRender = (portfolios) => {
  var length = portfolios.length;
  if (length === 0) {
    document.getElementById("portfolioSection").style.display = "none";
  }

  let htmlText = "";
  const keys = Object.keys(portfolios);
  keys.map((key, index) => {
    portfolios[key].map((item, index) => {
      htmlText += `
      <div class="col-lg-4">
          <div class="port_img">
               <img src="${base_url + "/" + item.image}" alt="">
               <div class="portfolio_overly">
                     <span><i class="fa-solid fa-camera"></i></span>
                     <h4>${item.project_name}</h4>
               </div>
           </div>
     </div>
      
    `;
    });
  });

  document.getElementById("portfolioCards").innerHTML = htmlText;
};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if (length === 0) {
    document.getElementById("awardSection").style.display = "none";
  }

  let htmlText = "";
  awards.map((awardData) => {
    const thatYear = new Date(awardData.created_date);
    let year = thatYear.getFullYear();
    const str = awardData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");
    htmlText += `
    <div class="col-md-6 col-lg-6">
    <div class="award_wrap">
           <div class="awrad_img">
                <img src="images/award.png" alt="">
           </div>
           <div class="award_info">
           <h4>${awardData.title}</h4>
           <p>${shortDescription} ...</p>
           </div>
    </div>
  </div>
    `;
  });
  document.getElementById("awardId").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
  var length = blogs.length;
  if (length === 0) {
    document.getElementById("blogSection").style.display = "none";
  }

  let htmlText = "";
  const keys = Object.keys(blogs);
  keys.map((key) => {
    blogs[key].map((item) => {
      const thatYear = new Date(item.created_date);
      let year = thatYear.getFullYear();
      let day = thatYear.toLocaleString("en-US", { weekday: "long" }); // Monday
      let month = thatYear.toLocaleString("en-us", {
        month: "long",
      }); /* June */
      let date = thatYear.getDate(); /* 9 */

      const str = item.description;
      // 👇️ First 25 words
      const shortDescription = str.split(" ").slice(0, 30).join(" ");
      const longtDescription = str.split(" ").slice(46, 120).join(" ");
      htmlText += `
      <div class="col-md-6 col-lg-6 list-element mb-3">
           <div class="journal_img_item">
           <img src=${base_url+"/"+item.image} alt="">
           </div>
           <div class="journal_text">
           <h5>${item.title}</h5>
               <h5>${month} ${date} ${year} </h5>
               <p>${shortDescription}</p>
           </div>
       </div>
      `;
    });
  });
  document.getElementById("blogId").innerHTML = htmlText;
};

//function to set references
referenceRender = (references) => {
  var length = references.length;
  if(length===0){
    document.getElementById("referenceSection").style.display= "none";
  }

  let htmlText = "";
  references.map((referenceData)=>{
    if(referenceData.image){
      htmlText += `
      <div class="col-sm-6 col-lg-3 text-center ">
      <div class="reffer_card">
           <div class="reffer_img">
                <img src=${base_url+"/"+referenceData.image} alt="">
           </div>
           <div class="reffer_text">
           <h4>${referenceData.name}</h4>
           <h5>${referenceData.email}</h5>
           <h6><a href="#">Massage</a></h6>
           </div>
      </div>
   </div>
      `;
    }else{
      htmlText += `
      <div class="col-sm-6 col-lg-3 text-center ">
      <div class="reffer_card">
           <div class="reffer_text">
                <h4>${referenceData.name}</h4>
                <h5>${referenceData.email}</h5>
                <h6><a href="#">Massage</a></h6>
           </div>
      </div>
   </div>
      `;
    }
     });
  document.getElementById("referencesData").innerHTML = htmlText;
};



//functions to set testimonials
testimonialRender = (testimonial) => {
  var length = testimonial.length;
  if (length === 0) {
    document.getElementById("clientAndTestimonial").style.display = "none";
  }

  let htmlText = "";
  testimonial.map((testimonialData) => {
    const str = testimonialData.feedback;

    // 👇️ First 25 words
    const shortFeedback = str.split(" ").slice(0, 25).join(" ");
    // console.log(shortFeedback);
    htmlText += `
    <div class="slider_item">
    <div class="text_item">
         <p>${testimonialData.feedback}</p>
         <p>${shortFeedback}... <strong></strong></p>
    </div>
    <div class="client_profile text-center">
         <div class="profile_img">
         <img src="${base_url}/${testimonialData.image}" alt="" width="100px" height="100px">
         </div>
         <div class="client_info">
              <h4>${testimonialData.client_name}</h4>
         </div>
    </div>
</div>
                                  
    `;
  });
  document.getElementById("sliderId").innerHTML = htmlText;
};

//function to set the whole ui
render = (data) => {
  aboutRender(data.about);
  workExperienceRender(data.experiences);
  skillRender(data.subskills);
  educationsRender(data.educations);
  serviceRender(data.services);
  languageRender(data.languages);
  portfolioRender(data.portfolios);
  awardRender(data.awards);
  blogRender(data.blogs);
  referenceRender(data.references);
  testimonialRender(data.testimonials);


};

//Fetch api
var url = document.URL;
let usrnm = url.split("/");
fetch(
  "https://icircles.app/api/profile/usermicrosite/" + usrnm[usrnm.length - 1]
)
  .then((responsse) => responsse.json())
  .then((data) => {
    console.log(data);
    render(data);
  });

//Get dynamic aside ul list
fetch(
  "https://icircles.app/api/profile/usermicrosite/" + usrnm[usrnm.length - 1]
)
  .then((responsse) => responsse.json())
  .then((data) => {
    //Get all the field length
    const experienceLength = data.experiences.length;
    const subskillsLength = data.subskills.length;
    const servicesLength = data.services.length;
    const educationsLength = data.educations.length;
    const languagesLength = data.languages.length;
    const referencesLength = data.references.length;
    const clientsLength = data.clients.length;
    const interestsLength = data.interests.length;
    const awardsLength = data.awards.length;
    const portfoliosLength = Object.keys(data.portfolios).length;
    const blogsLength = Object.keys(data.blogs).length;
    const testimonialsLength = data.testimonials.length;

    let asideUl = ``;
    if (data.user_id) {
      asideUl += `
      <li> <a href="#home">Home</a> </li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li> <a href="#about">About</a> </li>
        `;
    }
    if (experienceLength >= 1) {
      asideUl += `
      <li> <a href="#experience">Experience</a> </li>
        `;
    }
    if (educationsLength >= 1) {
      asideUl += `
      <li> <a href="#resume">Education</a> </li>
        `;
    }
    if (subskillsLength >= 1) {
      asideUl += `
      <li> <a href="#skillSection">Skills</a> </li>
        `;
    }
    if (servicesLength >= 1) {
      asideUl += `
      <li> <a href="#serviceSection">Services</a> </li>
        `;
    }
    if (languagesLength >= 1) {
      asideUl += `
      <li> <a href="#languageSection">Languages</a> </li>
        `;
    }
    if (portfoliosLength >= 1) {
      asideUl += `
      <li> <a href="#portfolioSection">Portfolio</a> </li>
        `;
    }
    if (awardsLength >= 1) {
      asideUl += `
      <li> <a href="#awardSection">Awards</a> </li>
        `;
    }
   
    if (clientsLength >= 1) {
      asideUl += `
      <li> <a href="#clientAndTestimonial">Clients</a> </li>
        `;
    }
    if (blogsLength >= 1) {
      asideUl += `
      <li> <a href="#blogSection">Blogs</a> </li>
        `;
    }
    
     if (referencesLength >= 1) {
       asideUl += `
       <li> <a href="#reference">References</a> </li>
         `;
     }
    if (data.user_id) {
      asideUl += `
      <li> <a href="#appointmentSection">Appointment</a> </li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li> <a href="#contact">Contact</a> </li>
        `;
    }

    document.getElementById("navbarList").innerHTML = asideUl;
    document.getElementById("navbar_listOfcan").innerHTML = asideUl;
  });
