import * as React from 'react'
import styled from 'styled-components'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { SideBarItem } from './SideBarItem'
import { withRouter, RouteComponentProps } from 'react-router'
import { track } from '../../redux/module/logging'
import { ITracker } from '../../typedef/Tracker'
import { genClickLog } from '../../helper/util'
import { COLOR } from '../../const/color'

interface DispatchProps {
  track: typeof track
}

interface IProps extends RouteComponentProps {
  className?: string
  width: number
}

const TEST_OR_TRACK_TARGET = {
  sidebar: 'sidebar',
  kuso: 'sidebar-item-kuso',
  masi: 'sidebar-item-masi',
  withButton: 'sidebar-item-with-button',
  order: 'sidebar-item-order',
}

const SideBar = (props: IProps & DispatchProps) => {
  const { className, history, location, track, width } = props
  const { push } = history
  const { pathname } = location
  return (
    <Wrapper
      className={className}
      data-testid={TEST_OR_TRACK_TARGET.sidebar}
      width={width}
    >
      <LogoBox>
        <span>Kekkon</span>
        <span>
          siyo<span style={{ color: 'pink' }}>♡</span>
        </span>
      </LogoBox>
      <Hr />
      <SideBarItem
        name="kuso"
        onClick={() => {
          track(
            genClickLog('sidebar-click', TEST_OR_TRACK_TARGET.kuso, undefined)
          )
          push('/')
        }} // 遷移を全部sagaにやらせてもよかったかも？
        selected={pathname === '/'}
        dataTestId={TEST_OR_TRACK_TARGET.kuso}
      />
      <SideBarItem
        name="masi"
        onClick={() => {
          track(
            genClickLog('sidebar-click', TEST_OR_TRACK_TARGET.masi, undefined)
          )
          push('/masi')
        }}
        selected={pathname === '/masi'}
        dataTestId={TEST_OR_TRACK_TARGET.masi}
      />
      <SideBarItem
        name="with-button"
        onClick={() => {
          track(
            genClickLog(
              'sidebar-click',
              TEST_OR_TRACK_TARGET.withButton,
              undefined
            )
          )
          push('/with-button')
        }}
        selected={pathname === '/with-button'}
        dataTestId={TEST_OR_TRACK_TARGET.withButton}
      />
      <SideBarItem
        name="order"
        onClick={() => {
          track(genClickLog('order', TEST_OR_TRACK_TARGET.order, undefined))
          push('/order')
        }}
        selected={pathname === '/order'}
        dataTestId={TEST_OR_TRACK_TARGET.order}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width}px;
  height: 100%;
  background-color: ${COLOR.white};
  border-right: solid 1px ${COLOR.darkGray};
`

const LogoBox = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Hr = styled.hr`
  　width: 80%;
`

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

const ConnectedSidebar = connect(
  undefined,
  mapDispatchToProps
)(withRouter(SideBar))

export { ConnectedSidebar as SideBar }
