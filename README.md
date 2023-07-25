# Belly-Button-Challenge
--------------------------------
## Belly Button Biodiversity Dashboard

In this challenge I play the role of developer, tasked with creating an interactive dashboard of charts that explores the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) which tracks the microbes that live in the human naval. The dashboard allows you to explore the individual data of each individual in the study by utilizing a dynamic drop down menu to select a desired test subject ID, then displaying unique charts for that individual.

## Table of Contents

- [About & Process](#about--process)
- [Getting Started & Installing](#getting-started--installing)
- [Contributing](#contributing)

## About & Process

I began this challenge by reading the `samples.json` file with the **D3 Library** from the following URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`. Then I defined several functions to create the desired dashboard. <br>
1. A `init()` function to initialize the dashboard when the **index.html** file is accessed. <br>
2. A `plotFigures()` function to creates the desired chart visuals on the dashboard. Including:
* A bar plot to display the Top 10 OTU's (operational taxonomic units) per Individual selected.
* A bubble chart that displays the OTU ID sample size, where the size of the bubble represents the size of the sample values. E.g. the larger the bubble the larger the amount of the microbe was found in that individual.
* A demographic Information box displaying the metadata of each individual such as: id#, ethnicity, gender, age, location, bbtype & wfreq (wash frequency). <br>
3. The `writeMetadata()` function to fetch the data from `samplesUrl` with a `.then()` Promise and `=>` arrow function, perform the `afterGettingData` function to extract the desired metadata from the JSON file and append it to the `#sample-metadata` id. 
4. Finally the simplest of functions, `optionChanged()` which references the **index.html** line `id="selDataset" onchange="optionChanged(this.value)"` and takes the above defined functions`plotFigures()` & `writeMetadata()` with `dataChange` as their values. Allowing the dashboard to become dynamic by changing the charts based on the Test Subject ID selected from the drop down menu.


## Getting Started & Installing

Requirements to run project:
* A web browser such as **Chrome** to be able to view and inspect the dashboard. 
* A code/text editor able to handle Javascript and HTML files I Recommend **VS Code**. <br>
No other installations or packages are needed.


## Contributing

Justin Butler

**Aided By:** <br>
* class Teacher's Assistant
* Weekly Tutoring session