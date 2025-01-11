pbjs.onEvent('bidTimeout', function (bids) {
  console.error('Bid Timeout:', bids);
});

pbjs.onEvent('auctionInit', function () {
  console.log('Auction Initialized');
});

pbjs.onEvent('auctionEnd', function (data) {
  if (!data || !Object.keys(data).length) {
    console.warn('No valid bids received, displaying fallback ads.');
    loadFallbackAds();
  }
});

function loadFallbackAds() {
  document.getElementById('ad-slot-1').innerHTML = '<iframe src="/fallback-ads/ad1.html"></iframe>';
  document.getElementById('ad-slot-2').innerHTML = '<iframe src="/fallback-ads/ad2.html"></iframe>';
}
