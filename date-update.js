function processAdd(cmd) {

doc = cmd.solrDoc;  // org.apache.solr.common.SolrInputDocument
var stringToParse = doc.getFieldValue("created_at");
var date = new Date(Date.parse(stringToParse.replace(/( \+)/, ' UTC$1')));

var date1 = new Date(date); 
var date1  = date1.setSeconds(0);
var date2 = new Date(date1); 
var date3  = date2.setMinutes(0);
var date4 = new Date(date3); 
var date5  = date4.setMilliseconds(0);
var date6 = new Date(date5);
var n = date6.toISOString();

  doc.setField("tweet_date", n);


  var latitude = doc.getFieldValue("coordinates.coordinates.latitude");
  var longitude = doc.getFieldValue("coordinates.coordinates.longitude");
  var latString = '';
  var longString = '';
  var finalString = ''; 


if(latitude != null && longitude != null)
{
  latString = latitude.toString();
  longString = longitude.toString();
  finalString = latString+ ',' + longString ;
  doc.setField("tweet_loc", finalString);
}



  
}
function processDelete(cmd) {
  // no-op
}

function processMergeIndexes(cmd) {
  // no-op
}

function processCommit(cmd) {
  // no-op
}

function processRollback(cmd) {
  // no-op
}

function finish() {
  // no-op
}
