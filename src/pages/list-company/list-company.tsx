import React from 'react';
import { ElementList } from '@shared/ui/core/organisms/element-list';
import { CompanyListHeader } from '@shared/ui/core/organisms/CompanyListHeader/CompanyListHeader';
import { ListCompanyTemplate } from '@shared/ui/core/templates/list-company-template';
import { $query, serachQuery } from '../../models/searchQuery';

export type TElement = {
  service_icon: string;
  service_id: string;
  [service_name:string]: string;
};

export const ListCompany: React.FC = ({ route }: any) => {
  const [value, setValue] = React.useState('');
  const [arr, setArr] = React.useState(route.params.services);

  function handleFilter(array: TElement[], query: string) {
    let result: TElement[] = [];
    if (query.length !== 0) {
      result = array.filter(item => {
        return item['service_name'].toLowerCase().includes(query.toLowerCase());
      });
    } else {
      result = array;
    }
    return result;
  }

  serachQuery.watch((payload) => {
    setValue(payload)
  })
  React.useEffect(() => {
    setArr(handleFilter(route.params.services, value));
  }, [value]);


  return (
    <ListCompanyTemplate
      header={
        <CompanyListHeader
          text={route.params.category_name}
        />
      }
      elementList={
        <ElementList
          items={arr}
          imageSize={40}
          name={'service'}
          goPage="PaymentPage"
        />
      }
    />
  );
};
