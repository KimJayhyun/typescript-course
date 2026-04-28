// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) {
    return "Initial amount cannot be negative.";
  }

  if (duration <= 0) {
    return "No valid amount of years provided.";
  }

  if (expectedReturn < 0) {
    return "Expected return cannot be negative.";
  }

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResult: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions = totalContributions + annualContribution;

    total = total + annualContribution;

    annualResult.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalContributions,
      totalInterestEarned,
    });
  }
  return annualResult;
}

function printResults(results: CalculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  for (const yearEndResult of results) {
    console.log(yearEndResult.year);
    console.log(`Total Amount: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`,
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`,
    );
    console.log("---------------------------------------");
  }
}

const investmentData: InvestmentData = {
  initialAmount: 10000,
  annualContribution: 1200,
  expectedReturn: 0.07,
  duration: 10,
};

const result = calculateInvestment(investmentData);

printResults(result);
