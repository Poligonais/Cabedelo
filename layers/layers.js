var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoXXIIIEspaosAquticosAdjacentes_1 = new ol.format.GeoJSON();
var features_AnexoXXIIIEspaosAquticosAdjacentes_1 = format_AnexoXXIIIEspaosAquticosAdjacentes_1.readFeatures(json_AnexoXXIIIEspaosAquticosAdjacentes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXIIIEspaosAquticosAdjacentes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXIIIEspaosAquticosAdjacentes_1.addFeatures(features_AnexoXXIIIEspaosAquticosAdjacentes_1);
var lyr_AnexoXXIIIEspaosAquticosAdjacentes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXIIIEspaosAquticosAdjacentes_1, 
                style: style_AnexoXXIIIEspaosAquticosAdjacentes_1,
                popuplayertitle: "Anexo XXIII - Espaços Aquáticos Adjacentes",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXIIIEspaosAquticosAdjacentes_1.png" /> Anexo XXIII - Espaços Aquáticos Adjacentes'
            });
var format_AnexoXXIIEsperadosPrticos_2 = new ol.format.GeoJSON();
var features_AnexoXXIIEsperadosPrticos_2 = format_AnexoXXIIEsperadosPrticos_2.readFeatures(json_AnexoXXIIEsperadosPrticos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXIIEsperadosPrticos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXIIEsperadosPrticos_2.addFeatures(features_AnexoXXIIEsperadosPrticos_2);
var lyr_AnexoXXIIEsperadosPrticos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXIIEsperadosPrticos_2, 
                style: style_AnexoXXIIEsperadosPrticos_2,
                popuplayertitle: "Anexo XXII - Espera dos Práticos",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXIIEsperadosPrticos_2.png" /> Anexo XXII - Espera dos Práticos'
            });
var format_AnexoXXIreadeFundeio2_3 = new ol.format.GeoJSON();
var features_AnexoXXIreadeFundeio2_3 = format_AnexoXXIreadeFundeio2_3.readFeatures(json_AnexoXXIreadeFundeio2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXIreadeFundeio2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXIreadeFundeio2_3.addFeatures(features_AnexoXXIreadeFundeio2_3);
var lyr_AnexoXXIreadeFundeio2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXIreadeFundeio2_3, 
                style: style_AnexoXXIreadeFundeio2_3,
                popuplayertitle: "Anexo XXI - Área de Fundeio 2",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXIreadeFundeio2_3.png" /> Anexo XXI - Área de Fundeio 2'
            });
var format_AnexoXXreadefundeio1_4 = new ol.format.GeoJSON();
var features_AnexoXXreadefundeio1_4 = format_AnexoXXreadefundeio1_4.readFeatures(json_AnexoXXreadefundeio1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXXreadefundeio1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXXreadefundeio1_4.addFeatures(features_AnexoXXreadefundeio1_4);
var lyr_AnexoXXreadefundeio1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXXreadefundeio1_4, 
                style: style_AnexoXXreadefundeio1_4,
                popuplayertitle: "Anexo XX - Área de fundeio 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoXXreadefundeio1_4.png" /> Anexo XX - Área de fundeio 1'
            });
var format_AnexoXVIIIBaciadeEvoluoTrecho3_5 = new ol.format.GeoJSON();
var features_AnexoXVIIIBaciadeEvoluoTrecho3_5 = format_AnexoXVIIIBaciadeEvoluoTrecho3_5.readFeatures(json_AnexoXVIIIBaciadeEvoluoTrecho3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIIIBaciadeEvoluoTrecho3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIIIBaciadeEvoluoTrecho3_5.addFeatures(features_AnexoXVIIIBaciadeEvoluoTrecho3_5);
var lyr_AnexoXVIIIBaciadeEvoluoTrecho3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIIIBaciadeEvoluoTrecho3_5, 
                style: style_AnexoXVIIIBaciadeEvoluoTrecho3_5,
                popuplayertitle: "Anexo XVIII - Bacia de Evolução (Trecho 3)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIIIBaciadeEvoluoTrecho3_5.png" /> Anexo XVIII - Bacia de Evolução (Trecho 3)'
            });
