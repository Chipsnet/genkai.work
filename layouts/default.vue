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
                        {{ $t("nav_about") }}
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        {{ $t("nav_copyright") }}
                    </b-navbar-item>
                </template>

                <template slot="end">
                    <b-navbar-dropdown label="Language">
                        <b-navbar-item
                            tag="router-link"
                            :to="switchLocalePath('ja')"
                        >
                            日本語
                        </b-navbar-item>
                        <b-navbar-item
                            tag="router-link"
                            :to="switchLocalePath('en')"
                        >
                            English
                        </b-navbar-item>
                    </b-navbar-dropdown>
                </template>
            </b-navbar>
        </template>
        <Nuxt />
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    This Website developed by
                    <a href="https://github.com/Chipsnet" target="_blank"
                        >Minato Minami</a
                    >. <br />
                    This is an Open Source Project. Thanks for all contributers. <br><br>
                    Project Genkai Managed by TeamProjectGenkai and TeamOpenWorld.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    mounted() {
        Typekit.load({ async: true });
    },
};
</script>

<style>
div {
    font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
    font-weight: 600;
    font-style: normal;
}
</style>
