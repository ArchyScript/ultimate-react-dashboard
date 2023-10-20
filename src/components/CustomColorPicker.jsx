import React from 'react';
import PropTypes from 'prop-types'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { useStateContext } from '../contexts/ContextProvider';

const CustomColorPicker = ({ id, mode, showButtons }) => {
  const { setColor } = useStateContext();

  const change = (args) => {
    document.getElementById(id).style.backgroundColor = args.currentValue.hex;
    setColor(args.currentValue.hex)
  };

  return (
    <ColorPickerComponent id={ id } mode={ mode } modeSwitcher={ false } inline showButtons={ showButtons } change={ change } />
  )
};


CustomColorPicker.propsTypes = {
  id: "",
  mode: "",
  showButtons: false,
}

export default CustomColorPicker;