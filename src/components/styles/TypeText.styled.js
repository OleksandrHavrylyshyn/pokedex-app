import styled from "styled-components";
import { types_colors } from "../../service/types";

export const TypeText = styled.div`
    background-color: ${({type}) => types_colors[type]};
    border-radius: 8px;
    padding: 3px;
`