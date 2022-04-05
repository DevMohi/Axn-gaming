
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";
import useData from "../../hooks/useData";
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useData()

    return (
        <div className="container dashboard-container py-5">

            <div className="chart1 text-center">
                <h3 className="" style={{ color: '4a5043' }}>Investment vs Revenue</h3>

                <BarChart width={600} height={400} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Legend />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="investment" fill="#8884d8" />
                </BarChart>
            </div>

            <div className="text-center chart2">
                <h3 className="text-center">Month Wise Sell</h3>
                <LineChart width={600} height={400} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>


        </div>
    );
};

export default Dashboard;