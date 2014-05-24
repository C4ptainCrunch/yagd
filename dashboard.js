var include = function(url, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url + '?' + (new Date().getTime());
    if (callback) {
        script.onreadystatechange = callback;
        script.onload = script.onreadystatechange;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}

include('bill.js', function() {

  var context = cubism.context()
      .step( 1 * 60 * 1000 )   // 1 minute
      .size(960);  // 1 * 960 = 4 hours

  var graphite = context.graphite("http://graphite.partou.se");
  var horizon = context.horizon().metric(graphite.metric).height(40);

  var body = document.getElementsByTagName('body')[0];

  var titletag = document.createElement('h1');
  titletag.appendChild(document.createTextNode(title));
  body.appendChild(titletag);

  for(var key in dashboards) {
    var subtitletag = document.createElement('h2');
    subtitletag.appendChild(document.createTextNode(key));
    body.appendChild(subtitletag);

    var dashtag = document.createElement('div');
    dashtag.id = "dashboard-" + key
    body.appendChild(dashtag);
    var id = "#dashboard-" + key;
    var metrics = dashboards[key]

    d3.select(id).append("div")
        .attr("class", "axis")
        .call(context.axis().orient("top"));

    d3.select(id).append("div")
        .attr("class", "rule")
        .call(context.rule());

    d3.select(id).selectAll(".horizon")
        .data(metrics)
      .enter().append("div")
        .attr("class", "horizon")
        .call(horizon);
  }
});
