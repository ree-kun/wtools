import XLSX from "xlsx";

const fileName = process.argv[2];
const sheetName = process.argv[3] || "Sheet1";

const book = XLSX.readFile(fileName);
const sheet = book.Sheets[sheetName];

const rows = XLSX.utils.sheet_to_txt(sheet, { type: "string" });

console.log(rows);
