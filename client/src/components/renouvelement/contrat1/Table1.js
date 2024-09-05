import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import axios from "axios";

function Table1() {
  const [records, setRecord] = useState([]);

  //voir tout le liste
  const getAllUser = async () => {
    let response = await axios.get("http://localhost:4050/api_contrat1");
    setRecord(response.data);
  };
  useEffect(() => {
    getAllUser();
  }, []);

  function preventDefault(event) {
    event.preventDefault();
  }
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Prenom</TableCell>
            <TableCell>CIN</TableCell>
            <TableCell>CISCO</TableCell>
            <TableCell>Diplome</TableCell>
            <TableCell>Telephone</TableCell>
            <TableCell>Date de naissance</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((contrat1) => (
            <TableRow key={contrat1.id}>
              <TableCell>{contrat1.nom}</TableCell>
              <TableCell>{contrat1.prenom}</TableCell>
              <TableCell>{contrat1.CIN}</TableCell>
              <TableCell>{contrat1.cisco}</TableCell>
              <TableCell>{contrat1.diplome}</TableCell>
              <TableCell>{contrat1.telephone}</TableCell>
              <TableCell>{contrat1.date_naiss}</TableCell>
              <TableCell>{contrat1.service}</TableCell>
              <TableCell align="right">
                <h6>Views</h6>
                <h6>Delete</h6>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}

export default Table1;
