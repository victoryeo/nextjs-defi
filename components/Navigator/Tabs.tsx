import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../../styles/Tab.module.css"
import Aave from "../Aave/Aave"
import Zerox from "../Zerox/Zerox"
import Uniswap from "../Uniswap/Uniswap"

const Tabs = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  const isTabThree = tab === "3"
  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/", query: { tab: "1" } }}>
            <a>Aave</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/", query: { tab: "2" } }}>
            <a>0x</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: "/", query: { tab: "3" } }}>
            <a>Uniswap</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment><Aave/></React.Fragment>}
        {isTabTwo && <React.Fragment><Zerox/></React.Fragment>}
        {isTabThree && <React.Fragment><Uniswap/></React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(Tabs)