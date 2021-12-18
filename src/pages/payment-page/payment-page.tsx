import { PaymentsPageTemplates } from '@shared/ui/core/templates/payments-page-templates';
import React, { useCallback } from 'react';
import { Alert } from 'react-native';

export const PaymentPage: React.FC<any> = ({ route }) => {
  const [number, setNumber] = React.useState('');
  const [money, setMoney] = React.useState('');

  const validation = () => {
    let alert =
      number.length === 12 &&
      money.length > 1 &&
      Number(money) > 1 &&
      Number(money) < 20000;
    return onDeleteHandler(alert);
  };

  const onDeleteHandler = useCallback(
    alert => {
      alert
        ? Alert.alert('Предупреждение', 'Успех!', [{ text: 'ОК' }])
        : Alert.alert(
            'Предупреждение',
            'Неверно введены данные. Введите полный номер телефона. Сумма не должна быть меньше 1 и больше 20000',
            [{ text: 'ОК' }],
          );
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
