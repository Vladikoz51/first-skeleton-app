import React, { useCallback } from 'react';
import useSelectorMap from '@src/utils/hooks/use-selector-map';
// import { DatePicker } from 'antd';

function ArticleList() {
  const select = useSelectorMap(state => ({
    items: state.super?.items,
    wait: state.super?.wait,
  }));

  if (select.wait || !select.items) {
    return <div>{select.wait && <i>Загрузка...</i>}</div>;
  } else {
    return (
      <ul>
        {select.items.map(item => (
          <li key={item._id}>
            {item.title} | {item.maidIn.title} | {item.category.title} | {item.price} руб
          </li>
        ))}
      </ul>
    );
  }
}

export default React.memo(ArticleList);
