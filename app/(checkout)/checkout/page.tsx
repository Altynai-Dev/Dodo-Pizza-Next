"use client";

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

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

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

  const onSubmit = (data: CheckoutFormValues) => {

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
            />
            <CheckoutPersonalInfo />
            <CheckoutAddressForm />
          </div>

          <div className="w-[450px]">
            <CheckoutSidebar totalAmount={totalAmount} />
          </div>
        </div>
        </form>
      </FormProvider>
    </Container>
  );
}
