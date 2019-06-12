/*import React from 'react'
import parser from 'fast-xml-parser'
import he from 'he'
import axios from 'axios'
import sodcosm from '../../constants/sodcosm.json'

export const fetch = () => {
  axios.get('http://data.fmi.fi/fmi-apikey/1bcc613e-3863-4235-8e62-46446692646d/wfs/fin?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=Sodankyl%C3%A4&timestep=60&')
    .then(results => {
      console.log("res",results)
      kakka(results.data)
    })
}


const kakka = (xmlData) => {
  var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : a => he.decode(a) //default is a=>a
  };
 
  if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
      var jsonObj = parser.parse(xmlData,options);
  }
  
  // Intermediate obj
  var tObj = parser.getTraversalObj(xmlData,options);
  var jsonObj = parser.convertToJson(tObj,options);
  console.log("kakka", jsonObj)
}


export const sodCosmic = () => {
  console.log(sodcosm)
}*/