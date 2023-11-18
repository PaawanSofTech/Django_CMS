// here theme begins
am4core.useTheme(am4themes_animated);
// Themes end here

 // creating map instance
let chart = am4core.create("chartdiv", am4maps.MapChart);

// setting definition of map
chart.geodata = am4geodata_india2019High;


// this is map polygon 
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(1).brighten(-0.3),
  max: chart.colors.getIndex(1).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set values for each state
polygonSeries.data = [
  {
    id: "IN-JK",
    value: 0
  },
  {
    id: "IN-MH",
    value: 0
  },
  {
    id: "IN-UP",
    value: 0
  },
  {
    id: "US-AR",
    value: 0
  },
  {
    id: "IN-RJ",
    value: 0
  },
  {
    id: "IN-AP",
    value: 0
  },
  {
    id: "IN-MP",
    value: 0
  },
  {
    id: "IN-TN",
    value: 0
  },
  {
    id: "IN-JH",
    value: 0
  },
  {
    id: "IN-WB",
    value: 0
  },
  {
    id: "IN-GJ",
    value: 0
  },
  {
    id: "IN-BR",
    value: 0
  },
  {
    id: "IN-TG",
    value: 0
  },
  {
    id: "IN-GA",
    value: 0
  },
  {
    id: "IN-DN",
    value: 0
  },
  {
    id: "IN-DL",
    value: 0
  },
  {
    id: "IN-DD",
    value: 0
  },
  {
    id: "IN-CH",
    value: 0
  },
  {
    id: "IN-CT",
    value: 0
  },
  {
    id: "IN-AS",
    value: 0
  },
  {
    id: "IN-AR",
    value: 0
  },
  {
    id: "IN-AN",
    value: 0
  },
  {
    id: "IN-KA",
    value: 0
  },
  {
    id: "IN-KL",
    value: 0
  },
  {
    id: "IN-OR",
    value: 0
  },
  {
    id: "IN-SK",
    value: 0
  },
  {
    id: "IN-HP",
    value: 0
  },
  {
    id: "IN-PB",
    value: 0
  },
  {
    id: "IN-HR",
    value: 0
  },
  {
    id: "IN-UT",
    value: 0
  },
  {
    id: "IN-LK",
    value: 0
  },
  {
    id: "IN-MN",
    value: 0
  },
  {
    id: "IN-TR",
    value: 0
  },
  {
    id: "IN-MZ",
    value: 0
  },
  {
    id: "IN-NL",
    value: 0
  },
  {
    id: "IN-ML",
    value: 0
  }
];



// hover and detail tool
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.nonScalingStroke = true;

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#0A285D");