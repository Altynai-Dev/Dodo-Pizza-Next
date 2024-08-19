/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
    imageUrl: string;
    name: string;
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({ 
    name, 
    items, 
    imageUrl,
    onClickAdd,
    className
 }) => {
  const textDetails = '30 см, традиционное тесто 30';
  const totalPrice = 350;
  return (
    
    <div className={cn('flex flex-1', className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img src={imageUrl} alt={name} className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'/>
      </div>

      <div className='w-[490px] bg-[#f7f6f5] p-7'>
        <Title text={name} size="md" className='font-extrabold mb-1' />
        <p className='text-gray-400 mb-10'>{textDetails}</p>
        <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
        Добавить в корзину за {totalPrice} Р
      </Button>
      </div>
      
    </div>
  );
};