require("babel-core/register")({
	presets: ['es2015-node5', 'stage-3']
});
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async(ctx, next) => {
	console.log(11111)
	// const start = Date.now();
	// await next();
	// const ms = Date.now() - start;
	// console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(3000);