import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { indigo } from '@material-ui/core/colors';

import { apiPostCall } from "../../utils/apicall"; 
import AlertSnackbar from "../../Common/Feedback/AlertSnackbar";
import Copyright from "../../Common/Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: indigo[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const initSumbit = () => {
    setIsSubmitOpen(false);
    setLoading(true);

    setUsernameError("");
    setPasswordError("");
  }
  
  const finishSumbit = () => {
    setIsSubmitOpen(true);
    setLoading(false);  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    initSumbit();

    const endpoint = 'users/'
    const formData = new FormData();
    formData.append('name', username); 
    formData.append('password', password); 
    formData.append('password_confirm', passwordConfirm);

    const responseCallback = function (response) {
        if (response.status === 201) {
            history.push('/user/login')
        }
    };

    const failCallback = function (res) {
    if (res.response === undefined) {
        setSnackbarOpen(true);
    } else if (res.response.status === 409) {
        setUsernameError("User name already exists");
    } else if (res.response.status === 400) {
        setPasswordError("Check your password");
    }};

    const finalCallback = finishSumbit;

    apiPostCall({
        endpoint,
        formData,
        responseCallback,
        failCallback,
        finalCallback

    })
}
  useEffect(()=>{
    if (username === "" || password === "") {
        setIsSubmitOpen(false);
    } else if (password !== passwordConfirm){
        setIsSubmitOpen(false);
        if (passwordConfirm !== "") {
          setPasswordConfirmError("Password and Confirm password have to match")
        }
    } else {
      setPasswordConfirmError("");
      setIsSubmitOpen(true);
    }
  }, [username, password, passwordConfirm])

  
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setSnackbarOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={e=>setUsername(e.target.value)}
            helperText={usernameError}
            error={usernameError !== ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            helperText={passwordError}
            error={passwordError !== ""}
            disabled={username === ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordConfirm}
            onChange={e=>setPasswordConfirm(e.target.value)}
            helperText={passwordConfirmError}
            error={passwordConfirmError !== ""}
            disabled={password === ""}    
          />
          <div className={classes.wrapper}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!isSubmitOpen}
                onClick={e=>handleSubmit(e)}
            >
                Sign up
            </Button>
            {loading && <CircularProgress size={32} className={classes.buttonProgress} />}
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="login" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <AlertSnackbar open={snackbarOpen} handleClose={handleSnackbarClose} severity="error" />
    </Container>
  );
}

function UserJoin() {
    return (
          <SignUp />
    );
  }
  
export default UserJoin;
  