// 文章列表：新增文章时，在此添加一条，并在 posts/ 下创建对应的 html 文件
const posts = [
  {
    title: "Hello World：博客跑通了",
    file: "posts/hello-world.html",
    date: "2026-09-18",
    summary: "博客的第一篇文章。GitHub Pages + 自定义域名 glamy.cn，流程记录在此。"
  },
  {
    title: "把域名 glamy.cn 绑到 GitHub Pages 的步骤",
    file: "posts/bind-domain.html",
    date: "2026-09-18",
    summary: "阿里云 DNS 解析配置 + GitHub Pages 自定义域名的完整流程。"
  }
];

document.getElementById("post-list").innerHTML = posts
  .map(p => `
    <li>
      <a href="${p.file}">${p.title}</a>
      <span class="post-date">${p.date} · ${p.summary}</span>
    </li>`)
  .join("");
