import "./Chart.css";
import ChartBar from './ChartBar'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // Convertimos el array de objetos a un array con solo los valores de value
  const totalMaximum = Math.max(...dataPointValues); // la función max espera varios parámetros, no un array. Con los ... (spread operator) extraemos los valores del array como si fueran valores stand alone

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
