
export default {
    title: { text: "Fuel Consumption" },
    subtitle: { text: "A comparison" },
    categoryAxis: {
        title: { text: "Fuel" }
    },
    valueAxis: {
        title: { text: "Amount consumed" }
    },
    series: [{ valueField: "value", label: "Type" }],
    url:"https://static.visuallyjs.com/data/chart/fuel-consumption.json",
    tooltip: { format: "{{category}}:{{point.value}}" }
};
