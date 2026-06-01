
export default {
    title: { text: "Fruit consumption" },
    series: [
        { valueField: "john", label: "John" },
        { valueField: "jane", label: "Jane" },
        { valueField: "joe", label: "Joe" }
    ],
    url:"https://static.visuallyjs.com/data/chart/fruit-consumption.json",
    tooltip: { format: "<b>{{category}}</b><br/>{{series.label}}  {{point.value}}" }
};
