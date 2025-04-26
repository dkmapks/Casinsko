const form = document.getElementById('dataForm');
const formContainer = document.getElementById('formContainer');
const appContainer = document.getElementById('appContainer');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Pobranie danych
  const name = document.getElementById('name').value;
  const pesel = document.getElementById('pesel').value;
  const birthdate = document.getElementById('birthdate').value;
  const citizenship = document.getElementById('citizenship').value;

  const idNumber = document.getElementById('idNumber').value;
  const idValidUntil = document.getElementById('idValidUntil').value;
  const issuer = document.getElementById('issuer').value;

  // Wstawienie danych
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayPesel').textContent = pesel;
  document.getElementById('displayBirthdate').textContent = birthdate;
  document.getElementById('displayCitizenship').textContent = citizenship;
  document.getElementById('displayIdNumber').textContent = idNumber;
  document.getElementById('displayIdValidUntil').textContent = idValidUntil;
  document.getElementById('displayIssuer').textContent = issuer;

  // Pokazanie aplikacji
  formContainer.style.display = 'none';
  appContainer.style.display = 'block';

  // Domyślnie pokaż sekcję Tożsamość
  showSection('identity');
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');

  document.getElementById(sectionId).style.display = 'block';
}
