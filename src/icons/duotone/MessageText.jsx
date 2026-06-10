import React, { forwardRef } from 'react';

const MessageTextDuotone = forwardRef(({ size = 24, color = 'currentColor', className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    className={className}
    {...props}
  >
    <path d="M448 0H64C28.75 0 0 28.748 0 63.994V352C0 387.246 28.75 415.994 64 415.994H160V499.959C160 509.709 171.25 515.461 179.125 509.709L304 415.994H448C483.25 415.994 512 387.246 512 352V63.994C512 28.748 483.25 0 448 0ZM344 160H280V296C280 309.25 269.25 320 256 320S232 309.25 232 296V160H168C154.75 160 144 149.25 144 136S154.75 112 168 112H344C357.25 112 368 122.75 368 136S357.25 160 344 160Z" className="stria-secondary" style={{ opacity: 0.4 }} />
    <path d="M368 136C368 149.25 357.25 160 344 160H280V296C280 309.25 269.25 320 256 320S232 309.25 232 296V160H168C154.75 160 144 149.25 144 136S154.75 112 168 112H344C357.25 112 368 122.75 368 136Z" />
  </svg>
));

MessageTextDuotone.displayName = 'MessageTextDuotone';

export default MessageTextDuotone;
