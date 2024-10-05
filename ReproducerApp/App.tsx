import React, {useState, memo} from 'react';
import {TextInput} from 'react-native';

let App = () => {
  console.log('render App');
  const [outlet, setOutlet] = useState(null);
  return (
    <>
      <Outlet outlet={outlet} />
      <Child setOutlet={setOutlet} />
    </>
  );
};
export default App;

let Child = memo(({setOutlet}) => {
  console.log('render Child');
  const [value, setValue] = useState('');
  return (
    <Portal setOutlet={setOutlet}>
      <TextInput
        onChangeText={text => setValue(text)}
        value={value}
        multiline
        style={{
          backgroundColor: 'red',
          marginTop: 200,
        }}
      />
    </Portal>
  );
});

let Outlet = memo(({outlet}) => {
  console.log('render Outlet');
  return outlet;
});

let Portal = memo(({children, setOutlet}) => {
  console.log('render Portal');
  React.useLayoutEffect(() => {
    setOutlet(children);
  }, [children]);
  return null;
});
