function plot(type) {
var xArray = document.getElementById("xvalues").value.split(',');
var yArray = document.getElementById("yvalues").value.split(',');
var mode = "lines";
if (type == "scatter") {mode = "markers"}
Plotly.newPlot("Plot1", [{x:xArray, y:yArray, mode:mode, type:"scatter"}]);
}
