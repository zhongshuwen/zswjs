To unlink an existing permission, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`unlinkauth`](https://github.com/zhongshuwen/zswchain)) action of the `zswchain` account.

In the example shown below `useraaaaaaaa` unlinks the permissions present on the contract `useraaaaaaaa`'s `contract_action` action.
```javascript
const unlinkauth_input = {
  account: 'useraaaaaaaa',      // the permission's owner to be linked and the payer of the RAM needed to store this link
  code: 'useraaaaaaaa',         // the owner of the action to be linked
  type: 'contract_action'       // the action to be linked
};

(async () => {
  await api.transact({
    actions: [{
      account: 'zswchain',
      name: 'unlinkauth',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: unlinkauth_input,
    }]
  }, {
   blocksBehind: 3,
   expireSeconds: 30,
  });
})();
```