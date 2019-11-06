import React from "react";
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 300px;
  padding: 10px;
  border: 2px solid gray;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  
  &:focus {
    outline: none;
    box-shadow: 0 4px 7px rgba(0, 255, 255, 0.5);
    
  }
`;

export const Form = () => {
    const hoverHandler = () => console.log("Click input");
    return (
        <FormWrapper>
            <StyledForm>
                <StyledInput onClick={hoverHandler} type="text" />
                <StyledInput onClick={hoverHandler} type="text" />
                <button type="submit" >Submit</button>
            </StyledForm>
        </FormWrapper>
    );
};

