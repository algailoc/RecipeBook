import {SqlStatementExecutor} from '../../../../../../../utils/common/service-utils/SqlStatementExecutor';

export class SSSInitManager {
  static async runUpgradeScripts({db, scripts}) {
    if (!db) {
      console.log('Bad DB');
      return false;
    }

    if (!scripts) {
      console.log('Nothing to update');
      return false;
    }

    let success = true;
    for (let i = 0; i < scripts.length; ++i) {
      try {
        await SqlStatementExecutor.execute({db, statement: scripts[i]});
      } catch (e) {
        console.log('Error on executing script:', e);
        success = false;
      }
    }

    return success;
  }

  static async getVersion(db) {
    const getVersionStatement = 'PRAGMA user_version';

    const result = await SqlStatementExecutor.execute({
      db,
      statement: getVersionStatement,
    });

    let version = 0;
    if (result.rows.length && result.rows.item(0).user_version) {
      version = result.rows.item(0).user_version;
    }

    return version;
  }

  static async setVersion({db, version}) {
    const setVersionStatement = 'PRAGMA user_version = ' + version;
    await SqlStatementExecutor.execute({db, statement: setVersionStatement});
  }
}

export default SSSInitManager;
