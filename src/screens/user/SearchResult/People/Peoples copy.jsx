import { connect } from 'react-redux';
import { notify } from '../../../../utils/notify';
import { bindActionCreators } from 'redux';
import { PureComponent } from 'react';
import { GetFollowMeAction, GetFollowTheirAction } from '../../../../redux/followers/followersAction';
import { FlexCol } from '../../../../Global.style';
import { Title } from '../../profile/style';
import { Divider } from '../../../../components/widget';
import { Boundary } from '../../../../components/Boundary/Boundary';
import { Component } from 'react';
import { WrapperWithTitle } from './style';
import  UserFlowCard  from './cardFlow';

class People extends Component {
  constructor(props) {
    super(props);

    this.renderData = this.renderData.bind(this);
  }

  componentDidMount() {
    if (this.props?.typeAction == 'ME') {
      this.props.GetFollowMeAction(() => {
        notify('success', ` انت  تشاهد  الذين  يتابعونك  `);
      });
      return;
    } else if (this.props?.typeAction === 'There') {
      this.props.GetFollowTheirAction(() => {
        notify('success', `  انت  تشاهد  الذي  يتابعونك   `);
      });
    }
    return;
  }

  renderData() {
    if (this.props?.typeAction === 'ME') {
      return this.props?.followers?.followers?.map(({ user_follower }, index) => (
        <UserFlowCard typeAction={'remove'} {...user_follower} key={index} />
      ));
    } else if (this.props?.typeAction === 'There') {
      {
        console.log('this.props?.followers?.followers', this.props?.followers);
      }

      return this.props?.followers?.followTheir?.map((item) => {
        return <UserFlowCard typeAction={'add'} {...item?.user_followed} key={item.id} />;
      });
    }

    return null;
  }
  render() {
    return (
      <WrapperWithTitle>
        {this.props.haveTitle && (
          <>
            <Title>الأشخاص</Title>
            <Divider />
          </>
        )}
        {this.props.isForSearch ? (
          <Boundary error={this.props?.searchResult?.error} isLoading={this.props?.searchResult?.isLoading}>
            {this.props?.searchResult?.user?.map((x, index) => (
              <UserFlowCard typeAction={'add'} {...x} key={index} />
            ))}
          </Boundary>
        ) : (
          <Boundary isLoading={this.props?.followers?.isLoading} error={this.props?.followers?.error}>
            {this.renderData()}
          </Boundary>
        )}
      </WrapperWithTitle>
    );
  }
}

const mapStateToProps = (state) => ({
  followers: state.followers,
  searchResult: state.searchResult,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      GetFollowMeAction,
      GetFollowTheirAction,
    },
    dispatch,
  ),
});
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(People);
