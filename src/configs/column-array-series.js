
export default {
    title: { text: 'Solar Employment Growth' },
    categoryAxis: { showLine: false },
    valueAxis: {
        showLine: false,
        min: 0,
        title: { text: 'Number of employees' }
    },
    series: [
        { type: "array", startPoint: 2010, step: 1 }
    ],
    legend:{
        floating:true,
        orientation:"vertical"
    },
    url:"https://static.visuallyjs.com/data/chart/solar-employment-growth.json",
};
