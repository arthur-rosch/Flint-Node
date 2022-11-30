const validator = require("validator");
const readXlsxFile = require("read-excel-file/node");

readXlsxFile("./Alunos.xlsx").then((rows) => {
  for (let index = 0; index < rows.length; index++) {
    let check = false;
    const name = rows[index][0];
    const email = rows[index][1];
    const years = rows[index][2];
    const enrollment = rows[index][3];

    validator.isAlpha(name) && (check = true);
    validator.isEmail(email) && (check = true);
    years > 0 && (check = true);
    validator.isAlphanumeric(enrollment) && (check = true);

    check === true &&
      console.log(
        `Nome ${name}\nEmail: ${email}\nIdade: ${years}\nMatricula: ${enrollment}`
      );
  }
});
