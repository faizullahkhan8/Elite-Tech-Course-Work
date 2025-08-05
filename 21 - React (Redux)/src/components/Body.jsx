import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";

import { FaTrash, FaPencil } from "react-icons/fa6";

const Body = ({
    setIsVisible,
    setIsUpdating,
    handleDelete,
    setUpdateStudentId,
    data,
}) => {
    const [globalFilters, setGlobalFilters] = useState("");
    const [sorting, setSorting] = useState([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 2,
    });

    const columns = [
        {
            accessorKey: "name",
            header: "Name",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "fatherName",
            header: "Father Name",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "semester",
            header: "Semester",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "department",
            header: "Department",
            cell: (props) => <p>{props.getValue()}</p>,
        },
        {
            accessorKey: "actions",
            header: "Actions",
            cell: (props) => {
                return (
                    <div className="w-full h-full flex items-center justify-center gap-4">
                        <FaPencil
                            onClick={() => {
                                setIsVisible(true);
                                setIsUpdating(true);
                                setUpdateStudentId(props.cell.row.original.id);
                            }}
                            className="text-amber-600 text-xl"
                        />
                        <FaTrash
                            onClick={() =>
                                handleDelete(props.cell.row.original.id)
                            }
                            className="text-red-600 text-xl"
                        />
                    </div>
                );
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: globalFilters,
            sorting,
            pagination,
        },
        onGlobalFilterChange: setGlobalFilters,
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (
        <div className="flex flex-col flex-1 w-full p-4 gap-4">
            <div className="w-full flex items-center justify-between">
                <input
                    type="text"
                    placeholder="Filter by any field..."
                    className="shadow shadow-black border border-gray-400 rounded-xl p-2"
                    value={globalFilters}
                    onChange={(e) => table.setGlobalFilter(e.target.value)}
                />
                <button
                    onClick={() => {
                        setIsVisible(true);
                        setIsUpdating(false);
                    }}
                    className="shadow shadow-black rounded-xl px-4 py-2 outline-none bg-green-600 hover:bg-green-600/90 text-white font-bold "
                >
                    Add Student
                </button>
            </div>

            {/* Header */}
            <div className="w-full flex-1">
                <div style={{ width: "100%" }}>
                    {table.getHeaderGroups().map((headerGroups) => (
                        <div key={headerGroups.id} className="flex w-full">
                            {headerGroups.headers.map((header) => (
                                <div
                                    key={header.id}
                                    className="border border-collapse p-2 group relative flex items-center justify-between"
                                    style={{ width: "100%" }}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    <div>{header.column.columnDef.header}</div>
                                    {header.column.getIsSorted() === "asc" &&
                                        "👇"}
                                    {header.column.getIsSorted() === "desc" &&
                                        "👆"}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Rows */}
                <div className="w-full">
                    {table.getRowModel().rows.map((row) => (
                        <div key={row.id} className="flex">
                            {row.getVisibleCells().map((cell) => (
                                <div
                                    key={cell.id}
                                    className="border p-2"
                                    style={{ width: "100%" }}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 mt-4">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span>
                    Page{" "}
                    <strong>{table.getState().pagination.pageIndex + 1}</strong>{" "}
                    of <strong>{table.getPageCount()}</strong>
                </span>

                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>

                <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                    className="border px-2 py-1 rounded"
                >
                    {[2, 5, 8, 10].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Body;
