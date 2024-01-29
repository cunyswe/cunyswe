import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/">
            <div style={{ marginTop: '2px' }}>
                <Image src="/cuny-swe.png" alt="Logo" width={50} height={50} layout="fixed" />
            </div>
        </Link>
    );
}
