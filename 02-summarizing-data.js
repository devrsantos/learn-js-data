// var cities;

// d3.csv("/data/cities.csv", 
// 	function(obj){
// 		obj["population"] = +obj["population"];
// 		obj["land area"] = +obj["land area"];
// 		return obj;
// 	},
// 	function(data){
// 		console.log(data);
// 		cities = data;
// 	}
// );

var cities = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

var minLand = d3.min(cities, function(obj){
	return obj["land_area"];
});
console.log("minLand: ", minLand);

var landExtent = d3.extent(cities, function(obj){
	return obj["land_area"];
})
console.log("landExtent: ", landExtent);

var landAvg = d3.mean(cities, function(obj){
	return obj["land_area"];
});
console.log("landAvg: ", landAvg);

var landMedian = d3.median(cities, function(obj){
	return obj["land_area"];
});
console.log("landMedian: ", landMedian);

var landDeviation = d3.deviation(cities, function(obj){
	return obj["land_area"];
});
console.log("landDeviation: ", landDeviation);

/*
d3.csv("/data/cities.csv", 
	function(obj){
		obj["population"] = +obj["population"];
		obj["land area"] = +obj["land area"];
		return obj;
	},
	function(data){
		console.log(data);
	}
);



d3.tsv("/data/animals.tsv", 
	function(obj){
		obj["avg_weight"] = +obj["avg_weight"];
		return obj;
	},
	function(data){
		console.log(data);
	}
);

var pipeSeparatedValues = d3.dsv("|", "text/plain");

pipeSeparatedValues("/data/animals_piped.txt", 
	function(obj){
		obj["avg_weight"] = +obj["avg_weight"];
		return obj;
	},
	function(data){
		console.log(data);
	}
)

d3.json("/data/employees.json", function(err, data){
	if(err){ throw err };

	console.log(data);
});


function analyze(err, cities, animals){
	if(err){
		throw err;
	}
	console.log("cities: ", cities);
	console.log("animals: ", animals);
}

queue()
	.defer(d3.csv, "/data/cities.csv")
	.defer(d3.tsv, "/data/animals.tsv")
	.await(analyze);


*/