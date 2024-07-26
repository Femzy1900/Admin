import { GridColDef } from "@mui/x-data-grid";


type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Add = (props: Props) => {

    const handleSubmit = (e) => {
        e.preventDefault();


        props.setOpen(false)
    };

    return (
        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-[#000000b9] flex items-center justify-center ">
            <div className="p-[50px] rounded-[10px] bg-[#2a3447] relative">
                <span className="absolute text-[25px] font-semibold top-[10px] right-[10px] pointer" onClick={() => props.setOpen(false)}> X </span>
                <h1 className="mb-[40px] text-[24px] ">Add new {props.slug}</h1>
                <form className="flex flex-wrap max-w-[500px] justify-between" action="" onSubmit={handleSubmit}>
                    {props.columns.filter((item) => item.field !== "id" && item.field !== "img").map((column) => (
                        <div className="w-[40%] flex flex-col gap-[10px] mb-5 ">
                            <label className="text-[14px]">{column.headerName}</label>
                            <input className="p-[10px] bg-transparent outline-none border rounded-sm" type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                    <button className="w-full p-[10px] bg-white text-black font-bold rounded-md pointer">Send</button>
                </form>
            </div>

        </div>
    )
}

export default Add