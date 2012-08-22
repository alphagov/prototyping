for(var i = 0; i < 70; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u27'] = 'top';
$axure.eventManager.focus('u29', function(e) {

if (true) {

	SetPanelVisibility('u30','hidden','none',500);

}
});

$axure.eventManager.blur('u29', function(e) {

if ((GetWidgetText('u29')) == ('')) {

	SetPanelVisibility('u30','','none',500);

}
});
gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u63'] = 'top';
$axure.eventManager.focus('u65', function(e) {

if (true) {

	SetPanelVisibility('u66','hidden','none',500);

}
});

$axure.eventManager.blur('u65', function(e) {

if ((GetWidgetText('u65')) == ('')) {

	SetPanelVisibility('u66','','none',500);

}
});
u67.tabIndex = 0;

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	SetPanelVisibility('u66','hidden','none',500);

	var obj1 = document.getElementById("u65");
    obj1.focus();

}
});
gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u68'] = 'top';
$axure.eventManager.change('u69', function(e) {

if ((GetSelectedOption('u69')) == ('Other...')) {

	SetPanelState('u64', 'pd1u64','none','',500,'none','',500);

}
else
if ((GetSelectedOption('u69')) != ('Other...')) {

	SetPanelState('u64', 'pd0u64','none','',500,'none','',500);

}
});
u31.tabIndex = 0;

u31.style.cursor = 'pointer';
$axure.eventManager.click('u31', function(e) {

if (true) {

	SetPanelVisibility('u30','hidden','none',500);

	var obj1 = document.getElementById("u29");
    obj1.focus();

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u34'] = 'top';
$axure.eventManager.change('u37', function(e) {

if ((GetSelectedOption('u37')) == ('Other...')) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

}
else
if ((GetSelectedOption('u37')) != ('Other...')) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

}
});
gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'top';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Rationale.html');

}
});
gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u46'] = 'top';
u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Patterns.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u18'] = 'center';