import React from 'react';
import { WhiteBlock } from '../white-block';
import { Input } from '../../ui';
import { FormTextArea } from '../form-components';

interface Props {
className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адрес доставки">
    <div className="flex flex-col gap-5">
    <Input name="firstName" className="text-base" placeholder="Адрес" />
    <FormTextArea name="comment" className="text-base" placeholder="Комментарий к заказу" rows={5} />
    </div>
 </WhiteBlock>
  );
};