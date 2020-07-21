import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";


function GeoChart({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const minProp = min(data.features, feature => feature.properties.cases.cases);
    const maxProp = max(data.features, feature => feature.properties.cases.cases);
    const colorScale = scaleLinear()
      .domain([minProp, maxProp])
      .range(["#ffae00", "#ff3300"]);

    const { width, height } = wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator()
      .fitSize([width, height], selectedCountry || data)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", feature => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .attr("class", "country")
      .transition()
      .attr("fill", feature => colorScale(feature.properties.cases.cases))
      .attr("d", feature => pathGenerator(feature));

    svg
      .selectAll(".label")
      .data([selectedCountry])
      .join("text")
      .attr("class", "label")
      .text(
        feature =>
          feature &&
          feature.properties.name.toUpperCase() +
          ": total cases: "+feature.properties.cases.cases +
            ", active cases: "+feature.properties.cases.active +
            ", recovered cases: "+feature.properties.cases.recovered +
            ", deceased: "+feature.properties.cases.deaths
      )
      .attr("x", 10)
      .attr("y", 25)
      .attr("font-weight", 300)
      .attr("font-size", 18)
  }, [data, selectedCountry]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "0.2rem"}}>
      <svg ref={svgRef} style={{width:"800px",height:"500px"}}></svg>
    </div>
  );
}

export default GeoChart;
