

function Navbar() {
    return (
        <div className="flex justify-between items-center w-full px-2 py-4 bg-[#2a3447]">
            <div className=" flex items-center gap-1">
                <img src="logo.svg" alt="" />
                <span className="text-white font-bold">Joyboy   </span>
            </div>
            <div className="flex items-center gap-5">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification relative">
                    <img src="/notifications.svg" alt="" />
                    <span className="absolute top-[-10px] right-[-10px] bg-red-500 rounded-full text-white h-[15px] w-[15px] flex items-center justify-center text-[12px] ">1</span>
                </div>
                <div className="flex items-center gap-3 ">
                    <img className="w-[26px] h-[26px] rounded-full border"
                        src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                    />
                    <span className="text-white">Jane</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>

    )
}

export default Navbar