const Handlebars = require('handlebars');

// Define your template data
const templateData = {
  "name": "Josie", 
  "earned": 2300,
  "spent": 2000,
  "prizes": 5,
  "years": 4,
  "donats": 7,
  "givaws": 3,
  "actions": 75
};

// Handlebars preprocessor function
const preprocessMJML = (rawMJML) => {
  // Compile the raw MJML with Handlebars
  const compiledTemplate = Handlebars.compile(rawMJML);
  // Apply the template data to generate the final MJML
  return compiledTemplate(templateData);
};

const options = {
  preprocessors: [preprocessMJML],
  "packages": []
};

module.exports = options;
