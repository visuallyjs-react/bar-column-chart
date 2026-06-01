
export default {
    title: { text: "Football Tournament Results" },
    series: [
        { valueField: "cl", label: "Champions League" },
        { valueField: "fa", label: "FA Cup" },
        { valueField: "bpl", label: "British Premier League" }
    ],
    url:"https://static.visuallyjs.com/data/chart/football-tournaments.json",
    plotOptions: {
        dataLabels: true,
        stacked:true
    },
    tooltip: { format: "<b>{{category}}</b><br/>{{series.label}}:{{point.value}}" }
};
