const adUnits = [
  {
    code: 'ad-slot-1',
    mediaTypes: {
      banner: {
        sizes: [[300, 250], [320, 50]] // Responsive sizes
      }
    },
    bids: [
      {
        bidder: 'appnexus',
        params: { placementId: '12345' }
      },
      {
        bidder: 'rubicon',
        params: {
          accountId: '67890',
          siteId: '13579',
          zoneId: '24680'
        }
      }
    ]
  },
  {
    code: 'ad-slot-2',
    mediaTypes: {
      banner: {
        sizes: [[728, 90], [970, 250]] // Wide banner sizes
      }
    },
    bids: [
      {
        bidder: 'appnexus',
        params: { placementId: '54321' }
      },
      {
        bidder: 'rubicon',
        params: {
          accountId: '98765',
          siteId: '97531',
          zoneId: '86420'
        }
      }
    ]
  }
];

// Initialize Prebid.js
pbjs.que.push(function () {
  pbjs.addAdUnits(adUnits);
  pbjs.requestBids({
    bidsBackHandler: function (bids) {
      pbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh();
    }
  });
});
