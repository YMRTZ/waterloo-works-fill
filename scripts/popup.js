const saveButton = document.getElementById("saveButton");
const defaultCoverLetterNameInput = document.getElementById("defaultCoverLetterName");
const useDefaultCoverLetterCheck = document.getElementById("useDefaultCoverLetter");
const defaultResumeNameInput = document.getElementById("defaultResumeName");
const useDefaultResumeCheck = document.getElementById("useDefaultResume");

chrome.storage.local.get(["defaultCoverLetterName", "useDefaultCoverLetter", "defaultResumeName", "useDefaultResume"]).then((result) => {
    defaultCoverLetterNameInput.value = result.defaultCoverLetterName;
    useDefaultCoverLetterCheck.checked = result.useDefaultCoverLetter;
    defaultResumeNameInput.value = result.defaultResumeName;
    useDefaultResumeCheck.checked = result.useDefaultResume;
})

saveButton.addEventListener("click", saveSettings);
async function saveSettings() {
    await chrome.storage.local.set({
        defaultCoverLetterName: defaultCoverLetterNameInput.value,
        useDefaultCoverLetter: useDefaultCoverLetterCheck.checked,
        defaultResumeName: defaultResumeNameInput.value,
        useDefaultResume: useDefaultResumeCheck.value
    });
}
