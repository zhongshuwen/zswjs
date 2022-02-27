To transfer an zswchain token, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`transfer`](https://github.com/zhongshuwen/zswchain)) action of the account storing the token you wish to transfer.

In the example shown below `useraaaaaaaa` transfers **1.0000 ZSW** token stored in the `zsw.token` account from `useraaaaaaaa` to `userbbbbbbbb`.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'zsw.token',
      name: 'transfer',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: {
        from: 'useraaaaaaaa',
        to: 'userbbbbbbbb',
        quantity: '1.0000 ZSW',
        memo: 'some memo'
      }
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
})();
```