function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64Q6i1mG1A6":
        Script1();
        break;
      case "5j2iRiPWPSM":
        Script2();
        break;
      case "62Oxy52i6ZR":
        Script3();
        break;
  }
}

function Script1()
{
  window.print();
}

function Script2()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script3()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate);

window.open(urlstring,"_blank","width=800,height=600,menubar=no");

}

