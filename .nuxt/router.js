import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5b453794 = () => import('..\\pages\\bookmarks.vue' /* webpackChunkName: "pages_bookmarks" */).then(m => m.default || m)
const _28341424 = () => import('..\\pages\\sign-up.vue' /* webpackChunkName: "pages_sign-up" */).then(m => m.default || m)
const _c5795970 = () => import('..\\pages\\follow.vue' /* webpackChunkName: "pages_follow" */).then(m => m.default || m)
const _86df7f8c = () => import('..\\pages\\follow\\index.vue' /* webpackChunkName: "pages_follow_index" */).then(m => m.default || m)
const _d9f9fb90 = () => import('..\\pages\\follow\\specialRecome.vue' /* webpackChunkName: "pages_follow_specialRecome" */).then(m => m.default || m)
const _9fc0222c = () => import('..\\pages\\follow\\authorRecome.vue' /* webpackChunkName: "pages_follow_authorRecome" */).then(m => m.default || m)
const _0d5ad5ac = () => import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */).then(m => m.default || m)
const _62cf7c18 = () => import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */).then(m => m.default || m)
const _204e6bd5 = () => import('..\\pages\\news\\request.vue' /* webpackChunkName: "pages_news_request" */).then(m => m.default || m)
const _bd83117e = () => import('..\\pages\\news\\like.vue' /* webpackChunkName: "pages_news_like" */).then(m => m.default || m)
const _546589db = () => import('..\\pages\\news\\follow.vue' /* webpackChunkName: "pages_news_follow" */).then(m => m.default || m)
const _b0920566 = () => import('..\\pages\\news\\message.vue' /* webpackChunkName: "pages_news_message" */).then(m => m.default || m)
const _d6dcea8c = () => import('..\\pages\\default.vue' /* webpackChunkName: "pages_default" */).then(m => m.default || m)
const _46dbe6fa = () => import('..\\pages\\settings.vue' /* webpackChunkName: "pages_settings" */).then(m => m.default || m)
const _7b669e1f = () => import('..\\pages\\settings\\profile.vue' /* webpackChunkName: "pages_settings_profile" */).then(m => m.default || m)
const _2bafc4b8 = () => import('..\\pages\\settings\\basic.vue' /* webpackChunkName: "pages_settings_basic" */).then(m => m.default || m)
const _2d42efe6 = () => import('..\\pages\\settings\\misc.vue' /* webpackChunkName: "pages_settings_misc" */).then(m => m.default || m)
const _139dbdae = () => import('..\\pages\\sign-in.vue' /* webpackChunkName: "pages_sign-in" */).then(m => m.default || m)
const _1188d1b2 = () => import('..\\pages\\notify\\follows.vue' /* webpackChunkName: "pages_notify_follows" */).then(m => m.default || m)
const _6c6ddbb8 = () => import('..\\pages\\notify\\requests.vue' /* webpackChunkName: "pages_notify_requests" */).then(m => m.default || m)
const _acb1cf2a = () => import('..\\pages\\notify\\chats.vue' /* webpackChunkName: "pages_notify_chats" */).then(m => m.default || m)
const _a8f20f58 = () => import('..\\pages\\notify\\comments.vue' /* webpackChunkName: "pages_notify_comments" */).then(m => m.default || m)
const _3f55cb8c = () => import('..\\pages\\notify\\likes.vue' /* webpackChunkName: "pages_notify_likes" */).then(m => m.default || m)
const _ebfae58a = () => import('..\\pages\\collection\\new.vue' /* webpackChunkName: "pages_collection_new" */).then(m => m.default || m)
const _5dfbd241 = () => import('..\\pages\\note\\_id.vue' /* webpackChunkName: "pages_note__id" */).then(m => m.default || m)
const _764cb855 = () => import('..\\pages\\collection\\_id.vue' /* webpackChunkName: "pages_collection__id" */).then(m => m.default || m)
const _23fe423e = () => import('..\\pages\\p\\_id.vue' /* webpackChunkName: "pages_p__id" */).then(m => m.default || m)
const _991fd708 = () => import('..\\pages\\u\\_id.vue' /* webpackChunkName: "pages_u__id" */).then(m => m.default || m)
const _1092b3a0 = () => import('..\\pages\\users\\_id\\like.vue' /* webpackChunkName: "pages_users__id_like" */).then(m => m.default || m)
const _96ba0448 = () => import('..\\pages\\users\\_id\\followers.vue' /* webpackChunkName: "pages_users__id_followers" */).then(m => m.default || m)
const _50979e67 = () => import('..\\pages\\users\\_id\\collection.vue' /* webpackChunkName: "pages_users__id_collection" */).then(m => m.default || m)
const _fe812350 = () => import('..\\pages\\users\\_id\\following.vue' /* webpackChunkName: "pages_users__id_following" */).then(m => m.default || m)
const _1ce75dea = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/bookmarks",
			component: _5b453794,
			name: "bookmarks"
		},
		{
			path: "/sign-up",
			component: _28341424,
			name: "sign-up"
		},
		{
			path: "/follow",
			component: _c5795970,
			children: [
				{
					path: "",
					component: _86df7f8c,
					name: "follow"
				},
				{
					path: "specialRecome",
					component: _d9f9fb90,
					name: "follow-specialRecome"
				},
				{
					path: "authorRecome",
					component: _9fc0222c,
					name: "follow-authorRecome"
				}
			]
		},
		{
			path: "/news",
			component: _0d5ad5ac,
			children: [
				{
					path: "",
					component: _62cf7c18,
					name: "news"
				},
				{
					path: "request",
					component: _204e6bd5,
					name: "news-request"
				},
				{
					path: "like",
					component: _bd83117e,
					name: "news-like"
				},
				{
					path: "follow",
					component: _546589db,
					name: "news-follow"
				},
				{
					path: "message",
					component: _b0920566,
					name: "news-message"
				}
			]
		},
		{
			path: "/default",
			component: _d6dcea8c,
			name: "default"
		},
		{
			path: "/settings",
			component: _46dbe6fa,
			name: "settings",
			children: [
				{
					path: "profile",
					component: _7b669e1f,
					name: "settings-profile"
				},
				{
					path: "basic",
					component: _2bafc4b8,
					name: "settings-basic"
				},
				{
					path: "misc",
					component: _2d42efe6,
					name: "settings-misc"
				}
			]
		},
		{
			path: "/sign-in",
			component: _139dbdae,
			name: "sign-in"
		},
		{
			path: "/notify/follows",
			component: _1188d1b2,
			name: "notify-follows"
		},
		{
			path: "/notify/requests",
			component: _6c6ddbb8,
			name: "notify-requests"
		},
		{
			path: "/notify/chats",
			component: _acb1cf2a,
			name: "notify-chats"
		},
		{
			path: "/notify/comments",
			component: _a8f20f58,
			name: "notify-comments"
		},
		{
			path: "/notify/likes",
			component: _3f55cb8c,
			name: "notify-likes"
		},
		{
			path: "/collection/new",
			component: _ebfae58a,
			name: "collection-new"
		},
		{
			path: "/note/:id?",
			component: _5dfbd241,
			name: "note-id"
		},
		{
			path: "/collection/:id?",
			component: _764cb855,
			name: "collection-id"
		},
		{
			path: "/p/:id?",
			component: _23fe423e,
			name: "p-id"
		},
		{
			path: "/u/:id?",
			component: _991fd708,
			name: "u-id"
		},
		{
			path: "/users/:id?/like",
			component: _1092b3a0,
			name: "users-id-like"
		},
		{
			path: "/users/:id?/followers",
			component: _96ba0448,
			name: "users-id-followers"
		},
		{
			path: "/users/:id?/collection",
			component: _50979e67,
			name: "users-id-collection"
		},
		{
			path: "/users/:id?/following",
			component: _fe812350,
			name: "users-id-following"
		},
		{
			path: "/",
			component: _1ce75dea,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
