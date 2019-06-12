import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { chart1, chart2, chart3, popUpChart } from './PopupChart'
import { fetch, sodCosmic } from '../XmlParser'

const position = [67.413, 26.5950]

const TestMap = ({ height, width }) => {
  const onMapClick = (e) => console.log("latlng", e.latlng)
  sodCosmic()
  fetch()
  return (
    <div>
      <Map center={position} style={{ height, width }} zoom={13} onClick={(e) => onMapClick(e)}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>Sodankylä<br />Dataa
          {popUpChart()}
          </Popup>
        </Marker>
        <Marker position={[ 66.50108687066692, 25.71857243773935]}>
          <Popup>Rovaniemi<br />Dataa
          {popUpChart()}
          </Popup>
        </Marker>
        <Marker position={[65.01113023989858, 25.48192739884203]}>
          <Popup>Oulu<br />Dataa
          {popUpChart()}
          </Popup>
        </Marker>
      </Map>
    </div>
)}

export default TestMap
