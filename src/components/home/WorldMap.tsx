import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React from "react";
import { ComposableMap, Geographies, Geography, Line } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const connections = [
  { from: "Vietnam", to: "United States" },
  { from: "Vietnam", to: "Canada" },
  { from: "Vietnam", to: "Switzerland" },
  // Add other connections as needed
];

const WorldMap: React.FC = () => {
  const coordinates: { [key: string]: [number, number] } = {
    Vietnam: [108.2772, 14.0583],
    "United States": [-95.7129, 37.0902],
    Canada: [-106.3468, 56.1304],
    Switzerland: [8.2275, 46.8182],
    // Add other coordinates as needed
  };

  return (
    <div className="flex justify-center items-center">
      <ComposableMap
        projection="geoEqualEarth"
        width={800}
        height={450}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>
        {connections.map((connection, i) => {
          const from = coordinates[connection.from];
          const to = coordinates[connection.to];

          return (
            <Line
              key={i}
              from={from}
              to={to}
              stroke="#FF5533"
              strokeWidth={2}
              strokeLinecap="round"
              className="animated-line"
            />
          );
        })}
        {Object.keys(coordinates).map((country, i) => {
          const [longitude, latitude] = coordinates[country];
          return (
            <circle
              key={i}
              cx={longitude}
              cy={latitude}
              r={4}
              fill="#FF5533"
            >
              <Tooltip
                title={country}
                placement="top"
              >
                <InfoCircleOutlined />
              </Tooltip>
            </circle>
          );
        })}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
