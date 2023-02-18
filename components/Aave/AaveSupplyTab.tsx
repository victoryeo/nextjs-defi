import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import styles from "./Aave.module.css";

export const AaveSupplyTab = ({ listTab, setStatusFilter, status }: any) => {
  return(
    <TableContainer>
      <Table>
        <TableHead>
          {listTab.map((e, index) => (
            <TableRow key={index} > 
              <TableCell style={{width: '15%'}} className={styles.tokenHeader}>
                {e.tokenName}
              </TableCell>
              <TableCell style={{width: '25%'}} className={styles.tokenHeader}>
                {e.balance}
              </TableCell>
              <TableCell style={{width: '20%'}} className={styles.tokenHeader}>
                {e.rate}
              </TableCell>
              <TableCell style={{width: '20%'}} className={styles.tokenHeader}>
                {e.collateral}
              </TableCell>
              <TableCell style={{width: '20%'}} className={styles.tokenHeader}>
                {e.action}
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </TableContainer>
  )
}