
export default {
    colorGenerator: {
        generate: (series) => ({
            "corn": "#345678",
            "wheat": "#876543"
        }[series.valueField])
    },
    tooltip: {
        format: "<b>{{category}}</b><br/>{{series.label}}:{{point.value}}",
        valueSuffix: ' (1000 MT)'
    },
    title: {
        text: 'Corn vs wheat estimated production for 2023',
        wrap: true,
        fillRatio: 0.75
    },
    subtitle: { text: 'Source: https://www.indexmundi.com/agriculture/?commodity=corn' },
    categoryAxis: {
        showLine: true,
        crosshair: true,
        title: { text: "Country" }
    },
    valueAxis: [
        {
            showLine: true,
            min: 0,
            title: { text: '1000 metric tons (MT)' }
        },
        {
            position: "end",
            showLine: false,
            min: 0,
            title: { text: '1000 metric tons (MT)' }
        }
    ],
    series: [
        { valueField: "corn", label: "Corn" },
        { valueField: "wheat", label: "Wheat" }
    ],
    url:"https://static.visuallyjs.com/data/chart/corn-vs-wheat-production.json",
    legend: { floating: true }
};
