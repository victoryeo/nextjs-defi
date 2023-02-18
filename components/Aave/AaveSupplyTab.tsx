import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import styles from "./Aave.module.css";

export const AaveSupplyTab = ({ listTab, setStatusFilter, status }: any) => {
  return(
    <TableContainer>
    <Table>
        <TableHead className={styles.tokenHeader}>
          <TableRow>
            {listTab.map((x, index) => (
              <TableCell key={index}>{x.header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
    </Table>
    </TableContainer>

  )
}