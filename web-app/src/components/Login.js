import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { login, getUserById } from "../api"

const Login = ({ open, setOpen, setProfile }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const onChange = func => e => func(e.target.value);

  const reset = () => {
      setEmail("");
      setPassword("");
  };

  const handleClose = () => setOpen(!open);

  const onLogin = () => {
      setSaving(true);
      login(email, password)
        .then((data) => {  
                localStorage.setItem('auth', data.auth);
                reset();
                setSaving(false); 
                setOpen(false)
                getUserById(email)
                    .then(user => setProfile(user))
            })
        .catch(e => {
            reset();
            setSaving(false);
            setError(e.message);
            setTimeout(() => setError(""), 5000);
        });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                value={email}
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                disabled={saving}
                onChange={onChange(setEmail)}
            />
            <TextField
                autoFocus
                value={password}
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                onChange={onChange(setPassword)}
                disabled={saving}
            />
        </DialogContent>
        {
            error && (<DialogContentText color="error" align="center">{error}</DialogContentText>)
        }
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={saving}>
            Cancel
          </Button>
          <Button onClick={onLogin} color="primary" disabled={saving}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Login.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    setProfile: PropTypes.func.isRequired,
}

export default Login;