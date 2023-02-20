import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";

export default function CustomersModal(props) {
  const [documentType, setDocumentType] = useState(null);
  const [documentNumber, setDocument] = useState(null);
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);

  const createCustomer = async () => {
    await props.handleCreate({
      documentType,
      documentNumber,
      name,
      city,
      address,
      phone,
    });
    setDocumentType(null);
    setDocument(null);
    setName(null);
    setCity(null);
    setAddress(null);
    setPhone(null);
  };

  const editCustomer = async () => {
    await props.handleUpdate(
      {
        documentType: documentType ?? props.customer?.documentType,
        documentNumber: documentNumber ?? props.customer?.documentNumber,
        name: name ?? props.customer?.name,
        city: city ?? props.customer?.city,
        address: address ?? props.customer?.address,
        phone: phone ?? props.customer?.phone,
      },
      props.customer._id
    );
    setDocumentType(null);
    setDocument(null);
    setName(null);
    setCity(null);
    setAddress(null);
    setPhone(null);
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {props.customer ? "Editar Usuario" : "Crear Usuario"}
        </DialogTitle>
        <DialogContent dividers={true}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
          >
            <TextField
              id="documnetType"
              label="Tipo Documento"
              color="primary"
              margin="normal"
              required
              fullWidth
              value={documentType ?? props.customer?.documentType}
              onChange={(e) => setDocumentType(e.target.value)}
            />
            <TextField
              id="documentNumber"
              label="Número Documentos"
              color="primary"
              margin="normal"
              required
              fullWidth
              value={documentNumber ?? props.customer?.documentNumber}
              onChange={(e) => setDocument(e.target.value)}
            />
            <TextField
              id="name"
              label="Nombre"
              color="primary"
              margin="normal"
              required
              fullWidth
              value={name ?? props.customer?.name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="city"
              label="Ciudad"
              color="primary"
              margin="normal"
              required
              fullWidth
              value={city ?? props.customer?.city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="address"
              label="Dirección"
              color="primary"
              margin="normal"
              required
              fullWidth
              value={address ?? props.customer?.address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              id="phone"
              label="Teléfono"
              color="primary"
              margin="normal"
              required
              fullWidth
              value={phone ?? props.customer?.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancelar</Button>
          <Button onClick={props.customer ? editCustomer : createCustomer}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