var format_AnexoXVIIBaciadeEvoluoTrecho2_6 = new ol.format.GeoJSON();
var features_AnexoXVIIBaciadeEvoluoTrecho2_6 = format_AnexoXVIIBaciadeEvoluoTrecho2_6.readFeatures(json_AnexoXVIIBaciadeEvoluoTrecho2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIIBaciadeEvoluoTrecho2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIIBaciadeEvoluoTrecho2_6.addFeatures(features_AnexoXVIIBaciadeEvoluoTrecho2_6);
var lyr_AnexoXVIIBaciadeEvoluoTrecho2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIIBaciadeEvoluoTrecho2_6, 
                style: style_AnexoXVIIBaciadeEvoluoTrecho2_6,
                popuplayertitle: "Anexo XVII - Bacia de Evolução (Trecho 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIIBaciadeEvoluoTrecho2_6.png" /> Anexo XVII - Bacia de Evolução (Trecho 2)'
            });
var format_AnexoXVIBaciadeEvoluoTrecho1_7 = new ol.format.GeoJSON();
var features_AnexoXVIBaciadeEvoluoTrecho1_7 = format_AnexoXVIBaciadeEvoluoTrecho1_7.readFeatures(json_AnexoXVIBaciadeEvoluoTrecho1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVIBaciadeEvoluoTrecho1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVIBaciadeEvoluoTrecho1_7.addFeatures(features_AnexoXVIBaciadeEvoluoTrecho1_7);
var lyr_AnexoXVIBaciadeEvoluoTrecho1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVIBaciadeEvoluoTrecho1_7, 
                style: style_AnexoXVIBaciadeEvoluoTrecho1_7,
                popuplayertitle: "Anexo XVI - Bacia de Evolução (Trecho 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVIBaciadeEvoluoTrecho1_7.png" /> Anexo XVI - Bacia de Evolução (Trecho 1)'
            });
var format_AnexoXVCanaldeAcessoInternoTrecho3_8 = new ol.format.GeoJSON();
var features_AnexoXVCanaldeAcessoInternoTrecho3_8 = format_AnexoXVCanaldeAcessoInternoTrecho3_8.readFeatures(json_AnexoXVCanaldeAcessoInternoTrecho3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXVCanaldeAcessoInternoTrecho3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXVCanaldeAcessoInternoTrecho3_8.addFeatures(features_AnexoXVCanaldeAcessoInternoTrecho3_8);
var lyr_AnexoXVCanaldeAcessoInternoTrecho3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXVCanaldeAcessoInternoTrecho3_8, 
                style: style_AnexoXVCanaldeAcessoInternoTrecho3_8,
                popuplayertitle: "Anexo XV - Canal de Acesso Interno (Trecho 3)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXVCanaldeAcessoInternoTrecho3_8.png" /> Anexo XV - Canal de Acesso Interno (Trecho 3)'
            });
var format_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9 = new ol.format.GeoJSON();
var features_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9 = format_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.readFeatures(json_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.addFeatures(features_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9);
var lyr_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9, 
                style: style_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9,
                popuplayertitle: "Anexo XIX - Canal de Acesso Interno e Bacia de Evolução (Trecho 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.png" /> Anexo XIX - Canal de Acesso Interno e Bacia de Evolução (Trecho 1)'
            });
var format_AnexoXIIICanaldeAcessoInternoTrecho1_10 = new ol.format.GeoJSON();
var features_AnexoXIIICanaldeAcessoInternoTrecho1_10 = format_AnexoXIIICanaldeAcessoInternoTrecho1_10.readFeatures(json_AnexoXIIICanaldeAcessoInternoTrecho1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIIICanaldeAcessoInternoTrecho1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIIICanaldeAcessoInternoTrecho1_10.addFeatures(features_AnexoXIIICanaldeAcessoInternoTrecho1_10);
var lyr_AnexoXIIICanaldeAcessoInternoTrecho1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIIICanaldeAcessoInternoTrecho1_10, 
                style: style_AnexoXIIICanaldeAcessoInternoTrecho1_10,
                popuplayertitle: "Anexo XIII- Canal de Acesso Interno (Trecho 1)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIIICanaldeAcessoInternoTrecho1_10.png" /> Anexo XIII- Canal de Acesso Interno (Trecho 1)'
            });
