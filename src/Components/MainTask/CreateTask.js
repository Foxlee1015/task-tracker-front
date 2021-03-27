import React, {useState, useEffect} from "react";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

import CreateTaskInputDate from "./CreateTaskInputDate";
import CreateTaskInputRepeatType from "./CreateTaskInputRepeatType";
import CreateTaskSelectLinks from "./CreateTaskSelectLinks";

import { apiPostCall } from "../../utils/apicall";
import { getDateTime } from "../../utils/utils";
import { useTextField, useHelperText } from "../../Common/Input/InputBasic";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    margin: 10
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function CreateTask() {
    const classes = useStyles();
    const [showInputs, setShowInputs] = useState(false);
    return (
        <div className={classes.root}>
            <Button 
              variant="contained" 
              onClick={e=>setShowInputs(true)} 
              color="primary">
              Create a New task
            </Button>
            {showInputs && (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={showInputs}
                onClose={e=>setShowInputs(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500}}>
                <Fade in={showInputs}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">New task</h2>
                    {/* <p id="transition-modal-description">Creat a new task</p> */}
                    <CreateTaskInputs />
                  </div>
                </Fade>
              </Modal>)}
        </div>
  );
}
export default CreateTask;

function CreateTaskInputs() {
    const [startDate, setStartDate] = useState(getDateTime());
    const [endDate, setEndDate] = useState("");
    const [repeatType, setRepeatType] = useState(0);
    const [selectedlinks, setSelectedLinks] = useState([]);
    const [submitOpen, setSubmitOpen] = useState(false);

    const taskNameTextField = useTextField({id:"text", label:"Task Name", autoFocus:true});
    const taskNameHelperText = useHelperText();
    const taskDetailTextField = useTextField({
      id:"text", label:"Task Dedatils", multiline:true, rowsMax:4});
    const taskDetailHelperText = useHelperText();

    useEffect(()=>{
      setSubmitOpen(false);

      if (taskNameTextField.value.length > 40 ) {
        taskNameHelperText.setHelperText("Max 40 letters")
      } else if (taskDetailTextField.value.length > 200 ) {
        taskDetailHelperText.setHelperText("Max 200 letters")
      } else {
        taskNameHelperText.setHelperText("")
        taskDetailHelperText.setHelperText("")
        setSubmitOpen(true);
      }
    }, [taskNameTextField, taskDetailTextField, taskNameHelperText, taskDetailHelperText])

    const handleSubmit = () => {

      const endpoint = 'tasks/groups';
      const formData = new FormData();
      formData.append('title', taskNameTextField.value); 
      formData.append('text', taskDetailTextField.value);
      formData.append('repeat_type', repeatType);
      formData.append('selected_date', startDate); 
      formData.append('end_date', endDate); 
      formData.append('link_ids', selectedlinks); 

      const responseCallback = function (response) {
          if (response.status === 201) {
            console.log(response);
            window.location.reload();
          }
      };

      const failCallback = function (res) {
      if (res.response === undefined) {
          console.log('1')
      } else if (res.response.status === 404) {        
        console.log('2')
      } else if (res.response.status === 400) {
        console.log('3')
      }};

      const finalCallback = () => {};

      apiPostCall({
          endpoint,
          formData,
          responseCallback,
          failCallback,
          finalCallback

      })
    };

    useEffect(()=>{
      let newEndDate = ""
      switch (repeatType) {
        case 0:
          setEndDate("");
          break;
        case 1:
          newEndDate = getDateTime({add_month:3});
          setEndDate(newEndDate);
          break;
        case 2:
          newEndDate = getDateTime({add_month:9});
          setEndDate(newEndDate);
          break;
        case 3:
          newEndDate = getDateTime({add_year:3});
          setEndDate(newEndDate);
          break;
        case 4:
          newEndDate = getDateTime({add_month:6});
          setEndDate(newEndDate);
          break;
        default:
          setEndDate("");
          break;
      }
    }, [repeatType])

    return (
      <>
        <TextField 
          {...taskNameTextField}
          error={taskNameHelperText.helperText!== ""}
          helperText={taskNameHelperText.helperText}
        />
        <TextField 
          {...taskDetailTextField}
          error={taskDetailHelperText.helperText!== ""}
          helperText={taskDetailHelperText.helperText}
          disabled={taskNameTextField.value===""}
        />
        <CreateTaskSelectLinks 
          setSelectedLinks={setSelectedLinks} />
        <CreateTaskInputRepeatType 
          repeatType={repeatType} 
          setRepeatType={setRepeatType} />
        <CreateTaskInputDate 
          selectedDate={startDate} 
          setSelectedDate={setStartDate} 
          label="Task Start date" />
        {repeatType !== 0 && (
          <CreateTaskInputDate 
            selectedDate={endDate} 
            setSelectedDate={setEndDate} 
            label="Task end date" />
          )}
        <Button 
          disabled={!submitOpen || taskNameTextField.value === "" || taskDetailTextField.value === ""}
          onClick={e=>handleSubmit()} 
          color="primary">
            Create
          </Button>
      </>
    );
}
