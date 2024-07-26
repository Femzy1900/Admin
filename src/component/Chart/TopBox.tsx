import { topDealUsers } from "../../data";

const TopBox = () => {
    return (
        <div>
            <h1 className="mb-5 xl:text-6">Top Deals</h1>
            <div className="">
                {topDealUsers.map((user) => (
                    <div className="flex items-center justify-between mb-[30px]" key={user.id}>
                        <div className="flex sm:bg-red gap-5 items-center">
                            <img className="w-[40px] h-[40px] rounded-full object-fit " src={user.img} alt="" />
                            <div className="flex flex-col gap-[5px]">
                                <span className="text-3 font-semibold">{user.username}</span>
                                <span className="xl:hidden">{user.email}</span>
                            </div>
                        </div>
                        <span>${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default TopBox;