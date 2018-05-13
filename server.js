const express = require('express');

const app = express();

app.get('/api/info/SA', (req, res) => {
  const informations = [
    {
      id: 1, 
      about: 'Sarajevo, capital of Bosnia and Herzegovina, is a compact city on the Miljacka River, surrounded by the Dinaric Alps. Its center has museums commemorating local history, including Sarajevo 1878–1918, which covers the 1914 assassination of Archduke Franz Ferdinand, an event that sparked World War I.',
      info: 'The National Museum of Bosnia and Herzegovina is located in central Sarajevo, the capital of Bosnia and Herzegovina. It was established in 1888, having originally been conceived around 1850.'
    }
  ];

  res.json(informations);
});

app.get('/api/info/SCC', (req, res) => {
  const INFO_MO = [
    {
      id: 1,
      about: 'Sarajevo City Center (SCC) is a business complex and shopping center in downtown Sarajevo, Bosnia and Herzegovina, that consists of three main parts: a state-of-the-art shopping mall and leisure complex, a five star hotel tower and a commercial offices tower.',
      info: 'Hastahana Park is also a skatepark in Sarajevo neighborhood of Marijin Dvor.'
    }
  ];

  res.json(INFO_MO);
}); 

app.get('/api/info/BBI', (req, res) => {
  const INFO_TZ = [
    {
      id: 1,
      about: 'BBI Centar is a shopping mall in the center of Sarajevo. It is one of the largest shopping malls in Bosnia and Herzegovina, stretching to 43,000 square meters. It was opened on April 6, 2009.',
      info: 'The Sacred Heart Cathedral is a Catholic church in Sarajevo; commonly referred as the Sarajevo Cathedral, it is the largest cathedral in Bosnia and Herzegovina.'
    }
  ];

  res.json(INFO_TZ);
});

const port = 5000;

app.listen(port, () => `We are live on port ${port}`);