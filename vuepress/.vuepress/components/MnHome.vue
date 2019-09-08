<template>
	<page>
		<mn-section>
			<mn-letter>
				<mn-letter-body>
					<h1>Freshes</h1>
				</mn-letter-body>
			</mn-letter>
		</mn-section>

		<mn-section>
			<mn-card>
				<mn-card-item>
					<mn-card-body>
						<div class="has-six-padding-y">
							<img src="https://raw.githubusercontent.com/HumanUI/vue-human/master/docs/vue-human.jpg" width="320" class="has-block" style="margin: 0 auto;">
            </div>
							<div style="text-align: center;">
								<a href="https://www.npmjs.com/package/vue-human"
									title="npm">
									<img src="https://badge.fury.io/js/vue-human.svg">
              </a>
									<span>
										<img :src="`https://img.shields.io/badge/案例版本-${version}-brightgreen.svg`">
              </span>
										<a href="https://minowu.gitbooks.io/vue-human"
											title="gitbook">
											<img src="https://img.shields.io/badge/gitbook-中文文档-brightgreen.svg">
              </a>
											<a href="https://gitter.im/HumanUI/Lobby"
												title="GITTER">
												<img src="https://img.shields.io/badge/gitter-chat-brightgreen.svg">
              </a>
												<span title="License MIT">
													<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
              </span>
							</div>
							<div style="text-align: center;">
								<a href="https://circleci.com/gh/HumanUI/vue-human/tree/master"
									title="CircleCI">
									<img src="https://circleci.com/gh/HumanUI/vue-human/tree/master.svg?style=svg">
              </a>
							</div>
					</mn-card-body>
				</mn-card-item>
			</mn-card>
		</mn-section>
	</page>
</template>

<script>
// import menu from '../base/menu'
const menu = [
  {
    name: "首页",
    push: { name: "homepage" }
  },
  {
    name: "核心",
    badge: {
      theme: "gray-darkest",
      content: "core",
      size: "sm"
    },
    children: [
      {
        name: "按钮",
        push: { name: "button" }
      },
      {
        name: "图标",
        push: { name: "icon" }
      },
      {
        name: "滚动条",
        push: { name: "scroller" }
      },
      {
        name: "页面容器",
        push: { name: "container" }
      },
      {
        name: "12 列布局",
        push: { name: "column" }
      },
      {
        name: "卡片列表",
        push: { name: "card" },
        badge: {
          content: "H!",
          size: "sm",
          theme: "pink"
        }
      },
      {
        name: "表单与验证",
        push: { name: "form" }
      }
    ]
  },
  {
    name: "控件",
    children: [
      {
        name: "单行文本框",
        push: { name: "input" }
      },
      {
        name: "单选",
        push: { name: "radio" }
      },
      {
        name: "多选",
        push: { name: "check" }
      },
      {
        name: "下拉菜单",
        push: { name: "select" }
      },
      {
        name: "开关",
        push: { name: "turn" }
      },
      {
        name: "多行文本框",
        push: { name: "textarea" }
      },
      {
        name: "计数器",
        push: { name: "counter" }
      },
      {
        name: "日期时间",
        push: { name: "datetime" }
      }
    ]
  },
  {
    name: "浮层",
    children: [
      {
        name: "消息框",
        push: { name: "message" }
      },
      {
        name: "确认框",
        push: { name: "confirm" }
      },
      {
        name: "警告框",
        push: { name: "alert" }
      },
      {
        name: "加载动画",
        push: { name: "loadingMask" }
      },
      {
        name: "模态对话框",
        push: { name: "modal" }
      },
      {
        name: "操作列表",
        push: { name: "actionSheet" }
      }
    ]
  },
  {
    name: "组件库",
    children: [
      {
        name: "图片",
        push: { name: "image" }
      },
      {
        name: "页码",
        push: { name: "paginate" }
      },
      {
        name: "单元列表",
        push: { name: "cell" }
      },
      {
        name: "轮播图",
        push: { name: "carousel" }
      },
      {
        name: "标签",
        push: { name: "tag" }
      },
      {
        name: "搜索条",
        push: { name: "searchBar" }
      },
      {
        name: "评分",
        push: { name: "rate" }
      },
      {
        name: "底部栏",
        push: { name: "tabBar" }
      },
      {
        name: "顶部栏",
        push: { name: "navBar" }
      },
      {
        name: "手风琴",
        push: { name: "menu" }
      },
      {
        name: "表格",
        push: { name: "table" }
      }
    ]
  }
];

export default {
  data() {
    return {
      menu,
      version: 'process.env.VERSION'
    };
  }
};
</script>
