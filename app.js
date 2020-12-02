var myArray = [
	{'name':'USA', 'death':'273,160', 'active':'	5,377,4209'},
	{'name':'INDIA', 'death':'137,517', 'active':'440,723'},
	{'name':'BRAZIL', 'death':'172,866', 'active':'566,065'},
	{'name':'RUSSIA', 'death':'39,895', 'active':'477,055'},
	{'name':'FRANCE', 'death':'52,325', 'active':'2,004,731'},
	{'name':'SPAIN', 'death':'44,668', 'active':'100000'},
	{'name':'UK', 'death':'58,448', 'active':'28400'},
	{'name':'ITALY', 'death':'38,730', 'active':'24500'},
	{'name':'ARGENTINA', 'death':'39,68', 'active':'300008'},
	{'name':'COLUMBIA', 'death':'20,668', 'active':'254000'},
	{'name':'MEXICO', 'death':'32,668', 'active':'350000'},
	{'name':'GERMANY', 'death':'44,444', 'active':'424888'},
	{'name':'POLAND', 'death':'22,668', 'active':'345666'},
	{'name':'IRAN', 'death':'12,455', 'active':'234577'},
	{'name':'PERU', 'death':'11,333', 'active':'435567'},
	{'name':'SOUTH AFRICA', 'death':'10,444', 'active':'223446'},
	{'name':'UKRAINE', 'death':'4,668', 'active':'289900'},
	{'name':'TURKEY', 'death':'7,888', 'active':'58000'},
	{'name':'BELGIUM', 'death':'12,668', 'active':'98000'},
	{'name':'IRAQ', 'death':'3,644', 'active':'89000'},
	{'name':'CHILE', 'death':'4,777', 'active':'23455'},
	{'name':'INDONESIA', 'death':'3,444', 'active':'345666'},
	{'name':'NETHERLANDS', 'death':'7,668', 'active':'56779'},
	{'name':'CZENHIA', 'death':'3,558', 'active':'67888'},
	{'name':'ROMANIA', 'death':'5666', 'active':'33445'},
	{'name':'BANGLADESH', 'death':'2,444', 'active':'98789'},
	{'name':'PHILIPPINES', 'death':'8,333', 'active':'112333'},
	{'name':'PAKISTAN', 'death':'4,568', 'active':'344556'},
	{'name':'CANADA', 'death':'15,998', 'active':'234221'},
	{'name':'SOUDHI', 'death':'4,658', 'active':'65444'},
	{'name':'MOROCCO', 'death':'2,885', 'active':'79000'},
	{'name':'ISRAEL', 'death':'1,668', 'active':'68990'},
	{'name':'SWITCHERLANDS', 'death':'4,500', 'active':'56777'},
	{'name':'PORTUGAL', 'death':'2,600', 'active':'890900'},
	{'name':'AUSTRIA', 'death':'5000', 'active':'45333'},
	{'name':'SWEDEN', 'death':'6004', 'active':'79000'},
	{'name':'NEPAL  ', 'death':'1000', 'active':'56777'},
	{'name':'HUNGAEY', 'death':'4977', 'active':'89000'},
	{'name':'JORDEN', 'death':'2,668', 'active':'53455'},
	{'name':'ECADOR', 'death':'8,668', 'active':'88888'},
	{'name':'SERBIA', 'death':'4000', 'active':'53444'},
	{'name':'UAE', 'death':'1203', 'active':'23555'},
	{'name':'PANAMA', 'death':'4003', 'active':'98000'},
	{'name':'JAPAN', 'death':'2008', 'active':'45677'},
	{'name':'BULGARIA', 'death':'7,668', 'active':'32444'},
	{'name':'BOLIVIA', 'death':'8,668', 'active':'97706'},
	{'name':'REPUBLIC', 'death':'2330', 'active':'96555'},
	{'name':'KUWAIT', 'death':'5006', 'active':'67000'},
	{'name':'COSTRICA', 'death':'680', 'active':'5677'},
	{'name':'GEORGIA', 'death':'408', 'active':'3999'},
	{'name':'QUATAR', 'death':'4499', 'active':'67888'},
	{'name':'BELARUS', 'death':'848', 'active':'6888'},
	{'name':'ARMENIA', 'death':'1200', 'active':'65444'},
	{'name':'KAZAKISTAN', 'death':'440', 'active':'9000'},
	{'name':'CROATIA', 'death':'1000', 'active':'8777'},
	{'name':'LEBANON', 'death':'1200', 'active':'8999'},
	{'name':'AZEBAIJAN', 'death':'3000', 'active':'7655'},
	{'name':'OMAN', 'death':'1300', 'active':'4533'},
	{'name':'EGYPT', 'death':'1200', 'active':'8888'},
	{'name':'ETHIPOIA', 'death':'1500', 'active':'9997'},
	{'name':'MALDOVA', 'death':'4800', 'active':'8998'},
	{'name':'MYANMAR', 'death':'2033', 'active':'9000'},
	{'name':'PALESTINE', 'death':'1200', 'active':'6788'},
	{'name':'BSONIA', 'death':'2681', 'active':'9000'},
  
  
  
  
  
  
  ]
  
  buildTable(myArray)
  
  
  
  function buildTable(data){
  var table = document.getElementById('myTable')
  
  for (var i = 0; i < data.length; i++){
	var row = `<tr>
			<td>${data[i].name}</td>
			<td>${data[i].death}</td>
			<td>${data[i].active}</td>
		  </tr>`
	table.innerHTML += row
  
  
  }
  }
  