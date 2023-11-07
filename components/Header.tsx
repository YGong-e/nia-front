import './globals.css'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
//Recoil
import { headerNameState } from '@/data/recoil/atoms';
import { useRecoilState } from 'recoil';

export default function Header() {

    const pathname = usePathname();

    const [headerName, setHeaderName] = useRecoilState(headerNameState);
    let title = ''
    useEffect(() => {
        if (pathname == '/result') {
            setHeaderName('측정결과');
        }
        else if (pathname == '/inputform') {
            setHeaderName('측정데이터 입력');
        }
        else {
            setHeaderName(null);
        }
    }, [pathname]);



    return (
        <> {pathname &&
            <header>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">{headerName}</h1>
                </div>
            </header>}</>
    )
}