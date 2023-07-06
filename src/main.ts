import { json } from "./eu";

// @ts-ignore
const states = ChartGeo.topojson.feature(json, json.objects.dataue).features;

const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// @ts-ignore
new Chart(ctx, {
	type: "choropleth",
	data: {
		labels: states.map((d: { properties: { COUNTRY: any; }; }) => d.properties.COUNTRY),
		datasets: [
			{
				label: "States",
				outline: states,
				data: states.map((d: any) => {
					console.log(d);
					return {
						feature: d,
						value: Math.random() * 10,
					};
				}),
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: true,
			},
		},
		scales: {
			projection: {
				axis: "x",
				projection: "mercator",
			},
			color: {
				axis: "x",
				quantize: 5,
				legend: {
					position: "bottom-right",
					align: "bottom",
				},
			},
		},
	},
});
