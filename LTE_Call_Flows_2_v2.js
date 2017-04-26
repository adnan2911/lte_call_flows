(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.ue_ctxt_rel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape.setTransform(50.4,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgDQABAGACACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgCQgTgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAHADQAFAEADAJIgQADQgBgEgCgCQgDgCgFAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAPAEQANADAFAEQAFAEAAAIQAAAIgHAGQgIAHgOAAQgLAAgHgGg");
	this.shape_1.setTransform(43.6,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAFgBQAEgCAJgBQAKgCAFgDIAAgBQgBgFgCgCQgCgCgFAAQgFAAgCABQgDACgCAFIgOgDQACgJAGgFQAHgDALAAQAKAAAGACQAFADACAEQACAEABAKIAAASIABANIACAIIgQAAIgCgFIAAgCQgEAFgFACQgEACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_2.setTransform(37.1,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_3.setTransform(30.4,-2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_4.setTransform(25.4,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_5.setTransform(20.4,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgDAAIAAAkIgRAAIAAhVIAkAAQAMAAAHACQAGADAEAFQAEAHAAAHQAAAKgGAGQgGAGgLABQAFADAEAEQAEAEAGAKIAKARgAgUgGIAMAAQAMAAADgBQADgBACgCQACgDAAgEQAAgEgDgDQgCgDgEAAIgMAAIgNAAg");
	this.shape_6.setTransform(13.2,-3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_7.setTransform(3.1,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AANAfIgNgTIgMATIgTAAIAWgfIgWgeIAUAAIALARIAMgRIATAAIgVAdIAWAgg");
	this.shape_8.setTransform(-2.2,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_9.setTransform(-8.9,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_10.setTransform(-14.2,-3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_11.setTransform(-19.9,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgQAcQgHgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAHgEQAIgDAIAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgIAAgIgFgAgKgNQgFAEABAJQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_12.setTransform(-27.2,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgZAhQgLgMAAgUQAAgVALgMQALgMARAAQAPAAAKAKQAGAGADAKIgRAEQgCgHgEgEQgFgDgHAAQgIAAgHAGQgFAHAAAPQAAAQAFAGQAGAIAIgBQAIABAEgFQAGgEABgKIARAGQgEAOgIAGQgJAIgOAAQgRAAgKgMg");
	this.shape_13.setTransform(-35.2,-3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AggArIAAhVIA/AAIAAAPIgtAAIAAATIAqAAIAAANIgqAAIAAAXIAvAAIAAAPg");
	this.shape_14.setTransform(-46.8,-3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgQApQgHgDgEgEQgDgFgBgFQgCgHAAgPIAAgtIARAAIAAAuIABAOQABAGAEADQAEADAHAAQAHAAAEgDQADgDABgFIABgOIAAgvIARAAIAAAsQAAAQgBAGQgBAHgEAEQgEAFgGACQgHADgKAAQgLAAgGgDg");
	this.shape_15.setTransform(-55.3,-3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_16.setTransform(151,82.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_17.setTransform(148.4,79.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_18.setTransform(142.6,79.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IALAAIANAkIADANIAEgNIAOgkIAKAAIgXA9g");
	this.shape_19.setTransform(136.3,79.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_20.setTransform(130,79.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_21.setTransform(123.1,78.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_22.setTransform(116.7,79.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgEQgFgDgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAEACAEIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_23.setTransform(110,79.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_24.setTransform(103.4,78.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_25.setTransform(93.4,79.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_26.setTransform(86.7,78.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_27.setTransform(81.8,78.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_28.setTransform(173,64.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_29.setTransform(167.2,64.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_30.setTransform(162.5,63.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHABQAHgBAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_31.setTransform(153.7,65.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_32.setTransform(147.2,64.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_33.setTransform(142.6,63.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_34.setTransform(139.9,63.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgDgDQgFgEgHAAQgGAAgFADQgDADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgBgHQgGAEgFADQgFACgHAAQgJAAgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAADQAAADAEAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgRAEg");
	this.shape_35.setTransform(135.3,64.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_36.setTransform(128.6,64.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHABQAHgBAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_37.setTransform(121.8,65.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_38.setTransform(117.3,63.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQABAGADADQAFAEAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgFgGg");
	this.shape_39.setTransform(113,64.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_40.setTransform(103.3,64.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_41.setTransform(98.7,63.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgHAAgFAGg");
	this.shape_42.setTransform(93.8,63.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFAAgHQAAgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgLAAIgBgHQgHAEgEADQgFACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_43.setTransform(87.4,64.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_44.setTransform(82.5,64.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_45.setTransform(254.3,48);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_46.setTransform(247.9,49.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGAAgIQAAgEADgEQABgEAEgCIAHgDIAKgBQALgCAGgBIAAgDQAAgGgCgEQgFgDgHAAQgGAAgFACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFACADIgMAAIgCgIQgGAGgFACQgEABgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgBACAAACQAAAFADACQADADAGAAQAFAAAFgDQAEgCADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_47.setTransform(241.2,49.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_48.setTransform(231,50.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_49.setTransform(224.6,49.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_50.setTransform(219.9,48);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_51.setTransform(215.3,48);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_52.setTransform(209.1,49.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_53.setTransform(204.3,48.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_54.setTransform(201.3,48);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKgkIgCgLIgMAvIgLAAIgTg9IALAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIALAAIgUA9g");
	this.shape_55.setTransform(195.6,49.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQACAGADAEQAFACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQADAEABAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJADIAPAEQAFABADAEQACAEAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_56.setTransform(188.3,49.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_57.setTransform(178.6,48);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_58.setTransform(173.7,48.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgCAFgBIAAgDQAAgGgDgEQgEgDgHAAQgHAAgDACQgEADgCAHIgKgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgKAAIgCgIQgGAGgGACQgEABgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgCACABACQAAAFADACQADADAGAAQAFAAAFgDQAFgCACgFQABgEAAgGIAAgEIgPAEg");
	this.shape_59.setTransform(168.6,49.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_60.setTransform(162.2,50.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_61.setTransform(152,49.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_62.setTransform(145.3,48);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_63.setTransform(140.4,48.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_64.setTransform(131.8,48);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_65.setTransform(125.3,49.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_66.setTransform(120.4,48.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_67.setTransform(115.3,49.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_68.setTransform(110.6,48);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAIAAAFAEQAGAEAEAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgFgCQgEgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_69.setTransform(106.2,50.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgCgKQgBgCgCgCQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgFAAgEADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_70.setTransform(97.7,49.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_71.setTransform(89.4,49.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_72.setTransform(83.2,49.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgYg9IAMAAIANAkIADANIAFgNIANgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_73.setTransform(211,35.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_74.setTransform(206.5,32.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_75.setTransform(203.9,32.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_76.setTransform(199.2,33.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_77.setTransform(194.5,32.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQAAAGAEADQAFAEAGAAQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACADQADAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgFgFg");
	this.shape_78.setTransform(189.6,33.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIAKgBQABAGAFADQADAEAGAAQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgBgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIADACIAJADIAQAFQAEABADADQACAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgFgFg");
	this.shape_79.setTransform(183.6,33.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_80.setTransform(177.3,33.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAGQgHAFgKABQgMAAgHgJg");
	this.shape_81.setTransform(171.1,33.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAGQgHAFgKABQgMAAgHgJg");
	this.shape_82.setTransform(165.1,33.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_83.setTransform(158.6,33.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIAKgBQACAGADADQAFAEAFAAQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADACIAJADIAPAFQAFABADADQACAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_84.setTransform(152.3,33.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEAEAGAAQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADACIAJADIAPAFQAFABADADQACAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_85.setTransform(142.9,33.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgFAEgCIAIgCIAJgCQALgCAHgCIAAgCQAAgGgDgDQgFgEgHAAQgGAAgFADQgDADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgCgHQgFAEgFACQgFADgHAAQgJgBgGgFgAgCAEQgGAAgDACQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgRAEg");
	this.shape_86.setTransform(136.6,33.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAFQACAEAAAIIAAAog");
	this.shape_87.setTransform(130,32.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAGQgDAEgGADQAIACAEAFQAEAGAAAHQAAAGgCAFQgDAFgDAEQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgCACgCQACgEAAgEQAAgEgDgEQgCgEgFgBQgEgBgHgBIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEgBQgEgBgIAAIgRAAg");
	this.shape_88.setTransform(119.4,32.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_89.setTransform(112,33.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_90.setTransform(105.1,32.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_91.setTransform(98.7,33.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_92.setTransform(91,32.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_93.setTransform(83.4,33.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_94.setTransform(242.3,17.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_95.setTransform(237.3,18.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgDABgEIABgOQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_96.setTransform(230.4,19.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_97.setTransform(225.8,18.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQADgEADgCIAIgDIAJgBQAMgCAFgBIAAgDQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFABgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_98.setTransform(220,18.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_99.setTransform(215,17.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_100.setTransform(206.6,18.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_101.setTransform(200,17.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_102.setTransform(195,17.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_103.setTransform(186.6,18.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_104.setTransform(180,18.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_105.setTransform(173.3,17.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKgkIgCgLIgLAvIgMAAIgTg9IAMAAIAJAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAKAAIgTA9g");
	this.shape_106.setTransform(165.7,18.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGAEQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgCACgDQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_107.setTransform(154.1,17.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_108.setTransform(145.7,17.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_109.setTransform(138,18.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_110.setTransform(128,18.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_111.setTransform(121.9,18.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_112.setTransform(117.2,18.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_113.setTransform(111.3,18.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_114.setTransform(104.7,18.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgIIAKgBQABAGADAEQADAEAGADQAFACAHAAQAGAAAFgBQAFgCADgEQACgEAAgEQAAgDgCgDQgDgEgFgBIgOgEQgMgDgFgCQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgFAHgDQAHgEAJAAQAJAAAHAEQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKAAQgKAAgEAFQgFADAAAGQAAAEADADQAEADAMADQAOAEAFACQAIACADAGQAEAFAAAGQAAAIgEAGQgEAFgHAEQgIADgJAAQgKAAgIgDg");
	this.shape_115.setTransform(97.4,17.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_116.setTransform(86.7,18.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_117.setTransform(81.8,17.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_118.setTransform(244.5,3.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_119.setTransform(237.6,4.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgIQAAgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgGAEgGACQgEACgHABQgKgBgFgFgAgBAEQgHABgDABQgCABgCACQgCACABAEQAAAEADACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_120.setTransform(231.2,3.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEADAGABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_121.setTransform(224.8,3.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQAAAGAEADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgFg");
	this.shape_122.setTransform(218.8,3.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_123.setTransform(212.5,3.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_124.setTransform(204.2,3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_125.setTransform(192,1.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgEgFgGQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFACAHAAQAGAAAFgCQAFgCADgDQACgDAAgEQAAgFgCgDQgDgCgFgDIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgGAHgDQAHgCAJAAQAJAAAHACQAHAEAEAGQAEAFAAAJIgKAAQgBgIgFgEQgFgFgKABQgKAAgEADQgFAEAAAFQAAAFADADQAEADAMAEQAOADAFACQAIACADAFQAEAGAAAHQAAAHgEAFQgEAGgHAEQgIAEgJAAQgKAAgIgEg");
	this.shape_126.setTransform(183.8,1.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAXIAcAAIgJgWIgGgSQgBAIgDAJg");
	this.shape_127.setTransform(175.9,1.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_128.setTransform(168,1.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgaArIAAhVIALAAIAABLIAqAAIAAAKg");
	this.shape_129.setTransform(160.8,1.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAbIAvAAIAAAIIgvAAIAAAeIA0AAIAAAKg");
	this.shape_130.setTransform(153.4,1.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgGIgFgCIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAHQAAAJgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgDAAgFQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_131.setTransform(145.3,1.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_132.setTransform(133.8,1.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AAZArIgWgfIgDgGIgDAHIgWAeIgNAAIAhgsIgegpIAOAAIAPAWIAGAKIAIgJIARgXIAMAAIgeAoIAgAtg");
	this.shape_133.setTransform(126.1,1.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_134.setTransform(118.2,1.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_135.setTransform(110.4,1.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_136.setTransform(102.4,1.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgJgHgGgKQgEgKAAgLQAAgUALgNQAMgLARAAQAMAAAKAFQAJAGAFAKQAFAKAAAMQAAANgGAKQgFALgJAFQgKAGgLAAQgLgBgKgFgAgUgZQgJAIAAATQABAPAIAJQAIAJAMgBQAMAAAJgJQAIgIAAgRQAAgJgEgIQgDgIgHgFQgHgDgIAAQgLgBgJAJg");
	this.shape_137.setTransform(93.4,1.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgLQgEgLAAgLQAAgNAFgKQAFgKAKgFQAJgGAKABQANgBAJAHQAJAHAEALIgLAEQgEgKgFgFQgGgDgJAAQgJgBgGAFQgHAFgDAIQgCAIAAAIQAAAKADAJQADAHAHAEQAGAEAHAAQAKABAHgGQAGgGADgKIALADQgEAOgJAHQgJAIgOAAQgMAAgJgGg");
	this.shape_138.setTransform(84.5,1.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_139.setTransform(212.8,-13.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_140.setTransform(204.3,-13.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgKIALgCQABAGADAEQAFACAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAGADACADQADAEAAAGIgKABQAAgFgEgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFACIAIAEIAPAEQAFABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHAAQgMABgFgGg");
	this.shape_141.setTransform(193.6,-12.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_142.setTransform(187.1,-13.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_143.setTransform(180.7,-12.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_144.setTransform(174,-12.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgKIALgCQABAGADAEQAEACAGAAQAIAAAEgCQADgDAAgEQAAgEgDgCIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAGADACADQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHAAQgLABgHgGg");
	this.shape_145.setTransform(167.7,-12.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_146.setTransform(157.5,-13.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_147.setTransform(149,-13.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_148.setTransform(141.4,-12.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_149.setTransform(133.1,-13.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_150.setTransform(128,-12.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_151.setTransform(121.2,-11);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_152.setTransform(116.5,-12.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEAAgJQAAgEADgEQABgDAEgDIAHgDIAKgBQALgBAGgDIAAgCQAAgHgCgDQgFgDgHAAQgGAAgFACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEACAEIgMAAIgCgIQgGAFgEADQgFABgGAAQgKABgGgGgAgCAEQgGAAgDACQgDABgBACQgBADAAACQAAAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_153.setTransform(110.7,-12.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_154.setTransform(105.8,-13.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_155.setTransform(97.4,-12.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_156.setTransform(90.7,-13.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_157.setTransform(83.8,-13.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E6FFFF").s().p("AvdJEIAAyHIe7AAIAASHg");
	this.shape_158.setTransform(166.5,34.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AouB9IAAj5IRdAAIAAD5g");
	this.shape_159.setTransform(-5.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_158},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_159}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,17.7);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABA6IgVAAIgWAAIgBgEIAMgDQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAAgHIAAgJIAAhBIAAgIIAAgGQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIgLgDIgBgEIAXAAIAUAAIApAAIABABIgFAbIgFABIgFgUIgfAAIAAArIAEAAIAPAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIADgLIAFAAIAAASIAAARIgFAAIgDgMQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgPgBIgEAAIAAAdIAAASIAgAAIALgWIAFAAIgCAeIgBABIgoAAg");
	this.shape.setTransform(5.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAwQgNgMAAgaIAAgtIAAgIIAAgGQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgLgEIgBgEIAaAAIAaAAIAAAEIgKADQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABIAAAGIAAAIIAAAsQAAAXAHAJQAGAIAPAAQAPAAAHgJQAIgJAAgUIAAguIAAgIIAAgGQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgLgDIAAgEIATAAIATAAIABAEIgMAEQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAGIAAAIIAAApQAAAdgMAMQgMANgWAAQgYAAgMgMg");
	this.shape_1.setTransform(-6.4,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Aj6B1IAAjpIH1AAIAADpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-12.3,50.3,24.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA6IgNAAIgYAAIAAgEIALgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgHIAAgJIAAhBIAAgIIgBgGQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgLgDIAAgEIAYAAIAOAAIAMAAQAVgBALAHQAKAHAAAMQAAAUgXAIQAOACAHAHQAHAHAAAMQAAAQgNAKQgNAIgYABIgKgBgAgKAyIAKABQAKAAAGgHQAGgHAAgMQAAgNgGgFQgGgHgMAAIgIAAgAgKgxIAAArIAIAAQAKAAAFgFQAFgFAAgMQAAgMgFgFQgFgEgJgBIgEAAIgFABg");
	this.shape.setTransform(32.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcgXIgGgJIAAAMIAAAzIAAARQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIALAEIAAADIgTAAIgSAAIgBgDIAMgEQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgRIAAhAIAAgPQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgLgDIgBgFIASAAIAQAAIA2BFIAHAIIAAgLIAAgqIgBgOQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgKgDIgBgFIATAAIASAAIABAFIgLADQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgBAPIAABaIgJABg");
	this.shape_1.setTransform(20.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAfQgNgKAAgTQAAgTAMgLQAMgMATAAQAQAAAJAJQAJAJAAAQIAAAFIg0AAQAAAQAIAHQAHAHATAAQAJAAAIgBIABAFQgPAIgRAAQgUAAgMgKgAgIgZQgEAGgBAKIAbAAIAAgCQAAgMgDgEQgDgFgFAAQgGAAgFAHg");
	this.shape_2.setTransform(9.4,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAeQgLgKAAgSQAAgSANgMQANgMASAAQANAAALAFIgFAYIgFACIgGgWIgGgBQgJAAgGAJQgFAIAAAOQAAAPAHAIQAHAHAOAAIAOgBIABAFQgOAIgPAAQgQAAgNgLg");
	this.shape_3.setTransform(-2.6,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAoIgXAAIgBgEIALgDQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgLIAAgaIAAgUIgMgDIgBgDIAigHIABABIAAAJQAPgKAQAAIABABIgFAcIgFABQgCgIgDgFQgCgEgEAAQgEAAgHADIAAAjIABASQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIAMADIAAAEIgaAAg");
	this.shape_4.setTransform(-10.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAgQgNAJgNAAQgOAAgGgHQgHgGAAgNIAAgQIAAgaIgMgEIgBgCIAkgHIABAAIgBAaIAAAZQAAAKAEAEQAEAEAGAAQAIAAAHgDIAAgiIgBgTIgLgEIAAgCIAjgHIABAAIgBAaIAAAkIABAGIABADIAEABIAGABIABAEQgMAEgJAAQgLAAgDgJg");
	this.shape_5.setTransform(-19.3,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAeQgMgMAAgRQAAgSAMgLQAMgMAUAAQAUAAAMALQALAKAAATQAAASgMALQgNAMgTAAQgUAAgLgLgAgNgYQgEAIAAAQQAAAOAEAJQAFAKAJAAQAJAAAEgJQAFgIAAgQQAAgPgFgIQgFgJgJAAQgIAAgFAIg");
	this.shape_6.setTransform(-29.7,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA4IAAgBIAEgeIAFgBIAHAaQAFACAIAAQAJAAAHgFQAGgFAAgJQAAgFgCgEIgFgGIgHgFIgJgEIgKgGQgFgCgEgDQgEgEgDgGQgCgFAAgIQAAgQAMgJQAMgJATAAQAMAAAQADIAAABIgFAbIgFABIgGgXQgFgCgGAAQgIAAgGAFQgGAGAAAIQAAAFACADQACAEADACQADADAEACIAJAFIAKAFIAJAGQAEAEADAFQACAGAAAHQAAARgNAKQgMAJgUAAQgPAAgPgEg");
	this.shape_7.setTransform(-39.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999933").s().p("AoHB1IAAjpIQPAAIAADpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-12.3,104,24.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA6IgNAAIgYAAIAAgEIALgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgHIAAgJIAAhBIAAgIIgBgGQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBIgLgDIAAgEIAYAAIAOAAIAMAAQAVgBALAHQAKAHAAAMQAAAUgXAIQANACAIAHQAHAHAAAMQAAAQgNAKQgNAIgYABIgKgBgAgKAyIAKABQAKAAAGgHQAGgHAAgMQAAgNgGgFQgGgHgMAAIgIAAgAgKgxIAAArIAIAAQAKAAAFgFQAFgFAAgMQAAgMgFgFQgFgEgJgBIgEAAIgFABg");
	this.shape.setTransform(34.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcgXIgGgJIAAAMIAAAzIAAARQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIALAEIAAADIgTAAIgSAAIgBgDIAMgEQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAIAAgRIAAhAIAAgPQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIgLgDIgBgFIASAAIAQAAIA2BFIAHAIIAAgLIAAgqIgBgOQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAIgKgDIgBgFIATAAIASAAIABAFIgLADQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgBAPIAABaIgJABg");
	this.shape_1.setTransform(22.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAfQgNgKAAgTQAAgTAMgLQAMgMATAAQAQAAAJAJQAJAJAAAQIAAAFIg0AAQAAAQAIAHQAHAHATAAQAJAAAIgBIABAFQgPAIgRAAQgUAAgMgKgAgIgZQgEAGgBAKIAbAAIAAgCQAAgMgDgEQgDgFgFAAQgGAAgFAHg");
	this.shape_2.setTransform(11.1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAtQgHgFAAgJIABgyIgLgCIgBgFIAOgCIAIgTIALgCIACABIgBAUIAYAAIAAAKIgYAAIAAArQAAAIACADQADADAHABIANgBIAAAFQgNAGgLAAQgLAAgGgFg");
	this.shape_3.setTransform(-0.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAfQgNgKAAgTQAAgTAMgLQAMgMATAAQAQAAAJAJQAJAJAAAQIAAAFIg0AAQAAAQAIAHQAHAHATAAQAJAAAIgBIABAFQgPAIgRAAQgUAAgMgKgAgIgZQgEAGgBAKIAbAAIAAgCQAAgMgDgEQgDgFgFAAQgGAAgFAHg");
	this.shape_4.setTransform(-7.9,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA4QgKgFAAgHQAAgKANgKQgJgEAAgHQAAgIANgOQgNgHAAgPQAAgNAKgIQAJgIARAAIALABIALACIAYgBIABAEIgUAFQAHAHAAAJQAAAOgKAIQgJAIgQAAQgJAAgIgDQgDAGAAACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQADABAGAAIAMAAIANAAQAOAAAHAFQAIAFAAALQAAAPgQAKQgPAJgSAAQgRAAgIgFgAgbAmQAAAHAGAEQAGADAKAAQAMAAAJgFQAKgEgBgJQAAgEgEgDQgDgCgNAAIgKAAIgKAAIgIAAQgEAHAAAGgAgNgwQgCAFAAALQAAAKACAGQADAGAHAAQAFAAADgFQACgGAAgKQAAgLgCgFQgDgGgGAAQgGAAgDAFg");
	this.shape_5.setTransform(-16.5,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAoIgXAAIgBgEIALgDQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgLIAAgaIAAgUIgMgDIgBgDIAigHIABABIAAAJQAPgKAQAAIABABIgGAcIgEABQgCgIgDgFQgCgEgEAAQgEAAgHADIAAAjIABASQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAMADIAAAEIgaAAg");
	this.shape_6.setTransform(-24.7,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHAgQgKAJgLAAQgMAAgHgGQgIgFAAgLQAAgNAMgGQAMgGAXABIABgHQAAgIgFgEQgDgFgJAAQgJAAgMAEIgCgHQASgIAPAAQAPAAAHAHQAIAHAAAMIgBAiIAAAHIACADIAEACIAGABIABAEQgMAEgIAAQgLAAgEgJgAgLAFQgGADAAAJQAAAGAEAEQAEADAGAAQAFAAAEgDIAAgZQgMAAgFADg");
	this.shape_7.setTransform(-33,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAA6IgbAAIAAgEIAMgDQABgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgQIAAhQIgYAAIgHAWIgFAAIgDgeIABgBIAnAAIAWAAIAoAAIAAABIgFAeIgFAAIgFgWIgYAAIAABQIAAAQQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABIAOADIAAAEIgcAAg");
	this.shape_8.setTransform(-41.6,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066CC").s().p("An9B1IAAjpIP7AAIAADpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-12.3,102.1,24.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABA6IgVAAIgWAAIgBgEIAMgDQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAAgHIAAgJIAAhBIAAgIIAAgGQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIgLgDIgBgEIAXAAIAUAAIApAAIABABIgFAbIgFABIgFgUIgfAAIAAArIAEAAIAPAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIADgLIAFAAIAAASIAAARIgFAAIgDgMQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgPgBIgEAAIAAAdIAAASIAgAAIALgWIAFAAIgCAeIgBABIgoAAg");
	this.shape.setTransform(14.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqgTIgGgPIAAAPIAAAzIAAAQQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIAAAEIgRAAIgTAAIAAgEIALgDQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBIAAgQIAAhBIAAgOQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgMgDIAAgEIAVAAIATAAIAdBIIADAJIADgJIAdhIIAVAAIAUAAIAAAEIgLADQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABIgBAOIAABBIABAQQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAIALADIAAAEIgaAAIgYAAIAAgEIAJgDQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIABgQIAAg0IAAgRIgGAPIggBQIgIAAg");
	this.shape_1.setTransform(1.8,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqgTIgGgPIAAAPIAAAzIAAAQQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIAAAEIgRAAIgSAAIgBgEIALgDQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBIAAgQIAAhBIAAgOQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgKgDIgBgEIAUAAIAUAAIAdBIIADAJIADgJIAdhIIAWAAIATAAIAAAEIgLADQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBAOIAABBIABAQQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAIALADIAAAEIgaAAIgYAAIAAgEIAJgDQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAIAAgQIAAg0IAAgRIgGAPIggBQIgHAAg");
	this.shape_2.setTransform(-14.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("AkUB5IAAjxIIpAAIAADxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-12.3,55.4,24.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADgGIgDgLIgDALIgXBAIgJABIghhjIgDgHIgFgDIgIgDIgBgEIAXAAIAdAAIABAEIgJADIgBABIgBACIABAEIABAIIAQAwIACAJIACgJIAYhGIAJgBIAWBHIACAJIADgJIARgwIACgIIABgEIgBgCIgCgBIgIgDIAAgEIATAAIASAAIAAAEIgIADQgDABgCACIgDAGIgkBjIgJABg");
	this.shape.setTransform(12.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAtQgTgQAAgbQAAgdATgQQASgQAfAAQAPAAAPADIABAAIgGAdIgEABIgHgYQgHgBgJAAQgRgBgLAOQgKAOAAAYQAAAZAKAOQALANARAAIAKAAIAAgWIAAgIIAAgGQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBgBIgLgCIAAgFIAZAAIAYAAIABAFIgKACQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIAAAHIAAAIIAAAaIgBABQgSADgQAAQgdAAgSgPg");
	this.shape_1.setTransform(-2.2,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA4IAAgBIAEgeIAFgBIAGAaQAGACAIAAQAJAAAHgFQAGgFAAgJQAAgFgCgEIgFgGIgHgFIgJgEIgKgGQgFgCgEgDQgEgEgDgGQgCgFAAgIQAAgQAMgJQAMgJATAAQAMAAAQADIAAABIgFAbIgFABIgGgXQgFgCgGAAQgIAAgGAFQgGAGAAAIQAAAFACADQACAEADACQADADAEACIAJAFIAKAFIAJAGQAEAEADAFQACAGAAAHQAAARgNAKQgMAJgUAAQgPAAgPgEg");
	this.shape_2.setTransform(-13.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#669900").s().p("AkUB5IAAjxIIpAAIAADxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-12.3,55.4,24.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADgGIgDgLIgDALIgXBAIgJABIghhjIgDgHIgFgDIgIgDIgBgEIAXAAIAeAAIAAAEIgJADIgBABIgBACIABAEIABAIIAQAwIACAJIACgJIAYhGIAJgBIAWBHIACAJIADgJIARgwIACgIIABgEIgBgCIgCgBIgIgDIAAgEIATAAIASAAIAAAEIgIADQgEABgBACIgDAGIgkBjIgJABg");
	this.shape.setTransform(42,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglAtQgTgPAAgcQAAgdATgQQASgRAfAAQAPABAPADIABABIgGAcIgEABIgGgYQgIgBgJgBQgRABgKAOQgLANAAAYQAAAYALAOQAKAPARAAIAKgBIAAgWIAAgIIAAgFQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAAAgBIgLgCIAAgFIAZABIAYgBIABAFIgKACQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAGIAAAIIAAAaIgBAAQgRAEgRABQgdgBgSgPg");
	this.shape_1.setTransform(27.4,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVA6IgaAAIgBgEIAMgDQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgIIAAgJIAAhBIAAgIIAAgGQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgLgEIgBgEIAXAAIAQAAIAMAAQAWAAAMAIQAMAHAAAQQAAASgMAJQgMAKgWAAIgMgBIAAAWIAAAJIAAAHQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAIALADIABAEIgaAAgAgJgxIAAAzIAJABQAKAAAGgGQAGgHAAgNQAAgNgGgHQgFgGgLAAIgJAAg");
	this.shape_2.setTransform(15.6,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699CC").s().p("AkSB4IAAjwIIlAAIAADwg");
	this.shape_3.setTransform(27.5,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,24.8);


(lib.Sn_status_transfer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape.setTransform(43.5,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPgBgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_1.setTransform(37.3,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIACgEQACgEAEgCQAEgDAGAAQAHAAAHACIgCAMIgIgBQgEAAgBACQgCABAAAFIAAAFIANAAIAAAMIgNAAIAAAxg");
	this.shape_2.setTransform(32.3,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIAQgCQABAFAEACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgDQgSgEgGgEQgHgDAAgJQAAgJAGgFQAHgGANABQAMAAAHADQAGAFACAIIgPADQgBgEgEgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIAOAEQANADAGAEQAFAEAAAIQAAAIgHAGQgHAHgOAAQgMAAgIgGg");
	this.shape_3.setTransform(26.6,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_4.setTransform(19.7,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgGADgDQACgEAEgCQAFgCAJgBQAKgDAFgCIAAgBQAAgFgDgCQgCgCgGAAQgEAAgCABQgDACgCAFIgOgDQACgJAGgFQAGgDAMAAQAKgBAGADQAFACACAFQACAEAAAKIAAATIACAMIACAIIgQAAIgBgFIgBgCQgFAFgEACQgEACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_5.setTransform(12.7,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCAEAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgCACQgCACgBAFQgCAFAAAPIAAATg");
	this.shape_6.setTransform(7.5,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgIArIAAhGIgZAAIAAgPIBDAAIAAAPIgZAAIAABGg");
	this.shape_7.setTransform(1.7,10.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgCQACAFADACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgDQgSgEgFgEQgIgDAAgJQAAgJAGgFQAHgGANABQAMAAAHADQAFAFADAIIgQADQAAgEgDgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIAOAEQANADAGAEQAFAEAAAIQAAAIgHAGQgIAHgNAAQgMAAgHgGg");
	this.shape_8.setTransform(-8.8,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_9.setTransform(-15.7,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_10.setTransform(-21.3,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgGACgDQADgEAEgCQAFgCAJgBQAKgDAEgCIAAgBQAAgFgCgCQgCgCgGAAQgEAAgDABQgCACgCAFIgPgDQADgJAGgFQAGgDAMAAQAKgBAGADQAFACACAFQACAEAAAKIAAATIABAMIADAIIgQAAIgBgFIgBgCQgFAFgEACQgEACgGAAQgJgBgFgFgAAAAEQgHABgCABQgDADAAAEQAAADADACQADADADAAQAEAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_11.setTransform(-26.6,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_12.setTransform(-32,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgGQAEgFAHgEQAHgDAJAAQAQAAAIAIQAIAHAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEADALAEQANACAGAEQAGADAEAFQADAFAAAIQAAAIgEAGQgEAGgIAEQgHADgLAAQgQgBgIgHg");
	this.shape_13.setTransform(-38.1,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAQArIghg3IAAA3IgQAAIAAhVIARAAIAiA5IAAg5IAQAAIAABVg");
	this.shape_14.setTransform(-49.7,10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgBQABAIAFAEQAFAEAHAAQAIAAAEgEQAFgDAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgGQAEgFAHgEQAHgDAJAAQAQAAAIAIQAIAHAAALIgRABQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAACACACQAEADALAEQANACAGAEQAGADAEAFQADAFAAAIQAAAIgEAGQgEAGgIAEQgHADgLAAQgQgBgIgHg");
	this.shape_15.setTransform(-58.1,10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_16.setTransform(133,171.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_17.setTransform(130.4,169.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_18.setTransform(124.6,169.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IAKAAIAOAkIADAMIAEgLIAOglIAKAAIgXA9g");
	this.shape_19.setTransform(118.3,169.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_20.setTransform(112,169.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_21.setTransform(105.1,168);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_22.setTransform(98.7,169.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgIQAAgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgCIAAgDQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEACgGABQgLgBgFgFgAgCAEQgGABgDABQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_23.setTransform(92,169.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_24.setTransform(85.4,168);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_25.setTransform(224,153.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_26.setTransform(217.3,152.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_27.setTransform(212.4,152.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_28.setTransform(205.8,153.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_29.setTransform(200,153.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_30.setTransform(195,152.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_31.setTransform(191.9,152.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgJQAAgEACgEQACgDADgDIAHgDIAKgBQAMgBAFgDIAAgCQAAgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAFgGADQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgCADABACQAAAFADADQADACAGAAQAFAAAFgCQAFgDACgFQABgEAAgGIAAgEIgPAEg");
	this.shape_32.setTransform(186.6,153.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_33.setTransform(176.6,153.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIABQgMgBgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_34.setTransform(170,153.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_35.setTransform(165.3,152.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_36.setTransform(162.4,152.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHAAQAGAAAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMgBgHgIg");
	this.shape_37.setTransform(157.8,153.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_38.setTransform(151.3,153.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_39.setTransform(146.4,152.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIABQgMgBgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_40.setTransform(141.3,153.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_41.setTransform(136.5,153.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAEgDAFAAQAJAAAGAEQAFAEAEAIQADAHAAAJQAAAKgEAGQgDAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgCgEIAAAfgAgMgcQgEAGgBAMQABALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_42.setTransform(130.9,154.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgYg9IAMAAIANAkIAEANIADgNIAOgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_43.setTransform(121.1,155.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_44.setTransform(116.4,152.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_45.setTransform(113.3,152.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_46.setTransform(110.5,153.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_47.setTransform(104.5,155);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_48.setTransform(98,153.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_49.setTransform(93.1,152.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_50.setTransform(88,153.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_51.setTransform(83.4,152.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgFAAgFAGg");
	this.shape_52.setTransform(225.6,137.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_53.setTransform(219.2,138.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_54.setTransform(212.5,138.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgDABgFIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgHAGgEQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_55.setTransform(202.3,139.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_56.setTransform(195.9,138.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_57.setTransform(191.2,137.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_58.setTransform(188.4,138.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_59.setTransform(182.6,138.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_60.setTransform(175.9,137.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgFAHg");
	this.shape_61.setTransform(169.5,139.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_62.setTransform(164.6,137.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_63.setTransform(160.5,138.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgDABgFIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgHAGgEQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_64.setTransform(150.4,139.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_65.setTransform(144,138.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_66.setTransform(139.3,137.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_67.setTransform(134.6,138.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_68.setTransform(128,138.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_69.setTransform(123.4,137.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_70.setTransform(120.4,137.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_71.setTransform(115.4,138.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_72.setTransform(108.7,138.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_73.setTransform(102.6,138.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_74.setTransform(94.5,138.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_75.setTransform(88.7,138.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_76.setTransform(84,137.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_77.setTransform(255.4,122);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_78.setTransform(249,123.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_79.setTransform(242.1,122);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_80.setTransform(235.7,123.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_81.setTransform(229,123.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_82.setTransform(222.4,123);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_83.setTransform(212.4,123.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_84.setTransform(207.5,123);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQABgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgCgDQgEgDgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIAAAKIAAANIABATQABADACAEIgLAAIgDgHQgGAFgFACQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgDABgBACQgBACAAAEQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_85.setTransform(201.7,123.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgDgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEABAGIgKABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgGgGg");
	this.shape_86.setTransform(192,123.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFABgMQgBgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_87.setTransform(185.5,122);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_88.setTransform(181,121.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_89.setTransform(176.4,123.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_90.setTransform(171.8,121.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_91.setTransform(169,121.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_92.setTransform(160.4,123.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQACAGADAEQAFADAFAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIAJAEIAPAEQAFABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgHgGg");
	this.shape_93.setTransform(154.1,123.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_94.setTransform(147.8,123.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_95.setTransform(141.1,121.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_96.setTransform(134.2,121.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_97.setTransform(125.7,125.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_98.setTransform(123.1,123);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_99.setTransform(117.3,123.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAFACQAGACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_100.setTransform(110.9,122);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKIgDgEQgDgCgDAAQgHAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgDADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_101.setTransform(102.4,123);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_102.setTransform(94,123.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_103.setTransform(86.4,121.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_104.setTransform(267.8,107.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_105.setTransform(259.5,107.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgBAHgCIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgDAAgIIAAgDIgQAEg");
	this.shape_106.setTransform(251.2,107.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_107.setTransform(246.3,107.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAnAAIAAAJIgnAAIAAAng");
	this.shape_108.setTransform(240.4,106.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_109.setTransform(231.6,107.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_110.setTransform(225.8,107.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAHAAAGAEQAHAEADAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgCQgFgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgGAHg");
	this.shape_111.setTransform(219.4,108.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAGgBIADgDIADgIIABgDIgXg9IALAAIANAkIADANIAFgNIANgkIAKAAIgXA+IgFAOQgDAGgEACQgDADgGAAIgGgCg");
	this.shape_112.setTransform(212.9,109);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAkIArAAIAAgkIAMAAIAABVg");
	this.shape_113.setTransform(205.5,106.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_114.setTransform(195.2,106.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_115.setTransform(188.5,107.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_116.setTransform(183.9,106.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_117.setTransform(181.2,106.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_118.setTransform(176.6,107.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgLglIgCgKIgLAvIgLAAIgUg9IAMAAIAJAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAKAAIgTA9g");
	this.shape_119.setTransform(168.9,107.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_120.setTransform(161.3,107.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgjArIAAhVIAeAAQAJAAAFACQAHABAGAEQAGAGAEAJQAEAJgBALQAAAJgCAIQgDAHgDAGQgDAEgEAEIgLADQgGACgGAAgAgXAhIASAAQAIAAAEgBIAIgFQAEgEADgHQABgHAAgJQAAgNgEgHQgEgHgHgDQgEgCgJAAIgSAAg");
	this.shape_121.setTransform(153.8,106.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgHAAgFAGg");
	this.shape_122.setTransform(142.4,106.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_123.setTransform(136,107.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQABgEABgEQACgEAEgCIAIgDIAJgBQALgBAHgCIAAgDQAAgGgEgEQgDgDgIAAQgGAAgEACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgBgIQgHAGgEABQgFACgHAAQgJAAgGgEgAgBAEQgHABgDABQgDABgBADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgQAEg");
	this.shape_124.setTransform(129.3,107.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_125.setTransform(121.1,107.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_126.setTransform(115.3,107.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAKAAQAFAAAFACQAFACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALADAFQAGAIAIAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgHAAgEAGg");
	this.shape_127.setTransform(108.9,106.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_128.setTransform(100.4,107.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_129.setTransform(92,107.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_130.setTransform(85.4,107.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_131.setTransform(217,92.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_132.setTransform(210.8,92.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_133.setTransform(204.3,92.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_134.setTransform(197.7,92.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_135.setTransform(191,92.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AAQAsIAAgfQgCAEgEACQgFACgEAAQgLAAgIgJQgIgJAAgOQAAgJAEgIQACgHAHgEQAGgEAHAAQALAAAHAKIAAgIIAJAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAFgGAAgLQgBgMgFgGQgEgHgHAAQgHAAgEAGg");
	this.shape_136.setTransform(184.2,93.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_137.setTransform(177.7,92.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIALgCQABAGADADQAFAEAFAAQAIgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgDgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEIAEACIAJADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgDAFgGACQgGACgHABQgLAAgHgGg");
	this.shape_138.setTransform(171.4,92.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_139.setTransform(161.5,91.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAJgFQAKgFALAAQANAAAIAGQAJAHAEAMIgMACQgCgJgHgFQgFgDgIgBQgJABgHAEQgHAFgCAIQgDAIAAAIQAAAKADAJQADAHAHAEQAGAFAIAAQAJAAAGgGQAHgFACgLIAMADQgEAOgJAHQgJAIgNAAQgOgBgIgFg");
	this.shape_140.setTransform(153,91.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AgiArIAAhVIAdAAQAJAAAFABQAIACAFAFQAGAFAEAJQADAJAAALQAAAKgCAHQgDAIgDAEQgDAFgEADIgLAEQgGACgGAAgAgXAhIASAAQAIAAAEgCIAIgEQAEgEADgHQABgHAAgJQAAgNgEgIQgEgGgHgDQgEgCgJAAIgSAAg");
	this.shape_141.setTransform(144.5,91.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_142.setTransform(136.2,91.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_143.setTransform(126,91.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_144.setTransform(119.3,92.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_145.setTransform(114.6,91.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_146.setTransform(111.9,91.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_147.setTransform(107.3,92.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgJglIgDgKIgMAvIgLAAIgSg9IAKAAIAKAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_148.setTransform(99.7,92.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_149.setTransform(92,92.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFABgMQgBgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_150.setTransform(85.2,91.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_151.setTransform(257.7,77.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_152.setTransform(251,75.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_153.setTransform(244.1,75.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAKQADgBACgEQAAgCAAgEIgFAAIAAgNIALAAIAAANQAAAFgCAEQgCAFgEABg");
	this.shape_154.setTransform(235.5,80.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_155.setTransform(233,77);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_156.setTransform(227.2,77.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAGACQAFACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgFAGgBALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_157.setTransform(220.8,75.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_158.setTransform(212.3,77);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_159.setTransform(203.9,77.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_160.setTransform(196.3,75.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_161.setTransform(185.3,77.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIAAgKQgCgCgCgCQgDgCgDAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgDADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_162.setTransform(177,77);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgCAFgBIAAgDQAAgGgDgEQgEgDgHAAQgHAAgDACQgEADgCAHIgKgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgKAAIgCgIQgGAGgGABQgEACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgCACABACQAAAFADACQADADAGAAQAFAAAFgDQAFgCACgFQABgEAAgGIAAgEIgPAEg");
	this.shape_163.setTransform(168.6,77.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_164.setTransform(163.8,77);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.988)").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAoAAIAAAJIgoAAIAAAng");
	this.shape_165.setTransform(157.9,75.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_166.setTransform(149.1,77);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_167.setTransform(143.3,77.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAIAAAFAEQAGAEAEAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgFgCQgEgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_168.setTransform(136.8,78.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgXg9IALAAIANAkIAEANIADgNIAOgkIAKAAIgXA+IgFAOQgDAGgEACQgDADgGAAIgGgCg");
	this.shape_169.setTransform(130.4,78.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAjIArAAIAAgjIAMAAIAABVg");
	this.shape_170.setTransform(123,75.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_171.setTransform(112.7,75.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_172.setTransform(106,77);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_173.setTransform(101.3,75.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_174.setTransform(98.6,75.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_175.setTransform(94.2,78.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_176.setTransform(86.4,75.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAKQADgBACgDQAAgDAAgFIgFAAIAAgLIALAAIAAALQAAAGgCAEQgCAFgEACg");
	this.shape_177.setTransform(249.9,65.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_178.setTransform(247.4,61.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_179.setTransform(241.6,61.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAGACQAFACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgFAGgBALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_180.setTransform(235.2,60.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_181.setTransform(226.7,61.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_182.setTransform(218.3,61.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_183.setTransform(211.7,61.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_184.setTransform(201.7,61.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAFQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAFQgHAGgKABQgMAAgHgJg");
	this.shape_185.setTransform(195.5,61.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_186.setTransform(189,61.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_187.setTransform(182.4,61.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_188.setTransform(175.7,61.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.988)").s().p("AAQAsIAAgfQgCAEgEACQgFACgEAAQgLAAgIgJQgIgJAAgOQAAgJADgIQADgHAHgEQAGgEAHAAQALAAAHAKIAAgIIAJAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAFgGAAgLQgBgMgFgGQgEgHgHAAQgHAAgEAGg");
	this.shape_189.setTransform(168.9,62.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_190.setTransform(162.4,61.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAFAEAFAAQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgDgFQgCgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIACAEIADACIAJADIAPAFQAFABACADQADAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_191.setTransform(156.1,61.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_192.setTransform(146.2,60.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAJgFQAKgGALABQANAAAIAGQAJAHAEAMIgMADQgCgKgHgFQgFgDgIAAQgJAAgHAEQgHAFgCAIQgDAIAAAIQAAAKADAJQADAHAHAEQAGAEAIABQAJAAAGgGQAHgGACgKIAMADQgEAOgJAHQgJAIgNAAQgOAAgIgGg");
	this.shape_193.setTransform(137.7,60.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.988)").s().p("AgiArIAAhVIAdAAQAJAAAFABQAIACAFAFQAGAFAEAJQADAJAAALQAAAJgCAIQgDAIgDAFQgDAEgEAEIgLADQgGACgHAAgAgXAhIASAAQAIAAAEgCIAIgEQAEgEADgHQABgHAAgJQAAgNgEgIQgEgGgHgDQgEgCgJAAIgSAAg");
	this.shape_194.setTransform(129.2,60.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_195.setTransform(120.9,60.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_196.setTransform(110.7,60.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_197.setTransform(104,61.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_198.setTransform(99.3,60.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_199.setTransform(96.6,60.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAJAAAGAEQAGAEADAIQADAHAAAJQAAAKgDAGQgEAIgHAEQgGAEgHAAQgFAAgDgCQgFgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgFgGgGAAQgGAAgFAHg");
	this.shape_200.setTransform(92.2,62.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_201.setTransform(85.3,61.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgEQAAgFACgEIAFgGIAHgCIAJgBQAGAAAGABQAFACADAEQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgGgEg");
	this.shape_202.setTransform(262.2,46.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_203.setTransform(255.9,46.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_204.setTransform(251.3,45.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGAAgIQAAgEADgEQABgEAEgCIAIgDIAJgBQALgCAGgBIAAgDQAAgHgCgDQgFgDgHAAQgGAAgFACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEACAEIgMAAIgCgIQgGAFgEADQgFABgGAAQgKAAgGgEgAgCAEQgGAAgDACQgDABgBADQgBACAAACQAAAEADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_205.setTransform(246.6,46.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_206.setTransform(241.7,45.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_207.setTransform(236.6,46.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_208.setTransform(230,46.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_209.setTransform(223.8,46.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_210.setTransform(214,45.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_211.setTransform(207.8,46.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_212.setTransform(203.3,45.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_213.setTransform(198.7,45.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgJgkIgDgLIgMAvIgLAAIgTg9IALAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_214.setTransform(191,46.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgEQAAgFACgEIAFgGIAHgCIAJgBQAGAAAGABQAFACADAEQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADAEAAAFQAAAFgDAEQgEAFgFADQgGADgHgBQgLAAgGgEg");
	this.shape_215.setTransform(180.3,46.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_216.setTransform(174,46.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_217.setTransform(169.1,45.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgCAFgBIAAgDQAAgHgDgDQgEgDgHAAQgGAAgFACQgDADgBAHIgLgCQACgGADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQABAEACAEIgLAAIgDgIQgFAFgGADQgEABgGAAQgLAAgFgEgAgCAEQgGAAgDACQgCABgCADQgCACABACQgBAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_218.setTransform(164,46.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_219.setTransform(159.1,45.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgIIAKgBQABAGADAEQADAEAGADQAFACAHAAQAGAAAFgBQAFgCADgEQACgEAAgEQAAgDgCgDQgDgEgFgCIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgFAHgDQAHgEAJAAQAJAAAHAEQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKAAQgKAAgEAFQgFADAAAGQAAAEADADQAEADAMADQAOAEAFACQAIACADAGQAEAFAAAGQAAAHgEAHQgEAFgHAEQgIADgJAAQgKAAgIgDg");
	this.shape_220.setTransform(153.3,45.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_221.setTransform(144.5,46.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_222.setTransform(138.7,46.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_223.setTransform(133.9,45.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIALgCQABAGADAEQAEACAGAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgCIAJgBQAGAAAGABQAGACACAEQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_224.setTransform(129,46.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_225.setTransform(122.7,46.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQADgEADgCIAIgDIAJgBQAMgCAFgBIAAgDQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFABgGAAQgKAAgGgEgAgCAEQgGAAgDACQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_226.setTransform(116,46.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_227.setTransform(111.2,46.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_228.setTransform(105.5,45.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_229.setTransform(94.4,45.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgIIAKgBQABAGADAEQADAEAGADQAFACAHAAQAGAAAFgBQAFgCADgEQACgEAAgEQAAgDgCgDQgDgEgFgCIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgFAHgDQAHgEAJAAQAJAAAHAEQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKAAQgKAAgEAFQgFADAAAGQAAAEADADQAEADAMADQAOAEAFACQAIACADAGQAEAFAAAGQAAAHgEAHQgEAFgHAEQgIADgJAAQgKAAgIgDg");
	this.shape_230.setTransform(86,45.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_231.setTransform(265.9,31);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_232.setTransform(259.2,29.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_233.setTransform(254.3,30);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIALgBQABAGADADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgEg");
	this.shape_234.setTransform(246.2,31);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgEAGg");
	this.shape_235.setTransform(239.7,29.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_236.setTransform(233.2,30.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_237.setTransform(226.6,31);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgFgCgLIAKgBQACAGADADQAFADAFABQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgEg");
	this.shape_238.setTransform(220.2,31);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKglIgCgKIgMAvIgLAAIgTg9IALAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIALAAIgUA9g");
	this.shape_239.setTransform(209.6,31);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_240.setTransform(201.9,31);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_241.setTransform(195.3,30.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAFgDADQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHgBIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape_242.setTransform(184.7,29.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_243.setTransform(177.3,31);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgFgGgGAAQgHAAgEAGg");
	this.shape_244.setTransform(170.4,29.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_245.setTransform(164,31);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_246.setTransform(156.3,29.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_247.setTransform(148.7,31);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_248.setTransform(138.7,31);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAFQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKABQgMAAgHgJg");
	this.shape_249.setTransform(132.5,31);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_250.setTransform(127.8,30.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_251.setTransform(122,31.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_252.setTransform(115.4,31);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgEg");
	this.shape_253.setTransform(109,31);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_254.setTransform(99.4,31);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_255.setTransform(92.7,29.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_256.setTransform(85.8,29.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E6FFFF").s().p("AvxM+IAA57IfjAAIAAZ7g");
	this.shape_257.setTransform(178.8,96.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AouBaIAAizIRdAAIAACzg");
	this.shape_258.setTransform(-7.7,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_257},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_258}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,2,123.1,17.7);


(lib.rrc_meas_report = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape.setTransform(-22.9,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_1.setTransform(-26.7,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgPAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAIgEQAGgFAJAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgIAAgHgDgAgKgOQgEAGAAAIQAAAJAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgJQAAgIgEgGQgEgEgHAAQgFAAgFAEg");
	this.shape_2.setTransform(-33.2,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgeAsIAAhVIAQAAIAAAJQADgFAFgDQAFgDAFAAQALAAAIAJQAHAJAAAPQABAOgJAJQgHAJgLgBQgEAAgEgCQgFgBgEgGIAAAggAgJgZQgEAEAAAKQAAALAEADQAEAGAFAAQAGgBAEgEQADgEAAgKQAAgKgDgFQgEgFgGABQgFgBgEAFg");
	this.shape_3.setTransform(-40.4,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_4.setTransform(-47.6,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAFgLACQAGADADAFQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgCACgDQACgCgBgEQAAgEgBgCQgDgEgEAAIgMgBIgOAAg");
	this.shape_5.setTransform(-54.8,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_6.setTransform(45,-3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_7.setTransform(39.3,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_8.setTransform(32.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_9.setTransform(23.7,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_10.setTransform(15,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAFAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_11.setTransform(9.9,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_12.setTransform(3.4,-1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIAQgDQACAGADACQADADAFAAQAGAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgGgCQgSgEgFgEQgIgEAAgIQAAgJAHgFQAGgGANABQAMAAAHADQAFAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAOAEQAOADAFAEQAFAEAAAIQAAAIgHAGQgIAHgNAAQgMAAgHgGg");
	this.shape_13.setTransform(-3.7,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgEQACgFAEgBQAFgCAJgBQAKgCAFgDIAAgBQAAgFgDgCQgCgCgGAAQgEAAgCABQgDACgCAFIgOgDQACgJAGgFQAGgDAMAAQAKAAAGACQAFADACAEQACAEAAAKIAAASIACANIACAIIgQAAIgBgFIgBgCQgFAFgEACQgEACgFAAQgKgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQACADAEAAQAEAAAEgDQADgCABgDIABgIIAAgEIgKADg");
	this.shape_14.setTransform(-10.2,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_15.setTransform(-16.9,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAaArIAAhDIgRBDIgRAAIgRhDIAABDIgQAAIAAhVIAaAAIAPA6IAQg6IAaAAIAABVg");
	this.shape_16.setTransform(-25.2,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgZAhQgLgMAAgUQAAgVALgMQALgMARAAQAPAAAKAKQAGAGADAKIgRAEQgCgHgEgEQgFgDgHAAQgIAAgHAGQgFAHAAAPQAAAQAFAGQAGAIAIgBQAIABAEgFQAGgEABgKIARAGQgEAOgIAGQgJAIgOAAQgRAAgKgMg");
	this.shape_17.setTransform(-37.9,-3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQAEAHgBAHQABAKgGAGQgGAGgLABQAGADADAEQAEAEAGAKIAKARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgCgDQgCgDgEAAIgMAAIgOAAg");
	this.shape_18.setTransform(-46.1,-3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQADAHAAAHQAAAKgFAGQgGAGgLABQAGADADAEQAEAEAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgBgDQgDgDgEAAIgMAAIgOAAg");
	this.shape_19.setTransform(-54.8,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAFAAAIQAAAGgCAGQgDAEgDAEQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgCgHABIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgBQgEgCgIAAIgRAAg");
	this.shape_20.setTransform(206.7,20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_21.setTransform(198.2,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_22.setTransform(190.6,21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAsIAYhXIAJAAIgYBXg");
	this.shape_23.setTransform(185.6,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_24.setTransform(182.5,20.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_25.setTransform(179.9,20.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_26.setTransform(175.3,21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_27.setTransform(169.1,21.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_28.setTransform(161,20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_29.setTransform(155.9,21.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgDABgFIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgHAGgEQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_30.setTransform(149.1,22.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_31.setTransform(144.4,21.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgFAAgJQAAgEADgDQABgEAEgDIAIgDIAJgBQALgBAGgCIAAgDQAAgGgCgDQgFgEgHAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFACADIgMAAIgCgIQgGAGgEABQgFACgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQAAAFADACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_32.setTransform(138.6,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_33.setTransform(133.7,20.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAsIAYhXIAJAAIgYBXg");
	this.shape_34.setTransform(130.3,20.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_35.setTransform(127.1,21.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_36.setTransform(121.3,21.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAFACQAGACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALADAFQAGAIAIAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgHAAgEAGg");
	this.shape_37.setTransform(114.8,20.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_38.setTransform(108,20.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgDABgFIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgHAGgEQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_39.setTransform(101.1,22.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_40.setTransform(96.7,20.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_41.setTransform(92,21.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_42.setTransform(85.4,21.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_43.setTransform(186.6,6.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_44.setTransform(181.7,5.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_45.setTransform(175.1,6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_46.setTransform(169.3,6.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IAKAAIAOAkIADAMIAEgLIAOglIAKAAIgXA9g");
	this.shape_47.setTransform(163,6.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_48.setTransform(156.6,6.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_49.setTransform(149.8,5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_50.setTransform(143.3,6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgDgDQgEgDgHAAQgHAAgDADQgEADgCAGIgKgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAADACAEIgKAAIgCgHQgGAFgGACQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgPAEg");
	this.shape_51.setTransform(136.7,6.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_52.setTransform(130,4.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_53.setTransform(118.4,6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_54.setTransform(111.8,6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_55.setTransform(106,6.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_56.setTransform(101.3,4.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_57.setTransform(97.8,6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_58.setTransform(92,6.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_59.setTransform(85.6,7.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_60.setTransform(227.9,-9.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_61.setTransform(222.9,-10.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_62.setTransform(216.3,-9.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_63.setTransform(210.5,-9.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_64.setTransform(203.9,-10.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_65.setTransform(198.9,-10.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_66.setTransform(193.9,-9.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_67.setTransform(187.2,-10.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKglIgDgKIgMAvIgKAAIgTg9IAKAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_68.setTransform(179.6,-9.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_69.setTransform(168.6,-9.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_70.setTransform(161.9,-9.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_71.setTransform(157.3,-10.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIALgBQABAGADADQAFADAFAAQAIAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgDgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQACAEABAGIgKABQgBgEgDgEQgDgCgGAAQgHAAgDACQgDADAAADIABAEIAEADIAJACIAPAFQAFABACADQADAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_72.setTransform(152.9,-9.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_73.setTransform(148.6,-10.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgGgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_74.setTransform(144.5,-9.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_75.setTransform(138,-9.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgFAAgFAGg");
	this.shape_76.setTransform(131.1,-10.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_77.setTransform(121.3,-9.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_78.setTransform(115.4,-10.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgEQgEgDgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAEACAEIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_79.setTransform(108.7,-9.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_80.setTransform(103.7,-10.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_81.setTransform(97.3,-10.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_82.setTransform(94.6,-10.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_83.setTransform(92,-10.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKglIgCgKIgLAvIgMAAIgTg9IALAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAKAAIgTA9g");
	this.shape_84.setTransform(86.4,-9.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGAEADAFQADAFAAAGQAAAFgDAGQgDAEgGAEQAIABAEAFQAEAFAAAIQAAAGgCAFQgDAFgDADQgEADgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgDQACgEAAgEQAAgEgDgEQgCgEgFgBQgEgBgHgBIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEgBQgEgBgIAAIgRAAg");
	this.shape_85.setTransform(228,-25.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_86.setTransform(219.6,-25.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_87.setTransform(211.9,-24.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAKQADgCACgDQAAgCAAgFIgFAAIAAgLIALAAIAAALQAAAGgCAEQgCAEgEACg");
	this.shape_88.setTransform(203.5,-21.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQABAGAFADQADAEAGAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgBgFQgDgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIAEACIAIADIAQAFQAEABADAEQACADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgGgGg");
	this.shape_89.setTransform(198.9,-24.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_90.setTransform(192.6,-24.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_91.setTransform(185.9,-24.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_92.setTransform(181.2,-25.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGADQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgCABgCACQgCADABADQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_93.setTransform(176.6,-24.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IALAAIANAkIADAMIAEgLIAOglIALAAIgYA9g");
	this.shape_94.setTransform(170.3,-24.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgHAAgFAGg");
	this.shape_95.setTransform(160.4,-25.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_96.setTransform(154,-24.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IAKAAIAOAkIADAMIAEgLIAOglIAKAAIgXA9g");
	this.shape_97.setTransform(147.7,-24.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_98.setTransform(143.3,-25.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_99.setTransform(138.7,-24.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_100.setTransform(132.5,-24.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_101.setTransform(126,-24.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_102.setTransform(121.2,-24.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_103.setTransform(112,-24.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgDgGAAQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_104.setTransform(105.4,-25.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_105.setTransform(100.4,-25.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_106.setTransform(92,-24.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_107.setTransform(85.4,-24.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_108.setTransform(238.3,-41.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_109.setTransform(231.9,-39.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQACAGAEAEQAEACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQADAEABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADADIAJADIAQAEQAEABADADQACAFAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_110.setTransform(225.5,-39.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgHIAAgDIgQAEg");
	this.shape_111.setTransform(219.2,-39.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAEgDADQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgCACgDQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgBQgEgCgIAAIgRAAg");
	this.shape_112.setTransform(212,-41.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_113.setTransform(202.9,-37.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFAEQADACAGAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgBgDQgDgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQACAEACAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADADIAJADIAQAEQAEABADADQACAFAAAEQAAAGgDAEQgEAFgFADQgGADgHgBQgMAAgFgEg");
	this.shape_114.setTransform(194.8,-39.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_115.setTransform(190.5,-41.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_116.setTransform(187.8,-41.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_117.setTransform(183.2,-39.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_118.setTransform(177.1,-39.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_119.setTransform(169,-40);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_120.setTransform(163.2,-39.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAFACQAGACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_121.setTransform(156.8,-41.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_122.setTransform(149.9,-41.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_123.setTransform(143.1,-38.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_124.setTransform(138.6,-41.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_125.setTransform(134,-39.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_126.setTransform(127.3,-40);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAsIAYhYIAJAAIgYBYg");
	this.shape_127.setTransform(122.3,-41.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_128.setTransform(117.1,-38.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_129.setTransform(110.7,-40);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_130.setTransform(106,-41.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IAMAAIANAkIADANIAEgNIAOgkIALAAIgYA9g");
	this.shape_131.setTransform(101.7,-39.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_132.setTransform(97.2,-40);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_133.setTransform(91.4,-39.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQABAGAFAEQADACAGAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgBgDQgDgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQACAEACAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIAEADIAIADIAQAEQAEABADADQACAFAAAEQAAAGgDAEQgEAFgFADQgGADgHgBQgMAAgGgEg");
	this.shape_134.setTransform(85,-39.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_135.setTransform(219.9,-56.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_136.setTransform(214.7,-55.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgNA4QAQgcAAgcQAAgKgCgLQgBgJgEgIIgJgRIAHAAQALAOAEAPQAFANAAANQAAAPgGAPQgGAPgIALg");
	this.shape_137.setTransform(206.2,-55.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AAUAlQgJAFgLAAQgMAAgJgFQgJgGgGgKQgFgLAAgMQAAgMAFgKQAGgLAJgFQAKgGALAAQALAAAKAGQAKAGAEAKQAGAJgBANQAAAKgDAIQgDAJgGAGQAHAGAHADIgDAHQgKgDgJgHgAgVgcQgIAKAAAQQAAAQAIAJQAIAJANAAQAGAAAFgCQgFgDgGgCIADgIQAJACAHAGQAJgJABgSQAAgKgEgIQgDgHgIgFQgGgEgIAAQgNAAgIAIg");
	this.shape_138.setTransform(199.4,-56.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_139.setTransform(190.7,-56.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFADAHAAQAGgBAFgCQAFgCADgDQACgEAAgDQAAgEgCgEQgDgCgFgCIgOgFQgMgDgFgBQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgGAHgDQAHgCAJAAQAJAAAHACQAHAEAEAGQAEAFAAAJIgKAAQgBgIgFgEQgFgEgKAAQgKAAgEADQgFAEAAAFQAAAFADADQAEADAMAEQAOADAFACQAIACADAFQAEAGAAAHQAAAGgEAGQgEAHgHADQgIAEgJAAQgKAAgIgEg");
	this.shape_140.setTransform(182,-56.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_141.setTransform(174.1,-56.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAtIAYhYIAJAAIgYBYg");
	this.shape_142.setTransform(167.7,-56.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_143.setTransform(162.2,-56.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_144.setTransform(154.1,-56.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFADAHAAQAGgBAFgCQAFgCADgDQACgEAAgDQAAgEgCgEQgDgCgFgCIgOgFQgMgDgFgBQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgGAHgDQAHgCAJAAQAJAAAHACQAHAEAEAGQAEAFAAAJIgKAAQgBgIgFgEQgFgEgKAAQgKAAgEADQgFAEAAAFQAAAFADADQAEADAMAEQAOADAFACQAIACADAFQAEAGAAAHQAAAGgEAGQgEAHgHADQgIAEgJAAQgKAAgIgEg");
	this.shape_145.setTransform(145.3,-56.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_146.setTransform(137.4,-56.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AAGA4QgHgLgGgPQgGgPAAgPQAAgNAEgNQAGgPAJgOIAIAAIgJARQgEAIgBAJQgCALAAAKQgBAcARAcg");
	this.shape_147.setTransform(130.9,-55.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAFQACAEAAAIIAAAog");
	this.shape_148.setTransform(122,-56.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_149.setTransform(117.1,-56.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgDABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgNQAAgJADgHQADgIAGgDQAGgEAIgBQALABAHAIIAAgHIAJAAIAAA1QAAAOgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHABQAHgBAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_150.setTransform(111.8,-54.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_151.setTransform(105.4,-55.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_152.setTransform(98.7,-55.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_153.setTransform(93.9,-55.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_154.setTransform(89.8,-56.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIAKgBQABAGAFADQADAEAGAAQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgBgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIAEACIAIADIAQAFQAEABADADQACAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgGgFg");
	this.shape_155.setTransform(85,-55.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_156.setTransform(233.8,-71.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgEgDQgDgDgIAAQgGAAgEACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIABAKIAAANIAAASQABAEABAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgJAAgGgEgAgBAEQgHAAgDACQgDABgBADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_157.setTransform(229.2,-70.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_158.setTransform(222.6,-70.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgDABgEIABgOQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_159.setTransform(215.7,-69.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_160.setTransform(211.3,-71.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIALgCQABAGADAEQAFACAFAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEABAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgDACQgDADAAADIABAEIAEACIAJAEIAPAEQAFABACAEQADAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_161.setTransform(206.9,-70.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIALgCQABAGADAEQAFACAGAAQAHABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEABAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFACIAIAEIAPAEQAFABACAEQADAEAAAFQAAAFgDAEQgEAFgFADQgGADgHgBQgMAAgFgEg");
	this.shape_162.setTransform(197.6,-70.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_163.setTransform(191.3,-70.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_164.setTransform(186.6,-71.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgEgDQgDgDgIAAQgGAAgEACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIABAKIAAANIAAASQABAEABAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgJAAgGgEgAgBAEQgHAAgDACQgDABgBADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_165.setTransform(182,-70.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_166.setTransform(177,-71.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_167.setTransform(172,-70.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_168.setTransform(165.3,-70.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_169.setTransform(159.2,-70.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_170.setTransform(149.3,-71.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_171.setTransform(143.2,-70.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_172.setTransform(138.7,-71.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_173.setTransform(134,-71.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKgkIgDgLIgMAvIgKAAIgTg9IALAAIAJAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_174.setTransform(126.4,-70.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGAEQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgCACgDQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_175.setTransform(114.8,-71.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_176.setTransform(106.4,-71.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_177.setTransform(98.7,-70.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_178.setTransform(88.7,-70.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_179.setTransform(83.8,-71.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_180.setTransform(243.6,-87);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_181.setTransform(240.4,-86.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_182.setTransform(234.6,-86);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAJAAAGAEQAGAEADAIQADAHAAAJQAAAKgDAGQgEAIgHAEQgGAEgHAAQgFAAgDgCQgFgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgFgGgGAAQgGAAgFAHg");
	this.shape_183.setTransform(228.1,-84.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_184.setTransform(221.3,-86);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_185.setTransform(216.4,-86.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_186.setTransform(209,-87);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_187.setTransform(203.9,-86.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_188.setTransform(197.3,-86);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgCgCgFAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQAEgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_189.setTransform(189,-86.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_190.setTransform(180.6,-86);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_191.setTransform(175.8,-86.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_192.setTransform(169.9,-85.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEADAGABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_193.setTransform(163.6,-86);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgEgBgIQAAgFACgDQACgEAEgDIAIgCIAJgCQALgBAHgDIAAgCQAAgGgDgDQgFgEgHAAQgGAAgFADQgDADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgCgHQgFAEgFACQgFACgHABQgJgBgGgFgAgBAEQgHABgDABQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgQAEg");
	this.shape_194.setTransform(157.3,-86);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_195.setTransform(150.7,-86);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_196.setTransform(142.4,-86.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQABAGADADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgFg");
	this.shape_197.setTransform(131,-86);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_198.setTransform(124.5,-87.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_199.setTransform(118,-86.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_200.setTransform(111.4,-86);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIAKgBQACAGADADQAFADAFABQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAQAFQAEABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_201.setTransform(105,-86);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAbIAvAAIAAAIIgvAAIAAAeIA0AAIAAAKg");
	this.shape_202.setTransform(94.9,-87.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_203.setTransform(86.4,-87.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E6FFFF").s().p("AuSMHIAA4NIclAAIAAYNg");
	this.shape_204.setTransform(169.6,-24.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_205.setTransform(0.6,13);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_206.setTransform(-5.4,11.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_207.setTransform(-11.2,11.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_208.setTransform(-17.9,11.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_209.setTransform(-24.7,13);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_210.setTransform(-32.9,11.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_211.setTransform(-39.1,13);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_212.setTransform(-45.6,13);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_213.setTransform(-50.3,11.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_214.setTransform(-55.4,11.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_215.setTransform(37.1,-2.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_216.setTransform(30.4,-2.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_217.setTransform(25.8,-3.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_218.setTransform(22.8,-3.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_219.setTransform(17.8,-2.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_220.setTransform(9.5,-2.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_221.setTransform(2.9,-2.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_222.setTransform(-2.9,-2.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_223.setTransform(-7.6,-3.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_224.setTransform(-12.9,-2.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_225.setTransform(-17.9,-3.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_226.setTransform(-24.4,-2.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_227.setTransform(-30.2,-2.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_228.setTransform(-35.2,-3.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_229.setTransform(-39.9,-2.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_230.setTransform(-46.2,-2.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_231.setTransform(-54.5,-3.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_232.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_204},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.rrc_con_reconfig_ho_command = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape.setTransform(24.8,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAdQgHgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAHgEQAIgFAIAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgHAAgJgDgAgKgOQgEAGgBAIQABAJAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_1.setTransform(17.5,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_2.setTransform(12.1,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFACgFQADgDAFgBQAEgDAIgCQALgBAEgCIAAgCQAAgFgCgCQgCgCgFAAQgFAAgDACQgCACgBAEIgPgDQACgJAGgEQAHgFALAAQALABAFACQAFADADADQACAEAAAMIAAASIABALIACAJIgQAAIgCgFIgBgCQgEAEgFACQgDACgGAAQgJABgGgGgAAAADQgHACgBABQgEADAAADQAAAEADADQADACAEAAQADAAAEgDQADgDABgDIAAgIIAAgDIgJACg");
	this.shape_3.setTransform(7.2,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCADAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_4.setTransform(2,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_5.setTransform(-4.5,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACAEAAQAHgBADgCQACgBABgCIABgIIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgLQAAgQAHgJQAIgIALAAQAKAAAIAKIAAgIIAPAAIAAA2QAAALgBAGQgCAFgEADQgDADgFADQgGABgIABQgPgBgHgFgAgJgbQgDAFAAAKQAAAJADAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgKgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_6.setTransform(-12,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_7.setTransform(-17.2,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIACgEQACgEAEgCQADgDAHAAQAHAAAHACIgCAMIgIgBQgDAAgCACQgBABAAAFIAAAFIAMAAIAAAMIgMAAIAAAxg");
	this.shape_8.setTransform(-20.6,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_9.setTransform(-26.6,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgQAdQgHgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAHgEQAIgFAIAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgHAAgJgDgAgKgOQgEAGgBAIQABAJAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_10.setTransform(-33.9,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALAAAHAGQAHAEADAKIgRADQAAgFgDgCQgDgCgFAAQgFAAgEADQgDAFAAAKQAAAKADAEQAEAFAFAAQAFAAADgCQADgEABgGIAQADQgCALgHAGQgHAFgMAAQgNABgIgJg");
	this.shape_11.setTransform(-40.8,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_12.setTransform(-47.6,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAFgLACQAGADADAFQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgCACgDQACgCgBgEQAAgEgBgCQgDgEgEAAIgMgBIgOAAg");
	this.shape_13.setTransform(-54.8,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_14.setTransform(32.1,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgQAcQgHgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAHgEQAIgDAIAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgHAAgJgFgAgKgNQgFAEAAAJQAAAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_15.setTransform(24.8,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_16.setTransform(19.4,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_17.setTransform(15.8,-3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAFQgDAEAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_18.setTransform(10.5,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_19.setTransform(3.8,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_20.setTransform(-3.2,-2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_21.setTransform(-10.6,-2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAIgEQAGgDAJAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgIAAgHgFgAgKgNQgEAEAAAJQAAAJAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgJQAAgJgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_22.setTransform(-17.9,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgaAhQgLgMAAgUQAAgVAMgMQALgMARAAQAQAAAJAKQAHAGACAKIgRAEQgBgHgFgEQgFgDgHAAQgJAAgFAGQgHAHAAAPQAAAQAHAGQAGAIAHgBQAHABAGgFQAEgEACgKIARAGQgDAOgJAGQgKAIgNAAQgQAAgMgMg");
	this.shape_23.setTransform(-25.9,-3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgZAhQgLgMAAgUQAAgVALgMQALgMARAAQAPAAAKAKQAGAGADAKIgRAEQgCgHgEgEQgFgDgHAAQgIAAgHAGQgFAHAAAPQAAAQAFAGQAGAIAIgBQAIABAEgFQAGgEABgKIARAGQgEAOgIAGQgJAIgOAAQgRAAgKgMg");
	this.shape_24.setTransform(-37.9,-3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQAEAHgBAHQABAKgGAGQgGAGgLABQAGADADAEQAEAEAGAKIAKARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgCgDQgCgDgEAAIgMAAIgOAAg");
	this.shape_25.setTransform(-46.1,-3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQADAHAAAHQAAAKgFAGQgGAGgLABQAGADADAEQAEAEAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgBgDQgDgDgEAAIgMAAIgOAAg");
	this.shape_26.setTransform(-54.8,-3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_27.setTransform(168.2,89.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_28.setTransform(159.7,90);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_29.setTransform(148.7,91.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_30.setTransform(143.7,90.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_31.setTransform(137,90.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_32.setTransform(134,89.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIALgBQABAGADAEQAEACAGAAQAIAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQACAEACAGIgLABQgBgEgDgEQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJACIAPAFQAFABADADQACAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_33.setTransform(126.3,91.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_34.setTransform(119.8,90);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_35.setTransform(113.3,91);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_36.setTransform(106.7,91.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQABAGAFAEQADACAGAAQAIAAADgCQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgBgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFACADAEQACAEACAGIgLABQAAgEgEgEQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADADIAJACIAQAFQAEABADADQACAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgGgEg");
	this.shape_37.setTransform(100.3,91.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_38.setTransform(90.5,90);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_39.setTransform(84,91);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEABgEQADgEADgCIAHgDIAKgBQALgBAHgCIAAgDQgBgGgDgEQgEgDgHAAQgHAAgDACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAGgGABQgEACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg");
	this.shape_40.setTransform(77.4,91.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_41.setTransform(229.9,75.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_42.setTransform(223.2,75.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_43.setTransform(218.6,74.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_44.setTransform(215.6,74.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFABgDQADgEADgDIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFADQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADAAADQAAADADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_45.setTransform(210.6,75.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKIgDgEQgDgCgDAAQgHAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgDADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_46.setTransform(202.3,75.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_47.setTransform(195.7,75.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_48.setTransform(189.9,75.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_49.setTransform(185.2,74.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_50.setTransform(179.9,75.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_51.setTransform(174.9,74.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_52.setTransform(171.9,74.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_53.setTransform(167.3,75.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_54.setTransform(162.4,75.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_55.setTransform(158.3,74.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_56.setTransform(153.3,75.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_57.setTransform(146.6,75.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAJgFQAKgFALAAQANAAAIAGQAJAHAEAMIgMADQgCgKgHgFQgFgDgIgBQgJABgHAEQgHAFgCAIQgDAIAAAIQAAAKADAJQADAHAHAEQAGAFAIAAQAJAAAGgGQAHgFACgLIAMADQgEAOgJAHQgJAIgNAAQgOgBgIgFg");
	this.shape_58.setTransform(139.1,74.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgXg9IALAAIANAkIAEANIADgNIAOgkIALAAIgYA+IgFAOQgDAGgEACQgDADgFAAIgHgCg");
	this.shape_59.setTransform(131.7,77);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_60.setTransform(127,74.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_61.setTransform(124,74.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_62.setTransform(121.3,74.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_63.setTransform(118.7,74.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIALAAIAAAfQAGgIAJAAQAGAAAGACQAFACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgMgGQgEAGgBALQABALADAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgHAAgFAGg");
	this.shape_64.setTransform(114.2,74.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_65.setTransform(107.4,75.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgCgKIgDgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgFAAgEADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_66.setTransform(99.1,75.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_67.setTransform(87.4,75.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgDgGAAQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_68.setTransform(80.7,74.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_69.setTransform(75.8,74.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_70.setTransform(225.6,61.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_71.setTransform(219.2,60.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_72.setTransform(214.5,59.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgGAAgEAGg");
	this.shape_73.setTransform(209.7,59.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_74.setTransform(203.2,60.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_75.setTransform(198.5,59.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_76.setTransform(194.4,60.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_77.setTransform(187.9,60.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_78.setTransform(183.3,59.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAPgGAQQgGAOgIAMg");
	this.shape_79.setTransform(173.4,60.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_80.setTransform(167.9,60.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_81.setTransform(161.1,61.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgDgEQgFgDgHAAQgGAAgFACQgDADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFABADIgLAAIgCgIQgFAGgFACQgFABgHAAQgJAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAFAEACQADADAGAAQAFAAAFgDQAFgCACgFQABgEABgGIAAgEIgRAEg");
	this.shape_82.setTransform(154.6,60.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIADIAQAEQAEABACAEQADAEAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgMAAgFgEg");
	this.shape_83.setTransform(148.3,60.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQACAGAEAEQAEACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQADAEABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADADIAJADIAQAEQAEABADAEQACAEAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_84.setTransform(142.3,60.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_85.setTransform(136,60.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_86.setTransform(127.7,60.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQACAGADAEQAFACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQADAEABAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJADIAQAEQAEABADAEQACAEAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_87.setTransform(116.3,60.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_88.setTransform(109.9,60.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_89.setTransform(103.3,60.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_90.setTransform(98.7,59.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IALAAIANAkIADANIAEgNIAOgkIAKAAIgXA9g");
	this.shape_91.setTransform(94.4,60.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_92.setTransform(88,60.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_93.setTransform(83.2,60.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_94.setTransform(77.6,61.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_95.setTransform(219.7,45);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_96.setTransform(215,43.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAiIAAAIIgKAAIAAhVIALAAIAAAfQAGgIAKAAQAFAAAFACQAFACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgGgKgAgMgGQgEAGAAALQAAALACAFQAFAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgGAAgGAGg");
	this.shape_97.setTransform(207.2,43.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_98.setTransform(200.4,45);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_99.setTransform(193.7,45.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEABIAFgBIABAJIgIABQgFAAgDgBg");
	this.shape_100.setTransform(185.4,44);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_101.setTransform(180.4,45.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADACQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgNQAAgJADgHQADgIAGgDQAGgEAIgBQALABAHAIIAAgHIAJAAIAAA1QAAAOgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHABQAHgBAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_102.setTransform(173.5,46.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_103.setTransform(168.9,45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQABgFABgDQACgFAEgCIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgBgHQgHAEgEACQgFADgHAAQgJgBgGgFgAgBAEQgHAAgDACQgDABgBACQgBACgBAEQABADADADQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgQAEg");
	this.shape_104.setTransform(163.1,45.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_105.setTransform(157.5,43.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_106.setTransform(145.7,45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_107.setTransform(137.3,45.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_108.setTransform(132.5,45);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_109.setTransform(128.6,43.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_110.setTransform(119.8,43.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_111.setTransform(113.3,45.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IALAAIAOAkIADAMIAEgLIAOglIALAAIgYA9g");
	this.shape_112.setTransform(107,45.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_113.setTransform(100.7,45.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_114.setTransform(96,43.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAGQgHAFgKABQgMAAgHgJg");
	this.shape_115.setTransform(91.9,45.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_116.setTransform(85.4,45.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_117.setTransform(80.5,45);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AAHA4QgIgLgGgPQgGgPAAgPQAAgNAEgNQAFgPALgOIAHAAIgJARQgEAIgBAJQgDALABAKQAAAcAQAcg");
	this.shape_118.setTransform(76.2,45.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_119.setTransform(239.1,29.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgDABgEIABgOQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_120.setTransform(232.3,30.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQADgEADgCIAIgDIAJgBQAMgCAFgBIAAgDQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFABgGAAQgKAAgGgEgAgCAEQgGAAgDACQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_121.setTransform(225.8,29.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADAEAAAFQAAAFgDAFQgDAEgGADQgGADgHgBQgLAAgGgEg");
	this.shape_122.setTransform(219.5,29.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIAKgCQACAGADAEQAFACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQADAEABAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACAEAAAFQAAAFgDAFQgDAEgGADQgGADgHgBQgLAAgHgEg");
	this.shape_123.setTransform(213.5,29.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_124.setTransform(207.2,29.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgCgCgFAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQAEgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_125.setTransform(198.9,29.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_126.setTransform(186.2,28.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgJgGgGgJQgEgKAAgMQAAgUALgMQAMgMARgBQAMAAAKAHQAJAFAFAKQAFALAAALQAAANgGALQgFAKgJAFQgKAFgLAAQgMABgJgHgAgUgaQgJAJAAASQAAAQAJAJQAIAIAMABQANAAAIgKQAIgJAAgQQAAgKgEgHQgDgIgHgEQgGgFgJAAQgLABgJAHg");
	this.shape_127.setTransform(177.2,28.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_128.setTransform(170.8,28.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_129.setTransform(165.5,28.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AAcArIgLgaIgiAAIgKAaIgMAAIAhhVIALAAIAjBVgAgFgRIgKAZIAcAAIgIgXIgFgSQgCAJgDAHg");
	this.shape_130.setTransform(158.7,28.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgGIgFgCIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAFAAAHQAAAKgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgEAAgFQAAgFgEgEQgFgEgJgBIgaAAg");
	this.shape_131.setTransform(150.8,28.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_132.setTransform(141.7,28.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgFgGgKQgFgLAAgNQAAgLAFgLQAGgLAJgFQAKgFAMgBQAJAAAIAEQAIADAEAFQAEAFACAJIgKADQgCgGgDgFQgDgDgFgCQgFgDgHAAQgHAAgFADQgGACgDAEQgEAEgCAEQgDAJAAAIQAAALAEAIQAEAHAHAFQAIADAHAAQAIAAAHgCQAHgEADgDIAAgQIgZAAIAAgJIAlAAIAAAfQgJAHgJADQgJADgJAAQgMAAgKgFg");
	this.shape_133.setTransform(132.7,28.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_134.setTransform(126.4,28.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAnAAIAAAJIgnAAIAAAng");
	this.shape_135.setTransform(121.3,28.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_136.setTransform(113,28.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgKgGgEgJQgFgKAAgMQAAgUALgMQAMgMARgBQAMAAAJAHQAKAFAFAKQAFALAAALQAAANgFALQgFAKgKAFQgKAFgLAAQgMABgJgHgAgUgaQgIAJgBASQAAAQAJAJQAIAIAMABQANAAAIgKQAIgJAAgQQAAgKgEgHQgDgIgHgEQgGgFgJAAQgLABgJAHg");
	this.shape_137.setTransform(104.1,28.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgKQgEgLAAgMQAAgNAFgKQAFgKAJgFQAKgFAKgBQAOABAIAGQAJAHADALIgKADQgEgJgFgEQgGgFgJAAQgIAAgHAFQgHAFgCAIQgEAIAAAIQABALADAHQADAIAHAFQAHADAGABQAKgBAGgFQAHgGACgKIAMADQgDAOgKAHQgJAHgOAAQgNAAgIgFg");
	this.shape_138.setTransform(95.1,28.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAaIAvAAIAAAKIgvAAIAAAdIA0AAIAAAKg");
	this.shape_139.setTransform(86.9,28.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgGIgFgCIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAFAAAHQAAAKgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgEAAgFQAAgFgEgEQgFgEgJgBIgaAAg");
	this.shape_140.setTransform(78.8,28.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_141.setTransform(176.3,13.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgKgHgEgKQgFgKAAgLQAAgUAMgNQALgLARAAQAMAAAJAFQAKAGAFAKQAFAKAAAMQAAANgFAKQgFALgLAFQgJAGgLAAQgLgBgKgFgAgTgZQgJAIAAATQgBAPAJAJQAIAJAMgBQAMAAAJgJQAIgIAAgRQAAgJgDgIQgEgIgGgFQgIgDgIAAQgLgBgIAJg");
	this.shape_142.setTransform(167.4,13.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_143.setTransform(161,13.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_144.setTransform(155.7,13.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgLAAgLQAAgNAFgKQAFgKAKgFQAJgGALABQAMgBAJAHQAJAHAEALIgMAEQgCgKgHgFQgFgDgIAAQgKgBgGAFQgHAFgDAIQgCAIAAAIQgBAKAEAJQADAHAHAEQAGAEAIAAQAJABAHgGQAGgGADgKIALADQgDAOgKAHQgJAIgNAAQgNAAgJgGg");
	this.shape_145.setTransform(147.7,13.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_146.setTransform(139.5,13.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_147.setTransform(131,13.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_148.setTransform(122.3,13.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgKgHgEgKQgFgKAAgLQAAgUAMgNQALgLARAAQAMAAAJAFQAKAGAFAKQAFAKAAAMQAAANgFAKQgFALgLAFQgJAGgLAAQgLgBgKgFgAgTgZQgJAIAAATQgBAPAJAJQAIAJAMgBQAMAAAJgJQAIgIAAgRQAAgJgDgIQgEgIgGgFQgIgDgIAAQgLgBgIAJg");
	this.shape_149.setTransform(113.4,13.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgLAAgLQAAgNAFgKQAFgKAJgFQAKgGALABQANgBAIAHQAJAHAEALIgMAEQgCgKgHgFQgFgDgIAAQgJgBgHAFQgHAFgCAIQgDAIAAAIQAAAKADAJQADAHAHAEQAGAEAIAAQAJABAGgGQAHgGACgKIAMADQgEAOgJAHQgJAIgNAAQgOAAgIgGg");
	this.shape_150.setTransform(104.4,13.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgLAAgLQAAgNAFgKQAFgKAJgFQAKgGALABQANgBAIAHQAJAHADALIgLAEQgCgKgHgFQgFgDgIAAQgJgBgHAFQgHAFgCAIQgDAIgBAIQAAAKAEAJQADAHAHAEQAHAEAHAAQAJABAGgGQAHgGACgKIAMADQgEAOgJAHQgJAIgNAAQgOAAgIgGg");
	this.shape_151.setTransform(95.8,13.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgGIgFgCIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAHQAAAJgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgDAAgFQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_152.setTransform(87.4,13.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgGIgFgCIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAHQAAAJgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgDAAgFQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_153.setTransform(78.8,13.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_154.setTransform(235.9,-1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_155.setTransform(229.3,-2.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_156.setTransform(224.3,-2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgKIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAFADADADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgMAAgFgGg");
	this.shape_157.setTransform(216.2,-1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_158.setTransform(209.9,-1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_159.setTransform(205,-2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEAAgJQABgEACgEQACgDADgDIAHgDIAKgBQAMgBAFgDIAAgCQAAgHgCgDQgEgDgIAAQgGAAgFACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABATQABADACAEIgLAAIgDgHQgGAEgFADQgEABgGABQgLAAgFgGgAgCAEQgGAAgDACQgDABgBACQgBADAAACQgBAFAEADQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_160.setTransform(199.9,-1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_161.setTransform(195.1,-1.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_162.setTransform(189.3,-1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_163.setTransform(182.6,-1.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_164.setTransform(176,-1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_165.setTransform(169.1,0.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_166.setTransform(158.8,-2.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_167.setTransform(150.3,-2.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_168.setTransform(142.7,-1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_169.setTransform(132.7,-1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMgBgHgIg");
	this.shape_170.setTransform(126.5,-1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_171.setTransform(121.8,-1.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_172.setTransform(116,-0.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIABQgMgBgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_173.setTransform(109.4,-1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgEgFgGQgEgHAAgIIAKgBQABAGADAEQADAEAGADQAFACAHABQAGAAAFgCQAFgCADgEQACgDAAgFQAAgDgCgEQgDgDgFgBIgOgFQgMgCgFgCQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgGAHgDQAHgDAJAAQAJAAAHADQAHAEAEAGQAEAFAAAIIgKABQgBgIgFgEQgFgEgKgBQgKAAgEAFQgFADAAAGQAAAEADADQAEADAMADQAOADAFADQAIACADAGQAEAFAAAGQAAAIgEAGQgEAGgHADQgIADgJABQgKgBgIgDg");
	this.shape_174.setTransform(102,-2.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_175.setTransform(91.4,-1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_176.setTransform(84.7,-2.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_177.setTransform(77.8,-2.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E6FFFF").s().p("AuSJiIAAzDIclAAIAATDg");
	this.shape_178.setTransform(161.6,43.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_179.setTransform(0.6,13);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_180.setTransform(-5.4,11.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_181.setTransform(-11.2,11.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_182.setTransform(-17.9,11.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_183.setTransform(-24.7,13);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_184.setTransform(-32.9,11.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_185.setTransform(-39.1,13);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_186.setTransform(-45.6,13);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_187.setTransform(-50.3,11.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_188.setTransform(-55.4,11.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_189.setTransform(37.1,-2.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_190.setTransform(30.4,-2.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_191.setTransform(25.8,-3.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_192.setTransform(22.8,-3.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_193.setTransform(17.8,-2.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_194.setTransform(9.5,-2.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_195.setTransform(2.9,-2.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_196.setTransform(-2.9,-2.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_197.setTransform(-7.6,-3.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_198.setTransform(-12.9,-2.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_199.setTransform(-17.9,-3.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_200.setTransform(-24.4,-2.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_201.setTransform(-30.2,-2.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_202.setTransform(-35.2,-3.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_203.setTransform(-39.9,-2.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_204.setTransform(-46.2,-2.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_205.setTransform(-54.5,-3.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_206.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_178},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.rrc_con_reconfig_com = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKgBQgPABgIgLgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape.setTransform(-18.7,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_1.setTransform(-24,21.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKgBQgPABgIgLgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_2.setTransform(-29.3,22.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_3.setTransform(-34.3,21.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeArIAAhUIAQAAIAAAJQADgFAFgDQAFgCAFAAQALAAAIAIQAHAJAAAOQABAPgJAJQgHAIgLAAQgEAAgEgBQgFgDgEgEIAAAegAgJgZQgEAFAAAJQAAALAEAEQAEAEAFABQAGAAAEgFQADgEAAgLQAAgJgDgFQgEgEgGgBQgFABgEAEg");
	this.shape_4.setTransform(-39.5,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAdAgIAAgjQAAgJgCgDQgCgDgFAAQgDAAgDACQgDACgBAEQgCAEAAAIIAAAeIgPAAIAAghIgBgMIgDgEQgCgBgDAAQgEAAgDACQgDACgBAEIgBAMIAAAeIgRAAIAAg9IAPAAIAAAIQAIgKAMAAQAGAAAEADQADACADAFQAEgFAFgCQAFgDAFAAQAHAAAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_5.setTransform(-48.7,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgQAdQgHgFgEgHQgEgHAAgKQAAgIAEgIQAEgHAHgFQAIgDAIAAQAOgBAJAKQAJAIAAAOQAAAOgJAJQgJAKgOgBQgHAAgJgDgAgKgNQgEAEgBAJQABAJAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_6.setTransform(-57.6,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgZAhQgMgMAAgUQAAgVAMgMQALgLARgBQAPAAALAKQAFAGAEAKIgSAEQgCgHgEgEQgFgDgHAAQgIgBgHAIQgFAGgBAPQABAQAFAHQAGAGAJAAQAHABAEgFQAFgEADgKIARAGQgFAOgJAGQgIAIgOgBQgRAAgKgLg");
	this.shape_7.setTransform(-65.7,21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_8.setTransform(18.4,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgQAcQgHgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAHgDQAIgFAIAAQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOAAQgIgBgIgEgAgKgOQgFAGABAIQgBAJAFAFQAEAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgGQgEgEgHAAQgGAAgEAEg");
	this.shape_9.setTransform(11.1,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_10.setTransform(5.7,5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_11.setTransform(2,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFADgFQACgEAFAAQAEgDAIgCQALgCAFgBIAAgCQgBgFgCgCQgCgCgFAAQgFAAgCACQgDACgCAEIgOgDQACgJAGgEQAHgFALAAQALAAAFADQAFACACAEQADAFAAAKIAAASIABAMIACAJIgQAAIgCgFIgBgCQgEAEgFACQgDACgFABQgKAAgGgGgAAAADQgHACgBACQgEACAAADQAAAEADADQACACAEAAQAEAAAEgDQADgCABgEIABgIIAAgDIgKACg");
	this.shape_12.setTransform(-3.3,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCADAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_13.setTransform(-8.5,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_14.setTransform(-15,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATACQAAABAAABQAAABAAAAQABABAAAAQAAABABAAQACABAEABQAHAAADgCQACgCABgDIABgHIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgLQAAgQAHgJQAIgHALgBQAKABAIAJIAAgIIAPAAIAAA3QAAAKgBAGQgCAFgEADQgDAEgFABQgGACgIAAQgPABgHgGgAgJgbQgDAFAAAKQAAAKADADQAEAEAFABQAGgBAEgEQAEgDAAgKQAAgJgEgGQgEgEgGAAQgFAAgEAEg");
	this.shape_15.setTransform(-22.5,7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_16.setTransform(-27.7,5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIACgEQACgEAEgCQADgDAHAAQAHAAAHACIgCAMIgIgBQgEAAgBACQgCABAAAFIAAAFIANAAIAAAMIgNAAIAAAxg");
	this.shape_17.setTransform(-31.1,5.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_18.setTransform(-37,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgPAcQgIgDgEgIQgEgHAAgKQAAgIAEgIQAEgIAIgDQAHgFAIAAQAOABAJAIQAJAKAAANQAAAOgJAJQgJAKgOAAQgIgBgHgEgAgKgOQgEAGgBAIQABAJAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgJQAAgIgEgGQgEgEgHAAQgGAAgEAEg");
	this.shape_19.setTransform(-44.3,6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALABAHAFQAHAEADAKIgRADQAAgFgDgCQgDgDgFABQgFAAgEADQgDAFAAAKQAAAKADAFQAEAEAFAAQAFAAADgCQADgDABgHIAQADQgCALgHAGQgHAFgMABQgNAAgIgJg");
	this.shape_20.setTransform(-51.3,6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAFgKABQgPAAgIgLgAgIgPQgDAEAAAGIAXAAQAAgHgDgEQgEgDgFAAQgEAAgEAEg");
	this.shape_21.setTransform(-58,6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQADAGAAAIQAAAKgFAGQgGAFgLACQAFAEAEAEQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgBACgEQABgCAAgDQAAgFgBgCQgDgDgEgBIgMgBIgOAAg");
	this.shape_22.setTransform(-65.2,5.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_23.setTransform(21.7,-9.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgQAdQgHgFgEgHQgEgIAAgJQAAgIAEgIQAEgHAHgFQAIgDAIAAQAOgBAJAKQAJAJAAANQAAAOgJAJQgJAJgOAAQgHAAgJgDgAgKgNQgEAEgBAJQABAJAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_24.setTransform(14.4,-9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_25.setTransform(9,-10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_26.setTransform(5.3,-10);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgIANAAQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgDgFAAQgFAAgEAFQgDAEAAAKQAAAKADAEQAEAFAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMgBQgNAAgIgIg");
	this.shape_27.setTransform(0.1,-9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgIAMAAQANgBAIAKQAIAJAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_28.setTransform(-6.7,-9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_29.setTransform(-13.7,-9.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_30.setTransform(-21,-9.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgPAdQgIgFgEgHQgEgIAAgJQAAgIAEgIQAEgHAIgFQAGgDAJAAQAOgBAJAKQAJAJAAANQAAAOgJAJQgJAJgOAAQgIAAgHgDgAgKgNQgFAEABAJQgBAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_31.setTransform(-28.3,-9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgaAhQgLgMABgUQAAgVALgLQALgMARgBQAPAAAKAKQAHAFACALIgRAEQgCgHgEgEQgFgDgHAAQgJgBgFAIQgHAGABAPQgBAQAHAHQAGAGAHAAQAHABAGgFQAEgEACgKIARAGQgEAOgIAGQgKAIgNgBQgRAAgLgLg");
	this.shape_32.setTransform(-36.4,-10.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgZAhQgLgMAAgUQgBgVAMgLQALgMARgBQAPAAALAKQAFAFAEALIgSAEQgCgHgEgEQgFgDgHAAQgIgBgHAIQgFAGAAAPQAAAQAFAHQAHAGAIAAQAGABAFgFQAGgEABgKIASAGQgEAOgKAGQgIAIgOgBQgQAAgLgLg");
	this.shape_33.setTransform(-48.4,-10.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAGgLABQAGADADAFQAEADAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgBgDQgDgCgEgBIgMgBIgOAAg");
	this.shape_34.setTransform(-56.6,-10.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAGgLABQAFADAEAFQAEADAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQABgDAAgEQAAgEgBgDQgDgCgEgBIgMgBIgOAAg");
	this.shape_35.setTransform(-65.2,-10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_36.setTransform(328.6,40.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_37.setTransform(322.8,40.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IAMAAIANAkIADANIAEgNIAOgkIALAAIgYA9g");
	this.shape_38.setTransform(316.5,40.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_39.setTransform(310.1,40.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgGAAgEAGg");
	this.shape_40.setTransform(303.3,39.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_41.setTransform(296.8,40.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQADgEADgCIAIgDIAJgBQAMgBAGgCIAAgDQgBgGgCgEQgFgDgHAAQgHAAgEACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAGgFABQgFACgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDABgIIAAgDIgRAEg");
	this.shape_42.setTransform(290.2,40.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_43.setTransform(283.5,39.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_44.setTransform(273.5,40.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_45.setTransform(266.9,39.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_46.setTransform(261.9,39.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_47.setTransform(251.9,40.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_48.setTransform(245.3,40.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_49.setTransform(241.5,39.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_50.setTransform(238.8,39);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_51.setTransform(233.5,40.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_52.setTransform(226.9,40.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgGgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_53.setTransform(220.7,40.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_54.setTransform(210.9,40.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_55.setTransform(205.9,39.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAbIAvAAIAAAJIgvAAIAAAdIA0AAIAAAKg");
	this.shape_56.setTransform(197,39.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgFgGgLQgFgKAAgNQAAgLAFgLQAGgLAJgFQAKgGAMAAQAJABAIADQAIADAEAFQAEAGACAIIgKADQgCgGgDgFQgDgDgFgCQgFgCgHAAQgHAAgFACQgGACgDAEQgEAEgCAEQgDAIAAAJQAAALAEAIQAEAHAHAFQAIADAHAAQAIAAAHgCQAHgEADgDIAAgQIgZAAIAAgJIAlAAIAAAfQgJAHgJADQgJAEgJgBQgMABgKgGg");
	this.shape_57.setTransform(188.1,39.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AAcArIgLgaIgiAAIgKAaIgMAAIAhhVIALAAIAjBVgAgFgRIgKAYIAcAAIgIgWIgFgSQgCAJgDAHg");
	this.shape_58.setTransform(179.5,39.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKAAQABAGADAEQADAEAGADQAFADAHgBQAGAAAFgCQAFgCADgDQACgDAAgEQAAgFgCgCQgDgDgFgDIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgFAHgDQAHgDAJgBQAJABAHADQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKABQgKAAgEAEQgFADAAAFQAAAFADADQAEADAMAEQAOACAFADQAIACADAFQAEAGAAAGQAAAHgEAHQgEAFgHAEQgIAEgJgBQgKABgIgEg");
	this.shape_59.setTransform(171.5,39.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKAAQABAGADAEQADAEAGADQAFADAHgBQAGAAAFgCQAFgCADgDQACgDAAgEQAAgFgCgCQgDgDgFgDIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgFAHgDQAHgDAJgBQAJABAHADQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKABQgKAAgEAEQgFADAAAFQAAAFADADQAEADAMAEQAOACAFADQAIACADAFQAEAGAAAGQAAAHgEAHQgEAFgHAEQgIAEgJgBQgKABgIgEg");
	this.shape_60.setTransform(163.5,39.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_61.setTransform(155.7,39.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAVA8IACANIAFgOIAUg7IAQAAIAABVg");
	this.shape_62.setTransform(146.5,39.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAaIAvAAIAAAJIgvAAIAAAeIA0AAIAAAKg");
	this.shape_63.setTransform(323.5,23.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_64.setTransform(315.7,23.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_65.setTransform(308.1,23.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgaArIAAhVIALAAIAABLIAqAAIAAAKg");
	this.shape_66.setTransform(300.9,23.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAFAAAHQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_67.setTransform(293.5,23.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADAMIAFgNIAUg7IAQAAIAABVg");
	this.shape_68.setTransform(284.3,23.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgJgFgGgLQgEgJAAgMQAAgUAMgNQALgMARABQAMgBAKAHQAJAFAFAKQAFALAAALQAAANgGAKQgEALgLAFQgJAFgLABQgLAAgKgHgAgTgZQgKAIABATQAAAPAIAJQAIAJAMAAQAMgBAJgIQAIgJAAgRQAAgJgEgIQgDgIgGgFQgIgDgIAAQgLgBgIAJg");
	this.shape_69.setTransform(274.7,23.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAKgFQAJgFAKAAQANAAAJAGQAJAHAEAMIgLACQgEgJgFgFQgGgDgJAAQgJAAgGAEQgHAFgDAIQgCAIAAAIQgBAKAEAJQADAHAHAEQAGAFAIAAQAJAAAHgGQAGgFADgLIALADQgDAOgKAHQgJAIgOAAQgMgBgJgFg");
	this.shape_70.setTransform(265.7,23.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_71.setTransform(253.6,23.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgKgFgEgLQgFgJAAgMQAAgUAMgNQALgMARABQAMgBAJAHQAKAFAFAKQAFALAAALQAAANgFAKQgGALgKAFQgJAFgLABQgLAAgKgHgAgTgZQgJAIAAATQgBAPAJAJQAIAJAMAAQAMgBAJgIQAIgJAAgRQAAgJgDgIQgEgIgGgFQgIgDgIAAQgLgBgIAJg");
	this.shape_72.setTransform(244.7,23.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_73.setTransform(238.3,23.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_74.setTransform(233,23.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAYIAcAAIgJgXIgGgSQgBAIgDAJg");
	this.shape_75.setTransform(226.2,23.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_76.setTransform(218.2,23.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_77.setTransform(209.2,23.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgGgGgKQgFgKAAgMQAAgMAFgLQAGgLAJgFQAKgFAMAAQAJAAAIACQAIADAEAGQAEAGACAIIgKADQgCgHgDgDQgDgEgFgDQgFgCgHABQgHAAgFACQgGACgDAEQgEAEgCAFQgDAHAAAJQAAALAEAIQAEAIAHADQAIAEAHAAQAIAAAHgDQAHgCADgDIAAgQIgZAAIAAgKIAlAAIAAAfQgJAGgJAEQgJADgJABQgMgBgKgFg");
	this.shape_78.setTransform(200.1,23.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_79.setTransform(193.8,23.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAoAAIAAAJIgoAAIAAAng");
	this.shape_80.setTransform(188.7,23.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_81.setTransform(180.5,23.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgKgFgFgLQgEgJAAgMQAAgUAMgNQALgMARABQAMgBAJAHQAKAFAFAKQAFALAAALQAAANgFAKQgFALgLAFQgJAFgLABQgLAAgKgHgAgTgZQgKAIABATQAAAPAIAJQAIAJAMAAQAMgBAJgIQAIgJAAgRQAAgJgDgIQgEgIgGgFQgIgDgIAAQgLgBgIAJg");
	this.shape_82.setTransform(171.5,23.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAKgFQAJgFALAAQAMAAAJAGQAJAHAEAMIgMACQgCgJgHgFQgFgDgIAAQgKAAgGAEQgHAFgDAIQgCAIAAAIQgBAKAEAJQADAHAHAEQAGAFAIAAQAJAAAHgGQAGgFADgLIALADQgDAOgKAHQgJAIgNAAQgNgBgJgFg");
	this.shape_83.setTransform(162.6,23.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_84.setTransform(154.3,23.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_85.setTransform(146.2,23.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_86.setTransform(217.8,8.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgKgGgFgKQgEgKAAgMQAAgUAMgMQALgNARAAQAMABAJAFQAKAGAFAKQAFALAAALQAAANgGALQgEAKgLAFQgJAGgLgBQgLAAgKgFgAgTgaQgKAJABASQAAAQAIAJQAIAIAMAAQAMABAJgKQAIgJAAgQQAAgKgDgHQgEgIgGgEQgIgEgIgBQgLABgIAHg");
	this.shape_87.setTransform(208.9,8.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_88.setTransform(202.5,8.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_89.setTransform(197.2,8.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgKQgEgMAAgLQAAgNAFgKQAFgKAKgFQAJgGAKAAQANAAAJAHQAJAHAEALIgLADQgEgJgFgEQgGgEgJgBQgJAAgGAFQgHAFgDAIQgCAIAAAIQgBALAEAHQADAIAHAFQAGADAIAAQAJAAAHgFQAGgFADgLIALADQgDAOgKAHQgJAHgOAAQgMABgJgGg");
	this.shape_90.setTransform(189.2,8.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_91.setTransform(181,8.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_92.setTransform(172.5,8.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_93.setTransform(163.8,8.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgKgGgFgKQgEgKAAgMQAAgUAMgMQALgNARAAQAMABAJAFQAKAGAFAKQAFALAAALQAAANgGALQgEAKgLAFQgJAGgLgBQgLAAgKgFgAgTgaQgKAJABASQAAAQAIAJQAIAIAMAAQAMABAJgKQAIgJAAgQQAAgKgDgHQgEgIgGgEQgIgEgIgBQgLABgIAHg");
	this.shape_94.setTransform(154.9,8.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgKQgFgMAAgLQAAgNAFgKQAFgKAKgFQAJgGALAAQAMAAAJAHQAJAHAEALIgMADQgCgJgHgEQgFgEgIgBQgKAAgGAFQgHAFgCAIQgDAIAAAIQgBALAEAHQADAIAHAFQAGADAIAAQAJAAAHgFQAGgFADgLIALADQgDAOgKAHQgJAHgNAAQgNABgJgGg");
	this.shape_95.setTransform(145.9,8.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgLAAgLQAAgNAFgKQAFgKAJgFQAKgGALABQANAAAIAGQAJAHADAMIgLADQgCgKgHgFQgFgDgIAAQgJAAgHAEQgHAFgCAIQgDAIgBAIQAAAKAEAJQADAHAHAEQAHAEAHABQAJAAAGgGQAHgGACgKIAMADQgEAOgJAHQgJAIgNAAQgOAAgIgGg");
	this.shape_96.setTransform(317.2,-7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_97.setTransform(308.8,-7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_98.setTransform(300.2,-7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_99.setTransform(288.8,-5.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAFQACAEAAAIIAAAog");
	this.shape_100.setTransform(282.1,-7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_101.setTransform(277.2,-6.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIAKgBQABAGAFADQADAEAHAAQAHAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgBgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIADACIAJADIAQAFQAEABADADQACAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgGgFg");
	this.shape_102.setTransform(269.1,-5.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgHAAgFAGg");
	this.shape_103.setTransform(262.6,-6.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_104.setTransform(256.1,-5.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_105.setTransform(249.5,-5.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQABAGADADQAFAEAGAAQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACADQADAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgFgFg");
	this.shape_106.setTransform(243.1,-5.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_107.setTransform(233,-7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_108.setTransform(224.5,-6.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_109.setTransform(213.5,-5.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAFQACAEAAAIIAAAog");
	this.shape_110.setTransform(206.8,-7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_111.setTransform(201.9,-6.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAKQADgBACgDQAAgDAAgFIgFAAIAAgLIALAAIAAALQAAAGgCAEQgCAFgEACg");
	this.shape_112.setTransform(195.1,-2.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_113.setTransform(192.1,-7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_114.setTransform(189.4,-7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_115.setTransform(184.8,-5.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAFQgHAGgKABQgMAAgHgJg");
	this.shape_116.setTransform(178.7,-5.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_117.setTransform(170.5,-6.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_118.setTransform(165.5,-5.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgDABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgNQAAgJADgHQADgIAGgDQAGgEAIgBQALABAHAIIAAgHIAJAAIAAA1QAAAOgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHABQAHgBAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_119.setTransform(158.6,-4.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_120.setTransform(154,-5.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQABgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgDABgBACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_121.setTransform(148.2,-5.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_122.setTransform(143.2,-6.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_123.setTransform(299.4,-21.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_124.setTransform(292.7,-22.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_125.setTransform(287.8,-22.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgGAKgLAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgIAAQgFAAgFAGg");
	this.shape_126.setTransform(279.2,-22.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_127.setTransform(272.7,-21.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAGAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgBgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQACAEACAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADACIAJAEIAQAEQAEABADAEQACAEAAAFQAAAFgDAEQgEAFgFADQgGADgHgBQgMAAgFgEg");
	this.shape_128.setTransform(266.4,-21.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIALgCQABAGADAEQAEACAGAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_129.setTransform(260.4,-21.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_130.setTransform(254.1,-21.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_131.setTransform(247.9,-21.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_132.setTransform(241.9,-21.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgEgDQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgKAAgFgEgAgBAEQgHAAgDACQgCABgCADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_133.setTransform(235.4,-21.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAGgBIADgDIADgIIABgDIgYg9IAMAAIANAkIADANIAFgNIANgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_134.setTransform(225.8,-19.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_135.setTransform(221.4,-22.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_136.setTransform(218.7,-22.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_137.setTransform(214.1,-21.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_138.setTransform(209.4,-22.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIALgCQAAAGAEAEQAFACAGAAQAHABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQADAEAAAGIgKABQAAgFgEgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFACIAIAEIAPAEQAFABACAEQADAEAAAFQAAAFgDAEQgEAFgFADQgGADgHgBQgMAAgFgEg");
	this.shape_139.setTransform(204.4,-21.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIAKgCQABAGAFAEQADACAGAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgBgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQACAEACAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIAEACIAIAEIAQAEQAEABADAEQACAEAAAFQAAAFgDAEQgEAFgFADQgGADgHgBQgMAAgGgEg");
	this.shape_140.setTransform(198.4,-21.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_141.setTransform(192.1,-21.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_142.setTransform(186,-21.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_143.setTransform(180,-21.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_144.setTransform(173.4,-21.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIAKgCQACAGAEAEQAEACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQADAEABAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgDACQgEADAAADIACAEIADACIAJAEIAQAEQAEABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_145.setTransform(167.1,-21.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIALgCQABAGADAEQAEACAGAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_146.setTransform(157.8,-21.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgHgDgDQgFgDgHAAQgGAAgEACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgBgIQgGAFgFADQgFABgHAAQgJAAgGgEgAgCAEQgGAAgDACQgDABgBADQgCACAAACQAAAEAEAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgRAEg");
	this.shape_147.setTransform(151.5,-21.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_148.setTransform(144.8,-22.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAbIAvAAIAAAIIgvAAIAAAeIA0AAIAAAKg");
	this.shape_149.setTransform(316.9,-37.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_150.setTransform(308.4,-37.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_151.setTransform(297.4,-36.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_152.setTransform(290.8,-37.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_153.setTransform(285.8,-37.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_154.setTransform(277.4,-36.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_155.setTransform(270.8,-36.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_156.setTransform(264.1,-37.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgShBIgDgKIgCAKIgSBBIgLAAIgXhVIALAAIANA3IAEASIAEgQIAQg5IANAAIAMArQAFAQACAOIAEgTIAOg2IALAAIgXBVg");
	this.shape_157.setTransform(255.1,-37.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_158.setTransform(247.8,-34);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAkIArAAIAAgkIAMAAIAABVg");
	this.shape_159.setTransform(241.8,-37.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgLAAgLQAAgNAFgKQAFgKAKgFQAJgGALABQAMgBAJAHQAJAHAEALIgMAEQgCgKgHgFQgFgDgIAAQgKgBgGAFQgHAFgDAIQgCAIAAAIQgBAKAEAJQADAHAHAEQAGAEAIAAQAJABAHgGQAGgGADgKIALADQgDAOgKAHQgJAIgNAAQgNAAgJgGg");
	this.shape_160.setTransform(233.2,-37.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAXIAcAAIgJgWIgGgSQgBAIgDAJg");
	this.shape_161.setTransform(224.8,-37.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgGIgFgCIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAHQAAAJgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgDAAgFQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_162.setTransform(216.9,-37.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_163.setTransform(205.5,-36.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_164.setTransform(198.8,-37.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_165.setTransform(193.9,-37.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAFADAFABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgDgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEIAEADIAJACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_166.setTransform(185.8,-36.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgCgKIgDgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgFAAgEADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_167.setTransform(177.8,-36.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_168.setTransform(171.3,-36.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_169.setTransform(165.5,-36.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_170.setTransform(160.7,-37.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_171.setTransform(157.3,-36.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_172.setTransform(151.5,-36.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAHAAAGAEQAHAEADAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgCQgFgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAHg");
	this.shape_173.setTransform(145,-35.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAaIAvAAIAAAJIgvAAIAAAeIA0AAIAAAKg");
	this.shape_174.setTransform(303.5,-53);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_175.setTransform(295,-53);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAKQADgCACgDQAAgCAAgFIgFAAIAAgMIALAAIAAAMQAAAGgCAEQgCAEgEACg");
	this.shape_176.setTransform(285.6,-48.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_177.setTransform(277.3,-51.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_178.setTransform(270.7,-51.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_179.setTransform(266,-53);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_180.setTransform(263.1,-52.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgEgBgJQAAgEACgEQACgDAEgDIAIgDIAJgBQALgBAHgDIAAgCQAAgHgEgDQgDgDgIAAQgGAAgEACQgEADgCAHIgKgBQACgHADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEABAEIgLAAIgBgIQgHAFgEADQgFABgHAAQgJABgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_181.setTransform(258,-51.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKIgDgEQgCgCgFAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQAEgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_182.setTransform(249.7,-51.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_183.setTransform(243.2,-51.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_184.setTransform(237.4,-51.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_185.setTransform(232.6,-53.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_186.setTransform(227.4,-51.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_187.setTransform(222.4,-53);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_188.setTransform(219.3,-53);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_189.setTransform(214.7,-51.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_190.setTransform(209.9,-51.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_191.setTransform(205.8,-52.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_192.setTransform(200.7,-51.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_193.setTransform(194.1,-51.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgKQgEgLAAgMQAAgNAFgKQAFgKAKgFQAJgFALgBQAMABAJAGQAJAHAEAMIgLACQgEgJgFgEQgGgFgIAAQgKABgGAEQgHAFgDAIQgCAIAAAIQgBALAEAHQADAJAHADQAGAFAIAAQAJgBAHgFQAGgGADgKIALADQgDAOgKAHQgJAHgNAAQgNAAgJgFg");
	this.shape_194.setTransform(186.5,-53);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAGgBIADgDIADgIIABgDIgXg9IALAAIANAkIADANIAFgNIANgkIAKAAIgXA+IgFAOQgDAGgEACQgDADgGAAIgGgCg");
	this.shape_195.setTransform(179.2,-50.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_196.setTransform(174.5,-52.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_197.setTransform(171.4,-53);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_198.setTransform(168.7,-53);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_199.setTransform(166.1,-53);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAiIAAAIIgKAAIAAhVIALAAIAAAfQAGgIAKAAQAFAAAGACQAEACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgGgKgAgMgGQgEAGAAALQAAALACAFQAFAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgGAAgGAGg");
	this.shape_200.setTransform(161.7,-53);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_201.setTransform(154.8,-51.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_202.setTransform(146.5,-51.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_203.setTransform(205.4,-67.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_204.setTransform(198.7,-68.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_205.setTransform(193.8,-68.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgDABgFIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgHAGgEQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_206.setTransform(185.2,-66);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_207.setTransform(178.7,-67.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_208.setTransform(174.1,-68.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_209.setTransform(169.2,-68.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_210.setTransform(162.7,-67.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_211.setTransform(158.1,-68.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_212.setTransform(154,-67.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_213.setTransform(147.5,-67.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_214.setTransform(142.8,-68.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_215.setTransform(306.6,-82.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKABQABAGADABQADADAHABQAHgBAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJABQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_216.setTransform(299.7,-81.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgEQACgDADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgDgDQgEgDgHAAQgHAAgDADQgEADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAADADAEIgLAAIgCgHQgGAFgGACQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgPAEg");
	this.shape_217.setTransform(293.3,-82.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIALgCQABAGADAEQAEADAGAAQAIgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEQAAAAAAABQAAAAABAAQAAABABAAQABAAAAAAIAJAEIAPAEQAFABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgHgGg");
	this.shape_218.setTransform(286.9,-82.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQAAAGAEAEQAFADAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIAIAEIAPAEQAFABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_219.setTransform(280.9,-82.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_220.setTransform(274.6,-82.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_221.setTransform(266.3,-82.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_222.setTransform(253.6,-83.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgKgFgEgLQgFgKAAgLQAAgUAMgNQALgMARAAQAMAAAJAHQAKAFAFAKQAFALAAALQAAANgFALQgGAKgKAFQgJAFgLABQgLAAgKgHgAgTgaQgJAJAAASQgBAQAJAJQAIAJAMAAQAMgBAJgIQAIgJAAgRQAAgJgDgIQgEgIgGgEQgIgFgIAAQgLAAgIAIg");
	this.shape_223.setTransform(244.7,-83.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_224.setTransform(238.3,-83.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_225.setTransform(233,-83.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgJAZIAcAAIgJgXIgGgSQgBAIgDAIg");
	this.shape_226.setTransform(226.2,-83.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgCIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAIQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_227.setTransform(218.2,-83.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_228.setTransform(209.2,-83.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgGgGgJQgFgLAAgNQAAgLAFgLQAGgLAJgFQAKgFAMgBQAJAAAIADQAIAEAEAFQAEAGACAIIgKADQgCgHgDgEQgDgDgFgDQgFgCgHAAQgHABgFACQgGACgDAEQgEAEgCAEQgDAJAAAIQAAALAEAIQAEAHAHAEQAIAEAHAAQAIAAAHgDQAHgDADgCIAAgRIgZAAIAAgJIAlAAIAAAfQgJAGgJAEQgJADgJABQgMgBgKgFg");
	this.shape_229.setTransform(200.1,-83.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_230.setTransform(193.8,-83.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.988)").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAoAAIAAAJIgoAAIAAAng");
	this.shape_231.setTransform(188.7,-83.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_232.setTransform(180.5,-83.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgKgFgFgLQgEgKAAgLQAAgUAMgNQALgMARAAQAMAAAJAHQAKAFAFAKQAFALAAALQAAANgFALQgFAKgLAFQgJAFgLABQgLAAgKgHgAgTgaQgKAJABASQAAAQAIAJQAIAJAMAAQAMgBAJgIQAIgJAAgRQAAgJgDgIQgEgIgGgEQgIgFgIAAQgLAAgIAIg");
	this.shape_233.setTransform(171.5,-83.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAKgFQAJgFALgBQAMABAJAGQAJAHAEAMIgMACQgCgJgHgEQgFgFgIAAQgKABgGAEQgHAFgDAIQgCAIAAAIQgBAKAEAIQADAJAHADQAGAFAIAAQAJgBAHgFQAGgGADgKIALADQgDAOgKAHQgJAHgNABQgNgBgJgFg");
	this.shape_234.setTransform(162.6,-83.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_235.setTransform(154.3,-83.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgCIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAIQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_236.setTransform(146.2,-83.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_237.setTransform(217.8,-99.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgKgHgFgJQgEgLAAgLQAAgUAMgMQALgNARAAQAMABAJAFQAKAGAFAKQAFAKAAAMQAAANgGAKQgEALgLAFQgJAGgLgBQgLAAgKgFgAgTgaQgKAJABATQAAAPAIAJQAIAIAMAAQAMABAJgKQAIgIAAgRQAAgKgDgHQgEgIgGgFQgIgDgIAAQgLAAgIAHg");
	this.shape_238.setTransform(208.9,-99.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_239.setTransform(202.5,-99.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_240.setTransform(197.2,-99.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgKQgEgMAAgLQAAgNAFgKQAFgKAKgFQAJgGAKAAQANAAAJAHQAJAHAEALIgLAEQgEgKgFgFQgGgDgJAAQgJgBgGAFQgHAFgDAIQgCAIAAAIQgBALAEAHQADAIAHAFQAGADAIAAQAJABAHgGQAGgFADgLIALADQgDAOgKAHQgJAIgOgBQgMABgJgGg");
	this.shape_241.setTransform(189.2,-99.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_242.setTransform(181,-99.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_243.setTransform(172.5,-99.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_244.setTransform(163.8,-99.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgKgHgFgJQgEgLAAgLQAAgUAMgMQALgNARAAQAMABAJAFQAKAGAFAKQAFAKAAAMQAAANgGAKQgEALgLAFQgJAGgLgBQgLAAgKgFgAgTgaQgKAJABATQAAAPAIAJQAIAIAMAAQAMABAJgKQAIgIAAgRQAAgKgDgHQgEgIgGgFQgIgDgIAAQgLAAgIAHg");
	this.shape_245.setTransform(154.9,-99.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgKQgFgMAAgLQAAgNAFgKQAFgKAKgFQAJgGALAAQAMAAAJAHQAJAHAEALIgMAEQgCgKgHgFQgFgDgIAAQgKgBgGAFQgHAFgCAIQgDAIAAAIQgBALAEAHQADAIAHAFQAGADAIAAQAJABAHgGQAGgFADgLIALADQgDAOgKAHQgJAIgNgBQgNABgJgGg");
	this.shape_246.setTransform(145.9,-99.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgLQgFgKAAgMQAAgNAFgKQAFgKAJgFQAKgFALAAQANAAAIAGQAJAHADAMIgLACQgCgJgHgFQgFgEgIAAQgJABgHAEQgHAFgCAIQgDAIgBAIQAAAKAEAJQADAHAHAEQAHAFAHAAQAJAAAGgGQAHgFACgLIAMADQgEAOgJAHQgJAIgNAAQgOgBgIgFg");
	this.shape_247.setTransform(263.2,-114.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_248.setTransform(254.8,-114.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_249.setTransform(246.2,-114.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_250.setTransform(234.8,-113.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgDgGAAQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_251.setTransform(228.1,-114.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_252.setTransform(223.2,-114.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAGAHABQAHgBAFgGQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_253.setTransform(214.6,-112);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_254.setTransform(208.1,-113.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_255.setTransform(203.5,-114.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IALAAIAOAkIADAMIAEgLIAOglIAKAAIgXA9g");
	this.shape_256.setTransform(199.2,-113.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_257.setTransform(194.8,-114.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_258.setTransform(190.2,-113.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_259.setTransform(184,-113.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_260.setTransform(177.5,-113.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_261.setTransform(172.7,-113.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_262.setTransform(165.3,-113.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_263.setTransform(159.5,-113.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_264.setTransform(154.6,-114.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_265.setTransform(151.4,-114.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgKAYIAdAAIgJgXIgGgSQgBAIgDAJg");
	this.shape_266.setTransform(145.5,-114.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E6FFFF").s().p("AwZPFIAA+JMAgzAAAIAAeJg");
	this.shape_267.setTransform(239.6,-32.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_268.setTransform(-27,20.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgRAbQgGgFgCgJIAKgCQACAGADADQAFAEAFAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADACIAJADIAPAFQAFABADAEQACADAAAGQAAAFgDAFQgDAFgGACQgGACgHABQgLAAgHgGg");
	this.shape_269.setTransform(-31.8,21.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_270.setTransform(-38.1,21.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_271.setTransform(-44.8,21.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AAQAsIAAgfQgCAEgFACQgDACgGAAQgKAAgIgJQgIgJAAgOQAAgJAEgIQADgHAGgEQAGgEAHAAQALAAAGAKIAAgIIAKAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAEgGAAgLQAAgMgEgGQgGgHgHAAQgFAAgFAGg");
	this.shape_272.setTransform(-51.6,22.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_273.setTransform(-58,21.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_274.setTransform(-65.3,20.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_275.setTransform(40.3,5.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_276.setTransform(33.6,6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_277.setTransform(29,4.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_278.setTransform(26,4.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgDgEQgFgDgHAAQgGAAgFACQgDADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHABQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFABADIgLAAIgCgIQgFAGgFACQgFABgHAAQgJAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAFAEACQADADAGAAQAFAAAFgDQAFgCACgFQABgEABgHIAAgDIgRAEg");
	this.shape_279.setTransform(21,6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKgBAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_280.setTransform(14.8,6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_281.setTransform(10.3,4.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_282.setTransform(7.4,4.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_283.setTransform(2.3,5.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_284.setTransform(-4.3,6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHAAAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_285.setTransform(-11,4.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_286.setTransform(-15.9,4.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_287.setTransform(-21,6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgKAYIAdAAIgJgWIgFgSQgCAJgDAHg");
	this.shape_288.setTransform(-28.3,4.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKAAQABAGADAEQADAEAGADQAFADAHgBQAGAAAFgBQAFgCADgEQACgDAAgFQAAgEgCgCQgDgEgFgCIgOgDQgMgEgFgBQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgFAHgDQAHgEAJAAQAJAAAHAEQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKAAQgKABgEAEQgFADAAAGQAAAEADADQAEADAMADQAOADAFADQAIACADAGQAEAFAAAGQAAAHgEAHQgEAFgHAEQgIAEgJgBQgKABgIgEg");
	this.shape_289.setTransform(-39,4.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgJAYIAcAAIgJgWIgGgSQgBAJgDAHg");
	this.shape_290.setTransform(-47,4.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_291.setTransform(-55.3,4.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgEAcIAAgXIgYAAIAAgJIAYAAIAAgXIAJAAIAAAXIAYAAIAAAJIgYAAIAAAXg");
	this.shape_292.setTransform(-66.5,4.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_293.setTransform(53.9,-9.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_294.setTransform(48.1,-9.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_295.setTransform(43.4,-10.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgRAbQgGgEgCgLIAKgBQACAGADADQAFAEAFAAQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADACIAJADIAPAFQAFABADADQACAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_296.setTransform(38.4,-9.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_297.setTransform(32.1,-9.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgFAEgCIAIgCIAJgCQALgCAHgCIAAgCQAAgGgDgDQgFgEgHAAQgGAAgFADQgDADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgCgHQgFAEgFACQgFADgHAAQgJgBgGgFgAgCAEQgGAAgDACQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgRAEg");
	this.shape_298.setTransform(25.5,-9.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_299.setTransform(20.6,-9.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_300.setTransform(15,-10.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_301.setTransform(4.8,-9.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_302.setTransform(-1.8,-9.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_303.setTransform(-6.5,-10.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_304.setTransform(-9.4,-10.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgWAbQgFgFgBgHQAAgFACgDQADgFADgCIAIgCIAJgCQAMgCAFgCIAAgCQAAgGgCgDQgFgEgHAAQgHAAgEADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQAAAEADADIgMAAIgCgHQgFAEgFACQgFADgGAAQgKgBgGgFgAgCAEQgGAAgDACQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_305.setTransform(-14.5,-9.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_306.setTransform(-22.8,-9.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_307.setTransform(-29.3,-9.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_308.setTransform(-35.1,-9.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_309.setTransform(-39.9,-10.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_310.setTransform(-45.1,-9.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_311.setTransform(-50.1,-10.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgaArIAAhVIALAAIAABLIAqAAIAAAKg");
	this.shape_312.setTransform(-57.8,-10.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgiArIAAhVIAdAAQAJAAAFABQAIACAEAFQAIAFADAJQAEAJAAALQAAAJgDAIQgDAIgDAEQgEAFgDAEIgLADQgGACgHAAgAgYAhIATAAQAHAAAGgCIAHgEQAEgEACgHQACgHAAgJQABgNgFgIQgFgGgFgDQgFgCgKAAIgSAAg");
	this.shape_313.setTransform(-65.5,-10.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#666699").ss(1,1,1).p("Aq5kEIVzAAIAAIJI1zAAg");
	this.shape_314.setTransform(-2.2,7.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("Aq5EFIAAoJIVzAAIAAIJg");
	this.shape_315.setTransform(-2.2,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-19,139.6,49.1);


(lib.rrc_con_reconfig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape.setTransform(24.8,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgQAdQgHgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAHgEQAIgFAIAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgHAAgJgDgAgKgOQgEAGgBAIQABAJAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_1.setTransform(17.5,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_2.setTransform(12.1,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFACgFQADgDAFgBQAEgDAIgCQALgBAEgCIAAgCQAAgFgCgCQgCgCgFAAQgFAAgDACQgCACgBAEIgPgDQACgJAGgEQAHgFALAAQALABAFACQAFADADADQACAEAAAMIAAASIABALIACAJIgQAAIgCgFIgBgCQgEAEgFACQgDACgGAAQgJABgGgGgAAAADQgHACgBABQgEADAAADQAAAEADADQADACAEAAQADAAAEgDQADgDABgDIAAgIIAAgDIgJACg");
	this.shape_3.setTransform(7.2,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQAEgCADAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgCAFABAPIAAATg");
	this.shape_4.setTransform(2,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_5.setTransform(-4.5,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACAEAAQAHgBADgCQACgBABgCIABgIIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgLQAAgQAHgJQAIgIALAAQAKAAAIAKIAAgIIAPAAIAAA2QAAALgBAGQgCAFgEADQgDADgFADQgGABgIABQgPgBgHgFgAgJgbQgDAFAAAKQAAAJADAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgKgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_6.setTransform(-12,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgbIAAgPIAPAAIAAAPg");
	this.shape_7.setTransform(-17.2,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIACgEQACgEAEgCQADgDAHAAQAHAAAHACIgCAMIgIgBQgDAAgCACQgBABAAAFIAAAFIAMAAIAAAMIgMAAIAAAxg");
	this.shape_8.setTransform(-20.6,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_9.setTransform(-26.6,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgQAdQgHgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAHgEQAIgFAIAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgHAAgJgDgAgKgOQgEAGgBAIQABAJAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_10.setTransform(-33.9,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALAAAHAGQAHAEADAKIgRADQAAgFgDgCQgDgCgFAAQgFAAgEADQgDAFAAAKQAAAKADAEQAEAFAFAAQAFAAADgCQADgEABgGIAQADQgCALgHAGQgHAFgMAAQgNABgIgJg");
	this.shape_11.setTransform(-40.8,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_12.setTransform(-47.6,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAFgLACQAGADADAFQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgCACgDQACgCgBgEQAAgEgBgCQgDgEgEAAIgMgBIgOAAg");
	this.shape_13.setTransform(-54.8,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_14.setTransform(32.1,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgQAcQgHgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAHgEQAIgDAIAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgHAAgJgFgAgKgNQgFAEAAAJQAAAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_15.setTransform(24.8,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_16.setTransform(19.4,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_17.setTransform(15.8,-3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAFQgDAEAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_18.setTransform(10.5,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_19.setTransform(3.8,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_20.setTransform(-3.2,-2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_21.setTransform(-10.6,-2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgPAcQgIgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAIgEQAGgDAJAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgIAAgHgFgAgKgNQgEAEAAAJQAAAJAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgJQAAgJgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_22.setTransform(-17.9,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgaAhQgLgMAAgUQAAgVAMgMQALgMARAAQAQAAAJAKQAHAGACAKIgRAEQgBgHgFgEQgFgDgHAAQgJAAgFAGQgHAHAAAPQAAAQAHAGQAGAIAHgBQAHABAGgFQAEgEACgKIARAGQgDAOgJAGQgKAIgNAAQgQAAgMgMg");
	this.shape_23.setTransform(-25.9,-3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgZAhQgLgMAAgUQAAgVALgMQALgMARAAQAPAAAKAKQAGAGADAKIgRAEQgCgHgEgEQgFgDgHAAQgIAAgHAGQgFAHAAAPQAAAQAFAGQAGAIAIgBQAIABAEgFQAGgEABgKIARAGQgEAOgIAGQgJAIgOAAQgRAAgKgMg");
	this.shape_24.setTransform(-37.9,-3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQAEAHgBAHQABAKgGAGQgGAGgLABQAGADADAEQAEAEAGAKIAKARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgCgDQgCgDgEAAIgMAAIgOAAg");
	this.shape_25.setTransform(-46.1,-3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGACQAGADAEAFQADAHAAAHQAAAKgFAGQgGAGgLABQAGADADAEQAEAEAGAKIALARgAgVgGIAOAAQALAAADgBQADgBACgCQACgDgBgEQAAgEgBgDQgDgDgEAAIgMAAIgOAAg");
	this.shape_26.setTransform(-54.8,-3.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIAKgCQACAGAEAEQAEACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQADAEABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADACIAJAEIAQAEQAEABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_27.setTransform(196.3,99.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgFgGgGAAQgHAAgEAGg");
	this.shape_28.setTransform(189.8,98.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_29.setTransform(185.3,98.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_30.setTransform(180.7,99.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_31.setTransform(174,98.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgJIALgCQABAGADAEQAEACAGAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAGACACAEQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADACIAJAEIAPAEQAFABADAEQACAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_32.setTransform(167.7,99.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_33.setTransform(161.4,99.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_34.setTransform(156.5,99.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_35.setTransform(150.7,98.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_36.setTransform(145.8,98.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_37.setTransform(137.4,99.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_38.setTransform(130.7,98.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_39.setTransform(125.8,98.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgEIAFgGIAHgDIAJAAQAGAAAGABQAFACADAEQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADAEAAAFQAAAFgDAEQgDAFgGADQgGADgHgBQgMAAgFgEg");
	this.shape_40.setTransform(117.7,99.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_41.setTransform(113.1,98.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_42.setTransform(108.5,99.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_43.setTransform(102,99.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_44.setTransform(97.1,98.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_45.setTransform(92,99.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFABgMQgBgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_46.setTransform(85.2,98.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIALAAIAAAIIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_47.setTransform(213,83.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_48.setTransform(210,82.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIAKgBQABAGAFADQADADAHABQAHAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgMgBgFgFg");
	this.shape_49.setTransform(202.3,84.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgIQAAgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFADQgDADgBAGIgLgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEACgGABQgLgBgFgFgAgCAEQgGABgDABQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_50.setTransform(196,84.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_51.setTransform(186,84);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_52.setTransform(179.3,84.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_53.setTransform(172.7,84.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEADAGABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_54.setTransform(166.3,84.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAFADAFABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEIAEADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_55.setTransform(157,84.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgEgBgIQAAgFACgDQADgEADgDIAIgCIAJgCQAMgBAFgCIAAgDQAAgGgCgDQgFgEgHAAQgHAAgEADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQAAAEADADIgMAAIgCgHQgFAEgFACQgFACgGABQgKgBgGgFgAgCAEQgGABgDABQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_56.setTransform(150.7,84.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_57.setTransform(141.4,82.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_58.setTransform(136.5,84);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_59.setTransform(130.7,84.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgLglIgCgKIgLAvIgLAAIgUg9IAMAAIAJAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAKAAIgTA9g");
	this.shape_60.setTransform(123,84.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIALAAIAAAIIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_61.setTransform(117.1,83.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_62.setTransform(112,84.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_63.setTransform(105.4,84);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_64.setTransform(95.4,84.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_65.setTransform(88.7,82.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgGIAAAWIALAAIAAAIIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_66.setTransform(83.8,83.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHAEgIAAQgMgBgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_67.setTransform(239.3,68.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_68.setTransform(234.3,67.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_69.setTransform(227.6,67.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_70.setTransform(224.4,68.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHAEgIAAQgMgBgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_71.setTransform(218.6,68.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_72.setTransform(212.1,69.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_73.setTransform(205.3,68.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_74.setTransform(200.4,68.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_75.setTransform(193,67.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_76.setTransform(187.9,68.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_77.setTransform(181.3,68.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_78.setTransform(173,68.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_79.setTransform(164.6,68.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_80.setTransform(159.8,68.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_81.setTransform(153.9,68.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgKIALgCQABAGADAEQAFACAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAGADACADQACAEABAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFACIAIAEIAPAEQAFABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_82.setTransform(147.6,68.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEAAgJQAAgEADgEQABgDAEgDIAHgCIAKgCQALgBAGgDIAAgCQAAgHgCgDQgFgDgHAAQgGAAgFACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQABAEACAEIgMAAIgCgIQgGAFgFADQgEABgGABQgKAAgGgGgAgCAEQgGAAgDACQgDABgBACQgBADAAACQAAAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_83.setTransform(141.3,68.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_84.setTransform(134.7,68.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_85.setTransform(126.4,68.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgEgBgJQAAgEACgEQADgDADgDIAIgCIAJgCQAMgBAFgDIAAgCQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgBQABgHAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFABgGABQgKAAgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAACQAAAFAEADQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_86.setTransform(114.7,68.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_87.setTransform(104.5,67.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_88.setTransform(98,68.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_89.setTransform(91.4,68.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgKIAKgCQABAGAFAEQADACAGAAQAIAAADgCQAEgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgBgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAFADADADQACAEACAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIAEACIAIAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgGgGg");
	this.shape_90.setTransform(85,68.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_91.setTransform(242.7,53.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_92.setTransform(237.7,52.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAbIAvAAIAAAJIgvAAIAAAdIA0AAIAAAKg");
	this.shape_93.setTransform(228.8,52.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_94.setTransform(220.3,52.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_95.setTransform(209.3,53.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_96.setTransform(202.7,52.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_97.setTransform(197.7,52.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_98.setTransform(191,52.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_99.setTransform(186.5,53.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_100.setTransform(179.9,53.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_101.setTransform(175.1,53.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_102.setTransform(171,52.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIAKgBQABAGAFADQADADAHAAQAHAAADgCQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFADADADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgDAFgGADQgGACgHAAQgMAAgFgEg");
	this.shape_103.setTransform(166.3,53.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_104.setTransform(160,53.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_105.setTransform(155.3,52.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_106.setTransform(147.3,53.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_107.setTransform(142.4,52.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgFgCgLIAKgBQACAGADADQAFADAFAAQAIAAADgCQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgEQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFADADADQADAEABAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_108.setTransform(134.3,53.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_109.setTransform(130,52.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_110.setTransform(122,53.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgFgCgLIAKgBQABAGAFADQADADAHAAQAHAAADgCQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgBgEQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFADADADQACAEACAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIAEADIAIACIAQAFQAEABADADQACAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgGgEg");
	this.shape_111.setTransform(115.6,53.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_112.setTransform(109.3,53.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgFAHg");
	this.shape_113.setTransform(102.9,54.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_114.setTransform(97.8,53.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_115.setTransform(92,53.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgFAHg");
	this.shape_116.setTransform(85.6,54.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFAEQADADAGAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgBgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_117.setTransform(244.3,38.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_118.setTransform(239.7,37);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_119.setTransform(236.7,36.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_120.setTransform(228.7,38.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQABAGADAEQAFADAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIAIAEIAPAEQAFABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_121.setTransform(222.3,38.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQAAgFADgDQABgEAEgDIAHgCIAKgCQALgCAGgCIAAgCQAAgHgCgCQgFgEgHAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABADACAEIgMAAIgCgHQgGAFgFACQgEACgGAAQgKAAgGgGgAgCAEQgGAAgDACQgDABgBACQgBACAAAEQAAADADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_122.setTransform(216,38.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_123.setTransform(209.9,38.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQACAGAEAEQAEADAFAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEABAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgHgGg");
	this.shape_124.setTransform(200.3,38.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_125.setTransform(196,36.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_126.setTransform(191.4,36.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_127.setTransform(186.4,37);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_128.setTransform(178,38);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_129.setTransform(173,36.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_130.setTransform(163,40.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgDgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEABAGIgKABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgGgGg");
	this.shape_131.setTransform(158.3,38.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_132.setTransform(153.7,37);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_133.setTransform(148.6,38);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_134.setTransform(142,38.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_135.setTransform(133.7,38);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_136.setTransform(125.3,38.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_137.setTransform(120.5,38);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_138.setTransform(114.6,38.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgDgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEABAGIgKABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgLAAgGgGg");
	this.shape_139.setTransform(108.3,38.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgDgCQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAADACAEIgKAAIgCgHQgGAFgGACQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADAEQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgPAEg");
	this.shape_140.setTransform(102,38.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_141.setTransform(95.4,38.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAVg7IAPAAIAABVg");
	this.shape_142.setTransform(87.1,36.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_143.setTransform(231.9,22.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIALgBQAAAGAEAEQAFACAGAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQADAEAAAGIgKABQgBgEgDgEQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_144.setTransform(225.6,22.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGAAgIQABgEACgEQACgEADgCIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgEQgEgDgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAEACAEIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_145.setTransform(219.3,22.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_146.setTransform(212.6,22.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_147.setTransform(207.9,21.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_148.setTransform(203.3,22.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_149.setTransform(198.5,22.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAsIAYhYIAJAAIgYBYg");
	this.shape_150.setTransform(194.3,21.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAGgBIADgDIADgIIABgDIgYg9IAMAAIANAkIADANIAFgNIANgkIAKAAIgXA+IgFAOQgDAGgEACQgDADgGAAIgGgCg");
	this.shape_151.setTransform(189.7,24);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_152.setTransform(185.2,21.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_153.setTransform(182,21.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_154.setTransform(177.1,21.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_155.setTransform(170.7,22.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_156.setTransform(162.4,22.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAsIAYhYIAJAAIgYBYg");
	this.shape_157.setTransform(155.7,21.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAHAAAGAEQAHAEADAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgCQgFgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAHg");
	this.shape_158.setTransform(150.9,23.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_159.setTransform(144,22.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_160.setTransform(139.1,21.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_161.setTransform(134,22.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFAEQADACAHAAQAHAAADgCQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgDgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFACADAEQACAEABAGIgKABQAAgEgEgEQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIACIAQAFQAEABACADQADAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgLAAgGgEg");
	this.shape_162.setTransform(127.7,22.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_163.setTransform(118,22.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_164.setTransform(113.1,21.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_165.setTransform(104.5,21.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_166.setTransform(98,22.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFAEQADACAHAAQAHAAADgCQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgDgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFACADAEQACAEABAGIgKABQAAgEgEgEQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIACIAQAFQAEABACADQADAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgLAAgGgEg");
	this.shape_167.setTransform(91.7,22.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_168.setTransform(85.3,22.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQABAGADADQAFAEAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgGIAHgDIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgFgGg");
	this.shape_169.setTransform(226.8,7.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_170.setTransform(222.5,6.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_171.setTransform(214.5,7.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAGAHABQAHgBAFgGQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_172.setTransform(207.7,8.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFAAgHQAAgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgLAAIgBgHQgHAEgEADQgFACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_173.setTransform(201.2,7.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQABAGADADQAFAEAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgGIAHgDIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgFgGg");
	this.shape_174.setTransform(194.9,7.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFADQADAEAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgDgFQgCgDAAgEQAAgFACgDIAFgGIAHgDIAJgBQAGAAAGACQAFACADADQACAEABAGIgKABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIADIAQAFQAEABACAEQADADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgLAAgGgGg");
	this.shape_175.setTransform(188.9,7.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_176.setTransform(182.6,7.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIAAgKIgEgEQgDgCgDAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgDADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_177.setTransform(174.3,7.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_178.setTransform(162.6,7.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_179.setTransform(155.9,7.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_180.setTransform(151.3,6.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_181.setTransform(148.3,6.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIABAKIAAANIAAATQABAEABADIgLAAIgBgHQgHAEgEADQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_182.setTransform(143.3,7.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_183.setTransform(138.4,7.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_184.setTransform(132.6,7.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAGAHABQAHgBAFgGQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_185.setTransform(125.8,8.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_186.setTransform(121.3,6.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_187.setTransform(118.6,6.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_188.setTransform(113.3,7.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_189.setTransform(106.7,7.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_190.setTransform(100.5,7.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_191.setTransform(94,7.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGACADAGQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_192.setTransform(86.8,6.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_193.setTransform(192.6,-8.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_194.setTransform(185.9,-8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_195.setTransform(181.3,-9.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_196.setTransform(178.3,-9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_197.setTransform(173.8,-8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_198.setTransform(167.3,-8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_199.setTransform(160.6,-8.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_200.setTransform(154,-8.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_201.setTransform(147.3,-8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgKQgFgMAAgLQAAgNAFgKQAFgKAJgFQAKgGALAAQANAAAIAHQAJAHADALIgLADQgCgJgHgEQgFgEgIgBQgJAAgHAFQgHAFgCAIQgEAIAAAIQAAALAEAHQADAIAHAFQAHADAGAAQAKAAAGgFQAHgFACgLIAMADQgEAOgJAHQgJAHgNAAQgOABgIgGg");
	this.shape_202.setTransform(139.8,-9.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgKQgEgMAAgLQAAgNAFgKQAFgKAKgFQAJgGAKAAQANAAAJAHQAJAHADALIgKADQgDgJgGgEQgGgEgJgBQgJAAgGAFQgHAFgDAIQgDAIAAAIQABALADAHQADAIAHAFQAHADAGAAQAKAAAHgFQAGgFADgLIALADQgEAOgJAHQgJAHgOAAQgMABgJgGg");
	this.shape_203.setTransform(127.8,-9.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgHIgFgBIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAGAAAGQAAAKgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgEAAgEQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_204.setTransform(119.4,-9.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgHIgFgBIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAGAAAGQAAAKgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgEAAgEQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_205.setTransform(110.8,-9.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_206.setTransform(99.4,-8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_207.setTransform(92.7,-9.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_208.setTransform(85.8,-9.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E6FFFF").s().p("AuSLBIAA2BIclAAIAAWBg");
	this.shape_209.setTransform(169.6,46.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_210.setTransform(0.6,13);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_211.setTransform(-5.4,11.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_212.setTransform(-11.2,11.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_213.setTransform(-17.9,11.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_214.setTransform(-24.7,13);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_215.setTransform(-32.9,11.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_216.setTransform(-39.1,13);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_217.setTransform(-45.6,13);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_218.setTransform(-50.3,11.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_219.setTransform(-55.4,11.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_220.setTransform(37.1,-2.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_221.setTransform(30.4,-2.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_222.setTransform(25.8,-3.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_223.setTransform(22.8,-3.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_224.setTransform(17.8,-2.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_225.setTransform(9.5,-2.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_226.setTransform(2.9,-2.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_227.setTransform(-2.9,-2.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_228.setTransform(-7.6,-3.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_229.setTransform(-12.9,-2.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_230.setTransform(-17.9,-3.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_231.setTransform(-24.4,-2.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_232.setTransform(-30.2,-2.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_233.setTransform(-35.2,-3.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_234.setTransform(-39.9,-2.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_235.setTransform(-46.2,-2.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_236.setTransform(-54.5,-3.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_237.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_209},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.path_switch_request = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape.setTransform(-14.2,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIAQgCQABAEAEADQADACAFABQAGgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgCQgSgFgGgDQgHgFAAgJQAAgHAGgGQAHgFANgBQAMAAAHAFQAFAEADAIIgPACQgBgDgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACADIAOAFQANADAGAEQAFADAAAIQAAAJgHAHQgHAFgOAAQgMAAgIgEg");
	this.shape_1.setTransform(-19.7,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_2.setTransform(-26.2,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_3.setTransform(-33.2,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAOAsIAAggQgDAEgFADQgFACgEAAQgLAAgHgIQgIgJAAgPQAAgPAIgIQAHgJAMAAQAEABAFACQAEACAEAGIAAgJIAPAAIAABVgAgJgZQgDAFAAAKQAAAKADAEQAFAEAEABQAGAAAEgGQAEgEABgKQAAgKgFgEQgDgFgHABQgEgBgFAFg");
	this.shape_4.setTransform(-40.7,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_5.setTransform(-47.6,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAFgLACQAGADADAFQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgCACgDQACgCgBgEQAAgEgBgCQgDgEgEAAIgMgBIgOAAg");
	this.shape_6.setTransform(-54.8,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMArIAAghQAAgKgBgBQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBADQgCAEAAAIIAAAfIgQAAIAAhVIAQAAIAAAgQAIgJAKAAQAGAAAFACQAEACACADQADADABAEIAAAMIAAAkg");
	this.shape_7.setTransform(4.8,-3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAFQgDAEAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_8.setTransform(-2.1,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_9.setTransform(-7.5,-3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_10.setTransform(-11.2,-3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAKAfIgKgnIgKAnIgQAAIgTg9IAQAAIALAnIALgnIAPAAIAKAnIAMgnIAQAAIgUA9g");
	this.shape_11.setTransform(-17.5,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgGQAEgFAHgEQAHgDAJAAQAQAAAIAIQAIAHAAAMIgRAAQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAADACABQAEAEALADQANACAGADQAGAEAEAEQADAGAAAIQAAAIgEAGQgEAGgIAEQgHADgLAAQgQgBgIgHg");
	this.shape_12.setTransform(-26.3,-3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAMArIAAghQAAgKgBgBQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBADQgCAEAAAIIAAAfIgQAAIAAhVIAQAAIAAAgQAIgJAKAAQAGAAAFACQAEACACADQADADABAEIAAAMIAAAkg");
	this.shape_13.setTransform(-37.2,-3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_14.setTransform(-42.9,-3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFACgEQADgFAFgBQAEgCAIgBQALgCAEgDIAAgBQAAgFgCgCQgCgCgFAAQgFAAgDABQgCACgBAFIgPgDQACgJAGgFQAHgDALAAQALAAAFACQAFADADAEQACAEAAAKIAAASIABANIACAIIgQAAIgCgFIgBgCQgEAFgFACQgDACgGAAQgJgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQADADAEAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_15.setTransform(-48.2,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AggArIAAhVIAcAAQAPAAAFABQAHACAFAHQAFAGAAAKQAAAJgDAFQgDAEgEAEQgFADgEAAIgRABIgMAAIAAAhgAgPgDIAKAAQAKAAADgCQADgBACgCQACgDAAgEQAAgFgDgDQgDgDgDgBIgMAAIgJAAg");
	this.shape_16.setTransform(-55.4,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_17.setTransform(117,23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAFgDADQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape_18.setTransform(111.4,19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_19.setTransform(104,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_20.setTransform(97.1,20);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_21.setTransform(90.7,21.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_22.setTransform(83,19.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_23.setTransform(75.4,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_24.setTransform(202.3,4.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_25.setTransform(197.3,5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADACQADAEAHAAQAHAAAEgEQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgHAGgFQAGgDAIAAQALgBAHAKIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAFgJAAQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_26.setTransform(190.4,7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_27.setTransform(185.8,5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgJQAAgEACgEQACgDADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgHAFgFADQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBACQABAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_28.setTransform(180,5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_29.setTransform(175,4.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_30.setTransform(166.6,5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_31.setTransform(160,4.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_32.setTransform(155,4.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgKIAKgCQABAGAFAEQADACAHAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgMAAgFgGg");
	this.shape_33.setTransform(146.9,5.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_34.setTransform(140.4,4.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_35.setTransform(135.8,5.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgEgBgJQAAgEACgEQADgDADgDIAIgCIAJgCQAMgBAFgDIAAgCQAAgHgCgDQgFgDgHAAQgHAAgEACQgDADgBAHIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIgBAFACQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAFgFADQgFACgGAAQgKAAgGgGgAgCAEQgGAAgDACQgDABgBACQgCADAAACQAAAFAEADQADACAGAAQAFAAAFgCQAEgDADgFQABgEAAgGIAAgEIgQAEg");
	this.shape_36.setTransform(130,5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKgkIgDgLIgMAvIgKAAIgTg9IALAAIAJAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAJAAIgSA9g");
	this.shape_37.setTransform(122.3,5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIABQgMgBgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_38.setTransform(114.7,5.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_39.setTransform(109.7,4.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_40.setTransform(103.3,4.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGAAAEgCQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_41.setTransform(98.7,5.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_42.setTransform(92,5.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_43.setTransform(85.4,5.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_44.setTransform(78.7,5.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_45.setTransform(73.8,4.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAGAAAGQAAALgHAHQgHAHgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgFAAgGQAAgGgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_46.setTransform(209.6,-10.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_47.setTransform(201.7,-10.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgFgGgLQgFgKAAgMQAAgMAFgLQAGgLAJgFQAKgGAMABQAJAAAIADQAIADAEAFQAEAGACAIIgKADQgCgGgDgEQgDgEgFgCQgFgCgHAAQgHAAgFACQgGACgDAEQgEAEgCAFQgDAHAAAJQAAALAEAIQAEAIAHAEQAIADAHAAQAIAAAHgDQAHgCADgEIAAgPIgZAAIAAgKIAlAAIAAAfQgJAGgJAEQgJADgJAAQgMABgKgGg");
	this.shape_48.setTransform(193.3,-10.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_49.setTransform(181,-10.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_50.setTransform(174.7,-9.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAFArIAAhCQgDAEgGADIgLAFIAAgKQAJgEAGgGQAGgFADgGIAHAAIAABVg");
	this.shape_51.setTransform(168.9,-10.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgEgFgGQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFACAHAAQAGAAAFgCQAFgCADgDQACgDAAgEQAAgFgCgCQgDgEgFgCIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgFAHgDQAHgDAJAAQAJAAAHADQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKABQgKAAgEADQgFAEAAAFQAAAFADADQAEADAMAEQAOADAFACQAIACADAFQAEAGAAAHQAAAHgEAFQgEAGgHAEQgIADgJAAQgKAAgIgDg");
	this.shape_52.setTransform(162,-10.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_53.setTransform(151.3,-9.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_54.setTransform(144.7,-10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_55.setTransform(139.7,-10.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_56.setTransform(133.2,-10.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_57.setTransform(128,-9.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgDABgFIABgOQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgHAGgEQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_58.setTransform(117.8,-8.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_59.setTransform(111.3,-9.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_60.setTransform(106.7,-10.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_61.setTransform(102,-10.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_62.setTransform(95.9,-9.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_63.setTransform(91.1,-10.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_64.setTransform(88,-10.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKglIgDgKIgMAvIgKAAIgTg9IAKAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_65.setTransform(82.4,-9.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIAKgBQABAGAFADQADADAHAAQAHAAADgCQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFADADADQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgLAAgGgEg");
	this.shape_66.setTransform(75,-9.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFAEQADADAGAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgBgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_67.setTransform(219.6,-24.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_68.setTransform(215,-26);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQACAGAEAEQAEADAFAAQAIgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEABAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgHgGg");
	this.shape_69.setTransform(210.2,-24.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_70.setTransform(203.9,-24.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_71.setTransform(197.2,-24.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AARAsIAAgfQgDAEgFACQgEACgFAAQgKAAgIgJQgIgJAAgOQAAgJADgIQAEgHAGgEQAGgEAHAAQALAAAGAKIAAgIIAKAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAEgGAAgLQABgMgGgGQgEgHgIAAQgFAAgFAGg");
	this.shape_72.setTransform(190.4,-23.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_73.setTransform(184,-24.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_74.setTransform(179.1,-25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAGgDAFQgDAEgGAEQAIABAEAFQAEAFAAAIQAAAGgCAFQgDAGgDACIgKAFQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgEgDgEQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape_75.setTransform(169.4,-26.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_76.setTransform(162,-24.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgFgGgGAAQgHAAgEAGg");
	this.shape_77.setTransform(155.1,-26.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_78.setTransform(148.7,-24.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_79.setTransform(141,-26.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_80.setTransform(133.4,-24.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_81.setTransform(125.1,-26);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_82.setTransform(120,-24.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKABQABAGADABQADADAHABQAHgBAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJABQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_83.setTransform(113.2,-23.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_84.setTransform(108.5,-25);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQABgFACgEQACgDADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgCgDQgEgDgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIAAAKIAAANIABATQABADACAEIgLAAIgDgHQgGAFgFACQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgCABgCACQgBACAAAEQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_85.setTransform(102.7,-24.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_86.setTransform(97.8,-26);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_87.setTransform(89.4,-24.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_88.setTransform(82.7,-26.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_89.setTransform(75.8,-26.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E6FFFF").s().p("AtRGLIAAsVIajAAIAAMVg");
	this.shape_90.setTransform(152.6,-2.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_91.setTransform(0.6,13);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_92.setTransform(-5.4,11.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_93.setTransform(-11.2,11.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_94.setTransform(-17.9,11.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_95.setTransform(-24.7,13);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_96.setTransform(-32.9,11.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_97.setTransform(-39.1,13);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_98.setTransform(-45.6,13);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_99.setTransform(-50.3,11.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_100.setTransform(-55.4,11.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_101.setTransform(37.1,-2.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_102.setTransform(30.4,-2.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_103.setTransform(25.8,-3.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_104.setTransform(22.8,-3.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_105.setTransform(17.8,-2.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_106.setTransform(9.5,-2.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_107.setTransform(2.9,-2.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_108.setTransform(-2.9,-2.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_109.setTransform(-7.6,-3.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_110.setTransform(-12.9,-2.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_111.setTransform(-17.9,-3.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_112.setTransform(-24.4,-2.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_113.setTransform(-30.2,-2.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_114.setTransform(-35.2,-3.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_115.setTransform(-39.9,-2.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_116.setTransform(-46.2,-2.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_117.setTransform(-54.5,-3.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_118.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_90},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.path_switch_ack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape.setTransform(14.5,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACAEAAQAHgBADgCQACgBABgCIABgIIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgLQAAgQAHgJQAIgIALAAQAKAAAIAKIAAgIIAPAAIAAA2QAAALgBAGQgCAFgEADQgDADgFADQgGABgIABQgPgBgHgFgAgJgbQgDAFAAAKQAAAJADAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgKgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_1.setTransform(7.3,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_2.setTransform(0,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_3.setTransform(-6.9,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_4.setTransform(-11.9,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAKAfIgKgnIgKAnIgQAAIgUg9IARAAIALAoIALgoIAPAAIAKAoIAMgoIAQAAIgUA9g");
	this.shape_5.setTransform(-18.2,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgPAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAIgEQAGgFAJAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgIAAgHgDgAgKgOQgFAGABAIQgBAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_6.setTransform(-26.5,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_7.setTransform(-33.9,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AALArIgPgcIgHAIIAAAUIgRAAIAAhVIARAAIAAAtIASgVIAUAAIgVAWIAXAng");
	this.shape_8.setTransform(-40.6,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALAAAHAGQAHAEADAKIgRADQAAgFgDgCQgDgCgFAAQgFAAgEADQgDAFAAAKQAAAKADAEQAEAFAFAAQAFAAADgCQADgEABgGIAQADQgCALgHAGQgHAFgMAAQgNABgIgJg");
	this.shape_9.setTransform(-47.5,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAYArIgHgUIghAAIgHAUIgTAAIAihVIARAAIAiBVgAgLAJIAXAAIgMgfg");
	this.shape_10.setTransform(-55.2,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAMArIAAghQAAgKgBgBQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBADQgCAEAAAIIAAAfIgQAAIAAhVIAQAAIAAAgQAIgJAKAAQAGAAAFACQAEACACADQADADABAEIAAAMIAAAkg");
	this.shape_11.setTransform(4.8,-3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJANABQALAAAHAEQAHAFADAKIgRADQAAgFgDgCQgDgCgFgBQgFAAgEAFQgDAEAAAKQAAAKADAFQAEAEAFAAQAFAAADgDQADgDABgGIAQADQgCALgHAFQgHAHgMAAQgNAAgIgJg");
	this.shape_12.setTransform(-2.1,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_13.setTransform(-7.5,-3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_14.setTransform(-11.2,-3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAKAfIgKgnIgKAnIgQAAIgTg9IAQAAIALAnIALgnIAPAAIAKAnIAMgnIAQAAIgUA9g");
	this.shape_15.setTransform(-17.5,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgXAlQgJgIgCgOIARgCQABAJAFAEQAFAEAHAAQAIAAAEgDQAFgEAAgFQAAgDgCgCQgCgCgEgCIgNgDQgOgEgGgEQgIgHAAgKQAAgHAEgGQAEgFAHgEQAHgDAJAAQAQAAAIAIQAIAHAAAMIgRAAQgBgGgEgDQgDgDgHAAQgHAAgEADQgDACAAAEQAAADACABQAEAEALADQANACAGADQAGAEAEAEQADAGAAAIQAAAIgEAGQgEAGgIAEQgHADgLAAQgQgBgIgHg");
	this.shape_16.setTransform(-26.3,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAMArIAAghQAAgKgBgBQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBADQgCAEAAAIIAAAfIgQAAIAAhVIAQAAIAAAgQAIgJAKAAQAGAAAFACQAEACACADQADADABAEIAAAMIAAAkg");
	this.shape_17.setTransform(-37.2,-3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_18.setTransform(-42.9,-3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgFACgEQADgFAFgBQAEgCAIgBQALgCAEgDIAAgBQAAgFgCgCQgCgCgFAAQgFAAgDABQgCACgBAFIgPgDQACgJAGgFQAHgDALAAQALAAAFACQAFADADAEQACAEAAAKIAAASIABANIACAIIgQAAIgCgFIgBgCQgEAFgFACQgDACgGAAQgJgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQADADAEAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_19.setTransform(-48.2,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AggArIAAhVIAcAAQAPAAAFABQAHACAFAHQAFAGAAAKQAAAJgDAFQgDAEgEAEQgFADgEAAIgRABIgMAAIAAAhgAgPgDIAKAAQAKAAADgCQADgBACgCQACgDAAgEQAAgFgDgDQgDgDgDgBIgMAAIgJAAg");
	this.shape_20.setTransform(-55.4,-3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_21.setTransform(220.4,71.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_22.setTransform(215.3,68.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_23.setTransform(208.5,70);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgIQAAgFABgDQADgEADgDIAHgCIAKgCQALgBAHgDIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEACgHABQgKgBgFgFgAgBAEQgHABgDABQgCABgCADQgBABgBAEQABAEADACQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg");
	this.shape_24.setTransform(202,68.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAFADAFABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgDgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEIAEADIAJACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_25.setTransform(195.7,68.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIAKgBQABAGAFADQADADAHABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgMgBgFgFg");
	this.shape_26.setTransform(189.7,68.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_27.setTransform(183.4,68.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_28.setTransform(175.1,68.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_29.setTransform(162.9,67.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgFgGgLQgFgKAAgMQAAgMAFgLQAGgLAJgFQAKgGAMABQAJAAAIADQAIACAEAGQAEAFACAJIgKADQgCgGgDgEQgDgEgFgDQgFgBgHAAQgHgBgFADQgGACgDAEQgEAEgCAFQgDAHAAAJQAAALAEAIQAEAIAHAEQAIADAHAAQAIAAAHgDQAHgCADgEIAAgPIgZAAIAAgKIAlAAIAAAfQgJAGgJAEQgJAEgJAAQgMAAgKgGg");
	this.shape_30.setTransform(154,67.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgiArIAAhVIAdAAQAJAAAFACQAIABAEAFQAIAFADAJQADAJABALQgBAJgCAIQgCAIgEAFQgEAFgEADIgKADQgGACgHAAgAgYAhIATAAQAHAAAGgCIAHgEQAEgEACgHQACgHAAgJQABgNgFgIQgFgGgFgDQgFgCgKAAIgSAAg");
	this.shape_31.setTransform(145.2,67.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_32.setTransform(136.9,67.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgaArIAAhVIALAAIAABLIAqAAIAAAKg");
	this.shape_33.setTransform(129.6,67.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgShBIgDgKIgCAKIgSBBIgLAAIgXhVIALAAIANA3IAEASIAEgQIAQg5IANAAIAMArQAFAQACAOIAEgTIAOg2IALAAIgXBVg");
	this.shape_34.setTransform(120.4,67.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgJgHgGgKQgEgKAAgLQAAgUALgNQAMgLARAAQAMAAAKAFQAJAGAFAKQAFAKAAAMQAAANgGAKQgFALgJAFQgKAGgLAAQgLgBgKgFgAgUgZQgJAIAAATQABAPAIAJQAIAJAMgBQAMAAAJgJQAIgIAAgRQAAgJgEgIQgDgIgHgFQgHgDgIAAQgLgBgJAJg");
	this.shape_35.setTransform(110.1,67.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_36.setTransform(101,67.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgfgrIgNANIAAAeIgLAAIAAhVIALAAIAAAqIAqgqIAOAAIgjAjIAlAyg");
	this.shape_37.setTransform(93.2,67.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgLQgEgLAAgLQAAgNAFgKQAFgKAKgFQAJgGAKABQANgBAJAHQAJAHAEALIgLAEQgEgKgFgFQgGgDgJAAQgJgBgGAFQgHAFgDAIQgCAIAAAIQAAAKADAJQADAHAHAFQAGADAHAAQAKABAHgGQAGgGADgKIALADQgEAOgJAHQgJAIgOAAQgMAAgJgGg");
	this.shape_38.setTransform(84.5,67.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AAcArIgLgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAXIAcAAIgJgWIgGgSQgBAIgDAJg");
	this.shape_39.setTransform(76.1,67.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgpIgrAAIAAApIgMAAIAAhVIAMAAIAAAjIArAAIAAgjIAMAAIAABVg");
	this.shape_40.setTransform(229.9,52.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgKQgEgLAAgMQAAgNAFgKQAFgKAKgFQAJgFAKgBQANABAJAGQAJAHADAMIgKACQgDgJgGgEQgGgFgJAAQgJABgGAEQgHAFgDAIQgDAIAAAIQABALADAHQADAJAHADQAHAFAGAAQAKgBAHgFQAGgGADgKIALADQgEAOgJAHQgJAHgOABQgMgBgJgFg");
	this.shape_41.setTransform(221.4,52.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_42.setTransform(213.3,52.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_43.setTransform(207.9,52.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgShAIgDgLIgCALIgSBAIgLAAIgXhVIALAAIANA4IAEARIAEgQIAQg5IANAAIAMAqQAFARACAOIAEgTIAOg2IALAAIgXBVg");
	this.shape_44.setTransform(200.6,52.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgEgFgGQgEgHAAgIIAKgBQABAGADAEQADAEAGADQAFACAHABQAGAAAFgCQAFgCADgEQACgDAAgFQAAgDgCgEQgDgDgFgBIgOgFQgMgCgFgCQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgGAHgDQAHgDAJAAQAJAAAHADQAHAEAEAGQAEAFAAAIIgKABQgBgIgFgEQgFgEgKgBQgKAAgEAFQgFADAAAGQAAAEADADQAEADAMADQAOADAFADQAIACADAGQAEAFAAAGQAAAIgEAGQgEAGgHADQgIADgJABQgKgBgIgDg");
	this.shape_45.setTransform(190.9,52.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgpIgrAAIAAApIgMAAIAAhVIAMAAIAAAjIArAAIAAgjIAMAAIAABVg");
	this.shape_46.setTransform(179.2,52.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_47.setTransform(171.3,52.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AAcArIgLgaIgiAAIgKAaIgMAAIAhhVIALAAIAjBVgAgFgRIgKAZIAcAAIgIgXIgFgSQgCAJgDAHg");
	this.shape_48.setTransform(164.5,52.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AggArIAAhVIAgAAIAMABQAHABAEADQAEADADAFQADAGAAAGQAAALgHAGQgHAIgTAAIgVAAIAAAjgAgVgBIAWAAQALAAAEgEQAFgEAAgIQAAgFgDgEQgDgEgEgBQgDgBgIAAIgVAAg");
	this.shape_49.setTransform(157.6,52.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHgBQAGABAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNgBgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_50.setTransform(146.7,53.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_51.setTransform(140,52.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_52.setTransform(135.1,52.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_53.setTransform(126.7,52.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_54.setTransform(121.7,52.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_55.setTransform(118.7,52.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKgkIgCgLIgLAvIgMAAIgTg9IAMAAIAJAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAKAAIgTA9g");
	this.shape_56.setTransform(113,53.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEgBgEADQgEACgCAFQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAFAAAHIAAAog");
	this.shape_57.setTransform(102,52.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHAAQAGAAAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMgBgHgIg");
	this.shape_58.setTransform(95.9,53.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgHIAAAWIALAAIAAAIIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_59.setTransform(91.1,52.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_60.setTransform(88,52.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKgkIgDgLIgMAvIgKAAIgTg9IAKAAIAKAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_61.setTransform(82.4,53.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgKIAKgCQABAGAFAEQADADAHgBQAHAAADgCQAEgDAAgEQAAgEgDgCIgLgDIgPgFQgEgCgDgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGABQAFADADADQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgLAAgGgGg");
	this.shape_62.setTransform(75,53.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_63.setTransform(216,36.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_64.setTransform(211.1,37.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgFgBgJQAAgEACgDQADgEADgDIAIgDIAJgBQAMgBAFgCIAAgDQAAgGgCgDQgFgEgHAAQgHAAgEACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQAAAFADADIgMAAIgCgIQgFAGgFABQgFACgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgCABAAADQAAAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_65.setTransform(206,38.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAKAAIAAAIQADgFAEgCQAEgDAGAAQAHAAAGAEQAHAEADAIQADAHAAAJQAAAKgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgCQgFgCgCgEIAAAfgAgMgcQgEAGAAAMQAAALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgEgGgHAAQgGAAgGAHg");
	this.shape_66.setTransform(199.6,39.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_67.setTransform(189.4,38.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_68.setTransform(182.7,36.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_69.setTransform(177.8,37.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIALgBQABAGADADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQACAEABAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_70.setTransform(169.7,38.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgDgCgEAAQgGAAgEAFQgFAEABAKIAAAjIgKAAIAAgoQAAgHgDgDQgDgEgFAAQgEAAgFADQgDACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_71.setTransform(161.7,38);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_72.setTransform(155.2,38);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_73.setTransform(151.4,36.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_74.setTransform(148.6,36.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_75.setTransform(143.4,38);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_76.setTransform(136.7,38.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_77.setTransform(130.6,38.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_78.setTransform(120.2,36.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_79.setTransform(111.1,36.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAVA8IACANIAFgOIAUg7IAQAAIAABVg");
	this.shape_80.setTransform(101.1,36.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_81.setTransform(89.4,38.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_82.setTransform(82.7,36.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_83.setTransform(75.8,36.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6FFFF").s().p("AtREiIAApDIajAAIAAJDg");
	this.shape_84.setTransform(152.6,50.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_85.setTransform(0.6,13);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_86.setTransform(-5.4,11.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_87.setTransform(-11.2,11.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_88.setTransform(-17.9,11.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_89.setTransform(-24.7,13);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_90.setTransform(-32.9,11.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_91.setTransform(-39.1,13);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_92.setTransform(-45.6,13);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_93.setTransform(-50.3,11.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_94.setTransform(-55.4,11.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_95.setTransform(37.1,-2.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_96.setTransform(30.4,-2.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_97.setTransform(25.8,-3.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_98.setTransform(22.8,-3.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_99.setTransform(17.8,-2.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_100.setTransform(9.5,-2.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_101.setTransform(2.9,-2.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_102.setTransform(-2.9,-2.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_103.setTransform(-7.6,-3.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_104.setTransform(-12.9,-2.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_105.setTransform(-17.9,-3.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_106.setTransform(-24.4,-2.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_107.setTransform(-30.2,-2.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_108.setTransform(-35.2,-3.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_109.setTransform(-39.9,-2.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_110.setTransform(-46.2,-2.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_111.setTransform(-54.5,-3.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_112.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_84},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.my_buttons_top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666699").ss(2,1,1).p("AzDiGMAmHAAAIAAENMgmHAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,1,1).p("AzDiGMAmHAAAIAAENMgmHAAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669966").s().p("AzDCHIAAkNMAmHAAAIAAENg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(2,1,1).p("AzDiGMAmHAAAIAAENMgmHAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-14.4,246.1,29);


(lib.Mod_bearer_res = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape.setTransform(-5.6,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIARgCQAAAEADADQAEACAEABQAHgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgFgCQgTgFgGgDQgHgFAAgJQAAgHAGgGQAHgFANgBQAMAAAGAFQAHAEACAIIgPACQgCgDgDgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACADIAPAFQANADAFAEQAFADAAAIQAAAJgHAHQgHAFgPAAQgLAAgIgEg");
	this.shape_1.setTransform(-12.3,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_2.setTransform(-19.2,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgPAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAIgEQAGgFAJAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgIAAgHgDgAgKgOQgFAGABAIQgBAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_3.setTransform(-26.5,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeAsIAAhVIAQAAIAAAJQADgFAFgDQAFgDAFAAQALAAAIAJQAHAJABAPQAAAOgJAJQgHAJgLgBQgEAAgEgCQgEgBgFgGIAAAggAgJgZQgEAEAAAKQAAALAEADQAFAGAEAAQAGgBAEgEQADgEAAgKQAAgKgDgFQgFgFgFABQgFgBgEAFg");
	this.shape_4.setTransform(-33.7,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIAQgCQABAEADADQAEACAEABQAHgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgCQgSgFgGgDQgHgFAAgJQAAgHAGgGQAHgFANgBQAMAAAGAFQAHAEACAIIgPACQgCgDgDgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACADIAOAFQANADAGAEQAFADAAAIQAAAJgHAHQgIAFgOAAQgLAAgIgEg");
	this.shape_5.setTransform(-41,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_6.setTransform(-47.6,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAFgLACQAGADADAFQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgCACgDQACgCgBgEQAAgEgBgCQgDgEgEAAIgMgBIgOAAg");
	this.shape_7.setTransform(-54.8,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_8.setTransform(18.5,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_9.setTransform(12.3,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAEAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_10.setTransform(7.2,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEgBQAFgCAIgBQALgCAEgDIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALAAAFACQAFADADAEQACAEgBAKIAAASIABANIADAIIgQAAIgCgFIgBgCQgDAFgGACQgDACgGAAQgJgBgFgFgAAAAEQgGABgDABQgDADAAAEQAAADADACQACADAFAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_11.setTransform(1.1,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_12.setTransform(-5.6,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEADQAEACACAEQADAFAAAGQAAAGgDAFQgEAFgFADQAIABAEAFQAEAFAAAIQAAAGgDAFQgCAGgFADQgFADgHACIgUAAgAgSAcIAQAAIALAAQAEAAADgDQACgDAAgEQAAgEgCgEQgCgCgDgBQgEgBgLAAIgOAAgAgSgIIAMAAIALAAQAFgBACgCQADgCAAgFQAAgEgCgDQgCgCgFAAIgOAAIgKAAg");
	this.shape_13.setTransform(-13.1,-3.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgZArIgCgNIAHAAQAFAAADgDQADgDACgGIgYg9IARAAIAOArIAPgrIARAAIgWA7IgEALIgEAIIgEAFIgGADIgIABIgJgBg");
	this.shape_14.setTransform(-24.2,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIABgEQACgEAFgCQADgDAHAAQAHAAAHACIgCAMIgIgBQgDAAgCACQgBABgBAFIAAAFIANAAIAAAMIgNAAIAAAxg");
	this.shape_15.setTransform(-29.2,-3.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_16.setTransform(-33.2,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_17.setTransform(-38.7,-3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgQAcQgHgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAHgEQAIgDAIAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgHAAgJgFgAgKgNQgFAEAAAJQAAAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_18.setTransform(-45.8,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAZArIAAhDIgRBDIgQAAIgQhDIAABDIgQAAIAAhVIAaAAIAOA6IAPg6IAaAAIAABVg");
	this.shape_19.setTransform(-54.5,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_20.setTransform(148.6,55.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMAAgHgIg");
	this.shape_21.setTransform(142.4,56.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGAAgIQAAgEADgEQABgEAEgCIAIgDIAJgBQALgCAGgBIAAgDQAAgGgCgEQgFgDgHAAQgGAAgFACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgBAHgBQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFACADIgMAAIgCgIQgGAGgFABQgEACgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgBACAAACQAAAFADADQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgHIAAgDIgQAEg");
	this.shape_22.setTransform(135.9,56.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAiIAAAIIgKAAIAAhVIALAAIAAAfQAGgIAKAAQAFAAAFACQAFACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgGgKgAgMgGQgEAGAAALQAAALACAFQAGAIAIAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgHAAgFAGg");
	this.shape_23.setTransform(129.5,55.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGABAGABQAFACADAEQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIADIAQAEQAEABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGADgHgBQgLAAgGgEg");
	this.shape_24.setTransform(119.6,56.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgEgGgHAAQgGAAgGAGg");
	this.shape_25.setTransform(113.1,55.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_26.setTransform(106.6,56.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_27.setTransform(100,56.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAEgDAFAAQAJAAAFAEQAGAEAEAIQADAHAAAJQAAAKgEAGQgDAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgCgEIAAAfgAgMgcQgEAGgBAMQABALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_28.setTransform(93.5,57.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIALgBQABAGADAEQAFACAGAAQAHABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgDQgCgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGABAGABQAGACACAEQADAEAAAGIgKABQAAgFgEgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIADIAPAEQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGADgHgBQgMAAgFgEg");
	this.shape_29.setTransform(87,56.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_30.setTransform(80.7,56.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_31.setTransform(75.8,56.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgEAGg");
	this.shape_32.setTransform(225.7,40.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_33.setTransform(219.3,41.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_34.setTransform(212.6,41.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_35.setTransform(204.4,41.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_36.setTransform(198.6,41.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_37.setTransform(193.8,41.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEADADIgLAAIgCgHQgGAEgGACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_38.setTransform(188,41.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_39.setTransform(181.3,41.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAGACQAFACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgFAGgBALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_40.setTransform(174.9,40.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_41.setTransform(164.7,41.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAFQACAEAAAIIAAAog");
	this.shape_42.setTransform(158,40.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgkIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_43.setTransform(153.1,40.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIAKgBQACAGAEADQAEAEAFAAQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQADAEABAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIADACIAJADIAQAFQAEABADADQACAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_44.setTransform(145,41.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_45.setTransform(138.7,41.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgkIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_46.setTransform(133.7,40.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFABgDQADgFADgCIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgBACAAAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg");
	this.shape_47.setTransform(128.7,41.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgFgGgGAAQgHAAgEAGg");
	this.shape_48.setTransform(121.8,40.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAEgDAFAAQAJAAAGAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgCgEIAAAfgAgMgcQgEAGgBAMQABALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_49.setTransform(115.6,42.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_50.setTransform(108.7,41.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgShBIgDgKIgCAKIgSBBIgLAAIgXhVIALAAIANA3IAEASIAEgQIAQg5IANAAIAMArQAFAQACAOIAEgTIAOg2IALAAIgXBVg");
	this.shape_51.setTransform(96.4,40.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgGgGgKQgFgKAAgMQAAgMAFgLQAGgLAJgFQAKgGAMABQAJAAAIACQAIADAEAGQAEAFACAJIgKADQgCgGgDgEQgDgEgFgDQgFgBgHAAQgHgBgFADQgGACgDAEQgEAEgCAFQgDAIAAAIQAAALAEAIQAEAIAHADQAIAEAHAAQAIAAAHgDQAHgCADgDIAAgQIgZAAIAAgKIAlAAIAAAfQgJAHgJADQgJAEgJAAQgMAAgKgGg");
	this.shape_52.setTransform(86,40.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFADAHAAQAGgBAFgCQAFgCADgDQACgEAAgDQAAgEgCgEQgDgCgFgCIgOgFQgMgDgFgBQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgGAHgDQAHgCAJAAQAJAAAHACQAHAEAEAGQAEAFAAAJIgKAAQgBgIgFgEQgFgEgKAAQgKAAgEADQgFAEAAAFQAAAFADADQAEADAMAEQAOADAFACQAIACADAFQAEAGAAAHQAAAGgEAGQgEAHgHADQgIAEgJAAQgKAAgIgEg");
	this.shape_53.setTransform(77.3,40.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E6FFFF").s().p("AvEEsIAApXIeJAAIAAJXg");
	this.shape_54.setTransform(158.1,51.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_55.setTransform(0.6,13);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_56.setTransform(-5.4,11.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_57.setTransform(-11.2,11.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_58.setTransform(-17.9,11.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_59.setTransform(-24.7,13);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_60.setTransform(-32.9,11.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_61.setTransform(-39.1,13);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_62.setTransform(-45.6,13);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_63.setTransform(-50.3,11.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_64.setTransform(-55.4,11.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_65.setTransform(37.1,-2.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_66.setTransform(30.4,-2.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_67.setTransform(25.8,-3.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_68.setTransform(22.8,-3.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_69.setTransform(17.8,-2.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_70.setTransform(9.5,-2.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_71.setTransform(2.9,-2.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_72.setTransform(-2.9,-2.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_73.setTransform(-7.6,-3.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_74.setTransform(-12.9,-2.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_75.setTransform(-17.9,-3.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_76.setTransform(-24.4,-2.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_77.setTransform(-30.2,-2.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_78.setTransform(-35.2,-3.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_79.setTransform(-39.9,-2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_80.setTransform(-46.2,-2.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_81.setTransform(-54.5,-3.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_82.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_54},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.Mod_bearer_req = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape.setTransform(-14.2,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgTAcQgHgGgCgJIAQgCQABAEAEADQADACAFABQAGgBADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgGgCQgSgFgGgDQgHgFAAgJQAAgHAGgGQAHgFANgBQAMAAAHAFQAFAEADAIIgPACQgBgDgEgCQgDgCgEAAQgGAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIACADIAOAFQANADAGAEQAFADAAAIQAAAJgHAHQgHAFgOAAQgMAAgIgEg");
	this.shape_1.setTransform(-19.7,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_2.setTransform(-26.2,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_3.setTransform(-33.2,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAOAsIAAggQgDAEgFADQgFACgEAAQgLAAgHgIQgIgJAAgPQAAgPAIgIQAHgJAMAAQAEABAFACQAEACAEAGIAAgJIAPAAIAABVgAgJgZQgDAFAAAKQAAAKADAEQAFAEAEABQAGAAAEgGQAEgEABgKQAAgKgFgEQgDgFgHABQgEgBgFAFg");
	this.shape_4.setTransform(-40.7,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_5.setTransform(-47.6,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASArIgNgTIgIgMIgFgEIgJgBIgEAAIAAAkIgRAAIAAhVIAlAAQANAAAGADQAGABAEAHQADAFAAAIQAAAKgFAGQgGAFgLACQAGADADAFQAEADAGAKIALARgAgVgFIAOAAQALAAADgBQADgCACgDQACgCgBgEQAAgEgBgCQgDgEgEAAIgMgBIgOAAg");
	this.shape_6.setTransform(-54.8,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_7.setTransform(18.5,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_8.setTransform(12.3,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAEAAQAGAAAFADIgFAPQgEgDgDAAQgEAAgDACQgBACgBAFQgBAFAAAPIAAATg");
	this.shape_9.setTransform(7.2,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEgBQAFgCAIgBQALgCAEgDIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALAAAFACQAFADADAEQACAEgBAKIAAASIABANIADAIIgQAAIgCgFIgBgCQgDAFgGACQgDACgGAAQgJgBgFgFgAAAAEQgGABgDABQgDADAAAEQAAADADACQACADAFAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_10.setTransform(1.1,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_11.setTransform(-5.6,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgjArIAAhVIAiAAIAPABQAFABAEADQAEACACAEQADAFAAAGQAAAGgDAFQgEAFgFADQAIABAEAFQAEAFAAAIQAAAGgDAFQgCAGgFADQgFADgHACIgUAAgAgSAcIAQAAIALAAQAEAAADgDQACgDAAgEQAAgEgCgEQgCgCgDgBQgEgBgLAAIgOAAgAgSgIIAMAAIALAAQAFgBACgCQADgCAAgFQAAgEgCgDQgCgCgFAAIgOAAIgKAAg");
	this.shape_12.setTransform(-13.1,-3.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgZArIgCgNIAHAAQAFAAADgDQADgDACgGIgYg9IARAAIAOArIAPgrIARAAIgWA7IgEALIgEAIIgEAFIgGADIgIABIgJgBg");
	this.shape_13.setTransform(-24.2,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgLAsIAAgxIgJAAIAAgMIAJAAIAAgFQAAgIABgEQACgEAFgCQADgDAHAAQAHAAAHACIgCAMIgIgBQgDAAgCACQgBABgBAFIAAAFIANAAIAAAMIgNAAIAAAxg");
	this.shape_14.setTransform(-29.2,-3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgHArIAAg9IAPAAIAAA9gAgHgaIAAgQIAPAAIAAAQg");
	this.shape_15.setTransform(-33.2,-3.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_16.setTransform(-38.7,-3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgQAcQgHgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAHgEQAIgDAIAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgHAAgJgFgAgKgNQgFAEAAAJQAAAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_17.setTransform(-45.8,-2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAZArIAAhDIgRBDIgQAAIgQhDIAABDIgQAAIAAhVIAaAAIAOA6IAPg6IAaAAIAABVg");
	this.shape_18.setTransform(-54.5,-3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAFAAAIQAAAGgCAGQgDAEgDAEQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgCgHABIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape_19.setTransform(109.5,39.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_20.setTransform(102.1,40.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_21.setTransform(95.2,39.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_22.setTransform(88.8,40.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_23.setTransform(81.1,39.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_24.setTransform(73.5,40.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_25.setTransform(215.8,24);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_26.setTransform(210.8,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKABQABAGADABQADADAHABQAHgBAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJABQgLgBgHgFgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_27.setTransform(203.9,26.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_28.setTransform(199.3,24.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgEQACgDADgDIAHgCIAKgCQALgCAHgCIAAgCQgBgHgDgDQgEgDgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAADACAEIgKAAIgCgHQgHAFgFACQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBACgBAEQABADADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_29.setTransform(193.5,25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_30.setTransform(188.5,24);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_31.setTransform(180.1,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_32.setTransform(173.5,23.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_33.setTransform(168.5,24);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_34.setTransform(160.1,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_35.setTransform(155.2,24);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_36.setTransform(146.8,23.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_37.setTransform(141.8,24);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFABgEQADgDADgDIAHgCIAKgCQALgCAHgCIAAgCQgBgHgDgDQgEgDgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAADACAEIgKAAIgCgHQgHAFgFACQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBACgBAEQABADADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_38.setTransform(136.8,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAIAAAHAEQAFAEAEAIQADAHAAAJQAAAKgDAGQgEAIgGAEQgHAEgHAAQgEAAgFgCQgEgCgDgEIAAAfgAgLgcQgFAGgBAMQABALAFAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgFAHg");
	this.shape_39.setTransform(130.3,26.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_40.setTransform(120.1,25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_41.setTransform(113.5,23.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_42.setTransform(108.5,24);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_43.setTransform(100.1,23.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_44.setTransform(94,25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_45.setTransform(89.2,24);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_46.setTransform(86.1,23.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKgkIgDgLIgMAvIgKAAIgTg9IALAAIAJAjIAEANIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_47.setTransform(80.5,25);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEQABAAAAABQAAAAABAAQABABAAAAQABAAABAAIAIAEIAQAEQAEABACAEQADADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgMAAgFgGg");
	this.shape_48.setTransform(73.1,25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_49.setTransform(233.5,9.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_50.setTransform(228.6,8.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgShAIgDgKIgCAKIgSBAIgLAAIgXhVIALAAIANA4IAEARIAEgQIAQg5IANAAIAMAqQAFARACAOIAEgSIAOg3IALAAIgXBVg");
	this.shape_51.setTransform(217.8,8.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgFgGgKQgFgLAAgNQAAgLAFgLQAGgLAJgFQAKgGAMAAQAJABAIADQAIADAEAFQAEAGACAIIgKADQgCgGgDgFQgDgDgFgCQgFgCgHAAQgHAAgFACQgGACgDAEQgEAEgCAEQgDAIAAAJQAAALAEAIQAEAHAHAFQAIADAHAAQAIAAAHgCQAHgEADgDIAAgQIgZAAIAAgJIAlAAIAAAfQgJAHgJADQgJAEgJgBQgMABgKgGg");
	this.shape_52.setTransform(207.4,8.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgDgFgHQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFADAHgBQAGAAAFgCQAFgCADgDQACgDAAgEQAAgFgCgCQgDgDgFgDIgOgDQgMgDgFgCQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgFAHgDQAHgDAJgBQAJABAHADQAHADAEAGQAEAGAAAHIgKABQgBgIgFgEQgFgFgKABQgKAAgEAEQgFADAAAFQAAAFADADQAEADAMAEQAOACAFADQAIACADAFQAEAGAAAGQAAAHgEAHQgEAFgHAEQgIAEgJgBQgKABgIgEg");
	this.shape_53.setTransform(198.8,8.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_54.setTransform(188.1,9.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_55.setTransform(181.5,8.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_56.setTransform(176.5,8.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQADAEAAAGIgKABQgBgEgDgEQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_57.setTransform(168.4,9.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_58.setTransform(163.8,8.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFADQADADAHAAQAHAAADgCQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFACADAEQADAEAAAGIgKABQgBgEgDgEQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIACIAQAFQAEABACADQADAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgMAAgFgEg");
	this.shape_59.setTransform(159.1,9.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_60.setTransform(152.8,9.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_61.setTransform(146.1,9.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AARAsIAAgfQgDAEgEACQgFACgEAAQgLAAgIgJQgIgJAAgOQAAgJADgIQADgHAHgEQAGgEAHAAQALAAAHAKIAAgIIAJAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAFgGAAgLQgBgMgFgGQgFgHgGAAQgHAAgEAGg");
	this.shape_62.setTransform(139.3,10.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_63.setTransform(132.8,9.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_64.setTransform(128,9.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_65.setTransform(118.3,8.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAVA8IACANIAFgOIAUg7IAQAAIAABVg");
	this.shape_66.setTransform(109.2,8.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAVA8IACANIAFgOIAUg7IAQAAIAABVg");
	this.shape_67.setTransform(99.2,8.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_68.setTransform(87.5,9.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_69.setTransform(80.8,8.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_70.setTransform(73.9,8.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E6FFFF").s().p("At0FoIAArPIbpAAIAALPg");
	this.shape_71.setTransform(153.2,28.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_72.setTransform(0.6,13);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_73.setTransform(-5.4,11.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_74.setTransform(-11.2,11.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_75.setTransform(-17.9,11.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_76.setTransform(-24.7,13);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_77.setTransform(-32.9,11.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_78.setTransform(-39.1,13);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_79.setTransform(-45.6,13);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_80.setTransform(-50.3,11.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_81.setTransform(-55.4,11.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_82.setTransform(37.1,-2.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_83.setTransform(30.4,-2.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_84.setTransform(25.8,-3.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_85.setTransform(22.8,-3.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_86.setTransform(17.8,-2.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_87.setTransform(9.5,-2.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_88.setTransform(2.9,-2.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_89.setTransform(-2.9,-2.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_90.setTransform(-7.6,-3.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_91.setTransform(-12.9,-2.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_92.setTransform(-17.9,-3.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_93.setTransform(-24.4,-2.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_94.setTransform(-30.2,-2.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_95.setTransform(-35.2,-3.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_96.setTransform(-39.9,-2.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_97.setTransform(-46.2,-2.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_98.setTransform(-54.5,-3.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_99.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_71},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.ho_request_ack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape.setTransform(14.5,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgVAnQgGgGAAgIIAAgCIATADQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACAEAAQAHgBADgCQACgBABgCIABgIIAAgJQgHAKgLAAQgMAAgIgLQgFgIAAgLQAAgQAHgJQAIgIALAAQAKAAAIAKIAAgIIAPAAIAAA2QAAALgBAGQgCAFgEADQgDADgFADQgGABgIABQgPgBgHgFgAgJgbQgDAFAAAKQAAAJADAEQAEAFAFAAQAGAAAEgFQAEgEAAgJQAAgKgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_1.setTransform(7.3,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_2.setTransform(0,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgWAWQgGgIAAgNQAAgPAIgJQAIgJAMAAQANAAAIAJQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPAAgIgKgAgIgPQgDAEAAAGIAXAAQAAgGgDgEQgEgEgFAAQgEAAgEAEg");
	this.shape_3.setTransform(-6.9,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_4.setTransform(-11.9,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAKAfIgKgnIgKAnIgQAAIgUg9IARAAIALAoIALgoIAPAAIAKAoIAMgoIAQAAIgUA9g");
	this.shape_5.setTransform(-18.2,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgPAdQgIgEgEgIQgEgHAAgKQAAgIAEgIQAEgHAIgEQAGgFAJAAQAOAAAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgIAAgHgDgAgKgOQgFAGABAIQgBAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgIgEgGQgFgEgGAAQgFAAgFAEg");
	this.shape_6.setTransform(-26.5,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_7.setTransform(-33.9,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AALArIgPgcIgHAIIAAAUIgRAAIAAhVIARAAIAAAtIASgVIAUAAIgVAWIAXAng");
	this.shape_8.setTransform(-40.6,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJANAAQALAAAHAGQAHAEADAKIgRADQAAgFgDgCQgDgCgFAAQgFAAgEADQgDAFAAAKQAAAKADAEQAEAFAFAAQAFAAADgCQADgEABgGIAQADQgCALgHAGQgHAFgMAAQgNABgIgJg");
	this.shape_9.setTransform(-47.5,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAYArIgHgUIghAAIgHAUIgTAAIAihVIARAAIAiBVgAgLAJIAXAAIgMgfg");
	this.shape_10.setTransform(-55.2,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape_11.setTransform(44.4,-3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgTAbQgHgFgCgJIARgDQAAAGADACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgCQgTgEgGgEQgHgEAAgIQAAgJAGgFQAHgGANABQAMAAAGADQAHAEACAJIgPADQgCgEgDgCQgCgCgFAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIACADIAPAEQANADAFAEQAFAEAAAIQAAAIgHAGQgHAHgPAAQgLAAgIgGg");
	this.shape_12.setTransform(39,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_13.setTransform(32.4,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_14.setTransform(25.4,-1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAOArIAAgeQgEADgEADQgFACgFABQgKAAgHgJQgIgJAAgPQAAgPAHgIQAIgJAMABQAFAAAEACQAFADADAFIAAgJIAPAAIAABUgAgIgZQgEAFgBAKQABAKAEAEQADAFAFgBQAGAAAEgEQAFgFAAgKQgBgKgEgEQgEgEgFgBQgFABgEAEg");
	this.shape_15.setTransform(18,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_16.setTransform(11.1,-2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgDAAIAAAkIgSAAIAAhVIAlAAQAMAAAHACQAGADAEAFQADAHABAHQgBAKgFAGQgGAGgLABQAGADADAEQAEAEAGAKIALARgAgUgGIAMAAQAMAAADgBQADgBACgCQABgDABgEQAAgEgCgDQgDgDgEAAIgMAAIgNAAg");
	this.shape_17.setTransform(3.9,-3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGACgCQADgCAFAAQAFAAAFADIgFAPQgEgDgDAAQgEAAgCACQgCACgBAFQgCAFAAAPIAAATg");
	this.shape_18.setTransform(-6.1,-2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgJAMABQANAAAIAJQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPAAgIgLgAgIgPQgDAEAAAHIAXAAQAAgHgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_19.setTransform(-12.2,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgGAfIgZg9IARAAIALAeIADALIACgFIACgGIALgeIARAAIgZA9g");
	this.shape_20.setTransform(-18.9,-2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgQAcQgHgEgEgHQgEgIAAgJQAAgIAEgIQAEgIAHgEQAIgDAIAAQAOAAAJAJQAJAIAAAOQAAAOgJAJQgJAKgOAAQgIAAgIgFgAgKgNQgFAEABAJQgBAJAFAFQAEAFAGAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgGAAgEAFg");
	this.shape_21.setTransform(-25.8,-2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_22.setTransform(-33.4,-3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_23.setTransform(-40.6,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgWAbQgGgFAAgIQAAgFACgEQADgFAEgBQAFgCAIgBQALgCAEgDIAAgBQABgFgDgCQgCgCgGAAQgEAAgDABQgCACgBAFIgQgDQADgJAGgFQAGgDAMAAQALAAAFACQAFADADAEQABAEAAAKIAAASIABANIADAIIgQAAIgCgFIgBgCQgDAFgGACQgDACgGAAQgJgBgFgFgAAAAEQgGABgDABQgDADAAAEQAAADADACQACADAFAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_24.setTransform(-47.5,-2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AARArIAAglIghAAIAAAlIgRAAIAAhVIARAAIAAAiIAhAAIAAgiIARAAIAABVg");
	this.shape_25.setTransform(-55.2,-3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_26.setTransform(131,184.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_27.setTransform(128.4,181.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_28.setTransform(122.6,181.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IALAAIANAkIADANIAEgNIAOgkIALAAIgYA9g");
	this.shape_29.setTransform(116.3,181.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_30.setTransform(110,181.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_31.setTransform(103.1,180.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_32.setTransform(96.7,181.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGAAgIQAAgEADgEQABgEAEgCIAIgDIAJgBQALgBAGgCIAAgDQAAgGgCgEQgFgDgHAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAEACAEIgMAAIgCgIQgGAGgFABQgEACgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQAAAFADACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_33.setTransform(90,181.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_34.setTransform(83.4,180.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_35.setTransform(203.3,166.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgDgGAAQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_36.setTransform(196.7,165);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_37.setTransform(191.7,165.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKQAAgCgDgCQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgDgDQgCgEgGAAQgFAAgEADQgDACgCAEQgCAFAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAFADQADADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_38.setTransform(181.7,166.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_39.setTransform(175.1,166.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_40.setTransform(169.3,166.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_41.setTransform(164.6,164.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_42.setTransform(161.1,166.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_43.setTransform(155.3,166.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAEgDAFAAQAJAAAGAEQAFAEAEAIQADAHAAAJQAAAKgEAGQgDAIgGAEQgHAEgHAAQgFAAgEgCQgEgCgCgEIAAAfgAgMgcQgEAGgBAMQABALAEAGQAFAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgEgGQgGgGgGAAQgGAAgGAHg");
	this.shape_44.setTransform(148.9,167.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_45.setTransform(138.7,166.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_46.setTransform(133.7,165.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_47.setTransform(125.3,166.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAGAHABQAHgBAFgGQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_48.setTransform(118.5,167.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFABgDQADgEADgDIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFADQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_49.setTransform(112,166.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIALgCQABAGADADQAFAEAFAAQAIgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgDgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIACAEIADACIAJADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgDAFgGACQgGACgHABQgLAAgHgGg");
	this.shape_50.setTransform(105.7,166.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFADQADAEAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIADIAQAFQAEABACAEQADADAAAGQAAAFgDAFQgDAFgGACQgGACgHABQgMAAgFgGg");
	this.shape_51.setTransform(99.7,166.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_52.setTransform(93.4,166.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFAAAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_53.setTransform(85.1,166.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgEgKQgFgMAAgLQAAgNAFgKQAFgKAJgFQAKgGALAAQANAAAIAHQAJAHAEALIgMADQgCgJgHgEQgFgEgIgBQgJAAgHAFQgHAFgCAIQgDAIAAAIQAAALADAHQADAIAHAFQAGADAIAAQAJAAAGgFQAHgFACgLIAMADQgEAOgJAHQgJAHgNAAQgOABgIgGg");
	this.shape_54.setTransform(213.8,149.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgHIgFgBIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAGAAAGQAAAKgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgBQAFgCACgDQACgFAAgEQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_55.setTransform(205.4,149.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgHIgFgBIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAGAAAGQAAAKgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgBQAFgCACgDQACgFAAgEQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_56.setTransform(196.8,149.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_57.setTransform(185.4,150.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADADQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgHIAAgDIgQAEg");
	this.shape_58.setTransform(178.7,150.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIALgBQABAGADAEQAEACAGAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGAAAGACQAGACACAEQACAEACAGIgLABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJADIAPAEQAFABADADQACAFAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_59.setTransform(169,150.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgDgEQgFgDgHAAQgGAAgEACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFABADIgLAAIgBgIQgGAGgFABQgFACgHAAQgJAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAFAEADQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgHIAAgDIgRAEg");
	this.shape_60.setTransform(162.7,150.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAbIAvAAIAAAJIgvAAIAAAdIA0AAIAAAKg");
	this.shape_61.setTransform(152.2,149.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_62.setTransform(143.7,149.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_63.setTransform(132.7,150.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEAAgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_64.setTransform(126.1,149.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_65.setTransform(121.1,149.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_66.setTransform(112.7,150.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_67.setTransform(107.8,149.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_68.setTransform(101.1,149.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_69.setTransform(96,150.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_70.setTransform(89.4,150.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIAKgBQABAGAFAEQADACAHAAQAHABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgDQgCgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGAAAGACQAFACADAEQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIADIAQAEQAEABACADQADAFAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgMAAgFgEg");
	this.shape_71.setTransform(83,150.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_72.setTransform(219.9,135.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAFACQAGACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_73.setTransform(213.5,134.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_74.setTransform(203.3,135.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgkIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_75.setTransform(198.3,134.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_76.setTransform(191.7,135.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_77.setTransform(185.9,135.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_78.setTransform(179.3,135.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_79.setTransform(174.6,134.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEADADIgLAAIgCgHQgGAEgGACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_80.setTransform(170,135.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgkIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_81.setTransform(165,134.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_82.setTransform(160,135.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_83.setTransform(153.3,135.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAEQAGAFACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCAMgHAFQgHAGgKABQgMAAgHgJg");
	this.shape_84.setTransform(147.2,135.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgkIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_85.setTransform(139,134.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_86.setTransform(134,135.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_87.setTransform(127.3,135.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_88.setTransform(122.5,135.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQABgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEADgGAAQgLgBgFgFgAgCAEQgGAAgDACQgDABgBACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_89.setTransform(116.7,135.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgaAsIAAhVIAJAAIAAAIQAEgFAEgCQAFgDAEAAQAJAAAGAEQAGAEADAIQADAHAAAJQAAAKgDAGQgEAIgHAEQgGAEgHAAQgFAAgDgCQgFgCgDgEIAAAfgAgLgcQgGAGAAAMQAAALAGAGQAEAFAHAAQAGAAAFgFQAFgGAAgMQAAgMgFgGQgFgGgGAAQgGAAgFAHg");
	this.shape_90.setTransform(110.2,136.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIAKgBQACAGADADQAFAEAFAAQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAFACADADQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_91.setTransform(103.7,135.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_92.setTransform(97.4,135.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgFAEgCIAIgCIAJgCQALgCAHgCIAAgCQAAgGgDgDQgFgEgHAAQgGAAgFADQgDADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgBgHQgGAEgFACQgFADgHAAQgJgBgGgFgAgCAEQgGAAgDACQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgRAEg");
	this.shape_93.setTransform(90.7,135.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_94.setTransform(85.9,135.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgkIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_95.setTransform(81.8,134.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGAAgIQABgEACgEQACgEADgCIAHgDIAKgBQAMgCAFgBIAAgDQAAgHgCgDQgEgDgIAAQgGAAgFACQgDADgBAHIgLgCQABgGAEgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIAAAKIAAANIABASQABAEACAEIgLAAIgDgIQgGAFgFADQgEABgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBACAAACQgBAEAEAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_96.setTransform(230.5,120.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAHAAQAHABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgEQAAgFACgDIAFgHIAHgDIAJAAQAGAAAGABQAFACADAEQACAEABAGIgKABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADAEAAAFQAAAFgDAFQgEAEgFADQgGADgHgBQgLAAgGgEg");
	this.shape_97.setTransform(220.8,120.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_98.setTransform(214.5,120.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgHAAgFAGg");
	this.shape_99.setTransform(207.7,119);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_100.setTransform(201.2,120.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_101.setTransform(196.5,119);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_102.setTransform(192.4,120.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_103.setTransform(185.9,120.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_104.setTransform(181.3,119);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_105.setTransform(173.3,119);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_106.setTransform(167.1,120.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_107.setTransform(162.6,119);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAFQACAEAAAJIAAAng");
	this.shape_108.setTransform(158,119);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AANAfIgKgkIgDgLIgMAvIgKAAIgTg9IAKAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_109.setTransform(150.3,120.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAEgGAEQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgCACgDQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_110.setTransform(138.8,119);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_111.setTransform(130.3,119);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_112.setTransform(122.7,120.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_113.setTransform(112.7,120.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAANAFAFQAEAFAHAAQAGAAAEgDQAFgEABgIIAKACQgCAKgHAGQgHAHgKgBQgMAAgHgIg");
	this.shape_114.setTransform(106.5,120.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_115.setTransform(101.8,120.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_116.setTransform(96,120.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_117.setTransform(89.4,120.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgJIAKgCQABAGAFAEQADACAHAAQAHABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgDIAJAAQAGAAAGABQAFACADAEQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFACIAIAEIAQAEQAEABACAEQADAEAAAFQAAAFgDAFQgDAEgGADQgGADgHgBQgMAAgFgEg");
	this.shape_118.setTransform(83,120.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_119.setTransform(236.7,104.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIABQgFgBgDgBg");
	this.shape_120.setTransform(231.7,103.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_121.setTransform(223.3,104.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_122.setTransform(216.5,106);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgEABgIQAAgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgDIAAgCQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgGAEgGACQgEACgHABQgKgBgFgFgAgBAEQgHABgDABQgCABgCADQgCABABAEQAAAEADACQADADAGAAQAFAAAFgDQAFgCACgFQABgDAAgIIAAgDIgPAEg");
	this.shape_123.setTransform(210,104.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEADAGABQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_124.setTransform(203.7,104.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQAAAGAEADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQADAEAAAGIgKABQAAgEgEgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgFg");
	this.shape_125.setTransform(197.7,104.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_126.setTransform(191.4,104.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_127.setTransform(183.1,104.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_128.setTransform(170.9,103.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgKgFgGgLQgFgKAAgMQAAgMAFgLQAGgLAJgFQAKgGAMABQAJAAAIACQAIADAEAGQAEAFACAJIgKADQgCgGgDgEQgDgEgFgDQgFgBgHAAQgHgBgFADQgGACgDAEQgEAEgCAFQgDAHAAAJQAAALAEAIQAEAIAHAEQAIADAHAAQAIAAAHgDQAHgCADgEIAAgPIgZAAIAAgKIAlAAIAAAfQgJAGgJAEQgJAEgJAAQgMAAgKgGg");
	this.shape_129.setTransform(162,103.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AgiArIAAhVIAdAAQAJAAAFABQAIACAEAFQAIAFADAJQAEAJAAALQAAAJgDAIQgDAIgDAFQgEAFgDADIgLADQgGACgHAAgAgXAhIASAAQAHAAAGgCIAHgEQAEgEACgHQACgHAAgJQABgNgFgIQgFgGgFgDQgFgCgJAAIgSAAg");
	this.shape_130.setTransform(153.2,103.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAzAAIAAAKg");
	this.shape_131.setTransform(144.9,103.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AgaArIAAhVIALAAIAABLIAqAAIAAAKg");
	this.shape_132.setTransform(137.6,103.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgShBIgDgKIgCAKIgSBBIgLAAIgXhVIALAAIANA3IAEASIAEgQIAQg5IANAAIAMArQAFAQACAOIAEgTIAOg2IALAAIgXBVg");
	this.shape_133.setTransform(128.4,103.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAnQgJgHgGgKQgEgKAAgLQAAgUAMgNQALgLARAAQAMAAAKAFQAJAGAFAKQAFAKAAAMQAAANgGAKQgEALgLAFQgJAGgLAAQgLgBgKgFgAgTgZQgKAIABATQAAAPAIAJQAIAJAMgBQAMAAAJgJQAIgIAAgRQAAgJgEgIQgDgIgGgFQgIgDgIAAQgLgBgIAJg");
	this.shape_134.setTransform(118.1,103.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_135.setTransform(109,103.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AAVArIgfgrIgNANIAAAeIgMAAIAAhVIAMAAIAAAqIApgqIAPAAIgjAjIAlAyg");
	this.shape_136.setTransform(101.2,103.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAnQgJgGgFgLQgEgLAAgLQAAgNAFgKQAFgKAKgFQAJgGAKABQANgBAJAHQAJAHAEALIgLAEQgEgKgFgFQgGgDgJAAQgJgBgGAFQgHAFgDAIQgCAIAAAIQgBAKAEAJQADAHAHAFQAGADAIAAQAJABAHgGQAGgGADgKIALADQgDAOgKAHQgJAIgOAAQgMAAgJgGg");
	this.shape_137.setTransform(92.5,103.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAXIAcAAIgJgWIgGgSQgBAIgDAJg");
	this.shape_138.setTransform(84.1,103.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_139.setTransform(205.7,88.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgEgFgGQgEgHAAgIIAKgBQABAGADAEQADAEAGADQAFACAHABQAGAAAFgCQAFgCADgEQACgDAAgFQAAgDgCgEQgDgDgFgBIgOgFQgMgCgFgCQgGgDgDgFQgDgFAAgFQAAgHAEgGQADgGAHgDQAHgDAJAAQAJAAAHADQAHAEAEAGQAEAFAAAJIgKAAQgBgIgFgEQgFgEgKgBQgKAAgEAFQgFADAAAGQAAAEADADQAEADAMADQAOADAFADQAIACADAGQAEAFAAAGQAAAIgEAGQgEAGgHADQgIADgJAAQgKAAgIgDg");
	this.shape_140.setTransform(198,88.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAaIAvAAIAAAJIgvAAIAAAeIA0AAIAAAKg");
	this.shape_141.setTransform(190.2,88.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_142.setTransform(181.7,88.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AAUAlQgKAFgKAAQgMAAgJgFQgJgHgGgKQgFgKAAgLQAAgNAFgLQAGgKAJgGQAJgFAMAAQALAAAKAGQAJAFAFAKQAGALAAANQgBAJgDAJQgDAIgHAGQAIAGAHACIgDAIQgJgDgKgHgAgUgbQgJAIAAASQAAAQAIAIQAIAJANAAQAGAAAFgCQgFgEgGgBIADgIQAJACAGAGQALgJAAgRQAAgLgEgHQgEgJgHgEQgGgEgIAAQgMAAgIAJg");
	this.shape_143.setTransform(172.7,88.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgyAAIAAAaIAvAAIAAAJIgvAAIAAAeIA0AAIAAAKg");
	this.shape_144.setTransform(164.2,88.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgGIgFgCIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGACADAFQAEAGAAAIQAAAJgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_145.setTransform(156.1,88.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgGIgFgCIgGgBIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGACADAFQAEAGAAAIQAAAJgGAGQgGAFgMACIAHAEIAJALIAPAYgAgZgEIAYAAQAHAAAEgCQAFgBACgDQACgFAAgDQAAgHgEgDQgFgFgJAAIgaAAg");
	this.shape_146.setTransform(144.1,88.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAaIAuAAIAAAJIguAAIAAAeIAzAAIAAAKg");
	this.shape_147.setTransform(135.5,88.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIghhVIAMAAIAWA9IAEAPIAFgPIAXg9IALAAIghBVg");
	this.shape_148.setTransform(127.3,88.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgVAmQgJgGgGgJQgEgKAAgMQAAgUALgNQAMgLARgBQAMAAAKAHQAJAFAFAKQAFALAAALQAAANgGALQgFAKgJAFQgKAFgLAAQgLABgKgHgAgUgaQgJAJAAASQAAAQAJAJQAIAJAMAAQANAAAIgJQAIgKAAgQQAAgKgEgHQgDgIgHgEQgGgFgJAAQgLABgJAHg");
	this.shape_149.setTransform(118.7,88.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgjArIAAhVIAeAAQAJAAAFABQAHACAFAEQAIAGADAJQADAJABALQgBAKgCAHQgCAIgEAEQgDAGgFACIgKAFQgGABgGAAgAgYAhIATAAQAIAAAFgBIAHgFQAEgEACgHQADgHAAgJQAAgNgFgHQgFgIgGgCQgEgCgKAAIgSAAg");
	this.shape_150.setTransform(109.9,88.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshDIAABDIgLAAIAAhVIAMAAIAsBDIAAhDIALAAIAABVg");
	this.shape_151.setTransform(101,88.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AAcArIgLgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgJAZIAbAAIgIgXIgGgSQgBAJgDAHg");
	this.shape_152.setTransform(92.7,88.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgpIgrAAIAAApIgMAAIAAhVIAMAAIAAAjIArAAIAAgjIAMAAIAABVg");
	this.shape_153.setTransform(84.4,88.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_154.setTransform(181.1,74.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_155.setTransform(174.4,72.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_156.setTransform(167.5,72.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_157.setTransform(157.3,74.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_158.setTransform(150.7,72.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_159.setTransform(145.7,73.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAIIAAAYIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_160.setTransform(138,72.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGAAAEgDQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_161.setTransform(131.8,74.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_162.setTransform(125.3,74.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAFACQAGACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALADAFQAGAIAIAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgHAAgEAGg");
	this.shape_163.setTransform(118.9,73);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgFgCgLIAKgBQACAGAEADQAEADAFAAQAIAAADgCQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgEQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFADADADQADAEABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADADIAJACIAQAFQAEABADADQACAFAAAEQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_164.setTransform(109,74.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgFgGgGAAQgHAAgEAGg");
	this.shape_165.setTransform(102.5,73);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_166.setTransform(96,74);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_167.setTransform(89.4,74.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIAKgBQABAGAFADQADADAHAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFADADADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgCACQgEADAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgDAFgGADQgGACgHAAQgMAAgFgEg");
	this.shape_168.setTransform(83,74.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgGAAgGAGg");
	this.shape_169.setTransform(245,57.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_170.setTransform(238.6,58.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFAAgHQgBgFACgEQACgDAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgHgEgCQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABADABAEIgLAAIgBgHQgHAFgEACQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBACgBAEQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_171.setTransform(231.9,58.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIALgCQABAGADAEQAFADAFAAQAIgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgCgCgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAIAJAEIAPAEQAFABADAEQACADAAAGQAAAFgDAFQgDAEgGADQgGACgHABQgLAAgHgGg");
	this.shape_172.setTransform(222.2,58.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_173.setTransform(215.9,58.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_174.setTransform(209.8,58.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_175.setTransform(205.1,58.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_176.setTransform(199.2,58.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_177.setTransform(192.6,58.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgBgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgGgGg");
	this.shape_178.setTransform(186.3,58.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_179.setTransform(180,58.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_180.setTransform(175.1,58.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_181.setTransform(166,58.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_182.setTransform(159.3,57.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_183.setTransform(154.4,57.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQABAGADAEQAFADAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIAIAEIAPAEQAFABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_184.setTransform(146.3,58.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_185.setTransform(140,58.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IAMAAIANAkIADAMIAEgMIAOgkIALAAIgYA9g");
	this.shape_186.setTransform(133.7,58.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_187.setTransform(129.1,58.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_188.setTransform(123.3,58.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgBgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgGgGg");
	this.shape_189.setTransform(117,58.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_190.setTransform(110.7,58.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_191.setTransform(105.8,58.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgFAAgFAGg");
	this.shape_192.setTransform(96.5,57.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_193.setTransform(90,58.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQABgFACgEQACgDADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgHgCgCQgEgEgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABADACAEIgLAAIgDgHQgGAFgFACQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgDABgBACQgBACAAAEQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_194.setTransform(83.4,58.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgXg9IALAAIANAkIAEANIADgNIAOgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_195.setTransform(232.9,44.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_196.setTransform(228.2,42.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_197.setTransform(225.1,42.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_198.setTransform(222.4,42.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_199.setTransform(219.8,42.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAGACQAFACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgFAGgBALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_200.setTransform(215.4,42.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgBAHgCIAAgDQAAgGgEgEQgDgDgIAAQgGAAgEACQgEAEgCAGIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIABAKIAAANIAAASQABAEABAEIgLAAIgBgIQgHAGgEABQgFACgHAAQgJAAgGgEgAgBAEQgHABgDABQgDABgBADQgBABgBADQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgQAEg");
	this.shape_201.setTransform(208.5,43.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_202.setTransform(203.8,42.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_203.setTransform(201.2,42.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQADgEADgCIAIgDIAJgBQAMgBAFgCIAAgDQAAgGgCgEQgFgDgHAAQgHAAgEACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQAAAEADAEIgMAAIgCgIQgFAGgFABQgFACgGAAQgKAAgGgEgAgCAEQgGABgDABQgDABgBADQgCABAAADQAAAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_204.setTransform(196.6,43.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IALAAIAOAkIADANIAEgNIAOgkIALAAIgYA9g");
	this.shape_205.setTransform(190.3,43.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEACgEQACgEADgCIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgEQgEgDgHAAQgHAAgDACQgEAEgCAGIgKgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgGAGgGABQgEACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgCABABADQAAAFADACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_206.setTransform(183.9,43.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_207.setTransform(173.9,43.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgGgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_208.setTransform(167.8,43.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_209.setTransform(163.1,43.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_210.setTransform(157.2,43.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_211.setTransform(150.6,43.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIALgBQABAGADAEQAEACAGAAQAIAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgEQgDgEAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQACAEACAGIgLABQgBgEgDgEQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJADIAPAEQAFABADADQACAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_212.setTransform(144.3,43.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_213.setTransform(138,43.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_214.setTransform(133.1,43.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAFADACQADACAHAAQAHAAAEgCQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgEQAGgFAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLABgHgGgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_215.setTransform(123.8,44.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_216.setTransform(117.3,43.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_217.setTransform(112.7,42.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_218.setTransform(108.7,42.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgGgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_219.setTransform(102.5,43.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_220.setTransform(96,43.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHABAFACQAFADACAEQACAGAAAIIAAAng");
	this.shape_221.setTransform(89.4,42.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgGgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKAAQgMABgHgJg");
	this.shape_222.setTransform(83.2,43.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_223.setTransform(197.8,28);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_224.setTransform(192,28.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_225.setTransform(187,27);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_226.setTransform(183.9,26.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFABgDQADgEADgDIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgGAEgGADQgEACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_227.setTransform(178.6,28.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_228.setTransform(168.6,28.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHAAQAHAAAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgJADgHQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAGAHABQAHgBAFgGQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_229.setTransform(161.8,29.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFAAgHQAAgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgEADQgFACgHAAQgKAAgFgGgAgBAEQgHAAgDACQgCABgCACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_230.setTransform(155.3,28.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQABAGADADQAFAEAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACAEQADADAAAGQAAAFgDAFQgEAFgFACQgGACgHABQgMAAgFgGg");
	this.shape_231.setTransform(149,28.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFADQADAEAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgDgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEABAGIgKABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIADIAQAFQAEABACAEQADADAAAGQAAAFgDAFQgDAFgGACQgGACgHABQgLAAgGgGg");
	this.shape_232.setTransform(143,28.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_233.setTransform(136.7,28.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKIgDgEQgDgCgDAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgDADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_234.setTransform(128.4,28);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_235.setTransform(118.4,27);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIAKgCQABAGAFADQADAEAHAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFACIAIADIAQAFQAEABACAEQADADAAAGQAAAFgDAFQgDAFgGACQgGACgHABQgMAAgFgGg");
	this.shape_236.setTransform(113.6,28.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_237.setTransform(107.3,28.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_238.setTransform(100.6,28.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.988)").s().p("AARAsIAAgfQgDAEgEACQgFACgEAAQgLAAgIgJQgIgJAAgOQAAgJADgIQADgHAHgEQAGgEAHAAQALAAAHAKIAAgIIAJAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAFgGAAgLQgBgMgFgGQgFgHgGAAQgHAAgEAGg");
	this.shape_239.setTransform(93.8,29.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_240.setTransform(87.4,28.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_241.setTransform(82.5,28);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_242.setTransform(245,12.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_243.setTransform(239.2,12.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IALAAIAOAkIADANIAEgNIAOgkIAKAAIgXA9g");
	this.shape_244.setTransform(232.9,12.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_245.setTransform(226.6,12.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgEgGgHAAQgGAAgGAGg");
	this.shape_246.setTransform(219.7,11.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_247.setTransform(213.3,12.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEACQgFABgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_248.setTransform(206.6,12.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGgBQgEABgEACQgEADgCADQgCADAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKgBQAHABAFACQAFADACAEQACAFAAAJIAAAng");
	this.shape_249.setTransform(200,11.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_250.setTransform(190,12.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_251.setTransform(185,11.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQACAGAEAEQAEACAFAAQAIABADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgDQgDgEAAgEQAAgFACgEIAFgGIAHgDIAJgBQAGAAAGACQAGACACAEQADAEABAGIgLABQAAgFgEgDQgDgCgGAAQgHAAgCACQgEADAAADIACAEIADADIAJADIAQAEQAEABADAEQACAEAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_252.setTransform(176.9,12.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_253.setTransform(170.6,12.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_254.setTransform(164,12.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_255.setTransform(159.1,12.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_256.setTransform(153.1,13.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEABgEQADgEADgCIAHgDIAKgBQALgCAHgBIAAgDQgBgGgDgEQgEgDgHAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgKAAIgCgIQgHAGgFACQgEABgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAEgCADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_257.setTransform(146.7,12.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAEgDADQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgCACgDQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgBQgEgCgIAAIgRAAg");
	this.shape_258.setTransform(136.1,11.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_259.setTransform(127.7,11.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_260.setTransform(120,12.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_261.setTransform(111.7,11.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_262.setTransform(106.7,12.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_263.setTransform(99.8,13.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_264.setTransform(95.2,12.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGgBgIQAAgEACgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgDgEQgFgDgHAAQgGAAgFACQgDADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACADADQACADABAEIAAAKIAAANIABASQABAFABADIgLAAIgBgIQgGAGgFACQgFABgHAAQgJAAgGgEgAgCAEQgGABgDABQgDABgBADQgCACAAACQAAAFAEACQADADAGAAQAFAAAFgDQAFgCACgFQABgEABgGIAAgEIgRAEg");
	this.shape_265.setTransform(89.4,12.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_266.setTransform(83.8,11.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E6FFFF").s().p("AurQGMAAAggLIdXAAMAAAAgLg");
	this.shape_267.setTransform(162.2,96.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgNA5QAQgdABgcQAAgKgDgLQgBgJgEgIIgJgSIAHAAQALAPAEAPQAFANAAANQAAAQgGAPQgGAOgIAMg");
	this.shape_268.setTransform(0.6,13);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_269.setTransform(-5.4,11.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_270.setTransform(-11.2,11.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgKAAIgYhIIAABIIgLAAIAAhVIARAAIAUA8IAEAMIAEgNIAUg7IAQAAIAABVg");
	this.shape_271.setTransform(-17.9,11.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AAGA5QgHgMgGgOQgGgPAAgQQAAgNAEgNQAFgPAKgPIAIAAIgJASQgEAIgBAJQgCALgBAKQAAAcARAdg");
	this.shape_272.setTransform(-24.7,13);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_273.setTransform(-32.9,11.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgSAYQgIgJAAgPQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKgBQgMAAgHgIg");
	this.shape_274.setTransform(-39.1,13);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgIQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_275.setTransform(-45.6,13);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_276.setTransform(-50.3,11.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAFQgDAFgGADQAIABAEAFQAEAGAAAHQAAAGgCAFQgDAGgDACQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgBACgDQACgEAAgEQAAgFgDgDQgCgEgFgBQgEgCgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgEQAAgFgCgDQgCgEgEAAQgEgCgIAAIgRAAg");
	this.shape_277.setTransform(-55.4,11.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_278.setTransform(37.1,-2.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_279.setTransform(30.4,-2.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_280.setTransform(25.8,-3.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_281.setTransform(22.8,-3.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgWAcQgGgFABgJQAAgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgDgDQgEgEgHAAQgGAAgFACQgDAEgBAGIgLgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQABAFACADIgLAAIgDgIQgFAGgGABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgCABgCADQgCABABADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_282.setTransform(17.8,-2.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_283.setTransform(9.5,-2.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_284.setTransform(2.9,-2.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgUAYQgIgJAAgPQAAgQAJgJQAIgHALAAQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIAAQgMABgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_285.setTransform(-2.9,-2.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_286.setTransform(-7.6,-3.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_287.setTransform(-12.9,-2.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_288.setTransform(-17.9,-3.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_289.setTransform(-24.4,-2.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHAAQAGAAAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_290.setTransform(-30.2,-2.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_291.setTransform(-35.2,-3.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgQAcQgHgFgCgLIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGADACADQADAEAAAGIgKABQgBgFgDgDQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_292.setTransform(-39.9,-2.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgWAcQgGgFAAgJQABgEACgDQACgEADgDIAHgDIAKgBQAMgBAFgCIAAgDQAAgGgCgDQgEgEgIAAQgGAAgFACQgDAEgBAGIgLgCQABgGAEgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIAAAKIAAANIABASQABAFACADIgLAAIgDgIQgGAGgFABQgEACgGAAQgLAAgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAADQgBAFAEACQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_293.setTransform(-46.2,-2.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AAeArIAAhHIgZBHIgJAAIgZhIIAABIIgLAAIAAhVIARAAIAUA8IADANIAFgOIAUg7IAQAAIAABVg");
	this.shape_294.setTransform(-54.5,-3.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AouCmIAAlLIRdAAIAAFLg");
	this.shape_295.setTransform(-5.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_267},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-12,123.1,33.4);


(lib.handover_request = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgCApQgDgBgCgDIgCgGIgBgMIAAgaIgHAAIAAgNIAHAAIAAgMIAQgKIAAAWIALAAIAAANIgLAAIAAAYIAAAJIABACIADABIAHgCIABANQgFADgIAAQgEAAgDgCg");
	this.shape.setTransform(42,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgSAbQgIgFgCgJIARgCQABAFACACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIgFgDQgTgEgFgEQgIgDAAgJQAAgJAHgFQAGgGANABQAMAAAGADQAGAFADAIIgQADQgBgEgCgCQgEgCgEAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABADIAPAEQANADAFAEQAFAEAAAIQAAAIgHAGQgIAHgOAAQgLAAgHgGg");
	this.shape_1.setTransform(36.5,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPgBgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_2.setTransform(30,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSAdQgFgDgCgFQgCgFAAgJIAAgmIAQAAIAAAdQAAAMABADQABADACABQADACADAAQAEAAADgCQADgDABgDQACgDAAgNIAAgaIAQAAIAAA9IgPAAIAAgJQgEAFgFADQgFADgGAAQgGAAgFgDg");
	this.shape_3.setTransform(23,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAOArIAAgfQgDAEgFADQgFACgFABQgKAAgHgJQgIgJAAgPQAAgPAHgIQAIgIALAAQAGgBAEADQAEADAEAFIAAgJIAPAAIAABUgAgIgZQgFAFAAAKQAAAKAFAEQAEAFAEAAQAGgBAEgFQAFgEgBgKQAAgJgDgFQgEgEgGgBQgGABgDAEg");
	this.shape_4.setTransform(15.5,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPgBgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_5.setTransform(8.6,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASArIgNgSIgIgOIgFgDIgJgBIgDAAIAAAkIgRAAIAAhVIAkAAQAMAAAHADQAGACAEAFQAEAHAAAHQAAAKgGAGQgGAGgLABQAFADAEAEQAEAEAGAKIAKARgAgUgGIAMAAQAMAAADgBQADgBACgCQACgDAAgEQgBgEgCgDQgCgDgEAAIgMAAIgNAAg");
	this.shape_6.setTransform(1.4,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQACgCAFAAQAFAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_7.setTransform(-8.5,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgWAWQgGgIAAgOQAAgOAIgJQAIgIAMAAQANgBAIAKQAIAIAAATIgpAAQABAHADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAEQgHAGgKAAQgPgBgIgKgAgIgPQgDAEAAAHIAXAAQAAgIgDgDQgEgEgFAAQgEAAgEAEg");
	this.shape_8.setTransform(-14.7,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgHAfIgYg9IARAAIAMAeIACALIABgFIADgGIALgeIASAAIgaA9g");
	this.shape_9.setTransform(-21.3,12.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgQAdQgHgFgEgHQgEgHAAgKQAAgIAEgIQAEgHAHgFQAIgDAIAAQAOgBAJAKQAJAIAAAOQAAAOgJAJQgJAKgOAAQgHgBgJgDgAgKgNQgFAEAAAJQAAAJAFAFQAFAFAFAAQAGAAAFgFQAEgFAAgJQAAgJgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_10.setTransform(-28.3,12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgWAjQgHgJAAgPQAAgPAHgIQAIgIALAAQAJAAAIAIIAAgfIAQAAIAABVIgPAAIAAgJQgEAFgFADQgFADgEAAQgLAAgIgJgAgJgDQgEAEAAAJQAAAKADAEQAEAHAGAAQAGAAAEgFQAEgFAAgKQAAgKgEgEQgEgFgGAAQgFAAgEAFg");
	this.shape_11.setTransform(-35.8,10.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAMAgIAAggQAAgJgBgDQgBgDgCgCQgDgBgDAAQgDAAgEACQgDACgBAEQgCAEAAAKIAAAcIgQAAIAAg9IAPAAIAAAJQAIgLAMAAQAFAAAFACQAEACACADQADADABAEIAAALIAAAmg");
	this.shape_12.setTransform(-43,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgXAbQgFgFAAgIQAAgGACgDQADgEAFgCQAEgCAIgBQALgDAEgCIAAgBQAAgFgCgCQgCgCgFAAQgFAAgDABQgCACgBAFIgPgDQACgJAGgFQAHgDALAAQALgBAFADQAFACADAFQACAEAAAKIAAATIABAMIACAIIgQAAIgCgFIgBgCQgEAFgFACQgDACgGAAQgJgBgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQADADAEAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_13.setTransform(-50,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AARArIAAglIghAAIAAAlIgRAAIAAhVIARAAIAAAiIAhAAIAAgiIARAAIAABVg");
	this.shape_14.setTransform(-57.7,10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_15.setTransform(207.9,123.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADABQADADAHABQAHgBAEgDQAEgCABgGIABgNQgHAIgKAAQgMAAgHgJQgHgKAAgMQAAgIADgIQADgIAGgEQAGgDAIAAQALAAAHAJIAAgIIAJAAIAAA1QAAAOgCAGQgDAGgHADQgGAEgJABQgLgBgHgEgAgLgdQgFAFAAAMQAAAMAFAEQAFAHAHAAQAHAAAFgHQAFgEAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_16.setTransform(201,124.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQABgFABgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgHgEgDQgDgDgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABADABAEIgLAAIgBgHQgHAFgEACQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBACgBAEQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_17.setTransform(194.6,123.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgFgCgJIALgCQAAAGAEAEQAFADAGAAQAHgBAEgCQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgCgDQgCgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAGACACADQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQABAAABAAIAIAEIAPAEQAFABACAEQADADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgFgGg");
	this.shape_18.setTransform(188.2,123.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgFgCgJIAKgCQABAGAFAEQADADAHAAQAHgBADgCQAEgDAAgEQAAgDgDgDIgLgDIgPgFQgFgCgBgDQgDgEAAgEQAAgFACgDIAFgHIAHgCIAJgBQAGAAAGACQAFACADADQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAEIAQAEQAEABADAEQACADAAAGQAAAFgDAFQgEAEgFADQgGACgHABQgMAAgGgGg");
	this.shape_19.setTransform(182.2,123.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_20.setTransform(175.9,123.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AAfAgIAAgmIgBgKIgDgEQgDgCgEAAQgGAAgEAFQgFAEAAAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgFAAgEADQgDACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAJAAIAAAIQADgEAFgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_21.setTransform(167.6,123);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_22.setTransform(155.9,123.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgGgEgEQgDgEgGABQgEAAgEACQgEADgCAEQgCADAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKABQAHAAAFACQAFADACAFQACAFAAAHIAAAog");
	this.shape_23.setTransform(149.3,121.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABABIAEABIAFAAIABAJIgIABQgFAAgDgCg");
	this.shape_24.setTransform(144.3,122.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_25.setTransform(135.9,123);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_26.setTransform(131.3,121.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAHgEAHAAQAFAAAFACQAEACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAFgFABgMQgBgMgFgGQgFgGgGAAQgGAAgGAGg");
	this.shape_27.setTransform(123.1,122);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBADIgtAAQABAKAFAFQAFAGAHAAQAGAAAEgDQAEgEACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_28.setTransform(116.6,123.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQAEgHAFgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgJAAIAAgIQgHAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFAAgMQAAgMgGgGQgEgGgIAAQgGAAgEAGg");
	this.shape_29.setTransform(109.8,122);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_30.setTransform(103.3,123.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_31.setTransform(98.6,121.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHABQAKAAAHAEQAGAGACAJIgKABQgCgFgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_32.setTransform(94.5,123.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_33.setTransform(88,123);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_34.setTransform(83.4,121.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQABAGAFADQADADAGAAQAIAAADgCQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgBgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFACADAEQACAEACAGIgLABQAAgEgEgEQgDgCgGAAQgHAAgCACQgEADAAADIACAEIAEADIAIACIAQAFQAEABADADQACAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgGgEg");
	this.shape_35.setTransform(209.7,107.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_36.setTransform(205.4,106.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgGgCgKIALgBQAAAGAEADQAFADAGAAQAHAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQADAEAAAGIgKABQAAgEgEgEQgDgCgGAAQgGAAgEACQgDADAAADIABAEIAFADIAIACIAPAFQAFABACADQADAEAAAFQAAAGgDAEQgEAFgFADQgGACgHAAQgMAAgFgEg");
	this.shape_37.setTransform(197.7,107.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAGgBIADgDIADgIIABgDIgXg9IALAAIANAkIADANIAFgNIANgkIAKAAIgXA+IgFAOQgDAGgEACQgDADgGAAIgGgCg");
	this.shape_38.setTransform(191.8,109);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_39.setTransform(185.4,107.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.988)").s().p("AANArIgUggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_40.setTransform(179.4,106.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgYg9IAMAAIANAkIAEANIADgNIAOgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_41.setTransform(169.8,109);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABADIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_42.setTransform(165.1,106.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_43.setTransform(162,106.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_44.setTransform(159.2,107.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_45.setTransform(153.3,107.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgJAAgPQAAgJADgHQAEgIAGgEQAHgDAHgBQAKAAAHAGQAGAEACAKIgKABQgCgGgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAANAFAFQAEAGAHgBQAGABAEgEQAFgEABgIIAKACQgCALgHAGQgHAFgKAAQgMABgHgJg");
	this.shape_46.setTransform(147.2,107.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgDQAEgCACgHIALABQgCAKgHAFQgHAGgLgBQgNABgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_47.setTransform(140.7,107.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIALgBQABAGADADQAEADAGAAQAIAAAEgCQADgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAGACACAEQACAEACAGIgLABQgBgEgDgEQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJACIAPAFQAFABADADQACAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_48.setTransform(134.4,107.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAKQADgCACgCQAAgDAAgEIgFAAIAAgNIALAAIAAANQAAAFgCAEQgCAEgEADg");
	this.shape_49.setTransform(126.3,111.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIAKgBQACAGADADQAFADAFAAQAIAAADgCQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGACQAFACADAEQADAEABAGIgLABQgBgEgDgEQgDgCgGAAQgGAAgEACQgDADAAADIACAEIADADIAJACIAPAFQAFABADADQACAEAAAFQAAAGgDAEQgDAFgGADQgGACgHAAQgLAAgHgEg");
	this.shape_50.setTransform(121.7,107.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAGgGACQAIACAEAFQAEAFAAAIQAAAGgCAGQgDAEgDAEQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgCACgDQACgDAAgEQAAgEgDgEQgCgEgFgBQgEgCgHABIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgBQgEgCgIAAIgRAAg");
	this.shape_51.setTransform(114.8,106.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgRIgKAYIAdAAIgJgWIgFgSQgCAJgDAHg");
	this.shape_52.setTransform(106.7,106.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgLIgFgHIgFgCIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGADQAGABADAHQAEAGAAAGQAAAKgGAGQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgDAAgFQAAgGgEgEQgFgDgJAAIgaAAg");
	this.shape_53.setTransform(98.8,106.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(0,0,0,0.988)").s().p("AgPAFIAAgJIAfAAIAAAJg");
	this.shape_54.setTransform(92.1,107.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAJIguAAIAAAdIAzAAIAAAKg");
	this.shape_55.setTransform(86.2,106.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMABQANgBAIAJQAIAJAAAOIgBACIgtAAQABALAFAFQAFAGAHAAQAGAAAEgEQAEgDACgGIALACQgCAJgHAFQgHAFgLABQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_56.setTransform(206.6,92.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgXg9IAKAAIAOAkIADAMIAEgLIAOglIAKAAIgXA9g");
	this.shape_57.setTransform(200.3,92.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_58.setTransform(196,91.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_59.setTransform(193,91.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgDAHAAQAKAAAHAEQAGAGACAJIgKACQgCgGgDgEQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAFAHABQAGgBAEgDQAFgEABgIIAKABQgCAMgHAFQgHAHgKAAQgMAAgHgJg");
	this.shape_60.setTransform(188.5,92.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFgBgHQAAgFACgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIABAKIAAANIAAATQABAEABADIgLAAIgBgHQgHAEgEADQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_61.setTransform(182,92.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_62.setTransform(173.7,91.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_63.setTransform(168.6,92.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_64.setTransform(162,92.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAJAAQAGAAAGACQAFACADAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgFAGgBALQAAALAEAFQAEAIAJAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgEgGgHAAQgGAAgFAGg");
	this.shape_65.setTransform(155.5,91.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgFgFAAgHQgBgFACgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABAEABADIgLAAIgBgHQgHAEgEADQgFACgHAAQgJAAgGgGgAgBAEQgHAAgDACQgDABgBACQgBADgBADQABADADAEQADACAGAAQAFAAAFgCQAFgDACgFQABgEABgGIAAgEIgQAEg");
	this.shape_66.setTransform(148.7,92.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_67.setTransform(138.7,92.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_68.setTransform(132,92.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_69.setTransform(127.4,91.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEAAIAFAAIABAJIgIABQgFAAgDgBg");
	this.shape_70.setTransform(124.4,91.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFAAgHQABgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHAAQAIAAAFABQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFADQgEACgGAAQgLAAgFgGgAgCAEQgGAAgDACQgDABgBACQgBADAAADQgBADAEAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEgBgGIAAgEIgQAEg");
	this.shape_71.setTransform(119.4,92.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_72.setTransform(111.1,92.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_73.setTransform(104.5,92.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALAAQANgBAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHABQAIgBAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_74.setTransform(98.7,92.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_75.setTransform(94,91.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_76.setTransform(88.7,92.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_77.setTransform(83.7,91.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_78.setTransform(208.7,79.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGADQAGADADAFQADAFAAAGQAAAGgDAEQgDAFgGADQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAEgDADQgEADgGACQgGABgIAAgAgUAhIAUAAIAIAAQAEgBADgCQACgCACgDQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHAAIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgBQgEgCgIAAIgRAAg");
	this.shape_79.setTransform(203.1,75.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_80.setTransform(195.7,77.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_81.setTransform(188.8,75.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_82.setTransform(182.4,77.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_83.setTransform(174.7,75.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_84.setTransform(167.1,77.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_85.setTransform(158.8,76);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgIAMgBQANABAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALABQgCAKgHAFQgHAGgLgBQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_86.setTransform(153.7,77.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAnQgHgFABgKIAKACQABAEADADQADADAHAAQAHAAAEgDQAEgEABgEIABgOQgHAIgKAAQgMAAgHgKQgHgJAAgLQAAgJADgIQADgHAGgFQAGgEAIAAQALAAAHAJIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHADQgGAFgJAAQgLAAgHgGgAgLgdQgFAGAAALQAAAMAFAEQAFAHAHgBQAHABAFgHQAFgEAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_87.setTransform(146.9,78.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_88.setTransform(142.2,77);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgLAAIgBgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_89.setTransform(136.4,77.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_90.setTransform(130.8,75.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAcQgGgGgCgKIALgBQABAGADAEQAFACAFAAQAIABAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgDQgCgEAAgFQAAgEACgEIAFgGIAHgDIAJgBQAGAAAGACQAGACACAEQACAEABAGIgKABQgBgFgDgDQgDgCgGAAQgHAAgDACQgDADAAADIABAEIAEADIAJADIAPAEQAFABACAEQADAEAAAEQAAAGgDAEQgDAFgGADQgGADgHgBQgLAAgHgEg");
	this.shape_91.setTransform(121,77.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgFAAgFAGg");
	this.shape_92.setTransform(114.5,75.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_93.setTransform(109.8,77);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgFgGAAgIQAAgEABgEQACgEAEgCIAIgDIAJgBQALgCAHgBIAAgDQAAgGgEgEQgDgDgIAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgCAHAAQAIABAFABQAFACACADQADADABAEIABAKIAAANIAAASQAAAFACADIgKAAIgCgIQgHAGgEABQgFACgHAAQgKAAgFgEgAgBAEQgHABgDABQgCABgCADQgBACgBACQABAFADACQADADAGAAQAFAAAFgDQAFgCACgFQACgEAAgGIAAgEIgQAEg");
	this.shape_94.setTransform(104,77.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKgkIgCgLIgLAvIgMAAIgTg9IAMAAIAJAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIALgjIAKAAIgTA9g");
	this.shape_95.setTransform(96.4,77.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALAAQANABAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHgBQAIABAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_96.setTransform(88.7,77.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgJIAAgjIgIAAIAAgIIAIAAIAAgQIAJgHIAAAXIALAAIAAAIIgLAAIAAAjIABAFIABACIAEACIAFgBIABAKIgIABQgFAAgDgDg");
	this.shape_97.setTransform(83.8,76);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_98.setTransform(230.5,61.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAGADACQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgNQAAgJADgHQADgIAGgDQAGgEAIgBQALABAHAIIAAgHIAJAAIAAA1QAAAOgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAGAAALQAAAMAFAFQAFAFAHABQAHgBAFgFQAFgFAAgMQAAgLgFgGQgGgGgHAAQgGAAgFAGg");
	this.shape_99.setTransform(223.7,62.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFACgDQACgFADgCIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgDgDQgEgEgHAAQgHAAgDADQgEADgBAGIgLgBQABgHAEgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEADADIgLAAIgCgHQgGAEgGACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgCACABAEQAAADADADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgPAEg");
	this.shape_100.setTransform(217.2,61.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(0,0,0,0.988)").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEAEAGAAQAIAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgEgBgCgFQgDgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIACAEIADACIAJADIAPAFQAFABADADQACAFAAAEQAAAGgDAFQgDAFgGACQgGADgHAAQgLgBgHgFg");
	this.shape_101.setTransform(210.9,61.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQABAGADADQAFAEAGAAQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQADAEAAAGIgKABQAAgEgEgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACADQADAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgFgFg");
	this.shape_102.setTransform(204.9,61.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_103.setTransform(198.6,61.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(0,0,0,0.988)").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_104.setTransform(190.3,61.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgKIAAgjIgIAAIAAgIIAIAAIAAgPIAJgGIAAAVIALAAIAAAIIgLAAIAAAkIABAGIABACIAEABIAFgBIABAJIgIABQgFAAgDgBg");
	this.shape_105.setTransform(180.3,60.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAbQgHgEgCgLIALgBQABAGADADQAFAEAGAAQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgDIgPgFQgFgBgCgFQgCgDAAgFQAAgEACgDIAFgGIAHgDIAJgCQAGABAGACQAGACACADQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFACIAIADIAPAFQAFABACADQADAFAAAEQAAAGgDAFQgEAFgFACQgGADgHAAQgMgBgFgFg");
	this.shape_106.setTransform(175.5,61.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_107.setTransform(169.2,61.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_108.setTransform(162.5,61.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(0,0,0,0.988)").s().p("AAQAsIAAgfQgCAEgEACQgFACgEAAQgLAAgIgJQgIgJAAgOQAAgJAEgIQADgHAGgEQAGgEAHAAQALAAAGAKIAAgIIAKAAIAABVgAgKgdQgFAGAAAMQAAALAFAHQAFAFAGAAQAHAAAFgFQAFgGgBgLQAAgMgEgGQgFgHgHAAQgHAAgEAGg");
	this.shape_109.setTransform(155.7,62.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_110.setTransform(149.3,61.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgFIgFgDIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAHAAAHQAAAIgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgCQAFgBACgEQACgEAAgDQAAgGgEgFQgFgEgJAAIgaAAg");
	this.shape_111.setTransform(142,60.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_112.setTransform(132.4,61.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgOAIgJQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGAAAEgEQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_113.setTransform(126.6,61.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IALAAIAOAkIADAMIAEgLIAOglIAKAAIgXA9g");
	this.shape_114.setTransform(120.3,61.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgRAJgIQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAFgIAAQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_115.setTransform(114,61.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_116.setTransform(107.1,60.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_117.setTransform(100.7,61.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAbQgGgFABgHQAAgFABgDQADgFADgCIAHgCIAKgCQALgCAHgCIAAgCQgBgGgDgDQgEgEgHAAQgHAAgDADQgEADgCAGIgKgBQACgHADgEQADgEAGgCQAGgCAHgBQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQAAAEACADIgKAAIgCgHQgHAEgFACQgEADgHAAQgKgBgFgFgAgBAEQgHAAgDACQgCABgCACQgBACgBAEQABADADADQADADAGAAQAFAAAFgDQAEgCADgFQACgDAAgIIAAgDIgQAEg");
	this.shape_118.setTransform(94,61.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIAAgoIgrAAIAAAoIgMAAIAAhVIAMAAIAAAkIArAAIAAgkIAMAAIAABVg");
	this.shape_119.setTransform(86.4,60.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_120.setTransform(193.3,46.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_121.setTransform(186.6,45.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_122.setTransform(181.7,45.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_123.setTransform(173.3,45.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_124.setTransform(168.3,45.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_125.setTransform(165.3,45.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.988)").s().p("AAMAfIgKgkIgCgLIgMAvIgLAAIgTg9IALAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIALAAIgUA9g");
	this.shape_126.setTransform(159.6,46.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_127.setTransform(150.4,46.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_128.setTransform(144.6,46.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.988)").s().p("AgEAfIgYg9IALAAIAOAkIADANIAEgNIAOgkIAKAAIgXA9g");
	this.shape_129.setTransform(138.3,46.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgRAJgHQAIgIALABQANAAAIAIQAIAIAAAPQAAALgEAHQgDAHgHAEQgHADgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAFAHAAQAIAAAFgFQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_130.setTransform(132,46.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQAEgHAGgEQAFgEAIAAQAFAAAFACQAEACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgFgGgHAAQgGAAgGAGg");
	this.shape_131.setTransform(125.1,45.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_132.setTransform(118.7,46.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgGABgIQAAgEABgEQADgEADgCIAHgDIAKgBQALgCAHgBIAAgDQgBgHgDgDQgEgDgHAAQgHAAgDACQgEADgCAHIgKgCQACgGADgEQADgEAGgDQAGgBAHAAQAIgBAFACQAFACACADQADADABAEIABAKIAAANIAAASQAAAEACAEIgKAAIgCgIQgHAFgFADQgEABgHAAQgKAAgFgEgAgBAEQgHAAgDACQgCABgCADQgBACgBACQABAEADAEQADACAGAAQAFAAAFgCQAEgDADgFQACgEAAgGIAAgEIgQAEg");
	this.shape_133.setTransform(112,46.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_134.setTransform(105.4,45.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgPQAAgQAIgIQAIgIAMAAQANAAAIAIQAIAJAAAOIgBADIgtAAQABAKAFAGQAFAEAHAAQAGAAAEgCQAEgDACgHIALACQgCAJgHAFQgHAFgLAAQgNAAgIgIgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_135.setTransform(95.4,46.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgnQAAgIgEgDQgDgDgGAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHgBAFADQAFADACAEQACAFAAAJIAAAng");
	this.shape_136.setTransform(88.7,45.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.988)").s().p("AgBAoIgEgEQgBgDAAgKIAAgjIgIAAIAAgHIAIAAIAAgQIAJgHIAAAXIALAAIAAAHIgLAAIAAAkIABAFIABACIAEABIAFAAIABAJIgIACQgFgBgDgCg");
	this.shape_137.setTransform(83.8,45.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAcQgHgFgCgLIAKgBQABAGAFADQADADAHABQAHAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgMgBgFgEg");
	this.shape_138.setTransform(231.5,31);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_139.setTransform(225.2,31);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_140.setTransform(220.3,30);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.988)").s().p("AgWAcQgGgFAAgIQABgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgDIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEACgGABQgLgBgFgEgAgCAEQgGABgDABQgDABgBADQgBABAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_141.setTransform(215.2,31);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_142.setTransform(210.6,29.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIABQgFAAgDgCg");
	this.shape_143.setTransform(207.6,30);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_144.setTransform(204.6,29.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_145.setTransform(199.9,30.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_146.setTransform(195.3,29.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAFgDADQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHgBIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape_147.setTransform(186.7,29.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_148.setTransform(179.3,31);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_149.setTransform(172.4,29.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_150.setTransform(166,31);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_151.setTransform(158.3,29.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_152.setTransform(150.7,31);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_153.setTransform(140.7,31);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKABAHAFQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKACQgCAKgHAHQgHAFgKABQgMAAgHgJg");
	this.shape_154.setTransform(134.5,31);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_155.setTransform(129.8,30.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_156.setTransform(124,31.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_157.setTransform(117.4,31);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.988)").s().p("AgQApQgIgEgFgGQgEgHAAgJIAKgBQABAHADAEQADAEAGADQAFACAHAAQAGAAAFgCQAFgCADgDQACgDAAgEQAAgFgCgDQgDgCgFgDIgOgEQgMgCgFgCQgGgDgDgFQgDgFAAgGQAAgGAEgGQADgGAHgDQAHgCAJAAQAJAAAHACQAHAEAEAGQAEAFAAAJIgKAAQgBgIgFgEQgFgFgKABQgKAAgEADQgFAEAAAFQAAAFADADQAEADAMAEQAOADAFACQAIACADAFQAEAGAAAHQAAAHgEAFQgEAGgHAEQgIAEgJAAQgKAAgIgEg");
	this.shape_158.setTransform(110,29.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAFQAFAFAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_159.setTransform(99.4,31);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(0,0,0,0.988)").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_160.setTransform(92.7,29.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(0,0,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgcAAIAABLg");
	this.shape_161.setTransform(85.8,29.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E6FFFF").s().p("As9J7IAAz1IZ7AAIAAT1g");
	this.shape_162.setTransform(160.7,77);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AouBaIAAizIRdAAIAACzg");
	this.shape_163.setTransform(-7.7,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_162},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_163}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,2,123.1,17.7);


// stage content:
(lib.LTE_Call_Flows_2_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//this.btn_rach.alpha = 0;
		this.btn_x2.alpha = 1;
		
		/*
		this.btn_default.alpha = 0;
		this.btn_default2.alpha = 0;
		this.btn_service.alpha = 0;
		this.btn_tau.alpha = 0;
		*/
		
		
		this.btn_x2.addEventListener("click", fl_MouseClickHandler_x2.bind(this));
		
		/*
		this.btn_rach.addEventListener("click", fl_MouseClickHandler_rach.bind(this));
		this.btn_default.addEventListener("click", fl_MouseClickHandler_default.bind(this));
		this.btn_default2.addEventListener("click", fl_MouseClickHandler_default2.bind(this));
		this.btn_service.addEventListener("click", fl_MouseClickHandler_service.bind(this));
		this.btn_tau.addEventListener("click", fl_MouseClickHandler_tau.bind(this));
		*/
		function fl_MouseClickHandler_x2()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.btn_x2.alpha = 1;
		
		/*	
			this.btn_rach.alpha = 0;
			this.btn_default.alpha = 0;
			this.btn_default2.alpha = 0;
			this.btn_service.alpha = 0;
			this.btn_tau.alpha = 0;
		*/
			this.gotoAndStop(0);
			// End your custom code
			
		}
		
		/*
		function fl_MouseClickHandler_rach()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.btn_rach.alpha = 1;
			this.btn_sync.alpha = 0;
			this.btn_default.alpha = 0;
			this.btn_default2.alpha = 0;
			this.btn_service.alpha = 0;
			this.btn_tau.alpha = 0;
			this.gotoAndStop(1);
			// End your custom code
		}
		
		function fl_MouseClickHandler_default()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.btn_rach.alpha = 0;
			this.btn_sync.alpha = 0;
			this.btn_default.alpha = 1;
			this.btn_default2.alpha = 0;
			this.btn_service.alpha = 0;
			this.btn_tau.alpha = 0;
			this.gotoAndStop(2);
			// End your custom code
		}
		
		function fl_MouseClickHandler_default2()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.btn_rach.alpha = 0;
			this.btn_sync.alpha = 0;
			this.btn_default.alpha = 0;
			this.btn_default2.alpha = 1;
			this.btn_service.alpha = 0;
			this.btn_tau.alpha = 0;
			this.gotoAndStop(3);
			// End your custom code
		}
		
		function fl_MouseClickHandler_service()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.btn_rach.alpha = 0;
			this.btn_sync.alpha = 0;
			this.btn_default.alpha = 0;
			this.btn_default2.alpha = 0;
			this.btn_service.alpha = 1;
			this.btn_tau.alpha = 0;
			this.gotoAndStop(4);
			// End your custom code
		}
		
		function fl_MouseClickHandler_tau()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.btn_rach.alpha = 0;
			this.btn_sync.alpha = 0;
			this.btn_default.alpha = 0;
			this.btn_default2.alpha = 0;
			this.btn_service.alpha = 0;
			this.btn_tau.alpha = 1;
			this.gotoAndStop(5);
			// End your custom code
		}
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Call Flows
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,51,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAFgDADQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHgBIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape.setTransform(228.3,879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,51,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_1.setTransform(219.8,879);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_2.setTransform(212.2,880.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,51,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_3.setTransform(203.9,879.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_4.setTransform(198.8,880.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,51,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_5.setTransform(192,881.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(204,51,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_6.setTransform(187.3,880.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(204,51,0,0.988)").s().p("AgWAbQgFgEgBgIQAAgFACgDQACgEAEgDIAIgCIAJgCQALgCAHgCIAAgCQAAgGgEgDQgDgEgIAAQgGAAgEADQgEADgCAGIgKgCQACgGADgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIABAKIAAANIAAATQABAEABADIgLAAIgBgHQgHAEgEACQgFACgHABQgJgBgGgFgAgBAEQgHABgDABQgDABgBACQgBACgBAEQABAEADACQADADAGAAQAFAAAFgDQAFgCACgFQABgDABgIIAAgDIgQAEg");
	this.shape_7.setTransform(181.5,880.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(204,51,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_8.setTransform(176.6,879.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_9.setTransform(168.2,880.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(204,51,0,0.988)").s().p("AgFArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_10.setTransform(162.6,879);

	this.instance = new lib.ue_ctxt_rel();
	this.instance.parent = this;
	this.instance.setTransform(284.6,1293.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.ue_ctxt_rel(), 3);

	this.instance_1 = new lib.path_switch_ack();
	this.instance_1.parent = this;
	this.instance_1.setTransform(430.5,1179.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.path_switch_ack(), 3);

	this.instance_2 = new lib.Mod_bearer_res();
	this.instance_2.parent = this;
	this.instance_2.setTransform(576,1133.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Mod_bearer_res(), 3);

	this.instance_3 = new lib.Mod_bearer_req();
	this.instance_3.parent = this;
	this.instance_3.setTransform(578,1064.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Mod_bearer_req(), 3);

	this.instance_4 = new lib.path_switch_request();
	this.instance_4.parent = this;
	this.instance_4.setTransform(422.6,1010.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.path_switch_request(), 3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.988)").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_11.setTransform(295.1,861.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.988)").s().p("AgdAwIAAhdIAXAAIAAAOQAFgKAEgDQAFgDAGAAQAIAAAIAFIgIAVQgGgEgFAAQgFAAgEADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_12.setTransform(287.4,861.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.988)").s().p("AgcAsQgHgEgEgIQgCgHAAgOIAAg6IAYAAIAAArQAAATACAEQABAFADADQAEACAFAAQAGAAAFgDQAFgEACgFQABgFAAgTIAAgoIAZAAIAABdIgWAAIAAgOQgGAHgIAFQgHAEgKAAQgJAAgIgEg");
	this.shape_13.setTransform(277.7,861.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.988)").s().p("AghA0QgMgNAAgXQAAgWALgNQAMgMARAAQAOAAAMANIAAgvIAYAAIAACBIgWAAIAAgOQgGAIgIADQgHAFgIAAQgPgBgMgNgAgOgFQgFAGAAAOQAAAPADAHQAHAJAJAAQAJAAAGgHQAGgHAAgPQAAgQgGgGQgFgHgKAAQgIAAgGAHg");
	this.shape_14.setTransform(266.5,859.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.988)").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_15.setTransform(256.1,861.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.988)").s().p("AgfAkQgMgNAAgXQAAgWAMgNQAMgNAUAAQASAAAJAIQALAHAEAPIgZAEQgBgHgEgEQgEgDgIAAQgHAAgGAGQgFAGgBAPQABAQAFAHQAGAHAIAAQAHAAAFgEQAEgEACgKIAYAEQgEARgLAIQgKAJgSAAQgUAAgMgNg");
	this.shape_16.setTransform(246.3,861.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.988)").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_17.setTransform(235.7,861.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.988)").s().p("AgdAwIAAhdIAXAAIAAAOQAFgKAEgDQAFgDAGAAQAIAAAIAFIgIAVQgGgEgFAAQgFAAgEADQgDADgCAIQgCAHAAAXIAAAdg");
	this.shape_18.setTransform(227.4,861.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.988)").s().p("AgwBBIAAiBIApAAQAXAAAIACQAKAEAIAJQAIAKAAAQQAAALgFAIQgFAHgGAFQgGAEgIACQgJACgRAAIgRAAIAAAxgAgXgFIAPAAQAOAAAFgCQAGgCACgEQADgFABgFQgBgIgEgEQgEgEgGgBIgSgBIgNAAg");
	this.shape_19.setTransform(217.4,859.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.988)").s().p("AgcApQgLgIgEgNIAZgEQACAIAFADQAFAEAHAAQAKAAAFgDQADgDAAgEQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQgCgCgGgBQgdgHgIgFQgLgHAAgNQAAgMAJgIQAKgJAUAAQASAAAKAHQAJAGADAMIgXAEQgBgFgEgDQgFgDgHAAQgJAAgEADQgDACAAADQAAACACACQAEADASAEQAUAFAIAGQAIAGAAAMQAAAMgLAKQgLAJgVAAQgSAAgLgIg");
	this.shape_20.setTransform(200.9,861.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.988)").s().p("AgcApQgLgIgEgNIAZgEQACAIAFADQAFAEAHAAQAKAAAFgDQADgDAAgEQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBQgCgCgGgBQgdgHgIgFQgLgHAAgNQAAgMAJgIQAKgJAUAAQASAAAKAHQAJAGADAMIgXAEQgBgFgEgDQgFgDgHAAQgJAAgEADQgDACAAADQAAACACACQAEADASAEQAUAFAIAGQAIAGAAAMQAAAMgLAKQgLAJgVAAQgSAAgLgIg");
	this.shape_21.setTransform(190.9,861.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.988)").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAgMgXQgFAGAAAKIAkAAQAAgLgFgFQgGgGgHAAQgHAAgGAGg");
	this.shape_22.setTransform(181.1,861.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.988)").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAJAIQALAHAEAPIgYAEQgCgHgEgEQgFgDgHAAQgIAAgFAGQgGAGABAPQgBAQAGAHQAFAHAJAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_23.setTransform(171.3,861.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.988)").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAKAIQAKAHAEAPIgYAEQgCgHgEgEQgFgDgGAAQgJAAgFAGQgGAGABAPQgBAQAGAHQAGAHAIAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_24.setTransform(161.3,861.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.988)").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFQABgDAAgJIAAgFIgOAEg");
	this.shape_25.setTransform(151.2,861.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.988)").s().p("AAsAwIAAg1QAAgNgDgFQgDgFgHAAQgFAAgFADQgFAEgCAGQgCAGAAAMIAAAtIgXAAIAAgyQAAgOgCgEQgBgEgDgCQgCgCgFAAQgGAAgEADQgFADgCAGQgCAGAAAMIAAAuIgZAAIAAhdIAXAAIAAANQAMgPARAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAFQAIAEADAIQADAGAAANIAAA7g");
	this.shape_26.setTransform(133.1,861.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.988)").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_27.setTransform(119.7,861.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.988)").s().p("AghA0QgMgNAAgXQAAgWAMgNQAKgMASAAQAOAAAMANIAAgvIAZAAIAACBIgYAAIAAgOQgFAIgIADQgIAFgGAAQgQgBgMgNgAgNgFQgHAGAAAOQAAAPAFAHQAFAJALAAQAIAAAGgHQAGgHAAgPQAAgQgGgGQgGgHgIAAQgJAAgFAHg");
	this.shape_28.setTransform(108.5,859.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.988)").s().p("AASAwIAAgwQAAgOgCgEQgBgFgEgCQgDgDgFAAQgGAAgFAEQgFADgCAGQgCAGAAAOIAAArIgZAAIAAhdIAXAAIAAAOQANgQARAAQAIAAAHADQAHADADAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_29.setTransform(97.7,861.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.988)").s().p("AgiApQgJgIAAgMQAAgIAEgGQAEgGAHgCQAGgEANgCQAQgDAHgDIAAgDQAAgHgDgDQgEgDgJAAQgGAAgEADQgEACgCAHIgWgEQADgOAKgGQAJgHASAAQAQAAAIAEQAIAEADAGQADAGAAAQIAAAcIABASIAFANIgZAAIgCgIIgBgCQgGAGgHADQgHADgIAAQgOAAgIgIgAAAAGQgKACgDACQgFADAAAGQAAAFAEAEQAEADAGAAQAFAAAGgEQAFgDABgFIABgMIAAgFIgOAEg");
	this.shape_30.setTransform(87.2,861.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.988)").s().p("AAbBBIgTgdIgNgTQgDgEgFgBQgEgBgIAAIgGAAIAAA2IgaAAIAAiBIA3AAQAUAAAJAEQAJADAGAJQAFAKABALQgBAPgIAJQgJAIgRACQAJAGAGAFQAFAHAJAPIAQAZgAgfgJIATAAQASAAAFgCQAFgBACgEQADgEAAgGQAAgGgDgEQgEgEgGgBIgTAAIgUAAg");
	this.shape_31.setTransform(76.3,859.4);

	this.instance_5 = new lib.rrc_con_reconfig_com();
	this.instance_5.parent = this;
	this.instance_5.setTransform(219.3,919.9);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.rrc_con_reconfig_com(), 3);

	this.instance_6 = new lib.Sn_status_transfer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(281.2,764.2);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.Sn_status_transfer(), 3);

	this.instance_7 = new lib.rrc_con_reconfig_ho_command();
	this.instance_7.parent = this;
	this.instance_7.setTransform(141,660.5);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.rrc_con_reconfig_ho_command(), 3);

	this.instance_8 = new lib.ho_request_ack();
	this.instance_8.parent = this;
	this.instance_8.setTransform(284.6,594.7);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.ho_request_ack(), 3);

	this.instance_9 = new lib.handover_request();
	this.instance_9.parent = this;
	this.instance_9.setTransform(284.1,520.3);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.handover_request(), 3);

	this.instance_10 = new lib.rrc_meas_report();
	this.instance_10.parent = this;
	this.instance_10.setTransform(121,454.1);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.rrc_meas_report(), 3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(204,51,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_32.setTransform(496.2,332.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_33.setTransform(489.6,332.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(204,51,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_34.setTransform(484.9,331.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(204,51,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_35.setTransform(482,331.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(204,51,0,0.988)").s().p("AgWAcQgFgFgBgIQAAgFACgDQADgEADgDIAIgCIAJgCQAMgBAGgDIAAgCQgBgGgCgDQgFgEgHAAQgHAAgEADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQAAAEADADIgMAAIgCgHQgFAEgFACQgFACgGABQgKgBgGgEgAgCAEQgGABgDABQgDABgBACQgCACAAAEQAAADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDABgIIAAgDIgRAEg");
	this.shape_36.setTransform(476.9,332.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(204,51,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_37.setTransform(470.1,331.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(204,51,0,0.988)").s().p("AgWAcQgGgFAAgIQABgFACgDQACgEADgDIAHgCIAKgCQAMgBAFgDIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEACgGABQgLgBgFgEgAgCAEQgGABgDABQgCABgCACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_38.setTransform(463.6,332.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(204,51,0,0.988)").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_39.setTransform(458.8,332.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(204,51,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_40.setTransform(452.8,333.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_41.setTransform(446.3,332.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(204,51,0,0.988)").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgGAAgHgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_42.setTransform(439.5,331.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(204,51,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_43.setTransform(431.6,331.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_44.setTransform(427,332.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(204,51,0,0.988)").s().p("AgEAfIgXg9IAKAAIAOAkIADANIAEgMIAOglIAKAAIgXA9g");
	this.shape_45.setTransform(420.7,332.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_46.setTransform(414.4,332.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(204,51,0,0.988)").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_47.setTransform(409.7,331.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(204,51,0,0.988)").s().p("AgcArIAAhVIA5AAIAAAKIguAAIAAAbIAnAAIAAAJIgnAAIAAAng");
	this.shape_48.setTransform(401.6,331.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(204,51,0,0.988)").s().p("AAYArIgMgSIgIgMIgFgGIgFgCIgGAAIgNAAIAAAmIgMAAIAAhVIAlAAQAMAAAGACQAGADADAFQAEAGAAAHQAAAJgGAHQgGAFgMACIAHAEIAJAMIAPAXgAgZgEIAYAAQAHAAAEgBQAFgCACgEQACgDAAgFQAAgFgEgFQgFgDgJAAIgaAAg");
	this.shape_49.setTransform(393.8,331.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(204,51,0,0.988)").s().p("AgRAcQgGgFgCgLIAKgBQABAGAFADQAEADAFABQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgDADQgEACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgEg");
	this.shape_50.setTransform(382.7,332.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(204,51,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_51.setTransform(378.1,331.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(204,51,0,0.988)").s().p("AgSAYQgIgIAAgQQAAgJADgIQAEgHAGgEQAHgEAHAAQAKAAAHAGQAGAEACAKIgKACQgCgHgDgDQgEgDgFAAQgHAAgFAGQgFAFAAAMQAAAMAFAGQAEAGAHAAQAGAAAEgEQAFgEABgIIAKABQgCALgHAHQgHAFgKABQgMAAgHgJg");
	this.shape_52.setTransform(373.5,332.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_53.setTransform(367,332.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(204,51,0,0.988)").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_54.setTransform(362.1,331.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_55.setTransform(357,332.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(204,51,0,0.988)").s().p("AgNAoQgGgFgEgHQgDgHAAgKQAAgJADgHQADgHAGgEQAGgEAIAAQAFAAAEACQAFACADAEIAAgfIAKAAIAABVIgKAAIAAgIQgGAKgLAAQgHAAgGgEgAgKgGQgFAGAAALQAAAMAFAGQAFAGAGAAQAHAAAEgGQAGgFgBgMQABgMgGgGQgEgGgIAAQgFAAgFAGg");
	this.shape_56.setTransform(350.2,331.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(204,51,0,0.988)").s().p("AgfArIAAhVIAfAAQAKAAAGACQAGADADAGQADAFAAAGQAAAFgDAFQgDAGgGACQAIACAEAFQAEAGAAAHQAAAGgCAGQgDAFgDADQgEACgGABQgGACgIAAgAgUAhIAUAAIAIgBQAEAAADgCQACgBACgEQACgDAAgEQAAgFgDgDQgCgEgFgBQgEgBgHgBIgUAAgAgUgGIASAAIAKgBQAFgBACgDQACgDAAgFQAAgEgCgDQgCgDgEgCQgEgBgIAAIgRAAg");
	this.shape_57.setTransform(339.8,331.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(204,51,0,0.988)").s().p("AAWArIgshCIAABCIgLAAIAAhVIAMAAIAsBCIAAhCIALAAIAABVg");
	this.shape_58.setTransform(331.4,331.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(204,51,0,0.988)").s().p("AgUAYQgIgJAAgPQAAgPAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_59.setTransform(323.7,332.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(204,51,0,0.988)").s().p("AgSAoQgHgGABgKIAKABQABAFADADQADACAHAAQAHAAAEgCQAEgEABgFIABgNQgHAIgKAAQgMAAgHgKQgHgIAAgMQAAgKADgHQADgIAGgDQAGgFAIAAQALABAHAIIAAgHIAJAAIAAA0QAAAPgCAGQgDAGgHAEQgGADgJAAQgLAAgHgEgAgLgdQgFAFAAAMQAAAMAFAFQAFAFAHAAQAHAAAFgFQAFgFAAgMQAAgMgFgFQgGgGgHAAQgGAAgFAGg");
	this.shape_60.setTransform(313.5,333.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(204,51,0,0.988)").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_61.setTransform(307.1,332.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(204,51,0,0.988)").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_62.setTransform(302.4,331.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(204,51,0,0.988)").s().p("AAfAgIAAgmIAAgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEgBAKIAAAjIgJAAIAAgoQAAgHgCgDQgEgEgFAAQgEAAgEADQgEACgCAEQgBAFgBAIIAAAgIgKAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAJAAAFAFQAFAFAAALIAAAqg");
	this.shape_63.setTransform(296.1,332.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(204,51,0,0.988)").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_64.setTransform(287.7,332.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(204,51,0,0.988)").s().p("AgRAcQgGgFgCgLIAKgBQABAGAFADQAEADAFABQAIAAADgDQAEgDAAgEQAAgDgDgDIgLgEIgPgEQgEgBgCgFQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgDADQgEACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgEg");
	this.shape_65.setTransform(281.4,332.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(204,51,0,0.988)").s().p("AgQAcQgHgFgCgLIALgBQABAGADADQAFADAGABQAHAAAEgDQADgDAAgEQAAgDgDgDIgLgEIgPgEQgFgBgCgFQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgEg");
	this.shape_66.setTransform(275.4,332.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(204,51,0,0.988)").s().p("AAbArIgKgaIgjAAIgJAaIgMAAIAhhVIALAAIAjBVgAgFgQIgJAXIAcAAIgJgWIgGgSQgBAIgDAJg");
	this.shape_67.setTransform(268.5,331.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(0,0,0,0.988)").s().p("AgmA9IAAh3IAeAAIAAARQAHgMAFgDQAGgEAIAAQALAAAKAGIgKAcQgIgGgHAAQgHABgEADQgEAEgCAJQgDAKAAAdIAAAlg");
	this.shape_68.setTransform(459.9,308.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(0,0,0,0.988)").s().p("AgrAqQgMgQAAgZQAAgdAQgQQAPgRAYAAQAZAAAQARQAPASgBAjIhOAAQABAOAHAIQAHAIAKAAQAIAAAFgEQAFgEACgJIAgAFQgGARgNAJQgNAJgUAAQgeAAgPgUgAgPgeQgHAIAAANIAuAAQAAgOgHgHQgHgHgJAAQgKAAgGAHg");
	this.shape_69.setTransform(448.1,309);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(0,0,0,0.988)").s().p("AgWBUIAAheIgRAAIAAgZIARAAIAAgJQAAgPAEgHQADgHAIgFQAIgFANAAQAOAAANAEIgFAWIgOgBQgIAAgCADQgDADAAAJIAAAIIAYAAIAAAZIgYAAIAABeg");
	this.shape_70.setTransform(438.5,306.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(0,0,0,0.988)").s().p("AgkA1QgOgKgFgRIAggFQACAJAGAFQAGAFAKAAQANAAAGgFQAEgDAAgFQAAgEgCgCQgDgCgIgCQglgJgKgHQgOgIAAgSQAAgPAMgLQAMgKAaAAQAXAAAMAIQAMAIAFAPIgeAGQgCgHgFgEQgGgEgJAAQgMAAgGAEQgDACAAAEQAAAEADACQAEADAZAGQAZAGAKAIQAKAHAAAPQAAARgOAMQgOALgbAAQgXAAgOgJg");
	this.shape_71.setTransform(427.5,309);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(0,0,0,0.988)").s().p("AAXA9IAAg9QAAgSgCgGQgCgGgFgDQgEgDgHAAQgHAAgHAEQgGAFgCAHQgDAIAAATIAAA2IgfAAIAAh3IAdAAIAAASQAPgUAXAAQALAAAIAEQAJADAEAGQAFAGACAIQABAHAAAOIAABJg");
	this.shape_72.setTransform(414.4,308.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(0,0,0,0.988)").s().p("AgsA0QgLgKAAgPQAAgKAFgIQAFgIAJgDQAIgEARgDQAVgEAIgEIAAgDQAAgJgEgEQgEgEgMAAQgIAAgGADQgEAEgDAIIgdgFQAGgSALgIQAMgIAXAAQAUAAAKAFQALAFAEAIQAFAHAAAVIgBAkQAAAPACAIQABAHAEAJIgfAAIgDgKIgBgDQgJAIgJAEQgHADgLAAQgTAAgKgKgAAAAHQgNADgEADQgGAEAAAHQAAAHAFAEQAFAFAHAAQAIAAAHgFQAHgFABgGQACgEgBgLIAAgHIgSAFg");
	this.shape_73.setTransform(401,309);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(0,0,0,0.988)").s().p("AgmA9IAAh3IAeAAIAAARQAHgMAFgDQAGgEAIAAQALAAAKAGIgKAcQgIgGgHAAQgHABgEADQgEAEgCAJQgDAKAAAdIAAAlg");
	this.shape_74.setTransform(391,308.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(0,0,0,0.988)").s().p("AgQBSIAAiIIgwAAIAAgbICBAAIAAAbIgwAAIAACIg");
	this.shape_75.setTransform(380,306.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(0,0,0,0.988)").s().p("AgsA0QgLgKAAgPQAAgKAFgIQAFgIAJgDQAIgEAQgDQAWgEAJgEIAAgDQgBgJgEgEQgFgEgLAAQgJAAgEADQgFAEgDAIIgcgFQAEgSAMgIQAMgIAXAAQAUAAAKAFQALAFAEAIQAFAHgBAVIAAAkQAAAPABAIQACAHAEAJIgfAAIgDgKIgBgDQgIAIgKAEQgIADgKAAQgSAAgLgKgAAAAHQgNADgEADQgGAEAAAHQAAAHAFAEQAEAFAIAAQAIAAAIgFQAFgFACgGQABgEABgLIAAgHIgTAFg");
	this.shape_76.setTransform(360.2,309);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(0,0,0,0.988)").s().p("AgEBPQgHgCgDgFQgEgFgBgHIgBgXIAAgyIgOAAIAAgaIAOAAIAAgYIAfgSIAAAqIAVAAIAAAaIgVAAIAAAvQAAAOABADQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQADACADAAQAEAAAIgDIADAZQgLAEgOAAQgIAAgGgDg");
	this.shape_77.setTransform(350,307.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(0,0,0,0.988)").s().p("AgsA0QgLgKAAgPQAAgKAFgIQAFgIAJgDQAIgEARgDQAVgEAIgEIAAgDQAAgJgEgEQgEgEgMAAQgIAAgGADQgEAEgDAIIgdgFQAGgSALgIQAMgIAXAAQAUAAAKAFQALAFAEAIQAFAHAAAVIgBAkQAAAPACAIQABAHAEAJIgfAAIgDgKIgBgDQgJAIgJAEQgHADgLAAQgTAAgKgKgAAAAHQgNADgEADQgGAEAAAHQAAAHAFAEQAFAFAHAAQAIAAAHgFQAHgFABgGQACgEgBgLIAAgHIgSAFg");
	this.shape_78.setTransform(339.8,309);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(0,0,0,0.988)").s().p("AhEBSIAAijIA9AAQAUAAAKADQAPAEAKALQALALAFAQQAFAPAAAXQAAAUgFAPQgGASgLALQgJAIgPAFQgLADgRAAgAgiA3IAYAAQANAAAHgCQAHgCAGgFQAFgFADgLQAEgLAAgTQAAgSgEgKQgDgKgGgGQgGgGgKgCQgGgCgUAAIgOAAg");
	this.shape_79.setTransform(325.4,306.8);

	this.instance_11 = new lib.rrc_con_reconfig();
	this.instance_11.parent = this;
	this.instance_11.setTransform(131.7,378.3);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.rrc_con_reconfig(), 3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6699FF").s().p("AqiAAIClheIAAA5ISgAAIAABKIygAAIAAA6g");
	this.shape_80.setTransform(559.6,1160.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#669900").s().p("AH+AmIygAAIAAhKISgAAIAAg6IClBeIilBfg");
	this.shape_81.setTransform(559.6,1091.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999933").s().p("EgJ1A1wICZhfIAAA5IRSAAIAABLIxSAAIAAA6gEgJ1g1vICZhfIAAA5IRSAAIAABLIxSAAIAAA6g");
	this.shape_82.setTransform(273.6,969.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0066CC").s().p("EAMaAzvIClhfIAAA5IShAAIAABLIyhAAIAAA6gAJFNHIxRAAIAAgBI5TAAIAAhLMAkgAAAIAAACIGEAAIAAg7ICaBfIiaBggAJFs0IxRAAIAAhLIRRAAIAAg6ICaBfIiaBfgEAI2gzIIxRAAIAAhLIRRAAIAAg6ICaBfIiaBfg");
	this.shape_83.setTransform(269.7,879.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0099FF").s().p("AH+AmIygAAIAAhKISgAAIAAg6IClBeIilBfg");
	this.shape_84.setTransform(416.6,1041.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCCCC").s().p("Eg0SAtDIAAjwMAuGAAAIAADwgEgsagpSIAAjwMBgtAAAIAADwg");
	this.shape_85.setTransform(378.8,583.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("AqIWXICkhfIAAA5IShAAIAABLIyhAAIAAA6gAq82WIClhfIAAA5ISgAAIAABLIygAAIAAA6g");
	this.shape_86.setTransform(123.1,548.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999900").s().p("AH/AmIyhAAIAAhKIShAAIAAg6ICkBeIikBfg");
	this.shape_87.setTransform(120.6,481.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.instance_11},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Buttons
	this.btn_x2 = new lib.my_buttons_top();
	this.btn_x2.parent = this;
	this.btn_x2.setTransform(133.7,88.1);
	new cjs.ButtonHelper(this.btn_x2, 0, 1, 2, false, new lib.my_buttons_top(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_x2).wait(1));

	// Static
	this.instance_12 = new lib.Symbol6("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(40.3,248.1);

	this.instance_13 = new lib.Symbol5("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(206.9,248.1);

	this.instance_14 = new lib.Symbol4("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(345.6,248.1);

	this.instance_15 = new lib.Symbol3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(487.1,248.1);

	this.instance_16 = new lib.Symbol2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(632.8,248.1);

	this.instance_17 = new lib.Symbol1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(765.4,248.2,1,1,0,0,0,27.4,12.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#0066CC").ss(2,1,1).p("EAAAhFSMAAACKl");
	this.shape_88.setTransform(345.6,823.3,1,1.227);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgXAYQgIgIAAgPQgBgPAKgJQAIgJAPAAQAOgBAIAKQAKAIgBAOQAAAPgJAKQgKAJgNAAQgOABgJgKgAgNgVQgFAIAAANQAAAMAFAIQAFAIAJAAQAIAAAEgHQAFgHABgOQgBgMgFgIQgEgHgJAAQgIAAgFAGg");
	this.shape_89.setTransform(332.6,207);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgKAzIgQAAIAAgCIAHgDQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAAgJIAAgnIgJgCIgBgDIAKgBQgBgUAJgKQAIgLANABQAHAAAHABIgEASIgDAAIgFgOIgDAAQgIAAgEAHQgDAHgBATIAAACIARAAIAAAHIgRAAIAAAkIAAALQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAIADIAAACIgQAAg");
	this.shape_90.setTransform(327.6,205);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AAVAgIgPAAIAAgCIAHgCQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgEIAAgeQAAgIgEgEQgEgDgHAAQgGAAgIAEIAAAdIAAAPQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAIACIAAACIgQAAIgQAAIAAgCIAIgDQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIgBgDIAWgEIABAAIAAAIQALgIAKAAQAKgBAFAGQAGAFAAAKIAAAYIAAAMQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAIADIAAACIgRAAg");
	this.shape_91.setTransform(320.5,206.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAAAwIgPAAIAAgCIAIgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIAAgJIAAgXIAAgPIgJgDIAAgCIAVgFIABABIgBASIAAAbIAAALQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAIADIAAACIgQAAgAgGgiQgCgCAAgDQAAgEACgCQADgCADAAQADAAACACQACABAAAEQAAAEgCACQgDACgCAAQgEAAgCgCg");
	this.shape_92.setTransform(314.4,205.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgSAZQgKgJABgPQAAgOAIgKQAJgJANAAQAMAAAHAHQAGAHAAANIAAADIgqAAQABAOAGAHQAHAGAOAAIAOgCIAAADQgFAEgGACIgMABQgOAAgJgIgAgIgWQgFAGgBAJIAdAAIAAgCQgBgKgDgEQgCgEgHAAQgGAAgEAFg");
	this.shape_93.setTransform(306,207);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgHAgIgQAAIAAgCIAIgDQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIgBgDIAWgEIABAAIAAAIQALgIAMAAIABAAIgEAVIgDAAIgEgJQgBgDgEAAQgEgBgEAEIAAAcIAAAQQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAKADIAAACIgRAAg");
	this.shape_94.setTransform(300.2,206.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgXAYQgJgIAAgPQABgPAIgJQAKgJAOAAQAOgBAIAKQAJAIAAAOQABAPgKAKQgKAJgNAAQgOABgJgKgAgNgVQgFAIABANQgBAMAFAIQAFAIAJAAQAIAAAEgHQAGgHAAgOQAAgMgGgIQgFgHgIAAQgJAAgEAGg");
	this.shape_95.setTransform(293.7,207);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAqAgIgPAAIAAgCIAGgCIACgCIAAgEIAAgeQAAgIgEgEQgEgDgIAAQgHAAgGAFIAAAHIAAAYIABAMQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAHACIAAACIgPAAIgOAAIAAgCIAGgCQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIAAgeQAAgIgDgEQgEgDgHAAQgHAAgHAEIAAAdIAAAPQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAIACIAAACIgQAAIgPAAIAAgCIAHgDQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIAAgDIAVgEIABAAIAAAIQALgIAKAAQAMAAAFAJQALgJAMAAQAKgBAFAGQAGAFgBAKIAAAYIAAAMQABABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAIADIAAACIgPAAg");
	this.shape_96.setTransform(283.9,206.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgIAlQgFgEAAgIIABgpIgKgCIAAgDIALgBIAFgQIAGgCIABAAIgBAQIAAACIAVAAIAAAHIgVAAIAAAkQAAAHACADQACADAGAAIAMgCIAAADQgLAGgKAAQgGAAgDgEg");
	this.shape_97.setTransform(272.1,206.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgSAZQgKgJABgPQAAgOAIgKQAJgJANAAQAMAAAHAHQAGAHAAANIAAADIgqAAQABAOAGAHQAHAGAOAAIAOgCIAAADQgFAEgGACIgMABQgOAAgJgIgAgIgWQgFAGgBAJIAdAAIAAgCQgBgKgDgEQgCgEgHAAQgGAAgEAFg");
	this.shape_98.setTransform(266.4,207);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgZAtQgIgEAAgGQAAgIAMgKQgIgCAAgFQAAgGAKgKQgKgGAAgNQAAgLAHgGQAIgGAMAAIAIABIAIAAIAUAAIAAADIgQAEQAGAGAAAHQAAAMgIAGQgIAHgKAAQgHAAgFgCQgEAEAAAEQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAHABIAJAAIAJAAQAKAAAIAEQAHAEAAAIQAAAMgMAHQgMAIgPAAQgNAAgHgFgAgWAfQAAAGAFAEQAFADAIAAQAJAAAHgEQAIgFAAgIQAAgFgEgBQgEgDgKAAIgHAAIgIAAIgFAAQgEAHAAAGgAgMgnQgDAFAAAIQAAAJADAFQADAFAHgBQAFABADgFQAEgEAAgJQAAgJgEgEQgDgFgGgBQgGAAgDAFg");
	this.shape_99.setTransform(259.9,208.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgXAYQgIgIAAgPQgBgPAKgJQAIgJAOAAQAPgBAIAKQAKAIgBAOQAAAPgJAKQgJAJgOAAQgOABgJgKgAgNgVQgFAIAAANQAAAMAFAIQAFAIAIAAQAJAAAFgHQAEgHAAgOQAAgMgEgIQgFgHgJAAQgIAAgFAGg");
	this.shape_100.setTransform(249.7,207);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgIAlQgFgEAAgIIABgpIgKgCIAAgDIALgBIAFgQIAGgCIABAAIgBAQIAAACIAVAAIAAAHIgVAAIAAAkQAAAHACADQACADAGAAIAMgCIAAADQgLAGgJAAQgHAAgDgEg");
	this.shape_101.setTransform(243.6,206.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgTAZQgIgJgBgPQAAgOAJgKQAIgJAOAAQAMAAAHAHQAHAHAAANIAAADIgqAAQgBAOAIAHQAGAGAOAAIAOgCIABADQgGAEgHACIgLABQgOAAgKgIgAgJgWQgEAGAAAJIAbAAIAAgCQAAgKgCgEQgEgEgFAAQgHAAgFAFg");
	this.shape_102.setTransform(234.8,207);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgZAtQgIgEAAgGQAAgIAMgKQgIgCAAgFQAAgGAKgKQgKgGAAgNQAAgLAHgGQAIgGAMAAIAIABIAIAAIAUAAIAAADIgQAEQAGAGAAAHQAAAMgIAGQgIAHgKAAQgHAAgFgCQgEAEAAAEQAAAAAAABQABAAAAABQAAAAAAAAQABAAAAAAIAHABIAJAAIAJAAQAKAAAIAEQAHAEAAAIQAAAMgMAHQgMAIgPAAQgNAAgHgFgAgWAfQAAAGAFAEQAFADAIAAQAJAAAHgEQAIgFAAgIQAAgFgEgBQgEgDgKAAIgHAAIgIAAIgFAAQgEAHAAAGgAgMgnQgDAFAAAIQAAAJADAFQADAFAHgBQAFABADgFQAEgEAAgJQAAgJgEgEQgDgFgGgBQgGAAgDAFg");
	this.shape_103.setTransform(228.4,208.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AAJAaQgJAIgJgBQgJABgGgFQgGgFAAgJQAAgKAJgFQAKgEATAAIAAgGQAAgHgEgEQgEgDgHAAQgGAAgKACIgBgFQANgFAKAAQAKgBAGAGQAGAFAAALIAAAbIAAAGIABADIADABIAFABIABADIgHACIgGABQgHABgCgIgAgLAEQgFACAAAHQAAAHAEADQADACAGAAQAGAAAFgCIAAgWQgNAAgGADg");
	this.shape_104.setTransform(221.4,207);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgXAdIAEgRIACAAIAGAOQADACAHAAQAFAAAEgDQADgCAAgGQAAgEgCgCQgDgDgFgCIgHgCQgIgDgEgEQgDgDAAgHQgBgJAHgFQAHgGAKABQALAAAIACIgEARIgCAAIgFgMIgIgCQgGAAgEADQgDACAAAEQAAAFACACQADADAGACIAGACQAJADAEADQAFAFAAAGQAAAKgIAFQgHAGgKgBQgLABgLgFg");
	this.shape_105.setTransform(215.2,207);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgWAdIADgRIACAAIAGAOQAEACAFAAQAGAAADgDQAEgCABgGQAAgEgDgCQgCgDgGgCIgGgCQgKgDgDgEQgEgDABgHQAAgJAGgFQAHgGAKABQAKAAAJACIgEARIgCAAIgFgMIgIgCQgFAAgFADQgDACAAAEQgBAFADACQADADAGACIAGACQAJADAEADQAEAFABAGQgBAKgHAFQgHAGgLgBQgKABgKgFg");
	this.shape_106.setTransform(209.5,207);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgSAZQgKgJABgPQAAgOAIgKQAJgJANAAQAMAAAHAHQAGAHAAANIAAADIgqAAQABAOAGAHQAHAGAOAAIAOgCIAAADQgFAEgGACIgMABQgOAAgJgIgAgIgWQgFAGgBAJIAdAAIAAgCQgBgKgDgEQgCgEgHAAQgGAAgEAFg");
	this.shape_107.setTransform(203.4,207);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AApAgIgPAAIAAgCIAHgCIACgCIAAgEIAAgeQAAgIgEgEQgEgDgHAAQgIAAgHAFIABAHIAAAYIAAAMQAAABABAAQAAABAAAAQAAAAAAABQABAAAAAAIAHACIAAACIgPAAIgOAAIAAgCIAHgCQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIAAgEIAAgeQAAgIgFgEQgDgDgIAAQgGAAgHAEIAAAdIAAAPQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAHACIAAACIgPAAIgRAAIAAgCIAJgDQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIgBgDIAWgEIABAAIAAAIQALgIAKAAQAMAAAFAJQALgJANAAQAJgBAFAGQAFAFABAKIAAAYIAAAMQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIAIADIABACIgRAAg");
	this.shape_108.setTransform(194,206.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgaAwIAAgCQAHgBAEgFQAEgEAJgUIABgCIgCAAIgWg2QAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIgGgCIAAgEIAPABIAOgBIABAEIgIACIAFAQIAHASIADAIIAFgKIAFgPIAHgRIgIgCIgBgEIAMABIANgBIAAAEIgHABQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgGANIgOAiIgGATIgCAPQgBAEgCACQgCACgHgBIgNAAg");
	this.shape_109.setTransform(181.2,208.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AAVAgIgOAAIAAgCIAGgCQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgEIAAgeQAAgIgEgEQgEgDgHAAQgHAAgHAEIAAAdIAAAPQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAHACIABACIgPAAIgQAAIAAgCIAIgDQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIAAgDIAVgEIABAAIAAAIQALgIAKAAQAJgBAGAGQAFAFAAAKIAAAYIABAMQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIAIADIAAACIgQAAg");
	this.shape_110.setTransform(174.1,206.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AAJAaQgJAIgJgBQgJABgGgFQgGgFAAgJQAAgKAJgFQAKgEATAAIAAgGQAAgHgEgEQgEgDgHAAQgGAAgKACIgBgFQANgFAKAAQAKgBAGAGQAGAFAAALIAAAbIAAAGIABADIADABIAFABIABADIgHACIgGABQgHABgCgIgAgLAEQgFACAAAHQAAAHAEADQADACAGAAQAGAAAFgCIAAgWQgNAAgGADg");
	this.shape_111.setTransform(166.7,207);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgHAgIgQAAIAAgCIAIgDQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIgBgDIAWgEIABAAIAAAIQALgIAMAAIABAAIgEAVIgDAAIgEgJQgBgDgEAAQgEgBgEAEIAAAcIAAAQQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAKADIAAACIgRAAg");
	this.shape_112.setTransform(158,206.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgSAZQgJgJAAgPQgBgOAJgKQAJgJANAAQAMAAAHAHQAGAHABANIAAADIgrAAQAAAOAHAHQAHAGAOAAIAOgCIABADQgGAEgGACIgMABQgOAAgJgIgAgIgWQgFAGgBAJIAcAAIAAgCQAAgKgDgEQgCgEgHAAQgGAAgEAFg");
	this.shape_113.setTransform(152,207);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgNAFIgMgcIgDgDIgHgCIAAgDIAQAAIAPAAIAAADIgIACIAMAhIADAJIAEgJIANghIgIgCIgBgDIAMAAIAMAAIAAADIgHACIgCACIgMAdIgMAbIgEAAIgLgbg");
	this.shape_114.setTransform(145.5,207);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgXAYQgIgIAAgPQgBgPAKgJQAIgJAPAAQAOgBAIAKQAKAIgBAOQAAAPgJAKQgKAJgNAAQgOABgJgKgAgNgVQgFAIAAANQAAAMAFAIQAFAIAJAAQAIAAAEgHQAFgHABgOQgBgMgFgIQgEgHgJAAQgIAAgFAGg");
	this.shape_115.setTransform(138.6,207);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgTAZQgIgJgBgPQAAgOAJgKQAIgJAOAAQAMAAAHAHQAHAHAAANIAAADIgqAAQgBAOAIAHQAGAGAOAAIAOgCIABADQgHAEgGACIgLABQgOAAgKgIgAgJgWQgEAGAAAJIAbAAIAAgCQAAgKgCgEQgDgEgGAAQgHAAgFAFg");
	this.shape_116.setTransform(128.7,207);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgWAdIADgRIADAAIAEAOQAFACAFAAQAGAAADgDQAFgCAAgGQgBgEgCgCQgCgDgGgCIgGgCQgKgDgDgEQgDgDgBgHQABgJAGgFQAHgGAKABQALAAAIACIgDARIgDAAIgEgMIgJgCQgFAAgEADQgFACAAAEQABAFACACQADADAGACIAFACQAKADAEADQAFAFgBAGQAAAKgHAFQgHAGgLgBQgKABgKgFg");
	this.shape_117.setTransform(122.5,207);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AAPAZQgKAJgKgBQgLABgFgGQgGgFAAgKIAAgOIAAgWIgJgCIAAgDIAWgEIAAAAIAAAUIAAAWQAAAIAEAEQAEADAGAAQAHAAAHgDIAAgdIAAgQIgJgCIAAgDIAWgEIABAAIgBAVIAAAeIABAEIABACIADACIAFAAIAAADIgHACIgGABQgHABgCgJg");
	this.shape_118.setTransform(115.6,207);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgXAYQgJgIAAgPQABgPAIgJQAKgJANAAQAPgBAJAKQAIAIABAOQAAAPgKAKQgKAJgNAAQgOABgJgKgAgNgVQgEAIAAANQAAAMAEAIQAFAIAIAAQAJAAAEgHQAGgHgBgOQABgMgGgIQgEgHgJAAQgJAAgEAGg");
	this.shape_119.setTransform(108,207);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AAqAgIgQAAIAAgCIAHgCIACgCIAAgEIAAgeQAAgIgEgEQgEgDgIAAQgHAAgGAFIAAAHIAAAYIABAMQAAABAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAHACIAAACIgPAAIgOAAIAAgCIAGgCQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIAAgeQAAgIgDgEQgEgDgHAAQgHAAgHAEIAAAdIAAAPQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAHACIABACIgQAAIgPAAIAAgCIAIgDQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgIIAAgWIAAgRIgJgCIAAgDIAVgEIABAAIAAAIQALgIAKAAQANAAAEAJQALgJAMAAQAKgBAFAGQAGAFgBAKIAAAYIAAAMQABABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAHADIAAACIgPAAg");
	this.shape_120.setTransform(98.2,206.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgSAZQgKgJABgPQAAgOAIgKQAJgJANAAQAMAAAHAHQAGAHAAANIAAADIgqAAQABAOAGAHQAHAGAOAAIAOgCIAAADQgGAEgFACIgMABQgOAAgJgIgAgJgWQgEAGgBAJIAdAAIAAgCQAAgKgEgEQgCgEgHAAQgGAAgFAFg");
	this.shape_121.setTransform(85.6,207);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgNAFIgMgcIgDgDIgHgCIAAgDIAPAAIAQAAIAAADIgIACIAMAhIADAJIADgJIAOghIgIgCIAAgDIALAAIAMAAIAAADIgGACIgDACIgMAdIgLAbIgFAAIgLgbg");
	this.shape_122.setTransform(79.1,207);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgXAYQgJgIAAgPQAAgPAJgJQAKgJAOAAQAOgBAIAKQAJAIAAAOQAAAPgJAKQgKAJgNAAQgOABgJgKgAgNgVQgFAIABANQgBAMAFAIQAFAIAJAAQAIAAAEgHQAGgHAAgOQAAgMgGgIQgFgHgIAAQgJAAgEAGg");
	this.shape_123.setTransform(72.2,207);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgmggIAAA7IAAANQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIAJADIAAACIgOAAIgOAAIAAgCIAIgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgNIAAg3IAAgMQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAgBIgIgCIAAgDIANAAIANAAIAeBKIAghKIALAAIAPAAIAAADIgJACQAAABgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAIAAAMIAAA3IAAANQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAIADIAAACIgRAAIgQAAIgBgCIAIgDQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAgBIAAgNIAAg7IgiBPIgEABg");
	this.shape_124.setTransform(62.3,205.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#993300").s().p("AgHAeQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDgAgHgNQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_125.setTransform(47.6,207.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#993300").s().p("AgVAZQgKgIAAgQQAAgOAKgKQAKgKAPAAQANAAAIAIQAHAHAAANIAAAEIgqAAQAAANAGAGQAGAGAPAAQAIAAAHgBIAAAEQgNAHgOAAQgPAAgLgJgAgGgVQgEAGAAAIIAWAAIAAgCQAAgJgDgEQgCgEgFAAQgFAAgDAFg");
	this.shape_126.setTransform(41.5,207);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#993300").s().p("AgJAmQgGgFAAgIIABgoIgJgCIgBgFIAMgBIAGgQIAJgBIACAAIAAARIATAAIAAAIIgTAAIgBAkQAAAGACADQACADAHgBIAKAAIAAAEQgLAGgJgBQgJAAgFgDg");
	this.shape_127.setTransform(35.2,206.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#993300").s().p("AgaAZQgJgKAAgOQgBgOAKgKQAKgKARAAQAQAAAKAJQAKAJAAAPQgBAOgKAKQgKAKgQAAQgRAAgJgJgAgKgUQgFAHAAANQAAAMAFAIQADAHAIAAQAHAAADgHQAEgGAAgOQAAgMgEgHQgEgHgHAAQgHAAgDAGg");
	this.shape_128.setTransform(28.3,207);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#993300").s().p("AgXgSIgFgIIAAAKIAAAqIAAANQAAABAAAAQAAABABAAQAAAAAAAAQAAABABAAIAJACIAAADIgPAAIgQAAIAAgDIAJgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgNIAAg2IAAgLQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAIgJgDIAAgDIAPAAIAMAAIAtA3IAFAIIAAgJIAAgjIAAgLQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgIgDIgBgDIAQAAIAPAAIAAADIgJADQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABIAAALIAABLIgIABg");
	this.shape_129.setTransform(19,205.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#993300").s().p("AgVBTQAbggAAgzQAAgygbgfIAEgEQAnAiAAAzQAAA0gnAhg");
	this.shape_130.setTransform(701.8,37.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#993300").s().p("AgeAlIAFgWIAEAAIAGATQAFACAIAAQAHgBAFgDQAFgDAAgHQAAgFgEgDQgCgDgIgDIgIgDQgMgEgFgFQgEgFAAgIQAAgLAJgHQAJgHANAAQANAAALAEIgFAVIgDAAIgGgQQgEgBgHgBQgHAAgEADQgGAEAAAFQAAAGADADQAEADAIADIAHACQAMAFAGAEQAGAFgBAJQAAAMgJAHQgKAHgNAAQgOAAgOgGg");
	this.shape_131.setTransform(695.1,39.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#993300").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgNANgHQAMgFAYgBIABgHQAAgJgFgFQgGgFgJAAQgIAAgMAEIgCgHQARgHANAAQANAAAIAHQAHAHAAANIAAAkIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADACIAHAAIABADIgJAEIgIABQgIAAgEgJgAgOAEQgHAEAAAJQAAAIAFAEQAEAEAIAAQAIgBAGgDIAAgdQgRAAgHAEg");
	this.shape_132.setTransform(687.2,39.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_133.setTransform(678.6,39.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#993300").s().p("AARA5QgOALgMgBQgQAAgKgLQgKgLAAgRQAAgXANgKQAOgMAVAAIAOABIgBgmIgMgEIgBgCIAegHIAAABIAAApIAAAuIAAAZIAAAHIACAEIADACIAHAAIAAAEIgJADIgHABQgJABgDgLgAgSgBQgJAIABARQgBAPAIAJQAGAJANAAQAHAAAKgEIAAg9QgHgBgHAAQgOgBgHAJg");
	this.shape_134.setTransform(669.2,36.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#993300").s().p("AAAA+IgTABIgBgEIAKgEQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgLIAAgeIgBgUIgLgDIgBgEIAcgFIABAAIgBAZIAAAhIAAAPQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAKAEIAAAEIgVgBgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAACADQADADAAAEQAAAFgDADQgDADgDAAQgFAAgCgDg");
	this.shape_135.setTransform(661.5,37);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#993300").s().p("AALAQIgIgUIgDgJIgDAJIgIAUIgJAYIgIABIgNglIgOgjQgBgDgDgBIgHgCIAAgDIASAAIAUAAIAAADIgKADQAGAUAJAXIAEALIAEgLIAKgcIAGgVIAGAAIAHAVIAKAcIAEALIADgLQALgXAGgUIgKgDIAAgDIAOAAIAPAAIAAADIgHACQgDABgBADIgPAjIgOAkIgIABIgIgZg");
	this.shape_136.setTransform(648.1,39.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_137.setTransform(637.3,39.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#993300").s().p("AAcApIgTABIgBgEIAJgCQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgJAAQgJAAgJAFIAAAlIAAAUQAAABAAABQAAAAAAABQABAAAAAAQAAAAABABIAJACIAAAEIgTgBIgVABIAAgEIAKgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgLIAAgcIAAgVIgMgEIAAgDIAcgGIABAAIAAALQAPgLAMAAQANAAAHAHQAHAHAAANIAAAeIAAAQQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAKADIAAAEIgUgBg");
	this.shape_138.setTransform(627.8,39);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#993300").s().p("AgjA+IAAgEQAKgBAEgFQAGgGAMgaIAAgCIgBAAIgdhGQgBgCgDgBIgIgDIAAgDIAUAAIATAAIAAADIgKADIAHAVIAJAXIAEALIAFgNIAIgUIAIgWIgKgDIAAgDIAPAAIAPAAIABADIgJADQgCABgCACIgHARQgLAbgGAQIgHAYIgEAWQgBAEgDACQgCACgJAAIgSAAg");
	this.shape_139.setTransform(614,41.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#993300").s().p("AAcApIgTABIgBgEIAJgCQABgBAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgJAAQgJAAgJAFIAAAlIAAAUQAAABAAABQAAAAAAABQAAAAABAAQAAAAABABIAJACIAAAEIgTgBIgVABIAAgEIAKgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgLIAAgcIAAgVIgMgEIAAgDIAcgGIABAAIAAALQAPgLAMAAQANAAAHAHQAHAHAAANIAAAeIAAAQQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAKADIAAAEIgUgBg");
	this.shape_140.setTransform(604.9,39);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#993300").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgNANgHQAMgFAYgBIABgHQAAgJgFgFQgGgFgJAAQgIAAgMAEIgCgHQARgHANAAQANAAAIAHQAHAHAAANIAAAkIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADACIAHAAIABADIgJAEIgIABQgIAAgEgJgAgOAEQgHAEAAAJQAAAIAFAEQAEAEAIAAQAIgBAGgDIAAgdQgRAAgHAEg");
	this.shape_141.setTransform(595.3,39.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#993300").s().p("AgJApIgUABIgBgEIALgDQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAgLIAAgcIgBgVIgLgEIgBgDIAcgGIABAAIAAALQAPgLAQAAIABAAIgFAbIgEABQgCgHgDgEQgCgFgFAAQgFAAgGAEIAAAlIAAAUQAAABAAAAQABAAAAABQAAAAAAAAQAAABABAAIALADIABAEIgWgBg");
	this.shape_142.setTransform(584.1,39);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_143.setTransform(575.7,39.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#993300").s().p("AgdAlIAEgWIAEAAIAGATQAGACAHAAQAHgBAFgDQAFgDAAgHQAAgFgEgDQgDgDgHgDIgIgDQgMgEgFgFQgEgFAAgIQAAgLAJgHQAJgHANAAQANAAALAEIgEAVIgEAAIgFgQQgGgBgGgBQgGAAgFADQgGAEAAAFQAAAGAEADQADADAIADIAHACQAMAFAGAEQAGAFgBAJQAAAMgJAHQgKAHgNAAQgOAAgNgGg");
	this.shape_144.setTransform(563.5,39.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_145.setTransform(554.9,39.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#993300").s().p("AgYA/IgUAAIAAgDIAKgEQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAAgUIAAgiIAAgxIgMgEIAAgDIAcgGIAAAAIAAAJQAOgJAMAAQAQAAAKALQAJALAAASQAAAVgMALQgMANgWAAIgPgBIAAATIABAMQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIALAEIABADIgXAAgAgQgvIAAA9QAIACAHAAQAOAAAHgJQAHgJAAgRQAAgQgHgIQgHgJgNAAQgIAAgIAFg");
	this.shape_146.setTransform(544.9,41.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#993300").s().p("AgjA+IAAgEQAKgBAEgFQAGgGAMgaIAAgCIgBAAIgdhGQgBgCgDgBIgIgDIAAgDIAUAAIATAAIAAADIgKADIAHAVIAJAXIAEALIAFgNIAIgUIAIgWIgKgDIAAgDIAPAAIAPAAIABADIgJADQgCABgCACIgHARQgLAbgGAQIgHAYIgEAWQgBAEgDACQgCACgJAAIgSAAg");
	this.shape_147.setTransform(535.6,41.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#993300").s().p("AAAA9IgXABIgBgEIANgEQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIAAgRIAAhXIgfAAIgIAYIgEAAIgCgfIABgBIApABIAXAAIApgBIABABIgGAfIgDAAIgGgYIgfAAIAABXIAAARQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAIANAEIAAAEIgYgBg");
	this.shape_148.setTransform(527.3,37);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#993300").s().p("AgVAAQAAgzAngiIAEAEQgbAfAAAyQAAAzAbAgIgEACQgnghAAg0g");
	this.shape_149.setTransform(518.6,37.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#993300").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_150.setTransform(508.3,42.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#993300").s().p("AALAQIgJgUIgCgJIgDAJIgIAUIgJAYIgHABIgOglIgOgjQgBgDgEgBIgGgCIAAgDIASAAIAVAAIAAADIgLADQAGAUAJAXIAEALIAEgLIAKgcIAGgVIAHAAIAGAVIAKAcIAEALIADgLQAKgXAHgUIgKgDIAAgDIAPAAIANAAIABADIgHACQgDABgBADIgPAjIgOAkIgIABIgIgZg");
	this.shape_151.setTransform(501.1,39.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_152.setTransform(490,39.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#993300").s().p("AAABCIgTABIgBgEIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgWIAAgkIAAg0IgMgEIgBgCIAcgHIABABIgBAoIAAA4IAAAaQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABAEIgVgBg");
	this.shape_153.setTransform(482.6,36.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_154.setTransform(475.8,39.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#993300").s().p("AggA/IABgeIAAgyIgBglIgMgEIgBgCIAegHIABABIgBAoIAAASQAOgJALAAQAQAAAKALQAKAKAAARQAAAWgNANQgMAMgVgBQgPAAgRgEgAgPgDIAAA8QAHADAHAAQAOAAAIgJQAGgKABgQQAAgPgHgJQgHgIgNAAQgIAAgIAEg");
	this.shape_155.setTransform(466.2,36.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#993300").s().p("AgeAlIAGgWIADAAIAGATQAGACAHAAQAHgBAFgDQAFgDAAgHQAAgFgDgDQgDgDgIgDIgIgDQgMgEgEgFQgFgFAAgIQAAgLAJgHQAIgHAOAAQANAAALAEIgEAVIgDAAIgHgQQgEgBgGgBQgHAAgGADQgFAEAAAFQAAAGADADQAEADAIADIAHACQAMAFAGAEQAFAFABAJQAAAMgKAHQgJAHgOAAQgNAAgPgGg");
	this.shape_156.setTransform(453.6,39.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#993300").s().p("AgMAwQgEgFAAgKIABg1IgNgDIAAgEIAOgBIAFgVIAJgDIAAAAIAAAVIAAADIAbAAIAAAIIgbAAIAAAvQAAAJADAEQACADAIAAIAQgBIAAADQgPAIgMAAQgJAAgFgFg");
	this.shape_157.setTransform(446.8,38.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#993300").s().p("AAcApIgTABIgBgEIAJgCQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgJAAQgJAAgJAFIAAAlIAAAUQAAABAAABQAAAAAAABQAAAAABAAQAAAAABABIAJACIAAAEIgTgBIgVABIAAgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgLIAAgcIAAgVIgMgEIAAgDIAcgGIABAAIAAALQAPgLAMAAQANAAAHAHQAHAHAAANIAAAeIAAAQQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAKADIAAAEIgUgBg");
	this.shape_158.setTransform(438.4,39);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_159.setTransform(428.9,39.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#993300").s().p("AA2ApIgUABIAAgEIAIgCQABgBAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgKAAQgJAAgJAGIABAJIAAAfIABAQQAAABAAABQAAAAAAABQAAAAABAAQAAAAABABIAJACIAAAEIgTgBIgTABIgBgEIAJgCQABgBAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgJAAQgJAAgJAFIAAAlIAAAUQAAABAAABQAAAAAAABQABAAAAAAQAAAAABABIAKACIAAAEIgUgBIgVABIAAgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAgLIAAgcIgBgVIgMgEIAAgDIAcgGIABAAIAAALQAOgLANAAQAQAAAGAMQAOgMARAAQALAAAIAHQAGAHAAAMIAAAfIAAAQQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAKADIAAAEIgUgBg");
	this.shape_160.setTransform(416.8,39);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#993300").s().p("AA1ApIgTABIAAgEIAIgCQABgBAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgKAAQgKAAgIAGIABAJIAAAfIAAAQQAAABABABQAAAAAAABQAAAAABAAQAAAAAAABIAJACIAAAEIgTgBIgSABIgBgEIAJgCQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIABgFIAAgmQAAgLgFgEQgFgFgKAAQgIAAgJAFIAAAlIAAAUQAAABAAABQAAAAABABQAAAAAAAAQABAAAAABIAKACIAAAEIgUgBIgVABIAAgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgLIAAgcIAAgVIgMgEIAAgDIAcgGIABAAIAAALQAPgLAMAAQAQAAAGAMQAOgMAQAAQANAAAGAHQAIAHgBAMIAAAfIAAAQQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAJADIABAEIgVgBg");
	this.shape_161.setTransform(401.2,39);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_162.setTransform(388.4,39.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#993300").s().p("AgYAgQgLgMAAgSQAAgTANgMQANgNATAAQANAAAMAGIgFAXIgEABIgHgVQgEgBgFgBQgMAAgHAKQgIAJAAAPQAAAQAIAJQAJAIARAAIASgCIAAAFQgFADgIACQgIADgIAAQgSAAgMgLg");
	this.shape_163.setTransform(379.9,39.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#993300").s().p("AgJApIgUABIgBgEIALgDQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAgLIAAgcIgBgVIgLgEIgBgDIAcgGIABAAIAAALQAPgLAQAAIABAAIgFAbIgEABQgCgHgDgEQgCgFgFAAQgFAAgGAEIAAAlIAAAUQAAABAAAAQABAAAAABQAAAAAAAAQAAABABAAIALADIABAEIgWgBg");
	this.shape_164.setTransform(368.8,39);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#993300").s().p("AAUAhQgOAKgNAAQgOAAgHgHQgGgHAAgNIAAgRIgBgcIgMgEIAAgDIAcgGIACAAIgBAbIAAAbQAAALAFAEQAFAFAIAAQAJAAAKgFIAAgkIgBgUIgMgEIAAgDIAcgGIACAAIgBAbIAAAnIABAFIACAEIADACIAHAAIAAADIgJAEIgIABQgJAAgCgKg");
	this.shape_165.setTransform(360.1,39.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_166.setTransform(350.2,39.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#993300").s().p("AgjA+IAAgEQAKgBAEgFQAGgGAMgaIAAgCIgBAAIgdhGQgBgCgDgBIgIgDIAAgDIAUAAIATAAIAAADIgKADIAHAVIAJAXIAEALIAFgNIAIgUIAIgWIgKgDIAAgDIAPAAIAPAAIABADIgJADQgCABgCACIgHARQgLAbgGAQIgHAYIgEAWQgBAEgDACQgCACgJAAIgSAAg");
	this.shape_167.setTransform(341.4,41.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#993300").s().p("AghA7QgKgGAAgIQAAgKAPgNQgJgDAAgGQAAgIANgNQgOgJAAgPQAAgOAKgIQAJgJAQAAIALABIALACIAYgBIABAEIgVAFQAHAIAAAKQAAAOgKAIQgKAJgOAAQgIAAgGgDQgFAHAAAEQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQADABAGAAIAMAAIALAAQAOAAAJAFQAJAFAAALQAAAQgPAJQgQAJgTAAQgQAAgKgFgAgdAoQAAAIAGAEQAHAEAKAAQAMAAAKgFQAJgGAAgKQAAgGgFgDQgEgDgNAAIgKAAIgKABIgGgBQgGAJAAAIgAgQgyQgEAFAAALQAAAMAEAGQAFAGAIAAQAHAAAEgGQAEgGAAgLQAAgLgEgGQgFgGgHAAQgIAAgEAGg");
	this.shape_168.setTransform(328.8,41.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#993300").s().p("AAcApIgTABIgBgEIAJgCQABgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgJAAQgJAAgJAFIAAAlIAAAUQAAABAAABQAAAAAAABQAAAAABAAQAAAAABABIAJACIAAAEIgTgBIgVABIAAgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgLIAAgcIAAgVIgMgEIAAgDIAcgGIABAAIAAALQAPgLAMAAQANAAAHAHQAHAHAAANIAAAeIAAAQQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAKADIAAAEIgUgBg");
	this.shape_169.setTransform(318.8,39);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#993300").s().p("AAAA+IgTABIgBgEIAKgEQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgLIAAgeIgBgUIgLgDIgBgEIAcgFIABAAIgBAZIAAAhIAAAPQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAKAEIAAAEIgVgBgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAACADQADADAAAEQAAAFgDADQgDADgDAAQgFAAgCgDg");
	this.shape_170.setTransform(311,37);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#993300").s().p("AgRAGIgPgkQgCgDgDgBIgIgDIAAgDIAUAAIATAAIABADIgLADIAQAqIAEAMIAEgMIARgqIgKgDIAAgDIAPAAIAPAAIAAADIgIADIgDADIgRAlIgNAjIgHAAIgOgjg");
	this.shape_171.setTransform(304,39.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#993300").s().p("AAAA+IgTABIgBgEIAKgEQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgLIAAgeIgBgUIgLgDIgBgEIAcgFIABAAIgBAZIAAAhIAAAPQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAKAEIAAAEIgVgBgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAACADQADADAAAEQAAAFgDADQgDADgDAAQgFAAgCgDg");
	this.shape_172.setTransform(297.4,37);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#993300").s().p("AggA7QgLgGABgIQAAgKAOgNQgJgDAAgGQAAgIANgNQgOgJAAgPQAAgOAJgIQAKgJAQAAIALABIALACIAYgBIABAEIgVAFQAHAIAAAKQAAAOgKAIQgKAJgOAAQgIAAgGgDQgFAHAAAEQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQACABAHAAIAMAAIALAAQAOAAAJAFQAJAFAAALQAAAQgPAJQgQAJgSAAQgRAAgJgFgAgdAoQAAAIAGAEQAHAEAKAAQAMAAAJgFQAKgGAAgKQAAgGgFgDQgEgDgNAAIgJAAIgLABIgGgBQgGAJAAAIgAgQgyQgEAFAAALQAAAMAEAGQAFAGAIAAQAHAAAEgGQAEgGAAgLQAAgLgEgGQgFgGgHAAQgIAAgEAGg");
	this.shape_173.setTransform(290.5,41.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#993300").s().p("AgjA+IAAgEQAKgBAEgFQAGgGAMgaIAAgCIgBAAIgdhGQgBgCgDgBIgIgDIAAgDIAUAAIATAAIAAADIgKADIAHAVIAJAXIAEALIAFgNIAIgUIAIgWIgKgDIAAgDIAPAAIAPAAIABADIgJADQgCABgCACIgHARQgLAbgGAQIgHAYIgEAWQgBAEgDACQgCACgJAAIgSAAg");
	this.shape_174.setTransform(277.7,41.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#993300").s().p("AggA/IAAgeIAAgyIAAglIgMgEIAAgCIAdgHIABABIgBAoIAAASQAOgJALAAQARAAAJALQAKAKAAARQgBAWgMANQgMAMgVgBQgPAAgRgEgAgPgDIAAA8QAHADAHAAQAOAAAHgJQAHgKABgQQgBgPgGgJQgHgIgNAAQgIAAgIAEg");
	this.shape_175.setTransform(268.4,36.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#993300").s().p("AAABCIgTABIgBgEIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgWIAAgkIAAg0IgMgEIgBgCIAcgHIABABIgBAoIAAA4IAAAaQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABAEIgVgBg");
	this.shape_176.setTransform(256.6,36.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_177.setTransform(249.2,39.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_178.setTransform(239.4,39.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#993300").s().p("AgMAwQgEgFAAgKIAAg1IgLgDIgBgEIANgBIAHgVIAIgDIABAAIAAAVIAAADIAaAAIAAAIIgaAAIgBAvQAAAJACAEQADADAIAAIAPgBIABADQgPAIgMAAQgIAAgGgFg");
	this.shape_179.setTransform(231.6,38.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#993300").s().p("AgdAlIAFgWIADAAIAGATQAGACAHAAQAHgBAFgDQAFgDAAgHQAAgFgDgDQgEgDgHgDIgIgDQgMgEgEgFQgFgFAAgIQAAgLAJgHQAIgHAOAAQANAAALAEIgEAVIgDAAIgGgQQgFgBgGgBQgHAAgGADQgFAEAAAFQAAAGADADQAEADAIADIAHACQAMAFAGAEQAFAFABAJQAAAMgKAHQgJAHgOAAQgNAAgOgGg");
	this.shape_180.setTransform(220.9,39.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#993300").s().p("AAAA+IgTABIgBgEIAKgEQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgLIAAgeIgBgUIgLgDIgBgEIAcgFIABAAIgBAZIAAAhIAAAPQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAKAEIAAAEIgVgBgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAACADQADADAAAEQAAAFgDADQgDADgDAAQgFAAgCgDg");
	this.shape_181.setTransform(214.7,37);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#993300").s().p("AAcBCIgTABIgBgEIAJgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgFIAAgnQAAgLgFgDQgFgEgJAAQgJAAgJADIAAAnIAAAUQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAJADIAAAEIgTgBIgVABIAAgEIAKgDQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgVIAAglIAAgfIAAgVIgMgEIAAgCIAcgHIABABIAAAYIAAAjQAPgKAMAAQAMAAAIAGQAHAHAAANIAAAeIAAARQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAKAEIAAAEIgUgBg");
	this.shape_182.setTransform(206.9,36.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#993300").s().p("AgMAwQgEgFAAgKIABg1IgNgDIAAgEIAOgBIAFgVIAJgDIABAAIAAAVIAAADIAaAAIAAAIIgaAAIgBAvQAAAJADAEQACADAIAAIAQgBIAAADQgPAIgMAAQgIAAgGgFg");
	this.shape_183.setTransform(198.5,38.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_184.setTransform(187.2,39.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#993300").s().p("AgRAGIgPgkQgCgDgDgBIgIgDIAAgDIAUAAIATAAIABADIgLADIAQAqIAEAMIAEgMIARgqIgKgDIAAgDIAPAAIAPAAIAAADIgIADIgDADIgRAlIgNAjIgHAAIgOgjg");
	this.shape_185.setTransform(178.9,39.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_186.setTransform(170,39.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#993300").s().p("AgJApIgUABIgBgEIALgDQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAAgLIAAgcIgBgVIgLgEIgBgDIAcgGIABAAIAAALQAPgLAQAAIABAAIgFAbIgEABQgCgHgDgEQgCgFgFAAQgFAAgGAEIAAAlIAAAUQAAABAAAAQABAAAAABQAAAAAAAAQAAABABAAIALADIABAEIgWgBg");
	this.shape_187.setTransform(162,39);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#993300").s().p("AgYA/IgUAAIAAgDIAKgEQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAAgUIAAgiIAAgxIgMgEIAAgDIAcgGIAAAAIAAAJQAOgJAMAAQAQAAAKALQAJALAAASQAAAVgMALQgMANgWAAIgPgBIAAATIABAMQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIALAEIABADIgXAAgAgQgvIAAA9QAIACAHAAQAOAAAHgJQAHgJAAgRQAAgQgHgIQgHgJgNAAQgIAAgIAFg");
	this.shape_188.setTransform(153.3,41.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#993300").s().p("AA2ApIgUABIAAgEIAJgCQAAgBAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgKAAQgKAAgIAGIABAJIAAAfIABAQQAAABAAABQAAAAAAABQAAAAABAAQAAAAABABIAIACIAAAEIgSgBIgTABIAAgEIAIgCQABgBAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgFIAAgmQAAgLgFgEQgFgFgJAAQgJAAgJAFIAAAlIAAAUQAAABAAABQAAAAAAABQABAAAAAAQABAAAAABIAJACIAAAEIgTgBIgUABIgBgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBIAAgLIAAgcIgBgVIgLgEIgBgDIAcgGIABAAIAAALQAOgLANAAQAQAAAGAMQAOgMARAAQALAAAIAHQAGAHABAMIAAAfIAAAQQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAKADIAAAEIgUgBg");
	this.shape_189.setTransform(140.7,39);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#993300").s().p("AAAA+IgTABIgBgEIAKgEQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgLIAAgeIgBgUIgLgDIgBgEIAcgFIABAAIgBAZIAAAhIAAAPQAAAAABABQAAAAAAAAQAAABABAAQAAAAABAAIAKAEIAAAEIgVgBgAgHgsQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAACADQADADAAAEQAAAFgDADQgDADgDAAQgFAAgCgDg");
	this.shape_190.setTransform(130.3,37);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#993300").s().p("AgeAfQgLgLAAgTQAAgTAMgLQAMgNASAAQASAAALALQAMAMAAASQAAATgNAMQgMANgRAAQgSAAgMgMgAgRgaQgGAJAAARQAAAQAGAKQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgKQgGgKgLAAQgLAAgGAJg");
	this.shape_191.setTransform(118.8,39.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#993300").s().p("AgLAwQgFgFAAgKIAAg1IgMgDIAAgEIAOgBIAFgVIAJgDIAAAAIAAAVIAAADIAbAAIAAAIIgbAAIAAAvQAAAJADAEQACADAIAAIAPgBIABADQgPAIgMAAQgJAAgEgFg");
	this.shape_192.setTransform(111,38.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#993300").s().p("AgYA/IgUAAIAAgDIAKgEQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgUIAAgiIAAgxIgMgEIAAgDIAcgGIAAAAIAAAJQAOgJAMAAQAQAAAKALQAJALAAASQAAAVgMALQgMANgWAAIgPgBIAAATIABAMQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIALAEIABADIgXAAgAgQgvIAAA9QAIACAHAAQAOAAAHgJQAHgJAAgRQAAgQgHgIQgHgJgNAAQgIAAgIAFg");
	this.shape_193.setTransform(98.8,41.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#993300").s().p("AAABCIgTABIgBgEIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgWIAAgkIAAg0IgMgEIgBgCIAcgHIABABIgBAoIAAA4IAAAaQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABAEIgVgBg");
	this.shape_194.setTransform(91.4,36.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_195.setTransform(84.6,39.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#993300").s().p("AAcBCIgTABIgBgEIAJgDQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAgFIAAgnQAAgLgFgDQgFgEgJAAQgJAAgJADIAAAnIAAAUQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAJADIAAAEIgTgBIgVABIAAgEIAKgDQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgVIAAglIAAgfIAAgVIgMgEIAAgCIAcgHIABABIAAAYIAAAjQAPgKAMAAQAMAAAIAGQAHAHAAANIAAAeIAAARQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAKAEIAAAEIgUgBg");
	this.shape_196.setTransform(75.1,36.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_197.setTransform(61.5,39.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#993300").s().p("AgdAlIAEgWIAEAAIAGATQAGACAHAAQAHgBAFgDQAFgDAAgHQAAgFgEgDQgDgDgHgDIgIgDQgMgEgFgFQgEgFAAgIQAAgLAJgHQAJgHANAAQANAAALAEIgFAVIgDAAIgGgQQgEgBgHgBQgGAAgFADQgGAEAAAFQAAAGAEADQADADAIADIAHACQAMAFAGAEQAGAFgBAJQAAAMgJAHQgKAHgNAAQgNAAgOgGg");
	this.shape_198.setTransform(53.5,39.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#993300").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgNANgHQAMgFAYgBIABgHQAAgJgFgFQgGgFgJAAQgIAAgMAEIgCgHQARgHANAAQANAAAIAHQAHAHAAANIAAAkIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADACIAHAAIABADIgJAEIgIABQgIAAgEgJgAgOAEQgHAEAAAJQAAAIAFAEQAEAEAIAAQAIgBAGgDIAAgdQgRAAgHAEg");
	this.shape_199.setTransform(45.6,39.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#993300").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAJQAJAJAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgCIAAAFQgHAEgIACQgIACgHAAQgSAAgMgLgAgLgbQgGAHgBALIAlAAIAAgDQAAgNgEgFQgEgFgIAAQgJAAgFAIg");
	this.shape_200.setTransform(37,39.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#993300").s().p("AAABCIgTABIgBgEIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIAAgWIAAgkIAAg0IgMgEIgBgCIAcgHIABABIgBAoIAAA4IAAAaQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABAEIgVgBg");
	this.shape_201.setTransform(30.1,36.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#993300").s().p("AgWA9IgWABIgBgEIAMgDQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAgIIAAgKIAAhGIAAgIIAAgGQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAIgLgEIgBgDIAXAAIAOAAIALgBQAVAAAKAJQAMAHAAAQQAAAUgNAJQgMALgWAAIgNgBIAAAYIABAKIAAAHQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIAMADIAAAEIgWgBgAgOg1IAAA3IAMABQAOAAAHgGQAHgIAAgOQAAgOgHgIQgHgGgOAAIgMAAg");
	this.shape_202.setTransform(22.5,37);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_203.setTransform(562.7,15.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#666666").s().p("AA1AqIgTAAIAAgEIAIgDQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgGIAAglQAAgLgFgFQgFgEgKAAQgKAAgIAGIABAJIAAAfIAAARQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAIAJADIAAAEIgTAAIgSAAIgBgEIAJgDQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIABgGIAAglQAAgLgFgFQgFgEgKAAQgIAAgJAFIAAAmIAAAUQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIAKADIAAAEIgUAAIgVAAIAAgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAAgeIAAgUIgMgEIAAgDIAcgGIABABIAAAKQAPgLAMAAQAQAAAGAMQAOgMAQAAQANAAAGAHQAIAHgBAMIAAAfIAAAQQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAJADIABAEIgVAAg");
	this.shape_204.setTransform(550.6,15);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#666666").s().p("AAAA+IgTAAIgBgDIAKgDQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAAgLIAAgeIgBgUIgLgEIgBgCIAcgGIABAAIgBAZIAAAhIAAAOQAAABABABQAAAAAAABQAAAAABAAQAAAAABABIAKADIAAADIgVAAgAgHgsQgDgDAAgEQAAgEADgDQADgDAEgBQAEABACADQADABAAAGQAAAEgDADQgDADgDAAQgFAAgCgDg");
	this.shape_205.setTransform(540.2,13);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#666666").s().p("AgLAwQgFgFAAgLIAAg1IgMgCIAAgEIAOgBIAFgWIAJgCIAAABIAAAUIAAADIAbAAIAAAIIgbAAIAAAvQAAAJADADQACAEAIAAIAPgCIABAFQgPAHgMAAQgJAAgEgFg");
	this.shape_206.setTransform(534.4,14.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#666666").s().p("AAcBCIgTAAIgBgDIAJgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgFIAAgnQAAgKgFgEQgFgEgJgBQgJAAgJAFIAAAmIAAAUQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAJADIAAADIgTAAIgVAAIAAgDIAKgDQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgVIAAgkIAAggIAAgVIgMgDIAAgDIAcgGIABABIAAAXIAAAiQAPgKAMABQAMgBAIAIQAHAGAAAMIAAAfIAAAQQAAABAAABQABAAAAABQAAAAAAAAQABAAAAABIAKADIAAADIgUAAg");
	this.shape_207.setTransform(522,12.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#666666").s().p("AgMAwQgEgFAAgLIABg1IgNgCIAAgEIAOgBIAGgWIAIgCIABABIAAAUIAAADIAaAAIAAAIIgaAAIgBAvQAAAJADADQACAEAIAAIAQgCIAAAFQgPAHgMAAQgIAAgGgFg");
	this.shape_208.setTransform(513.6,14.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#666666").s().p("AAAA+IgTAAIgBgDIAKgDQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAAgLIAAgeIgBgUIgLgEIgBgCIAcgGIABAAIgBAZIAAAhIAAAOQAAABABABQAAAAAAABQAAAAABAAQAAAAABABIAKADIAAADIgVAAgAgHgsQgDgDAAgEQAAgEADgDQADgDAEgBQAEABACADQADABAAAGQAAAEgDADQgDADgDAAQgFAAgCgDg");
	this.shape_209.setTransform(507.9,13);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#666666").s().p("AAKAQIgIgUIgCgJIgCAJIgJAUIgJAYIgHABIgOglIgOgjQgBgDgEgBIgGgCIAAgDIATAAIAUAAIAAADIgKADQAFAUAJAXIAEALIADgLIALgcIAGgVIAHAAIAGAVIALAcIADALIAEgLQAJgXAHgUIgKgDIgBgDIAQAAIANAAIABADIgHACQgDABgCADIgOAjIgOAkIgIABIgJgZg");
	this.shape_210.setTransform(498.7,15.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#666666").s().p("AARA5QgNALgMAAQgRAAgJgMQgKgMAAgRQAAgWAMgLQANgLAWAAIAOABIgBgmIgMgDIgBgDIAdgGIABABIgBAnIAAAvIAAAYIABAIIACAEIADACIAHABIABADIgKADIgHACQgJAAgDgLgAgSgBQgIAIAAARQAAAPAGAJQAIAJAMAAQAIAAAJgEIAAg9QgGgCgIABQgOAAgHAIg");
	this.shape_211.setTransform(483.1,12.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_212.setTransform(473.6,15.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#666666").s().p("AARA5QgNALgMAAQgRAAgJgMQgLgMABgRQgBgWANgLQAOgLAVAAIAOABIgBgmIgMgDIgBgDIAdgGIABABIgBAnIAAAvIAAAYIABAIIACAEIADACIAHABIABADIgKADIgHACQgJAAgDgLgAgSgBQgJAIABARQgBAPAIAJQAGAJANAAQAIAAAJgEIAAg9QgHgCgHABQgOAAgHAIg");
	this.shape_213.setTransform(464.3,12.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#666666").s().p("AARA5QgOALgMAAQgQAAgJgMQgLgMAAgRQAAgWAOgLQAMgLAXAAIAMABIAAgmIgMgDIAAgDIAcgGIABABIgBAnIAAAvIAAAYIABAIIABAEIAFACIAGABIABADIgKADIgHACQgJAAgDgLgAgTgBQgHAIgBARQABAPAGAJQAIAJAMAAQAIAAAIgEIAAg9QgGgCgGABQgOAAgJAIg");
	this.shape_214.setTransform(454.1,12.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#666666").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgOANgGQAMgGAYABIABgHQAAgKgFgFQgGgFgJABQgIAAgMACIgCgGQARgHANAAQANAAAIAHQAHAHAAAOIAAAjIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADABIAHABIABAEIgJADIgIABQgIAAgEgJgAgOAFQgHADAAAJQAAAIAFAEQAEADAIABQAIAAAGgDIAAgeQgRAAgHAFg");
	this.shape_215.setTransform(444.6,15.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_216.setTransform(432.4,15.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#666666").s().p("AggA+IAAgcIAAgzIAAglIgMgDIAAgDIAdgGIAAABIAAAnIAAARQAOgJALABQARgBAJALQAKALAAARQgBAWgMAMQgMANgVAAQgPgBgRgFgAgPgDIAAA8QAHADAHAAQAOAAAHgJQAIgJAAgRQgBgQgGgIQgHgIgNAAQgIAAgIAEg");
	this.shape_217.setTransform(422.8,12.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_218.setTransform(410.9,12.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_219.setTransform(405.9,12.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#666666").s().p("AAAA+IgTAAIgBgDIAKgDQABgBAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIAAgLIAAgeIgBgUIgLgEIgBgCIAcgGIABAAIgBAZIAAAhIAAAOQAAABABABQAAAAAAABQAAAAABAAQAAAAABABIAKADIAAADIgVAAgAgHgsQgDgDAAgEQAAgEADgDQADgDAEgBQAEABACADQADABAAAGQAAAEgDADQgDADgDAAQgFAAgCgDg");
	this.shape_220.setTransform(400.8,13);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#666666").s().p("AALAQIgIgUIgDgJIgDAJIgIAUIgJAYIgIABIgNglIgOgjQgBgDgDgBIgHgCIAAgDIASAAIAUAAIAAADIgKADQAGAUAJAXIAEALIAEgLIAKgcIAGgVIAGAAIAHAVIAKAcIAEALIADgLQALgXAGgUIgKgDIAAgDIAOAAIAOAAIABADIgHACQgDABgBADIgPAjIgOAkIgIABIgIgZg");
	this.shape_221.setTransform(391.6,15.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#666666").s().p("AgdAlIAEgWIAEAAIAGASQAGACAHAAQAHABAFgEQAFgDAAgGQAAgGgEgDQgDgDgHgDIgIgDQgMgEgFgEQgEgGAAgIQAAgLAJgIQAJgGANAAQANAAALAEIgEAVIgEAAIgFgQQgGgCgGAAQgHAAgFAEQgFADAAAGQAAAFAEADQADADAIADIAHADQAMAEAGAEQAGAFAAAJQAAAMgKAHQgKAHgNAAQgOAAgNgGg");
	this.shape_222.setTransform(377.7,15.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#666666").s().p("AALAQIgJgUIgCgJIgDAJIgIAUIgJAYIgHABIgOglIgOgjQgBgDgDgBIgHgCIAAgDIASAAIAVAAIAAADIgLADQAGAUAJAXIAEALIAEgLIAKgcIAGgVIAHAAIAGAVIAKAcIAEALIADgLQAKgXAHgUIgKgDIAAgDIAPAAIANAAIABADIgHACQgDABgBADIgPAjIgOAkIgIABIgIgZg");
	this.shape_223.setTransform(367.4,15.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#666666").s().p("AgeAgQgLgNAAgSQAAgTAMgLQAMgNASAAQASAAALAMQAMAKAAATQAAATgNANQgMAMgRAAQgSAAgMgLgAgRgbQgGAJAAASQAAAPAGALQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgLQgGgJgLAAQgLAAgGAIg");
	this.shape_224.setTransform(356.3,15.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_225.setTransform(348.9,12.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#666666").s().p("AgNBCIgUAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgLIAAg0IgMgCIgBgEIANgBIAAgBQAAgYALgOQAKgNASAAQAJAAAIACIgFAWIgEAAIgGgRIgFgBQgKABgFAIQgFAKAAAYIAAADIAVAAIAAAIIgVAAIAAAvIAAAOQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAKADIAAADIgVAAg");
	this.shape_226.setTransform(343.4,12.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_227.setTransform(332.5,12.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_228.setTransform(327.5,12.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#666666").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgOANgGQAMgGAYABIABgHQAAgKgFgFQgGgFgJABQgIAAgMACIgCgGQARgHANAAQANAAAIAHQAHAHAAAOIAAAjIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADABIAHABIABAEIgJADIgIABQgIAAgEgJgAgOAFQgHADAAAJQAAAIAFAEQAEADAIABQAIAAAGgDIAAgeQgRAAgHAFg");
	this.shape_229.setTransform(320.7,15.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#666666").s().p("AgYAgQgLgMAAgSQAAgTANgMQANgNATAAQANAAAMAFIgFAZIgDAAIgIgVQgEgCgFAAQgMABgHAIQgIAKAAAOQAAASAJAIQAIAIARAAIASgBIABADQgGAEgIADQgIACgIAAQgSAAgMgLg");
	this.shape_230.setTransform(312.3,15.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_231.setTransform(300.2,15.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#666666").s().p("AgJAqIgUAAIgBgEIALgDQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAAgLIAAgeIgBgUIgLgEIgBgDIAcgGIABABIAAAKQAPgLAQAAIABABIgFAbIgEABQgCgIgDgFQgCgEgFAAQgFAAgGAEIAAAlIAAAUQAAAAAAABQABAAAAABQAAAAAAAAQAAABABAAIALADIABAEIgWAAg");
	this.shape_232.setTransform(292.7,15);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#666666").s().p("AgeAgQgLgNAAgSQAAgTAMgLQAMgNASAAQASAAALAMQAMAKAAATQAAATgNANQgMAMgRAAQgSAAgMgLgAgRgbQgGAJAAASQAAAPAGALQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgLQgGgJgLAAQgLAAgGAIg");
	this.shape_233.setTransform(284.3,15.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#666666").s().p("AA0A9IgVABIAAgEIAKgDQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgSIAAhLIgsBmIgGABIgrhnIAABLIAAASQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIAKADIAAAEIgSgBIgSABIAAgEIAKgEQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgSIAAhGIAAgPQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBgBIgLgDIAAgEIASABIAQgBIAnBgIAphgIAPABIARgBIABAEIgLADQAAABgBAAQAAAAgBAAQAAABAAAAQAAABAAAAIAAAPIAABGIAAASQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAAAIAKAEIABAEIgWgBg");
	this.shape_234.setTransform(271.5,13);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#666666").s().p("AgGAHQgDgDAAgEQAAgDADgDQACgEAEAAQAFAAADAEQADADAAADQAAAEgDADQgDADgFABQgEgBgCgDg");
	this.shape_235.setTransform(256.7,18.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#666666").s().p("AAKAQIgIgUIgCgJIgCAJIgJAUIgJAYIgIABIgNglIgOgjQgBgDgEgBIgGgCIAAgDIATAAIATAAIAAADIgJADQAFAUAJAXIAEALIADgLIALgcIAGgVIAGAAIAHAVIALAcIADALIAEgLQAJgXAHgUIgKgDIgBgDIAPAAIAPAAIAAADIgHACQgDABgCADIgOAjIgOAkIgIABIgJgZg");
	this.shape_236.setTransform(249.5,15.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#666666").s().p("AgeAgQgLgNAAgSQAAgTAMgLQAMgNASAAQASAAALAMQAMAKAAATQAAATgNANQgMAMgRAAQgSAAgMgLgAgRgbQgGAJAAASQAAAPAGALQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgLQgGgJgLAAQgLAAgGAIg");
	this.shape_237.setTransform(238.4,15.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_238.setTransform(231,12.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_239.setTransform(224.2,15.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#666666").s().p("AggA+IAAgcIAAgzIAAglIgMgDIAAgDIAcgGIABABIgBAnIAAARQAPgJALABQARgBAJALQAJALAAARQABAWgMAMQgNANgVAAQgPgBgRgFgAgQgDIAAA8QAIADAHAAQAOAAAHgJQAIgJgBgRQAAgQgGgIQgHgIgOAAQgHAAgJAEg");
	this.shape_240.setTransform(214.6,12.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#666666").s().p("AA2AqIgUAAIAAgEIAJgDQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgGIAAglQAAgLgFgFQgFgEgKAAQgKAAgIAGIABAJIAAAfIABARQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIAKADIAAAEIgTAAIgTAAIAAgEIAIgDQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAAgGIAAglQAAgLgFgFQgFgEgJAAQgJAAgJAFIAAAmIAAAUQAAAAAAABQAAAAAAABQABAAAAAAQABAAAAAAIAJADIAAAEIgTAAIgUAAIgBgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAAgeIAAgUIgLgEIgBgDIAcgGIABABIAAAKQAOgLANAAQAQAAAGAMQAOgMARAAQALAAAIAHQAGAHABAMIAAAfIAAAQQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAJADIABAEIgUAAg");
	this.shape_241.setTransform(197.9,15);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#666666").s().p("AgeAgQgLgNAAgSQAAgTAMgLQAMgNASAAQASAAALAMQAMAKAAATQAAATgNANQgMAMgRAAQgSAAgMgLgAgRgbQgGAJAAASQAAAPAGALQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgLQgGgJgLAAQgLAAgGAIg");
	this.shape_242.setTransform(185.1,15.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#666666").s().p("AgJAqIgUAAIgBgEIALgDQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAIAAgLIAAgeIgBgUIgLgEIgBgDIAcgGIABABIAAAKQAPgLAQAAIABABIgFAbIgEABQgCgIgDgFQgCgEgFAAQgFAAgGAEIAAAlIAAAUQAAAAAAABQABAAAAABQAAAAAAAAQAAABABAAIALADIABAEIgWAAg");
	this.shape_243.setTransform(177.1,15);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#666666").s().p("AgNBCIgUAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgLIAAg0IgMgCIgBgEIANgBIAAgBQAAgYALgOQAKgNASAAQAJAAAIACIgFAWIgEAAIgGgRIgFgBQgKABgFAIQgFAKAAAYIAAADIAVAAIAAAIIgVAAIAAAvIAAAOQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAKADIAAADIgVAAg");
	this.shape_244.setTransform(172,12.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#666666").s().p("AAKAQIgHgUIgDgJIgCAJIgJAUIgJAYIgIABIgNglIgOgjQgBgDgDgBIgHgCIAAgDIATAAIATAAIAAADIgKADQAGAUAJAXIAEALIADgLIALgcIAGgVIAGAAIAHAVIAKAcIAEALIAEgLQAKgXAGgUIgKgDIgBgDIAPAAIAPAAIAAADIgHACQgDABgCADIgOAjIgOAkIgIABIgJgZg");
	this.shape_245.setTransform(157.3,15.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#666666").s().p("AgeAgQgLgNAAgSQAAgTAMgLQAMgNASAAQASAAALAMQAMAKAAATQAAATgNANQgMAMgRAAQgSAAgMgLgAgRgbQgGAJAAASQAAAPAGALQAGAKALAAQAMAAAGgJQAGgJAAgSQAAgPgHgLQgGgJgLAAQgLAAgGAIg");
	this.shape_246.setTransform(146.2,15.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_247.setTransform(138.8,12.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#666666").s().p("AgNBCIgUAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgLIAAg0IgMgCIgBgEIANgBIAAgBQAAgYALgOQAKgNASAAQAJAAAIACIgFAWIgEAAIgGgRIgFgBQgKABgFAIQgFAKAAAYIAAADIAVAAIAAAIIgVAAIAAAvIAAAOQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIAKADIAAADIgVAAg");
	this.shape_248.setTransform(133.3,12.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_249.setTransform(122.4,12.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_250.setTransform(117.4,12.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#666666").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgOANgGQAMgGAYABIABgHQAAgKgFgFQgGgFgJABQgIAAgMACIgCgGQARgHANAAQANAAAIAHQAHAHAAAOIAAAjIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADABIAHABIABAEIgJADIgIABQgIAAgEgJgAgOAFQgHADAAAJQAAAIAFAEQAEADAIABQAIAAAGgDIAAgeQgRAAgHAFg");
	this.shape_251.setTransform(110.6,15.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#666666").s().p("AgXAgQgLgMAAgSQAAgTAMgMQANgNATAAQANAAAMAFIgFAZIgEAAIgGgVQgFgCgFAAQgMABgIAIQgGAKAAAOQAAASAHAIQAJAIARAAIASgBIAAADQgFAEgIADQgIACgIAAQgSAAgLgLg");
	this.shape_252.setTransform(102.2,15.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#666666").s().p("AgjA+IAAgEQAKgBAEgFQAGgGAMgaIAAgCIgBAAIgdhGQgBgCgDgBIgIgDIAAgDIAUAAIATAAIAAADIgKADIAHAVIAJAXIAEALIAFgNIAIgUIAIgWIgKgDIAAgDIAPAAIAPAAIABADIgJADQgCABgCACIgHARQgLAbgGAQIgHAYIgEAWQgBAEgDACQgCACgJAAIgSAAg");
	this.shape_253.setTransform(89.9,17.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#666666").s().p("AAcAqIgTAAIgBgEIAJgDQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAAgGIAAglQAAgLgFgFQgFgEgJAAQgJAAgJAFIAAAmIAAAUQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABAAIAJADIAAAEIgTAAIgVAAIAAgEIAKgDQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAIAAgLIAAgeIAAgUIgMgEIAAgDIAcgGIABABIAAAKQAPgLAMAAQANAAAHAHQAHAHAAANIAAAeIAAAQQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAIAKADIAAAEIgUAAg");
	this.shape_254.setTransform(80.8,15);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#666666").s().p("AALAiQgLAJgLAAQgNAAgHgGQgIgGAAgLQAAgOANgGQAMgGAYABIABgHQAAgKgFgFQgGgFgJABQgIAAgMACIgCgGQARgHANAAQANAAAIAHQAHAHAAAOIAAAjIAAAHQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADABIAHABIABAEIgJADIgIABQgIAAgEgJgAgOAFQgHADAAAJQAAAIAFAEQAEADAIABQAIAAAGgDIAAgeQgRAAgHAFg");
	this.shape_255.setTransform(71.2,15.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#666666").s().p("AgLAwQgFgFAAgLIAAg1IgMgCIAAgEIANgBIAGgWIAJgCIAAABIAAAUIAAADIAbAAIAAAIIgbAAIAAAvQAAAJACADQADAEAIAAIAPgCIABAFQgPAHgMAAQgJAAgEgFg");
	this.shape_256.setTransform(60,14.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#666666").s().p("AgYAgQgKgMgBgSQAAgTANgMQANgNATAAQANAAAMAFIgFAZIgEAAIgHgVQgEgCgFAAQgMABgHAIQgIAKAAAOQABASAHAIQAJAIARAAIASgBIAAADQgFAEgIADQgIACgIAAQgSAAgMgLg");
	this.shape_257.setTransform(52.8,15.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_258.setTransform(44.3,15.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#666666").s().p("AAABCIgTAAIgBgDIAKgDQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBIAAgWIAAgjIAAg1IgMgDIgBgDIAcgGIABABIgBAnIAAA4IAAAZQAAABABABQAAAAAAABQAAAAABAAQAAABABAAIAJADIABADIgVAAg");
	this.shape_259.setTransform(37.4,12.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#666666").s().p("AgYAgQgMgLAAgUQAAgSALgMQALgNASAAQAQAAAIAKQAJAIAAARIAAAFIg3AAQAAASAJAIQAJAIASAAIASgBIAAADQgHAFgIACQgIACgHAAQgSAAgMgLgAgLgcQgGAIgBAKIAlAAIAAgCQAAgMgEgGQgEgFgIAAQgJAAgFAHg");
	this.shape_260.setTransform(30.7,15.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#666666").s().p("AgnA7IAAgBIAEgeIAEAAIAGAZQAJADAKAAQAMAAAIgFQAHgGAAgLQAAgGgCgEQgDgEgEgDIgJgGIgJgFIgMgFIgLgHQgFgEgCgGQgDgGAAgIQAAgPANgJQANgJATAAQAOAAAPADIABABIgFAbIgEABIgGgWQgJgDgIAAQgKAAgHAGQgHAFAAAKQAAAGACAEQADAFAEADIAJAGIAKAFIAMAFIAKAGQAFAEACAGQADAFAAAIQAAARgNAJQgOAKgVAAQgOAAgRgFg");
	this.shape_261.setTransform(21.9,13);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#6699CC").ss(2,1,1).p("AAA8fMAAAA4/");
	this.shape_262.setTransform(765.4,823.1,1,2.985);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#669900").ss(2,1,1).p("EAAAghWMAAABCt");
	this.shape_263.setTransform(632.8,823.3,1,2.55);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#6699FF").ss(2,1,1).p("AAA8fMAAAA4/");
	this.shape_264.setTransform(487,823.1,1,2.985);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#999933").ss(2,1,1).p("EAAAhFSMAAACKl");
	this.shape_265.setTransform(206.9,823.3,1,1.227);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#666666").ss(2,1,1).p("AAA8fMAAAA4/");
	this.shape_266.setTransform(37.6,823.1,1,2.985);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#666699").s().p("AgaAnIAAgDQAFAAADgCQACgBABgDIABgIIAAgcIgBgQQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgEgBIgFABIgBgDIAXgJIADAAIAAARQAJgRAKAAQAEAAADADQADADAAADQAAADgCADQgCACgDAAQgDAAgDgDQgEgDgCAAIgDACQgEADgDAIIAAAjQAAAHABADQABACADACQACABAGAAIAAADg");
	this.shape_267.setTransform(166.3,87.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#666699").s().p("AgWAeQgJgLAAgSQAAgSAKgMQAKgKAOgBQAMAAAJAJQAIAIAAAPIgzAAQgBAPAJAKQAIAKALAAQAHAAAFgFQAGgEADgJIADACQgBALgJAJQgJAJgMAAQgMABgLgLgAgNgcQgGAFAAAKIAiAAQgBgIgBgDQgCgEgEgDQgEgDgDABQgIAAgFAFg");
	this.shape_268.setTransform(159.7,88);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#666699").s().p("AAAAnIgbg/QgBgFgDgBIgDgEIgGgBIAAgDIAjAAIAAADIgCAAQgDAAgBABQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAABQAAADADADIAQApIASgqIACgHIgBgCIgCgCIgGAAIAAgDIAZAAIAAADQgEAAgCACQgDACgDAGIgbBAg");
	this.shape_269.setTransform(151.6,88.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#666699").s().p("AgbAbQgJgMAAgOQAAgJAGgLQAFgLAIgEQAJgGAIAAQASAAAKAOQAJALAAAPQAAAJgFAKQgFALgIAFQgJAGgKgBQgRABgKgOgAgKgfQgFACgCAHQgDAGAAALQAAAPAHAMQAGANAKAAQAIAAAFgHQAFgHAAgQQAAgUgIgLQgGgIgIAAQgFAAgEADg");
	this.shape_270.setTransform(143.1,88);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#666699").s().p("AAOA8IAAgLQgGAGgFADQgFACgGAAQgMAAgKgKQgJgLAAgQQAAgQAKgNQAKgOARAAQAJAAAHAHIAAgOIgBgQQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgFABIgBgDIAWgJIAEAAIAABXQAAANABADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADABIAGgBIABADIgXAJgAgQgIQgIAIABAQQAAARAGAJQAIAJAJAAQAGAAAIgIIAAgnQgBgEgCgFQgDgFgEgCQgEgCgDAAQgIAAgFAGg");
	this.shape_271.setTransform(134.9,86);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#666699").s().p("AAEAnIAAgDIABAAQAGAAACgBQACgCABgDIAAgIIAAgeQAAgKgCgFQgDgFgHAAQgIAAgKALIAAAnQAAAIABACQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAQACABAGAAIAAADIgmAAIAAgDIACAAQAGAAACgDQACgDAAgIIAAgbQAAgOgBgDIgBgEIgEgBIgGABIgBgDIAXgJIAEAAIAAAQQANgQALAAQAGAAAFADQAEADADAHQACAFAAALIAAAfQAAAHABADQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAIAIABIAAADg");
	this.shape_272.setTransform(126.1,87.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#666699").s().p("AALAlQgDgCAAgIIgOALQgEACgFAAQgIAAgGgGQgEgEAAgKQAAgFACgEQAEgGAIgFQAIgEATgHIAAgDQAAgLgEgEQgDgFgGAAQgFAAgDADQgDADAAADIAAAGQgBADgCADQgCACgCAAQgDgBgDgCQgBgCgBgDQABgIAHgGQAHgGANAAQAKAAAGADQAFADACAFQABAEABAMIAAAYIAAANIABADIACABIADAAIAGgGIAAAEQgIANgJAAQgEAAgCgDgAgHAAQgHAEgCAEQgEAEAAAEQABAGADAEQADAEAGABQAFAAAKgJIAAgcIgPAGg");
	this.shape_273.setTransform(118.4,87.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#666699").s().p("AAKA4IAAgDIAEAAQAHAAADgEQACgDAAgKIAAgiIgzAAIAAAiIABAMIADADQAEACAEAAIAEAAIAAADIgwAAIAAgDIAEAAQAHAAADgEQACgDAAgKIAAhHIgBgMIgEgDQgDgCgEAAIgEAAIAAgDIAwAAIAAADIgEAAQgEAAgEACQgCABgBADQgBACAAAJIAAAgIAzAAIAAggIgBgMQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAQgDgCgEAAIgEAAIAAgDIAwAAIAAADIgEAAQgEAAgEACQgCABgBADQgBACAAAJIAABHQAAAJABADQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQAEACAEAAIAEAAIAAADg");
	this.shape_274.setTransform(108.1,86.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#666699").s().p("AgkA5IAAgDQAdgbALgQQAMgQAAgOQAAgLgGgHQgHgGgIgBQgIABgHAEQgHAFgDAJIgDAAQACgPAJgIQAIgJANABQANAAAJAJQAJAIAAAMQAAAIgEAKQgGAMgOAPIgYAbIAcAAIANgBIAGgCIAFgGIADAAIgIAVg");
	this.shape_275.setTransform(93.3,86);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#666699").s().p("AAMA4IAAgDIAGgBIAEgCIABgDIgBgEIgFgHIgSgdIgYAeIgEAGIAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQADACAGAAIAAADIgoAAIAAgDIAHgCIALgFIAKgMIAbghIgXggQgIgNgHgEQgHgEgHAAIAAgDIA0AAIAAADQgHAAgCACQgDACAAACQAAADAEAGIAQAaIAUgZIAEgHIACgDIgCgDQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAQgCgBgGAAIAAgDIAoAAIAAADIgHABIgIAFIgLAMIgXAdIAZAjQAJAPAGAEQAFAEAHAAIAAADg");
	this.shape_276.setTransform(83.1,86.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(426.7,757.5,819.9,1386.3);
// library properties:
lib.properties = {
	width: 832,
	height: 1515,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;