/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Header from '../../components/Header';
import Title from '../../components/Title'

export default function HomePage() {
  return (
    <div>
      <Header />
      <Title />
    </div>
  );
}
