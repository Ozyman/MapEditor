
function cmdStringFromTerritorySetForm(id) {

    CmdString = "";

    RegexID = "TerritorySet"+id+"Regex";
    CSVID = "TerritorySet"+id+"CSV";
    ContinentID = "TerritorySet"+id+"Continent";

    CmdString += $("#"+RegexID).val();
    CmdString += ";";

    CmdString += $("#"+CSVID).val();
    CmdString += ";";

    CmdString += $("#"+ContinentID).val();
    CmdString += ";";

    return CmdString;
}
function cmdStringDCFromTerritorySetForm(id) {

    DCID = "DeleteTerritorySet"+id+"Continent";
    ContinentID = "TerritorySet"+id+"Continent";
    CmdString = "";

    if ( $('#'+DCID).prop('checked')){
	CmdString += "\nDeleteContinent;" + $('#'+ContinentID).val();
    }
    return CmdString;
}

function cmdStringFromNewContinentForm(id) {

    CmdString = "";

    valueID = id+"ContinentValue";
    typeID = id+"FactoryType";
    prefixID = id+"ContinentPrefix";

    CmdString += $("#"+valueID).val();
    CmdString += ";";

    CmdString += $("#"+typeID).val();
    CmdString += ";";

    CmdString += $("#"+prefixID).val();
    CmdString += ";";

    return CmdString;
}

function cmdStringFromOneWayBorderForm(namePrefix) {

    CmdString = "";

    aModID = namePrefix+"AttackModifier";
    dModID = namePrefix+"DefenseModifier";
    bTypeID = namePrefix+"borderType";
    bDirID = namePrefix+"borderDirection";


    CmdString += $("#"+aModID).val();
    CmdString += ";";

    CmdString += $("#"+dModID).val();
    CmdString += ";";

    CmdString += $("#"+bTypeID).val();
    CmdString += ";";

    CmdString += $("#"+bDirID).val();
    CmdString += ";";

    return CmdString;
}

function createOneWayBorderInput(namePrefix) {

    var newHtml = "<h2>Define " + namePrefix + " Border</h2>"

	+ "<div class=\"FormEntryGroup\">"
	+ "<div style=\"font-size:120%;\">Attack Modifier: "
	+ "<input type=\"text\" id=\""+namePrefix+"AttackModifier\" value=\"\" />"
	+ "</div>"

	+ "<div style=\"font-size:120%;\">Defense Modifier: "
	+ "<input type=\"text\" id=\""+namePrefix+"DefenseModifier\" value=\"\" />"
	+ "</div>"

	+ "<div style=\"font-size:120%;\">Border Type: "
	+ "<select id=\""+namePrefix+"borderType\" value=\"\" >"
	+ "<option value=\"\"></option>"
	+ "<option value=\"Default\">Default</option>"
	+ "<option value=\"Artillery\">Artillery</option>"
	+ "<option value=\"Fortify Only\">Fortify Only</option>"
	+ "<option value=\"View Only\">View Only</option>"
	+ "</select>"
	+ "</div>"

	+ "<div style=\"font-size:120%;\">Border Direction: "
	+ "<select id=\""+namePrefix+"borderDirection\" value=\"\" >"
	+ "<option value=\"\"></option>"
	+ "<option value=\"Two-way\">Two-way</option>"
	+ "<option value=\"One-way\">One-way</option>"
	+ "</select>"
	+ "</div>";

  return newHtml;
}
function createNewContinentInput(namePrefix)
{
    var newHtml = "<h2>Define " + namePrefix  + " Continent</h2>"
	+ "<div class=\"FormEntryGroup\">"
	+ "<div style=\"font-size:120%;\">Continent Value: "
	+ "<input type=\"text\" name=\""+namePrefix+"ContinentValue\" id=\""+namePrefix+"ContinentValue\" value=\"\" />"
	+ "</div>"
	+ "<div style=\"height: 10px;\" ></div>"
	+ "<div style=\"font-size:75%\" class=\"alert\">Leave blank for non-factory continents.</div>"
	+ "<div style=\"font-size:120%;\">Factory Type: "
	+ "<select name=\""+namePrefix+"FactoryType\" id=\""+namePrefix+"FactoryType\" value=\"\" >"
	+ "<option value=\"\"></option>"
	+ "<option value=\"Standard\">Standard</option>"
	+ "<option value=\"AutoCapture\">AutoCapture</option>"
	+ "<option value=\"Universal\">Universal</option>"
	+ "<option value=\"Universal-N\">Universal-N</option>"
	+ "<option value=\"Universal+N\">Universal+N</option>"
	+ "</select>"
	+ "</div>"
	+ "<div style=\"height: 10px;\" ></div>"

	+ "<div style=\"font-size:120%;\">Continent Name Prefix: "
	+ "<input type=\"text\" name=\""+namePrefix+"ContinentPrefix\" id=\""+namePrefix+"ContinentPrefix\" value=\"\" />"
	+ "</div>";

    return newHtml;
}

function createTerritorySetInput(id)
{
    var newHtml = "<h2>Define set of "+id+" territories</h2>"
	+ "Use one or more of the methods below to define the set."
	+ "<div style=\"height: 15px\"></div>"
	+ "<div class=\"FormEntryGroup\">"
	+ "<div class=\"alert\" style=\"font-size:75%\">Use a regex of just period asterisk (i.e. \".*\") to match everything.  For anything more complicated, please <a href=\"https://sites.google.com/a/prestopnik.com/wgame/documentation/regexs\">review the documentation</a></div>"
	+ "Pattern Matching (regex):&nbsp;"
	+ "<input type=\"text\" name=\"TerritorySet"+id+"Regex\" id=\"TerritorySet"+id+"Regex\" value=\"\" />"
	+ "</div>"
	+ "<div style=\"font-family:Sans-serif;font-size: 15px; font-weight:900;\">+</div>"
	+ "<div class=\"FormEntryGroup\">"
    	+ "<div class=\"alert\" style=\"font-size:75%\">Names must match exactly!</div>"
	+ "Comma seperated list of names:&nbsp;"
	+ "<input type=\"text\" name=\"TerritorySet"+id+"CSV\" id=\"TerritorySet"+id+"CSV\" value=\"\" />"
	+ "</div>"
	+ "<div style=\"font-family:Sans-serif;font-size: 15px; font-weight:900;\">+</div>"
	+ "<div class=\"FormEntryGroup\">"
	+ "<div class=\"alert\" style=\"font-size:75%\">Put the territories you want as "+id+"s into a continent for convenience, then delete that continent later.</div>"
	+ "Continent:&nbsp;"
	+ "<input type=\"text\" name=\"TerritorySet"+id+"Continent\" id=\"TerritorySet"+id+"Continent\" value=\"\" /> <br />"
	+ "<div style=\"font-size:75%\">"
	+ "&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"checkbox\" name=\"DeleteTerritorySet"+id+"Continent\" id=\"DeleteTerritorySet"+id+"Continent\" value=\"DeleteTerritorySet"+id+"Continent\" /> Delete this continent after using </div>"
	+ "</div>";
    return newHtml;
}

function createInputs()
{

var newHtml;

$('div.TerritoriesSetInput').each(function() {
    newHtml = createTerritorySetInput(this.id);
    $(this).html(newHtml);
});


$('div.NewContinentInput').each(function() {
    newHtml = createNewContinentInput(this.id);
    $(this).html(newHtml);
});

$('div.OneWayBorderInput').each(function() {
    newHtml = createOneWayBorderInput(this.id);
    $(this).html(newHtml);
});

}

$(document).ready(function(){   
    createInputs();
}); 