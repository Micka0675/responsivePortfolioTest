var light = document.getElementById("light");
var comBox = document.getElementById("comBox");
var envoi = document.getElementById("com");
var blocPendu = document.getElementById("blocPendu");
var blocBblio = document.getElementById("blocBblio");
var blocCv = document.getElementById("blocCv");
var blocSp = document.getElementById("blocSp");
var real = document.querySelectorAll(".real");
var pop = document.querySelectorAll(".pop");
var choix1 = document.getElementById("choix1");
var choix2 = document.getElementById("choix2");
var choix3 = document.getElementById("choix3");
var opts = document.querySelectorAll(".opts");
var txtMaq = document.getElementById("txtMaq");
var wrapper = document.getElementById("wrapper");
var aside = document.getElementsByTagName("aside")[0];
var left = document.getElementById("left");
var right = document.getElementById("right");

console.log(choix1);
console.log(opts);
console.log(txtMaq);

left.addEventListener('click', hideNav);
right.addEventListener('click', popNav);
choix1.addEventListener('change', popDiv);
envoi.addEventListener('click', afficheInfo);

blocPendu.addEventListener('mouseover',detail);
blocPendu.addEventListener('mouseout',hide);

blocBblio.addEventListener('mouseover',detail2);
blocBblio.addEventListener('mouseout',hide2);

blocCv.addEventListener('mouseover',detail3);
blocCv.addEventListener('mouseout',hide3);

blocSp.addEventListener('mouseover',detail4);
blocSp.addEventListener('mouseout',hide4);

function hideNav(){
    wrapper.setAttribute('class',"newWrap");
    wrapper.classList.remove("wrapper");
    aside.setAttribute('class',"newAside");
    aside.classList.remove('defaultAs');
    left.style.display = "none";
    right.style.display = "block";
}

function popNav(){
    wrapper.setAttribute('class',"wrapper");
    wrapper.classList.remove("newWrap");
    aside.setAttribute('class',"defaultAs");
    aside.classList.remove('newAside');
    left.style.display = "block";
    right.style.display = "none";
}

function popDiv()
{
    var txtIntS = document.getElementById('txtIntS');
    var txtIntW = document.getElementById('txtIntW');
    var txtGest = document.getElementById('txtGest');
    var txtBack = document.getElementById('txtBack');
    var txtBase = document.getElementById('txtBase');
    var txtSecu = document.getElementById('txtSecu');
// for (j = 0 ; j < choix.length ; j++)
    // {
        // for (k = 0 ; k < opts.length ; k++)
        // {
    console.log(opts[1].value);
    console.log(opts[2].value);
    console.log(opts[3].value);
    console.log(opts[4].value);
    console.log(opts[5].value);
    console.log(opts[6].value);
    console.log(opts[7].value);


    if (opts[0].selected == true)
    {
        txtMaq.style.display = "none";
        txtIntS.style.display = "none";
        txtIntW.style.display = "none";
        txtGest.style.display = "none";
        txtBack.style.display = "none";
        txtBase.style.display = "none";
        txtSecu.style.display = "none";
    }
    if (opts[1].selected == true)
    {
        txtMaq.style.display = "flex";
        txtIntS.style.display = "none";
        txtIntW.style.display = "none";
        txtGest.style.display = "none";
        txtBack.style.display = "none";
        txtBase.style.display = "none";
        txtSecu.style.display = "none";
    }
    else
    {
        txtMaq.style.display = "none";
    }
    if (opts[2].selected == true)
    {
        choix2.style.display ="block";
        choix2.addEventListener('change' , popDiv2);
        
        function popDiv2()
        {
            
        
            if (opts[5].selected == true)
            {
                txtIntS.style.display = "flex";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtIntS.style.display = "none";
            }
            if (opts[6].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "flex";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtIntW.style.display = "none";
            }
            if (opts[7].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "flex";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtGest.style.display = "none";
            }
        }
    }
    else
    {
        choix2.style.display = "none";
    }
    if (opts[3].selected == true)
    {
        choix3.style.display ="block";
        choix3.addEventListener('change' , popDiv3);
        
        function popDiv3()
        {
            
        
            if (opts[9].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "flex";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtBack.style.display = "none";
            }
            if (opts[10].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "flex";
                txtSecu.style.display = "none";
            }
            else
            {
                txtBase.style.display = "none";
            }
            if (opts[11].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "flex";
            }
            else
            {
                txtSecu.style.display = "none";
            }
        }
    }
    else
    {
        choix3.style.display = "none";
    }
}

function afficheInfo()
{
    var name = document.body.querySelectorAll(".info");
    var commentaire = document.getElementById("commentaire");

    comBox.innerHTML = "<p id=\"vae\"> Vous avez entré : </p> <p id=\"comsList\"><p>" + name[0].value + "</p><p>" + name[1].value + "</p><p>" + name[2].value + "</p><p>" + commentaire.value + "</p></p>"

}

light.addEventListener('click', lightMode);

function lightMode()
{
    var element = document.body;

    
    element.classList.toggle("lightMode");

}

function detail()
{
        {
            document.getElementById('pop1').style.visibility = "visible";
            pop[0].innerHTML = "<p>Site web Arboriste 06</p>";
        }
        
}

function detail2()
{
        {
            document.getElementById('pop2').style.visibility = "visible";
            pop[1].innerHTML = "<p>Site web Riviera Production</p>";
        }
        
}

function detail3()
{
        {
            document.getElementById('pop3').style.visibility = "visible";
            pop[2].innerHTML = "<p>Mon Cv en ligne!</p>";
        }
        
}

function detail4()
{
        {
            document.getElementById('pop4').style.visibility = "visible";
            pop[3].innerHTML = "<p>Jeu Motus mobile responsive</p>";
        }
        
}

function hide()
{
    document.getElementById('pop1').style.visibility = "hidden";
}

function hide2()
{
    document.getElementById('pop2').style.visibility = "hidden";
}

function hide3()
{
    document.getElementById('pop3').style.visibility = "hidden";
}

function hide4()
{
    document.getElementById('pop4').style.visibility = "hidden";
}


    







