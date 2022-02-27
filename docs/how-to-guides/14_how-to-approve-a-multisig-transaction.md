To approve a multi-sig transaction, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`approve`](https://github.com/ZSWIO/zswchain.contracts/blob/52fbd4ac7e6c38c558302c48d00469a4bed35f7c/contracts/zswchain.msig/include/zswchain.msig/zswchain.msig.hpp#L58) action of the `zswchain.msig` account.

In the example shown below `userbbbbbbbb` approves the `changeowner` proposal, previously proposed by `useraaaaaaaa` using `userbbbbbbbb`'s `active` permission.
```javascript
(async () => {
  await api.transact({
    actions: [{
      account: 'zswchain.msig',
      name: 'approve',
      authorization: [{
        actor: 'userbbbbbbbb',
        permission: 'active',
      }],
      data: {
        proposer: 'useraaaaaaaa',
        proposal_name: 'changeowner',
        level: {
          actor: 'userbbbbbbbb',
          permission: 'active',
        }
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