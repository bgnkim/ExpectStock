function loaded( dataset ){
  var stockData = {
    labels : dataset.labels,
    datasets : [
      {
        label : "Closing Price",
        fillColor : "rgba(220,220,220,0.2)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        pointHighlightFill : "#fff",
        pointHighlightStroke : "rgba(220,220,220,1)",
        data : dataset.stock
      }
    ]
  };
  var volData = {
    labels : dataset.labels,
    datasets : [
      {
        label : "Closing Price",
        fillColor : "rgba(220,220,220,0.2)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        pointHighlightFill : "#fff",
        pointHighlightStroke : "rgba(220,220,220,1)",
        data : dataset.vol
      }
    ]
  };
  
  var stockctx = document.getElementById('stock-chart').getContext('2d');
  new Chart(stockctx).Line(stockData, {});
  var volctx = document.getElementById('vol-chart').getContext('2d');
  new Chart(volctx).Bar(volData, {});
};