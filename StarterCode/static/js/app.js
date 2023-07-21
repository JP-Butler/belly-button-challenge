//1. Read in the samples.json data 
const samplesUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Promise object for samples data
// const samplesPromise = d3.json(samplesUrl);
// // Console log promise to show result
// console.log("Samples Data Promise:", samplesPromise);

// // Get the json data and log it to console


// //2. Horizontal bar chart displaying the top 10 OTUs found in a given individual

// let barTrace = [{
//     values: data.sample_values,
//     labels: data.otu_ids,
//     type: "bar"
// }];

// let barData = [barTrace]

// let layout = {
//     title: "Top 10 OTUs"
// };

// // plot bar plot
// Plotly.newPlot("bar", barData, layout);


// initialize default dashboard, display all with 1st test subject ID No.
function init(){
    d3.json(samplesUrl).then(function(data){
        console.log(data);
    
      let selector=  d3.select("#selDataset");
      let ids=data.names;
      for(let i =0; i< ids.length; i++){
      selector.append("option")
      .attr('value', ids[i]) // Set the "value" attribute
      .text(ids[i]);
      }
      let firstnames= data.names[0];
      plotFigures(firstnames);
      writeMetadata(firstnames);


    });
    
}

// function for plotting default dashboard plots & demo panel
function plotFigures(sampleID){

    d3.json(samplesUrl).then(data => afterGettingData(data));

    
    function afterGettingData(data){
       
    console.log(data);
    let sample= data.samples.filter( function(item){return item.id== sampleID})[0]
    console.log(sample)
    
    // Initial Bar Plot 
    let barTrace = {
        x: sample.sample_values.slice(0,10).reverse(),//reverseSamples, //, barSamples.reverse()
        y: sample.otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
        type: "bar",
        orientation: "h",
        hovertext: sample.otu_labels
    };

    let barData = [barTrace]

    let layout = {
        title: "Top 10 OTUs"
    };

    // Plot Bar Chart
    Plotly.newPlot("bar", barData, layout);

    // Initial Bubble Chart 
    let bubTrace = {
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: 'markers',
        marker: {
            color:sample.otu_ids,
            size: sample.sample_values
        }

    };

    let bubData = [bubTrace]

    let layoutBub = {
        xaxis: {title: "OTU ID"}
    };

    // Plot chart to page 
    Plotly.newPlot("bubble", bubData, layoutBub)

        }

};

// Method for acquiring demo. info and append to "sample-metadata"
function writeMetadata(sampleID){
    d3.json(samplesUrl).then(data => afterGettingData(data));

     function afterGettingData(data){
         console.log(data);

         let sampleMetaData= data.metadata.filter( function(item){return item.id== sampleID})[0];
        console.log(sampleMetaData);


    function insertData(metaData){
        let metaDataId = d3.select('#sample-metadata').html("").append('div');

        let infoElem = metaDataId.selectAll('h6')
            .data(Object.entries(metaData))
            .enter()
            .append('h6')
            .text((d) => `${d[0]}: ${d[1]}`);
    }
    insertData(sampleMetaData)   //(sampleMetaData)
}

};

function optionChanged(dataChange){
    console.log(dataChange)
    plotFigures(dataChange)
    writeMetadata(dataChange)

};




//writeMetadata();
init();

