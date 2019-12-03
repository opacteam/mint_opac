import X2JS from "../lib/xml2json.min";

export const LINK = {
  home: "/index.html",
  archive: "/scripts/mwimain.dll/144/DESCRIPTION?DIRECTSEARCH",
  library: "/scripts/mwimain.dll/144/BIBLIO?DIRECTSEARCH",
  museum: "/scripts/mwimain.dll/144/COLLECTIONS?DIRECTSEARCH",
  special: "/scripts/mwimain.dll/144/SPECIAL?DIRECTSEARCH"
};

export function xmlToJson(xml, arrayForm) {
  let xmlText = new XMLSerializer().serializeToString(xml);
  var x2js = new X2JS({
    arrayAccessFormPaths: arrayForm
  });
  var jsonObj = x2js.xml_str2json(xmlText);
  return jsonObj;
}

export function xmlStrToJson(xml, arrayForm) {
  var x2js = new X2JS({
    arrayAccessFormPaths: arrayForm
  });
  var jsonObj = x2js.xml_str2json(xml);
  return jsonObj;
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
