google.charts.load("current", {
    "packages": ["corechart", "geochart"],
    "mapsApiKey": "AIzaSyAZ6Zglfvct1Nxh3VAZdCwnYwhOu1gaX6k"
});

google.charts.setOnLoadCallback(graficoDiputados);

function graficoDiputados() {
    let div = document.getElementById("grafico");
    div.style.height = "90vh";

    let data = [];

    data[0] = google.visualization.arrayToDataTable([
        ["Partido", "Diputados", { role: "style" }],
        ["PSOE", 120, "#E31313"],
        ["PP", 89, "#0393D3"],
        ["VOX", 52, "#54D404"],
        ["PODEMOS-IU", 35, "#A444B4"],
        ["ERC-SOBIRANISTES ", 13, "#FFAF1F"],
        ["Cs", 10, "#FF6F0F"],
        ["JxCAT-JUNTS", 8, "#E55575"],
        ["EAJ-PNV", 6, "#079767"],
        ["EH Bildu", 5, "#B4C404"],
        ["MÁS PAÍS", 3, "#0A7565"],
        ["CUP-PR", 2, "#292929"],
        ["CCa-PNC-NC", 2, "#E6D228"],
        ["NA+", 2, "#8F5F5F"],
        ["BNG", 1, "#72B2E2"],
        ["PRC", 1, "#7C7C4C"],
        ["¡TERUEL EXISTE!", 1, "#037252"]
    ]);

    data[1] = google.visualization.arrayToDataTable([
        ["Partido", "Diputados", { role: "style" }],
        ["PSOE", 123, "#E31313"],
        ["PP", 66, "#0393D3"],
        ["VOX", 24, "#54D404"],
        ["PODEMOS-IU", 42, "#A444B4"],
        ["ERC-SOBIRANISTES ", 15, "#FFAF1F"],
        ["Cs", 57, "#FF6F0F"],
        ["JxCAT-JUNTS", 7, "#E55575"],
        ["EAJ-PNV", 6, "#079767"],
        ["EH Bildu", 4, "#B4C404"],
        ["MÁS PAÍS", 0, "#0A7565"],
        ["CUP-PR", 2, "#292929"],
        ["CCa-PNC-NC", 2, "#E6D228"],
        ["NA+", 2, "#8F5F5F"],
        ["BNG", 0, "#72B2E2"],
        ["PRC", 1, "#7C7C4C"],
        ["¡TERUEL EXISTE!", 1, "#037252"]
    ]);

    let options = {
        title: "Representación en el Congreso de los Diputados Noviembre 2019",
        colors: ["#E31313", "#0393D3", "#54D404", "#A444B4", "#FFAF1F", "#FF6F0F", "#E55575", "#079767", "#B4C404", "#0A7565", "#292929", "#E6D228", "#8F5F5F", "#72B2E2", "#7C7C4C", "#037252"],
        "pieSliceText": "value",
        legend: "none",
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
        },
    };

    let chart = new google.visualization.BarChart(div);
    chart.draw(data[0], options);

    window.setTimeout(() => {
        options["title"] = "Representación en el Congreso de los Diputados Abril 2019";
        chart.draw(data[1], options);
    }, 10000);
}

window.addEventListener("resize", () => {
    graficoDiputados();
});