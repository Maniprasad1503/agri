function showContent(sectionId) {
    // Hide all sections
    const contents = document.querySelectorAll('.content');
    contents.forEach((content) => content.classList.add('hidden'));

    // Show the selected section
    const selectedContent = document.getElementById(sectionId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    // Update title and description dynamically
    const contentTitle = document.getElementById('content-title');
    const contentDescription = document.getElementById('content-description');

    if (sectionId === 'schemes-subsidies') {
        contentTitle.textContent = 'Schemes and Subsidies';
        contentDescription.textContent = 'Here are the details for all schemes and subsidies.';
    } else {
        contentTitle.textContent = 'Welcome';
        contentDescription.textContent = 'Select a feature from the left to see details.';
    }
}
