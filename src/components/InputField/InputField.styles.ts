import styled from "styled-components";
import { colors } from "../../styles/base/colors";

export const InputField = styled.div<{ $error?: boolean }>`
    width: 100%;
    border-radius: 4px;
    background-color: ${colors.grey2};
    padding: 4px 8px;

    ${({ $error }) => {
        if ($error) {
            return `
                border-color: ${colors.error};

                & > span.error {
                    position: absolute;
                    bottom: -1.5rem;
                    color: ${colors.error};
                    text-transform: capitalize;
                }
            `;
        }
    }}
`;