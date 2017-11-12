function gnrator()
{

	pdfGen();
	
	$.ajax({
		url: "counter/count.php",
		success: function(response) {
			if (response = 'success') {
				// The counter file has been updated in the background, but we should update the results on screen to tell the user
				var count = $('#hitCounter1').html();
				$('#hitCounter1').html(parseFloat(count) + 1);
				$('#hitCounter2').html(parseFloat(count) + 1);
				
				
			}
		}
	});
}



function pdfGen()
{
    var data = []
    ,fontSize = 9
    ,height = 0
    ,doc
    ;


    

    var imgData = document.getElementById("uploadPreview2").src;
    console.log(imgData);
    
    var invoiceNumber = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().invoice_number;
    
    if (typeof invoiceNumber === 'undefined') invoiceNumber = "";
    
    var invoiceNote = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().invoice_note;
    
    if (typeof invoiceNote === 'undefined') invoiceNote = "";
    
     
         
    var invoiceDate = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().date_invoice;

    if (typeof invoiceDate === 'undefined') {
    	invoiceDate = new Date();
    	console.log(invoiceDate);
    }
    

    var invoiceSubject = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().invoice_subject;
    
     if (typeof invoiceSubject === 'undefined') invoiceSubject = "";


    //your company angular variables
    var companyName = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_name;
    
     if (typeof companyName === 'undefined') companyName = "";
    
    var companyAddress = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_address;
    
     if (typeof companyAddress === 'undefined') companyAddress = "";
     
    var companyCity = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_city;
    
     if (typeof companyCity === 'undefined') companyCity = "";
     
    var companyZip = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_zip;
    
     if (typeof companyZip === 'undefined') companyZip = "";
     
    var companyPhone = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_phone;
    
     if (typeof companyPhone === 'undefined') companyPhone = "";
     
    var companyFullname = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_fullName;
    
     if (typeof companyFullname === 'undefined') companyFullname = "";
     
    var companyEmail = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_email;
    
     if (typeof companyEmail === 'undefined') companyEmail = "";
     
    var companyCountry = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_country;
    
     if (typeof companyCountry === 'undefined') companyCountry = "";

     //clients angular variables

     var clientCompany = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_company;
     
     if (typeof clientCompany === 'undefined') clientCompany = "";
     
     var clientTitle = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_title;
     
      if (typeof clientTitle === 'undefined') clientTitle = "";
      
     var clientAddress = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_address;
     
      if (typeof clientAddress === 'undefined') clientAddress = "";
      
     var clientCity = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_city;
     
      if (typeof clientCity === 'undefined') clientCity = "";
      
     var clientZip = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_zip;
     
      if (typeof clientZip === 'undefined') clientZip = "";
      
     var clientCountry = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_country;
     
      if (typeof clientCountry === 'undefined') clientCountry = "";
      
     var clientVat = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_vat;
     
      if (typeof clientVat === 'undefined') clientVat = "";
      
     var clientFullname = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().client_fullName;
     
      if (typeof clientFullname === 'undefined') clientFullname = "";


     var iban = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_iban;
     
     if (typeof iban === 'undefined') iban = "";

     var swift = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_swift;
     
     if (typeof swift === 'undefined') swift = "";

     var vat = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().company_vat;
     
     if (typeof vat === 'undefined') vat = "";

     var net = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().getTotalNet();

     var total = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().getTotalGross();

     var totalTax = angular.element(document.querySelector('[ng-controller="InvoiceCtrl"]')).scope().getTotalTax();

     

    
    var doc = new jsPDF("p","pt","a4",true);
    doc.cellInitialize();
    doc.setFont("times", "normal");
    
    doc.setProperties({
        title: 'Pdf Invoice',
        subject: '',
        author: '',
        keywords: 'generated, genfac.com, angular',
        creator: 'X.Villamuera'
    });

    var specialElementHandlers = {
             '#bypassme': function(element, renderer) {
                 return true;
             }
         };
    var top = 20;     
    doc.addImage(imgData, 'JPEG', 30, 25, 150, 50);     
    doc.setFontSize(18);     
    doc.text(400, 25+top, "INVOICE/FACTURE");
    //if (invoiceNumber === 'undefined') invoiceNumber = " ";
    doc.setFontSize(12);
    doc.text(400, 38+top, '#'+invoiceNumber+' - '+ invoiceDate.getDate()+'/'+invoiceDate.getMonth()+'/'+(invoiceDate.getYear()+1900));

    //doc.setFont("arial", "normal");
    console.log(doc.getFontList());


    doc.setFont("Helvetica", "Bold");
    doc.setFontSize(fontSize);

    doc.text(30,90+top," "+companyName);
    doc.text(410,90+top," "+clientCompany);

    
    doc.setFont("Helvetica", "");

    doc.text(30,100+top," "+companyAddress);
    doc.text(30,110+top," "+companyCity+ ' '+companyZip);
    doc.text(30,120+top," "+companyCountry);
    doc.text(30,130+top," "+companyPhone);
    doc.text(30,140+top," "+companyFullname);
    doc.text(30,150+top," "+companyEmail);

    doc.text(410,100+top," "+clientFullname);
    doc.text(410,110+top," "+clientAddress);
    doc.text(410,120+top," "+clientCity+ ' '+clientZip);
    doc.text(410,130+top," "+clientCountry);
    doc.text(410,140+top," "+clientVat);
    


    doc.setFontSize(12);
    doc.text(25,240+top,"Subject/Description");

    doc.setFontSize(fontSize);

    doc.text(30,250+top," "+invoiceSubject);




    data = [];
    data = doc.tableToJson('table_details');
    height = doc.drawTable(data, {
                    xstart : 20,
                    ystart : 20,
                    tablestart : 290+top,
                    marginleft : 30,
                    xOffset : 10,
                    yOffset : 9
                });


    doc.setFontSize(12);
    doc.text(30,height+50+top, 'Payment Details');
    doc.text(400,height+50+top, 'Total');

    doc.setFontSize(fontSize);

    doc.text(30,height+65+top, 'VAT    : '+vat);
    doc.text(30,height+75+top, 'IBAN   : '+iban);
    doc.text(30,height+85+top, 'SWIFT : '+swift);

    doc.text(400,height+65+top, 'NET      : '+net+' €');
    doc.text(400,height+75+top, 'TAX     : '+totalTax+' €');
    doc.setFont("times", "bold");
    doc.text(400,height+85+top, 'TOTAL : '+total+' €');
    
    doc.text(30,height+110+top, 'Note : '+invoiceNote); 


    doc.setFont("times", "normal");
    //Adding a Line
    //doc.setLineWidth(0.5);
    //doc.line(20, height+95+top, 570, height+95+top); // horizontal line

    //footer
    doc.text(30,800, 'generated by genfacture.eu');        

    
    
    //var source = document.getElementById('footer');
    /*doc.fromHTML($('footer').html(), 15, 15, {
                    'width': 470,'elementHandlers': specialElementHandlers
                });*/
    /*$.each(table, function (i, row){
            console.debug(row);
            $.each(row, function (j, cell){
                doc.cell(10, 40,80, 20, cell, i);  // 2nd parameter=top margin,1st=left margin 3rd=row cell width 4th=Row height
            })
        })*/
    //doc.text(50, 20, 'INVOICE');
    //doc.output('dataurl');
    /*
    doc.text(20, 20, 'INVOICE');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');
    
    doc.text(30,100, 'Generated by genfac.com');

    doc.output();*/

    //download the document
    doc.save('Invoice.pdf');
}

/*function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }


    // go through cells
    for (var i=0; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }       

    return data;
}*/