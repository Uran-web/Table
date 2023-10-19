import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import "./styles.css";

const tableConfig = {
  enableRowSelection: false,
  enableColumnOrdering: false,
  enableGlobalFilter: false,
  enablePagination: false,
  enableTopToolbar: false,
  enableSorting: false,
  enableFilters: false,
  enableColumnActions: false,
  enableBottomToolbar: false,
};

const data = [
  {
    refEvent: {
      type: "Purchase",
      date: "12/12/2023 at 8:45 AM PDT",
      sum: "120",
      currency: "$",
    },
    advocate: { user: "autouser123@gmail.com", role: "Advocate" },
    friend: { friend_email: "user@gmail.com", friend_status: "Friend" },
    referStatus: {
      ref_status: "Pending",
      passed_status: "Passed fraud checks",
      checks: true,
    },
  },
  {
    refEvent: {
      type: "Purchase",
      date: "12/12/2023 at 1:22 AM PDT",
      sum: "120",
      currency: "$",
    },
    advocate: { user: "autouser123@gmail.com", role: "Advocate" },
    friend: { friend_email: "user@gmail.com", friend_status: "Friend" },
    referStatus: {
      ref_status: "Pending",
      passed_status: "Marked as fraud",
      checks: false,
    },
  },
  {
    refEvent: {
      type: "Purchase",
      date: "12/12/2023 at 5:45 PM PDT",
      sum: "120",
      currency: "$",
    },
    advocate: { user: "roberto@gmail.com", role: "Advocate" },
    friend: { friend_email: "user@gmail.com", friend_status: "Friend" },
    referStatus: {
      ref_status: "Pending",
      passed_status: "Passed fraud checks",
      checks: true,
    },
  },
  {
    refEvent: {
      type: "Purchase",
      date: "12/12/2023 at 3:35 AM PDT",
      sum: "120",
      currency: "$",
    },
    advocate: { user: "alex@gmail.com", role: "Advocate" },
    friend: { friend_email: "user@gmail.com", friend_status: "Friend" },
    referStatus: {
      ref_status: "Pending",
      passed_status: "Marked as fraud",
      checks: false,
    },
  },
  {
    refEvent: {
      type: "Purchase",
      date: "12/12/2023 at 3:15 PM PDT",
      sum: "120",
      currency: "$",
    },
    advocate: { user: "norman@gmail.com", role: "Advocate" },
    friend: { friend_email: "user@gmail.com", friend_status: "Friend" },
    referStatus: {
      ref_status: "Pending",
      passed_status: "Marked as fraud",
      checks: false,
    },
  },
];

const Table = () => {
  const columns = useMemo(
    () => [
      {
        accessorFn: (originalRow) => originalRow.refEvent.type,
        header: "Referral event",
        muiTableHeadCellProps: { style: { color: "green" } },
        Header: ({ column }) => {
          return <p style={{ color: "#333333" }}>{column.columnDef.header}</p>;
        },
        Cell: ({ row }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#333333",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              {row.original.refEvent.type}
            </span>
            <span
              style={{
                color: "#d2d2d2",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              {row.original.refEvent.date}
            </span>
            <span
              style={{
                color: "#333333",
                fontWeight: "bold",
              }}
            >
              {row.original.refEvent.currency}
              {row.original.refEvent.sum}
            </span>
          </div>
        ),
      },
      {
        accessorFn: (originalRow) => originalRow.advocate.user,
        id: "advocate",
        header: "Advocate",
        Header: ({ column }) => {
          return <p style={{ color: "#333333" }}>{column.columnDef.header}</p>;
        },
        Cell: ({ row }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#333333",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              {row.original.advocate.user}
            </span>
            <span
              style={{
                color: "#333333",
              }}
            >
              {row.original.advocate.role}
            </span>
          </div>
        ),
      },
      {
        accessorFn: (originalRow) => originalRow.friend.friend_email,
        id: "friend",
        header: "Friend",
        Header: ({ column }) => {
          return <p style={{ color: "#333333" }}>{column.columnDef.header}</p>;
        },
        Cell: ({ row }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#333333",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              {row.original.friend.friend_email}
            </span>
            <span
              style={{
                color: "#333333",
              }}
            >
              {row.original.friend.friend_status}
            </span>
          </div>
        ),
      },
      {
        accessorFn: (originalRow) => originalRow.referStatus.ref_status,
        id: "referStatus",
        header: "Referral status",
        Header: ({ column }) => {
          return <p style={{ color: "#333333" }}>{column.columnDef.header}</p>;
        },
        Cell: ({ row }) => {
          const passedChecks = row.original.referStatus.checks;
          const honestStatus = !passedChecks
            ? {
                color: "red",
              }
            : { color: "#d2d2d2" };
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#333333",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                {row.original.referStatus.ref_status}
              </span>
              <span style={honestStatus}>
                {row.original.referStatus.passed_status}
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    ...tableConfig,
  });
  return (
    <div className="table-container">
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Table;
