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

