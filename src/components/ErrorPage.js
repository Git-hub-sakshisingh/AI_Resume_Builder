import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
        <h3>
            There was some error. Please Go back to <Link to='/afterno'>form</Link>
        </h3>
    </div>
  )
}
