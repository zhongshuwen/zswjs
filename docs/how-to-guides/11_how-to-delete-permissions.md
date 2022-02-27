To delete permissions, [submit a transaction](01_how-to-submit-a-transaction.md) to the [`deleteauth`](https://github.com/zhongshuwen/zswchain)) action of the `zswchain` account.

In the example shown below `useraaaaaaaa` deletes the permission `my_new_permission` on the account `useraaaaaaaa`.
```javascript
const deleteauth_input = {
  account: 'useraaaaaaaa',
  permission: 'my_new_permission',
};

(async () => {
  await api.transact({
    actions: [
    {
      account: 'zswchain',
      name: 'deleteauth',
      authorization: [{
        actor: 'useraaaaaaaa',
        permission: 'active',
      }],
      data: delete_auth_data,
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 30,
  });
})();
```