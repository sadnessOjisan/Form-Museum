import * as React from 'react'
import styled from 'styled-components'
import Avatar from 'react-avatar'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { actions as kintaiActions } from '../../redux/module/kintai'
import { ITracker } from '../../typedef/Tracker'
import { genLog } from '../../helper/util'
import { EVENT_TYPE } from '../../const/event'
import { COLOR } from '../../const/color'

interface OwnProps {
  readonly className?: string
  readonly onClick?: any
  readonly pageTitle: string
}

interface DispatchProps {
  openModal: typeof kintaiActions.openModal
}

type IProps = OwnProps & DispatchProps

const TEST_OR_TRACK_TARGET = {
  kintaiModalOpener: 'kintai-modal-opener',
}

const Header = (props: IProps) => {
  const { className, openModal, pageTitle } = props
  return (
    <Wrapper className={className} data-testid="header">
      <LeftArea>
        <div>{pageTitle}</div>
      </LeftArea>
      <RightArea>
        <Avatar githubHandle="sitebase" size={50} round={true} />
        <Link
          onClick={() => openModal(openModalLog)}
          data-testid={TEST_OR_TRACK_TARGET.kintaiModalOpener}
        >
          勤怠
        </Link>
        <Link href="/login">ログアウト</Link>
      </RightArea>
    </Wrapper>
  )
}

const openModalLog = genLog({
  eventType: EVENT_TYPE.click,
  target: TEST_OR_TRACK_TARGET.kintaiModalOpener,
  eventName: 'openModal',
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  openModal: (log: ITracker) => dispatch(kintaiActions.openModal(log)),
})

const ConnectedHeader = connect(
  undefined,
  mapDispatchToProps
)(Header)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: ${COLOR.white};
  padding: 12px;
`

const LeftArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const RightArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 32px;
  }
`

const Link = styled.a`
  color: ${COLOR.peachYellow};
  cursor: pointer;
  text-decoration: underline;
`

export { ConnectedHeader as Header }
