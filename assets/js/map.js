//Import base maps
let osm = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

var BING_MAPS_KEY = "AhED8KH6g3F7xqt1Mg7XioFyYKEbQQgg0y2unrezvUNlKxo0GawtVP9QB1rgruFw";
var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});
var bingAerial = new ol.layer.Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    })
});
var colombiaDepartments = new ol.layer.Image({
    title: 'Colombia adm1',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_adm1' }
    }),
    opacity: 0.5
});

var stamenWatercolor = new ol.layer.Tile({
    title: 'Stamen Watercolor',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});

//Import administrative borders
var area = new ol.layer.Image({
    title: 'Study area',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:group_9_area' }
    }),
    visible: true
});

var com = new ol.layer.Image({
    title: 'Municipal boundaries',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:com' }
    }),
    visible: false
});

var prov = new ol.layer.Image({
    title: 'Provincial boundaries',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:prov' }
    }),
    visible: false
});

//Import environmental factors layers
var dtm = new ol.layer.Image({
    title: 'DTM',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:dtm' }
    }),
    visible: false
});

var ndvi = new ol.layer.Image({
    title: 'NDVI',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:ndvi' }
    }),
    visible: false
});

var dusaf = new ol.layer.Image({
    title: 'DUSAF',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:dusaf' }
    }),
    visible: false
});

var roads = new ol.layer.Image({
    title: 'Distance from roads',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:roads' }
    }),
    visible: false
});

var rivers = new ol.layer.Image({
    title: 'Distance from rivers',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:rivers' }
    }),
    visible: false
});

var faults = new ol.layer.Image({
    title: 'Distance from faults',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:faults' }
    }),
    visible: false
});

var slope = new ol.layer.Image({
    title: 'Terrain slope',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:slope' }
    }),
    visible: false
});

var aspect = new ol.layer.Image({
    title: 'Terrain aspect',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:aspect' }
    }),
    visible: false
});

var plan = new ol.layer.Image({
    title: 'Terrain plan curvature',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:plan' }
    }),
    visible: false
});

var profile = new ol.layer.Image({
    title: 'Terrain profile curvature',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:profile' }
    }),
    visible: false
});

//Import Hazard layers
var nlz = new ol.layer.Image({
    title: 'No landslide zone',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:NLZ' }
    }),
    visible: false
});

var ls = new ol.layer.Image({
    title: 'Previously detected landslides',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:LS' }
    }),
    visible: false
});

//Import points
var test_1k = new ol.layer.Image({
    title: 'Testing points 1,000 version',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:test_1k' }
    }),
    visible: false
});

var train_1k = new ol.layer.Image({
    title: 'Training points 1,000 version',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:train_1k' }
    }),
    visible: false
});

var test_2k = new ol.layer.Image({
    title: 'Testing points 2,000 version',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:test_2k' }
    }),
    visible: false
});

var train_2k = new ol.layer.Image({
    title: 'Training points 2,000 version',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:train_2k' }
    }),
    visible: false
});

//Import Susceptibility Maps
var supt_map_1k = new ol.layer.Image({
    title: 'Susceptibility Map with 1,000 points',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:Susceptibility_Map_1k_points' }
    }),
    visible: false
});

var supt_map_2k = new ol.layer.Image({
    title: 'Susceptibility Map with 2,000 points',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:Susceptibility_Map_2k_points' }
    }),
    visible: true
});

var supt_map_1k_reclass = new ol.layer.Image({
    title: 'Susceptibility Map with 1,000 points reclassified',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:Susceptibility_Map_1k_points_reclass' }
    }),
    visible: false
});

var supt_map_2k_reclass = new ol.layer.Image({
    title: 'Susceptibility Map with 2,000 points reclassified',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:Susceptibility_Map_2k_points_reclass' }
    }),
    visible: false
});

//Import Exposure assessment Maps
var supt_map_1k_pop = new ol.layer.Image({
    title: 'Susceptibility Map with 1,000 points resampled',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:Susceptibility_Map_1k_points_pop' }
    }),
    visible: false
});

