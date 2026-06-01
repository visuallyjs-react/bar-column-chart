# Bar and Column Charts Implementation

This document describes how the Bar and Column Charts demonstration is implemented using `@visuallyjs/browser-ui-react`.

## Components

The application showcases various bar and column chart types using these components from `@visuallyjs/browser-ui-react`:

- **`BarChartComponent`**: Used to render horizontal bar charts, including multiple series, stacked, and grouped layouts.
- **`ColumnChartComponent`**: Used to render vertical column charts, including range, stacked, and multiple series layouts.

## Configuration Options

Each chart is configured by passing an options object to the respective component. The demonstration includes examples of:

- **Basic Bar and Column Charts**: Showing single and multiple data series.
- **Stacked Charts**: Visualizing cumulative data by stacking series on top of each other.
- **Grouped Charts**: Grouping related series together (e.g., by continent).
- **Range Charts**: Visualizing a range (min/max) for each category.
- **Negative Values**: Demonstrating how the charts handle data points below zero.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom layout for the chart grid is defined in `bar-column-chart.css`.
