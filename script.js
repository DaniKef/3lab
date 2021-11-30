var btn = document.getElementById('btnCreateTable');
function GetRandomInt(min, max)
{
  min = Math.ceil(min); // Округление вверх
  max = Math.floor(max); // Округление вниз
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function CreateTable()
{
  var table = "";
  var min = document.getElementById("InputMin").value;
  var max = document.getElementById("InputMax").value;
  if(parseInt(min) && parseInt(max))
  {
    table+='<table width="60%" border="0" style="margin: auto;">';
    for (i=1; i<11; i++)
    {
        table+="<tr>";
      for (j=1; j<11; j++)
      {
        if(i%2==0)
        {
          if(j%2==0)
          table+="<td style='background: #ffcb9b;'>" + GetRandomInt(min, max) + "<\/td>";
          else
          table+="<td style='background: #915f50;'>" + GetRandomInt(min, max) + "<\/td>";
        }
        else
        {
          if(j%2==1)
          table+="<td style='background: #ffcb9b;'>" + GetRandomInt(min, max) + "<\/td>";
          else
          table+="<td style='background: #915f50;'>" + GetRandomInt(min, max) + "<\/td>";
        }
      }
      table+="<\/tr>";
    }
    table+="<\/table> ";
    document.getElementById("Table").innerHTML = table;
  }
  else
  {
    alert("Вводите корректно");
  }
}

btn.addEventListener("click", CreateTable);
