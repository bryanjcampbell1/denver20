import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Network from '~/components/common/Network'
import Panel from '~/components/common/Panel'
import { PopupContainer } from '~/components/common/Popup'

import Logo from '~/components/assets/images/logo.svg'

import Wallet from '~/components/assets/images/icons/Wallet_Summary.svg'
import Lend from '~/components/assets/images/icons/Lend.svg'
import Underwrite from '~/components/assets/images/icons/Underwrite.svg'
import Borrow from '~/components/assets/images/icons/Borrow.svg'
import Operate from '~/components/assets/images/icons/Operate.svg'
import Auctions from '~/components/assets/images/icons/Auctions.svg'
import Transfer from '~/components/assets/images/icons/Transfer.svg'
import TransferIcon from '~/components/assets/images/icons/TransferIcon.svg'
import Settings from '~/components/assets/images/icons/Settings.svg'
import Alert from '~/components/assets/images/icons/Alert.svg'
import Arrow from '~/components/assets/images/icons/Arrow.svg'

import Metamask from '~/components/assets/images/wallets/metamask.png'
import Torus from '~/components/assets/images/wallets/torus.png'
import Fortmatic from '~/components/assets/images/wallets/fortmatic.png'

const shorter = (str, len = 18) => {
  return `${str.substr(0, len - 4)}...${str.substr(-4)}`
}

const Wrapper = styled.div`
  display: flex;

  * {
    box-sizing: border-box;
    font-family: Overpass;
    transition: all 0.2s;
  }

  .loading {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const SideBar = styled.div`
  .sidebar {
    height: 100vh;
    overflow: hidden;
    color: black;

    background: linear-gradient(180deg, #2d3b64 0%, #46bb9d 100%);
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    width: 64px;

    margin: 0;
    list-style: none;
    padding: 0;

    li.item {
      a {
        color: transparent;
        cursor: pointer;
        padding: 10px;
        text-decoration: none;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 10px;
        line-height: 15px;
      }

      &:not(.active):hover a {
        color: white;
        background: rgba(83, 199, 191, 0.1);
      }

      &.active a {
        background: rgba(83, 199, 191, 0.5);
        color: white;
      }
    }

    hr {
      margin: 12px 8px;
      opacity: 0.2;
      border: 0;
      border-top: 1px solid #ffffff;
    }

    .logo {
      padding: 12px 14px;

      a {
        display: flex;
        align-items: center;
      }
    }

    .wallet-icon {
      width: 48px;
      height: 48px;
      padding: 10px;
      margin: 12px auto;
      cursor: pointer;

      background: rgba(13, 35, 60, 0.5);
      border-radius: 32px;

      img {
        width: 100%;
      }
    }

    .trasnfer-icon {
      position: relative;
      display: flex;

      .icon {
        position: absolute;
        left: 6px;
        top: 6px;
      }

      .notifier {
        position: absolute;
        right: -3px;
        top: -3px;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: #f7931a;
        border: 2px solid #3b8484;
      }
    }

    li.action {
      padding: 12px;
      text-align: center;

      img {
        cursor: pointer;
      }
    }

    &.open {
      width: 180px;
    }
  }
`

const Content = styled.div`
  width: 100%;

  .content-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 14px 28px;

    .type {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      padding: 7px;
      background: #ffffff;
      border: 1px solid #f0f0f0;
      box-sizing: border-box;
      margin-right: 8px;

      img {
        width: 100%;
      }
    }

    .dropdown {
      background: #f2f2f2;
      border: 1px solid #ebebf1;
      box-sizing: border-box;
      border-radius: 4px;

      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #292929;

      position: relative;
      padding: 4px 32px 2px 10px;

      span {
        color: #949494;
        text-transform: capitalize;
      }

      > img {
        position: absolute;
        right: 14px;
        top: 11px;
        cursor: pointer;
      }
    }
  }

  .content {
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    overflow: auto;
    width: 100%;
  }
`

const tabs = [
  ['Summary', '/', Wallet],
  ['Lender', '/lender', Lend],
  ['Underwriter', '/underwriter', Underwrite],
  ['Borrower', '/borrower', Borrow],
  ['Operate', '/pool-operator', Operate],
  // ['Acuctions', '/1', Auctions],
]

const wallets = {
  metamask: Metamask,
  torus: Torus,
  fortmatic: Fortmatic,
}

export default function({ type, library, address, onProvider, onPanel, ...props }) {
  const router = useRouter()
  const [network, setNetwork] = useState(false)

  useEffect(() => {
    onPanel(null)
  }, [router.pathname])

  return (
    <Wrapper>
      <SideBar>
        <ul className="sidebar">
          <li className="logo">
            <Link href="/">
              <a>
                <img src={Logo} />
              </a>
            </Link>
          </li>
          <li className="wallet">
            <div className="wallet-icon">
              <img src={wallets[type]} />
            </div>
          </li>
          {tabs.map(([tab, url, icon], idx) => (
            <li
              key={idx}
              className={router.pathname === url ? 'item active' : 'item'}
            >
              <Link href={url}>
                <a>
                  <img src={icon} />
                  {tab}
                </a>
              </Link>
            </li>
          ))}
          {/* <hr />
          <li className="item transfer">
            <Link href="/">
              <a>
                <div className="trasnfer-icon">
                  <img src={Transfer} />
                  <img src={TransferIcon} className="icon" />
                  <div className="notifier" />
                </div>
              </a>
            </Link>
          </li> */}
          <hr />
          <li className="action setting">
            <img src={Settings} />
          </li>
          <li className="action alert">
            <img src={Alert} />
          </li>
        </ul>
      </SideBar>
      <Content>
        <div className="content-header">
          <div className="type">
            <img src={wallets[type]} />
          </div>
          <div className="dropdown" onClick={() => setNetwork(true)}>
            <div className="address">
              {shorter(address)} <span>({type})</span>
            </div>
            <img src={Arrow} />
          </div>
          {network && (
            <Network
              active={type}
              onSelect={onProvider}
              onClose={() => setNetwork(false)}
            />
          )}
        </div>
        <div className="content" {...props} />
      </Content>
      {props.panel && <Panel {...props.panel} library={library} />}
      <PopupContainer />
    </Wrapper>
  )
}
