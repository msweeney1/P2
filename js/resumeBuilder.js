var bio = {
	"name"   : "Matt Sweeney",
    "role"   : "Front-end Web Developer",
    "welcomeMessage" : "Hire Me!",
	"contacts" : {
		"mobile"   : "(315) 427 2769",
		"email"    : "mattsweeney2006@gmail.com",
        "github"   : "msweeney1",
				"twitter"	 : "none",
        "location" : "Austin, TX"
	},
    "pic" : "images/Profile_Pic.png",
    "skills" : ["HTML","CSS","Javascript", "JQuery", "Git", "ARCMap", "Business Objects", "Design Studio"],
    display: function() {

      var headerSection = $('#header');
      var topContactsSection = $('#topContacts');
      var footerContactsSection = $('#footerContacts');

      var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
      var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

      var formattedPic = HTMLbioPic.replace("%data%", bio.pic);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter  = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

      headerSection.append(formattedPic);
      headerSection.prepend(formattedHeaderRole);
      headerSection.prepend(formattedHeaderName);

      topContactsSection.append(formattedMobile);
      topContactsSection.append(formattedEmail);
      topContactsSection.append(formattedGithub);
      topContactsSection.append(formattedTwitter);
      topContactsSection.append(formattedLocation);

      footerContactsSection.append(formattedMobile);
      footerContactsSection.append(formattedEmail);
      footerContactsSection.append(formattedGithub);
      footerContactsSection.append(formattedTwitter);
      footerContactsSection.append(formattedLocation);

      if (bio.skills.length > 0) {
        headerSection.append(HTMLskillsStart);
          for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
          }
      }
    }
}


var work = {
    "jobs"  : [
        {
            "employer"    : "AT&T",
            "title"       : "Profesional Application Developer",
            "location"    : "Austin, TX",
            "dates"       : "2006-Present",
            "description" : "GIS development and analysis."
        },
    ],
    display: function() {
      for(job in work.jobs) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
      }
    }
}


var projects = {
    "project" : [
        {
           "title"        : "Udacity Front-end Web Developer Project 1",
            "dates"       : "July 2015",
            "description" : "Given a design mockup, develop a responsive website using Bootstrap's grid system",
            "images"      : ["images/P1 Screenshot.png"]
        },
        {
           "title"        : "Udacity Front-end Web Developer Project 2",
            "dates"       : "",
            "description" : "",
            "images"      : [""]
        },
        {
           "title"        : "Udacity Front-end Web Developer Project 3",
            "dates"       : "",
            "description" : "",
            "images"      : [""]
        },
        {
           "title"        : "Udacity Front-end Web Developer Project 4",
            "dates"       : "",
            "description" : "",
            "images"      : [""]
        },
        {
           "title"        : "Udacity Front-end Web Developer Project 5",
            "dates"       : "",
            "description" : "",
            "images"      : [""]
        },
        {
           "title"        : "Udacity Front-end Web Developer Project 6",
            "dates"       : "",
            "description" : "",
            "images"      : [""]
        }
    ],
    display: function() {
      for(counter in projects.project) {
        //create new div for projects
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[counter].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[counter].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[counter].description)

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.project[counter].images.length > 0) {
            for (image in projects.project[counter].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[counter].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
      }
    }
}


var education = {
    "schools" : [
        {
            "name"     : "Utica School of Commerce",
            "location" : "Utica, NY",
            "degree"   : "AAS Microcomputing Technologies",
            "major"    : "Computer Science",
            "dates"    : "2003-2006"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Frontend Web Developer Nanodegree",
            "school" : "Udacity",
            "dates"  : "March 2015 - Presemt",
            "url"    : "https://www.udacity.com/course/nd001"
        },
    ],
    display: function() {
      for(school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolname      = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchooldegree    = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchooldate      = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoollocation  = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolmajor     = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $(".education-entry:last").append(formattedSchoolname);
        $(".education-entry:last").append(formattedSchooldegree);
        $(".education-entry:last").append(formattedSchooldate);
        $(".education-entry:last").append(formattedSchoollocation);
        $(".education-entry:last").append(formattedSchoolmajor);
      }

      $("#education").append(HTMLonlineClasses);

      for(onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlinetitle   = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineschool  = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlinedate    = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedOnlineurl     = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

        $(".education-entry:last").append(formattedOnlinetitle);
        $(".education-entry:last").append(formattedOnlineschool);
        $(".education-entry:last").append(formattedOnlinedate);
        $(".education-entry:last").append(formattedOnlineurl);
      }
    }
}


var map = {
  display: function() {
    window.addEventListener('load', map.initialize);
    $('#mapDiv').append(googleMap);
  }
}


bio.display();
work.display();
projects.display();
education.display();
map.display();
