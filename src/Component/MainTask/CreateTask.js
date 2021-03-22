import React, {useState, useEffect} from "react";

import InputBasic from "../../Common/Input/InputBasic";
import CreateTaskInputDate from "./CreateTaskInputDate";
import CreateTaskInputRepeatType from "./CreateTaskInputRepeatType";
import CreateTaskSelectLinks from "./CreateTaskSelectLinks";

import { apiPostCall } from "../../utils/apicall";
import { getDateTime } from "../../utils/utils";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
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
        <div>
            <Button onClick={e=>setShowInputs(true)} color="primary">Create a New task</Button>
            <div>
                {showInputs && (
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={showInputs}
                    onClose={e=>setShowInputs(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={showInputs}>
                      <div className={classes.paper}>
                        <h2 id="transition-modal-title">New task</h2>
                        <p id="transition-modal-description">Creat a new task</p>
                        <CreateTaskInputs />
                      </div>
                    </Fade>
                  </Modal>)}
            </div>
        </div>
  );
}
export default CreateTask;

function CreateTaskInputs() {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [text, setText] = useState("");
    const [textError, setTextError] = useState("");
    const [startDate, setStartDate] = useState(getDateTime());
    const [endDate, setEndDate] = useState("");
    const [repeatType, setRepeatType] = useState(0);
    const [selectedlinks, setSelectedLinks] = useState([]);
    
    const [submitOpen, setSubmitOpen] = useState(false);

    useEffect(()=>{
      if (title === "" || text === "") {
        setSubmitOpen(false);
      } else {
        setSubmitOpen(true);
      }
    }, [title, text])

    const handleSubmit = () => {

      const endpoint = 'tasks/groups';

      const formData = new FormData();
      formData.append('title', title); 
      formData.append('text', text); 
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
      console.log(startDate, endDate);
    }, [startDate, endDate])

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
      <div>
        <InputBasic
            value={title} 
            setValue={setTitle} 
            placeholder="Title"
            autoFocus={true}
        />
        <InputBasic
            value={text} 
            setValue={setText} 
            placeholder="Text"
        />

        <CreateTaskSelectLinks setSelectedLinks={setSelectedLinks} />
        <CreateTaskInputRepeatType repeatType={repeatType} setRepeatType={setRepeatType} />
        <CreateTaskInputDate selectedDate={startDate} setSelectedDate={setStartDate} label="Task Start date" />
        {repeatType !== 0 && <CreateTaskInputDate selectedDate={endDate} setSelectedDate={setEndDate} label="Task end date" />}
        <Button disabled={!submitOpen} onClick={e=>handleSubmit()} color="primary">Create</Button>
            
      </div>
    );
}
