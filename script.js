let userDataArray = [];

function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        profession: document.getElementById('profession').value,
        skills: document.getElementById('skills').value,
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
    };

    userDataArray.push(formData);

    // Update the table
    updateTable();

    // Clear the form
    document.getElementById('userForm').reset();

    // Store data in JSON format using PHP
    sendDataToPHP(formData);
}

function updateTable() {
    const tableBody = document.getElementById('userDataBody');
    tableBody.innerHTML = '';

    userDataArray.forEach((userData, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.profession}</td>
            <td>${userData.skills}</td>
            <td>${userData.experience}</td>
            <td>${userData.education}</td>
            <td><button onclick="editData(${index})">Edit</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function resetForm() {
    document.getElementById('userForm').reset();
}

function editData(index) {
    const userData = userDataArray[index];
    document.getElementById('name').value = userData.name;
    document.getElementById('profession').value = userData.profession;
    document.getElementById('skills').value = userData.skills;
    document.getElementById('experience').value = userData.experience;
    document.getElementById('education').value = userData.education;

    // Remove the edited data from the array
    userDataArray.splice(index, 1);

    // Update the table
    updateTable();
}

function sendDataToPHP(data) {
    // Use AJAX or fetch to send data to a PHP file
    fetch('index.php', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response if needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
