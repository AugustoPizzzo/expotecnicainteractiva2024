function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function vote(projectId) {
    $.post('', { action: 'vote', project_id: projectId }, function(response) {
        alert('Voto registrado con éxito.');
        location.reload();
    });
}
