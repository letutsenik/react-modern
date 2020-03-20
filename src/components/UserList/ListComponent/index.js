import React from 'react';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";

import RowComponent from '../RowComponent';

const ListComponent = ({ height, width, items, moreItemsLoading, loadMore, hasNextPage }) => {
  const Row = ({ index, style }) => (
    <RowComponent image={items[index]} num={index} style={style} loading={index === items.length} />
  );

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <>
      <InfiniteLoader
      isItemLoaded={index => index < items.length}
      itemCount={itemCount}
      loadMoreItems={loadMore}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={height}
          width={width}
          itemCount={itemCount}
          itemSize={80}
          className="list-container"
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {Row}
        </FixedSizeList>
      )}
    </InfiniteLoader>
      </>
  )
};

export default ListComponent;
