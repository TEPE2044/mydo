## 2026/6-17
- 原生模块的编译/下载链没跑通
1. **`better-sqlite3` 是原生 C++ 模块**，它需要一个编译好的 `.node` 二进制文件才能运行。

2. **pnpm 默认不编译任何原生模块**。只有列在 `pnpm.onlyBuiltDependencies` 里的包才会在 `pnpm install` 时执行编译脚本。之前这个列表里没有 `better-sqlite3`，所以它的二进制文件压根没生成——这就是最初的 `Could not locate the bindings file` 错误。

3. **加上后编译出了二进制，但版本不对**。`pnpm rebuild` 编译出的是给系统 Node.js 22（NODE_MODULE_VERSION 127）用的，而你的 Electron 39 需要版本 140——这就是第二个错误 `was compiled against a different Node.js version`。

4. **本地无法重新编译**（没装 Visual Studio），所以需要用 `prebuild-install` 从 GitHub 下载 Electron 专用的预编译二进制。第一次下载超时（网络不通），你开加速器后成功下载，问题解决。

5. 以后如果换了 better-sqlite3 版本或 Electron 版本，需要重新执行：
```powershell
cd node_modules/.pnpm/better-sqlite3@*/node_modules/better-sqlite3
$env:NODE_TLS_REJECT_UNAUTHORIZED=0
npx prebuild-install --runtime electron --target <electron版本号>
```
