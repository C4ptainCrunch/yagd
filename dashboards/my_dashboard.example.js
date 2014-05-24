var title = "My super dashboard";
var url = "http://mygraphite.server.io"; // no slash at the end

var dashboards = {
    "My first title": [
        {query: "randomWalk(just.a.random.metric)", name: "eht0"},
        {query: "randomWalk(just.another.random.metric)", name: "eth1"}
    ],
    "Awesome data": [
        {query: "machine1.cpu.percent", name: "%"},
        {query: "machine1.swap.swap.used", name: "Swap"},
        {query: "machine1.process.count", name: "Processes"}
    ]
}
