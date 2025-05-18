import { useState } from "react";
import illustrationEmpty from "./assets/images/illustration-empty.svg";
import TextInput from "./components/TextInput";
import RadioInput from "./components/RadioInput";
import { ClearButton, CalculateButton } from "./components/Buttons";
import { calculateMonthly, calculateTotal } from "./utils";
import type { MortgageType, ResultData, FormData, FormErrors } from "./types";
import "./index.css";

function App() {
    return (
        <main className="h-full place-content-center bg-slate-100 md:grid">
            <Calculator />
        </main>
    );
}

function Calculator() {
    const [formData, setFormData] = useState<FormData>({
        amount: 0,
        term: 0,
        interest: 0,
        mortgageType: null as MortgageType,
    });
    const [resultData, setResultData] = useState<ResultData>({
        monthly: "",
        total: "",
    });
    const [success, setSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState<FormErrors>({
        amount: false,
        term: false,
        interest: false,
        mortgageType: false,
    });
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { amount, term, interest, mortgageType } = formData;
        const errors: FormErrors = {
            amount: !amount || amount <= 0,
            term: !term || term <= 0,
            interest: !interest || interest <= 0,
            mortgageType: !mortgageType,
        };
        setFormErrors(errors);
        if (Object.values(errors).some((error) => error)) {
            setSuccess(false);
            return;
        }
        setSuccess(true);
        const monthly = calculateMonthly(amount, term, interest, mortgageType);
        const total = calculateTotal(amount, term, interest, mortgageType);
        setResultData({
            monthly,
            total,
        });
    }
    function resetFields() {
        setFormData({
            amount: 0,
            term: 0,
            interest: 0,
            mortgageType: null,
        });
    }

    return (
        <div className="mx-auto max-w-5xl overflow-clip md:grid md:grid-cols-2 md:rounded-3xl">
            <div className="form space-y-8 bg-white p-8 md:shadow-[100px_0_0px_0_#fff]">
                <div className="header flex flex-wrap items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold text-slate-600">
                        Mortgage Calculator
                    </h1>
                    <ClearButton
                        onClick={() => {
                            resetFields();
                            setSuccess(false);
                            setFormErrors({
                                amount: false,
                                term: false,
                                interest: false,
                                mortgageType: false,
                            });
                        }}
                    />
                </div>
                <form
                    action="
                "
                    onSubmit={handleFormSubmit}
                    className="[&>*:not(:first-child,p.error)]:mt-4"
                >
                    <TextInput
                        htmlFor="amount"
                        label="Mortgage amount"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                amount: parseInt(e.target.value),
                            });
                            if (e.target.value !== "") {
                                setFormErrors({
                                    ...formErrors,
                                    amount: false,
                                });
                            }
                        }}
                        icon={"£"}
                        value={formData.amount}
                        iconPosition="left"
                        error={formErrors.amount}
                        errorMessage="Please enter a valid amount"
                    />
                    <div className="gap-4 md:grid md:grid-cols-2">
                        <div className="space-y-2">
                            <TextInput
                                htmlFor="term"
                                label="Mortgage term"
                                icon={"years"}
                                value={formData.term}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        term: parseInt(e.target.value),
                                    });
                                    if (e.target.value !== "") {
                                        setFormErrors({
                                            ...formErrors,
                                            term: false,
                                        });
                                    }
                                }}
                                error={formErrors.term}
                                errorMessage="Please enter a valid term"
                                iconPosition="right"
                            />
                        </div>
                        <div className="space-y-2">
                            <TextInput
                                htmlFor="interest"
                                label="Interest rate"
                                value={formData.interest}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        interest: parseInt(e.target.value),
                                    });
                                    if (e.target.value !== "") {
                                        setFormErrors({
                                            ...formErrors,
                                            interest: false,
                                        });
                                    }
                                }}
                                error={formErrors.interest}
                                errorMessage="Please enter a valid interest rate"
                                icon={"%"}
                                iconPosition="right"
                            />
                        </div>
                    </div>

                    <RadioInput
                        htmlFor="repayment"
                        name="mortgage-type"
                        checked={formData.mortgageType === "repayment"}
                        value="Repayment"
                        error={formErrors.mortgageType}
                        errorMessage="Please select a mortgage type"
                        onChange={() => {
                            setFormData({
                                ...formData,
                                mortgageType: "repayment",
                            });
                            setFormErrors({
                                ...formErrors,
                                mortgageType: false,
                            });
                        }}
                    />
                    <RadioInput
                        htmlFor="interest-only"
                        name="mortgage-type"
                        checked={formData.mortgageType === "interest"}
                        error={formErrors.mortgageType}
                        errorMessage="Please select a mortgage type"
                        onChange={() => {
                            setFormData({
                                ...formData,
                                mortgageType: "interest",
                            });
                            setFormErrors({
                                ...formErrors,
                                mortgageType: false,
                            });
                        }}
                        value="Interest only"
                    />
                    <CalculateButton />
                </form>
            </div>
            <Result success={success} resultData={resultData} />
        </div>
    );
}
function Result({
    resultData,
    success = true,
}: {
    resultData: ResultData;
    success?: boolean;
}) {
    return (
        <div className="results space-y-8 bg-slate-900 p-8 text-slate-200 md:rounded-bl-[5rem]">
            {success ? (
                <>
                    <h2 className="text-2xl text-white">Your results</h2>
                    <p className="text-slate-400">
                        Your results are shown below based on the information
                        you provided. To adjust the results, edit the form and
                        click &quot;calculate repayments&quot; again.
                    </p>
                    <div className="border-t-primary-lime space-y-6 rounded-lg border-t-4 bg-slate-800 p-8">
                        <h3 className="flex flex-col gap-2 text-slate-400">
                            Your monthly repayments
                            <span className="text-primary-lime block text-5xl font-bold">
                                {resultData.monthly}
                            </span>
                        </h3>

                        <hr className="text-slate-700/50" />
                        <h3 className="flex flex-col gap-2 text-slate-400">
                            Total you&apos;ll repay over term
                            <span className="block text-2xl text-white">
                                {resultData.total}
                            </span>
                        </h3>
                    </div>
                </>
            ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                    <img
                        src={illustrationEmpty}
                        alt="Empty illustration"
                        className="drag-none"
                    />
                    <h2 className="text-bold text-2xl text-white">
                        Results shown here
                    </h2>
                    <p className="text-slate-400">
                        Complete the form and click &quot;calculate
                        repayments&quot; to see what your monthly repayments
                        would be.
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
