"use client";

import React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { 
    CheckoutSidebar, 
    Container, 
    Title,
    CheckoutAddressForm,
    CheckoutCart,
    CheckoutPersonalInfo,
 } from "@/shared/components";
 import {
    checkoutFormSchema,
    CheckoutFormValues,
  } from "@/shared/constants";
import { useCart } from "@/shared/hooks";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) =>{
    try{
      setSubmitting(true);
      const url = await createOrder(data);

      toast.success('Заказ успешно оформлен! Переход на оплату...', {
        icon: ''
      });

      if(url){
        location.href = url;
      }
    }catch(err){
      console.log(err);
      setSubmitting(false);
      toast.error('Произошла ошибка при оформлении заказа', {
        icon: 'X'
      })
    }
  }
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10 flex-1 mb-20">
            <CheckoutCart
              onClickCountButton={onClickCountButton}
              removeCartItem={removeCartItem}
              items={items}
              loading={loading}
            />
            <CheckoutPersonalInfo className={loading ? "opacity-40 pointer-events-none" : ""} />
            <CheckoutAddressForm className={loading ? "opacity-40 pointer-events-none" : ""} />
          </div>

          <div className="w-[450px]">
            <CheckoutSidebar totalAmount={totalAmount} loading={loading || submitting} />
          </div>
        </div>
        </form>
      </FormProvider>
    </Container>
  );
}
