To link an existing permission, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`linkauth`](https://github.com/zhongshuwen/zswchain)) action of the `zswchain` account.

In the example shown below `useraaaaaaaa` links the permission `action_perm` to the contract `useraaaaaaaa`'s `contract_action` action.
```javascript
const linkauth_input = {
  account: 'useraaaaaaaa',      // the permission's owner to be linked and the payer of the RAM needed to store this link
  code: 'useraaaaaaaa',         // the owner of the action to be linked
  type: 'contract_action',      // the action to be linked
  requirement: 'action_perm',   // the permission to be linked
};

(async () => {
  await api.transact({
    actions: [{
      account: 'zswchain',
      name: 'linkauth',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: linkauth_input,
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  }));
})();
```