var format_AnexoXIVCanaldeAcessoInternoTrecho2_11 = new ol.format.GeoJSON();
var features_AnexoXIVCanaldeAcessoInternoTrecho2_11 = format_AnexoXIVCanaldeAcessoInternoTrecho2_11.readFeatures(json_AnexoXIVCanaldeAcessoInternoTrecho2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIVCanaldeAcessoInternoTrecho2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIVCanaldeAcessoInternoTrecho2_11.addFeatures(features_AnexoXIVCanaldeAcessoInternoTrecho2_11);
var lyr_AnexoXIVCanaldeAcessoInternoTrecho2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIVCanaldeAcessoInternoTrecho2_11, 
                style: style_AnexoXIVCanaldeAcessoInternoTrecho2_11,
                popuplayertitle: "Anexo XIV - Canal de Acesso Interno (Trecho 2)",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIVCanaldeAcessoInternoTrecho2_11.png" /> Anexo XIV - Canal de Acesso Interno (Trecho 2)'
            });
var format_AnexoXIICanaldeAcessoExterno_12 = new ol.format.GeoJSON();
var features_AnexoXIICanaldeAcessoExterno_12 = format_AnexoXIICanaldeAcessoExterno_12.readFeatures(json_AnexoXIICanaldeAcessoExterno_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIICanaldeAcessoExterno_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIICanaldeAcessoExterno_12.addFeatures(features_AnexoXIICanaldeAcessoExterno_12);
var lyr_AnexoXIICanaldeAcessoExterno_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIICanaldeAcessoExterno_12, 
                style: style_AnexoXIICanaldeAcessoExterno_12,
                popuplayertitle: "Anexo XII - Canal de Acesso Externo",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIICanaldeAcessoExterno_12.png" /> Anexo XII - Canal de Acesso Externo'
            });
var format_AnexoXIRIPSIAPAn1965010041238_13 = new ol.format.GeoJSON();
var features_AnexoXIRIPSIAPAn1965010041238_13 = format_AnexoXIRIPSIAPAn1965010041238_13.readFeatures(json_AnexoXIRIPSIAPAn1965010041238_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXIRIPSIAPAn1965010041238_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXIRIPSIAPAn1965010041238_13.addFeatures(features_AnexoXIRIPSIAPAn1965010041238_13);
var lyr_AnexoXIRIPSIAPAn1965010041238_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXIRIPSIAPAn1965010041238_13, 
                style: style_AnexoXIRIPSIAPAn1965010041238_13,
                popuplayertitle: "Anexo XI - RIP SIAPA n.º 1965.0100412-38 ",
                interactive: true,
                title: '<img src="styles/legend/AnexoXIRIPSIAPAn1965010041238_13.png" /> Anexo XI - RIP SIAPA n.º 1965.0100412-38 '
            });
var format_AnexoXAI1AI6_14 = new ol.format.GeoJSON();
var features_AnexoXAI1AI6_14 = format_AnexoXAI1AI6_14.readFeatures(json_AnexoXAI1AI6_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoXAI1AI6_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoXAI1AI6_14.addFeatures(features_AnexoXAI1AI6_14);
var lyr_AnexoXAI1AI6_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoXAI1AI6_14, 
                style: style_AnexoXAI1AI6_14,
                popuplayertitle: "Anexo X - AI-1 + AI-6",
                interactive: true,
                title: '<img src="styles/legend/AnexoXAI1AI6_14.png" /> Anexo X - AI-1 + AI-6'
            });
var format_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15 = new ol.format.GeoJSON();
var features_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15 = format_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.readFeatures(json_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.addFeatures(features_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15);
var lyr_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15, 
                style: style_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15,
                popuplayertitle: "Anexo IX - Terreno entre AE-2 + AE-3 + AE-4 e AI-1 + AI-6",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.png" /> Anexo IX - Terreno entre AE-2 + AE-3 + AE-4 e AI-1 + AI-6'
            });
