import BarChartBox from "../../component/Chart/BarChartBox"
import BigChartBox from "../../component/Chart/BigChartBox"
import ChartBox from "../../component/Chart/ChartBox"
import PieChartBox from "../../component/Chart/PieChartBox"
import TopBox from "../../component/Chart/TopBox"
import "../../index.css"
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
} from "../../data";

const Home = () => {
    return (
        <div className="grid gap-5  auto-rows-min-180 sm:auto-rows-min-120 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            
            <div className="box box4">
                <PieChartBox />
            </div>
            
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="box box7 hidden md:block">
                <BigChartBox />
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />

            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>

        </div>

    )
}

export default Home