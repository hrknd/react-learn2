import React,  { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash'
import { readEvents } from "../actions";

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, data => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    ))
  }

  render() {
    // const props = this.props

    return (
      <React.Fragment>
        <table>
          <thead><tr><td>ID</td><td>Title</td><td>Body</td></tr></thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({readEvents})
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
