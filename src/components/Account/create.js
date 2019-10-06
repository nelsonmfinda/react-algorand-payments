import React from 'react'
import algosdk from "algosdk"

export default class CreateAccount extends React.Component {

  constructor(props) {
    super(props)

    this.account = algosdk.generateAccount()
    this.mnemonic = algosdk.secretKeyToMnemonic(this.account.sk)

    this.state = {
      account: { addr: '', sk: Uint8Array[64] },
      mnemonic: '',
    }

    this.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate() {
    this.setState((state) => {
      return { account: this.account, mnemonic: this.mnemonic };
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="create-account">
        <button onClick={this.handleCreate}>Create Account</button>

        { this.account.addr && <p>Address: { this.account.addr }</p> }
        { this.mnemonic && <p>Mnemonic: { this.mnemonic }</p> }
      </div>
    );
  }
}
