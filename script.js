function showServiceDetail(serviceName) {
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
  
    const serviceDetails = {
      "Maintenance": "Our certified BMW service technicians will ensure your vehicle stays in top condition with regular maintenance plans.",
      "Repairs": "From minor fixes to major overhauls, our BMW service centers offer professional repairs with genuine parts.",
      "Diagnostics": "Cutting-edge diagnostics technology helps detect issues early and ensure smooth performance.",
      "Detailing": "We offer interior and exterior detailing using BMW-approved materials and techniques for a pristine finish."
    };
  
    modalTitle.textContent = serviceName;
    modalDescription.textContent = serviceDetails[serviceName];
    modal.classList.remove("hidden");
  }
  
  function closeModal() {
    const modal = document.getElementById("serviceModal");
    modal.classList.add("hidden");
  }
  