const trainingData = [
    {
        category: '关于管理会计',
        items: [
            {
                question:'管理会计能解决什么问题?',
                answer:'管理会计关注内部经营决策与绩效管理，可支持预算、成本、盈利能力分析与经营改进。'
            },
            {
                question:'为什么需要分部盈利性报告？',
                answer:'用于比较不同产品线/区域/团队的贡献，识别高回报与低回报板块，优化资源配置。'
            }
        ]
    },
    {
        category:'关于全面预算',
        items: [
            {
                question:'全面预算通常包含哪些部分？',
                answer:'常见包含销售、生产/采购、费用、资本开支、现金流及预计财务报表等预算模块。'
            }
        ]
    }
]

function renderTraining() {
    const container = document.getElementById('training-list');
    if (!container) return;

    let html = '';

    trainingData.forEach(group => {
        html += `
        <section class="training-group">
            <h2>${group.category}</h2>
         `;
        
        group.items.forEach(item => {
            html += `
            <div class = "training-item">
                <button class = "training-question" type="button">
                ${item.question}
                </button>
                <div class="training-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
            `;
        });
        html += `</section>`;
    });
    container.innerHTML = html;
}

function expandCollapseTraining(){
    const buttons = document.querySelectorAll('.training-question');

    buttons.forEach(button => {
        button.addEventListener('click',() => {
            const answer = button.nextElementSibling;
            answer.classList.toggle('open');
        });
    });
}

renderTraining();
expandCollapseTraining();