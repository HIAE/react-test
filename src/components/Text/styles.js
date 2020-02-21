import styled, {css} from 'styled-components';

export const TextStyle = styled.p`
    color: #000;
    margin-right: 5px;

    ${props => props.type === "Title" && css`
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1.3;
    `}

    ${props => props.type === "Headline" && css`
        font-size: 16px;
    `}

    ${props => props.type === "Content" && css`
        font-size: 14px;
        color: #ddd;
    `}
`;
