/* _inputParameters: an object with different values for the model parameters */
function Ultrasound(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
  var _model = EJSS_CORE.createAnimationLMS();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = {
    showInputDialog : EJSS_INTERFACE.BoxPanel.showInputDialog,
    showOkDialog : EJSS_INTERFACE.BoxPanel.showOkDialog,
    showOkCancelDialog : EJSS_INTERFACE.BoxPanel.showOkCancelDialog,
    downloadText: EJSS_TOOLS.File.downloadText,
    uploadText: function(action) { EJSS_TOOLS.File.uploadText(_model,action); } 
  };

  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  _model._play  = _play;
  _model._pause = _pause;
  _model._step  = _step;
  _model._reset = _reset;
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

  function _getStringProperty(propertyName) {
    var _value = _stringProperties[propertyName];
    if (_value===undefined) return propertyName;
    else return _value;
  }
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var options; // EjsS Model.Variables.Var Table.options
  var opt_angle; // EjsS Model.Variables.Var Table.opt_angle
  var x1; // EjsS Model.Variables.Var Table.x1
  var y1; // EjsS Model.Variables.Var Table.y1
  var rot; // EjsS Model.Variables.Var Table.rot
  var y2; // EjsS Model.Variables.Var Table.y2
  var x2; // EjsS Model.Variables.Var Table.x2
  var arrowvisible; // EjsS Model.Variables.Var Table.arrowvisible
  var Iarrowvisible; // EjsS Model.Variables.Var Table.Iarrowvisible
  var tissuevisible; // EjsS Model.Variables.Var Table.tissuevisible
  var tissuevisible2; // EjsS Model.Variables.Var Table.tissuevisible2
  var shapex; // EjsS Model.Variables.Var Table.shapex
  var shapey; // EjsS Model.Variables.Var Table.shapey
  var transdurcervisible; // EjsS Model.Variables.Var Table.transdurcervisible
  var heightpanel; // EjsS Model.Variables.Var Table.heightpanel

  var optionstissue1; // EjsS Model.Variables.Plot graph.optionstissue1
  var opt_tissue1; // EjsS Model.Variables.Plot graph.opt_tissue1
  var functionString; // EjsS Model.Variables.Plot graph.functionString
  var xmin; // EjsS Model.Variables.Plot graph.xmin
  var xmax; // EjsS Model.Variables.Plot graph.xmax
  var mhz; // EjsS Model.Variables.Plot graph.mhz
  var coef1; // EjsS Model.Variables.Plot graph.coef1
  var coef; // EjsS Model.Variables.Plot graph.coef
  var coef2; // EjsS Model.Variables.Plot graph.coef2
  var ImageUrl; // EjsS Model.Variables.Plot graph.ImageUrl
  var AutoScale; // EjsS Model.Variables.Plot graph.AutoScale
  var GraphNameX; // EjsS Model.Variables.Plot graph.GraphNameX
  var GraphNameUP; // EjsS Model.Variables.Plot graph.GraphNameUP

  var optionsTissueZ1; // EjsS Model.Variables.IntensityOpt.optionsTissueZ1
  var opt_TissueZ1; // EjsS Model.Variables.IntensityOpt.opt_TissueZ1
  var Z1; // EjsS Model.Variables.IntensityOpt.Z1
  var Z2; // EjsS Model.Variables.IntensityOpt.Z2
  var Ii; // EjsS Model.Variables.IntensityOpt.Ii
  var Ir; // EjsS Model.Variables.IntensityOpt.Ir
  var It; // EjsS Model.Variables.IntensityOpt.It
  var CM; // EjsS Model.Variables.IntensityOpt.CM
  var Zs; // EjsS Model.Variables.IntensityOpt.Zs
  var MAXYGRAPH; // EjsS Model.Variables.IntensityOpt.MAXYGRAPH
  var optionsTissueZ2; // EjsS Model.Variables.IntensityOpt.optionsTissueZ2
  var opt_TissueZ2; // EjsS Model.Variables.IntensityOpt.opt_TissueZ2
  var I0; // EjsS Model.Variables.IntensityOpt.I0
  var coefI1; // EjsS Model.Variables.IntensityOpt.coefI1
  var coefI2; // EjsS Model.Variables.IntensityOpt.coefI2
  var FirstEchoI; // EjsS Model.Variables.IntensityOpt.FirstEchoI
  var SecondEcho1; // EjsS Model.Variables.IntensityOpt.SecondEcho1
  var SecondEcho2; // EjsS Model.Variables.IntensityOpt.SecondEcho2
  var It2; // EjsS Model.Variables.IntensityOpt.It2
  var Ir2; // EjsS Model.Variables.IntensityOpt.Ir2
  var optionsint; // EjsS Model.Variables.IntensityOpt.optionsint
  var opt_int; // EjsS Model.Variables.IntensityOpt.opt_int
  var intsep; // EjsS Model.Variables.IntensityOpt.intsep
  var intsep2; // EjsS Model.Variables.IntensityOpt.intsep2
  var Ygraph; // EjsS Model.Variables.IntensityOpt.Ygraph
  var Ymingraph; // EjsS Model.Variables.IntensityOpt.Ymingraph

  var pi; // EjsS Model.Variables.Angle.pi
  var angleRad; // EjsS Model.Variables.Angle.angleRad
  var angleDeg; // EjsS Model.Variables.Angle.angleDeg
  var V2; // EjsS Model.Variables.Angle.V2
  var V1; // EjsS Model.Variables.Angle.V1
  var angleDeg2; // EjsS Model.Variables.Angle.angleDeg2
  var angleRad2; // EjsS Model.Variables.Angle.angleRad2
  var angleDeg3; // EjsS Model.Variables.Angle.angleDeg3
  var GEOx; // EjsS Model.Variables.Angle.GEOx
  var GEOy; // EjsS Model.Variables.Angle.GEOy
  var GEOys; // EjsS Model.Variables.Angle.GEOys
  var optionsgeo; // EjsS Model.Variables.Angle.optionsgeo
  var opt_geo; // EjsS Model.Variables.Angle.opt_geo
  var optionsgeo2; // EjsS Model.Variables.Angle.optionsgeo2
  var opt_geo2; // EjsS Model.Variables.Angle.opt_geo2
  var bluevis; // EjsS Model.Variables.Angle.bluevis
  var criticalvis; // EjsS Model.Variables.Angle.criticalvis

  var functionString1; // EjsS Model.Variables.Amp.functionString1
  var xmin1; // EjsS Model.Variables.Amp.xmin1
  var xmax1; // EjsS Model.Variables.Amp.xmax1
  var n; // EjsS Model.Variables.Amp.n
  var functionString2; // EjsS Model.Variables.Amp.functionString2
  var xmin2; // EjsS Model.Variables.Amp.xmin2
  var xmax2; // EjsS Model.Variables.Amp.xmax2
  var functionString3; // EjsS Model.Variables.Amp.functionString3
  var xmin3; // EjsS Model.Variables.Amp.xmin3
  var xmax3; // EjsS Model.Variables.Amp.xmax3
  var ValueFirstEcho; // EjsS Model.Variables.Amp.ValueFirstEcho
  var ValueSecondEcho; // EjsS Model.Variables.Amp.ValueSecondEcho
  var CMtissue1; // EjsS Model.Variables.Amp.CMtissue1
  var CMtissue2; // EjsS Model.Variables.Amp.CMtissue2
  var ampWidth; // EjsS Model.Variables.Amp.ampWidth
  var ampHeight; // EjsS Model.Variables.Amp.ampHeight

  var animationt; // EjsS Model.Variables.animation.animationt
  var animationdt; // EjsS Model.Variables.animation.animationdt
  var animationIdt; // EjsS Model.Variables.animation.animationIdt
  var animationIt; // EjsS Model.Variables.animation.animationIt
  var animationtime; // EjsS Model.Variables.animation.animationtime

  _model.getOdes = function() { return []; };

  _model.removeEvents = function(){
  };

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      options : options,
      opt_angle : opt_angle,
      x1 : x1,
      y1 : y1,
      rot : rot,
      y2 : y2,
      x2 : x2,
      arrowvisible : arrowvisible,
      Iarrowvisible : Iarrowvisible,
      tissuevisible : tissuevisible,
      tissuevisible2 : tissuevisible2,
      shapex : shapex,
      shapey : shapey,
      transdurcervisible : transdurcervisible,
      heightpanel : heightpanel,
      optionstissue1 : optionstissue1,
      opt_tissue1 : opt_tissue1,
      functionString : functionString,
      xmin : xmin,
      xmax : xmax,
      mhz : mhz,
      coef1 : coef1,
      coef : coef,
      coef2 : coef2,
      ImageUrl : ImageUrl,
      AutoScale : AutoScale,
      GraphNameX : GraphNameX,
      GraphNameUP : GraphNameUP,
      optionsTissueZ1 : optionsTissueZ1,
      opt_TissueZ1 : opt_TissueZ1,
      Z1 : Z1,
      Z2 : Z2,
      Ii : Ii,
      Ir : Ir,
      It : It,
      CM : CM,
      Zs : Zs,
      MAXYGRAPH : MAXYGRAPH,
      optionsTissueZ2 : optionsTissueZ2,
      opt_TissueZ2 : opt_TissueZ2,
      I0 : I0,
      coefI1 : coefI1,
      coefI2 : coefI2,
      FirstEchoI : FirstEchoI,
      SecondEcho1 : SecondEcho1,
      SecondEcho2 : SecondEcho2,
      It2 : It2,
      Ir2 : Ir2,
      optionsint : optionsint,
      opt_int : opt_int,
      intsep : intsep,
      intsep2 : intsep2,
      Ygraph : Ygraph,
      Ymingraph : Ymingraph,
      pi : pi,
      angleRad : angleRad,
      angleDeg : angleDeg,
      V2 : V2,
      V1 : V1,
      angleDeg2 : angleDeg2,
      angleRad2 : angleRad2,
      angleDeg3 : angleDeg3,
      GEOx : GEOx,
      GEOy : GEOy,
      GEOys : GEOys,
      optionsgeo : optionsgeo,
      opt_geo : opt_geo,
      optionsgeo2 : optionsgeo2,
      opt_geo2 : opt_geo2,
      bluevis : bluevis,
      criticalvis : criticalvis,
      functionString1 : functionString1,
      xmin1 : xmin1,
      xmax1 : xmax1,
      n : n,
      functionString2 : functionString2,
      xmin2 : xmin2,
      xmax2 : xmax2,
      functionString3 : functionString3,
      xmin3 : xmin3,
      xmax3 : xmax3,
      ValueFirstEcho : ValueFirstEcho,
      ValueSecondEcho : ValueSecondEcho,
      CMtissue1 : CMtissue1,
      CMtissue2 : CMtissue2,
      ampWidth : ampWidth,
      ampHeight : ampHeight,
      animationt : animationt,
      animationdt : animationdt,
      animationIdt : animationIdt,
      animationIt : animationIt,
      animationtime : animationtime
    };
  };

  function _serializePublic() { return _model.serializePublic(); }

  _model._userSerializePublic = function() {
    return {
      options : options,
      opt_angle : opt_angle,
      x1 : x1,
      y1 : y1,
      rot : rot,
      y2 : y2,
      x2 : x2,
      arrowvisible : arrowvisible,
      Iarrowvisible : Iarrowvisible,
      tissuevisible : tissuevisible,
      tissuevisible2 : tissuevisible2,
      shapex : shapex,
      shapey : shapey,
      transdurcervisible : transdurcervisible,
      heightpanel : heightpanel,
      optionstissue1 : optionstissue1,
      opt_tissue1 : opt_tissue1,
      functionString : functionString,
      xmin : xmin,
      xmax : xmax,
      mhz : mhz,
      coef1 : coef1,
      coef : coef,
      coef2 : coef2,
      ImageUrl : ImageUrl,
      AutoScale : AutoScale,
      GraphNameX : GraphNameX,
      GraphNameUP : GraphNameUP,
      optionsTissueZ1 : optionsTissueZ1,
      opt_TissueZ1 : opt_TissueZ1,
      Z1 : Z1,
      Z2 : Z2,
      Ii : Ii,
      Ir : Ir,
      It : It,
      CM : CM,
      Zs : Zs,
      MAXYGRAPH : MAXYGRAPH,
      optionsTissueZ2 : optionsTissueZ2,
      opt_TissueZ2 : opt_TissueZ2,
      I0 : I0,
      coefI1 : coefI1,
      coefI2 : coefI2,
      FirstEchoI : FirstEchoI,
      SecondEcho1 : SecondEcho1,
      SecondEcho2 : SecondEcho2,
      It2 : It2,
      Ir2 : Ir2,
      optionsint : optionsint,
      opt_int : opt_int,
      intsep : intsep,
      intsep2 : intsep2,
      Ygraph : Ygraph,
      Ymingraph : Ymingraph,
      pi : pi,
      angleRad : angleRad,
      angleDeg : angleDeg,
      V2 : V2,
      V1 : V1,
      angleDeg2 : angleDeg2,
      angleRad2 : angleRad2,
      angleDeg3 : angleDeg3,
      GEOx : GEOx,
      GEOy : GEOy,
      GEOys : GEOys,
      optionsgeo : optionsgeo,
      opt_geo : opt_geo,
      optionsgeo2 : optionsgeo2,
      opt_geo2 : opt_geo2,
      bluevis : bluevis,
      criticalvis : criticalvis,
      functionString1 : functionString1,
      xmin1 : xmin1,
      xmax1 : xmax1,
      n : n,
      functionString2 : functionString2,
      xmin2 : xmin2,
      xmax2 : xmax2,
      functionString3 : functionString3,
      xmin3 : xmin3,
      xmax3 : xmax3,
      ValueFirstEcho : ValueFirstEcho,
      ValueSecondEcho : ValueSecondEcho,
      CMtissue1 : CMtissue1,
      CMtissue2 : CMtissue2,
      ampWidth : ampWidth,
      ampHeight : ampHeight,
      animationt : animationt,
      animationdt : animationdt,
      animationIdt : animationIdt,
      animationIt : animationIt,
      animationtime : animationtime
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.options != "undefined") options = json.options;
    if(typeof json.opt_angle != "undefined") opt_angle = json.opt_angle;
    if(typeof json.x1 != "undefined") x1 = json.x1;
    if(typeof json.y1 != "undefined") y1 = json.y1;
    if(typeof json.rot != "undefined") rot = json.rot;
    if(typeof json.y2 != "undefined") y2 = json.y2;
    if(typeof json.x2 != "undefined") x2 = json.x2;
    if(typeof json.arrowvisible != "undefined") arrowvisible = json.arrowvisible;
    if(typeof json.Iarrowvisible != "undefined") Iarrowvisible = json.Iarrowvisible;
    if(typeof json.tissuevisible != "undefined") tissuevisible = json.tissuevisible;
    if(typeof json.tissuevisible2 != "undefined") tissuevisible2 = json.tissuevisible2;
    if(typeof json.shapex != "undefined") shapex = json.shapex;
    if(typeof json.shapey != "undefined") shapey = json.shapey;
    if(typeof json.transdurcervisible != "undefined") transdurcervisible = json.transdurcervisible;
    if(typeof json.heightpanel != "undefined") heightpanel = json.heightpanel;
    if(typeof json.optionstissue1 != "undefined") optionstissue1 = json.optionstissue1;
    if(typeof json.opt_tissue1 != "undefined") opt_tissue1 = json.opt_tissue1;
    if(typeof json.functionString != "undefined") functionString = json.functionString;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.mhz != "undefined") mhz = json.mhz;
    if(typeof json.coef1 != "undefined") coef1 = json.coef1;
    if(typeof json.coef != "undefined") coef = json.coef;
    if(typeof json.coef2 != "undefined") coef2 = json.coef2;
    if(typeof json.ImageUrl != "undefined") ImageUrl = json.ImageUrl;
    if(typeof json.AutoScale != "undefined") AutoScale = json.AutoScale;
    if(typeof json.GraphNameX != "undefined") GraphNameX = json.GraphNameX;
    if(typeof json.GraphNameUP != "undefined") GraphNameUP = json.GraphNameUP;
    if(typeof json.optionsTissueZ1 != "undefined") optionsTissueZ1 = json.optionsTissueZ1;
    if(typeof json.opt_TissueZ1 != "undefined") opt_TissueZ1 = json.opt_TissueZ1;
    if(typeof json.Z1 != "undefined") Z1 = json.Z1;
    if(typeof json.Z2 != "undefined") Z2 = json.Z2;
    if(typeof json.Ii != "undefined") Ii = json.Ii;
    if(typeof json.Ir != "undefined") Ir = json.Ir;
    if(typeof json.It != "undefined") It = json.It;
    if(typeof json.CM != "undefined") CM = json.CM;
    if(typeof json.Zs != "undefined") Zs = json.Zs;
    if(typeof json.MAXYGRAPH != "undefined") MAXYGRAPH = json.MAXYGRAPH;
    if(typeof json.optionsTissueZ2 != "undefined") optionsTissueZ2 = json.optionsTissueZ2;
    if(typeof json.opt_TissueZ2 != "undefined") opt_TissueZ2 = json.opt_TissueZ2;
    if(typeof json.I0 != "undefined") I0 = json.I0;
    if(typeof json.coefI1 != "undefined") coefI1 = json.coefI1;
    if(typeof json.coefI2 != "undefined") coefI2 = json.coefI2;
    if(typeof json.FirstEchoI != "undefined") FirstEchoI = json.FirstEchoI;
    if(typeof json.SecondEcho1 != "undefined") SecondEcho1 = json.SecondEcho1;
    if(typeof json.SecondEcho2 != "undefined") SecondEcho2 = json.SecondEcho2;
    if(typeof json.It2 != "undefined") It2 = json.It2;
    if(typeof json.Ir2 != "undefined") Ir2 = json.Ir2;
    if(typeof json.optionsint != "undefined") optionsint = json.optionsint;
    if(typeof json.opt_int != "undefined") opt_int = json.opt_int;
    if(typeof json.intsep != "undefined") intsep = json.intsep;
    if(typeof json.intsep2 != "undefined") intsep2 = json.intsep2;
    if(typeof json.Ygraph != "undefined") Ygraph = json.Ygraph;
    if(typeof json.Ymingraph != "undefined") Ymingraph = json.Ymingraph;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.angleRad != "undefined") angleRad = json.angleRad;
    if(typeof json.angleDeg != "undefined") angleDeg = json.angleDeg;
    if(typeof json.V2 != "undefined") V2 = json.V2;
    if(typeof json.V1 != "undefined") V1 = json.V1;
    if(typeof json.angleDeg2 != "undefined") angleDeg2 = json.angleDeg2;
    if(typeof json.angleRad2 != "undefined") angleRad2 = json.angleRad2;
    if(typeof json.angleDeg3 != "undefined") angleDeg3 = json.angleDeg3;
    if(typeof json.GEOx != "undefined") GEOx = json.GEOx;
    if(typeof json.GEOy != "undefined") GEOy = json.GEOy;
    if(typeof json.GEOys != "undefined") GEOys = json.GEOys;
    if(typeof json.optionsgeo != "undefined") optionsgeo = json.optionsgeo;
    if(typeof json.opt_geo != "undefined") opt_geo = json.opt_geo;
    if(typeof json.optionsgeo2 != "undefined") optionsgeo2 = json.optionsgeo2;
    if(typeof json.opt_geo2 != "undefined") opt_geo2 = json.opt_geo2;
    if(typeof json.bluevis != "undefined") bluevis = json.bluevis;
    if(typeof json.criticalvis != "undefined") criticalvis = json.criticalvis;
    if(typeof json.functionString1 != "undefined") functionString1 = json.functionString1;
    if(typeof json.xmin1 != "undefined") xmin1 = json.xmin1;
    if(typeof json.xmax1 != "undefined") xmax1 = json.xmax1;
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.functionString2 != "undefined") functionString2 = json.functionString2;
    if(typeof json.xmin2 != "undefined") xmin2 = json.xmin2;
    if(typeof json.xmax2 != "undefined") xmax2 = json.xmax2;
    if(typeof json.functionString3 != "undefined") functionString3 = json.functionString3;
    if(typeof json.xmin3 != "undefined") xmin3 = json.xmin3;
    if(typeof json.xmax3 != "undefined") xmax3 = json.xmax3;
    if(typeof json.ValueFirstEcho != "undefined") ValueFirstEcho = json.ValueFirstEcho;
    if(typeof json.ValueSecondEcho != "undefined") ValueSecondEcho = json.ValueSecondEcho;
    if(typeof json.CMtissue1 != "undefined") CMtissue1 = json.CMtissue1;
    if(typeof json.CMtissue2 != "undefined") CMtissue2 = json.CMtissue2;
    if(typeof json.ampWidth != "undefined") ampWidth = json.ampWidth;
    if(typeof json.ampHeight != "undefined") ampHeight = json.ampHeight;
    if(typeof json.animationt != "undefined") animationt = json.animationt;
    if(typeof json.animationdt != "undefined") animationdt = json.animationdt;
    if(typeof json.animationIdt != "undefined") animationIdt = json.animationIdt;
    if(typeof json.animationIt != "undefined") animationIt = json.animationIt;
    if(typeof json.animationtime != "undefined") animationtime = json.animationtime;
  };

  _model._readParametersPublic = function(json) {
    if(typeof json.options != "undefined") options = json.options;
    if(typeof json.opt_angle != "undefined") opt_angle = json.opt_angle;
    if(typeof json.x1 != "undefined") x1 = json.x1;
    if(typeof json.y1 != "undefined") y1 = json.y1;
    if(typeof json.rot != "undefined") rot = json.rot;
    if(typeof json.y2 != "undefined") y2 = json.y2;
    if(typeof json.x2 != "undefined") x2 = json.x2;
    if(typeof json.arrowvisible != "undefined") arrowvisible = json.arrowvisible;
    if(typeof json.Iarrowvisible != "undefined") Iarrowvisible = json.Iarrowvisible;
    if(typeof json.tissuevisible != "undefined") tissuevisible = json.tissuevisible;
    if(typeof json.tissuevisible2 != "undefined") tissuevisible2 = json.tissuevisible2;
    if(typeof json.shapex != "undefined") shapex = json.shapex;
    if(typeof json.shapey != "undefined") shapey = json.shapey;
    if(typeof json.transdurcervisible != "undefined") transdurcervisible = json.transdurcervisible;
    if(typeof json.heightpanel != "undefined") heightpanel = json.heightpanel;
    if(typeof json.optionstissue1 != "undefined") optionstissue1 = json.optionstissue1;
    if(typeof json.opt_tissue1 != "undefined") opt_tissue1 = json.opt_tissue1;
    if(typeof json.functionString != "undefined") functionString = json.functionString;
    if(typeof json.xmin != "undefined") xmin = json.xmin;
    if(typeof json.xmax != "undefined") xmax = json.xmax;
    if(typeof json.mhz != "undefined") mhz = json.mhz;
    if(typeof json.coef1 != "undefined") coef1 = json.coef1;
    if(typeof json.coef != "undefined") coef = json.coef;
    if(typeof json.coef2 != "undefined") coef2 = json.coef2;
    if(typeof json.ImageUrl != "undefined") ImageUrl = json.ImageUrl;
    if(typeof json.AutoScale != "undefined") AutoScale = json.AutoScale;
    if(typeof json.GraphNameX != "undefined") GraphNameX = json.GraphNameX;
    if(typeof json.GraphNameUP != "undefined") GraphNameUP = json.GraphNameUP;
    if(typeof json.optionsTissueZ1 != "undefined") optionsTissueZ1 = json.optionsTissueZ1;
    if(typeof json.opt_TissueZ1 != "undefined") opt_TissueZ1 = json.opt_TissueZ1;
    if(typeof json.Z1 != "undefined") Z1 = json.Z1;
    if(typeof json.Z2 != "undefined") Z2 = json.Z2;
    if(typeof json.Ii != "undefined") Ii = json.Ii;
    if(typeof json.Ir != "undefined") Ir = json.Ir;
    if(typeof json.It != "undefined") It = json.It;
    if(typeof json.CM != "undefined") CM = json.CM;
    if(typeof json.Zs != "undefined") Zs = json.Zs;
    if(typeof json.MAXYGRAPH != "undefined") MAXYGRAPH = json.MAXYGRAPH;
    if(typeof json.optionsTissueZ2 != "undefined") optionsTissueZ2 = json.optionsTissueZ2;
    if(typeof json.opt_TissueZ2 != "undefined") opt_TissueZ2 = json.opt_TissueZ2;
    if(typeof json.I0 != "undefined") I0 = json.I0;
    if(typeof json.coefI1 != "undefined") coefI1 = json.coefI1;
    if(typeof json.coefI2 != "undefined") coefI2 = json.coefI2;
    if(typeof json.FirstEchoI != "undefined") FirstEchoI = json.FirstEchoI;
    if(typeof json.SecondEcho1 != "undefined") SecondEcho1 = json.SecondEcho1;
    if(typeof json.SecondEcho2 != "undefined") SecondEcho2 = json.SecondEcho2;
    if(typeof json.It2 != "undefined") It2 = json.It2;
    if(typeof json.Ir2 != "undefined") Ir2 = json.Ir2;
    if(typeof json.optionsint != "undefined") optionsint = json.optionsint;
    if(typeof json.opt_int != "undefined") opt_int = json.opt_int;
    if(typeof json.intsep != "undefined") intsep = json.intsep;
    if(typeof json.intsep2 != "undefined") intsep2 = json.intsep2;
    if(typeof json.Ygraph != "undefined") Ygraph = json.Ygraph;
    if(typeof json.Ymingraph != "undefined") Ymingraph = json.Ymingraph;
    if(typeof json.pi != "undefined") pi = json.pi;
    if(typeof json.angleRad != "undefined") angleRad = json.angleRad;
    if(typeof json.angleDeg != "undefined") angleDeg = json.angleDeg;
    if(typeof json.V2 != "undefined") V2 = json.V2;
    if(typeof json.V1 != "undefined") V1 = json.V1;
    if(typeof json.angleDeg2 != "undefined") angleDeg2 = json.angleDeg2;
    if(typeof json.angleRad2 != "undefined") angleRad2 = json.angleRad2;
    if(typeof json.angleDeg3 != "undefined") angleDeg3 = json.angleDeg3;
    if(typeof json.GEOx != "undefined") GEOx = json.GEOx;
    if(typeof json.GEOy != "undefined") GEOy = json.GEOy;
    if(typeof json.GEOys != "undefined") GEOys = json.GEOys;
    if(typeof json.optionsgeo != "undefined") optionsgeo = json.optionsgeo;
    if(typeof json.opt_geo != "undefined") opt_geo = json.opt_geo;
    if(typeof json.optionsgeo2 != "undefined") optionsgeo2 = json.optionsgeo2;
    if(typeof json.opt_geo2 != "undefined") opt_geo2 = json.opt_geo2;
    if(typeof json.bluevis != "undefined") bluevis = json.bluevis;
    if(typeof json.criticalvis != "undefined") criticalvis = json.criticalvis;
    if(typeof json.functionString1 != "undefined") functionString1 = json.functionString1;
    if(typeof json.xmin1 != "undefined") xmin1 = json.xmin1;
    if(typeof json.xmax1 != "undefined") xmax1 = json.xmax1;
    if(typeof json.n != "undefined") n = json.n;
    if(typeof json.functionString2 != "undefined") functionString2 = json.functionString2;
    if(typeof json.xmin2 != "undefined") xmin2 = json.xmin2;
    if(typeof json.xmax2 != "undefined") xmax2 = json.xmax2;
    if(typeof json.functionString3 != "undefined") functionString3 = json.functionString3;
    if(typeof json.xmin3 != "undefined") xmin3 = json.xmin3;
    if(typeof json.xmax3 != "undefined") xmax3 = json.xmax3;
    if(typeof json.ValueFirstEcho != "undefined") ValueFirstEcho = json.ValueFirstEcho;
    if(typeof json.ValueSecondEcho != "undefined") ValueSecondEcho = json.ValueSecondEcho;
    if(typeof json.CMtissue1 != "undefined") CMtissue1 = json.CMtissue1;
    if(typeof json.CMtissue2 != "undefined") CMtissue2 = json.CMtissue2;
    if(typeof json.ampWidth != "undefined") ampWidth = json.ampWidth;
    if(typeof json.ampHeight != "undefined") ampHeight = json.ampHeight;
    if(typeof json.animationt != "undefined") animationt = json.animationt;
    if(typeof json.animationdt != "undefined") animationdt = json.animationdt;
    if(typeof json.animationIdt != "undefined") animationIdt = json.animationIdt;
    if(typeof json.animationIt != "undefined") animationIt = json.animationIt;
    if(typeof json.animationtime != "undefined") animationtime = json.animationtime;
  };

  function _unserializePublic(json) { return _model.unserializePublic(json); }

  _model._userUnserializePublic = function(json) {
    _model._readParametersPublic(json);
   _resetSolvers();
   _model.update();
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model._userUnserialize = function(json) {
    _model._readParameters(json);
   _resetSolvers();
   _model.update();
  };

  _model.addToReset(function() {
    __pagesEnabled["Init Page"] = true;
    __pagesEnabled["Init Page 2"] = true;
    __pagesEnabled["Init Page 3"] = true;
    __pagesEnabled["Init Page 4"] = true;
    __pagesEnabled["Evol Page"] = true;
    __pagesEnabled["Evol Page 2"] = true;
    __pagesEnabled["FixRel Page"] = true;
  });

  _model.addToReset(function() {
    options = ["Intensity","Reflection","Attenuation"]; // EjsS Model.Variables.Var Table.options
    opt_angle = new Array(1); // EjsS Model.Variables.Var Table.opt_angle
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Var Table.opt_angle
        opt_angle[_i0] = options[2];  // EjsS Model.Variables.Var Table.opt_angle
      }
    }());
    x1 = 100; // EjsS Model.Variables.Var Table.x1
    y1 = 80; // EjsS Model.Variables.Var Table.y1
    rot = 0; // EjsS Model.Variables.Var Table.rot
    y2 = 88; // EjsS Model.Variables.Var Table.y2
    x2 = 100; // EjsS Model.Variables.Var Table.x2
    arrowvisible = true; // EjsS Model.Variables.Var Table.arrowvisible
    Iarrowvisible = false; // EjsS Model.Variables.Var Table.Iarrowvisible
    tissuevisible = false; // EjsS Model.Variables.Var Table.tissuevisible
    tissuevisible2 = false; // EjsS Model.Variables.Var Table.tissuevisible2
    shapex = 8; // EjsS Model.Variables.Var Table.shapex
    shapey = 16; // EjsS Model.Variables.Var Table.shapey
    transdurcervisible = true; // EjsS Model.Variables.Var Table.transdurcervisible
    heightpanel = 400; // EjsS Model.Variables.Var Table.heightpanel
  });

  _model.addToReset(function() {
    optionstissue1 = ["Water","Blood","Soft Tissue","Brain","Liver","Fat","Smooth Muscle","Tendon","Bone"]; // EjsS Model.Variables.Plot graph.optionstissue1
    opt_tissue1 = new Array(1); // EjsS Model.Variables.Plot graph.opt_tissue1
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Plot graph.opt_tissue1
        opt_tissue1[_i0] = optionstissue1[6];  // EjsS Model.Variables.Plot graph.opt_tissue1
      }
    }());
    functionString = "pow(10,-0.5*1*x/10)"; // EjsS Model.Variables.Plot graph.functionString
    xmin = 0; // EjsS Model.Variables.Plot graph.xmin
    xmax = 10.0; // EjsS Model.Variables.Plot graph.xmax
    mhz = 1; // EjsS Model.Variables.Plot graph.mhz
    coef1 = 0.18; // EjsS Model.Variables.Plot graph.coef1
    coef = 0.18; // EjsS Model.Variables.Plot graph.coef
    coef2 = 0.18; // EjsS Model.Variables.Plot graph.coef2
    ImageUrl = "./ultrasoundfiles/muscle.png"; // EjsS Model.Variables.Plot graph.ImageUrl
    AutoScale = true; // EjsS Model.Variables.Plot graph.AutoScale
    GraphNameX = "Depth in cm"; // EjsS Model.Variables.Plot graph.GraphNameX
    GraphNameUP = "Intensity/Depth"; // EjsS Model.Variables.Plot graph.GraphNameUP
  });

  _model.addToReset(function() {
    optionsTissueZ1 = ["Air","Lung","Fat","Water","Kidney","Blood","Liver","Muscle","Skull Bone"]; // EjsS Model.Variables.IntensityOpt.optionsTissueZ1
    opt_TissueZ1 = new Array(1); // EjsS Model.Variables.IntensityOpt.opt_TissueZ1
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.IntensityOpt.opt_TissueZ1
        opt_TissueZ1[_i0] = optionsTissueZ1[2];  // EjsS Model.Variables.IntensityOpt.opt_TissueZ1
      }
    }());
    Z1 = 0.18; // EjsS Model.Variables.IntensityOpt.Z1
    Z2 = 1.71; // EjsS Model.Variables.IntensityOpt.Z2
    Ii = 100; // EjsS Model.Variables.IntensityOpt.Ii
    Ir = 1; // EjsS Model.Variables.IntensityOpt.Ir
    It = 1; // EjsS Model.Variables.IntensityOpt.It
    CM = 27; // EjsS Model.Variables.IntensityOpt.CM
    Zs = 1; // EjsS Model.Variables.IntensityOpt.Zs
    MAXYGRAPH = Ii+25; // EjsS Model.Variables.IntensityOpt.MAXYGRAPH
    optionsTissueZ2 = ["Air","Lung","Fat","Water","Kidney","Blood","Liver","Muscle","Skull Bone"]; // EjsS Model.Variables.IntensityOpt.optionsTissueZ2
    opt_TissueZ2 = new Array(1); // EjsS Model.Variables.IntensityOpt.opt_TissueZ2
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.IntensityOpt.opt_TissueZ2
        opt_TissueZ2[_i0] = optionsTissueZ2[7];  // EjsS Model.Variables.IntensityOpt.opt_TissueZ2
      }
    }());
    I0 = 100; // EjsS Model.Variables.IntensityOpt.I0
    coefI1 = 1; // EjsS Model.Variables.IntensityOpt.coefI1
    coefI2 = 1; // EjsS Model.Variables.IntensityOpt.coefI2
    FirstEchoI = 1; // EjsS Model.Variables.IntensityOpt.FirstEchoI
    SecondEcho1 = 1; // EjsS Model.Variables.IntensityOpt.SecondEcho1
    SecondEcho2 = 1; // EjsS Model.Variables.IntensityOpt.SecondEcho2
    It2 = 1; // EjsS Model.Variables.IntensityOpt.It2
    Ir2 = 1; // EjsS Model.Variables.IntensityOpt.Ir2
    optionsint = ["Reflected and Transmitted","Echoes"]; // EjsS Model.Variables.IntensityOpt.optionsint
    opt_int = new Array(1); // EjsS Model.Variables.IntensityOpt.opt_int
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.IntensityOpt.opt_int
        opt_int[_i0] = optionsint[0];  // EjsS Model.Variables.IntensityOpt.opt_int
      }
    }());
    intsep = false; // EjsS Model.Variables.IntensityOpt.intsep
    intsep2 = false; // EjsS Model.Variables.IntensityOpt.intsep2
    Ygraph = 100; // EjsS Model.Variables.IntensityOpt.Ygraph
    Ymingraph = 0; // EjsS Model.Variables.IntensityOpt.Ymingraph
  });

  _model.addToReset(function() {
    pi = Math.PI; // EjsS Model.Variables.Angle.pi
    angleRad = pi / 4; // EjsS Model.Variables.Angle.angleRad
    angleDeg = angleRad * 180 / pi; // EjsS Model.Variables.Angle.angleDeg
    V2 = 4080; // EjsS Model.Variables.Angle.V2
    V1 = 1600; // EjsS Model.Variables.Angle.V1
    angleDeg2 = 1; // EjsS Model.Variables.Angle.angleDeg2
    angleRad2 = 1; // EjsS Model.Variables.Angle.angleRad2
    angleDeg3 = 1; // EjsS Model.Variables.Angle.angleDeg3
    GEOx = 100-angleDeg; // EjsS Model.Variables.Angle.GEOx
    GEOy = 1; // EjsS Model.Variables.Angle.GEOy
    GEOys = 74; // EjsS Model.Variables.Angle.GEOys
    optionsgeo = ["Air","Lung","Fat","Water","Soft Tissue","Kidney","Blood","Liver","Muscle","Bone"]; // EjsS Model.Variables.Angle.optionsgeo
    opt_geo = new Array(1); // EjsS Model.Variables.Angle.opt_geo
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Angle.opt_geo
        opt_geo[_i0] = optionsgeo[2];  // EjsS Model.Variables.Angle.opt_geo
      }
    }());
    optionsgeo2 = ["Air","Lung","Fat","Water","Soft Tissue","Kidney","Blood","Liver","Muscle","Bone"]; // EjsS Model.Variables.Angle.optionsgeo2
    opt_geo2 = new Array(1); // EjsS Model.Variables.Angle.opt_geo2
    (function () {
      var _i0;
      for (_i0=0; _i0<1; _i0+=1) {  // EjsS Model.Variables.Angle.opt_geo2
        opt_geo2[_i0] = optionsgeo[2];  // EjsS Model.Variables.Angle.opt_geo2
      }
    }());
    bluevis = false; // EjsS Model.Variables.Angle.bluevis
    criticalvis = false; // EjsS Model.Variables.Angle.criticalvis
  });

  _model.addToReset(function() {
    functionString1 = "sin(2*2*3.71*x)*10*pow(2.71,(-x+0.1)*3)"; // EjsS Model.Variables.Amp.functionString1
    xmin1 = 0; // EjsS Model.Variables.Amp.xmin1
    xmax1 = 4; // EjsS Model.Variables.Amp.xmax1
    n = 500; // EjsS Model.Variables.Amp.n
    functionString2 = "sin(2*2*3.71*x)*1*pow(2.71,(-x+0.1)*2)"; // EjsS Model.Variables.Amp.functionString2
    xmin2 = 0; // EjsS Model.Variables.Amp.xmin2
    xmax2 = 3; // EjsS Model.Variables.Amp.xmax2
    functionString3 = "sin(2*2*3.71*x)*1*pow(2.71,(-x+0.1)*2)"; // EjsS Model.Variables.Amp.functionString3
    xmin3 = 0; // EjsS Model.Variables.Amp.xmin3
    xmax3 = 3; // EjsS Model.Variables.Amp.xmax3
    ValueFirstEcho = 1; // EjsS Model.Variables.Amp.ValueFirstEcho
    ValueSecondEcho = 1; // EjsS Model.Variables.Amp.ValueSecondEcho
    CMtissue1 = 0.1; // EjsS Model.Variables.Amp.CMtissue1
    CMtissue2 = 0.1; // EjsS Model.Variables.Amp.CMtissue2
    ampWidth = "0"; // EjsS Model.Variables.Amp.ampWidth
    ampHeight = "0"; // EjsS Model.Variables.Amp.ampHeight
  });

  _model.addToReset(function() {
    animationt = 0; // EjsS Model.Variables.animation.animationt
    animationdt = 2; // EjsS Model.Variables.animation.animationdt
    animationIdt = 2; // EjsS Model.Variables.animation.animationIdt
    animationIt = 0; // EjsS Model.Variables.animation.animationIt
    animationtime = 190; // EjsS Model.Variables.animation.animationtime
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setPauseOnPageExit(true);
    _model.setFPS(20);
    _model.setStepsPerDisplay(1);
  });

  function service_angle(){  // > CustomCode.Lib Page:1
    if (opt_angle[0]===options[0]) {  // > CustomCode.Lib Page:2
      x1=100;  // > CustomCode.Lib Page:3
      x2=100;  // > CustomCode.Lib Page:4
      rot=0;  // > CustomCode.Lib Page:5
      y2=88;  // > CustomCode.Lib Page:6
      y1=80;  // > CustomCode.Lib Page:7
      arrowvisible=false;  // > CustomCode.Lib Page:8
      Iarrowvisible=true;  // > CustomCode.Lib Page:9
      tissuevisible=true;  // > CustomCode.Lib Page:10
      tissuevisible2=false;  // > CustomCode.Lib Page:11
      transdurcervisible=true;  // > CustomCode.Lib Page:12
      shapex=8;  // > CustomCode.Lib Page:13
      shapey=16;  // > CustomCode.Lib Page:14
      CM=27;  // > CustomCode.Lib Page:15
      heightpanel="400";  // > CustomCode.Lib Page:16
      AutoScale=false;  // > CustomCode.Lib Page:17
      GraphNameX="Incident - Reflected - Transmitted"  // > CustomCode.Lib Page:18
      GraphNameUP="-";  // > CustomCode.Lib Page:19
      bluevis=false;  // > CustomCode.Lib Page:20
      criticalvis=false;  // > CustomCode.Lib Page:21
      amp();  // > CustomCode.Lib Page:22
      ampWidth="500";  // > CustomCode.Lib Page:23
      ampHeight="400";  // > CustomCode.Lib Page:24
      intsep=true;  // > CustomCode.Lib Page:25
      intensitySep();  // > CustomCode.Lib Page:26
        // > CustomCode.Lib Page:27
     // > CustomCode.Lib Page:28
        // > CustomCode.Lib Page:29
   } else if (opt_angle[0]===options[1]) {  // > CustomCode.Lib Page:30
      x1=20;  // > CustomCode.Lib Page:31
      x2=14;  // > CustomCode.Lib Page:32
      rot=7.05;  // > CustomCode.Lib Page:33
      y2=86;  // > CustomCode.Lib Page:34
      y1=80;  // > CustomCode.Lib Page:35
      arrowvisible=true;  // > CustomCode.Lib Page:36
      Iarrowvisible=false;  // > CustomCode.Lib Page:37
      tissuevisible=true;  // > CustomCode.Lib Page:38
      tissuevisible2=false;  // > CustomCode.Lib Page:39
      transdurcervisible=false;  // > CustomCode.Lib Page:40
      shapex=8;  // > CustomCode.Lib Page:41
      shapey=16;  // > CustomCode.Lib Page:42
      heightpanel="500";  // > CustomCode.Lib Page:43
      bluevis=true;  // > CustomCode.Lib Page:44
      criticalvis=false;  // > CustomCode.Lib Page:45
      ampWidth="0";  // > CustomCode.Lib Page:46
      ampHeight="0";  // > CustomCode.Lib Page:47
      intsep=false;  // > CustomCode.Lib Page:48
      intsep2=false;  // > CustomCode.Lib Page:49
      Ygraph=100;  // > CustomCode.Lib Page:50
      Ymingraph=0;  // > CustomCode.Lib Page:51
      animationtime=0;  // > CustomCode.Lib Page:52
        // > CustomCode.Lib Page:53
  } else if (opt_angle[0]===options[2]) {  // > CustomCode.Lib Page:54
      x1=62;  // > CustomCode.Lib Page:55
      x2=43;  // > CustomCode.Lib Page:56
      rot=7.85;  // > CustomCode.Lib Page:57
      y2=0;  // > CustomCode.Lib Page:58
      y1=0;  // > CustomCode.Lib Page:59
      arrowvisible=false;  // > CustomCode.Lib Page:60
      Iarrowvisible=false;  // > CustomCode.Lib Page:61
      tissuevisible=false;  // > CustomCode.Lib Page:62
      tissuevisible2=true;  // > CustomCode.Lib Page:63
      transdurcervisible=true;  // > CustomCode.Lib Page:64
      shapex=8*2;  // > CustomCode.Lib Page:65
      shapey=16*2;  // > CustomCode.Lib Page:66
      CM=0;  // > CustomCode.Lib Page:67
      heightpanel="400";  // > CustomCode.Lib Page:68
      AutoScale=true;  // > CustomCode.Lib Page:69
      GraphNameX="Depth in cm";  // > CustomCode.Lib Page:70
      GraphNameUP="Intensity/Depth";  // > CustomCode.Lib Page:71
      bluevis=false;  // > CustomCode.Lib Page:72
      criticalvis=false;  // > CustomCode.Lib Page:73
      lib_Page_2();  // > CustomCode.Lib Page:74
      ampWidth="0";  // > CustomCode.Lib Page:75
      ampHeight="0";  // > CustomCode.Lib Page:76
      lib_Page_2();  // > CustomCode.Lib Page:77
      intsep=false;  // > CustomCode.Lib Page:78
      intsep2=false;  // > CustomCode.Lib Page:79
      Ygraph=100;  // > CustomCode.Lib Page:80
      Ymingraph=0;  // > CustomCode.Lib Page:81
      animationtime=190;  // > CustomCode.Lib Page:82
        // > CustomCode.Lib Page:83
        // > CustomCode.Lib Page:84
   }else {  // > CustomCode.Lib Page:85
   }  // > CustomCode.Lib Page:86
     return;  // > CustomCode.Lib Page:87
  }  // > CustomCode.Lib Page:88
  function service_tissue1(){  // > CustomCode.Lib Page:89
    if (opt_tissue1[0]===optionstissue1[0]) {  // > CustomCode.Lib Page:90
        // > CustomCode.Lib Page:91
      coef=0.0002  // > CustomCode.Lib Page:92
      coef1=0.0000  // > CustomCode.Lib Page:93
      coef2=0.0012  // > CustomCode.Lib Page:94
       //water  // > CustomCode.Lib Page:95
        // > CustomCode.Lib Page:96
  } else if (opt_tissue1[0]===optionstissue1[1]) {  // > CustomCode.Lib Page:97
        // > CustomCode.Lib Page:98
      coef=0.2  // > CustomCode.Lib Page:99
      coef1=0.2  // > CustomCode.Lib Page:100
      coef2=0.2  // > CustomCode.Lib Page:101
      //blood  // > CustomCode.Lib Page:102
        // > CustomCode.Lib Page:103
        // > CustomCode.Lib Page:104
  } else if (opt_tissue1[0]===optionstissue1[2]) {  // > CustomCode.Lib Page:105
        // > CustomCode.Lib Page:106
      coef=0.5  // > CustomCode.Lib Page:107
      coef1=0.3  // > CustomCode.Lib Page:108
      coef2=0.8  // > CustomCode.Lib Page:109
      //soft tissue  // > CustomCode.Lib Page:110
        // > CustomCode.Lib Page:111
   }else if (opt_tissue1[0]===optionstissue1[3]) {  // > CustomCode.Lib Page:112
        // > CustomCode.Lib Page:113
      coef=0.4  // > CustomCode.Lib Page:114
      coef1=0.3  // > CustomCode.Lib Page:115
      coef2=0.5  // > CustomCode.Lib Page:116
      //brain  // > CustomCode.Lib Page:117
        // > CustomCode.Lib Page:118
   }else if (opt_tissue1[0]===optionstissue1[4]) {  // > CustomCode.Lib Page:119
        // > CustomCode.Lib Page:120
      coef=0.6  // > CustomCode.Lib Page:121
      coef1=0.4  // > CustomCode.Lib Page:122
      coef2=0.7  // > CustomCode.Lib Page:123
      //liver  // > CustomCode.Lib Page:124
      ImageUrl = "./ultrasoundfiles/liver.png"  // > CustomCode.Lib Page:125
        // > CustomCode.Lib Page:126
   }else if (opt_tissue1[0]===optionstissue1[5]) {  // > CustomCode.Lib Page:127
        // > CustomCode.Lib Page:128
      coef=0.9  // > CustomCode.Lib Page:129
      coef1=0.5  // > CustomCode.Lib Page:130
      coef2=1.8  // > CustomCode.Lib Page:131
      //fat  // > CustomCode.Lib Page:132
        // > CustomCode.Lib Page:133
   }else if (opt_tissue1[0]===optionstissue1[6]) {  // > CustomCode.Lib Page:134
        // > CustomCode.Lib Page:135
      coef=0.3  // > CustomCode.Lib Page:136
      coef1=0.2  // > CustomCode.Lib Page:137
      coef2=0.6  // > CustomCode.Lib Page:138
      functionString="pow(10,"+ coef+"*-1*x/10*"+ mhz+")" //smoothmuscle  // > CustomCode.Lib Page:139
      ImageUrl= "./ultrasoundfiles/muscle.png"  // > CustomCode.Lib Page:140
        // > CustomCode.Lib Page:141
   }else if (opt_tissue1[0]===optionstissue1[7]) {  // > CustomCode.Lib Page:142
        // > CustomCode.Lib Page:143
      coef=1.0  // > CustomCode.Lib Page:144
      coef1=0.9  // > CustomCode.Lib Page:145
      coef2=1.1  // > CustomCode.Lib Page:146
      //tendon  // > CustomCode.Lib Page:147
        // > CustomCode.Lib Page:148
      // > CustomCode.Lib Page:149
   }else if (opt_tissue1[0]===optionstissue1[8]) {  // > CustomCode.Lib Page:150
        // > CustomCode.Lib Page:151
      coef=15.0  // > CustomCode.Lib Page:152
      coef1=13.0  // > CustomCode.Lib Page:153
      coef2=26.0  // > CustomCode.Lib Page:154
      functionString="pow(10,"+ coef+"*-1*x/10*"+ mhz+")"//bone  // > CustomCode.Lib Page:155
        // > CustomCode.Lib Page:156
   }else {  // > CustomCode.Lib Page:157
     return;  // > CustomCode.Lib Page:158
   }  // > CustomCode.Lib Page:159
     return;  // > CustomCode.Lib Page:160
  }  // > CustomCode.Lib Page:161

  function intensity () {  // > CustomCode.Intensity:1
  Ii = Math.pow(2.718281828,-1*CMtissue1*coefI1*1) * I0;  // > CustomCode.Intensity:2
  Zs = (Z2-Z1)/(Z2+Z1);  // > CustomCode.Intensity:3
  Ir = Math.pow(Zs,2) * Ii;  // > CustomCode.Intensity:4
  It = Ii-Ir;  // > CustomCode.Intensity:5
  FirstEchoI= Ir * Math.pow(2.718281828,-1*CMtissue1*coefI1*1);  // > CustomCode.Intensity:6
  SecondEcho1= Math.pow(2.718281828,-1*CMtissue2*2*coefI2*1) * It;  // > CustomCode.Intensity:7
  Ir2 = Math.pow(Zs,2) * SecondEcho1;  // > CustomCode.Intensity:8
  It2 = SecondEcho1 - Ir2;  // > CustomCode.Intensity:9
  SecondEcho2= Math.pow(2.718281828,-1*CMtissue1*coefI1*1) * It2;  // > CustomCode.Intensity:10
  ValueFirstEcho= Math.sqrt(FirstEchoI);  // > CustomCode.Intensity:11
  ValueSecondEcho= Math.sqrt(SecondEcho2);  // > CustomCode.Intensity:12
  amp();  // > CustomCode.Intensity:13
  }  // > CustomCode.Intensity:14
  function service_TissueZ1(){  // > CustomCode.Intensity:15
    if (opt_TissueZ1[0]===optionsTissueZ1[0]) {  // > CustomCode.Intensity:16
        // > CustomCode.Intensity:17
      Z1=0.0004;  // > CustomCode.Intensity:18
      coefI1=7.5;  // > CustomCode.Intensity:19
        // > CustomCode.Intensity:20
  } else if (opt_TissueZ1[0]===optionsTissueZ1[1]) {  // > CustomCode.Intensity:21
        // > CustomCode.Intensity:22
      Z1=0.18;  // > CustomCode.Intensity:23
      coefI1=40;  // > CustomCode.Intensity:24
  } else if (opt_TissueZ1[0]===optionsTissueZ1[2]) {  // > CustomCode.Intensity:25
        // > CustomCode.Intensity:26
      Z1=1.34;  // > CustomCode.Intensity:27
      coefI1=0.63;  // > CustomCode.Intensity:28
        // > CustomCode.Intensity:29
  } else if (opt_TissueZ1[0]===optionsTissueZ1[3]) {  // > CustomCode.Intensity:30
        // > CustomCode.Intensity:31
      Z1=1.48;  // > CustomCode.Intensity:32
      coefI1=0.0002;  // > CustomCode.Intensity:33
        // > CustomCode.Intensity:34
  } else if (opt_TissueZ1[0]===optionsTissueZ1[4]) {  // > CustomCode.Intensity:35
        // > CustomCode.Intensity:36
      Z1=1.63;  // > CustomCode.Intensity:37
      coefI1=1;  // > CustomCode.Intensity:38
        // > CustomCode.Intensity:39
  } else if (opt_TissueZ1[0]===optionsTissueZ1[5]) {  // > CustomCode.Intensity:40
        // > CustomCode.Intensity:41
      Z1=1.65;  // > CustomCode.Intensity:42
      coefI1=0.18  // > CustomCode.Intensity:43
        // > CustomCode.Intensity:44
  } else if (opt_TissueZ1[0]===optionsTissueZ1[6]) {  // > CustomCode.Intensity:45
        // > CustomCode.Intensity:46
      Z1=1.65;  // > CustomCode.Intensity:47
      coefI1=0.6;  // > CustomCode.Intensity:48
  } else if (opt_TissueZ1[0]===optionsTissueZ1[7]) {  // > CustomCode.Intensity:49
        // > CustomCode.Intensity:50
      Z1=1.71;  // > CustomCode.Intensity:51
      coefI1=0.5;  // > CustomCode.Intensity:52
        // > CustomCode.Intensity:53
  } else if (opt_TissueZ1[0]===optionsTissueZ1[8]) {  // > CustomCode.Intensity:54
        // > CustomCode.Intensity:55
      Z1=7;  // > CustomCode.Intensity:56
      coefI1=15;  // > CustomCode.Intensity:57
        // > CustomCode.Intensity:58
  }else {  // > CustomCode.Intensity:59
     return;  // > CustomCode.Intensity:60
   }  // > CustomCode.Intensity:61
     return;  // > CustomCode.Intensity:62
  }  // > CustomCode.Intensity:63
  function service_TissueZ2(){  // > CustomCode.Intensity:64
    if (opt_TissueZ2[0]===optionsTissueZ2[0]) {  // > CustomCode.Intensity:65
        // > CustomCode.Intensity:66
      Z2=0.0004;  // > CustomCode.Intensity:67
      coefI2=7.5;  // > CustomCode.Intensity:68
        // > CustomCode.Intensity:69
  } else if (opt_TissueZ2[0]===optionsTissueZ2[1]) {  // > CustomCode.Intensity:70
        // > CustomCode.Intensity:71
      Z2=0.18;  // > CustomCode.Intensity:72
      coefI2=40;  // > CustomCode.Intensity:73
  } else if (opt_TissueZ2[0]===optionsTissueZ2[2]) {  // > CustomCode.Intensity:74
        // > CustomCode.Intensity:75
      Z2=1.34;  // > CustomCode.Intensity:76
      coefI2=0.63;  // > CustomCode.Intensity:77
        // > CustomCode.Intensity:78
  } else if (opt_TissueZ2[0]===optionsTissueZ2[3]) {  // > CustomCode.Intensity:79
        // > CustomCode.Intensity:80
      Z2=1.48;  // > CustomCode.Intensity:81
      coefI2=0.0002;  // > CustomCode.Intensity:82
        // > CustomCode.Intensity:83
  } else if (opt_TissueZ2[0]===optionsTissueZ2[4]) {  // > CustomCode.Intensity:84
        // > CustomCode.Intensity:85
      Z2=1.63;  // > CustomCode.Intensity:86
      coefI2=1;  // > CustomCode.Intensity:87
        // > CustomCode.Intensity:88
  } else if (opt_TissueZ2[0]===optionsTissueZ2[5]) {  // > CustomCode.Intensity:89
        // > CustomCode.Intensity:90
      Z2=1.65;  // > CustomCode.Intensity:91
      coefI2=0.18;  // > CustomCode.Intensity:92
        // > CustomCode.Intensity:93
  } else if (opt_TissueZ2[0]===optionsTissueZ2[6]) {  // > CustomCode.Intensity:94
        // > CustomCode.Intensity:95
      Z2=1.65;  // > CustomCode.Intensity:96
      coefI2=0.6;  // > CustomCode.Intensity:97
  } else if (opt_TissueZ2[0]===optionsTissueZ2[7]) {  // > CustomCode.Intensity:98
        // > CustomCode.Intensity:99
      Z2=1.71;  // > CustomCode.Intensity:100
      coefI2=0.5;  // > CustomCode.Intensity:101
        // > CustomCode.Intensity:102
  } else if (opt_TissueZ2[0]===optionsTissueZ2[8]) {  // > CustomCode.Intensity:103
        // > CustomCode.Intensity:104
      Z2=7;  // > CustomCode.Intensity:105
      coefI2=15;  // > CustomCode.Intensity:106
        // > CustomCode.Intensity:107
  }else {  // > CustomCode.Intensity:108
     return;  // > CustomCode.Intensity:109
   }  // > CustomCode.Intensity:110
     return;  // > CustomCode.Intensity:111
  }  // > CustomCode.Intensity:112

  function ınitPage () {  // > CustomCode.InitPage:1
      // > CustomCode.InitPage:2
  _view._update();  // > CustomCode.InitPage:3
  var dx=(xmax-xmin)/(n-1);  // > CustomCode.InitPage:4
  for(var i=0; i<n; i++) {  // > CustomCode.InitPage:5
    var x =  xmin+i*dx;  // > CustomCode.InitPage:6
    var y = _view.functionField.evaluate( {"x":x} );  // > CustomCode.InitPage:7
    _println("x="+x+"   y="+y);  // > CustomCode.InitPage:8
    _view.trail.addPoint(x,y);  // > CustomCode.InitPage:9
  }  // > CustomCode.InitPage:10
  }  // > CustomCode.InitPage:11
  function ınitPage1 () {  // > CustomCode.InitPage:12
      // > CustomCode.InitPage:13
  _view._update();   // > CustomCode.InitPage:14
  var dx=(xmax1-xmin1)/(n-1);  // > CustomCode.InitPage:15
  for(var i=0; i<n; i++) {  // > CustomCode.InitPage:16
    var x =  xmin1+i*dx;  // > CustomCode.InitPage:17
    var y = _view.functionFieldA.evaluate( {"x":x} );  // > CustomCode.InitPage:18
    _println("x="+x+"   y="+y);  // > CustomCode.InitPage:19
    _view.trail1.addPoint(x,y);  // > CustomCode.InitPage:20
  }  // > CustomCode.InitPage:21
  }  // > CustomCode.InitPage:22
  function ınitPage2 () {  // > CustomCode.InitPage:23
      // > CustomCode.InitPage:24
  _view._update();   // > CustomCode.InitPage:25
  var dx=(xmax2-xmin2)/(n-1);  // > CustomCode.InitPage:26
  for(var i=0; i<n; i++) {  // > CustomCode.InitPage:27
    var x =  xmin2+i*dx;  // > CustomCode.InitPage:28
    var y = _view.functionFieldB.evaluate( {"x":x} );  // > CustomCode.InitPage:29
    _println("x="+x+"   y="+y);  // > CustomCode.InitPage:30
    _view.trail2.addPoint(x+4,y);  // > CustomCode.InitPage:31
  }  // > CustomCode.InitPage:32
  }  // > CustomCode.InitPage:33
  function ınitPage3 () {  // > CustomCode.InitPage:34
      // > CustomCode.InitPage:35
  _view._update();   // > CustomCode.InitPage:36
  var dx=(xmax3-xmin3)/(n-1);  // > CustomCode.InitPage:37
  for(var i=0; i<n; i++) {  // > CustomCode.InitPage:38
    var x =  xmin3+i*dx;  // > CustomCode.InitPage:39
    var y = _view.functionFieldC.evaluate( {"x":x} );  // > CustomCode.InitPage:40
    _println("x="+x+"   y="+y);  // > CustomCode.InitPage:41
    _view.trail3.addPoint(x+7,y);  // > CustomCode.InitPage:42
  }  // > CustomCode.InitPage:43
  }  // > CustomCode.InitPage:44

  function lib_Page_2 () {  // > CustomCode.Lib Page 2:1
    functionString="pow(2.71828182846,"+ coef+"*-2*x*"+ mhz+")*"+I0;  // > CustomCode.Lib Page 2:2
    _view._initialize();  // > CustomCode.Lib Page 2:3
    ınitPage();  // > CustomCode.Lib Page 2:4
  }  // > CustomCode.Lib Page 2:5

  function amp () {  // > CustomCode.Amp:1
    functionString1="sin(2*2*3.14159265359*x)*10*pow(2.71828182846,(-x+0.115)*2)";  // > CustomCode.Amp:2
    functionString2="sin(2*2*3.14159265359*x)*"+ ValueFirstEcho+"*pow(2.71828182846,(-x+0.115)*2)";  // > CustomCode.Amp:3
    functionString3="sin(2*2*3.14159265359*x)*"+ ValueSecondEcho+"*pow(2.71828182846,(-x+0.115)*2)";  // > CustomCode.Amp:4
    _view._initialize();  // > CustomCode.Amp:5
    ınitPage1();  // > CustomCode.Amp:6
    ınitPage2();  // > CustomCode.Amp:7
    ınitPage3();  // > CustomCode.Amp:8
  }  // > CustomCode.Amp:9
  function erroramp2 () {  // > CustomCode.Amp:10
      // > CustomCode.Amp:11
    functionString2="sin(2*2*3.14159265359*x)*0*pow(2.71828182846,(-x+0.115)*2)";  // > CustomCode.Amp:12
    _view._initialize();  // > CustomCode.Amp:13
    ınitPage1();  // > CustomCode.Amp:14
    ınitPage2();  // > CustomCode.Amp:15
    ınitPage3();   // > CustomCode.Amp:16
  }  // > CustomCode.Amp:17
  function erroramp3 () {  // > CustomCode.Amp:18
      // > CustomCode.Amp:19
    functionString3="sin(2*2*3.14159265359*x)*0*pow(2.71828182846,(-x+0.115)*2)";  // > CustomCode.Amp:20
    _view._initialize();  // > CustomCode.Amp:21
    ınitPage1();  // > CustomCode.Amp:22
    ınitPage2();  // > CustomCode.Amp:23
    ınitPage3();  // > CustomCode.Amp:24
      // > CustomCode.Amp:25
  }  // > CustomCode.Amp:26

  function GEOM()  {  // > CustomCode.Angle:1
  angleRad = angleDeg * pi / 180;  // > CustomCode.Angle:2
  angleDeg2 = Math.sin(angleRad)* (V2/V1);  // > CustomCode.Angle:3
  angleRad2 = Math.asin(angleDeg2);  // > CustomCode.Angle:4
  _view._initialize();  // > CustomCode.Angle:5
  geoupdate();  // > CustomCode.Angle:6
  }  // > CustomCode.Angle:7
  function geoupdate() {  // > CustomCode.Angle:8
      // > CustomCode.Angle:9
    _view._update();  // > CustomCode.Angle:10
    angleDeg3 = angleRad2 * 180 / pi;  // > CustomCode.Angle:11
    criticalangle= Math.asin(V1/V2);  // > CustomCode.Angle:12
    criticaldeg= criticalangle * 180 / pi;  // > CustomCode.Angle:13
  if(angleDeg>criticaldeg)  {  // > CustomCode.Angle:14
      // > CustomCode.Angle:15
      bluevis=false;  // > CustomCode.Angle:16
      criticalvis=true;  // > CustomCode.Angle:17
      // > CustomCode.Angle:18
    }  else if(angleDeg<criticaldeg) {  // > CustomCode.Angle:19
        // > CustomCode.Angle:20
      bluevis=true;  // > CustomCode.Angle:21
      criticalvis=false;  // > CustomCode.Angle:22
        // > CustomCode.Angle:23
      }  // > CustomCode.Angle:24
       else { return;  // > CustomCode.Angle:25
   }  // > CustomCode.Angle:26
      // > CustomCode.Angle:27
  }  // > CustomCode.Angle:28
  function service_geo(){  // > CustomCode.Angle:29
    if (opt_geo[0]===optionsgeo[0]) {  // > CustomCode.Angle:30
        // > CustomCode.Angle:31
      V1=330;  // > CustomCode.Angle:32
        // > CustomCode.Angle:33
  } else if (opt_geo[0]===optionsgeo[1]) {  // > CustomCode.Angle:34
        // > CustomCode.Angle:35
      V1=600;  // > CustomCode.Angle:36
      // > CustomCode.Angle:37
  }  // > CustomCode.Angle:38
    else if (opt_geo[0]===optionsgeo[2]) {  // > CustomCode.Angle:39
        // > CustomCode.Angle:40
      V1=1450;  // > CustomCode.Angle:41
      // > CustomCode.Angle:42
  }  else if (opt_geo[0]===optionsgeo[3]) {  // > CustomCode.Angle:43
        // > CustomCode.Angle:44
      V1=1480;  // > CustomCode.Angle:45
      // > CustomCode.Angle:46
  }  else if (opt_geo[0]===optionsgeo[4]) {  // > CustomCode.Angle:47
        // > CustomCode.Angle:48
      V1=1540;  // > CustomCode.Angle:49
      // > CustomCode.Angle:50
  }  else if (opt_geo[0]===optionsgeo[5]) {  // > CustomCode.Angle:51
        // > CustomCode.Angle:52
      V1=1565;  // > CustomCode.Angle:53
      // > CustomCode.Angle:54
  }  else if (opt_geo[0]===optionsgeo[6]) {  // > CustomCode.Angle:55
        // > CustomCode.Angle:56
      V1=1560;  // > CustomCode.Angle:57
      // > CustomCode.Angle:58
  }  else if (opt_geo[0]===optionsgeo[7]) {  // > CustomCode.Angle:59
        // > CustomCode.Angle:60
      V1=1555;  // > CustomCode.Angle:61
      // > CustomCode.Angle:62
  }  else if (opt_geo[0]===optionsgeo[8]) {  // > CustomCode.Angle:63
        // > CustomCode.Angle:64
      V1=1600;  // > CustomCode.Angle:65
      // > CustomCode.Angle:66
  }  else if (opt_geo[0]===optionsgeo[9]) {  // > CustomCode.Angle:67
        // > CustomCode.Angle:68
      V1=4080;  // > CustomCode.Angle:69
      // > CustomCode.Angle:70
  }  else {  // > CustomCode.Angle:71
     return;  // > CustomCode.Angle:72
   }  // > CustomCode.Angle:73
     return;  // > CustomCode.Angle:74
  }  // > CustomCode.Angle:75
  function service_geo2(){  // > CustomCode.Angle:76
    if (opt_geo2[0]===optionsgeo2[0]) {  // > CustomCode.Angle:77
        // > CustomCode.Angle:78
      V2=330;  // > CustomCode.Angle:79
        // > CustomCode.Angle:80
  } else if (opt_geo2[0]===optionsgeo2[1]) {  // > CustomCode.Angle:81
        // > CustomCode.Angle:82
      V2=600;  // > CustomCode.Angle:83
      // > CustomCode.Angle:84
  }  // > CustomCode.Angle:85
    else if (opt_geo2[0]===optionsgeo2[2]) {  // > CustomCode.Angle:86
        // > CustomCode.Angle:87
      V2=1450;  // > CustomCode.Angle:88
      // > CustomCode.Angle:89
  }  else if (opt_geo2[0]===optionsgeo2[3]) {  // > CustomCode.Angle:90
        // > CustomCode.Angle:91
      V2=1480;  // > CustomCode.Angle:92
      // > CustomCode.Angle:93
  }  else if (opt_geo2[0]===optionsgeo2[4]) {  // > CustomCode.Angle:94
        // > CustomCode.Angle:95
      V2=1540;  // > CustomCode.Angle:96
      // > CustomCode.Angle:97
  }  else if (opt_geo2[0]===optionsgeo2[5]) {  // > CustomCode.Angle:98
        // > CustomCode.Angle:99
      V2=1565;  // > CustomCode.Angle:100
      // > CustomCode.Angle:101
  }  else if (opt_geo2[0]===optionsgeo2[6]) {  // > CustomCode.Angle:102
        // > CustomCode.Angle:103
      V2=1560;  // > CustomCode.Angle:104
      // > CustomCode.Angle:105
  }  else if (opt_geo2[0]===optionsgeo2[7]) {  // > CustomCode.Angle:106
        // > CustomCode.Angle:107
      V2=1555;  // > CustomCode.Angle:108
      // > CustomCode.Angle:109
  }  else if (opt_geo2[0]===optionsgeo2[8]) {  // > CustomCode.Angle:110
        // > CustomCode.Angle:111
      V2=1600;  // > CustomCode.Angle:112
      // > CustomCode.Angle:113
  }  else if (opt_geo2[0]===optionsgeo2[9]) {  // > CustomCode.Angle:114
        // > CustomCode.Angle:115
      V2=4080;  // > CustomCode.Angle:116
      // > CustomCode.Angle:117
  }  else {  // > CustomCode.Angle:118
     return;  // > CustomCode.Angle:119
   }  // > CustomCode.Angle:120
     return;  // > CustomCode.Angle:121
  }  // > CustomCode.Angle:122

  function intensitySep () {  // > CustomCode.IntensitySep:1
      // > CustomCode.IntensitySep:2
    if (opt_int[0]===optionsint[0]) {  // > CustomCode.IntensitySep:3
        // > CustomCode.IntensitySep:4
      intsep=true;  // > CustomCode.IntensitySep:5
      intsep2=false;  // > CustomCode.IntensitySep:6
      Ygraph=100;  // > CustomCode.IntensitySep:7
      Ymingraph=0;  // > CustomCode.IntensitySep:8
      animationtime=120;  // > CustomCode.IntensitySep:9
      }  // > CustomCode.IntensitySep:10
     else if(opt_int[0]===optionsint[1]) {  // > CustomCode.IntensitySep:11
         // > CustomCode.IntensitySep:12
       intsep=false;  // > CustomCode.IntensitySep:13
       intsep2=true;  // > CustomCode.IntensitySep:14
       Ygraph=10;  // > CustomCode.IntensitySep:15
       Ymingraph=-10;  // > CustomCode.IntensitySep:16
       animationtime=150;  // > CustomCode.IntensitySep:17
         // > CustomCode.IntensitySep:18
         // > CustomCode.IntensitySep:19
       }  // > CustomCode.IntensitySep:20
      // > CustomCode.IntensitySep:21
  }  // > CustomCode.IntensitySep:22

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page"]) return;
    ınitPage();  // > Initialization.Init Page:1
    ınitPage1();  // > Initialization.Init Page:2
    ınitPage2();  // > Initialization.Init Page:3
    ınitPage3();  // > Initialization.Init Page:4
    amp();  // > Initialization.Init Page:5
    lib_Page_2();  // > Initialization.Init Page:6
    service_angle();  // > Initialization.Init Page:7
    service_tissue1();  // > Initialization.Init Page:8
    service_TissueZ1();  // > Initialization.Init Page:9
    service_TissueZ2();  // > Initialization.Init Page:10
    intensity();  // > Initialization.Init Page:11
    service_geo();  // > Initialization.Init Page:12
    service_geo2();  // > Initialization.Init Page:13
    animationt=0;  // > Initialization.Init Page:14
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page 2"]) return;
    _view._update();   // > Initialization.Init Page 2:1
    var dx=(xmax1-xmin1)/(n-1);  // > Initialization.Init Page 2:2
    for(var i=0; i<n; i++) {  // > Initialization.Init Page 2:3
      var x =  xmin1+i*dx;  // > Initialization.Init Page 2:4
      var y = _view.functionFieldA.evaluate( {"x":x} );  // > Initialization.Init Page 2:5
      _println("x="+x+"   y="+y);  // > Initialization.Init Page 2:6
      _view.trail1.addPoint(x,y);  // > Initialization.Init Page 2:7
    }  // > Initialization.Init Page 2:8
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page 3"]) return;
    _view._update();   // > Initialization.Init Page 3:1
    var dx=(xmax2-xmin2)/(n-1);  // > Initialization.Init Page 3:2
    for(var i=0; i<n; i++) {  // > Initialization.Init Page 3:3
      var x =  xmin2+i*dx;  // > Initialization.Init Page 3:4
      var y = _view.functionFieldB.evaluate( {"x":x} );  // > Initialization.Init Page 3:5
      _println("x="+x+"   y="+y);  // > Initialization.Init Page 3:6
      _view.trail2.addPoint(x+3,y);  // > Initialization.Init Page 3:7
    }  // > Initialization.Init Page 3:8
  });

  _model.addToInitialization(function() {
    if (!__pagesEnabled["Init Page 4"]) return;
    _view._update();   // > Initialization.Init Page 4:1
    var dx=(xmax3-xmin3)/(n-1);  // > Initialization.Init Page 4:2
    for(var i=0; i<n; i++) {  // > Initialization.Init Page 4:3
      var x =  xmin3+i*dx;  // > Initialization.Init Page 4:4
      var y = _view.functionFieldC.evaluate( {"x":x} );  // > Initialization.Init Page 4:5
      _println("x="+x+"   y="+y);  // > Initialization.Init Page 4:6
      _view.trail3.addPoint(x+6,y);  // > Initialization.Init Page 4:7
    }  // > Initialization.Init Page 4:8
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page"]) return;
    animationt+=animationdt;  // > Evolution.Evol Page:1
  });

  _model.addToEvolution(function() {
    if (!__pagesEnabled["Evol Page 2"]) return;
    animationIt+=animationIdt;  // > Evolution.Evol Page 2:1
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() {
    if (!__pagesEnabled["FixRel Page"]) return;
    if(animationt>animationtime){  // > FixedRelations.FixRel Page:1
          // > FixedRelations.FixRel Page:2
        _pause();  // > FixedRelations.FixRel Page:3
        animationt=0;  // > FixedRelations.FixRel Page:4
      }  // > FixedRelations.FixRel Page:5
      else{    // > FixedRelations.FixRel Page:6
        return;   // > FixedRelations.FixRel Page:7
         }  // > FixedRelations.FixRel Page:8
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : 800, height : 600 };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new Ultrasound_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.comboBox.linkProperty("Options",  function() { return options; }, function(_v) { options = _v; } ); // HtmlView Page linking property 'Options' for element 'comboBox'
          _view.comboBox.setAction("OnChange", service_angle); // HtmlView Page setting action 'OnChange' for element 'comboBox'
          _view.comboBox.linkProperty("SelectedOptions",  function() { return opt_angle; }, function(_v) { opt_angle = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'comboBox'
          _view.drawingPanel.linkProperty("Height",  function() { return heightpanel; }, function(_v) { heightpanel = _v; } ); // HtmlView Page linking property 'Height' for element 'drawingPanel'
          _view.ımage3.linkProperty("Visibility",  function() { return transdurcervisible; }, function(_v) { transdurcervisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'ımage3'
          _view.ımage22.linkProperty("X",  function() { return 105-CM; } ); // HtmlView Page linking property 'X' for element 'ımage22'
          _view.ımage22.linkProperty("ImageUrl",  function() { return ImageUrl; }, function(_v) { ImageUrl = _v; } ); // HtmlView Page linking property 'ImageUrl' for element 'ımage22'
          _view.ımage22.linkProperty("Visibility",  function() { return transdurcervisible; }, function(_v) { transdurcervisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'ımage22'
          _view.ımage222.linkProperty("Visibility",  function() { return transdurcervisible; }, function(_v) { transdurcervisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'ımage222'
          _view.AnimationIntensity2.linkProperty("X",  function() { return 272-CM-animationIt; } ); // HtmlView Page linking property 'X' for element 'AnimationIntensity2'
          _view.AnimationIntensity2.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'AnimationIntensity2'
          _view.ımage4.linkProperty("X",  function() { return 215-CM; } ); // HtmlView Page linking property 'X' for element 'ımage4'
          _view.ımage4.linkProperty("Visibility",  function() { return Iarrowvisible; }, function(_v) { Iarrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'ımage4'
          _view.GEO1.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'GEO1'
          _view.GEO12.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'GEO12'
          _view.zeroSegment.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'zeroSegment'
          _view.segment.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'segment'
          _view.segment22.linkProperty("Rotate",  function() { return angleRad; }, function(_v) { angleRad = _v; } ); // HtmlView Page linking property 'Rotate' for element 'segment22'
          _view.segment22.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'segment22'
          _view.segment222.linkProperty("Rotate",  function() { return angleRad; }, function(_v) { angleRad = _v; } ); // HtmlView Page linking property 'Rotate' for element 'segment222'
          _view.segment222.linkProperty("Visibility",  function() { return bluevis; }, function(_v) { bluevis = _v; } ); // HtmlView Page linking property 'Visibility' for element 'segment222'
          _view.red.linkProperty("Rotate",  function() { return -angleRad; } ); // HtmlView Page linking property 'Rotate' for element 'red'
          _view.red.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'red'
          _view.green.linkProperty("Rotate",  function() { return angleRad; }, function(_v) { angleRad = _v; } ); // HtmlView Page linking property 'Rotate' for element 'green'
          _view.green.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'green'
          _view.blue.linkProperty("Rotate",  function() { return angleRad2; }, function(_v) { angleRad2 = _v; } ); // HtmlView Page linking property 'Rotate' for element 'blue'
          _view.blue.linkProperty("Visibility",  function() { return bluevis; }, function(_v) { bluevis = _v; } ); // HtmlView Page linking property 'Visibility' for element 'blue'
          _view.Tissue1Segment.linkProperty("X",  function() { return 160-CM; } ); // HtmlView Page linking property 'X' for element 'Tissue1Segment'
          _view.Tissue1Segment.linkProperty("Visibility",  function() { return transdurcervisible; }, function(_v) { transdurcervisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Tissue1Segment'
          _view.Tissue1Segment2.linkProperty("X",  function() { return 50-CM; } ); // HtmlView Page linking property 'X' for element 'Tissue1Segment2'
          _view.Tissue1Segment2.linkProperty("Visibility",  function() { return transdurcervisible; }, function(_v) { transdurcervisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Tissue1Segment2'
          _view.AnimationArrow2.linkProperty("X",  function() { return 275-animationt; } ); // HtmlView Page linking property 'X' for element 'AnimationArrow2'
          _view.AnimationArrow2.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'AnimationArrow2'
          _view.AnimationArrow.linkProperty("X",  function() { return 50+animationt; } ); // HtmlView Page linking property 'X' for element 'AnimationArrow'
          _view.AnimationArrow.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'AnimationArrow'
          _view.imageRight.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'imageRight'
          _view.Tissue1Segment22.linkProperty("X",  function() { return 270-CM; } ); // HtmlView Page linking property 'X' for element 'Tissue1Segment22'
          _view.Tissue1Segment22.linkProperty("Visibility",  function() { return Iarrowvisible; }, function(_v) { Iarrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Tissue1Segment22'
          _view.Transducer.linkProperty("X",  function() { return 0-CM; } ); // HtmlView Page linking property 'X' for element 'Transducer'
          _view.Transducer.linkProperty("Visibility",  function() { return transdurcervisible; }, function(_v) { transdurcervisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Transducer'
          _view.Tissue14.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Tissue14'
          _view.Tissue23.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Tissue23'
          _view.CriticalAngel.linkProperty("Visibility",  function() { return criticalvis; }, function(_v) { criticalvis = _v; } ); // HtmlView Page linking property 'Visibility' for element 'CriticalAngel'
          _view.CriticalAngel2.linkProperty("Visibility",  function() { return criticalvis; }, function(_v) { criticalvis = _v; } ); // HtmlView Page linking property 'Visibility' for element 'CriticalAngel2'
          _view.AnimationIntensity1.linkProperty("X",  function() { return 50-CM+animationIt; } ); // HtmlView Page linking property 'X' for element 'AnimationIntensity1'
          _view.AnimationIntensity1.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'AnimationIntensity1'
          _view.panelAtte.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'panelAtte'
          _view.playPauseButton.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPauseButton'
          _view.playPauseButton.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'playPauseButton'
          _view.playPauseButton.setAction("OnClick", function(_data,_info) {
  animationdt=Math.abs(animationdt);
  _play();

}); // HtmlView Page setting action 'OnClick' for element 'playPauseButton'
          _view.Reset.setAction("OnClick", function(_data,_info) {
  _pause();
  animationt=0;

}); // HtmlView Page setting action 'OnClick' for element 'Reset'
          _view.slider.linkProperty("Value",  function() { return mhz; }, function(_v) { mhz = _v; } ); // HtmlView Page linking property 'Value' for element 'slider'
          _view.slider.setAction("OnChange", lib_Page_2); // HtmlView Page setting action 'OnChange' for element 'slider'
          _view.comboBox2.linkProperty("Options",  function() { return optionstissue1; }, function(_v) { optionstissue1 = _v; } ); // HtmlView Page linking property 'Options' for element 'comboBox2'
          _view.comboBox2.setAction("OnChange", function(_data,_info) {
  lib_Page_2();
  service_tissue1();

}); // HtmlView Page setting action 'OnChange' for element 'comboBox2'
          _view.comboBox2.linkProperty("SelectedOptions",  function() { return opt_tissue1; }, function(_v) { opt_tissue1 = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'comboBox2'
          _view.Coef.linkProperty("Minimum",  function() { return coef1; }, function(_v) { coef1 = _v; } ); // HtmlView Page linking property 'Minimum' for element 'Coef'
          _view.Coef.linkProperty("Maximum",  function() { return coef2; }, function(_v) { coef2 = _v; } ); // HtmlView Page linking property 'Maximum' for element 'Coef'
          _view.Coef.linkProperty("Value",  function() { return coef; }, function(_v) { coef = _v; } ); // HtmlView Page linking property 'Value' for element 'Coef'
          _view.Coef.setAction("OnChange", lib_Page_2); // HtmlView Page setting action 'OnChange' for element 'Coef'
          _view.panelintensity.linkProperty("Visibility",  function() { return Iarrowvisible; }, function(_v) { Iarrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'panelintensity'
          _view.playPauseButton2.setAction("OffClick", _pause); // HtmlView Page setting action 'OffClick' for element 'playPauseButton2'
          _view.playPauseButton2.linkProperty("State",  function() { return _isPaused; } ); // HtmlView Page linking property 'State' for element 'playPauseButton2'
          _view.playPauseButton2.setAction("OnClick", function(_data,_info) {
  animationIdt=Math.abs(animationIdt);
  _play();
  if (animationIt>115) {
    animationt=0;
    animationIt=0;
    }
    else  {
      }

}); // HtmlView Page setting action 'OnClick' for element 'playPauseButton2'
          _view.Reset2.setAction("OnClick", function(_data,_info) {
  _pause();
  animationIt=0;
  animationt=0;

}); // HtmlView Page setting action 'OnClick' for element 'Reset2'
          _view.comboBoxZ1.linkProperty("Options",  function() { return optionsTissueZ1; }, function(_v) { optionsTissueZ1 = _v; } ); // HtmlView Page linking property 'Options' for element 'comboBoxZ1'
          _view.comboBoxZ1.setAction("OnChange", function(_data,_info) {
  service_TissueZ1();
  service_TissueZ2();
  intensity();
  amp();

}); // HtmlView Page setting action 'OnChange' for element 'comboBoxZ1'
          _view.comboBoxZ1.linkProperty("SelectedOptions",  function() { return opt_TissueZ1; }, function(_v) { opt_TissueZ1 = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'comboBoxZ1'
          _view.CMtissue1.linkProperty("Value",  function() { return CMtissue1; }, function(_v) { CMtissue1 = _v; } ); // HtmlView Page linking property 'Value' for element 'CMtissue1'
          _view.CMtissue1.setAction("OnChange", intensity); // HtmlView Page setting action 'OnChange' for element 'CMtissue1'
          _view.comboBoxZ2.linkProperty("Options",  function() { return optionsTissueZ2; }, function(_v) { optionsTissueZ2 = _v; } ); // HtmlView Page linking property 'Options' for element 'comboBoxZ2'
          _view.comboBoxZ2.setAction("OnChange", function(_data,_info) {
  service_TissueZ1();
  service_TissueZ2();
  intensity();
  amp();

}); // HtmlView Page setting action 'OnChange' for element 'comboBoxZ2'
          _view.comboBoxZ2.linkProperty("SelectedOptions",  function() { return opt_TissueZ2; }, function(_v) { opt_TissueZ2 = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'comboBoxZ2'
          _view.CMtissue2.linkProperty("Value",  function() { return CMtissue2; }, function(_v) { CMtissue2 = _v; } ); // HtmlView Page linking property 'Value' for element 'CMtissue2'
          _view.CMtissue2.setAction("OnChange", intensity); // HtmlView Page setting action 'OnChange' for element 'CMtissue2'
          _view.panelGEO.linkProperty("Visibility",  function() { return arrowvisible; }, function(_v) { arrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'panelGEO'
          _view.Tissue1.linkProperty("Options",  function() { return optionsgeo; }, function(_v) { optionsgeo = _v; } ); // HtmlView Page linking property 'Options' for element 'Tissue1'
          _view.Tissue1.setAction("OnChange", function(_data,_info) {
  service_geo();
  GEOM();

}); // HtmlView Page setting action 'OnChange' for element 'Tissue1'
          _view.Tissue1.linkProperty("SelectedOptions",  function() { return opt_geo; }, function(_v) { opt_geo = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'Tissue1'
          _view.Tissue2.linkProperty("Options",  function() { return optionsgeo2; }, function(_v) { optionsgeo2 = _v; } ); // HtmlView Page linking property 'Options' for element 'Tissue2'
          _view.Tissue2.setAction("OnChange", function(_data,_info) {
  service_geo2();
  GEOM();

}); // HtmlView Page setting action 'OnChange' for element 'Tissue2'
          _view.Tissue2.linkProperty("SelectedOptions",  function() { return opt_geo2; }, function(_v) { opt_geo2 = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'Tissue2'
          _view.angleLabel.linkProperty("Text",  function() { return "Incident Angle: " + angleDeg + "°"; } ); // HtmlView Page linking property 'Text' for element 'angleLabel'
          _view.angleSlider.linkProperty("Value",  function() { return angleDeg; }, function(_v) { angleDeg = _v; } ); // HtmlView Page linking property 'Value' for element 'angleSlider'
          _view.angleSlider.setAction("OnChange", function(_data,_info) {
  service_geo();
  GEOM();

}); // HtmlView Page setting action 'OnChange' for element 'angleSlider'
          _view.Angel2.linkProperty("Value",  function() { return angleDeg3; }, function(_v) { angleDeg3 = _v; } ); // HtmlView Page linking property 'Value' for element 'Angel2'
          _view.pePlottingPanel.linkProperty("MinimumY",  function() { return Ymingraph; }, function(_v) { Ymingraph = _v; } ); // HtmlView Page linking property 'MinimumY' for element 'pePlottingPanel'
          _view.pePlottingPanel.linkProperty("TitleX",  function() { return GraphNameX; }, function(_v) { GraphNameX = _v; } ); // HtmlView Page linking property 'TitleX' for element 'pePlottingPanel'
          _view.pePlottingPanel.linkProperty("Title",  function() { return GraphNameUP; }, function(_v) { GraphNameUP = _v; } ); // HtmlView Page linking property 'Title' for element 'pePlottingPanel'
          _view.pePlottingPanel.linkProperty("MaximumY",  function() { return Ygraph; }, function(_v) { Ygraph = _v; } ); // HtmlView Page linking property 'MaximumY' for element 'pePlottingPanel'
          _view.trail.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail'
          _view.IT2.linkProperty("Y",  function() { return It/2; } ); // HtmlView Page linking property 'Y' for element 'IT2'
          _view.IT2.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'IT2'
          _view.IT2.linkProperty("SizeY",  function() { return It; }, function(_v) { It = _v; } ); // HtmlView Page linking property 'SizeY' for element 'IT2'
          _view.IR2.linkProperty("Y",  function() { return Ir/2; } ); // HtmlView Page linking property 'Y' for element 'IR2'
          _view.IR2.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'IR2'
          _view.IR2.linkProperty("SizeY",  function() { return Ir; }, function(_v) { Ir = _v; } ); // HtmlView Page linking property 'SizeY' for element 'IR2'
          _view.Iİ2.linkProperty("Y",  function() { return Ii/2; } ); // HtmlView Page linking property 'Y' for element 'Iİ2'
          _view.Iİ2.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Iİ2'
          _view.Iİ2.linkProperty("SizeY",  function() { return Ii; }, function(_v) { Ii = _v; } ); // HtmlView Page linking property 'SizeY' for element 'Iİ2'
          _view.trail1.linkProperty("Visibility",  function() { return intsep2; }, function(_v) { intsep2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail1'
          _view.trail2.linkProperty("Visibility",  function() { return intsep2; }, function(_v) { intsep2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail2'
          _view.trail3.linkProperty("Visibility",  function() { return intsep2; }, function(_v) { intsep2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'trail3'
          _view.Initial_pulse.linkProperty("Visibility",  function() { return intsep2; }, function(_v) { intsep2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Initial_pulse'
          _view.First_Echo.linkProperty("Visibility",  function() { return intsep2; }, function(_v) { intsep2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'First_Echo'
          _view.Second_Echo.linkProperty("Visibility",  function() { return intsep2; }, function(_v) { intsep2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Second_Echo'
          _view.plotButton.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'plotButton'
          _view.plotButton.setAction("OnClick", lib_Page_2); // HtmlView Page setting action 'OnClick' for element 'plotButton'
          _view.functionField.linkProperty("Value",  function() { return functionString; }, function(_v) { functionString = _v; } ); // HtmlView Page linking property 'Value' for element 'functionField'
          _view.functionField.setAction("OnChange", ınitPage); // HtmlView Page setting action 'OnChange' for element 'functionField'
          _view.nField.linkProperty("Value",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'Value' for element 'nField'
          _view.nField.setAction("OnChange", ınitPage); // HtmlView Page setting action 'OnChange' for element 'nField'
          _view.xmaxLabel.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'xmaxLabel'
          _view.xmaxField.linkProperty("Value",  function() { return xmax; }, function(_v) { xmax = _v; } ); // HtmlView Page linking property 'Value' for element 'xmaxField'
          _view.xmaxField.setAction("OnChange", lib_Page_2); // HtmlView Page setting action 'OnChange' for element 'xmaxField'
          _view.xmaxField.linkProperty("Visibility",  function() { return tissuevisible2; }, function(_v) { tissuevisible2 = _v; } ); // HtmlView Page linking property 'Visibility' for element 'xmaxField'
          _view.Ii.linkProperty("Value",  function() { return Ii; }, function(_v) { Ii = _v; } ); // HtmlView Page linking property 'Value' for element 'Ii'
          _view.Ii.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Ii'
          _view.Ir.linkProperty("Value",  function() { return Ir; }, function(_v) { Ir = _v; } ); // HtmlView Page linking property 'Value' for element 'Ir'
          _view.Ir.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'Ir'
          _view.It.linkProperty("Value",  function() { return It; }, function(_v) { It = _v; } ); // HtmlView Page linking property 'Value' for element 'It'
          _view.It.linkProperty("Visibility",  function() { return intsep; }, function(_v) { intsep = _v; } ); // HtmlView Page linking property 'Visibility' for element 'It'
          _view.comboBox3.linkProperty("Options",  function() { return optionsint; }, function(_v) { optionsint = _v; } ); // HtmlView Page linking property 'Options' for element 'comboBox3'
          _view.comboBox3.setAction("OnChange", intensitySep); // HtmlView Page setting action 'OnChange' for element 'comboBox3'
          _view.comboBox3.linkProperty("Visibility",  function() { return Iarrowvisible; }, function(_v) { Iarrowvisible = _v; } ); // HtmlView Page linking property 'Visibility' for element 'comboBox3'
          _view.comboBox3.linkProperty("SelectedOptions",  function() { return opt_int; }, function(_v) { opt_int = _v; } ); // HtmlView Page linking property 'SelectedOptions' for element 'comboBox3'
          _view.FirstEcho.linkProperty("Value",  function() { return FirstEchoI; }, function(_v) { FirstEchoI = _v; } ); // HtmlView Page linking property 'Value' for element 'FirstEcho'
          _view.SecondEcho1.linkProperty("Value",  function() { return SecondEcho1; }, function(_v) { SecondEcho1 = _v; } ); // HtmlView Page linking property 'Value' for element 'SecondEcho1'
          _view.SecondEcho2.linkProperty("Value",  function() { return SecondEcho2; }, function(_v) { SecondEcho2 = _v; } ); // HtmlView Page linking property 'Value' for element 'SecondEcho2'
          _view.plotButton2.setAction("OnClick", _initialize); // HtmlView Page setting action 'OnClick' for element 'plotButton2'
          _view.resetButton.setAction("OnClick", _reset); // HtmlView Page setting action 'OnClick' for element 'resetButton'
          _view.functionFieldA.linkProperty("Value",  function() { return functionString1; }, function(_v) { functionString1 = _v; } ); // HtmlView Page linking property 'Value' for element 'functionFieldA'
          _view.functionFieldA.setAction("OnChange", ınitPage1); // HtmlView Page setting action 'OnChange' for element 'functionFieldA'
          _view.nField2.linkProperty("Value",  function() { return n; }, function(_v) { n = _v; } ); // HtmlView Page linking property 'Value' for element 'nField2'
          _view.nField2.setAction("OnChange", _initialize); // HtmlView Page setting action 'OnChange' for element 'nField2'
          _view.xminField.linkProperty("Value",  function() { return xmin1; }, function(_v) { xmin1 = _v; } ); // HtmlView Page linking property 'Value' for element 'xminField'
          _view.xminField.setAction("OnChange", _initialize); // HtmlView Page setting action 'OnChange' for element 'xminField'
          _view.xmaxField2.linkProperty("Value",  function() { return xmax1; }, function(_v) { xmax1 = _v; } ); // HtmlView Page linking property 'Value' for element 'xmaxField2'
          _view.xmaxField2.setAction("OnChange", _initialize); // HtmlView Page setting action 'OnChange' for element 'xmaxField2'
          _view.functionFieldB.linkProperty("Value",  function() { return functionString2; }, function(_v) { functionString2 = _v; } ); // HtmlView Page linking property 'Value' for element 'functionFieldB'
          _view.functionFieldB.setAction("OnChange", ınitPage2); // HtmlView Page setting action 'OnChange' for element 'functionFieldB'
          _view.functionFieldB.setAction("OnError", erroramp2); // HtmlView Page setting action 'OnError' for element 'functionFieldB'
          _view.functionFieldC.linkProperty("Value",  function() { return functionString3; }, function(_v) { functionString3 = _v; } ); // HtmlView Page linking property 'Value' for element 'functionFieldC'
          _view.functionFieldC.setAction("OnChange", ınitPage3); // HtmlView Page setting action 'OnChange' for element 'functionFieldC'
          _view.functionFieldC.setAction("OnError", erroramp3); // HtmlView Page setting action 'OnError' for element 'functionFieldC'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(20);
  _model.setStepsPerDisplay(1);
  _selectView(_model._autoSelectView(_getViews())); // this includes _model.reset()
  return _model;
}
function Ultrasound_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = Ultrasound_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function Ultrasound_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"panel", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'panel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"titlepanel", _view.panel) // EJsS HtmlView.HtmlView Page: declaration of element 'titlepanel'
      .setProperty("Height","40px") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'titlepanel'
      .setProperty("Width","100%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'titlepanel'
      .setProperty("CSS",{"display":"block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'titlepanel'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"TitleLabel", _view.titlepanel) // EJsS HtmlView.HtmlView Page: declaration of element 'TitleLabel'
      .setProperty("Height","38px") // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'TitleLabel'
      .setProperty("Text","<h3> Interactions of Ultrasound with Matter</h3>") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'TitleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox", _view.titlepanel) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox'
      .setProperty("Width",90) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'comboBox'
      .setProperty("Foreground","rgba(0,0,200,255)") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'comboBox'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"Drawing_panel", _view.panel) // EJsS HtmlView.HtmlView Page: declaration of element 'Drawing_panel'
      .setProperty("Width","65%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'Drawing_panel'
      .setProperty("CSS",{"display":"inline-block"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'Drawing_panel'
      ;

    _view._addElement(EJSS_DRAWING2D.drawingPanel,"drawingPanel", _view.Drawing_panel) // EJsS HtmlView.HtmlView Page: declaration of element 'drawingPanel'
      .setProperty("Width","900") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'drawingPanel'
      .setProperty("MinimumX",0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'drawingPanel'
      .setProperty("MinimumY",-100) // EJsS HtmlView.HtmlView Page: setting property 'MinimumY' for element 'drawingPanel'
      .setProperty("Background","White") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'drawingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'drawingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'drawingPanel'
      .setProperty("SquareAspect",true) // EJsS HtmlView.HtmlView Page: setting property 'SquareAspect' for element 'drawingPanel'
      .setProperty("MaximumY",100) // EJsS HtmlView.HtmlView Page: setting property 'MaximumY' for element 'drawingPanel'
      .setProperty("MaximumX",200) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'drawingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"ımage3", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ımage3'
      .setProperty("SizeX",450) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ımage3'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'ımage3'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ımage3'
      .setProperty("ImageUrl","./ultrasoundfiles/1.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'ımage3'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ımage3'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"ımage22", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ımage22'
      .setProperty("SizeX",110) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ımage22'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ımage22'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ımage22'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"ımage222", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ımage222'
      .setProperty("X",220) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'ımage222'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ımage222'
      .setProperty("ImageUrl","./ultrasoundfiles/muscle.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'ımage222'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"AnimationIntensity2", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'AnimationIntensity2'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'AnimationIntensity2'
      .setProperty("SizeX",-25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'AnimationIntensity2'
      .setProperty("MarkEndHeight",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndHeight' for element 'AnimationIntensity2'
      .setProperty("LineColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'AnimationIntensity2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'AnimationIntensity2'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'AnimationIntensity2'
      .setProperty("MarkEndWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndWidth' for element 'AnimationIntensity2'
      .setProperty("LineWidth",20) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'AnimationIntensity2'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"ımage4", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'ımage4'
      .setProperty("SizeX",110) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'ımage4'
      .setProperty("ImageUrl","./ultrasoundfiles/liver.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'ımage4'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'ımage4'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'ımage4'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"GEO1", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'GEO1'
      .setProperty("SizeX",360) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'GEO1'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'GEO1'
      .setProperty("Y",50) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'GEO1'
      .setProperty("ImageUrl","./ultrasoundfiles/1.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'GEO1'
      .setProperty("SizeY",100) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'GEO1'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"GEO12", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'GEO12'
      .setProperty("SizeX",360) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'GEO12'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'GEO12'
      .setProperty("Y",-50) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'GEO12'
      .setProperty("ImageUrl","./ultrasoundfiles/2.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'GEO12'
      .setProperty("SizeY",100) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'GEO12'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"zeroSegment", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'zeroSegment'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'zeroSegment'
      .setProperty("LineColor","Black") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'zeroSegment'
      .setProperty("Y",-90) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'zeroSegment'
      .setProperty("SizeY",180) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'zeroSegment'
      .setProperty("LineWidth",1) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'zeroSegment'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"segment", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'segment'
      .setProperty("SizeX",360) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'segment'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'segment'
      .setProperty("X",-80) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'segment'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'segment'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'segment'
      .setProperty("LineWidth",4) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'segment'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"segment22", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'segment22'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'segment22'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'segment22'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'segment22'
      .setProperty("Y",1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'segment22'
      .setProperty("SizeY",95) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'segment22'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"segment222", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'segment222'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'segment222'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'segment222'
      .setProperty("LineColor","DarkGray") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'segment222'
      .setProperty("Y",1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'segment222'
      .setProperty("SizeY",-95) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'segment222'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"red", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'red'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'red'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'red'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'red'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'red'
      .setProperty("Y",1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'red'
      .setProperty("SizeY",90) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'red'
      .setProperty("LineWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'red'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"green", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'green'
      .setProperty("MarkEnd","NONE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'green'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'green'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'green'
      .setProperty("LineColor","rgba(0,128,0,1)") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'green'
      .setProperty("Y",1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'green'
      .setProperty("MarkStart","INVTRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkStart' for element 'green'
      .setProperty("SizeY",90) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'green'
      .setProperty("LineWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'green'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"blue", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'blue'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'blue'
      .setProperty("SizeX",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'blue'
      .setProperty("X",100) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'blue'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'blue'
      .setProperty("Y",1) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'blue'
      .setProperty("SizeY",-90) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'blue'
      .setProperty("LineWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'blue'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"Tissue1Segment", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue1Segment'
      .setProperty("LineColor","rgba(200,220,208,1)") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'Tissue1Segment'
      .setProperty("Y",-100) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Tissue1Segment'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'Tissue1Segment'
      .setProperty("LineWidth",10) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'Tissue1Segment'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"Tissue1Segment2", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue1Segment2'
      .setProperty("LineColor","rgba(200,220,208,1)") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'Tissue1Segment2'
      .setProperty("Y",-100) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Tissue1Segment2'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'Tissue1Segment2'
      .setProperty("LineWidth",10) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'Tissue1Segment2'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"AnimationArrow2", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'AnimationArrow2'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'AnimationArrow2'
      .setProperty("SizeX",-25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'AnimationArrow2'
      .setProperty("MarkEndHeight",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndHeight' for element 'AnimationArrow2'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'AnimationArrow2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'AnimationArrow2'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'AnimationArrow2'
      .setProperty("MarkEndWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndWidth' for element 'AnimationArrow2'
      .setProperty("LineWidth",20) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'AnimationArrow2'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"AnimationArrow", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'AnimationArrow'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'AnimationArrow'
      .setProperty("SizeX",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'AnimationArrow'
      .setProperty("MarkEndHeight",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndHeight' for element 'AnimationArrow'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'AnimationArrow'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'AnimationArrow'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'AnimationArrow'
      .setProperty("MarkEndWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndWidth' for element 'AnimationArrow'
      .setProperty("LineWidth",20) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'AnimationArrow'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"imageRight", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'imageRight'
      .setProperty("SizeX",150) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'imageRight'
      .setProperty("X",238) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'imageRight'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'imageRight'
      .setProperty("ImageUrl","./ultrasoundfiles/1.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'imageRight'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'imageRight'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"imageRight2", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'imageRight2'
      .setProperty("SizeX",70) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'imageRight2'
      .setProperty("X",280) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'imageRight2'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'imageRight2'
      .setProperty("ImageUrl","./ultrasoundfiles/1.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'imageRight2'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'imageRight2'
      ;

    _view._addElement(EJSS_DRAWING2D.segment,"Tissue1Segment22", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue1Segment22'
      .setProperty("LineColor","rgba(200,220,208,1)") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'Tissue1Segment22'
      .setProperty("Y",-100) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Tissue1Segment22'
      .setProperty("SizeY",200) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'Tissue1Segment22'
      .setProperty("LineWidth",10) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'Tissue1Segment22'
      ;

    _view._addElement(EJSS_DRAWING2D.image,"Transducer", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Transducer'
      .setProperty("SizeX",150) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'Transducer'
      .setProperty("ImageUrl","./ultrasoundfiles/transducer1.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'Transducer'
      .setProperty("Y",3) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Transducer'
      .setProperty("SizeY",150) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'Transducer'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"Tissue14", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue14'
      .setProperty("X",-57) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Tissue14'
      .setProperty("Y",7) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Tissue14'
      .setProperty("Text","Tissue1") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tissue14'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"Tissue23", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue23'
      .setProperty("X",-57) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Tissue23'
      .setProperty("Y",-7) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Tissue23'
      .setProperty("Text","Tissue2") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tissue23'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"CriticalAngel", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'CriticalAngel'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'CriticalAngel'
      .setProperty("X",185) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'CriticalAngel'
      .setProperty("Y",-35) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'CriticalAngel'
      .setProperty("Text","Critical angle exceeded.") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'CriticalAngel'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"CriticalAngel2", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'CriticalAngel2'
      .setProperty("X",185) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'CriticalAngel2'
      .setProperty("Y",-45) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'CriticalAngel2'
      .setProperty("Text","The beam totally reflects from the boundary.") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'CriticalAngel2'
      ;

    _view._addElement(EJSS_DRAWING2D.arrow,"AnimationIntensity1", _view.drawingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'AnimationIntensity1'
      .setProperty("MarkEnd","TRIANGLE") // EJsS HtmlView.HtmlView Page: setting property 'MarkEnd' for element 'AnimationIntensity1'
      .setProperty("SizeX",25) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'AnimationIntensity1'
      .setProperty("MarkEndHeight",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndHeight' for element 'AnimationIntensity1'
      .setProperty("LineColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'AnimationIntensity1'
      .setProperty("Y",0) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'AnimationIntensity1'
      .setProperty("SizeY",0) // EJsS HtmlView.HtmlView Page: setting property 'SizeY' for element 'AnimationIntensity1'
      .setProperty("MarkEndWidth",5) // EJsS HtmlView.HtmlView Page: setting property 'MarkEndWidth' for element 'AnimationIntensity1'
      .setProperty("LineWidth",20) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'AnimationIntensity1'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"panelAtte", _view.Drawing_panel) // EJsS HtmlView.HtmlView Page: declaration of element 'panelAtte'
      .setProperty("CSS",{"display":"inline-block", "border-style":"solid",  "border-width":"1px",  "border-color":"gray"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'panelAtte'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPauseButton", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'playPauseButton'
      .setProperty("Tooltip","Play/Pause") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPauseButton'
      .setProperty("ImageOnUrl","./ultrasoundfiles/play.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPauseButton'
      .setProperty("ImageOffUrl","./ultrasoundfiles/pause.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPauseButton'
      ;

    _view._addElement(EJSS_INTERFACE.button,"Reset", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'Reset'
      .setProperty("ImageUrl","./ultrasoundfiles/reset.jpg") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'Reset'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"MHz", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'MHz'
      .setProperty("Text","MHz") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'MHz'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"slider", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'slider'
      .setProperty("Minimum",1) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'slider'
      .setProperty("Maximum",10) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'slider'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'slider'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'slider'
      .setProperty("Step",1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'slider'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Tissue", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue'
      .setProperty("Text","Tissue") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tissue'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox2", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Attenuation", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'Attenuation'
      .setProperty("Text","Attenuation") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Attenuation'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"Coef", _view.panelAtte) // EJsS HtmlView.HtmlView Page: declaration of element 'Coef'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'Coef'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'Coef'
      .setProperty("Step",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'Coef'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"panelintensity", _view.Drawing_panel) // EJsS HtmlView.HtmlView Page: declaration of element 'panelintensity'
      ;

    _view._addElement(EJSS_INTERFACE.twoStateButton,"playPauseButton2", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'playPauseButton2'
      .setProperty("Tooltip","Play/Pause") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'playPauseButton2'
      .setProperty("ImageOnUrl","./ultrasoundfiles/play.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageOnUrl' for element 'playPauseButton2'
      .setProperty("ImageOffUrl","./ultrasoundfiles/pause.png") // EJsS HtmlView.HtmlView Page: setting property 'ImageOffUrl' for element 'playPauseButton2'
      ;

    _view._addElement(EJSS_INTERFACE.button,"Reset2", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'Reset2'
      .setProperty("ImageUrl","./ultrasoundfiles/reset.jpg") // EJsS HtmlView.HtmlView Page: setting property 'ImageUrl' for element 'Reset2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Tissue12", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue12'
      .setProperty("Text","Tissue1") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tissue12'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBoxZ1", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBoxZ1'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"CM1", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'CM1'
      .setProperty("Text","cm:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'CM1'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"CMtissue1", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'CMtissue1'
      .setProperty("Minimum",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'CMtissue1'
      .setProperty("Maximum",1) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'CMtissue1'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'CMtissue1'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'CMtissue1'
      .setProperty("Step",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'CMtissue1'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Tissue22", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue22'
      .setProperty("Text","Tissue2") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tissue22'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBoxZ2", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBoxZ2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"CM2", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'CM2'
      .setProperty("Text","cm:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'CM2'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"CMtissue2", _view.panelintensity) // EJsS HtmlView.HtmlView Page: declaration of element 'CMtissue2'
      .setProperty("Minimum",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'CMtissue2'
      .setProperty("Maximum",1) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'CMtissue2'
      .setProperty("ShowText",true) // EJsS HtmlView.HtmlView Page: setting property 'ShowText' for element 'CMtissue2'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'CMtissue2'
      .setProperty("Step",0.1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'CMtissue2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"panelGEO", _view.Drawing_panel) // EJsS HtmlView.HtmlView Page: declaration of element 'panelGEO'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Tissue13", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue13'
      .setProperty("Text","Tissue1:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Tissue13'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"Tissue1", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue1'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"label", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'label'
      .setProperty("Text","Tissue2:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'label'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"Tissue2", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'Tissue2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"angleLabel", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'angleLabel'
      .setProperty("Background","rgba(64,255,128,1)") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'angleLabel'
      ;

    _view._addElement(EJSS_INTERFACE.slider,"angleSlider", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'angleSlider'
      .setProperty("Width","40%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'angleSlider'
      .setProperty("Minimum",0) // EJsS HtmlView.HtmlView Page: setting property 'Minimum' for element 'angleSlider'
      .setProperty("Maximum",89) // EJsS HtmlView.HtmlView Page: setting property 'Maximum' for element 'angleSlider'
      .setProperty("Step",1) // EJsS HtmlView.HtmlView Page: setting property 'Step' for element 'angleSlider'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"Angel22", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'Angel22'
      .setProperty("Background","rgba(0,192,255,1)") // EJsS HtmlView.HtmlView Page: setting property 'Background' for element 'Angel22'
      .setProperty("Text","Transmitted Angle:") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Angel22'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"Angel2", _view.panelGEO) // EJsS HtmlView.HtmlView Page: declaration of element 'Angel2'
      .setProperty("Width",50) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'Angel2'
      .setProperty("Format","0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'Angel2'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'Angel2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"pePanel", _view.panel) // EJsS HtmlView.HtmlView Page: declaration of element 'pePanel'
      .setProperty("Width","33%") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'pePanel'
      .setProperty("CSS",{"display":"inline-block","vertical-align": "top"}) // EJsS HtmlView.HtmlView Page: setting property 'CSS' for element 'pePanel'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"peTopPanel", _view.pePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'peTopPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.plottingPanel,"pePlottingPanel", _view.peTopPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'pePlottingPanel'
      .setProperty("Height",400) // EJsS HtmlView.HtmlView Page: setting property 'Height' for element 'pePlottingPanel'
      .setProperty("Width",500) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'pePlottingPanel'
      .setProperty("MinimumX",0) // EJsS HtmlView.HtmlView Page: setting property 'MinimumX' for element 'pePlottingPanel'
      .setProperty("TitleY","Ultrasound Intensity in mW/cm2") // EJsS HtmlView.HtmlView Page: setting property 'TitleY' for element 'pePlottingPanel'
      .setProperty("AutoScaleY",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleY' for element 'pePlottingPanel'
      .setProperty("AutoScaleX",false) // EJsS HtmlView.HtmlView Page: setting property 'AutoScaleX' for element 'pePlottingPanel'
      .setProperty("MaximumX",10) // EJsS HtmlView.HtmlView Page: setting property 'MaximumX' for element 'pePlottingPanel'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trail'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"IT2", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'IT2'
      .setProperty("FillColor","Blue") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'IT2'
      .setProperty("SizeX",1.8) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'IT2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'IT2'
      .setProperty("X",7) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'IT2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"IR2", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'IR2'
      .setProperty("FillColor","Green") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'IR2'
      .setProperty("SizeX",1.8) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'IR2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'IR2'
      .setProperty("X",5) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'IR2'
      ;

    _view._addElement(EJSS_DRAWING2D.shape,"Iİ2", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Iİ2'
      .setProperty("FillColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'FillColor' for element 'Iİ2'
      .setProperty("SizeX",1.8) // EJsS HtmlView.HtmlView Page: setting property 'SizeX' for element 'Iİ2'
      .setProperty("ShapeType","RECTANGLE") // EJsS HtmlView.HtmlView Page: setting property 'ShapeType' for element 'Iİ2'
      .setProperty("X",3) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Iİ2'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail1", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trail1'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail1'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail1'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail2", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trail2'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail2'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail2'
      ;

    _view._addElement(EJSS_DRAWING2D.trail,"trail3", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'trail3'
      .setProperty("LineColor","Red") // EJsS HtmlView.HtmlView Page: setting property 'LineColor' for element 'trail3'
      .setProperty("LineWidth",2) // EJsS HtmlView.HtmlView Page: setting property 'LineWidth' for element 'trail3'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"Initial_pulse", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Initial_pulse'
      .setProperty("FontSize",13) // EJsS HtmlView.HtmlView Page: setting property 'FontSize' for element 'Initial_pulse'
      .setProperty("X",1) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Initial_pulse'
      .setProperty("Y",-7) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Initial_pulse'
      .setProperty("Text","Initial pulse") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Initial_pulse'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"First_Echo", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'First_Echo'
      .setProperty("FontSize",13) // EJsS HtmlView.HtmlView Page: setting property 'FontSize' for element 'First_Echo'
      .setProperty("X",4.5) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'First_Echo'
      .setProperty("Y",-7) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'First_Echo'
      .setProperty("Text","First Echo") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'First_Echo'
      ;

    _view._addElement(EJSS_DRAWING2D.text,"Second_Echo", _view.pePlottingPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Second_Echo'
      .setProperty("FontSize",13) // EJsS HtmlView.HtmlView Page: setting property 'FontSize' for element 'Second_Echo'
      .setProperty("X",7.5) // EJsS HtmlView.HtmlView Page: setting property 'X' for element 'Second_Echo'
      .setProperty("Y",-7) // EJsS HtmlView.HtmlView Page: setting property 'Y' for element 'Second_Echo'
      .setProperty("Text","Second Echo") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'Second_Echo'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"peControlPanel", _view.peTopPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'peControlPanel'
      .setProperty("Visibility",true) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'peControlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.button,"plotButton", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plotButton'
      .setProperty("Tooltip","Initialize") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'plotButton'
      .setProperty("Text","Plot") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'plotButton'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"fxLabel", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'fxLabel'
      .setProperty("TextAlign","right") // EJsS HtmlView.HtmlView Page: setting property 'TextAlign' for element 'fxLabel'
      .setProperty("Text"," f(x)=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'fxLabel'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'fxLabel'
      ;

    _view._addElement(EJSS_INTERFACE.functionField,"functionField", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'functionField'
      .setProperty("Width",200) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'functionField'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'functionField'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"nField", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'nField'
      .setProperty("Width","50px") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'nField'
      .setProperty("Format","0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'nField'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'nField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"xmaxLabel", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xmaxLabel'
      .setProperty("Text","cm = ") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'xmaxLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"xmaxField", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xmaxField'
      .setProperty("Width",50) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'xmaxField'
      .setProperty("Format","0.000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'xmaxField'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"Ii", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Ii'
      .setProperty("Width",65) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'Ii'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'Ii'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'Ii'
      .setProperty("Foreground","Red") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'Ii'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"Ir", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'Ir'
      .setProperty("Width",65) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'Ir'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'Ir'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'Ir'
      .setProperty("Foreground","rgba(0,128,0,1)") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'Ir'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"It", _view.peControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'It'
      .setProperty("Width",65) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'It'
      .setProperty("Format","0.0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'It'
      .setProperty("Editable",false) // EJsS HtmlView.HtmlView Page: setting property 'Editable' for element 'It'
      .setProperty("Foreground","Blue") // EJsS HtmlView.HtmlView Page: setting property 'Foreground' for element 'It'
      ;

    _view._addElement(EJSS_INTERFACE.comboBox,"comboBox3", _view.peTopPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'comboBox3'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"IntensityValues", _view.pePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'IntensityValues'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'IntensityValues'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"FirstEcho", _view.IntensityValues) // EJsS HtmlView.HtmlView Page: declaration of element 'FirstEcho'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"SecondEcho1", _view.IntensityValues) // EJsS HtmlView.HtmlView Page: declaration of element 'SecondEcho1'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"SecondEcho2", _view.IntensityValues) // EJsS HtmlView.HtmlView Page: declaration of element 'SecondEcho2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"AmpControlPanel", _view.pePanel) // EJsS HtmlView.HtmlView Page: declaration of element 'AmpControlPanel'
      .setProperty("Visibility",false) // EJsS HtmlView.HtmlView Page: setting property 'Visibility' for element 'AmpControlPanel'
      ;

    _view._addElement(EJSS_INTERFACE.button,"plotButton2", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'plotButton2'
      .setProperty("Tooltip","Initialize") // EJsS HtmlView.HtmlView Page: setting property 'Tooltip' for element 'plotButton2'
      .setProperty("Text","Plot") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'plotButton2'
      ;

    _view._addElement(EJSS_INTERFACE.button,"resetButton", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'resetButton'
      .setProperty("Text","Reset") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'resetButton'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"fxLabel2", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'fxLabel2'
      .setProperty("TextAlign","right") // EJsS HtmlView.HtmlView Page: setting property 'TextAlign' for element 'fxLabel2'
      .setProperty("Text"," f(x)=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'fxLabel2'
      ;

    _view._addElement(EJSS_INTERFACE.functionField,"functionFieldA", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'functionFieldA'
      .setProperty("Width",200) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'functionFieldA'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"nLabel", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'nLabel'
      .setProperty("Text"," n=") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'nLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"nField2", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'nField2'
      .setProperty("Width","50px") // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'nField2'
      .setProperty("Format","0") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'nField2'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"xminLabel", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xminLabel'
      .setProperty("Text","xmin =") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'xminLabel'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"xminField", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xminField'
      .setProperty("Width",50) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'xminField'
      .setProperty("Format","0.000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'xminField'
      ;

    _view._addElement(EJSS_INTERFACE.imageAndTextButton,"xmaxLabel2", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xmaxLabel2'
      .setProperty("Text","xmax = ") // EJsS HtmlView.HtmlView Page: setting property 'Text' for element 'xmaxLabel2'
      ;

    _view._addElement(EJSS_INTERFACE.numberField,"xmaxField2", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'xmaxField2'
      .setProperty("Width",50) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'xmaxField2'
      .setProperty("Format","0.000") // EJsS HtmlView.HtmlView Page: setting property 'Format' for element 'xmaxField2'
      ;

    _view._addElement(EJSS_INTERFACE.functionField,"functionFieldB", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'functionFieldB'
      .setProperty("Width",200) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'functionFieldB'
      ;

    _view._addElement(EJSS_INTERFACE.functionField,"functionFieldC", _view.AmpControlPanel) // EJsS HtmlView.HtmlView Page: declaration of element 'functionFieldC'
      .setProperty("Width",200) // EJsS HtmlView.HtmlView Page: setting property 'Width' for element 'functionFieldC'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new Ultrasound("_topFrame","_ejs_library/",null);
          if (typeof _isApp !== "undefined" && _isApp) _model.setRunAlways(true);
          TextResizeDetector.TARGET_ELEMENT_ID = '_topFrame';
          TextResizeDetector.USER_INIT_FUNC = function () {
            var iBase = TextResizeDetector.addEventListener(function(e,args) {
              _model._fontResized(args[0].iBase,args[0].iSize,args[0].iDelta);
              },null);
            _model._fontResized(iBase);
          };
          _model.onload();
        }, false);
