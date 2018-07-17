const superagent = require('superagent');
const MemcachedCacheModule = require('cache-service-memcached');

var memcachedCache = new MemcachedCacheModule('127.0.0.1:11211');
var defaults = {cacheWhenEmpty: false, expiration: 900};

console.log(memcachedCache);

require('superagent-cache')(superagent, memcachedCache, defaults);

var lifetime = 300;

memcachedCache.set('key', 'value', lifetime);
memcachedCache.set('key2', 'value2', lifetime);

memcachedCache.mget(['key', 'key2'], (err, res) => {
  console.log(res);
});
