To cancel a multi-sig transaction, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`cancel`](https://github.com/zhongshuwen/zswchain)) action of the `zswchain.msig` account.

In the example shown below `useraaaaaaaa` cancels the `changeowner` proposal, previously proposed by `useraaaaaaaa`.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'zswchain.msig',
      name: 'cancel',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        proposer: 'useraaaaaaaa',
        proposal_name: 'changeowner',
        canceler: 'useraaaaaaaa'
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

**Note** that if a previously proposed transaction has yet to expire, only the proposer of the transaction can cancel it.