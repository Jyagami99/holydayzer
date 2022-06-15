const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "3/1/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

const hoje = new Date();
console.log(hoje.toLocaleDateString());

function isHoliday() {
  for (let i = 0; i < holidays.length; i++) {
    if (hoje.toLocaleDateString("en-US") === holidays[i].date) {
      const holidayName = holidays[i].name;
      return [holidayName, true];
    }
  }
  return false;
}

isHoliday()[1]
  ? console.log(`Sim, hoje é ${isHoliday()[0]}`)
  : console.log("Não, hoje não é feriado");
