/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Plus } from 'lucide-react';
import { Title } from './title';
import Link from 'next/link';
import { Button } from '../ui';
import { cn } from '@/shared/lib/utils';
// import { CountButton } from './count-button';

interface Props {
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
  id: number;
}

export const ProductCard: React.FC<Props> = ({ name, price, count, imageUrl, className, id }) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
      </div>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        {/* {count ? (
          <CountButton value={count} size="lg" />
        ) : ( */}
          <Button variant="secondary">
            <Plus className="w-4 h-4 mr-1" />
            Добавить
          </Button>
        {/* )} */}
      </div>
      </Link>

    </div>
  );
};