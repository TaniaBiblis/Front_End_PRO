 var imgRed128 = "https://s.appleinsider.ru/2013/02/red_iphone_5.jpg";
 var imgBlack128 = "http://static.coultury.com/content/collections/6/justblack/ultimate_black_iphone.jpg";
 var imgWhite128 = "https://apple-4g.ru/image/data/iconki%20/all/iphone_6_white.jpg";
 var imgRed256 = "http://www.macdigger.ru/wp-content/uploads/2017/03/iPhone-7-red-new-4.jpg";
 var imgBlack256 = "https://www.iphones.ru/wp-content/uploads/2016/09/iphone7-jet-black-impressions-russia-10.jpg";
 var imgWhite256 = "https://iok.com.ua/sites/default/files/iphone-6-chehol-iz-silikona-beluy-cvet%20%281%29.jpg";


 var memory = prompt  ("Введите желаемый объем памяти цифрами", "");

 if (memory == 128) {
 	var colour = prompt ("Введите цвет устройства на русском языке", "");
 	if (colour == "красный") {
 		document.write ("iPhone 6 128 Red по цене 15 000 гривен <img src="+ imgRed128 +">"); 
 	}   else if (colour == "черный") {
 		document.write ("iPhone 6 128 Black по цене 15 000 гривен <img src="+ imgBlack128 +">");
 	}   else if (colour == "белый") {
 		document.write ("iPhone 6 128 White по цене 15 000 гривен <img src="+ imgWhite128 +">");	
 	}	else {
 	document.write ("Модель не найдена");
 	} 
 } else if (memory == 256) {
 	var colour = prompt ("Введите цвет устройства на русском языке", "");
 	if (colour == "красный") {
 		document.write ("iPhone 6 256 Red по цене 20 000 гривен <img src="+ imgRed256 +">"); 
 	}   else if (colour == "черный") {
 		document.write ("iPhone 6 256 Black по цене 20 000 гривен <img src="+ imgBlack256 +">");
 	}   else if (colour == "белый") {
 		document.write ("iPhone 6 256 White по цене 20 000 гривен <img src="+ imgWhite256 +">");
 	} 	else {
 	document.write ("Модель не найдена");
 	}	
 } else {
 	document.write ("Модель не найдена");
 }



