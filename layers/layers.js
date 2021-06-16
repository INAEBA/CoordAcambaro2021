var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionAcambaro_3 = new ol.format.GeoJSON();
var features_CoordinacionAcambaro_3 = format_CoordinacionAcambaro_3.readFeatures(json_CoordinacionAcambaro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAcambaro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAcambaro_3.addFeatures(features_CoordinacionAcambaro_3);
var lyr_CoordinacionAcambaro_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAcambaro_3, 
                style: style_CoordinacionAcambaro_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionAcambaro_3.png" /> Coordinacion Acambaro'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionJER2_5 = new ol.format.GeoJSON();
var features_MicroregionJER2_5 = format_MicroregionJER2_5.readFeatures(json_MicroregionJER2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionJER2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionJER2_5.addFeatures(features_MicroregionJER2_5);
var lyr_MicroregionJER2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionJER2_5, 
                style: style_MicroregionJER2_5,
                interactive: false,
    title: 'Microregion JER2<br />\
    <img src="styles/legend/MicroregionJER2_5_0.png" /> 0 - 23 Personas<br />\
    <img src="styles/legend/MicroregionJER2_5_1.png" /> 23 - 70 Personas<br />\
    <img src="styles/legend/MicroregionJER2_5_2.png" /> 70 - 128 Personas<br />\
    <img src="styles/legend/MicroregionJER2_5_3.png" /> 128 - 315 Personas<br />\
    <img src="styles/legend/MicroregionJER2_5_4.png" /> 315 - 568 Personas<br />'
        });
var format_MicroregionJER1_6 = new ol.format.GeoJSON();
var features_MicroregionJER1_6 = format_MicroregionJER1_6.readFeatures(json_MicroregionJER1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionJER1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionJER1_6.addFeatures(features_MicroregionJER1_6);
var lyr_MicroregionJER1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionJER1_6, 
                style: style_MicroregionJER1_6,
                interactive: false,
    title: 'Microregion JER1<br />\
    <img src="styles/legend/MicroregionJER1_6_0.png" /> 0 - 26 Personas<br />\
    <img src="styles/legend/MicroregionJER1_6_1.png" /> 26 - 93 Personas<br />\
    <img src="styles/legend/MicroregionJER1_6_2.png" /> 93 - 186 Personas<br />\
    <img src="styles/legend/MicroregionJER1_6_3.png" /> 186 - 376 Personas<br />\
    <img src="styles/legend/MicroregionJER1_6_4.png" /> 376 - 564 Personas<br />'
        });
var format_MicroregionACA4_7 = new ol.format.GeoJSON();
var features_MicroregionACA4_7 = format_MicroregionACA4_7.readFeatures(json_MicroregionACA4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionACA4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionACA4_7.addFeatures(features_MicroregionACA4_7);
var lyr_MicroregionACA4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionACA4_7, 
                style: style_MicroregionACA4_7,
                interactive: false,
    title: 'Microregion ACA4<br />\
    <img src="styles/legend/MicroregionACA4_7_0.png" /> 0 - 23 Personas<br />\
    <img src="styles/legend/MicroregionACA4_7_1.png" /> 23 - 79 Personas<br />\
    <img src="styles/legend/MicroregionACA4_7_2.png" /> 79 - 197 Personas<br />\
    <img src="styles/legend/MicroregionACA4_7_3.png" /> 197 - 327 Personas<br />\
    <img src="styles/legend/MicroregionACA4_7_4.png" /> 327 - 470 Personas<br />'
        });
var format_MicroregionACA3_8 = new ol.format.GeoJSON();
var features_MicroregionACA3_8 = format_MicroregionACA3_8.readFeatures(json_MicroregionACA3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionACA3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionACA3_8.addFeatures(features_MicroregionACA3_8);
var lyr_MicroregionACA3_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionACA3_8, 
                style: style_MicroregionACA3_8,
                interactive: false,
    title: 'Microregion ACA3<br />\
    <img src="styles/legend/MicroregionACA3_8_0.png" /> 0 - 18 Personas<br />\
    <img src="styles/legend/MicroregionACA3_8_1.png" /> 18 - 61 Personas<br />\
    <img src="styles/legend/MicroregionACA3_8_2.png" /> 61 - 133 Personas<br />\
    <img src="styles/legend/MicroregionACA3_8_3.png" /> 133 - 248 Personas<br />\
    <img src="styles/legend/MicroregionACA3_8_4.png" /> 248 - 407 Personas<br />'
        });
