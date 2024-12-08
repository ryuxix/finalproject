// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get the body ID to identify which page is loaded
    const pageId = document.body.id;

    // Functionality for Charity 1
    if (pageId === "charity1") {
        addDynamicDetails("Fact about The Salvation Army is that it helps those in need 365 days a year. Founded by William and Catherine Booth in 1865, The Salvation Army is an international organization and evangelical part of the universal Christian church that meets the physical and spiritual needs of people in 132 countries around the globe, without discrimination..");
    }

    // Functionality for Charity 2
    else if (pageId === "charity2") {
        addDynamicDetails("Fact about Feeding America is that nearly 40% of all food is wasted in the U.S. annually but Feeding America and our network rescued 3.6 billion pounds last year for people facing hunger.");
    }

    // Functionality for Charity 3
    else if (pageId === "charity3") {
        addDynamicDetails("Fact about American National Red Cross is that The Red Cross emblem is protected by international law and is not a logo. It's also not a religious symbol, but is actually the reverse of the Swiss flag and The Red Cross provides about 40% of the nation's blood and blood components.");
    }

    // Add event listener to "Volunteer Now" button
    const volunteerButton = document.getElementById("volunteerButton");
    const volunteerForm = document.getElementById("volunteerForm");

    volunteerButton.addEventListener("click", function () {
        // Toggle the visibility of the form
        if (volunteerForm.style.display === "none" || volunteerForm.style.display === "") {
            volunteerForm.style.display = "block";
        } else {
            volunteerForm.style.display = "none";
        }
    });

    // Function to add dynamic details section
    function addDynamicDetails(detailsText) {
        const charityDetails = document.createElement("div");
        charityDetails.id = "charityDetails";
        charityDetails.style.marginTop = "20px";
        charityDetails.style.padding = "10px";
        charityDetails.style.border = "1px solid #ccc";
        charityDetails.style.borderRadius = "5px";
        charityDetails.style.backgroundColor = "#f9f9f9";
        charityDetails.innerHTML = `
            <h3>Important Facts About This Charity</h3>
            <p>Hover over this to learn more!</p>
        `;

        // Add hover functionality to display more details
        charityDetails.addEventListener("mouseover", function () {
            charityDetails.innerHTML = `
                <h3>Important Facts About This Charity</h3>
                <p>${detailsText}</p>
            `;
        });

        charityDetails.addEventListener("mouseout", function () {
            charityDetails.innerHTML = `
                <h3>Important Facts About This Charity</h3>
                <p>Hover over this to learn more!</p>
            `;
        });

        // Append the dynamic element to the main content area
        const mainContent = document.querySelector("main");
        mainContent.appendChild(charityDetails);
    }
});