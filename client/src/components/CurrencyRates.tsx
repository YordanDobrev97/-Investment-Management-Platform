'use client';

import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

interface ExchangeRateResponse {
    rates: {
        [key: string]: number;
    };
    currency: string;
    date: string;
}

interface ChartDataset {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    fill: boolean;
}

interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}

const CurrencyRates = () => {
    const [rates, setRates] = useState<{ [key: string]: number }>({});
    const [chartData, setChartData] = useState<ChartData | null>(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get<ExchangeRateResponse>('https://api.exchangerate-api.com/v4/latest/USD');
                setRates(response.data.rates);

                console.log('response', response)
                const chartDataset: ChartData = {
                    labels: ['EUR', 'GBP', 'JPY', 'BGN'],
                    datasets: [{
                        label: 'USD Exchange Rates',
                        data: [response.data.rates.EUR, response.data.rates.GBP, response.data.rates.JPY, response.data.rates.BGN],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2,
                        fill: false
                    }]
                };
                setChartData(chartDataset);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };
        fetchRates()
    }, [])

    // useEffect(() => {
    //     if (chartData) {
    //         const ctx = document.getElementById('currencyChart') as HTMLCanvasElement;
    //         new Chart(ctx.getContext('2d')!, {
    //             type: 'line',
    //             data: chartData,
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: false
    //                     }
    //                 }
    //             }
    //         });
    //     }
    // }, [chartData]);

    return (
        <section className="currency-section">
            <h2>Currency Exchange Rates</h2>
            <div className="currency-prices">
                <table>
                    <thead>
                        <tr>
                            <th>Row </th>
                            <th>Currency</th>
                            <th>Exchange Rate (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rates && Object.keys(rates).map((currency, i) => (
                            <tr key={currency}>
                                <td>{i}.</td>
                                <td>{currency}</td>
                                <td>{rates[currency].toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="currency-chart">
                <canvas id="currencyChart"></canvas>
            </div>
        </section>
    );
};

export default CurrencyRates;