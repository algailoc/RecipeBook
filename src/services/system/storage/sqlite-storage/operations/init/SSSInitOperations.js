import sssDbUpgradeData from './initializer/init-scripts/sssDbUpgradeData';
import SSSInitManager from './initializer/SSSInitManager';
import SSSDbUpgradeDataParser from './initializer/init-scripts/SSSDbUpgradeDataParser';

class SSSInitOperations {
  static async init(sqlite, dbName) {
    const db = sqlite.openDatabase({name: dbName});

    const upgradeData = sssDbUpgradeData;

    const currentDbVersion = await SSSInitManager.getVersion(db);
    const actualDbVersion = SSSDbUpgradeDataParser.getActualVersion({
      upgradeData,
    });

    if (currentDbVersion.toString() === actualDbVersion.toString()) {
      console.log('Using current version');
      return db;
    } else {
      console.log('Need update');
    }

    const upgradeScripts = SSSDbUpgradeDataParser.getUpgradeScripts({
      currentVersion: currentDbVersion,
      targetVersion: actualDbVersion,
      upgradeData,
    });

    const success = await SSSInitManager.runUpgradeScripts({
      db,
      scripts: upgradeScripts,
    });
    if (success) {
      await SSSInitManager.setVersion({db, version: actualDbVersion});
    }

    return db;
  }
}

export default SSSInitOperations;
