// this = window
var coder = {
  username: "joe",
  years: 3,
  languages: ["JS", "Python", "C++"],
  company: {
    name: "Coder Inc.",
    location: "San Diego"
  },
  logStatus: function() {
    console.log("Working from office");
  },
  logProfile: function() {
    console.log("username: ", this.username);
    console.log("Years coding: ", this.years);
    console.log("Languages: ", this.languages.join(", "));
    console.log("Company Name: ", this.company.name);
    console.log("Company Location: ", this.company.location);
  }
};

coder.logStatus();
coder.logProfile();