var supt_map_2k_pop = new ol.layer.Image({
    title: 'Susceptibility Map with 2,000 points resampled',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:Susceptibility_Map_2k_points_pop' }
    }),
    visible: false
});

var pop = new ol.layer.Image({
    title: 'Population density',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:pop' }
    }),
    visible: false
});

var build = new ol.layer.Image({
    title: 'Buildings by level of hazard',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:buildings_stat_2k' }
    }),
    visible: false
});

var ispra = new ol.layer.Image({
    title: 'Landslide hazard from ISPRA',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_09:frana' }
    }),
    visible: false
});

//Add the layers to layer groups

let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm, bingRoads, bingAerial, stamenToner, stamenWatercolor]
})
let adminLayers = new ol.layer.Group({
    title: "Administrative boundaries",
    layers: [prov, com, area]
})
let factorsLayers = new ol.layer.Group({
    title: "Environmental Factors",
    layers: [dtm, ndvi, dusaf, roads, rivers, faults, slope, aspect, plan, profile]
})

let hazardLayers = new ol.layer.Group({
    title: "Hazard setting areas",
    layers: [nlz, ls]
})

let pointsLayers = new ol.layer.Group({
    title: "Training and testing points",
    layers: [test_1k, train_1k, test_2k, train_2k]
})

let suptLayers = new ol.layer.Group({
    title: "Landslide Susceptibility Maps",
    layers: [supt_map_1k, supt_map_2k, supt_map_1k_reclass, supt_map_2k_reclass]
})

let expLayers = new ol.layer.Group({
    title: "Exposure assessment Maps",
    layers: [supt_map_1k_pop, supt_map_2k_pop, pop, ispra, build ]
})

//Add the map
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, factorsLayers, hazardLayers, suptLayers, pointsLayers, expLayers, adminLayers],
    view: new ol.View({
        center: ol.proj.fromLonLat([10.1354, 46.1061]),
        zoom: 12
    }),
});

// Add the map controls:
map.addControl(new ol.control.ScaleLine()); //Controls can be added using the addControl() map function
map.addControl(new ol.control.FullScreen());
map.addControl(new ol.control.OverviewMap());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0, 0'
    })
);

//Add the layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher({
});
map.addControl(layerSwitcher);

//Add the code for the Pop-up
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container
});
map.addOverlay(popup);

//This is the event listener for the map. It fires when a single click is made on the map.
map.on('singleclick', function (event) {
    //This iterates over all the features that are located on the pixel of the click (can be many)
    var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
        return feature;
    });

    //If there is a feature, open the popup by setting a position to it and put the data from the feature
    if (feature != null) {
        var pixel = event.pixel;
        var coord = map.getCoordinateFromPixel(pixel);
        popup.setPosition(coord);
        content.innerHTML =
            '<h5>Colombia Water Areas</h5><br><b>Name: </b>' +
            feature.get('NAME') +
            '</br><b>Description: </b>' +
            feature.get('HYC_DESCRI');
    } else {
        //Only if the test_1k layer is visible, do the GetFeatureInfo request
        if (dusaf.getVisible()) {
            var viewResolution = (map.getView().getResolution());
            var url = dusaf.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:32632', { 'INFO_FORMAT': 'text/html' });
            console.log(url)
            
            if (url) {
                var pixel = event.pixel;
                var coord = map.getCoordinateFromPixel(pixel);
                popup.setPosition(coord);
                //We do again the AJAX request to get the data from the GetFeatureInfo request
                $.ajax({ url: url })
                    .done((data) => {
                        console.log(data);
                        //Put the data of the GetFeatureInfo response inside the pop-up
                        //The data that arrives is in HTML
                        content.innerHTML = data;
                    });
            }
        }
    }

});
//This closes the pop-up when the X button is clicked
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};


// Adding map event for pointermove
map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});