var format_AnexoVIIIAE10AE11AE12AE13_16 = new ol.format.GeoJSON();
var features_AnexoVIIIAE10AE11AE12AE13_16 = format_AnexoVIIIAE10AE11AE12AE13_16.readFeatures(json_AnexoVIIIAE10AE11AE12AE13_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIAE10AE11AE12AE13_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIAE10AE11AE12AE13_16.addFeatures(features_AnexoVIIIAE10AE11AE12AE13_16);
var lyr_AnexoVIIIAE10AE11AE12AE13_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIAE10AE11AE12AE13_16, 
                style: style_AnexoVIIIAE10AE11AE12AE13_16,
                popuplayertitle: "Anexo VIII - AE-10 + AE-11 + AE-12 + AE-13",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIAE10AE11AE12AE13_16.png" /> Anexo VIII - AE-10 + AE-11 + AE-12 + AE-13'
            });
var format_AnexoVIIAE14_17 = new ol.format.GeoJSON();
var features_AnexoVIIAE14_17 = format_AnexoVIIAE14_17.readFeatures(json_AnexoVIIAE14_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIAE14_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIAE14_17.addFeatures(features_AnexoVIIAE14_17);
var lyr_AnexoVIIAE14_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIAE14_17, 
                style: style_AnexoVIIAE14_17,
                popuplayertitle: "Anexo VII - AE-14",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIAE14_17.png" /> Anexo VII - AE-14'
            });
var format_AnexoVITerrenocomplementaraAE2AE3AE4_18 = new ol.format.GeoJSON();
var features_AnexoVITerrenocomplementaraAE2AE3AE4_18 = format_AnexoVITerrenocomplementaraAE2AE3AE4_18.readFeatures(json_AnexoVITerrenocomplementaraAE2AE3AE4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVITerrenocomplementaraAE2AE3AE4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVITerrenocomplementaraAE2AE3AE4_18.addFeatures(features_AnexoVITerrenocomplementaraAE2AE3AE4_18);
var lyr_AnexoVITerrenocomplementaraAE2AE3AE4_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVITerrenocomplementaraAE2AE3AE4_18, 
                style: style_AnexoVITerrenocomplementaraAE2AE3AE4_18,
                popuplayertitle: "Anexo VI - Terreno complementar a AE-2 + AE-3 + AE-4",
                interactive: true,
                title: '<img src="styles/legend/AnexoVITerrenocomplementaraAE2AE3AE4_18.png" /> Anexo VI - Terreno complementar a AE-2 + AE-3 + AE-4'
            });
var format_AnexoVAE2AE3AE4_19 = new ol.format.GeoJSON();
var features_AnexoVAE2AE3AE4_19 = format_AnexoVAE2AE3AE4_19.readFeatures(json_AnexoVAE2AE3AE4_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVAE2AE3AE4_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVAE2AE3AE4_19.addFeatures(features_AnexoVAE2AE3AE4_19);
var lyr_AnexoVAE2AE3AE4_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVAE2AE3AE4_19, 
                style: style_AnexoVAE2AE3AE4_19,
                popuplayertitle: "Anexo V - AE-2 + AE-3 + AE-4",
                interactive: true,
                title: '<img src="styles/legend/AnexoVAE2AE3AE4_19.png" /> Anexo V - AE-2 + AE-3 + AE-4'
            });
var format_AnexoIVTrechoEntreAE6eAE2AE3AE4_20 = new ol.format.GeoJSON();
var features_AnexoIVTrechoEntreAE6eAE2AE3AE4_20 = format_AnexoIVTrechoEntreAE6eAE2AE3AE4_20.readFeatures(json_AnexoIVTrechoEntreAE6eAE2AE3AE4_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVTrechoEntreAE6eAE2AE3AE4_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVTrechoEntreAE6eAE2AE3AE4_20.addFeatures(features_AnexoIVTrechoEntreAE6eAE2AE3AE4_20);
var lyr_AnexoIVTrechoEntreAE6eAE2AE3AE4_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVTrechoEntreAE6eAE2AE3AE4_20, 
                style: style_AnexoIVTrechoEntreAE6eAE2AE3AE4_20,
                popuplayertitle: "Anexo IV - Trecho Entre AE-6 e AE-2 + AE-3 + AE-4",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVTrechoEntreAE6eAE2AE3AE4_20.png" /> Anexo IV - Trecho Entre AE-6 e AE-2 + AE-3 + AE-4'
            });
