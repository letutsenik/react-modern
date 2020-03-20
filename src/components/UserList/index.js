import React, { Component, useState, useEffect } from "react";
import ListComponent from './ListComponent';

import initialItems from './mock.json';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: initialItems,
      moreItemsLoading: false,
      hasNextPage: true
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({ moreItemsLoading: true }, () => {

      fetch('https://dog.ceo/api/breeds/image/random/10')
        .then(res => res.json())
        .then(({ message: newItems }) => this.setState({
          moreItemsLoading: false,
          items: [...this.state.items, ...newItems]
        }));
    });
  }

  render() {
    const { items, moreItemsLoading, hasNextPage } = this.state;
    const { height, width } = this.props;

    return (
      <>
        <ListComponent
          items={items}
          moreItemsLoading={moreItemsLoading}
          loadMore={this.loadMore}
          hasNextPage={hasNextPage}
          height={height}
          width={width}
        />
      </>
    );
  }
}

const UserListFunc = ({ width, height }) => {
  const [items, setItems] = useState([]);
  const [moreItemsLoading, setMoreItemsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {

  },[])

  const loadMore = () => {
    setMoreItemsLoading(true);

    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(res => res.json())
      .then(({ message: newItems }) => {
        setMoreItemsLoading(false);
        setItems([...items, ...newItems]);
      });
  };

  return (
    <div className="user-list-wrapper">
      {moreItemsLoading && (
          <div className="loading">
            <h2>Loading...</h2>
            <div className="stub" />
          </div>
        )
      }
      <ListComponent
        items={items}
        moreItemsLoading={moreItemsLoading}
        loadMore={loadMore}
        hasNextPage={hasNextPage}
        height={height}
        width={width}
      />
    </div>
  );
};

export default UserListFunc;
