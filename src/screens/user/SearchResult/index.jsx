import React, { useCallback } from 'react';
import Ads from '../../../components/ads/ads';
import UserCard from '../../../components/userCard/userCard';
import { CardCol, Container, IneerSearch, ResultCol, SearchBox, SearchInput } from './style';

import { TabSelector } from '../../../components/Tabs/TabSelector';
import { TabPanel, useTabs } from '../../../components/Tabs';
import styled from 'styled-components';
import { FlexCol as Col } from '../../../Global.style';
import People from './People/Peoples';
import { PostResult } from './Post';
import { SearchIcon } from '../../../components/sidebar/svgs';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { searchUser } from '../../../redux/search/searchAction';
import { notify } from '../../../utils/notify';
import { SearchAction as searchPost } from '../../../redux/post/postAction';

export const NavTab = styled('nav')`
  display: flex;
  /* padding-left: 30px;; */
  /* background: #F2F2F3; */
  padding: 0px 25px;
  width: 100%;
  border-radius: 6px;
  text-align: start;
`;
export const FlexCol = styled(Col)`
  width: 100%;
  /* padding-left: 30px; */
  gap: 20px;
`;
export const WrapperNaItem = styled(Col)`
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 1.2rem;
`;

export function Basic() {
  const [selectedTab, setSelectedTab] = useTabs(['people', 'post']);

  return (
    <ResultCol>
      <SearchBox>
        <SearchIcon color="gray" style={{ zIndex: '1', marginLeft: '-35px', marginBottom: '1rem' }} />
        <SearchInput />
      </SearchBox>
      <WrapperNaItem>
        <NavTab>
          <TabSelector
            isActive={selectedTab === 'post'}
            onClick={() => {
              setSelectedTab((prev) => 'post');
            }}
          >
            المنشورات
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'people'}
            onClick={() => {
              setSelectedTab((prev) => 'people');
            }}
          >
            الأشخاص
          </TabSelector>
        </NavTab>
      </WrapperNaItem>
      <div style={{ maginTop: '10px' }}>
        <TabPanel hidden={selectedTab !== 'post'} children={<PostResult />} />
        <TabPanel hidden={selectedTab !== 'people'} children={<People isForSearch={true} typeAction="add" haveTitle={true} />} />
      </div>
    </ResultCol>
  );
}

export const SearchResult = () => {
  return (
    // <Row style={{ width: "100%", gap: '20px' }}>
    <IneerSearch>
      <CardCol>
        <UserCard />
        <Ads top={'26rem'} />
      </CardCol>
      <Basic />
    </IneerSearch>
    // </Row>
  );
};
