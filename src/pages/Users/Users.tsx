import { GridColDef } from "@mui/x-data-grid"
import DataTable from "../../component/DataTable/DataTable"
import { useState } from "react"
import { userRows } from "../../data"
import Add from "../../component/AddModal/Add";


const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img className="w-[32px] h-[32px] rounded-full text-center" src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

const Users = () => {
  const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="flex items-center gap-5 mb-5">

                <h1>Users</h1>
                <button onClick={() => setOpen(true)} className="p-[5px] pointer bg-white text-black font-semibold rounded-md">Add New User</button>
            </div>
            <DataTable slug="user" columns={columns} rows={userRows} />

            {open && <Add slug="user" columns={columns} setOpen={setOpen}  />}
        </div>
    )
        
}

export default Users