import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React, { useState } from "react";

function LeaderBoardTable({
  columns,
  rows,
  sxTable,
  sxTableCell,
  sxTableCellHeader,
  sxTableRow,
  sxTableContainer,
  hover = false,
  activeCell = false,
  handleClickRow,
}) {
  const [activeRow, setActiveRow] = useState(null);

  const onClickRow = (row) => {
    if (!activeCell) return;
    setActiveRow(row.rank);
    handleClickRow(row);
  };

  return (
    <TableContainer className="TableContainer" sx={sxTableContainer}>
      <Table
        stickyHeader
        style={{ background: "#1E193B" }}
        sx={sxTable}
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow sx={{ sxTableRow }}>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                sx={{ ...sxTableCellHeader, ...column.sx }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {rows.length ? (
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  hover={hover && activeRow !== row.rank}
                  tabIndex={-1}
                  selected={activeRow === row.rank}
                  sx={{
                    ...sxTableRow,
                    cursor: "pointer",
                  }}
                  classes={{
                    root: {
                      border: "1px solid red",
                    },
                  }}
                  onClick={() => onClickRow(row)}
                >
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={index}
                        sx={{ ...column.sx, ...sxTableCell }}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        ) : (
          <TableBody className="absolute text-center">
            <TableRow>
              <TableCell sx={{ border: "none", color: "#ffffff" }}>
                No results
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

export default React.memo(LeaderBoardTable);
