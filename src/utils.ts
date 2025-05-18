import type { MortgageType } from "./types";
export function calculateTotal(
    amount: number,
    term: number,
    interest: number,
    mortgageType: MortgageType,
): string {
    let total = 0;
    if (mortgageType === "repayment") {
        const monthlyInterestRate = interest / 100 / 12;
        const numberOfPayments = term * 12;
        total =
            (amount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    } else {
        total = amount * (interest / 100) * term;
    }
    return formatCurrency(total);
}
export function calculateMonthly(
    amount: number,
    term: number,
    interest: number,
    mortgageType: MortgageType,
): string {
    let monthly = 0;
    if (mortgageType === "repayment") {
        const monthlyInterestRate = interest / 100 / 12;
        const numberOfPayments = term * 12;
        monthly =
            (amount * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    } else {
        monthly = (amount * (interest / 100)) / 12;
    }
    return formatCurrency(monthly);
}
function formatCurrency(value: number): string {
    return "£" + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
