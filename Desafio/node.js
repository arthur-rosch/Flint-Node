const fs = require("fs");
const fetch = require("node-fetch");
const readXlsxFile = require("read-excel-file/node");
const writeXlsxFile = require("write-excel-file/node");
const cars = require("./cars.json");

const schema = {
  Marca: {
    prop: "brand",
  },

  Modelo: {
    prop: "model",
  },

  Year: {
    prop: "year",
  },

  Plaque: {
    prop: "plaque",
  },

  Color: {
    prop: "color",
  },

  Photo: {
    prop: "photo",
  },
};

const schemaCars = [
  {
    column: "Marca",
    type: String,
    value: (student) => student.Marca,
  },
  {
    column: "Modelo",
    type: String,
    value: (student) => student.Modelo,
  },
  {
    column: "Ano",
    type: String,
    value: (student) => student.Ano,
  },
  {
    column: "Placa",
    type: String,
    value: (student) => student.Placa,
  },
  {
    column: "Cor",
    type: String,
    value: (student) => student.Cor,
  },
  {
    column: "Imagem",
    type: String,
    value: (student) => student.Photo,
  },
];

cars.shift();
let carListToXLSX = [];
readXlsxFile("./Doc/Carros.xlsx").then((rows) => {
  for (let index = 1; index < rows.length; index++) {
    const brand = rows[index][0];
    const model = rows[index][1];
    const year = rows[index][2];
    const plaque = rows[index][3];
    const color = rows[index][4];
    const photo = rows[index][5];

    readXlsxFile("./Doc/Carros.xlsx", { schema }).then(({ rows, errors }) => {
      console.log(errors);
      console.log(rows);
    });

    const newCarToJSON = {
      brand: brand,
      model: model,
      year: year,
      plaque: plaque,
      color: color,
      photo: photo,
    };

    const newCarToXLSX = {
      Marca: String(brand),
      Modelo: String(model),
      Ano: String(year),
      Placa: String(plaque),
      Cor: String(color),
      Imagem: String(photo),
    };

    carListToXLSX.push(newCarToXLSX);
    cars.push(newCarToJSON);

    fs.writeFile("cars.json", JSON.stringify(cars), (err) => {
      if (err) throw err;

      console.log("Done writing");
    });
  }

  (async () => {
    try {
      const response = await fetch(
        "https://apigenerator.dronahq.com/api/QbdXhibA/rosch"
      );
      const json = await response.json();

      for (let index = 0; index < json.length; index++) {
        const objects = {
          Marca: json[index].brand,
          Modelo: json[index].model,
          Ano: json[index].year,
          Placa: json[index].plaque,
          Cor: json[index].color,
          Imagem: json[index].photo,
        };

        carListToXLSX.push(objects);
      }

      await writeXlsxFile(carListToXLSX, {
        schemaCars,
        filePath: "./Doc/Carros.xlsx",
      });
    } catch (error) {
      console.log(error);
    }
  })();
});
