
export default {
    title: { text: "Temperature variation by month", align: "left" },
    valueAxis: { title: { text: "Temperature range" } },
    series: [
        { id: "max", maxValueField: "max", minValueField: "min", label: "Temperature" }
    ],
    url:"https://static.visuallyjs.com/data/chart/temperature-range.json",
    tooltip: {
        format: "<b>{{category}}</b><br/>{{point.minValue}} - {{point.maxValue}}",
        valueSuffix: ' C'
    }
};
