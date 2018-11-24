 //// Spread the width of inline textFrames width text overflow horizontaly untill overflow is resolved.
 /// *A small tool to avoid  one by one operation to text frames inline.
docObj = app.activeDocument;
tObj = docObj.textFrames;
tLen = tObj.length;
for(i=0; i<tLen; i++){
	inTObj = tObj[i].textFrames;
	inLen = inTObj.length;
		for(j=0; j<inLen; j++){

			if(inTObj[j].overflows==true){
				//alert(inTObj[j].visibleBounds[3]);
				while(inTObj[j].overflows==true){
					vB0 = inTObj[j].visibleBounds[0];
					vB1 = inTObj[j].visibleBounds[1];
					vB2 = inTObj[j].visibleBounds[2];
                    //user can change '+1' 
					vB3 = inTObj[j].visibleBounds[3]+1;
					
					inTObj[j].visibleBounds=[vB0, vB1, vB2, vB3];
					}
			}
		}
	
}