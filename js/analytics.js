pbjs.onEvent('bidWon', function (data) {
  gtag('event', 'Bid Won', {
    event_category: 'Ads',
    event_label: data.adUnitCode,
    value: data.cpm
  });
});

pbjs.onEvent('auctionEnd', function () {
  const auctionData = pbjs.getBidResponses();
  console.log('Auction Results:', auctionData);
});
