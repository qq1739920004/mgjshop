<template>
	<div class="comment-info">
		<div class="info-header">
			<div class="header-title">用户评价</div>
			<div class="header-more">更多></div>
		</div>
		<div class="info-content" v-if="commentInfo && commentInfo.length">
			<div>
				<div class="user">
					<span>
						<img :src="commentInfo.user.avatar" alt="">
					</span>
					<span class="name">{{commentInfo.user.uname}}</span>
				</div>
				<div class="comment-detail">
					<div class="desc">{{commentInfo.content}}</div>
					<div class="other">
						<span class="date">{{commentInfo.created }}</span>
						<span class="color">{{commentInfo.style}}</span>
					</div>
					<div class="comment-img" v-if="commentInfo.images && commentInfo.images.length">
						<img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt="avatar">
					</div>
				</div>
			</div>
		</div>
		<div v-else>暂时没有评论 ≥Ö‿Ö≤ </div>
	</div>
</template>

<script>
	import {format} from 'components/common/timeformat/timeformat.js'
	export default {
		name: 'detailcomment',
		data(){
			return{
				avatar:null,
			}
		},
		props: {
			commentInfo: {
				type: Object,
				default () {
					return {};
				}
			}
		},
		
		filters: {
			formatDate(date) {
				date = new Date(date * 1000)
				const fmt='yyyy-MM-dd'
				return format(date, fmt)
			}

		}
	}
</script>

<style scoped>
	.comment-info {
		padding: 8px 8px 20px;
		border-bottom: solid 4px rgba(100, 100, 100, .1);
	}

	.info-header {
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 2px solid rgba(100, 100, 100, .1);
	}

	.info-content {
		margin-top: 8px;
	}

	.info-content .user img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.info-content .user .name {
		position: relative;
		top: -15px;
		left: 8px;
	}

	.comment-detail .desc {
		padding: 4px;
		/* text-indent: 2em; */
		color:#2b2b2b;
	}

	.comment-detail .other {
		color:#868686;
	}

	.comment-detail .other span {
		padding: 4px;
	}

	.comment-detail .comment-img {
		display: flex;
	}

	.comment-img img {
		width: 25%;
		padding-right: 6px;
	}
</style>
