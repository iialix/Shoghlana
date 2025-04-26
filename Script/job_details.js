document.addEventListener("DOMContentLoaded", function () {
  function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
  }

  document.querySelector(".job_title").textContent = getQueryParam("title") || "Job Title";
  document.querySelector(".company_name").textContent = getQueryParam("company") || "Company Name";
  document.querySelector(".job_id").textContent = "ID: " + (getQueryParam("id") || "N/A");
  document.querySelector(".salary").textContent = "Salary: " + (getQueryParam("salary") || "0000") + "$";
  document.querySelector(".job_status").textContent = "Status: " + (getQueryParam("status") || "Unknown");
  document.querySelector(".job_experience").textContent = "Experience required: " + (getQueryParam("experience") || "0") + " Year(s)";
  document.querySelector(".job_description").textContent = "Job Description: " + (getQueryParam("description") || "No description provided.");

  const statusElement = document.querySelector(".job_status");
  const applyButton = document.querySelector(".apply_button");

  if (statusElement && applyButton) {
      const statusText = statusElement.textContent.toLowerCase();

      
      if (statusText.includes("closed")) {
          applyButton.style.display = "none";
      }

      
      applyButton.addEventListener("click", function () {
          const job = {
              title: document.querySelector(".job_title").textContent,
              company: document.querySelector(".company_name").textContent,
              salary: document.querySelector(".salary").textContent.replace("Salary: ", "").replace("$", ""),
              experience: document.querySelector(".job_experience").textContent.replace("Experience required: ", "").replace(" Year(s)", ""),
              status: document.querySelector(".job_status").textContent.replace("Status: ", ""),
              description: document.querySelector(".job_description").textContent.replace("Job Description: ", ""),
          };

          let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
          appliedJobs.push(job);
          localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

          alert("Job applied successfully!");
          window.location.href = "applied_jobs.html"; 
      });
  }
});
