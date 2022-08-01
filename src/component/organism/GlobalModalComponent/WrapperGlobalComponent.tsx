import React, { Component } from 'react'

import { IGlobalModalOpenProps } from '../../../types'
import { GlobalModalComponent } from './index'

export class GlobalModalWrapper extends Component<unknown, { modals: IGlobalModalOpenProps[] }> {
  state: any = {
    modals: [], // Array maintained for opening multiple modals at the same time
  }

  totalIndex = 0

  open = ({ ...args }: IGlobalModalOpenProps) => {
    const sheet = { ...args }

    const { modals } = this.state

    // isVisible controls the visibility of bottomsheet
    this.totalIndex++
    ;(sheet as any).isOpen = true
    ;(sheet as any).id = this.totalIndex

    // ref controls the bottomsheet behaviour, like closing the sheet our update the modal
    if (!sheet.ref) {
      sheet.ref = React.createRef()
    }

    modals.push({ ...sheet })
    this.setState({ modals })
  }

  close = (index: number = this.state.modals.length - 1) => {
    const { modals } = this.state
    setTimeout(() => {
      modals.splice(index, 1)
      this.setState({ modals })
    }, 200)

    // in order to retain close effect
    if (modals[index]) {
      modals[index].isOpen = false
      this.setState({ modals })
    }
  }

  updateModalProps = (
    { ...props }: { [key: string]: any },
    index: number = this.state.modals.length - 1,
  ) => {
    const { modals } = this.state

    const modalRef = modals[index]?.ref
    if (modalRef) {
      modalRef.current?.updateProps(props)
    }
  }

  render() {
    const { modals } = this.state
    return modals.map((sheet: any, index: number) => {
      return (
        <GlobalModalComponent
          key={sheet.id + '' + index}
          closeModal={this.close.bind(this)}
          {...sheet}
        />
      )
    })
  }
}
