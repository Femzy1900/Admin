import { Link } from "react-router-dom"
import {menu} from "../../data"

function Sidebar() {
    return (
        <div className="">
            {menu.map((item) => (
                <div className="flex flex-col  gap-3 mt-[20px]" key={item.id}>
                    <span className="bg-red items-center text-[12px] font-extralight uppercase xl:block hidden">{item.title}</span>
                    {item.listItems.map((listitem) => (
                        <Link to={listitem.url} key={listitem.id} className="flex  gap-3 p-[10px] rounded-lg hover:bg-[#384256]">
                            <img src={listitem.icon} alt="" />
                            <span className="hidden xl:block">{listitem.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>

    )
}

export default Sidebar