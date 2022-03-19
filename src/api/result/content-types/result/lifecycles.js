module.exports = {
  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
		//console.log(event)

    // let's do a 20% discount everytime
    //event.params.data.price = event.params.data.price * 0.8;
  },
};
/*
{
  action: 'beforeUpdate',
  model: {
    singularName: 'result',
    uid: 'api::result.result',
    tableName: 'results',
    attributes: {
      id: [Object],
      content: [Object],
      tester: [Object],
      myuid: [Object],
      uiduid: [Object],
      comcom: [Object],
      uidmyuid: [Object],
      createdAt: [Object],
      updatedAt: [Object],
      createdBy: [Object],
      updatedBy: [Object]
    },
    lifecycles: { beforeUpdate: [Function: beforeUpdate] },
    componentLink: {
      uid: 'results_components',
      tableName: 'results_components',
      attributes: [Object],
      indexes: [Array],
      foreignKeys: [Array],
      columnToAttribute: [Object]
    },
    columnToAttribute: {
      id: 'id',
      content: 'content',
      tester: 'tester',
      myuid: 'myuid',
      uiduid: 'uiduid',
      comcom: 'comcom',
      uidmyuid: 'uidmyuid',
      created_at: 'createdAt',
      updated_at: 'updatedAt',
      createdBy: 'createdBy',
      updatedBy: 'updatedBy'
    }
  },
  params: {
    where: { id: '1' },
    data: { content: 'upd6...', updatedAt: 2022-03-19T14:23:15.642Z }
  }
}
*/