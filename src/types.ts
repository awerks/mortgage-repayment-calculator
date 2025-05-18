export type MortgageType = "repayment" | "interest" | null;

export interface FormData {
    amount: number;
    term: number;
    interest: number;
    mortgageType: MortgageType;
}
export interface ResultData {
    monthly: string;
    total: string;
}
