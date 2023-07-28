import { Fragment } from 'react'
import { Menu } from '@headlessui/react';
import Image from 'next/image';

type Props = {
    title: string,
    state: string,
    filters: Array<string>,
    setState: (value: string) => void,
}

const CustomMenu = ({ title, state, filters, setState}: Props) => {
    
  return (
    <div>CustomMenu</div>
  )
}

export default CustomMenu