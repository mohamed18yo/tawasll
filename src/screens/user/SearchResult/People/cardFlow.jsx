import {  Img, Row, SVGCom, TSVGCom, Typography, ypography } from '../../../../components/widget';

import { connect, } from 'react-redux';
import { AddFollowAction, UnFollowAction } from '../../../../redux/followers/followersAction';
import { Container, ContainerSvg } from './style';
import { notify } from '../../../../utils/notify';
import { bindActionCreators } from 'redux';
import { PureComponent } from 'react';
import { URL_IMAGE } from '../../../../utils/const';
import { Link } from 'react-router-dom';


class UserFlowCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    }
    this.handleActions = this.handleActions.bind(this)
  }



  handleActions() {
    console.log("this.props?.id",this.props)

    if (this.props?.typeAction === "add") {
      this.props.AddFollowAction(this.props?.id, () => {
        notify('success', ` ${this.props?.name} انت  الان  تابع  `)
        this.setState({
          isActive: false
        })

      })
    }

    if (this.props?.typeAction === "remove") {
      this.props.UnFollowAction(this.props?.id, () => {
        notify('success', ` ${this.props?.name} انت  الان  غير  متابع ل  `)

      })
    }
  }

  render() {

    return (
      <Container>
        <Row>
          <Img src={`${URL_IMAGE}${this.props?.avatar}`} className={'imgeUser'} />
          <Typography as={Link} to={`/profile/${this.props.id}`}>{this.props?.name}</Typography>
        </Row>
        <ContainerSvg onClick={this.handleActions}>
         <Img width="30px" src={"/assets/flowUser.svg"} />
        </ContainerSvg>
      </Container >

    )
  }
};


const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    AddFollowAction,
    UnFollowAction

  }, dispatch)
})
const connector = connect(null, mapDispatchToProps);


export default connector(UserFlowCard)

