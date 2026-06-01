import { BarChartComponent, ColumnChartComponent } from "@visuallyjs/browser-ui-react";

import BlankChartConfig from "./configs/blank-chart";
import BasicBarConfig from "./configs/basic-bar.js";
import BasicColumnConfig from "./configs/basic-column.js";
import ColumnMultipleConfig from "./configs/column-multiple";
import BarMultipleConfig from "./configs/bar-multiple";
import BarRangeConfig from "./configs/bar-range";
import ColumnRangeConfig from "./configs/column-range";
import ColumnMin0Config from "./configs/column-min-0.js";
import BarNegativeConfig from "./configs/bar-negative";
import ColumnStackedConfig from "./configs/column-stacked";
import BarStackedConfig from "./configs/bar-stacked";
import BarGroupedConfig from "./configs/bar-grouped";
import ColumnArraySeriesConfig from "./configs/column-array-series";

export const chartOptions = [
    BasicBarConfig,
    BasicColumnConfig,
    ColumnMultipleConfig,
    BarMultipleConfig,
    BarRangeConfig,
    ColumnRangeConfig,
    ColumnMin0Config,
    BarNegativeConfig,
    ColumnStackedConfig,
    BarStackedConfig,
    BarGroupedConfig,
    ColumnArraySeriesConfig,
    BlankChartConfig
];

export const charts = [
    {
        desc: "Basic bar chart",
        config: BasicBarConfig,
        render: (className) => <BarChartComponent className={className} options={BasicBarConfig} />
    },
    {
        desc: "Basic column chart",
        config: BasicColumnConfig,
        render: (className) => <ColumnChartComponent className={className} options={BasicColumnConfig} />
    },
    {
        desc: "Column chart, multiple series",
        config: ColumnMultipleConfig,
        render: (className) => <ColumnChartComponent className={className} options={ColumnMultipleConfig} />
    },
    {
        desc: "Bar chart, multiple series",
        config: BarMultipleConfig,
        render: (className) => <BarChartComponent className={className} options={BarMultipleConfig} />
    },
    {
        desc: "Bar chart, range",
        config: BarRangeConfig,
        render: (className) => <BarChartComponent className={className} options={BarRangeConfig} />
    },
    {
        desc: "Column chart, range",
        config: ColumnRangeConfig,
        render: (className) => <ColumnChartComponent className={className} options={ColumnRangeConfig} />
    },
    {
        desc: "Column chart, value axis minimum 0",
        comments:`This dataset contains two values which are less than 0, but the chart specifies 
        min:0 for the value axis, so the values are not shown. The same dataset is shown in the "Bar chart with negative value" 
        chart, where "min" is not specified, and the negative values are shown.`,
        config: ColumnMin0Config,
        render: (className) => <ColumnChartComponent className={className} options={ColumnMin0Config} />
    },
    {
        desc: "Bar chart with negative value",
        config: BarNegativeConfig,
        render: (className) => <BarChartComponent className={className} options={BarNegativeConfig} />
    },
    {
        desc: "Column chart, stacked",
        config: ColumnStackedConfig,
        render: (className) => <ColumnChartComponent className={className} options={ColumnStackedConfig} />
    },
    {
        desc: "Bar chart, stacked",
        config: BarStackedConfig,
        render: (className) => <BarChartComponent className={className} options={BarStackedConfig} />
    },

    {
        desc: "Bar chart, grouped",
        comments:"The series in this chart are grouped by continent",
        config: BarGroupedConfig,
        render: (className) => <BarChartComponent className={className} options={BarGroupedConfig} />
    },
    {
        desc: "Column chart, array series",
        config: ColumnArraySeriesConfig,
        render: (className) => <ColumnChartComponent className={className} options={ColumnArraySeriesConfig} />
    },
    {
        desc: "Empty chart",
        config: BlankChartConfig,
        render: (className) => <BarChartComponent className={className} options={BlankChartConfig} />
    }
];
