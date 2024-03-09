import React, { ReactNode } from 'react'
import { CardDescription, CardHeader, CardTitle } from './shadcn/ui/card';

interface Props {
    className?: string;
    title?: ReactNode;
    description?: ReactNode;
}

function CardSectionTitle({className, title, description}: Props) {
  return (
    <CardHeader className={className}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardHeader>
  )
}

export default CardSectionTitle