var format_AnexoIIITerrenoComplementaraAE6_21 = new ol.format.GeoJSON();
var features_AnexoIIITerrenoComplementaraAE6_21 = format_AnexoIIITerrenoComplementaraAE6_21.readFeatures(json_AnexoIIITerrenoComplementaraAE6_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIITerrenoComplementaraAE6_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIITerrenoComplementaraAE6_21.addFeatures(features_AnexoIIITerrenoComplementaraAE6_21);
var lyr_AnexoIIITerrenoComplementaraAE6_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIITerrenoComplementaraAE6_21, 
                style: style_AnexoIIITerrenoComplementaraAE6_21,
                popuplayertitle: "Anexo III - Terreno Complementar a AE-6",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIITerrenoComplementaraAE6_21.png" /> Anexo III - Terreno Complementar a AE-6'
            });
var format_AnexoIIAE6_22 = new ol.format.GeoJSON();
var features_AnexoIIAE6_22 = format_AnexoIIAE6_22.readFeatures(json_AnexoIIAE6_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIAE6_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIAE6_22.addFeatures(features_AnexoIIAE6_22);
var lyr_AnexoIIAE6_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIAE6_22, 
                style: style_AnexoIIAE6_22,
                popuplayertitle: "Anexo II - AE-6",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIAE6_22.png" /> Anexo II - AE-6'
            });
var format_AnexoIMolheNorte_23 = new ol.format.GeoJSON();
var features_AnexoIMolheNorte_23 = format_AnexoIMolheNorte_23.readFeatures(json_AnexoIMolheNorte_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIMolheNorte_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIMolheNorte_23.addFeatures(features_AnexoIMolheNorte_23);
var lyr_AnexoIMolheNorte_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIMolheNorte_23, 
                style: style_AnexoIMolheNorte_23,
                popuplayertitle: "Anexo I - Molhe Norte",
                interactive: true,
                title: '<img src="styles/legend/AnexoIMolheNorte_23.png" /> Anexo I - Molhe Norte'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoXXIIIEspaosAquticosAdjacentes_1.setVisible(true);lyr_AnexoXXIIEsperadosPrticos_2.setVisible(true);lyr_AnexoXXIreadeFundeio2_3.setVisible(true);lyr_AnexoXXreadefundeio1_4.setVisible(true);lyr_AnexoXVIIIBaciadeEvoluoTrecho3_5.setVisible(true);lyr_AnexoXVIIBaciadeEvoluoTrecho2_6.setVisible(true);lyr_AnexoXVIBaciadeEvoluoTrecho1_7.setVisible(true);lyr_AnexoXVCanaldeAcessoInternoTrecho3_8.setVisible(true);lyr_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.setVisible(true);lyr_AnexoXIIICanaldeAcessoInternoTrecho1_10.setVisible(true);lyr_AnexoXIVCanaldeAcessoInternoTrecho2_11.setVisible(true);lyr_AnexoXIICanaldeAcessoExterno_12.setVisible(true);lyr_AnexoXIRIPSIAPAn1965010041238_13.setVisible(true);lyr_AnexoXAI1AI6_14.setVisible(true);lyr_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.setVisible(true);lyr_AnexoVIIIAE10AE11AE12AE13_16.setVisible(true);lyr_AnexoVIIAE14_17.setVisible(true);lyr_AnexoVITerrenocomplementaraAE2AE3AE4_18.setVisible(true);lyr_AnexoVAE2AE3AE4_19.setVisible(true);lyr_AnexoIVTrechoEntreAE6eAE2AE3AE4_20.setVisible(true);lyr_AnexoIIITerrenoComplementaraAE6_21.setVisible(true);lyr_AnexoIIAE6_22.setVisible(true);lyr_AnexoIMolheNorte_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoXXIIIEspaosAquticosAdjacentes_1,lyr_AnexoXXIIEsperadosPrticos_2,lyr_AnexoXXIreadeFundeio2_3,lyr_AnexoXXreadefundeio1_4,lyr_AnexoXVIIIBaciadeEvoluoTrecho3_5,lyr_AnexoXVIIBaciadeEvoluoTrecho2_6,lyr_AnexoXVIBaciadeEvoluoTrecho1_7,lyr_AnexoXVCanaldeAcessoInternoTrecho3_8,lyr_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9,lyr_AnexoXIIICanaldeAcessoInternoTrecho1_10,lyr_AnexoXIVCanaldeAcessoInternoTrecho2_11,lyr_AnexoXIICanaldeAcessoExterno_12,lyr_AnexoXIRIPSIAPAn1965010041238_13,lyr_AnexoXAI1AI6_14,lyr_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15,lyr_AnexoVIIIAE10AE11AE12AE13_16,lyr_AnexoVIIAE14_17,lyr_AnexoVITerrenocomplementaraAE2AE3AE4_18,lyr_AnexoVAE2AE3AE4_19,lyr_AnexoIVTrechoEntreAE6eAE2AE3AE4_20,lyr_AnexoIIITerrenoComplementaraAE6_21,lyr_AnexoIIAE6_22,lyr_AnexoIMolheNorte_23];
