function Close({ className }: { className?: string }) {
  return (
    <div className="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={` text-white cursor-pointer ${className} `}
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  );
}

export default Close;
