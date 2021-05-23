import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createUser, updateUser } from "../api"

const Profile = ({ open, setOpen, profile, reload }) => {
  const isEdit = profile !== null && profile !== undefined;
  const [name, setName] = useState(isEdit && profile.name || "");
  const [email, setEmail] = useState(isEdit && profile.email || "");
  const [password, setPassword] = useState(isEdit && profile.password || "");
  const [profilePic, setProfilePic] = useState(isEdit && profile.profilePic || "");

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const onChange = func => e => func(e.target.value);

  const handleClose = () => setOpen(!open);

  const onSave = () => {
      setSaving(true);
      let res;
      if (isEdit) {
          res = updateUser(email, name, profilePic);
      } else {
          res = createUser(name, email, password);
      }
      res.then((data) => {
        if (data && data.msg) {
            setError(data.msg);
            setSaving(false);
            setTimeout(() => setError(""), 5000);
            return;
        }  
        reload();
        setOpen(false);
      });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{`${isEdit? "Edit" : "Create"} profile`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your information here
          </DialogContentText>
          <TextField
            autoFocus
            value={email}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            disabled={isEdit || saving}
            onChange={onChange(setEmail)}
          />
          <TextField
            autoFocus
            value={name}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={onChange(setName)}
            disabled={saving}
          />
          { !isEdit && (
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
          )}
          {isEdit && (
              <TextField 
              autoFocus
              value={profilePic}
              margin="dense"
              id="profilePic"
              label="image"
              type="image"
              fullWidth
              onChange={onChange(setProfilePic)}
              disabled={saving}
              />
          )}
        </DialogContent>
        { error && (<DialogContentText color="error" align="center">{error}</DialogContentText>) }
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={saving}>
            Cancel
          </Button>
          <Button onClick={onSave} color="primary" disabled={saving}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Profile.propTypes = {
    open: PropTypes.bool.isRequired,
    profile: PropTypes.shape({
         name: PropTypes.string,
         email: PropTypes.string,
         password: PropTypes.string,
         profilePic: PropTypes.object }),
    setOpen: PropTypes.func.isRequired,
    reload: PropTypes.func.isRequired     
}

Profile.defaultProps = {
    profile: null,
}

export default Profile;