var format_MicreoregionACA2_9 = new ol.format.GeoJSON();
var features_MicreoregionACA2_9 = format_MicreoregionACA2_9.readFeatures(json_MicreoregionACA2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicreoregionACA2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicreoregionACA2_9.addFeatures(features_MicreoregionACA2_9);
var lyr_MicreoregionACA2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicreoregionACA2_9, 
                style: style_MicreoregionACA2_9,
                interactive: false,
    title: 'Micreoregion ACA2<br />\
    <img src="styles/legend/MicreoregionACA2_9_0.png" /> 0 - 18 Personas<br />\
    <img src="styles/legend/MicreoregionACA2_9_1.png" /> 18 - 66 Personas<br />\
    <img src="styles/legend/MicreoregionACA2_9_2.png" /> 66 - 143 Personas<br />\
    <img src="styles/legend/MicreoregionACA2_9_3.png" /> 143 - 252 Personas<br />\
    <img src="styles/legend/MicreoregionACA2_9_4.png" /> 252 - 524 Personas<br />'
        });
var format_MicroregionACA1_10 = new ol.format.GeoJSON();
var features_MicroregionACA1_10 = format_MicroregionACA1_10.readFeatures(json_MicroregionACA1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionACA1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionACA1_10.addFeatures(features_MicroregionACA1_10);
var lyr_MicroregionACA1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionACA1_10, 
                style: style_MicroregionACA1_10,
                interactive: false,
    title: 'Microregion ACA1<br />\
    <img src="styles/legend/MicroregionACA1_10_0.png" /> 0 - 4 Personas<br />\
    <img src="styles/legend/MicroregionACA1_10_1.png" /> 4 - 15 Personas<br />\
    <img src="styles/legend/MicroregionACA1_10_2.png" /> 15 - 29 Personas<br />\
    <img src="styles/legend/MicroregionACA1_10_3.png" /> 29 - 47 Personas<br />\
    <img src="styles/legend/MicroregionACA1_10_4.png" /> 47 - 87 Personas<br />'
        });
var format_CoordinacionAcambaro_11 = new ol.format.GeoJSON();
var features_CoordinacionAcambaro_11 = format_CoordinacionAcambaro_11.readFeatures(json_CoordinacionAcambaro_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAcambaro_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAcambaro_11.addFeatures(features_CoordinacionAcambaro_11);
var lyr_CoordinacionAcambaro_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAcambaro_11, 
                style: style_CoordinacionAcambaro_11,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionAcambaro_11.png" /> Coordinacion Acambaro'
            });
var group_CoordinacionAcambaroRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionJER2_5,lyr_MicroregionJER1_6,lyr_MicroregionACA4_7,lyr_MicroregionACA3_8,lyr_MicreoregionACA2_9,lyr_MicroregionACA1_10,],
                                title: "Coordinacion Acambaro Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionAcambaro_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionAcambaro_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionJER2_5.setVisible(true);lyr_MicroregionJER1_6.setVisible(true);lyr_MicroregionACA4_7.setVisible(true);lyr_MicroregionACA3_8.setVisible(true);lyr_MicreoregionACA2_9.setVisible(true);lyr_MicroregionACA1_10.setVisible(true);lyr_CoordinacionAcambaro_11.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionAcambaroRezago,lyr_CoordinacionAcambaro_11];
lyr_CoordinacionAcambaro_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionJER2_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionJER1_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionACA4_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionACA3_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicreoregionACA2_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionACA1_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionAcambaro_11.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionAcambaro_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionJER2_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionJER1_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionACA4_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionACA3_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicreoregionACA2_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionACA1_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionAcambaro_11.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionAcambaro_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionJER2_5.set('fieldLabels', {});
lyr_MicroregionJER1_6.set('fieldLabels', {});
lyr_MicroregionACA4_7.set('fieldLabels', {});
lyr_MicroregionACA3_8.set('fieldLabels', {});
lyr_MicreoregionACA2_9.set('fieldLabels', {});
lyr_MicroregionACA1_10.set('fieldLabels', {});
lyr_CoordinacionAcambaro_11.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionAcambaro_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});