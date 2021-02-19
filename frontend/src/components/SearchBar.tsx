import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { User } from 'types/users';

const useStyles = makeStyles(() => ({
  input: {
    backgroundColor: 'white',
    height: '35px',
  },
}));

export interface SearchBarProps {
  users: User[];
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const classes = useStyles();
  const history = useHistory();

  const { users, isLoading } = props;

  let options: User[] = [];
  const value: User | null = null;

  if (Array.isArray(users) && users.length > 0) {
    options = Object.keys(users).map((key) => users[key]) as User[];
  }

  const handleInputChange = (username: string) => {
    const currentUserName = username;
    if (currentUserName !== '') {
      const currenRoute = `/users/${currentUserName}`;
      history.push(currenRoute);
      options = [];
    }
  };

  return (
    <Autocomplete
      id="search-user"
      style={{ width: 300 }}
      options={options}
      autoHighlight
      getOptionLabel={(option) => option.username}
      value={value}
      clearOnEscape
      onChange={(event: any, newValue: User | null) => {
        if (newValue) {
          handleInputChange(newValue.username);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          id="search-input"
          style={{ margin: 8 }}
          placeholder="Search user"
          fullWidth
          margin="normal"
          InputLabelProps={{}}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            className: classes.input,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
