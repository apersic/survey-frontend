import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { responsive } from "../../styles/utils/responsive";

export const SurveyTitle = styled.h1`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 4.5rem;
    line-height: 4.5rem;
    margin-bottom: 16px;
    text-align: center;

    ${responsive.tablet_portrait} {
        font-size: 3.5rem;
        line-height: 3.5rem;
    }

    ${responsive.phone} {
        font-size: 3rem;
        line-height: 3rem;
    }
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${colors.grey};
    padding: 32px 64px;

    ${responsive.tablet_portrait} {
        padding: 32px 16px;
    }
`;