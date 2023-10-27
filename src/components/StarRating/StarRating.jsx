const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M11.9683 4.30801C11.9306 4.19694 11.8612 4.09935 11.7686 4.02728C11.6761 3.95521 11.5644 3.91182 11.4475 3.90246L8.02686 3.6307L6.54665 0.354534C6.49951 0.249015 6.42284 0.159392 6.32588 0.0964823C6.22892 0.0335723 6.11583 6.3519e-05 6.00025 9.02152e-08C5.88466 -6.33385e-05 5.77153 0.0333213 5.6745 0.0961249C5.57748 0.158928 5.5007 0.248467 5.45345 0.353934L3.97324 3.6307L0.552619 3.90246C0.437692 3.91157 0.32782 3.95358 0.23615 4.02349C0.14448 4.09339 0.074892 4.18822 0.0357119 4.29663C-0.00346825 4.40504 -0.0105816 4.52244 0.0152228 4.63479C0.0410272 4.74714 0.0986568 4.84967 0.181217 4.93013L2.70903 7.394L1.81503 11.2647C1.78788 11.3819 1.79658 11.5045 1.84 11.6166C1.88342 11.7288 1.95955 11.8253 2.05851 11.8937C2.15747 11.962 2.2747 11.9991 2.39498 12C2.51526 12.0009 2.63304 11.9656 2.73303 11.8988L6.00005 9.72109L9.26707 11.8988C9.36927 11.9667 9.4898 12.0016 9.61245 11.9989C9.7351 11.9962 9.85398 11.956 9.95311 11.8838C10.0522 11.8115 10.1269 11.7106 10.1669 11.5947C10.207 11.4788 10.2106 11.3533 10.1773 11.2353L9.07987 7.3958L11.8015 4.94692C11.9797 4.78615 12.0451 4.53538 11.9683 4.30801Z"
        fill="#F55B1C"
      />
    </svg>
  );
};

const StarRating = () => {
  return (
    <div className="stars">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
};

export default StarRating;
