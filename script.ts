document.addEventListener("DOMContentLoaded" , ()=>{
    function validateForm(){
        const form = document.getElementById("resumeform")as HTMLFormElement;
        if(!form.checkValidity){
            alert("please fill all required fileds correctly.")
            return false;
        }
        return true;
    }

    function generateresume(){
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("eperience") as HTMLTextAreaElement).value;
        const picture = (document.getElementById("picture") as HTMLInputElement).value;

        //populate resume//
        (document.getElementById("displyName") as HTMLElement).innerText = name;
        (document.getElementById("displayEmail") as HTMLElement).innerText = email;
        (document.getElementById("displayPhone") as HTMLElement).innerText = phone;
        (document.getElementById("displayAddress") as HTMLElement).innerText = address;
        (document.getElementById("displaySkills") as HTMLElement).innerText = skills;
        (document.getElementById("displayEducation") as HTMLElement).innerText = education;
        (document.getElementById("displayExperience") as HTMLElement).innerText = experience;

        if(picture){
            const reader = new FileReader();
            reader.onload = function (e) {
        (document.getElementById("displayPicture") as HTMLImageElement).src = e.target?.result as string;
            };
            reader.readAsDataURL;("picture");

        }
    };


    document.getElementById("resumeform")?.addEventListener("submit",function(event){
        event.preventDefault();
        if (validateForm()){
            generateresume();
        }
    })
        //generate resume//

        document.getElementById("name")?.addEventListener("input", generateresume);
        document.getElementById("picture")?.addEventListener("input", generateresume);
        document.getElementById("email")?.addEventListener("input",generateresume);
        document.getElementById("address")?.addEventListener("input",generateresume);
        document.getElementById("phone")?.addEventListener("input",generateresume);
        document.getElementById("skills")?.addEventListener("input",generateresume);
        document.getElementById("education")?.addEventListener("input",generateresume);
        document.getElementById("experience")?.addEventListener("input" ,generateresume);

})