import React, { useEffect, useState } from 'react';
import { fetchData } from "./api";
import { formatDate } from "./utils";

import "tailwindcss/index.css";

const WeatherWidget = () => {
    const [loading, setLoading] = useState(true);
    const [temperature, setTemperature] = useState<null | number>(null);

    const init = async () => {
        setLoading(true);

        const data: any = await fetchData();

        const hourIndex = data.hourly.time.findIndex((time: string) => {
            if (formatDate() === formatDate(time)) {

            }
        });

        setLoading(false);
        setTemperature(hourIndex !== -1 ? data.hourly.temperature2m[hourIndex] : data.hourly.temperature2m[0]);

    }


    useEffect(() => {
        init();
    }, []);

    if (loading) {
        return (
            <p>
                Loading...
            </p>
        )
    }

    if (!temperature) {
        return (
            <p>
                Data loading error...
            </p>
        )
    }

    return (
        <div className="bg-green rounded shadow p-4">
            <h2 className="text-lg font-bold mb-2">Погода</h2>
            <div className="flex items-center">
                <div className="text-4xl mr-4">{`${temperature > 9 ? "☀️" : "❄️"}`}</div>
                <div>
                    <div className="text-2xl">-6°C</div>
                    <div className="text-gray-600">Ясно</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
