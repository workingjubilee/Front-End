export const httpsify = uri => {
  const protocol = uri.slice(0, 5);
  const localhost = uri.includes('localhost') ? true : false;
  return protocol === 'https'
    ? uri
    : protocol === 'http:' && localhost === true
    ? uri
    : protocol === 'http:' && localhost === false
    ? `https${uri.slice(4)}`
    : `https://${uri}`;
};
