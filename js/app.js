// Training accordion
document.querySelectorAll('[data-qa]').forEach((qa) => {
  const btn = qa.querySelector('button');
  btn?.addEventListener('click', () => {
    qa.classList.toggle('open');
  });
});

// Support chat (preset Q&A + simple user message echo placeholder)
const qaMap = {
  "如何开始免费试用？": "点击“免费试用”，阅读说明后点击“确认试用”，系统将跳转到注册/登录页面。",
  "是否支持全面预算？": "支持。可做全面预算、差异分析、分部盈利性报告等，并提供管理报表。",
  "可以上传视频吗？": "可以。首页视频窗口支持上传并展示一段视频（静态站点示例中用本地文件替代）。",
  "如何联系人工客服？": "你可以在下方输入问题提交。示例里会先记录消息，后端接入后可转人工/AI。"
};

const log = document.querySelector('#chatLog');
const input = document.querySelector('#chatInput');
const sendBtn = document.querySelector('#chatSend');

function addMsg(text, who){
  if(!log) return;
  const div = document.createElement('div');
  div.className = `msg ${who}`;
  div.textContent = text;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

document.querySelectorAll('[data-quick-q]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const q = btn.getAttribute('data-quick-q');
    addMsg(q, 'user');
    addMsg(qaMap[q] || "已收到你的问题，我们会尽快回复。", 'bot');
  });
});

sendBtn?.addEventListener('click', () => {
  const text = input.value.trim();
  if(!text) return;
  addMsg(text, 'user');
  // Placeholder response (replace with real backend / AI later)
  addMsg("已收到你的问题。当前示例为静态页面，接入后端后可转人工或AI解答。", 'bot');
  input.value = "";
});

input?.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') sendBtn?.click();
});