import { useState } from "react";
import calculatorIcon from "./assets/images/icon-calculator.svg";

import "./index.css";

function App() {
    return (
        <main className="grid h-full place-content-center bg-slate-100">
            <Calculator />
        </main>
    );
}
function Calculator() {
    return (
        <div className="mx-auto grid max-w-4xl grid-cols-2 overflow-clip rounded-3xl">
            <div className="form space-y-8 bg-white p-8 shadow-[100px_0_0px_0_#fff]">
                <div className="header flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-slate-600">
                        Mortgage Calculator
                    </h1>
                    <ClearButton />
                </div>
                <form
                    action="
                "
                    className="space-y-3"
                >
                    <TextInput
                        htmlFor="amount"
                        label="Mortgage amount"
                        useIcon={true}
                        icon={"£"}
                        iconPosition="left"
                    />
                    <TextInput
                        htmlFor="term"
                        label="Mortgage term"
                        useIcon={true}
                        icon={"years"}
                        iconPosition="right"
                    />
                    <TextInput
                        htmlFor="interest"
                        label="Interest rate"
                        useIcon={true}
                        icon={"%"}
                        iconPosition="right"
                    />
                    <RadioInput
                        htmlFor="mortgage-type"
                        name="repayment"
                        value="Repayment"
                    />
                    <RadioInput
                        htmlFor="mortgage-type"
                        name="interest-only"
                        value="Interest only"
                    />
                </form>
                <CalculateButton />
            </div>
            <div className="results space-y-8 rounded-bl-[5rem] bg-slate-900 p-8 text-slate-200">
                <h2 className="text-2xl text-white">Your results</h2>
                <p className="text-slate-400">
                    Your results are shown below based on the information you
                    provided. To adjust the results, edit the form and click
                    &quot;calculate repayments&quot; again.
                </p>
                <div className="border-t-primary-lime space-y-6 rounded-lg border-t-4 bg-slate-800 p-8">
                    <h3 className="flex flex-col gap-2 text-slate-400">
                        Your monthly repayments
                        <span className="text-primary-lime block text-5xl font-bold">
                            £1,797.74
                        </span>
                    </h3>

                    <hr className="text-slate-700/50" />
                    <h3 className="flex flex-col gap-2 text-slate-400">
                        Total you&apos;ll repay over term
                        <span className="block text-2xl text-white">
                            £539,322.94
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
}
function TextInput({
    htmlFor,
    label,
    useIcon = false,
    icon,
    iconPosition = "left",
}: {
    htmlFor: string;
    label: string;
    useIcon?: boolean;
    icon?: string;
    iconPosition?: "left" | "right";
}) {
    return (
        <>
            <label htmlFor={htmlFor} className="block text-slate-900">
                {label}
            </label>
            <div className="flex items-center justify-between overflow-clip rounded-lg border border-slate-600">
                {useIcon && iconPosition === "left" && (
                    <span className="bg-slate-100 px-4 py-2 text-center font-bold text-slate-600">
                        {icon}
                    </span>
                )}
                <input type="text" id={htmlFor} className="grow px-4 py-2" />
                {useIcon && iconPosition === "right" && (
                    <span className="bg-slate-100 px-4 py-2 text-center font-bold text-slate-600">
                        {icon}
                    </span>
                )}
            </div>
        </>
    );
}
function RadioInput({
    htmlFor,
    name,
    value,
}: {
    htmlFor: string;
    name: string;
    value: string;
}) {
    return (
        <div className="bg-primary-lime/25 border-primary-lime accent-primary-lime/50 space-x-4 rounded-lg border p-3">
            <input type="radio" id={htmlFor} name={name} value={value} />
            <label htmlFor={htmlFor} className="font-bold text-slate-900">
                {value}
            </label>
        </div>
    );
}

function ClearButton() {
    return (
        <button className="cursor-pointer text-slate-600 underline">
            Clear all
        </button>
    );
}
function CalculateButton() {
    return (
        <button className="bg-primary-lime hover:bg-primary-lime/80 inline-flex cursor-pointer items-center gap-2 rounded-full px-10 py-3 font-bold text-slate-900 transition">
            <img src={calculatorIcon} alt="" className="" />
            Calculate repayments
        </button>
    );
}

export default App;
