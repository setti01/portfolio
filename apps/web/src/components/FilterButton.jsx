
import React from 'react';
import { Button } from '@/components/ui/button';

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      onClick={onClick}
      className="transition-all duration-200"
    >
      {label}
    </Button>
  );
};

export default FilterButton;
