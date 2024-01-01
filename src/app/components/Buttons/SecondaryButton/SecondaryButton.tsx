import { ButtonProps } from "@mui/material";
import { SecondaryBtn } from "./styles";

export default function SecondaryButton({ children, ...restProps}: ButtonProps) {
    return(
        <SecondaryBtn {...restProps}>
            {children}
        </SecondaryBtn>
    )
}