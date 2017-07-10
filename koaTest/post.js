require('babel-core/register')({
	presets: ['es2015-node5', 'stage-0', 'stage-3']
});
require('babel-polyfill');
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async(ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(3000);