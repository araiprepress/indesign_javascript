//=============================
//Delete textFrame which visiblebounds are within the targeted area +- allowance across all pages.
//Originally this script is for removing unused flying titles etc when publishing documents changed their format, design, or both.

var docObj=app.activeDocument;
var pageLen=docObj.pages.length;
var pObj, txtObj;

//　↓　supposed top and height of the textFrame to remove.
//  so change them according to what to remove.
var ttop=5, theight = 5;

//
var x1, x2;

var y1 = ttop;
var y2 = theight;
var pageW = docObj.documentPreferences.pageWidth;

for(var i=0; i<pageLen; i++){
    pObj =docObj.pages[i];
    if(i==0){
        x1 = docObj.marginPreferences.left;
        x2 = pageW-docObj.marginPreferences.right;
    }
    else 
    if(i>0 && (pObj.side == PageSideOptions.LEFT_HAND||pObj.side == PageSideOptions.SINGLE_SIDED)){
        x1 = docObj.marginPreferences.right;
        x2 = pageW-docObj.marginPreferences.left;
    }
    else if (i>0 && (pObj.side == PageSideOptions.RIGHT_HAND)){
        //x1 = docObj.marginPreferences.left;
        //x2 = pageW-docObj.marginPreferences.right;
        //　Upper is sometimes used: 
        x1 = pageW+pObj.marginPreferences.left;
        x2 = pageW+pageW-pObj.marginPreferences.right;
    }
        for(j=0; j<pObj.textFrames.length; j++){
            txtObj = pObj.textFrames[j];
            test =0;
            //visBoundArray = [ y1,  x1+pWidth*addLpageWidth,  y2,  x2+pWidth*addLpageWidth ];
            visBoundArray = [ y1,  x1,  y2,  x2];
            for(k=0; k<4; k++){
                    t= closeValue(txtObj.visibleBounds[k],  visBoundArray[k], 0.25);
                    test = test +t;
            }
            if (test ==4){
                txtObj.remove();
            }
         }
}


//Tool for judge if the item is within a certain range +-allowance value
function closeValue(realValue, validValue, allowance){
    if(Math.abs(realValue - validValue) <= allowance){
        return 1;
    } else {
        return 0;
    }
 }