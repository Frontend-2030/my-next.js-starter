import React from 'react';
import Link from 'next/link';
import { Routes } from '../../constants/Routes';

interface IProps {}

export const IndexPage: React.FC<IProps> = (props) => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href={Routes.About}>
        <a>About</a>
      </Link>
    </p>
  </div>
);
