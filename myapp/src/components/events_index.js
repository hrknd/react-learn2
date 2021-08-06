import React,  { Component } from "react";
import { connect } from "react-redux";
import _ from 'lodash'
import { readEvents } from "../actions";
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButtom from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, data => (
      <TableRow key={data.id}>
        <TableRowColumn>{data.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${data.id}`}>
            {data.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{data.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    }

    return (
      <React.Fragment>
        <FloatingActionButtom style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButtom>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}><TableRow><TableHeaderColumn>ID</TableHeaderColumn><TableHeaderColumn>Title</TableHeaderColumn><TableHeaderColumn>Body</TableHeaderColumn></TableRow></TableHeader>
          <TableBody displayRowCheckbox={false}>{this.renderEvents()}</TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events: state.events})
const mapDispatchToProps = ({readEvents})
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
