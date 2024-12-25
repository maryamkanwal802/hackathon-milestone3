document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    function validateForm() {
        var form = document.getElementById("resumeform");
        if (!form.checkValidity) {
            alert("please fill all required fileds correctly.");
            return false;
        }
        return true;
    }
    function generateresume() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("eperience").value;
        var picture = document.getElementById("picture").value;
        //populate resume//
        document.getElementById("displyName").innerText = name;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displayPicture").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL;
            ("picture");
        }
    }
    ;
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateresume();
        }
    });
    //generate resume//
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateresume);
    (_c = document.getElementById("picture")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateresume);
    (_d = document.getElementById("email")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateresume);
    (_e = document.getElementById("address")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateresume);
    (_f = document.getElementById("phone")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateresume);
    (_g = document.getElementById("skills")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateresume);
    (_h = document.getElementById("education")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateresume);
    (_j = document.getElementById("experience")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateresume);
});
