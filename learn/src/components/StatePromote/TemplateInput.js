const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export default function TemplateInput({ scale, temperature, onTemplateChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={(e) => onTemplateChange(e.target.value)} />
    </fieldset>
  );
}
