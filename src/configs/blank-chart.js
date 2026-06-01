export default {
    title: { text: "This chart is blank." },
    subtitle: { text: "It shows an empty message and some axis labels" },
    categoryAxis: {
        showLine: true,
        title: { text: "Category Axis", align: "end" },
    },
    valueAxis: {
        showLine: true,
        title: { text: "Value Axis", align: "end" }
    },
    series: [
        { valueField: "corn", label: "Corn" },
        { valueField: "wheat", label: "Wheat" }
    ]
};
