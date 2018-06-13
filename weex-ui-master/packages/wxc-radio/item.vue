<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->

<template>
	<wxc-cell :has-top-border="hasTopBorder" :cell-style="{backgroundColor:backgroundColor}" @wxcCellClicked="wxcCellClicked" :accessible="true" :aria-label="`${brand_name},状态为${checked?'已选中':'未选中'},${disabled?'不可更改':''}`">
		<text :style="{color:color}" class="title-text" slot="title" v-if="ch_name !=null">{{ch_name}}</text>
		<text :style="{color:color}" class="title-text" slot="title" v-if="en_name !=null">{{en_name}}</text>
		<text :style="{color:color}" class="title-text" slot="title" v-if="ch_name ==null">{{brand_name}}</text>

	</wxc-cell>
</template>

<style scoped>
	.radio {
		width: 48px;
		height: 48px;
	}
	
	.title-text {
		width: 170px;
		text-align: center;
		font-size: 30px;
	}
</style>

<script>
	import WxcCell from '../wxc-cell';
	import { CHECKED, DISABLED } from './type.js'

	export default {
		components: { WxcCell },
		props: {
			hasTopBorder: {
				type: Boolean,
				default: false
			},
			ch_name: {
				type: String,
				require: true
			},
			en_name: {
				type: String,
				require: true
			},
			brand_name: {
				type: String,
				require: true
			},
			disabled: {
				type: Boolean,
				default: false
			},
			checked: {
				type: Boolean,
				default: false
			},
			config: {
				type: Object,
				default: () => ({})
			}
		},
		data: () => ({
			icon: [CHECKED, DISABLED]
		}),
		computed: {
			radioIcon() {
				const { icon, disabled, checked, config } = this;
				const mergeIcon = icon;
				config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
				config.disabledIcon && (mergeIcon[1] = config.disabledIcon);
				return checked ? mergeIcon[disabled ? 1 : 0] : '';
			},
			backgroundColor() {
				const { disabled, checked } = this;
				return checked && !disabled ? '#FFFFFF' : '#F8F8F8';
			},
			color() {
				const { disabled, checked, config } = this;
				let checkedColor = '#ec3b79';
				config.checkedColor && (checkedColor = config.checkedColor);
				return checked && !disabled ? checkedColor : '#3D3D3D';
			}
		},
		methods: {
			wxcCellClicked() {
				const { disabled, value } = this;
				if(!disabled) {
					this.$emit('wxcRadioItemChecked', { value, disabled })
				}
			}
		}
	}
</script>