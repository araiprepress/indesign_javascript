selObj = app.activeDocument.selection;
sLen = selObj.length;

var indexMoto = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.";
var indexSaki = "０１２３４５６７８９ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ，．";

for(i=0; i<sLen; i++){

	sType=selObj[i].constructor.name;

	if((sType=="TextFrame")||(sType=="TextColumn")||(sType=="Paragraph")||(sType=="Text")||(sType=="Cell")){
		cObj=selObj[i].characters;
		cLen=cObj.length;
//alert(cLen);
		for(j=0; j<cLen; j++){
			ch = cObj[j];
			nn = indexMoto.indexOf(ch.contents, 0);
			if(nn >= 0){
				ch.contents = indexSaki.charAt(nn);
			}
		}
	}
//Table
	if(sType=="Table"){
			celObj=selObj[i].cells;
			celLen =celObj.length;
			for(k=0; k<celLen; k++){
				tcObj=celObj[k].characters;
				tcLen=tcObj.length;
				for(m=0; m<tcLen; m++){
					tch=tcObj[m].contents;
					//alert(tch);
					tnn = indexMoto.indexOf(tch, 0);
					//alert(tnn);
					if(tnn >= 0){
					    tcObj[m].contents = indexSaki.charAt(tnn);
					}
				}
			}
	
	}
}

