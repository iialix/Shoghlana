document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".jobs-container");
  
    
    const jobsFromStorage = JSON.parse(localStorage.getItem("jobs")) || [];
  
    jobsFromStorage.forEach((job) => {
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
  
    // Make all job cards clickable (including static ones)
    document.querySelectorAll(".job-card").forEach((card) => {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        const url = card.getAttribute("data-url");
        if (url) {
          window.location.href = url;
        }
      });
    });
  });
  