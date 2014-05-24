var include = function(url, callback){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (callback) {
        script.onreadystatechange = callback;
        script.onload = script.onreadystatechange;
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}

var getParameterByName = function(name, replacement) {
    replacement = typeof replacement !== 'undefined' ? replacement : "";
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? replacement : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var metrictodict = function(metric){
  if(!metric.hasOwnProperty("query")){
    var ret = {
      query: metric,
      name: metric,
      height: 40
    }
  }
  else{
    var ret = {
      query: metric.query,
      name: metric.hasOwnProperty("name") ? metric.name : metric.query,
      height: metric.hasOwnProperty("height") ? metric.height : 40
    }
  }
  return ret;
}
var dash_path = getParameterByName("dashboard", null);
if(dash_path !== null){
  include("dashboards/" + dash_path + '.js', function() {
    compression = getParameterByName("compression", 1)
    var context = cubism.context()
        .step(interval * 1000 * compression)
        .size(960);

    var graphite = context.graphite(url);
    var horizon = context.horizon();

    var body = document.getElementsByTagName('body')[0];

    var titletag = document.createElement('h1');
    titletag.appendChild(document.createTextNode(title));
    body.appendChild(titletag);

    for(var key in dashboards) {
      var subtitletag = document.createElement('h2');
      subtitletag.appendChild(document.createTextNode(key));
      body.appendChild(subtitletag);

      var key_hash = key.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);

      var dashtag = document.createElement('div');
      dashtag.id = "dashboard-" + key_hash;
      body.appendChild(dashtag);
      var id = d3.select("#dashboard-" + key_hash);
      var metrics = dashboards[key]

      id.append("div")
        .attr("class", "axis")
        .call(
          context.axis().orient("top")
        );

      id.append("div")
        .attr("class", "rule")
        .call(context.rule());

      for(var i in metrics){
        var metric = metrictodict(metrics[i]);
        id.selectAll(".horizon-"+i)
        .data(
          [graphite.metric(metric.query).summarize("avg")]
        )
        .enter().append("div")
        .attr("class", "horizon")
        .call(horizon.title(metric.name)
          .height(metric.height)
        );
      }
    }

  });
}
else {
  alert("No dashboard");
}
