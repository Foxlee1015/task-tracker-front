import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


import useFetch from "../../utils/hooks/useFetch";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

export default function CreateTaskSelectLinks({setSelectedLinks}) {
    const [links, loading] = useFetch(`${process.env.REACT_APP_API_URL}/links`);
    const classes = useStyles();
    const [checked, setChecked] = useState([]);
    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
  
    useEffect(()=>{
      setSelectedLinks(checked)
    }, [checked])
  
    return (
      <List className={classes.root}>
        {links && links.length > 0 && links.map(({id, url, description, image_url}) => {
          const labelId = `checkbox-list-label-${id}`;
  
          return (
            <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={description} />
            </ListItem>
          );
        })}
      </List>
    );
  }