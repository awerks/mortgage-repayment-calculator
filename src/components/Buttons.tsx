import calculatorIcon from "../assets/images/icon-calculator.svg";

export function ClearButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer text-slate-600 underline"
        >
            Clear all
        </button>
    );
}
export function CalculateButton() {
    return (
        <button
            type="submit"
            className="bg-primary-lime hover:bg-primary-lime/80 inline-flex cursor-pointer items-center gap-2 rounded-full px-10 py-3 font-bold text-slate-900 transition"
        >
            <img src={calculatorIcon} alt="" className="" />
            Calculate repayments
        </button>
    );
}
