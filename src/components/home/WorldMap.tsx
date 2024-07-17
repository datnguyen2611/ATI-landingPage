// src/components/WorldMap.tsx
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";
import * as d3 from "d3-geo";
import worldData from "@/world-110m.json"; // Import tệp JSON cục bộ

const connections = [
  { from: "Vietnam", to: "United States" },
  { from: "Vietnam", to: "Japan" },
  { from: "Vietnam", to: "Thailand" },
  { from: "Vietnam", to: "Singapore" },
  { from: "Vietnam", to: "Australia" },
  // Add other connections as needed
];

const coordinates: { [key: string]: [number, number] } = {
  Vietnam: [108.2772, 14.0583],
  "United States": [-95.7129, 37.0902],
  Japan: [138.2529, 36.2048],
  Thailand: [100.9925, 15.87],
  Singapore: [103.8198, 1.3521],
  Australia: [133.7751, -25.2744],
  // Add other coordinates as needed
};

const WorldMap: React.FC = () => {
  // Tạo projection với d3-geo
  const projection = d3
    .geoEqualEarth()
    .scale(160)
    .translate([800 / 2, 450 / 2]);

  return (
    <div className="map-container">
      <ComposableMap
        projection={projection as any} // Sử dụng `as any` để bỏ qua kiểm tra loại của TypeScript
        height={500}
        style={{ width: "100%" }}
      >
        <Geographies geography={worldData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E0E0E0"
                stroke="#FFFFFF"
              />
            ))
          }
        </Geographies>
        {connections.map((connection, i) => {
          const from = coordinates[connection.from];
          const to = coordinates[connection.to];

          if (!from || !to) {
            return null; // Bỏ qua nếu không tìm thấy tọa độ
          }

          return (
            <Line
              key={i}
              from={from}
              to={to}
              stroke="#018FE5"
              strokeWidth={1}
              strokeLinecap="round"
              strokeDasharray="3" // Đây là dòng thêm vào để tạo dashline
            />
          );
        })}
        {Object.entries(coordinates).map(([country, coords], i) => (
          <Marker
            key={i}
            coordinates={coords}
          >
            <circle
              r={2}
              fill="#018FE5"
              className="animate-ping"
            />
            <text
              textAnchor="right"
              y={10}
              style={{
                fontFamily: "system-ui",
                fill: "#018FE5",
                fontSize: "10px",
              }}
            >
              {country}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
