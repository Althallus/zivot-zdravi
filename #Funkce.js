function processForm(formObject) {
  //Pozice poradce a manazera
 sheet_DATA.getRange(5,5,13,1)//(start row, start column, number of rows, number of columns
   .setValues([
                [formObject.client_narozeni || ""],
                [formObject.client_prijem || ""],
                [formObject.client_vydaje || ""],
                [formObject.client_mortgage || ""],
                [formObject.client_rezerva || ""],
                [formObject.typ_prijmu_selected || ""],
                // [formObject.stav_selected || ""],
                [null],
                [formObject.pohlavi_selected || ""],
                [formObject.pocet_deti || ""],
                [formObject.client_duchod_zaklad || ""],
                [formObject.client_rok_odpracovane || ""],
                [formObject.smrt_nasobek || ""],
                // [formObject.rozdeleniDluhu ? "TRUE" : "FALSE"],
                [formObject.rozdeleni_dluhu || ""],
              ]);    

 sheet_DATA.getRange(5,6,12,1)//(start row, start column, number of rows, number of columns
   .setValues([
              [formObject.client_narozeni_2 || ""],
              [formObject.client_prijem_2 || ""],
              [formObject.client_vydaje_2 || ""],
              // [formObject.client_mortgage || ""],
              [null],
              [null],
              [formObject.typ_prijmu_selected_2 || ""],
              // [formObject.stav_selected || ""],
[null],
              [formObject.pohlavi_selected_2 || ""],
              [formObject.pocet_deti_2 || ""],
              [formObject.client_duchod_zaklad_2 || ""],
              [formObject.client_rok_odpracovane_2 || ""],
              [formObject.smrt_nasobek_2 || ""],
              ]);    


 
 SpreadsheetApp.flush();  

//  var dateFormat = sheet_DATA.getRange("C20:C55");
//   dateFormat.setNumberFormat("@STRING@");
 
var data = sheet_DATA.getRange(32,5,78,2).getValues(); //(start row, start column, number of rows, number of columns
 
 return data;
}

function getTableData() {
  SpreadsheetApp.flush();  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('TABLES_DATA');
  const range = sheet.getRange("B4:E14");
  // const range = sheet.getDataRange();
  const data = range.getValues();
  return data;
}