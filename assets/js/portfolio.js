/*---------------------------------------------loader----------------------------------------*/
$("#header").css("display", 'none');
let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    loader.style.display = 'none';
    $("#header").css("display", 'block');

});


/*---------------------------------------------typescript----------------------------------------*/
let typed = new Typed("#type-script", {
    strings: ["", "Software Engineer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

// execute after all the content fully loaded
window.addEventListener('load', function () {
    let professionElement = document.getElementById("profession");
    professionElement.style.display = "none";
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: block;}`;
    document.head.appendChild(style);
});

// run after just creating the DOM
document.addEventListener('DOMContentLoaded', function () {
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
});


/*---------------------------------------------projects slider----------------------------------------*/
let projectImages = [
    "assets/image/salon.png",
    "assets/image/projectORM.png",
    "assets/image/hotel.png",
    "assets/image/shop.png",
    "assets/image/chatApp.png"
];
let projectHref = [
    "https://github.com/Dhananjaya1321/Salon-Management-System",
    "https://github.com/Dhananjaya1321/HostelManagementSystem",
    "https://github.com/Dhananjaya1321/BlueOceanHotel",
    "https://github.com/Dhananjaya1321/WholesaleShop",
    "https://github.com/Dhananjaya1321/GroupChatApp"
];

$("#btn-left-projects").click(function () {
    let first = projectImages[0];
    let firstHref = projectHref[0];
    projectImages.shift();
    projectImages.push(first);
    projectHref.shift();
    projectHref.push(firstHref);

    $("#move-1>a>div").css({
        "background": `url(${projectImages[0]})`,
        "background-size": "cover",
    });
    $("#move-1>a").attr("href", `${projectHref[0]}`);

    $("#move-2>a>div").css({
        "background": `url(${projectImages[1]})`,
        "background-size": "cover",
    });
    $("#move-2>a").attr("href", `${projectHref[1]}`);

    $("#move-3>a>div").css({
        "background": `url(${projectImages[2]})`,
        "background-size": "cover",
    });
    $("#move-3>a").attr("href", `${projectHref[2]}`);

});
$("#btn-right-projects").click(function () {
    let last = projectImages[projectImages.length - 1];
    let lastHref = projectHref[projectHref.length - 1];
    projectImages.pop();
    projectImages.unshift(last);
    projectHref.pop();
    projectHref.unshift(lastHref);

    $("#move-1>a>div").css({
        "background": `url(${projectImages[0]})`,
        "background-size": "cover",
    });
    $("#move-1>a").attr("href", `${projectHref[0]}`);

    $("#move-2>a>div").css({
        "background": `url(${projectImages[1]})`,
        "background-size": "cover",
    });
    $("#move-2>a").attr("href", `${projectHref[1]}`);

    $("#move-3>a>div").css({
        "background": `url(${projectImages[2]})`,
        "background-size": "cover",
    });
    $("#move-3>a").attr("href", `${projectHref[2]}`);

});
/*---------------------------------------------assignment slider----------------------------------------*/
let assignmentImages = [
    "assets/image/Assignment1.png",
    "assets/image/Assignment2.png",
    "assets/image/Assignment3.png",
    "assets/image/Assignment4.png",
    "assets/image/Assignment5.png",
    "assets/image/Assignment6.png",
    "assets/image/Assignment7.png",
    "assets/image/Assignment9.png",
    "assets/image/Assignment8.png",
    "assets/image/Assignment10.png",
    "assets/image/Assignment11.png",
    "assets/image/Assignment12.png",
    "assets/image/Assignment13.png",
    "assets/image/Assignment14.png",
    "assets/image/Assignment15.png",
    "assets/image/Assignment16.png",
    "assets/image/Assignment13.png",
    "assets/image/Assignment17.png"
];
let assignmentHref = [
    "assignment/CSS/CaseOne/index.html",
    "assignment/CSS/CaseTwo/index.html",
    "assignment/CSS/CaseThree/index.html",
    "assignment/CSS/CaseFour/index.html",
    "assignment/CSS/CaseFiveAndSix/index.html",
    "assignment/CSS/CaseFiveAndSix/index.html",
    "assignment/Transitions/CaseOne/index.html",
    "assignment/Transitions/CaseTwo/index.html",
    "assignment/Animations/CaseThree/index.html",
    "assignment/Animations/CaseFour/index.html",
    "assignment/Animations/CaseFive/index.html",
    "assignment/Animations/CaseSix/index.html",
    "assignment/CSS-Framework/index.html",
    "assignment/JS/SPA/index.html",
    "assignment/JS/QUE/index.html",
    "assignment/JS/KNIGHT/index.html",
    "assignment/JS/InMemoryPOS/index.html",
    "assignment/JS/CAL/index.html"
];

$("#btn-left-assignment").click(function () {
    let first = assignmentImages[0];
    let firstHref = assignmentHref[0];
    assignmentImages.shift();
    assignmentImages.push(first);
    assignmentHref.shift();
    assignmentHref.push(firstHref);

    $("#move-assignments-1>a>div").css({
        "background": `url(${assignmentImages[0]})`,
        "background-size": "cover",
    });
    $("#move-assignments-1>a").attr("href", `${assignmentHref[0]}`);

    $("#move-assignments-2>a>div").css({
        "background": `url(${assignmentImages[1]})`,
        "background-size": "cover",
    });
    $("#move-assignments-2>a").attr("href", `${assignmentHref[1]}`);

    $("#move-assignments-3>a>div").css({
        "background": `url(${assignmentImages[2]})`,
        "background-size": "cover",
    });
    $("#move-assignments-3>a").attr("href", `${assignmentHref[2]}`);

});
$("#btn-right-assignment").click(function () {
    let last = assignmentImages[assignmentImages.length - 1];
    let lastHref = assignmentHref[assignmentHref.length - 1];
    assignmentImages.pop();
    assignmentImages.unshift(last);
    assignmentHref.pop();
    assignmentHref.unshift(lastHref);

    $("#move-assignments-1>a>div").css({
        "background": `url(${assignmentImages[0]})`,
        "background-size": "cover",
        "background-position": "center",
    });
    $("#move-assignments-1>a").attr("href", `${assignmentHref[0]}`);

    $("#move-assignments-2>a>div").css({
        "background": `url(${assignmentImages[1]})`,
        "background-size": "cover",
        "background-position": "center",
    });
    $("#move-assignments-2>a").attr("href", `${assignmentHref[1]}`);

    $("#move-assignments-3>a>div").css({
        "background": `url(${assignmentImages[2]})`,
        "background-size": "cover",
        "background-position": "center",
    });
    $("#move-assignments-3>a").attr("href", `${assignmentHref[2]}`);

});

/*---------------------------------------------nav-bar colors----------------------------------------*/
let liValue;
$('header>nav>menu>li:nth-child(1)').click(function () {
    setColor($("header>nav>menu>li:nth-child(1)").val());
});
$('header>nav>menu>li:nth-child(2)').click(function () {
    setColor($("header>nav>menu>li:nth-child(2)").val());
});
$('header>nav>menu>li:nth-child(3)').click(function () {
    setColor($("header>nav>menu>li:nth-child(3)").val());
});
$('header>nav>menu>li:nth-child(4)').click(function () {
    setColor($("header>nav>menu>li:nth-child(4)").val());
});
$('header>nav>menu>li:nth-child(5)').click(function () {
    setColor($("header>nav>menu>li:nth-child(5)").val());
});
$('header>nav>menu>li:nth-child(6)').click(function () {
    setColor($("header>nav>menu>li:nth-child(6)").val());
});
$('header>nav>menu>li:nth-child(7)').click(function () {
    setColor($("header>nav>menu>li:nth-child(7)").val());
});
$('header>nav>menu>li:nth-child(8)').click(function () {
    setColor($("header>nav>menu>li:nth-child(8)").val());
});

function setColor(i) {
    setDefaultColor(i);
    switch (i) {
        case 1:
            $("header>nav>menu>li:nth-child(1)>a").css("color", "#0089ff");
            $("header>nav>menu>li:nth-child(1)>a").css("transition", "0.3s all");

            break;
        case 2:
            $("header>nav>menu>li:nth-child(2)>a").css("color", "#0089ff");
            break;
        case 3:
            $("header>nav>menu>li:nth-child(3)>a").css("color", "#0089ff");
            break;
        case 4:
            $("header>nav>menu>li:nth-child(4)>a").css("color", "#0089ff");
            break;
        case 5:
            $("header>nav>menu>li:nth-child(5)>a").css("color", "#0089ff");
            break;
        case 6:
            $("header>nav>menu>li:nth-child(6)>a").css("color", "#0089ff");
            break;
        case 7:
            $("header>nav>menu>li:nth-child(7)>a").css("color", "#0089ff");
            break;
        case 8:
            $("header>nav>menu>li:nth-child(8)>a").css("color", "#0089ff");
            break;
    }
}

function setDefaultColor(i) {

    for (let j = 1; j < 9; j++) {
        if (i === j) {
            continue
        }
        console.log(i);
        switch (j) {
            case 1:
                $("header>nav>menu>li:nth-child(1)>a").css("color", "black");
                break;
            case 2:
                $("header>nav>menu>li:nth-child(2)>a").css("color", "black");
                break;
            case 3:
                $("header>nav>menu>li:nth-child(3)>a").css("color", "black");
                break;
            case 4:
                $("header>nav>menu>li:nth-child(4)>a").css("color", "black");
                break;
            case 5:
                $("header>nav>menu>li:nth-child(5)>a").css("color", "black");
                break;
            case 6:
                $("header>nav>menu>li:nth-child(6)>a").css("color", "black");
                break;
            case 7:
                $("header>nav>menu>li:nth-child(7)>a").css("color", "black");
                break;
            case 8:
                $("header>nav>menu>li:nth-child(8)>a").css("color", "black");
                break;
        }
    }
}

