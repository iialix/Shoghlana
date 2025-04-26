document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".company-view");

    const jobs = JSON.parse(localStorage.getItem("posted_jobs")) || [];

    jobs.forEach((job) => {
      const jobCard = document.createElement("div");
      jobCard.className = "job-card";

      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><b>Company:</b> ${job.company}</p>
        <p><b>Applicants:</b> 0</p>
        <p><b>Status:</b> ${job.status}</p>
      `;

      container.appendChild(jobCard);
    });
  });