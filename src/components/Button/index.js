import React from 'react';
import styled from 'styled-components';

import { OuterContext, InnerContext } from '../../pages/Context.js';

const StyledButton = styled.button`
  padding: 10px 20px;
  color: ${props => (props.theme === 'light' ? "blue" : "red")};
  background-color: ${props => (props.theme === 'light' ? "white" : "black")};
  border: 1px solid;
  border-color: ${props => (props.theme === 'light' ? "blue" : "red")};
`;

const Button = () => {
    return (
        <OuterContext.Consumer>
            {({ themeMode }) => {
                console.log("OuterContext themeMode =>", themeMode);
                return (
                    <InnerContext.Consumer>
                        {({ themeMode }) => {
                            console.log("InnerContext themeMode =>", themeMode);
                            return (
                                <StyledButton
                                    theme={themeMode}
                                >
                                    Click me
                                </StyledButton>
                            )
                            }
                        }
                    </InnerContext.Consumer>
                )
                }
            }
        </OuterContext.Consumer>
    );
};

export default Button;
