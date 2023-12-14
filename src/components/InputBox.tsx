import { useId } from "react";

type inputBox = {
  label: string;

  amount: number;
  onAmountChange?: any;
  onCurrencyChange?: any;
  currencyOptions: string[];
  selectCurrency: string;
  amountDisable?: boolean;
  currencyDisable?: boolean;
  customStyle?: any;
};
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyDisable = false,
  currencyOptions,
  selectCurrency,
  amountDisable = false,

  customStyle,
}: inputBox) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${customStyle}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
