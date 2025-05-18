export default function TextInput({
    htmlFor,
    label,
    value,
    icon,
    iconPosition = "left",
    onChange,
}: {
    htmlFor: string;
    label: string;
    value: number;
    icon?: string;
    iconPosition?: "left" | "right";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <>
            <label htmlFor={htmlFor} className="block text-slate-900">
                {label}
            </label>
            <div className="flex items-center overflow-clip rounded-lg border border-slate-600">
                {" "}
                {iconPosition === "left" && (
                    <span className="shrink-0 bg-slate-100 px-4 py-2 text-center font-bold text-slate-600">
                        {" "}
                        {icon}
                    </span>
                )}
                <input
                    type="text"
                    id={htmlFor}
                    value={value > 0 ? value : ""}
                    onChange={onChange}
                    className="min-w-0 grow border-none px-4 py-2 outline-none focus:ring-0"
                />
                {iconPosition === "right" && (
                    <span className="shrink-0 bg-slate-100 px-4 py-2 text-center font-bold text-slate-600">
                        {icon}
                    </span>
                )}
            </div>
        </>
    );
}
