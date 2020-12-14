const f = new Proxy(() => {
  console.log('world');
}, {
  apply() {
    console.log('hello');
    Reflect.apply(...arguments);
  }
});

const o = new Proxy({f}, {
  get() {
    return Reflect.get(...arguments);
  }
});

o.f();
