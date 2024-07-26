import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="flex  h-full flex-col md:flex-row">
      <div className=" flex flex-3 flex-col gap-[20px] justify-between">
        <div className="flex items-center gap-[10px] 2xl:text-[14px]">
          <img src={props.icon} alt="" />
          <span className="">{props.title}</span>
        </div>
        <h1 className="xl:text-[20px]">{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className=" flex flex-2 flex-col justify-between">
        <div className="w-[100%] h-full">
          <ResponsiveContainer width="99%" height={100}>
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "block" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span
            className="font-bold text-[20px] 2xl:text-[16px]"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
