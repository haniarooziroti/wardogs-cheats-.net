/** Checkout destinations — internal /go/* paths redirect here (affiliate path not shown as visible page copy). */
export const CHECKOUT_URLS = {
  wardogs: 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fwardogs',
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/wardogs', CHECKOUT_URLS.wardogs],
  ['/go/wardogs/', CHECKOUT_URLS.wardogs],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
