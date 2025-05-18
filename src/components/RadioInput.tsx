export default function RadioInput({
    htmlFor,
    name,
    value,
    checked,
    onChange,
    error,
    errorMessage,
}: {
    htmlFor: string;
    name: string;
    value: string;
    checked: boolean;
    error: boolean;
    errorMessage: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <>
            <div className="has-checked:bg-primary-lime/25 has-checked:border-primary-lime accent-primary-lime/50 hover:border-primary-lime space-x-4 rounded-lg border p-3 transition-colors">
                <input
                    type="radio"
                    id={htmlFor}
                    onChange={onChange}
                    name={name}
                    value={value}
                    checked={checked}
                />
                <label htmlFor={htmlFor} className="font-bold text-slate-900">
                    {value}
                </label>
            </div>
            {error && (
                <p className="error text-primary-red mt-2 text-sm">
                    {errorMessage}
                </p>
            )}
        </>
    );
}
