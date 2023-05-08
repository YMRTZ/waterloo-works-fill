const appHeaderElements = document.getElementsByClassName("h3 dashboard-header__profile-information-name mobile--small-font color--font--white margin--b--s");
// const appNumber = appHeaderElements[0].innerHTML.replace(/[^0-9]/g, '')
const appNumber = appHeaderElements[0].innerHTML.replace(/[^0-9]/g, '').substring(0,6);

const appRadios = document.getElementsByName("applyOption");
for(i = 0; i < appRadios.length; i++) {
    if(appRadios[i].value == "customPkg") {
        appRadios[i].click();
    }
}

const packageInput = document.getElementById("packageName");
packageInput.value = appNumber + " Application";

const workHistoryElement = document.getElementById("requiredInPackage76");
workHistoryElement.value = workHistoryElement.options[1].value;

const coverLetterElement = document.getElementById("requiredInPackage66");
chrome.storage.local.get(["defaultCoverLetterName", "useDefaultCoverLetter"]).then((result) => {
    if(result.useDefaultCoverLetter) {
        for(i = 0; i < coverLetterElement.options.length; i++) {
            if(result.defaultCoverLetterName == coverLetterElement.options[i].innerHTML.substring(0, coverLetterElement.options[i].innerHTML.indexOf(" (Date created:"))) {
                coverLetterElement.value = coverLetterElement.options[i].value;
            }
        }
    }
})

const resumeElement = document.getElementById("requiredInPackage67");
chrome.storage.local.get(["defaultResumeName", "useDefaultResume"]).then((result) => {
    if(result.useDefaultResume) {
        for(i = 0; i < resumeElement.options.length; i++) {
            if(result.defaultResumeName == resumeElement.options[i].innerHTML.substring(0, resumeElement.options[i].innerHTML.indexOf(" (Date created:"))) {
                resumeElement.value = resumeElement.options[i].value;
            }
        }
    }
})

const gradeReportElement = document.getElementById("requiredInPackage71");
gradeReportElement.value = gradeReportElement.options[1].value;