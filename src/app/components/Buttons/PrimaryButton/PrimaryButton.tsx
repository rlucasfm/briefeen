import { ButtonProps } from "@mui/material";
import { PrimaryBtn } from "./styles";

export default function PrimaryButton({ children, ...restProps}: ButtonProps) {
    return(
        <PrimaryBtn {...restProps}>
            {children}
        </PrimaryBtn>
    )
}