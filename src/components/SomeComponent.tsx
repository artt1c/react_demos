import React from "react";

type MyProps = {
  message: string;
}

type MyState = {
  count: number;
}

export default class SomeComponent extends React.Component<MyProps, MyState> {

  // state: MyState = {count: 0};

  constructor(props: MyProps) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    return (
      <div>

        <h2>some component {this.props.message}</h2>
        <h3>{this.state.count}</h3>
        <button onClick={() => {
          this.setState((state) => {
            return {
              count: state.count + 1
            }
          })
        }}>increment</button>
      </div>
    );
  }
}