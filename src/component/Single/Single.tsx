import { Line, LineChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


type Props = {
    id: number;
    title: string;
    img?: string;
    info: {
        username: string;
        fullname: string;
        email: string;
        phone: string;
        status: string;
    };
    chart?: {
        dataKeys: {
            name: string;
            color: string;
        }[];
        data: {
            name: string;
            visits: number;
            clicks: number;
        }[];
    };
    activities?: { time: string; text: string }[];
}


const Single = (props: Props) => {
    return (
        <div className="flex flex-col lg:gap-[50px] lg:flex-row ">
            <div className="flex flex-col flex-1">
                <div className="">
                    <div className="flex  items-center gap-5">
                        {props.img && <img className=" w-[100px] h-[100px] rounded-[20px] flex justify-center items-center gap-5" src={props.img} />}
                        <h1 className="font-semibold">{props.title}</h1>
                        <button className="bg-white text-black rounded-md p-2 font-semibold">Update</button>
                    </div>
                    <div className="text-[20px]">
                        {Object.entries(props.info).map((item) => (
                            <div className="my-[30px] mx-0" key={item[0]}>
                                <span className="font-bold mr-[10px] uppercase">{item[0]}: </span>
                                <span>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className=" hidden lg:block w-[90%] h-0 border-1/2" />
                {props.chart && (
                    <div className="mt-[50px] w-[80%] h-[400px] hidden lg:block">
                        <ResponsiveContainer>
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.dataKeys.map((dataKey) => (
                                    <Line
                                    type="monotone"
                                    dataKey={dataKey.name}
                                    stroke={dataKey.color}
                                  />
                                ))}

                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
            <div className="flex flex-col flex-1">
                <h2 className="mb-5 text-[20px]">Latest Activities</h2>
                {props.activities && (
                    <ul>
                        {props.activities.map((activity) => (
                            <li className="list-none relative w-[1px] pt-[50px] bg-[#f45b69] after" key={activity.text}>
                                <div className="min-w-[250px] lg:min-w-[480px] p-[15px] bg-[#f45b6810] " >
                                    <p className="mb-2">{activity.text}</p>
                                    <p className="text-[12px]">{activity.time}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>

    )
}

export default Single