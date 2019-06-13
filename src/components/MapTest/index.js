import React from 'react'
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet'
import { chart1, chart2, popUpChart2, popUpChart } from './PopupChart'
import { fetch, sodCosmic } from '../XmlParser'
import municipalities from '../../constants/kuntarajat.json';

const position = [67.413, 26.5950]

const TestMap = ({ height, width, pickArea, forecast, area }) => {
  let data = municipalities;
  const onMapClick = (e) => console.log("latlng", e.latlng)
  return (
    <Map center={position} style={{ height, width }} zoom={8} onClick={(e) => onMapClick(e)}>
      <GeoJSON
        key={'BestJSON'}
        data={data}
        onClick={({ layer }) => {
          console.log(layer);
          if (!layer.feature) return; // data is bad, some have no features
          pickArea(layer.feature.properties.name)}
        }
        style={(layer) => {
          return layer.properties.name === area ? { color: "#FFAAAA" } : { color: '#BABABA' }
        }}
      />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup
          onOpen={() => pickArea('Sodankylä')}
        >Sodankylä<br />Weather forecast 5d/3h
          {popUpChart2(forecast)}
        </Popup>
      </Marker>
      <Marker position={[ 60.464055, 24.801342 ]}>
        <Popup
          onOpen={() => pickArea('Nurmijärvi')}
        >Nurmijärvi<br />Weather forecast 5d/3h
          {popUpChart2(forecast)}
        </Popup>
      </Marker>
    </Map>
  )
}

export default TestMap