lyr_AnexoXXIIIEspaosAquticosAdjacentes_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXIIEsperadosPrticos_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXIreadeFundeio2_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXreadefundeio1_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIIIBaciadeEvoluoTrecho3_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIIBaciadeEvoluoTrecho2_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVIBaciadeEvoluoTrecho1_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXVCanaldeAcessoInternoTrecho3_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIIICanaldeAcessoInternoTrecho1_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIVCanaldeAcessoInternoTrecho2_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIICanaldeAcessoExterno_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXIRIPSIAPAn1965010041238_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXAI1AI6_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIAE10AE11AE12AE13_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIAE14_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVITerrenocomplementaraAE2AE3AE4_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVAE2AE3AE4_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVTrechoEntreAE6eAE2AE3AE4_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIITerrenoComplementaraAE6_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIAE6_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIMolheNorte_23.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoXXIIIEspaosAquticosAdjacentes_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXXIIEsperadosPrticos_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXXIreadeFundeio2_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXXreadefundeio1_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIIIBaciadeEvoluoTrecho3_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIIBaciadeEvoluoTrecho2_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVIBaciadeEvoluoTrecho1_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXVCanaldeAcessoInternoTrecho3_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIIICanaldeAcessoInternoTrecho1_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIVCanaldeAcessoInternoTrecho2_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIICanaldeAcessoExterno_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXIRIPSIAPAn1965010041238_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXAI1AI6_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIAE10AE11AE12AE13_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIAE14_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVITerrenocomplementaraAE2AE3AE4_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVAE2AE3AE4_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVTrechoEntreAE6eAE2AE3AE4_20.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIITerrenoComplementaraAE6_21.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIAE6_22.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIMolheNorte_23.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoXXIIIEspaosAquticosAdjacentes_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXXIIEsperadosPrticos_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXXIreadeFundeio2_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXXreadefundeio1_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVIIIBaciadeEvoluoTrecho3_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVIIBaciadeEvoluoTrecho2_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVIBaciadeEvoluoTrecho1_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXVCanaldeAcessoInternoTrecho3_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIXCanaldeAcessoInternoeBaciadeEvoluoTrecho1_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIIICanaldeAcessoInternoTrecho1_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIVCanaldeAcessoInternoTrecho2_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIICanaldeAcessoExterno_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXIRIPSIAPAn1965010041238_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoXAI1AI6_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXTerrenoentreAE2AE3AE4eAI1AI6_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIAE10AE11AE12AE13_16.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIAE14_17.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVITerrenocomplementaraAE2AE3AE4_18.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVAE2AE3AE4_19.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVTrechoEntreAE6eAE2AE3AE4_20.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIITerrenoComplementaraAE6_21.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIAE6_22.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIMolheNorte_23.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIMolheNorte_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});