var wms_layers = [];

        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });var lyr_KRB_Merapi_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "KRB_Merapi",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "KRB_Merapi",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_KRB_Merapi_1, 0]);var lyr_Batas_Desa_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Batas_Desa",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Batas_Desa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Batas_Desa_2, 0]);var lyr_Curah_Hujan_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Curah_Hujan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Curah_Hujan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Curah_Hujan_3, 0]);var lyr_Guna_Lahan_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Guna_Lahan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Guna_Lahan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Guna_Lahan_4, 0]);var lyr_Fasilitas_Umum_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Fasilitas_Umum",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fasilitas_Umum",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fasilitas_Umum_5, 0]);var lyr_ArahanPolaRuangKawasanBudidayaKabupatenSleman_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://gis.jogjaprov.go.id/geoserver/wms?layers%3Dgeonode%3Apenggunaan_lahan_2016%26width%3D690%26bbox%3D110.00216672267561%2C-8.204282392910782%2C110.83488921439442%2C-7.54111494912332%26srs%3DEPSG%3A4326%26height%3D550%26access_token%3D264286077ad211e99d902c44fd82d820",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "geonode:sleman_budidaya_geo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Arahan Pola Ruang Kawasan Budidaya Kabupaten Sleman",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ArahanPolaRuangKawasanBudidayaKabupatenSleman_6, 0]);var lyr_Jaringan_jalan_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Jaringan_jalan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Jaringan_jalan",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Jaringan_jalan_7, 0]);var lyr_Sungai_Sleman_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/Sleman/wms",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "Sungai_Sleman",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Sungai_Sleman",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Sungai_Sleman_8, 0]);

lyr_ESRISatellite_0.setVisible(true);lyr_KRB_Merapi_1.setVisible(true);lyr_Batas_Desa_2.setVisible(true);lyr_Curah_Hujan_3.setVisible(true);lyr_Guna_Lahan_4.setVisible(true);lyr_Fasilitas_Umum_5.setVisible(true);lyr_ArahanPolaRuangKawasanBudidayaKabupatenSleman_6.setVisible(true);lyr_Jaringan_jalan_7.setVisible(true);lyr_Sungai_Sleman_8.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_KRB_Merapi_1,lyr_Batas_Desa_2,lyr_Curah_Hujan_3,lyr_Guna_Lahan_4,lyr_Fasilitas_Umum_5,lyr_ArahanPolaRuangKawasanBudidayaKabupatenSleman_6,lyr_Jaringan_jalan_7,lyr_Sungai_Sleman_8];
