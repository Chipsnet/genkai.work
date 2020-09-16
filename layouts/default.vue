<template>
    <div>
        <template>
            <b-navbar>
                <template slot="brand">
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            src="~/assets/logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                        />
                    </b-navbar-item>
                </template>
                <template slot="start">
                    <b-navbar-item href="#">
                        限界大会とは
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        著作権ポリシー
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-dropdown label="Language">
                        <b-navbar-item>
                            <nuxt-link :to="switchLocalePath('ja')">日本語</nuxt-link>
                        </b-navbar-item>
                        <b-navbar-item href="#">
                            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
                        </b-navbar-item>
                    </b-navbar-dropdown>
                </template>
            </b-navbar>
        </template>
        <Nuxt />
    </div>
</template>
