document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".jobs-container");

  let jobsFromStorage = JSON.parse(localStorage.getItem("jobs")) || [];

  
  if (!localStorage.getItem("defaultsInserted")) {
    let job1 = {
      company: 'Google',
      description: "Google is looking for a passionate and motivated Software Engineer with 1 year of professional experience to join our dynamic team. As a Software Engineer, you will work closely with world-class engineers and researchers to design, build, and maintain scalable and efficient software systems that power Google's core products and services.",
      experience: 1,
      id: 1,
      salary: 7000,
      status: 'Open',
      title: 'Junior Software Engineer',
      type: 'Full Time',
    };
    let job2 = {
      company: 'Facebook',
      description: "Facebook is seeking a talented Front-End Developer to craft intuitive and visually stunning user interfaces for our web applications. You’ll work closely with UX designers and backend engineers to bring designs to life and ensure top-notch user experience.",
      experience: 3,
      id: 2,
      salary: 8500,
      status: 'Closed',
      title: 'Front-end Developer',
      type: 'Full Time',
    };
    let job3 = {
      company: 'Vodafone',
      description: "Join Vodafone as an Android Developer and help shape the future of mobile experiences. You will design and build advanced applications for the Android platform and collaborate with teams across Vodafone to deliver seamless mobile solutions.",
      experience: 5,
      id: 3,
      salary: 9000,
      status: 'Open',
      title: 'Mobile App Developer',
      type: 'Full Time',
    };
    let job4 = {
      company: 'Google',
      description: "Google is hiring a Back-End Developer to help build and maintain the server-side components of our large-scale web applications.",
      experience: 1,
      id: 4,
      salary: 9500,
      status: 'Open',
      title: 'Back-End Developer',
      type: 'Part Time',
    };
    let job5 = {
      company: 'Google',
      description: "Google is looking for a QA Engineer to ensure the delivery of high-quality software products. As a key player in the product lifecycle, you will write test plans, execute manual and automated tests, and identify bugs before release.",
      experience: 1,
      id: 5,
      salary: 7000,
      status: 'Open',
      title: 'QA Engineer',
      type: 'Part Time',
    };

    jobsFromStorage.push(job1, job2, job3, job4, job5);
    localStorage.setItem("jobs", JSON.stringify(jobsFromStorage));
    localStorage.setItem("defaultsInserted", "true");
  }

  
  function displayJobs(jobs) {
    container.innerHTML = "";
    jobs.forEach((job) => {
      const jobDiv = document.createElement("div");
      jobDiv.className = "job-card";
      jobDiv.style.cursor = "pointer";

      const encodedDescription = encodeURIComponent(job.description);

      jobDiv.setAttribute(
        "data-url",
        `job_details.html?title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}&id=${job.id}&salary=${job.salary}&status=${job.status}&experience=${job.experience}&description=${encodedDescription}`
      );

      jobDiv.innerHTML = `
        <h3>${job.title}</h3>
        <p><b>Company: </b>${job.company}</p>
        <p><b>Years of Experience:</b> ${job.experience} Year(s)</p>
        <p><b>${job.type}</b></p><br>
        <p><b>Description:</b> ${job.description}</p>
        <br/>
        <p><b>Status: </b>${job.status}</p>
      `;

      container.appendChild(jobDiv);
    });

    document.querySelectorAll(".job-card").forEach((card) => {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        const url = card.getAttribute("data-url");
        if (url) {
          window.location.href = url;
        }
      });
    });
  }

  displayJobs(jobsFromStorage);

 
  let searchbar = document.getElementById('search-input');
  let minYears = document.getElementById('min-input');
  let maxYears = document.getElementById('max-input');
  searchbar.value = sessionStorage.getItem('tempSearch');

  function searchjobs(titleValue, minYearsValue, maxYearsValue) {
    let filteredJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    let selectedType = document.querySelector('input[name="job-type"]:checked').value;

    if (titleValue.length > 0) {
      filteredJobs = filteredJobs.filter(job =>
        job.title.toLowerCase().includes(titleValue.toLowerCase())
      );
    }

    if (minYearsValue.length > 0) {
      filteredJobs = filteredJobs.filter(job =>
        parseInt(job.experience) >= minYearsValue
      );
    }

    if (maxYearsValue.length > 0) {
      filteredJobs = filteredJobs.filter(job =>
        parseInt(job.experience) <= maxYearsValue
      );
    }

    if (selectedType != 'All') {
      filteredJobs = filteredJobs.filter(job => job.type == selectedType);
    }

    displayJobs(filteredJobs);
  }

  searchjobs(searchbar.value, minYears.value, maxYears.value);

  searchbar.onkeyup = function () {
    searchjobs(searchbar.value, minYears.value, maxYears.value);
  };
  minYears.onkeyup = function () {
    searchjobs(searchbar.value, minYears.value, maxYears.value);
  };
  maxYears.onkeyup = function () {
    searchjobs(searchbar.value, minYears.value, maxYears.value);
  };
  document.querySelectorAll('input[name="job-type"]').forEach((radio) => {
    radio.onclick = function () {
      searchjobs(searchbar.value, minYears.value, maxYears.value);
    };
  });
});
