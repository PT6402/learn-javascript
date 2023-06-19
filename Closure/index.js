/**
 * Closure ?
 * là 1 hàm có thể ghi nhớ nơi nó được tạo ra và truy cập được biến ở bên ngoài phạm vi của nó
 */

function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }
  return logger;
}

const infoLogger1 = createLogger("Info");

infoLogger1("bat dau gui mail");
infoLogger1("gui mail lan 1");
infoLogger1("gui mail lan 2");

const infoLogger2 = createLogger("Error");

infoLogger2("bat dau gui mail");
infoLogger2("gui mail lan 1");
infoLogger2("gui mail lan 2");

// example

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
    const storage = {
      get(get) {
        store[key];
      },
      set(key, value) {
        store[key] = value;
        save();
      },
      remove(key) {
        delete store[key];
        save();
      },
    };
  };
  return storage;
}

const profileSetting = createStorage('profile_setting')
