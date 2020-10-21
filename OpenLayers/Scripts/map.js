
var key =
    'Your Mapbox access token from https://mapbox.com/ here';
var vector = new ol.layer.Heatmap({
    // 資料來源
    source: new ol.source.Vector({
        // 網址
        url: 'https://openlayers.org/en/v4.6.5/examples/data/kml/2012_Earthquakes_Mag5.kml',
        // 資料格式
        format: new ol.format.KML({
            extractStyles: false
        })
    }),
    // 模糊度
    blur: 10,
    // 半徑
    radius: 10
});

var map = new ol.Map({
    controls: ol.control.defaults().extend([
        new ol.control.FullScreen(),
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.getElementById('mouse-position')
        }),
        new ol.control.OverviewMap({}),
        new ol.control.Rotate({
            autoHide: false
        }),
        new ol.control.ScaleLine({}),
        new ol.control.ZoomSlider({}),
        new ol.control.ZoomToExtent({})
    ]),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }), vector],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([37.4057, 8.81566]),
        zoom: 4,
    }),
});

//function bindInputs(layerid, layer) {
//    var visibilityInput = $(layerid + ' input.visible');
//    visibilityInput.on('change', function () {
//        layer.setVisible(this.checked);
//    });
//    visibilityInput.prop('checked', layer.getVisible());

//    var opacityInput = $(layerid + ' input.opacity');
//    opacityInput.on('input change', function () {
//        layer.setOpacity(parseFloat(this.value));
//    });
//    opacityInput.val(String(layer.getOpacity()));
//}
//map.getLayers().forEach(function (layer, i) {
//    bindInputs('#layer' + i, layer);
//    if (layer instanceof ol.layer.Group) {
//        layer.getLayers().forEach(function (sublayer, j) {
//            bindInputs('#layer' + i + j, sublayer);
//        });
//    }
//});

//$('#layertree li > span')
//    .click(function () {
//        $(this).siblings('fieldset').toggle();
//    })
//    .siblings('fieldset')
//    .hide();


