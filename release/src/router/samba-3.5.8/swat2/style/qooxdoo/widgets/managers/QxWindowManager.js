/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function QxWindowManager(){if(QxWindowManager._instance){return QxWindowManager._instance;};QxManager.call(this);QxWindowManager._instance=this;};QxWindowManager.extend(QxManager,"QxWindowManager");QxWindowManager.addProperty({name:"activeWindow",type:Object});proto.update=function(oTarget){var m;for(var vHash in this._objects){m=this._objects[vHash];if(!m.getAutoHide()){continue;};m.setVisible(false);};};proto._modifyActiveWindow=function(_b1,_b2,_b3,_b4){(new QxPopupManager).update();if(_b1){_b1.setActive(true,_b4);};if(_b2){_b2.setActive(false,_b4);};this.sort();if(_b2&&_b2.getModal()){_b2.getTopLevelWidget().release(_b2);};if(_b1&&_b1.getModal()){_b1.getTopLevelWidget().block(_b1);};return true;};proto.compareWindows=function(w1,w2){switch((new QxWindowManager).getActiveWindow()){case w1:return 1;case w2:return-1;};return w1.getZIndex()-w2.getZIndex();};proto.sort=function(oObject){var a=[];for(var i in this._objects){a.push(this._objects[i]);};a.sort(this.compareWindows);var minz=QxWindow.prototype._minZindex;for(var l=a.length,i=0;i<l;i++){a[i].setZIndex(minz+i);};};proto.add=function(oObject){QxManager.prototype.add.call(this,oObject);this.setActiveWindow(oObject);};proto.remove=function(oObject){QxManager.prototype.remove.call(this,oObject);if(this.getActiveWindow()==oObject){var a=[];for(var i in this._objects){a.push(this._objects[i]);};var l=a.length;if(l==0){oObject.getTopLevelWidget().release(oObject);}else if(l==1){this.setActiveWindow(a[0]);}else if(l>1){a.sort(this.compareWindows);this.setActiveWindow(a[l-1]);};};};