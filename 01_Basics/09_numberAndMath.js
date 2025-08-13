const balance = 1000.994;
const fixedBalance = balance.toFixed(2); // "1000.99"

const richBankBalance = 100000000; // Difficult to read
const formattedBalance = richBankBalance.toLocaleString('en-IN'); // "1,00,00,000"

// Precision 
const preciseValue = 0.1 + 0.2; // 0.30000000000000004
const roundedValue = preciseValue.toFixed(2); // "0.30". It is a STRING, not a number

