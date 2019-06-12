import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { chart1, chart2, chart3, popUpChart } from './PopupChart'

const position = [67.413, 26.5950]

const TestMap = ({ height, width }) => {
  const onMapClick = (e) => console.log("latlng", e.latlng)
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
      </Map>
    </div>
)}

export default TestMap
