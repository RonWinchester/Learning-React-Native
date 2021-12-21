import React, { useContext } from 'react';
import { Context } from '@shared/store/store';
import { ElementList } from '@shared/ui/core/organisms/element-list';
import { PaymentsTemplate } from '@shared/ui/core/templates/payments-template';
import { $data, fetchDataReposFx } from '../../models/fetchData';
import { TElement } from '@pages/list-company/list-company';

export const Payments: React.FC = () => {
  const [data, setData] = React.useState<[] | TElement[]>([]);

  React.useLayoutEffect(() => {
    fetchDataReposFx().then(res => {
      const response = $data.getState()
      setData(response);
    });
  }, []);

  /*  const data = useContext(Context);
  const arrayData: TElement[] = data._W['category']; */
  return (
    <PaymentsTemplate
      elementList={
        <ElementList
          items={data}
          imageSize={25}
          name={'category'}
          goPage={'ListCompany'}
        />
      }
    />
  );
};
