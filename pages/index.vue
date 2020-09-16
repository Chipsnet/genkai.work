<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {{ $t("top_message") }}
                    </h1>
                    <h2 class="subtitle">
                        {{ $t("top_subtitle") }}
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container py-6 has-text-centered">
                <h1 class="title mt-6">{{ $t('can_title') }}</h1>
            </div>
        </section>
        <section class="section why">
            <div class="container py-6">
                <h1 class="title mb-5 has-text-white">{{ $t("sec1_title") }}</h1>
                <h2 class="subtitle has-text-white">
                    {{ $t("sec1_content") }}
                </h2>
            </div>
            <div class="container py-6">
                <h1 class="title mb-5 has-text-white">{{ $t("sec2_title") }}</h1>
                <h2 class="subtitle has-text-white">
                    {{ $t("sec2_content") }}
                </h2>
            </div>
        </section>
    </div>
</template>

<style>
h2 {
    white-space: pre-line;
}

.why {
    background: rgb(3, 0, 54);
    background: linear-gradient(
        110deg,
        rgba(3, 0, 54, 1) 0%,
        rgba(9, 9, 121, 1) 58%,
        rgba(0, 212, 255, 1) 100%
    );
}
</style>
