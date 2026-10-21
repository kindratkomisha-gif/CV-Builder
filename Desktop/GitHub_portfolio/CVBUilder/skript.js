const AddButton = document.getElementById("add-kontakt");
const LeftArea = document.getElementById("left-area");
const RightArea = document.getElementById('right-area');

const Name = document.getElementById('name');
const DateOfBirthday = document.getElementById('dateOfBirthday');
const PhoneNumber = document.getElementById('phoneNumber');
const Email = document.getElementById('email');
const Profile = document.getElementById('profile');
const WorkExperience = document.getElementById('workExperience');
const Education = document.getElementById('education');
const Skills = document.getElementById('skills');
const Projects = document.getElementById('projects');

const DownloadBtn = document.getElementById('download-pdf');

DownloadBtn.addEventListener('click', () => {
    window.print();
});

const ResumeData = {
    personal: { 
        name: '', 
        dateOfBirthday: '', 
        phoneNumber: '', 
        email: '',
        contacts: [] 
    },
    profile: { 
        profile: '', 
        workExperience: '', 
        education: '', 
        skills: '', 
        projects: '' 
    }
};

function bindInput(element, category, key) {
    if (!element) return;
    element.addEventListener('input', (e) => {
        ResumeData[category][key] = e.target.value;
        renderCV();
    });
}

bindInput(Name, 'personal', 'name');
bindInput(DateOfBirthday, 'personal', 'dateOfBirthday');
bindInput(PhoneNumber, 'personal', 'phoneNumber');
bindInput(Email, 'personal', 'email');
bindInput(Profile, 'profile', 'profile');
bindInput(WorkExperience, 'profile', 'workExperience');
bindInput(Education, 'profile', 'education');
bindInput(Skills, 'profile', 'skills');
bindInput(Projects, 'profile', 'projects');

AddButton.addEventListener('click', () => {
    const currentContactIndex = ResumeData.personal.contacts.length;
    ResumeData.personal.contacts.push(""); 

    const input = document.createElement('input');
    input.className = 'InputNewKontakt';
    input.type = 'text';
    input.placeholder = 'Another Kontakt';

    input.addEventListener('input', (e) => {
        ResumeData.personal.contacts[currentContactIndex] = e.target.value;
        renderCV();
    });

    LeftArea.appendChild(input);
    renderCV();
});

function renderCV() {
    if (!RightArea) return;

    const extraContacts = ResumeData.personal.contacts
        .filter(c => c.trim() !== "")
        .join(' • ');

    RightArea.innerHTML = `
        <div class="resume-paper">
            <header class="resume-header">
                <h1>${ResumeData.personal.name || 'FIRST NAME SURNAME'}</h1>
                <div class="contact-info">
                    <p>${ResumeData.personal.dateOfBirthday} ${ResumeData.personal.phoneNumber ? '• ' + ResumeData.personal.phoneNumber : ''}</p>
                    <p>${ResumeData.personal.email}</p>
                    ${extraContacts ? `<p class="extra-contacts">${extraContacts}</p>` : ''}
                </div>
            </header>

            <div class="resume-section">
                <h3 class="section-title">About me</h3>
                <p class="section-content">${ResumeData.profile.profile}</p>
            </div>

            <div class="resume-section">
                <h3 class="section-title">Experience</h3>
                <p class="section-content">${ResumeData.profile.workExperience}</p>
            </div>

            <div class="resume-section">
                <h3 class="section-title">Education</h3>
                <p class="section-content">${ResumeData.profile.education}</p>
            </div>

            <div class="resume-section">
                <h3 class="section-title">Skills</h3>
                <p class="section-content" style="color: #007bff; font-weight: bold;">${ResumeData.profile.skills}</p>
            </div>

            <div class="resume-section">
                <h3 class="section-title">Projects</h3>
                <p class="section-content">${ResumeData.profile.projects}</p>
            </div>
        </div>
    `;
}

renderCV();