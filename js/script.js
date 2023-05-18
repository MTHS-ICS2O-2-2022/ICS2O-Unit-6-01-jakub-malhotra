// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-jakub-malhotra/sw.js", {
    scope: "/ICS2O-Unit-6-01-jakub-malhotra/",
  })
}

/**
 * This function calculates fahrenheit to celsius.
 */
function enterClicked() {
  //input
  const fahrenheittemp = parseFloat(
    document.getElementById("fahrenheittemp").value
  )

  //process
  const celsiustemp = ((fahrenheittemp - 32) * 5) / 9

  //output
  document.getElementById("celsiustemp").innerHTML =
    "The temperture in celsius is: " + celsiustemp.toFixed(2) + " °C."
}
