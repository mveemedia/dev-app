import React from 'react';
import { TextField, Button } from '@mui/material';

const ModificaInfoUtenteForm = () => {
  const [nome, setNome] = React.useState('');
  const [cognome, setCognome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Submit the form data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="cognome"
        label="Cognome"
        variant="outlined"
        value={cognome}
        onChange={(e) => setCognome(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"

        
variant="outlined"

        
value={email}

        
onChange={(e) => setEmail(e.target.value)}
      />
      <Button
 
type="submit"
 
variant="contained"
 
color="primary">Modifica</Button>
    </form>
  );
};

export default ModificaInfoUtenteForm;