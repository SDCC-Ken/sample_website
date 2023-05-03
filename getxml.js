// JavaScript Document
function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else { // code for IE5 and IE6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}
function blogpost(title,no,description,categories,author,pubDate,pubMonth,pubDay){
	this.title = title; 
	this.no = no; 
	this.description = description;
	this.categories = categories; 
	this.author = author; 
	this.pubDate = pubDate; 
	this.pubMonth = pubMonth; 
	this.pubDay = pubDay; 
};
function loadblog(){
	blogposts = new Array();
	xmlDoc = loadXMLDoc("rss.xml");
	for (i = 0; i < 17; i++){
		blogposts[i] = new blogpost(xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("no")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("categories")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("author")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("pubDate")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("pubMonth")[i].childNodes[0].nodeValue,xmlDoc.getElementsByTagName("pubDay")[i].childNodes[0].nodeValue);
	}
	phonebrand.sort();
	phonebrand_w.sort();	
};