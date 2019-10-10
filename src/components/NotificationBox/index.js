import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ClickOutSide } from '../ClickOutSide';


const NotificationBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  border: 1px dotted lightgrey;
`;

const ToolTip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  background-color: lightsteelblue;
`;

const Button = styled.button`
  margin-top: auto;
`;

const NotificationBox = props => {
    const [ isNoteVisible, setVisibility ] = useState(false);
    const showNote = () => setVisibility(true);
    const hideNote = () => setVisibility(false);
    return (
        <NotificationBoxContainer>
            {isNoteVisible && (
                <ClickOutSide onClick={hideNote}>
                    <ToolTip>Your are cool!</ToolTip>
                </ClickOutSide>
            )}
            <Button onClick={showNote}>Show Note</Button>
        </NotificationBoxContainer>
    );
};

NotificationBox.propTypes = {

};

export default NotificationBox;
