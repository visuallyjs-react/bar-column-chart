import React from 'react';
import { charts } from "./examples";

export function App() {
    return (
        <div className="vjs-bar-column-chart">
            {charts.map((chart, index) => (
                <div className="vjs-chart-example" key={index}>
                    <div className="vjs-chart-example-title">{chart.desc}</div>
                    {chart.comments && <div className="vjs-chart-example-comments">{chart.comments}</div>}
                    {chart.render("vjs-chart-example-container")}
                </div>
            ))}
        </div>
    );
}
