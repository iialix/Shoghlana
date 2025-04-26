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

      // Check if the status contains "closed"
      if (statusText.includes("closed")) {
        applyButton.style.display = "none";
      }
      }
  });
  