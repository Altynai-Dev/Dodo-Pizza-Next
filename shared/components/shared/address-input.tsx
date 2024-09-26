'use client';
import React from 'react';
import {AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props{
    onChange?: (value?: string) => void,
}

export const AdressInput: React.FC<Props> = ({onChange}) => {
    return(
        <AddressSuggestions 
            token="582bf5ad9340ce84199801c09656a53c290c2f7b"
            onChange={(data) => onChange?.(data?.value)}
        />
    )
}
