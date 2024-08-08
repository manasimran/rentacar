"use client";
import React, { useState, useEffect } from 'react';
import CarShowCase from '../../components/Vehicals/page';

function CarRentalForm() {
  const [category, setCategory] = useState('');
  const limit = 20;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('category');
    setCategory(categoryParam || '');
  }, []);

  return (
    <CarShowCase category={category} limit={limit} />
  );
}

export default CarRentalForm;
