To vote for a block produder, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`voteproducer`](https://github.com/zhongshuwen/zswchain)) action of the `zswchain` account.

In the example shown below `useraaaaaaaa` votes for producers `userbbbbbbbb` and `usercccccccc`.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'zswchain',
      name: 'voteproducer',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        voter: 'useraaaaaaaa',
        proxy: '',
        producers: ['userbbbbbbbb', 'usercccccccc']
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
    broadcast: true,
    sign: true
  });
})();
```

`useraaaaaaaa` can also delegate their vote to a proxy.  In the example shown below, `useraaaaaaaa` delegates their vote to the proxy `userbbbbbbbb`.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'zswchain',
      name: 'voteproducer',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        voter: 'useraaaaaaaa',
        proxy: 'userbbbbbbbb',
        producers: []
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
    broadcast: true,
    sign: true
  });
})();
```

**Note** that if the `proxy` field is used, the `producers` list must be empty, and vice verse, if the `producers` list is used, the `proxy` field must be an empty string.