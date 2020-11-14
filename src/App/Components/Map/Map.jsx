
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from '../../utils/utils'
import './StyleMap.css'



function Map({zoom, center, country}) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{height: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       {showDataOnMap(country, 'cases')}
      </MapContainer>
    </div>
  );
}

export default Map;