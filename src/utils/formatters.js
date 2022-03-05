export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 10,
});

export const thousandSeparator = (num) => {
    return num.toLocaleString('en-US');
};
