import { useState } from 'react';
import TemplateInput from './TemplateInput';
import { BoilingVerdict } from './BoilingVerdict';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default function Calculator() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
  const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);

  return (
    <div>
      <TemplateInput
        scale="c"
        temperature={celsius}
        onTemplateChange={(value) => {
          setTemperature(value);
          setScale('c');
        }}
      />
      <TemplateInput
        scale="f"
        temperature={fahrenheit}
        onTemplateChange={(value) => {
          setTemperature(value);
          setScale('f');
        }}
      />
      <BoilingVerdict celsius={Number.parseFloat(celsius)} />
    </div>
  );
}
