import React, { Component } from 'react';

import {Table, TableBody, TableFooter, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import AppTableNavigation from './AppTableNavigation';
import { getData } from './DataFetching';
import Loading from './Loading';
import { baseURL } from './constants';
import AppTableEntrie from './AppTableEntrie';


const TableRowFooterStyle = {
  borderTop:'none'
}

class AppTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries : null,
      linkNext: '',
      linkPrevious: ''
    };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }

  componentWillMount() {
    this.updateEntriesState(this.props.currentCategorie)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentCategorie !== this.props.currentCategorie){
      this.updateEntriesState(nextProps.currentCategorie)
    }
  }

  handleClickNext(){
    if (this.state.linkNext !== ''){
      this.updateEntriesState(this.state.linkNext)
    }
  }

  handleClickPrevious(){
    if (this.state.linkPrevious !== ''){
      this.updateEntriesState(this.state.linkPrevious)
    }
  }

  updateEntriesState(param){
    this.setState({ entries: null})

    getData(param)
      .then(data => {

        let ArgNext = data.next ? data.next.slice(baseURL.length) : ''
        let ArgPrevious = data.previous ? data.previous.slice(baseURL.length) : ''

        let entries = this.makeRowsDivs(data)

        this.setState({
          entries: entries,
          linkNext: ArgNext,
          linkPrevious: ArgPrevious
        })

      })
      .catch(error => {
        console.log(error)
      })
  }

  makeRowsDivs(data) {
    return data.results.map((entrie, index) =>
      <AppTableEntrie
        key={index}
        entrie={entrie}
        currentCategorie={this.props.currentCategorie}
        onSelectItem={this.props.onSelectItem}/>
      )
  }

  render() {
    if (this.state.entries){
      return (
        <div style={this.props.containersStyle}>
          <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
            <Table>
              <TableBody
                displayRowCheckbox={false}
                showRowHover={true}>
                {this.state.entries}
              </TableBody>
              {(this.state.linkNext !== '' || this.state.linkPrevious !== '') &&
              <TableFooter adjustForCheckbox={false}>
                <TableRow style={TableRowFooterStyle}>
                  <AppTableNavigation
                    onClickNext={this.handleClickNext}
                    onClickPrevious={this.handleClickPrevious}
                    next={this.state.linkNext}
                    previous={this.state.linkPrevious}/>
                </TableRow>
              </TableFooter>}
             </Table>
          </Paper>
        </div>
      );
    }

    return (
      <Loading
        containersStyle={this.props.containersStyle}
        rounded={this.props.rounded}
        zDepth={this.props.zDepth} />
    )
  }
}

AppTable.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired,
  currentCategorie: React.PropTypes.string.isRequired
}

export default AppTable;