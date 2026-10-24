## 诊断结论

- 当前仓库路径：`/workspace/site-factory`
- 本地对象检查：`git fsck --full --strict` 未发现缺失对象或坏对象。
- 当前分支：`trae/agent-4IywCn`
- 本地 `main`：`a0ac2e7ffeee574bf24acd94dd5b12242c4fbf3d`
- 远端跟踪 `origin/main`：`0a579eeb53338420300dfc1b2d204a0ae9c85704`
- 当前仓库是浅克隆：`git rev-parse --is-shallow-repository` 返回 `true`
- 当前工作分支与 `origin/main` 没有 merge base：`git merge-base origin/main HEAD` 无输出
- 推送报错：`remote: fatal: did not receive expected object ...` 与 `remote unpack failed: index-pack failed`

这说明当前问题更像是“浅克隆 + 分叉历史 + 推送协商异常”，而不是普通未提交或单个文件损坏。不要继续在当前仓库上直接强推；先从完整克隆恢复，再把当前工作分支内容迁移过去。

## 可直接执行的提示词

```text
你现在要修复 /workspace/site-factory 的 Git 推送异常，并把当前分支的有效改动迁移到一个干净、完整、可推送的仓库副本中。

已知事实：
1. 当前坏仓库位于 /workspace/site-factory
2. 当前工作分支是 trae/agent-4IywCn
3. 本地 fsck 基本正常，但仓库是 shallow repository
4. 当前分支与 origin/main 没有 merge base
5. 直接 push 曾报错：
   - remote: fatal: did not receive expected object 2743ece00d970e89d27d60e92dd7ad18c0d6e060
   - error: remote unpack failed: index-pack failed
6. 目标不是在坏仓库里继续硬推，而是恢复出一个完整可推送副本，并保住当前分支改动

你的目标：
1. 先备份当前坏仓库分支内容
2. 再重新完整克隆远端仓库
3. 以远端 main 为基线恢复当前工作分支的改动
4. 验证 Git 完整性和分支关系
5. 尝试重新推送恢复后的分支
6. 输出最后的状态、差异、以及下一步建议

请严格按下面顺序执行：

第一阶段：在坏仓库中做只读检查和备份
1. 工作目录切到 /workspace/site-factory
2. 运行：
   - git status --short --branch
   - git log --oneline --decorate -n 20
   - git fsck --full --strict
3. 导出当前分支补丁和 bundle 备份到 /workspace：
   - git bundle create /workspace/site-factory-trae-agent-4IywCn.bundle trae/agent-4IywCn main
   - git diff --binary main...trae/agent-4IywCn > /workspace/site-factory-trae-agent-4IywCn.diff
   - git format-patch --stdout --root trae/agent-4IywCn > /workspace/site-factory-trae-agent-4IywCn.patch
4. 备份成功后，不要在这个坏仓库里做 destructive 操作

第二阶段：重新完整克隆远端
1. 如果 /workspace/site-factory-repaired 已存在，先检查内容，不要盲删；若需要删除，先说明原因
2. 执行完整克隆：
   - git clone https://github.com/fyrghdyrgh-dot/site-factory /workspace/site-factory-repaired
3. 进入新仓库后检查：
   - git rev-parse --is-shallow-repository
   - git status --short --branch
   - git branch -a
   - git fsck --full --strict
4. 如果新仓库仍然是 shallow，继续补齐历史直到 `git rev-parse --is-shallow-repository` 返回 false

第三阶段：恢复当前分支改动
1. 在新仓库里基于 origin/main 创建恢复分支：
   - git checkout -b trae/agent-4IywCn-recovered origin/main
2. 优先尝试应用 binary diff：
   - git apply --index /workspace/site-factory-trae-agent-4IywCn.diff
3. 如果 diff 无法直接应用，则改用 patch 或人工迁移：
   - git am --3way < /workspace/site-factory-trae-agent-4IywCn.patch
4. 如果 patch 仍失败，就以 /workspace/site-factory 和新仓库逐目录比对，人工迁移有效文件
5. 迁移时遵守：
   - 不要把 .git、缓存、临时构建目录一起复制
   - 保留真正的源码、配置、文档和需要提交的生成结果
   - 不要无故覆盖远端 main 上比当前分支更新的内容

第四阶段：验证恢复结果
1. 运行：
   - git status --short
   - git diff --stat origin/main...HEAD
   - git fsck --full --strict
   - git merge-base origin/main HEAD
2. 确认恢复分支现在是基于 origin/main 的正常分支，而不是无共同祖先的孤立历史
3. 如有必要，整理提交：
   - git add .
   - git commit -m "Recover trae/agent-4IywCn onto fresh clone"

第五阶段：推送验证
1. 先 dry-run：
   - git push --dry-run origin HEAD:refs/heads/trae/agent-4IywCn
2. dry-run 成功后再正式推送：
   - git push -u origin HEAD:refs/heads/trae/agent-4IywCn
3. 如果仍失败，输出完整报错，并继续区分是认证问题、远端仓库问题，还是 patch 迁移残留问题

第六阶段：最终输出要求
1. 明确说明：
   - 备份文件是否生成成功
   - 新仓库是否为完整克隆
   - 恢复分支是否已建立
   - 当前分支相对 origin/main 的差异统计
   - push 是否成功
2. 如果 push 仍失败，给出下一步最小动作，不要泛泛而谈
3. 不要省略任何失败命令的原始错误信息

执行原则：
1. 优先保护当前分支成果，先备份再恢复
2. 不要在坏仓库里做 reset --hard 或强推
3. 不要假设 shallow 仓库可以直接修好
4. 如果遇到冲突，先保住文件，再整理提交历史
```
