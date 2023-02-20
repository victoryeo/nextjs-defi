import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import styles from "./Aave.module.css";

export const AaveBorrowTab = ({ listTab, setStatusFilter, status }: any) => {
  return(
    <TableContainer>
      <Table>
        <TableHead>
          {listTab.map((e, index) => (
            <TableRow key={e.tokenName} > 
              <TableCell style={{width: '15%'}} className={styles.tokenHeader}>
                {e.tokenName}
              </TableCell>
              <TableCell style={{width: '25%'}} className={styles.tokenHeader}>
                {e.available}
              </TableCell>
              <TableCell style={{width: '20%'}} className={styles.tokenHeader}>
                {e.varrate}
              </TableCell>
              <TableCell style={{width: '20%'}} className={styles.tokenHeader}>
                {e.stablerate}
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