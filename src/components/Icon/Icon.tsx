import React from 'react';

interface IIconProps {
  src: string;
  alt?: string;
}

function Icon(props: IIconProps) {
  const { src, alt } = props;

  return <img src={src} alt={alt} />;
}

export default Icon;
