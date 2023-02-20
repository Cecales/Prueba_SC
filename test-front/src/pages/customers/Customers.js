import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, Typography } from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Components
import CustomersModal from "../../components/CustomersModal";

// Services
import {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} from "../../services/CustomersServices";

const columns = [
  { id: "documentType", label: "Tipo Identificación" },
  { id: "documentNumber", label: "Identificación", minWidth: 80 },
  { id: "name", label: "Nombre", minWidth: 170 },
  { id: "city", label: "Ciudad", minWidth: 100 },
  {
    id: "address",
    label: "Dirección",
    minWidth: 120,
    align: "right",
  },
  {
    id: "phone",
    label: "Teléfono",
    minWidth: 170,
    align: "right",
  },
  {
    id: "actions",
    label: "",
    minWidth: 60,
    align: "right",
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    if (openModal) setCustomer(null);
    setOpenModal(!openModal);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCreateCustomer = async (customer) => {
    await createCustomer(customer);
    await loadCustomers();
    handleModal();
  };

  const handleUpdateCustomer = async (customer, idCustomer) => {
    await updateCustomer(idCustomer, customer);
    await loadCustomers();
    handleModal();
  };

  const updateCustomerAction = async (customer) => {
    setCustomer(customer);
    handleModal();
  };

  const deleteCustomerAction = async (customerId) => {
    await deleteCustomer(customerId);
    await loadCustomers();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const loadCustomers = async () => {
    const response = await getCustomers();
    setCustomers(response.data.data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <>
      <Typography>USUARIOS</Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {customers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  row.actions = (
                    <Grid item xs={8}>
                      <EditIcon onClick={() => updateCustomerAction(row)}/>
                      <DeleteIcon onClick={() => deleteCustomerAction(row._id)}/>
                    </Grid>
                  );
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <CustomersModal
        open={openModal}
        handleClose={handleModal}
        customer={customer}
        handleCreate={handleCreateCustomer}
        handleUpdate={handleUpdateCustomer}
      />
      <Grid item xs={8}>
        <Button onClick={handleModal}>Crear Cliente</Button>
      </Grid>
    </>
  );
}
