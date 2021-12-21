import { PaymentsPageTemplates } from '@shared/ui/core/templates/payments-page-templates';
import { addPopup } from '../../models/popup';
import React, { useCallback } from 'react';

export const PaymentPage: React.FC<any> = ({ route }) => {
  const [number, setNumber] = React.useState('');
  const [money, setMoney] = React.useState('');

  const validation = () => {
    let alert =
      number.length === 12 &&
      Number(money) > 1 &&
      Number(money) < 20000;
    return onDeleteHandler(alert);
  };

  const onDeleteHandler = useCallback(
    alert => { 
      alert
        ? addPopup({text: 'Успешно!', time:5000, backgroundColor:'#6C78E6'})
        : addPopup({text: 'Неверно введены данные. Введите полный номер телефона. Сумма не должна быть меньше 1 и больше 20000', time:5000})
    },
    [validation],
  );

  return (
    <PaymentsPageTemplates
      route={route}
      setNumber={setNumber}
      setMoney={setMoney}
      validation={validation}
    />
  );
};
